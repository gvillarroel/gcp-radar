#!/usr/bin/env node

import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";

const inputFile = path.resolve(process.env.GCP_RADAR_FIXTURE_INPUT || "data/fixtures/tiny/release-notes.json");
const outputRoot = path.resolve(process.env.GCP_RADAR_FIXTURE_OUTPUT_ROOT || "tmp/fixture-run");
function slugify(value) { return String(value || "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, ""); }
async function writeJson(file, value) { await mkdir(path.dirname(file), { recursive: true }); await writeFile(file, JSON.stringify(value, null, 2) + "\n"); }
async function writeMd(file, value) { await mkdir(path.dirname(file), { recursive: true }); await writeFile(file, value); }
const notes = JSON.parse(await readFile(inputFile, "utf8"));
await rm(outputRoot, { recursive: true, force: true });
const products = new Map();
for (const note of notes) {
  const productSlug = slugify(note.product_name);
  if (!products.has(productSlug)) products.set(productSlug, { product_name: note.product_name, product_slug: productSlug, features: [] });
  products.get(productSlug).features.push({ feature_name: note.feature_name, feature_slug: slugify(note.feature_name), latest_feature_date: note.published_at, feature_summary: note.description });
}
for (const product of products.values()) {
  await writeMd(path.join(outputRoot, "step-02", `${product.product_slug}.md`), `# ${product.product_name}\n\n${product.features.map((f) => `- ${f.feature_name}: ${f.feature_summary}`).join("\n")}\n`);
  const officialUrl = `https://cloud.google.com/${product.product_slug}/docs`;
  await writeJson(path.join(outputRoot, "step-03", product.product_slug, "ranking.json"), { product_name: product.product_name, product_slug: product.product_slug, candidates: [{ url: officialUrl, score: 100, recommendation: "keep" }] });
  await writeJson(path.join(outputRoot, "step-04", product.product_slug, "pages.json"), [{ url: officialUrl, title: `${product.product_name} fixture docs`, markdown: `${product.product_name} fixture documentation for IAM and security.` }]);
  const extended = { schema_version: "fixture-step-06-v1", product_name: product.product_name, product_slug: product.product_slug, features: product.features.map((f) => ({ ...f, coverage_status: "FIXTURE", extended_definition: `${f.feature_summary} This fixture definition is backed by ${officialUrl}.`, source_links: [officialUrl] })) };
  await writeJson(path.join(outputRoot, "step-06", product.product_slug, "extended-features.json"), extended);
  const gate = { schema_version: "fixture-step-07-v1", product_name: product.product_name, product_slug: product.product_slug, product_status: "PASS", passed_feature_count: product.features.length, warned_feature_count: 0, failed_feature_count: 0, fail_ratio: 0, features: extended.features.map((f) => ({ feature_name: f.feature_name, feature_slug: f.feature_slug, pass: true, warn_count: 0, fail_count: 0, coverage_status: f.coverage_status, source_links: f.source_links })) };
  await writeJson(path.join(outputRoot, "step-07", product.product_slug, "gate.json"), gate);
  const card = { schema_version: "step-08-product-card-v1", generated_at: new Date().toISOString(), product_name: product.product_name, product_slug: product.product_slug, feature_count: extended.features.length, quality: { product_status: "PASS", passed_feature_count: product.features.length, warned_feature_count: 0, failed_feature_count: 0, fail_ratio: 0 }, feature_coverage: { FIXTURE: product.features.length }, lifecycle_summary: { ACTIVE_OR_UNSPECIFIED: product.features.length }, security_signal_summary: { features_with_security_signals: product.features.length, signal_counts: { iam: product.features.length, security: product.features.length } }, inputs: { step06_extended_features: `step-06/${product.product_slug}/extended-features.json`, step07_gate: `step-07/${product.product_slug}/gate.json` }, features: extended.features.map((f) => ({ feature_name: f.feature_name, feature_slug: f.feature_slug, lifecycle_status: "ACTIVE_OR_UNSPECIFIED", latest_feature_date: f.latest_feature_date, deprecation_date: "", coverage_status: f.coverage_status, gate_status: "PASS", warning_count: 0, failure_count: 0, summary: f.feature_summary, definition: f.extended_definition, security_signals: ["iam", "security"], evidence_urls: f.source_links })) };
  await writeJson(path.join(outputRoot, "step-08", "products", product.product_slug, "card.json"), card);
  await writeMd(path.join(outputRoot, "radar", product.product_slug, "card.md"), `# ${product.product_name}\n\nFixture card generated from local sample data.\n`);
}
await writeJson(path.join(outputRoot, "manifest.json"), { schema_version: "gcp-radar-tiny-fixture-run-v1", generated_at: new Date().toISOString(), input_file: path.relative(process.cwd(), inputFile).replace(/\\/g, "/"), product_count: products.size, output_root: path.relative(process.cwd(), outputRoot).replace(/\\/g, "/") });
console.log(`Fixture pipeline wrote ${products.size} product(s) under ${path.relative(process.cwd(), outputRoot)}`);
