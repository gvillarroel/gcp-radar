---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:22.240Z"
product_name: "Cloud Database Migration Service"
product_slug: "cloud-database-migration-service"
feature_name: "Source/destination role selection for migration connection profiles"
feature_slug: "source-destination-role-selection-for-migration-connection-profiles"
latest_feature_date: "2024-11-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/database-migration/docs/custom-constraints"
  - "https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/get_migration_job"
  - "https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/list_migration_jobs"
  - "https://docs.cloud.google.com/database-migration/docs/reference/rest"
keywords:
  - "source"
  - "destination"
  - "role"
  - "selection"
  - "for"
  - "migration"
  - "connection"
  - "profiles"
---

# Source/destination role selection for migration connection profiles

Product: Cloud Database Migration Service
Coverage: MEDIUM

## Step 02 Summary

Connection profiles can now be explicitly selected as source or destination and display configuration options tailored to that role.

## Extended Definition

Connection profiles can now be explicitly selected as source or destination and display configuration options tailored to that role.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/database-migration/docs/custom-constraints](https://docs.cloud.google.com/database-migration/docs/custom-constraints)
- [https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/get_migration_job](https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/get_migration_job)
- [https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/list_migration_jobs](https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/list_migration_jobs)
- [https://docs.cloud.google.com/database-migration/docs/reference/rest](https://docs.cloud.google.com/database-migration/docs/reference/rest)

## Supporting Pages

### "Create custom organization policy constraints \_|\_ Database Migration Service\

- URL: [https://docs.cloud.google.com/database-migration/docs/custom-constraints](https://docs.cloud.google.com/database-migration/docs/custom-constraints)
- Source ID: `site-docs-root-2`
- Final score: 226
- Re-rank relevance: N/A

Evidence snippets:
- Resource Field datamigration.googleapis.com/ConnectionProfile resource.alloydb.clusterId resource.alloydb.settings.databaseVersion resource.alloydb.settings.encryptionConfig.kmsKeyName resource.alloydb.settings.initialUser.user resource.alloydb.settings.primaryInstanceSettings.databaseFlags resource.alloydb.settings.primaryInstanceSettings.instanceNetworkConfig.authorizedExternalNetworks.cidrRange resource.alloydb.settings.primaryInstanceSettings.instanceNetworkConfig.enableOutboundPublicIp resource.alloydb.settings.primaryInstanceSettings.instanceNetworkConfig.enablePublicIp resource.alloydb.settings.primaryInstanceSettings.machineConfig.cpuCount resource.alloydb.settings.primaryInstanceSettings.machineConfig.machineType resource.alloydb.settings.vpcNetwork resource.cloudsql.settings.activationPolicy resource.cloudsql.settings.autoStorageIncrease resource.cloudsql.settings.availabilityType resource.cloudsql.settings.cmekKeyName resource.cloudsql.settings.collation resource.cloudsql.settings.databaseFlags resource.cloudsql.settings.databaseVersion resource.cloudsql.settings.databaseVersionName resource.cloudsql.settings.dataCacheConfig.dataCacheEnabled resource.cloudsql.settings.dataDiskProvisionedIops resource.cloudsql.settings.dataDiskProvisionedThroughput resource.cloudsql.settings.dataDiskSizeGb resource.cloudsql.settings.dataDiskType resource.cloudsql.settings.edition resource.cloudsql.settings.ipConfig.allocatedIpRange resource.cloudsql.settings.ipConfig.authorizedNetworks.expireTime resource.cloudsql.settings.ipConfig.authorizedNetworks.label resource.cloudsql.settings.ipConfig.authorizedNetworks.ttl resource.cloudsql.settings.ipConfig.authorizedNetworks.value resource.cloudsql.settings.ipConfig.enableIpv4 resource.cloudsql.settings.ipConfig.privateNetwork resource.cloudsql.settings.ipConfig.requireSsl resource.cloudsql.settings.secondaryZone resource.cloudsql.settings.sourceId resource.cloudsql.settings.storageAutoResizeLimit resource.cloudsql.settings.tier resource.cloudsql.settings.zone resource.displayName resource.mysql.cloudSqlId resource.mysql.host resource.mysql.port resource.mysql.ssl.sslFlags resource.mysql.ssl.type resource.mysql.username resource.name resource.oracle.forwardSshConnectivity.hostname resource.oracle.forwardSshConnectivity.port resource.oracle.forwardSshConnectivity.username resource.oracle.host resource.oracle.oracleAsmConfig.asmService resource.oracle.oracleAsmConfig.hostname resource.oracle.oracleAsmConfig.port resource.oracle.oracleAsmConfig.ssl.sslFlags resource.oracle.oracleAsmConfig.ssl.type resource.oracle.oracleAsmConfig.username resource.oracle.port resource.oracle.privateConnectivity.privateConnection resource.oracle.ssl.sslFlags resource.oracle.ssl.type resource.oracle.username resource.postgresql.alloydbClusterId resource.postgresql.cloudSqlId resource.postgresql.database resource.postgresql.host resource.postgresql.port resource.postgresql.privateServiceConnectConnectivity.serviceAttachment resource.postgresql.ssl.sslFlags resource.postgresql.ssl.type resource.postgresql.username resource.provider resource.role resource.sqlserver.backups.gcsBucket resource.sqlserver.backups.gcsPrefix resource.sqlserver.cloudSqlId resource.sqlserver.cloudSqlProjectId resource.sqlserver.database resource.sqlserver.dbmPort resource.sqlserver.forwardSshConnectivity.hostname resource.sqlserver.forwardSshConnectivity.port resource.sqlserver.forwardSshConnectivity.username resource.sqlserver.host resource.sqlserver.port resource.sqlserver.privateConnectivity.privateConnection resource.sqlserver.privateServiceConnectConnectivity.serviceAttachment resource.sqlserver.ssl.sslFlags resource.sqlserver.ssl.type resource.sqlserver.username resource.state datamigration.googleapis.com/ConversionWorkspace resource.destination.engine resource.destination.version resource.destinationProvider resource.displayName resource.globalSettings resource.name resource.source.engine resource.source.version resource.sourceProvider datamigration.googleapis.com/MigrationJob resource.cmekKeyName resource.conversionWorkspace.commitId resource.conversionWorkspace.name resource.destination resource.destinationDatabase.engine resource.destinationDatabase.provider resource.displayName resource.dumpFlags.dumpFlags.name resource.dumpFlags.dumpFlags.value resource.dumpPath resource.dumpType resource.filter resource.name resource.objectsConfig.sourceObjectsConfig.objectConfigs.objectIdentifier.database resource.objectsConfig.sourceObjectsConfig.objectConfigs.objectIdentifier.schema resource.objectsConfig.sourceObjectsConfig.objectConfigs.objectIdentifier.table resource.objectsConfig.sourceObjectsConfig.objectConfigs.objectIdentifier.type resource.objectsConfig.sourceObjectsConfig.objectsSelectionType resource.oracleToPostgresConfig.oracleSourceConfig.binaryLogParser.logFileDirectories.archivedLogDirectory resource.oracleToPostgresConfig.oracleSourceConfig.binaryLogParser.logFileDirectories.onlineLogDirectory resource.oracleToPostgresConfig.oracleSourceConfig.cdcStartPosition resource.oracleToPostgresConfig.oracleSourceConfig.maxConcurrentCdcConnections resource.oracleToPostgresConfig.oracleSourceConfig.maxConcurrentFullDumpConnections resource.oracleToPostgresConfig.oracleSourceConfig.skipFullDump resource.oracleToPostgresConfig.postgresDestinationConfig.maxConcurrentConnections resource.oracleToPostgresConfig.postgresDestinationConfig.transactionTimeout resource.performanceConfig.dumpParallelLevel resource.reverseSshConnectivity.vm resource.reverseSshConnectivity.vmIp resource.reverseSshConnectivity.vmPort resource.reverseSshConnectivity.vpc resource.source resource.sourceDatabase.engine resource.sourceDatabase.provider resource.sqlserverHomogeneousMigrationJobConfig.backupFilePattern resource.sqlserverHomogeneousMigrationJobConfig.dagConfig.linkedServer resource.sqlserverHomogeneousMigrationJobConfig.dagConfig.sourceAg resource.sqlserverHomogeneousMigrationJobConfig.databaseBackups.database resource.sqlserverHomogeneousMigrationJobConfig.databaseBackups.encryptionOptions.certPath resource.sqlserverHomogeneousMigrationJobConfig.promoteWhenReady resource.sqlserverHomogeneousMigrationJobConfig.useDiffBackup resource.sqlserverToPostgresConfig.postgresDestinationConfig.maxConcurrentConnections resource.sqlserverToPostgresConfig.postgresDestinationConfig.transactionTimeout resource.sqlserverToPostgresConfig.sqlserverSourceConfig.cdcStartPosition resource.sqlserverToPostgresConfig.sqlserverSourceConfig.maxConcurrentCdcConnections resource.sqlserverToPostgresConfig.sqlserverSourceConfig.maxConcurrentFullDumpConnections resource.sqlserverToPostgresConfig.sqlserverSourceConfig.skipFullDump resource.state resource.type resource.vpcPeeringConnectivity.vpc datamigration.googleapis.com/PrivateConnection resource.displayName resource.name resource.pscInterfaceConfig.networkAttachment resource.vpcPeeringConfig.subnet resource.vpcPeeringConfig.vpcName What's next Learn more about Organization Policy Service .
- Note: The exact condition depends on the structure of the generated CEL proto for ConnectionProfile. name : organizations/ ORGANIZATION ID /customConstraints/custom.restrictDmsToPostgres resourceTypes : - datamigration.googleapis.com/ConnectionProfile methodTypes : - CREATE Example condition, validate against actual CEL proto fields. condition : "!has(resource.postgresql)" actionType : DENY displayName : Restrict connection profiles to PostgreSQL description : Only PostgreSQL connection profiles can be created.
- Description Constraint syntax Restrict migration job type Ensures all new migration jobs are continuous. name : organizations/ ORGANIZATION ID /customConstraints/custom.restrictDmsMigrationJobType resourceTypes : - datamigration.googleapis.com/MigrationJob methodTypes : - CREATE - UPDATE condition : "resource.type != 'CONTINUOUS'" actionType : DENY displayName : Restrict migration job type description : All new migration jobs must be of type CONTINUOUS Restrict connection profile engines Ensures only PostgreSQL connection profiles can be created.
- For example, you can restrict the types of migration jobs, the engine types for connection profiles, or the networks used for private connections.

### "MCP Tools Reference: datamigration \_|\_ Database Migration Service \_|\_\

- URL: [https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/get_migration_job](https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/get_migration_job)
- Source ID: `site-api-reference`
- Final score: 214
- Re-rank relevance: N/A

Evidence snippets:
- MigrationJob JSON representation { "name" : string , "createTime" : string , "updateTime" : string , "labels" : { string : string , ... } , "displayName" : string , "state" : enum ( State ) , "phase" : enum ( Phase ) , "type" : enum ( Type ) , "dumpPath" : string , "dumpFlags" : { object ( DumpFlags ) } , "source" : string , "destination" : string , "duration" : string , "error" : { object ( Status ) } , "sourceDatabase" : { object ( DatabaseType ) } , "destinationDatabase" : { object ( DatabaseType ) } , "endTime" : string , "conversionWorkspace" : { object ( ConversionWorkspaceInfo ) } , "filter" : string , "cmekKeyName" : string , "performanceConfig" : { object ( PerformanceConfig ) } , "postgresHomogeneousConfig" : { object ( PostgresHomogeneousConfig ) } , "sqlserverHomogeneousMigrationJobConfig" : { object ( SqlServerHomogeneousMigrationJobConfig ) } , "dumpType" : enum ( DumpType ) , "objectsConfig" : { object ( MigrationJobObjectsConfig ) } , "purpose" : enum ( Purpose ) , "originalMigrationName" : string , // Union field connectivity can be only one of the following: "reverseSshConnectivity" : { object ( ReverseSshConnectivity ) } , "vpcPeeringConnectivity" : { object ( VpcPeeringConnectivity ) } , "staticIpConnectivity" : { object ( StaticIpConnectivity ) } // End of list of possible types for union field connectivity . // Union field config can be only one of the following: "oracleToPostgresConfig" : { object ( OracleToPostgresConfig ) } , "sqlserverToPostgresConfig" : { object ( SqlServerToPostgresConfig ) } , "postgresToSqlserverConfig" : { object ( PostgresToSqlServerConfig ) } // End of list of possible types for union field config . // Union field satisfies pzs can be only one of the following: "satisfiesPzs" : boolean // End of list of possible types for union field satisfies pzs . // Union field satisfies pzi can be only one of the following: "satisfiesPzi" : boolean // End of list of possible types for union field satisfies pzi . } Fields name string The name (URI) of this migration job resource, in the form of: projects/{project}/locations/{location}/migrationJobs/{migrationJob}. createTime string ( Timestamp format) Output only.
- The resource name (URI) of the destination connection profile. duration string ( Duration format) Output only.
- Maximum number of connections Database Migration Service will open to the destination for data migration.
- Maximum number of connections Database Migration Service will open to the destination for data migration.

### "MCP Tools Reference: datamigration \_|\_ Database Migration Service \_|\_\

- URL: [https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/list_migration_jobs](https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/list_migration_jobs)
- Source ID: `site-api-reference`
- Final score: 214
- Re-rank relevance: N/A

Evidence snippets:
- MigrationJob JSON representation { "name" : string , "createTime" : string , "updateTime" : string , "labels" : { string : string , ... } , "displayName" : string , "state" : enum ( State ) , "phase" : enum ( Phase ) , "type" : enum ( Type ) , "dumpPath" : string , "dumpFlags" : { object ( DumpFlags ) } , "source" : string , "destination" : string , "duration" : string , "error" : { object ( Status ) } , "sourceDatabase" : { object ( DatabaseType ) } , "destinationDatabase" : { object ( DatabaseType ) } , "endTime" : string , "conversionWorkspace" : { object ( ConversionWorkspaceInfo ) } , "filter" : string , "cmekKeyName" : string , "performanceConfig" : { object ( PerformanceConfig ) } , "postgresHomogeneousConfig" : { object ( PostgresHomogeneousConfig ) } , "sqlserverHomogeneousMigrationJobConfig" : { object ( SqlServerHomogeneousMigrationJobConfig ) } , "dumpType" : enum ( DumpType ) , "objectsConfig" : { object ( MigrationJobObjectsConfig ) } , "purpose" : enum ( Purpose ) , "originalMigrationName" : string , // Union field connectivity can be only one of the following: "reverseSshConnectivity" : { object ( ReverseSshConnectivity ) } , "vpcPeeringConnectivity" : { object ( VpcPeeringConnectivity ) } , "staticIpConnectivity" : { object ( StaticIpConnectivity ) } // End of list of possible types for union field connectivity . // Union field config can be only one of the following: "oracleToPostgresConfig" : { object ( OracleToPostgresConfig ) } , "sqlserverToPostgresConfig" : { object ( SqlServerToPostgresConfig ) } , "postgresToSqlserverConfig" : { object ( PostgresToSqlServerConfig ) } // End of list of possible types for union field config . // Union field satisfies pzs can be only one of the following: "satisfiesPzs" : boolean // End of list of possible types for union field satisfies pzs . // Union field satisfies pzi can be only one of the following: "satisfiesPzi" : boolean // End of list of possible types for union field satisfies pzi . } Fields name string The name (URI) of this migration job resource, in the form of: projects/{project}/locations/{location}/migrationJobs/{migrationJob}. createTime string ( Timestamp format) Output only.
- The resource name (URI) of the destination connection profile. duration string ( Duration format) Output only.
- Maximum number of connections Database Migration Service will open to the destination for data migration.
- Maximum number of connections Database Migration Service will open to the destination for data migration.

### "Database Migration API \_|\_ Database Migration Service \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/database-migration/docs/reference/rest](https://docs.cloud.google.com/database-migration/docs/reference/rest)
- Source ID: `site-api-reference`
- Final score: 210
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- REST Resource: v1beta1.projects.locations REST Resource: v1beta1.projects.locations.connectionProfiles REST Resource: v1beta1.projects.locations.migrationJobs REST Resource: v1beta1.projects.locations.operations REST Resource: v1alpha2.projects.locations REST Resource: v1alpha2.projects.locations.connectionProfiles REST Resource: v1alpha2.projects.locations.migrationJobs REST Resource: v1alpha2.projects.locations.operations REST Resource: v1.projects.locations REST Resource: v1.projects.locations.connectionProfiles REST Resource: v1.projects.locations.conversionWorkspaces REST Resource: v1.projects.locations.conversionWorkspaces.mappingRules REST Resource: v1.projects.locations.migrationJobs REST Resource: v1.projects.locations.migrationJobs.objects REST Resource: v1.projects.locations.operations REST Resource: v1.projects.locations.privateConnections Service: datamigration.googleapis.com Discovery document A Discovery Document is a machine-readable specification for describing and consuming REST APIs.
- REST Resource: v1alpha2.projects.locations.connectionProfiles Methods create POST /v1alpha2/{parent}/connectionProfiles Creates a new connection profile in a given project and location. delete DELETE /v1alpha2/{name} Deletes a single Database Migration Service connection profile. get GET /v1alpha2/{name} Gets details of a single connection profile. getIamPolicy GET /v1alpha2/{resource}:getIamPolicy Gets the access control policy for a resource. list GET /v1alpha2/{parent}/connectionProfiles Retrieve a list of all connection profiles in a given project and location. patch PATCH /v1alpha2/{connectionProfile.name} Update the configuration of a single connection profile. setIamPolicy POST /v1alpha2/{resource}:setIamPolicy Sets the access control policy on the specified resource. testIamPermissions POST /v1alpha2/{resource}:testIamPermissions Returns permissions that a caller has on the specified resource.
- REST Resource: v1beta1.projects.locations.connectionProfiles Methods create POST /v1beta1/{parent}/connectionProfiles Creates a new connection profile in a given project and location. delete DELETE /v1beta1/{name} Deletes a single Database Migration Service connection profile. get GET /v1beta1/{name} Gets details of a single connection profile. getIamPolicy GET /v1beta1/{resource}:getIamPolicy Gets the access control policy for a resource. list GET /v1beta1/{parent}/connectionProfiles Retrieve a list of all connection profiles in a given project and location. patch PATCH /v1beta1/{connectionProfile.name} Update the configuration of a single connection profile. setIamPolicy POST /v1beta1/{resource}:setIamPolicy Sets the access control policy on the specified resource. testIamPermissions POST /v1beta1/{resource}:testIamPermissions Returns permissions that a caller has on the specified resource.
- REST Resource: v1.projects.locations.connectionProfiles Methods create POST /v1/{parent}/connectionProfiles Creates a new connection profile in a given project and location. delete DELETE /v1/{name} Deletes a single Database Migration Service connection profile. get GET /v1/{name} Gets details of a single connection profile. getIamPolicy GET /v1/{resource}:getIamPolicy Gets the access control policy for a resource. list GET /v1/{parent}/connectionProfiles Retrieves a list of all connection profiles in a given project and location. patch PATCH /v1/{connectionProfile.name} Update the configuration of a single connection profile. setIamPolicy POST /v1/{resource}:setIamPolicy Sets the access control policy on the specified resource. testIamPermissions POST /v1/{resource}:testIamPermissions Returns permissions that a caller has on the specified resource.

