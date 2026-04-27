#!/usr/bin/env node

import { access, mkdir, readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const step07Root = path.resolve(process.env.GCP_RADAR_STEP07_OUTPUT_ROOT || "data/step-07/current");
const outputJson = path.join(step07Root, "quality-summary.json");
const outputMd = path.join(step07Root, "quality-summary.md");
const productFilter = (process.env.GCP_RADAR_STEP07_PRODUCTS || "").split(",").map((v) => v.trim()).filter(Boolean);
async function exists(target) { try { await access(target); return true; } catch { return false; } }
async function readJson(target) { return JSON.parse(await readFile(target, "utf8")); }
function rel(target) { return path.relative(process.cwd(), target).replace(/\\/g, "/"); }
function suggestedFixStage(findings) {
  const stages = new Set();
  for (const finding of findings || []) for (const step of finding.suggested_steps || []) stages.add(step);
  if (stages.size) return [...stages].sort().join(",");
  if ((findings || []).some((f) => /source|evidence|url/i.test(`${f.rule} ${f.message}`))) return "step-03/step-04";
  return "step-06";
}
const productsRoot = path.join(step07Root, "products");
const productDirs = (await readdir(productsRoot, { withFileTypes: true })).filter((e) => e.isDirectory()).map((e) => e.name).filter((slug) => productFilter.length === 0 || productFilter.includes(slug)).sort();
const items = [];
for (const productSlug of productDirs) {
  const gatePath = path.join(productsRoot, productSlug, "gate.json");
  if (!(await exists(gatePath))) continue;
  const gate = await readJson(gatePath);
  const features = [...(gate.failed_features || []), ...(gate.warned_features || [])];
  for (const feature of features) {
    const findings = feature.findings || [];
    const severity = feature.pass === false || feature.fail_count > 0 ? "fail" : "warn";
    items.push({
      product_name: gate.product_name || productSlug,
      product_slug: productSlug,
      feature_name: feature.feature_name,
      feature_slug: feature.feature_slug,
      severity,
      coverage_status: feature.coverage_status || "UNKNOWN",
      evidence_status: feature.source_link_count > 0 ? "has_evidence_urls" : "missing_evidence_urls",
      source_link_count: feature.source_link_count || 0,
      supporting_page_count: feature.supporting_page_count || 0,
      failure_reason: findings.map((f) => `${f.rule}: ${f.message}`).join("; ") || (severity === "fail" ? "feature failed quality gate" : "feature has quality warnings"),
      suggested_fix_stage: suggestedFixStage(findings),
      gate_path: rel(gatePath),
    });
  }
}
const summary = {
  schema_version: "step-07-quality-summary-v1",
  generated_at: new Date().toISOString(),
  input_root: rel(step07Root),
  item_count: items.length,
  fail_count: items.filter((item) => item.severity === "fail").length,
  warn_count: items.filter((item) => item.severity === "warn").length,
  items,
};
await mkdir(step07Root, { recursive: true });
await writeFile(outputJson, JSON.stringify(summary, null, 2) + "\n");
await writeFile(outputMd, `# Step 07 Quality Summary\n\nGenerated: ${summary.generated_at}\n\n- Findings: ${summary.item_count}\n- Failures: ${summary.fail_count}\n- Warnings: ${summary.warn_count}\n\n| Product | Feature | Severity | Evidence | Suggested fix | Reason |\n|---|---|---:|---|---|---|\n${items.map((item) => `| ${item.product_slug} | ${item.feature_name.replace(/\|/g, "\\|")} | ${item.severity} | ${item.evidence_status} (${item.source_link_count}) | ${item.suggested_fix_stage} | ${item.failure_reason.replace(/\|/g, "\\|")} |`).join("\n") || "| - | - | - | - | - | - |"}\n`);
console.log(`Wrote ${rel(outputJson)} and ${rel(outputMd)} with ${items.length} finding(s).`);
