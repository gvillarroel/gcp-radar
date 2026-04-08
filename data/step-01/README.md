# Step 01 Data

This directory stores data for workflow Step 01.

Step 01 is currently intended for product and feature discovery from official Google sources.

Current raw acquisition target:

- `raw/google_cloud_release_notes/current/release_notes.parquet` for the canonical local release-note dataset
- `raw/google_cloud_release_notes/current/state.json` for sync state
- `raw/google_cloud_release_notes/deltas/<run_id>/` for Parquet deltas downloaded from the official Google Cloud release notes BigQuery table
