# Final backup on instance deletion

Product: Cloud SQL for MySQL
Feature slug: `final-backup-on-instance-deletion`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

This feature lets an instance take a final backup at deletion time and lets you configure its retention period.

## Lifecycle

- Latest feature date: 2025-09-03
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/manage-standard-backups](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/manage-standard-backups), [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backup-options](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backup-options), [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backing-up](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backing-up))
- auth (evidence: [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/manage-standard-backups](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/manage-standard-backups), [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backup-options](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backup-options), [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backing-up](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backing-up))
- authorization (evidence: [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/manage-standard-backups](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/manage-standard-backups), [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backup-options](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backup-options), [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backing-up](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backing-up))
- key (evidence: [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/manage-standard-backups](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/manage-standard-backups), [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backup-options](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backup-options), [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backing-up](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backing-up))
- token (evidence: [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/manage-standard-backups](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/manage-standard-backups), [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backup-options](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backup-options), [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backing-up](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backing-up))

## Official Evidence

- [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backing-up](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backing-up)
- [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backup-options](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backup-options)
- [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/manage-standard-backups](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/manage-standard-backups)
