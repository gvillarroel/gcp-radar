# group mapping management UI

Product: Looker
Feature slug: `group-mapping-management-ui`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Provides an updated interface for managing LDAP, SAML, and OpenID Connect group mappings.

## Lifecycle

- Latest feature date: 2026-01-08
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
- credential
- iam
- key
- kms
- logging
- permission
- policy
- role
- security
- token

## Official Evidence

- [https://docs.cloud.google.com/bigquery/docs/access-control](https://docs.cloud.google.com/bigquery/docs/access-control)
- [https://docs.cloud.google.com/looker/docs/access-control-and-permission-management](https://docs.cloud.google.com/looker/docs/access-control-and-permission-management)
- [https://docs.cloud.google.com/looker/docs/admin-panel-users-groups](https://docs.cloud.google.com/looker/docs/admin-panel-users-groups)
