# Point-in-time recovery by timestamp

Product: Cloud SQL for MySQL
Feature slug: `point-in-time-recovery-by-timestamp`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Cloud SQL for MySQL supports point-in-time recovery using a timestamp.

## Lifecycle

- Latest feature date: 2021-12-16
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- audit
- auth
- authorization
- logging
- token

## Official Evidence

- [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/pitr](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/pitr)
- [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/view-audit-logs-for-automated-backups](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/view-audit-logs-for-automated-backups)
- [https://docs.cloud.google.com/sql/docs/mysql/best-practices](https://docs.cloud.google.com/sql/docs/mysql/best-practices)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
