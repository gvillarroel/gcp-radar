---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:14:02.783Z"
product_name: "Datastore"
product_slug: "datastore"
feature_name: "Entity editing in Google Cloud console"
feature_slug: "entity-editing-in-google-cloud-console"
latest_feature_date: "2022-09-30"
deprecation_date: "2022-09-30"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/datastore/docs/console/managing-datastore"
  - "https://docs.cloud.google.com/datastore/docs/console/datastore-statistics"
  - "https://docs.cloud.google.com/datastore/docs/datastore-api-tutorial"
  - "https://docs.cloud.google.com/datastore/docs/export-import-entities"
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
Coverage: MEDIUM

## Step 02 Summary

The Google Cloud console provides pages for editing an entity; deprecated on 2022-09-30.

## Extended Definition

The Google Cloud console provides pages for editing an entity; deprecated on 2022-09-30.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/datastore/docs/console/managing-datastore](https://docs.cloud.google.com/datastore/docs/console/managing-datastore)
- [https://docs.cloud.google.com/datastore/docs/console/datastore-statistics](https://docs.cloud.google.com/datastore/docs/console/datastore-statistics)
- [https://docs.cloud.google.com/datastore/docs/datastore-api-tutorial](https://docs.cloud.google.com/datastore/docs/datastore-api-tutorial)
- [https://docs.cloud.google.com/datastore/docs/export-import-entities](https://docs.cloud.google.com/datastore/docs/export-import-entities)

## Supporting Pages

### "Managing Firestore in Datastore mode from the Console \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/datastore/docs/console/managing-datastore](https://docs.cloud.google.com/datastore/docs/console/managing-datastore)
- Source ID: `site-docs-root`
- Final score: 221
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Note: While individual entities are removed almost immediately, a namespace container may remain visible for several days to a week after the final entity within it is removed.
- The dashboard should look like: For more information about the statistics on this page, see Viewing Statistics in the Console .
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
- Home Documentation Databases Datastore Guides Send feedback Managing Firestore in Datastore mode from the Console Stay organized with collections Save and categorize content based on your preferences.

### Viewing Statistics in the Console \_|\_ Datastore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastore/docs/console/datastore-statistics](https://docs.cloud.google.com/datastore/docs/console/datastore-statistics)
- Source ID: `site-docs-root`
- Final score: 215
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Note: While Datastore removes individual entities almost immediately, a namespace container may remain visible for several days to a week after the final entity within it is removed.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
- Home Documentation Databases Datastore Guides Send feedback Viewing Statistics in the Console Stay organized with collections Save and categorize content based on your preferences.
- The space consumed by the statistics data increases in proportion to the number of different entity kinds and property types used by your application.

### "Getting started with the Firestore in Datastore mode API \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/datastore/docs/datastore-api-tutorial](https://docs.cloud.google.com/datastore/docs/datastore-api-tutorial)
- Source ID: `site-iam-reference`
- Final score: 201
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see Set up authentication for a local development environment . async function addTask ( description ) { const taskKey = datastore . key ( 'Task' ); const entity = { key : taskKey , data : [ { name : 'created' , value : new Date (). toJSON (), }, { name : 'description' , value : description , excludeFromIndexes : true , }, { name : 'done' , value : false , }, ], }; try { await datastore . save ( entity ); console . log ( Task ${ taskKey . id } created successfully. ); } catch ( err ) { console . error ( 'ERROR:' , err ); } } PHP To learn how to install and use the client library for Cloud Datastore, see Cloud Datastore client libraries .
- For more information, see Set up authentication for a local development environment . / Marks a task entity as done. @param id The ID of the task entity as given by {@link Key#id()} @return true if the task was found, false if not @throws DatastoreException if the transaction fails / boolean markDone ( long id ) { Transaction transaction = datastore . newTransaction (); try { Entity task = transaction . get ( keyFactory . newKey ( id )); if ( task != null ) { transaction . put ( Entity . newBuilder ( task ). set ( "done" , true ). build ()); } transaction . commit (); return task != null ; } finally { if ( transaction . isActive ()) { transaction . rollback (); } } } Node.js To learn how to install and use the client library for Cloud Datastore, see Cloud Datastore client libraries .
- For more information, see Set up authentication for a local development environment . / Adds a task entity to the Datastore. @param description The task description @return The {@link Key} of the entity @throws DatastoreException if the ID allocation or put fails / Key addTask ( String description ) { Key key = datastore . allocateId ( keyFactory . newKey ()); Entity task = Entity . newBuilder ( key ) . set ( "description" , StringValue . newBuilder ( description ). setExcludeFromIndexes ( true ). build ()) . set ( "created" , Timestamp . now ()) . set ( "done" , false ) . build (); datastore . put ( task ); return key ; } Node.js To learn how to install and use the client library for Cloud Datastore, see Cloud Datastore client libraries .
- For more information, see Set up authentication for a local development environment . async function markDone ( taskId ) { const transaction = datastore . transaction (); const taskKey = datastore . key ([ 'Task' , datastore . int ( taskId )]); try { await transaction . run (); const [ task ] = await transaction . get ( taskKey ); task . done = true ; transaction . save ({ key : taskKey , data : task , }); await transaction . commit (); console . log ( Task ${ taskId } updated successfully. ); } catch ( err ) { await transaction . rollback (); } } PHP To learn how to install and use the client library for Cloud Datastore, see Cloud Datastore client libraries .

### Exporting and Importing Entities \_|\_ Datastore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastore/docs/export-import-entities](https://docs.cloud.google.com/datastore/docs/export-import-entities)
- Source ID: `site-docs-root`
- Final score: 185
- Re-rank relevance: N/A

Evidence snippets:
- For example, a recently completed export operation shows the following information: { "operations": [ { "name": "projects/ project-id /operations/ASAyMDAwOTEzBxp0bHVhZmVkBxJsYXJ0bmVjc3Utc2Jvai1uaW1kYRQKKhI", "metadata": { "@type": "type.googleapis.com/google.datastore.admin.v1.ExportEntitiesMetadata", "common": { "startTime": "2017-12-05T23:01:39.583780Z", "endTime": "2017-12-05T23:54:58.474750Z", "operationType": "EXPORT ENTITIES" }, "progressEntities": { "workCompleted": "21933027", "workEstimated": "21898182" }, "progressBytes": { "workCompleted": "12421451292", "workEstimated": "9759724245" }, "entityFilter": { "namespaceIds": [ "" ] }, "outputUrlPrefix": "gs:// bucket-name " }, "done": true, "response": { "@type": "type.googleapis.com/google.datastore.admin.v1.ExportEntitiesResponse", "outputUrl": "gs:// bucket-name /2017-05-25T23:54:39 76544/2017-05-25T23:54:39 76544.overall export metadata" } } ] } Check operation status To view the status of a long-running operation: Console You can view a list of the most recent export and import operations in the Import/Export page of the Google Cloud console.
- In the navigation menu, click Import/Export . gcloud To list long-running operations, use the gcloud datastore operations list command. gcloud datastore operations list For example, a recently completed export operation shows the following information: { "operations": [ { "name": "projects/ project-id /operations/ASAyMDAwOTEzBxp0bHVhZmVkBxJsYXJ0bmVjc3Utc2Jvai1uaW1kYRQKKhI", "metadata": { "@type": "type.googleapis.com/google.datastore.admin.v1.ExportEntitiesMetadata", "common": { "startTime": "2017-12-05T23:01:39.583780Z", "endTime": "2017-12-05T23:54:58.474750Z", "operationType": "EXPORT ENTITIES" }, "progressEntities": { "workCompleted": "21933027", "workEstimated": "21898182" }, "progressBytes": { "workCompleted": "12421451292", "workEstimated": "9759724245" }, "entityFilter": { "namespaceIds": [ "" ] }, "outputUrlPrefix": "gs:// bucket-name " }, "done": true, "response": { "@type": "type.googleapis.com/google.datastore.admin.v1.ExportEntitiesResponse", "outputUrl": "gs:// bucket-name /2017-05-25T23:54:39 76544/2017-05-25T23:54:39 76544.overall export metadata" } } ] } rest Before using any of the request data, make the following replacements: project-id : your project ID HTTP method and URL: GET https://datastore.googleapis.com/v1/projects/ project-id /operations To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://datastore.googleapis.com/v1/projects/ project-id /operations/ operation-name " Select-Object -Expand Content You should receive a JSON response similar to the following: { "name": "projects/ project-id /operations/ASA3ODAwMzQxNjIyChp0bHVhZmVkBxJsYXJ0bmVjc3Utc2Jvai1uaW1kYRQKLRI", "metadata": { "@type": "type.googleapis.com/google.datastore.admin.v1.ExportEntitiesMetadata", "common": { "startTime": "2019-10-08T20:07:28.105236Z", "endTime": "2019-10-08T20:07:36.310653Z", "operationType": "EXPORT ENTITIES", "state": "SUCCESSFUL" }, "progressEntities": { "workCompleted": "21", "workEstimated": "21" }, "progressBytes": { "workCompleted": "2272", "workEstimated": "2065" }, "entityFilter": {}, "outputUrlPrefix": "gs:// bucket-name /2019-10-08T20:07:28 28481" }, "done": true, "response": { "@type": "type.googleapis.com/google.datastore.admin.v1.ExportEntitiesResponse", "outputUrl": "gs:// bucket-name /2019-10-08T20:07:28 28481/2019-10-08T20:07:28 28481.overall export metadata" } } Estimating the completion time As your operation runs, see the value of the state field for the overall status of the operation.
- Export operations For export operations involving a bucket in another project, modify the permissions of the bucket to assign one of the following Identity and Access Management roles to the Datastore mode service agent of the project that contains your Datastore mode database: Storage Admin Owner (basic role) You can also create an IAM custom role with slightly different permissions than the ones contained in the roles listed earlier: storage.buckets.get storage.objects.create storage.objects.delete storage.objects.list Import operations For import operations involving a Cloud Storage bucket in another project, modify the permissions of the bucket to assign one of the following Cloud Storage roles to the Datastore mode service agent of the project that contains your Datastore mode database: Storage Admin Both Storage Object Viewer and Storage Legacy Bucket Reader You can also create an IAM custom role with the following permissions: storage.buckets.get storage.objects.get Starting managed export and import operations This section describes how to start a managed export or import operation.

