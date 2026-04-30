#!/usr/bin/env zx

import { access, readFile, readdir, writeFile, mkdir } from "node:fs/promises";
import path from "node:path";

const artifactsRoot = path.resolve(process.env.GCP_RADAR_VALIDATE_ARTIFACTS_ROOT || "artifacts");
const radarRoot = path.resolve(process.env.GCP_RADAR_VALIDATE_RADAR_ROOT || "radar");
const step08Root = path.resolve(process.env.GCP_RADAR_VALIDATE_STEP08_ROOT || "data/step-08/current");
const step09Root = path.resolve(process.env.GCP_RADAR_VALIDATE_STEP09_ROOT || "data/step-09/current");
const step10Root = path.resolve(process.env.GCP_RADAR_VALIDATE_STEP10_ROOT || "data/step-10/current");
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

function relativeToCwd(target) {
  return path.relative(process.cwd(), target).replace(/\\/g, "/") || ".";
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
    const expectedSourceStep08Card = relativeToCwd(path.join(step08Root, "products", productSlug, "card.json"));
    const promotedFeatureSlugs = new Set((promotion?.promoted_features || []).map((feature) => feature.feature_slug).filter(Boolean));
    const artifactFeatureSlugs = await listDirs(productDir);
    if (!promotion) {
      findings.push({ severity: "error", rule: "missing_promotion_manifest", path: promotionPath });
    } else {
      const skippedFeatures = Array.isArray(promotion.skipped_features) ? promotion.skipped_features : [];
      if (promotion.product_slug !== productSlug) {
        findings.push({
          severity: "error",
          rule: "promotion_manifest_product_slug_mismatch",
          path: promotionPath,
          expected: productSlug,
          actual: promotion.product_slug || null,
        });
      }
      if (promotion.promoted_feature_count !== promotedFeatureSlugs.size) {
        findings.push({
          severity: "error",
          rule: "promotion_manifest_promoted_feature_count_mismatch",
          path: promotionPath,
          expected: promotedFeatureSlugs.size,
          actual: promotion.promoted_feature_count,
        });
      }
      if (promotion.skipped_feature_count !== skippedFeatures.length) {
        findings.push({
          severity: "error",
          rule: "promotion_manifest_skipped_feature_count_mismatch",
          path: promotionPath,
          expected: skippedFeatures.length,
          actual: promotion.skipped_feature_count,
        });
      }
      const expectedServiceCard = `artifacts/${productSlug}/card.json`;
      const actualServiceCard = String(promotion.service_card || "").replace(/\\/g, "/");
      if (actualServiceCard !== expectedServiceCard) {
        findings.push({
          severity: "error",
          rule: "promotion_manifest_service_card_path_mismatch",
          path: promotionPath,
          product_slug: productSlug,
          expected: expectedServiceCard,
          actual: actualServiceCard || null,
        });
      }
      const actualSourceStep08Card = String(promotion.source_step08_card || "").replace(/\\/g, "/");
      if (actualSourceStep08Card !== expectedSourceStep08Card) {
        findings.push({
          severity: "error",
          rule: "promotion_manifest_source_step08_card_mismatch",
          path: promotionPath,
          product_slug: productSlug,
          expected: expectedSourceStep08Card,
          actual: actualSourceStep08Card || null,
        });
      }
      if (!(await exists(path.join(step08Root, "products", productSlug, "card.json")))) {
        findings.push({
          severity: "error",
          rule: "promotion_manifest_source_step08_card_missing",
          path: promotionPath,
          product_slug: productSlug,
          expected: expectedSourceStep08Card,
        });
      }
      const seenFeatureSlugs = new Set();
      for (const feature of promotion.promoted_features || []) {
        const featureSlug = feature?.feature_slug;
        if (!featureSlug) {
          findings.push({
            severity: "error",
            rule: "promotion_manifest_missing_feature_slug",
            path: promotionPath,
            product_slug: productSlug,
          });
          continue;
        }
        if (seenFeatureSlugs.has(featureSlug)) {
          findings.push({
            severity: "error",
            rule: "promotion_manifest_duplicate_feature_slug",
            path: promotionPath,
            product_slug: productSlug,
            feature_slug: featureSlug,
          });
        }
        seenFeatureSlugs.add(featureSlug);
        const expectedReadme = `artifacts/${productSlug}/${featureSlug}/README.md`;
        const expectedCard = `artifacts/${productSlug}/${featureSlug}/card.json`;
        const actualReadme = String(feature.artifact_readme || "").replace(/\\/g, "/");
        const actualCard = String(feature.artifact_card || "").replace(/\\/g, "/");
        if (actualReadme !== expectedReadme) {
          findings.push({
            severity: "error",
            rule: "promotion_manifest_feature_readme_path_mismatch",
            path: promotionPath,
            product_slug: productSlug,
            feature_slug: featureSlug,
            expected: expectedReadme,
            actual: actualReadme || null,
          });
        }
        if (actualCard !== expectedCard) {
          findings.push({
            severity: "error",
            rule: "promotion_manifest_feature_card_path_mismatch",
            path: promotionPath,
            product_slug: productSlug,
            feature_slug: featureSlug,
            expected: expectedCard,
            actual: actualCard || null,
          });
        }
      }
      const seenSkippedFeatureSlugs = new Set();
      for (const feature of skippedFeatures) {
        const featureSlug = feature?.feature_slug;
        if (!featureSlug) {
          findings.push({
            severity: "error",
            rule: "promotion_manifest_skipped_feature_missing_slug",
            path: promotionPath,
            product_slug: productSlug,
          });
          continue;
        }
        if (seenSkippedFeatureSlugs.has(featureSlug)) {
          findings.push({
            severity: "error",
            rule: "promotion_manifest_duplicate_skipped_feature_slug",
            path: promotionPath,
            product_slug: productSlug,
            feature_slug: featureSlug,
          });
        }
        seenSkippedFeatureSlugs.add(featureSlug);
        if (promotedFeatureSlugs.has(featureSlug)) {
          findings.push({
            severity: "error",
            rule: "promotion_manifest_feature_promoted_and_skipped",
            path: promotionPath,
            product_slug: productSlug,
            feature_slug: featureSlug,
          });
        }
      }
    }
    for (const featureSlug of artifactFeatureSlugs) {
      if (promotion && !promotedFeatureSlugs.has(featureSlug)) {
        findings.push({ severity: "error", rule: "feature_artifact_not_promoted", path: path.join(productDir, featureSlug), product_slug: productSlug, feature_slug: featureSlug });
      }
    }
    for (const featureSlug of promotedFeatureSlugs) {
      const featureDir = path.join(productDir, featureSlug);
      const featureCardPath = path.join(featureDir, "card.json");
      const featureReadmePath = path.join(featureDir, "README.md");
      if (!artifactFeatureSlugs.includes(featureSlug)) {
        findings.push({ severity: "error", rule: "promoted_feature_artifact_missing", path: featureDir, product_slug: productSlug, feature_slug: featureSlug });
      }
      if (!(await exists(featureCardPath))) {
        findings.push({ severity: "error", rule: "promoted_feature_card_missing", path: featureCardPath, product_slug: productSlug, feature_slug: featureSlug });
      }
      if (!(await exists(featureReadmePath))) {
        findings.push({ severity: "error", rule: "promoted_feature_readme_missing", path: featureReadmePath, product_slug: productSlug, feature_slug: featureSlug });
      }
    }
    if (!serviceCard) {
      findings.push({ severity: "error", rule: "missing_service_card", path: serviceCardPath });
    } else if (serviceCard.card_type !== "service") {
      findings.push({ severity: "error", rule: "invalid_service_card_type", path: serviceCardPath });
    } else if (String(serviceCard.source_step08_card || "").replace(/\\/g, "/") !== expectedSourceStep08Card) {
      findings.push({
        severity: "error",
        rule: "service_card_source_step08_card_mismatch",
        path: serviceCardPath,
        expected: expectedSourceStep08Card,
        actual: String(serviceCard.source_step08_card || "").replace(/\\/g, "/") || null,
      });
    } else if (serviceCard.product_slug && serviceCard.product_slug !== productSlug) {
      findings.push({
        severity: "error",
        rule: "service_card_product_slug_mismatch",
        path: serviceCardPath,
        expected: productSlug,
        actual: serviceCard.product_slug,
      });
    } else if (serviceCard.service_slug && serviceCard.service_slug !== productSlug) {
      findings.push({
        severity: "error",
        rule: "service_card_service_slug_mismatch",
        path: serviceCardPath,
        expected: productSlug,
        actual: serviceCard.service_slug,
      });
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
      if (card.product_slug !== productSlug) {
        findings.push({
          severity: "error",
          rule: "feature_card_product_slug_mismatch",
          path: cardPath,
          expected: productSlug,
          actual: card.product_slug || null,
        });
      }
      if (String(card.source_step08_card || "").replace(/\\/g, "/") !== expectedSourceStep08Card) {
        findings.push({
          severity: "error",
          rule: "feature_card_source_step08_card_mismatch",
          path: cardPath,
          product_slug: productSlug,
          feature_slug: featureSlug,
          expected: expectedSourceStep08Card,
          actual: String(card.source_step08_card || "").replace(/\\/g, "/") || null,
        });
      }
      if (card.feature_slug !== featureSlug) {
        findings.push({
          severity: "error",
          rule: "feature_card_feature_slug_mismatch",
          path: cardPath,
          expected: featureSlug,
          actual: card.feature_slug || null,
        });
      }
      const links = card.evidence?.source_links || [];
      if (links.length === 0) {
        findings.push({ severity: "error", rule: "missing_source_links", path: cardPath });
      }
      for (const link of links) {
        if (!isOfficialGoogleUrl(link)) {
          findings.push({ severity: "error", rule: "non_official_source_link", path: cardPath, link });
        }
      }
      const officialSourceLinks = links.filter(isOfficialGoogleUrl);
      const featureReadmePath = path.join(artifactsRoot, productSlug, featureSlug, "README.md");
      if (officialSourceLinks.length > 0 && await exists(featureReadmePath)) {
        const featureReadme = await readFile(featureReadmePath, "utf8");
        if (!officialSourceLinks.some((link) => featureReadme.includes(link))) {
          findings.push({
            severity: "error",
            rule: "missing_artifact_readme_evidence_link",
            path: featureReadmePath,
            product_slug: productSlug,
            feature_slug: featureSlug,
            expected_one_of: officialSourceLinks,
          });
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

async function validateArtifactProductIndexes() {
  const findings = [];

  for (const productSlug of await listDirs(artifactsRoot)) {
    const productDir = path.join(artifactsRoot, productSlug);
    const promotionPath = path.join(productDir, "promotion.json");
    const productIndexPath = path.join(productDir, "index.md");
    const promotion = await readJson(promotionPath, null);
    if (!promotion || !(await exists(productIndexPath))) {
      continue;
    }

    const indexMarkdown = await readFile(productIndexPath, "utf8");
    const expectedFeatureLinks = new Set((promotion.promoted_features || [])
      .map((feature) => feature?.feature_slug)
      .filter(Boolean)
      .sort((left, right) => left.localeCompare(right))
      .map((featureSlug) => `./${featureSlug}/README.md`));
    const expectedServiceCardLink = "./card.json";
    let hasServiceCardLink = false;
    const actualFeatureLinks = new Set();
    const staleFeatureLinks = new Set();
    const staleServiceCardLinks = new Set();
    const linkPattern = /\[(?:\\.|[^\]\\])*\]\(([^)]+)\)/g;

    for (const match of indexMarkdown.matchAll(linkPattern)) {
      const link = String(match[1] || "").trim().replace(/\\/g, "/").split("#")[0];
      if (link.endsWith("/card.json") || link === expectedServiceCardLink) {
        if (link === expectedServiceCardLink) {
          hasServiceCardLink = true;
        } else if (link.startsWith("./")) {
          staleServiceCardLinks.add(link);
        }
      }
      if (!link.startsWith("./") || !link.endsWith("/README.md")) {
        continue;
      }
      if (expectedFeatureLinks.has(link)) {
        actualFeatureLinks.add(link);
      } else {
        staleFeatureLinks.add(link);
      }
    }

    for (const link of expectedFeatureLinks) {
      if (!actualFeatureLinks.has(link)) {
        findings.push({
          severity: "error",
          rule: "missing_artifact_index_feature_link",
          path: productIndexPath,
          product_slug: productSlug,
          link,
        });
      }
    }
    for (const link of staleFeatureLinks) {
      findings.push({
        severity: "error",
        rule: "stale_artifact_index_feature_link",
        path: productIndexPath,
        product_slug: productSlug,
        link,
      });
    }
    if (!hasServiceCardLink) {
      findings.push({
        severity: "error",
        rule: "missing_artifact_index_service_card_link",
        path: productIndexPath,
        product_slug: productSlug,
        link: expectedServiceCardLink,
      });
    }
    for (const link of staleServiceCardLinks) {
      findings.push({
        severity: "error",
        rule: "stale_artifact_index_service_card_link",
        path: productIndexPath,
        product_slug: productSlug,
        link,
      });
    }
  }

  return findings;
}

async function validateArtifactMarkdownExternalLinksAreOfficial() {
  const findings = [];
  const linkPattern = /\[(?:\\.|[^\]\\])*\]\(([^)]+)\)/g;
  const bareUrlPattern = /https?:\/\/[^\s<>)"']+/g;

  for (const file of await listFilesRecursive(artifactsRoot)) {
    if (!file.endsWith(".md")) {
      continue;
    }
    const content = await readFile(file, "utf8");
    const links = new Set();

    for (const match of content.matchAll(linkPattern)) {
      const rawLink = String(match[1] || "").trim();
      if (/^https?:\/\//i.test(rawLink)) {
        links.add(rawLink);
      }
    }
    for (const match of content.matchAll(bareUrlPattern)) {
      links.add(String(match[0] || "").trim().replace(/[.,;:]+$/g, ""));
    }

    for (const link of links) {
      if (!isOfficialGoogleUrl(link)) {
        findings.push({
          severity: "error",
          rule: "non_official_artifact_markdown_external_link",
          path: file,
          link,
        });
      }
    }
  }

  return findings;
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

async function validateRadarArtifactLinks() {
  const findings = [];
  for (const file of await listFilesRecursive(radarRoot)) {
    if (!file.endsWith(".md")) {
      continue;
    }
    const content = await readFile(file, "utf8");
    const linkPattern = /\[(?:\\.|[^\]\\])*\]\(([^)]+)\)/g;
    for (const match of content.matchAll(linkPattern)) {
      const rawLink = String(match[1] || "").trim();
      if (!rawLink || /^[a-z][a-z0-9+.-]*:/i.test(rawLink) || rawLink.startsWith("#")) {
        continue;
      }
      const targetWithoutAnchor = rawLink.split("#")[0];
      if (!targetWithoutAnchor.replace(/\\/g, "/").includes("artifacts/")) {
        continue;
      }
      const resolved = path.resolve(path.dirname(file), decodeURIComponent(targetWithoutAnchor));
      if (!(await exists(resolved))) {
        findings.push({
          severity: "error",
          rule: "broken_radar_artifact_link",
          path: file,
          link: rawLink,
          resolved_path: resolved,
        });
      }
    }
  }
  return findings;
}

