---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:24:12.932Z"
product_name: "Cloud SQL for MySQL"
product_slug: "cloud-sql-for-mysql"
feature_name: "64 TB storage capacity"
feature_slug: "64-tb-storage-capacity"
latest_feature_date: "2021-06-23"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/mysql/release-notes"
  - "https://docs.cloud.google.com/sql/docs/release-notes"
  - "https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/Backups/ListBackups"
keywords:
  - "64"
  - "tb"
  - "storage"
  - "capacity"
  - "sql"
  - "now"
  - "supports"
  - "up"
---

# 64 TB storage capacity

Product: Cloud SQL for MySQL
Coverage: LOW

## Step 02 Summary

Cloud SQL storage capacity now supports up to 64 TB.

## Extended Definition

Cloud SQL storage capacity now supports up to 64 TB.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/mysql/release-notes](https://docs.cloud.google.com/sql/docs/mysql/release-notes)
- [https://docs.cloud.google.com/sql/docs/release-notes](https://docs.cloud.google.com/sql/docs/release-notes)
- [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/Backups/ListBackups](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/Backups/ListBackups)

## Supporting Pages

### Cloud SQL for MySQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/release-notes](https://docs.cloud.google.com/sql/docs/mysql/release-notes)
- Source ID: `site-docs-root`
- Final score: 210
- Re-rank relevance: N/A

Evidence snippets:
- June 23, 2021 Feature The following MySQL minor versions have been upgraded: MySQL 5.6.50 is upgraded to 5.6.51 MySQL 5.7.32 is upgraded to 5.7.33 Feature Cloud SQL storage limits are now increased to support up to 64 TB.
- Feature Cloud SQL for MySQL now supports the storage of vector embeddings in MySQL 8.0.36 and later databases.
- August 13, 2025 Feature Cloud SQL now supports Private Service Connect (PSC) outbound connectivity.
- Feature Cloud SQL for MySQL now supports storage of point-in-time recovery logs in Cloud storage .

### Cloud SQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/release-notes](https://docs.cloud.google.com/sql/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 190
- Re-rank relevance: N/A

Evidence snippets:
- June 23, 2021 Cloud SQL for MySQL Feature The following MySQL minor versions have been upgraded: MySQL 5.6.50 is upgraded to 5.6.51 MySQL 5.7.32 is upgraded to 5.7.33 Feature Cloud SQL storage limits are now increased to support up to 64 TB.
- Cloud SQL for PostgreSQL Feature Cloud SQL storage limits are now increased to support up to 64 TB.
- Cloud SQL for SQL Server Feature Cloud SQL storage limits are now increased to support up to 64 TB.
- May 31, 2024 Cloud SQL for SQL Server Feature Cloud SQL for SQL Server now supports storage of point-in-time recovery (PITR) transaction logs in Cloud Storage.

### "Method: Backups.ListBackups \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/Backups/ListBackups](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/Backups/ListBackups)
- Source ID: `site-api-reference`
- Final score: 178
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation Databases Cloud SQL MySQL Reference Send feedback Method: Backups.ListBackups Stay organized with collections Save and categorize content based on your preferences.
- When paginating, all other parameters provided to Backups.ListBackups must match the call that provided the page token. filter string Multiple filter queries are separated by spaces.
- Any values that you set, which are greater than 2,000, are changed to 2,000. pageToken string A page token, received from a previous Backups.ListBackups call.
- HTTP request GET https://sqladmin.googleapis.com/v1/{parent=projects/ }/backups The URL uses gRPC Transcoding syntax.

