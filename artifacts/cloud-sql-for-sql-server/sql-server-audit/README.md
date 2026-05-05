# SQL Server Audit

Product: Cloud SQL for SQL Server
Feature slug: `sql-server-audit`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

SQL Server Audit support tracks and logs server-level and database-level events in Cloud SQL.

## Lifecycle

- Latest feature date: 2022-06-21
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/audit-logging](https://docs.cloud.google.com/sql/docs/sqlserver/audit-logging), [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/view-audit-logs-for-automated-backups](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/view-audit-logs-for-automated-backups), [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/metrics](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/metrics))
- audit (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/audit-logging](https://docs.cloud.google.com/sql/docs/sqlserver/audit-logging), [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/view-audit-logs-for-automated-backups](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/view-audit-logs-for-automated-backups), [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/metrics](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/metrics))
- auth (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/audit-logging](https://docs.cloud.google.com/sql/docs/sqlserver/audit-logging), [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/view-audit-logs-for-automated-backups](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/view-audit-logs-for-automated-backups), [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/metrics](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/metrics))
- authorization (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/audit-logging](https://docs.cloud.google.com/sql/docs/sqlserver/audit-logging), [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/view-audit-logs-for-automated-backups](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/view-audit-logs-for-automated-backups), [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/metrics](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/metrics))
- encrypt (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/audit-logging](https://docs.cloud.google.com/sql/docs/sqlserver/audit-logging), [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/view-audit-logs-for-automated-backups](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/view-audit-logs-for-automated-backups), [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/metrics](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/metrics))
- identity (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/audit-logging](https://docs.cloud.google.com/sql/docs/sqlserver/audit-logging), [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/view-audit-logs-for-automated-backups](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/view-audit-logs-for-automated-backups), [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/metrics](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/metrics))
- logging (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/audit-logging](https://docs.cloud.google.com/sql/docs/sqlserver/audit-logging), [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/view-audit-logs-for-automated-backups](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/view-audit-logs-for-automated-backups), [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/metrics](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/metrics))
- permission (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/audit-logging](https://docs.cloud.google.com/sql/docs/sqlserver/audit-logging), [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/view-audit-logs-for-automated-backups](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/view-audit-logs-for-automated-backups), [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/metrics](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/metrics))
- token (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/audit-logging](https://docs.cloud.google.com/sql/docs/sqlserver/audit-logging), [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/view-audit-logs-for-automated-backups](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/view-audit-logs-for-automated-backups), [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/metrics](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/metrics))

## Official Evidence

- [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/metrics](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/metrics)
- [https://docs.cloud.google.com/sql/docs/sqlserver/audit-logging](https://docs.cloud.google.com/sql/docs/sqlserver/audit-logging)
- [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/view-audit-logs-for-automated-backups](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/view-audit-logs-for-automated-backups)
