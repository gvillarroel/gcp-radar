# Pub/Sub publish timestamp field

Product: Pub/Sub
Feature slug: `pub-sub-publish-timestamp-field`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Pulled messages include the original publish timestamp.

## Lifecycle

- Latest feature date: 2015-11-01
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/pubsub/docs/publish-receive-messages-console](https://docs.cloud.google.com/pubsub/docs/publish-receive-messages-console), [https://docs.cloud.google.com/pubsub/docs/publisher](https://docs.cloud.google.com/pubsub/docs/publisher), [https://docs.cloud.google.com/pubsub/docs/publish-receive-messages-client-library](https://docs.cloud.google.com/pubsub/docs/publish-receive-messages-client-library), [https://docs.cloud.google.com/pubsub/docs/create-bigquery-subscription](https://docs.cloud.google.com/pubsub/docs/create-bigquery-subscription))
- auth (evidence: [https://docs.cloud.google.com/pubsub/docs/publish-receive-messages-console](https://docs.cloud.google.com/pubsub/docs/publish-receive-messages-console), [https://docs.cloud.google.com/pubsub/docs/publisher](https://docs.cloud.google.com/pubsub/docs/publisher), [https://docs.cloud.google.com/pubsub/docs/publish-receive-messages-client-library](https://docs.cloud.google.com/pubsub/docs/publish-receive-messages-client-library), [https://docs.cloud.google.com/pubsub/docs/create-bigquery-subscription](https://docs.cloud.google.com/pubsub/docs/create-bigquery-subscription))
- authorization (evidence: [https://docs.cloud.google.com/pubsub/docs/publish-receive-messages-console](https://docs.cloud.google.com/pubsub/docs/publish-receive-messages-console), [https://docs.cloud.google.com/pubsub/docs/publisher](https://docs.cloud.google.com/pubsub/docs/publisher), [https://docs.cloud.google.com/pubsub/docs/publish-receive-messages-client-library](https://docs.cloud.google.com/pubsub/docs/publish-receive-messages-client-library), [https://docs.cloud.google.com/pubsub/docs/create-bigquery-subscription](https://docs.cloud.google.com/pubsub/docs/create-bigquery-subscription))
- key (evidence: [https://docs.cloud.google.com/pubsub/docs/publish-receive-messages-console](https://docs.cloud.google.com/pubsub/docs/publish-receive-messages-console), [https://docs.cloud.google.com/pubsub/docs/publisher](https://docs.cloud.google.com/pubsub/docs/publisher), [https://docs.cloud.google.com/pubsub/docs/publish-receive-messages-client-library](https://docs.cloud.google.com/pubsub/docs/publish-receive-messages-client-library), [https://docs.cloud.google.com/pubsub/docs/create-bigquery-subscription](https://docs.cloud.google.com/pubsub/docs/create-bigquery-subscription))
- token (evidence: [https://docs.cloud.google.com/pubsub/docs/publish-receive-messages-console](https://docs.cloud.google.com/pubsub/docs/publish-receive-messages-console), [https://docs.cloud.google.com/pubsub/docs/publisher](https://docs.cloud.google.com/pubsub/docs/publisher), [https://docs.cloud.google.com/pubsub/docs/publish-receive-messages-client-library](https://docs.cloud.google.com/pubsub/docs/publish-receive-messages-client-library), [https://docs.cloud.google.com/pubsub/docs/create-bigquery-subscription](https://docs.cloud.google.com/pubsub/docs/create-bigquery-subscription))

## Official Evidence

- [https://docs.cloud.google.com/pubsub/docs/create-bigquery-subscription](https://docs.cloud.google.com/pubsub/docs/create-bigquery-subscription)
- [https://docs.cloud.google.com/pubsub/docs/publish-receive-messages-client-library](https://docs.cloud.google.com/pubsub/docs/publish-receive-messages-client-library)
- [https://docs.cloud.google.com/pubsub/docs/publish-receive-messages-console](https://docs.cloud.google.com/pubsub/docs/publish-receive-messages-console)
- [https://docs.cloud.google.com/pubsub/docs/publisher](https://docs.cloud.google.com/pubsub/docs/publisher)
