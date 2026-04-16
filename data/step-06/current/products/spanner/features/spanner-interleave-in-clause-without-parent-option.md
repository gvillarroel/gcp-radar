---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.185Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Spanner INTERLEAVE IN clause without PARENT option"
feature_slug: "spanner-interleave-in-clause-without-parent-option"
latest_feature_date: "2025-04-24"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/commit-timestamp"
  - "https://docs.cloud.google.com/spanner/docs/batch-write"
  - "https://docs.cloud.google.com/spanner/docs/compute-capacity"
keywords:
  - "interleave"
  - "colocate"
  - "parent"
  - "without"
  - "clause"
  - "option"
  - "supports"
---

# Spanner INTERLEAVE IN clause without PARENT option

Product: Spanner
Coverage: LOW

## Step 02 Summary

Spanner supports using INTERLEAVE IN without the PARENT option to colocate child rows with parent rows, allowing child-row insertion before parent insertion and preserving child rows when deleting the parent.

## Extended Definition

Spanner supports using INTERLEAVE IN without the PARENT option to colocate child rows with parent rows, allowing child-row insertion before parent insertion and preserving child rows when deleting the parent.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/commit-timestamp](https://docs.cloud.google.com/spanner/docs/commit-timestamp)
- [https://docs.cloud.google.com/spanner/docs/batch-write](https://docs.cloud.google.com/spanner/docs/batch-write)
- [https://docs.cloud.google.com/spanner/docs/compute-capacity](https://docs.cloud.google.com/spanner/docs/compute-capacity)

## Supporting Pages

### "Compute capacity, nodes and processing units \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/compute-capacity](https://docs.cloud.google.com/spanner/docs/compute-capacity)
- Source ID: `site-docs-root`
- Final score: 42
- Re-rank relevance: N/A

### Modify data using batch write \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/batch-write](https://docs.cloud.google.com/spanner/docs/batch-write)
- Source ID: `site-docs-root`
- Final score: 34
- Re-rank relevance: N/A

Evidence snippets:
- BatchWriteResponse ; public class BatchWriteAtLeastOnceSample { / Assume DDL for the underlying database: <pre>{@code CREATE TABLE Singers ( SingerId INT64 NOT NULL, FirstName STRING(1024), LastName STRING(1024), ) PRIMARY KEY (SingerId) CREATE TABLE Albums ( SingerId INT64 NOT NULL, AlbumId INT64 NOT NULL, AlbumTitle STRING(1024), ) PRIMARY KEY (SingerId, AlbumId), INTERLEAVE IN PARENT Singers ON DELETE CASCADE }</pre> / private static final MutationGroup MUTATION GROUP1 = MutationGroup . of ( Mutation . newInsertOrUpdateBuilder ( "Singers" ) . set ( "SingerId" ) . to ( 16 ) . set ( "FirstName" ) . to ( "Scarlet" ) . set ( "LastName" ) . to ( "Terry" ) . build ()); private static final MutationGroup MUTATION GROUP2 = MutationGroup . of ( Mutation . newInsertOrUpdateBuilder ( "Singers" ) . set ( "SingerId" ) . to ( 17 ) . set ( "FirstName" ) . to ( "Marc" ) . build (), Mutation . newInsertOrUpdateBuilder ( "Singers" ) . set ( "SingerId" ) . to ( 18 ) . set ( "FirstName" ) . to ( "Catalina" ) . set ( "LastName" ) . to ( "Smith" ) . build (), Mutation . newInsertOrUpdateBuilder ( "Albums" ) . set ( "SingerId" ) . to ( 17 ) . set ( "AlbumId" ) . to ( 1 ) . set ( "AlbumTitle" ) . to ( "Total Junk" ) . build (), Mutation . newInsertOrUpdateBuilder ( "Albums" ) . set ( "SingerId" ) . to ( 18 ) . set ( "AlbumId" ) . to ( 2 ) . set ( "AlbumTitle" ) . to ( "Go, Go, Go" ) . build ()); static void batchWriteAtLeastOnce () { // TODO(developer): Replace these variables before running the sample. final String projectId = "my-project" ; final String instanceId = "my-instance" ; final String databaseId = "my-database" ; batchWriteAtLeastOnce ( projectId , instanceId , databaseId ); } static void batchWriteAtLeastOnce ( String projectId , String instanceId , String databaseId ) { try ( Spanner spanner = SpannerOptions . newBuilder (). setProjectId ( projectId ). build (). getService ()) { DatabaseId dbId = DatabaseId . of ( projectId , instanceId , databaseId ); final DatabaseClient dbClient = spanner . getDatabaseClient ( dbId ); // Creates and issues a BatchWrite RPC request that will apply the mutation groups // non-atomically and respond back with a stream of BatchWriteResponse.
- Spanner batch write supports low latency writes without a read operation, and returns responses as mutations are applied in batches.
- Example: @param string $projectId The Google Cloud project ID. @param string $instanceId The Spanner instance ID. @param string $databaseId The Spanner database ID. / function batch write(string $projectId, string $instanceId, string $databaseId): void { $spanner = new SpannerClient(['projectId' => $projectId]); $database = $spanner->instance($instanceId)->database($databaseId); // Create Mutation Groups // All mutations within a single group are applied atomically. // Mutations across groups are applied non-atomically. // Group 1: Single mutation $mutationGroup1 = $database->mutationGroup(); $mutationGroup1->insertOrUpdate('Singers', [ 'SingerId' => 16, 'FirstName' => 'Scarlet', 'LastName' => 'Terry' ]); // Group 2: Multiple mutations $mutationGroup2 = $database->mutationGroup(); $mutationGroup2->insertOrUpdateBatch('Singers', [ ['SingerId' => 17, 'FirstName' => 'Marc'], ['SingerId' => 18, 'FirstName' => 'Catalina', 'LastName' => 'Smith'] ]); $mutationGroup2->insertOrUpdateBatch('Albums', [ ['SingerId' => 17, 'AlbumId' => 1, 'AlbumTitle' => 'Total Junk'], ['SingerId' => 18, 'AlbumId' => 2, 'AlbumTitle' => 'Go, Go, Go'] ]); // Call batchWrite on the high-level Database client. // Equivalent to batchWriteAtLeastOnce in other languages. $responses = $database->batchWrite([$mutationGroup1, $mutationGroup2], [ 'requestOptions' => ['transactionTag' => 'batch-write-tag'] ]); // Check the response code of each response to determine whether the mutation group(s) were applied successfully. // $responses is a Generator yielding V1\BatchWriteResponse items. // Check the response code of each response to determine whether the mutation group(s) were applied successfully. // $responses is a Generator yielding response arrays. foreach ($responses as $response) { $status = $response['status']; $indexes = implode(', ', $response['indexes']); if ($status['code'] === 0) { $timestamp = $response['commitTimestamp'] ?? 'Unknown'; printf('Mutation group indexes [%s] have been applied with commit timestamp %s' .
- Please see {@link https://cloud.google.com/spanner/docs/reference/rpc/google.spanner.v1#google.spanner.v1.BatchWriteRequest.MutationGroup} for more details and examples. / const mutationGroup1 = new MutationGroup (); mutationGroup1 . insert ( 'Singers' , { SingerId : 1 , FirstName : 'Scarlet' , LastName : 'Terry' , }); const mutationGroup2 = new MutationGroup (); mutationGroup2 . insert ( 'Singers' , { SingerId : 2 , FirstName : 'Marc' , }); mutationGroup2 . insert ( 'Singers' , { SingerId : 3 , FirstName : 'Catalina' , LastName : 'Smith' , }); mutationGroup2 . insert ( 'Albums' , { AlbumId : 1 , SingerId : 2 , AlbumTitle : 'Total Junk' , }); mutationGroup2 . insert ( 'Albums' , { AlbumId : 2 , SingerId : 3 , AlbumTitle : 'Go, Go, Go' , }); const options = { transactionTag : 'batch-write-tag' , }; try { database . batchWriteAtLeastOnce ([ mutationGroup1 , mutationGroup2 ], options ) . on ( 'error' , console . error ) . on ( 'data' , response = > { // Check the response code of each response to determine whether the mutation group(s) were applied successfully. if ( response . status . code === 0 ) { console . log ( Mutation group indexes ${ response . indexes } , have been applied with commit timestamp ${ Spanner . timestamp ( response . commitTimestamp , ). toJSON () } , ); } // Mutation groups that fail to commit trigger a response with a non-zero status code. else { console . log ( Mutation group indexes ${ response . indexes } , could not be applied with error code ${ response . status . code } , and error message ${ response . status . message } , ); } }) . on ( 'end' , () = > { console . log ( 'Request completed successfully' ); }); } catch ( err ) { console . log ( err ); } PHP < ?php / Copyright 2026 Google Inc.

### "Commit timestamps in GoogleSQL-dialect databases \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/commit-timestamp](https://docs.cloud.google.com/spanner/docs/commit-timestamp)
- Source ID: `site-docs-root`
- Final score: 33
- Re-rank relevance: N/A

Evidence snippets:
- You could build a changelog that stores the history of changes to a given document using a schema like the following example: CREATE TABLE Documents ( UserId INT64 NOT NULL , DocumentId INT64 NOT NULL , Contents STRING ( MAX ) NOT NULL , ) PRIMARY KEY ( UserId , DocumentId ); CREATE TABLE DocumentHistory ( UserId INT64 NOT NULL , DocumentId INT64 NOT NULL , Ts TIMESTAMP NOT NULL OPTIONS ( allow commit timestamp = true ), Delta STRING ( MAX ), ) PRIMARY KEY ( UserId , DocumentId , Ts ), INTERLEAVE IN PARENT Documents ON DELETE NO ACTION ; To create a changelog, insert a new row in DocumentHistory in the same transaction in which you insert or update a row in Document .
- CREATE TABLE Performances ( SingerId INT64 NOT NULL , VenueId INT64 NOT NULL , EventDate Date , Revenue INT64 , LastUpdateTime TIMESTAMP NOT NULL OPTIONS ( allow commit timestamp = true ) ) PRIMARY KEY ( SingerId , VenueId , EventDate ), INTERLEAVE IN PARENT Singers ON DELETE CASCADE Adding the option changes the timestamp column as follows: You can use the spanner.commit timestamp() placeholder string (or a constant provided by the client library) for inserts and updates.
- Create and delete a commit timestamp column Use the allow commit timestamp column option to add and remove support for commit timestamps: When creating a new table to specify that a column supports commit timestamps.
- The allow commit timestamp option must be consistent across the primary keys of parent and child tables.

