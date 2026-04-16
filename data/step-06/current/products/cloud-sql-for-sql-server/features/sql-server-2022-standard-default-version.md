---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:57:14.539Z"
product_name: "Cloud SQL for SQL Server"
product_slug: "cloud-sql-for-sql-server"
feature_name: "SQL Server 2022 Standard default version"
feature_slug: "sql-server-2022-standard-default-version"
latest_feature_date: "2025-03-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/sqlserver/create-instance"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/manage-standard-backups"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/rest/v1/SqlDatabaseVersion"
keywords:
  - "sql"
  - "server"
  - "2022"
  - "standard"
  - "default"
  - "version"
  - "becomes"
  - "when"
---

# SQL Server 2022 Standard default version

Product: Cloud SQL for SQL Server
Coverage: MEDIUM

## Step 02 Summary

SQL Server 2022 Standard becomes the default version when creating a Cloud SQL for SQL Server instance.

## Extended Definition

SQL Server 2022 Standard becomes the default version when creating a Cloud SQL for SQL Server instance.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance)
- [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/manage-standard-backups](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/manage-standard-backups)
- [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/rest/v1/SqlDatabaseVersion](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/rest/v1/SqlDatabaseVersion)

## Supporting Pages

### Create instances \_|\_ Cloud SQL for SQL Server \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance)
- Source ID: `site-docs-root`
- Final score: 140
- Re-rank relevance: N/A

Evidence snippets:
- Set the password for the user: gcloud sql users set-password sqlserver no-host --instance =[ INSTANCE NAME ] \ --password =[ PASSWORD ] Terraform To create an instance, use a Terraform resource . resource "google sql database instance" "default" { name = "sqlserver-instance" region = "us-central1" database version = "SQLSERVER 2019 STANDARD" root password = "INSERT-PASSWORD-HERE" settings { tier = "db-custom-2-7680" } } Apply the changes To apply your Terraform configuration in a Google Cloud project, complete the steps in the following sections.
- Machine type vCPU/Memory Not applicable 1 vCPU, 3.75 GB 2 vCPUs, 8 GB 4 vCPUs, 16 GB 8 vCPUs, 32 GB Custom 1 to 32 vCPUs, 3.75 GB to 208 GB SQL Server 2017 Standard, SQL Server 2019 Standard, SQL Server 2022 Standard, and SQL Server 2025 Standard Machine type vCPU/Memory Not applicable 1 vCPU, 3.75 GB 2 vCPUs, 8 GB 4 vCPUs, 16 GB 8 vCPUs, 32 GB Custom 1 to 48 vCPUs, 3.75 GB to 312 GB SQL Server 2017 Enterprise, SQL Server 2019 Enterprise, SQL Server 2022 Enterprise, and SQL Server 2025 Enterprise Machine type vCPU/Memory Not applicable 1 vCPU, 3.75 GB 2 vCPUs, 8 GB 4 vCPUs, 16 GB 8 vCPUs, 32 GB Custom 2 to 96 vCPUs, 3.75 GB to 624 GB Performance-optimized (Cloud SQL Enterprise Plus only) 2 vCPUs, 16 GB 4 vCPUs, 32 GB 8 vCPUs, 64 GB 16 vCPUs, 128 GB 32 vCPUs, 256 GB 48 vCPUs, 384 GB 64 vCPUs, 512 GB 80 vCPUs, 640 GB 96 vCPUs, 768 GB 128 vCPUs, 864 GB Memory-optimized (Cloud SQL Enterprise Plus only) 4 vCPUs, 128 GB 8 vCPUs, 256 GB 16 vCPUs, 512 GB Simultaneous multithreading Simultaneous multithreading (SMT) on Cloud SQL for SQL Server lets you run two virtual CPUs (vCPUs) as independent, separate threads on one physical core.
- The following sections show the vCPU and memory configuration for each database version and machine type: SQL Server 2017 Express, SQL Server 2019 Express, SQL Server 2022 Express, and SQL Server 2025 Express Machine type vCPU/Memory Not applicable 1 vCPU, 3.75 GB 2 vCPUs, 8 GB 4 vCPUs, 16 GB 8 vCPUs, 32 GB Custom 1 to 8 vCPUs, 3.75 GB to 52 GB SQL Server 2017 Web, SQL Server 2019 Web, and SQL Server 2022 Web Important : SQL Server Web edition software can only be used to support public and internet-accessible pages, websites, and web services.
- For example, the following string creates an instance with two vCPUs and 7,680 MB of memory: gcloud sql instances create myinstance \ --database-version = SQLSERVER 2017 STANDARD \ --region = us-central1 \ --cpu = 2 \ --memory = 7680MB \ --root-password = EXAMPLE PASSWORD \ --edition = ENTERPRISE For some sample values, see Sample machine types .

### "Manage standard backups \_|\_ Cloud SQL for SQL Server \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/manage-standard-backups](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/manage-standard-backups)
- Source ID: `site-docs-reference-required-4`
- Final score: 137
- Re-rank relevance: N/A

Evidence snippets:
- The number can't be less than the default (seven). gcloud sql instances patch INSTANCE NAME \ --retained-backups-count = NUM TO RETAIN Terraform To specify the number of automated backups to retain for a database instance, use a Terraform resource . resource "google sql database instance" "default" { name = "sqlserver-instance-backup-retention" region = "us-central1" database version = "SQLSERVER 2019 STANDARD" root password = "INSERT-PASSWORD-HERE" settings { tier = "db-custom-2-7680" backup configuration { enabled = true backup retention settings { retained backups = 365 retention unit = "COUNT" } } } } REST v1beta4 Before using any of the request data, make the following replacements: unit : Optional: The retention unit can either be an integer or a string.
- Click Save . gcloud For reference information, see gcloud sql instances patch . gcloud sql instances patch INSTANCE NAME \ --backup-location = BACKUP LOCATION Terraform To specify a custom location for a database instance backup, use a Terraform resource . resource "google sql database instance" "default" { name = "sqlserver-instance-with-backup-location" region = "us-central1" database version = "SQLSERVER 2019 STANDARD" root password = "INSERT-PASSWORD-HERE" settings { tier = "db-custom-2-7680" backup configuration { enabled = true location = "us-central1" } } } REST v1 Use the instance's settings.backupConfiguration.location parameter for the backup location.
- Terraform To create a backup for a database, use a Terraform resource . resource "google sql database instance" "default" { name = "sqlserver-instance-backup" region = "us-central1" database version = "SQLSERVER 2019 STANDARD" root password = "INSERT-PASSWORD-HERE" settings { tier = "db-custom-2-7680" backup configuration { enabled = true start time = "20:55" } } } Apply the changes To apply your Terraform configuration in a Google Cloud project, complete the steps in the following sections.
- Home Documentation Databases Cloud SQL SQL Server Guides Send feedback Manage standard backups Stay organized with collections Save and categorize content based on your preferences.

### SqlDatabaseVersion \_|\_ Cloud SQL for SQL Server \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/rest/v1/SqlDatabaseVersion](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/rest/v1/SqlDatabaseVersion)
- Source ID: `site-api-reference`
- Final score: 125
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- SQLSERVER 2022 STANDARD The database version is SQL Server 2022 Standard.
- SQLSERVER 2022 ENTERPRISE The database version is SQL Server 2022 Enterprise.
- SQLSERVER 2017 STANDARD The database version is SQL Server 2017 Standard.
- SQLSERVER 2019 STANDARD The database version is SQL Server 2019 Standard.

