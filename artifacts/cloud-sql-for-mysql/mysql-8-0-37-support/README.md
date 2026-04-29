# MySQL 8.0.37 support

Product: Cloud SQL for MySQL
Feature slug: `mysql-8-0-37-support`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Cloud SQL for MySQL supports MySQL minor version 8.0.37.

## Lifecycle

- Latest feature date: 2024-06-13
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- audit
- auth
- encrypt
- key
- permission

## Official Evidence

- [https://docs.cloud.google.com/sql/docs/editions-intro](https://docs.cloud.google.com/sql/docs/editions-intro)
- [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backups](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backups)
- [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/restore](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/restore)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
