# Backup and restore rate limiting

Product: Cloud SQL for MySQL
Feature slug: `backup-and-restore-rate-limiting`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Cloud SQL limits the rate of backup and restore operations on the data disk.

## Lifecycle

- Latest feature date: 2021-12-09
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- allow
- key
- token

## Official Evidence

- [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backup-options](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backup-options)
- [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/restore](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/restore)
- [https://docs.cloud.google.com/sql/docs/mysql/quotas](https://docs.cloud.google.com/sql/docs/mysql/quotas)
