---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:24:12.874Z"
product_name: "Cloud SQL for MySQL"
product_slug: "cloud-sql-for-mysql"
feature_name: "Accelerated large MySQL database migration with Database Migration Service"
feature_slug: "accelerated-large-mysql-database-migration-with-database-migration-service"
latest_feature_date: "2023-08-01"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/mysql/release-notes"
  - "https://docs.cloud.google.com/sql/docs/release-notes"
  - "https://docs.cloud.google.com/sql/docs/mysql/create-manage-databases"
keywords:
  - "accelerated"
  - "large"
  - "mysql"
  - "database"
  - "migration"
  - "with"
  - "enables"
  - "faster"
---

# Accelerated large MySQL database migration with Database Migration Service

Product: Cloud SQL for MySQL
Coverage: LOW

## Step 02 Summary

Database Migration Service enables faster migration of large external MySQL databases to Cloud SQL for MySQL.

## Extended Definition

Database Migration Service enables faster migration of large external MySQL databases to Cloud SQL for MySQL.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/mysql/release-notes](https://docs.cloud.google.com/sql/docs/mysql/release-notes)
- [https://docs.cloud.google.com/sql/docs/release-notes](https://docs.cloud.google.com/sql/docs/release-notes)
- [https://docs.cloud.google.com/sql/docs/mysql/create-manage-databases](https://docs.cloud.google.com/sql/docs/mysql/create-manage-databases)

## Supporting Pages

### Cloud SQL for MySQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/release-notes](https://docs.cloud.google.com/sql/docs/mysql/release-notes)
- Source ID: `site-docs-root`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- August 01, 2023 Feature You can now migrate large MySQL databases from external sources to Cloud SQL for MySQL faster using Database Migration Service .
- Home Documentation Databases Cloud SQL MySQL Resources Send feedback Cloud SQL for MySQL release notes Stay organized with collections Save and categorize content based on your preferences.
- January 23, 2026 Feature Cloud SQL for MySQL now supports performance capture to help you diagnose transient performance issues with your MySQL database.
- September 02, 2021 Feature Cloud SQL for MySQL now supports using a custom import to set up replication from large external databases.

### Cloud SQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/release-notes](https://docs.cloud.google.com/sql/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 146
- Re-rank relevance: N/A

Evidence snippets:
- August 01, 2023 Cloud SQL for MySQL Feature You can now migrate large MySQL databases from external sources to Cloud SQL for MySQL faster using Database Migration Service .
- Cloud SQL for PostgreSQL Feature Cloud SQL Enterprise Plus edition now supports the following regions: europe-west8 (Milan) europe-west12 (Turin) us-west4 (Las Vegas) December 14, 2023 Cloud SQL for MySQL Feature You can now use Database Migration Service to migrate data to an existing Cloud SQL instance that was created using Terraform or other Infrastructure-As-Code (IaC) Tools.
- To check where your instance stores the transaction logs used for PITR, see Use point-in-time recovery (PITR) March 28, 2024 Cloud SQL for MySQL Feature You can now simulate a planned maintenance update with near-zero downtime on your Cloud SQL Enterprise Plus primary instance without updating your database.
- If you import files, then this flag enables you to clean database objects before you recreate them. --if-exists : this flag enables you to include the IF EXISTS SQL statement with each DROP statement that's produced by the clean flag.

### "Create and manage databases \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/create-manage-databases](https://docs.cloud.google.com/sql/docs/mysql/create-manage-databases)
- Source ID: `site-docs-root`
- Final score: 126
- Re-rank relevance: N/A

Evidence snippets:
- If you don't specify a custom character set and collation when you create your database, then the database has the following default values: MySQL 5.6, 5.7 : (created with Google Cloud console, Cloud SQL Admin API, gcloud CLI , Terraform, or mysql client) Character set: utf8 Collation: utf8 general ci MySQL 8.0.x and later (created with the Google Cloud console) Character set: utf8 Collation: utf8 general ci MySQL 8.0.x and later (created with the Cloud SQL Admin API, gcloud CLI , Terraform, or mysql client) Character set: utf8mb4 Collation: utf8mb4 0900 ai ci If you need to modify the character set or collation configuration of your database after creation, then see Update the character set and collation for a database .
- Home Documentation Databases Cloud SQL MySQL Guides Send feedback Create and manage databases Stay organized with collections Save and categorize content based on your preferences.
- If you plan to use the mysql client to create or manage your databases, you must have: Configured access and connected to the instance with a mysql client.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id /databases" Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id ", "status": "PENDING", "user": "user@example.com", "insertTime": "2020-01-21T22:43:37.981Z", "operationType": "CREATE DATABASE", "name": " operation-id ", "targetId": " instance-id ", "selfLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /operations/ operation-id ", "targetProject": " project-id " } mysql Client For reference information, see CREATE DATABASE in the MySQL documentation.

