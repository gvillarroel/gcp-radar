---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:24:12.985Z"
product_name: "Cloud SQL for MySQL"
product_slug: "cloud-sql-for-mysql"
feature_name: "32-core machine types"
feature_slug: "32-core-machine-types"
latest_feature_date: "2017-03-01"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/mysql/release-notes"
  - "https://docs.cloud.google.com/sql/docs/mysql/create-instance"
  - "https://docs.cloud.google.com/sql/docs/mysql/configure-performance-capture"
keywords:
  - "32"
  - "core"
  - "machine"
  - "types"
  - "sql"
  - "for"
  - "mysql"
  - "supports"
---

# 32-core machine types

Product: Cloud SQL for MySQL
Coverage: LOW

## Step 02 Summary

Cloud SQL for MySQL supports 32-core machine types.

## Extended Definition

Cloud SQL for MySQL supports 32-core machine types.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/mysql/release-notes](https://docs.cloud.google.com/sql/docs/mysql/release-notes)
- [https://docs.cloud.google.com/sql/docs/mysql/create-instance](https://docs.cloud.google.com/sql/docs/mysql/create-instance)
- [https://docs.cloud.google.com/sql/docs/mysql/configure-performance-capture](https://docs.cloud.google.com/sql/docs/mysql/configure-performance-capture)

## Supporting Pages

### Cloud SQL for MySQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/release-notes](https://docs.cloud.google.com/sql/docs/mysql/release-notes)
- Source ID: `site-docs-root`
- Final score: 260
- Re-rank relevance: N/A

Evidence snippets:
- March 24, 2020 Feature Cloud SQL now supports 96-core machine types for MySQL, Postgres, and SQL Server instances.
- Feature Support for 32-core machine types for MySQL instances.
- July 07, 2023 Feature Cloud SQL for MySQL now supports up to 500,000 tables for instances that meet the minimum hardware requirements of 32+ cores and 200G+ memory.
- September 01, 2017 Feature Support for 64-core machine types for MySQL instances and 64 cores for PostgreSQL instances.

### Create instances \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/create-instance](https://docs.cloud.google.com/sql/docs/mysql/create-instance)
- Source ID: `site-docs-root`
- Final score: 244
- Re-rank relevance: N/A

Evidence snippets:
- Memory must be: 0.9 to 6.5 GB per vCPU A multiple of 256 MB At least 3.75 GB (3840 MB) For example, the following command creates a Cloud SQL Enterprise edition instance with two vCPUs and 7,680 MB of memory: gcloud sql instances create myinstance \ --database-version = MYSQL 8 0 \ --cpu = 2 \ --memory = 7680MB \ --region = us-central1 The following command creates a Cloud SQL Enterprise Plus edition instance with four cores: gcloud sql instances create myinstance \ --database-version = MYSQL 8 0 31 \ --tier = db-perf-optimized-N-4 \ --edition = ENTERPRISE PLUS \ --region = us-central1 The default value for REGION is us-central1 .
- POST https://sqladmin.googleapis.com/v1/projects/ project-id /instances Before using any of the request data, replace these variables: project id : The ID of the project. instance id : The name of the instance. databaseVersion : The database version of the instance: MYSQL 8 0 18 , MYSQL 8 0 26 , MYSQL 8 0 27 , MYSQL 8 0 28 , MYSQL 8 0 30 , MYSQL 8 0 31 , MYSQL 8 0 32 , MYSQL 8 0 33 , MYSQL 8 0 34 , MYSQL 8 0 35 , MYSQL 8 0 36 , MYSQL 8 0 37 , MYSQL 8 0 39 , MYSQL 8 0 40 , MYSQL 8 0 41 , MYSQL 8 0 42 , MYSQL 8 0 43 , MYSQL 8 0 44 (default minor version for MySQL 8.0), or MYSQL 8 0 45 .
- POST https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances Before using any of the request data, replace these variables: project id : The ID of the project. instance id : The name of the instance. databaseVersion : The database version of the instance: MYSQL 8 0 18 , MYSQL 8 0 26 , MYSQL 8 0 27 , MYSQL 8 0 28 , MYSQL 8 0 30 , MYSQL 8 0 31 , MYSQL 8 0 32 , MYSQL 8 0 33 .
- DATABASE VERSION : The database minor version of the instance: MYSQL 8 0 18 , MYSQL 8 0 26 , MYSQL 8 0 27 , MYSQL 8 0 28 , MYSQL 8 0 30 , MYSQL 8 0 31 , MYSQL 8 0 32 , MYSQL 8 0 33 , MYSQL 8 0 34 , MYSQL 8 0 35 , MYSQL 8 0 36 , MYSQL 8 0 37 , MYSQL 8 0 39 , MYSQL 8 0 40 , MYSQL 8 0 41 , MYSQL 8 0 42 , MYSQL 8 0 43 , MYSQL 8 0 44 (default minor version for MySQL 8.0), or MYSQL 8 0 45 .

### "Configure performance capture \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/configure-performance-capture](https://docs.cloud.google.com/sql/docs/mysql/configure-performance-capture)
- Source ID: `site-iam-reference`
- Final score: 212
- Re-rank relevance: N/A

Evidence snippets:
- If you specify MYSQL 8 4 for the database version (or don't specify a database version), but the region you specify doesn't support Cloud SQL Enterprise Plus edition, then you must specify a region that supports Cloud SQL Enterprise Plus edition , or create an Cloud SQL Enterprise edition instance instead.
- If you specify MYSQL 8 4 for the database version (or don't specify a database version), but the region you specify doesn't support Cloud SQL Enterprise Plus edition, then you must specify a region that supports Cloud SQL Enterprise Plus edition , or create an Cloud SQL Enterprise edition instance instead.
- REGION : the region MACHINE TYPE : your machine type EDITION TYPE : your Cloud SQL edition Note : If you specify MYSQL 8 4 for the database version (or don't specify a database version) and don't specify an edition type, then the default Cloud SQL edition of the instance is ENTERPRISE PLUS .
- REGION : the region MACHINE TYPE : your machine type EDITION TYPE : your Cloud SQL edition Note : If you specify MYSQL 8 4 for the database version (or don't specify a database version) and don't specify an edition type, then the default Cloud SQL edition of the instance is ENTERPRISE PLUS .

