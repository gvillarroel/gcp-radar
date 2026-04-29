# instance cloning

Product: Cloud SQL for SQL Server
Feature slug: `instance-cloning`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Cloud SQL for SQL Server supports cloning an instance to create an independent copy.

## Lifecycle

- Latest feature date: 2020-08-31
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- policy

## Official Evidence

- [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/backups](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/backups)
- [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/restore](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/restore)
- [https://docs.cloud.google.com/sql/docs/sqlserver/clone-instance](https://docs.cloud.google.com/sql/docs/sqlserver/clone-instance)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
