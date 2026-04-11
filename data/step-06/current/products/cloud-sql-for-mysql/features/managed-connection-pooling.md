---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:24:12.812Z"
product_name: "Cloud SQL for MySQL"
product_slug: "cloud-sql-for-mysql"
feature_name: "Managed Connection Pooling"
feature_slug: "managed-connection-pooling"
latest_feature_date: "2025-09-03"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/mysql/configure-mcp"
  - "https://docs.cloud.google.com/sql/docs/mysql/release-notes"
  - "https://docs.cloud.google.com/sql/docs/release-notes"
keywords:
  - "managed"
  - "connection"
  - "pooling"
  - "this"
  - "uses"
  - "to"
  - "optimize"
  - "resource"
---

# Managed Connection Pooling

Product: Cloud SQL for MySQL
Coverage: LOW

## Step 02 Summary

This feature uses connection pooling to optimize resource utilization and scale workloads for Cloud SQL instances; Managed Connection Pooling helps scale workloads by optimizing resource utilization through connection pooling for Cloud SQL instances.

## Extended Definition

This feature uses connection pooling to optimize resource utilization and scale workloads for Cloud SQL instances; Managed Connection Pooling helps scale workloads by optimizing resource utilization through connection pooling for Cloud SQL instances.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/mysql/configure-mcp](https://docs.cloud.google.com/sql/docs/mysql/configure-mcp)
- [https://docs.cloud.google.com/sql/docs/mysql/release-notes](https://docs.cloud.google.com/sql/docs/mysql/release-notes)
- [https://docs.cloud.google.com/sql/docs/release-notes](https://docs.cloud.google.com/sql/docs/release-notes)

## Supporting Pages

### "Configure Managed Connection Pooling \_|\_ Cloud SQL for MySQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/configure-mcp](https://docs.cloud.google.com/sql/docs/mysql/configure-mcp)
- Source ID: `site-iam-reference`
- Final score: 218
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method PATCH -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances/ INSTANCE ID " Select-Object -Expand Content You should receive a JSON response similar to the following: { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/sql/v1/projects/ PROJECT ID /instances/ INSTANCE ID ", "status": "PENDING", "user": "user@example.com", "insertTime": "2020-01-16T02:32:12.281Z", "operationType": "UPDATE", "name": " OPERATION ID ", "targetId": " INSTANCE ID ", "selfLink": "https://sqladmin.googleapis.com/sql/v1/projects/ PROJECT ID /operations/ OPERATION ID ", "targetProject": " PROJECT ID " } Terraform To modify Managed Connection Pooling Advanced configurations , use the following Terraform resource : This example shows modifying the flags of an existing Managed Connection Pooling configuration. resource "google sql database instance" "mysql managed connection pooling modify" { name = "mysql-instance-managed-connection-pooling-modify" region = "us-central1" database version = "MYSQL 8 0" deletion protection = false settings { tier = "db-perf-optimized-N-2" edition = "ENTERPRISE PLUS" connection pool config { connection pooling enabled = true flags { name = "max pool size" # Modify or add the name and value of an flag value = "10" } } } } Disable Managed Connection Pooling for an instance You can disable Managed Connection Pooling for an existing instance using the Google Cloud console, gcloud CLI , or the Cloud SQL API.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method PATCH -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances/ INSTANCE ID " Select-Object -Expand Content You should receive a JSON response similar to the following: { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/sql/v1/projects/ PROJECT ID /instances/ INSTANCE ID ", "status": "PENDING", "user": "user@example.com", "insertTime": "2020-01-16T02:32:12.281Z", "operationType": "UPDATE", "name": " OPERATION ID ", "targetId": " INSTANCE ID ", "selfLink": "https://sqladmin.googleapis.com/sql/v1/projects/ PROJECT ID /operations/ OPERATION ID ", "targetProject": " PROJECT ID " } Terraform Use the following Terraform resource : This example shows creating an instance with Managed Connection Pooling enabled and custom flags set. resource "google sql database instance" "mysql managed connection pooling enable" { name = "mysql-instance-managed-connection-pooling-enable" region = "us-central1" database version = "MYSQL 8 0" deletion protection = false settings { tier = "db-perf-optimized-N-2" edition = "ENTERPRISE PLUS" connection pool config { connection pooling enabled = true } } } Modify Managed Connection Pooling for an instance After you enable Managed Connection Pooling, you can customize Managed Connection Pooling to meet the needs of your instance using advanced configuration options.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method PATCH -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances/ INSTANCE ID " Select-Object -Expand Content You should receive a JSON response similar to the following: { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/sql/v1/projects/ PROJECT ID /instances/ INSTANCE ID ", "status": "PENDING", "user": "user@example.com", "insertTime": "2020-01-16T02:32:12.281Z", "operationType": "UPDATE", "name": " OPERATION ID ", "targetId": " INSTANCE ID ", "selfLink": "https://sqladmin.googleapis.com/sql/v1/projects/ PROJECT ID /operations/ OPERATION ID ", "targetProject": " PROJECT ID " } Terraform To disable Managed Connection Pooling for an instance, use the following Terraform resource : This example shows disabling Managed Connection Pooling on an existing instance. resource "google sql database instance" "mysql managed connection pooling disable" { name = "mysql-instance-managed-connection-pooling-disable" region = "us-central1" database version = "MYSQL 8 0" deletion protection = false settings { tier = "db-perf-optimized-N-2" edition = "ENTERPRISE PLUS" connection pool config { Set to false to disable Managed Connection Pooling.
- Note: This will cause your instance to restart. gcloud Use the gcloud sql instances command to disable Managed Connection Pooling. gcloud sql instances patch INSTANCE NAME \ --no-enable-connection-pooling Replace the following: PROJECT ID : the name of the Cloud SQL instance.

### Cloud SQL for MySQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/release-notes](https://docs.cloud.google.com/sql/docs/mysql/release-notes)
- Source ID: `site-docs-root`
- Final score: 190
- Re-rank relevance: N/A

Evidence snippets:
- March 31, 2025 Feature Cloud SQL now supports Managed Connection Pooling (MCP) in Preview , which lets you scale your workloads by optimizing resource utilization for your Cloud SQL instances using pooling.
- Managed Connection Pooling lets you scale your workloads by optimizing resource utilization for Cloud SQL instances using pooling.
- To use Managed Connection Pooling, update your instance to [MySQL version].R20250302.00 04 .
- This feature automates read pool scale in and scale out operations based on one or both of the following conditions: Allowed CPU usage of the read pool Allowed number of client connections to the read pool November 13, 2025 Feature Cloud SQL for MySQL now lets you have more control over the number of results that are returned when you perform an ANN vector search with filters.

### Cloud SQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/release-notes](https://docs.cloud.google.com/sql/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 188
- Re-rank relevance: N/A

Evidence snippets:
- March 31, 2025 Cloud SQL for MySQL Feature Cloud SQL now supports Managed Connection Pooling (MCP) in Preview , which lets you scale your workloads by optimizing resource utilization for your Cloud SQL instances using pooling.
- Cloud SQL for PostgreSQL Feature Cloud SQL now supports Managed Connection Pooling (MCP) in Preview , which lets you scale your workloads by optimizing resource utilization for your Cloud SQL instances using pooling.
- Managed Connection Pooling lets you scale your workloads by optimizing resource utilization for Cloud SQL instances using pooling.
- Managed Connection Pooling lets you scale your workloads by optimizing resource utilization for Cloud SQL instances using pooling.

