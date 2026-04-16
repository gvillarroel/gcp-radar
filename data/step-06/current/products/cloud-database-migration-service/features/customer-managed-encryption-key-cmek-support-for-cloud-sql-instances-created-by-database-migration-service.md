---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:22.263Z"
product_name: "Cloud Database Migration Service"
product_slug: "cloud-database-migration-service"
feature_name: "Customer-managed encryption key (CMEK) support for Cloud SQL instances created by Database Migration Service"
feature_slug: "customer-managed-encryption-key-cmek-support-for-cloud-sql-instances-created-by-database-migration-service"
latest_feature_date: "2021-12-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/database-migration/docs/security-and-encryption"
  - "https://docs.cloud.google.com/database-migration/docs/sqlserver-to-csql-pgsql/scenario-overview"
  - "https://docs.cloud.google.com/database-migration/docs/sqlserver-to-alloydb/scenario-overview"
  - "https://docs.cloud.google.com/database-migration/docs/oracle-to-postgresql/scenario-overview"
keywords:
  - "customer"
  - "managed"
  - "encryption"
  - "key"
  - "cmek"
  - "for"
  - "sql"
  - "instances"
---

# Customer-managed encryption key (CMEK) support for Cloud SQL instances created by Database Migration Service

Product: Cloud Database Migration Service
Coverage: MEDIUM

## Step 02 Summary

Database Migration Service added support for creating Cloud SQL for MySQL, Cloud SQL for PostgreSQL, and Cloud SQL for SQL Server instances with customer-managed encryption keys (CMEK) enabled.

## Extended Definition

