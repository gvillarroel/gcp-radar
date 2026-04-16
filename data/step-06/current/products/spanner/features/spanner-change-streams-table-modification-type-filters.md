---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.237Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Spanner Change Streams table modification type filters"
feature_slug: "spanner-change-streams-table-modification-type-filters"
latest_feature_date: "2024-04-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/change-streams/manage"
  - "https://docs.cloud.google.com/spanner/docs/change-streams"
  - "https://docs.cloud.google.com/spanner/docs/change-streams/use-kafka"
keywords:
  - "modification"
  - "filters"
  - "streams"
  - "change"
  - "table"
  - "type"
---

# Spanner Change Streams table modification type filters

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Spanner Change Streams now supports filtering by table modification type to exclude INSERT, UPDATE, or DELETE changes.

## Extended Definition

Spanner Change Streams now supports filtering by table modification type to exclude INSERT, UPDATE, or DELETE changes.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/change-streams/manage](https://docs.cloud.google.com/spanner/docs/change-streams/manage)
- [https://docs.cloud.google.com/spanner/docs/change-streams](https://docs.cloud.google.com/spanner/docs/change-streams)
- [https://docs.cloud.google.com/spanner/docs/change-streams/use-kafka](https://docs.cloud.google.com/spanner/docs/change-streams/use-kafka)

## Supporting Pages

### Create and manage change streams \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/change-streams/manage](https://docs.cloud.google.com/spanner/docs/change-streams/manage)
- Source ID: `site-docs-root`
- Final score: 218
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- In the following example, the exclude delete filter is added to an existing change stream called NewFilterChangeStream : ALTER CHANGE STREAM NewFilterChangeStream SET ( exclude delete = true ) Remove a table modification type filter from an existing change stream GoogleSQL To remove one or more existing table modification type filters in change stream, run the following to set the filter to false : ALTER CHANGE STREAM CHANGE STREAM NAME SET OPTIONS ( MOD TYPE FILTER NAME = false ) Replace the following: CHANGE STREAM NAME : replace with the name of your existing change stream MOD TYPE FILTER NAME : replace with the filter you want to remove: exclude insert , exclude update , or exclude delete .
- In the following example, the exclude delete filter is added to an existing change stream called NewFilterChangeStream : ALTER CHANGE STREAM NewFilterChangeStream SET OPTIONS ( exclude delete = true ) PostgreSQL To add one or more new table modification type filters to an existing change stream, run the following to set the filter to true : ALTER CHANGE STREAM CHANGE STREAM NAME SET ( MOD TYPE FILTER NAME = true ) Replace the following: CHANGE STREAM NAME : replace with the name of your existing change stream MOD TYPE FILTER NAME : replace with the filter you want to add: exclude insert , exclude update , or exclude delete .
- The following example creates a change stream called NewFilterChangeStream that excludes the INSERT and UPDATE table modification types: CREATE CHANGE STREAM NewFilterChangeStream FOR ALL OPTIONS ( exclude insert = true , exclude update = true ) PostgreSQL To create a change stream with one or more table modification type filters, run the following: CREATE CHANGE STREAM CHANGE STREAM NAME FOR ALL WITH ( MOD TYPE FILTER NAME = true ) Replace the following: CHANGE STREAM NAME : the name of your new change stream MOD TYPE FILTER NAME : the filter you want to add: exclude insert , exclude update , or exclude delete .
- Add a table modification type filter to an existing change stream GoogleSQL To add one or more new table modification type filters to an existing change stream, run the following to set the filter to true : ALTER CHANGE STREAM CHANGE STREAM NAME SET OPTIONS ( MOD TYPE FILTER NAME = true ) Replace the following: CHANGE STREAM NAME : replace with the name of your existing change stream MOD TYPE FILTER NAME : replace with the filter you want to add: exclude insert , exclude update , or exclude delete .

### Change streams overview \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/change-streams](https://docs.cloud.google.com/spanner/docs/change-streams)
- Source ID: `site-docs-root`
- Final score: 208
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Table modification type By default, change streams include all table modifications, such as inserts, updates, and deletes.
- You can filter one or more of these table modifications from your change stream's scope using the following available filter options: exclude insert : exclude all INSERT table modifications exclude update : exclude all UPDATE table modifications exclude delete : exclude all DELETE table modifications The default value for these filters is false .
- Types of data changes that change streams watch The data changes that a change stream watches include all inserts, updates, and deletes made to the tables and columns that it watches.
- You can add a filter for a table modification type when you create a change stream or modify the filter for a table modification type for an existing change stream.

### "Build change streams connections to Kafka \_|\_ Spanner \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/spanner/docs/change-streams/use-kafka](https://docs.cloud.google.com/spanner/docs/change-streams/use-kafka)
- Source ID: `site-docs-root`
- Final score: 177
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The schema for the payload contains all the // columns that the change stream has tracked since the connector start // time. "schema": { "type": "struct", "fields": [ { // The schema for the before values of the changed row. "type": "struct", "fields": [ { "type": "int32", "optional": false, "field": "id" }, { "type": "string", "optional": true, "field": "first name" } ], "optional": true, "name": "customers.Value", "field": "before" }, { // The schema for the after values of the changed row. "type": "struct", "fields": [ { "type": "int32", "optional": false, "field": "id" }, { "type": "string", "optional": false, "field": "first name" } ], "optional": true, "name": "customers.Value", "field": "after" }, { // The schema for the source metadata for the event. "type": "struct", "fields": [ { "type": "string", "optional": false, "field": "version" }, { "type": "string", "optional": false, "field": "connector" }, { "type": "string", "optional": false, "field": "name" }, { "type": "int64", "optional": false, "field": "ts ms" }, { "type": "boolean", "optional": true, "default": false, "field": "snapshot" }, { "type": "string", "optional": false, "field": "db" }, { "type": "string", "optional": false, "field": "sequence" }, { "type": "string", "optional": false, "field": "project id" }, { "type": "string", "optional": false, "field": "instance id" }, { "type": "string", "optional": false, "field": "database id" }, { "type": "string", "optional": false, "field": "change stream name" }, { "type": "string", "optional": true, "field": "table" } { "type": "string", "optional": true, "field": "server transaction id" } { "type": "int64", "optional": true, "field": "low watermark" } { "type": "int64", "optional": true, "field": "read at timestamp" } { "type": "int64", "optional": true, "field": "number of records in transaction" } { "type": "string", "optional": true, "field": "transaction tag" } { "type": "boolean", "optional": true, "field": "system transaction" } { "type": "string", "optional": true, "field": "value capture type" } { "type": "string", "optional": true, "field": "partition token" } { "type": "int32", "optional": true, "field": "mod number" } { "type": "boolean", "optional": true, "field": "is last record in transaction in partition" } { "type": "int64", "optional": true, "field": "number of partitions in transaction" } ], "optional": false, "name": "io.debezium.connector.spanner.Source", "field": "source" }, ] { "type": "string", "optional": false, "field": "op" }, { "type": "int64", "optional": true, "field": "ts ms" } ], "optional": false, "name": "connector name.customers.Envelope" }, "payload": { // The values of the row before the event. "before": null, // The values of the row after the event. "after": { "id": 1, "first name": "Anne", } }, // The source metadata. "source": { "version": "{debezium-version}", "connector": "spanner", "name": "spanner connector", "ts ms": 1670955531785, "snapshot": "false", "db": "database", "sequence": "1", "project id": "project", "instance id": "instance", "database id": "database", "change stream name": "change stream", "table": "customers", "server transaction id": "transaction id", "low watermark": 1670955471635, "read at timestamp": 1670955531791, "number records in transaction": 2, "transaction tag": "", "system transaction": false, "value capture type": "OLD AND NEW VALUES", "partition token": "partition token", "mod number": 0, "is last record in transaction in partition": true, "number of partitions in transaction": 1 }, "op": "c", "ts ms": 1559033904863 // } Low watermark The low watermark describes the time T at which the Kafka connector is guaranteed to have streamed out and published to a Kafka topic all events with timestamp < T.
- The following is an example POST command: POST /connectors HTTP/1.1 Host: http://localhost:8083 Accept: application/json { "name": "spanner-connector" "config": { "connector.class": "io.debezium.connector.spanner.SpannerConnector", "gcp.spanner.project.id": "test-project", "gcp.spanner.instance.id": "test-instance", "gcp.spanner.database.id": "users", "gcp.spanner.change.stream": "changeStreamAll", "gcp.spanner.credentials.json": "{\"client id\": \"XXXX\".... }", "heartbeat.interval.ms": "100", "tasks.max": "10" } } Example successful response: HTTP/1.1 201 Created Content-Type: application/json { "name": "spanner-connector", "config": { "connector.class": "io.debezium.connector.spanner.SpannerConnector", "gcp.spanner.project.id": "test-project", "gcp.spanner.instance.id": "test-instance", "gcp.spanner.database.id": "users", "gcp.spanner.change.stream": "changeStreamAll", "gcp.spanner.credentials.json": "{\"client id\": \"XXXX\".... }", "heartbeat.interval.ms": "100", "tasks.max": "10" }, "tasks": [ { "connector": "spanner-connector", "task": 1 }, { "connector": "spanner-connector", "task": 2 }, { "connector": "spanner-connector", "task": 3 } ] } Update the Kafka connector configuration To update the connector configuration, send a PUT command to the running Kafka Connect service with the same connector name.
- The following is an example PUT command: PUT /connectors/spanner-connector/config HTTP/1.1 Host: http://localhost:8083 Accept: application/json { "connector.class": "io.debezium.connector.spanner.SpannerConnector", "gcp.spanner.project.id": "test-project", "gcp.spanner.instance.id": "test-instance", "gcp.spanner.database.id": "users", "gcp.spanner.change.stream": "changeStreamAll", "gcp.spanner.credentials.json": "{\"client id\": \"XXXX\".... }", "heartbeat.interval.ms": "100", "tasks.max": "10" } Example successful response: HTTP/1.1 200 OK Content-Type: application/json { "connector.class": "io.debezium.connector.spanner.SpannerConnector", "tasks.max": "10", "gcp.spanner.project.id": "test-project", "gcp.spanner.instance.id": "test-instance", "gcp.spanner.database.id": "users", "gcp.spanner.change.stream": "changeStreamAll", "gcp.spanner.credentials.json": "{\"client id\": \"XXXX\".... }", "heartbeat.interval.ms": "100", "tasks.max": "10" } Stop the Kafka connector To stop the connector, send a DELETE command to the running Kafka Connect service with the same connector name.
- The following is an example of a data change event: { // The schema for the Spanner key. "schema": { "type": "struct", "name": "customers.Key", "optional": false, "fields": [ { "type": "int64", "optional": "false" "field": "false" } ] }, // The value of the Spanner key. "payload": { "id": "1" }, // The schema for the payload, which contains the before and after values // of the changed row.

