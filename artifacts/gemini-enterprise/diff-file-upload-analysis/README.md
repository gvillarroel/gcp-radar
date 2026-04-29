# Diff file upload analysis

Product: Gemini Enterprise
Feature slug: `diff-file-upload-analysis`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Users can upload diff files and ask the system to summarize and analyze them.

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
- key
- logging
- permission
- policy
- role
- token

## Official Evidence

- [https://docs.cloud.google.com/gemini/enterprise/docs/access-control](https://docs.cloud.google.com/gemini/enterprise/docs/access-control)
- [https://docs.cloud.google.com/gemini/enterprise/docs/assistant-chat](https://docs.cloud.google.com/gemini/enterprise/docs/assistant-chat)
- [https://docs.cloud.google.com/gemini/enterprise/docs/configure-autocomplete](https://docs.cloud.google.com/gemini/enterprise/docs/configure-autocomplete)
- [https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest](https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest)
