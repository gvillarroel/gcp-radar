# Capacity Planner single-machine-type future reservation requests in Cloud Console

Product: Capacity Planner
Feature slug: `capacity-planner-single-machine-type-future-reservation-requests-in-cloud-console`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Capacity Planner in Google Cloud allows users to create future reservation requests from the Cloud Console by selecting a Compute Engine resource with usage data, then entering request details (name, name prefix, auto-delete option, instance count, and share type) and creating draft requests before submitting. The documented flow supports requests for one or more machine types and requires specific access (for example, compute.futureReservations.create on the owner project and the Compute Future Reservation User role to create requests). Evidence for a strict single-machine-type-only workflow is weak in these pages; they describe future reservation requests generally, including single or multiple machine types.

## Lifecycle

- Latest feature date: 2024-12-19
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- allow
- auth
- iam
- identity
- permission
- role

## Official Evidence

- [https://docs.cloud.google.com/capacity-planner/docs/choose-request-method](https://docs.cloud.google.com/capacity-planner/docs/choose-request-method)
- [https://docs.cloud.google.com/capacity-planner/docs/view-data](https://docs.cloud.google.com/capacity-planner/docs/view-data)
