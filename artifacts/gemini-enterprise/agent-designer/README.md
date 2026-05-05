# Agent Designer

Product: Gemini Enterprise
Feature slug: `agent-designer`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Agent Designer lets users create custom no-code AI agents from natural language descriptions.

## Lifecycle

- Latest feature date: 2025-04-09
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

- access (evidence: [https://docs.cloud.google.com/gemini/enterprise/docs/agent-designer](https://docs.cloud.google.com/gemini/enterprise/docs/agent-designer), [https://docs.cloud.google.com/gemini/enterprise/docs/agents-overview](https://docs.cloud.google.com/gemini/enterprise/docs/agents-overview), [https://docs.cloud.google.com/gemini/enterprise/docs/agent-gallery](https://docs.cloud.google.com/gemini/enterprise/docs/agent-gallery), [https://docs.cloud.google.com/gemini/enterprise/docs/access-control](https://docs.cloud.google.com/gemini/enterprise/docs/access-control))
- allow (evidence: [https://docs.cloud.google.com/gemini/enterprise/docs/agent-designer](https://docs.cloud.google.com/gemini/enterprise/docs/agent-designer), [https://docs.cloud.google.com/gemini/enterprise/docs/agents-overview](https://docs.cloud.google.com/gemini/enterprise/docs/agents-overview), [https://docs.cloud.google.com/gemini/enterprise/docs/agent-gallery](https://docs.cloud.google.com/gemini/enterprise/docs/agent-gallery), [https://docs.cloud.google.com/gemini/enterprise/docs/access-control](https://docs.cloud.google.com/gemini/enterprise/docs/access-control))
- audit (evidence: [https://docs.cloud.google.com/gemini/enterprise/docs/agent-designer](https://docs.cloud.google.com/gemini/enterprise/docs/agent-designer), [https://docs.cloud.google.com/gemini/enterprise/docs/agents-overview](https://docs.cloud.google.com/gemini/enterprise/docs/agents-overview), [https://docs.cloud.google.com/gemini/enterprise/docs/agent-gallery](https://docs.cloud.google.com/gemini/enterprise/docs/agent-gallery), [https://docs.cloud.google.com/gemini/enterprise/docs/access-control](https://docs.cloud.google.com/gemini/enterprise/docs/access-control))
- auth (evidence: [https://docs.cloud.google.com/gemini/enterprise/docs/agent-designer](https://docs.cloud.google.com/gemini/enterprise/docs/agent-designer), [https://docs.cloud.google.com/gemini/enterprise/docs/agents-overview](https://docs.cloud.google.com/gemini/enterprise/docs/agents-overview), [https://docs.cloud.google.com/gemini/enterprise/docs/agent-gallery](https://docs.cloud.google.com/gemini/enterprise/docs/agent-gallery), [https://docs.cloud.google.com/gemini/enterprise/docs/access-control](https://docs.cloud.google.com/gemini/enterprise/docs/access-control))
- authorization (evidence: [https://docs.cloud.google.com/gemini/enterprise/docs/agent-designer](https://docs.cloud.google.com/gemini/enterprise/docs/agent-designer), [https://docs.cloud.google.com/gemini/enterprise/docs/agents-overview](https://docs.cloud.google.com/gemini/enterprise/docs/agents-overview), [https://docs.cloud.google.com/gemini/enterprise/docs/agent-gallery](https://docs.cloud.google.com/gemini/enterprise/docs/agent-gallery), [https://docs.cloud.google.com/gemini/enterprise/docs/access-control](https://docs.cloud.google.com/gemini/enterprise/docs/access-control))
- credential (evidence: [https://docs.cloud.google.com/gemini/enterprise/docs/agent-designer](https://docs.cloud.google.com/gemini/enterprise/docs/agent-designer), [https://docs.cloud.google.com/gemini/enterprise/docs/agents-overview](https://docs.cloud.google.com/gemini/enterprise/docs/agents-overview), [https://docs.cloud.google.com/gemini/enterprise/docs/agent-gallery](https://docs.cloud.google.com/gemini/enterprise/docs/agent-gallery), [https://docs.cloud.google.com/gemini/enterprise/docs/access-control](https://docs.cloud.google.com/gemini/enterprise/docs/access-control))
- encrypt (evidence: [https://docs.cloud.google.com/gemini/enterprise/docs/agent-designer](https://docs.cloud.google.com/gemini/enterprise/docs/agent-designer), [https://docs.cloud.google.com/gemini/enterprise/docs/agents-overview](https://docs.cloud.google.com/gemini/enterprise/docs/agents-overview), [https://docs.cloud.google.com/gemini/enterprise/docs/agent-gallery](https://docs.cloud.google.com/gemini/enterprise/docs/agent-gallery), [https://docs.cloud.google.com/gemini/enterprise/docs/access-control](https://docs.cloud.google.com/gemini/enterprise/docs/access-control))
- iam (evidence: [https://docs.cloud.google.com/gemini/enterprise/docs/agent-designer](https://docs.cloud.google.com/gemini/enterprise/docs/agent-designer), [https://docs.cloud.google.com/gemini/enterprise/docs/agents-overview](https://docs.cloud.google.com/gemini/enterprise/docs/agents-overview), [https://docs.cloud.google.com/gemini/enterprise/docs/agent-gallery](https://docs.cloud.google.com/gemini/enterprise/docs/agent-gallery), [https://docs.cloud.google.com/gemini/enterprise/docs/access-control](https://docs.cloud.google.com/gemini/enterprise/docs/access-control))
- identity (evidence: [https://docs.cloud.google.com/gemini/enterprise/docs/agent-designer](https://docs.cloud.google.com/gemini/enterprise/docs/agent-designer), [https://docs.cloud.google.com/gemini/enterprise/docs/agents-overview](https://docs.cloud.google.com/gemini/enterprise/docs/agents-overview), [https://docs.cloud.google.com/gemini/enterprise/docs/agent-gallery](https://docs.cloud.google.com/gemini/enterprise/docs/agent-gallery), [https://docs.cloud.google.com/gemini/enterprise/docs/access-control](https://docs.cloud.google.com/gemini/enterprise/docs/access-control))
- key (evidence: [https://docs.cloud.google.com/gemini/enterprise/docs/agent-designer](https://docs.cloud.google.com/gemini/enterprise/docs/agent-designer), [https://docs.cloud.google.com/gemini/enterprise/docs/agents-overview](https://docs.cloud.google.com/gemini/enterprise/docs/agents-overview), [https://docs.cloud.google.com/gemini/enterprise/docs/agent-gallery](https://docs.cloud.google.com/gemini/enterprise/docs/agent-gallery), [https://docs.cloud.google.com/gemini/enterprise/docs/access-control](https://docs.cloud.google.com/gemini/enterprise/docs/access-control))
- logging (evidence: [https://docs.cloud.google.com/gemini/enterprise/docs/agent-designer](https://docs.cloud.google.com/gemini/enterprise/docs/agent-designer), [https://docs.cloud.google.com/gemini/enterprise/docs/agents-overview](https://docs.cloud.google.com/gemini/enterprise/docs/agents-overview), [https://docs.cloud.google.com/gemini/enterprise/docs/agent-gallery](https://docs.cloud.google.com/gemini/enterprise/docs/agent-gallery), [https://docs.cloud.google.com/gemini/enterprise/docs/access-control](https://docs.cloud.google.com/gemini/enterprise/docs/access-control))
- permission (evidence: [https://docs.cloud.google.com/gemini/enterprise/docs/agent-designer](https://docs.cloud.google.com/gemini/enterprise/docs/agent-designer), [https://docs.cloud.google.com/gemini/enterprise/docs/agents-overview](https://docs.cloud.google.com/gemini/enterprise/docs/agents-overview), [https://docs.cloud.google.com/gemini/enterprise/docs/agent-gallery](https://docs.cloud.google.com/gemini/enterprise/docs/agent-gallery), [https://docs.cloud.google.com/gemini/enterprise/docs/access-control](https://docs.cloud.google.com/gemini/enterprise/docs/access-control))
- policy (evidence: [https://docs.cloud.google.com/gemini/enterprise/docs/agent-designer](https://docs.cloud.google.com/gemini/enterprise/docs/agent-designer), [https://docs.cloud.google.com/gemini/enterprise/docs/agents-overview](https://docs.cloud.google.com/gemini/enterprise/docs/agents-overview), [https://docs.cloud.google.com/gemini/enterprise/docs/agent-gallery](https://docs.cloud.google.com/gemini/enterprise/docs/agent-gallery), [https://docs.cloud.google.com/gemini/enterprise/docs/access-control](https://docs.cloud.google.com/gemini/enterprise/docs/access-control))
- role (evidence: [https://docs.cloud.google.com/gemini/enterprise/docs/agent-designer](https://docs.cloud.google.com/gemini/enterprise/docs/agent-designer), [https://docs.cloud.google.com/gemini/enterprise/docs/agents-overview](https://docs.cloud.google.com/gemini/enterprise/docs/agents-overview), [https://docs.cloud.google.com/gemini/enterprise/docs/agent-gallery](https://docs.cloud.google.com/gemini/enterprise/docs/agent-gallery), [https://docs.cloud.google.com/gemini/enterprise/docs/access-control](https://docs.cloud.google.com/gemini/enterprise/docs/access-control))
- token (evidence: [https://docs.cloud.google.com/gemini/enterprise/docs/agent-designer](https://docs.cloud.google.com/gemini/enterprise/docs/agent-designer), [https://docs.cloud.google.com/gemini/enterprise/docs/agents-overview](https://docs.cloud.google.com/gemini/enterprise/docs/agents-overview), [https://docs.cloud.google.com/gemini/enterprise/docs/agent-gallery](https://docs.cloud.google.com/gemini/enterprise/docs/agent-gallery), [https://docs.cloud.google.com/gemini/enterprise/docs/access-control](https://docs.cloud.google.com/gemini/enterprise/docs/access-control))

## Official Evidence

- [https://docs.cloud.google.com/gemini/enterprise/docs/access-control](https://docs.cloud.google.com/gemini/enterprise/docs/access-control)
- [https://docs.cloud.google.com/gemini/enterprise/docs/agent-designer](https://docs.cloud.google.com/gemini/enterprise/docs/agent-designer)
- [https://docs.cloud.google.com/gemini/enterprise/docs/agent-gallery](https://docs.cloud.google.com/gemini/enterprise/docs/agent-gallery)
- [https://docs.cloud.google.com/gemini/enterprise/docs/agents-overview](https://docs.cloud.google.com/gemini/enterprise/docs/agents-overview)
