---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:17.883Z"
product_name: "Firestore"
product_slug: "firestore"
feature_name: "Firestore support for asia-south2 region"
feature_slug: "firestore-support-for-asia-south2-region"
latest_feature_date: "2023-05-23"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/firestore/docs/locations"
  - "https://docs.cloud.google.com/firestore/docs/reference/rest"
  - "https://docs.cloud.google.com/datastore/docs/reference/data/rest"
keywords:
  - "firestore"
  - "asia"
  - "south2"
  - "region"
  - "available"
  - "delhi"
---

# Firestore support for asia-south2 region

Product: Firestore
Coverage: LOW

## Step 02 Summary

Firestore is available in the asia-south2 (Delhi) region.

## Extended Definition

Firestore is available in the asia-south2 (Delhi) region.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/firestore/docs/locations](https://docs.cloud.google.com/firestore/docs/locations)
- [https://docs.cloud.google.com/firestore/docs/reference/rest](https://docs.cloud.google.com/firestore/docs/reference/rest)
- [https://docs.cloud.google.com/datastore/docs/reference/data/rest](https://docs.cloud.google.com/datastore/docs/reference/data/rest)

## Supporting Pages

### Locations \_|\_ Firestore in Native mode \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/firestore/docs/locations](https://docs.cloud.google.com/firestore/docs/locations)
- Source ID: `site-docs-reference`
- Final score: 32
- Re-rank relevance: N/A

Evidence snippets:
- Firestore supports the following multi-region locations: Standard edition Multi-region name Multi-region description Read-Write regions Witness region eur3 Europe europe-west1 (Belgium), europe-west4 (Netherlands) europe-north1 (Finland) nam5 United States (Central) us-central1 (Iowa), us-central2 (Oklahoma—private GCP region) us-east1 (South Carolina) nam7 United States (Central and East) us-central1 (Iowa), us-east4 (Northern Virginia) us-central2 (Oklahoma—private Google Cloud region) Enterprise edition Multi-region name Multi-region description Read-Write regions Witness region eur3 Europe europe-west1 (Belgium), europe-west4 (Netherlands) europe-north1 (Finland) nam5 United States (Central) us-central1 (Iowa), us-central2 (Oklahoma—private GCP region) us-east1 (South Carolina) nam7 United States (Central and East) us-central1 (Iowa), us-east4 (Northern Virginia) us-central2 (Oklahoma—private Google Cloud region) Note: If your project already has an App Engine app with a location of either us-central or europe-west , then your default Firestore database will be considered multi-regional .
- For a comprehensive explanation of pricing per region and per region type, see: Firestore Standard edition pricing Firestore Enterprise edition pricing View the location of your databases Use one of the following methods to view the location setting for your databases: Run the gcloud firestore databases list command.
- Johannesburg Location SLA Your Firestore location type determines the Service Level Agreement (SLA) uptime percentage: Covered service Monthly uptime percentage Firestore Multi-Region = 99.999% Firestore Regional = 99.99% Location pricing Your Firestore location determines the cost of database operations.
- Delhi asia-southeast1 Singapore asia-southeast2 Jakarta asia-east2 Hong Kong asia-east1 Taiwan asia-northeast1 Tokyo asia-northeast2 Osaka asia-northeast3 Seoul Australia australia-southeast1 Sydney australia-southeast2 This location does not support App Engine.

### Cloud Firestore API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/firestore/docs/reference/rest](https://docs.cloud.google.com/firestore/docs/reference/rest)
- Source ID: `site-api-reference`
- Final score: 30
- Re-rank relevance: N/A

Evidence snippets:
- Select a location to see its regional service endpoint for this service. global africa-south1 asia-east1 asia-east2 asia-northeast1 asia-northeast2 asia-northeast3 asia-south1 asia-south2 asia-southeast1 asia-southeast2 asia-southeast3 australia-southeast1 australia-southeast2 europe-central2 europe-north1 europe-north2 europe-southwest1 europe-west1 europe-west10 europe-west12 europe-west2 europe-west3 europe-west4 europe-west6 europe-west8 europe-west9 me-central1 me-central2 me-west1 northamerica-northeast1 northamerica-northeast2 northamerica-south1 southamerica-east1 southamerica-west1 us-central1 us-east1 us-east4 us-east5 us-south1 us-west1 us-west2 us-west3 us-west4 eu us https://firestore.googleapis.com REST Resource: v1beta2.projects.databases Methods exportDocuments POST /v1beta2/{name=projects/ /databases/ }:exportDocuments Exports a copy of all or a subset of documents from Google Cloud Firestore to another storage system, such as Google Cloud Storage. importDocuments POST /v1beta2/{name=projects/ /databases/ }:importDocuments Imports documents into Google Cloud Firestore.
- This service has the following service endpoint and all URIs below are relative to this service endpoint: https://firestore.googleapis.com Regional service endpoint A regional service endpoint is a base URL that specifies the network address of an API service in a single region.
- A service that is available in multiple regions might have multiple regional endpoints.
- REST Resource: v1.projects.databases Methods bulkDeleteDocuments POST /v1/{name=projects/ /databases/ }:bulkDeleteDocuments Bulk deletes a subset of documents from Google Cloud Firestore. clone POST /v1/{parent=projects/ }/databases:clone Creates a new database by cloning an existing one. create POST /v1/{parent=projects/ }/databases Create a database. delete DELETE /v1/{name=projects/ /databases/ } Deletes a database. exportDocuments POST /v1/{name=projects/ /databases/ }:exportDocuments Exports a copy of all or a subset of documents from Google Cloud Firestore to another storage system, such as Google Cloud Storage. get GET /v1/{name=projects/ /databases/ } Gets information about a database. importDocuments POST /v1/{name=projects/ /databases/ }:importDocuments Imports documents into Google Cloud Firestore. list GET /v1/{parent=projects/ }/databases List all the databases in the project. patch PATCH /v1/{database.name=projects/ /databases/ } Updates a database. restore POST /v1/{parent=projects/ }/databases:restore Creates a new database by restoring from an existing backup.

### Cloud Datastore API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastore/docs/reference/data/rest](https://docs.cloud.google.com/datastore/docs/reference/data/rest)
- Source ID: `site-docs-root`
- Final score: 28
- Re-rank relevance: N/A

Evidence snippets:
- Select a location to see its regional service endpoint for this service. global africa-south1 asia-east1 asia-east2 asia-northeast1 asia-northeast2 asia-northeast3 asia-south1 asia-south2 asia-southeast1 asia-southeast2 asia-southeast3 australia-southeast1 australia-southeast2 europe-central2 europe-north1 europe-north2 europe-southwest1 europe-west1 europe-west10 europe-west12 europe-west2 europe-west3 europe-west4 europe-west6 europe-west8 europe-west9 me-central1 me-central2 me-west1 northamerica-northeast1 northamerica-northeast2 northamerica-south1 southamerica-east1 southamerica-west1 us-central1 us-east1 us-east4 us-east5 us-south1 us-west1 us-west2 us-west3 us-west4 eu us https://datastore.googleapis.com REST Resource: v1beta3.projects Methods allocateIds POST /v1beta3/projects/{projectId}:allocateIds Allocates IDs for the given keys, which is useful for referencing an entity before it is inserted. beginTransaction POST /v1beta3/projects/{projectId}:beginTransaction Begins a new transaction. commit POST /v1beta3/projects/{projectId}:commit Commits a transaction, optionally creating, deleting or modifying some entities. lookup POST /v1beta3/projects/{projectId}:lookup Looks up entities by key. reserveIds POST /v1beta3/projects/{projectId}:reserveIds Prevents the supplied keys' IDs from being auto-allocated by Cloud Datastore. rollback POST /v1beta3/projects/{projectId}:rollback Rolls back a transaction. runAggregationQuery POST /v1beta3/projects/{projectId}:runAggregationQuery Runs an aggregation query. runQuery POST /v1beta3/projects/{projectId}:runQuery Queries for entities.
- A service that is available in multiple regions might have multiple regional endpoints.
- This service has the following service endpoint and all URIs below are relative to this service endpoint: https://datastore.googleapis.com Regional service endpoint A regional service endpoint is a base URL that specifies the network address of an API service in a single region.

