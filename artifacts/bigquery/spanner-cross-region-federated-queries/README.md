# Spanner cross-region federated queries

Product: BigQuery
Feature slug: `spanner-cross-region-federated-queries`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

BigQuery supports cross-region federated queries against Spanner tables outside the source BigQuery region.

## Lifecycle

- Latest feature date: 2025-08-14
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- auth (evidence: [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-copy-table-multiple-source](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-copy-table-multiple-source), [https://docs.cloud.google.com/bigquery/docs/continuous-queries-introduction](https://docs.cloud.google.com/bigquery/docs/continuous-queries-introduction), [https://docs.cloud.google.com/bigquery/docs/continuous-queries](https://docs.cloud.google.com/bigquery/docs/continuous-queries))

## Official Evidence

- [https://docs.cloud.google.com/bigquery/docs/continuous-queries](https://docs.cloud.google.com/bigquery/docs/continuous-queries)
- [https://docs.cloud.google.com/bigquery/docs/continuous-queries-introduction](https://docs.cloud.google.com/bigquery/docs/continuous-queries-introduction)
- [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-copy-table-multiple-source](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-copy-table-multiple-source)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
