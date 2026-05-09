#!/usr/bin/env zx

import { access, readFile, readdir, writeFile, mkdir } from "node:fs/promises";
import { spawnSync } from "node:child_process";
import path from "node:path";

if (process.env.GCP_RADAR_VALIDATE_HEAP_REEXEC !== "1") {
  const hasExplicitHeapLimit = process.execArgv.some((arg) => arg.startsWith("--max-old-space-size"));
  if (!hasExplicitHeapLimit) {
    const result = spawnSync(process.execPath, [
      "--max-old-space-size=8192",
      ...process.argv.slice(1),
    ], {
      stdio: "inherit",
      env: {
        ...process.env,
        GCP_RADAR_VALIDATE_HEAP_REEXEC: "1",
      },
    });
    process.exit(result.status ?? 1);
  }
}

const artifactsRoot = path.resolve(process.env.GCP_RADAR_VALIDATE_ARTIFACTS_ROOT || "artifacts");
const radarRoot = path.resolve(process.env.GCP_RADAR_VALIDATE_RADAR_ROOT || "radar");
const step02Root = path.resolve(process.env.GCP_RADAR_VALIDATE_STEP02_ROOT || "data/step-02/current");
const step04Root = path.resolve(process.env.GCP_RADAR_VALIDATE_STEP04_ROOT || "data/step-04/current");
const step05Root = path.resolve(process.env.GCP_RADAR_VALIDATE_STEP05_ROOT || "data/step-05/current");
const step06Root = path.resolve(process.env.GCP_RADAR_VALIDATE_STEP06_ROOT || "data/step-06/current");
const step07Root = path.resolve(process.env.GCP_RADAR_VALIDATE_STEP07_ROOT || "data/step-07/current");
const step08Root = path.resolve(process.env.GCP_RADAR_VALIDATE_STEP08_ROOT || "data/step-08/current");
const step09Root = path.resolve(process.env.GCP_RADAR_VALIDATE_STEP09_ROOT || "data/step-09/current");
const step10Root = path.resolve(process.env.GCP_RADAR_VALIDATE_STEP10_ROOT || "data/step-10/current");
const outputFile = path.resolve(process.env.GCP_RADAR_VALIDATE_OUTPUT || "data/final-output-validation.json");
const expectedStep08SchemaVersion = "step-08-product-feature-cards-v1";
const expectedStep09SchemaVersion = "step-09-artifact-promotion-v1";
const expectedStep10SchemaVersion = "step-10-radar-reports-v1";
const allowedIamMappingStatuses = new Set([
  "explicit",
  "derived_from_permission_prefix",
  "unknown",
]);
const officialGoogleHosts = [
  "cloud.google.com",
  "docs.cloud.google.com",
  "developers.google.com",
  "firebase.google.com",
  "workspace.google.com",
  "googleapis.dev",
];
const existsCache = new Map();
const jsonCache = new Map();
const textCache = new Map();
const directoryCache = new Map();
const recursiveFilesCache = new Map();
const recursiveDirsCache = new Map();

async function exists(target) {
  const resolved = path.resolve(target);
  if (existsCache.has(resolved)) {
    return await existsCache.get(resolved);
  }
  const check = access(resolved)
    .then(() => true)
    .catch(() => false);
  existsCache.set(resolved, check);
  return await check;
}

async function readText(filePath, fallback = null) {
  const resolved = path.resolve(filePath);
  if (textCache.has(resolved)) {
    return await textCache.get(resolved);
  }
  const read = (async () => {
    if (!(await exists(resolved))) {
      return fallback;
    }
    return readFile(resolved, "utf8");
  })();
  textCache.set(resolved, read);
  return await read;
}

async function readJson(filePath, fallback = null) {
  const resolved = path.resolve(filePath);
  if (jsonCache.has(resolved)) {
    return await jsonCache.get(resolved);
  }
  const read = (async () => {
    if (!(await exists(resolved))) {
      return fallback;
    }
    return JSON.parse(await readFile(resolved, "utf8"));
  })();
  jsonCache.set(resolved, read);
  return await read;
}

async function validateRadarGeneratedAt(reportPath, reportText, rule) {
  const step10Index = await readJson(path.join(step10Root, "index.json"), null);
  if (!step10Index?.generated_at) {
    return [];
  }
  const expectedGeneratedAt = `Generated at: \`${step10Index.generated_at}\``;
  if (String(reportText || "").includes(expectedGeneratedAt)) {
    return [];
  }
  return [{
    severity: "error",
    rule,
    path: reportPath,
    expected: expectedGeneratedAt,
  }];
}

async function listDirs(directory) {
  const resolved = path.resolve(directory);
  if (directoryCache.has(resolved)) {
    return (await directoryCache.get(resolved)).dirs;
  }
  const read = (async () => {
    if (!(await exists(resolved))) {
      return { dirs: [], files: [] };
    }
    const entries = await readdir(resolved, { withFileTypes: true });
    return {
      dirs: entries
        .filter((entry) => entry.isDirectory())
        .map((entry) => entry.name)
        .sort((left, right) => left.localeCompare(right)),
      files: entries
        .filter((entry) => entry.isFile())
        .map((entry) => entry.name)
        .sort((left, right) => left.localeCompare(right)),
    };
  })();
  directoryCache.set(resolved, read);
  return (await read).dirs;
}

async function listFilesRecursive(directory) {
  const resolved = path.resolve(directory);
  if (recursiveFilesCache.has(resolved)) {
    return await recursiveFilesCache.get(resolved);
  }
  const read = (async () => {
    if (!(await exists(resolved))) {
      return [];
    }
    const entries = await readdir(resolved, { withFileTypes: true });
    const nestedFiles = await Promise.all(entries.map(async (entry) => {
      const target = path.join(resolved, entry.name);
      if (entry.isDirectory()) {
        return listFilesRecursive(target);
      }
      return [target];
    }));
    return nestedFiles.flat();
  })();
  recursiveFilesCache.set(resolved, read);
  return await read;
}

async function listDirsRecursive(directory) {
  const resolved = path.resolve(directory);
  if (recursiveDirsCache.has(resolved)) {
    return await recursiveDirsCache.get(resolved);
  }
  const read = (async () => {
    if (!(await exists(resolved))) {
      return [];
    }
    const entries = await readdir(resolved, { withFileTypes: true });
    const nestedDirs = await Promise.all(entries
      .filter((entry) => entry.isDirectory())
      .map(async (entry) => {
        const target = path.join(resolved, entry.name);
        return [target, ...await listDirsRecursive(target)];
      }));
    return nestedDirs.flat().sort((left, right) => left.localeCompare(right));
  })();
  recursiveDirsCache.set(resolved, read);
  return await read;
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

  return [...links].sort((left, right) => left.localeCompare(right));
}

function relativeToCwd(target) {
  return path.relative(process.cwd(), target).replace(/\\/g, "/") || ".";
}

function relativeMarkdownPath(fromDir, target) {
  const relativePath = path.relative(fromDir, target).replace(/\\/g, "/");
  if (!relativePath || relativePath.startsWith(".") || relativePath.startsWith("/")) {
    return relativePath || ".";
  }
  return `./${relativePath}`;
}

