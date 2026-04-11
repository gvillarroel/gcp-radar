---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T21:10:29.909Z"
product_name: "Cloud Database Migration Service"
product_slug: "cloud-database-migration-service"
feature_name: "Private Service Connect network connectivity for homogeneous migrations"
feature_slug: "private-service-connect-network-connectivity-for-homogeneous-migrations"
latest_feature_date: "2025-08-14"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/get_migration_job"
  - "https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/list_migration_jobs"
  - "https://docs.cloud.google.com/database-migration/docs/custom-constraints"
keywords:
  - "private"
  - "connect"
  - "network"
  - "connectivity"
  - "for"
  - "homogeneous"
  - "migrations"
  - "to"
---

# Private Service Connect network connectivity for homogeneous migrations

Product: Cloud Database Migration Service
Coverage: LOW

## Step 02 Summary

Homogeneous migrations to Cloud SQL for MySQL, Cloud SQL for PostgreSQL, and AlloyDB for PostgreSQL now support Private Service Connect interfaces for network connectivity.

## Extended Definition

Homogeneous migrations to Cloud SQL for MySQL, Cloud SQL for PostgreSQL, and AlloyDB for PostgreSQL now support Private Service Connect interfaces for network connectivity.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/get_migration_job](https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/get_migration_job)
- [https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/list_migration_jobs](https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/list_migration_jobs)
- [https://docs.cloud.google.com/database-migration/docs/custom-constraints](https://docs.cloud.google.com/database-migration/docs/custom-constraints)

## Supporting Pages

### "MCP Tools Reference: datamigration \_|\_ Database Migration Service \_|\_\

- URL: [https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/get_migration_job](https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/get_migration_job)
- Source ID: `site-api-reference`
- Final score: 188
- Re-rank relevance: N/A

Evidence snippets:
- MigrationJob JSON representation { "name" : string , "createTime" : string , "updateTime" : string , "labels" : { string : string , ... } , "displayName" : string , "state" : enum ( State ) , "phase" : enum ( Phase ) , "type" : enum ( Type ) , "dumpPath" : string , "dumpFlags" : { object ( DumpFlags ) } , "source" : string , "destination" : string , "duration" : string , "error" : { object ( Status ) } , "sourceDatabase" : { object ( DatabaseType ) } , "destinationDatabase" : { object ( DatabaseType ) } , "endTime" : string , "conversionWorkspace" : { object ( ConversionWorkspaceInfo ) } , "filter" : string , "cmekKeyName" : string , "performanceConfig" : { object ( PerformanceConfig ) } , "postgresHomogeneousConfig" : { object ( PostgresHomogeneousConfig ) } , "sqlserverHomogeneousMigrationJobConfig" : { object ( SqlServerHomogeneousMigrationJobConfig ) } , "dumpType" : enum ( DumpType ) , "objectsConfig" : { object ( MigrationJobObjectsConfig ) } , "purpose" : enum ( Purpose ) , "originalMigrationName" : string , // Union field connectivity can be only one of the following: "reverseSshConnectivity" : { object ( ReverseSshConnectivity ) } , "vpcPeeringConnectivity" : { object ( VpcPeeringConnectivity ) } , "staticIpConnectivity" : { object ( StaticIpConnectivity ) } // End of list of possible types for union field connectivity . // Union field config can be only one of the following: "oracleToPostgresConfig" : { object ( OracleToPostgresConfig ) } , "sqlserverToPostgresConfig" : { object ( SqlServerToPostgresConfig ) } , "postgresToSqlserverConfig" : { object ( PostgresToSqlServerConfig ) } // End of list of possible types for union field config . // Union field satisfies pzs can be only one of the following: "satisfiesPzs" : boolean // End of list of possible types for union field satisfies pzs . // Union field satisfies pzi can be only one of the following: "satisfiesPzi" : boolean // End of list of possible types for union field satisfies pzi . } Fields name string The name (URI) of this migration job resource, in the form of: projects/{project}/locations/{location}/migrationJobs/{migrationJob}. createTime string ( Timestamp format) Output only.
- VpcPeeringConnectivity JSON representation { "vpc" : string } Fields vpc string The name of the VPC network to peer with the Cloud SQL private network.
- The connectivity method. connectivity can be only one of the following: reverseSshConnectivity object ( ReverseSshConnectivity ) The details needed to communicate to the source over Reverse SSH tunnel connectivity. vpcPeeringConnectivity object ( VpcPeeringConnectivity ) The details of the VPC network that the source database is located in. staticIpConnectivity object ( StaticIpConnectivity ) static ip connectivity data (default, no additional details needed).
- The forwarding port of the virtual machine (Compute Engine) used as the bastion server for the SSH tunnel. vm string The name of the virtual machine (Compute Engine) used as the bastion server for the SSH tunnel. vpc string The name of the VPC to peer with the Cloud SQL private network.

### "MCP Tools Reference: datamigration \_|\_ Database Migration Service \_|\_\

- URL: [https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/list_migration_jobs](https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/list_migration_jobs)
- Source ID: `site-api-reference`
- Final score: 188
- Re-rank relevance: N/A

Evidence snippets:
- MigrationJob JSON representation { "name" : string , "createTime" : string , "updateTime" : string , "labels" : { string : string , ... } , "displayName" : string , "state" : enum ( State ) , "phase" : enum ( Phase ) , "type" : enum ( Type ) , "dumpPath" : string , "dumpFlags" : { object ( DumpFlags ) } , "source" : string , "destination" : string , "duration" : string , "error" : { object ( Status ) } , "sourceDatabase" : { object ( DatabaseType ) } , "destinationDatabase" : { object ( DatabaseType ) } , "endTime" : string , "conversionWorkspace" : { object ( ConversionWorkspaceInfo ) } , "filter" : string , "cmekKeyName" : string , "performanceConfig" : { object ( PerformanceConfig ) } , "postgresHomogeneousConfig" : { object ( PostgresHomogeneousConfig ) } , "sqlserverHomogeneousMigrationJobConfig" : { object ( SqlServerHomogeneousMigrationJobConfig ) } , "dumpType" : enum ( DumpType ) , "objectsConfig" : { object ( MigrationJobObjectsConfig ) } , "purpose" : enum ( Purpose ) , "originalMigrationName" : string , // Union field connectivity can be only one of the following: "reverseSshConnectivity" : { object ( ReverseSshConnectivity ) } , "vpcPeeringConnectivity" : { object ( VpcPeeringConnectivity ) } , "staticIpConnectivity" : { object ( StaticIpConnectivity ) } // End of list of possible types for union field connectivity . // Union field config can be only one of the following: "oracleToPostgresConfig" : { object ( OracleToPostgresConfig ) } , "sqlserverToPostgresConfig" : { object ( SqlServerToPostgresConfig ) } , "postgresToSqlserverConfig" : { object ( PostgresToSqlServerConfig ) } // End of list of possible types for union field config . // Union field satisfies pzs can be only one of the following: "satisfiesPzs" : boolean // End of list of possible types for union field satisfies pzs . // Union field satisfies pzi can be only one of the following: "satisfiesPzi" : boolean // End of list of possible types for union field satisfies pzi . } Fields name string The name (URI) of this migration job resource, in the form of: projects/{project}/locations/{location}/migrationJobs/{migrationJob}. createTime string ( Timestamp format) Output only.
- VpcPeeringConnectivity JSON representation { "vpc" : string } Fields vpc string The name of the VPC network to peer with the Cloud SQL private network.
- The connectivity method. connectivity can be only one of the following: reverseSshConnectivity object ( ReverseSshConnectivity ) The details needed to communicate to the source over Reverse SSH tunnel connectivity. vpcPeeringConnectivity object ( VpcPeeringConnectivity ) The details of the VPC network that the source database is located in. staticIpConnectivity object ( StaticIpConnectivity ) static ip connectivity data (default, no additional details needed).
- The forwarding port of the virtual machine (Compute Engine) used as the bastion server for the SSH tunnel. vm string The name of the virtual machine (Compute Engine) used as the bastion server for the SSH tunnel. vpc string The name of the VPC to peer with the Cloud SQL private network.

### "Create custom organization policy constraints \_|\_ Database Migration Service\

- URL: [https://docs.cloud.google.com/database-migration/docs/custom-constraints](https://docs.cloud.google.com/database-migration/docs/custom-constraints)
- Source ID: `site-docs-root-2`
- Final score: 172
- Re-rank relevance: N/A

Evidence snippets:
- Resource Field datamigration.googleapis.com/ConnectionProfile resource.alloydb.clusterId resource.alloydb.settings.databaseVersion resource.alloydb.settings.encryptionConfig.kmsKeyName resource.alloydb.settings.initialUser.user resource.alloydb.settings.primaryInstanceSettings.databaseFlags resource.alloydb.settings.primaryInstanceSettings.instanceNetworkConfig.authorizedExternalNetworks.cidrRange resource.alloydb.settings.primaryInstanceSettings.instanceNetworkConfig.enableOutboundPublicIp resource.alloydb.settings.primaryInstanceSettings.instanceNetworkConfig.enablePublicIp resource.alloydb.settings.primaryInstanceSettings.machineConfig.cpuCount resource.alloydb.settings.primaryInstanceSettings.machineConfig.machineType resource.alloydb.settings.vpcNetwork resource.cloudsql.settings.activationPolicy resource.cloudsql.settings.autoStorageIncrease resource.cloudsql.settings.availabilityType resource.cloudsql.settings.cmekKeyName resource.cloudsql.settings.collation resource.cloudsql.settings.databaseFlags resource.cloudsql.settings.databaseVersion resource.cloudsql.settings.databaseVersionName resource.cloudsql.settings.dataCacheConfig.dataCacheEnabled resource.cloudsql.settings.dataDiskProvisionedIops resource.cloudsql.settings.dataDiskProvisionedThroughput resource.cloudsql.settings.dataDiskSizeGb resource.cloudsql.settings.dataDiskType resource.cloudsql.settings.edition resource.cloudsql.settings.ipConfig.allocatedIpRange resource.cloudsql.settings.ipConfig.authorizedNetworks.expireTime resource.cloudsql.settings.ipConfig.authorizedNetworks.label resource.cloudsql.settings.ipConfig.authorizedNetworks.ttl resource.cloudsql.settings.ipConfig.authorizedNetworks.value resource.cloudsql.settings.ipConfig.enableIpv4 resource.cloudsql.settings.ipConfig.privateNetwork resource.cloudsql.settings.ipConfig.requireSsl resource.cloudsql.settings.secondaryZone resource.cloudsql.settings.sourceId resource.cloudsql.settings.storageAutoResizeLimit resource.cloudsql.settings.tier resource.cloudsql.settings.zone resource.displayName resource.mysql.cloudSqlId resource.mysql.host resource.mysql.port resource.mysql.ssl.sslFlags resource.mysql.ssl.type resource.mysql.username resource.name resource.oracle.forwardSshConnectivity.hostname resource.oracle.forwardSshConnectivity.port resource.oracle.forwardSshConnectivity.username resource.oracle.host resource.oracle.oracleAsmConfig.asmService resource.oracle.oracleAsmConfig.hostname resource.oracle.oracleAsmConfig.port resource.oracle.oracleAsmConfig.ssl.sslFlags resource.oracle.oracleAsmConfig.ssl.type resource.oracle.oracleAsmConfig.username resource.oracle.port resource.oracle.privateConnectivity.privateConnection resource.oracle.ssl.sslFlags resource.oracle.ssl.type resource.oracle.username resource.postgresql.alloydbClusterId resource.postgresql.cloudSqlId resource.postgresql.database resource.postgresql.host resource.postgresql.port resource.postgresql.privateServiceConnectConnectivity.serviceAttachment resource.postgresql.ssl.sslFlags resource.postgresql.ssl.type resource.postgresql.username resource.provider resource.role resource.sqlserver.backups.gcsBucket resource.sqlserver.backups.gcsPrefix resource.sqlserver.cloudSqlId resource.sqlserver.cloudSqlProjectId resource.sqlserver.database resource.sqlserver.dbmPort resource.sqlserver.forwardSshConnectivity.hostname resource.sqlserver.forwardSshConnectivity.port resource.sqlserver.forwardSshConnectivity.username resource.sqlserver.host resource.sqlserver.port resource.sqlserver.privateConnectivity.privateConnection resource.sqlserver.privateServiceConnectConnectivity.serviceAttachment resource.sqlserver.ssl.sslFlags resource.sqlserver.ssl.type resource.sqlserver.username resource.state datamigration.googleapis.com/ConversionWorkspace resource.destination.engine resource.destination.version resource.destinationProvider resource.displayName resource.globalSettings resource.name resource.source.engine resource.source.version resource.sourceProvider datamigration.googleapis.com/MigrationJob resource.cmekKeyName resource.conversionWorkspace.commitId resource.conversionWorkspace.name resource.destination resource.destinationDatabase.engine resource.destinationDatabase.provider resource.displayName resource.dumpFlags.dumpFlags.name resource.dumpFlags.dumpFlags.value resource.dumpPath resource.dumpType resource.filter resource.name resource.objectsConfig.sourceObjectsConfig.objectConfigs.objectIdentifier.database resource.objectsConfig.sourceObjectsConfig.objectConfigs.objectIdentifier.schema resource.objectsConfig.sourceObjectsConfig.objectConfigs.objectIdentifier.table resource.objectsConfig.sourceObjectsConfig.objectConfigs.objectIdentifier.type resource.objectsConfig.sourceObjectsConfig.objectsSelectionType resource.oracleToPostgresConfig.oracleSourceConfig.binaryLogParser.logFileDirectories.archivedLogDirectory resource.oracleToPostgresConfig.oracleSourceConfig.binaryLogParser.logFileDirectories.onlineLogDirectory resource.oracleToPostgresConfig.oracleSourceConfig.cdcStartPosition resource.oracleToPostgresConfig.oracleSourceConfig.maxConcurrentCdcConnections resource.oracleToPostgresConfig.oracleSourceConfig.maxConcurrentFullDumpConnections resource.oracleToPostgresConfig.oracleSourceConfig.skipFullDump resource.oracleToPostgresConfig.postgresDestinationConfig.maxConcurrentConnections resource.oracleToPostgresConfig.postgresDestinationConfig.transactionTimeout resource.performanceConfig.dumpParallelLevel resource.reverseSshConnectivity.vm resource.reverseSshConnectivity.vmIp resource.reverseSshConnectivity.vmPort resource.reverseSshConnectivity.vpc resource.source resource.sourceDatabase.engine resource.sourceDatabase.provider resource.sqlserverHomogeneousMigrationJobConfig.backupFilePattern resource.sqlserverHomogeneousMigrationJobConfig.dagConfig.linkedServer resource.sqlserverHomogeneousMigrationJobConfig.dagConfig.sourceAg resource.sqlserverHomogeneousMigrationJobConfig.databaseBackups.database resource.sqlserverHomogeneousMigrationJobConfig.databaseBackups.encryptionOptions.certPath resource.sqlserverHomogeneousMigrationJobConfig.promoteWhenReady resource.sqlserverHomogeneousMigrationJobConfig.useDiffBackup resource.sqlserverToPostgresConfig.postgresDestinationConfig.maxConcurrentConnections resource.sqlserverToPostgresConfig.postgresDestinationConfig.transactionTimeout resource.sqlserverToPostgresConfig.sqlserverSourceConfig.cdcStartPosition resource.sqlserverToPostgresConfig.sqlserverSourceConfig.maxConcurrentCdcConnections resource.sqlserverToPostgresConfig.sqlserverSourceConfig.maxConcurrentFullDumpConnections resource.sqlserverToPostgresConfig.sqlserverSourceConfig.skipFullDump resource.state resource.type resource.vpcPeeringConnectivity.vpc datamigration.googleapis.com/PrivateConnection resource.displayName resource.name resource.pscInterfaceConfig.networkAttachment resource.vpcPeeringConfig.subnet resource.vpcPeeringConfig.vpcName What's next Learn more about Organization Policy Service .
- For example, you can restrict the types of migration jobs, the engine types for connection profiles, or the networks used for private connections.
- Note: The exact condition depends on the structure of the generated CEL proto for ConnectionProfile. name : organizations/ ORGANIZATION ID /customConstraints/custom.restrictDmsToPostgres resourceTypes : - datamigration.googleapis.com/ConnectionProfile methodTypes : - CREATE Example condition, validate against actual CEL proto fields. condition : "!has(resource.postgresql)" actionType : DENY displayName : Restrict connection profiles to PostgreSQL description : Only PostgreSQL connection profiles can be created.
- This page shows you how to use Organization Policy Service custom constraints to restrict specific operations on the following Google Cloud resources: datamigration.googleapis.com/ConnectionProfile datamigration.googleapis.com/ConversionWorkspace datamigration.googleapis.com/MigrationJob datamigration.googleapis.com/PrivateConnection To learn more about Organization Policy, see Custom organization policies .

