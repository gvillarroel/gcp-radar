# Capacity Planner capacity requests

Product: Capacity Planner
Feature slug: `capacity-planner-capacity-requests`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Capacity Planner’s future reservation request feature lets users create capacity requests for Compute Engine resources from selected usage data, then define request properties (request name, name prefix, auto-delete option, instance count, and share type) and create and submit draft requests. It also supports creating multiple requests, including via generated gcloud commands with shared values, with optional per-request customization. If a future reservation request is approved, the requester commits to paying for the reserved resources for the full reservation period regardless of actual usage, and the documentation describes it in the context of zone-specific capacity needs.

## Lifecycle

- Latest feature date: 2025-08-25
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/capacity-planner/docs/choose-request-method](https://docs.cloud.google.com/capacity-planner/docs/choose-request-method))
- allow (evidence: [https://docs.cloud.google.com/capacity-planner/docs/choose-request-method](https://docs.cloud.google.com/capacity-planner/docs/choose-request-method))
- iam (evidence: [https://docs.cloud.google.com/capacity-planner/docs/choose-request-method](https://docs.cloud.google.com/capacity-planner/docs/choose-request-method))
- identity (evidence: [https://docs.cloud.google.com/capacity-planner/docs/choose-request-method](https://docs.cloud.google.com/capacity-planner/docs/choose-request-method))
- permission (evidence: [https://docs.cloud.google.com/capacity-planner/docs/choose-request-method](https://docs.cloud.google.com/capacity-planner/docs/choose-request-method))
- role (evidence: [https://docs.cloud.google.com/capacity-planner/docs/choose-request-method](https://docs.cloud.google.com/capacity-planner/docs/choose-request-method))

## Official Evidence

- [https://docs.cloud.google.com/capacity-planner/docs/choose-request-method](https://docs.cloud.google.com/capacity-planner/docs/choose-request-method)
