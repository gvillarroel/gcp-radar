# Dataset undeletion within time travel window

Product: BigQuery
Feature slug: `dataset-undeletion-within-time-travel-window`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

BigQuery can restore a deleted dataset to its previous state if it is still within the time travel window.

## Lifecycle

- Latest feature date: 2026-02-23
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- key
- permission

## Official Evidence

- [https://docs.cloud.google.com/bigquery/docs/access-historical-data](https://docs.cloud.google.com/bigquery/docs/access-historical-data)
- [https://docs.cloud.google.com/bigquery/docs/managing-datasets](https://docs.cloud.google.com/bigquery/docs/managing-datasets)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
