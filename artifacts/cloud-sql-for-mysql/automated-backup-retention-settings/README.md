# Automated backup retention settings

Product: Cloud SQL for MySQL
Feature slug: `automated-backup-retention-settings`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Cloud SQL for MySQL supports configurable retention periods for automated backups from 1 to 365 days.

## Lifecycle

- Latest feature date: 2020-11-19
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- key
- policy

## Official Evidence

- [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backup-options](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backup-options)
- [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backups](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backups)
- [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/manage-backups-deleted-instance](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/manage-backups-deleted-instance)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
