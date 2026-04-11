---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:24:12.912Z"
product_name: "Cloud SQL for MySQL"
product_slug: "cloud-sql-for-mysql"
feature_name: "Default minor version: MySQL 8.0.26"
feature_slug: "default-minor-version-mysql-8-0-26"
latest_feature_date: "2022-02-28"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/mysql/release-notes"
  - "https://docs.cloud.google.com/sql/docs/mysql/create-instance"
  - "https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/SqlDatabaseVersion"
keywords:
  - "default"
  - "minor"
  - "version"
  - "mysql"
  - "26"
  - "sql"
  - "for"
  - "uses"
---

# Default minor version: MySQL 8.0.26

Product: Cloud SQL for MySQL
Coverage: LOW

## Step 02 Summary

Cloud SQL for MySQL 8.0 uses MySQL 8.0.26 as the default minor version.

## Extended Definition

Cloud SQL for MySQL 8.0 uses MySQL 8.0.26 as the default minor version.

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
- January 21, 2026 Change Cloud SQL for MySQL 8.0.43 is now the default minor version of Cloud SQL for MySQL 8.0.
- March 26, 2026 Feature MySQL 8.0.44 is now the default minor version for Cloud SQL for MySQL 8.0.
- February 28, 2022 Feature Cloud SQL for MySQL 8.0.26 is now the default minor version.
- If your Cloud SQL for MySQL instance is running MySQL 8.0.35 or later, but you didn't select a specific minor version when you created the instance ( databaseVersion=MYSQL 8 0 ), then your MySQL instance is upgraded automatically to the default minor version of Cloud SQL for MySQL 8.0 during its regular scheduled maintenance update .

### Create instances \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/create-instance](https://docs.cloud.google.com/sql/docs/mysql/create-instance)
- Source ID: `site-docs-root`
- Final score: 256
- Re-rank relevance: N/A

Evidence snippets:
- POST https://sqladmin.googleapis.com/v1/projects/ project-id /instances Before using any of the request data, replace these variables: project id : The ID of the project. instance id : The name of the instance. databaseVersion : The database version of the instance: MYSQL 8 0 18 , MYSQL 8 0 26 , MYSQL 8 0 27 , MYSQL 8 0 28 , MYSQL 8 0 30 , MYSQL 8 0 31 , MYSQL 8 0 32 , MYSQL 8 0 33 , MYSQL 8 0 34 , MYSQL 8 0 35 , MYSQL 8 0 36 , MYSQL 8 0 37 , MYSQL 8 0 39 , MYSQL 8 0 40 , MYSQL 8 0 41 , MYSQL 8 0 42 , MYSQL 8 0 43 , MYSQL 8 0 44 (default minor version for MySQL 8.0), or MYSQL 8 0 45 .
- DATABASE VERSION : The database minor version of the instance: MYSQL 8 0 18 , MYSQL 8 0 26 , MYSQL 8 0 27 , MYSQL 8 0 28 , MYSQL 8 0 30 , MYSQL 8 0 31 , MYSQL 8 0 32 , MYSQL 8 0 33 , MYSQL 8 0 34 , MYSQL 8 0 35 , MYSQL 8 0 36 , MYSQL 8 0 37 , MYSQL 8 0 39 , MYSQL 8 0 40 , MYSQL 8 0 41 , MYSQL 8 0 42 , MYSQL 8 0 43 , MYSQL 8 0 44 (default minor version for MySQL 8.0), or MYSQL 8 0 45 .
- MYSQL 8 0 34 , MYSQL 8 0 35 , MYSQL 8 0 36 , MYSQL 8 0 37 , MYSQL 8 0 39 , MYSQL 8 0 40 , MYSQL 8 0 41 , MYSQL 8 0 42 , MYSQL 8 0 43 , MYSQL 8 0 44 (default minor version for MySQL 8.0), or MYSQL 8 0 45 .
- When you enable automatic minor version upgrades, your instance is upgraded to the default minor version of Cloud SQL for MySQL 8.0 during its regular scheduled maintenance update .

### SqlDatabaseVersion \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/SqlDatabaseVersion](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/SqlDatabaseVersion)
- Source ID: `site-api-reference`
- Final score: 248
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- MYSQL 8 0 26 The database major version is MySQL 8.0 and the minor version is 26.
- MYSQL 8 0 18 The database major version is MySQL 8.0 and the minor version is 18.
- MYSQL 8 0 27 The database major version is MySQL 8.0 and the minor version is 27.
- MYSQL 8 0 28 The database major version is MySQL 8.0 and the minor version is 28.

