# PostgreSQL flags

Product: Cloud SQL for PostgreSQL
Feature slug: `postgresql-flags`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Cloud SQL for PostgreSQL supports configurable PostgreSQL database flags.

## Lifecycle

- Latest feature date: 2021-03-31
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- allow (evidence: [https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/flags](https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/flags), [https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/flags/list](https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/flags/list), [https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/restore](https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/restore))
- private (evidence: [https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/flags](https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/flags), [https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/flags/list](https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/flags/list), [https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/restore](https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/restore))

## Official Evidence

- [https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/flags](https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/flags)
- [https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/flags/list](https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/flags/list)
- [https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/restore](https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/restore)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
