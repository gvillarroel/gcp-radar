---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:24:12.805Z"
product_name: "Cloud SQL for MySQL"
product_slug: "cloud-sql-for-mysql"
feature_name: "Read pool autoscaling"
feature_slug: "read-pool-autoscaling"
latest_feature_date: "2025-11-14"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/mysql/about-read-pools"
  - "https://docs.cloud.google.com/sql/docs/mysql/release-notes"
  - "https://docs.cloud.google.com/sql/docs/mysql/configure-mcp"
keywords:
  - "read"
  - "pool"
  - "autoscaling"
  - "this"
  - "automatically"
  - "scales"
  - "sql"
  - "for"
---

# Read pool autoscaling

Product: Cloud SQL for MySQL
Coverage: LOW

## Step 02 Summary

This feature automatically scales Cloud SQL for MySQL read pools based on CPU usage and client connections.

## Extended Definition

This feature automatically scales Cloud SQL for MySQL read pools based on CPU usage and client connections.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/mysql/about-read-pools](https://docs.cloud.google.com/sql/docs/mysql/about-read-pools)
- [https://docs.cloud.google.com/sql/docs/mysql/release-notes](https://docs.cloud.google.com/sql/docs/mysql/release-notes)
- [https://docs.cloud.google.com/sql/docs/mysql/configure-mcp](https://docs.cloud.google.com/sql/docs/mysql/configure-mcp)

## Supporting Pages

### About read pools \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/about-read-pools](https://docs.cloud.google.com/sql/docs/mysql/about-read-pools)
- Source ID: `site-iam-reference`
- Final score: 244
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- What's next Create and manage read pools Read pool autoscaling Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- When you modify read pool node settings such as storage, connectivity, or database configuration flags, the changes are automatically applied uniformly across each read pool node in the read pool.
- Read pool autoscaling To see how to configure your read pool to automatically resize to adapt to your application's changing workload needs, see Read pool autoscaling .
- Limitations The following limitations apply: Read pools are only available for Cloud SQL Enterprise Plus edition instances on the new network architecture .

### Cloud SQL for MySQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/release-notes](https://docs.cloud.google.com/sql/docs/mysql/release-notes)
- Source ID: `site-docs-root`
- Final score: 200
- Re-rank relevance: N/A

Evidence snippets:
- This feature automates read pool scale in and scale out operations based on one or both of the following conditions: Allowed CPU usage of the read pool Allowed number of client connections to the read pool November 13, 2025 Feature Cloud SQL for MySQL now lets you have more control over the number of results that are returned when you perform an ANN vector search with filters.
- November 14, 2025 Feature Cloud SQL for MySQL now supports read pool autoscaling (GA) , which helps you more easily manage your application's workload needs.
- September 08, 2025 Feature Cloud SQL read pools are now generally available and provide operational simplicity and scaling for your read workloads.
- February 09, 2024 Feature Cloud SQL now automatically updates your read replicas when you perform self-service maintenance on the primary instance.

### "Configure Managed Connection Pooling \_|\_ Cloud SQL for MySQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/configure-mcp](https://docs.cloud.google.com/sql/docs/mysql/configure-mcp)
- Source ID: `site-iam-reference`
- Final score: 198
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method PATCH -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances/ INSTANCE ID " Select-Object -Expand Content You should receive a JSON response similar to the following: { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/sql/v1/projects/ PROJECT ID /instances/ INSTANCE ID ", "status": "PENDING", "user": "user@example.com", "insertTime": "2020-01-16T02:32:12.281Z", "operationType": "UPDATE", "name": " OPERATION ID ", "targetId": " INSTANCE ID ", "selfLink": "https://sqladmin.googleapis.com/sql/v1/projects/ PROJECT ID /operations/ OPERATION ID ", "targetProject": " PROJECT ID " } Terraform To modify Managed Connection Pooling Advanced configurations , use the following Terraform resource : This example shows modifying the flags of an existing Managed Connection Pooling configuration. resource "google sql database instance" "mysql managed connection pooling modify" { name = "mysql-instance-managed-connection-pooling-modify" region = "us-central1" database version = "MYSQL 8 0" deletion protection = false settings { tier = "db-perf-optimized-N-2" edition = "ENTERPRISE PLUS" connection pool config { connection pooling enabled = true flags { name = "max pool size" # Modify or add the name and value of an flag value = "10" } } } } Disable Managed Connection Pooling for an instance You can disable Managed Connection Pooling for an existing instance using the Google Cloud console, gcloud CLI , or the Cloud SQL API.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method PATCH -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /instances/ INSTANCE ID " Select-Object -Expand Content You should receive a JSON response similar to the following: { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /instances/ INSTANCE ID ", "status": "PENDING", "user": "user@example.com", "insertTime": "2020-01-16T02:32:12.281Z", "operationType": "UPDATE", "name": " OPERATION ID ", "targetId": " INSTANCE ID ", "selfLink": "https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /operations/ OPERATION ID ", "targetProject": " PROJECT ID " } REST v1beta4 To modify Managed Connection Pooling Advanced configurations , use the following command and set ConnectionPoolConfig : Before using any of the request data, make the following replacements: PROJECT ID : the project ID INSTANCE ID : the instance ID HTTP method and URL: PATCH https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances/ INSTANCE ID Request JSON body: { "settings": { "connectionPoolConfig": { "flags": [ { "name": " CONFIGURATION NAME ", "value":" CONFIGURATION VALUE " } ] } } } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method PATCH -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /instances/ INSTANCE ID " Select-Object -Expand Content You should receive a JSON response similar to the following: { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /instances/ INSTANCE ID ", "status": "PENDING", "user": "user@example.com", "insertTime": "2020-01-16T02:32:12.281Z", "operationType": "UPDATE", "name": " OPERATION ID ", "targetId": " INSTANCE ID ", "selfLink": "https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /operations/ OPERATION ID ", "targetProject": " PROJECT ID " } REST v1beta4 To disable Managed Connection Pooling for an instance, use the following command and set connectionPoolingEnabled : Before using any of the request data, make the following replacements: PROJECT ID : the project ID INSTANCE ID : the instance ID HTTP method and URL: PATCH https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances/ INSTANCE ID Request JSON body: { "settings": { "connectionPoolConfig": { "connectionPoolingEnabled": false } } } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method PATCH -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances/ INSTANCE ID " Select-Object -Expand Content You should receive a JSON response similar to the following: { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/sql/v1/projects/ PROJECT ID /instances/ INSTANCE ID ", "status": "PENDING", "user": "user@example.com", "insertTime": "2020-01-16T02:32:12.281Z", "operationType": "UPDATE", "name": " OPERATION ID ", "targetId": " INSTANCE ID ", "selfLink": "https://sqladmin.googleapis.com/sql/v1/projects/ PROJECT ID /operations/ OPERATION ID ", "targetProject": " PROJECT ID " } Terraform Use the following Terraform resource : This example shows creating an instance with Managed Connection Pooling enabled and custom flags set. resource "google sql database instance" "mysql managed connection pooling enable" { name = "mysql-instance-managed-connection-pooling-enable" region = "us-central1" database version = "MYSQL 8 0" deletion protection = false settings { tier = "db-perf-optimized-N-2" edition = "ENTERPRISE PLUS" connection pool config { connection pooling enabled = true } } } Modify Managed Connection Pooling for an instance After you enable Managed Connection Pooling, you can customize Managed Connection Pooling to meet the needs of your instance using advanced configuration options.

