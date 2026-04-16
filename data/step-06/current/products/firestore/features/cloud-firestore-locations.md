---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:17.908Z"
product_name: "Firestore"
product_slug: "firestore"
feature_name: "Cloud Firestore locations"
feature_slug: "cloud-firestore-locations"
latest_feature_date: "2019-04-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/firestore/docs/locations"
  - "https://docs.cloud.google.com/firestore/docs/reference/rest"
  - "https://docs.cloud.google.com/python/docs/reference/firestore/latest/google.cloud.firestore_admin_v1.services.firestore_admin.client.FirestoreAdminClient"
keywords:
  - "firestore"
  - "locations"
  - "added"
  - "asia"
  - "northeast2"
  - "regional"
  - "location"
  - "osaka"
---

# Cloud Firestore locations

Product: Firestore
Coverage: MEDIUM

## Step 02 Summary

Cloud Firestore added support for the asia-northeast2 regional location in Osaka; Cloud Firestore added support for the europe-west6 regional location in Zürich.

## Extended Definition

Cloud Firestore added support for the asia-northeast2 regional location in Osaka; Cloud Firestore added support for the europe-west6 regional location in Zürich.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/firestore/docs/locations](https://docs.cloud.google.com/firestore/docs/locations)
- [https://docs.cloud.google.com/firestore/docs/reference/rest](https://docs.cloud.google.com/firestore/docs/reference/rest)
- [https://docs.cloud.google.com/python/docs/reference/firestore/latest/google.cloud.firestore_admin_v1.services.firestore_admin.client.FirestoreAdminClient](https://docs.cloud.google.com/python/docs/reference/firestore/latest/google.cloud.firestore_admin_v1.services.firestore_admin.client.FirestoreAdminClient)

## Supporting Pages

### Locations \_|\_ Firestore in Native mode \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/firestore/docs/locations](https://docs.cloud.google.com/firestore/docs/locations)
- Source ID: `site-docs-reference`
- Final score: 197
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Firestore supports the following multi-region locations: Standard edition Multi-region name Multi-region description Read-Write regions Witness region eur3 Europe europe-west1 (Belgium), europe-west4 (Netherlands) europe-north1 (Finland) nam5 United States (Central) us-central1 (Iowa), us-central2 (Oklahoma—private GCP region) us-east1 (South Carolina) nam7 United States (Central and East) us-central1 (Iowa), us-east4 (Northern Virginia) us-central2 (Oklahoma—private Google Cloud region) Enterprise edition Multi-region name Multi-region description Read-Write regions Witness region eur3 Europe europe-west1 (Belgium), europe-west4 (Netherlands) europe-north1 (Finland) nam5 United States (Central) us-central1 (Iowa), us-central2 (Oklahoma—private GCP region) us-east1 (South Carolina) nam7 United States (Central and East) us-central1 (Iowa), us-east4 (Northern Virginia) us-central2 (Oklahoma—private Google Cloud region) Note: If your project already has an App Engine app with a location of either us-central or europe-west , then your default Firestore database will be considered multi-regional .
- Delhi asia-southeast1 Singapore asia-southeast2 Jakarta asia-east2 Hong Kong asia-east1 Taiwan asia-northeast1 Tokyo asia-northeast2 Osaka asia-northeast3 Seoul Australia australia-southeast1 Sydney australia-southeast2 This location does not support App Engine.
- Delhi asia-southeast1 Singapore asia-southeast2 Jakarta asia-east2 Hong Kong asia-east1 Taiwan asia-northeast1 Tokyo asia-northeast2 Osaka asia-northeast3 Seoul Australia australia-southeast1 Sydney australia-southeast2 This location does not support App Engine.
- Firestore supports the following regional resource locations: Standard edition Region name Region description North America us-west1 Oregon us-west2 Los Angeles us-west3 Salt Lake City us-west4 Las Vegas us-central1 This location does not support App Engine.

### Cloud Firestore API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/firestore/docs/reference/rest](https://docs.cloud.google.com/firestore/docs/reference/rest)
- Source ID: `site-api-reference`
- Final score: 121
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Select a location to see its regional service endpoint for this service. global africa-south1 asia-east1 asia-east2 asia-northeast1 asia-northeast2 asia-northeast3 asia-south1 asia-south2 asia-southeast1 asia-southeast2 asia-southeast3 australia-southeast1 australia-southeast2 europe-central2 europe-north1 europe-north2 europe-southwest1 europe-west1 europe-west10 europe-west12 europe-west2 europe-west3 europe-west4 europe-west6 europe-west8 europe-west9 me-central1 me-central2 me-west1 northamerica-northeast1 northamerica-northeast2 northamerica-south1 southamerica-east1 southamerica-west1 us-central1 us-east1 us-east4 us-east5 us-south1 us-west1 us-west2 us-west3 us-west4 eu us https://firestore.googleapis.com REST Resource: v1beta2.projects.databases Methods exportDocuments POST /v1beta2/{name=projects/ /databases/ }:exportDocuments Exports a copy of all or a subset of documents from Google Cloud Firestore to another storage system, such as Google Cloud Storage. importDocuments POST /v1beta2/{name=projects/ /databases/ }:importDocuments Imports documents into Google Cloud Firestore.
- REST Resource: v1.projects.locations.backups Methods delete DELETE /v1/{name=projects/ /locations/ /backups/ } Deletes a backup. get GET /v1/{name=projects/ /locations/ /backups/ } Gets information about a backup. list GET /v1/{parent=projects/ /locations/ }/backups Lists all the backups.
- This service has the following service endpoint and all URIs below are relative to this service endpoint: https://firestore.googleapis.com Regional service endpoint A regional service endpoint is a base URL that specifies the network address of an API service in a single region.
- REST Resource: v1.projects.locations Methods get GET /v1/{name=projects/ /locations/ } Gets information about a location. list GET /v1/{name=projects/ }/locations Lists information about the supported locations for this service.

### "Class FirestoreAdminClient (2.23.0) \_|\_ Python client libraries \_|\_\

- URL: [https://docs.cloud.google.com/python/docs/reference/firestore/latest/google.cloud.firestore_admin_v1.services.firestore_admin.client.FirestoreAdminClient](https://docs.cloud.google.com/python/docs/reference/firestore/latest/google.cloud.firestore_admin_v1.services.firestore_admin.client.FirestoreAdminClient)
- Source ID: `site-python-reference`
- Final score: 91
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- A request to list the Firestore Databases in all locations for a project. parent str Required.
- The result type for the operation will be Database A Cloud Firestore Database. collection group path collection group path ( project : str , database : str , collection : str ) - > str Returns a fully-qualified collection group string. common billing account path common billing account path ( billing account : str ) - > str Returns a fully-qualified billing account string. common folder path common folder path ( folder : str ) - > str Returns a fully-qualified folder string. common location path common location path ( project : str , location : str ) - > str Returns a fully-qualified location string. common organization path common organization path ( organization : str ) - > str Returns a fully-qualified organization string. common project path common project path ( project : str ) - > str Returns a fully-qualified project string. create backup schedule create backup schedule ( request : typing .
- Returns Type Description google.cloud.firestore admin v1.types.ListUserCredsResponse The response for FirestoreAdmin.ListUserCreds][google.firestore.admin.v1.FirestoreAdmin.ListUserCreds] . location path location path ( project : str , location : str ) - > str Returns a fully-qualified location string. operation path operation path ( project : str , database : str , operation : str ) - > str Returns a fully-qualified operation string. parse backup path parse backup path ( path : str ) - > typing .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import firestore admin v1 def sample create backup schedule(): Create a client client = firestore admin v1.

