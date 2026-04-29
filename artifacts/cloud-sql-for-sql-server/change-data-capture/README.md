# change data capture

Product: Cloud SQL for SQL Server
Feature slug: `change-data-capture`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Cloud SQL for SQL Server supports change data capture operations on supported SQL Server 2017 editions.

## Lifecycle

- Latest feature date: 2021-04-06
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- audit
- auth
- authorization
- permission
- token

## Official Evidence

- [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/backups](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/backups)
- [https://docs.cloud.google.com/sql/docs/sqlserver/create-manage-databases](https://docs.cloud.google.com/sql/docs/sqlserver/create-manage-databases)
- [https://docs.cloud.google.com/sql/docs/sqlserver/data-residency-overview](https://docs.cloud.google.com/sql/docs/sqlserver/data-residency-overview)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
