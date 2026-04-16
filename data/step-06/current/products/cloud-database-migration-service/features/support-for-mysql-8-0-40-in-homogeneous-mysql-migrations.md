---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:22.240Z"
product_name: "Cloud Database Migration Service"
product_slug: "cloud-database-migration-service"
feature_name: "Support for MySQL 8.0.40 in homogeneous MySQL migrations"
feature_slug: "support-for-mysql-8-0-40-in-homogeneous-mysql-migrations"
latest_feature_date: "2024-12-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/database-migration/docs/homogeneous-migrations"
  - "https://docs.cloud.google.com/database-migration/docs/supported-databases"
  - "https://docs.cloud.google.com/database-migration/docs/mysql/migration-src-and-dest"
  - "https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/get_migration_job"
keywords:
  - "for"
  - "mysql"
  - "40"
  - "in"
  - "homogeneous"
  - "migrations"
  - "database"
  - "migration"
---

# Support for MySQL 8.0.40 in homogeneous MySQL migrations

Product: Cloud Database Migration Service
Coverage: MEDIUM

## Step 02 Summary

Database Migration Service now supports MySQL minor version 8.0.40 for homogeneous MySQL migrations.

## Extended Definition

Database Migration Service now supports MySQL minor version 8.0.40 for homogeneous MySQL migrations.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/database-migration/docs/homogeneous-migrations](https://docs.cloud.google.com/database-migration/docs/homogeneous-migrations)
- [https://docs.cloud.google.com/database-migration/docs/supported-databases](https://docs.cloud.google.com/database-migration/docs/supported-databases)
- [https://docs.cloud.google.com/database-migration/docs/mysql/migration-src-and-dest](https://docs.cloud.google.com/database-migration/docs/mysql/migration-src-and-dest)
- [https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/get_migration_job](https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/get_migration_job)

## Supporting Pages

### "Homogeneous migrations \_|\_ Database Migration Service \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/database-migration/docs/homogeneous-migrations](https://docs.cloud.google.com/database-migration/docs/homogeneous-migrations)
- Source ID: `site-api-reference`
- Final score: 307
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Supported scenarios Database Migration Service supports the following homogeneous migrations: Migrate to Cloud SQL for MySQL Migrate to Cloud SQL for PostgreSQL Migrate to AlloyDB for PostgreSQL Migrate to Cloud SQL for SQL Server Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Homogeneous migrations take place when you migrate data from a source database to a destination database that use the same database technology (have the same database engine).
- In some migrations, such as PostgreSQL to AlloyDB and SQL Server to Cloud SQL Server, you can selectively migrate a subset of databases from your source instance to either an existing or new destination instance.
- Home Documentation Databases Database Migration Service Guides Send feedback Homogeneous migrations Stay organized with collections Save and categorize content based on your preferences.

### "Supported source and destination databases \_|\_ Database Migration Service\

- URL: [https://docs.cloud.google.com/database-migration/docs/supported-databases](https://docs.cloud.google.com/database-migration/docs/supported-databases)
- Source ID: `site-docs-root`
- Final score: 298
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Homogeneous migrations supported source and destination databases Select your homogeneous migration scenario to view which source and destination databases the migration supports: MySQL to Cloud SQL for MySQL Supported source databases Amazon RDS 5.6, 5.7, 8.0, 8.4 Self-managed MySQL (on premises or on any cloud VM that you fully control) 5.5, 5.6, 5.7, 8.0, 8.4 Cloud SQL for MySQL 5.6, 5.7, 8.0, 8.4 Amazon Aurora 5.6, 5.7, 8.0, 8.4 Microsoft Azure Database for MySQL 5.7, 8.0, 8.4 For MySQL 8.0 sources, Database Migration Service also supports the following minor versions: 8.0.18, 8.0.26, 8.0.27, 8.0.28, 8.0.30, 8.0.31, 8.0.32, 8.0.33, 8.0.34, 8.0.35, 8.0.36, 8.0.37, 8.0.39, 8.0.40, 8.0.41, 8.0.42, 8.0.43.
- Database Migration Service supports both homogeneous migrations, such as MySQL to Cloud SQL for MySQL, and heterogeneous migrations, such as Oracle to Cloud SQL for PostgreSQL.
- Heterogeneous migrations supported source and destination databases Select your heterogeneous migration scenario to view which source and destination databases the migration supports: Oracle to Cloud SQL for PostgreSQL Supported source and destination databases Database Migration Service supports the following Oracle databases as migration sources: Amazon RDS for Oracle Self-hosted deployments, including: Oracle Single Instance Database Deployment Oracle Exadata Oracle Active Data Guard Oracle Real Application Clusters (RAC) Full support also depends on your source Oracle version.
- Supported destination databases Cloud SQL for MySQL 5.6 and 5.7 Cloud SQL for MySQL 8.0 including the following minor versions: 8.0.18, 8.0.26, 8.0.27, 8.0.28, 8.0.30, 8.0.31, 8.0.32, 8.0.33, 8.0.34, 8.0.35, 8.0.36, 8.0.37, 8.0.39, 8.0.40, 8.0.41, 8.0.42, 8.0.43.

### "Supported source and destination databases \_|\_ Database Migration Service\

- URL: [https://docs.cloud.google.com/database-migration/docs/mysql/migration-src-and-dest](https://docs.cloud.google.com/database-migration/docs/mysql/migration-src-and-dest)
- Source ID: `site-api-reference`
- Final score: 279
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Supported source databases Amazon RDS 5.6, 5.7, 8.0, 8.4 Self-managed MySQL (on premises or on any cloud VM that you fully control) 5.5, 5.6, 5.7, 8.0, 8.4 Cloud SQL for MySQL 5.6, 5.7, 8.0, 8.4 Amazon Aurora 5.6, 5.7, 8.0, 8.4 Microsoft Azure Database for MySQL 5.7, 8.0, 8.4 For MySQL 8.0 sources, Database Migration Service also supports the following minor versions: 8.0.18, 8.0.26, 8.0.27, 8.0.28, 8.0.30, 8.0.31, 8.0.32, 8.0.33, 8.0.34, 8.0.35, 8.0.36, 8.0.37, 8.0.39, 8.0.40, 8.0.41, 8.0.42, 8.0.43.
- Supported destination databases Cloud SQL for MySQL 5.6 and 5.7 Cloud SQL for MySQL 8.0 including the following minor versions: 8.0.18, 8.0.26, 8.0.27, 8.0.28, 8.0.30, 8.0.31, 8.0.32, 8.0.33, 8.0.34, 8.0.35, 8.0.36, 8.0.37, 8.0.39, 8.0.40, 8.0.41, 8.0.42, 8.0.43.
- MySQL PostgreSQL PostgreSQL to AlloyDB Overview Database Migration Service supports one-time and continuous migrations from source databases to Cloud SQL destination databases.
- For example, migrations that use physical backup files are not supported for MySQL 8.4 destinations.

### "MCP Tools Reference: datamigration \_|\_ Database Migration Service \_|\_\

- URL: [https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/get_migration_job](https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/get_migration_job)
- Source ID: `site-api-reference`
- Final score: 276
- Re-rank relevance: N/A

Evidence snippets:
- MigrationJob JSON representation { "name" : string , "createTime" : string , "updateTime" : string , "labels" : { string : string , ... } , "displayName" : string , "state" : enum ( State ) , "phase" : enum ( Phase ) , "type" : enum ( Type ) , "dumpPath" : string , "dumpFlags" : { object ( DumpFlags ) } , "source" : string , "destination" : string , "duration" : string , "error" : { object ( Status ) } , "sourceDatabase" : { object ( DatabaseType ) } , "destinationDatabase" : { object ( DatabaseType ) } , "endTime" : string , "conversionWorkspace" : { object ( ConversionWorkspaceInfo ) } , "filter" : string , "cmekKeyName" : string , "performanceConfig" : { object ( PerformanceConfig ) } , "postgresHomogeneousConfig" : { object ( PostgresHomogeneousConfig ) } , "sqlserverHomogeneousMigrationJobConfig" : { object ( SqlServerHomogeneousMigrationJobConfig ) } , "dumpType" : enum ( DumpType ) , "objectsConfig" : { object ( MigrationJobObjectsConfig ) } , "purpose" : enum ( Purpose ) , "originalMigrationName" : string , // Union field connectivity can be only one of the following: "reverseSshConnectivity" : { object ( ReverseSshConnectivity ) } , "vpcPeeringConnectivity" : { object ( VpcPeeringConnectivity ) } , "staticIpConnectivity" : { object ( StaticIpConnectivity ) } // End of list of possible types for union field connectivity . // Union field config can be only one of the following: "oracleToPostgresConfig" : { object ( OracleToPostgresConfig ) } , "sqlserverToPostgresConfig" : { object ( SqlServerToPostgresConfig ) } , "postgresToSqlserverConfig" : { object ( PostgresToSqlServerConfig ) } // End of list of possible types for union field config . // Union field satisfies pzs can be only one of the following: "satisfiesPzs" : boolean // End of list of possible types for union field satisfies pzs . // Union field satisfies pzi can be only one of the following: "satisfiesPzi" : boolean // End of list of possible types for union field satisfies pzi . } Fields name string The name (URI) of this migration job resource, in the form of: projects/{project}/locations/{location}/migrationJobs/{migrationJob}. createTime string ( Timestamp format) Output only.
- The pattern must define one of the following capture group sets: Capture group set #1 yy/yyyy - year, 2 or 4 digits mm - month number, 1-12 dd - day of month, 1-31 hh - hour of day, 00-23 mi - minutes, 00-59 ss - seconds, 00-59 Example: For backup file TestDB 20230802 155400.trn, use pattern: (? . ) backup (? \d{4})(? \d{2})(? \d{2}) (? \d{2})(? \d{2})(? \d{2}).trn Capture group set #2 timestamp - unix timestamp Example: For backup file TestDB.1691448254.trn, use pattern: (? . ).(? \d ).trn or (? . ).(? \d ).trn databaseBackups[] object ( SqlServerDatabaseBackup ) Required.
- Configuration for migration. config can be only one of the following: oracleToPostgresConfig object ( OracleToPostgresConfig ) Configuration for heterogeneous Oracle to Cloud SQL for PostgreSQL and Oracle to AlloyDB for PostgreSQL migrations. sqlserverToPostgresConfig object ( SqlServerToPostgresConfig ) Configuration for heterogeneous SQL Server to Cloud SQL for PostgreSQL migrations. postgresToSqlserverConfig object ( PostgresToSqlServerConfig ) Configuration for heterogeneous failback migrations from PostgreSQL to SQL Server .
- SqlServerHomogeneousMigrationJobConfig JSON representation { "backupFilePattern" : string , "databaseBackups" : [ { object ( SqlServerDatabaseBackup ) } ] , "useDiffBackup" : boolean , "promoteWhenReady" : boolean , "dagConfig" : { object ( SqlServerDagConfig ) } } Fields backupFilePattern string Required.

