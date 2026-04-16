---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:05.007Z"
product_name: "Oracle Database@Google Cloud"
product_slug: "oracle-database-google-cloud"
feature_name: "Autonomous Database Service on Google Cloud"
feature_slug: "autonomous-database-service-on-google-cloud"
latest_feature_date: "2024-09-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/oracle/database/docs/reference/rest/v1/projects.locations.autonomousDatabases"
  - "https://docs.cloud.google.com/oracle/database/docs/reference/rest/v1/projects.locations.autonomousDatabaseBackups/list"
  - "https://docs.cloud.google.com/oracle/database/docs/reference/rest/v1/projects.locations.autonomousDatabases/create"
  - "https://docs.cloud.google.com/oracle/database/docs/reference/rest/v1/projects.locations.autonomousDatabases/delete"
keywords:
  - "autonomous"
  - "database"
  - "on"
  - "oracle"
  - "supports"
---

# Autonomous Database Service on Google Cloud

Product: Oracle Database@Google Cloud
Coverage: MEDIUM

## Step 02 Summary

Oracle Database@Google Cloud supports Autonomous Database Service on Google Cloud.

## Extended Definition

Oracle Database@Google Cloud supports Autonomous Database Service on Google Cloud.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/oracle/database/docs/reference/rest/v1/projects.locations.autonomousDatabases](https://docs.cloud.google.com/oracle/database/docs/reference/rest/v1/projects.locations.autonomousDatabases)
- [https://docs.cloud.google.com/oracle/database/docs/reference/rest/v1/projects.locations.autonomousDatabaseBackups/list](https://docs.cloud.google.com/oracle/database/docs/reference/rest/v1/projects.locations.autonomousDatabaseBackups/list)
- [https://docs.cloud.google.com/oracle/database/docs/reference/rest/v1/projects.locations.autonomousDatabases/create](https://docs.cloud.google.com/oracle/database/docs/reference/rest/v1/projects.locations.autonomousDatabases/create)
- [https://docs.cloud.google.com/oracle/database/docs/reference/rest/v1/projects.locations.autonomousDatabases/delete](https://docs.cloud.google.com/oracle/database/docs/reference/rest/v1/projects.locations.autonomousDatabases/delete)

## Supporting Pages

### "REST Resource: projects.locations.autonomousDatabases \_|\_ Oracle Database\

- URL: [https://docs.cloud.google.com/oracle/database/docs/reference/rest/v1/projects.locations.autonomousDatabases](https://docs.cloud.google.com/oracle/database/docs/reference/rest/v1/projects.locations.autonomousDatabases)
- Source ID: `site-api-reference`
- Final score: 288
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- JSON representation { "ocid" : string , "computeCount" : number , "cpuCoreCount" : integer , "dataStorageSizeTb" : integer , "dataStorageSizeGb" : integer , "dbWorkload" : enum ( DBWorkload ) , "dbEdition" : enum ( DatabaseEdition ) , "characterSet" : string , "nCharacterSet" : string , "privateEndpointIp" : string , "privateEndpointLabel" : string , "dbVersion" : string , "isAutoScalingEnabled" : boolean , "isStorageAutoScalingEnabled" : boolean , "licenseType" : enum ( LicenseType ) , "customerContacts" : [ { object ( CustomerContact ) } ] , "secretId" : string , "vaultId" : string , "maintenanceScheduleType" : enum ( MaintenanceScheduleType ) , "mtlsConnectionRequired" : boolean , "backupRetentionPeriodDays" : integer , "actualUsedDataStorageSizeTb" : number , "allocatedStorageSizeTb" : number , "apexDetails" : { object ( AutonomousDatabaseApex ) } , "lifecycleDetails" : string , "state" : enum ( State ) , "autonomousContainerDatabaseId" : string , "availableUpgradeVersions" : [ string ] , "connectionStrings" : { object ( AutonomousDatabaseConnectionStrings ) } , "connectionUrls" : { object ( AutonomousDatabaseConnectionUrls ) } , "failedDataRecoveryDuration" : string , "memoryTableGbs" : integer , "isLocalDataGuardEnabled" : boolean , "localAdgAutoFailoverMaxDataLossLimit" : integer , "localStandbyDb" : { object ( AutonomousDatabaseStandbySummary ) } , "memoryPerOracleComputeUnitGbs" : integer , "localDisasterRecoveryType" : enum ( LocalDisasterRecoveryType ) , "dataSafeState" : enum ( DataSafeState ) , "databaseManagementState" : enum ( DatabaseManagementState ) , "openMode" : enum ( OpenMode ) , "operationsInsightsState" : enum ( OperationsInsightsState ) , "peerDbIds" : [ string ] , "permissionLevel" : enum ( PermissionLevel ) , "privateEndpoint" : string , "refreshableMode" : enum ( RefreshableMode ) , "refreshableState" : enum ( RefreshableState ) , "role" : enum ( Role ) , "scheduledOperationDetails" : [ { object ( ScheduledOperationDetails ) } ] , "sqlWebDeveloperUrl" : string , "supportedCloneRegions" : [ string ] , "usedDataStorageSizeTbs" : integer , "ociUrl" : string , "totalAutoBackupStorageSizeGbs" : number , "nextLongTermBackupTime" : string , "dataGuardRoleChangedTime" : string , "disasterRecoveryRoleChangedTime" : string , "maintenanceBeginTime" : string , "maintenanceEndTime" : string , "allowlistedIps" : [ string ] , "encryptionKey" : { object ( EncryptionKey ) } , "encryptionKeyHistoryEntries" : [ { object ( EncryptionKeyHistoryEntry ) } ] , "serviceAgentEmail" : string , "arePrimaryAllowlistedIpsUsed" : boolean } Fields ocid string Output only.
- Resource: AutonomousDatabase JSON representation AutonomousDatabaseProperties JSON representation DatabaseEdition LicenseType MaintenanceScheduleType AutonomousDatabaseApex JSON representation State AutonomousDatabaseConnectionStrings JSON representation AllConnectionStrings JSON representation DatabaseConnectionStringProfile JSON representation ConsumerGroup HostFormat Protocol SessionMode SyntaxFormat TLSAuthentication AutonomousDatabaseConnectionUrls JSON representation AutonomousDatabaseStandbySummary JSON representation LocalDisasterRecoveryType DataSafeState DatabaseManagementState OpenMode OperationsInsightsState PermissionLevel RefreshableMode RefreshableState Role ScheduledOperationDetails JSON representation TimeOfDay JSON representation EncryptionKey JSON representation Provider EncryptionKeyHistoryEntry JSON representation SourceConfig JSON representation Methods Resource: AutonomousDatabase Details of the Autonomous Database resource. https://docs.oracle.com/en-us/iaas/api/#/en/database/20160918/AutonomousDatabase/ JSON representation { "name" : string , "database" : string , "displayName" : string , "entitlementId" : string , "adminPassword" : string , "properties" : { object ( AutonomousDatabaseProperties ) } , "labels" : { string : string , ... } , "network" : string , "cidr" : string , "odbNetwork" : string , "odbSubnet" : string , "sourceConfig" : { object ( SourceConfig ) } , "peerAutonomousDatabases" : [ string ] , "createTime" : string , "disasterRecoverySupportedLocations" : [ string ] } Fields name string Identifier.
- SERVER Server MUTUAL Mutual AutonomousDatabaseConnectionUrls The URLs for accessing Oracle Application Express (APEX) and SQL Developer Web with a browser from a Compute instance. https://docs.oracle.com/en-us/iaas/api/#/en/database/20160918/datatypes/AutonomousDatabaseConnectionUrls JSON representation { "apexUri" : string , "databaseTransformsUri" : string , "graphStudioUri" : string , "machineLearningNotebookUri" : string , "machineLearningUserManagementUri" : string , "mongoDbUri" : string , "ordsUri" : string , "sqlDevWebUri" : string } Fields apexUri string Output only.
- AutonomousDatabaseConnectionStrings The connection string used to connect to the Autonomous Database. https://docs.oracle.com/en-us/iaas/api/#/en/database/20160918/datatypes/AutonomousDatabaseConnectionStrings JSON representation { "allConnectionStrings" : { object ( AllConnectionStrings ) } , "dedicated" : string , "high" : string , "low" : string , "medium" : string , "profiles" : [ { object ( DatabaseConnectionStringProfile ) } ] } Fields allConnectionStrings object ( AllConnectionStrings ) Output only.

### "Method: projects.locations.autonomousDatabaseBackups.list \_|\_ Oracle Database\

- URL: [https://docs.cloud.google.com/oracle/database/docs/reference/rest/v1/projects.locations.autonomousDatabaseBackups/list](https://docs.cloud.google.com/oracle/database/docs/reference/rest/v1/projects.locations.autonomousDatabaseBackups/list)
- Source ID: `site-api-reference`
- Final score: 275
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Databases Oracle Database at Google Cloud Reference Send feedback Method: projects.locations.autonomousDatabaseBackups.list Stay organized with collections Save and categorize content based on your preferences.
- IAM Permissions Requires the following IAM permission on the parent resource: oracledatabase.autonomousDatabaseBackups.list For more information, see the IAM documentation .
- HTTP request GET https://oracledatabase.googleapis.com/v1/{parent=projects/ /locations/ }/autonomousDatabaseBackups The URL uses gRPC Transcoding syntax.
- If successful, the response body contains data with the following structure: JSON representation { "autonomousDatabaseBackups" : [ { object ( AutonomousDatabaseBackup ) } ] , "nextPageToken" : string } Fields autonomousDatabaseBackups[] object ( AutonomousDatabaseBackup ) The list of Autonomous Database Backups. nextPageToken string A token identifying a page of results the server should return.

### "Method: projects.locations.autonomousDatabases.create \_|\_ Oracle Database\

- URL: [https://docs.cloud.google.com/oracle/database/docs/reference/rest/v1/projects.locations.autonomousDatabases/create](https://docs.cloud.google.com/oracle/database/docs/reference/rest/v1/projects.locations.autonomousDatabases/create)
- Source ID: `site-api-reference`
- Final score: 275
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Databases Oracle Database at Google Cloud Reference Send feedback Method: projects.locations.autonomousDatabases.create Stay organized with collections Save and categorize content based on your preferences.
- IAM Permissions Requires the following IAM permission on the parent resource: oracledatabase.autonomousDatabases.create For more information, see the IAM documentation .
- HTTP request POST https://oracledatabase.googleapis.com/v1/{parent=projects/ /locations/ }/autonomousDatabases The URL uses gRPC Transcoding syntax.
- HTTP request Path parameters Query parameters Request body Response body Authorization scopes IAM Permissions Creates a new Autonomous Database in a given project and location.

### "Method: projects.locations.autonomousDatabases.delete \_|\_ Oracle Database\

- URL: [https://docs.cloud.google.com/oracle/database/docs/reference/rest/v1/projects.locations.autonomousDatabases/delete](https://docs.cloud.google.com/oracle/database/docs/reference/rest/v1/projects.locations.autonomousDatabases/delete)
- Source ID: `site-api-reference`
- Final score: 275
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Databases Oracle Database at Google Cloud Reference Send feedback Method: projects.locations.autonomousDatabases.delete Stay organized with collections Save and categorize content based on your preferences.
- IAM Permissions Requires the following IAM permission on the name resource: oracledatabase.autonomousDatabases.delete For more information, see the IAM documentation .
- HTTP request DELETE https://oracledatabase.googleapis.com/v1/{name=projects/ /locations/ /autonomousDatabases/ } The URL uses gRPC Transcoding syntax.
- HTTP request Path parameters Query parameters Request body Response body Authorization scopes IAM Permissions Deletes a single Autonomous Database.

