# Access Approval support for Cloud HSM support

Product: Access Approval
Feature slug: `access-approval-support-for-cloud-hsm-support`
Coverage: `LOW`
IAM mapping: `explicit`

## Technical Summary

Cloud HSM support is supported by Access Approval.

## Lifecycle

- Latest feature date: 2021-06-21
- Deprecation date: none recorded
- Status: feature_observed

## IAM

Explicit IAM evidence was found in the supporting documentation.

Roles:

- `roles/accessapproval.approver`

## Security Capabilities

- access
- armor
- audit
- auth
- certificate
- iam
- identity
- key
- kms
- logging
- policy
- role
- secret
- security

## Official Evidence

- [https://docs.cloud.google.com/app-hub/docs/supported-resources](https://docs.cloud.google.com/app-hub/docs/supported-resources)
- [https://docs.cloud.google.com/assured-workloads/access-approval/docs/supported-services](https://docs.cloud.google.com/assured-workloads/access-approval/docs/supported-services)
- [https://docs.cloud.google.com/assured-workloads/access-approval/docs/using-terraform](https://docs.cloud.google.com/assured-workloads/access-approval/docs/using-terraform)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
- `warn:generic_supporting_pages` Supporting pages do not mention any informative feature tokens.
- `warn:support_matrix_only_evidence` The feature is backed only by broad support-matrix style evidence, not a dedicated page for the supported target.
