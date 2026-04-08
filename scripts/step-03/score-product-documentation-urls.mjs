#!/usr/bin/env zx
import { execFile } from "node:child_process";
import { access, mkdir, readdir, readFile, writeFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { promisify } from "node:util";

const execFileAsync = promisify(execFile);

const schemaVersion = "step-03-url-score-v1";
const inputRoot = path.resolve(process.env.GCP_RADAR_STEP03_INPUT_ROOT || "data/step-02/current");
const inputProductsDir = path.join(inputRoot, "products");
const outputRoot = path.resolve(process.env.GCP_RADAR_STEP03_OUTPUT_ROOT || "data/step-03/current");
const outputProductsDir = path.join(outputRoot, "products");
const indexFile = path.join(outputRoot, "index.json");
const supplementalProductsFile = path.resolve(process.env.GCP_RADAR_STEP03_SUPPLEMENTAL_PRODUCTS_FILE || "data/step-03/manual-products.txt");
const rounds = Number(process.env.GCP_RADAR_STEP03_ROUNDS || 3);
const searchCount = Number(process.env.GCP_RADAR_STEP03_SEARCH_COUNT || 8);
const maxProducts = Number(process.env.GCP_RADAR_STEP03_MAX_PRODUCTS || 0);
const maxCandidatesForApi = Number(process.env.GCP_RADAR_STEP03_MAX_CANDIDATES_FOR_API || 18);
const maxKeptTotal = Number(process.env.GCP_RADAR_STEP03_MAX_KEPT_TOTAL || 10);
const searchConcurrency = Number(process.env.GCP_RADAR_STEP03_SEARCH_CONCURRENCY || Math.min(6, Math.max(2, Math.floor((os.availableParallelism?.() ?? os.cpus().length) / 2))));
const bxRequestTimeoutMs = Number(process.env.GCP_RADAR_STEP03_BX_REQUEST_TIMEOUT_MS || 90000);
const bxMaxAttempts = Number(process.env.GCP_RADAR_STEP03_BX_MAX_ATTEMPTS || 3);
const bxRetryDelayMs = Number(process.env.GCP_RADAR_STEP03_BX_RETRY_DELAY_MS || 2000);
const piModel = process.env.GCP_RADAR_STEP03_PI_MODEL || "openai-codex/gpt-5.3-codex-spark";
const productFilter = (process.env.GCP_RADAR_STEP03_PRODUCTS || "").split(",").map((v) => v.trim()).filter(Boolean);
const reprocess = process.argv.includes("--reprocess");
const officialHosts = ["docs.cloud.google.com", "cloud.google.com", "developers.google.com", "googleapis.dev", "mapsplatform.google.com"];
const baseQueryFamilies = [
  ["product_docs", [(p) => `site:docs.cloud.google.com \"${p}\" Google Cloud documentation`, (p) => `site:docs.cloud.google.com \"${p}\" Google Cloud docs overview`, (p) => `site:docs.cloud.google.com \"${p}\" Google Cloud introduction reference`]],
  ["api_reference", [(p) => `site:docs.cloud.google.com \"${p}\" \"reference/rest\"`, (p) => `site:docs.cloud.google.com \"${p}\" \"APIs and reference\"`, (p) => `site:docs.cloud.google.com \"${p}\" \"API reference\"`]],
  ["iam_permissions", [(p) => `site:docs.cloud.google.com \"${p}\" \"roles and permissions\"`, (p) => `site:docs.cloud.google.com \"${p}\" \"access control\"`, (p) => `site:docs.cloud.google.com \"${p}\" IAM roles permissions`]],
  ["python_client", [(p) => `site:docs.cloud.google.com/python/docs/reference \"${p}\"`, (p) => `site:docs.cloud.google.com \"${p}\" \"Python client libraries\"`, (p) => `site:googleapis.dev/python \"${p}\"`]],
  ["java_client", [(p) => `site:docs.cloud.google.com/java/docs/reference \"${p}\"`, (p) => `site:docs.cloud.google.com \"${p}\" \"Java client libraries\"`, (p) => `site:developers.google.com \"${p}\" \"Java client library\"`]],
];

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const normalizeText = (t) => String(t || "").toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
const compactText = (t) => normalizeText(t).replace(/\s+/g, "");
const slugify = (t) => String(t || "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "").replace(/-{2,}/g, "-");
function normalizeUrl(input) { try { const u = new URL(input); u.hash = ""; const p = new URLSearchParams(); for (const [k, v] of u.searchParams.entries()) if (!k.toLowerCase().startsWith("utm_")) p.set(k, v); u.search = p.toString(); return u.toString().replace(/\/$/, ""); } catch { return String(input || "").trim(); } }
function hostnameFor(url) { try { return new URL(url).hostname.toLowerCase(); } catch { return ""; } }
function pathnameFor(url) { try { return new URL(url).pathname.toLowerCase(); } catch { return ""; } }
const isOfficialGoogleUrl = (url) => officialHosts.some((host) => hostnameFor(url) === host || hostnameFor(url).endsWith(`.${host}`));
function parseProductMarkdown(markdown) { const heading = markdown.split(/\r?\n/).find((line) => line.startsWith("# ")); if (!heading) throw new Error("Product markdown is missing a top-level heading"); return heading.replace(/^#\s+/, "").trim(); }
function buildProfile(name, slug, aliases = []) { const ignored = new Set(["google", "cloud", "platform", "service", "services", "documentation", "docs"]); const aliasTexts = aliases.map((alias) => normalizeText(alias)).filter(Boolean); const set = new Set([...normalizeText(name).split(" "), ...slug.replace(/-/g, " ").split(" "), ...aliasTexts.flatMap((alias) => alias.split(" "))]); return { name, slug, normalizedName: normalizeText(name), compactName: compactText(name), compactSlug: slug.replace(/-/g, ""), aliasTexts, aliasCompacts: aliasTexts.map(compactText), tokens: [...set].filter((t) => t.length >= 3 && !ignored.has(t)) }; }
function slugSimilarity(slug, profile) { const c = slug.replace(/[^a-z0-9]+/g, ""); let s = 0; if (c === profile.compactSlug) s += 100; if (c.includes(profile.compactSlug) || profile.compactSlug.includes(c)) s += 50; for (const token of profile.tokens) if (c.includes(token)) s += 12; return s; }
function expectedAppEngineRuntimeSegment(productSlug) {
  const raw = productSlug.match(/^app-engine-(?:standard|flexible)-environment-(.+)$/)?.[1] || "";
  if (!raw) return "";
  if (raw === "node-js") return "nodejs";
  if (raw === "net") return "dotnet";
  if (raw === "custom-runtimes") return "custom-runtimes";
  return raw.replace(/-/g, "");
}
function escapeQueryPhrase(value) { return String(value || "").replace(/"/g, '\\"').trim(); }
function buildSearchTerms(productName, productSlug) {
  const terms = new Set([productName, productSlug.replace(/-/g, " ")]);
  const strippedApi = productName.replace(/\s+api$/i, "").trim();
  if (strippedApi && strippedApi !== productName) terms.add(strippedApi);
  if (/^chat-api$/i.test(productSlug)) terms.add("Google Chat API");
  if (/^drive-api$/i.test(productSlug)) terms.add("Google Drive API");
  if (/^address-validation-api$/i.test(productSlug)) terms.add("Google Maps Address Validation API");
  if (/^aerial-view-api$/i.test(productSlug)) terms.add("Google Maps Aerial View API");
  if (/^datasets-api$/i.test(productSlug)) terms.add("Google Maps Datasets API");
  if (/^earth-engine-code-editor$/i.test(productSlug)) {
    terms.add("Earth Engine Code Editor");
    terms.add("Google Earth Engine");
  }
  if (/^earth-engine-data-catalog$/i.test(productSlug)) {
    terms.add("Earth Engine Data Catalog");
    terms.add("Google Earth Engine Data Catalog");
    terms.add("Earth Engine datasets");
  }
  if (/^earth-engine-javascript-client-library$/i.test(productSlug)) {
    terms.add("Earth Engine JavaScript client library");
    terms.add("Google Earth Engine JavaScript API");
  }
  if (/^earth-engine-python-client-library$/i.test(productSlug)) {
    terms.add("Earth Engine Python client library");
    terms.add("Google Earth Engine Python API");
  }
  if (/^cloud-product-registry-api$/i.test(productSlug)) {
    terms.add("Cloud Product Registry");
    terms.add("Cloud Product Registry API");
  }
  if (/^cloud-vision-api-product-search$/i.test(productSlug)) {
    terms.add("Vision API Product Search");
    terms.add("Cloud Vision Product Search");
  }
  if (/^container-optimized-os$/i.test(productSlug)) {
    terms.add("Container-Optimized OS");
    terms.add("COS");
  }
  if (/^games-dev-center$/i.test(productSlug)) {
    terms.add("Google Play Games Services");
    terms.add("Play Games Services");
    terms.add("Games services");
  }
  if (/^google-secops-marketplace$/i.test(productSlug)) {
    terms.add("Google SecOps marketplace");
    terms.add("Google Security Operations marketplace");
    terms.add("Content Hub");
  }
  if (/^anthos-attached-clusters$/i.test(productSlug)) {
    terms.add("GKE attached clusters");
    terms.add("attached clusters");
    terms.add("EKS attached cluster");
    terms.add("AKS attached cluster");
  }
  if (/^anthos-clusters-on-aws/.test(productSlug)) {
    terms.add("GKE on AWS");
    terms.add("Google Kubernetes Engine on AWS");
  }
  if (/^anthos-clusters-on-azure/.test(productSlug)) {
    terms.add("GKE on Azure");
    terms.add("Google Kubernetes Engine on Azure");
  }
  if (/^managed-anthos-service-mesh$/i.test(productSlug)) {
    terms.add("Cloud Service Mesh");
    terms.add("Anthos Service Mesh");
    terms.add("managed service mesh");
  }
  if (/^google-workspace-admin-sdk$/i.test(productSlug)) {
    terms.add("Google Workspace Admin SDK");
    terms.add("Admin SDK");
    terms.add("Google Admin SDK");
  }
  if (/^apigee-integrated-portal$/i.test(productSlug)) {
    terms.add("Apigee integrated portal");
    terms.add("integrated portal");
    terms.add("developer portal solutions");
  }
  if (/^apigee-monetization$/i.test(productSlug)) {
    terms.add("Apigee monetization");
    terms.add("monetization");
    terms.add("rate plans");
  }
  if (/^apigee-adapter-for-envoy$/i.test(productSlug)) {
    terms.add("Apigee Adapter for Envoy");
    terms.add("envoy adapter");
    terms.add("Apigee Remote Service for Envoy");
  }
  if (/^apigee-apim-operator$/i.test(productSlug)) {
    terms.add("Apigee APIM Operator");
    terms.add("apigee operator");
    terms.add("apigee kubernetes operator");
  }
  if (/^app-engine-/.test(productSlug)) {
    terms.add(productName.replace(/\s+environment/i, "").trim());
    terms.add(productName.replace(/\s+custom runtimes?/i, " custom runtime").trim());
    terms.add("App Engine");
    const runtime = productSlug.match(/(?:standard|flexible)-environment-(.+)$/)?.[1]?.replace(/-/g, " ") || "";
    if (runtime) {
      terms.add(`App Engine ${runtime}`);
      terms.add(`${runtime} runtime`);
      if (/standard/.test(productSlug)) terms.add(`App Engine standard ${runtime}`);
      if (/flexible/.test(productSlug)) terms.add(`App Engine flexible ${runtime}`);
    }
  }
  return [...terms].filter(Boolean);
}
function buildDynamicQueryFamilies(productName, productSlug) {
  const terms = buildSearchTerms(productName, productSlug);
  const first = terms[0] || productName;
  const mapTerms = terms.map(escapeQueryPhrase);
  const docsVariants = [
    (p) => `site:docs.cloud.google.com \"${p}\" Google Cloud documentation`,
    (p) => `site:docs.cloud.google.com \"${p}\" Google Cloud docs overview`,
    (p) => `site:docs.cloud.google.com \"${p}\" Google Cloud introduction reference`,
  ];
  const families = [...baseQueryFamilies];
  families.push(["developers_docs", [
    () => mapTerms.slice(0, 2).map((term) => `site:developers.google.com \"${term}\" official documentation`).join(" OR "),
    () => mapTerms.slice(0, 2).map((term) => `site:developers.google.com \"${term}\" reference`).join(" OR "),
    () => mapTerms.slice(0, 2).map((term) => `site:developers.google.com \"${term}\" overview`).join(" OR "),
  ]]);
  if (mapTerms.some((term) => /drive|chat|workspace/i.test(term)) || /(?:^|-)chat-api$|(?:^|-)drive-api$/.test(productSlug)) {
    families.push(["workspace_docs", [
      () => mapTerms.slice(0, 2).map((term) => `site:developers.google.com/workspace \"${term}\" API`).join(" OR "),
      () => mapTerms.slice(0, 2).map((term) => `site:developers.google.com/workspace \"${term}\" reference`).join(" OR "),
      () => mapTerms.slice(0, 2).map((term) => `site:developers.google.com/workspace \"${term}\" guides`).join(" OR "),
    ]]);
  }
  if (/admin-sdk/.test(productSlug)) {
    families.push(["admin_sdk_docs", [
      () => 'site:developers.google.com/admin-sdk "Admin SDK API overview"',
      () => 'site:developers.google.com/admin-sdk "reference-overview" OR "reference/rest"',
      () => 'site:developers.google.com/admin-sdk "Directory API" OR "Reports API"',
    ]]);
  }
  if (/games-dev-center/.test(productSlug)) {
    families.push(["games_docs", [
      () => 'site:developers.google.com/games/services "Google Play Games Services"',
      () => 'site:developers.google.com/games/services reference overview',
      () => 'site:developers.google.com/games/services publishing api',
    ]]);
  }
  if (mapTerms.some((term) => /address validation|aerial view|datasets|maps/i.test(term)) || /address-validation-api|aerial-view-api|datasets-api/.test(productSlug)) {
    families.push(["maps_docs", [
      () => mapTerms.slice(0, 2).map((term) => `site:developers.google.com/maps \"${term}\" documentation`).join(" OR "),
      () => mapTerms.slice(0, 2).map((term) => `site:developers.google.com/maps \"${term}\" reference rest`).join(" OR "),
      () => mapTerms.slice(0, 2).map((term) => `site:developers.google.com/maps \"${term}\" overview`).join(" OR "),
    ]]);
  }
  if (/cloud-vision-api-product-search/.test(productSlug)) {
    families.push(["vision_product_search_docs", [
      () => 'site:docs.cloud.google.com/vision/product-search "Vision API Product Search" documentation',
      () => 'site:docs.cloud.google.com/vision/product-search "Vision API Product Search" libraries',
      () => 'site:docs.cloud.google.com/vision/product-search "product search" docs',
    ]]);
  }
  if (/earth-engine/.test(productSlug)) {
    families.push(["earth_engine_docs", [
      () => mapTerms.slice(0, 2).map((term) => `site:developers.google.com/earth-engine \"${term}\" documentation`).join(" OR "),
      () => mapTerms.slice(0, 2).map((term) => `site:developers.google.com/earth-engine \"${term}\" guide`).join(" OR "),
      () => mapTerms.slice(0, 2).map((term) => `site:developers.google.com/earth-engine \"${term}\" api`).join(" OR "),
    ]]);
  }
  if (/app-engine-/.test(productSlug)) {
    families.push(["app_engine_docs", [
      () => {
        const runtime = productSlug.match(/(?:standard|flexible)-environment-(.+)$/)?.[1]?.replace(/-/g, "");
        const env = /standard/.test(productSlug) ? "standard" : /flexible/.test(productSlug) ? "flexible" : "";
        return runtime && env ? `site:docs.cloud.google.com/appengine docs ${env} ${runtime}` : `site:docs.cloud.google.com/appengine \"${escapeQueryPhrase(first)}\"`;
      },
      () => {
        const runtime = productSlug.match(/(?:standard|flexible)-environment-(.+)$/)?.[1]?.replace(/-/g, " ");
        const env = /standard/.test(productSlug) ? "standard" : /flexible/.test(productSlug) ? "flexible" : "";
        return runtime && env ? `site:docs.cloud.google.com/appengine \"App Engine ${env} ${escapeQueryPhrase(runtime)}\"` : `site:cloud.google.com/appengine/docs \"${escapeQueryPhrase(first)}\"`;
      },
      () => `site:docs.cloud.google.com/appengine \"${escapeQueryPhrase(first)}\" access control`,
    ]]);
  }
  if (/anthos-/.test(productSlug)) {
    families.push(["anthos_docs", [
      () => /managed-anthos-service-mesh/.test(productSlug)
        ? 'site:docs.cloud.google.com/service-mesh "Cloud Service Mesh"'
        : /attached-clusters/.test(productSlug)
        ? 'site:docs.cloud.google.com/kubernetes-engine "GKE attached clusters"'
        : `site:docs.cloud.google.com \"${escapeQueryPhrase(first)}\" Anthos documentation`,
      () => /managed-anthos-service-mesh/.test(productSlug)
        ? 'site:docs.cloud.google.com/service-mesh "Anthos Service Mesh"'
        : /attached-clusters/.test(productSlug)
        ? 'site:docs.cloud.google.com/kubernetes-engine "attached clusters" EKS AKS'
        : `site:docs.cloud.google.com/kubernetes-engine \"${escapeQueryPhrase(first)}\"`,
      () => /^anthos-clusters-on-aws/.test(productSlug)
        ? 'site:docs.cloud.google.com/kubernetes-engine "GKE on AWS"'
        : /^anthos-clusters-on-azure/.test(productSlug)
          ? 'site:docs.cloud.google.com/kubernetes-engine "GKE on Azure"'
          : /managed-anthos-service-mesh/.test(productSlug)
            ? 'site:docs.cloud.google.com/service-mesh documentation overview'
          : `site:cloud.google.com/anthos/docs \"${escapeQueryPhrase(first)}\"`,
    ]]);
  }
  if (/apigee-/.test(productSlug)) {
    families.push(["apigee_docs", [
      () => /^apigee-integrated-portal$/.test(productSlug)
        ? 'site:docs.cloud.google.com/apigee "integrated portal"'
        : /^apigee-monetization$/.test(productSlug)
          ? 'site:docs.cloud.google.com/apigee monetization'
          : /^apigee-adapter-for-envoy$/.test(productSlug)
            ? 'site:docs.cloud.google.com/apigee "adapter for envoy"'
            : `site:docs.cloud.google.com/apigee \"${escapeQueryPhrase(first)}\" documentation`,
      () => /^apigee-integrated-portal$/.test(productSlug)
        ? 'site:docs.cloud.google.com/apigee "developer portal solutions"'
        : /^apigee-monetization$/.test(productSlug)
          ? 'site:docs.cloud.google.com/apigee "rate plans" monetization'
          : /^apigee-adapter-for-envoy$/.test(productSlug)
            ? 'site:docs.cloud.google.com/apigee "Remote Service for Envoy"'
            : `site:docs.cloud.google.com/apigee \"${escapeQueryPhrase(first)}\" reference`,
      () => /^apigee-integrated-portal$/.test(productSlug)
        ? 'site:docs.cloud.google.com/apigee portals'
        : /^apigee-monetization$/.test(productSlug)
          ? 'site:docs.cloud.google.com/apigee monetization overview'
          : /^apigee-adapter-for-envoy$/.test(productSlug)
            ? 'site:docs.cloud.google.com/apigee "envoy adapter" overview'
            : `site:docs.cloud.google.com/apigee \"${escapeQueryPhrase(first)}\" access control`,
    ]]);
  }
  return families;
}
function inferHints(candidates, profile) { const pick = (vals) => { const m = new Map(); for (const v of vals.filter(Boolean)) m.set(v, (m.get(v) || 0) + 1); return [...m.entries()].sort((a, b) => slugSimilarity(b[0], profile) - slugSimilarity(a[0], profile) || b[1] - a[1] || a[0].localeCompare(b[0]))[0]?.[0] || ""; }; return { dominantDocFamily: pick(candidates.map((c) => pathnameFor(c.url).match(/^\/([^/]+)\/docs(?:\/|$)/)?.[1] || "")), dominantPythonSlug: pick(candidates.map((c) => pathnameFor(c.url).match(/^\/python\/docs\/reference\/([^/]+)\//)?.[1] || "")), dominantJavaSlug: pick(candidates.map((c) => pathnameFor(c.url).match(/^\/java\/docs\/reference\/([^/]+)\//)?.[1] || "")) }; }
function pathScore(url) { const p = pathnameFor(url); let s = 0; if (/\/docs$/.test(p)) s += 34; if (/\/docs\/(introduction|overview|concepts|reference|apis|access-control)$/.test(p)) s += 30; if (/\/docs\/(about-[^/]+|architecture-overview|developer-overview)$/.test(p)) s += 16; if (/\/reference\/rest(?:\/[^/]+)?$/.test(p)) s += 34; if (/\/roles-permissions\//.test(p)) s += 30; if (/\/python\/docs\/reference\/[^/]+\/latest(?:\/index\.html)?$/.test(p)) s += 28; if (/^\/python\/[^/]+\/latest(?:\/index\.html)?$/.test(p)) s += 26; if (/\/java\/docs\/reference\/[^/]+\/latest\/overview$/.test(p)) s += 28; if (/\/docs\/reference$/.test(p)) s += 20; if (/\/docs\/reference\/libraries$/.test(p)) s += 12; if (/^\/workspace\/[^/]+\/api(?:\/reference)?$/.test(p)) s += 30; if (/^\/workspace\/[^/]+\/api\/guides\/[^/]+$/.test(p)) s += 26; if (/^\/workspace\/[^/]+\/api\/reference\/rest(?:\/[^/]+)?$/.test(p)) s += 34; if (/^\/admin-sdk\/(overview|reference-overview)$/.test(p)) s += 34; if (/^\/admin-sdk\/[^/]+\/reference\/rest(?:\/[^/]+)?$/.test(p)) s += 34; if (/^\/admin-sdk\/[^/]+\/v1\/guides$/.test(p)) s += 30; if (/^\/games\/services$/.test(p)) s += 34; if (/^\/games\/services\/reference$/.test(p) || /^\/games\/services\/publishing\/api$/.test(p) || /^\/games\/services\/web\/api\/rest$/.test(p)) s += 32; if (/^\/maps\/documentation\/[^/]+$/.test(p)) s += 30; if (/^\/maps\/documentation\/[^/]+\/overview$/.test(p)) s += 30; if (/^\/maps\/documentation\/[^/]+\/(android-sdk|ios-sdk)$/.test(p)) s += 32; if (/^\/maps\/documentation\/[^/]+\/(android-sdk|ios-sdk)\/overview$/.test(p)) s += 32; if (/^\/maps\/documentation\/[^/]+\/(android-sdk|ios-sdk)\/reference$/.test(p)) s += 30; if (/^\/maps\/documentation\/[^/]+\/reference\/rest(?:\/[^/]+)?$/.test(p)) s += 34; if (/^\/earth-engine(?:\/guides)?$/.test(p) || /^\/earth-engine\/apidocs$/.test(p)) s += 28; if (/^\/earth-engine\/docs\/(data-catalog|js-client-lib|python-client-lib)$/.test(p)) s += 32; if (/^\/product-registry\/overview$/.test(p)) s += 34; if (/^\/container-optimized-os\/docs$/.test(p)) s += 34; if (/^\/container-optimized-os\/docs\/concepts$/.test(p) || /^\/container-optimized-os\/docs\/concepts\/features-and-benefits$/.test(p)) s += 32; if (/^\/vision\/product-search\/docs$/.test(p)) s += 34; if (/^\/vision\/product-search\/docs\/libraries$/.test(p)) s += 30; if (/^\/chronicle\/docs\/soar\/marketplace\/using-the-marketplace$/.test(p) || /^\/chronicle\/docs\/soar\/marketplace-integrations$/.test(p)) s += 32; if (/^\/appengine\/docs\/standard\/overview$/.test(p) || /^\/appengine\/docs\/flexible\/overview$/.test(p)) s += 34; if (/^\/appengine\/docs\/(standard|flexible)\/[^/]+\/runtime$/.test(p)) s += 30; if (/^\/appengine\/docs\/(standard|flexible)\/custom-runtimes\/about-custom-runtimes$/.test(p)) s += 32; if (/^\/kubernetes-engine\/multi-cloud\/docs\/attached$/.test(p)) s += 34; if (/^\/kubernetes-engine\/multi-cloud\/docs\/attached\/(eks|aks)\/concepts\/overview$/.test(p)) s += 32; if (/^\/kubernetes-engine\/multi-cloud\/docs\/(aws|azure)$/.test(p)) s += 34; if (/^\/kubernetes-engine\/multi-cloud\/docs\/aws\/concepts\/architecture$/.test(p)) s += 32; if (/^\/kubernetes-engine\/multi-cloud\/docs\/azure\/concepts\/requirements$/.test(p)) s += 32; if (/^\/service-mesh\/docs$/.test(p)) s += 34; if (/^\/service-mesh\/docs\/overview$/.test(p)) s += 32; if (/^\/apigee\/docs\/api-platform\/monetization\/overview$/.test(p)) s += 34; if (/^\/apigee\/docs\/api-platform\/publish\/intro-portals$/.test(p)) s += 34; if (/^\/apigee\/docs\/api-platform\/publish\/portal\/build-integrated-portal$/.test(p)) s += 30; if (/^\/apigee\/docs\/api-platform\/envoy-adapter\/[^/]+\/concepts$/.test(p)) s += 34; if (/^\/apigee\/docs\/api-platform\/envoy-adapter\/[^/]+\/reference$/.test(p)) s += 30; if (/\/docs\/reference\/[^/]+\/rest$/.test(p)) s -= 18; if (/\/docs\/reference\/rest\/.+/.test(p)) s -= 32; if (/\/python\/docs\/reference\/[^/]+\/latest\/.+/.test(p)) s -= 28; if (/^\/python\/[^/]+\/latest\/.+/.test(p)) s -= 24; if (/\/java\/docs\/reference\/[^/]+\/latest\/(?!overview$).+/.test(p)) s -= 32; if (/\/(class-|package-|proto-|types?\/)/.test(p)) s -= 26; if (/\/support\//.test(p) || /\/blog\//.test(p) || /\/sdk\/gcloud\/reference\//.test(p)) s -= 40; if (/\/docs\/how-to$/.test(p) || /\/how-to\//.test(p) || /\/get-started/.test(p) || /\/quickstart/.test(p)) s -= 24; if (/bigquery-web-ui|create-billing-account/.test(p)) s -= 24; if (/\/samples?\//.test(p) || /\/tutorial/.test(p) || /\/release-notes$/.test(p)) s -= 18; const n = p.split("/").filter(Boolean).length; if (n <= 2) s += 10; if (n >= 6 && !/^\/workspace\/[^/]+\/api\//.test(p) && !/^\/maps\/documentation\/[^/]+\//.test(p) && !/^\/appengine\/docs\//.test(p) && !/^\/kubernetes-engine\/multi-cloud\/docs\/(attached|aws|azure)/.test(p) && !/^\/apigee\/docs\/api-platform\//.test(p) && !/^\/earth-engine\/docs\//.test(p) && !/^\/admin-sdk\//.test(p) && !/^\/vision\/product-search\//.test(p) && !/^\/chronicle\/docs\/soar\//.test(p)) s -= 18; return s; }
function keywordScore(candidate, productName, intent) { const h = normalizeText(`${candidate.title} ${candidate.description} ${candidate.url}`); let s = 0; for (const token of normalizeText(productName).split(" ").filter((t) => t.length >= 3).slice(0, 6)) if (h.includes(token)) s += 8; if (h.includes(normalizeText(productName))) s += 18; if (h.includes("documentation")) s += 10; if (h.includes("overview")) s += 8; if (h.includes("reference")) s += 12; if (h.includes("api")) s += 8; if (h.includes("roles and permissions")) s += 18; if (h.includes("access control")) s += 14; if (h.includes("iam")) s += 10; if (h.includes("client libraries")) s += 16; if (h.includes("python")) s += intent === "python_client" ? 18 : 2; if (h.includes("java")) s += intent === "java_client" ? 18 : 2; if (h.includes("gateway api") && !normalizeText(productName).includes("gateway api")) s -= 40; if (/migration api|reservation api|data policy api|analytics hub api/.test(h)) s -= 16; if (/release notes|\bpricing\b|\btutorials?\b|\bsamples?\b|\bblog\b/.test(h)) s -= 18; return s; }
function affinityScore(candidate, profile, hints) { const p = pathnameFor(candidate.url); const h = normalizeText(`${candidate.title} ${candidate.description} ${candidate.url}`); const compact = compactText(h); let s = 0; if (h.includes(profile.normalizedName)) s += 24; if (compact.includes(profile.compactName)) s += 12; if (compact.includes(profile.compactSlug)) s += 10; for (const alias of profile.aliasTexts.slice(0, 8)) if (alias && h.includes(alias)) s += 16; for (const alias of profile.aliasCompacts.slice(0, 8)) if (alias && compact.includes(alias)) s += 8; for (const token of profile.tokens.slice(0, 8)) if (h.includes(token)) s += 6; const doc = p.match(/^\/([^/]+)\/docs(?:\/|$)/)?.[1] || ""; const py = p.match(/^\/python\/docs\/reference\/([^/]+)\//)?.[1] || ""; const ja = p.match(/^\/java\/docs\/reference\/([^/]+)\//)?.[1] || ""; const appEngineRuntimeSegment = p.match(/^\/appengine\/docs\/(?:standard|flexible)\/([^/]+)/)?.[1] || ""; const expectedAppEngineRuntime = expectedAppEngineRuntimeSegment(profile.slug); if (hints.dominantDocFamily && doc) s += doc === hints.dominantDocFamily ? 22 : -28; if (expectedAppEngineRuntime && appEngineRuntimeSegment && !["overview", "apis"].includes(appEngineRuntimeSegment)) s += appEngineRuntimeSegment === expectedAppEngineRuntime ? 26 : -42; if (py) { const sim = slugSimilarity(py, profile); s += Math.min(28, Math.max(-40, sim - 20)); if (hints.dominantPythonSlug) s += py === hints.dominantPythonSlug ? 18 : -26; } if (ja) { const sim = slugSimilarity(ja, profile); s += Math.min(28, Math.max(-40, sim - 20)); if (hints.dominantJavaSlug) s += ja === hints.dominantJavaSlug ? 18 : -26; } if (hostnameFor(candidate.url) === "cloud.google.com") s -= 12; if (hostnameFor(candidate.url) === "googleapis.dev") s -= 8; if (/console\.cloud\.google\.com/.test(candidate.url)) s -= 40; return s; }
function deterministicScore(candidate, productName, profile, hints) { const best = candidate.intent_hits[0] || ""; const raw = 18 + (hostnameFor(candidate.url) === "docs.cloud.google.com" ? 28 : hostnameFor(candidate.url) === "cloud.google.com" ? 10 : hostnameFor(candidate.url) === "developers.google.com" ? 8 : hostnameFor(candidate.url) === "googleapis.dev" ? 6 : 0) + pathScore(candidate.url) + keywordScore(candidate, productName, best) + affinityScore(candidate, profile, hints) + (candidate.round_hits.length * 4) + (candidate.query_hits.length * 2) - ((candidate.best_rank - 1) * 3); return Math.max(0, Math.min(100, raw)); }
function classify(candidate, productName, profile, hints) { const p = pathnameFor(candidate.url); const h = normalizeText(`${candidate.title} ${candidate.description} ${candidate.url}`); const py = p.match(/^\/python\/docs\/reference\/([^/]+)\//)?.[1] || p.match(/^\/python\/([^/]+)\//)?.[1] || ""; const ja = p.match(/^\/java\/docs\/reference\/([^/]+)\//)?.[1] || ""; let c = "supporting_page"; if (/release notes|\bblog\b/.test(h) || /\/support\//.test(p)) c = "irrelevant"; else if (/\/docs\/how-to$/.test(p) || /\/how-to\//.test(p) || /\/get-started/.test(p) || /\/quickstart/.test(p) || /\/reference\/rest\/.+/.test(p)) c = "supporting_page"; else if (/\/reference\/rest(?:\/[^/]+)?$/.test(p) || /^\/admin-sdk\/[^/]+\/reference\/rest(?:\/[^/]+)?$/.test(p) || /^\/games\/services\/web\/api\/rest$/.test(p)) c = "api_reference"; else if (/\/roles-permissions\//.test(p) || h.includes("roles and permissions") || h.includes("access control") || h.includes("iam") || /^\/kubernetes-engine\/multi-cloud\/docs\/azure\/concepts\/requirements$/.test(p)) c = "iam_reference"; else if ((/\/python\/docs\/reference\/[^/]+\/latest(?:\/index\.html)?$/.test(p) || /^\/python\/[^/]+\/latest(?:\/index\.html)?$/.test(p)) && slugSimilarity(py, profile) >= 40) c = "python_reference"; else if (/\/java\/docs\/reference\/[^/]+\/latest\/overview$/.test(p) && slugSimilarity(ja, profile) >= 40) c = "java_reference"; else if (/\/docs\/(reference|apis)$/.test(p) || /^\/workspace\/[^/]+\/api\/reference(?:\/rest(?:\/[^/]+)?)?$/.test(p) || /^\/admin-sdk\/reference-overview$/.test(p) || /^\/games\/services\/reference$/.test(p) || /^\/games\/services\/publishing\/api$/.test(p) || /^\/maps\/documentation\/[^/]+\/(android-sdk|ios-sdk)\/reference$/.test(p) || /^\/earth-engine\/apidocs$/.test(p) || /^\/apigee\/docs\/api-platform\/envoy-adapter\/[^/]+\/reference$/.test(p) || /apis and reference/.test(h)) c = "product_reference"; else if (/\/docs$/.test(p) || /\/docs\/(introduction|overview|concepts|about-[^/]+)$/.test(p) || /^\/workspace\/[^/]+\/api(?:\/guides\/[^/]+)?$/.test(p) || /^\/admin-sdk\/overview$/.test(p) || /^\/admin-sdk\/[^/]+\/v1\/guides$/.test(p) || /^\/games\/services$/.test(p) || /^\/maps\/documentation\/[^/]+(?:\/overview)?$/.test(p) || /^\/maps\/documentation\/[^/]+\/(android-sdk|ios-sdk)(?:\/overview)?$/.test(p) || /^\/earth-engine(?:\/guides)?$/.test(p) || /^\/earth-engine\/docs\/(data-catalog|js-client-lib|python-client-lib)$/.test(p) || /^\/product-registry\/overview$/.test(p) || /^\/container-optimized-os\/docs$/.test(p) || /^\/container-optimized-os\/docs\/concepts(?:\/features-and-benefits)?$/.test(p) || /^\/vision\/product-search\/docs$/.test(p) || /^\/vision\/product-search\/docs\/libraries$/.test(p) || /^\/chronicle\/docs\/soar\/marketplace\/using-the-marketplace$/.test(p) || /^\/chronicle\/docs\/soar\/marketplace-integrations$/.test(p) || /^\/appengine\/docs\/(standard|flexible)\/overview$/.test(p) || /^\/appengine\/docs\/(standard|flexible)\/[^/]+\/runtime$/.test(p) || /^\/appengine\/docs\/(standard|flexible)\/custom-runtimes\/about-custom-runtimes$/.test(p) || /^\/kubernetes-engine\/multi-cloud\/docs\/attached$/.test(p) || /^\/kubernetes-engine\/multi-cloud\/docs\/attached\/(eks|aks)\/concepts\/overview$/.test(p) || /^\/kubernetes-engine\/multi-cloud\/docs\/(aws|azure)$/.test(p) || /^\/kubernetes-engine\/multi-cloud\/docs\/aws\/concepts\/architecture$/.test(p) || /^\/service-mesh\/docs$/.test(p) || /^\/service-mesh\/docs\/overview$/.test(p) || /^\/apigee\/docs\/api-platform\/monetization\/overview$/.test(p) || /^\/apigee\/docs\/api-platform\/publish\/intro-portals$/.test(p) || /^\/apigee\/docs\/api-platform\/publish\/portal\/build-integrated-portal$/.test(p) || /^\/apigee\/docs\/api-platform\/envoy-adapter\/[^/]+\/concepts$/.test(p)) c = "product_root"; const score = deterministicScore(candidate, productName, profile, hints); return { classification: c, score, parent_page_likelihood: Math.max(0, Math.min(5, Math.round(score / 20))), product_match: Math.max(0, Math.min(5, Math.round((affinityScore(candidate, profile, hints) + 20) / 16))), coverage_value: Math.max(0, Math.min(5, Math.round((pathScore(candidate.url) + 30) / 16))), keep: score >= 74 && !["irrelevant", "supporting_page"].includes(c), rationale: "Fallback heuristic scoring was used because API scoring was unavailable." }; }
function addDerivedParents(candidates) { const map = new Map(candidates.map((c) => [c.url, c])); for (const candidate of candidates) { const p = pathnameFor(candidate.url); const host = hostnameFor(candidate.url) || "docs.cloud.google.com"; const urls = []; const py = p.match(/^\/python\/docs\/reference\/([^/]+)\/latest\/.+/); if (py) urls.push(`https://${host}/python/docs/reference/${py[1]}/latest`); const pyAlt = p.match(/^\/python\/([^/]+)\/latest\/.+/); if (pyAlt) urls.push(`https://${host}/python/${pyAlt[1]}/latest`); const ja = p.match(/^\/java\/docs\/reference\/([^/]+)\/latest\/.+/); if (ja) urls.push(`https://${host}/java/docs/reference/${ja[1]}/latest/overview`); const rest = p.match(/^\/([^/]+)\/docs\/reference\/rest\/.+/); if (rest) urls.push(`https://docs.cloud.google.com/${rest[1]}/docs/reference/rest`); const sub = p.match(/^\/([^/]+)\/docs\/reference\/[^/]+\/rest$/); if (sub) urls.push(`https://docs.cloud.google.com/${sub[1]}/docs/reference`); const workspaceRest = p.match(/^\/workspace\/([^/]+)\/api\/reference\/rest(?:\/[^/]+)?$/); if (workspaceRest) urls.push(`https://developers.google.com/workspace/${workspaceRest[1]}/api/reference`); const adminRest = p.match(/^\/admin-sdk\/([^/]+)\/reference\/rest(?:\/[^/]+)?$/); if (adminRest) { urls.push(`https://developers.google.com/admin-sdk/reference-overview`); urls.push(`https://developers.google.com/admin-sdk/overview`); } const adminGuides = p.match(/^\/admin-sdk\/([^/]+)\/v1\/guides(?:\/.+)?$/); if (adminGuides) urls.push(`https://developers.google.com/admin-sdk/overview`); const gamesApi = p.match(/^\/games\/services\/(publishing\/api|web\/api\/rest)$/); if (gamesApi) { urls.push(`https://developers.google.com/games/services`); urls.push(`https://developers.google.com/games/services/reference`); } const mapsRest = p.match(/^\/maps\/documentation\/([^/]+)\/reference\/rest$/); if (mapsRest) { urls.push(`https://developers.google.com/maps/documentation/${mapsRest[1]}`); urls.push(`https://developers.google.com/maps/documentation/${mapsRest[1]}/overview`); } const mapsMobile = p.match(/^\/maps\/documentation\/([^/]+)\/(android-sdk|ios-sdk)(?:\/.+)?$/); if (mapsMobile) { urls.push(`https://developers.google.com/maps/documentation/${mapsMobile[1]}/${mapsMobile[2]}`); urls.push(`https://developers.google.com/maps/documentation/${mapsMobile[1]}/${mapsMobile[2]}/overview`); urls.push(`https://developers.google.com/maps/documentation/${mapsMobile[1]}/${mapsMobile[2]}/reference`); } const earthEngineLibrary = p.match(/^\/earth-engine\/docs\/(data-catalog|js-client-lib|python-client-lib)\/.+/); if (earthEngineLibrary) urls.push(`https://developers.google.com/earth-engine/docs/${earthEngineLibrary[1]}`); if (/^\/earth-engine\/apidocs\/.+/.test(p)) urls.push(`https://developers.google.com/earth-engine/apidocs`); if (/^\/earth-engine\/datasets\//.test(p)) urls.push(`https://developers.google.com/earth-engine/docs/data-catalog`); if (/^\/container-optimized-os\/docs\/.+/.test(p)) urls.push(`https://docs.cloud.google.com/container-optimized-os/docs`); if (/^\/vision\/product-search\/docs\/.+/.test(p)) urls.push(`https://docs.cloud.google.com/vision/product-search/docs`); if (/^\/chronicle\/docs\/soar\/marketplace-integrations\/.+/.test(p)) urls.push(`https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations`); const appEngineRuntime = p.match(/^\/appengine\/docs\/(standard|flexible)\/[^/]+\/(runtime|create-app|configuring-your-app-with-app-yaml|building-app|services\/access|specifying-dependencies|upgrade-[^/]+)$/); if (appEngineRuntime) urls.push(`https://${host}/appengine/docs/${appEngineRuntime[1]}/overview`); const appEngineLegacyJava = p.match(/^\/appengine\/docs\/legacy\/standard\/java\/javadoc\//); if (appEngineLegacyJava) urls.push(`https://${host}/appengine/docs/legacy/standard/java`); for (const url of urls.map(normalizeUrl)) if (!map.has(url)) map.set(url, { ...candidate, url }); } return [...map.values()]; }
async function runBxSearch(query) { let last = null; for (let attempt = 1; attempt <= bxMaxAttempts; attempt += 1) { try { const { stdout } = await execFileAsync("bx", ["web", query, "--count", String(searchCount)], { windowsHide: true, maxBuffer: 1024 * 1024 * 64, timeout: bxRequestTimeoutMs }); return JSON.parse(stdout.trim() || "{}"); } catch (error) { last = error; if (attempt < bxMaxAttempts) await sleep(bxRetryDelayMs * attempt); } } throw last; }
async function mapWithConcurrency(items, concurrency, worker) { let next = 0; async function runner() { while (next < items.length) { const i = next; next += 1; await worker(items[i], i); } } await Promise.all(Array.from({ length: Math.max(1, Math.min(concurrency, items.length || 1)) }, () => runner())); }
async function discoverProduct(productName, productSlug) {
  const profile = buildProfile(productName, productSlug, buildSearchTerms(productName, productSlug));
  const queryFamilies = buildDynamicQueryFamilies(productName, productSlug);
  const jobs = [];
  for (let roundIndex = 0; roundIndex < rounds; roundIndex += 1) for (const [intent, variants] of queryFamilies) jobs.push({ round: roundIndex + 1, intent, query: variants[roundIndex % variants.length](productName) });
  const searchRuns = [];
  const candidateMap = new Map();
  await mapWithConcurrency(jobs, searchConcurrency, async (job) => {
    let officialResults = [];
    let errorMessage = "";
    try {
      const payload = await runBxSearch(job.query);
      officialResults = (payload.web?.results || []).filter((r) => isOfficialGoogleUrl(r.url)).map((r, i) => ({ title: String(r.title || "").trim(), url: normalizeUrl(r.url), description: String(r.description || "").trim(), rank: i + 1 }));
    } catch (error) {
      errorMessage = error instanceof Error ? error.message : String(error);
    }
    searchRuns.push({ round: job.round, intent: job.intent, query: job.query, official_result_count: officialResults.length, error: errorMessage || undefined, results: officialResults });
    for (const result of officialResults) {
      if (!candidateMap.has(result.url)) candidateMap.set(result.url, { ...result, query_hits: [], intent_hits: [], round_hits: [], best_rank: result.rank });
      const current = candidateMap.get(result.url);
      current.best_rank = Math.min(current.best_rank, result.rank);
      if (!current.query_hits.includes(job.query)) current.query_hits.push(job.query);
      if (!current.intent_hits.includes(job.intent)) current.intent_hits.push(job.intent);
      if (!current.round_hits.includes(job.round)) current.round_hits.push(job.round);
    }
  });
  const preliminary = addDerivedParents([...candidateMap.values()]).filter((c) => !/codelabs\.developers\.google\.com/.test(c.url)).map((c) => ({ ...c, consistency_score: Math.round((c.round_hits.length / rounds) * 100) }));
  const hints = inferHints(preliminary, profile);
  const candidates = preliminary.map((c) => ({ ...c, product_fit_score: affinityScore(c, profile, hints), deterministic_score: deterministicScore(c, productName, profile, hints) })).sort((a, b) => b.deterministic_score - a.deterministic_score || b.product_fit_score - a.product_fit_score || b.consistency_score - a.consistency_score || a.url.localeCompare(b.url));
  return { profile, hints, candidates, searchRuns: searchRuns.sort((a, b) => a.round - b.round || a.intent.localeCompare(b.intent)) };
}
function applyKeepBudget(scored) { const budgets = new Map([["product_root", 2], ["product_reference", 1], ["api_reference", 2], ["iam_reference", 2], ["python_reference", 1], ["java_reference", 1], ["supporting_page", 1]]); const usage = new Map(); let kept = 0; return scored.map((item) => { const cls = item.api_score.classification; const pathText = pathnameFor(item.url); const supportingAllowed = cls !== "supporting_page" || (item.final_score >= 90 && /\/docs\/(about-[^/]+|architecture-overview|developer-overview|concepts)$/.test(pathText) && !/\/(python|java)\/docs\/reference\//.test(pathText) && !/\/reference\/rest\/.+/.test(pathText)); const canKeep = item.keep && supportingAllowed && kept < maxKeptTotal && (usage.get(cls) || 0) < (budgets.get(cls) || 0); if (canKeep) { kept += 1; usage.set(cls, (usage.get(cls) || 0) + 1); } return { ...item, keep: canKeep }; }); }
function buildMarkdown(productName, items) { const lines = [`# ${productName} Step 03 URL Ranking`, "", "This file lists the official Google documentation URLs selected and scored for this product.", "", "| Final score | Keep | Classification | URL | Query coverage | Rationale |", "| ---: | --- | --- | --- | ---: | --- |"];
  for (const item of items) lines.push(`| ${item.final_score} | ${item.keep ? "yes" : "no"} | ${item.api_score.classification} | ${item.url.replace(/\|/g, "\\|")} | ${item.query_hits.length} | ${String(item.api_score.rationale || "").replace(/\|/g, "\\|")} |`);
  return `${lines.join("\n")}\n`;
}
async function fileExists(filePath) { try { await access(filePath); return true; } catch { return false; } }
async function resolveInputProductsDir() {
  if (await fileExists(inputProductsDir)) return inputProductsDir;
  if (await fileExists(inputRoot)) return inputRoot;
  return inputProductsDir;
}
const readJson = async (filePath) => JSON.parse(await readFile(filePath, "utf8"));
const writeJson = async (filePath, value) => writeFile(filePath, `${JSON.stringify(value, null, 2)}\n`);
function buildIndexEntryFromRanking(ranking, productDir) { const scored = Array.isArray(ranking.scored_urls) ? ranking.scored_urls : []; return { product_name: ranking.product_name, product_slug: ranking.product_slug, ranked_url_count: scored.length, kept_url_count: scored.filter((x) => x.keep).length, top_urls: scored.filter((x) => x.keep).slice(0, 10).map((x) => ({ url: x.url, final_score: x.final_score, classification: x.api_score?.classification || "" })), output_path: path.relative(process.cwd(), path.join(productDir, "ranking.json")).replace(/\\/g, "/") }; }
async function readSupplementalProducts() {
  if (!await fileExists(supplementalProductsFile)) return [];
  return (await readFile(supplementalProductsFile, "utf8"))
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter((line) => line && !line.startsWith("#"))
    .map((product_name) => ({ product_name, product_slug: slugify(product_name), step02_source_path: null }));
}
async function main() {
  await mkdir(outputProductsDir, { recursive: true });
  let piAvailable = false;
  try { await execFileAsync("pi", ["--version"], { windowsHide: true, maxBuffer: 1024 * 1024 * 8 }); piAvailable = true; } catch {}
  const resolvedInputProductsDir = await resolveInputProductsDir();
  const productFiles = (await readdir(resolvedInputProductsDir)).filter((name) => name.endsWith(".md")).sort();
  const step02Products = await Promise.all(productFiles.map(async (fileName) => {
    const product_slug = fileName.replace(/\.md$/, "");
    const step02Path = path.join(resolvedInputProductsDir, fileName);
    const product_name = parseProductMarkdown(await readFile(step02Path, "utf8"));
    return { product_name, product_slug, step02_source_path: step02Path };
  }));
  const mergedProducts = [...step02Products];
  const seenSlugs = new Set(step02Products.map((item) => item.product_slug));
  for (const supplemental of await readSupplementalProducts()) {
    if (!seenSlugs.has(supplemental.product_slug)) {
      seenSlugs.add(supplemental.product_slug);
      mergedProducts.push(supplemental);
    }
  }
  const filteredProducts = mergedProducts
    .filter((item) => productFilter.length === 0 || productFilter.includes(item.product_slug))
    .sort((a, b) => a.product_slug.localeCompare(b.product_slug))
    .slice(0, maxProducts > 0 ? maxProducts : undefined);
  const indexProducts = [];
  for (const product of filteredProducts) {
    const productSlug = product.product_slug;
    const productDir = path.join(outputProductsDir, productSlug);
    const rankingPath = path.join(productDir, "ranking.json");
    const step02Path = product.step02_source_path;
    const productName = product.product_name;
    await mkdir(productDir, { recursive: true });
    if (!reprocess && await fileExists(rankingPath)) {
      const existing = await readJson(rankingPath).catch(() => null);
      if (existing?.product_slug === productSlug) { indexProducts.push(buildIndexEntryFromRanking(existing, productDir)); continue; }
    }
    const discovered = await discoverProduct(productName, productSlug);
    const top = discovered.candidates.slice(0, maxCandidatesForApi);
    const scoredTop = top.map((candidate) => {
      const api_score = classify(candidate, productName, discovered.profile, discovered.hints);
      return { ...candidate, api_score, product_fit_score: affinityScore(candidate, discovered.profile, discovered.hints), final_score: Math.round((candidate.deterministic_score * 0.85) + (candidate.consistency_score * 0.15)), keep: api_score.keep };
    });
    const tail = discovered.candidates.slice(maxCandidatesForApi).map((candidate) => {
      const api_score = classify(candidate, productName, discovered.profile, discovered.hints);
      return { ...candidate, api_score: { ...api_score, rationale: "Heuristic tail scoring was applied outside the API-ranked set." }, product_fit_score: affinityScore(candidate, discovered.profile, discovered.hints), final_score: Math.round((candidate.deterministic_score * 0.85) + (candidate.consistency_score * 0.15)), keep: api_score.keep };
    });
    const allScored = applyKeepBudget([...scoredTop, ...tail].sort((a, b) => b.final_score - a.final_score || b.product_fit_score - a.product_fit_score || b.consistency_score - a.consistency_score || a.url.localeCompare(b.url)));
    await writeJson(rankingPath, {
      schema_version: schemaVersion,
      generated_at: new Date().toISOString(),
      product_name: productName,
      product_slug: productSlug,
      step02_source_path: step02Path ? path.relative(process.cwd(), step02Path).replace(/\\/g, "/") : null,
      rounds,
      search_count: searchCount,
      reprocess_requested: reprocess,
      pi_model: piAvailable ? piModel : "",
      dominant_doc_family: discovered.hints.dominantDocFamily,
      dominant_python_slug: discovered.hints.dominantPythonSlug,
      dominant_java_slug: discovered.hints.dominantJavaSlug,
      candidates_scored_by_api: Math.min(maxCandidatesForApi, discovered.candidates.length),
      search_runs: discovered.searchRuns,
      scored_urls: allScored,
    });
    await writeFile(path.join(productDir, "ranking.md"), buildMarkdown(productName, allScored.slice(0, 25)));
    indexProducts.push(buildIndexEntryFromRanking({ product_name: productName, product_slug: productSlug, scored_urls: allScored }, productDir));
  }
  await writeJson(indexFile, {
    schema_version: schemaVersion,
    generated_at: new Date().toISOString(),
    input_root: path.relative(process.cwd(), resolvedInputProductsDir).replace(/\\/g, "/"),
    output_root: path.relative(process.cwd(), outputRoot).replace(/\\/g, "/"),
    rounds,
    search_count: searchCount,
    reprocess_requested: reprocess,
    pi_model: piAvailable ? piModel : "",
    product_count: indexProducts.length,
    products: indexProducts,
  });
  console.log(JSON.stringify({ schema_version: schemaVersion, input_root: inputRoot, output_root: outputRoot, product_count: indexProducts.length, rounds, search_count: searchCount, max_products: maxProducts || null, reprocess, products_filter: productFilter, index_file: indexFile }, null, 2));
}

await main();