async function validateRadarExternalLinksAreOfficial() {
  const findings = [];
  const linkPattern = /\[(?:\\.|[^\]\\])*\]\(([^)]+)\)/g;
  const bareUrlPattern = /https?:\/\/[^\s<>)"']+/g;

  for (const file of await listFilesRecursive(radarRoot)) {
    if (!file.endsWith(".md")) {
      continue;
    }
    const content = await readFile(file, "utf8");
    const links = new Set();

    for (const match of content.matchAll(linkPattern)) {
      const rawLink = String(match[1] || "").trim();
      if (/^https?:\/\//i.test(rawLink)) {
        links.add(rawLink);
      }
    }
    for (const match of content.matchAll(bareUrlPattern)) {
      links.add(String(match[0] || "").trim().replace(/[.,;:]+$/g, ""));
    }

    for (const link of links) {
      if (!isOfficialGoogleUrl(link)) {
        findings.push({
          severity: "error",
          rule: "non_official_radar_external_link",
          path: file,
          link,
        });
      }
    }
  }

  return findings;
}

async function validateRadarIamTablesSeparateExplicitAndDerived() {
  const findings = [];
  const requiredHeaders = ["Explicit roles", "Explicit permissions", "Derived roles", "Derived permissions"];
  const reportFiles = [
    path.join(radarRoot, "iam", "index.md"),
    ...((await listFilesRecursive(path.join(radarRoot, "products")))
      .filter((file) => path.dirname(file) === path.join(radarRoot, "products"))
      .filter((file) => file.endsWith(".md"))),
  ];

  for (const file of reportFiles) {
    if (!(await exists(file))) {
      continue;
    }
    const content = await readFile(file, "utf8");
    for (const header of requiredHeaders) {
      if (!content.includes(header)) {
        findings.push({
          severity: "error",
          rule: "radar_iam_table_missing_explicit_derived_header",
          path: file,
          header,
        });
      }
    }
  }

  return findings;
}

