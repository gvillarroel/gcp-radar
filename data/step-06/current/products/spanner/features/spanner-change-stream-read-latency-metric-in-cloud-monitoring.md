---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.229Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Spanner change_stream read latency metric in Cloud Monitoring"
feature_slug: "spanner-change-stream-read-latency-metric-in-cloud-monitoring"
latest_feature_date: "2024-05-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/change-streams/use-dataflow"
  - "https://docs.cloud.google.com/spanner/docs/change-streams/use-kafka"
  - "https://docs.cloud.google.com/spanner/docs/change-streams/manage"
keywords:
  - "metric"
  - "monitoring"
  - "stream"
  - "latency"
  - "change"
  - "read"
---

# Spanner change_stream read latency metric in Cloud Monitoring

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Cloud Monitoring now supports the `read_request_latencies_by_change_stream` metric so Spanner users can view and filter all read latencies by change-stream and non-change-stream reads.

## Extended Definition

Cloud Monitoring now supports the `read_request_latencies_by_change_stream` metric so Spanner users can view and filter all read latencies by change-stream and non-change-stream reads.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/change-streams/use-dataflow](https://docs.cloud.google.com/spanner/docs/change-streams/use-dataflow)
- [https://docs.cloud.google.com/spanner/docs/change-streams/use-kafka](https://docs.cloud.google.com/spanner/docs/change-streams/use-kafka)
- [https://docs.cloud.google.com/spanner/docs/change-streams/manage](https://docs.cloud.google.com/spanner/docs/change-streams/manage)

## Supporting Pages

### "Build change streams connections using Dataflow \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/change-streams/use-dataflow](https://docs.cloud.google.com/spanner/docs/change-streams/use-dataflow)
- Source ID: `site-docs-root`
- Final score: 206
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Custom change stream metrics These metrics are exposed in Cloud Monitoring and include: Bucketed (histogram) latency between a record being committed in Spanner to it being emitted into a PCollection by the connector.
- For change streams pipelines, there are two main metrics that should be taken into account: the system latency and the data freshness .
- These examples demonstrate how to filter change stream records based on user-defined transaction tags as well as system tags: User-defined tag filtering for my-tx-tag : pipeline . apply ( SpannerIO . readChangeStream () . withSpannerConfig ( SpannerConfig . create () . withProjectId ( "my-project-id" ) . withInstanceId ( "my-instance-id" ) . withDatabaseId ( "my-database-id" ) . withDatabaseRole ( "my-database-role" )) // Needed for fine-grained access control only . withChangeStreamName ( "my-change-stream" ) . withMetadataInstance ( "my-metadata-instance-id" ) . withMetadataDatabase ( "my-metadata-database-id" ) . withInclusiveStartAt ( Timestamp . now ())) . apply ( Filter . by ( record - > ! record . isSystemTransaction () && record . getTransactionTag (). equalsIgnoreCase ( "my-tx-tag" ))) // Subsequent processing goes here System tag filtering/ TTL auditing: pipeline . apply ( SpannerIO . readChangeStream () . withSpannerConfig ( SpannerConfig . create () . withProjectId ( "my-project-id" ) . withInstanceId ( "my-instance-id" ) . withDatabaseId ( "my-database-id" ) . withDatabaseRole ( "my-database-role" )) // Needed for fine-grained access control only . withChangeStreamName ( "my-change-stream" ) . withMetadataInstance ( "my-metadata-instance-id" ) . withMetadataDatabase ( "my-metadata-database-id" ) . withInclusiveStartAt ( Timestamp . now ())) . apply ( Filter . by ( record - > record . isSystemTransaction () && record . getTransactionTag (). equals ( "RowDeletionPolicy" ))) // Subsequent processing goes here Sample: Fetch full row This example works with a Spanner table named Singer that has the following definition: CREATE TABLE Singers ( SingerId INT64 NOT NULL , FirstName STRING ( 1024 ), LastName STRING ( 1024 ) ) PRIMARY KEY ( SingerId ); Under the default OLD AND NEW VALUES value capture mode of change streams, when there is an update to a Spanner row, the data change record received will contain only the columns that were changed.
- For more information about the SortKey , see the sample implementation . private static class TransactionBoundaryFn extends DoFn<KV<String , DataChangeRecord > , KV<SortKey , Iterable<DataChangeRecord> >> { @StateId ( "buffer" ) private final StateSpec<BagState<DataChangeRecord> > buffer = StateSpecs . bag (); @StateId ( "count" ) private final StateSpec<ValueState<Integer> > countState = StateSpecs . value (); @ProcessElement public void process ( ProcessContext context , @StateId ( "buffer" ) BagState<DataChangeRecord> buffer , @StateId ( "count" ) ValueState<Integer> countState ) { final KV<String , DataChangeRecord > element = context . element (); final DataChangeRecord record = element . getValue (); buffer . add ( record ); int count = ( countState . read () != null ? countState . read () : 0 ); count = count + 1 ; countState . write ( count ); if ( count == record . getNumberOfRecordsInTransaction ()) { final List<DataChangeRecord> sortedRecords = StreamSupport . stream ( buffer . read (). spliterator (), false ) . sorted ( Comparator . comparing ( DataChangeRecord :: getRecordSequence )) . collect ( Collectors . toList ()); final Instant commitInstant = new Instant ( sortedRecords . get ( 0 ). getCommitTimestamp (). toSqlTimestamp () . getTime ()); context . outputWithTimestamp ( KV . of ( new SortKey ( sortedRecords . get ( 0 ). getCommitTimestamp (), sortedRecords . get ( 0 ). getServerTransactionId ()), sortedRecords ), commitInstant ); buffer . clear (); countState . clear (); } } } Sample: Filter by transaction tag When a transaction modifying user data is tagged, the corresponding tag and its type get stored as part of DataChangeRecord .

### "Build change streams connections to Kafka \_|\_ Spanner \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/spanner/docs/change-streams/use-kafka](https://docs.cloud.google.com/spanner/docs/change-streams/use-kafka)
- Source ID: `site-docs-root`
- Final score: 181
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The schema for the payload contains all the // columns that the change stream has tracked since the connector start // time. "schema": { "type": "struct", "fields": [ { // The schema for the before values of the changed row. "type": "struct", "fields": [ { "type": "int32", "optional": false, "field": "id" }, { "type": "string", "optional": true, "field": "first name" } ], "optional": true, "name": "customers.Value", "field": "before" }, { // The schema for the after values of the changed row. "type": "struct", "fields": [ { "type": "int32", "optional": false, "field": "id" }, { "type": "string", "optional": false, "field": "first name" } ], "optional": true, "name": "customers.Value", "field": "after" }, { // The schema for the source metadata for the event. "type": "struct", "fields": [ { "type": "string", "optional": false, "field": "version" }, { "type": "string", "optional": false, "field": "connector" }, { "type": "string", "optional": false, "field": "name" }, { "type": "int64", "optional": false, "field": "ts ms" }, { "type": "boolean", "optional": true, "default": false, "field": "snapshot" }, { "type": "string", "optional": false, "field": "db" }, { "type": "string", "optional": false, "field": "sequence" }, { "type": "string", "optional": false, "field": "project id" }, { "type": "string", "optional": false, "field": "instance id" }, { "type": "string", "optional": false, "field": "database id" }, { "type": "string", "optional": false, "field": "change stream name" }, { "type": "string", "optional": true, "field": "table" } { "type": "string", "optional": true, "field": "server transaction id" } { "type": "int64", "optional": true, "field": "low watermark" } { "type": "int64", "optional": true, "field": "read at timestamp" } { "type": "int64", "optional": true, "field": "number of records in transaction" } { "type": "string", "optional": true, "field": "transaction tag" } { "type": "boolean", "optional": true, "field": "system transaction" } { "type": "string", "optional": true, "field": "value capture type" } { "type": "string", "optional": true, "field": "partition token" } { "type": "int32", "optional": true, "field": "mod number" } { "type": "boolean", "optional": true, "field": "is last record in transaction in partition" } { "type": "int64", "optional": true, "field": "number of partitions in transaction" } ], "optional": false, "name": "io.debezium.connector.spanner.Source", "field": "source" }, ] { "type": "string", "optional": false, "field": "op" }, { "type": "int64", "optional": true, "field": "ts ms" } ], "optional": false, "name": "connector name.customers.Envelope" }, "payload": { // The values of the row before the event. "before": null, // The values of the row after the event. "after": { "id": 1, "first name": "Anne", } }, // The source metadata. "source": { "version": "{debezium-version}", "connector": "spanner", "name": "spanner connector", "ts ms": 1670955531785, "snapshot": "false", "db": "database", "sequence": "1", "project id": "project", "instance id": "instance", "database id": "database", "change stream name": "change stream", "table": "customers", "server transaction id": "transaction id", "low watermark": 1670955471635, "read at timestamp": 1670955531791, "number records in transaction": 2, "transaction tag": "", "system transaction": false, "value capture type": "OLD AND NEW VALUES", "partition token": "partition token", "mod number": 0, "is last record in transaction in partition": true, "number of partitions in transaction": 1 }, "op": "c", "ts ms": 1559033904863 // } Low watermark The low watermark describes the time T at which the Kafka connector is guaranteed to have streamed out and published to a Kafka topic all events with timestamp < T.
- As the Kafka connector reads changes and produces events, it records the last commit timestamp processed for each change stream partition.
- The database role must have the SELECT privilege on the change stream and the EXECUTE privilege on the change stream's read function.
- Debezium Debezium is an open source project that provides a low latency data streaming platform for change data capture.

### Create and manage change streams \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/change-streams/manage](https://docs.cloud.google.com/spanner/docs/change-streams/manage)
- Source ID: `site-docs-root`
- Final score: 161
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- TransactionOptions { ExcludeTxnFromChangeStreams : true }) if err != nil { return err } return nil } Java static void readWriteTxnExcludedFromChangeStreams ( DatabaseClient client ) { // Exclude the transaction from allowed tracking change streams with alloww txn exclusion=true. // This exclusion will be applied to all the individual operations inside this transaction. client . readWriteTransaction ( Options . excludeTxnFromChangeStreams ()) . run ( transaction - > { transaction . executeUpdate ( Statement . of ( "INSERT Singers (SingerId, FirstName, LastName)\n" + "VALUES (1341, 'Virginia', 'Watson')" )); System . out . println ( "New singer inserted." ); transaction . executeUpdate ( Statement . of ( "UPDATE Singers SET FirstName = 'Hi' WHERE SingerId = 111" )); System . out . println ( "Singer first name updated." ); return null ; }); } Modify a change stream To modify a change stream's configuration, use an ALTER CHANGE STREAM DDL statement.
- Using a separate metadata database eliminates complexities that might arise from allowing the connector to write directly to your application database: By separating the metadata database from the production database with the change stream, the connector needs only read permissions to the production database.
- Go import ( "context" "fmt" "io" "cloud.google.com/go/spanner" ) // readWriteTxnExcludedFromChangeStreams executes the insert and update DMLs on // Singers table excluded from tracking change streams with ddl option // allow txn exclusion = true. func readWriteTxnExcludedFromChangeStreams ( w io .
- If no separate database is being used to store the metadata, we recommend monitoring the CPU impact of the change streams connector on their instances.

