# pageinspect extension

Product: Cloud SQL for PostgreSQL
Feature slug: `pageinspect-extension`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Cloud SQL for PostgreSQL supports the pageinspect extension for inspecting database pages at a low level.

## Lifecycle

- Latest feature date: 2020-05-11
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- auth
- permission
- private

## Official Evidence

- [https://docs.cloud.google.com/sql/docs/postgres/about-private-service-connect](https://docs.cloud.google.com/sql/docs/postgres/about-private-service-connect)
- [https://docs.cloud.google.com/sql/docs/postgres/authorize-networks](https://docs.cloud.google.com/sql/docs/postgres/authorize-networks)
- [https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/backups](https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/backups)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
