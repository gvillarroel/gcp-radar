---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.234Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery remote MCP server"
feature_slug: "bigquery-remote-mcp-server"
latest_feature_date: "2025-12-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/use-bigquery-mcp"
  - "https://docs.cloud.google.com/mcp/manage-mcp-servers"
  - "https://docs.cloud.google.com/mcp/overview"
keywords:
  - "bigquery"
  - "remote"
  - "mcp"
  - "server"
  - "enables"
  - "llm"
  - "agents"
  - "perform"
---

# BigQuery remote MCP server

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

The BigQuery remote MCP server enables LLM agents to perform data-related tasks in BigQuery.

## Extended Definition

The BigQuery remote MCP server enables LLM agents to perform data-related tasks in BigQuery.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/use-bigquery-mcp](https://docs.cloud.google.com/bigquery/docs/use-bigquery-mcp)
- [https://docs.cloud.google.com/mcp/manage-mcp-servers](https://docs.cloud.google.com/mcp/manage-mcp-servers)
- [https://docs.cloud.google.com/mcp/overview](https://docs.cloud.google.com/mcp/overview)

## Supporting Pages

### Use the BigQuery MCP server \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/use-bigquery-mcp](https://docs.cloud.google.com/bigquery/docs/use-bigquery-mcp)
- Source ID: `site-docs-reference-required-12`
- Final score: 187
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can use the BigQuery remote MCP server to perform tasks such as running queries, getting metadata, and listing resources..
- This document shows you how to use the BigQuery remote Model Context Protocol (MCP) server to connect with AI applications including Gemini CLI, ChatGPT, Claude, and custom applications you are developing.
- The BigQuery remote MCP server is enabled when you enable the BigQuery API.
- Required roles To get the permissions that you need to enable the BigQuery MCP server, ask your administrator to grant you the following IAM roles on the project where you want to enable the BigQuery MCP server: Make MCP tool calls: MCP Tool User ( roles/mcp.toolUser ) Run BigQuery jobs: BigQuery Job User ( roles/bigquery.jobUser ) Query BigQuery data: BigQuery Data Viewer ( roles/bigquery.dataViewer ) For more information about granting roles, see Manage access to projects, folders, and organizations .

### Manage MCP servers \_|\_ Google Cloud MCP servers \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/mcp/manage-mcp-servers](https://docs.cloud.google.com/mcp/manage-mcp-servers)
- Source ID: `site-docs-reference-required-13`
- Final score: 139
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can send an HTTP request to list tools directly to a Google remote MCP server with the following command: curl -X POST \ -H "Content-Type: application/json" \ -d '{"jsonrpc": "2.0", "id":0, "method": "tools/list"}' \ "https:// SERVICE NAME /mcp" The response resembles the following: { "jsonrpc" : "2.0" , "id" : 1 , "result" : { "tools" : [ { "name" : "list topics" , "title" : "List Topics" , "description" : "Get list of available topics." , "input schema" : { ... } "output schema" : { ... } }, { "name" : "get topic" , "title" : "Get Topic" , "description" : "Get messages in a Topic." , "input schema" : { ... } "output schema" : { ... } }, ... ] } } Authenticate your AI application Once you have enabled an MCP server in your project, you can use your Google credentials to authenticate and use its tools through your AI application.
- List enabled MCP servers To list enabled MCP servers for your project, run the following command: gcloud beta services mcp list --enabled The response resembles the following: NAME: services/bigquery.googleapis.com MCP ENDPOINT: bigquery.googleapis.com/mcp NAME: services/mapstools.googleapis.com MCP ENDPOINT: mapstools.googleapis.com/mcp List available tools To get a list of available tools and their descriptions, MCP clients use the MCP tools/list method in an HTTP request to the MCP server endpoint.
- Use MCP servers To use Google and Google Cloud remote MCP server tools, AI applications must have the MCP Tool User role ( roles/mcp.toolUser ) and the necessary service permissions for the tool's Google Cloud service.
- Model Context Protocol (MCP) servers and their tools enable your AI applications to connect with databases, calendars, productivity tools, APIs, and other agents.

### Google Cloud MCP servers overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/mcp/overview](https://docs.cloud.google.com/mcp/overview)
- Source ID: `site-docs-reference-required-13`
- Final score: 135
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Google and Google Cloud remote MCP servers Google and Google Cloud remote MCP servers have the following features and benefits: MCP discovery : Once a server is enabled in your project, AI applications can discover the server's tools by using the MCP tools/list method .
- Local versus remote MCP servers Local MCP servers typically run on your local machine and use the standard input and output streams (stdio) for communication between services on the same device.
- Google and Google Cloud services can be used in your AI applications with enterprise-ready governance, security, and access control through our remote Model Context Protocol (MCP) servers.
- Remote MCP servers run on the service's infrastructure and offer an HTTP endpoint to AI applications for communication between the AI MCP client and the MCP server.

