---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.304Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Change streams"
feature_slug: "change-streams"
latest_feature_date: "2022-05-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/change-streams"
  - "https://docs.cloud.google.com/spanner/docs/change-streams/manage"
  - "https://docs.cloud.google.com/spanner/docs/change-streams/use-kafka"
keywords:
  - "inserts"
  - "capture"
  - "updates"
  - "deletes"
  - "streams"
  - "stream"
  - "change"
---

# Change streams

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Spanner change streams capture and stream inserts, updates, and deletes in near real time for use in analytics, archiving, and downstream workflows.

## Extended Definition

Spanner change streams capture and stream inserts, updates, and deletes in near real time for use in analytics, archiving, and downstream workflows.

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
- Final score: 300
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Types of data changes that change streams watch The data changes that a change stream watches include all inserts, updates, and deletes made to the tables and columns that it watches.
- A change stream watches and streams out a Spanner database's data changes —inserts, updates, and deletes—in near real-time.
- Table modification type By default, change streams include all table modifications, such as inserts, updates, and deletes.
- If you don't set the exclude txn from change streams option or if it's set to false , then any change streams monitoring columns modified by transactions will capture the updates made within that transaction.

### Create and manage change streams \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/change-streams/manage](https://docs.cloud.google.com/spanner/docs/change-streams/manage)
- Source ID: `site-docs-root`
- Final score: 274
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Two examples: GoogleSQL CREATE CHANGE STREAM LongerDataRetention FOR ALL OPTIONS ( retention period = '36h' ); CREATE CHANGE STREAM MaximumDataRetention FOR ALL OPTIONS ( retention period = '7d' ); PostgreSQL CREATE CHANGE STREAM LongerDataRetention FOR ALL WITH ( retention period = '36h' ); CREATE CHANGE STREAM MaximumDataRetention FOR ALL WITH ( retention period = '7d' ); Specify a different value capture type To specify a change stream value capture type other than OLD AND NEW VALUES , set the value capture type to either NEW VALUES or NEW ROW , as shown in the following examples: GoogleSQL CREATE CHANGE STREAM NewRowChangeStream FOR ALL OPTIONS ( value capture type = 'NEW ROW' ); CREATE CHANGE STREAM NewValuesChangeStream FOR ALL OPTIONS ( value capture type = 'NEW VALUES' ); PostgreSQL CREATE CHANGE STREAM NewRowChangeStream FOR ALL WITH ( value capture type = 'NEW ROW' ); CREATE CHANGE STREAM NewValuesChangeStream FOR ALL WITH ( value capture type = 'NEW VALUES' ); Filter TTL-based deletes You can filter TTL-based deletes from your change stream's scope using the exclude ttl deletes filter.
- GoogleSQL The DDL syntax for creating a change stream using GoogleSQL looks like this: CREATE CHANGE STREAM CHANGE STREAM NAME [ FOR column or table watching definition [ , ... ] ] [ OPTIONS ( retention period = timespan , value capture type = type , exclude ttl deletes = boolean , exclude insert = boolean , exclude update = boolean , exclude delete = boolean , allow txn exclusion = boolean ) ] PostgreSQL The DDL syntax for creating a change stream using PostgreSQL looks like this: CREATE CHANGE STREAM CHANGE STREAM NAME [ FOR column or table watching definition [, ... ] ] [ WITH ( retention period = timespan , value capture type = type , exclude ttl deletes = boolean , exclude insert = boolean , exclude update = boolean , exclude delete = boolean , allow txn exclusion = boolean ) ] A new change stream begins to watch its assigned schema objects as soon as the long-running operation that created it completes.
- Watch specific tables To limit a change stream's scope to specific tables, rather than an entire database, specify a list of one or more tables: CREATE CHANGE STREAM SingerAlbumStream FOR Singers , Albums ; Spanner automatically updates change streams that watch whole tables to reflect any schema changes affecting those tables, such as added or dropped columns.
- Because change streams are schema objects, you create and manage them through the same DDL-driven schema updates used for any other kind of database-definition work, such as creating tables or adding indexes.

