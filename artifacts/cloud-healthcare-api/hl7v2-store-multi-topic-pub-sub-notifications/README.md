# HL7v2 store multi-topic Pub/Sub notifications

Product: Cloud Healthcare API
Feature slug: `hl7v2-store-multi-topic-pub-sub-notifications`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

HL7v2 stores can now be configured with multiple Pub/Sub topics and message filters to route notifications to different topics.

## Lifecycle

- Latest feature date: 2020-04-07
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/healthcare-api/docs/how-tos/mllp-adapter](https://docs.cloud.google.com/healthcare-api/docs/how-tos/mllp-adapter), [https://docs.cloud.google.com/healthcare-api/docs/dicom-pubsub](https://docs.cloud.google.com/healthcare-api/docs/dicom-pubsub), [https://docs.cloud.google.com/healthcare-api/docs/how-tos/dicom](https://docs.cloud.google.com/healthcare-api/docs/how-tos/dicom))
- auth (evidence: [https://docs.cloud.google.com/healthcare-api/docs/how-tos/mllp-adapter](https://docs.cloud.google.com/healthcare-api/docs/how-tos/mllp-adapter), [https://docs.cloud.google.com/healthcare-api/docs/dicom-pubsub](https://docs.cloud.google.com/healthcare-api/docs/dicom-pubsub), [https://docs.cloud.google.com/healthcare-api/docs/how-tos/dicom](https://docs.cloud.google.com/healthcare-api/docs/how-tos/dicom))
- authorization (evidence: [https://docs.cloud.google.com/healthcare-api/docs/how-tos/mllp-adapter](https://docs.cloud.google.com/healthcare-api/docs/how-tos/mllp-adapter), [https://docs.cloud.google.com/healthcare-api/docs/dicom-pubsub](https://docs.cloud.google.com/healthcare-api/docs/dicom-pubsub), [https://docs.cloud.google.com/healthcare-api/docs/how-tos/dicom](https://docs.cloud.google.com/healthcare-api/docs/how-tos/dicom))
- credential (evidence: [https://docs.cloud.google.com/healthcare-api/docs/how-tos/mllp-adapter](https://docs.cloud.google.com/healthcare-api/docs/how-tos/mllp-adapter), [https://docs.cloud.google.com/healthcare-api/docs/dicom-pubsub](https://docs.cloud.google.com/healthcare-api/docs/dicom-pubsub), [https://docs.cloud.google.com/healthcare-api/docs/how-tos/dicom](https://docs.cloud.google.com/healthcare-api/docs/how-tos/dicom))
- iam (evidence: [https://docs.cloud.google.com/healthcare-api/docs/how-tos/mllp-adapter](https://docs.cloud.google.com/healthcare-api/docs/how-tos/mllp-adapter), [https://docs.cloud.google.com/healthcare-api/docs/dicom-pubsub](https://docs.cloud.google.com/healthcare-api/docs/dicom-pubsub), [https://docs.cloud.google.com/healthcare-api/docs/how-tos/dicom](https://docs.cloud.google.com/healthcare-api/docs/how-tos/dicom))
- identity (evidence: [https://docs.cloud.google.com/healthcare-api/docs/how-tos/mllp-adapter](https://docs.cloud.google.com/healthcare-api/docs/how-tos/mllp-adapter), [https://docs.cloud.google.com/healthcare-api/docs/dicom-pubsub](https://docs.cloud.google.com/healthcare-api/docs/dicom-pubsub), [https://docs.cloud.google.com/healthcare-api/docs/how-tos/dicom](https://docs.cloud.google.com/healthcare-api/docs/how-tos/dicom))
- permission (evidence: [https://docs.cloud.google.com/healthcare-api/docs/how-tos/mllp-adapter](https://docs.cloud.google.com/healthcare-api/docs/how-tos/mllp-adapter), [https://docs.cloud.google.com/healthcare-api/docs/dicom-pubsub](https://docs.cloud.google.com/healthcare-api/docs/dicom-pubsub), [https://docs.cloud.google.com/healthcare-api/docs/how-tos/dicom](https://docs.cloud.google.com/healthcare-api/docs/how-tos/dicom))
- role (evidence: [https://docs.cloud.google.com/healthcare-api/docs/how-tos/mllp-adapter](https://docs.cloud.google.com/healthcare-api/docs/how-tos/mllp-adapter), [https://docs.cloud.google.com/healthcare-api/docs/dicom-pubsub](https://docs.cloud.google.com/healthcare-api/docs/dicom-pubsub), [https://docs.cloud.google.com/healthcare-api/docs/how-tos/dicom](https://docs.cloud.google.com/healthcare-api/docs/how-tos/dicom))
- token (evidence: [https://docs.cloud.google.com/healthcare-api/docs/how-tos/mllp-adapter](https://docs.cloud.google.com/healthcare-api/docs/how-tos/mllp-adapter), [https://docs.cloud.google.com/healthcare-api/docs/dicom-pubsub](https://docs.cloud.google.com/healthcare-api/docs/dicom-pubsub), [https://docs.cloud.google.com/healthcare-api/docs/how-tos/dicom](https://docs.cloud.google.com/healthcare-api/docs/how-tos/dicom))

## Official Evidence

- [https://docs.cloud.google.com/healthcare-api/docs/dicom-pubsub](https://docs.cloud.google.com/healthcare-api/docs/dicom-pubsub)
- [https://docs.cloud.google.com/healthcare-api/docs/how-tos/dicom](https://docs.cloud.google.com/healthcare-api/docs/how-tos/dicom)
- [https://docs.cloud.google.com/healthcare-api/docs/how-tos/mllp-adapter](https://docs.cloud.google.com/healthcare-api/docs/how-tos/mllp-adapter)
