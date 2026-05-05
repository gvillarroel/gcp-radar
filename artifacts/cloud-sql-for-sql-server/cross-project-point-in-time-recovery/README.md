# Cross-project point-in-time recovery

Product: Cloud SQL for SQL Server
Feature slug: `cross-project-point-in-time-recovery`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Cross-project point-in-time recovery lets you restore a Cloud SQL instance to a different project than the source instance or backup vault project.

## Lifecycle

- Latest feature date: 2026-03-17
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/pitr](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/pitr), [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/restore](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/restore), [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/configure-pitr](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/configure-pitr))
- auth (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/pitr](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/pitr), [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/restore](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/restore), [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/configure-pitr](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/configure-pitr))
- authorization (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/pitr](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/pitr), [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/restore](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/restore), [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/configure-pitr](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/configure-pitr))
- token (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/pitr](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/pitr), [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/restore](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/restore), [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/configure-pitr](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/configure-pitr))

## Official Evidence

- [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/configure-pitr](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/configure-pitr)
- [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/pitr](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/pitr)
- [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/restore](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/restore)
