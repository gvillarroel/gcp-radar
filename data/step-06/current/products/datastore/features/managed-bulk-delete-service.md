---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:14:02.768Z"
product_name: "Datastore"
product_slug: "datastore"
feature_name: "Managed bulk delete service"
feature_slug: "managed-bulk-delete-service"
latest_feature_date: "2024-11-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/datastore/docs/bulk-delete"
  - "https://docs.cloud.google.com/datastore/docs/export-import-entities"
  - "https://docs.cloud.google.com/datastore/docs/console/datastore-admin-console"
  - "https://docs.cloud.google.com/datastore/docs/datastore-api-tutorial"
keywords:
  - "managed"
  - "bulk"
  - "delete"
  - "the"
  - "deletes"
  - "entities"
  - "in"
---

# Managed bulk delete service

Product: Datastore
Coverage: MEDIUM

## Step 02 Summary

The managed bulk delete service deletes entities in bulk.

## Extended Definition

The managed bulk delete service deletes entities in bulk.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/datastore/docs/bulk-delete](https://docs.cloud.google.com/datastore/docs/bulk-delete)
- [https://docs.cloud.google.com/datastore/docs/export-import-entities](https://docs.cloud.google.com/datastore/docs/export-import-entities)
- [https://docs.cloud.google.com/datastore/docs/console/datastore-admin-console](https://docs.cloud.google.com/datastore/docs/console/datastore-admin-console)
- [https://docs.cloud.google.com/datastore/docs/datastore-api-tutorial](https://docs.cloud.google.com/datastore/docs/datastore-api-tutorial)

## Supporting Pages

### Delete entities in bulk \_|\_ Datastore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastore/docs/bulk-delete](https://docs.cloud.google.com/datastore/docs/bulk-delete)
- Source ID: `site-docs-root`
- Final score: 324
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Bulk delete data A bulk delete operation first finds all applicable entities in your database and deletes them in batches.
- This page describes how to delete entities in bulk using the managed bulk delete service.
- A kind includes all entities and nested entities (at any path) with the specified kinds. gcloud firestore bulk-delete \ --collection-ids= [COLLECTION GROUP ID 1 OR KIND 1] , [COLLECTION GROUP ID 2 OR KIND 2] , [SUBCOLLECTION GROUP ID 1 OR KIND 3] \ --database= [DATABASE] Manage bulk delete operations After you start a bulk delete operation, Datastore mode assigns the operation a unique name.
- To cancel a running operation, use the earlier cancellation operation. gcloud firestore operations delete [OPERATION NAME] Billing and pricing for bulk delete operations You are required to enable billing for your Google Cloud project before you use the managed bulk delete service.

### Exporting and Importing Entities \_|\_ Datastore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastore/docs/export-import-entities](https://docs.cloud.google.com/datastore/docs/export-import-entities)
- Source ID: `site-docs-root`
- Final score: 189
- Re-rank relevance: N/A

Evidence snippets:
- Export operations For export operations involving a bucket in another project, modify the permissions of the bucket to assign one of the following Identity and Access Management roles to the Datastore mode service agent of the project that contains your Datastore mode database: Storage Admin Owner (basic role) You can also create an IAM custom role with slightly different permissions than the ones contained in the roles listed earlier: storage.buckets.get storage.objects.create storage.objects.delete storage.objects.list Import operations For import operations involving a Cloud Storage bucket in another project, modify the permissions of the bucket to assign one of the following Cloud Storage roles to the Datastore mode service agent of the project that contains your Datastore mode database: Storage Admin Both Storage Object Viewer and Storage Legacy Bucket Reader You can also create an IAM custom role with the following permissions: storage.buckets.get storage.objects.get Starting managed export and import operations This section describes how to start a managed export or import operation.
- An alert reports the success or failure of your managed import request. gcloud Use the gcloud firestore import command to import all entities that were previously exported with the managed export service. gcloud firestore import gs:// bucket-name/file-path/file-name .overall export metadata \ --async \ --database= DATABASE where bucket-name/file-path/file-name is the path to your overall export metadata file within your Cloud Storage bucket.
- An alert reports the success or failure of your managed export request. gcloud Use the gcloud firestore export command to export all entities in your database. gcloud firestore export gs:// bucket-name --async --database= DATABASE where bucket-name is the name of your Cloud Storage bucket and an optional prefix, for example, bucket-name /datastore-exports/export-name .
- This command won't delete export files from Cloud Storage. gcloud datastore operations delete operation-name Billing and pricing for managed exports and imports You are required to enable billing for your Google Cloud project before you use the managed export and import service.

### Datastore Admin \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastore/docs/console/datastore-admin-console](https://docs.cloud.google.com/datastore/docs/console/datastore-admin-console)
- Source ID: `site-docs-root`
- Final score: 180
- Re-rank relevance: N/A

Evidence snippets:
- Backup and restore considerations The backup and restore feature is intended to help you recover from accidental deletes of data or to enable you to export data.
- Firestore in Datastore mode previously supported the ability to enable Datastore Admin, an optional module with bulk delete and backup features.
- The bulk delete feature was replaced by the Bulk Delete Entities template for Dataflow .
- Disable Datastore Admin access Run the following command, replacing PROJECT ID with the ID of your Google Cloud project: curl -X DELETE -H "Authorization: Bearer $(gcloud auth print-access-token)" \ https://appengine.googleapis.com/v1/apps/ PROJECT ID /services/default/versions/ah-builtin-python-bundle Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### "Getting started with the Firestore in Datastore mode API \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/datastore/docs/datastore-api-tutorial](https://docs.cloud.google.com/datastore/docs/datastore-api-tutorial)
- Source ID: `site-iam-reference`
- Final score: 164
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see Set up authentication for a local development environment . def delete task task id require "google/cloud/datastore" datastore = Google :: Cloud :: Datastore . new task = datastore . find "Task" , task id datastore . delete task end Running a query In addition to retrieving entities from Datastore mode directly by their keys, an application can perform a query to retrieve them by the values of their properties.
- For more information, see Set up authentication for a local development environment . / Deletes a task entity. @param id The ID of the task entity as given by {@link Key#id()} @throws DatastoreException if the delete fails / void deleteTask ( long id ) { datastore . delete ( keyFactory . newKey ( id )); } Node.js To learn how to install and use the client library for Cloud Datastore, see Cloud Datastore client libraries .
- For more information, see Set up authentication for a local development environment . import ( "context" "log" "cloud.google.com/go/datastore" ) // DeleteTask deletes the task with the given ID. func DeleteTask ( projectID string , taskID int64 ) error { ctx := context .
- For more information, see Set up authentication for a local development environment . /// <summary> /// Deletes a task entity. /// </summary> /// <param name="id">The ID of the task entity as given by Key.</param> void DeleteTask ( long id ) { db .

