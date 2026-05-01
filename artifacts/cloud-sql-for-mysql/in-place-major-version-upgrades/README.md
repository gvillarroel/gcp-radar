# In-place major version upgrades

Product: Cloud SQL for MySQL
Feature slug: `in-place-major-version-upgrades`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Cloud SQL for MySQL supports in-place upgrades to a newer major database version in Preview.

## Lifecycle

- Latest feature date: 2022-06-27
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

No security capability was identified from the current evidence.

## Official Evidence

- [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/databases/delete](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/databases/delete)
- [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/databases/get](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/databases/get)
- [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/databases/insert](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/databases/insert)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
- `warn:thin_token_overlap` Supporting pages only weakly overlap with informative feature tokens.
