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
const derivationVersion = "step-02-v27";
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

function isGenericAvailabilitySummary(featureName, summary) {
  const escapedName = String(featureName || "").trim().replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  if (!escapedName) {
    return false;
  }
  return new RegExp(`^${escapedName}\\s+(?:is|became|was|entered)\\b`, "i").test(String(summary || "").trim())
    || /\bis available in preview\b/i.test(String(summary || ""))
    || /\bis generally available\b/i.test(String(summary || ""))
    || /\bbecame generally available\b/i.test(String(summary || ""));
}

function isObviousSplitFragmentFeature(featureName) {
  const name = String(featureName || "").trim();
  if (!name) {
    return true;
  }

  if (/^and\s+/i.test(name)) {
    return true;
  }

  if (/^(?:v)?\d+(?:\.\d+){1,5}(?:[-+][A-Za-z0-9.]+)?$/i.test(name)) {
    return true;
  }

  if (/^\d+\s+[A-Za-z]+$/i.test(name)) {
    return true;
  }

  return false;
}

function isTutorialOrGuidanceFeature(featureName, featureSummary) {
  const text = String(featureName || "").trim();
  return /\bquick start\b/i.test(text)
    || /\bquickstart\b/i.test(text)
    || /\btutorial\b/i.test(text)
    || /\bguidance\b/i.test(text)
    || /\bsetup guidance\b/i.test(text)
    || /\breference architecture\b/i.test(text);
}

function isAccessTransparencySupportRelationship(featureName, featureSummary) {
  const name = String(featureName || "").trim();
  const summary = String(featureSummary || "").trim();
  if (!name) {
    return false;
  }

  return /\baccess transparency\b.*\b(?:supports?|supported|supporting|available for use in|available in|available as)\b/i.test(summary)
    || /\baccess transparency\b.*\b(?:supports?|supported|supporting|available for use in|available in|available as)\b/i.test(name);
}

