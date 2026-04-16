---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:56:51.972Z"
product_name: "Cloud SQL for MySQL"
product_slug: "cloud-sql-for-mysql"
feature_name: "MySQL 5.7.34 minor version support"
feature_slug: "mysql-5-7-34-minor-version-support"
latest_feature_date: "2021-08-17"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/mysql/about-read-pools"
  - "https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/SqlDatabaseVersion"
  - "https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backups"
keywords:
  - "mysql"
  - "34"
  - "minor"
  - "version"
  - "sql"
  - "supports"
---

# MySQL 5.7.34 minor version support

Product: Cloud SQL for MySQL
Coverage: LOW

## Step 02 Summary

Cloud SQL for MySQL supports MySQL minor version 5.7.34.

## Extended Definition

Cloud SQL for MySQL supports MySQL minor version 5.7.34.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/mysql/about-read-pools](https://docs.cloud.google.com/sql/docs/mysql/about-read-pools)
- [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/SqlDatabaseVersion](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/SqlDatabaseVersion)
- [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backups](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backups)

## Supporting Pages

### About read pools \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/about-read-pools](https://docs.cloud.google.com/sql/docs/mysql/about-read-pools)
- Source ID: `site-docs-reference-3`
- Final score: 30
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following types of updates aren't supported: While read pools still receive Cloud SQL maintenance updates, you can't update your read pool to a new major or minor database version.
- Home Documentation Databases Cloud SQL MySQL Guides Send feedback About read pools Stay organized with collections Save and categorize content based on your preferences.
- MySQL PostgreSQL SQL Server Cloud SQL read pools support load balancing for your large read workloads.
- Each read pool supports between 1 and 20 read pool nodes.

### SqlDatabaseVersion \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/SqlDatabaseVersion](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/SqlDatabaseVersion)
- Source ID: `site-api-reference`
- Final score: 24
- Re-rank relevance: N/A

Evidence snippets:
- MYSQL 8 0 18 The database major version is MySQL 8.0 and the minor version is 18.
- MYSQL 8 0 26 The database major version is MySQL 8.0 and the minor version is 26.
- MYSQL 8 0 27 The database major version is MySQL 8.0 and the minor version is 27.
- MYSQL 8 0 28 The database major version is MySQL 8.0 and the minor version is 28.

### "Cloud SQL backups overview \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backups](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backups)
- Source ID: `site-docs-reference-3`
- Final score: 23
- Re-rank relevance: N/A

Evidence snippets:
- Relevant log files include: cloudsql.googlapis.com/mysql-general.log cloudsql.googleapis.com/mysql.err If Cloud Audit Logs is enabled and you have the required permissions to view them, cloudaudit.googleapis.com/activity may also be available.
- To upgrade to a later version, perform an in-place major version upgrade , use the Database Migration Service , or export and then import your database to a new Cloud SQL instance.
- Home Documentation Databases Cloud SQL MySQL Guides Send feedback Cloud SQL backups overview Stay organized with collections Save and categorize content based on your preferences.
- MySQL PostgreSQL SQL Server Cloud SQL lets you back up your instances on-demand, or automatically using a backup schedule.