function linkResolvesUnder(link, fromDir, rootDir, suffix = "") {
  const normalizedLink = String(link || "").trim().replace(/\\/g, "/").split("#")[0];
  if (!normalizedLink || /^[a-z][a-z0-9+.-]*:/i.test(normalizedLink) || normalizedLink.startsWith("#")) {
    return false;
  }
  if (suffix && !normalizedLink.endsWith(suffix)) {
    return false;
  }
  const resolved = path.resolve(fromDir, decodeURIComponent(normalizedLink));
  const relativePath = path.relative(rootDir, resolved);
  return Boolean(relativePath) && !relativePath.startsWith("..") && !path.isAbsolute(relativePath);
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

function stringArray(value) {
  return Array.isArray(value) ? value.map((item) => String(item)) : [];
}

function isIsoTimestamp(value) {
  if (typeof value !== "string" || value.trim() === "") {
    return false;
  }
  const parsed = new Date(value);
  return !Number.isNaN(parsed.valueOf()) && parsed.toISOString() === value;
}

function validateGeneratedAtField(record, recordPath, rulePrefix, extra = {}) {
  if (!record?.generated_at) {
    return [{
      severity: "error",
      rule: `${rulePrefix}_generated_at_missing`,
      path: recordPath,
      ...extra,
    }];
  }
  if (!isIsoTimestamp(record.generated_at)) {
    return [{
      severity: "error",
      rule: `${rulePrefix}_generated_at_invalid`,
      path: recordPath,
      actual: record.generated_at,
      ...extra,
    }];
  }
  return [];
}

function validateGeneratedAtMatchesPromotion(record, promotion, recordPath, rule, extra = {}) {
  if (!record?.generated_at || !promotion?.generated_at) {
    return [];
  }
  if (record.generated_at === promotion.generated_at) {
    return [];
  }
  return [{
    severity: "error",
    rule,
    path: recordPath,
    expected: promotion.generated_at,
    actual: record.generated_at,
    ...extra,
  }];
}

function validateIamMappingStatus(record, recordPath, rule, extra = {}) {
  const status = record?.iam?.iam_mapping_status;
  if (allowedIamMappingStatuses.has(status)) {
    return [];
  }
  return [{
    severity: "error",
    rule,
    path: recordPath,
    expected_one_of: [...allowedIamMappingStatuses].sort(),
    actual: status || null,
    ...extra,
  }];
}

function validateGeneratedAtNotBefore(actualRecord, referenceRecord, recordPath, rule, extra = {}) {
  if (!isIsoTimestamp(actualRecord?.generated_at) || !isIsoTimestamp(referenceRecord?.generated_at)) {
    return [];
  }
  if (Date.parse(actualRecord.generated_at) >= Date.parse(referenceRecord.generated_at)) {
    return [];
  }
  return [{
    severity: "error",
    rule,
    path: recordPath,
    expected_not_before: referenceRecord.generated_at,
    actual: actualRecord.generated_at,
    ...extra,
  }];
}

function promotionFeatureList(promotion, field) {
  return Array.isArray(promotion?.[field]) ? promotion[field] : [];
}

function collectSecurityCapabilityEvidenceLinks(capabilities) {
  return [...new Set((capabilities || []).flatMap((capability) => capability?.evidence_links || []))];
}

function collectSupportingPageUrls(feature) {
  return [...new Set((feature?.evidence?.supporting_pages || [])
    .map((page) => page?.url)
    .filter(Boolean))];
}

function collectNonOfficialUrls(urls) {
  return [...new Set(urls || [])].filter((url) => !isOfficialGoogleUrl(url));
}

function validateCanonicalStringArray(values, recordPath, rulePrefix, extra = {}) {
  if (!Array.isArray(values)) {
    return [];
  }
  const findings = [];
  const seen = new Set();
  let previous = "";
  for (const [index, rawValue] of values.entries()) {
    const value = String(rawValue || "");
    if (seen.has(value)) {
      findings.push({
        severity: "error",
        rule: `${rulePrefix}_duplicate`,
        path: recordPath,
        index,
        value,
        ...extra,
      });
    }
    seen.add(value);
    if (previous && previous.localeCompare(value) > 0) {
      findings.push({
        severity: "error",
        rule: `${rulePrefix}_not_sorted`,
        path: recordPath,
        previous,
        value,
        ...extra,
      });
    }
    previous = value;
  }
  return findings;
}

function collectUnacceptedWarningRules(feature, acceptedWarningRules) {
  return [...new Set((feature?.validation?.findings || [])
    .filter((finding) => finding?.severity === "warn")
    .map((finding) => finding.rule)
    .filter((rule) => rule && !acceptedWarningRules.has(rule)))]
    .sort((left, right) => left.localeCompare(right));
}

function promotionDecisionForFeature(feature, acceptedWarningRules) {
  const sourceLinks = feature?.evidence?.source_links || [];
  const supportingPageUrls = collectSupportingPageUrls(feature);
  const securityEvidenceLinks = collectSecurityCapabilityEvidenceLinks(feature?.security_capabilities || []);
  const iamStatus = feature?.iam?.iam_mapping_status;

  if (!feature?.validation?.step07_pass) {
    return { promotable: false, reason: "step07_failure", blocking_warnings: [] };
  }
  if (Number(feature.validation.fail_count || 0) > 0) {
    return { promotable: false, reason: "feature_has_failures", blocking_warnings: [] };
  }
  if (!String(feature.extended_definition || feature.summary || "").trim()) {
    return { promotable: false, reason: "missing_summary", blocking_warnings: [] };
  }
  if (sourceLinks.length === 0) {
    return { promotable: false, reason: "missing_source_links", blocking_warnings: [] };
  }
  if (!sourceLinks.every(isOfficialGoogleUrl)) {
    return { promotable: false, reason: "non_official_source_link", blocking_warnings: [] };
  }
  if (collectNonOfficialUrls(supportingPageUrls).length > 0) {
    return { promotable: false, reason: "non_official_supporting_page_link", blocking_warnings: [] };
  }
  if (collectNonOfficialUrls(securityEvidenceLinks).length > 0) {
    return { promotable: false, reason: "non_official_security_evidence_link", blocking_warnings: [] };
  }
  if (!allowedIamMappingStatuses.has(iamStatus)) {
    return { promotable: false, reason: "invalid_iam_mapping_status", blocking_warnings: [] };
  }

  const blockingWarnings = collectUnacceptedWarningRules(feature, acceptedWarningRules);
  if (blockingWarnings.length > 0) {
    return { promotable: false, reason: "blocking_warning", blocking_warnings: blockingWarnings };
  }

  return { promotable: true, reason: "promotable", blocking_warnings: [] };
}

function validatePromotionFeatureListOrdering(promotion, promotionPath, productSlug, field) {
  if (!Array.isArray(promotion?.[field])) {
    return [];
  }
  const findings = [];
  let previousFeatureSlug = "";
  for (const feature of promotion[field]) {
    const featureSlug = String(feature?.feature_slug || "");
    if (!featureSlug) {
      continue;
    }
    if (previousFeatureSlug && previousFeatureSlug.localeCompare(featureSlug) > 0) {
      findings.push({
        severity: "error",
        rule: `promotion_manifest_${field}_not_sorted`,
        path: promotionPath,
        product_slug: productSlug,
        previous_feature_slug: previousFeatureSlug,
        feature_slug: featureSlug,
      });
    }
    previousFeatureSlug = featureSlug;
  }
  return findings;
}

function validateAcceptedWarningRulesArray(rules, recordPath, rulePrefix, extra = {}) {
  if (!Array.isArray(rules)) {
    return [];
  }
  const findings = [];
  for (const [index, value] of rules.entries()) {
    if (typeof value !== "string" || !value.trim()) {
      findings.push({
        severity: "error",
        rule: `${rulePrefix}_accepted_warning_rule_invalid`,
        path: recordPath,
        index,
        actual_type: value === null ? "null" : typeof value,
        actual: typeof value === "string" ? value : null,
        ...extra,
      });
    }
  }
  return findings;
}

async function validatePromotionStaleFeatureCleanup(promotion, promotionPath, productSlug) {
  const findings = [];
  const staleDirs = promotion?.stale_feature_artifact_dirs_removed;
  if (!Array.isArray(staleDirs)) {
    findings.push({
      severity: "error",
      rule: "promotion_manifest_stale_feature_artifact_dirs_removed_not_array",
      path: promotionPath,
      product_slug: productSlug,
      actual_type: staleDirs === null ? "null" : typeof staleDirs,
    });
    return findings;
  }

  const seenStaleDirs = new Set();
  let previousStaleDir = "";
  for (const staleDirValue of staleDirs) {
    const staleDir = String(staleDirValue || "").replace(/\\/g, "/");
    const expectedPrefix = `${relativeToCwd(path.join(artifactsRoot, productSlug))}/`;
    if (seenStaleDirs.has(staleDir)) {
      findings.push({
        severity: "error",
        rule: "promotion_manifest_duplicate_stale_feature_artifact_dir",
        path: promotionPath,
        product_slug: productSlug,
        stale_feature_artifact_dir: staleDir,
      });
    }
    seenStaleDirs.add(staleDir);
    if (previousStaleDir && previousStaleDir.localeCompare(staleDir) > 0) {
      findings.push({
        severity: "error",
        rule: "promotion_manifest_stale_feature_artifact_dirs_removed_not_sorted",
        path: promotionPath,
        product_slug: productSlug,
        previous_stale_feature_artifact_dir: previousStaleDir,
        stale_feature_artifact_dir: staleDir,
      });
    }
    previousStaleDir = staleDir;
    if (!staleDir.startsWith(expectedPrefix) || staleDir.split("/").length !== 3) {
      findings.push({
        severity: "error",
        rule: "promotion_manifest_stale_feature_artifact_dir_path_mismatch",
        path: promotionPath,
        product_slug: productSlug,
        expected_prefix: expectedPrefix,
        actual: staleDir || null,
      });
      continue;
    }
    if (await exists(path.resolve(process.cwd(), staleDir))) {
      findings.push({
        severity: "error",
        rule: "promotion_manifest_removed_stale_feature_artifact_dir_still_exists",
        path: promotionPath,
        product_slug: productSlug,
        stale_feature_artifact_dir: staleDir,
      });
    }
  }

  return findings;
}

function escapeMarkdownLinkLabel(label) {
  return String(label || "").replace(/([\\[\]])/g, "\\$1");
}

function expectedMarkdownLink(label, target) {
  return `[${escapeMarkdownLinkLabel(label)}](${target})`;
}

function expectedStep08FeatureGate(feature) {
  const validation = feature?.validation || {};
  if (Number(validation.fail_count || 0) > 0) {
    return "FAIL";
  }
  if (Number(validation.warn_count || 0) > 0) {
    return "WARN";
  }
  return "PASS";
}

function expectedStep08MarkdownTableRow(feature) {
  const sources = (feature?.evidence?.source_links || [])
    .slice(0, 3)
    .map((url) => `[source](${url})`)
    .join("<br>");
  return `| ${[
    feature?.feature_name || "",
    feature?.coverage_status || "",
    expectedStep08FeatureGate(feature),
    feature?.iam?.iam_mapping_status || "",
    sources,
  ].map((value) => String(value ?? "").replace(/\n/g, " ").replace(/\|/g, "\\|")).join(" | ")} |`;
}

function validateStep08ProductMarkdownAgainstCard(productSlug, markdownPath, markdown, card) {
  const findings = [];
  const markdownText = String(markdown || "");
  const markdownLines = new Set(markdownText.split(/\r?\n/));
  const expectedLines = [
    `# ${card.product_name || ""}`,
    `Schema version: \`${card.schema_version || ""}\``,
    `Generated at: \`${card.generated_at || ""}\``,
    `Product status: \`${card.validation?.product_status || ""}\``,
    `- Feature cards: ${card.feature_count}`,
    `- Step 07 failed features: ${card.validation?.failed_feature_count}`,
    `- Step 07 warned features: ${card.validation?.warned_feature_count}`,
    `- Corpus health: ${card.corpus?.health_status || "unknown"}`,
    `- IAM mapping: ${card.iam_summary?.explicit_feature_count} explicit, ${card.iam_summary?.derived_feature_count} derived, ${card.iam_summary?.unknown_feature_count} unknown`,
    `- Service card ID: \`${card.service_card?.service_card_id || ""}\``,
    `- Latest feature date: ${card.service_card?.lifecycle?.latest_feature_date || "unknown"}`,
    `- Official source links: ${card.service_card?.official_source_links?.length || 0}`,
    `- Security capabilities: ${card.service_card?.security_capability_count}`,
  ];

  for (const line of expectedLines) {
    if (!markdownText.includes(line)) {
      findings.push({
        severity: "error",
        rule: "step08_product_card_markdown_summary_mismatch",
        path: markdownPath,
        product_slug: productSlug,
        expected: line,
      });
    }
  }

  const features = Array.isArray(card.features) ? card.features : [];
  const expectedFeatureRows = features.map(expectedStep08MarkdownTableRow);
  for (const feature of features) {
    const expectedRow = expectedStep08MarkdownTableRow(feature);
    if (!markdownLines.has(expectedRow)) {
      findings.push({
        severity: "error",
        rule: "step08_product_card_markdown_feature_row_mismatch",
        path: markdownPath,
        product_slug: productSlug,
        feature_slug: feature?.feature_slug || null,
        expected: expectedRow,
      });
    }
  }

  const featureSection = markdownText.split(/\n## Features\s*\n/)[1] || "";
  const actualFeatureRows = featureSection
    .split(/\r?\n/)
    .filter((line) => line.startsWith("| "))
    .filter((line) => !line.includes("| ---"))
    .filter((line) => !line.startsWith("| Feature | Coverage | Gate | IAM | Sources |"));
  if (!jsonEquals(actualFeatureRows, expectedFeatureRows)) {
    findings.push({
      severity: "error",
      rule: "step08_product_card_markdown_feature_rows_mismatch",
      path: markdownPath,
      product_slug: productSlug,
      expected_feature_row_count: expectedFeatureRows.length,
      actual_feature_row_count: actualFeatureRows.length,
    });
  }

  return findings;
}

function validateStep08CardOfficialLinks(productSlug, cardPath, card) {
  const findings = [];
  findings.push(...validateCanonicalStringArray(
    card?.service_card?.official_source_links || [],
    cardPath,
    "step08_service_card_source_links",
    { product_slug: productSlug }
  ));
  for (const link of card?.service_card?.official_source_links || []) {
    if (!isOfficialGoogleUrl(link)) {
      findings.push({
        severity: "error",
        rule: "step08_service_card_non_official_source_link",
        path: cardPath,
        product_slug: productSlug,
        link,
      });
    }
  }
  for (const capability of card?.service_card?.security_capabilities || []) {
    findings.push(...validateCanonicalStringArray(
      capability?.evidence_links || [],
      cardPath,
      "step08_service_card_security_evidence_links",
      { product_slug: productSlug, capability: capability?.capability || null }
    ));
    for (const link of capability?.evidence_links || []) {
      if (!isOfficialGoogleUrl(link)) {
        findings.push({
          severity: "error",
          rule: "step08_service_card_non_official_security_evidence_link",
          path: cardPath,
          product_slug: productSlug,
          capability: capability?.capability || null,
          link,
        });
      }
    }
  }
  for (const feature of card?.features || []) {
    const featureSlug = feature?.feature_slug || null;
    findings.push(...validateCanonicalStringArray(
      feature?.evidence?.source_links || [],
      cardPath,
      "step08_feature_source_links",
      { product_slug: productSlug, feature_slug: featureSlug }
    ));
    for (const link of feature?.evidence?.source_links || []) {
      if (!isOfficialGoogleUrl(link)) {
        findings.push({
          severity: "error",
          rule: "step08_feature_non_official_source_link",
          path: cardPath,
          product_slug: productSlug,
          feature_slug: featureSlug,
          link,
        });
      }
    }
    for (const page of feature?.evidence?.supporting_pages || []) {
      const link = page?.url || "";
      if (!link) {
        continue;
      }
      if (!isOfficialGoogleUrl(link)) {
        findings.push({
          severity: "error",
          rule: "step08_feature_non_official_supporting_page_link",
          path: cardPath,
          product_slug: productSlug,
          feature_slug: featureSlug,
          link,
        });
      }
    }
    for (const capability of feature?.security_capabilities || []) {
      findings.push(...validateCanonicalStringArray(
        capability?.evidence_links || [],
        cardPath,
        "step08_feature_security_evidence_links",
        { product_slug: productSlug, feature_slug: featureSlug, capability: capability?.capability || null }
      ));
      for (const link of capability?.evidence_links || []) {
        if (!isOfficialGoogleUrl(link)) {
          findings.push({
            severity: "error",
            rule: "step08_feature_non_official_security_evidence_link",
            path: cardPath,
            product_slug: productSlug,
            feature_slug: featureSlug,
            capability: capability?.capability || null,
            link,
          });
        }
      }
    }
  }
  return findings;
}

async function validateFinalOutputDirectoryNamesAreLowercase() {
  const findings = [];
  const roots = [
    { label: "artifacts", root: artifactsRoot },
    { label: "radar", root: radarRoot },
    { label: "step08", root: step08Root },
    { label: "step09", root: step09Root },
    { label: "step10", root: step10Root },
  ];
  for (const { label, root } of roots) {
    for (const dir of await listDirsRecursive(root)) {
      const dirName = path.basename(dir);
      if (dirName !== dirName.toLowerCase()) {
        findings.push({
          severity: "error",
          rule: "final_output_directory_name_not_lowercase",
          path: dir,
          root: label,
          directory_name: dirName,
        });
      }
    }
  }
  return findings;
}

async function loadStep08Inventory() {
  const roles = new Set();
  const permissions = new Set();
  for (const productSlug of await listDirs(path.join(step08Root, "products"))) {
    const card = await readJson(path.join(step08Root, "products", productSlug, "card.json"), null);
    if (!card) {
      continue;
    }
    for (const feature of card.features || []) {
      for (const role of [...(feature.iam?.explicit_roles || []), ...(feature.iam?.derived_roles || [])]) {
        roles.add(role);
      }
      for (const permission of [...(feature.iam?.explicit_permissions || []), ...(feature.iam?.derived_permissions || [])]) {
        permissions.add(permission.permission);
      }
    }
  }
  return { roles, permissions };
}

async function validateArtifacts() {
  const findings = [];
  let featureCount = 0;
  const inventory = await loadStep08Inventory();
  const step09Index = await readJson(path.join(step09Root, "index.json"), null);
  const expectedAcceptedWarningRules = Array.isArray(step09Index?.accepted_warning_rules)
    ? stringArray(step09Index.accepted_warning_rules)
    : null;

  for (const productSlug of await listDirs(artifactsRoot)) {
    const productDir = path.join(artifactsRoot, productSlug);
    const promotionPath = path.join(productDir, "promotion.json");
    const promotion = await readJson(promotionPath, null);
    const serviceCardPath = path.join(artifactsRoot, productSlug, "card.json");
    const serviceCard = await readJson(serviceCardPath, null);
    const step08Card = await readJson(path.join(step08Root, "products", productSlug, "card.json"), null);
    const step08Features = new Map((step08Card?.features || []).map((feature) => [feature.feature_slug, feature]));
    const expectedSourceStep08Card = relativeToCwd(path.join(step08Root, "products", productSlug, "card.json"));
    const promotedFeatureSlugs = new Set(promotionFeatureList(promotion, "promoted_features").map((feature) => feature.feature_slug).filter(Boolean));
    const artifactFeatureSlugs = await listDirs(productDir);
    if (!promotion) {
      findings.push({ severity: "error", rule: "missing_promotion_manifest", path: promotionPath });
    } else {
      if (promotion.schema_version !== expectedStep09SchemaVersion) {
        findings.push({
          severity: "error",
          rule: "promotion_manifest_schema_version_mismatch",
          path: promotionPath,
          product_slug: productSlug,
          expected: expectedStep09SchemaVersion,
          actual: promotion.schema_version || null,
        });
      }
      findings.push(...validateGeneratedAtField(promotion, promotionPath, "promotion_manifest", { product_slug: productSlug }));
      const skippedFeatures = promotionFeatureList(promotion, "skipped_features");
      const acceptedWarningRules = new Set(Array.isArray(promotion.accepted_warning_rules) ? promotion.accepted_warning_rules : []);
      if (!Array.isArray(promotion.accepted_warning_rules)) {
        findings.push({
          severity: "error",
          rule: "promotion_manifest_accepted_warning_rules_not_array",
          path: promotionPath,
          product_slug: productSlug,
          actual_type: promotion.accepted_warning_rules === null ? "null" : typeof promotion.accepted_warning_rules,
        });
      } else {
        const actualAcceptedWarningRules = stringArray(promotion.accepted_warning_rules);
        findings.push(...validateAcceptedWarningRulesArray(
          promotion.accepted_warning_rules,
          promotionPath,
          "promotion_manifest",
          { product_slug: productSlug }
        ));
        if (expectedAcceptedWarningRules && !jsonEquals(actualAcceptedWarningRules, expectedAcceptedWarningRules)) {
          findings.push({
            severity: "error",
            rule: "promotion_manifest_accepted_warning_rules_mismatch",
            path: promotionPath,
            product_slug: productSlug,
            expected: expectedAcceptedWarningRules,
            actual: actualAcceptedWarningRules,
          });
        }
      }
      for (const field of ["promoted_features", "skipped_features"]) {
        if (!Array.isArray(promotion[field])) {
          findings.push({
            severity: "error",
            rule: `promotion_manifest_${field}_not_array`,
            path: promotionPath,
            product_slug: productSlug,
            actual_type: promotion[field] === null ? "null" : typeof promotion[field],
          });
        }
        findings.push(...validatePromotionFeatureListOrdering(promotion, promotionPath, productSlug, field));
      }
      findings.push(...await validatePromotionStaleFeatureCleanup(promotion, promotionPath, productSlug));
      if (promotion.product_slug !== productSlug) {
        findings.push({
          severity: "error",
          rule: "promotion_manifest_product_slug_mismatch",
          path: promotionPath,
          expected: productSlug,
          actual: promotion.product_slug || null,
        });
      }
      const expectedProductName = serviceCard?.product_name || step08Card?.product_name || null;
      if (expectedProductName && promotion.product_name !== expectedProductName) {
        findings.push({
          severity: "error",
          rule: "promotion_manifest_product_name_mismatch",
          path: promotionPath,
          product_slug: productSlug,
          expected: expectedProductName,
          actual: promotion.product_name || null,
        });
      }
      if (promotion.promoted_feature_count !== promotedFeatureSlugs.size) {
        findings.push({
          severity: "error",
          rule: "promotion_manifest_promoted_feature_count_mismatch",
          path: promotionPath,
          expected: promotedFeatureSlugs.size,
          actual: promotion.promoted_feature_count,
        });
      }
      if (promotion.skipped_feature_count !== skippedFeatures.length) {
        findings.push({
          severity: "error",
          rule: "promotion_manifest_skipped_feature_count_mismatch",
          path: promotionPath,
          expected: skippedFeatures.length,
          actual: promotion.skipped_feature_count,
        });
      }
      const expectedServiceCard = relativeToCwd(path.join(productDir, "card.json"));
      const actualServiceCard = String(promotion.service_card || "").replace(/\\/g, "/");
      if (actualServiceCard !== expectedServiceCard) {
        findings.push({
          severity: "error",
          rule: "promotion_manifest_service_card_path_mismatch",
          path: promotionPath,
          product_slug: productSlug,
          expected: expectedServiceCard,
          actual: actualServiceCard || null,
        });
      }
      const actualSourceStep08Card = String(promotion.source_step08_card || "").replace(/\\/g, "/");
      if (actualSourceStep08Card !== expectedSourceStep08Card) {
        findings.push({
          severity: "error",
          rule: "promotion_manifest_source_step08_card_mismatch",
          path: promotionPath,
          product_slug: productSlug,
          expected: expectedSourceStep08Card,
          actual: actualSourceStep08Card || null,
        });
      }
      if (!(await exists(path.join(step08Root, "products", productSlug, "card.json")))) {
        findings.push({
          severity: "error",
          rule: "promotion_manifest_source_step08_card_missing",
          path: promotionPath,
          product_slug: productSlug,
          expected: expectedSourceStep08Card,
        });
      }
      const seenFeatureSlugs = new Set();
      for (const feature of promotionFeatureList(promotion, "promoted_features")) {
        const featureSlug = feature?.feature_slug;
        if (!featureSlug) {
          findings.push({
            severity: "error",
            rule: "promotion_manifest_missing_feature_slug",
            path: promotionPath,
            product_slug: productSlug,
          });
          continue;
        }
        if (seenFeatureSlugs.has(featureSlug)) {
          findings.push({
            severity: "error",
            rule: "promotion_manifest_duplicate_feature_slug",
            path: promotionPath,
            product_slug: productSlug,
            feature_slug: featureSlug,
          });
        }
        seenFeatureSlugs.add(featureSlug);
        const step08Feature = step08Features.get(featureSlug);
        const featureCard = await readJson(path.join(productDir, featureSlug, "card.json"), null);
        const expectedFeatureName = featureCard?.feature_name || step08Feature?.feature_name || null;
        if (expectedFeatureName && feature.feature_name !== expectedFeatureName) {
          findings.push({
            severity: "error",
            rule: "promotion_manifest_feature_name_mismatch",
            path: promotionPath,
            product_slug: productSlug,
            feature_slug: featureSlug,
            expected: expectedFeatureName,
            actual: feature.feature_name || null,
          });
        }
        const expectedReadme = relativeToCwd(path.join(productDir, featureSlug, "README.md"));
        const expectedCard = relativeToCwd(path.join(productDir, featureSlug, "card.json"));
        const actualReadme = String(feature.artifact_readme || "").replace(/\\/g, "/");
        const actualCard = String(feature.artifact_card || "").replace(/\\/g, "/");
        if (actualReadme !== expectedReadme) {
          findings.push({
            severity: "error",
            rule: "promotion_manifest_feature_readme_path_mismatch",
            path: promotionPath,
            product_slug: productSlug,
            feature_slug: featureSlug,
            expected: expectedReadme,
            actual: actualReadme || null,
          });
        }
        if (actualCard !== expectedCard) {
          findings.push({
            severity: "error",
            rule: "promotion_manifest_feature_card_path_mismatch",
            path: promotionPath,
            product_slug: productSlug,
            feature_slug: featureSlug,
            expected: expectedCard,
            actual: actualCard || null,
          });
        }
      }
      const seenSkippedFeatureSlugs = new Set();
      for (const feature of skippedFeatures) {
        const featureSlug = feature?.feature_slug;
        if (!featureSlug) {
          findings.push({
            severity: "error",
            rule: "promotion_manifest_skipped_feature_missing_slug",
            path: promotionPath,
            product_slug: productSlug,
          });
          continue;
        }
        if (seenSkippedFeatureSlugs.has(featureSlug)) {
          findings.push({
            severity: "error",
            rule: "promotion_manifest_duplicate_skipped_feature_slug",
            path: promotionPath,
            product_slug: productSlug,
            feature_slug: featureSlug,
          });
        }
        seenSkippedFeatureSlugs.add(featureSlug);
        if (promotedFeatureSlugs.has(featureSlug)) {
          findings.push({
            severity: "error",
            rule: "promotion_manifest_feature_promoted_and_skipped",
            path: promotionPath,
            product_slug: productSlug,
            feature_slug: featureSlug,
          });
        }
        const step08Feature = step08Features.get(featureSlug);
        if (!step08Feature) {
          findings.push({
            severity: "error",
            rule: "promotion_manifest_skipped_feature_missing_from_step08",
            path: promotionPath,
            product_slug: productSlug,
            feature_slug: featureSlug,
          });
        }
        if (step08Feature?.feature_name && feature.feature_name !== step08Feature.feature_name) {
          findings.push({
            severity: "error",
            rule: "promotion_manifest_skipped_feature_name_mismatch",
            path: promotionPath,
            product_slug: productSlug,
            feature_slug: featureSlug,
            expected: step08Feature.feature_name,
            actual: feature.feature_name || null,
          });
        }
        if (step08Feature) {
          const expectedDecision = promotionDecisionForFeature(step08Feature, acceptedWarningRules);
          const actualReason = String(feature.reason || "");
          if (expectedDecision.promotable) {
            findings.push({
              severity: "error",
              rule: "promotion_manifest_skipped_feature_is_promotable",
              path: promotionPath,
              product_slug: productSlug,
              feature_slug: featureSlug,
            });
          }
          if (actualReason !== expectedDecision.reason) {
            findings.push({
              severity: "error",
              rule: "promotion_manifest_skipped_feature_reason_mismatch",
              path: promotionPath,
              product_slug: productSlug,
              feature_slug: featureSlug,
              expected: expectedDecision.reason,
              actual: actualReason || null,
            });
          }
          if (!Array.isArray(feature.blocking_warnings)) {
            findings.push({
              severity: "error",
              rule: "promotion_manifest_skipped_feature_blocking_warnings_not_array",
              path: promotionPath,
              product_slug: productSlug,
              feature_slug: featureSlug,
              actual_type: feature.blocking_warnings === null ? "null" : typeof feature.blocking_warnings,
            });
          } else {
            const actualBlockingWarnings = stringArray(feature.blocking_warnings)
              .sort((left, right) => left.localeCompare(right));
            if (!jsonEquals(actualBlockingWarnings, expectedDecision.blocking_warnings)) {
              findings.push({
                severity: "error",
                rule: "promotion_manifest_skipped_feature_blocking_warnings_mismatch",
                path: promotionPath,
                product_slug: productSlug,
                feature_slug: featureSlug,
                expected: expectedDecision.blocking_warnings,
                actual: actualBlockingWarnings,
              });
            }
          }
        }
      }
      if (step08Card) {
        const dispositionFeatureSlugs = new Set([...seenFeatureSlugs, ...seenSkippedFeatureSlugs]);
        for (const featureSlug of step08Features.keys()) {
          if (!dispositionFeatureSlugs.has(featureSlug)) {
            findings.push({
              severity: "error",
              rule: "promotion_manifest_missing_step08_feature_disposition",
              path: promotionPath,
              product_slug: productSlug,
              feature_slug: featureSlug,
            });
          }
        }
        for (const featureSlug of dispositionFeatureSlugs) {
          if (!step08Features.has(featureSlug)) {
            findings.push({
              severity: "error",
              rule: "promotion_manifest_unknown_step08_feature_disposition",
              path: promotionPath,
              product_slug: productSlug,
              feature_slug: featureSlug,
            });
          }
        }
      }
    }
    for (const featureSlug of artifactFeatureSlugs) {
      if (promotion && !promotedFeatureSlugs.has(featureSlug)) {
        findings.push({ severity: "error", rule: "feature_artifact_not_promoted", path: path.join(productDir, featureSlug), product_slug: productSlug, feature_slug: featureSlug });
      }
    }
    for (const featureSlug of promotedFeatureSlugs) {
      const featureDir = path.join(productDir, featureSlug);
      const featureCardPath = path.join(featureDir, "card.json");
      const featureReadmePath = path.join(featureDir, "README.md");
      if (!artifactFeatureSlugs.includes(featureSlug)) {
        findings.push({ severity: "error", rule: "promoted_feature_artifact_missing", path: featureDir, product_slug: productSlug, feature_slug: featureSlug });
      }
      if (!(await exists(featureCardPath))) {
        findings.push({ severity: "error", rule: "promoted_feature_card_missing", path: featureCardPath, product_slug: productSlug, feature_slug: featureSlug });
      }
      if (!(await exists(featureReadmePath))) {
        findings.push({ severity: "error", rule: "promoted_feature_readme_missing", path: featureReadmePath, product_slug: productSlug, feature_slug: featureSlug });
      }
    }
    if (!serviceCard) {
      findings.push({ severity: "error", rule: "missing_service_card", path: serviceCardPath });
    } else if (serviceCard.schema_version !== expectedStep09SchemaVersion) {
      findings.push({
        severity: "error",
        rule: "service_card_schema_version_mismatch",
        path: serviceCardPath,
        product_slug: productSlug,
        expected: expectedStep09SchemaVersion,
        actual: serviceCard.schema_version || null,
      });
    } else if (serviceCard.card_type !== "service") {
      findings.push({ severity: "error", rule: "invalid_service_card_type", path: serviceCardPath });
    } else if (String(serviceCard.source_step08_card || "").replace(/\\/g, "/") !== expectedSourceStep08Card) {
      findings.push({
        severity: "error",
        rule: "service_card_source_step08_card_mismatch",
        path: serviceCardPath,
        expected: expectedSourceStep08Card,
        actual: String(serviceCard.source_step08_card || "").replace(/\\/g, "/") || null,
      });
    } else if (serviceCard.product_slug !== productSlug) {
      findings.push({
        severity: "error",
        rule: "service_card_product_slug_mismatch",
        path: serviceCardPath,
        expected: productSlug,
        actual: serviceCard.product_slug || null,
      });
    } else if (serviceCard.service_slug !== productSlug) {
      findings.push({
        severity: "error",
        rule: "service_card_service_slug_mismatch",
        path: serviceCardPath,
        expected: productSlug,
        actual: serviceCard.service_slug || null,
      });
    }
    if (serviceCard) {
      findings.push(...validateGeneratedAtField(serviceCard, serviceCardPath, "service_card", { product_slug: productSlug }));
      findings.push(...validateGeneratedAtMatchesPromotion(serviceCard, promotion, serviceCardPath, "service_card_generated_at_mismatch", { product_slug: productSlug }));
    }
    findings.push(...validateCanonicalStringArray(
      serviceCard?.official_source_links || [],
      serviceCardPath,
      "service_card_source_links",
      { product_slug: productSlug }
    ));
    for (const link of serviceCard?.official_source_links || []) {
      if (!isOfficialGoogleUrl(link)) {
        findings.push({ severity: "error", rule: "non_official_service_source_link", path: serviceCardPath, link });
      }
    }
    for (const capability of serviceCard?.security_capabilities || []) {
      findings.push(...validateCanonicalStringArray(
        capability?.evidence_links || [],
        serviceCardPath,
        "service_card_security_evidence_links",
        { product_slug: productSlug, capability: capability?.capability || null }
      ));
      for (const link of capability.evidence_links || []) {
        if (!isOfficialGoogleUrl(link)) {
          findings.push({
            severity: "error",
            rule: "non_official_service_security_evidence_link",
            path: serviceCardPath,
            product_slug: productSlug,
            capability: capability.capability || null,
            link,
          });
        }
      }
    }
    for (const featureSlug of promotedFeatureSlugs) {
      const cardPath = path.join(artifactsRoot, productSlug, featureSlug, "card.json");
      const card = await readJson(cardPath, null);
      if (!card) {
        continue;
      }
      featureCount += 1;
      if (card.schema_version !== expectedStep09SchemaVersion) {
        findings.push({
          severity: "error",
          rule: "feature_card_schema_version_mismatch",
          path: cardPath,
          product_slug: productSlug,
          feature_slug: featureSlug,
          expected: expectedStep09SchemaVersion,
          actual: card.schema_version || null,
        });
      }
      findings.push(...validateGeneratedAtField(card, cardPath, "feature_card", { product_slug: productSlug, feature_slug: featureSlug }));
      findings.push(...validateGeneratedAtMatchesPromotion(card, promotion, cardPath, "feature_card_generated_at_mismatch", { product_slug: productSlug, feature_slug: featureSlug }));
      findings.push(...validateIamMappingStatus(card, cardPath, "feature_card_invalid_iam_mapping_status", { product_slug: productSlug, feature_slug: featureSlug }));
      if (card.product_slug !== productSlug) {
        findings.push({
          severity: "error",
          rule: "feature_card_product_slug_mismatch",
          path: cardPath,
          expected: productSlug,
          actual: card.product_slug || null,
        });
      }
      if (String(card.source_step08_card || "").replace(/\\/g, "/") !== expectedSourceStep08Card) {
        findings.push({
          severity: "error",
          rule: "feature_card_source_step08_card_mismatch",
          path: cardPath,
          product_slug: productSlug,
          feature_slug: featureSlug,
          expected: expectedSourceStep08Card,
          actual: String(card.source_step08_card || "").replace(/\\/g, "/") || null,
        });
      }
      if (card.feature_slug !== featureSlug) {
        findings.push({
          severity: "error",
          rule: "feature_card_feature_slug_mismatch",
          path: cardPath,
          expected: featureSlug,
          actual: card.feature_slug || null,
        });
      }
      const links = card.evidence?.source_links || [];
      if (links.length === 0) {
        findings.push({ severity: "error", rule: "missing_source_links", path: cardPath });
      }
      findings.push(...validateCanonicalStringArray(
        links,
        cardPath,
        "feature_card_source_links",
        { product_slug: productSlug, feature_slug: featureSlug }
      ));
      for (const link of links) {
        if (!isOfficialGoogleUrl(link)) {
          findings.push({ severity: "error", rule: "non_official_source_link", path: cardPath, link });
        }
      }
      for (const capability of card.security_capabilities || []) {
        findings.push(...validateCanonicalStringArray(
          capability?.evidence_links || [],
          cardPath,
          "feature_card_security_evidence_links",
          { product_slug: productSlug, feature_slug: featureSlug, capability: capability?.capability || null }
        ));
        for (const link of capability.evidence_links || []) {
          if (!isOfficialGoogleUrl(link)) {
            findings.push({
              severity: "error",
              rule: "non_official_feature_security_evidence_link",
              path: cardPath,
              product_slug: productSlug,
              feature_slug: featureSlug,
              capability: capability.capability || null,
              link,
            });
          }
        }
      }
      const validation = card.validation || {};
      if (!validation.step07_pass) {
        findings.push({
          severity: "error",
          rule: "promoted_feature_step07_not_passed",
          path: cardPath,
          product_slug: productSlug,
          feature_slug: featureSlug,
          actual: validation.step07_pass ?? null,
        });
      }
      if (Number(validation.fail_count || 0) > 0) {
        findings.push({
          severity: "error",
          rule: "promoted_feature_has_failures",
          path: cardPath,
          product_slug: productSlug,
          feature_slug: featureSlug,
          actual: validation.fail_count,
        });
      }
      if (!String(card.extended_definition || card.summary || "").trim()) {
        findings.push({
          severity: "error",
          rule: "promoted_feature_missing_summary",
          path: cardPath,
          product_slug: productSlug,
          feature_slug: featureSlug,
        });
      }
      const acceptedWarningRules = new Set(Array.isArray(promotion?.accepted_warning_rules) ? promotion.accepted_warning_rules : []);
      const unacceptedWarnings = (validation.findings || [])
        .filter((finding) => finding?.severity === "warn")
        .map((finding) => finding.rule)
        .filter((rule) => rule && !acceptedWarningRules.has(rule));
      if (unacceptedWarnings.length > 0) {
        findings.push({
          severity: "error",
          rule: "promoted_feature_has_unaccepted_warnings",
          path: cardPath,
          product_slug: productSlug,
          feature_slug: featureSlug,
          unaccepted_warning_rules: [...new Set(unacceptedWarnings)].sort(),
        });
      }
      const officialSourceLinks = links.filter(isOfficialGoogleUrl);
      const featureReadmePath = path.join(artifactsRoot, productSlug, featureSlug, "README.md");
      if (officialSourceLinks.length > 0 && await exists(featureReadmePath)) {
        const featureReadme = await readText(featureReadmePath, "");
        if (!officialSourceLinks.some((link) => featureReadme.includes(link))) {
          findings.push({
            severity: "error",
            rule: "missing_artifact_readme_evidence_link",
            path: featureReadmePath,
            product_slug: productSlug,
            feature_slug: featureSlug,
            expected_one_of: officialSourceLinks,
          });
        }
      }
      for (const role of [...(card.iam?.explicit_roles || []), ...(card.iam?.derived_roles || [])]) {
        if (!inventory.roles.has(role)) {
          findings.push({ severity: "error", rule: "role_not_in_step08_inventory", path: cardPath, role });
        }
      }
      for (const permission of [...(card.iam?.explicit_permissions || []), ...(card.iam?.derived_permissions || [])]) {
        if (!inventory.permissions.has(permission.permission)) {
          findings.push({ severity: "error", rule: "permission_not_in_step08_inventory", path: cardPath, permission: permission.permission });
        }
      }
    }
  }

  return { featureCount, findings };
}

async function validateArtifactProductIndexes() {
  const findings = [];

  for (const productSlug of await listDirs(artifactsRoot)) {
    const productDir = path.join(artifactsRoot, productSlug);
    const promotionPath = path.join(productDir, "promotion.json");
    const productIndexPath = path.join(productDir, "index.md");
    const promotion = await readJson(promotionPath, null);
    const serviceCard = await readJson(path.join(productDir, "card.json"), null);
    const step08Card = await readJson(path.join(step08Root, "products", productSlug, "card.json"), null);
    if (!promotion || !(await exists(productIndexPath))) {
      continue;
    }

    const indexMarkdown = await readText(productIndexPath, "");
    const indexLines = new Set(indexMarkdown.split(/\r?\n/));
    const promotedFeatures = promotionFeatureList(promotion, "promoted_features")
      .map((feature) => feature?.feature_slug)
      .filter(Boolean)
      .sort((left, right) => left.localeCompare(right));
    const expectedFeatureLinks = new Set(promotedFeatures.map((featureSlug) => `./${featureSlug}/README.md`));
    const expectedServiceCardLink = "./card.json";
    let hasServiceCardLink = false;
    let serviceCardLinkCount = 0;
    const actualFeatureLinks = new Set();
    const featureLinkCounts = new Map();
    const staleFeatureLinks = new Set();
    const staleServiceCardLinks = new Set();
    const linkPattern = /\[(?:\\.|[^\]\\])*\]\(([^)]+)\)/g;

    for (const match of indexMarkdown.matchAll(linkPattern)) {
      const link = String(match[1] || "").trim().replace(/\\/g, "/").split("#")[0];
      if (link.endsWith("/card.json") || link === expectedServiceCardLink) {
        if (link === expectedServiceCardLink) {
          hasServiceCardLink = true;
          serviceCardLinkCount += 1;
        } else if (link.startsWith("./")) {
          staleServiceCardLinks.add(link);
        }
      }
      if (!link.startsWith("./") || !link.endsWith("/README.md")) {
        continue;
      }
      featureLinkCounts.set(link, (featureLinkCounts.get(link) || 0) + 1);
      if (expectedFeatureLinks.has(link)) {
        actualFeatureLinks.add(link);
      } else {
        staleFeatureLinks.add(link);
      }
    }

    const expectedSourceStep08Card = relativeToCwd(path.join(step08Root, "products", productSlug, "card.json"));
    const expectedSummaryLines = [
      `# ${promotion.product_name || productSlug}`,
      `Service card: [card.json](${expectedServiceCardLink})`,
      `Generated from Step 08 card: \`${expectedSourceStep08Card}\``,
      `- Promoted features: ${promotion.promoted_feature_count}`,
      `- Step 07 product status: ${step08Card?.validation?.product_status || serviceCard?.validation?.product_status || "unknown"}`,
      `- Corpus health: ${step08Card?.corpus?.health_status || "unknown"}`,
      `- Latest feature date: ${serviceCard?.lifecycle?.latest_feature_date || "unknown"}`,
      `- Official source links: ${serviceCard?.official_source_links?.length || 0}`,
    ];
    for (const expectedLine of expectedSummaryLines) {
      if (!indexMarkdown.includes(expectedLine)) {
        findings.push({
          severity: "error",
          rule: "artifact_index_summary_mismatch",
          path: productIndexPath,
          product_slug: productSlug,
          expected: expectedLine,
        });
      }
    }

    for (const url of serviceCard?.official_source_links || []) {
      const expectedLine = `- ${expectedMarkdownLink(url, url)}`;
      if (!indexLines.has(expectedLine)) {
        findings.push({
          severity: "error",
          rule: "artifact_index_service_evidence_link_mismatch",
          path: productIndexPath,
          product_slug: productSlug,
          expected: expectedLine,
        });
      }
    }

    for (const feature of promotionFeatureList(promotion, "promoted_features")) {
      const featureSlug = feature?.feature_slug;
      if (!featureSlug) {
        continue;
      }
      const expectedLine = `- ${expectedMarkdownLink(feature.feature_name || featureSlug, `./${featureSlug}/README.md`)}`;
      if (!indexLines.has(expectedLine)) {
        findings.push({
          severity: "error",
          rule: "artifact_index_feature_label_mismatch",
          path: productIndexPath,
          product_slug: productSlug,
          feature_slug: featureSlug,
          expected: expectedLine,
        });
      }
    }

    for (const link of expectedFeatureLinks) {
      if (!actualFeatureLinks.has(link)) {
        findings.push({
          severity: "error",
          rule: "missing_artifact_index_feature_link",
          path: productIndexPath,
          product_slug: productSlug,
          link,
        });
      }
    }
    for (const link of staleFeatureLinks) {
      findings.push({
        severity: "error",
        rule: "stale_artifact_index_feature_link",
        path: productIndexPath,
        product_slug: productSlug,
        link,
      });
    }
    for (const [link, count] of featureLinkCounts) {
      if (count > 1) {
        findings.push({
          severity: "error",
          rule: "duplicate_artifact_index_feature_link",
          path: productIndexPath,
          product_slug: productSlug,
          link,
          count,
        });
      }
    }
    if (!hasServiceCardLink) {
      findings.push({
        severity: "error",
        rule: "missing_artifact_index_service_card_link",
        path: productIndexPath,
        product_slug: productSlug,
        link: expectedServiceCardLink,
      });
    }
    if (serviceCardLinkCount > 1) {
      findings.push({
        severity: "error",
        rule: "duplicate_artifact_index_service_card_link",
        path: productIndexPath,
        product_slug: productSlug,
        link: expectedServiceCardLink,
        count: serviceCardLinkCount,
      });
    }
    for (const link of staleServiceCardLinks) {
      findings.push({
        severity: "error",
        rule: "stale_artifact_index_service_card_link",
        path: productIndexPath,
        product_slug: productSlug,
        link,
      });
    }
  }

  return findings;
}

