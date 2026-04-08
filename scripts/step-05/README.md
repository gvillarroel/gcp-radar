# Step 05 Scripts

This directory contains the executable workflow logic for Step 05.

Step 05 currently inventories Google Cloud IAM predefined roles and their
included permissions by using `gcloud`.

Current primary script:

- `extract-iam-role-permission-inventory.mjs`

Current command contract:

- list predefined roles with `gcloud iam roles list --format=json`
- describe new or changed roles with `gcloud iam roles describe --format=json`
- reuse cached role payloads when the `etag` is unchanged
- regenerate JSON outputs for the full inventory
- export Parquet datasets when `pyarrow` is available
- allow a forced refresh with `--reprocess`

Useful environment variables:

- `GCP_RADAR_STEP05_OUTPUT_ROOT` to change the output root
- `GCP_RADAR_STEP05_MAX_ROLES` to limit the number of processed roles
- `GCP_RADAR_STEP05_ROLE_FILTER` to process only matching roles
- `GCP_RADAR_STEP05_GCLOUD_BIN` to override the `gcloud` executable path when needed

All script-facing documentation must be written in English.
