# Managed notebook idle timeout

Product: Vertex AI Workbench
Feature slug: `managed-notebook-idle-timeout`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Vertex AI Workbench supports idle shutdown for managed notebook instances to help control costs.

## Lifecycle

- Latest feature date: 2022-04-06
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- encrypt

## Official Evidence

- [https://docs.cloud.google.com/vertex-ai/docs/pipelines/forecasting-component](https://docs.cloud.google.com/vertex-ai/docs/pipelines/forecasting-component)
- [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_create_notebook_runtime](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_create_notebook_runtime)
- [https://docs.cloud.google.com/vertex-ai/docs/tutorials/image-classification-automl/error-analysis](https://docs.cloud.google.com/vertex-ai/docs/tutorials/image-classification-automl/error-analysis)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
