# CREATE VIEW with column name list

Product: BigQuery
Feature slug: `create-view-with-column-name-list`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

BigQuery supports defining a view with an explicit column name list in CREATE VIEW statements.

## Lifecycle

- Latest feature date: 2021-04-30
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- allow
- policy
- private
- security

## Official Evidence

- [https://docs.cloud.google.com/bigquery/docs/bigqueryml-mf-explicit-tutorial](https://docs.cloud.google.com/bigquery/docs/bigqueryml-mf-explicit-tutorial)
- [https://docs.cloud.google.com/bigquery/docs/information-schema-index-column-options](https://docs.cloud.google.com/bigquery/docs/information-schema-index-column-options)
- [https://docs.cloud.google.com/bigquery/docs/reference/libraries-overview](https://docs.cloud.google.com/bigquery/docs/reference/libraries-overview)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
