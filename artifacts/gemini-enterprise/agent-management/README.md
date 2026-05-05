# Agent management

Product: Gemini Enterprise
Feature slug: `agent-management`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Admins can view all agents available to users in the Gemini Enterprise web app from the Agents page.

## Lifecycle

- Latest feature date: 2025-11-21
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

- access (evidence: [https://docs.cloud.google.com/gemini/enterprise/docs/agents-overview](https://docs.cloud.google.com/gemini/enterprise/docs/agents-overview), [https://docs.cloud.google.com/gemini/enterprise/docs/agent-gallery](https://docs.cloud.google.com/gemini/enterprise/docs/agent-gallery), [https://docs.cloud.google.com/gemini/enterprise/docs/access-control](https://docs.cloud.google.com/gemini/enterprise/docs/access-control), [https://docs.cloud.google.com/gemini/enterprise/docs/agent-designer](https://docs.cloud.google.com/gemini/enterprise/docs/agent-designer))
- allow (evidence: [https://docs.cloud.google.com/gemini/enterprise/docs/agents-overview](https://docs.cloud.google.com/gemini/enterprise/docs/agents-overview), [https://docs.cloud.google.com/gemini/enterprise/docs/agent-gallery](https://docs.cloud.google.com/gemini/enterprise/docs/agent-gallery), [https://docs.cloud.google.com/gemini/enterprise/docs/access-control](https://docs.cloud.google.com/gemini/enterprise/docs/access-control), [https://docs.cloud.google.com/gemini/enterprise/docs/agent-designer](https://docs.cloud.google.com/gemini/enterprise/docs/agent-designer))
- audit (evidence: [https://docs.cloud.google.com/gemini/enterprise/docs/agents-overview](https://docs.cloud.google.com/gemini/enterprise/docs/agents-overview), [https://docs.cloud.google.com/gemini/enterprise/docs/agent-gallery](https://docs.cloud.google.com/gemini/enterprise/docs/agent-gallery), [https://docs.cloud.google.com/gemini/enterprise/docs/access-control](https://docs.cloud.google.com/gemini/enterprise/docs/access-control), [https://docs.cloud.google.com/gemini/enterprise/docs/agent-designer](https://docs.cloud.google.com/gemini/enterprise/docs/agent-designer))
- auth (evidence: [https://docs.cloud.google.com/gemini/enterprise/docs/agents-overview](https://docs.cloud.google.com/gemini/enterprise/docs/agents-overview), [https://docs.cloud.google.com/gemini/enterprise/docs/agent-gallery](https://docs.cloud.google.com/gemini/enterprise/docs/agent-gallery), [https://docs.cloud.google.com/gemini/enterprise/docs/access-control](https://docs.cloud.google.com/gemini/enterprise/docs/access-control), [https://docs.cloud.google.com/gemini/enterprise/docs/agent-designer](https://docs.cloud.google.com/gemini/enterprise/docs/agent-designer))
- authorization (evidence: [https://docs.cloud.google.com/gemini/enterprise/docs/agents-overview](https://docs.cloud.google.com/gemini/enterprise/docs/agents-overview), [https://docs.cloud.google.com/gemini/enterprise/docs/agent-gallery](https://docs.cloud.google.com/gemini/enterprise/docs/agent-gallery), [https://docs.cloud.google.com/gemini/enterprise/docs/access-control](https://docs.cloud.google.com/gemini/enterprise/docs/access-control), [https://docs.cloud.google.com/gemini/enterprise/docs/agent-designer](https://docs.cloud.google.com/gemini/enterprise/docs/agent-designer))
- credential (evidence: [https://docs.cloud.google.com/gemini/enterprise/docs/agents-overview](https://docs.cloud.google.com/gemini/enterprise/docs/agents-overview), [https://docs.cloud.google.com/gemini/enterprise/docs/agent-gallery](https://docs.cloud.google.com/gemini/enterprise/docs/agent-gallery), [https://docs.cloud.google.com/gemini/enterprise/docs/access-control](https://docs.cloud.google.com/gemini/enterprise/docs/access-control), [https://docs.cloud.google.com/gemini/enterprise/docs/agent-designer](https://docs.cloud.google.com/gemini/enterprise/docs/agent-designer))
- encrypt (evidence: [https://docs.cloud.google.com/gemini/enterprise/docs/agents-overview](https://docs.cloud.google.com/gemini/enterprise/docs/agents-overview), [https://docs.cloud.google.com/gemini/enterprise/docs/agent-gallery](https://docs.cloud.google.com/gemini/enterprise/docs/agent-gallery), [https://docs.cloud.google.com/gemini/enterprise/docs/access-control](https://docs.cloud.google.com/gemini/enterprise/docs/access-control), [https://docs.cloud.google.com/gemini/enterprise/docs/agent-designer](https://docs.cloud.google.com/gemini/enterprise/docs/agent-designer))
- iam (evidence: [https://docs.cloud.google.com/gemini/enterprise/docs/agents-overview](https://docs.cloud.google.com/gemini/enterprise/docs/agents-overview), [https://docs.cloud.google.com/gemini/enterprise/docs/agent-gallery](https://docs.cloud.google.com/gemini/enterprise/docs/agent-gallery), [https://docs.cloud.google.com/gemini/enterprise/docs/access-control](https://docs.cloud.google.com/gemini/enterprise/docs/access-control), [https://docs.cloud.google.com/gemini/enterprise/docs/agent-designer](https://docs.cloud.google.com/gemini/enterprise/docs/agent-designer))
- identity (evidence: [https://docs.cloud.google.com/gemini/enterprise/docs/agents-overview](https://docs.cloud.google.com/gemini/enterprise/docs/agents-overview), [https://docs.cloud.google.com/gemini/enterprise/docs/agent-gallery](https://docs.cloud.google.com/gemini/enterprise/docs/agent-gallery), [https://docs.cloud.google.com/gemini/enterprise/docs/access-control](https://docs.cloud.google.com/gemini/enterprise/docs/access-control), [https://docs.cloud.google.com/gemini/enterprise/docs/agent-designer](https://docs.cloud.google.com/gemini/enterprise/docs/agent-designer))
- key (evidence: [https://docs.cloud.google.com/gemini/enterprise/docs/agents-overview](https://docs.cloud.google.com/gemini/enterprise/docs/agents-overview), [https://docs.cloud.google.com/gemini/enterprise/docs/agent-gallery](https://docs.cloud.google.com/gemini/enterprise/docs/agent-gallery), [https://docs.cloud.google.com/gemini/enterprise/docs/access-control](https://docs.cloud.google.com/gemini/enterprise/docs/access-control), [https://docs.cloud.google.com/gemini/enterprise/docs/agent-designer](https://docs.cloud.google.com/gemini/enterprise/docs/agent-designer))
- logging (evidence: [https://docs.cloud.google.com/gemini/enterprise/docs/agents-overview](https://docs.cloud.google.com/gemini/enterprise/docs/agents-overview), [https://docs.cloud.google.com/gemini/enterprise/docs/agent-gallery](https://docs.cloud.google.com/gemini/enterprise/docs/agent-gallery), [https://docs.cloud.google.com/gemini/enterprise/docs/access-control](https://docs.cloud.google.com/gemini/enterprise/docs/access-control), [https://docs.cloud.google.com/gemini/enterprise/docs/agent-designer](https://docs.cloud.google.com/gemini/enterprise/docs/agent-designer))
- permission (evidence: [https://docs.cloud.google.com/gemini/enterprise/docs/agents-overview](https://docs.cloud.google.com/gemini/enterprise/docs/agents-overview), [https://docs.cloud.google.com/gemini/enterprise/docs/agent-gallery](https://docs.cloud.google.com/gemini/enterprise/docs/agent-gallery), [https://docs.cloud.google.com/gemini/enterprise/docs/access-control](https://docs.cloud.google.com/gemini/enterprise/docs/access-control), [https://docs.cloud.google.com/gemini/enterprise/docs/agent-designer](https://docs.cloud.google.com/gemini/enterprise/docs/agent-designer))
- policy (evidence: [https://docs.cloud.google.com/gemini/enterprise/docs/agents-overview](https://docs.cloud.google.com/gemini/enterprise/docs/agents-overview), [https://docs.cloud.google.com/gemini/enterprise/docs/agent-gallery](https://docs.cloud.google.com/gemini/enterprise/docs/agent-gallery), [https://docs.cloud.google.com/gemini/enterprise/docs/access-control](https://docs.cloud.google.com/gemini/enterprise/docs/access-control), [https://docs.cloud.google.com/gemini/enterprise/docs/agent-designer](https://docs.cloud.google.com/gemini/enterprise/docs/agent-designer))
- role (evidence: [https://docs.cloud.google.com/gemini/enterprise/docs/agents-overview](https://docs.cloud.google.com/gemini/enterprise/docs/agents-overview), [https://docs.cloud.google.com/gemini/enterprise/docs/agent-gallery](https://docs.cloud.google.com/gemini/enterprise/docs/agent-gallery), [https://docs.cloud.google.com/gemini/enterprise/docs/access-control](https://docs.cloud.google.com/gemini/enterprise/docs/access-control), [https://docs.cloud.google.com/gemini/enterprise/docs/agent-designer](https://docs.cloud.google.com/gemini/enterprise/docs/agent-designer))
- token (evidence: [https://docs.cloud.google.com/gemini/enterprise/docs/agents-overview](https://docs.cloud.google.com/gemini/enterprise/docs/agents-overview), [https://docs.cloud.google.com/gemini/enterprise/docs/agent-gallery](https://docs.cloud.google.com/gemini/enterprise/docs/agent-gallery), [https://docs.cloud.google.com/gemini/enterprise/docs/access-control](https://docs.cloud.google.com/gemini/enterprise/docs/access-control), [https://docs.cloud.google.com/gemini/enterprise/docs/agent-designer](https://docs.cloud.google.com/gemini/enterprise/docs/agent-designer))

## Official Evidence

- [https://docs.cloud.google.com/gemini/enterprise/docs/access-control](https://docs.cloud.google.com/gemini/enterprise/docs/access-control)
- [https://docs.cloud.google.com/gemini/enterprise/docs/agent-designer](https://docs.cloud.google.com/gemini/enterprise/docs/agent-designer)
- [https://docs.cloud.google.com/gemini/enterprise/docs/agent-gallery](https://docs.cloud.google.com/gemini/enterprise/docs/agent-gallery)
- [https://docs.cloud.google.com/gemini/enterprise/docs/agents-overview](https://docs.cloud.google.com/gemini/enterprise/docs/agents-overview)
