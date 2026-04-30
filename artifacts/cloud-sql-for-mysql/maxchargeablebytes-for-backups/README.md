# maxChargeableBytes for backups

Product: Cloud SQL for MySQL
Feature slug: `maxchargeablebytes-for-backups`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

The backupRuns.GET API and gcloud backup describe output now include maxChargeableBytes for backups.

## Lifecycle

- Latest feature date: 2024-10-25
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- auth
- authorization
- permission
- token

## Official Evidence

- [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backing-up](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backing-up)
- [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/manage-backups-deleted-instance](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/manage-backups-deleted-instance)
- [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/manage-standard-backups](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/manage-standard-backups)
