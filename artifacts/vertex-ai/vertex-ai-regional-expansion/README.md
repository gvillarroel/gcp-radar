# Vertex AI regional expansion

Product: Vertex AI
Feature slug: `vertex-ai-regional-expansion`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Vertex AI added support for additional regions, including us-west3 (Salt Lake City), europe-central2 (Warsaw), asia-southeast2 (Jakarta), and me-west1 (Tel Aviv).

## Lifecycle

- Latest feature date: 2022-11-16
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_endpoint](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_endpoint), [https://docs.cloud.google.com/vertex-ai/docs/general/locations](https://docs.cloud.google.com/vertex-ai/docs/general/locations), [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_notebook_execution_schedule](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_notebook_execution_schedule))
- encrypt (evidence: [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_endpoint](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_endpoint), [https://docs.cloud.google.com/vertex-ai/docs/general/locations](https://docs.cloud.google.com/vertex-ai/docs/general/locations), [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_notebook_execution_schedule](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_notebook_execution_schedule))
- iam (evidence: [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_endpoint](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_endpoint), [https://docs.cloud.google.com/vertex-ai/docs/general/locations](https://docs.cloud.google.com/vertex-ai/docs/general/locations), [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_notebook_execution_schedule](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_notebook_execution_schedule))
- key (evidence: [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_endpoint](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_endpoint), [https://docs.cloud.google.com/vertex-ai/docs/general/locations](https://docs.cloud.google.com/vertex-ai/docs/general/locations), [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_notebook_execution_schedule](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_notebook_execution_schedule))

## Official Evidence

- [https://docs.cloud.google.com/vertex-ai/docs/general/locations](https://docs.cloud.google.com/vertex-ai/docs/general/locations)
- [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_endpoint](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_endpoint)
- [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_notebook_execution_schedule](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_notebook_execution_schedule)
