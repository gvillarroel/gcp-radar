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

- access (evidence: [https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/organizations/getServiceAccount](https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/organizations/getServiceAccount), [https://docs.cloud.google.com/assured-workloads/access-approval/docs/supported-services](https://docs.cloud.google.com/assured-workloads/access-approval/docs/supported-services), [https://docs.cloud.google.com/app-hub/docs/supported-resources](https://docs.cloud.google.com/app-hub/docs/supported-resources))
- armor (evidence: [https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/organizations/getServiceAccount](https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/organizations/getServiceAccount), [https://docs.cloud.google.com/assured-workloads/access-approval/docs/supported-services](https://docs.cloud.google.com/assured-workloads/access-approval/docs/supported-services), [https://docs.cloud.google.com/app-hub/docs/supported-resources](https://docs.cloud.google.com/app-hub/docs/supported-resources))
- auth (evidence: [https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/organizations/getServiceAccount](https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/organizations/getServiceAccount), [https://docs.cloud.google.com/assured-workloads/access-approval/docs/supported-services](https://docs.cloud.google.com/assured-workloads/access-approval/docs/supported-services), [https://docs.cloud.google.com/app-hub/docs/supported-resources](https://docs.cloud.google.com/app-hub/docs/supported-resources))
- authorization (evidence: [https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/organizations/getServiceAccount](https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/organizations/getServiceAccount), [https://docs.cloud.google.com/assured-workloads/access-approval/docs/supported-services](https://docs.cloud.google.com/assured-workloads/access-approval/docs/supported-services), [https://docs.cloud.google.com/app-hub/docs/supported-resources](https://docs.cloud.google.com/app-hub/docs/supported-resources))
- certificate (evidence: [https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/organizations/getServiceAccount](https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/organizations/getServiceAccount), [https://docs.cloud.google.com/assured-workloads/access-approval/docs/supported-services](https://docs.cloud.google.com/assured-workloads/access-approval/docs/supported-services), [https://docs.cloud.google.com/app-hub/docs/supported-resources](https://docs.cloud.google.com/app-hub/docs/supported-resources))
- iam (evidence: [https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/organizations/getServiceAccount](https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/organizations/getServiceAccount), [https://docs.cloud.google.com/assured-workloads/access-approval/docs/supported-services](https://docs.cloud.google.com/assured-workloads/access-approval/docs/supported-services), [https://docs.cloud.google.com/app-hub/docs/supported-resources](https://docs.cloud.google.com/app-hub/docs/supported-resources))
- identity (evidence: [https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/organizations/getServiceAccount](https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/organizations/getServiceAccount), [https://docs.cloud.google.com/assured-workloads/access-approval/docs/supported-services](https://docs.cloud.google.com/assured-workloads/access-approval/docs/supported-services), [https://docs.cloud.google.com/app-hub/docs/supported-resources](https://docs.cloud.google.com/app-hub/docs/supported-resources))
- key (evidence: [https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/organizations/getServiceAccount](https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/organizations/getServiceAccount), [https://docs.cloud.google.com/assured-workloads/access-approval/docs/supported-services](https://docs.cloud.google.com/assured-workloads/access-approval/docs/supported-services), [https://docs.cloud.google.com/app-hub/docs/supported-resources](https://docs.cloud.google.com/app-hub/docs/supported-resources))
- kms (evidence: [https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/organizations/getServiceAccount](https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/organizations/getServiceAccount), [https://docs.cloud.google.com/assured-workloads/access-approval/docs/supported-services](https://docs.cloud.google.com/assured-workloads/access-approval/docs/supported-services), [https://docs.cloud.google.com/app-hub/docs/supported-resources](https://docs.cloud.google.com/app-hub/docs/supported-resources))
- logging (evidence: [https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/organizations/getServiceAccount](https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/organizations/getServiceAccount), [https://docs.cloud.google.com/assured-workloads/access-approval/docs/supported-services](https://docs.cloud.google.com/assured-workloads/access-approval/docs/supported-services), [https://docs.cloud.google.com/app-hub/docs/supported-resources](https://docs.cloud.google.com/app-hub/docs/supported-resources))
- permission (evidence: [https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/organizations/getServiceAccount](https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/organizations/getServiceAccount), [https://docs.cloud.google.com/assured-workloads/access-approval/docs/supported-services](https://docs.cloud.google.com/assured-workloads/access-approval/docs/supported-services), [https://docs.cloud.google.com/app-hub/docs/supported-resources](https://docs.cloud.google.com/app-hub/docs/supported-resources))
- policy (evidence: [https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/organizations/getServiceAccount](https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/organizations/getServiceAccount), [https://docs.cloud.google.com/assured-workloads/access-approval/docs/supported-services](https://docs.cloud.google.com/assured-workloads/access-approval/docs/supported-services), [https://docs.cloud.google.com/app-hub/docs/supported-resources](https://docs.cloud.google.com/app-hub/docs/supported-resources))
- secret (evidence: [https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/organizations/getServiceAccount](https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/organizations/getServiceAccount), [https://docs.cloud.google.com/assured-workloads/access-approval/docs/supported-services](https://docs.cloud.google.com/assured-workloads/access-approval/docs/supported-services), [https://docs.cloud.google.com/app-hub/docs/supported-resources](https://docs.cloud.google.com/app-hub/docs/supported-resources))
- security (evidence: [https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/organizations/getServiceAccount](https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/organizations/getServiceAccount), [https://docs.cloud.google.com/assured-workloads/access-approval/docs/supported-services](https://docs.cloud.google.com/assured-workloads/access-approval/docs/supported-services), [https://docs.cloud.google.com/app-hub/docs/supported-resources](https://docs.cloud.google.com/app-hub/docs/supported-resources))

## Official Evidence

- [https://docs.cloud.google.com/app-hub/docs/supported-resources](https://docs.cloud.google.com/app-hub/docs/supported-resources)
- [https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/organizations/getServiceAccount](https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/organizations/getServiceAccount)
- [https://docs.cloud.google.com/assured-workloads/access-approval/docs/supported-services](https://docs.cloud.google.com/assured-workloads/access-approval/docs/supported-services)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
- `warn:support_matrix_only_evidence` The feature is backed only by broad support-matrix style evidence, not a dedicated page for the supported target.
