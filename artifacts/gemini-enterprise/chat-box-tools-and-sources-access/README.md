# Chat box tools and sources access

Product: Gemini Enterprise
Feature slug: `chat-box-tools-and-sources-access`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Users can access tools and sources directly from the chat box.

## Lifecycle

- Latest feature date: 2025-07-31
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
- authorization
- credential
- iam
- identity
- logging
- permission
- policy
- role
- secret
- token

## Official Evidence

- [https://docs.cloud.google.com/gemini/enterprise/docs/access-control](https://docs.cloud.google.com/gemini/enterprise/docs/access-control)
- [https://docs.cloud.google.com/gemini/enterprise/docs/assistant-chat](https://docs.cloud.google.com/gemini/enterprise/docs/assistant-chat)
- [https://docs.cloud.google.com/gemini/enterprise/docs/audit-logging](https://docs.cloud.google.com/gemini/enterprise/docs/audit-logging)
- [https://docs.cloud.google.com/gemini/enterprise/docs/choose-product](https://docs.cloud.google.com/gemini/enterprise/docs/choose-product)
