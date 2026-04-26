#!/usr/bin/env zx

import { mkdir, readFile, readdir, writeFile } from "node:fs/promises";
import path from "node:path";

const schemaVersion = "step-08-product-card-v1";
const step06Root = path.resolve(process.env.GCP_RADAR_STEP08_STEP06_ROOT || "data/step-06/current");
const step07Root = path.resolve(process.env.GCP_RADAR_STEP08_STEP07_ROOT || "data/step-07/current");
const outputRoot = path.resolve(process.env.GCP_RADAR_STEP08_OUTPUT_ROOT || "data/step-08/current");
const productFilter = (process.env.GCP_RADAR_STEP08_PRODUCTS || "")
  .split(",")
  .map((value) => value.trim().toLowerCase())
  .filter(Boolean);

function normalizeWhitespace(value) {
  return String(value || "").replace(/\s+/g, " ").trim();
}

function slugify(value) {
  return normalizeWhitespace(value)
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function unique(values) {
  return [...new Set(values.filter(Boolean))];
}

function countBy(items, keyFn) {
  const counts = {};
  for (const item of items) {
    const key = keyFn(item) || "UNKNOWN";
    counts[key] = (counts[key] || 0) + 1;
  }
  return Object.fromEntries(Object.entries(counts).sort(([a], [b]) => a.localeCompare(b)));
}

async function readJson(filePath) {
  return JSON.parse(await readFile(filePath, "utf8"));
}

function featureSlug(feature) {
  return feature.feature_slug || slugify(feature.feature_name);
}

function lifecycleStatus(feature) {
  if (feature.deprecation_date) return "DEPRECATED_OR_DEPRECATING";
  return "ACTIVE_OR_UNSPECIFIED";
}

function securitySignals(feature) {
  const text = [feature.feature_name, feature.feature_summary, feature.extended_definition]
    .map((value) => String(value || "").toLowerCase())
    .join(" ");
  const signals = [];
  for (const [signal, pattern] of [
    ["iam", /\biam\b|identity and access management|permission|role/],
    ["security", /security|secure|encryption|kms|key|certificate|policy|vpc service controls/],
    ["audit", /audit|logging|log|monitoring/],
    ["network", /network|firewall|vpn|dns|load balanc/],
    ["compliance", /compliance|assured|sovereign|residency/],
  ]) {
    if (pattern.test(text)) signals.push(signal);
  }
  return signals;
}

function compactFeature(feature, gateFeature) {
  const links = unique(feature.source_links || gateFeature?.source_links || []);
  return {
    feature_name: feature.feature_name,
    feature_slug: featureSlug(feature),
    lifecycle_status: lifecycleStatus(feature),
    latest_feature_date: feature.latest_feature_date || "",
    deprecation_date: feature.deprecation_date || "",
    coverage_status: feature.coverage_status || gateFeature?.coverage_status || "UNKNOWN",
    gate_status: gateFeature?.pass === false ? "FAIL" : gateFeature?.warn_count > 0 ? "WARN" : "PASS",
    warning_count: gateFeature?.warn_count || 0,
    failure_count: gateFeature?.fail_count || 0,
    summary: normalizeWhitespace(feature.feature_summary || feature.extended_definition),
    definition: normalizeWhitespace(feature.extended_definition || feature.feature_summary),
    security_signals: securitySignals(feature),
    evidence_urls: links,
  };
}

function buildMarkdown(card) {
  const warnings = card.quality.warned_feature_count;
  const failures = card.quality.failed_feature_count;
  const coverage = Object.entries(card.feature_coverage)
    .map(([key, value]) => `- ${key}: ${value}`)
    .join("\n");
  const lifecycle = Object.entries(card.lifecycle_summary)
    .map(([key, value]) => `- ${key}: ${value}`)
    .join("\n");
  const topFeatures = card.features
    .slice(0, 25)
    .map((feature) => `- ${feature.feature_name} (${feature.coverage_status}, ${feature.gate_status})`)
    .join("\n");

  return `# ${card.product_name}\n\n` +
    `Schema: \`${card.schema_version}\`  \n` +
    `Generated: ${card.generated_at}\n\n` +
    `## Product quality\n\n` +
    `- Product status: ${card.quality.product_status}\n` +
    `- Features: ${card.feature_count}\n` +
    `- Gate warnings: ${warnings}\n` +
    `- Gate failures: ${failures}\n` +
    `- Source Step 06: ${card.inputs.step06_extended_features}\n` +
    `- Source Step 07: ${card.inputs.step07_gate}\n\n` +
    `## Coverage\n\n${coverage || "- UNKNOWN: 0"}\n\n` +
    `## Lifecycle\n\n${lifecycle || "- UNKNOWN: 0"}\n\n` +
    `## Security signal summary\n\n` +
    `- Features with IAM/security/audit/network/compliance signals: ${card.security_signal_summary.features_with_security_signals}\n` +
    `- Signal counts: ${JSON.stringify(card.security_signal_summary.signal_counts)}\n\n` +
    `## Feature preview\n\n${topFeatures || "No features."}\n\n` +
    `Full feature inventory is available in \`card.json\`.\n`;
}

async function main() {
  const outputProductsDir = path.join(outputRoot, "products");
  await mkdir(outputProductsDir, { recursive: true });

  const step07Index = await readJson(path.join(step07Root, "index.json"));
  const productDirs = (step07Index.products || [])
    .filter((product) => product.product_status === "PASS")
    .map((product) => product.product_slug)
    .filter((slug) => productFilter.length === 0 || productFilter.includes(slug))
    .sort();

  const generatedAt = new Date().toISOString();
  const indexProducts = [];

  for (const productSlug of productDirs) {
    const step06Path = path.join(step06Root, "products", productSlug, "extended-features.json");
    const step07Path = path.join(step07Root, "products", productSlug, "gate.json");
    const step06 = await readJson(step06Path);
    let step07 = null;
    try {
      step07 = await readJson(step07Path);
    } catch {
      step07 = null;
    }

    const gateBySlug = new Map((step07?.features || []).map((feature) => [feature.feature_slug, feature]));
    const features = (step06.features || []).map((feature) => compactFeature(feature, gateBySlug.get(featureSlug(feature))));
    const securitySignalCounts = countBy(
      features.flatMap((feature) => feature.security_signals),
      (signal) => signal,
    );
    const card = {
      schema_version: schemaVersion,
      generated_at: generatedAt,
      product_name: step06.product_name,
      product_slug: step06.product_slug || productSlug,
      feature_count: features.length,
      quality: {
        product_status: step07?.product_status || "UNKNOWN",
        passed_feature_count: step07?.passed_feature_count ?? null,
        warned_feature_count: step07?.warned_feature_count ?? null,
        failed_feature_count: step07?.failed_feature_count ?? null,
        fail_ratio: step07?.fail_ratio ?? null,
      },
      feature_coverage: countBy(features, (feature) => feature.coverage_status),
      lifecycle_summary: countBy(features, (feature) => feature.lifecycle_status),
      security_signal_summary: {
        features_with_security_signals: features.filter((feature) => feature.security_signals.length > 0).length,
        signal_counts: securitySignalCounts,
      },
      inputs: {
        step06_extended_features: path.relative(process.cwd(), step06Path).replace(/\\/g, "/"),
        step07_gate: step07 ? path.relative(process.cwd(), step07Path).replace(/\\/g, "/") : "",
      },
      features,
    };

    const productOutputDir = path.join(outputProductsDir, productSlug);
    await mkdir(productOutputDir, { recursive: true });
    await writeFile(path.join(productOutputDir, "card.json"), JSON.stringify(card) + "\n");
    await writeFile(path.join(productOutputDir, "card.md"), buildMarkdown(card));

    indexProducts.push({
      product_name: card.product_name,
      product_slug: card.product_slug,
      product_status: card.quality.product_status,
      feature_count: card.feature_count,
      warned_feature_count: card.quality.warned_feature_count,
      failed_feature_count: card.quality.failed_feature_count,
      card_json: path.posix.join("data/step-08/current/products", productSlug, "card.json"),
      card_markdown: path.posix.join("data/step-08/current/products", productSlug, "card.md"),
    });
  }

  const index = {
    schema_version: "step-08-product-card-index-v1",
    generated_at: generatedAt,
    input_step06_root: path.relative(process.cwd(), step06Root).replace(/\\/g, "/"),
    input_step07_root: path.relative(process.cwd(), step07Root).replace(/\\/g, "/"),
    output_root: path.relative(process.cwd(), outputRoot).replace(/\\/g, "/"),
    product_count: indexProducts.length,
    products: indexProducts,
  };
  await writeFile(path.join(outputRoot, "index.json"), JSON.stringify(index, null, 2) + "\n");
  await writeFile(path.join(outputRoot, "index.md"), `# Step 08 Product Cards\n\nGenerated: ${generatedAt}\n\nProducts: ${indexProducts.length}\n\n` + indexProducts.map((product) => `- [${product.product_name}](${product.card_markdown.replace("data/step-08/current/", "")}) - ${product.product_status}, ${product.feature_count} features`).join("\n") + "\n");
  console.log(`Generated ${indexProducts.length} product card(s) under ${path.relative(process.cwd(), outputRoot)}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
