# VAR_SAMP support with OVER clause

Product: BigQuery
Feature slug: `var-samp-support-with-over-clause`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

BigQuery standard SQL supports using VAR_SAMP with the OVER clause.

## Lifecycle

- Latest feature date: 2017-06-05
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/statistical_aggregate_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/statistical_aggregate_functions), [https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql](https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql))
- audit (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/statistical_aggregate_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/statistical_aggregate_functions), [https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql](https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql))
- constraint (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/statistical_aggregate_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/statistical_aggregate_functions), [https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql](https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql))
- credential (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/statistical_aggregate_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/statistical_aggregate_functions), [https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql](https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql))
- encrypt (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/statistical_aggregate_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/statistical_aggregate_functions), [https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql](https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql))
- iam (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/statistical_aggregate_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/statistical_aggregate_functions), [https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql](https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql))
- key (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/statistical_aggregate_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/statistical_aggregate_functions), [https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql](https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql))
- logging (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/statistical_aggregate_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/statistical_aggregate_functions), [https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql](https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql))
- permission (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/statistical_aggregate_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/statistical_aggregate_functions), [https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql](https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql))
- policy (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/statistical_aggregate_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/statistical_aggregate_functions), [https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql](https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql))
- private (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/statistical_aggregate_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/statistical_aggregate_functions), [https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql](https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql))
- security (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/statistical_aggregate_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/statistical_aggregate_functions), [https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql](https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql))

## Official Evidence

- [https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql](https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/statistical_aggregate_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/statistical_aggregate_functions)
