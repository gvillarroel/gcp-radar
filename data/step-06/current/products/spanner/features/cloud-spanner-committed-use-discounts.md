---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.308Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Cloud Spanner committed use discounts"
feature_slug: "cloud-spanner-committed-use-discounts"
latest_feature_date: "2022-03-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/change-streams/details"
  - "https://docs.cloud.google.com/spanner/docs/concurrency-control"
  - "https://docs.cloud.google.com/spanner/docs/change-streams/use-dataflow"
keywords:
  - "committed"
  - "discounts"
  - "reduced"
  - "provide"
  - "offers"
---

# Cloud Spanner committed use discounts

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Cloud Spanner now offers committed use discounts that provide reduced pricing for customers committing to continuous compute usage for a year or longer.

## Extended Definition

Cloud Spanner now offers committed use discounts that provide reduced pricing for customers committing to continuous compute usage for a year or longer.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/change-streams/details](https://docs.cloud.google.com/spanner/docs/change-streams/details)
- [https://docs.cloud.google.com/spanner/docs/concurrency-control](https://docs.cloud.google.com/spanner/docs/concurrency-control)
- [https://docs.cloud.google.com/spanner/docs/change-streams/use-dataflow](https://docs.cloud.google.com/spanner/docs/change-streams/use-dataflow)

## Supporting Pages

### "Change stream partitions, records, and queries \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/change-streams/details](https://docs.cloud.google.com/spanner/docs/change-streams/details)
- Source ID: `site-docs-root`
- Final score: 72
- Re-rank relevance: N/A

Evidence snippets:
- Sort the records for the same server transaction id by record sequence to reconstruct the ordering of the changes within the transaction. server transaction id STRING Provides a globally unique string that represents the transaction in which the change was committed.
- Spanner might optimize this ordering for better performances and it might not always match the original ordering that you provide. server transaction id STRING Provides a globally unique string that represents the transaction in which the change was committed.
- Once all readers have received either a heartbeat greater than or equal to some timestamp A or have received data or child partition records greater than or equal to timestamp A , the readers know they have received all records committed at or before that timestamp A and can start processing the buffered records—for example, sorting the cross-partition records by timestamp and grouping them by server transaction id .
- If NULL or not specified, this means the reader is querying the change stream for the first time, and has not obtained any specific partition tokens to query from. heartbeat milliseconds INT64 Required Determines how frequently a heartbeat ChangeRecord is returned in case there are no transactions committed in this partition.

### Concurrency control \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/concurrency-control](https://docs.cloud.google.com/spanner/docs/concurrency-control)
- Source ID: `site-docs-root`
- Final score: 62
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The transaction commits successfully only if no conflicts are detected and the following conditions are met: No concurrently committed writes conflict with the data read by this transaction; that is, no writes were committed after the read timestamp but before this transaction commits its own writes.
- Reduced commit latency for read-only transactions: Because all reads within an optimistic transaction are based on the same snapshot timestamp, there's no need to verify consistency during execution or commit for these reads, which significantly reduces latency.
- Benefits of optimistic concurrency Optimistic concurrency offers the following benefits: Reads don't acquire locks: Optimistic transactions don't acquire locks for reads, so long-running reads don't block latency-sensitive writes.
- CommitAsync (); } } REST The Spanner TransactionOptions REST API provides a ReadLockMode enum within the ReadWrite message that lets you select either the PESSIMISTIC or OPTIMISTIC lock mode.

### "Build change streams connections using Dataflow \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/change-streams/use-dataflow](https://docs.cloud.google.com/spanner/docs/change-streams/use-dataflow)
- Source ID: `site-docs-root`
- Final score: 58
- Re-rank relevance: N/A

Evidence snippets:
- String elementKey = keyString . read (); if ( elementKey == null ) { Instant commitTimestamp = new Instant ( element . getValue (). getCommitTimestamp (). toSqlTimestamp ()); Instant outputTimestamp = commitTimestamp . plus ( Duration . standardSeconds ( incrementIntervalInSeconds )); timer . set ( outputTimestamp ); keyString . write ( element . getKey ()); } } @OnTimer ( "timer" ) public void onExpiry ( OnTimerContext context , @StateId ( "buffer" ) BagState<DataChangeRecord> buffer , @TimerId ( "timer" ) Timer timer , @StateId ( "keyString" ) ValueState<String> keyString ) { if ( ! buffer . isEmpty (). read ()) { String elementKey = keyString . read (); final List<DataChangeRecord> records = StreamSupport . stream ( buffer . read (). spliterator (), false ) . collect ( Collectors . toList ()); buffer . clear (); List<DataChangeRecord> recordsToOutput = new ArrayList <> (); for ( DataChangeRecord record : records ) { Instant recordCommitTimestamp = new Instant ( record . getCommitTimestamp (). toSqlTimestamp ()); final String recordString = record . getMods (). get ( 0 ). getNewValuesJson (). isEmpty () ? "Deleted record" : record . getMods (). get ( 0 ). getNewValuesJson (); // When the watermark passes time T, this means that all records with // event time < T have been processed and successfully committed.
- This is a good fit for analytics and point-in-time archival, which is independent from Spanner's retention period. pipeline . apply ( SpannerIO . readChangeStream () . withSpannerConfig ( SpannerConfig . create () . withProjectId ( "my-project-id" ) . withInstanceId ( "my-instance-id" ) . withDatabaseId ( "my-database-id" ) . withDatabaseRole ( "my-database-role" )) // Needed for fine-grained access control only . withChangeStreamName ( "my-change-stream" ) . withMetadataInstance ( "my-metadata-instance-id" ) . withMetadataDatabase ( "my-metadata-database-id" ) . withInclusiveStartAt ( Timestamp . now ())) . apply ( MapElements . into ( TypeDescriptors . strings ()). via ( Object :: toString )) . apply ( Window . into ( FixedWindows . of ( Duration . standardMinutes ( 1 )))) . apply ( TextIO . write () . to ( "gs://my-bucket/change-stream-results-" ) . withSuffix ( ".txt" ) . withWindowedWrites () . withNumShards ( 1 )); Note that the Cloud Storage sink provides at-least-once semantics by default.
- WRITE APPEND ) . withSchema ( new TableSchema (). setFields ( Arrays . asList ( new TableFieldSchema () . setName ( "SingerId" ) . setType ( "INT64" ) . setMode ( "REQUIRED" ), new TableFieldSchema () . setName ( "FirstName" ) . setType ( "STRING" ) . setMode ( "REQUIRED" ), new TableFieldSchema () . setName ( "LastName" ) . setType ( "STRING" ) . setMode ( "REQUIRED" ) ))) . withAutoSharding () . optimizedWrites () . withFormatFunction (( String element ) - > { ObjectMapper objectMapper = new ObjectMapper (); JsonNode jsonNode = null ; try { jsonNode = objectMapper . readTree ( element ); } catch ( IOException e ) { e . printStackTrace (); } return new TableRow () . set ( "SingerId" , jsonNode . get ( "SingerId" ). asInt ()) . set ( "FirstName" , jsonNode . get ( "FirstName" ). asText ()) . set ( "LastName" , jsonNode . get ( "LastName" ). asText ()); } ) ); Note that the BigQuery sink provides at-least-once semantics by default.
- For Spanner change streams, we provide three Dataflow flex templates: Spanner change streams to BigQuery Spanner change streams to Google Cloud Storage Spanner change streams to Pub/Sub The following restrictions apply when you use the Spanner change streams to Pub/Sub template: Pub/Sub has a 10 MB message size limitation.

