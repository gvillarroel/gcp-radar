---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.360Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Spanner COMMIT_TIMESTAMP column option"
feature_slug: "spanner-commit-timestamp-column-option"
latest_feature_date: "2018-03-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/commit-timestamp"
  - "https://docs.cloud.google.com/spanner/docs/commit-timestamp-postgresql"
  - "https://docs.cloud.google.com/spanner/docs/change-streams/use-kafka"
keywords:
  - "stores"
  - "timestamp"
  - "automatically"
  - "commit"
  - "option"
  - "column"
  - "adds"
---

# Spanner COMMIT_TIMESTAMP column option

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Adds support for a commit timestamp column option that automatically stores the transaction’s commit time in a specified Spanner column.

## Extended Definition

Adds support for a commit timestamp column option that automatically stores the transaction’s commit time in a specified Spanner column.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/commit-timestamp](https://docs.cloud.google.com/spanner/docs/commit-timestamp)
- [https://docs.cloud.google.com/spanner/docs/commit-timestamp-postgresql](https://docs.cloud.google.com/spanner/docs/commit-timestamp-postgresql)
- [https://docs.cloud.google.com/spanner/docs/change-streams/use-kafka](https://docs.cloud.google.com/spanner/docs/change-streams/use-kafka)

## Supporting Pages

### "Commit timestamps in GoogleSQL-dialect databases \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/commit-timestamp](https://docs.cloud.google.com/spanner/docs/commit-timestamp)
- Source ID: `site-docs-root`
- Final score: 212
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Client () instance = spanner client . instance ( instance id ) database = instance . database ( database id ) def update albums ( transaction ): row ct = transaction . execute update ( "UPDATE Albums " "SET LastUpdateTime = PENDING COMMIT TIMESTAMP() " "WHERE SingerId = 1" ) print ( " {} record(s) updated." . format ( row ct )) database . run in transaction ( update albums ) Ruby project id = "Your Google Cloud project ID" instance id = "Your Spanner instance ID" database id = "Your Spanner database ID" require "google/cloud/spanner" spanner = Google :: Cloud :: Spanner . new project : project id client = spanner . client instance id , database id row count = 0 client . transaction do transaction row count = transaction . execute update ( "UPDATE Albums SET LastUpdateTime = PENDING COMMIT TIMESTAMP() WHERE SingerId = 1" ) end puts " #{ row count } records updated." Ruby project id = "Your Google Cloud project ID" instance id = "Your Spanner instance ID" database id = "Your Spanner database ID" require "google/cloud/spanner" spanner = Google :: Cloud :: Spanner . new project : project id client = spanner . client instance id , database id commit timestamp = client . commit timestamp client . commit do c c . update "Albums" , [ { SingerId : 1 , AlbumId : 1 , MarketingBudget : 100 000 , LastUpdateTime : commit timestamp }, { SingerId : 2 , AlbumId : 2 , MarketingBudget : 750 000 , LastUpdateTime : commit timestamp } ] end puts "Updated data" Commit timestamps can only be written to columns annotated with the allow commit timestamp=true option.
- For example, consider the following Performances table, which includes a commit timestamp column: CREATE TABLE Performances ( SingerId INT64 NOT NULL , VenueId INT64 NOT NULL , EventDate DATE , Revenue INT64 , LastUpdateTime TIMESTAMP NOT NULL OPTIONS ( allow commit timestamp = true ) ) PRIMARY KEY ( SingerId , VenueId , EventDate ); This query benefits from the commit-timestamp optimization described earlier, because it has a greater-than-or-equal-to comparison between the table's commit timestamp column and a constant expression—in this case, a literal: SELECT FROM Performances WHERE LastUpdateTime > = "2022-05-01" ; The following query also qualifies for the optimization, since it has a greater-than comparison between the commit timestamp and a function whose arguments all evaluate to constants during the query's execution: SELECT FROM Performances WHERE LastUpdateTime > TIMESTAMP SUB ( CURRENT TIMESTAMP (), INTERVAL 30 DAY ); What's next Use commit timestamps to create a change log with Go .
- You can add the column by running the add timestamp column sample or by running this DDL statement against your database: ALTER TABLE Albums ADD COLUMN LastUpdateTime TIMESTAMP OPTIONS (allow commit timestamp=true) Example: @param string $instanceId The Spanner instance ID. @param string $databaseId The Spanner database ID. / function query data with timestamp column(string $instanceId, string $databaseId): void { $spanner = new SpannerClient(); $instance = $spanner->instance($instanceId); $database = $instance->database($databaseId); $results = $database->execute( 'SELECT SingerId, AlbumId, MarketingBudget, LastUpdateTime ' . ' FROM Albums ORDER BY LastUpdateTime DESC' ); foreach ($results as $row) { if ($row['MarketingBudget'] == null) { $row['MarketingBudget'] = 'NULL'; } if ($row['LastUpdateTime'] == null) { $row['LastUpdateTime'] = 'NULL'; } printf('SingerId: %s, AlbumId: %s, MarketingBudget: %s, LastUpdateTime: %s' .
- You could build a changelog that stores the history of changes to a given document using a schema like the following example: CREATE TABLE Documents ( UserId INT64 NOT NULL , DocumentId INT64 NOT NULL , Contents STRING ( MAX ) NOT NULL , ) PRIMARY KEY ( UserId , DocumentId ); CREATE TABLE DocumentHistory ( UserId INT64 NOT NULL , DocumentId INT64 NOT NULL , Ts TIMESTAMP NOT NULL OPTIONS ( allow commit timestamp = true ), Delta STRING ( MAX ), ) PRIMARY KEY ( UserId , DocumentId , Ts ), INTERLEAVE IN PARENT Documents ON DELETE NO ACTION ; To create a changelog, insert a new row in DocumentHistory in the same transaction in which you insert or update a row in Document .

### "Commit timestamps in PostgreSQL-dialect databases \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/commit-timestamp-postgresql](https://docs.cloud.google.com/spanner/docs/commit-timestamp-postgresql)
- Source ID: `site-docs-root`
- Final score: 196
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- You can add the column by running the add timestamp column sample or by running this DDL statement against your database: ALTER TABLE Albums ADD COLUMN LastUpdateTime TIMESTAMP OPTIONS (allow commit timestamp=true) Example: @param string $instanceId The Spanner instance ID. @param string $databaseId The Spanner database ID. / function query data with timestamp column(string $instanceId, string $databaseId): void { $spanner = new SpannerClient(); $instance = $spanner->instance($instanceId); $database = $instance->database($databaseId); $results = $database->execute( 'SELECT SingerId, AlbumId, MarketingBudget, LastUpdateTime ' . ' FROM Albums ORDER BY LastUpdateTime DESC' ); foreach ($results as $row) { if ($row['MarketingBudget'] == null) { $row['MarketingBudget'] = 'NULL'; } if ($row['LastUpdateTime'] == null) { $row['LastUpdateTime'] = 'NULL'; } printf('SingerId: %s, AlbumId: %s, MarketingBudget: %s, LastUpdateTime: %s' .
- In addition this update expects the LastUpdateTime column added by applying the DDL statement "ALTER TABLE Albums ADD COLUMN LastUpdateTime TIMESTAMP OPTIONS (allow commit timestamp=true)" Example: @param string $instanceId The Spanner instance ID. @param string $databaseId The Spanner database ID. / function update data with timestamp column(string $instanceId, string $databaseId): void { $spanner = new SpannerClient(); $instance = $spanner->instance($instanceId); $database = $instance->database($databaseId); $operation = $database->transaction(['singleUse' => true]) ->updateBatch('Albums', [ ['SingerId' => 1, 'AlbumId' => 1, 'MarketingBudget' => 1000000, 'LastUpdateTime' => $spanner->commitTimestamp()], ['SingerId' => 2, 'AlbumId' => 2, 'MarketingBudget' => 750000, 'LastUpdateTime' => $spanner->commitTimestamp()], ]) ->commit(); print('Updated data.' .
- You can add the column by running the add column sample or by running this DDL statement against your database: ALTER TABLE Albums ADD COLUMN MarketingBudget INT64 In addition this update expects the LastUpdateTime column added by applying this DDL statement against your database: ALTER TABLE Albums ADD COLUMN LastUpdateTime TIMESTAMP OPTIONS(allow commit timestamp=true) """ spanner client = spanner .
- You can add the column by running the add timestamp column sample or by running this DDL statement against your database: ALTER TABLE Performances ADD COLUMN LastUpdateTime TIMESTAMP OPTIONS (allow commit timestamp=true) """ spanner client = spanner .

### "Build change streams connections to Kafka \_|\_ Spanner \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/spanner/docs/change-streams/use-kafka](https://docs.cloud.google.com/spanner/docs/change-streams/use-kafka)
- Source ID: `site-docs-root`
- Final score: 152
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The schema for the payload contains all the // columns that the change stream has tracked since the connector start // time. "schema": { "type": "struct", "fields": [ { // The schema for the before values of the changed row. "type": "struct", "fields": [ { "type": "int32", "optional": false, "field": "id" }, { "type": "string", "optional": true, "field": "first name" } ], "optional": true, "name": "customers.Value", "field": "before" }, { // The schema for the after values of the changed row. "type": "struct", "fields": [ { "type": "int32", "optional": false, "field": "id" }, { "type": "string", "optional": false, "field": "first name" } ], "optional": true, "name": "customers.Value", "field": "after" }, { // The schema for the source metadata for the event. "type": "struct", "fields": [ { "type": "string", "optional": false, "field": "version" }, { "type": "string", "optional": false, "field": "connector" }, { "type": "string", "optional": false, "field": "name" }, { "type": "int64", "optional": false, "field": "ts ms" }, { "type": "boolean", "optional": true, "default": false, "field": "snapshot" }, { "type": "string", "optional": false, "field": "db" }, { "type": "string", "optional": false, "field": "sequence" }, { "type": "string", "optional": false, "field": "project id" }, { "type": "string", "optional": false, "field": "instance id" }, { "type": "string", "optional": false, "field": "database id" }, { "type": "string", "optional": false, "field": "change stream name" }, { "type": "string", "optional": true, "field": "table" } { "type": "string", "optional": true, "field": "server transaction id" } { "type": "int64", "optional": true, "field": "low watermark" } { "type": "int64", "optional": true, "field": "read at timestamp" } { "type": "int64", "optional": true, "field": "number of records in transaction" } { "type": "string", "optional": true, "field": "transaction tag" } { "type": "boolean", "optional": true, "field": "system transaction" } { "type": "string", "optional": true, "field": "value capture type" } { "type": "string", "optional": true, "field": "partition token" } { "type": "int32", "optional": true, "field": "mod number" } { "type": "boolean", "optional": true, "field": "is last record in transaction in partition" } { "type": "int64", "optional": true, "field": "number of partitions in transaction" } ], "optional": false, "name": "io.debezium.connector.spanner.Source", "field": "source" }, ] { "type": "string", "optional": false, "field": "op" }, { "type": "int64", "optional": true, "field": "ts ms" } ], "optional": false, "name": "connector name.customers.Envelope" }, "payload": { // The values of the row before the event. "before": null, // The values of the row after the event. "after": { "id": 1, "first name": "Anne", } }, // The source metadata. "source": { "version": "{debezium-version}", "connector": "spanner", "name": "spanner connector", "ts ms": 1670955531785, "snapshot": "false", "db": "database", "sequence": "1", "project id": "project", "instance id": "instance", "database id": "database", "change stream name": "change stream", "table": "customers", "server transaction id": "transaction id", "low watermark": 1670955471635, "read at timestamp": 1670955531791, "number records in transaction": 2, "transaction tag": "", "system transaction": false, "value capture type": "OLD AND NEW VALUES", "partition token": "partition token", "mod number": 0, "is last record in transaction in partition": true, "number of partitions in transaction": 1 }, "op": "c", "ts ms": 1559033904863 // } Low watermark The low watermark describes the time T at which the Kafka connector is guaranteed to have streamed out and published to a Kafka topic all events with timestamp < T.
- Stores metadata regarding change stream partitions. rebalancing topic spanner connector connectorname : A topic automatically created by the connector.
- Stores consumer offsets for consumers created in the Kafka connector. kafka-connect-offsets : A topic automatically created by Kafka Connect.
- As the Kafka connector reads changes and produces events, it records the last commit timestamp processed for each change stream partition.

