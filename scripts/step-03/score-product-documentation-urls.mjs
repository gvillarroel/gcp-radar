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
function normalizeUrl(input) { try { const u = new URL(input); u.hash = ""; const p = new URLSearchParams(); for (const [k, v] of u.searchParams.entries()) if (!k.toLowerCase().startsWith("utm_") && k.toLowerCase() !== "hl") p.set(k, v); u.search = p.toString(); return u.toString().replace(/\/$/, ""); } catch { return String(input || "").trim(); } }
function hostnameFor(url) { try { return new URL(url).hostname.toLowerCase(); } catch { return ""; } }
function pathnameFor(url) { try { return new URL(url).pathname.toLowerCase(); } catch { return ""; } }
const isOfficialGoogleUrl = (url) => officialHosts.some((host) => hostnameFor(url) === host || hostnameFor(url).endsWith(`.${host}`));
function parseProductMarkdown(markdown) { const heading = markdown.split(/\r?\n/).find((line) => line.startsWith("# ")); if (!heading) throw new Error("Product markdown is missing a top-level heading"); return heading.replace(/^#\s+/, "").trim(); }
function buildProfile(name, slug, aliases = []) { const ignored = new Set(["google", "cloud", "platform", "service", "services", "documentation", "docs"]); const aliasTexts = aliases.map((alias) => normalizeText(alias)).filter(Boolean); const set = new Set([...normalizeText(name).split(" "), ...slug.replace(/-/g, " ").split(" "), ...aliasTexts.flatMap((alias) => alias.split(" "))]); return { name, slug, normalizedName: normalizeText(name), compactName: compactText(name), compactSlug: slug.replace(/-/g, ""), aliasTexts, aliasCompacts: aliasTexts.map(compactText), tokens: [...set].filter((t) => t.length >= 3 && !ignored.has(t)), familyRules: familyRulesFor(slug) }; }
function pathMatchesRule(pathname, rule) { if (!rule) return false; if (typeof rule === "string") return pathname.startsWith(rule); return rule.test(pathname); }
function matchesAnyRule(pathname, rules = []) { return rules.some((rule) => pathMatchesRule(pathname, rule)); }
const canonicalFamilies = {
  "data-catalog": {
    preferredPaths: [
      "/data-catalog/docs",
      "/data-catalog/docs/reference",
      "/data-catalog/docs/reference/rest",
      "/iam/docs/roles-permissions/datacatalog",
      "/python/docs/reference/datacatalog/latest",
      "/java/docs/reference/google-cloud-datacatalog/latest/overview",
    ],
    forbiddenPaths: [
      "/dataplex/docs/permissions-mapping",
      "/dataplex/docs/transition-to-dataplex-catalog",
      "/data-catalog/docs/samples/",
      "/bigquery/docs/data-catalog",
      "/bigtable/docs/manage-data-assets-using-data-catalog",
      "/spanner/docs/dc-integration",
      "/dataproc-metastore/docs/data-catalog-sync",
      "/go/docs/reference/cloud.google.com/go/datacatalog",
      "/python/docs/reference/datacatalog/latest/google.cloud.datacatalog",
      "/java/docs/reference/google-cloud-datacatalog/latest/com.google.cloud.datacatalog",
    ],
    queryFamilies: [
      () => 'site:docs.cloud.google.com/data-catalog/docs "Data Catalog"',
      () => 'site:docs.cloud.google.com/data-catalog/docs/reference "Data Catalog"',
      () => 'site:docs.cloud.google.com/iam/docs/roles-permissions/datacatalog "Data Catalog"',
      () => 'site:docs.cloud.google.com/python/docs/reference/datacatalog/latest "Data Catalog"',
      () => 'site:docs.cloud.google.com/java/docs/reference/google-cloud-datacatalog/latest/overview "Data Catalog"',
    ],
    classifications: [
      [/^\/data-catalog\/docs(?:$|\/overview$)/, "product_root"],
      [/^\/data-catalog\/docs\/reference$/, "product_reference"],
      [/^\/data-catalog\/docs\/reference\/rest$/, "api_reference"],
      [/^\/iam\/docs\/roles-permissions\/datacatalog(?:\/|$)/, "iam_reference"],
      [/^\/python\/docs\/reference\/datacatalog\/latest(?:\/index\.html)?$/, "python_reference"],
      [/^\/java\/docs\/reference\/google-cloud-datacatalog\/latest\/overview$/, "java_reference"],
    ],
  },
  "dataflow": {
    preferredPaths: [
      "/dataflow/docs",
      "/dataflow/docs/overview",
      "/dataflow/docs/apis",
      "/dataflow/docs/reference/rest",
      "/dataflow/docs/concepts/access-control",
      "/python/docs/reference/dataflow/latest",
      "/java/docs/reference/google-cloud-dataflow/latest/overview",
    ],
    forbiddenPaths: [
      "/dataflow/docs/guides/",
      "/dataflow/docs/guides/templates/",
      "/dataflow/docs/reference/rest/v1b3/",
      "/python/docs/reference/dataflow/latest/google.cloud.dataflow",
      "/java/docs/reference/google-cloud-dataflow/latest/com.google.dataflow",
    ],
    queryFamilies: [
      () => 'site:docs.cloud.google.com/dataflow/docs "Dataflow documentation"',
      () => 'site:docs.cloud.google.com/dataflow/docs/apis "Dataflow APIs and reference"',
      () => 'site:docs.cloud.google.com/dataflow/docs/reference/rest "Dataflow API"',
      () => 'site:docs.cloud.google.com/dataflow/docs/concepts/access-control "Dataflow IAM"',
    ],
    classifications: [
      [/^\/dataflow\/docs(?:$|\/overview$)/, "product_root"],
      [/^\/dataflow\/docs\/apis$/, "product_reference"],
      [/^\/dataflow\/docs\/reference\/rest$/, "api_reference"],
      [/^\/dataflow\/docs\/concepts\/access-control$/, "iam_reference"],
      [/^\/python\/docs\/reference\/dataflow\/latest(?:\/index\.html)?$/, "python_reference"],
      [/^\/java\/docs\/reference\/google-cloud-dataflow\/latest\/overview$/, "java_reference"],
    ],
  },
  "dataform": {
    preferredPaths: [
      "/dataform/docs",
      "/dataform/docs/overview",
      "/dataform/reference/rest",
      "/dataform/docs/access-control",
      "/python/docs/reference/dataform/latest",
      "/java/docs/reference/google-cloud-dataform/latest/overview",
    ],
    forbiddenPaths: [
      "/dataform/docs/organize-code-assets",
      "/dataform/docs/release-notes",
      "/python/docs/reference/dataform/latest/google.cloud.dataform",
      "/java/docs/reference/google-cloud-dataform/latest/com.google.cloud.dataform",
    ],
    queryFamilies: [
      () => 'site:docs.cloud.google.com/dataform/docs "Dataform documentation"',
      () => 'site:docs.cloud.google.com/dataform/reference/rest "Dataform API reference"',
      () => 'site:docs.cloud.google.com/dataform/docs/access-control "Dataform access control"',
    ],
    classifications: [
      [/^\/dataform\/docs(?:$|\/overview$)/, "product_root"],
      [/^\/dataform\/reference\/rest$/, "api_reference"],
      [/^\/dataform\/docs\/access-control$/, "iam_reference"],
      [/^\/python\/docs\/reference\/dataform\/latest(?:\/index\.html)?$/, "python_reference"],
      [/^\/java\/docs\/reference\/google-cloud-dataform\/latest\/overview$/, "java_reference"],
    ],
  },
  "dataplex": {
    preferredPaths: [
      "/dataplex/docs",
      "/dataplex/docs/introduction",
      "/dataplex/docs/reference/rest",
      "/dataplex/docs/iam-and-access-control",
      "/iam/docs/roles-permissions/dataplex",
      "/python/docs/reference/dataplex/latest",
      "/java/docs/reference/google-cloud-dataplex/latest/overview",
    ],
    forbiddenPaths: [
      "/dataplex/docs/ingest-custom-sources",
      "/dataplex/docs/release-notes",
      "/dataplex/docs/permissions-mapping",
      "/alloydb/docs/dataplex-catalog-integration",
      "/bigquery/docs/data-quality-scan",
      "/bigquery/docs/manage-data-preparations",
      "/sql/docs/mysql/dataplex-catalog-integration",
      "/composer/docs/composer-2/lineage-integration",
      "/dataproc-metastore/docs/create-federation",
      "/sensitive-data-protection/docs/add-aspects",
      "/php/docs/reference/cloud-dataplex",
      "/dotnet/docs/reference/google.cloud.dataplex",
      "/python/docs/reference/datacatalog/latest",
      "/java/docs/reference/google-cloud-datacatalog",
    ],
    queryFamilies: [
      () => 'site:docs.cloud.google.com/dataplex/docs "Dataplex Universal Catalog documentation"',
      () => 'site:docs.cloud.google.com/dataplex/docs/reference/rest "Dataplex Universal Catalog API reference"',
      () => 'site:docs.cloud.google.com/dataplex/docs/iam-and-access-control "Dataplex Universal Catalog IAM"',
      () => 'site:docs.cloud.google.com/iam/docs/roles-permissions/dataplex "Dataplex Universal Catalog"',
      () => 'site:docs.cloud.google.com/python/docs/reference/dataplex/latest "Dataplex"',
      () => 'site:docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/overview "Dataplex"',
    ],
    classifications: [
      [/^\/dataplex\/docs(?:$|\/introduction$)/, "product_root"],
      [/^\/dataplex\/docs\/reference\/rest$/, "api_reference"],
      [/^\/dataplex\/docs\/iam-and-access-control$/, "iam_reference"],
      [/^\/iam\/docs\/roles-permissions\/dataplex(?:\/|$)/, "iam_reference"],
      [/^\/python\/docs\/reference\/dataplex\/latest(?:\/index\.html)?$/, "python_reference"],
      [/^\/java\/docs\/reference\/google-cloud-dataplex\/latest\/overview$/, "java_reference"],
    ],
  },
  "apps-script": {
    preferredPaths: ["/apps-script", "/apps-script/overview", "/apps-script/reference", "/apps-script/guides", "/apps-script/concepts/scopes", "/apps-script/guides/services/authorization"],
    forbiddenPaths: ["/error-reporting/", "/logging/", "/monitoring/", "/appengine/", "/eventarc/", "/apigee/"],
    queryFamilies: [
      () => 'site:developers.google.com/apps-script "Apps Script"',
      () => 'site:developers.google.com/apps-script overview reference',
      () => 'site:developers.google.com/apps-script guides',
      () => 'site:developers.google.com/apps-script authorization scopes',
    ],
    classifications: [
      [/^\/apps-script\/(concepts\/scopes|guides\/services\/authorization)(?:\/|$)/, "iam_reference"],
      [/^\/apps-script(?:$|\/(?:overview|guides)(?:\/|$))/, "product_root"],
      [/^\/apps-script\/reference(?:\/|$)/, "product_reference"],
    ],
  },
  "calendar-api": {
    preferredPaths: ["/workspace/calendar/api/guides/overview", "/workspace/calendar/api/auth", "/workspace/calendar/api/concepts", "/workspace/calendar/api/concepts/events-calendars", "/workspace/calendar/api/v3/reference"],
    forbiddenPaths: ["/appengine/", "/eventarc/", "/logging/", "/monitoring/", "/apigee/", "/guides/calendar-status"],
    queryFamilies: [
      () => 'site:developers.google.com/workspace/calendar "Google Calendar API"',
      () => 'site:developers.google.com/workspace/calendar/api overview auth',
      () => 'site:developers.google.com/workspace/calendar/api concepts events-calendars',
      () => 'site:developers.google.com/workspace/calendar/api/v3/reference "Google Calendar API"',
      () => 'site:developers.google.com/calendar/v3/reference "Google Calendar API"',
    ],
    classifications: [
      [/^\/workspace\/calendar\/api\/(?:guides\/overview|concepts\/events-calendars)(?:\/|$)/, "product_root"],
      [/^\/workspace\/calendar\/api\/auth(?:\/|$)/, "iam_reference"],
      [/^\/workspace\/calendar\/api\/concepts(?:\/|$)/, "product_root"],
      [/^\/workspace\/calendar\/api\/v3\/reference(?:\/|$)/, "api_reference"],
      [/^\/calendar\/v3\/reference(?:\/|$)/, "api_reference"],
    ],
  },
  "places-api": {
    preferredPaths: ["/maps/documentation/places/web-service", "/maps/documentation/places/web-service/overview", "/maps/documentation/places/web-service/op-overview", "/maps/documentation/places/web-service/reference/rest"],
    forbiddenPaths: ["/service-usage/", "/compute/", "/appengine/"],
    queryFamilies: [
      () => 'site:developers.google.com/maps/documentation/places/web-service "Places API"',
      () => 'site:developers.google.com/maps/documentation/places/web-service overview "Places API (New)"',
      () => 'site:developers.google.com/maps/documentation/places/web-service reference rest',
    ],
    classifications: [
      [/^\/maps\/documentation\/places\/web-service(?:$|\/(?:overview|op-overview|place-details|legacy\/overview-legacy))(?:\/|$)/, "product_root"],
      [/^\/maps\/documentation\/places\/web-service\/reference\/rest(?:\/|$)/, "api_reference"],
    ],
  },
  "google-workspace-marketplace-api": {
    preferredPaths: ["/workspace/marketplace", "/workspace/marketplace/overview", "/workspace/marketplace/reference/rest", "/workspace/marketplace/authorizing", "/workspace/marketplace/example-calls-marketplace-api"],
    forbiddenPaths: ["/meet/", "/chat/", "/drive/"],
    queryFamilies: [
      () => 'site:developers.google.com/workspace/marketplace "Google Workspace Marketplace API"',
      () => 'site:developers.google.com/workspace/marketplace overview "Marketplace API"',
      () => 'site:developers.google.com/workspace/marketplace authorizing',
      () => 'site:developers.google.com/workspace/marketplace example calls marketplace api',
    ],
    classifications: [
      [/^\/workspace\/marketplace(?:\/overview)?$/, "product_root"],
      [/^\/workspace\/marketplace\/reference\/rest(?:\/|$)/, "api_reference"],
      [/^\/workspace\/marketplace\/authorizing(?:\/|$)/, "iam_reference"],
    ],
  },
  "anthos-config-management": {
    preferredPaths: ["/kubernetes-engine/config-sync/docs", "/kubernetes-engine/config-sync/docs/overview", "/iam/docs/roles-permissions/anthosconfigmanagement"],
    forbiddenPaths: ["/kubernetes-engine/enterprise/docs/architecture/", "/cloud.google.com/anthos/docs", "/kubernetes-engine/config-controller/docs/release-notes"],
    queryFamilies: [
      () => 'site:docs.cloud.google.com/kubernetes-engine/config-sync/docs "Config Sync"',
      () => 'site:docs.cloud.google.com/iam/docs/roles-permissions/anthosconfigmanagement',
      () => 'site:docs.cloud.google.com/kubernetes-engine "Anthos Config Management"',
    ],
    classifications: [
      [/^\/kubernetes-engine\/config-sync\/docs(?:$|\/(?:overview|concepts|how-to|release-notes)(?:\/|$))/, "product_root"],
      [/^\/kubernetes-engine\/config-sync\/docs\/concepts\/architecture(?:\/|$)/, "supporting_page"],
      [/^\/iam\/docs\/roles-permissions\/anthosconfigmanagement(?:\/|$)/, "iam_reference"],
    ],
  },
  "google-secops-siem": {
    preferredPaths: ["/chronicle/docs/secops", "/chronicle/docs/onboard", "/chronicle/docs/reference/google-unified-security"],
    forbiddenPaths: ["/apigee/", "/eventarc/", "/logging/", "/monitoring/"],
    queryFamilies: [
      () => 'site:docs.cloud.google.com/chronicle/docs/secops "Google SecOps"',
      () => 'site:docs.cloud.google.com/chronicle/docs/onboard "Google SecOps"',
      () => 'site:docs.cloud.google.com/chronicle/docs/reports "Google SecOps"',
    ],
    classifications: [
      [/^\/chronicle\/docs\/(?:secops|onboard)(?:$|\/)/, "product_root"],
      [/^\/chronicle\/docs\/(?:reports|administration)(?:$|\/)/, "supporting_page"],
      [/^\/chronicle\/docs\/reference\/google-unified-security(?:\/|$)/, "api_reference"],
    ],
  },
  "apigee-ui": {
    preferredPaths: [
      "/apigee/docs/api-platform/fundamentals/ui-overview",
      "/apigee/docs/api-platform/fundamentals/organization-structure",
      "/apigee/docs/api-platform/system-administration/manage-users",
      "/apigee/docs/api-platform/system-administration/manage-access",
      "/apigee/docs/api-platform/system-administration/users-roles-overview",
      "/apigee/docs/api-platform/system-administration/apigee-roles",
      "/apigee/docs/api-platform/security/iam/iam-overview",
      "/apigee/docs/api-platform/get-started/permissions",
    ],
    forbiddenPaths: ["/apigee/docs/api-platform/integration/", "/apigee/docs/api-platform/publish/", "/apigee/docs/api-platform/analytics/"],
    queryFamilies: [
      () => 'site:docs.cloud.google.com/apigee/docs/api-platform "Apigee UI" overview',
      () => 'site:docs.cloud.google.com/apigee/docs/api-platform "Apigee roles" OR "Users and roles"',
      () => 'site:docs.cloud.google.com/apigee/docs/api-platform "manage users" OR "manage access" "Apigee UI"',
      () => 'site:docs.cloud.google.com/apigee/docs/api-platform "IAM-based API authentication overview" Apigee',
    ],
    classifications: [
      [/^\/apigee\/docs\/api-platform\/fundamentals\/ui-overview(?:\/|$)/, "product_root"],
      [/^\/apigee\/docs\/api-platform\/fundamentals\/organization-structure(?:\/|$)/, "product_reference"],
      [/^\/apigee\/docs\/api-platform\/system-administration\/(manage-users|manage-access)(?:\/|$)/, "product_reference"],
      [/^\/apigee\/docs\/api-platform\/system-administration\/(apigee-roles|users-roles-overview|spaces\/spaces-roles-permissions)(?:\/|$)/, "iam_reference"],
      [/^\/apigee\/docs\/api-platform\/security\/iam\/iam-overview(?:\/|$)/, "iam_reference"],
      [/^\/apigee\/docs\/api-platform\/get-started\/permissions(?:\/|$)/, "iam_reference"],
    ],
  },
  "container-optimized-os": {
    preferredPaths: [
      "/container-optimized-os/docs",
      "/container-optimized-os/docs/concepts",
      "/container-optimized-os/docs/concepts/features-and-benefits",
      "/container-optimized-os/docs/concepts/security",
    ],
    forbiddenPaths: ["/container-optimized-os/docs/how-to/", "/container-optimized-os/docs/release-notes"],
    queryFamilies: [
      () => 'site:docs.cloud.google.com/container-optimized-os/docs "Container-Optimized OS"',
      () => 'site:docs.cloud.google.com/container-optimized-os/docs/concepts "Container-Optimized OS"',
      () => 'site:docs.cloud.google.com/container-optimized-os/docs/concepts/security "Container-Optimized OS"',
    ],
    classifications: [
      [/^\/container-optimized-os\/docs$/, "product_root"],
      [/^\/container-optimized-os\/docs\/concepts$/, "product_reference"],
      [/^\/container-optimized-os\/docs\/concepts\/features-and-benefits$/, "product_root"],
      [/^\/container-optimized-os\/docs\/concepts\/security$/, "supporting_page"],
    ],
  },
  "cortex": {
    preferredPaths: ["/cortex/docs", "/cortex/docs/overview", "/cortex/docs/resources", "/cortex/docs/deployment-step-one"],
    forbiddenPaths: ["/cortex/studio", "/cortex/docs/release-notes", "/sap/"],
    queryFamilies: [
      () => 'site:docs.cloud.google.com/cortex/docs "Google Cloud Cortex Framework"',
      () => 'site:docs.cloud.google.com/cortex/docs overview resources',
      () => 'site:docs.cloud.google.com/cortex/docs "deployment step one"',
    ],
    classifications: [
      [/^\/cortex\/docs$/, "product_root"],
      [/^\/cortex\/docs\/overview(?:\/|$)/, "product_root"],
      [/^\/cortex\/docs\/resources(?:\/|$)/, "product_reference"],
      [/^\/cortex\/docs\/deployment-step-one(?:\/|$)/, "product_reference"],
    ],
  },
  "deep-learning-containers": {
    preferredPaths: [
      "/deep-learning-containers/docs",
      "/deep-learning-containers/docs/overview",
      "/deep-learning-containers/docs/choosing-container",
      "/deep-learning-containers/docs/kubernetes-container",
    ],
    forbiddenPaths: ["/vertex-ai/docs/general/deep-learning", "/tensorflow-enterprise/docs/use-with-deep-learning-containers", "/deep-learning-containers/docs/release-notes"],
    queryFamilies: [
      () => 'site:docs.cloud.google.com/deep-learning-containers/docs "Deep Learning Containers"',
      () => 'site:docs.cloud.google.com/deep-learning-containers/docs overview "choose a container image"',
      () => 'site:docs.cloud.google.com/deep-learning-containers/docs "kubernetes-container" OR "getting-started-local"',
    ],
    classifications: [
      [/^\/deep-learning-containers\/docs$/, "product_root"],
      [/^\/deep-learning-containers\/docs\/overview(?:\/|$)/, "product_root"],
      [/^\/deep-learning-containers\/docs\/(choosing-container|kubernetes-container)(?:\/|$)/, "product_reference"],
    ],
  },
  "deep-learning-vm-images": {
    preferredPaths: [
      "/deep-learning-vm/docs",
      "/deep-learning-vm/docs/introduction",
      "/deep-learning-vm/docs/images",
      "/deep-learning-vm/docs/concepts-images",
    ],
    forbiddenPaths: ["/vertex-ai/docs/general/deep-learning", "/deep-learning-vm/docs/release-notes"],
    queryFamilies: [
      () => 'site:docs.cloud.google.com/deep-learning-vm/docs "Deep Learning VM Images"',
      () => 'site:docs.cloud.google.com/deep-learning-vm/docs introduction images',
      () => 'site:docs.cloud.google.com/deep-learning-vm/docs "concepts-images" OR "choose an image"',
    ],
    classifications: [
      [/^\/deep-learning-vm\/docs$/, "product_root"],
      [/^\/deep-learning-vm\/docs\/introduction(?:\/|$)/, "product_root"],
      [/^\/deep-learning-vm\/docs\/(images|concepts-images)(?:\/|$)/, "product_reference"],
    ],
  },
  "endpoint-verification": {
    preferredPaths: [
      "/endpoint-verification/docs",
      "/endpoint-verification/docs/overview",
      "/endpoint-verification/docs/device-information",
      "/endpoint-verification/docs/creating-device-access-level",
      "/endpoint-verification/docs/deploying-with-admin-console",
    ],
    forbiddenPaths: ["/endpoint-verification/docs/quickstart", "/endpoint-verification/docs/self-install-extension"],
    queryFamilies: [
      () => 'site:docs.cloud.google.com/endpoint-verification/docs "Endpoint Verification"',
      () => 'site:docs.cloud.google.com/endpoint-verification/docs overview "device information"',
      () => 'site:docs.cloud.google.com/endpoint-verification/docs "creating-device-access-level" OR "deploying-with-admin-console"',
    ],
    classifications: [
      [/^\/endpoint-verification\/docs$/, "product_root"],
      [/^\/endpoint-verification\/docs\/overview(?:\/|$)/, "product_root"],
      [/^\/endpoint-verification\/docs\/(device-information|creating-device-access-level|deploying-with-admin-console)(?:\/|$)/, "product_reference"],
    ],
  },
  "gemini-code-assist": {
    preferredPaths: [
      "/gemini/docs/codeassist/overview",
      "/gemini/docs/codeassist/code-overview",
      "/gemini/docs/codeassist/set-up-gemini",
      "/gemini/docs/codeassist/write-code-gemini",
      "/gemini/docs/codeassist/code-customization-overview",
      "/gemini/docs/codeassist/gemini-cli",
      "/iam/docs/roles-permissions/geminicodeassistmanagement",
    ],
    forbiddenPaths: ["/cloud-assist/", "/sql/docs/", "/workstations/docs/", "/code/docs/shell/"],
    queryFamilies: [
      () => 'site:docs.cloud.google.com/gemini/docs/codeassist "Gemini Code Assist"',
      () => 'site:docs.cloud.google.com/gemini/docs/codeassist overview "code overview"',
      () => 'site:docs.cloud.google.com/gemini/docs/codeassist "set-up-gemini" OR "write-code-gemini" OR "gemini-cli"',
      () => 'site:docs.cloud.google.com/iam/docs/roles-permissions/geminicodeassistmanagement',
    ],
    classifications: [
      [/^\/gemini\/docs\/codeassist\/overview(?:\/|$)/, "product_root"],
      [/^\/gemini\/docs\/codeassist\/(code-overview|set-up-gemini|write-code-gemini|code-customization-overview|gemini-cli)(?:\/|$)/, "product_reference"],
      [/^\/gemini\/docs\/codeassist\/(manage-licenses|security-privacy-compliance|monitor-gemini-code-assist)(?:\/|$)/, "iam_reference"],
      [/^\/iam\/docs\/roles-permissions\/geminicodeassistmanagement(?:\/|$)/, "iam_reference"],
    ],
  },
  "gemini-code-assist-standard-and-enterprise": {
    preferredPaths: [
      "/gemini/docs/codeassist/overview",
      "/gemini/docs/codeassist/set-up-gemini",
      "/gemini/docs/codeassist/write-code-gemini",
      "/gemini/docs/codeassist/code-overview",
      "/gemini/docs/codeassist/manage-licenses",
      "/gemini/docs/codeassist/security-privacy-compliance",
      "/iam/docs/roles-permissions/geminicodeassistmanagement",
    ],
    forbiddenPaths: ["/cloud-assist/", "/sql/docs/", "/workstations/docs/", "/code/docs/shell/"],
    queryFamilies: [
      () => 'site:docs.cloud.google.com/gemini/docs/codeassist "Gemini Code Assist Standard and Enterprise"',
      () => 'site:docs.cloud.google.com/gemini/docs/codeassist overview "manage-licenses" OR "security-privacy-compliance"',
      () => 'site:docs.cloud.google.com/gemini/docs/codeassist "set-up-gemini" OR "write-code-gemini"',
      () => 'site:docs.cloud.google.com/iam/docs/roles-permissions/geminicodeassistmanagement',
    ],
    classifications: [
      [/^\/gemini\/docs\/codeassist\/overview(?:\/|$)/, "product_root"],
      [/^\/gemini\/docs\/codeassist\/(set-up-gemini|write-code-gemini|code-overview)(?:\/|$)/, "product_reference"],
      [/^\/gemini\/docs\/codeassist\/(manage-licenses|security-privacy-compliance|configure-logging)(?:\/|$)/, "iam_reference"],
      [/^\/iam\/docs\/roles-permissions\/geminicodeassistmanagement(?:\/|$)/, "iam_reference"],
    ],
  },
  "gke-enterprise": {
    preferredPaths: [
      "/kubernetes-engine/enterprise/docs/deployment-options",
      "/kubernetes-engine/enterprise/docs/version-and-upgrade-support",
      "/kubernetes-engine/enterprise/docs/concepts/roles-tasks",
    ],
    forbiddenPaths: ["/kubernetes-engine/enterprise/docs/release-notes", "/kubernetes-engine/enterprise/knative-serving/docs", "/service-mesh/docs/ui-differences"],
    queryFamilies: [
      () => 'site:docs.cloud.google.com/kubernetes-engine/enterprise/docs "GKE deployment options"',
      () => 'site:docs.cloud.google.com/kubernetes-engine/enterprise/docs "version and upgrade support" "cluster type"',
      () => 'site:docs.cloud.google.com/kubernetes-engine/enterprise/docs "GKE Enterprise" "common GKE user roles and tasks"',
    ],
    classifications: [
      [/^\/kubernetes-engine\/enterprise\/docs\/deployment-options(?:\/|$)/, "product_root"],
      [/^\/kubernetes-engine\/enterprise\/docs\/version-and-upgrade-support(?:\/|$)/, "product_reference"],
      [/^\/kubernetes-engine\/enterprise\/docs\/concepts\/roles-tasks(?:\/|$)/, "iam_reference"],
    ],
  },
  "google-ad-manager-api": {
    preferredPaths: [
      "/ad-manager/api/beta/getting-started",
      "/ad-manager/api/beta/reference/rest",
      "/ad-manager/api/authentication",
      "/ad-manager/api/intro",
    ],
    forbiddenPaths: ["/ad-manager/api/beta/docs/release-notes", "/ad-manager/api/reference/v", "/ad-manager/api/beta/client-libraries/"],
    queryFamilies: [
      () => 'site:developers.google.com/ad-manager/api/beta "Google Ad Manager API"',
      () => 'site:developers.google.com/ad-manager/api/beta "getting started" "reference/rest"',
      () => 'site:developers.google.com/ad-manager/api authentication "Google Ad Manager API"',
    ],
    classifications: [
      [/^\/ad-manager\/api\/beta\/getting-started(?:\/|$)/, "product_root"],
      [/^\/ad-manager\/api\/intro(?:\/|$)/, "product_root"],
      [/^\/ad-manager\/api\/beta\/reference\/rest(?:\/|$)/, "api_reference"],
      [/^\/ad-manager\/api\/authentication(?:\/|$)/, "iam_reference"],
    ],
  },
  "google-cloud-contact-center-as-a-service": {
    preferredPaths: [
      "/contact-center/ccai-platform/docs",
      "/contact-center/ccai-platform/docs/get-started",
      "/contact-center/ccai-platform/docs/conversational-insights",
      "/contact-center/ccai-platform/docs/web-sdk-v3-api-reference",
      "/contact-center/ccai-platform/docs/web-sdk-api",
      "/contact-center/ccai-platform/docs/user-roles-permissions",
    ],
    forbiddenPaths: ["/contact-center/ccai-platform/docs/release-notes", "/contact-center/ccai-platform/docs/localities"],
    queryFamilies: [
      () => 'site:docs.cloud.google.com/contact-center/ccai-platform/docs "Google Cloud Contact Center as a Service"',
      () => 'site:docs.cloud.google.com/contact-center/ccai-platform/docs "CCAI Platform" "conversational-insights" OR "web-sdk-v3-api-reference"',
      () => 'site:docs.cloud.google.com/contact-center/ccai-platform/docs "user roles permissions" "CCAI Platform"',
    ],
    classifications: [
      [/^\/contact-center\/ccai-platform\/docs$/, "product_root"],
      [/^\/contact-center\/ccai-platform\/docs\/(get-started|conversational-insights)(?:\/|$)/, "product_reference"],
      [/^\/contact-center\/ccai-platform\/docs\/(web-sdk-v3-api-reference|web-sdk-api)(?:\/|$)/, "product_reference"],
      [/^\/contact-center\/ccai-platform\/docs\/user-roles-permissions(?:\/|$)/, "iam_reference"],
    ],
  },
  "google-cloud-mcp-servers": {
    preferredPaths: [
      "/mcp",
      "/mcp/overview",
      "/mcp/supported-products",
      "/mcp/manage-mcp-servers",
      "/mcp/enable-disable-mcp-servers",
    ],
    forbiddenPaths: ["/blog/", "/discover/", "/run/docs/host-mcp-servers"],
    queryFamilies: [
      () => 'site:docs.cloud.google.com/mcp "Google Cloud MCP servers"',
      () => 'site:docs.cloud.google.com/mcp overview "supported products"',
      () => 'site:docs.cloud.google.com/mcp "manage mcp servers" OR "enable disable mcp servers"',
    ],
    classifications: [
      [/^\/mcp$/, "product_root"],
      [/^\/mcp\/overview(?:\/|$)/, "product_root"],
      [/^\/mcp\/(supported-products|manage-mcp-servers|enable-disable-mcp-servers)(?:\/|$)/, "product_reference"],
    ],
  },
  "google-secops-marketplace": {
    preferredPaths: ["/chronicle/docs/soar/marketplace-integrations", "/chronicle/docs/soar/marketplace-integrations/google-cloud-recommender", "/chronicle/docs/secops/google-secops-soar-toc"],
    forbiddenPaths: ["/release-notes", "/chronicle/docs/secops$"],
    queryFamilies: [
      () => 'site:docs.cloud.google.com/chronicle/docs/soar "Google SecOps marketplace"',
      () => 'site:docs.cloud.google.com/chronicle/docs/soar "marketplace integrations"',
      () => 'site:docs.cloud.google.com/chronicle/docs/secops "Google SecOps SOAR"',
    ],
    classifications: [
      [/^\/chronicle\/docs\/soar\/marketplace-integrations(?:\/|$)/, "product_root"],
      [/^\/chronicle\/docs\/soar\/marketplace-integrations\/[^/]+(?:\/|$)/, "product_reference"],
      [/^\/chronicle\/docs\/secops\/google-secops-soar-toc(?:\/|$)/, "product_reference"],
    ],
  },
  "guest-environment": {
    preferredPaths: ["/compute/docs/images/guest-environment", "/compute/docs/images/guest-agent", "/compute/docs/images/guest-agent-functions", "/compute/docs/images/install-guest-environment", "/compute/docs/metadata/manage-guest-attributes"],
    forbiddenPaths: ["/compute/docs/images/guest-environment/release-notes", "/startup-scripts"],
    queryFamilies: [
      () => 'site:docs.cloud.google.com/compute/docs/images "Guest Environment"',
      () => 'site:docs.cloud.google.com/compute/docs/images "guest agent" OR "install guest environment"',
      () => 'site:docs.cloud.google.com/compute/docs/metadata "guest attributes"',
    ],
    classifications: [
      [/^\/compute\/docs\/images\/guest-environment(?:\/|$)/, "product_root"],
      [/^\/compute\/docs\/images\/(guest-agent|guest-agent-functions|install-guest-environment|manage-guest-agent)(?:\/|$)/, "product_reference"],
      [/^\/compute\/docs\/metadata\/manage-guest-attributes(?:\/|$)/, "iam_reference"],
    ],
  },
  "key-access-justifications": {
    preferredPaths: ["/assured-workloads/key-access-justifications/docs/overview", "/assured-workloads/key-access-justifications/docs/justification-codes", "/assured-workloads/key-access-justifications/docs/supported-services", "/assured-workloads/key-access-justifications/docs/configure-hsm"],
    forbiddenPaths: ["/sql/docs/", "/java/docs/reference/google-cloud-kms", "/kms/docs/ekm"],
    queryFamilies: [
      () => 'site:docs.cloud.google.com/assured-workloads/key-access-justifications "Key Access Justifications"',
      () => 'site:docs.cloud.google.com/assured-workloads/key-access-justifications justification-codes OR "supported-services"',
      () => 'site:docs.cloud.google.com/assured-workloads/key-access-justifications configure-hsm',
    ],
    classifications: [
      [/^\/assured-workloads\/key-access-justifications\/docs\/overview(?:\/|$)/, "product_root"],
      [/^\/assured-workloads\/key-access-justifications\/docs\/(justification-codes|supported-services|assured-workloads|access-approval|access-transparency)(?:\/|$)/, "product_reference"],
      [/^\/assured-workloads\/key-access-justifications\/docs\/configure-hsm(?:\/|$)/, "iam_reference"],
    ],
  },
  "mainframe-assessment-tool": {
    preferredPaths: ["/mainframe-assessment-tool/docs", "/mainframe-assessment-tool/docs/overview", "/mainframe-assessment-tool/docs/configure-your-project", "/mainframe-assessment-tool/docs/create-instance", "/mainframe-assessment-tool/docs/perform-assessment", "/mainframe-assessment-tool/docs/review-results"],
    forbiddenPaths: ["/release-notes", "/open-source-disclosure"],
    queryFamilies: [
      () => 'site:docs.cloud.google.com/mainframe-assessment-tool/docs "Mainframe Assessment Tool"',
      () => 'site:docs.cloud.google.com/mainframe-assessment-tool/docs overview OR "perform-assessment"',
      () => 'site:docs.cloud.google.com/mainframe-assessment-tool/docs "configure-your-project" OR "review-results"',
    ],
    classifications: [
      [/^\/mainframe-assessment-tool\/docs$/, "product_root"],
      [/^\/mainframe-assessment-tool\/docs\/overview(?:\/|$)/, "product_root"],
      [/^\/mainframe-assessment-tool\/docs\/(configure-your-project|create-instance|perform-assessment|review-results|mcp-server)(?:\/|$)/, "product_reference"],
    ],
  },
  "managed-anthos-service-mesh": {
    preferredPaths: ["/service-mesh/docs", "/service-mesh/docs/overview", "/service-mesh/docs/supported-features-managed", "/service-mesh/docs/managed/install-anthos-service-mesh-console", "/service-mesh/docs/service-routing/service-routing-overview"],
    forbiddenPaths: ["/release-notes", "/v1.19/", "/v1.21/", "/v1.22/", "/v1.23/", "/v1.24/", "/legacy/"],
    queryFamilies: [
      () => 'site:docs.cloud.google.com/service-mesh/docs "Cloud Service Mesh"',
      () => 'site:docs.cloud.google.com/service-mesh/docs "supported-features-managed" OR "install-anthos-service-mesh-console"',
      () => 'site:docs.cloud.google.com/service-mesh/docs "service-routing-overview" OR "observability-overview"',
    ],
    classifications: [
      [/^\/service-mesh\/docs$/, "product_root"],
      [/^\/service-mesh\/docs\/overview(?:\/|$)/, "product_root"],
      [/^\/service-mesh\/docs\/(supported-features-managed|managed\/install-anthos-service-mesh-console|prepare-app-for-anthos-service-mesh|gateway\/overview|observability-overview|service-routing\/service-routing-overview)(?:\/|$)/, "product_reference"],
    ],
  },
  "manufacturing-data-engine": {
    preferredPaths: ["/manufacturing-data-engine/docs", "/manufacturing-data-engine/docs/overview", "/manufacturing-data-engine/docs/concepts/key-concepts", "/manufacturing-data-engine/docs/guides/access/how-to-query-in-gcs", "/manufacturing-data-engine/docs/reference/bigquery-schemas"],
    forbiddenPaths: ["/release-notes", "/resources/bigquery-schema-changes"],
    queryFamilies: [
      () => 'site:docs.cloud.google.com/manufacturing-data-engine/docs "Manufacturing Data Engine"',
      () => 'site:docs.cloud.google.com/manufacturing-data-engine/docs "key-concepts" OR "how-to-query-in-gcs"',
      () => 'site:docs.cloud.google.com/manufacturing-data-engine/docs/reference "bigquery-schemas"',
    ],
    classifications: [
      [/^\/manufacturing-data-engine\/docs$/, "product_root"],
      [/^\/manufacturing-data-engine\/docs\/overview(?:\/|$)/, "product_root"],
      [/^\/manufacturing-data-engine\/docs\/(concepts\/key-concepts|concepts\/manufacturing-connect|guides\/access\/how-to-query-in-gcs|guides\/operate\/how-to-monitor-mde-services|reference\/bigquery-schemas)(?:\/|$)/, "product_reference"],
    ],
  },
  "migrate-for-compute-engine": {
    preferredPaths: ["/migrate/virtual-machines/docs/5.0/discover/migrating-vms-migrate-for-compute-engine-getting-started", "/migrate/virtual-machines/docs/5.0/discover/architecture", "/migrate/virtual-machines/docs/5.0/reference/roles-reference", "/migrate/virtual-machines/docs/5.0/migrate/vmware_overview"],
    forbiddenPaths: ["/compute/docs$", "/release-notes", "/architecture/migration-to-gcp-assessing-and-discovering-your-workloads"],
    queryFamilies: [
      () => 'site:docs.cloud.google.com/migrate/virtual-machines/docs/5.0 "Migrate for Compute Engine"',
      () => 'site:docs.cloud.google.com/migrate/virtual-machines/docs/5.0 discover architecture OR "roles-reference"',
      () => 'site:docs.cloud.google.com/migrate/virtual-machines/docs/5.0 migrate "vmware_overview"',
    ],
    classifications: [
      [/^\/migrate\/virtual-machines\/docs\/5\.0\/discover\/migrating-vms-migrate-for-compute-engine-getting-started(?:\/|$)/, "product_root"],
      [/^\/migrate\/virtual-machines\/docs\/5\.0\/(discover\/architecture|migrate\/vmware_overview|migrate\/create-a-(vmware|gcve|aws)-source)(?:\/|$)/, "product_reference"],
      [/^\/migrate\/virtual-machines\/docs\/5\.0\/reference\/roles-reference(?:\/|$)/, "iam_reference"],
    ],
  },
  "resource-manager": {
    preferredPaths: ["/resource-manager/docs", "/resource-manager/docs/apis", "/resource-manager/reference/rest"],
    forbiddenPaths: ["/resource-manager/reference/rest/v", "/essential-contacts/"],
    queryFamilies: [
      () => 'site:docs.cloud.google.com/resource-manager "Resource Manager documentation"',
      () => 'site:docs.cloud.google.com/resource-manager "APIs and reference"',
      () => 'site:docs.cloud.google.com/resource-manager "reference/rest"',
    ],
    classifications: [
      [/^\/resource-manager\/docs$/, "product_root"],
      [/^\/resource-manager\/docs\/apis(?:\/|$)/, "product_reference"],
      [/^\/resource-manager\/reference\/rest(?:\/|$)/, "api_reference"],
    ],
  },
  "retail-api": {
    preferredPaths: ["/retail/docs", "/retail/docs/how-it-works", "/retail/docs/setting-up", "/retail/docs/reference/rest", "/retail/docs/inventory-updates", "/iam/docs/roles-permissions/retail"],
    forbiddenPaths: ["/retail/docs/release-notes", "/retail/docs/reference/rpc/", "/developers.google.com/merchant/"],
    queryFamilies: [
      () => 'site:docs.cloud.google.com/retail/docs "Retail API"',
      () => 'site:docs.cloud.google.com/retail/docs "Vertex AI Search for commerce API"',
      () => 'site:docs.cloud.google.com/retail/docs "Cloud Retail" OR "how-it-works" OR "reference/rest"',
    ],
    classifications: [
      [/^\/retail\/docs$/, "product_root"],
      [/^\/retail\/docs\/how-it-works(?:\/|$)/, "product_root"],
      [/^\/retail\/docs\/reference\/rest(?:\/|$)/, "api_reference"],
      [/^\/retail\/docs\/(features|inventory-updates|how-it-works|setting-up|authentication|libraries)(?:\/|$)/, "product_reference"],
      [/^\/iam\/docs\/roles-permissions\/retail(?:\/|$)/, "iam_reference"],
    ],
  },
  "tasks-api": {
    preferredPaths: ["/workspace/tasks", "/workspace/tasks/overview", "/workspace/tasks/reference/rest", "/tasks/reference/rest/v1/tasks", "/workspace/tasks/auth"],
    forbiddenPaths: ["/workspace/tasks/release-notes", "/workspace/tasks/quickstart/"],
    queryFamilies: [
      () => 'site:developers.google.com/workspace/tasks "Google Tasks API"',
      () => 'site:developers.google.com/workspace/tasks overview "reference/rest"',
      () => 'site:developers.google.com/tasks/reference/rest/v1/tasks "Google Tasks API"',
      () => 'site:developers.google.com/workspace/tasks auth scopes',
    ],
    classifications: [
      [/^\/workspace\/tasks$/, "product_root"],
      [/^\/workspace\/tasks\/overview(?:\/|$)/, "product_root"],
      [/^\/workspace\/tasks\/auth(?:\/|$)/, "iam_reference"],
      [/^\/workspace\/tasks\/reference\/rest(?:\/|$)/, "api_reference"],
      [/^\/tasks\/reference\/rest\/v1\/tasks(?:\/|$)/, "product_reference"],
    ],
  },
  "vault-api": {
    preferredPaths: ["/vault", "/workspace/vault/guides", "/workspace/vault/reference/rest", "/vault/auth"],
    forbiddenPaths: ["/workspace/vault/release-notes", "/workspace/vault/quickstart/"],
    queryFamilies: [
      () => 'site:developers.google.com/workspace/vault "Vault API"',
      () => 'site:developers.google.com/workspace/vault/guides "Google Vault API Overview"',
      () => 'site:developers.google.com/workspace/vault/reference/rest "Google Vault API"',
      () => 'site:developers.google.com/vault/auth "Vault API"',
    ],
    classifications: [
      [/^\/vault$/, "product_root"],
      [/^\/workspace\/vault\/guides(?:\/|$)/, "product_root"],
      [/^\/workspace\/vault\/reference\/rest(?:\/|$)/, "api_reference"],
      [/^\/vault\/auth(?:\/|$)/, "iam_reference"],
    ],
  },
  "secure-source-manager": {
    preferredPaths: ["/secure-source-manager/docs", "/secure-source-manager/docs/overview", "/secure-source-manager/docs/create-instance", "/secure-source-manager/docs/use-git"],
    forbiddenPaths: ["/secure-source-manager/docs/release-notes", "/secure-source-manager/docs/locations"],
    queryFamilies: [
      () => 'site:docs.cloud.google.com/secure-source-manager/docs "Secure Source Manager"',
      () => 'site:docs.cloud.google.com/secure-source-manager/docs overview "create-instance"',
      () => 'site:docs.cloud.google.com/secure-source-manager/docs "use-git"',
    ],
    classifications: [
      [/^\/secure-source-manager\/docs$/, "product_root"],
      [/^\/secure-source-manager\/docs\/overview(?:\/|$)/, "product_root"],
      [/^\/secure-source-manager\/docs\/(create-instance|use-git|create-access-instance)(?:\/|$)/, "product_reference"],
    ],
  },
  "service-catalog": {
    preferredPaths: ["/service-catalog/docs", "/service-catalog/docs/overview", "/service-catalog/docs/create-catalog", "/service-catalog/docs/view-and-launch"],
    forbiddenPaths: ["/service-catalog/docs/release-notes", "/service-catalog/docs/glossary"],
    queryFamilies: [
      () => 'site:docs.cloud.google.com/service-catalog/docs "Service Catalog"',
      () => 'site:docs.cloud.google.com/service-catalog/docs overview "create catalog"',
      () => 'site:docs.cloud.google.com/service-catalog/docs "view and launch"',
    ],
    classifications: [
      [/^\/service-catalog\/docs$/, "product_root"],
      [/^\/service-catalog\/docs\/overview(?:\/|$)/, "product_root"],
      [/^\/service-catalog\/docs\/(create-catalog|view-and-launch|share-catalog)(?:\/|$)/, "product_reference"],
    ],
  },
  "looker-studio": {
    preferredPaths: ["/looker-studio", "/looker-studio/integrate/api", "/looker-studio/integrate/api/reference", "/looker-studio/connector", "/looker-studio/visualization", "/looker-studio/connector/auth", "/looker-studio/integrate/api/reference/permissions", "/iam/docs/roles-permissions/datastudio"],
    forbiddenPaths: ["/support", "/products", "/analytics", "/speed/public-dns"],
    queryFamilies: [
      () => 'site:developers.google.com/looker-studio "Looker Studio"',
      () => 'site:developers.google.com/looker-studio/integrate/api "Looker Studio API"',
      () => 'site:developers.google.com/looker-studio/connector OR site:developers.google.com/looker-studio/visualization "Looker Studio"',
      () => 'site:developers.google.com/looker-studio auth permissions',
    ],
    classifications: [
      [/^\/looker-studio$/, "product_root"],
      [/^\/looker-studio\/integrate\/api(?:\/|$)/, "api_reference"],
      [/^\/looker-studio\/(connector|visualization)(?:\/|$)/, "product_reference"],
      [/^\/looker-studio\/connector\/auth(?:\/|$)/, "iam_reference"],
      [/^\/looker-studio\/integrate\/api\/reference\/permissions(?:\/|$)/, "iam_reference"],
      [/^\/iam\/docs\/roles-permissions\/datastudio(?:\/|$)/, "iam_reference"],
    ],
  },
  "gmail-api": {
    preferredPaths: ["/workspace/gmail/api", "/workspace/gmail/api/guides/overview", "/workspace/gmail/api/reference", "/workspace/gmail/api/reference/rest", "/workspace/gmail/api/auth/scopes"],
    forbiddenPaths: ["/release-notes", "/gemini/enterprise/docs/connectors/gmail/", "/resources/api-libraries/documentation/gmail/"],
    queryFamilies: [
      () => 'site:developers.google.com/workspace/gmail/api "Gmail API"',
      () => 'site:developers.google.com/workspace/gmail/api "reference/rest" "overview"',
      () => 'site:developers.google.com/workspace/gmail/api auth scopes',
    ],
    classifications: [
      [/^\/workspace\/gmail\/api$/, "product_root"],
      [/^\/workspace\/gmail\/api\/guides\/overview(?:\/|$)/, "product_root"],
      [/^\/workspace\/gmail\/api\/reference(?:\/|$)/, "product_reference"],
      [/^\/workspace\/gmail\/api\/reference\/rest(?:\/|$)/, "api_reference"],
      [/^\/workspace\/gmail\/api\/auth\/scopes(?:\/|$)/, "iam_reference"],
    ],
  },
  "google-meet": {
    preferredPaths: ["/workspace/meet/api/guides/overview", "/workspace/meet/api/reference", "/workspace/meet/api/reference/rest/v2", "/workspace/meet/api/guides/authenticate-authorize"],
    forbiddenPaths: ["/release-notes", "/workspace/meet/add-ons/", "/workspace/meet/media-api/"],
    queryFamilies: [
      () => 'site:developers.google.com/workspace/meet/api "Google Meet API"',
      () => 'site:developers.google.com/workspace/meet/api reference overview',
      () => 'site:developers.google.com/workspace/meet/api auth scopes',
    ],
    classifications: [
      [/^\/workspace\/meet\/api\/guides\/overview(?:\/|$)/, "product_root"],
      [/^\/workspace\/meet\/api\/reference(?:\/rest\/v2)?(?:\/|$)/, "product_reference"],
      [/^\/workspace\/meet\/api\/guides\/authenticate-authorize(?:\/|$)/, "iam_reference"],
    ],
  },
  "migrate-to-containers": {
    preferredPaths: ["/migrate/containers/docs", "/migrate/containers/docs/getting-started", "/migrate/containers/docs/m2c-cli/architecture", "/migrate/containers/docs/migrate-vm", "/migrate/containers/docs/m2c-cli-reference-linux"],
    forbiddenPaths: ["/code/docs/vscode/replatform-apps-to-containers", "/database-migration/", "/release-notes"],
    queryFamilies: [
      () => 'site:docs.cloud.google.com/migrate/containers/docs "Migrate to Containers"',
      () => 'site:docs.cloud.google.com/migrate/containers/docs "getting-started" OR "m2c-cli/architecture"',
      () => 'site:docs.cloud.google.com/migrate/containers/docs "migrate-vm" OR "m2c-cli-reference-linux"',
    ],
    classifications: [
      [/^\/migrate\/containers\/docs$/, "product_root"],
      [/^\/migrate\/containers\/docs\/getting-started(?:\/|$)/, "product_root"],
      [/^\/migrate\/containers\/docs\/(m2c-cli\/architecture|migrate-vm|m2c-cli-reference-linux)(?:\/|$)/, "product_reference"],
    ],
  },
  "migrate-to-virtual-machines": {
    preferredPaths: ["/migrate/virtual-machines", "/migrate/virtual-machines/docs/5.0", "/migrate/virtual-machines/docs/5.0/discover/migrating-vms-migrate-for-compute-engine-getting-started", "/migrate/virtual-machines/docs/5.0/migrate/vmware_overview", "/migrate/virtual-machines/docs/5.0/migrate/migrating-vms"],
    forbiddenPaths: ["/release-notes", "/blog/", "/database-migration/"],
    queryFamilies: [
      () => 'site:cloud.google.com/migrate/virtual-machines "Migrate to Virtual Machines"',
      () => 'site:cloud.google.com/migrate/virtual-machines/docs/5.0 "Migrate to Virtual Machines"',
      () => 'site:docs.cloud.google.com/migrate/virtual-machines/docs/5.0 "migrating-vms" OR "vmware_overview"',
    ],
    classifications: [
      [/^\/migrate\/virtual-machines$/, "product_root"],
      [/^\/migrate\/virtual-machines\/docs\/5\.0$/, "product_root"],
      [/^\/migrate\/virtual-machines\/docs\/5\.0\/(discover\/migrating-vms-migrate-for-compute-engine-getting-started|migrate\/vmware_overview|migrate\/migrating-vms)(?:\/|$)/, "product_reference"],
    ],
  },
  "transfer-appliance": {
    preferredPaths: ["/transfer-appliance/docs/4.0/overview", "/transfer-appliance/docs/4.0/concepts", "/transfer-appliance/docs/4.0/procedure-guide", "/transfer-appliance/docs/4.0/access-control"],
    forbiddenPaths: ["/release-notes", "/architecture/migration-to-google-cloud-transferring-your-large-datasets", "/storage-transfer/"],
    queryFamilies: [
      () => 'site:docs.cloud.google.com/transfer-appliance/docs "Transfer Appliance"',
      () => 'site:docs.cloud.google.com/transfer-appliance/docs/4.0 "overview" OR "concepts"',
      () => 'site:docs.cloud.google.com/transfer-appliance/docs/4.0 "procedure-guide" OR "access-control"',
    ],
    classifications: [
      [/^\/transfer-appliance\/docs\/4\.0\/overview(?:\/|$)/, "product_root"],
      [/^\/transfer-appliance\/docs\/4\.0\/(concepts|procedure-guide)(?:\/|$)/, "product_reference"],
      [/^\/transfer-appliance\/docs\/4\.0\/access-control(?:\/|$)/, "iam_reference"],
    ],
  },
  "translation-hub": {
    preferredPaths: ["/translation-hub/docs", "/translation-hub/docs/resources"],
    forbiddenPaths: ["/deprecations", "/release-notes"],
    queryFamilies: [
      () => 'site:docs.cloud.google.com/translation-hub/docs "Translation Hub"',
      () => 'site:docs.cloud.google.com/translation-hub/docs resources "Translation Hub"',
    ],
    classifications: [
      [/^\/translation-hub\/docs$/, "product_root"],
      [/^\/translation-hub\/docs\/resources(?:\/|$)/, "product_reference"],
    ],
  },
  "vertex-ai-vision": {
    preferredPaths: ["/vision-ai/docs", "/vision-ai/docs/overview", "/vision-ai/docs/build-app", "/vision-ai/docs/create-manage-streams", "/vision-ai/docs/reference/python"],
    forbiddenPaths: ["/release-notes", "/warehouse-supported-regions"],
    queryFamilies: [
      () => 'site:docs.cloud.google.com/vision-ai/docs "Vertex AI Vision"',
      () => 'site:docs.cloud.google.com/vision-ai/docs overview "build-app"',
      () => 'site:docs.cloud.google.com/vision-ai/docs "create-manage-streams" OR "reference/python"',
    ],
    classifications: [
      [/^\/vision-ai\/docs$/, "product_root"],
      [/^\/vision-ai\/docs\/overview(?:\/|$)/, "product_root"],
      [/^\/vision-ai\/docs\/(build-app|create-manage-streams|warehouse-overview)(?:\/|$)/, "product_reference"],
      [/^\/vision-ai\/docs\/reference\/python(?:\/|$)/, "python_reference"],
    ],
  },
  "vertex-ai-workbench": {
    preferredPaths: ["/vertex-ai/docs/workbench/introduction", "/vertex-ai/docs/workbench/notebook-solution", "/vertex-ai/docs/workbench/reference/libraries", "/vertex-ai/docs/workbench/reference", "/vertex-ai/docs/workbench/instances/iam"],
    forbiddenPaths: ["/distributed-cloud/", "/codelabs", "/vertex-ai/docs/general/"],
    queryFamilies: [
      () => 'site:docs.cloud.google.com/vertex-ai/docs/workbench "Vertex AI Workbench"',
      () => 'site:docs.cloud.google.com/vertex-ai/docs/workbench introduction "notebook-solution"',
      () => 'site:docs.cloud.google.com/vertex-ai/docs/workbench/reference "libraries" OR "google.cloud.notebooks.v1"',
      () => 'site:cloud.google.com/vertex-ai-notebooks "Vertex AI Workbench"',
    ],
    classifications: [
      [/^\/vertex-ai\/docs\/workbench\/introduction(?:\/|$)/, "product_root"],
      [/^\/vertex-ai\/docs\/workbench\/notebook-solution(?:\/|$)/, "product_reference"],
      [/^\/vertex-ai\/docs\/workbench\/reference(?:\/libraries|\/rpc\/google\.cloud\.notebooks\.v1)?(?:\/|$)/, "product_reference"],
      [/^\/vertex-ai\/docs\/workbench\/instances\/iam(?:\/|$)/, "iam_reference"],
    ],
  },
  "oracle-database-google-cloud": {
    preferredPaths: ["/oracle/database/docs", "/oracle/database/docs/overview", "/oracle/database/docs/create-databases", "/oracle/database/docs/manage-databases", "/oracle/database/docs/reference/libraries", "/oracle/database/docs/iam-overview", "/iam/docs/roles-permissions/oracledatabase"],
    forbiddenPaths: ["/release-notes", "/ruby/docs/reference/google-cloud-oracle_database", "/iam/docs/roles-permissions/oci"],
    queryFamilies: [
      () => 'site:docs.cloud.google.com/oracle/database/docs "Oracle Database@Google Cloud"',
      () => 'site:docs.cloud.google.com/oracle/database/docs "create-databases" OR "manage-databases"',
      () => 'site:docs.cloud.google.com/oracle/database/docs/reference libraries OR "iam-overview"',
    ],
    classifications: [
      [/^\/oracle\/database\/docs$/, "product_root"],
      [/^\/oracle\/database\/docs\/overview(?:\/|$)/, "product_root"],
      [/^\/oracle\/database\/docs\/(create-databases|manage-databases|setup-oracle-database-environment)(?:\/|$)/, "product_reference"],
      [/^\/oracle\/database\/docs\/reference\/libraries(?:\/|$)/, "api_reference"],
      [/^\/(oracle\/database\/docs\/iam-overview|iam\/docs\/roles-permissions\/oracledatabase)(?:\/|$)/, "iam_reference"],
    ],
  },
  "places-insights": {
    preferredPaths: ["/maps/documentation/placesinsights", "/maps/documentation/placesinsights/overview", "/maps/documentation/placesinsights/reference", "/maps/documentation/placesinsights/place-types", "/maps/documentation/placesinsights/about-data"],
    forbiddenPaths: ["/release-notes", "/experimental/", "/places-aggregate/release-notes"],
    queryFamilies: [
      () => 'site:developers.google.com/maps/documentation/placesinsights "Places Insights"',
      () => 'site:developers.google.com/maps/documentation/placesinsights overview OR reference',
      () => 'site:developers.google.com/maps/documentation/places-aggregate/reference/rpc "Places Insights"',
    ],
    classifications: [
      [/^\/maps\/documentation\/placesinsights$/, "product_root"],
      [/^\/maps\/documentation\/placesinsights\/overview(?:\/|$)/, "product_root"],
      [/^\/maps\/documentation\/placesinsights\/reference(?:\/|$)/, "api_reference"],
      [/^\/maps\/documentation\/places-aggregate\/reference\/rpc(?:\/|$)/, "api_reference"],
      [/^\/maps\/documentation\/placesinsights\/(place-types|about-data|policies)(?:\/|$)/, "product_reference"],
    ],
  },
  "vm-runtime-on-google-distributed-cloud": {
    preferredPaths: ["/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/overview", "/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/quickstart", "/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/tutorial-create-vm"],
    forbiddenPaths: ["/release-notes", "/?hl=es"],
    queryFamilies: [
      () => 'site:docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime "VM Runtime on Google Distributed Cloud"',
      () => 'site:docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime overview quickstart',
      () => 'site:docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime "tutorial-create-vm"',
    ],
    classifications: [
      [/^\/kubernetes-engine\/distributed-cloud\/bare-metal\/docs\/vm-runtime\/overview(?:\/|$)/, "product_root"],
      [/^\/kubernetes-engine\/distributed-cloud\/bare-metal\/docs\/vm-runtime\/(quickstart|tutorial-create-vm|tutorial-deploy-existing-vm)(?:\/|$)/, "product_reference"],
    ],
  },
  "google-distributed-cloud-software-only-for-bare-metal": {
    preferredPaths: ["/kubernetes-engine/distributed-cloud/bare-metal/docs", "/kubernetes-engine/distributed-cloud/bare-metal/docs/concepts/about-bare-metal", "/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/creating-clusters/create-clusters-overview", "/kubernetes-engine/distributed-cloud/bare-metal/docs/quickstart", "/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/identity-manage"],
    forbiddenPaths: ["/multi-cloud/", "/distributed-cloud/hosted/", "/release-notes"],
    queryFamilies: [
      () => 'site:docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs "Google Distributed Cloud (software only) for bare metal"',
      () => 'site:docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs "about-bare-metal" OR "create-clusters-overview"',
      () => 'site:docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs quickstart OR "identity-manage"',
    ],
    classifications: [
      [/^\/kubernetes-engine\/distributed-cloud\/bare-metal\/docs$/, "product_root"],
      [/^\/kubernetes-engine\/distributed-cloud\/bare-metal\/docs\/concepts\/about-bare-metal(?:\/|$)/, "product_root"],
      [/^\/kubernetes-engine\/distributed-cloud\/bare-metal\/docs\/(installing\/creating-clusters\/create-clusters-overview|quickstart)(?:\/|$)/, "product_reference"],
      [/^\/kubernetes-engine\/distributed-cloud\/bare-metal\/docs\/installing\/identity-manage(?:\/|$)/, "iam_reference"],
    ],
  },
  "google-distributed-cloud-software-only-for-vmware": {
    preferredPaths: ["/kubernetes-engine/distributed-cloud/vmware/docs", "/kubernetes-engine/distributed-cloud/vmware/docs/overview", "/kubernetes-engine/distributed-cloud/vmware/docs/how-to/install-overview", "/kubernetes-engine/distributed-cloud/vmware/docs/concepts/security", "/kubernetes-engine/distributed-cloud/vmware/docs/concepts/authentication"],
    forbiddenPaths: ["/multi-cloud/", "/distributed-cloud/hosted/", "/release-notes"],
    queryFamilies: [
      () => 'site:docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs "Google Distributed Cloud (software only) for VMware"',
      () => 'site:docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs overview OR "install-overview"',
      () => 'site:docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs security OR authentication',
    ],
    classifications: [
      [/^\/kubernetes-engine\/distributed-cloud\/vmware\/docs$/, "product_root"],
      [/^\/kubernetes-engine\/distributed-cloud\/vmware\/docs\/overview(?:\/|$)/, "product_root"],
      [/^\/kubernetes-engine\/distributed-cloud\/vmware\/docs\/(how-to\/install-overview|concepts\/security)(?:\/|$)/, "product_reference"],
      [/^\/kubernetes-engine\/distributed-cloud\/vmware\/docs\/concepts\/authentication(?:\/|$)/, "iam_reference"],
    ],
  },
  "sap-on-google-cloud": {
    preferredPaths: ["/sap/docs", "/sap/docs/overview-of-sap-on-google-cloud", "/sap/docs/sap-hana-planning-guide", "/sap/docs/architectures/sap-s4hana-on-gcp", "/sap/docs/security-for-sap/iam-for-sap"],
    forbiddenPaths: ["/release-notes", "/workload-manager/", "/abap-sdk/"],
    queryFamilies: [
      () => 'site:docs.cloud.google.com/sap/docs "SAP on Google Cloud"',
      () => 'site:docs.cloud.google.com/sap/docs "overview-of-sap-on-google-cloud" OR "sap-hana-planning-guide"',
      () => 'site:docs.cloud.google.com/sap/docs security-for-sap "iam-for-sap"',
    ],
    classifications: [
      [/^\/sap\/docs$/, "product_root"],
      [/^\/sap\/docs\/(overview-of-sap-on-google-cloud|sap-hana-planning-guide|architectures\/sap-s4hana-on-gcp|netweaver-operations-guide)(?:\/|$)/, "product_reference"],
      [/^\/sap\/docs\/security-for-sap\/iam-for-sap(?:\/|$)/, "iam_reference"],
    ],
  },
  "service-extensions": {
    preferredPaths: ["/service-extensions/docs", "/service-extensions/docs/overview", "/service-extensions/docs/plugins-overview", "/service-extensions/docs/resources", "/service-extensions/docs/access-control"],
    forbiddenPaths: ["/release-notes", "/developers.google.com/gdata/"],
    queryFamilies: [
      () => 'site:docs.cloud.google.com/service-extensions/docs "Service Extensions"',
      () => 'site:docs.cloud.google.com/service-extensions/docs "plugins-overview" OR resources',
      () => 'site:docs.cloud.google.com/service-extensions/docs "access-control" OR "configure-authorization-extensions"',
    ],
    classifications: [
      [/^\/service-extensions\/docs$/, "product_root"],
      [/^\/service-extensions\/docs\/overview(?:\/|$)/, "product_root"],
      [/^\/service-extensions\/docs\/(plugins-overview|resources|callouts-overview|lb-extensions-overview|manage-extensions|configure-route-extensions|configure-extensions-to-google-services)(?:\/|$)/, "product_reference"],
      [/^\/service-extensions\/docs\/(access-control|configure-authorization-extensions)(?:\/|$)/, "iam_reference"],
    ],
  },
  "tensorflow-enterprise": {
    preferredPaths: ["/tensorflow-enterprise/docs", "/tensorflow-enterprise/docs/overview", "/tensorflow-enterprise/docs/getting-started", "/tensorflow-enterprise/docs/use-with-deep-learning-containers", "/tensorflow-enterprise/docs/use-with-deep-learning-vm"],
    forbiddenPaths: ["/release-notes", "/deep-learning-vm/docs/release-notes"],
    queryFamilies: [
      () => 'site:docs.cloud.google.com/tensorflow-enterprise/docs "TensorFlow Enterprise"',
      () => 'site:docs.cloud.google.com/tensorflow-enterprise/docs "getting-started" OR "use-with-deep-learning-vm"',
      () => 'site:docs.cloud.google.com/tensorflow-enterprise/docs "use-with-deep-learning-containers"',
    ],
    classifications: [
      [/^\/tensorflow-enterprise\/docs$/, "product_root"],
      [/^\/tensorflow-enterprise\/docs\/overview(?:\/|$)/, "product_root"],
      [/^\/tensorflow-enterprise\/docs\/(getting-started|use-with-deep-learning-containers|use-with-deep-learning-vm)(?:\/|$)/, "product_reference"],
    ],
  },
};
function canonicalFamilyFor(slug) { return canonicalFamilies[String(slug || "").toLowerCase()] || null; }
function canonicalClassification(productSlug, pathname) { const family = canonicalFamilyFor(productSlug); if (!family) return ""; for (const [rule, classification] of family.classifications || []) if (pathMatchesRule(pathname, rule)) return classification; return ""; }
function familyRulesFor(slug) {
  const s = String(slug || "").toLowerCase();
  const make = (preferredPaths = [], forbiddenPaths = [], strict = true) => ({ preferredPaths, forbiddenPaths, strict });
  const canonical = canonicalFamilyFor(s);
  if (canonical) return make(canonical.preferredPaths || [], canonical.forbiddenPaths || []);
  if (s === "apps-script") return make(["/apps-script/"], ["/error-reporting/", "/logging/", "/monitoring/", "/appengine/", "/eventarc/", "/apigee/"]);
  if (s === "calendar-api") return make(["/calendar/", "/workspace/calendar/"], ["/appengine/", "/eventarc/", "/logging/", "/monitoring/", "/apigee/"]);
  if (s === "identity-and-access-management") return make(["/iam/docs"], ["/identity-platform/", "/database-migration/", "/developer-connect/"], true);
  if (s === "access-transparency") return make(["/assured-workloads/access-transparency/docs/", "/iam/docs/roles-permissions/axt"], ["/access-approval/", "/recommender/", "/service-directory/", "/gemini/", "/generative-ai-app-builder/"], true);
  if (s === "cloud-endpoints") return make(["/endpoints/docs/", "/endpoints/docs/openapi"], ["/appengine/", "/frameworks/"], false);
  if (s === "cloud-hub") return make(["/hub/docs"], [], true);
  if (s === "cloud-database-migration-service") return make(["/database-migration/docs"], ["/alloydb/"], false);
  if (s === "cloud-quotas") return make(["/docs/quotas"], ["/compute/quotas-limits"], false);
  if (s === "buildpacks") return make(["/docs/buildpacks"], ["/run/docs/"], false);
  if (s === "backup-for-gke") return make(["/kubernetes-engine/docs/add-on/backup-for-gke"], [], false);
  if (s === "config-connector") return make(["/config-connector/docs"], [], false);
  if (s === "config-controller") return make(["/kubernetes-engine/config-controller/docs"], ["/kubernetes-engine/enterprise/config-controller/"], false);
  if (s === "cloud-service-mesh") return make(["/service-mesh/docs"], ["/service-mesh/v"], false);
  if (s === "managed-cloud-service-mesh") return make(["/service-mesh/docs", "/service-mesh/v"], ["/service-mesh/legacy/"], false);
  if (s === "apigee-api-hub") return make(["/apigee/docs/apihub/", "/apigee/docs/api-platform/api-hub/", "/apigee/docs/api-hub/"], ["/eventarc/", "/logging/", "/monitoring/"]);
  if (s === "apigee-analytics") return make(["/apigee/docs/api-platform/analytics/", "/apigee/docs/api-platform/reference/analytics/"], ["/billing/", "/eventarc/", "/logging/", "/monitoring/"]);
  if (s === "apigee-hybrid") return make(["/apigee/docs/hybrid/"], ["/apihub/", "/publish/", "/envoy-adapter/"], false);
  if (s === "apigee-x") return make(["/apigee/docs/api-platform/get-started/", "/apigee/docs/api-platform/fundamentals/", "/apigee/docs/api-platform/security/", "/apigee/docs/api-platform/fundamentals/organization-structure"], ["/apihub/", "/hybrid/", "/publish/", "/envoy-adapter/"], false);
  if (s === "apigee-advanced-api-security") return make(["/apigee/docs/api-platform/security/", "/apigee/docs/api-platform/reference/manage-security-add-on"], ["/apihub/", "/hybrid/", "/publish/", "/envoy-adapter/"], false);
  if (s === "apigee-integrated-portal") return make(["/apigee/docs/api-platform/publish/", "/apigee/docs/api-platform/publish/portal/"], ["/apihub/", "/hybrid/", "/envoy-adapter/"], false);
  if (s === "apigee-monetization") return make(["/apigee/docs/api-platform/monetization/"], ["/apihub/", "/hybrid/", "/envoy-adapter/"], false);
  if (s === "apigee-integration") return make(["/apigee/docs/api-platform/integration/", "/apigee/docs/reference/apis/integrations/rest"], ["/integration-connectors/", "/apihub/"], false);
  if (s === "apigee-apim-operator") return make(["/apigee/docs/api-platform/apigee-kubernetes/"], ["/release/"], false);
  if (s === "vertex-ai-workbench") return make(["/vertex-ai/docs/workbench/"], ["/vertex-ai/docs/general/access-control", "/vertex-ai/docs/workbench/instances/iam", "/apigee/", "/logging/", "/monitoring/"]);
  if (s === "google-secops-siem") return make(["/chronicle/docs/", "/security-operations/docs/", "/security-operations/"], ["/apigee/", "/eventarc/", "/logging/", "/monitoring/"]);
  if (s === "access-context-manager") return make(["/access-context-manager/docs/"], ["/vpc-service-controls/"]);
  if (s === "cloud-monitoring") return make(["/monitoring/", "/python/docs/reference/monitoring/", "/java/docs/reference/google-cloud-monitoring/"], ["/logging/"]);
  if (s === "cloud-logging") return make(["/logging/", "/python/docs/reference/logging/", "/java/docs/reference/google-cloud-logging/"], ["/monitoring/"]);
  if (s === "places-api") return make(["/maps/documentation/places/", "/python/places/", "/python/docs/reference/places/", "/java/docs/reference/google-cloud-places/"], ["/service-usage/", "/compute/", "/appengine/"]);
  if (s === "app-engine-admin-api") return make(["/appengine/docs/admin-api/"], ["/appengine/docs/flexible/", "/appengine/docs/standard/"]);
  if (/^cloud-sql-for-/.test(s)) return make(["/sql/docs/mysql", "/sql/docs/postgres", "/sql/docs/sqlserver"], ["/database-migration/"], false);
  if (/^memorystore-for-redis$/.test(s)) return make(["/memorystore/docs/redis"], ["/eventarc/", "/memorystore/docs/cluster/"], false);
  if (/^memorystore-for-redis-cluster$/.test(s)) return make(["/memorystore/docs/cluster"], ["/eventarc/", "/memorystore/docs/redis/"], false);
  if (/^memorystore-for-memcached$/.test(s)) return make(["/memorystore/docs/memcached"], ["/eventarc/"], false);
  if (/^memorystore-for-valkey$/.test(s)) return make(["/memorystore/docs/valkey"], ["/eventarc/"], false);
  if (s === "google-workspace-events-api") return make(["/workspace/events"], [], true);
  if (s === "google-workspace-add-ons") return make(["/workspace/add-ons"], [], false);
  if (s === "vertex-ai-agent-builder") return make(["/agent-builder/", "/vertex-ai/docs/reference/rest"], ["/generative-ai-app-builder/", "/retail/"], false);
  if (/^app-engine-(?:standard|flexible)-environment-/.test(s)) return make(["/appengine/docs/standard/", "/appengine/docs/flexible/"], [], false);
  if (/^anthos-clusters-on-(aws|azure)/.test(s)) return make(["/kubernetes-engine/multi-cloud/docs/aws", "/kubernetes-engine/multi-cloud/docs/azure", "/kubernetes-engine/multi-cloud/docs/reference/rest"], [], false);
  if (/^earth-engine-(data-catalog|javascript-client-library|python-client-library|server|code-editor)$/.test(s)) return make(["/earth-engine/", "/earth-engine/guides", "/earth-engine/apidocs", "/earth-engine/docs/data-catalog"], [], false);
  return make([], [], false);
}
function familyRuleScore(url, familyRules = {}) { const p = pathnameFor(url); const preferred = matchesAnyRule(p, familyRules.preferredPaths || []); const forbidden = matchesAnyRule(p, familyRules.forbiddenPaths || []); let score = 0; if (preferred) score += 42; else if (familyRules.strict) score -= 28; if (forbidden) score -= 120; if (preferred && /\/docs\/(reference|apis|overview|concepts)$/.test(p)) score += 10; return score; }
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
  if (/^apps-script$/i.test(productSlug)) {
    terms.add("Google Apps Script");
    terms.add("Apps Script");
    terms.add("Apps Script reference");
    terms.add("Apps Script overview");
  }
  if (/^calendar-api$/i.test(productSlug)) {
    terms.add("Google Calendar API");
    terms.add("Google Workspace Calendar API");
    terms.add("Calendar API v3");
  }
  if (/^address-validation-api$/i.test(productSlug)) terms.add("Google Maps Address Validation API");
  if (/^aerial-view-api$/i.test(productSlug)) terms.add("Google Maps Aerial View API");
  if (/^datasets-api$/i.test(productSlug)) terms.add("Google Maps Datasets API");
  if (/^looker-studio$/i.test(productSlug)) {
    terms.add("Looker Studio");
    terms.add("Looker Studio API");
    terms.add("Looker Studio connector");
  }
  if (/^migrate-to-containers$/i.test(productSlug)) {
    terms.add("Migrate to Containers");
    terms.add("Migrate to Containers CLI");
  }
  if (/^migrate-to-virtual-machines$/i.test(productSlug)) {
    terms.add("Migrate to Virtual Machines");
    terms.add("Migrate for Compute Engine");
  }
  if (/^places-api$/i.test(productSlug)) {
    terms.add("Places API");
    terms.add("Places API (New)");
    terms.add("Google Maps Platform Places API");
    terms.add("Places API legacy");
  }
  if (/^places-insights$/i.test(productSlug)) {
    terms.add("Places Insights");
    terms.add("Places Aggregate API");
    terms.add("Area Insights");
  }
  if (/^earth-engine-code-editor$/i.test(productSlug)) {
    terms.add("Earth Engine Code Editor");
    terms.add("Google Earth Engine");
  }
  if (/^transfer-appliance$/i.test(productSlug)) terms.add("Transfer Appliance");
  if (/^translation-hub$/i.test(productSlug)) terms.add("Translation Hub");
  if (/^vertex-ai-vision$/i.test(productSlug)) terms.add("Vertex AI Vision");
  if (/^vertex-ai-workbench$/i.test(productSlug)) terms.add("Vertex AI Workbench");
  if (/^oracle-database-google-cloud$/i.test(productSlug)) terms.add("Oracle Database@Google Cloud");
  if (/^sap-on-google-cloud$/i.test(productSlug)) terms.add("SAP on Google Cloud");
  if (/^service-extensions$/i.test(productSlug)) terms.add("Service Extensions");
  if (/^tensorflow-enterprise$/i.test(productSlug)) terms.add("TensorFlow Enterprise");
  if (/^vm-runtime-on-google-distributed-cloud$/i.test(productSlug)) {
    terms.add("VM Runtime on Google Distributed Cloud");
    terms.add("VM Runtime on GDC");
  }
  if (/^google-distributed-cloud-software-only-for-bare-metal$/i.test(productSlug)) {
    terms.add("Google Distributed Cloud software only for bare metal");
    terms.add("Google Distributed Cloud software only bare metal");
  }
  if (/^google-distributed-cloud-software-only-for-vmware$/i.test(productSlug)) {
    terms.add("Google Distributed Cloud software only for VMware");
    terms.add("Google Distributed Cloud software only VMware");
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
    terms.add("Container-Optimized OS concepts");
  }
  if (/^apigee-ui$/i.test(productSlug)) {
    terms.add("Apigee UI");
    terms.add("Apigee roles");
    terms.add("Users and roles");
    terms.add("Manage users");
    terms.add("Manage access");
    terms.add("IAM-based API authentication");
  }
  if (/^cortex$/i.test(productSlug)) {
    terms.add("Google Cloud Cortex Framework");
    terms.add("Cortex Framework");
  }
  if (/^deep-learning-containers$/i.test(productSlug)) {
    terms.add("Deep Learning Containers");
    terms.add("Choose a container image");
  }
  if (/^deep-learning-vm-images$/i.test(productSlug)) {
    terms.add("Deep Learning VM Images");
    terms.add("Introduction to Deep Learning VM");
  }
  if (/^endpoint-verification$/i.test(productSlug)) {
    terms.add("Endpoint Verification");
    terms.add("Endpoint Verification overview");
    terms.add("Device attributes collected by Endpoint Verification");
  }
  if (/^gemini-code-assist(?:-standard-and-enterprise)?$/i.test(productSlug)) {
    terms.add("Gemini Code Assist");
    terms.add("Gemini Code Assist Standard and Enterprise");
    terms.add("Gemini Code Assist overview");
  }
  if (/^gke-enterprise$/i.test(productSlug)) {
    terms.add("GKE Enterprise");
    terms.add("GKE Enterprise deployment options");
  }
  if (/^google-ad-manager-api$/i.test(productSlug)) {
    terms.add("Google Ad Manager API");
    terms.add("Ad Manager API Beta");
  }
  if (/^google-cloud-contact-center-as-a-service$/i.test(productSlug)) {
    terms.add("Google Cloud Contact Center as a Service");
    terms.add("CCAI Platform");
    terms.add("Contact Center AI Platform");
  }
  if (/^google-cloud-mcp-servers$/i.test(productSlug)) {
    terms.add("Google Cloud MCP servers");
    terms.add("Model Context Protocol servers");
  }
  if (/^(resource-manager|retail-api|tasks-api|vault-api|secure-source-manager|service-catalog)$/i.test(productSlug)) {
    terms.add(productName);
  }
  if (/^retail-api$/i.test(productSlug)) {
    terms.add("Cloud Retail");
    terms.add("Vertex AI Search for commerce API");
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
  if (/^guest-environment$/i.test(productSlug)) {
    terms.add("Guest Environment");
    terms.add("Compute Engine guest environment");
    terms.add("Guest Agent");
  }
  if (/^key-access-justifications$/i.test(productSlug)) {
    terms.add("Key Access Justifications");
    terms.add("KAJ");
  }
  if (/^mainframe-assessment-tool$/i.test(productSlug)) {
    terms.add("Mainframe Assessment Tool");
    terms.add("MAT");
  }
  if (/^google-secops-siem$/i.test(productSlug)) {
    terms.add("Google SecOps");
    terms.add("Google Security Operations");
    terms.add("Chronicle");
    terms.add("SIEM");
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
  if (/^manufacturing-data-engine$/i.test(productSlug)) {
    terms.add("Manufacturing Data Engine");
    terms.add("MDE");
  }
  if (/^migrate-for-compute-engine$/i.test(productSlug)) {
    terms.add("Migrate for Compute Engine");
    terms.add("Migrate for Compute Engine API");
  }
  if (/^anthos-config-management$/i.test(productSlug)) {
    terms.add("Anthos Config Management");
    terms.add("Config Sync");
    terms.add("Policy Controller");
    terms.add("Config Management");
  }
  if (/^cloud-sql-for-mysql$/i.test(productSlug)) {
    terms.add("Cloud SQL for MySQL");
    terms.add("Cloud SQL MySQL");
    terms.add("Cloud SQL Admin API");
  }
  if (/^cloud-sql-for-postgresql$/i.test(productSlug)) {
    terms.add("Cloud SQL for PostgreSQL");
    terms.add("Cloud SQL PostgreSQL");
    terms.add("Cloud SQL Admin API");
  }
  if (/^cloud-sql-for-sql-server$/i.test(productSlug)) {
    terms.add("Cloud SQL for SQL Server");
    terms.add("Cloud SQL SQL Server");
    terms.add("Cloud SQL Admin API");
  }
  if (/^memorystore-for-redis$/i.test(productSlug)) {
    terms.add("Memorystore for Redis");
    terms.add("Google Cloud Memorystore for Redis");
  }
  if (/^memorystore-for-redis-cluster$/i.test(productSlug)) {
    terms.add("Memorystore for Redis Cluster");
    terms.add("Google Cloud Memorystore for Redis Cluster");
  }
  if (/^memorystore-for-memcached$/i.test(productSlug)) {
    terms.add("Memorystore for Memcached");
    terms.add("Google Cloud Memorystore for Memcached");
  }
  if (/^memorystore-for-valkey$/i.test(productSlug)) {
    terms.add("Memorystore for Valkey");
    terms.add("Google Cloud Memorystore for Valkey");
  }
  if (/^google-workspace-events-api$/i.test(productSlug)) {
    terms.add("Google Workspace Events API");
    terms.add("Workspace Events API");
  }
  if (/^google-workspace-add-ons$/i.test(productSlug)) {
    terms.add("Google Workspace add-ons");
    terms.add("Workspace add-ons");
    terms.add("Google Workspace add-ons API");
  }
  if (/^vertex-ai-agent-builder$/i.test(productSlug)) {
    terms.add("Vertex AI Agent Builder");
    terms.add("Vertex AI Agent Engine");
    terms.add("Agent Builder");
    terms.add("Agent Engine");
  }
  if (/^google-workspace-admin-sdk$/i.test(productSlug)) {
    terms.add("Google Workspace Admin SDK");
    terms.add("Admin SDK");
    terms.add("Google Admin SDK");
  }
  if (/^google-workspace-marketplace-api$/i.test(productSlug)) {
    terms.add("Google Workspace Marketplace API");
    terms.add("Google Workspace Marketplace SDK");
    terms.add("Marketplace SDK");
  }
  if (/^identity-and-access-management$/i.test(productSlug)) {
    terms.add("Identity and Access Management");
    terms.add("IAM");
    terms.add("Google Cloud IAM");
  }
  if (/^access-transparency$/i.test(productSlug)) {
    terms.add("Access Transparency");
    terms.add("Google Cloud Access Transparency");
  }
  if (/^cloud-endpoints$/i.test(productSlug)) {
    terms.add("Cloud Endpoints");
    terms.add("Cloud Endpoints OpenAPI");
  }
  if (/^cloud-database-migration-service$/i.test(productSlug)) {
    terms.add("Database Migration Service");
    terms.add("Cloud Database Migration Service");
    terms.add("Cloud DMS");
  }
  if (/^cloud-quotas$/i.test(productSlug)) {
    terms.add("Cloud Quotas");
    terms.add("Google Cloud Quotas");
  }
  if (/^buildpacks$/i.test(productSlug)) {
    terms.add("Google Cloud Buildpacks");
    terms.add("Buildpacks");
  }
  if (/^backup-for-gke$/i.test(productSlug)) {
    terms.add("Backup for GKE");
    terms.add("GKE Backup");
  }
  if (/^config-connector$/i.test(productSlug)) {
    terms.add("Config Connector");
  }
  if (/^config-controller$/i.test(productSlug)) {
    terms.add("Config Controller");
  }
  if (/^(cloud-service-mesh|managed-cloud-service-mesh)$/i.test(productSlug)) {
    terms.add("Cloud Service Mesh");
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
  if (/^apigee-api-hub$/i.test(productSlug)) {
    terms.add("Apigee API hub");
    terms.add("API hub");
    terms.add("apihub");
  }
  if (/^apigee-hybrid$/i.test(productSlug)) {
    terms.add("Apigee hybrid");
    terms.add("what is Apigee hybrid");
  }
  if (/^apigee-x$/i.test(productSlug)) {
    terms.add("Apigee X");
    terms.add("What is Apigee");
  }
  if (/^apigee-advanced-api-security$/i.test(productSlug)) {
    terms.add("Apigee Advanced API Security");
    terms.add("Advanced API Security");
  }
  if (/^apigee-integration$/i.test(productSlug)) {
    terms.add("Apigee Integration");
    terms.add("Application Integration");
  }
  if (/^apigee-apim-operator$/i.test(productSlug)) {
    terms.add("Apigee APIM Operator");
    terms.add("Apigee Kubernetes Operator");
  }
  if (/^apigee-analytics$/i.test(productSlug)) {
    terms.add("Apigee API Analytics");
    terms.add("analytics dashboards");
    terms.add("metrics API");
  }
  if (/^vertex-ai-workbench$/i.test(productSlug)) {
    terms.add("Vertex AI Workbench");
    terms.add("Vertex AI notebooks");
    terms.add("notebook solution");
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
  const canonical = canonicalFamilyFor(productSlug);
  const families = canonical?.queryFamilies ? [["canonical_docs", canonical.queryFamilies], ...baseQueryFamilies] : [...baseQueryFamilies];
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
  if (/^apps-script$/.test(productSlug)) {
    families.push(["apps_script_docs", [
      () => 'site:developers.google.com/apps-script "Apps Script"',
      () => 'site:developers.google.com/apps-script reference overview',
      () => 'site:developers.google.com/apps-script guides reference',
      () => 'site:developers.google.com/apps-script authorization scopes',
      () => 'site:developers.google.com/apps-script "services/authorization"',
    ]]);
  }
  if (/^calendar-api$/.test(productSlug)) {
    families.push(["calendar_docs", [
      () => 'site:developers.google.com/workspace/calendar "Google Calendar API"',
      () => 'site:developers.google.com/workspace/calendar/api "reference" "overview"',
      () => 'site:developers.google.com/workspace/calendar/api/guides overview quickstart',
    ]]);
  }
  if (/^places-api$/.test(productSlug)) {
    families.push(["places_api_docs", [
      () => 'site:developers.google.com/maps/documentation/places/web-service "Places API"',
      () => 'site:developers.google.com/maps/documentation/places/web-service overview reference',
      () => 'site:developers.google.com/maps/documentation/places/web-service "Places API (New)"',
    ]]);
  }
  if (/^google-secops-siem$/.test(productSlug)) {
    families.push(["secops_docs", [
      () => 'site:docs.cloud.google.com/chronicle/docs/secops "Google Security Operations SIEM"',
      () => 'site:docs.cloud.google.com/chronicle/docs/secops "SIEM" overview',
      () => 'site:docs.cloud.google.com/chronicle/docs/secops "google-secops-siem-toc"',
    ]]);
    families.push(["secops_iam_docs", [
      () => 'site:docs.cloud.google.com/chronicle/docs/secops/adding_siem_or_soar_roles',
      () => 'site:docs.cloud.google.com/chronicle/docs/secops "roles and permissions"',
      () => 'site:docs.cloud.google.com/chronicle/docs/secops "access control" SIEM',
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
  if (/^google-workspace-marketplace-api$/.test(productSlug)) {
    families.push(["workspace_marketplace_docs", [
      () => 'site:developers.google.com/workspace/marketplace "Google Workspace Marketplace API"',
      () => 'site:developers.google.com/workspace/marketplace overview authorizing',
      () => 'site:developers.google.com/workspace/marketplace "Marketplace SDK"',
    ]]);
  }
  if (/^google-workspace-events-api$/.test(productSlug)) {
    families.push(["workspace_events_docs", [
      () => 'site:developers.google.com/workspace/events "Google Workspace Events API"',
      () => 'site:developers.google.com/workspace/events reference rest auth',
      () => 'site:developers.google.com/workspace/events guides libraries',
    ]]);
  }
  if (/^google-workspace-add-ons$/.test(productSlug)) {
    families.push(["workspace_addons_docs", [
      () => 'site:developers.google.com/workspace/add-ons "Google Workspace add-ons"',
      () => 'site:developers.google.com/workspace/add-ons overview reference',
      () => 'site:developers.google.com/workspace/add-ons reference API',
    ]]);
  }
  if (/^identity-and-access-management$/.test(productSlug)) {
    families.push(["iam_docs", [
      () => 'site:docs.cloud.google.com/iam/docs "Identity and Access Management (IAM)"',
      () => 'site:docs.cloud.google.com/iam/docs overview "APIs and reference"',
      () => 'site:docs.cloud.google.com/iam/docs "reference/rest" "roles and permissions"',
    ]]);
  }
  if (/^access-transparency$/.test(productSlug)) {
    families.push(["access_transparency_docs", [
      () => 'site:docs.cloud.google.com/assured-workloads/access-transparency/docs "Access Transparency"',
      () => 'site:docs.cloud.google.com/assured-workloads/access-transparency/docs overview reading-logs',
      () => 'site:docs.cloud.google.com/assured-workloads/access-transparency/docs supported-services "understanding-workspace-logs"',
      () => 'site:docs.cloud.google.com/iam/docs/roles-permissions/axt "Access Transparency"',
    ]]);
  }
  if (/^cloud-endpoints$/.test(productSlug)) {
    families.push(["cloud_endpoints_docs", [
      () => 'site:docs.cloud.google.com/endpoints/docs "Cloud Endpoints"',
      () => 'site:docs.cloud.google.com/endpoints/docs/openapi "About Cloud Endpoints" OR "OpenAPI overview"',
      () => 'site:docs.cloud.google.com/endpoints/docs/openapi "Cloud Endpoints" overview',
    ]]);
  }
  if (/^cloud-database-migration-service$/.test(productSlug)) {
    families.push(["database_migration_docs", [
      () => 'site:docs.cloud.google.com/database-migration/docs "Database Migration Service"',
      () => 'site:docs.cloud.google.com/database-migration/docs overview "reference/rest"',
      () => 'site:docs.cloud.google.com/database-migration/docs "roles" "reference/rest"',
    ]]);
  }
  if (/^cloud-quotas$/.test(productSlug)) {
    families.push(["cloud_quotas_docs", [
      () => 'site:docs.cloud.google.com/docs/quotas "Cloud Quotas"',
      () => 'site:docs.cloud.google.com/docs/quotas overview apis permissions',
      () => 'site:docs.cloud.google.com/docs/quotas "api-overview" OR "roles-permissions/cloudquotas"',
    ]]);
  }
  if (/^buildpacks$/.test(productSlug)) {
    families.push(["buildpacks_docs", [
      () => 'site:docs.cloud.google.com/docs/buildpacks "Google Cloud Buildpacks"',
      () => 'site:docs.cloud.google.com/docs/buildpacks overview builders',
      () => 'site:docs.cloud.google.com/docs/buildpacks "build-application" OR "use-a-specific-builder"',
    ]]);
  }
  if (/^backup-for-gke$/.test(productSlug)) {
    families.push(["backup_for_gke_docs", [
      () => 'site:docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke "Backup for GKE"',
      () => 'site:docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke "reference/rest/v1"',
      () => 'site:docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke roles restore backup',
    ]]);
  }
  if (/^config-connector$/.test(productSlug)) {
    families.push(["config_connector_docs", [
      () => 'site:docs.cloud.google.com/config-connector/docs "Config Connector"',
      () => 'site:docs.cloud.google.com/config-connector/docs overview "reference/overview"',
      () => 'site:docs.cloud.google.com/config-connector/docs concepts resources',
    ]]);
  }
  if (/^config-controller$/.test(productSlug)) {
    families.push(["config_controller_docs", [
      () => 'site:docs.cloud.google.com/kubernetes-engine/config-controller/docs "Config Controller"',
      () => 'site:docs.cloud.google.com/kubernetes-engine/config-controller/docs overview "reference/roles-permissions"',
      () => 'site:docs.cloud.google.com/kubernetes-engine/config-controller/docs resources iam',
    ]]);
  }
  if (/^(cloud-service-mesh|managed-cloud-service-mesh)$/.test(productSlug)) {
    families.push(["service_mesh_docs", [
      () => 'site:docs.cloud.google.com/service-mesh/docs "Cloud Service Mesh"',
      () => 'site:docs.cloud.google.com/service-mesh/docs overview "cloud-run-api-reference"',
      () => 'site:docs.cloud.google.com/service-mesh/docs "xds-control-plane-apis" security-overview',
      () => 'site:docs.cloud.google.com/service-mesh "managed-control-plane-overview" "provision-control-plane"',
      () => 'site:docs.cloud.google.com/service-mesh "supported-features-managed" "asmcli-reference"',
    ]]);
  }
  if (/^anthos-attached-clusters$/.test(productSlug)) {
    families.push(["attached_clusters_docs", [
      () => 'site:docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached "GKE attached clusters"',
      () => 'site:docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached "cluster-prerequisites" EKS AKS generic',
      () => 'site:docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached overview "cluster-prerequisites"',
    ]]);
  }
  if (/^cloud-hub$/.test(productSlug)) {
    families.push(["cloud_hub_docs", [
      () => 'site:docs.cloud.google.com/hub/docs "Cloud Hub" overview',
      () => 'site:docs.cloud.google.com/hub/docs "application views and project views" "view deployments"',
      () => 'site:docs.cloud.google.com/hub/docs "Cloud Hub" resources home health',
    ]]);
  }
  if (/^cloud-based-maps-styling$/.test(productSlug)) {
    families.push(["cloud_maps_styling_docs", [
      () => 'site:developers.google.com/maps/documentation/cloud-customization "Cloud-based maps styling" overview',
      () => 'site:developers.google.com/maps/documentation/cloud-customization "get started and set up" "json-reference"',
      () => 'site:developers.google.com/maps/documentation/cloud-customization "Maps Customization Guide" "Cloud-based maps styling"',
    ]]);
  }
  if (/^agent-assist$/.test(productSlug)) {
    families.push(["agent_assist_docs", [
      () => 'site:docs.cloud.google.com/agent-assist/docs "Agent Assist" basics',
      () => 'site:docs.cloud.google.com/agent-assist/docs "Agent Assist" quotas "generative-knowledge-assist"',
      () => 'site:docs.cloud.google.com/agent-assist/docs "AI coach" "backend-basics" "integrate backend modules"',
    ]]);
  }
  if (/^ai-hypercomputer$/.test(productSlug)) {
    families.push(["ai_hypercomputer_docs", [
      () => 'site:docs.cloud.google.com/ai-hypercomputer/docs "AI Hypercomputer" overview',
      () => 'site:docs.cloud.google.com/ai-hypercomputer/docs "create-overview" "cluster-capabilities"',
      () => 'site:docs.cloud.google.com/ai-hypercomputer/docs "images" tutorials',
    ]]);
  }
  if (/^cluster-toolkit$/.test(productSlug)) {
    families.push(["cluster_toolkit_docs", [
      () => 'site:docs.cloud.google.com/cluster-toolkit/docs "Cluster Toolkit" overview',
      () => 'site:docs.cloud.google.com/cluster-toolkit/docs "deploy-cluster-overview" "support-matrix"',
      () => 'site:docs.cloud.google.com/cluster-toolkit/docs "cluster blueprint" "configure-environment"',
    ]]);
  }
  if (/^confidential-space$/.test(productSlug)) {
    families.push(["confidential_space_docs", [
      () => 'site:docs.cloud.google.com/confidential-computing/confidential-space/docs "Confidential Space" overview',
      () => 'site:docs.cloud.google.com/confidential-computing/confidential-space/docs "launch-policies" "deploy-workloads"',
      () => 'site:docs.cloud.google.com/confidential-computing/confidential-space/docs "create-grant-access-confidential-resources" "create-customize-workloads"',
    ]]);
  }
  if (/^confidential-vm$/.test(productSlug)) {
    families.push(["confidential_vm_docs", [
      () => 'site:docs.cloud.google.com/confidential-computing/confidential-vm/docs "Confidential VM" overview',
      () => 'site:docs.cloud.google.com/confidential-computing/confidential-vm/docs "supported-configurations" "attestation-overview"',
      () => 'site:docs.cloud.google.com/confidential-computing/confidential-vm/docs "create-a-confidential-vm-instance" "monitor-integrity"',
    ]]);
  }
  if (/^blockchain-analytics$/.test(productSlug)) {
    families.push(["blockchain_analytics_docs", [
      () => 'site:docs.cloud.google.com/blockchain-analytics/docs "Blockchain Analytics"',
      () => 'site:docs.cloud.google.com/blockchain-analytics/docs "Dataset schemas"',
      () => 'site:docs.cloud.google.com/blockchain-analytics/docs "Permissions and roles"',
    ]]);
  }
  if (/^carbon-footprint$/.test(productSlug)) {
    families.push(["carbon_footprint_docs", [
      () => 'site:docs.cloud.google.com/carbon-footprint/docs "Carbon Footprint" "View Carbon Footprint data"',
      () => 'site:docs.cloud.google.com/carbon-footprint/docs "Carbon Footprint" "using an API"',
      () => 'site:docs.cloud.google.com/carbon-footprint/docs "Carbon Footprint" "IAM permissions and roles"',
    ]]);
  }
  if (/^automl-translation$/.test(productSlug)) {
    families.push(["automl_translation_docs", [
      () => 'site:docs.cloud.google.com/translate "AutoML Translation" "Cloud Translation - Advanced"',
      () => 'site:docs.cloud.google.com/translate/docs/advanced "custom translation model" "Translate documents"',
      () => 'site:docs.cloud.google.com/translate/docs "Cloud Translation API" "api-overview"',
      () => 'site:docs.cloud.google.com/iam/docs/roles-permissions cloudtranslate automl',
    ]]);
  }
  if (/^contact-center-ai-insights$/.test(productSlug)) {
    families.push(["contact_center_ai_insights_docs", [
      () => 'site:docs.cloud.google.com/contact-center/insights/docs "Conversational Insights"',
      () => 'site:docs.cloud.google.com/contact-center/ccai-platform/docs "Conversational Insights and Quality AI"',
      () => 'site:docs.cloud.google.com/contact-center/insights/docs/reference/rest "Conversational Insights"',
      () => 'site:docs.cloud.google.com/iam/docs/roles-permissions/contactcenterinsights',
    ]]);
  }
  if (/^cloud-product-registry-api$/.test(productSlug)) {
    families.push(["cloud_product_registry_docs", [
      () => 'site:docs.cloud.google.com/product-registry "Cloud Product Registry API"',
      () => 'site:docs.cloud.google.com/product-registry overview "Cloud Product Registry API"',
      () => 'site:docs.cloud.google.com/product-registry "no additional IAM permissions"',
    ]]);
  }
  if (/^bare-metal-solution$/.test(productSlug)) {
    families.push(["bare_metal_solution_docs", [
      () => 'site:docs.cloud.google.com/bare-metal/docs "Bare Metal Solution" "Google Cloud Documentation"',
      () => 'site:docs.cloud.google.com/bare-metal/docs/reference/rest "Bare Metal Solution"',
      () => 'site:docs.cloud.google.com/bare-metal/docs "Configure IAM for Bare Metal Solution"',
      () => 'site:docs.cloud.google.com/iam/docs/roles-permissions "Bare Metal Solution"',
    ]]);
  }
  if (/^assured-open-source-software$/.test(productSlug)) {
    families.push(["assured_open_source_software_docs", [
      () => 'site:developers.google.com/assured-oss',
      () => 'site:docs.cloud.google.com/assured-open-source-software/docs "Assured OSS"',
      () => 'site:docs.cloud.google.com/assured-open-source-software/docs "package signature"',
      () => 'site:docs.cloud.google.com/iam/docs/roles-permissions/assuredoss',
    ]]);
  }
  if (/^apigee-api-hub$/.test(productSlug)) {
    families.push(["apigee_api_hub_docs", [
      () => 'site:docs.cloud.google.com/apigee/docs/apihub "API hub"',
      () => 'site:docs.cloud.google.com/apigee/docs/apihub "API resources overview" OR "Versions overview" OR "API specifications overview"',
      () => 'site:docs.cloud.google.com/apigee/docs/apihub getting-started-apihub apis-intro specs-intro versions-intro',
    ]]);
  }
  if (/^apigee-analytics$/.test(productSlug)) {
    families.push(["apigee_analytics_docs", [
      () => 'site:docs.cloud.google.com/apigee/docs/api-platform/analytics "API Analytics"',
      () => 'site:docs.cloud.google.com/apigee/docs/api-platform/analytics overview metrics',
      () => 'site:docs.cloud.google.com/apigee/docs/api-platform/analytics reference dashboards',
    ]]);
  }
  if (/^vertex-ai-workbench$/.test(productSlug)) {
    families.push(["vertex_ai_workbench_docs", [
      () => 'site:docs.cloud.google.com/vertex-ai/docs/workbench "Vertex AI Workbench"',
      () => 'site:docs.cloud.google.com/vertex-ai/docs/workbench introduction notebook-solution',
      () => 'site:cloud.google.com/vertex-ai-notebooks "Vertex AI Workbench"',
    ]]);
  }
  if (/^vertex-ai-agent-builder$/.test(productSlug)) {
    families.push(["vertex_ai_agent_builder_docs", [
      () => 'site:docs.cloud.google.com/agent-builder "Vertex AI Agent Builder"',
      () => 'site:docs.cloud.google.com/agent-builder "Vertex AI Agent Engine" overview',
      () => 'site:docs.cloud.google.com/agent-builder access control "agent builder"',
    ]]);
    families.push(["vertex_ai_agent_builder_reference_docs", [
      () => 'site:docs.cloud.google.com/vertex-ai/docs/reference/rest reasoningEngines "Vertex AI"',
      () => 'site:docs.cloud.google.com/vertex-ai/docs/reference/rest sessions reasoningEngines',
      () => 'site:docs.cloud.google.com/vertex-ai/docs/reference/rest "ReasoningEngine"',
    ]]);
  }
  if (/^anthos-config-management$/.test(productSlug)) {
    families.push(["config_management_docs", [
      () => 'site:docs.cloud.google.com/kubernetes-engine/config-sync/docs "Config Sync"',
      () => 'site:docs.cloud.google.com/kubernetes-engine/config-sync/docs overview policy-controller',
      () => 'site:docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference "Config Sync"',
    ]]);
  }
  if (/^cloud-sql-for-/.test(productSlug)) {
    families.push(["cloud_sql_docs", [
      () => /^cloud-sql-for-mysql$/.test(productSlug)
        ? 'site:docs.cloud.google.com/sql/docs/mysql "Cloud SQL for MySQL" APIs reference'
        : /^cloud-sql-for-postgresql$/.test(productSlug)
          ? 'site:docs.cloud.google.com/sql/docs/postgres "Cloud SQL for PostgreSQL" APIs reference'
          : 'site:docs.cloud.google.com/sql/docs/sqlserver "Cloud SQL for SQL Server" APIs reference',
      () => /^cloud-sql-for-mysql$/.test(productSlug)
        ? 'site:docs.cloud.google.com/sql/docs/mysql "Cloud SQL Admin API"'
        : /^cloud-sql-for-postgresql$/.test(productSlug)
          ? 'site:docs.cloud.google.com/sql/docs/postgres "Cloud SQL Admin API"'
          : 'site:docs.cloud.google.com/sql/docs/sqlserver "Cloud SQL Admin API"',
      () => /^cloud-sql-for-mysql$/.test(productSlug)
        ? 'site:docs.cloud.google.com/sql/docs/mysql access-control roles permissions'
        : /^cloud-sql-for-postgresql$/.test(productSlug)
          ? 'site:docs.cloud.google.com/sql/docs/postgres access-control roles permissions'
          : 'site:docs.cloud.google.com/sql/docs/sqlserver access-control roles permissions',
    ]]);
  }
  if (/^memorystore-for-/.test(productSlug)) {
    families.push(["memorystore_docs", [
      () => /^memorystore-for-redis$/.test(productSlug)
        ? 'site:docs.cloud.google.com/memorystore/docs/redis "Memorystore for Redis" overview APIs reference'
        : /^memorystore-for-redis-cluster$/.test(productSlug)
          ? 'site:docs.cloud.google.com/memorystore/docs/cluster "Memorystore for Redis Cluster" overview APIs reference'
          : /^memorystore-for-memcached$/.test(productSlug)
            ? 'site:docs.cloud.google.com/memorystore/docs/memcached "Memorystore for Memcached" overview APIs reference'
            : 'site:docs.cloud.google.com/memorystore/docs/valkey "Memorystore for Valkey" overview APIs reference',
      () => /^memorystore-for-redis$/.test(productSlug)
        ? 'site:docs.cloud.google.com/memorystore/docs/redis access-control'
        : /^memorystore-for-redis-cluster$/.test(productSlug)
          ? 'site:docs.cloud.google.com/memorystore/docs/cluster access-control'
          : /^memorystore-for-memcached$/.test(productSlug)
            ? 'site:docs.cloud.google.com/memorystore/docs/memcached access-control'
            : 'site:docs.cloud.google.com/memorystore/docs/valkey access-control',
      () => /^memorystore-for-redis$/.test(productSlug)
        ? 'site:docs.cloud.google.com/memorystore/docs/redis reference rest'
        : /^memorystore-for-redis-cluster$/.test(productSlug)
          ? 'site:docs.cloud.google.com/memorystore/docs/cluster reference rest'
          : /^memorystore-for-memcached$/.test(productSlug)
            ? 'site:docs.cloud.google.com/memorystore/docs/memcached reference rest'
            : 'site:docs.cloud.google.com/memorystore/docs/valkey reference rest',
    ]]);
  }
  if (/earth-engine/.test(productSlug)) {
    families.push(["earth_engine_docs", [
      () => mapTerms.slice(0, 2).map((term) => `site:developers.google.com/earth-engine \"${term}\" documentation`).join(" OR "),
      () => mapTerms.slice(0, 2).map((term) => `site:developers.google.com/earth-engine \"${term}\" guide`).join(" OR "),
      () => mapTerms.slice(0, 2).map((term) => `site:developers.google.com/earth-engine \"${term}\" api`).join(" OR "),
    ]]);
    families.push(["earth_engine_reference_docs", [
      () => 'site:developers.google.com/earth-engine apidocs',
      () => 'site:developers.google.com/earth-engine guides',
      () => 'site:developers.google.com/earth-engine docs data catalog',
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
    families.push(["app_engine_reference_docs", [
      () => /standard/.test(productSlug) ? 'site:docs.cloud.google.com/appengine/docs/standard apis "APIs & Reference"' : 'site:docs.cloud.google.com/appengine/docs/flexible apis "APIs & Reference"',
      () => /standard/.test(productSlug) ? 'site:docs.cloud.google.com/appengine/docs/standard apis runtime' : 'site:docs.cloud.google.com/appengine/docs/flexible apis runtime',
      () => /standard/.test(productSlug) ? 'site:docs.cloud.google.com/appengine/docs/standard "apis and reference"' : 'site:docs.cloud.google.com/appengine/docs/flexible "apis and reference"',
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
    if (/^anthos-clusters-on-aws/.test(productSlug) || /^anthos-clusters-on-azure/.test(productSlug)) {
      families.push(["anthos_multicloud_reference_docs", [
        () => /^anthos-clusters-on-aws/.test(productSlug)
          ? 'site:docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws reference api permissions'
          : 'site:docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/azure reference api permissions',
        () => /^anthos-clusters-on-aws/.test(productSlug)
          ? 'site:docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws apis'
          : 'site:docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/azure apis',
        () => 'site:docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest "GKE Multi-Cloud API"',
      ]]);
    }
  }
  if (/apigee-/.test(productSlug)) {
    families.push(["apigee_docs", [
      () => /^apigee-integrated-portal$/.test(productSlug)
        ? 'site:docs.cloud.google.com/apigee "integrated portal"'
        : /^apigee-hybrid$/.test(productSlug)
          ? 'site:docs.cloud.google.com/apigee/docs/hybrid "Apigee hybrid"'
        : /^apigee-x$/.test(productSlug)
          ? 'site:docs.cloud.google.com/apigee/docs/api-platform "Apigee X"'
        : /^apigee-advanced-api-security$/.test(productSlug)
          ? 'site:docs.cloud.google.com/apigee/docs/api-platform/security "Advanced API Security"'
        : /^apigee-monetization$/.test(productSlug)
          ? 'site:docs.cloud.google.com/apigee monetization'
          : /^apigee-adapter-for-envoy$/.test(productSlug)
            ? 'site:docs.cloud.google.com/apigee "adapter for envoy"'
            : `site:docs.cloud.google.com/apigee \"${escapeQueryPhrase(first)}\" documentation`,
      () => /^apigee-integrated-portal$/.test(productSlug)
        ? 'site:docs.cloud.google.com/apigee "developer portal solutions"'
        : /^apigee-hybrid$/.test(productSlug)
          ? 'site:docs.cloud.google.com/apigee/docs/hybrid what-is-hybrid helm-reference cli-reference'
        : /^apigee-x$/.test(productSlug)
          ? 'site:docs.cloud.google.com/apigee/docs/api-platform "what-apigee" organization-structure'
        : /^apigee-advanced-api-security$/.test(productSlug)
          ? 'site:docs.cloud.google.com/apigee/docs/api-platform/security api-security "manage-security-add-on"'
        : /^apigee-monetization$/.test(productSlug)
          ? 'site:docs.cloud.google.com/apigee "rate plans" monetization'
          : /^apigee-adapter-for-envoy$/.test(productSlug)
            ? 'site:docs.cloud.google.com/apigee "Remote Service for Envoy"'
            : `site:docs.cloud.google.com/apigee \"${escapeQueryPhrase(first)}\" reference`,
      () => /^apigee-integrated-portal$/.test(productSlug)
        ? 'site:docs.cloud.google.com/apigee portals'
        : /^apigee-hybrid$/.test(productSlug)
          ? 'site:docs.cloud.google.com/apigee/docs/hybrid supported-platforms service-account-authentication'
        : /^apigee-x$/.test(productSlug)
          ? 'site:docs.cloud.google.com/apigee/docs/api-platform/security/iam iam-overview'
        : /^apigee-advanced-api-security$/.test(productSlug)
          ? 'site:docs.cloud.google.com/apigee/docs/api-platform/security "api security" "iam-overview"'
        : /^apigee-monetization$/.test(productSlug)
          ? 'site:docs.cloud.google.com/apigee monetization overview'
          : /^apigee-adapter-for-envoy$/.test(productSlug)
            ? 'site:docs.cloud.google.com/apigee "envoy adapter" overview'
          : `site:docs.cloud.google.com/apigee \"${escapeQueryPhrase(first)}\" access control`,
    ]]);
    if (/^apigee-x$/.test(productSlug)) {
      families.push(["apigee_x_docs", [
        () => 'site:docs.cloud.google.com/apigee/docs/api-platform/get-started what-apigee organization-structure',
        () => 'site:docs.cloud.google.com/apigee/docs/api-platform/fundamentals organization-structure "Apigee X"',
        () => 'site:docs.cloud.google.com/apigee/docs/api-platform/security/iam iam-overview "Apigee X"',
      ]]);
    }
    if (/^apigee-integrated-portal$/.test(productSlug)) {
      families.push(["apigee_portal_reference_docs", [
        () => 'site:docs.cloud.google.com/apigee/docs/api-platform/publish/portal publish-apis "API reference documentation"',
        () => 'site:docs.cloud.google.com/apigee/docs/api-platform/publish/portal portal-interact "API reference documentation"',
        () => 'site:docs.cloud.google.com/apigee/docs/api-platform/publish/portal "publishing your apis"',
      ]]);
    }
    if (/^apigee-integration$/.test(productSlug)) {
      families.push(["apigee_integration_docs", [
        () => 'site:docs.cloud.google.com/apigee/docs/api-platform/integration "Apigee Integration"',
        () => 'site:docs.cloud.google.com/apigee/docs/reference/apis/integrations/rest "Apigee Integration"',
        () => 'site:docs.cloud.google.com/apigee/docs/api-platform/integration "using-application-integration"',
      ]]);
    }
    if (/^apigee-apim-operator$/.test(productSlug)) {
      families.push(["apigee_apim_operator_docs", [
        () => 'site:docs.cloud.google.com/apigee/docs/api-platform/apigee-kubernetes "Apigee APIM Operator"',
        () => 'site:docs.cloud.google.com/apigee/docs/api-platform/apigee-kubernetes apigee-apim-operator-install',
        () => 'site:docs.cloud.google.com/apigee/docs/api-platform/apigee-kubernetes before-you-begin troubleshoot',
      ]]);
    }
    if (/^apigee-analytics$/.test(productSlug)) {
      families.push(["apigee_analytics_reference_docs", [
        () => 'site:docs.cloud.google.com/apigee/docs/api-platform/analytics analytics reference',
        () => 'site:docs.cloud.google.com/apigee/docs/reference/apis/apigee/rest/v1 organizations.analytics',
        () => 'site:docs.cloud.google.com/apigee/docs/api-platform/analytics metrics api reference',
      ]]);
    }
  }
  return families;
}
function inferHints(candidates, profile) { const pick = (vals) => { const m = new Map(); for (const v of vals.filter(Boolean)) m.set(v, (m.get(v) || 0) + 1); return [...m.entries()].sort((a, b) => slugSimilarity(b[0], profile) - slugSimilarity(a[0], profile) || b[1] - a[1] || a[0].localeCompare(b[0]))[0]?.[0] || ""; }; return { dominantDocFamily: pick(candidates.map((c) => pathnameFor(c.url).match(/^\/([^/]+)\/docs(?:\/|$)/)?.[1] || "")), dominantPythonSlug: pick(candidates.map((c) => pathnameFor(c.url).match(/^\/python\/docs\/reference\/([^/]+)\//)?.[1] || "")), dominantJavaSlug: pick(candidates.map((c) => pathnameFor(c.url).match(/^\/java\/docs\/reference\/([^/]+)\//)?.[1] || "")) }; }
function pathScore(url) { const p = pathnameFor(url); let s = 0; if (/\/docs$/.test(p)) s += 34; if (/\/docs\/(introduction|overview|concepts|reference|apis|access-control)$/.test(p)) s += 30; if (/\/docs\/(about-[^/]+|architecture-overview|developer-overview)$/.test(p)) s += 16; if (/\/reference\/rest(?:\/[^/]+)?$/.test(p)) s += 34; if (/\/roles-permissions\//.test(p)) s += 30; if (/\/python\/docs\/reference\/[^/]+\/latest(?:\/index\.html)?$/.test(p)) s += 28; if (/^\/python\/[^/]+\/latest(?:\/index\.html)?$/.test(p)) s += 26; if (/\/java\/docs\/reference\/[^/]+\/latest\/overview$/.test(p)) s += 28; if (/\/docs\/reference$/.test(p)) s += 20; if (/\/docs\/reference\/libraries$/.test(p)) s += 12; if (/^\/workspace\/[^/]+\/api(?:\/reference)?$/.test(p)) s += 30; if (/^\/workspace\/[^/]+\/api\/guides\/[^/]+$/.test(p)) s += 26; if (/^\/workspace\/[^/]+\/api\/reference\/rest(?:\/[^/]+)?$/.test(p)) s += 34; if (/^\/workspace\/[^/]+\/api\/v3\/reference(?:\/[^/]+)?$/.test(p)) s += 34; if (/^\/workspace\/marketplace(?:\/overview)?$/.test(p)) s += 34; if (/^\/workspace\/events$/.test(p)) s += 36; if (/^\/workspace\/events\/reference\/rest\/v1$/.test(p)) s += 34; if (/^\/workspace\/events\/guides\/(auth|libraries)$/.test(p)) s += 28; if (/^\/workspace\/add-ons(?:\/overview)?$/.test(p)) s += 36; if (/^\/workspace\/add-ons\/reference$/.test(p)) s += 34; if (/^\/admin-sdk\/(overview|reference-overview)$/.test(p)) s += 34; if (/^\/admin-sdk\/[^/]+\/reference\/rest(?:\/[^/]+)?$/.test(p)) s += 34; if (/^\/admin-sdk\/[^/]+\/v1\/guides$/.test(p)) s += 30; if (/^\/games\/services$/.test(p)) s += 34; if (/^\/games\/services\/reference$/.test(p) || /^\/games\/services\/publishing\/api$/.test(p) || /^\/games\/services\/web\/api\/rest$/.test(p)) s += 32; if (/^\/maps\/documentation\/[^/]+$/.test(p)) s += 30; if (/^\/maps\/documentation\/[^/]+\/overview$/.test(p)) s += 30; if (/^\/maps\/documentation\/[^/]+\/(android-sdk|ios-sdk)$/.test(p)) s += 32; if (/^\/maps\/documentation\/[^/]+\/(android-sdk|ios-sdk)\/overview$/.test(p)) s += 32; if (/^\/maps\/documentation\/[^/]+\/(android-sdk|ios-sdk)\/reference$/.test(p)) s += 30; if (/^\/maps\/documentation\/[^/]+\/reference\/rest(?:\/[^/]+)?$/.test(p)) s += 34; if (/^\/maps\/documentation\/places\/web-service$/.test(p)) s += 36; if (/^\/earth-engine(?:\/guides)?$/.test(p) || /^\/earth-engine\/apidocs$/.test(p)) s += 28; if (/^\/earth-engine\/docs\/(data-catalog|js-client-lib|python-client-lib)$/.test(p)) s += 32; if (/^\/product-registry\/overview$/.test(p)) s += 34; if (/^\/container-optimized-os\/docs$/.test(p)) s += 34; if (/^\/container-optimized-os\/docs\/concepts$/.test(p) || /^\/container-optimized-os\/docs\/concepts\/features-and-benefits$/.test(p)) s += 32; if (/^\/vision\/product-search\/docs$/.test(p)) s += 34; if (/^\/vision\/product-search\/docs\/libraries$/.test(p)) s += 30; if (/^\/chronicle\/docs\/soar\/marketplace\/using-the-marketplace$/.test(p) || /^\/chronicle\/docs\/soar\/marketplace-integrations$/.test(p)) s += 32; if (/^\/chronicle\/docs\/(?:secops|onboard)$/.test(p)) s += 36; if (/^\/appengine\/docs\/standard\/overview$/.test(p) || /^\/appengine\/docs\/flexible\/overview$/.test(p)) s += 34; if (/^\/appengine\/docs\/(standard|flexible)\/apis$/.test(p) || /^\/appengine\/docs\/admin-api\/apis$/.test(p)) s += 34; if (/^\/appengine\/docs\/(standard|flexible)\/[^/]+\/runtime$/.test(p)) s += 30; if (/^\/appengine\/docs\/(standard|flexible)\/custom-runtimes\/about-custom-runtimes$/.test(p)) s += 32; if (/^\/sql\/docs\/(mysql|postgres|sqlserver)$/.test(p)) s += 36; if (/^\/sql\/docs\/(mysql|postgres|sqlserver)\/apis$/.test(p) || /^\/sql\/docs\/(mysql|postgres|sqlserver)\/admin-api$/.test(p)) s += 34; if (/^\/sql\/docs\/(mysql|postgres|sqlserver)\/admin-api\/rest$/.test(p)) s += 34; if (/^\/memorystore\/docs\/(redis|memcached|valkey|cluster)$/.test(p)) s += 36; if (/^\/memorystore\/docs\/(redis|memcached|valkey|cluster)\/apis$/.test(p)) s += 34; if (/^\/memorystore\/docs\/(redis|memcached|valkey|cluster)\/reference\/rest$/.test(p)) s += 34; if (/^\/memorystore\/docs\/redis\/memorystore-for-redis-overview$/.test(p)) s += 34; if (/^\/domains\/docs$/.test(p) || /^\/hub\/docs$/.test(p) || /^\/marketplace\/docs\/partners$/.test(p)) s += 36; if (/^\/network-connectivity\/docs\/(interconnect|router|vpn)$/.test(p)) s += 36; if (/^\/network-connectivity\/docs\/(interconnect|router|vpn)\/(apis|reference\/apis)$/.test(p)) s += 34; if (/^\/network-connectivity\/docs\/(interconnect|router|vpn)\/concepts\/overview$/.test(p)) s += 34; if (/^\/kubernetes-engine\/multi-cloud\/docs\/attached$/.test(p)) s += 34; if (/^\/kubernetes-engine\/multi-cloud\/docs\/attached\/(eks|aks)\/concepts\/overview$/.test(p)) s += 32; if (/^\/kubernetes-engine\/multi-cloud\/docs\/(aws|azure)$/.test(p)) s += 34; if (/^\/kubernetes-engine\/multi-cloud\/docs\/(aws|azure)\/apis$/.test(p) || /^\/kubernetes-engine\/multi-cloud\/docs\/reference\/rest$/.test(p)) s += 34; if (/^\/kubernetes-engine\/multi-cloud\/docs\/aws\/concepts\/architecture$/.test(p)) s += 32; if (/^\/kubernetes-engine\/multi-cloud\/docs\/azure\/concepts\/requirements$/.test(p)) s += 32; if (/^\/kubernetes-engine\/config-sync\/docs$/.test(p)) s += 36; if (/^\/kubernetes-engine\/config-sync\/docs\/overview$/.test(p)) s += 34; if (/^\/kubernetes-engine\/config-sync\/docs\/reference\/[^/]+$/.test(p)) s += 30; if (/^\/service-mesh\/docs$/.test(p)) s += 34; if (/^\/service-mesh\/docs\/overview$/.test(p)) s += 32; if (/^\/agent-builder\/overview$/.test(p) || /^\/agent-builder\/agent-engine\/overview$/.test(p)) s += 34; if (/^\/apigee\/docs\/api-platform\/analytics\/analytics-reference$/.test(p) || /^\/apigee\/docs\/reference\/apis\/apigee\/rest\/v1\/organizations\.analytics/.test(p)) s += 34; if (/^\/apigee\/docs\/api-platform\/monetization\/overview$/.test(p)) s += 34; if (/^\/apigee\/docs\/api-platform\/publish\/intro-portals$/.test(p)) s += 34; if (/^\/apigee\/docs\/api-platform\/publish\/portal\/build-integrated-portal$/.test(p)) s += 30; if (/^\/apigee\/docs\/api-platform\/envoy-adapter\/[^/]+\/concepts$/.test(p)) s += 34; if (/^\/apigee\/docs\/api-platform\/envoy-adapter\/[^/]+\/reference$/.test(p)) s += 30; if (/\/docs\/reference\/[^/]+\/rest$/.test(p)) s -= 18; if (/\/docs\/reference\/rest\/.+/.test(p)) s -= 32; if (/\/python\/docs\/reference\/[^/]+\/latest\/.+/.test(p)) s -= 28; if (/^\/python\/[^/]+\/latest\/.+/.test(p)) s -= 24; if (/\/java\/docs\/reference\/[^/]+\/latest\/(?!overview$).+/.test(p)) s -= 32; if (/\/(class-|package-|proto-|types?\/)/.test(p)) s -= 26; if (/\/support\//.test(p) || /\/blog\//.test(p) || /\/sdk\/gcloud\/reference\//.test(p)) s -= 40; if (/\/docs\/how-to$/.test(p) || /\/how-to\//.test(p) || /\/get-started/.test(p) || /\/quickstart/.test(p)) s -= 24; if (/bigquery-web-ui|create-billing-account/.test(p)) s -= 24; if (/\/samples?\//.test(p) || /\/tutorial/.test(p) || /\/release-notes$/.test(p)) s -= 18; const n = p.split("/").filter(Boolean).length; if (n <= 2) s += 10; if (n >= 6 && !/^\/workspace\/[^/]+\/api\//.test(p) && !/^\/workspace\/events/.test(p) && !/^\/workspace\/add-ons/.test(p) && !/^\/maps\/documentation\/[^/]+\//.test(p) && !/^\/appengine\/docs\//.test(p) && !/^\/sql\/docs\//.test(p) && !/^\/memorystore\/docs\//.test(p) && !/^\/network-connectivity\/docs\//.test(p) && !/^\/kubernetes-engine\/multi-cloud\/docs\/(attached|aws|azure|reference)/.test(p) && !/^\/kubernetes-engine\/config-sync\//.test(p) && !/^\/apigee\/docs\/api-platform\//.test(p) && !/^\/apigee\/docs\/reference\/apis\//.test(p) && !/^\/earth-engine\/docs\//.test(p) && !/^\/earth-engine\/apidocs/.test(p) && !/^\/admin-sdk\//.test(p) && !/^\/vision\/product-search\//.test(p) && !/^\/chronicle\/docs\/soar\//.test(p) && !/^\/agent-builder\//.test(p)) s -= 18; return s; }
function crawlabilityScore(candidate, profile) {
  const p = pathnameFor(candidate.url);
  const familyRules = profile.familyRules || familyRulesFor(profile.slug);
  let s = 0;
  if (/\/docs$/.test(p)) s += 26;
  if (/\/docs\/(reference|apis|overview|introduction|concepts|access-control|iam-and-access-control)$/.test(p)) s += 20;
  if (/\/docs\/reference$/.test(p)) s += 18;
  if (/\/reference\/(rest|rpc)$/.test(p)) s += 10;
  if (/\/roles-permissions\//.test(p) || /\/(iam-roles|iam-permissions)$/.test(p)) s += 16;
  if (/\/python\/docs\/reference\/[^/]+\/latest(?:\/index\.html)?$/.test(p)) s += 12;
  if (/\/java\/docs\/reference\/[^/]+\/latest\/overview$/.test(p)) s += 12;
  if (/\/docs\/reference\/rest\/.+/.test(p) || /\/reference\/rest\/v[^/]+\/.+/.test(p) || /\/reference\/rpc\/.+/.test(p)) s -= 34;
  if (/\/python\/docs\/reference\/[^/]+\/latest\/.+/.test(p)) s -= 28;
  if (/\/java\/docs\/reference\/[^/]+\/latest\/(?!overview$).+/.test(p)) s -= 28;
  if (/\/(changelog|release-notes)$/.test(p)) s -= 30;
  if (/\/samples?\//.test(p) || /\/tutorial/.test(p) || /\/how-to\//.test(p) || /\/quickstart/.test(p)) s -= 20;
  if (matchesAnyRule(p, familyRules.preferredPaths || [])) s += 18;
  if (matchesAnyRule(p, familyRules.forbiddenPaths || [])) s -= 32;
  const depth = p.split("/").filter(Boolean).length;
  if (depth >= 7) s -= 16;
  return s;
}
function keywordScore(candidate, productName, intent) { const h = normalizeText(`${candidate.title} ${candidate.description} ${candidate.url}`); let s = 0; for (const token of normalizeText(productName).split(" ").filter((t) => t.length >= 3).slice(0, 6)) if (h.includes(token)) s += 8; if (h.includes(normalizeText(productName))) s += 18; if (h.includes("documentation")) s += 10; if (h.includes("overview")) s += 8; if (h.includes("reference")) s += 12; if (h.includes("api")) s += 8; if (h.includes("roles and permissions")) s += 18; if (h.includes("access control")) s += 14; if (h.includes("iam")) s += 10; if (h.includes("client libraries")) s += 16; if (h.includes("python")) s += intent === "python_client" ? 18 : 2; if (h.includes("java")) s += intent === "java_client" ? 18 : 2; if (h.includes("gateway api") && !normalizeText(productName).includes("gateway api")) s -= 40; if (/migration api|reservation api|data policy api|analytics hub api/.test(h)) s -= 16; if (/release notes|\bpricing\b|\btutorials?\b|\bsamples?\b|\bblog\b/.test(h)) s -= 18; return s; }
function affinityScore(candidate, profile, hints) { const p = pathnameFor(candidate.url); const h = normalizeText(`${candidate.title} ${candidate.description} ${candidate.url}`); const compact = compactText(h); const familyRules = profile.familyRules || familyRulesFor(profile.slug); let s = familyRuleScore(candidate.url, familyRules); if (h.includes(profile.normalizedName)) s += 24; if (compact.includes(profile.compactName)) s += 12; if (compact.includes(profile.compactSlug)) s += 10; for (const alias of profile.aliasTexts.slice(0, 8)) if (alias && h.includes(alias)) s += 16; for (const alias of profile.aliasCompacts.slice(0, 8)) if (alias && compact.includes(alias)) s += 8; for (const token of profile.tokens.slice(0, 8)) if (h.includes(token)) s += 6; const doc = p.match(/^\/([^/]+)\/docs(?:\/|$)/)?.[1] || ""; const py = p.match(/^\/python\/docs\/reference\/([^/]+)\//)?.[1] || ""; const ja = p.match(/^\/java\/docs\/reference\/([^/]+)\//)?.[1] || ""; const appEngineRuntimeSegment = p.match(/^\/appengine\/docs\/(?:standard|flexible)\/([^/]+)/)?.[1] || ""; const expectedAppEngineRuntime = expectedAppEngineRuntimeSegment(profile.slug); if (hints.dominantDocFamily && doc) s += doc === hints.dominantDocFamily ? 22 : -28; if (expectedAppEngineRuntime && appEngineRuntimeSegment && !["overview", "apis"].includes(appEngineRuntimeSegment)) s += appEngineRuntimeSegment === expectedAppEngineRuntime ? 26 : -42; if (py) { const sim = slugSimilarity(py, profile); s += Math.min(28, Math.max(-40, sim - 20)); if (hints.dominantPythonSlug) s += py === hints.dominantPythonSlug ? 18 : -26; } if (ja) { const sim = slugSimilarity(ja, profile); s += Math.min(28, Math.max(-40, sim - 20)); if (hints.dominantJavaSlug) s += ja === hints.dominantJavaSlug ? 18 : -26; } if (hostnameFor(candidate.url) === "cloud.google.com") s -= 12; if (hostnameFor(candidate.url) === "googleapis.dev") s -= 8; if (/console\.cloud\.google\.com/.test(candidate.url)) s -= 40; return s; }
function deterministicScore(candidate, productName, profile, hints) { const best = candidate.intent_hits[0] || ""; const raw = 18 + (hostnameFor(candidate.url) === "docs.cloud.google.com" ? 28 : hostnameFor(candidate.url) === "cloud.google.com" ? 10 : hostnameFor(candidate.url) === "developers.google.com" ? 8 : hostnameFor(candidate.url) === "googleapis.dev" ? 6 : 0) + pathScore(candidate.url) + crawlabilityScore(candidate, profile) + keywordScore(candidate, productName, best) + affinityScore(candidate, profile, hints) + (candidate.round_hits.length * 4) + (candidate.query_hits.length * 2) - ((candidate.best_rank - 1) * 3); return Math.max(0, Math.min(100, raw)); }
function classify(candidate, productName, profile, hints) { const p = pathnameFor(candidate.url); const h = normalizeText(`${candidate.title} ${candidate.description} ${candidate.url}`); const py = p.match(/^\/python\/docs\/reference\/([^/]+)\//)?.[1] || p.match(/^\/python\/([^/]+)\//)?.[1] || ""; const ja = p.match(/^\/java\/docs\/reference\/([^/]+)\//)?.[1] || ""; const familyRules = profile.familyRules || familyRulesFor(profile.slug); const familyScore = familyRuleScore(candidate.url, familyRules); const preferredFamily = matchesAnyRule(p, familyRules.preferredPaths || []); const forbiddenFamily = matchesAnyRule(p, familyRules.forbiddenPaths || []); const canonical = canonicalClassification(profile.slug, p); let c = canonical || "supporting_page"; if (/release notes|\bblog\b/.test(h) || /\/support\//.test(p)) c = "irrelevant"; else if (!canonical && (/^\/kubernetes-engine\/config-sync\/docs\/concepts\/architecture(?:\/|$)/.test(p) || /^\/workspace\/marketplace\/(enable-configure-sdk|use-analytics|create-listing|manage-app-listing|how-to-publish|about-app-review|get-featured|configure-oauth-consent-screen|list-multiple-app-integrations)(?:\/|$)/.test(p) || /^\/chronicle\/docs\/secops\/understand-the-secops-platform(?:\/|$)/.test(p))) c = "supporting_page"; else if (!canonical && (/\/docs\/how-to$/.test(p) || /\/how-to\//.test(p) || (/\/get-started/.test(p) && !/^\/apigee\/docs\/api-platform\/get-started\/what-apigee$/.test(p)) || /\/quickstart/.test(p) || (/\/reference\/rest\/.+/.test(p) && !/^\/workspace\/events\/reference\/rest\/v1$/.test(p) && !/^\/vertex-ai\/docs\/reference\/rest\/v1(?:beta1)?\/projects\.locations\.reasoningEngines/.test(p) && !/^\/kubernetes-engine\/docs\/add-on\/backup-for-gke\/reference\/rest\/v1\//.test(p)))) c = "supporting_page"; else if (!canonical && (/\/reference\/rest(?:\/[^/]+)?$/.test(p) || /^\/workspace\/[^/]+\/api\/v3\/reference(?:\/[^/]+)?$/.test(p) || /^\/calendar\/v3\/reference(?:\/[^/]+)?$/.test(p) || /^\/admin-sdk\/[^/]+\/reference\/rest(?:\/[^/]+)?$/.test(p) || /^\/games\/services\/web\/api\/rest$/.test(p) || /^\/chronicle\/docs\/reference\/[^/]+$/.test(p) || /^\/kubernetes-engine\/multi-cloud\/docs\/reference\/rest$/.test(p) || /^\/workspace\/events\/reference\/rest\/v1$/.test(p) || /^\/sql\/docs\/(mysql|postgres|sqlserver)\/admin-api\/rest$/.test(p) || /^\/memorystore\/docs\/(redis|memcached|valkey|cluster)\/reference\/rest$/.test(p) || /^\/vertex-ai\/docs\/reference\/rest$/.test(p) || /^\/marketplace\/docs\/partners\/commerce-procurement-api\/reference\/rest$/.test(p) || /^\/apigee\/docs\/reference\/apis\/apigee\/rest\/v1\/organizations\.analytics/.test(p) || /^\/iam\/docs\/reference\/rest$/.test(p) || /^\/database-migration\/docs\/reference\/rest$/.test(p) || /^\/apigee\/docs\/reference\/apis\/integrations\/rest$/.test(p) || /^\/kubernetes-engine\/docs\/add-on\/backup-for-gke\/reference\/rest\/v1\//.test(p))) c = "api_reference"; else if (!canonical && (/^\/domains\/docs$/.test(p) || /^\/hub\/docs$/.test(p) || /^\/marketplace\/docs\/partners$/.test(p) || /^\/network-connectivity\/docs\/(interconnect|router|vpn)$/.test(p) || /^\/network-connectivity\/docs\/(interconnect|router|vpn)\/concepts\/overview$/.test(p) || /^\/iam\/docs$/.test(p) || /^\/iam\/docs\/overview$/.test(p) || /^\/assured-workloads\/access-transparency\/docs\/overview$/.test(p) || /^\/endpoints\/docs\/openapi$/.test(p) || /^\/endpoints\/docs\/openapi\/about-cloud-endpoints$/.test(p) || /^\/apigee\/docs\/api-platform\/get-started\/what-apigee$/.test(p) || /^\/apigee\/docs\/api-platform\/security\/api-security$/.test(p) || /^\/apigee\/docs\/hybrid\/[^/]+\/what-is-hybrid$/.test(p) || /^\/apigee\/docs\/apihub\/getting-started-apihub$/.test(p) || /^\/product-registry\/overview$/.test(p) || /^\/docs\/buildpacks$/.test(p) || /^\/docs\/buildpacks\/overview$/.test(p) || /^\/docs\/quotas$/.test(p) || /^\/docs\/quotas\/overview$/.test(p) || /^\/database-migration\/docs$/.test(p) || /^\/config-connector\/docs$/.test(p) || /^\/config-connector\/docs\/overview$/.test(p) || /^\/kubernetes-engine\/config-controller\/docs$/.test(p) || /^\/kubernetes-engine\/config-controller\/docs\/overview$/.test(p) || /^\/kubernetes-engine\/docs\/add-on\/backup-for-gke$/.test(p) || /^\/service-mesh\/docs$/.test(p) || /^\/service-mesh\/docs\/overview$/.test(p) || /^\/apigee\/docs\/api-platform\/integration\/using-application-integration$/.test(p) || /^\/apigee\/docs\/api-platform\/apigee-kubernetes\/apigee-apim-operator-install$/.test(p))) c = "product_root"; else if (!canonical && (/\/roles-permissions\//.test(p) || h.includes("roles and permissions") || h.includes("access control") || h.includes("iam") || /^\/workspace\/events\/guides\/auth$/.test(p) || /^\/kubernetes-engine\/multi-cloud\/docs\/azure\/concepts\/requirements$/.test(p) || /^\/kubernetes-engine\/multi-cloud\/docs\/(aws|azure)\/reference\/api-permissions$/.test(p) || /^\/apigee\/docs\/api-platform\/security\/iam\/iam-overview$/.test(p))) c = "iam_reference"; else if (!canonical && ((/\/python\/docs\/reference\/[^/]+\/latest(?:\/index\.html)?$/.test(p) || /^\/python\/[^/]+\/latest(?:\/index\.html)?$/.test(p)) && slugSimilarity(py, profile) >= 40)) c = "python_reference"; else if (!canonical && /\/java\/docs\/reference\/[^/]+\/latest\/overview$/.test(p) && slugSimilarity(ja, profile) >= 40) c = "java_reference"; else if (!canonical && (/\/docs\/(reference|apis)$/.test(p) || /^\/appengine\/docs\/(standard|flexible)\/apis$/.test(p) || /^\/workspace\/[^/]+\/api\/reference(?:\/rest(?:\/[^/]+)?)?$/.test(p) || /^\/workspace\/marketplace\/reference\/rest(?:\/[^/]+)?$/.test(p) || /^\/workspace\/add-ons\/reference$/.test(p) || /^\/admin-sdk\/reference-overview$/.test(p) || /^\/games\/services\/reference$/.test(p) || /^\/games\/services\/publishing\/api$/.test(p) || /^\/maps\/documentation\/[^/]+\/(android-sdk|ios-sdk)\/reference$/.test(p) || /^\/earth-engine\/apidocs$/.test(p) || /^\/sql\/docs\/(mysql|postgres|sqlserver)\/(apis|admin-api)$/.test(p) || /^\/memorystore\/docs\/(redis|memcached|valkey|cluster)\/apis$/.test(p) || /^\/network-connectivity\/docs\/(interconnect|vpn)\/apis$/.test(p) || /^\/network-connectivity\/docs\/router\/reference\/apis$/.test(p) || /^\/kubernetes-engine\/multi-cloud\/docs\/(aws|azure)\/apis$/.test(p) || /^\/kubernetes-engine\/config-sync\/docs\/reference\/[^/]+$/.test(p) || /^\/apigee\/docs\/api-platform\/analytics\/analytics-reference$/.test(p) || /^\/apigee\/docs\/api-platform\/envoy-adapter\/[^/]+\/reference$/.test(p) || /^\/apigee\/docs\/apihub\/reference(?:\/[^/]+)?$/.test(p) || /^\/iam\/docs\/apis$/.test(p) || /^\/endpoints\/docs\/openapi\/openapi-overview$/.test(p) || /^\/apigee\/docs\/api-platform\/reference\/manage-security-add-on$/.test(p) || /^\/apigee\/docs\/hybrid\/[^/]+\/(helm-reference|cli-reference)$/.test(p) || /^\/apigee\/docs\/apihub\/(apis-intro|specs-intro|versions-intro)$/.test(p) || /^\/apigee\/docs\/api-platform\/monetization\/manage-rate-plans$/.test(p) || /^\/apigee\/docs\/api-platform\/publish\/portal\/publish-apis$/.test(p) || /^\/docs\/buildpacks\/(builders|build-application|use-a-specific-builder)$/.test(p) || /^\/docs\/quotas\/(apis|api-overview)$/.test(p) || /^\/config-connector\/docs\/reference\/overview$/.test(p) || /^\/config-connector\/docs\/concepts\/resources$/.test(p) || /^\/kubernetes-engine\/config-controller\/docs\/reference\/roles-permissions$/.test(p) || /^\/kubernetes-engine\/config-controller\/docs\/manage-resources$/.test(p) || /^\/kubernetes-engine\/docs\/add-on\/backup-for-gke\/reference\/rest\/v1\//.test(p) || /^\/service-mesh\/docs\/(cloud-run-api-reference|service-routing\/xds-control-plane-apis)$/.test(p) || /^\/database-migration\/docs\/reference\/rest$/.test(p) || /^\/apigee\/docs\/reference\/apis\/integrations\/rest$/.test(p) || /^\/apigee\/docs\/api-platform\/apigee-kubernetes\/apigee-apim-operator-before-you-begin$/.test(p) || /apis and reference/.test(h))) c = "product_reference"; else if (!canonical && (/^\/apigee\/docs\/apihub\/[^/]+$/.test(p) || /^\/apigee\/docs\/api-platform\/analytics(?:\/[^/]+)?$/.test(p) || /^\/chronicle\/docs\/secops(?:\/[^/]+)?$/.test(p) || /^\/chronicle\/docs\/onboard(?:\/[^/]+)?$/.test(p) || /^\/chronicle\/docs\/[^/]+$/.test(p) || /\/docs$/.test(p) || /\/docs\/(introduction|overview|concepts|about-[^/]+)$/.test(p) || /^\/workspace\/[^/]+\/api(?:\/guides\/[^/]+)?$/.test(p) || /^\/workspace\/marketplace(?:\/overview)?$/.test(p) || /^\/workspace\/events$/.test(p) || /^\/workspace\/add-ons(?:\/overview)?$/.test(p) || /^\/admin-sdk\/overview$/.test(p) || /^\/admin-sdk\/[^/]+\/v1\/guides$/.test(p) || /^\/games\/services$/.test(p) || /^\/maps\/documentation\/[^/]+(?:\/overview)?$/.test(p) || /^\/maps\/documentation\/[^/]+\/(android-sdk|ios-sdk)(?:\/overview)?$/.test(p) || /^\/earth-engine(?:\/guides)?$/.test(p) || /^\/earth-engine\/docs\/(data-catalog|js-client-lib|python-client-lib)$/.test(p) || /^\/container-optimized-os\/docs$/.test(p) || /^\/container-optimized-os\/docs\/concepts(?:\/features-and-benefits)?$/.test(p) || /^\/vision\/product-search\/docs$/.test(p) || /^\/vision\/product-search\/docs\/libraries$/.test(p) || /^\/chronicle\/docs\/soar\/marketplace\/using-the-marketplace$/.test(p) || /^\/chronicle\/docs\/soar\/marketplace-integrations$/.test(p) || /^\/appengine\/docs\/admin-api\/overview$/.test(p) || /^\/appengine\/docs\/(standard|flexible)\/overview$/.test(p) || /^\/appengine\/docs\/(standard|flexible)\/[^/]+\/runtime$/.test(p) || /^\/appengine\/docs\/(standard|flexible)\/custom-runtimes\/about-custom-runtimes$/.test(p) || /^\/sql\/docs\/(mysql|postgres|sqlserver)$/.test(p) || /^\/memorystore\/docs\/(redis|memcached|valkey|cluster)$/.test(p) || /^\/memorystore\/docs\/redis\/memorystore-for-redis-overview$/.test(p) || /^\/kubernetes-engine\/multi-cloud\/docs\/attached$/.test(p) || /^\/kubernetes-engine\/multi-cloud\/docs\/attached\/(eks|aks)\/concepts\/overview$/.test(p) || /^\/kubernetes-engine\/multi-cloud\/docs\/(aws|azure)$/.test(p) || /^\/kubernetes-engine\/config-sync\/docs$/.test(p) || /^\/kubernetes-engine\/config-sync\/docs\/overview$/.test(p) || /^\/agent-builder\/overview$/.test(p) || /^\/agent-builder\/agent-engine\/overview$/.test(p) || /^\/apigee\/docs\/api-platform\/monetization\/overview$/.test(p) || /^\/apigee\/docs\/api-platform\/publish\/intro-portals$/.test(p) || /^\/apigee\/docs\/api-platform\/publish\/portal\/build-integrated-portal$/.test(p) || /^\/apigee\/docs\/api-platform\/envoy-adapter\/[^/]+\/concepts$/.test(p))) c = "product_root"; if (forbiddenFamily && c !== "irrelevant") c = "irrelevant"; else if (familyRules.strict && !preferredFamily && c !== "irrelevant") c = "supporting_page"; const score = deterministicScore(candidate, productName, profile, hints); return { classification: c, score, family_score: familyScore, family_preferred: preferredFamily, family_forbidden: forbiddenFamily, parent_page_likelihood: Math.max(0, Math.min(5, Math.round(score / 20))), product_match: Math.max(0, Math.min(5, Math.round((affinityScore(candidate, profile, hints) + 20) / 16))), coverage_value: Math.max(0, Math.min(5, Math.round((pathScore(candidate.url) + 30) / 16))), keep: score >= 74 && !["irrelevant", "supporting_page"].includes(c) && familyScore >= 0, rationale: "Fallback heuristic scoring was used because API scoring was unavailable." }; }
function classifyWithOverrides(candidate, productName, profile, hints) {
  const scored = classify(candidate, productName, profile, hints);
  const p = pathnameFor(candidate.url);
  const slug = String(profile?.slug || "").toLowerCase();
  if (slug === "access-transparency") {
    if (/^\/assured-workloads\/access-transparency\/docs\/(reading-logs|supported-services|understanding-workspace-logs)$/.test(p)) {
      scored.classification = "product_reference";
      scored.keep = true;
    }
  }
  if (slug === "managed-cloud-service-mesh") {
    if (/^\/service-mesh\/docs\/(managed-control-plane-overview|supported-features-managed|asmcli-reference)$/.test(p) || /^\/service-mesh\/v[\d.]+\/docs\/(managed-control-plane-overview|asmcli-reference|onboarding\/provision-control-plane)$/.test(p)) {
      scored.classification = "product_reference";
      scored.family_forbidden = false;
      scored.keep = true;
    }
  }
  if (slug === "anthos-attached-clusters") {
    if (/^\/kubernetes-engine\/multi-cloud\/docs\/attached\/(eks|aks|generic)\/reference\/cluster-prerequisites$/.test(p)) {
      scored.classification = "product_reference";
      scored.keep = true;
    }
  }
  if (slug === "apigee-x") {
    if (/^\/apigee\/docs\/api-platform\/fundamentals\/organization-structure$/.test(p)) {
      scored.classification = "product_reference";
      scored.keep = true;
    }
  }
  if (slug === "cloud-hub") {
    if (/^\/hub\/docs\/(app-project-views|deployments|resources|home|health)$/.test(p)) {
      scored.classification = "product_reference";
      scored.keep = true;
    }
  }
  if (slug === "cloud-based-maps-styling") {
    if (/^\/maps\/documentation\/cloud-customization\/(overview|setup-leg)$/.test(p)) {
      scored.classification = "product_reference";
      scored.keep = true;
    }
  }
  if (slug === "agent-assist") {
    if (/^\/agent-assist\/docs\/(basics|backend-basics|quotas|generative-knowledge-assist|ui-modules-ai-coach-documentation)$/.test(p)) {
      scored.classification = "product_reference";
      scored.keep = true;
    }
  }
  if (slug === "ai-hypercomputer") {
    if (/^\/ai-hypercomputer\/docs\/(create\/create-overview|cluster-capabilities|images|tutorials)$/.test(p)) {
      scored.classification = "product_reference";
      scored.keep = true;
    }
  }
  if (slug === "cluster-toolkit") {
    if (/^\/cluster-toolkit\/docs\/(deploy\/deploy-cluster-overview|support-matrix|setup\/cluster-blueprint)$/.test(p)) {
      scored.classification = "product_reference";
      scored.keep = true;
    }
  }
  if (slug === "confidential-space") {
    if (/^\/confidential-computing\/confidential-space\/docs\/confidential-space-overview$/.test(p)) {
      scored.classification = "product_root";
      scored.keep = true;
    } else if (/^\/confidential-computing\/confidential-space\/docs\/(reference\/launch-policies|deploy-workloads|create-grant-access-confidential-resources|create-customize-workloads)$/.test(p)) {
      scored.classification = "product_reference";
      scored.keep = true;
    }
  }
  if (slug === "confidential-vm") {
    if (/^\/confidential-computing\/confidential-vm\/docs\/(supported-configurations|attestation-overview|create-a-confidential-vm-instance|monitor-integrity)$/.test(p)) {
      scored.classification = "product_reference";
      scored.keep = true;
    }
  }
  if (slug === "blockchain-analytics") {
    if (/^\/blockchain-analytics\/docs\/schema$/.test(p)) {
      scored.classification = "product_reference";
      scored.keep = true;
    } else if (/^\/blockchain-analytics\/docs\/permissions$/.test(p)) {
      scored.classification = "iam_reference";
      scored.keep = true;
    }
  }
  if (slug === "carbon-footprint") {
    if (/^\/carbon-footprint\/docs\/view-carbon-data$/.test(p)) {
      scored.classification = "product_root";
      scored.keep = true;
    } else if (/^\/carbon-footprint\/docs\/(api|export)$/.test(p)) {
      scored.classification = "product_reference";
      scored.keep = true;
    } else if (/^\/carbon-footprint\/docs\/iam$/.test(p)) {
      scored.classification = "iam_reference";
      scored.keep = true;
    }
  }
  if (slug === "automl-translation") {
    if (/^\/translate\/docs\/(overview|api-overview|intro-to-v3|translate-text)$/.test(p) || /^\/translate\/docs\/advanced\/(translate-documents|custom-translation-quickstart|automl-prepare|automl-models|automl-datasets)$/.test(p)) {
      scored.classification = "product_root";
      scored.keep = true;
    } else if (/^\/translate\/docs\/reference\/rpc$/.test(p)) {
      scored.classification = "api_reference";
      scored.keep = true;
    } else if (/^\/translate\/docs\/access-control$/.test(p) || /^\/iam\/docs\/roles-permissions\/(cloudtranslate|automl)$/.test(p)) {
      scored.classification = "iam_reference";
      scored.keep = true;
    }
  }
  if (slug === "contact-center-ai-insights") {
    if (/^\/contact-center\/insights\/docs$/.test(p) || /^\/contact-center\/ccai-platform\/docs\/conversational-insights$/.test(p)) {
      scored.classification = "product_root";
      scored.keep = true;
    } else if (/^\/contact-center\/insights\/docs\/reference\/rest$/.test(p)) {
      scored.classification = "api_reference";
      scored.keep = true;
    } else if (/^\/iam\/docs\/roles-permissions\/contactcenterinsights$/.test(p)) {
      scored.classification = "iam_reference";
      scored.keep = true;
    }
  }
  if (slug === "cloud-product-registry-api") {
    if (/^\/product-registry$/.test(p)) {
      scored.classification = "product_root";
      scored.keep = true;
    } else if (/^\/product-registry\/reference\/cloudproductregistry-api\/rest(?:\/|$)/.test(p)) {
      scored.classification = "api_reference";
      scored.keep = true;
    } else if (/^\/product-registry\/overview$/.test(p)) {
      scored.classification = "iam_reference";
      scored.keep = true;
    }
  }
  if (slug === "bare-metal-solution") {
    if (/^\/bare-metal\/docs$/.test(p) || /^\/bare-metal\/docs\/bms-overview$/.test(p)) {
      scored.classification = "product_root";
      scored.keep = true;
    } else if (/^\/bare-metal\/docs\/reference\/rest(?:\/|$)/.test(p)) {
      scored.classification = "api_reference";
      scored.keep = true;
    } else if (/^\/bare-metal\/docs\/bms-iam$/.test(p) || /^\/iam\/docs\/roles-permissions\/baremetalsolution$/.test(p)) {
      scored.classification = "iam_reference";
      scored.keep = true;
    }
  }
  if (slug === "assured-open-source-software") {
    if (/^\/assured-open-source-software\/docs$/.test(p) || /^\/assured-open-source-software\/docs\/overview$/.test(p) || /^\/assured-oss$/.test(p)) {
      scored.classification = "product_root";
      scored.keep = true;
    } else if (/^\/assured-open-source-software\/docs\/(package-signature-overview|enable|virtual-repository-access|remote-repository-access|download-python-packages|download-go-packages|validate-connection)$/.test(p)) {
      scored.classification = "product_reference";
      scored.keep = true;
    } else if (/^\/iam\/docs\/roles-permissions\/assuredoss$/.test(p)) {
      scored.classification = "iam_reference";
      scored.keep = true;
    }
  }
  return scored;
}
function addDerivedParents(candidates) { const map = new Map(candidates.map((c) => [c.url, c])); for (const candidate of candidates) { const p = pathnameFor(candidate.url); const host = hostnameFor(candidate.url) || "docs.cloud.google.com"; const urls = []; const py = p.match(/^\/python\/docs\/reference\/([^/]+)\/latest\/.+/); if (py) urls.push(`https://${host}/python/docs/reference/${py[1]}/latest`); const pyAlt = p.match(/^\/python\/([^/]+)\/latest\/.+/); if (pyAlt) urls.push(`https://${host}/python/${pyAlt[1]}/latest`); const ja = p.match(/^\/java\/docs\/reference\/([^/]+)\/latest\/.+/); if (ja) urls.push(`https://${host}/java/docs/reference/${ja[1]}/latest/overview`); const rest = p.match(/^\/([^/]+)\/docs\/reference\/rest\/.+/); if (rest) urls.push(`https://docs.cloud.google.com/${rest[1]}/docs/reference/rest`); const sub = p.match(/^\/([^/]+)\/docs\/reference\/[^/]+\/rest$/); if (sub) urls.push(`https://docs.cloud.google.com/${sub[1]}/docs/reference`); const workbenchRpc = p.match(/^\/vertex-ai\/docs\/workbench\/reference\/rpc\/.+/); if (workbenchRpc) urls.push(`https://${host}/vertex-ai/docs/workbench/reference`); const sqlAdmin = p.match(/^\/sql\/docs\/(mysql|postgres|sqlserver)\/admin-api\/rest(?:\/.+)?$/); if (sqlAdmin) { urls.push(`https://${host}/sql/docs/${sqlAdmin[1]}`); urls.push(`https://${host}/sql/docs/${sqlAdmin[1]}/apis`); urls.push(`https://${host}/sql/docs/${sqlAdmin[1]}/admin-api`); } const memorystoreRest = p.match(/^\/memorystore\/docs\/(redis|memcached|valkey|cluster)\/reference\/rest(?:\/.+)?$/); if (memorystoreRest) { urls.push(`https://${host}/memorystore/docs/${memorystoreRest[1]}`); urls.push(`https://${host}/memorystore/docs/${memorystoreRest[1]}/apis`); } const networkApis = p.match(/^\/network-connectivity\/docs\/(interconnect|vpn)\/apis$/); if (networkApis) { urls.push(`https://${host}/network-connectivity/docs/${networkApis[1]}`); urls.push(`https://${host}/network-connectivity/docs/${networkApis[1]}/concepts/overview`); } const networkRouterApis = p.match(/^\/network-connectivity\/docs\/router\/reference\/apis$/); if (networkRouterApis) { urls.push(`https://${host}/network-connectivity/docs/router`); urls.push(`https://${host}/network-connectivity/docs/router/concepts/overview`); } if (/^\/domains\/docs\/(apis|reference\/rest|access-control)$/.test(p)) urls.push(`https://${host}/domains/docs`); if (/^\/marketplace\/docs\/partners\/commerce-procurement-api\/reference\/rest$/.test(p)) urls.push(`https://${host}/marketplace/docs/partners`); const workspaceRest = p.match(/^\/workspace\/([^/]+)\/api\/reference\/rest(?:\/[^/]+)?$/); if (workspaceRest) { urls.push(`https://developers.google.com/workspace/${workspaceRest[1]}/api/reference`); urls.push(`https://developers.google.com/workspace/${workspaceRest[1]}/api`); urls.push(`https://developers.google.com/workspace/${workspaceRest[1]}/api/guides/overview`); } const workspaceV3 = p.match(/^\/workspace\/([^/]+)\/api\/v3\/reference(?:\/[^/]+)?$/); if (workspaceV3) { urls.push(`https://developers.google.com/workspace/${workspaceV3[1]}/api/v3/reference`); urls.push(`https://developers.google.com/workspace/${workspaceV3[1]}/api`); urls.push(`https://developers.google.com/workspace/${workspaceV3[1]}/api/guides/overview`); } if (/^\/workspace\/events\/reference\/rest\/v1$/.test(p)) { urls.push("https://developers.google.com/workspace/events"); urls.push("https://developers.google.com/workspace/events/guides/auth"); urls.push("https://developers.google.com/workspace/events/guides/libraries"); } if (/^\/workspace\/add-ons\/reference$/.test(p)) { urls.push("https://developers.google.com/workspace/add-ons"); urls.push("https://developers.google.com/workspace/add-ons/overview"); } const workspaceMarketplaceRest = p.match(/^\/workspace\/marketplace\/reference\/rest(?:\/[^/]+)?$/); if (workspaceMarketplaceRest) { urls.push("https://developers.google.com/workspace/marketplace/overview"); urls.push("https://developers.google.com/workspace/marketplace"); } const adminRest = p.match(/^\/admin-sdk\/([^/]+)\/reference\/rest(?:\/[^/]+)?$/); if (adminRest) { urls.push(`https://developers.google.com/admin-sdk/reference-overview`); urls.push(`https://developers.google.com/admin-sdk/overview`); } const adminGuides = p.match(/^\/admin-sdk\/([^/]+)\/v1\/guides(?:\/.+)?$/); if (adminGuides) urls.push(`https://developers.google.com/admin-sdk/overview`); const gamesApi = p.match(/^\/games\/services\/(publishing\/api|web\/api\/rest)$/); if (gamesApi) { urls.push(`https://developers.google.com/games/services`); urls.push(`https://developers.google.com/games/services/reference`); } const mapsRest = p.match(/^\/maps\/documentation\/([^/]+)\/reference\/rest$/); if (mapsRest) { urls.push(`https://developers.google.com/maps/documentation/${mapsRest[1]}`); urls.push(`https://developers.google.com/maps/documentation/${mapsRest[1]}/overview`); } const mapsMobile = p.match(/^\/maps\/documentation\/([^/]+)\/(android-sdk|ios-sdk)(?:\/.+)?$/); if (mapsMobile) { urls.push(`https://developers.google.com/maps/documentation/${mapsMobile[1]}/${mapsMobile[2]}`); urls.push(`https://developers.google.com/maps/documentation/${mapsMobile[1]}/${mapsMobile[2]}/overview`); urls.push(`https://developers.google.com/maps/documentation/${mapsMobile[1]}/${mapsMobile[2]}/reference`); } const earthEngineLibrary = p.match(/^\/earth-engine\/docs\/(data-catalog|js-client-lib|python-client-lib)\/.+/); if (earthEngineLibrary) urls.push(`https://developers.google.com/earth-engine/docs/${earthEngineLibrary[1]}`); if (/^\/earth-engine\/apidocs\/.+/.test(p)) { urls.push(`https://developers.google.com/earth-engine/apidocs`); urls.push(`https://developers.google.com/earth-engine/guides`); } if (/^\/earth-engine\/datasets\//.test(p)) urls.push(`https://developers.google.com/earth-engine/docs/data-catalog`); if (/^\/container-optimized-os\/docs\/.+/.test(p)) urls.push(`https://${host}/container-optimized-os/docs`); if (/^\/vision\/product-search\/docs\/.+/.test(p)) urls.push(`https://${host}/vision/product-search/docs`); if (/^\/chronicle\/docs\/soar\/marketplace-integrations\/.+/.test(p)) urls.push(`https://${host}/chronicle/docs/soar/marketplace-integrations`); if (/^\/chronicle\/docs\/(?:secops|onboard|reports|administration)\/.+/.test(p)) { const root = p.split("/").slice(0, 4).join("/"); urls.push(`https://${host}${root}`); } const appEngineRuntime = p.match(/^\/appengine\/docs\/(standard|flexible)\/[^/]+\/(runtime|create-app|configuring-your-app-with-app-yaml|building-app|services\/access|specifying-dependencies|upgrade-[^/]+)$/); if (appEngineRuntime) { urls.push(`https://${host}/appengine/docs/${appEngineRuntime[1]}/overview`); urls.push(`https://${host}/appengine/docs/${appEngineRuntime[1]}/apis`); } const appEngineLegacyJava = p.match(/^\/appengine\/docs\/legacy\/standard\/java\/javadoc\//); if (appEngineLegacyJava) urls.push(`https://${host}/appengine/docs/legacy/standard/java`); const multicloudRest = p.match(/^\/kubernetes-engine\/multi-cloud\/docs\/reference\/rest\/.+/); if (multicloudRest) urls.push(`https://${host}/kubernetes-engine/multi-cloud/docs/reference/rest`); const multicloudFamily = p.match(/^\/kubernetes-engine\/multi-cloud\/docs\/(aws|azure)\/.+/); if (multicloudFamily) { urls.push(`https://${host}/kubernetes-engine/multi-cloud/docs/${multicloudFamily[1]}`); urls.push(`https://${host}/kubernetes-engine/multi-cloud/docs/${multicloudFamily[1]}/apis`); urls.push(`https://${host}/kubernetes-engine/multi-cloud/docs/reference/rest`); } if (/^\/agent-builder\/agent-engine\/(manage\/access|agent-identity|set-up|memory-bank\/iam-conditions)$/.test(p)) { urls.push(`https://${host}/agent-builder/overview`); urls.push(`https://${host}/agent-builder/agent-engine/overview`); } if (/^\/vertex-ai\/docs\/reference\/rest\/v1(?:beta1)?\/projects\.locations\.reasoningEngines/.test(p)) urls.push(`https://${host}/vertex-ai/docs/reference/rest`); if (/^\/apigee\/docs\/reference\/apis\/apigee\/rest\/v1\/organizations\.analytics/.test(p)) urls.push(`https://${host}/apigee/docs/api-platform/analytics/analytics-reference`); if (/^\/product-registry\/overview$/.test(p)) { urls.push(`https://${host}/product-registry`); urls.push(`https://${host}/product-registry/reference/cloudproductregistry-api/rest`); } if (/^\/product-registry\/reference\/cloudproductregistry-api\/rest(?:\/.+)?$/.test(p)) { urls.push(`https://${host}/product-registry`); urls.push(`https://${host}/product-registry/overview`); urls.push(`https://${host}/product-registry/reference/cloudproductregistry-api/rest`); } if (/^\/contact-center\/insights\/docs\/reference\/rest(?:\/.+)?$/.test(p)) { urls.push(`https://${host}/contact-center/insights/docs`); urls.push(`https://${host}/contact-center/ccai-platform/docs/conversational-insights`); } for (const url of urls.map(normalizeUrl)) if (!map.has(url)) map.set(url, { ...candidate, url }); } return [...map.values()]; }
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
function applyKeepBudget(scored) { const budgets = new Map([["product_root", 2], ["product_reference", 1], ["api_reference", 2], ["iam_reference", 2], ["python_reference", 1], ["java_reference", 1], ["supporting_page", 1]]); const usage = new Map(); let kept = 0; return scored.map((item) => { const cls = item.api_score.classification; const pathText = pathnameFor(item.url); const familyScore = Number(item.api_score.family_score || 0); const supportingAllowed = cls !== "supporting_page" || (item.final_score >= 90 && /\/docs\/(about-[^/]+|architecture-overview|developer-overview|concepts)$/.test(pathText) && !/\/(python|java)\/docs\/reference\//.test(pathText) && !/\/reference\/rest\/.+/.test(pathText)); const canKeep = item.keep && familyScore >= 0 && supportingAllowed && kept < maxKeptTotal && (usage.get(cls) || 0) < (budgets.get(cls) || 0); if (canKeep) { kept += 1; usage.set(cls, (usage.get(cls) || 0) + 1); } return { ...item, keep: canKeep }; }); }
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
function buildIndexEntryFromRanking(ranking, productDir) { const scored = Array.isArray(ranking.scored_urls) ? ranking.scored_urls : []; const kept = scored.filter((x) => x.keep); const classes = new Set(kept.map((x) => x.api_score?.classification || "")); return { product_name: ranking.product_name, product_slug: ranking.product_slug, ranked_url_count: scored.length, kept_url_count: kept.length, has_product_root: classes.has("product_root"), has_product_reference: classes.has("product_reference") || classes.has("api_reference") || classes.has("python_reference") || classes.has("java_reference"), has_iam_doc: classes.has("iam_reference"), top_urls: kept.slice(0, 10).map((x) => ({ url: x.url, final_score: x.final_score, classification: x.api_score?.classification || "" })), output_path: path.relative(process.cwd(), path.join(productDir, "ranking.json")).replace(/\\/g, "/") }; }
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
  const canonicalStep02Products = step02Products.filter((item) => !(item.product_slug === "index" && /step 02 product feature markdown/i.test(item.product_name)));
  const mergedProducts = [...canonicalStep02Products];
  const seenSlugs = new Set(canonicalStep02Products.map((item) => item.product_slug));
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
      const api_score = classifyWithOverrides(candidate, productName, discovered.profile, discovered.hints);
      return { ...candidate, api_score, product_fit_score: affinityScore(candidate, discovered.profile, discovered.hints), final_score: Math.round((candidate.deterministic_score * 0.85) + (candidate.consistency_score * 0.15)), keep: api_score.keep };
    });
    const tail = discovered.candidates.slice(maxCandidatesForApi).map((candidate) => {
      const api_score = classifyWithOverrides(candidate, productName, discovered.profile, discovered.hints);
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
