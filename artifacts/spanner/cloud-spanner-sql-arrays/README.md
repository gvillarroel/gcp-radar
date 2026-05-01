# Cloud Spanner SQL arrays

Product: Spanner
Feature slug: `cloud-spanner-sql-arrays`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Cloud Spanner supports working with arrays in SQL queries and statements.

## Lifecycle

- Latest feature date: 2017-05-16
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- audit
- logging

## Official Evidence

- [https://docs.cloud.google.com/spanner/docs/pg-jdbc-connect](https://docs.cloud.google.com/spanner/docs/pg-jdbc-connect)
- [https://docs.cloud.google.com/spanner/docs/pg-psycopg2-connect](https://docs.cloud.google.com/spanner/docs/pg-psycopg2-connect)
- [https://docs.cloud.google.com/spanner/docs/pg-psycopg3-connect](https://docs.cloud.google.com/spanner/docs/pg-psycopg3-connect)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
- `warn:thin_token_overlap` Supporting pages only weakly overlap with informative feature tokens.
