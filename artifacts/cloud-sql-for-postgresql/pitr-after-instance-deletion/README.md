# PITR after instance deletion

Product: Cloud SQL for PostgreSQL
Feature slug: `pitr-after-instance-deletion`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

PITR after instance deletion lets enhanced backups support point-in-time recovery after an instance has been deleted.

## Lifecycle

- Latest feature date: 2025-12-16
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/restore](https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/restore), [https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/pitr](https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/pitr), [https://docs.cloud.google.com/sql/docs/postgres/create-instance](https://docs.cloud.google.com/sql/docs/postgres/create-instance))
- allow (evidence: [https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/restore](https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/restore), [https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/pitr](https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/pitr), [https://docs.cloud.google.com/sql/docs/postgres/create-instance](https://docs.cloud.google.com/sql/docs/postgres/create-instance))
- auth (evidence: [https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/restore](https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/restore), [https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/pitr](https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/pitr), [https://docs.cloud.google.com/sql/docs/postgres/create-instance](https://docs.cloud.google.com/sql/docs/postgres/create-instance))
- authorization (evidence: [https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/restore](https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/restore), [https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/pitr](https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/pitr), [https://docs.cloud.google.com/sql/docs/postgres/create-instance](https://docs.cloud.google.com/sql/docs/postgres/create-instance))
- policy (evidence: [https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/restore](https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/restore), [https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/pitr](https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/pitr), [https://docs.cloud.google.com/sql/docs/postgres/create-instance](https://docs.cloud.google.com/sql/docs/postgres/create-instance))
- token (evidence: [https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/restore](https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/restore), [https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/pitr](https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/pitr), [https://docs.cloud.google.com/sql/docs/postgres/create-instance](https://docs.cloud.google.com/sql/docs/postgres/create-instance))

## Official Evidence

- [https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/pitr](https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/pitr)
- [https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/restore](https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/restore)
- [https://docs.cloud.google.com/sql/docs/postgres/create-instance](https://docs.cloud.google.com/sql/docs/postgres/create-instance)
