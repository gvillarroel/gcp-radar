---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:05.007Z"
product_name: "Oracle Database@Google Cloud"
product_slug: "oracle-database-google-cloud"
feature_name: "Exadata Database Service on Google Cloud"
feature_slug: "exadata-database-service-on-google-cloud"
latest_feature_date: "2024-09-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/oracle/database/docs/reference/rest/v1/projects.locations.autonomousDatabases/patch"
  - "https://docs.cloud.google.com/oracle/database/docs/reference/rest/v1/projects.locations.autonomousDatabases"
  - "https://docs.cloud.google.com/oracle/database/docs/available-configurations"
  - "https://docs.cloud.google.com/oracle/database/docs/overview"
keywords:
  - "exadata"
  - "database"
  - "on"
  - "oracle"
  - "supports"
---

# Exadata Database Service on Google Cloud

Product: Oracle Database@Google Cloud
Coverage: MEDIUM

## Step 02 Summary

Oracle Database@Google Cloud supports Exadata Database Service on Google Cloud.

## Extended Definition

Oracle Database@Google Cloud supports Exadata Database Service on Google Cloud.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/oracle/database/docs/reference/rest/v1/projects.locations.autonomousDatabases/patch](https://docs.cloud.google.com/oracle/database/docs/reference/rest/v1/projects.locations.autonomousDatabases/patch)
- [https://docs.cloud.google.com/oracle/database/docs/reference/rest/v1/projects.locations.autonomousDatabases](https://docs.cloud.google.com/oracle/database/docs/reference/rest/v1/projects.locations.autonomousDatabases)
- [https://docs.cloud.google.com/oracle/database/docs/available-configurations](https://docs.cloud.google.com/oracle/database/docs/available-configurations)
- [https://docs.cloud.google.com/oracle/database/docs/overview](https://docs.cloud.google.com/oracle/database/docs/overview)

## Supporting Pages

### "Method: projects.locations.autonomousDatabases.patch \_|\_ Oracle Database\

- URL: [https://docs.cloud.google.com/oracle/database/docs/reference/rest/v1/projects.locations.autonomousDatabases/patch](https://docs.cloud.google.com/oracle/database/docs/reference/rest/v1/projects.locations.autonomousDatabases/patch)
- Source ID: `site-api-reference`
- Final score: 233
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Databases Oracle Database at Google Cloud Reference Send feedback Method: projects.locations.autonomousDatabases.patch Stay organized with collections Save and categorize content based on your preferences.
- HTTP request PATCH https://oracledatabase.googleapis.com/v1/{autonomousDatabase.name=projects/ /locations/ /autonomousDatabases/ } The URL uses gRPC Transcoding syntax.
- IAM Permissions Requires the following IAM permission on the name resource: oracledatabase.autonomousDatabases.update For more information, see the IAM documentation .
- The name of the Autonomous Database resource in the following format: projects/{project}/locations/{region}/autonomousDatabases/{autonomousDatabase} Query parameters Parameters updateMask string ( FieldMask format) Optional.

### "REST Resource: projects.locations.autonomousDatabases \_|\_ Oracle Database\

- URL: [https://docs.cloud.google.com/oracle/database/docs/reference/rest/v1/projects.locations.autonomousDatabases](https://docs.cloud.google.com/oracle/database/docs/reference/rest/v1/projects.locations.autonomousDatabases)
- Source ID: `site-api-reference`
- Final score: 229
- Re-rank relevance: N/A

Evidence snippets:
- JSON representation { "ocid" : string , "computeCount" : number , "cpuCoreCount" : integer , "dataStorageSizeTb" : integer , "dataStorageSizeGb" : integer , "dbWorkload" : enum ( DBWorkload ) , "dbEdition" : enum ( DatabaseEdition ) , "characterSet" : string , "nCharacterSet" : string , "privateEndpointIp" : string , "privateEndpointLabel" : string , "dbVersion" : string , "isAutoScalingEnabled" : boolean , "isStorageAutoScalingEnabled" : boolean , "licenseType" : enum ( LicenseType ) , "customerContacts" : [ { object ( CustomerContact ) } ] , "secretId" : string , "vaultId" : string , "maintenanceScheduleType" : enum ( MaintenanceScheduleType ) , "mtlsConnectionRequired" : boolean , "backupRetentionPeriodDays" : integer , "actualUsedDataStorageSizeTb" : number , "allocatedStorageSizeTb" : number , "apexDetails" : { object ( AutonomousDatabaseApex ) } , "lifecycleDetails" : string , "state" : enum ( State ) , "autonomousContainerDatabaseId" : string , "availableUpgradeVersions" : [ string ] , "connectionStrings" : { object ( AutonomousDatabaseConnectionStrings ) } , "connectionUrls" : { object ( AutonomousDatabaseConnectionUrls ) } , "failedDataRecoveryDuration" : string , "memoryTableGbs" : integer , "isLocalDataGuardEnabled" : boolean , "localAdgAutoFailoverMaxDataLossLimit" : integer , "localStandbyDb" : { object ( AutonomousDatabaseStandbySummary ) } , "memoryPerOracleComputeUnitGbs" : integer , "localDisasterRecoveryType" : enum ( LocalDisasterRecoveryType ) , "dataSafeState" : enum ( DataSafeState ) , "databaseManagementState" : enum ( DatabaseManagementState ) , "openMode" : enum ( OpenMode ) , "operationsInsightsState" : enum ( OperationsInsightsState ) , "peerDbIds" : [ string ] , "permissionLevel" : enum ( PermissionLevel ) , "privateEndpoint" : string , "refreshableMode" : enum ( RefreshableMode ) , "refreshableState" : enum ( RefreshableState ) , "role" : enum ( Role ) , "scheduledOperationDetails" : [ { object ( ScheduledOperationDetails ) } ] , "sqlWebDeveloperUrl" : string , "supportedCloneRegions" : [ string ] , "usedDataStorageSizeTbs" : integer , "ociUrl" : string , "totalAutoBackupStorageSizeGbs" : number , "nextLongTermBackupTime" : string , "dataGuardRoleChangedTime" : string , "disasterRecoveryRoleChangedTime" : string , "maintenanceBeginTime" : string , "maintenanceEndTime" : string , "allowlistedIps" : [ string ] , "encryptionKey" : { object ( EncryptionKey ) } , "encryptionKeyHistoryEntries" : [ { object ( EncryptionKeyHistoryEntry ) } ] , "serviceAgentEmail" : string , "arePrimaryAllowlistedIpsUsed" : boolean } Fields ocid string Output only.
- Resource: AutonomousDatabase JSON representation AutonomousDatabaseProperties JSON representation DatabaseEdition LicenseType MaintenanceScheduleType AutonomousDatabaseApex JSON representation State AutonomousDatabaseConnectionStrings JSON representation AllConnectionStrings JSON representation DatabaseConnectionStringProfile JSON representation ConsumerGroup HostFormat Protocol SessionMode SyntaxFormat TLSAuthentication AutonomousDatabaseConnectionUrls JSON representation AutonomousDatabaseStandbySummary JSON representation LocalDisasterRecoveryType DataSafeState DatabaseManagementState OpenMode OperationsInsightsState PermissionLevel RefreshableMode RefreshableState Role ScheduledOperationDetails JSON representation TimeOfDay JSON representation EncryptionKey JSON representation Provider EncryptionKeyHistoryEntry JSON representation SourceConfig JSON representation Methods Resource: AutonomousDatabase Details of the Autonomous Database resource. https://docs.oracle.com/en-us/iaas/api/#/en/database/20160918/AutonomousDatabase/ JSON representation { "name" : string , "database" : string , "displayName" : string , "entitlementId" : string , "adminPassword" : string , "properties" : { object ( AutonomousDatabaseProperties ) } , "labels" : { string : string , ... } , "network" : string , "cidr" : string , "odbNetwork" : string , "odbSubnet" : string , "sourceConfig" : { object ( SourceConfig ) } , "peerAutonomousDatabases" : [ string ] , "createTime" : string , "disasterRecoverySupportedLocations" : [ string ] } Fields name string Identifier.
- DatabaseConnectionStringProfile The connection string profile to allow clients to group. https://docs.oracle.com/en-us/iaas/api/#/en/database/20160918/datatypes/DatabaseConnectionStringProfile JSON representation { "consumerGroup" : enum ( ConsumerGroup ) , "displayName" : string , "hostFormat" : enum ( HostFormat ) , "isRegional" : boolean , "protocol" : enum ( Protocol ) , "sessionMode" : enum ( SessionMode ) , "syntaxFormat" : enum ( SyntaxFormat ) , "tlsAuthentication" : enum ( TLSAuthentication ) , "value" : string } Fields consumerGroup enum ( ConsumerGroup ) Output only.
- SERVER Server MUTUAL Mutual AutonomousDatabaseConnectionUrls The URLs for accessing Oracle Application Express (APEX) and SQL Developer Web with a browser from a Compute instance. https://docs.oracle.com/en-us/iaas/api/#/en/database/20160918/datatypes/AutonomousDatabaseConnectionUrls JSON representation { "apexUri" : string , "databaseTransformsUri" : string , "graphStudioUri" : string , "machineLearningNotebookUri" : string , "machineLearningUserManagementUri" : string , "mongoDbUri" : string , "ordsUri" : string , "sqlDevWebUri" : string } Fields apexUri string Output only.

### "Supported regions and zones \_|\_ Oracle Database at Google Cloud \_|\_\

- URL: [https://docs.cloud.google.com/oracle/database/docs/available-configurations](https://docs.cloud.google.com/oracle/database/docs/available-configurations)
- Source ID: `site-docs-reference`
- Final score: 226
- Re-rank relevance: N/A

Evidence snippets:
- Available regions and zones Oracle Database@Google Cloud is available in the following regions based on your selected Oracle Cloud Infrastructure (OCI) service type: Exadata Database Service Base Database Service Exadata Database Service on Exascale Infrastructure Autonomous AI Database Service Exadata Database Service regions and zones You can create Exadata Database and Exadata VM Clusters resources in the following regions and zones: Region Name Region Description Zone Asia Pacific asia-northeast1 Tokyo, Japan asia-northeast1-a-r1 asia-northeast2 Osaka, Japan asia-northeast2-a-r1 australia-southeast1 Sydney, Australia australia-southeast1-b-r1 australia-southeast2 Melbourne, Australia australia-southeast2-a-r2 australia-southeast2-b-r1 asia-south1 Mumbai, India asia-south1-b-r1 asia-south2 Delhi, India asia-south2-b-r1 North America northamerica-northeast1 Montréal, Québec, Canada northamerica-northeast1-a-r1 northamerica-northeast2 Toronto, Ontario, Canada northamerica-northeast2-a-r2 us-central1 Iowa us-central1-a-r1 us-east4 Northern Virginia us-east4-a-r2 us-east4-b-r1 us-west3 Salt Lake City us-west3-a-r1 South America southamerica-east1 São Paulo, Brazil, South America southamerica-east1-a-r1 Europe europe-west2 London , England europe-west2-a-r1 europe-west2-c-r2 Low CO 2 europe-west3 Frankfurt, Germany europe-west3-a-r2 europe-west3-b-r1 europe-west8 Milan, Italy europe-west8-b-r1 europe-west8-a-r1 Exadata Database Service on Exascale Infrastructure regions and zones You can create Exascale VM Clusters and Exascale Storage Vaults in the following regions and zones: Region Name Region Description Zone Asia Pacific asia-northeast1 Tokyo, Japan asia-northeast1-a-r1 North America northamerica-northeast1 Montréal, Québec, Canada northamerica-northeast1-a-r1 us-central1 Iowa us-central1-a-r1 us-east4 Northern Virginia us-east4-a-r2 us-east4-b-r1 us-west3 Salt Lake City us-west3-a-r1 Europe europe-west2 London europe-west2-a-r1 europe-west2-c-r2 Low CO 2 europe-west3 Frankfurt europe-west3-b-r1 Base Database Service regions and zones You can create DB systems resources in the following regions and zones: Region Name Region Description Zone Asia Pacific asia-northeast1 Tokyo, Japan asia-northeast1-a-r1 North America northamerica-northeast1 Montréal, Québec, Canada northamerica-northeast1-a-r1 us-central1 Iowa us-central1-a-r1 us-east4 Northern Virginia us-east4-a-r2 us-east4-b-r1 us-west3 Salt Lake City us-west3-a-r1 Europe europe-west2 London europe-west2-a-r1 europe-west2-c-r2 Low CO 2 europe-west3 Frankfurt europe-west3-b-r1 Autonomous AI Database Service regions You can create Autonomous AI Database resources in the following regions: Region Name Region Description Asia Pacific asia-northeast1 Tokyo, Japan asia-northeast2 Osaka, Japan australia-southeast1 Sydney, Australia australia-southeast2 Melbourne, Australia asia-south1 Mumbai, India asia-south2 Delhi, India North America northamerica-northeast1 Montréal, Québec, Canada northamerica-northeast2 Toronto, Ontario, Canada us-central1 Iowa us-east4 Northern Virginia us-west3 Salt Lake City South America southamerica-east1 São Paulo, Brazil, South America Europe europe-west2 London, England Low CO 2 europe-west3 Frankfurt, Germany europe-west8 Milan, Italy What's next?
- The following Oracle Database@Google Cloud resources are regional resources: Autonomous AI Databases The following Oracle Database@Google Cloud resources are zonal resources: Exadata Infrastructures Exadata VM Clusters Exascale VM Clusters and Exascale Storage Vaults ODB Networks and ODB Subnets DB systems Choosing a region and zone You choose which region or zone hosts your resources, which controls where your data is stored and used.
- Place an order for Oracle Database@Google Cloud Create Exadata Infrastructure instances Create Exadata VM Clusters Create Exascale VM Clusters Create Autonomous AI Database resources Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Documentation Databases Oracle Database at Google Cloud Guides Send feedback Supported regions and zones Stay organized with collections Save and categorize content based on your preferences.

### "Oracle Database@Google Cloud overview \_|\_ Oracle Database at Google Cloud\

- URL: [https://docs.cloud.google.com/oracle/database/docs/overview](https://docs.cloud.google.com/oracle/database/docs/overview)
- Source ID: `site-docs-root`
- Final score: 222
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Oracle Database@Google Cloud supports the following Oracle Cloud Infrastructure (OCI) products on Google Cloud: Exadata Database Service Autonomous AI Database Service Base Database Service Exadata Database Service on Exascale Infrastructure What Oracle Database@Google Cloud provides Oracle Database@Google Cloud offers many services to allow you to seamlessly integrate and manage your OCI resources in Google Cloud: ODB Network connectivity Manage access using Identity and Access Management (IAM) Create and manage Exadata Database Service resources Create and manage Exascale Infrastructure resources Create and manage Autonomous AI Database Service resources Create and manage Base Database Service resources Observe and Troubleshoot resources ODB Network connectivity Oracle Database@Google Cloud uses ODB Networks to manage connectivity to your resources.
- Create and manage Oracle Exadata Database Service resources Oracle Database@Google Cloud lets you create and manage Exadata Infrastructure instances and Exadata VM Clusters using Google Cloud console, Google Cloud CLI, or the Oracle Database@Google Cloud API.
- Manage access using Identity and Access Management Oracle Database@Google Cloud uses Identity and Access Management integration to manage user and group access for your Exadata Infrastructure and Autonomous AI Database resources.
- With built-in integration, you can deploy your Oracle AI Database services in a Google Cloud data center running on OCI Exadata hardware with minimal latency.

