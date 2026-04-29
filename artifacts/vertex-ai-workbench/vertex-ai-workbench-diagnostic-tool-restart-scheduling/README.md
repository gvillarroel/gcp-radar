# Vertex AI Workbench diagnostic tool restart scheduling

Product: Vertex AI Workbench
Feature slug: `vertex-ai-workbench-diagnostic-tool-restart-scheduling`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

The Vertex AI Workbench user-managed notebooks fixed repeated creation of a diagnostic tool cron job on each notebook restart.

## Lifecycle

- Latest feature date: 2023-04-13
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
- armor
- certificate
- encrypt
- firewall
- iam
- identity
- key
- kms
- permission
- policy
- private
- role
- security
- token

## Official Evidence

- [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_create_notebook_runtime](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_create_notebook_runtime)
- [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_create_notebook_runtime_template](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_create_notebook_runtime_template)
- [https://docs.cloud.google.com/vertex-ai/docs/workbench/user-managed/iam](https://docs.cloud.google.com/vertex-ai/docs/workbench/user-managed/iam)
