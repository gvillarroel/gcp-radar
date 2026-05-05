#!/usr/bin/env zx

import { access, mkdir, readFile, readdir, writeFile } from "node:fs/promises";
import path from "node:path";

const schemaVersion = "step-08-product-feature-cards-v1";
const step02Root = path.resolve(process.env.GCP_RADAR_STEP08_STEP02_ROOT || "data/step-02/current");
const step06Root = path.resolve(process.env.GCP_RADAR_STEP08_STEP06_ROOT || "data/step-06/current");
const step07Root = path.resolve(process.env.GCP_RADAR_STEP08_STEP07_ROOT || "data/step-07/current");
const step05Root = path.resolve(process.env.GCP_RADAR_STEP08_STEP05_ROOT || "data/step-05/current");
const step04Root = path.resolve(process.env.GCP_RADAR_STEP08_STEP04_ROOT || "data/step-04/current");
const outputRoot = path.resolve(process.env.GCP_RADAR_STEP08_OUTPUT_ROOT || "data/step-08/current");
const outputProductsDir = path.join(outputRoot, "products");
const productFilter = (process.env.GCP_RADAR_STEP08_PRODUCTS || "")
  .split(",")
  .map((value) => value.trim().toLowerCase())
  .filter(Boolean);

const officialGoogleHosts = [
  "cloud.google.com",
  "docs.cloud.google.com",
  "developers.google.com",
  "firebase.google.com",
  "workspace.google.com",
  "googleapis.dev",
];

const securitySignals = [
  "access", "allow", "armor", "audit", "auth", "authorization", "certificate",
  "confidential", "constraint", "credential", "dnssec", "encrypt", "firewall",
  "iam", "identity", "key", "kms", "logging", "permission", "policy",
  "private", "role", "secret", "security", "threat", "token",
];

function compareStrings(left, right) {
  return String(left || "").localeCompare(String(right || ""));
}

