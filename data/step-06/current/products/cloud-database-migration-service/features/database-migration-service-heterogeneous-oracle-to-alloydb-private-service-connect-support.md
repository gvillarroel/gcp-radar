---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:22.245Z"
product_name: "Cloud Database Migration Service"
product_slug: "cloud-database-migration-service"
feature_name: "Database Migration Service heterogeneous Oracle to AlloyDB Private Service Connect support"
feature_slug: "database-migration-service-heterogeneous-oracle-to-alloydb-private-service-connect-support"
latest_feature_date: "2024-07-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/database-migration/docs/oracle-to-alloydb/scenario-overview"
  - "https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/get_migration_job"
  - "https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/list_migration_jobs"
  - "https://docs.cloud.google.com/database-migration/docs/oracle-to-postgresql/scenario-overview"
keywords:
  - "database"
  - "migration"
  - "heterogeneous"
  - "oracle"
  - "to"
  - "alloydb"
  - "private"
  - "connect"
---

# Database Migration Service heterogeneous Oracle to AlloyDB Private Service Connect support

Product: Cloud Database Migration Service
Coverage: MEDIUM

## Step 02 Summary

Heterogeneous Oracle migrations to AlloyDB for PostgreSQL now support network connectivity via Private Service Connect for supported AlloyDB clusters.

## Extended Definition

