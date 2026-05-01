# Default Pub/Sub service account IAM grant

Product: Eventarc
Feature slug: `default-pub-sub-service-account-iam-grant`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Eventarc grants roles/iam.serviceAccountTokenCreator to the Pub/Sub service account by default.

## Lifecycle

- Latest feature date: 2021-04-09
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- auth
- constraint
- encrypt
- iam
- key
- logging
- permission
- policy
- role
- token

## Official Evidence

- [https://docs.cloud.google.com/eventarc/standard/docs/gke/quickstart-pubsub](https://docs.cloud.google.com/eventarc/standard/docs/gke/quickstart-pubsub)
- [https://docs.cloud.google.com/eventarc/standard/docs/workflows/quickstart-pubsub](https://docs.cloud.google.com/eventarc/standard/docs/workflows/quickstart-pubsub)
- [https://docs.cloud.google.com/python/docs/reference/eventarc/latest/google.cloud.eventarc_v1.services.eventarc.EventarcAsyncClient](https://docs.cloud.google.com/python/docs/reference/eventarc/latest/google.cloud.eventarc_v1.services.eventarc.EventarcAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/eventarc/latest/google.cloud.eventarc_v1.services.eventarc.EventarcClient](https://docs.cloud.google.com/python/docs/reference/eventarc/latest/google.cloud.eventarc_v1.services.eventarc.EventarcClient)
