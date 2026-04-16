---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.236Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Spanner Change Streams NEW_ROW_AND_OLD_VALUES capture type"
feature_slug: "spanner-change-streams-new-row-and-old-values-capture-type"
latest_feature_date: "2024-04-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/change-streams"
  - "https://docs.cloud.google.com/spanner/docs/change-streams/manage"
  - "https://docs.cloud.google.com/spanner/docs/change-streams/use-kafka"
keywords:
  - "capture"
  - "streams"
  - "change"
  - "values"
  - "type"
---

# Spanner Change Streams NEW_ROW_AND_OLD_VALUES capture type

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Spanner Change Streams now supports the NEW_ROW_AND_OLD_VALUES capture type, which records new values for all columns and old values for modified columns.

## Extended Definition

Spanner Change Streams now supports the NEW_ROW_AND_OLD_VALUES capture type, which records new values for all columns and old values for modified columns.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/change-streams](https://docs.cloud.google.com/spanner/docs/change-streams)
- [https://docs.cloud.google.com/spanner/docs/change-streams/manage](https://docs.cloud.google.com/spanner/docs/change-streams/manage)
- [https://docs.cloud.google.com/spanner/docs/change-streams/use-kafka](https://docs.cloud.google.com/spanner/docs/change-streams/use-kafka)

## Supporting Pages

### Change streams overview \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/change-streams](https://docs.cloud.google.com/spanner/docs/change-streams)
- Source ID: `site-docs-root`
- Final score: 198
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Content of a data change record Every data change record written by a change stream includes the following information about the data change: The name of the affected table The names, values, and data types of the primary keys identifying the changed row The names and data types of the changed row's columns that were captured based on the change stream definition.
- You can use DDL to specify one of the following value capture types for a change stream: OLD AND NEW VALUES : Captures both old and new values of a row's modified columns.
- Value capture type A change stream's value capture type configuration option controls the way that it stores a changed row's values.
- Note: A change stream's value capture type configuration option controls the way that it records a changed row's values.

### Create and manage change streams \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/change-streams/manage](https://docs.cloud.google.com/spanner/docs/change-streams/manage)
- Source ID: `site-docs-root`
- Final score: 198
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Two examples: GoogleSQL CREATE CHANGE STREAM LongerDataRetention FOR ALL OPTIONS ( retention period = '36h' ); CREATE CHANGE STREAM MaximumDataRetention FOR ALL OPTIONS ( retention period = '7d' ); PostgreSQL CREATE CHANGE STREAM LongerDataRetention FOR ALL WITH ( retention period = '36h' ); CREATE CHANGE STREAM MaximumDataRetention FOR ALL WITH ( retention period = '7d' ); Specify a different value capture type To specify a change stream value capture type other than OLD AND NEW VALUES , set the value capture type to either NEW VALUES or NEW ROW , as shown in the following examples: GoogleSQL CREATE CHANGE STREAM NewRowChangeStream FOR ALL OPTIONS ( value capture type = 'NEW ROW' ); CREATE CHANGE STREAM NewValuesChangeStream FOR ALL OPTIONS ( value capture type = 'NEW VALUES' ); PostgreSQL CREATE CHANGE STREAM NewRowChangeStream FOR ALL WITH ( value capture type = 'NEW ROW' ); CREATE CHANGE STREAM NewValuesChangeStream FOR ALL WITH ( value capture type = 'NEW VALUES' ); Filter TTL-based deletes You can filter TTL-based deletes from your change stream's scope using the exclude ttl deletes filter.
- GoogleSQL ALTER CHANGE STREAM NamesAndAlbums SET OPTIONS ( value capture type = 'NEW VALUES' ); PostgreSQL ALTER CHANGE STREAM NamesAndAlbums SET ( value capture type = 'NEW VALUES' ); Note: Modifying the value capture type of a change stream doesn't cause columns to backfill.
- For example, modifying the value capture type from NEW VALUES to OLD AND NEW VALUES doesn't cause backfill of old values for a change stream.
- TransactionOptions { ExcludeTxnFromChangeStreams : true }) if err != nil { return err } return nil } Java static void readWriteTxnExcludedFromChangeStreams ( DatabaseClient client ) { // Exclude the transaction from allowed tracking change streams with alloww txn exclusion=true. // This exclusion will be applied to all the individual operations inside this transaction. client . readWriteTransaction ( Options . excludeTxnFromChangeStreams ()) . run ( transaction - > { transaction . executeUpdate ( Statement . of ( "INSERT Singers (SingerId, FirstName, LastName)\n" + "VALUES (1341, 'Virginia', 'Watson')" )); System . out . println ( "New singer inserted." ); transaction . executeUpdate ( Statement . of ( "UPDATE Singers SET FirstName = 'Hi' WHERE SingerId = 111" )); System . out . println ( "Singer first name updated." ); return null ; }); } Modify a change stream To modify a change stream's configuration, use an ALTER CHANGE STREAM DDL statement.

### "Build change streams connections to Kafka \_|\_ Spanner \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/spanner/docs/change-streams/use-kafka](https://docs.cloud.google.com/spanner/docs/change-streams/use-kafka)
- Source ID: `site-docs-root`
- Final score: 196
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The schema for the payload contains all the // columns that the change stream has tracked since the connector start // time. "schema": { "type": "struct", "fields": [ { // The schema for the before values of the changed row. "type": "struct", "fields": [ { "type": "int32", "optional": false, "field": "id" }, { "type": "string", "optional": true, "field": "first name" } ], "optional": true, "name": "customers.Value", "field": "before" }, { // The schema for the after values of the changed row. "type": "struct", "fields": [ { "type": "int32", "optional": false, "field": "id" }, { "type": "string", "optional": false, "field": "first name" } ], "optional": true, "name": "customers.Value", "field": "after" }, { // The schema for the source metadata for the event. "type": "struct", "fields": [ { "type": "string", "optional": false, "field": "version" }, { "type": "string", "optional": false, "field": "connector" }, { "type": "string", "optional": false, "field": "name" }, { "type": "int64", "optional": false, "field": "ts ms" }, { "type": "boolean", "optional": true, "default": false, "field": "snapshot" }, { "type": "string", "optional": false, "field": "db" }, { "type": "string", "optional": false, "field": "sequence" }, { "type": "string", "optional": false, "field": "project id" }, { "type": "string", "optional": false, "field": "instance id" }, { "type": "string", "optional": false, "field": "database id" }, { "type": "string", "optional": false, "field": "change stream name" }, { "type": "string", "optional": true, "field": "table" } { "type": "string", "optional": true, "field": "server transaction id" } { "type": "int64", "optional": true, "field": "low watermark" } { "type": "int64", "optional": true, "field": "read at timestamp" } { "type": "int64", "optional": true, "field": "number of records in transaction" } { "type": "string", "optional": true, "field": "transaction tag" } { "type": "boolean", "optional": true, "field": "system transaction" } { "type": "string", "optional": true, "field": "value capture type" } { "type": "string", "optional": true, "field": "partition token" } { "type": "int32", "optional": true, "field": "mod number" } { "type": "boolean", "optional": true, "field": "is last record in transaction in partition" } { "type": "int64", "optional": true, "field": "number of partitions in transaction" } ], "optional": false, "name": "io.debezium.connector.spanner.Source", "field": "source" }, ] { "type": "string", "optional": false, "field": "op" }, { "type": "int64", "optional": true, "field": "ts ms" } ], "optional": false, "name": "connector name.customers.Envelope" }, "payload": { // The values of the row before the event. "before": null, // The values of the row after the event. "after": { "id": 1, "first name": "Anne", } }, // The source metadata. "source": { "version": "{debezium-version}", "connector": "spanner", "name": "spanner connector", "ts ms": 1670955531785, "snapshot": "false", "db": "database", "sequence": "1", "project id": "project", "instance id": "instance", "database id": "database", "change stream name": "change stream", "table": "customers", "server transaction id": "transaction id", "low watermark": 1670955471635, "read at timestamp": 1670955531791, "number records in transaction": 2, "transaction tag": "", "system transaction": false, "value capture type": "OLD AND NEW VALUES", "partition token": "partition token", "mod number": 0, "is last record in transaction in partition": true, "number of partitions in transaction": 1 }, "op": "c", "ts ms": 1559033904863 // } Low watermark The low watermark describes the time T at which the Kafka connector is guaranteed to have streamed out and published to a Kafka topic all events with timestamp < T.
- The following is an example of a data change event: { // The schema for the Spanner key. "schema": { "type": "struct", "name": "customers.Key", "optional": false, "fields": [ { "type": "int64", "optional": "false" "field": "false" } ] }, // The value of the Spanner key. "payload": { "id": "1" }, // The schema for the payload, which contains the before and after values // of the changed row.
- Note that if you want both changed and unchanged columns to be returned on each data change event, use the value capture type NEW ROW .
- The following is an example POST command: POST /connectors HTTP/1.1 Host: http://localhost:8083 Accept: application/json { "name": "spanner-connector" "config": { "connector.class": "io.debezium.connector.spanner.SpannerConnector", "gcp.spanner.project.id": "test-project", "gcp.spanner.instance.id": "test-instance", "gcp.spanner.database.id": "users", "gcp.spanner.change.stream": "changeStreamAll", "gcp.spanner.credentials.json": "{\"client id\": \"XXXX\".... }", "heartbeat.interval.ms": "100", "tasks.max": "10" } } Example successful response: HTTP/1.1 201 Created Content-Type: application/json { "name": "spanner-connector", "config": { "connector.class": "io.debezium.connector.spanner.SpannerConnector", "gcp.spanner.project.id": "test-project", "gcp.spanner.instance.id": "test-instance", "gcp.spanner.database.id": "users", "gcp.spanner.change.stream": "changeStreamAll", "gcp.spanner.credentials.json": "{\"client id\": \"XXXX\".... }", "heartbeat.interval.ms": "100", "tasks.max": "10" }, "tasks": [ { "connector": "spanner-connector", "task": 1 }, { "connector": "spanner-connector", "task": 2 }, { "connector": "spanner-connector", "task": 3 } ] } Update the Kafka connector configuration To update the connector configuration, send a PUT command to the running Kafka Connect service with the same connector name.

