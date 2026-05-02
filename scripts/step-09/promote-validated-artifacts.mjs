#!/usr/bin/env zx

import { access, mkdir, readFile, readdir, rm, writeFile } from "node:fs/promises";
import path from "node:path";

const schemaVersion = "step-09-artifact-promotion-v1";
const step08Root = path.resolve(process.env.GCP_RADAR_STEP09_STEP08_ROOT || "data/step-08/current");
const artifactsRoot = path.resolve(process.env.GCP_RADAR_STEP09_ARTIFACTS_ROOT || "artifacts");
const outputRoot = path.resolve(process.env.GCP_RADAR_STEP09_OUTPUT_ROOT || "data/step-09/current");
const productFilter = (process.env.GCP_RADAR_STEP09_PRODUCTS || "")
  .split(",")
  .map((value) => value.trim().toLowerCase())
  .filter(Boolean);
const acceptedWarningRules = new Set((process.env.GCP_RADAR_STEP09_ACCEPTED_WARNING_RULES || [
  "coverage_low",
  "thin_token_overlap",
  "support_matrix_only_evidence",
  "missing_exact_identifier_page",
  "generic_supporting_pages",
].join(","))
  .split(",")
  .map((value) => value.trim())
  .filter(Boolean));
const cleanProductArtifacts = process.env.GCP_RADAR_STEP09_CLEAN_PRODUCT_ARTIFACTS === "1";

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
    source_step08_root: index.source_step08_root,
    artifacts_root: index.artifacts_root,
    product_count: index.product_count,
    promoted_feature_count: index.promoted_feature_count,
    skipped_feature_count: index.skipped_feature_count,
    processed_product_count: index.processed_product_count,
    stale_feature_artifact_dir_count: index.stale_feature_artifact_dir_count,
    index_json: path.posix.join(relativeToCwd(outputRoot), "index.json"),
  }, null, 2));
}

function relativeToCwd(target) {
  return path.relative(process.cwd(), target).replace(/\\/g, "/");
}

