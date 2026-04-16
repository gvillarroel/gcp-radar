---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.323Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Spanner transaction commit statistics"
feature_slug: "spanner-transaction-commit-statistics"
latest_feature_date: "2021-03-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/commit-statistics"
  - "https://docs.cloud.google.com/spanner/docs/commit-timestamp"
  - "https://docs.cloud.google.com/spanner/docs/commit-timestamp-postgresql"
keywords:
  - "optionally"
  - "mutation"
  - "commit"
  - "transaction"
  - "statistics"
  - "return"
---

# Spanner transaction commit statistics

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Spanner can optionally return the mutation count for a transaction in the commit response to help optimize transactions within mutation count limits.

## Extended Definition

Spanner can optionally return the mutation count for a transaction in the commit response to help optimize transactions within mutation count limits.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/commit-statistics](https://docs.cloud.google.com/spanner/docs/commit-statistics)
- [https://docs.cloud.google.com/spanner/docs/commit-timestamp](https://docs.cloud.google.com/spanner/docs/commit-timestamp)
- [https://docs.cloud.google.com/spanner/docs/commit-timestamp-postgresql](https://docs.cloud.google.com/spanner/docs/commit-timestamp-postgresql)

## Supporting Pages

### "Retrieve commit statistics for a transaction \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/commit-statistics](https://docs.cloud.google.com/spanner/docs/commit-statistics)
- Source ID: `site-docs-root`
- Final score: 217
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- SpannerOptions ; import java.util.Arrays ; public class GetCommitStatsSample { static void getCommitStats () { // TODO(developer): Replace these variables before running the sample. final String projectId = "my-project" ; final String instanceId = "my-instance" ; final String databaseId = "my-database" ; try ( Spanner spanner = SpannerOptions . newBuilder (). setProjectId ( projectId ). build (). getService ()) { final DatabaseClient databaseClient = spanner . getDatabaseClient ( DatabaseId . of ( projectId , instanceId , databaseId )); getCommitStats ( databaseClient ); } } static void getCommitStats ( DatabaseClient databaseClient ) { final CommitResponse commitResponse = databaseClient . writeWithOptions ( Arrays . asList ( Mutation . newInsertOrUpdateBuilder ( "Albums" ) . set ( "SingerId" ) . to ( "1" ) . set ( "AlbumId" ) . to ( "1" ) . set ( "MarketingBudget" ) . to ( "200000" ) . build (), Mutation . newInsertOrUpdateBuilder ( "Albums" ) . set ( "SingerId" ) . to ( "2" ) . set ( "AlbumId" ) . to ( "2" ) . set ( "MarketingBudget" ) . to ( "400000" ) . build () ), Options . commitStats ()); System . out . println ( "Updated data with " + commitResponse . getCommitStats (). getMutationCount () + " mutations." ); } } Node.js The following code sets the returnCommitStats flag and returns a mutation count of 6, because we are inserting or updating 2 rows and 3 columns in each row. // Imports the Google Cloud client library. const { Spanner } = require ( ' @google-cloud/spanner ' ); / TODO(developer): Uncomment the following lines before running the sample. / // const projectId = 'my-project-id'; // const instanceId = 'my-instance'; // const databaseId = 'my-database'; // Creates a client. const spanner = new Spanner ({ projectId : projectId , }); // Gets a reference to a Cloud Spanner instance and database. const instance = spanner . instance ( instanceId ); const database = instance . database ( databaseId ); // Instantiate Spanner table objects. const albumsTable = database . table ( 'Albums' ); // Updates rows in the Venues table. try { const [ response ] = await albumsTable . upsert ( [ { SingerId : '1' , AlbumId : '1' , MarketingBudget : '200000' }, { SingerId : '2' , AlbumId : '2' , MarketingBudget : '400000' }, ], { returnCommitStats : true }, ); console . log ( Updated data with ${ response . commitStats . mutationCount } mutations. , ); } catch ( err ) { console . error ( 'ERROR:' , err ); } finally { // Close the database when finished. database . close (); } PHP use Google\Cloud\Spanner\SpannerClient; use Google\Cloud\Spanner\Transaction; / Creates a database and tables for sample data.
- Client () instance = spanner client . instance ( instance id ) database = instance . database ( database id , logger = CommitStatsSampleLogger ()) database . log commit stats = True def insert singers ( transaction ): row ct = transaction . execute update ( "INSERT Singers (SingerId, FirstName, LastName) " " VALUES (110, 'Virginia', 'Watson')" ) print ( " {} record(s) inserted." . format ( row ct )) database . run in transaction ( insert singers ) commit stats = database . logger . last commit stats print ( " {} mutation(s) in transaction." . format ( commit stats . mutation count )) Ruby The following code sets the return commit stats flag and returns a mutation count of 6, because we are inserting or updating 2 rows and 3 columns in each row. project id = "Your Google Cloud project ID" instance id = "Your Spanner instance ID" database id = "Your Spanner database ID" require "google/cloud/spanner" spanner = Google :: Cloud :: Spanner . new project : project id client = spanner . client instance id , database id records = [ { SingerId : 1 , AlbumId : 1 , MarketingBudget : 200 000 }, { SingerId : 2 , AlbumId : 2 , MarketingBudget : 400 000 } ] commit options = { return commit stats : true } resp = client . upsert "Albums" , records , commit options : commit options puts "Updated data with #{ resp . stats . mutation count } mutations." What's next CommitStats REST reference .
- Example: @param string $instanceId The Spanner instance ID. @param string $databaseId The Spanner database ID. / function get commit stats(string $instanceId, string $databaseId): void { $spanner = new SpannerClient(); $instance = $spanner->instance($instanceId); $database = $instance->database($databaseId); $commitStats = $database->runTransaction(function (Transaction $t) { $t->updateBatch('Albums', [ [ 'SingerId' => 1, 'AlbumId' => 1, 'MarketingBudget' => 200000, ], [ 'SingerId' => 2, 'AlbumId' => 2, 'MarketingBudget' => 400000, ] ]); $t->commit(['returnCommitStats' => true]); return $t->getCommitStats(); }); print('Updated data with ' . $commitStats['mutationCount'] . ' mutations.' .
- WriteLine ( $"{mutationCount} mutation(s) in transaction..." ); return mutationCount ; } /// <summary> /// Sample logger that keeps a reference to the last seen commit response. /// Use the default logger if you only want to log the commit stats. /// </summary> public class CommitStatsSampleLogger : Logger { internal CommitResponse lastCommitResponse ; /// <summary> /// This method is called when a transaction that requested commit stats is committed. /// </summary> public override void LogCommitStats ( CommitRequest request , CommitResponse response ) { lastCommitResponse = response ; base .

### "Commit timestamps in PostgreSQL-dialect databases \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/commit-timestamp-postgresql](https://docs.cloud.google.com/spanner/docs/commit-timestamp-postgresql)
- Source ID: `site-docs-root`
- Final score: 148
- Re-rank relevance: N/A

Evidence snippets:
- CommitTimestamp }), }) return err } Java static void updateWithTimestamp ( DatabaseClient dbClient ) { // Mutation can be used to update/insert/delete a single row in a table.
- COMMIT TIMESTAMP ) . build ()); } dbClient . write ( mutations ); } Node.js // Imports the Google Cloud client library const { Spanner } = require ( ' @google-cloud/spanner ' ); / TODO(developer): Uncomment the following lines before running the sample. / // const projectId = 'my-project-id'; // const instanceId = 'my-instance'; // const databaseId = 'my-database'; // Creates a client const spanner = new Spanner ({ projectId : projectId , }); // Gets a reference to a Cloud Spanner instance and database const instance = spanner . instance ( instanceId ); const database = instance . database ( databaseId ); // Instantiate Spanner table objects const performancesTable = database . table ( 'Performances' ); const data = [ { SingerId : '1' , VenueId : '4' , EventDate : '2017-10-05' , Revenue : '11000' , LastUpdateTime : 'spanner.commit timestamp()' , }, { SingerId : '1' , VenueId : '19' , EventDate : '2017-11-02' , Revenue : '15000' , LastUpdateTime : 'spanner.commit timestamp()' , }, { SingerId : '2' , VenueId : '42' , EventDate : '2017-12-23' , Revenue : '7000' , LastUpdateTime : 'spanner.commit timestamp()' , }, ]; // Inserts rows into the Singers table // Note: Cloud Spanner interprets Node.js numbers as FLOAT64s, so // they must be converted to strings before being inserted as INT64s try { await performancesTable . insert ( data ); console . log ( 'Inserted data.' ); } catch ( err ) { console . error ( 'ERROR:' , err ); } finally { // Close the database when finished database . close (); } PHP use Google\Cloud\Spanner\SpannerClient; / Inserts sample data into a table with a commit timestamp column.
- COMMIT TIMESTAMP ) . build ()); // This writes all the mutations to Cloud Spanner atomically. dbClient . write ( mutations ); } Node.js // ... // Imports the Google Cloud client library const { Spanner } = require ( ' @google-cloud/spanner ' ); / TODO(developer): Uncomment the following lines before running the sample. / // const projectId = 'my-project-id'; // const instanceId = 'my-instance'; // const databaseId = 'my-database'; // Creates a client const spanner = new Spanner ({ projectId : projectId , }); // Gets a reference to a Cloud Spanner instance and database const instance = spanner . instance ( instanceId ); const database = instance . database ( databaseId ); // Update a row in the Albums table // Note: Cloud Spanner interprets Node.js numbers as FLOAT64s, so they // must be converted to strings before being inserted as INT64s const albumsTable = database . table ( 'Albums' ); const data = [ { SingerId : '1' , AlbumId : '1' , MarketingBudget : '1000000' , LastUpdateTime : 'spanner.commit timestamp()' , }, { SingerId : '2' , AlbumId : '2' , MarketingBudget : '750000' , LastUpdateTime : 'spanner.commit timestamp()' , }, ]; try { await albumsTable . update ( data ); console . log ( 'Updated data.' ); } catch ( err ) { console . error ( 'ERROR:' , err ); } finally { // Close the database when finished database . close (); } PHP use Google\Cloud\Spanner\SpannerClient; / Updates sample data in a table with a commit timestamp column.
- COMMIT TIMESTAMP ), ], ) print ( "Inserted data." ) Ruby project id = "Your Google Cloud project ID" instance id = "Your Spanner instance ID" database id = "Your Spanner database ID" require "google/cloud/spanner" spanner = Google :: Cloud :: Spanner . new project : project id client = spanner . client instance id , database id Get commit timestamp commit timestamp = client . commit timestamp client . commit do c c . insert "Performances" , [ { SingerId : 1 , VenueId : 4 , EventDate : "2017-10-05" , Revenue : 11 000 , LastUpdateTime : commit timestamp }, { SingerId : 1 , VenueId : 19 , EventDate : "2017-11-02" , Revenue : 15 000 , LastUpdateTime : commit timestamp }, { SingerId : 2 , VenueId : 42 , EventDate : "2017-12-23" , Revenue : 7000 , LastUpdateTime : commit timestamp } ] end puts "Inserted data" If you have mutations on rows in multiple tables, you must specify spanner.commit timestamp() (or client library constant) for the commit timestamp column in each table.

