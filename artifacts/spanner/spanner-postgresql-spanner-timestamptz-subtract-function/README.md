# Spanner PostgreSQL spanner.timestamptz_subtract function

Product: Spanner
Feature slug: `spanner-postgresql-spanner-timestamptz-subtract-function`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Spanner supports the PostgreSQL spanner.timestamptz_subtract function in the PostgreSQL dialect.

## Lifecycle

- Latest feature date: 2023-12-05
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/spanner/docs/introspection/table-operations-statistics](https://docs.cloud.google.com/spanner/docs/introspection/table-operations-statistics), [https://docs.cloud.google.com/spanner/docs/introspection/table-sizes-statistics](https://docs.cloud.google.com/spanner/docs/introspection/table-sizes-statistics), [https://docs.cloud.google.com/spanner/docs/reference/dialect-differences](https://docs.cloud.google.com/spanner/docs/reference/dialect-differences))
- audit (evidence: [https://docs.cloud.google.com/spanner/docs/introspection/table-operations-statistics](https://docs.cloud.google.com/spanner/docs/introspection/table-operations-statistics), [https://docs.cloud.google.com/spanner/docs/introspection/table-sizes-statistics](https://docs.cloud.google.com/spanner/docs/introspection/table-sizes-statistics), [https://docs.cloud.google.com/spanner/docs/reference/dialect-differences](https://docs.cloud.google.com/spanner/docs/reference/dialect-differences))
- auth (evidence: [https://docs.cloud.google.com/spanner/docs/introspection/table-operations-statistics](https://docs.cloud.google.com/spanner/docs/introspection/table-operations-statistics), [https://docs.cloud.google.com/spanner/docs/introspection/table-sizes-statistics](https://docs.cloud.google.com/spanner/docs/introspection/table-sizes-statistics), [https://docs.cloud.google.com/spanner/docs/reference/dialect-differences](https://docs.cloud.google.com/spanner/docs/reference/dialect-differences))
- constraint (evidence: [https://docs.cloud.google.com/spanner/docs/introspection/table-operations-statistics](https://docs.cloud.google.com/spanner/docs/introspection/table-operations-statistics), [https://docs.cloud.google.com/spanner/docs/introspection/table-sizes-statistics](https://docs.cloud.google.com/spanner/docs/introspection/table-sizes-statistics), [https://docs.cloud.google.com/spanner/docs/reference/dialect-differences](https://docs.cloud.google.com/spanner/docs/reference/dialect-differences))
- encrypt (evidence: [https://docs.cloud.google.com/spanner/docs/introspection/table-operations-statistics](https://docs.cloud.google.com/spanner/docs/introspection/table-operations-statistics), [https://docs.cloud.google.com/spanner/docs/introspection/table-sizes-statistics](https://docs.cloud.google.com/spanner/docs/introspection/table-sizes-statistics), [https://docs.cloud.google.com/spanner/docs/reference/dialect-differences](https://docs.cloud.google.com/spanner/docs/reference/dialect-differences))
- iam (evidence: [https://docs.cloud.google.com/spanner/docs/introspection/table-operations-statistics](https://docs.cloud.google.com/spanner/docs/introspection/table-operations-statistics), [https://docs.cloud.google.com/spanner/docs/introspection/table-sizes-statistics](https://docs.cloud.google.com/spanner/docs/introspection/table-sizes-statistics), [https://docs.cloud.google.com/spanner/docs/reference/dialect-differences](https://docs.cloud.google.com/spanner/docs/reference/dialect-differences))
- key (evidence: [https://docs.cloud.google.com/spanner/docs/introspection/table-operations-statistics](https://docs.cloud.google.com/spanner/docs/introspection/table-operations-statistics), [https://docs.cloud.google.com/spanner/docs/introspection/table-sizes-statistics](https://docs.cloud.google.com/spanner/docs/introspection/table-sizes-statistics), [https://docs.cloud.google.com/spanner/docs/reference/dialect-differences](https://docs.cloud.google.com/spanner/docs/reference/dialect-differences))
- policy (evidence: [https://docs.cloud.google.com/spanner/docs/introspection/table-operations-statistics](https://docs.cloud.google.com/spanner/docs/introspection/table-operations-statistics), [https://docs.cloud.google.com/spanner/docs/introspection/table-sizes-statistics](https://docs.cloud.google.com/spanner/docs/introspection/table-sizes-statistics), [https://docs.cloud.google.com/spanner/docs/reference/dialect-differences](https://docs.cloud.google.com/spanner/docs/reference/dialect-differences))
- role (evidence: [https://docs.cloud.google.com/spanner/docs/introspection/table-operations-statistics](https://docs.cloud.google.com/spanner/docs/introspection/table-operations-statistics), [https://docs.cloud.google.com/spanner/docs/introspection/table-sizes-statistics](https://docs.cloud.google.com/spanner/docs/introspection/table-sizes-statistics), [https://docs.cloud.google.com/spanner/docs/reference/dialect-differences](https://docs.cloud.google.com/spanner/docs/reference/dialect-differences))
- security (evidence: [https://docs.cloud.google.com/spanner/docs/introspection/table-operations-statistics](https://docs.cloud.google.com/spanner/docs/introspection/table-operations-statistics), [https://docs.cloud.google.com/spanner/docs/introspection/table-sizes-statistics](https://docs.cloud.google.com/spanner/docs/introspection/table-sizes-statistics), [https://docs.cloud.google.com/spanner/docs/reference/dialect-differences](https://docs.cloud.google.com/spanner/docs/reference/dialect-differences))
- token (evidence: [https://docs.cloud.google.com/spanner/docs/introspection/table-operations-statistics](https://docs.cloud.google.com/spanner/docs/introspection/table-operations-statistics), [https://docs.cloud.google.com/spanner/docs/introspection/table-sizes-statistics](https://docs.cloud.google.com/spanner/docs/introspection/table-sizes-statistics), [https://docs.cloud.google.com/spanner/docs/reference/dialect-differences](https://docs.cloud.google.com/spanner/docs/reference/dialect-differences))

## Official Evidence

- [https://docs.cloud.google.com/spanner/docs/introspection/table-operations-statistics](https://docs.cloud.google.com/spanner/docs/introspection/table-operations-statistics)
- [https://docs.cloud.google.com/spanner/docs/introspection/table-sizes-statistics](https://docs.cloud.google.com/spanner/docs/introspection/table-sizes-statistics)
- [https://docs.cloud.google.com/spanner/docs/reference/dialect-differences](https://docs.cloud.google.com/spanner/docs/reference/dialect-differences)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
