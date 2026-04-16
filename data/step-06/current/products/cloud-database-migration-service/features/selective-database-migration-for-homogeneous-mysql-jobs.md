---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:22.228Z"
product_name: "Cloud Database Migration Service"
product_slug: "cloud-database-migration-service"
feature_name: "Selective database migration for homogeneous MySQL jobs"
feature_slug: "selective-database-migration-for-homogeneous-mysql-jobs"
latest_feature_date: "2026-03-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/list_migration_jobs"
  - "https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/get_migration_job"
  - "https://docs.cloud.google.com/database-migration/docs/homogeneous-migrations"
  - "https://docs.cloud.google.com/database-migration/docs/manage-jobs"
keywords:
  - "selective"
  - "database"
  - "migration"
  - "for"
  - "homogeneous"
  - "mysql"
  - "jobs"
  - "added"
---

# Selective database migration for homogeneous MySQL jobs

Product: Cloud Database Migration Service
Coverage: MEDIUM

## Step 02 Summary

Database Migration Service added the ability for homogeneous MySQL migrations to migrate individually selected source databases within a migration job.

## Extended Definition

Database Migration Service added the ability for homogeneous MySQL migrations to migrate individually selected source databases within a migration job.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/list_migration_jobs](https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/list_migration_jobs)
- [https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/get_migration_job](https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/get_migration_job)
- [https://docs.cloud.google.com/database-migration/docs/homogeneous-migrations](https://docs.cloud.google.com/database-migration/docs/homogeneous-migrations)
- [https://docs.cloud.google.com/database-migration/docs/manage-jobs](https://docs.cloud.google.com/database-migration/docs/manage-jobs)

## Supporting Pages

### "MCP Tools Reference: datamigration \_|\_ Database Migration Service \_|\_\

- URL: [https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/list_migration_jobs](https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/list_migration_jobs)
- Source ID: `site-api-reference`
- Final score: 252
- Re-rank relevance: N/A

Evidence snippets:
- MigrationJob JSON representation { "name" : string , "createTime" : string , "updateTime" : string , "labels" : { string : string , ... } , "displayName" : string , "state" : enum ( State ) , "phase" : enum ( Phase ) , "type" : enum ( Type ) , "dumpPath" : string , "dumpFlags" : { object ( DumpFlags ) } , "source" : string , "destination" : string , "duration" : string , "error" : { object ( Status ) } , "sourceDatabase" : { object ( DatabaseType ) } , "destinationDatabase" : { object ( DatabaseType ) } , "endTime" : string , "conversionWorkspace" : { object ( ConversionWorkspaceInfo ) } , "filter" : string , "cmekKeyName" : string , "performanceConfig" : { object ( PerformanceConfig ) } , "postgresHomogeneousConfig" : { object ( PostgresHomogeneousConfig ) } , "sqlserverHomogeneousMigrationJobConfig" : { object ( SqlServerHomogeneousMigrationJobConfig ) } , "dumpType" : enum ( DumpType ) , "objectsConfig" : { object ( MigrationJobObjectsConfig ) } , "purpose" : enum ( Purpose ) , "originalMigrationName" : string , // Union field connectivity can be only one of the following: "reverseSshConnectivity" : { object ( ReverseSshConnectivity ) } , "vpcPeeringConnectivity" : { object ( VpcPeeringConnectivity ) } , "staticIpConnectivity" : { object ( StaticIpConnectivity ) } // End of list of possible types for union field connectivity . // Union field config can be only one of the following: "oracleToPostgresConfig" : { object ( OracleToPostgresConfig ) } , "sqlserverToPostgresConfig" : { object ( SqlServerToPostgresConfig ) } , "postgresToSqlserverConfig" : { object ( PostgresToSqlServerConfig ) } // End of list of possible types for union field config . // Union field satisfies pzs can be only one of the following: "satisfiesPzs" : boolean // End of list of possible types for union field satisfies pzs . // Union field satisfies pzi can be only one of the following: "satisfiesPzi" : boolean // End of list of possible types for union field satisfies pzi . } Fields name string The name (URI) of this migration job resource, in the form of: projects/{project}/locations/{location}/migrationJobs/{migrationJob}. createTime string ( Timestamp format) Output only.
- This field supports all migration jobs types except for: Mysql to Mysql (use the cmek field in the cloudsql connection profile instead).
- Curl Request curl --location 'https://datamigration.googleapis.com/mcp' \ --header 'content-type: application/json' \ --header 'accept: application/json, text/event-stream' \ --data '{ "method": "tools/call", "params": { "name": "list migration jobs", "arguments": { // provide these details according to the tool' s MCP specification } } , "jsonrpc" : "2.0" , "id" : 1 } ' Input Schema Request message for 'ListMigrationJobs' request.
- For example: { create time after: 2025-10-02T10:15:33Z create time before: 2025-10-03T00:00:00Z display name: hr running: true page size: 80 } will return up to 80 migration jobs that were created on or after 2025-10-02T10:15:33 UTC and before 2025-10-03T00:00:00 UTC and have hr in their display name and are currently running.

### "MCP Tools Reference: datamigration \_|\_ Database Migration Service \_|\_\

