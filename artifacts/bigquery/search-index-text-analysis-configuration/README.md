# Search index text analysis configuration

Product: BigQuery
Feature slug: `search-index-text-analysis-configuration`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

BigQuery supports text analysis configuration options for CREATE SEARCH INDEX and related text analysis capabilities; BigQuery supports text analysis configuration options in CREATE SEARCH INDEX DDL.

## Lifecycle

- Latest feature date: 2024-03-18
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/bigquery/docs/information-schema-indexes](https://docs.cloud.google.com/bigquery/docs/information-schema-indexes), [https://docs.cloud.google.com/bigquery/docs/facebook-ads-transformation](https://docs.cloud.google.com/bigquery/docs/facebook-ads-transformation), [https://docs.cloud.google.com/bigquery/docs/timesfm-time-series-forecasting-tutorial](https://docs.cloud.google.com/bigquery/docs/timesfm-time-series-forecasting-tutorial))
- iam (evidence: [https://docs.cloud.google.com/bigquery/docs/information-schema-indexes](https://docs.cloud.google.com/bigquery/docs/information-schema-indexes), [https://docs.cloud.google.com/bigquery/docs/facebook-ads-transformation](https://docs.cloud.google.com/bigquery/docs/facebook-ads-transformation), [https://docs.cloud.google.com/bigquery/docs/timesfm-time-series-forecasting-tutorial](https://docs.cloud.google.com/bigquery/docs/timesfm-time-series-forecasting-tutorial))
- identity (evidence: [https://docs.cloud.google.com/bigquery/docs/information-schema-indexes](https://docs.cloud.google.com/bigquery/docs/information-schema-indexes), [https://docs.cloud.google.com/bigquery/docs/facebook-ads-transformation](https://docs.cloud.google.com/bigquery/docs/facebook-ads-transformation), [https://docs.cloud.google.com/bigquery/docs/timesfm-time-series-forecasting-tutorial](https://docs.cloud.google.com/bigquery/docs/timesfm-time-series-forecasting-tutorial))
- permission (evidence: [https://docs.cloud.google.com/bigquery/docs/information-schema-indexes](https://docs.cloud.google.com/bigquery/docs/information-schema-indexes), [https://docs.cloud.google.com/bigquery/docs/facebook-ads-transformation](https://docs.cloud.google.com/bigquery/docs/facebook-ads-transformation), [https://docs.cloud.google.com/bigquery/docs/timesfm-time-series-forecasting-tutorial](https://docs.cloud.google.com/bigquery/docs/timesfm-time-series-forecasting-tutorial))
- token (evidence: [https://docs.cloud.google.com/bigquery/docs/information-schema-indexes](https://docs.cloud.google.com/bigquery/docs/information-schema-indexes), [https://docs.cloud.google.com/bigquery/docs/facebook-ads-transformation](https://docs.cloud.google.com/bigquery/docs/facebook-ads-transformation), [https://docs.cloud.google.com/bigquery/docs/timesfm-time-series-forecasting-tutorial](https://docs.cloud.google.com/bigquery/docs/timesfm-time-series-forecasting-tutorial))

## Official Evidence

- [https://docs.cloud.google.com/bigquery/docs/facebook-ads-transformation](https://docs.cloud.google.com/bigquery/docs/facebook-ads-transformation)
- [https://docs.cloud.google.com/bigquery/docs/information-schema-indexes](https://docs.cloud.google.com/bigquery/docs/information-schema-indexes)
- [https://docs.cloud.google.com/bigquery/docs/timesfm-time-series-forecasting-tutorial](https://docs.cloud.google.com/bigquery/docs/timesfm-time-series-forecasting-tutorial)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
