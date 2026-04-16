---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:14:02.765Z"
product_name: "Datastore"
product_slug: "datastore"
feature_name: "Regional and multi-regional Datastore API endpoints"
feature_slug: "regional-and-multi-regional-datastore-api-endpoints"
latest_feature_date: "2026-03-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/datastore/docs/reference/admin/rest"
  - "https://docs.cloud.google.com/datastore/docs/reference/data/rest"
  - "https://docs.cloud.google.com/python/docs/reference/datastore/latest/admin_client"
  - "https://docs.cloud.google.com/datastore/docs/cloud-datastore-best-practices"
keywords:
  - "regional"
  - "and"
  - "multi"
  - "datastore"
  - "api"
  - "endpoints"
  - "can"
  - "be"
---

# Regional and multi-regional Datastore API endpoints

Product: Datastore
Coverage: MEDIUM

## Step 02 Summary

Datastore API endpoints can be targeted regionally or multi-regionally so requests stay within the same location as the database.

## Extended Definition

Datastore API endpoints can be targeted regionally or multi-regionally so requests stay within the same location as the database.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/datastore/docs/reference/admin/rest](https://docs.cloud.google.com/datastore/docs/reference/admin/rest)
- [https://docs.cloud.google.com/datastore/docs/reference/data/rest](https://docs.cloud.google.com/datastore/docs/reference/data/rest)
- [https://docs.cloud.google.com/python/docs/reference/datastore/latest/admin_client](https://docs.cloud.google.com/python/docs/reference/datastore/latest/admin_client)
- [https://docs.cloud.google.com/datastore/docs/cloud-datastore-best-practices](https://docs.cloud.google.com/datastore/docs/cloud-datastore-best-practices)

## Supporting Pages

### Cloud Datastore API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastore/docs/reference/admin/rest](https://docs.cloud.google.com/datastore/docs/reference/admin/rest)
- Source ID: `site-docs-reference`
- Final score: 241
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This service has the following service endpoint and all URIs below are relative to this service endpoint: https://datastore.googleapis.com Regional service endpoint A regional service endpoint is a base URL that specifies the network address of an API service in a single region.
- Select a location to see its regional service endpoint for this service. global africa-south1 asia-east1 asia-east2 asia-northeast1 asia-northeast2 asia-northeast3 asia-south1 asia-south2 asia-southeast1 asia-southeast2 asia-southeast3 australia-southeast1 australia-southeast2 europe-central2 europe-north1 europe-north2 europe-southwest1 europe-west1 europe-west10 europe-west12 europe-west2 europe-west3 europe-west4 europe-west6 europe-west8 europe-west9 me-central1 me-central2 me-west1 northamerica-northeast1 northamerica-northeast2 northamerica-south1 southamerica-east1 southamerica-west1 us-central1 us-east1 us-east4 us-east5 us-south1 us-west1 us-west2 us-west3 us-west4 eu us https://datastore.googleapis.com REST Resource: v1beta1.projects Methods export POST /v1beta1/projects/{projectId}:export Exports a copy of all or a subset of entities from Google Cloud Datastore to another storage system, such as Google Cloud Storage. import POST /v1beta1/projects/{projectId}:import Imports entities into Google Cloud Datastore.
- This service provides the following discovery documents: https://datastore.googleapis.com/$discovery/rest?version=v1 https://datastore.googleapis.com/$discovery/rest?version=v1beta1 Service endpoint A service endpoint is a base URL that specifies the network address of an API service.
- REST Resource: v1beta1.projects REST Resource: v1.projects REST Resource: v1.projects.indexes REST Resource: v1.projects.operations Service: datastore.googleapis.com To call this service, we recommend that you use the Google-provided client libraries .

### Cloud Datastore API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastore/docs/reference/data/rest](https://docs.cloud.google.com/datastore/docs/reference/data/rest)
- Source ID: `site-docs-root`
- Final score: 241
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This service has the following service endpoint and all URIs below are relative to this service endpoint: https://datastore.googleapis.com Regional service endpoint A regional service endpoint is a base URL that specifies the network address of an API service in a single region.
- Select a location to see its regional service endpoint for this service. global africa-south1 asia-east1 asia-east2 asia-northeast1 asia-northeast2 asia-northeast3 asia-south1 asia-south2 asia-southeast1 asia-southeast2 asia-southeast3 australia-southeast1 australia-southeast2 europe-central2 europe-north1 europe-north2 europe-southwest1 europe-west1 europe-west10 europe-west12 europe-west2 europe-west3 europe-west4 europe-west6 europe-west8 europe-west9 me-central1 me-central2 me-west1 northamerica-northeast1 northamerica-northeast2 northamerica-south1 southamerica-east1 southamerica-west1 us-central1 us-east1 us-east4 us-east5 us-south1 us-west1 us-west2 us-west3 us-west4 eu us https://datastore.googleapis.com REST Resource: v1beta3.projects Methods allocateIds POST /v1beta3/projects/{projectId}:allocateIds Allocates IDs for the given keys, which is useful for referencing an entity before it is inserted. beginTransaction POST /v1beta3/projects/{projectId}:beginTransaction Begins a new transaction. commit POST /v1beta3/projects/{projectId}:commit Commits a transaction, optionally creating, deleting or modifying some entities. lookup POST /v1beta3/projects/{projectId}:lookup Looks up entities by key. reserveIds POST /v1beta3/projects/{projectId}:reserveIds Prevents the supplied keys' IDs from being auto-allocated by Cloud Datastore. rollback POST /v1beta3/projects/{projectId}:rollback Rolls back a transaction. runAggregationQuery POST /v1beta3/projects/{projectId}:runAggregationQuery Runs an aggregation query. runQuery POST /v1beta3/projects/{projectId}:runQuery Queries for entities.
- This service provides the following discovery documents: https://datastore.googleapis.com/$discovery/rest?version=v1 https://datastore.googleapis.com/$discovery/rest?version=v1beta3 Service endpoint A service endpoint is a base URL that specifies the network address of an API service.
- REST Resource: v1beta3.projects REST Resource: v1.projects REST Resource: v1.projects.operations Service: datastore.googleapis.com To call this service, we recommend that you use the Google-provided client libraries .

### "Datastore Admin Client \_|\_ Python client libraries \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/python/docs/reference/datastore/latest/admin_client](https://docs.cloud.google.com/python/docs/reference/datastore/latest/admin_client)
- Source ID: `site-python-reference`
- Final score: 237
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import datastore admin v1 def sample export entities(): Create a client client = datastore admin v1.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import datastore admin v1 def sample import entities(): Create a client client = datastore admin v1.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import datastore admin v1 def sample create index(): Create a client client = datastore admin v1.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import datastore admin v1 def sample delete index(): Create a client client = datastore admin v1.

### Cloud Datastore best practices \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastore/docs/cloud-datastore-best-practices](https://docs.cloud.google.com/datastore/docs/cloud-datastore-best-practices)
- Source ID: `site-iam-reference`
- Final score: 222
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If you do have a key or indexed property that will be monotonically increasing then you can prepend a random hash to ensure that the keys are sharded onto multiple tablets.
- Ancestor queries also rapidly scan an entity group with minimal I/O because the entities in an entity group are stored at physically close places on Datastore servers.
- Home Documentation Databases Datastore Guides Send feedback Cloud Datastore best practices Stay organized with collections Save and categorize content based on your preferences.
- For example, consider an application that needs the result of a synchronous lookup() and the results of a query before it can render a response.

