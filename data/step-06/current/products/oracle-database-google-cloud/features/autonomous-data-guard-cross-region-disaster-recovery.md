---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:05.004Z"
product_name: "Oracle Database@Google Cloud"
product_slug: "oracle-database-google-cloud"
feature_name: "Autonomous Data Guard cross-region disaster recovery"
feature_slug: "autonomous-data-guard-cross-region-disaster-recovery"
latest_feature_date: "2025-03-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/oracle/database/docs/cross-region-dr-with-data-guard"
  - "https://docs.cloud.google.com/oracle/database/docs/reference/rest/v1/projects.locations.autonomousDatabases"
  - "https://docs.cloud.google.com/oracle/database/docs/create-databases"
  - "https://docs.cloud.google.com/oracle/database/docs/create-peer-database"
keywords:
  - "autonomous"
  - "guard"
  - "cross"
  - "region"
  - "disaster"
  - "recovery"
  - "databases"
  - "can"
---

# Autonomous Data Guard cross-region disaster recovery

Product: Oracle Database@Google Cloud
Coverage: MEDIUM

## Step 02 Summary

Autonomous Databases can use Autonomous Data Guard for cross-region disaster recovery in Google Cloud.

## Extended Definition

Autonomous Databases can use Autonomous Data Guard for cross-region disaster recovery in Google Cloud.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/oracle/database/docs/cross-region-dr-with-data-guard](https://docs.cloud.google.com/oracle/database/docs/cross-region-dr-with-data-guard)
- [https://docs.cloud.google.com/oracle/database/docs/reference/rest/v1/projects.locations.autonomousDatabases](https://docs.cloud.google.com/oracle/database/docs/reference/rest/v1/projects.locations.autonomousDatabases)
- [https://docs.cloud.google.com/oracle/database/docs/create-databases](https://docs.cloud.google.com/oracle/database/docs/create-databases)
- [https://docs.cloud.google.com/oracle/database/docs/create-peer-database](https://docs.cloud.google.com/oracle/database/docs/create-peer-database)

## Supporting Pages

### "Protect Autonomous AI Databases with cross-region disaster recovery \_|\_\

- URL: [https://docs.cloud.google.com/oracle/database/docs/cross-region-dr-with-data-guard](https://docs.cloud.google.com/oracle/database/docs/cross-region-dr-with-data-guard)
- Source ID: `site-docs-reference`
- Final score: 349
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This page describes how you can use Oracle Autonomous Data Guard to set up cross-region disaster recovery for your Autonomous AI Databases in Google Cloud.
- Home Documentation Databases Oracle Database at Google Cloud Guides Send feedback Protect Autonomous AI Databases with cross-region disaster recovery Stay organized with collections Save and categorize content based on your preferences.
- Overview Cross-region Autonomous Data Guard on Oracle Database@Google Cloud offers a powerful and streamlined disaster recovery solution for Autonomous AI Database.
- You can retrieve your connection strings through the Google Cloud console or through the gcloud CLI command: gcloud oracle-database autonomous-databases describe demodb1 \ --location=us-east4 \ --format="json(properties.connectionStrings.profiles)" \ jq -r '.properties.connectionStrings.profiles[] select(.tlsAuthentication=="SERVER")' { "consumerGroup": "HIGH", "displayName": "demodb1 high", "hostFormat": "FQDN", "protocol": "TCPS", "sessionMode": "DIRECT", "syntaxFormat": "LONG", "tlsAuthentication": "SERVER", "value": "(description= (retry count=20)(retry delay=3)(address=(protocol=tcps)(port=1521)(host=demodb1.adb.us-ashburn-1.oraclecloud.com))(connect data=(service name=g24da7e94756f60 demodb1 high.adb.oraclecloud.com))(security=(ssl server dn match=no)))" } { "consumerGroup": "LOW", "displayName": "demodb1 low", "hostFormat": "FQDN", "protocol": "TCPS", "sessionMode": "DIRECT", "syntaxFormat": "LONG", "tlsAuthentication": "SERVER", "value": "(description= (retry count=20)(retry delay=3)(address=(protocol=tcps)(port=1521)(host=demodb1.adb.us-ashburn-1.oraclecloud.com))(connect data=(service name=g24da7e94756f60 demodb1 low.adb.oraclecloud.com))(security=(ssl server dn match=no)))" } { "consumerGroup": "MEDIUM", "displayName": "demodb1 medium", "hostFormat": "FQDN", "protocol": "TCPS", "sessionMode": "DIRECT", "syntaxFormat": "LONG", "tlsAuthentication": "SERVER", "value": "(description= (retry count=20)(retry delay=3)(address=(protocol=tcps)(port=1521)(host=demodb1.adb.us-ashburn-1.oraclecloud.com))(connect data=(service name=g24da7e94756f60 demodb1 medium.adb.oraclecloud.com))(security=(ssl server dn match=no)))" } Configuring multi-region database connectivity Different database hostnames and connection strings are used for each database in a cross-region configuration.

### "REST Resource: projects.locations.autonomousDatabases \_|\_ Oracle Database\

- URL: [https://docs.cloud.google.com/oracle/database/docs/reference/rest/v1/projects.locations.autonomousDatabases](https://docs.cloud.google.com/oracle/database/docs/reference/rest/v1/projects.locations.autonomousDatabases)
- Source ID: `site-api-reference`
- Final score: 255
- Re-rank relevance: N/A

Evidence snippets:
- JSON representation { "ocid" : string , "computeCount" : number , "cpuCoreCount" : integer , "dataStorageSizeTb" : integer , "dataStorageSizeGb" : integer , "dbWorkload" : enum ( DBWorkload ) , "dbEdition" : enum ( DatabaseEdition ) , "characterSet" : string , "nCharacterSet" : string , "privateEndpointIp" : string , "privateEndpointLabel" : string , "dbVersion" : string , "isAutoScalingEnabled" : boolean , "isStorageAutoScalingEnabled" : boolean , "licenseType" : enum ( LicenseType ) , "customerContacts" : [ { object ( CustomerContact ) } ] , "secretId" : string , "vaultId" : string , "maintenanceScheduleType" : enum ( MaintenanceScheduleType ) , "mtlsConnectionRequired" : boolean , "backupRetentionPeriodDays" : integer , "actualUsedDataStorageSizeTb" : number , "allocatedStorageSizeTb" : number , "apexDetails" : { object ( AutonomousDatabaseApex ) } , "lifecycleDetails" : string , "state" : enum ( State ) , "autonomousContainerDatabaseId" : string , "availableUpgradeVersions" : [ string ] , "connectionStrings" : { object ( AutonomousDatabaseConnectionStrings ) } , "connectionUrls" : { object ( AutonomousDatabaseConnectionUrls ) } , "failedDataRecoveryDuration" : string , "memoryTableGbs" : integer , "isLocalDataGuardEnabled" : boolean , "localAdgAutoFailoverMaxDataLossLimit" : integer , "localStandbyDb" : { object ( AutonomousDatabaseStandbySummary ) } , "memoryPerOracleComputeUnitGbs" : integer , "localDisasterRecoveryType" : enum ( LocalDisasterRecoveryType ) , "dataSafeState" : enum ( DataSafeState ) , "databaseManagementState" : enum ( DatabaseManagementState ) , "openMode" : enum ( OpenMode ) , "operationsInsightsState" : enum ( OperationsInsightsState ) , "peerDbIds" : [ string ] , "permissionLevel" : enum ( PermissionLevel ) , "privateEndpoint" : string , "refreshableMode" : enum ( RefreshableMode ) , "refreshableState" : enum ( RefreshableState ) , "role" : enum ( Role ) , "scheduledOperationDetails" : [ { object ( ScheduledOperationDetails ) } ] , "sqlWebDeveloperUrl" : string , "supportedCloneRegions" : [ string ] , "usedDataStorageSizeTbs" : integer , "ociUrl" : string , "totalAutoBackupStorageSizeGbs" : number , "nextLongTermBackupTime" : string , "dataGuardRoleChangedTime" : string , "disasterRecoveryRoleChangedTime" : string , "maintenanceBeginTime" : string , "maintenanceEndTime" : string , "allowlistedIps" : [ string ] , "encryptionKey" : { object ( EncryptionKey ) } , "encryptionKeyHistoryEntries" : [ { object ( EncryptionKeyHistoryEntry ) } ] , "serviceAgentEmail" : string , "arePrimaryAllowlistedIpsUsed" : boolean } Fields ocid string Output only.
- AutonomousDatabaseStandbySummary Autonomous Data Guard standby database details. https://docs.oracle.com/en-us/iaas/api/#/en/database/20160918/datatypes/AutonomousDatabaseStandbySummary JSON representation { "lagTimeDuration" : string , "lifecycleDetails" : string , "state" : enum ( State ) , "dataGuardRoleChangedTime" : string , "disasterRecoveryRoleChangedTime" : string } Fields lagTimeDuration string ( Duration format) Output only.
- Resource: AutonomousDatabase JSON representation AutonomousDatabaseProperties JSON representation DatabaseEdition LicenseType MaintenanceScheduleType AutonomousDatabaseApex JSON representation State AutonomousDatabaseConnectionStrings JSON representation AllConnectionStrings JSON representation DatabaseConnectionStringProfile JSON representation ConsumerGroup HostFormat Protocol SessionMode SyntaxFormat TLSAuthentication AutonomousDatabaseConnectionUrls JSON representation AutonomousDatabaseStandbySummary JSON representation LocalDisasterRecoveryType DataSafeState DatabaseManagementState OpenMode OperationsInsightsState PermissionLevel RefreshableMode RefreshableState Role ScheduledOperationDetails JSON representation TimeOfDay JSON representation EncryptionKey JSON representation Provider EncryptionKeyHistoryEntry JSON representation SourceConfig JSON representation Methods Resource: AutonomousDatabase Details of the Autonomous Database resource. https://docs.oracle.com/en-us/iaas/api/#/en/database/20160918/AutonomousDatabase/ JSON representation { "name" : string , "database" : string , "displayName" : string , "entitlementId" : string , "adminPassword" : string , "properties" : { object ( AutonomousDatabaseProperties ) } , "labels" : { string : string , ... } , "network" : string , "cidr" : string , "odbNetwork" : string , "odbSubnet" : string , "sourceConfig" : { object ( SourceConfig ) } , "peerAutonomousDatabases" : [ string ] , "createTime" : string , "disasterRecoverySupportedLocations" : [ string ] } Fields name string Identifier.
- The list of OCIDs of standby databases located in Autonomous Data Guard remote regions that are associated with the source database. permissionLevel enum ( PermissionLevel ) Output only.

### "Create databases \_|\_ Oracle Database at Google Cloud \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/oracle/database/docs/create-databases](https://docs.cloud.google.com/oracle/database/docs/create-databases)
- Source ID: `site-docs-reference`
- Final score: 203
- Re-rank relevance: N/A

Evidence snippets:
- Not required if you're creating a cross-region disaster recovery standby instance or cross-region Autonomous Data Guard standby instance.
- Not required if you're creating a cross-region disaster recovery standby instance or cross-region Autonomous Data Guard standby instance.
- API To create an Autonomous AI Database, run the following curl command: curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json" \ "https://oracledatabase.googleapis.com/v1/projects/ PROJECT ID /locations/ REGION /autonomousDatabases/ DATABASE ID " -d \ '{ "database": " DATABASE NAME ", "displayName": " DISPLAY NAME ", "admin password": " PASSWORD ", "odb subnet": "projects/ ODB NETWORK PROJECT ID /locations/ REGION /odbNetworks/ ODB NETWORK ID /odbSubnets/ ODB SUBNET ID ", "properties": { "licenseType": " LICENSE TYPE ", "computeCount": COMPUTE COUNT , "dbVersion": " DATABASE VERSION ", "dbWorkload": " WORKLOAD TYPE ", "dataStorageSizeTb": STORAGE SIZE } }' Replace the following: PROJECT ID : the ID of your Google Cloud project in which to create the database.
- Click Create to create your database. gcloud Use the gcloud oracle-database autonomous-databases create command to create a database. gcloud oracle - database autonomous - databases create DATABASE ID \ -- project = PROJECT ID \ -- location = REGION \ -- display - name = DISPLAY NAME \ -- database = DATABASE NAME \ -- admin - password = ADMIN PASSWORD \ -- odb - subnet = projects / ODB NETWORK PROJECT ID / locations / REGION / odbNetworks / ODB NETWORK ID / odbSubnets / ODB SUBNET ID \ -- properties - compute - count = COMPUTE COUNT \ -- properties - db - version = DATABASE VERSION \ -- properties - license - type = LICENSE TYPE \ -- properties - db - workload = WORKLOAD TYPE \ -- properties - data - storage - size - gb = STORAGE SIZE Replace the following: DATABASE ID : a permanent identifier for your instance.

### "Create a peer database \_|\_ Oracle Database at Google Cloud \_|\_ Google\

- URL: [https://docs.cloud.google.com/oracle/database/docs/create-peer-database](https://docs.cloud.google.com/oracle/database/docs/create-peer-database)
- Source ID: `site-docs-reference`
- Final score: 189
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If you already have peer databases in all regions and no additional region appears in the list, then you can't create any more peer databases. (Optional) Select the Enable cross-region backup replication to disaster recovery peer checkbox.
- Once you create an Autonomous AI Database, you can set up one or more peer databases for it as a part of your disaster recovery plan.
- You can only create peer databases with Autonomous Data Guard.
- API To create a peer database, run the following curl command: curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json" \ "https://oracledatabase.googleapis.com/v1/projects/ PROJECT ID /locations/ REGION /autonomousDatabases/ PEER DATABASE ID " -d \ '{ "name": "projects/ PROJECT ID /locations/ REGION /autonomousDatabases/ PRIMARY DATABASE ID ", "odb subnet": "projects/ ODB NETWORK PROJECT ID /locations/ REGION /odbNetworks/ ODB NETWORK ID /odbSubnets/ ODB SUBNET ID ", "source config": { "autonomous database": "projects/ PROJECT ID /locations/ REGION /autonomousDatabases/ PRIMARY DATABASE ID ", "automatic backups replication enabled": ENABLE BACKUP REPLICATION } }' Replace the following: PROJECT ID : the ID of your Google Cloud project in which to create the peer database.