### "Commit timestamps in GoogleSQL-dialect databases \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/commit-timestamp](https://docs.cloud.google.com/spanner/docs/commit-timestamp)
- Source ID: `site-docs-root`
- Final score: 144
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Fprintf ( w , "%d record(s) updated.\n" , rowCount ) return nil }) return err } Java static void updateUsingDmlWithTimestamp ( DatabaseClient dbClient ) { dbClient . readWriteTransaction () . run ( transaction - > { String sql = "UPDATE Albums " + "SET LastUpdateTime = PENDING COMMIT TIMESTAMP() WHERE SingerId = 1" ; long rowCount = transaction . executeUpdate ( Statement . of ( sql )); System . out . printf ( "%d records updated.\n" , rowCount ); return null ; }); } Node.js // Imports the Google Cloud client library const { Spanner } = require ( ' @google-cloud/spanner ' ); / TODO(developer): Uncomment the following lines before running the sample. / // const projectId = 'my-project-id'; // const instanceId = 'my-instance'; // const databaseId = 'my-database'; // Creates a client const spanner = new Spanner ({ projectId : projectId , }); // Gets a reference to a Cloud Spanner instance and database const instance = spanner . instance ( instanceId ); const database = instance . database ( databaseId ); database . runTransaction ( async ( err , transaction ) = > { if ( err ) { console . error ( err ); return ; } try { const [ rowCount ] = await transaction . runUpdate ({ sql : UPDATE Albums SET LastUpdateTime = PENDING COMMIT TIMESTAMP() WHERE SingerId = 1 , }); console . log ( Successfully updated ${ rowCount } records. ); await transaction . commit (); } catch ( err ) { console . error ( 'ERROR:' , err ); } finally { // Close the database when finished. database . close (); } }); PHP use Google\Cloud\Spanner\SpannerClient; use Google\Cloud\Spanner\Transaction; / Update data with a DML statement using timestamps.
- ExecuteDml ( std :: move ( txn ), spanner :: SqlStatement ( "UPDATE Albums SET LastUpdateTime = PENDING COMMIT TIMESTAMP()" " WHERE SingerId = 1" )); if ( ! update ) return std :: move ( update ). status (); return spanner :: Mutations {}; }); if ( ! commit result ) throw std :: move ( commit result ). status (); std :: cout << "Update was successful " << "[spanner dml standard update with timestamp] \n " ; } C# using Google.Cloud.Spanner.Data ; using System ; using System.Threading.Tasks ; public class UpdateUsingDmlWithTimestampCoreAsyncSample { public async Task<int> UpdateUsingDmlWithTimestampCoreAsync ( string projectId , string instanceId , string databaseId ) { string connectionString = $"Data Source=projects/{projectId}/instances/{instanceId}/databases/{databaseId}" ; using var connection = new SpannerConnection ( connectionString ); await connection .
- Client () instance = spanner client . instance ( instance id ) database = instance . database ( database id ) def update albums ( transaction ): row ct = transaction . execute update ( "UPDATE Albums " "SET LastUpdateTime = PENDING COMMIT TIMESTAMP() " "WHERE SingerId = 1" ) print ( " {} record(s) updated." . format ( row ct )) database . run in transaction ( update albums ) Ruby project id = "Your Google Cloud project ID" instance id = "Your Spanner instance ID" database id = "Your Spanner database ID" require "google/cloud/spanner" spanner = Google :: Cloud :: Spanner . new project : project id client = spanner . client instance id , database id row count = 0 client . transaction do transaction row count = transaction . execute update ( "UPDATE Albums SET LastUpdateTime = PENDING COMMIT TIMESTAMP() WHERE SingerId = 1" ) end puts " #{ row count } records updated." Ruby project id = "Your Google Cloud project ID" instance id = "Your Spanner instance ID" database id = "Your Spanner database ID" require "google/cloud/spanner" spanner = Google :: Cloud :: Spanner . new project : project id client = spanner . client instance id , database id commit timestamp = client . commit timestamp client . commit do c c . update "Albums" , [ { SingerId : 1 , AlbumId : 1 , MarketingBudget : 100 000 , LastUpdateTime : commit timestamp }, { SingerId : 2 , AlbumId : 2 , MarketingBudget : 750 000 , LastUpdateTime : commit timestamp } ] end puts "Updated data" Commit timestamps can only be written to columns annotated with the allow commit timestamp=true option.
- You could build a changelog that stores the history of changes to a given document using a schema like the following example: CREATE TABLE Documents ( UserId INT64 NOT NULL , DocumentId INT64 NOT NULL , Contents STRING ( MAX ) NOT NULL , ) PRIMARY KEY ( UserId , DocumentId ); CREATE TABLE DocumentHistory ( UserId INT64 NOT NULL , DocumentId INT64 NOT NULL , Ts TIMESTAMP NOT NULL OPTIONS ( allow commit timestamp = true ), Delta STRING ( MAX ), ) PRIMARY KEY ( UserId , DocumentId , Ts ), INTERLEAVE IN PARENT Documents ON DELETE NO ACTION ; To create a changelog, insert a new row in DocumentHistory in the same transaction in which you insert or update a row in Document .

