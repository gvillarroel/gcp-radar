# Dropbox download file action

Product: Gemini Enterprise
Feature slug: `dropbox-download-file-action`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Gemini Enterprise adds a download file action for Dropbox.

## Lifecycle

- Latest feature date: 2026-01-28
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

- access (evidence: [https://docs.cloud.google.com/gemini/enterprise/docs/connect-third-party-data-source](https://docs.cloud.google.com/gemini/enterprise/docs/connect-third-party-data-source), [https://docs.cloud.google.com/gemini/enterprise/docs/assistant-chat](https://docs.cloud.google.com/gemini/enterprise/docs/assistant-chat), [https://docs.cloud.google.com/gemini/enterprise/docs/access-control](https://docs.cloud.google.com/gemini/enterprise/docs/access-control), [https://docs.cloud.google.com/gemini/enterprise/docs/connectors/box/third-party-config](https://docs.cloud.google.com/gemini/enterprise/docs/connectors/box/third-party-config))
- allow (evidence: [https://docs.cloud.google.com/gemini/enterprise/docs/connect-third-party-data-source](https://docs.cloud.google.com/gemini/enterprise/docs/connect-third-party-data-source), [https://docs.cloud.google.com/gemini/enterprise/docs/assistant-chat](https://docs.cloud.google.com/gemini/enterprise/docs/assistant-chat), [https://docs.cloud.google.com/gemini/enterprise/docs/access-control](https://docs.cloud.google.com/gemini/enterprise/docs/access-control), [https://docs.cloud.google.com/gemini/enterprise/docs/connectors/box/third-party-config](https://docs.cloud.google.com/gemini/enterprise/docs/connectors/box/third-party-config))
- auth (evidence: [https://docs.cloud.google.com/gemini/enterprise/docs/connect-third-party-data-source](https://docs.cloud.google.com/gemini/enterprise/docs/connect-third-party-data-source), [https://docs.cloud.google.com/gemini/enterprise/docs/assistant-chat](https://docs.cloud.google.com/gemini/enterprise/docs/assistant-chat), [https://docs.cloud.google.com/gemini/enterprise/docs/access-control](https://docs.cloud.google.com/gemini/enterprise/docs/access-control), [https://docs.cloud.google.com/gemini/enterprise/docs/connectors/box/third-party-config](https://docs.cloud.google.com/gemini/enterprise/docs/connectors/box/third-party-config))
- authorization (evidence: [https://docs.cloud.google.com/gemini/enterprise/docs/connect-third-party-data-source](https://docs.cloud.google.com/gemini/enterprise/docs/connect-third-party-data-source), [https://docs.cloud.google.com/gemini/enterprise/docs/assistant-chat](https://docs.cloud.google.com/gemini/enterprise/docs/assistant-chat), [https://docs.cloud.google.com/gemini/enterprise/docs/access-control](https://docs.cloud.google.com/gemini/enterprise/docs/access-control), [https://docs.cloud.google.com/gemini/enterprise/docs/connectors/box/third-party-config](https://docs.cloud.google.com/gemini/enterprise/docs/connectors/box/third-party-config))
- credential (evidence: [https://docs.cloud.google.com/gemini/enterprise/docs/connect-third-party-data-source](https://docs.cloud.google.com/gemini/enterprise/docs/connect-third-party-data-source), [https://docs.cloud.google.com/gemini/enterprise/docs/assistant-chat](https://docs.cloud.google.com/gemini/enterprise/docs/assistant-chat), [https://docs.cloud.google.com/gemini/enterprise/docs/access-control](https://docs.cloud.google.com/gemini/enterprise/docs/access-control), [https://docs.cloud.google.com/gemini/enterprise/docs/connectors/box/third-party-config](https://docs.cloud.google.com/gemini/enterprise/docs/connectors/box/third-party-config))
- iam (evidence: [https://docs.cloud.google.com/gemini/enterprise/docs/connect-third-party-data-source](https://docs.cloud.google.com/gemini/enterprise/docs/connect-third-party-data-source), [https://docs.cloud.google.com/gemini/enterprise/docs/assistant-chat](https://docs.cloud.google.com/gemini/enterprise/docs/assistant-chat), [https://docs.cloud.google.com/gemini/enterprise/docs/access-control](https://docs.cloud.google.com/gemini/enterprise/docs/access-control), [https://docs.cloud.google.com/gemini/enterprise/docs/connectors/box/third-party-config](https://docs.cloud.google.com/gemini/enterprise/docs/connectors/box/third-party-config))
- identity (evidence: [https://docs.cloud.google.com/gemini/enterprise/docs/connect-third-party-data-source](https://docs.cloud.google.com/gemini/enterprise/docs/connect-third-party-data-source), [https://docs.cloud.google.com/gemini/enterprise/docs/assistant-chat](https://docs.cloud.google.com/gemini/enterprise/docs/assistant-chat), [https://docs.cloud.google.com/gemini/enterprise/docs/access-control](https://docs.cloud.google.com/gemini/enterprise/docs/access-control), [https://docs.cloud.google.com/gemini/enterprise/docs/connectors/box/third-party-config](https://docs.cloud.google.com/gemini/enterprise/docs/connectors/box/third-party-config))
- logging (evidence: [https://docs.cloud.google.com/gemini/enterprise/docs/connect-third-party-data-source](https://docs.cloud.google.com/gemini/enterprise/docs/connect-third-party-data-source), [https://docs.cloud.google.com/gemini/enterprise/docs/assistant-chat](https://docs.cloud.google.com/gemini/enterprise/docs/assistant-chat), [https://docs.cloud.google.com/gemini/enterprise/docs/access-control](https://docs.cloud.google.com/gemini/enterprise/docs/access-control), [https://docs.cloud.google.com/gemini/enterprise/docs/connectors/box/third-party-config](https://docs.cloud.google.com/gemini/enterprise/docs/connectors/box/third-party-config))
- permission (evidence: [https://docs.cloud.google.com/gemini/enterprise/docs/connect-third-party-data-source](https://docs.cloud.google.com/gemini/enterprise/docs/connect-third-party-data-source), [https://docs.cloud.google.com/gemini/enterprise/docs/assistant-chat](https://docs.cloud.google.com/gemini/enterprise/docs/assistant-chat), [https://docs.cloud.google.com/gemini/enterprise/docs/access-control](https://docs.cloud.google.com/gemini/enterprise/docs/access-control), [https://docs.cloud.google.com/gemini/enterprise/docs/connectors/box/third-party-config](https://docs.cloud.google.com/gemini/enterprise/docs/connectors/box/third-party-config))
- policy (evidence: [https://docs.cloud.google.com/gemini/enterprise/docs/connect-third-party-data-source](https://docs.cloud.google.com/gemini/enterprise/docs/connect-third-party-data-source), [https://docs.cloud.google.com/gemini/enterprise/docs/assistant-chat](https://docs.cloud.google.com/gemini/enterprise/docs/assistant-chat), [https://docs.cloud.google.com/gemini/enterprise/docs/access-control](https://docs.cloud.google.com/gemini/enterprise/docs/access-control), [https://docs.cloud.google.com/gemini/enterprise/docs/connectors/box/third-party-config](https://docs.cloud.google.com/gemini/enterprise/docs/connectors/box/third-party-config))
- role (evidence: [https://docs.cloud.google.com/gemini/enterprise/docs/connect-third-party-data-source](https://docs.cloud.google.com/gemini/enterprise/docs/connect-third-party-data-source), [https://docs.cloud.google.com/gemini/enterprise/docs/assistant-chat](https://docs.cloud.google.com/gemini/enterprise/docs/assistant-chat), [https://docs.cloud.google.com/gemini/enterprise/docs/access-control](https://docs.cloud.google.com/gemini/enterprise/docs/access-control), [https://docs.cloud.google.com/gemini/enterprise/docs/connectors/box/third-party-config](https://docs.cloud.google.com/gemini/enterprise/docs/connectors/box/third-party-config))
- token (evidence: [https://docs.cloud.google.com/gemini/enterprise/docs/connect-third-party-data-source](https://docs.cloud.google.com/gemini/enterprise/docs/connect-third-party-data-source), [https://docs.cloud.google.com/gemini/enterprise/docs/assistant-chat](https://docs.cloud.google.com/gemini/enterprise/docs/assistant-chat), [https://docs.cloud.google.com/gemini/enterprise/docs/access-control](https://docs.cloud.google.com/gemini/enterprise/docs/access-control), [https://docs.cloud.google.com/gemini/enterprise/docs/connectors/box/third-party-config](https://docs.cloud.google.com/gemini/enterprise/docs/connectors/box/third-party-config))

## Official Evidence

- [https://docs.cloud.google.com/gemini/enterprise/docs/access-control](https://docs.cloud.google.com/gemini/enterprise/docs/access-control)
- [https://docs.cloud.google.com/gemini/enterprise/docs/assistant-chat](https://docs.cloud.google.com/gemini/enterprise/docs/assistant-chat)
- [https://docs.cloud.google.com/gemini/enterprise/docs/connect-third-party-data-source](https://docs.cloud.google.com/gemini/enterprise/docs/connect-third-party-data-source)
- [https://docs.cloud.google.com/gemini/enterprise/docs/connectors/box/third-party-config](https://docs.cloud.google.com/gemini/enterprise/docs/connectors/box/third-party-config)
