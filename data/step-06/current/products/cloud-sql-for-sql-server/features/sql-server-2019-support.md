---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:57:14.584Z"
product_name: "Cloud SQL for SQL Server"
product_slug: "cloud-sql-for-sql-server"
feature_name: "SQL Server 2019 support"
feature_slug: "sql-server-2019-support"
latest_feature_date: "2021-06-24"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/sqlserver/about-tde"
  - "https://docs.cloud.google.com/sql/docs/introduction"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/backups"
keywords:
  - "sql"
  - "server"
  - "2019"
  - "supports"
  - "database"
  - "instances"
---

# SQL Server 2019 support

Product: Cloud SQL for SQL Server
Coverage: LOW

## Step 02 Summary

Cloud SQL for SQL Server supports SQL Server 2019 database instances.

## Extended Definition

Cloud SQL for SQL Server supports SQL Server 2019 database instances.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/sqlserver/about-tde](https://docs.cloud.google.com/sql/docs/sqlserver/about-tde)
- [https://docs.cloud.google.com/sql/docs/introduction](https://docs.cloud.google.com/sql/docs/introduction)
- [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/backups](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/backups)

## Supporting Pages

### Cloud SQL overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/introduction](https://docs.cloud.google.com/sql/docs/introduction)
- Source ID: `site-docs-root`
- Final score: 30
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- There are many database administration tools you can choose from, depending on your database engine, including the following: phpMyAdmin for MySQL MySQL Workbench for MySQL Toad Edge for MySQL and PostgreSQL pgAdmin.org for PostgreSQL SQL Server Management Studio for SQL Server Visual Studio Code for SQL Server Cloud SQL pricing Cloud SQL pricing varies with your configuration settings, and depends on: How much storage you provision, in GiB per month How many CPUs you select for your Cloud SQL instance How much memory you select for your Cloud SQL instance Where you choose to host your data How much network traffic leaves your instance How many IP addresses you assign and use For more information, see the pricing page or the pricing calculator .
- For example, when updating a database server, Google Cloud uses live migration, an advanced technology that reliably migrates a VM from the original host to a new one while the VM stays running.
- Each VM operates the database program, such as MySQL Server, PostgreSQL, or SQL Server, and service agents that provide supporting services, such as logging and monitoring.
- Use cases for Cloud SQL Cloud SQL provides a cloud-based alternative to local MySQL, PostgreSQL, and SQL Server databases.

### "About transparent data encryption (TDE) \_|\_ Cloud SQL for SQL Server \_\

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/about-tde](https://docs.cloud.google.com/sql/docs/sqlserver/about-tde)
- Source ID: `site-docs-reference-required-4`
- Final score: 29
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Limitations Available only in Cloud SQL for SQL Server instances with the following database versions : SQL Server Enterprise SQL Server 2019 or later (Standard edition) If TDE is used for an instance with replicas and VPC Service Controls are enabled, then you must ensure the primary instance and all replicas are within the same service perimeter.
- Cloud SQL for SQL Server supports using TDE to encrypt data stored in your Cloud SQL for SQL Server instances.
- Home Documentation Databases Cloud SQL SQL Server Guides Send feedback About transparent data encryption (TDE) Stay organized with collections Save and categorize content based on your preferences.
- Instances with TDE enabled generate an internal database called gcloud cloudsqladmin .

### "Cloud SQL backups overview \_|\_ Cloud SQL for SQL Server \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/backups](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/backups)
- Source ID: `site-docs-reference-required-4`
- Final score: 22
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Databases Cloud SQL SQL Server Guides Send feedback Cloud SQL backups overview Stay organized with collections Save and categorize content based on your preferences.
- MySQL PostgreSQL SQL Server Cloud SQL lets you back up your instances on-demand, or automatically using a backup schedule.
- Relevant log files include: cloudsql.googleapis.com/sqlagent.out cloudsql.googleapis.com/sqlserver.err If Cloud Audit Logs is enabled and you have the required permissions to view them, cloudaudit.googleapis.com/activity may also be available.
- You can also set an Cloud SQL custom organization policy to take a final back at instance deletion for all instances in your organization and set a standard retention period.

