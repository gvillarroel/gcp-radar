#!/usr/bin/env node

import { access, readdir, readFile } from "node:fs/promises";
import path from "node:path";

const cardsRoot = path.resolve(process.env.GCP_RADAR_STEP08_OUTPUT_ROOT || "data/step-08/current");
const productFilter = (process.env.GCP_RADAR_STEP08_PRODUCTS || "").split(",").map((v) => v.trim()).filter(Boolean);

async function exists(target) { try { await access(target); return true; } catch { return false; } }
async function readJson(target) { return JSON.parse(await readFile(target, "utf8")); }
function isObject(value) { return value && typeof value === "object" && !Array.isArray(value); }
function push(errors, file, pointer, message) { errors.push({ file: path.relative(process.cwd(), file).replace(/\\/g, "/"), pointer, message }); }
function requireString(errors, file, object, key, pointer, { nonEmpty = true } = {}) {
  if (typeof object?.[key] !== "string" || (nonEmpty && object[key].trim() === "")) push(errors, file, `${pointer}/${key}`, "expected string" + (nonEmpty ? " with content" : ""));
}
function requireNumber(errors, file, object, key, pointer, { integer = false, nullable = false } = {}) {
  const value = object?.[key];
  if (nullable && value === null) return;
  if (typeof value !== "number" || Number.isNaN(value) || (integer && !Number.isInteger(value))) push(errors, file, `${pointer}/${key}`, integer ? "expected integer" : "expected number");
}
function validateUrlList(errors, file, urls, pointer) {
  if (!Array.isArray(urls)) return push(errors, file, pointer, "expected array");
  urls.forEach((url, index) => {
    if (typeof url !== "string" || url.trim() === "") push(errors, file, `${pointer}/${index}`, "expected non-empty URL string");
  });
}
function validateCard(file, card) {
  const errors = [];
  if (!isObject(card)) return [{ file, pointer: "", message: "card must be an object" }];
  if (card.schema_version !== "step-08-product-card-v1") push(errors, file, "/schema_version", "expected step-08-product-card-v1");
  requireString(errors, file, card, "generated_at", "");
  requireString(errors, file, card, "product_name", "");
  requireString(errors, file, card, "product_slug", "");
  if (typeof card.product_slug === "string" && !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(card.product_slug)) push(errors, file, "/product_slug", "expected lowercase slug");
  requireNumber(errors, file, card, "feature_count", "", { integer: true });
  if (!isObject(card.quality)) push(errors, file, "/quality", "expected object");
  else {
    requireString(errors, file, card.quality, "product_status", "/quality");
    for (const key of ["passed_feature_count", "warned_feature_count", "failed_feature_count"]) requireNumber(errors, file, card.quality, key, "/quality", { integer: true, nullable: true });
    requireNumber(errors, file, card.quality, "fail_ratio", "/quality", { nullable: true });
  }
  if (!isObject(card.inputs)) push(errors, file, "/inputs", "expected object");
  else requireString(errors, file, card.inputs, "step06_extended_features", "/inputs");
  if (!Array.isArray(card.features)) push(errors, file, "/features", "expected array");
  else {
    if (Number.isInteger(card.feature_count) && card.feature_count !== card.features.length) push(errors, file, "/feature_count", `expected ${card.features.length} to match features length`);
    card.features.forEach((feature, index) => {
      const pointer = `/features/${index}`;
      if (!isObject(feature)) return push(errors, file, pointer, "expected feature object");
      for (const key of ["feature_name", "feature_slug", "lifecycle_status", "coverage_status", "gate_status"]) requireString(errors, file, feature, key, pointer);
      if (!["PASS", "WARN", "FAIL"].includes(feature.gate_status)) push(errors, file, `${pointer}/gate_status`, "expected PASS, WARN, or FAIL");
      requireNumber(errors, file, feature, "warning_count", pointer, { integer: true });
      requireNumber(errors, file, feature, "failure_count", pointer, { integer: true });
      validateUrlList(errors, file, feature.evidence_urls, `${pointer}/evidence_urls`);
      if (!Array.isArray(feature.security_signals)) push(errors, file, `${pointer}/security_signals`, "expected array");
    });
  }
  return errors;
}

const productsDir = path.join(cardsRoot, "products");
if (!(await exists(productsDir))) throw new Error(`Missing Step 08 products directory: ${productsDir}`);
const productDirs = (await readdir(productsDir, { withFileTypes: true })).filter((entry) => entry.isDirectory()).map((entry) => entry.name).filter((name) => productFilter.length === 0 || productFilter.includes(name)).sort();
const allErrors = [];
for (const product of productDirs) {
  const file = path.join(productsDir, product, "card.json");
  if (!(await exists(file))) { push(allErrors, file, "", "missing card.json"); continue; }
  allErrors.push(...validateCard(file, await readJson(file)));
}
if (allErrors.length > 0) {
  for (const error of allErrors) console.error(`${error.file}${error.pointer}: ${error.message}`);
  process.exit(1);
}
console.log(`Validated ${productDirs.length} Step 08 product card(s).`);
