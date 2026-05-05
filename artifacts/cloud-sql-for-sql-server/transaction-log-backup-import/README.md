# Transaction log backup import

Product: Cloud SQL for SQL Server
Feature slug: `transaction-log-backup-import`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Cloud SQL supports importing transaction log backups to help reduce migration downtime.

## Lifecycle

- Latest feature date: 2023-10-17
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/import-export/import-export-bak](https://docs.cloud.google.com/sql/docs/sqlserver/import-export/import-export-bak), [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/rest/v1/Backups/ListBackups](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/rest/v1/Backups/ListBackups), [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/backups](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/backups))
- auth (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/import-export/import-export-bak](https://docs.cloud.google.com/sql/docs/sqlserver/import-export/import-export-bak), [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/rest/v1/Backups/ListBackups](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/rest/v1/Backups/ListBackups), [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/backups](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/backups))
- authorization (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/import-export/import-export-bak](https://docs.cloud.google.com/sql/docs/sqlserver/import-export/import-export-bak), [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/rest/v1/Backups/ListBackups](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/rest/v1/Backups/ListBackups), [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/backups](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/backups))
- policy (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/import-export/import-export-bak](https://docs.cloud.google.com/sql/docs/sqlserver/import-export/import-export-bak), [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/rest/v1/Backups/ListBackups](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/rest/v1/Backups/ListBackups), [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/backups](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/backups))
- token (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/import-export/import-export-bak](https://docs.cloud.google.com/sql/docs/sqlserver/import-export/import-export-bak), [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/rest/v1/Backups/ListBackups](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/rest/v1/Backups/ListBackups), [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/backups](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/backups))

## Official Evidence

- [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/rest/v1/Backups/ListBackups](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/rest/v1/Backups/ListBackups)
- [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/backups](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/backups)
- [https://docs.cloud.google.com/sql/docs/sqlserver/import-export/import-export-bak](https://docs.cloud.google.com/sql/docs/sqlserver/import-export/import-export-bak)
