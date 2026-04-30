# SQL user-defined aggregate functions

Product: BigQuery
Feature slug: `sql-user-defined-aggregate-functions`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

BigQuery supports SQL user-defined aggregate functions through the CREATE AGGREGATE FUNCTION statement; BigQuery supports user-defined aggregate functions written with SQL expressions using the CREATE AGGREGATE FUNCTION statement.

## Lifecycle

- Latest feature date: 2025-03-03
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- auth
- encrypt
- key

## Official Evidence

- [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-routine-ddl](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-routine-ddl)
- [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-table](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-table)
- [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-ddl-create-view](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-ddl-create-view)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
