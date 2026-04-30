# BigQuery subscriptions

Product: Pub/Sub
Feature slug: `bigquery-subscriptions`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

BigQuery subscriptions can map Pub/Sub string fields to TIMESTAMP, DATETIME, DATE, or TIME columns in BigQuery; Pub/Sub can create BigQuery subscriptions that write messages directly to an existing BigQuery table.

## Lifecycle

- Latest feature date: 2022-09-14
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- auth
- key
- token

## Official Evidence

- [https://docs.cloud.google.com/pubsub/docs/bigquery](https://docs.cloud.google.com/pubsub/docs/bigquery)
- [https://docs.cloud.google.com/pubsub/docs/create-bigquery-subscription](https://docs.cloud.google.com/pubsub/docs/create-bigquery-subscription)
- [https://docs.cloud.google.com/pubsub/docs/create-cloudstorage-subscription](https://docs.cloud.google.com/pubsub/docs/create-cloudstorage-subscription)
- [https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/list_subscriptions](https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/list_subscriptions)