async function validateRadarIamReportMatchesArtifacts() {
  const findings = [];
  const iamReportPath = path.join(radarRoot, "iam", "index.md");
  if (!(await exists(iamReportPath))) {
    findings.push({
      severity: "error",
      rule: "missing_radar_iam_report",
      path: iamReportPath,
    });
    return findings;
  }

  const expectedRows = new Map();
  for (const productSlug of await listDirs(artifactsRoot)) {
    const promotion = await readJson(path.join(artifactsRoot, productSlug, "promotion.json"), null);
    if (!promotion) {
      continue;
    }
    for (const feature of promotion.promoted_features || []) {
      const featureSlug = feature?.feature_slug;
      if (!featureSlug) {
        continue;
      }
      const featureCard = await readJson(path.join(artifactsRoot, productSlug, featureSlug, "card.json"), null);
      if (!featureCard) {
        continue;
      }
      const iam = featureCard.iam || {};
      expectedRows.set(`../../artifacts/${productSlug}/${featureSlug}/README.md`, {
        product_name: promotion.product_name || productSlug,
        mapping: iam.iam_mapping_status || "unknown",
        explicit_roles: formatRolesForReportValidation(iam.explicit_roles),
        explicit_permissions: formatPermissionsForReportValidation(iam.explicit_permissions),
        derived_roles: formatRolesForReportValidation(iam.derived_roles),
        derived_permissions: formatPermissionsForReportValidation(iam.derived_permissions),
      });
    }
  }

  const report = await readFile(iamReportPath, "utf8");
  const actualFeatureLinks = new Set();
  const staleFeatureLinks = new Set();
  const linkPattern = /\[(?:\\.|[^\]\\])*\]\(([^)]+)\)/g;
  for (const match of report.matchAll(linkPattern)) {
    const link = String(match[1] || "").trim().replace(/\\/g, "/").split("#")[0];
    if (!link.startsWith("../../artifacts/") || !link.endsWith("/README.md")) {
      continue;
    }
    if (expectedRows.has(link)) {
      actualFeatureLinks.add(link);
    } else {
      staleFeatureLinks.add(link);
    }
  }

  const rows = report
    .split(/\r?\n/)
    .filter((line) => line.trim().startsWith("|"))
    .map(splitMarkdownTableRow)
    .filter((cells) => cells.length > 0);
  const header = rows[0] || [];
  const expectedHeader = ["Product", "Feature", "Mapping", "Explicit roles", "Explicit permissions", "Derived roles", "Derived permissions"];
  if (expectedHeader.some((label, index) => header[index] !== label)) {
    findings.push({
      severity: "error",
      rule: "radar_iam_header_mismatch",
      path: iamReportPath,
      expected: expectedHeader,
      actual: header,
    });
    return findings;
  }

  const actualRows = new Map();
  for (const cells of rows.slice(2)) {
    if (cells.length < expectedHeader.length) {
      continue;
    }
    const featureLink = [...String(cells[1] || "").matchAll(linkPattern)]
      .map((match) => String(match[1] || "").trim().replace(/\\/g, "/").split("#")[0])
      .find((link) => link.startsWith("../../artifacts/") && link.endsWith("/README.md"));
    if (!featureLink) {
      findings.push({
        severity: "error",
        rule: "radar_iam_row_missing_feature_link",
        path: iamReportPath,
        row: cells,
      });
      continue;
    }
    if (actualRows.has(featureLink)) {
      findings.push({
        severity: "error",
        rule: "radar_iam_duplicate_feature_row",
        path: iamReportPath,
        link: featureLink,
      });
    }
    actualRows.set(featureLink, {
      product_name: cells[0],
      mapping: cells[2],
      explicit_roles: cells[3],
      explicit_permissions: cells[4],
      derived_roles: cells[5],
      derived_permissions: cells[6],
    });
  }

  for (const link of expectedRows.keys()) {
    if (!actualFeatureLinks.has(link)) {
      findings.push({
        severity: "error",
        rule: "missing_radar_iam_feature_link",
        path: iamReportPath,
        link,
      });
    }
  }
  for (const [link, expected] of expectedRows) {
    const actual = actualRows.get(link);
    if (!actual) {
      findings.push({
        severity: "error",
        rule: "missing_radar_iam_feature_row",
        path: iamReportPath,
        link,
      });
      continue;
    }
    for (const field of ["product_name", "mapping", "explicit_roles", "explicit_permissions", "derived_roles", "derived_permissions"]) {
      if (actual[field] !== expected[field]) {
        findings.push({
          severity: "error",
          rule: "radar_iam_feature_row_mismatch",
          path: iamReportPath,
          link,
          field,
          expected: expected[field],
          actual: actual[field],
        });
      }
    }
  }
  for (const link of staleFeatureLinks) {
    findings.push({
      severity: "error",
      rule: "stale_radar_iam_feature_link",
      path: iamReportPath,
      link,
    });
  }

  return findings;
}

