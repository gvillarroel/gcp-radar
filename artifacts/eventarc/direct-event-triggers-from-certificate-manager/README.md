# Direct event triggers from Certificate Manager

Product: Eventarc
Feature slug: `direct-event-triggers-from-certificate-manager`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Eventarc can create triggers for direct events from Certificate Manager; Eventarc can create triggers for direct events from Certificate Manager in Preview.

## Lifecycle

- Latest feature date: 2023-08-31
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- audit (evidence: [https://docs.cloud.google.com/python/docs/reference/eventarc/latest/google.cloud.eventarc_v1.services.eventarc.EventarcAsyncClient](https://docs.cloud.google.com/python/docs/reference/eventarc/latest/google.cloud.eventarc_v1.services.eventarc.EventarcAsyncClient), [https://docs.cloud.google.com/python/docs/reference/eventarc/latest/google.cloud.eventarc_v1.services.eventarc.EventarcClient](https://docs.cloud.google.com/python/docs/reference/eventarc/latest/google.cloud.eventarc_v1.services.eventarc.EventarcClient), [https://docs.cloud.google.com/eventarc/standard/docs/event-types](https://docs.cloud.google.com/eventarc/standard/docs/event-types), [https://docs.cloud.google.com/eventarc/docs/event-types](https://docs.cloud.google.com/eventarc/docs/event-types))
- auth (evidence: [https://docs.cloud.google.com/python/docs/reference/eventarc/latest/google.cloud.eventarc_v1.services.eventarc.EventarcAsyncClient](https://docs.cloud.google.com/python/docs/reference/eventarc/latest/google.cloud.eventarc_v1.services.eventarc.EventarcAsyncClient), [https://docs.cloud.google.com/python/docs/reference/eventarc/latest/google.cloud.eventarc_v1.services.eventarc.EventarcClient](https://docs.cloud.google.com/python/docs/reference/eventarc/latest/google.cloud.eventarc_v1.services.eventarc.EventarcClient), [https://docs.cloud.google.com/eventarc/standard/docs/event-types](https://docs.cloud.google.com/eventarc/standard/docs/event-types), [https://docs.cloud.google.com/eventarc/docs/event-types](https://docs.cloud.google.com/eventarc/docs/event-types))
- authorization (evidence: [https://docs.cloud.google.com/python/docs/reference/eventarc/latest/google.cloud.eventarc_v1.services.eventarc.EventarcAsyncClient](https://docs.cloud.google.com/python/docs/reference/eventarc/latest/google.cloud.eventarc_v1.services.eventarc.EventarcAsyncClient), [https://docs.cloud.google.com/python/docs/reference/eventarc/latest/google.cloud.eventarc_v1.services.eventarc.EventarcClient](https://docs.cloud.google.com/python/docs/reference/eventarc/latest/google.cloud.eventarc_v1.services.eventarc.EventarcClient), [https://docs.cloud.google.com/eventarc/standard/docs/event-types](https://docs.cloud.google.com/eventarc/standard/docs/event-types), [https://docs.cloud.google.com/eventarc/docs/event-types](https://docs.cloud.google.com/eventarc/docs/event-types))
- certificate (evidence: [https://docs.cloud.google.com/python/docs/reference/eventarc/latest/google.cloud.eventarc_v1.services.eventarc.EventarcAsyncClient](https://docs.cloud.google.com/python/docs/reference/eventarc/latest/google.cloud.eventarc_v1.services.eventarc.EventarcAsyncClient), [https://docs.cloud.google.com/python/docs/reference/eventarc/latest/google.cloud.eventarc_v1.services.eventarc.EventarcClient](https://docs.cloud.google.com/python/docs/reference/eventarc/latest/google.cloud.eventarc_v1.services.eventarc.EventarcClient), [https://docs.cloud.google.com/eventarc/standard/docs/event-types](https://docs.cloud.google.com/eventarc/standard/docs/event-types), [https://docs.cloud.google.com/eventarc/docs/event-types](https://docs.cloud.google.com/eventarc/docs/event-types))
- policy (evidence: [https://docs.cloud.google.com/python/docs/reference/eventarc/latest/google.cloud.eventarc_v1.services.eventarc.EventarcAsyncClient](https://docs.cloud.google.com/python/docs/reference/eventarc/latest/google.cloud.eventarc_v1.services.eventarc.EventarcAsyncClient), [https://docs.cloud.google.com/python/docs/reference/eventarc/latest/google.cloud.eventarc_v1.services.eventarc.EventarcClient](https://docs.cloud.google.com/python/docs/reference/eventarc/latest/google.cloud.eventarc_v1.services.eventarc.EventarcClient), [https://docs.cloud.google.com/eventarc/standard/docs/event-types](https://docs.cloud.google.com/eventarc/standard/docs/event-types), [https://docs.cloud.google.com/eventarc/docs/event-types](https://docs.cloud.google.com/eventarc/docs/event-types))
- private (evidence: [https://docs.cloud.google.com/python/docs/reference/eventarc/latest/google.cloud.eventarc_v1.services.eventarc.EventarcAsyncClient](https://docs.cloud.google.com/python/docs/reference/eventarc/latest/google.cloud.eventarc_v1.services.eventarc.EventarcAsyncClient), [https://docs.cloud.google.com/python/docs/reference/eventarc/latest/google.cloud.eventarc_v1.services.eventarc.EventarcClient](https://docs.cloud.google.com/python/docs/reference/eventarc/latest/google.cloud.eventarc_v1.services.eventarc.EventarcClient), [https://docs.cloud.google.com/eventarc/standard/docs/event-types](https://docs.cloud.google.com/eventarc/standard/docs/event-types), [https://docs.cloud.google.com/eventarc/docs/event-types](https://docs.cloud.google.com/eventarc/docs/event-types))
- token (evidence: [https://docs.cloud.google.com/python/docs/reference/eventarc/latest/google.cloud.eventarc_v1.services.eventarc.EventarcAsyncClient](https://docs.cloud.google.com/python/docs/reference/eventarc/latest/google.cloud.eventarc_v1.services.eventarc.EventarcAsyncClient), [https://docs.cloud.google.com/python/docs/reference/eventarc/latest/google.cloud.eventarc_v1.services.eventarc.EventarcClient](https://docs.cloud.google.com/python/docs/reference/eventarc/latest/google.cloud.eventarc_v1.services.eventarc.EventarcClient), [https://docs.cloud.google.com/eventarc/standard/docs/event-types](https://docs.cloud.google.com/eventarc/standard/docs/event-types), [https://docs.cloud.google.com/eventarc/docs/event-types](https://docs.cloud.google.com/eventarc/docs/event-types))

## Official Evidence

- [https://docs.cloud.google.com/eventarc/docs/event-types](https://docs.cloud.google.com/eventarc/docs/event-types)
- [https://docs.cloud.google.com/eventarc/standard/docs/event-types](https://docs.cloud.google.com/eventarc/standard/docs/event-types)
- [https://docs.cloud.google.com/python/docs/reference/eventarc/latest/google.cloud.eventarc_v1.services.eventarc.EventarcAsyncClient](https://docs.cloud.google.com/python/docs/reference/eventarc/latest/google.cloud.eventarc_v1.services.eventarc.EventarcAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/eventarc/latest/google.cloud.eventarc_v1.services.eventarc.EventarcClient](https://docs.cloud.google.com/python/docs/reference/eventarc/latest/google.cloud.eventarc_v1.services.eventarc.EventarcClient)
