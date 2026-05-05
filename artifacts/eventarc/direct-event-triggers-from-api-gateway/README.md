# Direct event triggers from API Gateway

Product: Eventarc
Feature slug: `direct-event-triggers-from-api-gateway`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Eventarc can create triggers for direct events from API Gateway; Eventarc can create triggers for direct events from API Gateway in Preview.

## Lifecycle

- Latest feature date: 2023-08-31
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- audit (evidence: [https://docs.cloud.google.com/eventarc/standard/docs/gke/route-trigger-api-gateway](https://docs.cloud.google.com/eventarc/standard/docs/gke/route-trigger-api-gateway), [https://docs.cloud.google.com/eventarc/standard/docs/gke/route-trigger-apigee-api-hub](https://docs.cloud.google.com/eventarc/standard/docs/gke/route-trigger-apigee-api-hub), [https://docs.cloud.google.com/eventarc/standard/docs/event-types](https://docs.cloud.google.com/eventarc/standard/docs/event-types), [https://docs.cloud.google.com/eventarc/standard/docs/gke/route-trigger-apigee-registry](https://docs.cloud.google.com/eventarc/standard/docs/gke/route-trigger-apigee-registry))
- auth (evidence: [https://docs.cloud.google.com/eventarc/standard/docs/gke/route-trigger-api-gateway](https://docs.cloud.google.com/eventarc/standard/docs/gke/route-trigger-api-gateway), [https://docs.cloud.google.com/eventarc/standard/docs/gke/route-trigger-apigee-api-hub](https://docs.cloud.google.com/eventarc/standard/docs/gke/route-trigger-apigee-api-hub), [https://docs.cloud.google.com/eventarc/standard/docs/event-types](https://docs.cloud.google.com/eventarc/standard/docs/event-types), [https://docs.cloud.google.com/eventarc/standard/docs/gke/route-trigger-apigee-registry](https://docs.cloud.google.com/eventarc/standard/docs/gke/route-trigger-apigee-registry))
- authorization (evidence: [https://docs.cloud.google.com/eventarc/standard/docs/gke/route-trigger-api-gateway](https://docs.cloud.google.com/eventarc/standard/docs/gke/route-trigger-api-gateway), [https://docs.cloud.google.com/eventarc/standard/docs/gke/route-trigger-apigee-api-hub](https://docs.cloud.google.com/eventarc/standard/docs/gke/route-trigger-apigee-api-hub), [https://docs.cloud.google.com/eventarc/standard/docs/event-types](https://docs.cloud.google.com/eventarc/standard/docs/event-types), [https://docs.cloud.google.com/eventarc/standard/docs/gke/route-trigger-apigee-registry](https://docs.cloud.google.com/eventarc/standard/docs/gke/route-trigger-apigee-registry))
- certificate (evidence: [https://docs.cloud.google.com/eventarc/standard/docs/gke/route-trigger-api-gateway](https://docs.cloud.google.com/eventarc/standard/docs/gke/route-trigger-api-gateway), [https://docs.cloud.google.com/eventarc/standard/docs/gke/route-trigger-apigee-api-hub](https://docs.cloud.google.com/eventarc/standard/docs/gke/route-trigger-apigee-api-hub), [https://docs.cloud.google.com/eventarc/standard/docs/event-types](https://docs.cloud.google.com/eventarc/standard/docs/event-types), [https://docs.cloud.google.com/eventarc/standard/docs/gke/route-trigger-apigee-registry](https://docs.cloud.google.com/eventarc/standard/docs/gke/route-trigger-apigee-registry))
- iam (evidence: [https://docs.cloud.google.com/eventarc/standard/docs/gke/route-trigger-api-gateway](https://docs.cloud.google.com/eventarc/standard/docs/gke/route-trigger-api-gateway), [https://docs.cloud.google.com/eventarc/standard/docs/gke/route-trigger-apigee-api-hub](https://docs.cloud.google.com/eventarc/standard/docs/gke/route-trigger-apigee-api-hub), [https://docs.cloud.google.com/eventarc/standard/docs/event-types](https://docs.cloud.google.com/eventarc/standard/docs/event-types), [https://docs.cloud.google.com/eventarc/standard/docs/gke/route-trigger-apigee-registry](https://docs.cloud.google.com/eventarc/standard/docs/gke/route-trigger-apigee-registry))
- policy (evidence: [https://docs.cloud.google.com/eventarc/standard/docs/gke/route-trigger-api-gateway](https://docs.cloud.google.com/eventarc/standard/docs/gke/route-trigger-api-gateway), [https://docs.cloud.google.com/eventarc/standard/docs/gke/route-trigger-apigee-api-hub](https://docs.cloud.google.com/eventarc/standard/docs/gke/route-trigger-apigee-api-hub), [https://docs.cloud.google.com/eventarc/standard/docs/event-types](https://docs.cloud.google.com/eventarc/standard/docs/event-types), [https://docs.cloud.google.com/eventarc/standard/docs/gke/route-trigger-apigee-registry](https://docs.cloud.google.com/eventarc/standard/docs/gke/route-trigger-apigee-registry))
- private (evidence: [https://docs.cloud.google.com/eventarc/standard/docs/gke/route-trigger-api-gateway](https://docs.cloud.google.com/eventarc/standard/docs/gke/route-trigger-api-gateway), [https://docs.cloud.google.com/eventarc/standard/docs/gke/route-trigger-apigee-api-hub](https://docs.cloud.google.com/eventarc/standard/docs/gke/route-trigger-apigee-api-hub), [https://docs.cloud.google.com/eventarc/standard/docs/event-types](https://docs.cloud.google.com/eventarc/standard/docs/event-types), [https://docs.cloud.google.com/eventarc/standard/docs/gke/route-trigger-apigee-registry](https://docs.cloud.google.com/eventarc/standard/docs/gke/route-trigger-apigee-registry))
- token (evidence: [https://docs.cloud.google.com/eventarc/standard/docs/gke/route-trigger-api-gateway](https://docs.cloud.google.com/eventarc/standard/docs/gke/route-trigger-api-gateway), [https://docs.cloud.google.com/eventarc/standard/docs/gke/route-trigger-apigee-api-hub](https://docs.cloud.google.com/eventarc/standard/docs/gke/route-trigger-apigee-api-hub), [https://docs.cloud.google.com/eventarc/standard/docs/event-types](https://docs.cloud.google.com/eventarc/standard/docs/event-types), [https://docs.cloud.google.com/eventarc/standard/docs/gke/route-trigger-apigee-registry](https://docs.cloud.google.com/eventarc/standard/docs/gke/route-trigger-apigee-registry))

## Official Evidence

- [https://docs.cloud.google.com/eventarc/standard/docs/event-types](https://docs.cloud.google.com/eventarc/standard/docs/event-types)
- [https://docs.cloud.google.com/eventarc/standard/docs/gke/route-trigger-api-gateway](https://docs.cloud.google.com/eventarc/standard/docs/gke/route-trigger-api-gateway)
- [https://docs.cloud.google.com/eventarc/standard/docs/gke/route-trigger-apigee-api-hub](https://docs.cloud.google.com/eventarc/standard/docs/gke/route-trigger-apigee-api-hub)
- [https://docs.cloud.google.com/eventarc/standard/docs/gke/route-trigger-apigee-registry](https://docs.cloud.google.com/eventarc/standard/docs/gke/route-trigger-apigee-registry)
