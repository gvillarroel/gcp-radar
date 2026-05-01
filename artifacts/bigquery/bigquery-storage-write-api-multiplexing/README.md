# BigQuery Storage Write API multiplexing

Product: BigQuery
Feature slug: `bigquery-storage-write-api-multiplexing`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Storage Write API multiplexing lets the default stream write to multiple destination tables with shared connections.

## Lifecycle

- Latest feature date: 2023-07-31
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- auth
- iam
- key
- kms
- permission

## Official Evidence

- [https://docs.cloud.google.com/bigquery/docs/loading-data-cloud-storage-csv](https://docs.cloud.google.com/bigquery/docs/loading-data-cloud-storage-csv)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/reference/storage/libraries](https://docs.cloud.google.com/bigquery/docs/reference/storage/libraries)
