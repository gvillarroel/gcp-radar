# LZ4 TOAST compression

Product: Cloud SQL for PostgreSQL
Feature slug: `lz4-toast-compression`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Cloud SQL for PostgreSQL supports LZ4 TOAST compression for PostgreSQL 14 and later.

## Lifecycle

- Latest feature date: 2023-05-19
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- permission (evidence: [https://docs.cloud.google.com/sql/docs/mysql/admin-api/libraries](https://docs.cloud.google.com/sql/docs/mysql/admin-api/libraries), [https://docs.cloud.google.com/sql/docs/mysql/roles-and-permissions](https://docs.cloud.google.com/sql/docs/mysql/roles-and-permissions), [https://docs.cloud.google.com/sql/docs/postgres/admin-api/libraries](https://docs.cloud.google.com/sql/docs/postgres/admin-api/libraries))
- role (evidence: [https://docs.cloud.google.com/sql/docs/mysql/admin-api/libraries](https://docs.cloud.google.com/sql/docs/mysql/admin-api/libraries), [https://docs.cloud.google.com/sql/docs/mysql/roles-and-permissions](https://docs.cloud.google.com/sql/docs/mysql/roles-and-permissions), [https://docs.cloud.google.com/sql/docs/postgres/admin-api/libraries](https://docs.cloud.google.com/sql/docs/postgres/admin-api/libraries))

## Official Evidence

- [https://docs.cloud.google.com/sql/docs/mysql/admin-api/libraries](https://docs.cloud.google.com/sql/docs/mysql/admin-api/libraries)
- [https://docs.cloud.google.com/sql/docs/mysql/roles-and-permissions](https://docs.cloud.google.com/sql/docs/mysql/roles-and-permissions)
- [https://docs.cloud.google.com/sql/docs/postgres/admin-api/libraries](https://docs.cloud.google.com/sql/docs/postgres/admin-api/libraries)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
- `warn:generic_supporting_pages` Supporting pages do not mention any informative feature tokens.
