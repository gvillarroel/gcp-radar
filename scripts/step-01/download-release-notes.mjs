#!/usr/bin/env zx
import { spawnSync } from "node:child_process";
import { access, copyFile, mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

$.quote = quote;

const [bucket = process.env.GCP_RADAR_BUCKET, projectArg] = process.argv.slice(3);
if (!bucket) throw new Error("Usage: zx scripts/step-01/download-release-notes.mjs <gcs-bucket> [gcp-project]");

const project = projectArg || (await $`gcloud config get-value project`).stdout.trim();
const runId = new Date().toISOString().replace(/[-:]/g, "").replace(/\.\d{3}Z$/, "Z");

const baseDir = path.resolve("data/step-01/raw/google_cloud_release_notes");
const currentDir = path.join(baseDir, "current");
const deltasDir = path.join(baseDir, "deltas");
const currentParquet = path.join(currentDir, "release_notes.parquet");
const stateFile = path.join(currentDir, "state.json");
const deltaDir = path.join(deltasDir, runId);
const deltaDownload = path.join(deltaDir, "release_notes-000000000000.parquet");
const deltaCanonical = path.join(deltaDir, "release_notes.parquet");

const dataset = `${project}:gcp_radar_step_01`;
const table = `${dataset}.release_notes_${runId.toLowerCase()}`;
const gcsDir = `gs://${bucket}/gcp-radar/step-01/release-notes/${runId}`;

const sh = (command, options = {}) => {
  const result = spawnSync(
    process.platform === "win32" ? (process.env.ComSpec || "cmd.exe") : "sh",
    process.platform === "win32" ? ["/d", "/s", "/c", command] : ["-lc", command],
    { stdio: "inherit", encoding: "utf8", ...options },
  );
  if (result.status !== 0) throw new Error(`${command} failed with exit code ${result.status}`);
  return result;
};

const py = (code, args = []) => {
  const result = spawnSync("python", ["-c", code, ...args], { encoding: "utf8" });
  if (result.status !== 0) throw new Error(result.stderr.trim() || "python failed");
  return result.stdout.trim();
};

const exists = async (target) => {
  try {
    await access(target);
    return true;
  } catch {
    return false;
  }
};

await mkdir(currentDir, { recursive: true });

// The canonical local file is the source of truth for what is already downloaded.
let cutoff = null;
if (await exists(stateFile)) {
  cutoff = JSON.parse(await readFile(stateFile, "utf8")).last_published_at || null;
} else if (await exists(currentParquet)) {
  cutoff = py(
    "import sys, pyarrow.compute as pc, pyarrow.parquet as pq; "
    + "t = pq.read_table(sys.argv[1], columns=['published_at']); "
    + "m = pc.max(t['published_at']).as_py(); "
    + "print(m.isoformat() if m else '')",
    [currentParquet],
  ) || null;
}

if ((await $({ nothrow: true, quiet: true })`bq show ${dataset}`).exitCode) {
  await $`bq mk --dataset --location=US ${dataset}`;
}

// Keep the query simple: same shape every run, only the date filter changes.
const sql = [
  "SELECT description, release_note_type, published_at,",
  "CAST(product_id AS STRING) AS product_id, product_name, product_version_name",
  "FROM `bigquery-public-data.google_cloud_release_notes.release_notes`",
  cutoff ? `WHERE published_at > DATE('${cutoff}')` : "",
].filter(Boolean).join("\n");

const queryArgs = `query --nouse_legacy_sql --format=none --replace --destination_table=${table}`;
if (process.platform === "win32") {
  sh(`bq.cmd ${queryArgs}`, { input: `${sql}\n`, stdio: ["pipe", "inherit", "inherit"] });
} else {
  const result = spawnSync("bq", queryArgs.split(" "), { input: `${sql}\n`, stdio: ["pipe", "inherit", "inherit"] });
  if (result.status !== 0) throw new Error("bq query failed");
}

const rowCount = Number(JSON.parse((await $`bq show --format=prettyjson ${table}`).stdout).numRows || 0);

if (rowCount > 0) {
  await mkdir(deltaDir, { recursive: true });
  sh(`bq extract --location=US --destination_format=PARQUET ${table} ${gcsDir}/release_notes-*.parquet`);
  sh(`gcloud storage cp ${gcsDir}/*.parquet ${deltaDir}`);
  await copyFile(deltaDownload, deltaCanonical);

  // Merge the new delta into the canonical local file and deduplicate by full row.
  py(
    "import sys, pyarrow as pa, pyarrow.parquet as pq; "
    + "current_path, delta_path = sys.argv[1], sys.argv[2]; "
    + "current = pq.read_table(current_path) if current_path != '-' else None; "
    + "delta = pq.read_table(delta_path); "
    + "combined = delta if current is None else pa.concat_tables([current, delta]); "
    + "rows, seen, deduped = combined.to_pylist(), set(), []; "
    + "fields = ('description','release_note_type','published_at','product_id','product_name','product_version_name'); "
    + "for row in rows: "
    + " key = tuple((field, row[field]) for field in fields); "
    + " if key not in seen: seen.add(key); deduped.append(row); "
    + "pq.write_table(pa.Table.from_pylist(deduped, schema=combined.schema), current_path if current_path != '-' else delta_path)",
    [(await exists(currentParquet)) ? currentParquet : "-", deltaCanonical],
  );
}

const lastPublishedAt = rowCount > 0
  ? (py(
      "import sys, pyarrow.compute as pc, pyarrow.parquet as pq; "
      + "t = pq.read_table(sys.argv[1], columns=['published_at']); "
      + "m = pc.max(t['published_at']).as_py(); "
      + "print(m.isoformat() if m else '')",
      [currentParquet],
    ) || cutoff)
  : cutoff;

await writeFile(
  stateFile,
  `${JSON.stringify({
    project,
    dataset,
    current_parquet: currentParquet,
    last_published_at: lastPublishedAt,
    last_run_id: runId,
    last_delta_rows: rowCount,
    last_delta_dir: rowCount > 0 ? deltaDir : null,
  }, null, 2)}\n`,
);

console.log(JSON.stringify({
  project,
  dataset,
  currentParquet,
  cutoff_before_run: cutoff,
  delta_rows: rowCount,
  deltaDir: rowCount > 0 ? deltaDir : null,
  last_published_at: lastPublishedAt,
}, null, 2));
