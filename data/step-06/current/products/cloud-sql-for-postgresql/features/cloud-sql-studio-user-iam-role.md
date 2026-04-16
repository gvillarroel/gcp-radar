---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T13:51:57.765Z"
product_name: "Cloud SQL for PostgreSQL"
product_slug: "cloud-sql-for-postgresql"
feature_name: "Cloud SQL Studio User IAM role"
feature_slug: "cloud-sql-studio-user-iam-role"
latest_feature_date: "2024-09-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/mysql/roles-and-permissions"
  - "https://docs.cloud.google.com/sql/docs/mysql/connect-auth-proxy"
  - "https://docs.cloud.google.com/sql/docs/postgres/configure-private-service-connect"
keywords:
  - "studio"
  - "without"
  - "provides"
  - "user"
  - "role"
  - "access"
---

# Cloud SQL Studio User IAM role

Product: Cloud SQL for PostgreSQL
Coverage: MEDIUM

## Step 02 Summary

The Cloud SQL Studio User IAM role provides access to Cloud SQL Studio without requiring the broader Cloud SQL Admin role.

## Extended Definition

The Cloud SQL Studio User IAM role provides access to Cloud SQL Studio without requiring the broader Cloud SQL Admin role.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/mysql/roles-and-permissions](https://docs.cloud.google.com/sql/docs/mysql/roles-and-permissions)
- [https://docs.cloud.google.com/sql/docs/mysql/connect-auth-proxy](https://docs.cloud.google.com/sql/docs/mysql/connect-auth-proxy)
- [https://docs.cloud.google.com/sql/docs/postgres/configure-private-service-connect](https://docs.cloud.google.com/sql/docs/postgres/configure-private-service-connect)

## Supporting Pages

### Roles and permissions \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/roles-and-permissions](https://docs.cloud.google.com/sql/docs/mysql/roles-and-permissions)
- Source ID: `site-iam-reference`
- Final score: 137
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Cloud SQL roles and permissions for Dataplex Universal Catalog integration To provide access to Cloud SQL metadata on Dataplex Universal Catalog, you can grant a user the roles/cloudsql.schemaViewer role or add the cloudsql.schemas.view permission to a custom role.
- MySQL PostgreSQL SQL Server This page provides information about Identity and Access Management (IAM) roles and permissions and how they're used with Cloud SQL instances.
- Before you make a resource accessible to other users, be sure you know what roles you want each of those people to play.
- If you remove a user's access, this change is immediately reflected in the metadata; however, the user may still have access to the object for a short period of time.

### "Connect using the Cloud SQL Auth Proxy \_|\_ Cloud SQL for MySQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/connect-auth-proxy](https://docs.cloud.google.com/sql/docs/mysql/connect-auth-proxy)
- Source ID: `site-iam-reference`
- Final score: 135
- Re-rank relevance: N/A

Evidence snippets:
- The Cloud SQL Auth Proxy is a connector that provides secure access to this instance without a need for authorized networks or for configuring SSL.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method PATCH -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id " Select-Object -Expand Content You should receive a JSON response similar to the following: { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id ", "status": "PENDING", "user": "user@example.com", "insertTime": "2020-01-16T02:32:12.281Z", "operationType": "UPDATE", "name": " operation-id ", "targetId": " instance-id ", "selfLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /operations/ operation-id ", "targetProject": " project-id " } To disable the enforcement, use "connectorEnforcement": "NOT REQUIRED" instead.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method PATCH -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-id " Select-Object -Expand Content You should receive a JSON response similar to the following: { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-id ", "status": "PENDING", "user": "user@example.com", "insertTime": "2020-01-16T02:32:12.281Z", "operationType": "UPDATE", "name": " operation-id ", "targetId": " instance-id ", "selfLink": "https://sqladmin.googleapis.com/v1/projects/ project-id /operations/ operation-id ", "targetProject": " project-id " } To disable the enforcement, use "connectorEnforcement": "NOT REQUIRED" instead.
- INSTANCE UNIX SOCKET , // e.g. '/cloudsql/project:region:instance' // Specify additional properties here. ... config , }); }; C# To see this snippet in the context of a web application, view the README on GitHub . using MySql.Data.MySqlClient ; using System ; namespace CloudSql { public class MySqlUnix { public static MySqlConnectionStringBuilder NewMysqlUnixSocketConnectionString () { // Equivalent connection string: // "Server=<INSTANCE UNIX SOCKET>;Uid=<DB USER>;Pwd=<DB PASS>;Database=<DB NAME>;Protocol=unix" var connectionString = new MySqlConnectionStringBuilder () { // The Cloud SQL proxy provides encryption between the proxy and instance.

### "Connect to an instance using Private Service Connect \_|\_ Cloud SQL for\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/configure-private-service-connect](https://docs.cloud.google.com/sql/docs/postgres/configure-private-service-connect)
- Source ID: `site-iam-reference`
- Final score: 127
- Re-rank relevance: N/A

Evidence snippets:
- To connect to the Cloud SQL instance, use the internal IP address. psql "sslmode=disable dbname= DATABASE NAME user= USERNAME hostaddr= IP ADDRESS " Make the following replacements: DATABASE NAME : the name of the Cloud SQL for PostgreSQL database that's contained within the instance USERNAME : the name of the user that's connecting to the instance IP ADDRESS : the endpoint's IP address Connect using the Cloud SQL Auth Proxy The Cloud SQL Auth Proxy is a connector that provides secure access to an instance with Private Service Connect enabled without a need for authorized networks or for configuring SSL.
- If you use Private Service Connect to connect to a Cloud SQL instance from multiple VPC networks, then each network has its own administrator. dns.admin Grants full control over Cloud DNS resources, including DNS zones and records. cloudsql.admin Provides full control of a Cloud SQL instance and controls the instance over its lifecycle. cloudsql.instanceUser Provides access to the Cloud SQL instance.
- User roles The following table provides information about the roles required to use Private Service Connect with a Cloud SQL instance: Role Description compute.networkAdmin Grants full control over the VPC network that initiates a connection to a Cloud SQL instance.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances/ INSTANCE ID " Select-Object -Expand Content You should receive a JSON response similar to the following: { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances/ INSTANCE ID ", "status": "PENDING", "user": USER , "insertTime": "2025-05-13T20:44:23.064Z", "operationType": "UPDATE", "targetId": " INSTANCE ID ", "selfLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /operations/ OPERATION ID ", "targetProject": " PROJECT ID "," } Test connectivity To test inbound connectivity to a Cloud SQL instance with Private Service Connect enabled, set the IP address of the Private Service Connect endpoint to be the destination IP address. gcloud To create a connectivity test for a Cloud SQL instance with Private Service Connect enabled, use the gcloud network-management connectivity-tests create command: gcloud network-management connectivity-tests create CONNECTIVITY TEST NAME \ --source-instance = SOURCE INSTANCE \ --destination-cloud-sql-instance = DESTINATION CLOUD SQL INSTANCE \ --destination-network = DESTINATION NETWORK \ --destination-port = DESTINATION PORT \ --protocol = tcp Make the following replacements: CONNECTIVITY TEST NAME : the name of the connectivity test.

