# PITR with read replicas

Product: Cloud SQL for SQL Server
Feature slug: `pitr-with-read-replicas`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Cloud SQL supports using point-in-time recovery and read replicas on the same primary instance.

## Lifecycle

- Latest feature date: 2023-05-15
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/configure-pitr](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/configure-pitr), [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/pitr](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/pitr), [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/restoring](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/restoring))
- auth (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/configure-pitr](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/configure-pitr), [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/pitr](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/pitr), [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/restoring](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/restoring))
- authorization (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/configure-pitr](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/configure-pitr), [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/pitr](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/pitr), [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/restoring](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/restoring))
- token (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/configure-pitr](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/configure-pitr), [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/pitr](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/pitr), [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/restoring](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/restoring))

## Official Evidence

- [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/configure-pitr](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/configure-pitr)
- [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/pitr](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/pitr)
- [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/restoring](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/restoring)
