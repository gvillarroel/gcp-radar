# Google Cloud Marketplace agent installation

Product: Gemini Enterprise
Feature slug: `google-cloud-marketplace-agent-installation`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Admins can add A2A-based agents from Google Cloud Marketplace so end users can access them in the Gemini Enterprise web app.

## Lifecycle

- Latest feature date: 2025-12-05
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

- access (evidence: [https://docs.cloud.google.com/gemini/enterprise/docs/agents-overview](https://docs.cloud.google.com/gemini/enterprise/docs/agents-overview), [https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest](https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest), [https://docs.cloud.google.com/gemini/enterprise/docs/configure-cross-project-adk-agents](https://docs.cloud.google.com/gemini/enterprise/docs/configure-cross-project-adk-agents), [https://docs.cloud.google.com/gemini/enterprise/docs/access-control](https://docs.cloud.google.com/gemini/enterprise/docs/access-control))
- allow (evidence: [https://docs.cloud.google.com/gemini/enterprise/docs/agents-overview](https://docs.cloud.google.com/gemini/enterprise/docs/agents-overview), [https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest](https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest), [https://docs.cloud.google.com/gemini/enterprise/docs/configure-cross-project-adk-agents](https://docs.cloud.google.com/gemini/enterprise/docs/configure-cross-project-adk-agents), [https://docs.cloud.google.com/gemini/enterprise/docs/access-control](https://docs.cloud.google.com/gemini/enterprise/docs/access-control))
- audit (evidence: [https://docs.cloud.google.com/gemini/enterprise/docs/agents-overview](https://docs.cloud.google.com/gemini/enterprise/docs/agents-overview), [https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest](https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest), [https://docs.cloud.google.com/gemini/enterprise/docs/configure-cross-project-adk-agents](https://docs.cloud.google.com/gemini/enterprise/docs/configure-cross-project-adk-agents), [https://docs.cloud.google.com/gemini/enterprise/docs/access-control](https://docs.cloud.google.com/gemini/enterprise/docs/access-control))
- auth (evidence: [https://docs.cloud.google.com/gemini/enterprise/docs/agents-overview](https://docs.cloud.google.com/gemini/enterprise/docs/agents-overview), [https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest](https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest), [https://docs.cloud.google.com/gemini/enterprise/docs/configure-cross-project-adk-agents](https://docs.cloud.google.com/gemini/enterprise/docs/configure-cross-project-adk-agents), [https://docs.cloud.google.com/gemini/enterprise/docs/access-control](https://docs.cloud.google.com/gemini/enterprise/docs/access-control))
- authorization (evidence: [https://docs.cloud.google.com/gemini/enterprise/docs/agents-overview](https://docs.cloud.google.com/gemini/enterprise/docs/agents-overview), [https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest](https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest), [https://docs.cloud.google.com/gemini/enterprise/docs/configure-cross-project-adk-agents](https://docs.cloud.google.com/gemini/enterprise/docs/configure-cross-project-adk-agents), [https://docs.cloud.google.com/gemini/enterprise/docs/access-control](https://docs.cloud.google.com/gemini/enterprise/docs/access-control))
- credential (evidence: [https://docs.cloud.google.com/gemini/enterprise/docs/agents-overview](https://docs.cloud.google.com/gemini/enterprise/docs/agents-overview), [https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest](https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest), [https://docs.cloud.google.com/gemini/enterprise/docs/configure-cross-project-adk-agents](https://docs.cloud.google.com/gemini/enterprise/docs/configure-cross-project-adk-agents), [https://docs.cloud.google.com/gemini/enterprise/docs/access-control](https://docs.cloud.google.com/gemini/enterprise/docs/access-control))
- encrypt (evidence: [https://docs.cloud.google.com/gemini/enterprise/docs/agents-overview](https://docs.cloud.google.com/gemini/enterprise/docs/agents-overview), [https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest](https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest), [https://docs.cloud.google.com/gemini/enterprise/docs/configure-cross-project-adk-agents](https://docs.cloud.google.com/gemini/enterprise/docs/configure-cross-project-adk-agents), [https://docs.cloud.google.com/gemini/enterprise/docs/access-control](https://docs.cloud.google.com/gemini/enterprise/docs/access-control))
- iam (evidence: [https://docs.cloud.google.com/gemini/enterprise/docs/agents-overview](https://docs.cloud.google.com/gemini/enterprise/docs/agents-overview), [https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest](https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest), [https://docs.cloud.google.com/gemini/enterprise/docs/configure-cross-project-adk-agents](https://docs.cloud.google.com/gemini/enterprise/docs/configure-cross-project-adk-agents), [https://docs.cloud.google.com/gemini/enterprise/docs/access-control](https://docs.cloud.google.com/gemini/enterprise/docs/access-control))
- identity (evidence: [https://docs.cloud.google.com/gemini/enterprise/docs/agents-overview](https://docs.cloud.google.com/gemini/enterprise/docs/agents-overview), [https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest](https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest), [https://docs.cloud.google.com/gemini/enterprise/docs/configure-cross-project-adk-agents](https://docs.cloud.google.com/gemini/enterprise/docs/configure-cross-project-adk-agents), [https://docs.cloud.google.com/gemini/enterprise/docs/access-control](https://docs.cloud.google.com/gemini/enterprise/docs/access-control))
- key (evidence: [https://docs.cloud.google.com/gemini/enterprise/docs/agents-overview](https://docs.cloud.google.com/gemini/enterprise/docs/agents-overview), [https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest](https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest), [https://docs.cloud.google.com/gemini/enterprise/docs/configure-cross-project-adk-agents](https://docs.cloud.google.com/gemini/enterprise/docs/configure-cross-project-adk-agents), [https://docs.cloud.google.com/gemini/enterprise/docs/access-control](https://docs.cloud.google.com/gemini/enterprise/docs/access-control))
- logging (evidence: [https://docs.cloud.google.com/gemini/enterprise/docs/agents-overview](https://docs.cloud.google.com/gemini/enterprise/docs/agents-overview), [https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest](https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest), [https://docs.cloud.google.com/gemini/enterprise/docs/configure-cross-project-adk-agents](https://docs.cloud.google.com/gemini/enterprise/docs/configure-cross-project-adk-agents), [https://docs.cloud.google.com/gemini/enterprise/docs/access-control](https://docs.cloud.google.com/gemini/enterprise/docs/access-control))
- permission (evidence: [https://docs.cloud.google.com/gemini/enterprise/docs/agents-overview](https://docs.cloud.google.com/gemini/enterprise/docs/agents-overview), [https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest](https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest), [https://docs.cloud.google.com/gemini/enterprise/docs/configure-cross-project-adk-agents](https://docs.cloud.google.com/gemini/enterprise/docs/configure-cross-project-adk-agents), [https://docs.cloud.google.com/gemini/enterprise/docs/access-control](https://docs.cloud.google.com/gemini/enterprise/docs/access-control))
- policy (evidence: [https://docs.cloud.google.com/gemini/enterprise/docs/agents-overview](https://docs.cloud.google.com/gemini/enterprise/docs/agents-overview), [https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest](https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest), [https://docs.cloud.google.com/gemini/enterprise/docs/configure-cross-project-adk-agents](https://docs.cloud.google.com/gemini/enterprise/docs/configure-cross-project-adk-agents), [https://docs.cloud.google.com/gemini/enterprise/docs/access-control](https://docs.cloud.google.com/gemini/enterprise/docs/access-control))
- role (evidence: [https://docs.cloud.google.com/gemini/enterprise/docs/agents-overview](https://docs.cloud.google.com/gemini/enterprise/docs/agents-overview), [https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest](https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest), [https://docs.cloud.google.com/gemini/enterprise/docs/configure-cross-project-adk-agents](https://docs.cloud.google.com/gemini/enterprise/docs/configure-cross-project-adk-agents), [https://docs.cloud.google.com/gemini/enterprise/docs/access-control](https://docs.cloud.google.com/gemini/enterprise/docs/access-control))
- token (evidence: [https://docs.cloud.google.com/gemini/enterprise/docs/agents-overview](https://docs.cloud.google.com/gemini/enterprise/docs/agents-overview), [https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest](https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest), [https://docs.cloud.google.com/gemini/enterprise/docs/configure-cross-project-adk-agents](https://docs.cloud.google.com/gemini/enterprise/docs/configure-cross-project-adk-agents), [https://docs.cloud.google.com/gemini/enterprise/docs/access-control](https://docs.cloud.google.com/gemini/enterprise/docs/access-control))

## Official Evidence

- [https://docs.cloud.google.com/gemini/enterprise/docs/access-control](https://docs.cloud.google.com/gemini/enterprise/docs/access-control)
- [https://docs.cloud.google.com/gemini/enterprise/docs/agents-overview](https://docs.cloud.google.com/gemini/enterprise/docs/agents-overview)
- [https://docs.cloud.google.com/gemini/enterprise/docs/configure-cross-project-adk-agents](https://docs.cloud.google.com/gemini/enterprise/docs/configure-cross-project-adk-agents)
- [https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest](https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest)
