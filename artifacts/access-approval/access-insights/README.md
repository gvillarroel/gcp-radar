# Access insights

Product: Access Approval
Feature slug: `access-insights`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Access insights lets you generate and download a filtered organization-wide report of Google administrative access to your data.

## Lifecycle

- Latest feature date: 2025-12-16
- Deprecation date: none recorded
- Status: feature_observed

## IAM

Explicit IAM evidence was found in the supporting documentation.

Roles:

- `roles/accessapproval.admin`
- `roles/accessapproval.approver`
- `roles/accessapproval.configEditor`

Permissions:

- `accessapproval.requests.list`
- `accessapproval.settings.get`

## Security Capabilities

- access
- auth
- authorization
- iam
- permission
- role
- security

## Official Evidence

- [https://docs.cloud.google.com/assured-workloads/access-approval/docs/access-insights](https://docs.cloud.google.com/assured-workloads/access-approval/docs/access-insights)
- [https://docs.cloud.google.com/assured-workloads/access-approval/docs/export-access-transparency-report](https://docs.cloud.google.com/assured-workloads/access-approval/docs/export-access-transparency-report)
- [https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/organizations.approvalRequests/list](https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/organizations.approvalRequests/list)
