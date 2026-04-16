---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.203Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Spanner active query monitoring"
feature_slug: "spanner-active-query-monitoring"
latest_feature_date: "2025-01-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/best-practices-gaming-database"
  - "https://docs.cloud.google.com/spanner/docs/change-streams/use-dataflow"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-spanner/latest/com.google.cloud.spanner"
keywords:
  - "troubleshooting"
  - "active"
  - "monitoring"
  - "long"
  - "running"
  - "query"
  - "adds"
---

# Spanner active query monitoring

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Adds monitoring and troubleshooting support for long-running active queries in a Spanner instance.

## Extended Definition

Adds monitoring and troubleshooting support for long-running active queries in a Spanner instance.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/best-practices-gaming-database](https://docs.cloud.google.com/spanner/docs/best-practices-gaming-database)
- [https://docs.cloud.google.com/spanner/docs/change-streams/use-dataflow](https://docs.cloud.google.com/spanner/docs/change-streams/use-dataflow)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-spanner/latest/com.google.cloud.spanner](https://docs.cloud.google.com/java/docs/reference/google-cloud-spanner/latest/com.google.cloud.spanner)

## Supporting Pages

### "Best practices for using Spanner as a gaming database \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/spanner/docs/best-practices-gaming-database](https://docs.cloud.google.com/spanner/docs/best-practices-gaming-database)
- Source ID: `site-docs-root`
- Final score: 118
- Re-rank relevance: N/A

Evidence snippets:
- If you are planning to repopulate a table with the same kind of data (for example, when running consecutive performance tests), you can instead run a DELETE query on the rows containing data you no longer need.
- The updated command for creating the table and index looks like this: CREATE TABLE Player ( PlayerID STRING ( 36 ) NOT NULL , IndexPartition INT64 NOT NULL Attribute INT64 NOT NULL ) PRIMARY KEY ( PlayerID ) CREATE INDEX idx attribute ON Player ( IndexPartition , Attribute ) The IndexPartition value needs to have a limited range for efficient querying, but it should also have range that is at least double the number of splits for efficient distribution.
- In the following example, there is a table for long-term player high-score records: CREATE TABLE Ranking ( PlayerID STRING ( 36 ) NOT NULL , GameMode INT64 NOT NULL , Score INT64 NOT NULL ) PRIMARY KEY ( PlayerID , GameMode ) This table contains the player ID (UUIDv4), a number representing a game mode, stage, or season, and the player's score.
- Updating the previous query to use this improved index looks like the following: SELECT PlayerID FROM Player @ { force index = idx attribute } WHERE IndexPartition BETWEEN 1 and 6 AND Attribute = 23 LIMIT 10 Because no beta test was run, the studio didn't realize they were testing by using data with incorrect assumptions.

### "Build change streams connections using Dataflow \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/change-streams/use-dataflow](https://docs.cloud.google.com/spanner/docs/change-streams/use-dataflow)
- Source ID: `site-docs-root`
- Final score: 108
- Re-rank relevance: N/A

Evidence snippets:
- It buffers the data change records belonging to that transaction until the number of buffered records matches numberOfRecordsInTransaction , upon which it outputs the bundled data change records. pipeline . apply ( SpannerIO . readChangeStream () . withSpannerConfig ( SpannerConfig . create () . withProjectId ( "my-project-id" ) . withInstanceId ( "my-instance-id" ) . withDatabaseId ( "my-database-id" ) . withDatabaseRole ( "my-database-role" )) // Needed for fine-grained access control only . withChangeStreamName ( "my-change-stream" ) . withMetadataInstance ( "my-metadata-instance-id" ) . withMetadataDatabase ( "my-metadata-database-id" ) . withInclusiveStartAt ( Timestamp . now ())) . apply ( ParDo . of ( new KeyByTransactionIdFn ())) . apply ( ParDo . of ( new TransactionBoundaryFn ())) // Subsequent processing goes here KeyByTransactionIdFn This function takes in a DataChangeRecord and outputs a DataChangeRecord keyed by the transaction ID. private static class KeyByTransactionIdFn extends DoFn<DataChangeRecord , KV<String , DataChangeRecord >> { @ProcessElement public void processElement ( @Element DataChangeRecord record , OutputReceiver<KV<String , DataChangeRecord >> outputReceiver ) { outputReceiver . output ( KV . of ( record . getServerTransactionId (), record )); } } TransactionBoundaryFn TransactionBoundaryFn buffers received key-value pairs of {TransactionId, DataChangeRecord} from KeyByTransactionIdFn and buffers them in groups based on TransactionId .
- WRITE APPEND ) . withSchema ( new TableSchema (). setFields ( Arrays . asList ( new TableFieldSchema () . setName ( "SingerId" ) . setType ( "INT64" ) . setMode ( "REQUIRED" ), new TableFieldSchema () . setName ( "FirstName" ) . setType ( "STRING" ) . setMode ( "REQUIRED" ), new TableFieldSchema () . setName ( "LastName" ) . setType ( "STRING" ) . setMode ( "REQUIRED" ) ))) . withAutoSharding () . optimizedWrites () . withFormatFunction (( String element ) - > { ObjectMapper objectMapper = new ObjectMapper (); JsonNode jsonNode = null ; try { jsonNode = objectMapper . readTree ( element ); } catch ( IOException e ) { e . printStackTrace (); } return new TableRow () . set ( "SingerId" , jsonNode . get ( "SingerId" ). asInt ()) . set ( "FirstName" , jsonNode . get ( "FirstName" ). asText ()) . set ( "LastName" , jsonNode . get ( "LastName" ). asText ()); } ) ); Note that the BigQuery sink provides at-least-once semantics by default.
- SpannerConfig spannerConfig = SpannerConfig . create () . withProjectId ( "my-project-id" ) . withInstanceId ( "my-instance-id" ) . withDatabaseId ( "my-database-id" ) . withDatabaseRole ( "my-database-role" ); // Needed for fine-grained access control only pipeline . apply ( SpannerIO . readChangeStream () . withSpannerConfig ( spannerConfig ) . withChangeStreamName ( "my-change-stream" ) . withMetadataInstance ( "my-metadata-instance-id" ) . withMetadataDatabase ( "my-metadata-database-id" ) . withInclusiveStartAt ( Timestamp . now ())) . apply ( ParDo . of ( new ToFullRowJsonFn ( spannerConfig ))) . apply ( BigQueryIO . < String>write () . to ( "my-bigquery-table" ) . withCreateDisposition ( CreateDisposition .
- If recordsToOutput is not empty, the function orders the data change records in recordsToOutput by commit timestamp and transaction ID and then outputs them. private static class BufferKeyUntilOutputTimestamp extends DoFn<KV<String , DataChangeRecord > , KV<String , Iterable<DataChangeRecord> >> { private static final Logger LOG = LoggerFactory . getLogger ( BufferKeyUntilOutputTimestamp . class ); private final long incrementIntervalInSeconds = 2 ; private BufferKeyUntilOutputTimestamp ( long incrementIntervalInSeconds ) { this . incrementIntervalInSeconds = incrementIntervalInSeconds ; } @SuppressWarnings ( "unused" ) @TimerId ( "timer" ) private final TimerSpec timerSpec = TimerSpecs . timer ( TimeDomain .

### "Package com.google.cloud.spanner (6.111.1) \_|\_ Java client libraries \_\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-spanner/latest/com.google.cloud.spanner](https://docs.cloud.google.com/java/docs/reference/google-cloud-spanner/latest/com.google.cloud.spanner)
- Source ID: `site-java-reference`
- Final score: 102
- Re-rank relevance: N/A

Evidence snippets:
- Operation Represents a long-running operation. com. google. cloud. spanner.
- Partition Options Defines the configuration for the number and size of partitions returned from BatchReadOnlyTransaction#partitionRead , BatchReadOnlyTransaction#partitionReadUsingIndex and BatchReadOnlyTransaction#partitionQuery Note: these options may not be honored based on the other parameters in the request. com. google. cloud. spanner.
- Individual rows from a read or query operation can be considered as structs; ResultSet#getCurrentRowAsStruct() allows an immutable struct to be created from the row that the result set is currently positioned over. com. google. cloud. spanner.
- ResultSet allows a single row to be inspected at a time through the methods from the StructReader interface, in the order that the rows were returned by the read or query.

