# Non-production Looker (Google Cloud core) instances

Product: Looker
Feature slug: `non-production-looker-google-cloud-core-instances`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Lets you provision, configure, and manage non-production Standard, Enterprise, and Embed Looker (Google Cloud core) instances.

## Lifecycle

- Latest feature date: 2025-01-16
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
- iam
- identity
- permission
- role

## Official Evidence

- [https://docs.cloud.google.com/looker/docs/admin-panel-general-settings](https://docs.cloud.google.com/looker/docs/admin-panel-general-settings)
- [https://docs.cloud.google.com/looker/docs/looker-core-access-control](https://docs.cloud.google.com/looker/docs/looker-core-access-control)
- [https://docs.cloud.google.com/looker/docs/looker-core-overview](https://docs.cloud.google.com/looker/docs/looker-core-overview)
