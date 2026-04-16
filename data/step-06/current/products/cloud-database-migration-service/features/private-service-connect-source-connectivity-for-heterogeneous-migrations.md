---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:22.232Z"
product_name: "Cloud Database Migration Service"
product_slug: "cloud-database-migration-service"
feature_name: "Private Service Connect source connectivity for heterogeneous migrations"
feature_slug: "private-service-connect-source-connectivity-for-heterogeneous-migrations"
latest_feature_date: "2025-10-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/get_migration_job"
  - "https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/list_migration_jobs"
  - "https://docs.cloud.google.com/database-migration/docs/oracle-to-alloydb/scenario-overview"
  - "https://docs.cloud.google.com/database-migration/docs/oracle-to-postgresql/scenario-overview"
keywords:
  - "private"
  - "connect"
  - "source"
  - "connectivity"
  - "for"
  - "heterogeneous"
  - "migrations"
  - "oracle"
---

# Private Service Connect source connectivity for heterogeneous migrations

Product: Cloud Database Migration Service
Coverage: MEDIUM

## Step 02 Summary

Heterogeneous Oracle and SQL Server migration scenarios now support Private Service Connect interfaces for source network connectivity.

## Extended Definition

Heterogeneous Oracle and SQL Server migration scenarios now support Private Service Connect interfaces for source network connectivity.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/get_migration_job](https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/get_migration_job)
- [https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/list_migration_jobs](https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/list_migration_jobs)
- [https://docs.cloud.google.com/database-migration/docs/oracle-to-alloydb/scenario-overview](https://docs.cloud.google.com/database-migration/docs/oracle-to-alloydb/scenario-overview)
- [https://docs.cloud.google.com/database-migration/docs/oracle-to-postgresql/scenario-overview](https://docs.cloud.google.com/database-migration/docs/oracle-to-postgresql/scenario-overview)

## Supporting Pages

### "MCP Tools Reference: datamigration \_|\_ Database Migration Service \_|\_\

- URL: [https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/get_migration_job](https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/get_migration_job)
- Source ID: `site-api-reference`
- Final score: 212
- Re-rank relevance: N/A

Evidence snippets:
- MigrationJob JSON representation { "name" : string , "createTime" : string , "updateTime" : string , "labels" : { string : string , ... } , "displayName" : string , "state" : enum ( State ) , "phase" : enum ( Phase ) , "type" : enum ( Type ) , "dumpPath" : string , "dumpFlags" : { object ( DumpFlags ) } , "source" : string , "destination" : string , "duration" : string , "error" : { object ( Status ) } , "sourceDatabase" : { object ( DatabaseType ) } , "destinationDatabase" : { object ( DatabaseType ) } , "endTime" : string , "conversionWorkspace" : { object ( ConversionWorkspaceInfo ) } , "filter" : string , "cmekKeyName" : string , "performanceConfig" : { object ( PerformanceConfig ) } , "postgresHomogeneousConfig" : { object ( PostgresHomogeneousConfig ) } , "sqlserverHomogeneousMigrationJobConfig" : { object ( SqlServerHomogeneousMigrationJobConfig ) } , "dumpType" : enum ( DumpType ) , "objectsConfig" : { object ( MigrationJobObjectsConfig ) } , "purpose" : enum ( Purpose ) , "originalMigrationName" : string , // Union field connectivity can be only one of the following: "reverseSshConnectivity" : { object ( ReverseSshConnectivity ) } , "vpcPeeringConnectivity" : { object ( VpcPeeringConnectivity ) } , "staticIpConnectivity" : { object ( StaticIpConnectivity ) } // End of list of possible types for union field connectivity . // Union field config can be only one of the following: "oracleToPostgresConfig" : { object ( OracleToPostgresConfig ) } , "sqlserverToPostgresConfig" : { object ( SqlServerToPostgresConfig ) } , "postgresToSqlserverConfig" : { object ( PostgresToSqlServerConfig ) } // End of list of possible types for union field config . // Union field satisfies pzs can be only one of the following: "satisfiesPzs" : boolean // End of list of possible types for union field satisfies pzs . // Union field satisfies pzi can be only one of the following: "satisfiesPzi" : boolean // End of list of possible types for union field satisfies pzi . } Fields name string The name (URI) of this migration job resource, in the form of: projects/{project}/locations/{location}/migrationJobs/{migrationJob}. createTime string ( Timestamp format) Output only.
- OracleSourceConfig JSON representation { // Union field max concurrent full dump connections can be only one of the // following: "maxConcurrentFullDumpConnections" : integer // End of list of possible types for union field // max concurrent full dump connections . // Union field max concurrent cdc connections can be only one of the // following: "maxConcurrentCdcConnections" : integer // End of list of possible types for union field // max concurrent cdc connections . // Union field skip full dump can be only one of the following: "skipFullDump" : boolean // End of list of possible types for union field skip full dump . // Union field cdc start position can be only one of the following: "cdcStartPosition" : string // End of list of possible types for union field cdc start position . // Union field cdc method can be only one of the following: "logMiner" : { object ( LogMiner ) } , "binaryLogParser" : { object ( BinaryLogParser ) } // End of list of possible types for union field cdc method . } Fields Union field max concurrent full dump connections . max concurrent full dump connections can be only one of the following: maxConcurrentFullDumpConnections integer Optional.
- Configuration for migration. config can be only one of the following: oracleToPostgresConfig object ( OracleToPostgresConfig ) Configuration for heterogeneous Oracle to Cloud SQL for PostgreSQL and Oracle to AlloyDB for PostgreSQL migrations. sqlserverToPostgresConfig object ( SqlServerToPostgresConfig ) Configuration for heterogeneous SQL Server to Cloud SQL for PostgreSQL migrations. postgresToSqlserverConfig object ( PostgresToSqlServerConfig ) Configuration for heterogeneous failback migrations from PostgreSQL to SQL Server .
- SqlServerSourceConfig JSON representation { // Union field max concurrent full dump connections can be only one of the // following: "maxConcurrentFullDumpConnections" : integer // End of list of possible types for union field // max concurrent full dump connections . // Union field max concurrent cdc connections can be only one of the // following: "maxConcurrentCdcConnections" : integer // End of list of possible types for union field // max concurrent cdc connections . // Union field skip full dump can be only one of the following: "skipFullDump" : boolean // End of list of possible types for union field skip full dump . // Union field cdc start position can be only one of the following: "cdcStartPosition" : string // End of list of possible types for union field cdc start position . } Fields Union field max concurrent full dump connections . max concurrent full dump connections can be only one of the following: maxConcurrentFullDumpConnections integer Optional.

### "MCP Tools Reference: datamigration \_|\_ Database Migration Service \_|\_\

- URL: [https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/list_migration_jobs](https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/list_migration_jobs)
- Source ID: `site-api-reference`
- Final score: 212
- Re-rank relevance: N/A

Evidence snippets:
- MigrationJob JSON representation { "name" : string , "createTime" : string , "updateTime" : string , "labels" : { string : string , ... } , "displayName" : string , "state" : enum ( State ) , "phase" : enum ( Phase ) , "type" : enum ( Type ) , "dumpPath" : string , "dumpFlags" : { object ( DumpFlags ) } , "source" : string , "destination" : string , "duration" : string , "error" : { object ( Status ) } , "sourceDatabase" : { object ( DatabaseType ) } , "destinationDatabase" : { object ( DatabaseType ) } , "endTime" : string , "conversionWorkspace" : { object ( ConversionWorkspaceInfo ) } , "filter" : string , "cmekKeyName" : string , "performanceConfig" : { object ( PerformanceConfig ) } , "postgresHomogeneousConfig" : { object ( PostgresHomogeneousConfig ) } , "sqlserverHomogeneousMigrationJobConfig" : { object ( SqlServerHomogeneousMigrationJobConfig ) } , "dumpType" : enum ( DumpType ) , "objectsConfig" : { object ( MigrationJobObjectsConfig ) } , "purpose" : enum ( Purpose ) , "originalMigrationName" : string , // Union field connectivity can be only one of the following: "reverseSshConnectivity" : { object ( ReverseSshConnectivity ) } , "vpcPeeringConnectivity" : { object ( VpcPeeringConnectivity ) } , "staticIpConnectivity" : { object ( StaticIpConnectivity ) } // End of list of possible types for union field connectivity . // Union field config can be only one of the following: "oracleToPostgresConfig" : { object ( OracleToPostgresConfig ) } , "sqlserverToPostgresConfig" : { object ( SqlServerToPostgresConfig ) } , "postgresToSqlserverConfig" : { object ( PostgresToSqlServerConfig ) } // End of list of possible types for union field config . // Union field satisfies pzs can be only one of the following: "satisfiesPzs" : boolean // End of list of possible types for union field satisfies pzs . // Union field satisfies pzi can be only one of the following: "satisfiesPzi" : boolean // End of list of possible types for union field satisfies pzi . } Fields name string The name (URI) of this migration job resource, in the form of: projects/{project}/locations/{location}/migrationJobs/{migrationJob}. createTime string ( Timestamp format) Output only.
- OracleSourceConfig JSON representation { // Union field max concurrent full dump connections can be only one of the // following: "maxConcurrentFullDumpConnections" : integer // End of list of possible types for union field // max concurrent full dump connections . // Union field max concurrent cdc connections can be only one of the // following: "maxConcurrentCdcConnections" : integer // End of list of possible types for union field // max concurrent cdc connections . // Union field skip full dump can be only one of the following: "skipFullDump" : boolean // End of list of possible types for union field skip full dump . // Union field cdc start position can be only one of the following: "cdcStartPosition" : string // End of list of possible types for union field cdc start position . // Union field cdc method can be only one of the following: "logMiner" : { object ( LogMiner ) } , "binaryLogParser" : { object ( BinaryLogParser ) } // End of list of possible types for union field cdc method . } Fields Union field max concurrent full dump connections . max concurrent full dump connections can be only one of the following: maxConcurrentFullDumpConnections integer Optional.
- Configuration for migration. config can be only one of the following: oracleToPostgresConfig object ( OracleToPostgresConfig ) Configuration for heterogeneous Oracle to Cloud SQL for PostgreSQL and Oracle to AlloyDB for PostgreSQL migrations. sqlserverToPostgresConfig object ( SqlServerToPostgresConfig ) Configuration for heterogeneous SQL Server to Cloud SQL for PostgreSQL migrations. postgresToSqlserverConfig object ( PostgresToSqlServerConfig ) Configuration for heterogeneous failback migrations from PostgreSQL to SQL Server .
- SqlServerSourceConfig JSON representation { // Union field max concurrent full dump connections can be only one of the // following: "maxConcurrentFullDumpConnections" : integer // End of list of possible types for union field // max concurrent full dump connections . // Union field max concurrent cdc connections can be only one of the // following: "maxConcurrentCdcConnections" : integer // End of list of possible types for union field // max concurrent cdc connections . // Union field skip full dump can be only one of the following: "skipFullDump" : boolean // End of list of possible types for union field skip full dump . // Union field cdc start position can be only one of the following: "cdcStartPosition" : string // End of list of possible types for union field cdc start position . } Fields Union field max concurrent full dump connections . max concurrent full dump connections can be only one of the following: maxConcurrentFullDumpConnections integer Optional.

### "Oracle to AlloyDB for PostgreSQL migration overview \_|\_ Database Migration\

- URL: [https://docs.cloud.google.com/database-migration/docs/oracle-to-alloydb/scenario-overview](https://docs.cloud.google.com/database-migration/docs/oracle-to-alloydb/scenario-overview)
- Source ID: `site-api-reference`
- Final score: 204
- Re-rank relevance: N/A

Evidence snippets:
- This page provides an overview of the key Database Migration Service features for heterogeneous Oracle to AlloyDB for PostgreSQL migrations: Supported source and destination lists all Oracle versions supported by Database Migration Service.
- The following table lists all supported versions for heterogeneous Oracle migrations: Source databases Destination databases Oracle 11g, Version 11.2.0.4 AlloyDB for PostgreSQL 12, 13, 14, 15, 16.
- Continuous data movement during a Database Migration Service heterogeneous migration from Oracle to AlloyDB for PostgreSQL. (click to enlarge) At a high level, your data moves through the migration phases as follows: One-time migrations You use Database Migration Service conversion workspace to convert your schemas, tables, and other objects from Oracle syntax to PostgreSQL syntax.
- Migration data flow For heterogeneous Oracle migrations to PostgreSQL, Database Migration Service supports continuous and one-time migration flows.

### "Oracle to Cloud SQL for PostgreSQL migration overview \_|\_ Database Migration\

- URL: [https://docs.cloud.google.com/database-migration/docs/oracle-to-postgresql/scenario-overview](https://docs.cloud.google.com/database-migration/docs/oracle-to-postgresql/scenario-overview)
- Source ID: `site-api-reference`
- Final score: 204
- Re-rank relevance: N/A

Evidence snippets:
- This page provides an overview of the key Database Migration Service features for heterogeneous Oracle to Cloud SQL for PostgreSQL migrations: Supported source and destination lists all Oracle versions supported by Database Migration Service.
- The following table lists all supported versions for heterogeneous Oracle migrations: Source databases Destination databases Oracle 11g, Version 11.2.0.4 Cloud SQL for PostgreSQL 12, 13, 14, 15, 16, 17.
- Continuous data movement during a Database Migration Service heterogeneous migration from Oracle to Cloud SQL for PostgreSQL. (click to enlarge) At a high level, your data moves through the migration phases as follows: One-time migrations You use Database Migration Service conversion workspace to convert your schemas, tables, and other objects from Oracle syntax to PostgreSQL syntax.
- Migration data flow For heterogeneous Oracle migrations to PostgreSQL, Database Migration Service supports continuous and one-time migration flows.

