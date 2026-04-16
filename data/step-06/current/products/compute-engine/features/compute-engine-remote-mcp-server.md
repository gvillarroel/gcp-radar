---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:03.104Z"
product_name: "Compute Engine"
product_slug: "compute-engine"
feature_name: "Compute Engine remote MCP server"
feature_slug: "compute-engine-remote-mcp-server"
latest_feature_date: "2025-12-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/compute/docs/use-compute-engine-mcp"
  - "https://docs.cloud.google.com/mcp/overview"
  - "https://docs.cloud.google.com/mcp/manage-mcp-servers"
keywords:
  - "compute"
  - "engine"
  - "remote"
  - "mcp"
  - "server"
  - "lets"
  - "llm"
  - "agents"
---

# Compute Engine remote MCP server

Product: Compute Engine
Coverage: MEDIUM

## Step 02 Summary

The Compute Engine remote MCP server lets LLM agents manage Compute Engine resources through a standardized natural-language-capable interface.

## Extended Definition

The Compute Engine remote MCP server lets LLM agents manage Compute Engine resources through a standardized natural-language-capable interface.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/compute/docs/use-compute-engine-mcp](https://docs.cloud.google.com/compute/docs/use-compute-engine-mcp)
- [https://docs.cloud.google.com/mcp/overview](https://docs.cloud.google.com/mcp/overview)
- [https://docs.cloud.google.com/mcp/manage-mcp-servers](https://docs.cloud.google.com/mcp/manage-mcp-servers)

## Supporting Pages

### Use the Compute Engine remote MCP server \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/compute/docs/use-compute-engine-mcp](https://docs.cloud.google.com/compute/docs/use-compute-engine-mcp)
- Source ID: `site-docs-reference-required-5`
- Final score: 237
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The Compute Engine remote MCP server provides a comprehensive set of capabilities that let LLM agents perform a range of infrastructure management tasks including the following: Manage virtual machine (VM) instances.
- Enable the Compute Engine API Required roles To get the permissions that you need to to use the Compute Engine remote MCP server, ask your administrator to grant you the following IAM roles on your Google Cloud project: Make MCP tool calls: MCP Tool User ( roles/mcp.toolUser ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to to use the Compute Engine remote MCP server: Make MCP tool calls: mcp.tools.call You might also be able to get these permissions with custom roles or other predefined roles .
- This document shows you how to use the Compute Engine remote Model Context Protocol (MCP) server to connect with AI applications including Gemini CLI, ChatGPT, Claude, and custom applications you are developing.

### Google Cloud MCP servers overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/mcp/overview](https://docs.cloud.google.com/mcp/overview)
- Source ID: `site-docs-reference-required-4`
- Final score: 143
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Google and Google Cloud remote MCP servers Google and Google Cloud remote MCP servers have the following features and benefits: MCP discovery : Once a server is enabled in your project, AI applications can discover the server's tools by using the MCP tools/list method .
- How MCP works MCP lets an AI application communicate with external services through a standardized set of components: MCP server A program that exposes capabilities of a service, like an API or database, to AI applications through standardized MCP interfaces.
- Local versus remote MCP servers Local MCP servers typically run on your local machine and use the standard input and output streams (stdio) for communication between services on the same device.
- Google and Google Cloud services can be used in your AI applications with enterprise-ready governance, security, and access control through our remote Model Context Protocol (MCP) servers.

### Manage MCP servers \_|\_ Google Cloud MCP servers \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/mcp/manage-mcp-servers](https://docs.cloud.google.com/mcp/manage-mcp-servers)
- Source ID: `site-docs-reference-required-4`
- Final score: 129
- Re-rank relevance: N/A

Evidence snippets:
- You can send an HTTP request to list tools directly to a Google remote MCP server with the following command: curl -X POST \ -H "Content-Type: application/json" \ -d '{"jsonrpc": "2.0", "id":0, "method": "tools/list"}' \ "https:// SERVICE NAME /mcp" The response resembles the following: { "jsonrpc" : "2.0" , "id" : 1 , "result" : { "tools" : [ { "name" : "list topics" , "title" : "List Topics" , "description" : "Get list of available topics." , "input schema" : { ... } "output schema" : { ... } }, { "name" : "get topic" , "title" : "Get Topic" , "description" : "Get messages in a Topic." , "input schema" : { ... } "output schema" : { ... } }, ... ] } } Authenticate your AI application Once you have enabled an MCP server in your project, you can use your Google credentials to authenticate and use its tools through your AI application.
- Use MCP servers To use Google and Google Cloud remote MCP server tools, AI applications must have the MCP Tool User role ( roles/mcp.toolUser ) and the necessary service permissions for the tool's Google Cloud service.
- Model Context Protocol (MCP) servers and their tools enable your AI applications to connect with databases, calendars, productivity tools, APIs, and other agents.
- To see a list of Google and Google Cloud services that have remote MCP servers without running commands, see Supported products .

