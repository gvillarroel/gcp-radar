# Google Cloud Technical Support access

Product: Looker
Feature slug: `google-cloud-technical-support-access`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Google Cloud Technical Support access is available for Looker (Google Cloud core) instances; Google Cloud Technical Support access lets admins configure support access duration and support user roles.

## Lifecycle

- Latest feature date: 2024-11-07
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
- auth
- iam
- identity
- permission
- private
- role

## Official Evidence

- [https://docs.cloud.google.com/looker/docs/admin-panel-authentication-openid-connect](https://docs.cloud.google.com/looker/docs/admin-panel-authentication-openid-connect)
- [https://docs.cloud.google.com/looker/docs/admin-panel-general-settings](https://docs.cloud.google.com/looker/docs/admin-panel-general-settings)
- [https://docs.cloud.google.com/looker/docs/looker-core-access-control](https://docs.cloud.google.com/looker/docs/looker-core-access-control)
