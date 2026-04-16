---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:14:02.767Z"
product_name: "Datastore"
product_slug: "datastore"
feature_name: "Location support: nam7"
feature_slug: "location-support-nam7"
latest_feature_date: "2025-03-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/datastore/docs/store-query-data"
  - "https://docs.cloud.google.com/datastore/docs/datastore-api-tutorial"
  - "https://docs.cloud.google.com/datastore/docs/console/managing-datastore"
  - "https://docs.cloud.google.com/datastore/docs/app-engine-requirement"
keywords:
  - "location"
  - "nam7"
  - "firestore"
  - "in"
  - "datastore"
  - "mode"
  - "supports"
  - "the"
---

# Location support: nam7

Product: Datastore
Coverage: MEDIUM

## Step 02 Summary

Firestore in Datastore mode supports the nam7 multi-region in the United States Central and East geography.

## Extended Definition

Firestore in Datastore mode supports the nam7 multi-region in the United States Central and East geography.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/datastore/docs/store-query-data](https://docs.cloud.google.com/datastore/docs/store-query-data)
- [https://docs.cloud.google.com/datastore/docs/datastore-api-tutorial](https://docs.cloud.google.com/datastore/docs/datastore-api-tutorial)
- [https://docs.cloud.google.com/datastore/docs/console/managing-datastore](https://docs.cloud.google.com/datastore/docs/console/managing-datastore)
- [https://docs.cloud.google.com/datastore/docs/app-engine-requirement](https://docs.cloud.google.com/datastore/docs/app-engine-requirement)

## Supporting Pages

### "Quickstart: Store and query data in Firestore in Datastore mode \_|\_ Google\

- URL: [https://docs.cloud.google.com/datastore/docs/store-query-data](https://docs.cloud.google.com/datastore/docs/store-query-data)
- Source ID: `site-docs-root`
- Final score: 262
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Store and query data in Firestore in Datastore mode This page shows you how to store and query data in Firestore in Datastore mode using the Google Cloud console.
- When you create a new Firestore database, you have the option to use Firestore in either Native Mode or Datastore mode.
- The location applies to both Datastore mode databases and App Engine apps for your Google Cloud project.
- Go to project selector If you are not the project owner, your account requires the following permissions to complete this quickstart: Your account requires the Datastore Owner role which contains the datastore.databases.create permission needed to create a Datastore mode instance.

### "Getting started with the Firestore in Datastore mode API \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/datastore/docs/datastore-api-tutorial](https://docs.cloud.google.com/datastore/docs/datastore-api-tutorial)
- Source ID: `site-iam-reference`
- Final score: 258
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Databases Datastore Guides Send feedback Getting started with the Firestore in Datastore mode API Stay organized with collections Save and categorize content based on your preferences.
- This page provides a short exercise in building a command-line TaskList application with the Firestore in Datastore mode API.
- For a deeper look into the Datastore mode capabilities, see What is Firestore in Datastore mode? .
- For more information, see Set up authentication for a local development environment . / Adds a task entity to the Datastore. @param description The task description @return The {@link Key} of the entity @throws DatastoreException if the ID allocation or put fails / Key addTask ( String description ) { Key key = datastore . allocateId ( keyFactory . newKey ()); Entity task = Entity . newBuilder ( key ) . set ( "description" , StringValue . newBuilder ( description ). setExcludeFromIndexes ( true ). build ()) . set ( "created" , Timestamp . now ()) . set ( "done" , false ) . build (); datastore . put ( task ); return key ; } Node.js To learn how to install and use the client library for Cloud Datastore, see Cloud Datastore client libraries .

### "Managing Firestore in Datastore mode from the Console \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/datastore/docs/console/managing-datastore](https://docs.cloud.google.com/datastore/docs/console/managing-datastore)
- Source ID: `site-docs-root`
- Final score: 220
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Databases Datastore Guides Send feedback Managing Firestore in Datastore mode from the Console Stay organized with collections Save and categorize content based on your preferences.
- In the navigation menu, click Datastore Studio to view data for the entities in your application, as well as statistics for the built-in and composite indexes.
- In the navigation menu, click Datastore Studio to view the entities that your application stored in your database.
- Viewing Datastore statistics In the Google Cloud console, go to the Databases page.

### App Engine Requirement \_|\_ Datastore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastore/docs/app-engine-requirement](https://docs.cloud.google.com/datastore/docs/app-engine-requirement)
- Source ID: `site-iam-reference`
- Final score: 218
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Create a google firestore database resource In your Terraform configuration file, create a new google firestore database resource: datastore.tf resource "google firestore database" "database" { project = " project " name = "(default)" location id = " location " type = "DATASTORE MODE" app engine integration mode = "DISABLED" // Optional, but recommended for safety delete protection state = "DELETE PROTECTION ENABLED" } See Datastore locations for the list of available locations.
- Go to Datastore Admin Migrating Terraform App Engine Resources If you previously managed Datastore mode databases via the google app engine application Terraform resource, you can use the google firestore database Terraform resource instead.
- Next, import the existing Datastore mode database into your Terraform state: terraform import google firestore database.database "(default)" Next, run: terraform plan Inspect the output to ensure the import completed successfully.
- Import the existing Datastore mode database First, ensure that the Firestore API is enabled.

