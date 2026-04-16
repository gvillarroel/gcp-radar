---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:14:02.787Z"
product_name: "Datastore"
product_slug: "datastore"
feature_name: "Custom IAM roles"
feature_slug: "custom-iam-roles"
latest_feature_date: "2021-06-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/datastore/docs/access/iam"
  - "https://docs.cloud.google.com/datastore/docs/app-engine-requirement"
  - "https://docs.cloud.google.com/datastore/docs/export-import-entities"
  - "https://docs.cloud.google.com/datastore/docs/activate"
keywords:
  - "custom"
  - "iam"
  - "roles"
  - "let"
  - "you"
  - "define"
  - "datastore"
  - "access"
---

# Custom IAM roles

Product: Datastore
Coverage: MEDIUM

## Step 02 Summary

Custom IAM roles let you define Datastore access using user-defined role compositions.

## Extended Definition

Custom IAM roles let you define Datastore access using user-defined role compositions.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/datastore/docs/access/iam](https://docs.cloud.google.com/datastore/docs/access/iam)
- [https://docs.cloud.google.com/datastore/docs/app-engine-requirement](https://docs.cloud.google.com/datastore/docs/app-engine-requirement)
- [https://docs.cloud.google.com/datastore/docs/export-import-entities](https://docs.cloud.google.com/datastore/docs/export-import-entities)
- [https://docs.cloud.google.com/datastore/docs/activate](https://docs.cloud.google.com/datastore/docs/activate)

## Supporting Pages

### "Identity and Access Management (IAM) \_|\_ Datastore \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/datastore/docs/access/iam](https://docs.cloud.google.com/datastore/docs/access/iam)
- Source ID: `site-iam-reference`
- Final score: 297
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example, the following condition assigns a principal the datastore.user role up until a specified date: { "role" : "roles/datastore.user" , "members" : [ "user:travis@example.com" ], "condition" : { "title" : "Expires December 1 2023" , "description" : "Expires on December 1, 2023" , "expression" : "request.time < timestamp('2023-12-01T00:00:00.000Z')" } } To learn how to define IAM Conditions for temporary access, see Configure temporary access .
- Intended for application developers and service accounts. roles/datastore.viewer appengine.applications.get datastore.databases.get datastore.databases.getMetadata datastore.databases.list datastore.entities.get datastore.entities.list datastore.schemas.get datastore.schemas.list datastore.namespaces.get datastore.namespaces.list datastore.statistics.get datastore.statistics.list resourcemanager.projects.get resourcemanager.projects.list datastore.insights.get Read access to all Datastore mode database resources. roles/datastore.importExportAdmin appengine.applications.get datastore.databases.export datastore.databases.getMetadata datastore.databases.import datastore.operations.cancel datastore.operations.get datastore.operations.list resourcemanager.projects.get resourcemanager.projects.list Full access to manage imports and exports. roles/datastore.bulkAdmin resourcemanager.projects.get resourcemanager.projects.list datastore.databases.getMetadata datastore.databases.bulkDelete datastore.operations.cancel datastore.operations.get datastore.operations.list Full access to manage bulk operations. roles/datastore.indexAdmin appengine.applications.get datastore.databases.getMetadata datastore.schemas. datastore.operations.get datastore.operations.list resourcemanager.projects.get resourcemanager.projects.list Full access to manage index definitions. roles/datastore.keyVisualizerViewer datastore.databases.getMetadata datastore.keyVisualizerScans.get datastore.keyVisualizerScans.list resourcemanager.projects.get resourcemanager.projects.list Full access to Key Visualizer scans. roles/datastore.backupSchedulesViewer datastore.backupSchedules.get datastore.backupSchedules.list Read access to backup schedules in a Datastore mode database. roles/datastore.backupSchedulesAdmin datastore.backupSchedules.get datastore.backupSchedules.list datastore.backupSchedules.create datastore.backupSchedules.update datastore.backupSchedules.delete datastore.databases.list datastore.databases.getMetadata Full access to backup schedules in a Datastore mode database. roles/datastore.backupsViewer datastore.backups.get datastore.backups.list Read access to backup information in a Datastore mode location. roles/datastore.backupsAdmin datastore.backups.get datastore.backups.list datastore.backups.delete Full access to backups in a Datastore mode location. roles/datastore.restoreAdmin datastore.backups.get datastore.backups.list datastore.backups.restoreDatabase datastore.databases.list datastore.databases.create datastore.databases.getMetadata datastore.operations.list datastore.operations.get Ability to restore a Datastore mode backup into a new database.
- Insights permission name Description datastore.insights.get Get insights of a resource Predefined roles With IAM, every Datastore API method requires that the account making the API request has the appropriate permissions to use the resource.
- For example, in the IAM model, the datastore.databases.get permission lets you return a database object while, in Datastore mode, datastore.databases.get lets you begin or roll back a transaction.

### App Engine Requirement \_|\_ Datastore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastore/docs/app-engine-requirement](https://docs.cloud.google.com/datastore/docs/app-engine-requirement)
- Source ID: `site-iam-reference`
- Final score: 241
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Ensure continued access by updating your custom roles with datastore.databases.getMetadata or by using a predefined role .
- If you previously defined a custom role for Datastore, it might lack the datastore.databases.getMetadata permission.
- If you created any custom IAM roles, you may need to update them to include the permissions above.
- When executed from the Google Cloud console or the gcloud CLI, the administrative operations below will require the following IAM permissions: Create database: datastore.databases.create View database metadata: datastore.databases.getMetadata Edit database metadata: datastore.databases.update If you have not enabled the Firestore API, you will see an error in the Datastore pages of the Google Cloud console that includes the following notice: The Firestore API is required to administer your database.

### Exporting and Importing Entities \_|\_ Datastore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastore/docs/export-import-entities](https://docs.cloud.google.com/datastore/docs/export-import-entities)
- Source ID: `site-docs-root`
- Final score: 207
- Re-rank relevance: N/A

Evidence snippets:
- Export operations For export operations involving a bucket in another project, modify the permissions of the bucket to assign one of the following Identity and Access Management roles to the Datastore mode service agent of the project that contains your Datastore mode database: Storage Admin Owner (basic role) You can also create an IAM custom role with slightly different permissions than the ones contained in the roles listed earlier: storage.buckets.get storage.objects.create storage.objects.delete storage.objects.list Import operations For import operations involving a Cloud Storage bucket in another project, modify the permissions of the bucket to assign one of the following Cloud Storage roles to the Datastore mode service agent of the project that contains your Datastore mode database: Storage Admin Both Storage Object Viewer and Storage Legacy Bucket Reader You can also create an IAM custom role with the following permissions: storage.buckets.get storage.objects.get Starting managed export and import operations This section describes how to start a managed export or import operation.
- Otherwise, the following IAM roles grant the necessary permissions: Datastore Owner Datastore Import Export Admin You can also assign these permissions with a custom role .
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://datastore.googleapis.com/v1/projects/ project-id /operations/ operation-name " Select-Object -Expand Content You should receive a JSON response similar to the following: { "name": "projects/ project-id /operations/ASA3ODAwMzQxNjIyChp0bHVhZmVkBxJsYXJ0bmVjc3Utc2Jvai1uaW1kYRQKLRI", "metadata": { "@type": "type.googleapis.com/google.datastore.admin.v1.ExportEntitiesMetadata", "common": { "startTime": "2019-10-08T20:07:28.105236Z", "endTime": "2019-10-08T20:07:36.310653Z", "operationType": "EXPORT ENTITIES", "state": "SUCCESSFUL" }, "progressEntities": { "workCompleted": "21", "workEstimated": "21" }, "progressBytes": { "workCompleted": "2272", "workEstimated": "2065" }, "entityFilter": {}, "outputUrlPrefix": "gs:// bucket-name /2019-10-08T20:07:28 28481" }, "done": true, "response": { "@type": "type.googleapis.com/google.datastore.admin.v1.ExportEntitiesResponse", "outputUrl": "gs:// bucket-name /2019-10-08T20:07:28 28481/2019-10-08T20:07:28 28481.overall export metadata" } } Estimating the completion time As your operation runs, see the value of the state field for the overall status of the operation.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://datastore.googleapis.com/v1/projects/ project-id :import" Select-Object -Expand Content You should receive a JSON response similar to the following: { "name": "projects/ project-id /operations/ operation-id ", "metadata": { "@type": "type.googleapis.com/google.datastore.admin.v1.ImportEntitiesMetadata", "common": { "startTime": "2019-09-18T21:51:02.830608Z", "operationType": "IMPORT ENTITIES", "state": "PROCESSING" }, "entityFilter": { "kinds": [ "Task" ], "namespaceIds": [ "" ] }, "inputUrl": "gs:// bucket-name /2019-09-18T21:49:25 96833/2019-09-18T21:49:25 96833.overall export metadata" } } The response is a long-running operation , which you can check for completion.

### Access your database \_|\_ Datastore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastore/docs/activate](https://docs.cloud.google.com/datastore/docs/activate)
- Source ID: `site-docs-root`
- Final score: 206
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If you disable or delete your App Engine default service account, your App Engine app will lose access to your Datastore mode database.
- The Datastore Owner and Datastore User IAM roles, for example, grant read and write access to Firestore in Datastore mode.
- Under All roles , select a role that grants access to your database, such as Datastore > Cloud Datastore User .
- Access your database from App Engine To get started with Datastore mode and App Engine, see one of the following language-specific pages: App Engine Standard Environment App Engine Flexible Environment Python Java Go Node.js Python Java Node.js Go Ruby PHP Datastore mode permissions for App Engine App Engine apps can access a Datastore mode database in the same project by default.

