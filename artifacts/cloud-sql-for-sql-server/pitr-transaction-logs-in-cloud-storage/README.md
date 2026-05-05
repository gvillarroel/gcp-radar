# PITR transaction logs in Cloud Storage

Product: Cloud SQL for SQL Server
Feature slug: `pitr-transaction-logs-in-cloud-storage`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Cloud SQL stores point-in-time recovery transaction logs in Cloud Storage.

## Lifecycle

- Latest feature date: 2024-05-31
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/configure-pitr](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/configure-pitr), [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/restore](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/restore), [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/pitr](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/pitr))
- allow (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/configure-pitr](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/configure-pitr), [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/restore](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/restore), [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/pitr](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/pitr))
- auth (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/configure-pitr](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/configure-pitr), [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/restore](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/restore), [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/pitr](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/pitr))
- authorization (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/configure-pitr](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/configure-pitr), [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/restore](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/restore), [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/pitr](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/pitr))
- token (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/configure-pitr](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/configure-pitr), [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/restore](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/restore), [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/pitr](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/pitr))

## Official Evidence

- [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/configure-pitr](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/configure-pitr)
- [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/pitr](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/pitr)
- [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/restore](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/restore)
