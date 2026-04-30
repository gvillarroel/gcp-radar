# Capacity Planner future reservation request command generation

Product: Capacity Planner
Feature slug: `capacity-planner-future-reservation-request-command-generation`
Coverage: `HIGH`
IAM mapping: `unknown`

## Technical Summary

Capacity Planner allows users to create future Compute Engine zonal reservation requests after selecting a resource and its usage data, and can generate gcloud CLI commands for multiple requests at once. The generated commands default to matching values (such as auto-delete option, name prefix, and reservation period) across requests, and users can edit the commands to customize individual requests. To perform this, users need access to actual or forecasted usage data and the required permissions/roles for creating future reservation requests.

## Lifecycle

- Latest feature date: 2023-09-07
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- allow
- iam
- identity
- permission
- role

## Official Evidence

- [https://docs.cloud.google.com/capacity-planner/docs/choose-request-method](https://docs.cloud.google.com/capacity-planner/docs/choose-request-method)
- [https://docs.cloud.google.com/capacity-planner/docs/view-data](https://docs.cloud.google.com/capacity-planner/docs/view-data)
