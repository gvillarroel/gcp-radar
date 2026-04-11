---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T08:14:41.879Z"
product_name: "Datastore"
product_slug: "datastore"
feature_name: "TransactionOptions for read-only and read-write transactions"
feature_slug: "transactionoptions-for-read-only-and-read-write-transactions"
latest_feature_date: "2018-01-30"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/datastore/docs/concepts/cloud-datastore-transactions"
  - "https://docs.cloud.google.com/datastore/docs/articles/balancing-strong-and-eventual-consistency-with-google-cloud-datastore"
  - "https://docs.cloud.google.com/datastore/docs/articles/fast-and-reliable-ranking-in-datastore"
keywords:
  - "transactionoptions"
  - "for"
  - "read"
  - "only"
  - "and"
  - "write"
  - "transactions"
  - "lets"
---

# TransactionOptions for read-only and read-write transactions

Product: Datastore
Coverage: LOW

## Step 02 Summary

TransactionOptions lets Datastore Data API clients choose read-only or read-write transaction behavior.

## Extended Definition

TransactionOptions lets Datastore Data API clients choose read-only or read-write transaction behavior.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/datastore/docs/concepts/cloud-datastore-transactions](https://docs.cloud.google.com/datastore/docs/concepts/cloud-datastore-transactions)
- [https://docs.cloud.google.com/datastore/docs/articles/balancing-strong-and-eventual-consistency-with-google-cloud-datastore](https://docs.cloud.google.com/datastore/docs/articles/balancing-strong-and-eventual-consistency-with-google-cloud-datastore)
- [https://docs.cloud.google.com/datastore/docs/articles/fast-and-reliable-ranking-in-datastore](https://docs.cloud.google.com/datastore/docs/articles/fast-and-reliable-ranking-in-datastore)

## Supporting Pages

### Cloud Datastore Transactions \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastore/docs/concepts/cloud-datastore-transactions](https://docs.cloud.google.com/datastore/docs/concepts/cloud-datastore-transactions)
- Source ID: `site-iam-reference`
- Final score: 158
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Entity taskList ; QueryResults<Entity> tasks ; Transaction txn = datastore . newTransaction ( TransactionOptions . newBuilder (). setReadOnly ( ReadOnly . newBuilder (). build ()). build ()); try { taskList = txn . get ( taskListKey ); Query<Entity> query = Query . newEntityQueryBuilder () . setKind ( "Task" ) . setFilter ( PropertyFilter . hasAncestor ( taskListKey )) . build (); tasks = txn . run ( query ); txn . commit (); } finally { if ( txn . isActive ()) { txn . rollback (); } } Node.js To learn how to install and use the client library for Cloud Datastore, see Cloud Datastore client libraries .
- For more information, see Set up authentication for a local development environment . task list name = "default" task list key = datastore . key "TaskList" , task list name datastore . read only transaction do tx task list = tx . find task list key query = datastore . query ( "Task" ) . ancestor ( task list ) tasks in list = tx . run query end Transactions and entity groups An entity group is a set of entities connected through ancestry to a common root element.
- These kinds of transactions are often called read-only transactions, since they perform no writes.
- For more information, see Set up authentication for a local development environment . async function getTaskListEntities () { const transaction = datastore . transaction ({ readOnly : true }); try { const taskListKey = datastore . key ([ 'TaskList' , 'default' ]); await transaction . run (); const [ taskList ] = await transaction . get ( taskListKey ); const query = datastore . createQuery ( 'Task' ). hasAncestor ( taskListKey ); const [ taskListEntities ] = await transaction . runQuery ( query ); await transaction . commit (); return [ taskList , taskListEntities ]; } catch ( err ) { await transaction . rollback (); } } PHP To learn how to install and use the client library for Cloud Datastore, see Cloud Datastore client libraries .

### "Balancing Strong and Eventual Consistency with Datastore \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/datastore/docs/articles/balancing-strong-and-eventual-consistency-with-google-cloud-datastore](https://docs.cloud.google.com/datastore/docs/articles/balancing-strong-and-eventual-consistency-with-google-cloud-datastore)
- Source ID: `site-iam-reference`
- Final score: 154
- Re-rank relevance: N/A

Evidence snippets:
- Strong Consistency on Reading Entity Values and Indexes In Datastore, there are only two APIs that provide a strongly consistent view for reading entity values and indexes: (1) the lookup by key method and (2) the ancestor query.
- For query requests, read the list of Player entities from Memcache and execute a keys-only query on Datastore when the list is not present in Memcache.
- Additional Resources The following resources provide more information about the topics discussed in this document: Google App Engine: Storing Data Datastore Overview Google Cloud Platform Blog Cloud SQL Using Python App Engine with Cloud SQL Bigtable: A Distributed Storage System for Structured Data App Engine 1.5.2 SDK Released Megastore: Providing Scalable, Highly Available Storage for Interactive Services [1] An entity group can even be formed by specifying only one key of the root or parent entity, without storing the actual entities for the root or parent, because the entity group functions are all implemented based on relationships between keys. [2] The supported limit is one update per second per entity group outside transactions, or one transaction per second per entity group.
- Datastore API Read of entity value Read of index Global Query Eventual consistency Eventual consistency Keys-only Global Query N/A Eventual consistency Ancestor Query Strong consistency Strong consistency Lookup by key (get()) Strong consistency N/A Table 1: Datastore queries/get calls and possible consistency behaviors Datastore queries without an ancestor are known as global queries and are designed to work with an eventual consistency model.

### Fast and Reliable Ranking in Google Datastore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastore/docs/articles/fast-and-reliable-ranking-in-datastore](https://docs.cloud.google.com/datastore/docs/articles/fast-and-reliable-ranking-in-datastore)
- Source ID: `site-iam-reference`
- Final score: 130
- Re-rank relevance: N/A

Evidence snippets:
- To determine the rank for a player who has a score of 30, the library only needs to read four entities —the nodes circled by the dashed line in the diagram—to add up the number of players who have a score higher than 30.
- The transaction may be open for a second or more, but because there is a single thread driving the library and Datastore, there is no contention and no concurrent modification problem.
- Because there is only one thread and only one transaction open on the entity group, there are no transaction failures due to concurrent updates.
- More Scalable Solutions with Approximate Approaches If your application requires scalability more than accuracy of ranks, and can tolerate a certain level of inaccuracy or approximation, you could choose stochastic approaches such as: Buckets with Global Query Lossy Counting Method Frugal Streaming These approximate approaches are all variants of one idea: How do you compress the storage for ranking information by allowing a certain degradation of the ranking accuracy?

