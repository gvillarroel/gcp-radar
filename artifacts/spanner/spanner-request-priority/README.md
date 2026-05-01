# Spanner request priority

Product: Spanner
Feature slug: `spanner-request-priority`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Spanner supports specifying a priority for data requests to control how request execution is scheduled.

## Lifecycle

- Latest feature date: 2021-03-31
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

No security capability was identified from the current evidence.

## Official Evidence

- [https://docs.cloud.google.com/java/docs/reference/google-cloud-spanner/latest/com.google.cloud.executor.spanner.CloudExecutor.Metadata](https://docs.cloud.google.com/java/docs/reference/google-cloud-spanner/latest/com.google.cloud.executor.spanner.CloudExecutor.Metadata)
- [https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.types.CopyBackupMetadata](https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.types.CopyBackupMetadata)
- [https://docs.cloud.google.com/spanner/docs/query-execution-operators](https://docs.cloud.google.com/spanner/docs/query-execution-operators)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
- `warn:thin_token_overlap` Supporting pages only weakly overlap with informative feature tokens.
