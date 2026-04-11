---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T08:14:41.862Z"
product_name: "Datastore"
product_slug: "datastore"
feature_name: "Entity editing in Google Cloud console"
feature_slug: "entity-editing-in-google-cloud-console"
latest_feature_date: "2022-09-30"
deprecation_date: "2022-09-30"
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/datastore/docs/console/managing-datastore"
  - "https://docs.cloud.google.com/datastore/docs/console/datastore-statistics"
  - "https://docs.cloud.google.com/datastore/docs/datastore-api-tutorial"
keywords:
  - "entity"
  - "editing"
  - "in"
  - "console"
  - "the"
  - "provides"
  - "pages"
  - "for"
---

# Entity editing in Google Cloud console

Product: Datastore
Coverage: LOW

## Step 02 Summary

The Google Cloud console provides pages for editing an entity; deprecated on 2022-09-30.

## Extended Definition

The Google Cloud console provides pages for editing an entity; deprecated on 2022-09-30.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/datastore/docs/console/managing-datastore](https://docs.cloud.google.com/datastore/docs/console/managing-datastore)
- [https://docs.cloud.google.com/datastore/docs/console/datastore-statistics](https://docs.cloud.google.com/datastore/docs/console/datastore-statistics)
- [https://docs.cloud.google.com/datastore/docs/datastore-api-tutorial](https://docs.cloud.google.com/datastore/docs/datastore-api-tutorial)

## Supporting Pages

### "Managing Firestore in Datastore mode from the Console \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/datastore/docs/console/managing-datastore](https://docs.cloud.google.com/datastore/docs/console/managing-datastore)
- Source ID: `site-docs-root`
- Final score: 166
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Note: While individual entities are removed almost immediately, a namespace container may remain visible for several days to a week after the final entity within it is removed.
- The dashboard should look like: For more information about the statistics on this page, see Viewing Statistics in the Console .
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
- Home Documentation Databases Datastore Guides Send feedback Managing Firestore in Datastore mode from the Console Stay organized with collections Save and categorize content based on your preferences.

### Viewing Statistics in the Console \_|\_ Datastore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastore/docs/console/datastore-statistics](https://docs.cloud.google.com/datastore/docs/console/datastore-statistics)
- Source ID: `site-docs-root`
- Final score: 160
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Note: While Datastore removes individual entities almost immediately, a namespace container may remain visible for several days to a week after the final entity within it is removed.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
- Home Documentation Databases Datastore Guides Send feedback Viewing Statistics in the Console Stay organized with collections Save and categorize content based on your preferences.
- The space consumed by the statistics data increases in proportion to the number of different entity kinds and property types used by your application.

### "Getting started with the Firestore in Datastore mode API \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/datastore/docs/datastore-api-tutorial](https://docs.cloud.google.com/datastore/docs/datastore-api-tutorial)
- Source ID: `site-iam-reference`
- Final score: 156
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see Set up authentication for a local development environment . async function addTask ( description ) { const taskKey = datastore . key ( 'Task' ); const entity = { key : taskKey , data : [ { name : 'created' , value : new Date (). toJSON (), }, { name : 'description' , value : description , excludeFromIndexes : true , }, { name : 'done' , value : false , }, ], }; try { await datastore . save ( entity ); console . log ( Task ${ taskKey . id } created successfully. ); } catch ( err ) { console . error ( 'ERROR:' , err ); } } PHP To learn how to install and use the client library for Cloud Datastore, see Cloud Datastore client libraries .
- For more information, see Set up authentication for a local development environment . / Marks a task entity as done. @param id The ID of the task entity as given by {@link Key#id()} @return true if the task was found, false if not @throws DatastoreException if the transaction fails / boolean markDone ( long id ) { Transaction transaction = datastore . newTransaction (); try { Entity task = transaction . get ( keyFactory . newKey ( id )); if ( task != null ) { transaction . put ( Entity . newBuilder ( task ). set ( "done" , true ). build ()); } transaction . commit (); return task != null ; } finally { if ( transaction . isActive ()) { transaction . rollback (); } } } Node.js To learn how to install and use the client library for Cloud Datastore, see Cloud Datastore client libraries .
- For more information, see Set up authentication for a local development environment . / Adds a task entity to the Datastore. @param description The task description @return The {@link Key} of the entity @throws DatastoreException if the ID allocation or put fails / Key addTask ( String description ) { Key key = datastore . allocateId ( keyFactory . newKey ()); Entity task = Entity . newBuilder ( key ) . set ( "description" , StringValue . newBuilder ( description ). setExcludeFromIndexes ( true ). build ()) . set ( "created" , Timestamp . now ()) . set ( "done" , false ) . build (); datastore . put ( task ); return key ; } Node.js To learn how to install and use the client library for Cloud Datastore, see Cloud Datastore client libraries .
- For more information, see Set up authentication for a local development environment . async function markDone ( taskId ) { const transaction = datastore . transaction (); const taskKey = datastore . key ([ 'Task' , datastore . int ( taskId )]); try { await transaction . run (); const [ task ] = await transaction . get ( taskKey ); task . done = true ; transaction . save ({ key : taskKey , data : task , }); await transaction . commit (); console . log ( Task ${ taskId } updated successfully. ); } catch ( err ) { await transaction . rollback (); } } PHP To learn how to install and use the client library for Cloud Datastore, see Cloud Datastore client libraries .

