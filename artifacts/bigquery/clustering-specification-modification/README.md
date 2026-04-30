# Clustering specification modification

Product: BigQuery
Feature slug: `clustering-specification-modification`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

BigQuery supports converting tables between clustered and non-clustered layouts and updating clustered columns.

## Lifecycle

- Latest feature date: 2021-04-21
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- allow
- auth
- security

## Official Evidence

- [https://docs.cloud.google.com/bigquery/docs/partitioned-tables](https://docs.cloud.google.com/bigquery/docs/partitioned-tables)
- [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-pandas-methods](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-pandas-methods)
- [https://docs.cloud.google.com/bigquery/docs/tables](https://docs.cloud.google.com/bigquery/docs/tables)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
