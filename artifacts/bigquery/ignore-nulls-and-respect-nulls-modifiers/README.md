# IGNORE NULLS and RESPECT NULLS modifiers

Product: BigQuery
Feature slug: `ignore-nulls-and-respect-nulls-modifiers`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

BigQuery Standard SQL supports the IGNORE NULLS and RESPECT NULLS modifiers for ARRAY_AGG and APPROX_QUANTILES.

## Lifecycle

- Latest feature date: 2017-03-08
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aggregate_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aggregate_functions), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/migrating-from-legacy-sql](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/migrating-from-legacy-sql))
- allow (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aggregate_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aggregate_functions), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/migrating-from-legacy-sql](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/migrating-from-legacy-sql))
- audit (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aggregate_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aggregate_functions), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/migrating-from-legacy-sql](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/migrating-from-legacy-sql))
- constraint (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aggregate_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aggregate_functions), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/migrating-from-legacy-sql](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/migrating-from-legacy-sql))
- credential (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aggregate_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aggregate_functions), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/migrating-from-legacy-sql](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/migrating-from-legacy-sql))
- encrypt (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aggregate_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aggregate_functions), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/migrating-from-legacy-sql](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/migrating-from-legacy-sql))
- iam (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aggregate_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aggregate_functions), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/migrating-from-legacy-sql](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/migrating-from-legacy-sql))
- key (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aggregate_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aggregate_functions), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/migrating-from-legacy-sql](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/migrating-from-legacy-sql))
- logging (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aggregate_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aggregate_functions), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/migrating-from-legacy-sql](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/migrating-from-legacy-sql))
- permission (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aggregate_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aggregate_functions), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/migrating-from-legacy-sql](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/migrating-from-legacy-sql))
- policy (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aggregate_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aggregate_functions), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/migrating-from-legacy-sql](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/migrating-from-legacy-sql))
- private (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aggregate_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aggregate_functions), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/migrating-from-legacy-sql](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/migrating-from-legacy-sql))
- security (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aggregate_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aggregate_functions), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/migrating-from-legacy-sql](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/migrating-from-legacy-sql))

## Official Evidence

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aggregate_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aggregate_functions)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/migrating-from-legacy-sql](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/migrating-from-legacy-sql)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax)
