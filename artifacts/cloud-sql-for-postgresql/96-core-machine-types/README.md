# 96-core machine types

Product: Cloud SQL for PostgreSQL
Feature slug: `96-core-machine-types`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Cloud SQL for PostgreSQL supports 96-core machine types for larger database instances.

## Lifecycle

- Latest feature date: 2020-03-24
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- auth (evidence: [https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/databases/delete](https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/databases/delete), [https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/databases/get](https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/databases/get), [https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/databases/insert](https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/databases/insert))

## Official Evidence

- [https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/databases/delete](https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/databases/delete)
- [https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/databases/get](https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/databases/get)
- [https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/databases/insert](https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/databases/insert)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
- `warn:thin_token_overlap` Supporting pages only weakly overlap with informative feature tokens.
