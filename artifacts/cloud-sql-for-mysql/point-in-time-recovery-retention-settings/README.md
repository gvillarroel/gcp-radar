# Point-in-time recovery retention settings

Product: Cloud SQL for MySQL
Feature slug: `point-in-time-recovery-retention-settings`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Cloud SQL for MySQL supports configurable log retention periods for point-in-time recovery from 1 to 7 days.

## Lifecycle

- Latest feature date: 2020-11-19
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- auth
- authorization
- logging
- token

## Official Evidence

- [https://docs.cloud.google.com/sql/docs/mysql/admin-api-error-messages](https://docs.cloud.google.com/sql/docs/mysql/admin-api-error-messages)
- [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/configure-pitr](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/configure-pitr)
- [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/pitr](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/pitr)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
