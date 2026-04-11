---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:58:32.615Z"
product_name: "Cloud SQL for SQL Server"
product_slug: "cloud-sql-for-sql-server"
feature_name: "SQL Server 2022 Standard default version"
feature_slug: "sql-server-2022-standard-default-version"
latest_feature_date: "2025-03-28"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/rest/v1/SqlDatabaseVersion"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/release-notes"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/manage-standard-backups"
keywords:
  - "sql"
  - "server"
  - "2022"
  - "standard"
  - "default"
  - "version"
  - "becomes"
  - "the"
---

# SQL Server 2022 Standard default version

Product: Cloud SQL for SQL Server
Coverage: LOW

## Step 02 Summary

SQL Server 2022 Standard becomes the default version when creating a Cloud SQL for SQL Server instance.

## Extended Definition

SQL Server 2022 Standard becomes the default version when creating a Cloud SQL for SQL Server instance.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/rest/v1/SqlDatabaseVersion](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/rest/v1/SqlDatabaseVersion)
- [https://docs.cloud.google.com/sql/docs/sqlserver/release-notes](https://docs.cloud.google.com/sql/docs/sqlserver/release-notes)
- [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/manage-standard-backups](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/manage-standard-backups)

## Supporting Pages

### SqlDatabaseVersion \_|\_ Cloud SQL for SQL Server \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/rest/v1/SqlDatabaseVersion](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/rest/v1/SqlDatabaseVersion)
- Source ID: `site-api-reference`
- Final score: 246
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- SQLSERVER 2022 STANDARD The database version is SQL Server 2022 Standard.
- SQLSERVER 2022 ENTERPRISE The database version is SQL Server 2022 Enterprise.
- SQLSERVER 2017 STANDARD The database version is SQL Server 2017 Standard.
- SQLSERVER 2019 STANDARD The database version is SQL Server 2019 Standard.

### Cloud SQL for SQL Server release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/release-notes](https://docs.cloud.google.com/sql/docs/sqlserver/release-notes)
- Source ID: `site-docs-root`
- Final score: 222
- Re-rank relevance: N/A

Evidence snippets:
- March 28, 2025 Feature When you create a Cloud SQL for SQL Server instance, version SQL Server 2022 Standard is now the default .
- February 07, 2022 Feature SQL Server 2019 is now the default version.
- The default version continues to be SQL Server 2019 Standard.
- The default version continues to be SQL Server 2017 Standard.

### "Manage standard backups \_|\_ Cloud SQL for SQL Server \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/manage-standard-backups](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/manage-standard-backups)
- Source ID: `site-iam-reference`
- Final score: 218
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The number can't be less than the default (seven). gcloud sql instances patch INSTANCE NAME \ --retained-backups-count = NUM TO RETAIN Terraform To specify the number of automated backups to retain for a database instance, use a Terraform resource . resource "google sql database instance" "default" { name = "sqlserver-instance-backup-retention" region = "us-central1" database version = "SQLSERVER 2019 STANDARD" root password = "INSERT-PASSWORD-HERE" settings { tier = "db-custom-2-7680" backup configuration { enabled = true backup retention settings { retained backups = 365 retention unit = "COUNT" } } } } REST v1beta4 Before using any of the request data, make the following replacements: unit : Optional: The retention unit can either be an integer or a string.
- Click Save . gcloud For reference information, see gcloud sql instances patch . gcloud sql instances patch INSTANCE NAME \ --backup-location = BACKUP LOCATION Terraform To specify a custom location for a database instance backup, use a Terraform resource . resource "google sql database instance" "default" { name = "sqlserver-instance-with-backup-location" region = "us-central1" database version = "SQLSERVER 2019 STANDARD" root password = "INSERT-PASSWORD-HERE" settings { tier = "db-custom-2-7680" backup configuration { enabled = true location = "us-central1" } } } REST v1 Use the instance's settings.backupConfiguration.location parameter for the backup location.
- Terraform To create a backup for a database, use a Terraform resource . resource "google sql database instance" "default" { name = "sqlserver-instance-backup" region = "us-central1" database version = "SQLSERVER 2019 STANDARD" root password = "INSERT-PASSWORD-HERE" settings { tier = "db-custom-2-7680" backup configuration { enabled = true start time = "20:55" } } } Apply the changes To apply your Terraform configuration in a Google Cloud project, complete the steps in the following sections.
- The number can't be less than the default (7). project-id : The project ID instance-id : The instance ID HTTP method and URL: PATCH https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id Request JSON body: { "settings": { "backupConfiguration": { "backupRetentionSettings": { "retentionUnit": unit , "retainedBackups": " num-to-retain " } } } } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .

