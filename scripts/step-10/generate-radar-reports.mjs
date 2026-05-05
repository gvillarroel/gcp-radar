#!/usr/bin/env zx

import { access, mkdir, readFile, readdir, rm, writeFile } from "node:fs/promises";
import path from "node:path";

const schemaVersion = "step-10-radar-reports-v1";
const expectedStep09SchemaVersion = "step-09-artifact-promotion-v1";
const allowedIamMappingStatuses = new Set([
  "explicit",
  "derived_from_permission_prefix",
  "unknown",
]);
const artifactsRoot = path.resolve(process.env.GCP_RADAR_STEP10_ARTIFACTS_ROOT || "artifacts");
const radarRoot = path.resolve(process.env.GCP_RADAR_STEP10_RADAR_ROOT || "radar");
const outputRoot = path.resolve(process.env.GCP_RADAR_STEP10_OUTPUT_ROOT || "data/step-10/current");
const step08Root = path.resolve(process.env.GCP_RADAR_STEP10_STEP08_ROOT || "data/step-08/current");
const officialGoogleHosts = [
  "cloud.google.com",
  "docs.cloud.google.com",
  "developers.google.com",
  "firebase.google.com",
  "workspace.google.com",
  "googleapis.dev",
];

function compareStrings(left, right) {
  return String(left || "").localeCompare(String(right || ""));
}

async function exists(target) {
  try {
    await access(target);
    return true;
  } catch {
    return false;
  }
}

async function readJson(filePath, fallback = null) {
  if (!(await exists(filePath))) {
    return fallback;
  }
  return JSON.parse(await readFile(filePath, "utf8"));
}

async function readText(filePath, fallback = "") {
  if (!(await exists(filePath))) {
    return fallback;
  }
  return readFile(filePath, "utf8");
}

async function writeJson(filePath, value) {
  await mkdir(path.dirname(filePath), { recursive: true });
  await writeFile(filePath, `${JSON.stringify(value, null, 2)}\n`);
}

function printIndexSummary(index) {
  if (process.env.GCP_RADAR_PRINT_FULL_INDEX === "1") {
    console.log(JSON.stringify(index, null, 2));
    return;
  }

  console.log(JSON.stringify({
    schema_version: index.schema_version,
    generated_at: index.generated_at,
    artifacts_root: index.artifacts_root,
    radar_root: index.radar_root,
    product_count: index.product_count,
    feature_count: index.feature_count,
    fixed_report_count: index.fixed_report_count,
    product_report_count: index.product_report_count,
    report_count: index.report_count,
    index_json: path.posix.join(relativeToCwd(outputRoot), "index.json"),
  }, null, 2));
}

function relativeToCwd(target) {
  return path.relative(process.cwd(), target).replace(/\\/g, "/");
}

function relativeMarkdownPath(fromDir, target) {
  const relativePath = path.relative(fromDir, target).replace(/\\/g, "/");
  if (!relativePath || relativePath.startsWith(".") || relativePath.startsWith("/")) {
    return relativePath || ".";
  }
  return `./${relativePath}`;
}

function markdownTableRow(values) {
  return `| ${values.map((value) => String(value ?? "").replace(/\n/g, " ").replace(/\|/g, "\\|")).join(" | ")} |`;
}

function markdownLink(label, target) {
  const escapedLabel = String(label || "").replace(/([\\[\]])/g, "\\$1");
  return `[${escapedLabel}](${target})`;
}

function escapeMarkdownLinkLabel(label) {
  return String(label || "").replace(/([\\[\]])/g, "\\$1");
}

function normalizeForCompare(value) {
  if (Array.isArray(value)) {
    return value.map(normalizeForCompare);
  }
  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value)
        .sort(([left], [right]) => left.localeCompare(right))
        .map(([key, nested]) => [key, normalizeForCompare(nested)])
    );
  }
  return value;
}

function jsonEquals(left, right) {
  return JSON.stringify(normalizeForCompare(left)) === JSON.stringify(normalizeForCompare(right));
}

function isOfficialGoogleUrl(url) {
  try {
    const parsedUrl = new URL(url);
    if (!["http:", "https:"].includes(parsedUrl.protocol)) {
      return false;
    }
    const host = parsedUrl.hostname.toLowerCase();
    return officialGoogleHosts.some((allowed) => host === allowed || host.endsWith(`.${allowed}`));
  } catch {
    return false;
  }
}

function isIsoTimestamp(value) {
  if (typeof value !== "string" || value.trim() === "") {
    return false;
  }
  const parsed = new Date(value);
  return !Number.isNaN(parsed.valueOf()) && parsed.toISOString() === value;
}

function validateGeneratedAt(record, label, errors) {
  if (!record?.generated_at) {
    errors.push(`${label} generated_at is missing`);
  } else if (!isIsoTimestamp(record.generated_at)) {
    errors.push(`${label} generated_at is not a valid ISO 8601 timestamp: ${record.generated_at}`);
  }
}

function validatePromotionGeneratedAtMatch(record, promotion, label, productSlug, errors) {
  if (!record?.generated_at || !promotion?.generated_at) {
    return;
  }
  if (record.generated_at !== promotion.generated_at) {
    errors.push(`${label} generated_at mismatch for ${productSlug}: expected ${promotion.generated_at}, got ${record.generated_at}`);
  }
}

function collectNonOfficialUrls(urls) {
  return [...new Set(urls || [])]
    .filter((url) => !isOfficialGoogleUrl(url));
}

function collectExternalMarkdownUrls(markdown) {
  const links = new Set();
  const linkPattern = /\[(?:\\.|[^\]\\])*\]\(([^)]+)\)/g;
  const bareUrlPattern = /https?:\/\/[^\s<>)"']+/g;

  for (const match of String(markdown || "").matchAll(linkPattern)) {
    const rawLink = String(match[1] || "").trim();
    if (/^https?:\/\//i.test(rawLink)) {
      links.add(rawLink);
    }
  }
  for (const match of String(markdown || "").matchAll(bareUrlPattern)) {
    links.add(String(match[0] || "").trim().replace(/[.,;:]+$/g, ""));
  }

  return [...links].sort(compareStrings);
}

