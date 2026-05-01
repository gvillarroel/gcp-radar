# Admin via IAM Looker role

Product: Looker
Feature slug: `admin-via-iam-looker-role`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Looker (Google Cloud core) instances support an admin role that is managed exclusively through IAM and grants full administrative privileges.

## Lifecycle

- Latest feature date: 2025-03-12
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

- access
- auth
- iam
- identity
- permission
- role
- token

## Official Evidence

- [https://docs.cloud.google.com/looker/docs/admin-panel-platform-lsp](https://docs.cloud.google.com/looker/docs/admin-panel-platform-lsp)
- [https://docs.cloud.google.com/looker/docs/admin-panel-users-roles](https://docs.cloud.google.com/looker/docs/admin-panel-users-roles)
- [https://docs.cloud.google.com/looker/docs/looker-core-access-control](https://docs.cloud.google.com/looker/docs/looker-core-access-control)
