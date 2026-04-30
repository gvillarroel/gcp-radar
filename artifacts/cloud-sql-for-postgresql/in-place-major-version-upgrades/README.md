# In-place major version upgrades

Product: Cloud SQL for PostgreSQL
Feature slug: `in-place-major-version-upgrades`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Cloud SQL for PostgreSQL supports general availability of in-place major version upgrades; In-place major version upgrades let you upgrade a PostgreSQL instance to a newer major version without migration to a new instance.

## Lifecycle

- Latest feature date: 2022-09-30
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

No security capability was identified from the current evidence.

## Official Evidence

- [https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/Backups/DeleteBackup](https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/Backups/DeleteBackup)
- [https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/databases/delete](https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/databases/delete)
- [https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/MigrationType](https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/MigrationType)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
- `warn:thin_token_overlap` Supporting pages only weakly overlap with informative feature tokens.