### "Build change streams connections to Kafka \_|\_ Spanner \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/spanner/docs/change-streams/use-kafka](https://docs.cloud.google.com/spanner/docs/change-streams/use-kafka)
- Source ID: `site-docs-root`
- Final score: 234
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The schema for the payload contains all the // columns that the change stream has tracked since the connector start // time. "schema": { "type": "struct", "fields": [ { // The schema for the before values of the changed row. "type": "struct", "fields": [ { "type": "int32", "optional": false, "field": "id" }, { "type": "string", "optional": true, "field": "first name" } ], "optional": true, "name": "customers.Value", "field": "before" }, { // The schema for the after values of the changed row. "type": "struct", "fields": [ { "type": "int32", "optional": false, "field": "id" }, { "type": "string", "optional": false, "field": "first name" } ], "optional": true, "name": "customers.Value", "field": "after" }, { // The schema for the source metadata for the event. "type": "struct", "fields": [ { "type": "string", "optional": false, "field": "version" }, { "type": "string", "optional": false, "field": "connector" }, { "type": "string", "optional": false, "field": "name" }, { "type": "int64", "optional": false, "field": "ts ms" }, { "type": "boolean", "optional": true, "default": false, "field": "snapshot" }, { "type": "string", "optional": false, "field": "db" }, { "type": "string", "optional": false, "field": "sequence" }, { "type": "string", "optional": false, "field": "project id" }, { "type": "string", "optional": false, "field": "instance id" }, { "type": "string", "optional": false, "field": "database id" }, { "type": "string", "optional": false, "field": "change stream name" }, { "type": "string", "optional": true, "field": "table" } { "type": "string", "optional": true, "field": "server transaction id" } { "type": "int64", "optional": true, "field": "low watermark" } { "type": "int64", "optional": true, "field": "read at timestamp" } { "type": "int64", "optional": true, "field": "number of records in transaction" } { "type": "string", "optional": true, "field": "transaction tag" } { "type": "boolean", "optional": true, "field": "system transaction" } { "type": "string", "optional": true, "field": "value capture type" } { "type": "string", "optional": true, "field": "partition token" } { "type": "int32", "optional": true, "field": "mod number" } { "type": "boolean", "optional": true, "field": "is last record in transaction in partition" } { "type": "int64", "optional": true, "field": "number of partitions in transaction" } ], "optional": false, "name": "io.debezium.connector.spanner.Source", "field": "source" }, ] { "type": "string", "optional": false, "field": "op" }, { "type": "int64", "optional": true, "field": "ts ms" } ], "optional": false, "name": "connector name.customers.Envelope" }, "payload": { // The values of the row before the event. "before": null, // The values of the row after the event. "after": { "id": 1, "first name": "Anne", } }, // The source metadata. "source": { "version": "{debezium-version}", "connector": "spanner", "name": "spanner connector", "ts ms": 1670955531785, "snapshot": "false", "db": "database", "sequence": "1", "project id": "project", "instance id": "instance", "database id": "database", "change stream name": "change stream", "table": "customers", "server transaction id": "transaction id", "low watermark": 1670955471635, "read at timestamp": 1670955531791, "number records in transaction": 2, "transaction tag": "", "system transaction": false, "value capture type": "OLD AND NEW VALUES", "partition token": "partition token", "mod number": 0, "is last record in transaction in partition": true, "number of partitions in transaction": 1 }, "op": "c", "ts ms": 1559033904863 // } Low watermark The low watermark describes the time T at which the Kafka connector is guaranteed to have streamed out and published to a Kafka topic all events with timestamp < T.
- Home Documentation Databases Spanner Guides Send feedback Build change streams connections to Kafka Stay organized with collections Save and categorize content based on your preferences.
- The service records the configuration and start the connector task that connects to the Spanner database and streams change event records to Kafka topics.
- With this connector, you don't have to manage the change streams partition lifecycle, which is necessary when you use the Spanner API directly .

