#!/usr/bin/env zx
import { execFile } from "node:child_process";
import os from "node:os";
import { access, mkdir, readFile, readdir, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { promisify } from "node:util";

const execFileAsync = promisify(execFile);

const schemaVersion = "step-05-gcloud-iam-inventory-v2";
const gcloudBin = process.env.GCP_RADAR_STEP05_GCLOUD_BIN || (process.platform === "win32" ? "gcloud.cmd" : "gcloud");
const pythonBin = process.env.GCP_RADAR_STEP05_PYTHON_BIN || "python";
const outputRoot = path.resolve(process.env.GCP_RADAR_STEP05_OUTPUT_ROOT || "data/step-05/current");
const rolesRoot = path.join(outputRoot, "roles");
const roleItemsDir = path.join(rolesRoot, "items");
const permissionsRoot = path.join(outputRoot, "permissions");
const permissionGroupsDir = path.join(permissionsRoot, "groups");
const exportsDir = path.join(outputRoot, "exports");
const indexFile = path.join(outputRoot, "index.json");
const stateFile = path.join(outputRoot, "state.json");
const rolesIndexFile = path.join(rolesRoot, "index.json");
const permissionsIndexFile = path.join(permissionsRoot, "index.json");
const rolesParquetFile = path.join(exportsDir, "roles.parquet");
const permissionsParquetFile = path.join(exportsDir, "permissions.parquet");
const rolePermissionsParquetFile = path.join(exportsDir, "role-permissions.parquet");
const maxRoles = Number(process.env.GCP_RADAR_STEP05_MAX_ROLES || 0);
const roleFilterValue = String(process.env.GCP_RADAR_STEP05_ROLE_FILTER || "").trim().toLowerCase();
const reprocess = process.argv.includes("--reprocess");

async function exists(target) {
  try {
    await access(target);
    return true;
  } catch {
    return false;
  }
}

async function readJson(filePath) {
  return JSON.parse(await readFile(filePath, "utf8"));
}

async function writeJson(filePath, value) {
  await mkdir(path.dirname(filePath), { recursive: true });
  await writeFile(filePath, `${JSON.stringify(value, null, 2)}\n`);
}

function relativeToCwd(target) {
  return path.relative(process.cwd(), target).replace(/\\/g, "/");
}

function toRoleSlug(roleName) {
  return String(roleName || "")
    .replace(/^roles\//, "")
    .replace(/[^a-z0-9]+/gi, "-")
    .replace(/^-+|-+$/g, "")
    .toLowerCase();
}

function toPermissionGroup(permission) {
  const value = String(permission || "").trim();
  if (!value) {
    return "unknown";
  }
  return value.split(".")[0].toLowerCase();
}

function compareStrings(left, right) {
  return String(left || "").localeCompare(String(right || ""));
}

function uniqueSorted(values) {
  return [...new Set(values)].sort(compareStrings);
}

function groupPermissions(permissions) {
  const groups = new Map();

  for (const permission of permissions) {
    const group = toPermissionGroup(permission);
    if (!groups.has(group)) {
      groups.set(group, []);
    }
    groups.get(group).push(permission);
  }

  return [...groups.entries()]
    .sort(([left], [right]) => compareStrings(left, right))
    .map(([group, values]) => ({
      group,
      permissions: uniqueSorted(values),
    }));
}

function quotePowerShellArg(value) {
  return `'${String(value).replace(/'/g, "''")}'`;
}

async function runGcloud(args) {
  if (process.platform === "win32") {
    const command = `& ${quotePowerShellArg(gcloudBin)} ${args.map(quotePowerShellArg).join(" ")}`.trim();
    return execFileAsync("powershell.exe", ["-NoProfile", "-Command", command], {
      windowsHide: true,
      maxBuffer: 1024 * 1024 * 64,
      env: { ...process.env, CLOUDSDK_CORE_DISABLE_PROMPTS: "1" },
    });
  }

  return execFileAsync(gcloudBin, args, {
    windowsHide: true,
    maxBuffer: 1024 * 1024 * 64,
    env: { ...process.env, CLOUDSDK_CORE_DISABLE_PROMPTS: "1" },
  });
}

async function runGcloudJson(args) {
  const { stdout } = await runGcloud([...args, "--format=json"]);
  return JSON.parse(stdout.trim() || "null");
}

async function getGcloudVersion() {
  const { stdout } = await runGcloud(["--version"]);
  return stdout.trim();
}

async function getPythonVersion() {
  try {
    const { stdout } = await execFileAsync(pythonBin, ["--version"], {
      windowsHide: true,
      maxBuffer: 1024 * 1024 * 4,
    });
    return stdout.trim();
  } catch {
    return "";
  }
}

async function hasPyArrow() {
  try {
    await execFileAsync(pythonBin, ["-c", "import pyarrow"], {
      windowsHide: true,
      maxBuffer: 1024 * 1024 * 4,
    });
    return true;
  } catch {
    return false;
  }
}

async function exportParquet(targetPath, rows) {
  const tempDir = path.join(os.tmpdir(), "gcp-radar-step05");
  const tempPayloadFile = path.join(tempDir, `${path.basename(targetPath)}.json`);
  const script = [
    "import json",
    "import sys",
    "import pyarrow as pa",
    "import pyarrow.parquet as pq",
    "with open(sys.argv[1], 'r', encoding='utf-8') as handle:",
    "    rows = json.load(handle)",
    "table = pa.Table.from_pylist(rows)",
    "pq.write_table(table, sys.argv[2])",
  ].join("\n");

  await mkdir(path.dirname(targetPath), { recursive: true });
  await mkdir(tempDir, { recursive: true });
  await writeFile(tempPayloadFile, JSON.stringify(rows), "utf8");
  try {
    await execFileAsync(pythonBin, ["-c", script, tempPayloadFile, targetPath], {
      windowsHide: true,
      maxBuffer: 1024 * 1024 * 64,
    });
  } finally {
    await rm(tempPayloadFile, { force: true });
  }
}

async function listPredefinedRoles() {
  const payload = await runGcloudJson(["iam", "roles", "list"]);
  return Array.isArray(payload) ? payload : [];
}

async function describeRole(roleName) {
  return runGcloudJson(["iam", "roles", "describe", roleName]);
}

async function listJsonFiles(directory) {
  if (!(await exists(directory))) {
    return [];
  }

  return (await readdir(directory, { withFileTypes: true }))
    .filter((entry) => entry.isFile() && entry.name.endsWith(".json"))
    .map((entry) => entry.name)
    .sort(compareStrings);
}

async function removeStaleJsonFiles(directory, activeBasenames) {
  const active = new Set(activeBasenames);
  const files = await listJsonFiles(directory);

  for (const file of files) {
    if (!active.has(file)) {
      await rm(path.join(directory, file), { force: true });
    }
  }
}

async function removeLegacyMarkdownOutputs() {
  await rm(path.join(rolesRoot, "json"), { recursive: true, force: true });
  await rm(path.join(rolesRoot, "markdown"), { recursive: true, force: true });
  await rm(path.join(permissionsRoot, "markdown"), { recursive: true, force: true });
  await rm(path.join(outputRoot, "summary.md"), { force: true });
}

async function main() {
  await mkdir(roleItemsDir, { recursive: true });
  await mkdir(permissionGroupsDir, { recursive: true });
  await mkdir(exportsDir, { recursive: true });
  await removeLegacyMarkdownOutputs();

  const gcloudVersion = await getGcloudVersion();
  const pythonVersion = await getPythonVersion();
  const pyarrowAvailable = await hasPyArrow();

  let listedRoles = await listPredefinedRoles();
  if (roleFilterValue) {
    listedRoles = listedRoles.filter((role) => {
      const searchable = [role.name, role.title, role.description].join(" ").toLowerCase();
      return searchable.includes(roleFilterValue);
    });
  }

  listedRoles = listedRoles
    .sort((left, right) => compareStrings(left.name, right.name))
    .slice(0, maxRoles > 0 ? maxRoles : undefined);

  const roles = [];
  const activeRoleFiles = [];
  let refreshedRoleCount = 0;
  let reusedRoleCount = 0;

  for (const listedRole of listedRoles) {
    const roleName = String(listedRole.name || "").trim();
    if (!roleName) {
      continue;
    }

    const roleSlug = toRoleSlug(roleName);
    const roleItemFile = `${roleSlug}.json`;
    const roleItemPath = path.join(roleItemsDir, roleItemFile);
    activeRoleFiles.push(roleItemFile);

    let roleDocument;
    const canReuseCache = !reprocess && await exists(roleItemPath);
    if (canReuseCache) {
      const cachedRole = await readJson(roleItemPath).catch(() => null);
      if (cachedRole?.etag && cachedRole.etag === listedRole.etag && Array.isArray(cachedRole.included_permissions)) {
        roleDocument = {
          ...cachedRole,
          generated_at: new Date().toISOString(),
        };
        reusedRoleCount += 1;
      }
    }

    if (!roleDocument) {
      const describedRole = await describeRole(roleName);
      refreshedRoleCount += 1;
      const includedPermissions = uniqueSorted(
        Array.isArray(describedRole.includedPermissions)
          ? describedRole.includedPermissions.map((value) => String(value || "").trim()).filter(Boolean)
          : [],
      );
      const permissionsByGroup = groupPermissions(includedPermissions);

      roleDocument = {
        schema_version: schemaVersion,
        generated_at: new Date().toISOString(),
        source: {
          type: "gcloud",
          list_command: "gcloud iam roles list --format=json",
          describe_command: `gcloud iam roles describe ${roleName} --format=json`,
        },
        name: roleName,
        role_slug: roleSlug,
        title: String(describedRole.title || ""),
        description: String(describedRole.description || ""),
        stage: String(describedRole.stage || ""),
        etag: String(describedRole.etag || ""),
        permission_count: includedPermissions.length,
        permission_groups: permissionsByGroup.map((group) => group.group),
        permissions_by_group: permissionsByGroup,
        included_permissions: includedPermissions,
      };
    }

    roleDocument.permission_count = Array.isArray(roleDocument.included_permissions)
      ? roleDocument.included_permissions.length
      : 0;
    roleDocument.permission_groups = Array.isArray(roleDocument.permission_groups)
      ? uniqueSorted(roleDocument.permission_groups)
      : [];
    roleDocument.permissions_by_group = Array.isArray(roleDocument.permissions_by_group)
      ? roleDocument.permissions_by_group
      : groupPermissions(roleDocument.included_permissions || []);
    roleDocument.source = roleDocument.source || {
      type: "gcloud",
      list_command: "gcloud iam roles list --format=json",
      describe_command: `gcloud iam roles describe ${roleName} --format=json`,
    };

    await writeJson(roleItemPath, roleDocument);
    roles.push(roleDocument);
  }

  await removeStaleJsonFiles(roleItemsDir, activeRoleFiles);
  roles.sort((left, right) => compareStrings(left.name, right.name));

  const permissionRoles = new Map();
  const permissionGroupMap = new Map();

  for (const role of roles) {
    for (const permission of role.included_permissions) {
      if (!permissionRoles.has(permission)) {
        permissionRoles.set(permission, []);
      }
      permissionRoles.get(permission).push(role.name);

      const group = toPermissionGroup(permission);
      if (!permissionGroupMap.has(group)) {
        permissionGroupMap.set(group, new Set());
      }
      permissionGroupMap.get(group).add(permission);
    }
  }

  const permissionGroups = [...permissionGroupMap.entries()]
    .sort(([left], [right]) => compareStrings(left, right))
    .map(([group, permissionsSet]) => {
      const permissions = [...permissionsSet].sort(compareStrings);
      return {
        schema_version: schemaVersion,
        generated_at: new Date().toISOString(),
        group,
        permission_count: permissions.length,
        role_count: new Set(permissions.flatMap((permission) => permissionRoles.get(permission) || [])).size,
        permissions: permissions.map((permission) => ({
          permission,
          roles: uniqueSorted(permissionRoles.get(permission) || []),
        })),
      };
    });

  const activeGroupFiles = [];
  for (const group of permissionGroups) {
    const groupFile = `${group.group}.json`;
    activeGroupFiles.push(groupFile);
    await writeJson(path.join(permissionGroupsDir, groupFile), group);
  }
  await removeStaleJsonFiles(permissionGroupsDir, activeGroupFiles);

  const rolesIndex = {
    schema_version: schemaVersion,
    generated_at: new Date().toISOString(),
    role_count: roles.length,
    roles: roles.map((role) => ({
      name: role.name,
      role_slug: role.role_slug,
      title: role.title,
      stage: role.stage,
      etag: role.etag,
      permission_count: role.permission_count,
      permission_groups: role.permission_groups,
      item_path: relativeToCwd(path.join(roleItemsDir, `${role.role_slug}.json`)),
    })),
  };

  const permissionsIndex = {
    schema_version: schemaVersion,
    generated_at: new Date().toISOString(),
    permission_count: permissionRoles.size,
    permission_group_count: permissionGroups.length,
    groups: permissionGroups.map((group) => ({
      group: group.group,
      permission_count: group.permission_count,
      role_count: group.role_count,
      item_path: relativeToCwd(path.join(permissionGroupsDir, `${group.group}.json`)),
    })),
    permissions: [...permissionRoles.entries()]
      .sort(([left], [right]) => compareStrings(left, right))
      .map(([permission, roleNames]) => ({
        permission,
        group: toPermissionGroup(permission),
        role_count: roleNames.length,
        roles: uniqueSorted(roleNames),
      })),
  };

  await writeJson(rolesIndexFile, rolesIndex);
  await writeJson(permissionsIndexFile, permissionsIndex);

  const roleRows = roles.map((role) => ({
    name: role.name,
    role_slug: role.role_slug,
    title: role.title,
    description: role.description,
    stage: role.stage,
    etag: role.etag,
    permission_count: role.permission_count,
    permission_groups_json: JSON.stringify(role.permission_groups),
  }));

  const permissionRows = permissionsIndex.permissions.map((permission) => ({
    permission: permission.permission,
    group: permission.group,
    role_count: permission.role_count,
    roles_json: JSON.stringify(permission.roles),
  }));

  const rolePermissionRows = roles.flatMap((role) => role.included_permissions.map((permission) => ({
    role_name: role.name,
    role_slug: role.role_slug,
    permission,
    permission_group: toPermissionGroup(permission),
  })));

  if (pyarrowAvailable) {
    await exportParquet(rolesParquetFile, roleRows);
    await exportParquet(permissionsParquetFile, permissionRows);
    await exportParquet(rolePermissionsParquetFile, rolePermissionRows);
  } else {
    await rm(rolesParquetFile, { force: true });
    await rm(permissionsParquetFile, { force: true });
    await rm(rolePermissionsParquetFile, { force: true });
  }

  const generatedAt = new Date().toISOString();
  await writeJson(stateFile, {
    schema_version: schemaVersion,
    generated_at: generatedAt,
    reprocess_requested: reprocess,
    role_filter: roleFilterValue,
    max_roles: maxRoles,
    gcloud_bin: gcloudBin,
    gcloud_version: gcloudVersion,
    python_bin: pythonBin,
    python_version: pythonVersion,
    pyarrow_available: pyarrowAvailable,
    refreshed_role_count: refreshedRoleCount,
    reused_role_count: reusedRoleCount,
    role_count: roles.length,
    permission_count: permissionRoles.size,
    permission_group_count: permissionGroups.length,
  });

  await writeJson(indexFile, {
    schema_version: schemaVersion,
    generated_at: generatedAt,
    reprocess_requested: reprocess,
    role_filter: roleFilterValue,
    max_roles: maxRoles,
    gcloud_version: gcloudVersion,
    python_version: pythonVersion,
    pyarrow_available: pyarrowAvailable,
    role_count: roles.length,
    permission_count: permissionRoles.size,
    permission_group_count: permissionGroups.length,
    refreshed_role_count: refreshedRoleCount,
    reused_role_count: reusedRoleCount,
    state_path: relativeToCwd(stateFile),
    roles_index_path: relativeToCwd(rolesIndexFile),
    permissions_index_path: relativeToCwd(permissionsIndexFile),
    parquet_exports: {
      roles: pyarrowAvailable ? relativeToCwd(rolesParquetFile) : "",
      permissions: pyarrowAvailable ? relativeToCwd(permissionsParquetFile) : "",
      role_permissions: pyarrowAvailable ? relativeToCwd(rolePermissionsParquetFile) : "",
    },
  });

  console.log(JSON.stringify({
    schema_version: schemaVersion,
    output_root: outputRoot,
    reprocess,
    role_filter: roleFilterValue,
    max_roles: maxRoles,
    pyarrow_available: pyarrowAvailable,
    role_count: roles.length,
    permission_count: permissionRoles.size,
    permission_group_count: permissionGroups.length,
    refreshed_role_count: refreshedRoleCount,
    reused_role_count: reusedRoleCount,
    index_file: indexFile,
  }, null, 2));
}

await main();
