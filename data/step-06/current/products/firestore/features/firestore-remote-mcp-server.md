---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:17.859Z"
product_name: "Firestore"
product_slug: "firestore"
feature_name: "Firestore remote MCP server"
feature_slug: "firestore-remote-mcp-server"
latest_feature_date: "2026-02-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/firestore/native/docs/use-firestore-mcp"
  - "https://docs.cloud.google.com/mcp/overview"
  - "https://docs.cloud.google.com/mcp/manage-mcp-servers"
keywords:
  - "firestore"
  - "remote"
  - "mcp"
  - "server"
  - "lets"
  - "ai"
  - "applications"
  - "interact"
---

# Firestore remote MCP server

Product: Firestore
Coverage: MEDIUM

## Step 02 Summary

The Firestore remote MCP server lets AI applications interact with documents stored in a Firestore database.

## Extended Definition

The Firestore remote MCP server lets AI applications interact with documents stored in a Firestore database.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/firestore/native/docs/use-firestore-mcp](https://docs.cloud.google.com/firestore/native/docs/use-firestore-mcp)
- [https://docs.cloud.google.com/mcp/overview](https://docs.cloud.google.com/mcp/overview)
- [https://docs.cloud.google.com/mcp/manage-mcp-servers](https://docs.cloud.google.com/mcp/manage-mcp-servers)

## Supporting Pages

### "Use the Firestore remote MCP server \_|\_ Firestore in Native mode \_|\_\

- URL: [https://docs.cloud.google.com/firestore/native/docs/use-firestore-mcp](https://docs.cloud.google.com/firestore/native/docs/use-firestore-mcp)
- Source ID: `site-docs-reference-required-4`
- Final score: 255
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The Firestore remote MCP server lets you interact with documents stored in a Firestore database from you AI application. .
- This document describes how to use the Firestore remote Model Context Protocol (MCP) server to connect to Firestore from AI applications such as Gemini CLI, Claude, or in AI applications that you're developing.
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to use the Firestore MCP server and interact with Firestore documents: Make MCP tool calls: mcp.tools.call Read and edit Firestore documents: datastore.entities.allocateIds datastore.entities.create datastore.entities.delete datastore.entities.get datastore.entities.list datastore.entities.update You might also be able to get these permissions with custom roles or other predefined roles .
- Required roles To get the permissions that you need to use the Firestore MCP server and interact with Firestore documents, ask your administrator to grant you the following IAM roles on the project where you want to use the Firestore MCP server: Make MCP tool calls: MCP Tool User ( roles/mcp.toolUser ) Read and edit Firestore documents: Firestore User ( roles/datastore.user ) For more information about granting roles, see Manage access to projects, folders, and organizations .

### Google Cloud MCP servers overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/mcp/overview](https://docs.cloud.google.com/mcp/overview)
- Source ID: `site-docs-reference-required-3`
- Final score: 155
- Re-rank relevance: N/A

Evidence snippets:
- Google and Google Cloud remote MCP servers Google and Google Cloud remote MCP servers have the following features and benefits: MCP discovery : Once a server is enabled in your project, AI applications can discover the server's tools by using the MCP tools/list method .
- How MCP works MCP lets an AI application communicate with external services through a standardized set of components: MCP server A program that exposes capabilities of a service, like an API or database, to AI applications through standardized MCP interfaces.
- Google and Google Cloud services can be used in your AI applications with enterprise-ready governance, security, and access control through our remote Model Context Protocol (MCP) servers.
- Remote MCP servers run on the service's infrastructure and offer an HTTP endpoint to AI applications for communication between the AI MCP client and the MCP server.

### Manage MCP servers \_|\_ Google Cloud MCP servers \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/mcp/manage-mcp-servers](https://docs.cloud.google.com/mcp/manage-mcp-servers)
- Source ID: `site-docs-reference-required-3`
- Final score: 143
- Re-rank relevance: N/A

Evidence snippets:
- Use MCP servers To use Google and Google Cloud remote MCP server tools, AI applications must have the MCP Tool User role ( roles/mcp.toolUser ) and the necessary service permissions for the tool's Google Cloud service.
- You can send an HTTP request to list tools directly to a Google remote MCP server with the following command: curl -X POST \ -H "Content-Type: application/json" \ -d '{"jsonrpc": "2.0", "id":0, "method": "tools/list"}' \ "https:// SERVICE NAME /mcp" The response resembles the following: { "jsonrpc" : "2.0" , "id" : 1 , "result" : { "tools" : [ { "name" : "list topics" , "title" : "List Topics" , "description" : "Get list of available topics." , "input schema" : { ... } "output schema" : { ... } }, { "name" : "get topic" , "title" : "Get Topic" , "description" : "Get messages in a Topic." , "input schema" : { ... } "output schema" : { ... } }, ... ] } } Authenticate your AI application Once you have enabled an MCP server in your project, you can use your Google credentials to authenticate and use its tools through your AI application.
- This guide is for developers who want to use Google and Google Cloud MCP server tools in their AI applications, and for users of AI assistance applications such as Claude Code, Gemini Code Assist, Gemini CLI, or Google AI Studio who want to use Google and Google Cloud MCP server tools to streamline their workflow.
- This guide explains how to list MCP servers and tools, authenticate your AI applications to MCP servers, and configure optional security and safety settings for MCP usage.

