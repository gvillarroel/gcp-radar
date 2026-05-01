# max_staleness materialized view option

Product: BigQuery
Feature slug: `max-staleness-materialized-view-option`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

The max_staleness option for materialized views balances query performance and cost for frequently changing datasets; The max_staleness option lets materialized views balance freshness, performance, and cost for large changing datasets.

## Lifecycle

- Latest feature date: 2022-10-31
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- allow
- auth
- credential
- iam
- identity
- permission
- role
- security

## Official Evidence

- [https://docs.cloud.google.com/bigquery/docs/authorized-views](https://docs.cloud.google.com/bigquery/docs/authorized-views)
- [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference)
- [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-materialized-view](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-materialized-view)
