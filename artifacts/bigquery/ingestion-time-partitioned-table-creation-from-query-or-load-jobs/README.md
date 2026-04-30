# Ingestion-time partitioned table creation from query or load jobs

Product: BigQuery
Feature slug: `ingestion-time-partitioned-table-creation-from-query-or-load-jobs`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

BigQuery supports creating ingestion-time partitioned tables by specifying partitioning options when writing query results or loading data into a new table.

## Lifecycle

- Latest feature date: 2017-09-28
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- allow
- permission
- role

## Official Evidence

- [https://docs.cloud.google.com/bigquery/docs/biglake-intro](https://docs.cloud.google.com/bigquery/docs/biglake-intro)
- [https://docs.cloud.google.com/bigquery/docs/change-data-capture](https://docs.cloud.google.com/bigquery/docs/change-data-capture)
- [https://docs.cloud.google.com/bigquery/docs/partitioned-tables](https://docs.cloud.google.com/bigquery/docs/partitioned-tables)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
