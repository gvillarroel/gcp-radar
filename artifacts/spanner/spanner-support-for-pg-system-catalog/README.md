# Spanner support for pg_system_catalog

Product: Spanner
Feature slug: `spanner-support-for-pg-system-catalog`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Spanner now supports a subset of PostgreSQL pg_system_catalog tables and views.

## Lifecycle

- Latest feature date: 2024-10-09
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- audit
- iam
- key
- logging
- permission
- role

## Official Evidence

- [https://docs.cloud.google.com/spanner/docs/compute-capacity](https://docs.cloud.google.com/spanner/docs/compute-capacity)
- [https://docs.cloud.google.com/spanner/docs/information-schema](https://docs.cloud.google.com/spanner/docs/information-schema)
- [https://docs.cloud.google.com/spanner/docs/information-schema-pg](https://docs.cloud.google.com/spanner/docs/information-schema-pg)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
