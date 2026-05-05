# LAX_BOOL

Product: BigQuery
Feature slug: `lax-bool`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

LAX_BOOL attempts to convert a JSON value to a SQL BOOL value.

## Lifecycle

- Latest feature date: 2023-08-07
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/json_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/json_functions), [https://docs.cloud.google.com/bigquery/docs/json-data](https://docs.cloud.google.com/bigquery/docs/json-data))
- audit (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/json_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/json_functions), [https://docs.cloud.google.com/bigquery/docs/json-data](https://docs.cloud.google.com/bigquery/docs/json-data))
- constraint (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/json_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/json_functions), [https://docs.cloud.google.com/bigquery/docs/json-data](https://docs.cloud.google.com/bigquery/docs/json-data))
- credential (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/json_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/json_functions), [https://docs.cloud.google.com/bigquery/docs/json-data](https://docs.cloud.google.com/bigquery/docs/json-data))
- encrypt (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/json_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/json_functions), [https://docs.cloud.google.com/bigquery/docs/json-data](https://docs.cloud.google.com/bigquery/docs/json-data))
- iam (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/json_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/json_functions), [https://docs.cloud.google.com/bigquery/docs/json-data](https://docs.cloud.google.com/bigquery/docs/json-data))
- key (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/json_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/json_functions), [https://docs.cloud.google.com/bigquery/docs/json-data](https://docs.cloud.google.com/bigquery/docs/json-data))
- logging (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/json_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/json_functions), [https://docs.cloud.google.com/bigquery/docs/json-data](https://docs.cloud.google.com/bigquery/docs/json-data))
- permission (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/json_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/json_functions), [https://docs.cloud.google.com/bigquery/docs/json-data](https://docs.cloud.google.com/bigquery/docs/json-data))
- policy (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/json_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/json_functions), [https://docs.cloud.google.com/bigquery/docs/json-data](https://docs.cloud.google.com/bigquery/docs/json-data))
- private (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/json_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/json_functions), [https://docs.cloud.google.com/bigquery/docs/json-data](https://docs.cloud.google.com/bigquery/docs/json-data))
- security (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/json_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/json_functions), [https://docs.cloud.google.com/bigquery/docs/json-data](https://docs.cloud.google.com/bigquery/docs/json-data))

## Official Evidence

- [https://docs.cloud.google.com/bigquery/docs/json-data](https://docs.cloud.google.com/bigquery/docs/json-data)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/json_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/json_functions)
