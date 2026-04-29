# Customer Engineer Advanced Editor default role

Product: Looker
Feature slug: `customer-engineer-advanced-editor-default-role`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

A new default role grants support access to Google Cloud customer engineers.

## Lifecycle

- Latest feature date: 2025-08-13
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
- allow
- audit
- auth
- iam
- key
- kms
- logging
- permission
- policy
- private
- role
- security
- token

## Official Evidence

- [https://docs.cloud.google.com/bigquery/docs/access-control](https://docs.cloud.google.com/bigquery/docs/access-control)
- [https://docs.cloud.google.com/looker/docs/admin-panel-general-support-access](https://docs.cloud.google.com/looker/docs/admin-panel-general-support-access)
- [https://docs.cloud.google.com/looker/docs/admin-panel-users-roles](https://docs.cloud.google.com/looker/docs/admin-panel-users-roles)
