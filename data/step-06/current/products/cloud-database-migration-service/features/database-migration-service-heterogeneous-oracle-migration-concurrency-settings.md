---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:22.241Z"
product_name: "Cloud Database Migration Service"
product_slug: "cloud-database-migration-service"
feature_name: "Database Migration Service heterogeneous Oracle migration concurrency settings"
feature_slug: "database-migration-service-heterogeneous-oracle-migration-concurrency-settings"
latest_feature_date: "2024-10-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/database-migration/docs/oracle-to-alloydb/scenario-overview"
  - "https://docs.cloud.google.com/database-migration/docs/oracle-to-postgresql/scenario-overview"
  - "https://docs.cloud.google.com/database-migration/docs/heterogeneous-migrations"
  - "https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/get_migration_job"
keywords:
  - "database"
  - "migration"
  - "heterogeneous"
  - "oracle"
  - "concurrency"
  - "settings"
  - "now"
  - "provides"
---

# Database Migration Service heterogeneous Oracle migration concurrency settings

Product: Cloud Database Migration Service
Coverage: MEDIUM

## Step 02 Summary

Database Migration Service now provides additional concurrency settings for heterogeneous Oracle migration jobs, including full dump and maximum concurrent connection options.

## Extended Definition

Database Migration Service now provides additional concurrency settings for heterogeneous Oracle migration jobs, including full dump and maximum concurrent connection options.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/database-migration/docs/oracle-to-alloydb/scenario-overview](https://docs.cloud.google.com/database-migration/docs/oracle-to-alloydb/scenario-overview)
- [https://docs.cloud.google.com/database-migration/docs/oracle-to-postgresql/scenario-overview](https://docs.cloud.google.com/database-migration/docs/oracle-to-postgresql/scenario-overview)
- [https://docs.cloud.google.com/database-migration/docs/heterogeneous-migrations](https://docs.cloud.google.com/database-migration/docs/heterogeneous-migrations)
- [https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/get_migration_job](https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/get_migration_job)

## Supporting Pages

### "Oracle to AlloyDB for PostgreSQL migration overview \_|\_ Database Migration\

- URL: [https://docs.cloud.google.com/database-migration/docs/oracle-to-alloydb/scenario-overview](https://docs.cloud.google.com/database-migration/docs/oracle-to-alloydb/scenario-overview)
- Source ID: `site-api-reference`
- Final score: 238
- Re-rank relevance: N/A

Evidence snippets:
- This page provides an overview of the key Database Migration Service features for heterogeneous Oracle to AlloyDB for PostgreSQL migrations: Supported source and destination lists all Oracle versions supported by Database Migration Service.
- Continuous data movement during a Database Migration Service heterogeneous migration from Oracle to AlloyDB for PostgreSQL. (click to enlarge) At a high level, your data moves through the migration phases as follows: One-time migrations You use Database Migration Service conversion workspace to convert your schemas, tables, and other objects from Oracle syntax to PostgreSQL syntax.
- The following table lists all supported versions for heterogeneous Oracle migrations: Source databases Destination databases Oracle 11g, Version 11.2.0.4 AlloyDB for PostgreSQL 12, 13, 14, 15, 16.
- Migration data flow For heterogeneous Oracle migrations to PostgreSQL, Database Migration Service supports continuous and one-time migration flows.

### "Oracle to Cloud SQL for PostgreSQL migration overview \_|\_ Database Migration\

- URL: [https://docs.cloud.google.com/database-migration/docs/oracle-to-postgresql/scenario-overview](https://docs.cloud.google.com/database-migration/docs/oracle-to-postgresql/scenario-overview)
- Source ID: `site-api-reference`
- Final score: 238
- Re-rank relevance: N/A

Evidence snippets:
- This page provides an overview of the key Database Migration Service features for heterogeneous Oracle to Cloud SQL for PostgreSQL migrations: Supported source and destination lists all Oracle versions supported by Database Migration Service.
- Continuous data movement during a Database Migration Service heterogeneous migration from Oracle to Cloud SQL for PostgreSQL. (click to enlarge) At a high level, your data moves through the migration phases as follows: One-time migrations You use Database Migration Service conversion workspace to convert your schemas, tables, and other objects from Oracle syntax to PostgreSQL syntax.
- The following table lists all supported versions for heterogeneous Oracle migrations: Source databases Destination databases Oracle 11g, Version 11.2.0.4 Cloud SQL for PostgreSQL 12, 13, 14, 15, 16, 17.
- Migration data flow For heterogeneous Oracle migrations to PostgreSQL, Database Migration Service supports continuous and one-time migration flows.

### "Heterogeneous migrations \_|\_ Database Migration Service \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/database-migration/docs/heterogeneous-migrations](https://docs.cloud.google.com/database-migration/docs/heterogeneous-migrations)
- Source ID: `site-api-reference`
- Final score: 226
- Re-rank relevance: N/A

Evidence snippets:
- Supported scenarios Database Migration Service supports the following heterogeneous migrations: Migrate from Oracle to Cloud SQL for PostgreSQL Migrate from Oracle to AlloyDB for PostgreSQL Migrate from SQL Server to Cloud SQL for PostgreSQL Migrate from SQL Server to AlloyDB for PostgreSQL Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Database Migration Service provides tools, such as Gemini-assisted schema and code conversion, that help you convert the schema and objects from your source database into a format that is compatible with your destination database.
- Heterogeneous migrations are more complex than homogeneous migrations due to differences in schema structure, data types, and metadata components between the source database and the destination database.
- Home Documentation Databases Database Migration Service Guides Send feedback Heterogeneous migrations Stay organized with collections Save and categorize content based on your preferences.

### "MCP Tools Reference: datamigration \_|\_ Database Migration Service \_|\_\

- URL: [https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/get_migration_job](https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/get_migration_job)
- Source ID: `site-api-reference`
- Final score: 211
- Re-rank relevance: N/A

Evidence snippets:
- MigrationJob JSON representation { "name" : string , "createTime" : string , "updateTime" : string , "labels" : { string : string , ... } , "displayName" : string , "state" : enum ( State ) , "phase" : enum ( Phase ) , "type" : enum ( Type ) , "dumpPath" : string , "dumpFlags" : { object ( DumpFlags ) } , "source" : string , "destination" : string , "duration" : string , "error" : { object ( Status ) } , "sourceDatabase" : { object ( DatabaseType ) } , "destinationDatabase" : { object ( DatabaseType ) } , "endTime" : string , "conversionWorkspace" : { object ( ConversionWorkspaceInfo ) } , "filter" : string , "cmekKeyName" : string , "performanceConfig" : { object ( PerformanceConfig ) } , "postgresHomogeneousConfig" : { object ( PostgresHomogeneousConfig ) } , "sqlserverHomogeneousMigrationJobConfig" : { object ( SqlServerHomogeneousMigrationJobConfig ) } , "dumpType" : enum ( DumpType ) , "objectsConfig" : { object ( MigrationJobObjectsConfig ) } , "purpose" : enum ( Purpose ) , "originalMigrationName" : string , // Union field connectivity can be only one of the following: "reverseSshConnectivity" : { object ( ReverseSshConnectivity ) } , "vpcPeeringConnectivity" : { object ( VpcPeeringConnectivity ) } , "staticIpConnectivity" : { object ( StaticIpConnectivity ) } // End of list of possible types for union field connectivity . // Union field config can be only one of the following: "oracleToPostgresConfig" : { object ( OracleToPostgresConfig ) } , "sqlserverToPostgresConfig" : { object ( SqlServerToPostgresConfig ) } , "postgresToSqlserverConfig" : { object ( PostgresToSqlServerConfig ) } // End of list of possible types for union field config . // Union field satisfies pzs can be only one of the following: "satisfiesPzs" : boolean // End of list of possible types for union field satisfies pzs . // Union field satisfies pzi can be only one of the following: "satisfiesPzi" : boolean // End of list of possible types for union field satisfies pzi . } Fields name string The name (URI) of this migration job resource, in the form of: projects/{project}/locations/{location}/migrationJobs/{migrationJob}. createTime string ( Timestamp format) Output only.
- Configuration for migration. config can be only one of the following: oracleToPostgresConfig object ( OracleToPostgresConfig ) Configuration for heterogeneous Oracle to Cloud SQL for PostgreSQL and Oracle to AlloyDB for PostgreSQL migrations. sqlserverToPostgresConfig object ( SqlServerToPostgresConfig ) Configuration for heterogeneous SQL Server to Cloud SQL for PostgreSQL migrations. postgresToSqlserverConfig object ( PostgresToSqlServerConfig ) Configuration for heterogeneous failback migrations from PostgreSQL to SQL Server .
- SqlServerHomogeneousMigrationJobConfig JSON representation { "backupFilePattern" : string , "databaseBackups" : [ { object ( SqlServerDatabaseBackup ) } ] , "useDiffBackup" : boolean , "promoteWhenReady" : boolean , "dagConfig" : { object ( SqlServerDagConfig ) } } Fields backupFilePattern string Required.
- Home Documentation Databases Database Migration Service APIs and reference Send feedback MCP Tools Reference: datamigration Stay organized with collections Save and categorize content based on your preferences.

