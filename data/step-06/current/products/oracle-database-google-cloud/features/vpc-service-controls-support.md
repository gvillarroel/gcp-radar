---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:04.983Z"
product_name: "Oracle Database@Google Cloud"
product_slug: "oracle-database-google-cloud"
feature_name: "VPC Service Controls support"
feature_slug: "vpc-service-controls-support"
latest_feature_date: "2026-03-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/oracle/database/docs/configure-vpc-service-controls"
  - "https://docs.cloud.google.com/oracle/database/docs/configure-vpc"
  - "https://docs.cloud.google.com/oracle/database/docs/create-databases"
  - "https://docs.cloud.google.com/oracle/database/docs/reference/rest/v1/projects.locations.autonomousDatabases"
keywords:
  - "vpc"
  - "controls"
  - "oracle"
  - "database"
  - "supports"
---

# VPC Service Controls support

Product: Oracle Database@Google Cloud
Coverage: MEDIUM

## Step 02 Summary

Oracle Database@Google Cloud supports VPC Service Controls.

## Extended Definition

Oracle Database@Google Cloud supports VPC Service Controls.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/oracle/database/docs/configure-vpc-service-controls](https://docs.cloud.google.com/oracle/database/docs/configure-vpc-service-controls)
- [https://docs.cloud.google.com/oracle/database/docs/configure-vpc](https://docs.cloud.google.com/oracle/database/docs/configure-vpc)
- [https://docs.cloud.google.com/oracle/database/docs/create-databases](https://docs.cloud.google.com/oracle/database/docs/create-databases)
- [https://docs.cloud.google.com/oracle/database/docs/reference/rest/v1/projects.locations.autonomousDatabases](https://docs.cloud.google.com/oracle/database/docs/reference/rest/v1/projects.locations.autonomousDatabases)

## Supporting Pages

### "Configure VPC Service Controls \_|\_ Oracle Database at Google Cloud \_\

- URL: [https://docs.cloud.google.com/oracle/database/docs/configure-vpc-service-controls](https://docs.cloud.google.com/oracle/database/docs/configure-vpc-service-controls)
- Source ID: `site-docs-reference`
- Final score: 217
- Re-rank relevance: N/A

Evidence snippets:
- For reference information, see access-context-manager perimeters update . gcloud access-context-manager perimeters update PERIMETER ID \ --policy= POLICY ID \ --add-restricted-services=oracledatabase.googleapis.com Replace the following: PERIMETER ID : the ID of the perimeter POLICY ID : the ID of the access policy Test the perimeter Test your VPC Service Controls perimeter before enforcing it.
- Home Documentation Databases Oracle Database at Google Cloud Guides Send feedback Configure VPC Service Controls Stay organized with collections Save and categorize content based on your preferences.
- Enable the Service Networking API Review limitations when you use VPC Service Controls with Oracle Database@Google Cloud.
- This page explains how you can use VPC Service Controls to secure Oracle Database@Google Cloud resources.

### "Configure VPC networks \_|\_ Oracle Database at Google Cloud \_|\_ Google\

- URL: [https://docs.cloud.google.com/oracle/database/docs/configure-vpc](https://docs.cloud.google.com/oracle/database/docs/configure-vpc)
- Source ID: `site-docs-reference`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- To create a VPC network, choose one of the following: Create an auto mode VPC network Create a custom mode VPC network with only IPv4 subnets Modify a VPC network To modify a VPC network that is being used by your Oracle Database@Google Cloud resources, see Modify networks .
- Home Documentation Databases Oracle Database at Google Cloud Guides Send feedback Configure VPC networks Stay organized with collections Save and categorize content based on your preferences.
- Before you begin To configure a VPC network for your Oracle Database@Google Cloud resources, you need a Google Cloud project with billing enabled.
- Oracle Database@Google Cloud uses VPC networking projects to manage connectivity to your Oracle Database@Google Cloud resources.

### "Create databases \_|\_ Oracle Database at Google Cloud \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/oracle/database/docs/create-databases](https://docs.cloud.google.com/oracle/database/docs/create-databases)
- Source ID: `site-docs-reference`
- Final score: 153
- Re-rank relevance: N/A

Evidence snippets:
- The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). / // const requestId = 'abc123' // Imports the Oracledatabase library const { OracleDatabaseClient } = require ( ' @google-cloud/oracledatabase ' ). v1 ; // Instantiates a client const oracledatabaseClient = new OracleDatabaseClient (); async function callCreateAutonomousDatabase () { // Construct request const request = { parent , autonomousDatabaseId , autonomousDatabase , }; // Run request const [ operation ] = await oracledatabaseClient . createAutonomousDatabase ( request ); const [ response ] = await operation . promise (); console . log ( response ); } callCreateAutonomousDatabase (); PHP use Google\ApiCore\ApiException; use Google\ApiCore\OperationResponse; use Google\Cloud\OracleDatabase\V1\AutonomousDatabase; use Google\Cloud\OracleDatabase\V1\Client\OracleDatabaseClient; use Google\Cloud\OracleDatabase\V1\CreateAutonomousDatabaseRequest; use Google\Rpc\Status; / Creates a new Autonomous Database in a given project and location. @param string $formattedParent The name of the parent in the following format: projects/{project}/locations/{location}.
- Operation ; public class AsyncCreateAutonomousDatabase { public static void main ( String [] args ) throws Exception { asyncCreateAutonomousDatabase (); } public static void asyncCreateAutonomousDatabase () throws Exception { // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( OracleDatabaseClient oracleDatabaseClient = OracleDatabaseClient . create ()) { CreateAutonomousDatabaseRequest request = CreateAutonomousDatabaseRequest . newBuilder () . setParent ( LocationName . of ( "[PROJECT]" , "[LOCATION]" ). toString ()) . setAutonomousDatabaseId ( "autonomousDatabaseId-1972693114" ) . setAutonomousDatabase ( AutonomousDatabase . newBuilder (). build ()) . setRequestId ( "requestId693933066" ) . build (); ApiFuture<Operation> future = oracleDatabaseClient . createAutonomousDatabaseCallable (). futureCall ( request ); // Do something.
- The value must start with a letter and end with a letter or a number. / function create autonomous database sample( string $formattedParent, string $autonomousDatabaseId ): void { // Create a client. $oracleDatabaseClient = new OracleDatabaseClient(); // Prepare the request message. $autonomousDatabase = new AutonomousDatabase(); $request = (new CreateAutonomousDatabaseRequest()) ->setParent($formattedParent) ->setAutonomousDatabaseId($autonomousDatabaseId) ->setAutonomousDatabase($autonomousDatabase); // Call the API and handle any network failures. try { / @var OperationResponse $response / $response = $oracleDatabaseClient->createAutonomousDatabase($request); $response->pollUntilComplete(); if ($response->operationSucceeded()) { / @var AutonomousDatabase $result / $result = $response->getResult(); printf('Operation successful with response data: %s' .
- API To create an Autonomous AI Database, run the following curl command: curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json" \ "https://oracledatabase.googleapis.com/v1/projects/ PROJECT ID /locations/ REGION /autonomousDatabases/ DATABASE ID " -d \ '{ "database": " DATABASE NAME ", "displayName": " DISPLAY NAME ", "admin password": " PASSWORD ", "odb subnet": "projects/ ODB NETWORK PROJECT ID /locations/ REGION /odbNetworks/ ODB NETWORK ID /odbSubnets/ ODB SUBNET ID ", "properties": { "licenseType": " LICENSE TYPE ", "computeCount": COMPUTE COUNT , "dbVersion": " DATABASE VERSION ", "dbWorkload": " WORKLOAD TYPE ", "dataStorageSizeTb": STORAGE SIZE } }' Replace the following: PROJECT ID : the ID of your Google Cloud project in which to create the database.

### "REST Resource: projects.locations.autonomousDatabases \_|\_ Oracle Database\

- URL: [https://docs.cloud.google.com/oracle/database/docs/reference/rest/v1/projects.locations.autonomousDatabases](https://docs.cloud.google.com/oracle/database/docs/reference/rest/v1/projects.locations.autonomousDatabases)
- Source ID: `site-api-reference`
- Final score: 153
- Re-rank relevance: N/A

Evidence snippets:
- JSON representation { "ocid" : string , "computeCount" : number , "cpuCoreCount" : integer , "dataStorageSizeTb" : integer , "dataStorageSizeGb" : integer , "dbWorkload" : enum ( DBWorkload ) , "dbEdition" : enum ( DatabaseEdition ) , "characterSet" : string , "nCharacterSet" : string , "privateEndpointIp" : string , "privateEndpointLabel" : string , "dbVersion" : string , "isAutoScalingEnabled" : boolean , "isStorageAutoScalingEnabled" : boolean , "licenseType" : enum ( LicenseType ) , "customerContacts" : [ { object ( CustomerContact ) } ] , "secretId" : string , "vaultId" : string , "maintenanceScheduleType" : enum ( MaintenanceScheduleType ) , "mtlsConnectionRequired" : boolean , "backupRetentionPeriodDays" : integer , "actualUsedDataStorageSizeTb" : number , "allocatedStorageSizeTb" : number , "apexDetails" : { object ( AutonomousDatabaseApex ) } , "lifecycleDetails" : string , "state" : enum ( State ) , "autonomousContainerDatabaseId" : string , "availableUpgradeVersions" : [ string ] , "connectionStrings" : { object ( AutonomousDatabaseConnectionStrings ) } , "connectionUrls" : { object ( AutonomousDatabaseConnectionUrls ) } , "failedDataRecoveryDuration" : string , "memoryTableGbs" : integer , "isLocalDataGuardEnabled" : boolean , "localAdgAutoFailoverMaxDataLossLimit" : integer , "localStandbyDb" : { object ( AutonomousDatabaseStandbySummary ) } , "memoryPerOracleComputeUnitGbs" : integer , "localDisasterRecoveryType" : enum ( LocalDisasterRecoveryType ) , "dataSafeState" : enum ( DataSafeState ) , "databaseManagementState" : enum ( DatabaseManagementState ) , "openMode" : enum ( OpenMode ) , "operationsInsightsState" : enum ( OperationsInsightsState ) , "peerDbIds" : [ string ] , "permissionLevel" : enum ( PermissionLevel ) , "privateEndpoint" : string , "refreshableMode" : enum ( RefreshableMode ) , "refreshableState" : enum ( RefreshableState ) , "role" : enum ( Role ) , "scheduledOperationDetails" : [ { object ( ScheduledOperationDetails ) } ] , "sqlWebDeveloperUrl" : string , "supportedCloneRegions" : [ string ] , "usedDataStorageSizeTbs" : integer , "ociUrl" : string , "totalAutoBackupStorageSizeGbs" : number , "nextLongTermBackupTime" : string , "dataGuardRoleChangedTime" : string , "disasterRecoveryRoleChangedTime" : string , "maintenanceBeginTime" : string , "maintenanceEndTime" : string , "allowlistedIps" : [ string ] , "encryptionKey" : { object ( EncryptionKey ) } , "encryptionKeyHistoryEntries" : [ { object ( EncryptionKeyHistoryEntry ) } ] , "serviceAgentEmail" : string , "arePrimaryAllowlistedIpsUsed" : boolean } Fields ocid string Output only.
- Resource: AutonomousDatabase JSON representation AutonomousDatabaseProperties JSON representation DatabaseEdition LicenseType MaintenanceScheduleType AutonomousDatabaseApex JSON representation State AutonomousDatabaseConnectionStrings JSON representation AllConnectionStrings JSON representation DatabaseConnectionStringProfile JSON representation ConsumerGroup HostFormat Protocol SessionMode SyntaxFormat TLSAuthentication AutonomousDatabaseConnectionUrls JSON representation AutonomousDatabaseStandbySummary JSON representation LocalDisasterRecoveryType DataSafeState DatabaseManagementState OpenMode OperationsInsightsState PermissionLevel RefreshableMode RefreshableState Role ScheduledOperationDetails JSON representation TimeOfDay JSON representation EncryptionKey JSON representation Provider EncryptionKeyHistoryEntry JSON representation SourceConfig JSON representation Methods Resource: AutonomousDatabase Details of the Autonomous Database resource. https://docs.oracle.com/en-us/iaas/api/#/en/database/20160918/AutonomousDatabase/ JSON representation { "name" : string , "database" : string , "displayName" : string , "entitlementId" : string , "adminPassword" : string , "properties" : { object ( AutonomousDatabaseProperties ) } , "labels" : { string : string , ... } , "network" : string , "cidr" : string , "odbNetwork" : string , "odbSubnet" : string , "sourceConfig" : { object ( SourceConfig ) } , "peerAutonomousDatabases" : [ string ] , "createTime" : string , "disasterRecoverySupportedLocations" : [ string ] } Fields name string Identifier.
- DatabaseConnectionStringProfile The connection string profile to allow clients to group. https://docs.oracle.com/en-us/iaas/api/#/en/database/20160918/datatypes/DatabaseConnectionStringProfile JSON representation { "consumerGroup" : enum ( ConsumerGroup ) , "displayName" : string , "hostFormat" : enum ( HostFormat ) , "isRegional" : boolean , "protocol" : enum ( Protocol ) , "sessionMode" : enum ( SessionMode ) , "syntaxFormat" : enum ( SyntaxFormat ) , "tlsAuthentication" : enum ( TLSAuthentication ) , "value" : string } Fields consumerGroup enum ( ConsumerGroup ) Output only.
- SERVER Server MUTUAL Mutual AutonomousDatabaseConnectionUrls The URLs for accessing Oracle Application Express (APEX) and SQL Developer Web with a browser from a Compute instance. https://docs.oracle.com/en-us/iaas/api/#/en/database/20160918/datatypes/AutonomousDatabaseConnectionUrls JSON representation { "apexUri" : string , "databaseTransformsUri" : string , "graphStudioUri" : string , "machineLearningNotebookUri" : string , "machineLearningUserManagementUri" : string , "mongoDbUri" : string , "ordsUri" : string , "sqlDevWebUri" : string } Fields apexUri string Output only.

