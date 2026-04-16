---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:57:14.528Z"
product_name: "Cloud SQL for SQL Server"
product_slug: "cloud-sql-for-sql-server"
feature_name: "Cloud SQL remote MCP server"
feature_slug: "cloud-sql-remote-mcp-server"
latest_feature_date: "2026-02-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/mysql/use-cloudsql-mcp"
  - "https://docs.cloud.google.com/sql/docs/postgres/use-cloudsql-mcp"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/use-cloudsql-mcp"
keywords:
  - "sql"
  - "remote"
  - "mcp"
  - "server"
  - "lets"
  - "llms"
  - "ai"
  - "applications"
---

# Cloud SQL remote MCP server

Product: Cloud SQL for SQL Server
Coverage: MEDIUM

## Step 02 Summary

The Cloud SQL remote MCP server lets LLMs, AI applications, and AI-enabled development platforms interact with Cloud SQL instances.

## Extended Definition

The Cloud SQL remote MCP server lets LLMs, AI applications, and AI-enabled development platforms interact with Cloud SQL instances.

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
- Final score: 170
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This document shows you how to use the Cloud SQL for MySQL remote Model Context Protocol (MCP) server to connect with AI applications including Gemini CLI, ChatGPT, Claude, and custom applications you are developing.
- The Cloud SQL remote MCP server lets you access and run Cloud SQL tools to create, manage, and query Cloud SQL resources from your AI-enabled development environments and AI agent platforms. .
- Remote MCP servers Run on the service's infrastructure and offer an HTTP endpoint to AI applications for communication between the AI MCP client and the MCP server.
- Before you begin Required roles To get the permissions that you need to use the Cloud SQL remote MCP server, ask your administrator to grant you the following IAM roles on the project where you want to use the remote Cloud SQL MCP server: Make MCP tool calls in a project: MCP Tool User ( roles/mcp.toolUser ) Create an OAuth client ID: OAuth Config Editor ( roles/oauthconfig.editor ) Create, clone, or update a Cloud SQL instance: Cloud SQL Admin ( roles/cloudsql.admin ) Create or update a Cloud SQL user: Cloud SQL Admin ( roles/cloudsql.admin ) Execute SQL queries in Cloud SQL: Cloud SQL Admin ( roles/cloudsql.admin ) Cloud SQL Studio User ( roles/cloudsql.StudioUser ) Get a Cloud SQL instance or list all Cloud SQL instances in a project: Cloud SQL Viewer ( roles/cloudsql.viewer ) Import data into a Cloud SQL instance: Cloud SQL Admin ( roles/cloudsql.admin ) Storage Admin ( roles/storage.admin ) List Cloud SQL users: Cloud SQL Viewer ( roles/cloudsql.viewer ) For more information about granting roles, see Manage access to projects, folders, and organizations .

### "Use the Cloud SQL remote MCP server \_|\_ Cloud SQL for PostgreSQL \_|\_\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/use-cloudsql-mcp](https://docs.cloud.google.com/sql/docs/postgres/use-cloudsql-mcp)
- Source ID: `site-docs-reference-required-4`
- Final score: 170
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This document shows you how to use the Cloud SQL for PostgreSQL remote Model Context Protocol (MCP) server to connect with AI applications including Gemini CLI, ChatGPT, Claude, and custom applications you are developing.
- The Cloud SQL remote MCP server lets you access and run Cloud SQL tools to create, manage, and query Cloud SQL resources from your AI-enabled development environments and AI agent platforms. .
- Remote MCP servers Run on the service's infrastructure and offer an HTTP endpoint to AI applications for communication between the AI MCP client and the MCP server.
- Before you begin Required roles To get the permissions that you need to use the Cloud SQL remote MCP server, ask your administrator to grant you the following IAM roles on the project where you want to use the remote Cloud SQL MCP server: Make MCP tool calls in a project: MCP Tool User ( roles/mcp.toolUser ) Create an OAuth client ID: OAuth Config Editor ( roles/oauthconfig.editor ) Create, clone, or update a Cloud SQL instance: Cloud SQL Admin ( roles/cloudsql.admin ) Create or update a Cloud SQL user: Cloud SQL Admin ( roles/cloudsql.admin ) Execute SQL queries in Cloud SQL: Cloud SQL Admin ( roles/cloudsql.admin ) Cloud SQL Studio User ( roles/cloudsql.StudioUser ) Get a Cloud SQL instance or list all Cloud SQL instances in a project: Cloud SQL Viewer ( roles/cloudsql.viewer ) Import data into a Cloud SQL instance: Cloud SQL Admin ( roles/cloudsql.admin ) Storage Admin ( roles/storage.admin ) List Cloud SQL users: Cloud SQL Viewer ( roles/cloudsql.viewer ) For more information about granting roles, see Manage access to projects, folders, and organizations .

### "Use the Cloud SQL remote MCP server \_|\_ Cloud SQL for SQL Server \_|\_\

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/use-cloudsql-mcp](https://docs.cloud.google.com/sql/docs/sqlserver/use-cloudsql-mcp)
- Source ID: `site-docs-reference-required-4`
- Final score: 166
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This document shows you how to use the Cloud SQL for SQL Server remote Model Context Protocol (MCP) server to connect with AI applications including Gemini CLI, ChatGPT, Claude, and custom applications you are developing.
- The Cloud SQL remote MCP server lets you access and run Cloud SQL tools to create, manage, and query Cloud SQL resources from your AI-enabled development environments and AI agent platforms. .
- Remote MCP servers Run on the service's infrastructure and offer an HTTP endpoint to AI applications for communication between the AI MCP client and the MCP server.
- Before you begin Required roles To get the permissions that you need to use the Cloud SQL remote MCP server, ask your administrator to grant you the following IAM roles on the project where you want to use the remote Cloud SQL MCP server: Make MCP tool calls in a project: MCP Tool User ( roles/mcp.toolUser ) Create an OAuth client ID: OAuth Config Editor ( roles/oauthconfig.editor ) Create, clone, or update a Cloud SQL instance: Cloud SQL Admin ( roles/cloudsql.admin ) Get a Cloud SQL instance or list all Cloud SQL instances in a project: Cloud SQL Viewer ( roles/cloudsql.viewer ) Import data into a Cloud SQL instance: Cloud SQL Admin ( roles/cloudsql.admin ) Storage Admin ( roles/storage.admin ) List Cloud SQL users: Cloud SQL Viewer ( roles/cloudsql.viewer ) For more information about granting roles, see Manage access to projects, folders, and organizations .

