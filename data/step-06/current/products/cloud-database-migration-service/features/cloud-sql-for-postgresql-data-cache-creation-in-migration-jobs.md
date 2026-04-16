---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:22.255Z"
product_name: "Cloud Database Migration Service"
product_slug: "cloud-database-migration-service"
feature_name: "Cloud SQL for PostgreSQL data cache creation in migration jobs"
feature_slug: "cloud-sql-for-postgresql-data-cache-creation-in-migration-jobs"
latest_feature_date: "2023-11-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/database-migration/docs/oracle-to-postgresql/scenario-overview"
  - "https://docs.cloud.google.com/database-migration/docs/sqlserver-to-csql-pgsql/scenario-overview"
  - "https://docs.cloud.google.com/database-migration/docs/sqlserver-to-alloydb/scenario-overview"
  - "https://docs.cloud.google.com/database-migration/docs/custom-constraints"
keywords:
  - "sql"
  - "for"
  - "postgresql"
  - "cache"
  - "creation"
  - "in"
  - "migration"
  - "jobs"
---

# Cloud SQL for PostgreSQL data cache creation in migration jobs

Product: Cloud Database Migration Service
Coverage: MEDIUM

## Step 02 Summary

Cloud Database Migration Service now supports enabling data cache during migration job creation for Cloud SQL for PostgreSQL Enterprise Plus instances.

## Extended Definition

