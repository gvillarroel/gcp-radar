# Configurable DATA_FREQUENCY for multi-time-series forecasting

Product: BigQuery
Feature slug: `configurable-data-frequency-for-multi-time-series-forecasting`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

BigQuery ML time series models let you set DATA_FREQUENCY explicitly when forecasting multiple time series with TIME_SERIES_ID_COL.

## Lifecycle

- Latest feature date: 2020-09-29
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- audit
- constraint
- credential
- encrypt
- iam
- key
- kms
- logging
- permission
- policy
- private
- security

## Official Evidence

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create-multivariate-time-series](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create-multivariate-time-series)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create-time-series](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create-time-series)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-forecast](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-forecast)