function collectMarkdownLinks(markdown) {
  const linkPattern = /\[(?:\\.|[^\]\\])*\]\(([^)]+)\)/g;
  return [...String(markdown || "").matchAll(linkPattern)]
    .map((match) => String(match[1] || "").trim().replace(/\\/g, "/").split("#")[0])
    .filter(Boolean)
    .sort(compareStrings);
}

function collectSecurityCapabilityEvidenceLinks(capabilities) {
  return [...new Set((capabilities || []).flatMap((capability) => capability.evidence_links || []))];
}

function collectSupportingPageUrls(featureCard) {
  return [...new Set((featureCard?.evidence?.supporting_pages || [])
    .map((page) => page?.url)
    .filter(Boolean))];
}

function collectUnacceptedWarningRules(feature, promotion) {
  const acceptedWarningRules = new Set(Array.isArray(promotion?.accepted_warning_rules) ? promotion.accepted_warning_rules : []);
  return [...new Set((feature?.validation?.findings || [])
    .filter((finding) => finding?.severity === "warn")
    .map((finding) => finding.rule)
    .filter((rule) => rule && !acceptedWarningRules.has(rule)))]
    .sort(compareStrings);
}

function validatePromotedFeatureEligibility(productSlug, featureSlug, card, promotion, errors) {
  const validation = card?.validation || {};
  const sourceLinks = card?.evidence?.source_links || [];
  const iamStatus = card?.iam?.iam_mapping_status;

  if (!validation.step07_pass) {
    errors.push(`Promoted feature no longer satisfies Step 09 eligibility for ${productSlug}/${featureSlug}: Step 07 did not pass`);
  }
  if (Number(validation.fail_count || 0) > 0) {
    errors.push(`Promoted feature no longer satisfies Step 09 eligibility for ${productSlug}/${featureSlug}: fail_count=${validation.fail_count}`);
  }
  if (!String(card?.extended_definition || card?.summary || "").trim()) {
    errors.push(`Promoted feature no longer satisfies Step 09 eligibility for ${productSlug}/${featureSlug}: missing technical summary`);
  }
  if (sourceLinks.length === 0) {
    errors.push(`Promoted feature no longer satisfies Step 09 eligibility for ${productSlug}/${featureSlug}: missing source links`);
  }
  if (!allowedIamMappingStatuses.has(iamStatus)) {
    errors.push(`Promoted feature has invalid IAM mapping status for ${productSlug}/${featureSlug}: expected one of ${[...allowedIamMappingStatuses].sort().join(", ")}, got ${iamStatus || "missing"}`);
  }
  const unacceptedWarningRules = collectUnacceptedWarningRules(card, promotion);
  if (unacceptedWarningRules.length > 0) {
    errors.push(`Promoted feature no longer satisfies Step 09 eligibility for ${productSlug}/${featureSlug}: unaccepted warning rules ${unacceptedWarningRules.join(", ")}`);
  }
}

function validateFeatureReadmeAgainstCard(productSlug, featureSlug, readmePath, readme, card, errors) {
  const identityLines = [
    `Product: ${card.product_name || ""}`,
    `Feature slug: \`${card.feature_slug || ""}\``,
    `Coverage: \`${card.coverage_status || "unknown"}\``,
  ];
  for (const line of identityLines) {
    if (!readme.includes(line)) {
      errors.push(`Promoted feature README identity mismatch for ${productSlug}/${featureSlug}: ${relativeToCwd(readmePath)} missing ${line}`);
    }
  }

  const lifecycle = card.lifecycle || {};
  const lifecycleLines = [
    `- Latest feature date: ${lifecycle.latest_feature_date || "unknown"}`,
    `- Deprecation date: ${lifecycle.deprecation_date || "none recorded"}`,
    `- Status: ${lifecycle.status}`,
  ];
  for (const line of lifecycleLines) {
    if (!readme.includes(line)) {
      errors.push(`Promoted feature README lifecycle mismatch for ${productSlug}/${featureSlug}: ${relativeToCwd(readmePath)} missing ${line}`);
    }
  }

  const officialSourceLinks = (card.evidence?.source_links || []).filter(isOfficialGoogleUrl);
  if (officialSourceLinks.length > 0 && !officialSourceLinks.some((link) => readme.includes(link))) {
    errors.push(`Promoted feature README missing official evidence link for ${productSlug}/${featureSlug}: ${relativeToCwd(readmePath)}`);
  }

  const iam = card.iam || {};
  const iamStatus = iam.iam_mapping_status || "unknown";
  const iamStatusLine = `IAM mapping: \`${iamStatus}\``;
  if (!readme.includes(iamStatusLine)) {
    errors.push(`Promoted feature README IAM status mismatch for ${productSlug}/${featureSlug}: ${relativeToCwd(readmePath)} missing ${iamStatusLine}`);
  }

  if (iamStatus === "explicit") {
    for (const role of iam.explicit_roles || []) {
      if (!readme.includes(`\`${role}\``)) {
        errors.push(`Promoted feature README missing explicit IAM role for ${productSlug}/${featureSlug}: ${role}`);
      }
    }
    for (const permission of iam.explicit_permissions || []) {
      const permissionName = permission?.permission;
      if (permissionName && !readme.includes(`\`${permissionName}\``)) {
        errors.push(`Promoted feature README missing explicit IAM permission for ${productSlug}/${featureSlug}: ${permissionName}`);
      }
    }
  } else if (iamStatus === "derived_from_permission_prefix") {
    const qualifier = "No explicit feature-level IAM statement was found.";
    if (!readme.includes(qualifier)) {
      errors.push(`Promoted feature README missing derived IAM qualifier for ${productSlug}/${featureSlug}: ${relativeToCwd(readmePath)}`);
    }
    for (const permission of (iam.derived_permissions || []).slice(0, 20)) {
      const permissionName = permission?.permission;
      if (permissionName && !readme.includes(`\`${permissionName}\``)) {
        errors.push(`Promoted feature README missing derived IAM permission for ${productSlug}/${featureSlug}: ${permissionName}`);
      }
    }
  } else {
    const qualifier = "No defensible IAM mapping was found in the current evidence.";
    if (!readme.includes(qualifier)) {
      errors.push(`Promoted feature README missing unknown IAM qualifier for ${productSlug}/${featureSlug}: ${relativeToCwd(readmePath)}`);
    }
  }

  const securityCapabilities = Array.isArray(card.security_capabilities) ? card.security_capabilities : [];
  if (securityCapabilities.length === 0) {
    const qualifier = "No security capability was identified from the current evidence.";
    if (!readme.includes(qualifier)) {
      errors.push(`Promoted feature README missing no-security qualifier for ${productSlug}/${featureSlug}: ${relativeToCwd(readmePath)}`);
    }
  }
  for (const capability of securityCapabilities) {
    if (capability?.capability && !readme.includes(capability.capability)) {
      errors.push(`Promoted feature README missing security capability for ${productSlug}/${featureSlug}: ${capability.capability}`);
    }
    for (const link of (capability?.evidence_links || []).filter(isOfficialGoogleUrl)) {
      if (!readme.includes(link)) {
        errors.push(`Promoted feature README missing security evidence link for ${productSlug}/${featureSlug}: ${link}`);
      }
    }
  }
}

