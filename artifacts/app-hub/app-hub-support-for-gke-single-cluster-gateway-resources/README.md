# App Hub support for GKE single-cluster Gateway resources

Product: App Hub
Feature slug: `app-hub-support-for-gke-single-cluster-gateway-resources`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

App Hub now includes GKE single-cluster Gateway as a supported resource type in Preview.

## Lifecycle

- Latest feature date: 2025-03-14
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- allow
- auth
- certificate
- key
- logging
- permission
- policy
- role
- secret

## Official Evidence

- [https://docs.cloud.google.com/app-hub/docs/key-concepts](https://docs.cloud.google.com/app-hub/docs/key-concepts)
- [https://docs.cloud.google.com/app-hub/docs/reference/rest/Shared.Types/LogType](https://docs.cloud.google.com/app-hub/docs/reference/rest/Shared.Types/LogType)
- [https://docs.cloud.google.com/app-hub/docs/supported-resources](https://docs.cloud.google.com/app-hub/docs/supported-resources)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
- `warn:support_matrix_only_evidence` The feature is backed only by broad support-matrix style evidence, not a dedicated page for the supported target.
