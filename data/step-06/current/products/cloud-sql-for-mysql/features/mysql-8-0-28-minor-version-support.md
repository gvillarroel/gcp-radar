---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:24:12.912Z"
product_name: "Cloud SQL for MySQL"
product_slug: "cloud-sql-for-mysql"
feature_name: "MySQL 8.0.28 minor version support"
feature_slug: "mysql-8-0-28-minor-version-support"
latest_feature_date: "2022-04-01"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/SqlDatabaseVersion"
  - "https://docs.cloud.google.com/sql/docs/mysql/release-notes"
  - "https://docs.cloud.google.com/sql/docs/mysql/create-instance"
keywords:
  - "mysql"
  - "28"
  - "minor"
  - "version"
  - "sql"
  - "for"
  - "supports"
---

# MySQL 8.0.28 minor version support

Product: Cloud SQL for MySQL
Coverage: LOW

## Step 02 Summary

Cloud SQL for MySQL supports MySQL minor version 8.0.28.

## Extended Definition

Cloud SQL for MySQL supports MySQL minor version 8.0.28.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/SqlDatabaseVersion](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/SqlDatabaseVersion)
- [https://docs.cloud.google.com/sql/docs/mysql/release-notes](https://docs.cloud.google.com/sql/docs/mysql/release-notes)
- [https://docs.cloud.google.com/sql/docs/mysql/create-instance](https://docs.cloud.google.com/sql/docs/mysql/create-instance)

## Supporting Pages

### SqlDatabaseVersion \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/SqlDatabaseVersion](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/SqlDatabaseVersion)
- Source ID: `site-api-reference`
- Final score: 252
- Re-rank relevance: N/A

Evidence snippets:
- MYSQL 8 0 28 The database major version is MySQL 8.0 and the minor version is 28.
- MYSQL 8 0 18 The database major version is MySQL 8.0 and the minor version is 18.
- MYSQL 8 0 26 The database major version is MySQL 8.0 and the minor version is 26.
- MYSQL 8 0 27 The database major version is MySQL 8.0 and the minor version is 27.

### Cloud SQL for MySQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/release-notes](https://docs.cloud.google.com/sql/docs/mysql/release-notes)
- Source ID: `site-docs-root`
- Final score: 236
- Re-rank relevance: N/A

Evidence snippets:
- April 01, 2022 Feature Cloud SQL for MySQL now supports minor versions 8.0.27 and 8.0.28.
- December 05, 2024 Feature Cloud SQL Enterprise Plus edition now supports the following regions: africa-south1 (Johannesburg) asia-east2 (Hong Kong) europe-west10 (Berlin) December 04, 2024 Feature Cloud SQL for MySQL now supports minor version 8.0.40.
- August 18, 2023 Feature Cloud SQL Enterprise Plus edition now supports four new regions: europe-central2 (Warsaw) europe-west9 (Paris) southamerica-east1 (San Paulo) us-west1 (Oregon) Feature Cloud SQL for MySQL now supports minor version 8.0.34.
- March 05, 2021 Feature The following MySQL minor versions have been upgraded: MySQL 5.6.47 is upgraded to 5.6.50 MySQL 5.7.25 is upgraded to 5.7.32 Feature Cloud SQL for MySQL now supports flexible instance configurations.

### Create instances \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/create-instance](https://docs.cloud.google.com/sql/docs/mysql/create-instance)
- Source ID: `site-docs-root`
- Final score: 220
- Re-rank relevance: N/A

Evidence snippets:
- POST https://sqladmin.googleapis.com/v1/projects/ project-id /instances Before using any of the request data, replace these variables: project id : The ID of the project. instance id : The name of the instance. databaseVersion : The database version of the instance: MYSQL 8 0 18 , MYSQL 8 0 26 , MYSQL 8 0 27 , MYSQL 8 0 28 , MYSQL 8 0 30 , MYSQL 8 0 31 , MYSQL 8 0 32 , MYSQL 8 0 33 , MYSQL 8 0 34 , MYSQL 8 0 35 , MYSQL 8 0 36 , MYSQL 8 0 37 , MYSQL 8 0 39 , MYSQL 8 0 40 , MYSQL 8 0 41 , MYSQL 8 0 42 , MYSQL 8 0 43 , MYSQL 8 0 44 (default minor version for MySQL 8.0), or MYSQL 8 0 45 .
- DATABASE VERSION : The database minor version of the instance: MYSQL 8 0 18 , MYSQL 8 0 26 , MYSQL 8 0 27 , MYSQL 8 0 28 , MYSQL 8 0 30 , MYSQL 8 0 31 , MYSQL 8 0 32 , MYSQL 8 0 33 , MYSQL 8 0 34 , MYSQL 8 0 35 , MYSQL 8 0 36 , MYSQL 8 0 37 , MYSQL 8 0 39 , MYSQL 8 0 40 , MYSQL 8 0 41 , MYSQL 8 0 42 , MYSQL 8 0 43 , MYSQL 8 0 44 (default minor version for MySQL 8.0), or MYSQL 8 0 45 .
- POST https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances Before using any of the request data, replace these variables: project id : The ID of the project. instance id : The name of the instance. databaseVersion : The database version of the instance: MYSQL 8 0 18 , MYSQL 8 0 26 , MYSQL 8 0 27 , MYSQL 8 0 28 , MYSQL 8 0 30 , MYSQL 8 0 31 , MYSQL 8 0 32 , MYSQL 8 0 33 .
- If you specify MYSQL 8 4 for the database version (or don't specify a database version), but the region you selected doesn't support Cloud SQL Enterprise Plus edition, then you must specify a region that supports Cloud SQL Enterprise Plus edition , or create an Cloud SQL Enterprise edition instance instead. .

