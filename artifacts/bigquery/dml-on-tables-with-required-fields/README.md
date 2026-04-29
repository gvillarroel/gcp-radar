# DML on tables with required fields

Product: BigQuery
Feature slug: `dml-on-tables-with-required-fields`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

BigQuery supports using DML statements to modify tables with required fields.

## Lifecycle

- Latest feature date: 2017-07-13
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- iam
- permission
- role
- security

## Official Evidence

- [https://docs.cloud.google.com/bigquery/docs/biglake-intro](https://docs.cloud.google.com/bigquery/docs/biglake-intro)
- [https://docs.cloud.google.com/bigquery/docs/partitioned-tables](https://docs.cloud.google.com/bigquery/docs/partitioned-tables)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/dml-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/dml-syntax)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
