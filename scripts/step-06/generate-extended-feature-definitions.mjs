#!/usr/bin/env zx
import crypto from "node:crypto";
import os from "node:os";
import { execFile, spawn } from "node:child_process";
import { access, mkdir, readFile, readdir, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { promisify } from "node:util";

$.quote = quote;

const execFileAsync = promisify(execFile);

const schemaVersion = "step-06-extended-feature-definitions-v1";
const keywordPromptVersion = "step-06-keywords-v2";
const rerankPromptVersion = "step-06-rerank-v1";
const definitionPromptVersion = "step-06-definition-v3";
const inputStep02Root = path.resolve(process.env.GCP_RADAR_STEP06_STEP02_ROOT || "data/step-02/current");
const inputStep04Root = path.resolve(process.env.GCP_RADAR_STEP06_STEP04_ROOT || "data/step-04/current");
const outputRoot = path.resolve(process.env.GCP_RADAR_STEP06_OUTPUT_ROOT || "data/step-06/current");
const outputName = path.basename(outputRoot);
const stateRoot = path.resolve(process.env.GCP_RADAR_STEP06_STATE_ROOT || path.join("data/step-06/.state", outputName));
const outputProductsDir = path.join(outputRoot, "products");
const stateProductsDir = path.join(stateRoot, "products");
const indexFile = path.join(outputRoot, "index.json");
const keywordCacheFile = path.join(stateRoot, "keyword-cache.json");
const rerankCacheFile = path.join(stateRoot, "rerank-cache.json");
const definitionCacheFile = path.join(stateRoot, "definition-cache.json");
const featureRecoveryCacheFile = path.join(stateRoot, "feature-recovery-cache.json");
const maxFeatures = Number(process.env.GCP_RADAR_STEP06_MAX_FEATURES || 0);
const minBaseScore = Number(process.env.GCP_RADAR_STEP06_MIN_BASE_SCORE || 18);
const minFinalScore = Number(process.env.GCP_RADAR_STEP06_MIN_FINAL_SCORE || 20);
const maxCandidatePages = Number(process.env.GCP_RADAR_STEP06_MAX_CANDIDATE_PAGES || 6);
const maxDefinitionPages = Number(process.env.GCP_RADAR_STEP06_MAX_DEFINITION_PAGES || 3);
const maxCompetitionFeatures = Number(process.env.GCP_RADAR_STEP06_MAX_COMPETITION_FEATURES || 8);
const keywordBatchSize = Number(process.env.GCP_RADAR_STEP06_KEYWORD_BATCH_SIZE || 12);
const definitionConcurrency = Number(process.env.GCP_RADAR_STEP06_DEFINITION_CONCURRENCY || Math.min(6, Math.max(2, Math.floor((os.availableParallelism?.() ?? os.cpus().length) * 0.4))));
const piModel = process.env.GCP_RADAR_STEP06_PI_MODEL || "openai-codex/gpt-5.3-codex-spark";
const piRequestTimeoutMs = Number(process.env.GCP_RADAR_STEP06_PI_REQUEST_TIMEOUT_MS || 300000);
const disablePi = process.env.GCP_RADAR_STEP06_DISABLE_PI === "1";
const productFilter = (process.env.GCP_RADAR_STEP06_PRODUCTS || "")
  .split(",")
  .map((value) => value.trim().toLowerCase())
  .filter(Boolean);

const keywordSystemPrompt = [
  "You extract discriminative search phrases for Google Cloud feature definitions.",
  "Return JSON only.",
  "Input is one product and an array of features derived from release-note summaries.",
  "Return an array with exactly these keys for each feature: feature_name, keyword_phrases, alias_phrases, generic_terms_to_avoid.",
  "Rules:",
  "- keyword_phrases must contain 4 to 8 short phrases that are likely to appear in official documentation for that feature.",
  "- Prefer concrete nouns, API function names, productized capability names, feature-specific acronyms, and user-visible labels.",
  "- alias_phrases may contain 0 to 5 alternate phrases or abbreviations.",
  "- generic_terms_to_avoid must contain generic phrases that would overmatch many pages.",
  "- Avoid returning the product name alone as a keyword.",
  "- Keep phrases short and literal.",
].join(" ");

const rerankSystemPrompt = [
  "You review one documentation page against several candidate features from the same product.",
  "Return JSON only.",
  "Return an array of objects with exactly these keys: feature_name, relevance, rationale.",
  "Rules:",
  "- relevance must be one of: NONE, WEAK, MODERATE, STRONG.",
  "- STRONG means the page materially helps define the feature.",
  "- MODERATE means the page gives useful supporting context for the feature.",
  "- WEAK means only incidental mention or broad product context.",
  "- NONE means the page should not be used for that feature.",
  "- rationale must be one short sentence.",
].join(" ");

const definitionSystemPrompt = [
  "You synthesize an evidence-backed feature definition from official Google Cloud documentation excerpts.",
  "Return JSON only.",
  "Return an object with exactly these keys: extended_definition, coverage_status, source_links, evidence_summary.",
  "Rules:",
  "- coverage_status must be HIGH, MEDIUM, LOW, or NONE.",
  "- extended_definition must be 1 to 3 concise sentences that define the feature itself, not the product broadly.",
  "- Only use facts supported by the provided excerpts.",
  "- If evidence is weak, say so in cautious wording.",
  "- source_links must be an array of the real official page URLs used.",
  "- evidence_summary must be one short sentence describing what the cited pages contribute.",
].join(" ");

const weakKeywordTokens = new Set([
  "a",
  "an",
  "and",
  "any",
  "api",
  "are",
  "as",
  "at",
  "be",
  "by",
  "cloud",
  "data",
  "for",
  "from",
  "function",
  "general",
  "google",
  "in",
  "is",
  "it",
  "its",
  "latest",
  "new",
  "of",
  "on",
  "or",
  "product",
  "service",
  "services",
  "support",
  "supported",
  "that",
  "the",
  "their",
  "this",
  "to",
  "using",
  "with",
]);

let cacheWriteQueue = Promise.resolve();

function hashValue(value) {
  return crypto.createHash("sha256").update(value).digest("hex");
}

async function exists(target) {
  try {
    await access(target);
    return true;
  } catch {
    return false;
  }
}

async function ensureDirectories() {
  await mkdir(outputProductsDir, { recursive: true });
  await mkdir(stateProductsDir, { recursive: true });
}

async function readJson(filePath, fallback) {
  try {
    return JSON.parse(await readFile(filePath, "utf8"));
  } catch {
    return fallback;
  }
}

async function writeJson(filePath, value) {
  await mkdir(path.dirname(filePath), { recursive: true });
  let lastError = null;
  for (let attempt = 1; attempt <= 10; attempt += 1) {
    try {
      await rm(filePath, { force: true }).catch(() => null);
      await writeFile(filePath, `${JSON.stringify(value, null, 2)}\n`);
      return;
    } catch (error) {
      lastError = error;
      if (attempt < 10) {
        await new Promise((resolve) => setTimeout(resolve, 150 * attempt));
      }
    }
  }
  throw lastError;
}

function writeJsonQueued(filePath, value) {
  cacheWriteQueue = cacheWriteQueue.then(() => writeJson(filePath, value));
  return cacheWriteQueue;
}

async function hasPi() {
  return (await $({ quiet: true, nothrow: true })`pi --version`).exitCode === 0;
}

function slugify(text) {
  return String(text || "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .replace(/-{2,}/g, "-");
}

function normalizeWhitespace(text) {
  return String(text || "").replace(/\s+/g, " ").trim();
}

function normalizeText(text) {
  return normalizeWhitespace(text)
    .toLowerCase()
    .replace(/[`*_>#~[\]{}()]/g, " ")
    .replace(/[^\p{L}\p{N}.:/_-]+/gu, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function compactIdentifierText(text) {
  return String(text || "")
    .replace(/\s*([._()/:/-])\s*/g, "$1")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();
}

function normalizeUrl(input) {
  try {
    const url = new URL(input);
    url.hash = "";
    if (url.searchParams.has("hl")) {
      url.searchParams.delete("hl");
    }
    const queryEntries = [...url.searchParams.entries()]
      .filter(([key]) => !/^utm_/i.test(key))
      .sort(([a], [b]) => a.localeCompare(b));
    url.search = "";
    for (const [key, value] of queryEntries) {
      url.searchParams.append(key, value);
    }
    return url.toString().replace(/\/$/, "");
  } catch {
    return String(input || "").trim();
  }
}

function earthEngineCatalogSlugFromAssetId(assetId) {
  return String(assetId || "")
    .trim()
    .replace(/\//g, "_")
    .replace(/[^A-Za-z0-9._-]+/g, "_")
    .replace(/_+/g, "_")
    .replace(/^_|_$/g, "");
}

function earthEngineCatalogAssetIdCandidates(featureName, featureSummary) {
  const candidates = new Set();
  const addCandidate = (value) => {
    const normalized = normalizeWhitespace(value);
    if (normalized) {
      candidates.add(normalized);
    }
  };
  const combinedText = [featureName, featureSummary].filter(Boolean).join(" ");
  const pathMatches = combinedText.match(/[A-Za-z0-9][A-Za-z0-9._-]*(?:\/[A-Za-z0-9][A-Za-z0-9._-]*)+/g) || [];
  for (const match of pathMatches) {
    addCandidate(match);
  }
  const ghslCode = String(featureName || "").match(/\(([A-Z0-9_]+)\)\s*$/);
  if (/^GHSL /i.test(featureName || "") && ghslCode) {
    addCandidate(`JRC/GHSL/P2023A/${ghslCode[1]}`);
  }
  const jrcGswMatch = String(featureName || "").match(/^JRC\s+(GSW\d+_\d+)\s+(.+)$/i);
  if (jrcGswMatch) {
    const suffixMap = new Map([
      ["global surface water", "GlobalSurfaceWater"],
      ["metadata", "Metadata"],
      ["monthly history", "MonthlyHistory"],
      ["monthly recurrence", "MonthlyRecurrence"],
      ["yearly history", "YearlyHistory"],
    ]);
    const datasetSuffix = suffixMap.get(normalizeText(jrcGswMatch[2]));
    if (datasetSuffix) {
      addCandidate(`JRC/${jrcGswMatch[1]}/${datasetSuffix}`);
    }
  }
  if (/^HLSS30$/i.test(featureName || "")) {
    addCandidate("NASA/HLS/HLSS30/v002");
  }
  if (/^NASADEM$/i.test(featureName || "")) {
    addCandidate("NASA/NASADEM_HGT/001");
  }
  if (/^USGS LIMA SR_METADATA$/i.test(featureName || "")) {
    addCandidate("USGS/LIMA/SR_METADATA");
  }
  return [...candidates];
}

function earthEngineCatalogUrlsForFeature(featureName, featureSummary) {
  return earthEngineCatalogAssetIdCandidates(featureName, featureSummary)
    .map((assetId) => earthEngineCatalogSlugFromAssetId(assetId))
    .filter(Boolean)
    .map((slug) => `https://developers.google.com/earth-engine/datasets/catalog/${slug}`);
}

function isOfficialGoogleUrl(url) {
  try {
    const parsedUrl = new URL(url);
    if (!["http:", "https:"].includes(parsedUrl.protocol)) {
      return false;
    }
    const host = parsedUrl.hostname.toLowerCase();
    return ["docs.cloud.google.com", "cloud.google.com", "developers.google.com", "googleapis.dev"]
      .some((candidate) => host === candidate || host.endsWith(`.${candidate}`));
  } catch {
    return false;
  }
}

function tokenize(text) {
  return normalizeText(text)
    .split(/[^a-z0-9]+/i)
    .map((token) => token.trim())
    .filter((token) => token.length >= 2);
}

function isReleaseNotesUrl(url) {
  return /release-notes/i.test(String(url || ""));
}

function isBroadCatalogSupportPage(url) {
  return /\/(?:supported-services|supported-resources)(?:\/|$)/i.test(String(url || ""));
}

function isGenericIamSupportPage(url) {
  return /\/iam\/docs\/(?:custom-roles-permissions-support|deny-permissions-support|pab-blocked-permissions|roles-overview|federated-identity-supported-services)(?:\/|$)/i.test(String(url || ""));
}

function isIamOrAuthFeature(feature) {
  const text = normalizeText(`${feature?.feature_name || ""} ${feature?.feature_summary || ""}`);
  return /\b(iam|permission|permissions|role|roles|auth|oauth|scopes|service account|service agent|policy|policies|access control|identity)\b/.test(text);
}

function descriptiveFeatureTokens(feature) {
  return [...new Set(tokenize(`${feature?.feature_name || ""} ${feature?.feature_summary || ""}`))]
    .filter((token) => token.length >= 3)
    .filter((token) => ![
      "google",
      "cloud",
      "feature",
      "supports",
      "support",
      "supported",
      "available",
      "preview",
      "general",
      "availability",
      "deprecated",
      "environment",
      "service",
      "services",
      "version",
      "runtime",
      "using",
      "added",
      "enable",
      "enabled",
      "became",
    ].includes(token));
}

function hasDedicatedSupportingPage(feature, supportingPages) {
  const normalizedFeatureName = normalizeText(feature?.feature_name || "");
  const tokens = descriptiveFeatureTokens(feature);
  return (supportingPages || []).some((page) => {
    if (!page || isBroadCatalogSupportPage(page.url)) {
      return false;
    }
    const title = normalizeText(page.title || "");
    const url = normalizeText(page.url || "");
    if (normalizedFeatureName && (title.includes(normalizedFeatureName) || url.includes(normalizedFeatureName))) {
      return true;
    }
    const overlap = tokens.filter((token) => title.includes(token) || url.includes(token));
    return overlap.length >= 2;
  });
}

function configConnectorFeatureHints(feature) {
  const featureName = String(feature?.feature_name || "").trim();
  const featureSummary = String(feature?.feature_summary || "").trim();
  const rawResourceKind = featureName.match(/^([A-Z][A-Za-z0-9]+)\b/)?.[1] || "";
  const resourceKind = ({
    NetworkServicsGRPCRoute: "NetworkServicesGRPCRoute",
    NetworkServicsHTTPRoute: "NetworkServicesHTTPRoute",
    NetworkServicsTCPRoute: "NetworkServicesTCPRoute",
  })[rawResourceKind] || rawResourceKind;
  const exactIdentifiers = [...new Set([
    ...extractExactIdentifiers(featureName),
    ...extractExactIdentifiers(featureSummary),
  ])];
  const fieldTerms = [...new Set(exactIdentifiers.flatMap((identifier) => {
    const trimmed = String(identifier || "").trim();
    if (!trimmed) {
      return [];
    }
    const withoutPrefix = trimmed.replace(/^(spec|status)\./i, "");
    const withoutItems = withoutPrefix.replace(/\.items\./gi, ".").replace(/^items\./i, "");
    const tokens = [
      withoutPrefix,
      withoutItems,
      withoutItems.replace(/\./g, " "),
      withoutItems.split(".").slice(-2).join(" "),
      withoutItems.split(".").slice(-1)[0],
    ];
    return tokens
      .map((token) => normalizeText(token))
      .filter(Boolean);
  }))];
  return {
    resourceKind,
    exactIdentifiers,
    fieldTerms,
  };
}

function featureEvidenceAliases(productName, feature) {
  const normalizedProduct = normalizeText(productName || "");
  const normalizedFeatureName = normalizeText(feature?.feature_name || "");
  const normalizedUrl = normalizedFeatureName;
  const text = normalizedFeatureName;
  const aliases = [];

  if (normalizedProduct === "earth engine data catalog") {
    aliases.push(
      ...earthEngineCatalogAssetIdCandidates(feature?.feature_name || "", feature?.feature_summary || ""),
    );
  }

  if (normalizedProduct === "gmail api") {
    if (normalizedFeatureName === "deal cards in the promotions tab") {
      aliases.push("deal cards", "promotions tab", "gmail promotions tab");
    }
    if (normalizedFeatureName === "message.internaldate") {
      aliases.push("internaldate");
    }
    if (normalizedFeatureName === "review action") {
      aliases.push("review", "please review", "in app action");
    }
    if (normalizedFeatureName === "rsvp action") {
      aliases.push("rsvp", "event reservation", "in app action");
    }
  }

  if (normalizedProduct === "security command center") {
    if (/^YL2_GKE_SUSPICIOUS_CRYPTOMINING_POD$/i.test(feature?.feature_name || "")) {
      aliases.push("Suspicious Kubernetes Container Names - Cryptocurrency Mining", "gke suspicious cryptomining pod");
    }
    if (/^YL2_GKE_SERVICE_ACCOUNT_CREATION_SENSITIVE_NAMESPACE$/i.test(feature?.feature_name || "")) {
      aliases.push("Service Account Created in sensitive namespace", "gke service account creation sensitive namespace");
    }
    if (/^OPEN_GROUP_IAM_MEMBER detector$/i.test(feature?.feature_name || "")) {
      aliases.push("Open group IAM member");
    }
    if (/^Finding\.indicator\.uris attribute$/i.test(feature?.feature_name || "")) {
      aliases.push("indicator.uris", "V1.Indicator", "Indicator");
    }
    if (/^CONTAINER_IMAGE_VULNERABILITY detector$/i.test(feature?.feature_name || "")) {
      aliases.push("CONTAINER_IMAGE_VULNERABILITY", "Container image vulnerability");
    }
    if (/^Web Security Scanner .* finding type$/i.test(feature?.feature_name || "")
      || /^(CLICKJACKING_PROTECTION_MISSING|COOP_MISSING|CSP_MISCONFIGURATION|CSP_MISSING) detector$/i.test(feature?.feature_name || "")
      || /^SERVER_SIDE_REQUEST_FORGERY finding type$/i.test(feature?.feature_name || "")) {
      aliases.push("Web Security Scanner findings", "finding type");
    }
  }

  if (normalizedProduct === "google kubernetes engine") {
    if (/flowschema|prioritylevelconfiguration|flowcontrol\.apiserver\.k8s\.io/i.test(normalizedFeatureName)) {
      aliases.push("flowcontrol.apiserver.k8s.io", "flowschema", "prioritylevelconfiguration");
    }
    if (/node_sa_missing_permissions|node service accounts|missing iam permissions/i.test(normalizedFeatureName)) {
      aliases.push("NODE_SA_MISSING_PERMISSIONS", "node service accounts", "missing iam permissions", "gke recommendations", "diagnosis recommender");
    }
    if (/vm\.max_map_count/i.test(normalizedFeatureName)) {
      aliases.push("vm.max_map_count", "sysctl configuration", "node system configuration");
    }
    if (/persistent disk csi driver|pd\.csi\.storage\.gke\.io/i.test(normalizedFeatureName)) {
      aliases.push("pd.csi.storage.gke.io", "persistent disk csi driver", "compute engine persistent disk csi driver");
    }
    if (/optimize-utilization|autoscaling profile/i.test(normalizedFeatureName)) {
      aliases.push("gke.io", "optimize utilization", "optimize-utilization-scheduler");
    }
  }

  if (normalizedProduct === "dataproc") {
    if (/dataproc\.artifacts\.remove|serverless spark conscrypt removal|default artifact removal/i.test(normalizedFeatureName)) {
      aliases.push("dataproc.artifacts.remove", "dataproc artifacts remove");
    }
    if (/spark\.dataproc\.scaling\.version|autoscaling version selection/i.test(normalizedFeatureName)) {
      aliases.push("spark.dataproc.scaling.version", "autoscaling version");
    }
    if (/agent\.ha\.enabled|high availability mode/i.test(normalizedFeatureName)) {
      aliases.push("agent.ha.enabled", "dataproc agent", "high availability mode");
    }
    if (/spark\.dataproc\.diagnostics\.enabled|auto diagnostics/i.test(normalizedFeatureName)) {
      aliases.push("spark.dataproc.diagnostics.enabled", "dataproc diagnostics");
    }
    if (/gcloud_dataproc_personal_cluster\.py/i.test(normalizedFeatureName)) {
      aliases.push("gcloud_dataproc_personal_cluster.py", "personal auth beta");
    }
    if (/alpha\.state\.shuffle\.hcfs\.enabled/i.test(normalizedFeatureName)) {
      aliases.push("alpha.state.shuffle.hcfs.enabled", "shuffle hcfs", "enhanced flexibility mode");
    }
    if (/am\.primary_only|application master primary-only placement/i.test(normalizedFeatureName)) {
      aliases.push("am.primary_only", "application master", "primary_only");
    }
    if (/dataproc\.localssd\.mount\.enable/i.test(normalizedFeatureName)) {
      aliases.push("dataproc.localssd.mount.enable", "local ssd");
    }
    if (/fs\.gs\.outputstream\.type|appendable output streams/i.test(normalizedFeatureName)) {
      aliases.push("fs.gs.outputstream.type", "outputstream type", "basic");
    }
  }

  if (normalizedProduct === "alloydb") {
    if (/conversational analytics/i.test(normalizedFeatureName)) {
      aliases.push("conversational analytics", "data agent");
    }
    if (/ai\.hybrid_search|hybrid_search function/i.test(normalizedFeatureName)) {
      aliases.push("ai.hybrid_search", "hybrid_search", "hybrid vector similarity search");
    }
    if (/cache-aware query planning|alloydb\.enable_cache_aware_costing/i.test(normalizedFeatureName)) {
      aliases.push("query tuning", "query optimization", "alloydb.enable_cache_aware_costing");
    }
    if (/data residency/i.test(normalizedFeatureName)) {
      aliases.push("data residency");
    }
    if (/vpc service controls/i.test(normalizedFeatureName)) {
      aliases.push("vpc service controls", "vpc-sc");
    }
  }

  if (normalizedProduct === "dialogflow") {
    if (/draw\.io|flow export/i.test(normalizedFeatureName)) {
      aliases.push("draw.io", "flow export", "diagram");
    }
    if (/sys\.person/i.test(normalizedFeatureName)) {
      aliases.push("sys.person", "@sys.person", "system entity");
    }
  }

  if (normalizedProduct === "apigee ui") {
    if (/display name column|apps table/i.test(normalizedFeatureName)) {
      aliases.push("display name", "apps page", "apps table");
    }
    if (/api products table name column|api product/i.test(normalizedFeatureName)) {
      aliases.push("api products", "name column", "distribution");
    }
    if (/overview page|google cloud console/i.test(normalizedFeatureName)) {
      aliases.push("apigee ui", "google cloud console", "ui overview");
    }
    if (/private connection|allowlist/i.test(normalizedFeatureName)) {
      aliases.push("private connection projects", "accepted private connection projects", "edit instance");
    }
    if (/data collectors/i.test(normalizedFeatureName)) {
      aliases.push("data collectors", "collectors");
    }
    if (/legacy format/i.test(normalizedFeatureName)) {
      aliases.push("legacy format", "legacy fields");
    }
    if (/ip range prefix/i.test(normalizedFeatureName)) {
      aliases.push("ip range prefix", "ip range", "prefix selection");
    }
  }

  if (normalizedProduct === "earth engine code editor") {
    if (/ui\.url/i.test(normalizedFeatureName)) {
      aliases.push("ui.url", "script url", "url parameters");
    }
    if (/ui\.root\.onresize/i.test(normalizedFeatureName)) {
      aliases.push("ui.root.onresize", "ui.root", "onresize");
    }
    if (/ui\.util\./i.test(normalizedFeatureName)) {
      aliases.push("ui.util", "cleartimeout", "setinterval", "settimeout", "ratelimit", "throttle");
    }
    for (const identifier of extractExactIdentifiers(feature?.feature_name || "")) {
      if (/^ui\./i.test(identifier)) {
        aliases.push(identifier, identifier.replace(/\./g, "-").toLowerCase());
      }
    }
  }

  if (normalizedProduct === "earth engine javascript client library") {
    if (/^ee\.layers\.ImageOverlay$/i.test(feature?.feature_name || "")) {
      aliases.push("ImageOverlay", "client-side web apps", "FeatureView");
    }
    if (/^ee\.MapLayerOverlay$/i.test(feature?.feature_name || "")) {
      aliases.push("MapLayerOverlay", "App Engine example apps", "map layer");
    }
    if (/^getMap\(\) method$/i.test(feature?.feature_name || "")) {
      aliases.push("getMap", "getMap()", "client-side web apps", "App Engine");
    }
  }

  if (normalizedProduct === "cloud composer") {
    if (/web server auto-scaling worker configuration|webserver\.workers/i.test(normalizedFeatureName)) {
      aliases.push("webserver.workers", "webserver-workers", "autoscaling environments", "airflow web server");
    }
    if (/core\.store_dag_code/i.test(normalizedFeatureName)) {
      aliases.push("core.store_dag_code", "dag code");
    }
    if (/core\.store_serialized_dags/i.test(normalizedFeatureName)) {
      aliases.push("core.store_serialized_dags", "serialized dags");
    }
  }

  if (normalizedProduct === "google secops" || normalizedProduct === "google secops siem") {
    if (/mcp use control via organization policies|gcp\.managed/i.test(normalizedFeatureName)) {
      aliases.push("gcp.managed.allowedmcpservices", "allowedmcpservices", "control mcp use with iam", "organization policies");
    }
    if (/re\.capture_all/i.test(normalizedFeatureName)) {
      aliases.push("re.capture_all", "re.capture_all()", "capture all", "yara-l 2.0 syntax");
    }
    if (/strings\.ends_with/i.test(normalizedFeatureName)) {
      aliases.push("strings.ends_with", "strings.ends_with()", "ends_with", "yara-l functions");
    }
    if (/strings\.split/i.test(normalizedFeatureName)) {
      aliases.push("strings.split", "split", "yara-l 2.0 syntax");
    }
    if (/window\.range/i.test(normalizedFeatureName)) {
      aliases.push("window.range", "range", "yara-l 2.0 syntax");
    }
    if (/idm\.is_(?:alert|significant)|alert metadata fields/i.test(normalizedFeatureName)) {
      aliases.push("idm.is_alert", "idm.is_significant", "alert metadata", "idm");
    }
    if (/timestamp\.get_date/i.test(normalizedFeatureName)) {
      aliases.push("timestamp.get_date", "get_date", "yara-l 2.0 syntax");
    }
    if (/arrays\.length/i.test(normalizedFeatureName)) {
      aliases.push("arrays.length", "arrays.length()", "length()", "yara-l 2.0 syntax");
    }
  }

  if (normalizedProduct === "container optimized os") {
    if (/cloud-final\.service|multi-user\.target|final\.service/i.test(normalizedFeatureName)) {
      aliases.push("cloud-final.service", "multi-user.target", "final.service", "cloud final");
    }
    if (/named service sequencing|nss-lookup\.target|lookup\.target/i.test(normalizedFeatureName)) {
      aliases.push("named", "nss-lookup.target", "lookup.target", "named service");
    }
    if (/trusted ima certificate loading|pubkey\.x509/i.test(normalizedFeatureName)) {
      aliases.push("pubkey.x509", "/etc/ima/pubkey.x509", "trusted ima certificate", "ima certificate");
    }
    if (/resolv\.conf/i.test(normalizedFeatureName)) {
      aliases.push("/etc/resolv.conf", "resolv.conf", "bind mount options", "toolbox");
    }
  }

  if (normalizedProduct === "earth engine python client library") {
    if (/ee\.data/i.test(normalizedFeatureName)) {
      aliases.push("ee.data.getpixels", "ee.data.computepixels", "ee.data.computefeatures", "ee.data.listfeatures", "ee.data");
    }
    if (/ee\.oauth/i.test(normalizedFeatureName)) {
      aliases.push("ee.oauth.flow", "ee.oauth", "oauth flow", "flow class");
    }
  }

  if (normalizedProduct === "cloud deployment manager") {
    if (/projects\.locations\.jobs|cloud scheduler/i.test(normalizedFeatureName)) {
      aliases.push("projects.locations.jobs", "cloud scheduler", "cloud scheduler jobs");
    }
    if (/appengine\.v1beta4/i.test(normalizedFeatureName)) {
      aliases.push("appengine.v1beta4", "appengine v1beta4", "app engine v1beta4");
    }
    if (/appengine\.v1beta5/i.test(normalizedFeatureName)) {
      aliases.push("appengine.v1beta5", "appengine v1beta5", "app engine v1beta5");
    }
    if (/cluster\.v1\.cluster/i.test(normalizedFeatureName)) {
      aliases.push("cluster.v1.cluster", "cluster v1 cluster", "gke cluster");
    }
    if (/cluster\.v1beta1\.cluster/i.test(normalizedFeatureName)) {
      aliases.push("cluster.v1beta1.cluster", "cluster v1beta1 cluster", "gke cluster");
    }
    if (/container\.v1beta1\.cluster/i.test(normalizedFeatureName)) {
      aliases.push("container.v1beta1.cluster", "container v1beta1 cluster", "gke cluster");
    }
  }

  if (normalizedProduct === "apigee advanced api security") {
    if (/security action status indicators|security actions|security scores/i.test(normalizedFeatureName)) {
      aliases.push("security actions", "security scores", "api-security", "security add-on");
    }
    if (/runtime region expansion|data residency/i.test(normalizedFeatureName)) {
      aliases.push("drz concepts", "data residency", "regional expansion", "runtime region");
    }
    if (/custom security profiles|api management/i.test(normalizedFeatureName)) {
      aliases.push("manage security add-on", "custom security profiles", "security add-on");
    }
    if (/client ip resolution/i.test(normalizedFeatureName)) {
      aliases.push("client ip resolution", "x-forwarded-for", "client ip");
    }
  }

  if (normalizedProduct === "apigee monetization") {
    if (/data residency/i.test(normalizedFeatureName)) {
      aliases.push("data residency", "monetization overview");
    }
    if (/recurring fees/i.test(normalizedFeatureName)) {
      aliases.push("recurring fees", "rate plans", "billing frequency");
    }
    if (/fee-based values/i.test(normalizedFeatureName)) {
      aliases.push("fee-based values", "additional fee-based values", "rate plans");
    }
    if (/paymentfundingmodel/i.test(normalizedFeatureName)) {
      aliases.push("paymentFundingModel", "payment funding model", "rateplans");
    }
  }

  if (normalizedProduct === "apigee integrated portal") {
    if (/classic ui/i.test(normalizedFeatureName)) {
      aliases.push("classic ui", "apigee classic ui", "intro portals");
    }
    if (/apps and teams|table column sorting/i.test(normalizedFeatureName)) {
      aliases.push("apps", "teams", "sorting", "publish apis");
    }
    if (/inactive user login error messaging/i.test(normalizedFeatureName)) {
      aliases.push("inactive user", "login error", "portal login");
    }
  }

  if (normalizedProduct === "cloud run") {
    if (/requirements\.txt|automatic entrypoint detection|python buildpack/i.test(normalizedFeatureName)) {
      aliases.push("requirements.txt", "python buildpack", "automatic entrypoint detection", "entrypoint");
    }
    if (/java\.util\.logging|execution id logging/i.test(normalizedFeatureName)) {
      aliases.push("java.util.logging", "java util logging", "execution id");
    }
    if (/http\/2 support|h2c|http2/i.test(normalizedFeatureName)) {
      aliases.push("http/2", "h2c", "http2", "container runtime contract");
    }
    if (/v1alpha1 api|cloud run v1alpha1/i.test(normalizedFeatureName)) {
      aliases.push("v1alpha1", "cloud run admin api", "admin api overview");
    }
  }

  if (normalizedProduct === "chat api") {
    if (/global user-level chat event subscriptions/i.test(normalizedFeatureName)) {
      aliases.push("chat.googleapis.com", "event subscriptions", "user level", "spaces/-", "EventType");
    }
    if (/chat space human membership role updates/i.test(normalizedFeatureName)) {
      aliases.push("spaces.members.patch", "membership role", "patch membership", "update membership");
    }
  }

  if (normalizedProduct === "calendar api") {
    if (/birthday event type/i.test(normalizedFeatureName)) {
      aliases.push("birthday", "events.list", "events.watch", "event types");
    }
  }

  if (normalizedProduct === "earth engine server") {
    if (/^ewmacd$/i.test(normalizedFeatureName)) {
      aliases.push("ee.Algorithms.TemporalSegmentation.Ewmacd", "TemporalSegmentation.Ewmacd", "Ewmacd");
    }
    if (/^vct$/i.test(normalizedFeatureName)) {
      aliases.push("ee.Algorithms.TemporalSegmentation.VCT", "TemporalSegmentation.VCT", "VCT");
    }
  }

  if (normalizedProduct === "vertex ai search") {
    if (/conversations\.converse/i.test(normalizedFeatureName)) {
      aliases.push("conversations.converse", "SummaryWithMetadata", "response summary");
    }
    if (/documents\.purge|enterprise search documents purge/i.test(normalizedFeatureName)) {
      aliases.push("documents.purge", "purge data", "purge documents");
    }
  }

  if (normalizedProduct === "vertex ai workbench") {
    if (/preinstalled libraries/i.test(normalizedFeatureName)) {
      aliases.push("keyrings.google-artifactregistry-auth", "keyring", "preinstalled libraries");
    }
    if (/allowed domains/i.test(normalizedFeatureName)) {
      aliases.push("notebooks.cloud.google.com", "datalab.cloud.google.com", "allowed domains");
    }
  }

  if (normalizedProduct === "google distributed cloud software only for vmware") {
    if (/gkeadm credential configuration file/i.test(normalizedFeatureName)) {
      aliases.push("config.yaml", "credential configuration file", "admin workstation configuration file");
    }
  }

  if (normalizedProduct === "apigee analytics") {
    if (/advanced api operations|aapi ops/i.test(normalizedFeatureName)) {
      aliases.push("Advanced API Operations", "AAPI Ops", "advanced api ops");
    }
  }

  if (normalizedProduct === "bigquery") {
    if (/^swivel$/i.test(normalizedFeatureName)) {
      aliases.push("SWIVEL", "pivot and unpivot", "query syntax");
    }
    if (/^lax_(?:float64|int64)$/i.test(normalizedFeatureName)) {
      aliases.push("LAX_FLOAT64", "LAX_INT64", "JSON functions", "lax conversion");
    }
  }

  if (normalizedProduct === "buildpacks") {
    if (/go module dependency management requirement|gopath deprecated/i.test(normalizedFeatureName)) {
      aliases.push("go.mod", "GOPATH", "Go buildpacks");
    }
  }

  if (normalizedProduct === "apps script") {
    if (/custom formula data validation/i.test(normalizedFeatureName)) {
      aliases.push("CUSTOM_FORMULA", "requireFormulaSatisfied", "DataValidationBuilder", "DataValidationCriteria");
    }
  }

  if (normalizedProduct === "compute engine"
    || normalizedProduct === "resource manager"
    || normalizedProduct === "cloud sql for mysql"
    || normalizedProduct === "cloud sql for sql server") {
    if (/mcp .*organization polic|organization polic.*mcp|gcp\.managed/i.test(normalizedFeatureName)) {
      aliases.push("gcp.managed.allowedMCPServices", "allowedMCPServices", "organization policy", "mcp");
    }
  }

  if (normalizedProduct === "compute engine") {
    if (/^n2d$/i.test(normalizedFeatureName)) {
      aliases.push("N2D", "N2D machine series", "general-purpose machine family");
    }
  }

  if (normalizedProduct === "confidential space") {
    if (/confidential space image support status assertion/i.test(normalizedFeatureName)) {
      aliases.push("assertion.submods.confidential_space.support_attributes", "support_attributes", "confidential space images", "attestation assertions");
    }
  }

  if (normalizedProduct === "dataflow") {
    if (/regional endpoints in montréal|northamerica-northeast1/i.test(normalizedFeatureName)) {
      aliases.push("northamerica-northeast1", "Montréal", "Montreal", "regional endpoints");
    }
  }

  if (normalizedProduct === "cloud load balancing") {
    if (/externalnetworkloadbalancerrule/i.test(normalizedFeatureName)) {
      aliases.push("loadbalancing.googleapis.com/ExternalNetworkLoadBalancerRule", "ExternalNetworkLoadBalancerRule", "monitoring resource");
    }
    if (/client_ip_no_destination|source-ip session affinity/i.test(normalizedFeatureName)) {
      aliases.push("CLIENT_IP_NO_DESTINATION", "source-IP session affinity", "internal tcp/udp load balancing");
    }
  }

  if (normalizedProduct === "google workspace admin sdk") {
    if (/users\.list|search for users/i.test(normalizedFeatureName)) {
      aliases.push("users.list", "search users", "directory api");
    }
  }

  if (normalizedProduct === "looker") {
    if (/formatters\.select|chart config editor/i.test(normalizedFeatureName)) {
      aliases.push("formatters.select", "Chart Config Editor", "chart config");
    }
    if (/job_creation_optional|optional job creation/i.test(normalizedFeatureName)) {
      aliases.push("JOB_CREATION_OPTIONAL", "optional job creation mode", "JOBS view", "BigQuery jobs");
    }
  }

  if (normalizedProduct === "managed service for microsoft active directory") {
    if (/antivirus|virus|malware/i.test(normalizedFeatureName)) {
      aliases.push("antivirus", "virus", "malware", "security hardening");
    }
  }

  if (normalizedProduct === "maps sdk for android") {
    if (/org\.apache\.http\.legacy/i.test(normalizedFeatureName)) {
      aliases.push("org.apache.http.legacy", "Android Studio project", "maps sdk for android");
    }
  }

  if (normalizedProduct === "storage transfer service") {
    if (/vpc service controls|vpc sc/i.test(normalizedFeatureName)) {
      aliases.push("VPC Service Controls", "VPC SC", "file system transfers");
    }
  }

  if (normalizedProduct === "text to speech") {
    if (/cloud text-to-speech api|text-to-speech api/i.test(normalizedFeatureName)) {
      aliases.push("Cloud Text-to-Speech API", "Text-to-Speech API", "client libraries");
    }
  }

  if (normalizedProduct === "vertex ai") {
    if (/google\.cloud\.aiplatform\.gapic|vertex ai sdk for python/i.test(normalizedFeatureName)) {
      aliases.push("google.cloud.aiplatform.gapic", "Vertex AI SDK for Python", "Install the Vertex AI SDK for Python");
    }
  }

  if (normalizedProduct === "looker studio") {
    if (/native_dimension/i.test(normalizedFeatureName)) {
      aliases.push("NATIVE_DIMENSION", "native dimension", "community connector api", "connector reference");
    }
  }

  if (normalizedProduct === "cloud deploy") {
    if (/promoterelease api|releases\.rollouts\.create/i.test(normalizedFeatureName)) {
      aliases.push("releases.rollouts.create", "rollouts.create", "manage rollouts", "promote release");
    }
  }

  if (normalizedProduct === "error reporting") {
    if (/error reporting api report endpoint|report endpoint/i.test(normalizedFeatureName)) {
      aliases.push("report endpoint", "troubleshooting", "Compute Engine setup", "GKE setup", "EC2 setup");
    }
  }

  if (normalizedProduct === "firestore") {
    if (/mcp .*organization polic|organization polic.*mcp|gcp\.managed/i.test(normalizedFeatureName)) {
      aliases.push("gcp.managed.allowedMCPServices", "allowedMCPServices", "use-firestore-mcp", "secure agent interactions", "firestore mcp");
    }
  }

  if (normalizedProduct === "google cloud contact center as a service") {
    if (/end_user\.phone|end user phone|apps api .*parameter/i.test(normalizedFeatureName)) {
      aliases.push("end_user.phone", "end user phone", "Apps API", "mid-session authentication", "call endpoints", "end user");
    }
    if (/end_user_number/i.test(normalizedFeatureName)) {
      aliases.push("END_USER_NUMBER", "@{END_USER_NUMBER}", "call settings", "request phone number");
    }
  }

  if (normalizedProduct === "google cloud mcp servers") {
    if (/mcp .*organization polic|organization polic.*mcp|gcp\.managed/i.test(normalizedFeatureName)) {
      aliases.push("gcp.managed.allowedMCPServices", "allowedMCPServices", "control MCP use", "prevent read-write tool use");
    }
  }

  if (normalizedProduct === "google cloud vmware engine") {
    if (/managed credentials for vcenter and nsx-t manager/i.test(normalizedFeatureName)) {
      aliases.push("vCenter", "NSX-T Manager", "management appliances", "elevate privilege");
    }
  }

  if (normalizedProduct === "deep learning vm images") {
    if (/compute\.instances\.get/i.test(normalizedFeatureName)) {
      aliases.push("compute.instances.get", "VM instances", "required permissions");
    }
  }

  if (normalizedProduct === "cloud build") {
    if (/^cloud build api$/i.test(normalizedFeatureName)) {
      aliases.push("cloud build api", "cloudbuild.googleapis.com", "rest reference", "projects.locations.builds");
    }
  }

  if (normalizedProduct === "cloud data fusion") {
    if (/instancev3 monitored resource/i.test(normalizedFeatureName)) {
      aliases.push("InstanceV3", "datafusion.googleapis.com/InstanceV3", "monitored resource");
    }
  }

  if (normalizedProduct === "google secops siem") {
    if (/threatconnect_ioc_v3/i.test(normalizedFeatureName)) {
      aliases.push("THREATCONNECT_IOC_V3", "ThreatConnect IOC v3");
    }
    if (/entity-only rules for risk-based alerting/i.test(normalizedFeatureName)) {
      aliases.push("ENTITY_RISK_CHANGE", "entity risk change", "risk-based alerting", "entity-only rules");
    }
  }

  if (normalizedProduct === "cloud logging") {
    if (/windows logging agent v1-9/i.test(normalizedFeatureName)) {
      aliases.push("config.d", "windows logging agent", "legacy logging agent");
    }
  }

  if (normalizedProduct === "sap on google cloud") {
    if (/alias-ip vip deployment template/i.test(normalizedFeatureName)) {
      aliases.push("template.yaml", "alias-ip", "vip deployment template", "SLES");
    }
  }

  if (normalizedProduct === "sensitive data protection") {
    if (/us_state|u\.s\./i.test(normalizedFeatureName)) {
      aliases.push("US_STATE", "U.S.", "U.S. state", "infotype");
    }
    if (/content\.redact|content\.deidentify|de-identification/i.test(normalizedFeatureName)) {
      aliases.push("content.redact", "content.deidentify", "deidentify", "redact");
    }
    if (/inspect\.operations\.create|bigquery inspection/i.test(normalizedFeatureName)) {
      aliases.push("inspect.operations.create", "inspect operations create", "bigquery inspection");
    }
    if (/image findings redaction|image redaction/i.test(normalizedFeatureName)) {
      aliases.push("image redaction", "redacting sensitive data images", "image redaction config");
    }
  }

  if (normalizedProduct === "workflows") {
    if (normalizedFeatureName === "get_type function") {
      aliases.push("get_type", "get_type()", "data type");
    }
    if (normalizedFeatureName === "cross-project service account deployment") {
      aliases.push("cross-project service account", "deploy a workflow with a cross-project service account");
    }
  }

  if (normalizedProduct === "config connector") {
    const hints = configConnectorFeatureHints(feature);
    if (hints.resourceKind) {
      aliases.push(hints.resourceKind);
    }
    aliases.push(...hints.fieldTerms);
    if (/annotation/i.test(normalizedFeatureName)) {
      aliases.push("annotations", "resource-specific annotations", "disable-dependent-services");
    }
    if (/webhook validation/i.test(normalizedFeatureName)) {
      aliases.push("webhook", "spec.webhooks", "customizing webhook timeouts");
    }
  }

  if (normalizedProduct === "cloud sql for postgresql" && /\bflag\b/i.test(normalizedFeatureName)) {
    for (const identifier of extractExactIdentifiers(feature?.feature_name)) {
      aliases.push(identifier, identifier.replace(/\./g, " "));
    }
    if (/pg_squeeze/i.test(normalizedFeatureName)) {
      aliases.push("pg_squeeze", "extension");
    }
    if (/pg_wait_sampling/i.test(normalizedFeatureName)) {
      aliases.push("pg_wait_sampling", "query insights", "wait events");
    }
    if (/rdkit/i.test(normalizedFeatureName)) {
      aliases.push("rdkit", "extension");
    }
  }


  if (normalizedProduct === "bigquery") {
    if (/ml\.generate_text_embedding function/i.test(normalizedFeatureName)) {
      aliases.push("ml.generate_embedding", "ai.generate_embedding", "generate text embeddings");
    }
    if (/mcp control (?:via|with) organization polic/i.test(normalizedFeatureName)) {
      aliases.push("allowedmcpservices", "gcp.managed.allowedMCPServices", "organization policy", "custom organization policy", "mcp server");
    }
    if (/reservation\.v1beta1 api deprecation/i.test(normalizedFeatureName)
      || /google\.cloud\.bigquery\.reservation\.v1beta1\.api/i.test(normalizedFeatureName)) {
      aliases.push("google.cloud.bigquery.reservation.v1beta1.api", "bigquery reservation api", "reservationservice");
    }
    if (/reservations_timeline/i.test(normalizedFeatureName)) {
      aliases.push("information_schema.reservations_timeline", "reservations timeline");
    }
    if (/streaming_timeline/i.test(normalizedFeatureName)) {
      aliases.push("information_schema.streaming_timeline", "streaming timeline");
    }
    if (/organization_options_changes/i.test(normalizedFeatureName)) {
      aliases.push("INFORMATION_SCHEMA.ORGANIZATION_OPTIONS_CHANGES", "organization options changes");
    }
    if (/project_options_changes/i.test(normalizedFeatureName)) {
      aliases.push("INFORMATION_SCHEMA.PROJECT_OPTIONS_CHANGES", "project options changes");
    }
    if (/^custom masking routines$/i.test(normalizedFeatureName)) {
      aliases.push("data masking", "masking routine", "user-defined functions", "SAFE.REGEXP_REPLACE");
    }
    if (/^lax_bool$/i.test(normalizedFeatureName)) {
      aliases.push("json functions", "working with json data");
    }
    if (/^st_(azimuth|interiorrings|endpoint|pointn|startpoint|dump)(?: function)?$/i.test(normalizedFeatureName)) {
      aliases.push("geography functions");
    }
    if (/^dataset copy$/i.test(normalizedFeatureName)) {
      aliases.push("copy a dataset", "copy datasets", "manage datasets", "bigquery data transfer service");
    }
  }

  if (normalizedProduct === "google secops" || normalizedProduct === "google secops siem") {
    if (/re\.capture_all/i.test(normalizedFeatureName)
      && /\/chronicle\/docs\/yara-l\/functions(?:\/|$)/.test(normalizedUrl)
      && /re\.capture_all/.test(text)) return true;
    if (/strings\.ends_with/i.test(normalizedFeatureName)
      && /\/chronicle\/docs\/yara-l\/functions(?:\/|$)/.test(normalizedUrl)
      && /strings\.ends_with/.test(text)) return true;
    if (/strings\.split/i.test(normalizedFeatureName)
      && /\/chronicle\/docs\/yara-l\/functions(?:\/|$)/.test(normalizedUrl)
      && /strings\.split/.test(text)) return true;
    if (/window\.range/i.test(normalizedFeatureName)
      && /\/chronicle\/docs\/yara-l\/functions(?:\/|$)/.test(normalizedUrl)
      && /window\.range/.test(text)) return true;
    if (/timestamp\.get_date/i.test(normalizedFeatureName)
      && /\/chronicle\/docs\/yara-l\/functions(?:\/|$)/.test(normalizedUrl)
      && /timestamp\.get_date/.test(text)) return true;
    if (/arrays\.length/i.test(normalizedFeatureName)
      && /\/chronicle\/docs\/yara-l\/functions(?:\/|$)/.test(normalizedUrl)
      && /arrays\.length/.test(text)) return true;
    if ((/idm\.is_significant|idm\.is_alert/i.test(normalizedFeatureName))
      && /\/chronicle\/docs\/(?:detection\/migrate-cbn-alerts|soar\/investigate\/working-with-alerts\/whats-on-the-alert-overview-tab|detection\/detection-delays)(?:\/|$)/.test(normalizedUrl)
      && /idm\.is_significant|idm\.is_alert|alert metadata/.test(text)) return true;
    if (/mcp use control via organization policies|gcp\.managed/i.test(normalizedFeatureName)
      && /\/chronicle\/docs\/(?:reference\/google-unified-security|secops\/secops-overview)(?:\/|$)/.test(normalizedUrl)
      && /gcp\.managed\.allowedMCPServices|allowedMCPServices|mcp/.test(text)) return true;
  }

  if (normalizedProduct === "container optimized os") {
    if ((/cloud-final\.service|multi-user\.target|final\.service/i.test(normalizedFeatureName))
      && /\/container-optimized-os\/docs\/how-to\/(?:create-configure-instance|run-container-instance)(?:\/|$)/.test(normalizedUrl)
      && /cloud-final\.service|multi-user\.target|final\.service/.test(text)) return true;
    if ((/named service sequencing|nss-lookup\.target|lookup\.target/i.test(normalizedFeatureName))
      && /\/container-optimized-os\/docs\/how-to\/(?:run-container-instance|cis-compliance)(?:\/|$)/.test(normalizedUrl)
      && /named|nss-lookup\.target|lookup\.target/.test(text)) return true;
    if ((/trusted ima certificate loading|pubkey\.x509/i.test(normalizedFeatureName))
      && /\/container-optimized-os\/docs\/(?:concepts\/security|how-to\/run-container-instance)(?:\/|$)/.test(normalizedUrl)
      && /pubkey\.x509|ima certificate|trusted ima certificate/.test(text)) return true;
    if (/resolv\.conf/i.test(normalizedFeatureName)
      && /\/container-optimized-os\/docs\/(?:how-to\/toolbox|how-to\/create-configure-instance)(?:\/|$)/.test(normalizedUrl)
      && /resolv\.conf|bind mount/.test(text)) return true;
  }

  if (normalizedProduct === "earth engine python client library") {
    if (/ee\.data/i.test(normalizedFeatureName)
      && /\/earth-engine\/(?:guides\/data_extraction|Earth_Engine_REST_API_compute_(?:image|table)|guides\/debugging)(?:\/|$)/.test(normalizedUrl)
      && /ee\.data\.(?:getPixels|computePixels|computeFeatures|listFeatures)|ee\.data/.test(text)) return true;
    if (/ee\.oauth/i.test(normalizedFeatureName)
      && /\/earth-engine\/(?:guides\/auth|guides\/access_control)(?:\/|$)/.test(normalizedUrl)
      && /ee\.oauth\.Flow|authentication helpers in ee\.data|ee\.initialize/.test(text)) return true;
  }

  if (normalizedProduct === "cloud deployment manager") {
    if ((/projects\.locations\.jobs|cloud scheduler/i.test(normalizedFeatureName))
      && /\/deployment-manager\/docs\/configuration\/(?:supported-resource-types|supported-gcp-types|describing-listing-deleting-types|expose-information-outputs)(?:\/|$)/.test(normalizedUrl)
      && /projects\.locations\.jobs|cloud scheduler/.test(text)) return true;
    if ((/appengine\.v1beta4|appengine\.v1beta5/i.test(normalizedFeatureName))
      && /\/deployment-manager\/docs\/configuration\/(?:supported-resource-types|supported-gcp-types)(?:\/|$)/.test(normalizedUrl)
      && /appengine\.v1beta4|appengine\.v1beta5|app engine v1beta4|app engine v1beta5/.test(text)) return true;
    if ((/cluster\.v1\.cluster|cluster\.v1beta1\.cluster|container\.v1beta1\.cluster/i.test(normalizedFeatureName))
      && /\/deployment-manager\/docs\/configuration\/(?:supported-resource-types|supported-gcp-types|describing-listing-deleting-types)(?:\/|$)/.test(normalizedUrl)
      && /cluster\.v1\.cluster|cluster\.v1beta1\.cluster|container\.v1beta1\.cluster|gke cluster/.test(text)) return true;
  }

  if (normalizedProduct === "apigee advanced api security") {
    if ((/security action status indicators|security actions|security scores/i.test(normalizedFeatureName))
      && /\/apigee\/docs\/api-security\/(?:security-actions|security-actions-api|security-scores|security-scores-api)(?:\/|$)/.test(normalizedUrl)
      && /security actions|security scores|api-security/.test(text)) return true;
    if ((/runtime region expansion|data residency/i.test(normalizedFeatureName))
      && /\/apigee\/docs\/(?:api-platform\/get-started\/drz-concepts|api-platform\/reference\/manage-security-add-on|apihub\/advanced-api-security-multi-gateway)(?:\/|$)/.test(normalizedUrl)
      && /drz|data residency|region/.test(text)) return true;
    if ((/custom security profiles|api management/i.test(normalizedFeatureName))
      && /\/apigee\/docs\/api-platform\/reference\/manage-security-add-on(?:\/|$)/.test(normalizedUrl)
      && /security add-on|custom security profiles/.test(text)) return true;
    if (/client ip resolution/i.test(normalizedFeatureName)
      && /\/apigee\/docs\/api-platform\/system-administration\/client-ip-resolution(?:\/|$)/.test(normalizedUrl)
      && /client ip resolution|x-forwarded-for/.test(text)) return true;
  }

  if (normalizedProduct === "apigee monetization") {
    if (/data residency/i.test(normalizedFeatureName)
      && /\/apigee\/docs\/api-platform\/monetization\/(?:overview|manage-rate-plans)(?:\/|$)/.test(normalizedUrl)
      && /data residency/.test(text)) return true;
    if (/recurring fees/i.test(normalizedFeatureName)
      && /\/apigee\/docs\/api-platform\/monetization\/(?:overview|manage-rate-plans)(?:\/|$)/.test(normalizedUrl)
      && /recurring fees|billing frequency/.test(text)) return true;
    if (/fee-based values/i.test(normalizedFeatureName)
      && /\/apigee\/docs\/api-platform\/monetization\/manage-rate-plans(?:\/|$)/.test(normalizedUrl)
      && /fee-based values|additional fee/.test(text)) return true;
    if (/paymentfundingmodel/i.test(normalizedFeatureName)
      && /\/apigee\/docs\/api-platform\/monetization\/manage-rate-plans(?:\/|$)/.test(normalizedUrl)
      && /paymentfundingmodel|payment funding model/.test(text)) return true;
  }

  if (normalizedProduct === "apigee integrated portal") {
    if (/classic ui/i.test(normalizedFeatureName)
      && /\/apigee\/docs\/api-platform\/publish\/intro-portals(?:\/|$)/.test(normalizedUrl)
      && /classic ui|portal/.test(text)) return true;
    if ((/apps and teams|table column sorting/i.test(normalizedFeatureName))
      && /\/apigee\/docs\/api-platform\/publish\/portal\/publish-apis(?:\/|$)/.test(normalizedUrl)
      && /apps|teams|sorting/.test(text)) return true;
    if (/inactive user login error messaging/i.test(normalizedFeatureName)
      && /\/apigee\/docs\/api-platform\/publish\/(?:intro-portals|portal\/publish-apis)(?:\/|$)/.test(normalizedUrl)
      && /inactive user|login error/.test(text)) return true;
  }

  if (normalizedProduct === "cloud run") {
    if ((/requirements\.txt|automatic entrypoint detection|python buildpack/i.test(normalizedFeatureName))
      && /\/run\/docs\/quickstarts\/build-and-deploy\/deploy-python-(?:service|fastapi-service|gradio-service|streamlit-service)(?:\/|$)/.test(normalizedUrl)
      && /requirements\.txt|buildpack|entrypoint/.test(text)) return true;
    if ((/java\.util\.logging|execution id logging/i.test(normalizedFeatureName))
      && /\/run\/docs\/runtimes\/java(?:\/|$)/.test(normalizedUrl)
      && /java\.util\.logging|execution id/.test(text)) return true;
    if ((/http\/2 support|h2c|http2/i.test(normalizedFeatureName))
      && /\/run\/docs\/(?:configuring|container-contract|triggering\/https-request)(?:\/|$)/.test(normalizedUrl)
      && /http\/2|h2c|end-to-end http\/2/.test(text)) return true;
    if (/v1alpha1 api|cloud run v1alpha1/i.test(normalizedFeatureName)
      && /\/run\/docs\/reference\/cloud-run-admin-api-overview(?:\/|$)/.test(normalizedUrl)
      && /cloud run admin api|v1alpha1/.test(text)) return true;
  }

  if (normalizedProduct === "chat api") {
    if (/global user-level chat event subscriptions/i.test(normalizedFeatureName)
      && /\/workspace\/chat\/api\/reference\/rest(?:\/|$)|\/workspace\/chat\/api\/reference\/rest\/v1\/(?:Event|EventType)(?:\/|$)/.test(normalizedUrl)
      && /chat\.googleapis\.com|event subscriptions|spaces\/-|eventtype/.test(text)) return true;
    if (/chat space human membership role updates/i.test(normalizedFeatureName)
      && /\/workspace\/chat\/api\/reference\/rest\/v1\/spaces\.members\/patch(?:\/|$)/.test(normalizedUrl)
      && /spaces\.members\.patch|patch/.test(text)) return true;
  }

  if (normalizedProduct === "calendar api") {
    if (/birthday event type/i.test(normalizedFeatureName)
      && /\/workspace\/calendar\/api\/(?:guides\/event-types|v3\/reference\/events\/(?:list|watch))(?:\/|$)/.test(normalizedUrl)
      && /birthday|events\.list|events\.watch/.test(text)) return true;
  }

  if (normalizedProduct === "earth engine server") {
    if (/^ewmacd$/i.test(normalizedFeatureName)
      && /\/earth-engine\/apidocs\/ee-algorithms-temporalsegmentation-ewmacd(?:\/|$)/.test(normalizedUrl)
      && /ewmacd|temporalsegmentation/.test(text)) return true;
    if (/^vct$/i.test(normalizedFeatureName)
      && /\/earth-engine\/apidocs\/ee-algorithms-temporalsegmentation-vct(?:\/|$)/.test(normalizedUrl)
      && /vct|temporalsegmentation/.test(text)) return true;
  }

  if (normalizedProduct === "vertex ai search") {
    if (/conversations\.converse/i.test(normalizedFeatureName)
      && /\/generative-ai-app-builder\/docs\/reference\/rest\/v1alpha\/projects\.locations\.collections\.engines\.conversations\/converse(?:\/|$)/.test(normalizedUrl)
      && /conversations\.converse|summarywithmetadata|response summary/.test(text)) return true;
    if (/documents\.purge|enterprise search documents purge/i.test(normalizedFeatureName)
      && /\/generative-ai-app-builder\/docs\/delete-datastores(?:\/|$)/.test(normalizedUrl)
      && /documents\.purge|purge/.test(text)) return true;
  }

  if (normalizedProduct === "vertex ai workbench") {
    if (/preinstalled libraries/i.test(normalizedFeatureName)
      && /\/vertex-ai\/docs\/workbench\/release-notes(?:\/|$)/.test(normalizedUrl)
      && /keyrings\.google-artifactregistry-auth|preinstalled/.test(text)) return true;
    if (/allowed domains/i.test(normalizedFeatureName)
      && /\/vertex-ai\/docs\/workbench\/release-notes(?:\/|$)/.test(normalizedUrl)
      && /notebooks\.cloud\.google\.com|datalab\.cloud\.google\.com/.test(text)) return true;
  }

  if (normalizedProduct === "google distributed cloud software only for vmware") {
    if (/gkeadm credential configuration file/i.test(normalizedFeatureName)
      && /\/kubernetes-engine\/distributed-cloud\/vmware\/docs\/how-to\/(?:admin-workstation-configuration-file|create-admin-workstation)(?:\/|$)/.test(normalizedUrl)
      && /config\.yaml|credential/.test(text)) return true;
  }

  if (normalizedProduct === "apigee analytics") {
    if (/advanced api operations|aapi ops/i.test(normalizedFeatureName)
      && /\/apigee\/docs\/api-platform\/analytics\/(?:advanced-api-ops|advanced-api-ops-overview)(?:\/|$)/.test(normalizedUrl)
      && /advanced api operations|aapi ops/.test(text)) return true;
  }

  if (normalizedProduct === "bigquery") {
    if (/^swivel$/i.test(normalizedFeatureName)
      && /\/bigquery\/docs\/reference\/standard-sql\/query-syntax(?:\/|$)/.test(normalizedUrl)
      && /swivel/.test(text)) return true;
    if (/^lax_(?:float64|int64)$/i.test(normalizedFeatureName)
      && /\/bigquery\/docs\/reference\/standard-sql\/json_functions(?:\/|$)/.test(normalizedUrl)
      && /LAX_FLOAT64|LAX_INT64|JSON functions/.test(text)) return true;
    if (/mcp control (?:via|with) organization polic/i.test(normalizedFeatureName)
      && /\/(?:bigquery\/docs\/use-bigquery-mcp|mcp\/control-mcp-use-organization)(?:\/|$)/.test(normalizedUrl)
      && /gcp\.managed\.allowedmcpservices|allowedmcpservices|organization policy|custom constraint/.test(text)) return true;
    if ((/reservation\.v1beta1 api deprecation/i.test(normalizedFeatureName) || /google\.cloud\.bigquery\.reservation\.v1beta1\.api/i.test(normalizedFeatureName))
      && /\/bigquery\/docs\/reference\/reservations\/(?:rest|rpc(?:\/google\.cloud\.bigquery\.reservation\.v1)?)?(?:\/|$)/.test(normalizedUrl)
      && /reservationservice|google\.cloud\.bigquery\.reservation\.v1|bigquery reservation api/.test(text)) return true;
    if (/organization_options_changes/i.test(normalizedFeatureName)
      && /\/bigquery\/docs\/information-schema-organization-options-changes(?:\/|$)/.test(normalizedUrl)
      && /organization_options_changes/.test(text)) return true;
    if (/project_options_changes/i.test(normalizedFeatureName)
      && /\/bigquery\/docs\/information-schema-project-options-changes(?:\/|$)/.test(normalizedUrl)
      && /project_options_changes/.test(text)) return true;
    if (/^custom masking routines$/i.test(normalizedFeatureName)
      && /\/bigquery\/docs\/(?:user-defined-functions|column-data-masking|column-data-masking-intro|routines-intro)(?:\/|$)/.test(normalizedUrl)
      && /masking routine|data_masking|regexp_replace|user defined function/.test(text)) return true;
    if (/^lax_bool$/i.test(normalizedFeatureName)
      && /\/bigquery\/docs\/(?:reference\/standard-sql\/json_functions|json-data)(?:\/|$)/.test(normalizedUrl)
      && /lax_bool/.test(text)) return true;
    if (/^st_(azimuth|interiorrings|endpoint|pointn|startpoint|dump)(?: function)?$/i.test(normalizedFeatureName)
      && /\/bigquery\/docs\/reference\/standard-sql\/geography_functions(?:\/|$)/.test(normalizedUrl)
      && /(st_azimuth|st_interiorrings|st_endpoint|st_pointn|st_startpoint|st_dump)/.test(text)) return true;
    if (/^dataset copy$/i.test(normalizedFeatureName)
      && /\/bigquery\/docs\/(?:managing-datasets|dts-introduction|samples\/bigquerydatatransfer-copy-dataset)(?:\/|$)/.test(normalizedUrl)
      && /copy a dataset|copy datasets|dataset copy|cross_region_copy/.test(text)) return true;
  }

  if (normalizedProduct === "buildpacks") {
    if (/go module dependency management requirement|gopath deprecated/i.test(normalizedFeatureName)
      && /\/docs\/buildpacks\/go(?:\/|$)/.test(normalizedUrl)
      && /go\.mod|gopath/.test(text)) return true;
  }

  if (normalizedProduct === "apps script") {
    if (/custom formula data validation/i.test(normalizedFeatureName)
      && /\/apps-script\/reference\/spreadsheet\/data-validation-(?:builder|criteria)(?:\/|$)/.test(normalizedUrl)
      && /CUSTOM_FORMULA|requireFormulaSatisfied|DataValidationBuilder|DataValidationCriteria/.test(text)) return true;
  }

  if (normalizedProduct === "compute engine"
    || normalizedProduct === "resource manager"
    || normalizedProduct === "cloud sql for mysql"
    || normalizedProduct === "cloud sql for sql server") {
    if (/mcp .*organization polic|organization polic.*mcp|gcp\.managed/i.test(normalizedFeatureName)
      && /\/(?:mcp\/(?:control-mcp-use-organization|organization-control-mcp-servers-deprecation|deprecations)|compute\/docs\/(?:use-compute-engine-mcp|access\/organization-policies|reference\/mcp)|sql\/docs\/(?:mysql|sqlserver)\/use-cloudsql-mcp)(?:\/|$)/.test(normalizedUrl)
      && /gcp\.managed\.allowedMCPServices|allowedMCPServices|organization policy|mcp/.test(text)) return true;
  }

  if (normalizedProduct === "compute engine") {
    if (/any_single_zone/i.test(normalizedFeatureName)
      && /\/compute\/docs\/instance-groups\/(?:creating-groups-of-managed-instances|distributing-instances-with-regional-instance-groups|regional-migs)(?:\/|$)/.test(normalizedUrl)
      && /ANY_SINGLE_ZONE|target distribution shape|regional MIG/.test(text)) return true;
    if (/^n2d$/i.test(normalizedFeatureName)
      && /\/compute\/docs\/(?:general-purpose-machines|machine-resource)(?:\/|$)/.test(normalizedUrl)
      && /\bN2D\b|general-purpose machine family/.test(text)) return true;
  }

  if (normalizedProduct === "confidential space") {
    if (/confidential space image support status assertion/i.test(normalizedFeatureName)
      && /\/confidential-computing\/confidential-space\/docs\/(?:confidential-space-images|reference\/attestation-assertions|create-grant-access-confidential-resources)(?:\/|$)/.test(normalizedUrl)
      && /assertion\.submods\.confidential_space\.support_attributes|support_attributes|confidential space images|attestation assertions/.test(text)) return true;
  }

  if (normalizedProduct === "dataflow") {
    if (/regional endpoints in montréal|northamerica-northeast1/i.test(normalizedFeatureName)
      && /\/dataflow\/docs\/(?:concepts\/regional-endpoints|resources\/locations)(?:\/|$)/.test(normalizedUrl)
      && /northamerica-northeast1|Montréal|Montreal|regional endpoints/.test(text)) return true;
  }

  if (normalizedProduct === "cloud load balancing") {
    if (/externalnetworkloadbalancerrule/i.test(normalizedFeatureName)
      && /\/load-balancing\/docs\/network\/networklb-monitoring(?:\/|$)/.test(normalizedUrl)
      && /loadbalancing\.googleapis\.com\/ExternalNetworkLoadBalancerRule|ExternalNetworkLoadBalancerRule/.test(text)) return true;
    if (/client_ip_no_destination|source-ip session affinity/i.test(normalizedFeatureName)
      && /\/load-balancing\/docs\/features(?:\/|$)/.test(normalizedUrl)
      && /CLIENT_IP_NO_DESTINATION|source-IP session affinity/.test(text)) return true;
  }

  if (normalizedProduct === "google workspace admin sdk") {
    if (/users\.list|search for users/i.test(normalizedFeatureName)
      && /\/workspace\/admin\/directory\/(?:reference\/rest\/v1\/users\/list|v1\/guides\/search-users)(?:\/|$)/.test(normalizedUrl)
      && /users\.list|search users/.test(text)) return true;
  }

  if (normalizedProduct === "looker") {
    if (/formatters\.select|chart config editor/i.test(normalizedFeatureName)
      && /\/looker\/docs\/chart-config-editor(?:\/|$)/.test(normalizedUrl)
      && /formatters\.select|Chart Config Editor/.test(text)) return true;
    if (/job_creation_optional|optional job creation/i.test(normalizedFeatureName)
      && /\/(?:bigquery\/docs\/information-schema-jobs|looker\/docs\/studio\/connect-to-google-bigquery)(?:\/|$)/.test(normalizedUrl)
      && /JOB_CREATION_OPTIONAL|optional job creation/.test(text)) return true;
  }

  if (normalizedProduct === "managed service for microsoft active directory") {
    if (/antivirus|virus|malware/i.test(normalizedFeatureName)
      && /\/managed-microsoft-ad\/docs\/hardening(?:\/|$)/.test(normalizedUrl)
      && /antivirus|virus|malware/.test(text)) return true;
  }

  if (normalizedProduct === "maps sdk for android") {
    if (/org\.apache\.http\.legacy/i.test(normalizedFeatureName)
      && /\/maps\/documentation\/android-sdk\/config(?:\/|$)/.test(normalizedUrl)
      && /org\.apache\.http\.legacy/.test(text)) return true;
  }

  if (normalizedProduct === "storage transfer service") {
    if (/vpc service controls|vpc sc/i.test(normalizedFeatureName)
      && /\/storage-transfer\/docs\/on-prem-vpc-sc(?:\/|$)/.test(normalizedUrl)
      && /VPC Service Controls|VPC SC/.test(text)) return true;
  }

  if (normalizedProduct === "text to speech") {
    if (/cloud text-to-speech api|text-to-speech api/i.test(normalizedFeatureName)
      && /\/text-to-speech\/docs\/(?:reference\/rest|libraries)(?:\/|$)/.test(normalizedUrl)
      && /Text-to-Speech API|client libraries/.test(text)) return true;
  }

  if (normalizedProduct === "vertex ai") {
    if (/google\.cloud\.aiplatform\.gapic|vertex ai sdk for python/i.test(normalizedFeatureName)
      && /\/vertex-ai\/docs\/(?:python-sdk\/use-vertex-ai-python-sdk-ref|start\/install-sdk-ref)(?:\/|$)/.test(normalizedUrl)
      && /google\.cloud\.aiplatform\.gapic|Vertex AI SDK for Python/.test(text)) return true;
  }

  if (normalizedProduct === "error reporting") {
    if (/error reporting api report endpoint|report endpoint/i.test(normalizedFeatureName)
      && /\/error-reporting\/docs\/(?:troubleshooting|setup\/compute-engine|setup\/kubernetes-engine|setup\/ec2)(?:\/|$)/.test(normalizedUrl)
      && /report endpoint|error reporting api|report/.test(text)) return true;
  }

  if (normalizedProduct === "firestore") {
    if (/mcp .*organization polic|organization polic.*mcp|gcp\.managed/i.test(normalizedFeatureName)
      && /\/(?:mcp\/control-mcp-use-organization|firestore\/(?:native\/docs\/(?:use-firestore-mcp|secure-agent-interactions-mcp)|docs\/reference\/mcp))(?:\/|$)/.test(normalizedUrl)
      && /gcp\.managed\.allowedMCPServices|allowedMCPServices|firestore mcp|secure agent interactions/.test(text)) return true;
  }

  if (normalizedProduct === "google cloud contact center as a service") {
    if (/end_user\.phone|end user phone|apps api .*parameter/i.test(normalizedFeatureName)
      && /\/contact-center\/ccai-platform\/docs\/(?:apps-api|apps-api-end-user|mid-session-authentication-apps-api|apps-api-call)(?:\/|$)/.test(normalizedUrl)
      && /end_user\.phone|end user phone|apps api|mid-session authentication|call endpoints/.test(text)) return true;
    if (/end_user_number/i.test(normalizedFeatureName)
      && /\/contact-center\/ccai-platform\/docs\/(?:call-settings|apps-api-sms|release-notes)(?:\/|$)/.test(normalizedUrl)
      && /END_USER_NUMBER|@\{END_USER_NUMBER\}|end_user_number/.test(text)) return true;
  }

  if (normalizedProduct === "google cloud mcp servers") {
    if (/mcp .*organization polic|organization polic.*mcp|gcp\.managed/i.test(normalizedFeatureName)
      && /\/mcp\/(?:control-mcp-use-organization|control-mcp-use-iam|prevent-read-write-tool-use)(?:\/|$)/.test(normalizedUrl)
      && /gcp\.managed\.allowedMCPServices|allowedMCPServices|control mcp use|prevent read-write/.test(text)) return true;
  }

  if (normalizedProduct === "google cloud vmware engine") {
    if (/managed credentials for vcenter and nsx-t manager/i.test(normalizedFeatureName)
      && /\/vmware-engine\/docs\/(?:vmware-platform\/howto-access-management|private-clouds\/howto-elevate-privilege|concepts-permission-model|best-practices-security)(?:\/|$)/.test(normalizedUrl)
      && /vCenter|NSX-T Manager|management appliances|elevate privilege/.test(text)) return true;
  }

  if (normalizedProduct === "looker studio") {
    if (/native_dimension/i.test(normalizedFeatureName)
      && /\/(?:looker-studio\/connector\/reference|looker\/docs\/studio\/nativedimension)(?:\/|$)/.test(normalizedUrl)
      && /NATIVE_DIMENSION|native dimension/.test(text)) return true;
  }

  if (normalizedProduct === "cloud deploy") {
    if (/promoterelease api|releases\.rollouts\.create/i.test(normalizedFeatureName)
      && /\/deploy\/docs\/api\/reference\/rest\/v1\/projects\.locations\.deliverypipelines\.releases\.rollouts(?:\/create)?(?:\/|$)|\/deploy\/docs\/(?:promote-release|deployment-strategies\/manage-rollout)(?:\/|$)/.test(normalizedUrl)
      && /releases\.rollouts\.create|rollouts\/create|promote release|manage rollouts/.test(text)) return true;
  }

  if (normalizedProduct === "deep learning vm images") {
    if (/compute\.instances\.get/i.test(normalizedFeatureName)
      && /\/compute\/docs\/images\/premium\/access-rhel-knowledgebase(?:\/|$)/.test(normalizedUrl)
      && /compute\.instances\.get/.test(text)) return true;
  }

  if (normalizedProduct === "cloud build") {
    if (/^cloud build api$/i.test(normalizedFeatureName)
      && /\/build\/docs\/api\/reference\/rest(?:\/|$)/.test(normalizedUrl)
      && /cloud build api|cloudbuild\.googleapis\.com|projects\.locations\.builds|rest resource/.test(text)) return true;
  }

  if (normalizedProduct === "cloud data fusion") {
    if (/instancev3 monitored resource/i.test(normalizedFeatureName)
      && /\/monitoring\/api\/resources(?:\/|$)/.test(normalizedUrl)
      && /datafusion\.googleapis\.com\/instancev3|instancev3/.test(text)) return true;
  }

  if (normalizedProduct === "google secops siem") {
    if (/threatconnect_ioc_v3/i.test(normalizedFeatureName)
      && /\/chronicle\/docs\/ingestion\/default-parsers\/threatconnect-ioc-v3(?:\/|$)/.test(normalizedUrl)
      && /threatconnect_ioc_v3|threatconnect ioc v3/.test(text)) return true;
    if (/entity-only rules for risk-based alerting/i.test(normalizedFeatureName)
      && /\/chronicle\/docs\/(?:detection\/risk-based-alerting|detection\/default-rules|detection\/curated-detections)(?:\/|$)/.test(normalizedUrl)
      && /entity_risk_change|risk-based alerting|entity only/.test(text)) return true;
  }

  if (normalizedProduct === "cloud logging") {
    if (/windows logging agent v1-9/i.test(normalizedFeatureName)
      && /\/logging\/docs\/agent\/logging\/configuration(?:\/|$)/.test(normalizedUrl)
      && /config\.d|windows logging agent|legacy logging agent/.test(text)) return true;
  }

  if (normalizedProduct === "sap on google cloud") {
    if (/alias-ip vip deployment template/i.test(normalizedFeatureName)
      && /\/sap\/docs\/(?:ha-for-hana-scale-out-system-replication|ha-for-hana-scale-up-system-replication|sap-hana-configure-scaleout-sles)(?:\/|$)/.test(normalizedUrl)
      && /template\.yaml|alias-ip|vip/.test(text)) return true;
  }

  if (normalizedProduct === "sensitive data protection") {
    if (/us_state|u\.s\./i.test(normalizedFeatureName)
      && /\/sensitive-data-protection\/docs\/(?:infotypes-reference|concepts-infotypes|inspecting-text)(?:\/|$)/.test(normalizedUrl)
      && /US_STATE|U\.S\./.test(text)) return true;
    if (/content\.redact|content\.deidentify|de-identification/i.test(normalizedFeatureName)
      && /\/sensitive-data-protection\/docs\/(?:deidentify-sensitive-data|redacting-sensitive-data-images|inspecting-storage|inspecting-text|creating-job-triggers)(?:\/|$)/.test(normalizedUrl)
      && /content\.redact|content\.deidentify/.test(text)) return true;
    if (/inspect\.operations\.create|bigquery inspection/i.test(normalizedFeatureName)
      && /\/sensitive-data-protection\/docs\/(?:inspecting-storage|creating-job-triggers|reference\/rest\/v2\/InspectConfig|reference\/rest\/v2\/InspectJobConfig)(?:\/|$)/.test(normalizedUrl)
      && /inspect\.operations\.create|inspect operations create/.test(text)) return true;
    if (/image findings redaction|image redaction/i.test(normalizedFeatureName)
      && /\/sensitive-data-protection\/docs\/(?:redacting-sensitive-data-images|concepts-image-redaction|reference\/rest\/v2\/ImageRedactionConfig)(?:\/|$)/.test(normalizedUrl)
      && /image redaction|redacting sensitive data images/.test(text)) return true;
  }

  if (normalizedProduct === "anthos config management") {
    if (/namespaceselector|spec\.mode/i.test(normalizedFeatureName)) {
      aliases.push("namespaceselector", "namespace selector", "mode set to dynamic");
    }
    if (/spec\.override|rootsync|reposync/i.test(normalizedFeatureName)) {
      aliases.push("rootsync", "reposync", "spec.override");
    }
    if (/spec\.helm\.version/i.test(normalizedFeatureName)) {
      aliases.push("spec.helm.version", "helm repository", "helm chart version");
    }
    if (/spec\.helm\.values/i.test(normalizedFeatureName)) {
      aliases.push("spec.helm.values", "helm repository", "helm values");
    }
    if (/config\.kubernetes\.io\/depends-on/i.test(normalizedFeatureName)) {
      aliases.push("config.kubernetes.io/depends-on", "declare resource dependencies");
    }
    if (/local-config/i.test(normalizedFeatureName)) {
      aliases.push("config.kubernetes.io/local-config", "local-config");
    }
    if (/hierarchy controller|hnc/i.test(normalizedFeatureName)) {
      aliases.push("disable hierarchy controller", "hierarchy controller");
    }
  }

  if (normalizedProduct === "cloud billing") {
    if (/detailed cost data export|cloud billing export|granular .* cost/i.test(normalizedFeatureName)) {
      aliases.push("resource.global_name", "subscription.instance_id", "detailed usage cost data export", "granular");
    }
  }
  if (normalizedProduct === "app engine standard environment go") {
    if (/delve|dev_appserver/i.test(normalizedFeatureName)) aliases.push("using local server", "delve", "dev_appserver.py");
    if (/elastic provisioning metrics/i.test(normalizedFeatureName)) aliases.push("release notes", "elastic provisioning");
  }
  if (normalizedProduct === "app engine standard environment java") {
    if (/dev_appserver|local development server|boot classpath|dev_appserver\.out/i.test(normalizedFeatureName)) aliases.push("using local server", "dev_appserver.py", "local development server");
    if (/jdk 9 modular jar|appstats filter/i.test(normalizedFeatureName)) aliases.push("release notes", "jdk 9", "modular jar", "appstats");
  }
  if (normalizedProduct === "apigee x") {
    if (/target\.evaluated\.url/i.test(normalizedFeatureName)) aliases.push("target.evaluated.url", "flow variables");
    if (/base64 flow variable suffixes/i.test(normalizedFeatureName)) aliases.push("content.as.base64", "content.as.url.safe.base64", "flow variables");
    if (/apim operator/i.test(normalizedFeatureName)) aliases.push("apim operator", "apigee apim operator", "kubernetes");
    if (/organizations\.apps/i.test(normalizedFeatureName)) aliases.push("organizations.apps", "appgroup", "filtering");
    if (/classic ui/i.test(normalizedFeatureName)) aliases.push("ui overview", "classic ui", "apigee classic ui");
    if (/data residency|regional availability|me-central2|japan|zurich/i.test(normalizedFeatureName)) aliases.push("locations", "data residency", "region");
    if (/large message payload/i.test(normalizedFeatureName)) aliases.push("large message payload", "api proxy configuration", "endpoint properties");
    if (/server\.url|server url/i.test(normalizedFeatureName)) aliases.push("server.url", "openapi", "api config");
  }
  if (normalizedProduct === "apigee hybrid") {
    if (/forward proxy|allowlist/i.test(normalizedFeatureName)) aliases.push("forward proxy", "allowlist", "allow gcp urls");
    if (/apigee-pull-push/i.test(normalizedFeatureName)) aliases.push("apigee-pull-push", "--list");
    if (/kvm pagination/i.test(normalizedFeatureName)) aliases.push("keyvaluemaps.entries", "key value maps", "pagination");
    if (/large message payload/i.test(normalizedFeatureName)) aliases.push("large message payload");
    if (/data residency/i.test(normalizedFeatureName)) aliases.push("data residency", "supported platforms");
    if (/guardrails|backup/i.test(normalizedFeatureName)) aliases.push("guardrails", "upgrade");
  }
  if (normalizedProduct === "apigee api hub") {
    if (/deployment/i.test(normalizedFeatureName)) aliases.push("deployments", "manage deployments");
    if (/attribute/i.test(normalizedFeatureName)) aliases.push("attributes", "manage attributes");
    if (/vpc service controls/i.test(normalizedFeatureName)) aliases.push("vpc service controls", "vpc-sc");
    if (/security score/i.test(normalizedFeatureName)) aliases.push("security scores", "api security scores");
    if (/mcp/i.test(normalizedFeatureName)) aliases.push("mcp tools", "register mcp apis");
  }
  if (normalizedProduct === "apigee integration") {
    if (/cloud kms/i.test(normalizedFeatureName)) aliases.push("cloud kms", "encrypt task", "decrypt task");
    if (/firestore/i.test(normalizedFeatureName)) aliases.push("firestore", "batch write task");
    if (/language/i.test(normalizedFeatureName)) aliases.push("language", "annotate text task");
    if (/sheets/i.test(normalizedFeatureName)) aliases.push("sheets", "append task");
    if (/translate/i.test(normalizedFeatureName)) aliases.push("translate", "text task");
    if (/workflow/i.test(normalizedFeatureName)) aliases.push("workflows", "execute task");
    if (/vpc service controls/i.test(normalizedFeatureName)) aliases.push("vpc service controls");
    if (/data mapping/i.test(normalizedFeatureName)) aliases.push("data mapping functions");
  }
  if (normalizedProduct === "address validation api") {
    aliases.push("validateaddress", "build validation logic", "understand response", "address validation");
    if (/hasspellcorrectedcomponents/i.test(normalizedFeatureName)) aliases.push("hasSpellCorrectedComponents");
    if (/possiblenextaction/i.test(normalizedFeatureName)) aliases.push("possibleNextAction");
  }
  if (normalizedProduct === "api gateway") {
    if (/openapi|host property|server\.url/i.test(normalizedFeatureName)) aliases.push("openapi", "creating api config", "server.url", "host");
    if (/tls|secure traffic/i.test(normalizedFeatureName)) aliases.push("secure traffic", "tls");
    if (/region/i.test(normalizedFeatureName)) aliases.push("region", "about api gateway");
  }
  if (normalizedProduct === "access context manager") aliases.push("launchstage", "access context manager api");
  if (normalizedProduct === "agent assist") {
    if (/knowledge/i.test(normalizedFeatureName)) aliases.push("generative knowledge assist");
    if (/custom event/i.test(normalizedFeatureName)) aliases.push("custom events");
    if (/adaptation/i.test(normalizedFeatureName)) aliases.push("adaptation model");
    if (/article/i.test(normalizedFeatureName)) aliases.push("article suggestion");
  }
  if (normalizedProduct === "ai hypercomputer") {
    if (/future reservations/i.test(normalizedFeatureName)) aliases.push("future reservations", "choose strategy", "cluster capabilities");
  }
  if (normalizedProduct === "spanner") {
    if (/ai\.(classify|if|score)/i.test(normalizedFeatureName)) aliases.push("spanner ai", "ml functions");
    if (/gcp\.managed\.allowedmcpservices|mcp/i.test(normalizedFeatureName)) aliases.push("allowedmcpservices", "organization policy", "mcp");
    if (/parameter_default|farm_fingerprint|bool_array|float32_array|float64_array|int64_array|string_array|jsonb/i.test(normalizedFeatureName)) aliases.push("dialect differences", "information schema", "postgresql jsonb");
  }
  if (normalizedProduct === "cloud asset inventory") {
    if (/searchallresources|searchalliampolicies/i.test(normalizedFeatureName)) aliases.push("searchallresources", "search resources", "asset types");
    if (/exportassets/i.test(normalizedFeatureName)) aliases.push("exportassets", "export assets", "asset types");
    if (/firebaseappinfo|firebaseproject|serviceusage\.googleapis\.com\/service|composer\.googleapis\.com\/environment|memcache\.googleapis\.com\/instance|redis\.googleapis\.com\/instance|run\.googleapis\.com\/domainmapping|run\.googleapis\.com\/revision|run\.googleapis\.com\/service|sqladmin\.googleapis\.com\/instance|tpu/i.test(normalizedFeatureName)) aliases.push("asset types", "search resources", "export assets");
  }

  return [...new Set(aliases.map((alias) => normalizeText(alias)).filter(Boolean))];
}

function pageSupportsFeatureAlias(productName, feature, page) {
  const aliases = featureEvidenceAliases(productName, feature);
  if (aliases.length === 0 || !page) {
    return false;
  }
  const matchedPhraseText = (Array.isArray(page?.matched_phrases) ? page.matched_phrases : [])
    .map((entry) => String(entry?.phrase || "").trim())
    .filter(Boolean)
    .join("\n");
  const haystack = normalizeText([
    page?.title,
    page?.url,
    page?.body,
    matchedPhraseText,
    ...arrayOfStrings(page?.evidence_snippets),
  ].join("\n"));
  return aliases.some((alias) => haystack.includes(alias));
}

function hasProductSpecificDedicatedEvidence(productName, feature, page) {
  const normalizedProduct = normalizeText(productName || "");
  const normalizedFeatureName = normalizeText(feature?.feature_name || "");
  const normalizedUrl = normalizeUrl(page?.url || "");
  const normalizedPageText = normalizeText([
    page?.title || "",
    page?.body || "",
    ...arrayOfStrings(page?.evidence_snippets),
    ...(Array.isArray(page?.matched_phrases) ? page.matched_phrases.map((entry) => entry?.phrase || "") : []),
  ].join("\n"));

  if (normalizedProduct === "sensitive data protection") {
    const exactIdentifiers = featureExactIdentifiers(productName, feature)
      .filter((identifier) => /^[A-Z][A-Z0-9]*_[A-Z0-9_]+$/.test(String(identifier || "").trim()));
    if (exactIdentifiers.length > 0
      && /\/sensitive-data-protection\/docs\/infotypes-reference(?:\/|$)/.test(normalizedUrl)
      && pageContainsExactIdentifier(page, exactIdentifiers)) {
      return true;
    }
  }

  if (normalizedProduct === "security command center") {
    const featureSlug = slugify(feature?.feature_name || "");
    if (/^(?:yl2-)?gke-/.test(featureSlug)
      && /\/security-command-center\/docs\/findings\/threats\//.test(normalizedUrl)
      && normalizedUrl.includes(`/${featureSlug}`)) {
      return true;
    }
    if (featureSlug === "yl2-gke-suspicious-cryptomining-pod"
      && /\/security-command-center\/docs\/findings\/threats\/gke-suspicious-cryptomining-pod(?:\/|$)/.test(normalizedUrl)) {
      return true;
    }
    if (/^(?:yl2-)?gke-/.test(featureSlug)
      && /\/security-command-center\/docs\/gke-threats(?:\/|$)/.test(normalizedUrl)
      && pageContainsExactIdentifier(page, [String(feature?.feature_name || "").trim()])) {
      return true;
    }
    if (/^YL2_GKE_SERVICE_ACCOUNT_CREATION_SENSITIVE_NAMESPACE$/i.test(feature?.feature_name || "")
      && /\/security-command-center\/docs\/gke-threats(?:\/|$)/.test(normalizedUrl)
      && /service account created in sensitive namespace/i.test(normalizedPageText)) {
      return true;
    }
    if (/finding\.indicator\.uris attribute/i.test(feature?.feature_name || "")
      && /\/php\/docs\/reference\/cloud-security-center\/latest\/V1\.Indicator(?:\/|$)/.test(normalizedUrl)
      && /indicator|uris/i.test(normalizedPageText)) {
      return true;
    }
    if ((/^OPEN_GROUP_IAM_MEMBER detector$/i.test(feature?.feature_name || "")
        || /^Security Health Analytics .* detector$/i.test(feature?.feature_name || ""))
      && /\/security-command-center\/docs\/(?:how-to-remediate-security-health-analytics-findings|ciem-identity-access-findings|compliance-manager-manage-cloud-controls)(?:\/|$)/.test(normalizedUrl)) {
      return true;
    }
    if ((/^Web Security Scanner .* finding type$/i.test(feature?.feature_name || "")
        || /^(CLICKJACKING_PROTECTION_MISSING|COOP_MISSING|CSP_MISCONFIGURATION|CSP_MISSING) detector$/i.test(feature?.feature_name || "")
        || /^SERVER_SIDE_REQUEST_FORGERY finding type$/i.test(feature?.feature_name || ""))
      && /\/security-command-center\/docs\/how-to-remediate-web-security-scanner-findings(?:\/|$)/.test(normalizedUrl)) {
      return true;
    }
    if (/^CONTAINER_IMAGE_VULNERABILITY detector$/i.test(feature?.feature_name || "")
      && /\/security-command-center\/docs\/assess-software-vulnerabilities-overview(?:\/|$)/.test(normalizedUrl)) {
      return true;
    }
  }

  if (normalizedProduct === "earth engine data catalog") {
    const canonicalUrls = earthEngineCatalogUrlsForFeature(feature?.feature_name || "", feature?.feature_summary || "")
      .map((url) => normalizeUrl(url));
    if (canonicalUrls.includes(normalizedUrl)) {
      return true;
    }
    if (/^TIGER 2010 ZIP Code Tabulation Areas \(ZCTA5\)$/i.test(feature?.feature_name || "")
      && /\/earth-engine\/datasets\/catalog\/TIGER_2010_ZCTA5(?:\/|$)/.test(normalizedUrl)) {
      return true;
    }
    if (/^TIGER 2018 Counties$/i.test(feature?.feature_name || "")
      && /\/earth-engine\/datasets\/catalog\/TIGER_2018_Counties(?:\/|$)/.test(normalizedUrl)) {
      return true;
    }
  }

  if (normalizedProduct === "earth engine python client library") {
    if (/^Shapefile uploads$/i.test(feature?.feature_name || "")
      && /\/earth-engine\/guides\/(?:table_upload|table_manifest|command_line)(?:\/|$)/.test(normalizedUrl)) {
      return true;
    }
  }

  if (normalizedProduct === "earth engine javascript client library") {
    if (/^ee\.layers\.ImageOverlay$/i.test(feature?.feature_name || "")
      && /\/earth-engine\/(?:custom-apps\/client-js|guides\/featureview_overview)(?:\/|$)/.test(normalizedUrl)) {
      return true;
    }
    if (/^ee\.MapLayerOverlay$/i.test(feature?.feature_name || "")
      && /\/earth-engine\/(?:guides\/app_engine_examples|apidocs\/ui-map-layer|apidocs\/map-addlayer)(?:\/|$)/.test(normalizedUrl)) {
      return true;
    }
    if (/^getMap\(\) method$/i.test(feature?.feature_name || "")
      && /\/earth-engine\/(?:custom-apps\/client-js|guides\/app_engine_intro)(?:\/|$)/.test(normalizedUrl)) {
      return true;
    }
  }

  if (normalizedProduct === "gmail api") {
    if (normalizedFeatureName === "message.internaldate") {
      return /\/workspace\/gmail\/api\/reference\/rest\/v1\/users\.messages(?:\/|$)/.test(normalizedUrl);
    }
    if (normalizedFeatureName === "deal cards in the promotions tab") {
      return /\/workspace\/gmail\/markup\/(overview|highlights)(?:\/|$)/.test(normalizedUrl);
    }
    if (normalizedFeatureName === "review action") {
      return /\/workspace\/gmail\/markup\/(registering-with-google|actions\/actions-overview|actions\/declaring-actions|reference\/one-click-action)(?:\/|$)/.test(normalizedUrl);
    }
    if (normalizedFeatureName === "rsvp action") {
      return /\/workspace\/gmail\/markup\/(registering-with-google|reference\/event-reservation|reference\/types\/Action|actions\/actions-overview)(?:\/|$)/.test(normalizedUrl);
    }
  }

  if (normalizedProduct === "workflows") {
    if (normalizedFeatureName === "get_type function") {
      return /\/workflows\/docs\/(reference\/stdlib\/overview|best-practice)(?:\/|$)/.test(normalizedUrl);
    }
    if (normalizedFeatureName === "cross-project service account deployment") {
      return /\/workflows\/docs\/authentication(?:\/|$)/.test(normalizedUrl);
    }
  }

  if (normalizedProduct === "config connector") {
    const hints = configConnectorFeatureHints(feature);
    const pageBody = normalizeText(page?.body || "");
    if (/annotation/i.test(normalizedFeatureName) && /\/config-connector\/docs\/reference\/annotations(?:\/|$)/.test(normalizedUrl)) {
      return true;
    }
    if (/disable-dependent-services/i.test(normalizedFeatureName)
      && /\/config-connector\/docs\/reference\/resource-docs\/serviceusage\/service(?:\/|$)/.test(normalizedUrl)) {
      return true;
    }
    if (/webhook validation/i.test(normalizedFeatureName)
      && /\/config-connector\/docs\/how-to\/(customizing-container-resources|customizing-webhook-timeouts)(?:\/|$)/.test(normalizedUrl)) {
      return true;
    }
    if (hints.resourceKind
      && /\/config-connector\/docs\/reference\/resource-docs\//.test(normalizedUrl)
      && normalizedUrl.includes(hints.resourceKind.toLowerCase())) {
      if (hints.fieldTerms.some((term) => pageBody.includes(term) || normalizedUrl.includes(term.replace(/\s+/g, "")))) {
        return true;
      }
      return true;
    }
  }

  if (normalizedProduct === "cloud sql for postgresql" && /\bflag\b/i.test(normalizedFeatureName)) {
    if (/\/sql\/docs\/postgres\/flags(?:\/|$)/.test(normalizedUrl)) {
      return true;
    }
    if ((/pg_squeeze|pg_wait_sampling|rdkit/i.test(normalizedFeatureName))
      && /\/sql\/docs\/postgres\/extensions(?:\/|$)/.test(normalizedUrl)) {
      return true;
    }
  }
  if (normalizedProduct === "app engine standard environment go") {
    if ((/delve|dev_appserver|elastic provisioning metrics/i.test(normalizedFeatureName))
      && /\/appengine\/docs\/standard\/go\/(?:tools\/using-local-server|release-notes)(?:\/|$)/.test(normalizedUrl)) return true;
  }
  if (normalizedProduct === "app engine standard environment java") {
    if ((/dev_appserver|local development server|boot classpath|dev_appserver\.out|jdk 9 modular jar|appstats filter/i.test(normalizedFeatureName))
      && /\/appengine\/docs\/standard\/(?:java\/tools\/using-local-server|java-gen2\/release-notes)(?:\/|$)/.test(normalizedUrl)) return true;
  }

  if (normalizedProduct === "bigquery") {
    const pageText = normalizeText([
      page?.title || "",
      page?.body || "",
      ...arrayOfStrings(page?.evidence_snippets),
      ...(Array.isArray(page?.matched_phrases) ? page.matched_phrases.map((entry) => entry?.phrase || "") : []),
    ].join("\n"));
    if (/reservations_timeline/i.test(normalizedFeatureName)
      && /\/bigquery\/docs\/information-schema-reservation-timeline(?:\/|$)/.test(normalizedUrl)) {
      return true;
    }
    if (/streaming_timeline/i.test(normalizedFeatureName)
      && /\/bigquery\/docs\/information-schema-streaming(?:\/|$)/.test(normalizedUrl)) {
      return true;
    }
    if (/ml\.generate_text_embedding function/i.test(normalizedFeatureName)
      && /\/bigquery\/docs\/reference\/standard-sql\/bigqueryml-syntax-generate-embedding(?:\/|$)/.test(normalizedUrl)) {
      return true;
    }
    if (/mcp control (?:via|with) organization polic/i.test(normalizedFeatureName)
      && (/\/bigquery\/docs\/use-bigquery-mcp(?:\/|$)/.test(normalizedUrl)
        || /\/mcp\/control-mcp-use-organization(?:\/|$)/.test(normalizedUrl)
        || /\/bigquery\/docs\/analytics-hub-custom-constraints(?:\/|$)/.test(normalizedUrl))
      && /organization policy|custom constraint|allowedmcpservices|mcp/.test(pageText)) {
      return true;
    }
    if ((/reservation\.v1beta1 api deprecation/i.test(normalizedFeatureName) || /google\.cloud\.bigquery\.reservation\.v1beta1\.api/i.test(normalizedFeatureName))
      && /\/bigquery\/docs\/reference\/reservations\/(?:rest|rpc(?:\/google\.cloud\.bigquery\.reservation\.v1)?)?(?:\/|$)/.test(normalizedUrl)
      && /reservationservice|google\.cloud\.bigquery\.reservation\.v1|bigquery reservation api/.test(pageText)) {
      return true;
    }
    if (/organization_options_changes/i.test(normalizedFeatureName)
      && /\/bigquery\/docs\/information-schema-organization-options-changes(?:\/|$)/.test(normalizedUrl)) {
      return true;
    }
    if (/project_options_changes/i.test(normalizedFeatureName)
      && /\/bigquery\/docs\/information-schema-project-options-changes(?:\/|$)/.test(normalizedUrl)) {
      return true;
    }
    if (/^custom masking routines$/i.test(normalizedFeatureName)
      && /\/bigquery\/docs\/(?:user-defined-functions|column-data-masking|column-data-masking-intro|routines-intro)(?:\/|$)/.test(normalizedUrl)
      && /masking routine|regexp_replace|data_masking|user defined function/.test(pageText)) {
      return true;
    }
    if (/^lax_bool$/i.test(normalizedFeatureName)
      && /\/bigquery\/docs\/(?:reference\/standard-sql\/json_functions|json-data)(?:\/|$)/.test(normalizedUrl)
      && /lax_bool/.test(pageText)) {
      return true;
    }
    if (/^st_(azimuth|interiorrings|endpoint|pointn|startpoint|dump)(?: function)?$/i.test(normalizedFeatureName)
      && /\/bigquery\/docs\/reference\/standard-sql\/geography_functions(?:\/|$)/.test(normalizedUrl)
      && /(st_azimuth|st_interiorrings|st_endpoint|st_pointn|st_startpoint|st_dump)/.test(pageText)) {
      return true;
    }
    if (/^dataset copy$/i.test(normalizedFeatureName)
      && /\/bigquery\/docs\/(?:managing-datasets|dts-introduction|samples\/bigquerydatatransfer-copy-dataset)(?:\/|$)/.test(normalizedUrl)
      && /copy a dataset|copy datasets|dataset copy|cross_region_copy/.test(pageText)) {
      return true;
    }
  }
  if (normalizedProduct === "apigee x") {
    if ((/target\.evaluated\.url|content\.as\.base64|content\.as\.url\.safe\.base64/i.test(normalizedFeatureName))
      && /\/apigee\/docs\/api-platform\/reference\/variables-reference(?:\/|$)/.test(normalizedUrl)) return true;
    if (/apim operator/i.test(normalizedFeatureName)
      && /\/apigee\/docs\/api-platform\/apigee-kubernetes(?:\/|$)/.test(normalizedUrl)) return true;
    if (/organizations\.apps/i.test(normalizedFeatureName)
      && /\/apigee\/docs\/reference\/apis\/apigee\/rest\/v1\/organizations\.apps(?:\/|$)/.test(normalizedUrl)) return true;
    if (/classic ui/i.test(normalizedFeatureName)
      && /\/apigee\/docs\/(?:api-platform\/fundamentals\/ui-overview|deprecations\/apigee-classic-ui)(?:\/|$)/.test(normalizedUrl)) return true;
    if ((/data residency|regional availability|me-central2|japan|zurich/i.test(normalizedFeatureName))
      && /\/apigee\/docs\/(?:locations|api-platform\/get-started\/drz-concepts)(?:\/|$)/.test(normalizedUrl)) return true;
    if (/large message payload/i.test(normalizedFeatureName)
      && /\/apigee\/docs\/api-platform\/(?:reference\/api-proxy-configuration-reference|reference\/endpoint-properties-reference|fundamentals\/best-practices-api-proxy-design-and-development)(?:\/|$)/.test(normalizedUrl)) return true;
    if (/server\.url/i.test(normalizedFeatureName)
      && /\/api-gateway\/docs\/creating-api-config(?:\/|$)/.test(normalizedUrl)) return true;
  }
  if (normalizedProduct === "apigee hybrid") {
    if (/forward proxy|allowlist/i.test(normalizedFeatureName)
      && /\/apigee\/docs\/hybrid\/v[\d.]+\/(?:forward-proxy|allow-gcp-urls)(?:\/|$)/.test(normalizedUrl)) return true;
    if (/kvm pagination/i.test(normalizedFeatureName)
      && /\/apigee\/docs\/reference\/apis\/apigee\/rest\/v1\/organizations\.environments\.keyvaluemaps\.entries(?:\/|$)/.test(normalizedUrl)) return true;
    if (/apigee-pull-push/i.test(normalizedFeatureName)
      && /\/apigee\/docs\/hybrid\/v[\d.]+\/apigee-pull-push(?:\/|$)/.test(normalizedUrl)) return true;
    if (/large message payload/i.test(normalizedFeatureName)
      && /\/apigee\/docs\/hybrid\/v[\d.]+\/configure-large-payload-support(?:\/|$)/.test(normalizedUrl)) return true;
    if (/data residency/i.test(normalizedFeatureName)
      && /\/apigee\/docs\/hybrid\/(?:v[\d.]+\/using-data-residency-with-apigee-hybrid|supported-platforms)(?:\/|$)/.test(normalizedUrl)) return true;
    if (/guardrails|backup/i.test(normalizedFeatureName)
      && /\/apigee\/docs\/hybrid\/v[\d.]+\/(?:guardrails|upgrade)(?:\/|$)/.test(normalizedUrl)) return true;
  }
  if (normalizedProduct === "apigee api hub") {
    if ((/deployment|attribute|dependency|supply chain|insight|security score|vpc service controls|mcp/i.test(normalizedFeatureName))
      && /\/apigee\/docs\/apihub\/(?:manage-api-deployments|manage-attributes|create-dependency|api-supply-chain|vpc-service-control|configure-api-insights|view-api-security-scores|manage-mcp-tools|register-mcp-apis|provision)(?:\/|$)/.test(normalizedUrl)) return true;
  }
  if (normalizedProduct === "apigee integration") {
    if ((/cloud kms|firestore|language|sheets|translate|workflow|vpc service controls|data mapping/i.test(normalizedFeatureName))
      && /\/application-integration\/docs\/(?:gcp-tasks\/configure-|vpc-service-controls|data-mapping-functions-reference|all-triggers-tasks)/.test(normalizedUrl)) return true;
  }
  if (normalizedProduct === "address validation api") {
    if ((/spellcorrectedcomponents|possiblenextaction|validateaddress|address validation/i.test(normalizedFeatureName))
      && /\/maps\/documentation\/address-validation\/(?:reference\/rest\/v1\/TopLevel\/validateAddress|build-validation-logic|understand-response|add-subpremises-address-example)(?:\/|$)/.test(normalizedUrl)) return true;
  }
  if (normalizedProduct === "api gateway") {
    if ((/openapi|tls|region|server\.url|host/i.test(normalizedFeatureName))
      && /\/api-gateway\/docs\/(?:creating-api-config|secure-traffic-gcloud|about-api-gateway|reference)(?:\/|$)/.test(normalizedUrl)) return true;
  }
  if (normalizedProduct === "access context manager") {
    if (/launchstage|access context manager api/i.test(normalizedFeatureName)
      && /\/access-context-manager\/docs\/reference\/rest(?:\/|$)/.test(normalizedUrl)) return true;
  }
  if (normalizedProduct === "agent assist") {
    if ((/knowledge|custom event|adaptation|article/i.test(normalizedFeatureName))
      && /\/agent-assist\/docs\/(?:features|generative-knowledge-assist|custom-events|adaptation-model-guide|article-suggestion|faq)(?:\/|$)/.test(normalizedUrl)) return true;
  }
  if (normalizedProduct === "ai hypercomputer") {
    if (/future reservations/i.test(normalizedFeatureName)
      && /\/ai-hypercomputer\/docs\/(?:choose-strategy|cluster-capabilities|create\/create-vm)(?:\/|$)/.test(normalizedUrl)) return true;
  }
  if (normalizedProduct === "spanner") {
    if (/ai\.(classify|if|score)/i.test(normalizedFeatureName)
      && /\/spanner\/docs\/(?:reference\/standard-sql\/ml-functions|spanner-ai-overview|ml)(?:\/|$)/.test(normalizedUrl)) return true;
    if (/gcp\.managed\.allowedmcpservices|mcp/i.test(normalizedFeatureName)
      && /\/(?:mcp\/control-mcp-use-organization|resource-manager\/docs\/mcp)(?:\/|$)/.test(normalizedUrl)) return true;
    if (/parameter_default/i.test(normalizedFeatureName)
      && /\/spanner\/docs\/information-schema(?:\/|$)/.test(normalizedUrl)) return true;
    if (/farm_fingerprint|bool_array|float32_array|float64_array|int64_array|string_array|jsonb/i.test(normalizedFeatureName)
      && /\/spanner\/docs\/reference\/dialect-differences(?:\/|$)/.test(normalizedUrl)) return true;
  }
  if (normalizedProduct === "cloud asset inventory") {
    if ((/searchallresources|searchalliampolicies/i.test(normalizedFeatureName))
      && /\/asset-inventory\/docs\/(?:search-resources|reference\/rest\/v1\/TopLevel\/searchAllResources|asset-types)(?:\/|$)/.test(normalizedUrl)) return true;
    if (/exportassets/i.test(normalizedFeatureName)
      && /\/asset-inventory\/docs\/(?:export-bigquery|export-cloud-storage|reference\/rest\/v1\/TopLevel\/exportAssets|asset-types)(?:\/|$)/.test(normalizedUrl)) return true;
    if (/firebaseappinfo|firebaseproject|serviceusage\.googleapis\.com\/service|composer\.googleapis\.com\/environment|memcache\.googleapis\.com\/instance|redis\.googleapis\.com\/instance|run\.googleapis\.com\/domainmapping|run\.googleapis\.com\/revision|run\.googleapis\.com\/service|sqladmin\.googleapis\.com\/instance|tpu/i.test(normalizedFeatureName)
      && /\/asset-inventory\/docs\/asset-types(?:\/|$)/.test(normalizedUrl)) return true;
  }
  if (normalizedProduct === "google kubernetes engine") {
    if (/node_sa_missing_permissions|node service accounts|missing iam permissions/i.test(normalizedFeatureName)
      && /\/kubernetes-engine\/docs\/troubleshooting\/service-accounts(?:\/|$)/.test(normalizedUrl)
      && (/NODE_SA_MISSING_PERMISSIONS/.test(text)
        || (/node service accounts/.test(text) && /missing iam permissions/.test(text)))) return true;
    if (/vm\.max_map_count/i.test(normalizedFeatureName)
      && /\/kubernetes-engine\/docs\/(?:reference\/crds\/computeclass|tutorials\/automatically-bootstrapping-gke-nodes-with-daemonsets)(?:\/|$)/.test(normalizedUrl)) return true;
    if (/persistent disk csi driver/i.test(normalizedFeatureName)
      && /\/kubernetes-engine\/docs\/reference\/mcp\/tools_list\/(?:get_cluster|list_clusters)(?:\/|$)/.test(normalizedUrl)) return true;
    if (/optimize-utilization autoscaling profile/i.test(normalizedFeatureName)
      && /\/kubernetes-engine\/docs\/tutorials\/reducing-costs-by-scaling-down-gke-off-hours(?:\/|$)/.test(normalizedUrl)) return true;
  }
  if (normalizedProduct === "alloydb") {
    if (/conversational analytics/i.test(normalizedFeatureName)
      && /\/alloydb\/docs\/ai\/(?:what-is-alloydb-ai|data-agent-overview)(?:\/|$)/.test(normalizedUrl)) return true;
    if (/hybrid_search/i.test(normalizedFeatureName)
      && /\/alloydb\/docs\/(?:ai\/run-hybrid-vector-similarity-search|reference\/ai\/hybrid-search-function-parameters)(?:\/|$)/.test(normalizedUrl)) return true;
    if (/cache-aware query planning/i.test(normalizedFeatureName)
      && /\/alloydb\/docs\/reference\/query-tuning-and-optimization(?:\/|$)/.test(normalizedUrl)) return true;
    if (/data residency/i.test(normalizedFeatureName)
      && /\/alloydb\/docs\/(?:data-residency|security-privacy-compliance)(?:\/|$)/.test(normalizedUrl)) return true;
    if (/vpc service controls/i.test(normalizedFeatureName)
      && /\/alloydb\/docs\/vpc-sc\/configure-vpc-service-controls(?:\/|$)/.test(normalizedUrl)) return true;
  }
  if (normalizedProduct === "dialogflow") {
    if (/draw\.io|flow export/i.test(normalizedFeatureName)
      && /\/dialogflow\/cx\/docs\/concept\/flow(?:\/|$)/.test(normalizedUrl)) return true;
    if (/sys\.person/i.test(normalizedFeatureName)
      && /\/dialogflow\/cx\/docs\/concept\/entity-system(?:\/|$)/.test(normalizedUrl)) return true;
  }
  if (normalizedProduct === "earth engine code editor") {
    const identifier = extractExactIdentifiers(feature?.feature_name || "")[0] || "";
    if (/^ui\./i.test(identifier)) {
      const exactPath = `/earth-engine/apidocs/${identifier.toLowerCase().replace(/\./g, "-")}`;
      if (normalizedUrl.includes(exactPath)) return true;
    }
    if (/ui\.url/i.test(normalizedFeatureName)
      && /\/earth-engine\/guides\/playground(?:\/|$)/.test(normalizedUrl)) return true;
  }
  if (normalizedProduct === "cloud composer") {
    if ((/store(?:\s+|[._-])dag(?:\s+|[._-])code|store(?:\s+|[._-])serialized(?:\s+|[._-])dags/i.test(normalizedFeatureName))
      && /\/composer\/docs\/(?:concepts\/)?airflow-configurations(?:\/|$)/.test(normalizedUrl)) return true;
    if (/web server auto-scaling worker configuration/i.test(normalizedFeatureName)
      && /\/composer\/docs\/composer-[23]\/composer-overview(?:\/|$)/.test(normalizedUrl)) return true;
  }
  if (["google secops", "google secops siem"].includes(normalizedProduct)) {
    if (/re\.capture_all/i.test(normalizedFeatureName)
      && /\/chronicle\/docs\/yara-l\/functions(?:\/|$)/.test(normalizedUrl)
      && /re\.capture_all/.test(normalizedPageText)) return true;
    if (/strings\.ends_with/i.test(normalizedFeatureName)
      && /\/chronicle\/docs\/yara-l\/functions(?:\/|$)/.test(normalizedUrl)
      && /strings\.ends_with/.test(normalizedPageText)) return true;
    if (/strings\.split/i.test(normalizedFeatureName)
      && /\/chronicle\/docs\/yara-l\/functions(?:\/|$)/.test(normalizedUrl)
      && /strings\.split/.test(normalizedPageText)) return true;
    if (/window\.range/i.test(normalizedFeatureName)
      && /\/chronicle\/docs\/yara-l\/functions(?:\/|$)/.test(normalizedUrl)
      && /window\.range/.test(normalizedPageText)) return true;
    if (/timestamp\.get_date/i.test(normalizedFeatureName)
      && /\/chronicle\/docs\/yara-l\/functions(?:\/|$)/.test(normalizedUrl)
      && /timestamp\.get_date/.test(normalizedPageText)) return true;
    if (/arrays\.length/i.test(normalizedFeatureName)
      && /\/chronicle\/docs\/yara-l\/functions(?:\/|$)/.test(normalizedUrl)
      && /arrays\.length/.test(normalizedPageText)) return true;
    if ((/idm\.is_significant|idm\.is_alert/i.test(feature?.feature_name || ""))
      && /\/chronicle\/docs\/deprecations(?:\/|$)/.test(normalizedUrl)) return true;
    if (/mcp use control via organization policies/i.test(normalizedFeatureName)
      && (/\/chronicle\/docs\/secops\/use-google-secops-mcp(?:\/|$)/.test(normalizedUrl)
        || /\/chronicle\/docs\/reference\/mcp(?:\/|$)/.test(normalizedUrl))) return true;
  }

  if (normalizedProduct === "anthos config management") {
    const pageText = normalizeText([
      page?.title || "",
      page?.body || "",
      ...arrayOfStrings(page?.evidence_snippets),
      ...(Array.isArray(page?.matched_phrases) ? page.matched_phrases.map((entry) => entry?.phrase || "") : []),
    ].join("\n"));
    if ((/spec\.override|spec\.helm\.version|spec\.helm\.values|gitsyncdepth|rolerefs|reconcile timeout|resource request|resource limit/i.test(normalizedFeatureName))
      && /\/kubernetes-engine\/config-sync\/docs\/reference\/rootsync-reposync-fields(?:\/|$)/.test(normalizedUrl)
      && /spec\.override|spec\.helm\.version|spec\.helm\.values|gitsyncdepth|rolerefs|reconciletimeout|resources/.test(pageText)) {
      return true;
    }
    if (/namespaceselector|spec\.mode/i.test(normalizedFeatureName)
      && /\/kubernetes-engine\/config-sync\/docs\/how-to\/(?:namespace-scoped-objects|fleet-tenancy)(?:\/|$)/.test(normalizedUrl)
      && /namespaceselector|mode set to dynamic|namespace selector/.test(pageText)) {
      return true;
    }
    if (/config\.kubernetes\.io\/depends-on/i.test(normalizedFeatureName)
      && /\/kubernetes-engine\/config-sync\/docs\/how-to\/declare-resource-dependency(?:\/|$)/.test(normalizedUrl)
      && /config\.kubernetes\.io\/depends-on|declare resource dependenc/.test(pageText)) {
      return true;
    }
    if (/local-config/i.test(normalizedFeatureName)
      && /\/kubernetes-engine\/config-sync\/docs\/how-to\/managing-objects(?:\/|$)/.test(normalizedUrl)
      && /local-config|config\.kubernetes\.io\/local-config/.test(pageText)) {
      return true;
    }
    if (/hierarchy controller|hnc upgrade/i.test(normalizedFeatureName)
      && /\/kubernetes-engine\/config-sync\/docs\/how-to\/migrate-hierarchy-controller(?:\/|$)/.test(normalizedUrl)
      && /disable hierarchy controller|hierarchy controller/.test(pageText)) {
      return true;
    }
  }

  return false;
}

function pageSupportsFullFeaturePhrase(page, feature, productName = "") {
  const fullName = normalizeText(feature?.feature_name || "");
  const summary = normalizeText(feature?.feature_summary || "");
  const matchedPhraseText = (Array.isArray(page?.matched_phrases) ? page.matched_phrases : [])
    .map((entry) => String(entry?.phrase || "").trim())
    .filter(Boolean)
    .join("\n");
  const haystack = normalizeText([
    page?.title,
    page?.url,
    page?.body,
    matchedPhraseText,
    ...arrayOfStrings(page?.evidence_snippets),
  ].join("\n"));
  const candidates = [fullName, summary]
    .filter(Boolean)
    .filter((phrase) => tokenize(phrase).length >= 2);
  if (candidates.some((phrase) => haystack.includes(phrase))) {
    return true;
  }
  return pageSupportsFeatureAlias(productName, feature, page);
}

function pageHasHighSignalTokenEvidence(feature, page) {
  if (!page || isBroadCatalogSupportPage(page.url) || (!isIamOrAuthFeature(feature) && isGenericIamSupportPage(page.url))) {
    return false;
  }
  const informativeTokens = descriptiveFeatureTokens(feature).filter((token) => token.length >= 4);
  if (informativeTokens.length === 0) {
    return false;
  }
  const matchedPhraseEntries = Array.isArray(page?.matched_phrases) ? page.matched_phrases : [];
  const hitTokens = new Set();
  for (const token of informativeTokens) {
    const directHit = matchedPhraseEntries.some((entry) => String(entry?.phrase || "").toLowerCase() === token && ((entry?.title_hits || 0) + (entry?.url_hits || 0) + (entry?.body_hits || 0) > 0));
    if (directHit) {
      hitTokens.add(token);
      continue;
    }
    const haystack = normalizeText([
      page?.title,
      page?.url,
      page?.body,
      ...arrayOfStrings(page?.evidence_snippets),
    ].join("\n"));
    if (haystack.includes(token)) {
      hitTokens.add(token);
    }
  }
  return hitTokens.size >= 2;
}

function hasDedicatedSupportTargetPage(productName, feature, supportingPages) {
  const targetName = normalizeText(supportMatrixTargetName(productName, feature));
  if (!targetName) {
    return false;
  }
  return (supportingPages || []).some((page) => {
    if (!page || isBroadCatalogSupportPage(page.url)) {
      return false;
    }
    const title = normalizeText(page.title || "");
    const url = normalizeText(page.url || "");
    return title.includes(targetName) || url.includes(targetName);
  });
}

function isHistoricalDeprecatedFieldFeature(productName, feature) {
  if (normalizeText(productName || "") !== "config connector") {
    return false;
  }
  const nameAndSummary = `${feature?.feature_name || ""} ${feature?.feature_summary || ""}`;
  const summary = normalizeText(feature?.feature_summary || "");
  const deprecationDate = normalizeWhitespace(feature?.deprecation_date || "");
  return Boolean(deprecationDate)
    && /previously supported|deprecated/.test(summary)
    && /\bspec\.|status\.|field\b/.test(nameAndSummary)
    && /resource/.test(summary);
}

function isExplicitSupportMatrixFeature(productName, feature) {
  const product = normalizeText(productName || "");
  const name = normalizeText(feature?.feature_name || "");
  const summary = normalizeText(feature?.feature_summary || "");
  if (!product) {
    return false;
  }
  if (product === "cloud billing" && /^cloud billing detailed export .+ (granularity|granular usage)$/i.test(String(feature?.feature_name || ""))) {
    return true;
  }
  return name.includes(`${product} support for`)
    || summary.includes(`${product} supports`)
    || summary.includes(`supported by ${product}`);
}

function supportMatrixTargetName(productName, feature) {
  const product = normalizeWhitespace(String(productName || "")).toLowerCase();
  const name = normalizeWhitespace(String(feature?.feature_name || ""));
  const summary = normalizeWhitespace(String(feature?.feature_summary || ""));
  if (product === "cloud billing") {
    const match = name.match(/^Cloud Billing detailed export\s+(.+?)\s+(granularity|granular usage)$/i);
    if (match?.[1]) {
      return normalizeWhitespace(match[1]);
    }
  }
  const patterns = [
    new RegExp(`^${productName.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")} support for\\s+(.+)$`, "i"),
    /^access approval support for\s+(.+)$/i,
  ];
  for (const pattern of patterns) {
    const match = name.match(pattern);
    if (match?.[1]) {
      return normalizeWhitespace(match[1]);
    }
  }
  const summaryMatch = summary.match(/^\s*(.+?)\s+is supported by\s+/i);
  return normalizeWhitespace(summaryMatch?.[1] || "");
}

function preferredRuntimeMarker(productName) {
  const normalized = normalizeText(productName || "");
  const markers = [
    "python3",
    "python",
    "java-gen2",
    "java",
    "go",
    "nodejs",
    "node-js",
    "node",
    "php",
    "ruby",
  ];
  return markers.find((marker) => normalized.includes(marker)) || "";
}

function hasRuntimeMarker(text, marker) {
  const raw = String(text || "").toLowerCase();
  const patterns = {
    python: /(^|[^a-z0-9])(python|python3)([^a-z0-9]|$)/,
    java: /(^|[^a-z0-9])(java|java-gen2)([^a-z0-9]|$)/,
    go: /(^|[^a-z0-9])go([^a-z0-9]|$)/,
    node: /(^|[^a-z0-9])(node|nodejs|node-js)([^a-z0-9]|$)/,
    php: /(^|[^a-z0-9])php([^a-z0-9]|$)/,
    ruby: /(^|[^a-z0-9])ruby([^a-z0-9]|$)/,
  };
  return (patterns[marker] || new RegExp(`(^|[^a-z0-9])${marker}([^a-z0-9]|$)`)).test(raw);
}

function capCoverageByEvidence(productName, feature, supportingPages, coverageStatus) {
  const normalized = String(coverageStatus || "NONE").toUpperCase();
  if (!["HIGH", "MEDIUM", "LOW", "NONE"].includes(normalized)) {
    return "NONE";
  }
  if (!supportingPages?.length) {
    return normalized;
  }
  const hasBroadOnlyEvidence = supportingPages.some((page) => isBroadCatalogSupportPage(page.url))
    && !hasDedicatedSupportingPage(feature, supportingPages);
  if (hasBroadOnlyEvidence && isExplicitSupportMatrixFeature(productName, feature)) {
    return normalized === "NONE" ? "NONE" : "LOW";
  }
  if (isExplicitSupportMatrixFeature(productName, feature) && !hasDedicatedSupportTargetPage(productName, feature, supportingPages)) {
    return normalized === "NONE" ? "NONE" : "LOW";
  }
  if (hasBroadOnlyEvidence && (normalized === "HIGH" || normalized === "MEDIUM")) {
    return "LOW";
  }
  const exactIdentifiers = featureExactIdentifiers(productName, feature);
  const hasExactIdentifierEvidence = exactIdentifiers.length > 0
    && supportingPages.some((page) => pageContainsExactIdentifier(page, exactIdentifiers));
  const hasFullPhraseEvidence = supportingPages.some((page) => pageSupportsFullFeaturePhrase(page, feature, productName));
  const hasHighSignalEvidence = supportingPages.some((page) => pageHasHighSignalTokenEvidence(feature, page));
  const hasDedicatedEvidence = hasDedicatedSupportingPage(feature, supportingPages)
    || supportingPages.some((page) => hasProductSpecificDedicatedEvidence(productName, feature, page))
    || hasExactIdentifierEvidence
    || hasFullPhraseEvidence
    || hasHighSignalEvidence;
  if (normalized === "LOW" && hasDedicatedEvidence && !hasBroadOnlyEvidence) {
    return "MEDIUM";
  }
  if (normalized === "MEDIUM" && isHistoricalDeprecatedFieldFeature(productName, feature) && hasDedicatedEvidence) {
    return "MEDIUM";
  }
  if (normalized === "MEDIUM" && supportingPages.some((page) => hasProductSpecificDedicatedEvidence(productName, feature, page))) {
    return "MEDIUM";
  }
  return normalized;
}

function hasStrongSingleSourceEvidence(feature, supportingPages) {
  if ((supportingPages || []).length !== 1) {
    return false;
  }

  const onlyUrl = String(supportingPages[0]?.url || "");
  const normalizedSummary = normalizeText(feature?.feature_summary || "");
  const normalizedName = normalizeText(feature?.feature_name || "");

  if (/\/admin-sdk\/reports\/v1\/(guides\/manage-audit-login|appendix\/activity\/login)(?:\/|$)/.test(onlyUrl)) {
    return /\blogin\b/.test(normalizedName) || /\blogin\b/.test(normalizedSummary);
  }

  if (/\/appengine\/docs\/standard\/services\/search\/facet-search(?:\/|$)/.test(onlyUrl)) {
    return /\bfaceted search\b/.test(normalizedName) || /\bfaceted search\b/.test(normalizedSummary);
  }

  if (/\/appengine\/docs\/legacy\/standard\/python\/tools\/built-in-libraries-27(?:\/|$)/.test(onlyUrl)) {
    return /\bpyamf\b/.test(normalizedName) || /\bpyamf\b/.test(normalizedSummary);
  }

  return false;
}

function sanitizeTableCell(text) {
  return String(text || "").replace(/\|/g, "\\|").replace(/\r?\n/g, " ").trim();
}

function parseFrontmatter(markdown) {
  const match = markdown.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);
  if (!match) {
    return { frontmatter: {}, body: markdown };
  }

  const frontmatter = {};
  for (const rawLine of match[1].split(/\r?\n/)) {
    const separator = rawLine.indexOf(":");
    if (separator <= 0) {
      continue;
    }

    const key = rawLine.slice(0, separator).trim();
    const rawValue = rawLine.slice(separator + 1).trim();
    frontmatter[key] = rawValue.replace(/^"(.*)"$/, "$1");
  }

  return {
    frontmatter,
    body: markdown.slice(match[0].length),
  };
}

function stripMarkdown(text) {
  return String(text || "")
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/`([^`]+)`/g, "$1")
    .replace(/!\[[^\]]*]\([^)]*\)/g, " ")
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
    .replace(/^>\s?/gm, " ")
    .replace(/^#+\s+/gm, "")
    .replace(/\|/g, " ")
    .replace(/[*_~]/g, " ")
    .replace(/\r?\n/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function splitIntoSentences(text) {
  return normalizeWhitespace(text)
    .split(/(?<=[.!?])\s+(?=[A-Z0-9])/)
    .map((sentence) => sentence.trim())
    .filter((sentence) => sentence.length >= 30);
}

function parseStep02Markdown(markdown, productSlug) {
  const productNameMatch = markdown.match(/^#\s+(.+)\r?$/m);
  const rowCountMatch = markdown.match(/Source rows considered:\s+(\d+)/);
  const featureCountMatch = markdown.match(/Unique features:\s+(\d+)/);
  const lines = markdown.split(/\r?\n/);
  const features = [];

  for (const line of lines) {
    const match = line.match(/^\|\s*(.*?)\s*\|\s*(.*?)\s*\|\s*(.*?)\s*\|\s*(.*?)\s*\|$/);
    if (!match || match[1] === "---" || match[1] === "Latest feature date") {
      continue;
    }

    features.push({
      latest_feature_date: match[1].trim(),
      feature_name: match[2].replace(/\\\|/g, "|").trim(),
      deprecation_date: match[3].trim(),
      feature_summary: match[4].replace(/\\\|/g, "|").trim(),
      feature_slug: slugify(match[2]),
    });
  }

  return {
    schema_version: schemaVersion,
    product_name: productNameMatch?.[1]?.trim() || productSlug,
    product_slug: productSlug,
    source_row_count: Number(rowCountMatch?.[1] || 0),
    feature_count: Number(featureCountMatch?.[1] || features.length),
    features,
  };
}

async function loadStep02Product(productSlug) {
  const filePath = path.join(inputStep02Root, `${productSlug}.md`);
  const content = await readFile(filePath, "utf8");
  return {
    ...parseStep02Markdown(content, productSlug),
    step02_path: filePath,
  };
}

async function loadSelectedSources(productSlug) {
  const selectionPath = path.join(inputStep04Root, "products", productSlug, "selection.json");
  const selection = await readJson(selectionPath, null);
  return Array.isArray(selection?.selected_sources) ? selection.selected_sources : [];
}

async function runBxSearch(query, featureRecoveryCache) {
  if (featureRecoveryCache[query]) {
    return featureRecoveryCache[query];
  }

  try {
    const { stdout } = await execFileAsync("bx", ["web", query, "--count", "6"], {
      windowsHide: true,
      maxBuffer: 1024 * 1024 * 16,
      timeout: 120000,
    });
    const payload = JSON.parse(stdout.trim() || "{}");
    featureRecoveryCache[query] = payload;
    await writeJsonQueued(featureRecoveryCacheFile, featureRecoveryCache);
    return payload;
  } catch {
    featureRecoveryCache[query] = {};
    await writeJsonQueued(featureRecoveryCacheFile, featureRecoveryCache);
    return {};
  }
}

function decodeHtmlEntities(text) {
  return String(text || "")
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&quot;/gi, "\"")
    .replace(/&#39;|&apos;/gi, "'")
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">")
    .replace(/&#(\d+);/g, (_, code) => String.fromCharCode(Number(code)))
    .replace(/&#x([0-9a-f]+);/gi, (_, code) => String.fromCharCode(parseInt(code, 16)));
}

function stripHtml(html) {
  return normalizeWhitespace(
    decodeHtmlEntities(
      String(html || "")
        .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, " ")
        .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, " ")
        .replace(/<noscript\b[^>]*>[\s\S]*?<\/noscript>/gi, " ")
        .replace(/<svg\b[^>]*>[\s\S]*?<\/svg>/gi, " ")
        .replace(/<[^>]+>/g, " ")
    )
  );
}

function pageNeedsRefresh(page) {
  const url = normalizeUrl(page?.url);
  const pathname = (() => {
    try {
      return new URL(url).pathname.toLowerCase();
    } catch {
      return "";
    }
  })();

  if (/\/workspace\/admin\/reports\/v1\/guides\/manage-audit-login(?:\/|$)/.test(pathname)) {
    return !/login activity report|disabled-account|unknown-failure/i.test(`${page.title}\n${page.body}`);
  }
  if (/\/appengine\/docs\/standard\/services\/search\/facet-search(?:\/|$)/.test(pathname)) {
    return !/faceted search|facets?/i.test(`${page.title}\n${page.body}`);
  }
  if (/\/appengine\/docs\/legacy\/standard\/python\/tools\/built-in-libraries-27(?:\/|$)/.test(pathname)) {
    return !/pyamf|built-in third-party libraries/i.test(`${page.title}\n${page.body}`);
  }

  return false;
}

function shouldAllowReleaseNotesRecovery(productSlug) {
  return new Set([
    "google-kubernetes-engine",
    "dataproc",
    "alloydb",
    "dialogflow",
    "earth-engine-code-editor",
    "cloud-composer",
  ]).has(String(productSlug || "").toLowerCase());
}

async function fetchSelectedSourcePage(productSlug, selectedSource, options = {}) {
  const url = normalizeUrl(selectedSource?.url);
  if (!url || (isReleaseNotesUrl(url) && !options.allowReleaseNotes)) {
    return null;
  }

  try {
    const response = await fetch(url, {
      headers: {
        "user-agent": "Mozilla/5.0 (compatible; gcp-radar/1.0)",
      },
    });
    if (!response.ok) {
      return null;
    }

    const html = await response.text();
    const canonicalUrl = normalizeUrl(html.match(/<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)["']/i)?.[1] || response.url || url);
    const title = normalizeWhitespace(
      decodeHtmlEntities(html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1] || canonicalUrl)
    );
    const body = stripHtml(html);
    if (!body) {
      return null;
    }

    return {
      page_id: hashValue(`http:${selectedSource?.source_id || "selected"}:${canonicalUrl}`),
      source_id: `${selectedSource?.source_id || "selected"}-http`,
      relative_markdown_path: path.join("products", productSlug, "corpus", "http", `${slugify(selectedSource?.source_id || "selected")}.md`).replace(/\\/g, "/"),
      markdown_path: "",
      url: canonicalUrl,
      title,
      body,
      normalized_body: normalizeText(body),
      normalized_title: normalizeText(title),
      normalized_url: normalizeText(canonicalUrl),
    };
  } catch {
    return null;
  }
}

function looksLikeExactIdentifier(text) {
  return /[._()]/.test(String(text || ""))
    || /\b[A-Z][A-Z0-9]*_[A-Z0-9_]+\b/.test(String(text || ""))
    || /\b[A-Z]{2,}(?:\.[A-Z_]+)+\b/.test(String(text || ""))
    || /\b[a-z]+(?:\.[A-Z_]+)+\b/.test(String(text || ""));
}

function extractExactIdentifiers(text) {
  const value = String(text || "");
  const matches = [
    ...(value.match(/\b(?:[A-Z]{2,}|[A-Z][A-Z0-9_]*|[a-z][a-z0-9_]*)(?:\.[A-Z][A-Z0-9_]*|\.[a-z][a-z0-9_]*)+\b/g) || []),
    ...(value.match(/\b[A-Z][A-Z0-9]*_[A-Z0-9_]+\b/g) || []),
  ];
  return [...new Set(matches
    .map((match) => String(match || "").trim())
    .map((match) => match.replace(/[.,;:]+$/g, "").replace(/\*+$/g, "").replace(/_+$/g, ""))
    .filter((match) => !/^(?:[A-Z]\.){1,}[A-Z]?$/i.test(match))
    .filter((match) => !/^(?:U\.?S\.?|U\.?K\.?)$/i.test(match))
    .filter(Boolean))];
}

function featureExactIdentifiers(productName, feature) {
  const normalizedProduct = normalizeText(productName || "");
  const featureName = String(feature?.feature_name || "").trim();
  const featureSummary = String(feature?.feature_summary || "").trim();
  const identifiers = new Set([
    ...extractExactIdentifiers(featureName),
    ...extractExactIdentifiers(featureSummary),
  ]);

  if (/^[A-Z][A-Z0-9_]*$/.test(featureName) && !featureName.includes(".")) {
    identifiers.add(featureName);
  }

  if ((normalizedProduct === "compute engine"
      || normalizedProduct === "firestore"
      || normalizedProduct === "google cloud mcp servers"
      || normalizedProduct === "resource manager")
    && /mcp .*organization polic|organization polic.*mcp|gcp\.managed/i.test(`${featureName} ${featureSummary}`)) {
    identifiers.add("gcp.managed.allowedMCPServices");
    identifiers.add("allowedMCPServices");
  }

  if (normalizedProduct === "looker" && /job_creation_optional|optional job creation/i.test(`${featureName} ${featureSummary}`)) {
    identifiers.add("JOB_CREATION_OPTIONAL");
  }

  if (normalizedProduct === "looker studio" && /native_dimension/i.test(`${featureName} ${featureSummary}`)) {
    identifiers.add("NATIVE_DIMENSION");
  }

  if (normalizedProduct === "google cloud contact center as a service" && /end_user\.phone|end user phone|apps api .*parameter/i.test(`${featureName} ${featureSummary}`)) {
    identifiers.add("end_user.phone");
  }

  if (normalizedProduct === "sensitive data protection" && /^us_state$/i.test(featureName)) {
    identifiers.add("US_STATE");
    identifiers.add("U.S. state");
  }

  return [...identifiers].filter(Boolean);
}

function isBroadFeatureCandidatePage(url) {
  const text = String(url || "");
  return /\/docs\/reference(?:\/)?$/i.test(text)
    || /\/bq-cli-reference(?:\/|$)/i.test(text)
    || /\/reference\/storage(?:\/|$)/i.test(text)
    || /\/functions-all(?:\/|$)/i.test(text)
    || /\/release-notes(?:\/|$)/i.test(text);
}

function shouldAttemptFeatureRecovery(productName, productSlug, feature, keywordEntry, candidatePages) {
  const exactPhrases = [
    ...extractExactIdentifiers(feature?.feature_name),
    ...extractExactIdentifiers(feature?.feature_summary),
    String(feature?.feature_name || "").trim(),
    ...arrayOfStrings(keywordEntry?.keyword_phrases),
  ].filter(looksLikeExactIdentifier);
  const directUrls = directFeatureRecoveryUrls(productSlug, feature);
  const aliasPhrases = featureEvidenceAliases(productName, feature);

  if (exactPhrases.length === 0 && directUrls.length === 0 && aliasPhrases.length === 0) {
    return false;
  }

  if (candidatePages.length === 0) {
    return true;
  }

  const exactPhraseMatchesExisting = candidatePages.some((page) => exactPhrases.some((phrase) => {
    const normalizedPhrase = normalizeText(phrase);
    const normalizedTitle = normalizeText(page?.title || "");
    const normalizedUrl = normalizeText(page?.url || "");
    return normalizedTitle.includes(normalizedPhrase)
      || normalizedUrl.includes(normalizedPhrase);
  }));
  if (!exactPhraseMatchesExisting) {
    return true;
  }

  if (candidatePages.every((page) => isBroadFeatureCandidatePage(page.url))) {
    return true;
  }

  if (directUrls.length > 0 || aliasPhrases.length > 0) {
    const hasDedicatedPage = candidatePages.some((page) => hasProductSpecificDedicatedEvidence(productName, feature, page));
    if (!hasDedicatedPage) {
      return true;
    }
  }

  return false;
}

function featureRecoveryQueries(productSlug, selectedSources, feature, keywordEntry) {
  const featureName = String(feature?.feature_name || "").trim();
  const phrases = [...new Set([
    ...extractExactIdentifiers(feature?.feature_name),
    ...extractExactIdentifiers(feature?.feature_summary),
    ...arrayOfStrings(keywordEntry?.keyword_phrases),
    featureName,
  ])]
    .filter(looksLikeExactIdentifier)
    .slice(0, 3);
  const identifiers = [...new Set([
    ...extractExactIdentifiers(feature?.feature_name),
    ...extractExactIdentifiers(feature?.feature_summary),
  ])];

  const scopes = [];
  for (const source of selectedSources || []) {
    if (!["docs_reference", "api_reference"].includes(String(source?.family || ""))) {
      continue;
    }
    try {
      const url = new URL(source.url);
      const segments = url.pathname.split("/").filter(Boolean);
      const scopePath = segments.slice(0, Math.min(4, segments.length)).join("/");
      scopes.push(`site:${url.host}/${scopePath}`);
    } catch {
      // ignore invalid urls
    }
  }
  if (productSlug) {
    scopes.push(`site:docs.cloud.google.com/${productSlug}/docs`);
    scopes.push(`site:docs.cloud.google.com/${productSlug}/docs/reference`);
  }

  const productSpecific = [];
  if (productSlug === "google-kubernetes-engine") {
    const featureText = String(feature?.feature_name || "");
    if (/node_sa_missing_permissions|node service accounts|missing iam permissions/i.test(featureText)) {
      productSpecific.push('site:docs.cloud.google.com/kubernetes-engine/docs/troubleshooting/service-accounts "NODE_SA_MISSING_PERMISSIONS"');
      productSpecific.push('site:docs.cloud.google.com/kubernetes-engine/docs/troubleshooting/service-accounts "node service accounts" "missing IAM permissions"');
    }
  }
  if (productSlug === "gmail-api") {
    for (const phrase of phrases) {
      const methodMatch = String(phrase).match(/^([a-z]+)\.([a-z]+)$/i);
      if (methodMatch) {
        const [, resource, method] = methodMatch;
        productSpecific.push(`site:developers.google.com/workspace/gmail/api/reference/rest "${phrase}"`);
        productSpecific.push(`site:developers.google.com/workspace/gmail/api/reference/rest "users.${resource}" "${method}"`);
      }
      productSpecific.push(`site:developers.google.com/workspace/gmail/markup "${phrase}"`);
      productSpecific.push(`site:developers.google.com/workspace/gmail/markup/reference "${phrase}"`);
      productSpecific.push(`site:developers.google.com/workspace/gmail/markup/actions "${phrase}"`);
    }
  }
  if (productSlug === "workflows") {
    for (const phrase of phrases) {
      const functionMatch = String(phrase).match(/^([a-z]+)\.([a-z_]+)$/i);
      if (functionMatch) {
        const [, namespace, fn] = functionMatch;
        productSpecific.push(`site:docs.cloud.google.com/workflows/docs/reference/stdlib "${phrase}"`);
        productSpecific.push(`site:docs.cloud.google.com/workflows/docs/reference/stdlib "${namespace}" "${fn}"`);
      }
    }
  }
  if (productSlug === "cloud-build" && /^cloud build api$/i.test(featureName)) {
    productSpecific.push('site:docs.cloud.google.com/build/docs "api reference rest"');
    productSpecific.push('site:docs.cloud.google.com/build/docs "cloudbuild.googleapis.com"');
  }
  if (productSlug === "cloud-data-fusion" && /instancev3 monitored resource/i.test(featureName)) {
    productSpecific.push('site:docs.cloud.google.com/monitoring/api/resources "datafusion.googleapis.com/InstanceV3"');
  }
  if (productSlug === "cloud-logging" && /windows logging agent v1-9/i.test(featureName)) {
    productSpecific.push('site:docs.cloud.google.com/logging/docs/agent/logging/configuration "config.d"');
  }
  if (productSlug === "bigquery") {
    for (const phrase of phrases) {
      productSpecific.push(`site:docs.cloud.google.com/bigquery/docs/reference/standard-sql "${phrase}"`);
    }
    for (const identifier of identifiers) {
      if (/^OBJ\./i.test(identifier)) {
        productSpecific.push('site:docs.cloud.google.com/bigquery/docs "objectref_functions"');
      }
      if (/^NET\./i.test(identifier)) {
        productSpecific.push('site:docs.cloud.google.com/bigquery/docs "net_functions"');
      }
      if (/^INFORMATION_SCHEMA\.SHARED_DATASET_USAGE$/i.test(identifier)) {
        productSpecific.push('site:docs.cloud.google.com/bigquery/docs "information-schema-shared-dataset-usage"');
      }
      if (/^INFORMATION_SCHEMA\.WRITE_API_TIMELINE$/i.test(identifier) || /^WRITE_API_TIMELINE$/i.test(identifier)) {
        productSpecific.push('site:docs.cloud.google.com/bigquery/docs "information-schema-write-api"');
      }
      if (/^INFORMATION_SCHEMA\.TABLE_STORAGE_USAGE_TIMELINE$/i.test(identifier) || /^TABLE_STORAGE_USAGE_TIMELINE$/i.test(identifier)) {
        productSpecific.push('site:docs.cloud.google.com/bigquery/docs "information-schema-table-storage-usage"');
      }
      if (/^INFORMATION_SCHEMA\.TABLE_STORAGE_USAGE_TIMELINE_BY_ORGANIZATION$/i.test(identifier) || /^TABLE_STORAGE_USAGE_TIMELINE_BY_ORGANIZATION$/i.test(identifier)) {
        productSpecific.push('site:docs.cloud.google.com/bigquery/docs "information-schema-table-storage-usage-by-organization"');
      }
      if (/^INFORMATION_SCHEMA\.MATERIALIZED_VIEW/i.test(identifier) || /^MATERIALIZED_VIEW/i.test(identifier)) {
        productSpecific.push('site:docs.cloud.google.com/bigquery/docs "information-schema-materialized-views"');
      }
      if (/^INFORMATION_SCHEMA\.RESERVATIONS?_TIMELINE$/i.test(identifier) || /^RESERVATIONS?_TIMELINE$/i.test(identifier)) {
        productSpecific.push('site:docs.cloud.google.com/bigquery/docs "information-schema-reservation-timeline"');
      }
      if (/^INFORMATION_SCHEMA\.STREAMING_TIMELINE$/i.test(identifier) || /^STREAMING_TIMELINE$/i.test(identifier)) {
        productSpecific.push('site:docs.cloud.google.com/bigquery/docs "information-schema-streaming"');
      }
      if (/^ML\.GENERATE_TEXT_EMBEDDING$/i.test(identifier) || /^ML\.GENERATE_EMBEDDING$/i.test(identifier)) {
        productSpecific.push('site:docs.cloud.google.com/bigquery/docs "bigqueryml-syntax-generate-embedding"');
      }
      if (/^INFORMATION_SCHEMA\.ORGANIZATION_OPTIONS_CHANGES$/i.test(identifier) || /^ORGANIZATION_OPTIONS_CHANGES$/i.test(identifier)) {
        productSpecific.push('site:docs.cloud.google.com/bigquery/docs "information-schema-organization-options-changes"');
      }
      if (/^INFORMATION_SCHEMA\.PROJECT_OPTIONS_CHANGES$/i.test(identifier) || /^PROJECT_OPTIONS_CHANGES$/i.test(identifier)) {
        productSpecific.push('site:docs.cloud.google.com/bigquery/docs "information-schema-project-options-changes"');
      }
      if (/^LAX_BOOL$/i.test(identifier)) {
        productSpecific.push('site:docs.cloud.google.com/bigquery/docs "json_functions" "LAX_BOOL"');
      }
      if (/^ST_(AZIMUTH|INTERIORRINGS|ENDPOINT|POINTN|STARTPOINT|DUMP)$/i.test(identifier)) {
        productSpecific.push(`site:docs.cloud.google.com/bigquery/docs "geography_functions" "${identifier}"`);
      }
    }
    if (/^custom masking routines$/i.test(featureName)) {
      productSpecific.push('site:docs.cloud.google.com/bigquery/docs "user-defined-functions" "REGEXP_REPLACE"');
      productSpecific.push('site:docs.cloud.google.com/bigquery/docs "column-data-masking" "masking routine"');
    }
    if (/^dataset copy$/i.test(featureName)) {
      productSpecific.push('site:docs.cloud.google.com/bigquery/docs "manage datasets" "copy a dataset"');
    }
  }
  if (productSlug === "sensitive-data-protection") {
    for (const identifier of identifiers) {
      if (/^[A-Z][A-Z0-9_]{2,}$/.test(identifier)) {
        productSpecific.push(`site:docs.cloud.google.com/sensitive-data-protection/docs/infotypes-reference "${identifier}"`);
        productSpecific.push(`site:docs.cloud.google.com/sensitive-data-protection/docs/infotypes-reference "${identifier.replace(/_/g, " ")}"`);
      }
    }
  }
  if (productSlug === "security-command-center") {
    if (/^(?:YL2_)?GKE_/i.test(String(feature?.feature_name || ""))) {
      productSpecific.push(`site:docs.cloud.google.com/security-command-center/docs/findings/threats "${slugify(featureName)}"`);
      productSpecific.push(`site:docs.cloud.google.com/security-command-center/docs/findings/threats "${featureName}"`);
      productSpecific.push('site:docs.cloud.google.com/security-command-center/docs "gke-threats"');
      productSpecific.push('site:docs.cloud.google.com/security-command-center/docs "threat-findings-index"');
    }
  }
  if (productSlug === "config-connector") {
    const { resourceKind, fieldTerms } = configConnectorFeatureHints(feature);
    if (resourceKind) {
      const fieldQueries = fieldTerms.slice(0, 4);
      for (const fieldTerm of fieldQueries) {
        productSpecific.push(`site:docs.cloud.google.com/config-connector/docs/reference/resource-docs "${resourceKind}" "${fieldTerm}"`);
      }
      productSpecific.push(`site:docs.cloud.google.com/config-connector/docs/reference/resource-docs "${resourceKind}"`);
    }
    if (/annotation/i.test(String(feature?.feature_name || ""))) {
      productSpecific.push('site:docs.cloud.google.com/config-connector/docs/reference "disable-dependent-services"');
      productSpecific.push('site:docs.cloud.google.com/config-connector/docs/reference/annotations "disable-dependent-services"');
    }
    if (/webhook validation/i.test(String(feature?.feature_name || ""))) {
      productSpecific.push('site:docs.cloud.google.com/config-connector/docs "ControllerResource" "spec.webhooks"');
      productSpecific.push('site:docs.cloud.google.com/config-connector/docs "NamespacedControllerResource" "spec.webhooks"');
    }
  }
  if (productSlug === "cloud-sql-for-postgresql" && /\bflag\b/i.test(String(feature?.feature_name || ""))) {
    for (const identifier of extractExactIdentifiers(feature?.feature_name)) {
      productSpecific.push(`site:docs.cloud.google.com/sql/docs/postgres/flags "${identifier}"`);
    }
    if (/pg_squeeze/i.test(String(feature?.feature_name || ""))) {
      productSpecific.push('site:docs.cloud.google.com/sql/docs/postgres/extensions "pg_squeeze"');
    }
    if (/pg_wait_sampling/i.test(String(feature?.feature_name || ""))) {
      productSpecific.push('site:docs.cloud.google.com/sql/docs/postgres/extensions "pg_wait_sampling"');
      productSpecific.push('site:docs.cloud.google.com/sql/docs/postgres/using-query-insights "wait events"');
    }
    if (/rdkit/i.test(String(feature?.feature_name || ""))) {
      productSpecific.push('site:docs.cloud.google.com/sql/docs/postgres/extensions "rdkit"');
    }
  }

  return [...new Set([
    ...productSpecific,
    ...scopes.flatMap((scope) => phrases.map((phrase) => `${scope} "${phrase}"`)),
  ])]
    .slice(0, 8);
}

function directFeatureRecoveryUrls(productSlug, feature) {
  const urls = [];
  const featureName = String(feature?.feature_name || "");
  const featureSummary = String(feature?.feature_summary || "");
  const identifiers = [...new Set([
    ...extractExactIdentifiers(featureName),
    ...extractExactIdentifiers(featureSummary),
  ])];

  if (productSlug === "workflows") {
    for (const identifier of identifiers) {
      const functionMatch = String(identifier).match(/^([a-z]+)\.([a-z_]+)$/i);
      if (functionMatch) {
        const [, namespace, fn] = functionMatch;
        urls.push(`https://docs.cloud.google.com/workflows/docs/reference/stdlib/${namespace}/${fn}`);
      }
      if (identifier === "get_type") {
        urls.push("https://docs.cloud.google.com/workflows/docs/reference/stdlib/overview");
        urls.push("https://docs.cloud.google.com/workflows/docs/reference/syntax/expressions");
      }
    }

    if (/Expression default function/i.test(featureName)) {
      urls.push("https://docs.cloud.google.com/workflows/docs/reference/syntax/expressions");
    }
    if (/Expression if function/i.test(featureName)) {
      urls.push("https://docs.cloud.google.com/workflows/docs/reference/syntax/expressions");
      urls.push("https://docs.cloud.google.com/workflows/docs/reference/syntax/conditions");
    }
    if (/Service agent quota and billing attribution/i.test(featureName)) {
      urls.push("https://docs.cloud.google.com/iam/docs/roles-permissions/workflows");
      urls.push("https://docs.cloud.google.com/iam/docs/roles-permissions/serviceusage");
      urls.push("https://docs.cloud.google.com/workflows/docs/authentication");
    }
    if (/Cross-project service account deployment/i.test(featureName)) {
      urls.push("https://docs.cloud.google.com/workflows/docs/authentication");
      urls.push("https://docs.cloud.google.com/workflows/docs/authenticate-from-workflow");
    }
  }

  if (productSlug === "gmail-api") {
    if (/Deal Cards in the Promotions tab/i.test(featureName)) {
      urls.push("https://developers.google.com/workspace/gmail/markup/overview");
      urls.push("https://developers.google.com/workspace/gmail/markup/highlights");
    }
    if (/Review Action/i.test(featureName)) {
      urls.push("https://developers.google.com/workspace/gmail/markup/actions/actions-overview");
      urls.push("https://developers.google.com/workspace/gmail/markup/actions/declaring-actions");
      urls.push("https://developers.google.com/workspace/gmail/markup/reference/one-click-action");
    }
    if (/RSVP Action/i.test(featureName)) {
      urls.push("https://developers.google.com/workspace/gmail/markup/actions/actions-overview");
      urls.push("https://developers.google.com/workspace/gmail/markup/reference/event-reservation");
      urls.push("https://developers.google.com/workspace/gmail/markup/reference/types/Action");
      urls.push("https://developers.google.com/workspace/gmail/markup/registering-with-google");
    }
    if (/Message\.internalDate/i.test(featureName)) {
      urls.push("https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages");
    }
    if (/Order/i.test(featureName)) {
      urls.push("https://developers.google.com/workspace/gmail/markup/reference/order");
      urls.push("https://developers.google.com/workspace/gmail/markup/reference");
      urls.push("https://developers.google.com/workspace/gmail/markup/highlights");
    }
    if (/Parcel Delivery/i.test(featureName)) {
      urls.push("https://developers.google.com/workspace/gmail/markup/reference/parcel-delivery");
      urls.push("https://developers.google.com/workspace/gmail/markup/highlights");
      urls.push("https://developers.google.com/workspace/gmail/markup/reference");
    }
  }

  if (productSlug === "config-connector") {
    const hints = configConnectorFeatureHints(feature);
    if (hints.resourceKind === "NetworkServicesGRPCRoute") {
      urls.push("https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/networkservices/networkservicesgrpcroute");
    }
    if (hints.resourceKind === "NetworkServicesHTTPRoute") {
      urls.push("https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/networkservices/networkserviceshttproute");
    }
    if (hints.resourceKind === "NetworkServicesTCPRoute") {
      urls.push("https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/networkservices/networkservicestcproute");
    }
    if (/annotation/i.test(featureName)) {
      urls.push("https://docs.cloud.google.com/config-connector/docs/reference/annotations");
    }
    if (/disable-dependent-services/i.test(featureName)) {
      urls.push("https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/serviceusage/service");
    }
    if (/webhook validation/i.test(featureName)) {
      urls.push("https://docs.cloud.google.com/config-connector/docs/how-to/customizing-container-resources");
      urls.push("https://docs.cloud.google.com/config-connector/docs/how-to/customizing-webhook-timeouts");
    }
  }

  if (productSlug === "anthos-config-management") {
    if (/namespaceselector|spec\.mode/i.test(featureName)) {
      urls.push("https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/namespace-scoped-objects");
      urls.push("https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/fleet-tenancy");
    }
    if (/spec\.override|rolerefs|gitsyncdepth|reconcile timeout|resource request|resource limit/i.test(featureName)) {
      urls.push("https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/rootsync-reposync-fields");
      urls.push("https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-config-sync");
      urls.push("https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/declare-resource-dependency");
    }
    if (/spec\.helm\.version|spec\.helm\.values|helm/i.test(featureName)) {
      urls.push("https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/rootsync-reposync-fields");
      urls.push("https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/tutorials/config-sync-helm");
      urls.push("https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/grant-access-helm-oci");
    }
    if (/config\.kubernetes\.io\/depends-on/i.test(featureName)) {
      urls.push("https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/declare-resource-dependency");
      urls.push("https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/labels-and-annotations");
    }
    if (/local-config/i.test(featureName)) {
      urls.push("https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/managing-objects");
      urls.push("https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/labels-and-annotations");
    }
    if (/kustomize\/helm rendering|breaking up repo|multi-repo/i.test(featureName)) {
      urls.push("https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/breaking-up-repo");
      urls.push("https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/tutorials/config-sync-helm");
      urls.push("https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/rootsync-reposync-fields");
    }
    if (/hierarchy controller|hnc upgrade/i.test(featureName)) {
      urls.push("https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/migrate-hierarchy-controller");
      urls.push("https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-kubectl");
    }
  }

  if (productSlug === "bigquery") {
    for (const identifier of identifiers) {
      if (/^OBJ\./i.test(identifier)) {
        urls.push("https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/objectref_functions");
      }
      if (/^NET\./i.test(identifier)) {
        urls.push("https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/net_functions");
      }
      if (/^INFORMATION_SCHEMA\.SHARED_DATASET_USAGE$/i.test(identifier)) {
        urls.push("https://docs.cloud.google.com/bigquery/docs/information-schema-shared-dataset-usage");
      }
      if (/^INFORMATION_SCHEMA\.WRITE_API_TIMELINE$/i.test(identifier) || /^WRITE_API_TIMELINE$/i.test(identifier)) {
        urls.push("https://docs.cloud.google.com/bigquery/docs/information-schema-write-api");
        urls.push("https://docs.cloud.google.com/bigquery/docs/write-api");
      }
      if (/^INFORMATION_SCHEMA\.TABLE_STORAGE_USAGE_TIMELINE$/i.test(identifier) || /^TABLE_STORAGE_USAGE_TIMELINE$/i.test(identifier)) {
        urls.push("https://docs.cloud.google.com/bigquery/docs/information-schema-table-storage-usage");
      }
      if (/^INFORMATION_SCHEMA\.TABLE_STORAGE_USAGE_TIMELINE_BY_ORGANIZATION$/i.test(identifier) || /^TABLE_STORAGE_USAGE_TIMELINE_BY_ORGANIZATION$/i.test(identifier)) {
        urls.push("https://docs.cloud.google.com/bigquery/docs/information-schema-table-storage-usage-by-organization");
      }
      if (/^INFORMATION_SCHEMA\.MATERIALIZED_VIEW/i.test(identifier) || /^MATERIALIZED_VIEW/i.test(identifier)) {
        urls.push("https://docs.cloud.google.com/bigquery/docs/information-schema-materialized-views");
      }
      if (/^INFORMATION_SCHEMA\.RESERVATIONS?_TIMELINE$/i.test(identifier) || /^RESERVATIONS?_TIMELINE$/i.test(identifier)) {
        urls.push("https://docs.cloud.google.com/bigquery/docs/information-schema-reservation-timeline");
        urls.push("https://docs.cloud.google.com/bigquery/docs/reservations-monitoring");
      }
      if (/^ML\.GENERATE_TEXT_EMBEDDING$/i.test(identifier) || /^ML\.GENERATE_EMBEDDING$/i.test(identifier)) {
        urls.push("https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-generate-embedding");
      }
      if (/^INFORMATION_SCHEMA\.STREAMING_TIMELINE$/i.test(identifier) || /^STREAMING_TIMELINE$/i.test(identifier)) {
        urls.push("https://docs.cloud.google.com/bigquery/docs/information-schema-streaming");
      }
      if (/^INFORMATION_SCHEMA\.ORGANIZATION_OPTIONS_CHANGES$/i.test(identifier) || /^ORGANIZATION_OPTIONS_CHANGES$/i.test(identifier)) {
        urls.push("https://docs.cloud.google.com/bigquery/docs/information-schema-organization-options-changes");
      }
      if (/^INFORMATION_SCHEMA\.PROJECT_OPTIONS_CHANGES$/i.test(identifier) || /^PROJECT_OPTIONS_CHANGES$/i.test(identifier)) {
        urls.push("https://docs.cloud.google.com/bigquery/docs/information-schema-project-options-changes");
      }
      if (/^LAX_BOOL$/i.test(identifier)) {
        urls.push("https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/json_functions");
        urls.push("https://docs.cloud.google.com/bigquery/docs/json-data");
      }
      if (/^ST_(AZIMUTH|INTERIORRINGS|ENDPOINT|POINTN|STARTPOINT|DUMP)$/i.test(identifier)) {
        urls.push("https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/geography_functions");
      }
    }
    if (/^custom masking routines$/i.test(featureName)) {
      urls.push("https://docs.cloud.google.com/bigquery/docs/user-defined-functions");
      urls.push("https://docs.cloud.google.com/bigquery/docs/column-data-masking");
      urls.push("https://docs.cloud.google.com/bigquery/docs/routines-intro");
    }
    if (/^dataset copy$/i.test(featureName)) {
      urls.push("https://docs.cloud.google.com/bigquery/docs/managing-datasets");
      urls.push("https://docs.cloud.google.com/bigquery/docs/dts-introduction");
      urls.push("https://docs.cloud.google.com/bigquery/docs/samples/bigquerydatatransfer-copy-dataset");
    }
    if (/mcp control (?:via|with) organization polic/i.test(featureName)) {
      urls.push("https://docs.cloud.google.com/bigquery/docs/use-bigquery-mcp");
      urls.push("https://docs.cloud.google.com/mcp/control-mcp-use-organization");
    }
    if ((/reservation\.v1beta1 api deprecation/i.test(featureName) || /google\.cloud\.bigquery\.reservation\.v1beta1\.api/i.test(featureName))) {
      urls.push("https://docs.cloud.google.com/bigquery/docs/reference/reservations/rest");
      urls.push("https://docs.cloud.google.com/bigquery/docs/reference/reservations/rpc/google.cloud.bigquery.reservation.v1");
    }
  }
  if (productSlug === "cloud-build" && /^cloud build api$/i.test(featureName)) {
    urls.push("https://docs.cloud.google.com/build/docs/api/reference/rest");
  }
  if (productSlug === "cloud-data-fusion" && /instancev3 monitored resource/i.test(featureName)) {
    urls.push("https://docs.cloud.google.com/monitoring/api/resources");
  }
  if (productSlug === "cloud-logging" && /windows logging agent v1-9/i.test(featureName)) {
    urls.push("https://docs.cloud.google.com/logging/docs/agent/logging/configuration");
  }
  if (productSlug === "earth-engine-data-catalog") {
    urls.push(...earthEngineCatalogUrlsForFeature(featureName, featureSummary));
    if (/^TIGER 2010 ZIP Code Tabulation Areas \(ZCTA5\)$/i.test(featureName)) {
      urls.push("https://developers.google.com/earth-engine/datasets/catalog/TIGER_2010_ZCTA5");
    }
    if (/^TIGER 2018 Counties$/i.test(featureName)) {
      urls.push("https://developers.google.com/earth-engine/datasets/catalog/TIGER_2018_Counties");
    }
  }
  if (productSlug === "earth-engine-python-client-library" && /^Shapefile uploads$/i.test(featureName)) {
    urls.push("https://developers.google.com/earth-engine/guides/table_upload");
    urls.push("https://developers.google.com/earth-engine/guides/table_manifest");
    urls.push("https://developers.google.com/earth-engine/guides/command_line");
  }
  if (productSlug === "earth-engine-javascript-client-library") {
    if (/^ee\.layers\.ImageOverlay$/i.test(featureName)) {
      urls.push("https://developers.google.com/earth-engine/custom-apps/client-js");
      urls.push("https://developers.google.com/earth-engine/guides/featureview_overview");
    }
    if (/^ee\.MapLayerOverlay$/i.test(featureName)) {
      urls.push("https://developers.google.com/earth-engine/guides/app_engine_examples");
      urls.push("https://developers.google.com/earth-engine/apidocs/ui-map-layer");
      urls.push("https://developers.google.com/earth-engine/apidocs/map-addlayer");
    }
    if (/^getMap\(\) method$/i.test(featureName)) {
      urls.push("https://developers.google.com/earth-engine/custom-apps/client-js");
      urls.push("https://developers.google.com/earth-engine/guides/app_engine_intro");
    }
  }
  if (productSlug === "apigee-x") {
    if (/target\.evaluated\.url|content\.as\.base64|content\.as\.url\.safe\.base64|base64 flow variable|server url|server\.url/i.test(`${featureName} ${featureSummary}`)) {
      urls.push("https://docs.cloud.google.com/apigee/docs/api-platform/reference/variables-reference");
    }
    if (/apim operator/i.test(featureName)) urls.push("https://docs.cloud.google.com/apigee/docs/api-platform/apigee-kubernetes");
    if (/organizations\.apps/i.test(featureName)) urls.push("https://docs.cloud.google.com/apigee/docs/reference/apis/apigee/rest/v1/organizations.apps");
    if (/classic ui/i.test(featureName)) {
      urls.push("https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/ui-overview");
      urls.push("https://docs.cloud.google.com/apigee/docs/deprecations/apigee-classic-ui");
    }
    if (/data residency|regional availability|me-central2|japan|zurich/i.test(featureName)) {
      urls.push("https://docs.cloud.google.com/apigee/docs/locations");
      urls.push("https://docs.cloud.google.com/apigee/docs/api-platform/get-started/drz-concepts");
    }
    if (/large message payload/i.test(featureName)) {
      urls.push("https://docs.cloud.google.com/apigee/docs/api-platform/reference/api-proxy-configuration-reference");
      urls.push("https://docs.cloud.google.com/apigee/docs/api-platform/reference/endpoint-properties-reference");
      urls.push("https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/best-practices-api-proxy-design-and-development");
    }
    if (/server\.url|server url/i.test(`${featureName} ${featureSummary}`)) urls.push("https://docs.cloud.google.com/api-gateway/docs/creating-api-config");
  }
  if (productSlug === "apigee-hybrid") {
    if (/forward proxy|allowlist/i.test(featureName)) {
      urls.push("https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/forward-proxy");
      urls.push("https://docs.cloud.google.com/apigee/docs/hybrid/v1.12/allow-gcp-urls");
    }
    if (/kvm pagination/i.test(featureName)) {
      urls.push("https://docs.cloud.google.com/apigee/docs/reference/apis/apigee/rest/v1/organizations.environments.keyvaluemaps.entries");
      urls.push("https://docs.cloud.google.com/apigee/docs/reference/apis/apigee/rest");
    }
    if (/apigee-pull-push/i.test(featureName)) urls.push("https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/apigee-pull-push");
    if (/large message payload/i.test(featureName)) urls.push("https://docs.cloud.google.com/apigee/docs/hybrid/v1.16/configure-large-payload-support");
    if (/data residency/i.test(featureName)) {
      urls.push("https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/using-data-residency-with-apigee-hybrid");
      urls.push("https://docs.cloud.google.com/apigee/docs/hybrid/supported-platforms");
    }
    if (/guardrails|backup/i.test(featureName)) {
      urls.push("https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/guardrails");
      urls.push("https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/upgrade");
    }
  }
  if (productSlug === "apigee-api-hub") {
    if (/deployment/i.test(featureName)) urls.push("https://docs.cloud.google.com/apigee/docs/apihub/manage-api-deployments");
    if (/attribute/i.test(featureName)) urls.push("https://docs.cloud.google.com/apigee/docs/apihub/manage-attributes");
    if (/dependency|supply chain/i.test(featureName)) {
      urls.push("https://docs.cloud.google.com/apigee/docs/apihub/create-dependency");
      urls.push("https://docs.cloud.google.com/apigee/docs/apihub/api-supply-chain");
    }
    if (/vpc service controls/i.test(featureName)) urls.push("https://docs.cloud.google.com/apigee/docs/apihub/vpc-service-control");
    if (/insight/i.test(featureName)) urls.push("https://docs.cloud.google.com/apigee/docs/apihub/configure-api-insights");
    if (/security score/i.test(featureName)) urls.push("https://docs.cloud.google.com/apigee/docs/apihub/view-api-security-scores");
    if (/mcp/i.test(featureName)) {
      urls.push("https://docs.cloud.google.com/apigee/docs/apihub/manage-mcp-tools");
      urls.push("https://docs.cloud.google.com/apigee/docs/apihub/register-mcp-apis");
    }
  }
  if (productSlug === "apigee-integration") {
    if (/cloud kms/i.test(featureName)) {
      urls.push("https://docs.cloud.google.com/application-integration/docs/gcp-tasks/configure-cloudkms-encrypt-task");
      urls.push("https://docs.cloud.google.com/application-integration/docs/gcp-tasks/configure-cloudkms-decrypt-task");
    }
    if (/firestore/i.test(featureName)) urls.push("https://docs.cloud.google.com/application-integration/docs/gcp-tasks/configure-firestore-batchwrite-task");
    if (/language/i.test(featureName)) urls.push("https://docs.cloud.google.com/application-integration/docs/gcp-tasks/configure-language-annotatetext-task");
    if (/sheets/i.test(featureName)) urls.push("https://docs.cloud.google.com/application-integration/docs/gcp-tasks/configure-sheets-append-task");
    if (/translate/i.test(featureName)) urls.push("https://docs.cloud.google.com/application-integration/docs/gcp-tasks/configure-translate-text-task");
    if (/workflow/i.test(featureName)) urls.push("https://docs.cloud.google.com/application-integration/docs/gcp-tasks/configure-workflowexecutions-execute-task");
    if (/vpc service controls/i.test(featureName)) urls.push("https://docs.cloud.google.com/application-integration/docs/vpc-service-controls");
    if (/data mapping/i.test(featureName)) urls.push("https://docs.cloud.google.com/application-integration/docs/data-mapping-functions-reference");
    urls.push("https://docs.cloud.google.com/application-integration/docs/all-triggers-tasks");
  }
  if (productSlug === "address-validation-api") {
    urls.push("https://developers.google.com/maps/documentation/address-validation/reference/rest/v1/TopLevel/validateAddress");
    urls.push("https://developers.google.com/maps/documentation/address-validation/build-validation-logic");
    urls.push("https://developers.google.com/maps/documentation/address-validation/understand-response");
    if (/subpremises/i.test(featureName)) urls.push("https://developers.google.com/maps/documentation/address-validation/add-subpremises-address-example");
  }
  if (productSlug === "api-gateway") {
    urls.push("https://docs.cloud.google.com/api-gateway/docs/about-api-gateway");
    urls.push("https://docs.cloud.google.com/api-gateway/docs/creating-api-config");
    urls.push("https://docs.cloud.google.com/api-gateway/docs/secure-traffic-gcloud");
    urls.push("https://docs.cloud.google.com/api-gateway/docs/reference");
  }
  if (productSlug === "access-context-manager") {
    urls.push("https://docs.cloud.google.com/access-context-manager/docs/reference/rest");
    urls.push("https://docs.cloud.google.com/access-context-manager/docs/reference/rest/Shared.Types/LaunchStage");
  }
  if (productSlug === "agent-assist") {
    urls.push("https://docs.cloud.google.com/agent-assist/docs/features");
    urls.push("https://docs.cloud.google.com/agent-assist/docs/generative-knowledge-assist");
    urls.push("https://docs.cloud.google.com/agent-assist/docs/custom-events");
    urls.push("https://docs.cloud.google.com/agent-assist/docs/adaptation-model-guide");
    urls.push("https://docs.cloud.google.com/agent-assist/docs/article-suggestion");
    urls.push("https://docs.cloud.google.com/agent-assist/docs/faq");
  }
  if (productSlug === "ai-hypercomputer") {
    urls.push("https://docs.cloud.google.com/ai-hypercomputer/docs/choose-strategy");
    urls.push("https://docs.cloud.google.com/ai-hypercomputer/docs/cluster-capabilities");
    urls.push("https://docs.cloud.google.com/ai-hypercomputer/docs/create/create-vm");
  }
  if (productSlug === "app-engine-standard-environment-go") {
    if (/delve|dev_appserver|elastic provisioning metrics/i.test(featureName)) {
      urls.push("https://docs.cloud.google.com/appengine/docs/standard/go/tools/using-local-server");
      urls.push("https://docs.cloud.google.com/appengine/docs/standard/go/release-notes");
    }
  }
  if (productSlug === "app-engine-standard-environment-java") {
    if (/dev_appserver|local development server|boot classpath|dev_appserver\.out|jdk 9 modular jar|appstats filter/i.test(featureName)) {
      urls.push("https://docs.cloud.google.com/appengine/docs/standard/java/tools/using-local-server");
      urls.push("https://docs.cloud.google.com/appengine/docs/standard/java-gen2/release-notes");
    }
  }
  if (productSlug === "spanner") {
    if (/ai\.(classify|if|score)/i.test(featureName)) {
      urls.push("https://docs.cloud.google.com/spanner/docs/reference/standard-sql/ml-functions");
      urls.push("https://docs.cloud.google.com/spanner/docs/spanner-ai-overview");
      urls.push("https://docs.cloud.google.com/spanner/docs/ml");
    }
    if (/gcp\.managed\.allowedmcpservices|mcp/i.test(featureName)) {
      urls.push("https://docs.cloud.google.com/mcp/control-mcp-use-organization");
      urls.push("https://docs.cloud.google.com/resource-manager/docs/mcp");
    }
    if (/parameter_default/i.test(featureName)) urls.push("https://docs.cloud.google.com/spanner/docs/information-schema");
    if (/farm_fingerprint|bool_array|float32_array|float64_array|int64_array|string_array|jsonb/i.test(featureName)) {
      urls.push("https://docs.cloud.google.com/spanner/docs/reference/dialect-differences");
      urls.push("https://docs.cloud.google.com/spanner/docs/information-schema-pg");
    }
  }
  if (productSlug === "cloud-asset-inventory") {
    urls.push("https://docs.cloud.google.com/asset-inventory/docs/asset-types");
    if (/searchallresources|searchalliampolicies/i.test(featureName)) {
      urls.push("https://docs.cloud.google.com/asset-inventory/docs/search-resources");
      urls.push("https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/searchAllResources");
    }
    if (/exportassets/i.test(featureName)) {
      urls.push("https://docs.cloud.google.com/asset-inventory/docs/export-cloud-storage");
      urls.push("https://docs.cloud.google.com/asset-inventory/docs/export-bigquery");
      urls.push("https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/exportAssets");
    }
  }

  if (productSlug === "cloud-sql-for-postgresql" && /\bflag\b/i.test(featureName)) {
    urls.push("https://docs.cloud.google.com/sql/docs/postgres/flags");
    if (/pg_squeeze|pg_wait_sampling|rdkit/i.test(featureName)) {
      urls.push("https://docs.cloud.google.com/sql/docs/postgres/extensions");
    }
  }

  if (productSlug === "google-kubernetes-engine") {
    if (/node_sa_missing_permissions|node service accounts|missing iam permissions/i.test(featureName)) {
      urls.push("https://docs.cloud.google.com/kubernetes-engine/docs/troubleshooting/service-accounts");
    }
    if (/vm\.max_map_count/i.test(featureName)) {
      urls.push("https://docs.cloud.google.com/kubernetes-engine/docs/reference/crds/computeclass");
      urls.push("https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/automatically-bootstrapping-gke-nodes-with-daemonsets");
    }
    if (/persistent disk csi driver|pd\.csi\.storage\.gke\.io/i.test(featureName)) {
      urls.push("https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster");
      urls.push("https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters");
    }
    if (/optimize-utilization|autoscaling profile/i.test(featureName)) {
      urls.push("https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/reducing-costs-by-scaling-down-gke-off-hours");
    }
  }

  if (productSlug === "dataproc") {
    if (/conscrypt removal|default artifact removal|dataproc\.artifacts\.remove/i.test(featureName)) {
      urls.push("https://docs.cloud.google.com/dataproc/docs/release-notes");
    }
    if (/autoscaling version selection|spark\.dataproc\.scaling\.version/i.test(featureName)) {
      urls.push("https://docs.cloud.google.com/dataproc/docs/release-notes");
      urls.push("https://docs.cloud.google.com/dataproc/docs/guides/performance-enhancements");
    }
    if (/high availability mode|agent\.ha\.enabled/i.test(featureName)) {
      urls.push("https://docs.cloud.google.com/dataproc/docs/release-notes");
      urls.push("https://docs.cloud.google.com/dataproc/docs/guides/create-cluster");
    }
    if (/auto diagnostics|spark\.dataproc\.diagnostics\.enabled/i.test(featureName)) {
      urls.push("https://docs.cloud.google.com/dataproc/docs/release-notes");
      urls.push("https://docs.cloud.google.com/dataproc/docs/guides/performance-enhancements");
    }
    if (/gcloud_dataproc_personal_cluster\.py/i.test(featureName)) {
      urls.push("https://docs.cloud.google.com/dataproc/docs/release-notes");
      urls.push("https://docs.cloud.google.com/dataproc/docs/quickstarts/update-cluster-gcloud");
    }
    if (/alpha\.state\.shuffle\.hcfs\.enabled/i.test(featureName)) {
      urls.push("https://docs.cloud.google.com/dataproc/docs/release-notes");
      urls.push("https://docs.cloud.google.com/dataproc/docs/guides/dataproc-metrics");
    }
    if (/am\.primary_only|application master primary-only placement/i.test(featureName)) {
      urls.push("https://docs.cloud.google.com/dataproc/docs/release-notes");
      urls.push("https://docs.cloud.google.com/dataproc/docs/guides/create-cluster");
    }
    if (/dataproc\.localssd\.mount\.enable/i.test(featureName)) {
      urls.push("https://docs.cloud.google.com/dataproc/docs/release-notes");
      urls.push("https://docs.cloud.google.com/dataproc/docs/guides/create-cluster");
    }
    if (/fs\.gs\.outputstream\.type|appendable output streams/i.test(featureName)) {
      urls.push("https://docs.cloud.google.com/dataproc/docs/release-notes");
      urls.push("https://docs.cloud.google.com/dataproc/docs/guides/performance-enhancements");
    }
  }

  if (productSlug === "alloydb") {
    if (/conversational analytics/i.test(featureName)) {
      urls.push("https://docs.cloud.google.com/alloydb/docs/ai/what-is-alloydb-ai");
      urls.push("https://docs.cloud.google.com/alloydb/docs/ai/data-agent-overview");
    }
    if (/ai\.hybrid_search|hybrid_search function/i.test(featureName)) {
      urls.push("https://docs.cloud.google.com/alloydb/docs/ai/run-hybrid-vector-similarity-search");
      urls.push("https://docs.cloud.google.com/alloydb/docs/reference/ai/hybrid-search-function-parameters");
    }
    if (/cache-aware query planning|alloydb\.enable_cache_aware_costing/i.test(featureName)) {
      urls.push("https://docs.cloud.google.com/alloydb/docs/reference/query-tuning-and-optimization");
    }
    if (/data residency/i.test(featureName)) {
      urls.push("https://docs.cloud.google.com/alloydb/docs/data-residency");
      urls.push("https://docs.cloud.google.com/alloydb/docs/security-privacy-compliance");
    }
    if (/vpc service controls/i.test(featureName)) {
      urls.push("https://docs.cloud.google.com/alloydb/docs/vpc-sc/configure-vpc-service-controls");
    }
  }

  if (productSlug === "dialogflow") {
    if (/draw\.io|flow export/i.test(featureName)) {
      urls.push("https://docs.cloud.google.com/dialogflow/cx/docs/concept/flow");
    }
    if (/sys\.person/i.test(featureName)) {
      urls.push("https://docs.cloud.google.com/dialogflow/cx/docs/concept/entity-system");
    }
  }

  if (productSlug === "apigee-ui") {
    if (/display name column|apps table/i.test(featureName)) {
      urls.push("https://docs.cloud.google.com/apigee/docs/api-platform/system-administration/manage-users");
      urls.push("https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/secure-calls-your-api-through-api-key-validation");
      urls.push("https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/secure-calls-your-api-through-oauth-20-client-credentials");
    }
    if (/api products table name column|api product/i.test(featureName)) {
      urls.push("https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/secure-calls-your-api-through-api-key-validation");
      urls.push("https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/secure-calls-your-api-through-oauth-20-client-credentials");
      urls.push("https://docs.cloud.google.com/apigee/docs/api-platform/local-development/vscode/tutorial-deploy-apigee");
    }
    if (/overview page|google cloud console/i.test(featureName)) {
      urls.push("https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/ui-overview");
      urls.push("https://docs.cloud.google.com/apigee/docs/api-platform/system-administration/manage-users");
    }
    if (/private connection|allowlist/i.test(featureName)) {
      urls.push("https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart");
      urls.push("https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/ui-overview");
    }
    if (/data collectors/i.test(featureName)) {
      urls.push("https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart");
      urls.push("https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/view-with-trace");
    }
    if (/legacy format/i.test(featureName)) {
      urls.push("https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/secure-calls-your-api-through-api-key-validation");
      urls.push("https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/secure-calls-your-api-through-oauth-20-client-credentials");
    }
    if (/ip range prefix/i.test(featureName)) {
      urls.push("https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart");
      urls.push("https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/ui-overview");
    }
  }

  if (productSlug === "earth-engine-code-editor") {
    for (const identifier of identifiers) {
      if (/^ui\./i.test(identifier)) {
        urls.push(`https://developers.google.com/earth-engine/apidocs/${identifier.toLowerCase().replace(/\./g, "-")}`);
      }
    }
    if (/ui\.url/i.test(featureName)) {
      urls.push("https://developers.google.com/earth-engine/guides/playground");
    }
  }

  if (productSlug === "cloud-composer") {
    if (/web server auto-scaling worker configuration|webserver\.workers/i.test(featureName)) {
      urls.push("https://docs.cloud.google.com/composer/docs/composer-2/composer-overview");
      urls.push("https://docs.cloud.google.com/composer/docs/composer-3/composer-overview");
    }
    if (/core\.store_dag_code/i.test(featureName) || /core\.store_serialized_dags/i.test(featureName)) {
      urls.push("https://docs.cloud.google.com/composer/docs/composer-1/dag-serialization");
      urls.push("https://docs.cloud.google.com/composer/docs/airflow-configurations");
    }
  }
  if (productSlug === "google-secops" || productSlug === "google-secops-siem") {
    if (/mcp use control via organization policies|gcp\.managed/i.test(featureName)) {
      urls.push("https://docs.cloud.google.com/chronicle/docs/reference/google-unified-security");
      urls.push("https://docs.cloud.google.com/chronicle/docs/secops/secops-overview");
    }
    if (/re\.capture_all|strings\.ends_with|strings\.split|window\.range|timestamp\.get_date|arrays\.length/i.test(featureName)) {
      urls.push("https://docs.cloud.google.com/chronicle/docs/detection/yara-l-2-0-syntax");
      urls.push("https://docs.cloud.google.com/chronicle/docs/reference/detection-engine-api");
      urls.push("https://docs.cloud.google.com/chronicle/docs/investigation/udm-search");
    }
    if (/idm\.is_significant|idm\.is_alert/i.test(featureName)) {
      urls.push("https://docs.cloud.google.com/chronicle/docs/detection/migrate-cbn-alerts");
      urls.push("https://docs.cloud.google.com/chronicle/docs/soar/investigate/working-with-alerts/whats-on-the-alert-overview-tab");
      urls.push("https://docs.cloud.google.com/chronicle/docs/detection/detection-delays");
    }
  }
  if (productSlug === "container-optimized-os") {
    if (/cloud-final\.service|multi-user\.target|final\.service/i.test(featureName)) {
      urls.push("https://docs.cloud.google.com/container-optimized-os/docs/how-to/create-configure-instance");
      urls.push("https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-container-instance");
    }
    if (/named service sequencing|nss-lookup\.target|lookup\.target/i.test(featureName)) {
      urls.push("https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-container-instance");
      urls.push("https://docs.cloud.google.com/container-optimized-os/docs/how-to/cis-compliance");
    }
    if (/trusted ima certificate loading|pubkey\.x509/i.test(featureName)) {
      urls.push("https://docs.cloud.google.com/container-optimized-os/docs/concepts/security");
      urls.push("https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-container-instance");
    }
    if (/resolv\.conf/i.test(featureName)) {
      urls.push("https://docs.cloud.google.com/container-optimized-os/docs/how-to/toolbox");
      urls.push("https://docs.cloud.google.com/container-optimized-os/docs/how-to/create-configure-instance");
    }
  }
  if (productSlug === "earth-engine-python-client-library") {
    if (/ee\.data/i.test(featureName)) {
      urls.push("https://developers.google.com/earth-engine/guides/data_extraction");
      urls.push("https://developers.google.com/earth-engine/Earth_Engine_REST_API_compute_image");
      urls.push("https://developers.google.com/earth-engine/Earth_Engine_REST_API_compute_table");
      urls.push("https://developers.google.com/earth-engine/guides/debugging");
    }
    if (/ee\.oauth/i.test(featureName)) {
      urls.push("https://developers.google.com/earth-engine/guides/auth");
      urls.push("https://developers.google.com/earth-engine/guides/access_control");
    }
  }
  if (productSlug === "cloud-deployment-manager") {
    urls.push("https://docs.cloud.google.com/deployment-manager/docs/configuration/supported-resource-types");
    urls.push("https://docs.cloud.google.com/deployment-manager/docs/configuration/supported-gcp-types");
    urls.push("https://docs.cloud.google.com/deployment-manager/docs/manage-cloud-resources-deployment");
    if (/projects\.locations\.jobs|cloud scheduler/i.test(featureName)) {
      urls.push("https://docs.cloud.google.com/deployment-manager/docs/configuration/supported-resource-types");
      urls.push("https://docs.cloud.google.com/deployment-manager/docs/configuration/supported-gcp-types");
    }
    if (/appengine\.v1beta4|appengine\.v1beta5/i.test(featureName)) {
      urls.push("https://docs.cloud.google.com/deployment-manager/docs/configuration/supported-resource-types");
      urls.push("https://docs.cloud.google.com/deployment-manager/docs/configuration/supported-gcp-types");
    }
    if (/cluster\.v1\.cluster|cluster\.v1beta1\.cluster|container\.v1beta1\.cluster/i.test(featureName)) {
      urls.push("https://docs.cloud.google.com/deployment-manager/docs/configuration/supported-resource-types");
      urls.push("https://docs.cloud.google.com/deployment-manager/docs/configuration/describing-listing-deleting-types");
    }
  }
  if (productSlug === "apigee-advanced-api-security") {
    urls.push("https://docs.cloud.google.com/apigee/docs/api-security");
    urls.push("https://docs.cloud.google.com/apigee/docs/api-security/security-actions");
    urls.push("https://docs.cloud.google.com/apigee/docs/api-security/security-actions-api");
    urls.push("https://docs.cloud.google.com/apigee/docs/api-security/security-scores");
    urls.push("https://docs.cloud.google.com/apigee/docs/api-security/security-scores-api");
    urls.push("https://docs.cloud.google.com/apigee/docs/api-platform/reference/manage-security-add-on");
    urls.push("https://docs.cloud.google.com/apigee/docs/api-platform/get-started/drz-concepts");
    urls.push("https://docs.cloud.google.com/apigee/docs/api-platform/system-administration/client-ip-resolution");
    urls.push("https://docs.cloud.google.com/apigee/docs/apihub/advanced-api-security-multi-gateway");
  }
  if (productSlug === "apigee-monetization") {
    urls.push("https://docs.cloud.google.com/apigee/docs/api-platform/monetization/overview");
    urls.push("https://docs.cloud.google.com/apigee/docs/api-platform/monetization/manage-rate-plans");
  }
  if (productSlug === "apigee-integrated-portal") {
    urls.push("https://docs.cloud.google.com/apigee/docs/api-platform/publish/intro-portals");
    urls.push("https://docs.cloud.google.com/apigee/docs/api-platform/publish/portal/publish-apis");
  }
  if (productSlug === "cloud-run") {
    urls.push("https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-service");
    urls.push("https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-fastapi-service");
    urls.push("https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-gradio-service");
    urls.push("https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-streamlit-service");
    urls.push("https://docs.cloud.google.com/run/docs/runtimes/java");
    urls.push("https://docs.cloud.google.com/run/docs/quickstarts/functions/deploy-functions-gcloud");
    urls.push("https://docs.cloud.google.com/run/docs/reference/cloud-run-admin-api-overview");
    urls.push("https://docs.cloud.google.com/run/docs/apis");
    if (/http\/2 support|h2c|http2/i.test(featureName)) {
      urls.push("https://docs.cloud.google.com/run/docs/configuring");
      urls.push("https://docs.cloud.google.com/run/docs/container-contract");
      urls.push("https://docs.cloud.google.com/run/docs/triggering/https-request");
    }
  }
  if (productSlug === "chat-api") {
    if (/global user-level chat event subscriptions/i.test(featureName)) {
      urls.push("https://developers.google.com/workspace/chat/api/reference/rest");
      urls.push("https://developers.google.com/workspace/chat/api/reference/rest/v1/Event");
      urls.push("https://developers.google.com/workspace/chat/api/reference/rest/v1/EventType");
    }
    if (/chat space human membership role updates/i.test(featureName)) {
      urls.push("https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.members/patch");
      urls.push("https://developers.google.com/workspace/chat/admin-overview");
    }
  }
  if (productSlug === "calendar-api") {
    if (/birthday event type/i.test(featureName)) {
      urls.push("https://developers.google.com/workspace/calendar/api/guides/event-types");
      urls.push("https://developers.google.com/workspace/calendar/api/v3/reference/events/list");
      urls.push("https://developers.google.com/workspace/calendar/api/v3/reference/events/watch");
    }
  }
  if (productSlug === "earth-engine-server") {
    if (/^ewmacd$/i.test(featureName)) {
      urls.push("https://developers.google.com/earth-engine/apidocs/ee-algorithms-temporalsegmentation-ewmacd");
    }
    if (/^vct$/i.test(featureName)) {
      urls.push("https://developers.google.com/earth-engine/apidocs/ee-algorithms-temporalsegmentation-vct");
    }
  }
  if (productSlug === "vertex-ai-search") {
    if (/conversations\.converse/i.test(featureName)) {
      urls.push("https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/rest/v1alpha/projects.locations.collections.engines.conversations/converse");
      urls.push("https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/rest/v1/projects.locations.collections.dataStores.conversations");
    }
    if (/documents\.purge|enterprise search documents purge/i.test(featureName)) {
      urls.push("https://docs.cloud.google.com/generative-ai-app-builder/docs/delete-datastores");
    }
  }
  if (productSlug === "vertex-ai-workbench") {
    if (/preinstalled libraries|allowed domains/i.test(featureName)) {
      urls.push("https://docs.cloud.google.com/vertex-ai/docs/workbench/release-notes");
      urls.push("https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/introduction");
    }
  }
  if (productSlug === "google-distributed-cloud-software-only-for-vmware") {
    if (/gkeadm credential configuration file/i.test(featureName)) {
      urls.push("https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-workstation-configuration-file");
      urls.push("https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-workstation");
    }
  }
  if (productSlug === "apigee-analytics") {
    if (/advanced api operations|aapi ops/i.test(featureName)) {
      urls.push("https://docs.cloud.google.com/apigee/docs/api-platform/analytics/advanced-api-ops");
      urls.push("https://docs.cloud.google.com/apigee/docs/api-platform/analytics/advanced-api-ops-overview");
    }
  }
  if (productSlug === "bigquery") {
    if (/^swivel$/i.test(featureName)) {
      urls.push("https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax");
    }
    if (/^lax_(?:float64|int64)$/i.test(featureName)) {
      urls.push("https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/json_functions");
    }
    if (/mcp control (?:via|with) organization polic/i.test(featureName)) {
      urls.push("https://docs.cloud.google.com/mcp/control-mcp-use-organization");
      urls.push("https://docs.cloud.google.com/bigquery/docs/use-bigquery-mcp");
    }
    if (/^dataset copy$/i.test(featureName)) {
      urls.push("https://docs.cloud.google.com/bigquery/docs/managing-datasets");
      urls.push("https://docs.cloud.google.com/bigquery/docs/dts-introduction");
      urls.push("https://docs.cloud.google.com/bigquery/docs/samples/bigquerydatatransfer-copy-dataset");
    }
  }
  if (productSlug === "buildpacks") {
    if (/go module dependency management requirement|gopath deprecated/i.test(featureName)) {
      urls.push("https://docs.cloud.google.com/docs/buildpacks/go");
      urls.push("https://docs.cloud.google.com/docs/buildpacks/osonly");
    }
  }
  if (productSlug === "apps-script") {
    if (/custom formula data validation/i.test(featureName)) {
      urls.push("https://developers.google.com/apps-script/reference/spreadsheet/data-validation-builder");
      urls.push("https://developers.google.com/apps-script/reference/spreadsheet/data-validation-criteria");
    }
  }
  if (productSlug === "compute-engine") {
    if (/mcp .*organization polic|organization polic.*mcp|gcp\.managed/i.test(featureName)) {
      urls.push("https://docs.cloud.google.com/compute/docs/use-compute-engine-mcp");
      urls.push("https://docs.cloud.google.com/compute/docs/access/organization-policies");
      urls.push("https://docs.cloud.google.com/compute/docs/reference/mcp");
      urls.push("https://docs.cloud.google.com/mcp/control-mcp-use-organization");
      urls.push("https://docs.cloud.google.com/mcp/organization-control-mcp-servers-deprecation");
      urls.push("https://docs.cloud.google.com/mcp/deprecations");
    }
    if (/any_single_zone/i.test(featureName)) {
      urls.push("https://docs.cloud.google.com/compute/docs/instance-groups/creating-groups-of-managed-instances");
      urls.push("https://docs.cloud.google.com/compute/docs/instance-groups/distributing-instances-with-regional-instance-groups");
      urls.push("https://docs.cloud.google.com/compute/docs/instance-groups/regional-migs");
    }
    if (/^n2d$/i.test(featureName)) {
      urls.push("https://docs.cloud.google.com/compute/docs/general-purpose-machines");
      urls.push("https://docs.cloud.google.com/compute/docs/machine-resource");
    }
  }
  if (productSlug === "cloud-sql-for-mysql" || productSlug === "cloud-sql-for-sql-server") {
    if (/mcp .*organization polic|organization polic.*mcp|gcp\.managed/i.test(featureName)) {
      urls.push("https://docs.cloud.google.com/mcp/control-mcp-use-organization");
      urls.push(productSlug === "cloud-sql-for-sql-server"
        ? "https://docs.cloud.google.com/sql/docs/sqlserver/use-cloudsql-mcp"
        : "https://docs.cloud.google.com/sql/docs/mysql/use-cloudsql-mcp");
    }
  }
  if (productSlug === "cloud-load-balancing") {
    if (/externalnetworkloadbalancerrule/i.test(featureName)) {
      urls.push("https://docs.cloud.google.com/load-balancing/docs/network/networklb-monitoring");
    }
    if (/client_ip_no_destination|source-ip session affinity/i.test(featureName)) {
      urls.push("https://docs.cloud.google.com/load-balancing/docs/features");
      urls.push("https://docs.cloud.google.com/load-balancing/docs/internal");
    }
  }
  if (productSlug === "confidential-space") {
    if (/confidential space image support status assertion/i.test(featureName)) {
      urls.push("https://docs.cloud.google.com/confidential-computing/confidential-space/docs/confidential-space-images");
      urls.push("https://docs.cloud.google.com/confidential-computing/confidential-space/docs/reference/attestation-assertions");
      urls.push("https://docs.cloud.google.com/confidential-computing/confidential-space/docs/create-grant-access-confidential-resources");
    }
  }
  if (productSlug === "dataflow") {
    if (/regional endpoints in montréal|northamerica-northeast1/i.test(featureName)) {
      urls.push("https://docs.cloud.google.com/dataflow/docs/concepts/regional-endpoints");
      urls.push("https://docs.cloud.google.com/dataflow/docs/resources/locations");
    }
  }
  if (productSlug === "deep-learning-vm-images") {
    if (/compute\.instances\.get/i.test(featureName)) {
      urls.push("https://docs.cloud.google.com/compute/docs/images/premium/access-rhel-knowledgebase");
    }
  }
  if (productSlug === "google-secops-siem") {
    if (/threatconnect_ioc_v3/i.test(featureName)) {
      urls.push("https://docs.cloud.google.com/chronicle/docs/ingestion/default-parsers/threatconnect-ioc-v3");
    }
    if (/entity-only rules for risk-based alerting/i.test(featureName)) {
      urls.push("https://docs.cloud.google.com/chronicle/docs/detection/risk-based-alerting");
      urls.push("https://docs.cloud.google.com/chronicle/docs/detection/default-rules");
      urls.push("https://docs.cloud.google.com/chronicle/docs/detection/curated-detections");
    }
  }
  if (productSlug === "sap-on-google-cloud") {
    if (/alias-ip vip deployment template/i.test(featureName)) {
      urls.push("https://docs.cloud.google.com/sap/docs/sap-hana-ha-config-sles");
      urls.push("https://docs.cloud.google.com/sap/docs/sap-hana-ha-dm-deployment");
      urls.push("https://docs.cloud.google.com/sap/docs/sap-hana-configure-scaleout-sles");
      urls.push("https://docs.cloud.google.com/sap/docs/ha-for-hana-scale-up-system-replication");
      urls.push("https://docs.cloud.google.com/sap/docs/ha-for-hana-scale-out-system-replication");
    }
  }
  if (productSlug === "google-workspace-admin-sdk") {
    if (/users\.list|search for users/i.test(featureName)) {
      urls.push("https://developers.google.com/workspace/admin/directory/reference/rest/v1/users/list");
      urls.push("https://developers.google.com/workspace/admin/directory/v1/guides/search-users");
    }
  }
  if (productSlug === "looker") {
    if (/formatters\.select|chart config editor/i.test(featureName)) {
      urls.push("https://docs.cloud.google.com/looker/docs/chart-config-editor");
    }
    if (/job_creation_optional|optional job creation/i.test(featureName)) {
      urls.push("https://docs.cloud.google.com/bigquery/docs/information-schema-jobs");
      urls.push("https://docs.cloud.google.com/looker/docs/studio/connect-to-google-bigquery");
      urls.push("https://docs.cloud.google.com/looker/docs/understanding-query-performance-metrics");
    }
  }
  if (productSlug === "managed-service-for-microsoft-active-directory") {
    if (/antivirus|virus|malware/i.test(featureName)) {
      urls.push("https://docs.cloud.google.com/managed-microsoft-ad/docs/hardening");
    }
  }
  if (productSlug === "maps-sdk-for-android") {
    if (/org\.apache\.http\.legacy/i.test(featureName)) {
      urls.push("https://developers.google.com/maps/documentation/android-sdk/config");
    }
  }
  if (productSlug === "resource-manager") {
    if (/mcp .*organization polic|organization polic.*mcp|gcp\.managed/i.test(featureName)) {
      urls.push("https://docs.cloud.google.com/mcp/overview");
      urls.push("https://docs.cloud.google.com/mcp/manage-mcp-servers");
      urls.push("https://docs.cloud.google.com/mcp/prevent-read-write-tool-use");
      urls.push("https://docs.cloud.google.com/mcp/control-mcp-use-organization");
      urls.push("https://docs.cloud.google.com/mcp/organization-control-mcp-servers-deprecation");
      urls.push("https://docs.cloud.google.com/mcp/deprecations");
    }
  }
  if (productSlug === "storage-transfer-service") {
    if (/vpc service controls|vpc sc/i.test(featureName)) {
      urls.push("https://docs.cloud.google.com/storage-transfer/docs/on-prem-vpc-sc");
    }
  }
  if (productSlug === "text-to-speech") {
    if (/cloud text-to-speech api|text-to-speech api/i.test(featureName)) {
      urls.push("https://docs.cloud.google.com/text-to-speech/docs/reference/rest");
      urls.push("https://docs.cloud.google.com/text-to-speech/docs/libraries");
    }
  }
  if (productSlug === "vertex-ai") {
    if (/google\.cloud\.aiplatform\.gapic|vertex ai sdk for python/i.test(featureName)) {
      urls.push("https://docs.cloud.google.com/vertex-ai/docs/python-sdk/use-vertex-ai-python-sdk-ref");
      urls.push("https://docs.cloud.google.com/vertex-ai/docs/start/install-sdk-ref");
    }
  }
  if (productSlug === "error-reporting") {
    if (/error reporting api report endpoint|report endpoint/i.test(featureName)) {
      urls.push("https://docs.cloud.google.com/error-reporting/docs/troubleshooting");
      urls.push("https://docs.cloud.google.com/error-reporting/docs/setup/compute-engine");
      urls.push("https://docs.cloud.google.com/error-reporting/docs/setup/kubernetes-engine");
      urls.push("https://docs.cloud.google.com/error-reporting/docs/setup/ec2");
    }
  }
  if (productSlug === "firestore") {
    if (/mcp .*organization polic|organization polic.*mcp|gcp\.managed/i.test(featureName)) {
      urls.push("https://docs.cloud.google.com/firestore/native/docs/use-firestore-mcp");
      urls.push("https://docs.cloud.google.com/firestore/native/docs/secure-agent-interactions-mcp");
      urls.push("https://docs.cloud.google.com/firestore/docs/reference/mcp");
      urls.push("https://docs.cloud.google.com/mcp/control-mcp-use-organization");
      urls.push("https://docs.cloud.google.com/mcp/organization-control-mcp-servers-deprecation");
      urls.push("https://docs.cloud.google.com/mcp/deprecations");
    }
  }
  if (productSlug === "google-cloud-contact-center-as-a-service") {
    if (/end_user\.phone|end user phone|apps api .*parameter/i.test(featureName)) {
      urls.push("https://docs.cloud.google.com/contact-center/ccai-platform/docs/apps-api");
      urls.push("https://docs.cloud.google.com/contact-center/ccai-platform/docs/apps-api-end-user");
      urls.push("https://docs.cloud.google.com/contact-center/ccai-platform/docs/mid-session-authentication-apps-api");
      urls.push("https://docs.cloud.google.com/contact-center/ccai-platform/docs/apps-api-call");
    }
    if (/end_user_number/i.test(featureName)) {
      urls.push("https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings");
      urls.push("https://docs.cloud.google.com/contact-center/ccai-platform/docs/apps-api-sms");
    }
  }
  if (productSlug === "google-cloud-mcp-servers") {
    if (/mcp .*organization polic|organization polic.*mcp|gcp\.managed/i.test(featureName)) {
      urls.push("https://docs.cloud.google.com/mcp/control-mcp-use-organization");
      urls.push("https://docs.cloud.google.com/mcp/control-mcp-use-iam");
      urls.push("https://docs.cloud.google.com/mcp/prevent-read-write-tool-use");
      urls.push("https://docs.cloud.google.com/mcp/organization-control-mcp-servers-deprecation");
      urls.push("https://docs.cloud.google.com/mcp/deprecations");
    }
  }
  if (productSlug === "google-cloud-vmware-engine") {
    if (/managed credentials for vcenter and nsx-t manager/i.test(featureName)) {
      urls.push("https://docs.cloud.google.com/vmware-engine/docs/vmware-platform/howto-access-management");
      urls.push("https://docs.cloud.google.com/vmware-engine/docs/private-clouds/howto-elevate-privilege");
      urls.push("https://docs.cloud.google.com/vmware-engine/docs/concepts-permission-model");
      urls.push("https://docs.cloud.google.com/vmware-engine/docs/best-practices-security");
    }
  }
  if (productSlug === "looker-studio") {
    if (/native_dimension/i.test(featureName)) {
      urls.push("https://developers.google.com/looker-studio/connector/reference");
      urls.push("https://docs.cloud.google.com/looker/docs/studio/nativedimension");
    }
  }
  if (productSlug === "app-engine-standard-environment-node-js") {
    if (/faceted search/i.test(featureName)) {
      urls.push("https://docs.cloud.google.com/appengine/docs/standard/services/search/facet-search");
    }
  }
  if (productSlug === "cloud-deploy") {
    if (/promoterelease api|releases\.rollouts\.create/i.test(featureName)) {
      urls.push("https://docs.cloud.google.com/deploy/docs/api/reference/rest/v1/projects.locations.deliveryPipelines.releases.rollouts/create");
      urls.push("https://docs.cloud.google.com/deploy/docs/deployment-strategies/manage-rollout");
      urls.push("https://docs.cloud.google.com/deploy/docs/promote-release");
    }
  }
  if (productSlug === "sensitive-data-protection") {
    urls.push("https://docs.cloud.google.com/sensitive-data-protection/docs/infotypes-reference");
    urls.push("https://docs.cloud.google.com/sensitive-data-protection/docs/deidentify-sensitive-data");
    urls.push("https://docs.cloud.google.com/sensitive-data-protection/docs/redacting-sensitive-data-images");
    urls.push("https://docs.cloud.google.com/sensitive-data-protection/docs/inspecting-storage");
    urls.push("https://docs.cloud.google.com/sensitive-data-protection/docs/inspecting-text");
    urls.push("https://docs.cloud.google.com/sensitive-data-protection/docs/creating-job-triggers");
    urls.push("https://docs.cloud.google.com/sensitive-data-protection/docs/reference/rest/v2/InspectConfig");
    urls.push("https://docs.cloud.google.com/sensitive-data-protection/docs/reference/rest/v2/InspectJobConfig");
    urls.push("https://docs.cloud.google.com/sensitive-data-protection/docs/reference/rest/v2/ImageRedactionConfig");
    urls.push("https://docs.cloud.google.com/sensitive-data-protection/docs/libraries");
  }
  if (productSlug === "security-command-center" && /^(?:YL2_)?GKE_/i.test(featureName)) {
    const slug = slugify(featureName);
    if (slug) {
      urls.push(`https://docs.cloud.google.com/security-command-center/docs/findings/threats/${slug}`);
    }
    urls.push("https://docs.cloud.google.com/security-command-center/docs/gke-threats");
    urls.push("https://docs.cloud.google.com/security-command-center/docs/threat-findings-index");
  }
  if (productSlug === "security-command-center") {
    if (/^YL2_GKE_SUSPICIOUS_CRYPTOMINING_POD$/i.test(featureName)) {
      urls.push("https://docs.cloud.google.com/security-command-center/docs/findings/threats/gke-suspicious-cryptomining-pod");
    }
    if (/^YL2_GKE_SERVICE_ACCOUNT_CREATION_SENSITIVE_NAMESPACE$/i.test(featureName)) {
      urls.push("https://docs.cloud.google.com/security-command-center/docs/findings/threats/yl2-gke-service-account-creation-sensitive-namespace");
    }
    if (/^Finding\.indicator\.uris attribute$/i.test(featureName)) {
      urls.push("https://docs.cloud.google.com/php/docs/reference/cloud-security-center/latest/V1.Indicator");
    }
    if (/^CONTAINER_IMAGE_VULNERABILITY detector$/i.test(featureName)) {
      urls.push("https://docs.cloud.google.com/security-command-center/docs/assess-software-vulnerabilities-overview");
    }
    if (/^OPEN_GROUP_IAM_MEMBER detector$/i.test(featureName)
      || /^Security Health Analytics .* detector$/i.test(featureName)) {
      urls.push("https://docs.cloud.google.com/security-command-center/docs/how-to-remediate-security-health-analytics-findings");
      urls.push("https://docs.cloud.google.com/security-command-center/docs/ciem-identity-access-findings");
      urls.push("https://docs.cloud.google.com/security-command-center/docs/compliance-manager-manage-cloud-controls");
    }
    if (/^Web Security Scanner .* finding type$/i.test(featureName)
      || /^(CLICKJACKING_PROTECTION_MISSING|COOP_MISSING|CSP_MISCONFIGURATION|CSP_MISSING) detector$/i.test(featureName)
      || /^SERVER_SIDE_REQUEST_FORGERY finding type$/i.test(featureName)) {
      urls.push("https://docs.cloud.google.com/security-command-center/docs/how-to-remediate-web-security-scanner-findings");
    }
  }
  if (productSlug === "google-secops" || productSlug === "google-secops-siem") {
    if (/re\.capture_all/i.test(featureName)) {
      urls.push("https://docs.cloud.google.com/chronicle/docs/yara-l/functions");
    }
    if (/strings\.ends_with/i.test(featureName)) {
      urls.push("https://docs.cloud.google.com/chronicle/docs/yara-l/functions");
    }
    if (/strings\.split/i.test(featureName)) {
      urls.push("https://docs.cloud.google.com/chronicle/docs/yara-l/functions");
    }
    if (/window\.range/i.test(featureName)) {
      urls.push("https://docs.cloud.google.com/chronicle/docs/yara-l/functions");
    }
    if (/timestamp\.get_date/i.test(featureName)) {
      urls.push("https://docs.cloud.google.com/chronicle/docs/yara-l/functions");
    }
    if (/arrays\.length/i.test(featureName)) {
      urls.push("https://docs.cloud.google.com/chronicle/docs/yara-l/functions");
    }
    if (/idm\.is_significant|idm\.is_alert/i.test(featureName)) {
      urls.push("https://docs.cloud.google.com/chronicle/docs/deprecations");
    }
    if (/mcp use control via organization policies/i.test(featureName)) {
      urls.push("https://docs.cloud.google.com/chronicle/docs/secops/use-google-secops-mcp");
      urls.push("https://docs.cloud.google.com/chronicle/docs/reference/mcp");
    }
  }

  return [...new Set(urls.map((url) => normalizeUrl(url)).filter(Boolean))];
}

