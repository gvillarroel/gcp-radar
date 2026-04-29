# Cloud Spanner Partitioned DML

Product: Spanner
Feature slug: `cloud-spanner-partitioned-dml`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Cloud Spanner supports Partitioned DML statements for large-scale distributed data modifications.

## Lifecycle

- Latest feature date: 2018-10-10
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

No security capability was identified from the current evidence.

## Official Evidence

- [https://docs.cloud.google.com/java/docs/reference/google-cloud-spanner/latest/com.google.cloud.executor.spanner.CloudExecutor.Metadata](https://docs.cloud.google.com/java/docs/reference/google-cloud-spanner/latest/com.google.cloud.executor.spanner.CloudExecutor.Metadata)
- [https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.services.database_admin.pagers.ListDatabaseOperationsAsyncPager](https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.services.database_admin.pagers.ListDatabaseOperationsAsyncPager)
- [https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.types.CopyBackupMetadata](https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.types.CopyBackupMetadata)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
- `warn:generic_supporting_pages` Supporting pages do not mention any informative feature tokens.
