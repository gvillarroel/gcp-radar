# Backup maxChargeableBytes field

Product: Cloud SQL for SQL Server
Feature slug: `backup-maxchargeablebytes-field`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Cloud SQL exposes the maxChargeableBytes value in backupRuns.GET API and gcloud backup describe responses.

## Lifecycle

- Latest feature date: 2024-10-25
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/rest/v1/backupRuns](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/rest/v1/backupRuns), [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/manage-standard-backups](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/manage-standard-backups), [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/restoring](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/restoring))
- auth (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/rest/v1/backupRuns](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/rest/v1/backupRuns), [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/manage-standard-backups](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/manage-standard-backups), [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/restoring](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/restoring))
- authorization (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/rest/v1/backupRuns](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/rest/v1/backupRuns), [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/manage-standard-backups](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/manage-standard-backups), [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/restoring](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/restoring))
- encrypt (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/rest/v1/backupRuns](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/rest/v1/backupRuns), [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/manage-standard-backups](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/manage-standard-backups), [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/restoring](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/restoring))
- token (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/rest/v1/backupRuns](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/rest/v1/backupRuns), [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/manage-standard-backups](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/manage-standard-backups), [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/restoring](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/restoring))

## Official Evidence

- [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/rest/v1/backupRuns](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/rest/v1/backupRuns)
- [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/manage-standard-backups](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/manage-standard-backups)
- [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/restoring](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/restoring)
