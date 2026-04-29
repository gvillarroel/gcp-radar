# Table renaming

Product: BigQuery
Feature slug: `table-renaming`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

BigQuery supports renaming tables through SQL with ALTER TABLE RENAME TO.

## Lifecycle

- Latest feature date: 2021-05-19
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- auth
- permission
- role

## Official Evidence

- [https://docs.cloud.google.com/bigquery/docs/biglake-intro](https://docs.cloud.google.com/bigquery/docs/biglake-intro)
- [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-routine-ddl](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-routine-ddl)
- [https://docs.cloud.google.com/bigquery/docs/table-decorators](https://docs.cloud.google.com/bigquery/docs/table-decorators)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
