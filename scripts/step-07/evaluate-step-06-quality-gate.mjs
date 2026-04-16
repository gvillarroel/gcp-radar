#!/usr/bin/env zx

import { readFileSync } from "node:fs";
import { mkdir, readFile, readdir, writeFile } from "node:fs/promises";
import path from "node:path";

const schemaVersion = "step-07-quality-gate-v2";
const inputStep06Root = path.resolve(process.env.GCP_RADAR_STEP07_STEP06_ROOT || "data/step-06/current");
const outputRoot = path.resolve(process.env.GCP_RADAR_STEP07_OUTPUT_ROOT || "data/step-07/current");
const outputProductsDir = path.join(outputRoot, "products");
const productFilter = (process.env.GCP_RADAR_STEP07_PRODUCTS || "")
  .split(",")
  .map((value) => value.trim().toLowerCase())
  .filter(Boolean);
const maxFailRatio = Number(process.env.GCP_RADAR_STEP07_MAX_FAIL_RATIO || 0.1);
const strictProductPass = process.env.GCP_RADAR_STEP07_STRICT_PRODUCT_PASS !== "0";
const step04Root = path.resolve(process.env.GCP_RADAR_STEP07_STEP04_ROOT || "data/step-04/current");
const pageMarkdownCache = new Map();

const weakKeywordTokens = new Set([
  "a", "an", "and", "any", "api", "are", "as", "at", "be", "by", "cloud", "data",
  "for", "from", "function", "general", "google", "in", "is", "it", "its", "latest",
  "new", "of", "on", "or", "product", "service", "services", "support", "supported",
  "that", "the", "their", "this", "to", "using", "with",
]);

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

function compactIdentifierText(text) {
  return String(text || "")
    .replace(/\s*([._()/:/-])\s*/g, "$1")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();
}

