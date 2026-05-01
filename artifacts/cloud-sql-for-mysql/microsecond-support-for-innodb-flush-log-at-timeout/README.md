# Microsecond support for innodb_flush_log_at_timeout

Product: Cloud SQL for MySQL
Feature slug: `microsecond-support-for-innodb-flush-log-at-timeout`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Cloud SQL for MySQL supports microsecond time periods for the innodb_flush_log_at_timeout flag on MySQL 5.7 and 8.0.

## Lifecycle

- Latest feature date: 2024-01-12
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- audit
- auth
- encrypt
- iam

## Official Evidence

- [https://docs.cloud.google.com/mcp/authenticate-mcp](https://docs.cloud.google.com/mcp/authenticate-mcp)
- [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/view-audit-logs-for-automated-backups](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/view-audit-logs-for-automated-backups)
- [https://docs.cloud.google.com/sql/docs/mysql/charset-collation](https://docs.cloud.google.com/sql/docs/mysql/charset-collation)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
