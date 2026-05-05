# DML on recently written Storage Write API rows

Product: BigQuery
Feature slug: `dml-on-recently-written-storage-write-api-rows`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

BigQuery supports using DML to modify rows that were recently written through the Storage Write API.

## Lifecycle

- Latest feature date: 2024-07-22
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

No security capability was identified from the current evidence.

## Official Evidence

- [https://docs.cloud.google.com/bigquery/docs/data-manipulation-language](https://docs.cloud.google.com/bigquery/docs/data-manipulation-language)
- [https://docs.cloud.google.com/bigquery/docs/reference/reservations/rest](https://docs.cloud.google.com/bigquery/docs/reference/reservations/rest)
- [https://docs.cloud.google.com/bigquery/docs/timesfm-anomaly-detection-tutorial](https://docs.cloud.google.com/bigquery/docs/timesfm-anomaly-detection-tutorial)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
