# Pub/Sub gcloud commands

Product: Pub/Sub
Feature slug: `pub-sub-gcloud-commands`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Pub/Sub gcloud commands reached general availability and no longer require the beta label.

## Lifecycle

- Latest feature date: 2018-01-24
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/pubsub/docs/publish-receive-messages-gcloud](https://docs.cloud.google.com/pubsub/docs/publish-receive-messages-gcloud), [https://docs.cloud.google.com/pubsub/docs/publish-receive-messages-client-library](https://docs.cloud.google.com/pubsub/docs/publish-receive-messages-client-library), [https://docs.cloud.google.com/pubsub/docs/create-topic-client-libraries](https://docs.cloud.google.com/pubsub/docs/create-topic-client-libraries), [https://docs.cloud.google.com/pubsub/docs/resource-location-restriction](https://docs.cloud.google.com/pubsub/docs/resource-location-restriction))
- allow (evidence: [https://docs.cloud.google.com/pubsub/docs/publish-receive-messages-gcloud](https://docs.cloud.google.com/pubsub/docs/publish-receive-messages-gcloud), [https://docs.cloud.google.com/pubsub/docs/publish-receive-messages-client-library](https://docs.cloud.google.com/pubsub/docs/publish-receive-messages-client-library), [https://docs.cloud.google.com/pubsub/docs/create-topic-client-libraries](https://docs.cloud.google.com/pubsub/docs/create-topic-client-libraries), [https://docs.cloud.google.com/pubsub/docs/resource-location-restriction](https://docs.cloud.google.com/pubsub/docs/resource-location-restriction))
- auth (evidence: [https://docs.cloud.google.com/pubsub/docs/publish-receive-messages-gcloud](https://docs.cloud.google.com/pubsub/docs/publish-receive-messages-gcloud), [https://docs.cloud.google.com/pubsub/docs/publish-receive-messages-client-library](https://docs.cloud.google.com/pubsub/docs/publish-receive-messages-client-library), [https://docs.cloud.google.com/pubsub/docs/create-topic-client-libraries](https://docs.cloud.google.com/pubsub/docs/create-topic-client-libraries), [https://docs.cloud.google.com/pubsub/docs/resource-location-restriction](https://docs.cloud.google.com/pubsub/docs/resource-location-restriction))
- credential (evidence: [https://docs.cloud.google.com/pubsub/docs/publish-receive-messages-gcloud](https://docs.cloud.google.com/pubsub/docs/publish-receive-messages-gcloud), [https://docs.cloud.google.com/pubsub/docs/publish-receive-messages-client-library](https://docs.cloud.google.com/pubsub/docs/publish-receive-messages-client-library), [https://docs.cloud.google.com/pubsub/docs/create-topic-client-libraries](https://docs.cloud.google.com/pubsub/docs/create-topic-client-libraries), [https://docs.cloud.google.com/pubsub/docs/resource-location-restriction](https://docs.cloud.google.com/pubsub/docs/resource-location-restriction))
- iam (evidence: [https://docs.cloud.google.com/pubsub/docs/publish-receive-messages-gcloud](https://docs.cloud.google.com/pubsub/docs/publish-receive-messages-gcloud), [https://docs.cloud.google.com/pubsub/docs/publish-receive-messages-client-library](https://docs.cloud.google.com/pubsub/docs/publish-receive-messages-client-library), [https://docs.cloud.google.com/pubsub/docs/create-topic-client-libraries](https://docs.cloud.google.com/pubsub/docs/create-topic-client-libraries), [https://docs.cloud.google.com/pubsub/docs/resource-location-restriction](https://docs.cloud.google.com/pubsub/docs/resource-location-restriction))
- identity (evidence: [https://docs.cloud.google.com/pubsub/docs/publish-receive-messages-gcloud](https://docs.cloud.google.com/pubsub/docs/publish-receive-messages-gcloud), [https://docs.cloud.google.com/pubsub/docs/publish-receive-messages-client-library](https://docs.cloud.google.com/pubsub/docs/publish-receive-messages-client-library), [https://docs.cloud.google.com/pubsub/docs/create-topic-client-libraries](https://docs.cloud.google.com/pubsub/docs/create-topic-client-libraries), [https://docs.cloud.google.com/pubsub/docs/resource-location-restriction](https://docs.cloud.google.com/pubsub/docs/resource-location-restriction))
- permission (evidence: [https://docs.cloud.google.com/pubsub/docs/publish-receive-messages-gcloud](https://docs.cloud.google.com/pubsub/docs/publish-receive-messages-gcloud), [https://docs.cloud.google.com/pubsub/docs/publish-receive-messages-client-library](https://docs.cloud.google.com/pubsub/docs/publish-receive-messages-client-library), [https://docs.cloud.google.com/pubsub/docs/create-topic-client-libraries](https://docs.cloud.google.com/pubsub/docs/create-topic-client-libraries), [https://docs.cloud.google.com/pubsub/docs/resource-location-restriction](https://docs.cloud.google.com/pubsub/docs/resource-location-restriction))
- policy (evidence: [https://docs.cloud.google.com/pubsub/docs/publish-receive-messages-gcloud](https://docs.cloud.google.com/pubsub/docs/publish-receive-messages-gcloud), [https://docs.cloud.google.com/pubsub/docs/publish-receive-messages-client-library](https://docs.cloud.google.com/pubsub/docs/publish-receive-messages-client-library), [https://docs.cloud.google.com/pubsub/docs/create-topic-client-libraries](https://docs.cloud.google.com/pubsub/docs/create-topic-client-libraries), [https://docs.cloud.google.com/pubsub/docs/resource-location-restriction](https://docs.cloud.google.com/pubsub/docs/resource-location-restriction))
- role (evidence: [https://docs.cloud.google.com/pubsub/docs/publish-receive-messages-gcloud](https://docs.cloud.google.com/pubsub/docs/publish-receive-messages-gcloud), [https://docs.cloud.google.com/pubsub/docs/publish-receive-messages-client-library](https://docs.cloud.google.com/pubsub/docs/publish-receive-messages-client-library), [https://docs.cloud.google.com/pubsub/docs/create-topic-client-libraries](https://docs.cloud.google.com/pubsub/docs/create-topic-client-libraries), [https://docs.cloud.google.com/pubsub/docs/resource-location-restriction](https://docs.cloud.google.com/pubsub/docs/resource-location-restriction))

## Official Evidence

- [https://docs.cloud.google.com/pubsub/docs/create-topic-client-libraries](https://docs.cloud.google.com/pubsub/docs/create-topic-client-libraries)
- [https://docs.cloud.google.com/pubsub/docs/publish-receive-messages-client-library](https://docs.cloud.google.com/pubsub/docs/publish-receive-messages-client-library)
- [https://docs.cloud.google.com/pubsub/docs/publish-receive-messages-gcloud](https://docs.cloud.google.com/pubsub/docs/publish-receive-messages-gcloud)
- [https://docs.cloud.google.com/pubsub/docs/resource-location-restriction](https://docs.cloud.google.com/pubsub/docs/resource-location-restriction)
