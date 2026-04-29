# Cross-cloud CTAS and INSERT INTO SELECT statements

Product: BigQuery
Feature slug: `cross-cloud-ctas-and-insert-into-select-statements`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

BigQuery supports CREATE TABLE AS SELECT and INSERT INTO SELECT statements with billing enabled to filter data from Amazon S3 and Azure Blob Storage before loading into BigQuery tables.

## Lifecycle

- Latest feature date: 2024-02-28
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

- [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-dataset-cmek](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-dataset-cmek)
- [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-table](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-table)
- [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-table-from-template](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-table-from-template)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
