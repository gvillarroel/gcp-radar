# History view

Product: Access Approval
Feature slug: `history-view`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

The Access Approval UI includes a History view for previously acted-on requests with status, timing, details, and audit logs.

## Lifecycle

- Latest feature date: 2020-10-19
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
- audit
- iam
- identity
- key
- logging
- permission
- role

## Official Evidence

- [https://docs.cloud.google.com/app-hub/docs/overview](https://docs.cloud.google.com/app-hub/docs/overview)
- [https://docs.cloud.google.com/assured-workloads/access-approval/docs/audit-logging](https://docs.cloud.google.com/assured-workloads/access-approval/docs/audit-logging)
- [https://docs.cloud.google.com/assured-workloads/access-approval/docs/view-historical-requests](https://docs.cloud.google.com/assured-workloads/access-approval/docs/view-historical-requests)
