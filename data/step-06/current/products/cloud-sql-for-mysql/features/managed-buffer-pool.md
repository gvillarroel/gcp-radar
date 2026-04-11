---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:24:12.804Z"
product_name: "Cloud SQL for MySQL"
product_slug: "cloud-sql-for-mysql"
feature_name: "Managed buffer pool"
feature_slug: "managed-buffer-pool"
latest_feature_date: "2025-11-21"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/mysql/release-notes"
  - "https://docs.cloud.google.com/sql/docs/release-notes"
  - "https://docs.cloud.google.com/sql/docs/mysql/configure-mcp"
keywords:
  - "managed"
  - "buffer"
  - "pool"
  - "this"
  - "automatically"
  - "reduces"
  - "and"
  - "later"
---

# Managed buffer pool

Product: Cloud SQL for MySQL
Coverage: LOW

## Step 02 Summary

This feature automatically reduces and later restores InnoDB buffer pool size to help prevent out-of-memory events.

## Extended Definition

This feature automatically reduces and later restores InnoDB buffer pool size to help prevent out-of-memory events.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/mysql/release-notes](https://docs.cloud.google.com/sql/docs/mysql/release-notes)
- [https://docs.cloud.google.com/sql/docs/release-notes](https://docs.cloud.google.com/sql/docs/release-notes)
- [https://docs.cloud.google.com/sql/docs/mysql/configure-mcp](https://docs.cloud.google.com/sql/docs/mysql/configure-mcp)

## Supporting Pages

### Cloud SQL for MySQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/release-notes](https://docs.cloud.google.com/sql/docs/mysql/release-notes)
- Source ID: `site-docs-root`
- Final score: 168
- Re-rank relevance: N/A

Evidence snippets:
- When you enable managed buffer pool, Cloud SQL reduces the value of the innodb buffer pool size configuration and frees up memory when memory usage is high, and the instance is in danger of an OOM event.
- November 21, 2025 Feature To help prevent out-of-memory (OOM) events, you can enable managed buffer pool for Cloud SQL for MySQL 8.0 and later instances.
- To enable managed buffer pool, your Cloud SQL instance must use a maintenance version of [$MYSQL VERSION].R20251004.01 07 or later.
- This feature automates read pool scale in and scale out operations based on one or both of the following conditions: Allowed CPU usage of the read pool Allowed number of client connections to the read pool November 13, 2025 Feature Cloud SQL for MySQL now lets you have more control over the number of results that are returned when you perform an ANN vector search with filters.

### Cloud SQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/release-notes](https://docs.cloud.google.com/sql/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 168
- Re-rank relevance: N/A

Evidence snippets:
- When you enable managed buffer pool, Cloud SQL reduces the value of the innodb buffer pool size configuration and frees up memory when memory usage is high, and the instance is in danger of an OOM event.
- November 21, 2025 Cloud SQL for MySQL Feature To help prevent out-of-memory (OOM) events, you can enable managed buffer pool for Cloud SQL for MySQL 8.0 and later instances.
- To enable managed buffer pool, your Cloud SQL instance must use a maintenance version of [$MYSQL VERSION].R20251004.01 07 or later.
- This feature automates read pool scale in and scale out operations based on one or both of the following conditions: Allowed CPU usage of the read pool Allowed number of client connections to the read pool November 13, 2025 Cloud SQL for MySQL Feature Cloud SQL for MySQL now lets you have more control over the number of results that are returned when you perform an ANN vector search with filters.

### "Configure Managed Connection Pooling \_|\_ Cloud SQL for MySQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/configure-mcp](https://docs.cloud.google.com/sql/docs/mysql/configure-mcp)
- Source ID: `site-iam-reference`
- Final score: 134
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method PATCH -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances/ INSTANCE ID " Select-Object -Expand Content You should receive a JSON response similar to the following: { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/sql/v1/projects/ PROJECT ID /instances/ INSTANCE ID ", "status": "PENDING", "user": "user@example.com", "insertTime": "2020-01-16T02:32:12.281Z", "operationType": "UPDATE", "name": " OPERATION ID ", "targetId": " INSTANCE ID ", "selfLink": "https://sqladmin.googleapis.com/sql/v1/projects/ PROJECT ID /operations/ OPERATION ID ", "targetProject": " PROJECT ID " } Terraform To modify Managed Connection Pooling Advanced configurations , use the following Terraform resource : This example shows modifying the flags of an existing Managed Connection Pooling configuration. resource "google sql database instance" "mysql managed connection pooling modify" { name = "mysql-instance-managed-connection-pooling-modify" region = "us-central1" database version = "MYSQL 8 0" deletion protection = false settings { tier = "db-perf-optimized-N-2" edition = "ENTERPRISE PLUS" connection pool config { connection pooling enabled = true flags { name = "max pool size" # Modify or add the name and value of an flag value = "10" } } } } Disable Managed Connection Pooling for an instance You can disable Managed Connection Pooling for an existing instance using the Google Cloud console, gcloud CLI , or the Cloud SQL API.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method PATCH -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /instances/ INSTANCE ID " Select-Object -Expand Content You should receive a JSON response similar to the following: { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /instances/ INSTANCE ID ", "status": "PENDING", "user": "user@example.com", "insertTime": "2020-01-16T02:32:12.281Z", "operationType": "UPDATE", "name": " OPERATION ID ", "targetId": " INSTANCE ID ", "selfLink": "https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /operations/ OPERATION ID ", "targetProject": " PROJECT ID " } REST v1beta4 To modify Managed Connection Pooling Advanced configurations , use the following command and set ConnectionPoolConfig : Before using any of the request data, make the following replacements: PROJECT ID : the project ID INSTANCE ID : the instance ID HTTP method and URL: PATCH https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances/ INSTANCE ID Request JSON body: { "settings": { "connectionPoolConfig": { "flags": [ { "name": " CONFIGURATION NAME ", "value":" CONFIGURATION VALUE " } ] } } } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method PATCH -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /instances/ INSTANCE ID " Select-Object -Expand Content You should receive a JSON response similar to the following: { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /instances/ INSTANCE ID ", "status": "PENDING", "user": "user@example.com", "insertTime": "2020-01-16T02:32:12.281Z", "operationType": "UPDATE", "name": " OPERATION ID ", "targetId": " INSTANCE ID ", "selfLink": "https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /operations/ OPERATION ID ", "targetProject": " PROJECT ID " } REST v1beta4 To disable Managed Connection Pooling for an instance, use the following command and set connectionPoolingEnabled : Before using any of the request data, make the following replacements: PROJECT ID : the project ID INSTANCE ID : the instance ID HTTP method and URL: PATCH https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances/ INSTANCE ID Request JSON body: { "settings": { "connectionPoolConfig": { "connectionPoolingEnabled": false } } } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method PATCH -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances/ INSTANCE ID " Select-Object -Expand Content You should receive a JSON response similar to the following: { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/sql/v1/projects/ PROJECT ID /instances/ INSTANCE ID ", "status": "PENDING", "user": "user@example.com", "insertTime": "2020-01-16T02:32:12.281Z", "operationType": "UPDATE", "name": " OPERATION ID ", "targetId": " INSTANCE ID ", "selfLink": "https://sqladmin.googleapis.com/sql/v1/projects/ PROJECT ID /operations/ OPERATION ID ", "targetProject": " PROJECT ID " } Terraform Use the following Terraform resource : This example shows creating an instance with Managed Connection Pooling enabled and custom flags set. resource "google sql database instance" "mysql managed connection pooling enable" { name = "mysql-instance-managed-connection-pooling-enable" region = "us-central1" database version = "MYSQL 8 0" deletion protection = false settings { tier = "db-perf-optimized-N-2" edition = "ENTERPRISE PLUS" connection pool config { connection pooling enabled = true } } } Modify Managed Connection Pooling for an instance After you enable Managed Connection Pooling, you can customize Managed Connection Pooling to meet the needs of your instance using advanced configuration options.

