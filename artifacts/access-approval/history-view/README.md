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

- access (evidence: [https://docs.cloud.google.com/assured-workloads/access-approval/docs/view-historical-requests](https://docs.cloud.google.com/assured-workloads/access-approval/docs/view-historical-requests), [https://docs.cloud.google.com/app-hub/docs/overview](https://docs.cloud.google.com/app-hub/docs/overview), [https://docs.cloud.google.com/assured-workloads/access-approval/docs/audit-logging](https://docs.cloud.google.com/assured-workloads/access-approval/docs/audit-logging))
- audit (evidence: [https://docs.cloud.google.com/assured-workloads/access-approval/docs/view-historical-requests](https://docs.cloud.google.com/assured-workloads/access-approval/docs/view-historical-requests), [https://docs.cloud.google.com/app-hub/docs/overview](https://docs.cloud.google.com/app-hub/docs/overview), [https://docs.cloud.google.com/assured-workloads/access-approval/docs/audit-logging](https://docs.cloud.google.com/assured-workloads/access-approval/docs/audit-logging))
- iam (evidence: [https://docs.cloud.google.com/assured-workloads/access-approval/docs/view-historical-requests](https://docs.cloud.google.com/assured-workloads/access-approval/docs/view-historical-requests), [https://docs.cloud.google.com/app-hub/docs/overview](https://docs.cloud.google.com/app-hub/docs/overview), [https://docs.cloud.google.com/assured-workloads/access-approval/docs/audit-logging](https://docs.cloud.google.com/assured-workloads/access-approval/docs/audit-logging))
- identity (evidence: [https://docs.cloud.google.com/assured-workloads/access-approval/docs/view-historical-requests](https://docs.cloud.google.com/assured-workloads/access-approval/docs/view-historical-requests), [https://docs.cloud.google.com/app-hub/docs/overview](https://docs.cloud.google.com/app-hub/docs/overview), [https://docs.cloud.google.com/assured-workloads/access-approval/docs/audit-logging](https://docs.cloud.google.com/assured-workloads/access-approval/docs/audit-logging))
- key (evidence: [https://docs.cloud.google.com/assured-workloads/access-approval/docs/view-historical-requests](https://docs.cloud.google.com/assured-workloads/access-approval/docs/view-historical-requests), [https://docs.cloud.google.com/app-hub/docs/overview](https://docs.cloud.google.com/app-hub/docs/overview), [https://docs.cloud.google.com/assured-workloads/access-approval/docs/audit-logging](https://docs.cloud.google.com/assured-workloads/access-approval/docs/audit-logging))
- logging (evidence: [https://docs.cloud.google.com/assured-workloads/access-approval/docs/view-historical-requests](https://docs.cloud.google.com/assured-workloads/access-approval/docs/view-historical-requests), [https://docs.cloud.google.com/app-hub/docs/overview](https://docs.cloud.google.com/app-hub/docs/overview), [https://docs.cloud.google.com/assured-workloads/access-approval/docs/audit-logging](https://docs.cloud.google.com/assured-workloads/access-approval/docs/audit-logging))
- permission (evidence: [https://docs.cloud.google.com/assured-workloads/access-approval/docs/view-historical-requests](https://docs.cloud.google.com/assured-workloads/access-approval/docs/view-historical-requests), [https://docs.cloud.google.com/app-hub/docs/overview](https://docs.cloud.google.com/app-hub/docs/overview), [https://docs.cloud.google.com/assured-workloads/access-approval/docs/audit-logging](https://docs.cloud.google.com/assured-workloads/access-approval/docs/audit-logging))
- role (evidence: [https://docs.cloud.google.com/assured-workloads/access-approval/docs/view-historical-requests](https://docs.cloud.google.com/assured-workloads/access-approval/docs/view-historical-requests), [https://docs.cloud.google.com/app-hub/docs/overview](https://docs.cloud.google.com/app-hub/docs/overview), [https://docs.cloud.google.com/assured-workloads/access-approval/docs/audit-logging](https://docs.cloud.google.com/assured-workloads/access-approval/docs/audit-logging))

## Official Evidence

- [https://docs.cloud.google.com/app-hub/docs/overview](https://docs.cloud.google.com/app-hub/docs/overview)
- [https://docs.cloud.google.com/assured-workloads/access-approval/docs/audit-logging](https://docs.cloud.google.com/assured-workloads/access-approval/docs/audit-logging)
- [https://docs.cloud.google.com/assured-workloads/access-approval/docs/view-historical-requests](https://docs.cloud.google.com/assured-workloads/access-approval/docs/view-historical-requests)
