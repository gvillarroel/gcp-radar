---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T08:14:41.853Z"
product_name: "Datastore"
product_slug: "datastore"
feature_name: "Location support: me-central1"
feature_slug: "location-support-me-central1"
latest_feature_date: "2023-09-25"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/datastore/docs/store-query-data"
  - "https://docs.cloud.google.com/datastore/docs/app-engine-requirement"
  - "https://docs.cloud.google.com/datastore/docs/reference/admin/rest/Shared.Types/DatastoreFirestoreMigrationMetadata"
keywords:
  - "location"
  - "me"
  - "central1"
  - "firestore"
  - "in"
  - "datastore"
  - "mode"
  - "supports"
---

# Location support: me-central1

Product: Datastore
Coverage: LOW

## Step 02 Summary

Firestore in Datastore mode supports the me-central1 Doha region.

## Extended Definition

Firestore in Datastore mode supports the me-central1 Doha region.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/datastore/docs/store-query-data](https://docs.cloud.google.com/datastore/docs/store-query-data)
- [https://docs.cloud.google.com/datastore/docs/app-engine-requirement](https://docs.cloud.google.com/datastore/docs/app-engine-requirement)
- [https://docs.cloud.google.com/datastore/docs/reference/admin/rest/Shared.Types/DatastoreFirestoreMigrationMetadata](https://docs.cloud.google.com/datastore/docs/reference/admin/rest/Shared.Types/DatastoreFirestoreMigrationMetadata)

## Supporting Pages

### "Quickstart: Store and query data in Firestore in Datastore mode \_|\_ Google\

- URL: [https://docs.cloud.google.com/datastore/docs/store-query-data](https://docs.cloud.google.com/datastore/docs/store-query-data)
- Source ID: `site-docs-root`
- Final score: 214
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Firestore in Datastore Mode Recommended for app architectures with backend servers.
- Store and query data in Firestore in Datastore mode This page shows you how to store and query data in Firestore in Datastore mode using the Google Cloud console.
- When you create a new Firestore database, you have the option to use Firestore in either Native Mode or Datastore mode.
- The location applies to both Datastore mode databases and App Engine apps for your Google Cloud project.

### App Engine Requirement \_|\_ Datastore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastore/docs/app-engine-requirement](https://docs.cloud.google.com/datastore/docs/app-engine-requirement)
- Source ID: `site-iam-reference`
- Final score: 212
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Create a google firestore database resource In your Terraform configuration file, create a new google firestore database resource: datastore.tf resource "google firestore database" "database" { project = " project " name = "(default)" location id = " location " type = "DATASTORE MODE" app engine integration mode = "DISABLED" // Optional, but recommended for safety delete protection state = "DELETE PROTECTION ENABLED" } See Datastore locations for the list of available locations.
- Firestore API Requirement Previously, all Firestore in Datastore mode databases were linked to an App Engine app.
- When executed from the Google Cloud console or the gcloud CLI, the administrative operations below will require the following IAM permissions: Create database: datastore.databases.create View database metadata: datastore.databases.getMetadata Edit database metadata: datastore.databases.update If you have not enabled the Firestore API, you will see an error in the Datastore pages of the Google Cloud console that includes the following notice: The Firestore API is required to administer your database.
- If the output includes a line similar to: google firestore database.database must be replaced then inspect your Terraform configuration file to see if there were any mistakes, particularly in the project , location , or name fields, and then run terraform plan again.

### DatastoreFirestoreMigrationMetadata \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastore/docs/reference/admin/rest/Shared.Types/DatastoreFirestoreMigrationMetadata](https://docs.cloud.google.com/datastore/docs/reference/admin/rest/Shared.Types/DatastoreFirestoreMigrationMetadata)
- Source ID: `site-docs-reference`
- Final score: 200
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- This singleton resource can be accessed at: "projects/{projectId}/operations/datastore-firestore-migration" JSON representation { "migrationState" : enum ( MigrationState ) , "migrationStep" : enum ( MigrationStep ) } Fields migrationState enum ( MigrationState ) The current state of migration from Cloud Datastore to Cloud Firestore in Datastore mode. migrationStep enum ( MigrationStep ) The current step of migration from Cloud Datastore to Cloud Firestore in Datastore mode.
- Home Documentation Databases Datastore Reference Send feedback DatastoreFirestoreMigrationMetadata Stay organized with collections Save and categorize content based on your preferences.
- The DatastoreFirestoreMigration operation is not started by the end-user via an explicit "creation" method.
- JSON representation Metadata for Datastore to Firestore migration operations.

