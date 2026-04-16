---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:14:02.788Z"
product_name: "Datastore"
product_slug: "datastore"
feature_name: "Import and export operation history in Google Cloud Console"
feature_slug: "import-and-export-operation-history-in-google-cloud-console"
latest_feature_date: "2021-05-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/datastore/docs/export-import-entities"
  - "https://docs.cloud.google.com/datastore/docs/console/datastore-admin-console"
  - "https://docs.cloud.google.com/datastore/docs/access/iam"
  - "https://docs.cloud.google.com/datastore/docs/datastore-api-tutorial"
keywords:
  - "import"
  - "and"
  - "export"
  - "operation"
  - "history"
  - "in"
  - "console"
  - "the"
---

# Import and export operation history in Google Cloud Console

Product: Datastore
Coverage: MEDIUM

## Step 02 Summary

The Google Cloud Console can display recent Datastore import and export operations.

## Extended Definition

The Google Cloud Console can display recent Datastore import and export operations.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/datastore/docs/export-import-entities](https://docs.cloud.google.com/datastore/docs/export-import-entities)
- [https://docs.cloud.google.com/datastore/docs/console/datastore-admin-console](https://docs.cloud.google.com/datastore/docs/console/datastore-admin-console)
- [https://docs.cloud.google.com/datastore/docs/access/iam](https://docs.cloud.google.com/datastore/docs/access/iam)
- [https://docs.cloud.google.com/datastore/docs/datastore-api-tutorial](https://docs.cloud.google.com/datastore/docs/datastore-api-tutorial)

## Supporting Pages

### Exporting and Importing Entities \_|\_ Datastore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastore/docs/export-import-entities](https://docs.cloud.google.com/datastore/docs/export-import-entities)
- Source ID: `site-docs-root`
- Final score: 302
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example, a recently completed export operation shows the following information: { "operations": [ { "name": "projects/ project-id /operations/ASAyMDAwOTEzBxp0bHVhZmVkBxJsYXJ0bmVjc3Utc2Jvai1uaW1kYRQKKhI", "metadata": { "@type": "type.googleapis.com/google.datastore.admin.v1.ExportEntitiesMetadata", "common": { "startTime": "2017-12-05T23:01:39.583780Z", "endTime": "2017-12-05T23:54:58.474750Z", "operationType": "EXPORT ENTITIES" }, "progressEntities": { "workCompleted": "21933027", "workEstimated": "21898182" }, "progressBytes": { "workCompleted": "12421451292", "workEstimated": "9759724245" }, "entityFilter": { "namespaceIds": [ "" ] }, "outputUrlPrefix": "gs:// bucket-name " }, "done": true, "response": { "@type": "type.googleapis.com/google.datastore.admin.v1.ExportEntitiesResponse", "outputUrl": "gs:// bucket-name /2017-05-25T23:54:39 76544/2017-05-25T23:54:39 76544.overall export metadata" } } ] } Check operation status To view the status of a long-running operation: Console You can view a list of the most recent export and import operations in the Import/Export page of the Google Cloud console.
- Locating your overall export metadata file You can determine the value to use for the import location by using the Cloud Storage browser in the Google Cloud console: Open the Cloud Storage Browser You can also list and describe completed operations .
- Set up gcloud for your project If you plan to use gcloud to start your import and export operations, set up gcloud and connect to your project in one of the following ways: Access gcloud from the Google Cloud console using Cloud Shell .
- View service agent name You can view the account that your import and export operations use to authorize requests from the Import/Export page in the Google Cloud console.

### Datastore Admin \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastore/docs/console/datastore-admin-console](https://docs.cloud.google.com/datastore/docs/console/datastore-admin-console)
- Source ID: `site-docs-root`
- Final score: 238
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Datastore Admin was replaced by more reliable alternatives: The backup feature was replaced by managed exports and imports .
- You should use the managed export and import service instead.
- You should use the managed export and import service instead.
- Backup and restore considerations The backup and restore feature is intended to help you recover from accidental deletes of data or to enable you to export data.

### "Identity and Access Management (IAM) \_|\_ Datastore \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/datastore/docs/access/iam](https://docs.cloud.google.com/datastore/docs/access/iam)
- Source ID: `site-iam-reference`
- Final score: 214
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Intended for application developers and service accounts. roles/datastore.viewer appengine.applications.get datastore.databases.get datastore.databases.getMetadata datastore.databases.list datastore.entities.get datastore.entities.list datastore.schemas.get datastore.schemas.list datastore.namespaces.get datastore.namespaces.list datastore.statistics.get datastore.statistics.list resourcemanager.projects.get resourcemanager.projects.list datastore.insights.get Read access to all Datastore mode database resources. roles/datastore.importExportAdmin appengine.applications.get datastore.databases.export datastore.databases.getMetadata datastore.databases.import datastore.operations.cancel datastore.operations.get datastore.operations.list resourcemanager.projects.get resourcemanager.projects.list Full access to manage imports and exports. roles/datastore.bulkAdmin resourcemanager.projects.get resourcemanager.projects.list datastore.databases.getMetadata datastore.databases.bulkDelete datastore.operations.cancel datastore.operations.get datastore.operations.list Full access to manage bulk operations. roles/datastore.indexAdmin appengine.applications.get datastore.databases.getMetadata datastore.schemas. datastore.operations.get datastore.operations.list resourcemanager.projects.get resourcemanager.projects.list Full access to manage index definitions. roles/datastore.keyVisualizerViewer datastore.databases.getMetadata datastore.keyVisualizerScans.get datastore.keyVisualizerScans.list resourcemanager.projects.get resourcemanager.projects.list Full access to Key Visualizer scans. roles/datastore.backupSchedulesViewer datastore.backupSchedules.get datastore.backupSchedules.list Read access to backup schedules in a Datastore mode database. roles/datastore.backupSchedulesAdmin datastore.backupSchedules.get datastore.backupSchedules.list datastore.backupSchedules.create datastore.backupSchedules.update datastore.backupSchedules.delete datastore.databases.list datastore.databases.getMetadata Full access to backup schedules in a Datastore mode database. roles/datastore.backupsViewer datastore.backups.get datastore.backups.list Read access to backup information in a Datastore mode location. roles/datastore.backupsAdmin datastore.backups.get datastore.backups.list datastore.backups.delete Full access to backups in a Datastore mode location. roles/datastore.restoreAdmin datastore.backups.get datastore.backups.list datastore.backups.restoreDatabase datastore.databases.list datastore.databases.create datastore.databases.getMetadata datastore.operations.list datastore.operations.get Ability to restore a Datastore mode backup into a new database.
- Managing IAM You can get and set IAM policies using the Google Cloud console, the IAM methods, or the Google Cloud CLI.
- View tags datastore.databases.listTagBindings datastore.databases.listEffectiveTags Manage tags on resources The following permission is required for the database resource you're attaching the tag value. datastore.databases.createTagBinding Required Permissions for API methods The following table lists the permissions that the caller must have to call each method: Method Required Permission(s) allocateIds datastore.entities.allocateIds beginTransaction datastore.databases.get commit with empty mutations datastore.databases.get commit for an insert datastore.entities.create commit for an upsert datastore.entities.create datastore.entities.update commit for an update datastore.entities.update commit for a delete datastore.entities.delete commit for a lookup datastore.entities.get For a lookup related to metadata or statistics, see Required Permissions for Metadata and Statistics . commit for a query datastore.entities.list datastore.entities.get (if the query is not a keys-only query ) For a query related to metadata or statistics, see Required Permissions for Metadata and Statistics . lookup datastore.entities.get For a lookup related to metadata or statistics, see Required Permissions for Metadata and Statistics . rollback datastore.databases.get runQuery datastore.entities.list datastore.entities.get (if the query is not a keys-only query ) For a query related to metadata or statistics, see Required Permissions for Metadata and Statistics . runQuery with a kindless query datastore.entities.get datastore.entities.list datastore.statistics.get datastore.statistics.list Required Permissions for Metadata and Statistics The following table lists permissions that the caller must have to call methods on Metadata and Statistics .
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]

### "Getting started with the Firestore in Datastore mode API \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/datastore/docs/datastore-api-tutorial](https://docs.cloud.google.com/datastore/docs/datastore-api-tutorial)
- Source ID: `site-iam-reference`
- Final score: 213
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see Set up authentication for a local development environment . async function markDone ( taskId ) { const transaction = datastore . transaction (); const taskKey = datastore . key ([ 'Task' , datastore . int ( taskId )]); try { await transaction . run (); const [ task ] = await transaction . get ( taskKey ); task . done = true ; transaction . save ({ key : taskKey , data : task , }); await transaction . commit (); console . log ( Task ${ taskId } updated successfully. ); } catch ( err ) { await transaction . rollback (); } } PHP To learn how to install and use the client library for Cloud Datastore, see Cloud Datastore client libraries .
- For more information, see Set up authentication for a local development environment . async function addTask ( description ) { const taskKey = datastore . key ( 'Task' ); const entity = { key : taskKey , data : [ { name : 'created' , value : new Date (). toJSON (), }, { name : 'description' , value : description , excludeFromIndexes : true , }, { name : 'done' , value : false , }, ], }; try { await datastore . save ( entity ); console . log ( Task ${ taskKey . id } created successfully. ); } catch ( err ) { console . error ( 'ERROR:' , err ); } } PHP To learn how to install and use the client library for Cloud Datastore, see Cloud Datastore client libraries .
- Extract the download: unzip master . zip Change directories to the TaskList application: cd google - cloud - ruby - master / google - cloud - datastore / samples Install the dependencies: bundle install At a command prompt, run the following, where <project-id> is the ID of your Google Cloud project. export GOOGLE CLOUD PROJECT = < project - id > (Windows users: use set instead of export .) Run the application! bundle exec ruby tasks . rb Creating an Authorized Service Object In order to make authenticated requests to Google Cloud APIs using the Google APIs Client libraries, you must: Fetch the credential to use for requests.
- Go Clone the TaskList sample application. go get github . com / GoogleCloudPlatform / golang - samples / datastore / tasks Change directories to where you cloned the sample: cd $ GOPATH / src / github . com / GoogleCloudPlatform / golang - samples / datastore / tasks At a command prompt, run the following, where <project-id> is the ID of your Google Cloud project. export DATASTORE PROJECT ID = < project - id > (Windows users: use set instead of export .) Run the application! go run tasks . go Java Ensure you have Maven and Java (version 8 or later) installed.

