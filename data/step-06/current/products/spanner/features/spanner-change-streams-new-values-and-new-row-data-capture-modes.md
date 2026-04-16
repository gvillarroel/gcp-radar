---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.291Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Spanner Change Streams NEW_VALUES and NEW_ROW data capture modes"
feature_slug: "spanner-change-streams-new-values-and-new-row-data-capture-modes"
latest_feature_date: "2022-12-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/change-streams/manage"
  - "https://docs.cloud.google.com/spanner/docs/change-streams"
  - "https://docs.cloud.google.com/spanner/docs/change-streams/use-dataflow"
keywords:
  - "modes"
  - "capture"
  - "streams"
  - "change"
  - "values"
  - "added"
---

# Spanner Change Streams NEW_VALUES and NEW_ROW data capture modes

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Spanner Change Streams added NEW_VALUES and NEW_ROW change-record capture modes, with NEW_VALUES capturing only new non-key values and NEW_ROW capturing the full new row, while keys remain always included and old values are not captured.

## Extended Definition

Spanner Change Streams added NEW_VALUES and NEW_ROW change-record capture modes, with NEW_VALUES capturing only new non-key values and NEW_ROW capturing the full new row, while keys remain always included and old values are not captured.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/change-streams/manage](https://docs.cloud.google.com/spanner/docs/change-streams/manage)
- [https://docs.cloud.google.com/spanner/docs/change-streams](https://docs.cloud.google.com/spanner/docs/change-streams)
- [https://docs.cloud.google.com/spanner/docs/change-streams/use-dataflow](https://docs.cloud.google.com/spanner/docs/change-streams/use-dataflow)

## Supporting Pages

### Create and manage change streams \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/change-streams/manage](https://docs.cloud.google.com/spanner/docs/change-streams/manage)
- Source ID: `site-docs-root`
- Final score: 198
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Two examples: GoogleSQL CREATE CHANGE STREAM LongerDataRetention FOR ALL OPTIONS ( retention period = '36h' ); CREATE CHANGE STREAM MaximumDataRetention FOR ALL OPTIONS ( retention period = '7d' ); PostgreSQL CREATE CHANGE STREAM LongerDataRetention FOR ALL WITH ( retention period = '36h' ); CREATE CHANGE STREAM MaximumDataRetention FOR ALL WITH ( retention period = '7d' ); Specify a different value capture type To specify a change stream value capture type other than OLD AND NEW VALUES , set the value capture type to either NEW VALUES or NEW ROW , as shown in the following examples: GoogleSQL CREATE CHANGE STREAM NewRowChangeStream FOR ALL OPTIONS ( value capture type = 'NEW ROW' ); CREATE CHANGE STREAM NewValuesChangeStream FOR ALL OPTIONS ( value capture type = 'NEW VALUES' ); PostgreSQL CREATE CHANGE STREAM NewRowChangeStream FOR ALL WITH ( value capture type = 'NEW ROW' ); CREATE CHANGE STREAM NewValuesChangeStream FOR ALL WITH ( value capture type = 'NEW VALUES' ); Filter TTL-based deletes You can filter TTL-based deletes from your change stream's scope using the exclude ttl deletes filter.
- TransactionOptions { ExcludeTxnFromChangeStreams : true }) if err != nil { return err } return nil } Java static void readWriteTxnExcludedFromChangeStreams ( DatabaseClient client ) { // Exclude the transaction from allowed tracking change streams with alloww txn exclusion=true. // This exclusion will be applied to all the individual operations inside this transaction. client . readWriteTransaction ( Options . excludeTxnFromChangeStreams ()) . run ( transaction - > { transaction . executeUpdate ( Statement . of ( "INSERT Singers (SingerId, FirstName, LastName)\n" + "VALUES (1341, 'Virginia', 'Watson')" )); System . out . println ( "New singer inserted." ); transaction . executeUpdate ( Statement . of ( "UPDATE Singers SET FirstName = 'Hi' WHERE SingerId = 111" )); System . out . println ( "Singer first name updated." ); return null ; }); } Modify a change stream To modify a change stream's configuration, use an ALTER CHANGE STREAM DDL statement.
- Watch specific tables To limit a change stream's scope to specific tables, rather than an entire database, specify a list of one or more tables: CREATE CHANGE STREAM SingerAlbumStream FOR Singers , Albums ; Spanner automatically updates change streams that watch whole tables to reflect any schema changes affecting those tables, such as added or dropped columns.
- GoogleSQL ALTER CHANGE STREAM NamesAndAlbums SET OPTIONS ( value capture type = 'NEW VALUES' ); PostgreSQL ALTER CHANGE STREAM NamesAndAlbums SET ( value capture type = 'NEW VALUES' ); Note: Modifying the value capture type of a change stream doesn't cause columns to backfill.

### Change streams overview \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/change-streams](https://docs.cloud.google.com/spanner/docs/change-streams)
- Source ID: `site-docs-root`
- Final score: 182
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Content of a data change record Every data change record written by a change stream includes the following information about the data change: The name of the affected table The names, values, and data types of the primary keys identifying the changed row The names and data types of the changed row's columns that were captured based on the change stream definition.
- If you don't set the exclude txn from change streams option or if it's set to false , then any change streams monitoring columns modified by transactions will capture the updates made within that transaction.
- You can use DDL to specify one of the following value capture types for a change stream: OLD AND NEW VALUES : Captures both old and new values of a row's modified columns.
- Furthermore, change streams don't watch schema changes or any data changes that directly result from schema changes, other than backfills for default values .

### "Build change streams connections using Dataflow \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/change-streams/use-dataflow](https://docs.cloud.google.com/spanner/docs/change-streams/use-dataflow)
- Source ID: `site-docs-root`
- Final score: 174
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- These examples demonstrate how to filter change stream records based on user-defined transaction tags as well as system tags: User-defined tag filtering for my-tx-tag : pipeline . apply ( SpannerIO . readChangeStream () . withSpannerConfig ( SpannerConfig . create () . withProjectId ( "my-project-id" ) . withInstanceId ( "my-instance-id" ) . withDatabaseId ( "my-database-id" ) . withDatabaseRole ( "my-database-role" )) // Needed for fine-grained access control only . withChangeStreamName ( "my-change-stream" ) . withMetadataInstance ( "my-metadata-instance-id" ) . withMetadataDatabase ( "my-metadata-database-id" ) . withInclusiveStartAt ( Timestamp . now ())) . apply ( Filter . by ( record - > ! record . isSystemTransaction () && record . getTransactionTag (). equalsIgnoreCase ( "my-tx-tag" ))) // Subsequent processing goes here System tag filtering/ TTL auditing: pipeline . apply ( SpannerIO . readChangeStream () . withSpannerConfig ( SpannerConfig . create () . withProjectId ( "my-project-id" ) . withInstanceId ( "my-instance-id" ) . withDatabaseId ( "my-database-id" ) . withDatabaseRole ( "my-database-role" )) // Needed for fine-grained access control only . withChangeStreamName ( "my-change-stream" ) . withMetadataInstance ( "my-metadata-instance-id" ) . withMetadataDatabase ( "my-metadata-database-id" ) . withInclusiveStartAt ( Timestamp . now ())) . apply ( Filter . by ( record - > record . isSystemTransaction () && record . getTransactionTag (). equals ( "RowDeletionPolicy" ))) // Subsequent processing goes here Sample: Fetch full row This example works with a Spanner table named Singer that has the following definition: CREATE TABLE Singers ( SingerId INT64 NOT NULL , FirstName STRING ( 1024 ), LastName STRING ( 1024 ) ) PRIMARY KEY ( SingerId ); Under the default OLD AND NEW VALUES value capture mode of change streams, when there is an update to a Spanner row, the data change record received will contain only the columns that were changed.
- For more information about the SortKey , see the sample implementation . private static class TransactionBoundaryFn extends DoFn<KV<String , DataChangeRecord > , KV<SortKey , Iterable<DataChangeRecord> >> { @StateId ( "buffer" ) private final StateSpec<BagState<DataChangeRecord> > buffer = StateSpecs . bag (); @StateId ( "count" ) private final StateSpec<ValueState<Integer> > countState = StateSpecs . value (); @ProcessElement public void process ( ProcessContext context , @StateId ( "buffer" ) BagState<DataChangeRecord> buffer , @StateId ( "count" ) ValueState<Integer> countState ) { final KV<String , DataChangeRecord > element = context . element (); final DataChangeRecord record = element . getValue (); buffer . add ( record ); int count = ( countState . read () != null ? countState . read () : 0 ); count = count + 1 ; countState . write ( count ); if ( count == record . getNumberOfRecordsInTransaction ()) { final List<DataChangeRecord> sortedRecords = StreamSupport . stream ( buffer . read (). spliterator (), false ) . sorted ( Comparator . comparing ( DataChangeRecord :: getRecordSequence )) . collect ( Collectors . toList ()); final Instant commitInstant = new Instant ( sortedRecords . get ( 0 ). getCommitTimestamp (). toSqlTimestamp () . getTime ()); context . outputWithTimestamp ( KV . of ( new SortKey ( sortedRecords . get ( 0 ). getCommitTimestamp (), sortedRecords . get ( 0 ). getServerTransactionId ()), sortedRecords ), commitInstant ); buffer . clear (); countState . clear (); } } } Sample: Filter by transaction tag When a transaction modifying user data is tagged, the corresponding tag and its type get stored as part of DataChangeRecord .
- String elementKey = keyString . read (); if ( elementKey == null ) { Instant commitTimestamp = new Instant ( element . getValue (). getCommitTimestamp (). toSqlTimestamp ()); Instant outputTimestamp = commitTimestamp . plus ( Duration . standardSeconds ( incrementIntervalInSeconds )); timer . set ( outputTimestamp ); keyString . write ( element . getKey ()); } } @OnTimer ( "timer" ) public void onExpiry ( OnTimerContext context , @StateId ( "buffer" ) BagState<DataChangeRecord> buffer , @TimerId ( "timer" ) Timer timer , @StateId ( "keyString" ) ValueState<String> keyString ) { if ( ! buffer . isEmpty (). read ()) { String elementKey = keyString . read (); final List<DataChangeRecord> records = StreamSupport . stream ( buffer . read (). spliterator (), false ) . collect ( Collectors . toList ()); buffer . clear (); List<DataChangeRecord> recordsToOutput = new ArrayList <> (); for ( DataChangeRecord record : records ) { Instant recordCommitTimestamp = new Instant ( record . getCommitTimestamp (). toSqlTimestamp ()); final String recordString = record . getMods (). get ( 0 ). getNewValuesJson (). isEmpty () ? "Deleted record" : record . getMods (). get ( 0 ). getNewValuesJson (); // When the watermark passes time T, this means that all records with // event time < T have been processed and successfully committed.
- This function breaks each data change record into separate data change records, one per mod. private static class BreakRecordByModFn extends DoFn<DataChangeRecord , DataChangeRecord > { @ProcessElement public void processElement ( @Element DataChangeRecord record , OutputReceiver<DataChangeRecord> outputReceiver ) { record . getMods (). stream () . map ( mod - > new DataChangeRecord ( record . getPartitionToken (), record . getCommitTimestamp (), record . getServerTransactionId (), record . isLastRecordInTransactionInPartition (), record . getRecordSequence (), record . getTableName (), record . getRowType (), Collections . singletonList ( mod ), record . getModType (), record . getValueCaptureType (), record . getNumberOfRecordsInTransaction (), record . getNumberOfPartitionsInTransaction (), record . getTransactionTag (), record . isSystemTransaction (), record . getMetadata ())) . forEach ( outputReceiver :: output ); } } KeyByIdFn This function takes in a DataChangeRecord and outputs a DataChangeRecord keyed by the Spanner primary key hashed to an integer value. private static class KeyByIdFn extends DoFn<DataChangeRecord , KV<String , DataChangeRecord >> { // NUMBER OF BUCKETS should be configured by the user to match their key cardinality // Here, we are choosing to hash the Spanner primary keys to a bucket index, in order to have a deterministic number // of states and timers for performance purposes. // Note that having too many buckets might have undesirable effects if it results in a low number of records per bucket // On the other hand, having too few buckets might also be problematic, since many keys will be contained within them. private static final int NUMBER OF BUCKETS = 1000 ; @ProcessElement public void processElement ( @Element DataChangeRecord record , OutputReceiver<KV<String , DataChangeRecord >> outputReceiver ) { int hashCode = ( int ) record . getMods (). get ( 0 ). getKeysJson (). hashCode (); // Hash the received keys into a bucket in order to have a // deterministic number of buffers and timers.