function validatePromotionFeatureLists(productSlug, promotion, errors) {
  for (const field of ["promoted_features", "skipped_features"]) {
    if (!Array.isArray(promotion[field])) {
      const actualType = promotion[field] === null ? "null" : typeof promotion[field];
      errors.push(`Promotion manifest ${field} must be an array for ${productSlug}: got ${actualType}`);
      continue;
    }
    let previousFeatureSlug = "";
    for (const feature of promotion[field]) {
      const featureSlug = String(feature?.feature_slug || "");
      if (!featureSlug) {
        continue;
      }
      if (previousFeatureSlug && compareStrings(previousFeatureSlug, featureSlug) > 0) {
        errors.push(`Promotion manifest ${field} must be sorted by feature_slug for ${productSlug}: ${previousFeatureSlug} before ${featureSlug}`);
      }
      previousFeatureSlug = featureSlug;
    }
  }
}

function validatePromotionFeatureEntries(productSlug, promotion, errors) {
  for (const field of ["promoted_features", "skipped_features"]) {
    if (!Array.isArray(promotion[field])) {
      continue;
    }
    promotion[field].forEach((feature, index) => {
      if (!String(feature?.feature_slug || "").trim()) {
        errors.push(`Promotion manifest ${field} entry is missing feature_slug for ${productSlug} at index ${index}`);
      }
    });
  }
}

function validatePromotionWarningPolicy(productSlug, promotion, errors) {
  if (!Array.isArray(promotion.accepted_warning_rules)) {
    const actualType = promotion.accepted_warning_rules === null ? "null" : typeof promotion.accepted_warning_rules;
    errors.push(`Promotion manifest accepted_warning_rules must be an array for ${productSlug}: got ${actualType}`);
    return;
  }

  const seen = new Set();
  let previousRule = "";
  for (const [index, value] of promotion.accepted_warning_rules.entries()) {
    if (typeof value !== "string" || !value.trim()) {
      const actualType = value === null ? "null" : typeof value;
      errors.push(`Promotion manifest accepted_warning_rules entry must be a non-empty string for ${productSlug} at index ${index}: got ${actualType}`);
      continue;
    }
    const rule = value;
    if (seen.has(rule)) {
      errors.push(`Promotion manifest accepted_warning_rules has duplicate rule for ${productSlug}: ${rule}`);
    }
    seen.add(rule);
    if (previousRule && compareStrings(previousRule, rule) > 0) {
      errors.push(`Promotion manifest accepted_warning_rules must be sorted for ${productSlug}: ${previousRule} before ${rule}`);
    }
    previousRule = rule;
  }
}

async function validatePromotionStaleFeatureCleanup(productSlug, promotion, errors) {
  if (!Array.isArray(promotion.stale_feature_artifact_dirs_removed)) {
    const actualType = promotion.stale_feature_artifact_dirs_removed === null ? "null" : typeof promotion.stale_feature_artifact_dirs_removed;
    errors.push(`Promotion manifest stale_feature_artifact_dirs_removed must be an array for ${productSlug}: got ${actualType}`);
    return;
  }

  const seen = new Set();
  let previousDir = "";
  for (const dirValue of promotion.stale_feature_artifact_dirs_removed) {
    const staleDir = String(dirValue || "").replace(/\\/g, "/");
    const expectedPrefix = `${relativeToCwd(path.join(artifactsRoot, productSlug))}/`;
    if (seen.has(staleDir)) {
      errors.push(`Promotion manifest stale_feature_artifact_dirs_removed has duplicate path for ${productSlug}: ${staleDir}`);
    }
    seen.add(staleDir);
    if (previousDir && compareStrings(previousDir, staleDir) > 0) {
      errors.push(`Promotion manifest stale_feature_artifact_dirs_removed must be sorted for ${productSlug}: ${previousDir} before ${staleDir}`);
    }
    previousDir = staleDir;
    if (!staleDir.startsWith(expectedPrefix) || staleDir.split("/").length !== 3) {
      errors.push(`Promotion manifest stale_feature_artifact_dirs_removed path mismatch for ${productSlug}: expected path under ${expectedPrefix}, got ${staleDir || "missing"}`);
      continue;
    }
    if (await exists(path.resolve(process.cwd(), staleDir))) {
      errors.push(`Promotion manifest stale_feature_artifact_dirs_removed path still exists for ${productSlug}: ${staleDir}`);
    }
  }
}

function formatRoles(roles, limit = 8) {
  return (roles || [])
    .slice(0, limit)
    .map((role) => `\`${role}\``)
    .join("<br>") || "none";
}

function formatPermissions(permissions, limit = 8) {
  return (permissions || [])
    .slice(0, limit)
    .map((permission) => `\`${permission.permission}\``)
    .join("<br>") || "none";
}

