---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.237Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Spanner Change Streams TTL-based deletes filter"
feature_slug: "spanner-change-streams-ttl-based-deletes-filter"
latest_feature_date: "2024-04-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/change-streams"
  - "https://docs.cloud.google.com/spanner/docs/change-streams/manage"
  - "https://docs.cloud.google.com/spanner/docs/change-streams/use-dataflow"
keywords:
  - "deletes"
  - "filter"
  - "streams"
  - "change"
  - "based"
---

# Spanner Change Streams TTL-based deletes filter

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Spanner Change Streams now support a TTL-based deletes filter via the exclude_ttl_deletes option.

## Extended Definition

Spanner Change Streams now support a TTL-based deletes filter via the exclude_ttl_deletes option.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/change-streams](https://docs.cloud.google.com/spanner/docs/change-streams)
- [https://docs.cloud.google.com/spanner/docs/change-streams/manage](https://docs.cloud.google.com/spanner/docs/change-streams/manage)
- [https://docs.cloud.google.com/spanner/docs/change-streams/use-dataflow](https://docs.cloud.google.com/spanner/docs/change-streams/use-dataflow)

## Supporting Pages

### Change streams overview \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/change-streams](https://docs.cloud.google.com/spanner/docs/change-streams)
- Source ID: `site-docs-root`
- Final score: 196
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Apply a TTL-based deletes filter to filter out TTL-based deletes from your change streams.
- When you set this filter to exclude TTL-based deletes, only future TTL-based deletes are excluded from your change stream.
- By default, change streams include all TTL-based deletes.
- These changes can come from: DML statements Mutations Cascading deletes on interleaved child tables Deletes resulting from time to live rules Change streams can watch data changes only in user-created columns and tables.

### Create and manage change streams \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/change-streams/manage](https://docs.cloud.google.com/spanner/docs/change-streams/manage)
- Source ID: `site-docs-root`
- Final score: 194
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Apply a TTL-based deletes filter to filter out TTL-based deletes from your change streams.
- Two examples: GoogleSQL CREATE CHANGE STREAM LongerDataRetention FOR ALL OPTIONS ( retention period = '36h' ); CREATE CHANGE STREAM MaximumDataRetention FOR ALL OPTIONS ( retention period = '7d' ); PostgreSQL CREATE CHANGE STREAM LongerDataRetention FOR ALL WITH ( retention period = '36h' ); CREATE CHANGE STREAM MaximumDataRetention FOR ALL WITH ( retention period = '7d' ); Specify a different value capture type To specify a change stream value capture type other than OLD AND NEW VALUES , set the value capture type to either NEW VALUES or NEW ROW , as shown in the following examples: GoogleSQL CREATE CHANGE STREAM NewRowChangeStream FOR ALL OPTIONS ( value capture type = 'NEW ROW' ); CREATE CHANGE STREAM NewValuesChangeStream FOR ALL OPTIONS ( value capture type = 'NEW VALUES' ); PostgreSQL CREATE CHANGE STREAM NewRowChangeStream FOR ALL WITH ( value capture type = 'NEW ROW' ); CREATE CHANGE STREAM NewValuesChangeStream FOR ALL WITH ( value capture type = 'NEW VALUES' ); Filter TTL-based deletes You can filter TTL-based deletes from your change stream's scope using the exclude ttl deletes filter.
- GoogleSQL To create a change stream with the TTL-based deletes filter, run the following example: CREATE CHANGE STREAM CHANGE STREAM NAME FOR ALL OPTIONS ( exclude ttl deletes = true ) Replace the following: CHANGE STREAM NAME : the name of your new change stream The following example creates a change stream called NewFilterChangeStream that excludes all TTL-based deletes: CREATE CHANGE STREAM NewFilterChangeStream FOR ALL OPTIONS ( exclude ttl deletes = true ) PostgreSQL To create a change stream with the TTL-based deletes filter, run the following example: CREATE CHANGE STREAM CHANGE STREAM NAME FOR ALL WITH ( exclude ttl deletes = true ) Replace the following: CHANGE STREAM NAME : the name of your new change stream The following example creates a change stream called NewFilterChangeStream that excludes all TTL-based deletes: CREATE CHANGE STREAM NewFilterChangeStream FOR ALL WITH ( exclude ttl deletes = true ) To add or remove the TTL-based deletes filter from an existing change stream, see Modify TTL-based deletes filter .
- Add the TTL-based deletes filter to an existing change stream GoogleSQL To add the TTL-based deletes filter to an existing change stream, run the following to set the filter to true : ALTER CHANGE STREAM CHANGE STREAM NAME FOR ALL SET OPTIONS ( exclude ttl deletes = true ) Replace the following: CHANGE STREAM NAME : the name of your existing change stream In the following example, the exclude ttl deletes filter is added to an existing change stream called NewFilterChangeStream that excludes all TTL-based deletes: ALTER CHANGE STREAM NewFilterChangeStream FOR ALL SET OPTIONS ( exclude ttl deletes = true ) This excludes all future TTL-based deletes from the change stream.

### "Build change streams connections using Dataflow \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/change-streams/use-dataflow](https://docs.cloud.google.com/spanner/docs/change-streams/use-dataflow)
- Source ID: `site-docs-root`
- Final score: 173
- Re-rank relevance: N/A

Evidence snippets:
- These examples demonstrate how to filter change stream records based on user-defined transaction tags as well as system tags: User-defined tag filtering for my-tx-tag : pipeline . apply ( SpannerIO . readChangeStream () . withSpannerConfig ( SpannerConfig . create () . withProjectId ( "my-project-id" ) . withInstanceId ( "my-instance-id" ) . withDatabaseId ( "my-database-id" ) . withDatabaseRole ( "my-database-role" )) // Needed for fine-grained access control only . withChangeStreamName ( "my-change-stream" ) . withMetadataInstance ( "my-metadata-instance-id" ) . withMetadataDatabase ( "my-metadata-database-id" ) . withInclusiveStartAt ( Timestamp . now ())) . apply ( Filter . by ( record - > ! record . isSystemTransaction () && record . getTransactionTag (). equalsIgnoreCase ( "my-tx-tag" ))) // Subsequent processing goes here System tag filtering/ TTL auditing: pipeline . apply ( SpannerIO . readChangeStream () . withSpannerConfig ( SpannerConfig . create () . withProjectId ( "my-project-id" ) . withInstanceId ( "my-instance-id" ) . withDatabaseId ( "my-database-id" ) . withDatabaseRole ( "my-database-role" )) // Needed for fine-grained access control only . withChangeStreamName ( "my-change-stream" ) . withMetadataInstance ( "my-metadata-instance-id" ) . withMetadataDatabase ( "my-metadata-database-id" ) . withInclusiveStartAt ( Timestamp . now ())) . apply ( Filter . by ( record - > record . isSystemTransaction () && record . getTransactionTag (). equals ( "RowDeletionPolicy" ))) // Subsequent processing goes here Sample: Fetch full row This example works with a Spanner table named Singer that has the following definition: CREATE TABLE Singers ( SingerId INT64 NOT NULL , FirstName STRING ( 1024 ), LastName STRING ( 1024 ) ) PRIMARY KEY ( SingerId ); Under the default OLD AND NEW VALUES value capture mode of change streams, when there is an update to a Spanner row, the data change record received will contain only the columns that were changed.
- For more information about the SortKey , see the sample implementation . private static class TransactionBoundaryFn extends DoFn<KV<String , DataChangeRecord > , KV<SortKey , Iterable<DataChangeRecord> >> { @StateId ( "buffer" ) private final StateSpec<BagState<DataChangeRecord> > buffer = StateSpecs . bag (); @StateId ( "count" ) private final StateSpec<ValueState<Integer> > countState = StateSpecs . value (); @ProcessElement public void process ( ProcessContext context , @StateId ( "buffer" ) BagState<DataChangeRecord> buffer , @StateId ( "count" ) ValueState<Integer> countState ) { final KV<String , DataChangeRecord > element = context . element (); final DataChangeRecord record = element . getValue (); buffer . add ( record ); int count = ( countState . read () != null ? countState . read () : 0 ); count = count + 1 ; countState . write ( count ); if ( count == record . getNumberOfRecordsInTransaction ()) { final List<DataChangeRecord> sortedRecords = StreamSupport . stream ( buffer . read (). spliterator (), false ) . sorted ( Comparator . comparing ( DataChangeRecord :: getRecordSequence )) . collect ( Collectors . toList ()); final Instant commitInstant = new Instant ( sortedRecords . get ( 0 ). getCommitTimestamp (). toSqlTimestamp () . getTime ()); context . outputWithTimestamp ( KV . of ( new SortKey ( sortedRecords . get ( 0 ). getCommitTimestamp (), sortedRecords . get ( 0 ). getServerTransactionId ()), sortedRecords ), commitInstant ); buffer . clear (); countState . clear (); } } } Sample: Filter by transaction tag When a transaction modifying user data is tagged, the corresponding tag and its type get stored as part of DataChangeRecord .
- Home Documentation Databases Spanner Guides Send feedback Build change streams connections using Dataflow Stay organized with collections Save and categorize content based on your preferences.
- It buffers the data change records belonging to that transaction until the number of buffered records matches numberOfRecordsInTransaction , upon which it outputs the bundled data change records. pipeline . apply ( SpannerIO . readChangeStream () . withSpannerConfig ( SpannerConfig . create () . withProjectId ( "my-project-id" ) . withInstanceId ( "my-instance-id" ) . withDatabaseId ( "my-database-id" ) . withDatabaseRole ( "my-database-role" )) // Needed for fine-grained access control only . withChangeStreamName ( "my-change-stream" ) . withMetadataInstance ( "my-metadata-instance-id" ) . withMetadataDatabase ( "my-metadata-database-id" ) . withInclusiveStartAt ( Timestamp . now ())) . apply ( ParDo . of ( new KeyByTransactionIdFn ())) . apply ( ParDo . of ( new TransactionBoundaryFn ())) // Subsequent processing goes here KeyByTransactionIdFn This function takes in a DataChangeRecord and outputs a DataChangeRecord keyed by the transaction ID. private static class KeyByTransactionIdFn extends DoFn<DataChangeRecord , KV<String , DataChangeRecord >> { @ProcessElement public void processElement ( @Element DataChangeRecord record , OutputReceiver<KV<String , DataChangeRecord >> outputReceiver ) { outputReceiver . output ( KV . of ( record . getServerTransactionId (), record )); } } TransactionBoundaryFn TransactionBoundaryFn buffers received key-value pairs of {TransactionId, DataChangeRecord} from KeyByTransactionIdFn and buffers them in groups based on TransactionId .

