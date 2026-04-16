---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:22.254Z"
product_name: "Cloud Database Migration Service"
product_slug: "cloud-database-migration-service"
feature_name: "Migration jobs to externally provisioned destinations"
feature_slug: "migration-jobs-to-externally-provisioned-destinations"
latest_feature_date: "2023-12-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/list_migration_jobs"
  - "https://docs.cloud.google.com/database-migration/docs/custom-constraints"
  - "https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/stop_migration_job"
  - "https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/get_migration_job"
keywords:
  - "migration"
  - "jobs"
  - "to"
  - "externally"
  - "provisioned"
  - "destinations"
  - "you"
  - "can"
---

# Migration jobs to externally provisioned destinations

Product: Cloud Database Migration Service
Coverage: MEDIUM

## Step 02 Summary

You can now migrate MySQL and PostgreSQL databases to Cloud SQL instances or AlloyDB clusters that were created outside Database Migration Service.

## Extended Definition

You can now migrate MySQL and PostgreSQL databases to Cloud SQL instances or AlloyDB clusters that were created outside Database Migration Service.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/list_migration_jobs](https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/list_migration_jobs)
- [https://docs.cloud.google.com/database-migration/docs/custom-constraints](https://docs.cloud.google.com/database-migration/docs/custom-constraints)
- [https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/stop_migration_job](https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/stop_migration_job)
- [https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/get_migration_job](https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/get_migration_job)

## Supporting Pages

### "MCP Tools Reference: datamigration \_|\_ Database Migration Service \_|\_\

- URL: [https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/list_migration_jobs](https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/list_migration_jobs)
- Source ID: `site-api-reference`
- Final score: 219
- Re-rank relevance: N/A

Evidence snippets:
- You can specify in the 'page size' parameter the maximum number of migration jobs to return.
- MigrationJob JSON representation { "name" : string , "createTime" : string , "updateTime" : string , "labels" : { string : string , ... } , "displayName" : string , "state" : enum ( State ) , "phase" : enum ( Phase ) , "type" : enum ( Type ) , "dumpPath" : string , "dumpFlags" : { object ( DumpFlags ) } , "source" : string , "destination" : string , "duration" : string , "error" : { object ( Status ) } , "sourceDatabase" : { object ( DatabaseType ) } , "destinationDatabase" : { object ( DatabaseType ) } , "endTime" : string , "conversionWorkspace" : { object ( ConversionWorkspaceInfo ) } , "filter" : string , "cmekKeyName" : string , "performanceConfig" : { object ( PerformanceConfig ) } , "postgresHomogeneousConfig" : { object ( PostgresHomogeneousConfig ) } , "sqlserverHomogeneousMigrationJobConfig" : { object ( SqlServerHomogeneousMigrationJobConfig ) } , "dumpType" : enum ( DumpType ) , "objectsConfig" : { object ( MigrationJobObjectsConfig ) } , "purpose" : enum ( Purpose ) , "originalMigrationName" : string , // Union field connectivity can be only one of the following: "reverseSshConnectivity" : { object ( ReverseSshConnectivity ) } , "vpcPeeringConnectivity" : { object ( VpcPeeringConnectivity ) } , "staticIpConnectivity" : { object ( StaticIpConnectivity ) } // End of list of possible types for union field connectivity . // Union field config can be only one of the following: "oracleToPostgresConfig" : { object ( OracleToPostgresConfig ) } , "sqlserverToPostgresConfig" : { object ( SqlServerToPostgresConfig ) } , "postgresToSqlserverConfig" : { object ( PostgresToSqlServerConfig ) } // End of list of possible types for union field config . // Union field satisfies pzs can be only one of the following: "satisfiesPzs" : boolean // End of list of possible types for union field satisfies pzs . // Union field satisfies pzi can be only one of the following: "satisfiesPzi" : boolean // End of list of possible types for union field satisfies pzi . } Fields name string The name (URI) of this migration job resource, in the form of: projects/{project}/locations/{location}/migrationJobs/{migrationJob}. createTime string ( Timestamp format) Output only.
- ListMigrationJobsResponse JSON representation { "migrationJobs" : [ { object ( MigrationJob ) } ] , "nextPageToken" : string , "unreachable" : [ string ] } Fields migrationJobs[] object ( MigrationJob ) The list of migration jobs objects. nextPageToken string A token which can be sent as page token to retrieve the next page.
- If there are more than 80 such jobs, a next page token value (like CgtteS1qb2IxM ) will be returned and you can use it in the next call to retrieve the next page of results.

### "Create custom organization policy constraints \_|\_ Database Migration Service\

- URL: [https://docs.cloud.google.com/database-migration/docs/custom-constraints](https://docs.cloud.google.com/database-migration/docs/custom-constraints)
- Source ID: `site-docs-root-2`
- Final score: 204
- Re-rank relevance: N/A

Evidence snippets:
- Before you begin, make note of the following: Your organization ID A project ID Create the constraint Save the following file as constraint-dms-migrationjob-type.yaml : name : organizations/ ORGANIZATION ID /customConstraints/custom.restrictDmsMigrationJobType resourceTypes : - datamigration.googleapis.com/MigrationJob methodTypes : - CREATE - UPDATE condition : "resource.type != 'CONTINUOUS'" actionType : DENY displayName : Restrict migration job type description : All new migration jobs must be of type CONTINUOUS This defines a constraint where every new or updated migration job must have a type equal to CONTINUOUS .
- Description Constraint syntax Restrict migration job type Ensures all new migration jobs are continuous. name : organizations/ ORGANIZATION ID /customConstraints/custom.restrictDmsMigrationJobType resourceTypes : - datamigration.googleapis.com/MigrationJob methodTypes : - CREATE - UPDATE condition : "resource.type != 'CONTINUOUS'" actionType : DENY displayName : Restrict migration job type description : All new migration jobs must be of type CONTINUOUS Restrict connection profile engines Ensures only PostgreSQL connection profiles can be created.
- Database Migration Service supported resources The following table lists the Database Migration Service resources that you can reference in custom constraints.
- For example, you can restrict the types of migration jobs, the engine types for connection profiles, or the networks used for private connections.

### "MCP Tools Reference: datamigration \_|\_ Database Migration Service \_|\_\

- URL: [https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/stop_migration_job](https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/stop_migration_job)
- Source ID: `site-api-reference`
- Final score: 203
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Databases Database Migration Service APIs and reference Send feedback MCP Tools Reference: datamigration Stay organized with collections Save and categorize content based on your preferences.
- Curl Request curl --location 'https://datamigration.googleapis.com/mcp' \ --header 'content-type: application/json' \ --header 'accept: application/json, text/event-stream' \ --data '{ "method": "tools/call", "params": { "name": "stop migration job", "arguments": { // provide these details according to the tool' s MCP specification } } , "jsonrpc" : "2.0" , "id" : 1 } ' Input Schema Request message for 'StopMigrationJob' request.
- Example: type.googleapis.com/google.protobuf.StringValue This string must contain at least one / character, and the content after the last / must be the fully-qualified name of the type in canonical form, without a leading dot.
- The resource name parameter is in the form: projects/{project name}/locations/{location}/migrationJobs/{migration job name} , for example: projects/my-project/locations/us-central1/migrationJobs/my-migration-job .

