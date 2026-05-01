# Access Approval support for Cloud Billing

Product: Access Approval
Feature slug: `access-approval-support-for-cloud-billing`
Coverage: `LOW`
IAM mapping: `explicit`

## Technical Summary

Cloud Billing is supported by Access Approval.

## Lifecycle

- Latest feature date: 2025-11-19
- Deprecation date: none recorded
- Status: feature_observed

## IAM

Explicit IAM evidence was found in the supporting documentation.

Roles:

- `roles/accessapproval.admin`
- `roles/accessapproval.approver`
- `roles/accessapproval.configEditor`

Permissions:

- `accessapproval.requests.invalidate`
- `accessapproval.settings.delete`
- `accessapproval.settings.update`

## Security Capabilities

- access
- armor
- audit
- iam
- identity
- key
- kms
- logging
- permission
- policy
- role
- secret
- security

## Official Evidence

- [https://docs.cloud.google.com/assured-workloads/access-approval/docs/audit-logging](https://docs.cloud.google.com/assured-workloads/access-approval/docs/audit-logging)
- [https://docs.cloud.google.com/assured-workloads/access-approval/docs/supported-services](https://docs.cloud.google.com/assured-workloads/access-approval/docs/supported-services)
- [https://docs.cloud.google.com/assured-workloads/access-approval/docs/using-terraform](https://docs.cloud.google.com/assured-workloads/access-approval/docs/using-terraform)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
- `warn:thin_token_overlap` Supporting pages only weakly overlap with informative feature tokens.
- `warn:support_matrix_only_evidence` The feature is backed only by broad support-matrix style evidence, not a dedicated page for the supported target.
