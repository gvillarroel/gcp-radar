# automatic broker scaling and capacity safety checks

Product: Google Cloud Managed Service for Apache Kafka
Feature slug: `automatic-broker-scaling-and-capacity-safety-checks`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

The service automatically creates new brokers based on cluster memory and vCPU settings and checks broker capacity when a cluster size changes.

## Lifecycle

- Latest feature date: 2025-07-15
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/choose-kafka-pubsub](https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/choose-kafka-pubsub), [https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/overview](https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/overview), [https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/limitations](https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/limitations), [https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/brokers](https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/brokers))
- auth (evidence: [https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/choose-kafka-pubsub](https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/choose-kafka-pubsub), [https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/overview](https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/overview), [https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/limitations](https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/limitations), [https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/brokers](https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/brokers))
- identity (evidence: [https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/choose-kafka-pubsub](https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/choose-kafka-pubsub), [https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/overview](https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/overview), [https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/limitations](https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/limitations), [https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/brokers](https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/brokers))
- logging (evidence: [https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/choose-kafka-pubsub](https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/choose-kafka-pubsub), [https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/overview](https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/overview), [https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/limitations](https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/limitations), [https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/brokers](https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/brokers))
- security (evidence: [https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/choose-kafka-pubsub](https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/choose-kafka-pubsub), [https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/overview](https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/overview), [https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/limitations](https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/limitations), [https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/brokers](https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/brokers))

## Official Evidence

- [https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/brokers](https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/brokers)
- [https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/choose-kafka-pubsub](https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/choose-kafka-pubsub)
- [https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/limitations](https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/limitations)
- [https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/overview](https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/overview)
