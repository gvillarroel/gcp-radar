---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:04.985Z"
product_name: "Oracle Database@Google Cloud"
product_slug: "oracle-database-google-cloud"
feature_name: "Autonomous Database Service availability in asia-northeast2"
feature_slug: "autonomous-database-service-availability-in-asia-northeast2"
latest_feature_date: "2026-02-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/oracle/database/docs/reference/rest/v1/projects.locations.autonomousDatabaseBackups/list"
  - "https://docs.cloud.google.com/oracle/database/docs/available-configurations"
  - "https://docs.cloud.google.com/oracle/database/docs/reference/rest/v1/projects.locations.autonomousDatabases"
  - "https://docs.cloud.google.com/oracle/database/docs/reference/rest/v1/projects.locations.autonomousDatabases/list"
keywords:
  - "autonomous"
  - "database"
  - "availability"
  - "in"
  - "asia"
  - "northeast2"
  - "is"
  - "available"
---

# Autonomous Database Service availability in asia-northeast2

Product: Oracle Database@Google Cloud
Coverage: MEDIUM

## Step 02 Summary

Autonomous Database Service is available in the asia-northeast2 location.

## Extended Definition

Autonomous Database Service is available in the asia-northeast2 location.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/oracle/database/docs/reference/rest/v1/projects.locations.autonomousDatabaseBackups/list](https://docs.cloud.google.com/oracle/database/docs/reference/rest/v1/projects.locations.autonomousDatabaseBackups/list)
- [https://docs.cloud.google.com/oracle/database/docs/available-configurations](https://docs.cloud.google.com/oracle/database/docs/available-configurations)
- [https://docs.cloud.google.com/oracle/database/docs/reference/rest/v1/projects.locations.autonomousDatabases](https://docs.cloud.google.com/oracle/database/docs/reference/rest/v1/projects.locations.autonomousDatabases)
- [https://docs.cloud.google.com/oracle/database/docs/reference/rest/v1/projects.locations.autonomousDatabases/list](https://docs.cloud.google.com/oracle/database/docs/reference/rest/v1/projects.locations.autonomousDatabases/list)

## Supporting Pages

### "Method: projects.locations.autonomousDatabaseBackups.list \_|\_ Oracle Database\

- URL: [https://docs.cloud.google.com/oracle/database/docs/reference/rest/v1/projects.locations.autonomousDatabaseBackups/list](https://docs.cloud.google.com/oracle/database/docs/reference/rest/v1/projects.locations.autonomousDatabaseBackups/list)
- Source ID: `site-api-reference`
- Final score: 217
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If successful, the response body contains data with the following structure: JSON representation { "autonomousDatabaseBackups" : [ { object ( AutonomousDatabaseBackup ) } ] , "nextPageToken" : string } Fields autonomousDatabaseBackups[] object ( AutonomousDatabaseBackup ) The list of Autonomous Database Backups. nextPageToken string A token identifying a page of results the server should return.
- IAM Permissions Requires the following IAM permission on the parent resource: oracledatabase.autonomousDatabaseBackups.list For more information, see the IAM documentation .
- HTTP request GET https://oracledatabase.googleapis.com/v1/{parent=projects/ /locations/ }/autonomousDatabaseBackups The URL uses gRPC Transcoding syntax.
- Only the autonomousDatabaseId field is supported in the following format: autonomousDatabaseId="{autonomousDatabaseId}" .

### "Supported regions and zones \_|\_ Oracle Database at Google Cloud \_|\_\

- URL: [https://docs.cloud.google.com/oracle/database/docs/available-configurations](https://docs.cloud.google.com/oracle/database/docs/available-configurations)
- Source ID: `site-docs-reference`
- Final score: 214
- Re-rank relevance: N/A

Evidence snippets:
- Available regions and zones Oracle Database@Google Cloud is available in the following regions based on your selected Oracle Cloud Infrastructure (OCI) service type: Exadata Database Service Base Database Service Exadata Database Service on Exascale Infrastructure Autonomous AI Database Service Exadata Database Service regions and zones You can create Exadata Database and Exadata VM Clusters resources in the following regions and zones: Region Name Region Description Zone Asia Pacific asia-northeast1 Tokyo, Japan asia-northeast1-a-r1 asia-northeast2 Osaka, Japan asia-northeast2-a-r1 australia-southeast1 Sydney, Australia australia-southeast1-b-r1 australia-southeast2 Melbourne, Australia australia-southeast2-a-r2 australia-southeast2-b-r1 asia-south1 Mumbai, India asia-south1-b-r1 asia-south2 Delhi, India asia-south2-b-r1 North America northamerica-northeast1 Montréal, Québec, Canada northamerica-northeast1-a-r1 northamerica-northeast2 Toronto, Ontario, Canada northamerica-northeast2-a-r2 us-central1 Iowa us-central1-a-r1 us-east4 Northern Virginia us-east4-a-r2 us-east4-b-r1 us-west3 Salt Lake City us-west3-a-r1 South America southamerica-east1 São Paulo, Brazil, South America southamerica-east1-a-r1 Europe europe-west2 London , England europe-west2-a-r1 europe-west2-c-r2 Low CO 2 europe-west3 Frankfurt, Germany europe-west3-a-r2 europe-west3-b-r1 europe-west8 Milan, Italy europe-west8-b-r1 europe-west8-a-r1 Exadata Database Service on Exascale Infrastructure regions and zones You can create Exascale VM Clusters and Exascale Storage Vaults in the following regions and zones: Region Name Region Description Zone Asia Pacific asia-northeast1 Tokyo, Japan asia-northeast1-a-r1 North America northamerica-northeast1 Montréal, Québec, Canada northamerica-northeast1-a-r1 us-central1 Iowa us-central1-a-r1 us-east4 Northern Virginia us-east4-a-r2 us-east4-b-r1 us-west3 Salt Lake City us-west3-a-r1 Europe europe-west2 London europe-west2-a-r1 europe-west2-c-r2 Low CO 2 europe-west3 Frankfurt europe-west3-b-r1 Base Database Service regions and zones You can create DB systems resources in the following regions and zones: Region Name Region Description Zone Asia Pacific asia-northeast1 Tokyo, Japan asia-northeast1-a-r1 North America northamerica-northeast1 Montréal, Québec, Canada northamerica-northeast1-a-r1 us-central1 Iowa us-central1-a-r1 us-east4 Northern Virginia us-east4-a-r2 us-east4-b-r1 us-west3 Salt Lake City us-west3-a-r1 Europe europe-west2 London europe-west2-a-r1 europe-west2-c-r2 Low CO 2 europe-west3 Frankfurt europe-west3-b-r1 Autonomous AI Database Service regions You can create Autonomous AI Database resources in the following regions: Region Name Region Description Asia Pacific asia-northeast1 Tokyo, Japan asia-northeast2 Osaka, Japan australia-southeast1 Sydney, Australia australia-southeast2 Melbourne, Australia asia-south1 Mumbai, India asia-south2 Delhi, India North America northamerica-northeast1 Montréal, Québec, Canada northamerica-northeast2 Toronto, Ontario, Canada us-central1 Iowa us-east4 Northern Virginia us-west3 Salt Lake City South America southamerica-east1 São Paulo, Brazil, South America Europe europe-west2 London, England Low CO 2 europe-west3 Frankfurt, Germany europe-west8 Milan, Italy What's next?
- The following Oracle Database@Google Cloud resources are regional resources: Autonomous AI Databases The following Oracle Database@Google Cloud resources are zonal resources: Exadata Infrastructures Exadata VM Clusters Exascale VM Clusters and Exascale Storage Vaults ODB Networks and ODB Subnets DB systems Choosing a region and zone You choose which region or zone hosts your resources, which controls where your data is stored and used.
- Place an order for Oracle Database@Google Cloud Create Exadata Infrastructure instances Create Exadata VM Clusters Create Exascale VM Clusters Create Autonomous AI Database resources Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]

### "REST Resource: projects.locations.autonomousDatabases \_|\_ Oracle Database\

- URL: [https://docs.cloud.google.com/oracle/database/docs/reference/rest/v1/projects.locations.autonomousDatabases](https://docs.cloud.google.com/oracle/database/docs/reference/rest/v1/projects.locations.autonomousDatabases)
- Source ID: `site-api-reference`
- Final score: 210
- Re-rank relevance: N/A

Evidence snippets:
- JSON representation { "ocid" : string , "computeCount" : number , "cpuCoreCount" : integer , "dataStorageSizeTb" : integer , "dataStorageSizeGb" : integer , "dbWorkload" : enum ( DBWorkload ) , "dbEdition" : enum ( DatabaseEdition ) , "characterSet" : string , "nCharacterSet" : string , "privateEndpointIp" : string , "privateEndpointLabel" : string , "dbVersion" : string , "isAutoScalingEnabled" : boolean , "isStorageAutoScalingEnabled" : boolean , "licenseType" : enum ( LicenseType ) , "customerContacts" : [ { object ( CustomerContact ) } ] , "secretId" : string , "vaultId" : string , "maintenanceScheduleType" : enum ( MaintenanceScheduleType ) , "mtlsConnectionRequired" : boolean , "backupRetentionPeriodDays" : integer , "actualUsedDataStorageSizeTb" : number , "allocatedStorageSizeTb" : number , "apexDetails" : { object ( AutonomousDatabaseApex ) } , "lifecycleDetails" : string , "state" : enum ( State ) , "autonomousContainerDatabaseId" : string , "availableUpgradeVersions" : [ string ] , "connectionStrings" : { object ( AutonomousDatabaseConnectionStrings ) } , "connectionUrls" : { object ( AutonomousDatabaseConnectionUrls ) } , "failedDataRecoveryDuration" : string , "memoryTableGbs" : integer , "isLocalDataGuardEnabled" : boolean , "localAdgAutoFailoverMaxDataLossLimit" : integer , "localStandbyDb" : { object ( AutonomousDatabaseStandbySummary ) } , "memoryPerOracleComputeUnitGbs" : integer , "localDisasterRecoveryType" : enum ( LocalDisasterRecoveryType ) , "dataSafeState" : enum ( DataSafeState ) , "databaseManagementState" : enum ( DatabaseManagementState ) , "openMode" : enum ( OpenMode ) , "operationsInsightsState" : enum ( OperationsInsightsState ) , "peerDbIds" : [ string ] , "permissionLevel" : enum ( PermissionLevel ) , "privateEndpoint" : string , "refreshableMode" : enum ( RefreshableMode ) , "refreshableState" : enum ( RefreshableState ) , "role" : enum ( Role ) , "scheduledOperationDetails" : [ { object ( ScheduledOperationDetails ) } ] , "sqlWebDeveloperUrl" : string , "supportedCloneRegions" : [ string ] , "usedDataStorageSizeTbs" : integer , "ociUrl" : string , "totalAutoBackupStorageSizeGbs" : number , "nextLongTermBackupTime" : string , "dataGuardRoleChangedTime" : string , "disasterRecoveryRoleChangedTime" : string , "maintenanceBeginTime" : string , "maintenanceEndTime" : string , "allowlistedIps" : [ string ] , "encryptionKey" : { object ( EncryptionKey ) } , "encryptionKeyHistoryEntries" : [ { object ( EncryptionKeyHistoryEntry ) } ] , "serviceAgentEmail" : string , "arePrimaryAllowlistedIpsUsed" : boolean } Fields ocid string Output only.
- The list of available Oracle Database upgrade versions for an Autonomous Database. connectionStrings object ( AutonomousDatabaseConnectionStrings ) Output only.
- The list of available regions that can be used to create a clone for the Autonomous Database. usedDataStorageSizeTbs integer Output only.
- AVAILABLE NEEDS ATTENTION Indicates that the Autonomous Database is available but needs attention state.

### "Method: projects.locations.autonomousDatabases.list \_|\_ Oracle Database\

- URL: [https://docs.cloud.google.com/oracle/database/docs/reference/rest/v1/projects.locations.autonomousDatabases/list](https://docs.cloud.google.com/oracle/database/docs/reference/rest/v1/projects.locations.autonomousDatabases/list)
- Source ID: `site-api-reference`
- Final score: 209
- Re-rank relevance: N/A

Evidence snippets:
- If successful, the response body contains data with the following structure: JSON representation { "autonomousDatabases" : [ { object ( AutonomousDatabase ) } ] , "nextPageToken" : string } Fields autonomousDatabases[] object ( AutonomousDatabase ) The list of Autonomous Databases. nextPageToken string A token identifying a page of results the server should return.
- HTTP request Path parameters Query parameters Request body Response body JSON representation Authorization scopes IAM Permissions Lists the Autonomous Databases in a given project and location.
- IAM Permissions Requires the following IAM permission on the parent resource: oracledatabase.autonomousDatabases.list For more information, see the IAM documentation .
- HTTP request GET https://oracledatabase.googleapis.com/v1/{parent=projects/ /locations/ }/autonomousDatabases The URL uses gRPC Transcoding syntax.