async function recoverFeatureSpecificPages(productSlug, selectedSources, feature, keywordEntry, featureRecoveryCache) {
  const pages = [];
  const seenUrls = new Set();
  const allowReleaseNotes = shouldAllowReleaseNotesRecovery(productSlug);

  for (const url of directFeatureRecoveryUrls(productSlug, feature)) {
    if (!url || seenUrls.has(url) || !isOfficialGoogleUrl(url) || (isReleaseNotesUrl(url) && !allowReleaseNotes)) {
      continue;
    }
    seenUrls.add(url);
    const fetched = await fetchSelectedSourcePage(productSlug, { source_id: "feature-recovery-direct", url }, { allowReleaseNotes });
    if (fetched) {
      pages.push(fetched);
    }
    if (pages.length >= 3) {
      return pages;
    }
  }

  for (const query of featureRecoveryQueries(productSlug, selectedSources, feature, keywordEntry)) {
    const payload = await runBxSearch(query, featureRecoveryCache);
    const results = payload?.web?.results || [];
    for (const result of results) {
      const url = normalizeUrl(result?.url);
      if (!url || seenUrls.has(url) || !isOfficialGoogleUrl(url) || (isReleaseNotesUrl(url) && !allowReleaseNotes)) {
        continue;
      }
      seenUrls.add(url);
      const fetched = await fetchSelectedSourcePage(productSlug, { source_id: "feature-recovery", url }, { allowReleaseNotes });
      if (fetched) {
        pages.push(fetched);
      }
      if (pages.length >= 3) {
        return pages;
      }
    }
  }

  return pages;
}

