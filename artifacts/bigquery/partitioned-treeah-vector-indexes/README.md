# Partitioned TreeAH vector indexes

Product: BigQuery
Feature slug: `partitioned-treeah-vector-indexes`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

The PARTITION BY clause in CREATE VECTOR INDEX can partition TreeAH vector indexes for partition pruning and lower I/O costs.

## Lifecycle

- Latest feature date: 2025-06-26
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- auth
- key

## Official Evidence

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-table-external-hivepartitioned](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-table-external-hivepartitioned)
- [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-table-range-partitioned](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-table-range-partitioned)