function uniqueSorted(values) {
  return [...new Set(values.filter(Boolean))].sort(compareStrings);
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

async function readText(filePath, fallback = "") {
  if (!(await exists(filePath))) {
    return fallback;
  }
  return readFile(filePath, "utf8");
}

async function writeJson(filePath, value) {
  await mkdir(path.dirname(filePath), { recursive: true });
  await writeFile(filePath, `${JSON.stringify(value, null, 2)}\n`);
}

function printIndexSummary(index) {
  if (process.env.GCP_RADAR_PRINT_FULL_INDEX === "1") {
    console.log(JSON.stringify(index, null, 2));
    return;
  }

  console.log(JSON.stringify({
    schema_version: index.schema_version,
    generated_at: index.generated_at,
    output_root: index.output_root,
    product_count: index.product_count,
    feature_count: index.feature_count,
    explicit_iam_feature_count: index.explicit_iam_feature_count,
    derived_iam_feature_count: index.derived_iam_feature_count,
    unknown_iam_feature_count: index.unknown_iam_feature_count,
    index_json: path.posix.join(index.output_root, "index.json"),
  }, null, 2));
}

function relativeToCwd(target) {
  return path.relative(process.cwd(), target).replace(/\\/g, "/");
}

function slugify(text) {
  return String(text || "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .replace(/-{2,}/g, "-");
}

function normalizeText(text) {
  return String(text || "")
    .toLowerCase()
    .replace(/[`*_>#~[\]{}()]/g, " ")
    .replace(/[^\p{L}\p{N}.:/_-]+/gu, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function tokenize(text) {
  return normalizeText(text)
    .split(/[^a-z0-9]+/i)
    .map((token) => token.trim())
    .filter((token) => token.length >= 3);
}

function normalizeUrl(input) {
  try {
    const url = new URL(input);
    url.hash = "";
    if (url.searchParams.has("hl")) {
      url.searchParams.delete("hl");
    }
    const entries = [...url.searchParams.entries()]
      .filter(([key]) => !/^utm_/i.test(key))
      .sort(([left], [right]) => left.localeCompare(right));
    url.search = "";
    for (const [key, value] of entries) {
      url.searchParams.append(key, value);
    }
    return url.toString().replace(/\/$/, "");
  } catch {
    return String(input || "").trim();
  }
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

function arrayOfStrings(value) {
  return Array.isArray(value) ? value.map((item) => String(item || "")).filter(Boolean) : [];
}

function collectEvidenceText(feature) {
  const chunks = [
    feature.feature_name,
    feature.feature_summary,
    feature.extended_definition,
    feature.evidence_summary,
    ...arrayOfStrings(feature.keywords),
  ];
  const pages = [...(feature.supporting_pages || []), ...(feature.reranked_pages || []), ...(feature.candidate_pages || [])];
  for (const page of pages) {
    chunks.push(page.title, page.url, ...(arrayOfStrings(page.evidence_snippets)));
  }
  return chunks.filter(Boolean).join("\n");
}

function extractPermissionMentions(text) {
  const matches = String(text || "").match(/\b[a-z][a-z0-9]*\.[A-Za-z0-9_.]+\b/g) || [];
  return uniqueSorted(matches
    .map((value) => value.replace(/[.,;:)\]]+$/g, ""))
    .filter((value) => value.includes("."))
    .filter((value) => !value.startsWith("www."))
    .filter((value) => !value.startsWith("docs."))
    .filter((value) => !value.startsWith("cloud."))
    .filter((value) => !value.startsWith("google.")));
}

function extractRoleMentions(text) {
  const matches = String(text || "").match(/\broles\/[A-Za-z0-9_.]+\b/g) || [];
  return uniqueSorted(matches.map((value) => value.replace(/[.,;:)\]]+$/g, "")));
}

function permissionGroup(permission) {
  return String(permission || "").split(".")[0].toLowerCase();
}

function loadPermissionInventory(permissionsIndex) {
  const permissionsByName = new Map();
  const groups = new Map();

  for (const permission of permissionsIndex?.permissions || []) {
    permissionsByName.set(permission.permission, permission);
    const group = permission.group || permissionGroup(permission.permission);
    if (!groups.has(group)) {
      groups.set(group, []);
    }
    groups.get(group).push(permission);
  }

  return { permissionsByName, groups };
}

async function loadIamInventoryFromStep05() {
  const rolesIndexPath = path.join(step05Root, "roles", "index.json");
  const permissionsIndexPath = path.join(step05Root, "permissions", "index.json");
  const roleItemsDir = path.join(step05Root, "roles", "items");
  const rolesIndex = await readJson(rolesIndexPath, { roles: [] });
  const permissionsIndex = await readJson(permissionsIndexPath, { permissions: [] });

  if (!(await exists(roleItemsDir))) {
    return { rolesIndex, permissionsIndex, source: "indexes" };
  }

  const roleFiles = (await readdir(roleItemsDir, { withFileTypes: true }))
    .filter((entry) => entry.isFile() && entry.name.endsWith(".json"))
    .map((entry) => entry.name)
    .sort(compareStrings);

  if (roleFiles.length <= (rolesIndex.roles || []).length) {
    return { rolesIndex, permissionsIndex, source: "indexes" };
  }

  const roles = [];
  for (const file of roleFiles) {
    const role = await readJson(path.join(roleItemsDir, file), null);
    if (role?.name) {
      roles.push(role);
    }
  }

  const permissionRoles = new Map();
  for (const role of roles) {
    for (const permission of role.included_permissions || []) {
      if (!permissionRoles.has(permission)) {
        permissionRoles.set(permission, []);
      }
      permissionRoles.get(permission).push(role.name);
    }
  }

  return {
    source: "role_items_cache",
    rolesIndex: {
      ...rolesIndex,
      role_count: roles.length,
      roles: roles.map((role) => ({
        name: role.name,
        role_slug: role.role_slug || slugify(role.name.replace(/^roles\//, "")),
        title: role.title || "",
        stage: role.stage || "",
        etag: role.etag || "",
        permission_count: (role.included_permissions || []).length,
        permission_groups: role.permission_groups || uniqueSorted((role.included_permissions || []).map(permissionGroup)),
        item_path: relativeToCwd(path.join(roleItemsDir, `${role.role_slug || slugify(role.name.replace(/^roles\//, ""))}.json`)),
      })).sort((left, right) => compareStrings(left.name, right.name)),
    },
    permissionsIndex: {
      ...permissionsIndex,
      permission_count: permissionRoles.size,
      permission_group_count: new Set([...permissionRoles.keys()].map(permissionGroup)).size,
      permissions: [...permissionRoles.entries()]
        .sort(([left], [right]) => compareStrings(left, right))
        .map(([permission, rolesForPermission]) => ({
          permission,
          group: permissionGroup(permission),
          role_count: rolesForPermission.length,
          roles: uniqueSorted(rolesForPermission),
        })),
    },
  };
}

function inferProductPermissionGroups(productName, productSlug, selection, permissionsByGroup) {
  const tokens = new Set([
    ...tokenize(productName),
    ...tokenize(productSlug),
    ...String(productSlug || "").split("-").filter((token) => token.length >= 3),
  ]);
  const urls = (selection?.selected_sources || []).map((source) => String(source.url || "").toLowerCase()).join(" ");
  const groups = [];

  for (const group of permissionsByGroup.keys()) {
    if (tokens.has(group) || urls.includes(`/${group}/`) || urls.includes(`${group}/docs`) || urls.includes(`roles-permissions/${group}`)) {
      groups.push(group);
    }
  }

  return uniqueSorted(groups);
}

function buildExplicitIamMapping(feature, rolesIndex, permissionsByName) {
  const evidenceText = collectEvidenceText(feature);
  const mentionedPermissions = extractPermissionMentions(evidenceText);
  const mentionedRoles = extractRoleMentions(evidenceText);
  const rolesByName = new Set((rolesIndex?.roles || []).map((role) => role.name));
  const explicitPermissions = [];
  const explicitRoles = [];
  const missingPermissions = [];
  const missingRoles = [];

  for (const permission of mentionedPermissions) {
    const inventoryPermission = permissionsByName.get(permission);
    if (inventoryPermission) {
      explicitPermissions.push({
        permission,
        group: inventoryPermission.group || permissionGroup(permission),
        roles: uniqueSorted(inventoryPermission.roles || []),
      });
    } else {
      missingPermissions.push(permission);
    }
  }

  for (const role of mentionedRoles) {
    if (rolesByName.has(role)) {
      explicitRoles.push(role);
    } else {
      missingRoles.push(role);
    }
  }

  return {
    explicitPermissions,
    explicitRoles: uniqueSorted([
      ...explicitRoles,
      ...explicitPermissions.flatMap((permission) => permission.roles || []),
    ]),
    missingPermissions,
    missingRoles,
  };
}

function buildDerivedIamMapping(feature, productPermissionGroups, permissionsByGroup) {
  if (productPermissionGroups.length === 0) {
    return { derivedPermissions: [], derivedRoles: [], relatedGroups: [] };
  }

  const featureTokens = new Set(tokenize([
    feature.feature_name,
    feature.feature_summary,
    feature.extended_definition,
    ...(feature.source_links || []),
  ].join(" ")));

  const derivedPermissions = [];
  for (const group of productPermissionGroups) {
    const permissions = permissionsByGroup.get(group) || [];
    for (const permission of permissions) {
      const tailTokens = tokenize(permission.permission.split(".").slice(1).join(" "));
      const score = tailTokens.filter((token) => featureTokens.has(token)).length;
      if (score > 0) {
        derivedPermissions.push({
          permission: permission.permission,
          group,
          roles: uniqueSorted(permission.roles || []),
          match_score: score,
        });
      }
    }
  }

  derivedPermissions.sort((left, right) => right.match_score - left.match_score || compareStrings(left.permission, right.permission));
  const selectedPermissions = derivedPermissions.slice(0, 20);
  return {
    derivedPermissions: selectedPermissions,
    derivedRoles: uniqueSorted(selectedPermissions.flatMap((permission) => permission.roles || [])),
    relatedGroups: productPermissionGroups,
  };
}

function detectSecurityCapabilities(feature) {
  const text = normalizeText(collectEvidenceText(feature));
  const found = securitySignals.filter((signal) => text.includes(signal));
  return uniqueSorted(found).map((signal) => ({
    capability: signal,
    evidence_links: arrayOfStrings(feature.source_links).filter(isOfficialGoogleUrl).slice(0, 4),
  }));
}

function latestIsoDate(values) {
  const candidates = arrayOfStrings(values)
    .map((value) => value.trim())
    .filter(Boolean)
    .sort((left, right) => {
      const leftTime = Date.parse(left);
      const rightTime = Date.parse(right);
      if (Number.isFinite(leftTime) && Number.isFinite(rightTime)) {
        return rightTime - leftTime;
      }
      return compareStrings(right, left);
    });
  return candidates[0] || "";
}

function aggregateSecurityCapabilities(features) {
  const capabilities = new Map();

  for (const feature of features) {
    for (const item of feature.security_capabilities || []) {
      const capability = String(item.capability || "");
      if (!capability) {
        continue;
      }
      if (!capabilities.has(capability)) {
        capabilities.set(capability, {
          capability,
          feature_count: 0,
          evidence_links: [],
        });
      }
      const aggregate = capabilities.get(capability);
      aggregate.feature_count += 1;
      aggregate.evidence_links.push(...arrayOfStrings(item.evidence_links));
    }
  }

  return [...capabilities.values()]
    .map((item) => ({
      capability: item.capability,
      feature_count: item.feature_count,
      evidence_links: uniqueSorted(item.evidence_links.filter(isOfficialGoogleUrl)),
    }))
    .sort((left, right) => right.feature_count - left.feature_count || compareStrings(left.capability, right.capability));
}

function gateFeatureMap(gate) {
  const map = new Map();
  for (const feature of gate?.features || []) {
    map.set(feature.feature_slug || slugify(feature.feature_name), feature);
  }
  for (const feature of gate?.failed_features || []) {
    map.set(feature.feature_slug || slugify(feature.feature_name), feature);
  }
  for (const feature of gate?.warned_features || []) {
    map.set(feature.feature_slug || slugify(feature.feature_name), feature);
  }
  return map;
}

function buildFeatureCard(feature, gateFeature, iamMapping) {
  const featureSlug = feature.feature_slug || gateFeature?.feature_slug || slugify(feature.feature_name);
  const sourceLinks = uniqueSorted(arrayOfStrings(feature.source_links).map(normalizeUrl));
  const officialSourceLinks = sourceLinks.filter(isOfficialGoogleUrl);
  const supportingPages = (feature.supporting_pages || feature.reranked_pages || []).map((page) => ({
    title: String(page.title || ""),
    url: normalizeUrl(page.url || ""),
    source_id: String(page.source_id || ""),
    final_score: Number(page.final_score || page.finalScore || 0),
    relevance: String(page.re_rank_relevance || page.rerank_relevance || page.relevance || ""),
    evidence_snippets: arrayOfStrings(page.evidence_snippets).slice(0, 3),
  })).filter((page) => page.url);

  const iamStatus = iamMapping.explicitPermissions.length > 0 || iamMapping.explicitRoles.length > 0
    ? "explicit"
    : iamMapping.derivedPermissions.length > 0
      ? "derived_from_permission_prefix"
      : "unknown";

  return {
    feature_name: String(feature.feature_name || ""),
    feature_slug: featureSlug,
    summary: String(feature.feature_summary || ""),
    extended_definition: String(feature.extended_definition || ""),
    lifecycle: {
      latest_feature_date: String(feature.latest_feature_date || ""),
      deprecation_date: String(feature.deprecation_date || ""),
      status: feature.deprecation_date ? "deprecation_noted" : "feature_observed",
    },
    coverage_status: String(feature.coverage_status || ""),
    validation: {
      step07_pass: Boolean(gateFeature?.pass),
      fail_count: Number(gateFeature?.fail_count || 0),
      warn_count: Number(gateFeature?.warn_count || 0),
      findings: gateFeature?.findings || [],
    },
    evidence: {
      source_links: officialSourceLinks,
      rejected_non_official_links: sourceLinks.filter((url) => !isOfficialGoogleUrl(url)),
      supporting_pages: supportingPages,
      evidence_summary: String(feature.evidence_summary || ""),
    },
    iam: {
      iam_mapping_status: iamStatus,
      explicit_roles: iamMapping.explicitRoles,
      explicit_permissions: iamMapping.explicitPermissions,
      derived_roles: iamStatus === "explicit" ? [] : iamMapping.derivedRoles,
      derived_permissions: iamStatus === "explicit" ? [] : iamMapping.derivedPermissions,
      related_permission_groups: iamMapping.relatedGroups,
      missing_inventory_permissions: iamMapping.missingPermissions,
      missing_inventory_roles: iamMapping.missingRoles,
    },
    security_capabilities: detectSecurityCapabilities(feature),
  };
}

function assertValidFeatureSlugs(productSlug, features) {
  const seen = new Set();
  const duplicates = new Set();
  const missing = [];

  for (const feature of features || []) {
    const featureSlug = feature?.feature_slug;
    if (!featureSlug) {
      missing.push(feature?.feature_name || "(unnamed feature)");
      continue;
    }
    if (seen.has(featureSlug)) {
      duplicates.add(featureSlug);
    }
    seen.add(featureSlug);
  }

  if (missing.length > 0) {
    throw new Error(`Step 08 card for ${productSlug} contains features without slugs: ${missing.sort(compareStrings).join(", ")}`);
  }
  if (duplicates.size > 0) {
    throw new Error(`Step 08 card for ${productSlug} contains duplicate feature slugs: ${[...duplicates].sort(compareStrings).join(", ")}`);
  }
}

function collectNonOfficialUrls(urls) {
  return uniqueSorted(arrayOfStrings(urls)).filter((url) => !isOfficialGoogleUrl(url));
}

function collectSecurityCapabilityEvidenceLinks(capabilities) {
  return [...new Set((capabilities || []).flatMap((capability) => capability.evidence_links || []))];
}

function assertOfficialCardEvidence(productSlug, card) {
  const errors = [];
  for (const url of collectNonOfficialUrls(card.service_card?.official_source_links || [])) {
    errors.push(`Step 08 service card for ${productSlug} has non-official source link: ${url}`);
  }
  for (const url of collectNonOfficialUrls(collectSecurityCapabilityEvidenceLinks(card.service_card?.security_capabilities || []))) {
    errors.push(`Step 08 service card for ${productSlug} has non-official security evidence link: ${url}`);
  }
  for (const feature of card.features || []) {
    const featureSlug = feature.feature_slug || "(missing feature slug)";
    for (const url of collectNonOfficialUrls(feature.evidence?.source_links || [])) {
      errors.push(`Step 08 feature card for ${productSlug}/${featureSlug} has non-official source link: ${url}`);
    }
    for (const url of collectNonOfficialUrls((feature.evidence?.supporting_pages || []).map((page) => page?.url))) {
      errors.push(`Step 08 feature card for ${productSlug}/${featureSlug} has non-official supporting page URL: ${url}`);
    }
    for (const url of collectNonOfficialUrls(collectSecurityCapabilityEvidenceLinks(feature.security_capabilities || []))) {
      errors.push(`Step 08 feature card for ${productSlug}/${featureSlug} has non-official security evidence link: ${url}`);
    }
  }
  if (errors.length > 0) {
    throw new Error(errors.join("\n"));
  }
}

function buildServiceCard({ generatedAt, step06, validation, corpus, iamSummary, features, step02Summary = null }) {
  const officialSourceLinks = uniqueSorted(features.flatMap((feature) => feature.evidence.source_links || []));
  const lifecycleLatestDates = [
    ...features.map((feature) => feature.lifecycle.latest_feature_date),
    step02Summary?.latest_feature_date,
  ];
  const securityCapabilities = aggregateSecurityCapabilities(features);

  return {
    card_type: "service",
    service_card_id: `${step06.product_slug || slugify(step06.product_name)}:service`,
    service_name: String(step06.product_name || ""),
    service_slug: String(step06.product_slug || slugify(step06.product_name)),
    generated_at: generatedAt,
    feature_count: features.length,
    validation: {
      ...validation,
      passed_feature_count: features.filter((feature) => feature.validation.step07_pass).length,
    },
    iam_status_counts: {
      explicit: iamSummary.explicit_feature_count,
      derived_from_permission_prefix: iamSummary.derived_feature_count,
      unknown: iamSummary.unknown_feature_count,
    },
    related_permission_groups: iamSummary.related_permission_groups,
    official_source_links: officialSourceLinks,
    security_capabilities: securityCapabilities,
    security_capability_count: securityCapabilities.length,
    lifecycle: {
      latest_feature_date: latestIsoDate(lifecycleLatestDates),
    },
    release_notes: step02Summary ? {
      source_row_count: step02Summary.source_row_count,
      unique_feature_count: step02Summary.unique_feature_count,
      latest_feature_date: step02Summary.latest_feature_date,
      source_file: step02Summary.source_file,
    } : null,
    corpus,
  };
}

function markdownTableRow(values) {
  return `| ${values.map((value) => String(value ?? "").replace(/\n/g, " ").replace(/\|/g, "\\|")).join(" | ")} |`;
}

function renderProductMarkdown(card) {
  const lines = [
    `# ${card.product_name}`,
    "",
    `Schema version: \`${card.schema_version}\``,
    `Generated at: \`${card.generated_at}\``,
    `Product status: \`${card.validation.product_status}\``,
    "",
    "## Summary",
    "",
    `- Feature cards: ${card.feature_count}`,
    `- Step 07 failed features: ${card.validation.failed_feature_count}`,
    `- Step 07 warned features: ${card.validation.warned_feature_count}`,
    `- Corpus health: ${card.corpus.health_status || "unknown"}`,
    `- IAM mapping: ${card.iam_summary.explicit_feature_count} explicit, ${card.iam_summary.derived_feature_count} derived, ${card.iam_summary.unknown_feature_count} unknown`,
    "",
    "## Service Card",
    "",
    `- Service card ID: \`${card.service_card.service_card_id}\``,
    `- Latest feature date: ${card.service_card.lifecycle.latest_feature_date || "unknown"}`,
    `- Official source links: ${card.service_card.official_source_links.length}`,
    `- Security capabilities: ${card.service_card.security_capability_count}`,
    "",
    "## Features",
    "",
    markdownTableRow(["Feature", "Coverage", "Gate", "IAM", "Sources"]),
    markdownTableRow(["---", "---", "---", "---", "---"]),
  ];

  for (const feature of card.features) {
    const gate = feature.validation.fail_count > 0 ? "FAIL" : feature.validation.warn_count > 0 ? "WARN" : "PASS";
    const sources = feature.evidence.source_links.slice(0, 3).map((url) => `[source](${url})`).join("<br>");
    lines.push(markdownTableRow([
      feature.feature_name,
      feature.coverage_status,
      gate,
      feature.iam.iam_mapping_status,
      sources,
    ]));
  }

  return `${lines.join("\n")}\n`;
}

async function listProductSlugs() {
  const slugs = new Set();
  if (await exists(step02Root)) {
    const step02Entries = await readdir(step02Root, { withFileTypes: true });
    for (const entry of step02Entries) {
      if (entry.isFile() && entry.name.endsWith(".md") && entry.name !== "index.md") {
        slugs.add(entry.name.replace(/\.md$/, ""));
      }
    }
  }

  const productsDir = path.join(step06Root, "products");
  if (await exists(productsDir)) {
    const entries = await readdir(productsDir, { withFileTypes: true });
    for (const entry of entries) {
      if (entry.isDirectory()) {
        slugs.add(entry.name);
      }
    }
  }

  return [...slugs]
    .filter((slug) => productFilter.length === 0 || productFilter.includes(slug))
    .sort(compareStrings);
}

async function readStep02Summary(productSlug) {
  const file = path.join(step02Root, `${productSlug}.md`);
  const markdown = await readText(file);
  if (!markdown) {
    return null;
  }

  const lines = markdown.split(/\r?\n/);
  const titleLine = lines.find((line) => line.startsWith("# "));
  const sourceRowsLine = lines.find((line) => line.startsWith("Source rows considered:"));
  const uniqueFeaturesLine = lines.find((line) => line.startsWith("Unique features:"));
  const tableRows = lines.filter((line) => line.startsWith("| ") && !line.startsWith("| Latest") && !line.startsWith("| ---"));
  const dates = tableRows.map((line) => line.split("|")[1]?.trim()).filter(Boolean);

  return {
    product_name: titleLine ? titleLine.replace(/^#\s+/, "").trim() : productSlug,
    product_slug: productSlug,
    source_row_count: Number((sourceRowsLine || "").match(/\d+/)?.[0] || 0),
    unique_feature_count: Number((uniqueFeaturesLine || "").match(/\d+/)?.[0] || tableRows.length),
    latest_feature_date: latestIsoDate(dates),
    source_file: relativeToCwd(file),
  };
}

async function buildProductCard(productSlug, rolesIndex, permissionsIndex) {
  const step06File = path.join(step06Root, "products", productSlug, "extended-features.json");
  const gateFile = path.join(step07Root, "products", productSlug, "gate.json");
  const selectionFile = path.join(step04Root, "products", productSlug, "selection.json");
  const stateFile = path.join(step04Root, "products", productSlug, "state.json");

  const step02Summary = await readStep02Summary(productSlug);
  const step06 = await readJson(step06File);
  if (!step06) {
    const generatedAt = new Date().toISOString();
    const validation = {
      product_status: "NO_STEP06_CORPUS",
      failed_feature_count: 0,
      warned_feature_count: 1,
      fail_ratio: 0,
    };
    const corpus = {
      health_status: "missing_step06",
      page_count: 0,
      selected_source_count: 0,
    };
    const iamSummary = {
      explicit_feature_count: 0,
      derived_feature_count: 0,
      unknown_feature_count: 0,
      related_permission_groups: [],
    };
    const serviceCard = buildServiceCard({
      generatedAt,
      step06: {
        product_name: step02Summary?.product_name || productSlug,
        product_slug: productSlug,
      },
      validation,
      corpus,
      iamSummary,
      features: [],
      step02Summary,
    });

    return {
      schema_version: schemaVersion,
      generated_at: generatedAt,
      product_name: serviceCard.service_name,
      product_slug: productSlug,
      inputs: {
        step02_product_markdown: step02Summary?.source_file || "",
        step06_extended_features: "",
        step07_gate: "",
        step05_permissions_index: relativeToCwd(path.join(step05Root, "permissions", "index.json")),
        step05_roles_index: relativeToCwd(path.join(step05Root, "roles", "index.json")),
        step04_selection: "",
        step04_state: "",
      },
      corpus,
      validation,
      feature_count: 0,
      iam_summary: iamSummary,
      service_card: serviceCard,
      features: [],
    };
  }
  const gate = await readJson(gateFile, {});
  const selection = await readJson(selectionFile, {});
  const state = await readJson(stateFile, {});
  const { permissionsByName, groups: permissionsByGroup } = loadPermissionInventory(permissionsIndex);
  const productPermissionGroups = inferProductPermissionGroups(step06.product_name, step06.product_slug, selection, permissionsByGroup);
  const gateMap = gateFeatureMap(gate);
  const features = [];

  for (const feature of step06.features || []) {
    const featureSlug = feature.feature_slug || slugify(feature.feature_name);
    const gateFeature = gateMap.get(featureSlug);
    const explicit = buildExplicitIamMapping(feature, rolesIndex, permissionsByName);
    const derived = buildDerivedIamMapping(feature, productPermissionGroups, permissionsByGroup);
    features.push(buildFeatureCard(feature, gateFeature, {
      ...explicit,
      ...derived,
    }));
  }
  assertValidFeatureSlugs(productSlug, features);

  const iamSummary = {
    explicit_feature_count: features.filter((feature) => feature.iam.iam_mapping_status === "explicit").length,
    derived_feature_count: features.filter((feature) => feature.iam.iam_mapping_status === "derived_from_permission_prefix").length,
    unknown_feature_count: features.filter((feature) => feature.iam.iam_mapping_status === "unknown").length,
    related_permission_groups: productPermissionGroups,
  };
  const generatedAt = new Date().toISOString();
  const corpus = {
    health_status: String(state?.corpus_health?.status || state?.status || ""),
    page_count: Number(state?.corpus_health?.page_count || state?.corpus_page_count || 0),
    selected_source_count: Number(selection?.selected_source_count || state?.selected_source_count || 0),
  };
  const validation = {
    product_status: String(gate?.product_status || "UNKNOWN"),
    failed_feature_count: Number(gate?.failed_feature_count || 0),
    warned_feature_count: Number(gate?.warned_feature_count || 0),
    fail_ratio: Number(gate?.fail_ratio || 0),
  };
  const serviceCard = buildServiceCard({
    generatedAt,
    step06,
    validation,
    corpus,
    iamSummary,
    features,
    step02Summary,
  });

  return {
    schema_version: schemaVersion,
    generated_at: generatedAt,
    product_name: step06.product_name,
    product_slug: step06.product_slug,
    inputs: {
      step02_product_markdown: step02Summary?.source_file || "",
      step06_extended_features: relativeToCwd(step06File),
      step07_gate: (await exists(gateFile)) ? relativeToCwd(gateFile) : "",
      step05_permissions_index: relativeToCwd(path.join(step05Root, "permissions", "index.json")),
      step05_roles_index: relativeToCwd(path.join(step05Root, "roles", "index.json")),
      step04_selection: (await exists(selectionFile)) ? relativeToCwd(selectionFile) : "",
      step04_state: (await exists(stateFile)) ? relativeToCwd(stateFile) : "",
    },
    corpus,
    validation,
    feature_count: features.length,
    iam_summary: iamSummary,
    service_card: serviceCard,
    features,
  };
}

async function main() {
  await mkdir(outputProductsDir, { recursive: true });
  const iamInventory = await loadIamInventoryFromStep05();
  const rolesIndex = iamInventory.rolesIndex;
  const permissionsIndex = iamInventory.permissionsIndex;
  const productSlugs = await listProductSlugs();
  const products = [];

  for (const productSlug of productSlugs) {
    const card = await buildProductCard(productSlug, rolesIndex, permissionsIndex);
    if (!card) {
      continue;
    }
    assertOfficialCardEvidence(productSlug, card);
    const productDir = path.join(outputProductsDir, productSlug);
    await mkdir(productDir, { recursive: true });
    await writeJson(path.join(productDir, "card.json"), card);
    await writeFile(path.join(productDir, "card.md"), renderProductMarkdown(card));
    products.push({
      product_name: card.product_name,
      product_slug: card.product_slug,
      product_status: card.validation.product_status,
      feature_count: card.feature_count,
      explicit_iam_feature_count: card.iam_summary.explicit_feature_count,
      derived_iam_feature_count: card.iam_summary.derived_feature_count,
      unknown_iam_feature_count: card.iam_summary.unknown_feature_count,
      service_card_id: card.service_card.service_card_id,
      card_json: relativeToCwd(path.join(productDir, "card.json")),
      card_markdown: relativeToCwd(path.join(productDir, "card.md")),
    });
  }

  const index = {
    schema_version: schemaVersion,
    generated_at: new Date().toISOString(),
    input_roots: {
      step02: relativeToCwd(step02Root),
      step04: relativeToCwd(step04Root),
      step05: relativeToCwd(step05Root),
      step06: relativeToCwd(step06Root),
      step07: relativeToCwd(step07Root),
    },
    iam_inventory_source: iamInventory.source,
    iam_role_count: rolesIndex.role_count || (rolesIndex.roles || []).length,
    iam_permission_count: permissionsIndex.permission_count || (permissionsIndex.permissions || []).length,
    output_root: relativeToCwd(outputRoot),
    product_count: products.length,
    feature_count: products.reduce((sum, product) => sum + product.feature_count, 0),
    explicit_iam_feature_count: products.reduce((sum, product) => sum + product.explicit_iam_feature_count, 0),
    derived_iam_feature_count: products.reduce((sum, product) => sum + product.derived_iam_feature_count, 0),
    unknown_iam_feature_count: products.reduce((sum, product) => sum + product.unknown_iam_feature_count, 0),
    products,
  };

  await writeJson(path.join(outputRoot, "index.json"), index);
  printIndexSummary(index);
}

await main();
