# Direct event triggers from Cloud Dataflow

Product: Eventarc
Feature slug: `direct-event-triggers-from-cloud-dataflow`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Eventarc supports direct triggers for Cloud Dataflow events in Preview.

## Lifecycle

- Latest feature date: 2023-03-28
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- audit (evidence: [https://docs.cloud.google.com/eventarc/standard/docs/gke/migrating-event-triggers](https://docs.cloud.google.com/eventarc/standard/docs/gke/migrating-event-triggers), [https://docs.cloud.google.com/eventarc/standard/docs/event-types](https://docs.cloud.google.com/eventarc/standard/docs/event-types), [https://docs.cloud.google.com/eventarc/docs/creating-triggers-terraform](https://docs.cloud.google.com/eventarc/docs/creating-triggers-terraform), [https://docs.cloud.google.com/eventarc/standard/docs/gke/route-trigger-alloydb](https://docs.cloud.google.com/eventarc/standard/docs/gke/route-trigger-alloydb))
- auth (evidence: [https://docs.cloud.google.com/eventarc/standard/docs/gke/migrating-event-triggers](https://docs.cloud.google.com/eventarc/standard/docs/gke/migrating-event-triggers), [https://docs.cloud.google.com/eventarc/standard/docs/event-types](https://docs.cloud.google.com/eventarc/standard/docs/event-types), [https://docs.cloud.google.com/eventarc/docs/creating-triggers-terraform](https://docs.cloud.google.com/eventarc/docs/creating-triggers-terraform), [https://docs.cloud.google.com/eventarc/standard/docs/gke/route-trigger-alloydb](https://docs.cloud.google.com/eventarc/standard/docs/gke/route-trigger-alloydb))
- authorization (evidence: [https://docs.cloud.google.com/eventarc/standard/docs/gke/migrating-event-triggers](https://docs.cloud.google.com/eventarc/standard/docs/gke/migrating-event-triggers), [https://docs.cloud.google.com/eventarc/standard/docs/event-types](https://docs.cloud.google.com/eventarc/standard/docs/event-types), [https://docs.cloud.google.com/eventarc/docs/creating-triggers-terraform](https://docs.cloud.google.com/eventarc/docs/creating-triggers-terraform), [https://docs.cloud.google.com/eventarc/standard/docs/gke/route-trigger-alloydb](https://docs.cloud.google.com/eventarc/standard/docs/gke/route-trigger-alloydb))
- certificate (evidence: [https://docs.cloud.google.com/eventarc/standard/docs/gke/migrating-event-triggers](https://docs.cloud.google.com/eventarc/standard/docs/gke/migrating-event-triggers), [https://docs.cloud.google.com/eventarc/standard/docs/event-types](https://docs.cloud.google.com/eventarc/standard/docs/event-types), [https://docs.cloud.google.com/eventarc/docs/creating-triggers-terraform](https://docs.cloud.google.com/eventarc/docs/creating-triggers-terraform), [https://docs.cloud.google.com/eventarc/standard/docs/gke/route-trigger-alloydb](https://docs.cloud.google.com/eventarc/standard/docs/gke/route-trigger-alloydb))
- iam (evidence: [https://docs.cloud.google.com/eventarc/standard/docs/gke/migrating-event-triggers](https://docs.cloud.google.com/eventarc/standard/docs/gke/migrating-event-triggers), [https://docs.cloud.google.com/eventarc/standard/docs/event-types](https://docs.cloud.google.com/eventarc/standard/docs/event-types), [https://docs.cloud.google.com/eventarc/docs/creating-triggers-terraform](https://docs.cloud.google.com/eventarc/docs/creating-triggers-terraform), [https://docs.cloud.google.com/eventarc/standard/docs/gke/route-trigger-alloydb](https://docs.cloud.google.com/eventarc/standard/docs/gke/route-trigger-alloydb))
- policy (evidence: [https://docs.cloud.google.com/eventarc/standard/docs/gke/migrating-event-triggers](https://docs.cloud.google.com/eventarc/standard/docs/gke/migrating-event-triggers), [https://docs.cloud.google.com/eventarc/standard/docs/event-types](https://docs.cloud.google.com/eventarc/standard/docs/event-types), [https://docs.cloud.google.com/eventarc/docs/creating-triggers-terraform](https://docs.cloud.google.com/eventarc/docs/creating-triggers-terraform), [https://docs.cloud.google.com/eventarc/standard/docs/gke/route-trigger-alloydb](https://docs.cloud.google.com/eventarc/standard/docs/gke/route-trigger-alloydb))
- private (evidence: [https://docs.cloud.google.com/eventarc/standard/docs/gke/migrating-event-triggers](https://docs.cloud.google.com/eventarc/standard/docs/gke/migrating-event-triggers), [https://docs.cloud.google.com/eventarc/standard/docs/event-types](https://docs.cloud.google.com/eventarc/standard/docs/event-types), [https://docs.cloud.google.com/eventarc/docs/creating-triggers-terraform](https://docs.cloud.google.com/eventarc/docs/creating-triggers-terraform), [https://docs.cloud.google.com/eventarc/standard/docs/gke/route-trigger-alloydb](https://docs.cloud.google.com/eventarc/standard/docs/gke/route-trigger-alloydb))
- token (evidence: [https://docs.cloud.google.com/eventarc/standard/docs/gke/migrating-event-triggers](https://docs.cloud.google.com/eventarc/standard/docs/gke/migrating-event-triggers), [https://docs.cloud.google.com/eventarc/standard/docs/event-types](https://docs.cloud.google.com/eventarc/standard/docs/event-types), [https://docs.cloud.google.com/eventarc/docs/creating-triggers-terraform](https://docs.cloud.google.com/eventarc/docs/creating-triggers-terraform), [https://docs.cloud.google.com/eventarc/standard/docs/gke/route-trigger-alloydb](https://docs.cloud.google.com/eventarc/standard/docs/gke/route-trigger-alloydb))

## Official Evidence

- [https://docs.cloud.google.com/eventarc/docs/creating-triggers-terraform](https://docs.cloud.google.com/eventarc/docs/creating-triggers-terraform)
- [https://docs.cloud.google.com/eventarc/standard/docs/event-types](https://docs.cloud.google.com/eventarc/standard/docs/event-types)
- [https://docs.cloud.google.com/eventarc/standard/docs/gke/migrating-event-triggers](https://docs.cloud.google.com/eventarc/standard/docs/gke/migrating-event-triggers)
- [https://docs.cloud.google.com/eventarc/standard/docs/gke/route-trigger-alloydb](https://docs.cloud.google.com/eventarc/standard/docs/gke/route-trigger-alloydb)
