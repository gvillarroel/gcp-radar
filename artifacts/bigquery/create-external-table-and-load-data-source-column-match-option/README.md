# CREATE EXTERNAL TABLE and LOAD DATA source_column_match option

Product: BigQuery
Feature slug: `create-external-table-and-load-data-source-column-match-option`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

The source_column_match option controls whether loaded columns are matched to schema columns by position or by name.

## Lifecycle

- Latest feature date: 2025-07-22
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- audit
- auth
- key

## Official Evidence

- [https://docs.cloud.google.com/bigquery/docs/loading-data-cloud-storage-csv](https://docs.cloud.google.com/bigquery/docs/loading-data-cloud-storage-csv)
- [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-table-external-hivepartitioned](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-table-external-hivepartitioned)
- [https://docs.cloud.google.com/bigquery/docs/tables](https://docs.cloud.google.com/bigquery/docs/tables)
