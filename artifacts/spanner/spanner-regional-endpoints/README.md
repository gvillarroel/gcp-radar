# Spanner regional endpoints

Product: Spanner
Feature slug: `spanner-regional-endpoints`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Spanner regional endpoints allow clients to connect through endpoints limited to a specific region to help enforce regional data residency and control requirements.

## Lifecycle

- Latest feature date: 2023-02-06
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- allow
- iam
- permission
- policy

## Official Evidence

- [https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.services.database_admin.DatabaseAdminAsyncClient](https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.services.database_admin.DatabaseAdminAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.services.database_admin.DatabaseAdminClient](https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.services.database_admin.DatabaseAdminClient)
- [https://docs.cloud.google.com/spanner/docs/rest-endpoints](https://docs.cloud.google.com/spanner/docs/rest-endpoints)
