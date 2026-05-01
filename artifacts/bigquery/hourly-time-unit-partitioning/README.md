# Hourly time-unit partitioning

Product: BigQuery
Feature slug: `hourly-time-unit-partitioning`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

BigQuery supports creating time-unit partitions with hourly granularity; BigQuery supports creating partitioned tables with hourly time-unit granularity.

## Lifecycle

- Latest feature date: 2020-09-21
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- auth
- credential

## Official Evidence

- [https://docs.cloud.google.com/bigquery/docs/partitioned-tables](https://docs.cloud.google.com/bigquery/docs/partitioned-tables)
- [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-auth-drive-scope](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-auth-drive-scope)
- [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-copy-table-multiple-source](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-copy-table-multiple-source)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
