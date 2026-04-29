#!/usr/bin/env zx

import { access, mkdir, readFile, readdir, writeFile } from "node:fs/promises";
import path from "node:path";

const schemaVersion = "step-10-radar-reports-v1";
const artifactsRoot = path.resolve(process.env.GCP_RADAR_STEP10_ARTIFACTS_ROOT || "artifacts");
const radarRoot = path.resolve(process.env.GCP_RADAR_STEP10_RADAR_ROOT || "radar");
const outputRoot = path.resolve(process.env.GCP_RADAR_STEP10_OUTPUT_ROOT || "data/step-10/current");

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

function relativeToCwd(target) {
  return path.relative(process.cwd(), target).replace(/\\/g, "/");
}

function markdownTableRow(values) {
  return `| ${values.map((value) => String(value || "").replace(/\n/g, " ").replace(/\|/g, "\\|")).join(" | ")} |`;
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

  for (const productSlug of await listProductDirs()) {
    const productDir = path.join(artifactsRoot, productSlug);
    const promotion = await readJson(path.join(productDir, "promotion.json"), null);
    if (!promotion) {
      continue;
    }
    const serviceCard = await readJson(path.join(productDir, "card.json"), null);
    const features = [];
    const promotedFeatures = [...(promotion.promoted_features || [])]
      .filter((feature) => feature?.feature_slug)
      .sort((left, right) => compareStrings(left.feature_slug, right.feature_slug));
    for (const feature of promotedFeatures) {
      const card = await readJson(path.join(productDir, feature.feature_slug, "card.json"), null);
      if (card) {
        features.push(card);
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
      `[\`${product.product_slug}\`](../artifacts/${product.product_slug}/card.json)`,
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
    markdownTableRow(["Feature", "IAM", "Roles", "Permissions", "Coverage", "Official sources"]),
    markdownTableRow(["---", "---", "---", "---", "---", "---"]),
  ];

  for (const feature of product.features.sort((left, right) => compareStrings(left.feature_name, right.feature_name))) {
    const sources = (feature.evidence?.source_links || []).slice(0, 3).map((url) => `[source](${url})`).join("<br>");
    const iam = feature.iam || {};
    const roles = [...(iam.explicit_roles || []), ...(iam.derived_roles || [])]
      .slice(0, 8)
      .map((role) => `\`${role}\``)
      .join("<br>");
    const permissions = [...(iam.explicit_permissions || []), ...(iam.derived_permissions || [])]
      .slice(0, 8)
      .map((permission) => `\`${permission.permission}\``)
      .join("<br>");
    lines.push(markdownTableRow([
      `[${feature.feature_name}](../../artifacts/${product.product_slug}/${feature.feature_slug}/README.md)`,
      iam.iam_mapping_status || "unknown",
      roles || "none",
      permissions || "none",
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
    markdownTableRow(["Product", "Feature", "Mapping", "Roles", "Permissions"]),
    markdownTableRow(["---", "---", "---", "---", "---"]),
  ];

  for (const product of products) {
    for (const feature of product.features) {
      const iam = feature.iam || {};
      const roles = [...(iam.explicit_roles || []), ...(iam.derived_roles || [])].slice(0, 8).map((role) => `\`${role}\``).join("<br>");
      const permissions = [...(iam.explicit_permissions || []), ...(iam.derived_permissions || [])]
        .slice(0, 8)
        .map((permission) => `\`${permission.permission}\``)
        .join("<br>");
      lines.push(markdownTableRow([
        product.product_name,
        `[${feature.feature_name}](../../artifacts/${product.product_slug}/${feature.feature_slug}/README.md)`,
        iam.iam_mapping_status || "unknown",
        roles || "none",
        permissions || "none",
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
        `[${feature.feature_name}](../../artifacts/${product.product_slug}/${feature.feature_slug}/README.md)`,
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
    markdownTableRow(["Product", "Promoted", "Skipped", "Explicit IAM", "Derived IAM", "Unknown IAM"]),
    markdownTableRow(["---", "---", "---", "---", "---", "---"]),
  ];

  for (const product of products) {
    const explicit = product.features.filter((feature) => feature.iam?.iam_mapping_status === "explicit").length;
    const derived = product.features.filter((feature) => feature.iam?.iam_mapping_status === "derived_from_permission_prefix").length;
    const unknown = product.features.filter((feature) => feature.iam?.iam_mapping_status === "unknown").length;
    lines.push(markdownTableRow([
      product.product_name,
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
      `[${product.product_name}](../../artifacts/${product.product_slug}/card.json)`,
      service.validation?.product_status || product.promotion?.product_status || "unknown",
      service.feature_count || product.features.length,
      service.lifecycle?.latest_feature_date || "unknown",
      iam.explicit || 0,
      iam.derived_from_permission_prefix || 0,
      iam.unknown || 0,
      service.official_source_links?.length || 0,
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
  console.log(JSON.stringify(index, null, 2));
}

await main();
