---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:56:51.887Z"
product_name: "Cloud SQL for MySQL"
product_slug: "cloud-sql-for-mysql"
feature_name: "Saved queries in Cloud SQL Studio"
feature_slug: "saved-queries-in-cloud-sql-studio"
latest_feature_date: "2025-08-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/mysql/build-context-gemini-cli"
  - "https://docs.cloud.google.com/sql/docs/mysql/use-cloudsql-mcp"
  - "https://docs.cloud.google.com/sql/docs/mysql/quotas"
keywords:
  - "saved"
  - "queries"
  - "sql"
  - "studio"
  - "feature"
  - "lets"
  - "you"
  - "save"
---

# Saved queries in Cloud SQL Studio

Product: Cloud SQL for MySQL
Coverage: MEDIUM

## Step 02 Summary

This feature lets you save and manage SQL queries in Cloud SQL Studio.

## Extended Definition

This feature lets you save and manage SQL queries in Cloud SQL Studio.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/mysql/build-context-gemini-cli](https://docs.cloud.google.com/sql/docs/mysql/build-context-gemini-cli)
- [https://docs.cloud.google.com/sql/docs/mysql/use-cloudsql-mcp](https://docs.cloud.google.com/sql/docs/mysql/use-cloudsql-mcp)
- [https://docs.cloud.google.com/sql/docs/mysql/quotas](https://docs.cloud.google.com/sql/docs/mysql/quotas)

## Supporting Pages

### "Build context sets using Gemini CLI \_|\_ Cloud SQL for MySQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/build-context-gemini-cli](https://docs.cloud.google.com/sql/docs/mysql/build-context-gemini-cli)
- Source ID: `site-docs-reference-required-5`
- Final score: 115
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The context set file similar to my-cluster-psc-primary postgres templates 20251104111122.json is saved in the directory where you ran the commands.
- The context set file similar to my-cluster-psc-primary postgres templates 20251104111122.json is saved in the directory where you ran the commands.
- The context set file similar to my-cluster-psc-primary postgres templates 20251104111122.json is saved in the directory where you ran the commands.
- The context set file similar to my-cluster-psc-primary postgres templates 20251104111122.json is saved in the directory where you ran the commands.

### "Use the Cloud SQL remote MCP server \_|\_ Cloud SQL for MySQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/use-cloudsql-mcp](https://docs.cloud.google.com/sql/docs/mysql/use-cloudsql-mcp)
- Source ID: `site-docs-reference-required-5`
- Final score: 100
- Re-rank relevance: N/A

Evidence snippets:
- Before you begin Required roles To get the permissions that you need to use the Cloud SQL remote MCP server, ask your administrator to grant you the following IAM roles on the project where you want to use the remote Cloud SQL MCP server: Make MCP tool calls in a project: MCP Tool User ( roles/mcp.toolUser ) Create an OAuth client ID: OAuth Config Editor ( roles/oauthconfig.editor ) Create, clone, or update a Cloud SQL instance: Cloud SQL Admin ( roles/cloudsql.admin ) Create or update a Cloud SQL user: Cloud SQL Admin ( roles/cloudsql.admin ) Execute SQL queries in Cloud SQL: Cloud SQL Admin ( roles/cloudsql.admin ) Cloud SQL Studio User ( roles/cloudsql.StudioUser ) Get a Cloud SQL instance or list all Cloud SQL instances in a project: Cloud SQL Viewer ( roles/cloudsql.viewer ) Import data into a Cloud SQL instance: Cloud SQL Admin ( roles/cloudsql.admin ) Storage Admin ( roles/storage.admin ) List Cloud SQL users: Cloud SQL Viewer ( roles/cloudsql.viewer ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to use the Cloud SQL remote MCP server: Make MCP tool calls: mcp.tools.call Clone a Cloud SQL instance: cloudsql.instances.clone Create a Cloud SQL instance: cloudsql.instances.create Create a Cloud SQL user: cloudsql.users.create Execute SQL queries on a Cloud SQL instance: cloudsql.instances.executeSql cloudsql.instances.login Get a Cloud SQL instance: cloudsql.instances.get Get a Cloud SQL instance operation: cloudsql.instances.get Import data to a Cloud SQL instance: cloudsql.instances.import List Cloud SQL instances in a project: cloudsql.instances.list List Cloud SQL users: cloudsql.users.list Update a Cloud SQL instance: cloudsql.instances.update Update a Cloud SQL user: cloudsql.users.update You might also be able to get these permissions with custom roles or other predefined roles .
- Save the following content in your extension file: { "name" : " EXT NAME " , "version" : "1.0.0" , "mcpServers" : { "Cloud SQL MCP Server" : { "httpUrl" : "https://sqladmin.googleapis.com/mcp" , "authProviderType" : "google credentials" , "oauth" : { "scopes" : [ "https://www.googleapis.com/auth/cloud-platform" ] }, "timeout" : 30000 , "headers" : { "x-goog-user-project" : " PROJECT ID " } } } } Save the extensions file.
- MySQL PostgreSQL SQL Server Preview This feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms , and the Additional Terms for Generative AI Preview Products .

### Quotas and limits \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/quotas](https://docs.cloud.google.com/sql/docs/mysql/quotas)
- Source ID: `site-docs-root`
- Final score: 98
- Re-rank relevance: N/A

Evidence snippets:
- Saved queries limits Preview — Saved queries This feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .
- Value Limit Maximum number of saved queries per project (including saved queries for other Google Cloud products) 10,000 Maximum size for each query 1 MiB Cloud SQL storage limits Dedicated core: Up to 64 TB.
- Home Documentation Databases Cloud SQL MySQL Resources Send feedback Quotas and limits Stay organized with collections Save and categorize content based on your preferences.
- These quotas apply only to API calls; they don't include database queries.

