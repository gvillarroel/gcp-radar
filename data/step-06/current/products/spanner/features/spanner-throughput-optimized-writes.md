---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.238Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Spanner Throughput optimized writes"
feature_slug: "spanner-throughput-optimized-writes"
latest_feature_date: "2024-03-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/change-streams/use-dataflow"
  - "https://docs.cloud.google.com/spanner/docs/batch-write"
  - "https://docs.cloud.google.com/spanner/docs/bulk-loading"
keywords:
  - "configurable"
  - "optimized"
  - "throughput"
  - "requests"
  - "writes"
  - "write"
---

# Spanner Throughput optimized writes

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Spanner write requests now support a configurable maximum delay between 0 and 500 milliseconds for throughput-optimized writes.

## Extended Definition

Spanner write requests now support a configurable maximum delay between 0 and 500 milliseconds for throughput-optimized writes.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/change-streams/use-dataflow](https://docs.cloud.google.com/spanner/docs/change-streams/use-dataflow)
- [https://docs.cloud.google.com/spanner/docs/batch-write](https://docs.cloud.google.com/spanner/docs/batch-write)
- [https://docs.cloud.google.com/spanner/docs/bulk-loading](https://docs.cloud.google.com/spanner/docs/bulk-loading)

## Supporting Pages

### "Build change streams connections using Dataflow \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/change-streams/use-dataflow](https://docs.cloud.google.com/spanner/docs/change-streams/use-dataflow)
- Source ID: `site-docs-root`
- Final score: 91
- Re-rank relevance: N/A

Evidence snippets:
- WRITE APPEND ) . withSchema ( new TableSchema (). setFields ( Arrays . asList ( new TableFieldSchema () . setName ( "SingerId" ) . setType ( "INT64" ) . setMode ( "REQUIRED" ), new TableFieldSchema () . setName ( "FirstName" ) . setType ( "STRING" ) . setMode ( "REQUIRED" ), new TableFieldSchema () . setName ( "LastName" ) . setType ( "STRING" ) . setMode ( "REQUIRED" ) ))) . withAutoSharding () . optimizedWrites () . withFormatFunction (( String element ) - > { ObjectMapper objectMapper = new ObjectMapper (); JsonNode jsonNode = null ; try { jsonNode = objectMapper . readTree ( element ); } catch ( IOException e ) { e . printStackTrace (); } return new TableRow () . set ( "SingerId" , jsonNode . get ( "SingerId" ). asInt ()) . set ( "FirstName" , jsonNode . get ( "FirstName" ). asText ()) . set ( "LastName" , jsonNode . get ( "LastName" ). asText ()); } ) ); Note that the BigQuery sink provides at-least-once semantics by default.
- This is a good fit for analytics and point-in-time archival, which is independent from Spanner's retention period. pipeline . apply ( SpannerIO . readChangeStream () . withSpannerConfig ( SpannerConfig . create () . withProjectId ( "my-project-id" ) . withInstanceId ( "my-instance-id" ) . withDatabaseId ( "my-database-id" ) . withDatabaseRole ( "my-database-role" )) // Needed for fine-grained access control only . withChangeStreamName ( "my-change-stream" ) . withMetadataInstance ( "my-metadata-instance-id" ) . withMetadataDatabase ( "my-metadata-database-id" ) . withInclusiveStartAt ( Timestamp . now ())) . apply ( MapElements . into ( TypeDescriptors . strings ()). via ( Object :: toString )) . apply ( Window . into ( FixedWindows . of ( Duration . standardMinutes ( 1 )))) . apply ( TextIO . write () . to ( "gs://my-bucket/change-stream-results-" ) . withSuffix ( ".txt" ) . withWindowedWrites () . withNumShards ( 1 )); Note that the Cloud Storage sink provides at-least-once semantics by default.
- This is a good fit for triggering downstream processing, as as streaming all new rows inserted into a Spanner table to Pub/Sub for further processing. pipeline . apply ( SpannerIO . readChangeStream () . withSpannerConfig ( SpannerConfig . create () . withProjectId ( "my-project-id" ) . withInstanceId ( "my-instance-id" ) . withDatabaseId ( "my-database-id" ) . withDatabaseRole ( "my-database-role" )) // Needed for fine-grained access control only . withChangeStreamName ( "my-change-stream" ) . withMetadataInstance ( "my-metadata-instance-id" ) . withMetadataDatabase ( "my-metadata-database-id" ) . withInclusiveStartAt ( Timestamp . now ())) . apply ( MapElements . into ( TypeDescriptors . strings ()). via ( Object :: toString )) . apply ( PubsubIO . writeStrings (). to ( "my-topic" )); Note that the Pub/Sub sink can be configured to assure exactly-once semantics.
- Size your cluster A rule of thumb for an initial number of workers in a Spanner change streams job is one worker per 1,000 writes per second.

### Modify data using batch write \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/batch-write](https://docs.cloud.google.com/spanner/docs/batch-write)
- Source ID: `site-docs-root`
- Final score: 89
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Use cases Spanner batch write is especially useful if you want to commit a large number of writes without a read operation, but don't require an atomic transaction for all your mutations.
- Spanner batch write supports low latency writes without a read operation, and returns responses as mutations are applied in batches.
- This page describes Spanner batch write requests and how you can use them to modify your Spanner data.
- For single mutation requests, we recommend using a locking read-write transaction .

### Bulk loading best practices \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/bulk-loading](https://docs.cloud.google.com/spanner/docs/bulk-loading)
- Source ID: `site-docs-root`
- Final score: 86
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- In general, if your data load is well-distributed and you follow best practices for schema design and bulk loading, your write throughput should double every few minutes until you saturate the available CPU resources in your instance.
- To get optimal write throughput for bulk loads, partition your data by primary key with this pattern: Each partition contains a range of consecutive rows, as determined by the key columns.
- Following this pattern, you should see a maximum overall bulk write throughput of 10-20 MB per second per node for large loads.
- To avoid pushback, you should throttle write requests to keep CPU utilization within reasonable limits .

