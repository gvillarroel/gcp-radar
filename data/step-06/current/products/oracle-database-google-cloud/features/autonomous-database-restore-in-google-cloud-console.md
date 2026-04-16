---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:04.990Z"
product_name: "Oracle Database@Google Cloud"
product_slug: "oracle-database-google-cloud"
feature_name: "Autonomous Database restore in Google Cloud console"
feature_slug: "autonomous-database-restore-in-google-cloud-console"
latest_feature_date: "2025-12-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/oracle/database/docs/reference/rest/v1/projects.locations.autonomousDatabases"
  - "https://docs.cloud.google.com/oracle/database/docs/reference/rest/v1/projects.locations.autonomousDatabases/restore"
  - "https://docs.cloud.google.com/oracle/database/docs/create-databases"
  - "https://docs.cloud.google.com/oracle/database/docs/delete-databases"
keywords:
  - "autonomous"
  - "database"
  - "restore"
  - "in"
  - "console"
  - "databases"
  - "can"
  - "be"
---

# Autonomous Database restore in Google Cloud console

Product: Oracle Database@Google Cloud
Coverage: MEDIUM

## Step 02 Summary

Autonomous Databases can be restored through the Google Cloud console.

## Extended Definition

Autonomous Databases can be restored through the Google Cloud console.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/oracle/database/docs/reference/rest/v1/projects.locations.autonomousDatabases](https://docs.cloud.google.com/oracle/database/docs/reference/rest/v1/projects.locations.autonomousDatabases)
- [https://docs.cloud.google.com/oracle/database/docs/reference/rest/v1/projects.locations.autonomousDatabases/restore](https://docs.cloud.google.com/oracle/database/docs/reference/rest/v1/projects.locations.autonomousDatabases/restore)
- [https://docs.cloud.google.com/oracle/database/docs/create-databases](https://docs.cloud.google.com/oracle/database/docs/create-databases)
- [https://docs.cloud.google.com/oracle/database/docs/delete-databases](https://docs.cloud.google.com/oracle/database/docs/delete-databases)

## Supporting Pages

### "REST Resource: projects.locations.autonomousDatabases \_|\_ Oracle Database\

- URL: [https://docs.cloud.google.com/oracle/database/docs/reference/rest/v1/projects.locations.autonomousDatabases](https://docs.cloud.google.com/oracle/database/docs/reference/rest/v1/projects.locations.autonomousDatabases)
- Source ID: `site-api-reference`
- Final score: 300
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The source Autonomous Database is configured while creating the Peer Autonomous Database and can't be updated after creation. peerAutonomousDatabases[] string Output only.
- JSON representation { "ocid" : string , "computeCount" : number , "cpuCoreCount" : integer , "dataStorageSizeTb" : integer , "dataStorageSizeGb" : integer , "dbWorkload" : enum ( DBWorkload ) , "dbEdition" : enum ( DatabaseEdition ) , "characterSet" : string , "nCharacterSet" : string , "privateEndpointIp" : string , "privateEndpointLabel" : string , "dbVersion" : string , "isAutoScalingEnabled" : boolean , "isStorageAutoScalingEnabled" : boolean , "licenseType" : enum ( LicenseType ) , "customerContacts" : [ { object ( CustomerContact ) } ] , "secretId" : string , "vaultId" : string , "maintenanceScheduleType" : enum ( MaintenanceScheduleType ) , "mtlsConnectionRequired" : boolean , "backupRetentionPeriodDays" : integer , "actualUsedDataStorageSizeTb" : number , "allocatedStorageSizeTb" : number , "apexDetails" : { object ( AutonomousDatabaseApex ) } , "lifecycleDetails" : string , "state" : enum ( State ) , "autonomousContainerDatabaseId" : string , "availableUpgradeVersions" : [ string ] , "connectionStrings" : { object ( AutonomousDatabaseConnectionStrings ) } , "connectionUrls" : { object ( AutonomousDatabaseConnectionUrls ) } , "failedDataRecoveryDuration" : string , "memoryTableGbs" : integer , "isLocalDataGuardEnabled" : boolean , "localAdgAutoFailoverMaxDataLossLimit" : integer , "localStandbyDb" : { object ( AutonomousDatabaseStandbySummary ) } , "memoryPerOracleComputeUnitGbs" : integer , "localDisasterRecoveryType" : enum ( LocalDisasterRecoveryType ) , "dataSafeState" : enum ( DataSafeState ) , "databaseManagementState" : enum ( DatabaseManagementState ) , "openMode" : enum ( OpenMode ) , "operationsInsightsState" : enum ( OperationsInsightsState ) , "peerDbIds" : [ string ] , "permissionLevel" : enum ( PermissionLevel ) , "privateEndpoint" : string , "refreshableMode" : enum ( RefreshableMode ) , "refreshableState" : enum ( RefreshableState ) , "role" : enum ( Role ) , "scheduledOperationDetails" : [ { object ( ScheduledOperationDetails ) } ] , "sqlWebDeveloperUrl" : string , "supportedCloneRegions" : [ string ] , "usedDataStorageSizeTbs" : integer , "ociUrl" : string , "totalAutoBackupStorageSizeGbs" : number , "nextLongTermBackupTime" : string , "dataGuardRoleChangedTime" : string , "disasterRecoveryRoleChangedTime" : string , "maintenanceBeginTime" : string , "maintenanceEndTime" : string , "allowlistedIps" : [ string ] , "encryptionKey" : { object ( EncryptionKey ) } , "encryptionKeyHistoryEntries" : [ { object ( EncryptionKeyHistoryEntry ) } ] , "serviceAgentEmail" : string , "arePrimaryAllowlistedIpsUsed" : boolean } Fields ocid string Output only.
- Resource: AutonomousDatabase JSON representation AutonomousDatabaseProperties JSON representation DatabaseEdition LicenseType MaintenanceScheduleType AutonomousDatabaseApex JSON representation State AutonomousDatabaseConnectionStrings JSON representation AllConnectionStrings JSON representation DatabaseConnectionStringProfile JSON representation ConsumerGroup HostFormat Protocol SessionMode SyntaxFormat TLSAuthentication AutonomousDatabaseConnectionUrls JSON representation AutonomousDatabaseStandbySummary JSON representation LocalDisasterRecoveryType DataSafeState DatabaseManagementState OpenMode OperationsInsightsState PermissionLevel RefreshableMode RefreshableState Role ScheduledOperationDetails JSON representation TimeOfDay JSON representation EncryptionKey JSON representation Provider EncryptionKeyHistoryEntry JSON representation SourceConfig JSON representation Methods Resource: AutonomousDatabase Details of the Autonomous Database resource. https://docs.oracle.com/en-us/iaas/api/#/en/database/20160918/AutonomousDatabase/ JSON representation { "name" : string , "database" : string , "displayName" : string , "entitlementId" : string , "adminPassword" : string , "properties" : { object ( AutonomousDatabaseProperties ) } , "labels" : { string : string , ... } , "network" : string , "cidr" : string , "odbNetwork" : string , "odbSubnet" : string , "sourceConfig" : { object ( SourceConfig ) } , "peerAutonomousDatabases" : [ string ] , "createTime" : string , "disasterRecoverySupportedLocations" : [ string ] } Fields name string Identifier.
- Methods create Creates a new Autonomous Database in a given project and location. delete Deletes a single Autonomous Database. failover Initiates a failover to target autonomous database from the associated primary database. generateWallet Generates a wallet for an Autonomous Database. get Gets the details of a single Autonomous Database. list Lists the Autonomous Databases in a given project and location. patch Updates the parameters of a single Autonomous Database. restart Restarts an Autonomous Database. restore Restores a single Autonomous Database. start Starts an Autonomous Database. stop Stops an Autonomous Database. switchover Initiates a switchover of specified autonomous database to the associated peer database.

### "Method: projects.locations.autonomousDatabases.restore \_|\_ Oracle Database\

- URL: [https://docs.cloud.google.com/oracle/database/docs/reference/rest/v1/projects.locations.autonomousDatabases/restore](https://docs.cloud.google.com/oracle/database/docs/reference/rest/v1/projects.locations.autonomousDatabases/restore)
- Source ID: `site-api-reference`
- Final score: 286
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- IAM Permissions Requires the following IAM permission on the name resource: oracledatabase.autonomousDatabases.restore For more information, see the IAM documentation .
- HTTP request POST https://oracledatabase.googleapis.com/v1/{name=projects/ /locations/ /autonomousDatabases/ }:restore The URL uses gRPC Transcoding syntax.
- Home Documentation Databases Oracle Database at Google Cloud Reference Send feedback Method: projects.locations.autonomousDatabases.restore Stay organized with collections Save and categorize content based on your preferences.
- HTTP request Path parameters Request body JSON representation Response body Authorization scopes IAM Permissions Restores a single Autonomous Database.

### "Create databases \_|\_ Oracle Database at Google Cloud \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/oracle/database/docs/create-databases](https://docs.cloud.google.com/oracle/database/docs/create-databases)
- Source ID: `site-docs-reference`
- Final score: 276
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). / // const requestId = 'abc123' // Imports the Oracledatabase library const { OracleDatabaseClient } = require ( ' @google-cloud/oracledatabase ' ). v1 ; // Instantiates a client const oracledatabaseClient = new OracleDatabaseClient (); async function callCreateAutonomousDatabase () { // Construct request const request = { parent , autonomousDatabaseId , autonomousDatabase , }; // Run request const [ operation ] = await oracledatabaseClient . createAutonomousDatabase ( request ); const [ response ] = await operation . promise (); console . log ( response ); } callCreateAutonomousDatabase (); PHP use Google\ApiCore\ApiException; use Google\ApiCore\OperationResponse; use Google\Cloud\OracleDatabase\V1\AutonomousDatabase; use Google\Cloud\OracleDatabase\V1\Client\OracleDatabaseClient; use Google\Cloud\OracleDatabase\V1\CreateAutonomousDatabaseRequest; use Google\Rpc\Status; / Creates a new Autonomous Database in a given project and location. @param string $formattedParent The name of the parent in the following format: projects/{project}/locations/{location}.
- API To create an Autonomous AI Database, run the following curl command: curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json" \ "https://oracledatabase.googleapis.com/v1/projects/ PROJECT ID /locations/ REGION /autonomousDatabases/ DATABASE ID " -d \ '{ "database": " DATABASE NAME ", "displayName": " DISPLAY NAME ", "admin password": " PASSWORD ", "odb subnet": "projects/ ODB NETWORK PROJECT ID /locations/ REGION /odbNetworks/ ODB NETWORK ID /odbSubnets/ ODB SUBNET ID ", "properties": { "licenseType": " LICENSE TYPE ", "computeCount": COMPUTE COUNT , "dbVersion": " DATABASE VERSION ", "dbWorkload": " WORKLOAD TYPE ", "dataStorageSizeTb": STORAGE SIZE } }' Replace the following: PROJECT ID : the ID of your Google Cloud project in which to create the database.
- Name ; // This name can be stored, then the long-running operation retrieved later by name Operation<AutonomousDatabase , OperationMetadata > retrievedResponse = await oracleDatabaseClient .
- In Oracle Database@Google Cloud, you can create an Autonomous AI Database in the Google Cloud using Google Cloud console or the Oracle Database@Google Cloud API.

### "Delete databases \_|\_ Oracle Database at Google Cloud \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/oracle/database/docs/delete-databases](https://docs.cloud.google.com/oracle/database/docs/delete-databases)
- Source ID: `site-docs-reference`
- Final score: 268
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). / // const requestId = 'abc123' // Imports the Oracledatabase library const { OracleDatabaseClient } = require ( ' @google-cloud/oracledatabase ' ). v1 ; // Instantiates a client const oracledatabaseClient = new OracleDatabaseClient (); async function callDeleteAutonomousDatabase () { // Construct request const request = { name , }; // Run request const [ operation ] = await oracledatabaseClient . deleteAutonomousDatabase ( request ); const [ response ] = await operation . promise (); console . log ( response ); } callDeleteAutonomousDatabase (); PHP use Google\ApiCore\ApiException; use Google\ApiCore\OperationResponse; use Google\Cloud\OracleDatabase\V1\Client\OracleDatabaseClient; use Google\Cloud\OracleDatabase\V1\DeleteAutonomousDatabaseRequest; use Google\Rpc\Status; / Deletes a single Autonomous Database. @param string $formattedName The name of the resource in the following format: projects/{project}/locations/{location}/autonomousDatabases/{autonomous database}.
- Your database is deleted. gcloud You can use the gcloud oracle-database autonomous-databases delete command to delete a database. gcloud oracle-database autonomous-databases delete DATABASE ID --location= REGION ID Replace the following: DATABASE ID : the identifier for the database that you want to delete.
- Operation ; public class AsyncDeleteAutonomousDatabase { public static void main ( String [] args ) throws Exception { asyncDeleteAutonomousDatabase (); } public static void asyncDeleteAutonomousDatabase () throws Exception { // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( OracleDatabaseClient oracleDatabaseClient = OracleDatabaseClient . create ()) { DeleteAutonomousDatabaseRequest request = DeleteAutonomousDatabaseRequest . newBuilder () . setName ( AutonomousDatabaseName . of ( "[PROJECT]" , "[LOCATION]" , "[AUTONOMOUS DATABASE]" ) . toString ()) . setRequestId ( "requestId693933066" ) . build (); ApiFuture<Operation> future = oracleDatabaseClient . deleteAutonomousDatabaseCallable (). futureCall ( request ); // Do something. future . get (); } } } Node.js / This snippet has been automatically generated and should be regarded as a code template only.
- C# using Google.Cloud.OracleDatabase.V1 ; using Google.LongRunning ; using Google.Protobuf.WellKnownTypes ; using System.Threading.Tasks ; public sealed partial class GeneratedOracleDatabaseClientSnippets { /// <summary>Snippet for DeleteAutonomousDatabaseAsync</summary> /// <remarks> /// This snippet has been automatically generated and should be regarded as a code template only. /// It will require modifications to work: /// - It may require correct/in-range values for request initialization. /// - It may require specifying regional endpoints when creating the service client as shown in /// https://cloud.google.com/dotnet/docs/reference/help/client-configuration#endpoint. /// </remarks> public async Task DeleteAutonomousDatabaseAsync () { // Create client OracleDatabaseClient oracleDatabaseClient = await OracleDatabaseClient .

