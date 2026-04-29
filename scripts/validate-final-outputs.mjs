#!/usr/bin/env zx

import { access, readFile, readdir, writeFile, mkdir } from "node:fs/promises";
import path from "node:path";

const artifactsRoot = path.resolve(process.env.GCP_RADAR_VALIDATE_ARTIFACTS_ROOT || "artifacts");
const radarRoot = path.resolve(process.env.GCP_RADAR_VALIDATE_RADAR_ROOT || "radar");
const step08Root = path.resolve(process.env.GCP_RADAR_VALIDATE_STEP08_ROOT || "data/step-08/current");
const outputFile = path.resolve(process.env.GCP_RADAR_VALIDATE_OUTPUT || "data/final-output-validation.json");
const officialGoogleHosts = [
  "cloud.google.com",
  "docs.cloud.google.com",
  "developers.google.com",
  "firebase.google.com",
  "workspace.google.com",
  "googleapis.dev",
];

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

async function listDirs(directory) {
  if (!(await exists(directory))) {
    return [];
  }
  return (await readdir(directory, { withFileTypes: true }))
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort((left, right) => left.localeCompare(right));
}

async function listFilesRecursive(directory) {
  if (!(await exists(directory))) {
    return [];
  }
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const target = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      files.push(...await listFilesRecursive(target));
    } else {
      files.push(target);
    }
  }
  return files;
}

function isOfficialGoogleUrl(url) {
  try {
    const host = new URL(url).hostname.toLowerCase();
    return officialGoogleHosts.some((allowed) => host === allowed || host.endsWith(`.${allowed}`));
  } catch {
    return false;
  }
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

  for (const productSlug of await listDirs(artifactsRoot)) {
    const productDir = path.join(artifactsRoot, productSlug);
    const promotionPath = path.join(productDir, "promotion.json");
    const promotion = await readJson(promotionPath, null);
    const serviceCardPath = path.join(artifactsRoot, productSlug, "card.json");
    const serviceCard = await readJson(serviceCardPath, null);
    const promotedFeatureSlugs = new Set((promotion?.promoted_features || []).map((feature) => feature.feature_slug).filter(Boolean));
    const artifactFeatureSlugs = await listDirs(productDir);
    if (!promotion) {
      findings.push({ severity: "error", rule: "missing_promotion_manifest", path: promotionPath });
    }
    for (const featureSlug of artifactFeatureSlugs) {
      if (promotion && !promotedFeatureSlugs.has(featureSlug)) {
        findings.push({ severity: "error", rule: "feature_artifact_not_promoted", path: path.join(productDir, featureSlug), product_slug: productSlug, feature_slug: featureSlug });
      }
    }
    for (const featureSlug of promotedFeatureSlugs) {
      if (!artifactFeatureSlugs.includes(featureSlug)) {
        findings.push({ severity: "error", rule: "promoted_feature_artifact_missing", path: path.join(productDir, featureSlug, "card.json"), product_slug: productSlug, feature_slug: featureSlug });
      }
    }
    if (!serviceCard) {
      findings.push({ severity: "error", rule: "missing_service_card", path: serviceCardPath });
    } else if (serviceCard.card_type !== "service") {
      findings.push({ severity: "error", rule: "invalid_service_card_type", path: serviceCardPath });
    }
    for (const link of serviceCard?.official_source_links || []) {
      if (!isOfficialGoogleUrl(link)) {
        findings.push({ severity: "error", rule: "non_official_service_source_link", path: serviceCardPath, link });
      }
    }
    for (const featureSlug of promotedFeatureSlugs) {
      const cardPath = path.join(artifactsRoot, productSlug, featureSlug, "card.json");
      const card = await readJson(cardPath, null);
      if (!card) {
        continue;
      }
      featureCount += 1;
      const links = card.evidence?.source_links || [];
      if (links.length === 0) {
        findings.push({ severity: "error", rule: "missing_source_links", path: cardPath });
      }
      for (const link of links) {
        if (!isOfficialGoogleUrl(link)) {
          findings.push({ severity: "error", rule: "non_official_source_link", path: cardPath, link });
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

async function validateRadarDoesNotReferenceDataSteps() {
  const findings = [];
  for (const file of await listFilesRecursive(radarRoot)) {
    if (!file.endsWith(".md") && !file.endsWith(".json")) {
      continue;
    }
    const content = await readFile(file, "utf8");
    if (/data\/step-\d\d|data\\step-\d\d/i.test(content)) {
      findings.push({ severity: "error", rule: "radar_references_intermediate_data", path: file });
    }
  }
  return findings;
}

async function main() {
  const artifactValidation = await validateArtifacts();
  const radarFindings = await validateRadarDoesNotReferenceDataSteps();
  const findings = [...artifactValidation.findings, ...radarFindings];
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