async function validateRadarServicesReportMatchesArtifacts() {
  const findings = [];
  const servicesReportPath = path.join(radarRoot, "services", "index.md");
  if (!(await exists(servicesReportPath))) {
    findings.push({
      severity: "error",
      rule: "missing_radar_services_report",
      path: servicesReportPath,
    });
    return findings;
  }

  const expectedRows = new Map();
  for (const productSlug of await listDirs(artifactsRoot)) {
    const promotion = await readJson(path.join(artifactsRoot, productSlug, "promotion.json"), null);
    if (!promotion) {
      continue;
    }
    const serviceCard = await readJson(path.join(artifactsRoot, productSlug, "card.json"), null);
    const iam = serviceCard?.iam_status_counts || {};
    expectedRows.set(`../../artifacts/${productSlug}/card.json`, {
      status: serviceCard?.validation?.product_status || promotion.product_status || "unknown",
      features: Number(serviceCard?.feature_count || promotion.promoted_feature_count || 0),
      latest_feature: serviceCard?.lifecycle?.latest_feature_date || "unknown",
      explicit_iam: Number(iam.explicit || 0),
      derived_iam: Number(iam.derived_from_permission_prefix || 0),
      unknown_iam: Number(iam.unknown || 0),
      sources: formatSourcesForReportValidation(serviceCard?.official_source_links || []) || "none",
    });
  }

  const report = await readFile(servicesReportPath, "utf8");
  const expectedServiceLinks = new Set([...expectedRows.keys()].sort());
  const actualServiceLinks = new Set();
  const staleServiceLinks = new Set();
  const reportLinks = new Set();
  const linkPattern = /\[(?:\\.|[^\]\\])*\]\(([^)]+)\)/g;

  for (const match of report.matchAll(linkPattern)) {
    const link = String(match[1] || "").trim().replace(/\\/g, "/").split("#")[0];
    reportLinks.add(link);
    if (!link.startsWith("../../artifacts/") || !link.endsWith("/card.json")) {
      continue;
    }
    if (expectedRows.has(link)) {
      actualServiceLinks.add(link);
    } else {
      staleServiceLinks.add(link);
    }
  }

  const rows = report
    .split(/\r?\n/)
    .filter((line) => line.trim().startsWith("|"))
    .map(splitMarkdownTableRow)
    .filter((cells) => cells.length > 0);
  const header = rows[0] || [];
  const expectedHeader = ["Service", "Status", "Features", "Latest feature", "Explicit IAM", "Derived IAM", "Unknown IAM", "Official sources"];
  if (expectedHeader.some((label, index) => header[index] !== label)) {
    findings.push({
      severity: "error",
      rule: "radar_services_header_mismatch",
      path: servicesReportPath,
      expected: expectedHeader,
      actual: header,
    });
    return findings;
  }

  const actualRows = new Map();
  for (const cells of rows.slice(2)) {
    if (cells.length < expectedHeader.length) {
      continue;
    }
    const serviceLink = [...String(cells[0] || "").matchAll(linkPattern)]
      .map((match) => String(match[1] || "").trim().replace(/\\/g, "/").split("#")[0])
      .find((link) => link.startsWith("../../artifacts/") && link.endsWith("/card.json"));
    if (!serviceLink) {
      findings.push({
        severity: "error",
        rule: "radar_services_row_missing_service_link",
        path: servicesReportPath,
        row: cells,
      });
      continue;
    }
    if (actualRows.has(serviceLink)) {
      findings.push({
        severity: "error",
        rule: "radar_services_duplicate_service_row",
        path: servicesReportPath,
        link: serviceLink,
      });
    }
    actualRows.set(serviceLink, {
      status: cells[1],
      features: parseIntegerCell(cells[2]),
      latest_feature: cells[3],
      explicit_iam: parseIntegerCell(cells[4]),
      derived_iam: parseIntegerCell(cells[5]),
      unknown_iam: parseIntegerCell(cells[6]),
      sources: cells[7],
    });
  }

  for (const link of expectedServiceLinks) {
    if (!actualServiceLinks.has(link)) {
      findings.push({
        severity: "error",
        rule: "missing_radar_service_artifact_link",
        path: servicesReportPath,
        link,
      });
    }
  }
  for (const link of staleServiceLinks) {
    findings.push({
      severity: "error",
      rule: "stale_radar_service_artifact_link",
      path: servicesReportPath,
      link,
    });
  }
  for (const [link, expected] of expectedRows) {
    const actual = actualRows.get(link);
    if (!actual) {
      findings.push({
        severity: "error",
        rule: "missing_radar_services_row",
        path: servicesReportPath,
        link,
      });
      continue;
    }
    for (const field of ["status", "features", "latest_feature", "explicit_iam", "derived_iam", "unknown_iam", "sources"]) {
      if (actual[field] !== expected[field]) {
        findings.push({
          severity: "error",
          rule: "radar_services_row_mismatch",
          path: servicesReportPath,
          link,
          field,
          expected: expected[field],
          actual: actual[field],
        });
      }
    }
  }
  for (const link of actualRows.keys()) {
    if (!expectedRows.has(link)) {
      findings.push({
        severity: "error",
        rule: "stale_radar_services_row",
        path: servicesReportPath,
        link,
      });
    }
  }
  for (const productSlug of await listDirs(artifactsRoot)) {
    const promotion = await readJson(path.join(artifactsRoot, productSlug, "promotion.json"), null);
    if (!promotion) {
      continue;
    }
    const serviceCardPath = path.join(artifactsRoot, productSlug, "card.json");
    const serviceCard = await readJson(serviceCardPath, null);
    const officialSourceLinks = (serviceCard?.official_source_links || []).filter(isOfficialGoogleUrl);
    if (officialSourceLinks.length === 0) {
      continue;
    }
    if (!officialSourceLinks.some((link) => reportLinks.has(link))) {
      findings.push({
        severity: "error",
        rule: "missing_radar_service_evidence_link",
        path: servicesReportPath,
        product_slug: productSlug,
        expected_one_of: officialSourceLinks,
      });
    }
  }

  return findings;
}

async function validateRadarSecurityReportMatchesArtifacts() {
  const findings = [];
  const securityReportPath = path.join(radarRoot, "security", "index.md");
  if (!(await exists(securityReportPath))) {
    findings.push({
      severity: "error",
      rule: "missing_radar_security_report",
      path: securityReportPath,
    });
    return findings;
  }

  const expectedFeatureLinks = new Map();
  for (const productSlug of await listDirs(artifactsRoot)) {
    const productDir = path.join(artifactsRoot, productSlug);
    const promotion = await readJson(path.join(productDir, "promotion.json"), null);
    if (!promotion) {
      continue;
    }
    for (const feature of promotion.promoted_features || []) {
      const featureSlug = feature?.feature_slug;
      if (!featureSlug) {
        continue;
      }
      const featureCardPath = path.join(productDir, featureSlug, "card.json");
      const featureCard = await readJson(featureCardPath, null);
      const capabilities = featureCard?.security_capabilities || [];
      if (capabilities.length === 0) {
        continue;
      }
      expectedFeatureLinks.set(`../../artifacts/${productSlug}/${featureSlug}/README.md`, {
        product_slug: productSlug,
        feature_slug: featureSlug,
        evidence_links: [...new Set(capabilities.flatMap((capability) => capability.evidence_links || []))]
          .filter(isOfficialGoogleUrl),
      });
    }
  }

  const report = await readFile(securityReportPath, "utf8");
  const actualFeatureLinks = new Set();
  const staleFeatureLinks = new Set();
  const reportLinks = new Set();
  const linkPattern = /\[(?:\\.|[^\]\\])*\]\(([^)]+)\)/g;

  for (const match of report.matchAll(linkPattern)) {
    const link = String(match[1] || "").trim().replace(/\\/g, "/").split("#")[0];
    reportLinks.add(link);
    if (!link.startsWith("../../artifacts/") || !link.endsWith("/README.md")) {
      continue;
    }
    if (expectedFeatureLinks.has(link)) {
      actualFeatureLinks.add(link);
    } else {
      staleFeatureLinks.add(link);
    }
  }

  for (const [link, expected] of expectedFeatureLinks) {
    if (!actualFeatureLinks.has(link)) {
      findings.push({
        severity: "error",
        rule: "missing_radar_security_feature_link",
        path: securityReportPath,
        product_slug: expected.product_slug,
        feature_slug: expected.feature_slug,
        link,
      });
    }
    if (expected.evidence_links.length > 0 && !expected.evidence_links.some((evidenceLink) => reportLinks.has(evidenceLink))) {
      findings.push({
        severity: "error",
        rule: "missing_radar_security_evidence_link",
        path: securityReportPath,
        product_slug: expected.product_slug,
        feature_slug: expected.feature_slug,
        expected_one_of: expected.evidence_links,
      });
    }
  }
  for (const link of staleFeatureLinks) {
    findings.push({
      severity: "error",
      rule: "stale_radar_security_feature_link",
      path: securityReportPath,
      link,
    });
  }

  return findings;
}

