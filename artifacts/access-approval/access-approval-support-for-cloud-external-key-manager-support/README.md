# Access Approval support for Cloud External Key Manager support

Product: Access Approval
Feature slug: `access-approval-support-for-cloud-external-key-manager-support`
Coverage: `LOW`
IAM mapping: `explicit`

## Technical Summary

Cloud External Key Manager support is supported by Access Approval.

## Lifecycle

- Latest feature date: 2021-06-21
- Deprecation date: none recorded
- Status: feature_observed

## IAM

Explicit IAM evidence was found in the supporting documentation.

Roles:

- `roles/accessapproval.approver`
- `roles/accessapproval.configEditor`

## Security Capabilities

- access
- allow
- armor
- auth
- certificate
- encrypt
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

- [https://docs.cloud.google.com/assured-workloads/access-approval/docs/key-access-justifications](https://docs.cloud.google.com/assured-workloads/access-approval/docs/key-access-justifications)
- [https://docs.cloud.google.com/assured-workloads/access-approval/docs/review-approve-access-requests-google-keys](https://docs.cloud.google.com/assured-workloads/access-approval/docs/review-approve-access-requests-google-keys)
- [https://docs.cloud.google.com/assured-workloads/access-approval/docs/supported-services](https://docs.cloud.google.com/assured-workloads/access-approval/docs/supported-services)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
