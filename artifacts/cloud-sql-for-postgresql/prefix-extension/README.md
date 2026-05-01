# prefix extension

Product: Cloud SQL for PostgreSQL
Feature slug: `prefix-extension`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Cloud SQL for PostgreSQL supports the prefix extension for prefix range data types and operations.

## Lifecycle

- Latest feature date: 2020-12-17
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

No security capability was identified from the current evidence.

## Official Evidence

- [https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/databases/delete](https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/databases/delete)
- [https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/databases/get](https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/databases/get)
- [https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/databases/insert](https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/databases/insert)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
- `warn:generic_supporting_pages` Supporting pages do not mention any informative feature tokens.
