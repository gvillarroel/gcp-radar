# ALTER COLUMN DROP NOT NULL

Product: BigQuery
Feature slug: `alter-column-drop-not-null`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

BigQuery supports dropping a NOT NULL constraint from a column with ALTER COLUMN.

## Lifecycle

- Latest feature date: 2021-04-30
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- auth (evidence: [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-load-data-from-bigquery](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-load-data-from-bigquery), [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-load-data-from-bigquery-job](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-load-data-from-bigquery-job), [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-load-data-from-csv](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-load-data-from-csv))
- constraint (evidence: [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-load-data-from-bigquery](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-load-data-from-bigquery), [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-load-data-from-bigquery-job](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-load-data-from-bigquery-job), [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-load-data-from-csv](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-load-data-from-csv))

## Official Evidence

- [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-load-data-from-bigquery](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-load-data-from-bigquery)
- [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-load-data-from-bigquery-job](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-load-data-from-bigquery-job)
- [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-load-data-from-csv](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-load-data-from-csv)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
- `warn:thin_token_overlap` Supporting pages only weakly overlap with informative feature tokens.
