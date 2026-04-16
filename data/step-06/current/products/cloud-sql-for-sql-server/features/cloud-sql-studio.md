---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:57:14.551Z"
product_name: "Cloud SQL for SQL Server"
product_slug: "cloud-sql-for-sql-server"
feature_name: "Cloud SQL Studio"
feature_slug: "cloud-sql-studio"
latest_feature_date: "2024-07-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/mysql/use-cloudsql-mcp"
  - "https://docs.cloud.google.com/sql/docs/postgres/use-cloudsql-mcp"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/create-instance"
keywords:
  - "sql"
  - "studio"
  - "provides"
  - "browser"
  - "based"
  - "management"
  - "authorized"
  - "users"
---

# Cloud SQL Studio

Product: Cloud SQL for SQL Server
Coverage: MEDIUM

## Step 02 Summary

Cloud SQL Studio provides browser-based SQL data management for authorized users; Cloud SQL Studio lets authorized users run SQL queries and manage data from the Google Cloud console.

## Extended Definition

Cloud SQL Studio provides browser-based SQL data management for authorized users; Cloud SQL Studio lets authorized users run SQL queries and manage data from the Google Cloud console.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/mysql/use-cloudsql-mcp](https://docs.cloud.google.com/sql/docs/mysql/use-cloudsql-mcp)
- [https://docs.cloud.google.com/sql/docs/postgres/use-cloudsql-mcp](https://docs.cloud.google.com/sql/docs/postgres/use-cloudsql-mcp)
- [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance)

## Supporting Pages

### "Use the Cloud SQL remote MCP server \_|\_ Cloud SQL for MySQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/use-cloudsql-mcp](https://docs.cloud.google.com/sql/docs/mysql/use-cloudsql-mcp)
- Source ID: `site-docs-reference-required-4`
- Final score: 137
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Before you begin Required roles To get the permissions that you need to use the Cloud SQL remote MCP server, ask your administrator to grant you the following IAM roles on the project where you want to use the remote Cloud SQL MCP server: Make MCP tool calls in a project: MCP Tool User ( roles/mcp.toolUser ) Create an OAuth client ID: OAuth Config Editor ( roles/oauthconfig.editor ) Create, clone, or update a Cloud SQL instance: Cloud SQL Admin ( roles/cloudsql.admin ) Create or update a Cloud SQL user: Cloud SQL Admin ( roles/cloudsql.admin ) Execute SQL queries in Cloud SQL: Cloud SQL Admin ( roles/cloudsql.admin ) Cloud SQL Studio User ( roles/cloudsql.StudioUser ) Get a Cloud SQL instance or list all Cloud SQL instances in a project: Cloud SQL Viewer ( roles/cloudsql.viewer ) Import data into a Cloud SQL instance: Cloud SQL Admin ( roles/cloudsql.admin ) Storage Admin ( roles/storage.admin ) List Cloud SQL users: Cloud SQL Viewer ( roles/cloudsql.viewer ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- For example, you can deny or allow access based on: The principal Tool properties like read-only The application's OAuth client ID For more information, see Control MCP use with Identity and Access Management .
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to use the Cloud SQL remote MCP server: Make MCP tool calls: mcp.tools.call Clone a Cloud SQL instance: cloudsql.instances.clone Create a Cloud SQL instance: cloudsql.instances.create Create a Cloud SQL user: cloudsql.users.create Execute SQL queries on a Cloud SQL instance: cloudsql.instances.executeSql cloudsql.instances.login Get a Cloud SQL instance: cloudsql.instances.get Get a Cloud SQL instance operation: cloudsql.instances.get Import data to a Cloud SQL instance: cloudsql.instances.import List Cloud SQL instances in a project: cloudsql.instances.list List Cloud SQL users: cloudsql.users.list Update a Cloud SQL instance: cloudsql.instances.update Update a Cloud SQL user: cloudsql.users.update You might also be able to get these permissions with custom roles or other predefined roles .
- Available tools clone instance : creates a Cloud SQL instance as a clone of source instance. create instance : initiates the creation of a Cloud SQL instance. create user : creates a database user for a Cloud SQL instance. execute sql : executes any valid SQL statements (DDL, DCL, DQL, DML) on a Cloud SQL instance. get instance : gets the details of a Cloud SQL instance. get operation : gets the status of a long-running operation in Cloud SQL. list instances : lists all Cloud SQL instances in a project. list users : lists all database users for a Cloud SQL instance. import data : imports data into a Cloud SQL instance from Cloud Storage. update instance : updates supported settings of a Cloud SQL instance. update user : updates a database user for a Cloud SQL instance.

### "Use the Cloud SQL remote MCP server \_|\_ Cloud SQL for PostgreSQL \_|\_\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/use-cloudsql-mcp](https://docs.cloud.google.com/sql/docs/postgres/use-cloudsql-mcp)
- Source ID: `site-docs-reference-required-4`
- Final score: 137
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Before you begin Required roles To get the permissions that you need to use the Cloud SQL remote MCP server, ask your administrator to grant you the following IAM roles on the project where you want to use the remote Cloud SQL MCP server: Make MCP tool calls in a project: MCP Tool User ( roles/mcp.toolUser ) Create an OAuth client ID: OAuth Config Editor ( roles/oauthconfig.editor ) Create, clone, or update a Cloud SQL instance: Cloud SQL Admin ( roles/cloudsql.admin ) Create or update a Cloud SQL user: Cloud SQL Admin ( roles/cloudsql.admin ) Execute SQL queries in Cloud SQL: Cloud SQL Admin ( roles/cloudsql.admin ) Cloud SQL Studio User ( roles/cloudsql.StudioUser ) Get a Cloud SQL instance or list all Cloud SQL instances in a project: Cloud SQL Viewer ( roles/cloudsql.viewer ) Import data into a Cloud SQL instance: Cloud SQL Admin ( roles/cloudsql.admin ) Storage Admin ( roles/storage.admin ) List Cloud SQL users: Cloud SQL Viewer ( roles/cloudsql.viewer ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- For example, you can deny or allow access based on: The principal Tool properties like read-only The application's OAuth client ID For more information, see Control MCP use with Identity and Access Management .
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to use the Cloud SQL remote MCP server: Make MCP tool calls: mcp.tools.call Clone a Cloud SQL instance: cloudsql.instances.clone Create a Cloud SQL instance: cloudsql.instances.create Create a Cloud SQL user: cloudsql.users.create Execute SQL queries on a Cloud SQL instance: cloudsql.instances.executeSql cloudsql.instances.login Get a Cloud SQL instance: cloudsql.instances.get Get a Cloud SQL instance operation: cloudsql.instances.get Import data to a Cloud SQL instance: cloudsql.instances.import List Cloud SQL instances in a project: cloudsql.instances.list List Cloud SQL users: cloudsql.users.list Update a Cloud SQL instance: cloudsql.instances.update Update a Cloud SQL user: cloudsql.users.update You might also be able to get these permissions with custom roles or other predefined roles .
- Available tools clone instance : creates a Cloud SQL instance as a clone of source instance. create instance : initiates the creation of a Cloud SQL instance. create user : creates a database user for a Cloud SQL instance. execute sql : executes any valid SQL statements (DDL, DCL, DQL, DML) on a Cloud SQL instance. get instance : gets the details of a Cloud SQL instance. get operation : gets the status of a long-running operation in Cloud SQL. list instances : lists all Cloud SQL instances in a project. list users : lists all database users for a Cloud SQL instance. import data : imports data into a Cloud SQL instance from Cloud Storage. update instance : updates supported settings of a Cloud SQL instance. update user : updates a database user for a Cloud SQL instance.

### Create instances \_|\_ Cloud SQL for SQL Server \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance)
- Source ID: `site-docs-root`
- Final score: 106
- Re-rank relevance: N/A

Evidence snippets:
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances/ INSTANCE ID " Select-Object -Expand Content You should receive a JSON response similar to the following: { "kind": "sql#instance", "state": "RUNNABLE", "databaseVersion": " DATABASE VERSION ", "settings": { "authorizedGaeApplications": [], "tier": " MACHINE TYPE ", "kind": "sql#settings", "pricingPlan": "PER USE", "replicationType": "SYNCHRONOUS", "activationPolicy": "ALWAYS", "ipConfiguration": { "authorizedNetworks": [], "ipv4Enabled": true }, "locationPreference": { "zone": " ZONE ", "kind": "sql#locationPreference" }, "dataDiskType": "PD SSD", "backupConfiguration": { "startTime": "19:00", "kind": "sql#backupConfiguration", "enabled": true }, "settingsVersion": "1", "dataDiskSizeGb": "10" }, "etag": "--redacted--", "ipAddresses": [ { "type": "PRIMARY", " ipAddress ": " 10.0.0.1 " } ], "serverCaCert": { ... }, "instanceType": "CLOUD SQL INSTANCE", "project": " PROJECT ID ", "serviceAccountEmailAddress": "redacted@gcp-sa-cloud-sql.iam.gserviceaccount.com", "backendType": " BACKEND TYPE ", "selfLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances/ INSTANCE ID ", "connectionName": " PROJECT ID:REGION:INSTANCE ID ", "name": " INSTANCE ID ", "region": " REGION ", "gceZone": " ZONE " } To see how the underlying REST API request is constructed for this task, see the APIs Explorer on the instances:insert page .
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /instances/ INSTANCE ID " Select-Object -Expand Content You should receive a JSON response similar to the following: { "kind": "sql#instance", "state": "RUNNABLE", "databaseVersion": " DATABASE VERSION ", "settings": { "authorizedGaeApplications": [], "tier": " MACHINE TYPE ", "kind": "sql#settings", "pricingPlan": "PER USE", "replicationType": "SYNCHRONOUS", "activationPolicy": "ALWAYS", "ipConfiguration": { "authorizedNetworks": [], "ipv4Enabled": true }, "locationPreference": { "zone": " ZONE ", "kind": "sql#locationPreference" }, "dataDiskType": "PD SSD", "backupConfiguration": { "startTime": "19:00", "kind": "sql#backupConfiguration", "enabled": true }, "settingsVersion": "1", "dataDiskSizeGb": "10" }, "etag": "--redacted--", "ipAddresses": [ { "type": "PRIMARY", " ipAddress ": " 10.0.0.1 " } ], "serverCaCert": { ... }, "instanceType": "CLOUD SQL INSTANCE", "project": " PROJECT ID ", "serviceAccountEmailAddress": "redacted@gcp-sa-cloud-sql.iam.gserviceaccount.com", "backendType": " BACKEND TYPE ", "selfLink": "https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /instances/ INSTANCE ID ", "connectionName": " PROJECT ID:REGION:INSTANCE ID ", "name": " INSTANCE ID ", "region": " REGION ", "gceZone": " ZONE " } REST v1beta4 1.
- HTTP method and URL: POST https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances Request JSON body: { "name": " INSTANCE ID ", "region": " REGION ", "databaseVersion": " DATABASE VERSION ", "rootPassword": " PASSWORD ", "settings": { "tier": " MACHINE TYPE ", "edition": " EDITION TYPE ", "backupConfiguration": { "enabled": true }, "dataCacheConfig": { "dataCacheEnabled": DATA CACHE ENABLED }, "ipConfiguration": { "privateNetwork": " PRIVATE NETWORK ", "authorizedNetworks": [ AUTHORIZED NETWORKS ], "ipv4Enabled": false, "serverCaMode": " CA MODE ", "serverCertificateRotationMode": " SERVER CERTIFICATE ROTATION MODE ", "customSubjectAlternativeNames": " DNS NAMES " } }, "sqlNetworkArchitecture": "NEW NETWORK ARCHITECTURE" } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- HTTP method and URL: POST https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /instances Request JSON body: { "name": " INSTANCE ID ", "region": " REGION ", "databaseVersion": " DATABASE VERSION ", "rootPassword": " PASSWORD ", "settings": { "tier": " MACHINE TYPE ", "edition": " EDITION TYPE ", "backupConfiguration": { "enabled": true }, "dataCacheConfig": { "dataCacheEnabled": DATA CACHE ENABLED }, "ipConfiguration": { "privateNetwork": " PRIVATE NETWORK ", "authorizedNetworks": [ AUTHORIZED NETWORKS ], "ipv4Enabled": false, "serverCaMode": " CA MODE ", "serverCertificateRotationMode": " SERVER CERTIFICATE ROTATION MODE ", "customSubjectAlternativeNames": " DNS NAMES " } }, "sqlNetworkArchitecture": "NEW NETWORK ARCHITECTURE" } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .

