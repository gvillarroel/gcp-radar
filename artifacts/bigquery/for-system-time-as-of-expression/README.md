# FOR SYSTEM_TIME AS OF expression

Product: BigQuery
Feature slug: `for-system-time-as-of-expression`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

BigQuery supports the FOR SYSTEM_TIME AS OF expression in the FROM clause.

## Lifecycle

- Latest feature date: 2017-11-02
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- auth

## Official Evidence

- [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-load-data-from-bigquery](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-load-data-from-bigquery)
- [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-load-data-from-bigquery-job](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-load-data-from-bigquery-job)
- [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-load-data-from-csv](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-load-data-from-csv)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
- `warn:missing_exact_identifier_page` No supporting page directly names the exact identifier(s): SYSTEM_TIME.
- `warn:generic_supporting_pages` Supporting pages do not mention any informative feature tokens.
