# Chat with files in Microsoft SharePoint connector

Product: Gemini Enterprise
Feature slug: `chat-with-files-in-microsoft-sharepoint-connector`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Gemini Enterprise can analyze XLSX and CSV files in the Microsoft SharePoint connector without uploading them.

## Lifecycle

- Latest feature date: 2026-02-19
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
- private
- role
- token

## Official Evidence

- [https://docs.cloud.google.com/gemini/enterprise/docs/access-control](https://docs.cloud.google.com/gemini/enterprise/docs/access-control)
- [https://docs.cloud.google.com/gemini/enterprise/docs/assistant-chat](https://docs.cloud.google.com/gemini/enterprise/docs/assistant-chat)
- [https://docs.cloud.google.com/gemini/enterprise/docs/cloud-logging](https://docs.cloud.google.com/gemini/enterprise/docs/cloud-logging)
- [https://docs.cloud.google.com/gemini/enterprise/docs/connect-third-party-data-source](https://docs.cloud.google.com/gemini/enterprise/docs/connect-third-party-data-source)
