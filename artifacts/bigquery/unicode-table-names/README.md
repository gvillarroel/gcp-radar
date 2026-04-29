# Unicode table names

Product: BigQuery
Feature slug: `unicode-table-names`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

BigQuery supports table names that use Unicode characters.

## Lifecycle

- Latest feature date: 2020-10-14
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- auth
- encrypt
- key
- kms
- permission
- role

## Official Evidence

- [https://docs.cloud.google.com/bigquery/docs/biglake-intro](https://docs.cloud.google.com/bigquery/docs/biglake-intro)
- [https://docs.cloud.google.com/bigquery/docs/exporting-data](https://docs.cloud.google.com/bigquery/docs/exporting-data)
- [https://docs.cloud.google.com/bigquery/docs/tables](https://docs.cloud.google.com/bigquery/docs/tables)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