function pageContainsExactIdentifier(page, identifiers) {
  const matchedPhraseText = (Array.isArray(page?.matched_phrases) ? page.matched_phrases : [])
    .map((entry) => String(entry?.phrase || "").trim())
    .filter(Boolean)
    .join("\n");
  return identifiers.some((identifier) => {
    const variants = new Set([
      compactIdentifierText(identifier),
      compactIdentifierText(String(identifier || "").replace(/_/g, " ")),
      compactIdentifierText(String(identifier || "").replace(/[._/-]+/g, " ")),
      compactIdentifierText(String(identifier || "").replace(/[._/-]+/g, "")),
    ].filter(Boolean));
    return [...variants].some((compact) => compact && (
      compactIdentifierText(page?.url || "").includes(compact)
      || compactIdentifierText(page?.title || "").includes(compact)
      || compactIdentifierText(page?.body || "").includes(compact)
      || compactIdentifierText(arrayOfStrings(page?.evidence_snippets).join("\n")).includes(compact)
      || compactIdentifierText(matchedPhraseText).includes(compact)
    ));
  });
}

function selectFinalSourceLinks(productName, feature, supportingPages, definitionSourceLinks) {
  const preferredUrls = new Set(arrayOfStrings(definitionSourceLinks).map((url) => normalizeUrl(url)).filter(Boolean));
  const exactIdentifiers = featureExactIdentifiers(productName, feature);
  const productTokenSet = new Set(tokenize(productName));
  const informative = descriptiveFeatureTokens(feature)
    .filter((token) => !productTokenSet.has(token))
    .filter((token) => !weakKeywordTokens.has(token));

  const rankedPages = supportingPages
    .map((page) => {
      const text = normalizeText([page.title, page.url, ...arrayOfStrings(page.evidence_snippets)].join(" "));
      const exactIdentifierHit = exactIdentifiers.length > 0 && pageContainsExactIdentifier(page, exactIdentifiers);
      const fullPhraseHit = pageSupportsFullFeaturePhrase(page, feature, productName);
      const highSignalTokenHit = pageHasHighSignalTokenEvidence(feature, page);
      const aliasHit = pageSupportsFeatureAlias(productName, feature, page);
      const productSpecificDedicatedHit = hasProductSpecificDedicatedEvidence(productName, feature, page);
      const tokenHits = informative.filter((token) => text.includes(token)).length;
      const normalizedUrl = normalizeUrl(page.url);
      return {
        url: normalizedUrl,
        score: (page.final_score || page.base_score || 0)
          + (preferredUrls.has(normalizedUrl) ? 15 : 0)
          + (exactIdentifierHit ? 80 : 0)
          + (productSpecificDedicatedHit ? 60 : 0)
          + (fullPhraseHit ? 28 : 0)
          + (aliasHit ? 24 : 0)
          + (highSignalTokenHit ? 18 : 0)
          + Math.min(tokenHits, 6) * 3
          - (isBroadCatalogSupportPage(page.url) ? 40 : 0)
          - (!isIamOrAuthFeature(feature) && isGenericIamSupportPage(page.url) ? 90 : 0)
          - (exactIdentifiers.length > 0 && !exactIdentifierHit ? 20 : 0),
      };
    })
    .filter((page) => page.url)
    .sort((a, b) => b.score - a.score || a.url.localeCompare(b.url));

  const exactOnly = rankedPages.filter((page) => {
    const sourcePage = supportingPages.find((candidate) => normalizeUrl(candidate.url) === page.url);
    if (!sourcePage) {
      return false;
    }

    const exactOrDedicated = pageContainsExactIdentifier(sourcePage, exactIdentifiers)
      || hasProductSpecificDedicatedEvidence(productName, feature, sourcePage)
      || pageSupportsFullFeaturePhrase(sourcePage, feature, productName);

    if (exactIdentifiers.length > 0) {
      return exactOrDedicated;
    }

    if (preferredUrls.has(page.url)) {
      return true;
    }

    return exactOrDedicated;
  });

  if (exactOnly.length > 0) {
    return [...new Set(exactOnly.slice(0, 4).map((page) => page.url))];
  }

  const selected = [];
  for (const page of rankedPages) {
    if (!selected.includes(page.url)) {
      selected.push(page.url);
    }
    if (selected.length >= 4) {
      break;
    }
  }

  if (selected.length === 0) {
    return supportingPages.map((page) => page.url).filter(Boolean).slice(0, 4);
  }

  return selected;
}

