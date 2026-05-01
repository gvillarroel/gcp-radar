# Access Approval support for Cloud Healthcare API support

Product: Access Approval
Feature slug: `access-approval-support-for-cloud-healthcare-api-support`
Coverage: `LOW`
IAM mapping: `explicit`

## Technical Summary

Cloud Healthcare API support is supported by Access Approval.

## Lifecycle

- Latest feature date: 2024-11-27
- Deprecation date: none recorded
- Status: feature_observed

## IAM

Explicit IAM evidence was found in the supporting documentation.

Roles:

- `roles/accessapproval.approver`

## Security Capabilities

- access
- auth
- certificate
- iam
- logging
- policy
- role
- secret
- security

## Official Evidence

- [https://docs.cloud.google.com/app-hub/docs/apis](https://docs.cloud.google.com/app-hub/docs/apis)
- [https://docs.cloud.google.com/app-hub/docs/supported-resources](https://docs.cloud.google.com/app-hub/docs/supported-resources)
- [https://docs.cloud.google.com/assured-workloads/access-approval/docs/using-terraform](https://docs.cloud.google.com/assured-workloads/access-approval/docs/using-terraform)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
- `warn:generic_supporting_pages` Supporting pages do not mention any informative feature tokens.
- `warn:support_matrix_only_evidence` The feature is backed only by broad support-matrix style evidence, not a dedicated page for the supported target.
