# innodb_flush_log_at_trx_commit flag

Product: Cloud SQL for MySQL
Feature slug: `innodb-flush-log-at-trx-commit-flag`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Cloud SQL for MySQL supports the innodb_flush_log_at_trx_commit database flag.

## Lifecycle

- Latest feature date: 2021-06-29
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- audit (evidence: [https://docs.cloud.google.com/sql/docs/mysql/built-in-authentication](https://docs.cloud.google.com/sql/docs/mysql/built-in-authentication), [https://docs.cloud.google.com/sql/docs/mysql/charset-collation](https://docs.cloud.google.com/sql/docs/mysql/charset-collation), [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/view-audit-logs-for-automated-backups](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/view-audit-logs-for-automated-backups))
- auth (evidence: [https://docs.cloud.google.com/sql/docs/mysql/built-in-authentication](https://docs.cloud.google.com/sql/docs/mysql/built-in-authentication), [https://docs.cloud.google.com/sql/docs/mysql/charset-collation](https://docs.cloud.google.com/sql/docs/mysql/charset-collation), [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/view-audit-logs-for-automated-backups](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/view-audit-logs-for-automated-backups))
- encrypt (evidence: [https://docs.cloud.google.com/sql/docs/mysql/built-in-authentication](https://docs.cloud.google.com/sql/docs/mysql/built-in-authentication), [https://docs.cloud.google.com/sql/docs/mysql/charset-collation](https://docs.cloud.google.com/sql/docs/mysql/charset-collation), [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/view-audit-logs-for-automated-backups](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/view-audit-logs-for-automated-backups))
- logging (evidence: [https://docs.cloud.google.com/sql/docs/mysql/built-in-authentication](https://docs.cloud.google.com/sql/docs/mysql/built-in-authentication), [https://docs.cloud.google.com/sql/docs/mysql/charset-collation](https://docs.cloud.google.com/sql/docs/mysql/charset-collation), [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/view-audit-logs-for-automated-backups](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/view-audit-logs-for-automated-backups))
- policy (evidence: [https://docs.cloud.google.com/sql/docs/mysql/built-in-authentication](https://docs.cloud.google.com/sql/docs/mysql/built-in-authentication), [https://docs.cloud.google.com/sql/docs/mysql/charset-collation](https://docs.cloud.google.com/sql/docs/mysql/charset-collation), [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/view-audit-logs-for-automated-backups](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/view-audit-logs-for-automated-backups))

## Official Evidence

- [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/view-audit-logs-for-automated-backups](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/view-audit-logs-for-automated-backups)
- [https://docs.cloud.google.com/sql/docs/mysql/built-in-authentication](https://docs.cloud.google.com/sql/docs/mysql/built-in-authentication)
- [https://docs.cloud.google.com/sql/docs/mysql/charset-collation](https://docs.cloud.google.com/sql/docs/mysql/charset-collation)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
