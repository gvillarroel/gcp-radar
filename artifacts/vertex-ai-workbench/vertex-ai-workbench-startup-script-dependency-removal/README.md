# Vertex AI Workbench startup script dependency removal

Product: Vertex AI Workbench
Feature slug: `vertex-ai-workbench-startup-script-dependency-removal`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

The Vertex AI Workbench M139 release removed the startup script dependency on the gs://dl-platform-public-configs location for instances.

## Lifecycle

- Latest feature date: 2026-01-29
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- permission (evidence: [https://docs.cloud.google.com/vertex-ai/docs/workbench/reference/rest/v1/projects.locations.instances/getInstanceHealth](https://docs.cloud.google.com/vertex-ai/docs/workbench/reference/rest/v1/projects.locations.instances/getInstanceHealth), [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_create_notebook_runtime](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_create_notebook_runtime), [https://docs.cloud.google.com/vertex-ai/docs/tutorials/tabular-bq-prediction/create-training-script](https://docs.cloud.google.com/vertex-ai/docs/tutorials/tabular-bq-prediction/create-training-script))

## Official Evidence

- [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_create_notebook_runtime](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_create_notebook_runtime)
- [https://docs.cloud.google.com/vertex-ai/docs/tutorials/tabular-bq-prediction/create-training-script](https://docs.cloud.google.com/vertex-ai/docs/tutorials/tabular-bq-prediction/create-training-script)
- [https://docs.cloud.google.com/vertex-ai/docs/workbench/reference/rest/v1/projects.locations.instances/getInstanceHealth](https://docs.cloud.google.com/vertex-ai/docs/workbench/reference/rest/v1/projects.locations.instances/getInstanceHealth)
