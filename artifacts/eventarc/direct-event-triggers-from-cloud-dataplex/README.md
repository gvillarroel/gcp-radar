# Direct event triggers from Cloud Dataplex

Product: Eventarc
Feature slug: `direct-event-triggers-from-cloud-dataplex`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Eventarc can create triggers for direct events from Cloud Dataplex; Eventarc can create triggers for direct events from Cloud Dataplex in Preview.

## Lifecycle

- Latest feature date: 2023-08-31
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- audit (evidence: [https://docs.cloud.google.com/eventarc/standard/docs/event-types](https://docs.cloud.google.com/eventarc/standard/docs/event-types), [https://docs.cloud.google.com/eventarc/standard/docs/gke/migrating-event-triggers](https://docs.cloud.google.com/eventarc/standard/docs/gke/migrating-event-triggers), [https://docs.cloud.google.com/eventarc/docs/creating-triggers-terraform](https://docs.cloud.google.com/eventarc/docs/creating-triggers-terraform), [https://docs.cloud.google.com/eventarc/docs/event-types](https://docs.cloud.google.com/eventarc/docs/event-types))
- auth (evidence: [https://docs.cloud.google.com/eventarc/standard/docs/event-types](https://docs.cloud.google.com/eventarc/standard/docs/event-types), [https://docs.cloud.google.com/eventarc/standard/docs/gke/migrating-event-triggers](https://docs.cloud.google.com/eventarc/standard/docs/gke/migrating-event-triggers), [https://docs.cloud.google.com/eventarc/docs/creating-triggers-terraform](https://docs.cloud.google.com/eventarc/docs/creating-triggers-terraform), [https://docs.cloud.google.com/eventarc/docs/event-types](https://docs.cloud.google.com/eventarc/docs/event-types))
- authorization (evidence: [https://docs.cloud.google.com/eventarc/standard/docs/event-types](https://docs.cloud.google.com/eventarc/standard/docs/event-types), [https://docs.cloud.google.com/eventarc/standard/docs/gke/migrating-event-triggers](https://docs.cloud.google.com/eventarc/standard/docs/gke/migrating-event-triggers), [https://docs.cloud.google.com/eventarc/docs/creating-triggers-terraform](https://docs.cloud.google.com/eventarc/docs/creating-triggers-terraform), [https://docs.cloud.google.com/eventarc/docs/event-types](https://docs.cloud.google.com/eventarc/docs/event-types))
- certificate (evidence: [https://docs.cloud.google.com/eventarc/standard/docs/event-types](https://docs.cloud.google.com/eventarc/standard/docs/event-types), [https://docs.cloud.google.com/eventarc/standard/docs/gke/migrating-event-triggers](https://docs.cloud.google.com/eventarc/standard/docs/gke/migrating-event-triggers), [https://docs.cloud.google.com/eventarc/docs/creating-triggers-terraform](https://docs.cloud.google.com/eventarc/docs/creating-triggers-terraform), [https://docs.cloud.google.com/eventarc/docs/event-types](https://docs.cloud.google.com/eventarc/docs/event-types))
- iam (evidence: [https://docs.cloud.google.com/eventarc/standard/docs/event-types](https://docs.cloud.google.com/eventarc/standard/docs/event-types), [https://docs.cloud.google.com/eventarc/standard/docs/gke/migrating-event-triggers](https://docs.cloud.google.com/eventarc/standard/docs/gke/migrating-event-triggers), [https://docs.cloud.google.com/eventarc/docs/creating-triggers-terraform](https://docs.cloud.google.com/eventarc/docs/creating-triggers-terraform), [https://docs.cloud.google.com/eventarc/docs/event-types](https://docs.cloud.google.com/eventarc/docs/event-types))
- identity (evidence: [https://docs.cloud.google.com/eventarc/standard/docs/event-types](https://docs.cloud.google.com/eventarc/standard/docs/event-types), [https://docs.cloud.google.com/eventarc/standard/docs/gke/migrating-event-triggers](https://docs.cloud.google.com/eventarc/standard/docs/gke/migrating-event-triggers), [https://docs.cloud.google.com/eventarc/docs/creating-triggers-terraform](https://docs.cloud.google.com/eventarc/docs/creating-triggers-terraform), [https://docs.cloud.google.com/eventarc/docs/event-types](https://docs.cloud.google.com/eventarc/docs/event-types))
- permission (evidence: [https://docs.cloud.google.com/eventarc/standard/docs/event-types](https://docs.cloud.google.com/eventarc/standard/docs/event-types), [https://docs.cloud.google.com/eventarc/standard/docs/gke/migrating-event-triggers](https://docs.cloud.google.com/eventarc/standard/docs/gke/migrating-event-triggers), [https://docs.cloud.google.com/eventarc/docs/creating-triggers-terraform](https://docs.cloud.google.com/eventarc/docs/creating-triggers-terraform), [https://docs.cloud.google.com/eventarc/docs/event-types](https://docs.cloud.google.com/eventarc/docs/event-types))
- policy (evidence: [https://docs.cloud.google.com/eventarc/standard/docs/event-types](https://docs.cloud.google.com/eventarc/standard/docs/event-types), [https://docs.cloud.google.com/eventarc/standard/docs/gke/migrating-event-triggers](https://docs.cloud.google.com/eventarc/standard/docs/gke/migrating-event-triggers), [https://docs.cloud.google.com/eventarc/docs/creating-triggers-terraform](https://docs.cloud.google.com/eventarc/docs/creating-triggers-terraform), [https://docs.cloud.google.com/eventarc/docs/event-types](https://docs.cloud.google.com/eventarc/docs/event-types))
- private (evidence: [https://docs.cloud.google.com/eventarc/standard/docs/event-types](https://docs.cloud.google.com/eventarc/standard/docs/event-types), [https://docs.cloud.google.com/eventarc/standard/docs/gke/migrating-event-triggers](https://docs.cloud.google.com/eventarc/standard/docs/gke/migrating-event-triggers), [https://docs.cloud.google.com/eventarc/docs/creating-triggers-terraform](https://docs.cloud.google.com/eventarc/docs/creating-triggers-terraform), [https://docs.cloud.google.com/eventarc/docs/event-types](https://docs.cloud.google.com/eventarc/docs/event-types))
- role (evidence: [https://docs.cloud.google.com/eventarc/standard/docs/event-types](https://docs.cloud.google.com/eventarc/standard/docs/event-types), [https://docs.cloud.google.com/eventarc/standard/docs/gke/migrating-event-triggers](https://docs.cloud.google.com/eventarc/standard/docs/gke/migrating-event-triggers), [https://docs.cloud.google.com/eventarc/docs/creating-triggers-terraform](https://docs.cloud.google.com/eventarc/docs/creating-triggers-terraform), [https://docs.cloud.google.com/eventarc/docs/event-types](https://docs.cloud.google.com/eventarc/docs/event-types))
- token (evidence: [https://docs.cloud.google.com/eventarc/standard/docs/event-types](https://docs.cloud.google.com/eventarc/standard/docs/event-types), [https://docs.cloud.google.com/eventarc/standard/docs/gke/migrating-event-triggers](https://docs.cloud.google.com/eventarc/standard/docs/gke/migrating-event-triggers), [https://docs.cloud.google.com/eventarc/docs/creating-triggers-terraform](https://docs.cloud.google.com/eventarc/docs/creating-triggers-terraform), [https://docs.cloud.google.com/eventarc/docs/event-types](https://docs.cloud.google.com/eventarc/docs/event-types))

## Official Evidence

- [https://docs.cloud.google.com/eventarc/docs/creating-triggers-terraform](https://docs.cloud.google.com/eventarc/docs/creating-triggers-terraform)
- [https://docs.cloud.google.com/eventarc/docs/event-types](https://docs.cloud.google.com/eventarc/docs/event-types)
- [https://docs.cloud.google.com/eventarc/standard/docs/event-types](https://docs.cloud.google.com/eventarc/standard/docs/event-types)
- [https://docs.cloud.google.com/eventarc/standard/docs/gke/migrating-event-triggers](https://docs.cloud.google.com/eventarc/standard/docs/gke/migrating-event-triggers)
