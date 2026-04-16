---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:57:14.566Z"
product_name: "Cloud SQL for SQL Server"
product_slug: "cloud-sql-for-sql-server"
feature_name: "Get user details API"
feature_slug: "get-user-details-api"
latest_feature_date: "2023-02-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/mysql/use-cloudsql-mcp"
  - "https://docs.cloud.google.com/sql/docs/postgres/use-cloudsql-mcp"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/create-instance"
keywords:
  - "get"
  - "user"
  - "details"
  - "sql"
  - "lets"
  - "you"
  - "retrieve"
  - "database"
---

# Get user details API

Product: Cloud SQL for SQL Server
Coverage: MEDIUM

## Step 02 Summary

Cloud SQL lets you retrieve details for a Cloud SQL user on a database instance by using the API or gcloud.

## Extended Definition

Cloud SQL lets you retrieve details for a Cloud SQL user on a database instance by using the API or gcloud.

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
- Final score: 136
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Available tools clone instance : creates a Cloud SQL instance as a clone of source instance. create instance : initiates the creation of a Cloud SQL instance. create user : creates a database user for a Cloud SQL instance. execute sql : executes any valid SQL statements (DDL, DCL, DQL, DML) on a Cloud SQL instance. get instance : gets the details of a Cloud SQL instance. get operation : gets the status of a long-running operation in Cloud SQL. list instances : lists all Cloud SQL instances in a project. list users : lists all database users for a Cloud SQL instance. import data : imports data into a Cloud SQL instance from Cloud Storage. update instance : updates supported settings of a Cloud SQL instance. update user : updates a database user for a Cloud SQL instance.
- Cloud SQL has the following MCP tool OAuth scopes: Scope URI for gcloud CLI Description https://www.googleapis.com/auth/cloud-platform Create, update, and list Cloud SQL resources including instances and database users.
- In this use case, using the Cloud SQL MCP server lets you build a new database and populate it with initial data for a new project using natural language.
- The SQL statements will use the privileges associated with the IAM database authentication user account .

### "Use the Cloud SQL remote MCP server \_|\_ Cloud SQL for PostgreSQL \_|\_\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/use-cloudsql-mcp](https://docs.cloud.google.com/sql/docs/postgres/use-cloudsql-mcp)
- Source ID: `site-docs-reference-required-4`
- Final score: 136
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Available tools clone instance : creates a Cloud SQL instance as a clone of source instance. create instance : initiates the creation of a Cloud SQL instance. create user : creates a database user for a Cloud SQL instance. execute sql : executes any valid SQL statements (DDL, DCL, DQL, DML) on a Cloud SQL instance. get instance : gets the details of a Cloud SQL instance. get operation : gets the status of a long-running operation in Cloud SQL. list instances : lists all Cloud SQL instances in a project. list users : lists all database users for a Cloud SQL instance. import data : imports data into a Cloud SQL instance from Cloud Storage. update instance : updates supported settings of a Cloud SQL instance. update user : updates a database user for a Cloud SQL instance.
- Cloud SQL has the following MCP tool OAuth scopes: Scope URI for gcloud CLI Description https://www.googleapis.com/auth/cloud-platform Create, update, and list Cloud SQL resources including instances and database users.
- In this use case, using the Cloud SQL MCP server lets you build a new database and populate it with initial data for a new project using natural language.
- The SQL statements will use the privileges associated with the IAM database authentication user account .

### Create instances \_|\_ Cloud SQL for SQL Server \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance)
- Source ID: `site-docs-root`
- Final score: 136
- Re-rank relevance: N/A

Evidence snippets:
- HTTP method and URL: POST https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances Request JSON body: { "name": " INSTANCE ID ", "region": " REGION ", "databaseVersion": " DATABASE VERSION ", "rootPassword": " PASSWORD ", "settings": { "tier": " MACHINE TYPE ", "edition": " EDITION TYPE ", "backupConfiguration": { "enabled": true }, "dataCacheConfig": { "dataCacheEnabled": DATA CACHE ENABLED }, "ipConfiguration": { "privateNetwork": " PRIVATE NETWORK ", "authorizedNetworks": [ AUTHORIZED NETWORKS ], "ipv4Enabled": false, "serverCaMode": " CA MODE ", "serverCertificateRotationMode": " SERVER CERTIFICATE ROTATION MODE ", "customSubjectAlternativeNames": " DNS NAMES " } }, "sqlNetworkArchitecture": "NEW NETWORK ARCHITECTURE" } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- HTTP method and URL: POST https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /instances Request JSON body: { "name": " INSTANCE ID ", "region": " REGION ", "databaseVersion": " DATABASE VERSION ", "rootPassword": " PASSWORD ", "settings": { "tier": " MACHINE TYPE ", "edition": " EDITION TYPE ", "backupConfiguration": { "enabled": true }, "dataCacheConfig": { "dataCacheEnabled": DATA CACHE ENABLED }, "ipConfiguration": { "privateNetwork": " PRIVATE NETWORK ", "authorizedNetworks": [ AUTHORIZED NETWORKS ], "ipv4Enabled": false, "serverCaMode": " CA MODE ", "serverCertificateRotationMode": " SERVER CERTIFICATE ROTATION MODE ", "customSubjectAlternativeNames": " DNS NAMES " } }, "sqlNetworkArchitecture": "NEW NETWORK ARCHITECTURE" } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Set the password for the user: gcloud sql users set-password sqlserver no-host --instance =[ INSTANCE NAME ] \ --password =[ PASSWORD ] Terraform To create an instance, use a Terraform resource . resource "google sql database instance" "default" { name = "sqlserver-instance" region = "us-central1" database version = "SQLSERVER 2019 STANDARD" root password = "INSERT-PASSWORD-HERE" settings { tier = "db-custom-2-7680" } } Apply the changes To apply your Terraform configuration in a Google Cloud project, complete the steps in the following sections.
- The collation field (not shown in the following basic API call) lets you to set a default value for the type of collation used for the databases in your instance.