function dedupeCandidatesByNormalizedUrl(candidates, scoreField) {
  const bestByUrl = new Map();
  for (const candidate of candidates || []) {
    const normalizedUrl = normalizeUrl(candidate?.url || "");
    if (!normalizedUrl) {
      continue;
    }
    const current = bestByUrl.get(normalizedUrl);
    const candidateScore = Number(candidate?.[scoreField] || 0);
    const currentScore = Number(current?.[scoreField] || 0);
    if (!current || candidateScore > currentScore) {
      bestByUrl.set(normalizedUrl, candidate);
    }
  }
  return [...bestByUrl.values()];
}

async function loadCorpusPages(productSlug) {
  const siteRoot = path.join(inputStep04Root, "products", productSlug, "corpus", "site");
  const sourceDirs = (await readdir(siteRoot, { withFileTypes: true }).catch(() => []))
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort();

  const pages = [];
  for (const sourceId of sourceDirs) {
    const pagesJsonPath = path.join(siteRoot, sourceId, "pages.json");
    const listedPages = await readJson(pagesJsonPath, []);
    for (const item of listedPages) {
      const relativeMarkdownPath = String(item?.path || "");
      if (!relativeMarkdownPath) {
        continue;
      }

      const markdownPath = path.join(siteRoot, sourceId, relativeMarkdownPath);
      if (!(await exists(markdownPath))) {
        continue;
      }

      const rawMarkdown = await readFile(markdownPath, "utf8");
      const { frontmatter, body } = parseFrontmatter(rawMarkdown);
      const pageUrl = String(frontmatter.url || item.url || "").trim();
      const pageTitle = normalizeWhitespace(String(frontmatter.title || item.title || ""));
      const cleanBody = stripMarkdown(body);
      const normalizedBody = normalizeText(cleanBody);
      const normalizedTitle = normalizeText(pageTitle);
      const normalizedUrl = normalizeText(pageUrl);

      pages.push({
        page_id: hashValue(`${sourceId}:${pageUrl}:${relativeMarkdownPath}`),
        source_id: sourceId,
        relative_markdown_path: path.join("products", productSlug, "corpus", "site", sourceId, relativeMarkdownPath).replace(/\\/g, "/"),
        markdown_path: markdownPath,
        url: pageUrl,
        title: pageTitle,
        body: cleanBody,
        normalized_body: normalizedBody,
        normalized_title: normalizedTitle,
        normalized_url: normalizedUrl,
      });
    }
  }

  const preferredPagesByUrl = new Map();
  for (const page of pages) {
    const current = preferredPagesByUrl.get(page.url);
    if (!current) {
      preferredPagesByUrl.set(page.url, page);
      continue;
    }

    const currentPreference = sourcePreferenceScore(current.source_id);
    const nextPreference = sourcePreferenceScore(page.source_id);
    if (nextPreference > currentPreference || (nextPreference === currentPreference && page.body.length > current.body.length)) {
      preferredPagesByUrl.set(page.url, page);
    }
  }

  const selectedSources = await loadSelectedSources(productSlug);
  const existingByUrl = new Map([...preferredPagesByUrl.values()].map((page) => [normalizeUrl(page.url), page]));
  const refreshCandidates = selectedSources
    .filter((source) => isOfficialGoogleUrl(source?.url))
    .filter((source) => {
      const existing = existingByUrl.get(normalizeUrl(source.url));
      return !existing || pageNeedsRefresh(existing);
    });

  for (const selectedSource of refreshCandidates) {
    const fetchedPage = await fetchSelectedSourcePage(productSlug, selectedSource);
    if (!fetchedPage) {
      continue;
    }
    preferredPagesByUrl.set(normalizeUrl(fetchedPage.url), fetchedPage);
  }

  return [...preferredPagesByUrl.values()];
}

