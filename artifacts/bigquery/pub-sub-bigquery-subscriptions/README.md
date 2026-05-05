# Pub/Sub BigQuery subscriptions

Product: BigQuery
Feature slug: `pub-sub-bigquery-subscriptions`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Pub/Sub BigQuery subscriptions can write messages directly to an existing BigQuery table.

## Lifecycle

- Latest feature date: 2022-07-28
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/bigquery/docs/analytics-hub-stream-sharing](https://docs.cloud.google.com/bigquery/docs/analytics-hub-stream-sharing), [https://docs.cloud.google.com/bigquery/docs/analytics-hub-manage-subscriptions](https://docs.cloud.google.com/bigquery/docs/analytics-hub-manage-subscriptions), [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference))
- allow (evidence: [https://docs.cloud.google.com/bigquery/docs/analytics-hub-stream-sharing](https://docs.cloud.google.com/bigquery/docs/analytics-hub-stream-sharing), [https://docs.cloud.google.com/bigquery/docs/analytics-hub-manage-subscriptions](https://docs.cloud.google.com/bigquery/docs/analytics-hub-manage-subscriptions), [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference))
- credential (evidence: [https://docs.cloud.google.com/bigquery/docs/analytics-hub-stream-sharing](https://docs.cloud.google.com/bigquery/docs/analytics-hub-stream-sharing), [https://docs.cloud.google.com/bigquery/docs/analytics-hub-manage-subscriptions](https://docs.cloud.google.com/bigquery/docs/analytics-hub-manage-subscriptions), [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference))
- iam (evidence: [https://docs.cloud.google.com/bigquery/docs/analytics-hub-stream-sharing](https://docs.cloud.google.com/bigquery/docs/analytics-hub-stream-sharing), [https://docs.cloud.google.com/bigquery/docs/analytics-hub-manage-subscriptions](https://docs.cloud.google.com/bigquery/docs/analytics-hub-manage-subscriptions), [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference))
- permission (evidence: [https://docs.cloud.google.com/bigquery/docs/analytics-hub-stream-sharing](https://docs.cloud.google.com/bigquery/docs/analytics-hub-stream-sharing), [https://docs.cloud.google.com/bigquery/docs/analytics-hub-manage-subscriptions](https://docs.cloud.google.com/bigquery/docs/analytics-hub-manage-subscriptions), [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference))
- role (evidence: [https://docs.cloud.google.com/bigquery/docs/analytics-hub-stream-sharing](https://docs.cloud.google.com/bigquery/docs/analytics-hub-stream-sharing), [https://docs.cloud.google.com/bigquery/docs/analytics-hub-manage-subscriptions](https://docs.cloud.google.com/bigquery/docs/analytics-hub-manage-subscriptions), [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference))

## Official Evidence

- [https://docs.cloud.google.com/bigquery/docs/analytics-hub-manage-subscriptions](https://docs.cloud.google.com/bigquery/docs/analytics-hub-manage-subscriptions)
- [https://docs.cloud.google.com/bigquery/docs/analytics-hub-stream-sharing](https://docs.cloud.google.com/bigquery/docs/analytics-hub-stream-sharing)
- [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference)
