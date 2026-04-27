#!/usr/bin/env node

import { access, mkdir, readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const outputRoot = path.resolve(process.env.GCP_RADAR_SOURCE_POLICY_OUTPUT_ROOT || "data/source-policy/current");
const allowedHostPatterns = [
  /(^|\.)cloud\.google\.com$/,
  /(^|\.)docs\.cloud\.google\.com$/,
  /(^|\.)developers\.google\.com$/,
  /(^|\.)googleapis\.github\.io$/,
  /^github\.com$/,
  /^raw\.githubusercontent\.com$/,
];
const allowedGithubOrgs = new Set(["googleapis", "googlecloudplatform", "google"]);
const deniedHosts = new Set(["support.google.com"]);

async function exists(target) { try { await access(target); return true; } catch { return false; } }
async function readJson(target) { return JSON.parse(await readFile(target, "utf8")); }
async function listFiles(root, predicate = () => true) {
  if (!(await exists(root))) return [];
  const files = [];
  async function walk(dir) {
    for (const entry of await readdir(dir, { withFileTypes: true })) {
      const next = path.join(dir, entry.name);
      if (entry.isDirectory()) await walk(next);
      else if (predicate(next)) files.push(next);
    }
  }
  await walk(root);
  return files.sort();
}
function rel(target) { return path.relative(process.cwd(), target).replace(/\\/g, "/"); }
function isAllowedOfficialUrl(raw) {
  try {
    const url = new URL(raw);
    const host = url.hostname.toLowerCase();
    if (deniedHosts.has(host)) return { allowed: false, reason: "denied_host" };
    if (!allowedHostPatterns.some((pattern) => pattern.test(host))) return { allowed: false, reason: "host_not_allowlisted" };
    if ((host === "github.com" || host === "raw.githubusercontent.com") && !allowedGithubOrgs.has(url.pathname.split("/").filter(Boolean)[0]?.toLowerCase())) {
      return { allowed: false, reason: "github_org_not_allowlisted" };
    }
    return { allowed: true, reason: "official_allowlist" };
  } catch {
    return { allowed: false, reason: "invalid_url" };
  }
}
function collectUrls(value, out = []) {
  if (typeof value === "string") {
    if (/^https?:\/\//i.test(value)) out.push(value);
  } else if (Array.isArray(value)) {
    for (const item of value) collectUrls(item, out);
  } else if (value && typeof value === "object") {
    for (const item of Object.values(value)) collectUrls(item, out);
  }
  return out;
}
const roots = ["data/step-03/current", "data/step-04/current", "data/step-06/current", "data/step-08/current"];
const findings = [];
let checkedUrlCount = 0;
for (const root of roots) {
  for (const file of await listFiles(root, (target) => target.endsWith(".json"))) {
    if (file.includes("coverage-dashboard") || file.includes("source-policy")) continue;
    const payload = await readJson(file).catch(() => null);
    if (!payload) continue;
    const urls = [...new Set(collectUrls(payload))].sort();
    for (const url of urls) {
      checkedUrlCount += 1;
      const verdict = isAllowedOfficialUrl(url);
      if (!verdict.allowed) findings.push({ file: rel(file), url, reason: verdict.reason });
    }
  }
}
const report = {
  schema_version: "gcp-radar-official-source-url-policy-v1",
  generated_at: new Date().toISOString(),
  mode: "report-only",
  allowed_hosts: ["cloud.google.com", "docs.cloud.google.com", "developers.google.com", "googleapis.github.io", "github.com/google*", "raw.githubusercontent.com/google*"],
  denied_hosts: [...deniedHosts].sort(),
  scanned_roots: roots,
  checked_url_count: checkedUrlCount,
  finding_count: findings.length,
  findings,
};
await mkdir(outputRoot, { recursive: true });
await writeFile(path.join(outputRoot, "official-source-url-report.json"), JSON.stringify(report, null, 2) + "\n");
await writeFile(path.join(outputRoot, "official-source-url-report.md"), `# Official Source URL Policy Report\n\nGenerated: ${report.generated_at}\n\nMode: report-only\n\n- Checked URLs: ${checkedUrlCount}\n- Findings: ${findings.length}\n\nAllowed host policy: ${report.allowed_hosts.join(", ")}\n\n| File | Reason | URL |\n|---|---|---|\n${findings.map((f) => `| ${f.file} | ${f.reason} | ${f.url} |`).join("\n") || "| - | - | - |"}\n`);
console.log(`Checked ${checkedUrlCount} URL(s); findings: ${findings.length}`);
if (process.env.GCP_RADAR_SOURCE_POLICY_STRICT === "1" && findings.length > 0) process.exit(1);
