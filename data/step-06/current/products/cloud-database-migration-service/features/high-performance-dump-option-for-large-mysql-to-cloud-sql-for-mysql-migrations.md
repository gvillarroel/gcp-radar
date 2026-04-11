---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T21:10:29.981Z"
product_name: "Cloud Database Migration Service"
product_slug: "cloud-database-migration-service"
feature_name: "High-performance dump option for large MySQL-to-Cloud SQL for MySQL migrations"
feature_slug: "high-performance-dump-option-for-large-mysql-to-cloud-sql-for-mysql-migrations"
latest_feature_date: "2023-07-27"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/get_migration_job"
  - "https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/list_migration_jobs"
  - "https://docs.cloud.google.com/database-migration/docs/release-notes"
keywords:
  - "high"
  - "performance"
  - "dump"
  - "option"
  - "for"
  - "large"
  - "mysql"
  - "to"
---

# High-performance dump option for large MySQL-to-Cloud SQL for MySQL migrations

Product: Cloud Database Migration Service
Coverage: LOW

## Step 02 Summary

Cloud Database Migration Service added faster migration support for large MySQL databases to Cloud SQL for MySQL via a high-performance dump option.

## Extended Definition

Cloud Database Migration Service added faster migration support for large MySQL databases to Cloud SQL for MySQL via a high-performance dump option.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/get_migration_job](https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/get_migration_job)
- [https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/list_migration_jobs](https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/list_migration_jobs)
- [https://docs.cloud.google.com/database-migration/docs/release-notes](https://docs.cloud.google.com/database-migration/docs/release-notes)

## Supporting Pages

### "MCP Tools Reference: datamigration \_|\_ Database Migration Service \_|\_\

- URL: [https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/get_migration_job](https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/get_migration_job)
- Source ID: `site-api-reference`
- Final score: 150
- Re-rank relevance: N/A

Evidence snippets:
- MigrationJob JSON representation { "name" : string , "createTime" : string , "updateTime" : string , "labels" : { string : string , ... } , "displayName" : string , "state" : enum ( State ) , "phase" : enum ( Phase ) , "type" : enum ( Type ) , "dumpPath" : string , "dumpFlags" : { object ( DumpFlags ) } , "source" : string , "destination" : string , "duration" : string , "error" : { object ( Status ) } , "sourceDatabase" : { object ( DatabaseType ) } , "destinationDatabase" : { object ( DatabaseType ) } , "endTime" : string , "conversionWorkspace" : { object ( ConversionWorkspaceInfo ) } , "filter" : string , "cmekKeyName" : string , "performanceConfig" : { object ( PerformanceConfig ) } , "postgresHomogeneousConfig" : { object ( PostgresHomogeneousConfig ) } , "sqlserverHomogeneousMigrationJobConfig" : { object ( SqlServerHomogeneousMigrationJobConfig ) } , "dumpType" : enum ( DumpType ) , "objectsConfig" : { object ( MigrationJobObjectsConfig ) } , "purpose" : enum ( Purpose ) , "originalMigrationName" : string , // Union field connectivity can be only one of the following: "reverseSshConnectivity" : { object ( ReverseSshConnectivity ) } , "vpcPeeringConnectivity" : { object ( VpcPeeringConnectivity ) } , "staticIpConnectivity" : { object ( StaticIpConnectivity ) } // End of list of possible types for union field connectivity . // Union field config can be only one of the following: "oracleToPostgresConfig" : { object ( OracleToPostgresConfig ) } , "sqlserverToPostgresConfig" : { object ( SqlServerToPostgresConfig ) } , "postgresToSqlserverConfig" : { object ( PostgresToSqlServerConfig ) } // End of list of possible types for union field config . // Union field satisfies pzs can be only one of the following: "satisfiesPzs" : boolean // End of list of possible types for union field satisfies pzs . // Union field satisfies pzi can be only one of the following: "satisfiesPzi" : boolean // End of list of possible types for union field satisfies pzi . } Fields name string The name (URI) of this migration job resource, in the form of: projects/{project}/locations/{location}/migrationJobs/{migrationJob}. createTime string ( Timestamp format) Output only.
- Each Cloud CMEK key has the following format: projects/[PROJECT]/locations/[REGION]/keyRings/[RING]/cryptoKeys/[KEY NAME] performanceConfig object ( PerformanceConfig ) Optional.
- Supported for MySQL to CloudSQL for MySQL migrations only. objectsConfig object ( MigrationJobObjectsConfig ) Optional.
- OracleSourceConfig JSON representation { // Union field max concurrent full dump connections can be only one of the // following: "maxConcurrentFullDumpConnections" : integer // End of list of possible types for union field // max concurrent full dump connections . // Union field max concurrent cdc connections can be only one of the // following: "maxConcurrentCdcConnections" : integer // End of list of possible types for union field // max concurrent cdc connections . // Union field skip full dump can be only one of the following: "skipFullDump" : boolean // End of list of possible types for union field skip full dump . // Union field cdc start position can be only one of the following: "cdcStartPosition" : string // End of list of possible types for union field cdc start position . // Union field cdc method can be only one of the following: "logMiner" : { object ( LogMiner ) } , "binaryLogParser" : { object ( BinaryLogParser ) } // End of list of possible types for union field cdc method . } Fields Union field max concurrent full dump connections . max concurrent full dump connections can be only one of the following: maxConcurrentFullDumpConnections integer Optional.

### "MCP Tools Reference: datamigration \_|\_ Database Migration Service \_|\_\

- URL: [https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/list_migration_jobs](https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/list_migration_jobs)
- Source ID: `site-api-reference`
- Final score: 150
- Re-rank relevance: N/A

Evidence snippets:
- MigrationJob JSON representation { "name" : string , "createTime" : string , "updateTime" : string , "labels" : { string : string , ... } , "displayName" : string , "state" : enum ( State ) , "phase" : enum ( Phase ) , "type" : enum ( Type ) , "dumpPath" : string , "dumpFlags" : { object ( DumpFlags ) } , "source" : string , "destination" : string , "duration" : string , "error" : { object ( Status ) } , "sourceDatabase" : { object ( DatabaseType ) } , "destinationDatabase" : { object ( DatabaseType ) } , "endTime" : string , "conversionWorkspace" : { object ( ConversionWorkspaceInfo ) } , "filter" : string , "cmekKeyName" : string , "performanceConfig" : { object ( PerformanceConfig ) } , "postgresHomogeneousConfig" : { object ( PostgresHomogeneousConfig ) } , "sqlserverHomogeneousMigrationJobConfig" : { object ( SqlServerHomogeneousMigrationJobConfig ) } , "dumpType" : enum ( DumpType ) , "objectsConfig" : { object ( MigrationJobObjectsConfig ) } , "purpose" : enum ( Purpose ) , "originalMigrationName" : string , // Union field connectivity can be only one of the following: "reverseSshConnectivity" : { object ( ReverseSshConnectivity ) } , "vpcPeeringConnectivity" : { object ( VpcPeeringConnectivity ) } , "staticIpConnectivity" : { object ( StaticIpConnectivity ) } // End of list of possible types for union field connectivity . // Union field config can be only one of the following: "oracleToPostgresConfig" : { object ( OracleToPostgresConfig ) } , "sqlserverToPostgresConfig" : { object ( SqlServerToPostgresConfig ) } , "postgresToSqlserverConfig" : { object ( PostgresToSqlServerConfig ) } // End of list of possible types for union field config . // Union field satisfies pzs can be only one of the following: "satisfiesPzs" : boolean // End of list of possible types for union field satisfies pzs . // Union field satisfies pzi can be only one of the following: "satisfiesPzi" : boolean // End of list of possible types for union field satisfies pzi . } Fields name string The name (URI) of this migration job resource, in the form of: projects/{project}/locations/{location}/migrationJobs/{migrationJob}. createTime string ( Timestamp format) Output only.
- Each Cloud CMEK key has the following format: projects/[PROJECT]/locations/[REGION]/keyRings/[RING]/cryptoKeys/[KEY NAME] performanceConfig object ( PerformanceConfig ) Optional.
- Supported for MySQL to CloudSQL for MySQL migrations only. objectsConfig object ( MigrationJobObjectsConfig ) Optional.
- OracleSourceConfig JSON representation { // Union field max concurrent full dump connections can be only one of the // following: "maxConcurrentFullDumpConnections" : integer // End of list of possible types for union field // max concurrent full dump connections . // Union field max concurrent cdc connections can be only one of the // following: "maxConcurrentCdcConnections" : integer // End of list of possible types for union field // max concurrent cdc connections . // Union field skip full dump can be only one of the following: "skipFullDump" : boolean // End of list of possible types for union field skip full dump . // Union field cdc start position can be only one of the following: "cdcStartPosition" : string // End of list of possible types for union field cdc start position . // Union field cdc method can be only one of the following: "logMiner" : { object ( LogMiner ) } , "binaryLogParser" : { object ( BinaryLogParser ) } // End of list of possible types for union field cdc method . } Fields Union field max concurrent full dump connections . max concurrent full dump connections can be only one of the following: maxConcurrentFullDumpConnections integer Optional.

### Database Migration Service release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/database-migration/docs/release-notes](https://docs.cloud.google.com/database-migration/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 146
- Re-rank relevance: N/A

Evidence snippets:
- For information about creating migration jobs using the high-performance dump option, see Create a migration job .
- For information about creating migration jobs using the new full dump configuration and maximum concurrent connection settings, see: Create a migration job in the Oracle to Cloud SQL for PostgreSQL documentation Create a migration job in the Oracle to AlloyDB for PostgreSQL documentation October 10, 2024 Feature Database Migration Service for homogeneous MySQL to Cloud SQL for MySQL migrations now supports MySQL version 8.4.
- For information about creating migration jobs using the high-performance parallelism settings, see Create a migration job to a new destination instance and Create a migration job to an existing destination instance .
- For information about creating migration jobs using the high-performance parallelism settings, see Create a migration job to a new destination instance and Create a migration job to an existing destination instance .

