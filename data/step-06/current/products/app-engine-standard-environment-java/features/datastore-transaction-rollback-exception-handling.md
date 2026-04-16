---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T06:50:21.264Z"
product_name: "App Engine standard environment Java"
product_slug: "app-engine-standard-environment-java"
feature_name: "Datastore Transaction.rollback exception handling"
feature_slug: "datastore-transaction-rollback-exception-handling"
latest_feature_date: "2016-02-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/quotas"
  - "https://docs.cloud.google.com/appengine/docs/standard/java/javadoc/com/google/appengine/api/ThreadManager"
  - "https://docs.cloud.google.com/appengine/docs/standard/java/javadoc/com/google/appengine/api/search"
keywords:
  - "rollback"
  - "transaction"
  - "exception"
  - "handling"
  - "datastore"
  - "logs"
  - "level"
---

# Datastore Transaction.rollback exception handling

Product: App Engine standard environment Java
Coverage: MEDIUM

## Step 02 Summary

The low-level Datastore API logs an INFO message instead of throwing an exception when rollback follows a failed transaction operation.

## Extended Definition

The low-level Datastore API logs an INFO message instead of throwing an exception when rollback follows a failed transaction operation.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/quotas](https://docs.cloud.google.com/appengine/docs/quotas)
- [https://docs.cloud.google.com/appengine/docs/standard/java/javadoc/com/google/appengine/api/ThreadManager](https://docs.cloud.google.com/appengine/docs/standard/java/javadoc/com/google/appengine/api/ThreadManager)
- [https://docs.cloud.google.com/appengine/docs/standard/java/javadoc/com/google/appengine/api/search](https://docs.cloud.google.com/appengine/docs/standard/java/javadoc/com/google/appengine/api/search)

## Supporting Pages

### "Quotas and limits \_|\_ App Engine standard environment \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/quotas](https://docs.cloud.google.com/appengine/docs/quotas)
- Source ID: `site-docs-reference-4`
- Final score: 109
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The following limits apply to task queues according to their type: Push Queue Limits Maximum task size 100KB Queue execution rate 500 task invocations per second per queue Maximum countdown/ETA for a task 30 days from the current date and time Maximum number of tasks that can be added in a batch 100 tasks Maximum number of tasks that can be added in a transaction 5 tasks Default maximum number of task queues 100 queues.
- US/Europe Resource Cost Code & Static Data Storage - First 1 GB Free Code & Static Data Storage - Exceeding 1 GB 0.026/GB/month Asia (Japan) Resource Cost Code & Static Data Storage - First 1 GB Free Code & Static Data Storage - Exceeding 1 GB 0.023/GB/month"> Firestore in Datastore mode (Datastore) The Stored Data (billable) quota refers to all data stored for the application in Datastore and Blobstore.
- If you're expecting extremely high traffic levels, or for some reason your app requires particularly high quotas (for example, because of a significant product launch or large load tests), we recommend that you sign up for a support package .
- App Engine resets all resource measurements at the beginning of each calendar day (except for Stored Data, which always represents the amount of datastore storage in use).

### "appengine-apis overview (5.0.0) \_|\_ App Engine standard environment \_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java/javadoc/com/google/appengine/api/ThreadManager](https://docs.cloud.google.com/appengine/docs/standard/java/javadoc/com/google/appengine/api/ThreadManager)
- Source ID: `site-docs-reference-4`
- Final score: 93
- Re-rank relevance: N/A

Evidence snippets:
- If a query requires an index that cannot be found, a com.google.appengine.api.datastore.DatastoreNeedIndexException will be thrown at runtime.
- LESS THAN , today ); for ( Entity taskEntity : datastore . prepare ( query ). asIterable ()) { if ( "done" . equals ( taskEntity . getProperty ( "status" ))) { datastore . delete ( taskEntity ); } else { taskEntity . setProperty ( "status" , "overdue" ); datastore . put ( taskEntity ); } } This illustrates several basic points: The actual datastore itself is accessed through a com.google.appengine.api.datastore.DatastoreService object, produced from a com.google.appengine.api.datastore.DatastoreServiceFactory .
- A common pattern of usage is: // Get a handle on the datastore itself DatastoreService datastore = DatastoreServiceFactory . getDatastoreService (); // Lookup data by known key name Entity userEntity = datastore . get ( KeyFactory . createKey ( "UserInfo" , email )); // Or perform a query Query query = new Query ( "Task" ); query . addFilter ( "dueDate" , Query .
- If, for example, vendor X wanted to provide an alternate implementation of the DatastoreService, they would have to provide an implementation of com.google.appengine.api.datastore.IDatastoreServiceFactory that returns their implementation for com.google.appengine.api.datastore.DatastoreService .

### "appengine-apis overview (5.0.0) \_|\_ App Engine standard environment \_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java/javadoc/com/google/appengine/api/search](https://docs.cloud.google.com/appengine/docs/standard/java/javadoc/com/google/appengine/api/search)
- Source ID: `site-docs-reference-4`
- Final score: 89
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If a query requires an index that cannot be found, a com.google.appengine.api.datastore.DatastoreNeedIndexException will be thrown at runtime.
- LESS THAN , today ); for ( Entity taskEntity : datastore . prepare ( query ). asIterable ()) { if ( "done" . equals ( taskEntity . getProperty ( "status" ))) { datastore . delete ( taskEntity ); } else { taskEntity . setProperty ( "status" , "overdue" ); datastore . put ( taskEntity ); } } This illustrates several basic points: The actual datastore itself is accessed through a com.google.appengine.api.datastore.DatastoreService object, produced from a com.google.appengine.api.datastore.DatastoreServiceFactory .
- A common pattern of usage is: // Get a handle on the datastore itself DatastoreService datastore = DatastoreServiceFactory . getDatastoreService (); // Lookup data by known key name Entity userEntity = datastore . get ( KeyFactory . createKey ( "UserInfo" , email )); // Or perform a query Query query = new Query ( "Task" ); query . addFilter ( "dueDate" , Query .
- If, for example, vendor X wanted to provide an alternate implementation of the DatastoreService, they would have to provide an implementation of com.google.appengine.api.datastore.IDatastoreServiceFactory that returns their implementation for com.google.appengine.api.datastore.DatastoreService .

