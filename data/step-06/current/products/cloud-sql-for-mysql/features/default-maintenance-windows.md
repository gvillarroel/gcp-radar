---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:24:12.875Z"
product_name: "Cloud SQL for MySQL"
product_slug: "cloud-sql-for-mysql"
feature_name: "Default maintenance windows"
feature_slug: "default-maintenance-windows"
latest_feature_date: "2023-07-18"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/mysql/add-manage-iam-users"
  - "https://docs.cloud.google.com/sql/docs/release-notes"
  - "https://docs.cloud.google.com/sql/docs/mysql/release-notes"
keywords:
  - "default"
  - "maintenance"
  - "windows"
  - "sql"
  - "assigns"
  - "window"
  - "outside"
  - "typical"
---

# Default maintenance windows

Product: Cloud SQL for MySQL
Coverage: LOW

## Step 02 Summary

Cloud SQL assigns a default maintenance window outside typical business hours when no user-specified maintenance window is set.

## Extended Definition

Cloud SQL assigns a default maintenance window outside typical business hours when no user-specified maintenance window is set.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/mysql/add-manage-iam-users](https://docs.cloud.google.com/sql/docs/mysql/add-manage-iam-users)
- [https://docs.cloud.google.com/sql/docs/release-notes](https://docs.cloud.google.com/sql/docs/release-notes)
- [https://docs.cloud.google.com/sql/docs/mysql/release-notes](https://docs.cloud.google.com/sql/docs/mysql/release-notes)

## Supporting Pages

### "Manage users with IAM database authentication \_|\_ Cloud SQL for MySQL\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/add-manage-iam-users](https://docs.cloud.google.com/sql/docs/mysql/add-manage-iam-users)
- Source ID: `site-iam-reference`
- Final score: 180
- Re-rank relevance: N/A

Evidence snippets:
- Save the request body in a file named request.json , and execute the following command: curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances/ INSTANCE ID /users" PowerShell (Windows) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login .
- Save the request body in a file named request.json , and execute the following command: curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances/ INSTANCE ID /users" PowerShell (Windows) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login .
- Save the request body in a file named request.json , and execute the following command: curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances/ INSTANCE ID /users" PowerShell (Windows) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login .
- Save the request body in a file named request.json , and execute the following command: curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances/ INSTANCE ID /users" PowerShell (Windows) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login .

### Cloud SQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/release-notes](https://docs.cloud.google.com/sql/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 176
- Re-rank relevance: N/A

Evidence snippets:
- July 18, 2023 Cloud SQL for MySQL Feature Cloud SQL now supports default maintenance windows for your instances.
- Cloud SQL for PostgreSQL Feature Cloud SQL now supports default maintenance windows for your instances.
- Cloud SQL for SQL Server Feature Cloud SQL now supports default maintenance windows for your instances.
- April 30, 2021 Cloud SQL for SQL Server Feature The following version upgrade applies to Cloud SQL for SQL Server: SQL Server 2017 is upgraded from 14.0.3257.3 to 14.0.3370.1 If you use maintenance windows, the new version will be available after your maintenance update.

### Cloud SQL for MySQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/release-notes](https://docs.cloud.google.com/sql/docs/mysql/release-notes)
- Source ID: `site-docs-root`
- Final score: 172
- Re-rank relevance: N/A

Evidence snippets:
- July 18, 2023 Feature Cloud SQL now supports default maintenance windows for your instances.
- With this release, an instance without a user-specified maintenance window is maintained outside of the typical business hours for the time zone that the instance is deployed in.
- If your Cloud SQL for MySQL instance is running MySQL 8.0.35 or later, but you didn't select a specific minor version when you created the instance ( databaseVersion=MYSQL 8 0 ), then your MySQL instance is upgraded automatically to the default minor version of Cloud SQL for MySQL 8.0 during its regular scheduled maintenance update .
- In addition, some labels in the Google Cloud Console have been renamed to align with this new option: Order of update is renamed to Maintenance timing Earlier is renamed to Week 1 Later is renamed to Week 2 For more information, see Maintenance settings and Find and set maintenance windows .