async function validateArtifactMarkdownExternalLinksAreOfficial() {
  const findings = [];

  for (const file of await listFilesRecursive(artifactsRoot)) {
    if (!file.endsWith(".md")) {
      continue;
    }
    const content = await readText(file, "");

    for (const link of collectExternalMarkdownUrls(content)) {
      if (!isOfficialGoogleUrl(link)) {
        findings.push({
          severity: "error",
          rule: "non_official_artifact_markdown_external_link",
          path: file,
          link,
        });
      }
    }
  }

  return findings;
}

async function validateStep08MarkdownExternalLinksAreOfficial() {
  const findings = [];
  const productsRoot = path.join(step08Root, "products");

  for (const productSlug of await listDirs(productsRoot)) {
    const markdownPath = path.join(productsRoot, productSlug, "card.md");
    const content = await readText(markdownPath, null);
    if (content === null) {
      continue;
    }

    for (const link of collectExternalMarkdownUrls(content)) {
      if (!isOfficialGoogleUrl(link)) {
        findings.push({
          severity: "error",
          rule: "non_official_step08_markdown_external_link",
          path: markdownPath,
          product_slug: productSlug,
          link,
        });
      }
    }
  }

  return findings;
}

async function validateFeatureReadmesMatchCards() {
  const findings = [];

  for (const productSlug of await listDirs(artifactsRoot)) {
    const promotion = await readJson(path.join(artifactsRoot, productSlug, "promotion.json"), null);
    if (!promotion) {
      continue;
    }

    for (const feature of promotionFeatureList(promotion, "promoted_features")) {
      const featureSlug = feature?.feature_slug;
      if (!featureSlug) {
        continue;
      }
      const readmePath = path.join(artifactsRoot, productSlug, featureSlug, "README.md");
      const cardPath = path.join(artifactsRoot, productSlug, featureSlug, "card.json");
      if (!(await exists(readmePath)) || !(await exists(cardPath))) {
        continue;
      }

      const readme = await readText(readmePath, "");
      const card = await readJson(cardPath, null);
      const expectedIdentityLines = [
        `Product: ${card?.product_name || ""}`,
        `Feature slug: \`${card?.feature_slug || ""}\``,
        `Coverage: \`${card?.coverage_status || "unknown"}\``,
      ];
      for (const expectedLine of expectedIdentityLines) {
        if (!readme.includes(expectedLine)) {
          findings.push({
            severity: "error",
            rule: "feature_readme_identity_mismatch",
            path: readmePath,
            product_slug: productSlug,
            feature_slug: featureSlug,
            expected: expectedLine,
          });
        }
      }

      const lifecycle = card?.lifecycle || {};
      const expectedLifecycleLines = [
        `- Latest feature date: ${lifecycle.latest_feature_date || "unknown"}`,
        `- Deprecation date: ${lifecycle.deprecation_date || "none recorded"}`,
        `- Status: ${lifecycle.status}`,
      ];
      for (const expectedLine of expectedLifecycleLines) {
        if (!readme.includes(expectedLine)) {
          findings.push({
            severity: "error",
            rule: "feature_readme_lifecycle_mismatch",
            path: readmePath,
            product_slug: productSlug,
            feature_slug: featureSlug,
            expected: expectedLine,
          });
        }
      }

      const iam = card?.iam || {};
      const status = iam.iam_mapping_status || "unknown";
      const expectedStatusLine = `IAM mapping: \`${status}\``;
      if (!readme.includes(expectedStatusLine)) {
        findings.push({
          severity: "error",
          rule: "feature_readme_iam_status_mismatch",
          path: readmePath,
          product_slug: productSlug,
          feature_slug: featureSlug,
          expected: expectedStatusLine,
        });
      }

      if (status === "explicit") {
        const missingRoles = (iam.explicit_roles || [])
          .filter((role) => !readme.includes(`\`${role}\``));
        const missingPermissions = (iam.explicit_permissions || [])
          .map((permission) => permission?.permission)
          .filter(Boolean)
          .filter((permission) => !readme.includes(`\`${permission}\``));
        if (missingRoles.length > 0) {
          findings.push({
            severity: "error",
            rule: "feature_readme_missing_explicit_roles",
            path: readmePath,
            product_slug: productSlug,
            feature_slug: featureSlug,
            missing_roles: missingRoles,
          });
        }
        if (missingPermissions.length > 0) {
          findings.push({
            severity: "error",
            rule: "feature_readme_missing_explicit_permissions",
            path: readmePath,
            product_slug: productSlug,
            feature_slug: featureSlug,
            missing_permissions: missingPermissions,
          });
        }
      }

      if (status === "derived_from_permission_prefix") {
        const expectedText = "No explicit feature-level IAM statement was found.";
        if (!readme.includes(expectedText)) {
          findings.push({
            severity: "error",
            rule: "feature_readme_missing_derived_iam_qualifier",
            path: readmePath,
            product_slug: productSlug,
            feature_slug: featureSlug,
            expected: expectedText,
          });
        }
        const missingDerivedPermissions = (iam.derived_permissions || [])
          .slice(0, 20)
          .map((permission) => permission?.permission)
          .filter(Boolean)
          .filter((permission) => !readme.includes(`\`${permission}\``));
        if (missingDerivedPermissions.length > 0) {
          findings.push({
            severity: "error",
            rule: "feature_readme_missing_derived_permissions",
            path: readmePath,
            product_slug: productSlug,
            feature_slug: featureSlug,
            missing_permissions: missingDerivedPermissions,
          });
        }
      }

      if (status === "unknown") {
        const expectedText = "No defensible IAM mapping was found in the current evidence.";
        if (!readme.includes(expectedText)) {
          findings.push({
            severity: "error",
            rule: "feature_readme_missing_unknown_iam_qualifier",
            path: readmePath,
            product_slug: productSlug,
            feature_slug: featureSlug,
            expected: expectedText,
          });
        }
      }

      const securityCapabilities = Array.isArray(card?.security_capabilities) ? card.security_capabilities : [];
      if (securityCapabilities.length === 0) {
        const expectedText = "No security capability was identified from the current evidence.";
        if (!readme.includes(expectedText)) {
          findings.push({
            severity: "error",
            rule: "feature_readme_missing_no_security_capability_qualifier",
            path: readmePath,
            product_slug: productSlug,
            feature_slug: featureSlug,
            expected: expectedText,
          });
        }
      }
      for (const capability of securityCapabilities) {
        const capabilityName = capability?.capability;
        if (capabilityName && !readme.includes(capabilityName)) {
          findings.push({
            severity: "error",
            rule: "feature_readme_missing_security_capability",
            path: readmePath,
            product_slug: productSlug,
            feature_slug: featureSlug,
            capability: capabilityName,
          });
        }
        const missingEvidenceLinks = (capability?.evidence_links || [])
          .filter(isOfficialGoogleUrl)
          .filter((link) => !readme.includes(link));
        if (missingEvidenceLinks.length > 0) {
          findings.push({
            severity: "error",
            rule: "feature_readme_missing_security_evidence_links",
            path: readmePath,
            product_slug: productSlug,
            feature_slug: featureSlug,
            capability: capabilityName || null,
            missing_links: missingEvidenceLinks,
          });
        }
      }
    }
  }

  return findings;
}

