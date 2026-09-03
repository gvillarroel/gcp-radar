#!/usr/bin/env node

import { access, mkdir, readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const step04Root = path.resolve(process.env.GCP_RADAR_STEP04_OUTPUT_ROOT || "data/step-04/current");
const outputJson = path.join(step04Root, "coverage-dashboard.json");
const outputMd = path.join(step04Root, "coverage-dashboard.md");
const minHealthyPages = Number(process.env.GCP_RADAR_STEP04_MIN_HEALTHY_PAGES || 10);

async function exists(target) { try { await access(target); return true; } catch { return false; } }
async function readJson(target) { return JSON.parse(await readFile(target, "utf8")); }
async function readText(target) { return readFile(target, "utf8").catch(() => ""); }
function rel(target) { return path.relative(process.cwd(), target).replace(/\\/g, "/"); }
function normalizeUrl(value) { try { const url = new URL(value); url.hash = ""; return url.toString(); } catch { return String(value || "").trim(); } }
function asArray(value) { return Array.isArray(value) ? value : value && typeof value === "object" ? Object.values(value) : []; }
async function listFilesRecursive(root, predicate = () => true) {
  if (!(await exists(root))) return [];
  const out = [];
  async function walk(dir) {
    for (const entry of await readdir(dir, { withFileTypes: true })) {
      const next = path.join(dir, entry.name);
      if (entry.isDirectory()) await walk(next);
      else if (predicate(next, entry)) out.push(next);
    }
  }
  await walk(root);
  return out.sort();
}

const indexPath = path.join(step04Root, "index.json");
const index = await readJson(indexPath).catch(() => ({ products: [] }));
const productsRoot = path.join(step04Root, "products");
const productSlugs = new Set((index.products || []).map((p) => p.product_slug).filter(Boolean));
if (await exists(productsRoot)) {
  for (const entry of await readdir(productsRoot, { withFileTypes: true })) if (entry.isDirectory()) productSlugs.add(entry.name);
}
const products = [];
for (const productSlug of [...productSlugs].sort()) {
  const productRoot = path.join(productsRoot, productSlug);
  const selectionPath = path.join(productRoot, "selection.json");
  const statePath = path.join(productRoot, "state.json");
  const selection = await readJson(selectionPath).catch(() => null);
  const state = await readJson(statePath).catch(() => null);
  const indexEntry = (index.products || []).find((p) => p.product_slug === productSlug) || {};
  const corpusRoot = path.join(productRoot, "corpus");
  const pageIndexes = await listFilesRecursive(corpusRoot, (file) => path.basename(file) === "pages.json");
  let capturedPageCount = 0;
  let antiBotPageCount = 0;
  for (const pagesPath of pageIndexes) {
    const pages = await readJson(pagesPath).catch(() => []);
    if (Array.isArray(pages)) capturedPageCount += pages.length;
  }
  const markdownPages = await listFilesRecursive(corpusRoot, (file) => file.endsWith(".md"));
  for (const file of markdownPages) {
    const text = (await readText(file)).slice(0, 4000).toLowerCase();
    if (text.includes("sorry") && (text.includes("automated queries") || text.includes("unusual traffic"))) antiBotPageCount += 1;
  }
  const selectedUrls = (selection?.selected_sources || selection?.sources || [])
    .map((source) => normalizeUrl(source.url || source.seed_url || source.source_url))
    .filter(Boolean);
  const failedSources = [
    ...asArray(selection?.source_failures),
    ...asArray(state?.source_failures),
  ];
  const status = indexEntry.status || state?.status || selection?.status || (capturedPageCount >= minHealthyPages && antiBotPageCount === 0 ? "healthy" : "needs_attention");
  const belowCoverageThreshold = capturedPageCount < minHealthyPages;
  products.push({
    product_name: indexEntry.product_name || selection?.product_name || state?.product_name || productSlug,
    product_slug: productSlug,
    status,
    selected_source_count: indexEntry.selected_source_count ?? selectedUrls.length,
    captured_page_count: indexEntry.total_corpus_pages ?? capturedPageCount,
    failed_source_count: failedSources.length,
    anti_bot_page_count: antiBotPageCount,
    below_coverage_threshold: belowCoverageThreshold,
    last_run_timestamp: state?.generated_at || state?.updated_at || index.generated_at || "",
    selection_path: await exists(selectionPath) ? rel(selectionPath) : "",
    state_path: await exists(statePath) ? rel(statePath) : "",
  });
}
const dashboard = {
  schema_version: "step-04-corpus-coverage-dashboard-v1",
  generated_at: new Date().toISOString(),
  input_root: rel(step04Root),
  min_healthy_pages: minHealthyPages,
  product_count: products.length,
  healthy_product_count: products.filter((p) => !p.below_coverage_threshold && p.anti_bot_page_count === 0 && !String(p.status).includes("failed")).length,
  needs_attention_count: products.filter((p) => p.below_coverage_threshold || p.anti_bot_page_count > 0 || String(p.status).includes("failed")).length,
  products,
};
await mkdir(step04Root, { recursive: true });
await writeFile(outputJson, JSON.stringify(dashboard, null, 2) + "\n");
const rows = products.map((p) => `| ${p.product_slug} | ${p.status} | ${p.selected_source_count} | ${p.captured_page_count} | ${p.failed_source_count} | ${p.anti_bot_page_count} | ${p.below_coverage_threshold ? "yes" : "no"} | ${p.state_path || p.selection_path} |`).join("\n");
await writeFile(outputMd, `# Step 04 Corpus Coverage Dashboard\n\nGenerated: ${dashboard.generated_at}\n\n- Products: ${dashboard.product_count}\n- Healthy products: ${dashboard.healthy_product_count}\n- Needs attention: ${dashboard.needs_attention_count}\n- Minimum healthy pages: ${minHealthyPages}\n\n| Product | Status | Sources | Pages | Failed sources | Anti-bot pages | Below threshold | Details |\n|---|---:|---:|---:|---:|---:|---:|---|\n${rows}\n`);
console.log(`Wrote ${rel(outputJson)} and ${rel(outputMd)}`);
