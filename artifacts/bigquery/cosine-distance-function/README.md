# COSINE_DISTANCE function

Product: BigQuery
Feature slug: `cosine-distance-function`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

The COSINE_DISTANCE function computes cosine distance between vectors in BigQuery.

## Lifecycle

- Latest feature date: 2024-03-18
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/mathematical_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/mathematical_functions), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all), [https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql](https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql))
- audit (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/mathematical_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/mathematical_functions), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all), [https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql](https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql))
- constraint (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/mathematical_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/mathematical_functions), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all), [https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql](https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql))
- credential (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/mathematical_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/mathematical_functions), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all), [https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql](https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql))
- encrypt (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/mathematical_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/mathematical_functions), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all), [https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql](https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql))
- iam (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/mathematical_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/mathematical_functions), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all), [https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql](https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql))
- key (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/mathematical_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/mathematical_functions), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all), [https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql](https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql))
- permission (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/mathematical_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/mathematical_functions), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all), [https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql](https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql))
- policy (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/mathematical_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/mathematical_functions), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all), [https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql](https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql))
- role (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/mathematical_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/mathematical_functions), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all), [https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql](https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql))

## Official Evidence

- [https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql](https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/mathematical_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/mathematical_functions)
