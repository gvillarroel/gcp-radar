---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:04.998Z"
product_name: "Oracle Database@Google Cloud"
product_slug: "oracle-database-google-cloud"
feature_name: "Customer-managed encryption keys (CMEK) support"
feature_slug: "customer-managed-encryption-keys-cmek-support"
latest_feature_date: "2025-10-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/oracle/database/docs/cmek"
  - "https://docs.cloud.google.com/oracle/database/docs/reference/rest/v1/projects.locations.autonomousDatabases"
  - "https://docs.cloud.google.com/oracle/database/docs/create-databases"
  - "https://docs.cloud.google.com/oracle/database/docs/create-clusters"
keywords:
  - "customer"
  - "managed"
  - "encryption"
  - "keys"
  - "cmek"
  - "oracle"
  - "database"
  - "supports"
---

# Customer-managed encryption keys (CMEK) support

Product: Oracle Database@Google Cloud
Coverage: MEDIUM

## Step 02 Summary

Oracle Database@Google Cloud supports CMEK with Cloud Key Management Service for Exadata VM Clusters and Autonomous Databases.

## Extended Definition

Oracle Database@Google Cloud supports CMEK with Cloud Key Management Service for Exadata VM Clusters and Autonomous Databases.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/oracle/database/docs/cmek](https://docs.cloud.google.com/oracle/database/docs/cmek)
- [https://docs.cloud.google.com/oracle/database/docs/reference/rest/v1/projects.locations.autonomousDatabases](https://docs.cloud.google.com/oracle/database/docs/reference/rest/v1/projects.locations.autonomousDatabases)
- [https://docs.cloud.google.com/oracle/database/docs/create-databases](https://docs.cloud.google.com/oracle/database/docs/create-databases)
- [https://docs.cloud.google.com/oracle/database/docs/create-clusters](https://docs.cloud.google.com/oracle/database/docs/create-clusters)

## Supporting Pages

### "Customer-managed encryption keys (CMEK) \_|\_ Oracle Database at Google\

- URL: [https://docs.cloud.google.com/oracle/database/docs/cmek](https://docs.cloud.google.com/oracle/database/docs/cmek)
- Source ID: `site-docs-reference`
- Final score: 317
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Databases Oracle Database at Google Cloud Guides Send feedback Customer-managed encryption keys (CMEK) Stay organized with collections Save and categorize content based on your preferences.
- This page describes Google Cloud customer-managed encryption keys (CMEK) for Oracle Database@Google Cloud.
- Oracle Database@Google Cloud provides the following encryption options to encrypt your data: Google Cloud CMEK : this encryption option lets you manage your keys using Cloud Key Management Service .
- You can use Google Cloud CMEK with the following Oracle Database@Google Cloud resources: Exadata VM Clusters Autonomous AI Databases About service accounts To enable Google Cloud CMEK on your Oracle Database@Google Cloud resources, you need to use a service account to request key access from Cloud KMS.

### "REST Resource: projects.locations.autonomousDatabases \_|\_ Oracle Database\

- URL: [https://docs.cloud.google.com/oracle/database/docs/reference/rest/v1/projects.locations.autonomousDatabases](https://docs.cloud.google.com/oracle/database/docs/reference/rest/v1/projects.locations.autonomousDatabases)
- Source ID: `site-api-reference`
- Final score: 241
- Re-rank relevance: N/A

Evidence snippets:
- JSON representation { "ocid" : string , "computeCount" : number , "cpuCoreCount" : integer , "dataStorageSizeTb" : integer , "dataStorageSizeGb" : integer , "dbWorkload" : enum ( DBWorkload ) , "dbEdition" : enum ( DatabaseEdition ) , "characterSet" : string , "nCharacterSet" : string , "privateEndpointIp" : string , "privateEndpointLabel" : string , "dbVersion" : string , "isAutoScalingEnabled" : boolean , "isStorageAutoScalingEnabled" : boolean , "licenseType" : enum ( LicenseType ) , "customerContacts" : [ { object ( CustomerContact ) } ] , "secretId" : string , "vaultId" : string , "maintenanceScheduleType" : enum ( MaintenanceScheduleType ) , "mtlsConnectionRequired" : boolean , "backupRetentionPeriodDays" : integer , "actualUsedDataStorageSizeTb" : number , "allocatedStorageSizeTb" : number , "apexDetails" : { object ( AutonomousDatabaseApex ) } , "lifecycleDetails" : string , "state" : enum ( State ) , "autonomousContainerDatabaseId" : string , "availableUpgradeVersions" : [ string ] , "connectionStrings" : { object ( AutonomousDatabaseConnectionStrings ) } , "connectionUrls" : { object ( AutonomousDatabaseConnectionUrls ) } , "failedDataRecoveryDuration" : string , "memoryTableGbs" : integer , "isLocalDataGuardEnabled" : boolean , "localAdgAutoFailoverMaxDataLossLimit" : integer , "localStandbyDb" : { object ( AutonomousDatabaseStandbySummary ) } , "memoryPerOracleComputeUnitGbs" : integer , "localDisasterRecoveryType" : enum ( LocalDisasterRecoveryType ) , "dataSafeState" : enum ( DataSafeState ) , "databaseManagementState" : enum ( DatabaseManagementState ) , "openMode" : enum ( OpenMode ) , "operationsInsightsState" : enum ( OperationsInsightsState ) , "peerDbIds" : [ string ] , "permissionLevel" : enum ( PermissionLevel ) , "privateEndpoint" : string , "refreshableMode" : enum ( RefreshableMode ) , "refreshableState" : enum ( RefreshableState ) , "role" : enum ( Role ) , "scheduledOperationDetails" : [ { object ( ScheduledOperationDetails ) } ] , "sqlWebDeveloperUrl" : string , "supportedCloneRegions" : [ string ] , "usedDataStorageSizeTbs" : integer , "ociUrl" : string , "totalAutoBackupStorageSizeGbs" : number , "nextLongTermBackupTime" : string , "dataGuardRoleChangedTime" : string , "disasterRecoveryRoleChangedTime" : string , "maintenanceBeginTime" : string , "maintenanceEndTime" : string , "allowlistedIps" : [ string ] , "encryptionKey" : { object ( EncryptionKey ) } , "encryptionKeyHistoryEntries" : [ { object ( EncryptionKeyHistoryEntry ) } ] , "serviceAgentEmail" : string , "arePrimaryAllowlistedIpsUsed" : boolean } Fields ocid string Output only.
- Resource: AutonomousDatabase JSON representation AutonomousDatabaseProperties JSON representation DatabaseEdition LicenseType MaintenanceScheduleType AutonomousDatabaseApex JSON representation State AutonomousDatabaseConnectionStrings JSON representation AllConnectionStrings JSON representation DatabaseConnectionStringProfile JSON representation ConsumerGroup HostFormat Protocol SessionMode SyntaxFormat TLSAuthentication AutonomousDatabaseConnectionUrls JSON representation AutonomousDatabaseStandbySummary JSON representation LocalDisasterRecoveryType DataSafeState DatabaseManagementState OpenMode OperationsInsightsState PermissionLevel RefreshableMode RefreshableState Role ScheduledOperationDetails JSON representation TimeOfDay JSON representation EncryptionKey JSON representation Provider EncryptionKeyHistoryEntry JSON representation SourceConfig JSON representation Methods Resource: AutonomousDatabase Details of the Autonomous Database resource. https://docs.oracle.com/en-us/iaas/api/#/en/database/20160918/AutonomousDatabase/ JSON representation { "name" : string , "database" : string , "displayName" : string , "entitlementId" : string , "adminPassword" : string , "properties" : { object ( AutonomousDatabaseProperties ) } , "labels" : { string : string , ... } , "network" : string , "cidr" : string , "odbNetwork" : string , "odbSubnet" : string , "sourceConfig" : { object ( SourceConfig ) } , "peerAutonomousDatabases" : [ string ] , "createTime" : string , "disasterRecoverySupportedLocations" : [ string ] } Fields name string Identifier.
- An Oracle-managed Google Cloud service account on which customers can grant roles to access resources in the customer project. arePrimaryAllowlistedIpsUsed boolean Output only.
- The history of the encryption keys used to encrypt the Autonomous Database. serviceAgentEmail string Output only.

### "Create databases \_|\_ Oracle Database at Google Cloud \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/oracle/database/docs/create-databases](https://docs.cloud.google.com/oracle/database/docs/create-databases)
- Source ID: `site-docs-reference`
- Final score: 206
- Re-rank relevance: N/A

Evidence snippets:
- For more information about CMEK, see Customer-managed encryption keys (CMEK) .
- Here is how to wait for a response. result . wait until done! timeout : 60 if result . response? p result . response else puts "No response received." end end When you create a Autonomous AI Database, the provisioning workflow automatically creates a Oracle-managed service account which you can use to enable Google Cloud CMEK on the database.
- Automatic backups are managed by Oracle and billed separately , in addition to database storage.
- What's next Learn about CMEK for Oracle Database@Google Cloud .

### "Create Exadata VM Cluster \_|\_ Oracle Database at Google Cloud \_|\_ Google\

- URL: [https://docs.cloud.google.com/oracle/database/docs/create-clusters](https://docs.cloud.google.com/oracle/database/docs/create-clusters)
- Source ID: `site-docs-reference`
- Final score: 202
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information about CMEK, see Customer-managed encryption keys (CMEK) .
- API To create an Exadata VM Cluster, run the following curl command: curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json" \ "https://oracledatabase.googleapis.com/v1/projects/ PROJECT ID /locations/ REGION /cloudVmClusters/ CLUSTER ID " -d \ '{ "exadata infrastructure": "projects/ PROJECT ID /locations/ REGION /cloudExadataInfrastructures/ EXADATA INSTANCE ID " "displayName": " DISPLAY NAME ", "properties": { "odb network": "projects/ ODB NETWORK PROJECT ID /locations/ REGION /odbNetworks/ ODB NETWORK ID ", "odb subnet": "projects/ ODB NETWORK PROJECT ID /locations/ REGION /odbNetworks/ ODB NETWORK ID /odbSubnets/ CLIENT SUBNET ID ", "backup odb subnet": "projects/ ODB NETWORK PROJECT ID /locations/ REGION /odbNetworks/ ODB NETWORK ID /odbSubnets/ BACKUP SUBNET ID ", "licenseType": " LICENSE TYPE ", "ssh public keys": [" SSH PUBLIC KEY "], "cpu core count": CPU CORE COUNT , "gi version": " GI VERSION ", "hostname prefix": " HOSTNAME PREFIX " } }' Replace the following: PROJECT ID : the ID of your Google Cloud project in which to create the Exadata VM Cluster.
- Click Create to create the Exadata VM Cluster. gcloud Use the gcloud oracle-database cloud-vm-clusters create command to create a cluster. gcloud oracle - database cloud - vm - clusters create CLUSTER ID \ -- exadata - infrastructure = projects / PROJECT ID / locations / REGION / cloudExadataInfrastructures / EXADATA INSTANCE ID \ -- project = PROJECT ID \ -- location = REGION \ -- display - name = " DISPLAY NAME " \ -- odb - subnet = projects / ODB NETWORK PROJECT ID / locations / REGION / odbNetworks / ODB NETWORK ID / odbSubnets / CLIENT SUBNET ID \ -- backup - odb - subnet = projects / ODB NETWORK PROJECT ID / locations / REGION / odbNetworks / ODB NETWORK ID / odbSubnets / BACKUP SUBNET ID \ -- properties - license - type = LICENSE TYPE \ -- properties - ssh - public - keys = " SSH KEYS " \ -- properties - gi - version = GI VERSION \ -- properties - hostname - prefix = HOSTNAME PREFIX NAME \ -- properties - cpu - core - count = CPU CORE COUNT Replace the following: CLUSTER ID : a unique identifier for your cluster.
- What's next Learn about CMEK for Oracle Database@Google Cloud .