function formatSources(sources, limit = 3) {
  return (sources || [])
    .slice(0, limit)
    .map((url) => `[source](${url})`)
    .join("<br>") || "none";
}

async function listProductDirs() {
  if (!(await exists(artifactsRoot))) {
    return [];
  }
  const entries = await readdir(artifactsRoot, { withFileTypes: true });
  return entries
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort(compareStrings);
}

async function loadArtifacts() {
  const products = [];
  const errors = [];
  const serviceStep08Fields = [
    "card_type",
    "service_card_id",
    "service_name",
    "service_slug",
    "feature_count",
    "validation",
    "iam_status_counts",
    "related_permission_groups",
    "official_source_links",
    "security_capabilities",
    "security_capability_count",
    "lifecycle",
    "release_notes",
    "corpus",
  ];
  const featureStep08Fields = [
    "feature_name",
    "feature_slug",
    "summary",
    "extended_definition",
    "lifecycle",
    "coverage_status",
    "validation",
    "evidence",
    "iam",
    "security_capabilities",
  ];

  for (const productSlug of await listProductDirs()) {
    const productDir = path.join(artifactsRoot, productSlug);
    const promotionPath = path.join(productDir, "promotion.json");
    const promotion = await readJson(promotionPath, null);
    if (!promotion) {
      errors.push(`Missing promotion manifest for ${productSlug}: ${relativeToCwd(promotionPath)}`);
      continue;
    }
    const step08CardPath = path.join(step08Root, "products", productSlug, "card.json");
    const expectedSourceStep08Card = relativeToCwd(step08CardPath);
    const step08Card = await readJson(step08CardPath, null);
    if (promotion.schema_version !== expectedStep09SchemaVersion) {
      errors.push(`Promotion manifest schema_version mismatch for ${productSlug}: expected ${expectedStep09SchemaVersion}, got ${promotion.schema_version || "missing"}`);
    }
    validateGeneratedAt(promotion, `Promotion manifest for ${productSlug}`, errors);
    validatePromotionFeatureLists(productSlug, promotion, errors);
    validatePromotionFeatureEntries(productSlug, promotion, errors);
    validatePromotionWarningPolicy(productSlug, promotion, errors);
    await validatePromotionStaleFeatureCleanup(productSlug, promotion, errors);
    if (promotion.product_slug !== productSlug) {
      errors.push(`Promotion manifest product_slug mismatch for ${productSlug}: expected ${productSlug}, got ${promotion.product_slug || "missing"}`);
    }
    if (step08Card && promotion.product_name !== step08Card.product_name) {
      errors.push(`Promotion manifest product_name mismatch for ${productSlug}: expected ${step08Card.product_name}, got ${promotion.product_name || "missing"}`);
    }
    if (String(promotion.source_step08_card || "").replace(/\\/g, "/") !== expectedSourceStep08Card) {
      errors.push(`Promotion manifest source_step08_card mismatch for ${productSlug}: expected ${expectedSourceStep08Card}, got ${promotion.source_step08_card || "missing"}`);
    }
    if (!step08Card) {
      errors.push(`Missing Step 08 source card for ${productSlug}: ${expectedSourceStep08Card}`);
    }
    const expectedServiceCard = relativeToCwd(path.join(productDir, "card.json"));
    if (String(promotion.service_card || "").replace(/\\/g, "/") !== expectedServiceCard) {
      errors.push(`Promotion manifest service_card mismatch for ${productSlug}: expected ${expectedServiceCard}, got ${promotion.service_card || "missing"}`);
    }
    const productIndexPath = path.join(productDir, "index.md");
    if (!(await exists(productIndexPath))) {
      errors.push(`Missing promoted product index for ${productSlug}: ${relativeToCwd(productIndexPath)}`);
    } else {
      const productIndexMarkdown = await readText(productIndexPath);
      for (const url of collectNonOfficialUrls(collectExternalMarkdownUrls(productIndexMarkdown))) {
        errors.push(`Promoted product index has non-official external link for ${productSlug}: ${relativeToCwd(productIndexPath)} -> ${url}`);
      }
      const markdownLinks = collectMarkdownLinks(productIndexMarkdown);
      const expectedFeatureLinks = new Set((Array.isArray(promotion.promoted_features) ? promotion.promoted_features : [])
        .map((feature) => feature?.feature_slug)
        .filter(Boolean)
        .map((featureSlug) => `./${featureSlug}/README.md`));
      const actualFeatureLinks = new Set(markdownLinks.filter((link) => link.startsWith("./") && link.endsWith("/README.md")));
      const featureLinkCounts = new Map();
      let serviceCardLinkCount = 0;
      for (const link of markdownLinks) {
        if (link.startsWith("./") && link.endsWith("/README.md")) {
          featureLinkCounts.set(link, (featureLinkCounts.get(link) || 0) + 1);
        }
        if (link === "./card.json") {
          serviceCardLinkCount += 1;
        }
      }
      for (const link of expectedFeatureLinks) {
        if (!actualFeatureLinks.has(link)) {
          errors.push(`Promoted product index is missing promoted feature link for ${productSlug}: ${relativeToCwd(productIndexPath)} -> ${link}`);
        }
      }
      for (const link of actualFeatureLinks) {
        if (!expectedFeatureLinks.has(link)) {
          errors.push(`Promoted product index has stale feature link for ${productSlug}: ${relativeToCwd(productIndexPath)} -> ${link}`);
        }
      }
      if (!markdownLinks.includes("./card.json")) {
        errors.push(`Promoted product index is missing service card link for ${productSlug}: ${relativeToCwd(productIndexPath)} -> ./card.json`);
      }
      for (const [link, count] of featureLinkCounts) {
        if (count > 1) {
          errors.push(`Promoted product index has duplicate feature link for ${productSlug}: ${relativeToCwd(productIndexPath)} -> ${link} (${count} times)`);
        }
      }
      if (serviceCardLinkCount > 1) {
        errors.push(`Promoted product index has duplicate service card link for ${productSlug}: ${relativeToCwd(productIndexPath)} -> ./card.json (${serviceCardLinkCount} times)`);
      }
      for (const link of markdownLinks.filter((link) => link.startsWith("./") && link.endsWith("/card.json") && link !== "./card.json")) {
        errors.push(`Promoted product index has stale service card link for ${productSlug}: ${relativeToCwd(productIndexPath)} -> ${link}`);
      }
      const expectedProductIndexLines = [
        `# ${promotion.product_name || productSlug}`,
        "Service card: [card.json](./card.json)",
        `Generated from Step 08 card: \`${expectedSourceStep08Card}\``,
        `- Promoted features: ${promotion.promoted_feature_count}`,
        `- Step 07 product status: ${step08Card?.validation?.product_status || "unknown"}`,
        `- Corpus health: ${step08Card?.corpus?.health_status || "unknown"}`,
        `- Latest feature date: ${step08Card?.service_card?.lifecycle?.latest_feature_date || "unknown"}`,
        `- Official source links: ${step08Card?.service_card?.official_source_links?.length || 0}`,
      ];
      for (const expectedLine of expectedProductIndexLines) {
        if (!productIndexMarkdown.includes(expectedLine)) {
          errors.push(`Promoted product index summary mismatch for ${productSlug}: ${relativeToCwd(productIndexPath)} missing ${expectedLine}`);
        }
      }
      for (const url of step08Card?.service_card?.official_source_links || []) {
        const expectedLine = `- ${markdownLink(url, url)}`;
        if (!productIndexMarkdown.includes(expectedLine)) {
          errors.push(`Promoted product index service evidence mismatch for ${productSlug}: ${relativeToCwd(productIndexPath)} missing ${expectedLine}`);
        }
      }
      for (const feature of Array.isArray(promotion.promoted_features) ? promotion.promoted_features : []) {
        const featureSlug = feature?.feature_slug;
        if (!featureSlug) {
          continue;
        }
        const expectedLine = `- [${escapeMarkdownLinkLabel(feature.feature_name || featureSlug)}](./${featureSlug}/README.md)`;
        if (!productIndexMarkdown.includes(expectedLine)) {
          errors.push(`Promoted product index feature label mismatch for ${productSlug}/${featureSlug}: ${relativeToCwd(productIndexPath)} missing ${expectedLine}`);
        }
      }
    }
    const serviceCardPath = path.join(productDir, "card.json");
    const serviceCard = await readJson(serviceCardPath, null);
    if (!serviceCard) {
      errors.push(`Missing promoted service card for ${productSlug}: ${relativeToCwd(serviceCardPath)}`);
    } else {
      if (serviceCard.schema_version !== expectedStep09SchemaVersion) {
        errors.push(`Promoted service card schema_version mismatch for ${productSlug}: expected ${expectedStep09SchemaVersion}, got ${serviceCard.schema_version || "missing"}`);
      }
      validateGeneratedAt(serviceCard, `Promoted service card for ${productSlug}`, errors);
      validatePromotionGeneratedAtMatch(serviceCard, promotion, "Promoted service card", productSlug, errors);
      if (serviceCard.product_slug !== productSlug) {
        errors.push(`Promoted service card product_slug mismatch for ${productSlug}: expected ${productSlug}, got ${serviceCard.product_slug || "missing"}`);
      }
      if (serviceCard.service_slug !== productSlug) {
        errors.push(`Promoted service card service_slug mismatch for ${productSlug}: expected ${productSlug}, got ${serviceCard.service_slug || "missing"}`);
      }
      if (step08Card && serviceCard.product_name !== step08Card.product_name) {
        errors.push(`Promoted service card product_name mismatch for ${productSlug}: expected ${step08Card.product_name}, got ${serviceCard.product_name || "missing"}`);
      }
      if (String(serviceCard.source_step08_card || "").replace(/\\/g, "/") !== expectedSourceStep08Card) {
        errors.push(`Promoted service card source_step08_card mismatch for ${productSlug}: expected ${expectedSourceStep08Card}, got ${serviceCard.source_step08_card || "missing"}`);
      }
      if (step08Card?.service_card) {
        for (const field of serviceStep08Fields) {
          if (!jsonEquals(serviceCard[field], step08Card.service_card[field])) {
            errors.push(`Promoted service card Step 08 payload mismatch for ${productSlug}: field ${field}`);
          }
        }
      }
      for (const url of collectNonOfficialUrls(serviceCard.official_source_links || [])) {
        errors.push(`Promoted service card has non-official source link for ${productSlug}: ${url}`);
      }
      for (const url of collectNonOfficialUrls(collectSecurityCapabilityEvidenceLinks(serviceCard.security_capabilities))) {
        errors.push(`Promoted service card has non-official security evidence link for ${productSlug}: ${url}`);
      }
    }
    const features = [];
    const promotedFeatures = (Array.isArray(promotion.promoted_features) ? [...promotion.promoted_features] : [])
      .filter((feature) => feature?.feature_slug)
      .sort((left, right) => compareStrings(left.feature_slug, right.feature_slug));
    if (Number(promotion.promoted_feature_count || 0) !== promotedFeatures.length) {
      errors.push(`Promotion manifest promoted_feature_count mismatch for ${productSlug}: expected ${promotedFeatures.length}, got ${promotion.promoted_feature_count}`);
    }
    const seenFeatureSlugs = new Set();
    const step08Features = new Map((step08Card?.features || []).map((feature) => [feature.feature_slug, feature]));
    for (const feature of promotedFeatures) {
      if (seenFeatureSlugs.has(feature.feature_slug)) {
        errors.push(`Duplicate promoted feature slug for ${productSlug}: ${feature.feature_slug}`);
      }
      seenFeatureSlugs.add(feature.feature_slug);
      const step08Feature = step08Features.get(feature.feature_slug);
      if (!step08Feature) {
        errors.push(`Promotion manifest promoted feature missing from Step 08 card for ${productSlug}/${feature.feature_slug}`);
      } else if (feature.feature_name !== step08Feature.feature_name) {
        errors.push(`Promotion manifest feature_name mismatch for ${productSlug}/${feature.feature_slug}: expected ${step08Feature.feature_name}, got ${feature.feature_name || "missing"}`);
      }
      const expectedFeatureReadme = relativeToCwd(path.join(productDir, feature.feature_slug, "README.md"));
      if (String(feature.artifact_readme || "").replace(/\\/g, "/") !== expectedFeatureReadme) {
        errors.push(`Promotion manifest artifact_readme mismatch for ${productSlug}/${feature.feature_slug}: expected ${expectedFeatureReadme}, got ${feature.artifact_readme || "missing"}`);
      }
      const expectedFeatureCard = relativeToCwd(path.join(productDir, feature.feature_slug, "card.json"));
      if (String(feature.artifact_card || "").replace(/\\/g, "/") !== expectedFeatureCard) {
        errors.push(`Promotion manifest artifact_card mismatch for ${productSlug}/${feature.feature_slug}: expected ${expectedFeatureCard}, got ${feature.artifact_card || "missing"}`);
      }
      const featureReadmePath = path.join(productDir, feature.feature_slug, "README.md");
      let featureReadmeMarkdown = null;
      if (!(await exists(featureReadmePath))) {
        errors.push(`Missing promoted feature README for ${productSlug}/${feature.feature_slug}: ${relativeToCwd(featureReadmePath)}`);
      } else {
        featureReadmeMarkdown = await readText(featureReadmePath);
        for (const url of collectNonOfficialUrls(collectExternalMarkdownUrls(featureReadmeMarkdown))) {
          errors.push(`Promoted feature README has non-official external link for ${productSlug}/${feature.feature_slug}: ${relativeToCwd(featureReadmePath)} -> ${url}`);
        }
      }
      const featureCardPath = path.join(productDir, feature.feature_slug, "card.json");
      const card = await readJson(featureCardPath, null);
      if (card) {
        if (card.schema_version !== expectedStep09SchemaVersion) {
          errors.push(`Promoted feature card schema_version mismatch for ${productSlug}/${feature.feature_slug}: expected ${expectedStep09SchemaVersion}, got ${card.schema_version || "missing"}`);
        }
        validateGeneratedAt(card, `Promoted feature card for ${productSlug}/${feature.feature_slug}`, errors);
        validatePromotionGeneratedAtMatch(card, promotion, "Promoted feature card", `${productSlug}/${feature.feature_slug}`, errors);
        if (card.product_slug !== productSlug) {
          errors.push(`Promoted feature card product_slug mismatch for ${productSlug}/${feature.feature_slug}: expected ${productSlug}, got ${card.product_slug}`);
        }
        if (card.feature_slug !== feature.feature_slug) {
          errors.push(`Promoted feature card feature_slug mismatch for ${productSlug}/${feature.feature_slug}: expected ${feature.feature_slug}, got ${card.feature_slug}`);
        }
        if (card.feature_name !== feature.feature_name) {
          errors.push(`Promoted feature card feature_name mismatch for ${productSlug}/${feature.feature_slug}: expected ${feature.feature_name || "missing"}, got ${card.feature_name || "missing"}`);
        }
        if (String(card.source_step08_card || "").replace(/\\/g, "/") !== expectedSourceStep08Card) {
          errors.push(`Promoted feature card source_step08_card mismatch for ${productSlug}/${feature.feature_slug}: expected ${expectedSourceStep08Card}, got ${card.source_step08_card || "missing"}`);
        }
        if (step08Feature) {
          for (const field of featureStep08Fields) {
            if (!jsonEquals(card[field], step08Feature[field])) {
              errors.push(`Promoted feature card Step 08 payload mismatch for ${productSlug}/${feature.feature_slug}: field ${field}`);
            }
          }
        }
        for (const url of collectNonOfficialUrls(card.evidence?.source_links || [])) {
          errors.push(`Promoted feature card has non-official source link for ${productSlug}/${feature.feature_slug}: ${url}`);
        }
        for (const url of collectNonOfficialUrls(collectSupportingPageUrls(card))) {
          errors.push(`Promoted feature card has non-official supporting page link for ${productSlug}/${feature.feature_slug}: ${url}`);
        }
        for (const url of collectNonOfficialUrls(collectSecurityCapabilityEvidenceLinks(card.security_capabilities))) {
          errors.push(`Promoted feature card has non-official security evidence link for ${productSlug}/${feature.feature_slug}: ${url}`);
        }
        validatePromotedFeatureEligibility(productSlug, feature.feature_slug, card, promotion, errors);
        if (featureReadmeMarkdown !== null) {
          validateFeatureReadmeAgainstCard(productSlug, feature.feature_slug, featureReadmePath, featureReadmeMarkdown, card, errors);
        }
        features.push(card);
      } else {
        errors.push(`Missing promoted feature card for ${productSlug}/${feature.feature_slug}: ${relativeToCwd(featureCardPath)}`);
      }
    }
    for (const entry of await readdir(productDir, { withFileTypes: true })) {
      if (entry.isDirectory() && !seenFeatureSlugs.has(entry.name)) {
        errors.push(`Unpromoted feature artifact directory for ${productSlug}: ${relativeToCwd(path.join(productDir, entry.name))}`);
      }
    }
    const skippedFeatures = (Array.isArray(promotion.skipped_features) ? [...promotion.skipped_features] : [])
      .filter((feature) => feature?.feature_slug)
      .sort((left, right) => compareStrings(left.feature_slug, right.feature_slug));
    if (Number(promotion.skipped_feature_count || 0) !== skippedFeatures.length) {
      errors.push(`Promotion manifest skipped_feature_count mismatch for ${productSlug}: expected ${skippedFeatures.length}, got ${promotion.skipped_feature_count}`);
    }
    const seenSkippedFeatureSlugs = new Set();
    for (const feature of skippedFeatures) {
      if (seenSkippedFeatureSlugs.has(feature.feature_slug)) {
        errors.push(`Duplicate skipped feature slug for ${productSlug}: ${feature.feature_slug}`);
      }
      seenSkippedFeatureSlugs.add(feature.feature_slug);
      if (seenFeatureSlugs.has(feature.feature_slug)) {
        errors.push(`Feature listed as both promoted and skipped for ${productSlug}: ${feature.feature_slug}`);
      }
      const step08Feature = step08Features.get(feature.feature_slug);
      if (step08Card && !step08Feature) {
        errors.push(`Promotion manifest skipped feature missing from Step 08 card for ${productSlug}/${feature.feature_slug}`);
      } else if (step08Feature && feature.feature_name !== step08Feature.feature_name) {
        errors.push(`Promotion manifest skipped feature_name mismatch for ${productSlug}/${feature.feature_slug}: expected ${step08Feature.feature_name}, got ${feature.feature_name || "missing"}`);
      }
    }
    if (step08Card) {
      const dispositionFeatureSlugs = new Set([...seenFeatureSlugs, ...seenSkippedFeatureSlugs]);
      for (const featureSlug of step08Features.keys()) {
        if (!dispositionFeatureSlugs.has(featureSlug)) {
          errors.push(`Promotion manifest missing Step 08 feature disposition for ${productSlug}/${featureSlug}`);
        }
      }
      for (const featureSlug of dispositionFeatureSlugs) {
        if (!step08Features.has(featureSlug)) {
          errors.push(`Promotion manifest contains unknown Step 08 feature disposition for ${productSlug}/${featureSlug}`);
        }
      }
    }
    products.push({
      product_name: promotion.product_name,
      product_slug: productSlug,
      promotion,
      service_card: serviceCard,
      features,
    });
  }

  if (errors.length > 0) {
    throw new Error(`Step 10 cannot render incomplete promoted artifacts:\n${errors.join("\n")}`);
  }

  return products;
}

