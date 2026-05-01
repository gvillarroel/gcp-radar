# DML on partitioned tables

Product: BigQuery
Feature slug: `dml-on-partitioned-tables`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

BigQuery supports using DML statements with partitioned tables.

## Lifecycle

- Latest feature date: 2018-03-05
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- permission
- role
- security

## Official Evidence

- [https://docs.cloud.google.com/bigquery/docs/biglake-intro](https://docs.cloud.google.com/bigquery/docs/biglake-intro)
- [https://docs.cloud.google.com/bigquery/docs/partitioned-tables](https://docs.cloud.google.com/bigquery/docs/partitioned-tables)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/dml-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/dml-syntax)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
