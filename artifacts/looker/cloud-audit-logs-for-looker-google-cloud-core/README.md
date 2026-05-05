# Cloud Audit Logs for Looker (Google Cloud Core)

Product: Looker
Feature slug: `cloud-audit-logs-for-looker-google-cloud-core`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Cloud Audit Logs are generally available for Looker (Google Cloud Core) instances; Cloud Audit Logs now provide comprehensive audit logging for Looker (Google Cloud Core), including full Data Access and System Event coverage.

## Lifecycle

- Latest feature date: 2024-10-09
- Deprecation date: none recorded
- Status: feature_observed

## IAM

Explicit IAM evidence was found in the supporting documentation.

Roles:

- `roles/accessapproval.admin`
- `roles/accessapproval.approver`
- `roles/accessapproval.configEditor`

Permissions:

- `resourcemanager.projects.get`
- `resourcemanager.projects.list`

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/looker/docs/admin-panel-users-roles](https://docs.cloud.google.com/looker/docs/admin-panel-users-roles), [https://docs.cloud.google.com/looker/docs/looker-core-access-control](https://docs.cloud.google.com/looker/docs/looker-core-access-control), [https://docs.cloud.google.com/looker/docs/best-practices/looker-support-details](https://docs.cloud.google.com/looker/docs/best-practices/looker-support-details))
- audit (evidence: [https://docs.cloud.google.com/looker/docs/admin-panel-users-roles](https://docs.cloud.google.com/looker/docs/admin-panel-users-roles), [https://docs.cloud.google.com/looker/docs/looker-core-access-control](https://docs.cloud.google.com/looker/docs/looker-core-access-control), [https://docs.cloud.google.com/looker/docs/best-practices/looker-support-details](https://docs.cloud.google.com/looker/docs/best-practices/looker-support-details))
- auth (evidence: [https://docs.cloud.google.com/looker/docs/admin-panel-users-roles](https://docs.cloud.google.com/looker/docs/admin-panel-users-roles), [https://docs.cloud.google.com/looker/docs/looker-core-access-control](https://docs.cloud.google.com/looker/docs/looker-core-access-control), [https://docs.cloud.google.com/looker/docs/best-practices/looker-support-details](https://docs.cloud.google.com/looker/docs/best-practices/looker-support-details))
- iam (evidence: [https://docs.cloud.google.com/looker/docs/admin-panel-users-roles](https://docs.cloud.google.com/looker/docs/admin-panel-users-roles), [https://docs.cloud.google.com/looker/docs/looker-core-access-control](https://docs.cloud.google.com/looker/docs/looker-core-access-control), [https://docs.cloud.google.com/looker/docs/best-practices/looker-support-details](https://docs.cloud.google.com/looker/docs/best-practices/looker-support-details))
- logging (evidence: [https://docs.cloud.google.com/looker/docs/admin-panel-users-roles](https://docs.cloud.google.com/looker/docs/admin-panel-users-roles), [https://docs.cloud.google.com/looker/docs/looker-core-access-control](https://docs.cloud.google.com/looker/docs/looker-core-access-control), [https://docs.cloud.google.com/looker/docs/best-practices/looker-support-details](https://docs.cloud.google.com/looker/docs/best-practices/looker-support-details))
- permission (evidence: [https://docs.cloud.google.com/looker/docs/admin-panel-users-roles](https://docs.cloud.google.com/looker/docs/admin-panel-users-roles), [https://docs.cloud.google.com/looker/docs/looker-core-access-control](https://docs.cloud.google.com/looker/docs/looker-core-access-control), [https://docs.cloud.google.com/looker/docs/best-practices/looker-support-details](https://docs.cloud.google.com/looker/docs/best-practices/looker-support-details))
- private (evidence: [https://docs.cloud.google.com/looker/docs/admin-panel-users-roles](https://docs.cloud.google.com/looker/docs/admin-panel-users-roles), [https://docs.cloud.google.com/looker/docs/looker-core-access-control](https://docs.cloud.google.com/looker/docs/looker-core-access-control), [https://docs.cloud.google.com/looker/docs/best-practices/looker-support-details](https://docs.cloud.google.com/looker/docs/best-practices/looker-support-details))
- role (evidence: [https://docs.cloud.google.com/looker/docs/admin-panel-users-roles](https://docs.cloud.google.com/looker/docs/admin-panel-users-roles), [https://docs.cloud.google.com/looker/docs/looker-core-access-control](https://docs.cloud.google.com/looker/docs/looker-core-access-control), [https://docs.cloud.google.com/looker/docs/best-practices/looker-support-details](https://docs.cloud.google.com/looker/docs/best-practices/looker-support-details))

## Official Evidence

- [https://docs.cloud.google.com/looker/docs/admin-panel-users-roles](https://docs.cloud.google.com/looker/docs/admin-panel-users-roles)
- [https://docs.cloud.google.com/looker/docs/best-practices/looker-support-details](https://docs.cloud.google.com/looker/docs/best-practices/looker-support-details)
- [https://docs.cloud.google.com/looker/docs/looker-core-access-control](https://docs.cloud.google.com/looker/docs/looker-core-access-control)
