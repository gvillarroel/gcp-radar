---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.300Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Query Insights"
feature_slug: "query-insights"
latest_feature_date: "2022-06-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/query-operators-binary"
  - "https://docs.cloud.google.com/spanner/docs/change-streams/use-dataflow"
  - "https://docs.cloud.google.com/spanner/docs/query-optimizer/query-optimizer-versions"
keywords:
  - "visual"
  - "detection"
  - "issues"
  - "performance"
  - "insights"
  - "provides"
  - "query"
---

# Query Insights

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Query Insights in Cloud Spanner provides visual detection of query performance issues and deeper analysis to identify their root causes.

## Extended Definition

Query Insights in Cloud Spanner provides visual detection of query performance issues and deeper analysis to identify their root causes.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/query-operators-binary](https://docs.cloud.google.com/spanner/docs/query-operators-binary)
- [https://docs.cloud.google.com/spanner/docs/change-streams/use-dataflow](https://docs.cloud.google.com/spanner/docs/change-streams/use-dataflow)
- [https://docs.cloud.google.com/spanner/docs/query-optimizer/query-optimizer-versions](https://docs.cloud.google.com/spanner/docs/query-optimizer/query-optimizer-versions)

## Supporting Pages

### Binary operators \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/query-operators-binary](https://docs.cloud.google.com/spanner/docs/query-operators-binary)
- Source ID: `site-docs-reference`
- Final score: 81
- Re-rank relevance: N/A

Evidence snippets:
- Note: A visualized query plan renders build and probe as the left and right children, respectively, of a hash join.
- An execution statistic is a value collected during query execution to help you assess performance of the operator.
- An execution statistic is a value collected during query execution to help you assess performance of the operator.
- An execution statistic is a value collected during query execution to help you assess performance of the operator.

### List query optimizer versions \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/query-optimizer/query-optimizer-versions](https://docs.cloud.google.com/spanner/docs/query-optimizer/query-optimizer-versions)
- Source ID: `site-docs-reference`
- Final score: 79
- Re-rank relevance: N/A

Evidence snippets:
- Spanner provides a built-in SPANNER SYS.SUPPORTED OPTIMIZER VERSIONS table to keep track of query optimizer versions.
- SUPPORTED OPTIMIZER VERSIONS An example result: VERSION RELEASE DATE IS DEFAULT 1 2019-06-18 false 2 2020-03-01 false 3 2021-08-01 true What's next To learn more about the query optimizer, see Query optimizer overview .
- Home Documentation Databases Spanner Guides Send feedback List query optimizer versions Stay organized with collections Save and categorize content based on your preferences.
- To learn more about how the query optimizer has evolved, see Query optimizer versions .

### "Build change streams connections using Dataflow \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/change-streams/use-dataflow](https://docs.cloud.google.com/spanner/docs/change-streams/use-dataflow)
- Source ID: `site-docs-root`
- Final score: 77
- Re-rank relevance: N/A

Evidence snippets:
- WRITE APPEND ) . withSchema ( new TableSchema (). setFields ( Arrays . asList ( new TableFieldSchema () . setName ( "SingerId" ) . setType ( "INT64" ) . setMode ( "REQUIRED" ), new TableFieldSchema () . setName ( "FirstName" ) . setType ( "STRING" ) . setMode ( "REQUIRED" ), new TableFieldSchema () . setName ( "LastName" ) . setType ( "STRING" ) . setMode ( "REQUIRED" ) ))) . withAutoSharding () . optimizedWrites () . withFormatFunction (( String element ) - > { ObjectMapper objectMapper = new ObjectMapper (); JsonNode jsonNode = null ; try { jsonNode = objectMapper . readTree ( element ); } catch ( IOException e ) { e . printStackTrace (); } return new TableRow () . set ( "SingerId" , jsonNode . get ( "SingerId" ). asInt ()) . set ( "FirstName" , jsonNode . get ( "FirstName" ). asText ()) . set ( "LastName" , jsonNode . get ( "LastName" ). asText ()); } ) ); Note that the BigQuery sink provides at-least-once semantics by default.
- This metric can be used to see any performance (latency) issues with the pipeline.
- This function breaks each data change record into separate data change records, one per mod. private static class BreakRecordByModFn extends DoFn<DataChangeRecord , DataChangeRecord > { @ProcessElement public void processElement ( @Element DataChangeRecord record , OutputReceiver<DataChangeRecord> outputReceiver ) { record . getMods (). stream () . map ( mod - > new DataChangeRecord ( record . getPartitionToken (), record . getCommitTimestamp (), record . getServerTransactionId (), record . isLastRecordInTransactionInPartition (), record . getRecordSequence (), record . getTableName (), record . getRowType (), Collections . singletonList ( mod ), record . getModType (), record . getValueCaptureType (), record . getNumberOfRecordsInTransaction (), record . getNumberOfPartitionsInTransaction (), record . getTransactionTag (), record . isSystemTransaction (), record . getMetadata ())) . forEach ( outputReceiver :: output ); } } KeyByIdFn This function takes in a DataChangeRecord and outputs a DataChangeRecord keyed by the Spanner primary key hashed to an integer value. private static class KeyByIdFn extends DoFn<DataChangeRecord , KV<String , DataChangeRecord >> { // NUMBER OF BUCKETS should be configured by the user to match their key cardinality // Here, we are choosing to hash the Spanner primary keys to a bucket index, in order to have a deterministic number // of states and timers for performance purposes. // Note that having too many buckets might have undesirable effects if it results in a low number of records per bucket // On the other hand, having too few buckets might also be problematic, since many keys will be contained within them. private static final int NUMBER OF BUCKETS = 1000 ; @ProcessElement public void processElement ( @Element DataChangeRecord record , OutputReceiver<KV<String , DataChangeRecord >> outputReceiver ) { int hashCode = ( int ) record . getMods (). get ( 0 ). getKeysJson (). hashCode (); // Hash the received keys into a bucket in order to have a // deterministic number of buffers and timers.
- This is a good fit for analytics and point-in-time archival, which is independent from Spanner's retention period. pipeline . apply ( SpannerIO . readChangeStream () . withSpannerConfig ( SpannerConfig . create () . withProjectId ( "my-project-id" ) . withInstanceId ( "my-instance-id" ) . withDatabaseId ( "my-database-id" ) . withDatabaseRole ( "my-database-role" )) // Needed for fine-grained access control only . withChangeStreamName ( "my-change-stream" ) . withMetadataInstance ( "my-metadata-instance-id" ) . withMetadataDatabase ( "my-metadata-database-id" ) . withInclusiveStartAt ( Timestamp . now ())) . apply ( MapElements . into ( TypeDescriptors . strings ()). via ( Object :: toString )) . apply ( Window . into ( FixedWindows . of ( Duration . standardMinutes ( 1 )))) . apply ( TextIO . write () . to ( "gs://my-bucket/change-stream-results-" ) . withSuffix ( ".txt" ) . withWindowedWrites () . withNumShards ( 1 )); Note that the Cloud Storage sink provides at-least-once semantics by default.

