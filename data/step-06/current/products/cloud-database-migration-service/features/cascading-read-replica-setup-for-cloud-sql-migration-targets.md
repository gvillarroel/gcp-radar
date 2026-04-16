---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:22.258Z"
product_name: "Cloud Database Migration Service"
product_slug: "cloud-database-migration-service"
feature_name: "Cascading read replica setup for Cloud SQL migration targets"
feature_slug: "cascading-read-replica-setup-for-cloud-sql-migration-targets"
latest_feature_date: "2023-04-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/database-migration/docs/sqlserver-to-csql-pgsql/scenario-overview"
  - "https://docs.cloud.google.com/database-migration/docs/oracle-to-postgresql/scenario-overview"
  - "https://docs.cloud.google.com/database-migration/docs/sqlserver-to-alloydb/scenario-overview"
  - "https://docs.cloud.google.com/database-migration/docs/oracle-to-alloydb/scenario-overview"
keywords:
  - "cascading"
  - "read"
  - "replica"
  - "setup"
  - "for"
  - "sql"
  - "migration"
  - "targets"
---

# Cascading read replica setup for Cloud SQL migration targets

Product: Cloud Database Migration Service
Coverage: MEDIUM

## Step 02 Summary

Cloud Database Migration Service enables setting up cascading read replicas after migration to Cloud SQL for MySQL or Cloud SQL for PostgreSQL destinations.

## Extended Definition

Cloud Database Migration Service enables setting up cascading read replicas after migration to Cloud SQL for MySQL or Cloud SQL for PostgreSQL destinations.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/database-migration/docs/sqlserver-to-csql-pgsql/scenario-overview](https://docs.cloud.google.com/database-migration/docs/sqlserver-to-csql-pgsql/scenario-overview)
- [https://docs.cloud.google.com/database-migration/docs/oracle-to-postgresql/scenario-overview](https://docs.cloud.google.com/database-migration/docs/oracle-to-postgresql/scenario-overview)
- [https://docs.cloud.google.com/database-migration/docs/sqlserver-to-alloydb/scenario-overview](https://docs.cloud.google.com/database-migration/docs/sqlserver-to-alloydb/scenario-overview)
- [https://docs.cloud.google.com/database-migration/docs/oracle-to-alloydb/scenario-overview](https://docs.cloud.google.com/database-migration/docs/oracle-to-alloydb/scenario-overview)

## Supporting Pages

### "Database Migration Service for heterogeneous SQL Server to Cloud SQL for\

- URL: [https://docs.cloud.google.com/database-migration/docs/sqlserver-to-csql-pgsql/scenario-overview](https://docs.cloud.google.com/database-migration/docs/sqlserver-to-csql-pgsql/scenario-overview)
- Source ID: `site-api-reference`
- Final score: 252
- Re-rank relevance: N/A

Evidence snippets:
- Failback migrations Failback migrations (sometimes referred to as reverse replication ), allow you to push CDC updates back to your original SQL Server source from the destination Cloud SQL for PostgreSQL cluster after you complete the migration.
- During this phase, Database Migration Service connects to your source instance, reads the contents of the tables you selected for migration, and then loads the data to the Cloud SQL for PostgreSQL destination instance.
- During this phase, Database Migration Service connects to your source instance, reads the contents of the tables you selected for migration, and then loads the data to the Cloud SQL for PostgreSQL destination instance.
- The goal of this stage is to prepare your destination databases so that Database Migration Service can later replicate the data from source tables to their correct equivalents in Cloud SQL for PostgreSQL.

### "Oracle to Cloud SQL for PostgreSQL migration overview \_|\_ Database Migration\

- URL: [https://docs.cloud.google.com/database-migration/docs/oracle-to-postgresql/scenario-overview](https://docs.cloud.google.com/database-migration/docs/oracle-to-postgresql/scenario-overview)
- Source ID: `site-api-reference`
- Final score: 234
- Re-rank relevance: N/A

Evidence snippets:
- There are two ways in which you can complete full dump: Automatic: Database Migration Service connects to your source instance, reads the contents of the tables you selected for migration, and then loads the data to the AlloyDB for PostgreSQL destination instance.
- During this phase, Database Migration Service connects to your source instance, reads the contents of the tables you selected for migration, and then loads the data to the AlloyDB for PostgreSQL destination instance.
- The goal of this stage is to prepare your destination databases so that Database Migration Service can later replicate the data from source tables to their correct equivalents in AlloyDB for PostgreSQL.
- The goal of this stage is to prepare your destination databases so that Database Migration Service can later replicate the data from source tables to their correct equivalents in AlloyDB for PostgreSQL.

### "Database Migration Service for heterogeneous SQL Server to AlloyDB for PostgreSQL\

- URL: [https://docs.cloud.google.com/database-migration/docs/sqlserver-to-alloydb/scenario-overview](https://docs.cloud.google.com/database-migration/docs/sqlserver-to-alloydb/scenario-overview)
- Source ID: `site-api-reference`
- Final score: 230
- Re-rank relevance: N/A

Evidence snippets:
- Failback migrations Failback migrations (sometimes referred to as reverse replication ), allow you to push CDC updates back to your original SQL Server source from the destination AlloyDB for PostgreSQL cluster after you complete the migration.
- During this phase, Database Migration Service connects to your source instance, reads the contents of the tables you selected for migration, and then loads the data to the AlloyDB for PostgreSQL destination cluster.
- During this phase, Database Migration Service connects to your source instance, reads the contents of the tables you selected for migration, and then loads the data to the AlloyDB for PostgreSQL destination cluster.
- The goal of this stage is to prepare your destination databases so that Database Migration Service can later replicate the data from source tables to their correct equivalents in AlloyDB for PostgreSQL.

### "Oracle to AlloyDB for PostgreSQL migration overview \_|\_ Database Migration\

- URL: [https://docs.cloud.google.com/database-migration/docs/oracle-to-alloydb/scenario-overview](https://docs.cloud.google.com/database-migration/docs/oracle-to-alloydb/scenario-overview)
- Source ID: `site-api-reference`
- Final score: 208
- Re-rank relevance: N/A

Evidence snippets:
- There are two ways in which you can complete full dump: Automatic: Database Migration Service connects to your source instance, reads the contents of the tables you selected for migration, and then loads the data to the AlloyDB for PostgreSQL destination instance.
- During this phase, Database Migration Service connects to your source instance, reads the contents of the tables you selected for migration, and then loads the data to the AlloyDB for PostgreSQL destination instance.
- The goal of this stage is to prepare your destination databases so that Database Migration Service can later replicate the data from source tables to their correct equivalents in AlloyDB for PostgreSQL.
- The goal of this stage is to prepare your destination databases so that Database Migration Service can later replicate the data from source tables to their correct equivalents in AlloyDB for PostgreSQL.

