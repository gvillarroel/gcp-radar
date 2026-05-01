# Column-based partitioned tables

Product: BigQuery
Feature slug: `column-based-partitioned-tables`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

BigQuery supports partitioning tables by a TIMESTAMP or DATE column.

## Lifecycle

- Latest feature date: 2018-02-08
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- auth

## Official Evidence

- [https://docs.cloud.google.com/bigquery/docs/biglake-intro](https://docs.cloud.google.com/bigquery/docs/biglake-intro)
- [https://docs.cloud.google.com/bigquery/docs/partitioned-tables](https://docs.cloud.google.com/bigquery/docs/partitioned-tables)
- [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-table-partitioned](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-table-partitioned)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
