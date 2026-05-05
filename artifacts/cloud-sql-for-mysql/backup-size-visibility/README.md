# Backup size visibility

Product: Cloud SQL for MySQL
Feature slug: `backup-size-visibility`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Cloud SQL lets you view the size of a backup for an instance.

## Lifecycle

- Latest feature date: 2024-11-04
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backups](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backups), [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/manage-backups-deleted-instance](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/manage-backups-deleted-instance), [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/restore](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/restore))
- audit (evidence: [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backups](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backups), [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/manage-backups-deleted-instance](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/manage-backups-deleted-instance), [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/restore](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/restore))
- auth (evidence: [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backups](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backups), [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/manage-backups-deleted-instance](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/manage-backups-deleted-instance), [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/restore](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/restore))
- authorization (evidence: [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backups](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backups), [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/manage-backups-deleted-instance](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/manage-backups-deleted-instance), [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/restore](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/restore))
- token (evidence: [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backups](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backups), [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/manage-backups-deleted-instance](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/manage-backups-deleted-instance), [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/restore](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/restore))

## Official Evidence

- [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backups](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backups)
- [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/manage-backups-deleted-instance](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/manage-backups-deleted-instance)
- [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/restore](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/restore)