async function validateRadarRootIndexMatchesArtifacts() {
  const findings = [];
  const rootIndexPath = path.join(radarRoot, "index.md");
  if (!(await exists(rootIndexPath))) {
    findings.push({
      severity: "error",
      rule: "missing_radar_root_index",
      path: rootIndexPath,
    });
    return findings;
  }

  const artifactProductSlugs = new Set();
  const expectedPromotedFeatureCountByProduct = new Map();
  for (const productSlug of await listDirs(artifactsRoot)) {
    const promotion = await readJson(path.join(artifactsRoot, productSlug, "promotion.json"), null);
    if (promotion) {
      artifactProductSlugs.add(productSlug);
      expectedPromotedFeatureCountByProduct.set(productSlug, (promotion.promoted_features || []).length);
    }
  }

  const report = await readFile(rootIndexPath, "utf8");
  const expectedFeatureCount = [...artifactProductSlugs].reduce((sum, productSlug) => {
    return sum + expectedPromotedFeatureCountByProduct.get(productSlug);
  }, 0);
  const summaryExpectations = [
    ["Service cards", artifactProductSlugs.size],
    ["Promoted features", expectedFeatureCount],
  ];
  for (const [label, expected] of summaryExpectations) {
    const match = report.match(new RegExp(`^- ${label}:\\s*(\\d+)\\s*$`, "m"));
    if (!match) {
      findings.push({
        severity: "error",
        rule: "missing_radar_root_summary_count",
        path: rootIndexPath,
        summary_label: label,
        expected,
      });
      continue;
    }
    const actual = Number(match[1]);
    if (actual !== expected) {
      findings.push({
        severity: "error",
        rule: "radar_root_summary_count_mismatch",
        path: rootIndexPath,
        summary_label: label,
        expected,
        actual,
      });
    }
  }
  const expectedProductReportLinks = new Set(
    [...artifactProductSlugs].sort().map((productSlug) => `./products/${productSlug}.md`)
  );
  const expectedServiceCardLinks = new Set(
    [...artifactProductSlugs].sort().map((productSlug) => `../artifacts/${productSlug}/card.json`)
  );
  const actualProductReportLinks = new Set();
  const actualServiceCardLinks = new Set();
  const staleProductReportLinks = new Set();
  const staleServiceCardLinks = new Set();
  const linkPattern = /\[(?:\\.|[^\]\\])*\]\(([^)]+)\)/g;

  for (const match of report.matchAll(linkPattern)) {
    const link = String(match[1] || "").trim().replace(/\\/g, "/").split("#")[0];
    if (link.startsWith("./products/") && link.endsWith(".md")) {
      if (expectedProductReportLinks.has(link)) {
        actualProductReportLinks.add(link);
      } else {
        staleProductReportLinks.add(link);
      }
    }
    if (link.startsWith("../artifacts/") && link.endsWith("/card.json")) {
      if (expectedServiceCardLinks.has(link)) {
        actualServiceCardLinks.add(link);
      } else {
        staleServiceCardLinks.add(link);
      }
    }
  }

  for (const link of expectedProductReportLinks) {
    if (!actualProductReportLinks.has(link)) {
      findings.push({
        severity: "error",
        rule: "missing_radar_root_product_report_link",
        path: rootIndexPath,
        link,
      });
    }
  }
  for (const link of staleProductReportLinks) {
    findings.push({
      severity: "error",
      rule: "stale_radar_root_product_report_link",
      path: rootIndexPath,
      link,
    });
  }
  for (const link of expectedServiceCardLinks) {
    if (!actualServiceCardLinks.has(link)) {
      findings.push({
        severity: "error",
        rule: "missing_radar_root_service_card_link",
        path: rootIndexPath,
        link,
      });
    }
  }
  for (const link of staleServiceCardLinks) {
    findings.push({
      severity: "error",
      rule: "stale_radar_root_service_card_link",
      path: rootIndexPath,
      link,
    });
  }

  return findings;
}

function splitMarkdownTableRow(line) {
  const trimmed = String(line || "").trim();
  if (!trimmed.startsWith("|") || !trimmed.endsWith("|")) {
    return [];
  }
  return trimmed
    .slice(1, -1)
    .split("|")
    .map((cell) => cell.trim().replace(/\\\|/g, "|"));
}

function formatRolesForReportValidation(roles, limit = 8) {
  return (roles || [])
    .slice(0, limit)
    .map((role) => `\`${role}\``)
    .join("<br>") || "none";
}

function formatPermissionsForReportValidation(permissions, limit = 8) {
  return (permissions || [])
    .slice(0, limit)
    .map((permission) => `\`${permission.permission}\``)
    .join("<br>") || "none";
}

function formatSourcesForReportValidation(sources, limit = 3) {
  return (sources || [])
    .slice(0, limit)
    .map((url) => `[source](${url})`)
    .join("<br>");
}

function parseIntegerCell(value) {
  const parsed = Number(String(value || "").trim());
  return Number.isInteger(parsed) ? parsed : null;
}

