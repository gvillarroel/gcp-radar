---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:22.256Z"
product_name: "Cloud Database Migration Service"
product_slug: "cloud-database-migration-service"
feature_name: "Cloud Database Migration Service CMEK support with Cloud External Key Manager"
feature_slug: "cloud-database-migration-service-cmek-support-with-cloud-external-key-manager"
latest_feature_date: "2023-09-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/database-migration/docs/security-and-encryption"
  - "https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/get_migration_job"
  - "https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/list_migration_jobs"
  - "https://docs.cloud.google.com/database-migration/docs/use-database-migration-service-mcp"
keywords:
  - "database"
  - "migration"
  - "cmek"
  - "with"
  - "external"
  - "key"
  - "manager"
  - "supports"
---

# Cloud Database Migration Service CMEK support with Cloud External Key Manager

Product: Cloud Database Migration Service
Coverage: MEDIUM

## Step 02 Summary

Cloud Database Migration Service supports customer-managed encryption keys (CMEK) using externally managed keys from Cloud External Key Manager.

## Extended Definition

Cloud Database Migration Service supports customer-managed encryption keys (CMEK) using externally managed keys from Cloud External Key Manager.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/database-migration/docs/security-and-encryption](https://docs.cloud.google.com/database-migration/docs/security-and-encryption)
- [https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/get_migration_job](https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/get_migration_job)
- [https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/list_migration_jobs](https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/list_migration_jobs)
- [https://docs.cloud.google.com/database-migration/docs/use-database-migration-service-mcp](https://docs.cloud.google.com/database-migration/docs/use-database-migration-service-mcp)

## Supporting Pages

### "Security and encryption \_|\_ Database Migration Service \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/database-migration/docs/security-and-encryption](https://docs.cloud.google.com/database-migration/docs/security-and-encryption)
- Source ID: `site-docs-root-2`
- Final score: 236
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information, see IAM authentication Secure heterogeneous migrations Select your heterogeneous migration scenario to view security and encryption options that your migration supports: Oracle to Cloud SQL for PostgreSQL CMEK Database Migration Service supports CMEK in the migration job to secure the data at rest.
- SQL Server to Cloud SQL for PostgreSQL CMEK Database Migration Service supports CMEK in the migration job to secure the data at rest.
- SQL Server to AlloyDB for PostgreSQL CMEK Database Migration Service supports CMEK in the migration job to secure the data at rest.
- Oracle to AlloyDB for PostgreSQL CMEK Database Migration Service supports CMEK in the migration job to secure the data at rest.

### "MCP Tools Reference: datamigration \_|\_ Database Migration Service \_|\_\

- URL: [https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/get_migration_job](https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/get_migration_job)
- Source ID: `site-api-reference`
- Final score: 234
- Re-rank relevance: N/A

Evidence snippets:
- MigrationJob JSON representation { "name" : string , "createTime" : string , "updateTime" : string , "labels" : { string : string , ... } , "displayName" : string , "state" : enum ( State ) , "phase" : enum ( Phase ) , "type" : enum ( Type ) , "dumpPath" : string , "dumpFlags" : { object ( DumpFlags ) } , "source" : string , "destination" : string , "duration" : string , "error" : { object ( Status ) } , "sourceDatabase" : { object ( DatabaseType ) } , "destinationDatabase" : { object ( DatabaseType ) } , "endTime" : string , "conversionWorkspace" : { object ( ConversionWorkspaceInfo ) } , "filter" : string , "cmekKeyName" : string , "performanceConfig" : { object ( PerformanceConfig ) } , "postgresHomogeneousConfig" : { object ( PostgresHomogeneousConfig ) } , "sqlserverHomogeneousMigrationJobConfig" : { object ( SqlServerHomogeneousMigrationJobConfig ) } , "dumpType" : enum ( DumpType ) , "objectsConfig" : { object ( MigrationJobObjectsConfig ) } , "purpose" : enum ( Purpose ) , "originalMigrationName" : string , // Union field connectivity can be only one of the following: "reverseSshConnectivity" : { object ( ReverseSshConnectivity ) } , "vpcPeeringConnectivity" : { object ( VpcPeeringConnectivity ) } , "staticIpConnectivity" : { object ( StaticIpConnectivity ) } // End of list of possible types for union field connectivity . // Union field config can be only one of the following: "oracleToPostgresConfig" : { object ( OracleToPostgresConfig ) } , "sqlserverToPostgresConfig" : { object ( SqlServerToPostgresConfig ) } , "postgresToSqlserverConfig" : { object ( PostgresToSqlServerConfig ) } // End of list of possible types for union field config . // Union field satisfies pzs can be only one of the following: "satisfiesPzs" : boolean // End of list of possible types for union field satisfies pzs . // Union field satisfies pzi can be only one of the following: "satisfiesPzi" : boolean // End of list of possible types for union field satisfies pzi . } Fields name string The name (URI) of this migration job resource, in the form of: projects/{project}/locations/{location}/migrationJobs/{migrationJob}. createTime string ( Timestamp format) Output only.
- This field should not be set on migration-jobs that are not associated with a conversion workspace. cmekKeyName string The CMEK (customer-managed encryption key) fully qualified key name used for the migration job.
- Home Documentation Databases Database Migration Service APIs and reference Send feedback MCP Tools Reference: datamigration Stay organized with collections Save and categorize content based on your preferences.
- This field supports all migration jobs types except for: Mysql to Mysql (use the cmek field in the cloudsql connection profile instead).

### "MCP Tools Reference: datamigration \_|\_ Database Migration Service \_|\_\

- URL: [https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/list_migration_jobs](https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/list_migration_jobs)
- Source ID: `site-api-reference`
- Final score: 234
- Re-rank relevance: N/A

Evidence snippets:
- MigrationJob JSON representation { "name" : string , "createTime" : string , "updateTime" : string , "labels" : { string : string , ... } , "displayName" : string , "state" : enum ( State ) , "phase" : enum ( Phase ) , "type" : enum ( Type ) , "dumpPath" : string , "dumpFlags" : { object ( DumpFlags ) } , "source" : string , "destination" : string , "duration" : string , "error" : { object ( Status ) } , "sourceDatabase" : { object ( DatabaseType ) } , "destinationDatabase" : { object ( DatabaseType ) } , "endTime" : string , "conversionWorkspace" : { object ( ConversionWorkspaceInfo ) } , "filter" : string , "cmekKeyName" : string , "performanceConfig" : { object ( PerformanceConfig ) } , "postgresHomogeneousConfig" : { object ( PostgresHomogeneousConfig ) } , "sqlserverHomogeneousMigrationJobConfig" : { object ( SqlServerHomogeneousMigrationJobConfig ) } , "dumpType" : enum ( DumpType ) , "objectsConfig" : { object ( MigrationJobObjectsConfig ) } , "purpose" : enum ( Purpose ) , "originalMigrationName" : string , // Union field connectivity can be only one of the following: "reverseSshConnectivity" : { object ( ReverseSshConnectivity ) } , "vpcPeeringConnectivity" : { object ( VpcPeeringConnectivity ) } , "staticIpConnectivity" : { object ( StaticIpConnectivity ) } // End of list of possible types for union field connectivity . // Union field config can be only one of the following: "oracleToPostgresConfig" : { object ( OracleToPostgresConfig ) } , "sqlserverToPostgresConfig" : { object ( SqlServerToPostgresConfig ) } , "postgresToSqlserverConfig" : { object ( PostgresToSqlServerConfig ) } // End of list of possible types for union field config . // Union field satisfies pzs can be only one of the following: "satisfiesPzs" : boolean // End of list of possible types for union field satisfies pzs . // Union field satisfies pzi can be only one of the following: "satisfiesPzi" : boolean // End of list of possible types for union field satisfies pzi . } Fields name string The name (URI) of this migration job resource, in the form of: projects/{project}/locations/{location}/migrationJobs/{migrationJob}. createTime string ( Timestamp format) Output only.
- This field should not be set on migration-jobs that are not associated with a conversion workspace. cmekKeyName string The CMEK (customer-managed encryption key) fully qualified key name used for the migration job.
- Home Documentation Databases Database Migration Service APIs and reference Send feedback MCP Tools Reference: datamigration Stay organized with collections Save and categorize content based on your preferences.
- This field supports all migration jobs types except for: Mysql to Mysql (use the cmek field in the cloudsql connection profile instead).

### "Use the Database Migration Service remote MCP server \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/database-migration/docs/use-database-migration-service-mcp](https://docs.cloud.google.com/database-migration/docs/use-database-migration-service-mcp)
- Source ID: `site-docs-root-2`
- Final score: 224
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to to use the Database Migration Service remote MCP server: Make MCP tool calls: mcp.tools.call Database Migration Service resources: datamigration.migrationjobs.create datamigration.migrationjobs.delete datamigration.migrationjobs.get datamigration.migrationjobs.list datamigration.migrationjobs.resume datamigration.migrationjobs.start datamigration.migrationjobs.stop datamigration.operations.get You might also be able to get these permissions with custom roles or other predefined roles .
- This document shows you how to use the Database Migration Service remote Model Context Protocol (MCP) server to connect with AI applications including Gemini CLI, ChatGPT, Claude, and custom applications you are developing.
- Home Documentation Databases Database Migration Service Guides Send feedback Use the Database Migration Service remote MCP server Stay organized with collections Save and categorize content based on your preferences.
- Authentication and authorization The Database Migration Service remote MCP server uses the OAuth 2.0 protocol with Identity and Access Management (IAM) for authentication and authorization.

