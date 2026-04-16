---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:44:19.115Z"
product_name: "Cloud Healthcare API"
product_slug: "cloud-healthcare-api"
feature_name: "Cloud Healthcare API single-region support in australia-southeast1"
feature_slug: "cloud-healthcare-api-single-region-support-in-australia-southeast1"
latest_feature_date: "2020-10-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/healthcare-api/docs/concepts/regions"
  - "https://docs.cloud.google.com/healthcare-api/docs/requirements"
  - "https://docs.cloud.google.com/healthcare-api/docs/how-tos/dicom"
keywords:
  - "healthcare"
  - "single"
  - "region"
  - "australia"
  - "southeast1"
  - "added"
  - "sydney"
---

# Cloud Healthcare API single-region support in australia-southeast1

Product: Cloud Healthcare API
Coverage: MEDIUM

## Step 02 Summary

The Cloud Healthcare API added single-region support in the australia-southeast1 (Sydney, Australia) region.

## Extended Definition

The Cloud Healthcare API added single-region support in the australia-southeast1 (Sydney, Australia) region.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/healthcare-api/docs/concepts/regions](https://docs.cloud.google.com/healthcare-api/docs/concepts/regions)
- [https://docs.cloud.google.com/healthcare-api/docs/requirements](https://docs.cloud.google.com/healthcare-api/docs/requirements)
- [https://docs.cloud.google.com/healthcare-api/docs/how-tos/dicom](https://docs.cloud.google.com/healthcare-api/docs/how-tos/dicom)

## Supporting Pages

### Regions \_|\_ Cloud Healthcare API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/healthcare-api/docs/concepts/regions](https://docs.cloud.google.com/healthcare-api/docs/concepts/regions)
- Source ID: `site-docs-root-2`
- Final score: 114
- Re-rank relevance: N/A

Evidence snippets:
- The Cloud Healthcare API is available in the following regions: Regional locations Region name Region description Americas northamerica-northeast1 Montréal northamerica-northeast2 Toronto us-central1 Iowa us-east1 South Carolina us-east4 North Virginia us-west1 Oregon us-west2 Los Angeles us-west3 Salt Lake City southamerica-east1 São Paulo Asia Pacific asia-east1 Taiwan asia-east2 Hong Kong asia-northeast1 Tokyo asia-northeast2 Osaka asia-northeast3 Seoul asia-south1 Mumbai asia-southeast1 Singapore asia-southeast2 Jakarta australia-southeast1 Sydney australia-southeast2 Melbourne Europe europe-north1 Finland europe-west2 London europe-west3 Frankfurt europe-west4 Netherlands europe-west6 Zurich Middle East me-west1 Tel Aviv me-central1 Doha me-central2 Dammam Multi-regional locations Multi-region name Multi-region description us Data centers in the United States eu Data centers within member states of the European Union Location quota requests You can request a quota increase for the Cloud Healthcare API in a specific region , or in a multi-region location .
- Home Documentation Industry solutions Cloud Healthcare API Guides Send feedback Regions Stay organized with collections Save and categorize content based on your preferences.
- Available regions The Cloud Healthcare API supports a subset of the full list of Google Cloud locations .
- To request a quota increase in a single region: In your quota increase request, specify the region.

### Requirements \_|\_ Cloud Healthcare API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/healthcare-api/docs/requirements](https://docs.cloud.google.com/healthcare-api/docs/requirements)
- Source ID: `site-docs-reference-2`
- Final score: 73
- Re-rank relevance: N/A

Evidence snippets:
- Regions and versions Cloud regions Only these Google Cloud regions are available: Regional locations Region name Region description Americas northamerica-northeast1 Montréal northamerica-northeast2 Toronto us-central1 Iowa us-east1 South Carolina us-east4 North Virginia us-west1 Oregon us-west2 Los Angeles us-west3 Salt Lake City southamerica-east1 São Paulo Asia Pacific asia-east1 Taiwan asia-east2 Hong Kong asia-northeast1 Tokyo asia-northeast2 Osaka asia-northeast3 Seoul asia-south1 Mumbai asia-southeast1 Singapore asia-southeast2 Jakarta australia-southeast1 Sydney australia-southeast2 Melbourne Europe europe-north1 Finland europe-west2 London europe-west3 Frankfurt europe-west4 Netherlands europe-west6 Zurich Middle East me-west1 Tel Aviv me-central1 Doha me-central2 Dammam Multi-regional locations Multi-region name Multi-region description us Data centers in the United States eu Data centers in Europe Google Cloud CLI Cloud Healthcare API requires version 236.0.0 or higher of the Google Cloud CLI .
- Home Documentation Industry solutions Cloud Healthcare API Resources Send feedback Requirements Stay organized with collections Save and categorize content based on your preferences.
- Permitted characters and size requirements Resources in the Cloud Healthcare API are limited to certain characters and might be limited to certain lengths.
- This page lists Cloud Healthcare API requirements and related information.

### "Creating and managing DICOM stores \_|\_ Cloud Healthcare API \_|\_ Google\

- URL: [https://docs.cloud.google.com/healthcare-api/docs/how-tos/dicom](https://docs.cloud.google.com/healthcare-api/docs/how-tos/dicom)
- Source ID: `site-docs-root`
- Final score: 68
- Re-rank relevance: N/A

Evidence snippets:
- GoogleAuth ({ scopes : [ 'https://www.googleapis.com/auth/cloud-platform' ], }), }); const patchDicomStore = async () = > { // TODO(developer): uncomment these lines before running the sample // const cloudRegion = 'us-central1'; // const projectId = 'adjective-noun-123'; // const datasetId = 'my-dataset'; // const dicomStoreId = 'my-dicom-store'; // const pubsubTopic = 'my-topic' const name = projects/ ${ projectId } /locations/ ${ cloudRegion } /datasets/ ${ datasetId } /dicomStores/ ${ dicomStoreId } ; const request = { name , updateMask : 'notificationConfig' , resource : { notificationConfig : { pubsubTopic : projects/ ${ projectId } /topics/ ${ pubsubTopic } , }, }, }; await healthcare . projects . locations . datasets . dicomStores . patch ( request ); console . log ( Patched DICOM store ${ dicomStoreId } with Cloud Pub/Sub topic ${ pubsubTopic } ); }; patchDicomStore (); Python def patch dicom store ( project id , location , dataset id , dicom store id , pubsub topic ): """Updates the DICOM store.
- GoogleAuth ({ scopes : [ 'https://www.googleapis.com/auth/cloud-platform' ], }), }); const createDicomStore = async () = > { // TODO(developer): uncomment these lines before running the sample // const cloudRegion = 'us-central1'; // const projectId = 'adjective-noun-123'; // const datasetId = 'my-dataset'; // const dicomStoreId = 'my-dicom-store'; const parent = projects/ ${ projectId } /locations/ ${ cloudRegion } /datasets/ ${ datasetId } ; const request = { parent , dicomStoreId }; await healthcare . projects . locations . datasets . dicomStores . create ( request ); console . log ( Created DICOM store: ${ dicomStoreId } ); }; createDicomStore (); Python def create dicom store ( project id , location , dataset id , dicom store id ): """Creates a new DICOM store within the parent dataset.
- GoogleAuth ({ scopes : [ 'https://www.googleapis.com/auth/cloud-platform' ], }), }); const deleteDicomStore = async () = > { // TODO(developer): uncomment these lines before running the sample // const cloudRegion = 'us-central1'; // const projectId = 'adjective-noun-123'; // const datasetId = 'my-dataset'; // const dicomStoreId = 'my-dicom-store'; const name = projects/ ${ projectId } /locations/ ${ cloudRegion } /datasets/ ${ datasetId } /dicomStores/ ${ dicomStoreId } ; const request = { name }; await healthcare . projects . locations . datasets . dicomStores . delete ( request ); console . log ( Deleted DICOM store: ${ dicomStoreId } ); }; deleteDicomStore (); Python def delete dicom store ( project id , location , dataset id , dicom store id ): """Deletes the specified DICOM store.
- GoogleAuth ({ scopes : [ 'https://www.googleapis.com/auth/cloud-platform' ], }), }); const getDicomStore = async () = > { // TODO(developer): uncomment these lines before running the sample // const cloudRegion = 'us-central1'; // const projectId = 'adjective-noun-123'; // const datasetId = 'my-dataset'; // const dicomStoreId = 'my-dicom-store'; const name = projects/ ${ projectId } /locations/ ${ cloudRegion } /datasets/ ${ datasetId } /dicomStores/ ${ dicomStoreId } ; const request = { name }; const dicomStore = await healthcare . projects . locations . datasets . dicomStores . get ( request ); console . log ( dicomStore . data ); }; getDicomStore (); Python def get dicom store ( project id , location , dataset id , dicom store id ): """Gets the specified DICOM store.

