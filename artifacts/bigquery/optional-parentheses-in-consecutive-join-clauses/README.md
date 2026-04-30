# Optional parentheses in consecutive JOIN clauses

Product: BigQuery
Feature slug: `optional-parentheses-in-consecutive-join-clauses`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

BigQuery SQL allows parentheses to be omitted in consecutive ON or USING join clauses.

## Lifecycle

- Latest feature date: 2020-08-19
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- allow
- auth

## Official Evidence

- [https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql](https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax)