async function validateRadarCoverageReportMatchesArtifacts() {
  const findings = [];
  const coverageReportPath = path.join(radarRoot, "coverage.md");
  if (!(await exists(coverageReportPath))) {
    findings.push({
      severity: "error",
      rule: "missing_radar_coverage_report",
      path: coverageReportPath,
    });
    return findings;
  }

  const expectedRows = new Map();
  for (const productSlug of await listDirs(artifactsRoot)) {
    const productDir = path.join(artifactsRoot, productSlug);
    const promotion = await readJson(path.join(productDir, "promotion.json"), null);
    if (!promotion) {
      continue;
    }
    const featureSlugs = (promotion.promoted_features || [])
      .map((feature) => feature?.feature_slug)
      .filter(Boolean);
    let explicit = 0;
    let derived = 0;
    let unknown = 0;
    for (const featureSlug of featureSlugs) {
      const featureCard = await readJson(path.join(productDir, featureSlug, "card.json"), null);
      const status = featureCard?.iam?.iam_mapping_status || "unknown";
      if (status === "explicit") {
        explicit += 1;
      } else if (status === "derived_from_permission_prefix") {
        derived += 1;
      } else {
        unknown += 1;
      }
    }
    expectedRows.set(productSlug, {
      product_name: promotion.product_name || productSlug,
      promoted: featureSlugs.length,
      skipped: Number(promotion.skipped_feature_count || 0),
      explicit,
      derived,
      unknown,
    });
  }

  const coverageMarkdown = await readFile(coverageReportPath, "utf8");
  const rows = coverageMarkdown
    .split(/\r?\n/)
    .filter((line) => line.trim().startsWith("|"))
    .map(splitMarkdownTableRow)
    .filter((cells) => cells.length > 0);
  const header = rows[0] || [];
  const expectedHeader = ["Product", "Slug", "Promoted", "Skipped", "Explicit IAM", "Derived IAM", "Unknown IAM"];
  if (expectedHeader.some((label, index) => header[index] !== label)) {
    findings.push({
      severity: "error",
      rule: "radar_coverage_header_mismatch",
      path: coverageReportPath,
      expected: expectedHeader,
      actual: header,
    });
    return findings;
  }

  const actualRows = new Map();
  for (const cells of rows.slice(2)) {
    if (cells.length < expectedHeader.length) {
      continue;
    }
    const productSlug = cells[1];
    if (!productSlug) {
      findings.push({
        severity: "error",
        rule: "radar_coverage_missing_product_slug",
        path: coverageReportPath,
        row: cells,
      });
      continue;
    }
    if (actualRows.has(productSlug)) {
      findings.push({
        severity: "error",
        rule: "radar_coverage_duplicate_product_slug",
        path: coverageReportPath,
        product_slug: productSlug,
      });
    }
    actualRows.set(productSlug, {
      product_name: cells[0],
      promoted: parseIntegerCell(cells[2]),
      skipped: parseIntegerCell(cells[3]),
      explicit: parseIntegerCell(cells[4]),
      derived: parseIntegerCell(cells[5]),
      unknown: parseIntegerCell(cells[6]),
    });
  }

  for (const [productSlug, expected] of expectedRows) {
    const actual = actualRows.get(productSlug);
    if (!actual) {
      findings.push({
        severity: "error",
        rule: "missing_radar_coverage_product_row",
        path: coverageReportPath,
        product_slug: productSlug,
      });
      continue;
    }
    for (const field of ["promoted", "skipped", "explicit", "derived", "unknown"]) {
      if (actual[field] !== expected[field]) {
        findings.push({
          severity: "error",
          rule: "radar_coverage_count_mismatch",
          path: coverageReportPath,
          product_slug: productSlug,
          field,
          expected: expected[field],
          actual: actual[field],
        });
      }
    }
    if (actual.product_name !== expected.product_name) {
      findings.push({
        severity: "error",
        rule: "radar_coverage_product_name_mismatch",
        path: coverageReportPath,
        product_slug: productSlug,
        expected: expected.product_name,
        actual: actual.product_name,
      });
    }
  }

  for (const productSlug of actualRows.keys()) {
    if (!expectedRows.has(productSlug)) {
      findings.push({
        severity: "error",
        rule: "stale_radar_coverage_product_row",
        path: coverageReportPath,
        product_slug: productSlug,
      });
    }
  }

  return findings;
}

async function validateStep09IndexMatchesArtifacts() {
  const findings = [];
  const step09IndexPath = path.join(step09Root, "index.json");
  const step09Index = await readJson(step09IndexPath, null);
  if (!step09Index) {
    findings.push({ severity: "error", rule: "missing_step09_index", path: step09IndexPath });
    return findings;
  }

  const expectedArtifactsRoot = path.relative(process.cwd(), artifactsRoot).replace(/\\/g, "/") || ".";
  const actualArtifactsRoot = String(step09Index.artifacts_root || "").replace(/\\/g, "/");
  if (actualArtifactsRoot !== expectedArtifactsRoot) {
    findings.push({
      severity: "error",
      rule: "step09_index_artifacts_root_mismatch",
      path: step09IndexPath,
      expected: expectedArtifactsRoot,
      actual: actualArtifactsRoot || null,
    });
  }

  const expectedStep08Root = path.relative(process.cwd(), step08Root).replace(/\\/g, "/") || ".";
  const actualStep08Root = String(step09Index.source_step08_root || "").replace(/\\/g, "/");
  if (actualStep08Root !== expectedStep08Root) {
    findings.push({
      severity: "error",
      rule: "step09_index_step08_root_mismatch",
      path: step09IndexPath,
      expected: expectedStep08Root,
      actual: actualStep08Root || null,
    });
  }

  const expectedProducts = new Map();
  for (const productSlug of await listDirs(artifactsRoot)) {
    const promotionPath = path.join(artifactsRoot, productSlug, "promotion.json");
    const promotion = await readJson(promotionPath, null);
    if (!promotion) {
      continue;
    }
    expectedProducts.set(productSlug, {
      product_name: promotion.product_name || productSlug,
      service_card: `artifacts/${productSlug}/card.json`,
      product_index: `artifacts/${productSlug}/index.md`,
      promotion_json: `artifacts/${productSlug}/promotion.json`,
      promoted_feature_count: Number(promotion.promoted_feature_count || 0),
      skipped_feature_count: Number(promotion.skipped_feature_count || 0),
    });
  }

  const indexProducts = Array.isArray(step09Index.products) ? step09Index.products : [];
  if (!Array.isArray(step09Index.products)) {
    findings.push({
      severity: "error",
      rule: "step09_index_products_not_array",
      path: step09IndexPath,
      actual_type: step09Index.products === null ? "null" : typeof step09Index.products,
    });
  }

  const actualProducts = new Map();
  for (const product of indexProducts) {
    const productSlug = product?.product_slug;
    if (!productSlug) {
      findings.push({ severity: "error", rule: "step09_index_product_missing_slug", path: step09IndexPath });
      continue;
    }
    if (actualProducts.has(productSlug)) {
      findings.push({
        severity: "error",
        rule: "step09_index_duplicate_product",
        path: step09IndexPath,
        product_slug: productSlug,
      });
    }
    actualProducts.set(productSlug, product);
  }

  if (step09Index.product_count !== expectedProducts.size) {
    findings.push({
      severity: "error",
      rule: "step09_product_count_mismatch",
      path: step09IndexPath,
      expected: expectedProducts.size,
      actual: step09Index.product_count,
    });
  }

  const expectedPromotedFeatureCount = [...expectedProducts.values()]
    .reduce((sum, product) => sum + product.promoted_feature_count, 0);
  const expectedSkippedFeatureCount = [...expectedProducts.values()]
    .reduce((sum, product) => sum + product.skipped_feature_count, 0);
  if (step09Index.promoted_feature_count !== expectedPromotedFeatureCount) {
    findings.push({
      severity: "error",
      rule: "step09_promoted_feature_count_mismatch",
      path: step09IndexPath,
      expected: expectedPromotedFeatureCount,
      actual: step09Index.promoted_feature_count,
    });
  }
  if (step09Index.skipped_feature_count !== expectedSkippedFeatureCount) {
    findings.push({
      severity: "error",
      rule: "step09_skipped_feature_count_mismatch",
      path: step09IndexPath,
      expected: expectedSkippedFeatureCount,
      actual: step09Index.skipped_feature_count,
    });
  }

  for (const [productSlug, expected] of expectedProducts) {
    const actual = actualProducts.get(productSlug);
    if (!actual) {
      findings.push({
        severity: "error",
        rule: "step09_index_missing_product",
        path: step09IndexPath,
        product_slug: productSlug,
      });
      continue;
    }
    for (const field of ["service_card", "product_index", "promotion_json"]) {
      const actualPath = String(actual[field] || "").replace(/\\/g, "/");
      if (actualPath !== expected[field]) {
        findings.push({
          severity: "error",
          rule: "step09_index_product_path_mismatch",
          path: step09IndexPath,
          product_slug: productSlug,
          field,
          expected: expected[field],
          actual: actualPath || null,
        });
      }
    }
    for (const field of ["promoted_feature_count", "skipped_feature_count"]) {
      if (Number(actual[field] || 0) !== expected[field]) {
        findings.push({
          severity: "error",
          rule: "step09_index_product_count_mismatch",
          path: step09IndexPath,
          product_slug: productSlug,
          field,
          expected: expected[field],
          actual: actual[field],
        });
      }
    }
  }

  for (const productSlug of actualProducts.keys()) {
    if (!expectedProducts.has(productSlug)) {
      findings.push({
        severity: "error",
        rule: "step09_index_stale_product",
        path: step09IndexPath,
        product_slug: productSlug,
      });
    }
  }

  return findings;
}

