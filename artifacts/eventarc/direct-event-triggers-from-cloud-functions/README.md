# Direct event triggers from Cloud Functions

Product: Eventarc
Feature slug: `direct-event-triggers-from-cloud-functions`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Eventarc can create triggers for direct events from Cloud Functions; Eventarc can create triggers for direct events from Cloud Functions in Preview.

## Lifecycle

- Latest feature date: 2023-08-31
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- audit (evidence: [https://docs.cloud.google.com/eventarc/standard/docs/event-types](https://docs.cloud.google.com/eventarc/standard/docs/event-types), [https://docs.cloud.google.com/eventarc/docs/creating-triggers-terraform](https://docs.cloud.google.com/eventarc/docs/creating-triggers-terraform), [https://docs.cloud.google.com/eventarc/standard/docs/functions/create-triggers](https://docs.cloud.google.com/eventarc/standard/docs/functions/create-triggers), [https://docs.cloud.google.com/eventarc/standard/docs/gke/migrating-event-triggers](https://docs.cloud.google.com/eventarc/standard/docs/gke/migrating-event-triggers))
- auth (evidence: [https://docs.cloud.google.com/eventarc/standard/docs/event-types](https://docs.cloud.google.com/eventarc/standard/docs/event-types), [https://docs.cloud.google.com/eventarc/docs/creating-triggers-terraform](https://docs.cloud.google.com/eventarc/docs/creating-triggers-terraform), [https://docs.cloud.google.com/eventarc/standard/docs/functions/create-triggers](https://docs.cloud.google.com/eventarc/standard/docs/functions/create-triggers), [https://docs.cloud.google.com/eventarc/standard/docs/gke/migrating-event-triggers](https://docs.cloud.google.com/eventarc/standard/docs/gke/migrating-event-triggers))
- authorization (evidence: [https://docs.cloud.google.com/eventarc/standard/docs/event-types](https://docs.cloud.google.com/eventarc/standard/docs/event-types), [https://docs.cloud.google.com/eventarc/docs/creating-triggers-terraform](https://docs.cloud.google.com/eventarc/docs/creating-triggers-terraform), [https://docs.cloud.google.com/eventarc/standard/docs/functions/create-triggers](https://docs.cloud.google.com/eventarc/standard/docs/functions/create-triggers), [https://docs.cloud.google.com/eventarc/standard/docs/gke/migrating-event-triggers](https://docs.cloud.google.com/eventarc/standard/docs/gke/migrating-event-triggers))
- certificate (evidence: [https://docs.cloud.google.com/eventarc/standard/docs/event-types](https://docs.cloud.google.com/eventarc/standard/docs/event-types), [https://docs.cloud.google.com/eventarc/docs/creating-triggers-terraform](https://docs.cloud.google.com/eventarc/docs/creating-triggers-terraform), [https://docs.cloud.google.com/eventarc/standard/docs/functions/create-triggers](https://docs.cloud.google.com/eventarc/standard/docs/functions/create-triggers), [https://docs.cloud.google.com/eventarc/standard/docs/gke/migrating-event-triggers](https://docs.cloud.google.com/eventarc/standard/docs/gke/migrating-event-triggers))
- iam (evidence: [https://docs.cloud.google.com/eventarc/standard/docs/event-types](https://docs.cloud.google.com/eventarc/standard/docs/event-types), [https://docs.cloud.google.com/eventarc/docs/creating-triggers-terraform](https://docs.cloud.google.com/eventarc/docs/creating-triggers-terraform), [https://docs.cloud.google.com/eventarc/standard/docs/functions/create-triggers](https://docs.cloud.google.com/eventarc/standard/docs/functions/create-triggers), [https://docs.cloud.google.com/eventarc/standard/docs/gke/migrating-event-triggers](https://docs.cloud.google.com/eventarc/standard/docs/gke/migrating-event-triggers))
- identity (evidence: [https://docs.cloud.google.com/eventarc/standard/docs/event-types](https://docs.cloud.google.com/eventarc/standard/docs/event-types), [https://docs.cloud.google.com/eventarc/docs/creating-triggers-terraform](https://docs.cloud.google.com/eventarc/docs/creating-triggers-terraform), [https://docs.cloud.google.com/eventarc/standard/docs/functions/create-triggers](https://docs.cloud.google.com/eventarc/standard/docs/functions/create-triggers), [https://docs.cloud.google.com/eventarc/standard/docs/gke/migrating-event-triggers](https://docs.cloud.google.com/eventarc/standard/docs/gke/migrating-event-triggers))
- permission (evidence: [https://docs.cloud.google.com/eventarc/standard/docs/event-types](https://docs.cloud.google.com/eventarc/standard/docs/event-types), [https://docs.cloud.google.com/eventarc/docs/creating-triggers-terraform](https://docs.cloud.google.com/eventarc/docs/creating-triggers-terraform), [https://docs.cloud.google.com/eventarc/standard/docs/functions/create-triggers](https://docs.cloud.google.com/eventarc/standard/docs/functions/create-triggers), [https://docs.cloud.google.com/eventarc/standard/docs/gke/migrating-event-triggers](https://docs.cloud.google.com/eventarc/standard/docs/gke/migrating-event-triggers))
- policy (evidence: [https://docs.cloud.google.com/eventarc/standard/docs/event-types](https://docs.cloud.google.com/eventarc/standard/docs/event-types), [https://docs.cloud.google.com/eventarc/docs/creating-triggers-terraform](https://docs.cloud.google.com/eventarc/docs/creating-triggers-terraform), [https://docs.cloud.google.com/eventarc/standard/docs/functions/create-triggers](https://docs.cloud.google.com/eventarc/standard/docs/functions/create-triggers), [https://docs.cloud.google.com/eventarc/standard/docs/gke/migrating-event-triggers](https://docs.cloud.google.com/eventarc/standard/docs/gke/migrating-event-triggers))
- private (evidence: [https://docs.cloud.google.com/eventarc/standard/docs/event-types](https://docs.cloud.google.com/eventarc/standard/docs/event-types), [https://docs.cloud.google.com/eventarc/docs/creating-triggers-terraform](https://docs.cloud.google.com/eventarc/docs/creating-triggers-terraform), [https://docs.cloud.google.com/eventarc/standard/docs/functions/create-triggers](https://docs.cloud.google.com/eventarc/standard/docs/functions/create-triggers), [https://docs.cloud.google.com/eventarc/standard/docs/gke/migrating-event-triggers](https://docs.cloud.google.com/eventarc/standard/docs/gke/migrating-event-triggers))
- role (evidence: [https://docs.cloud.google.com/eventarc/standard/docs/event-types](https://docs.cloud.google.com/eventarc/standard/docs/event-types), [https://docs.cloud.google.com/eventarc/docs/creating-triggers-terraform](https://docs.cloud.google.com/eventarc/docs/creating-triggers-terraform), [https://docs.cloud.google.com/eventarc/standard/docs/functions/create-triggers](https://docs.cloud.google.com/eventarc/standard/docs/functions/create-triggers), [https://docs.cloud.google.com/eventarc/standard/docs/gke/migrating-event-triggers](https://docs.cloud.google.com/eventarc/standard/docs/gke/migrating-event-triggers))
- token (evidence: [https://docs.cloud.google.com/eventarc/standard/docs/event-types](https://docs.cloud.google.com/eventarc/standard/docs/event-types), [https://docs.cloud.google.com/eventarc/docs/creating-triggers-terraform](https://docs.cloud.google.com/eventarc/docs/creating-triggers-terraform), [https://docs.cloud.google.com/eventarc/standard/docs/functions/create-triggers](https://docs.cloud.google.com/eventarc/standard/docs/functions/create-triggers), [https://docs.cloud.google.com/eventarc/standard/docs/gke/migrating-event-triggers](https://docs.cloud.google.com/eventarc/standard/docs/gke/migrating-event-triggers))

## Official Evidence

- [https://docs.cloud.google.com/eventarc/docs/creating-triggers-terraform](https://docs.cloud.google.com/eventarc/docs/creating-triggers-terraform)
- [https://docs.cloud.google.com/eventarc/standard/docs/event-types](https://docs.cloud.google.com/eventarc/standard/docs/event-types)
- [https://docs.cloud.google.com/eventarc/standard/docs/functions/create-triggers](https://docs.cloud.google.com/eventarc/standard/docs/functions/create-triggers)
- [https://docs.cloud.google.com/eventarc/standard/docs/gke/migrating-event-triggers](https://docs.cloud.google.com/eventarc/standard/docs/gke/migrating-event-triggers)
