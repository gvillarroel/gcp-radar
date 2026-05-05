# Pub/Sub Lite topic partition increases

Product: Pub/Sub
Feature slug: `pub-sub-lite-topic-partition-increases`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Pub/Sub Lite topics can have their partition count increased.

## Lifecycle

- Latest feature date: 2021-03-22
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/pubsub/docs/create-aws-kinesis-import-topic](https://docs.cloud.google.com/pubsub/docs/create-aws-kinesis-import-topic), [https://docs.cloud.google.com/pubsub/docs/change-topic-type](https://docs.cloud.google.com/pubsub/docs/change-topic-type), [https://docs.cloud.google.com/pubsub/docs/choose-pubsub-kafka](https://docs.cloud.google.com/pubsub/docs/choose-pubsub-kafka), [https://docs.cloud.google.com/pubsub/docs/publisher](https://docs.cloud.google.com/pubsub/docs/publisher))
- auth (evidence: [https://docs.cloud.google.com/pubsub/docs/create-aws-kinesis-import-topic](https://docs.cloud.google.com/pubsub/docs/create-aws-kinesis-import-topic), [https://docs.cloud.google.com/pubsub/docs/change-topic-type](https://docs.cloud.google.com/pubsub/docs/change-topic-type), [https://docs.cloud.google.com/pubsub/docs/choose-pubsub-kafka](https://docs.cloud.google.com/pubsub/docs/choose-pubsub-kafka), [https://docs.cloud.google.com/pubsub/docs/publisher](https://docs.cloud.google.com/pubsub/docs/publisher))
- authorization (evidence: [https://docs.cloud.google.com/pubsub/docs/create-aws-kinesis-import-topic](https://docs.cloud.google.com/pubsub/docs/create-aws-kinesis-import-topic), [https://docs.cloud.google.com/pubsub/docs/change-topic-type](https://docs.cloud.google.com/pubsub/docs/change-topic-type), [https://docs.cloud.google.com/pubsub/docs/choose-pubsub-kafka](https://docs.cloud.google.com/pubsub/docs/choose-pubsub-kafka), [https://docs.cloud.google.com/pubsub/docs/publisher](https://docs.cloud.google.com/pubsub/docs/publisher))
- iam (evidence: [https://docs.cloud.google.com/pubsub/docs/create-aws-kinesis-import-topic](https://docs.cloud.google.com/pubsub/docs/create-aws-kinesis-import-topic), [https://docs.cloud.google.com/pubsub/docs/change-topic-type](https://docs.cloud.google.com/pubsub/docs/change-topic-type), [https://docs.cloud.google.com/pubsub/docs/choose-pubsub-kafka](https://docs.cloud.google.com/pubsub/docs/choose-pubsub-kafka), [https://docs.cloud.google.com/pubsub/docs/publisher](https://docs.cloud.google.com/pubsub/docs/publisher))
- identity (evidence: [https://docs.cloud.google.com/pubsub/docs/create-aws-kinesis-import-topic](https://docs.cloud.google.com/pubsub/docs/create-aws-kinesis-import-topic), [https://docs.cloud.google.com/pubsub/docs/change-topic-type](https://docs.cloud.google.com/pubsub/docs/change-topic-type), [https://docs.cloud.google.com/pubsub/docs/choose-pubsub-kafka](https://docs.cloud.google.com/pubsub/docs/choose-pubsub-kafka), [https://docs.cloud.google.com/pubsub/docs/publisher](https://docs.cloud.google.com/pubsub/docs/publisher))
- key (evidence: [https://docs.cloud.google.com/pubsub/docs/create-aws-kinesis-import-topic](https://docs.cloud.google.com/pubsub/docs/create-aws-kinesis-import-topic), [https://docs.cloud.google.com/pubsub/docs/change-topic-type](https://docs.cloud.google.com/pubsub/docs/change-topic-type), [https://docs.cloud.google.com/pubsub/docs/choose-pubsub-kafka](https://docs.cloud.google.com/pubsub/docs/choose-pubsub-kafka), [https://docs.cloud.google.com/pubsub/docs/publisher](https://docs.cloud.google.com/pubsub/docs/publisher))
- logging (evidence: [https://docs.cloud.google.com/pubsub/docs/create-aws-kinesis-import-topic](https://docs.cloud.google.com/pubsub/docs/create-aws-kinesis-import-topic), [https://docs.cloud.google.com/pubsub/docs/change-topic-type](https://docs.cloud.google.com/pubsub/docs/change-topic-type), [https://docs.cloud.google.com/pubsub/docs/choose-pubsub-kafka](https://docs.cloud.google.com/pubsub/docs/choose-pubsub-kafka), [https://docs.cloud.google.com/pubsub/docs/publisher](https://docs.cloud.google.com/pubsub/docs/publisher))
- permission (evidence: [https://docs.cloud.google.com/pubsub/docs/create-aws-kinesis-import-topic](https://docs.cloud.google.com/pubsub/docs/create-aws-kinesis-import-topic), [https://docs.cloud.google.com/pubsub/docs/change-topic-type](https://docs.cloud.google.com/pubsub/docs/change-topic-type), [https://docs.cloud.google.com/pubsub/docs/choose-pubsub-kafka](https://docs.cloud.google.com/pubsub/docs/choose-pubsub-kafka), [https://docs.cloud.google.com/pubsub/docs/publisher](https://docs.cloud.google.com/pubsub/docs/publisher))
- policy (evidence: [https://docs.cloud.google.com/pubsub/docs/create-aws-kinesis-import-topic](https://docs.cloud.google.com/pubsub/docs/create-aws-kinesis-import-topic), [https://docs.cloud.google.com/pubsub/docs/change-topic-type](https://docs.cloud.google.com/pubsub/docs/change-topic-type), [https://docs.cloud.google.com/pubsub/docs/choose-pubsub-kafka](https://docs.cloud.google.com/pubsub/docs/choose-pubsub-kafka), [https://docs.cloud.google.com/pubsub/docs/publisher](https://docs.cloud.google.com/pubsub/docs/publisher))
- role (evidence: [https://docs.cloud.google.com/pubsub/docs/create-aws-kinesis-import-topic](https://docs.cloud.google.com/pubsub/docs/create-aws-kinesis-import-topic), [https://docs.cloud.google.com/pubsub/docs/change-topic-type](https://docs.cloud.google.com/pubsub/docs/change-topic-type), [https://docs.cloud.google.com/pubsub/docs/choose-pubsub-kafka](https://docs.cloud.google.com/pubsub/docs/choose-pubsub-kafka), [https://docs.cloud.google.com/pubsub/docs/publisher](https://docs.cloud.google.com/pubsub/docs/publisher))
- security (evidence: [https://docs.cloud.google.com/pubsub/docs/create-aws-kinesis-import-topic](https://docs.cloud.google.com/pubsub/docs/create-aws-kinesis-import-topic), [https://docs.cloud.google.com/pubsub/docs/change-topic-type](https://docs.cloud.google.com/pubsub/docs/change-topic-type), [https://docs.cloud.google.com/pubsub/docs/choose-pubsub-kafka](https://docs.cloud.google.com/pubsub/docs/choose-pubsub-kafka), [https://docs.cloud.google.com/pubsub/docs/publisher](https://docs.cloud.google.com/pubsub/docs/publisher))
- token (evidence: [https://docs.cloud.google.com/pubsub/docs/create-aws-kinesis-import-topic](https://docs.cloud.google.com/pubsub/docs/create-aws-kinesis-import-topic), [https://docs.cloud.google.com/pubsub/docs/change-topic-type](https://docs.cloud.google.com/pubsub/docs/change-topic-type), [https://docs.cloud.google.com/pubsub/docs/choose-pubsub-kafka](https://docs.cloud.google.com/pubsub/docs/choose-pubsub-kafka), [https://docs.cloud.google.com/pubsub/docs/publisher](https://docs.cloud.google.com/pubsub/docs/publisher))

## Official Evidence

- [https://docs.cloud.google.com/pubsub/docs/change-topic-type](https://docs.cloud.google.com/pubsub/docs/change-topic-type)
- [https://docs.cloud.google.com/pubsub/docs/choose-pubsub-kafka](https://docs.cloud.google.com/pubsub/docs/choose-pubsub-kafka)
- [https://docs.cloud.google.com/pubsub/docs/create-aws-kinesis-import-topic](https://docs.cloud.google.com/pubsub/docs/create-aws-kinesis-import-topic)
- [https://docs.cloud.google.com/pubsub/docs/publisher](https://docs.cloud.google.com/pubsub/docs/publisher)