async function validateRadarMatchesArtifacts() {
  const findings = [];
  const products = [];

  for (const productSlug of await listDirs(artifactsRoot)) {
    const promotionPath = path.join(artifactsRoot, productSlug, "promotion.json");
    const promotion = await readJson(promotionPath, null);
    if (!promotion) {
      continue;
    }
    products.push({
      product_slug: productSlug,
      skipped_feature_count: Number(promotion.skipped_feature_count || 0),
      feature_slugs: (promotion.promoted_features || [])
        .map((feature) => feature?.feature_slug)
        .filter(Boolean)
        .sort((left, right) => left.localeCompare(right)),
    });
  }

  const artifactProductSlugs = new Set(products.map((product) => product.product_slug));
  const radarProductsDir = path.join(radarRoot, "products");
  const radarProductSlugs = new Set(
    (await listFilesRecursive(radarProductsDir))
      .filter((file) => path.dirname(file) === radarProductsDir)
      .filter((file) => file.endsWith(".md"))
      .map((file) => path.basename(file, ".md"))
  );

  for (const productSlug of artifactProductSlugs) {
    if (!radarProductSlugs.has(productSlug)) {
      findings.push({
        severity: "error",
        rule: "missing_radar_product_report",
        path: path.join(radarProductsDir, `${productSlug}.md`),
        product_slug: productSlug,
      });
    }
  }

  for (const productSlug of radarProductSlugs) {
    if (!artifactProductSlugs.has(productSlug)) {
      findings.push({
        severity: "error",
        rule: "stale_radar_product_report",
        path: path.join(radarProductsDir, `${productSlug}.md`),
        product_slug: productSlug,
      });
    }
  }

  for (const product of products) {
    const reportPath = path.join(radarProductsDir, `${product.product_slug}.md`);
    if (!(await exists(reportPath))) {
      continue;
    }
    const report = await readFile(reportPath, "utf8");
    const expectedFeatureLinks = new Set(product.feature_slugs.map((featureSlug) => `../../artifacts/${product.product_slug}/${featureSlug}/README.md`));
    const expectedServiceCardLink = `../../artifacts/${product.product_slug}/card.json`;
    const expectedArtifactIndexLink = `../../artifacts/${product.product_slug}/index.md`;
    const expectedFeatureRows = new Map();
    const actualFeatureLinks = new Set();
    const staleFeatureLinks = new Set();
    const linkPattern = /\[(?:\\.|[^\]\\])*\]\(([^)]+)\)/g;
    const reportLinks = new Set();
    for (const match of report.matchAll(linkPattern)) {
      const link = String(match[1] || "").trim().replace(/\\/g, "/").split("#")[0];
      reportLinks.add(link);
      if (!link.startsWith("../../artifacts/") || !link.endsWith("/README.md")) {
        continue;
      }
      if (expectedFeatureLinks.has(link)) {
        actualFeatureLinks.add(link);
      } else {
        staleFeatureLinks.add(link);
      }
    }
    const rows = report
      .split(/\r?\n/)
      .filter((line) => line.trim().startsWith("|"))
      .map(splitMarkdownTableRow)
      .filter((cells) => cells.length > 0);
    const header = rows[0] || [];
    const expectedHeader = ["Feature", "IAM", "Explicit roles", "Explicit permissions", "Derived roles", "Derived permissions", "Coverage", "Official sources"];
    if (expectedHeader.some((label, index) => header[index] !== label)) {
      findings.push({
        severity: "error",
        rule: "radar_product_feature_header_mismatch",
        path: reportPath,
        product_slug: product.product_slug,
        expected: expectedHeader,
        actual: header,
      });
    }
    const summaryExpectations = [
      ["Promoted features", product.feature_slugs.length],
      ["Skipped features during promotion", product.skipped_feature_count],
    ];
    for (const [label, expected] of summaryExpectations) {
      const match = report.match(new RegExp(`^- ${label}:\\s*(\\d+)\\s*$`, "m"));
      if (!match) {
        findings.push({
          severity: "error",
          rule: "missing_radar_product_summary_count",
          path: reportPath,
          product_slug: product.product_slug,
          summary_label: label,
          expected,
        });
        continue;
      }
      const actual = Number(match[1]);
      if (actual !== expected) {
        findings.push({
          severity: "error",
          rule: "radar_product_summary_count_mismatch",
          path: reportPath,
          product_slug: product.product_slug,
          summary_label: label,
          expected,
          actual,
        });
      }
    }
    if (!reportLinks.has(expectedServiceCardLink)) {
      findings.push({
        severity: "error",
        rule: "missing_radar_product_service_card_link",
        path: reportPath,
        product_slug: product.product_slug,
        link: expectedServiceCardLink,
      });
    }
    if (!reportLinks.has(expectedArtifactIndexLink)) {
      findings.push({
        severity: "error",
        rule: "missing_radar_product_artifact_index_link",
        path: reportPath,
        product_slug: product.product_slug,
        link: expectedArtifactIndexLink,
      });
    }
    for (const link of expectedFeatureLinks) {
      if (!actualFeatureLinks.has(link)) {
        findings.push({
          severity: "error",
          rule: "missing_radar_feature_artifact_link",
          path: reportPath,
          product_slug: product.product_slug,
          link,
        });
      }
    }
    for (const link of staleFeatureLinks) {
      findings.push({
        severity: "error",
        rule: "stale_radar_feature_artifact_link",
        path: reportPath,
        product_slug: product.product_slug,
        link,
      });
    }
    for (const featureSlug of product.feature_slugs) {
      const featureCardPath = path.join(artifactsRoot, product.product_slug, featureSlug, "card.json");
      const featureCard = await readJson(featureCardPath, null);
      const officialSourceLinks = (featureCard?.evidence?.source_links || []).filter(isOfficialGoogleUrl);
      const iam = featureCard?.iam || {};
      expectedFeatureRows.set(`../../artifacts/${product.product_slug}/${featureSlug}/README.md`, {
        iam: iam.iam_mapping_status || "unknown",
        explicit_roles: formatRolesForReportValidation(iam.explicit_roles),
        explicit_permissions: formatPermissionsForReportValidation(iam.explicit_permissions),
        derived_roles: formatRolesForReportValidation(iam.derived_roles),
        derived_permissions: formatPermissionsForReportValidation(iam.derived_permissions),
        coverage: featureCard?.coverage_status || "",
        sources: formatSourcesForReportValidation(featureCard?.evidence?.source_links || []),
      });
      if (officialSourceLinks.length === 0) {
        continue;
      }
      if (!officialSourceLinks.some((link) => reportLinks.has(link))) {
        findings.push({
          severity: "error",
          rule: "missing_radar_feature_evidence_link",
          path: reportPath,
          product_slug: product.product_slug,
          feature_slug: featureSlug,
          expected_one_of: officialSourceLinks,
        });
      }
    }
    const actualFeatureRows = new Map();
    for (const cells of rows.slice(2)) {
      if (cells.length < expectedHeader.length) {
        continue;
      }
      const featureLink = [...String(cells[0] || "").matchAll(linkPattern)]
        .map((match) => String(match[1] || "").trim().replace(/\\/g, "/").split("#")[0])
        .find((link) => link.startsWith("../../artifacts/") && link.endsWith("/README.md"));
      if (!featureLink) {
        findings.push({
          severity: "error",
          rule: "radar_product_feature_row_missing_link",
          path: reportPath,
          product_slug: product.product_slug,
          row: cells,
        });
        continue;
      }
      if (actualFeatureRows.has(featureLink)) {
        findings.push({
          severity: "error",
          rule: "radar_product_duplicate_feature_row",
          path: reportPath,
          product_slug: product.product_slug,
          link: featureLink,
        });
      }
      actualFeatureRows.set(featureLink, {
        iam: cells[1],
        explicit_roles: cells[2],
        explicit_permissions: cells[3],
        derived_roles: cells[4],
        derived_permissions: cells[5],
        coverage: cells[6],
        sources: cells[7],
      });
    }
    for (const [link, expected] of expectedFeatureRows) {
      const actual = actualFeatureRows.get(link);
      if (!actual) {
        findings.push({
          severity: "error",
          rule: "missing_radar_product_feature_row",
          path: reportPath,
          product_slug: product.product_slug,
          link,
        });
        continue;
      }
      for (const field of ["iam", "explicit_roles", "explicit_permissions", "derived_roles", "derived_permissions", "coverage", "sources"]) {
        if (actual[field] !== expected[field]) {
          findings.push({
            severity: "error",
            rule: "radar_product_feature_row_mismatch",
            path: reportPath,
            product_slug: product.product_slug,
            link,
            field,
            expected: expected[field],
            actual: actual[field],
          });
        }
      }
    }
  }

  const step10IndexPath = path.join(step10Root, "index.json");
  const step10Index = await readJson(step10IndexPath, null);
  if (!step10Index) {
    findings.push({ severity: "error", rule: "missing_step10_index", path: step10IndexPath });
    return findings;
  }

  const expectedArtifactsRoot = path.relative(process.cwd(), artifactsRoot).replace(/\\/g, "/") || ".";
  const expectedRadarRoot = path.relative(process.cwd(), radarRoot).replace(/\\/g, "/") || ".";
  const actualArtifactsRoot = String(step10Index.artifacts_root || "").replace(/\\/g, "/");
  const actualRadarRoot = String(step10Index.radar_root || "").replace(/\\/g, "/");
  if (actualArtifactsRoot !== expectedArtifactsRoot) {
    findings.push({
      severity: "error",
      rule: "step10_index_artifacts_root_mismatch",
      path: step10IndexPath,
      expected: expectedArtifactsRoot,
      actual: actualArtifactsRoot || null,
    });
  }
  if (actualRadarRoot !== expectedRadarRoot) {
    findings.push({
      severity: "error",
      rule: "step10_index_radar_root_mismatch",
      path: step10IndexPath,
      expected: expectedRadarRoot,
      actual: actualRadarRoot || null,
    });
  }

  const featureCount = products.reduce((sum, product) => sum + product.feature_slugs.length, 0);
  if (step10Index.product_count !== products.length) {
    findings.push({
      severity: "error",
      rule: "step10_product_count_mismatch",
      path: step10IndexPath,
      expected: products.length,
      actual: step10Index.product_count,
    });
  }
  if (step10Index.feature_count !== featureCount) {
    findings.push({
      severity: "error",
      rule: "step10_feature_count_mismatch",
      path: step10IndexPath,
      expected: featureCount,
      actual: step10Index.feature_count,
    });
  }

  const expectedFixedReports = {
    index: "radar/index.md",
    iam: "radar/iam/index.md",
    security: "radar/security/index.md",
    services: "radar/services/index.md",
    coverage: "radar/coverage.md",
  };
  for (const [reportKey, expectedReport] of Object.entries(expectedFixedReports)) {
    const actualReport = step10Index.reports?.[reportKey]
      ? String(step10Index.reports[reportKey]).replace(/\\/g, "/")
      : "";
    if (actualReport !== expectedReport) {
      findings.push({
        severity: "error",
        rule: "step10_index_fixed_report_path_mismatch",
        path: step10IndexPath,
        report_key: reportKey,
        expected: expectedReport,
        actual: actualReport || null,
      });
      continue;
    }
    if (!(await exists(path.resolve(actualReport)))) {
      findings.push({
        severity: "error",
        rule: "step10_index_fixed_report_missing",
        path: step10IndexPath,
        report_key: reportKey,
        report: actualReport,
      });
    }
  }

  const expectedReports = new Set([...artifactProductSlugs].sort().map((productSlug) => `radar/products/${productSlug}.md`));
  const productReports = step10Index.reports?.products;
  if (!Array.isArray(productReports)) {
    findings.push({
      severity: "error",
      rule: "step10_index_product_reports_not_array",
      path: step10IndexPath,
      actual_type: productReports === null ? "null" : typeof productReports,
    });
  }
  const actualProductReports = Array.isArray(productReports)
    ? productReports.map((report) => String(report).replace(/\\/g, "/"))
    : [];
  const actualReports = new Set(actualProductReports);
  const seenReports = new Set();
  for (const report of actualProductReports) {
    if (seenReports.has(report)) {
      findings.push({
        severity: "error",
        rule: "step10_index_duplicate_product_report",
        path: step10IndexPath,
        report,
      });
    }
    seenReports.add(report);
  }
  for (const report of expectedReports) {
    if (!actualReports.has(report)) {
      findings.push({ severity: "error", rule: "step10_index_missing_product_report", path: step10IndexPath, report });
    }
  }
  for (const report of actualReports) {
    if (!expectedReports.has(report)) {
      findings.push({ severity: "error", rule: "step10_index_stale_product_report", path: step10IndexPath, report });
    }
  }

  return findings;
}

