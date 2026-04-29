# BigQuery non-incremental materialized views on Cloud Spanner

Product: Spanner
Feature slug: `bigquery-non-incremental-materialized-views-on-cloud-spanner`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Cloud Spanner now supports creating BigQuery non-incremental materialized views over Spanner data to improve query performance through periodic result caching.

## Lifecycle

- Latest feature date: 2025-09-29
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

No security capability was identified from the current evidence.

## Official Evidence

- [https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.services.database_admin.DatabaseAdminAsyncClient](https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.services.database_admin.DatabaseAdminAsyncClient)
- [https://docs.cloud.google.com/spanner/docs/autoscaler-tool-overview](https://docs.cloud.google.com/spanner/docs/autoscaler-tool-overview)
- [https://docs.cloud.google.com/spanner/docs/backup/restore-backup-overview](https://docs.cloud.google.com/spanner/docs/backup/restore-backup-overview)

## Validation Findings

- `warn:thin_token_overlap` Supporting pages only weakly overlap with informative feature tokens.
