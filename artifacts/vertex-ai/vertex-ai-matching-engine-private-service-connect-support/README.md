# Vertex AI Matching Engine Private Service Connect Support

Product: Vertex AI
Feature slug: `vertex-ai-matching-engine-private-service-connect-support`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Vertex AI Matching Engine added support for Private Service Connect in preview.

## Lifecycle

- Latest feature date: 2023-02-14
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/create](https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/create), [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_endpoint](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_endpoint), [https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/create-onlinestore](https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/create-onlinestore))
- allow (evidence: [https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/create](https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/create), [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_endpoint](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_endpoint), [https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/create-onlinestore](https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/create-onlinestore))
- auth (evidence: [https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/create](https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/create), [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_endpoint](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_endpoint), [https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/create-onlinestore](https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/create-onlinestore))
- authorization (evidence: [https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/create](https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/create), [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_endpoint](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_endpoint), [https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/create-onlinestore](https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/create-onlinestore))
- credential (evidence: [https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/create](https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/create), [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_endpoint](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_endpoint), [https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/create-onlinestore](https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/create-onlinestore))
- encrypt (evidence: [https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/create](https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/create), [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_endpoint](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_endpoint), [https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/create-onlinestore](https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/create-onlinestore))
- firewall (evidence: [https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/create](https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/create), [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_endpoint](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_endpoint), [https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/create-onlinestore](https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/create-onlinestore))
- iam (evidence: [https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/create](https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/create), [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_endpoint](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_endpoint), [https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/create-onlinestore](https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/create-onlinestore))
- logging (evidence: [https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/create](https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/create), [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_endpoint](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_endpoint), [https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/create-onlinestore](https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/create-onlinestore))
- private (evidence: [https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/create](https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/create), [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_endpoint](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_endpoint), [https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/create-onlinestore](https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/create-onlinestore))
- token (evidence: [https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/create](https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/create), [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_endpoint](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_endpoint), [https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/create-onlinestore](https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/create-onlinestore))

## Official Evidence

- [https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/create-onlinestore](https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/create-onlinestore)
- [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_endpoint](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_endpoint)
- [https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/create](https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/create)
