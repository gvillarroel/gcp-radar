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
const featureOverlapTokenFloor = Number(process.env.GCP_RADAR_STEP04_FEATURE_TOKEN_OVERLAP_FLOOR || 6);
const ignoredProductSlugs = new Set(["index"]);

function hashValue(value) {
  return crypto.createHash("sha256").update(value).digest("hex");
}

function normalizeUrl(input) {
  try {
    const url = new URL(input);
    url.hash = "";
    const params = new URLSearchParams();
    for (const [key, value] of url.searchParams.entries()) {
      if (!key.toLowerCase().startsWith("utm_") && key.toLowerCase() !== "hl") {
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

function parseStep02Markdown(markdown, productSlug) {
  const productNameMatch = markdown.match(/^#\s+(.+)\r?$/m);
  const featureCountMatch = markdown.match(/Unique features:\s+(\d+)/);
  const lines = markdown.split(/\r?\n/);
  const features = [];
  for (const line of lines) {
    const match = line.match(/^\|\s*(.*?)\s*\|\s*(.*?)\s*\|\s*(.*?)\s*\|\s*(.*?)\s*\|$/);
    if (!match || match[1] === "---" || match[1] === "Latest feature date") continue;
    features.push({
      feature_name: match[2].replace(/\\\|/g, "|").trim(),
      feature_summary: match[4].replace(/\\\|/g, "|").trim(),
    });
  }
  return {
    product_name: productNameMatch?.[1]?.trim() || productSlug,
    feature_count: Number(featureCountMatch?.[1] || features.length),
    features,
  };
}

function normalizeText(text) {
  return String(text || "").toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
}

function tokenize(text) {
  return normalizeText(text).split(" ").filter((token) => token.length >= 3);
}

function appEngineConfigForSlug(productSlug) {
  const match = String(productSlug || "").match(/^app-engine-(standard|flexible)-environment-(.+)$/);
  if (!match) {
    return null;
  }
  const environment = match[1];
  const runtimeMap = {
    "node-js": "nodejs",
    "net": "dotnet",
    "custom-runtimes": "custom-runtimes",
  };
  return {
    environment,
    runtime: runtimeMap[match[2]] || match[2],
  };
}

function appEngineExpectedRuntimeMatches(productSlug, pathname) {
  const config = appEngineConfigForSlug(productSlug);
  if (!config) {
    return true;
  }
  if (!pathname.startsWith("/appengine/docs/")) {
    return true;
  }
  if (config.runtime === "custom-runtimes") {
    return !/^\/appengine\/docs\/flexible\/(dotnet|go|java|nodejs|php|python|ruby)\//.test(pathname);
  }
  const runtimeMatch = pathname.match(/^\/appengine\/docs\/(?:standard|flexible)\/([^/]+)\//);
  if (!runtimeMatch) {
    return true;
  }
  return runtimeMatch[1] === config.runtime;
}

function requiredAppEngineUrls(productSlug) {
  const config = appEngineConfigForSlug(productSlug);
  if (!config) {
    return [];
  }

  const host = "https://docs.cloud.google.com";
  if (config.runtime === "custom-runtimes") {
    return [
      `${host}/appengine/docs/flexible/overview`,
      `${host}/appengine/docs/flexible/custom-runtimes/about-custom-runtimes`,
      `${host}/appengine/docs/flexible/custom-runtimes/build`,
      `${host}/appengine/docs/flexible/custom-runtimes/configuring-your-app-with-app-yaml`,
      `${host}/appengine/docs/flexible/custom-runtimes/create-app`,
    ];
  }

  const base = `${host}/appengine/docs/${config.environment}/${config.runtime}`;
  const urls = [
    `${host}/appengine/docs/${config.environment}/overview`,
    `${base}/runtime`,
    `${base}/configuring-your-app-with-app-yaml`,
  ];

  if (config.environment === "standard") {
    urls.push(`${base}/building-app`);
    urls.push(`${base}/services/access`);
    if (config.runtime === "python") {
      urls.push(`${base}/customizing-the-python-runtime`);
      urls.push(`${host}/appengine/docs/legacy/standard/python/apis`);
      urls.push(`${host}/appengine/docs/legacy/standard/python/tools/built-in-libraries-27`);
      urls.push(`${host}/appengine/docs/standard/services/search/facet-search`);
    }
  } else {
    urls.push(`${base}/specifying-dependencies`);
    urls.push(`${base}/create-app`);
  }

  return urls;
}

async function loadFeatureInventoryForRanking(ranking) {
  if (ranking?.step02_feature_inventory?.feature_count) {
    return ranking.step02_feature_inventory;
  }
  const step02Path = ranking?.step02_source_path ? path.resolve(process.cwd(), String(ranking.step02_source_path)) : "";
  if (!step02Path || !(await exists(step02Path))) {
    return { feature_count: 0, top_phrases: [], top_tokens: [], inventory_profile: "user_facing" };
  }
  const parsed = parseStep02Markdown(await readFile(step02Path, "utf8"), ranking.product_slug);
  const phrases = [];
  const tokens = new Set();
  for (const feature of parsed.features) {
    const name = normalizeText(feature.feature_name);
    const summary = normalizeText(feature.feature_summary);
    if (name.length >= 10) phrases.push(name);
    for (const token of tokenize(`${feature.feature_name} ${feature.feature_summary}`)) tokens.add(token);
  }
  return {
    feature_count: parsed.feature_count,
    top_phrases: [...new Set(phrases)].slice(0, 40),
    top_tokens: [...tokens].slice(0, 80),
    inventory_profile: "user_facing",
  };
}

function adaptiveBudgetForFamily(family, featureCount, broaden = false, productSlug = "") {
  const base = crawlBudgets[family];
  const pagesBoost = featureCount >= 250 ? 22 : featureCount >= 100 ? 12 : featureCount >= 40 ? 6 : 0;
  const depthBoost = featureCount >= 120 ? 1 : 0;
  const bigqueryBoost = productSlug === "bigquery" && (family === "docs_reference" || family === "docs_root") ? 12 : 0;
  const appEngineBoost = /^app-engine-(standard|flexible)-environment-/.test(productSlug) && family === "docs_reference" ? 10 : 0;
  const agentBuilderBoost = productSlug === "vertex-ai-agent-builder" && (family === "docs_reference" || family === "iam_reference") ? 8 : 0;
  const gmailBoost = productSlug === "gmail-api" && family === "docs_reference" ? 12 : 0;
  const workflowsBoost = productSlug === "workflows" && (family === "docs_reference" || family === "api_reference") ? 10 : 0;
  const workflowsDepthBoost = productSlug === "workflows" && (family === "docs_reference" || family === "api_reference") ? 1 : 0;
  return {
    maxDepth: base.maxDepth + depthBoost + workflowsDepthBoost + (broaden ? 1 : 0),
    maxPages: base.maxPages + pagesBoost + bigqueryBoost + appEngineBoost + agentBuilderBoost + gmailBoost + workflowsBoost + (broaden ? Math.max(6, Math.round(base.maxPages * 0.35)) : 0),
  };
}

function familySelectionLimit(family, featureCount, broaden = false, productSlug = "") {
  const extra = featureCount >= 250 ? 2 : featureCount >= 100 ? 1 : featureCount >= 40 ? 1 : 0;
  const base = family === "docs_root" || family === "docs_reference" ? 1 + extra : family === "api_reference" && featureCount >= 120 ? 2 : 1;
  const appEngineExtra = /^app-engine-(standard|flexible)-environment-/.test(productSlug) && family === "docs_reference" ? 2 : 0;
  const appEngineAdminExtra = productSlug === "app-engine-admin-api" && family === "docs_reference" ? 2 : 0;
  const bigqueryExtra = productSlug === "bigquery" && family === "docs_reference" ? 2 : 0;
  const agentBuilderExtra = productSlug === "vertex-ai-agent-builder" && (family === "docs_reference" || family === "iam_reference") ? 1 : 0;
  const adminSdkExtra = productSlug === "google-workspace-admin-sdk" && family === "docs_reference" ? 1 : 0;
  return base + appEngineExtra + appEngineAdminExtra + bigqueryExtra + agentBuilderExtra + adminSdkExtra + (broaden && (family === "docs_root" || family === "docs_reference") ? 1 : 0);
}

function requiredSelectedUrls(productSlug) {
  const appEngineUrls = requiredAppEngineUrls(productSlug).map((url) => ({
    url,
    family: /\/runtime$/.test(url) || /\/overview$/.test(url) ? "docs_root" : "docs_reference",
    classification: /\/runtime$/.test(url) || /\/overview$/.test(url) ? "product_root" : "product_reference",
  }));
  if (appEngineUrls.length > 0) {
    return appEngineUrls;
  }
  switch (productSlug) {
    case "google-workspace-admin-sdk":
      return [
        {
          url: "https://developers.google.com/workspace/admin/reports/v1/guides/manage-audit-login",
          family: "docs_reference",
          classification: "product_reference",
        },
      ];
    case "google-kubernetes-engine":
      return [
        {
          url: "https://docs.cloud.google.com/kubernetes-engine/docs",
          family: "docs_root",
          classification: "product_root",
        },
        {
          url: "https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp",
          family: "api_reference",
          classification: "api_reference",
        },
        {
          url: "https://docs.cloud.google.com/kubernetes-engine/docs/reference/api-organization",
          family: "docs_reference",
          classification: "product_reference",
        },
        {
          url: "https://docs.cloud.google.com/kubernetes-engine/docs/reference/api-permissions",
          family: "iam_reference",
          classification: "iam_reference",
        },
        {
          url: "https://docs.cloud.google.com/kubernetes-engine/docs/how-to/provisioningrequest",
          family: "docs_reference",
          classification: "product_reference",
        },
        {
          url: "https://docs.cloud.google.com/kubernetes-engine/docs/integrations/ai-infra",
          family: "docs_reference",
          classification: "product_reference",
        },
      ];
    case "dataproc":
      return [
        {
          url: "https://docs.cloud.google.com/dataproc/docs",
          family: "docs_root",
          classification: "product_root",
        },
        {
          url: "https://docs.cloud.google.com/dataproc/docs/guides/gemini-spark",
          family: "docs_reference",
          classification: "product_reference",
        },
        {
          url: "https://docs.cloud.google.com/dataproc/docs/guides/performance-enhancements",
          family: "docs_reference",
          classification: "product_reference",
        },
        {
          url: "https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images",
          family: "docs_reference",
          classification: "product_reference",
        },
        {
          url: "https://docs.cloud.google.com/dataproc/docs/guides/dataproc-metrics",
          family: "docs_reference",
          classification: "product_reference",
        },
        {
          url: "https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-versions",
          family: "docs_reference",
          classification: "product_reference",
        },
        {
          url: "https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-diagnose-cluster",
          family: "docs_reference",
          classification: "product_reference",
        },
        {
          url: "https://docs.cloud.google.com/dataproc/docs/guides/create-cluster",
          family: "docs_reference",
          classification: "product_reference",
        },
        {
          url: "https://docs.cloud.google.com/dataproc/docs/quickstarts/update-cluster-gcloud",
          family: "docs_reference",
          classification: "product_reference",
        },
        {
          url: "https://docs.cloud.google.com/dataproc/docs/quickstarts/create-cluster-client-libraries",
          family: "docs_reference",
          classification: "product_reference",
        },
        {
          url: "https://docs.cloud.google.com/dataproc/docs/concepts/iam/dataproc-principals",
          family: "iam_reference",
          classification: "iam_reference",
        },
      ];
    case "alloydb":
      return [
        {
          url: "https://docs.cloud.google.com/alloydb/docs",
          family: "docs_root",
          classification: "product_root",
        },
        {
          url: "https://docs.cloud.google.com/alloydb/docs/ai",
          family: "docs_root",
          classification: "product_root",
        },
        {
          url: "https://docs.cloud.google.com/alloydb/docs/ai/data-agent-overview",
          family: "docs_reference",
          classification: "product_reference",
        },
        {
          url: "https://docs.cloud.google.com/alloydb/docs/ai/alloydb-ai-use-cases",
          family: "docs_reference",
          classification: "product_reference",
        },
        {
          url: "https://docs.cloud.google.com/alloydb/docs/ai/adaptive-filtering",
          family: "docs_reference",
          classification: "product_reference",
        },
        {
          url: "https://docs.cloud.google.com/alloydb/docs/ai/ai-query-engine-landing",
          family: "docs_reference",
          classification: "product_reference",
        },
        {
          url: "https://docs.cloud.google.com/alloydb/docs/ai/generate-manage-auto-embeddings-for-tables",
          family: "docs_reference",
          classification: "product_reference",
        },
        {
          url: "https://docs.cloud.google.com/alloydb/docs/ai/generate-sql-queries-natural-language",
          family: "docs_reference",
          classification: "product_reference",
        },
        {
          url: "https://docs.cloud.google.com/alloydb/docs/ai/run-hybrid-vector-similarity-search",
          family: "docs_reference",
          classification: "product_reference",
        },
        {
          url: "https://docs.cloud.google.com/alloydb/docs/reference/ai/hybrid-search-function-parameters",
          family: "api_reference",
          classification: "api_reference",
        },
        {
          url: "https://docs.cloud.google.com/alloydb/docs/reference/query-tuning-and-optimization",
          family: "docs_reference",
          classification: "product_reference",
        },
        {
          url: "https://docs.cloud.google.com/alloydb/docs/reference/iam-roles-permissions",
          family: "iam_reference",
          classification: "iam_reference",
        },
        {
          url: "https://docs.cloud.google.com/alloydb/docs/quickstart/create-and-connect",
          family: "docs_reference",
          classification: "product_reference",
        },
      ];
    case "dialogflow":
      return [
        {
          url: "https://docs.cloud.google.com/dialogflow/cx/docs",
          family: "docs_root",
          classification: "product_root",
        },
        {
          url: "https://docs.cloud.google.com/dialogflow/cx/docs/concept/region",
          family: "docs_reference",
          classification: "product_reference",
        },
        {
          url: "https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3-overview",
          family: "api_reference",
          classification: "api_reference",
        },
        {
          url: "https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3/ConversationTurn",
          family: "api_reference",
          classification: "api_reference",
        },
        {
          url: "https://docs.cloud.google.com/dialogflow/cx/docs/concept/flow",
          family: "docs_reference",
          classification: "product_reference",
        },
        {
          url: "https://docs.cloud.google.com/dialogflow/cx/docs/concept/conversation-history",
          family: "docs_reference",
          classification: "product_reference",
        },
        {
          url: "https://docs.cloud.google.com/dialogflow/cx/docs/concept/audit-logging",
          family: "docs_reference",
          classification: "product_reference",
        },
        {
          url: "https://docs.cloud.google.com/dialogflow/cx/docs/concept/advanced-speech",
          family: "docs_reference",
          classification: "product_reference",
        },
        {
          url: "https://docs.cloud.google.com/dialogflow/cx/docs/concept/console-conversational-agents",
          family: "docs_reference",
          classification: "product_reference",
        },
        {
          url: "https://docs.cloud.google.com/dialogflow/es/docs/access-control",
          family: "iam_reference",
          classification: "iam_reference",
        },
        {
          url: "https://docs.cloud.google.com/dialogflow/es/docs/entities-options",
          family: "docs_reference",
          classification: "product_reference",
        },
        {
          url: "https://docs.cloud.google.com/dialogflow/es/docs/entities-regexp",
          family: "docs_reference",
          classification: "product_reference",
        },
        {
          url: "https://docs.cloud.google.com/dialogflow/docs/intents-actions-parameters",
          family: "docs_reference",
          classification: "product_reference",
        },
      ];
    case "apigee-ui":
      return [
        {
          url: "https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/ui-overview",
          family: "docs_root",
          classification: "product_root",
        },
        {
          url: "https://docs.cloud.google.com/apigee/docs/api-platform/system-administration/manage-users",
          family: "iam_reference",
          classification: "iam_reference",
        },
        {
          url: "https://docs.cloud.google.com/apigee/docs/api-platform/system-administration/manage-users-roles",
          family: "iam_reference",
          classification: "iam_reference",
        },
        {
          url: "https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/create-api-proxy-openapi-spec",
          family: "docs_reference",
          classification: "product_reference",
        },
        {
          url: "https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/secure-calls-your-api-through-api-key-validation",
          family: "docs_reference",
          classification: "product_reference",
        },
        {
          url: "https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/secure-calls-your-api-through-oauth-20-client-credentials",
          family: "docs_reference",
          classification: "product_reference",
        },
        {
          url: "https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/view-with-trace",
          family: "docs_reference",
          classification: "product_reference",
        },
        {
          url: "https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/add-spike-arrest",
          family: "docs_reference",
          classification: "product_reference",
        },
        {
          url: "https://docs.cloud.google.com/apigee/docs/api-platform/local-development/vscode/tutorial-create-workspace",
          family: "docs_reference",
          classification: "product_reference",
        },
        {
          url: "https://docs.cloud.google.com/apigee/docs/api-platform/local-development/vscode/tutorial-create-proxy",
          family: "docs_reference",
          classification: "product_reference",
        },
        {
          url: "https://docs.cloud.google.com/apigee/docs/api-platform/local-development/vscode/tutorial-change-target-endpoint",
          family: "docs_reference",
          classification: "product_reference",
        },
        {
          url: "https://docs.cloud.google.com/apigee/docs/api-platform/local-development/vscode/tutorial-deploy",
          family: "docs_reference",
          classification: "product_reference",
        },
        {
          url: "https://docs.cloud.google.com/apigee/docs/api-platform/local-development/vscode/tutorial-deploy-apigee",
          family: "docs_reference",
          classification: "product_reference",
        },
        {
          url: "https://docs.cloud.google.com/apigee/docs/api-platform/local-development/vscode/tutorial-promote",
          family: "docs_reference",
          classification: "product_reference",
        },
        {
          url: "https://docs.cloud.google.com/apigee/docs/api-platform/local-development/vscode/tutorial-test",
          family: "docs_reference",
          classification: "product_reference",
        },
        {
          url: "https://docs.cloud.google.com/apigee/docs/apigee-mcp/apigee-mcp-quickstart",
          family: "docs_reference",
          classification: "product_reference",
        },
        {
          url: "https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart",
          family: "docs_reference",
          classification: "product_reference",
        },
      ];
    case "earth-engine-code-editor":
      return [
        {
          url: "https://developers.google.com/earth-engine",
          family: "docs_root",
          classification: "product_root",
        },
        {
          url: "https://developers.google.com/earth-engine/guides/playground",
          family: "docs_root",
          classification: "product_root",
        },
        {
          url: "https://developers.google.com/earth-engine/guides/debugging",
          family: "docs_reference",
          classification: "product_reference",
        },
        {
          url: "https://developers.google.com/earth-engine/guides/client_server",
          family: "docs_reference",
          classification: "product_reference",
        },
        {
          url: "https://developers.google.com/earth-engine/guides/auth",
          family: "docs_reference",
          classification: "product_reference",
        },
        {
          url: "https://developers.google.com/earth-engine/guides/best_practices",
          family: "docs_reference",
          classification: "product_reference",
        },
        {
          url: "https://developers.google.com/earth-engine/guides/command_line",
          family: "docs_reference",
          classification: "product_reference",
        },
        {
          url: "https://developers.google.com/earth-engine/guides/python_install",
          family: "docs_reference",
          classification: "product_reference",
        },
        {
          url: "https://developers.google.com/earth-engine/guides/apps",
          family: "docs_reference",
          classification: "product_reference",
        },
        {
          url: "https://developers.google.com/earth-engine/guides/charts_style",
          family: "docs_reference",
          classification: "product_reference",
        },
        {
          url: "https://developers.google.com/earth-engine/guides/charts_datatable",
          family: "docs_reference",
          classification: "product_reference",
        },
        {
          url: "https://developers.google.com/earth-engine/guides/ee-vertex-migrate",
          family: "docs_reference",
          classification: "product_reference",
        },
        {
          url: "https://developers.google.com/earth-engine/apidocs",
          family: "api_reference",
          classification: "api_reference",
        },
      ];
    case "earth-engine-python-client-library":
      return [
        {
          url: "https://developers.google.com/earth-engine",
          family: "docs_root",
          classification: "product_root",
        },
        {
          url: "https://developers.google.com/earth-engine/guides",
          family: "docs_root",
          classification: "product_root",
        },
        {
          url: "https://developers.google.com/earth-engine/apidocs",
          family: "api_reference",
          classification: "api_reference",
        },
        {
          url: "https://developers.google.com/earth-engine/guides/auth",
          family: "docs_reference",
          classification: "product_reference",
        },
        {
          url: "https://developers.google.com/earth-engine/guides/client_server",
          family: "docs_reference",
          classification: "product_reference",
        },
        {
          url: "https://developers.google.com/earth-engine/guides/python_install",
          family: "docs_reference",
          classification: "product_reference",
        },
        {
          url: "https://developers.google.com/earth-engine/guides/debugging",
          family: "docs_reference",
          classification: "product_reference",
        },
        {
          url: "https://developers.google.com/earth-engine/guides/data_extraction",
          family: "docs_reference",
          classification: "product_reference",
        },
        {
          url: "https://developers.google.com/earth-engine/guides/access_control",
          family: "iam_reference",
          classification: "iam_reference",
        },
        {
          url: "https://developers.google.com/earth-engine/guides/playground",
          family: "docs_reference",
          classification: "product_reference",
        },
      ];
    case "cloud-deployment-manager":
      return [
        {
          url: "https://docs.cloud.google.com/deployment-manager/docs",
          family: "docs_root",
          classification: "product_root",
        },
        {
          url: "https://docs.cloud.google.com/deployment-manager/docs/fundamentals",
          family: "docs_root",
          classification: "product_root",
        },
        {
          url: "https://docs.cloud.google.com/deployment-manager/docs/resources",
          family: "docs_root",
          classification: "product_root",
        },
        {
          url: "https://docs.cloud.google.com/deployment-manager/docs/support",
          family: "docs_root",
          classification: "product_root",
        },
        {
          url: "https://docs.cloud.google.com/deployment-manager/docs/troubleshooting",
          family: "docs_root",
          classification: "product_root",
        },
        {
          url: "https://docs.cloud.google.com/deployment-manager/docs/configuration/supported-gcp-types",
          family: "docs_reference",
          classification: "product_reference",
        },
        {
          url: "https://docs.cloud.google.com/deployment-manager/docs/configuration/supported-resource-types",
          family: "docs_reference",
          classification: "product_reference",
        },
        {
          url: "https://docs.cloud.google.com/deployment-manager/docs/configuration/syntax-reference",
          family: "docs_reference",
          classification: "product_reference",
        },
        {
          url: "https://docs.cloud.google.com/deployment-manager/docs/configuration/create-basic-configuration",
          family: "docs_reference",
          classification: "product_reference",
        },
        {
          url: "https://docs.cloud.google.com/deployment-manager/docs/configuration/templates/create-basic-template",
          family: "docs_reference",
          classification: "product_reference",
        },
        {
          url: "https://docs.cloud.google.com/deployment-manager/docs/manage-cloud-resources-deployment",
          family: "docs_reference",
          classification: "product_reference",
        },
        {
          url: "https://docs.cloud.google.com/deployment-manager/docs/step-by-step-guide/create-a-configuration",
          family: "docs_reference",
          classification: "product_reference",
        },
        {
          url: "https://docs.cloud.google.com/deployment-manager/docs/step-by-step-guide/create-a-template",
          family: "docs_reference",
          classification: "product_reference",
        },
        {
          url: "https://docs.cloud.google.com/deployment-manager/docs/step-by-step-guide/deploy-your-resources",
          family: "docs_reference",
          classification: "product_reference",
        },
        {
          url: "https://docs.cloud.google.com/deployment-manager/docs/step-by-step-guide/installation-and-setup",
          family: "docs_reference",
          classification: "product_reference",
        },
        {
          url: "https://docs.cloud.google.com/deployment-manager/docs/reference/latest",
          family: "api_reference",
          classification: "api_reference",
        },
        {
          url: "https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments",
          family: "api_reference",
          classification: "api_reference",
        },
        {
          url: "https://docs.cloud.google.com/deployment-manager/docs/reference/latest/libraries",
          family: "api_reference",
          classification: "api_reference",
        },
        {
          url: "https://docs.cloud.google.com/deployment-manager/docs/access-control",
          family: "iam_reference",
          classification: "iam_reference",
        },
        {
          url: "https://docs.cloud.google.com/deployment-manager/docs/reference/latest/authorization",
          family: "iam_reference",
          classification: "iam_reference",
        },
      ];
    case "apigee-advanced-api-security":
      return [
        {
          url: "https://docs.cloud.google.com/apigee/docs/api-security",
          family: "docs_root",
          classification: "product_root",
        },
        {
          url: "https://docs.cloud.google.com/apigee/docs/api-platform/security/api-security",
          family: "docs_root",
          classification: "product_root",
        },
        {
          url: "https://docs.cloud.google.com/apigee/docs/api-security/enable-security",
          family: "docs_reference",
          classification: "product_reference",
        },
        {
          url: "https://docs.cloud.google.com/apigee/docs/api-security/security-actions",
          family: "docs_reference",
          classification: "product_reference",
        },
        {
          url: "https://docs.cloud.google.com/apigee/docs/api-security/security-actions-api",
          family: "api_reference",
          classification: "api_reference",
        },
        {
          url: "https://docs.cloud.google.com/apigee/docs/api-security/security-scores",
          family: "docs_reference",
          classification: "product_reference",
        },
        {
          url: "https://docs.cloud.google.com/apigee/docs/api-security/security-scores-api",
          family: "api_reference",
          classification: "api_reference",
        },
        {
          url: "https://docs.cloud.google.com/apigee/docs/api-security/security-alerts",
          family: "docs_reference",
          classification: "product_reference",
        },
        {
          url: "https://docs.cloud.google.com/apigee/docs/api-security/abuse-detection",
          family: "docs_reference",
          classification: "product_reference",
        },
        {
          url: "https://docs.cloud.google.com/apigee/docs/api-security/detection-rules",
          family: "docs_reference",
          classification: "product_reference",
        },
        {
          url: "https://docs.cloud.google.com/apigee/docs/api-security/security-reports-api",
          family: "api_reference",
          classification: "api_reference",
        },
        {
          url: "https://docs.cloud.google.com/apigee/docs/api-observation/shadow-api-discovery",
          family: "docs_reference",
          classification: "product_reference",
        },
        {
          url: "https://docs.cloud.google.com/apigee/docs/api-platform/reference/manage-security-add-on",
          family: "docs_reference",
          classification: "product_reference",
        },
        {
          url: "https://docs.cloud.google.com/apigee/docs/api-platform/security/iam/iam-overview",
          family: "iam_reference",
          classification: "iam_reference",
        },
      ];
    case "apigee-monetization":
      return [
        {
          url: "https://docs.cloud.google.com/apigee/docs/api-platform/monetization/overview",
          family: "docs_root",
          classification: "product_root",
        },
        {
          url: "https://docs.cloud.google.com/apigee/docs/api-platform/monetization/manage-rate-plans",
          family: "docs_reference",
          classification: "product_reference",
        },
      ];
    case "apigee-integrated-portal":
      return [
        {
          url: "https://docs.cloud.google.com/apigee/docs/api-platform/publish/intro-portals",
          family: "docs_root",
          classification: "product_root",
        },
        {
          url: "https://docs.cloud.google.com/apigee/docs/api-platform/publish/portal/publish-apis",
          family: "docs_reference",
          classification: "product_reference",
        },
      ];
    case "cloud-run":
      return [
        {
          url: "https://docs.cloud.google.com/run/docs",
          family: "docs_root",
          classification: "product_root",
        },
        {
          url: "https://docs.cloud.google.com/run/docs/overview/what-is-cloud-run",
          family: "docs_root",
          classification: "product_root",
        },
        {
          url: "https://docs.cloud.google.com/run/docs/apis",
          family: "docs_reference",
          classification: "product_reference",
        },
        {
          url: "https://docs.cloud.google.com/run/docs/deploying",
          family: "docs_reference",
          classification: "product_reference",
        },
        {
          url: "https://docs.cloud.google.com/run/docs/configuring",
          family: "docs_reference",
          classification: "product_reference",
        },
        {
          url: "https://docs.cloud.google.com/run/docs/deploy-functions",
          family: "docs_reference",
          classification: "product_reference",
        },
        {
          url: "https://docs.cloud.google.com/run/docs/reference/about-api-versions",
          family: "docs_reference",
          classification: "product_reference",
        },
        {
          url: "https://docs.cloud.google.com/run/docs/reference/authenticate-to-cloud-run-api",
          family: "docs_reference",
          classification: "product_reference",
        },
        {
          url: "https://docs.cloud.google.com/run/docs/reference/cloud-run-admin-api-overview",
          family: "api_reference",
          classification: "api_reference",
        },
        {
          url: "https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-service",
          family: "docs_reference",
          classification: "product_reference",
        },
        {
          url: "https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-fastapi-service",
          family: "docs_reference",
          classification: "product_reference",
        },
        {
          url: "https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-gradio-service",
          family: "docs_reference",
          classification: "product_reference",
        },
        {
          url: "https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-adk-service",
          family: "docs_reference",
          classification: "product_reference",
        },
        {
          url: "https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-langchain-service",
          family: "docs_reference",
          classification: "product_reference",
        },
        {
          url: "https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-streamlit-service",
          family: "docs_reference",
          classification: "product_reference",
        },
        {
          url: "https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-java-service",
          family: "docs_reference",
          classification: "product_reference",
        },
        {
          url: "https://docs.cloud.google.com/run/docs/securing/identity-aware-proxy-cloud-run",
          family: "iam_reference",
          classification: "iam_reference",
        },
      ];
    case "sensitive-data-protection":
      return [
        {
          url: "https://docs.cloud.google.com/sensitive-data-protection/docs",
          family: "docs_root",
          classification: "product_root",
        },
        {
          url: "https://docs.cloud.google.com/sensitive-data-protection/docs/sensitive-data-protection-overview",
          family: "docs_root",
          classification: "product_root",
        },
        {
          url: "https://docs.cloud.google.com/sensitive-data-protection/docs/deidentify-sensitive-data",
          family: "docs_reference",
          classification: "product_reference",
        },
        {
          url: "https://docs.cloud.google.com/sensitive-data-protection/docs/inspecting-storage",
          family: "docs_reference",
          classification: "product_reference",
        },
        {
          url: "https://docs.cloud.google.com/sensitive-data-protection/docs/inspecting-images",
          family: "docs_reference",
          classification: "product_reference",
        },
        {
          url: "https://docs.cloud.google.com/sensitive-data-protection/docs/redacting-sensitive-data-images",
          family: "docs_reference",
          classification: "product_reference",
        },
        {
          url: "https://docs.cloud.google.com/sensitive-data-protection/docs/creating-job-triggers",
          family: "docs_reference",
          classification: "product_reference",
        },
        {
          url: "https://docs.cloud.google.com/sensitive-data-protection/docs/create-inspection-template",
          family: "docs_reference",
          classification: "product_reference",
        },
        {
          url: "https://docs.cloud.google.com/sensitive-data-protection/docs/common-discovery-configurations",
          family: "docs_reference",
          classification: "product_reference",
        },
        {
          url: "https://docs.cloud.google.com/sensitive-data-protection/docs/control-access-based-on-data-sensitivity",
          family: "iam_reference",
          classification: "iam_reference",
        },
        {
          url: "https://docs.cloud.google.com/sensitive-data-protection/docs/classification-redaction",
          family: "docs_reference",
          classification: "product_reference",
        },
        {
          url: "https://docs.cloud.google.com/sensitive-data-protection/docs/data-security",
          family: "docs_reference",
          classification: "product_reference",
        },
        {
          url: "https://docs.cloud.google.com/sensitive-data-protection/docs/analyzing-and-reporting",
          family: "docs_reference",
          classification: "product_reference",
        },
        {
          url: "https://docs.cloud.google.com/sensitive-data-protection/docs/analyze-data-profiles",
          family: "docs_reference",
          classification: "product_reference",
        },
        {
          url: "https://docs.cloud.google.com/sensitive-data-protection/docs/compute-risk-analysis",
          family: "docs_reference",
          classification: "product_reference",
        },
        {
          url: "https://docs.cloud.google.com/sensitive-data-protection/docs/inspect-sensitive-text",
          family: "docs_reference",
          classification: "product_reference",
        },
        {
          url: "https://docs.cloud.google.com/sensitive-data-protection/docs/api-endpoints",
          family: "api_reference",
          classification: "api_reference",
        },
        {
          url: "https://docs.cloud.google.com/sensitive-data-protection/docs/auth",
          family: "iam_reference",
          classification: "iam_reference",
        },
        {
          url: "https://docs.cloud.google.com/sensitive-data-protection/docs/audit-logging",
          family: "iam_reference",
          classification: "iam_reference",
        },
        {
          url: "https://docs.cloud.google.com/sensitive-data-protection/docs/allow-discovery-vpcsc",
          family: "iam_reference",
          classification: "iam_reference",
        },
        {
          url: "https://docs.cloud.google.com/sensitive-data-protection/docs/secrets-discovery",
          family: "docs_reference",
          classification: "product_reference",
        },
        {
          url: "https://docs.cloud.google.com/sensitive-data-protection/docs/reference/rest",
          family: "api_reference",
          classification: "api_reference",
        },
        {
          url: "https://docs.cloud.google.com/sensitive-data-protection/docs/reference/rest/v2",
          family: "api_reference",
          classification: "api_reference",
        },
      ];
    case "cloud-composer":
      return [
        {
          url: "https://docs.cloud.google.com/composer/docs",
          family: "docs_root",
          classification: "product_root",
        },
        {
          url: "https://docs.cloud.google.com/composer/docs/airflow-configurations",
          family: "docs_root",
          classification: "product_root",
        },
        {
          url: "https://docs.cloud.google.com/composer/docs/concepts/airflow-configurations",
          family: "docs_reference",
          classification: "product_reference",
        },
        {
          url: "https://docs.cloud.google.com/composer/docs/composer-versions",
          family: "docs_root",
          classification: "product_root",
        },
        {
          url: "https://docs.cloud.google.com/composer/docs/latest/use-monitoring-dashboard",
          family: "docs_reference",
          classification: "product_reference",
        },
        {
          url: "https://docs.cloud.google.com/composer/docs/composer-2/override-airflow-configurations",
          family: "docs_reference",
          classification: "product_reference",
        },
        {
          url: "https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-web-interface",
          family: "docs_reference",
          classification: "product_reference",
        },
        {
          url: "https://docs.cloud.google.com/composer/docs/composer-1/dag-serialization",
          family: "docs_reference",
          classification: "product_reference",
        },
        {
          url: "https://docs.cloud.google.com/composer/docs/composer-1/known-issues",
          family: "docs_reference",
          classification: "product_reference",
        },
        {
          url: "https://docs.cloud.google.com/composer/docs/composer-1/access-control",
          family: "iam_reference",
          classification: "iam_reference",
        },
        {
          url: "https://docs.cloud.google.com/composer/docs/composer-1/security-practices",
          family: "iam_reference",
          classification: "iam_reference",
        },
        {
          url: "https://docs.cloud.google.com/composer/docs/composer-1/configure-private-ip",
          family: "docs_reference",
          classification: "product_reference",
        },
        {
          url: "https://docs.cloud.google.com/composer/docs/composer-1/cross-project-environment-monitoring-terraform",
          family: "docs_reference",
          classification: "product_reference",
        },
        {
          url: "https://docs.cloud.google.com/composer/docs/reference/rest",
          family: "api_reference",
          classification: "api_reference",
        },
        {
          url: "https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments",
          family: "api_reference",
          classification: "api_reference",
        },
      ];
    case "gmail-api":
      return [
        {
          url: "https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages/insert",
          family: "docs_reference",
          classification: "product_reference",
        },
        {
          url: "https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages/import",
          family: "docs_reference",
          classification: "product_reference",
        },
        {
          url: "https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.history/list",
          family: "docs_reference",
          classification: "product_reference",
        },
        {
          url: "https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.drafts/list",
          family: "docs_reference",
          classification: "product_reference",
        },
        {
          url: "https://developers.google.com/workspace/gmail/markup/overview",
          family: "docs_root",
          classification: "product_root",
        },
        {
          url: "https://developers.google.com/workspace/gmail/markup/highlights",
          family: "docs_root",
          classification: "product_root",
        },
        {
          url: "https://developers.google.com/workspace/gmail/markup/reference",
          family: "docs_reference",
          classification: "product_reference",
        },
        {
          url: "https://developers.google.com/workspace/gmail/markup/actions/actions-overview",
          family: "docs_reference",
          classification: "product_reference",
        },
        {
          url: "https://developers.google.com/workspace/gmail/markup/actions/declaring-actions",
          family: "docs_reference",
          classification: "product_reference",
        },
        {
          url: "https://developers.google.com/workspace/gmail/markup/getting-started",
          family: "docs_reference",
          classification: "product_reference",
        },
        {
          url: "https://developers.google.com/workspace/gmail/markup/registering-with-google",
          family: "docs_reference",
          classification: "product_reference",
        },
        {
          url: "https://developers.google.com/workspace/gmail/markup/reference/order",
          family: "docs_reference",
          classification: "product_reference",
        },
        {
          url: "https://developers.google.com/workspace/gmail/markup/reference/parcel-delivery",
          family: "docs_reference",
          classification: "product_reference",
        },
        {
          url: "https://developers.google.com/workspace/gmail/markup/reference/event-reservation",
          family: "docs_reference",
          classification: "product_reference",
        },
        {
          url: "https://developers.google.com/workspace/gmail/markup/reference/one-click-action",
          family: "docs_reference",
          classification: "product_reference",
        },
        {
          url: "https://developers.google.com/workspace/gmail/markup/reference/go-to-action",
          family: "docs_reference",
          classification: "product_reference",
        },
      ];
    case "workflows":
      return [
        {
          url: "https://docs.cloud.google.com/workflows/docs/reference/stdlib/overview",
          family: "api_reference",
          classification: "api_reference",
        },
        {
          url: "https://docs.cloud.google.com/workflows/docs/reference/googleapis",
          family: "api_reference",
          classification: "api_reference",
        },
        {
          url: "https://docs.cloud.google.com/workflows/docs/reference/stdlib/text/url_decode",
          family: "api_reference",
          classification: "api_reference",
        },
        {
          url: "https://docs.cloud.google.com/workflows/docs/reference/stdlib/text/url_encode_plus",
          family: "api_reference",
          classification: "api_reference",
        },
        {
          url: "https://docs.cloud.google.com/workflows/docs/reference/stdlib/time/parse",
          family: "api_reference",
          classification: "api_reference",
        },
        {
          url: "https://docs.cloud.google.com/workflows/docs/reference/stdlib/map/merge_nested",
          family: "api_reference",
          classification: "api_reference",
        },
        {
          url: "https://docs.cloud.google.com/workflows/docs/reference/syntax/expressions",
          family: "docs_reference",
          classification: "product_reference",
        },
        {
          url: "https://docs.cloud.google.com/workflows/docs/authentication",
          family: "docs_reference",
          classification: "product_reference",
        },
        {
          url: "https://docs.cloud.google.com/iam/docs/roles-permissions/workflows",
          family: "iam_reference",
          classification: "iam_reference",
        },
      ];
    case "google-secops":
    case "google-secops-siem":
      return [
        {
          url: "https://docs.cloud.google.com/chronicle/docs/yara-l/functions",
          family: "docs_reference",
          classification: "product_reference",
        },
        {
          url: "https://docs.cloud.google.com/chronicle/docs/ingestion/default-parsers/threatconnect-ioc-v3",
          family: "docs_reference",
          classification: "product_reference",
        },
        {
          url: "https://docs.cloud.google.com/chronicle/docs/detection/risk-based-alerting",
          family: "docs_reference",
          classification: "product_reference",
        },
      ];
    case "google-distributed-cloud-software-only-for-vmware":
      return [
        {
          url: "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-workstation-configuration-file",
          family: "docs_reference",
          classification: "product_reference",
        },
        {
          url: "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-workstation",
          family: "docs_reference",
          classification: "product_reference",
        },
      ];
    case "apigee-x":
      return [
        { url: "https://docs.cloud.google.com/apigee/docs/api-platform/reference/variables-reference", family: "docs_reference", classification: "product_reference" },
        { url: "https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/ui-overview", family: "docs_root", classification: "product_root" },
        { url: "https://docs.cloud.google.com/apigee/docs/reference/apis/apigee/rest/v1/organizations.apps", family: "api_reference", classification: "api_reference" },
        { url: "https://docs.cloud.google.com/apigee/docs/locations", family: "docs_reference", classification: "product_reference" },
        { url: "https://docs.cloud.google.com/apigee/docs/api-platform/get-started/drz-concepts", family: "docs_reference", classification: "product_reference" },
        { url: "https://docs.cloud.google.com/apigee/docs/deprecations/apigee-classic-ui", family: "docs_reference", classification: "product_reference" },
      ];
    case "apigee-hybrid":
      return [
        { url: "https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/forward-proxy", family: "docs_reference", classification: "product_reference" },
        { url: "https://docs.cloud.google.com/apigee/docs/hybrid/v1.12/allow-gcp-urls", family: "docs_reference", classification: "product_reference" },
        { url: "https://docs.cloud.google.com/apigee/docs/hybrid/v1.16/configure-large-payload-support", family: "docs_reference", classification: "product_reference" },
        { url: "https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/guardrails", family: "docs_reference", classification: "product_reference" },
        { url: "https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/apigee-pull-push", family: "docs_reference", classification: "product_reference" },
      ];
    case "apigee-api-hub":
      return [
        { url: "https://docs.cloud.google.com/apigee/docs/apihub/provision", family: "docs_root", classification: "product_root" },
        { url: "https://docs.cloud.google.com/apigee/docs/apihub/manage-api-deployments", family: "docs_reference", classification: "product_reference" },
        { url: "https://docs.cloud.google.com/apigee/docs/apihub/manage-attributes", family: "docs_reference", classification: "product_reference" },
        { url: "https://docs.cloud.google.com/apigee/docs/apihub/vpc-service-control", family: "docs_reference", classification: "product_reference" },
        { url: "https://docs.cloud.google.com/apigee/docs/apihub/manage-mcp-tools", family: "docs_reference", classification: "product_reference" },
      ];
    case "apigee-integration":
      return [
        { url: "https://docs.cloud.google.com/application-integration/docs/all-triggers-tasks", family: "docs_root", classification: "product_root" },
        { url: "https://docs.cloud.google.com/application-integration/docs/data-mapping-functions-reference", family: "docs_reference", classification: "product_reference" },
        { url: "https://docs.cloud.google.com/application-integration/docs/vpc-service-controls", family: "docs_reference", classification: "product_reference" },
        { url: "https://docs.cloud.google.com/apigee/docs/reference/apis/integrations/rest", family: "api_reference", classification: "api_reference" },
      ];
    case "address-validation-api":
      return [
        { url: "https://developers.google.com/maps/documentation/address-validation/build-validation-logic", family: "docs_root", classification: "product_root" },
        { url: "https://developers.google.com/maps/documentation/address-validation/understand-response", family: "docs_reference", classification: "product_reference" },
        { url: "https://developers.google.com/maps/documentation/address-validation/add-subpremises-address-example", family: "docs_reference", classification: "product_reference" },
        { url: "https://developers.google.com/maps/documentation/address-validation/reference/rest/v1/TopLevel/validateAddress", family: "api_reference", classification: "api_reference" },
      ];
    case "api-gateway":
      return [
        { url: "https://docs.cloud.google.com/api-gateway/docs/about-api-gateway", family: "docs_root", classification: "product_root" },
        { url: "https://docs.cloud.google.com/api-gateway/docs/creating-api-config", family: "docs_reference", classification: "product_reference" },
        { url: "https://docs.cloud.google.com/api-gateway/docs/secure-traffic-gcloud", family: "docs_reference", classification: "product_reference" },
        { url: "https://docs.cloud.google.com/api-gateway/docs/reference", family: "api_reference", classification: "api_reference" },
      ];
    case "access-context-manager":
      return [
        { url: "https://docs.cloud.google.com/access-context-manager/docs/reference/rest", family: "api_reference", classification: "api_reference" },
        { url: "https://docs.cloud.google.com/access-context-manager/docs/reference/rest/Shared.Types/LaunchStage", family: "api_reference", classification: "api_reference" },
      ];
    case "agent-assist":
      return [
        { url: "https://docs.cloud.google.com/agent-assist/docs/features", family: "docs_root", classification: "product_root" },
        { url: "https://docs.cloud.google.com/agent-assist/docs/generative-knowledge-assist", family: "docs_reference", classification: "product_reference" },
        { url: "https://docs.cloud.google.com/agent-assist/docs/custom-events", family: "docs_reference", classification: "product_reference" },
        { url: "https://docs.cloud.google.com/agent-assist/docs/adaptation-model-guide", family: "docs_reference", classification: "product_reference" },
      ];
    case "ai-hypercomputer":
      return [
        { url: "https://docs.cloud.google.com/ai-hypercomputer/docs/choose-strategy", family: "docs_root", classification: "product_root" },
        { url: "https://docs.cloud.google.com/ai-hypercomputer/docs/cluster-capabilities", family: "docs_reference", classification: "product_reference" },
        { url: "https://docs.cloud.google.com/ai-hypercomputer/docs/create/create-vm", family: "docs_reference", classification: "product_reference" },
      ];
    case "app-engine-admin-api":
      return [
        {
          url: "https://docs.cloud.google.com/appengine/docs/standard/services/search/facet-search",
          family: "docs_reference",
          classification: "product_reference",
        },
        {
          url: "https://docs.cloud.google.com/appengine/docs/legacy/standard/python/tools/built-in-libraries-27",
          family: "docs_reference",
          classification: "product_reference",
        },
      ];
    case "app-engine-standard-environment-node-js":
      return [
        {
          url: "https://docs.cloud.google.com/appengine/docs/standard/services/search/facet-search",
          family: "docs_reference",
          classification: "product_reference",
        },
        {
          url: "https://docs.cloud.google.com/appengine/docs/legacy/standard/python/tools/built-in-libraries-27",
          family: "docs_reference",
          classification: "product_reference",
        },
      ];
    case "apps-script":
      return [
        {
          url: "https://developers.google.com/apps-script/reference/spreadsheet/data-validation-criteria",
          family: "docs_reference",
          classification: "product_reference",
        },
        {
          url: "https://developers.google.com/apps-script/reference/spreadsheet/data-validation-builder",
          family: "docs_reference",
          classification: "product_reference",
        },
      ];
    case "bigquery":
      return [
        {
          url: "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql",
          family: "docs_reference",
          classification: "product_reference",
        },
        {
          url: "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/geography_functions",
          family: "docs_reference",
          classification: "product_reference",
        },
        {
          url: "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/json_functions",
          family: "docs_reference",
          classification: "product_reference",
        },
        {
          url: "https://docs.cloud.google.com/bigquery/docs/information-schema-project-options-changes",
          family: "docs_reference",
          classification: "product_reference",
        },
        {
          url: "https://docs.cloud.google.com/bigquery/docs/information-schema-organization-options-changes",
          family: "docs_reference",
          classification: "product_reference",
        },
        {
          url: "https://docs.cloud.google.com/bigquery/docs/managing-datasets",
          family: "docs_reference",
          classification: "product_reference",
        },
        {
          url: "https://docs.cloud.google.com/bigquery/docs/use-bigquery-mcp",
          family: "docs_reference",
          classification: "product_reference",
        },
        {
          url: "https://docs.cloud.google.com/mcp/control-mcp-use-organization",
          family: "docs_reference",
          classification: "product_reference",
        },
        {
          url: "https://docs.cloud.google.com/bigquery/docs/dts-introduction",
          family: "docs_reference",
          classification: "product_reference",
        },
        {
          url: "https://docs.cloud.google.com/bigquery/docs/samples/bigquerydatatransfer-copy-dataset",
          family: "docs_reference",
          classification: "product_reference",
        },
        {
          url: "https://docs.cloud.google.com/bigquery/docs/reference/reservations/rest",
          family: "api_reference",
          classification: "api_reference",
        },
      ];
    case "cloud-build":
      return [
        {
          url: "https://docs.cloud.google.com/build/docs/api/reference/rest",
          family: "api_reference",
          classification: "api_reference",
        },
      ];
    case "cloud-data-fusion":
      return [
        {
          url: "https://docs.cloud.google.com/monitoring/api/resources",
          family: "docs_reference",
          classification: "product_reference",
        },
      ];
    case "cloud-logging":
      return [
        {
          url: "https://docs.cloud.google.com/logging/docs/agent/logging/configuration",
          family: "docs_reference",
          classification: "product_reference",
        },
      ];
    case "cloud-load-balancing":
      return [
        {
          url: "https://docs.cloud.google.com/load-balancing/docs/network/networklb-monitoring",
          family: "docs_reference",
          classification: "product_reference",
        },
        {
          url: "https://docs.cloud.google.com/load-balancing/docs/internal",
          family: "docs_reference",
          classification: "product_reference",
        },
        {
          url: "https://docs.cloud.google.com/load-balancing/docs/features",
          family: "docs_reference",
          classification: "product_reference",
        },
      ];
    case "cloud-sql-for-mysql":
    case "cloud-sql-for-sql-server":
      return [
        {
          url: "https://docs.cloud.google.com/mcp/control-mcp-use-organization",
          family: "docs_reference",
          classification: "product_reference",
        },
        {
          url: productSlug === "cloud-sql-for-sql-server"
            ? "https://docs.cloud.google.com/sql/docs/sqlserver/use-cloudsql-mcp"
            : "https://docs.cloud.google.com/sql/docs/mysql/use-cloudsql-mcp",
          family: "docs_reference",
          classification: "product_reference",
        },
      ];
    case "compute-engine":
      return [
        {
          url: "https://docs.cloud.google.com/mcp/control-mcp-use-organization",
          family: "docs_reference",
          classification: "product_reference",
        },
        {
          url: "https://docs.cloud.google.com/compute/docs/use-compute-engine-mcp",
          family: "docs_reference",
          classification: "product_reference",
        },
        {
          url: "https://docs.cloud.google.com/compute/docs/access/organization-policies",
          family: "docs_reference",
          classification: "product_reference",
        },
        {
          url: "https://docs.cloud.google.com/compute/docs/reference/mcp",
          family: "api_reference",
          classification: "api_reference",
        },
        {
          url: "https://docs.cloud.google.com/compute/docs/instance-groups/creating-groups-of-managed-instances",
          family: "docs_reference",
          classification: "product_reference",
        },
        {
          url: "https://docs.cloud.google.com/compute/docs/instance-groups/distributing-instances-with-regional-instance-groups",
          family: "docs_reference",
          classification: "product_reference",
        },
        {
          url: "https://docs.cloud.google.com/compute/docs/general-purpose-machines",
          family: "docs_reference",
          classification: "product_reference",
        },
      ];
    case "confidential-space":
      return [
        {
          url: "https://docs.cloud.google.com/confidential-computing/confidential-space/docs/confidential-space-images",
          family: "docs_reference",
          classification: "product_reference",
        },
        {
          url: "https://docs.cloud.google.com/confidential-computing/confidential-space/docs/reference/attestation-assertions",
          family: "api_reference",
          classification: "api_reference",
        },
        {
          url: "https://docs.cloud.google.com/confidential-computing/confidential-space/docs/create-grant-access-confidential-resources",
          family: "docs_reference",
          classification: "product_reference",
        },
      ];
    case "dataflow":
      return [
        {
          url: "https://docs.cloud.google.com/dataflow/docs/concepts/regional-endpoints",
          family: "docs_reference",
          classification: "product_reference",
        },
        {
          url: "https://docs.cloud.google.com/dataflow/docs/resources/locations",
          family: "docs_reference",
          classification: "product_reference",
        },
      ];
    case "buildpacks":
      return [
        {
          url: "https://docs.cloud.google.com/docs/buildpacks/go",
          family: "docs_reference",
          classification: "product_reference",
        },
        {
          url: "https://docs.cloud.google.com/docs/buildpacks/osonly",
          family: "docs_reference",
          classification: "product_reference",
        },
      ];
    case "sap-on-google-cloud":
      return [
        {
          url: "https://docs.cloud.google.com/sap/docs/sap-hana-ha-config-sles",
          family: "docs_reference",
          classification: "product_reference",
        },
        {
          url: "https://docs.cloud.google.com/sap/docs/sap-hana-ha-dm-deployment",
          family: "docs_reference",
          classification: "product_reference",
        },
      ];
    case "anthos-attached-clusters":
      return [
        {
          url: "https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/generic/how-to/connect-to-cluster",
          family: "docs_reference",
          classification: "product_reference",
        },
      ];
    case "anthos-clusters-on-aws-previous-generation":
      return [
        {
          url: "https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/how-to/use-efs",
          family: "docs_reference",
          classification: "product_reference",
        },
        {
          url: "https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/storage",
          family: "docs_reference",
          classification: "product_reference",
        },
      ];
    case "app-hub":
      return [
        {
          url: "https://docs.cloud.google.com/app-hub/docs/supported-resources",
          family: "docs_reference",
          classification: "product_reference",
        },
        {
          url: "https://docs.cloud.google.com/app-hub/docs/register-resources",
          family: "docs_reference",
          classification: "product_reference",
        },
      ];
    case "carbon-footprint":
      return [
        {
          url: "https://docs.cloud.google.com/carbon-footprint/docs/data-schema",
          family: "docs_reference",
          classification: "product_reference",
        },
        {
          url: "https://docs.cloud.google.com/carbon-footprint/docs/view-carbon-data",
          family: "docs_reference",
          classification: "product_reference",
        },
      ];
    case "google-workspace-admin-sdk":
      return [
        {
          url: "https://developers.google.com/workspace/admin/directory/reference/rest/v1/users/list",
          family: "api_reference",
          classification: "api_reference",
        },
        {
          url: "https://developers.google.com/workspace/admin/directory/v1/guides/search-users",
          family: "docs_reference",
          classification: "product_reference",
        },
      ];
    case "looker":
      return [
        {
          url: "https://docs.cloud.google.com/looker/docs/chart-config-editor",
          family: "docs_reference",
          classification: "product_reference",
        },
        {
          url: "https://docs.cloud.google.com/looker/docs/studio/connect-to-google-bigquery",
          family: "docs_reference",
          classification: "product_reference",
        },
        {
          url: "https://docs.cloud.google.com/bigquery/docs/information-schema-jobs",
          family: "docs_reference",
          classification: "product_reference",
        },
      ];
    case "looker-studio":
      return [
        {
          url: "https://developers.google.com/looker-studio/connector/reference",
          family: "docs_reference",
          classification: "product_reference",
        },
        {
          url: "https://docs.cloud.google.com/looker/docs/studio/nativedimension",
          family: "docs_reference",
          classification: "product_reference",
        },
      ];
    case "managed-service-for-microsoft-active-directory":
      return [
        {
          url: "https://docs.cloud.google.com/managed-microsoft-ad/docs/hardening",
          family: "docs_reference",
          classification: "product_reference",
        },
      ];
    case "maps-sdk-for-android":
      return [
        {
          url: "https://developers.google.com/maps/documentation/android-sdk/config",
          family: "docs_reference",
          classification: "product_reference",
        },
      ];
    case "resource-manager":
      return [
        {
          url: "https://docs.cloud.google.com/mcp/overview",
          family: "docs_reference",
          classification: "product_reference",
        },
        {
          url: "https://docs.cloud.google.com/mcp/manage-mcp-servers",
          family: "docs_reference",
          classification: "product_reference",
        },
        {
          url: "https://docs.cloud.google.com/mcp/prevent-read-write-tool-use",
          family: "docs_reference",
          classification: "product_reference",
        },
        {
          url: "https://docs.cloud.google.com/mcp/control-mcp-use-organization",
          family: "docs_reference",
          classification: "product_reference",
        },
      ];
    case "storage-transfer-service":
      return [
        {
          url: "https://docs.cloud.google.com/storage-transfer/docs/on-prem-vpc-sc",
          family: "docs_reference",
          classification: "product_reference",
        },
      ];
    case "text-to-speech":
      return [
        {
          url: "https://docs.cloud.google.com/text-to-speech/docs/reference/rest",
          family: "api_reference",
          classification: "api_reference",
        },
        {
          url: "https://docs.cloud.google.com/text-to-speech/docs/libraries",
          family: "docs_reference",
          classification: "product_reference",
        },
      ];
    case "vertex-ai":
      return [
        {
          url: "https://docs.cloud.google.com/vertex-ai/docs/python-sdk/use-vertex-ai-python-sdk-ref",
          family: "docs_reference",
          classification: "product_reference",
        },
        {
          url: "https://docs.cloud.google.com/vertex-ai/docs/start/install-sdk-ref",
          family: "docs_reference",
          classification: "product_reference",
        },
      ];
    case "certificate-authority-service":
      return [
        {
          url: "https://docs.cloud.google.com/certificate-authority-service/docs/certificate-authority-compliance",
          family: "docs_reference",
          classification: "product_reference",
        },
      ];
    case "cloud-healthcare-api":
      return [
        {
          url: "https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-resources",
          family: "docs_reference",
          classification: "product_reference",
        },
        {
          url: "https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-search",
          family: "docs_reference",
          classification: "product_reference",
        },
        {
          url: "https://docs.cloud.google.com/healthcare-api/docs/reference/rest",
          family: "api_reference",
          classification: "api_reference",
        },
      ];
    case "error-reporting":
      return [
        {
          url: "https://docs.cloud.google.com/error-reporting/docs/troubleshooting",
          family: "docs_reference",
          classification: "product_reference",
        },
        {
          url: "https://docs.cloud.google.com/error-reporting/docs/setup/compute-engine",
          family: "docs_reference",
          classification: "product_reference",
        },
        {
          url: "https://docs.cloud.google.com/error-reporting/docs/setup/kubernetes-engine",
          family: "docs_reference",
          classification: "product_reference",
        },
        {
          url: "https://docs.cloud.google.com/error-reporting/docs/setup/ec2",
          family: "docs_reference",
          classification: "product_reference",
        },
      ];
    case "firestore":
      return [
        {
          url: "https://docs.cloud.google.com/mcp/control-mcp-use-organization",
          family: "docs_reference",
          classification: "product_reference",
        },
        {
          url: "https://docs.cloud.google.com/firestore/native/docs/use-firestore-mcp",
          family: "docs_reference",
          classification: "product_reference",
        },
        {
          url: "https://docs.cloud.google.com/firestore/native/docs/secure-agent-interactions-mcp",
          family: "docs_reference",
          classification: "product_reference",
        },
        {
          url: "https://docs.cloud.google.com/firestore/docs/reference/mcp",
          family: "api_reference",
          classification: "api_reference",
        },
      ];
    case "google-cloud-contact-center-as-a-service":
      return [
        {
          url: "https://docs.cloud.google.com/contact-center/ccai-platform/docs/apps-api",
          family: "docs_reference",
          classification: "product_reference",
        },
        {
          url: "https://docs.cloud.google.com/contact-center/ccai-platform/docs/mid-session-authentication-apps-api",
          family: "docs_reference",
          classification: "product_reference",
        },
        {
          url: "https://docs.cloud.google.com/contact-center/ccai-platform/docs/apps-api-end-user",
          family: "docs_reference",
          classification: "product_reference",
        },
        {
          url: "https://docs.cloud.google.com/contact-center/ccai-platform/docs/apps-api-call",
          family: "docs_reference",
          classification: "product_reference",
        },
        {
          url: "https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings",
          family: "docs_reference",
          classification: "product_reference",
        },
        {
          url: "https://docs.cloud.google.com/contact-center/ccai-platform/docs/apps-api-sms",
          family: "docs_reference",
          classification: "product_reference",
        },
      ];
    case "google-cloud-mcp-servers":
      return [
        {
          url: "https://docs.cloud.google.com/mcp/control-mcp-use-organization",
          family: "docs_reference",
          classification: "product_reference",
        },
        {
          url: "https://docs.cloud.google.com/mcp/control-mcp-use-iam",
          family: "docs_reference",
          classification: "product_reference",
        },
        {
          url: "https://docs.cloud.google.com/mcp/prevent-read-write-tool-use",
          family: "docs_reference",
          classification: "product_reference",
        },
      ];
    case "cloud-deploy":
      return [
        {
          url: "https://docs.cloud.google.com/deploy/docs/api/reference/rest/v1/projects.locations.deliveryPipelines.releases.rollouts/create",
          family: "api_reference",
          classification: "api_reference",
        },
        {
          url: "https://docs.cloud.google.com/deploy/docs/deployment-strategies/manage-rollout",
          family: "docs_reference",
          classification: "product_reference",
        },
        {
          url: "https://docs.cloud.google.com/deploy/docs/promote-release",
          family: "docs_reference",
          classification: "product_reference",
        },
      ];
    case "google-cloud-vmware-engine":
      return [
        {
          url: "https://docs.cloud.google.com/vmware-engine/docs/vmware-platform/howto-access-management",
          family: "docs_reference",
          classification: "product_reference",
        },
        {
          url: "https://docs.cloud.google.com/vmware-engine/docs/private-clouds/howto-elevate-privilege",
          family: "docs_reference",
          classification: "product_reference",
        },
        {
          url: "https://docs.cloud.google.com/vmware-engine/docs/concepts-permission-model",
          family: "docs_reference",
          classification: "product_reference",
        },
        {
          url: "https://docs.cloud.google.com/vmware-engine/docs/best-practices-security",
          family: "docs_reference",
          classification: "product_reference",
        },
      ];
    default:
      return [];
  }
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

  if (/\/(?:core-)?release-notes(?:\/|$)/.test(pathname)) {
    score -= 500;
  }

  if (family === "docs_root") {
    if (/\/docs$/.test(pathname)) score += 80;
    if (/\/docs\/(overview|introduction)$/.test(pathname)) score += 40;
    if (/^\/translate\/docs\/intro-to-v3$/.test(pathname)) score += 100;
    if (/^\/translate\/docs\/advanced\//.test(pathname)) score -= 80;
    if (/^\/workspace\/gmail\/api\/guides(?:\/|$)/.test(pathname)) score += 120;
    if (/^\/workspace\/meet\/api\/guides\/overview(?:\/|$)/.test(pathname)) score += 120;
    if (/^\/admin-sdk\/overview(?:\/|$)/.test(pathname)) score += 120;
    if (/^\/workspace\/admin\/sdk(?:\/|$)/.test(pathname)) score += 160;
    if (/^\/bigquery\/docs$/.test(pathname)) score += 120;
    if (/^\/unified-maintenance\/docs(?:\/|$)/.test(pathname)) score += 120;
    if (/^\/video-intelligence\/docs(?:\/|$)/.test(pathname)) score += 120;
    if (/^\/vpc-service-controls\/docs(?:\/|$)/.test(pathname)) score += 120;
    if (/^\/vertex-ai\/docs\/start\/introduction-unified-platform(?:\/|$)/.test(pathname)) score += 120;
    if (/^\/appengine\/docs\/flexible\/nodejs\/runtime(?:\/|$)/.test(pathname)) score += 120;
    if (/^\/appengine\/docs\/standard\/[^/]+\/runtime(?:\/|$)/.test(pathname)) score += 120;
    if (/^\/workspace\/sheets\/api\/guides\/concepts(?:\/|$)/.test(pathname)) score += 120;
    if (/^\/workspace\/tasks\/overview(?:\/|$)/.test(pathname)) score += 120;
    if (/^\/workspace\/vault\/guides(?:\/|$)/.test(pathname)) score += 120;
    if (/^\/maps\/documentation\/routes\/overview(?:\/|$)/.test(pathname)) score += 120;
    if (/^\/chronicle\/docs\/secops\/secops-overview(?:\/|$)/.test(pathname)) score += 120;
    if (/^\/apigee\/docs\/hybrid\/v[\d.]+\/what-is-hybrid(?:\/|$)/.test(pathname)) score += 120;
    if (/^\/chronicle\/docs\/secops$/.test(pathname)) score -= 140;
    if (/^\/chronicle\/docs\/administration(?:\/|$)/.test(pathname)) score -= 180;
    if (!appEngineExpectedRuntimeMatches(source?.product_slug, pathname)) score -= 500;
  }
  if (family === "docs_reference") {
    if (/\/docs\/reference$/.test(pathname)) score += 80;
    if (/\/docs\/apis$/.test(pathname)) score += 70;
    if (/^\/bigquery\/docs\/reference\/standard-sql(?:\/|$)/.test(pathname)) score += 240;
    if (/^\/bigquery\/docs\/reference\/standard-sql\/functions-all(?:\/|$)/.test(pathname)) score += 220;
    if (/^\/translate\/docs\/reference\/api-overview$/.test(pathname)) score += 100;
    if (/^\/translate\/docs\/advanced\/(automl-models|automl-prepare|custom-translation-quickstart|automl-datasets|translate-documents)$/.test(pathname)) score += 40;
    if (/^\/dotnet\/docs\/reference\/google\.cloud\.translate\.v3\//.test(pathname) || /^\/php\/docs\/reference\/cloud-translate\//.test(pathname)) score -= 160;
    if (/^\/workspace\/gmail\/api\/reference\/rest(?:\/|$)/.test(pathname)) score += 140;
    if (/^\/workspace\/meet\/api\/reference\/rest\/v2(?:\/|$)/.test(pathname)) score += 140;
    if (/^\/admin-sdk\/reference-overview(?:\/|$)/.test(pathname)) score += 120;
    if (/^\/workspace\/admin\/reports\/v1\/guides\/manage-audit-login(?:\/|$)/.test(pathname)) score += 260;
    if (/^\/workspace\/admin\/reports\/v1\/appendix\/activity\/login(?:\/|$)/.test(pathname)) score += 220;
    if (/^\/workspace\/sheets\/api\/reference\/rest(?:\/|$)/.test(pathname)) score += 140;
    if (/^\/workspace\/tasks\/reference\/rest(?:\/|$)/.test(pathname)) score += 140;
    if (/^\/workspace\/vault\/reference\/rest(?:\/|$)/.test(pathname)) score += 140;
    if (/^\/maps\/documentation\/routes\/compute-route-over(?:\/|$)/.test(pathname)) score += 120;
    if (/^\/service-catalog\/docs\/concepts(?:\/|$)/.test(pathname)) score += 120;
    if (/^\/bigquery\/docs\/(reference|release-notes|admin-intro|routines|reservations-workload-management)(?:\/|$)/.test(pathname)) score += 120;
    if (/^\/bigquery\/docs\/(migration-intro|migration\/pipelines|ml-pipelines-overview|create-pipelines|dts-introduction)(?:\/|$)/.test(pathname)) score += 120;
    if (/^\/bigquery\/docs\/(pipeline-connection-page|data-insights|use-bigquery-migration-mcp|migration-custom-org-policies)(?:\/|$)/.test(pathname)) score += 120;
    if (/^\/unified-maintenance\/docs\/(set-up-unified-maintenance|view-maintenance-api)(?:\/|$)/.test(pathname)) score += 120;
    if (/^\/video-intelligence\/docs\/(apis|reference\/api-overview)(?:\/|$)/.test(pathname)) score += 120;
    if (/^\/vpc-service-controls\/docs\/service-perimeters(?:\/|$)/.test(pathname)) score += 120;
    if (/^\/appengine\/docs\/flexible\/nodejs\/(configuring-your-app-with-app-yaml|specifying-dependencies|release-notes)(?:\/|$)/.test(pathname)) score += 120;
    if (/^\/appengine\/docs\/(standard|flexible)\/[^/]+\/(configuring-your-app-with-app-yaml|specifying-dependencies|release-notes|create-app|building-app|services\/access|upgrade-[^/]+runtime|customizing-the-python-runtime)(?:\/|$)/.test(pathname)) score += 120;
    if (/^\/appengine\/docs\/flexible\/custom-runtimes\/(build|configuring-your-app-with-app-yaml|create-app|release-notes)(?:\/|$)/.test(pathname)) score += 120;
    if (/^\/appengine\/docs\/standard\/services\/search\/facet-search(?:\/|$)/.test(pathname)) score += 320;
    if (/^\/appengine\/docs\/legacy\/standard\/python\/tools\/built-in-libraries-27(?:\/|$)/.test(pathname)) score += 320;
    if (/^\/apigee\/docs\/hybrid\/(release-notes|v[\d.]+\/config-prop-ref|v[\d.]+\/install-before-begin|v[\d.]+\/data-collection-with-data-residency)(?:\/|$)/.test(pathname)) score += 120;
    if (/^\/admin-sdk\/reports\/v1\/guides\/manage-audit-login(?:\/|$)/.test(pathname)) score += 180;
    if (/^\/admin-sdk\/reports\/v1\/appendix\/activity\/login(?:\/|$)/.test(pathname)) score += 180;
    if (/^\/vision-ai\/docs\/(build-app|create-manage-streams|how-to|warehouse-overview)(?:\/|$)/.test(pathname)) score += 120;
    if (/^\/agent-builder\/agent-engine\/overview(?:\/|$)/.test(pathname)) score += 120;
    if (/^\/agent-builder\/(agent-development-kit\/overview|agent-engine\/develop\/overview|release-notes)(?:\/|$)/.test(pathname)) score += 120;
    if (/^\/vertex-ai\/docs\/(reference|core-release-notes|pipelines\/introduction)(?:\/|$)/.test(pathname)) score += 120;
    if (/^\/vertex-ai\/docs\/workbench\/reference(?:\/|$)/.test(pathname)) score += 120;
    if (/^\/generative-ai-app-builder\/docs\/data-source-access-control(?:\/|$)/.test(pathname)) score += 120;
    if (/^\/chronicle\/docs\/secops\/understand-the-secops-platform(?:\/|$)/.test(pathname)) score += 120;
    if (/^\/go\/docs\/reference\/cloud\.google\.com\/go\/apps\/latest\/meet\/apiv2(?:\/|$)/.test(pathname)) score -= 240;
    if (/^\/workspace\/gmail\/api\/reference(?:\/|$)/.test(pathname) || /^\/workspace\/meet\/api\/reference(?:\/|$)/.test(pathname)) score -= 180;
    if (/^\/workspace\/sheets\/api\/reference(?:\/|$)/.test(pathname)) score -= 180;
    if (/^\/tasks\/reference\/rest\/v1\/tasks(?:\/|$)/.test(pathname)) score -= 220;
    if (/^\/service-catalog\/docs\/create-catalog(?:\/|$)/.test(pathname)) score -= 160;
    if (/^\/bigquery\/docs\/reference\/auditlogs\/rest(?:\/|$)/.test(pathname)) score -= 220;
    if (/^\/bigquery\/docs\/reference\/libraries(?:\/|$)/.test(pathname)) score -= 240;
    if (/^\/bigquery\/docs\/reference\/standard-sql\/graph-intro(?:\/|$)/.test(pathname)) score -= 200;
    if (/^\/appengine\/docs\/(standard|flexible)\/apis(?:\/|$)/.test(pathname)) score -= 180;
    if (/^\/chronicle\/docs\/onboard(?:\/|$)/.test(pathname)) score -= 180;
    if (/^\/vertex-ai\/docs\/workbench\/reference\/libraries(?:\/|$)/.test(pathname)) score -= 180;
    if (!appEngineExpectedRuntimeMatches(source?.product_slug, pathname)) score -= 500;
  }
  if (family === "api_reference") {
    if (/\/reference\/(rest|rpc)$/.test(pathname)) score += 70;
    if (/\/reference\/rest\/.+/.test(pathname) || /\/reference\/rpc\/.+/.test(pathname)) score -= 60;
    if (/^\/admin-sdk\/(directory|reports)\/reference\/rest(?:\/|$)/.test(pathname)) score += 140;
    if (/^\/chronicle\/docs\/reference\/google-unified-security(?:\/|$)/.test(pathname)) score += 120;
    if (/^\/chronicle\/docs\/reference\/google-secops-api-libraries-overview(?:\/|$)/.test(pathname)) score += 120;
    if (/^\/generative-ai-app-builder\/docs\/builder-apis(?:\/|$)/.test(pathname)) score += 120;
    if (/^\/vertex-ai\/docs\/workbench\/reference\/rest(?:\/|$)/.test(pathname)) score += 120;
    if (/^\/bigquery\/docs\/reference\/rest(?:\/|$)/.test(pathname)) score += 120;
    if (/^\/unified-maintenance\/docs\/reference\/rpc\/google\.cloud\.maintenance\.api\.v1(?:\/|$)/.test(pathname)) score += 120;
    if (/^\/video-intelligence\/docs\/reference\/rest(?:\/|$)/.test(pathname)) score += 120;
    if (/^\/vertex-ai\/docs\/reference\/rest(?:\/|$)/.test(pathname)) score += 120;
    if (/^\/generative-ai-app-builder\/docs\/reference(?:\/|$)/.test(pathname)) score -= 220;
    if (/^\/vertex-ai\/docs\/workbench\/reference\/libraries(?:\/|$)/.test(pathname)) score -= 180;
  }
  if (family === "iam_reference") {
    if (/\/roles-permissions\//.test(pathname)) score += 80;
    if (/\/(iam-and-access-control|access-control|iam-roles|iam-permissions)$/.test(pathname)) score += 60;
    if (/\/samples?\//.test(pathname) || /\/guides\//.test(pathname)) score -= 50;
    if (/^\/translate\/docs\/access-control$/.test(pathname)) score += 120;
    if (/^\/translate\/docs\/advanced\/automl-beginner$/.test(pathname)) score -= 160;
    if (/^\/distributed-cloud\/edge\/.+\/vpn-connections(?:\/|$)/.test(pathname)) score -= 200;
    if (/^\/network-connectivity\/docs\/vpn\/concepts\/best-practices(?:\/|$)/.test(pathname)) score -= 120;
    if (/^\/admin-sdk\/(directory\/v1\/guides\/authorizing|reports\/auth|reports\/v1\/guides\/authorizing)(?:\/|$)/.test(pathname)) score += 160;
    if (/^\/workspace\/gmail\/api\/auth\/(scopes|web-server)(?:\/|$)/.test(pathname)) score += 160;
    if (/^\/workspace\/meet\/api\/guides\/authenticate-authorize(?:\/|$)/.test(pathname)) score += 160;
    if (/^\/workspace\/sheets\/api\/scopes(?:\/|$)/.test(pathname)) score += 160;
    if (/^\/workspace\/tasks\/auth(?:\/|$)/.test(pathname)) score += 160;
    if (/^\/workspace\/vault\/auth(?:\/|$)/.test(pathname)) score += 160;
    if (/^\/maps\/documentation\/routes\/get-api-key(?:\/|$)/.test(pathname)) score += 140;
    if (/^\/bigquery\/docs\/access-control(?:\/|$)/.test(pathname)) score += 160;
    if (/^\/translate\/docs\/access-control(?:\/|$)/.test(pathname)) score += 160;
    if (/^\/vpc-service-controls\/docs\/(access-control|configure-iam-roles)(?:\/|$)/.test(pathname)) score += 160;
    if (/^\/apigee\/docs\/hybrid\/v[\d.]+\/(sa-about|enable-workload-identity|install-enable-control-plane-access)(?:\/|$)/.test(pathname)) score += 160;
    if (/^\/apigee\/docs\/hybrid\/v[\d.]+\/(sa-authentication-methods|install-sa-authentication)(?:\/|$)/.test(pathname)) score += 160;
    if (/^\/agent-builder\/(authentication|agent-engine\/manage\/access|agent-engine\/agent-identity)(?:\/|$)/.test(pathname)) score += 160;
    if (/^\/vertex-ai\/docs\/general\/access-control(?:\/|$)/.test(pathname)) score += 140;
    if (/^\/video-intelligence\/docs\/authentication(?:\/|$)/.test(pathname)) score += 160;
    if (/^\/generative-ai-app-builder\/docs\/access-control(?:\/|$)/.test(pathname)) score -= 220;
    if (/^\/chronicle\/docs\/reference\/feature-rbac-permissions-roles(?:\/|$)/.test(pathname) || /^\/chronicle\/docs\/onboard\/configure-cloud-authentication(?:\/|$)/.test(pathname)) score += 140;
    if (/^\/chronicle\/docs\/reference\/authentication(?:\/|$)/.test(pathname)) score += 140;
    if (/^\/generative-ai-app-builder\/docs\/authentication(?:\/|$)/.test(pathname)) score += 140;
    if (/^\/integration-connectors\/docs\/connectors\/gsc_admin_sdk\/configure(?:\/|$)/.test(pathname)) score -= 260;
    if (/^\/generative-ai-app-builder\/docs\/access-control(?:\/|$)/.test(pathname)) score -= 120;
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

function selectSources(ranking, featureInventory, options = {}) {
  const broaden = options.broaden === true;
  const ranked = Array.isArray(ranking.scored_urls) ? ranking.scored_urls : [];
  const candidatesByFamily = new Map();
  const featureCount = Number(featureInventory?.feature_count || 0);

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

    const budget = adaptiveBudgetForFamily(family, featureCount, broaden, ranking.product_slug);
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
      matched_feature_phrases: Array.isArray(candidate.api_score?.matched_feature_phrases) ? candidate.api_score.matched_feature_phrases : [],
      max_depth: budget.maxDepth,
      max_pages: budget.maxPages,
    });
  }

  const selected = familyPriority
    .filter((family) => candidatesByFamily.has(family))
    .flatMap((family) => candidatesByFamily.get(family)
      .sort((a, b) => familySelectionScore(b) - familySelectionScore(a) || b.matched_feature_phrases.length - a.matched_feature_phrases.length || a.url.localeCompare(b.url))
      .slice(0, familySelectionLimit(family, featureCount, broaden, ranking.product_slug))
      .map((source, index) => ({ ...source, source_id: `${sourceIdForFamily(family)}${index === 0 ? "" : `-${index + 1}`}` })));

  const selectedUrlSet = new Set(selected.map((source) => normalizeUrl(source.url)));
  for (const requiredSource of requiredSelectedUrls(ranking.product_slug)) {
    const requiredUrl = normalizeUrl(requiredSource.url);
    if (selectedUrlSet.has(requiredUrl)) {
      continue;
    }
    const candidate = ranked.find((entry) => entry?.keep && normalizeUrl(entry.url) === requiredUrl);
    const classification = String(candidate?.api_score?.classification || requiredSource.classification || "").trim();
    const family = requiredSource.family || familyForClassification(classification);
    if (!family) {
      continue;
    }
    const budget = adaptiveBudgetForFamily(family, featureCount, broaden, ranking.product_slug);
    const familyCount = selected.filter((source) => source.family === family).length;
    selected.push({
      source_id: `${sourceIdForFamily(family)}-required-${familyCount + 1}`,
      product_slug: ranking.product_slug,
      family,
      classification,
      url: requiredUrl,
      final_score: Number(candidate?.final_score || 999),
      best_rank: Number(candidate?.best_rank || 0),
      matched_feature_phrases: Array.isArray(candidate?.api_score?.matched_feature_phrases) ? candidate.api_score.matched_feature_phrases : [],
      max_depth: budget.maxDepth,
      max_pages: budget.maxPages,
    });
    selectedUrlSet.add(requiredUrl);
  }

  return selected;
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

function buildSelectionDocument(ranking, rankingPath, selectedSources, productDir, featureInventory, options = {}) {
  return {
    schema_version: schemaVersion,
    generated_at: new Date().toISOString(),
    product_name: ranking.product_name,
    product_slug: ranking.product_slug,
    step03_ranking_path: relativeToCwd(rankingPath),
    source_selection_strategy: {
      type: "coverage-aware-multi-seed-per-family",
      broadened_retry: options.broaden === true,
      families: familyPriority.filter((family) => selectedSources.some((source) => source.family === family)),
      feature_count: Number(featureInventory?.feature_count || 0),
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

async function loadCorpusDocuments(productDir) {
  const siteDir = path.join(productDir, knowKey, "site");
  if (!(await exists(siteDir))) {
    return [];
  }
  const sourceDirs = (await readdir(siteDir, { withFileTypes: true }))
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort();
  const documents = [];
  for (const sourceId of sourceDirs) {
    const pages = await readPagesIndex(productDir, sourceId);
    for (const page of pages) {
      const relativePath = String(page?.path || "");
      if (!relativePath) continue;
      const markdownPath = path.join(siteDir, sourceId, relativePath);
      const markdown = await readFile(markdownPath, "utf8").catch(() => "");
      documents.push({
        source_id: sourceId,
        url: String(page?.url || "").trim(),
        title: normalizeText(String(page?.title || "")),
        body: normalizeText(markdown),
      });
    }
  }
  return documents;
}

function assessCorpusHealth(featureInventory, summaries, documents) {
  const featureCount = Number(featureInventory?.feature_count || 0);
  const minPageCount = featureCount >= 250 ? 28 : featureCount >= 100 ? 18 : featureCount >= 40 ? 10 : 6;
  const minUniqueUrlCount = featureCount >= 250 ? 22 : featureCount >= 100 ? 14 : featureCount >= 40 ? 8 : 5;
  const minSourceFamilies = featureCount >= 120 ? 3 : 2;
  const uniqueUrls = new Set(summaries.flatMap((summary) => Array.isArray(summary.urls) ? summary.urls : []));
  const nonEmptyFamilies = summaries.filter((summary) => Number(summary.page_count || 0) > 0).length;
  const tokenMatches = new Set();
  const phraseMatches = new Set();
  const tokens = Array.isArray(featureInventory?.top_tokens) ? featureInventory.top_tokens.slice(0, 40) : [];
  const phrases = Array.isArray(featureInventory?.top_phrases) ? featureInventory.top_phrases.slice(0, 20) : [];
  for (const document of documents) {
    const text = `${document.title} ${document.body} ${document.url}`;
    for (const token of tokens) {
      if (text.includes(token)) tokenMatches.add(token);
    }
    for (const phrase of phrases) {
      if (text.includes(phrase)) phraseMatches.add(phrase);
    }
  }
  const checks = {
    min_page_count: { actual: documents.length, expected: minPageCount, passed: documents.length >= minPageCount },
    min_unique_url_count: { actual: uniqueUrls.size, expected: minUniqueUrlCount, passed: uniqueUrls.size >= minUniqueUrlCount },
    source_family_diversity: { actual: nonEmptyFamilies, expected: minSourceFamilies, passed: nonEmptyFamilies >= minSourceFamilies },
    lexical_overlap: { actual: tokenMatches.size, expected: featureOverlapTokenFloor, passed: tokenMatches.size >= featureOverlapTokenFloor, matched_tokens: [...tokenMatches].slice(0, 16), matched_phrases: [...phraseMatches].slice(0, 10) },
  };
  return {
    status: Object.values(checks).every((check) => check.passed) ? "healthy" : "weak",
    checks,
    total_corpus_pages: documents.length,
    unique_url_count: uniqueUrls.size,
    matched_feature_token_count: tokenMatches.size,
    matched_feature_phrase_count: phraseMatches.size,
  };
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
  const featureInventory = await loadFeatureInventoryForRanking(ranking);
  let selectedSources = selectSources(ranking, featureInventory);

  if (selectedSources.length === 0) {
    const selection = buildSelectionDocument(ranking, rankingPath, selectedSources, productDir, featureInventory);
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
      feature_inventory: featureInventory,
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

  let selection = buildSelectionDocument(ranking, rankingPath, selectedSources, productDir, featureInventory);
  await writeJson(selectionPath, selection);
  const previousState = await readJson(statePath).catch(() => null);
  const signatureUnchanged = previousState?.selected_sources_signature === selection.selected_sources_signature;
  const corpusReady = await exists(path.join(corpusRoot, "site"));

  let actions = {
    deleted: [],
    added: [],
    changed: [],
    sync_urls: [],
  };
  const source_failures = {};
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
        if (selected) source_failures[selected.source_id] = { family: selected.family, initial_url: url, failure_stage: "sync", attempted_urls: [...attemptedUrls] };
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
            source_failures[selected.source_id] = { family: selected.family, initial_url: url, failure_stage: "recovery_sync", attempted_urls: [...attemptedUrls] };
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
        if (selected) source_failures[selected.source_id] = { family: selected.family, initial_url: url, failure_stage: "fallback_exhausted", attempted_urls: [...attemptedUrls] };
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
  const corpusDocuments = await loadCorpusDocuments(productDir);
  let corpusHealth = assessCorpusHealth(featureInventory, corpusPages, corpusDocuments);
  if (!skippedSync && corpusHealth.status !== "healthy") {
    const broaderSources = selectSources(ranking, featureInventory, { broaden: true }).filter((source) => !selectedSources.some((current) => current.url === source.url && current.family === source.family));
    if (broaderSources.length > 0) {
      selectedSources = [...selectedSources, ...broaderSources];
      selection = buildSelectionDocument(ranking, rankingPath, selectedSources, productDir, featureInventory, { broaden: true });
      await writeJson(selectionPath, selection);
      const broaderActions = await reconcileSources(productDir, selectedSources);
      actions = {
        deleted: [...new Set([...actions.deleted, ...broaderActions.deleted])],
        added: [...new Set([...actions.added, ...broaderActions.added])],
        changed: [...new Set([...actions.changed, ...broaderActions.changed])],
        sync_urls: [...new Set([...actions.sync_urls, ...broaderActions.sync_urls])],
      };
      for (const url of broaderActions.sync_urls) {
        await runKnow(productDir, ["sync", "site", url, "--key", knowKey]).catch((error) => {
          const selected = selectedSources.find((source) => source.url === url);
          if (selected) {
            source_failures[selected.source_id] = {
              family: selected.family,
              initial_url: url,
              failure_stage: "broadened_sync",
              attempted_urls: [url],
              error: sanitizeErrorMessage(error),
            };
          }
          return "";
        });
      }
    }
  }
  const refreshedCorpusPages = await summarizeCorpusPages(productDir);
  const refreshedCorpusDocuments = await loadCorpusDocuments(productDir);
  corpusHealth = assessCorpusHealth(featureInventory, refreshedCorpusPages, refreshedCorpusDocuments);
  const singlePageFallbackDetected = !crawl4aiAvailable && corpusPages.length > 0 && corpusPages.every((source) => source.page_count <= 1);
  selection = buildSelectionDocument(ranking, rankingPath, selectedSources, productDir, featureInventory, { broaden: selection.source_selection_strategy?.broadened_retry === true });
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
    feature_inventory: featureInventory,
    single_page_fallback_detected: singlePageFallbackDetected,
    limitation: singlePageFallbackDetected
      ? "know site sync is running without crawl4ai in this environment, so each source currently materializes only its seed page."
      : "",
    skipped_sync: skippedSync,
    export_run: exportRun,
    reprocess_requested: reprocess,
    actions,
    source_failures,
    registered_source_count: finalSources.length,
    corpus_page_summaries: refreshedCorpusPages,
    corpus_health: corpusHealth,
    corpus_paths: selection.corpus_paths,
  });

  return {
    product_name: ranking.product_name,
    product_slug: productSlug,
    selected_source_count: selectedSources.length,
    registered_source_count: finalSources.length,
    crawl4ai_available: crawl4aiAvailable,
    single_page_fallback_detected: singlePageFallbackDetected,
    total_corpus_pages: refreshedCorpusPages.reduce((sum, source) => sum + source.page_count, 0),
    corpus_health_status: corpusHealth.status,
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
    .filter((slug) => !ignoredProductSlugs.has(slug))
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
