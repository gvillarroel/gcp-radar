#!/usr/bin/env zx

import { access, readFile, readdir, writeFile, mkdir } from "node:fs/promises";
import path from "node:path";

const artifactsRoot = path.resolve(process.env.GCP_RADAR_VALIDATE_ARTIFACTS_ROOT || "artifacts");
const radarRoot = path.resolve(process.env.GCP_RADAR_VALIDATE_RADAR_ROOT || "radar");
const step08Root = path.resolve(process.env.GCP_RADAR_VALIDATE_STEP08_ROOT || "data/step-08/current");
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
    } else {
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
    const actualFeatureLinks = new Set();
    const staleFeatureLinks = new Set();
    const linkPattern = /\[(?:\\.|[^\]\\])*\]\(([^)]+)\)/g;

    for (const match of indexMarkdown.matchAll(linkPattern)) {
      const link = String(match[1] || "").trim().replace(/\\/g, "/").split("#")[0];
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

  const artifactProductSlugs = new Set();
  for (const productSlug of await listDirs(artifactsRoot)) {
    if (await exists(path.join(artifactsRoot, productSlug, "promotion.json"))) {
      artifactProductSlugs.add(productSlug);
    }
  }

  const report = await readFile(servicesReportPath, "utf8");
  const expectedServiceLinks = new Set(
    [...artifactProductSlugs].sort().map((productSlug) => `../../artifacts/${productSlug}/card.json`)
  );
  const actualServiceLinks = new Set();
  const staleServiceLinks = new Set();
  const linkPattern = /\[(?:\\.|[^\]\\])*\]\(([^)]+)\)/g;

  for (const match of report.matchAll(linkPattern)) {
    const link = String(match[1] || "").trim().replace(/\\/g, "/").split("#")[0];
    if (!link.startsWith("../../artifacts/") || !link.endsWith("/card.json")) {
      continue;
    }
    if (expectedServiceLinks.has(link)) {
      actualServiceLinks.add(link);
    } else {
      staleServiceLinks.add(link);
    }
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
    const actualFeatureLinks = new Set();
    const staleFeatureLinks = new Set();
    const linkPattern = /\[(?:\\.|[^\]\\])*\]\(([^)]+)\)/g;
    for (const match of report.matchAll(linkPattern)) {
      const link = String(match[1] || "").trim().replace(/\\/g, "/").split("#")[0];
      const prefix = `../../artifacts/${product.product_slug}/`;
      if (!link.startsWith(prefix) || !link.endsWith("/README.md")) {
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
  }

  const step10IndexPath = path.join(step10Root, "index.json");
  const step10Index = await readJson(step10IndexPath, null);
  if (!step10Index) {
    findings.push({ severity: "error", rule: "missing_step10_index", path: step10IndexPath });
    return findings;
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
  const actualReports = new Set((step10Index.reports?.products || []).map((report) => String(report).replace(/\\/g, "/")));
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
  const radarServicesReportFindings = await validateRadarServicesReportMatchesArtifacts();
  const radarArtifactFindings = await validateRadarMatchesArtifacts();
  const findings = [
    ...artifactValidation.findings,
    ...artifactIndexFindings,
    ...artifactMarkdownExternalLinkFindings,
    ...radarFindings,
    ...radarArtifactLinkFindings,
    ...radarExternalLinkFindings,
    ...radarIamTableFindings,
    ...radarServicesReportFindings,
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
