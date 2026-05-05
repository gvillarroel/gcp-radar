# ANY_VALUE HAVING MAX clause

Product: BigQuery
Feature slug: `any-value-having-max-clause`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

The ANY_VALUE function supports a HAVING MAX clause in queries and materialized views.

## Lifecycle

- Latest feature date: 2023-08-08
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aggregate_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aggregate_functions), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aggregate-function-calls](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aggregate-function-calls))
- audit (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aggregate_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aggregate_functions), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aggregate-function-calls](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aggregate-function-calls))
- constraint (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aggregate_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aggregate_functions), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aggregate-function-calls](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aggregate-function-calls))
- credential (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aggregate_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aggregate_functions), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aggregate-function-calls](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aggregate-function-calls))
- encrypt (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aggregate_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aggregate_functions), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aggregate-function-calls](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aggregate-function-calls))
- iam (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aggregate_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aggregate_functions), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aggregate-function-calls](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aggregate-function-calls))
- key (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aggregate_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aggregate_functions), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aggregate-function-calls](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aggregate-function-calls))
- logging (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aggregate_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aggregate_functions), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aggregate-function-calls](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aggregate-function-calls))
- permission (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aggregate_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aggregate_functions), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aggregate-function-calls](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aggregate-function-calls))
- policy (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aggregate_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aggregate_functions), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aggregate-function-calls](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aggregate-function-calls))
- private (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aggregate_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aggregate_functions), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aggregate-function-calls](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aggregate-function-calls))
- security (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aggregate_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aggregate_functions), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aggregate-function-calls](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aggregate-function-calls))

## Official Evidence

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aggregate_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aggregate_functions)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aggregate-function-calls](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aggregate-function-calls)
