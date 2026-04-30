# TEMP statements with OR REPLACE and IF NOT EXISTS in sessions

Product: BigQuery
Feature slug: `temp-statements-with-or-replace-and-if-not-exists-in-sessions`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Session statements that use the TEMP keyword can also use OR REPLACE and IF NOT EXISTS.

## Lifecycle

- Latest feature date: 2023-01-09
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- constraint
- key
- policy

## Official Evidence

- [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/dml-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/dml-syntax)
