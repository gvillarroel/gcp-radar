---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:57:14.550Z"
product_name: "Cloud SQL for SQL Server"
product_slug: "cloud-sql-for-sql-server"
feature_name: "Cloud SQL instance custom organization policies"
feature_slug: "cloud-sql-instance-custom-organization-policies"
latest_feature_date: "2024-07-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/sqlserver/create-instance"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/backups"
  - "https://docs.cloud.google.com/sql/docs/mysql/use-cloudsql-mcp"
keywords:
  - "sql"
  - "instance"
  - "custom"
  - "organization"
  - "policies"
  - "supports"
  - "instances"
---

# Cloud SQL instance custom organization policies

Product: Cloud SQL for SQL Server
Coverage: MEDIUM

## Step 02 Summary

Cloud SQL supports custom organization policies for instances.

## Extended Definition

Cloud SQL supports custom organization policies for instances.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance)
- [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/backups](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/backups)
- [https://docs.cloud.google.com/sql/docs/mysql/use-cloudsql-mcp](https://docs.cloud.google.com/sql/docs/mysql/use-cloudsql-mcp)

## Supporting Pages

### Create instances \_|\_ Cloud SQL for SQL Server \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance)
- Source ID: `site-docs-root`
- Final score: 168
- Re-rank relevance: N/A

Evidence snippets:
- HTTP method and URL: POST https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances Request JSON body: { "name": " INSTANCE ID ", "region": " REGION ", "databaseVersion": " DATABASE VERSION ", "rootPassword": " PASSWORD ", "settings": { "tier": " MACHINE TYPE ", "edition": " EDITION TYPE ", "backupConfiguration": { "enabled": true }, "dataCacheConfig": { "dataCacheEnabled": DATA CACHE ENABLED }, "ipConfiguration": { "privateNetwork": " PRIVATE NETWORK ", "authorizedNetworks": [ AUTHORIZED NETWORKS ], "ipv4Enabled": false, "serverCaMode": " CA MODE ", "serverCertificateRotationMode": " SERVER CERTIFICATE ROTATION MODE ", "customSubjectAlternativeNames": " DNS NAMES " } }, "sqlNetworkArchitecture": "NEW NETWORK ARCHITECTURE" } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- HTTP method and URL: POST https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /instances Request JSON body: { "name": " INSTANCE ID ", "region": " REGION ", "databaseVersion": " DATABASE VERSION ", "rootPassword": " PASSWORD ", "settings": { "tier": " MACHINE TYPE ", "edition": " EDITION TYPE ", "backupConfiguration": { "enabled": true }, "dataCacheConfig": { "dataCacheEnabled": DATA CACHE ENABLED }, "ipConfiguration": { "privateNetwork": " PRIVATE NETWORK ", "authorizedNetworks": [ AUTHORIZED NETWORKS ], "ipv4Enabled": false, "serverCaMode": " CA MODE ", "serverCertificateRotationMode": " SERVER CERTIFICATE ROTATION MODE ", "customSubjectAlternativeNames": " DNS NAMES " } }, "sqlNetworkArchitecture": "NEW NETWORK ARCHITECTURE" } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Machine types for Cloud SQL Enterprise edition instances For Cloud SQL Enterprise edition instances, you can also create custom instance configurations using the gcloud sql instances create command.
- This feature is available in Preview and for CUSTOMER MANAGED CAS CA instances only.

### "Cloud SQL backups overview \_|\_ Cloud SQL for SQL Server \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/backups](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/backups)
- Source ID: `site-docs-reference-required-4`
- Final score: 140
- Re-rank relevance: N/A

Evidence snippets:
- You can also set an Cloud SQL custom organization policy to take a final back at instance deletion for all instances in your organization and set a standard retention period.
- This way, you can recreate any instances that you delete accidentally without contacting Cloud Customer Care .
- For more information, see Example custom organization policies for common use cases .
- If you create a new instance with the final backup instance setting enabled, then you must update the final backup organization policy to apply the backup configurations to the primary instance only.

### "Use the Cloud SQL remote MCP server \_|\_ Cloud SQL for MySQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/use-cloudsql-mcp](https://docs.cloud.google.com/sql/docs/mysql/use-cloudsql-mcp)
- Source ID: `site-docs-reference-required-4`
- Final score: 134
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Before you begin Required roles To get the permissions that you need to use the Cloud SQL remote MCP server, ask your administrator to grant you the following IAM roles on the project where you want to use the remote Cloud SQL MCP server: Make MCP tool calls in a project: MCP Tool User ( roles/mcp.toolUser ) Create an OAuth client ID: OAuth Config Editor ( roles/oauthconfig.editor ) Create, clone, or update a Cloud SQL instance: Cloud SQL Admin ( roles/cloudsql.admin ) Create or update a Cloud SQL user: Cloud SQL Admin ( roles/cloudsql.admin ) Execute SQL queries in Cloud SQL: Cloud SQL Admin ( roles/cloudsql.admin ) Cloud SQL Studio User ( roles/cloudsql.StudioUser ) Get a Cloud SQL instance or list all Cloud SQL instances in a project: Cloud SQL Viewer ( roles/cloudsql.viewer ) Import data into a Cloud SQL instance: Cloud SQL Admin ( roles/cloudsql.admin ) Storage Admin ( roles/storage.admin ) List Cloud SQL users: Cloud SQL Viewer ( roles/cloudsql.viewer ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to use the Cloud SQL remote MCP server: Make MCP tool calls: mcp.tools.call Clone a Cloud SQL instance: cloudsql.instances.clone Create a Cloud SQL instance: cloudsql.instances.create Create a Cloud SQL user: cloudsql.users.create Execute SQL queries on a Cloud SQL instance: cloudsql.instances.executeSql cloudsql.instances.login Get a Cloud SQL instance: cloudsql.instances.get Get a Cloud SQL instance operation: cloudsql.instances.get Import data to a Cloud SQL instance: cloudsql.instances.import List Cloud SQL instances in a project: cloudsql.instances.list List Cloud SQL users: cloudsql.users.list Update a Cloud SQL instance: cloudsql.instances.update Update a Cloud SQL user: cloudsql.users.update You might also be able to get these permissions with custom roles or other predefined roles .
- Available tools clone instance : creates a Cloud SQL instance as a clone of source instance. create instance : initiates the creation of a Cloud SQL instance. create user : creates a database user for a Cloud SQL instance. execute sql : executes any valid SQL statements (DDL, DCL, DQL, DML) on a Cloud SQL instance. get instance : gets the details of a Cloud SQL instance. get operation : gets the status of a long-running operation in Cloud SQL. list instances : lists all Cloud SQL instances in a project. list users : lists all database users for a Cloud SQL instance. import data : imports data into a Cloud SQL instance from Cloud Storage. update instance : updates supported settings of a Cloud SQL instance. update user : updates a database user for a Cloud SQL instance.
- The response is similar to the following: Configured MCP servers: 🟢 Cloud SQL MCP Server (from sqladmin ) - list instances - get instance - clone instance - create instance - update instance - execute sql - import data - create user - update user - list users - get operation The remote MCP server is ready to use in Gemini CLI.

