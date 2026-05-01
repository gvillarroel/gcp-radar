# Spanner federated queries with BigQuery external datasets

Product: Spanner
Feature slug: `spanner-federated-queries-with-bigquery-external-datasets`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Spanner supports running GoogleSQL federated queries against PostgreSQL dialect databases through BigQuery external datasets, including cross-region queries.

## Lifecycle

- Latest feature date: 2025-09-22
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

No security capability was identified from the current evidence.

## Official Evidence

- [https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.services.database_admin.pagers.ListDatabasesAsyncPager](https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.services.database_admin.pagers.ListDatabasesAsyncPager)
- [https://docs.cloud.google.com/spanner/docs/choose-googlesql-or-postgres](https://docs.cloud.google.com/spanner/docs/choose-googlesql-or-postgres)
- [https://docs.cloud.google.com/spanner/docs/reference/dialect-differences](https://docs.cloud.google.com/spanner/docs/reference/dialect-differences)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
