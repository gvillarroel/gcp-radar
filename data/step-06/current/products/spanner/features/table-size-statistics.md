---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.289Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Table size statistics"
feature_slug: "table-size-statistics"
latest_feature_date: "2023-01-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/change-streams/use-dataflow"
  - "https://docs.cloud.google.com/spanner/docs/bulk-loading"
  - "https://docs.cloud.google.com/spanner/docs/commit-statistics"
keywords:
  - "give"
  - "size"
  - "statistics"
  - "provides"
  - "generally"
  - "available"
  - "table"
---

# Table size statistics

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Spanner provides generally available table size statistics to give insights into the size of individual database tables.

## Extended Definition

Spanner provides generally available table size statistics to give insights into the size of individual database tables.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/change-streams/use-dataflow](https://docs.cloud.google.com/spanner/docs/change-streams/use-dataflow)
- [https://docs.cloud.google.com/spanner/docs/bulk-loading](https://docs.cloud.google.com/spanner/docs/bulk-loading)
- [https://docs.cloud.google.com/spanner/docs/commit-statistics](https://docs.cloud.google.com/spanner/docs/commit-statistics)

## Supporting Pages

### "Build change streams connections using Dataflow \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/change-streams/use-dataflow](https://docs.cloud.google.com/spanner/docs/change-streams/use-dataflow)
- Source ID: `site-docs-root`
- Final score: 114
- Re-rank relevance: N/A

Evidence snippets:
- WRITE APPEND ) . withSchema ( new TableSchema (). setFields ( Arrays . asList ( new TableFieldSchema () . setName ( "SingerId" ) . setType ( "INT64" ) . setMode ( "REQUIRED" ), new TableFieldSchema () . setName ( "FirstName" ) . setType ( "STRING" ) . setMode ( "REQUIRED" ), new TableFieldSchema () . setName ( "LastName" ) . setType ( "STRING" ) . setMode ( "REQUIRED" ) ))) . withAutoSharding () . optimizedWrites () . withFormatFunction (( String element ) - > { ObjectMapper objectMapper = new ObjectMapper (); JsonNode jsonNode = null ; try { jsonNode = objectMapper . readTree ( element ); } catch ( IOException e ) { e . printStackTrace (); } return new TableRow () . set ( "SingerId" , jsonNode . get ( "SingerId" ). asInt ()) . set ( "FirstName" , jsonNode . get ( "FirstName" ). asText ()) . set ( "LastName" , jsonNode . get ( "LastName" ). asText ()); } ) ); Note that the BigQuery sink provides at-least-once semantics by default.
- This function breaks each data change record into separate data change records, one per mod. private static class BreakRecordByModFn extends DoFn<DataChangeRecord , DataChangeRecord > { @ProcessElement public void processElement ( @Element DataChangeRecord record , OutputReceiver<DataChangeRecord> outputReceiver ) { record . getMods (). stream () . map ( mod - > new DataChangeRecord ( record . getPartitionToken (), record . getCommitTimestamp (), record . getServerTransactionId (), record . isLastRecordInTransactionInPartition (), record . getRecordSequence (), record . getTableName (), record . getRowType (), Collections . singletonList ( mod ), record . getModType (), record . getValueCaptureType (), record . getNumberOfRecordsInTransaction (), record . getNumberOfPartitionsInTransaction (), record . getTransactionTag (), record . isSystemTransaction (), record . getMetadata ())) . forEach ( outputReceiver :: output ); } } KeyByIdFn This function takes in a DataChangeRecord and outputs a DataChangeRecord keyed by the Spanner primary key hashed to an integer value. private static class KeyByIdFn extends DoFn<DataChangeRecord , KV<String , DataChangeRecord >> { // NUMBER OF BUCKETS should be configured by the user to match their key cardinality // Here, we are choosing to hash the Spanner primary keys to a bucket index, in order to have a deterministic number // of states and timers for performance purposes. // Note that having too many buckets might have undesirable effects if it results in a low number of records per bucket // On the other hand, having too few buckets might also be problematic, since many keys will be contained within them. private static final int NUMBER OF BUCKETS = 1000 ; @ProcessElement public void processElement ( @Element DataChangeRecord record , OutputReceiver<KV<String , DataChangeRecord >> outputReceiver ) { int hashCode = ( int ) record . getMods (). get ( 0 ). getKeysJson (). hashCode (); // Hash the received keys into a bucket in order to have a // deterministic number of buffers and timers.
- These examples demonstrate how to filter change stream records based on user-defined transaction tags as well as system tags: User-defined tag filtering for my-tx-tag : pipeline . apply ( SpannerIO . readChangeStream () . withSpannerConfig ( SpannerConfig . create () . withProjectId ( "my-project-id" ) . withInstanceId ( "my-instance-id" ) . withDatabaseId ( "my-database-id" ) . withDatabaseRole ( "my-database-role" )) // Needed for fine-grained access control only . withChangeStreamName ( "my-change-stream" ) . withMetadataInstance ( "my-metadata-instance-id" ) . withMetadataDatabase ( "my-metadata-database-id" ) . withInclusiveStartAt ( Timestamp . now ())) . apply ( Filter . by ( record - > ! record . isSystemTransaction () && record . getTransactionTag (). equalsIgnoreCase ( "my-tx-tag" ))) // Subsequent processing goes here System tag filtering/ TTL auditing: pipeline . apply ( SpannerIO . readChangeStream () . withSpannerConfig ( SpannerConfig . create () . withProjectId ( "my-project-id" ) . withInstanceId ( "my-instance-id" ) . withDatabaseId ( "my-database-id" ) . withDatabaseRole ( "my-database-role" )) // Needed for fine-grained access control only . withChangeStreamName ( "my-change-stream" ) . withMetadataInstance ( "my-metadata-instance-id" ) . withMetadataDatabase ( "my-metadata-database-id" ) . withInclusiveStartAt ( Timestamp . now ())) . apply ( Filter . by ( record - > record . isSystemTransaction () && record . getTransactionTag (). equals ( "RowDeletionPolicy" ))) // Subsequent processing goes here Sample: Fetch full row This example works with a Spanner table named Singer that has the following definition: CREATE TABLE Singers ( SingerId INT64 NOT NULL , FirstName STRING ( 1024 ), LastName STRING ( 1024 ) ) PRIMARY KEY ( SingerId ); Under the default OLD AND NEW VALUES value capture mode of change streams, when there is an update to a Spanner row, the data change record received will contain only the columns that were changed.
- The owner of a Dataflow job that uses the SpannerIO connector needs to have the following IAM permissions set with this metadata database: spanner.databases.updateDdl spanner.databases.beginReadOnlyTransaction spanner.databases.beginOrRollbackReadWriteTransaction spanner.databases.read spanner.databases.select spanner.databases.write spanner.sessions.create spanner.sessions.get Configure the connector The Spanner change streams connector can be configured as follows: SpannerConfig spannerConfig = SpannerConfig . create () . withProjectId ( "my-project-id" ) . withInstanceId ( "my-instance-id" ) . withDatabaseId ( "my-database-id" ) . withDatabaseRole ( "my-database-role" ); // Needed for fine-grained access control only Timestamp startTime = Timestamp . now (); Timestamp endTime = Timestamp . ofTimeSecondsAndNanos ( startTime . getSeconds () + ( 10 60 ), startTime . getNanos () ); SpannerIO . readChangeStream () . withSpannerConfig ( spannerConfig ) . withChangeStreamName ( "my-change-stream" ) . withMetadataInstance ( "my-meta-instance-id" ) . withMetadataDatabase ( "my-meta-database-id" ) . withMetadataTable ( "my-meta-table-name" ) . withRpcPriority ( RpcPriority .

### "Retrieve commit statistics for a transaction \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/commit-statistics](https://docs.cloud.google.com/spanner/docs/commit-statistics)
- Source ID: `site-docs-root`
- Final score: 102
- Re-rank relevance: N/A

Evidence snippets:
- To help you better understand, optimize, and diagnose transaction issues, Spanner gives you access to transaction commit statistics.
- SpannerOptions ; import java.util.Arrays ; public class GetCommitStatsSample { static void getCommitStats () { // TODO(developer): Replace these variables before running the sample. final String projectId = "my-project" ; final String instanceId = "my-instance" ; final String databaseId = "my-database" ; try ( Spanner spanner = SpannerOptions . newBuilder (). setProjectId ( projectId ). build (). getService ()) { final DatabaseClient databaseClient = spanner . getDatabaseClient ( DatabaseId . of ( projectId , instanceId , databaseId )); getCommitStats ( databaseClient ); } } static void getCommitStats ( DatabaseClient databaseClient ) { final CommitResponse commitResponse = databaseClient . writeWithOptions ( Arrays . asList ( Mutation . newInsertOrUpdateBuilder ( "Albums" ) . set ( "SingerId" ) . to ( "1" ) . set ( "AlbumId" ) . to ( "1" ) . set ( "MarketingBudget" ) . to ( "200000" ) . build (), Mutation . newInsertOrUpdateBuilder ( "Albums" ) . set ( "SingerId" ) . to ( "2" ) . set ( "AlbumId" ) . to ( "2" ) . set ( "MarketingBudget" ) . to ( "400000" ) . build () ), Options . commitStats ()); System . out . println ( "Updated data with " + commitResponse . getCommitStats (). getMutationCount () + " mutations." ); } } Node.js The following code sets the returnCommitStats flag and returns a mutation count of 6, because we are inserting or updating 2 rows and 3 columns in each row. // Imports the Google Cloud client library. const { Spanner } = require ( ' @google-cloud/spanner ' ); / TODO(developer): Uncomment the following lines before running the sample. / // const projectId = 'my-project-id'; // const instanceId = 'my-instance'; // const databaseId = 'my-database'; // Creates a client. const spanner = new Spanner ({ projectId : projectId , }); // Gets a reference to a Cloud Spanner instance and database. const instance = spanner . instance ( instanceId ); const database = instance . database ( databaseId ); // Instantiate Spanner table objects. const albumsTable = database . table ( 'Albums' ); // Updates rows in the Venues table. try { const [ response ] = await albumsTable . upsert ( [ { SingerId : '1' , AlbumId : '1' , MarketingBudget : '200000' }, { SingerId : '2' , AlbumId : '2' , MarketingBudget : '400000' }, ], { returnCommitStats : true }, ); console . log ( Updated data with ${ response . commitStats . mutationCount } mutations. , ); } catch ( err ) { console . error ( 'ERROR:' , err ); } finally { // Close the database when finished. database . close (); } PHP use Google\Cloud\Spanner\SpannerClient; use Google\Cloud\Spanner\Transaction; / Creates a database and tables for sample data.
- The MutationCount is then retrieved from this response and displayed. using Google.Cloud.Spanner.Data ; using Google.Cloud.Spanner.V1 ; using Google.Cloud.Spanner.V1.Internal.Logging ; using System ; using System.Collections.Generic ; using System.Diagnostics ; using System.Threading.Tasks ; public class LogCommitStatsAsyncSample { public async Task<long> LogCommitStatsAsync ( string projectId , string instanceId , string databaseId ) { // Commit statistics are logged at level Info by the default logger. // This sample uses a custom logger to access the commit statistics. // See https://googleapis.github.io/google-cloud-dotnet/docs/Google.Cloud.Spanner.Data/logging.html // for more information on how to use loggers. var logger = new CommitStatsSampleLogger (); var options = new SessionPoolOptions (); var poolManager = SessionPoolManager .
- Build ()}, google :: cloud :: Options {}. set<spanner :: CommitReturnStatsOption > ( true )); if ( ! commit ) throw std :: move ( commit ). status (); if ( commit - > commit stats ) { std :: cout << "Updated data with " << commit - > commit stats - > mutation count << " mutations. \n " ; } std :: cout << "Update was successful [spanner get commit stats] \n " ; } C# In C#, commit statistics are not returned directly through the API.

### Bulk loading best practices \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/bulk-loading](https://docs.cloud.google.com/spanner/docs/bulk-loading)
- Source ID: `site-docs-root`
- Final score: 102
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If your upload is larger than the total current size of the table being updated, delete your secondary indexes and then add them again after you upload the data.
- Measuring test runs will give you insight into which approach provides the best performance for your dataset.
- When writing relatively large rows, a commit size of 1 MB to 5 MB usually provides the best performance.
- In general, if your data load is well-distributed and you follow best practices for schema design and bulk loading, your write throughput should double every few minutes until you saturate the available CPU resources in your instance.

