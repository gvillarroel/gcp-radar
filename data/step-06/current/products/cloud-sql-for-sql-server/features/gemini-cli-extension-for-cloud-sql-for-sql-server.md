---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:57:14.531Z"
product_name: "Cloud SQL for SQL Server"
product_slug: "cloud-sql-for-sql-server"
feature_name: "Gemini CLI extension for Cloud SQL for SQL Server"
feature_slug: "gemini-cli-extension-for-cloud-sql-for-sql-server"
latest_feature_date: "2025-09-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/mysql/use-cloudsql-mcp"
  - "https://docs.cloud.google.com/sql/docs/postgres/use-cloudsql-mcp"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/use-cloudsql-mcp"
keywords:
  - "gemini"
  - "cli"
  - "extension"
  - "sql"
  - "server"
  - "lets"
  - "you"
  - "provision"
---

# Gemini CLI extension for Cloud SQL for SQL Server

Product: Cloud SQL for SQL Server
Coverage: MEDIUM

## Step 02 Summary

The Gemini CLI extension lets you provision, manage, and query Cloud SQL for SQL Server databases from the command line.

## Extended Definition

The Gemini CLI extension lets you provision, manage, and query Cloud SQL for SQL Server databases from the command line.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/mysql/use-cloudsql-mcp](https://docs.cloud.google.com/sql/docs/mysql/use-cloudsql-mcp)
- [https://docs.cloud.google.com/sql/docs/postgres/use-cloudsql-mcp](https://docs.cloud.google.com/sql/docs/postgres/use-cloudsql-mcp)
- [https://docs.cloud.google.com/sql/docs/sqlserver/use-cloudsql-mcp](https://docs.cloud.google.com/sql/docs/sqlserver/use-cloudsql-mcp)

## Supporting Pages

### "Use the Cloud SQL remote MCP server \_|\_ Cloud SQL for MySQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/use-cloudsql-mcp](https://docs.cloud.google.com/sql/docs/mysql/use-cloudsql-mcp)
- Source ID: `site-docs-reference-required-4`
- Final score: 95
- Re-rank relevance: N/A

Evidence snippets:
- Gemini CLI To add a Cloud SQL remote MCP server to your Gemini CLI, configure it as an extension.
- Save the following content in your extension file: { "name" : " EXT NAME " , "version" : "1.0.0" , "mcpServers" : { "Cloud SQL MCP Server" : { "httpUrl" : "https://sqladmin.googleapis.com/mcp" , "authProviderType" : "google credentials" , "oauth" : { "scopes" : [ "https://www.googleapis.com/auth/cloud-platform" ] }, "timeout" : 30000 , "headers" : { "x-goog-user-project" : " PROJECT ID " } } } } Save the extensions file.
- The response is similar to the following: Configured MCP servers: 🟢 Cloud SQL MCP Server (from sqladmin ) - list instances - get instance - clone instance - create instance - update instance - execute sql - import data - create user - update user - list users - get operation The remote MCP server is ready to use in Gemini CLI.
- Sample use cases The following are sample use cases for the Cloud SQL MCP server: Web application development A sample use case might be the rapid development of web applications and the provisioning of Cloud SQL instances as their source database.

### "Use the Cloud SQL remote MCP server \_|\_ Cloud SQL for PostgreSQL \_|\_\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/use-cloudsql-mcp](https://docs.cloud.google.com/sql/docs/postgres/use-cloudsql-mcp)
- Source ID: `site-docs-reference-required-4`
- Final score: 95
- Re-rank relevance: N/A

Evidence snippets:
- Gemini CLI To add a Cloud SQL remote MCP server to your Gemini CLI, configure it as an extension.
- Save the following content in your extension file: { "name" : " EXT NAME " , "version" : "1.0.0" , "mcpServers" : { "Cloud SQL MCP Server" : { "httpUrl" : "https://sqladmin.googleapis.com/mcp" , "authProviderType" : "google credentials" , "oauth" : { "scopes" : [ "https://www.googleapis.com/auth/cloud-platform" ] }, "timeout" : 30000 , "headers" : { "x-goog-user-project" : " PROJECT ID " } } } } Save the extensions file.
- The response is similar to the following: Configured MCP servers: 🟢 Cloud SQL MCP Server (from sqladmin ) - list instances - get instance - clone instance - create instance - update instance - execute sql - import data - create user - update user - list users - get operation The remote MCP server is ready to use in Gemini CLI.
- Sample use cases The following are sample use cases for the Cloud SQL MCP server: Web application development A sample use case might be the rapid development of web applications and the provisioning of Cloud SQL instances as their source database.

### "Use the Cloud SQL remote MCP server \_|\_ Cloud SQL for SQL Server \_|\_\

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/use-cloudsql-mcp](https://docs.cloud.google.com/sql/docs/sqlserver/use-cloudsql-mcp)
- Source ID: `site-docs-reference-required-4`
- Final score: 87
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Gemini CLI To add a Cloud SQL remote MCP server to your Gemini CLI, configure it as an extension.
- Save the following content in your extension file: { "name" : " EXT NAME " , "version" : "1.0.0" , "mcpServers" : { "Cloud SQL MCP Server" : { "httpUrl" : "https://sqladmin.googleapis.com/mcp" , "authProviderType" : "google credentials" , "oauth" : { "scopes" : [ "https://www.googleapis.com/auth/cloud-platform" ] }, "timeout" : 30000 , "headers" : { "x-goog-user-project" : " PROJECT ID " } } } } Save the extensions file.
- The response is similar to the following: Configured MCP servers: 🟢 Cloud SQL MCP Server (from sqladmin ) - list instances - get instance - clone instance - create instance - update instance - execute sql - import data - create user - update user - list users - get operation The remote MCP server is ready to use in Gemini CLI.
- This document shows you how to use the Cloud SQL for SQL Server remote Model Context Protocol (MCP) server to connect with AI applications including Gemini CLI, ChatGPT, Claude, and custom applications you are developing.

