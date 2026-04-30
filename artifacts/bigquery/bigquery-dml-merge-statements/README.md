# BigQuery DML MERGE statements

Product: BigQuery
Feature slug: `bigquery-dml-merge-statements`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

BigQuery supports DML MERGE statements for combining insert, update, and delete logic in a single statement.

## Lifecycle

- Latest feature date: 2019-02-25
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- auth
- iam
- permission
- policy
- token

## Official Evidence

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/dml-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/dml-syntax)
- [https://docs.cloud.google.com/bigquery/docs/samples/analyticshub-quickstart](https://docs.cloud.google.com/bigquery/docs/samples/analyticshub-quickstart)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
