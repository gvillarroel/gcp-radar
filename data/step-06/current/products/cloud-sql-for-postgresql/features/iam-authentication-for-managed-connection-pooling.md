---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T13:51:57.747Z"
product_name: "Cloud SQL for PostgreSQL"
product_slug: "cloud-sql-for-postgresql"
feature_name: "IAM authentication for Managed Connection Pooling"
feature_slug: "iam-authentication-for-managed-connection-pooling"
latest_feature_date: "2025-09-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/mysql/project-access-control"
  - "https://docs.cloud.google.com/sql/docs/postgres/create-instance"
  - "https://docs.cloud.google.com/sql/docs/postgres/configure-mcp"
keywords:
  - "pooling"
  - "secure"
  - "authentication"
  - "connection"
  - "managed"
  - "users"
  - "lets"
---

# IAM authentication for Managed Connection Pooling

Product: Cloud SQL for PostgreSQL
Coverage: MEDIUM

## Step 02 Summary

IAM authentication for Managed Connection Pooling lets users secure pooled connections with IAM-based authentication.

## Extended Definition

IAM authentication for Managed Connection Pooling lets users secure pooled connections with IAM-based authentication.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/mysql/project-access-control](https://docs.cloud.google.com/sql/docs/mysql/project-access-control)
- [https://docs.cloud.google.com/sql/docs/postgres/create-instance](https://docs.cloud.google.com/sql/docs/postgres/create-instance)
- [https://docs.cloud.google.com/sql/docs/postgres/configure-mcp](https://docs.cloud.google.com/sql/docs/postgres/configure-mcp)

## Supporting Pages

### IAM authentication \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/project-access-control](https://docs.cloud.google.com/sql/docs/mysql/project-access-control)
- Source ID: `site-iam-reference`
- Final score: 166
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Feature Built-in database authentication IAM database authentication (individual) IAM group authentication Authentication method Password Temporary authentication token Temporary authentication token Network traffic encryption SSL not required SSL required SSL required User management Manual Centralized through IAM Centralized through IAM and Cloud Identity groups IAM group authentication IAM group authentication lets you manage Cloud SQL users at a group level.
- For this reason, we don't recommend that you use manual IAM database authentication for long-lived processes or applications that rely on connection pooling.
- With automatic IAM database authentication, users need to pass only the IAM database username in a connection request from the client.
- Automatic IAM database authentication Automatic IAM database authentication lets you hand off requesting and managing access tokens to an intermediary Cloud SQL connector , such as the Cloud SQL Auth Proxy or one of the Cloud SQL Language Connectors.

### Create instances \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/create-instance](https://docs.cloud.google.com/sql/docs/postgres/create-instance)
- Source ID: `site-docs-root`
- Final score: 160
- Re-rank relevance: N/A

Evidence snippets:
- Managed Connection Pooling lets you scale your workloads by optimizing resource utilization and connection latency Cloud SQL instances using pooling and multiplexing.
- Note: This feature is only available for Cloud SQL Enterprise Plus edition instances that are configured to meet Managed Connection Pooling requirements.
- Connectivity Managed Connection Pooling --enable-connection-pooling Enables Managed Connection Pooling in the new instance.
- Enable Managed Connection Pooling By selecting this checkbox, you enable Managed Connection Pooling for your instance.

### "Configure Managed Connection Pooling \_|\_ Cloud SQL for PostgreSQL \_|\_\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/configure-mcp](https://docs.cloud.google.com/sql/docs/postgres/configure-mcp)
- Source ID: `site-iam-reference`
- Final score: 155
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Managed Connection Pooling lets you scale your workloads by optimizing resource utilization and connection latency for your instances using pooling.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method PATCH -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /instances/ INSTANCE ID " Select-Object -Expand Content You should receive a JSON response similar to the following: { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /instances/ INSTANCE ID ", "status": "PENDING", "user": "user@example.com", "insertTime": "2020-01-16T02:32:12.281Z", "operationType": "UPDATE", "name": " OPERATION ID ", "targetId": " INSTANCE ID ", "selfLink": "https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /operations/ OPERATION ID ", "targetProject": " PROJECT ID " } REST v1beta4 To modify Managed Connection Pooling Advanced configurations , use the following command and set ConnectionPoolConfig : Before using any of the request data, make the following replacements: PROJECT ID : the project ID INSTANCE ID : the instance ID HTTP method and URL: PATCH https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances/ INSTANCE ID Request JSON body: { "settings": { "connectionPoolConfig": { "flags": [ { "name": " CONFIGURATION NAME ", "value":" CONFIGURATION VALUE " } ] } } } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method PATCH -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /instances/ INSTANCE ID " Select-Object -Expand Content You should receive a JSON response similar to the following: { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /instances/ INSTANCE ID ", "status": "PENDING", "user": "user@example.com", "insertTime": "2020-01-16T02:32:12.281Z", "operationType": "UPDATE", "name": " OPERATION ID ", "targetId": " INSTANCE ID ", "selfLink": "https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /operations/ OPERATION ID ", "targetProject": " PROJECT ID " } REST v1beta4 To disable Managed Connection Pooling for an instance, use the following command and set connectionPoolingEnabled : Before using any of the request data, make the following replacements: PROJECT ID : the project ID INSTANCE ID : the instance ID HTTP method and URL: PATCH https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances/ INSTANCE ID Request JSON body: { "settings": { "connectionPoolConfig": { "connectionPoolingEnabled": false } } } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method PATCH -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances/ INSTANCE ID " Select-Object -Expand Content You should receive a JSON response similar to the following: { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/sql/v1/projects/ PROJECT ID /instances/ INSTANCE ID ", "status": "PENDING", "user": "user@example.com", "insertTime": "2020-01-16T02:32:12.281Z", "operationType": "UPDATE", "name": " OPERATION ID ", "targetId": " INSTANCE ID ", "selfLink": "https://sqladmin.googleapis.com/sql/v1/projects/ PROJECT ID /operations/ OPERATION ID ", "targetProject": " PROJECT ID " } Terraform To modify Managed Connection Pooling Advanced configurations , use the following Terraform resource : resource "google sql database instance" "postgres managed connection pooling modify" { name = "postgres-instance-managed-connection-pooling-modify" region = "us-central1" database version = "POSTGRES 16" deletion protection = false settings { tier = "db-perf-optimized-N-2" edition = "ENTERPRISE PLUS" connection pool config { connection pooling enabled = true flags { name = "max pool size" # Modify the value of an existing flag value = "10" } } } } Disable Managed Connection Pooling for an instance You can disable Managed Connection Pooling for an existing instance using the Google Cloud console, gcloud CLI , or the Cloud SQL API.

