# ARRAY_FIRST function

Product: BigQuery
Feature slug: `array-first-function`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

The ARRAY_FIRST GoogleSQL function returns the first element of an array; The ARRAY_FIRST GoogleSQL function returns the first element of an input array.

## Lifecycle

- Latest feature date: 2025-09-25
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/array_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/array_functions), [https://docs.cloud.google.com/bigquery/docs/arrays](https://docs.cloud.google.com/bigquery/docs/arrays), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/approximate_aggregate_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/approximate_aggregate_functions))
- audit (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/array_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/array_functions), [https://docs.cloud.google.com/bigquery/docs/arrays](https://docs.cloud.google.com/bigquery/docs/arrays), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/approximate_aggregate_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/approximate_aggregate_functions))
- constraint (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/array_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/array_functions), [https://docs.cloud.google.com/bigquery/docs/arrays](https://docs.cloud.google.com/bigquery/docs/arrays), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/approximate_aggregate_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/approximate_aggregate_functions))
- credential (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/array_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/array_functions), [https://docs.cloud.google.com/bigquery/docs/arrays](https://docs.cloud.google.com/bigquery/docs/arrays), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/approximate_aggregate_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/approximate_aggregate_functions))
- encrypt (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/array_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/array_functions), [https://docs.cloud.google.com/bigquery/docs/arrays](https://docs.cloud.google.com/bigquery/docs/arrays), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/approximate_aggregate_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/approximate_aggregate_functions))
- iam (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/array_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/array_functions), [https://docs.cloud.google.com/bigquery/docs/arrays](https://docs.cloud.google.com/bigquery/docs/arrays), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/approximate_aggregate_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/approximate_aggregate_functions))
- key (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/array_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/array_functions), [https://docs.cloud.google.com/bigquery/docs/arrays](https://docs.cloud.google.com/bigquery/docs/arrays), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/approximate_aggregate_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/approximate_aggregate_functions))
- logging (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/array_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/array_functions), [https://docs.cloud.google.com/bigquery/docs/arrays](https://docs.cloud.google.com/bigquery/docs/arrays), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/approximate_aggregate_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/approximate_aggregate_functions))
- permission (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/array_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/array_functions), [https://docs.cloud.google.com/bigquery/docs/arrays](https://docs.cloud.google.com/bigquery/docs/arrays), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/approximate_aggregate_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/approximate_aggregate_functions))
- policy (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/array_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/array_functions), [https://docs.cloud.google.com/bigquery/docs/arrays](https://docs.cloud.google.com/bigquery/docs/arrays), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/approximate_aggregate_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/approximate_aggregate_functions))
- private (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/array_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/array_functions), [https://docs.cloud.google.com/bigquery/docs/arrays](https://docs.cloud.google.com/bigquery/docs/arrays), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/approximate_aggregate_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/approximate_aggregate_functions))
- security (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/array_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/array_functions), [https://docs.cloud.google.com/bigquery/docs/arrays](https://docs.cloud.google.com/bigquery/docs/arrays), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/approximate_aggregate_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/approximate_aggregate_functions))

## Official Evidence

- [https://docs.cloud.google.com/bigquery/docs/arrays](https://docs.cloud.google.com/bigquery/docs/arrays)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/approximate_aggregate_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/approximate_aggregate_functions)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/array_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/array_functions)
