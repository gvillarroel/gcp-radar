# Direct event triggers from GKE Hub

Product: Eventarc
Feature slug: `direct-event-triggers-from-gke-hub`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Eventarc can create triggers for direct events from GKE Hub; Eventarc can create triggers for direct events from GKE Hub in Preview.

## Lifecycle

- Latest feature date: 2023-08-31
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- audit (evidence: [https://docs.cloud.google.com/eventarc/standard/docs/gke/route-trigger-apigee-api-hub](https://docs.cloud.google.com/eventarc/standard/docs/gke/route-trigger-apigee-api-hub), [https://docs.cloud.google.com/eventarc/standard/docs/gke/route-trigger-backup-gke](https://docs.cloud.google.com/eventarc/standard/docs/gke/route-trigger-backup-gke), [https://docs.cloud.google.com/eventarc/standard/docs/gke/migrating-event-triggers](https://docs.cloud.google.com/eventarc/standard/docs/gke/migrating-event-triggers), [https://docs.cloud.google.com/eventarc/standard/docs/event-types](https://docs.cloud.google.com/eventarc/standard/docs/event-types))
- auth (evidence: [https://docs.cloud.google.com/eventarc/standard/docs/gke/route-trigger-apigee-api-hub](https://docs.cloud.google.com/eventarc/standard/docs/gke/route-trigger-apigee-api-hub), [https://docs.cloud.google.com/eventarc/standard/docs/gke/route-trigger-backup-gke](https://docs.cloud.google.com/eventarc/standard/docs/gke/route-trigger-backup-gke), [https://docs.cloud.google.com/eventarc/standard/docs/gke/migrating-event-triggers](https://docs.cloud.google.com/eventarc/standard/docs/gke/migrating-event-triggers), [https://docs.cloud.google.com/eventarc/standard/docs/event-types](https://docs.cloud.google.com/eventarc/standard/docs/event-types))
- authorization (evidence: [https://docs.cloud.google.com/eventarc/standard/docs/gke/route-trigger-apigee-api-hub](https://docs.cloud.google.com/eventarc/standard/docs/gke/route-trigger-apigee-api-hub), [https://docs.cloud.google.com/eventarc/standard/docs/gke/route-trigger-backup-gke](https://docs.cloud.google.com/eventarc/standard/docs/gke/route-trigger-backup-gke), [https://docs.cloud.google.com/eventarc/standard/docs/gke/migrating-event-triggers](https://docs.cloud.google.com/eventarc/standard/docs/gke/migrating-event-triggers), [https://docs.cloud.google.com/eventarc/standard/docs/event-types](https://docs.cloud.google.com/eventarc/standard/docs/event-types))
- certificate (evidence: [https://docs.cloud.google.com/eventarc/standard/docs/gke/route-trigger-apigee-api-hub](https://docs.cloud.google.com/eventarc/standard/docs/gke/route-trigger-apigee-api-hub), [https://docs.cloud.google.com/eventarc/standard/docs/gke/route-trigger-backup-gke](https://docs.cloud.google.com/eventarc/standard/docs/gke/route-trigger-backup-gke), [https://docs.cloud.google.com/eventarc/standard/docs/gke/migrating-event-triggers](https://docs.cloud.google.com/eventarc/standard/docs/gke/migrating-event-triggers), [https://docs.cloud.google.com/eventarc/standard/docs/event-types](https://docs.cloud.google.com/eventarc/standard/docs/event-types))
- iam (evidence: [https://docs.cloud.google.com/eventarc/standard/docs/gke/route-trigger-apigee-api-hub](https://docs.cloud.google.com/eventarc/standard/docs/gke/route-trigger-apigee-api-hub), [https://docs.cloud.google.com/eventarc/standard/docs/gke/route-trigger-backup-gke](https://docs.cloud.google.com/eventarc/standard/docs/gke/route-trigger-backup-gke), [https://docs.cloud.google.com/eventarc/standard/docs/gke/migrating-event-triggers](https://docs.cloud.google.com/eventarc/standard/docs/gke/migrating-event-triggers), [https://docs.cloud.google.com/eventarc/standard/docs/event-types](https://docs.cloud.google.com/eventarc/standard/docs/event-types))
- permission (evidence: [https://docs.cloud.google.com/eventarc/standard/docs/gke/route-trigger-apigee-api-hub](https://docs.cloud.google.com/eventarc/standard/docs/gke/route-trigger-apigee-api-hub), [https://docs.cloud.google.com/eventarc/standard/docs/gke/route-trigger-backup-gke](https://docs.cloud.google.com/eventarc/standard/docs/gke/route-trigger-backup-gke), [https://docs.cloud.google.com/eventarc/standard/docs/gke/migrating-event-triggers](https://docs.cloud.google.com/eventarc/standard/docs/gke/migrating-event-triggers), [https://docs.cloud.google.com/eventarc/standard/docs/event-types](https://docs.cloud.google.com/eventarc/standard/docs/event-types))
- policy (evidence: [https://docs.cloud.google.com/eventarc/standard/docs/gke/route-trigger-apigee-api-hub](https://docs.cloud.google.com/eventarc/standard/docs/gke/route-trigger-apigee-api-hub), [https://docs.cloud.google.com/eventarc/standard/docs/gke/route-trigger-backup-gke](https://docs.cloud.google.com/eventarc/standard/docs/gke/route-trigger-backup-gke), [https://docs.cloud.google.com/eventarc/standard/docs/gke/migrating-event-triggers](https://docs.cloud.google.com/eventarc/standard/docs/gke/migrating-event-triggers), [https://docs.cloud.google.com/eventarc/standard/docs/event-types](https://docs.cloud.google.com/eventarc/standard/docs/event-types))
- private (evidence: [https://docs.cloud.google.com/eventarc/standard/docs/gke/route-trigger-apigee-api-hub](https://docs.cloud.google.com/eventarc/standard/docs/gke/route-trigger-apigee-api-hub), [https://docs.cloud.google.com/eventarc/standard/docs/gke/route-trigger-backup-gke](https://docs.cloud.google.com/eventarc/standard/docs/gke/route-trigger-backup-gke), [https://docs.cloud.google.com/eventarc/standard/docs/gke/migrating-event-triggers](https://docs.cloud.google.com/eventarc/standard/docs/gke/migrating-event-triggers), [https://docs.cloud.google.com/eventarc/standard/docs/event-types](https://docs.cloud.google.com/eventarc/standard/docs/event-types))
- role (evidence: [https://docs.cloud.google.com/eventarc/standard/docs/gke/route-trigger-apigee-api-hub](https://docs.cloud.google.com/eventarc/standard/docs/gke/route-trigger-apigee-api-hub), [https://docs.cloud.google.com/eventarc/standard/docs/gke/route-trigger-backup-gke](https://docs.cloud.google.com/eventarc/standard/docs/gke/route-trigger-backup-gke), [https://docs.cloud.google.com/eventarc/standard/docs/gke/migrating-event-triggers](https://docs.cloud.google.com/eventarc/standard/docs/gke/migrating-event-triggers), [https://docs.cloud.google.com/eventarc/standard/docs/event-types](https://docs.cloud.google.com/eventarc/standard/docs/event-types))
- token (evidence: [https://docs.cloud.google.com/eventarc/standard/docs/gke/route-trigger-apigee-api-hub](https://docs.cloud.google.com/eventarc/standard/docs/gke/route-trigger-apigee-api-hub), [https://docs.cloud.google.com/eventarc/standard/docs/gke/route-trigger-backup-gke](https://docs.cloud.google.com/eventarc/standard/docs/gke/route-trigger-backup-gke), [https://docs.cloud.google.com/eventarc/standard/docs/gke/migrating-event-triggers](https://docs.cloud.google.com/eventarc/standard/docs/gke/migrating-event-triggers), [https://docs.cloud.google.com/eventarc/standard/docs/event-types](https://docs.cloud.google.com/eventarc/standard/docs/event-types))

## Official Evidence

- [https://docs.cloud.google.com/eventarc/standard/docs/event-types](https://docs.cloud.google.com/eventarc/standard/docs/event-types)
- [https://docs.cloud.google.com/eventarc/standard/docs/gke/migrating-event-triggers](https://docs.cloud.google.com/eventarc/standard/docs/gke/migrating-event-triggers)
- [https://docs.cloud.google.com/eventarc/standard/docs/gke/route-trigger-apigee-api-hub](https://docs.cloud.google.com/eventarc/standard/docs/gke/route-trigger-apigee-api-hub)
- [https://docs.cloud.google.com/eventarc/standard/docs/gke/route-trigger-backup-gke](https://docs.cloud.google.com/eventarc/standard/docs/gke/route-trigger-backup-gke)
