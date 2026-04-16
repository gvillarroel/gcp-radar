---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:14:02.767Z"
product_name: "Datastore"
product_slug: "datastore"
feature_name: "Active Assist reliability recommendations"
feature_slug: "active-assist-reliability-recommendations"
latest_feature_date: "2024-11-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/datastore/docs/articles/balancing-strong-and-eventual-consistency-with-google-cloud-datastore"
  - "https://docs.cloud.google.com/datastore/docs/store-query-data"
  - "https://docs.cloud.google.com/datastore/docs/tools/datastore-emulator"
  - "https://docs.cloud.google.com/datastore/docs/datastore-api-tutorial"
keywords:
  - "active"
  - "assist"
  - "reliability"
  - "recommendations"
  - "provides"
  - "and"
  - "insights"
  - "to"
---

# Active Assist reliability recommendations

Product: Datastore
Coverage: MEDIUM

## Step 02 Summary

Active Assist provides recommendations and insights to improve database reliability.

## Extended Definition

Active Assist provides recommendations and insights to improve database reliability.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/datastore/docs/articles/balancing-strong-and-eventual-consistency-with-google-cloud-datastore](https://docs.cloud.google.com/datastore/docs/articles/balancing-strong-and-eventual-consistency-with-google-cloud-datastore)
- [https://docs.cloud.google.com/datastore/docs/store-query-data](https://docs.cloud.google.com/datastore/docs/store-query-data)
- [https://docs.cloud.google.com/datastore/docs/tools/datastore-emulator](https://docs.cloud.google.com/datastore/docs/tools/datastore-emulator)
- [https://docs.cloud.google.com/datastore/docs/datastore-api-tutorial](https://docs.cloud.google.com/datastore/docs/datastore-api-tutorial)

## Supporting Pages

### "Balancing Strong and Eventual Consistency with Datastore \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/datastore/docs/articles/balancing-strong-and-eventual-consistency-with-google-cloud-datastore](https://docs.cloud.google.com/datastore/docs/articles/balancing-strong-and-eventual-consistency-with-google-cloud-datastore)
- Source ID: `site-iam-reference`
- Final score: 148
- Re-rank relevance: N/A

Evidence snippets:
- Datastore also provides a number of features that relational databases are not optimally suited to provide, including high-performance at a very large scale and high-reliability.
- Transactionality By demarcating a transaction programmatically, the entity group provides ACID (atomicity, consistency, isolation, and durability) characteristics in the transaction.
- It provides a simplified way for developers to store and access data.
- Additional Resources The following resources provide more information about the topics discussed in this document: Google App Engine: Storing Data Datastore Overview Google Cloud Platform Blog Cloud SQL Using Python App Engine with Cloud SQL Bigtable: A Distributed Storage System for Structured Data App Engine 1.5.2 SDK Released Megastore: Providing Scalable, Highly Available Storage for Interactive Services [1] An entity group can even be formed by specifying only one key of the root or parent entity, without storing the actual entities for the root or parent, because the entity group functions are all implemented based on relationships between keys. [2] The supported limit is one update per second per entity group outside transactions, or one transaction per second per entity group.

### "Quickstart: Store and query data in Firestore in Datastore mode \_|\_ Google\

- URL: [https://docs.cloud.google.com/datastore/docs/store-query-data](https://docs.cloud.google.com/datastore/docs/store-query-data)
- Source ID: `site-docs-root`
- Final score: 141
- Re-rank relevance: N/A

Evidence snippets:
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
- Under Properties , use the Add property button to add these properties: Name Type Value Indexed description String Learn about Datastore. created Date and time (today's date) ✓ done Boolean False ✓ Your creation page should now look like this: Click Create .
- Store and query data in Firestore in Datastore mode This page shows you how to store and query data in Firestore in Datastore mode using the Google Cloud console.
- Home Documentation Databases Datastore Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.

### Running the Datastore Emulator \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastore/docs/tools/datastore-emulator](https://docs.cloud.google.com/datastore/docs/tools/datastore-emulator)
- Source ID: `site-docs-root`
- Final score: 138
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Automatically removing the variables If your application and the emulator run on the same machine, you can remove the environment variables automatically: Linux / macOS Run env-unset using command substitution: $(gcloud beta emulators datastore env-unset) Windows Create and run a batch file using output from env-unset : gcloud beta emulators datastore env - unset > remove vars . cmd && remove vars . cmd Your application will now connect to your production Datastore mode database.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
- Automatically setting the variables If your application and the emulator run on the same machine, you can set the environment variables automatically: Linux / macOS Run env-init using command substitution: $(gcloud beta emulators datastore env-init) Windows Create and run a batch file using output from env-init : gcloud beta emulators datastore env - init > set vars . cmd && set vars . cmd Your application will now connect to the Datastore emulator.
- Manually setting the variables If your application and the emulator run on different machines, set the environment variables manually: Run the env-init command: gcloud beta emulators datastore env-init On the machine that runs your application, set the environment variables and values as directed by the output of the env-init command.

### "Getting started with the Firestore in Datastore mode API \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/datastore/docs/datastore-api-tutorial](https://docs.cloud.google.com/datastore/docs/datastore-api-tutorial)
- Source ID: `site-iam-reference`
- Final score: 133
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see Set up authentication for a local development environment . / Marks a task entity as done. @param id The ID of the task entity as given by {@link Key#id()} @return true if the task was found, false if not @throws DatastoreException if the transaction fails / boolean markDone ( long id ) { Transaction transaction = datastore . newTransaction (); try { Entity task = transaction . get ( keyFactory . newKey ( id )); if ( task != null ) { transaction . put ( Entity . newBuilder ( task ). set ( "done" , true ). build ()); } transaction . commit (); return task != null ; } finally { if ( transaction . isActive ()) { transaction . rollback (); } } } Node.js To learn how to install and use the client library for Cloud Datastore, see Cloud Datastore client libraries .
- This project provides authentication credentials you use in your application to identify it to Google and authorize its use of the Datastore mode API.
- This page provides a short exercise in building a command-line TaskList application with the Firestore in Datastore mode API.
- For more information, see Set up authentication for a local development environment . / Adds a task entity to the Datastore. @param description The task description @return The {@link Key} of the entity @throws DatastoreException if the ID allocation or put fails / Key addTask ( String description ) { Key key = datastore . allocateId ( keyFactory . newKey ()); Entity task = Entity . newBuilder ( key ) . set ( "description" , StringValue . newBuilder ( description ). setExcludeFromIndexes ( true ). build ()) . set ( "created" , Timestamp . now ()) . set ( "done" , false ) . build (); datastore . put ( task ); return key ; } Node.js To learn how to install and use the client library for Cloud Datastore, see Cloud Datastore client libraries .

