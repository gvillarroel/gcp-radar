#!/usr/bin/env node

import { readFile } from "node:fs/promises";
import path from "node:path";

const fixtureRoot = path.resolve(process.env.GCP_RADAR_STEP05_FIXTURE_ROOT || "data/step-05/fixtures/gcloud-iam");
async function readJson(file) { return JSON.parse(await readFile(path.join(fixtureRoot, file), "utf8")); }
function compareStrings(left, right) { return String(left || "").localeCompare(String(right || "")); }
function uniqueSorted(values) { return [...new Set(values)].sort(compareStrings); }
function toRoleSlug(roleName) { return String(roleName || "").replace(/^roles\//, "").replace(/[^a-z0-9]+/gi, "-").replace(/^-+|-+$/g, "").toLowerCase(); }
function toPermissionGroup(permission) { const value = String(permission || "").trim(); return value ? value.split(".")[0].toLowerCase() : "unknown"; }
function normalize(listedRoles, describedByName) {
  const roles = listedRoles.map((listed) => {
    const described = describedByName[listed.name] || listed;
    const permissions = uniqueSorted(Array.isArray(described.includedPermissions) ? described.includedPermissions.map(String).filter(Boolean) : []);
    return { name: listed.name, role_slug: toRoleSlug(listed.name), permission_count: permissions.length, permission_groups: uniqueSorted(permissions.map(toPermissionGroup)), included_permissions: permissions };
  }).sort((a, b) => compareStrings(a.name, b.name));
  const groupMap = new Map();
  const permissionSet = new Set();
  for (const role of roles) for (const permission of role.included_permissions) {
    permissionSet.add(permission);
    const group = toPermissionGroup(permission);
    if (!groupMap.has(group)) groupMap.set(group, { permissions: new Set(), roles: new Set() });
    groupMap.get(group).permissions.add(permission);
    groupMap.get(group).roles.add(role.name);
  }
  return {
    role_count: roles.length,
    permission_count: permissionSet.size,
    permission_group_count: groupMap.size,
    roles: roles.map(({ included_permissions, ...role }) => role),
    permission_groups: [...groupMap.entries()].sort(([a], [b]) => compareStrings(a, b)).map(([group, value]) => ({ group, permission_count: value.permissions.size, role_count: value.roles.size })),
  };
}
const actual = normalize(await readJson("roles-list.json"), await readJson("roles-describe.json"));
const expected = await readJson("expected-normalized.json");
if (JSON.stringify(actual) !== JSON.stringify(expected)) {
  console.error("Step 05 fixture validation failed.");
  console.error("Actual:", JSON.stringify(actual, null, 2));
  process.exit(1);
}
console.log(`Step 05 fixture validation passed (${actual.role_count} roles, ${actual.permission_count} permissions).`);
