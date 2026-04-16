---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.291Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Spanner change streams to Pub/Sub Dataflow template"
feature_slug: "spanner-change-streams-to-pub-sub-dataflow-template"
latest_feature_date: "2022-12-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/change-streams/use-dataflow"
  - "https://docs.cloud.google.com/spanner/docs/change-streams"
  - "https://docs.cloud.google.com/spanner/docs/change-streams/manage"
keywords:
  - "dataflow"
  - "template"
  - "streams"
  - "change"
  - "adds"
---

# Spanner change streams to Pub/Sub Dataflow template

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Spanner adds a Dataflow template that streams change stream records from Spanner and writes them to Pub/Sub topics.

## Extended Definition

Spanner adds a Dataflow template that streams change stream records from Spanner and writes them to Pub/Sub topics.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/change-streams/use-dataflow](https://docs.cloud.google.com/spanner/docs/change-streams/use-dataflow)
- [https://docs.cloud.google.com/spanner/docs/change-streams](https://docs.cloud.google.com/spanner/docs/change-streams)
- [https://docs.cloud.google.com/spanner/docs/change-streams/manage](https://docs.cloud.google.com/spanner/docs/change-streams/manage)

## Supporting Pages

### "Build change streams connections using Dataflow \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/change-streams/use-dataflow](https://docs.cloud.google.com/spanner/docs/change-streams/use-dataflow)
- Source ID: `site-docs-root`
- Final score: 208
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For Spanner change streams, we provide three Dataflow flex templates: Spanner change streams to BigQuery Spanner change streams to Google Cloud Storage Spanner change streams to Pub/Sub The following restrictions apply when you use the Spanner change streams to Pub/Sub template: Pub/Sub has a 10 MB message size limitation.
- We also provide a Dataflow template for this use case: see Connect change streams to Cloud Storage .
- We also provide a Dataflow template for this use case; see Connect change streams to BigQuery .
- The owner of a Dataflow job that uses the SpannerIO connector needs to have the following IAM permissions set with this metadata database: spanner.databases.updateDdl spanner.databases.beginReadOnlyTransaction spanner.databases.beginOrRollbackReadWriteTransaction spanner.databases.read spanner.databases.select spanner.databases.write spanner.sessions.create spanner.sessions.get Configure the connector The Spanner change streams connector can be configured as follows: SpannerConfig spannerConfig = SpannerConfig . create () . withProjectId ( "my-project-id" ) . withInstanceId ( "my-instance-id" ) . withDatabaseId ( "my-database-id" ) . withDatabaseRole ( "my-database-role" ); // Needed for fine-grained access control only Timestamp startTime = Timestamp . now (); Timestamp endTime = Timestamp . ofTimeSecondsAndNanos ( startTime . getSeconds () + ( 10 60 ), startTime . getNanos () ); SpannerIO . readChangeStream () . withSpannerConfig ( spannerConfig ) . withChangeStreamName ( "my-change-stream" ) . withMetadataInstance ( "my-meta-instance-id" ) . withMetadataDatabase ( "my-meta-database-id" ) . withMetadataTable ( "my-meta-table-name" ) . withRpcPriority ( RpcPriority .

### Change streams overview \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/change-streams](https://docs.cloud.google.com/spanner/docs/change-streams)
- Source ID: `site-docs-root`
- Final score: 164
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Google provides templates that let you rapidly build Dataflow pipelines for common change stream use cases, including sending all of a stream's data changes to a BigQuery dataset, or copying them to a Cloud Storage bucket .
- Reading change streams Spanner offers multiple ways to read a change stream's data: Through Dataflow, using the Apache Beam SpannerIO connector.
- For a more detailed overview of how change streams and Dataflow work together, see Build change streams connections with Dataflow .
- Using Dataflow Use the Apache Beam SpannerIO connector to build Dataflow pipelines that read from change streams.

### Create and manage change streams \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/change-streams/manage](https://docs.cloud.google.com/spanner/docs/change-streams/manage)
- Source ID: `site-docs-root`
- Final score: 150
- Re-rank relevance: N/A

Evidence snippets:
- What's next Build change streams pipelines with Dataflow .
- TransactionOptions { ExcludeTxnFromChangeStreams : true }) if err != nil { return err } return nil } Java static void readWriteTxnExcludedFromChangeStreams ( DatabaseClient client ) { // Exclude the transaction from allowed tracking change streams with alloww txn exclusion=true. // This exclusion will be applied to all the individual operations inside this transaction. client . readWriteTransaction ( Options . excludeTxnFromChangeStreams ()) . run ( transaction - > { transaction . executeUpdate ( Statement . of ( "INSERT Singers (SingerId, FirstName, LastName)\n" + "VALUES (1341, 'Virginia', 'Watson')" )); System . out . println ( "New singer inserted." ); transaction . executeUpdate ( Statement . of ( "UPDATE Singers SET FirstName = 'Hi' WHERE SingerId = 111" )); System . out . println ( "Singer first name updated." ); return null ; }); } Modify a change stream To modify a change stream's configuration, use an ALTER CHANGE STREAM DDL statement.
- Modify what a change stream watches This example adds the entire Songs table to the NamesAndAlbums change stream configured earlier: ALTER CHANGE STREAM NamesAndAlbums SET FOR Singers ( FirstName , LastName ), Albums , Songs ; Spanner replaces the named change stream's behavior with the new configuration upon the completion of the long-running operation that updates the change stream's definition within the database's schema.
- The following tables contain the metadata that defines change streams' names, the tables and columns that they watch, and their retention periods: information schema.change streams information schema.change stream tables information schema.change stream columns information schema.change stream options Change streams best practices The following are some best practices for configuring and managing change streams.

