# Spanner backup schedules

Product: Spanner
Feature slug: `spanner-backup-schedules`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Spanner supports creating and managing backup schedules to define backup timing, frequency, retention, and encryption type.

## Lifecycle

- Latest feature date: 2024-10-07
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- audit
- encrypt
- key
- logging

## Official Evidence

- [https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.types.BackupScheduleSpec](https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.types.BackupScheduleSpec)
- [https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.types.CreateDatabaseRequest](https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.types.CreateDatabaseRequest)
- [https://docs.cloud.google.com/spanner/docs/backup](https://docs.cloud.google.com/spanner/docs/backup)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
