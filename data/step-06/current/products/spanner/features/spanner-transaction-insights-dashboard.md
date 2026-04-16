---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.296Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Spanner Transaction Insights dashboard"
feature_slug: "spanner-transaction-insights-dashboard"
latest_feature_date: "2022-10-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-spanner/latest/com.google.cloud.spanner.AsyncTransactionManager.AsyncTransactionStep"
  - "https://docs.cloud.google.com/spanner/docs/change-streams/use-dataflow"
  - "https://docs.cloud.google.com/spanner/docs/best-practices-gaming-database"
keywords:
  - "cause"
  - "identifies"
  - "dashboard"
  - "transactions"
  - "transaction"
  - "insights"
  - "databases"
---

# Spanner Transaction Insights dashboard

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

The Transaction Insights dashboard identifies transactions in Spanner databases that cause lock contention and potential high latency.

## Extended Definition

The Transaction Insights dashboard identifies transactions in Spanner databases that cause lock contention and potential high latency.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/java/docs/reference/google-cloud-spanner/latest/com.google.cloud.spanner.AsyncTransactionManager.AsyncTransactionStep](https://docs.cloud.google.com/java/docs/reference/google-cloud-spanner/latest/com.google.cloud.spanner.AsyncTransactionManager.AsyncTransactionStep)
- [https://docs.cloud.google.com/spanner/docs/change-streams/use-dataflow](https://docs.cloud.google.com/spanner/docs/change-streams/use-dataflow)
- [https://docs.cloud.google.com/spanner/docs/best-practices-gaming-database](https://docs.cloud.google.com/spanner/docs/best-practices-gaming-database)

## Supporting Pages

### "Interface AsyncTransactionManager.AsyncTransactionStep<I,O> (6.111.1) \_\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-spanner/latest/com.google.cloud.spanner.AsyncTransactionManager.AsyncTransactionStep](https://docs.cloud.google.com/java/docs/reference/google-cloud-spanner/latest/com.google.cloud.spanner.AsyncTransactionManager.AsyncTransactionStep)
- Source ID: `site-java-reference`
- Final score: 129
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- AsyncTransactionStep<I , O > extends ApiFuture<O> AsyncTransactionStep is returned by TransactionContextFuture#then(AsyncTransactionFunction, Executor) and AsyncTransactionStep#then(AsyncTransactionFunction, Executor) and allows transaction steps that should be executed serially to be chained together.
- Home Documentation Developer tools Java Client libraries Send feedback Interface AsyncTransactionManager.AsyncTransactionStep<I,O> (6.111.1) Stay organized with collections Save and categorize content based on your preferences.
- Parameters Name Description next AsyncTransactionFunction < O , RES > executor Executor Returns Type Description AsyncTransactionStep < O , RES > commitAsync() public abstract AsyncTransactionManager .
- AsyncTransactionStep<O , RES > < RES>then ( AsyncTransactionManager .

### "Build change streams connections using Dataflow \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/change-streams/use-dataflow](https://docs.cloud.google.com/spanner/docs/change-streams/use-dataflow)
- Source ID: `site-docs-root`
- Final score: 109
- Re-rank relevance: N/A

Evidence snippets:
- The owner of a Dataflow job that uses the SpannerIO connector needs to have the following IAM permissions set with this metadata database: spanner.databases.updateDdl spanner.databases.beginReadOnlyTransaction spanner.databases.beginOrRollbackReadWriteTransaction spanner.databases.read spanner.databases.select spanner.databases.write spanner.sessions.create spanner.sessions.get Configure the connector The Spanner change streams connector can be configured as follows: SpannerConfig spannerConfig = SpannerConfig . create () . withProjectId ( "my-project-id" ) . withInstanceId ( "my-instance-id" ) . withDatabaseId ( "my-database-id" ) . withDatabaseRole ( "my-database-role" ); // Needed for fine-grained access control only Timestamp startTime = Timestamp . now (); Timestamp endTime = Timestamp . ofTimeSecondsAndNanos ( startTime . getSeconds () + ( 10 60 ), startTime . getNanos () ); SpannerIO . readChangeStream () . withSpannerConfig ( spannerConfig ) . withChangeStreamName ( "my-change-stream" ) . withMetadataInstance ( "my-meta-instance-id" ) . withMetadataDatabase ( "my-meta-database-id" ) . withMetadataTable ( "my-meta-table-name" ) . withRpcPriority ( RpcPriority .
- Collections . sort ( recordsToOutput , new DataChangeRecordComparator ()); context . outputWithTimestamp ( KV . of ( elementKey , recordsToOutput ), context . timestamp ()); LOG . info ( "Expired at {}, outputting records for key {}" , context . timestamp (). toString (), elementKey ); } else { LOG . info ( "Expired at {} with no records" , context . timestamp (). toString ()); } } Instant nextTimer = context . timestamp (). plus ( Duration . standardSeconds ( incrementIntervalInSeconds )); if ( buffer . isEmpty () != null && ! buffer . isEmpty (). read ()) { LOG . info ( "Setting next timer to {}" , nextTimer . toString ()); timer . set ( nextTimer ); } else { LOG . info ( "Timer not being set since the buffer is empty: " ); keyString . clear (); } } } Ordering transactions This pipeline can be changed to order by transaction ID and commit timestamp.
- Sample: Assemble transactions This code sample reads data change records, assembles all data change records belonging to the same transaction into a single element, and outputs that element.
- Note that the transactions outputted by this sample code are not ordered by commit timestamp.

### "Best practices for using Spanner as a gaming database \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/spanner/docs/best-practices-gaming-database](https://docs.cloud.google.com/spanner/docs/best-practices-gaming-database)
- Source ID: `site-docs-root`
- Final score: 105
- Re-rank relevance: N/A

Evidence snippets:
- Tracking valuable in-game items or critical player progress typically requires transactions and is challenging to work around in many types of distributed databases.
- These are frequently used because they can provide familiar methodologies and strong guarantees around transactions .
- Even when using Spanner to hold all of your game data worldwide, it offers read-write transactions with even stronger than conventional atomicity, consistency, isolation, and durability (ACID) properties.
- In addition, not being able to rely on atomic transactions can lead to player exploits such as in-game currency or item duplication, which harm the game's ecosystem and community.

