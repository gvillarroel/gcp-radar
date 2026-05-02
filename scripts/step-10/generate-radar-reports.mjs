#!/usr/bin/env zx

import { access, mkdir, readFile, readdir, rm, writeFile } from "node:fs/promises";
import path from "node:path";

const schemaVersion = "step-10-radar-reports-v1";
const expectedStep09SchemaVersion = "step-09-artifact-promotion-v1";
const artifactsRoot = path.resolve(process.env.GCP_RADAR_STEP10_ARTIFACTS_ROOT || "artifacts");
const radarRoot = path.resolve(process.env.GCP_RADAR_STEP10_RADAR_ROOT || "radar");
const outputRoot = path.resolve(process.env.GCP_RADAR_STEP10_OUTPUT_ROOT || "data/step-10/current");
const step08Root = path.resolve(process.env.GCP_RADAR_STEP10_STEP08_ROOT || "data/step-08/current");

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
    artifacts_root: index.artifacts_root,
    radar_root: index.radar_root,
    product_count: index.product_count,
    feature_count: index.feature_count,
    index_json: path.posix.join(relativeToCwd(outputRoot), "index.json"),
    report_count: Object.values(index.reports).flat().length,
  }, null, 2));
}

function relativeToCwd(target) {
  return path.relative(process.cwd(), target).replace(/\\/g, "/");
}

function markdownTableRow(values) {
  return `| ${values.map((value) => String(value ?? "").replace(/\n/g, " ").replace(/\|/g, "\\|")).join(" | ")} |`;
}

function markdownLink(label, target) {
  const escapedLabel = String(label || "").replace(/([\\[\]])/g, "\\$1");
  return `[${escapedLabel}](${target})`;
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
    if (promotion.product_slug && promotion.product_slug !== productSlug) {
      errors.push(`Promotion manifest product_slug mismatch for ${productSlug}: expected ${productSlug}, got ${promotion.product_slug}`);
    }
    if (step08Card && promotion.product_name !== step08Card.product_name) {
      errors.push(`Promotion manifest product_name mismatch for ${productSlug}: expected ${step08Card.product_name}, got ${promotion.product_name || "missing"}`);
    }
    if (promotion.source_step08_card && String(promotion.source_step08_card).replace(/\\/g, "/") !== expectedSourceStep08Card) {
      errors.push(`Promotion manifest source_step08_card mismatch for ${productSlug}: expected ${expectedSourceStep08Card}, got ${promotion.source_step08_card}`);
    }
    if (!step08Card) {
      errors.push(`Missing Step 08 source card for ${productSlug}: ${expectedSourceStep08Card}`);
    }
    const expectedServiceCard = `artifacts/${productSlug}/card.json`;
    if (promotion.service_card && String(promotion.service_card).replace(/\\/g, "/") !== expectedServiceCard) {
      errors.push(`Promotion manifest service_card mismatch for ${productSlug}: expected ${expectedServiceCard}, got ${promotion.service_card}`);
    }
    const productIndexPath = path.join(productDir, "index.md");
    if (!(await exists(productIndexPath))) {
      errors.push(`Missing promoted product index for ${productSlug}: ${relativeToCwd(productIndexPath)}`);
    }
    const serviceCardPath = path.join(productDir, "card.json");
    const serviceCard = await readJson(serviceCardPath, null);
    if (!serviceCard) {
      errors.push(`Missing promoted service card for ${productSlug}: ${relativeToCwd(serviceCardPath)}`);
    } else {
      if (serviceCard.schema_version !== expectedStep09SchemaVersion) {
        errors.push(`Promoted service card schema_version mismatch for ${productSlug}: expected ${expectedStep09SchemaVersion}, got ${serviceCard.schema_version || "missing"}`);
      }
      if (serviceCard.product_slug && serviceCard.product_slug !== productSlug) {
        errors.push(`Promoted service card product_slug mismatch for ${productSlug}: expected ${productSlug}, got ${serviceCard.product_slug}`);
      }
      if (serviceCard.service_slug && serviceCard.service_slug !== productSlug) {
        errors.push(`Promoted service card service_slug mismatch for ${productSlug}: expected ${productSlug}, got ${serviceCard.service_slug}`);
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
    }
    const features = [];
    const promotedFeatures = [...(promotion.promoted_features || [])]
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
      const expectedFeatureReadme = `artifacts/${productSlug}/${feature.feature_slug}/README.md`;
      if (feature.artifact_readme && String(feature.artifact_readme).replace(/\\/g, "/") !== expectedFeatureReadme) {
        errors.push(`Promotion manifest artifact_readme mismatch for ${productSlug}/${feature.feature_slug}: expected ${expectedFeatureReadme}, got ${feature.artifact_readme}`);
      }
      const expectedFeatureCard = `artifacts/${productSlug}/${feature.feature_slug}/card.json`;
      if (feature.artifact_card && String(feature.artifact_card).replace(/\\/g, "/") !== expectedFeatureCard) {
        errors.push(`Promotion manifest artifact_card mismatch for ${productSlug}/${feature.feature_slug}: expected ${expectedFeatureCard}, got ${feature.artifact_card}`);
      }
      const featureReadmePath = path.join(productDir, feature.feature_slug, "README.md");
      if (!(await exists(featureReadmePath))) {
        errors.push(`Missing promoted feature README for ${productSlug}/${feature.feature_slug}: ${relativeToCwd(featureReadmePath)}`);
      }
      const featureCardPath = path.join(productDir, feature.feature_slug, "card.json");
      const card = await readJson(featureCardPath, null);
      if (card) {
        if (card.schema_version !== expectedStep09SchemaVersion) {
          errors.push(`Promoted feature card schema_version mismatch for ${productSlug}/${feature.feature_slug}: expected ${expectedStep09SchemaVersion}, got ${card.schema_version || "missing"}`);
        }
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
        features.push(card);
      } else {
        errors.push(`Missing promoted feature card for ${productSlug}/${feature.feature_slug}: ${relativeToCwd(featureCardPath)}`);
      }
    }
    const skippedFeatures = [...(promotion.skipped_features || [])]
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
    `- Source of truth: \`artifacts/\``,
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
      markdownLink(`\`${product.product_slug}\``, `../artifacts/${product.product_slug}/card.json`),
    ]));
  }

  return `${lines.join("\n")}\n`;
}