async function validatePromotedCardsMatchStep08Cards() {
  const findings = [];
  const serviceFields = [
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
  const featureFields = [
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

  for (const productSlug of await listDirs(artifactsRoot)) {
    const step08CardPath = path.join(step08Root, "products", productSlug, "card.json");
    const step08Card = await readJson(step08CardPath, null);
    const serviceCardPath = path.join(artifactsRoot, productSlug, "card.json");
    const serviceCard = await readJson(serviceCardPath, null);
    const promotion = await readJson(path.join(artifactsRoot, productSlug, "promotion.json"), null);
    if (!step08Card || !serviceCard || !promotion) {
      continue;
    }

    for (const field of serviceFields) {
      const expected = step08Card.service_card?.[field];
      const actual = serviceCard[field];
      if (!jsonEquals(actual, expected)) {
        findings.push({
          severity: "error",
          rule: "promoted_service_card_step08_mismatch",
          path: serviceCardPath,
          product_slug: productSlug,
          field,
          expected,
          actual,
        });
      }
    }

    const step08Features = new Map((step08Card.features || []).map((feature) => [feature.feature_slug, feature]));
    for (const promotedFeature of promotionFeatureList(promotion, "promoted_features")) {
      const featureSlug = promotedFeature?.feature_slug;
      if (!featureSlug) {
        continue;
      }
      const step08Feature = step08Features.get(featureSlug);
      const featureCardPath = path.join(artifactsRoot, productSlug, featureSlug, "card.json");
      const featureCard = await readJson(featureCardPath, null);
      if (!step08Feature || !featureCard) {
        continue;
      }
      for (const field of featureFields) {
        const expected = step08Feature[field];
        const actual = featureCard[field];
        if (!jsonEquals(actual, expected)) {
          findings.push({
            severity: "error",
            rule: "promoted_feature_card_step08_mismatch",
            path: featureCardPath,
            product_slug: productSlug,
            feature_slug: featureSlug,
            field,
            expected,
            actual,
          });
        }
      }
    }
  }

  return findings;
}

async function validateRadarDoesNotReferenceDataSteps() {
  const findings = [];
  for (const file of await listFilesRecursive(radarRoot)) {
    if (!file.endsWith(".md") && !file.endsWith(".json")) {
      continue;
    }
    const content = await readText(file, "");
    if (/data\/step-\d\d|data\\step-\d\d/i.test(content)) {
      findings.push({ severity: "error", rule: "radar_references_intermediate_data", path: file });
    }
  }
  return findings;
}

async function validateRadarArtifactLinks() {
  const findings = [];
  for (const file of await listFilesRecursive(radarRoot)) {
    if (!file.endsWith(".md")) {
      continue;
    }
    const content = await readText(file, "");
    const linkPattern = /\[(?:\\.|[^\]\\])*\]\(([^)]+)\)/g;
    for (const match of content.matchAll(linkPattern)) {
      const rawLink = String(match[1] || "").trim();
      if (!rawLink || /^[a-z][a-z0-9+.-]*:/i.test(rawLink) || rawLink.startsWith("#")) {
        continue;
      }
      const targetWithoutAnchor = rawLink.split("#")[0];
      const resolved = path.resolve(path.dirname(file), decodeURIComponent(targetWithoutAnchor));
      const artifactRelativePath = path.relative(artifactsRoot, resolved);
      if (artifactRelativePath.startsWith("..") || path.isAbsolute(artifactRelativePath)) {
        continue;
      }
      if (!(await exists(resolved))) {
        findings.push({
          severity: "error",
          rule: "broken_radar_artifact_link",
          path: file,
          link: rawLink,
          resolved_path: resolved,
        });
      }
    }
  }
  return findings;
}

async function validateRadarExternalLinksAreOfficial() {
  const findings = [];

  for (const file of await listFilesRecursive(radarRoot)) {
    if (!file.endsWith(".md")) {
      continue;
    }
    const content = await readText(file, "");

    for (const link of collectExternalMarkdownUrls(content)) {
      if (!isOfficialGoogleUrl(link)) {
        findings.push({
          severity: "error",
          rule: "non_official_radar_external_link",
          path: file,
          link,
        });
      }
    }
  }

  return findings;
}

async function validateRadarIamTablesSeparateExplicitAndDerived() {
  const findings = [];
  const requiredHeaders = ["Explicit roles", "Explicit permissions", "Derived roles", "Derived permissions"];
  const reportFiles = [
    path.join(radarRoot, "iam", "index.md"),
    ...((await listFilesRecursive(path.join(radarRoot, "products")))
      .filter((file) => path.dirname(file) === path.join(radarRoot, "products"))
      .filter((file) => file.endsWith(".md"))),
  ];

  for (const file of reportFiles) {
    if (!(await exists(file))) {
      continue;
    }
    const content = await readText(file, "");
    for (const header of requiredHeaders) {
      if (!content.includes(header)) {
        findings.push({
          severity: "error",
          rule: "radar_iam_table_missing_explicit_derived_header",
          path: file,
          header,
        });
      }
    }
  }

  return findings;
}

async function validateRadarIamReportMatchesArtifacts() {
  const findings = [];
  const iamReportPath = path.join(radarRoot, "iam", "index.md");
  const iamReportDir = path.dirname(iamReportPath);
  if (!(await exists(iamReportPath))) {
    findings.push({
      severity: "error",
      rule: "missing_radar_iam_report",
      path: iamReportPath,
    });
    return findings;
  }

  const expectedRows = new Map();
  for (const productSlug of await listDirs(artifactsRoot)) {
    const productDir = path.join(artifactsRoot, productSlug);
    const promotion = await readJson(path.join(productDir, "promotion.json"), null);
    if (!promotion) {
      continue;
    }
    for (const feature of promotionFeatureList(promotion, "promoted_features")) {
      const featureSlug = feature?.feature_slug;
      if (!featureSlug) {
        continue;
      }
      const featureCard = await readJson(path.join(productDir, featureSlug, "card.json"), null);
      if (!featureCard) {
        continue;
      }
      const iam = featureCard.iam || {};
      const featureLink = relativeMarkdownPath(iamReportDir, path.join(productDir, featureSlug, "README.md"));
      expectedRows.set(featureLink, {
        product_name: promotion.product_name || productSlug,
        feature: expectedMarkdownLink(featureCard?.feature_name || featureSlug, featureLink),
        mapping: iam.iam_mapping_status || "unknown",
        explicit_roles: formatRolesForReportValidation(iam.explicit_roles),
        explicit_permissions: formatPermissionsForReportValidation(iam.explicit_permissions),
        derived_roles: formatRolesForReportValidation(iam.derived_roles),
        derived_permissions: formatPermissionsForReportValidation(iam.derived_permissions),
      });
    }
  }

  const report = await readText(iamReportPath, "");
  findings.push(...await validateRadarGeneratedAt(iamReportPath, report, "radar_iam_generated_at_mismatch"));
  const actualFeatureLinks = new Set();
  const staleFeatureLinks = new Set();
  const linkPattern = /\[(?:\\.|[^\]\\])*\]\(([^)]+)\)/g;
  for (const match of report.matchAll(linkPattern)) {
    const link = String(match[1] || "").trim().replace(/\\/g, "/").split("#")[0];
    if (!linkResolvesUnder(link, iamReportDir, artifactsRoot, "/README.md")) {
      continue;
    }
    if (expectedRows.has(link)) {
      actualFeatureLinks.add(link);
    } else {
      staleFeatureLinks.add(link);
    }
  }

  const rows = report
    .split(/\r?\n/)
    .filter((line) => line.trim().startsWith("|"))
    .map(splitMarkdownTableRow)
    .filter((cells) => cells.length > 0);
  const header = rows[0] || [];
  const expectedHeader = ["Product", "Feature", "Mapping", "Explicit roles", "Explicit permissions", "Derived roles", "Derived permissions"];
  if (expectedHeader.some((label, index) => header[index] !== label)) {
    findings.push({
      severity: "error",
      rule: "radar_iam_header_mismatch",
      path: iamReportPath,
      expected: expectedHeader,
      actual: header,
    });
    return findings;
  }

  const actualRows = new Map();
  for (const cells of rows.slice(2)) {
    if (cells.length < expectedHeader.length) {
      continue;
    }
    const featureLink = [...String(cells[1] || "").matchAll(linkPattern)]
      .map((match) => String(match[1] || "").trim().replace(/\\/g, "/").split("#")[0])
      .find((link) => linkResolvesUnder(link, iamReportDir, artifactsRoot, "/README.md"));
    if (!featureLink) {
      findings.push({
        severity: "error",
        rule: "radar_iam_row_missing_feature_link",
        path: iamReportPath,
        row: cells,
      });
      continue;
    }
    if (actualRows.has(featureLink)) {
      findings.push({
        severity: "error",
        rule: "radar_iam_duplicate_feature_row",
        path: iamReportPath,
        link: featureLink,
      });
    }
    actualRows.set(featureLink, {
      product_name: cells[0],
      feature: cells[1],
      mapping: cells[2],
      explicit_roles: cells[3],
      explicit_permissions: cells[4],
      derived_roles: cells[5],
      derived_permissions: cells[6],
    });
  }

  for (const link of expectedRows.keys()) {
    if (!actualFeatureLinks.has(link)) {
      findings.push({
        severity: "error",
        rule: "missing_radar_iam_feature_link",
        path: iamReportPath,
        link,
      });
    }
  }
  for (const [link, expected] of expectedRows) {
    const actual = actualRows.get(link);
    if (!actual) {
      findings.push({
        severity: "error",
        rule: "missing_radar_iam_feature_row",
        path: iamReportPath,
        link,
      });
      continue;
    }
    for (const field of ["product_name", "feature", "mapping", "explicit_roles", "explicit_permissions", "derived_roles", "derived_permissions"]) {
      if (actual[field] !== expected[field]) {
        findings.push({
          severity: "error",
          rule: "radar_iam_feature_row_mismatch",
          path: iamReportPath,
          link,
          field,
          expected: expected[field],
          actual: actual[field],
        });
      }
    }
  }
  for (const link of staleFeatureLinks) {
    findings.push({
      severity: "error",
      rule: "stale_radar_iam_feature_link",
      path: iamReportPath,
      link,
    });
  }

  return findings;
}