function renderIndex(products, generatedAt) {
  const featureCount = products.reduce((sum, product) => sum + product.features.length, 0);
  const lines = [
    "# GCP Radar",
    "",
    `Generated at: \`${generatedAt}\``,
    "",
    "## Summary",
    "",
    `- Service cards: ${products.length}`,
    `- Promoted features: ${featureCount}`,
    `- Source of truth: \`${relativeToCwd(artifactsRoot)}/\``,
    "",
    "## Products",
    "",
    markdownTableRow(["Service", "Features", "Latest feature", "Report", "Service card"]),
    markdownTableRow(["---", "---", "---", "---", "---"]),
  ];

  for (const product of products) {
    lines.push(markdownTableRow([
      product.product_name,
      product.features.length,
      product.service_card?.lifecycle?.latest_feature_date || "unknown",
      `[report](./products/${product.product_slug}.md)`,
      markdownLink(`\`${product.product_slug}\``, relativeMarkdownPath(radarRoot, path.join(artifactsRoot, product.product_slug, "card.json"))),
    ]));
  }

  return `${lines.join("\n")}\n`;
}

function renderProductReport(product, generatedAt) {
  const reportDir = path.join(radarRoot, "products");
  const lines = [
    `# ${product.product_name}`,
    "",
    `Generated at: \`${generatedAt}\``,
    "",
    `Service card: [card.json](${relativeMarkdownPath(reportDir, path.join(artifactsRoot, product.product_slug, "card.json"))})`,
    "",
    `Artifacts index: [${product.product_slug}](${relativeMarkdownPath(reportDir, path.join(artifactsRoot, product.product_slug, "index.md"))})`,
    "",
    "## Summary",
    "",
    `- Promoted features: ${product.features.length}`,
    `- Skipped features during promotion: ${product.promotion.skipped_feature_count}`,
    `- Latest feature date: ${product.service_card?.lifecycle?.latest_feature_date || "unknown"}`,
    `- Service IAM status: ${JSON.stringify(product.service_card?.iam_status_counts || {})}`,
    "",
    "## Features",
    "",
    markdownTableRow(["Feature", "IAM", "Explicit roles", "Explicit permissions", "Derived roles", "Derived permissions", "Coverage", "Official sources"]),
    markdownTableRow(["---", "---", "---", "---", "---", "---", "---", "---"]),
  ];

  for (const feature of product.features.sort((left, right) => compareStrings(left.feature_name, right.feature_name))) {
    const sources = (feature.evidence?.source_links || []).slice(0, 3).map((url) => `[source](${url})`).join("<br>");
    const iam = feature.iam || {};
    lines.push(markdownTableRow([
      markdownLink(feature.feature_name, relativeMarkdownPath(reportDir, path.join(artifactsRoot, product.product_slug, feature.feature_slug, "README.md"))),
      iam.iam_mapping_status || "unknown",
      formatRoles(iam.explicit_roles),
      formatPermissions(iam.explicit_permissions),
      formatRoles(iam.derived_roles),
      formatPermissions(iam.derived_permissions),
      feature.coverage_status || "",
      sources,
    ]));
  }

  return `${lines.join("\n")}\n`;
}

