---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:14:02.781Z"
product_name: "Datastore"
product_slug: "datastore"
feature_name: "Regional endpoints"
feature_slug: "regional-endpoints"
latest_feature_date: "2023-04-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/datastore/docs/datastore-api-tutorial"
  - "https://docs.cloud.google.com/python/docs/reference/datastore/latest/admin_client"
  - "https://docs.cloud.google.com/datastore/docs/store-query-data"
  - "https://docs.cloud.google.com/datastore/docs/reference/admin/rest"
keywords:
  - "regional"
  - "endpoints"
  - "let"
  - "firestore"
  - "in"
  - "datastore"
  - "mode"
  - "api"
---

# Regional endpoints

Product: Datastore
Coverage: MEDIUM

## Step 02 Summary

Regional endpoints let Firestore in Datastore mode API traffic be directed to regional endpoints.

## Extended Definition

Regional endpoints let Firestore in Datastore mode API traffic be directed to regional endpoints.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/datastore/docs/datastore-api-tutorial](https://docs.cloud.google.com/datastore/docs/datastore-api-tutorial)
- [https://docs.cloud.google.com/python/docs/reference/datastore/latest/admin_client](https://docs.cloud.google.com/python/docs/reference/datastore/latest/admin_client)
- [https://docs.cloud.google.com/datastore/docs/store-query-data](https://docs.cloud.google.com/datastore/docs/store-query-data)
- [https://docs.cloud.google.com/datastore/docs/reference/admin/rest](https://docs.cloud.google.com/datastore/docs/reference/admin/rest)

## Supporting Pages

### "Getting started with the Firestore in Datastore mode API \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/datastore/docs/datastore-api-tutorial](https://docs.cloud.google.com/datastore/docs/datastore-api-tutorial)
- Source ID: `site-iam-reference`
- Final score: 268
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Databases Datastore Guides Send feedback Getting started with the Firestore in Datastore mode API Stay organized with collections Save and categorize content based on your preferences.
- This page provides a short exercise in building a command-line TaskList application with the Firestore in Datastore mode API.
- For more information, see Set up authentication for a local development environment . def delete task task id require "google/cloud/datastore" datastore = Google :: Cloud :: Datastore . new task = datastore . find "Task" , task id datastore . delete task end Running a query In addition to retrieving entities from Datastore mode directly by their keys, an application can perform a query to retrieve them by the values of their properties.
- Follow these instructions to create a project, enable the Datastore mode API for it, and set up your local development environment with authentication credentials using the gcloud auth login command.

### "Datastore Admin Client \_|\_ Python client libraries \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/python/docs/reference/datastore/latest/admin_client](https://docs.cloud.google.com/python/docs/reference/datastore/latest/admin_client)
- Source ID: `site-python-reference`
- Final score: 252
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import datastore admin v1 def sample delete index(): Create a client client = datastore admin v1.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import datastore admin v1 def sample export entities(): Create a client client = datastore admin v1.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import datastore admin v1 def sample import entities(): Create a client client = datastore admin v1.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import datastore admin v1 def sample create index(): Create a client client = datastore admin v1.

### "Quickstart: Store and query data in Firestore in Datastore mode \_|\_ Google\

- URL: [https://docs.cloud.google.com/datastore/docs/store-query-data](https://docs.cloud.google.com/datastore/docs/store-query-data)
- Source ID: `site-docs-root`
- Final score: 223
- Re-rank relevance: N/A

Evidence snippets:
- Go to project selector If you are not the project owner, your account requires the following permissions to complete this quickstart: Your account requires the Datastore Owner role which contains the datastore.databases.create permission needed to create a Datastore mode instance.
- Store and query data in Firestore in Datastore mode This page shows you how to store and query data in Firestore in Datastore mode using the Google Cloud console.
- When you create a new Firestore database, you have the option to use Firestore in either Native Mode or Datastore mode.
- Firestore in Datastore Mode Recommended for app architectures with backend servers.

### Cloud Datastore API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastore/docs/reference/admin/rest](https://docs.cloud.google.com/datastore/docs/reference/admin/rest)
- Source ID: `site-docs-reference`
- Final score: 220
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Select a location to see its regional service endpoint for this service. global africa-south1 asia-east1 asia-east2 asia-northeast1 asia-northeast2 asia-northeast3 asia-south1 asia-south2 asia-southeast1 asia-southeast2 asia-southeast3 australia-southeast1 australia-southeast2 europe-central2 europe-north1 europe-north2 europe-southwest1 europe-west1 europe-west10 europe-west12 europe-west2 europe-west3 europe-west4 europe-west6 europe-west8 europe-west9 me-central1 me-central2 me-west1 northamerica-northeast1 northamerica-northeast2 northamerica-south1 southamerica-east1 southamerica-west1 us-central1 us-east1 us-east4 us-east5 us-south1 us-west1 us-west2 us-west3 us-west4 eu us https://datastore.googleapis.com REST Resource: v1beta1.projects Methods export POST /v1beta1/projects/{projectId}:export Exports a copy of all or a subset of entities from Google Cloud Datastore to another storage system, such as Google Cloud Storage. import POST /v1beta1/projects/{projectId}:import Imports entities into Google Cloud Datastore.
- This service has the following service endpoint and all URIs below are relative to this service endpoint: https://datastore.googleapis.com Regional service endpoint A regional service endpoint is a base URL that specifies the network address of an API service in a single region.
- This service provides the following discovery documents: https://datastore.googleapis.com/$discovery/rest?version=v1 https://datastore.googleapis.com/$discovery/rest?version=v1beta1 Service endpoint A service endpoint is a base URL that specifies the network address of an API service.
- REST Resource: v1beta1.projects REST Resource: v1.projects REST Resource: v1.projects.indexes REST Resource: v1.projects.operations Service: datastore.googleapis.com To call this service, we recommend that you use the Google-provided client libraries .

