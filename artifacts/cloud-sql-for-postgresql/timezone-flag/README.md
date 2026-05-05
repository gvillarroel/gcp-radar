# TimeZone flag

Product: Cloud SQL for PostgreSQL
Feature slug: `timezone-flag`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Cloud SQL for PostgreSQL supports the TimeZone database flag.

## Lifecycle

- Latest feature date: 2022-10-05
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- allow (evidence: [https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/flags](https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/flags), [https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/flags/list](https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/flags/list), [https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/restore](https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/restore))

## Official Evidence

- [https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/flags](https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/flags)
- [https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/flags/list](https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/flags/list)
- [https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/restore](https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/restore)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
