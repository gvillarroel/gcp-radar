# Binary log expiration flags

Product: Cloud SQL for MySQL
Feature slug: `binary-log-expiration-flags`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Cloud SQL for MySQL supports the expire_logs_days and binlog_expire_logs_seconds flags for controlling binary log expiration.

## Lifecycle

- Latest feature date: 2021-06-01
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- audit
- auth
- encrypt
- iam
- logging

## Official Evidence

- [https://docs.cloud.google.com/sql/docs/mysql/audit-logging](https://docs.cloud.google.com/sql/docs/mysql/audit-logging)
- [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/view-audit-logs-for-automated-backups](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/view-audit-logs-for-automated-backups)
- [https://docs.cloud.google.com/sql/docs/mysql/charset-collation](https://docs.cloud.google.com/sql/docs/mysql/charset-collation)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
