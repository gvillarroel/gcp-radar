# Chat about uploaded content

Product: Gemini Enterprise
Feature slug: `chat-about-uploaded-content`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Users can upload an XLSX file with multiple sheets when chatting with an Agentspace assistant about uploaded content.

## Lifecycle

- Latest feature date: 2025-06-10
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
- authorization
- credential
- encrypt
- iam
- identity
- key
- logging
- permission
- policy
- role
- token

## Official Evidence

- [https://docs.cloud.google.com/gemini/enterprise/docs/access-control](https://docs.cloud.google.com/gemini/enterprise/docs/access-control)
- [https://docs.cloud.google.com/gemini/enterprise/docs/apps-data-stores](https://docs.cloud.google.com/gemini/enterprise/docs/apps-data-stores)
- [https://docs.cloud.google.com/gemini/enterprise/docs/assistant-chat](https://docs.cloud.google.com/gemini/enterprise/docs/assistant-chat)
- [https://docs.cloud.google.com/gemini/enterprise/docs/choose-product](https://docs.cloud.google.com/gemini/enterprise/docs/choose-product)
