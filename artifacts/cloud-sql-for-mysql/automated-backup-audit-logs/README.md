# Automated backup audit logs

Product: Cloud SQL for MySQL
Feature slug: `automated-backup-audit-logs`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Cloud SQL supports viewing audit logs for automated backups and configuring log-based alerts for backup status.

## Lifecycle

- Latest feature date: 2023-01-18
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/view-audit-logs-for-automated-backups](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/view-audit-logs-for-automated-backups), [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backups](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backups), [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/manage-standard-backups](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/manage-standard-backups))
- audit (evidence: [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/view-audit-logs-for-automated-backups](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/view-audit-logs-for-automated-backups), [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backups](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backups), [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/manage-standard-backups](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/manage-standard-backups))
- auth (evidence: [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/view-audit-logs-for-automated-backups](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/view-audit-logs-for-automated-backups), [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backups](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backups), [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/manage-standard-backups](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/manage-standard-backups))
- authorization (evidence: [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/view-audit-logs-for-automated-backups](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/view-audit-logs-for-automated-backups), [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backups](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backups), [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/manage-standard-backups](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/manage-standard-backups))
- logging (evidence: [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/view-audit-logs-for-automated-backups](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/view-audit-logs-for-automated-backups), [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backups](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backups), [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/manage-standard-backups](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/manage-standard-backups))
- policy (evidence: [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/view-audit-logs-for-automated-backups](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/view-audit-logs-for-automated-backups), [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backups](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backups), [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/manage-standard-backups](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/manage-standard-backups))
- token (evidence: [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/view-audit-logs-for-automated-backups](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/view-audit-logs-for-automated-backups), [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backups](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backups), [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/manage-standard-backups](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/manage-standard-backups))

## Official Evidence

- [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backups](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backups)
- [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/manage-standard-backups](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/manage-standard-backups)
- [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/view-audit-logs-for-automated-backups](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/view-audit-logs-for-automated-backups)
