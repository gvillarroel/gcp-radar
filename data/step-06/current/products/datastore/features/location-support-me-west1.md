---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:14:02.778Z"
product_name: "Datastore"
product_slug: "datastore"
feature_name: "Location support: me-west1"
feature_slug: "location-support-me-west1"
latest_feature_date: "2023-09-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/datastore/docs/store-query-data"
  - "https://docs.cloud.google.com/datastore/docs/app-engine-requirement"
  - "https://docs.cloud.google.com/datastore/docs/datastore-api-tutorial"
  - "https://docs.cloud.google.com/datastore/docs/export-import-entities"
keywords:
  - "location"
  - "me"
  - "west1"
  - "firestore"
  - "in"
  - "datastore"
  - "mode"
  - "supports"
---

# Location support: me-west1

Product: Datastore
Coverage: MEDIUM

## Step 02 Summary

Firestore in Datastore mode supports the me-west1 Tel Aviv region.

## Extended Definition

Firestore in Datastore mode supports the me-west1 Tel Aviv region.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/datastore/docs/store-query-data](https://docs.cloud.google.com/datastore/docs/store-query-data)
- [https://docs.cloud.google.com/datastore/docs/app-engine-requirement](https://docs.cloud.google.com/datastore/docs/app-engine-requirement)
- [https://docs.cloud.google.com/datastore/docs/datastore-api-tutorial](https://docs.cloud.google.com/datastore/docs/datastore-api-tutorial)
- [https://docs.cloud.google.com/datastore/docs/export-import-entities](https://docs.cloud.google.com/datastore/docs/export-import-entities)

## Supporting Pages

### "Quickstart: Store and query data in Firestore in Datastore mode \_|\_ Google\

- URL: [https://docs.cloud.google.com/datastore/docs/store-query-data](https://docs.cloud.google.com/datastore/docs/store-query-data)
- Source ID: `site-docs-root`
- Final score: 263
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Firestore in Datastore Mode Recommended for app architectures with backend servers.
- Store and query data in Firestore in Datastore mode This page shows you how to store and query data in Firestore in Datastore mode using the Google Cloud console.
- When you create a new Firestore database, you have the option to use Firestore in either Native Mode or Datastore mode.
- The location applies to both Datastore mode databases and App Engine apps for your Google Cloud project.

### App Engine Requirement \_|\_ Datastore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastore/docs/app-engine-requirement](https://docs.cloud.google.com/datastore/docs/app-engine-requirement)
- Source ID: `site-iam-reference`
- Final score: 259
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Create a google firestore database resource In your Terraform configuration file, create a new google firestore database resource: datastore.tf resource "google firestore database" "database" { project = " project " name = "(default)" location id = " location " type = "DATASTORE MODE" app engine integration mode = "DISABLED" // Optional, but recommended for safety delete protection state = "DELETE PROTECTION ENABLED" } See Datastore locations for the list of available locations.
- Firestore API Requirement Previously, all Firestore in Datastore mode databases were linked to an App Engine app.
- When executed from the Google Cloud console or the gcloud CLI, the administrative operations below will require the following IAM permissions: Create database: datastore.databases.create View database metadata: datastore.databases.getMetadata Edit database metadata: datastore.databases.update If you have not enabled the Firestore API, you will see an error in the Datastore pages of the Google Cloud console that includes the following notice: The Firestore API is required to administer your database.
- If the output includes a line similar to: google firestore database.database must be replaced then inspect your Terraform configuration file to see if there were any mistakes, particularly in the project , location , or name fields, and then run terraform plan again.

### "Getting started with the Firestore in Datastore mode API \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/datastore/docs/datastore-api-tutorial](https://docs.cloud.google.com/datastore/docs/datastore-api-tutorial)
- Source ID: `site-iam-reference`
- Final score: 245
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Databases Datastore Guides Send feedback Getting started with the Firestore in Datastore mode API Stay organized with collections Save and categorize content based on your preferences.
- For more information, see Set up authentication for a local development environment . / Adds a task entity to the Datastore. @param description The task description @return The {@link Key} of the entity @throws DatastoreException if the ID allocation or put fails / Key addTask ( String description ) { Key key = datastore . allocateId ( keyFactory . newKey ()); Entity task = Entity . newBuilder ( key ) . set ( "description" , StringValue . newBuilder ( description ). setExcludeFromIndexes ( true ). build ()) . set ( "created" , Timestamp . now ()) . set ( "done" , false ) . build (); datastore . put ( task ); return key ; } Node.js To learn how to install and use the client library for Cloud Datastore, see Cloud Datastore client libraries .
- For more information, see Set up authentication for a local development environment . def delete task task id require "google/cloud/datastore" datastore = Google :: Cloud :: Datastore . new task = datastore . find "Task" , task id datastore . delete task end Running a query In addition to retrieving entities from Datastore mode directly by their keys, an application can perform a query to retrieve them by the values of their properties.
- A typical query includes the following: An entity kind to which the query applies Zero or more filters, for example to select kinds whose properties match a value Zero or more sort orders, to sequence the results For this application, we'll query Datastore mode for Task entities sorted by creation time: C# To learn how to install and use the client library for Cloud Datastore, see Cloud Datastore client libraries .

### Exporting and Importing Entities \_|\_ Datastore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastore/docs/export-import-entities](https://docs.cloud.google.com/datastore/docs/export-import-entities)
- Source ID: `site-docs-root`
- Final score: 243
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Create a Cloud Storage bucket in the same location as your Firestore in Datastore mode database .
- Export and import operations contribute to your Google Cloud costs in the following ways: Entity reads and writes performed by export and import operations count towards your Firestore in Datastore mode costs .
- Export operations For export operations involving a bucket in another project, modify the permissions of the bucket to assign one of the following Identity and Access Management roles to the Datastore mode service agent of the project that contains your Datastore mode database: Storage Admin Owner (basic role) You can also create an IAM custom role with slightly different permissions than the ones contained in the roles listed earlier: storage.buckets.get storage.objects.create storage.objects.delete storage.objects.list Import operations For import operations involving a Cloud Storage bucket in another project, modify the permissions of the bucket to assign one of the following Cloud Storage roles to the Datastore mode service agent of the project that contains your Datastore mode database: Storage Admin Both Storage Object Viewer and Storage Legacy Bucket Reader You can also create an IAM custom role with the following permissions: storage.buckets.get storage.objects.get Starting managed export and import operations This section describes how to start a managed export or import operation.
- An alert reports the success or failure of your managed export request. gcloud Use the gcloud firestore export command to export all entities in your database. gcloud firestore export gs:// bucket-name --async --database= DATABASE where bucket-name is the name of your Cloud Storage bucket and an optional prefix, for example, bucket-name /datastore-exports/export-name .

