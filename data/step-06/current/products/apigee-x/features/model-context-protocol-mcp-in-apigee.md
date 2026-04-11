---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T01:24:42.827Z"
product_name: "Apigee X"
product_slug: "apigee-x"
feature_name: "Model Context Protocol (MCP) in Apigee"
feature_slug: "model-context-protocol-mcp-in-apigee"
latest_feature_date: "2026-03-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://cloud.google.com/apigee/docs/api-platform/apigee-mcp/apigee-mcp-quickstart"
keywords:
  - "externally accessible MCP"
  - "remote MCP endpoint"
  - "Model Context Protocol integration"
  - "remote MCP tools"
  - "Model Context Protocol"
  - "Apigee MCP endpoint"
  - "MCP over HTTPS"
  - "MCP in Apigee"
---

# Model Context Protocol (MCP) in Apigee

Product: Apigee X
Coverage: MEDIUM

## Step 02 Summary

Model Context Protocol (MCP) in Apigee is generally available for exposing Apigee APIs as remotely accessible MCP tools over HTTPS without local or additional MCP server infrastructure.

## Extended Definition

Model Context Protocol (MCP) in Apigee enables APIs to be made available to Model Context Protocol clients in agentic applications as MCP tools, using the Apigee Discovery proxy. The documented quickstart shows MCP support for OpenAPI 3.0.x specifications (specifically 3.0.0 through 3.0.3), with an example GET /artists operation.

## Evidence Summary

The provided Google Cloud doc page defines MCP-in-Apigee usage via the Discovery proxy as MCP tools and lists supported OpenAPI 3.0.x versions in the quickstart example.

## Source Links

- [https://cloud.google.com/apigee/docs/api-platform/apigee-mcp/apigee-mcp-quickstart](https://cloud.google.com/apigee/docs/api-platform/apigee-mcp/apigee-mcp-quickstart)

## Supporting Pages

### Get started with Apigee and MCP \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/apigee-mcp/apigee-mcp-quickstart](https://docs.cloud.google.com/apigee/docs/api-platform/apigee-mcp/apigee-mcp-quickstart)
- Source ID: `site-docs-reference`
- Final score: 36
- Re-rank relevance: STRONG
- Re-rank rationale: It is explicitly about using the Apigee Discovery proxy to expose APIs as MCP tools for MCP clients, which is the core behavior of the MCP feature.

Evidence snippets:
- MCP in Apigee supports the following OpenAPI versions: 3.0.0 3.0.1 3.0.2 3.0.3 This quickstart uses a sample OpenAPI 3.0.x specification with three API operations: GET /artists : Returns a list of artists.
- This page describes how to use the Apigee Discovery proxy to make your APIs available to Model Context Protocol (MCP) clients in agentic applications as MCP tools.

