# Cloud Storage subscriptions Avro schema from topic schema

Product: Pub/Sub
Feature slug: `cloud-storage-subscriptions-avro-schema-from-topic-schema`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Cloud Storage subscriptions can use the schema of the attached Pub/Sub topic when writing Avro files.

## Lifecycle

- Latest feature date: 2024-08-20
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- auth (evidence: [https://docs.cloud.google.com/pubsub/docs/create-cloudstorage-subscription](https://docs.cloud.google.com/pubsub/docs/create-cloudstorage-subscription), [https://docs.cloud.google.com/pubsub/docs/create-cloud-storage-import-topic](https://docs.cloud.google.com/pubsub/docs/create-cloud-storage-import-topic), [https://docs.cloud.google.com/pubsub/docs/bigquery](https://docs.cloud.google.com/pubsub/docs/bigquery), [https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/list_subscriptions](https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/list_subscriptions))

## Official Evidence

- [https://docs.cloud.google.com/pubsub/docs/bigquery](https://docs.cloud.google.com/pubsub/docs/bigquery)
- [https://docs.cloud.google.com/pubsub/docs/create-cloud-storage-import-topic](https://docs.cloud.google.com/pubsub/docs/create-cloud-storage-import-topic)
- [https://docs.cloud.google.com/pubsub/docs/create-cloudstorage-subscription](https://docs.cloud.google.com/pubsub/docs/create-cloudstorage-subscription)
- [https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/list_subscriptions](https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/list_subscriptions)