Heterogeneous Oracle migrations to AlloyDB for PostgreSQL now support network connectivity via Private Service Connect for supported AlloyDB clusters.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/database-migration/docs/oracle-to-alloydb/scenario-overview](https://docs.cloud.google.com/database-migration/docs/oracle-to-alloydb/scenario-overview)
- [https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/get_migration_job](https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/get_migration_job)
- [https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/list_migration_jobs](https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/list_migration_jobs)
- [https://docs.cloud.google.com/database-migration/docs/oracle-to-postgresql/scenario-overview](https://docs.cloud.google.com/database-migration/docs/oracle-to-postgresql/scenario-overview)

## Supporting Pages

### "Oracle to AlloyDB for PostgreSQL migration overview \_|\_ Database Migration\

- URL: [https://docs.cloud.google.com/database-migration/docs/oracle-to-alloydb/scenario-overview](https://docs.cloud.google.com/database-migration/docs/oracle-to-alloydb/scenario-overview)
- Source ID: `site-api-reference`
- Final score: 344
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Continuous data movement during a Database Migration Service heterogeneous migration from Oracle to AlloyDB for PostgreSQL. (click to enlarge) At a high level, your data moves through the migration phases as follows: One-time migrations You use Database Migration Service conversion workspace to convert your schemas, tables, and other objects from Oracle syntax to PostgreSQL syntax.
- This page provides an overview of the key Database Migration Service features for heterogeneous Oracle to AlloyDB for PostgreSQL migrations: Supported source and destination lists all Oracle versions supported by Database Migration Service.
- There are two ways in which you can complete full dump: Automatic: Database Migration Service connects to your source instance, reads the contents of the tables you selected for migration, and then loads the data to the AlloyDB for PostgreSQL destination instance.
- Home Documentation Databases Database Migration Service Oracle to AlloyDB for PostgreSQL Guides Send feedback Oracle to AlloyDB for PostgreSQL migration overview Stay organized with collections Save and categorize content based on your preferences.

### "MCP Tools Reference: datamigration \_|\_ Database Migration Service \_|\_\

- URL: [https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/get_migration_job](https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/get_migration_job)
- Source ID: `site-api-reference`
- Final score: 314
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- MigrationJob JSON representation { "name" : string , "createTime" : string , "updateTime" : string , "labels" : { string : string , ... } , "displayName" : string , "state" : enum ( State ) , "phase" : enum ( Phase ) , "type" : enum ( Type ) , "dumpPath" : string , "dumpFlags" : { object ( DumpFlags ) } , "source" : string , "destination" : string , "duration" : string , "error" : { object ( Status ) } , "sourceDatabase" : { object ( DatabaseType ) } , "destinationDatabase" : { object ( DatabaseType ) } , "endTime" : string , "conversionWorkspace" : { object ( ConversionWorkspaceInfo ) } , "filter" : string , "cmekKeyName" : string , "performanceConfig" : { object ( PerformanceConfig ) } , "postgresHomogeneousConfig" : { object ( PostgresHomogeneousConfig ) } , "sqlserverHomogeneousMigrationJobConfig" : { object ( SqlServerHomogeneousMigrationJobConfig ) } , "dumpType" : enum ( DumpType ) , "objectsConfig" : { object ( MigrationJobObjectsConfig ) } , "purpose" : enum ( Purpose ) , "originalMigrationName" : string , // Union field connectivity can be only one of the following: "reverseSshConnectivity" : { object ( ReverseSshConnectivity ) } , "vpcPeeringConnectivity" : { object ( VpcPeeringConnectivity ) } , "staticIpConnectivity" : { object ( StaticIpConnectivity ) } // End of list of possible types for union field connectivity . // Union field config can be only one of the following: "oracleToPostgresConfig" : { object ( OracleToPostgresConfig ) } , "sqlserverToPostgresConfig" : { object ( SqlServerToPostgresConfig ) } , "postgresToSqlserverConfig" : { object ( PostgresToSqlServerConfig ) } // End of list of possible types for union field config . // Union field satisfies pzs can be only one of the following: "satisfiesPzs" : boolean // End of list of possible types for union field satisfies pzs . // Union field satisfies pzi can be only one of the following: "satisfiesPzi" : boolean // End of list of possible types for union field satisfies pzi . } Fields name string The name (URI) of this migration job resource, in the form of: projects/{project}/locations/{location}/migrationJobs/{migrationJob}. createTime string ( Timestamp format) Output only.
- Configuration for migration. config can be only one of the following: oracleToPostgresConfig object ( OracleToPostgresConfig ) Configuration for heterogeneous Oracle to Cloud SQL for PostgreSQL and Oracle to AlloyDB for PostgreSQL migrations. sqlserverToPostgresConfig object ( SqlServerToPostgresConfig ) Configuration for heterogeneous SQL Server to Cloud SQL for PostgreSQL migrations. postgresToSqlserverConfig object ( PostgresToSqlServerConfig ) Configuration for heterogeneous failback migrations from PostgreSQL to SQL Server .
- Maximum number of connections Database Migration Service will open to the destination for data migration.
- Maximum number of connections Database Migration Service will open to the destination for data migration.

### "MCP Tools Reference: datamigration \_|\_ Database Migration Service \_|\_\

- URL: [https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/list_migration_jobs](https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/list_migration_jobs)
- Source ID: `site-api-reference`
- Final score: 314
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- MigrationJob JSON representation { "name" : string , "createTime" : string , "updateTime" : string , "labels" : { string : string , ... } , "displayName" : string , "state" : enum ( State ) , "phase" : enum ( Phase ) , "type" : enum ( Type ) , "dumpPath" : string , "dumpFlags" : { object ( DumpFlags ) } , "source" : string , "destination" : string , "duration" : string , "error" : { object ( Status ) } , "sourceDatabase" : { object ( DatabaseType ) } , "destinationDatabase" : { object ( DatabaseType ) } , "endTime" : string , "conversionWorkspace" : { object ( ConversionWorkspaceInfo ) } , "filter" : string , "cmekKeyName" : string , "performanceConfig" : { object ( PerformanceConfig ) } , "postgresHomogeneousConfig" : { object ( PostgresHomogeneousConfig ) } , "sqlserverHomogeneousMigrationJobConfig" : { object ( SqlServerHomogeneousMigrationJobConfig ) } , "dumpType" : enum ( DumpType ) , "objectsConfig" : { object ( MigrationJobObjectsConfig ) } , "purpose" : enum ( Purpose ) , "originalMigrationName" : string , // Union field connectivity can be only one of the following: "reverseSshConnectivity" : { object ( ReverseSshConnectivity ) } , "vpcPeeringConnectivity" : { object ( VpcPeeringConnectivity ) } , "staticIpConnectivity" : { object ( StaticIpConnectivity ) } // End of list of possible types for union field connectivity . // Union field config can be only one of the following: "oracleToPostgresConfig" : { object ( OracleToPostgresConfig ) } , "sqlserverToPostgresConfig" : { object ( SqlServerToPostgresConfig ) } , "postgresToSqlserverConfig" : { object ( PostgresToSqlServerConfig ) } // End of list of possible types for union field config . // Union field satisfies pzs can be only one of the following: "satisfiesPzs" : boolean // End of list of possible types for union field satisfies pzs . // Union field satisfies pzi can be only one of the following: "satisfiesPzi" : boolean // End of list of possible types for union field satisfies pzi . } Fields name string The name (URI) of this migration job resource, in the form of: projects/{project}/locations/{location}/migrationJobs/{migrationJob}. createTime string ( Timestamp format) Output only.
- Configuration for migration. config can be only one of the following: oracleToPostgresConfig object ( OracleToPostgresConfig ) Configuration for heterogeneous Oracle to Cloud SQL for PostgreSQL and Oracle to AlloyDB for PostgreSQL migrations. sqlserverToPostgresConfig object ( SqlServerToPostgresConfig ) Configuration for heterogeneous SQL Server to Cloud SQL for PostgreSQL migrations. postgresToSqlserverConfig object ( PostgresToSqlServerConfig ) Configuration for heterogeneous failback migrations from PostgreSQL to SQL Server .
- Maximum number of connections Database Migration Service will open to the destination for data migration.
- Maximum number of connections Database Migration Service will open to the destination for data migration.

### "Oracle to Cloud SQL for PostgreSQL migration overview \_|\_ Database Migration\

- URL: [https://docs.cloud.google.com/database-migration/docs/oracle-to-postgresql/scenario-overview](https://docs.cloud.google.com/database-migration/docs/oracle-to-postgresql/scenario-overview)
- Source ID: `site-api-reference`
- Final score: 312
- Re-rank relevance: N/A

Evidence snippets:
- Continuous data movement during a Database Migration Service heterogeneous migration from Oracle to Cloud SQL for PostgreSQL. (click to enlarge) At a high level, your data moves through the migration phases as follows: One-time migrations You use Database Migration Service conversion workspace to convert your schemas, tables, and other objects from Oracle syntax to PostgreSQL syntax.
- There are two ways in which you can complete full dump: Automatic: Database Migration Service connects to your source instance, reads the contents of the tables you selected for migration, and then loads the data to the AlloyDB for PostgreSQL destination instance.
- This page provides an overview of the key Database Migration Service features for heterogeneous Oracle to Cloud SQL for PostgreSQL migrations: Supported source and destination lists all Oracle versions supported by Database Migration Service.
- During this phase, Database Migration Service connects to your source instance, reads the contents of the tables you selected for migration, and then loads the data to the AlloyDB for PostgreSQL destination instance.

