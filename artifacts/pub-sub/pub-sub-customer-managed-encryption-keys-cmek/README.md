# Pub/Sub customer-managed encryption keys (CMEK)

Product: Pub/Sub
Feature slug: `pub-sub-customer-managed-encryption-keys-cmek`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Pub/Sub supports customer-managed encryption keys for encrypting data with Cloud KMS keys; Pub/Sub supports customer-managed encryption keys for encrypting data with Cloud KMS keys.

## Lifecycle

- Latest feature date: 2019-09-05
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- encrypt (evidence: [https://docs.cloud.google.com/pubsub/docs/create-topic](https://docs.cloud.google.com/pubsub/docs/create-topic), [https://docs.cloud.google.com/pubsub/docs/choose-pubsub-kafka](https://docs.cloud.google.com/pubsub/docs/choose-pubsub-kafka), [https://docs.cloud.google.com/pubsub/docs/topic-properties](https://docs.cloud.google.com/pubsub/docs/topic-properties), [https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/create_subscription](https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/create_subscription))
- key (evidence: [https://docs.cloud.google.com/pubsub/docs/create-topic](https://docs.cloud.google.com/pubsub/docs/create-topic), [https://docs.cloud.google.com/pubsub/docs/choose-pubsub-kafka](https://docs.cloud.google.com/pubsub/docs/choose-pubsub-kafka), [https://docs.cloud.google.com/pubsub/docs/topic-properties](https://docs.cloud.google.com/pubsub/docs/topic-properties), [https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/create_subscription](https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/create_subscription))
- kms (evidence: [https://docs.cloud.google.com/pubsub/docs/create-topic](https://docs.cloud.google.com/pubsub/docs/create-topic), [https://docs.cloud.google.com/pubsub/docs/choose-pubsub-kafka](https://docs.cloud.google.com/pubsub/docs/choose-pubsub-kafka), [https://docs.cloud.google.com/pubsub/docs/topic-properties](https://docs.cloud.google.com/pubsub/docs/topic-properties), [https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/create_subscription](https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/create_subscription))

## Official Evidence

- [https://docs.cloud.google.com/pubsub/docs/choose-pubsub-kafka](https://docs.cloud.google.com/pubsub/docs/choose-pubsub-kafka)
- [https://docs.cloud.google.com/pubsub/docs/create-topic](https://docs.cloud.google.com/pubsub/docs/create-topic)
- [https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/create_subscription](https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/create_subscription)
- [https://docs.cloud.google.com/pubsub/docs/topic-properties](https://docs.cloud.google.com/pubsub/docs/topic-properties)
