---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T08:14:41.876Z"
product_name: "Datastore"
product_slug: "datastore"
feature_name: "Cloud Firestore in Datastore mode"
feature_slug: "cloud-firestore-in-datastore-mode"
latest_feature_date: "2019-01-31"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/datastore/docs/datastore-api-tutorial"
  - "https://docs.cloud.google.com/datastore/docs/articles/balancing-strong-and-eventual-consistency-with-google-cloud-datastore"
  - "https://docs.cloud.google.com/datastore/docs/tools/indexconfig"
keywords:
  - "firestore"
  - "in"
  - "datastore"
  - "mode"
  - "provides"
  - "api"
  - "compatibility"
  - "on"
---

# Cloud Firestore in Datastore mode

Product: Datastore
Coverage: LOW

## Step 02 Summary

Cloud Firestore in Datastore mode provides Datastore API compatibility on the Cloud Firestore storage layer; Cloud Firestore in Datastore mode lets applications use Datastore client libraries on an improved Cloud Firestore storage layer.

## Extended Definition

Cloud Firestore in Datastore mode provides Datastore API compatibility on the Cloud Firestore storage layer; Cloud Firestore in Datastore mode lets applications use Datastore client libraries on an improved Cloud Firestore storage layer.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/datastore/docs/datastore-api-tutorial](https://docs.cloud.google.com/datastore/docs/datastore-api-tutorial)
- [https://docs.cloud.google.com/datastore/docs/articles/balancing-strong-and-eventual-consistency-with-google-cloud-datastore](https://docs.cloud.google.com/datastore/docs/articles/balancing-strong-and-eventual-consistency-with-google-cloud-datastore)
- [https://docs.cloud.google.com/datastore/docs/tools/indexconfig](https://docs.cloud.google.com/datastore/docs/tools/indexconfig)

## Supporting Pages

### "Getting started with the Firestore in Datastore mode API \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/datastore/docs/datastore-api-tutorial](https://docs.cloud.google.com/datastore/docs/datastore-api-tutorial)
- Source ID: `site-iam-reference`
- Final score: 240
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- This page provides a short exercise in building a command-line TaskList application with the Firestore in Datastore mode API.
- Home Documentation Databases Datastore Guides Send feedback Getting started with the Firestore in Datastore mode API Stay organized with collections Save and categorize content based on your preferences.
- This project provides authentication credentials you use in your application to identify it to Google and authorize its use of the Datastore mode API.
- Follow these instructions to create a project, enable the Datastore mode API for it, and set up your local development environment with authentication credentials using the gcloud auth login command.

### "Balancing Strong and Eventual Consistency with Datastore \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/datastore/docs/articles/balancing-strong-and-eventual-consistency-with-google-cloud-datastore](https://docs.cloud.google.com/datastore/docs/articles/balancing-strong-and-eventual-consistency-with-google-cloud-datastore)
- Source ID: `site-iam-reference`
- Final score: 236
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Datastore API Read of entity value Read of index Global Query Eventual consistency Eventual consistency Keys-only Global Query N/A Eventual consistency Ancestor Query Strong consistency Strong consistency Lookup by key (get()) Strong consistency N/A Table 1: Datastore queries/get calls and possible consistency behaviors Datastore queries without an ancestor are known as global queries and are designed to work with an eventual consistency model.
- Balancing Strong and Eventual Consistency with Datastore Note: This page describes system behavior for Datastore databases that have not yet upgraded to Firestore in Datastore mode.
- The different varieties of Datastore query APIs and their corresponding consistency models are shown in Table 1.
- Providing a Consistent User Experience and Leveraging the Eventual Consistency Model to Scale to Large Datasets This document discusses achieving strong consistency for a positive user experience, while embracing Datastore’s eventual consistency model for handling large quantities of data and users.

### Composite Index Configuration \_|\_ Datastore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastore/docs/tools/indexconfig](https://docs.cloud.google.com/datastore/docs/tools/indexconfig)
- Source ID: `site-docs-root`
- Final score: 218
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Datastore mode provides built-in indexes automatically, but needs to know in advance which composite indexes the application will require.
- The gcloud command-line tool provides commands to update the indexes that are available to your production Datastore mode database.
- Firestore in Datastore mode uses indexes for every query your application makes.
- For example, a recently completed composite index build shows the following information: { "operations": [ { "name": "projects/ project-id /operations/S01vcFVpSmdBQ0lDDCoDIGRiNTdiZDQNmE4YS0yMTVmNWUzZSQadGx1YWZlZAcSMXRzYWVzdS1yZXhlZG5pLW5pbWRhFQpWEg", "done": true, "metadata": { "@type": "type.googleapis.com/google.datastore.admin.v1.IndexOperationMetadata", "common": { "endTime": "2020-06-23T16:55:29.923562Z", "operationType": "CREATE INDEX", "startTime": "2020-06-23T16:55:10Z", "state": "SUCCESSFUL" }, "indexId": "CICAJiUpoMK", "progressEntities": { "workCompleted": "2193027", "workEstimated": "2198182" } }, "response": { "@type": "type.googleapis.com/google.datastore.admin.v1.Index", "ancestor": "NONE", "indexId": "CICAJiUpoMK", "kind": "Task", "projectId": " project-id ", "properties": [ { "direction": "ASCENDING", "name": "priority" }, { "direction": "ASCENDING", "name": "done" }, { "direction": "DESCENDING", "name": "created" } ], "state": "READY" } }, ] } Describing a single operation Instead of listing all long-running operations, you can list the details of a single operation: gcloud Use the operations describe command to show the status of a composite index build. gcloud datastore operations describe operation-name rest Before using any of the request data, make the following replacements: project-id : your project ID HTTP method and URL: GET https://datastore.googleapis.com/v1/projects/ project-id /operations To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .

