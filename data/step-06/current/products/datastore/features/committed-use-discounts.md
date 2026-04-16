---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:14:02.766Z"
product_name: "Datastore"
product_slug: "datastore"
feature_name: "Committed use discounts"
feature_slug: "committed-use-discounts"
latest_feature_date: "2025-04-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/datastore/docs/client-side-traces"
  - "https://docs.cloud.google.com/datastore/docs/aggregation-queries"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-datastore/latest/com.google.cloud.datastore.Datastore"
  - "https://docs.cloud.google.com/datastore/docs/concepts/cloud-datastore-transactions"
keywords:
  - "committed"
  - "use"
  - "discounts"
  - "provide"
  - "discounted"
  - "pricing"
  - "for"
  - "sustained"
---

# Committed use discounts

Product: Datastore
Coverage: MEDIUM

## Step 02 Summary

Committed use discounts provide discounted pricing for sustained read, write, and delete spend commitments.

## Extended Definition

Committed use discounts provide discounted pricing for sustained read, write, and delete spend commitments.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/datastore/docs/client-side-traces](https://docs.cloud.google.com/datastore/docs/client-side-traces)
- [https://docs.cloud.google.com/datastore/docs/aggregation-queries](https://docs.cloud.google.com/datastore/docs/aggregation-queries)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-datastore/latest/com.google.cloud.datastore.Datastore](https://docs.cloud.google.com/java/docs/reference/google-cloud-datastore/latest/com.google.cloud.datastore.Datastore)
- [https://docs.cloud.google.com/datastore/docs/concepts/cloud-datastore-transactions](https://docs.cloud.google.com/datastore/docs/concepts/cloud-datastore-transactions)

## Supporting Pages

### "Monitor performance with client-side traces \_|\_ Datastore \_|\_ Google\

- URL: [https://docs.cloud.google.com/datastore/docs/client-side-traces](https://docs.cloud.google.com/datastore/docs/client-side-traces)
- Source ID: `site-iam-reference`
- Final score: 109
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example, if you use Cloud Trace as your backend, you are billed according to Cloud Trace pricing .
- Most observability service providers offer exporters for you to use, such as Cloud Trace .
- Java // TraceExporter needed for this use case import com.google.cloud.opentelemetry.trace.TraceExporter ; Resource resource = Resource . getDefault (). merge ( Resource . builder (). put ( SERVICE NAME , "My App" ). build ()); SpanExporter gcpTraceExporter = TraceExporter . createWithDefaultConfiguration (); // Using a batch span processor // You can use .setScheduleDelay(), .setExporterTimeout(), // .setMaxQueueSize(), and .setMaxExportBatchSize() to further customize.
- Before you begin Before you begin: Make sure you set up the service account under which your app writes traces to your observability backend with the necessary Identity and Access Management roles : Trace operation IAM role Read traces roles/cloudtrace.user Write traces roles/cloudtrace.agent Read/write traces roles/cloudtrace.admin Verify Trace API is enabled on this project.

### Aggregation queries \_|\_ Datastore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastore/docs/aggregation-queries](https://docs.cloud.google.com/datastore/docs/aggregation-queries)
- Source ID: `site-iam-reference`
- Final score: 93
- Re-rank relevance: N/A

Evidence snippets:
- Query ; import com.google.common.collect.Iterables ; public class SumAggregationOnKind { // Instantiates a client. private static final Datastore datastore = DatastoreOptions . getDefaultInstance (). getService (); // The kind for the new entity. private static final String kind = "Sales" ; // Setting up Sales in database private static void setUpSales () { Key sales1Key = datastore . newKeyFactory (). setKind ( kind ). newKey ( "sales1" ); Key sales2Key = datastore . newKeyFactory (). setKind ( kind ). newKey ( "sales2" ); Key sales3Key = datastore . newKeyFactory (). setKind ( kind ). newKey ( "sales3" ); // Save all the sales. datastore . put ( Entity . newBuilder ( sales1Key ). set ( "amount" , 89 ). build (), Entity . newBuilder ( sales2Key ). set ( "amount" , 95 ). build (), Entity . newBuilder ( sales3Key ). set ( "amount" , 55 ). build ()); } // Accessing aggregation result by the provided custom alias. private static void usageWithCustomAlias () { EntityQuery selectAllSales = Query . newEntityQueryBuilder (). setKind ( kind ). build (); // Creating an aggregation query to get the sum of all sales.
- Query ; import com.google.common.collect.Iterables ; public class AvgAggregationOnKind { // Instantiates a client. private static final Datastore datastore = DatastoreOptions . getDefaultInstance (). getService (); // The kind for the new entity. private static final String kind = "Sales" ; // Setting up Sales in database private static void setUpSales () { Key sales1Key = datastore . newKeyFactory (). setKind ( kind ). newKey ( "sales1" ); Key sales2Key = datastore . newKeyFactory (). setKind ( kind ). newKey ( "sales2" ); Key sales3Key = datastore . newKeyFactory (). setKind ( kind ). newKey ( "sales3" ); // Save all the sales. datastore . put ( Entity . newBuilder ( sales1Key ). set ( "amount" , 89 ). build (), Entity . newBuilder ( sales2Key ). set ( "amount" , 95 ). build (), Entity . newBuilder ( sales3Key ). set ( "amount" , 55 ). build ()); } // Accessing aggregation result by the provided custom alias. private static void usageWithCustomAlias () { EntityQuery selectAllSales = Query . newEntityQueryBuilder (). setKind ( kind ). build (); // Creating an aggregation query to get the avg of all sales.
- GetDoubleValue ()) GQL AGGREGATE SUM(hours) AS total hours, COUNT( ) AS total tasks OVER ( SELECT FROM tasks WHERE is done = false AND tag = 'house' ) GQL supports a simplified form for aggregation queries: SELECT SUM(hours) AS total hours, COUNT( ) AS total tasks FROM tasks WHERE is done = false AND tag = 'house' This example uses the optional aliases of total hours and total tasks .
- GetIntegerValue ()) GQL AGGREGATE SUM(hours) AS total hours OVER ( SELECT FROM tasks WHERE is done = false AND tag = 'house' ) GQL supports a simplified form of sum() queries: SELECT SUM(hours) AS total hours FROM tasks WHERE is done = false AND tag = 'house' This example uses an optional alias of total hours .

### "Interface Datastore (2.37.0) \_|\_ Java client libraries \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-datastore/latest/com.google.cloud.datastore.Datastore](https://docs.cloud.google.com/java/docs/reference/google-cloud-datastore/latest/com.google.cloud.datastore.Datastore)
- Source ID: `site-java-reference`
- Final score: 92
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- StructuredQuery example: EntityQuery selectAllQuery = Query . newEntityQueryBuilder () . setKind ( "Task" ) . build (); AggregationQuery aggregationQuery = Query . newAggregationQueryBuilder () . addAggregation ( count (). as ( "total count" )) . over ( selectAllQuery ) . build (); AggregationResults aggregationResults = datastore . runAggregation ( aggregationQuery ); for ( AggregationResult aggregationResult : aggregationResults ) { System . out . println ( aggregationResult . get ( "total count" )); } GqlQuery example: GqlQuery selectAllGqlQuery = Query . newGqlQueryBuilder ( "AGGREGATE COUNT( ) AS total count, COUNT UP TO(100) AS count upto 100 OVER(SELECT FROM Task)" ) . setAllowLiteral ( true ) . build (); AggregationQuery aggregationQuery = Query . newAggregationQueryBuilder () . over ( selectAllGqlQuery ) . build (); AggregationResults aggregationResults = datastore . runAggregation ( aggregationQuery ); for ( AggregationResult aggregationResult : aggregationResults ) { System . out . println ( aggregationResult . get ( "total count" )); System . out . println ( aggregationResult . get ( "count upto 100" )); } Parameters Name Description query AggregationQuery options ReadOption [] Returns Type Description AggregationResults AggregationResults runAggregation(AggregationQuery query, ExplainOptions explainOptions, ReadOption[] options) public abstract AggregationResults runAggregation ( AggregationQuery query , ExplainOptions explainOptions , ReadOption [] options ) Beta This feature is covered by the Pre-GA Offerings Terms of the Terms of Service.
- String firstKeyName = "my first key name" ; String secondKeyName = "my second key name" ; KeyFactory keyFactory = datastore . newKeyFactory (). setKind ( "MyKind" ); Key firstKey = keyFactory . newKey ( firstKeyName ); Key secondKey = keyFactory . newKey ( secondKeyName ); List<Entity> entities = datastore . fetch ( Lists . newArrayList ( firstKey , secondKey )); for ( Entity entity : entities ) { // do something with the entity } Parameters Name Description keys Iterable < Key > options ReadOption [] Returns Type Description List < Entity > get(Key key, ReadOption[] options) public abstract Entity get ( Key key , ReadOption [] options ) Returns an Entity for the given Key or null if it doesn't exist.
- String keyName1 = "my key name 1" ; String keyName2 = "my key name 2" ; Key key1 = datastore . newKeyFactory (). setKind ( "MyKind" ). newKey ( keyName1 ); Key key2 = datastore . newKeyFactory (). setKind ( "MyKind" ). newKey ( keyName2 ); Batch batch = datastore . newBatch (); Entity entity1 = Entity . newBuilder ( key1 ). set ( "name" , "John" ). build (); Entity entity2 = Entity . newBuilder ( key2 ). set ( "title" , "title" ). build (); batch . add ( entity1 ); batch . add ( entity2 ); batch . submit (); Returns Type Description Batch newKeyFactory() public abstract KeyFactory newKeyFactory () Returns a new KeyFactory for this service Example of creating a KeyFactory .
- String callableResult = "my callable result" ; TransactionCallable<String> callable = new TransactionCallable<String> () { public String run ( DatastoreReaderWriter readerWriter ) { // use readerWriter to run in transaction return callableResult ; } }; String result = datastore . runInTransaction ( callable ); Parameter Name Description callable TransactionCallable < T > the callback to call with a newly created transactional readerWriter Returns Type Description T <T>runInTransaction(Datastore.TransactionCallable<T> callable, TransactionOptions options) public abstract T < T>runInTransaction ( Datastore .

### Cloud Datastore Transactions \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastore/docs/concepts/cloud-datastore-transactions](https://docs.cloud.google.com/datastore/docs/concepts/cloud-datastore-transactions)
- Source ID: `site-iam-reference`
- Final score: 88
- Re-rank relevance: N/A

Evidence snippets:
- This limitation exists because Datastore performs masterless, synchronous replication of each entity group over a wide geographic area to provide high reliability and fault tolerance.
- For more information, see Set up authentication for a local development environment . / Update two entities in a transaction. @param string $fromKeyId @param string $toKeyId @param int $amount @param string $namespaceId / function transfer funds( string $fromKeyId, string $toKeyId, int $amount, string $namespaceId = null ) { $datastore = new DatastoreClient(['namespaceId' => $namespaceId]); $transaction = $datastore->transaction(); $fromKey = $datastore->key('Account', $fromKeyId); $toKey = $datastore->key('Account', $toKeyId); // The option 'sort' is important here, otherwise the order of the result // might be different from the order of the keys. $result = $transaction->lookupBatch([$fromKey, $toKey], ['sort' => true]); if (count($result['found']) != 2) { $transaction->rollback(); } $fromAccount = $result['found'][0]; $toAccount = $result['found'][1]; $fromAccount['balance'] -= $amount; $toAccount['balance'] += $amount; $transaction->updateBatch([$fromAccount, $toAccount]); $transaction->commit(); } Python To learn how to install and use the client library for Cloud Datastore, see Cloud Datastore client libraries .
- For more information, see Set up authentication for a local development environment . void transferFunds ( Key fromKey , Key toKey , long amount ) { Transaction txn = datastore . newTransaction (); try { List<Entity> entities = txn . fetch ( fromKey , toKey ); Entity from = entities . get ( 0 ); Entity updatedFrom = Entity . newBuilder ( from ). set ( "balance" , from . getLong ( "balance" ) - amount ). build (); Entity to = entities . get ( 1 ); Entity updatedTo = Entity . newBuilder ( to ). set ( "balance" , to . getLong ( "balance" ) + amount ). build (); txn . put ( updatedFrom , updatedTo ); txn . commit (); } finally { if ( txn . isActive ()) { txn . rollback (); } } } Node.js To learn how to install and use the client library for Cloud Datastore, see Cloud Datastore client libraries .
- For more information, see Set up authentication for a local development environment . async function getTaskListEntities () { const transaction = datastore . transaction ({ readOnly : true }); try { const taskListKey = datastore . key ([ 'TaskList' , 'default' ]); await transaction . run (); const [ taskList ] = await transaction . get ( taskListKey ); const query = datastore . createQuery ( 'Task' ). hasAncestor ( taskListKey ); const [ taskListEntities ] = await transaction . runQuery ( query ); await transaction . commit (); return [ taskList , taskListEntities ]; } catch ( err ) { await transaction . rollback (); } } PHP To learn how to install and use the client library for Cloud Datastore, see Cloud Datastore client libraries .

