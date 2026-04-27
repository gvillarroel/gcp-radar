# ADR 0003: Step 01 Release Notes Incremental BigQuery Sync

## Status

Accepted

## Context

Step 01 starts from official Google Cloud release notes.

The project already expects BigQuery-accessible official source material when available. The public BigQuery dataset `bigquery-public-data.google_cloud_release_notes.release_notes` provides a structured official source for product and feature discovery.

Step 01 now needs a repeatable acquisition contract that:

- preserves a canonical local Parquet file for downstream processing
- exports deltas in a columnar format suitable for analytics
- stores local artifacts in the canonical Step 01 data area
- records enough state to make repeated sync runs incremental

## Decision

Use the following Step 01 acquisition workflow:

1. Keep a canonical local file at `data/step-01/raw/google_cloud_release_notes/current/release_notes.parquet`.
2. Keep sync state at `data/step-01/raw/google_cloud_release_notes/current/state.json`.
3. On each run, determine the local cutoff date from `state.json` or from the canonical Parquet file.
4. Query `bigquery-public-data.google_cloud_release_notes.release_notes` for rows where `published_at` is greater than the local cutoff.
5. Materialize the delta into a timestamped BigQuery table in the user's GCP project.
6. Export that delta table to Parquet in a user-controlled Google Cloud Storage bucket using `bq extract`.
7. Download the exported Parquet shard into `data/step-01/raw/google_cloud_release_notes/deltas/<run_id>/`.
8. Merge the downloaded delta into the canonical local Parquet file.

For Parquet compatibility, the exported delta normalizes `product_id` to `STRING`, because the public source contains unsigned integer values that fail direct Parquet export from BigQuery.

The state file must include at least:

- project and dataset identifiers
- canonical local Parquet path
- last known `published_at`
- last run identifier
- last delta row count
- last delta directory when a delta was downloaded

## Consequences

Benefits:

- Step 01 has a stable canonical local artifact
- repeated runs only download new release-note rows
- Parquet remains the default local interchange format for release notes
- downstream stages can read from one fixed local path

Costs:

- the workflow depends on a user-controlled GCS bucket for Parquet export
- each run still creates a temporary delta table unless cleanup rules are added later
- the incremental cutoff is currently based on `published_at`, so retroactive edits to older release notes are not yet captured automatically
