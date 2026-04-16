---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:57:14.562Z"
product_name: "Cloud SQL for SQL Server"
product_slug: "cloud-sql-for-sql-server"
feature_name: "bcp utility support"
feature_slug: "bcp-utility-support"
latest_feature_date: "2023-03-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/sqlserver/import-export/import-export-bak"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/import-export/import-export-sql"
  - "https://docs.cloud.google.com/mcp/authenticate-mcp"
keywords:
  - "bcp"
  - "utility"
  - "sql"
  - "supports"
  - "server"
  - "importing"
  - "exporting"
---

# bcp utility support

Product: Cloud SQL for SQL Server
Coverage: MEDIUM

## Step 02 Summary

Cloud SQL supports the SQL Server bcp utility for importing and exporting data.

## Extended Definition

Cloud SQL supports the SQL Server bcp utility for importing and exporting data.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/sqlserver/import-export/import-export-bak](https://docs.cloud.google.com/sql/docs/sqlserver/import-export/import-export-bak)
- [https://docs.cloud.google.com/sql/docs/sqlserver/import-export/import-export-sql](https://docs.cloud.google.com/sql/docs/sqlserver/import-export/import-export-sql)
- [https://docs.cloud.google.com/mcp/authenticate-mcp](https://docs.cloud.google.com/mcp/authenticate-mcp)

## Supporting Pages

### "Export and import using BAK files and transaction log files \_|\_ Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/import-export/import-export-bak](https://docs.cloud.google.com/sql/docs/sqlserver/import-export/import-export-bak)
- Source ID: `site-docs-root`
- Final score: 74
- Re-rank relevance: N/A

Evidence snippets:
- For example, Cloud SQL for SQL Server supports change data capture (CDC) for the following database versions: SQL Server 2017 Standard SQL Server 2017 Enterprise SQL Server 2019 Standard SQL Server 2019 Enterprise SQL Server 2022 Standard SQL Server 2022 Enterprise When importing a CDC-enabled database, the KEEP CDC flag is retained.
- MySQL PostgreSQL SQL Server This page describes exporting and importing data into Cloud SQL instances using BAK files and importing data into Cloud SQL instances using transaction log files.
- Required roles and permissions for exporting from Cloud SQL for SQL Server To export data from Cloud SQL into Cloud Storage, the user initiating the export must have one of the following roles: The Cloud SQL Editor role A custom role , including the following permissions: cloudsql.instances.get cloudsql.instances.export Additionally, the service account for the Cloud SQL instance must have one of the following roles: The storage.objectAdmin Identity and Access Management (IAM) role A custom role, including the following permissions: storage.objects.create storage.objects.list (for striped export and transaction log export) storage.objects.delete (for striped export and transaction log export) storage.buckets.get (for transaction log export only) For help with IAM roles, see Identity and Access Management .
- Import to Cloud SQL for SQL Server Required roles and permissions for importing to Cloud SQL for SQL Server To import data from Cloud Storage into Cloud SQL, the user initiating the import must have one of the following roles: The Cloud SQL Admin role A custom role , including the following permissions: cloudsql.instances.get cloudsql.instances.import Additionally, the service account for the Cloud SQL instance must have one of the following roles: The storage.objectAdmin IAM role A custom role, including the following permissions: storage.objects.get storage.objects.list (for striped import only) For help with IAM roles, see Identity and Access Management .

### "Export and import using SQL dump files \_|\_ Cloud SQL for SQL Server \_\

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/import-export/import-export-sql](https://docs.cloud.google.com/sql/docs/sqlserver/import-export/import-export-sql)
- Source ID: `site-docs-root`
- Final score: 66
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- MySQL PostgreSQL SQL Server This page describes exporting and importing data into Cloud SQL instances using SQL dump files.
- Import data to Cloud SQL for SQL Server Required roles and permissions for importing to Cloud SQL for SQL Server To import data from Cloud Storage into Cloud SQL, the user initiating the import must have one of the following roles: The Cloud SQL Admin role A custom role , including the following permissions: cloudsql.instances.get cloudsql.instances.import Additionally, the service account for the Cloud SQL instance must have one of the following roles: The storage.objectAdmin IAM role A custom role, including the following permissions: storage.objects.get storage.objects.list (for striped import only) For help with IAM roles, see Identity and Access Management .
- Export data from Cloud SQL for SQL Server Exporting from Cloud SQL to a SQL dump file is not supported for SQL Server.
- Exporting from Cloud SQL to a SQL dump file isn't supported for SQL Server.

### Authenticate to Google and Google Cloud MCP servers \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/mcp/authenticate-mcp](https://docs.cloud.google.com/mcp/authenticate-mcp)
- Source ID: `site-docs-reference-required-3`
- Final score: 48
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Local development environment To set up credentials for a local development environment, use one of the following ways: User credentials and ADC for MCP servers Service account impersonation User credentials and ADC for MCP servers To use your own identity for local development, provide your user credentials to Application Default Credentials (ADC).
- Home Documentation Developer tools Google Cloud MCP servers Guides Send feedback Authenticate to Google and Google Cloud MCP servers Stay organized with collections Save and categorize content based on your preferences.
- Create an OAuth client ID for your AI application Create an OAuth client ID and client secret to permit your AI application to authenticate to Google and Google Cloud remote MCP servers.
- How tool calling and authentication work When your AI application calls an MCP tool, it must authenticate to the MCP server hosting the tool, using the authentication method you supply.

