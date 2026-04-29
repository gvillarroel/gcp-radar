# MySQL 8.0.26 minor version support

Product: Cloud SQL for MySQL
Feature slug: `mysql-8-0-26-minor-version-support`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Cloud SQL for MySQL supports MySQL minor version 8.0.26.

## Lifecycle

- Latest feature date: 2021-12-16
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- audit
- key
- permission

## Official Evidence

- [https://docs.cloud.google.com/sql/docs/editions-intro](https://docs.cloud.google.com/sql/docs/editions-intro)
- [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/SqlDatabaseVersion](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/SqlDatabaseVersion)
- [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backups](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backups)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
