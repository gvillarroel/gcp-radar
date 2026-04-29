# SQL Server 2019 support

Product: Cloud SQL for SQL Server
Feature slug: `sql-server-2019-support`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Cloud SQL for SQL Server supports SQL Server 2019 database instances.

## Lifecycle

- Latest feature date: 2021-06-24
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- audit
- encrypt
- logging
- permission
- policy
- private

## Official Evidence

- [https://docs.cloud.google.com/sql/docs/introduction](https://docs.cloud.google.com/sql/docs/introduction)
- [https://docs.cloud.google.com/sql/docs/sqlserver/about-tde](https://docs.cloud.google.com/sql/docs/sqlserver/about-tde)
- [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/backups](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/backups)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
