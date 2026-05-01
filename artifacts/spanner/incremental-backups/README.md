# Incremental backups

Product: Spanner
Feature slug: `incremental-backups`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Spanner now supports scheduled incremental backups, allowing users to define backup frequency and retention while storing only changes since the previous backup.

## Lifecycle

- Latest feature date: 2024-10-10
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- allow
- auth
- encrypt

## Official Evidence

- [https://docs.cloud.google.com/spanner/docs/backup](https://docs.cloud.google.com/spanner/docs/backup)
- [https://docs.cloud.google.com/spanner/docs/backup/create-manage-backup-schedules](https://docs.cloud.google.com/spanner/docs/backup/create-manage-backup-schedules)
- [https://docs.cloud.google.com/spanner/docs/backup/disaster-recovery-overview](https://docs.cloud.google.com/spanner/docs/backup/disaster-recovery-overview)