function renderProductReport(product) {
  const lines = [
    `# ${product.product_name}`,
    "",
    `Service card: [card.json](../../artifacts/${product.product_slug}/card.json)`,
    "",
    `Artifacts index: [${product.product_slug}](../../artifacts/${product.product_slug}/index.md)`,
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
      markdownLink(feature.feature_name, `../../artifacts/${product.product_slug}/${feature.feature_slug}/README.md`),
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

function renderIamReport(products) {
  const lines = [
    "# IAM Coverage",
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
        markdownLink(feature.feature_name, `../../artifacts/${product.product_slug}/${feature.feature_slug}/README.md`),
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

function renderSecurityReport(products) {
  const lines = [
    "# Security Capabilities",
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
        markdownLink(feature.feature_name, `../../artifacts/${product.product_slug}/${feature.feature_slug}/README.md`),
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

function renderServiceCardsReport(products) {
  const lines = [
    "# Service Cards",
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
      markdownLink(product.product_name, `../../artifacts/${product.product_slug}/card.json`),
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
    await writeFile(path.join(radarRoot, "products", `${product.product_slug}.md`), renderProductReport(product));
  }
  await writeFile(path.join(radarRoot, "iam", "index.md"), renderIamReport(products));
  await writeFile(path.join(radarRoot, "security", "index.md"), renderSecurityReport(products));
  await writeFile(path.join(radarRoot, "services", "index.md"), renderServiceCardsReport(products));
  await writeFile(path.join(radarRoot, "coverage.md"), renderCoverageReport(products, generatedAt));

  const index = {
    schema_version: schemaVersion,
    generated_at: generatedAt,
    artifacts_root: relativeToCwd(artifactsRoot),
    radar_root: relativeToCwd(radarRoot),
    product_count: products.length,
    feature_count: products.reduce((sum, product) => sum + product.features.length, 0),
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
