# Additional permission set permissions

Product: Looker
Feature slug: `additional-permission-set-permissions`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Permission sets now support manage_groups, manage_roles, manage_user_attributes, manage_embed_settings, manage_themes, and manage_privatelabel permissions.

## Lifecycle

- Latest feature date: 2024-02-14
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
- iam
- identity
- key
- kms
- permission
- policy
- private
- role
- token

## Official Evidence

- [https://docs.cloud.google.com/bigquery/docs/access-control](https://docs.cloud.google.com/bigquery/docs/access-control)
- [https://docs.cloud.google.com/bigquery/docs/hadoop-permissions-migration](https://docs.cloud.google.com/bigquery/docs/hadoop-permissions-migration)
- [https://docs.cloud.google.com/looker/docs/access-control-and-permission-management](https://docs.cloud.google.com/looker/docs/access-control-and-permission-management)
