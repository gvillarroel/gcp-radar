# Final backup on instance deletion

Product: Cloud SQL for PostgreSQL
Feature slug: `final-backup-on-instance-deletion`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Final backup on instance deletion lets an instance take a final backup when it is deleted and retain it for a configured period.

## Lifecycle

- Latest feature date: 2025-09-03
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- auth
- authorization
- key
- token

## Official Evidence

- [https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/backup-options](https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/backup-options)
- [https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/manage-backups-deleted-instance](https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/manage-backups-deleted-instance)
- [https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/manage-standard-backups](https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/manage-standard-backups)
