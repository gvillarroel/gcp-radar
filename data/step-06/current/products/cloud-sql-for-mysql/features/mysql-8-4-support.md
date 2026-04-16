---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:56:51.910Z"
product_name: "Cloud SQL for MySQL"
product_slug: "cloud-sql-for-mysql"
feature_name: "MySQL 8.4 support"
feature_slug: "mysql-8-4-support"
latest_feature_date: "2024-10-01"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/editions-intro"
  - "https://docs.cloud.google.com/sql/docs/mysql/about-private-service-connect"
  - "https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backups"
keywords:
  - "mysql"
  - "sql"
  - "supports"
  - "generally"
  - "available"
  - "database"
  - "version"
---

# MySQL 8.4 support

Product: Cloud SQL for MySQL
Coverage: LOW

## Step 02 Summary

Cloud SQL for MySQL supports MySQL 8.4 as a generally available database version.

## Extended Definition

Cloud SQL for MySQL supports MySQL 8.4 as a generally available database version.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/editions-intro](https://docs.cloud.google.com/sql/docs/editions-intro)
- [https://docs.cloud.google.com/sql/docs/mysql/about-private-service-connect](https://docs.cloud.google.com/sql/docs/mysql/about-private-service-connect)
- [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backups](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backups)

## Supporting Pages

### "Cloud SQL backups overview \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backups](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backups)
- Source ID: `site-docs-reference-3`
- Final score: 22
- Re-rank relevance: N/A

Evidence snippets:
- Relevant log files include: cloudsql.googlapis.com/mysql-general.log cloudsql.googleapis.com/mysql.err If Cloud Audit Logs is enabled and you have the required permissions to view them, cloudaudit.googleapis.com/activity may also be available.
- To upgrade to a later version, perform an in-place major version upgrade , use the Database Migration Service , or export and then import your database to a new Cloud SQL instance.
- Home Documentation Databases Cloud SQL MySQL Guides Send feedback Cloud SQL backups overview Stay organized with collections Save and categorize content based on your preferences.
- You can only restore from a backup to an instance with the same database version as when the backup was taken.

### "Cloud SQL editions overview \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/editions-intro](https://docs.cloud.google.com/sql/docs/editions-intro)
- Source ID: `site-docs-reference-3`
- Final score: 22
- Re-rank relevance: N/A

Evidence snippets:
- Cloud SQL editions features The following table provides an overview of key features enhancements available for Cloud SQL Enterprise Plus edition when compared to Cloud SQL Enterprise edition: Cloud SQL Enterprise Plus edition Cloud SQL Enterprise edition Database versions MySQL 8.0, 8.4 Note: If the database version for your instance is MySQL 8.4, then the default Cloud SQL edition is Enterprise Plus.
- Home Documentation Databases Cloud SQL MySQL Guides Send feedback Cloud SQL editions overview Stay organized with collections Save and categorize content based on your preferences.
- Cloud SQL Enterprise edition supports all existing capabilities of Cloud SQL available as of July 12, 2023, at the same price.
- MySQL 5.6, 5.7, 8.0, 8.4 Availability SLA 99.99% (includes maintenance) 99.95% (excludes maintenance) Performance Machine series N2 C4A General purpose shared core General purpose dedicated core N4 Machine configuration limits N2 machine series Up to 128 vCPU Up to 864 GB RAM 1:8 core:memory ratio C4A machine series Up to 72 vCPU Up to 576 GB RAM 1:8 core:memory ratio General purpose shared core 1 vCPU Up to 1.7 GB RAM 1:6.5 core:memory ratio General purpose dedicated core Up to 96 vCPU Up to 624 GB RAM 1:6.5 core:memory ratio N4 machine series Up to 80 vCPU Up to 624 GB RAM 1:8 core:memory ratio Data cache Yes No Optimized writes Yes No Point-in-time log retention Up to 35 days Up to 7 days Read pools Yes No Availability Maintenance downtime Planned operations downtime Sub-second downtime Few minutes Advanced disaster recovery (DR) Yes No Write endpoint for advanced disaster recovery (DR) Yes No Write endpoint connectivity Yes No Managed Connection Pooling Yes No Observability AI-assisted troubleshooting Yes No Query insights 30 day metric retention 1 MB query length 200 query plan sample maximum Wait event analysis Index advisor recommendations 7 day metric retention 4500 bytes query length 20 query plan sample maximum Enhanced recommenders Yes No Cloud SQL Enterprise Plus edition enhancements Cloud SQL Enterprise Plus edition is ideal for applications that require the best performance, availability, and observability.

### "Private Service Connect overview \_|\_ Cloud SQL for MySQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/about-private-service-connect](https://docs.cloud.google.com/sql/docs/mysql/about-private-service-connect)
- Source ID: `site-docs-reference-3`
- Final score: 22
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Databases Cloud SQL MySQL Guides Send feedback Private Service Connect overview Stay organized with collections Save and categorize content based on your preferences.
- The supported serving ports for MySQL are as follows: TCP port 3306 for direct connections to MySQL database server (including when using Managed Connection Pooling ).
- You can use outbound connectivity to migrate data from an external server within your network, or do a homogeneous migration using Database Migration Service.
- MySQL PostgreSQL SQL Server This page describes concepts associated with Private Service Connect.

