# Conversational Analytics default roles

Product: Looker
Feature slug: `conversational-analytics-default-roles`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Looker added the Conversational Analytics Agent Manager and Conversational Analytics User default roles for data agents.

## Lifecycle

- Latest feature date: 2025-09-30
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
- [https://docs.cloud.google.com/looker/docs/admin-panel-platform-gil](https://docs.cloud.google.com/looker/docs/admin-panel-platform-gil)
- [https://docs.cloud.google.com/looker/docs/admin-panel-users-roles](https://docs.cloud.google.com/looker/docs/admin-panel-users-roles)
