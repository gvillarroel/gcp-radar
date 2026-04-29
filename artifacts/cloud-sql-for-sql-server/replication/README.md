# replication

Product: Cloud SQL for SQL Server
Feature slug: `replication`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Cloud SQL for SQL Server supports replication to scale read usage and maintain data copies.

## Lifecycle

- Latest feature date: 2021-06-21
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- auth
- iam
- identity
- permission
- private
- role

## Official Evidence

- [https://docs.cloud.google.com/sql/docs/sqlserver/ad-diagnosis-tool](https://docs.cloud.google.com/sql/docs/sqlserver/ad-diagnosis-tool)
- [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/rest/v1/SqlDatabaseVersion](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/rest/v1/SqlDatabaseVersion)
- [https://docs.cloud.google.com/sql/docs/sqlserver/import-export/import-export-sql](https://docs.cloud.google.com/sql/docs/sqlserver/import-export/import-export-sql)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
- `warn:thin_token_overlap` Supporting pages only weakly overlap with informative feature tokens.
