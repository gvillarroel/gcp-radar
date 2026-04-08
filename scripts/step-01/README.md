# Step 01 Scripts

This directory stores scripts for workflow Step 01.

Step 01 is currently intended for product and feature discovery from official Google sources.

Current script:

- `download-release-notes.mjs` to incrementally sync the official Google Cloud release notes BigQuery table into a canonical local Parquet file and timestamped delta folders

Run it with:

- `zx scripts/step-01/download-release-notes.mjs <gcs-bucket> [gcp-project]`

Current local contract:

- `data/step-01/raw/google_cloud_release_notes/current/release_notes.parquet` as the canonical local file
- `data/step-01/raw/google_cloud_release_notes/current/state.json` as the sync state
- `data/step-01/raw/google_cloud_release_notes/deltas/<run_id>/` for downloaded Parquet deltas
