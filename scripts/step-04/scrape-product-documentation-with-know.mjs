#!/usr/bin/env zx
import crypto from "node:crypto";
import { execFile } from "node:child_process";
import { access, glob, mkdir, readFile, readdir, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { promisify } from "node:util";

const execFileAsync = promisify(execFile);

const schemaVersion = "step-04-know-corpus-v1";
const siblingKnowledgeRepo = path.resolve(process.cwd(), "..", "knowledge");
const siblingKnowledgeSrc = path.join(siblingKnowledgeRepo, "src");
const pythonBin = process.env.GCP_RADAR_STEP04_PYTHON_BIN || "python";
const useSiblingKnowledgeRepo = !process.env.GCP_RADAR_STEP04_KNOW_BIN && !process.env.GCP_RADAR_STEP04_DISABLE_LOCAL_KNOW && await exists(siblingKnowledgeSrc);
const knowBin = process.env.GCP_RADAR_STEP04_KNOW_BIN || (useSiblingKnowledgeRepo ? pythonBin : "know");
const knowKey = "corpus";
const inputRoot = path.resolve(process.env.GCP_RADAR_STEP04_INPUT_ROOT || "data/step-03/current");
const inputProductsDir = path.join(inputRoot, "products");
const outputRoot = path.resolve(process.env.GCP_RADAR_STEP04_OUTPUT_ROOT || "data/step-04/current");
const outputProductsDir = path.join(outputRoot, "products");
const indexFile = path.join(outputRoot, "index.json");
const maxProducts = Number(process.env.GCP_RADAR_STEP04_MAX_PRODUCTS || 0);
const syncDelayMs = Number(process.env.GCP_RADAR_STEP04_SYNC_DELAY_MS || 10000);
const compactSiteOutput = process.env.GCP_RADAR_STEP04_SITE_COMPACT !== "0";
const bxSearchCount = Number(process.env.GCP_RADAR_STEP04_BX_SEARCH_COUNT || 6);
const bxMaxAttempts = Number(process.env.GCP_RADAR_STEP04_BX_MAX_ATTEMPTS || 3);
const bxRetryDelayMs = Number(process.env.GCP_RADAR_STEP04_BX_RETRY_DELAY_MS || 2000);
const extraBxQueries = (process.env.GCP_RADAR_STEP04_EXTRA_BX_QUERIES || "")
  .split(";;")
  .map((value) => value.trim())
  .filter(Boolean);
const productFilter = (process.env.GCP_RADAR_STEP04_PRODUCTS || "").split(",").map((value) => value.trim()).filter(Boolean);
const familyFilter = new Set((process.env.GCP_RADAR_STEP04_FAMILIES || "").split(",").map((value) => value.trim()).filter(Boolean));
const reprocess = process.argv.includes("--reprocess");

const crawlBudgets = {
  docs_root: {
    maxDepth: Number(process.env.GCP_RADAR_STEP04_ROOT_MAX_DEPTH || 1),
    maxPages: Number(process.env.GCP_RADAR_STEP04_ROOT_MAX_PAGES || 30),
  },
  docs_reference: {
    maxDepth: Number(process.env.GCP_RADAR_STEP04_REFERENCE_MAX_DEPTH || 1),
    maxPages: Number(process.env.GCP_RADAR_STEP04_REFERENCE_MAX_PAGES || 20),
  },
  api_reference: {
    maxDepth: Number(process.env.GCP_RADAR_STEP04_REFERENCE_MAX_DEPTH || 1),
    maxPages: Number(process.env.GCP_RADAR_STEP04_REFERENCE_MAX_PAGES || 20),
  },
  iam_reference: {
    maxDepth: Number(process.env.GCP_RADAR_STEP04_REFERENCE_MAX_DEPTH || 1),
    maxPages: Number(process.env.GCP_RADAR_STEP04_REFERENCE_MAX_PAGES || 20),
  },
  python_reference: {
    maxDepth: Number(process.env.GCP_RADAR_STEP04_REFERENCE_MAX_DEPTH || 1),
    maxPages: Number(process.env.GCP_RADAR_STEP04_REFERENCE_MAX_PAGES || 20),
  },
  java_reference: {
    maxDepth: Number(process.env.GCP_RADAR_STEP04_REFERENCE_MAX_DEPTH || 1),
    maxPages: Number(process.env.GCP_RADAR_STEP04_REFERENCE_MAX_PAGES || 20),
  },
};

const familyPriority = [
  "docs_root",
  "docs_reference",
  "api_reference",
  "iam_reference",
  "python_reference",
  "java_reference",
];

function hashValue(value) {
  return crypto.createHash("sha256").update(value).digest("hex");
}

function normalizeUrl(input) {
  try {
    const url = new URL(input);
    url.hash = "";
    const params = new URLSearchParams();
    for (const [key, value] of url.searchParams.entries()) {
      if (!key.toLowerCase().startsWith("utm_")) {
        params.set(key, value);
      }
    }
    url.search = params.toString();
    return url.toString().replace(/\/$/, "");
  } catch {
    return String(input || "").trim();
  }
}

function relativeToCwd(target) {
  return path.relative(process.cwd(), target).replace(/\\/g, "/");
}

async function exists(target) {
  try {
    await access(target);
    return true;
  } catch {
    return false;
  }
}

async function readJson(filePath) {
  return JSON.parse(await readFile(filePath, "utf8"));
}

async function writeJson(filePath, value) {
  await writeFile(filePath, `${JSON.stringify(value, null, 2)}\n`);
}

async function writeText(filePath, value) {
  await writeFile(filePath, value);
}

function sanitizeErrorMessage(error) {
  const raw = String(error?.stderr || error?.message || error || "");
  return raw
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter((line) => line && !line.startsWith("(node:") && !line.startsWith("(Use `node --trace-deprecation"))
    .join("\n");
}

async function writeIndexSnapshot(products, crawl4aiAvailable) {
  await writeJson(indexFile, {
    schema_version: schemaVersion,
    generated_at: new Date().toISOString(),
    input_root: relativeToCwd(inputRoot),
    output_root: relativeToCwd(outputRoot),
    know_key: knowKey,
    know_invocation: useSiblingKnowledgeRepo
      ? `${pythonBin} -m knowledge.cli`
      : knowBin,
    crawl4ai_available: crawl4aiAvailable,
    reprocess_requested: reprocess,
    site_output_mode: compactSiteOutput ? "compact" : "full",
    product_count: products.length,
    products,
  });
}

function familyForClassification(classification) {
  switch (classification) {
    case "product_root":
      return "docs_root";
    case "product_reference":
      return "docs_reference";
    case "api_reference":
      return "api_reference";
    case "iam_reference":
      return "iam_reference";
    case "python_reference":
      return "python_reference";
    case "java_reference":
      return "java_reference";
    default:
      return "";
  }
}

function sourceIdForFamily(family) {
  return `site-${family.replace(/_/g, "-")}`;
}

function familySelectionScore(source) {
  const url = normalizeUrl(source?.url);
  const pathname = (() => {
    try {
      return new URL(url).pathname.toLowerCase();
    } catch {
      return "";
    }
  })();

  let score = Number(source?.final_score || 0) * 10;
  const family = String(source?.family || "");

  if (family === "docs_root") {
    if (/\/docs$/.test(pathname)) score += 80;
    if (/\/docs\/(overview|introduction)$/.test(pathname)) score += 40;
  }
  if (family === "docs_reference") {
    if (/\/docs\/reference$/.test(pathname)) score += 80;
    if (/\/docs\/apis$/.test(pathname)) score += 70;
  }
  if (family === "api_reference") {
    if (/\/reference\/(rest|rpc)$/.test(pathname)) score += 70;
    if (/\/reference\/rest\/.+/.test(pathname) || /\/reference\/rpc\/.+/.test(pathname)) score -= 60;
  }
  if (family === "iam_reference") {
    if (/\/roles-permissions\//.test(pathname)) score += 80;
    if (/\/(iam-and-access-control|access-control|iam-roles|iam-permissions)$/.test(pathname)) score += 60;
    if (/\/samples?\//.test(pathname) || /\/guides\//.test(pathname)) score -= 50;
  }
  if (family === "python_reference") {
    if (/\/python\/docs\/reference\/[^/]+\/latest(?:\/index\.html)?$/.test(pathname)) score += 60;
    if (/\/python\/docs\/reference\/[^/]+\/latest\/.+/.test(pathname)) score -= 60;
  }
  if (family === "java_reference") {
    if (/\/java\/docs\/reference\/[^/]+\/latest\/overview$/.test(pathname)) score += 60;
    if (/\/java\/docs\/reference\/[^/]+\/latest\/(?!overview$).+/.test(pathname)) score -= 60;
  }

  const depth = pathname.split("/").filter(Boolean).length;
  score -= depth;
  return score;
}

function selectSources(ranking) {
  const ranked = Array.isArray(ranking.scored_urls) ? ranking.scored_urls : [];
  const candidatesByFamily = new Map();

  for (const candidate of ranked) {
    if (!candidate?.keep) {
      continue;
    }

    const classification = String(candidate.api_score?.classification || "").trim();
    const family = familyForClassification(classification);
    if (!family) {
      continue;
    }

    if (familyFilter.size > 0 && !familyFilter.has(family)) {
      continue;
    }

    const budget = crawlBudgets[family];
    if (!candidatesByFamily.has(family)) {
      candidatesByFamily.set(family, []);
    }
    candidatesByFamily.get(family).push({
      source_id: sourceIdForFamily(family),
      product_slug: ranking.product_slug,
      family,
      classification,
      url: normalizeUrl(candidate.url),
      final_score: Number(candidate.final_score || 0),
      best_rank: Number(candidate.best_rank || 0),
      max_depth: budget.maxDepth,
      max_pages: budget.maxPages,
    });
  }

  return familyPriority
    .filter((family) => candidatesByFamily.has(family))
    .map((family) => candidatesByFamily.get(family).sort((a, b) => familySelectionScore(b) - familySelectionScore(a) || a.url.localeCompare(b.url))[0]);
}

function selectedSourceSignature(selectedSources) {
  return hashValue(JSON.stringify(selectedSources.map((source) => ({
    family: source.family,
    source_id: source.source_id,
    classification: source.classification,
    url: source.url,
    max_depth: source.max_depth,
    max_pages: source.max_pages,
  }))));
}

async function runKnowJson(storePath, args) {
  const commandArgs = useSiblingKnowledgeRepo
    ? ["-m", "knowledge.cli", "--store", storePath, "--json", ...args]
    : ["--store", storePath, "--json", ...args];
  const { stdout } = await execFileAsync(knowBin, commandArgs, {
    windowsHide: true,
    maxBuffer: 1024 * 1024 * 32,
    env: useSiblingKnowledgeRepo
      ? { ...process.env, PYTHONPATH: siblingKnowledgeSrc, PYTHONIOENCODING: process.env.PYTHONIOENCODING || "utf-8" }
      : { ...process.env, PYTHONIOENCODING: process.env.PYTHONIOENCODING || "utf-8" },
  });
  return JSON.parse(stdout.trim() || "{}");
}

async function runKnow(storePath, args) {
  const commandArgs = useSiblingKnowledgeRepo
    ? ["-m", "knowledge.cli", "--store", storePath, ...args]
    : ["--store", storePath, ...args];
  const { stdout } = await execFileAsync(knowBin, commandArgs, {
    windowsHide: true,
    maxBuffer: 1024 * 1024 * 32,
    env: useSiblingKnowledgeRepo
      ? { ...process.env, PYTHONPATH: siblingKnowledgeSrc, PYTHONIOENCODING: process.env.PYTHONIOENCODING || "utf-8" }
      : { ...process.env, PYTHONIOENCODING: process.env.PYTHONIOENCODING || "utf-8" },
  });
  return stdout.trim();
}

async function sleep(ms) {
  if (ms <= 0) {
    return;
  }
  await new Promise((resolve) => setTimeout(resolve, ms));
}

async function detectCrawl4AiAvailability() {
  try {
    await execFileAsync("python", ["-c", "import crawl4ai"], {
      windowsHide: true,
      maxBuffer: 1024 * 1024 * 4,
    });
    return true;
  } catch {
    return false;
  }
}

async function ensureKnowKey(storePath) {
  const metadataPath = path.join(storePath, knowKey, "metadata.yaml");
  if (await exists(metadataPath)) {
    return false;
  }

  await mkdir(storePath, { recursive: true });
  await runKnow(storePath, ["add", "key", knowKey]);
  return true;
}

async function listSources(storePath) {
  try {
    const payload = await runKnowJson(storePath, ["list", "sources", "--key", knowKey]);
    return Array.isArray(payload.sources) ? payload.sources : [];
  } catch (error) {
    if (/not found/i.test(String(error?.message || ""))) {
      return [];
    }
    throw error;
  }
}

async function sourcePageCount(storePath, sourceId) {
  const pagesFile = path.join(storePath, knowKey, "site", sourceId, "pages.json");
  const pages = await readPagesIndex(storePath, sourceId);
  return Array.isArray(pages) ? pages.length : 0;
}

async function readPagesIndex(storePath, sourceId) {
  const sourceDir = path.join(storePath, knowKey, "site", sourceId);
  const pagesFile = path.join(sourceDir, "pages.json");
  const existing = await readJson(pagesFile).catch(() => null);
  if (Array.isArray(existing)) {
    return existing;
  }

  let markdownFiles = [];
  try {
    markdownFiles = await Array.fromAsync(glob("pages/*.md", { cwd: sourceDir }));
  } catch {
    markdownFiles = [];
  }
  if (markdownFiles.length === 0) {
    return [];
  }

  const repaired = [];
  for (const relativePath of markdownFiles.sort()) {
    const absolutePath = path.join(sourceDir, relativePath);
    const text = await readFile(absolutePath, "utf8").catch(() => "");
    const titleMatch = text.match(/^title:\s+["']?(.*?)["']?\s*$/m);
    const urlMatch = text.match(/^url:\s+["']?(.*?)["']?\s*$/m);
    repaired.push({
      path: relativePath.replace(/\\/g, "/"),
      title: titleMatch?.[1] || path.basename(relativePath, ".md"),
      url: urlMatch?.[1] || "",
    });
  }
  await writeJson(pagesFile, repaired);
  return repaired;
}

function slugify(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/[^a-z0-9._-]+/g, "_")
    .replace(/^_+|_+$/g, "")
    .slice(0, 180) || "page";
}

function isOfficialGoogleUrl(url) {
  try {
    const host = new URL(url).hostname.toLowerCase();
    return ["docs.cloud.google.com", "cloud.google.com", "developers.google.com", "googleapis.dev"]
      .some((candidate) => host === candidate || host.endsWith(`.${candidate}`));
  } catch {
    return false;
  }
}

function scoreRecoveredUrl(family, url, productSlug = "") {
  const pathname = (() => {
    try {
      return new URL(url).pathname.toLowerCase();
    } catch {
      return "";
    }
  })();

  switch (family) {
    case "docs_root": {
      const canonicalRoot = productSlug ? `/${productSlug.toLowerCase()}/docs` : "";
      if (canonicalRoot && pathname === canonicalRoot) {
        return 100;
      }
      if (canonicalRoot && pathname.startsWith(`${canonicalRoot}/`)) {
        return 70 + (/\/(overview|introduction)$/.test(pathname) ? 10 : 0);
      }
      if (canonicalRoot) {
        return 0;
      }
      return (/\/docs$/.test(pathname) ? 50 : 0) + (/\/(overview|introduction|docs)$/.test(pathname) ? 20 : 0);
    }
    case "docs_reference":
      return (/\/docs\/reference$/.test(pathname) ? 60 : 0) + (/\/reference\//.test(pathname) ? 10 : 0);
    case "api_reference":
      return (/\/reference\/rest$/.test(pathname) ? 70 : 0) + (/\/api/.test(pathname) ? 10 : 0);
    case "iam_reference":
      return (/access-control|roles-permissions|iam/.test(pathname) ? 70 : 0);
    case "python_reference":
      return (/^\/python\/docs\/reference\/.+/.test(pathname) ? 70 : 0) + (/\/latest/.test(pathname) ? 10 : 0);
    case "java_reference":
      return (/^\/java\/docs\/reference\/.+/.test(pathname) ? 70 : 0) + (/\/overview$/.test(pathname) ? 10 : 0);
    default:
      return 0;
  }
}

function recoveryQueries(productName, family, productSlug = "") {
  const baseQueries = (() => {
    switch (family) {
    case "docs_root":
      return [
        `site:docs.cloud.google.com "${productName}" Google Cloud documentation`,
        `site:docs.cloud.google.com "${productName}" overview docs`,
      ];
    case "docs_reference":
      return [
        `site:docs.cloud.google.com "${productName}" docs reference`,
        `site:docs.cloud.google.com "${productName}" APIs and reference`,
      ];
    case "api_reference":
      return [
        `site:docs.cloud.google.com "${productName}" reference rest`,
        `site:docs.cloud.google.com "${productName}" API reference`,
      ];
    case "iam_reference":
      return [
        `site:docs.cloud.google.com "${productName}" access control`,
        `site:docs.cloud.google.com "${productName}" roles permissions IAM`,
      ];
    case "python_reference":
      return [
        `site:docs.cloud.google.com/python/docs/reference "${productName}"`,
        `site:googleapis.dev/python "${productName}"`,
      ];
    case "java_reference":
      return [
        `site:docs.cloud.google.com/java/docs/reference "${productName}"`,
        `site:developers.google.com "${productName}" Java client library`,
      ];
    default:
      return [];
    }
  })();

  const scopedExtra = extraBxQueries
    .map((query) => query.replaceAll("{product_name}", productName).replaceAll("{product_slug}", productSlug));

  return [...baseQueries, ...scopedExtra];
}

async function runBxSearch(query) {
  let lastError;
  for (let attempt = 1; attempt <= bxMaxAttempts; attempt += 1) {
    try {
      const { stdout } = await execFileAsync("bx", ["web", query, "--count", String(bxSearchCount)], {
        windowsHide: true,
        maxBuffer: 1024 * 1024 * 32,
        timeout: 120000,
      });
      return JSON.parse(stdout.trim() || "{}");
    } catch (error) {
      lastError = error;
      if (attempt < bxMaxAttempts) {
        await sleep(bxRetryDelayMs * attempt);
      }
    }
  }
  throw lastError;
}

async function recoverPagesWithBx(productName, selectedSource, attemptedUrls) {
  const seen = new Set();
  const pages = [];
  const maxRecoveredPages = selectedSource.max_pages > 0 ? selectedSource.max_pages : Number.POSITIVE_INFINITY;

  for (const query of recoveryQueries(productName, selectedSource.family, selectedSource.product_slug)) {
    const payload = await runBxSearch(query).catch(() => null);
    const results = payload?.web?.results || [];
    for (const result of results) {
      const url = normalizeUrl(result?.url);
      const title = String(result?.title || "").trim();
      const description = String(result?.description || "").trim();
      if (!url || !title || !description || !isOfficialGoogleUrl(url) || seen.has(url)) {
        continue;
      }
      if (scoreRecoveredUrl(selectedSource.family, url, selectedSource.product_slug) <= 0) {
        continue;
      }
      seen.add(url);
      pages.push({
        url,
        title,
        markdown: [
          `# ${title}`,
          "",
          `Source URL: ${url}`,
          "",
          description.replace(/<[^>]+>/g, ""),
        ].join("\n"),
        metadata: {
          content_origin: "bx_web_fallback",
          query,
          attempted_urls: attemptedUrls,
        },
      });
      if (pages.length >= maxRecoveredPages) {
        return pages;
      }
    }
  }

  return pages;
}

async function writeCompactFallbackSource(storePath, selectedSource, pages) {
  const sourceDir = path.join(storePath, knowKey, "site", selectedSource.source_id);
  await rm(sourceDir, { recursive: true, force: true });
  await mkdir(path.join(sourceDir, "pages"), { recursive: true });

  const index = [];
  for (const page of pages) {
    const slug = slugify(new URL(page.url).hostname + new URL(page.url).pathname);
    const relativePath = `pages/${slug}.md`;
    const frontmatter = [
      "---",
      `title: ${JSON.stringify(page.title)}`,
      `url: ${JSON.stringify(page.url)}`,
      `knowledge_key: ${JSON.stringify(knowKey)}`,
      `source_id: ${JSON.stringify(selectedSource.source_id)}`,
      `source_type: "site"`,
      `content_origin: "bx_web_fallback"`,
      "---",
      "",
    ].join("\n");
    await writeText(path.join(sourceDir, relativePath), `${frontmatter}${page.markdown.trim()}\n`);
    index.push({
      url: page.url,
      title: page.title,
      path: relativePath,
    });
  }

  await writeJson(path.join(sourceDir, "pages.json"), index);
  await writeText(
    path.join(sourceDir, "source-metadata.yaml"),
    [
      "entrypoint: " + JSON.stringify(selectedSource.url),
      "source_id: " + JSON.stringify(selectedSource.source_id),
      'source_type: "site"',
      "compact_output: true",
      "content_origin: " + JSON.stringify("bx_web_fallback"),
      "page_count: " + String(index.length),
      "max_depth: " + String(selectedSource.max_depth),
      "max_pages: " + String(selectedSource.max_pages),
      'pages_index: "pages.json"',
      "",
    ].join("\n"),
  );
}

async function recoverUrlWithBx(productName, selectedSource, attemptedUrls) {
  const seen = new Set(attemptedUrls.map(normalizeUrl));
  const candidates = [];

  for (const query of recoveryQueries(productName, selectedSource.family, selectedSource.product_slug)) {
    const payload = await runBxSearch(query).catch(() => null);
    const results = payload?.web?.results || [];
    for (const result of results) {
      const url = normalizeUrl(result?.url);
      if (!url || seen.has(url) || !isOfficialGoogleUrl(url)) {
        continue;
      }
      candidates.push(url);
      seen.add(url);
    }
  }

  return candidates
    .map((url) => ({ url, score: scoreRecoveredUrl(selectedSource.family, url, selectedSource.product_slug) }))
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score || a.url.localeCompare(b.url))
    .map((item) => item.url);
}

async function reconcileSources(storePath, selectedSources) {
  const existingSources = await listSources(storePath);
  const selectedById = new Map(selectedSources.map((source) => [source.source_id, source]));
  const existingById = new Map(existingSources
    .filter((source) => source.type === "site" && source.id)
    .map((source) => [source.id, source]));

  const actions = {
    deleted: [],
    added: [],
    changed: [],
    sync_urls: [],
  };

  for (const source of existingSources) {
    if (source.type !== "site" || !source.config?.url) {
      continue;
    }

    if (selectedById.has(source.id)) {
      continue;
    }

    await runKnow(storePath, ["del", "--key", knowKey, source.id]);
    actions.deleted.push(normalizeUrl(source.config.url));
  }

  for (const selected of selectedSources) {
    const existing = existingById.get(selected.source_id);
    const needsRecreate = existing
      && (normalizeUrl(existing.config?.url) !== selected.url
        || Number(existing.config?.max_depth ?? -1) !== selected.max_depth
        || Number(existing.config?.max_pages ?? -1) !== selected.max_pages
        || Boolean(existing.config?.compact_output) !== compactSiteOutput);

    if (needsRecreate) {
      await runKnow(storePath, ["del", "--key", knowKey, existing.id]);
      actions.changed.push(selected.url);
    }

    if (!existing || needsRecreate) {
      await runKnow(storePath, [
        "add",
        "site",
        selected.url,
        "--key",
        knowKey,
        "--source-id",
        selected.source_id,
        "--max-depth",
        String(selected.max_depth),
        "--max-pages",
        String(selected.max_pages),
        ...(compactSiteOutput ? ["--compact"] : []),
      ]);
      actions.added.push(selected.url);
      actions.sync_urls.push(selected.url);
      continue;
    }

    const pageCount = await sourcePageCount(storePath, selected.source_id);
    if (!existing.last_synced_at || pageCount <= 0 || (!compactSiteOutput && !existing.last_exported_at)) {
      actions.sync_urls.push(selected.url);
    }
  }

  return actions;
}

function buildSelectionDocument(ranking, rankingPath, selectedSources, productDir) {
  return {
    schema_version: schemaVersion,
    generated_at: new Date().toISOString(),
    product_name: ranking.product_name,
    product_slug: ranking.product_slug,
    step03_ranking_path: relativeToCwd(rankingPath),
    source_selection_strategy: {
      type: "one-best-url-per-family",
      families: familyPriority.filter((family) => selectedSources.some((source) => source.family === family)),
    },
    site_output_mode: compactSiteOutput ? "compact" : "full",
    selected_source_count: selectedSources.length,
    selected_sources_signature: selectedSourceSignature(selectedSources),
    selected_sources: selectedSources,
    corpus_paths: {
      product_dir: relativeToCwd(productDir),
      know_store_dir: relativeToCwd(path.join(productDir, knowKey)),
      site_sources_dir: relativeToCwd(path.join(productDir, knowKey, "site")),
    },
  };
}

async function summarizeCorpusPages(productDir) {
  const siteDir = path.join(productDir, knowKey, "site");
  if (!(await exists(siteDir))) {
    return [];
  }

  const sourceDirs = (await readdir(siteDir, { withFileTypes: true }))
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort();

  const summaries = [];
  for (const sourceId of sourceDirs) {
    const pages = await readPagesIndex(productDir, sourceId);
    summaries.push({
      source_id: sourceId,
      page_count: Array.isArray(pages) ? pages.length : 0,
      urls: Array.isArray(pages) ? pages.map((page) => String(page?.url || "")).filter(Boolean) : [],
      compact_output: Array.isArray(pages) ? pages.every((page) => typeof page?.path === "string") : false,
    });
  }

  return summaries;
}

async function scrapeProduct(rankingPath, crawl4aiAvailable) {
  const ranking = await readJson(rankingPath);
  const productSlug = ranking.product_slug;
  const productDir = path.join(outputProductsDir, productSlug);
  const selectionPath = path.join(productDir, "selection.json");
  const statePath = path.join(productDir, "state.json");
  const corpusRoot = path.join(productDir, "corpus");

  await mkdir(productDir, { recursive: true });
  const keyCreated = await ensureKnowKey(productDir);
  const selectedSources = selectSources(ranking);

  if (selectedSources.length === 0) {
    const selection = buildSelectionDocument(ranking, rankingPath, selectedSources, productDir);
    await writeJson(selectionPath, selection);
    await writeJson(statePath, {
      schema_version: schemaVersion,
      generated_at: new Date().toISOString(),
      product_name: ranking.product_name,
      product_slug: productSlug,
      selected_sources_signature: selection.selected_sources_signature,
      selected_source_count: 0,
      status: "no_sources_selected",
      key_created: keyCreated,
      crawl4ai_available: crawl4aiAvailable,
    });

    return {
      product_name: ranking.product_name,
      product_slug: productSlug,
      selected_source_count: 0,
      status: "no_sources_selected",
      skipped_sync: true,
      output_path: relativeToCwd(selectionPath),
    };
  }

  let selection = buildSelectionDocument(ranking, rankingPath, selectedSources, productDir);
  const previousState = await readJson(statePath).catch(() => null);
  const signatureUnchanged = previousState?.selected_sources_signature === selection.selected_sources_signature;
  const corpusReady = await exists(path.join(corpusRoot, "site"));

  let actions = {
    deleted: [],
    added: [],
    changed: [],
    sync_urls: [],
  };
  let exportRun = false;
  let skippedSync = false;

  if (!reprocess && signatureUnchanged && corpusReady) {
    skippedSync = true;
  } else {
    actions = await reconcileSources(productDir, selectedSources);
    const syncUrls = reprocess
      ? selectedSources.map((source) => source.url)
      : [...new Set(actions.sync_urls)];

    for (const [index, url] of syncUrls.entries()) {
      const selected = selectedSources.find((source) => source.url === url);
      const attemptedUrls = [url];
      let synced = false;

      try {
        await runKnow(productDir, ["sync", "site", url, "--key", knowKey]);
        synced = selected ? (await sourcePageCount(productDir, selected.source_id)) > 0 : true;
      } catch {
        synced = false;
      }

      if (!synced && selected) {
        const recoveredUrls = await recoverUrlWithBx(ranking.product_name, selected, attemptedUrls);
        for (const recoveredUrl of recoveredUrls) {
          attemptedUrls.push(recoveredUrl);
          try {
            await runKnow(productDir, ["del", "--key", knowKey, selected.source_id]).catch(() => "");
            await runKnow(productDir, [
              "add",
              "site",
              recoveredUrl,
              "--key",
              knowKey,
              "--source-id",
              selected.source_id,
              "--max-depth",
              String(selected.max_depth),
              "--max-pages",
              String(selected.max_pages),
              ...(compactSiteOutput ? ["--compact"] : []),
            ]);
            await runKnow(productDir, ["sync", "site", recoveredUrl, "--key", knowKey]);
            if ((await sourcePageCount(productDir, selected.source_id)) > 0) {
              selected.url = recoveredUrl;
              synced = true;
              break;
            }
          } catch {
            synced = false;
          }
        }
      }

      if (!synced && selected) {
        const fallbackPages = await recoverPagesWithBx(ranking.product_name, selected, attemptedUrls);
        if (fallbackPages.length > 0) {
          await writeCompactFallbackSource(productDir, selected, fallbackPages);
          selected.url = fallbackPages[0].url;
          synced = true;
        }
      }

      if (!synced) {
        throw new Error(`site sync failed after recovery attempts for ${url}`);
      }

      if (index < syncUrls.length - 1) {
        await sleep(syncDelayMs);
      }
    }

    if (!compactSiteOutput) {
      await runKnow(productDir, ["export", "--key", knowKey]);
      exportRun = true;
    }
  }

  if (compactSiteOutput) {
    await rm(path.join(corpusRoot, "library"), { recursive: true, force: true });
    await rm(path.join(corpusRoot, "raw"), { recursive: true, force: true });
  }

  const finalSources = await listSources(productDir);
  const corpusPages = await summarizeCorpusPages(productDir);
  const singlePageFallbackDetected = !crawl4aiAvailable && corpusPages.length > 0 && corpusPages.every((source) => source.page_count <= 1);
  selection = buildSelectionDocument(ranking, rankingPath, selectedSources, productDir);
  await writeJson(selectionPath, selection);
  await writeJson(statePath, {
    schema_version: schemaVersion,
    generated_at: new Date().toISOString(),
    product_name: ranking.product_name,
    product_slug: productSlug,
    selected_sources_signature: selection.selected_sources_signature,
    selected_source_count: selectedSources.length,
    key_created: keyCreated,
    crawl4ai_available: crawl4aiAvailable,
    single_page_fallback_detected: singlePageFallbackDetected,
    limitation: singlePageFallbackDetected
      ? "know site sync is running without crawl4ai in this environment, so each source currently materializes only its seed page."
      : "",
    skipped_sync: skippedSync,
    export_run: exportRun,
    reprocess_requested: reprocess,
    actions,
    registered_source_count: finalSources.length,
    corpus_page_summaries: corpusPages,
    corpus_paths: selection.corpus_paths,
  });

  return {
    product_name: ranking.product_name,
    product_slug: productSlug,
    selected_source_count: selectedSources.length,
    registered_source_count: finalSources.length,
    crawl4ai_available: crawl4aiAvailable,
    single_page_fallback_detected: singlePageFallbackDetected,
    total_corpus_pages: corpusPages.reduce((sum, source) => sum + source.page_count, 0),
    skipped_sync: skippedSync,
    export_run: exportRun,
    site_output_mode: compactSiteOutput ? "compact" : "full",
    output_path: relativeToCwd(selectionPath),
    families: selectedSources.map((source) => source.family),
  };
}

async function main() {
  await mkdir(outputProductsDir, { recursive: true });
  const crawl4aiAvailable = await detectCrawl4AiAvailability();

  const productSlugs = (await readdir(inputProductsDir, { withFileTypes: true }))
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .filter((slug) => productFilter.length === 0 || productFilter.includes(slug))
    .sort()
    .slice(0, maxProducts > 0 ? maxProducts : undefined);

  const products = [];
  for (const productSlug of productSlugs) {
    const rankingPath = path.join(inputProductsDir, productSlug, "ranking.json");
    if (!(await exists(rankingPath))) {
      continue;
    }

    try {
      products.push(await scrapeProduct(rankingPath, crawl4aiAvailable));
      await writeIndexSnapshot(products, crawl4aiAvailable);
    } catch (error) {
      const errorMessage = sanitizeErrorMessage(error);
      const ranking = await readJson(rankingPath).catch(() => ({ product_name: productSlug, product_slug: productSlug }));
      const productDir = path.join(outputProductsDir, productSlug);
      const statePath = path.join(productDir, "state.json");
      const previousState = await readJson(statePath).catch(() => null);
      const previousPages = Array.isArray(previousState?.corpus_page_summaries)
        ? previousState.corpus_page_summaries.reduce((sum, item) => sum + Number(item?.page_count || 0), 0)
        : 0;
      await mkdir(productDir, { recursive: true });
      if (previousPages > 0) {
        await writeJson(statePath, {
          ...previousState,
          generated_at: new Date().toISOString(),
          last_attempt_status: "sync_failed_preserved",
          last_attempt_error: errorMessage,
        });
        products.push({
          product_name: ranking.product_name || productSlug,
          product_slug: ranking.product_slug || productSlug,
          status: "sync_failed_preserved",
          error: errorMessage,
          output_path: relativeToCwd(statePath),
        });
        continue;
      }
      await writeJson(statePath, {
        schema_version: schemaVersion,
        generated_at: new Date().toISOString(),
        product_name: ranking.product_name || productSlug,
        product_slug: ranking.product_slug || productSlug,
        status: "sync_failed",
        site_output_mode: compactSiteOutput ? "compact" : "full",
        error: errorMessage,
      });
      products.push({
        product_name: ranking.product_name || productSlug,
        product_slug: ranking.product_slug || productSlug,
        status: "sync_failed",
        error: errorMessage,
        output_path: relativeToCwd(statePath),
      });
      await writeIndexSnapshot(products, crawl4aiAvailable);
    }
  }

  await writeIndexSnapshot(products, crawl4aiAvailable);

  console.log(JSON.stringify({
    schema_version: schemaVersion,
    input_root: inputRoot,
    output_root: outputRoot,
    know_invocation: useSiblingKnowledgeRepo
      ? `${pythonBin} -m knowledge.cli`
      : knowBin,
    crawl4ai_available: crawl4aiAvailable,
    reprocess,
    site_output_mode: compactSiteOutput ? "compact" : "full",
    product_count: products.length,
    products_filter: productFilter,
    families_filter: [...familyFilter],
    index_file: indexFile,
  }, null, 2));
}

await main();
