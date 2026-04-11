---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T21:10:29.968Z"
product_name: "Cloud Database Migration Service"
product_slug: "cloud-database-migration-service"
feature_name: "Percona XtraBackup physical-file migration for MySQL"
feature_slug: "percona-xtrabackup-physical-file-migration-for-mysql"
latest_feature_date: "2024-04-05"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/database-migration/docs/release-notes"
  - "https://docs.cloud.google.com/database-migration/docs/mysql/migration-src-and-dest"
  - "https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/get_migration_job"
keywords:
  - "percona"
  - "xtrabackup"
  - "physical"
  - "file"
  - "migration"
  - "for"
  - "mysql"
  - "database"
---

# Percona XtraBackup physical-file migration for MySQL

Product: Cloud Database Migration Service
Coverage: LOW

## Step 02 Summary

Cloud Database Migration Service now supports using Percona XtraBackup physical backup files for homogeneous MySQL-to-Cloud SQL for MySQL migrations.

## Extended Definition

Cloud Database Migration Service now supports using Percona XtraBackup physical backup files for homogeneous MySQL-to-Cloud SQL for MySQL migrations.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/database-migration/docs/release-notes](https://docs.cloud.google.com/database-migration/docs/release-notes)
- [https://docs.cloud.google.com/database-migration/docs/mysql/migration-src-and-dest](https://docs.cloud.google.com/database-migration/docs/mysql/migration-src-and-dest)
- [https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/get_migration_job](https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/get_migration_job)

## Supporting Pages

### Database Migration Service release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/database-migration/docs/release-notes](https://docs.cloud.google.com/database-migration/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 202
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For more information, see: Conversion workspaces for Oracle to AlloyDB for PostgreSQL Conversion workspaces for Oracle to CloudSQL for PostgreSQL April 05, 2024 Feature Database Migration Service now supports physical backup files created by using the Percona XtraBackup utility for homogeneous MySQL to Cloud SQL for MySQL migrations.
- July 29, 2024 Feature Database Migration Service support for homogeneous MySQL to Cloud SQL for MySQL migrations with physical backup files created by using the Percona XtraBackup utility is now Generally Available (GA).
- For more information, see Migrate your databases by using a Percona XtraBackup physical file .
- For more information, see Migrate your databases by using a Percona XtraBackup physical file .

### "Supported source and destination databases \_|\_ Database Migration Service\

- URL: [https://docs.cloud.google.com/database-migration/docs/mysql/migration-src-and-dest](https://docs.cloud.google.com/database-migration/docs/mysql/migration-src-and-dest)
- Source ID: `site-api-reference`
- Final score: 180
- Re-rank relevance: N/A

Evidence snippets:
- For example, migrations that use physical backup files are not supported for MySQL 8.4 destinations.
- Supported source databases Amazon RDS 5.6, 5.7, 8.0, 8.4 Self-managed MySQL (on premises or on any cloud VM that you fully control) 5.5, 5.6, 5.7, 8.0, 8.4 Cloud SQL for MySQL 5.6, 5.7, 8.0, 8.4 Amazon Aurora 5.6, 5.7, 8.0, 8.4 Microsoft Azure Database for MySQL 5.7, 8.0, 8.4 For MySQL 8.0 sources, Database Migration Service also supports the following minor versions: 8.0.18, 8.0.26, 8.0.27, 8.0.28, 8.0.30, 8.0.31, 8.0.32, 8.0.33, 8.0.34, 8.0.35, 8.0.36, 8.0.37, 8.0.39, 8.0.40, 8.0.41, 8.0.42, 8.0.43.
- Supported destination databases Cloud SQL for MySQL 5.6 and 5.7 Cloud SQL for MySQL 8.0 including the following minor versions: 8.0.18, 8.0.26, 8.0.27, 8.0.28, 8.0.30, 8.0.31, 8.0.32, 8.0.33, 8.0.34, 8.0.35, 8.0.36, 8.0.37, 8.0.39, 8.0.40, 8.0.41, 8.0.42, 8.0.43.
- Home Documentation Databases Database Migration Service MySQL Guides Send feedback Supported source and destination databases Stay organized with collections Save and categorize content based on your preferences.

### "MCP Tools Reference: datamigration \_|\_ Database Migration Service \_|\_\

- URL: [https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/get_migration_job](https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/get_migration_job)
- Source ID: `site-api-reference`
- Final score: 178
- Re-rank relevance: N/A

Evidence snippets:
- This field supports all migration jobs types except for: Mysql to Mysql (use the cmek field in the cloudsql connection profile instead).
- MigrationJob JSON representation { "name" : string , "createTime" : string , "updateTime" : string , "labels" : { string : string , ... } , "displayName" : string , "state" : enum ( State ) , "phase" : enum ( Phase ) , "type" : enum ( Type ) , "dumpPath" : string , "dumpFlags" : { object ( DumpFlags ) } , "source" : string , "destination" : string , "duration" : string , "error" : { object ( Status ) } , "sourceDatabase" : { object ( DatabaseType ) } , "destinationDatabase" : { object ( DatabaseType ) } , "endTime" : string , "conversionWorkspace" : { object ( ConversionWorkspaceInfo ) } , "filter" : string , "cmekKeyName" : string , "performanceConfig" : { object ( PerformanceConfig ) } , "postgresHomogeneousConfig" : { object ( PostgresHomogeneousConfig ) } , "sqlserverHomogeneousMigrationJobConfig" : { object ( SqlServerHomogeneousMigrationJobConfig ) } , "dumpType" : enum ( DumpType ) , "objectsConfig" : { object ( MigrationJobObjectsConfig ) } , "purpose" : enum ( Purpose ) , "originalMigrationName" : string , // Union field connectivity can be only one of the following: "reverseSshConnectivity" : { object ( ReverseSshConnectivity ) } , "vpcPeeringConnectivity" : { object ( VpcPeeringConnectivity ) } , "staticIpConnectivity" : { object ( StaticIpConnectivity ) } // End of list of possible types for union field connectivity . // Union field config can be only one of the following: "oracleToPostgresConfig" : { object ( OracleToPostgresConfig ) } , "sqlserverToPostgresConfig" : { object ( SqlServerToPostgresConfig ) } , "postgresToSqlserverConfig" : { object ( PostgresToSqlServerConfig ) } // End of list of possible types for union field config . // Union field satisfies pzs can be only one of the following: "satisfiesPzs" : boolean // End of list of possible types for union field satisfies pzs . // Union field satisfies pzi can be only one of the following: "satisfiesPzi" : boolean // End of list of possible types for union field satisfies pzi . } Fields name string The name (URI) of this migration job resource, in the form of: projects/{project}/locations/{location}/migrationJobs/{migrationJob}. createTime string ( Timestamp format) Output only.
- The pattern must define one of the following capture group sets: Capture group set #1 yy/yyyy - year, 2 or 4 digits mm - month number, 1-12 dd - day of month, 1-31 hh - hour of day, 00-23 mi - minutes, 00-59 ss - seconds, 00-59 Example: For backup file TestDB 20230802 155400.trn, use pattern: (? . ) backup (? \d{4})(? \d{2})(? \d{2}) (? \d{2})(? \d{2})(? \d{2}).trn Capture group set #2 timestamp - unix timestamp Example: For backup file TestDB.1691448254.trn, use pattern: (? . ).(? \d ).trn or (? . ).(? \d ).trn databaseBackups[] object ( SqlServerDatabaseBackup ) Required.
- SqlServerHomogeneousMigrationJobConfig JSON representation { "backupFilePattern" : string , "databaseBackups" : [ { object ( SqlServerDatabaseBackup ) } ] , "useDiffBackup" : boolean , "promoteWhenReady" : boolean , "dagConfig" : { object ( SqlServerDagConfig ) } } Fields backupFilePattern string Required.

