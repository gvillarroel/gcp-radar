---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:17.885Z"
product_name: "Firestore"
product_slug: "firestore"
feature_name: "Firestore regional endpoints"
feature_slug: "firestore-regional-endpoints"
latest_feature_date: "2023-04-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/firestore/latest/google.cloud.firestore_admin_v1.services.firestore_admin.client.FirestoreAdminClient"
  - "https://docs.cloud.google.com/datastore/docs/reference/data/rest"
  - "https://docs.cloud.google.com/firestore/docs/reference/rest"
keywords:
  - "firestore"
  - "regional"
  - "endpoints"
  - "provides"
  - "connecting"
  - "instances"
---

# Firestore regional endpoints

Product: Firestore
Coverage: MEDIUM

## Step 02 Summary

Firestore provides regional endpoints for connecting to regional instances.

## Extended Definition

Firestore provides regional endpoints for connecting to regional instances.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/firestore/latest/google.cloud.firestore_admin_v1.services.firestore_admin.client.FirestoreAdminClient](https://docs.cloud.google.com/python/docs/reference/firestore/latest/google.cloud.firestore_admin_v1.services.firestore_admin.client.FirestoreAdminClient)
- [https://docs.cloud.google.com/datastore/docs/reference/data/rest](https://docs.cloud.google.com/datastore/docs/reference/data/rest)
- [https://docs.cloud.google.com/firestore/docs/reference/rest](https://docs.cloud.google.com/firestore/docs/reference/rest)

## Supporting Pages

### "Class FirestoreAdminClient (2.23.0) \_|\_ Python client libraries \_|\_\

- URL: [https://docs.cloud.google.com/python/docs/reference/firestore/latest/google.cloud.firestore_admin_v1.services.firestore_admin.client.FirestoreAdminClient](https://docs.cloud.google.com/python/docs/reference/firestore/latest/google.cloud.firestore_admin_v1.services.firestore_admin.client.FirestoreAdminClient)
- Source ID: `site-python-reference`
- Final score: 102
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import firestore admin v1 def sample create backup schedule(): Create a client client = firestore admin v1.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import firestore admin v1 def sample delete backup schedule(): Create a client client = firestore admin v1.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import firestore admin v1 def sample update backup schedule(): Create a client client = firestore admin v1.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import firestore admin v1 def sample bulk delete documents(): Create a client client = firestore admin v1.

### Cloud Datastore API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastore/docs/reference/data/rest](https://docs.cloud.google.com/datastore/docs/reference/data/rest)
- Source ID: `site-docs-root`
- Final score: 64
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- A service that is available in multiple regions might have multiple regional endpoints.
- Select a location to see its regional service endpoint for this service. global africa-south1 asia-east1 asia-east2 asia-northeast1 asia-northeast2 asia-northeast3 asia-south1 asia-south2 asia-southeast1 asia-southeast2 asia-southeast3 australia-southeast1 australia-southeast2 europe-central2 europe-north1 europe-north2 europe-southwest1 europe-west1 europe-west10 europe-west12 europe-west2 europe-west3 europe-west4 europe-west6 europe-west8 europe-west9 me-central1 me-central2 me-west1 northamerica-northeast1 northamerica-northeast2 northamerica-south1 southamerica-east1 southamerica-west1 us-central1 us-east1 us-east4 us-east5 us-south1 us-west1 us-west2 us-west3 us-west4 eu us https://datastore.googleapis.com REST Resource: v1beta3.projects Methods allocateIds POST /v1beta3/projects/{projectId}:allocateIds Allocates IDs for the given keys, which is useful for referencing an entity before it is inserted. beginTransaction POST /v1beta3/projects/{projectId}:beginTransaction Begins a new transaction. commit POST /v1beta3/projects/{projectId}:commit Commits a transaction, optionally creating, deleting or modifying some entities. lookup POST /v1beta3/projects/{projectId}:lookup Looks up entities by key. reserveIds POST /v1beta3/projects/{projectId}:reserveIds Prevents the supplied keys' IDs from being auto-allocated by Cloud Datastore. rollback POST /v1beta3/projects/{projectId}:rollback Rolls back a transaction. runAggregationQuery POST /v1beta3/projects/{projectId}:runAggregationQuery Runs an aggregation query. runQuery POST /v1beta3/projects/{projectId}:runQuery Queries for entities.
- This service provides the following discovery documents: https://datastore.googleapis.com/$discovery/rest?version=v1 https://datastore.googleapis.com/$discovery/rest?version=v1beta3 Service endpoint A service endpoint is a base URL that specifies the network address of an API service.
- This service has the following service endpoint and all URIs below are relative to this service endpoint: https://datastore.googleapis.com Regional service endpoint A regional service endpoint is a base URL that specifies the network address of an API service in a single region.

### Cloud Firestore API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/firestore/docs/reference/rest](https://docs.cloud.google.com/firestore/docs/reference/rest)
- Source ID: `site-api-reference`
- Final score: 58
- Re-rank relevance: N/A

Evidence snippets:
- Select a location to see its regional service endpoint for this service. global africa-south1 asia-east1 asia-east2 asia-northeast1 asia-northeast2 asia-northeast3 asia-south1 asia-south2 asia-southeast1 asia-southeast2 asia-southeast3 australia-southeast1 australia-southeast2 europe-central2 europe-north1 europe-north2 europe-southwest1 europe-west1 europe-west10 europe-west12 europe-west2 europe-west3 europe-west4 europe-west6 europe-west8 europe-west9 me-central1 me-central2 me-west1 northamerica-northeast1 northamerica-northeast2 northamerica-south1 southamerica-east1 southamerica-west1 us-central1 us-east1 us-east4 us-east5 us-south1 us-west1 us-west2 us-west3 us-west4 eu us https://firestore.googleapis.com REST Resource: v1beta2.projects.databases Methods exportDocuments POST /v1beta2/{name=projects/ /databases/ }:exportDocuments Exports a copy of all or a subset of documents from Google Cloud Firestore to another storage system, such as Google Cloud Storage. importDocuments POST /v1beta2/{name=projects/ /databases/ }:importDocuments Imports documents into Google Cloud Firestore.
- This service provides the following discovery documents: https://firestore.googleapis.com/$discovery/rest?version=v1 https://firestore.googleapis.com/$discovery/rest?version=v1beta2 https://firestore.googleapis.com/$discovery/rest?version=v1beta1 Service endpoint A service endpoint is a base URL that specifies the network address of an API service.
- This service has the following service endpoint and all URIs below are relative to this service endpoint: https://firestore.googleapis.com Regional service endpoint A regional service endpoint is a base URL that specifies the network address of an API service in a single region.
- A service that is available in multiple regions might have multiple regional endpoints.

