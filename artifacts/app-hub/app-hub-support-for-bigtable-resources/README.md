# App Hub support for Bigtable resources

Product: App Hub
Feature slug: `app-hub-support-for-bigtable-resources`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

App Hub now includes Bigtable as a supported resource type in Preview.

## Lifecycle

- Latest feature date: 2025-02-24
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- auth
- certificate
- iam
- logging
- permission
- policy
- secret
- token

## Official Evidence

- [https://docs.cloud.google.com/app-hub/docs/resources](https://docs.cloud.google.com/app-hub/docs/resources)
- [https://docs.cloud.google.com/app-hub/docs/supported-resources](https://docs.cloud.google.com/app-hub/docs/supported-resources)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-apphub/latest/com.google.cloud.apphub.v1.AppHubClient](https://docs.cloud.google.com/java/docs/reference/google-cloud-apphub/latest/com.google.cloud.apphub.v1.AppHubClient)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
- `warn:support_matrix_only_evidence` The feature is backed only by broad support-matrix style evidence, not a dedicated page for the supported target.
