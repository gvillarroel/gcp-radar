# BackupRun custom organization policies

Product: Cloud SQL for SQL Server
Feature slug: `backuprun-custom-organization-policies`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Cloud SQL supports custom organization policies for the BackupRun resource.

## Lifecycle

- Latest feature date: 2024-11-14
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/manage-standard-backups](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/manage-standard-backups), [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/rest/v1/backupRuns](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/rest/v1/backupRuns), [https://docs.cloud.google.com/sql/docs/sqlserver/quotas](https://docs.cloud.google.com/sql/docs/sqlserver/quotas))
- auth (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/manage-standard-backups](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/manage-standard-backups), [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/rest/v1/backupRuns](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/rest/v1/backupRuns), [https://docs.cloud.google.com/sql/docs/sqlserver/quotas](https://docs.cloud.google.com/sql/docs/sqlserver/quotas))
- authorization (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/manage-standard-backups](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/manage-standard-backups), [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/rest/v1/backupRuns](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/rest/v1/backupRuns), [https://docs.cloud.google.com/sql/docs/sqlserver/quotas](https://docs.cloud.google.com/sql/docs/sqlserver/quotas))
- encrypt (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/manage-standard-backups](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/manage-standard-backups), [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/rest/v1/backupRuns](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/rest/v1/backupRuns), [https://docs.cloud.google.com/sql/docs/sqlserver/quotas](https://docs.cloud.google.com/sql/docs/sqlserver/quotas))
- token (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/manage-standard-backups](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/manage-standard-backups), [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/rest/v1/backupRuns](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/rest/v1/backupRuns), [https://docs.cloud.google.com/sql/docs/sqlserver/quotas](https://docs.cloud.google.com/sql/docs/sqlserver/quotas))

## Official Evidence

- [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/rest/v1/backupRuns](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/rest/v1/backupRuns)
- [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/manage-standard-backups](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/manage-standard-backups)
- [https://docs.cloud.google.com/sql/docs/sqlserver/quotas](https://docs.cloud.google.com/sql/docs/sqlserver/quotas)
