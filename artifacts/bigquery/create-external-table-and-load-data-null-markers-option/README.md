# CREATE EXTERNAL TABLE and LOAD DATA null_markers option

Product: BigQuery
Feature slug: `create-external-table-and-load-data-null-markers-option`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

The null_markers option defines which strings in CSV files are treated as NULL values when creating external tables or loading data.

## Lifecycle

- Latest feature date: 2025-07-22
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- allow
- auth
- encrypt
- iam
- key
- kms
- permission
- policy
- role

## Official Evidence

- [https://docs.cloud.google.com/bigquery/docs/loading-data-cloud-storage-csv](https://docs.cloud.google.com/bigquery/docs/loading-data-cloud-storage-csv)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/tables](https://docs.cloud.google.com/bigquery/docs/tables)
