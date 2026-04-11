---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T08:14:41.841Z"
product_name: "Datastore"
product_slug: "datastore"
feature_name: "Location support: us-south1"
feature_slug: "location-support-us-south1"
latest_feature_date: "2024-04-29"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/datastore/docs/store-query-data"
  - "https://docs.cloud.google.com/datastore/docs/datastore-api-tutorial"
  - "https://docs.cloud.google.com/datastore/docs/release-notes"
keywords:
  - "location"
  - "us"
  - "south1"
  - "firestore"
  - "in"
  - "datastore"
  - "mode"
  - "supports"
---

# Location support: us-south1

Product: Datastore
Coverage: LOW

## Step 02 Summary

Firestore in Datastore mode supports the us-south1 Dallas region.

## Extended Definition

Firestore in Datastore mode supports the us-south1 Dallas region.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/datastore/docs/store-query-data](https://docs.cloud.google.com/datastore/docs/store-query-data)
- [https://docs.cloud.google.com/datastore/docs/datastore-api-tutorial](https://docs.cloud.google.com/datastore/docs/datastore-api-tutorial)
- [https://docs.cloud.google.com/datastore/docs/release-notes](https://docs.cloud.google.com/datastore/docs/release-notes)

## Supporting Pages

### "Quickstart: Store and query data in Firestore in Datastore mode \_|\_ Google\

- URL: [https://docs.cloud.google.com/datastore/docs/store-query-data](https://docs.cloud.google.com/datastore/docs/store-query-data)
- Source ID: `site-docs-root`
- Final score: 214
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Store and query data in Firestore in Datastore mode This page shows you how to store and query data in Firestore in Datastore mode using the Google Cloud console.
- When you create a new Firestore database, you have the option to use Firestore in either Native Mode or Datastore mode.
- The location applies to both Datastore mode databases and App Engine apps for your Google Cloud project.
- Firestore in Datastore Mode Recommended for app architectures with backend servers.

### "Getting started with the Firestore in Datastore mode API \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/datastore/docs/datastore-api-tutorial](https://docs.cloud.google.com/datastore/docs/datastore-api-tutorial)
- Source ID: `site-iam-reference`
- Final score: 200
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see Set up authentication for a local development environment . / Adds a task entity to the Datastore. @param description The task description @return The {@link Key} of the entity @throws DatastoreException if the ID allocation or put fails / Key addTask ( String description ) { Key key = datastore . allocateId ( keyFactory . newKey ()); Entity task = Entity . newBuilder ( key ) . set ( "description" , StringValue . newBuilder ( description ). setExcludeFromIndexes ( true ). build ()) . set ( "created" , Timestamp . now ()) . set ( "done" , false ) . build (); datastore . put ( task ); return key ; } Node.js To learn how to install and use the client library for Cloud Datastore, see Cloud Datastore client libraries .
- A typical query includes the following: An entity kind to which the query applies Zero or more filters, for example to select kinds whose properties match a value Zero or more sort orders, to sequence the results For this application, we'll query Datastore mode for Task entities sorted by creation time: C# To learn how to install and use the client library for Cloud Datastore, see Cloud Datastore client libraries .
- For more information, see Set up authentication for a local development environment . import ( "context" "log" "time" "cloud.google.com/go/datastore" ) // Task is the model used to store tasks in the datastore. type Task struct { Desc string datastore:"description" Created time .
- Home Documentation Databases Datastore Guides Send feedback Getting started with the Firestore in Datastore mode API Stay organized with collections Save and categorize content based on your preferences.

### Datastore release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastore/docs/release-notes](https://docs.cloud.google.com/datastore/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 186
- Re-rank relevance: N/A

Evidence snippets:
- Java Changes for google-cloud-datastore 2.19.1 (2024-04-19) Dependencies Update dependency com.google.cloud:sdk-platform-java-config to v3.29.0 ( #1403 ) ( d23dc4c ) April 08, 2024 Feature Firestore in Datastore mode now supports the following additional locations: africa-south1 Johannesburg europe-north1 Finland europe-southwest1 Madrid europe-west10 Berlin europe-west12 Turin europe-west8 Milan southamerica-west1 Santiago us-central1 Iowa us-east5 Columbus For a full list of supported locations, see Locations .
- Go Changes for datastore/admin/apiv1 1.16.0 (2024-04-29) Features datastore: Adding BeginLater and transaction state ( #8984 ) ( 5f8e21f ) datastore: Adding BeginLater transaction option ( #8972 ) ( 4067f4e ) datastore: Adding reserve IDs support ( #9027 ) ( 2d66de0 ) datastore: Configure both mTLS and TLS endpoints for Datastore client ( #9653 ) ( 38bd793 ) datastore: Respect DATASTORE EMULATOR HOST setting ( #9789 ) ( 7259373 ) Bug Fixes datastore: Add explicit sleep before read time use ( #9080 ) ( 0538be4 ) datastore: Adding tracing to run method ( #9602 ) ( a5e197c ) datastore: Bump x/net to v0.24.0 ( ba31ed5 ) datastore: Enable universe domain resolution options ( fd1d569 ) datastore: Prevent panic on GetMulti failure ( #9656 ) ( 55845ad ) datastore: Update protobuf dep to v1.33.0 ( 30b038d ) April 29, 2024 Feature Firestore in Datastore mode now supports the us-south1 Dallas region.
- March 24, 2025 Feature Firestore in Datastore mode now supports multi-region nam7 United States (Central and East), which consists of regions us-central1 (Iowa) and us-east4 (Northern Virginia).
- November 18, 2024 Feature Firestore in Datastore mode now supports the northamerica-south1 Queretaro region.

