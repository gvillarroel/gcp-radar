# Final backup before instance deletion

Product: Cloud SQL for PostgreSQL
Feature slug: `final-backup-before-instance-deletion`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Cloud SQL can create a final backup before an instance is deleted so the data can be restored later to a new instance.

## Lifecycle

- Latest feature date: 2025-02-20
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/manage-backups-deleted-instance](https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/manage-backups-deleted-instance), [https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/backups](https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/backups), [https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/manage-standard-backups](https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/manage-standard-backups))
- auth (evidence: [https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/manage-backups-deleted-instance](https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/manage-backups-deleted-instance), [https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/backups](https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/backups), [https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/manage-standard-backups](https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/manage-standard-backups))
- authorization (evidence: [https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/manage-backups-deleted-instance](https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/manage-backups-deleted-instance), [https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/backups](https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/backups), [https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/manage-standard-backups](https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/manage-standard-backups))
- permission (evidence: [https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/manage-backups-deleted-instance](https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/manage-backups-deleted-instance), [https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/backups](https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/backups), [https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/manage-standard-backups](https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/manage-standard-backups))
- policy (evidence: [https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/manage-backups-deleted-instance](https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/manage-backups-deleted-instance), [https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/backups](https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/backups), [https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/manage-standard-backups](https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/manage-standard-backups))
- token (evidence: [https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/manage-backups-deleted-instance](https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/manage-backups-deleted-instance), [https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/backups](https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/backups), [https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/manage-standard-backups](https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/manage-standard-backups))

## Official Evidence

- [https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/backups](https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/backups)
- [https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/manage-backups-deleted-instance](https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/manage-backups-deleted-instance)
- [https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/manage-standard-backups](https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/manage-standard-backups)
