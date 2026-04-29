# Spanner PostgreSQL extract function

Product: Spanner
Feature slug: `spanner-postgresql-extract-function`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Spanner supports the PostgreSQL extract function in the PostgreSQL dialect.

## Lifecycle

- Latest feature date: 2023-12-05
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- key
- role

## Official Evidence

- [https://docs.cloud.google.com/spanner/docs/commit-timestamp-postgresql](https://docs.cloud.google.com/spanner/docs/commit-timestamp-postgresql)
- [https://docs.cloud.google.com/spanner/docs/information-schema-pg](https://docs.cloud.google.com/spanner/docs/information-schema-pg)
- [https://docs.cloud.google.com/spanner/docs/reference/dialect-differences](https://docs.cloud.google.com/spanner/docs/reference/dialect-differences)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
