---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:24:12.806Z"
product_name: "Cloud SQL for MySQL"
product_slug: "cloud-sql-for-mysql"
feature_name: "Automatic minor version upgrade"
feature_slug: "automatic-minor-version-upgrade"
latest_feature_date: "2025-11-04"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/release-notes"
  - "https://docs.cloud.google.com/sql/docs/mysql/release-notes"
  - "https://docs.cloud.google.com/sql/docs/mysql/create-instance"
keywords:
  - "automatic"
  - "minor"
  - "version"
  - "upgrade"
  - "this"
  - "automatically"
  - "upgrades"
  - "eligible"
---

# Automatic minor version upgrade

Product: Cloud SQL for MySQL
Coverage: LOW

## Step 02 Summary

This feature automatically upgrades eligible Cloud SQL for MySQL 8.0 instances to the default minor version during scheduled maintenance.

## Extended Definition

This feature automatically upgrades eligible Cloud SQL for MySQL 8.0 instances to the default minor version during scheduled maintenance.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/release-notes](https://docs.cloud.google.com/sql/docs/release-notes)
- [https://docs.cloud.google.com/sql/docs/mysql/release-notes](https://docs.cloud.google.com/sql/docs/mysql/release-notes)
- [https://docs.cloud.google.com/sql/docs/mysql/create-instance](https://docs.cloud.google.com/sql/docs/mysql/create-instance)

## Supporting Pages

### Cloud SQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/release-notes](https://docs.cloud.google.com/sql/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 174
- Re-rank relevance: N/A

Evidence snippets:
- Flags cloudsql.enable pg squeeze : enables the pg squeeze extension for Cloud SQL for PostgreSQL squeeze.max xlock time : sets the time (in milliseconds) that the extension uses to finalize the processing for modifying a table squeeze.worker autostart : starts a background worker automatically squeeze.worker role : specifies the role for the background worker The rollout of the following minor versions, extension versions, and plugin versions is underway : Minor versions 11.21 is upgraded to 11.22.
- If your Cloud SQL for MySQL instance is running MySQL 8.0.35 or later, but you didn't select a specific minor version when you created the instance ( databaseVersion=MYSQL 8 0 ), then your MySQL instance is upgraded automatically to the default minor version of Cloud SQL for MySQL 8.0 during its regular scheduled maintenance update .
- If you have automatic minor version upgrade enabled for your instance, then your instance is upgraded to the default minor version automatically during its regularly scheduled maintenance update.
- All eligible Cloud SQL for MySQL instances receive the first automatic minor version upgrade during the rollout of MYSQL 8 0 [ N ].R20251004.01 07 .

### Cloud SQL for MySQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/release-notes](https://docs.cloud.google.com/sql/docs/mysql/release-notes)
- Source ID: `site-docs-root`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- If your Cloud SQL for MySQL instance is running MySQL 8.0.35 or later, but you didn't select a specific minor version when you created the instance ( databaseVersion=MYSQL 8 0 ), then your MySQL instance is upgraded automatically to the default minor version of Cloud SQL for MySQL 8.0 during its regular scheduled maintenance update .
- If you have automatic minor version upgrade enabled for your instance, then your instance is upgraded to the default minor version automatically during its regularly scheduled maintenance update.
- All eligible Cloud SQL for MySQL instances receive the first automatic minor version upgrade during the rollout of MYSQL 8 0 [ N ].R20251004.01 07 .
- Maintenance changelogs provide information about updates available in new maintenance versions, such as database minor version upgrades and patches for security vulnerabilities.

### Create instances \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/create-instance](https://docs.cloud.google.com/sql/docs/mysql/create-instance)
- Source ID: `site-docs-root`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- If you don't specify this flag, then the default major version, MYSQL 8 0 , is used. gcloud sql instances create INSTANCE NAME \ --database-version = DATABASE VERSION If you're creating a MySQL 8.0.35 or later instance, then you can enable automatic minor version upgrades by specifying the --enable-auto-upgrade-minor-version flag.
- When you enable automatic minor version upgrades, your instance is upgraded to the default minor version of Cloud SQL for MySQL 8.0 during its regular scheduled maintenance update .
- If you create your instance without specifying a minor version ( --database-version=MYSQL 8 0 ), then automatic minor version upgrades are enabled for your instance by default.
- If you select MySQL 8.0 and MySQL 8.0.35 or later for the Minor version , then the Enable automatic minor version upgrade checkbox is automatically selected for your instance.

