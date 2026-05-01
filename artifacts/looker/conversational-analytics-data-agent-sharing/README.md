# Conversational Analytics data agent sharing

Product: Looker
Feature slug: `conversational-analytics-data-agent-sharing`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Users with the save_agents or admin_agents permission can share data agents with other users; Conversational Analytics data agents can now be shared so other users can chat with the agent and its Explores.

## Lifecycle

- Latest feature date: 2025-10-10
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