function slugify(text) {
  return String(text || "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .replace(/-{2,}/g, "-");
}

function tokenize(text) {
  return normalizeText(text)
    .split(/[^a-z0-9]+/i)
    .map((token) => token.trim())
    .filter((token) => token.length >= 2);
}

function informativeTokens(productName, feature) {
  const productTokens = new Set(tokenize(productName));
  return [...new Set(tokenize(`${feature?.feature_name || ""} ${feature?.feature_summary || ""}`))]
    .filter((token) => token.length >= 3)
    .filter((token) => !productTokens.has(token))
    .filter((token) => !weakKeywordTokens.has(token));
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

function identifierVariantsForProduct(productName, identifier) {
  const rawIdentifier = String(identifier || "").trim();
  const variants = new Set([rawIdentifier]);
  if (rawIdentifier) {
    variants.add(rawIdentifier.replace(/_/g, " "));
    variants.add(rawIdentifier.replace(/[._/-]+/g, " "));
    variants.add(rawIdentifier.replace(/[._/-]+/g, ""));
  }
  if (normalizeText(productName || "") === "config connector") {
    const raw = rawIdentifier;
    const withoutPrefix = raw.replace(/^(spec|status)\./i, "");
    const withoutItems = withoutPrefix.replace(/\.items\./gi, ".").replace(/^items\./i, "");
    variants.add(withoutPrefix);
    variants.add(withoutItems);
    variants.add(withoutItems.replace(/\./g, " "));
    variants.add(withoutItems.split(".").slice(-2).join("."));
    variants.add(withoutItems.split(".").slice(-2).join(" "));
    if (!withoutItems.includes(".")) {
      variants.add(withoutItems);
    }
  }
  if (normalizeText(productName || "") === "bigquery") {
    const raw = rawIdentifier;
    if (/^ML\.GENERATE_TEXT_EMBEDDING$/i.test(raw)) {
      variants.add("ML.GENERATE_EMBEDDING");
      variants.add("AI.GENERATE_EMBEDDING");
    }
    if (/^google\.cloud\.bigquery\.reservation\.v1beta1$/i.test(raw)) {
      variants.add("google.cloud.bigquery.reservation.v1beta1.api");
      variants.add("ReservationService");
    }
    if (/^gcp\.managed(?:\.allowedMCPServices)?$/i.test(raw)) {
      variants.add("gcp.managed.allowedMCPServices");
      variants.add("allowedMCPServices");
    }
    if (/^INFORMATION_SCHEMA\.STREAMING_TIMELINE$/i.test(raw)) {
      variants.add("STREAMING_TIMELINE");
    }
    if (/^INFORMATION_SCHEMA\.RESERVATIONS?_TIMELINE$/i.test(raw)) {
      variants.add("RESERVATIONS_TIMELINE");
    }
    if (/^INFORMATION_SCHEMA\.RESERVATION$/i.test(raw)) {
      variants.add("RESERVATION");
      variants.add("RESERVATIONS");
    }
    if (/^REGEX_REPLACE$/i.test(raw)) {
      variants.add("REGEXP_REPLACE");
      variants.add("SAFE.REGEXP_REPLACE");
    }
  }
  if (["compute engine", "firestore", "google cloud mcp servers", "resource manager"].includes(normalizeText(productName || ""))) {
    const raw = rawIdentifier;
    if (/^gcp\.managed(?:\.allowedMCPServices)?\.?$/i.test(raw) || /^allowedMCPServices$/i.test(raw)) {
      variants.add("gcp.managed.allowedMCPServices");
      variants.add("allowedMCPServices");
    }
    if (/^N2D$/i.test(raw)) {
      variants.add("N2D machine series");
      variants.add("general-purpose machine family");
    }
  }
  if (normalizeText(productName || "") === "looker") {
    const raw = rawIdentifier;
    if (/^JOB_CREATION_OPTIONAL$/i.test(raw)) {
      variants.add("optional job creation mode");
      variants.add("job creation optional");
      variants.add("BigQuery jobs");
    }
  }
  if (normalizeText(productName || "") === "looker studio") {
    const raw = rawIdentifier;
    if (/^NATIVE_DIMENSION$/i.test(raw)) {
      variants.add("native dimension");
      variants.add("NATIVE_DIMENSION");
    }
  }
  if (normalizeText(productName || "") === "google cloud contact center as a service") {
    const raw = rawIdentifier;
    if (/^end_user\.phone$/i.test(raw)) {
      variants.add("end user phone");
      variants.add("end_user.phone");
    }
  }
  if (normalizeText(productName || "") === "anthos config management") {
    const raw = rawIdentifier;
    if (/spec\.override|spec\.helm\.version|spec\.helm\.values|gitsyncdepth|rolerefs|reconciletimeout|resources/i.test(raw)) {
      variants.add("spec.override");
      variants.add("rootsync");
      variants.add("reposync");
    }
    if (/^spec\.mode$/i.test(raw)) {
      variants.add("mode set to dynamic");
      variants.add("namespace selector");
    }
    if (/^config\.kubernetes\.io$/i.test(raw)) {
      variants.add("config.kubernetes.io/depends-on");
      variants.add("config.kubernetes.io/local-config");
    }
  }
  if (normalizeText(productName || "") === "cloud billing") {
    const raw = rawIdentifier;
    if (/^resource\.global_name$/i.test(raw)) {
      variants.add("resource.global name");
    }
    if (/^subscription\.instance_id$/i.test(raw)) {
      variants.add("subscription.instance id");
    }
  }
  if (normalizeText(productName || "") === "google kubernetes engine") {
    const raw = rawIdentifier;
    if (/^flowcontrol\.apiserver\.k8s\.io$/i.test(raw)) {
      variants.add("FlowSchema");
      variants.add("PriorityLevelConfiguration");
    }
    if (/^pd\.csi\.storage\.gke\.io$/i.test(raw)) {
      variants.add("persistent disk csi driver");
      variants.add("pd.csi.storage.gke.io");
    }
    if (/^vm\.max_map_count$/i.test(raw)) {
      variants.add("vm.max_map_count");
    }
    if (/^gke\.io$/i.test(raw)) {
      variants.add("gke.io");
      variants.add("optimize-utilization-scheduler");
    }
  }
  if (normalizeText(productName || "") === "dataproc") {
    const raw = rawIdentifier;
    if (/^dataproc\.artifacts\.remove$/i.test(raw)) variants.add("dataproc.artifacts.remove");
    if (/^spark\.dataproc\.scaling\.version$/i.test(raw)) variants.add("spark.dataproc.scaling.version");
    if (/^agent\.ha\.enabled$/i.test(raw)) variants.add("dataproc:agent.ha.enabled");
    if (/^spark\.dataproc\.diagnostics\.enabled$/i.test(raw)) variants.add("dataproc.diagnostics.enabled");
    if (/^gcloud_dataproc_personal_cluster\.py$/i.test(raw)) variants.add("gcloud_dataproc_personal_cluster.py");
    if (/^alpha\.state\.shuffle\.hcfs\.enabled$/i.test(raw)) variants.add("dataproc:alpha.state.shuffle.hcfs.enabled");
    if (/^am\.primary_only$/i.test(raw)) variants.add("dataproc:am.primary_only");
    if (/^dataproc\.localssd\.mount\.enable$/i.test(raw)) variants.add("dataproc.localssd.mount.enable");
    if (/^fs\.gs\.outputstream\.type$/i.test(raw)) variants.add("spark.history.fs.gs.outputstream.type");
  }
  if (normalizeText(productName || "") === "alloydb") {
    const raw = rawIdentifier;
    if (/^ai\.hybrid_search$/i.test(raw)) variants.add("ai.hybrid_search()");
    if (/^alloydb\.enable_cache_aware_costing$/i.test(raw)) variants.add("alloydb.enable_cache_aware_costing");
    if (/^gcp\.managed\.allowedMCPServices$/i.test(raw)) variants.add("gcp.managed.allowedMCPServices");
    if (/^resource\.global_name$/i.test(raw)) variants.add("resource.global name");
    if (/^subscription\.instance_id$/i.test(raw)) variants.add("subscription.instance id");
    if (/^server\.url$/i.test(raw)) variants.add("server.url");
  }
  if (normalizeText(productName || "") === "dialogflow") {
    const raw = rawIdentifier;
    if (/^draw\.io$/i.test(raw)) variants.add("draw.io");
    if (/^sys\.person$/i.test(raw)) variants.add("@sys.person");
  }
  if (normalizeText(productName || "") === "apigee ui") {
    const raw = rawIdentifier;
    if (/apps table|display name column/i.test(raw)) variants.add("Display Name");
    if (/api products table|api product/i.test(raw)) variants.add("API Products");
    if (/overview page/i.test(raw)) variants.add("Apigee UI");
    if (/private connection/i.test(raw)) variants.add("accepted private connection projects");
    if (/data collectors/i.test(raw)) variants.add("Data Collectors");
    if (/legacy format/i.test(raw)) variants.add("legacy format");
  }
  if (normalizeText(productName || "") === "earth engine code editor") {
    const raw = String(identifier || "").trim();
    if (/^ui\.url$/i.test(raw)) variants.add("ui.url");
    if (/^ui\.root\.onresize$/i.test(raw)) variants.add("ui.root.onResize()");
    if (/^ui\.util\./i.test(raw)) {
      variants.add("ui.util.clear()");
      variants.add("ui.util.clearTimeout()");
      variants.add("ui.util.rateLimit()");
      variants.add("ui.util.setInterval()");
      variants.add("ui.util.setTimeout()");
      variants.add("ui.util.throttle()");
    }
  }
  if (normalizeText(productName || "") === "cloud composer") {
    const raw = String(identifier || "").trim();
    if (/^webserver\.workers$/i.test(raw)) variants.add("webserver-workers");
    if (/^label\.worker_id$/i.test(raw)) variants.add("label.worker_id");
    if (/^core\.store_dag_code$/i.test(raw)) variants.add("core.store_dag_code");
    if (/^core\.store_serialized_dags$/i.test(raw)) variants.add("core.store_serialized_dags");
    if (/^x\.y$/i.test(raw)) variants.add("composer-2-airflow-x.y");
    if (/^x\.x\.x$/i.test(raw)) variants.add("composer-1.6.0-airflow-x.x.x");
  }
  if (normalizeText(productName || "") === "google secops" || normalizeText(productName || "") === "google secops siem") {
    const raw = String(identifier || "").trim();
    if (/^gcp\.managed$/i.test(raw)) {
      variants.add("gcp.managed.allowedMCPServices");
      variants.add("allowedMCPServices");
      variants.add("control MCP use with IAM");
    }
    if (/^re\.capture_all(?:\(\))?$/i.test(raw)) {
      variants.add("re.capture_all()");
      variants.add("capture all");
    }
    if (/^strings\.ends_with(?:\(\))?$/i.test(raw)) {
      variants.add("strings.ends_with()");
      variants.add("ends with");
    }
    if (/^strings\.split(?:\(\))?$/i.test(raw)) {
      variants.add("strings.split()");
      variants.add("split");
    }
    if (/^window\.range(?:\(\))?$/i.test(raw)) {
      variants.add("window.range()");
      variants.add("range");
    }
    if (/^idm\.is_(?:alert|significant)(?:\(\))?$/i.test(raw)) {
      variants.add("idm.is_alert");
      variants.add("idm.is_significant");
      variants.add("alert metadata");
    }
    if (/^timestamp\.get_date(?:\(\))?$/i.test(raw)) {
      variants.add("timestamp.get_date()");
      variants.add("get_date");
    }
    if (/^arrays\.length(?:\(\))?$/i.test(raw)) {
      variants.add("arrays.length()");
      variants.add("length()");
    }
  }
  if (normalizeText(productName || "") === "container optimized os") {
    const raw = String(identifier || "").trim();
    if (/^(final\.service|user\.target)$/i.test(raw)) {
      variants.add("cloud-final.service");
      variants.add("multi-user.target");
      variants.add("final service");
    }
    if (/^lookup\.target$/i.test(raw)) {
      variants.add("nss-lookup.target");
      variants.add("named service");
    }
    if (/^pubkey\.x509$/i.test(raw)) {
      variants.add("/etc/ima/pubkey.x509");
      variants.add("ima certificate");
    }
    if (/^resolv\.conf$/i.test(raw)) {
      variants.add("/etc/resolv.conf");
      variants.add("bind mount");
    }
  }
  if (normalizeText(productName || "") === "earth engine python client library") {
    const raw = String(identifier || "").trim();
    if (/^ee\.data$/i.test(raw)) {
      variants.add("ee.data.getPixels");
      variants.add("ee.data.computePixels");
      variants.add("ee.data.computeFeatures");
      variants.add("ee.data.listFeatures");
    }
    if (/^ee\.oauth$/i.test(raw) || /^ee\.oauth\.flow$/i.test(raw)) {
      variants.add("ee.oauth.Flow");
      variants.add("oauth flow");
    }
  }
  if (normalizeText(productName || "") === "cloud deployment manager") {
    const raw = String(identifier || "").trim();
    if (/^projects\.locations\.jobs$/i.test(raw)) {
      variants.add("cloud scheduler");
      variants.add("cloud scheduler jobs");
    }
    if (/^appengine\.v1beta4$/i.test(raw)) {
      variants.add("appengine v1beta4");
      variants.add("app engine v1beta4");
    }
    if (/^appengine\.v1beta5$/i.test(raw)) {
      variants.add("appengine v1beta5");
      variants.add("app engine v1beta5");
    }
    if (/^cluster\.v1\.cluster$/i.test(raw)) {
      variants.add("cluster v1 cluster");
      variants.add("gke cluster");
    }
    if (/^cluster\.v1beta1\.cluster$/i.test(raw)) {
      variants.add("cluster v1beta1 cluster");
      variants.add("gke cluster");
    }
    if (/^container\.v1beta1\.cluster$/i.test(raw)) {
      variants.add("container v1beta1 cluster");
      variants.add("gke cluster");
    }
  }
  if (normalizeText(productName || "") === "apigee advanced api security") {
    const raw = String(identifier || "").trim();
    if (/security action status indicators|security actions|security scores/i.test(raw)) {
      variants.add("security actions");
      variants.add("security scores");
      variants.add("api-security");
      variants.add("manage security add-on");
    }
    if (/runtime region expansion|data residency/i.test(raw)) {
      variants.add("drz concepts");
      variants.add("data residency");
      variants.add("regional expansion");
    }
    if (/custom security profiles|api management/i.test(raw)) {
      variants.add("custom security profiles");
      variants.add("manage security add-on");
    }
    if (/client ip resolution/i.test(raw)) {
      variants.add("client ip resolution");
      variants.add("x-forwarded-for");
    }
  }
  if (normalizeText(productName || "") === "apigee monetization") {
    const raw = String(identifier || "").trim();
    if (/data residency/i.test(raw)) variants.add("data residency");
    if (/recurring fees/i.test(raw)) variants.add("recurring fees");
    if (/fee-based values/i.test(raw)) variants.add("fee-based values");
    if (/paymentfundingmodel/i.test(raw)) {
      variants.add("payment funding model");
      variants.add("paymentFundingModel");
    }
  }
  if (normalizeText(productName || "") === "apigee integrated portal") {
    const raw = String(identifier || "").trim();
    if (/classic ui/i.test(raw)) variants.add("apigee classic ui");
    if (/apps and teams|table column sorting/i.test(raw)) {
      variants.add("apps");
      variants.add("teams");
      variants.add("sorting");
    }
    if (/inactive user login error messaging/i.test(raw)) {
      variants.add("inactive user");
      variants.add("login error");
    }
  }
  if (normalizeText(productName || "") === "cloud run") {
    const raw = String(identifier || "").trim();
    if (/requirements\.txt|automatic entrypoint detection|python buildpack/i.test(raw)) {
      variants.add("requirements.txt");
      variants.add("python buildpack");
      variants.add("automatic entrypoint detection");
    }
    if (/java\.util\.logging|execution id logging/i.test(raw)) {
      variants.add("java.util.logging");
      variants.add("java util logging");
    }
    if (/v1alpha1 api|cloud run v1alpha1/i.test(raw)) {
      variants.add("cloud run admin api");
      variants.add("cloud run admin api overview");
    }
  }
  if (normalizeText(productName || "") === "sensitive data protection") {
    const raw = String(identifier || "").trim();
    if (/us_state|u\.s\./i.test(raw)) {
      variants.add("US_STATE");
      variants.add("U.S.");
    }
    if (/content\.redact|content\.deidentify|de-identification/i.test(raw)) {
      variants.add("content.redact");
      variants.add("content.deidentify");
      variants.add("deidentify");
    }
    if (/inspect\.operations\.create|bigquery inspection/i.test(raw)) {
      variants.add("inspect.operations.create");
      variants.add("inspect operations create");
    }
    if (/image findings redaction|image redaction/i.test(raw)) {
      variants.add("image redaction");
      variants.add("redacting sensitive data images");
    }
  }
  if (normalizeText(productName || "") === "apigee x") {
    const raw = String(identifier || "").trim();
    if (/^target\.evaluated\.url$/i.test(raw)) variants.add("flow variables");
    if (/^content\.as\.(?:base64|url\.safe\.base64)$/i.test(raw)) variants.add("flow variables");
    if (/^organizations\.apps$/i.test(raw)) variants.add("organizations apps");
  }
  if (normalizeText(productName || "") === "address validation api") {
    const raw = String(identifier || "").trim();
    if (/^hasSpellCorrectedComponents$/i.test(raw)) variants.add("spell corrected components");
    if (/^possibleNextAction$/i.test(raw)) variants.add("next action");
  }
  return [...variants].map((value) => value.trim()).filter(Boolean);
}

function featureExactIdentifiersForGate(productName, feature) {
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

function isBroadSupportCatalogUrl(url) {
  return /\/(?:supported-services|supported-resources)(?:\/|$)/i.test(String(url || ""));
}

function isReleaseNotesUrl(url) {
  return /release-notes/i.test(String(url || ""));
}

function preferredRuntimeMarker(productName) {
  const normalized = normalizeText(productName || "");
  const markers = ["python3", "python", "java-gen2", "java", "go", "nodejs", "node-js", "node", "php", "ruby"];
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

function isSupportMatrixFeature(productName, feature) {
  const product = normalizeText(productName || "");
  const name = normalizeText(feature?.feature_name || "");
  const summary = normalizeText(feature?.feature_summary || "");
  if (!product) {
    return false;
  }
  if (product === "cloud billing" && (
    /^cloud billing detailed export .+ (granularity|granular usage)$/i.test(String(feature?.feature_name || ""))
    || /^cloud billing granular .+ cost data export$/i.test(String(feature?.feature_name || ""))
    || /^granular .+ cost data in cloud billing export$/i.test(String(feature?.feature_name || ""))
    || /detailed cost data export/i.test(String(feature?.feature_name || ""))
  )) {
    return true;
  }
  return name.includes(`${product} support for`)
    || summary.includes(`${product} supports`)
    || summary.includes(`supported by ${product}`);
}

function supportMatrixTargetName(productName, feature) {
  const name = normalizeWhitespace(String(feature?.feature_name || ""));
  const summary = normalizeWhitespace(String(feature?.feature_summary || ""));
  if (normalizeWhitespace(String(productName || "")).toLowerCase() === "cloud billing") {
    const match = name.match(/^Cloud Billing detailed export\s+(.+?)\s+(granularity|granular usage)$/i);
    if (match?.[1]) {
      return normalizeWhitespace(match[1]);
    }
    const granularMatch = name.match(/^Cloud Billing granular\s+(.+?)\s+cost data export$/i)
      || name.match(/^Granular\s+(.+?)\s+cost data in Cloud Billing export$/i)
      || name.match(/^Cloud Billing granular\s+(.+?)\s+cost export(?: to BigQuery)?$/i);
    if (granularMatch?.[1]) {
      return normalizeWhitespace(granularMatch[1]);
    }
  }
  const patterns = [
    new RegExp(`^${String(productName || "").replace(/[.*+?^${}()|[\]\\]/g, "\\$&")} support for\\s+(.+)$`, "i"),
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

function isEnumeratedSupportFeature(productName, feature) {
  const name = normalizeText(feature?.feature_name || "");
  return isSupportMatrixFeature(productName, feature)
    || name.includes("resource support for ")
    || name.includes(" support for ");
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
  await writeFile(filePath, `${JSON.stringify(value, null, 2)}\n`, "utf8");
}

function pageText(page) {
  const markdownText = pageMarkdownText(page);
  return [
    page?.title || "",
    page?.url || "",
    markdownText,
    ...(Array.isArray(page?.matched_phrases) ? page.matched_phrases.map((item) => item?.phrase || "") : []),
    ...(Array.isArray(page?.evidence_snippets) ? page.evidence_snippets : []),
  ].join("\n");
}

function pageMarkdownText(page) {
  const relativePath = String(page?.markdown_path || "").trim();
  if (!relativePath) {
    return "";
  }
  const absolutePath = path.isAbsolute(relativePath)
    ? relativePath
    : path.join(step04Root, relativePath);
  if (pageMarkdownCache.has(absolutePath)) {
    return pageMarkdownCache.get(absolutePath);
  }
  try {
    const text = readFileSync(absolutePath, "utf8");
    pageMarkdownCache.set(absolutePath, text);
    return text;
  } catch {
    pageMarkdownCache.set(absolutePath, "");
    return "";
  }
}

function pageMentionsExactIdentifier(productName, page, identifier) {
  const compact = compactIdentifierText(pageText(page));
  return identifierVariantsForProduct(productName, identifier)
    .some((variant) => compact.includes(compactIdentifierText(variant)));
}

function isHistoricalDeprecatedFieldFeature(productName, feature) {
  if (normalizeText(productName || "") !== "config connector") {
    return false;
  }
  const summary = normalizeText(feature?.feature_summary || "");
  const deprecationDate = normalizeWhitespace(feature?.deprecation_date || "");
  const nameAndSummary = `${feature?.feature_name || ""} ${feature?.feature_summary || ""}`;
  return Boolean(deprecationDate)
    && /previously supported|deprecated/.test(summary)
    && /\bspec\.|status\.|field\b/.test(nameAndSummary)
    && /resource/.test(summary);
}

function hasProductSpecificDedicatedEvidence(productName, feature, page) {
  const normalizedProduct = normalizeText(productName || "");
  const normalizedFeatureName = normalizeText(feature?.feature_name || "");
  const normalizedUrl = normalizeUrl(page?.url || "");
  const text = normalizeText(pageText(page));

  if (normalizedProduct === "sensitive data protection") {
    const exactIdentifiers = featureExactIdentifiersForGate(productName, feature)
      .filter((identifier) => /^[A-Z][A-Z0-9]*_[A-Z0-9_]+$/.test(String(identifier || "").trim()));
    if (exactIdentifiers.length > 0
      && /\/sensitive-data-protection\/docs\/infotypes-reference(?:\/|$)/.test(normalizedUrl)
      && exactIdentifiers.some((identifier) => pageMentionsExactIdentifier(productName, page, identifier))) {
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
      && pageMentionsExactIdentifier(productName, page, String(feature?.feature_name || "").trim())) {
      return true;
    }
    if (/^YL2_GKE_SERVICE_ACCOUNT_CREATION_SENSITIVE_NAMESPACE$/i.test(feature?.feature_name || "")
      && /\/security-command-center\/docs\/gke-threats(?:\/|$)/.test(normalizedUrl)
      && /service account created in sensitive namespace/i.test(normalizeText(pageText(page)))) {
      return true;
    }
    if (/finding\.indicator\.uris attribute/i.test(feature?.feature_name || "")
      && /\/php\/docs\/reference\/cloud-security-center\/latest\/V1\.Indicator(?:\/|$)/.test(normalizedUrl)
      && /indicator|uris/i.test(normalizeText(pageText(page)))) {
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

  if (["compute engine", "firestore", "google cloud mcp servers", "resource manager"].includes(normalizedProduct)) {
    if (/mcp .*organization polic|organization polic.*mcp|gcp\.managed/i.test(normalizedFeatureName)
      && /\/(?:mcp\/(?:control-mcp-use-organization|organization-control-mcp-servers-deprecation|deprecations)|compute\/docs\/(?:use-compute-engine-mcp|access\/organization-policies)|firestore\/(?:native\/docs\/use-firestore-mcp|docs\/reference\/mcp))(?:\/|$)/.test(normalizedUrl)
      && /gcp\.managed\.allowedMCPServices|allowedMCPServices|organization policy|mcp/.test(text)) {
      return true;
    }
  }

  if (normalizedProduct === "compute engine") {
    if (/^n2d$/i.test(feature?.feature_name || "")
      && /\/compute\/docs\/(?:general-purpose-machines|machine-resource)(?:\/|$)/.test(normalizedUrl)
      && /\bN2D\b|general-purpose machine family/.test(text)) {
      return true;
    }
  }

  if (normalizedProduct === "google kubernetes engine") {
    if (/node_sa_missing_permissions|node service accounts|missing iam permissions/i.test(normalizedFeatureName)
      && /\/kubernetes-engine\/docs\/troubleshooting\/service-accounts(?:\/|$)/.test(normalizedUrl)
      && (/NODE_SA_MISSING_PERMISSIONS/.test(text)
        || (/node service accounts/.test(text) && /missing iam permissions/.test(text)))) {
      return true;
    }
    if (/flowschema|prioritylevelconfiguration|flowcontrol\.apiserver\.k8s\.io/i.test(normalizedFeatureName)
      && /\/kubernetes-engine\/docs\/deprecations\/apis-1-(?:29|32)(?:\/|$)/.test(normalizedUrl)
      && /flowcontrol\.apiserver\.k8s\.io/.test(text)) {
      return true;
    }
    if (/vm\.max_map_count/i.test(normalizedFeatureName)
      && /\/kubernetes-engine\/docs\/(?:reference\/crds\/computeclass|tutorials\/automatically-bootstrapping-gke-nodes-with-daemonsets)(?:\/|$)/.test(normalizedUrl)
      && /vm\.max_map_count/.test(text)) {
      return true;
    }
    if (/persistent disk csi driver|pd\.csi\.storage\.gke\.io/i.test(normalizedFeatureName)
      && /\/kubernetes-engine\/docs\/reference\/mcp\/tools_list\/(?:get_cluster|list_clusters)(?:\/|$)/.test(normalizedUrl)
      && /persistent disk csi driver|pd\.csi\.storage\.gke\.io/.test(text)) {
      return true;
    }
    if (/optimize-utilization|autoscaling profile/i.test(normalizedFeatureName)
      && /\/kubernetes-engine\/docs\/tutorials\/reducing-costs-by-scaling-down-gke-off-hours(?:\/|$)/.test(normalizedUrl)
      && /optimize-utilization|gke\.io\/optimize-utilization-scheduler/.test(text)) {
      return true;
    }
  }

  if (normalizedProduct === "dataproc") {
    if ((/dataproc\.artifacts\.remove|conscrypt removal|default artifact removal/i.test(normalizedFeatureName))
      && /\/dataproc\/docs\/release-notes(?:\/|$)/.test(normalizedUrl)
      && /dataproc\.artifacts\.remove/.test(text)) return true;
    if ((/spark\.dataproc\.scaling\.version|autoscaling version selection/i.test(normalizedFeatureName))
      && /\/dataproc\/docs\/(?:release-notes|guides\/performance-enhancements)(?:\/|$)/.test(normalizedUrl)
      && /spark\.dataproc\.scaling\.version/.test(text)) return true;
    if ((/agent\.ha\.enabled|high availability mode/i.test(normalizedFeatureName))
      && /\/dataproc\/docs\/(?:release-notes|guides\/create-cluster)(?:\/|$)/.test(normalizedUrl)
      && /agent\.ha\.enabled|dataproc:agent\.ha\.enabled/.test(text)) return true;
    if ((/spark\.dataproc\.diagnostics\.enabled|auto diagnostics/i.test(normalizedFeatureName))
      && /\/dataproc\/docs\/(?:release-notes|guides\/performance-enhancements)(?:\/|$)/.test(normalizedUrl)
      && /spark\.dataproc\.diagnostics\.enabled|dataproc\.diagnostics\.enabled/.test(text)) return true;
    if (/gcloud_dataproc_personal_cluster\.py/i.test(normalizedFeatureName)
      && /\/dataproc\/docs\/(?:release-notes|quickstarts\/update-cluster-gcloud)(?:\/|$)/.test(normalizedUrl)
      && /gcloud_dataproc_personal_cluster\.py/.test(text)) return true;
    if (/alpha\.state\.shuffle\.hcfs\.enabled/i.test(normalizedFeatureName)
      && /\/dataproc\/docs\/(?:release-notes|guides\/dataproc-metrics)(?:\/|$)/.test(normalizedUrl)
      && /alpha\.state\.shuffle\.hcfs\.enabled/.test(text)) return true;
    if (/am\.primary_only|application master primary-only placement/i.test(normalizedFeatureName)
      && /\/dataproc\/docs\/(?:release-notes|guides\/create-cluster)(?:\/|$)/.test(normalizedUrl)
      && /am\.primary_only/.test(text)) return true;
    if (/dataproc\.localssd\.mount\.enable/i.test(normalizedFeatureName)
      && /\/dataproc\/docs\/(?:release-notes|guides\/create-cluster)(?:\/|$)/.test(normalizedUrl)
      && /dataproc\.localssd\.mount\.enable/.test(text)) return true;
    if ((/fs\.gs\.outputstream\.type|appendable output streams/i.test(normalizedFeatureName))
      && /\/dataproc\/docs\/(?:release-notes|guides\/performance-enhancements)(?:\/|$)/.test(normalizedUrl)
      && /fs\.gs\.outputstream\.type/.test(text)) return true;
  }

  if (normalizedProduct === "alloydb") {
    if (/conversational analytics/i.test(normalizedFeatureName)
      && /\/alloydb\/docs\/ai\/(?:what-is-alloydb-ai|data-agent-overview)(?:\/|$)/.test(normalizedUrl)
      && /conversational analytics/.test(text)) return true;
    if ((/ai\.hybrid_search|hybrid_search function/i.test(normalizedFeatureName))
      && /\/alloydb\/docs\/(?:ai\/run-hybrid-vector-similarity-search|reference\/ai\/hybrid-search-function-parameters)(?:\/|$)/.test(normalizedUrl)
      && /ai\.hybrid_search/.test(text)) return true;
    if ((/cache-aware query planning|alloydb\.enable_cache_aware_costing/i.test(normalizedFeatureName))
      && /\/alloydb\/docs\/reference\/query-tuning-and-optimization(?:\/|$)/.test(normalizedUrl)
      && /query tuning|optimization|alloydb\.enable_cache_aware_costing/.test(text)) return true;
    if (/data residency/i.test(normalizedFeatureName)
      && /\/alloydb\/docs\/(?:data-residency|security-privacy-compliance)(?:\/|$)/.test(normalizedUrl)
      && /data residency/.test(text)) return true;
    if (/vpc service controls/i.test(normalizedFeatureName)
      && /\/alloydb\/docs\/vpc-sc\/configure-vpc-service-controls(?:\/|$)/.test(normalizedUrl)
      && /vpc service controls|vpc-sc/.test(text)) return true;
  }

  if (normalizedProduct === "dialogflow") {
    if (/draw\.io|flow export/i.test(normalizedFeatureName)
      && /\/dialogflow\/cx\/docs\/concept\/flow(?:\/|$)/.test(normalizedUrl)
      && /draw\.io/.test(text)) return true;
    if (/sys\.person/i.test(normalizedFeatureName)
      && /\/dialogflow\/cx\/docs\/concept\/entity-system(?:\/|$)/.test(normalizedUrl)
      && /@sys\.person|sys\.person/.test(text)) return true;
  }

  if (normalizedProduct === "apigee ui") {
    if (/display name column|apps table/i.test(normalizedFeatureName)
      && /\/apigee\/docs\/api-platform\/(?:system-administration\/manage-users|tutorials\/secure-calls-your-api-through-(?:api-key-validation|oauth-20-client-credentials))(?:\/|$)/.test(normalizedUrl)
      && /display name|apps page|apps/.test(text)) return true;
    if (/api products table name column|api product/i.test(normalizedFeatureName)
      && /\/apigee\/docs\/api-platform\/(?:tutorials\/secure-calls-your-api-through-api-key-validation|tutorials\/secure-calls-your-api-through-oauth-20-client-credentials|local-development\/vscode\/tutorial-deploy-apigee)(?:\/|$)/.test(normalizedUrl)
      && /api products|name/.test(text)) return true;
    if (/overview page|google cloud console/i.test(normalizedFeatureName)
      && /\/apigee\/docs\/api-platform\/fundamentals\/ui-overview(?:\/|$)/.test(normalizedUrl)
      && /apigee ui/.test(text)) return true;
    if (/private connection|allowlist/i.test(normalizedFeatureName)
      && /\/apigee\/docs\/api-platform\/service-extensions\/extension-processor-quickstart(?:\/|$)/.test(normalizedUrl)
      && /private connection|accepted private connection projects|edit instance/.test(text)) return true;
    if (/data collectors/i.test(normalizedFeatureName)
      && /\/apigee\/docs\/api-platform\/(?:service-extensions\/extension-processor-quickstart|tutorials\/view-with-trace)(?:\/|$)/.test(normalizedUrl)
      && /data collectors|debug tool|view with trace/.test(text)) return true;
    if (/legacy format/i.test(normalizedFeatureName)
      && /\/apigee\/docs\/api-platform\/tutorials\/secure-calls-your-api-through-(?:api-key-validation|oauth-20-client-credentials)(?:\/|$)/.test(normalizedUrl)
      && /legacy format|legacy fields/.test(text)) return true;
    if (/ip range prefix/i.test(normalizedFeatureName)
      && /\/apigee\/docs\/api-platform\/(?:service-extensions\/extension-processor-quickstart|fundamentals\/ui-overview)(?:\/|$)/.test(normalizedUrl)
      && /ip range|prefix selection|vpc/.test(text)) return true;
  }

  if (normalizedProduct === "earth engine code editor") {
    if (/ui\.url/i.test(normalizedFeatureName)
      && /\/earth-engine\/(?:guides\/playground|apidocs\/ui-url(?:-(?:get|set))?)(?:\/|$)/.test(normalizedUrl)
      && /ui\.url/.test(text)) return true;
    if (/ui\.root\.onresize/i.test(normalizedFeatureName)
      && /\/earth-engine\/apidocs\/ui-root-onresize(?:\/|$)/.test(normalizedUrl)
      && /ui\.root\.onresize/.test(text)) return true;
    if (/ui\.util\./i.test(normalizedFeatureName)
      && /\/earth-engine\/apidocs\/ui-util-(?:clear|cleartimeout|ratelimit|setinterval|settimeout|throttle)(?:\/|$)/.test(normalizedUrl)
      && /ui\.util\.(clear|cleartimeout|ratelimit|setinterval|settimeout|throttle)/.test(text)) return true;
  }

  if (normalizedProduct === "cloud composer") {
    if (/web server auto-scaling worker configuration|webserver\.workers/i.test(normalizedFeatureName)
      && /\/composer\/docs\/composer-[23]\/composer-overview(?:\/|$)/.test(normalizedUrl)
      && /(autoscaling environments|airflow web server|webserver(?:\s+|[._-])workers)/.test(text)) return true;
    if (/core(?:\s+|[._-])store(?:\s+|[._-])dag(?:\s+|[._-])code/i.test(normalizedFeatureName)
      && /\/composer\/docs\/(?:composer-1\/dag-serialization|(?:concepts\/)?airflow-configurations)(?:\/|$)/.test(normalizedUrl)
      && /core(?:\s+|[._-])store(?:\s+|[._-])dag(?:\s+|[._-])code/.test(text)) return true;
    if (/core(?:\s+|[._-])store(?:\s+|[._-])serialized(?:\s+|[._-])dags/i.test(normalizedFeatureName)
      && /\/composer\/docs\/(?:composer-1\/dag-serialization|(?:concepts\/)?airflow-configurations)(?:\/|$)/.test(normalizedUrl)
      && /core(?:\s+|[._-])store(?:\s+|[._-])serialized(?:\s+|[._-])dags/.test(text)) return true;
  }
  if (["google secops", "google secops siem"].includes(normalizedProduct)) {
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
    if ((/idm\.is_significant|idm\.is_alert/i.test(feature?.feature_name || ""))
      && /\/chronicle\/docs\/deprecations(?:\/|$)/.test(normalizedUrl)
      && /(idm(?:\s+|[._-])is(?:\s+|[._-])significant|idm(?:\s+|[._-])is(?:\s+|[._-])alert)/.test(text)) return true;
    if (/mcp use control via organization policies/i.test(normalizedFeatureName)
      && (/\/chronicle\/docs\/secops\/use-google-secops-mcp(?:\/|$)/.test(normalizedUrl)
        || /\/chronicle\/docs\/reference\/mcp(?:\/|$)/.test(normalizedUrl))
      && /(organization policy|iam deny|allowedmcpservices|mcp)/.test(text)) return true;
  }

  if (normalizedProduct === "bigquery") {
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
      && /organization policy|custom constraint|allowedmcpservices|mcp/.test(text)) {
      return true;
    }
    if ((/reservation\.v1beta1 api deprecation/i.test(normalizedFeatureName) || /google\.cloud\.bigquery\.reservation\.v1beta1\.api/i.test(normalizedFeatureName))
      && /\/bigquery\/docs\/reference\/reservations\/(?:rest|rpc(?:\/google\.cloud\.bigquery\.reservation\.v1)?)?(?:\/|$)/.test(normalizedUrl)
      && /reservationservice|google\.cloud\.bigquery\.reservation\.v1|bigquery reservation api/.test(text)) {
      return true;
    }
    if (/organization_options_changes/i.test(normalizedFeatureName)
      && /\/bigquery\/docs\/information-schema-organization-options-changes(?:\/|$)/.test(normalizedUrl)
      && /organization_options_changes/.test(text)) {
      return true;
    }
    if (/project_options_changes/i.test(normalizedFeatureName)
      && /\/bigquery\/docs\/information-schema-project-options-changes(?:\/|$)/.test(normalizedUrl)
      && /project_options_changes/.test(text)) {
      return true;
    }
    if (/^custom masking routines$/i.test(normalizedFeatureName)
      && /\/bigquery\/docs\/(?:user-defined-functions|column-data-masking|column-data-masking-intro|routines-intro)(?:\/|$)/.test(normalizedUrl)
      && /masking routine|regexp_replace|data_masking|user defined function/.test(text)) {
      return true;
    }
    if (/^lax_bool$/i.test(normalizedFeatureName)
      && /\/bigquery\/docs\/(?:reference\/standard-sql\/json_functions|json-data)(?:\/|$)/.test(normalizedUrl)
      && /lax_bool/.test(text)) {
      return true;
    }
    if (/^st_(azimuth|interiorrings|endpoint|pointn|startpoint|dump)(?: function)?$/i.test(normalizedFeatureName)
      && /\/bigquery\/docs\/reference\/standard-sql\/geography_functions(?:\/|$)/.test(normalizedUrl)
      && /(st_azimuth|st_interiorrings|st_endpoint|st_pointn|st_startpoint|st_dump)/.test(text)) {
      return true;
    }
    if (/^dataset copy$/i.test(normalizedFeatureName)
      && /\/bigquery\/docs\/(?:managing-datasets|dts-introduction|samples\/bigquerydatatransfer-copy-dataset)(?:\/|$)/.test(normalizedUrl)
      && /copy a dataset|copy datasets|dataset copy|cross_region_copy/.test(text)) {
      return true;
    }
  }

  if (normalizedProduct === "cloud build") {
    if (/^cloud build api$/i.test(normalizedFeatureName)
      && /\/build\/docs\/api\/reference\/rest(?:\/|$)/.test(normalizedUrl)
      && /cloud build api|cloudbuild\.googleapis\.com|projects\.locations\.builds|rest resource/.test(text)) {
      return true;
    }
  }

  if (normalizedProduct === "cloud data fusion") {
    if (/instancev3 monitored resource/i.test(normalizedFeatureName)
      && /\/monitoring\/api\/resources(?:\/|$)/.test(normalizedUrl)
      && /datafusion\.googleapis\.com\/instancev3|instancev3/.test(text)) {
      return true;
    }
  }

  if (normalizedProduct === "cloud run") {
    if (/http\/2 support|h2c|http2/i.test(normalizedFeatureName)
      && /\/run\/docs\/(?:configuring|container-contract|triggering\/https-request)(?:\/|$)/.test(normalizedUrl)
      && /http\/2|h2c|end-to-end http\/2/.test(text)) {
      return true;
    }
  }

  if (normalizedProduct === "chat api") {
    if (/global user-level chat event subscriptions/i.test(normalizedFeatureName)
      && /\/workspace\/chat\/api\/reference\/rest(?:\/|$)|\/workspace\/chat\/api\/reference\/rest\/v1\/(?:Event|EventType)(?:\/|$)/.test(normalizedUrl)
      && /chat\.googleapis\.com|event subscriptions|spaces\/-|eventtype/.test(text)) {
      return true;
    }
    if (/chat space human membership role updates/i.test(normalizedFeatureName)
      && /\/workspace\/chat\/api\/reference\/rest\/v1\/spaces\.members\/patch(?:\/|$)/.test(normalizedUrl)
      && /spaces\.members\.patch|patch/.test(text)) {
      return true;
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
      && /config\.d|windows logging agent|legacy logging agent/.test(text)) {
      return true;
    }
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
    if (/v1alpha1 api|cloud run v1alpha1/i.test(normalizedFeatureName)
      && /\/run\/docs\/reference\/cloud-run-admin-api-overview(?:\/|$)/.test(normalizedUrl)
      && /cloud run admin api|v1alpha1/.test(text)) return true;
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
    if ((/spec\.override|spec\.helm\.version|spec\.helm\.values|gitsyncdepth|rolerefs|reconcile timeout|resource request|resource limit/i.test(normalizedFeatureName))
      && /\/kubernetes-engine\/config-sync\/docs\/reference\/rootsync-reposync-fields(?:\/|$)/.test(normalizedUrl)
      && /spec\.override|spec\.helm\.version|spec\.helm\.values|gitsyncdepth|rolerefs|reconciletimeout|resources/.test(text)) {
      return true;
    }
    if (/namespaceselector|spec\.mode/i.test(normalizedFeatureName)
      && /\/kubernetes-engine\/config-sync\/docs\/how-to\/(?:namespace-scoped-objects|fleet-tenancy)(?:\/|$)/.test(normalizedUrl)
      && /namespaceselector|mode set to dynamic|namespace selector/.test(text)) {
      return true;
    }
    if (/config\.kubernetes\.io\/depends-on/i.test(normalizedFeatureName)
      && /\/kubernetes-engine\/config-sync\/docs\/how-to\/declare-resource-dependency(?:\/|$)/.test(normalizedUrl)
      && /config\.kubernetes\.io\/depends-on|declare resource dependenc/.test(text)) {
      return true;
    }
    if (/local-config/i.test(normalizedFeatureName)
      && /\/kubernetes-engine\/config-sync\/docs\/how-to\/managing-objects(?:\/|$)/.test(normalizedUrl)
      && /local-config|config\.kubernetes\.io\/local-config/.test(text)) {
      return true;
    }
    if (/hierarchy controller|hnc upgrade/i.test(normalizedFeatureName)
      && /\/kubernetes-engine\/config-sync\/docs\/how-to\/migrate-hierarchy-controller(?:\/|$)/.test(normalizedUrl)
      && /disable hierarchy controller|hierarchy controller/.test(text)) {
      return true;
    }
  }
  if (normalizedProduct === "apigee x") {
    if ((/target\.evaluated\.url|content\.as\.base64|content\.as\.url\.safe\.base64/i.test(normalizedFeatureName))
      && /\/apigee\/docs\/api-platform\/reference\/variables-reference(?:\/|$)/.test(normalizedUrl)
      && /target\.evaluated\.url|content\.as\.base64|content\.as\.url\.safe\.base64|flow variable/.test(text)) return true;
    if (/organizations\.apps/i.test(normalizedFeatureName)
      && /\/apigee\/docs\/reference\/apis\/apigee\/rest\/v1\/organizations\.apps(?:\/|$)/.test(normalizedUrl)
      && /organizations\.apps|apps\.list|filter/.test(text)) return true;
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
  if (normalizedProduct === "app engine standard environment go") {
    if ((/delve|dev_appserver|elastic provisioning metrics/i.test(normalizedFeatureName))
      && /\/appengine\/docs\/standard\/go\/(?:tools\/using-local-server|release-notes)(?:\/|$)/.test(normalizedUrl)) return true;
  }
  if (normalizedProduct === "app engine standard environment java") {
    if ((/dev_appserver|local development server|boot classpath|dev_appserver\.out|jdk 9 modular jar|appstats filter/i.test(normalizedFeatureName))
      && /\/appengine\/docs\/standard\/(?:java\/tools\/using-local-server|java-gen2\/release-notes)(?:\/|$)/.test(normalizedUrl)) return true;
  }

  return false;
}

function pageOverlapScore(page, tokens) {
  const text = normalizeText(pageText(page));
  return tokens.filter((token) => text.includes(token)).length;
}

function buildFeatureAssessment(productName, feature) {
  const findings = [];
  const supportingPages = Array.isArray(feature.supporting_pages) ? feature.supporting_pages : [];
  const sourceLinks = Array.isArray(feature.source_links) ? feature.source_links : [];
  const isSupportMatrix = isSupportMatrixFeature(productName, feature);
  const isEnumeratedSupport = isEnumeratedSupportFeature(productName, feature);
  const supportMatrixTarget = normalizeText(supportMatrixTargetName(productName, feature));
  const broadSupportPages = supportingPages.filter((page) => isBroadSupportCatalogUrl(page.url));
  const broadSupportMentionsTarget = supportMatrixTarget && broadSupportPages.some((page) => normalizeText(pageText(page)).includes(supportMatrixTarget));
  const enumeratedSupportEvidence = isEnumeratedSupport
    || ((["access approval", "access transparency"].includes(normalizeText(productName)))
      && (broadSupportPages.length > 0 || sourceLinks.some((url) => isBroadSupportCatalogUrl(url))));
  const exactIdentifiers = featureExactIdentifiersForGate(productName, feature);
  const tokens = informativeTokens(productName, feature);
  const historicalDeprecatedField = isHistoricalDeprecatedFieldFeature(productName, feature);
  const dedicatedEquivalentPages = supportingPages.filter((page) => hasProductSpecificDedicatedEvidence(productName, feature, page));

  if (supportingPages.length === 0) {
    findings.push({
      severity: "fail",
      rule: "missing_supporting_pages",
      message: "The feature has no supporting pages in Step 6.",
      suggested_steps: ["step-03", "step-04", "step-06"],
    });
  }

  if (String(feature.coverage_status || "").toUpperCase() === "NONE") {
    findings.push({
      severity: "fail",
      rule: "coverage_none",
      message: "The feature ended with coverage NONE.",
      suggested_steps: ["step-03", "step-04", "step-06"],
    });
  }

  if (String(feature.coverage_status || "").toUpperCase() === "LOW") {
    findings.push({
      severity: enumeratedSupportEvidence ? "warn" : "fail",
      rule: "coverage_low",
      message: "The feature ended with coverage LOW.",
      suggested_steps: enumeratedSupportEvidence ? ["step-06"] : ["step-03", "step-04", "step-06"],
    });
  }

  if (sourceLinks.some((url) => isReleaseNotesUrl(url))) {
    const releaseNotesPages = supportingPages.filter((page) => isReleaseNotesUrl(page.url));
    const releaseNotesCarryDedicatedEvidence = releaseNotesPages.some((page) => (
      exactIdentifiers.some((identifier) => pageMentionsExactIdentifier(productName, page, identifier))
      || hasProductSpecificDedicatedEvidence(productName, feature, page)
    ));
    if (!releaseNotesCarryDedicatedEvidence) {
      findings.push({
        severity: "fail",
        rule: "release_notes_used",
        message: "Release notes were used as supporting evidence in Step 6.",
        suggested_steps: ["step-04", "step-06"],
      });
    }
  }

  if (exactIdentifiers.length > 0) {
    const exactMatchPages = supportingPages.filter((page) => (
      exactIdentifiers.some((identifier) => pageMentionsExactIdentifier(productName, page, identifier))
      || hasProductSpecificDedicatedEvidence(productName, feature, page)
    ));
    const sourceLinkedPages = supportingPages.filter((page) => sourceLinks.includes(page.url));
    const sourceLinksCarryExactEvidence = sourceLinkedPages.some((page) => (
      exactIdentifiers.some((identifier) => pageMentionsExactIdentifier(productName, page, identifier))
      || hasProductSpecificDedicatedEvidence(productName, feature, page)
    ));
    const dedicatedHistoricalPages = historicalDeprecatedField
      ? supportingPages.filter((page) => /\/config-connector\/docs\/reference\/resource-docs\//.test(String(page?.url || "")))
      : [];
    const releaseNotesCarryDedicatedEvidence = supportingPages.some((page) => isReleaseNotesUrl(page.url)
      && (exactIdentifiers.some((identifier) => pageMentionsExactIdentifier(productName, page, identifier))
        || hasProductSpecificDedicatedEvidence(productName, feature, page)));
    if (exactMatchPages.length === 0) {
      findings.push({
        severity: (enumeratedSupportEvidence || dedicatedHistoricalPages.length > 0 || dedicatedEquivalentPages.length > 0 || releaseNotesCarryDedicatedEvidence) ? "warn" : "fail",
        rule: "missing_exact_identifier_page",
        message: `No supporting page directly names the exact identifier(s): ${exactIdentifiers.join(", ")}.`,
        suggested_steps: (enumeratedSupportEvidence || dedicatedHistoricalPages.length > 0 || dedicatedEquivalentPages.length > 0 || releaseNotesCarryDedicatedEvidence) ? ["step-06"] : ["step-03", "step-04", "step-06"],
      });
    } else if (!sourceLinksCarryExactEvidence) {
      findings.push({
        severity: (enumeratedSupportEvidence || dedicatedHistoricalPages.length > 0 || dedicatedEquivalentPages.length > 0 || releaseNotesCarryDedicatedEvidence) ? "warn" : "fail",
        rule: "exact_identifier_not_in_source_links",
        message: `Exact identifier evidence exists but is not strongly represented in final source links: ${exactIdentifiers.join(", ")}.`,
        suggested_steps: (enumeratedSupportEvidence || dedicatedHistoricalPages.length > 0 || dedicatedEquivalentPages.length > 0 || releaseNotesCarryDedicatedEvidence) ? ["step-06"] : ["step-04", "step-06"],
      });
    }
  }

  if (tokens.length > 0 && supportingPages.length > 0) {
    const maxOverlap = Math.max(...supportingPages.map((page) => pageOverlapScore(page, tokens)), 0);
    if (maxOverlap === 0) {
      findings.push({
        severity: (enumeratedSupportEvidence || dedicatedEquivalentPages.length > 0) ? "warn" : "fail",
        rule: "generic_supporting_pages",
        message: "Supporting pages do not mention any informative feature tokens.",
        suggested_steps: (enumeratedSupportEvidence || dedicatedEquivalentPages.length > 0) ? ["step-06"] : ["step-03", "step-04", "step-06"],
      });
    } else if (maxOverlap === 1) {
      findings.push({
        severity: "warn",
        rule: "thin_token_overlap",
        message: "Supporting pages only weakly overlap with informative feature tokens.",
        suggested_steps: ["step-03", "step-04", "step-06"],
      });
    }
  }

  if (normalizeText(productName).includes("app engine")) {
    const preferredRuntime = preferredRuntimeMarker(productName);
    if (preferredRuntime) {
      const runtimeFamilies = ["python", "java", "go", "node", "php", "ruby"];
      const conflictingPages = supportingPages.filter((page) => runtimeFamilies
        .filter((runtime) => runtime !== preferredRuntime)
        .some((runtime) => hasRuntimeMarker(page.url, runtime) || hasRuntimeMarker(page.title, runtime)));
      if (conflictingPages.length > 0) {
        findings.push({
          severity: "fail",
          rule: "cross_runtime_contamination",
          message: `Supporting pages include conflicting runtime families for ${preferredRuntime}.`,
          examples: conflictingPages.slice(0, 3).map((page) => page.url),
          suggested_steps: ["step-03", "step-04", "step-06"],
        });
      }
    }
  }

  if (isSupportMatrix) {
    const dedicatedTargetPages = supportingPages.filter((page) => !isBroadSupportCatalogUrl(page.url) && supportMatrixTarget && normalizeText(pageText(page)).includes(supportMatrixTarget));
    if (broadSupportPages.length > 0 && dedicatedTargetPages.length === 0) {
      findings.push({
        severity: "warn",
        rule: "support_matrix_only_evidence",
        message: "The feature is backed only by broad support-matrix style evidence, not a dedicated page for the supported target.",
        suggested_steps: ["step-02", "step-06"],
      });
    }
  }

  const failCount = findings.filter((finding) => finding.severity === "fail").length;
  const warnCount = findings.filter((finding) => finding.severity === "warn").length;

  return {
    feature_name: feature.feature_name,
    feature_slug: slugify(feature.feature_name),
    coverage_status: feature.coverage_status,
    source_link_count: sourceLinks.length,
    supporting_page_count: supportingPages.length,
    pass: failCount === 0,
    fail_count: failCount,
    warn_count: warnCount,
    findings,
    source_links: sourceLinks,
  };
}

function buildMarkdown(productAssessment) {
  const lines = [
    `# Step 07 Quality Gate: ${productAssessment.product_name}`,
    "",
    `- Product slug: \`${productAssessment.product_slug}\``,
    `- Product status: \`${productAssessment.product_status}\``,
    `- Feature count: \`${productAssessment.feature_count}\``,
    `- Passed features: \`${productAssessment.passed_feature_count}\``,
    `- Failed features: \`${productAssessment.failed_feature_count}\``,
    `- Warned features: \`${productAssessment.warned_feature_count}\``,
    `- Fail ratio: \`${productAssessment.fail_ratio.toFixed(4)}\``,
    "",
  ];

  if (productAssessment.failed_features.length === 0) {
    lines.push("All evaluated features passed the Step 07 quality gate.", "");
    return `${lines.join("\n")}\n`;
  }

  lines.push("## Failed Features", "");
  for (const feature of productAssessment.failed_features) {
    lines.push(`### ${feature.feature_name}`, "");
    lines.push(`- Coverage status: \`${feature.coverage_status}\``);
    lines.push(`- Source links: ${feature.source_links.length}`);
    for (const finding of feature.findings.filter((item) => item.severity === "fail")) {
      lines.push(`- FAIL \`${finding.rule}\`: ${finding.message}`);
    }
    for (const finding of feature.findings.filter((item) => item.severity === "warn")) {
      lines.push(`- WARN \`${finding.rule}\`: ${finding.message}`);
    }
    lines.push("");
  }

  return `${lines.join("\n")}\n`;
}

async function listProductSlugs() {
  const productsDir = path.join(inputStep06Root, "products");
  const entries = await readdir(productsDir, { withFileTypes: true });
  return entries
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .filter((slug) => productFilter.length === 0 || productFilter.includes(slug.toLowerCase()))
    .sort();
}

async function processProduct(productSlug) {
  const inputFile = path.join(inputStep06Root, "products", productSlug, "extended-features.json");
  const payload = await readJson(inputFile, null);
  if (!payload?.product_name || !Array.isArray(payload.features)) {
    return null;
  }

  const featureAssessments = payload.features.map((feature) => buildFeatureAssessment(payload.product_name, feature));
  const failedFeatures = featureAssessments.filter((feature) => !feature.pass);
  const warnedFeatures = featureAssessments.filter((feature) => feature.warn_count > 0);
  const assessment = {
    schema_version: schemaVersion,
    generated_at: new Date().toISOString(),
    product_name: payload.product_name,
    product_slug: productSlug,
    input_file: path.relative(process.cwd(), inputFile).replace(/\\/g, "/"),
    feature_count: featureAssessments.length,
    passed_feature_count: featureAssessments.filter((feature) => feature.pass).length,
    failed_feature_count: failedFeatures.length,
    warned_feature_count: warnedFeatures.length,
    fail_ratio: featureAssessments.length > 0 ? failedFeatures.length / featureAssessments.length : 0,
    within_fail_ratio_tolerance: failedFeatures.length === 0
      || (featureAssessments.length > 0 && (failedFeatures.length / featureAssessments.length) <= maxFailRatio),
    product_status: strictProductPass
      ? (failedFeatures.length === 0 ? "PASS" : "FAIL")
      : (failedFeatures.length === 0 || (featureAssessments.length > 0 && (failedFeatures.length / featureAssessments.length) <= maxFailRatio)
          ? "PASS"
          : "FAIL"),
    thresholds: {
      max_fail_ratio: maxFailRatio,
      strict_product_pass: strictProductPass,
    },
    failed_features: failedFeatures,
    warned_features: warnedFeatures,
    features: featureAssessments,
  };

  const outputDir = path.join(outputProductsDir, productSlug);
  await mkdir(outputDir, { recursive: true });
  await writeJson(path.join(outputDir, "gate.json"), assessment);
  await writeFile(path.join(outputDir, "gate.md"), buildMarkdown(assessment), "utf8");
  return {
    product_name: assessment.product_name,
    product_slug: productSlug,
    product_status: assessment.product_status,
    feature_count: assessment.feature_count,
    failed_feature_count: assessment.failed_feature_count,
    warned_feature_count: assessment.warned_feature_count,
    fail_ratio: assessment.fail_ratio,
    gate_json: path.relative(process.cwd(), path.join(outputDir, "gate.json")).replace(/\\/g, "/"),
    gate_markdown: path.relative(process.cwd(), path.join(outputDir, "gate.md")).replace(/\\/g, "/"),
  };
}

async function main() {
  await mkdir(outputProductsDir, { recursive: true });
  const productSlugs = await listProductSlugs();
  const products = [];
  for (const productSlug of productSlugs) {
    const result = await processProduct(productSlug);
    if (result) {
      products.push(result);
    }
  }

  const failedProducts = products.filter((product) => product.product_status === "FAIL");
  await writeJson(path.join(outputRoot, "index.json"), {
    schema_version: schemaVersion,
    generated_at: new Date().toISOString(),
    input_step06_root: path.relative(process.cwd(), inputStep06Root).replace(/\\/g, "/"),
    output_root: path.relative(process.cwd(), outputRoot).replace(/\\/g, "/"),
    product_count: products.length,
    failed_product_count: failedProducts.length,
    thresholds: {
      max_fail_ratio: maxFailRatio,
    },
    products,
  });

  console.log(JSON.stringify({
    schema_version: schemaVersion,
    input_step06_root: inputStep06Root,
    output_root: outputRoot,
    product_count: products.length,
    failed_product_count: failedProducts.length,
  }, null, 2));
}

await main();