function renderIamReport(products, generatedAt) {
  const reportDir = path.join(radarRoot, "iam");
  const lines = [
    "# IAM Coverage",
    "",
    `Generated at: \`${generatedAt}\``,
    "",
    "This report is generated from promoted artifacts only.",
    "",
    markdownTableRow(["Product", "Feature", "Mapping", "Explicit roles", "Explicit permissions", "Derived roles", "Derived permissions"]),
    markdownTableRow(["---", "---", "---", "---", "---", "---", "---"]),
  ];

  for (const product of products) {
    for (const feature of product.features) {
      const iam = feature.iam || {};
      lines.push(markdownTableRow([
        product.product_name,
        markdownLink(feature.feature_name, relativeMarkdownPath(reportDir, path.join(artifactsRoot, product.product_slug, feature.feature_slug, "README.md"))),
        iam.iam_mapping_status || "unknown",
        formatRoles(iam.explicit_roles),
        formatPermissions(iam.explicit_permissions),
        formatRoles(iam.derived_roles),
        formatPermissions(iam.derived_permissions),
      ]));
    }
  }

  return `${lines.join("\n")}\n`;
}

function renderSecurityReport(products, generatedAt) {
  const reportDir = path.join(radarRoot, "security");
  const lines = [
    "# Security Capabilities",
    "",
    `Generated at: \`${generatedAt}\``,
    "",
    "This report lists security-related signals detected in promoted feature artifacts.",
    "",
    markdownTableRow(["Product", "Feature", "Capabilities", "Evidence"]),
    markdownTableRow(["---", "---", "---", "---"]),
  ];

  for (const product of products) {
    for (const feature of product.features) {
      const capabilities = feature.security_capabilities || [];
      if (capabilities.length === 0) {
        continue;
      }
      const evidence = [...new Set(capabilities.flatMap((capability) => capability.evidence_links || []))]
        .slice(0, 4)
        .map((url) => `[source](${url})`)
        .join("<br>");
      lines.push(markdownTableRow([
        product.product_name,
        markdownLink(feature.feature_name, relativeMarkdownPath(reportDir, path.join(artifactsRoot, product.product_slug, feature.feature_slug, "README.md"))),
        capabilities.map((capability) => capability.capability).join(", "),
        evidence,
      ]));
    }
  }

  return `${lines.join("\n")}\n`;
}

