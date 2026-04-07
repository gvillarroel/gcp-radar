# Step 01 Scripts

This directory stores scripts for workflow Step 01.

Step 01 is currently intended for product and feature discovery from official Google sources.

Current script:

- `download-release-notes.mjs` to snapshot the official Google Cloud release notes BigQuery table, export it to Parquet in GCS, and download the shards into `data/step-01/raw/`

Run it with:

- `node scripts/step-01/download-release-notes.mjs --bucket=<gcs-bucket>`
