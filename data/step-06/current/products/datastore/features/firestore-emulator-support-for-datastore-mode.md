---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:14:02.775Z"
product_name: "Datastore"
product_slug: "datastore"
feature_name: "Firestore emulator support for Datastore mode"
feature_slug: "firestore-emulator-support-for-datastore-mode"
latest_feature_date: "2024-03-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/datastore/docs/tools/datastore-emulator"
  - "https://docs.cloud.google.com/datastore/docs/datastore-api-tutorial"
  - "https://docs.cloud.google.com/datastore/docs/store-query-data"
  - "https://docs.cloud.google.com/datastore/docs/best-practices"
keywords:
  - "firestore"
  - "emulator"
  - "for"
  - "datastore"
  - "mode"
  - "the"
  - "can"
  - "be"
---

# Firestore emulator support for Datastore mode

Product: Datastore
Coverage: MEDIUM

## Step 02 Summary

The Firestore emulator can be used to test Firestore in Datastore mode behavior.

## Extended Definition

The Firestore emulator can be used to test Firestore in Datastore mode behavior.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/datastore/docs/tools/datastore-emulator](https://docs.cloud.google.com/datastore/docs/tools/datastore-emulator)
- [https://docs.cloud.google.com/datastore/docs/datastore-api-tutorial](https://docs.cloud.google.com/datastore/docs/datastore-api-tutorial)
- [https://docs.cloud.google.com/datastore/docs/store-query-data](https://docs.cloud.google.com/datastore/docs/store-query-data)
- [https://docs.cloud.google.com/datastore/docs/best-practices](https://docs.cloud.google.com/datastore/docs/best-practices)

## Supporting Pages

### Running the Datastore Emulator \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastore/docs/tools/datastore-emulator](https://docs.cloud.google.com/datastore/docs/tools/datastore-emulator)
- Source ID: `site-docs-root`
- Final score: 302
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Automatically removing the variables If your application and the emulator run on the same machine, you can remove the environment variables automatically: Linux / macOS Run env-unset using command substitution: $(gcloud beta emulators datastore env-unset) Windows Create and run a batch file using output from env-unset : gcloud beta emulators datastore env - unset > remove vars . cmd && remove vars . cmd Your application will now connect to your production Datastore mode database.
- Updating and deleting indexes By running your application using the emulator, you can generate indexes for your production Datastore mode database, as well as delete unneeded indexes.
- Automatically setting the variables If your application and the emulator run on the same machine, you can set the environment variables automatically: Linux / macOS Run env-init using command substitution: $(gcloud beta emulators datastore env-init) Windows Create and run a batch file using output from env-init : gcloud beta emulators datastore env - init > set vars . cmd && set vars . cmd Your application will now connect to the Datastore emulator.
- Before you begin To use the Datastore emulator you need: A Java JRE (version 21 or greater) The Google Cloud CLI An application built using the Google Cloud Client Libraries Installing the emulator The Datastore emulator is a component of the gcloud CLI.

### "Getting started with the Firestore in Datastore mode API \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/datastore/docs/datastore-api-tutorial](https://docs.cloud.google.com/datastore/docs/datastore-api-tutorial)
- Source ID: `site-iam-reference`
- Final score: 280
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information, see Set up authentication for a local development environment . def delete task task id require "google/cloud/datastore" datastore = Google :: Cloud :: Datastore . new task = datastore . find "Task" , task id datastore . delete task end Running a query In addition to retrieving entities from Datastore mode directly by their keys, an application can perform a query to retrieve them by the values of their properties.
- For information about using the Datastore mode emulator while you develop your application, see Datastore mode Emulator .
- For a deeper look into the Datastore mode capabilities, see What is Firestore in Datastore mode? .
- Client , task id : str int ): with client . transaction (): Create a key for an entity of kind "Task", and with the supplied task id as its Id key = client . key ( "Task" , task id ) Use that key to load the entity task = client . get ( key ) if not task : raise ValueError ( f "Task { task id } does not exist." ) Update a field indicating that the associated work has been completed task [ "done" ] = True Persist the change back to Datastore client . put ( task ) Ruby To learn how to install and use the client library for Cloud Datastore, see Cloud Datastore client libraries .

### "Quickstart: Store and query data in Firestore in Datastore mode \_|\_ Google\

- URL: [https://docs.cloud.google.com/datastore/docs/store-query-data](https://docs.cloud.google.com/datastore/docs/store-query-data)
- Source ID: `site-docs-root`
- Final score: 259
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Store and query data in Firestore in Datastore mode This page shows you how to store and query data in Firestore in Datastore mode using the Google Cloud console.
- For more guidance on selecting a database mode and for a feature-by-feature comparison, see choosing between Native Mode and Datastore Mode .
- When you create a new Firestore database, you have the option to use Firestore in either Native Mode or Datastore mode.
- The location applies to both Datastore mode databases and App Engine apps for your Google Cloud project.

### Best Practices \_|\_ Datastore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastore/docs/best-practices](https://docs.cloud.google.com/datastore/docs/best-practices)
- Source ID: `site-iam-reference`
- Final score: 251
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can use the best practices listed here as a quick reference of what to keep in mind when building an application that uses Firestore in Datastore mode.
- You should ramp up traffic to new kinds gradually in order to give Firestore in Datastore mode sufficient time to prepare for the increased traffic.
- You can use sharding if you need to write to a portion of the key range at a higher rate than Firestore in Datastore mode permits.
- You can use replication if you need to read a portion of the key range at a higher rate than Firestore in Datastore mode permits.

