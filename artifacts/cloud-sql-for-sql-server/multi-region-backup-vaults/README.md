# Multi-region backup vaults

Product: Cloud SQL for SQL Server
Feature slug: `multi-region-backup-vaults`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Multi-region backup vaults store enhanced backup data in multi-region locations for higher availability and regional outage protection.

## Lifecycle

- Latest feature date: 2026-03-17
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/backup-options](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/backup-options), [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/manage-enhanced-backups](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/manage-enhanced-backups), [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/manage-standard-backups](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/manage-standard-backups))
- auth (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/backup-options](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/backup-options), [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/manage-enhanced-backups](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/manage-enhanced-backups), [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/manage-standard-backups](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/manage-standard-backups))
- authorization (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/backup-options](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/backup-options), [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/manage-enhanced-backups](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/manage-enhanced-backups), [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/manage-standard-backups](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/manage-standard-backups))
- encrypt (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/backup-options](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/backup-options), [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/manage-enhanced-backups](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/manage-enhanced-backups), [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/manage-standard-backups](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/manage-standard-backups))
- key (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/backup-options](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/backup-options), [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/manage-enhanced-backups](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/manage-enhanced-backups), [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/manage-standard-backups](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/manage-standard-backups))
- token (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/backup-options](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/backup-options), [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/manage-enhanced-backups](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/manage-enhanced-backups), [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/manage-standard-backups](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/manage-standard-backups))

## Official Evidence

- [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/backup-options](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/backup-options)
- [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/manage-enhanced-backups](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/manage-enhanced-backups)
- [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/manage-standard-backups](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/manage-standard-backups)
