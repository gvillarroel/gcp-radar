# ALTER COLUMN SET DATA TYPE

Product: BigQuery
Feature slug: `alter-column-set-data-type`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

BigQuery supports the ALTER COLUMN SET DATA TYPE DDL statement to change a column's data type.

## Lifecycle

- Latest feature date: 2021-08-03
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- auth
- encrypt
- iam
- key
- kms
- policy
- role

## Official Evidence

- [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-dataset](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-dataset)
- [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-dataset-cmek](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-dataset-cmek)
- [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-dataset-iam](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-dataset-iam)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
