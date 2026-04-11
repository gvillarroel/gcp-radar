---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:45:01.420Z"
product_name: "Cloud SQL for PostgreSQL"
product_slug: "cloud-sql-for-postgresql"
feature_name: "IAM database authentication with Cloud SQL Auth Proxy"
feature_slug: "iam-database-authentication-with-cloud-sql-auth-proxy"
latest_feature_date: "2021-04-06"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/postgres/add-manage-iam-users"
  - "https://docs.cloud.google.com/sql/docs/mysql/connect-auth-proxy"
  - "https://docs.cloud.google.com/sql/docs/postgres/connect-auth-proxy"
keywords:
  - "iam"
  - "database"
  - "authentication"
  - "with"
  - "sql"
  - "auth"
  - "proxy"
  - "for"
---

# IAM database authentication with Cloud SQL Auth Proxy

Product: Cloud SQL for PostgreSQL
Coverage: LOW

## Step 02 Summary

Cloud SQL for PostgreSQL supports IAM database authentication through the Cloud SQL Auth Proxy with automatic OAuth 2.0 token refresh.

## Extended Definition

Cloud SQL for PostgreSQL supports IAM database authentication through the Cloud SQL Auth Proxy with automatic OAuth 2.0 token refresh.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/postgres/add-manage-iam-users](https://docs.cloud.google.com/sql/docs/postgres/add-manage-iam-users)
- [https://docs.cloud.google.com/sql/docs/mysql/connect-auth-proxy](https://docs.cloud.google.com/sql/docs/mysql/connect-auth-proxy)
- [https://docs.cloud.google.com/sql/docs/postgres/connect-auth-proxy](https://docs.cloud.google.com/sql/docs/postgres/connect-auth-proxy)

## Supporting Pages

### "Manage users with IAM database authentication \_|\_ Cloud SQL for PostgreSQL\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/add-manage-iam-users](https://docs.cloud.google.com/sql/docs/postgres/add-manage-iam-users)
- Source ID: `site-iam-reference`
- Final score: 294
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Terraform To add IAM user and service accounts on an instance with IAM database authentication enabled, use a Terraform resource . resource "google sql database instance" "default" { name = "postgres-db-auth-instance-name-test" region = "us-west4" database version = "POSTGRES 14" settings { tier = "db-custom-2-7680" database flags { name = "cloudsql.iam authentication" value = "on" } } } Specify the email address of the IAM user to add to the instance This resource does not create a new IAM user account; this account must already exist resource "google sql user" "iam user" { name = "test-user@example.com" instance = google sql database instance.default.name type = "CLOUD IAM USER" } Specify the email address of the IAM service account to add to the instance This resource does not create a new IAM service account; this service account must already exist Create a new IAM service account resource "google service account" "default" { account id = "cloud-sql-postgres-sa" display name = "Cloud SQL for Postgres Service Account" } resource "google sql user" "iam service account user" { Note: for PostgreSQL only, Google Cloud requires that you omit the ".gserviceaccount.com" suffix from the service account email due to length limits on database usernames. name = trimsuffix(google service account.default.email, ".gserviceaccount.com") instance = google sql database instance.default.name type = "CLOUD IAM SERVICE ACCOUNT" } Apply the changes To apply your Terraform configuration in a Google Cloud project, complete the steps in the following sections.
- Terraform To add IAM user and service accounts on an instance with IAM database authentication enabled, use a Terraform resource . resource "google sql database instance" "default" { name = "postgres-iam-group-auth-instance-name" region = "us-west4" database version = "POSTGRES 16" settings { tier = "db-custom-2-7680" database flags { name = "cloudsql.iam authentication" value = "on" } } } Specify the email address of the Cloud Identity group to add to the instance This resource does not create a Cloud Identity group; the group must already exist resource "google sql user" "iam group" { name = "example-group@example.com" instance = google sql database instance.default.name type = "CLOUD IAM GROUP" } data "google project" "project" { } resource "google project iam binding" "cloud sql user" { project = data.google project.project.project id role = "roles/cloudsql.instanceUser" members = [ "group:example-group@example.com" ] } Apply the changes To apply your Terraform configuration in a Google Cloud project, complete the steps in the following sections.
- Terraform To add IAM user and service accounts on an instance with IAM database authentication enabled, use a Terraform resource . resource "google sql user" "iam user" { name = "test-user@example.com" instance = google sql database instance.default.name type = "CLOUD IAM USER" Specify the list of database roles to be granted to the user The database roles must exist in the database. database roles = ["cloudsqlsuperuser"] } Apply the changes To apply your Terraform configuration in a Google Cloud project, complete the steps in the following sections.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method PUT -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /instances/ INSTANCE ID /users" Select-Object -Expand Content You should receive a JSON response similar to the following: { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /instances/ INSTANCE ID ", "status": "DONE", "user": "user@example.com", "insertTime": "2025-10-07T22:44:16.656Z", "startTime": "2025-10-07T22:44:16.686Z", "endTime": "2025-10-07T22:44:20.437Z", "operationType": "CREATE USER", "name": " OPERATION ID ", "targetId": " INSTANCE ID ", "selfLink": "https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /operations/ OPERATION ID ", "targetProject": " PROJECT ID " } REST v1beta4 Before using any of the request data, make the following replacements: PROJECT ID : the project ID INSTANCE ID : the instance ID for the instance you are adding the user to USERNAME : the email address for the user USER TYPE : the Cloud SQL user type, which can be one of the following IAM user types: CLOUD IAM USER CLOUD IAM SERVICE ACCOUNT CLOUD IAM GROUP ROLE 1 , ROLE 2 ..., ROLE N : the database role or roles to assign to the IAM user, service account, or group REVOKE EXISTING ROLES : set to true to revoke the user's existing roles, set to false to keep the user's existing roles HTTP method and URL: PUT https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances/ INSTANCE ID /users Request JSON body: { "name": " USERNAME ", "type": " USER TYPE ", "databaseRoles": [ " ROLE 1 ", " ROLE 2 " ], "revokeExistingRoles": REVOKE EXISTING ROLES } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .

### "Connect using the Cloud SQL Auth Proxy \_|\_ Cloud SQL for MySQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/connect-auth-proxy](https://docs.cloud.google.com/sql/docs/mysql/connect-auth-proxy)
- Source ID: `site-iam-reference`
- Final score: 290
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Some possible Cloud SQL Auth Proxy invocation strings: Using Cloud SDK authentication: ./cloud-sql-proxy --port 3306 INSTANCE CONNECTION NAME The specified port must not already be in use, for example, by a local database server.
- Important: Starting in Cloud SQL for MySQL 8.4, the mysql native password authentication plugin is deprecated and new database users are created with the caching sha2 password plugin.
- When setting INSTANCE UNIX SOCKET, the connector will // call an external package that will enable Unix socket connections. // Note: For Java users, the Cloud SQL Java Connector can provide authenticated connections // which is usually preferable to using the Cloud SQL Proxy with Unix sockets. // See https://github.com/GoogleCloudPlatform/cloud-sql-jdbc-socket-factory for details. if ( INSTANCE UNIX SOCKET != null ) { config . addDataSourceProperty ( "unixSocketPath" , INSTANCE UNIX SOCKET ); } // cloudSqlRefreshStrategy set to "lazy" is used to perform a // refresh when needed, rather than on a scheduled interval. // This is recommended for serverless environments to // avoid background refreshes from throttling CPU. config . addDataSourceProperty ( "cloudSqlRefreshStrategy" , "lazy" ); // ...
- The Cloud SQL Auth Proxy: Works with both public and private IP endpoints Validates connections using credentials for a user or service account Wraps the connection in a SSL/TLS layer that's authorized for a Cloud SQL instance Some Google Cloud services and applications use the Cloud SQL Auth Proxy to provide connections for public IP paths with encryption and authorization, including: App Engine standard environment App Engine flexible environment Cloud Run Applications running in Google Kubernetes Engine can connect using the Cloud SQL Auth Proxy .

### "Connect using the Cloud SQL Auth Proxy \_|\_ Cloud SQL for PostgreSQL \_\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/connect-auth-proxy](https://docs.cloud.google.com/sql/docs/postgres/connect-auth-proxy)
- Source ID: `site-iam-reference`
- Final score: 280
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- IAM user database authentication is integrated with the Cloud SQL Auth Proxy.
- Some possible Cloud SQL Auth Proxy invocation strings: Using Cloud SDK authentication: ./cloud-sql-proxy --port 5432 INSTANCE CONNECTION NAME The specified port must not already be in use, for example, by a local database server.
- When setting INSTANCE UNIX SOCKET, the connector will // call an external package that will enable Unix socket connections. // Note: For Java users, the Cloud SQL Java Connector can provide authenticated connections // which is usually preferable to using the Cloud SQL Proxy with Unix sockets. // See https://github.com/GoogleCloudPlatform/cloud-sql-jdbc-socket-factory for details. if ( INSTANCE UNIX SOCKET != null ) { config . addDataSourceProperty ( "unixSocketPath" , INSTANCE UNIX SOCKET ); } // cloudSqlRefreshStrategy set to "lazy" is used to perform a // refresh when needed, rather than on a scheduled interval. // This is recommended for serverless environments to // avoid background refreshes from throttling CPU. config . addDataSourceProperty ( "cloudSqlRefreshStrategy" , "lazy" ); // ...
- The Cloud SQL Auth Proxy: Works with both public and private IP endpoints Validates connections using credentials for a user or service account Wraps the connection in a SSL/TLS layer that's authorized for a Cloud SQL instance Some Google Cloud services and applications use the Cloud SQL Auth Proxy to provide connections for public IP paths with encryption and authorization, including: App Engine standard environment App Engine flexible environment Cloud Run Applications running in Google Kubernetes Engine can connect using the Cloud SQL Auth Proxy .

