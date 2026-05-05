# pg_repack extension

Product: Cloud SQL for PostgreSQL
Feature slug: `pg-repack-extension`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Cloud SQL for PostgreSQL supports the pg_repack extension for reorganizing tables and indexes with minimal locks.

## Lifecycle

- Latest feature date: 2020-05-11
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- auth (evidence: [https://docs.cloud.google.com/sql/docs/postgres/built-in-authentication](https://docs.cloud.google.com/sql/docs/postgres/built-in-authentication), [https://docs.cloud.google.com/sql/docs/mysql/admin-api/libraries](https://docs.cloud.google.com/sql/docs/mysql/admin-api/libraries), [https://docs.cloud.google.com/sql/docs/postgres/admin-api/libraries](https://docs.cloud.google.com/sql/docs/postgres/admin-api/libraries))
- permission (evidence: [https://docs.cloud.google.com/sql/docs/postgres/built-in-authentication](https://docs.cloud.google.com/sql/docs/postgres/built-in-authentication), [https://docs.cloud.google.com/sql/docs/mysql/admin-api/libraries](https://docs.cloud.google.com/sql/docs/mysql/admin-api/libraries), [https://docs.cloud.google.com/sql/docs/postgres/admin-api/libraries](https://docs.cloud.google.com/sql/docs/postgres/admin-api/libraries))
- role (evidence: [https://docs.cloud.google.com/sql/docs/postgres/built-in-authentication](https://docs.cloud.google.com/sql/docs/postgres/built-in-authentication), [https://docs.cloud.google.com/sql/docs/mysql/admin-api/libraries](https://docs.cloud.google.com/sql/docs/mysql/admin-api/libraries), [https://docs.cloud.google.com/sql/docs/postgres/admin-api/libraries](https://docs.cloud.google.com/sql/docs/postgres/admin-api/libraries))
- secret (evidence: [https://docs.cloud.google.com/sql/docs/postgres/built-in-authentication](https://docs.cloud.google.com/sql/docs/postgres/built-in-authentication), [https://docs.cloud.google.com/sql/docs/mysql/admin-api/libraries](https://docs.cloud.google.com/sql/docs/mysql/admin-api/libraries), [https://docs.cloud.google.com/sql/docs/postgres/admin-api/libraries](https://docs.cloud.google.com/sql/docs/postgres/admin-api/libraries))

## Official Evidence

- [https://docs.cloud.google.com/sql/docs/mysql/admin-api/libraries](https://docs.cloud.google.com/sql/docs/mysql/admin-api/libraries)
- [https://docs.cloud.google.com/sql/docs/postgres/admin-api/libraries](https://docs.cloud.google.com/sql/docs/postgres/admin-api/libraries)
- [https://docs.cloud.google.com/sql/docs/postgres/built-in-authentication](https://docs.cloud.google.com/sql/docs/postgres/built-in-authentication)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
- `warn:generic_supporting_pages` Supporting pages do not mention any informative feature tokens.
