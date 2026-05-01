# Access Approval support for Dataform support

Product: Access Approval
Feature slug: `access-approval-support-for-dataform-support`
Coverage: `LOW`
IAM mapping: `explicit`

## Technical Summary

Dataform support is supported by Access Approval.

## Lifecycle

- Latest feature date: 2024-07-12
- Deprecation date: none recorded
- Status: feature_observed

## IAM

Explicit IAM evidence was found in the supporting documentation.

Roles:

- `roles/accessapproval.approver`

## Security Capabilities

- access
- audit
- auth
- certificate
- iam
- logging
- policy
- role
- secret
- security

## Official Evidence

- [https://docs.cloud.google.com/app-hub/docs/supported-resources](https://docs.cloud.google.com/app-hub/docs/supported-resources)
- [https://docs.cloud.google.com/assured-workloads/access-approval/docs/using-terraform](https://docs.cloud.google.com/assured-workloads/access-approval/docs/using-terraform)
- [https://docs.cloud.google.com/python/docs/reference/accessapproval/latest](https://docs.cloud.google.com/python/docs/reference/accessapproval/latest)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
- `warn:thin_token_overlap` Supporting pages only weakly overlap with informative feature tokens.
- `warn:support_matrix_only_evidence` The feature is backed only by broad support-matrix style evidence, not a dedicated page for the supported target.
