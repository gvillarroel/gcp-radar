---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:57:14.587Z"
product_name: "Cloud SQL for SQL Server"
product_slug: "cloud-sql-for-sql-server"
feature_name: "change data capture"
feature_slug: "change-data-capture"
latest_feature_date: "2021-04-06"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/sqlserver/create-manage-databases"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/backups"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/data-residency-overview"
keywords:
  - "change"
  - "capture"
  - "sql"
  - "server"
  - "supports"
  - "operations"
  - "2017"
  - "editions"
---

# change data capture

Product: Cloud SQL for SQL Server
Coverage: LOW

## Step 02 Summary

Cloud SQL for SQL Server supports change data capture operations on supported SQL Server 2017 editions.

## Extended Definition

Cloud SQL for SQL Server supports change data capture operations on supported SQL Server 2017 editions.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/sqlserver/create-manage-databases](https://docs.cloud.google.com/sql/docs/sqlserver/create-manage-databases)
- [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/backups](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/backups)
- [https://docs.cloud.google.com/sql/docs/sqlserver/data-residency-overview](https://docs.cloud.google.com/sql/docs/sqlserver/data-residency-overview)

## Supporting Pages

### "Cloud SQL backups overview \_|\_ Cloud SQL for SQL Server \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/backups](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/backups)
- Source ID: `site-docs-reference-required-4`
- Final score: 35
- Re-rank relevance: N/A

Evidence snippets:
- Relevant log files include: cloudsql.googleapis.com/sqlagent.out cloudsql.googleapis.com/sqlserver.err If Cloud Audit Logs is enabled and you have the required permissions to view them, cloudaudit.googleapis.com/activity may also be available.
- Home Documentation Databases Cloud SQL SQL Server Guides Send feedback Cloud SQL backups overview Stay organized with collections Save and categorize content based on your preferences.
- When the oldest backup is deleted, the size of the next oldest backup increases to become a full backup and is adjusted to capture the difference between the backups.
- Your oldest backup is a similar size to your database, but the sizes of subsequent backups depend on the rate of change of your data.

### "Create and manage databases \_|\_ Cloud SQL for SQL Server \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/create-manage-databases](https://docs.cloud.google.com/sql/docs/sqlserver/create-manage-databases)
- Source ID: `site-docs-root`
- Final score: 35
- Re-rank relevance: N/A

Evidence snippets:
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method DELETE -Headers $headers -Uri "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id /databases/ database-name " Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id ", "status": "PENDING", "user": "user@example.com", "insertTime": "2020-01-21T22:43:37.981Z", "operationType": "DELETE DATABASE", "name": " operation-id ", "targetId": " instance-id ", "selfLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /operations/ operation-id ", "targetProject": " project-id " } Troubleshooting If a database has change data capture (CDC) enabled, and you try to delete it from the instance, then the operation fails.
- For information about collations in SQL Server, see Collation and Unicode Support in the SQL Server documentation. gcloud sql databases create DATABASE NAME \ --instance = INSTANCE NAME \ [ --charset = CHARSET ] \ [ --collation = COLLATION ] Terraform To create a database, use a Terraform resource . resource "google sql database" "database" { name = "my-database" instance = google sql database instance.instance.name } Apply the changes To apply your Terraform configuration in a Google Cloud project, complete the steps in the following sections.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id /databases" Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id ", "status": "PENDING", "user": "user@example.com", "insertTime": "2020-01-21T22:43:37.981Z", "operationType": "CREATE DATABASE", "name": " operation-id ", "targetId": " instance-id ", "selfLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /operations/ operation-id ", "targetProject": " project-id " } List your databases To list all databases on an instance: Console In the Google Cloud console, go to the Cloud SQL Instances page.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-id /databases" Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-id ", "status": "PENDING", "user": "user@example.com", "insertTime": "2020-01-21T22:43:37.981Z", "operationType": "CREATE DATABASE", "name": " operation-id ", "targetId": " instance-id ", "selfLink": "https://sqladmin.googleapis.com/v1/projects/ project-id /operations/ operation-id ", "targetProject": " project-id " } REST v1beta4 The following request uses the databases:insert method to create a new database on the specified instance.

### "Data residency overview \_|\_ Cloud SQL for SQL Server \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/data-residency-overview](https://docs.cloud.google.com/sql/docs/sqlserver/data-residency-overview)
- Source ID: `site-docs-root`
- Final score: 34
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Databases Cloud SQL SQL Server Guides Send feedback Data residency overview Stay organized with collections Save and categorize content based on your preferences.
- MySQL PostgreSQL SQL Server Overview This page explains how to use Cloud SQL to enforce data residency requirements.