Database Migration Service added support for creating Cloud SQL for MySQL, Cloud SQL for PostgreSQL, and Cloud SQL for SQL Server instances with customer-managed encryption keys (CMEK) enabled.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/database-migration/docs/security-and-encryption](https://docs.cloud.google.com/database-migration/docs/security-and-encryption)
- [https://docs.cloud.google.com/database-migration/docs/sqlserver-to-csql-pgsql/scenario-overview](https://docs.cloud.google.com/database-migration/docs/sqlserver-to-csql-pgsql/scenario-overview)
- [https://docs.cloud.google.com/database-migration/docs/sqlserver-to-alloydb/scenario-overview](https://docs.cloud.google.com/database-migration/docs/sqlserver-to-alloydb/scenario-overview)
- [https://docs.cloud.google.com/database-migration/docs/oracle-to-postgresql/scenario-overview](https://docs.cloud.google.com/database-migration/docs/oracle-to-postgresql/scenario-overview)

## Supporting Pages

### "Security and encryption \_|\_ Database Migration Service \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/database-migration/docs/security-and-encryption](https://docs.cloud.google.com/database-migration/docs/security-and-encryption)
- Source ID: `site-docs-root-2`
- Final score: 236
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information, see Use customer-managed encryption keys (CMEK) in the Cloud SQL documentation.
- For more information, see Use customer-managed encryption keys (CMEK) in the Cloud SQL documentation.
- For more information, see Use customer-managed encryption keys (CMEK) in the Cloud SQL documentation.
- For more information, see Use customer-managed encryption keys (CMEK) for continuous migrations .

### "Database Migration Service for heterogeneous SQL Server to Cloud SQL for\

- URL: [https://docs.cloud.google.com/database-migration/docs/sqlserver-to-csql-pgsql/scenario-overview](https://docs.cloud.google.com/database-migration/docs/sqlserver-to-csql-pgsql/scenario-overview)
- Source ID: `site-api-reference`
- Final score: 234
- Re-rank relevance: N/A

Evidence snippets:
- Database Migration Service offers support for multiple different SQL Server sources, including Amazon RDS, Microsoft Azure SQL Managed Instance, and self-managed SQL Server instances.
- Microsoft Azure SQL Managed Instance Microsoft Azure SQL Database tier S3 and above Cloud SQL for SQL Server Self-managed SQL Server versions: Enterprise 2008 and later, Standard 2016 SP1 and later, Developer 2008 and later (on premises or on any cloud VM that you fully control) Unsupported source databases Database Migration Service doesn't support migrating from the following SQL Server versions: SQL Server Standard edition versions from 2008 to 2014 SQL Server Express SQL Server Web Code and schema conversion Database Migration Service conversion workspaces provide an interactive editor experience where you can convert your schemas, tables, and other objects from SQL Server syntax to PostgreSQL syntax.
- This page provides an overview of the key Database Migration Service features for heterogeneous SQL Server to Cloud SQL for PostgreSQL migrations: Supported source and destination lists all SQL Server versions supported by Database Migration Service.
- Continuous data movement during Database Migration Service for SQL Server heterogeneous migrations. (click to enlarge) At a high level, your data moves through the migration phases as follows: One-time migrations You use Database Migration Service conversion workspace to convert your schemas, tables, and other objects from SQL Server syntax to PostgreSQL syntax.

### "Database Migration Service for heterogeneous SQL Server to AlloyDB for PostgreSQL\

- URL: [https://docs.cloud.google.com/database-migration/docs/sqlserver-to-alloydb/scenario-overview](https://docs.cloud.google.com/database-migration/docs/sqlserver-to-alloydb/scenario-overview)
- Source ID: `site-api-reference`
- Final score: 214
- Re-rank relevance: N/A

Evidence snippets:
- Database Migration Service offers support for multiple different SQL Server sources, including Amazon RDS, Microsoft Azure SQL Managed Instance, and self-managed SQL Server instances.
- Supported source and destination databases The following table lists all supported SQL Server source and destination databases: Source databases Destination databases Amazon RDS for SQL Server AlloyDB for PostgreSQL 14, 15, 16 Microsoft Azure SQL Managed Instance Microsoft Azure SQL Database tier S3 and above Cloud SQL for SQL Server Self-managed SQL Server versions: Enterprise 2008 and later, Standard 2016 SP1 and later, Developer 2008 and later (on premises or on any cloud VM that you fully control) Unsupported source databases Database Migration Service doesn't support migrating from the following SQL Server versions: SQL Server Standard edition versions from 2008 to 2014 SQL Server Express SQL Server Web Code and schema conversion Database Migration Service conversion workspaces provide an interactive editor experience where you can convert your schemas, tables, and other objects from SQL Server syntax to PostgreSQL syntax.
- This page provides an overview of the key Database Migration Service features for heterogeneous SQL Server to AlloyDB for PostgreSQL migrations: Supported sources and destinations lists all SQL Server versions supported by Database Migration Service.
- Continuous data movement during Database Migration Service for SQL Server heterogeneous migrations. (click to enlarge) At a high level, your data moves through the migration phases as follows: One-time migrations You use Database Migration Service conversion workspace to convert your schemas, tables, and other objects from SQL Server syntax to PostgreSQL syntax.

### "Oracle to Cloud SQL for PostgreSQL migration overview \_|\_ Database Migration\

- URL: [https://docs.cloud.google.com/database-migration/docs/oracle-to-postgresql/scenario-overview](https://docs.cloud.google.com/database-migration/docs/oracle-to-postgresql/scenario-overview)
- Source ID: `site-api-reference`
- Final score: 190
- Re-rank relevance: N/A

Evidence snippets:
- This page provides an overview of the key Database Migration Service features for heterogeneous Oracle to Cloud SQL for PostgreSQL migrations: Supported source and destination lists all Oracle versions supported by Database Migration Service.
- Database Migration Service offers support for multiple different Oracle offerings, including Bare Metal Solution, Oracle Real Application Clusters (RAC), and self-managed instances.
- Continuous data movement during a Database Migration Service heterogeneous migration from Oracle to Cloud SQL for PostgreSQL. (click to enlarge) At a high level, your data moves through the migration phases as follows: One-time migrations You use Database Migration Service conversion workspace to convert your schemas, tables, and other objects from Oracle syntax to PostgreSQL syntax.
- There are two ways in which you can complete full dump: Automatic: Database Migration Service connects to your source instance, reads the contents of the tables you selected for migration, and then loads the data to the AlloyDB for PostgreSQL destination instance.

