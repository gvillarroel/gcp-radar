---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.290Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Spanner Kafka connector"
feature_slug: "spanner-kafka-connector"
latest_feature_date: "2022-12-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/change-streams/use-kafka"
  - "https://docs.cloud.google.com/spanner/docs/change-streams"
  - "https://docs.cloud.google.com/spanner/docs/change-streams/use-dataflow"
keywords:
  - "publishes"
  - "apache"
  - "kafka"
  - "connector"
  - "records"
  - "stream"
  - "change"
---

# Spanner Kafka connector

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

The Spanner Kafka connector publishes Cloud Spanner change stream records to Apache Kafka for application integration and event triggering.

## Extended Definition

The Spanner Kafka connector publishes Cloud Spanner change stream records to Apache Kafka for application integration and event triggering.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/change-streams/use-kafka](https://docs.cloud.google.com/spanner/docs/change-streams/use-kafka)
- [https://docs.cloud.google.com/spanner/docs/change-streams](https://docs.cloud.google.com/spanner/docs/change-streams)
- [https://docs.cloud.google.com/spanner/docs/change-streams/use-dataflow](https://docs.cloud.google.com/spanner/docs/change-streams/use-dataflow)

## Supporting Pages

### "Build change streams connections to Kafka \_|\_ Spanner \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/spanner/docs/change-streams/use-kafka](https://docs.cloud.google.com/spanner/docs/change-streams/use-kafka)
- Source ID: `site-docs-root`
- Final score: 234
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The schema for the payload contains all the // columns that the change stream has tracked since the connector start // time. "schema": { "type": "struct", "fields": [ { // The schema for the before values of the changed row. "type": "struct", "fields": [ { "type": "int32", "optional": false, "field": "id" }, { "type": "string", "optional": true, "field": "first name" } ], "optional": true, "name": "customers.Value", "field": "before" }, { // The schema for the after values of the changed row. "type": "struct", "fields": [ { "type": "int32", "optional": false, "field": "id" }, { "type": "string", "optional": false, "field": "first name" } ], "optional": true, "name": "customers.Value", "field": "after" }, { // The schema for the source metadata for the event. "type": "struct", "fields": [ { "type": "string", "optional": false, "field": "version" }, { "type": "string", "optional": false, "field": "connector" }, { "type": "string", "optional": false, "field": "name" }, { "type": "int64", "optional": false, "field": "ts ms" }, { "type": "boolean", "optional": true, "default": false, "field": "snapshot" }, { "type": "string", "optional": false, "field": "db" }, { "type": "string", "optional": false, "field": "sequence" }, { "type": "string", "optional": false, "field": "project id" }, { "type": "string", "optional": false, "field": "instance id" }, { "type": "string", "optional": false, "field": "database id" }, { "type": "string", "optional": false, "field": "change stream name" }, { "type": "string", "optional": true, "field": "table" } { "type": "string", "optional": true, "field": "server transaction id" } { "type": "int64", "optional": true, "field": "low watermark" } { "type": "int64", "optional": true, "field": "read at timestamp" } { "type": "int64", "optional": true, "field": "number of records in transaction" } { "type": "string", "optional": true, "field": "transaction tag" } { "type": "boolean", "optional": true, "field": "system transaction" } { "type": "string", "optional": true, "field": "value capture type" } { "type": "string", "optional": true, "field": "partition token" } { "type": "int32", "optional": true, "field": "mod number" } { "type": "boolean", "optional": true, "field": "is last record in transaction in partition" } { "type": "int64", "optional": true, "field": "number of partitions in transaction" } ], "optional": false, "name": "io.debezium.connector.spanner.Source", "field": "source" }, ] { "type": "string", "optional": false, "field": "op" }, { "type": "int64", "optional": true, "field": "ts ms" } ], "optional": false, "name": "connector name.customers.Envelope" }, "payload": { // The values of the row before the event. "before": null, // The values of the row after the event. "after": { "id": 1, "first name": "Anne", } }, // The source metadata. "source": { "version": "{debezium-version}", "connector": "spanner", "name": "spanner connector", "ts ms": 1670955531785, "snapshot": "false", "db": "database", "sequence": "1", "project id": "project", "instance id": "instance", "database id": "database", "change stream name": "change stream", "table": "customers", "server transaction id": "transaction id", "low watermark": 1670955471635, "read at timestamp": 1670955531791, "number records in transaction": 2, "transaction tag": "", "system transaction": false, "value capture type": "OLD AND NEW VALUES", "partition token": "partition token", "mod number": 0, "is last record in transaction in partition": true, "number of partitions in transaction": 1 }, "op": "c", "ts ms": 1559033904863 // } Low watermark The low watermark describes the time T at which the Kafka connector is guaranteed to have streamed out and published to a Kafka topic all events with timestamp < T.
- The Kafka connector produces a change event for every data change record mod and sends change event records downstream into a separate Kafka topic for each change stream-tracked table.
- The service records the configuration and start the connector task that connects to the Spanner database and streams change event records to Kafka topics.
- As the Kafka connector reads changes and produces events, it records the last commit timestamp processed for each change stream partition.

### Change streams overview \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/change-streams](https://docs.cloud.google.com/spanner/docs/change-streams)
- Source ID: `site-docs-root`
- Final score: 218
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Using the Kafka connector The Kafka connector directly outputs change stream records into a Kafka topic.
- This connector streams change records directly into Kafka topics.
- After you configure the connector with details about a particular change stream, it automatically outputs new data change records into a single, unbounded PCollection data set, ready for further processing by subsequent transforms in the Dataflow pipeline.
- This lets you read data change records in the same way that the SpannerIO connector does, by providing the lowest possible latencies when reading change stream data instead of providing the flexibility of Dataflow.

### "Build change streams connections using Dataflow \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/change-streams/use-dataflow](https://docs.cloud.google.com/spanner/docs/change-streams/use-dataflow)
- Source ID: `site-docs-root`
- Final score: 175
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Add the SpannerIO connector as a dependency The Apache Beam SpannerIO connector encapsulates the complexity of consuming the change streams directly using the Cloud Spanner API, emitting a PCollection of change stream data records to later stages of the pipeline.
- Sample: Order by key This code sample emits data change records ordered by commit timestamp and grouped by primary keys using the Dataflow connector. pipeline . apply ( SpannerIO . readChangeStream () . withSpannerConfig ( SpannerConfig . create () . withProjectId ( "my-project-id" ) . withInstanceId ( "my-instance-id" ) . withDatabaseId ( "my-database-id" ) . withDatabaseRole ( "my-database-role" )) // Needed for fine-grained access control only . withChangeStreamName ( "my-change-stream" ) . withMetadataInstance ( "my-metadata-instance-id" ) . withMetadataDatabase ( "my-metadata-database-id" ) . withInclusiveStartAt ( Timestamp . now ())) . apply ( ParDo . of ( new BreakRecordByModFn ())) . apply ( ParDo . of ( new KeyByIdFn ())) . apply ( ParDo . of ( new BufferKeyUntilOutputTimestamp ())) // Subsequent processing goes here This code sample uses states and timers to buffer records for each key, and sets the expiration time of the timer to some user-configured time T in the future (defined in the BufferKeyUntilOutputTimestamp function).
- Dataflow pipeline A Spanner change streams Dataflow pipeline is composed of four main parts: A Spanner database with a change stream The SpannerIO connector User-defined transforms and sinks An Apache Beam sink I/O writer Spanner change stream For details on how to create a change stream, see Create a change stream .
- The connector provides you with a stream of data change records so that you are free to focus more on application logic, and less on specific API details and dynamic change stream partitioning.