async function validateRadarServicesReportMatchesArtifacts() {
  const findings = [];
  const servicesReportPath = path.join(radarRoot, "services", "index.md");
  const servicesReportDir = path.dirname(servicesReportPath);
  if (!(await exists(servicesReportPath))) {
    findings.push({
      severity: "error",
      rule: "missing_radar_services_report",
      path: servicesReportPath,
    });
    return findings;
  }

  const expectedRows = new Map();
  for (const productSlug of await listDirs(artifactsRoot)) {
    const promotion = await readJson(path.join(artifactsRoot, productSlug, "promotion.json"), null);
    if (!promotion) {
      continue;
    }
    const serviceCard = await readJson(path.join(artifactsRoot, productSlug, "card.json"), null);
    const iam = serviceCard?.iam_status_counts || {};
    const serviceLink = relativeMarkdownPath(servicesReportDir, path.join(artifactsRoot, productSlug, "card.json"));
    expectedRows.set(serviceLink, {
      service: expectedMarkdownLink(promotion.product_name || productSlug, serviceLink),
      status: serviceCard?.validation?.product_status || promotion.product_status || "unknown",
      features: Number(serviceCard?.feature_count || promotion.promoted_feature_count || 0),
      latest_feature: serviceCard?.lifecycle?.latest_feature_date || "unknown",
      explicit_iam: Number(iam.explicit || 0),
      derived_iam: Number(iam.derived_from_permission_prefix || 0),
      unknown_iam: Number(iam.unknown || 0),
      sources: formatSourcesForReportValidation(serviceCard?.official_source_links || []) || "none",
    });
  }

  const report = await readText(servicesReportPath, "");
  findings.push(...await validateRadarGeneratedAt(servicesReportPath, report, "radar_services_generated_at_mismatch"));
  const expectedServiceLinks = new Set([...expectedRows.keys()].sort());
  const actualServiceLinks = new Set();
  const staleServiceLinks = new Set();
  const reportLinks = new Set();
  const linkPattern = /\[(?:\\.|[^\]\\])*\]\(([^)]+)\)/g;

  for (const match of report.matchAll(linkPattern)) {
    const link = String(match[1] || "").trim().replace(/\\/g, "/").split("#")[0];
    reportLinks.add(link);
    if (!linkResolvesUnder(link, servicesReportDir, artifactsRoot, "/card.json")) {
      continue;
    }
    if (expectedRows.has(link)) {
      actualServiceLinks.add(link);
    } else {
      staleServiceLinks.add(link);
    }
  }

  const rows = report
    .split(/\r?\n/)
    .filter((line) => line.trim().startsWith("|"))
    .map(splitMarkdownTableRow)
    .filter((cells) => cells.length > 0);
  const header = rows[0] || [];
  const expectedHeader = ["Service", "Status", "Features", "Latest feature", "Explicit IAM", "Derived IAM", "Unknown IAM", "Official sources"];
  if (expectedHeader.some((label, index) => header[index] !== label)) {
    findings.push({
      severity: "error",
      rule: "radar_services_header_mismatch",
      path: servicesReportPath,
      expected: expectedHeader,
      actual: header,
    });
    return findings;
  }

  const actualRows = new Map();
  for (const cells of rows.slice(2)) {
    if (cells.length < expectedHeader.length) {
      continue;
    }
    const serviceLink = [...String(cells[0] || "").matchAll(linkPattern)]
      .map((match) => String(match[1] || "").trim().replace(/\\/g, "/").split("#")[0])
      .find((link) => linkResolvesUnder(link, servicesReportDir, artifactsRoot, "/card.json"));
    if (!serviceLink) {
      findings.push({
        severity: "error",
        rule: "radar_services_row_missing_service_link",
        path: servicesReportPath,
        row: cells,
      });
      continue;
    }
    if (actualRows.has(serviceLink)) {
      findings.push({
        severity: "error",
        rule: "radar_services_duplicate_service_row",
        path: servicesReportPath,
        link: serviceLink,
      });
    }
    actualRows.set(serviceLink, {
      service: cells[0],
      status: cells[1],
      features: parseIntegerCell(cells[2]),
      latest_feature: cells[3],
      explicit_iam: parseIntegerCell(cells[4]),
      derived_iam: parseIntegerCell(cells[5]),
      unknown_iam: parseIntegerCell(cells[6]),
      sources: cells[7],
    });
  }

  for (const link of expectedServiceLinks) {
    if (!actualServiceLinks.has(link)) {
      findings.push({
        severity: "error",
        rule: "missing_radar_service_artifact_link",
        path: servicesReportPath,
        link,
      });
    }
  }
  for (const link of staleServiceLinks) {
    findings.push({
      severity: "error",
      rule: "stale_radar_service_artifact_link",
      path: servicesReportPath,
      link,
    });
  }
  for (const [link, expected] of expectedRows) {
    const actual = actualRows.get(link);
    if (!actual) {
      findings.push({
        severity: "error",
        rule: "missing_radar_services_row",
        path: servicesReportPath,
        link,
      });
      continue;
    }
    for (const field of ["service", "status", "features", "latest_feature", "explicit_iam", "derived_iam", "unknown_iam", "sources"]) {
      if (actual[field] !== expected[field]) {
        findings.push({
          severity: "error",
          rule: "radar_services_row_mismatch",
          path: servicesReportPath,
          link,
          field,
          expected: expected[field],
          actual: actual[field],
        });
      }
    }
  }
  for (const link of actualRows.keys()) {
    if (!expectedRows.has(link)) {
      findings.push({
        severity: "error",
        rule: "stale_radar_services_row",
        path: servicesReportPath,
        link,
      });
    }
  }
  for (const productSlug of await listDirs(artifactsRoot)) {
    const promotion = await readJson(path.join(artifactsRoot, productSlug, "promotion.json"), null);
    if (!promotion) {
      continue;
    }
    const serviceCardPath = path.join(artifactsRoot, productSlug, "card.json");
    const serviceCard = await readJson(serviceCardPath, null);
    const officialSourceLinks = (serviceCard?.official_source_links || []).filter(isOfficialGoogleUrl);
    if (officialSourceLinks.length === 0) {
      continue;
    }
    if (!officialSourceLinks.some((link) => reportLinks.has(link))) {
      findings.push({
        severity: "error",
        rule: "missing_radar_service_evidence_link",
        path: servicesReportPath,
        product_slug: productSlug,
        expected_one_of: officialSourceLinks,
      });
    }
  }

  return findings;
}

async function validateRadarSecurityReportMatchesArtifacts() {
  const findings = [];
  const securityReportPath = path.join(radarRoot, "security", "index.md");
  const securityReportDir = path.dirname(securityReportPath);
  if (!(await exists(securityReportPath))) {
    findings.push({
      severity: "error",
      rule: "missing_radar_security_report",
      path: securityReportPath,
    });
    return findings;
  }

  const expectedFeatureLinks = new Map();
  for (const productSlug of await listDirs(artifactsRoot)) {
    const productDir = path.join(artifactsRoot, productSlug);
    const promotion = await readJson(path.join(productDir, "promotion.json"), null);
    if (!promotion) {
      continue;
    }
    for (const feature of promotionFeatureList(promotion, "promoted_features")) {
      const featureSlug = feature?.feature_slug;
      if (!featureSlug) {
        continue;
      }
      const featureCardPath = path.join(productDir, featureSlug, "card.json");
      const featureCard = await readJson(featureCardPath, null);
      const capabilities = featureCard?.security_capabilities || [];
      if (capabilities.length === 0) {
        continue;
      }
      const featureLink = relativeMarkdownPath(securityReportDir, path.join(productDir, featureSlug, "README.md"));
      expectedFeatureLinks.set(featureLink, {
        product_name: promotion.product_name || productSlug,
        product_slug: productSlug,
        feature_slug: featureSlug,
        feature: expectedMarkdownLink(featureCard?.feature_name || featureSlug, featureLink),
        capabilities: formatSecurityCapabilitiesForReportValidation(capabilities),
        evidence: formatSourcesForReportValidation([...new Set(capabilities.flatMap((capability) => capability.evidence_links || []))], 4),
        evidence_links: [...new Set(capabilities.flatMap((capability) => capability.evidence_links || []))]
          .filter(isOfficialGoogleUrl),
      });
    }
  }

  const report = await readText(securityReportPath, "");
  findings.push(...await validateRadarGeneratedAt(securityReportPath, report, "radar_security_generated_at_mismatch"));
  const actualFeatureLinks = new Set();
  const staleFeatureLinks = new Set();
  const reportLinks = new Set();
  const linkPattern = /\[(?:\\.|[^\]\\])*\]\(([^)]+)\)/g;

  for (const match of report.matchAll(linkPattern)) {
    const link = String(match[1] || "").trim().replace(/\\/g, "/").split("#")[0];
    reportLinks.add(link);
    if (!linkResolvesUnder(link, securityReportDir, artifactsRoot, "/README.md")) {
      continue;
    }
    if (expectedFeatureLinks.has(link)) {
      actualFeatureLinks.add(link);
    } else {
      staleFeatureLinks.add(link);
    }
  }

  const rows = report
    .split(/\r?\n/)
    .filter((line) => line.trim().startsWith("|"))
    .map(splitMarkdownTableRow)
    .filter((cells) => cells.length > 0);
  const header = rows[0] || [];
  const expectedHeader = ["Product", "Feature", "Capabilities", "Evidence"];
  if (expectedHeader.some((label, index) => header[index] !== label)) {
    findings.push({
      severity: "error",
      rule: "radar_security_header_mismatch",
      path: securityReportPath,
      expected: expectedHeader,
      actual: header,
    });
    return findings;
  }

  const actualRows = new Map();
  for (const cells of rows.slice(2)) {
    if (cells.length < expectedHeader.length) {
      continue;
    }
    const featureLink = [...String(cells[1] || "").matchAll(linkPattern)]
      .map((match) => String(match[1] || "").trim().replace(/\\/g, "/").split("#")[0])
      .find((link) => linkResolvesUnder(link, securityReportDir, artifactsRoot, "/README.md"));
    if (!featureLink) {
      findings.push({
        severity: "error",
        rule: "radar_security_row_missing_feature_link",
        path: securityReportPath,
        row: cells,
      });
      continue;
    }
    if (actualRows.has(featureLink)) {
      findings.push({
        severity: "error",
        rule: "radar_security_duplicate_feature_row",
        path: securityReportPath,
        link: featureLink,
      });
    }
    actualRows.set(featureLink, {
      product_name: cells[0],
      feature: cells[1],
      capabilities: cells[2],
      evidence: cells[3],
    });
  }

  for (const [link, expected] of expectedFeatureLinks) {
    if (!actualFeatureLinks.has(link)) {
      findings.push({
        severity: "error",
        rule: "missing_radar_security_feature_link",
        path: securityReportPath,
        product_slug: expected.product_slug,
        feature_slug: expected.feature_slug,
        link,
      });
    }
    if (expected.evidence_links.length > 0 && !expected.evidence_links.some((evidenceLink) => reportLinks.has(evidenceLink))) {
      findings.push({
        severity: "error",
        rule: "missing_radar_security_evidence_link",
        path: securityReportPath,
        product_slug: expected.product_slug,
        feature_slug: expected.feature_slug,
        expected_one_of: expected.evidence_links,
      });
    }
    const actual = actualRows.get(link);
    if (!actual) {
      findings.push({
        severity: "error",
        rule: "missing_radar_security_feature_row",
        path: securityReportPath,
        product_slug: expected.product_slug,
        feature_slug: expected.feature_slug,
        link,
      });
      continue;
    }
    for (const field of ["product_name", "feature", "capabilities", "evidence"]) {
      if (actual[field] !== expected[field]) {
        findings.push({
          severity: "error",
          rule: "radar_security_feature_row_mismatch",
          path: securityReportPath,
          product_slug: expected.product_slug,
          feature_slug: expected.feature_slug,
          link,
          field,
          expected: expected[field],
          actual: actual[field],
        });
      }
    }
  }
  for (const link of staleFeatureLinks) {
    findings.push({
      severity: "error",
      rule: "stale_radar_security_feature_link",
      path: securityReportPath,
      link,
    });
  }
  for (const link of actualRows.keys()) {
    if (!expectedFeatureLinks.has(link)) {
      findings.push({
        severity: "error",
        rule: "stale_radar_security_feature_row",
        path: securityReportPath,
        link,
      });
    }
  }

  return findings;
}

async function validateRadarRootIndexMatchesArtifacts() {
  const findings = [];
  const rootIndexPath = path.join(radarRoot, "index.md");
  const rootIndexDir = path.dirname(rootIndexPath);
  if (!(await exists(rootIndexPath))) {
    findings.push({
      severity: "error",
      rule: "missing_radar_root_index",
      path: rootIndexPath,
    });
    return findings;
  }

  const artifactProductSlugs = new Set();
  const expectedPromotedFeatureCountByProduct = new Map();
  const expectedRows = new Map();
  for (const productSlug of await listDirs(artifactsRoot)) {
    const promotion = await readJson(path.join(artifactsRoot, productSlug, "promotion.json"), null);
    if (promotion) {
      const serviceCard = await readJson(path.join(artifactsRoot, productSlug, "card.json"), null);
      artifactProductSlugs.add(productSlug);
      expectedPromotedFeatureCountByProduct.set(productSlug, promotionFeatureList(promotion, "promoted_features").length);
      expectedRows.set(`./products/${productSlug}.md`, {
        product_name: promotion.product_name || productSlug,
        features: promotionFeatureList(promotion, "promoted_features").length,
        latest_feature: serviceCard?.lifecycle?.latest_feature_date || "unknown",
        service_card: relativeMarkdownPath(rootIndexDir, path.join(artifactsRoot, productSlug, "card.json")),
      });
    }
  }

  const report = await readText(rootIndexPath, "");
  const step10Index = await readJson(path.join(step10Root, "index.json"), null);
  if (step10Index?.generated_at) {
    const expectedGeneratedAt = `Generated at: \`${step10Index.generated_at}\``;
    if (!report.includes(expectedGeneratedAt)) {
      findings.push({
        severity: "error",
        rule: "radar_root_generated_at_mismatch",
        path: rootIndexPath,
        expected: expectedGeneratedAt,
      });
    }
  }
  const expectedFeatureCount = [...artifactProductSlugs].reduce((sum, productSlug) => {
    return sum + expectedPromotedFeatureCountByProduct.get(productSlug);
  }, 0);
  const summaryExpectations = [
    ["Service cards", artifactProductSlugs.size],
    ["Promoted features", expectedFeatureCount],
  ];
  for (const [label, expected] of summaryExpectations) {
    const match = report.match(new RegExp(`^- ${label}:\\s*(\\d+)\\s*$`, "m"));
    if (!match) {
      findings.push({
        severity: "error",
        rule: "missing_radar_root_summary_count",
        path: rootIndexPath,
        summary_label: label,
        expected,
      });
      continue;
    }
    const actual = Number(match[1]);
    if (actual !== expected) {
      findings.push({
        severity: "error",
        rule: "radar_root_summary_count_mismatch",
        path: rootIndexPath,
        summary_label: label,
        expected,
        actual,
      });
    }
  }
  const expectedProductReportLinks = new Set(
    [...artifactProductSlugs].sort().map((productSlug) => `./products/${productSlug}.md`)
  );
  const expectedServiceCardLinks = new Set(
    [...artifactProductSlugs].sort().map((productSlug) => relativeMarkdownPath(rootIndexDir, path.join(artifactsRoot, productSlug, "card.json")))
  );
  const actualProductReportLinks = new Set();
  const actualServiceCardLinks = new Set();
  const staleProductReportLinks = new Set();
  const staleServiceCardLinks = new Set();
  const productReportLinkCounts = new Map();
  const serviceCardLinkCounts = new Map();
  const linkPattern = /\[(?:\\.|[^\]\\])*\]\(([^)]+)\)/g;

  for (const match of report.matchAll(linkPattern)) {
    const link = String(match[1] || "").trim().replace(/\\/g, "/").split("#")[0];
    if (link.startsWith("./products/") && link.endsWith(".md")) {
      productReportLinkCounts.set(link, (productReportLinkCounts.get(link) || 0) + 1);
      if (expectedProductReportLinks.has(link)) {
        actualProductReportLinks.add(link);
      } else {
        staleProductReportLinks.add(link);
      }
    }
    if (linkResolvesUnder(link, rootIndexDir, artifactsRoot, "/card.json")) {
      serviceCardLinkCounts.set(link, (serviceCardLinkCounts.get(link) || 0) + 1);
      if (expectedServiceCardLinks.has(link)) {
        actualServiceCardLinks.add(link);
      } else {
        staleServiceCardLinks.add(link);
      }
    }
  }

  const rows = report
    .split(/\r?\n/)
    .filter((line) => line.trim().startsWith("|"))
    .map(splitMarkdownTableRow)
    .filter((cells) => cells.length > 0);
  const header = rows[0] || [];
  const expectedHeader = ["Service", "Features", "Latest feature", "Report", "Service card"];
  if (expectedHeader.some((label, index) => header[index] !== label)) {
    findings.push({
      severity: "error",
      rule: "radar_root_product_header_mismatch",
      path: rootIndexPath,
      expected: expectedHeader,
      actual: header,
    });
  }

  const actualRows = new Map();
  for (const cells of rows.slice(2)) {
    if (cells.length < expectedHeader.length) {
      continue;
    }
    const productReportLink = [...String(cells[3] || "").matchAll(linkPattern)]
      .map((match) => String(match[1] || "").trim().replace(/\\/g, "/").split("#")[0])
      .find((link) => link.startsWith("./products/") && link.endsWith(".md"));
    const serviceCardLink = [...String(cells[4] || "").matchAll(linkPattern)]
      .map((match) => String(match[1] || "").trim().replace(/\\/g, "/").split("#")[0])
      .find((link) => linkResolvesUnder(link, rootIndexDir, artifactsRoot, "/card.json"));
    if (!productReportLink) {
      findings.push({
        severity: "error",
        rule: "radar_root_product_row_missing_report_link",
        path: rootIndexPath,
        row: cells,
      });
      continue;
    }
    if (actualRows.has(productReportLink)) {
      findings.push({
        severity: "error",
        rule: "radar_root_duplicate_product_row",
        path: rootIndexPath,
        link: productReportLink,
      });
    }
    actualRows.set(productReportLink, {
      product_name: cells[0],
      features: parseIntegerCell(cells[1]),
      latest_feature: cells[2],
      service_card: serviceCardLink || "",
    });
  }

  for (const link of expectedProductReportLinks) {
    if (!actualProductReportLinks.has(link)) {
      findings.push({
        severity: "error",
        rule: "missing_radar_root_product_report_link",
        path: rootIndexPath,
        link,
      });
    }
  }
  for (const link of staleProductReportLinks) {
    findings.push({
      severity: "error",
      rule: "stale_radar_root_product_report_link",
      path: rootIndexPath,
      link,
    });
  }
  for (const link of expectedServiceCardLinks) {
    if (!actualServiceCardLinks.has(link)) {
      findings.push({
        severity: "error",
        rule: "missing_radar_root_service_card_link",
        path: rootIndexPath,
        link,
      });
    }
  }
  for (const link of staleServiceCardLinks) {
    findings.push({
      severity: "error",
      rule: "stale_radar_root_service_card_link",
      path: rootIndexPath,
      link,
    });
  }
  for (const [link, count] of productReportLinkCounts) {
    if (expectedProductReportLinks.has(link) && count > 1) {
      findings.push({
        severity: "error",
        rule: "duplicate_radar_root_product_report_link",
        path: rootIndexPath,
        link,
        count,
      });
    }
  }
  for (const [link, count] of serviceCardLinkCounts) {
    if (expectedServiceCardLinks.has(link) && count > 1) {
      findings.push({
        severity: "error",
        rule: "duplicate_radar_root_service_card_link",
        path: rootIndexPath,
        link,
        count,
      });
    }
  }
  for (const [link, expected] of expectedRows) {
    const actual = actualRows.get(link);
    if (!actual) {
      findings.push({
        severity: "error",
        rule: "missing_radar_root_product_row",
        path: rootIndexPath,
        link,
      });
      continue;
    }
    for (const field of ["product_name", "features", "latest_feature", "service_card"]) {
      if (actual[field] !== expected[field]) {
        findings.push({
          severity: "error",
          rule: "radar_root_product_row_mismatch",
          path: rootIndexPath,
          link,
          field,
          expected: expected[field],
          actual: actual[field],
        });
      }
    }
  }
  for (const link of actualRows.keys()) {
    if (!expectedRows.has(link)) {
      findings.push({
        severity: "error",
        rule: "stale_radar_root_product_row",
        path: rootIndexPath,
        link,
      });
    }
  }

  return findings;
}

