# Backup maxChargeableBytes metadata

Product: Cloud SQL for PostgreSQL
Feature slug: `backup-maxchargeablebytes-metadata`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Backup describe responses now include maxChargeableBytes to show the maximum billable size for a backup.

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
- logging
- private
- token

## Official Evidence

- [https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/manage-standard-backups](https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/manage-standard-backups)
- [https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/restoring](https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/restoring)
- [https://docs.cloud.google.com/sql/docs/postgres/troubleshooting](https://docs.cloud.google.com/sql/docs/postgres/troubleshooting)