function sourcePreferenceScore(sourceId) {
  if (sourceId === "site-docs") {
    return 4;
  }
  if (sourceId === "site-reference") {
    return 3;
  }
  if (sourceId === "site-access-control") {
    return 2;
  }
  return 1;
}

function featureText(feature) {
  return normalizeText(`${feature.feature_name} ${feature.feature_summary}`);
}

function buildPhraseDocumentFrequency(features) {
  const frequencies = new Map();

  for (const feature of features) {
    const text = featureText(feature);
    const tokens = new Set(tokenize(text));
    for (const token of tokens) {
      frequencies.set(token, (frequencies.get(token) || 0) + 1);
    }
  }

  return frequencies;
}

function keywordCacheKey(productName, feature) {
  return hashValue(JSON.stringify({
    prompt_version: keywordPromptVersion,
    product_name: productName,
    feature_name: feature.feature_name,
    feature_summary: feature.feature_summary,
  }));
}

function rerankCacheKey(productName, page, featureSet) {
  return hashValue(JSON.stringify({
    prompt_version: rerankPromptVersion,
    product_name: productName,
    page_url: page.url,
    page_title: page.title,
    feature_names: featureSet.map((feature) => feature.feature_name),
  }));
}

function definitionCacheKey(productName, feature, supportingPages) {
  return hashValue(JSON.stringify({
    prompt_version: definitionPromptVersion,
    product_name: productName,
    feature_name: feature.feature_name,
    feature_summary: feature.feature_summary,
    page_urls: supportingPages.map((page) => page.url),
  }));
}

