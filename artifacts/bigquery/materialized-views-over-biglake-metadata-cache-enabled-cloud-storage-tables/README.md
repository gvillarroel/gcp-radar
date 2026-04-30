# Materialized views over BigLake metadata cache-enabled Cloud Storage tables

Product: BigQuery
Feature slug: `materialized-views-over-biglake-metadata-cache-enabled-cloud-storage-tables`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

BigQuery supports materialized views over BigLake metadata cache-enabled tables that reference structured data in Cloud Storage.

## Lifecycle

- Latest feature date: 2023-09-25
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- encrypt
- iam
- key

## Official Evidence

- [https://docs.cloud.google.com/bigquery/docs/biglake-intro](https://docs.cloud.google.com/bigquery/docs/biglake-intro)
- [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-load-data-from-bigquery-job](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-load-data-from-bigquery-job)
- [https://docs.cloud.google.com/bigquery/docs/samples/bigquerydatatransfer-copy-dataset](https://docs.cloud.google.com/bigquery/docs/samples/bigquerydatatransfer-copy-dataset)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
