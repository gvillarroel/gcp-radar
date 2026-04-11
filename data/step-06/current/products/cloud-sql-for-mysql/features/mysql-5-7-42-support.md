---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:24:12.877Z"
product_name: "Cloud SQL for MySQL"
product_slug: "cloud-sql-for-mysql"
feature_name: "MySQL 5.7.42 support"
feature_slug: "mysql-5-7-42-support"
latest_feature_date: "2023-07-11"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/mysql/release-notes"
  - "https://docs.cloud.google.com/sql/docs/mysql/create-instance"
  - "https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/SqlDatabaseVersion"
keywords:
  - "mysql"
  - "42"
  - "sql"
  - "for"
  - "upgraded"
  - "from"
  - "version"
  - "40"
---

# MySQL 5.7.42 support

Product: Cloud SQL for MySQL
Coverage: LOW

## Step 02 Summary

Cloud SQL for MySQL upgraded MySQL 5.7 support from version 5.7.40 to 5.7.42.

## Extended Definition

Cloud SQL for MySQL upgraded MySQL 5.7 support from version 5.7.40 to 5.7.42.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/mysql/release-notes](https://docs.cloud.google.com/sql/docs/mysql/release-notes)
- [https://docs.cloud.google.com/sql/docs/mysql/create-instance](https://docs.cloud.google.com/sql/docs/mysql/create-instance)
- [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/SqlDatabaseVersion](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/SqlDatabaseVersion)

## Supporting Pages

### Cloud SQL for MySQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/release-notes](https://docs.cloud.google.com/sql/docs/mysql/release-notes)
- Source ID: `site-docs-root`
- Final score: 256
- Re-rank relevance: N/A

Evidence snippets:
- If your Cloud SQL for MySQL instance is running MySQL 8.0.35 or later, but you didn't select a specific minor version when you created the instance ( databaseVersion=MYSQL 8 0 ), then your MySQL instance is upgraded automatically to the default minor version of Cloud SQL for MySQL 8.0 during its regular scheduled maintenance update .
- December 05, 2024 Feature Cloud SQL Enterprise Plus edition now supports the following regions: africa-south1 (Johannesburg) asia-east2 (Hong Kong) europe-west10 (Berlin) December 04, 2024 Feature Cloud SQL for MySQL now supports minor version 8.0.40.
- March 05, 2021 Feature The following MySQL minor versions have been upgraded: MySQL 5.6.47 is upgraded to 5.6.50 MySQL 5.7.25 is upgraded to 5.7.32 Feature Cloud SQL for MySQL now supports flexible instance configurations.
- Change In the new maintenance version [MySQL version].R20240207.00 00, the default value of the performance schema flag for all MySQL 8.0 instances with more than 15 GB of RAM will be set to on .

### Create instances \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/create-instance](https://docs.cloud.google.com/sql/docs/mysql/create-instance)
- Source ID: `site-docs-root`
- Final score: 244
- Re-rank relevance: N/A

Evidence snippets:
- POST https://sqladmin.googleapis.com/v1/projects/ project-id /instances Before using any of the request data, replace these variables: project id : The ID of the project. instance id : The name of the instance. databaseVersion : The database version of the instance: MYSQL 8 0 18 , MYSQL 8 0 26 , MYSQL 8 0 27 , MYSQL 8 0 28 , MYSQL 8 0 30 , MYSQL 8 0 31 , MYSQL 8 0 32 , MYSQL 8 0 33 , MYSQL 8 0 34 , MYSQL 8 0 35 , MYSQL 8 0 36 , MYSQL 8 0 37 , MYSQL 8 0 39 , MYSQL 8 0 40 , MYSQL 8 0 41 , MYSQL 8 0 42 , MYSQL 8 0 43 , MYSQL 8 0 44 (default minor version for MySQL 8.0), or MYSQL 8 0 45 .
- DATABASE VERSION : The database minor version of the instance: MYSQL 8 0 18 , MYSQL 8 0 26 , MYSQL 8 0 27 , MYSQL 8 0 28 , MYSQL 8 0 30 , MYSQL 8 0 31 , MYSQL 8 0 32 , MYSQL 8 0 33 , MYSQL 8 0 34 , MYSQL 8 0 35 , MYSQL 8 0 36 , MYSQL 8 0 37 , MYSQL 8 0 39 , MYSQL 8 0 40 , MYSQL 8 0 41 , MYSQL 8 0 42 , MYSQL 8 0 43 , MYSQL 8 0 44 (default minor version for MySQL 8.0), or MYSQL 8 0 45 .
- MYSQL 8 0 34 , MYSQL 8 0 35 , MYSQL 8 0 36 , MYSQL 8 0 37 , MYSQL 8 0 39 , MYSQL 8 0 40 , MYSQL 8 0 41 , MYSQL 8 0 42 , MYSQL 8 0 43 , MYSQL 8 0 44 (default minor version for MySQL 8.0), or MYSQL 8 0 45 .
- Memory must be: 0.9 to 6.5 GB per vCPU A multiple of 256 MB At least 3.75 GB (3840 MB) For example, the following command creates a Cloud SQL Enterprise edition instance with two vCPUs and 7,680 MB of memory: gcloud sql instances create myinstance \ --database-version = MYSQL 8 0 \ --cpu = 2 \ --memory = 7680MB \ --region = us-central1 The following command creates a Cloud SQL Enterprise Plus edition instance with four cores: gcloud sql instances create myinstance \ --database-version = MYSQL 8 0 31 \ --tier = db-perf-optimized-N-4 \ --edition = ENTERPRISE PLUS \ --region = us-central1 The default value for REGION is us-central1 .

### SqlDatabaseVersion \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/SqlDatabaseVersion](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/SqlDatabaseVersion)
- Source ID: `site-api-reference`
- Final score: 240
- Re-rank relevance: N/A

Evidence snippets:
- MYSQL 8 0 40 The database major version is MySQL 8.0 and the minor version is 40.
- MYSQL 8 0 42 The database major version is MySQL 8.0 and the minor version is 42.
- Home Documentation Databases Cloud SQL MySQL Reference Send feedback SqlDatabaseVersion Stay organized with collections Save and categorize content based on your preferences.
- MYSQL 8 0 18 The database major version is MySQL 8.0 and the minor version is 18.

