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

- access (evidence: [https://docs.cloud.google.com/looker/docs/admin-panel-users-groups](https://docs.cloud.google.com/looker/docs/admin-panel-users-groups), [https://docs.cloud.google.com/bigquery/docs/access-control](https://docs.cloud.google.com/bigquery/docs/access-control), [https://docs.cloud.google.com/looker/docs/access-control-and-permission-management](https://docs.cloud.google.com/looker/docs/access-control-and-permission-management))
- auth (evidence: [https://docs.cloud.google.com/looker/docs/admin-panel-users-groups](https://docs.cloud.google.com/looker/docs/admin-panel-users-groups), [https://docs.cloud.google.com/bigquery/docs/access-control](https://docs.cloud.google.com/bigquery/docs/access-control), [https://docs.cloud.google.com/looker/docs/access-control-and-permission-management](https://docs.cloud.google.com/looker/docs/access-control-and-permission-management))
- credential (evidence: [https://docs.cloud.google.com/looker/docs/admin-panel-users-groups](https://docs.cloud.google.com/looker/docs/admin-panel-users-groups), [https://docs.cloud.google.com/bigquery/docs/access-control](https://docs.cloud.google.com/bigquery/docs/access-control), [https://docs.cloud.google.com/looker/docs/access-control-and-permission-management](https://docs.cloud.google.com/looker/docs/access-control-and-permission-management))
- iam (evidence: [https://docs.cloud.google.com/looker/docs/admin-panel-users-groups](https://docs.cloud.google.com/looker/docs/admin-panel-users-groups), [https://docs.cloud.google.com/bigquery/docs/access-control](https://docs.cloud.google.com/bigquery/docs/access-control), [https://docs.cloud.google.com/looker/docs/access-control-and-permission-management](https://docs.cloud.google.com/looker/docs/access-control-and-permission-management))
- key (evidence: [https://docs.cloud.google.com/looker/docs/admin-panel-users-groups](https://docs.cloud.google.com/looker/docs/admin-panel-users-groups), [https://docs.cloud.google.com/bigquery/docs/access-control](https://docs.cloud.google.com/bigquery/docs/access-control), [https://docs.cloud.google.com/looker/docs/access-control-and-permission-management](https://docs.cloud.google.com/looker/docs/access-control-and-permission-management))
- kms (evidence: [https://docs.cloud.google.com/looker/docs/admin-panel-users-groups](https://docs.cloud.google.com/looker/docs/admin-panel-users-groups), [https://docs.cloud.google.com/bigquery/docs/access-control](https://docs.cloud.google.com/bigquery/docs/access-control), [https://docs.cloud.google.com/looker/docs/access-control-and-permission-management](https://docs.cloud.google.com/looker/docs/access-control-and-permission-management))
- logging (evidence: [https://docs.cloud.google.com/looker/docs/admin-panel-users-groups](https://docs.cloud.google.com/looker/docs/admin-panel-users-groups), [https://docs.cloud.google.com/bigquery/docs/access-control](https://docs.cloud.google.com/bigquery/docs/access-control), [https://docs.cloud.google.com/looker/docs/access-control-and-permission-management](https://docs.cloud.google.com/looker/docs/access-control-and-permission-management))
- permission (evidence: [https://docs.cloud.google.com/looker/docs/admin-panel-users-groups](https://docs.cloud.google.com/looker/docs/admin-panel-users-groups), [https://docs.cloud.google.com/bigquery/docs/access-control](https://docs.cloud.google.com/bigquery/docs/access-control), [https://docs.cloud.google.com/looker/docs/access-control-and-permission-management](https://docs.cloud.google.com/looker/docs/access-control-and-permission-management))
- policy (evidence: [https://docs.cloud.google.com/looker/docs/admin-panel-users-groups](https://docs.cloud.google.com/looker/docs/admin-panel-users-groups), [https://docs.cloud.google.com/bigquery/docs/access-control](https://docs.cloud.google.com/bigquery/docs/access-control), [https://docs.cloud.google.com/looker/docs/access-control-and-permission-management](https://docs.cloud.google.com/looker/docs/access-control-and-permission-management))
- role (evidence: [https://docs.cloud.google.com/looker/docs/admin-panel-users-groups](https://docs.cloud.google.com/looker/docs/admin-panel-users-groups), [https://docs.cloud.google.com/bigquery/docs/access-control](https://docs.cloud.google.com/bigquery/docs/access-control), [https://docs.cloud.google.com/looker/docs/access-control-and-permission-management](https://docs.cloud.google.com/looker/docs/access-control-and-permission-management))
- security (evidence: [https://docs.cloud.google.com/looker/docs/admin-panel-users-groups](https://docs.cloud.google.com/looker/docs/admin-panel-users-groups), [https://docs.cloud.google.com/bigquery/docs/access-control](https://docs.cloud.google.com/bigquery/docs/access-control), [https://docs.cloud.google.com/looker/docs/access-control-and-permission-management](https://docs.cloud.google.com/looker/docs/access-control-and-permission-management))
- token (evidence: [https://docs.cloud.google.com/looker/docs/admin-panel-users-groups](https://docs.cloud.google.com/looker/docs/admin-panel-users-groups), [https://docs.cloud.google.com/bigquery/docs/access-control](https://docs.cloud.google.com/bigquery/docs/access-control), [https://docs.cloud.google.com/looker/docs/access-control-and-permission-management](https://docs.cloud.google.com/looker/docs/access-control-and-permission-management))

## Official Evidence

- [https://docs.cloud.google.com/bigquery/docs/access-control](https://docs.cloud.google.com/bigquery/docs/access-control)
- [https://docs.cloud.google.com/looker/docs/access-control-and-permission-management](https://docs.cloud.google.com/looker/docs/access-control-and-permission-management)
- [https://docs.cloud.google.com/looker/docs/admin-panel-users-groups](https://docs.cloud.google.com/looker/docs/admin-panel-users-groups)