### "MCP Tools Reference: datamigration \_|\_ Database Migration Service \_|\_\

- URL: [https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/get_migration_job](https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/get_migration_job)
- Source ID: `site-api-reference`
- Final score: 193
- Re-rank relevance: N/A

Evidence snippets:
- MigrationJob JSON representation { "name" : string , "createTime" : string , "updateTime" : string , "labels" : { string : string , ... } , "displayName" : string , "state" : enum ( State ) , "phase" : enum ( Phase ) , "type" : enum ( Type ) , "dumpPath" : string , "dumpFlags" : { object ( DumpFlags ) } , "source" : string , "destination" : string , "duration" : string , "error" : { object ( Status ) } , "sourceDatabase" : { object ( DatabaseType ) } , "destinationDatabase" : { object ( DatabaseType ) } , "endTime" : string , "conversionWorkspace" : { object ( ConversionWorkspaceInfo ) } , "filter" : string , "cmekKeyName" : string , "performanceConfig" : { object ( PerformanceConfig ) } , "postgresHomogeneousConfig" : { object ( PostgresHomogeneousConfig ) } , "sqlserverHomogeneousMigrationJobConfig" : { object ( SqlServerHomogeneousMigrationJobConfig ) } , "dumpType" : enum ( DumpType ) , "objectsConfig" : { object ( MigrationJobObjectsConfig ) } , "purpose" : enum ( Purpose ) , "originalMigrationName" : string , // Union field connectivity can be only one of the following: "reverseSshConnectivity" : { object ( ReverseSshConnectivity ) } , "vpcPeeringConnectivity" : { object ( VpcPeeringConnectivity ) } , "staticIpConnectivity" : { object ( StaticIpConnectivity ) } // End of list of possible types for union field connectivity . // Union field config can be only one of the following: "oracleToPostgresConfig" : { object ( OracleToPostgresConfig ) } , "sqlserverToPostgresConfig" : { object ( SqlServerToPostgresConfig ) } , "postgresToSqlserverConfig" : { object ( PostgresToSqlServerConfig ) } // End of list of possible types for union field config . // Union field satisfies pzs can be only one of the following: "satisfiesPzs" : boolean // End of list of possible types for union field satisfies pzs . // Union field satisfies pzi can be only one of the following: "satisfiesPzi" : boolean // End of list of possible types for union field satisfies pzi . } Fields name string The name (URI) of this migration job resource, in the form of: projects/{project}/locations/{location}/migrationJobs/{migrationJob}. createTime string ( Timestamp format) Output only.
- Configuration for migration. config can be only one of the following: oracleToPostgresConfig object ( OracleToPostgresConfig ) Configuration for heterogeneous Oracle to Cloud SQL for PostgreSQL and Oracle to AlloyDB for PostgreSQL migrations. sqlserverToPostgresConfig object ( SqlServerToPostgresConfig ) Configuration for heterogeneous SQL Server to Cloud SQL for PostgreSQL migrations. postgresToSqlserverConfig object ( PostgresToSqlServerConfig ) Configuration for heterogeneous failback migrations from PostgreSQL to SQL Server .
- Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" . conversionWorkspace object ( ConversionWorkspaceInfo ) The conversion workspace used by the migration. filter string This field can be used to select the entities to migrate as part of the migration job.
- This field should not be set on migration-jobs that are not associated with a conversion workspace. cmekKeyName string The CMEK (customer-managed encryption key) fully qualified key name used for the migration job.