Cloud Database Migration Service now supports enabling data cache during migration job creation for Cloud SQL for PostgreSQL Enterprise Plus instances.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/database-migration/docs/oracle-to-postgresql/scenario-overview](https://docs.cloud.google.com/database-migration/docs/oracle-to-postgresql/scenario-overview)
- [https://docs.cloud.google.com/database-migration/docs/sqlserver-to-csql-pgsql/scenario-overview](https://docs.cloud.google.com/database-migration/docs/sqlserver-to-csql-pgsql/scenario-overview)
- [https://docs.cloud.google.com/database-migration/docs/sqlserver-to-alloydb/scenario-overview](https://docs.cloud.google.com/database-migration/docs/sqlserver-to-alloydb/scenario-overview)
- [https://docs.cloud.google.com/database-migration/docs/custom-constraints](https://docs.cloud.google.com/database-migration/docs/custom-constraints)

## Supporting Pages

### "Oracle to Cloud SQL for PostgreSQL migration overview \_|\_ Database Migration\

- URL: [https://docs.cloud.google.com/database-migration/docs/oracle-to-postgresql/scenario-overview](https://docs.cloud.google.com/database-migration/docs/oracle-to-postgresql/scenario-overview)
- Source ID: `site-api-reference`
- Final score: 280
- Re-rank relevance: N/A

Evidence snippets:
- Continuous data movement during a Database Migration Service heterogeneous migration from Oracle to Cloud SQL for PostgreSQL. (click to enlarge) At a high level, your data moves through the migration phases as follows: One-time migrations You use Database Migration Service conversion workspace to convert your schemas, tables, and other objects from Oracle syntax to PostgreSQL syntax.
- There are two ways in which you can complete full dump: Automatic: Database Migration Service connects to your source instance, reads the contents of the tables you selected for migration, and then loads the data to the AlloyDB for PostgreSQL destination instance.
- This page provides an overview of the key Database Migration Service features for heterogeneous Oracle to Cloud SQL for PostgreSQL migrations: Supported source and destination lists all Oracle versions supported by Database Migration Service.
- During this phase, Database Migration Service connects to your source instance, reads the contents of the tables you selected for migration, and then loads the data to the AlloyDB for PostgreSQL destination instance.

### "Database Migration Service for heterogeneous SQL Server to Cloud SQL for\

- URL: [https://docs.cloud.google.com/database-migration/docs/sqlserver-to-csql-pgsql/scenario-overview](https://docs.cloud.google.com/database-migration/docs/sqlserver-to-csql-pgsql/scenario-overview)
- Source ID: `site-api-reference`
- Final score: 274
- Re-rank relevance: N/A

Evidence snippets:
- Microsoft Azure SQL Managed Instance Microsoft Azure SQL Database tier S3 and above Cloud SQL for SQL Server Self-managed SQL Server versions: Enterprise 2008 and later, Standard 2016 SP1 and later, Developer 2008 and later (on premises or on any cloud VM that you fully control) Unsupported source databases Database Migration Service doesn't support migrating from the following SQL Server versions: SQL Server Standard edition versions from 2008 to 2014 SQL Server Express SQL Server Web Code and schema conversion Database Migration Service conversion workspaces provide an interactive editor experience where you can convert your schemas, tables, and other objects from SQL Server syntax to PostgreSQL syntax.
- Continuous data movement during Database Migration Service for SQL Server heterogeneous migrations. (click to enlarge) At a high level, your data moves through the migration phases as follows: One-time migrations You use Database Migration Service conversion workspace to convert your schemas, tables, and other objects from SQL Server syntax to PostgreSQL syntax.
- This page provides an overview of the key Database Migration Service features for heterogeneous SQL Server to Cloud SQL for PostgreSQL migrations: Supported source and destination lists all SQL Server versions supported by Database Migration Service.
- Failback migrations Failback migrations (sometimes referred to as reverse replication ), allow you to push CDC updates back to your original SQL Server source from the destination Cloud SQL for PostgreSQL cluster after you complete the migration.

### "Database Migration Service for heterogeneous SQL Server to AlloyDB for PostgreSQL\

- URL: [https://docs.cloud.google.com/database-migration/docs/sqlserver-to-alloydb/scenario-overview](https://docs.cloud.google.com/database-migration/docs/sqlserver-to-alloydb/scenario-overview)
- Source ID: `site-api-reference`
- Final score: 268
- Re-rank relevance: N/A

Evidence snippets:
- Supported source and destination databases The following table lists all supported SQL Server source and destination databases: Source databases Destination databases Amazon RDS for SQL Server AlloyDB for PostgreSQL 14, 15, 16 Microsoft Azure SQL Managed Instance Microsoft Azure SQL Database tier S3 and above Cloud SQL for SQL Server Self-managed SQL Server versions: Enterprise 2008 and later, Standard 2016 SP1 and later, Developer 2008 and later (on premises or on any cloud VM that you fully control) Unsupported source databases Database Migration Service doesn't support migrating from the following SQL Server versions: SQL Server Standard edition versions from 2008 to 2014 SQL Server Express SQL Server Web Code and schema conversion Database Migration Service conversion workspaces provide an interactive editor experience where you can convert your schemas, tables, and other objects from SQL Server syntax to PostgreSQL syntax.
- Continuous data movement during Database Migration Service for SQL Server heterogeneous migrations. (click to enlarge) At a high level, your data moves through the migration phases as follows: One-time migrations You use Database Migration Service conversion workspace to convert your schemas, tables, and other objects from SQL Server syntax to PostgreSQL syntax.
- This page provides an overview of the key Database Migration Service features for heterogeneous SQL Server to AlloyDB for PostgreSQL migrations: Supported sources and destinations lists all SQL Server versions supported by Database Migration Service.
- Failback migrations Failback migrations (sometimes referred to as reverse replication ), allow you to push CDC updates back to your original SQL Server source from the destination AlloyDB for PostgreSQL cluster after you complete the migration.

### "Create custom organization policy constraints \_|\_ Database Migration Service\

- URL: [https://docs.cloud.google.com/database-migration/docs/custom-constraints](https://docs.cloud.google.com/database-migration/docs/custom-constraints)
- Source ID: `site-docs-root-2`
- Final score: 250
- Re-rank relevance: N/A

Evidence snippets:
- Resource Field datamigration.googleapis.com/ConnectionProfile resource.alloydb.clusterId resource.alloydb.settings.databaseVersion resource.alloydb.settings.encryptionConfig.kmsKeyName resource.alloydb.settings.initialUser.user resource.alloydb.settings.primaryInstanceSettings.databaseFlags resource.alloydb.settings.primaryInstanceSettings.instanceNetworkConfig.authorizedExternalNetworks.cidrRange resource.alloydb.settings.primaryInstanceSettings.instanceNetworkConfig.enableOutboundPublicIp resource.alloydb.settings.primaryInstanceSettings.instanceNetworkConfig.enablePublicIp resource.alloydb.settings.primaryInstanceSettings.machineConfig.cpuCount resource.alloydb.settings.primaryInstanceSettings.machineConfig.machineType resource.alloydb.settings.vpcNetwork resource.cloudsql.settings.activationPolicy resource.cloudsql.settings.autoStorageIncrease resource.cloudsql.settings.availabilityType resource.cloudsql.settings.cmekKeyName resource.cloudsql.settings.collation resource.cloudsql.settings.databaseFlags resource.cloudsql.settings.databaseVersion resource.cloudsql.settings.databaseVersionName resource.cloudsql.settings.dataCacheConfig.dataCacheEnabled resource.cloudsql.settings.dataDiskProvisionedIops resource.cloudsql.settings.dataDiskProvisionedThroughput resource.cloudsql.settings.dataDiskSizeGb resource.cloudsql.settings.dataDiskType resource.cloudsql.settings.edition resource.cloudsql.settings.ipConfig.allocatedIpRange resource.cloudsql.settings.ipConfig.authorizedNetworks.expireTime resource.cloudsql.settings.ipConfig.authorizedNetworks.label resource.cloudsql.settings.ipConfig.authorizedNetworks.ttl resource.cloudsql.settings.ipConfig.authorizedNetworks.value resource.cloudsql.settings.ipConfig.enableIpv4 resource.cloudsql.settings.ipConfig.privateNetwork resource.cloudsql.settings.ipConfig.requireSsl resource.cloudsql.settings.secondaryZone resource.cloudsql.settings.sourceId resource.cloudsql.settings.storageAutoResizeLimit resource.cloudsql.settings.tier resource.cloudsql.settings.zone resource.displayName resource.mysql.cloudSqlId resource.mysql.host resource.mysql.port resource.mysql.ssl.sslFlags resource.mysql.ssl.type resource.mysql.username resource.name resource.oracle.forwardSshConnectivity.hostname resource.oracle.forwardSshConnectivity.port resource.oracle.forwardSshConnectivity.username resource.oracle.host resource.oracle.oracleAsmConfig.asmService resource.oracle.oracleAsmConfig.hostname resource.oracle.oracleAsmConfig.port resource.oracle.oracleAsmConfig.ssl.sslFlags resource.oracle.oracleAsmConfig.ssl.type resource.oracle.oracleAsmConfig.username resource.oracle.port resource.oracle.privateConnectivity.privateConnection resource.oracle.ssl.sslFlags resource.oracle.ssl.type resource.oracle.username resource.postgresql.alloydbClusterId resource.postgresql.cloudSqlId resource.postgresql.database resource.postgresql.host resource.postgresql.port resource.postgresql.privateServiceConnectConnectivity.serviceAttachment resource.postgresql.ssl.sslFlags resource.postgresql.ssl.type resource.postgresql.username resource.provider resource.role resource.sqlserver.backups.gcsBucket resource.sqlserver.backups.gcsPrefix resource.sqlserver.cloudSqlId resource.sqlserver.cloudSqlProjectId resource.sqlserver.database resource.sqlserver.dbmPort resource.sqlserver.forwardSshConnectivity.hostname resource.sqlserver.forwardSshConnectivity.port resource.sqlserver.forwardSshConnectivity.username resource.sqlserver.host resource.sqlserver.port resource.sqlserver.privateConnectivity.privateConnection resource.sqlserver.privateServiceConnectConnectivity.serviceAttachment resource.sqlserver.ssl.sslFlags resource.sqlserver.ssl.type resource.sqlserver.username resource.state datamigration.googleapis.com/ConversionWorkspace resource.destination.engine resource.destination.version resource.destinationProvider resource.displayName resource.globalSettings resource.name resource.source.engine resource.source.version resource.sourceProvider datamigration.googleapis.com/MigrationJob resource.cmekKeyName resource.conversionWorkspace.commitId resource.conversionWorkspace.name resource.destination resource.destinationDatabase.engine resource.destinationDatabase.provider resource.displayName resource.dumpFlags.dumpFlags.name resource.dumpFlags.dumpFlags.value resource.dumpPath resource.dumpType resource.filter resource.name resource.objectsConfig.sourceObjectsConfig.objectConfigs.objectIdentifier.database resource.objectsConfig.sourceObjectsConfig.objectConfigs.objectIdentifier.schema resource.objectsConfig.sourceObjectsConfig.objectConfigs.objectIdentifier.table resource.objectsConfig.sourceObjectsConfig.objectConfigs.objectIdentifier.type resource.objectsConfig.sourceObjectsConfig.objectsSelectionType resource.oracleToPostgresConfig.oracleSourceConfig.binaryLogParser.logFileDirectories.archivedLogDirectory resource.oracleToPostgresConfig.oracleSourceConfig.binaryLogParser.logFileDirectories.onlineLogDirectory resource.oracleToPostgresConfig.oracleSourceConfig.cdcStartPosition resource.oracleToPostgresConfig.oracleSourceConfig.maxConcurrentCdcConnections resource.oracleToPostgresConfig.oracleSourceConfig.maxConcurrentFullDumpConnections resource.oracleToPostgresConfig.oracleSourceConfig.skipFullDump resource.oracleToPostgresConfig.postgresDestinationConfig.maxConcurrentConnections resource.oracleToPostgresConfig.postgresDestinationConfig.transactionTimeout resource.performanceConfig.dumpParallelLevel resource.reverseSshConnectivity.vm resource.reverseSshConnectivity.vmIp resource.reverseSshConnectivity.vmPort resource.reverseSshConnectivity.vpc resource.source resource.sourceDatabase.engine resource.sourceDatabase.provider resource.sqlserverHomogeneousMigrationJobConfig.backupFilePattern resource.sqlserverHomogeneousMigrationJobConfig.dagConfig.linkedServer resource.sqlserverHomogeneousMigrationJobConfig.dagConfig.sourceAg resource.sqlserverHomogeneousMigrationJobConfig.databaseBackups.database resource.sqlserverHomogeneousMigrationJobConfig.databaseBackups.encryptionOptions.certPath resource.sqlserverHomogeneousMigrationJobConfig.promoteWhenReady resource.sqlserverHomogeneousMigrationJobConfig.useDiffBackup resource.sqlserverToPostgresConfig.postgresDestinationConfig.maxConcurrentConnections resource.sqlserverToPostgresConfig.postgresDestinationConfig.transactionTimeout resource.sqlserverToPostgresConfig.sqlserverSourceConfig.cdcStartPosition resource.sqlserverToPostgresConfig.sqlserverSourceConfig.maxConcurrentCdcConnections resource.sqlserverToPostgresConfig.sqlserverSourceConfig.maxConcurrentFullDumpConnections resource.sqlserverToPostgresConfig.sqlserverSourceConfig.skipFullDump resource.state resource.type resource.vpcPeeringConnectivity.vpc datamigration.googleapis.com/PrivateConnection resource.displayName resource.name resource.pscInterfaceConfig.networkAttachment resource.vpcPeeringConfig.subnet resource.vpcPeeringConfig.vpcName What's next Learn more about Organization Policy Service .
- Description Constraint syntax Restrict migration job type Ensures all new migration jobs are continuous. name : organizations/ ORGANIZATION ID /customConstraints/custom.restrictDmsMigrationJobType resourceTypes : - datamigration.googleapis.com/MigrationJob methodTypes : - CREATE - UPDATE condition : "resource.type != 'CONTINUOUS'" actionType : DENY displayName : Restrict migration job type description : All new migration jobs must be of type CONTINUOUS Restrict connection profile engines Ensures only PostgreSQL connection profiles can be created.
- Note: The exact condition depends on the structure of the generated CEL proto for ConnectionProfile. name : organizations/ ORGANIZATION ID /customConstraints/custom.restrictDmsToPostgres resourceTypes : - datamigration.googleapis.com/ConnectionProfile methodTypes : - CREATE Example condition, validate against actual CEL proto fields. condition : "!has(resource.postgresql)" actionType : DENY displayName : Restrict connection profiles to PostgreSQL description : Only PostgreSQL connection profiles can be created.
- Before you begin, make note of the following: Your organization ID A project ID Create the constraint Save the following file as constraint-dms-migrationjob-type.yaml : name : organizations/ ORGANIZATION ID /customConstraints/custom.restrictDmsMigrationJobType resourceTypes : - datamigration.googleapis.com/MigrationJob methodTypes : - CREATE - UPDATE condition : "resource.type != 'CONTINUOUS'" actionType : DENY displayName : Restrict migration job type description : All new migration jobs must be of type CONTINUOUS This defines a constraint where every new or updated migration job must have a type equal to CONTINUOUS .

