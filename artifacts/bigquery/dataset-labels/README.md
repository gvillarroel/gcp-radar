# Dataset labels

Product: BigQuery
Feature slug: `dataset-labels`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

BigQuery supports labeling datasets through the API and command-line tool.

## Lifecycle

- Latest feature date: 2016-07-27
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- allow (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/migration/rest](https://docs.cloud.google.com/bigquery/docs/reference/migration/rest), [https://docs.cloud.google.com/bigquery/docs/reference/reservations/rest](https://docs.cloud.google.com/bigquery/docs/reference/reservations/rest), [https://docs.cloud.google.com/bigquery/docs/reference/reservations/rpc](https://docs.cloud.google.com/bigquery/docs/reference/reservations/rpc))

## Official Evidence

- [https://docs.cloud.google.com/bigquery/docs/reference/migration/rest](https://docs.cloud.google.com/bigquery/docs/reference/migration/rest)
- [https://docs.cloud.google.com/bigquery/docs/reference/reservations/rest](https://docs.cloud.google.com/bigquery/docs/reference/reservations/rest)
- [https://docs.cloud.google.com/bigquery/docs/reference/reservations/rpc](https://docs.cloud.google.com/bigquery/docs/reference/reservations/rpc)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
- `warn:thin_token_overlap` Supporting pages only weakly overlap with informative feature tokens.