function splitMarkdownTableRow(line) {
  const trimmed = String(line || "").trim();
  if (!trimmed.startsWith("|") || !trimmed.endsWith("|")) {
    return [];
  }
  const cells = [];
  let cell = "";
  const body = trimmed.slice(1, -1);
  for (let index = 0; index < body.length; index += 1) {
    const char = body[index];
    if (char === "\\" && body[index + 1] === "|") {
      cell += "|";
      index += 1;
      continue;
    }
    if (char === "|") {
      cells.push(cell.trim());
      cell = "";
      continue;
    }
    cell += char;
  }
  cells.push(cell.trim());
  return cells;
}

function formatRolesForReportValidation(roles, limit = 8) {
  return (roles || [])
    .slice(0, limit)
    .map((role) => `\`${role}\``)
    .join("<br>") || "none";
}

function formatPermissionsForReportValidation(permissions, limit = 8) {
  return (permissions || [])
    .slice(0, limit)
    .map((permission) => `\`${permission.permission}\``)
    .join("<br>") || "none";
}

function formatSourcesForReportValidation(sources, limit = 3) {
  return (sources || [])
    .slice(0, limit)
    .map((url) => `[source](${url})`)
    .join("<br>");
}

function formatSecurityCapabilitiesForReportValidation(capabilities) {
  return (capabilities || [])
    .map((capability) => capability.capability)
    .join(", ");
}

function parseIntegerCell(value) {
  const parsed = Number(String(value || "").trim());
  return Number.isInteger(parsed) ? parsed : null;
}

async function validateRadarCoverageReportMatchesArtifacts() {
  const findings = [];
  const coverageReportPath = path.join(radarRoot, "coverage.md");
  if (!(await exists(coverageReportPath))) {
    findings.push({
      severity: "error",
      rule: "missing_radar_coverage_report",
      path: coverageReportPath,
    });
    return findings;
  }

  const expectedRows = new Map();
  for (const productSlug of await listDirs(artifactsRoot)) {
    const productDir = path.join(artifactsRoot, productSlug);
    const promotion = await readJson(path.join(productDir, "promotion.json"), null);
    if (!promotion) {
      continue;
    }
    const featureSlugs = promotionFeatureList(promotion, "promoted_features")
      .map((feature) => feature?.feature_slug)
      .filter(Boolean);
    let explicit = 0;
    let derived = 0;
    let unknown = 0;
    for (const featureSlug of featureSlugs) {
      const featureCard = await readJson(path.join(productDir, featureSlug, "card.json"), null);
      const status = featureCard?.iam?.iam_mapping_status || "unknown";
      if (status === "explicit") {
        explicit += 1;
      } else if (status === "derived_from_permission_prefix") {
        derived += 1;
      } else {
        unknown += 1;
      }
    }
    expectedRows.set(productSlug, {
      product_name: promotion.product_name || productSlug,
      promoted: featureSlugs.length,
      skipped: Number(promotion.skipped_feature_count || 0),
      explicit,
      derived,
      unknown,
    });
  }

  const coverageMarkdown = await readText(coverageReportPath, "");
  const step10Index = await readJson(path.join(step10Root, "index.json"), null);
  if (step10Index?.generated_at) {
    const expectedGeneratedAt = `Generated at: \`${step10Index.generated_at}\``;
    if (!coverageMarkdown.includes(expectedGeneratedAt)) {
      findings.push({
        severity: "error",
        rule: "radar_coverage_generated_at_mismatch",
        path: coverageReportPath,
        expected: expectedGeneratedAt,
      });
    }
  }
  const rows = coverageMarkdown
    .split(/\r?\n/)
    .filter((line) => line.trim().startsWith("|"))
    .map(splitMarkdownTableRow)
    .filter((cells) => cells.length > 0);
  const header = rows[0] || [];
  const expectedHeader = ["Product", "Slug", "Promoted", "Skipped", "Explicit IAM", "Derived IAM", "Unknown IAM"];
  if (expectedHeader.some((label, index) => header[index] !== label)) {
    findings.push({
      severity: "error",
      rule: "radar_coverage_header_mismatch",
      path: coverageReportPath,
      expected: expectedHeader,
      actual: header,
    });
    return findings;
  }

  const actualRows = new Map();
  let previousProductSlug = "";
  for (const cells of rows.slice(2)) {
    if (cells.length < expectedHeader.length) {
      continue;
    }
    const productSlug = cells[1];
    if (!productSlug) {
      findings.push({
        severity: "error",
        rule: "radar_coverage_missing_product_slug",
        path: coverageReportPath,
        row: cells,
      });
      continue;
    }
    if (previousProductSlug && previousProductSlug.localeCompare(productSlug) > 0) {
      findings.push({
        severity: "error",
        rule: "radar_coverage_product_rows_not_sorted",
        path: coverageReportPath,
        previous_product_slug: previousProductSlug,
        product_slug: productSlug,
      });
    }
    previousProductSlug = productSlug;
    if (actualRows.has(productSlug)) {
      findings.push({
        severity: "error",
        rule: "radar_coverage_duplicate_product_slug",
        path: coverageReportPath,
        product_slug: productSlug,
      });
    }
    actualRows.set(productSlug, {
      product_name: cells[0],
      promoted: parseIntegerCell(cells[2]),
      skipped: parseIntegerCell(cells[3]),
      explicit: parseIntegerCell(cells[4]),
      derived: parseIntegerCell(cells[5]),
      unknown: parseIntegerCell(cells[6]),
    });
  }

  for (const [productSlug, expected] of expectedRows) {
    const actual = actualRows.get(productSlug);
    if (!actual) {
      findings.push({
        severity: "error",
        rule: "missing_radar_coverage_product_row",
        path: coverageReportPath,
        product_slug: productSlug,
      });
      continue;
    }
    for (const field of ["promoted", "skipped", "explicit", "derived", "unknown"]) {
      if (actual[field] !== expected[field]) {
        findings.push({
          severity: "error",
          rule: "radar_coverage_count_mismatch",
          path: coverageReportPath,
          product_slug: productSlug,
          field,
          expected: expected[field],
          actual: actual[field],
        });
      }
    }
    if (actual.product_name !== expected.product_name) {
      findings.push({
        severity: "error",
        rule: "radar_coverage_product_name_mismatch",
        path: coverageReportPath,
        product_slug: productSlug,
        expected: expected.product_name,
        actual: actual.product_name,
      });
    }
  }

  for (const productSlug of actualRows.keys()) {
    if (!expectedRows.has(productSlug)) {
      findings.push({
        severity: "error",
        rule: "stale_radar_coverage_product_row",
        path: coverageReportPath,
        product_slug: productSlug,
      });
    }
  }

  return findings;
}

async function validateStep09IndexMatchesArtifacts() {
  const findings = [];
  const step09IndexPath = path.join(step09Root, "index.json");
  const step09Index = await readJson(step09IndexPath, null);
  if (!step09Index) {
    findings.push({ severity: "error", rule: "missing_step09_index", path: step09IndexPath });
    return findings;
  }

  if (step09Index.schema_version !== expectedStep09SchemaVersion) {
    findings.push({
      severity: "error",
      rule: "step09_index_schema_version_mismatch",
      path: step09IndexPath,
      expected: expectedStep09SchemaVersion,
      actual: step09Index.schema_version || null,
    });
  }
  findings.push(...validateGeneratedAtField(step09Index, step09IndexPath, "step09_index"));
  if (!Array.isArray(step09Index.accepted_warning_rules)) {
    findings.push({
      severity: "error",
      rule: "step09_index_accepted_warning_rules_not_array",
      path: step09IndexPath,
      actual_type: step09Index.accepted_warning_rules === null ? "null" : typeof step09Index.accepted_warning_rules,
    });
  } else {
    findings.push(...validateAcceptedWarningRulesArray(
      step09Index.accepted_warning_rules,
      step09IndexPath,
      "step09_index"
    ));
    const seenAcceptedWarningRules = new Set();
    let previousAcceptedWarningRule = "";
    for (const rule of stringArray(step09Index.accepted_warning_rules)) {
      if (seenAcceptedWarningRules.has(rule)) {
        findings.push({
          severity: "error",
          rule: "step09_index_duplicate_accepted_warning_rule",
          path: step09IndexPath,
          warning_rule: rule,
        });
      }
      seenAcceptedWarningRules.add(rule);
      if (previousAcceptedWarningRule && previousAcceptedWarningRule.localeCompare(rule) > 0) {
        findings.push({
          severity: "error",
          rule: "step09_index_accepted_warning_rules_not_sorted",
          path: step09IndexPath,
          previous_warning_rule: previousAcceptedWarningRule,
          warning_rule: rule,
        });
      }
      previousAcceptedWarningRule = rule;
    }
  }

  const expectedArtifactsRoot = path.relative(process.cwd(), artifactsRoot).replace(/\\/g, "/") || ".";
  const actualArtifactsRoot = String(step09Index.artifacts_root || "").replace(/\\/g, "/");
  if (actualArtifactsRoot !== expectedArtifactsRoot) {
    findings.push({
      severity: "error",
      rule: "step09_index_artifacts_root_mismatch",
      path: step09IndexPath,
      expected: expectedArtifactsRoot,
      actual: actualArtifactsRoot || null,
    });
  }

  const expectedStep08Root = path.relative(process.cwd(), step08Root).replace(/\\/g, "/") || ".";
  const actualStep08Root = String(step09Index.source_step08_root || "").replace(/\\/g, "/");
  if (actualStep08Root !== expectedStep08Root) {
    findings.push({
      severity: "error",
      rule: "step09_index_step08_root_mismatch",
      path: step09IndexPath,
      expected: expectedStep08Root,
      actual: actualStep08Root || null,
    });
  }

  const expectedProducts = new Map();
  let latestPromotion = null;
  let latestPromotionPath = "";
  for (const productSlug of await listDirs(artifactsRoot)) {
    const promotionPath = path.join(artifactsRoot, productSlug, "promotion.json");
    const promotion = await readJson(promotionPath, null);
    if (!promotion) {
      continue;
    }
    if (isIsoTimestamp(promotion.generated_at) && (!latestPromotion || Date.parse(promotion.generated_at) > Date.parse(latestPromotion.generated_at))) {
      latestPromotion = promotion;
      latestPromotionPath = promotionPath;
    }
    expectedProducts.set(productSlug, {
      product_name: promotion.product_name || productSlug,
      service_card: relativeToCwd(path.join(artifactsRoot, productSlug, "card.json")),
      product_index: relativeToCwd(path.join(artifactsRoot, productSlug, "index.md")),
      promotion_json: relativeToCwd(path.join(artifactsRoot, productSlug, "promotion.json")),
      promoted_feature_count: Number(promotion.promoted_feature_count || 0),
      skipped_feature_count: Number(promotion.skipped_feature_count || 0),
    });
  }
  if (latestPromotion) {
    findings.push(...validateGeneratedAtNotBefore(step09Index, latestPromotion, step09IndexPath, "step09_index_generated_at_before_promotion_manifest", {
      reference_path: latestPromotionPath,
    }));
  }

  const indexProducts = Array.isArray(step09Index.products) ? step09Index.products : [];
  if (!Array.isArray(step09Index.products)) {
    findings.push({
      severity: "error",
      rule: "step09_index_products_not_array",
      path: step09IndexPath,
      actual_type: step09Index.products === null ? "null" : typeof step09Index.products,
    });
  }

  const actualProducts = new Map();
  let previousIndexProductSlug = "";
  for (const product of indexProducts) {
    const productSlug = product?.product_slug;
    if (!productSlug) {
      findings.push({ severity: "error", rule: "step09_index_product_missing_slug", path: step09IndexPath });
      continue;
    }
    if (actualProducts.has(productSlug)) {
      findings.push({
        severity: "error",
        rule: "step09_index_duplicate_product",
        path: step09IndexPath,
        product_slug: productSlug,
      });
    }
    actualProducts.set(productSlug, product);
    if (previousIndexProductSlug && previousIndexProductSlug.localeCompare(productSlug) > 0) {
      findings.push({
        severity: "error",
        rule: "step09_index_products_not_sorted",
        path: step09IndexPath,
        previous_product_slug: previousIndexProductSlug,
        product_slug: productSlug,
      });
    }
    previousIndexProductSlug = productSlug;
  }

  if (step09Index.product_count !== expectedProducts.size) {
    findings.push({
      severity: "error",
      rule: "step09_product_count_mismatch",
      path: step09IndexPath,
      expected: expectedProducts.size,
      actual: step09Index.product_count,
    });
  }

  const expectedPromotedFeatureCount = [...expectedProducts.values()]
    .reduce((sum, product) => sum + product.promoted_feature_count, 0);
  const expectedSkippedFeatureCount = [...expectedProducts.values()]
    .reduce((sum, product) => sum + product.skipped_feature_count, 0);
  if (step09Index.promoted_feature_count !== expectedPromotedFeatureCount) {
    findings.push({
      severity: "error",
      rule: "step09_promoted_feature_count_mismatch",
      path: step09IndexPath,
      expected: expectedPromotedFeatureCount,
      actual: step09Index.promoted_feature_count,
    });
  }
  if (step09Index.skipped_feature_count !== expectedSkippedFeatureCount) {
    findings.push({
      severity: "error",
      rule: "step09_skipped_feature_count_mismatch",
      path: step09IndexPath,
      expected: expectedSkippedFeatureCount,
      actual: step09Index.skipped_feature_count,
    });
  }

  const processedProducts = step09Index.processed_products;
  if (!Array.isArray(processedProducts)) {
    findings.push({
      severity: "error",
      rule: "step09_index_processed_products_not_array",
      path: step09IndexPath,
      actual_type: processedProducts === null ? "null" : typeof processedProducts,
    });
  }
  const actualProcessedProducts = Array.isArray(processedProducts)
    ? processedProducts.map((productSlug) => String(productSlug).replace(/\\/g, "/"))
    : [];
  const seenProcessedProducts = new Set();
  let previousProcessedProduct = "";
  for (const productSlug of actualProcessedProducts) {
    if (seenProcessedProducts.has(productSlug)) {
      findings.push({
        severity: "error",
        rule: "step09_index_duplicate_processed_product",
        path: step09IndexPath,
        product_slug: productSlug,
      });
    }
    seenProcessedProducts.add(productSlug);
    if (previousProcessedProduct && previousProcessedProduct.localeCompare(productSlug) > 0) {
      findings.push({
        severity: "error",
        rule: "step09_index_processed_products_not_sorted",
        path: step09IndexPath,
        previous_product_slug: previousProcessedProduct,
        product_slug: productSlug,
      });
    }
    previousProcessedProduct = productSlug;
    if (!(await exists(path.join(step08Root, "products", productSlug, "card.json")))) {
      findings.push({
        severity: "error",
        rule: "step09_index_processed_product_missing_step08_card",
        path: step09IndexPath,
        product_slug: productSlug,
      });
    }
  }
  if (step09Index.processed_product_count !== actualProcessedProducts.length) {
    findings.push({
      severity: "error",
      rule: "step09_processed_product_count_mismatch",
      path: step09IndexPath,
      expected: actualProcessedProducts.length,
      actual: step09Index.processed_product_count,
    });
  }
  const expectedStaleFeatureArtifactDirCount = indexProducts
    .reduce((sum, product) => sum + Number(product?.stale_feature_artifact_dir_count || 0), 0);
  if (Number(step09Index.stale_feature_artifact_dir_count || 0) !== expectedStaleFeatureArtifactDirCount) {
    findings.push({
      severity: "error",
      rule: "step09_stale_feature_artifact_dir_count_mismatch",
      path: step09IndexPath,
      expected: expectedStaleFeatureArtifactDirCount,
      actual: step09Index.stale_feature_artifact_dir_count,
    });
  }

  for (const product of indexProducts) {
    const productSlug = product?.product_slug;
    if (!productSlug) {
      continue;
    }
    const staleDirs = product.stale_feature_artifact_dirs_removed;
    if (!Array.isArray(staleDirs)) {
      findings.push({
        severity: "error",
        rule: "step09_index_stale_feature_artifact_dirs_removed_not_array",
        path: step09IndexPath,
        product_slug: productSlug,
        actual_type: staleDirs === null ? "null" : typeof staleDirs,
      });
      continue;
    }
    if (Number(product.stale_feature_artifact_dir_count || 0) !== staleDirs.length) {
      findings.push({
        severity: "error",
        rule: "step09_index_product_stale_feature_artifact_dir_count_mismatch",
        path: step09IndexPath,
        product_slug: productSlug,
        expected: staleDirs.length,
        actual: product.stale_feature_artifact_dir_count,
      });
    }
    const seenStaleDirs = new Set();
    let previousStaleDir = "";
    for (const staleDirValue of staleDirs) {
      const staleDir = String(staleDirValue || "").replace(/\\/g, "/");
      const expectedPrefix = `${relativeToCwd(path.join(artifactsRoot, productSlug))}/`;
      if (seenStaleDirs.has(staleDir)) {
        findings.push({
          severity: "error",
          rule: "step09_index_duplicate_stale_feature_artifact_dir",
          path: step09IndexPath,
          product_slug: productSlug,
          stale_feature_artifact_dir: staleDir,
        });
      }
      seenStaleDirs.add(staleDir);
      if (previousStaleDir && previousStaleDir.localeCompare(staleDir) > 0) {
        findings.push({
          severity: "error",
          rule: "step09_index_stale_feature_artifact_dirs_removed_not_sorted",
          path: step09IndexPath,
          product_slug: productSlug,
          previous_stale_feature_artifact_dir: previousStaleDir,
          stale_feature_artifact_dir: staleDir,
        });
      }
      previousStaleDir = staleDir;
      if (!staleDir.startsWith(expectedPrefix) || staleDir.split("/").length !== 3) {
        findings.push({
          severity: "error",
          rule: "step09_index_stale_feature_artifact_dir_path_mismatch",
          path: step09IndexPath,
          product_slug: productSlug,
          expected_prefix: expectedPrefix,
          actual: staleDir || null,
        });
        continue;
      }
      if (await exists(path.resolve(process.cwd(), staleDir))) {
        findings.push({
          severity: "error",
          rule: "step09_index_removed_stale_feature_artifact_dir_still_exists",
          path: step09IndexPath,
          product_slug: productSlug,
          stale_feature_artifact_dir: staleDir,
        });
      }
    }
  }

  for (const [productSlug, expected] of expectedProducts) {
    const actual = actualProducts.get(productSlug);
    if (!actual) {
      findings.push({
        severity: "error",
        rule: "step09_index_missing_product",
        path: step09IndexPath,
        product_slug: productSlug,
      });
      continue;
    }
    for (const field of ["service_card", "product_index", "promotion_json"]) {
      const actualPath = String(actual[field] || "").replace(/\\/g, "/");
      if (actualPath !== expected[field]) {
        findings.push({
          severity: "error",
          rule: "step09_index_product_path_mismatch",
          path: step09IndexPath,
          product_slug: productSlug,
          field,
          expected: expected[field],
          actual: actualPath || null,
        });
      }
    }
    if (actual.product_name !== expected.product_name) {
      findings.push({
        severity: "error",
        rule: "step09_index_product_name_mismatch",
        path: step09IndexPath,
        product_slug: productSlug,
        expected: expected.product_name,
        actual: actual.product_name || null,
      });
    }
    for (const field of ["promoted_feature_count", "skipped_feature_count"]) {
      if (Number(actual[field] || 0) !== expected[field]) {
        findings.push({
          severity: "error",
          rule: "step09_index_product_count_mismatch",
          path: step09IndexPath,
          product_slug: productSlug,
          field,
          expected: expected[field],
          actual: actual[field],
        });
      }
    }
  }

  for (const productSlug of actualProducts.keys()) {
    if (!expectedProducts.has(productSlug)) {
      findings.push({
        severity: "error",
        rule: "step09_index_stale_product",
        path: step09IndexPath,
        product_slug: productSlug,
      });
    }
  }

  return findings;
}

