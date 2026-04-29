# Conversation pin functionality

Product: Gemini Enterprise
Feature slug: `conversation-pin-functionality`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Conversation pinning lets users pin important conversations for quick access; deprecated on 2025-07-31.

## Lifecycle

- Latest feature date: 2025-07-31
- Deprecation date: 2025-07-31
- Status: deprecation_noted

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
- security
- token

## Official Evidence

- [https://docs.cloud.google.com/gemini/enterprise/docs/access-control](https://docs.cloud.google.com/gemini/enterprise/docs/access-control)
- [https://docs.cloud.google.com/gemini/enterprise/docs/audit-logging](https://docs.cloud.google.com/gemini/enterprise/docs/audit-logging)
- [https://docs.cloud.google.com/gemini/enterprise/docs/configure-identity-provider](https://docs.cloud.google.com/gemini/enterprise/docs/configure-identity-provider)
- [https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest](https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest)