function chunk(items, size) {
  const chunks = [];
  for (let index = 0; index < items.length; index += size) {
    chunks.push(items.slice(index, index + size));
  }
  return chunks;
}

async function runPi(prompt, systemPrompt) {
  const promptFile = path.join(stateRoot, `pi-${hashValue(prompt)}.txt`);
  await writeFile(promptFile, prompt, "utf8");

  const script = [
    "$ProgressPreference = 'SilentlyContinue'",
    `Get-Content "${promptFile.replace(/\\/g, "\\\\")}" -Raw | pi -p --no-session --model "${piModel}" --system-prompt @'`,
    systemPrompt,
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
      resolve(stdout.trim());
    });
  }).finally(async () => {
    await rm(promptFile, { force: true });
  });

  return JSON.parse(result);
}

function fallbackKeywords(feature) {
  const baseTokens = [...new Set(tokenize(`${feature.feature_name} ${feature.feature_summary}`))]
    .filter((token) => !weakKeywordTokens.has(token))
    .slice(0, 8);

  return {
    feature_name: feature.feature_name,
    keyword_phrases: baseTokens,
    alias_phrases: [],
    generic_terms_to_avoid: [],
  };
}

function arrayOfStrings(value) {
  if (!Array.isArray(value)) {
    return [];
  }
  return value
    .map((entry) => String(entry || "").trim())
    .filter(Boolean);
}

