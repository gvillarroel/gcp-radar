---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.269Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Spanner BIT_REVERSE function"
feature_slug: "spanner-bit-reverse-function"
latest_feature_date: "2023-08-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/change-streams/use-dataflow"
  - "https://docs.cloud.google.com/spanner/docs/cmek"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-spanner/latest/com.google.cloud.spanner"
keywords:
  - "reversal"
  - "integer"
  - "reverse"
  - "keys"
  - "adds"
---

# Spanner BIT_REVERSE function

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Adds the BIT_REVERSE function to map integer keys using bit-reversal logic, helping reduce hotspotting in key-based distributions.

## Extended Definition

Adds the BIT_REVERSE function to map integer keys using bit-reversal logic, helping reduce hotspotting in key-based distributions.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/change-streams/use-dataflow](https://docs.cloud.google.com/spanner/docs/change-streams/use-dataflow)
- [https://docs.cloud.google.com/spanner/docs/cmek](https://docs.cloud.google.com/spanner/docs/cmek)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-spanner/latest/com.google.cloud.spanner](https://docs.cloud.google.com/java/docs/reference/google-cloud-spanner/latest/com.google.cloud.spanner)

## Supporting Pages

### "Build change streams connections using Dataflow \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/change-streams/use-dataflow](https://docs.cloud.google.com/spanner/docs/change-streams/use-dataflow)
- Source ID: `site-docs-root`
- Final score: 61
- Re-rank relevance: N/A

Evidence snippets:
- This function breaks each data change record into separate data change records, one per mod. private static class BreakRecordByModFn extends DoFn<DataChangeRecord , DataChangeRecord > { @ProcessElement public void processElement ( @Element DataChangeRecord record , OutputReceiver<DataChangeRecord> outputReceiver ) { record . getMods (). stream () . map ( mod - > new DataChangeRecord ( record . getPartitionToken (), record . getCommitTimestamp (), record . getServerTransactionId (), record . isLastRecordInTransactionInPartition (), record . getRecordSequence (), record . getTableName (), record . getRowType (), Collections . singletonList ( mod ), record . getModType (), record . getValueCaptureType (), record . getNumberOfRecordsInTransaction (), record . getNumberOfPartitionsInTransaction (), record . getTransactionTag (), record . isSystemTransaction (), record . getMetadata ())) . forEach ( outputReceiver :: output ); } } KeyByIdFn This function takes in a DataChangeRecord and outputs a DataChangeRecord keyed by the Spanner primary key hashed to an integer value. private static class KeyByIdFn extends DoFn<DataChangeRecord , KV<String , DataChangeRecord >> { // NUMBER OF BUCKETS should be configured by the user to match their key cardinality // Here, we are choosing to hash the Spanner primary keys to a bucket index, in order to have a deterministic number // of states and timers for performance purposes. // Note that having too many buckets might have undesirable effects if it results in a low number of records per bucket // On the other hand, having too few buckets might also be problematic, since many keys will be contained within them. private static final int NUMBER OF BUCKETS = 1000 ; @ProcessElement public void processElement ( @Element DataChangeRecord record , OutputReceiver<KV<String , DataChangeRecord >> outputReceiver ) { int hashCode = ( int ) record . getMods (). get ( 0 ). getKeysJson (). hashCode (); // Hash the received keys into a bucket in order to have a // deterministic number of buffers and timers.
- For more information about the SortKey , see the sample implementation . private static class TransactionBoundaryFn extends DoFn<KV<String , DataChangeRecord > , KV<SortKey , Iterable<DataChangeRecord> >> { @StateId ( "buffer" ) private final StateSpec<BagState<DataChangeRecord> > buffer = StateSpecs . bag (); @StateId ( "count" ) private final StateSpec<ValueState<Integer> > countState = StateSpecs . value (); @ProcessElement public void process ( ProcessContext context , @StateId ( "buffer" ) BagState<DataChangeRecord> buffer , @StateId ( "count" ) ValueState<Integer> countState ) { final KV<String , DataChangeRecord > element = context . element (); final DataChangeRecord record = element . getValue (); buffer . add ( record ); int count = ( countState . read () != null ? countState . read () : 0 ); count = count + 1 ; countState . write ( count ); if ( count == record . getNumberOfRecordsInTransaction ()) { final List<DataChangeRecord> sortedRecords = StreamSupport . stream ( buffer . read (). spliterator (), false ) . sorted ( Comparator . comparing ( DataChangeRecord :: getRecordSequence )) . collect ( Collectors . toList ()); final Instant commitInstant = new Instant ( sortedRecords . get ( 0 ). getCommitTimestamp (). toSqlTimestamp () . getTime ()); context . outputWithTimestamp ( KV . of ( new SortKey ( sortedRecords . get ( 0 ). getCommitTimestamp (), sortedRecords . get ( 0 ). getServerTransactionId ()), sortedRecords ), commitInstant ); buffer . clear (); countState . clear (); } } } Sample: Filter by transaction tag When a transaction modifying user data is tagged, the corresponding tag and its type get stored as part of DataChangeRecord .
- String elementKey = keyString . read (); if ( elementKey == null ) { Instant commitTimestamp = new Instant ( element . getValue (). getCommitTimestamp (). toSqlTimestamp ()); Instant outputTimestamp = commitTimestamp . plus ( Duration . standardSeconds ( incrementIntervalInSeconds )); timer . set ( outputTimestamp ); keyString . write ( element . getKey ()); } } @OnTimer ( "timer" ) public void onExpiry ( OnTimerContext context , @StateId ( "buffer" ) BagState<DataChangeRecord> buffer , @TimerId ( "timer" ) Timer timer , @StateId ( "keyString" ) ValueState<String> keyString ) { if ( ! buffer . isEmpty (). read ()) { String elementKey = keyString . read (); final List<DataChangeRecord> records = StreamSupport . stream ( buffer . read (). spliterator (), false ) . collect ( Collectors . toList ()); buffer . clear (); List<DataChangeRecord> recordsToOutput = new ArrayList <> (); for ( DataChangeRecord record : records ) { Instant recordCommitTimestamp = new Instant ( record . getCommitTimestamp (). toSqlTimestamp ()); final String recordString = record . getMods (). get ( 0 ). getNewValuesJson (). isEmpty () ? "Deleted record" : record . getMods (). get ( 0 ). getNewValuesJson (); // When the watermark passes time T, this means that all records with // event time < T have been processed and successfully committed.
- Sample: Order by key This code sample emits data change records ordered by commit timestamp and grouped by primary keys using the Dataflow connector. pipeline . apply ( SpannerIO . readChangeStream () . withSpannerConfig ( SpannerConfig . create () . withProjectId ( "my-project-id" ) . withInstanceId ( "my-instance-id" ) . withDatabaseId ( "my-database-id" ) . withDatabaseRole ( "my-database-role" )) // Needed for fine-grained access control only . withChangeStreamName ( "my-change-stream" ) . withMetadataInstance ( "my-metadata-instance-id" ) . withMetadataDatabase ( "my-metadata-database-id" ) . withInclusiveStartAt ( Timestamp . now ())) . apply ( ParDo . of ( new BreakRecordByModFn ())) . apply ( ParDo . of ( new KeyByIdFn ())) . apply ( ParDo . of ( new BufferKeyUntilOutputTimestamp ())) // Subsequent processing goes here This code sample uses states and timers to buffer records for each key, and sets the expiration time of the timer to some user-configured time T in the future (defined in the BufferKeyUntilOutputTimestamp function).

### "Customer-managed encryption keys (CMEK) overview \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/cmek](https://docs.cloud.google.com/spanner/docs/cmek)
- Source ID: `site-docs-root`
- Final score: 59
- Re-rank relevance: N/A

Evidence snippets:
- Cloud EKM keys support Key Access Justification , which adds a justification field to all key requests.
- For example, if your Spanner database is in the multi-region instance configuration nam3 , with instance partitions located in europe-west1 and europe-west2 , then you must create Cloud KMS keys in the following regions: us-east4 (part of nam3 ) us-east1 (part of nam3 ) us-central1 (part of nam3 ) europe-west1 (location of instance partition) europe-west2 (location of instance partition) For more information, see Secure a database with CMEK .
- The following types of data are protected by Google default encryption at rest and not by the CMEK key: A subset of row keys that mark range boundaries Debugging data including core dumps and operational logs Data in transit or in memory Database metadata In Spanner, there are three layers of encryption.
- If you're using multiple regional keys to protect a Spanner database, only those replicas that are protected by a key residing in the unavailable regional Cloud KMS are affected by the unavailability.

### "Package com.google.cloud.spanner (6.111.1) \_|\_ Java client libraries \_\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-spanner/latest/com.google.cloud.spanner](https://docs.cloud.google.com/java/docs/reference/google-cloud-spanner/latest/com.google.cloud.spanner)
- Source ID: `site-java-reference`
- Final score: 56
- Re-rank relevance: N/A

Evidence snippets:
- If the same key is specified multiple times in the set (for example if two ranges, two keys, com. google. cloud. spanner.
- InstanceConfig adds a layer of service related functionality over InstanceConfigInfo . com. google. cloud. spanner.
- These keys can be open or closed, indicating if the range includes rows with that key. com. google. cloud. spanner.
- Open Telemetry Context Keys Keys for OpenTelemetry context variables that are used by the Spanner client library.

