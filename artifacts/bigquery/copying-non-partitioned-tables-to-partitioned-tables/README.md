# Copying non-partitioned tables to partitioned tables

Product: BigQuery
Feature slug: `copying-non-partitioned-tables-to-partitioned-tables`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

BigQuery supports copying data from non-partitioned tables into partitioned tables.

## Lifecycle

- Latest feature date: 2017-02-01
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- auth (evidence: [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-load-data-from-bigquery-job](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-load-data-from-bigquery-job), [https://docs.cloud.google.com/bigquery/docs/hadoop-metadata](https://docs.cloud.google.com/bigquery/docs/hadoop-metadata), [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataset-exists](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataset-exists))
- permission (evidence: [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-load-data-from-bigquery-job](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-load-data-from-bigquery-job), [https://docs.cloud.google.com/bigquery/docs/hadoop-metadata](https://docs.cloud.google.com/bigquery/docs/hadoop-metadata), [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataset-exists](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataset-exists))

## Official Evidence

- [https://docs.cloud.google.com/bigquery/docs/hadoop-metadata](https://docs.cloud.google.com/bigquery/docs/hadoop-metadata)
- [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-load-data-from-bigquery-job](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-load-data-from-bigquery-job)
- [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataset-exists](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataset-exists)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
- `warn:generic_supporting_pages` Supporting pages do not mention any informative feature tokens.
