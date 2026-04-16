---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:14:02.796Z"
product_name: "Datastore"
product_slug: "datastore"
feature_name: "Transaction retry with previousTransaction"
feature_slug: "transaction-retry-with-previoustransaction"
latest_feature_date: "2018-01-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/datastore/docs/concepts/cloud-datastore-transactions"
  - "https://docs.cloud.google.com/datastore/docs/datastore-api-tutorial"
  - "https://docs.cloud.google.com/python/docs/reference/datastore/latest/client"
  - "https://docs.cloud.google.com/datastore/docs/articles/balancing-strong-and-eventual-consistency-with-google-cloud-datastore"
keywords:
  - "transaction"
  - "retry"
  - "with"
  - "previoustransaction"
  - "the"
  - "datastore"
  - "api"
  - "supports"
---

# Transaction retry with previousTransaction

Product: Datastore
Coverage: MEDIUM

## Step 02 Summary

The Datastore Data API supports specifying previousTransaction when retrying a read-write transaction.

## Extended Definition

The Datastore Data API supports specifying previousTransaction when retrying a read-write transaction.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/datastore/docs/concepts/cloud-datastore-transactions](https://docs.cloud.google.com/datastore/docs/concepts/cloud-datastore-transactions)
- [https://docs.cloud.google.com/datastore/docs/datastore-api-tutorial](https://docs.cloud.google.com/datastore/docs/datastore-api-tutorial)
- [https://docs.cloud.google.com/python/docs/reference/datastore/latest/client](https://docs.cloud.google.com/python/docs/reference/datastore/latest/client)
- [https://docs.cloud.google.com/datastore/docs/articles/balancing-strong-and-eventual-consistency-with-google-cloud-datastore](https://docs.cloud.google.com/datastore/docs/articles/balancing-strong-and-eventual-consistency-with-google-cloud-datastore)

## Supporting Pages

### Cloud Datastore Transactions \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastore/docs/concepts/cloud-datastore-transactions](https://docs.cloud.google.com/datastore/docs/concepts/cloud-datastore-transactions)
- Source ID: `site-iam-reference`
- Final score: 231
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The Datastore API does not automatically retry transactions, but you can add your own logic to retry them, for instance to handle conflicts when another request updates the same entity at the same time.
- For more information, see Set up authentication for a local development environment . async function transferFundsWithRetry () { const maxTries = 5 ; async function tryRequest ( currentAttempt , delay ) { try { await transferFunds ( fromKey , toKey , 10 ); } catch ( err ) { if ( currentAttempt < = maxTries ) { // Use exponential backoff setTimeout ( async () = > { await tryRequest ( currentAttempt + 1 , delay 2 ); }, delay ); } throw err ; } } await tryRequest ( 1 , 100 ); } PHP To learn how to install and use the client library for Cloud Datastore, see Cloud Datastore client libraries .
- For more information, see Set up authentication for a local development environment . task = nil datastore . transaction do tx task = tx . find task key if task . nil? task = datastore . entity task key do t t [ "category" ] = "Personal" t [ "done" ] = false t [ "priority" ] = 4 t [ "description" ] = "Learn Cloud Datastore" end tx . save task end end As before, a transaction is necessary to handle the case where another user is attempting to create or update an entity with the same string ID.
- Client () def transfer funds ( client , from key , to key , amount ): with client . transaction (): from account = client . get ( from key ) to account = client . get ( to key ) from account [ "balance" ] -= amount to account [ "balance" ] += amount client . put multi ([ from account , to account ]) Ruby To learn how to install and use the client library for Cloud Datastore, see Cloud Datastore client libraries .

### "Getting started with the Firestore in Datastore mode API \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/datastore/docs/datastore-api-tutorial](https://docs.cloud.google.com/datastore/docs/datastore-api-tutorial)
- Source ID: `site-iam-reference`
- Final score: 228
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see Set up authentication for a local development environment . use Google\Cloud\Datastore\DatastoreClient; / Mark a task with a given id as done. @param string $projectId The Google Cloud project ID. @param string $taskId / function mark done(string $projectId, string $taskId) { $datastore = new DatastoreClient(['projectId' => $projectId]); $taskKey = $datastore->key('Task', $taskId); $transaction = $datastore->transaction(); $task = $transaction->lookup($taskKey); $task['done'] = true; $transaction->upsert($task); $transaction->commit(); printf('Task %d updated successfully.' .
- Client , task id : str int ): with client . transaction (): Create a key for an entity of kind "Task", and with the supplied task id as its Id key = client . key ( "Task" , task id ) Use that key to load the entity task = client . get ( key ) if not task : raise ValueError ( f "Task { task id } does not exist." ) Update a field indicating that the associated work has been completed task [ "done" ] = True Persist the change back to Datastore client . put ( task ) Ruby To learn how to install and use the client library for Cloud Datastore, see Cloud Datastore client libraries .
- Home Documentation Databases Datastore Guides Send feedback Getting started with the Firestore in Datastore mode API Stay organized with collections Save and categorize content based on your preferences.
- Follow these instructions to create a project, enable the Datastore mode API for it, and set up your local development environment with authentication credentials using the gcloud auth login command.

### Datastore Client \_|\_ Python client libraries \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/python/docs/reference/datastore/latest/client](https://docs.cloud.google.com/python/docs/reference/datastore/latest/client)
- Source ID: `site-python-reference`
- Final score: 193
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Only meaningful outside of another batch / transaction. entity(key=None, exclude from indexes=()) Proxy to google.cloud.datastore.entity.Entity . get(key, missing=None, deferred=None, transaction=None, eventual=False, retry=None, timeout=None, read time=None) Retrieve an entity from a single key (if it exists).
- Raises ValueError if more than one of eventual==True , transaction , and read time is specified. get multi(keys, missing=None, deferred=None, transaction=None, eventual=False, retry=None, timeout=None, read time=None) Retrieve entities, along with their attributes.
- Raises ValueError if incomplete key is not a partial key. property base url() Getter for API base URL. batch() Proxy to google.cloud.datastore.batch.Batch . property current batch() Currently-active batch, if within the scope of a Batch context manager.
- Parameters incomplete key ( google.cloud.datastore.key.Key ) – Partial key to use as base for allocated IDs. num ids ( int ) – The number of IDs to allocate. retry ( google.api core.retry.Retry ) – A retry object used to retry requests.

### "Balancing Strong and Eventual Consistency with Datastore \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/datastore/docs/articles/balancing-strong-and-eventual-consistency-with-google-cloud-datastore](https://docs.cloud.google.com/datastore/docs/articles/balancing-strong-and-eventual-consistency-with-google-cloud-datastore)
- Source ID: `site-iam-reference`
- Final score: 190
- Re-rank relevance: N/A

Evidence snippets:
- Additional Resources The following resources provide more information about the topics discussed in this document: Google App Engine: Storing Data Datastore Overview Google Cloud Platform Blog Cloud SQL Using Python App Engine with Cloud SQL Bigtable: A Distributed Storage System for Structured Data App Engine 1.5.2 SDK Released Megastore: Providing Scalable, Highly Available Storage for Interactive Services [1] An entity group can even be formed by specifying only one key of the root or parent entity, without storing the actual entities for the root or parent, because the entity group functions are all implemented based on relationships between keys. [2] The supported limit is one update per second per entity group outside transactions, or one transaction per second per entity group.
- Datastore API Read of entity value Read of index Global Query Eventual consistency Eventual consistency Keys-only Global Query N/A Eventual consistency Ancestor Query Strong consistency Strong consistency Lookup by key (get()) Strong consistency N/A Table 1: Datastore queries/get calls and possible consistency behaviors Datastore queries without an ancestor are known as global queries and are designed to work with an eventual consistency model.
- Strong Consistency on Reading Entity Values and Indexes In Datastore, there are only two APIs that provide a strongly consistent view for reading entity values and indexes: (1) the lookup by key method and (2) the ancestor query.
- Anti-Pattern #1: Sequential Numbering of Entity Keys Before the release of App Engine SDK 1.8.1, Datastore used a sequence of small integer IDs with generally consecutive patterns as the default auto-generated key names.

