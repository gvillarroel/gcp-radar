---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.324Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Spanner Studio storage utilization warnings"
feature_slug: "spanner-studio-storage-utilization-warnings"
latest_feature_date: "2021-02-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/create-query-database-console"
  - "https://docs.cloud.google.com/spanner/docs/best-practices-gaming-database"
  - "https://docs.cloud.google.com/spanner/docs/change-streams/use-dataflow"
keywords:
  - "warnings"
  - "displays"
  - "utilization"
  - "storage"
  - "studio"
  - "database"
---

# Spanner Studio storage utilization warnings

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Spanner Studio now displays database storage utilization and issues warnings when usage approaches the recommended storage limit.

## Extended Definition

Spanner Studio now displays database storage utilization and issues warnings when usage approaches the recommended storage limit.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/create-query-database-console](https://docs.cloud.google.com/spanner/docs/create-query-database-console)
- [https://docs.cloud.google.com/spanner/docs/best-practices-gaming-database](https://docs.cloud.google.com/spanner/docs/best-practices-gaming-database)
- [https://docs.cloud.google.com/spanner/docs/change-streams/use-dataflow](https://docs.cloud.google.com/spanner/docs/change-streams/use-dataflow)

## Supporting Pages

### "Create and query a database in the Google Cloud console \_|\_ Spanner \_\

- URL: [https://docs.cloud.google.com/spanner/docs/create-query-database-console](https://docs.cloud.google.com/spanner/docs/create-query-database-console)
- Source ID: `site-docs-reference`
- Final score: 107
- Re-rank relevance: N/A

Evidence snippets:
- The Google Cloud console displays the Singers table's Spanner Studio page with a new query tab that contains the INSERT statement that you edit to insert a row in the Singers table and view the result of that insertion: GoogleSQL -- Add new values in the VALUES clause in order of the column list. -- Each value must be type compatible with its associated column.
- The Singers table now has two rows: GoogleSQL PostgreSQL Run a query in the Google Cloud console On the database Overview page, click Spanner Studio in the navigation menu.
- Create a schema for your database Note: Spanner Studio (formerly labeled Query in the Google Cloud console) supports SQL, DML, and DDL operations in a single editor.
- Spanner again displays the Singers table's Spanner Studio page with a new query tab that contains the same INSERT and SELECT statements.

### "Best practices for using Spanner as a gaming database \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/spanner/docs/best-practices-gaming-database](https://docs.cloud.google.com/spanner/docs/best-practices-gaming-database)
- Source ID: `site-docs-root`
- Final score: 106
- Re-rank relevance: N/A

Evidence snippets:
- This document is intended for game backend engineers working on long-term state storage, and game infrastructure operators and admins who support those systems and are interested in hosting their backend database on Google Cloud.
- With the scalability of Spanner, it means that data doesn't need to be sharded into separate database instances when more performance or storage is needed; instead, you can add more nodes.
- This database is sometimes combined with the game DB, but they are frequently separated in studios or publishers that have multiple titles.
- This document describes best practices for using Spanner as the primary backend database for game state storage.

### "Build change streams connections using Dataflow \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/change-streams/use-dataflow](https://docs.cloud.google.com/spanner/docs/change-streams/use-dataflow)
- Source ID: `site-docs-root`
- Final score: 83
- Re-rank relevance: N/A

Evidence snippets:
- This is a good fit for analytics and point-in-time archival, which is independent from Spanner's retention period. pipeline . apply ( SpannerIO . readChangeStream () . withSpannerConfig ( SpannerConfig . create () . withProjectId ( "my-project-id" ) . withInstanceId ( "my-instance-id" ) . withDatabaseId ( "my-database-id" ) . withDatabaseRole ( "my-database-role" )) // Needed for fine-grained access control only . withChangeStreamName ( "my-change-stream" ) . withMetadataInstance ( "my-metadata-instance-id" ) . withMetadataDatabase ( "my-metadata-database-id" ) . withInclusiveStartAt ( Timestamp . now ())) . apply ( MapElements . into ( TypeDescriptors . strings ()). via ( Object :: toString )) . apply ( Window . into ( FixedWindows . of ( Duration . standardMinutes ( 1 )))) . apply ( TextIO . write () . to ( "gs://my-bucket/change-stream-results-" ) . withSuffix ( ".txt" ) . withWindowedWrites () . withNumShards ( 1 )); Note that the Cloud Storage sink provides at-least-once semantics by default.
- Use a separate metadata database We recommend creating a separate database for the SpannerIO connector to use for metadata storage, rather than configuring it to use your application database.
- These examples demonstrate how to filter change stream records based on user-defined transaction tags as well as system tags: User-defined tag filtering for my-tx-tag : pipeline . apply ( SpannerIO . readChangeStream () . withSpannerConfig ( SpannerConfig . create () . withProjectId ( "my-project-id" ) . withInstanceId ( "my-instance-id" ) . withDatabaseId ( "my-database-id" ) . withDatabaseRole ( "my-database-role" )) // Needed for fine-grained access control only . withChangeStreamName ( "my-change-stream" ) . withMetadataInstance ( "my-metadata-instance-id" ) . withMetadataDatabase ( "my-metadata-database-id" ) . withInclusiveStartAt ( Timestamp . now ())) . apply ( Filter . by ( record - > ! record . isSystemTransaction () && record . getTransactionTag (). equalsIgnoreCase ( "my-tx-tag" ))) // Subsequent processing goes here System tag filtering/ TTL auditing: pipeline . apply ( SpannerIO . readChangeStream () . withSpannerConfig ( SpannerConfig . create () . withProjectId ( "my-project-id" ) . withInstanceId ( "my-instance-id" ) . withDatabaseId ( "my-database-id" ) . withDatabaseRole ( "my-database-role" )) // Needed for fine-grained access control only . withChangeStreamName ( "my-change-stream" ) . withMetadataInstance ( "my-metadata-instance-id" ) . withMetadataDatabase ( "my-metadata-database-id" ) . withInclusiveStartAt ( Timestamp . now ())) . apply ( Filter . by ( record - > record . isSystemTransaction () && record . getTransactionTag (). equals ( "RowDeletionPolicy" ))) // Subsequent processing goes here Sample: Fetch full row This example works with a Spanner table named Singer that has the following definition: CREATE TABLE Singers ( SingerId INT64 NOT NULL , FirstName STRING ( 1024 ), LastName STRING ( 1024 ) ) PRIMARY KEY ( SingerId ); Under the default OLD AND NEW VALUES value capture mode of change streams, when there is an update to a Spanner row, the data change record received will contain only the columns that were changed.
- It buffers the data change records belonging to that transaction until the number of buffered records matches numberOfRecordsInTransaction , upon which it outputs the bundled data change records. pipeline . apply ( SpannerIO . readChangeStream () . withSpannerConfig ( SpannerConfig . create () . withProjectId ( "my-project-id" ) . withInstanceId ( "my-instance-id" ) . withDatabaseId ( "my-database-id" ) . withDatabaseRole ( "my-database-role" )) // Needed for fine-grained access control only . withChangeStreamName ( "my-change-stream" ) . withMetadataInstance ( "my-metadata-instance-id" ) . withMetadataDatabase ( "my-metadata-database-id" ) . withInclusiveStartAt ( Timestamp . now ())) . apply ( ParDo . of ( new KeyByTransactionIdFn ())) . apply ( ParDo . of ( new TransactionBoundaryFn ())) // Subsequent processing goes here KeyByTransactionIdFn This function takes in a DataChangeRecord and outputs a DataChangeRecord keyed by the transaction ID. private static class KeyByTransactionIdFn extends DoFn<DataChangeRecord , KV<String , DataChangeRecord >> { @ProcessElement public void processElement ( @Element DataChangeRecord record , OutputReceiver<KV<String , DataChangeRecord >> outputReceiver ) { outputReceiver . output ( KV . of ( record . getServerTransactionId (), record )); } } TransactionBoundaryFn TransactionBoundaryFn buffers received key-value pairs of {TransactionId, DataChangeRecord} from KeyByTransactionIdFn and buffers them in groups based on TransactionId .

