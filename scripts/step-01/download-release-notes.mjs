#!/usr/bin/env node

import { execFile, spawn } from 'node:child_process';
import fs from 'node:fs/promises';
import path from 'node:path';
import { promisify } from 'node:util';

const execFileAsync = promisify(execFile);
const BQ = process.platform === 'win32' ? 'bq.cmd' : 'bq';
const GCLOUD = process.platform === 'win32' ? 'gcloud.cmd' : 'gcloud';

function parseArgs(argv) {
  const args = {};

  for (let i = 0; i < argv.length; i += 1) {
    const token = argv[i];
    if (!token.startsWith('--')) {
      continue;
    }

    const flag = token.slice(2);
    const eqIndex = flag.indexOf('=');

    if (eqIndex >= 0) {
      args[flag.slice(0, eqIndex)] = flag.slice(eqIndex + 1);
      continue;
    }

    const next = argv[i + 1];
    if (!next || next.startsWith('--')) {
      args[flag] = true;
      continue;
    }

    args[flag] = next;
    i += 1;
  }

  return args;
}

function buildRunId(date = new Date()) {
  return date.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}Z$/, 'Z');
}

async function capture(command, args) {
  const result = await execFileAsync(command, args, {
    windowsHide: true,
    maxBuffer: 1024 * 1024 * 20,
    shell: process.platform === 'win32',
  });

  return result.stdout.trim();
}

async function run(command, args) {
  await new Promise((resolve, reject) => {
    const child = spawn(command, args, {
      stdio: 'inherit',
      shell: process.platform === 'win32',
      windowsHide: true,
    });

    child.on('error', reject);
    child.on('exit', (code) => {
      if (code === 0) {
        resolve();
        return;
      }

      reject(new Error(`${command} exited with code ${code}`));
    });
  });
}

async function resourceExists(resource) {
  try {
    await capture(BQ, ['show', '--format=prettyjson', resource]);
    return true;
  } catch {
    return false;
  }
}

async function resolveProjectId() {
  const envProject =
    process.env.CLOUDSDK_CORE_PROJECT ||
    process.env.GOOGLE_CLOUD_PROJECT ||
    process.env.GCLOUD_PROJECT;

  if (envProject) {
    return envProject;
  }

  const configuredProject = await capture(GCLOUD, ['config', 'get-value', 'project']);
  if (!configuredProject || configuredProject === '(unset)') {
    throw new Error('No active GCP project found. Pass --project-id.');
  }

  return configuredProject;
}

async function ensureDataset(projectId, datasetId, location) {
  const datasetRef = `${projectId}:${datasetId}`;
  if (await resourceExists(datasetRef)) {
    return datasetRef;
  }

  await run(BQ, [
    'mk',
    '--dataset',
    `--location=${location}`,
    '--description=Step 01 dataset for gcp-radar',
    datasetRef,
  ]);
  return datasetRef;
}

async function main() {
  const args = parseArgs(process.argv.slice(2));

  if (args.help) {
    console.log(`
Usage:
  node scripts/step-01/download-release-notes.mjs --bucket=<gcs-bucket> [options]

Options:
  --project-id=<id>         GCP project that will own the snapshot table.
  --bucket=<name>           GCS bucket used for Parquet export. Required.
  --dataset=<name>          Snapshot dataset. Default: gcp_radar_step_01
  --location=<region>       BigQuery location. Default: US
  --table-prefix=<prefix>   Snapshot table prefix. Default: release_notes_snapshot
  --gcs-prefix=<prefix>     GCS export prefix. Default: gcp-radar/step-01/release-notes
  --local-dir=<path>        Local output root. Default: data/step-01/raw/google_cloud_release_notes
  --source-table=<table>    Source BigQuery table.
  --skip-local-download     Keep files in GCS only.
`);
    return;
  }

  const sourceTable =
    args['source-table'] ||
    'bigquery-public-data:google_cloud_release_notes.release_notes';
  const projectId = args['project-id'] || (await resolveProjectId());
  const datasetId = args.dataset || 'gcp_radar_step_01';
  const location = args.location || 'US';
  const bucket = args.bucket || process.env.GCP_RADAR_EXPORT_BUCKET;
  const tablePrefix = args['table-prefix'] || 'release_notes_snapshot';
  const gcsPrefix = (args['gcs-prefix'] || 'gcp-radar/step-01/release-notes').replace(/\/+$/, '');
  const localRoot = path.resolve(
    process.cwd(),
    args['local-dir'] || 'data/step-01/raw/google_cloud_release_notes',
  );
  const skipLocalDownload = Boolean(args['skip-local-download']);

  if (!bucket) {
    throw new Error('Missing export bucket. Pass --bucket or set GCP_RADAR_EXPORT_BUCKET.');
  }

  const runId = buildRunId();
  const tableId = `${tablePrefix}_${runId.toLowerCase()}`;
  const snapshotTable = `${projectId}:${datasetId}.${tableId}`;
  const gcsRunPrefix = `${gcsPrefix}/${runId}`;
  const gcsUri = `gs://${bucket}/${gcsRunPrefix}/release_notes-*.parquet`;
  const localRunDir = path.join(localRoot, runId);

  console.log(`Source table: ${sourceTable}`);
  console.log(`Snapshot table: ${snapshotTable}`);
  console.log(`Export URI: ${gcsUri}`);
  console.log(`Local output: ${localRunDir}`);

  await ensureDataset(projectId, datasetId, location);
  await run(BQ, ['cp', `--location=${location}`, sourceTable, snapshotTable]);

  const metadataJson = await capture(BQ, ['show', '--format=prettyjson', snapshotTable]);
  const metadata = JSON.parse(metadataJson);

  await run(BQ, [
    'extract',
    `--location=${location}`,
    '--destination_format=PARQUET',
    snapshotTable,
    gcsUri,
  ]);

  await fs.mkdir(localRunDir, { recursive: true });

  if (!skipLocalDownload) {
    await run(GCLOUD, [
      'storage',
      'cp',
      `gs://${bucket}/${gcsRunPrefix}/*.parquet`,
      localRunDir,
    ]);
  }

  const manifest = {
    run_id: runId,
    generated_at: new Date().toISOString(),
    source_table: sourceTable,
    snapshot_table: snapshotTable,
    project_id: projectId,
    dataset_id: datasetId,
    table_id: tableId,
    location,
    bucket,
    gcs_prefix: gcsRunPrefix,
    gcs_uri: gcsUri,
    local_output_dir: localRunDir,
    local_downloaded: !skipLocalDownload,
    num_rows: metadata.numRows ? Number(metadata.numRows) : null,
    num_bytes: metadata.numBytes ? Number(metadata.numBytes) : null,
    schema: metadata.schema?.fields ?? [],
  };

  await fs.writeFile(
    path.join(localRunDir, 'manifest.json'),
    `${JSON.stringify(manifest, null, 2)}\n`,
    'utf8',
  );

  console.log('Step 01 release note snapshot complete.');
}

await main();
