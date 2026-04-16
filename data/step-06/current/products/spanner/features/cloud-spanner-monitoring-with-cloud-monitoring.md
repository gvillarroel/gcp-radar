---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.368Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Cloud Spanner monitoring with Cloud Monitoring"
feature_slug: "cloud-spanner-monitoring-with-cloud-monitoring"
latest_feature_date: "2017-05-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/change-streams"
  - "https://docs.cloud.google.com/spanner/docs/change-streams/use-dataflow"
  - "https://docs.cloud.google.com/spanner/docs/bulk-loading"
keywords:
  - "capabilities"
  - "monitoring"
  - "provides"
  - "through"
---

# Cloud Spanner monitoring with Cloud Monitoring

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Cloud Spanner provides monitoring capabilities through Cloud Monitoring.

## Extended Definition

Cloud Spanner provides monitoring capabilities through Cloud Monitoring.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/change-streams](https://docs.cloud.google.com/spanner/docs/change-streams)
- [https://docs.cloud.google.com/spanner/docs/change-streams/use-dataflow](https://docs.cloud.google.com/spanner/docs/change-streams/use-dataflow)
- [https://docs.cloud.google.com/spanner/docs/bulk-loading](https://docs.cloud.google.com/spanner/docs/bulk-loading)

## Supporting Pages

### Change streams overview \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/change-streams](https://docs.cloud.google.com/spanner/docs/change-streams)
- Source ID: `site-docs-root`
- Final score: 58
- Re-rank relevance: N/A

Evidence snippets:
- For change streams monitoring columns modified by transactions, when exclude txn from change streams is set to true , two scenarios are possible: If the DDL option allow txn exclusion is set to true , then the updates made within this transaction aren't recorded in the change stream.
- Google provides templates that let you rapidly build Dataflow pipelines for common change stream use cases, including sending all of a stream's data changes to a BigQuery dataset, or copying them to a Cloud Storage bucket .
- If you don't set the exclude txn from change streams option or if it's set to false , then any change streams monitoring columns modified by transactions will capture the updates made within that transaction.
- Reading change streams Spanner offers multiple ways to read a change stream's data: Through Dataflow, using the Apache Beam SpannerIO connector.

### "Build change streams connections using Dataflow \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/change-streams/use-dataflow](https://docs.cloud.google.com/spanner/docs/change-streams/use-dataflow)
- Source ID: `site-docs-root`
- Final score: 56
- Re-rank relevance: N/A

Evidence snippets:
- Standard Dataflow metrics Dataflow provides several metrics to make sure your job is healthy, such as data freshness, system lag, job throughput, worker CPU utilization and more.
- This is a good fit for analytics and point-in-time archival, which is independent from Spanner's retention period. pipeline . apply ( SpannerIO . readChangeStream () . withSpannerConfig ( SpannerConfig . create () . withProjectId ( "my-project-id" ) . withInstanceId ( "my-instance-id" ) . withDatabaseId ( "my-database-id" ) . withDatabaseRole ( "my-database-role" )) // Needed for fine-grained access control only . withChangeStreamName ( "my-change-stream" ) . withMetadataInstance ( "my-metadata-instance-id" ) . withMetadataDatabase ( "my-metadata-database-id" ) . withInclusiveStartAt ( Timestamp . now ())) . apply ( MapElements . into ( TypeDescriptors . strings ()). via ( Object :: toString )) . apply ( Window . into ( FixedWindows . of ( Duration . standardMinutes ( 1 )))) . apply ( TextIO . write () . to ( "gs://my-bucket/change-stream-results-" ) . withSuffix ( ".txt" ) . withWindowedWrites () . withNumShards ( 1 )); Note that the Cloud Storage sink provides at-least-once semantics by default.
- WRITE APPEND ) . withSchema ( new TableSchema (). setFields ( Arrays . asList ( new TableFieldSchema () . setName ( "SingerId" ) . setType ( "INT64" ) . setMode ( "REQUIRED" ), new TableFieldSchema () . setName ( "FirstName" ) . setType ( "STRING" ) . setMode ( "REQUIRED" ), new TableFieldSchema () . setName ( "LastName" ) . setType ( "STRING" ) . setMode ( "REQUIRED" ) ))) . withAutoSharding () . optimizedWrites () . withFormatFunction (( String element ) - > { ObjectMapper objectMapper = new ObjectMapper (); JsonNode jsonNode = null ; try { jsonNode = objectMapper . readTree ( element ); } catch ( IOException e ) { e . printStackTrace (); } return new TableRow () . set ( "SingerId" , jsonNode . get ( "SingerId" ). asInt ()) . set ( "FirstName" , jsonNode . get ( "FirstName" ). asText ()) . set ( "LastName" , jsonNode . get ( "LastName" ). asText ()); } ) ); Note that the BigQuery sink provides at-least-once semantics by default.
- Custom change stream metrics These metrics are exposed in Cloud Monitoring and include: Bucketed (histogram) latency between a record being committed in Spanner to it being emitted into a PCollection by the connector.

### Bulk loading best practices \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/bulk-loading](https://docs.cloud.google.com/spanner/docs/bulk-loading)
- Source ID: `site-docs-root`
- Final score: 56
- Re-rank relevance: N/A

Evidence snippets:
- For a detailed example using partitioning and monitoring performance, see Maximizing data load throughput .
- In general, if your data load is well-distributed and you follow best practices for schema design and bulk loading, your write throughput should double every few minutes until you saturate the available CPU resources in your instance.
- To get optimal write throughput for bulk loads, partition your data by primary key with this pattern: Each partition contains a range of consecutive rows, as determined by the key columns.
- SELECT pk1 , pk2 FROM child EXCEPT DISTINCT SELECT pk1 , pk2 FROM parent ; Test and measure the throughput Predicting throughput can be difficult.

