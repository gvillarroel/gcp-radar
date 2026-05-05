# Vertex AI Agent Engine Code Execution

Product: Vertex AI
Feature slug: `vertex-ai-agent-engine-code-execution`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Vertex AI Agent Engine now supports code execution for agents in an isolated sandbox environment in preview mode.

## Lifecycle

- Latest feature date: 2025-09-10
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

- access (evidence: [https://docs.cloud.google.com/vertex-ai/docs/general/access-control](https://docs.cloud.google.com/vertex-ai/docs/general/access-control), [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_notebook_execution_schedule](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_notebook_execution_schedule), [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_list_notebook_runtime_templates](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_list_notebook_runtime_templates))
- auth (evidence: [https://docs.cloud.google.com/vertex-ai/docs/general/access-control](https://docs.cloud.google.com/vertex-ai/docs/general/access-control), [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_notebook_execution_schedule](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_notebook_execution_schedule), [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_list_notebook_runtime_templates](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_list_notebook_runtime_templates))
- authorization (evidence: [https://docs.cloud.google.com/vertex-ai/docs/general/access-control](https://docs.cloud.google.com/vertex-ai/docs/general/access-control), [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_notebook_execution_schedule](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_notebook_execution_schedule), [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_list_notebook_runtime_templates](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_list_notebook_runtime_templates))
- certificate (evidence: [https://docs.cloud.google.com/vertex-ai/docs/general/access-control](https://docs.cloud.google.com/vertex-ai/docs/general/access-control), [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_notebook_execution_schedule](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_notebook_execution_schedule), [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_list_notebook_runtime_templates](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_list_notebook_runtime_templates))
- encrypt (evidence: [https://docs.cloud.google.com/vertex-ai/docs/general/access-control](https://docs.cloud.google.com/vertex-ai/docs/general/access-control), [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_notebook_execution_schedule](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_notebook_execution_schedule), [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_list_notebook_runtime_templates](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_list_notebook_runtime_templates))
- firewall (evidence: [https://docs.cloud.google.com/vertex-ai/docs/general/access-control](https://docs.cloud.google.com/vertex-ai/docs/general/access-control), [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_notebook_execution_schedule](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_notebook_execution_schedule), [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_list_notebook_runtime_templates](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_list_notebook_runtime_templates))
- iam (evidence: [https://docs.cloud.google.com/vertex-ai/docs/general/access-control](https://docs.cloud.google.com/vertex-ai/docs/general/access-control), [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_notebook_execution_schedule](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_notebook_execution_schedule), [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_list_notebook_runtime_templates](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_list_notebook_runtime_templates))
- identity (evidence: [https://docs.cloud.google.com/vertex-ai/docs/general/access-control](https://docs.cloud.google.com/vertex-ai/docs/general/access-control), [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_notebook_execution_schedule](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_notebook_execution_schedule), [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_list_notebook_runtime_templates](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_list_notebook_runtime_templates))
- key (evidence: [https://docs.cloud.google.com/vertex-ai/docs/general/access-control](https://docs.cloud.google.com/vertex-ai/docs/general/access-control), [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_notebook_execution_schedule](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_notebook_execution_schedule), [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_list_notebook_runtime_templates](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_list_notebook_runtime_templates))
- kms (evidence: [https://docs.cloud.google.com/vertex-ai/docs/general/access-control](https://docs.cloud.google.com/vertex-ai/docs/general/access-control), [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_notebook_execution_schedule](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_notebook_execution_schedule), [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_list_notebook_runtime_templates](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_list_notebook_runtime_templates))
- logging (evidence: [https://docs.cloud.google.com/vertex-ai/docs/general/access-control](https://docs.cloud.google.com/vertex-ai/docs/general/access-control), [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_notebook_execution_schedule](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_notebook_execution_schedule), [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_list_notebook_runtime_templates](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_list_notebook_runtime_templates))
- permission (evidence: [https://docs.cloud.google.com/vertex-ai/docs/general/access-control](https://docs.cloud.google.com/vertex-ai/docs/general/access-control), [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_notebook_execution_schedule](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_notebook_execution_schedule), [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_list_notebook_runtime_templates](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_list_notebook_runtime_templates))
- policy (evidence: [https://docs.cloud.google.com/vertex-ai/docs/general/access-control](https://docs.cloud.google.com/vertex-ai/docs/general/access-control), [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_notebook_execution_schedule](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_notebook_execution_schedule), [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_list_notebook_runtime_templates](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_list_notebook_runtime_templates))
- role (evidence: [https://docs.cloud.google.com/vertex-ai/docs/general/access-control](https://docs.cloud.google.com/vertex-ai/docs/general/access-control), [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_notebook_execution_schedule](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_notebook_execution_schedule), [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_list_notebook_runtime_templates](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_list_notebook_runtime_templates))
- security (evidence: [https://docs.cloud.google.com/vertex-ai/docs/general/access-control](https://docs.cloud.google.com/vertex-ai/docs/general/access-control), [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_notebook_execution_schedule](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_notebook_execution_schedule), [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_list_notebook_runtime_templates](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_list_notebook_runtime_templates))
- token (evidence: [https://docs.cloud.google.com/vertex-ai/docs/general/access-control](https://docs.cloud.google.com/vertex-ai/docs/general/access-control), [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_notebook_execution_schedule](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_notebook_execution_schedule), [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_list_notebook_runtime_templates](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_list_notebook_runtime_templates))

## Official Evidence

- [https://docs.cloud.google.com/vertex-ai/docs/general/access-control](https://docs.cloud.google.com/vertex-ai/docs/general/access-control)
- [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_list_notebook_runtime_templates](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_list_notebook_runtime_templates)
- [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_notebook_execution_schedule](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_notebook_execution_schedule)
