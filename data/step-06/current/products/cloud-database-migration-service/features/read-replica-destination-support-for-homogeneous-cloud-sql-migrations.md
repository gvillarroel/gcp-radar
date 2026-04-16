---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:22.249Z"
product_name: "Cloud Database Migration Service"
product_slug: "cloud-database-migration-service"
feature_name: "Read-replica destination support for homogeneous Cloud SQL migrations"
feature_slug: "read-replica-destination-support-for-homogeneous-cloud-sql-migrations"
latest_feature_date: "2024-04-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/database-migration/docs/sqlserver-to-csql-pgsql/scenario-overview"
  - "https://docs.cloud.google.com/database-migration/docs/sqlserver-to-alloydb/scenario-overview"
  - "https://docs.cloud.google.com/database-migration/docs/oracle-to-postgresql/scenario-overview"
  - "https://docs.cloud.google.com/database-migration/docs/sqlserver/scenario-overview"
keywords:
  - "read"
  - "replica"
  - "destination"
  - "for"
  - "homogeneous"
  - "sql"
  - "migrations"
  - "database"
---

# Read-replica destination support for homogeneous Cloud SQL migrations

Product: Cloud Database Migration Service
Coverage: MEDIUM

## Step 02 Summary

Database Migration Service now supports homogeneous MySQL and PostgreSQL migrations to existing destination Cloud SQL instances that have read replicas enabled.

## Extended Definition

Database Migration Service now supports homogeneous MySQL and PostgreSQL migrations to existing destination Cloud SQL instances that have read replicas enabled.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/database-migration/docs/sqlserver-to-csql-pgsql/scenario-overview](https://docs.cloud.google.com/database-migration/docs/sqlserver-to-csql-pgsql/scenario-overview)
- [https://docs.cloud.google.com/database-migration/docs/sqlserver-to-alloydb/scenario-overview](https://docs.cloud.google.com/database-migration/docs/sqlserver-to-alloydb/scenario-overview)
- [https://docs.cloud.google.com/database-migration/docs/oracle-to-postgresql/scenario-overview](https://docs.cloud.google.com/database-migration/docs/oracle-to-postgresql/scenario-overview)
- [https://docs.cloud.google.com/database-migration/docs/sqlserver/scenario-overview](https://docs.cloud.google.com/database-migration/docs/sqlserver/scenario-overview)

## Supporting Pages

### "Database Migration Service for heterogeneous SQL Server to Cloud SQL for\

- URL: [https://docs.cloud.google.com/database-migration/docs/sqlserver-to-csql-pgsql/scenario-overview](https://docs.cloud.google.com/database-migration/docs/sqlserver-to-csql-pgsql/scenario-overview)
- Source ID: `site-api-reference`
- Final score: 304
- Re-rank relevance: N/A

Evidence snippets:
- This page provides an overview of the key Database Migration Service features for heterogeneous SQL Server to Cloud SQL for PostgreSQL migrations: Supported source and destination lists all SQL Server versions supported by Database Migration Service.
- Failback migrations Failback migrations (sometimes referred to as reverse replication ), allow you to push CDC updates back to your original SQL Server source from the destination Cloud SQL for PostgreSQL cluster after you complete the migration.
- During this phase, Database Migration Service connects to your source instance, reads the contents of the tables you selected for migration, and then loads the data to the Cloud SQL for PostgreSQL destination instance.
- During this phase, Database Migration Service connects to your source instance, reads the contents of the tables you selected for migration, and then loads the data to the Cloud SQL for PostgreSQL destination instance.

### "Database Migration Service for heterogeneous SQL Server to AlloyDB for PostgreSQL\

- URL: [https://docs.cloud.google.com/database-migration/docs/sqlserver-to-alloydb/scenario-overview](https://docs.cloud.google.com/database-migration/docs/sqlserver-to-alloydb/scenario-overview)
- Source ID: `site-api-reference`
- Final score: 282
- Re-rank relevance: N/A

Evidence snippets:
- This page provides an overview of the key Database Migration Service features for heterogeneous SQL Server to AlloyDB for PostgreSQL migrations: Supported sources and destinations lists all SQL Server versions supported by Database Migration Service.
- Failback migrations Failback migrations (sometimes referred to as reverse replication ), allow you to push CDC updates back to your original SQL Server source from the destination AlloyDB for PostgreSQL cluster after you complete the migration.
- During this phase, Database Migration Service connects to your source instance, reads the contents of the tables you selected for migration, and then loads the data to the AlloyDB for PostgreSQL destination cluster.
- During this phase, Database Migration Service connects to your source instance, reads the contents of the tables you selected for migration, and then loads the data to the AlloyDB for PostgreSQL destination cluster.

### "Oracle to Cloud SQL for PostgreSQL migration overview \_|\_ Database Migration\

- URL: [https://docs.cloud.google.com/database-migration/docs/oracle-to-postgresql/scenario-overview](https://docs.cloud.google.com/database-migration/docs/oracle-to-postgresql/scenario-overview)
- Source ID: `site-api-reference`
- Final score: 272
- Re-rank relevance: N/A

Evidence snippets:
- There are two ways in which you can complete full dump: Automatic: Database Migration Service connects to your source instance, reads the contents of the tables you selected for migration, and then loads the data to the AlloyDB for PostgreSQL destination instance.
- This page provides an overview of the key Database Migration Service features for heterogeneous Oracle to Cloud SQL for PostgreSQL migrations: Supported source and destination lists all Oracle versions supported by Database Migration Service.
- During this phase, Database Migration Service connects to your source instance, reads the contents of the tables you selected for migration, and then loads the data to the AlloyDB for PostgreSQL destination instance.
- The following table lists all supported versions for heterogeneous Oracle migrations: Source databases Destination databases Oracle 11g, Version 11.2.0.4 Cloud SQL for PostgreSQL 12, 13, 14, 15, 16, 17.

### Database Migration Service for SQL Server \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/database-migration/docs/sqlserver/scenario-overview](https://docs.cloud.google.com/database-migration/docs/sqlserver/scenario-overview)
- Source ID: `site-api-reference`
- Final score: 268
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following table lists all supported SQL Server source and destination databases: Source databases Destination databases Amazon RDS Cloud SQL for SQL Server versions 2022, 2019, 2017 Self-managed SQL Server (on premises or on any cloud VM that you fully control) Continuous migrations data flow For homogeneous SQL Server migrations to Cloud SQL, Database Migration Service supports the continuous migration flow.
- This page provides an overview of the key Database Migration Service features for homogeneous SQL Server migrations: Supported source and destination lists all SQL Server versions supported by Database Migration Service.
- You can stop the ongoing replication and promote the migration job when you want to switch your application to so that it uses the Cloud SQL for SQL Server destination instance as the production database.
- Database Migration Service then actively monitors your bucket, and continuously replicates your data to the destination Cloud SQL for SQL Server instance.

