#!/usr/bin/env node

import { access, readdir, readFile } from "node:fs/promises";
import path from "node:path";

const repoRoot = process.cwd();
const canonicalDir = path.join(repoRoot, ".specs", "adr");
const legacyDir = path.join(repoRoot, ".specs", "ADRs");
const readmePath = path.join(canonicalDir, "README.md");

async function exists(target) {
  try {
    await access(target);
    return true;
  } catch {
    return false;
  }
}

function fail(message) {
  console.error(`ADR index check failed: ${message}`);
  process.exitCode = 1;
}

const legacyExists = await exists(legacyDir);
if (legacyExists) {
  fail("legacy .specs/ADRs directory exists; use canonical lowercase .specs/adr");
}

if (!(await exists(canonicalDir))) {
  fail("canonical .specs/adr directory is missing");
} else if (!(await exists(readmePath))) {
  fail(".specs/adr/README.md is missing");
} else {
  const files = (await readdir(canonicalDir))
    .filter((file) => /^\d{4}-.+\.md$/.test(file))
    .sort();
  const readme = await readFile(readmePath, "utf8");
  for (const file of files) {
    if (!readme.includes(`](${file})`)) {
      fail(`.specs/adr/README.md does not link ${file}`);
    }
  }
  if (process.exitCode !== 1) {
    console.log(`ADR index check passed (${files.length} ADRs indexed).`);
  }
}
