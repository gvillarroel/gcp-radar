# cloudsql_ignore_innodb_encryption flag

Product: Cloud SQL for MySQL
Feature slug: `cloudsql-ignore-innodb-encryption-flag`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Cloud SQL for MySQL supports the cloudsql_ignore_innodb_encryption flag to ignore InnoDB table encryption during instance migration.

## Lifecycle

- Latest feature date: 2023-12-13
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- auth
- encrypt
- policy

## Official Evidence

- [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances/demote](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances/demote)
- [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/MigrationType](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/MigrationType)
- [https://docs.cloud.google.com/sql/docs/mysql/built-in-authentication](https://docs.cloud.google.com/sql/docs/mysql/built-in-authentication)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
- `warn:thin_token_overlap` Supporting pages only weakly overlap with informative feature tokens.
