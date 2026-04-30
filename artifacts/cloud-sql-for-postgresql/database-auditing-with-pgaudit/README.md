# Database auditing with pgAudit

Product: Cloud SQL for PostgreSQL
Feature slug: `database-auditing-with-pgaudit`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Cloud SQL for PostgreSQL supports database auditing through the pgAudit extension to log selected SQL operations; Cloud SQL for PostgreSQL supports database auditing through the pgAudit extension to log selected SQL operations.

## Lifecycle

- Latest feature date: 2021-01-19
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- audit
- auth
- certificate
- encrypt
- iam
- identity
- logging
- token

## Official Evidence

- [https://docs.cloud.google.com/sql/docs/mysql/project-access-control](https://docs.cloud.google.com/sql/docs/mysql/project-access-control)
- [https://docs.cloud.google.com/sql/docs/postgres/authorize-networks](https://docs.cloud.google.com/sql/docs/postgres/authorize-networks)
- [https://docs.cloud.google.com/sql/docs/postgres/troubleshooting](https://docs.cloud.google.com/sql/docs/postgres/troubleshooting)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