function isWeakKeywordPhrase(phrase, productTokenSet = new Set()) {
  const normalized = normalizeText(phrase);
  if (!normalized) {
    return true;
  }

  const tokens = tokenize(normalized);
  if (tokens.length === 0) {
    return true;
  }

  const informativeTokens = tokens.filter((token) => !weakKeywordTokens.has(token) && !productTokenSet.has(token));
  if (informativeTokens.length === 0) {
    return true;
  }

  if (informativeTokens.length === 1 && informativeTokens[0].length < 4 && !looksLikeExactIdentifier(phrase)) {
    return true;
  }

  return false;
}

function phraseSpecificityScore(phrase, phraseDocumentFrequency) {
  const tokens = [...new Set(tokenize(phrase))];
  if (tokens.length === 0) {
    return 0;
  }

  return tokens.reduce((sum, token) => {
    const frequency = phraseDocumentFrequency.get(token) || 1;
    return sum + (1 / frequency);
  }, 0) + (phrase.length / 40);
}

async function ensureKeywords(productName, features, keywordCache, phraseDocumentFrequency) {
  const uncached = features.filter((feature) => {
    const entry = keywordCache[keywordCacheKey(productName, feature)];
    return !entry || entry.prompt_version !== keywordPromptVersion;
  });
  const productTokenSet = new Set(tokenize(productName));

  if (disablePi) {
    for (const feature of uncached) {
      keywordCache[keywordCacheKey(productName, feature)] = {
        prompt_version: keywordPromptVersion,
        feature_name: feature.feature_name,
        keyword_phrases: fallbackKeywords(feature).keyword_phrases,
        generic_terms_to_avoid: [],
      };
    }
    if (uncached.length > 0) {
      await writeJsonQueued(keywordCacheFile, keywordCache);
    }
    return;
  }

  for (const batch of chunk(uncached, keywordBatchSize)) {
    const prompt = JSON.stringify({
      product_name: productName,
      features: batch.map((feature) => ({
        feature_name: feature.feature_name,
        feature_summary: feature.feature_summary,
      })),
    }, null, 2);

    let response;
    try {
      response = await runPi(prompt, keywordSystemPrompt);
    } catch {
      response = batch.map((feature) => fallbackKeywords(feature));
    }

    const byName = new Map((Array.isArray(response) ? response : []).map((item) => [String(item?.feature_name || "").trim(), item]));
    for (const feature of batch) {
      const key = keywordCacheKey(productName, feature);
      const item = byName.get(feature.feature_name) || fallbackKeywords(feature);
      const phrases = [
        ...arrayOfStrings(item.keyword_phrases),
        ...arrayOfStrings(item.alias_phrases),
      ];

      const uniquePhrases = [...new Set(phrases
        .map((phrase) => normalizeWhitespace(phrase))
        .filter(Boolean)
        .filter((phrase) => normalizeText(phrase) !== "bigquery")
      )];

      const filteredPhrases = uniquePhrases
        .map((phrase) => ({
          phrase,
          normalized: normalizeText(phrase),
          specificity: phraseSpecificityScore(phrase, phraseDocumentFrequency),
        }))
        .filter((entry) => entry.normalized.length >= 2)
        .filter((entry) => !isWeakKeywordPhrase(entry.phrase, productTokenSet))
        .sort((a, b) => b.specificity - a.specificity || b.phrase.length - a.phrase.length)
        .slice(0, 8);

      keywordCache[key] = {
        prompt_version: keywordPromptVersion,
        feature_name: feature.feature_name,
        keyword_phrases: filteredPhrases.map((entry) => entry.phrase),
        generic_terms_to_avoid: arrayOfStrings(item.generic_terms_to_avoid).map((phrase) => normalizeWhitespace(phrase)),
      };
    }

    await writeJsonQueued(keywordCacheFile, keywordCache);
  }
}

function countOccurrences(haystack, needle) {
  if (!haystack || !needle) {
    return 0;
  }

  let count = 0;
  let index = 0;
  while (index >= 0) {
    index = haystack.indexOf(needle, index);
    if (index < 0) {
      break;
    }
    count += 1;
    index += needle.length;
  }

  return count;
}