function renderCoverageReport(products, generatedAt) {
  const lines = [
    "# Coverage",
    "",
    `Generated at: \`${generatedAt}\``,
    "",
    markdownTableRow(["Product", "Slug", "Promoted", "Skipped", "Explicit IAM", "Derived IAM", "Unknown IAM"]),
    markdownTableRow(["---", "---", "---", "---", "---", "---", "---"]),
  ];

  for (const product of products) {
    const explicit = product.features.filter((feature) => feature.iam?.iam_mapping_status === "explicit").length;
    const derived = product.features.filter((feature) => feature.iam?.iam_mapping_status === "derived_from_permission_prefix").length;
    const unknown = product.features.filter((feature) => feature.iam?.iam_mapping_status === "unknown").length;
    lines.push(markdownTableRow([
      product.product_name,
      product.product_slug,
      product.features.length,
      product.promotion.skipped_feature_count,
      explicit,
      derived,
      unknown,
    ]));
  }

  return `${lines.join("\n")}\n`;
}

function renderServiceCardsReport(products, generatedAt) {
  const reportDir = path.join(radarRoot, "services");
  const lines = [
    "# Service Cards",
    "",
    `Generated at: \`${generatedAt}\``,
    "",
    "This report lists one promoted service card per product.",
    "",
    markdownTableRow(["Service", "Status", "Features", "Latest feature", "Explicit IAM", "Derived IAM", "Unknown IAM", "Official sources"]),
    markdownTableRow(["---", "---", "---", "---", "---", "---", "---", "---"]),
  ];

  for (const product of products) {
    const service = product.service_card || {};
    const iam = service.iam_status_counts || {};
    lines.push(markdownTableRow([
      markdownLink(product.product_name, relativeMarkdownPath(reportDir, path.join(artifactsRoot, product.product_slug, "card.json"))),
      service.validation?.product_status || product.promotion?.product_status || "unknown",
      service.feature_count || product.features.length,
      service.lifecycle?.latest_feature_date || "unknown",
      iam.explicit || 0,
      iam.derived_from_permission_prefix || 0,
      iam.unknown || 0,
      formatSources(service.official_source_links),
    ]));
  }

  return `${lines.join("\n")}\n`;
}

