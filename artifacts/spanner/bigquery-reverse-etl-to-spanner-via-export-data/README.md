# BigQuery reverse ETL to Spanner via EXPORT DATA

Product: Spanner
Feature slug: `bigquery-reverse-etl-to-spanner-via-export-data`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Spanner adds support for using EXPORT DATA statements to perform reverse ETL from BigQuery into Spanner.

## Lifecycle

- Latest feature date: 2024-07-11
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- allow
- audit
- auth
- credential
- encrypt
- iam
- key
- kms
- logging
- permission
- policy
- role
- token

## Official Evidence

- [https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog](https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog)
- [https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.services.database_admin.DatabaseAdminAsyncClient](https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.services.database_admin.DatabaseAdminAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.services.database_admin.DatabaseAdminClient](https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.services.database_admin.DatabaseAdminClient)
