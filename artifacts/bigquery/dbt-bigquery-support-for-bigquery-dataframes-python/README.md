# dbt-bigquery support for BigQuery DataFrames Python

Product: BigQuery
Feature slug: `dbt-bigquery-support-for-bigquery-dataframes-python`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

The dbt-bigquery adapter can run Python code defined in BigQuery DataFrames.

## Lifecycle

- Latest feature date: 2025-10-15
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- auth (evidence: [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-clustering-model](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-clustering-model), [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-pandas-methods](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-pandas-methods), [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-remote-function](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-remote-function))

## Official Evidence

- [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-clustering-model](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-clustering-model)
- [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-pandas-methods](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-pandas-methods)
- [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-remote-function](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-remote-function)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
