# Model-scoped Gemini in Looker permission

Product: Looker
Feature slug: `model-scoped-gemini-in-looker-permission`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Lets Looker admins apply the gemini_in_looker permission to selected models instead of all models.

## Lifecycle

- Latest feature date: 2025-05-14
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
- credential
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
- [https://docs.cloud.google.com/looker/docs/access-control-and-permission-management](https://docs.cloud.google.com/looker/docs/access-control-and-permission-management)
- [https://docs.cloud.google.com/looker/docs/admin-panel-users-roles](https://docs.cloud.google.com/looker/docs/admin-panel-users-roles)
