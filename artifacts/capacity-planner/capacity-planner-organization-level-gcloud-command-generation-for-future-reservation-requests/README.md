# Capacity Planner organization-level gcloud command generation for future reservation requests

Product: Capacity Planner
Feature slug: `capacity-planner-organization-level-gcloud-command-generation-for-future-reservation-requests`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Capacity Planner’s future reservation request feature enables users to create future reservation requests from usage and forecast data about Compute Engine resources, with support for planning capacity for projects, folders, or organizations. The recommended method for creating these requests is to configure them in the Google Cloud console and then generate gcloud CLI commands, which can be reviewed and edited before execution; separate Capacity Planner usage/forecast documentation also exposes organization-level query capabilities for usage and forecast data, so the feature can be applied at organization scope.

## Lifecycle

- Latest feature date: 2024-03-28
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/capacity-planner/docs/choose-request-method](https://docs.cloud.google.com/capacity-planner/docs/choose-request-method), [https://docs.cloud.google.com/capacity-planner/docs/view-data](https://docs.cloud.google.com/capacity-planner/docs/view-data))
- iam (evidence: [https://docs.cloud.google.com/capacity-planner/docs/choose-request-method](https://docs.cloud.google.com/capacity-planner/docs/choose-request-method), [https://docs.cloud.google.com/capacity-planner/docs/view-data](https://docs.cloud.google.com/capacity-planner/docs/view-data))
- identity (evidence: [https://docs.cloud.google.com/capacity-planner/docs/choose-request-method](https://docs.cloud.google.com/capacity-planner/docs/choose-request-method), [https://docs.cloud.google.com/capacity-planner/docs/view-data](https://docs.cloud.google.com/capacity-planner/docs/view-data))
- permission (evidence: [https://docs.cloud.google.com/capacity-planner/docs/choose-request-method](https://docs.cloud.google.com/capacity-planner/docs/choose-request-method), [https://docs.cloud.google.com/capacity-planner/docs/view-data](https://docs.cloud.google.com/capacity-planner/docs/view-data))
- role (evidence: [https://docs.cloud.google.com/capacity-planner/docs/choose-request-method](https://docs.cloud.google.com/capacity-planner/docs/choose-request-method), [https://docs.cloud.google.com/capacity-planner/docs/view-data](https://docs.cloud.google.com/capacity-planner/docs/view-data))

## Official Evidence

- [https://docs.cloud.google.com/capacity-planner/docs/choose-request-method](https://docs.cloud.google.com/capacity-planner/docs/choose-request-method)
- [https://docs.cloud.google.com/capacity-planner/docs/view-data](https://docs.cloud.google.com/capacity-planner/docs/view-data)
