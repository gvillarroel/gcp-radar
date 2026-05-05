# Pub/Sub ordering key publishing

Product: Application Integration
Feature slug: `pub-sub-ordering-key-publishing`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Application Integration can publish to Google Cloud Pub/Sub topics using ordering keys to preserve FIFO message order for message processing.

## Lifecycle

- Latest feature date: 2026-02-02
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- key (evidence: [https://docs.cloud.google.com/application-integration/docs/configure-pubsub-trigger](https://docs.cloud.google.com/application-integration/docs/configure-pubsub-trigger), [https://docs.cloud.google.com/application-integration/docs/invoke-sub-int-for-each-loop](https://docs.cloud.google.com/application-integration/docs/invoke-sub-int-for-each-loop), [https://docs.cloud.google.com/application-integration/docs/insert-data-bigquery-for-each-parallel-task](https://docs.cloud.google.com/application-integration/docs/insert-data-bigquery-for-each-parallel-task))
- security (evidence: [https://docs.cloud.google.com/application-integration/docs/configure-pubsub-trigger](https://docs.cloud.google.com/application-integration/docs/configure-pubsub-trigger), [https://docs.cloud.google.com/application-integration/docs/invoke-sub-int-for-each-loop](https://docs.cloud.google.com/application-integration/docs/invoke-sub-int-for-each-loop), [https://docs.cloud.google.com/application-integration/docs/insert-data-bigquery-for-each-parallel-task](https://docs.cloud.google.com/application-integration/docs/insert-data-bigquery-for-each-parallel-task))

## Official Evidence

- [https://docs.cloud.google.com/application-integration/docs/configure-pubsub-trigger](https://docs.cloud.google.com/application-integration/docs/configure-pubsub-trigger)
- [https://docs.cloud.google.com/application-integration/docs/insert-data-bigquery-for-each-parallel-task](https://docs.cloud.google.com/application-integration/docs/insert-data-bigquery-for-each-parallel-task)
- [https://docs.cloud.google.com/application-integration/docs/invoke-sub-int-for-each-loop](https://docs.cloud.google.com/application-integration/docs/invoke-sub-int-for-each-loop)
