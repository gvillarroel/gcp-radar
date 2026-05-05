# Cross-project Cloud Pub/Sub topics

Product: Application Integration
Feature slug: `cross-project-cloud-pub-sub-topics`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Cloud Pub/Sub triggers now support cross-project topics, with service account configuration required for new setups and when updating existing trigger topics.

## Lifecycle

- Latest feature date: 2023-12-01
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/application-integration/docs/configure-pubsub-trigger](https://docs.cloud.google.com/application-integration/docs/configure-pubsub-trigger), [https://docs.cloud.google.com/application-integration/docs/build-cicd](https://docs.cloud.google.com/application-integration/docs/build-cicd), [https://docs.cloud.google.com/application-integration/docs/insert-data-bigquery-for-each-parallel-task](https://docs.cloud.google.com/application-integration/docs/insert-data-bigquery-for-each-parallel-task))
- iam (evidence: [https://docs.cloud.google.com/application-integration/docs/configure-pubsub-trigger](https://docs.cloud.google.com/application-integration/docs/configure-pubsub-trigger), [https://docs.cloud.google.com/application-integration/docs/build-cicd](https://docs.cloud.google.com/application-integration/docs/build-cicd), [https://docs.cloud.google.com/application-integration/docs/insert-data-bigquery-for-each-parallel-task](https://docs.cloud.google.com/application-integration/docs/insert-data-bigquery-for-each-parallel-task))
- key (evidence: [https://docs.cloud.google.com/application-integration/docs/configure-pubsub-trigger](https://docs.cloud.google.com/application-integration/docs/configure-pubsub-trigger), [https://docs.cloud.google.com/application-integration/docs/build-cicd](https://docs.cloud.google.com/application-integration/docs/build-cicd), [https://docs.cloud.google.com/application-integration/docs/insert-data-bigquery-for-each-parallel-task](https://docs.cloud.google.com/application-integration/docs/insert-data-bigquery-for-each-parallel-task))
- role (evidence: [https://docs.cloud.google.com/application-integration/docs/configure-pubsub-trigger](https://docs.cloud.google.com/application-integration/docs/configure-pubsub-trigger), [https://docs.cloud.google.com/application-integration/docs/build-cicd](https://docs.cloud.google.com/application-integration/docs/build-cicd), [https://docs.cloud.google.com/application-integration/docs/insert-data-bigquery-for-each-parallel-task](https://docs.cloud.google.com/application-integration/docs/insert-data-bigquery-for-each-parallel-task))
- secret (evidence: [https://docs.cloud.google.com/application-integration/docs/configure-pubsub-trigger](https://docs.cloud.google.com/application-integration/docs/configure-pubsub-trigger), [https://docs.cloud.google.com/application-integration/docs/build-cicd](https://docs.cloud.google.com/application-integration/docs/build-cicd), [https://docs.cloud.google.com/application-integration/docs/insert-data-bigquery-for-each-parallel-task](https://docs.cloud.google.com/application-integration/docs/insert-data-bigquery-for-each-parallel-task))

## Official Evidence

- [https://docs.cloud.google.com/application-integration/docs/build-cicd](https://docs.cloud.google.com/application-integration/docs/build-cicd)
- [https://docs.cloud.google.com/application-integration/docs/configure-pubsub-trigger](https://docs.cloud.google.com/application-integration/docs/configure-pubsub-trigger)
- [https://docs.cloud.google.com/application-integration/docs/insert-data-bigquery-for-each-parallel-task](https://docs.cloud.google.com/application-integration/docs/insert-data-bigquery-for-each-parallel-task)