function markdownLink(label, target) {
  const escapedLabel = String(label || "").replace(/([\\[\]])/g, "\\$1");
  return `[${escapedLabel}](${target})`;
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

function isFeaturePromotable(feature) {
  const sourceLinks = feature?.evidence?.source_links || [];
  const findings = feature?.validation?.findings || [];
  const blockingWarnings = findings
    .filter((finding) => finding.severity === "warn")
    .filter((finding) => !acceptedWarningRules.has(finding.rule));

  if (!feature?.validation?.step07_pass) {
    return { promotable: false, reason: "step07_failure" };
  }
  if (feature.validation.fail_count > 0) {
    return { promotable: false, reason: "feature_has_failures" };
  }
  if (!String(feature.extended_definition || feature.summary || "").trim()) {
    return { promotable: false, reason: "missing_summary" };
  }
  if (sourceLinks.length === 0) {
    return { promotable: false, reason: "missing_source_links" };
  }
  if (!sourceLinks.every(isOfficialGoogleUrl)) {
    return { promotable: false, reason: "non_official_source_link" };
  }
  if (blockingWarnings.length > 0) {
    return { promotable: false, reason: "blocking_warning", blocking_warnings: blockingWarnings.map((finding) => finding.rule) };
  }
  return { promotable: true, reason: "promotable" };
}

function renderFeatureReadme(product, feature) {
  const lines = [
    `# ${feature.feature_name}`,
    "",
    `Product: ${product.product_name}`,
    `Feature slug: \`${feature.feature_slug}\``,
    `Coverage: \`${feature.coverage_status || "unknown"}\``,
    `IAM mapping: \`${feature.iam.iam_mapping_status}\``,
    "",
    "## Technical Summary",
    "",
    feature.extended_definition || feature.summary,
    "",
    "## Lifecycle",
    "",
    `- Latest feature date: ${feature.lifecycle.latest_feature_date || "unknown"}`,
    `- Deprecation date: ${feature.lifecycle.deprecation_date || "none recorded"}`,
    `- Status: ${feature.lifecycle.status}`,
    "",
    "## IAM",
    "",
  ];

  if (feature.iam.iam_mapping_status === "explicit") {
    lines.push("Explicit IAM evidence was found in the supporting documentation.", "");
    if (feature.iam.explicit_roles.length > 0) {
      lines.push("Roles:", "", ...feature.iam.explicit_roles.map((role) => `- \`${role}\``), "");
    }
    if (feature.iam.explicit_permissions.length > 0) {
      lines.push("Permissions:", "", ...feature.iam.explicit_permissions.map((permission) => `- \`${permission.permission}\``), "");
    }
  } else if (feature.iam.iam_mapping_status === "derived_from_permission_prefix") {
    lines.push("No explicit feature-level IAM statement was found. Related IAM data is derived from product permission prefixes in the Step 05 inventory.", "");
    if (feature.iam.derived_permissions.length > 0) {
      lines.push("Derived permissions:", "", ...feature.iam.derived_permissions.slice(0, 20).map((permission) => `- \`${permission.permission}\``), "");
    }
  } else {
    lines.push("No defensible IAM mapping was found in the current evidence.", "");
  }

  lines.push("## Security Capabilities", "");
  if (feature.security_capabilities.length === 0) {
    lines.push("No security capability was identified from the current evidence.", "");
  } else {
    for (const capability of feature.security_capabilities) {
      const evidenceLinks = (capability.evidence_links || [])
        .map((url) => markdownLink(url, url))
        .join(", ");
      const evidenceSuffix = evidenceLinks ? ` (evidence: ${evidenceLinks})` : "";
      lines.push(`- ${capability.capability}${evidenceSuffix}`);
    }
    lines.push("");
  }

  lines.push("## Official Evidence", "");
  for (const url of feature.evidence.source_links) {
    lines.push(`- ${markdownLink(url, url)}`);
  }

  if (feature.validation.findings.length > 0) {
    lines.push("", "## Validation Findings", "");
    for (const finding of feature.validation.findings) {
      lines.push(`- \`${finding.severity}:${finding.rule}\` ${finding.message || ""}`.trim());
    }
  }

  return `${lines.join("\n")}\n`;
}

function renderProductIndex(card, promotedFeatures, sourceStep08Card) {
  const lines = [
    `# ${card.product_name}`,
    "",
    `Service card: [card.json](./card.json)`,
    "",
    `Generated from Step 08 card: \`${sourceStep08Card}\``,
    "",
    "## Summary",
    "",
    `- Promoted features: ${promotedFeatures.length}`,
    `- Step 07 product status: ${card.validation.product_status}`,
    `- Corpus health: ${card.corpus.health_status || "unknown"}`,
    `- Latest feature date: ${card.service_card?.lifecycle?.latest_feature_date || "unknown"}`,
    `- Official source links: ${card.service_card?.official_source_links?.length || 0}`,
    "",
    "## Features",
    "",
  ];

  for (const feature of promotedFeatures) {
    lines.push(`- ${markdownLink(feature.feature_name, `./${feature.feature_slug}/README.md`)}`);
  }

  return `${lines.join("\n")}\n`;
}

async function listStep08Products() {
  const dir = path.join(step08Root, "products");
  if (!(await exists(dir))) {
    return [];
  }
  const entries = await readdir(dir, { withFileTypes: true });
  return entries
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .filter((slug) => productFilter.length === 0 || productFilter.includes(slug))
    .sort(compareStrings);
}

async function listArtifactProducts() {
  if (!(await exists(artifactsRoot))) {
    return [];
  }
  const entries = await readdir(artifactsRoot, { withFileTypes: true });
  return entries
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort(compareStrings);
}

async function readArtifactPromotionSummary(productSlug, processedProducts) {
  const productArtifactDir = path.join(artifactsRoot, productSlug);
  const promotionPath = path.join(productArtifactDir, "promotion.json");
  const promotion = await readJson(promotionPath, null);
  if (!promotion) {
    return null;
  }

  const processed = processedProducts.get(productSlug);
  return {
    product_name: promotion.product_name || productSlug,
    product_slug: productSlug,
    service_card: relativeToCwd(path.join(productArtifactDir, "card.json")),
    promoted_feature_count: Number(promotion.promoted_feature_count || 0),
    skipped_feature_count: Number(promotion.skipped_feature_count || 0),
    stale_feature_artifact_dir_count: processed?.stale_feature_artifact_dir_count || 0,
    stale_feature_artifact_dirs_removed: processed?.stale_feature_artifact_dirs_removed || [],
    product_index: relativeToCwd(path.join(productArtifactDir, "index.md")),
    promotion_json: relativeToCwd(promotionPath),
  };
}

async function promoteProduct(productSlug) {
  const cardPath = path.join(step08Root, "products", productSlug, "card.json");
  const card = await readJson(cardPath);
  if (!card) {
    return null;
  }

  const productArtifactDir = path.join(artifactsRoot, productSlug);
  if (cleanProductArtifacts) {
    await rm(productArtifactDir, { recursive: true, force: true });
  }
  await mkdir(productArtifactDir, { recursive: true });
  if (!card.service_card) {
    throw new Error(`Step 08 card for ${productSlug} does not contain service_card`);
  }

  const promotedFeatures = [];
  const skippedFeatures = [];
  const staleFeatureArtifactDirs = [];
  const generatedAt = new Date().toISOString();
  const serviceArtifactCard = {
    schema_version: schemaVersion,
    generated_at: generatedAt,
    source_step08_card: relativeToCwd(cardPath),
    product_name: card.product_name,
    product_slug: card.product_slug,
    ...card.service_card,
  };
  await writeJson(path.join(productArtifactDir, "card.json"), serviceArtifactCard);

  for (const feature of card.features || []) {
    const decision = isFeaturePromotable(feature);
    if (!decision.promotable) {
      skippedFeatures.push({
        feature_name: feature.feature_name,
        feature_slug: feature.feature_slug,
        reason: decision.reason,
        blocking_warnings: decision.blocking_warnings || [],
      });
      continue;
    }

    const featureDir = path.join(productArtifactDir, feature.feature_slug);
    await mkdir(featureDir, { recursive: true });
    const artifactCard = {
      schema_version: schemaVersion,
      generated_at: generatedAt,
      source_step08_card: relativeToCwd(cardPath),
      product_name: card.product_name,
      product_slug: card.product_slug,
      ...feature,
    };
    await writeJson(path.join(featureDir, "card.json"), artifactCard);
    await writeFile(path.join(featureDir, "README.md"), renderFeatureReadme(card, feature));
    promotedFeatures.push({
      feature_name: feature.feature_name,
      feature_slug: feature.feature_slug,
      artifact_readme: relativeToCwd(path.join(featureDir, "README.md")),
      artifact_card: relativeToCwd(path.join(featureDir, "card.json")),
    });
  }

  const promotedFeatureSlugs = new Set(promotedFeatures.map((feature) => feature.feature_slug));
  for (const entry of await readdir(productArtifactDir, { withFileTypes: true })) {
    if (!entry.isDirectory() || promotedFeatureSlugs.has(entry.name)) {
      continue;
    }
    const staleDir = path.join(productArtifactDir, entry.name);
    await rm(staleDir, { recursive: true, force: true });
    staleFeatureArtifactDirs.push(relativeToCwd(staleDir));
  }

  await writeFile(path.join(productArtifactDir, "index.md"), renderProductIndex(card, promotedFeatures, relativeToCwd(cardPath)));
  await writeJson(path.join(productArtifactDir, "promotion.json"), {
    schema_version: schemaVersion,
    generated_at: generatedAt,
    product_name: card.product_name,
    product_slug: card.product_slug,
    service_card: relativeToCwd(path.join(productArtifactDir, "card.json")),
    source_step08_card: relativeToCwd(cardPath),
    accepted_warning_rules: [...acceptedWarningRules].sort(compareStrings),
    promoted_feature_count: promotedFeatures.length,
    skipped_feature_count: skippedFeatures.length,
    stale_feature_artifact_dirs_removed: staleFeatureArtifactDirs,
    promoted_features: promotedFeatures,
    skipped_features: skippedFeatures,
  });

  return {
    product_name: card.product_name,
    product_slug: card.product_slug,
    service_card: relativeToCwd(path.join(productArtifactDir, "card.json")),
    promoted_feature_count: promotedFeatures.length,
    skipped_feature_count: skippedFeatures.length,
    stale_feature_artifact_dir_count: staleFeatureArtifactDirs.length,
    stale_feature_artifact_dirs_removed: staleFeatureArtifactDirs,
    product_index: relativeToCwd(path.join(productArtifactDir, "index.md")),
    promotion_json: relativeToCwd(path.join(productArtifactDir, "promotion.json")),
  };
}

async function main() {
  await mkdir(outputRoot, { recursive: true });
  const processedProducts = new Map();

  for (const productSlug of await listStep08Products()) {
    const result = await promoteProduct(productSlug);
    if (result) {
      processedProducts.set(productSlug, result);
    }
  }

  const products = [];
  for (const productSlug of await listArtifactProducts()) {
    const summary = await readArtifactPromotionSummary(productSlug, processedProducts);
    if (summary) {
      products.push(summary);
    }
  }

  const index = {
    schema_version: schemaVersion,
    generated_at: new Date().toISOString(),
    source_step08_root: relativeToCwd(step08Root),
    artifacts_root: relativeToCwd(artifactsRoot),
    accepted_warning_rules: [...acceptedWarningRules].sort(compareStrings),
    product_count: products.length,
    promoted_feature_count: products.reduce((sum, product) => sum + product.promoted_feature_count, 0),
    skipped_feature_count: products.reduce((sum, product) => sum + product.skipped_feature_count, 0),
    processed_product_count: processedProducts.size,
    processed_products: [...processedProducts.keys()].sort(compareStrings),
    stale_feature_artifact_dir_count: [...processedProducts.values()].reduce((sum, product) => sum + product.stale_feature_artifact_dir_count, 0),
    products,
  };

  await writeJson(path.join(outputRoot, "index.json"), index);
  printIndexSummary(index);
}

await main();