- URL: [https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/get_migration_job](https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/get_migration_job)
- Source ID: `site-api-reference`
- Final score: 242
- Re-rank relevance: N/A

Evidence snippets:
- MigrationJob JSON representation { "name" : string , "createTime" : string , "updateTime" : string , "labels" : { string : string , ... } , "displayName" : string , "state" : enum ( State ) , "phase" : enum ( Phase ) , "type" : enum ( Type ) , "dumpPath" : string , "dumpFlags" : { object ( DumpFlags ) } , "source" : string , "destination" : string , "duration" : string , "error" : { object ( Status ) } , "sourceDatabase" : { object ( DatabaseType ) } , "destinationDatabase" : { object ( DatabaseType ) } , "endTime" : string , "conversionWorkspace" : { object ( ConversionWorkspaceInfo ) } , "filter" : string , "cmekKeyName" : string , "performanceConfig" : { object ( PerformanceConfig ) } , "postgresHomogeneousConfig" : { object ( PostgresHomogeneousConfig ) } , "sqlserverHomogeneousMigrationJobConfig" : { object ( SqlServerHomogeneousMigrationJobConfig ) } , "dumpType" : enum ( DumpType ) , "objectsConfig" : { object ( MigrationJobObjectsConfig ) } , "purpose" : enum ( Purpose ) , "originalMigrationName" : string , // Union field connectivity can be only one of the following: "reverseSshConnectivity" : { object ( ReverseSshConnectivity ) } , "vpcPeeringConnectivity" : { object ( VpcPeeringConnectivity ) } , "staticIpConnectivity" : { object ( StaticIpConnectivity ) } // End of list of possible types for union field connectivity . // Union field config can be only one of the following: "oracleToPostgresConfig" : { object ( OracleToPostgresConfig ) } , "sqlserverToPostgresConfig" : { object ( SqlServerToPostgresConfig ) } , "postgresToSqlserverConfig" : { object ( PostgresToSqlServerConfig ) } // End of list of possible types for union field config . // Union field satisfies pzs can be only one of the following: "satisfiesPzs" : boolean // End of list of possible types for union field satisfies pzs . // Union field satisfies pzi can be only one of the following: "satisfiesPzi" : boolean // End of list of possible types for union field satisfies pzi . } Fields name string The name (URI) of this migration job resource, in the form of: projects/{project}/locations/{location}/migrationJobs/{migrationJob}. createTime string ( Timestamp format) Output only.
- This field supports all migration jobs types except for: Mysql to Mysql (use the cmek field in the cloudsql connection profile instead).
- SqlServerHomogeneousMigrationJobConfig JSON representation { "backupFilePattern" : string , "databaseBackups" : [ { object ( SqlServerDatabaseBackup ) } ] , "useDiffBackup" : boolean , "promoteWhenReady" : boolean , "dagConfig" : { object ( SqlServerDagConfig ) } } Fields backupFilePattern string Required.
- This field should not be set on migration-jobs that are not associated with a conversion workspace. cmekKeyName string The CMEK (customer-managed encryption key) fully qualified key name used for the migration job.

### "Homogeneous migrations \_|\_ Database Migration Service \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/database-migration/docs/homogeneous-migrations](https://docs.cloud.google.com/database-migration/docs/homogeneous-migrations)
- Source ID: `site-api-reference`
- Final score: 240
- Re-rank relevance: N/A

Evidence snippets:
- Supported scenarios Database Migration Service supports the following homogeneous migrations: Migrate to Cloud SQL for MySQL Migrate to Cloud SQL for PostgreSQL Migrate to AlloyDB for PostgreSQL Migrate to Cloud SQL for SQL Server Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Database Migration Service offers different flows and feature support for each homogeneous migration path.
- In some migrations, such as PostgreSQL to AlloyDB and SQL Server to Cloud SQL Server, you can selectively migrate a subset of databases from your source instance to either an existing or new destination instance.
- Home Documentation Databases Database Migration Service Guides Send feedback Homogeneous migrations Stay organized with collections Save and categorize content based on your preferences.

### "Manage migration jobs \_|\_ Database Migration Service \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/database-migration/docs/manage-jobs](https://docs.cloud.google.com/database-migration/docs/manage-jobs)
- Source ID: `site-docs-root-2`
- Final score: 234
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Learn how to manage migration jobs for the following homogeneous migrations: From MySQL to Cloud SQL for MySQL From PostgreSQL to Cloud SQL for PostgreSQL From PostgreSQL to AlloyDB for PostgreSQL From SQL Server to Cloud SQL for SQL Server Learn how to manage migration jobs for the following heterogeneous migrations: From Oracle to Cloud SQL for PostgreSQL From Oracle to AlloyDB for PostgreSQL From SQL Server to Cloud SQL for PostgreSQL From SQL Server to AlloyDB for PostgreSQL Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Documentation Databases Database Migration Service Guides Send feedback Manage migration jobs Stay organized with collections Save and categorize content based on your preferences.
- For more information about migration jobs statuses and actions, see the following documentation relevant for your migration scenario.
- Migration jobs represent data movement that Database Migration Service manages.