async function main() {
  const artifactValidation = await validateArtifacts();
  const artifactIndexFindings = await validateArtifactProductIndexes();
  const artifactMarkdownExternalLinkFindings = await validateArtifactMarkdownExternalLinksAreOfficial();
  const radarFindings = await validateRadarDoesNotReferenceDataSteps();
  const radarArtifactLinkFindings = await validateRadarArtifactLinks();
  const radarExternalLinkFindings = await validateRadarExternalLinksAreOfficial();
  const radarIamTableFindings = await validateRadarIamTablesSeparateExplicitAndDerived();
  const radarIamReportFindings = await validateRadarIamReportMatchesArtifacts();
  const radarServicesReportFindings = await validateRadarServicesReportMatchesArtifacts();
  const radarSecurityReportFindings = await validateRadarSecurityReportMatchesArtifacts();
  const radarRootIndexFindings = await validateRadarRootIndexMatchesArtifacts();
  const radarCoverageReportFindings = await validateRadarCoverageReportMatchesArtifacts();
  const step09IndexFindings = await validateStep09IndexMatchesArtifacts();
  const radarArtifactFindings = await validateRadarMatchesArtifacts();
  const findings = [
    ...artifactValidation.findings,
    ...artifactIndexFindings,
    ...artifactMarkdownExternalLinkFindings,
    ...radarFindings,
    ...radarArtifactLinkFindings,
    ...radarExternalLinkFindings,
    ...radarIamTableFindings,
    ...radarIamReportFindings,
    ...radarServicesReportFindings,
    ...radarSecurityReportFindings,
    ...radarRootIndexFindings,
    ...radarCoverageReportFindings,
    ...step09IndexFindings,
    ...radarArtifactFindings,
  ];
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
