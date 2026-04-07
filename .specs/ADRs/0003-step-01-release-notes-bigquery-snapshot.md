# ADR 0003: Step 01 Release Notes BigQuery Snapshot

## Status

Accepted

## Context

Step 01 starts from official Google Cloud release notes.

The project already expects BigQuery-accessible official source material when available. The public BigQuery dataset `bigquery-public-data.google_cloud_release_notes.release_notes` provides a structured official source for product and feature discovery.

Step 01 now needs a repeatable acquisition contract that:

- preserves a source-faithful snapshot for downstream processing
- exports the snapshot in a columnar format suitable for analytics
- stores local artifacts in the canonical Step 01 data area
- records enough metadata to make each run traceable

## Decision

Use the following Step 01 acquisition workflow:

1. Copy `bigquery-public-data.google_cloud_release_notes.release_notes` into a timestamped snapshot table in the user's GCP project.
2. Export that snapshot table to Parquet in a user-controlled Google Cloud Storage bucket using `bq extract`.
3. Download the exported Parquet shards into `data/step-01/raw/google_cloud_release_notes/<run_id>/`.
4. Write a `manifest.json` file beside the downloaded Parquet files.

The manifest must include at least:

- source table
- snapshot table
- project and dataset identifiers
- export bucket and GCS prefix
- local output directory
- row and byte metadata when available
- exported schema

## Consequences

Benefits:

- Step 01 has a reproducible, source-backed entry artifact
- Parquet becomes the default local interchange format for release notes
- downstream stages receive a stable local input contract

Costs:

- the workflow depends on a user-controlled GCS bucket for Parquet export
- each run creates a new snapshot table unless cleanup rules are added later
