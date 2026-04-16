---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:56:51.992Z"
product_name: "Cloud SQL for MySQL"
product_slug: "cloud-sql-for-mysql"
feature_name: "30 TB storage capacity"
feature_slug: "30-tb-storage-capacity"
latest_feature_date: "2019-06-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/mysql/about-storage-shrink"
  - "https://docs.cloud.google.com/sql/docs/mysql/quotas"
  - "https://docs.cloud.google.com/sql/docs/mysql/troubleshooting"
keywords:
  - "30"
  - "tb"
  - "storage"
  - "capacity"
  - "sql"
  - "increased"
  - "maximum"
  - "mysql"
---

# 30 TB storage capacity

Product: Cloud SQL for MySQL
Coverage: MEDIUM

## Step 02 Summary

Cloud SQL increased the maximum data storage for MySQL instances from 10,230 GB to 30,720 GB.

## Extended Definition

Cloud SQL increased the maximum data storage for MySQL instances from 10,230 GB to 30,720 GB.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/mysql/about-storage-shrink](https://docs.cloud.google.com/sql/docs/mysql/about-storage-shrink)
- [https://docs.cloud.google.com/sql/docs/mysql/quotas](https://docs.cloud.google.com/sql/docs/mysql/quotas)
- [https://docs.cloud.google.com/sql/docs/mysql/troubleshooting](https://docs.cloud.google.com/sql/docs/mysql/troubleshooting)

## Supporting Pages

### About storage shrink \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/about-storage-shrink](https://docs.cloud.google.com/sql/docs/mysql/about-storage-shrink)
- Source ID: `site-docs-reference-required-5`
- Final score: 94
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- MySQL PostgreSQL SQL Server If the storage capacity of a Cloud SQL instance is larger than your application needs, then you can manually reduce, or shrink, your storage capacity to a smaller size.
- Home Documentation Databases Cloud SQL MySQL Guides Send feedback About storage shrink Stay organized with collections Save and categorize content based on your preferences.
- Requirements for storage capacity The target storage size must be larger than the minimum allowed storage capacity that is determined to be safe for the instance.
- If you want to shrink the storage capacity of a replica, then you must complete a storage shrink operation on its associated primary instance first.

### Quotas and limits \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/quotas](https://docs.cloud.google.com/sql/docs/mysql/quotas)
- Source ID: `site-docs-root`
- Final score: 76
- Re-rank relevance: N/A

Evidence snippets:
- Value Limit Maximum number of saved queries per project (including saved queries for other Google Cloud products) 10,000 Maximum size for each query 1 MiB Cloud SQL storage limits Dedicated core: Up to 64 TB.
- Note: Creating or increasing storage capacity to 64 TB might increase latency of common operations, such as backups, dependent on your workload.
- If the number of active tables is significantly larger than both the Cloud SQL table defaults and the open tables recommendation by MySQL, then Cloud SQL recommends configuring the table open cache and table definition cache database flags with your instance's active table count.
- Configurable limits Instances per project The maximum number of instances you can have in a single project depends on the network architecture of those instances: New SQL network architecture: You can have up to 1000 instances per project.

### Troubleshoot \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/troubleshooting](https://docs.cloud.google.com/sql/docs/mysql/troubleshooting)
- Source ID: `site-docs-root`
- Final score: 76
- Re-rank relevance: N/A

Evidence snippets:
- MySQL PostgreSQL SQL Server Check if your question or problem has already been addressed on one of the following pages: FAQ Known issues Error messages Diagnose issues Debug connection issues Orphan tables Issues updating storage capacity Topics in this page include: Backup and recovery Cancel import and export Cloning Connectivity Creating instances External primary External replica Flags High availability Import and export Logging Managing instances Private Service Connect Replication Backup and recovery Issue Troubleshooting You can't see the current operation's status.
- Things to try: You can check the storage occupied by binary logs using the following command in the MySQL command line interface: SHOW BINARY LOGS; Temporary tables may also be occupying a significant amount of storage space.
- You can find out the size of the general logs by connecting to the database and running this query: SELECT ROUND(SUM(LENGTH(argument)/POW(1024,2)),2) from mysql.general log; You want to find out what is using up storage.
- The maximum storage limit was reached and automatic storage increase isn't enabled.

