# Access Approval support for Organization Policy Service support

Product: Access Approval
Feature slug: `access-approval-support-for-organization-policy-service-support`
Coverage: `LOW`
IAM mapping: `explicit`

## Technical Summary

Organization Policy Service support is supported by Access Approval.

## Lifecycle

- Latest feature date: 2021-11-11
- Deprecation date: none recorded
- Status: feature_observed

## IAM

Explicit IAM evidence was found in the supporting documentation.

Roles:

- `roles/accessapproval.admin`
- `roles/accessapproval.approver`
- `roles/accessapproval.configEditor`

Permissions:

- `accessapproval.serviceAccounts.get`

## Security Capabilities

- access
- armor
- auth
- authorization
- certificate
- iam
- identity
- key
- kms
- logging
- permission
- policy
- secret
- security

## Official Evidence

- [https://docs.cloud.google.com/app-hub/docs/supported-resources](https://docs.cloud.google.com/app-hub/docs/supported-resources)
- [https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/organizations/getServiceAccount](https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/organizations/getServiceAccount)
- [https://docs.cloud.google.com/assured-workloads/access-approval/docs/supported-services](https://docs.cloud.google.com/assured-workloads/access-approval/docs/supported-services)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
- `warn:support_matrix_only_evidence` The feature is backed only by broad support-matrix style evidence, not a dedicated page for the supported target.
