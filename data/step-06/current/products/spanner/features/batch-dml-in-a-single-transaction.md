---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.345Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Batch DML in a single transaction"
feature_slug: "batch-dml-in-a-single-transaction"
latest_feature_date: "2019-03-14"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/backfill-embeddings"
  - "https://docs.cloud.google.com/spanner/docs/batch-write"
  - "https://docs.cloud.google.com/spanner/docs/change-streams"
keywords:
  - "transaction"
  - "multiple"
  - "batch"
  - "single"
  - "running"
  - "supports"
---

# Batch DML in a single transaction

Product: Spanner
Coverage: LOW

## Step 02 Summary

Spanner supports running multiple DML statements within one transaction by using batch DML.

## Extended Definition

Spanner supports running multiple DML statements within one transaction by using batch DML.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/backfill-embeddings](https://docs.cloud.google.com/spanner/docs/backfill-embeddings)
- [https://docs.cloud.google.com/spanner/docs/batch-write](https://docs.cloud.google.com/spanner/docs/batch-write)
- [https://docs.cloud.google.com/spanner/docs/change-streams](https://docs.cloud.google.com/spanner/docs/change-streams)

## Supporting Pages

### "Generate vector embeddings for textual data in bulk using partitioned DML\

- URL: [https://docs.cloud.google.com/spanner/docs/backfill-embeddings](https://docs.cloud.google.com/spanner/docs/backfill-embeddings)
- Source ID: `site-docs-root`
- Final score: 36
- Re-rank relevance: N/A

Evidence snippets:
- Each Vertex AI request can have multiple input text fields, but there is a limit on the maximum number of tokens which is present in a single request.
- Make sure that the model endpoint supports the value of default batch size .
- Register an embedding model GoogleSQL Register a text embedding model with the Vertex AI model endpoint in your Spanner database: CREATE MODEL MODEL NAME INPUT ( content STRING ( MAX ) ) OUTPUT ( embeddings STRUCT<values ARRAY<FLOAT32> > ) REMOTE OPTIONS ( endpoint = '//aiplatform.googleapis.com/projects/ PROJECT /locations/ LOCATION /publishers/google/models/ $MODEL NAME ' , default batch size = 5 ) Replace the following: MODEL NAME : the name of the Vertex AI text embedding model PROJECT : the project hosting the Vertex AI endpoint LOCATION : the location of the Vertex AI endpoint PostgreSQL In the PostgreSQL dialect, there is no need to register the model.
- If the Vertex AI API requests are throttled due to Vertex AI API quota limits, then Spanner retries these failures under the partitioned DML transaction mode for a maximum of 20 times.

### Modify data using batch write \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/batch-write](https://docs.cloud.google.com/spanner/docs/batch-write)
- Source ID: `site-docs-root`
- Final score: 36
- Re-rank relevance: N/A

Evidence snippets:
- Example: @param string $projectId The Google Cloud project ID. @param string $instanceId The Spanner instance ID. @param string $databaseId The Spanner database ID. / function batch write(string $projectId, string $instanceId, string $databaseId): void { $spanner = new SpannerClient(['projectId' => $projectId]); $database = $spanner->instance($instanceId)->database($databaseId); // Create Mutation Groups // All mutations within a single group are applied atomically. // Mutations across groups are applied non-atomically. // Group 1: Single mutation $mutationGroup1 = $database->mutationGroup(); $mutationGroup1->insertOrUpdate('Singers', [ 'SingerId' => 16, 'FirstName' => 'Scarlet', 'LastName' => 'Terry' ]); // Group 2: Multiple mutations $mutationGroup2 = $database->mutationGroup(); $mutationGroup2->insertOrUpdateBatch('Singers', [ ['SingerId' => 17, 'FirstName' => 'Marc'], ['SingerId' => 18, 'FirstName' => 'Catalina', 'LastName' => 'Smith'] ]); $mutationGroup2->insertOrUpdateBatch('Albums', [ ['SingerId' => 17, 'AlbumId' => 1, 'AlbumTitle' => 'Total Junk'], ['SingerId' => 18, 'AlbumId' => 2, 'AlbumTitle' => 'Go, Go, Go'] ]); // Call batchWrite on the high-level Database client. // Equivalent to batchWriteAtLeastOnce in other languages. $responses = $database->batchWrite([$mutationGroup1, $mutationGroup2], [ 'requestOptions' => ['transactionTag' => 'batch-write-tag'] ]); // Check the response code of each response to determine whether the mutation group(s) were applied successfully. // $responses is a Generator yielding V1\BatchWriteResponse items. // Check the response code of each response to determine whether the mutation group(s) were applied successfully. // $responses is a Generator yielding response arrays. foreach ($responses as $response) { $status = $response['status']; $indexes = implode(', ', $response['indexes']); if ($status['code'] === 0) { $timestamp = $response['commitTimestamp'] ?? 'Unknown'; printf('Mutation group indexes [%s] have been applied with commit timestamp %s' .
- BatchWriteResponse ; public class BatchWriteAtLeastOnceSample { / Assume DDL for the underlying database: <pre>{@code CREATE TABLE Singers ( SingerId INT64 NOT NULL, FirstName STRING(1024), LastName STRING(1024), ) PRIMARY KEY (SingerId) CREATE TABLE Albums ( SingerId INT64 NOT NULL, AlbumId INT64 NOT NULL, AlbumTitle STRING(1024), ) PRIMARY KEY (SingerId, AlbumId), INTERLEAVE IN PARENT Singers ON DELETE CASCADE }</pre> / private static final MutationGroup MUTATION GROUP1 = MutationGroup . of ( Mutation . newInsertOrUpdateBuilder ( "Singers" ) . set ( "SingerId" ) . to ( 16 ) . set ( "FirstName" ) . to ( "Scarlet" ) . set ( "LastName" ) . to ( "Terry" ) . build ()); private static final MutationGroup MUTATION GROUP2 = MutationGroup . of ( Mutation . newInsertOrUpdateBuilder ( "Singers" ) . set ( "SingerId" ) . to ( 17 ) . set ( "FirstName" ) . to ( "Marc" ) . build (), Mutation . newInsertOrUpdateBuilder ( "Singers" ) . set ( "SingerId" ) . to ( 18 ) . set ( "FirstName" ) . to ( "Catalina" ) . set ( "LastName" ) . to ( "Smith" ) . build (), Mutation . newInsertOrUpdateBuilder ( "Albums" ) . set ( "SingerId" ) . to ( 17 ) . set ( "AlbumId" ) . to ( 1 ) . set ( "AlbumTitle" ) . to ( "Total Junk" ) . build (), Mutation . newInsertOrUpdateBuilder ( "Albums" ) . set ( "SingerId" ) . to ( 18 ) . set ( "AlbumId" ) . to ( 2 ) . set ( "AlbumTitle" ) . to ( "Go, Go, Go" ) . build ()); static void batchWriteAtLeastOnce () { // TODO(developer): Replace these variables before running the sample. final String projectId = "my-project" ; final String instanceId = "my-instance" ; final String databaseId = "my-database" ; batchWriteAtLeastOnce ( projectId , instanceId , databaseId ); } static void batchWriteAtLeastOnce ( String projectId , String instanceId , String databaseId ) { try ( Spanner spanner = SpannerOptions . newBuilder (). setProjectId ( projectId ). build (). getService ()) { DatabaseId dbId = DatabaseId . of ( projectId , instanceId , databaseId ); final DatabaseClient dbClient = spanner . getDatabaseClient ( dbId ); // Creates and issues a BatchWrite RPC request that will apply the mutation groups // non-atomically and respond back with a stream of BatchWriteResponse.
- Please see {@link https://cloud.google.com/spanner/docs/reference/rpc/google.spanner.v1#google.spanner.v1.BatchWriteRequest.MutationGroup} for more details and examples. / const mutationGroup1 = new MutationGroup (); mutationGroup1 . insert ( 'Singers' , { SingerId : 1 , FirstName : 'Scarlet' , LastName : 'Terry' , }); const mutationGroup2 = new MutationGroup (); mutationGroup2 . insert ( 'Singers' , { SingerId : 2 , FirstName : 'Marc' , }); mutationGroup2 . insert ( 'Singers' , { SingerId : 3 , FirstName : 'Catalina' , LastName : 'Smith' , }); mutationGroup2 . insert ( 'Albums' , { AlbumId : 1 , SingerId : 2 , AlbumTitle : 'Total Junk' , }); mutationGroup2 . insert ( 'Albums' , { AlbumId : 2 , SingerId : 3 , AlbumTitle : 'Go, Go, Go' , }); const options = { transactionTag : 'batch-write-tag' , }; try { database . batchWriteAtLeastOnce ([ mutationGroup1 , mutationGroup2 ], options ) . on ( 'error' , console . error ) . on ( 'data' , response = > { // Check the response code of each response to determine whether the mutation group(s) were applied successfully. if ( response . status . code === 0 ) { console . log ( Mutation group indexes ${ response . indexes } , have been applied with commit timestamp ${ Spanner . timestamp ( response . commitTimestamp , ). toJSON () } , ); } // Mutation groups that fail to commit trigger a response with a non-zero status code. else { console . log ( Mutation group indexes ${ response . indexes } , could not be applied with error code ${ response . status . code } , and error message ${ response . status . message } , ); } }) . on ( 'end' , () = > { console . log ( 'Request completed successfully' ); }); } catch ( err ) { console . log ( err ); } PHP < ?php / Copyright 2026 Google Inc.
- All mutations in a group are applied atomically. @param project id [String] The ID of the Google Cloud project. @param instance id [String] The ID of the spanner instance. @param database id [String] The ID of the database. def spanner batch write project id :, instance id :, database id : spanner = Google :: Cloud :: Spanner . new project : project id client = spanner . client instance id , database id results = client . batch write do b First mutation group b . mutation group do mg mg . upsert "Singers" , [ { SingerId : 16 , FirstName : "Scarlet" , LastName : "Terry" } ] end Second mutation group b . mutation group do mg mg . upsert "Singers" , [ { SingerId : 17 , FirstName : "Marc" }, { SingerId : 18 , FirstName : "Catalina" , LastName : "Smith" } ] mg . upsert "Albums" , [ { SingerId : 17 , AlbumId : 1 , AlbumTitle : "Total Junk" }, { SingerId : 18 , AlbumId : 2 , AlbumTitle : "Go, Go, Go" } ] end end results . each do response if response . ok? puts "Mutation group indexes applied: #{ response . indexes } " else puts "Mutation group failed to apply: #{ response . indexes } " puts "Error: #{ response . status . message } " end end end What's next Learn more about Spanner transactions .

### Change streams overview \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/change-streams](https://docs.cloud.google.com/spanner/docs/change-streams)
- Source ID: `site-docs-root`
- Final score: 32
- Re-rank relevance: N/A

Evidence snippets:
- This parameter is part of the TransactionOptions and BatchWriteRequest methods.
- For change streams monitoring columns modified by transactions, when exclude txn from change streams is set to true , two scenarios are possible: If the DDL option allow txn exclusion is set to true , then the updates made within this transaction aren't recorded in the change stream.
- After you configure the connector with details about a particular change stream, it automatically outputs new data change records into a single, unbounded PCollection data set, ready for further processing by subsequent transforms in the Dataflow pipeline.
- If you don't set the exclude txn from change streams option or if it's set to false , then any change streams monitoring columns modified by transactions will capture the updates made within that transaction.

