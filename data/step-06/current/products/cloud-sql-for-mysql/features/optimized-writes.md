---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:56:51.883Z"
product_name: "Cloud SQL for MySQL"
product_slug: "cloud-sql-for-mysql"
feature_name: "Optimized writes"
feature_slug: "optimized-writes"
latest_feature_date: "2025-10-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/editions-intro"
  - "https://docs.cloud.google.com/sql/docs/mysql/choose-edition"
  - "https://docs.cloud.google.com/sql/docs/mysql/admin-api/metrics"
keywords:
  - "optimized"
  - "writes"
  - "feature"
  - "dynamically"
  - "adjusts"
  - "mysql"
  - "write"
  - "related"
---

# Optimized writes

Product: Cloud SQL for MySQL
Coverage: MEDIUM

## Step 02 Summary

This feature dynamically adjusts MySQL write-related settings to improve write performance, crash recovery, and buffer pool warm-up.

## Extended Definition

This feature dynamically adjusts MySQL write-related settings to improve write performance, crash recovery, and buffer pool warm-up.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/editions-intro](https://docs.cloud.google.com/sql/docs/editions-intro)
- [https://docs.cloud.google.com/sql/docs/mysql/choose-edition](https://docs.cloud.google.com/sql/docs/mysql/choose-edition)
- [https://docs.cloud.google.com/sql/docs/mysql/admin-api/metrics](https://docs.cloud.google.com/sql/docs/mysql/admin-api/metrics)

## Supporting Pages

### "Cloud SQL editions overview \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/editions-intro](https://docs.cloud.google.com/sql/docs/editions-intro)
- Source ID: `site-docs-reference-3`
- Final score: 90
- Re-rank relevance: N/A

Evidence snippets:
- MySQL 5.6, 5.7, 8.0, 8.4 Availability SLA 99.99% (includes maintenance) 99.95% (excludes maintenance) Performance Machine series N2 C4A General purpose shared core General purpose dedicated core N4 Machine configuration limits N2 machine series Up to 128 vCPU Up to 864 GB RAM 1:8 core:memory ratio C4A machine series Up to 72 vCPU Up to 576 GB RAM 1:8 core:memory ratio General purpose shared core 1 vCPU Up to 1.7 GB RAM 1:6.5 core:memory ratio General purpose dedicated core Up to 96 vCPU Up to 624 GB RAM 1:6.5 core:memory ratio N4 machine series Up to 80 vCPU Up to 624 GB RAM 1:8 core:memory ratio Data cache Yes No Optimized writes Yes No Point-in-time log retention Up to 35 days Up to 7 days Read pools Yes No Availability Maintenance downtime Planned operations downtime Sub-second downtime Few minutes Advanced disaster recovery (DR) Yes No Write endpoint for advanced disaster recovery (DR) Yes No Write endpoint connectivity Yes No Managed Connection Pooling Yes No Observability AI-assisted troubleshooting Yes No Query insights 30 day metric retention 1 MB query length 200 query plan sample maximum Wait event analysis Index advisor recommendations 7 day metric retention 4500 bytes query length 20 query plan sample maximum Enhanced recommenders Yes No Cloud SQL Enterprise Plus edition enhancements Cloud SQL Enterprise Plus edition is ideal for applications that require the best performance, availability, and observability.
- Cloud SQL editions features The following table provides an overview of key features enhancements available for Cloud SQL Enterprise Plus edition when compared to Cloud SQL Enterprise edition: Cloud SQL Enterprise Plus edition Cloud SQL Enterprise edition Database versions MySQL 8.0, 8.4 Note: If the database version for your instance is MySQL 8.4, then the default Cloud SQL edition is Enterprise Plus.
- MySQL PostgreSQL SQL Server Cloud SQL for MySQL editions is a tier-based pricing model where each edition provides different performance, availability, observability, and data protection characteristics to support your various business and application needs.
- Better performance with enhanced machine series options : high performance machine series availability that provides a balanced price-to-performance ratio, or optimized price-performance to deliver consistent performance for high-demand workloads.

### "Choose a Cloud SQL edition \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/choose-edition](https://docs.cloud.google.com/sql/docs/mysql/choose-edition)
- Source ID: `site-docs-reference-required-5`
- Final score: 76
- Re-rank relevance: N/A

Evidence snippets:
- MySQL 5.6, 5.7, 8.0, 8.4 Availability SLA 99.99% (includes maintenance) 99.95% (excludes maintenance) Performance Machine series N2 C4A General purpose shared core General purpose dedicated core N4 Machine configuration limits N2 machine series Up to 128 vCPU Up to 864 GB RAM 1:8 core:memory ratio C4A machine series Up to 72 vCPU Up to 576 GB RAM 1:8 core:memory ratio General purpose shared core 1 vCPU Up to 1.7 GB RAM 1:6.5 core:memory ratio General purpose dedicated core Up to 96 vCPU Up to 624 GB RAM 1:6.5 core:memory ratio N4 machine series Up to 80 vCPU Up to 624 GB RAM 1:8 core:memory ratio Data cache Yes No Optimized writes Yes No Point-in-time log retention Up to 35 days Up to 7 days Read pools Yes No Availability Maintenance downtime Planned operations downtime Sub-second downtime Few minutes Advanced disaster recovery (DR) Yes No Write endpoint for advanced disaster recovery (DR) Yes No Write endpoint connectivity Yes No Managed Connection Pooling Yes No Observability AI-assisted troubleshooting Yes No Query insights 30 day metric retention 1 MB query length 200 query plan sample maximum Wait event analysis Index advisor recommendations 7 day metric retention 4500 bytes query length 20 query plan sample maximum Enhanced recommenders Yes No What's next Plan and prepare to create a new instance.
- Cloud SQL key features The following table provides an overview of key feature enhancements available in Cloud SQL Enterprise Plus edition compared to Cloud SQL Enterprise edition: Cloud SQL Enterprise Plus edition Cloud SQL Enterprise edition Database versions MySQL 8.0, 8.4 Note: If the database version for your instance is MySQL 8.4, then the default Cloud SQL edition is Enterprise Plus.
- Home Documentation Databases Cloud SQL MySQL Guides Send feedback Choose a Cloud SQL edition Stay organized with collections Save and categorize content based on your preferences.
- MySQL PostgreSQL SQL Server When you create a new instance, you must choose a Cloud SQL edition.

### Cloud SQL metrics \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/admin-api/metrics](https://docs.cloud.google.com/sql/docs/mysql/admin-api/metrics)
- Source ID: `site-api-reference`
- Final score: 71
- Re-rank relevance: N/A

Evidence snippets:
- After sampling, data is not visible for up to 165 seconds. database/mysql/innodb/buffer pool write requests count GA (project) InnoDB Buffer Pool Write Requests Count DELTA , INT64 , 1 cloudsql database Writes done to the InnoDB buffer pool, since the last sample.
- One of innodb data reads, innodb data writes, innodb log writes, innodb dblwr writes. database/mysql/innodb/os log fsyncs count GA (project) Innodb OS Log Fsyncs Count DELTA , INT64 , 1 cloudsql database InnoDB fsync() calls to the log file, since the last sample.
- After sampling, data is not visible for up to 165 seconds. database/mysql/innodb/os log pending writes GA (project) InnoDB OS Log Pending Writes GAUGE , INT64 , 1 cloudsql database Number of pending writes to the InnoDB redo log files in the MySQL server.
- After sampling, data is not visible for up to 165 seconds. database/mysql/innodb/data pending writes GA (project) InnoDB Data Pending Writes GAUGE , INT64 , 1 cloudsql database Number of pending writes in the MySQL Server.

