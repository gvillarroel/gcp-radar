---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:24:12.945Z"
product_name: "Cloud SQL for MySQL"
product_slug: "cloud-sql-for-mysql"
feature_name: "MySQL 8.0 support"
feature_slug: "mysql-8-0-support"
latest_feature_date: "2020-08-25"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/MySqlSyncConfig"
  - "https://docs.cloud.google.com/sql/docs/mysql/release-notes"
  - "https://docs.cloud.google.com/sql/docs/mysql/configure-ha"
keywords:
  - "mysql"
  - "sql"
  - "for"
  - "is"
  - "generally"
  - "available"
---

# MySQL 8.0 support

Product: Cloud SQL for MySQL
Coverage: LOW

## Step 02 Summary

Cloud SQL for MySQL 8.0 is generally available.

## Extended Definition

Cloud SQL for MySQL 8.0 is generally available.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/MySqlSyncConfig](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/MySqlSyncConfig)
- [https://docs.cloud.google.com/sql/docs/mysql/release-notes](https://docs.cloud.google.com/sql/docs/mysql/release-notes)
- [https://docs.cloud.google.com/sql/docs/mysql/configure-ha](https://docs.cloud.google.com/sql/docs/mysql/configure-ha)

## Supporting Pages

### MySqlSyncConfig \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/MySqlSyncConfig](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/MySqlSyncConfig)
- Source ID: `site-api-reference`
- Final score: 220
- Re-rank relevance: N/A

Evidence snippets:
- Currently used for the MySQL external server initial dump.
- SyncFlags Initial sync flags for certain Cloud SQL APIs.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-10-23 UTC."],[],[]]
- Home Documentation Databases Cloud SQL MySQL Reference Send feedback MySqlSyncConfig Stay organized with collections Save and categorize content based on your preferences.

### Cloud SQL for MySQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/release-notes](https://docs.cloud.google.com/sql/docs/mysql/release-notes)
- Source ID: `site-docs-root`
- Final score: 216
- Re-rank relevance: N/A

Evidence snippets:
- July 29, 2024 Feature Migrating your external MySQL 5.7 and 8.0 databases into Cloud SQL for MySQL by using Percona XtraBackup physical files is now generally available (GA).
- Feature Query insights for Cloud SQL Enterprise Plus edition is now generally available (GA) for your Cloud SQL Enterprise Plus edition for MySQL instances.
- December 17, 2020 Feature In Cloud SQL for MySQL, parallel replication is generally available for improving replication performance.
- July 26, 2024 Feature IAM group authentication is now generally available (GA) for Cloud SQL for MySQL.

### "Enable and disable high availability \_|\_ Cloud SQL for MySQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/configure-ha](https://docs.cloud.google.com/sql/docs/mysql/configure-ha)
- Source ID: `site-docs-root`
- Final score: 210
- Re-rank relevance: N/A

Evidence snippets:
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances/ INSTANCE NAME " Select-Object -Expand Content You should receive a JSON response similar to the following: { "kind": "sql#instance", "state": "RUNNABLE", "databaseVersion": "MYSQL 8 0" } Initiate the failover: Before using any of the request data, make the following replacements: project-id : The project ID instance-name : The instance name settings-version : The settingsVersion from instanceInfo HTTP method and URL: POST https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-name /failover Request JSON body: { "failoverContext": { "settingsVersion":" settings-version " } } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /instances/ INSTANCE NAME " Select-Object -Expand Content You should receive a JSON response similar to the following: { "kind": "sql#instance", "state": "RUNNABLE", "databaseVersion": "MYSQL 8 0" } Initiate the failover: Before using any of the request data, make the following replacements: project-id : The project ID instance-name : The instance name settings-version : The settingsVersion from instanceInfo HTTP method and URL: POST https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-name /failover Request JSON body: { "failoverContext": { "settingsVersion":" settings-version " } } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-name /failover" Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-name ", "status": "PENDING", "user": "user@example.com", "insertTime": "2020-01-21T22:43:37.981Z", "operationType": "CREATE", "name": " operation-id ", "targetId": " instance-name ", "selfLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /operations/ operation-id ", "targetProject": " project-id " } The instance fails over and it isn't available to serve data for a few minutes.
- Configure the root user: gcloud sql users set-password root --host = % \ --instance = PRIMARY INSTANCE NAME \ --password = PASSWORD Terraform To create an instance with high availability, use a Terraform resource . resource "google sql database instance" "mysql instance ha" { name = "mysql-instance-ha" region = "asia-northeast1" database version = "MYSQL 8 0" settings { tier = "db-f1-micro" availability type = "REGIONAL" backup configuration { enabled = true binary log enabled = true start time = "20:55" } } set deletion protection to true, will ensure that one cannot accidentally delete this instance by use of Terraform whereas deletion protection enabled flag protects this instance at the GCP level. deletion protection = false } Apply the changes To apply your Terraform configuration in a Google Cloud project, complete the steps in the following sections.

