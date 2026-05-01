# Spanner regional endpoint in me-central2

Product: Spanner
Feature slug: `spanner-regional-endpoint-in-me-central2`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Spanner supports a regional endpoint in the me-central2 region so workloads can run with data locality restrictions for compliance needs.

## Lifecycle

- Latest feature date: 2024-02-29
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access

## Official Evidence

- [https://docs.cloud.google.com/python/docs/reference/spanner/latest/database-usage](https://docs.cloud.google.com/python/docs/reference/spanner/latest/database-usage)
- [https://docs.cloud.google.com/spanner/docs/access-with-fgac](https://docs.cloud.google.com/spanner/docs/access-with-fgac)
- [https://docs.cloud.google.com/spanner/docs/choose-googlesql-or-postgres](https://docs.cloud.google.com/spanner/docs/choose-googlesql-or-postgres)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
- `warn:generic_supporting_pages` Supporting pages do not mention any informative feature tokens.
