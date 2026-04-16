---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:56:51.868Z"
product_name: "Cloud SQL for MySQL"
product_slug: "cloud-sql-for-mysql"
feature_name: "Cloud SQL Data API administrative queries"
feature_slug: "cloud-sql-data-api-administrative-queries"
latest_feature_date: "2026-03-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/mysql/create-instance"
  - "https://docs.cloud.google.com/sql/docs/mysql/use-cloudsql-mcp"
  - "https://docs.cloud.google.com/sql/docs/mysql/features"
keywords:
  - "sql"
  - "administrative"
  - "queries"
  - "feature"
  - "lets"
  - "you"
  - "execute"
  - "statements"
---

# Cloud SQL Data API administrative queries

Product: Cloud SQL for MySQL
Coverage: MEDIUM

## Step 02 Summary

This feature lets you execute SQL statements for administrative queries through the Cloud SQL Data API.

## Extended Definition

This feature lets you execute SQL statements for administrative queries through the Cloud SQL Data API.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/mysql/create-instance](https://docs.cloud.google.com/sql/docs/mysql/create-instance)
- [https://docs.cloud.google.com/sql/docs/mysql/use-cloudsql-mcp](https://docs.cloud.google.com/sql/docs/mysql/use-cloudsql-mcp)
- [https://docs.cloud.google.com/sql/docs/mysql/features](https://docs.cloud.google.com/sql/docs/mysql/features)

## Supporting Pages

### Create instances \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/create-instance](https://docs.cloud.google.com/sql/docs/mysql/create-instance)
- Source ID: `site-docs-reference-3`
- Final score: 127
- Re-rank relevance: N/A

Evidence snippets:
- For Private IP-only instances, enabling Data API access lets authorized users connect and execute SQL statements from the public internet.
- If you set dataApiAccess to ALLOW DATA API , then you allow authorized users to use the Data API to connect to and execute SQL statements on your instance.
- Allow Data API By selecting this checkbox, you let authorized users to call the Data API to execute SQL statements on the instance.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method PUT -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-id /users?host=%25&name=root" Select-Object -Expand Content You should receive a JSON response similar to the following: { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-id ", "status": "DONE", "user": "user@example.com", "insertTime": "2019-09-26T14:32:30.592Z", "startTime": "2019-09-26T14:32:30.594Z", "endTime": "2019-09-26T14:32:33.518Z", "operationType": "UPDATE USER", "name": " operation-id ", "targetId": " instance-id ", "selfLink": "https://sqladmin.googleapis.com/v1/projects/ project-id /operations/ operation-id ", "targetProject": " project-id " } Retrieve the IPv4 address Retrieve the automatically assigned IPv4 address for the new instance: Before using any of the request data, make the following replacements: project-id : your project ID instance-id : instance ID created in prior step HTTP method and URL: GET https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-id To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .

### "Use the Cloud SQL remote MCP server \_|\_ Cloud SQL for MySQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/use-cloudsql-mcp](https://docs.cloud.google.com/sql/docs/mysql/use-cloudsql-mcp)
- Source ID: `site-docs-reference-required-5`
- Final score: 123
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Before you begin Required roles To get the permissions that you need to use the Cloud SQL remote MCP server, ask your administrator to grant you the following IAM roles on the project where you want to use the remote Cloud SQL MCP server: Make MCP tool calls in a project: MCP Tool User ( roles/mcp.toolUser ) Create an OAuth client ID: OAuth Config Editor ( roles/oauthconfig.editor ) Create, clone, or update a Cloud SQL instance: Cloud SQL Admin ( roles/cloudsql.admin ) Create or update a Cloud SQL user: Cloud SQL Admin ( roles/cloudsql.admin ) Execute SQL queries in Cloud SQL: Cloud SQL Admin ( roles/cloudsql.admin ) Cloud SQL Studio User ( roles/cloudsql.StudioUser ) Get a Cloud SQL instance or list all Cloud SQL instances in a project: Cloud SQL Viewer ( roles/cloudsql.viewer ) Import data into a Cloud SQL instance: Cloud SQL Admin ( roles/cloudsql.admin ) Storage Admin ( roles/storage.admin ) List Cloud SQL users: Cloud SQL Viewer ( roles/cloudsql.viewer ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to use the Cloud SQL remote MCP server: Make MCP tool calls: mcp.tools.call Clone a Cloud SQL instance: cloudsql.instances.clone Create a Cloud SQL instance: cloudsql.instances.create Create a Cloud SQL user: cloudsql.users.create Execute SQL queries on a Cloud SQL instance: cloudsql.instances.executeSql cloudsql.instances.login Get a Cloud SQL instance: cloudsql.instances.get Get a Cloud SQL instance operation: cloudsql.instances.get Import data to a Cloud SQL instance: cloudsql.instances.import List Cloud SQL instances in a project: cloudsql.instances.list List Cloud SQL users: cloudsql.users.list Update a Cloud SQL instance: cloudsql.instances.update Update a Cloud SQL user: cloudsql.users.update You might also be able to get these permissions with custom roles or other predefined roles .
- Available tools clone instance : creates a Cloud SQL instance as a clone of source instance. create instance : initiates the creation of a Cloud SQL instance. create user : creates a database user for a Cloud SQL instance. execute sql : executes any valid SQL statements (DDL, DCL, DQL, DML) on a Cloud SQL instance. get instance : gets the details of a Cloud SQL instance. get operation : gets the status of a long-running operation in Cloud SQL. list instances : lists all Cloud SQL instances in a project. list users : lists all database users for a Cloud SQL instance. import data : imports data into a Cloud SQL instance from Cloud Storage. update instance : updates supported settings of a Cloud SQL instance. update user : updates a database user for a Cloud SQL instance.
- POST /mcp HTTP/1.1 Host: sqladmin.googleapis.com Content-Type: application/json { "jsonrpc": "2.0", "method": "tools/list", } Execute SQL statements To execute SQL statements, your Cloud SQL instance must meet the following requirements: The data api access setting on the instance must be set to the value ALLOW DATA API .

### Cloud SQL for MySQL features \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/features](https://docs.cloud.google.com/sql/docs/mysql/features)
- Source ID: `site-docs-root`
- Final score: 100
- Re-rank relevance: N/A

Evidence snippets:
- In addition, Cloud SQL for MySQL doesn't grant the following privileges introduced in MySQL 8.4: TRANSACTION GTID TAG TELEMETRY LOG ADMIN MySQL plugins unsupported for Cloud SQL InnoDB memcached plugin X plugin Clone plugin InnoDB data-at-rest encryption validate password component MySQL statements unsupported for Cloud SQL The following SQL statements generate an error with the Error 1290: The MySQL server is running with the Google option so it cannot execute this statement message: LOAD DATA INFILE Note: LOAD DATA LOCAL INFILE is supported.
- SELECT statements Transactions or statements that update both transactional and nontransactional tables The following MySQL statement is unsupported for Cloud SQL for MySQL 5.6 and 5.7, but is supported for Cloud SQL for MySQL 8.0: CREATE TEMPORARY TABLE statements inside transactions For more information, see the MySQL documentation .
- MySQL features unsupported for Cloud SQL Federated Engine Memory Storage Engine The following feature is unsupported for Cloud SQL for MySQL 5.6 and 5.7: The SUPER privilege Note: Because Cloud SQL is a managed service, it restricts access to certain system procedures and tables that require advanced privileges.
- Cloud SQL features unsupported in Cloud SQL for MySQL 8.0 and later versions Cloud SQL for MySQL 8.0 and later versions don't support the legacy Cloud SQL for MySQL high availability (HA) configuration that uses failover replicas.

