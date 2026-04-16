---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:44:19.088Z"
product_name: "Cloud Healthcare API"
product_slug: "cloud-healthcare-api"
feature_name: "Single-region availability in us-east1 (South Carolina)"
feature_slug: "single-region-availability-in-us-east1-south-carolina"
latest_feature_date: "2022-03-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/healthcare-api/docs/concepts/regions"
  - "https://docs.cloud.google.com/healthcare-api/docs/requirements"
  - "https://docs.cloud.google.com/healthcare-api/docs/controlling-access"
keywords:
  - "single"
  - "region"
  - "availability"
  - "us"
  - "east1"
  - "south"
  - "carolina"
  - "healthcare"
---

# Single-region availability in us-east1 (South Carolina)

Product: Cloud Healthcare API
Coverage: MEDIUM

## Step 02 Summary

Cloud Healthcare API adds single-region support in the us-east1 (South Carolina) region.

## Extended Definition

Cloud Healthcare API adds single-region support in the us-east1 (South Carolina) region.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/healthcare-api/docs/concepts/regions](https://docs.cloud.google.com/healthcare-api/docs/concepts/regions)
- [https://docs.cloud.google.com/healthcare-api/docs/requirements](https://docs.cloud.google.com/healthcare-api/docs/requirements)
- [https://docs.cloud.google.com/healthcare-api/docs/controlling-access](https://docs.cloud.google.com/healthcare-api/docs/controlling-access)

## Supporting Pages

### Regions \_|\_ Cloud Healthcare API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/healthcare-api/docs/concepts/regions](https://docs.cloud.google.com/healthcare-api/docs/concepts/regions)
- Source ID: `site-docs-root-2`
- Final score: 155
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The Cloud Healthcare API is available in the following regions: Regional locations Region name Region description Americas northamerica-northeast1 Montréal northamerica-northeast2 Toronto us-central1 Iowa us-east1 South Carolina us-east4 North Virginia us-west1 Oregon us-west2 Los Angeles us-west3 Salt Lake City southamerica-east1 São Paulo Asia Pacific asia-east1 Taiwan asia-east2 Hong Kong asia-northeast1 Tokyo asia-northeast2 Osaka asia-northeast3 Seoul asia-south1 Mumbai asia-southeast1 Singapore asia-southeast2 Jakarta australia-southeast1 Sydney australia-southeast2 Melbourne Europe europe-north1 Finland europe-west2 London europe-west3 Frankfurt europe-west4 Netherlands europe-west6 Zurich Middle East me-west1 Tel Aviv me-central1 Doha me-central2 Dammam Multi-regional locations Multi-region name Multi-region description us Data centers in the United States eu Data centers within member states of the European Union Location quota requests You can request a quota increase for the Cloud Healthcare API in a specific region , or in a multi-region location .
- Home Documentation Industry solutions Cloud Healthcare API Guides Send feedback Regions Stay organized with collections Save and categorize content based on your preferences.
- Available regions The Cloud Healthcare API supports a subset of the full list of Google Cloud locations .
- To request a quota increase in a single region: In your quota increase request, specify the region.

### Requirements \_|\_ Cloud Healthcare API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/healthcare-api/docs/requirements](https://docs.cloud.google.com/healthcare-api/docs/requirements)
- Source ID: `site-docs-reference-2`
- Final score: 110
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Regions and versions Cloud regions Only these Google Cloud regions are available: Regional locations Region name Region description Americas northamerica-northeast1 Montréal northamerica-northeast2 Toronto us-central1 Iowa us-east1 South Carolina us-east4 North Virginia us-west1 Oregon us-west2 Los Angeles us-west3 Salt Lake City southamerica-east1 São Paulo Asia Pacific asia-east1 Taiwan asia-east2 Hong Kong asia-northeast1 Tokyo asia-northeast2 Osaka asia-northeast3 Seoul asia-south1 Mumbai asia-southeast1 Singapore asia-southeast2 Jakarta australia-southeast1 Sydney australia-southeast2 Melbourne Europe europe-north1 Finland europe-west2 London europe-west3 Frankfurt europe-west4 Netherlands europe-west6 Zurich Middle East me-west1 Tel Aviv me-central1 Doha me-central2 Dammam Multi-regional locations Multi-region name Multi-region description us Data centers in the United States eu Data centers in Europe Google Cloud CLI Cloud Healthcare API requires version 236.0.0 or higher of the Google Cloud CLI .
- Home Documentation Industry solutions Cloud Healthcare API Resources Send feedback Requirements Stay organized with collections Save and categorize content based on your preferences.
- Permitted characters and size requirements Resources in the Cloud Healthcare API are limited to certain characters and might be limited to certain lengths.
- This page lists Cloud Healthcare API requirements and related information.

### "Controlling access to Cloud Healthcare API resources \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/healthcare-api/docs/controlling-access](https://docs.cloud.google.com/healthcare-api/docs/controlling-access)
- Source ID: `site-docs-root-2`
- Final score: 60
- Re-rank relevance: N/A

Evidence snippets:
- GoogleAuth ({ scopes : [ 'https://www.googleapis.com/auth/cloud-platform' ], }), }); const setConsentStoreIamPolicy = async () = > { // TODO(developer): uncomment these lines before running the sample // const cloudRegion = 'us-central1'; // const projectId = 'adjective-noun-123'; // const datasetId = 'my-dataset'; // const consentStoreId = 'my-consent-store'; // const member = 'user:example@gmail.com'; // const role = 'roles/healthcare.consentStoreViewer'; const resource = projects/ ${ projectId } /locations/ ${ cloudRegion } /datasets/ ${ datasetId } /consentStores/ ${ consentStoreId } ; const request = { resource , resource : { policy : { bindings : [ { members : member , role : role , }, ], }, }, }; const consentStore = await healthcare . projects . locations . datasets . consentStores . setIamPolicy ( request ); console . log ( 'Set consent store IAM policy:' , JSON . stringify ( consentStore . data , null , 2 ) ); }; setConsentStoreIamPolicy (); Python def set consent store iam policy ( project id : str , location : str , dataset id : str , consent store id : str , member , role , etag = None , ): """Sets the IAM policy for the specified consent store.
- GoogleAuth ({ scopes : [ 'https://www.googleapis.com/auth/cloud-platform' ], }), }); const setDatasetIamPolicy = async () = > { // TODO(developer): uncomment these lines before running the sample // const cloudRegion = 'us-central1'; // const projectId = 'adjective-noun-123'; // const datasetId = 'my-dataset'; // const member = 'user:example@gmail.com'; // const role = 'roles/healthcare.datasetViewer'; const resource = projects/ ${ projectId } /locations/ ${ cloudRegion } /datasets/ ${ datasetId } ; const request = { resource , resource : { policy : { bindings : [ { members : member , role : role , }, ], }, }, }; const dataset = await healthcare . projects . locations . datasets . setIamPolicy ( request ); console . log ( 'Set dataset IAM policy:' , JSON . stringify ( dataset . data , null , 2 ) ); }; setDatasetIamPolicy (); Python Imports the Dict and Any types for runtime type hints. from typing import Any , Dict def set dataset iam policy ( project id : str , location : str , dataset id : str , member : str , role : str , etag : str = None , ) - > Dict [ str , Any ]: """Sets the IAM policy for the specified dataset.
- GoogleAuth ({ scopes : [ 'https://www.googleapis.com/auth/cloud-platform' ], }), }); const setDicomStoreIamPolicy = async () = > { // TODO(developer): uncomment these lines before running the sample // const cloudRegion = 'us-central1'; // const projectId = 'adjective-noun-123'; // const datasetId = 'my-dataset'; // const dicomStoreId = 'my-dicom-store'; // const member = 'user:example@gmail.com'; // const role = 'roles/healthcare.dicomStoreViewer'; const resource = projects/ ${ projectId } /locations/ ${ cloudRegion } /datasets/ ${ datasetId } /dicomStores/ ${ dicomStoreId } ; const request = { resource , resource : { policy : { bindings : [ { members : member , role : role , }, ], }, }, }; const dicomStore = await healthcare . projects . locations . datasets . dicomStores . setIamPolicy ( request ); console . log ( 'Set DICOM store IAM policy:' , JSON . stringify ( dicomStore . data , null , 2 ) ); }; setDicomStoreIamPolicy (); Python def set dicom store iam policy ( project id , location , dataset id , dicom store id , member , role , etag = None ): """Sets the IAM policy for the specified DICOM store.
- GoogleAuth ({ scopes : [ 'https://www.googleapis.com/auth/cloud-platform' ], }), }); const setHl7v2StoreIamPolicy = async () = > { // TODO(developer): uncomment these lines before running the sample // const cloudRegion = 'us-central1'; // const projectId = 'adjective-noun-123'; // const datasetId = 'my-dataset'; // const dicomStoreId = 'my-dicom-store'; // const member = 'user:example@gmail.com'; // const role = 'roles/healthcare.hl7V2StoreViewer'; const resource = projects/ ${ projectId } /locations/ ${ cloudRegion } /datasets/ ${ datasetId } /hl7V2Stores/ ${ hl7v2StoreId } ; const request = { resource , resource : { policy : { bindings : [ { members : member , role : role , }, ], }, }, }; const hl7v2Store = await healthcare . projects . locations . datasets . hl7V2Stores . setIamPolicy ( request ); console . log ( 'Set HL7v2 store IAM policy:' , JSON . stringify ( hl7v2Store . data , null , 2 ) ); }; setHl7v2StoreIamPolicy (); Python def set hl7v2 store iam policy ( project id , location , dataset id , hl7v2 store id , member , role , etag = None ): """Sets the IAM policy for the specified HL7v2 store.

