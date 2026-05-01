# App Hub support for Cloud Run jobs

Product: App Hub
Feature slug: `app-hub-support-for-cloud-run-jobs`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

App Hub now includes Cloud Run jobs as a supported resource type in Preview.

## Lifecycle

- Latest feature date: 2025-03-14
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- auth
- certificate
- logging
- permission
- policy
- role
- secret

## Official Evidence

- [https://docs.cloud.google.com/app-hub/docs/create-reusable-template](https://docs.cloud.google.com/app-hub/docs/create-reusable-template)
- [https://docs.cloud.google.com/app-hub/docs/supported-resources](https://docs.cloud.google.com/app-hub/docs/supported-resources)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-apphub/latest/overview](https://docs.cloud.google.com/java/docs/reference/google-cloud-apphub/latest/overview)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
- `warn:support_matrix_only_evidence` The feature is backed only by broad support-matrix style evidence, not a dedicated page for the supported target.
