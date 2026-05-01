# pg_partman extension

Product: Cloud SQL for PostgreSQL
Feature slug: `pg-partman-extension`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

The pg_partman PostgreSQL extension is available in Cloud SQL with support updated to version 5.2.4 for PostgreSQL 14 and later; Cloud SQL for PostgreSQL supports the pg_partman extension for managing time-based and serial-based table partitions.

## Lifecycle

- Latest feature date: 2025-04-30
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- audit
- permission
- policy
- private

## Official Evidence

- [https://docs.cloud.google.com/sql/docs/postgres/about-private-service-connect](https://docs.cloud.google.com/sql/docs/postgres/about-private-service-connect)
- [https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/backups](https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/backups)
- [https://docs.cloud.google.com/sql/docs/postgres/samples](https://docs.cloud.google.com/sql/docs/postgres/samples)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
