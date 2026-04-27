#!/usr/bin/env node

import { access, mkdir, readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const step06Root = path.resolve(process.env.GCP_RADAR_STEP06_OUTPUT_ROOT || "data/step-06/current");
const step04Root = path.resolve(process.env.GCP_RADAR_STEP04_OUTPUT_ROOT || "data/step-04/current");
const outputRoot = path.resolve(process.env.GCP_RADAR_STEP03_OUTPUT_ROOT || "data/step-03/current");
async function exists(target) { try { await access(target); return true; } catch { return false; } }
async function readJson(target) { return JSON.parse(await readFile(target, "utf8")); }
function rel(target) { return path.relative(process.cwd(), target).replace(/\\/g, "/"); }
function tokens(text) { return [...new Set(String(text || "").toLowerCase().replace(/[^a-z0-9]+/g, " ").split(/\s+/).filter((t) => t.length >= 4 && !["google", "cloud", "with", "from", "that", "this", "using"].includes(t)))]; }
const productsDir = path.join(step06Root, "products");
const productDirs = (await readdir(productsDir, { withFileTypes: true })).filter((e) => e.isDirectory()).map((e) => e.name).sort();
const products = [];
for (const productSlug of productDirs) {
  const step06Path = path.join(productsDir, productSlug, "extended-features.json");
  const statePath = path.join(step04Root, "products", productSlug, "state.json");
  const selectionPath = path.join(step04Root, "products", productSlug, "selection.json");
  const step06 = await readJson(step06Path).catch(() => null);
  if (!step06) continue;
  const state = await readJson(statePath).catch(() => ({}));
  const selection = await readJson(selectionPath).catch(() => ({}));
  const features = step06.features || [];
  const uncovered = features.filter((f) => ["NONE", "LOW", "WEAK"].includes(String(f.coverage_status || "").toUpperCase()) || (f.source_links || []).length === 0);
  const tokenCounts = new Map();
  for (const feature of uncovered) for (const token of tokens(`${feature.feature_name} ${feature.feature_summary}`)) tokenCounts.set(token, (tokenCounts.get(token) || 0) + 1);
  const missing_terms = [...tokenCounts.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0])).slice(0, 30).map(([term, count]) => ({ term, count }));
  const corpusPages = Number(state.total_corpus_pages ?? selection.total_corpus_pages ?? 0);
  const featureCount = features.length;
  const uncoveredCount = uncovered.length;
  const uncoveredRatio = featureCount ? uncoveredCount / featureCount : 0;
  const recommended_actions = [];
  if (corpusPages === 0 || String(state.status || "").includes("failed")) recommended_actions.push("step-04-retry-or-browser-assisted-capture");
  if (uncoveredRatio > 0.25) recommended_actions.push("step-03-add-feature-term-seeds");
  if (featureCount > 100 && corpusPages < Math.min(200, featureCount)) recommended_actions.push("step-04-increase-adaptive-crawl-budget");
  if (missing_terms.length) recommended_actions.push("step-03-search-missing-feature-terms");
  products.push({
    product_name: step06.product_name || productSlug,
    product_slug: productSlug,
    feature_count: featureCount,
    uncovered_feature_count: uncoveredCount,
    uncovered_ratio: Number(uncoveredRatio.toFixed(4)),
    corpus_page_count: corpusPages,
    step04_status: state.status || selection.status || "unknown",
    missing_terms,
    sample_uncovered_features: uncovered.slice(0, 20).map((f) => ({ feature_name: f.feature_name, coverage_status: f.coverage_status || "UNKNOWN", source_link_count: (f.source_links || []).length })),
    recommended_actions: [...new Set(recommended_actions)],
    step06_path: rel(step06Path),
    step04_state_path: await exists(statePath) ? rel(statePath) : "",
  });
}
products.sort((a, b) => b.uncovered_feature_count - a.uncovered_feature_count || a.product_slug.localeCompare(b.product_slug));
const report = {
  schema_version: "step-03-coverage-feedback-v1",
  generated_at: new Date().toISOString(),
  input_step06_root: rel(step06Root),
  input_step04_root: rel(step04Root),
  product_count: products.length,
  total_features: products.reduce((sum, p) => sum + p.feature_count, 0),
  total_uncovered_features: products.reduce((sum, p) => sum + p.uncovered_feature_count, 0),
  zero_corpus_product_count: products.filter((p) => p.corpus_page_count === 0).length,
  products,
};
await mkdir(outputRoot, { recursive: true });
await writeFile(path.join(outputRoot, "coverage-feedback.json"), JSON.stringify(report, null, 2) + "\n");
await writeFile(path.join(outputRoot, "coverage-feedback.md"), `# Step 03 Coverage Feedback\n\nGenerated: ${report.generated_at}\n\n- Products: ${report.product_count}\n- Total features: ${report.total_features}\n- Uncovered/weak features: ${report.total_uncovered_features}\n- Zero-corpus products: ${report.zero_corpus_product_count}\n\n| Product | Features | Uncovered | Corpus pages | Step 04 status | Recommended actions |\n|---|---:|---:|---:|---|---|\n${products.slice(0, 100).map((p) => `| ${p.product_slug} | ${p.feature_count} | ${p.uncovered_feature_count} | ${p.corpus_page_count} | ${p.step04_status} | ${p.recommended_actions.join(", ")} |`).join("\n")}\n`);
console.log(`Wrote ${rel(path.join(outputRoot, "coverage-feedback.json"))} for ${products.length} products.`);