async function validateStep08IndexMatchesCards() {
  const findings = [];
  const step08IndexPath = path.join(step08Root, "index.json");
  const step08Index = await readJson(step08IndexPath, null);
  if (!step08Index) {
    findings.push({ severity: "error", rule: "missing_step08_index", path: step08IndexPath });
    return findings;
  }

  if (step08Index.schema_version !== expectedStep08SchemaVersion) {
    findings.push({
      severity: "error",
      rule: "step08_index_schema_version_mismatch",
      path: step08IndexPath,
      expected: expectedStep08SchemaVersion,
      actual: step08Index.schema_version || null,
    });
  }
  findings.push(...validateGeneratedAtField(step08Index, step08IndexPath, "step08_index"));

  const expectedOutputRoot = path.relative(process.cwd(), step08Root).replace(/\\/g, "/") || ".";
  const actualOutputRoot = String(step08Index.output_root || "").replace(/\\/g, "/");
  if (actualOutputRoot !== expectedOutputRoot) {
    findings.push({
      severity: "error",
      rule: "step08_index_output_root_mismatch",
      path: step08IndexPath,
      expected: expectedOutputRoot,
      actual: actualOutputRoot || null,
    });
  }

  const expectedInputRoots = {
    step02: path.relative(process.cwd(), step02Root).replace(/\\/g, "/") || ".",
    step04: path.relative(process.cwd(), step04Root).replace(/\\/g, "/") || ".",
    step05: path.relative(process.cwd(), step05Root).replace(/\\/g, "/") || ".",
    step06: path.relative(process.cwd(), step06Root).replace(/\\/g, "/") || ".",
    step07: path.relative(process.cwd(), step07Root).replace(/\\/g, "/") || ".",
  };
  if (!step08Index.input_roots || Array.isArray(step08Index.input_roots) || typeof step08Index.input_roots !== "object") {
    findings.push({
      severity: "error",
      rule: "step08_index_input_roots_not_object",
      path: step08IndexPath,
      actual_type: step08Index.input_roots === null ? "null" : typeof step08Index.input_roots,
    });
  } else {
    const expectedInputRootKeys = Object.keys(expectedInputRoots).sort((left, right) => left.localeCompare(right));
    const actualInputRootKeys = Object.keys(step08Index.input_roots).sort((left, right) => left.localeCompare(right));
    for (const key of actualInputRootKeys) {
      if (!expectedInputRoots[key]) {
        findings.push({
          severity: "error",
          rule: "step08_index_unknown_input_root",
          path: step08IndexPath,
          input_root: key,
        });
      }
    }
    for (const key of expectedInputRootKeys) {
      const actualInputRoot = String(step08Index.input_roots[key] || "").replace(/\\/g, "/");
      if (actualInputRoot !== expectedInputRoots[key]) {
        findings.push({
          severity: "error",
          rule: "step08_index_input_root_mismatch",
          path: step08IndexPath,
          input_root: key,
          expected: expectedInputRoots[key],
          actual: actualInputRoot || null,
        });
      }
    }
  }

  const productEntries = Array.isArray(step08Index.products) ? step08Index.products : [];
  if (!Array.isArray(step08Index.products)) {
    findings.push({
      severity: "error",
      rule: "step08_index_products_not_array",
      path: step08IndexPath,
      actual_type: step08Index.products === null ? "null" : typeof step08Index.products,
    });
  }

  const actualProducts = new Map();
  const seenProducts = new Set();
  let previousIndexProductSlug = "";
  for (const product of productEntries) {
    const productSlug = product?.product_slug;
    if (!productSlug) {
      findings.push({ severity: "error", rule: "step08_index_product_missing_slug", path: step08IndexPath });
      continue;
    }
    if (seenProducts.has(productSlug)) {
      findings.push({ severity: "error", rule: "step08_index_duplicate_product", path: step08IndexPath, product_slug: productSlug });
    }
    seenProducts.add(productSlug);
    actualProducts.set(productSlug, product);
    if (previousIndexProductSlug && previousIndexProductSlug.localeCompare(productSlug) > 0) {
      findings.push({
        severity: "error",
        rule: "step08_index_products_not_sorted",
        path: step08IndexPath,
        previous_product_slug: previousIndexProductSlug,
        product_slug: productSlug,
      });
    }
    previousIndexProductSlug = productSlug;
  }

  const expectedProducts = new Map();
  let expectedFeatureCount = 0;
  let expectedExplicitIamFeatureCount = 0;
  let expectedDerivedIamFeatureCount = 0;
  let expectedUnknownIamFeatureCount = 0;
  let latestStep08ProductCard = null;

  for (const productSlug of await listDirs(path.join(step08Root, "products"))) {
    const cardPath = path.join(step08Root, "products", productSlug, "card.json");
    const cardMarkdownPath = path.join(step08Root, "products", productSlug, "card.md");
    const card = await readJson(cardPath, null);
    if (!card) {
      findings.push({ severity: "error", rule: "step08_product_card_missing", path: cardPath, product_slug: productSlug });
      continue;
    }
    if (!(await exists(cardMarkdownPath))) {
      findings.push({
        severity: "error",
        rule: "step08_product_card_markdown_missing",
        path: cardMarkdownPath,
        product_slug: productSlug,
      });
    } else {
      const cardMarkdown = await readText(cardMarkdownPath, "");
      findings.push(...validateStep08ProductMarkdownAgainstCard(productSlug, cardMarkdownPath, cardMarkdown, card));
    }
    findings.push(...validateGeneratedAtField(card, cardPath, "step08_product_card", { product_slug: productSlug }));
    if (isIsoTimestamp(card.generated_at) && (!latestStep08ProductCard || Date.parse(card.generated_at) > Date.parse(latestStep08ProductCard.generated_at))) {
      latestStep08ProductCard = {
        generated_at: card.generated_at,
        path: cardPath,
        product_slug: productSlug,
      };
    }
    if (card.schema_version !== expectedStep08SchemaVersion) {
      findings.push({
        severity: "error",
        rule: "step08_product_card_schema_version_mismatch",
        path: cardPath,
        product_slug: productSlug,
        expected: expectedStep08SchemaVersion,
        actual: card.schema_version || null,
      });
    }
    findings.push(...validateStep08CardOfficialLinks(productSlug, cardPath, card));

    const features = Array.isArray(card.features) ? card.features : [];
    const seenFeatureSlugs = new Set();
    for (const feature of features) {
      const featureSlug = feature?.feature_slug;
      if (!featureSlug) {
        findings.push({
          severity: "error",
          rule: "step08_card_feature_missing_slug",
          path: cardPath,
          product_slug: productSlug,
        });
        continue;
      }
      if (seenFeatureSlugs.has(featureSlug)) {
        findings.push({
          severity: "error",
          rule: "step08_card_duplicate_feature_slug",
          path: cardPath,
          product_slug: productSlug,
          feature_slug: featureSlug,
        });
      }
      seenFeatureSlugs.add(featureSlug);
      findings.push(...validateIamMappingStatus(feature, cardPath, "step08_card_feature_invalid_iam_mapping_status", {
        product_slug: productSlug,
        feature_slug: featureSlug,
      }));
    }
    const explicitCount = features.filter((feature) => feature.iam?.iam_mapping_status === "explicit").length;
    const derivedCount = features.filter((feature) => feature.iam?.iam_mapping_status === "derived_from_permission_prefix").length;
    const unknownCount = features.filter((feature) => feature.iam?.iam_mapping_status === "unknown").length;
    const statusCounts = {
      explicit_feature_count: explicitCount,
      derived_feature_count: derivedCount,
      unknown_feature_count: unknownCount,
    };

    if (card.product_slug !== productSlug) {
      findings.push({
        severity: "error",
        rule: "step08_card_product_slug_mismatch",
        path: cardPath,
        expected: productSlug,
        actual: card.product_slug || null,
      });
    }
    if (card.feature_count !== features.length) {
      findings.push({
        severity: "error",
        rule: "step08_card_feature_count_mismatch",
        path: cardPath,
        product_slug: productSlug,
        expected: features.length,
        actual: card.feature_count,
      });
    }
    const serviceCard = card.service_card || {};
    const securityCapabilities = Array.isArray(serviceCard.security_capabilities)
      ? serviceCard.security_capabilities
      : [];
    const serviceCardChecks = [
      {
        field: "service_slug",
        rule: "step08_service_card_slug_mismatch",
        expected: productSlug,
        actual: serviceCard.service_slug || null,
      },
      {
        field: "service_name",
        rule: "step08_service_card_name_mismatch",
        expected: card.product_name || "",
        actual: serviceCard.service_name || null,
      },
      {
        field: "feature_count",
        rule: "step08_service_card_feature_count_mismatch",
        expected: features.length,
        actual: serviceCard.feature_count ?? null,
      },
      {
        field: "generated_at",
        rule: "step08_service_card_generated_at_mismatch",
        expected: card.generated_at || "",
        actual: serviceCard.generated_at || null,
      },
      {
        field: "security_capability_count",
        rule: "step08_service_card_security_capability_count_mismatch",
        expected: securityCapabilities.length,
        actual: serviceCard.security_capability_count ?? null,
      },
    ];
    for (const check of serviceCardChecks) {
      if (check.actual !== check.expected) {
        findings.push({
          severity: "error",
          rule: check.rule,
          path: cardPath,
          product_slug: productSlug,
          field: check.field,
          expected: check.expected,
          actual: check.actual,
        });
      }
    }
    for (const [field, expected] of Object.entries(statusCounts)) {
      if (Number(card.iam_summary?.[field] || 0) !== expected) {
        findings.push({
          severity: "error",
          rule: "step08_card_iam_summary_mismatch",
          path: cardPath,
          product_slug: productSlug,
          field,
          expected,
          actual: card.iam_summary?.[field] ?? null,
        });
      }
    }
    const serviceIam = card.service_card?.iam_status_counts || {};
    const serviceStatusCounts = {
      explicit: explicitCount,
      derived_from_permission_prefix: derivedCount,
      unknown: unknownCount,
    };
    for (const [field, expected] of Object.entries(serviceStatusCounts)) {
      if (Number(serviceIam[field] || 0) !== expected) {
        findings.push({
          severity: "error",
          rule: "step08_service_card_iam_count_mismatch",
          path: cardPath,
          product_slug: productSlug,
          field,
          expected,
          actual: serviceIam[field] ?? null,
        });
      }
    }

    expectedFeatureCount += features.length;
    expectedExplicitIamFeatureCount += explicitCount;
    expectedDerivedIamFeatureCount += derivedCount;
    expectedUnknownIamFeatureCount += unknownCount;
    expectedProducts.set(productSlug, {
      product_name: card.product_name,
      product_slug: productSlug,
      product_status: card.validation?.product_status || "",
      feature_count: features.length,
      explicit_iam_feature_count: explicitCount,
      derived_iam_feature_count: derivedCount,
      unknown_iam_feature_count: unknownCount,
      service_card_id: card.service_card?.service_card_id || "",
      card_json: relativeToCwd(cardPath),
      card_markdown: relativeToCwd(cardMarkdownPath),
    });
  }

  const expectedTotals = {
    product_count: expectedProducts.size,
    feature_count: expectedFeatureCount,
    explicit_iam_feature_count: expectedExplicitIamFeatureCount,
    derived_iam_feature_count: expectedDerivedIamFeatureCount,
    unknown_iam_feature_count: expectedUnknownIamFeatureCount,
  };
  for (const [field, expected] of Object.entries(expectedTotals)) {
    if (Number(step08Index[field] || 0) !== expected) {
      findings.push({
        severity: "error",
        rule: "step08_index_count_mismatch",
        path: step08IndexPath,
        field,
        expected,
        actual: step08Index[field] ?? null,
      });
    }
  }
  if (latestStep08ProductCard) {
    findings.push(...validateGeneratedAtNotBefore(step08Index, latestStep08ProductCard, step08IndexPath, "step08_index_generated_at_before_product_card", {
      product_slug: latestStep08ProductCard.product_slug,
      product_card_path: latestStep08ProductCard.path,
    }));
  }

  for (const [productSlug, expected] of expectedProducts) {
    const actual = actualProducts.get(productSlug);
    if (!actual) {
      findings.push({ severity: "error", rule: "step08_index_missing_product", path: step08IndexPath, product_slug: productSlug });
      continue;
    }
    for (const [field, expectedValue] of Object.entries(expected)) {
      const actualValue = String(actual[field] ?? "").replace(/\\/g, "/");
      if (String(expectedValue) !== actualValue) {
        findings.push({
          severity: "error",
          rule: "step08_index_product_field_mismatch",
          path: step08IndexPath,
          product_slug: productSlug,
          field,
          expected: expectedValue,
          actual: actual[field] ?? null,
        });
      }
    }
  }

  for (const productSlug of actualProducts.keys()) {
    if (!expectedProducts.has(productSlug)) {
      findings.push({ severity: "error", rule: "step08_index_stale_product", path: step08IndexPath, product_slug: productSlug });
    }
  }

  return findings;
}

