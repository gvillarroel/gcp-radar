---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:04.989Z"
product_name: "Oracle Database@Google Cloud"
product_slug: "oracle-database-google-cloud"
feature_name: "Base Database Service availability in us-central1"
feature_slug: "base-database-service-availability-in-us-central1"
latest_feature_date: "2025-12-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/oracle/database/docs/reference/rest/v1/projects.locations.autonomousDatabases"
  - "https://docs.cloud.google.com/oracle/database/docs/reference/rest/v1/projects.locations.autonomousDatabaseBackups/list"
  - "https://docs.cloud.google.com/oracle/database/docs/reference/rest/v1/projects.locations.autonomousDatabases/list"
  - "https://docs.cloud.google.com/oracle/database/docs/backup-database"
keywords:
  - "base"
  - "database"
  - "availability"
  - "in"
  - "us"
  - "central1"
  - "is"
  - "available"
---

# Base Database Service availability in us-central1

Product: Oracle Database@Google Cloud
Coverage: MEDIUM

## Step 02 Summary

Base Database Service is available in the us-central1 location.

## Extended Definition

Base Database Service is available in the us-central1 location.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/oracle/database/docs/reference/rest/v1/projects.locations.autonomousDatabases](https://docs.cloud.google.com/oracle/database/docs/reference/rest/v1/projects.locations.autonomousDatabases)
- [https://docs.cloud.google.com/oracle/database/docs/reference/rest/v1/projects.locations.autonomousDatabaseBackups/list](https://docs.cloud.google.com/oracle/database/docs/reference/rest/v1/projects.locations.autonomousDatabaseBackups/list)
- [https://docs.cloud.google.com/oracle/database/docs/reference/rest/v1/projects.locations.autonomousDatabases/list](https://docs.cloud.google.com/oracle/database/docs/reference/rest/v1/projects.locations.autonomousDatabases/list)
- [https://docs.cloud.google.com/oracle/database/docs/backup-database](https://docs.cloud.google.com/oracle/database/docs/backup-database)

## Supporting Pages

### "REST Resource: projects.locations.autonomousDatabases \_|\_ Oracle Database\

- URL: [https://docs.cloud.google.com/oracle/database/docs/reference/rest/v1/projects.locations.autonomousDatabases](https://docs.cloud.google.com/oracle/database/docs/reference/rest/v1/projects.locations.autonomousDatabases)
- Source ID: `site-api-reference`
- Final score: 299
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- JSON representation { "ocid" : string , "computeCount" : number , "cpuCoreCount" : integer , "dataStorageSizeTb" : integer , "dataStorageSizeGb" : integer , "dbWorkload" : enum ( DBWorkload ) , "dbEdition" : enum ( DatabaseEdition ) , "characterSet" : string , "nCharacterSet" : string , "privateEndpointIp" : string , "privateEndpointLabel" : string , "dbVersion" : string , "isAutoScalingEnabled" : boolean , "isStorageAutoScalingEnabled" : boolean , "licenseType" : enum ( LicenseType ) , "customerContacts" : [ { object ( CustomerContact ) } ] , "secretId" : string , "vaultId" : string , "maintenanceScheduleType" : enum ( MaintenanceScheduleType ) , "mtlsConnectionRequired" : boolean , "backupRetentionPeriodDays" : integer , "actualUsedDataStorageSizeTb" : number , "allocatedStorageSizeTb" : number , "apexDetails" : { object ( AutonomousDatabaseApex ) } , "lifecycleDetails" : string , "state" : enum ( State ) , "autonomousContainerDatabaseId" : string , "availableUpgradeVersions" : [ string ] , "connectionStrings" : { object ( AutonomousDatabaseConnectionStrings ) } , "connectionUrls" : { object ( AutonomousDatabaseConnectionUrls ) } , "failedDataRecoveryDuration" : string , "memoryTableGbs" : integer , "isLocalDataGuardEnabled" : boolean , "localAdgAutoFailoverMaxDataLossLimit" : integer , "localStandbyDb" : { object ( AutonomousDatabaseStandbySummary ) } , "memoryPerOracleComputeUnitGbs" : integer , "localDisasterRecoveryType" : enum ( LocalDisasterRecoveryType ) , "dataSafeState" : enum ( DataSafeState ) , "databaseManagementState" : enum ( DatabaseManagementState ) , "openMode" : enum ( OpenMode ) , "operationsInsightsState" : enum ( OperationsInsightsState ) , "peerDbIds" : [ string ] , "permissionLevel" : enum ( PermissionLevel ) , "privateEndpoint" : string , "refreshableMode" : enum ( RefreshableMode ) , "refreshableState" : enum ( RefreshableState ) , "role" : enum ( Role ) , "scheduledOperationDetails" : [ { object ( ScheduledOperationDetails ) } ] , "sqlWebDeveloperUrl" : string , "supportedCloneRegions" : [ string ] , "usedDataStorageSizeTbs" : integer , "ociUrl" : string , "totalAutoBackupStorageSizeGbs" : number , "nextLongTermBackupTime" : string , "dataGuardRoleChangedTime" : string , "disasterRecoveryRoleChangedTime" : string , "maintenanceBeginTime" : string , "maintenanceEndTime" : string , "allowlistedIps" : [ string ] , "encryptionKey" : { object ( EncryptionKey ) } , "encryptionKeyHistoryEntries" : [ { object ( EncryptionKeyHistoryEntry ) } ] , "serviceAgentEmail" : string , "arePrimaryAllowlistedIpsUsed" : boolean } Fields ocid string Output only.
- The list of available Oracle Database upgrade versions for an Autonomous Database. connectionStrings object ( AutonomousDatabaseConnectionStrings ) Output only.
- The list of available regions that can be used to create a clone for the Autonomous Database. usedDataStorageSizeTbs integer Output only.
- AVAILABLE NEEDS ATTENTION Indicates that the Autonomous Database is available but needs attention state.

### "Method: projects.locations.autonomousDatabaseBackups.list \_|\_ Oracle Database\

- URL: [https://docs.cloud.google.com/oracle/database/docs/reference/rest/v1/projects.locations.autonomousDatabaseBackups/list](https://docs.cloud.google.com/oracle/database/docs/reference/rest/v1/projects.locations.autonomousDatabaseBackups/list)
- Source ID: `site-api-reference`
- Final score: 292
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If successful, the response body contains data with the following structure: JSON representation { "autonomousDatabaseBackups" : [ { object ( AutonomousDatabaseBackup ) } ] , "nextPageToken" : string } Fields autonomousDatabaseBackups[] object ( AutonomousDatabaseBackup ) The list of Autonomous Database Backups. nextPageToken string A token identifying a page of results the server should return.
- IAM Permissions Requires the following IAM permission on the parent resource: oracledatabase.autonomousDatabaseBackups.list For more information, see the IAM documentation .
- HTTP request GET https://oracledatabase.googleapis.com/v1/{parent=projects/ /locations/ }/autonomousDatabaseBackups The URL uses gRPC Transcoding syntax.
- Only the autonomousDatabaseId field is supported in the following format: autonomousDatabaseId="{autonomousDatabaseId}" .

### "Method: projects.locations.autonomousDatabases.list \_|\_ Oracle Database\

- URL: [https://docs.cloud.google.com/oracle/database/docs/reference/rest/v1/projects.locations.autonomousDatabases/list](https://docs.cloud.google.com/oracle/database/docs/reference/rest/v1/projects.locations.autonomousDatabases/list)
- Source ID: `site-api-reference`
- Final score: 292
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If successful, the response body contains data with the following structure: JSON representation { "autonomousDatabases" : [ { object ( AutonomousDatabase ) } ] , "nextPageToken" : string } Fields autonomousDatabases[] object ( AutonomousDatabase ) The list of Autonomous Databases. nextPageToken string A token identifying a page of results the server should return.
- HTTP request Path parameters Query parameters Request body Response body JSON representation Authorization scopes IAM Permissions Lists the Autonomous Databases in a given project and location.
- IAM Permissions Requires the following IAM permission on the parent resource: oracledatabase.autonomousDatabases.list For more information, see the IAM documentation .
- HTTP request GET https://oracledatabase.googleapis.com/v1/{parent=projects/ /locations/ }/autonomousDatabases The URL uses gRPC Transcoding syntax.

### "View backups for an Autonomous AI Database \_|\_ Oracle Database at Google\

- URL: [https://docs.cloud.google.com/oracle/database/docs/backup-database](https://docs.cloud.google.com/oracle/database/docs/backup-database)
- Source ID: `site-docs-reference`
- Final score: 285
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can view the details of the available backups. gcloud Use the gcloud oracle-database autonomous-database-backups list command to view the available backups. gcloud oracle-database autonomous-database-backups list --filter='autonomous database id=" DATABASE NAME "' --location= REGION ID --project= PROJECT NAME Replace the following: DATABASE NAME : name of the database you want to view backups for.
- OracleDatabaseClient ; public class AsyncListAutonomousDatabaseBackups { public static void main ( String [] args ) throws Exception { asyncListAutonomousDatabaseBackups (); } public static void asyncListAutonomousDatabaseBackups () throws Exception { // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( OracleDatabaseClient oracleDatabaseClient = OracleDatabaseClient . create ()) { ListAutonomousDatabaseBackupsRequest request = ListAutonomousDatabaseBackupsRequest . newBuilder () . setParent ( LocationName . of ( "[PROJECT]" , "[LOCATION]" ). toString ()) . setFilter ( "filter-1274492040" ) . setPageSize ( 883849137 ) . setPageToken ( "pageToken873572522" ) . build (); ApiFuture<AutonomousDatabaseBackup> future = oracleDatabaseClient . listAutonomousDatabaseBackupsPagedCallable (). futureCall ( request ); // Do something. for ( AutonomousDatabaseBackup element : future . get (). iterateAll ()) { // doThingsWith(element); } } } } Node.js / This snippet has been automatically generated and should be regarded as a code template only.
- A token identifying a page of results the server should return. / // const pageToken = 'abc123' // Imports the Oracledatabase library const { OracleDatabaseClient } = require ( ' @google-cloud/oracledatabase ' ). v1 ; // Instantiates a client const oracledatabaseClient = new OracleDatabaseClient (); async function callListAutonomousDatabaseBackups () { // Construct request const request = { parent , }; // Run request const iterable = oracledatabaseClient . listAutonomousDatabaseBackupsAsync ( request ); for await ( const response of iterable ) { console . log ( response ); } } callListAutonomousDatabaseBackups (); PHP use Google\ApiCore\ApiException; use Google\ApiCore\PagedListResponse; use Google\Cloud\OracleDatabase\V1\AutonomousDatabaseBackup; use Google\Cloud\OracleDatabase\V1\Client\OracleDatabaseClient; use Google\Cloud\OracleDatabase\V1\ListAutonomousDatabaseBackupsRequest; / Lists the long-term and automatic backups of an Autonomous Database. @param string $formattedParent The parent value for ListAutonomousDatabaseBackups in the following format: projects/{project}/locations/{location}.
- C# using Google.Api.Gax ; using Google.Cloud.OracleDatabase.V1 ; using System ; using System.Threading.Tasks ; public sealed partial class GeneratedOracleDatabaseClientSnippets { /// <summary>Snippet for ListAutonomousDatabaseBackupsAsync</summary> /// <remarks> /// This snippet has been automatically generated and should be regarded as a code template only. /// It will require modifications to work: /// - It may require correct/in-range values for request initialization. /// - It may require specifying regional endpoints when creating the service client as shown in /// https://cloud.google.com/dotnet/docs/reference/help/client-configuration#endpoint. /// </remarks> public async Task ListAutonomousDatabaseBackupsAsync () { // Create client OracleDatabaseClient oracleDatabaseClient = await OracleDatabaseClient .

