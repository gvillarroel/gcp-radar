---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:04.997Z"
product_name: "Oracle Database@Google Cloud"
product_slug: "oracle-database-google-cloud"
feature_name: "Autonomous Database failover"
feature_slug: "autonomous-database-failover"
latest_feature_date: "2025-11-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/oracle/database/docs/reference/rest/v1/projects.locations.autonomousDatabases"
  - "https://docs.cloud.google.com/oracle/database/docs/reference/rest/v1/projects.locations.autonomousDatabases/failover"
  - "https://docs.cloud.google.com/oracle/database/docs/cross-region-dr-with-data-guard"
  - "https://docs.cloud.google.com/oracle/database/docs/delete-databases"
keywords:
  - "autonomous"
  - "database"
  - "failover"
  - "databases"
  - "now"
  - "when"
  - "the"
  - "primary"
---

# Autonomous Database failover

Product: Oracle Database@Google Cloud
Coverage: MEDIUM

## Step 02 Summary

Autonomous Databases now support failover when the primary database becomes inaccessible.

## Extended Definition

Autonomous Databases now support failover when the primary database becomes inaccessible.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/oracle/database/docs/reference/rest/v1/projects.locations.autonomousDatabases](https://docs.cloud.google.com/oracle/database/docs/reference/rest/v1/projects.locations.autonomousDatabases)
- [https://docs.cloud.google.com/oracle/database/docs/reference/rest/v1/projects.locations.autonomousDatabases/failover](https://docs.cloud.google.com/oracle/database/docs/reference/rest/v1/projects.locations.autonomousDatabases/failover)
- [https://docs.cloud.google.com/oracle/database/docs/cross-region-dr-with-data-guard](https://docs.cloud.google.com/oracle/database/docs/cross-region-dr-with-data-guard)
- [https://docs.cloud.google.com/oracle/database/docs/delete-databases](https://docs.cloud.google.com/oracle/database/docs/delete-databases)

## Supporting Pages

### "REST Resource: projects.locations.autonomousDatabases \_|\_ Oracle Database\

- URL: [https://docs.cloud.google.com/oracle/database/docs/reference/rest/v1/projects.locations.autonomousDatabases](https://docs.cloud.google.com/oracle/database/docs/reference/rest/v1/projects.locations.autonomousDatabases)
- Source ID: `site-api-reference`
- Final score: 295
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Methods create Creates a new Autonomous Database in a given project and location. delete Deletes a single Autonomous Database. failover Initiates a failover to target autonomous database from the associated primary database. generateWallet Generates a wallet for an Autonomous Database. get Gets the details of a single Autonomous Database. list Lists the Autonomous Databases in a given project and location. patch Updates the parameters of a single Autonomous Database. restart Restarts an Autonomous Database. restore Restores a single Autonomous Database. start Starts an Autonomous Database. stop Stops an Autonomous Database. switchover Initiates a switchover of specified autonomous database to the associated peer database.
- JSON representation { "ocid" : string , "computeCount" : number , "cpuCoreCount" : integer , "dataStorageSizeTb" : integer , "dataStorageSizeGb" : integer , "dbWorkload" : enum ( DBWorkload ) , "dbEdition" : enum ( DatabaseEdition ) , "characterSet" : string , "nCharacterSet" : string , "privateEndpointIp" : string , "privateEndpointLabel" : string , "dbVersion" : string , "isAutoScalingEnabled" : boolean , "isStorageAutoScalingEnabled" : boolean , "licenseType" : enum ( LicenseType ) , "customerContacts" : [ { object ( CustomerContact ) } ] , "secretId" : string , "vaultId" : string , "maintenanceScheduleType" : enum ( MaintenanceScheduleType ) , "mtlsConnectionRequired" : boolean , "backupRetentionPeriodDays" : integer , "actualUsedDataStorageSizeTb" : number , "allocatedStorageSizeTb" : number , "apexDetails" : { object ( AutonomousDatabaseApex ) } , "lifecycleDetails" : string , "state" : enum ( State ) , "autonomousContainerDatabaseId" : string , "availableUpgradeVersions" : [ string ] , "connectionStrings" : { object ( AutonomousDatabaseConnectionStrings ) } , "connectionUrls" : { object ( AutonomousDatabaseConnectionUrls ) } , "failedDataRecoveryDuration" : string , "memoryTableGbs" : integer , "isLocalDataGuardEnabled" : boolean , "localAdgAutoFailoverMaxDataLossLimit" : integer , "localStandbyDb" : { object ( AutonomousDatabaseStandbySummary ) } , "memoryPerOracleComputeUnitGbs" : integer , "localDisasterRecoveryType" : enum ( LocalDisasterRecoveryType ) , "dataSafeState" : enum ( DataSafeState ) , "databaseManagementState" : enum ( DatabaseManagementState ) , "openMode" : enum ( OpenMode ) , "operationsInsightsState" : enum ( OperationsInsightsState ) , "peerDbIds" : [ string ] , "permissionLevel" : enum ( PermissionLevel ) , "privateEndpoint" : string , "refreshableMode" : enum ( RefreshableMode ) , "refreshableState" : enum ( RefreshableState ) , "role" : enum ( Role ) , "scheduledOperationDetails" : [ { object ( ScheduledOperationDetails ) } ] , "sqlWebDeveloperUrl" : string , "supportedCloneRegions" : [ string ] , "usedDataStorageSizeTbs" : integer , "ociUrl" : string , "totalAutoBackupStorageSizeGbs" : number , "nextLongTermBackupTime" : string , "dataGuardRoleChangedTime" : string , "disasterRecoveryRoleChangedTime" : string , "maintenanceBeginTime" : string , "maintenanceEndTime" : string , "allowlistedIps" : [ string ] , "encryptionKey" : { object ( EncryptionKey ) } , "encryptionKeyHistoryEntries" : [ { object ( EncryptionKeyHistoryEntry ) } ] , "serviceAgentEmail" : string , "arePrimaryAllowlistedIpsUsed" : boolean } Fields ocid string Output only.
- Resource: AutonomousDatabase JSON representation AutonomousDatabaseProperties JSON representation DatabaseEdition LicenseType MaintenanceScheduleType AutonomousDatabaseApex JSON representation State AutonomousDatabaseConnectionStrings JSON representation AllConnectionStrings JSON representation DatabaseConnectionStringProfile JSON representation ConsumerGroup HostFormat Protocol SessionMode SyntaxFormat TLSAuthentication AutonomousDatabaseConnectionUrls JSON representation AutonomousDatabaseStandbySummary JSON representation LocalDisasterRecoveryType DataSafeState DatabaseManagementState OpenMode OperationsInsightsState PermissionLevel RefreshableMode RefreshableState Role ScheduledOperationDetails JSON representation TimeOfDay JSON representation EncryptionKey JSON representation Provider EncryptionKeyHistoryEntry JSON representation SourceConfig JSON representation Methods Resource: AutonomousDatabase Details of the Autonomous Database resource. https://docs.oracle.com/en-us/iaas/api/#/en/database/20160918/AutonomousDatabase/ JSON representation { "name" : string , "database" : string , "displayName" : string , "entitlementId" : string , "adminPassword" : string , "properties" : { object ( AutonomousDatabaseProperties ) } , "labels" : { string : string , ... } , "network" : string , "cidr" : string , "odbNetwork" : string , "odbSubnet" : string , "sourceConfig" : { object ( SourceConfig ) } , "peerAutonomousDatabases" : [ string ] , "createTime" : string , "disasterRecoverySupportedLocations" : [ string ] } Fields name string Identifier.
- The field's value is FALSE if both Data Guard and Access Control are enabled, and the Autonomous Database is using a different IP access control list (ACL) for standby compared to primary.

### "Method: projects.locations.autonomousDatabases.failover \_|\_ Oracle Database\

- URL: [https://docs.cloud.google.com/oracle/database/docs/reference/rest/v1/projects.locations.autonomousDatabases/failover](https://docs.cloud.google.com/oracle/database/docs/reference/rest/v1/projects.locations.autonomousDatabases/failover)
- Source ID: `site-api-reference`
- Final score: 281
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- HTTP request Path parameters Request body JSON representation Response body Authorization scopes IAM Permissions Initiates a failover to target autonomous database from the associated primary database.
- IAM Permissions Requires the following IAM permission on the name resource: oracledatabase.autonomousDatabases.failover For more information, see the IAM documentation .
- HTTP request POST https://oracledatabase.googleapis.com/v1/{name=projects/ /locations/ /autonomousDatabases/ }:failover The URL uses gRPC Transcoding syntax.
- Home Documentation Databases Oracle Database at Google Cloud Reference Send feedback Method: projects.locations.autonomousDatabases.failover Stay organized with collections Save and categorize content based on your preferences.

### "Protect Autonomous AI Databases with cross-region disaster recovery \_|\_\

- URL: [https://docs.cloud.google.com/oracle/database/docs/cross-region-dr-with-data-guard](https://docs.cloud.google.com/oracle/database/docs/cross-region-dr-with-data-guard)
- Source ID: `site-docs-reference`
- Final score: 263
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example, combining the connection details for the demodb1 primary and standby databases would result in the following connection string for the high predefined service : demodb1 high adg = (description list= (failover=on) (load balance=off) (description= (retry count=15) (retry delay=3) (address= (protocol=tcps) (port=1521) (host=demodb1.adb.us-saltlake-2.oraclecloud.com) ) (connect data= (service name=g24da7e94756f60 demodb1 high.adb.oraclecloud.com) ) (security= (ssl server dn match=no) ) ) (description= (retry count=15) (retry delay=3) (address= (protocol=tcps) (port=1521) (host=demodb1.adb.us-ashburn-1.oraclecloud.com) ) (connect data= (service name=g24da7e94756f60 demodb1 high.adb.oraclecloud.com) ) (security= (ssl server dn match=no) ) ) ) Initiation of applications connections with a multi-region connection string may take slightly longer to complete.
- Set up peer databases To learn how to create and manage peer databases, and perform switchover in Google Cloud, refer the following: Create a peer database View peer databases Delete peer databases Perform a switchover Configuring database clients when Autonomous Data Guard is enabled Single-region applications versus multi-region applications Deciding when to run multi-region Oracle AI Database applications hinges on a careful evaluation of your business requirements.
- Considerations Consider the following points while setting up peer databases with Autonomous Data Guard: Primary and peer databases must be accessible from the same VPC network.
- Prerequisites Typically known as standby databases in an on-premises deployment, Autonomous Data Guard peer databases are added after a primary database has been provisioned.

### "Delete databases \_|\_ Oracle Database at Google Cloud \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/oracle/database/docs/delete-databases](https://docs.cloud.google.com/oracle/database/docs/delete-databases)
- Source ID: `site-docs-reference`
- Final score: 226
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- C# using Google.Cloud.OracleDatabase.V1 ; using Google.LongRunning ; using Google.Protobuf.WellKnownTypes ; using System.Threading.Tasks ; public sealed partial class GeneratedOracleDatabaseClientSnippets { /// <summary>Snippet for DeleteAutonomousDatabaseAsync</summary> /// <remarks> /// This snippet has been automatically generated and should be regarded as a code template only. /// It will require modifications to work: /// - It may require correct/in-range values for request initialization. /// - It may require specifying regional endpoints when creating the service client as shown in /// https://cloud.google.com/dotnet/docs/reference/help/client-configuration#endpoint. /// </remarks> public async Task DeleteAutonomousDatabaseAsync () { // Create client OracleDatabaseClient oracleDatabaseClient = await OracleDatabaseClient .
- Operation ; public class AsyncDeleteAutonomousDatabase { public static void main ( String [] args ) throws Exception { asyncDeleteAutonomousDatabase (); } public static void asyncDeleteAutonomousDatabase () throws Exception { // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( OracleDatabaseClient oracleDatabaseClient = OracleDatabaseClient . create ()) { DeleteAutonomousDatabaseRequest request = DeleteAutonomousDatabaseRequest . newBuilder () . setName ( AutonomousDatabaseName . of ( "[PROJECT]" , "[LOCATION]" , "[AUTONOMOUS DATABASE]" ) . toString ()) . setRequestId ( "requestId693933066" ) . build (); ApiFuture<Operation> future = oracleDatabaseClient . deleteAutonomousDatabaseCallable (). futureCall ( request ); // Do something. future . get (); } } } Node.js / This snippet has been automatically generated and should be regarded as a code template only.
- The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). / // const requestId = 'abc123' // Imports the Oracledatabase library const { OracleDatabaseClient } = require ( ' @google-cloud/oracledatabase ' ). v1 ; // Instantiates a client const oracledatabaseClient = new OracleDatabaseClient (); async function callDeleteAutonomousDatabase () { // Construct request const request = { name , }; // Run request const [ operation ] = await oracledatabaseClient . deleteAutonomousDatabase ( request ); const [ response ] = await operation . promise (); console . log ( response ); } callDeleteAutonomousDatabase (); PHP use Google\ApiCore\ApiException; use Google\ApiCore\OperationResponse; use Google\Cloud\OracleDatabase\V1\Client\OracleDatabaseClient; use Google\Cloud\OracleDatabase\V1\DeleteAutonomousDatabaseRequest; use Google\Rpc\Status; / Deletes a single Autonomous Database. @param string $formattedName The name of the resource in the following format: projects/{project}/locations/{location}/autonomousDatabases/{autonomous database}.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client, please see the apiEndpoint client configuration option for more details. / function callSample(): void { $formattedName = OracleDatabaseClient::autonomousDatabaseName( '[PROJECT]', '[LOCATION]', '[AUTONOMOUS DATABASE]' ); delete autonomous database sample($formattedName); } Python This snippet has been automatically generated and should be regarded as a code template only.

