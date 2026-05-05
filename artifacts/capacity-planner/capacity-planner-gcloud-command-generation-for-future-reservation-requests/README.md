# Capacity Planner gcloud command generation for future reservation requests

Product: Capacity Planner
Feature slug: `capacity-planner-gcloud-command-generation-for-future-reservation-requests`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Capacity Planner’s future reservation request feature allows users to create future Compute Engine reservation requests and, for batch scenarios, generate corresponding gcloud CLI commands. In this flow, users select capacity usage data (for instances or GPUs from usage/forecast sources) and create one or more requests; the generated commands can then be optionally edited to customize per-request values. The documented permissions and roles indicate the feature is scoped by project, folder, or organization and uses forecasted/actual capacity data to support planning decisions.

## Lifecycle

- Latest feature date: 2024-07-29
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
