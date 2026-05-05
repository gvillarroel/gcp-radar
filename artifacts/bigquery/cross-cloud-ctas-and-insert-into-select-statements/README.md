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

- access (evidence: [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-table](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-table), [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-dataset-cmek](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-dataset-cmek), [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-table-from-template](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-table-from-template))
- auth (evidence: [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-table](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-table), [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-dataset-cmek](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-dataset-cmek), [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-table-from-template](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-table-from-template))
- encrypt (evidence: [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-table](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-table), [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-dataset-cmek](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-dataset-cmek), [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-table-from-template](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-table-from-template))
- iam (evidence: [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-table](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-table), [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-dataset-cmek](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-dataset-cmek), [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-table-from-template](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-table-from-template))
- key (evidence: [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-table](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-table), [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-dataset-cmek](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-dataset-cmek), [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-table-from-template](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-table-from-template))
- kms (evidence: [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-table](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-table), [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-dataset-cmek](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-dataset-cmek), [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-table-from-template](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-table-from-template))
- policy (evidence: [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-table](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-table), [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-dataset-cmek](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-dataset-cmek), [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-table-from-template](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-table-from-template))
- role (evidence: [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-table](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-table), [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-dataset-cmek](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-dataset-cmek), [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-table-from-template](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-table-from-template))

## Official Evidence

- [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-dataset-cmek](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-dataset-cmek)
- [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-table](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-table)
- [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-table-from-template](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-table-from-template)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
