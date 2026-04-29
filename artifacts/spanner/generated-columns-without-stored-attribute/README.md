# Generated columns without STORED attribute

Product: Spanner
Feature slug: `generated-columns-without-stored-attribute`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Generated columns in Spanner now work without the STORED attribute, so values are evaluated at query or index time without additional storage or write overhead.

## Lifecycle

- Latest feature date: 2024-06-17
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- constraint
- iam
- key
- permission
- policy

## Official Evidence

- [https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.services.database_admin.DatabaseAdminAsyncClient](https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.services.database_admin.DatabaseAdminAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.services.database_admin.DatabaseAdminClient](https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.services.database_admin.DatabaseAdminClient)
- [https://docs.cloud.google.com/spanner/docs/information-schema-pg](https://docs.cloud.google.com/spanner/docs/information-schema-pg)
