---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:22.253Z"
product_name: "Cloud Database Migration Service"
product_slug: "cloud-database-migration-service"
feature_name: "Support for up to 30 MB row size in Oracle to PostgreSQL migrations"
feature_slug: "support-for-up-to-30-mb-row-size-in-oracle-to-postgresql-migrations"
latest_feature_date: "2024-01-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/database-migration/docs/custom-constraints"
  - "https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/list_migration_jobs"
  - "https://docs.cloud.google.com/database-migration/docs/reference/rest/Shared.Types/Binding"
  - "https://docs.cloud.google.com/database-migration/docs/sqlserver-to-alloydb/scenario-overview"
keywords:
  - "for"
  - "up"
  - "to"
  - "30"
  - "mb"
  - "row"
  - "size"
  - "in"
---

# Support for up to 30 MB row size in Oracle to PostgreSQL migrations

Product: Cloud Database Migration Service
Coverage: MEDIUM

## Step 02 Summary

Cloud Database Migration Service now supports row sizes up to 30 MB for Oracle-to-Cloud SQL for PostgreSQL and Oracle-to-AlloyDB for PostgreSQL migrations.

## Extended Definition

Cloud Database Migration Service now supports row sizes up to 30 MB for Oracle-to-Cloud SQL for PostgreSQL and Oracle-to-AlloyDB for PostgreSQL migrations.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/database-migration/docs/custom-constraints](https://docs.cloud.google.com/database-migration/docs/custom-constraints)
- [https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/list_migration_jobs](https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/list_migration_jobs)
- [https://docs.cloud.google.com/database-migration/docs/reference/rest/Shared.Types/Binding](https://docs.cloud.google.com/database-migration/docs/reference/rest/Shared.Types/Binding)
- [https://docs.cloud.google.com/database-migration/docs/sqlserver-to-alloydb/scenario-overview](https://docs.cloud.google.com/database-migration/docs/sqlserver-to-alloydb/scenario-overview)

## Supporting Pages

### "Create custom organization policy constraints \_|\_ Database Migration Service\

- URL: [https://docs.cloud.google.com/database-migration/docs/custom-constraints](https://docs.cloud.google.com/database-migration/docs/custom-constraints)
- Source ID: `site-docs-root-2`
- Final score: 222
- Re-rank relevance: N/A

Evidence snippets:
- Resource Field datamigration.googleapis.com/ConnectionProfile resource.alloydb.clusterId resource.alloydb.settings.databaseVersion resource.alloydb.settings.encryptionConfig.kmsKeyName resource.alloydb.settings.initialUser.user resource.alloydb.settings.primaryInstanceSettings.databaseFlags resource.alloydb.settings.primaryInstanceSettings.instanceNetworkConfig.authorizedExternalNetworks.cidrRange resource.alloydb.settings.primaryInstanceSettings.instanceNetworkConfig.enableOutboundPublicIp resource.alloydb.settings.primaryInstanceSettings.instanceNetworkConfig.enablePublicIp resource.alloydb.settings.primaryInstanceSettings.machineConfig.cpuCount resource.alloydb.settings.primaryInstanceSettings.machineConfig.machineType resource.alloydb.settings.vpcNetwork resource.cloudsql.settings.activationPolicy resource.cloudsql.settings.autoStorageIncrease resource.cloudsql.settings.availabilityType resource.cloudsql.settings.cmekKeyName resource.cloudsql.settings.collation resource.cloudsql.settings.databaseFlags resource.cloudsql.settings.databaseVersion resource.cloudsql.settings.databaseVersionName resource.cloudsql.settings.dataCacheConfig.dataCacheEnabled resource.cloudsql.settings.dataDiskProvisionedIops resource.cloudsql.settings.dataDiskProvisionedThroughput resource.cloudsql.settings.dataDiskSizeGb resource.cloudsql.settings.dataDiskType resource.cloudsql.settings.edition resource.cloudsql.settings.ipConfig.allocatedIpRange resource.cloudsql.settings.ipConfig.authorizedNetworks.expireTime resource.cloudsql.settings.ipConfig.authorizedNetworks.label resource.cloudsql.settings.ipConfig.authorizedNetworks.ttl resource.cloudsql.settings.ipConfig.authorizedNetworks.value resource.cloudsql.settings.ipConfig.enableIpv4 resource.cloudsql.settings.ipConfig.privateNetwork resource.cloudsql.settings.ipConfig.requireSsl resource.cloudsql.settings.secondaryZone resource.cloudsql.settings.sourceId resource.cloudsql.settings.storageAutoResizeLimit resource.cloudsql.settings.tier resource.cloudsql.settings.zone resource.displayName resource.mysql.cloudSqlId resource.mysql.host resource.mysql.port resource.mysql.ssl.sslFlags resource.mysql.ssl.type resource.mysql.username resource.name resource.oracle.forwardSshConnectivity.hostname resource.oracle.forwardSshConnectivity.port resource.oracle.forwardSshConnectivity.username resource.oracle.host resource.oracle.oracleAsmConfig.asmService resource.oracle.oracleAsmConfig.hostname resource.oracle.oracleAsmConfig.port resource.oracle.oracleAsmConfig.ssl.sslFlags resource.oracle.oracleAsmConfig.ssl.type resource.oracle.oracleAsmConfig.username resource.oracle.port resource.oracle.privateConnectivity.privateConnection resource.oracle.ssl.sslFlags resource.oracle.ssl.type resource.oracle.username resource.postgresql.alloydbClusterId resource.postgresql.cloudSqlId resource.postgresql.database resource.postgresql.host resource.postgresql.port resource.postgresql.privateServiceConnectConnectivity.serviceAttachment resource.postgresql.ssl.sslFlags resource.postgresql.ssl.type resource.postgresql.username resource.provider resource.role resource.sqlserver.backups.gcsBucket resource.sqlserver.backups.gcsPrefix resource.sqlserver.cloudSqlId resource.sqlserver.cloudSqlProjectId resource.sqlserver.database resource.sqlserver.dbmPort resource.sqlserver.forwardSshConnectivity.hostname resource.sqlserver.forwardSshConnectivity.port resource.sqlserver.forwardSshConnectivity.username resource.sqlserver.host resource.sqlserver.port resource.sqlserver.privateConnectivity.privateConnection resource.sqlserver.privateServiceConnectConnectivity.serviceAttachment resource.sqlserver.ssl.sslFlags resource.sqlserver.ssl.type resource.sqlserver.username resource.state datamigration.googleapis.com/ConversionWorkspace resource.destination.engine resource.destination.version resource.destinationProvider resource.displayName resource.globalSettings resource.name resource.source.engine resource.source.version resource.sourceProvider datamigration.googleapis.com/MigrationJob resource.cmekKeyName resource.conversionWorkspace.commitId resource.conversionWorkspace.name resource.destination resource.destinationDatabase.engine resource.destinationDatabase.provider resource.displayName resource.dumpFlags.dumpFlags.name resource.dumpFlags.dumpFlags.value resource.dumpPath resource.dumpType resource.filter resource.name resource.objectsConfig.sourceObjectsConfig.objectConfigs.objectIdentifier.database resource.objectsConfig.sourceObjectsConfig.objectConfigs.objectIdentifier.schema resource.objectsConfig.sourceObjectsConfig.objectConfigs.objectIdentifier.table resource.objectsConfig.sourceObjectsConfig.objectConfigs.objectIdentifier.type resource.objectsConfig.sourceObjectsConfig.objectsSelectionType resource.oracleToPostgresConfig.oracleSourceConfig.binaryLogParser.logFileDirectories.archivedLogDirectory resource.oracleToPostgresConfig.oracleSourceConfig.binaryLogParser.logFileDirectories.onlineLogDirectory resource.oracleToPostgresConfig.oracleSourceConfig.cdcStartPosition resource.oracleToPostgresConfig.oracleSourceConfig.maxConcurrentCdcConnections resource.oracleToPostgresConfig.oracleSourceConfig.maxConcurrentFullDumpConnections resource.oracleToPostgresConfig.oracleSourceConfig.skipFullDump resource.oracleToPostgresConfig.postgresDestinationConfig.maxConcurrentConnections resource.oracleToPostgresConfig.postgresDestinationConfig.transactionTimeout resource.performanceConfig.dumpParallelLevel resource.reverseSshConnectivity.vm resource.reverseSshConnectivity.vmIp resource.reverseSshConnectivity.vmPort resource.reverseSshConnectivity.vpc resource.source resource.sourceDatabase.engine resource.sourceDatabase.provider resource.sqlserverHomogeneousMigrationJobConfig.backupFilePattern resource.sqlserverHomogeneousMigrationJobConfig.dagConfig.linkedServer resource.sqlserverHomogeneousMigrationJobConfig.dagConfig.sourceAg resource.sqlserverHomogeneousMigrationJobConfig.databaseBackups.database resource.sqlserverHomogeneousMigrationJobConfig.databaseBackups.encryptionOptions.certPath resource.sqlserverHomogeneousMigrationJobConfig.promoteWhenReady resource.sqlserverHomogeneousMigrationJobConfig.useDiffBackup resource.sqlserverToPostgresConfig.postgresDestinationConfig.maxConcurrentConnections resource.sqlserverToPostgresConfig.postgresDestinationConfig.transactionTimeout resource.sqlserverToPostgresConfig.sqlserverSourceConfig.cdcStartPosition resource.sqlserverToPostgresConfig.sqlserverSourceConfig.maxConcurrentCdcConnections resource.sqlserverToPostgresConfig.sqlserverSourceConfig.maxConcurrentFullDumpConnections resource.sqlserverToPostgresConfig.sqlserverSourceConfig.skipFullDump resource.state resource.type resource.vpcPeeringConnectivity.vpc datamigration.googleapis.com/PrivateConnection resource.displayName resource.name resource.pscInterfaceConfig.networkAttachment resource.vpcPeeringConfig.subnet resource.vpcPeeringConfig.vpcName What's next Learn more about Organization Policy Service .
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-06 UTC."],[],[]]
- A custom constraint can only contain letters (including upper and lowercase) or numbers, for example, custom.restrictDmsMigrationJobType .
- A custom constraint can only contain letters (including upper and lowercase) or numbers, for example custom.restrictDmsMigrationJobType .

### "MCP Tools Reference: datamigration \_|\_ Database Migration Service \_|\_\

- URL: [https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/list_migration_jobs](https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/list_migration_jobs)
- Source ID: `site-api-reference`
- Final score: 220
- Re-rank relevance: N/A

Evidence snippets:
- The pattern must define one of the following capture group sets: Capture group set #1 yy/yyyy - year, 2 or 4 digits mm - month number, 1-12 dd - day of month, 1-31 hh - hour of day, 00-23 mi - minutes, 00-59 ss - seconds, 00-59 Example: For backup file TestDB 20230802 155400.trn, use pattern: (? . ) backup (? \d{4})(? \d{2})(? \d{2}) (? \d{2})(? \d{2})(? \d{2}).trn Capture group set #2 timestamp - unix timestamp Example: For backup file TestDB.1691448254.trn, use pattern: (? . ).(? \d ).trn or (? . ).(? \d ).trn databaseBackups[] object ( SqlServerDatabaseBackup ) Required.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
- For example: { create time after: 2025-10-02T10:15:33Z create time before: 2025-10-03T00:00:00Z display name: hr running: true page size: 80 } will return up to 80 migration jobs that were created on or after 2025-10-02T10:15:33 UTC and before 2025-10-03T00:00:00 UTC and have hr in their display name and are currently running.
- MigrationJob JSON representation { "name" : string , "createTime" : string , "updateTime" : string , "labels" : { string : string , ... } , "displayName" : string , "state" : enum ( State ) , "phase" : enum ( Phase ) , "type" : enum ( Type ) , "dumpPath" : string , "dumpFlags" : { object ( DumpFlags ) } , "source" : string , "destination" : string , "duration" : string , "error" : { object ( Status ) } , "sourceDatabase" : { object ( DatabaseType ) } , "destinationDatabase" : { object ( DatabaseType ) } , "endTime" : string , "conversionWorkspace" : { object ( ConversionWorkspaceInfo ) } , "filter" : string , "cmekKeyName" : string , "performanceConfig" : { object ( PerformanceConfig ) } , "postgresHomogeneousConfig" : { object ( PostgresHomogeneousConfig ) } , "sqlserverHomogeneousMigrationJobConfig" : { object ( SqlServerHomogeneousMigrationJobConfig ) } , "dumpType" : enum ( DumpType ) , "objectsConfig" : { object ( MigrationJobObjectsConfig ) } , "purpose" : enum ( Purpose ) , "originalMigrationName" : string , // Union field connectivity can be only one of the following: "reverseSshConnectivity" : { object ( ReverseSshConnectivity ) } , "vpcPeeringConnectivity" : { object ( VpcPeeringConnectivity ) } , "staticIpConnectivity" : { object ( StaticIpConnectivity ) } // End of list of possible types for union field connectivity . // Union field config can be only one of the following: "oracleToPostgresConfig" : { object ( OracleToPostgresConfig ) } , "sqlserverToPostgresConfig" : { object ( SqlServerToPostgresConfig ) } , "postgresToSqlserverConfig" : { object ( PostgresToSqlServerConfig ) } // End of list of possible types for union field config . // Union field satisfies pzs can be only one of the following: "satisfiesPzs" : boolean // End of list of possible types for union field satisfies pzs . // Union field satisfies pzi can be only one of the following: "satisfiesPzi" : boolean // End of list of possible types for union field satisfies pzi . } Fields name string The name (URI) of this migration job resource, in the form of: projects/{project}/locations/{location}/migrationJobs/{migrationJob}. createTime string ( Timestamp format) Output only.

### Binding \_|\_ Database Migration Service \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/database-migration/docs/reference/rest/Shared.Types/Binding](https://docs.cloud.google.com/database-migration/docs/reference/rest/Shared.Types/Binding)
- Source ID: `site-api-reference`
- Final score: 206
- Re-rank relevance: N/A

Evidence snippets:
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-26 UTC."],[],[]]
- For example, google.com or example.com . principal://iam.googleapis.com/locations/global/workforcePools/{pool id}/subject/{subject attribute value} : A single identity in a workforce identity pool. principalSet://iam.googleapis.com/locations/global/workforcePools/{pool id}/group/{groupId} : All workforce identities in a group. principalSet://iam.googleapis.com/locations/global/workforcePools/{pool id}/attribute.{attribute name}/{attribute value} : All workforce identities with a specific attribute value. principalSet://iam.googleapis.com/locations/global/workforcePools/{pool id}/ : All identities in a workforce identity pool. principal://iam.googleapis.com/projects/{projectNumber}/locations/global/workloadIdentityPools/{pool id}/subject/{subject attribute value} : A single identity in a workload identity pool. principalSet://iam.googleapis.com/projects/{projectNumber}/locations/global/workloadIdentityPools/{pool id}/group/{groupId} : A workload identity pool group. principalSet://iam.googleapis.com/projects/{projectNumber}/locations/global/workloadIdentityPools/{pool id}/attribute.{attribute name}/{attribute value} : All identities in a workload identity pool with a certain attribute. principalSet://iam.googleapis.com/projects/{projectNumber}/locations/global/workloadIdentityPools/{pool id}/ : All identities in a workload identity pool. deleted:user:{emailid}?uid={uniqueid} : An email address (plus unique identifier) representing a user that has been recently deleted.
- If the group is recovered, this value reverts to group:{emailid} and the recovered group retains the role in the binding. deleted:principal://iam.googleapis.com/locations/global/workforcePools/{pool id}/subject/{subject attribute value} : Deleted single identity in a workforce identity pool.
- Example (Comparison): title: "Summary size limit" description: "Determines if a summary is less than 100 chars" expression: "document.summary.size() < 100" Example (Equality): title: "Requestor is owner" description: "Determines if requestor is the document owner" expression: "document.owner == request.auth.claims.email" Example (Logic): title: "Public documents" description: "Determine whether the document should be publicly visible" expression: "document.type != 'private' && document.type != 'internal'" Example (Data Manipulation): title: "Notification string" description: "Create a notification string with a timestamp." expression: "'New message received at ' + string(document.create time)" The exact variables and functions that may be referenced within an expression are determined by the service that evaluates it.

### "Database Migration Service for heterogeneous SQL Server to AlloyDB for PostgreSQL\

- URL: [https://docs.cloud.google.com/database-migration/docs/sqlserver-to-alloydb/scenario-overview](https://docs.cloud.google.com/database-migration/docs/sqlserver-to-alloydb/scenario-overview)
- Source ID: `site-api-reference`
- Final score: 204
- Re-rank relevance: N/A

Evidence snippets:
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
- Supported source and destination databases The following table lists all supported SQL Server source and destination databases: Source databases Destination databases Amazon RDS for SQL Server AlloyDB for PostgreSQL 14, 15, 16 Microsoft Azure SQL Managed Instance Microsoft Azure SQL Database tier S3 and above Cloud SQL for SQL Server Self-managed SQL Server versions: Enterprise 2008 and later, Standard 2016 SP1 and later, Developer 2008 and later (on premises or on any cloud VM that you fully control) Unsupported source databases Database Migration Service doesn't support migrating from the following SQL Server versions: SQL Server Standard edition versions from 2008 to 2014 SQL Server Express SQL Server Web Code and schema conversion Database Migration Service conversion workspaces provide an interactive editor experience where you can convert your schemas, tables, and other objects from SQL Server syntax to PostgreSQL syntax.
- This page provides an overview of the key Database Migration Service features for heterogeneous SQL Server to AlloyDB for PostgreSQL migrations: Supported sources and destinations lists all SQL Server versions supported by Database Migration Service.
- Failback migrations Failback migrations (sometimes referred to as reverse replication ), allow you to push CDC updates back to your original SQL Server source from the destination AlloyDB for PostgreSQL cluster after you complete the migration.

