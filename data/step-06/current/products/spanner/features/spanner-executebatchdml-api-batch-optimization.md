---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.260Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Spanner ExecuteBatchDml API batch optimization"
feature_slug: "spanner-executebatchdml-api-batch-optimization"
latest_feature_date: "2023-10-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/batch-write"
  - "https://docs.cloud.google.com/spanner/docs/query-operators-unary"
  - "https://docs.cloud.google.com/spanner/docs/commit-timestamp-postgresql"
keywords:
  - "executebatchdml"
  - "applies"
  - "optimizations"
  - "groups"
  - "optimization"
  - "batch"
  - "statements"
---

# Spanner ExecuteBatchDml API batch optimization

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Spanner applies optimizations to groups of statements in ExecuteBatchDml API batches to improve update performance and latency.

## Extended Definition

Spanner applies optimizations to groups of statements in ExecuteBatchDml API batches to improve update performance and latency.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/batch-write](https://docs.cloud.google.com/spanner/docs/batch-write)
- [https://docs.cloud.google.com/spanner/docs/query-operators-unary](https://docs.cloud.google.com/spanner/docs/query-operators-unary)
- [https://docs.cloud.google.com/spanner/docs/commit-timestamp-postgresql](https://docs.cloud.google.com/spanner/docs/commit-timestamp-postgresql)

## Supporting Pages

### Modify data using batch write \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/batch-write](https://docs.cloud.google.com/spanner/docs/batch-write)
- Source ID: `site-docs-root`
- Final score: 84
- Re-rank relevance: N/A

Evidence snippets:
- BatchWriteResponse ; public class BatchWriteAtLeastOnceSample { / Assume DDL for the underlying database: <pre>{@code CREATE TABLE Singers ( SingerId INT64 NOT NULL, FirstName STRING(1024), LastName STRING(1024), ) PRIMARY KEY (SingerId) CREATE TABLE Albums ( SingerId INT64 NOT NULL, AlbumId INT64 NOT NULL, AlbumTitle STRING(1024), ) PRIMARY KEY (SingerId, AlbumId), INTERLEAVE IN PARENT Singers ON DELETE CASCADE }</pre> / private static final MutationGroup MUTATION GROUP1 = MutationGroup . of ( Mutation . newInsertOrUpdateBuilder ( "Singers" ) . set ( "SingerId" ) . to ( 16 ) . set ( "FirstName" ) . to ( "Scarlet" ) . set ( "LastName" ) . to ( "Terry" ) . build ()); private static final MutationGroup MUTATION GROUP2 = MutationGroup . of ( Mutation . newInsertOrUpdateBuilder ( "Singers" ) . set ( "SingerId" ) . to ( 17 ) . set ( "FirstName" ) . to ( "Marc" ) . build (), Mutation . newInsertOrUpdateBuilder ( "Singers" ) . set ( "SingerId" ) . to ( 18 ) . set ( "FirstName" ) . to ( "Catalina" ) . set ( "LastName" ) . to ( "Smith" ) . build (), Mutation . newInsertOrUpdateBuilder ( "Albums" ) . set ( "SingerId" ) . to ( 17 ) . set ( "AlbumId" ) . to ( 1 ) . set ( "AlbumTitle" ) . to ( "Total Junk" ) . build (), Mutation . newInsertOrUpdateBuilder ( "Albums" ) . set ( "SingerId" ) . to ( 18 ) . set ( "AlbumId" ) . to ( 2 ) . set ( "AlbumTitle" ) . to ( "Go, Go, Go" ) . build ()); static void batchWriteAtLeastOnce () { // TODO(developer): Replace these variables before running the sample. final String projectId = "my-project" ; final String instanceId = "my-instance" ; final String databaseId = "my-database" ; batchWriteAtLeastOnce ( projectId , instanceId , databaseId ); } static void batchWriteAtLeastOnce ( String projectId , String instanceId , String databaseId ) { try ( Spanner spanner = SpannerOptions . newBuilder (). setProjectId ( projectId ). build (). getService ()) { DatabaseId dbId = DatabaseId . of ( projectId , instanceId , databaseId ); final DatabaseClient dbClient = spanner . getDatabaseClient ( dbId ); // Creates and issues a BatchWrite RPC request that will apply the mutation groups // non-atomically and respond back with a stream of BatchWriteResponse.
- Example: @param string $projectId The Google Cloud project ID. @param string $instanceId The Spanner instance ID. @param string $databaseId The Spanner database ID. / function batch write(string $projectId, string $instanceId, string $databaseId): void { $spanner = new SpannerClient(['projectId' => $projectId]); $database = $spanner->instance($instanceId)->database($databaseId); // Create Mutation Groups // All mutations within a single group are applied atomically. // Mutations across groups are applied non-atomically. // Group 1: Single mutation $mutationGroup1 = $database->mutationGroup(); $mutationGroup1->insertOrUpdate('Singers', [ 'SingerId' => 16, 'FirstName' => 'Scarlet', 'LastName' => 'Terry' ]); // Group 2: Multiple mutations $mutationGroup2 = $database->mutationGroup(); $mutationGroup2->insertOrUpdateBatch('Singers', [ ['SingerId' => 17, 'FirstName' => 'Marc'], ['SingerId' => 18, 'FirstName' => 'Catalina', 'LastName' => 'Smith'] ]); $mutationGroup2->insertOrUpdateBatch('Albums', [ ['SingerId' => 17, 'AlbumId' => 1, 'AlbumTitle' => 'Total Junk'], ['SingerId' => 18, 'AlbumId' => 2, 'AlbumTitle' => 'Go, Go, Go'] ]); // Call batchWrite on the high-level Database client. // Equivalent to batchWriteAtLeastOnce in other languages. $responses = $database->batchWrite([$mutationGroup1, $mutationGroup2], [ 'requestOptions' => ['transactionTag' => 'batch-write-tag'] ]); // Check the response code of each response to determine whether the mutation group(s) were applied successfully. // $responses is a Generator yielding V1\BatchWriteResponse items. // Check the response code of each response to determine whether the mutation group(s) were applied successfully. // $responses is a Generator yielding response arrays. foreach ($responses as $response) { $status = $response['status']; $indexes = implode(', ', $response['indexes']); if ($status['code'] === 0) { $timestamp = $response['commitTimestamp'] ?? 'Unknown'; printf('Mutation group indexes [%s] have been applied with commit timestamp %s' .
- Please see {@link https://cloud.google.com/spanner/docs/reference/rpc/google.spanner.v1#google.spanner.v1.BatchWriteRequest.MutationGroup} for more details and examples. / const mutationGroup1 = new MutationGroup (); mutationGroup1 . insert ( 'Singers' , { SingerId : 1 , FirstName : 'Scarlet' , LastName : 'Terry' , }); const mutationGroup2 = new MutationGroup (); mutationGroup2 . insert ( 'Singers' , { SingerId : 2 , FirstName : 'Marc' , }); mutationGroup2 . insert ( 'Singers' , { SingerId : 3 , FirstName : 'Catalina' , LastName : 'Smith' , }); mutationGroup2 . insert ( 'Albums' , { AlbumId : 1 , SingerId : 2 , AlbumTitle : 'Total Junk' , }); mutationGroup2 . insert ( 'Albums' , { AlbumId : 2 , SingerId : 3 , AlbumTitle : 'Go, Go, Go' , }); const options = { transactionTag : 'batch-write-tag' , }; try { database . batchWriteAtLeastOnce ([ mutationGroup1 , mutationGroup2 ], options ) . on ( 'error' , console . error ) . on ( 'data' , response = > { // Check the response code of each response to determine whether the mutation group(s) were applied successfully. if ( response . status . code === 0 ) { console . log ( Mutation group indexes ${ response . indexes } , have been applied with commit timestamp ${ Spanner . timestamp ( response . commitTimestamp , ). toJSON () } , ); } // Mutation groups that fail to commit trigger a response with a non-zero status code. else { console . log ( Mutation group indexes ${ response . indexes } , could not be applied with error code ${ response . status . code } , and error message ${ response . status . message } , ); } }) . on ( 'end' , () = > { console . log ( 'Request completed successfully' ); }); } catch ( err ) { console . log ( err ); } PHP < ?php / Copyright 2026 Google Inc.
- Client () instance = spanner client . instance ( instance id ) database = instance . database ( database id ) with database . mutation groups () as groups : group1 = groups . group () group1 . insert or update ( table = "Singers" , columns = ( "SingerId" , "FirstName" , "LastName" ), values = [ ( 16 , "Scarlet" , "Terry" ), ], ) group2 = groups . group () group2 . insert or update ( table = "Singers" , columns = ( "SingerId" , "FirstName" , "LastName" ), values = [ ( 17 , "Marc" , "" ), ( 18 , "Catalina" , "Smith" ), ], ) group2 . insert or update ( table = "Albums" , columns = ( "SingerId" , "AlbumId" , "AlbumTitle" ), values = [ ( 17 , 1 , "Total Junk" ), ( 18 , 2 , "Go, Go, Go" ), ], ) for response in groups . batch write (): if response . status . code == OK : print ( "Mutation group indexes {} have been applied with commit timestamp {} " . format ( response . indexes , response . commit timestamp ) ) else : print ( "Mutation group indexes {} could not be applied with error {} " . format ( response . indexes , response . status ) ) Ruby require "google/cloud/spanner" This is a snippet for showcasing how to apply a batch of mutations groups.

### Unary operators \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/query-operators-unary](https://docs.cloud.google.com/spanner/docs/query-operators-unary)
- Source ID: `site-docs-reference`
- Final score: 83
- Re-rank relevance: N/A

Evidence snippets:
- Database schema The queries and execution plans on this page are based on the following database schema: CREATE TABLE Singers ( SingerId INT64 NOT NULL , FirstName STRING ( 1024 ), LastName STRING ( 1024 ), SingerInfo BYTES ( MAX ), BirthDate DATE ) PRIMARY KEY ( SingerId ); CREATE INDEX SingersByFirstLastName ON Singers ( FirstName , LastName ); CREATE TABLE Albums ( SingerId INT64 NOT NULL , AlbumId INT64 NOT NULL , AlbumTitle STRING ( MAX ), MarketingBudget INT64 ) PRIMARY KEY ( SingerId , AlbumId ), INTERLEAVE IN PARENT Singers ON DELETE CASCADE ; CREATE INDEX AlbumsByAlbumTitle ON Albums ( AlbumTitle ); CREATE INDEX AlbumsByAlbumTitle2 ON Albums ( AlbumTitle ) STORING ( MarketingBudget ); CREATE TABLE Songs ( SingerId INT64 NOT NULL , AlbumId INT64 NOT NULL , TrackId INT64 NOT NULL , SongName STRING ( MAX ), Duration INT64 , SongGenre STRING ( 25 ) ) PRIMARY KEY ( SingerId , AlbumId , TrackId ), INTERLEAVE IN PARENT Albums ON DELETE CASCADE ; CREATE INDEX SongsBySingerAlbumSongNameDesc ON Songs ( SingerId , AlbumId , SongName DESC ), INTERLEAVE IN Albums ; CREATE INDEX SongsBySongName ON Songs ( SongName ); CREATE TABLE Concerts ( VenueId INT64 NOT NULL , SingerId INT64 NOT NULL , ConcertDate DATE NOT NULL , BeginTime TIMESTAMP , EndTime TIMESTAMP , TicketPrices ARRAY<INT64> ) PRIMARY KEY ( VenueId , SingerId , ConcertDate ); You can use the following Data Manipulation Language (DML) statements to add data to these tables: INSERT INTO Singers ( SingerId , FirstName , LastName , BirthDate ) VALUES ( 1 , "Marc" , "Richards" , "1970-09-03" ), ( 2 , "Catalina" , "Smith" , "1990-08-17" ), ( 3 , "Alice" , "Trentor" , "1991-10-02" ), ( 4 , "Lea" , "Martin" , "1991-11-09" ), ( 5 , "David" , "Lomond" , "1977-01-29" ); INSERT INTO Albums ( SingerId , AlbumId , AlbumTitle ) VALUES ( 1 , 1 , "Total Junk" ), ( 1 , 2 , "Go, Go, Go" ), ( 2 , 1 , "Green" ), ( 2 , 2 , "Forever Hold Your Peace" ), ( 2 , 3 , "Terrified" ), ( 3 , 1 , "Nothing To Do With Me" ), ( 4 , 1 , "Play" ); INSERT INTO Songs ( SingerId , AlbumId , TrackId , SongName , Duration , SongGenre ) VALUES ( 2 , 1 , 1 , "Let's Get Back Together" , 182 , "COUNTRY" ), ( 2 , 1 , 2 , "Starting Again" , 156 , "ROCK" ), ( 2 , 1 , 3 , "I Knew You Were Magic" , 294 , "BLUES" ), ( 2 , 1 , 4 , "42" , 185 , "CLASSICAL" ), ( 2 , 1 , 5 , "Blue" , 238 , "BLUES" ), ( 2 , 1 , 6 , "Nothing Is The Same" , 303 , "BLUES" ), ( 2 , 1 , 7 , "The Second Time" , 255 , "ROCK" ), ( 2 , 3 , 1 , "Fight Story" , 194 , "ROCK" ), ( 3 , 1 , 1 , "Not About The Guitar" , 278 , "BLUES" ); Note: You can run queries and retrieve execution plans even if the tables have no data.
- The following query demonstrates this operator: SELECT s . singerid , Avg ( s . duration ) AS average , Count ( ) AS count FROM songs AS s GROUP BY singerid ; / ----------+---------+-------+ SingerId average count +----------+---------+-------+ 3 278 1 2 225.875 8 +----------+---------+------- / The query groups by SingerId and performs an AVG aggregation and a COUNT aggregation.
- The following operators are unary operators: Aggregate Apply mutations Create batch Compute Compute struct DataBlockToRowAdapter Filter Limit Local split union Random Id Assign RowToDataBlockAdapter Serialize result Sort TVF Union input PostgreSQL interface note: The examples in this topic are intended for GoogleSQL-dialect databases.
- Location STRING ( MAX ) NOT NULL PLACEMENT KEY ) PRIMARY KEY ( SingerId ); Now, consider this query: SELECT BirthDate FROM Singers ; This is the execution plan: The distributed union sends a subquery to each batch of splits physically stored together in the same server.

### "Commit timestamps in PostgreSQL-dialect databases \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/commit-timestamp-postgresql](https://docs.cloud.google.com/spanner/docs/commit-timestamp-postgresql)
- Source ID: `site-docs-root`
- Final score: 69
- Re-rank relevance: N/A

Evidence snippets:
- In addition this update expects the LastUpdateTime column added by applying the DDL statement "ALTER TABLE Albums ADD COLUMN LastUpdateTime TIMESTAMP OPTIONS (allow commit timestamp=true)" Example: @param string $instanceId The Spanner instance ID. @param string $databaseId The Spanner database ID. / function update data with timestamp column(string $instanceId, string $databaseId): void { $spanner = new SpannerClient(); $instance = $spanner->instance($instanceId); $database = $instance->database($databaseId); $operation = $database->transaction(['singleUse' => true]) ->updateBatch('Albums', [ ['SingerId' => 1, 'AlbumId' => 1, 'MarketingBudget' => 1000000, 'LastUpdateTime' => $spanner->commitTimestamp()], ['SingerId' => 2, 'AlbumId' => 2, 'MarketingBudget' => 750000, 'LastUpdateTime' => $spanner->commitTimestamp()], ]) ->commit(); print('Updated data.' .
- Example: @param string $instanceId The Spanner instance ID. @param string $databaseId The Spanner database ID. / function insert data with timestamp column(string $instanceId, string $databaseId): void { $spanner = new SpannerClient(); $instance = $spanner->instance($instanceId); $database = $instance->database($databaseId); $operation = $database->transaction(['singleUse' => true]) ->insertBatch('Performances', [ ['SingerId' => 1, 'VenueId' => 4, 'EventDate' => '2017-10-05', 'Revenue' => 11000, 'LastUpdateTime' => $spanner->commitTimestamp()], ['SingerId' => 1, 'VenueId' => 19, 'EventDate' => '2017-11-02', 'Revenue' => 15000, 'LastUpdateTime' => $spanner->commitTimestamp()], ['SingerId' => 2, 'VenueId' => 42, 'EventDate' => '2017-12-23', 'Revenue' => 7000, 'LastUpdateTime' => $spanner->commitTimestamp()], ]) ->commit(); print('Inserted data.' .
- For example, consider the following Performances table, which includes a commit timestamp column: CREATE TABLE Performances ( SingerId bigint NOT NULL , VenueId bigint NOT NULL , EventDate timestamp with time zone NOT NULL , Revenue bigint , LastUpdateTime spanner . commit timestamp , PRIMARY KEY ( SingerId , VenueId , EventDate ) ); This query benefits from the commit-timestamp optimization described earlier, because it has a greater-than-or-equal-to comparison between the table's commit timestamp column and a constant expression—in this case, a literal: SELECT FROM Performances WHERE LastUpdateTime > = '2022-01-01' ; Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Client () instance = spanner client . instance ( instance id ) database = instance . database ( database id ) with database . batch () as batch : batch . insert ( table = "Performances" , columns = ( "SingerId" , "VenueId" , "EventDate" , "Revenue" , "LastUpdateTime" ), values = [ ( 1 , 4 , "2017-10-05" , 11000 , spanner .

