---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:24:12.915Z"
product_name: "Cloud SQL for MySQL"
product_slug: "cloud-sql-for-mysql"
feature_name: "Manual minor version upgrade for MySQL 8.0"
feature_slug: "manual-minor-version-upgrade-for-mysql-8-0"
latest_feature_date: "2021-12-16"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/mysql/release-notes"
  - "https://docs.cloud.google.com/sql/docs/mysql/create-instance"
  - "https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/SqlDatabaseVersion"
keywords:
  - "manual"
  - "minor"
  - "version"
  - "upgrade"
  - "for"
  - "mysql"
  - "sql"
  - "lets"
---

# Manual minor version upgrade for MySQL 8.0

Product: Cloud SQL for MySQL
Coverage: LOW

## Step 02 Summary

Cloud SQL for MySQL 8.0 lets you set or upgrade the database minor version.

## Extended Definition

Cloud SQL for MySQL 8.0 lets you set or upgrade the database minor version.

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
- Final score: 248
- Re-rank relevance: N/A

Evidence snippets:
- If your Cloud SQL for MySQL instance is running MySQL 8.0.35 or later, but you didn't select a specific minor version when you created the instance ( databaseVersion=MYSQL 8 0 ), then your MySQL instance is upgraded automatically to the default minor version of Cloud SQL for MySQL 8.0 during its regular scheduled maintenance update .
- March 05, 2021 Feature The following MySQL minor versions have been upgraded: MySQL 5.6.47 is upgraded to 5.6.50 MySQL 5.7.25 is upgraded to 5.7.32 Feature Cloud SQL for MySQL now supports flexible instance configurations.
- All eligible Cloud SQL for MySQL instances receive the first automatic minor version upgrade during the rollout of MYSQL 8 0 [ N ].R20251004.01 07 .
- November 04, 2025 Feature Cloud SQL now supports the automatic minor version upgrade for Cloud SQL for MySQL 8.0.35 or later instances.

### Create instances \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/create-instance](https://docs.cloud.google.com/sql/docs/mysql/create-instance)
- Source ID: `site-docs-root`
- Final score: 248
- Re-rank relevance: N/A

Evidence snippets:
- This flag isn't available for MySQL 8.0.34 and earlier versions. gcloud sql instances create INSTANCE NAME \ --database-version = DATABASE VERSION \ --enable-auto-upgrade-minor-version For detailed information, see the documentation on creating an instance by using gcloud .
- Automatic minor version upgrade Enable automatic minor version upgrade --enable-auto-upgrade-minor-version For MySQL 8.0 instances that you specify a minor version of 8.0.35 or later, for example --database-version=MYSQL 8 0 35 .
- When you enable automatic minor version upgrades, your instance is upgraded to the default minor version of Cloud SQL for MySQL 8.0 during its regular scheduled maintenance update .
- If you create your instance without specifying a minor version ( --database-version=MYSQL 8 0 ), then automatic minor version upgrades are enabled for your instance by default.

### SqlDatabaseVersion \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/SqlDatabaseVersion](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/SqlDatabaseVersion)
- Source ID: `site-api-reference`
- Final score: 244
- Re-rank relevance: N/A

Evidence snippets:
- MYSQL 8 0 18 The database major version is MySQL 8.0 and the minor version is 18.
- MYSQL 8 0 26 The database major version is MySQL 8.0 and the minor version is 26.
- MYSQL 8 0 27 The database major version is MySQL 8.0 and the minor version is 27.
- MYSQL 8 0 28 The database major version is MySQL 8.0 and the minor version is 28.