async function validateRadarMatchesArtifacts() {
  const findings = [];
  const products = [];

  for (const productSlug of await listDirs(artifactsRoot)) {
    const promotionPath = path.join(artifactsRoot, productSlug, "promotion.json");
    const promotion = await readJson(promotionPath, null);
    if (!promotion) {
      continue;
    }
    const serviceCard = await readJson(path.join(artifactsRoot, productSlug, "card.json"), null);
    products.push({
      product_slug: productSlug,
      product_name: promotion.product_name || productSlug,
      skipped_feature_count: Number(promotion.skipped_feature_count || 0),
      latest_feature_date: serviceCard?.lifecycle?.latest_feature_date || "unknown",
      service_iam_status: JSON.stringify(serviceCard?.iam_status_counts || {}),
      feature_slugs: promotionFeatureList(promotion, "promoted_features")
        .map((feature) => feature?.feature_slug)
        .filter(Boolean)
        .sort((left, right) => left.localeCompare(right)),
    });
  }

  const artifactProductSlugs = new Set(products.map((product) => product.product_slug));
  const radarProductsDir = path.join(radarRoot, "products");
  const radarProductSlugs = new Set(
    (await listFilesRecursive(radarProductsDir))
      .filter((file) => path.dirname(file) === radarProductsDir)
      .filter((file) => file.endsWith(".md"))
      .map((file) => path.basename(file, ".md"))
  );

  for (const productSlug of artifactProductSlugs) {
    if (!radarProductSlugs.has(productSlug)) {
      findings.push({
        severity: "error",
        rule: "missing_radar_product_report",
        path: path.join(radarProductsDir, `${productSlug}.md`),
        product_slug: productSlug,
      });
    }
  }

  for (const productSlug of radarProductSlugs) {
    if (!artifactProductSlugs.has(productSlug)) {
      findings.push({
        severity: "error",
        rule: "stale_radar_product_report",
        path: path.join(radarProductsDir, `${productSlug}.md`),
        product_slug: productSlug,
      });
    }
  }

  for (const product of products) {
    const reportPath = path.join(radarProductsDir, `${product.product_slug}.md`);
    if (!(await exists(reportPath))) {
      continue;
    }
    const reportDir = path.dirname(reportPath);
    const report = await readText(reportPath, "");
    findings.push(...await validateRadarGeneratedAt(reportPath, report, "radar_product_generated_at_mismatch"));
    const expectedTitle = `# ${product.product_name}`;
    if (!report.includes(expectedTitle)) {
      findings.push({
        severity: "error",
        rule: "radar_product_title_mismatch",
        path: reportPath,
        product_slug: product.product_slug,
        expected: expectedTitle,
      });
    }
    const expectedFeatureLinks = new Set(product.feature_slugs.map((featureSlug) => relativeMarkdownPath(reportDir, path.join(artifactsRoot, product.product_slug, featureSlug, "README.md"))));
    const expectedServiceCardLink = relativeMarkdownPath(reportDir, path.join(artifactsRoot, product.product_slug, "card.json"));
    const expectedArtifactIndexLink = relativeMarkdownPath(reportDir, path.join(artifactsRoot, product.product_slug, "index.md"));
    const expectedFeatureRows = new Map();
    const actualFeatureLinks = new Set();
    const staleFeatureLinks = new Set();
    const linkPattern = /\[(?:\\.|[^\]\\])*\]\(([^)]+)\)/g;
    const reportLinks = new Set();
    const reportLinkCounts = new Map();
    for (const match of report.matchAll(linkPattern)) {
      const link = String(match[1] || "").trim().replace(/\\/g, "/").split("#")[0];
      reportLinks.add(link);
      reportLinkCounts.set(link, (reportLinkCounts.get(link) || 0) + 1);
      if (!linkResolvesUnder(link, reportDir, artifactsRoot, "/README.md")) {
        continue;
      }
      if (expectedFeatureLinks.has(link)) {
        actualFeatureLinks.add(link);
      } else {
        staleFeatureLinks.add(link);
      }
    }
    const rows = report
      .split(/\r?\n/)
      .filter((line) => line.trim().startsWith("|"))
      .map(splitMarkdownTableRow)
      .filter((cells) => cells.length > 0);
    const header = rows[0] || [];
    const expectedHeader = ["Feature", "IAM", "Explicit roles", "Explicit permissions", "Derived roles", "Derived permissions", "Coverage", "Official sources"];
    if (expectedHeader.some((label, index) => header[index] !== label)) {
      findings.push({
        severity: "error",
        rule: "radar_product_feature_header_mismatch",
        path: reportPath,
        product_slug: product.product_slug,
        expected: expectedHeader,
        actual: header,
      });
    }
    const summaryExpectations = [
      ["Promoted features", product.feature_slugs.length],
      ["Skipped features during promotion", product.skipped_feature_count],
      ["Latest feature date", product.latest_feature_date],
      ["Service IAM status", product.service_iam_status],
    ];
    for (const [label, expected] of summaryExpectations) {
      const match = report.match(new RegExp(`^- ${label}:\\s*(.+?)\\s*$`, "m"));
      if (!match) {
        findings.push({
          severity: "error",
          rule: "missing_radar_product_summary_count",
          path: reportPath,
          product_slug: product.product_slug,
          summary_label: label,
          expected,
        });
        continue;
      }
      const actual = typeof expected === "number" ? Number(match[1]) : match[1];
      if (actual !== expected) {
        findings.push({
          severity: "error",
          rule: "radar_product_summary_count_mismatch",
          path: reportPath,
          product_slug: product.product_slug,
          summary_label: label,
          expected,
          actual,
        });
      }
    }
    if (!reportLinks.has(expectedServiceCardLink)) {
      findings.push({
        severity: "error",
        rule: "missing_radar_product_service_card_link",
        path: reportPath,
        product_slug: product.product_slug,
        link: expectedServiceCardLink,
      });
    }
    if ((reportLinkCounts.get(expectedServiceCardLink) || 0) > 1) {
      findings.push({
        severity: "error",
        rule: "duplicate_radar_product_service_card_link",
        path: reportPath,
        product_slug: product.product_slug,
        link: expectedServiceCardLink,
        count: reportLinkCounts.get(expectedServiceCardLink),
      });
    }
    if (!reportLinks.has(expectedArtifactIndexLink)) {
      findings.push({
        severity: "error",
        rule: "missing_radar_product_artifact_index_link",
        path: reportPath,
        product_slug: product.product_slug,
        link: expectedArtifactIndexLink,
      });
    }
    if ((reportLinkCounts.get(expectedArtifactIndexLink) || 0) > 1) {
      findings.push({
        severity: "error",
        rule: "duplicate_radar_product_artifact_index_link",
        path: reportPath,
        product_slug: product.product_slug,
        link: expectedArtifactIndexLink,
        count: reportLinkCounts.get(expectedArtifactIndexLink),
      });
    }
    for (const link of expectedFeatureLinks) {
      if (!actualFeatureLinks.has(link)) {
        findings.push({
          severity: "error",
          rule: "missing_radar_feature_artifact_link",
          path: reportPath,
          product_slug: product.product_slug,
          link,
        });
      }
      if ((reportLinkCounts.get(link) || 0) > 1) {
        findings.push({
          severity: "error",
          rule: "duplicate_radar_feature_artifact_link",
          path: reportPath,
          product_slug: product.product_slug,
          link,
          count: reportLinkCounts.get(link),
        });
      }
    }
    for (const link of staleFeatureLinks) {
      findings.push({
        severity: "error",
        rule: "stale_radar_feature_artifact_link",
        path: reportPath,
        product_slug: product.product_slug,
        link,
      });
    }
    for (const featureSlug of product.feature_slugs) {
      const featureCardPath = path.join(artifactsRoot, product.product_slug, featureSlug, "card.json");
      const featureCard = await readJson(featureCardPath, null);
      const officialSourceLinks = (featureCard?.evidence?.source_links || []).filter(isOfficialGoogleUrl);
      const iam = featureCard?.iam || {};
      const featureLink = relativeMarkdownPath(reportDir, path.join(artifactsRoot, product.product_slug, featureSlug, "README.md"));
      expectedFeatureRows.set(featureLink, {
        feature: expectedMarkdownLink(featureCard?.feature_name || featureSlug, featureLink),
        iam: iam.iam_mapping_status || "unknown",
        explicit_roles: formatRolesForReportValidation(iam.explicit_roles),
        explicit_permissions: formatPermissionsForReportValidation(iam.explicit_permissions),
        derived_roles: formatRolesForReportValidation(iam.derived_roles),
        derived_permissions: formatPermissionsForReportValidation(iam.derived_permissions),
        coverage: featureCard?.coverage_status || "",
        sources: formatSourcesForReportValidation(featureCard?.evidence?.source_links || []),
      });
      if (officialSourceLinks.length === 0) {
        continue;
      }
      if (!officialSourceLinks.some((link) => reportLinks.has(link))) {
        findings.push({
          severity: "error",
          rule: "missing_radar_feature_evidence_link",
          path: reportPath,
          product_slug: product.product_slug,
          feature_slug: featureSlug,
          expected_one_of: officialSourceLinks,
        });
      }
    }
    const actualFeatureRows = new Map();
    for (const cells of rows.slice(2)) {
      if (cells.length < expectedHeader.length) {
        continue;
      }
      const featureLink = [...String(cells[0] || "").matchAll(linkPattern)]
        .map((match) => String(match[1] || "").trim().replace(/\\/g, "/").split("#")[0])
        .find((link) => linkResolvesUnder(link, reportDir, artifactsRoot, "/README.md"));
      if (!featureLink) {
        findings.push({
          severity: "error",
          rule: "radar_product_feature_row_missing_link",
          path: reportPath,
          product_slug: product.product_slug,
          row: cells,
        });
        continue;
      }
      if (actualFeatureRows.has(featureLink)) {
        findings.push({
          severity: "error",
          rule: "radar_product_duplicate_feature_row",
          path: reportPath,
          product_slug: product.product_slug,
          link: featureLink,
        });
      }
      actualFeatureRows.set(featureLink, {
        feature: cells[0],
        iam: cells[1],
        explicit_roles: cells[2],
        explicit_permissions: cells[3],
        derived_roles: cells[4],
        derived_permissions: cells[5],
        coverage: cells[6],
        sources: cells[7],
      });
    }
    for (const [link, expected] of expectedFeatureRows) {
      const actual = actualFeatureRows.get(link);
      if (!actual) {
        findings.push({
          severity: "error",
          rule: "missing_radar_product_feature_row",
          path: reportPath,
          product_slug: product.product_slug,
          link,
        });
        continue;
      }
      for (const field of ["feature", "iam", "explicit_roles", "explicit_permissions", "derived_roles", "derived_permissions", "coverage", "sources"]) {
        if (actual[field] !== expected[field]) {
          findings.push({
            severity: "error",
            rule: "radar_product_feature_row_mismatch",
            path: reportPath,
            product_slug: product.product_slug,
            link,
            field,
            expected: expected[field],
            actual: actual[field],
          });
        }
      }
    }
  }

  const step10IndexPath = path.join(step10Root, "index.json");
  const step10Index = await readJson(step10IndexPath, null);
  if (!step10Index) {
    findings.push({ severity: "error", rule: "missing_step10_index", path: step10IndexPath });
    return findings;
  }

  if (step10Index.schema_version !== expectedStep10SchemaVersion) {
    findings.push({
      severity: "error",
      rule: "step10_index_schema_version_mismatch",
      path: step10IndexPath,
      expected: expectedStep10SchemaVersion,
      actual: step10Index.schema_version || null,
    });
  }
  if (!step10Index.generated_at) {
    findings.push({
      severity: "error",
      rule: "step10_index_generated_at_missing",
      path: step10IndexPath,
    });
  } else if (!isIsoTimestamp(step10Index.generated_at)) {
    findings.push({
      severity: "error",
      rule: "step10_index_generated_at_invalid",
      path: step10IndexPath,
      actual: step10Index.generated_at,
    });
  }
  const step09IndexPath = path.join(step09Root, "index.json");
  const step09Index = await readJson(step09IndexPath, null);
  if (step09Index) {
    findings.push(...validateGeneratedAtNotBefore(step10Index, step09Index, step10IndexPath, "step10_index_generated_at_before_step09_index", {
      reference_path: step09IndexPath,
    }));
  }

  const expectedArtifactsRoot = path.relative(process.cwd(), artifactsRoot).replace(/\\/g, "/") || ".";
  const expectedRadarRoot = path.relative(process.cwd(), radarRoot).replace(/\\/g, "/") || ".";
  const actualArtifactsRoot = String(step10Index.artifacts_root || "").replace(/\\/g, "/");
  const actualRadarRoot = String(step10Index.radar_root || "").replace(/\\/g, "/");
  if (actualArtifactsRoot !== expectedArtifactsRoot) {
    findings.push({
      severity: "error",
      rule: "step10_index_artifacts_root_mismatch",
      path: step10IndexPath,
      expected: expectedArtifactsRoot,
      actual: actualArtifactsRoot || null,
    });
  }
  if (actualRadarRoot !== expectedRadarRoot) {
    findings.push({
      severity: "error",
      rule: "step10_index_radar_root_mismatch",
      path: step10IndexPath,
      expected: expectedRadarRoot,
      actual: actualRadarRoot || null,
    });
  }

  const featureCount = products.reduce((sum, product) => sum + product.feature_slugs.length, 0);
  if (step10Index.product_count !== products.length) {
    findings.push({
      severity: "error",
      rule: "step10_product_count_mismatch",
      path: step10IndexPath,
      expected: products.length,
      actual: step10Index.product_count,
    });
  }
  if (step10Index.feature_count !== featureCount) {
    findings.push({
      severity: "error",
      rule: "step10_feature_count_mismatch",
      path: step10IndexPath,
      expected: featureCount,
      actual: step10Index.feature_count,
    });
  }

  const expectedFixedReports = {
    index: relativeToCwd(path.join(radarRoot, "index.md")),
    iam: relativeToCwd(path.join(radarRoot, "iam", "index.md")),
    security: relativeToCwd(path.join(radarRoot, "security", "index.md")),
    services: relativeToCwd(path.join(radarRoot, "services", "index.md")),
    coverage: relativeToCwd(path.join(radarRoot, "coverage.md")),
  };
  const expectedFixedReportCount = Object.keys(expectedFixedReports).length;
  const expectedReportKeys = new Set([...Object.keys(expectedFixedReports), "products"]);
  for (const reportKey of Object.keys(step10Index.reports || {}).sort((left, right) => left.localeCompare(right))) {
    if (!expectedReportKeys.has(reportKey)) {
      findings.push({
        severity: "error",
        rule: "step10_index_unknown_report_key",
        path: step10IndexPath,
        report_key: reportKey,
      });
    }
  }
  for (const [reportKey, expectedReport] of Object.entries(expectedFixedReports)) {
    const actualReport = step10Index.reports?.[reportKey]
      ? String(step10Index.reports[reportKey]).replace(/\\/g, "/")
      : "";
    if (actualReport !== expectedReport) {
      findings.push({
        severity: "error",
        rule: "step10_index_fixed_report_path_mismatch",
        path: step10IndexPath,
        report_key: reportKey,
        expected: expectedReport,
        actual: actualReport || null,
      });
      continue;
    }
    if (!(await exists(path.resolve(actualReport)))) {
      findings.push({
        severity: "error",
        rule: "step10_index_fixed_report_missing",
        path: step10IndexPath,
        report_key: reportKey,
        report: actualReport,
      });
    }
  }

  const expectedReports = new Set([...artifactProductSlugs].sort().map((productSlug) => relativeToCwd(path.join(radarRoot, "products", `${productSlug}.md`))));
  const productReports = step10Index.reports?.products;
  if (!Array.isArray(productReports)) {
    findings.push({
      severity: "error",
      rule: "step10_index_product_reports_not_array",
      path: step10IndexPath,
      actual_type: productReports === null ? "null" : typeof productReports,
    });
  }
  const actualProductReports = Array.isArray(productReports)
    ? productReports.map((report) => String(report).replace(/\\/g, "/"))
    : [];
  const actualReports = new Set(actualProductReports);
  const expectedProductReportCount = expectedReports.size;
  const expectedReportCount = expectedFixedReportCount + expectedProductReportCount;
  if (step10Index.fixed_report_count !== expectedFixedReportCount) {
    findings.push({
      severity: "error",
      rule: "step10_index_fixed_report_count_mismatch",
      path: step10IndexPath,
      expected: expectedFixedReportCount,
      actual: step10Index.fixed_report_count,
    });
  }
  if (step10Index.product_report_count !== expectedProductReportCount) {
    findings.push({
      severity: "error",
      rule: "step10_index_product_report_count_mismatch",
      path: step10IndexPath,
      expected: expectedProductReportCount,
      actual: step10Index.product_report_count,
    });
  }
  if (step10Index.report_count !== expectedReportCount) {
    findings.push({
      severity: "error",
      rule: "step10_index_report_count_mismatch",
      path: step10IndexPath,
      expected: expectedReportCount,
      actual: step10Index.report_count,
    });
  }
  const seenReports = new Set();
  let previousProductReportSlug = "";
  let previousProductReport = "";
  for (const report of actualProductReports) {
    if (seenReports.has(report)) {
      findings.push({
        severity: "error",
        rule: "step10_index_duplicate_product_report",
        path: step10IndexPath,
        report,
      });
    }
    seenReports.add(report);
    const productReportSlug = report.replace(/^radar\/products\//, "").replace(/\.md$/, "");
    if (previousProductReportSlug && previousProductReportSlug.localeCompare(productReportSlug) > 0) {
      findings.push({
        severity: "error",
        rule: "step10_index_product_reports_not_sorted",
        path: step10IndexPath,
        previous_report: previousProductReport,
        report,
      });
    }
    previousProductReportSlug = productReportSlug;
    previousProductReport = report;
  }
  for (const report of expectedReports) {
    if (!actualReports.has(report)) {
      findings.push({ severity: "error", rule: "step10_index_missing_product_report", path: step10IndexPath, report });
    }
  }
  for (const report of actualReports) {
    if (!expectedReports.has(report)) {
      findings.push({ severity: "error", rule: "step10_index_stale_product_report", path: step10IndexPath, report });
      continue;
    }
    if (!(await exists(path.resolve(report)))) {
      findings.push({
        severity: "error",
        rule: "step10_index_product_report_missing",
        path: step10IndexPath,
        report,
      });
    }
  }

  return findings;
}

async function main() {
  const [
    finalOutputDirectoryNameFindings,
    artifactValidation,
    artifactIndexFindings,
    artifactMarkdownExternalLinkFindings,
    step08MarkdownExternalLinkFindings,
    featureReadmeCardFindings,
    promotedCardSourceFindings,
    radarFindings,
    radarArtifactLinkFindings,
    radarExternalLinkFindings,
    radarIamTableFindings,
    radarIamReportFindings,
    radarServicesReportFindings,
    radarSecurityReportFindings,
    radarRootIndexFindings,
    radarCoverageReportFindings,
    step08IndexFindings,
    step09IndexFindings,
    radarArtifactFindings,
  ] = await Promise.all([
    validateFinalOutputDirectoryNamesAreLowercase(),
    validateArtifacts(),
    validateArtifactProductIndexes(),
    validateArtifactMarkdownExternalLinksAreOfficial(),
    validateStep08MarkdownExternalLinksAreOfficial(),
    validateFeatureReadmesMatchCards(),
    validatePromotedCardsMatchStep08Cards(),
    validateRadarDoesNotReferenceDataSteps(),
    validateRadarArtifactLinks(),
    validateRadarExternalLinksAreOfficial(),
    validateRadarIamTablesSeparateExplicitAndDerived(),
    validateRadarIamReportMatchesArtifacts(),
    validateRadarServicesReportMatchesArtifacts(),
    validateRadarSecurityReportMatchesArtifacts(),
    validateRadarRootIndexMatchesArtifacts(),
    validateRadarCoverageReportMatchesArtifacts(),
    validateStep08IndexMatchesCards(),
    validateStep09IndexMatchesArtifacts(),
    validateRadarMatchesArtifacts(),
  ]);
  const findings = [
    ...finalOutputDirectoryNameFindings,
    ...artifactValidation.findings,
    ...artifactIndexFindings,
    ...artifactMarkdownExternalLinkFindings,
    ...step08MarkdownExternalLinkFindings,
    ...featureReadmeCardFindings,
    ...promotedCardSourceFindings,
    ...radarFindings,
    ...radarArtifactLinkFindings,
    ...radarExternalLinkFindings,
    ...radarIamTableFindings,
    ...radarIamReportFindings,
    ...radarServicesReportFindings,
    ...radarSecurityReportFindings,
    ...radarRootIndexFindings,
    ...radarCoverageReportFindings,
    ...step08IndexFindings,
    ...step09IndexFindings,
    ...radarArtifactFindings,
  ];
  const payload = {
    schema_version: "final-output-validation-v1",
    generated_at: new Date().toISOString(),
    artifacts_root: path.relative(process.cwd(), artifactsRoot).replace(/\\/g, "/"),
    radar_root: path.relative(process.cwd(), radarRoot).replace(/\\/g, "/"),
    feature_count: artifactValidation.featureCount,
    finding_count: findings.length,
    status: findings.some((finding) => finding.severity === "error") ? "FAIL" : "PASS",
    findings,
  };
  await mkdir(path.dirname(outputFile), { recursive: true });
  await writeFile(outputFile, `${JSON.stringify(payload, null, 2)}\n`);
  console.log(JSON.stringify(payload, null, 2));
  if (payload.status !== "PASS") {
    process.exitCode = 1;
  }
}

await main();
