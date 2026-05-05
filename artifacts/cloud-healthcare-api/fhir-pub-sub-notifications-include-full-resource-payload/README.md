# FHIR Pub/Sub notifications include full resource payload

Product: Cloud Healthcare API
Feature slug: `fhir-pub-sub-notifications-include-full-resource-payload`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

FHIR resource modification events can now publish the full FHIR resource content in Pub/Sub notifications.

## Lifecycle

- Latest feature date: 2022-06-01
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/healthcare-api/docs/fhir-pubsub](https://docs.cloud.google.com/healthcare-api/docs/fhir-pubsub), [https://docs.cloud.google.com/healthcare-api/docs/fhir-consent](https://docs.cloud.google.com/healthcare-api/docs/fhir-consent), [https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-resources](https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-resources))
- allow (evidence: [https://docs.cloud.google.com/healthcare-api/docs/fhir-pubsub](https://docs.cloud.google.com/healthcare-api/docs/fhir-pubsub), [https://docs.cloud.google.com/healthcare-api/docs/fhir-consent](https://docs.cloud.google.com/healthcare-api/docs/fhir-consent), [https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-resources](https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-resources))
- auth (evidence: [https://docs.cloud.google.com/healthcare-api/docs/fhir-pubsub](https://docs.cloud.google.com/healthcare-api/docs/fhir-pubsub), [https://docs.cloud.google.com/healthcare-api/docs/fhir-consent](https://docs.cloud.google.com/healthcare-api/docs/fhir-consent), [https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-resources](https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-resources))
- authorization (evidence: [https://docs.cloud.google.com/healthcare-api/docs/fhir-pubsub](https://docs.cloud.google.com/healthcare-api/docs/fhir-pubsub), [https://docs.cloud.google.com/healthcare-api/docs/fhir-consent](https://docs.cloud.google.com/healthcare-api/docs/fhir-consent), [https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-resources](https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-resources))
- iam (evidence: [https://docs.cloud.google.com/healthcare-api/docs/fhir-pubsub](https://docs.cloud.google.com/healthcare-api/docs/fhir-pubsub), [https://docs.cloud.google.com/healthcare-api/docs/fhir-consent](https://docs.cloud.google.com/healthcare-api/docs/fhir-consent), [https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-resources](https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-resources))
- logging (evidence: [https://docs.cloud.google.com/healthcare-api/docs/fhir-pubsub](https://docs.cloud.google.com/healthcare-api/docs/fhir-pubsub), [https://docs.cloud.google.com/healthcare-api/docs/fhir-consent](https://docs.cloud.google.com/healthcare-api/docs/fhir-consent), [https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-resources](https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-resources))
- permission (evidence: [https://docs.cloud.google.com/healthcare-api/docs/fhir-pubsub](https://docs.cloud.google.com/healthcare-api/docs/fhir-pubsub), [https://docs.cloud.google.com/healthcare-api/docs/fhir-consent](https://docs.cloud.google.com/healthcare-api/docs/fhir-consent), [https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-resources](https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-resources))
- policy (evidence: [https://docs.cloud.google.com/healthcare-api/docs/fhir-pubsub](https://docs.cloud.google.com/healthcare-api/docs/fhir-pubsub), [https://docs.cloud.google.com/healthcare-api/docs/fhir-consent](https://docs.cloud.google.com/healthcare-api/docs/fhir-consent), [https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-resources](https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-resources))
- private (evidence: [https://docs.cloud.google.com/healthcare-api/docs/fhir-pubsub](https://docs.cloud.google.com/healthcare-api/docs/fhir-pubsub), [https://docs.cloud.google.com/healthcare-api/docs/fhir-consent](https://docs.cloud.google.com/healthcare-api/docs/fhir-consent), [https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-resources](https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-resources))
- role (evidence: [https://docs.cloud.google.com/healthcare-api/docs/fhir-pubsub](https://docs.cloud.google.com/healthcare-api/docs/fhir-pubsub), [https://docs.cloud.google.com/healthcare-api/docs/fhir-consent](https://docs.cloud.google.com/healthcare-api/docs/fhir-consent), [https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-resources](https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-resources))
- security (evidence: [https://docs.cloud.google.com/healthcare-api/docs/fhir-pubsub](https://docs.cloud.google.com/healthcare-api/docs/fhir-pubsub), [https://docs.cloud.google.com/healthcare-api/docs/fhir-consent](https://docs.cloud.google.com/healthcare-api/docs/fhir-consent), [https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-resources](https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-resources))
- token (evidence: [https://docs.cloud.google.com/healthcare-api/docs/fhir-pubsub](https://docs.cloud.google.com/healthcare-api/docs/fhir-pubsub), [https://docs.cloud.google.com/healthcare-api/docs/fhir-consent](https://docs.cloud.google.com/healthcare-api/docs/fhir-consent), [https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-resources](https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-resources))

## Official Evidence

- [https://docs.cloud.google.com/healthcare-api/docs/fhir-consent](https://docs.cloud.google.com/healthcare-api/docs/fhir-consent)
- [https://docs.cloud.google.com/healthcare-api/docs/fhir-pubsub](https://docs.cloud.google.com/healthcare-api/docs/fhir-pubsub)
- [https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-resources](https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-resources)
