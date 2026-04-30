# JSON array extraction functions

Product: BigQuery
Feature slug: `json-array-extraction-functions`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

BigQuery supports JSON_EXTRACT_STRING_ARRAY, JSON_QUERY_ARRAY, and JSON_VALUE_ARRAY for extracting arrays from JSON values.

## Lifecycle

- Latest feature date: 2021-03-31
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- auth
- key

## Official Evidence

- [https://docs.cloud.google.com/bigquery/docs/doubleclick-campaign-transformation](https://docs.cloud.google.com/bigquery/docs/doubleclick-campaign-transformation)
- [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-load-data-from-bigquery-job](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-load-data-from-bigquery-job)
- [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-pandas-methods](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-pandas-methods)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
- `warn:missing_exact_identifier_page` No supporting page directly names the exact identifier(s): JSON_EXTRACT_STRING_ARRAY, JSON_QUERY_ARRAY, JSON_VALUE_ARRAY.
