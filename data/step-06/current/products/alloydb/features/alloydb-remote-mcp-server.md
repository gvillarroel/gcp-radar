---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:07:37.564Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "AlloyDB remote MCP server"
feature_slug: "alloydb-remote-mcp-server"
latest_feature_date: "2026-02-17"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/reference/mcp"
  - "https://docs.cloud.google.com/alloydb/docs/release-notes"
keywords:
  - "Model Context Protocol server"
  - "AI applications connect via MCP"
  - "remote MCP server"
  - "LLM access to AlloyDB clusters"
  - "alloydb clusters in AI platforms"
  - "MCP server for AlloyDB"
  - "MCP endpoint"
  - "AlloyDB MCP server"
---

# AlloyDB remote MCP server

Product: AlloyDB
Coverage: HIGH

## Step 02 Summary

The AlloyDB remote MCP server enables easy interaction with AlloyDB clusters from LLMs, AI applications, and AI-enabled development platforms.

## Extended Definition

The AlloyDB remote MCP server is a Google Cloud remote Model Context Protocol (MCP) server that lets LLMs, AI applications, and AI-enabled development platforms interact with AlloyDB clusters. It exposes cluster and instance management tools (for example: list/create/get clusters and list/create instances) and is accessed via an MCP endpoint (including regional endpoints).

## Evidence Summary

The MCP reference page defines what the AlloyDB MCP server provides and how it is exposed, while release notes explicitly state that the AlloyDB remote MCP server enables easy interaction from LLMs and AI platforms.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/reference/mcp](https://docs.cloud.google.com/alloydb/docs/reference/mcp)
- [https://docs.cloud.google.com/alloydb/docs/release-notes](https://docs.cloud.google.com/alloydb/docs/release-notes)

## Supporting Pages

### MCP Reference: alloydb \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/alloydb/docs/reference/mcp](https://docs.cloud.google.com/alloydb/docs/reference/mcp)
- Source ID: `site-api-reference`
- Final score: 26
- Re-rank relevance: N/A

Evidence snippets:
- The alloydb MCP server has the following tools: MCP Tools list clusters List all clusters create cluster Create a new cluster get cluster Get a cluster list instances List all instances in a cluster create instance Creates an AlloyDB instance, which is a child resource of a cluster.
- The alloydb MCP server uses regional endpoints: For example, https://alloydb.northamerica-northeast2.rep.googleapis.com/mcp For information about available locations, see AlloyDB locations .
- For more information about using Google and Google Cloud remote MCP servers, see Google Cloud MCP servers overview .
- Google MCP endpoints can be global or regional.

### AlloyDB for PostgreSQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/alloydb/docs/release-notes](https://docs.cloud.google.com/alloydb/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 24
- Re-rank relevance: N/A

Evidence snippets:
- The AlloyDB remote MCP server lets you interact easily with AlloyDB clusters from LLMs, AI applications, and AI-enabled development platforms.
- Feature You can now use the AlloyDB remote MCP server .

