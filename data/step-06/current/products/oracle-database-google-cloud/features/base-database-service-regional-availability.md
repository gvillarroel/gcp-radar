---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:04.998Z"
product_name: "Oracle Database@Google Cloud"
product_slug: "oracle-database-google-cloud"
feature_name: "Base Database Service regional availability"
feature_slug: "base-database-service-regional-availability"
latest_feature_date: "2025-10-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/oracle/database/docs/backup-database"
  - "https://docs.cloud.google.com/oracle/database/docs/create-instances"
  - "https://docs.cloud.google.com/oracle/database/docs/create-databases"
  - "https://docs.cloud.google.com/oracle/database/docs/delete-databases"
keywords:
  - "base"
  - "database"
  - "regional"
  - "availability"
  - "is"
  - "now"
  - "available"
  - "in"
---

# Base Database Service regional availability

Product: Oracle Database@Google Cloud
Coverage: MEDIUM

## Step 02 Summary

Base Database Service is now available in asia-northeast1-a-r1 and europe-west3-b-r1.

## Extended Definition

Base Database Service is now available in asia-northeast1-a-r1 and europe-west3-b-r1.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/oracle/database/docs/backup-database](https://docs.cloud.google.com/oracle/database/docs/backup-database)
- [https://docs.cloud.google.com/oracle/database/docs/create-instances](https://docs.cloud.google.com/oracle/database/docs/create-instances)
- [https://docs.cloud.google.com/oracle/database/docs/create-databases](https://docs.cloud.google.com/oracle/database/docs/create-databases)
- [https://docs.cloud.google.com/oracle/database/docs/delete-databases](https://docs.cloud.google.com/oracle/database/docs/delete-databases)

## Supporting Pages

### "View backups for an Autonomous AI Database \_|\_ Oracle Database at Google\

- URL: [https://docs.cloud.google.com/oracle/database/docs/backup-database](https://docs.cloud.google.com/oracle/database/docs/backup-database)
- Source ID: `site-docs-reference`
- Final score: 278
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- OracleDatabaseClient ; public class AsyncListAutonomousDatabaseBackups { public static void main ( String [] args ) throws Exception { asyncListAutonomousDatabaseBackups (); } public static void asyncListAutonomousDatabaseBackups () throws Exception { // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( OracleDatabaseClient oracleDatabaseClient = OracleDatabaseClient . create ()) { ListAutonomousDatabaseBackupsRequest request = ListAutonomousDatabaseBackupsRequest . newBuilder () . setParent ( LocationName . of ( "[PROJECT]" , "[LOCATION]" ). toString ()) . setFilter ( "filter-1274492040" ) . setPageSize ( 883849137 ) . setPageToken ( "pageToken873572522" ) . build (); ApiFuture<AutonomousDatabaseBackup> future = oracleDatabaseClient . listAutonomousDatabaseBackupsPagedCallable (). futureCall ( request ); // Do something. for ( AutonomousDatabaseBackup element : future . get (). iterateAll ()) { // doThingsWith(element); } } } } Node.js / This snippet has been automatically generated and should be regarded as a code template only.
- C# using Google.Api.Gax ; using Google.Cloud.OracleDatabase.V1 ; using System ; using System.Threading.Tasks ; public sealed partial class GeneratedOracleDatabaseClientSnippets { /// <summary>Snippet for ListAutonomousDatabaseBackupsAsync</summary> /// <remarks> /// This snippet has been automatically generated and should be regarded as a code template only. /// It will require modifications to work: /// - It may require correct/in-range values for request initialization. /// - It may require specifying regional endpoints when creating the service client as shown in /// https://cloud.google.com/dotnet/docs/reference/help/client-configuration#endpoint. /// </remarks> public async Task ListAutonomousDatabaseBackupsAsync () { // Create client OracleDatabaseClient oracleDatabaseClient = await OracleDatabaseClient .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client, please see the apiEndpoint client configuration option for more details. / function callSample(): void { $formattedParent = OracleDatabaseClient::locationName('[PROJECT]', '[LOCATION]'); list autonomous database backups sample($formattedParent); } Python This snippet has been automatically generated and should be regarded as a code template only.
- Background () // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in: // https://pkg.go.dev/cloud.google.com/go#hdr-Client Options c , err := oracledatabase .

### "Create Exadata Infrastructure instances \_|\_ Oracle Database at Google\

- URL: [https://docs.cloud.google.com/oracle/database/docs/create-instances](https://docs.cloud.google.com/oracle/database/docs/create-instances)
- Source ID: `site-docs-reference`
- Final score: 271
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Operation ; public class AsyncCreateCloudExadataInfrastructure { public static void main ( String [] args ) throws Exception { asyncCreateCloudExadataInfrastructure (); } public static void asyncCreateCloudExadataInfrastructure () throws Exception { // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( OracleDatabaseClient oracleDatabaseClient = OracleDatabaseClient . create ()) { CreateCloudExadataInfrastructureRequest request = CreateCloudExadataInfrastructureRequest . newBuilder () . setParent ( LocationName . of ( "[PROJECT]" , "[LOCATION]" ). toString ()) . setCloudExadataInfrastructureId ( "cloudExadataInfrastructureId975345409" ) . setCloudExadataInfrastructure ( CloudExadataInfrastructure . newBuilder (). build ()) . setRequestId ( "requestId693933066" ) . build (); ApiFuture<Operation> future = oracleDatabaseClient . createCloudExadataInfrastructureCallable (). futureCall ( request ); // Do something.
- C# using Google.Cloud.OracleDatabase.V1 ; using Google.LongRunning ; using System.Threading.Tasks ; public sealed partial class GeneratedOracleDatabaseClientSnippets { /// <summary>Snippet for CreateCloudExadataInfrastructureAsync</summary> /// <remarks> /// This snippet has been automatically generated and should be regarded as a code template only. /// It will require modifications to work: /// - It may require correct/in-range values for request initialization. /// - It may require specifying regional endpoints when creating the service client as shown in /// https://cloud.google.com/dotnet/docs/reference/help/client-configuration#endpoint. /// </remarks> public async Task CreateCloudExadataInfrastructureAsync () { // Create client OracleDatabaseClient oracleDatabaseClient = await OracleDatabaseClient .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client, please see the apiEndpoint client configuration option for more details. / function callSample(): void { $formattedParent = OracleDatabaseClient::locationName('[PROJECT]', '[LOCATION]'); $cloudExadataInfrastructureId = '[CLOUD EXADATA INFRASTRUCTURE ID]'; create cloud exadata infrastructure sample($formattedParent, $cloudExadataInfrastructureId); } Python This snippet has been automatically generated and should be regarded as a code template only.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import oracledatabase v1 def sample create cloud exadata infrastructure (): Create a client client = oracledatabase v1 .

### "Create databases \_|\_ Oracle Database at Google Cloud \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/oracle/database/docs/create-databases](https://docs.cloud.google.com/oracle/database/docs/create-databases)
- Source ID: `site-docs-reference`
- Final score: 266
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Operation ; public class AsyncCreateAutonomousDatabase { public static void main ( String [] args ) throws Exception { asyncCreateAutonomousDatabase (); } public static void asyncCreateAutonomousDatabase () throws Exception { // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( OracleDatabaseClient oracleDatabaseClient = OracleDatabaseClient . create ()) { CreateAutonomousDatabaseRequest request = CreateAutonomousDatabaseRequest . newBuilder () . setParent ( LocationName . of ( "[PROJECT]" , "[LOCATION]" ). toString ()) . setAutonomousDatabaseId ( "autonomousDatabaseId-1972693114" ) . setAutonomousDatabase ( AutonomousDatabase . newBuilder (). build ()) . setRequestId ( "requestId693933066" ) . build (); ApiFuture<Operation> future = oracleDatabaseClient . createAutonomousDatabaseCallable (). futureCall ( request ); // Do something.
- C# using Google.Cloud.OracleDatabase.V1 ; using Google.LongRunning ; using System.Threading.Tasks ; public sealed partial class GeneratedOracleDatabaseClientSnippets { /// <summary>Snippet for CreateAutonomousDatabaseAsync</summary> /// <remarks> /// This snippet has been automatically generated and should be regarded as a code template only. /// It will require modifications to work: /// - It may require correct/in-range values for request initialization. /// - It may require specifying regional endpoints when creating the service client as shown in /// https://cloud.google.com/dotnet/docs/reference/help/client-configuration#endpoint. /// </remarks> public async Task CreateAutonomousDatabaseAsync () { // Create client OracleDatabaseClient oracleDatabaseClient = await OracleDatabaseClient .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client, please see the apiEndpoint client configuration option for more details. / function callSample(): void { $formattedParent = OracleDatabaseClient::locationName('[PROJECT]', '[LOCATION]'); $autonomousDatabaseId = '[AUTONOMOUS DATABASE ID]'; create autonomous database sample($formattedParent, $autonomousDatabaseId); } Python This snippet has been automatically generated and should be regarded as a code template only.
- Background () // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in: // https://pkg.go.dev/cloud.google.com/go#hdr-Client Options c , err := oracledatabase .

### "Delete databases \_|\_ Oracle Database at Google Cloud \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/oracle/database/docs/delete-databases](https://docs.cloud.google.com/oracle/database/docs/delete-databases)
- Source ID: `site-docs-reference`
- Final score: 258
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- C# using Google.Cloud.OracleDatabase.V1 ; using Google.LongRunning ; using Google.Protobuf.WellKnownTypes ; using System.Threading.Tasks ; public sealed partial class GeneratedOracleDatabaseClientSnippets { /// <summary>Snippet for DeleteAutonomousDatabaseAsync</summary> /// <remarks> /// This snippet has been automatically generated and should be regarded as a code template only. /// It will require modifications to work: /// - It may require correct/in-range values for request initialization. /// - It may require specifying regional endpoints when creating the service client as shown in /// https://cloud.google.com/dotnet/docs/reference/help/client-configuration#endpoint. /// </remarks> public async Task DeleteAutonomousDatabaseAsync () { // Create client OracleDatabaseClient oracleDatabaseClient = await OracleDatabaseClient .
- Operation ; public class AsyncDeleteAutonomousDatabase { public static void main ( String [] args ) throws Exception { asyncDeleteAutonomousDatabase (); } public static void asyncDeleteAutonomousDatabase () throws Exception { // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( OracleDatabaseClient oracleDatabaseClient = OracleDatabaseClient . create ()) { DeleteAutonomousDatabaseRequest request = DeleteAutonomousDatabaseRequest . newBuilder () . setName ( AutonomousDatabaseName . of ( "[PROJECT]" , "[LOCATION]" , "[AUTONOMOUS DATABASE]" ) . toString ()) . setRequestId ( "requestId693933066" ) . build (); ApiFuture<Operation> future = oracleDatabaseClient . deleteAutonomousDatabaseCallable (). futureCall ( request ); // Do something. future . get (); } } } Node.js / This snippet has been automatically generated and should be regarded as a code template only.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client, please see the apiEndpoint client configuration option for more details. / function callSample(): void { $formattedName = OracleDatabaseClient::autonomousDatabaseName( '[PROJECT]', '[LOCATION]', '[AUTONOMOUS DATABASE]' ); delete autonomous database sample($formattedName); } Python This snippet has been automatically generated and should be regarded as a code template only.
- Background () // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in: // https://pkg.go.dev/cloud.google.com/go#hdr-Client Options c , err := oracledatabase .

