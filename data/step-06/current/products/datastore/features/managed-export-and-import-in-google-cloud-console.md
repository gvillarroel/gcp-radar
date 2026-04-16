---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:14:02.793Z"
product_name: "Datastore"
product_slug: "datastore"
feature_name: "Managed export and import in Google Cloud Console"
feature_slug: "managed-export-and-import-in-google-cloud-console"
latest_feature_date: "2019-11-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/datastore/docs/export-import-entities"
  - "https://docs.cloud.google.com/datastore/docs/console/datastore-admin-console"
  - "https://docs.cloud.google.com/datastore/docs/datastore-api-tutorial"
  - "https://docs.cloud.google.com/datastore/docs/cmek"
keywords:
  - "managed"
  - "export"
  - "and"
  - "import"
  - "in"
  - "console"
  - "the"
  - "can"
---

# Managed export and import in Google Cloud Console

Product: Datastore
Coverage: MEDIUM

## Step 02 Summary

The Google Cloud Console can start managed Datastore export and import operations.

## Extended Definition

The Google Cloud Console can start managed Datastore export and import operations.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/datastore/docs/export-import-entities](https://docs.cloud.google.com/datastore/docs/export-import-entities)
- [https://docs.cloud.google.com/datastore/docs/console/datastore-admin-console](https://docs.cloud.google.com/datastore/docs/console/datastore-admin-console)
- [https://docs.cloud.google.com/datastore/docs/datastore-api-tutorial](https://docs.cloud.google.com/datastore/docs/datastore-api-tutorial)
- [https://docs.cloud.google.com/datastore/docs/cmek](https://docs.cloud.google.com/datastore/docs/cmek)

## Supporting Pages

### Exporting and Importing Entities \_|\_ Datastore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastore/docs/export-import-entities](https://docs.cloud.google.com/datastore/docs/export-import-entities)
- Source ID: `site-docs-root`
- Final score: 326
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example, a recently completed export operation shows the following information: { "operations": [ { "name": "projects/ project-id /operations/ASAyMDAwOTEzBxp0bHVhZmVkBxJsYXJ0bmVjc3Utc2Jvai1uaW1kYRQKKhI", "metadata": { "@type": "type.googleapis.com/google.datastore.admin.v1.ExportEntitiesMetadata", "common": { "startTime": "2017-12-05T23:01:39.583780Z", "endTime": "2017-12-05T23:54:58.474750Z", "operationType": "EXPORT ENTITIES" }, "progressEntities": { "workCompleted": "21933027", "workEstimated": "21898182" }, "progressBytes": { "workCompleted": "12421451292", "workEstimated": "9759724245" }, "entityFilter": { "namespaceIds": [ "" ] }, "outputUrlPrefix": "gs:// bucket-name " }, "done": true, "response": { "@type": "type.googleapis.com/google.datastore.admin.v1.ExportEntitiesResponse", "outputUrl": "gs:// bucket-name /2017-05-25T23:54:39 76544/2017-05-25T23:54:39 76544.overall export metadata" } } ] } Check operation status To view the status of a long-running operation: Console You can view a list of the most recent export and import operations in the Import/Export page of the Google Cloud console.
- Export operations For export operations involving a bucket in another project, modify the permissions of the bucket to assign one of the following Identity and Access Management roles to the Datastore mode service agent of the project that contains your Datastore mode database: Storage Admin Owner (basic role) You can also create an IAM custom role with slightly different permissions than the ones contained in the roles listed earlier: storage.buckets.get storage.objects.create storage.objects.delete storage.objects.list Import operations For import operations involving a Cloud Storage bucket in another project, modify the permissions of the bucket to assign one of the following Cloud Storage roles to the Datastore mode service agent of the project that contains your Datastore mode database: Storage Admin Both Storage Object Viewer and Storage Legacy Bucket Reader You can also create an IAM custom role with the following permissions: storage.buckets.get storage.objects.get Starting managed export and import operations This section describes how to start a managed export or import operation.
- Locating your overall export metadata file You can determine the value to use for the import location by using the Cloud Storage browser in the Google Cloud console: Open the Cloud Storage Browser You can also list and describe completed operations .
- For example, you can decode a metadata file to determine the namespace and kinds the export files contain: protoc --decode raw < export0.export metadata Importing all entities Console In the Google Cloud console, go to the Databases page.

### Datastore Admin \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastore/docs/console/datastore-admin-console](https://docs.cloud.google.com/datastore/docs/console/datastore-admin-console)
- Source ID: `site-docs-root`
- Final score: 254
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Datastore Admin was replaced by more reliable alternatives: The backup feature was replaced by managed exports and imports .
- You should use the managed export and import service instead.
- You should use the managed export and import service instead.
- Database access permissions By default, Datastore Admin can access a Datastore database in the same project and does not require Identity and Access Management permissions for Datastore.

### "Getting started with the Firestore in Datastore mode API \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/datastore/docs/datastore-api-tutorial](https://docs.cloud.google.com/datastore/docs/datastore-api-tutorial)
- Source ID: `site-iam-reference`
- Final score: 235
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see Set up authentication for a local development environment . async function markDone ( taskId ) { const transaction = datastore . transaction (); const taskKey = datastore . key ([ 'Task' , datastore . int ( taskId )]); try { await transaction . run (); const [ task ] = await transaction . get ( taskKey ); task . done = true ; transaction . save ({ key : taskKey , data : task , }); await transaction . commit (); console . log ( Task ${ taskId } updated successfully. ); } catch ( err ) { await transaction . rollback (); } } PHP To learn how to install and use the client library for Cloud Datastore, see Cloud Datastore client libraries .
- For more information, see Set up authentication for a local development environment . async function addTask ( description ) { const taskKey = datastore . key ( 'Task' ); const entity = { key : taskKey , data : [ { name : 'created' , value : new Date (). toJSON (), }, { name : 'description' , value : description , excludeFromIndexes : true , }, { name : 'done' , value : false , }, ], }; try { await datastore . save ( entity ); console . log ( Task ${ taskKey . id } created successfully. ); } catch ( err ) { console . error ( 'ERROR:' , err ); } } PHP To learn how to install and use the client library for Cloud Datastore, see Cloud Datastore client libraries .
- Extract the download: unzip master . zip Change directories to the TaskList application: cd google - cloud - ruby - master / google - cloud - datastore / samples Install the dependencies: bundle install At a command prompt, run the following, where <project-id> is the ID of your Google Cloud project. export GOOGLE CLOUD PROJECT = < project - id > (Windows users: use set instead of export .) Run the application! bundle exec ruby tasks . rb Creating an Authorized Service Object In order to make authenticated requests to Google Cloud APIs using the Google APIs Client libraries, you must: Fetch the credential to use for requests.
- Go Clone the TaskList sample application. go get github . com / GoogleCloudPlatform / golang - samples / datastore / tasks Change directories to where you cloned the sample: cd $ GOPATH / src / github . com / GoogleCloudPlatform / golang - samples / datastore / tasks At a command prompt, run the following, where <project-id> is the ID of your Google Cloud project. export DATASTORE PROJECT ID = < project - id > (Windows users: use set instead of export .) Run the application! go run tasks . go Java Ensure you have Maven and Java (version 8 or later) installed.

### "Customer-managed encryption keys (CMEK) \_|\_ Datastore \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/datastore/docs/cmek](https://docs.cloud.google.com/datastore/docs/cmek)
- Source ID: `site-iam-reference`
- Final score: 218
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If the database has long-running operations in progress, they will be affected as follows: Data import or export operations will stop making progress, and be marked as Failed .
- To migrate data in an existing non-CMEK database to a CMEK-protected database, export your data and then import data to a new CMEK-protected database.
- Data from a CMEK-protected database can be moved to a non-CMEK database by using Backup and Restore , Clone , or Import and Export .
- CMEK and key availability When keys are unavailable or disabled, be aware of the following behaviors that can occur in CMEK-enabled databases: You can change Datastore mode point-in-time recovery (PITR) settings on a CMEK-enabled database even if the key is unavailable because PITR settings are database metadata, which isn't encrypted by CMEK.