function refineFeatureForProduct(productName, feature) {
  if (productName !== "Access Approval") {
    const name = String(feature.feature_name || "").trim();
    const summary = String(feature.feature_summary || "").trim();

    if (isObviousSplitFragmentFeature(name)) {
      return null;
    }

    if (isTutorialOrGuidanceFeature(name, summary)) {
      return null;
    }

    if (productName === "Anthos Config Management") {
      if (/hidden git metadata directory ignore list/i.test(name)
        || (/\.github\b/i.test(summary) && /\.gitlab\b/i.test(summary) && /\.gitlab-ci\.yml\b/i.test(summary))) {
        return null;
      }
    }
    if (productName === "Apigee X") {
      if (/^Apigee APIM Operator for Kubernetes$/i.test(name)) {
        return null;
      }
    }
    if (productName === "Apigee UI") {
      if ([
        "Apps table Display Name column",
        "API Products table Name column",
        "Apigee UI Overview page",
        "Apigee UI in Google Cloud console (GA)",
        "Apigee instance IP range prefix selection",
        "Apigee instance private connection project allowlist",
        "Apigee API Product legacy format warning",
        "Debug v1",
      ].includes(name)) {
        return null;
      }
    }
    if (productName === "Spanner") {
      if (/^Cloud Spanner API general availability$/i.test(name)) {
        return null;
      }
    }
    if (productName === "Access Transparency" && isAccessTransparencySupportRelationship(name, summary)) {
      return null;
    }
    if (productName === "Google SecOps") {
      if (
        name === "MCP use control via organization policies"
        || /^Alert metadata fields idm\.is_significant and idm\.is_alert$/i.test(name)
      ) {
        return null;
      }
      if (name === "re.capture_all function") {
        feature.feature_name = "re.capture_all()";
      }
      if (name === "timestamp.get_date() function") {
        feature.feature_name = "timestamp.get_date()";
      }
    }
    if (productName === "Google SecOps SIEM") {
      if (name === "re.capture_all function") {
        feature.feature_name = "re.capture_all()";
      }
      if (name === "idm.is_alert alert metadata field") {
        feature.feature_name = "idm.is_alert";
      }
      if (name === "idm.is_significant alert metadata field") {
        feature.feature_name = "idm.is_significant";
      }
      if (name === "YARA-L 2.0 arrays.length() function") {
        feature.feature_name = "arrays.length()";
      }
    }
    if (productName === "Cloud Deployment Manager") {
      if ([
        "Deployment Manager Cloud Scheduler type support",
        "Deployment Manager appengine.v1beta4 resource type support",
        "Deployment Manager appengine.v1beta5 resource type support",
        "App Engine v1beta4 and v1beta5 resource types",
      ].includes(name)) {
        return null;
      }
    }
    if (productName === "Apps Script") {
      if (name === "UrlShortener Service") {
        return null;
      }
    }
    if (productName === "Migrate to Containers") {
      if ([
        "Tomcat artifact packaging",
        "Migrate for Compute Engine v5 integration",
      ].includes(name)) {
        return null;
      }
    }
    if (productName === "Cloud Run") {
      if (name === "Java function execution ID logging") {
        return null;
      }
    }
    if (productName === "Cloud Run functions") {
      if ([
        "Java execution ID logging",
        "Deterministic URLs",
      ].includes(name)) {
        return null;
      }
    }
    if (productName === "Cloud Deploy") {
      if (name === "promoteRelease API") {
        return null;
      }
    }
    if (productName === "Cloud Monitoring") {
      if (name === "Cloud Monitoring agent Linux installation scripts") {
        return null;
      }
    }
    if (productName === "Anthos clusters on AWS") {
      if ([
        "Storage driver upgrades",
        "Google Cloud Managed Service for Prometheus availability",
      ].includes(name)) {
        return null;
      }
    }
    if (productName === "Anthos clusters on Azure") {
      if ([
        "Kubernetes Resource Metrics Prefix Update",
        "Private clusters with private IPs for Anthos on Azure",
      ].includes(name)) {
        return null;
      }
    }
    if (productName === "Google Distributed Cloud Software Only for VMware") {
      if (name === "populate_registry.sh script") {
        return null;
      }
    }
    if (productName === "Apigee Analytics") {
      if (name === "Apigee Analytics regional expansion to Hong Kong and São Paulo") {
        return null;
      }
    }
    if (productName === "Deep Learning VM Images") {
      if ([
        "BigQuery magic plugin",
        "DooD support",
        "Conda-independent R Notebooks",
      ].includes(name)) {
        return null;
      }
    }
    if (productName === "Apigee Adapter for Envoy") {
      if (name === "CLI samples command supported Envoy and Istio versions") {
        return null;
      }
    }
    if (productName === "App Engine flexible environment custom runtimes") {
      if ([
        "App Engine flexible environment modern networking stack",
        "Modern networking stack",
      ].includes(name)) {
        return null;
      }
    }
    if (productName === "App Engine flexible environment Java") {
      if ([
        "App Engine flexible environment general availability",
        "General availability",
      ].includes(name)) {
        return null;
      }
    }
    if (productName === "SAP on Google Cloud") {
      if (name === "gceStorageClient for SAP HANA host auto-failover v1.n") {
        return null;
      }
    }
    if (productName === "Vertex AI Workbench") {
      if ([
        "GOOGLE_CLOUD_REGION environment variable defaulting",
        "Preinstalled libraries in Vertex AI Workbench user-managed notebook image",
        "Vertex AI Workbench Notebooks API allowed domains",
      ].includes(name)) {
        return null;
      }
    }
    if (productName === "Container Optimized OS") {
      if (
        [
          "NVIDIA RTX PRO 6000 driver 590.44.01 and 590.48.01 support",
          "AMD IOMMU and INET_DIAG_DESTROY kernel configs",
          "INET_DIAG_DESTROY kernel configuration",
          "Hardware-optimized SHA256 algorithms",
          "cloud-final.service dependency removal from multi-user.target",
          "cloud-final.service startup dependency removal",
          "systemd named service sequencing",
          "named service ordering before nss-lookup.target",
          "Trusted IMA certificate loading",
          "Restricted /etc/resolv.conf bind mount options",
        ].includes(name)
      ) {
        return null;
      }
    }
    if (productName === "App Engine flexible environment Ruby") {
      if (
        [
          "TLS 1.1 and earlier protocol support in App Engine flexible environment",
          "App Engine availability in us-west3",
          "App Engine region-ID request URLs",
          "App Engine availability in asia-east2",
          "App Engine availability in us-west2",
        ].includes(name)
      ) {
        return null;
      }
    }
    if (productName === "App Engine flexible environment Python") {
      if (
        [
          "App Engine regional app URL format",
          "App Engine flexible environment availability in us-east4",
          "App Engine flexible environment general availability",
          "Modern networking stack with improved throughput in App Engine flexible environment",
        ].includes(name)
      ) {
        return null;
      }
    }
    if (productName === "App Engine flexible environment Go") {
      if ([
        "App Engine flexible environment Go regional expansion to asia-east2",
        "App Engine flexible environment Go regional expansion to us-west2",
      ].includes(name)) {
        return null;
      }
    }
    if (productName === "App Engine flexible environment Node.js") {
      if ([
        "App Engine flexible environment modern networking stack",
      ].includes(name)) {
        return null;
      }
    }
    if (productName === "App Engine flexible environment PHP") {
      if ([
        "App Engine availability in us-west4 (Las Vegas)",
      ].includes(name)) {
        return null;
      }
    }
    if (productName === "App Engine standard environment Node.js") {
      if (
        [
          "App Engine standard environment regional availability",
          "AppCfg tooling and legacy standalone App Engine SDK",
          "App Engine Channel and XMPP services",
        ].includes(name)
      ) {
        return null;
      }
    }
    if (productName === "Cloud TPU") {
      if (name === "Native torch wheels on Colab and Kaggle") {
        return null;
      }
    }
    if (productName === "Cortex") {
      if (name === "CATGAP") {
        return null;
      }
    }
    if (productName === "Carbon Footprint") {
      if (name === "Unattended project recommender carbon impact reporting") {
        return null;
      }
    }
    if (productName === "Looker Studio") {
      if (name === "G2") {
        return null;
      }
    }
    if (productName === "Mainframe Assessment Tool") {
      if (name === "Parsing performance improvements") {
        return null;
      }
    }
    if (productName === "Document AI Warehouse") {
      if (name === "Operation service") {
        return null;
      }
    }
    if (productName === "Google Distributed Cloud Software Only for Bare Metal") {
      if (name === "NodePoolClaim taint mutability") {
        return null;
      }
    }
    if ([
      "App Engine standard environment Python",
      "App Engine standard environment Go",
      "App Engine standard environment Java",
    ].includes(productName)) {
      if (name === "and asia-east1" || name === "asia-southeast1") {
        return null;
      }
      if (productName === "App Engine standard environment Go" && name === "Elastic provisioning metrics") {
        return null;
      }
      if (productName === "App Engine standard environment Java" && ["JDK 9 modular JAR support", "dev_appserver.out logging"].includes(name)) {
        return null;
      }
    }
    if (productName === "App Engine standard environment Ruby") {
      if (name === "and Taiwan" || name === "Singapore") {
        return null;
      }
    }
    if (productName === "Google Kubernetes Engine") {
      if (
        name === "000 nodes"
        || name === "GKE cluster scaling to 65"
        || [
          "Organization policy control for MCP use",
          "FlowSchema v1beta3 API",
          "PriorityLevelConfiguration v1beta3 API",
          "CephFS in-tree volume plugin",
          "RBD in-tree volume plugin",
          "flowcontrol.apiserver.k8s.io/v1beta3 FlowSchema and PriorityLevelConfiguration APIs",
          "ValidatingAdmissionPolicy",
          "FlowSchema API v1beta3",
          "PriorityLevelConfiguration API v1beta3",
          "v1beta2 FlowSchema and PriorityLevelConfiguration APIs",
          "FlowSchema",
          "PriorityLevelConfiguration",
        ].includes(name)
      ) {
        return null;
      }
    }
    if (productName === "Dataproc") {
      if ([
        "1.0.3",
        "and 1.0.4",
        "1.4.77",
        "1.5.53",
        "and 2.0.27",
        "Serverless Spark conscrypt removal",
        "Serverless Spark default artifact removal",
        "Autoscaling version selection for Serverless Spark",
        "Dataproc Agent high availability mode",
        "Auto diagnostics for Dataproc Serverless for Spark batch failures",
        "gcloud_dataproc_personal_cluster.py tool",
        "dataproc:alpha.state.shuffle.hcfs.enabled property",
        "Application master primary-only placement",
        "dataproc.localssd.mount.enable",
        "Appendable output streams",
      ].includes(name)) {
        return null;
      }
    }
    if (productName === "AlloyDB") {
      if ([
        "Gemini 3.0 Flash for AlloyDB AI functions",
        "AlloyDB SSL/TLS encryption enforcement recommender",
        "Cross-data center replication for automated disaster recovery",
        "AlloyDB Omni 15.2.0 Preview",
      ].includes(name)) {
        return null;
      }
    }
    if (productName === "Dialogflow") {
      if ([
        "US multi-region for Dialogflow CX",
        "$request.user-utterance request-scoped parameter",
        "sys.long-utterance built-in event",
        "Amazon Alexa exporter",
        "Amazon Alexa importer",
        "Kik integration",
        "Skype integration",
        "and Dutch",
        "and Norwegian",
      ].includes(name)) {
        return null;
      }
    }
    if (productName === "Cloud Composer") {
      if ([
        "Cloud Composer regional availability in me-central2 (Dammam)",
        "Cloud Composer image version aliases",
        "Worker ID filtering for Cloud Monitoring logs",
        "Cloud Composer minimum supported version",
        "Worker-specific Cloud Monitoring log filter",
        "Minimum supported Composer version 1.6.0",
        "Reversible store_serialized_dags setting",
        "One-way store_serialized_dags enforcement",
      ].includes(name)) {
        return null;
      }
    }
    if (productName === "Sensitive Data Protection") {
      if ([
        "SCOTLAND_COMMUNITY_HEALTH_NUMBER infoType detector",
        "Data profile finding fields in Security Command Center",
        "BigQuery inspection support",
      ].includes(name)) {
        return null;
      }
    }
    if (productName === "Earth Engine Data Catalog") {
      if (feature.deprecation_date) {
        return null;
      }
      if (/^DG_GG_(?:2002|2003|2004|2005|2006|2007|2008|2009|2010|2011|ANNUAL)$/i.test(name)) {
        return null;
      }
      if (/^(?:NASA\/GPM_L3\/IMERG_V04|MODIS\/MOD08_M3_051|LEDAPS\/L5_L1T_SR|LEDAPS\/L7_L1T_SR)$/i.test(name)) {
        return null;
      }
      if (/^LANDSAT_COPY\//i.test(name)) {
        return null;
      }
      if (/^LANDSAT\/.*(?:\/C01\/|_L1T(?:_|$)|_RT(?:_|$))/i.test(name)) {
        return null;
      }
    }
    if (productName === "Earth Engine JavaScript Client Library") {
      if (/^ee\.layers\.BinaryOverlay$/i.test(name)) {
        return null;
      }
    }
    return feature;
  }

  const name = String(feature.feature_name || "").trim();
  const summary = String(feature.feature_summary || "").trim();
  const isSupportRelationship = /\baccess approval supports\b/i.test(summary)
    || /\bavailable for use in access approval\b/i.test(summary)
    || /\baccess approval can be used with\b/i.test(summary)
    || /\baccess approval now supports\b/i.test(summary)
    || /\baccess approval support for\b/i.test(name);
  const isAccessApprovalNative = /\baccess approval\b/i.test(name)
    || /^access\b/i.test(name)
    || /\b(accessapprovalsettings|deleteaccessapprovalsettings|listapprovalrequests|dismissdecision)\b/i.test(name);

  if (isAccessApprovalNative || (!isSupportRelationship && !isGenericAvailabilitySummary(name, summary))) {
    return feature;
  }

  let lifecycle = "supported by Access Approval.";
  if (/\bgenerally available\b|\bga\b/i.test(summary) && /\bpreview\b/i.test(summary)) {
    lifecycle = "supported by Access Approval in GA and Preview.";
  } else if (/\bgenerally available\b|\bga\b/i.test(summary)) {
    lifecycle = "supported by Access Approval in GA.";
  } else if (/\bpreview\b/i.test(summary)) {
    lifecycle = "supported by Access Approval in Preview.";
  }

  return {
    ...feature,
    feature_name: `Access Approval support for ${name}`,
    feature_summary: `${name} is ${lifecycle}`.replace(/\s+/g, " ").trim(),
    aliases: [...new Set([...(feature.aliases || []), name])],
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

function consolidateFeatureList(productName, features) {
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
      return refineFeatureForProduct(productName, feature);
    })
    .filter(Boolean)
    .sort((a, b) => {
      const dateA = a.latest_feature_date || a.latest_event_date;
      const dateB = b.latest_feature_date || b.latest_event_date;
      if (dateA !== dateB) {
        return dateB.localeCompare(dateA);
      }

      return a.feature_name.localeCompare(b.feature_name);
    });
}

function refineOutputFeatures(productName, features) {
  return features.map((feature) => refineFeatureForProduct(productName, {
    ...feature,
    aliases: [...(feature.aliases || [])],
    event_summaries: [...(feature.event_summaries || [])],
  })).filter(Boolean);
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
    derivation_version: derivationVersion,
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

  return current.row_signature === signatureForRowIds(rowIds)
    && current.derivation_version === derivationVersion;
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
    const features = refineOutputFeatures(productName, consolidateFeatureList(productName, rawFeatures));
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
