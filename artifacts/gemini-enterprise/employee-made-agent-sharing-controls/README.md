# Employee-made agent sharing controls

Product: Gemini Enterprise
Feature slug: `employee-made-agent-sharing-controls`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Admins can control whether employee-made agents can be shared within an organization and whether admin approval is required.

## Lifecycle

- Latest feature date: 2026-02-23
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
- [https://docs.cloud.google.com/gemini/enterprise/docs/agents-overview](https://docs.cloud.google.com/gemini/enterprise/docs/agents-overview)
- [https://docs.cloud.google.com/gemini/enterprise/docs/configure-serving-controls](https://docs.cloud.google.com/gemini/enterprise/docs/configure-serving-controls)
- [https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest](https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest)