async function main() {
  const generatedAt = new Date().toISOString();
  const products = await loadArtifacts();
  await mkdir(path.join(radarRoot, "products"), { recursive: true });
  await mkdir(path.join(radarRoot, "iam"), { recursive: true });
  await mkdir(path.join(radarRoot, "security"), { recursive: true });
  await mkdir(path.join(radarRoot, "services"), { recursive: true });
  await mkdir(outputRoot, { recursive: true });

  await writeFile(path.join(radarRoot, "index.md"), renderIndex(products, generatedAt));
  const expectedProductReports = new Set(products.map((product) => `${product.product_slug}.md`));
  for (const entry of await readdir(path.join(radarRoot, "products"), { withFileTypes: true })) {
    if (entry.isFile() && entry.name.endsWith(".md") && !expectedProductReports.has(entry.name)) {
      await rm(path.join(radarRoot, "products", entry.name));
    }
  }
  for (const product of products) {
    await writeFile(path.join(radarRoot, "products", `${product.product_slug}.md`), renderProductReport(product, generatedAt));
  }
  await writeFile(path.join(radarRoot, "iam", "index.md"), renderIamReport(products, generatedAt));
  await writeFile(path.join(radarRoot, "security", "index.md"), renderSecurityReport(products, generatedAt));
  await writeFile(path.join(radarRoot, "services", "index.md"), renderServiceCardsReport(products, generatedAt));
  await writeFile(path.join(radarRoot, "coverage.md"), renderCoverageReport(products, generatedAt));

  const index = {
    schema_version: schemaVersion,
    generated_at: generatedAt,
    artifacts_root: relativeToCwd(artifactsRoot),
    radar_root: relativeToCwd(radarRoot),
    product_count: products.length,
    feature_count: products.reduce((sum, product) => sum + product.features.length, 0),
    fixed_report_count: 5,
    product_report_count: products.length,
    report_count: products.length + 5,
    reports: {
      index: relativeToCwd(path.join(radarRoot, "index.md")),
      iam: relativeToCwd(path.join(radarRoot, "iam", "index.md")),
      security: relativeToCwd(path.join(radarRoot, "security", "index.md")),
      services: relativeToCwd(path.join(radarRoot, "services", "index.md")),
      coverage: relativeToCwd(path.join(radarRoot, "coverage.md")),
      products: products.map((product) => relativeToCwd(path.join(radarRoot, "products", `${product.product_slug}.md`))),
    },
  };

  await writeJson(path.join(outputRoot, "index.json"), index);
  printIndexSummary(index);
}

await main();
