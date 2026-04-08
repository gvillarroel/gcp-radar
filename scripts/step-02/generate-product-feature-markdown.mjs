#!/usr/bin/env zx
import crypto from "node:crypto";
import os from "node:os";
import { execFile, spawn, spawnSync } from "node:child_process";
import { access, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { promisify } from "node:util";

$.quote = quote;

const execFileAsync = promisify(execFile);

const promptVersion = "step-02-v2";
const inputParquet = path.resolve("data/step-01/raw/google_cloud_release_notes/current/release_notes.parquet");
const outputRoot = path.resolve(process.env.GCP_RADAR_STEP02_OUTPUT_ROOT || "data/step-02/current");
const outputName = path.basename(outputRoot);
const stateRoot = path.resolve(process.env.GCP_RADAR_STEP02_STATE_ROOT || path.join("data/step-02/.state", outputName));
const productsDir = outputRoot;
const cacheDir = stateRoot;
const cacheFile = path.join(cacheDir, "assistant-results.json");
const stateFile = path.join(cacheDir, "product-state.json");
const indexFile = path.join(outputRoot, "index.md");
const maxRows = Number(process.env.GCP_RADAR_STEP02_MAX_ROWS || 0);
const piModel = process.env.GCP_RADAR_STEP02_PI_MODEL || "openai-codex/gpt-5.3-codex-spark";
const detectedParallelism = os.availableParallelism?.() ?? os.cpus().length;
const defaultMaxConcurrency = Math.min(12, Math.max(4, Math.floor(detectedParallelism * 0.75)));
const maxConcurrency = Number(process.env.GCP_RADAR_STEP02_MAX_CONCURRENCY || defaultMaxConcurrency);
const batchSize = Number(process.env.GCP_RADAR_STEP02_BATCH_SIZE || 12);
const piRequestTimeoutMs = Number(process.env.GCP_RADAR_STEP02_PI_REQUEST_TIMEOUT_MS || 300000);
const productFilter = (process.env.GCP_RADAR_STEP02_PRODUCTS || "")
  .split(",")
  .map((value) => value.trim())
  .filter(Boolean);

const piSystemPrompt = [
  "You extract structured feature lifecycle events from Google Cloud release-note entries for one product.",
  "Return JSON only.",
  "Return an array of objects with exactly these keys: row_id, feature_name, feature_summary, event_type, deprecation_date.",
  "Rules:",
  "- event_type must be FEATURE or DEPRECATION.",
  "- Return one object per distinct feature mentioned in the entry.",
  "- If an entry mentions multiple distinct features, return multiple objects.",
  "- feature_name must be a stable canonical feature name, not a sentence fragment.",
  "- feature_summary must be one concise sentence describing the feature itself.",
  "- For DEPRECATION events, deprecation_date must be the explicit date if present, otherwise the row published_at date.",
  "- For FEATURE events, deprecation_date must be an empty string.",
  "- Ignore product-wide prose that does not identify a distinct feature or capability.",
].join(" ");

async function ensureDirectories() {
  await mkdir(productsDir, { recursive: true });
  await mkdir(cacheDir, { recursive: true });
}

async function exists(target) {
  try {
    await access(target);
    return true;
  } catch {
    return false;
  }
}

async function countFeaturesInMarkdown(file) {
  const content = await readFile(file, "utf8");
  return content
    .split("\n")
    .filter((line) => line.startsWith("| ") && !line.startsWith("| Latest") && !line.startsWith("| ---"))
    .length;
}

function parseParquetRows() {
  const code = [
    "import json",
    "import sys",
    "import pyarrow.parquet as pq",
    "",
    "table = pq.read_table(sys.argv[1], columns=[",
    "    'description',",
    "    'release_note_type',",
    "    'published_at',",
    "    'product_id',",
    "    'product_name',",
    "    'product_version_name',",
    "])",
    "print(json.dumps(table.to_pylist(), default=str))",
  ].join("\n");

  const result = spawnSync("python", ["-c", code, inputParquet], {
    encoding: "utf8",
    maxBuffer: 1024 * 1024 * 256,
  });

  if (result.status !== 0) {
    throw new Error(result.stderr.trim() || "python parquet read failed");
  }

  return JSON.parse(result.stdout);
}

async function readRowsFromParquet() {
  const rows = parseParquetRows()
    .filter((row) => row.product_name && row.description)
    .filter((row) => ["FEATURE", "DEPRECATION"].includes(row.release_note_type));

  const filtered = productFilter.length > 0
    ? rows.filter((row) => productFilter.includes(row.product_name))
    : rows;

  return filtered
    .sort((a, b) => {
      const byProduct = (a.product_name || "").localeCompare(b.product_name || "");
      if (byProduct !== 0) {
        return byProduct;
      }

      return String(b.published_at || "").localeCompare(String(a.published_at || ""));
    })
    .slice(0, maxRows > 0 ? maxRows : undefined);
}

async function readCache() {
  try {
    return JSON.parse(await readFile(cacheFile, "utf8"));
  } catch {
    return {};
  }
}

async function writeCache(cache) {
  await writeFile(cacheFile, `${JSON.stringify(cache, null, 2)}\n`);
}

async function readProductState() {
  try {
    const parsed = JSON.parse(await readFile(stateFile, "utf8"));
    if (parsed && typeof parsed === "object" && parsed.products && typeof parsed.products === "object") {
      return parsed;
    }
  } catch {
    // Fall through to default state.
  }

  return {
    version: 1,
    products: {},
  };
}

async function writeProductState(state) {
  await writeFile(stateFile, `${JSON.stringify(state, null, 2)}\n`);
}

async function hasPi() {
  return (await $({ quiet: true, nothrow: true })`pi --version`).exitCode === 0;
}

function decodeEntities(text) {
  return text
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&#39;/g, "'")
    .replace(/&quot;/g, "\"");
}

function cleanDescription(text) {
  return decodeEntities(text || "")
    .replace(/<code>(.*?)<\/code>/gis, (_, code) => ` ${decodeEntities(code)} `)
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function hashInput(value) {
  return crypto.createHash("sha256").update(value).digest("hex");
}

function cacheKeyForRow(row) {
  return hashInput(JSON.stringify({
    prompt_version: promptVersion,
    product_name: row.product_name,
    product_version_name: row.product_version_name,
    release_note_type: row.release_note_type,
    published_at: row.published_at,
    description: row.description,
  }));
}

function rowIdsForProduct(productRows) {
  return productRows
    .map((row) => cacheKeyForRow(row))
    .sort();
}

function signatureForRowIds(rowIds) {
  return hashInput(JSON.stringify(rowIds));
}

function rowForPrompt(row) {
  return {
    row_id: cacheKeyForRow(row),
    published_at: String(row.published_at || ""),
    release_note_type: row.release_note_type,
    description: cleanDescription(row.description).slice(0, 2000),
  };
}

function chunk(items, size) {
  const chunks = [];

  for (let index = 0; index < items.length; index += size) {
    chunks.push(items.slice(index, index + size));
  }

  return chunks;
}

async function runPiExtraction(productName, rows) {
  const prompt = [
    `Product: ${productName}`,
    "Rows:",
    JSON.stringify(rows.map(rowForPrompt)),
  ].join("\n\n");

  const promptFile = path.join(cacheDir, `pi-batch-${hashInput(`${productName}:${rows.map(cacheKeyForRow).join(",")}`)}.txt`);
  await writeFile(promptFile, prompt, "utf8");

  const script = [
    "$ProgressPreference = 'SilentlyContinue'",
    `Get-Content "${promptFile.replace(/\\/g, "\\\\")}" -Raw | pi -p --no-session --model "${piModel}" --system-prompt @'`,
    piSystemPrompt,
    "'@",
  ].join("\n");

  const encodedCommand = Buffer.from(script, "utf16le").toString("base64");
  const result = await new Promise((resolve, reject) => {
    const child = spawn("powershell", ["-NoProfile", "-EncodedCommand", encodedCommand], {
      stdio: ["ignore", "pipe", "pipe"],
      windowsHide: true,
    });

    let stdout = "";
    let stderr = "";
    let settled = false;

    const timeoutHandle = setTimeout(async () => {
      if (settled) {
        return;
      }

      settled = true;
      await execFileAsync("taskkill", ["/PID", String(child.pid), "/T", "/F"], {
        windowsHide: true,
      }).catch(() => null);
      reject(new Error(`pi request timed out after ${piRequestTimeoutMs} ms`));
    }, piRequestTimeoutMs);

    child.stdout.setEncoding("utf8");
    child.stderr.setEncoding("utf8");
    child.stdout.on("data", (chunk) => {
      stdout += chunk;
    });
    child.stderr.on("data", (chunk) => {
      stderr += chunk;
    });
    child.on("error", (error) => {
      if (settled) {
        return;
      }

      settled = true;
      clearTimeout(timeoutHandle);
      reject(error);
    });
    child.on("close", (code) => {
      if (settled) {
        return;
      }

      settled = true;
      clearTimeout(timeoutHandle);
      if (code !== 0) {
        reject(new Error(stderr.trim() || `powershell exited with code ${code}`));
        return;
      }

      resolve({ stdout, stderr });
    });
  }).finally(async () => {
    await rm(promptFile, { force: true });
  });

  const parsed = JSON.parse(result.stdout.trim());
  if (!Array.isArray(parsed)) {
    throw new Error("pi response must be an array");
  }

  return parsed;
}

async function extractBatchWithRetry(productName, rows) {
  try {
    return await runPiExtraction(productName, rows);
  } catch (error) {
    if (rows.length === 1) {
      throw new Error(`${productName}: ${error.message}`);
    }

    const midpoint = Math.ceil(rows.length / 2);
    const left = await extractBatchWithRetry(productName, rows.slice(0, midpoint));
    const right = await extractBatchWithRetry(productName, rows.slice(midpoint));
    return [...left, ...right];
  }
}

async function mapWithConcurrency(items, concurrency, worker) {
  let nextIndex = 0;

  async function runWorker() {
    while (nextIndex < items.length) {
      const currentIndex = nextIndex;
      nextIndex += 1;
      await worker(items[currentIndex], currentIndex);
    }
  }

  const workerCount = Math.max(1, Math.min(concurrency, items.length || 1));
  await Promise.all(Array.from({ length: workerCount }, () => runWorker()));
}

function groupByProduct(rows) {
  const grouped = new Map();

  for (const row of rows) {
    if (!grouped.has(row.product_name)) {
      grouped.set(row.product_name, []);
    }

    grouped.get(row.product_name).push(row);
  }

  return [...grouped.entries()].sort((a, b) => a[0].localeCompare(b[0]));
}

async function extractEventsForProduct(productName, productRows, cache) {
  const uncached = productRows.filter((row) => !cache[cacheKeyForRow(row)]);
  const batches = chunk(uncached, batchSize);

  await mapWithConcurrency(batches, maxConcurrency, async (batch) => {
    const extracted = await extractBatchWithRetry(productName, batch);
    const groupedByRow = new Map(batch.map((row) => [cacheKeyForRow(row), []]));

    for (const item of extracted) {
      const rowId = String(item.row_id || "").trim();
      if (!groupedByRow.has(rowId)) {
        continue;
      }

      groupedByRow.get(rowId).push({
        row_id: rowId,
        feature_name: String(item.feature_name || "").trim(),
        feature_summary: String(item.feature_summary || "").trim(),
        event_type: String(item.event_type || "").trim(),
        deprecation_date: String(item.deprecation_date || "").trim(),
      });
    }

    for (const row of batch) {
      const rowId = cacheKeyForRow(row);
      cache[rowId] = {
        backend: "pi",
        events: (groupedByRow.get(rowId) || []).filter((event) => event.feature_name && event.event_type),
      };
    }

    await writeCache(cache);
  });
}

function normalizeFeatureName(name) {
  return name
    .toLowerCase()
    .replace(/\([^)]*\)/g, " ")
    .replace(/[^a-z0-9]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function cloneEvent(event, overrides = {}) {
  return {
    row_id: event.row_id,
    feature_name: event.feature_name,
    feature_summary: event.feature_summary,
    event_type: event.event_type,
    deprecation_date: event.deprecation_date,
    ...overrides,
  };
}

function splitCompoundModelFeatureNames(name) {
  const trimmed = String(name || "").trim();
  if (!trimmed) {
    return [];
  }

  const modelGardenSuffixMatch = trimmed.match(/\s+in\s+Model\s+Garden(?:\s+MaaS)?$/i);
  const suffix = modelGardenSuffixMatch ? modelGardenSuffixMatch[0] : "";
  const stem = suffix ? trimmed.slice(0, -suffix.length).trim() : trimmed;

  if (/,/.test(stem)) {
    const parts = stem
      .split(/\s*,\s*|\s*,\s*and\s+|\s+and\s+/i)
      .map((value) => value.trim())
      .filter(Boolean);

    if (parts.length > 1) {
      return parts.map((part) => `${part}${suffix}`);
    }
  }

  if (/\bQwen3 Coder and Qwen3 235B\b/i.test(trimmed)) {
    return [`Qwen3 Coder${suffix}`, `Qwen3 235B${suffix}`];
  }

  return [];
}

function normalizeExtractedEvents(events) {
  const normalized = [];

  for (const event of events) {
    const splitNames = splitCompoundModelFeatureNames(event.feature_name);
    if (splitNames.length > 0) {
      normalized.push(...splitNames.map((featureName) => cloneEvent(event, { feature_name: featureName })));
      continue;
    }

    normalized.push(event);
  }

  return normalized;
}

function buildFeatureList(productRows, cache) {
  const features = new Map();

  for (const row of productRows) {
    const cached = cache[cacheKeyForRow(row)];
    const events = normalizeExtractedEvents(cached?.events || []);

    for (const event of events) {
      const normalized = normalizeFeatureName(event.feature_name);
      if (!normalized) {
        continue;
      }

      if (!features.has(normalized)) {
        features.set(normalized, {
          feature_name: event.feature_name,
          feature_summary: event.feature_summary,
          latest_feature_date: "",
          latest_event_date: "",
          deprecation_date: "",
          source_event_count: 0,
          aliases: [],
          event_summaries: [],
        });
      }

      const feature = features.get(normalized);
      const publishedAt = String(row.published_at || "");
      feature.source_event_count += 1;
      if (!feature.aliases.includes(event.feature_name)) {
        feature.aliases.push(event.feature_name);
      }
      feature.event_summaries.push({
        published_at: publishedAt,
        event_type: event.event_type,
        feature_name: event.feature_name,
        feature_summary: event.feature_summary,
        deprecation_date: event.deprecation_date,
      });

      if (!feature.latest_event_date || publishedAt > feature.latest_event_date) {
        feature.latest_event_date = publishedAt;
      }

      if (event.event_type === "FEATURE" && (!feature.latest_feature_date || publishedAt > feature.latest_feature_date)) {
        feature.latest_feature_date = publishedAt;
        feature.feature_name = event.feature_name;
        feature.feature_summary = event.feature_summary;
      }

      if (!feature.feature_summary && event.feature_summary) {
        feature.feature_summary = event.feature_summary;
      }

      if (event.deprecation_date && (!feature.deprecation_date || event.deprecation_date > feature.deprecation_date)) {
        feature.deprecation_date = event.deprecation_date;
      }
    }
  }

  return [...features.values()]
    .sort((a, b) => {
      const dateA = a.latest_feature_date || a.latest_event_date;
      const dateB = b.latest_feature_date || b.latest_event_date;
      if (dateA !== dateB) {
        return dateB.localeCompare(dateA);
      }

      return a.feature_name.localeCompare(b.feature_name);
    });
}

function simplifyCanonicalText(text) {
  return text
    .toLowerCase()
    .replace(/\bvertex ai\b/g, "")
    .replace(/\banthropic\b/g, "")
    .replace(/\bmodel garden\b/g, "")
    .replace(/\bmaas\b/g, "")
    .replace(/\bin model garden\b/g, "")
    .replace(/\bon model garden\b/g, "")
    .replace(/\bprivate service connect\b/g, "psc")
    .replace(/\bpsc-i\b/g, "psc interface")
    .replace(/\bagent-to-agent\b/g, "a2a")
    .replace(/\bcustomer-managed encryption keys\b/g, "cmek")
    .replace(/\bcustomer managed encryption keys\b/g, "cmek")
    .replace(/\bhipaa workload support\b/g, "hipaa support")
    .replace(/\bgpu vm reservations?\b/g, "compute engine reservations")
    .replace(/\bvm reservations?\b/g, "compute engine reservations")
    .replace(/\bcustom training and prediction\b/g, "training and prediction")
    .replace(/\bfor vertex ai jobs\b/g, "for training and prediction")
    .replace(/\bfor vertex ai custom training and prediction\b/g, "for training and prediction")
    .replace(/\bresource-based scheduling\b/g, "resource aware scheduling")
    .replace(/\bcopy across projects\b/g, "cross project copy")
    .replace(/\bcross-project copy\b/g, "cross project copy")
    .replace(/\bcross project model copy\b/g, "cross project copy")
    .replace(/\bmodel copy across projects\b/g, "cross project copy")
    .replace(/\bcross project copy in\b/g, "cross project copy")
    .replace(/\bcross project model registry copy\b/g, "cross project copy model registry")
    .replace(/\bmemory bank tab\b/g, "memory bank")
    .replace(/\baxolotl docker\b/g, "axolotl")
    .replace(/\bwith axolotl\b/g, "")
    .replace(/\bauto[- ]tuning\b/g, "auto tuned configuration")
    .replace(/\bauto[- ]tuned\b/g, "auto tuned")
    .replace(/\bmodels in\b/g, "")
    .replace(/\bin\b/g, " ")
    .replace(/\([^)]*\)/g, " ")
    .replace(/[^a-z0-9]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function normalizeModelKey(name) {
  return simplifyCanonicalText(name)
    .replace(/\bmodels?\b/g, " ")
    .replace(/\bavailable\b/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function canonicalMergeKey(feature) {
  const text = simplifyCanonicalText(`${feature.feature_name} ${feature.feature_summary}`);

  if (/\bdeepseek\b|\bgemma\b|\bwan\b|\bqwen\d*\b|\bgpt oss\b|\bembeddinggemma\b|\bmedgemma\b|\bmedsiglip\b|\bt5gemma\b|\bclaude\b|\bmistral nemo\b|\bsea lion\b/.test(text)) {
    return `model:${normalizeModelKey(feature.feature_name)}`;
  }

  if (text.includes("agent engine") && text.includes("a2a")) {
    return "feature:agent engine a2a protocol support";
  }
  if (text.includes("agent engine") && text.includes("bidirectional streaming")) {
    return "feature:agent engine bidirectional streaming";
  }
  if (text.includes("agent engine") && text.includes("code execution")) {
    return "feature:agent engine code execution";
  }
  if (text.includes("agent engine") && text.includes("memory bank")) {
    return "feature:agent engine memory bank";
  }
  if (text.includes("agent engine") && text.includes("cmek")) {
    return "feature:agent engine cmek";
  }
  if (text.includes("agent engine") && text.includes("customized resource controls")) {
    return "feature:agent engine customized resource controls";
  }
  if (text.includes("agent engine") && text.includes("hipaa support")) {
    return "feature:agent engine hipaa support";
  }
  if (text.includes("agent engine") && text.includes("psc interface")) {
    return "feature:agent engine psc interface";
  }
  if (text.includes("compute engine reservations") && text.includes("training and prediction")) {
    return "feature:compute engine reservations for training and prediction";
  }

  if (text.includes("dedicated public endpoints") && text.includes("prediction")) {
    return "feature:vertex ai prediction dedicated public endpoints";
  }

  if ((text.includes("psc endpoints") || text.includes("private service connect endpoints")) && text.includes("prediction")) {
    return "feature:vertex ai prediction psc endpoints";
  }
  if (text.includes("private dns peering") && text.includes("pipelines")) {
    return "feature:psc interface for pipelines";
  }
  if (text.includes("private dns peering") && text.includes("training")) {
    return "feature:psc interface for training";
  }

  if (text.includes("cross project copy") && text.includes("model registry")) {
    return "feature:cross project model copy in model registry";
  }
  if (text.includes("cross project copy") && text.includes("gemini") && text.includes("adapter")) {
    return "feature:cross project model copy in model registry";
  }

  if (text.includes("spot vms") && text.includes("training and prediction")) {
    return "feature:spot vms for training and prediction";
  }

  if (text.includes("resource aware scheduling") && text.includes("custom training")) {
    return "feature:resource aware scheduling for custom training";
  }
  if (text.includes("resource availability") && text.includes("custom training")) {
    return "feature:resource aware scheduling for custom training";
  }

  if (text.includes("sdk generative ai module")) {
    return "feature:vertex ai sdk generative ai module";
  }
  if (text.includes("generative ai module") && text.includes("sdk")) {
    return "feature:vertex ai sdk generative ai module";
  }
  if (text.includes("ray cluster autoscaling")) {
    return "feature:ray cluster autoscaling";
  }
  if (text.includes("storage optimized vector search")) {
    return "feature:storage optimized vector search";
  }
  if (text.includes("vector search auto tuned configuration")) {
    return "feature:storage optimized vector search";
  }
  if (text.includes("vector search") && text.includes("auto tuned") && text.includes("storage optimized")) {
    return "feature:storage optimized vector search";
  }
  if (text.includes("cross project copy") && text.includes("registry")) {
    return "feature:cross project model copy in model registry";
  }
  if (text.includes("model registry") && text.includes("models across different projects")) {
    return "feature:cross project model copy in model registry";
  }

  return `feature:${simplifyCanonicalText(feature.feature_name)}`;
}

function featureNameScore(name) {
  const text = name.trim();
  let score = 0;
  if (/\bvertex ai\b/i.test(text)) score += 3;
  if (/\bmodel garden\b/i.test(text)) score -= 2;
  if (/\bmaas\b/i.test(text)) score -= 2;
  if (/\([^)]*\)/.test(text)) score -= 1;
  score -= Math.max(0, text.length - 40) / 20;
  return score;
}

function chooseCanonicalFeatureName(feature) {
  return [...feature.aliases]
    .sort((a, b) => {
      const scoreDiff = featureNameScore(b) - featureNameScore(a);
      if (scoreDiff !== 0) {
        return scoreDiff;
      }

      return a.localeCompare(b);
    })[0] || feature.feature_name;
}

function combineFeatureSummaries(feature) {
  const ordered = [...feature.event_summaries]
    .sort((a, b) => {
      if (a.published_at !== b.published_at) {
        return b.published_at.localeCompare(a.published_at);
      }
      return a.feature_name.localeCompare(b.feature_name);
    });

  const uniqueSummaries = [];
  for (const event of ordered) {
    const summary = String(event.feature_summary || "").trim();
    if (summary && !uniqueSummaries.includes(summary)) {
      uniqueSummaries.push(summary.replace(/[.]$/, ""));
    }
  }

  const parts = uniqueSummaries.slice(0, 2);
  let summary = parts.join("; ");
  if (!summary) {
    summary = String(feature.feature_summary || "").trim().replace(/[.]$/, "");
  }

  if (feature.deprecation_date) {
    summary = `${summary}; deprecated on ${feature.deprecation_date}`;
  }

  summary = summary.trim();
  if (!/[.!?]$/.test(summary)) {
    summary = `${summary}.`;
  }

  return summary.charAt(0).toUpperCase() + summary.slice(1);
}

function consolidateFeatureList(features) {
  const groups = new Map();

  for (const feature of features) {
    const key = canonicalMergeKey(feature);
    if (!groups.has(key)) {
      groups.set(key, {
        feature_name: feature.feature_name,
        feature_summary: feature.feature_summary,
        latest_feature_date: feature.latest_feature_date,
        latest_event_date: feature.latest_event_date,
        deprecation_date: feature.deprecation_date,
        aliases: [...feature.aliases],
        event_summaries: [...feature.event_summaries],
      });
      continue;
    }

    const current = groups.get(key);
    current.aliases.push(...feature.aliases);
    current.event_summaries.push(...feature.event_summaries);
    if (!current.latest_feature_date || (feature.latest_feature_date && feature.latest_feature_date > current.latest_feature_date)) {
      current.latest_feature_date = feature.latest_feature_date;
    }
    if (!current.latest_event_date || (feature.latest_event_date && feature.latest_event_date > current.latest_event_date)) {
      current.latest_event_date = feature.latest_event_date;
    }
    if (!current.deprecation_date || (feature.deprecation_date && feature.deprecation_date > current.deprecation_date)) {
      current.deprecation_date = feature.deprecation_date;
    }
  }

  return [...groups.values()]
    .map((feature) => {
      feature.aliases = [...new Set(feature.aliases)];
      feature.feature_name = chooseCanonicalFeatureName(feature);
      feature.feature_summary = combineFeatureSummaries(feature);
      return feature;
    })
    .sort((a, b) => {
      const dateA = a.latest_feature_date || a.latest_event_date;
      const dateB = b.latest_feature_date || b.latest_event_date;
      if (dateA !== dateB) {
        return dateB.localeCompare(dateA);
      }

      return a.feature_name.localeCompare(b.feature_name);
    });
}

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .replace(/-{2,}/g, "-");
}

function sanitizeTableCell(text) {
  return String(text || "").replace(/\|/g, "\\|").replace(/\r?\n/g, " ").trim();
}

function buildProductStateEntry(productRows, features, rowIds, markdown) {
  return {
    row_count: productRows.length,
    row_ids: rowIds,
    row_signature: signatureForRowIds(rowIds),
    feature_count: features.length,
    markdown_hash: hashInput(markdown),
    updated_at: new Date().toISOString(),
  };
}

function hasCurrentProductState(productState, productName, rowIds) {
  const current = productState.products?.[productName];
  if (!current) {
    return false;
  }

  return current.row_signature === signatureForRowIds(rowIds);
}

function buildProductMarkdown(productName, productRows, features, slug) {
  const lines = [
    `# ${productName}`,
    "",
    "Generated from the canonical Step 01 Google Cloud release-notes Parquet snapshot.",
    "",
    "The table below contains deduplicated product features ordered from newest to oldest by the latest feature event. Deprecation dates are included when a matching deprecation event was found.",
    "",
    `Source rows considered: ${productRows.length}`,
    `Unique features: ${features.length}`,
    "",
    "| Latest feature date | Feature | Deprecation date | Summary |",
    "| --- | --- | --- | --- |",
  ];

  for (const feature of features) {
    lines.push(`| ${sanitizeTableCell(feature.latest_feature_date || feature.latest_event_date)} | ${sanitizeTableCell(feature.feature_name)} | ${sanitizeTableCell(feature.deprecation_date)} | ${sanitizeTableCell(feature.feature_summary)} |`);
  }

  lines.push("");
  lines.push(`Source file slug: \`${slug}.md\``);
  lines.push("");
  return `${lines.join("\n")}\n`;
}

function buildIndexMarkdown(products) {
  const lines = [
    "# Step 02 Product Feature Markdown",
    "",
    "This index lists the generated Step 02 markdown files derived from the canonical Step 01 release-note dataset.",
    "",
    "Inference backend: pi",
    "",
    `Product count: ${products.length}`,
    "",
    "| Product | Source rows | Unique features | Markdown |",
    "| --- | ---: | ---: | --- |",
  ];

  for (const product of products) {
    lines.push(`| ${sanitizeTableCell(product.name)} | ${product.sourceRowCount} | ${product.featureCount} | [${product.slug}.md](${product.slug}.md) |`);
  }

  lines.push("");
  return `${lines.join("\n")}\n`;
}

async function main() {
  await ensureDirectories();

  if (!(await hasPi())) {
    throw new Error("pi is required for Step 02 inference but is not available in PATH");
  }

  const cache = await readCache();
  const productState = await readProductState();
  const rows = await readRowsFromParquet();
  const groupedProducts = groupByProduct(rows);

  const products = [];
  let skippedProducts = 0;
  let renderedProducts = 0;
  let extractedRowCount = 0;

  for (const [productName, productRows] of groupedProducts) {
    const slug = slugify(productName);
    const productFile = path.join(productsDir, `${slug}.md`);
    const rowIds = rowIdsForProduct(productRows);
    const allRowsCached = productRows.every((row) => Boolean(cache[cacheKeyForRow(row)]));
    const productStateIsCurrent = hasCurrentProductState(productState, productName, rowIds);

    if (allRowsCached && productStateIsCurrent && await exists(productFile)) {
      const stateEntry = productState.products[productName];
      products.push({
        name: productName,
        slug,
        sourceRowCount: productRows.length,
        featureCount: stateEntry.feature_count ?? await countFeaturesInMarkdown(productFile),
      });
      skippedProducts += 1;
      continue;
    }

    const uncachedCount = productRows.filter((row) => !cache[cacheKeyForRow(row)]).length;
    await extractEventsForProduct(productName, productRows, cache);
    extractedRowCount += uncachedCount;
    const rawFeatures = buildFeatureList(productRows, cache);
    const features = consolidateFeatureList(rawFeatures);
    const markdown = buildProductMarkdown(productName, productRows, features, slug);
    const previousEntry = productState.products[productName];
    const currentMarkdownHash = hashInput(markdown);

    if (!previousEntry || previousEntry.markdown_hash !== currentMarkdownHash || !await exists(productFile)) {
      await writeFile(productFile, markdown);
    }

    productState.products[productName] = buildProductStateEntry(productRows, features, rowIds, markdown);
    await writeCache(cache);
    await writeProductState(productState);
    products.push({
      name: productName,
      slug,
      sourceRowCount: productRows.length,
      featureCount: features.length,
    });
    renderedProducts += 1;
  }

  await writeCache(cache);
  await writeProductState(productState);
  await writeFile(indexFile, buildIndexMarkdown(products));

  console.log(JSON.stringify({
    input_parquet: inputParquet,
    output_root: outputRoot,
    product_count: products.length,
    backend: "pi",
    pi_model: piModel,
    detected_parallelism: detectedParallelism,
    default_max_concurrency: defaultMaxConcurrency,
    max_concurrency: maxConcurrency,
    batch_size: batchSize,
    pi_request_timeout_ms: piRequestTimeoutMs,
    max_rows: maxRows || null,
    products_filter: productFilter,
    cache_file: cacheFile,
    state_file: stateFile,
    index_file: indexFile,
    skipped_products: skippedProducts,
    rendered_products: renderedProducts,
    extracted_rows: extractedRowCount,
  }, null, 2));
}

await main();
