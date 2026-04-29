# Spanner vector index creation via DDL

Product: Spanner
Feature slug: `spanner-vector-index-creation-via-ddl`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Spanner supports creating vector indexes with DDL statements to accelerate similarity and nearest-neighbor queries on large vector datasets.

## Lifecycle

- Latest feature date: 2024-07-12
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- iam
- permission
- policy

## Official Evidence

- [https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.services.database_admin.DatabaseAdminAsyncClient](https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.services.database_admin.DatabaseAdminAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.services.database_admin.DatabaseAdminClient](https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.services.database_admin.DatabaseAdminClient)
- [https://docs.cloud.google.com/spanner/docs/access-with-fgac](https://docs.cloud.google.com/spanner/docs/access-with-fgac)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
