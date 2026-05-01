# Vertex AI Workbench managed notebook runtime idle-shutdown activity detection

Product: Vertex AI Workbench
Feature slug: `vertex-ai-workbench-managed-notebook-runtime-idle-shutdown-activity-detection`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Fixed a bug where managed notebook runtimes with idle shutdown enabled failed to detect activity before shutting down.

## Lifecycle

- Latest feature date: 2023-03-27
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- encrypt
- iam
- identity
- permission
- role

## Official Evidence

- [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_create_notebook_runtime](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_create_notebook_runtime)
- [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_create_notebook_runtime_template](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_create_notebook_runtime_template)
- [https://docs.cloud.google.com/vertex-ai/docs/workbench/managed/access-control](https://docs.cloud.google.com/vertex-ai/docs/workbench/managed/access-control)
