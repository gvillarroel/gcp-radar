# Cloud IAM support

Product: Access Approval
Feature slug: `cloud-iam-support`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

The Access Approval API supports Cloud IAM as an integrated supported service.

## Lifecycle

- Latest feature date: 2020-10-19
- Deprecation date: none recorded
- Status: feature_observed

## IAM

Explicit IAM evidence was found in the supporting documentation.

Roles:

- `roles/accessapproval.approver`
- `roles/accessapproval.configEditor`

## Security Capabilities

- access
- iam
- key
- permission
- role

## Official Evidence

- [https://docs.cloud.google.com/app-hub/docs/apis](https://docs.cloud.google.com/app-hub/docs/apis)
- [https://docs.cloud.google.com/assured-workloads/access-approval/docs/overview](https://docs.cloud.google.com/assured-workloads/access-approval/docs/overview)
- [https://docs.cloud.google.com/assured-workloads/access-approval/docs/review-approve-access-requests-google-keys](https://docs.cloud.google.com/assured-workloads/access-approval/docs/review-approve-access-requests-google-keys)

## Validation Findings

- `warn:thin_token_overlap` Supporting pages only weakly overlap with informative feature tokens.
