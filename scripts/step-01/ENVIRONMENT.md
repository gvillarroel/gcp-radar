# Step 01 Environment Contract

Step 01 downloads the official Google Cloud release-note snapshot from BigQuery,
exports deltas through GCS, and merges them into the local canonical Parquet
snapshot.

## Required inputs

Provide these values either as environment variables or command arguments:

- `GCP_RADAR_BUCKET` or `<gcs-bucket>` argument: GCS bucket used for temporary
  BigQuery Parquet exports.
- `GOOGLE_CLOUD_PROJECT` or `[gcp-project]` argument: Google Cloud project used
  for the temporary BigQuery dataset.
- Google Application Default Credentials or `GOOGLE_APPLICATION_CREDENTIALS`:
  credentials with permission to run BigQuery jobs and write/read the selected
  GCS bucket.

Required CLIs on `PATH`:

- `gcloud`
- `bq`
- `python`

## Command

```bash
zx scripts/step-01/download-release-notes.mjs <gcs-bucket> [gcp-project]
```

Or, with environment variables:

```bash
GCP_RADAR_BUCKET=my-bucket GOOGLE_CLOUD_PROJECT=my-project \
  zx scripts/step-01/download-release-notes.mjs
```

The script validates this local contract before starting BigQuery work and fails
with actionable missing-input messages when configuration is incomplete.