function scorePageForFeature(productName, feature, keywordEntry, page) {
  if (isReleaseNotesUrl(page.url)) {
    return {
      page_id: page.page_id,
      url: page.url,
      title: page.title,
      source_id: page.source_id,
      markdown_path: page.markdown_path,
      relative_markdown_path: page.relative_markdown_path,
      base_score: 0,
      matched_phrases: [],
    };
  }

  const normalizedFeatureName = normalizeText(feature.feature_name);
  const normalizedProductName = normalizeText(productName);
  const normalizedSummary = normalizeText(feature.feature_summary);
  const compactTitle = compactIdentifierText(page.title);
  const compactUrl = compactIdentifierText(page.url);
  const compactBody = compactIdentifierText(page.body);
  const productTokens = new Set(tokenize(normalizedProductName));
  const featureTokens = [...new Set(tokenize(normalizedFeatureName))]
    .filter((token) => token.length >= 3)
    .filter((token) => !productTokens.has(token))
    .filter((token) => ![
      "google",
      "cloud",
      "bigquery",
      "feature",
      "supports",
      "support",
      "available",
      "preview",
      "general",
      "availability",
    ].includes(token));
  const featureSpecificName = normalizeWhitespace(
    normalizedFeatureName.startsWith(`${normalizedProductName} `)
      ? normalizedFeatureName.slice(normalizedProductName.length + 1)
      : normalizedFeatureName
  );
  const descriptiveTokens = [...new Set(tokenize(`${normalizedFeatureName} ${normalizedSummary}`))]
    .filter((token) => token.length >= 3)
    .filter((token) => !productTokens.has(token))
    .filter((token) => ![
      "google",
      "cloud",
      "bigquery",
      "feature",
      "supports",
      "support",
      "available",
      "preview",
      "general",
      "availability",
      "deprecated",
      "environment",
      "service",
      "services",
      "version",
      "runtime",
      "using",
      "added",
      "enables",
      "enable",
      "added",
      "new",
    ].includes(token));
  const phrases = [
    ...featureExactIdentifiers(productName, feature),
    normalizedFeatureName,
    featureSpecificName,
    ...featureEvidenceAliases(productName, feature),
    ...arrayOfStrings(keywordEntry?.keyword_phrases).map((phrase) => normalizeText(phrase)),
  ]
    .filter(Boolean)
    .filter((phrase) => !isWeakKeywordPhrase(phrase, productTokens))
    .filter((phrase) => {
      const phraseTokens = tokenize(phrase);
      if (phrase === normalizedProductName) {
        return false;
      }
      if (phraseTokens.length > 0 && phraseTokens.every((token) => productTokens.has(token) || ["google", "cloud", "bigquery"].includes(token))) {
        return false;
      }
      return true;
    });
  const exactIdentifiers = [...new Set([
    ...featureExactIdentifiers(productName, feature),
    ...featureEvidenceAliases(productName, feature).filter(looksLikeExactIdentifier),
  ])];

  const tokenTitleHits = descriptiveTokens.filter((token) => page.normalized_title.includes(token));
  const tokenUrlHits = descriptiveTokens.filter((token) => page.normalized_url.includes(token));
  const tokenBodyHits = descriptiveTokens.filter((token) => page.normalized_body.includes(token));

  let score = 0;
  let matchedPhrases = [];
  let exactIdentifierMatched = false;
  let runtimeConflict = false;
  const pageIsBroadGuide = page.normalized_title.includes("overview")
    || page.normalized_title.includes("how to")
    || page.normalized_title.includes("guide")
    || page.normalized_url.includes("/docs/");
  const pageIsBroadSupportCatalog = isBroadCatalogSupportPage(page.url);
  const pageIsGenericIamSupport = isGenericIamSupportPage(page.url);
  const featureIsIamOrAuth = isIamOrAuthFeature(feature);
  const productSpecificDedicatedHit = hasProductSpecificDedicatedEvidence(productName, feature, page);

  for (const phrase of [...new Set(phrases)]) {
    let titleHits = countOccurrences(page.normalized_title, phrase);
    let urlHits = countOccurrences(page.normalized_url, phrase);
    let bodyHits = countOccurrences(page.normalized_body, phrase);
    const phraseTokenCount = tokenize(phrase).length;
    if (looksLikeExactIdentifier(phrase)) {
      const compactPhrase = compactIdentifierText(phrase);
      titleHits = Math.max(titleHits, countOccurrences(compactTitle, compactPhrase));
      urlHits = Math.max(urlHits, countOccurrences(compactUrl, compactPhrase));
      bodyHits = Math.max(bodyHits, countOccurrences(compactBody, compactPhrase));
    }
    const exactIdentifierBonus = looksLikeExactIdentifier(phrase)
      ? (Math.min(titleHits, 3) * 24) + (Math.min(urlHits, 3) * 20) + (Math.min(bodyHits, 12) * 10)
      : 0;
    const exactPhraseBonus = bodyHits > 0 && phrase === normalizedFeatureName
      ? Math.max(16, phraseTokenCount * 4)
      : 0;
    const broadGuideBonus = bodyHits > 0 && pageIsBroadGuide
      ? Math.max(4, Math.min(16, phraseTokenCount * 2))
      : 0;
    const phraseScore = (titleHits * 14)
      + (urlHits * 10)
      + Math.min(5, bodyHits) * 4
      + exactIdentifierBonus
      + exactPhraseBonus
      + broadGuideBonus;

    if (phraseScore > 0) {
      if (looksLikeExactIdentifier(phrase) && (titleHits > 0 || urlHits > 0 || bodyHits > 0)) {
        exactIdentifierMatched = true;
      }
      score += phraseScore;
      matchedPhrases.push({
        phrase,
        title_hits: titleHits,
        url_hits: urlHits,
        body_hits: bodyHits,
      });
    }
  }

  if (pageIsBroadSupportCatalog) {
    const exactNameMentioned = normalizedFeatureName && page.normalized_body.includes(normalizedFeatureName);
    const nameInTitleOrUrl = normalizedFeatureName && (page.normalized_title.includes(normalizedFeatureName) || page.normalized_url.includes(normalizedFeatureName));
    if (!nameInTitleOrUrl) {
      score = Math.min(score, exactNameMentioned ? 18 : 14);
    }
  }

  if (pageIsGenericIamSupport && !featureIsIamOrAuth) {
    score = Math.min(score, 24);
  }

  if (productSpecificDedicatedHit) {
    score += 90;
  }

  if (exactIdentifiers.length > 0 && !exactIdentifierMatched && !(isHistoricalDeprecatedFieldFeature(productName, feature) && productSpecificDedicatedHit)) {
    score = Math.min(score, 60);
  }

  if (isExplicitSupportMatrixFeature(productName, feature)) {
    const targetName = normalizeText(supportMatrixTargetName(productName, feature));
    const targetMentioned = targetName && page.normalized_body.includes(targetName);
    if (pageIsBroadSupportCatalog && targetMentioned) {
      score += 40;
    } else if (!pageIsBroadSupportCatalog) {
      score = Math.min(score, targetMentioned ? 22 : 10);
    }
  }

  if (normalizedProductName.includes("app engine")) {
    const preferredRuntime = preferredRuntimeMarker(productName);
    if (preferredRuntime) {
      const runtimeFamilies = ["python", "java", "go", "node", "php", "ruby"];
      const conflictingRuntime = runtimeFamilies
        .filter((runtime) => runtime !== preferredRuntime)
        .find((runtime) => hasRuntimeMarker(page.url, runtime) || hasRuntimeMarker(page.title, runtime));
      if (conflictingRuntime) {
        runtimeConflict = true;
      }
    }
  }

  const nonGenericMatches = matchedPhrases.filter((match) => {
    const tokens = tokenize(match.phrase);
    return tokens.some((token) => !productTokens.has(token) && !weakKeywordTokens.has(token));
  });
  if (matchedPhrases.length > 0 && nonGenericMatches.length === 0 && tokenTitleHits.length === 0 && tokenUrlHits.length === 0 && tokenBodyHits.length === 0) {
    return {
      page_id: page.page_id,
      url: page.url,
      title: page.title,
      source_id: page.source_id,
      markdown_path: page.markdown_path,
      relative_markdown_path: page.relative_markdown_path,
      base_score: 0,
      matched_phrases: [],
    };
  }

  if (matchedPhrases.length === 0) {
    if (runtimeConflict) {
      return {
        page_id: page.page_id,
        url: page.url,
        title: page.title,
        source_id: page.source_id,
        markdown_path: page.markdown_path,
        relative_markdown_path: page.relative_markdown_path,
        base_score: 0,
        matched_phrases: [],
      };
    }

    const lexicalOverlapScore = (tokenTitleHits.length * 10) + (tokenUrlHits.length * 8) + Math.min(tokenBodyHits.length, 8) * 4;
    const bodyCoverage = descriptiveTokens.length > 0 ? tokenBodyHits.length / descriptiveTokens.length : 0;
    const shouldKeepByTokens = tokenTitleHits.length >= 1
      || tokenUrlHits.length >= 1
      || tokenBodyHits.length >= 3
      || bodyCoverage >= 0.45;

    if (!shouldKeepByTokens) {
      return {
        page_id: page.page_id,
        url: page.url,
        title: page.title,
        source_id: page.source_id,
        markdown_path: page.markdown_path,
        relative_markdown_path: page.relative_markdown_path,
        base_score: 0,
        matched_phrases: [],
      };
    }

    return {
      page_id: page.page_id,
      url: page.url,
      title: page.title,
      source_id: page.source_id,
      markdown_path: page.markdown_path,
      relative_markdown_path: page.relative_markdown_path,
      base_score: lexicalOverlapScore + (pageIsBroadGuide ? 8 : 0),
      matched_phrases: [
        {
          phrase: tokenTitleHits[0] || tokenUrlHits[0] || tokenBodyHits[0] || normalizedFeatureName,
          title_hits: tokenTitleHits.length,
          url_hits: tokenUrlHits.length,
          body_hits: tokenBodyHits.length,
        },
      ],
    };
  }

  const summaryTokens = tokenize(normalizedSummary).filter((token) => !["bigquery", "google", "cloud"].includes(token));
  const titleTokenHits = summaryTokens.filter((token) => page.normalized_title.includes(token)).length;
  const bodyTokenHits = summaryTokens.filter((token) => page.normalized_body.includes(token)).length;
  const featureTitleTokenHits = featureTokens.filter((token) => page.normalized_title.includes(token)).length;
  const featureBodyTokenHits = featureTokens.filter((token) => page.normalized_body.includes(token)).length;
  score += Math.min(titleTokenHits, 3) * 2;
  score += Math.min(bodyTokenHits, 4);
  score += Math.min(featureTitleTokenHits, 4) * 2;
  score += Math.min(featureBodyTokenHits, 8);

  if (featureTokens.length >= 3) {
    const overlappingFeatureTokens = featureTokens.filter((token) => page.normalized_body.includes(token)).length;
    const featureCoverage = overlappingFeatureTokens / featureTokens.length;
    if (featureCoverage >= 0.8) {
      score += 10;
    } else if (featureCoverage >= 0.6) {
      score += 6;
    }
  }

  if (page.normalized_title.includes("overview") || page.normalized_title.includes("introduction")) {
    score += 2;
  }

  if (runtimeConflict) {
    score = 0;
  }

  return {
    page_id: page.page_id,
    url: page.url,
    title: page.title,
    source_id: page.source_id,
    markdown_path: page.markdown_path,
    relative_markdown_path: page.relative_markdown_path,
    base_score: score,
    matched_phrases: matchedPhrases
      .sort((a, b) => (b.title_hits + b.url_hits + b.body_hits) - (a.title_hits + a.url_hits + a.body_hits))
      .slice(0, 6),
  };
}

function extractEvidenceSnippets(page, keywordEntry, feature, productName = "") {
  const phrases = arrayOfStrings(keywordEntry?.keyword_phrases)
    .map((phrase) => normalizeText(phrase))
    .filter(Boolean);
  const usefulPhrases = phrases.filter((phrase) => !isWeakKeywordPhrase(phrase));
  const exactIdentifiers = featureExactIdentifiers(productName, feature);
  const aliasPhrases = featureEvidenceAliases(productName, feature);

  const sentences = splitIntoSentences(page.body);
  const matches = [];

  for (const sentence of sentences) {
    const normalizedSentence = normalizeText(sentence);
    const hitCount = usefulPhrases.filter((phrase) => normalizedSentence.includes(phrase)).length;
    const exactIdentifierHits = exactIdentifiers.filter((identifier) => compactIdentifierText(sentence).includes(compactIdentifierText(identifier))).length;
    const aliasHits = aliasPhrases.filter((alias) => normalizeText(sentence).includes(alias)).length;
    const score = hitCount + (exactIdentifierHits * 6) + (aliasHits * 3);
    if (score > 0) {
      matches.push({ sentence, hitCount: score });
    }
  }

  return matches
    .sort((a, b) => b.hitCount - a.hitCount || b.sentence.length - a.sentence.length)
    .slice(0, 4)
    .map((match) => match.sentence);
}

async function rerankPageCompetition(productName, page, featureSet, rerankCache) {
  if (disablePi) {
    return featureSet.map((feature) => ({
      feature_name: feature.feature_name,
      relevance: "MODERATE",
      rationale: "Fast mode kept the lexical match without page-level LLM reranking.",
    }));
  }

  const cacheKey = rerankCacheKey(productName, page, featureSet);
  if (rerankCache[cacheKey]) {
    return rerankCache[cacheKey];
  }

  const prompt = JSON.stringify({
    product_name: productName,
    page: {
      title: page.title,
      url: page.url,
      excerpt: page.body.slice(0, 2500),
    },
    candidate_features: featureSet.map((feature) => ({
      feature_name: feature.feature_name,
      feature_summary: feature.feature_summary,
    })),
  }, null, 2);

  let response;
  try {
    response = await runPi(prompt, rerankSystemPrompt);
  } catch {
    response = featureSet.map((feature) => ({
      feature_name: feature.feature_name,
      relevance: "WEAK",
      rationale: "Fallback relevance because reranking failed.",
    }));
  }

  rerankCache[cacheKey] = Array.isArray(response) ? response : [];
  await writeJsonQueued(rerankCacheFile, rerankCache);
  return rerankCache[cacheKey];
}

function rerankWeight(relevance) {
  switch (relevance) {
    case "STRONG":
      return 18;
    case "MODERATE":
      return 8;
    case "WEAK":
      return -4;
    case "NONE":
      return -1000;
    default:
      return 0;
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

async function generateDefinition(productName, feature, supportingPages, definitionCache, keywordEntry) {
  if (disablePi) {
    const strongSingleSource = hasStrongSingleSourceEvidence(feature, supportingPages);
    const uncappedCoverage = supportingPages.length >= 2 ? "MEDIUM" : strongSingleSource ? "MEDIUM" : supportingPages.length === 1 ? "LOW" : "NONE";
    return {
      extended_definition: feature.feature_summary,
      coverage_status: capCoverageByEvidence(productName, feature, supportingPages, uncappedCoverage),
      source_links: supportingPages.map((page) => page.url).filter(Boolean),
      evidence_summary: supportingPages.length > 0
        ? `Fast-mode lexical matching selected ${supportingPages.length} supporting page(s) from the Step 04 corpus.`
        : "No supporting pages passed the Step 06 ranking thresholds.",
    };
  }

  const cacheKey = definitionCacheKey(productName, feature, supportingPages);
  if (definitionCache[cacheKey]) {
    return definitionCache[cacheKey];
  }

  const prompt = JSON.stringify({
    product_name: productName,
    feature: {
      feature_name: feature.feature_name,
      feature_summary: feature.feature_summary,
      latest_feature_date: feature.latest_feature_date,
      deprecation_date: feature.deprecation_date,
      keyword_phrases: arrayOfStrings(keywordEntry?.keyword_phrases),
    },
    supporting_pages: supportingPages.map((page) => ({
      title: page.title,
      url: page.url,
      evidence_snippets: page.evidence_snippets,
    })),
  }, null, 2);

  let response;
  try {
    response = await runPi(prompt, definitionSystemPrompt);
  } catch {
    const strongSingleSource = hasStrongSingleSourceEvidence(feature, supportingPages);
    const uncappedCoverage = supportingPages.length >= 2 ? "MEDIUM" : strongSingleSource ? "MEDIUM" : supportingPages.length === 1 ? "LOW" : "NONE";
    response = {
      extended_definition: feature.feature_summary,
      coverage_status: uncappedCoverage,
      source_links: supportingPages.map((page) => page.url),
      evidence_summary: "Fallback definition because synthesis failed; coverage was derived from supporting-page quality.",
    };
  }

  response.coverage_status = capCoverageByEvidence(productName, feature, supportingPages, response.coverage_status);
  definitionCache[cacheKey] = response;
  await writeJsonQueued(definitionCacheFile, definitionCache);
  return definitionCache[cacheKey];
}

function buildMarkdown(product, features) {
  const covered = features.filter((feature) => feature.coverage_status !== "NONE").length;
  const lines = [
    `# ${product.product_name}`,
    "",
    "Extended Step 06 feature definitions generated by combining Step 02 feature inventories with the Step 04 official documentation corpus.",
    "",
    `Source rows considered in Step 02: ${product.source_row_count}`,
    `Step 02 features considered: ${features.length}`,
    `Corpus-backed definitions: ${covered}`,
    `Features without supporting corpus pages: ${features.length - covered}`,
    "",
    "| Latest feature date | Feature | Coverage | Sources | Extended definition |",
    "| --- | --- | --- | --- | --- |",
  ];

  for (const feature of features) {
    const sourcesCell = feature.source_links.length > 0
      ? feature.source_links.map((url) => `[source](${url})`).join("<br>")
      : "";
    lines.push(`| ${sanitizeTableCell(feature.latest_feature_date)} | ${sanitizeTableCell(feature.feature_name)} | ${sanitizeTableCell(feature.coverage_status)} | ${sanitizeTableCell(sourcesCell)} | ${sanitizeTableCell(feature.extended_definition)} |`);
  }

  lines.push("");
  return `${lines.join("\n")}\n`;
}

function yamlScalar(value) {
  const text = String(value ?? "");
  if (text === "") {
    return '""';
  }

  return `"${text
    .replace(/\\/g, "\\\\")
    .replace(/"/g, '\\"')
    .replace(/\r?\n/g, "\\n")}"`;
}

function buildFeatureFrontmatter(product, feature) {
  const lines = [
    "---",
    `schema_version: ${yamlScalar(schemaVersion)}`,
    `generated_at: ${yamlScalar(new Date().toISOString())}`,
    `product_name: ${yamlScalar(product.product_name)}`,
    `product_slug: ${yamlScalar(product.product_slug)}`,
    `feature_name: ${yamlScalar(feature.feature_name)}`,
    `feature_slug: ${yamlScalar(feature.feature_slug)}`,
    `latest_feature_date: ${yamlScalar(feature.latest_feature_date)}`,
    `deprecation_date: ${yamlScalar(feature.deprecation_date)}`,
    `coverage_status: ${yamlScalar(feature.coverage_status)}`,
    "source_links:",
  ];

  if (feature.source_links.length === 0) {
    lines.push('  - ""');
  } else {
    for (const url of feature.source_links) {
      lines.push(`  - ${yamlScalar(url)}`);
    }
  }

  lines.push("keywords:");
  if (feature.keywords.length === 0) {
    lines.push('  - ""');
  } else {
    for (const keyword of feature.keywords) {
      lines.push(`  - ${yamlScalar(keyword)}`);
    }
  }

  lines.push("---", "");
  return lines.join("\n");
}

function buildFeatureMarkdown(product, feature) {
  const supportingPages = feature.reranked_pages || feature.supporting_pages || [];
  const lines = [
    buildFeatureFrontmatter(product, feature),
    `# ${feature.feature_name}`,
    "",
    `Product: ${product.product_name}`,
    `Coverage: ${feature.coverage_status}`,
    "",
    "## Step 02 Summary",
    "",
    feature.feature_summary,
    "",
    "## Extended Definition",
    "",
    feature.extended_definition,
    "",
  ];

  if (feature.evidence_summary) {
    lines.push("## Evidence Summary", "", feature.evidence_summary, "");
  }

  lines.push("## Source Links", "");
  if (feature.source_links.length === 0) {
    lines.push("No supporting official source links were selected.", "");
  } else {
    for (const url of feature.source_links) {
      lines.push(`- [${url}](${url})`);
    }
    lines.push("");
  }

  lines.push("## Supporting Pages", "");
  if (supportingPages.length === 0) {
    lines.push("No supporting pages passed the Step 06 ranking thresholds.", "");
  } else {
    for (const page of supportingPages) {
      lines.push(`### ${page.title || page.url}`);
      lines.push("");
      lines.push(`- URL: [${page.url}](${page.url})`);
      lines.push(`- Source ID: \`${page.source_id}\``);
      lines.push(`- Final score: ${page.final_score}`);
      lines.push(`- Re-rank relevance: ${page.rerank_relevance || "N/A"}`);
      if (page.rerank_rationale) {
        lines.push(`- Re-rank rationale: ${page.rerank_rationale}`);
      }
      if (Array.isArray(page.evidence_snippets) && page.evidence_snippets.length > 0) {
        lines.push("", "Evidence snippets:");
        for (const snippet of page.evidence_snippets) {
          lines.push(`- ${snippet}`);
        }
      }
      lines.push("");
    }
  }

  return `${lines.join("\n")}\n`;
}

async function writeFeatureFiles(product, featureFilesDir, features) {
  await mkdir(featureFilesDir, { recursive: true });
  for (const feature of features) {
    const featureFile = path.join(featureFilesDir, `${feature.feature_slug || slugify(feature.feature_name)}.md`);
    await writeFile(featureFile, buildFeatureMarkdown(product, feature), "utf8");
  }
}

function buildCoverageFeedback(product, features) {
  const uncovered = features.filter((feature) => feature.coverage_status === "NONE");
  const tokenCounts = new Map();
  for (const feature of uncovered) {
    const tokens = new Set(tokenize(`${feature.feature_name} ${feature.feature_summary}`));
    for (const token of tokens) tokenCounts.set(token, (tokenCounts.get(token) || 0) + 1);
  }
  return {
    schema_version: schemaVersion,
    generated_at: new Date().toISOString(),
    product_name: product.product_name,
    product_slug: product.product_slug,
    feature_count: features.length,
    uncovered_feature_count: uncovered.length,
    uncovered_features: uncovered.slice(0, 200).map((feature) => ({
      latest_feature_date: feature.latest_feature_date,
      feature_name: feature.feature_name,
      feature_summary: feature.feature_summary,
      keywords: feature.keywords,
    })),
    top_missing_tokens: [...tokenCounts.entries()]
      .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
      .slice(0, 40)
      .map(([token, count]) => ({ token, count })),
  };
}

async function processProduct(productSlug, caches) {
  const step02 = await loadStep02Product(productSlug);
  const corpusPages = await loadCorpusPages(productSlug);
  const selectedSources = await loadSelectedSources(productSlug);
  const outputDir = path.join(outputProductsDir, productSlug);
  const featureFilesDir = path.join(outputDir, "features");
  const stateDir = path.join(stateProductsDir, productSlug);
  const outputJsonFile = path.join(outputDir, "extended-features.json");
  const outputMarkdownFile = path.join(outputDir, "extended-features.md");
  const coverageFeedbackFile = path.join(outputDir, "coverage-feedback.json");
  const stateFile = path.join(stateDir, "state.json");

  await mkdir(outputDir, { recursive: true });
  await mkdir(featureFilesDir, { recursive: true });
  await mkdir(stateDir, { recursive: true });

  if (corpusPages.length === 0 && await exists(outputJsonFile)) {
    const existingPayload = await readJson(outputJsonFile, null);
    if (existingPayload?.product_name && Array.isArray(existingPayload.features)) {
      const expectedFeatureNames = new Set(step02.features.map((feature) => String(feature.feature_name || "").trim()).filter(Boolean));
      const existingFeatureNames = new Set(existingPayload.features.map((feature) => String(feature?.feature_name || "").trim()).filter(Boolean));
      const canReuseExistingPayload = expectedFeatureNames.size === existingFeatureNames.size
        && [...expectedFeatureNames].every((featureName) => existingFeatureNames.has(featureName));
      if (!canReuseExistingPayload) {
        // Fall through and regenerate so stale Step 02 feature inventories do not survive when Step 04 has no corpus.
      } else {
      const normalizedFeatures = existingPayload.features.map((feature) => ({
        ...feature,
        feature_slug: feature.feature_slug || slugify(feature.feature_name),
        reranked_pages: feature.supporting_pages || [],
      }));
      await writeFeatureFiles(step02, featureFilesDir, normalizedFeatures);
      await writeJson(stateFile, {
        schema_version: schemaVersion,
        generated_at: new Date().toISOString(),
        product_name: step02.product_name,
        product_slug: productSlug,
        corpus_page_count: 0,
        feature_count: normalizedFeatures.length,
        covered_feature_count: normalizedFeatures.filter((feature) => feature.coverage_status !== "NONE").length,
        features_without_supporting_pages: normalizedFeatures.filter((feature) => (feature.reranked_pages || []).length === 0).length,
        reused_existing_payload: true,
        output_files: {
          json: path.relative(process.cwd(), outputJsonFile).replace(/\\/g, "/"),
          markdown: path.relative(process.cwd(), outputMarkdownFile).replace(/\\/g, "/"),
          coverage_feedback: path.relative(process.cwd(), coverageFeedbackFile).replace(/\\/g, "/"),
          feature_files_dir: path.relative(process.cwd(), featureFilesDir).replace(/\\/g, "/"),
        },
        feature_file_count: normalizedFeatures.length,
      });

      return {
        product_name: step02.product_name,
        product_slug: productSlug,
        corpus_page_count: 0,
        feature_count: normalizedFeatures.length,
        covered_feature_count: normalizedFeatures.filter((feature) => feature.coverage_status !== "NONE").length,
        uncovered_feature_count: normalizedFeatures.filter((feature) => feature.coverage_status === "NONE").length,
        output_json: path.relative(process.cwd(), outputJsonFile).replace(/\\/g, "/"),
        output_markdown: path.relative(process.cwd(), outputMarkdownFile).replace(/\\/g, "/"),
        feature_files_dir: path.relative(process.cwd(), featureFilesDir).replace(/\\/g, "/"),
        reused_existing_payload: true,
      };
      }
    }
  }

  const features = step02.features.slice(0, maxFeatures > 0 ? maxFeatures : undefined);
  const phraseDocumentFrequency = buildPhraseDocumentFrequency(features);
  await ensureKeywords(step02.product_name, features, caches.keywordCache, phraseDocumentFrequency);

  const featureRecords = [];
  const recoveredPageById = new Map();
  for (const feature of features) {
    const keywordEntry = caches.keywordCache[keywordCacheKey(step02.product_name, feature)] || fallbackKeywords(feature);
    let candidatePages = dedupeCandidatesByNormalizedUrl(corpusPages
      .map((page) => scorePageForFeature(step02.product_name, feature, keywordEntry, page))
      .filter((candidate) => !isReleaseNotesUrl(candidate.url) || String(candidate.source_id || "").startsWith("feature-recovery"))
      .filter((candidate) => candidate.base_score >= minBaseScore)
      .sort((a, b) => b.base_score - a.base_score || a.title.localeCompare(b.title)), "base_score")
      .sort((a, b) => b.base_score - a.base_score || a.title.localeCompare(b.title))
      .slice(0, maxCandidatePages);

    if (shouldAttemptFeatureRecovery(step02.product_name, productSlug, feature, keywordEntry, candidatePages)) {
      const recoveredPages = await recoverFeatureSpecificPages(
        productSlug,
        selectedSources,
        feature,
        keywordEntry,
        caches.featureRecoveryCache,
      );
      if (recoveredPages.length > 0) {
        for (const page of recoveredPages) {
          recoveredPageById.set(page.page_id, page);
        }
        const existingPageIds = new Set(candidatePages.map((candidate) => candidate.page_id));
        const recoveredCandidates = recoveredPages
          .map((page) => scorePageForFeature(step02.product_name, feature, keywordEntry, page))
          .filter((candidate) => candidate.base_score >= minBaseScore)
          .filter((candidate) => !existingPageIds.has(candidate.page_id));
        candidatePages = dedupeCandidatesByNormalizedUrl([...candidatePages, ...recoveredCandidates], "base_score")
          .sort((a, b) => b.base_score - a.base_score || a.title.localeCompare(b.title))
          .slice(0, maxCandidatePages);
      }
    }

    featureRecords.push({
      ...feature,
      keywords: arrayOfStrings(keywordEntry.keyword_phrases),
      candidate_pages: candidatePages,
      reranked_pages: [],
      coverage_status: "NONE",
      source_links: [],
      extended_definition: feature.feature_summary,
      evidence_summary: "",
    });
  }

  const candidateByPageId = new Map();
  for (const feature of featureRecords) {
    for (const candidate of feature.candidate_pages) {
      if (!candidateByPageId.has(candidate.page_id)) {
        candidateByPageId.set(candidate.page_id, []);
      }

      candidateByPageId.get(candidate.page_id).push({
        feature_name: feature.feature_name,
        feature_summary: feature.feature_summary,
        base_score: candidate.base_score,
      });
    }
  }

  const pageById = new Map([...corpusPages, ...recoveredPageById.values()].map((page) => [page.page_id, page]));
  const rerankByPageId = new Map();

  for (const [pageId, candidates] of candidateByPageId.entries()) {
    const rankedCandidates = [...candidates]
      .sort((a, b) => b.base_score - a.base_score || a.feature_name.localeCompare(b.feature_name))
      .slice(0, maxCompetitionFeatures);

    if (rankedCandidates.length <= 1) {
      continue;
    }

    const page = pageById.get(pageId);
    const rerankResult = await rerankPageCompetition(step02.product_name, page, rankedCandidates, caches.rerankCache);
    rerankByPageId.set(pageId, new Map((Array.isArray(rerankResult) ? rerankResult : []).map((item) => [String(item?.feature_name || "").trim(), item])));
  }

  const definitionsNeeded = [];

  for (const feature of featureRecords) {
      const rerankedPages = dedupeCandidatesByNormalizedUrl(feature.candidate_pages
        .map((candidate) => {
          const rerank = rerankByPageId.get(candidate.page_id)?.get(feature.feature_name);
          const finalScore = candidate.base_score + rerankWeight(String(rerank?.relevance || ""));
        return {
          ...candidate,
          rerank_relevance: String(rerank?.relevance || ""),
          rerank_rationale: String(rerank?.rationale || ""),
          final_score: finalScore,
          };
        })
      .filter((candidate) => !isReleaseNotesUrl(candidate.url) || String(candidate.source_id || "").startsWith("feature-recovery"))
      .filter((candidate) => candidate.final_score >= minFinalScore), "final_score")
      .sort((a, b) => b.final_score - a.final_score || a.title.localeCompare(b.title))
      .slice(0, maxDefinitionPages);

    feature.reranked_pages = rerankedPages;
    if (rerankedPages.length === 0) {
      continue;
    }

    definitionsNeeded.push(feature);
  }

  await mapWithConcurrency(definitionsNeeded, definitionConcurrency, async (feature) => {
    const keywordEntry = caches.keywordCache[keywordCacheKey(step02.product_name, feature)] || fallbackKeywords(feature);
    const supportingPages = feature.reranked_pages.map((pageScore) => {
      const page = pageById.get(pageScore.page_id);
      return {
        ...pageScore,
        title: page?.title || pageScore.title,
        url: page?.url || pageScore.url,
        evidence_snippets: extractEvidenceSnippets(page, keywordEntry, feature, step02.product_name),
      };
    });

    const definition = await generateDefinition(step02.product_name, feature, supportingPages, caches.definitionCache, keywordEntry);
    feature.coverage_status = String(definition.coverage_status || "LOW").trim() || "LOW";
    feature.source_links = selectFinalSourceLinks(
      step02.product_name,
      feature,
      supportingPages,
      definition.source_links,
    );
    feature.extended_definition = normalizeWhitespace(String(definition.extended_definition || "").trim()) || feature.feature_summary;
    feature.evidence_summary = normalizeWhitespace(String(definition.evidence_summary || "").trim());
    feature.reranked_pages = supportingPages.map((page) => ({
      url: page.url,
      title: page.title,
      source_id: page.source_id,
      markdown_path: page.relative_markdown_path,
      base_score: page.base_score,
      final_score: page.final_score,
      rerank_relevance: page.rerank_relevance,
      rerank_rationale: page.rerank_rationale,
      matched_phrases: page.matched_phrases,
      evidence_snippets: page.evidence_snippets,
    }));
  });

  const payload = {
    schema_version: schemaVersion,
    generated_at: new Date().toISOString(),
    product_name: step02.product_name,
    product_slug: productSlug,
    inputs: {
      step02_markdown_path: path.relative(process.cwd(), step02.step02_path).replace(/\\/g, "/"),
      step04_product_dir: path.relative(process.cwd(), path.join(inputStep04Root, "products", productSlug)).replace(/\\/g, "/"),
    },
    thresholds: {
      min_base_score: minBaseScore,
      min_final_score: minFinalScore,
      max_candidate_pages: maxCandidatePages,
      max_definition_pages: maxDefinitionPages,
    },
    corpus_page_count: corpusPages.length,
    source_row_count: step02.source_row_count,
    feature_count: featureRecords.length,
    covered_feature_count: featureRecords.filter((feature) => feature.coverage_status !== "NONE").length,
    features_without_supporting_pages: featureRecords.filter((feature) => feature.reranked_pages.length === 0).length,
    features: featureRecords.map((feature) => ({
      latest_feature_date: feature.latest_feature_date,
      feature_name: feature.feature_name,
      deprecation_date: feature.deprecation_date,
      feature_summary: feature.feature_summary,
      keywords: feature.keywords,
      coverage_status: feature.coverage_status,
      extended_definition: feature.extended_definition,
      evidence_summary: feature.evidence_summary,
      source_links: feature.source_links,
      candidate_pages: feature.candidate_pages,
      supporting_pages: feature.reranked_pages,
    })),
  };
  const coverageFeedback = buildCoverageFeedback(step02, featureRecords);

  await writeJson(outputJsonFile, payload);
  await writeJson(coverageFeedbackFile, coverageFeedback);
  await writeFile(outputMarkdownFile, buildMarkdown(step02, featureRecords), "utf8");
  await writeFeatureFiles(step02, featureFilesDir, featureRecords);
  await writeJson(stateFile, {
    schema_version: schemaVersion,
    generated_at: payload.generated_at,
    product_name: step02.product_name,
    product_slug: productSlug,
    corpus_page_count: corpusPages.length,
    feature_count: featureRecords.length,
    covered_feature_count: payload.covered_feature_count,
    features_without_supporting_pages: payload.features_without_supporting_pages,
    keyword_cache_size: Object.keys(caches.keywordCache).length,
    rerank_cache_size: Object.keys(caches.rerankCache).length,
    definition_cache_size: Object.keys(caches.definitionCache).length,
    output_files: {
      json: path.relative(process.cwd(), outputJsonFile).replace(/\\/g, "/"),
      markdown: path.relative(process.cwd(), outputMarkdownFile).replace(/\\/g, "/"),
      coverage_feedback: path.relative(process.cwd(), coverageFeedbackFile).replace(/\\/g, "/"),
      feature_files_dir: path.relative(process.cwd(), featureFilesDir).replace(/\\/g, "/"),
    },
    feature_file_count: featureRecords.length,
  });

  return {
    product_name: step02.product_name,
    product_slug: productSlug,
    corpus_page_count: corpusPages.length,
    feature_count: featureRecords.length,
    covered_feature_count: payload.covered_feature_count,
    uncovered_feature_count: featureRecords.filter((feature) => feature.coverage_status === "NONE").length,
    output_json: path.relative(process.cwd(), outputJsonFile).replace(/\\/g, "/"),
    output_markdown: path.relative(process.cwd(), outputMarkdownFile).replace(/\\/g, "/"),
    feature_files_dir: path.relative(process.cwd(), featureFilesDir).replace(/\\/g, "/"),
  };
}

async function listProductSlugs() {
  const step02Files = (await readdir(inputStep02Root, { withFileTypes: true }))
    .filter((entry) => entry.isFile() && entry.name.endsWith(".md") && entry.name !== "index.md")
    .map((entry) => entry.name.replace(/\.md$/, ""))
    .sort();

  return step02Files.filter((slug) => productFilter.length === 0 || productFilter.includes(slug.toLowerCase()));
}

async function main() {
  await ensureDirectories();

  if (!disablePi && !(await hasPi())) {
    throw new Error("pi is required for Step 06 enrichment but is not available in PATH");
  }

  const productSlugs = await listProductSlugs();
  const keywordCache = await readJson(keywordCacheFile, {});
  const rerankCache = await readJson(rerankCacheFile, {});
  const definitionCache = await readJson(definitionCacheFile, {});
  const featureRecoveryCache = await readJson(featureRecoveryCacheFile, {});
  const caches = { keywordCache, rerankCache, definitionCache, featureRecoveryCache };
  const products = [];

  for (const productSlug of productSlugs) {
    const step04ProductDir = path.join(inputStep04Root, "products", productSlug);
    if (!(await exists(step04ProductDir))) {
      continue;
    }

    products.push(await processProduct(productSlug, caches));
  }

  await writeJson(keywordCacheFile, keywordCache);
  await writeJson(rerankCacheFile, rerankCache);
  await writeJson(definitionCacheFile, definitionCache);
  await writeJson(featureRecoveryCacheFile, featureRecoveryCache);
  await cacheWriteQueue;
  await writeJson(indexFile, {
    schema_version: schemaVersion,
    generated_at: new Date().toISOString(),
    input_step02_root: path.relative(process.cwd(), inputStep02Root).replace(/\\/g, "/"),
    input_step04_root: path.relative(process.cwd(), inputStep04Root).replace(/\\/g, "/"),
    output_root: path.relative(process.cwd(), outputRoot).replace(/\\/g, "/"),
    pi_model: piModel,
    product_count: products.length,
    max_features: maxFeatures || null,
    products_filter: productFilter,
    products,
  });

  console.log(JSON.stringify({
    schema_version: schemaVersion,
    input_step02_root: inputStep02Root,
    input_step04_root: inputStep04Root,
    output_root: outputRoot,
    pi_model: piModel,
    product_count: products.length,
    products_filter: productFilter,
    index_file: indexFile,
  }, null, 2));
}

await main();
