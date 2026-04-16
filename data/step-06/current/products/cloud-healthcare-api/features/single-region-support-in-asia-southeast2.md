---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:44:19.081Z"
product_name: "Cloud Healthcare API"
product_slug: "cloud-healthcare-api"
feature_name: "Single-region support in asia-southeast2"
feature_slug: "single-region-support-in-asia-southeast2"
latest_feature_date: "2022-06-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/healthcare-api/docs/concepts/regions"
  - "https://docs.cloud.google.com/healthcare-api/docs/requirements"
  - "https://docs.cloud.google.com/healthcare-api/docs/how-tos/dicomweb"
keywords:
  - "single"
  - "region"
  - "asia"
  - "southeast2"
  - "healthcare"
  - "adds"
  - "availability"
  - "jakarta"
---

# Single-region support in asia-southeast2

Product: Cloud Healthcare API
Coverage: MEDIUM

## Step 02 Summary

Cloud Healthcare API adds single-region availability for the asia-southeast2 (Jakarta, Indonesia) region; Cloud Healthcare API adds single-region availability for the asia-southeast2 (Jakarta, Indonesia) region.

## Extended Definition

Cloud Healthcare API adds single-region availability for the asia-southeast2 (Jakarta, Indonesia) region; Cloud Healthcare API adds single-region availability for the asia-southeast2 (Jakarta, Indonesia) region.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/healthcare-api/docs/concepts/regions](https://docs.cloud.google.com/healthcare-api/docs/concepts/regions)
- [https://docs.cloud.google.com/healthcare-api/docs/requirements](https://docs.cloud.google.com/healthcare-api/docs/requirements)
- [https://docs.cloud.google.com/healthcare-api/docs/how-tos/dicomweb](https://docs.cloud.google.com/healthcare-api/docs/how-tos/dicomweb)

## Supporting Pages

### Regions \_|\_ Cloud Healthcare API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/healthcare-api/docs/concepts/regions](https://docs.cloud.google.com/healthcare-api/docs/concepts/regions)
- Source ID: `site-docs-root-2`
- Final score: 142
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
- Final score: 87
- Re-rank relevance: N/A

Evidence snippets:
- Regions and versions Cloud regions Only these Google Cloud regions are available: Regional locations Region name Region description Americas northamerica-northeast1 Montréal northamerica-northeast2 Toronto us-central1 Iowa us-east1 South Carolina us-east4 North Virginia us-west1 Oregon us-west2 Los Angeles us-west3 Salt Lake City southamerica-east1 São Paulo Asia Pacific asia-east1 Taiwan asia-east2 Hong Kong asia-northeast1 Tokyo asia-northeast2 Osaka asia-northeast3 Seoul asia-south1 Mumbai asia-southeast1 Singapore asia-southeast2 Jakarta australia-southeast1 Sydney australia-southeast2 Melbourne Europe europe-north1 Finland europe-west2 London europe-west3 Frankfurt europe-west4 Netherlands europe-west6 Zurich Middle East me-west1 Tel Aviv me-central1 Doha me-central2 Dammam Multi-regional locations Multi-region name Multi-region description us Data centers in the United States eu Data centers in Europe Google Cloud CLI Cloud Healthcare API requires version 236.0.0 or higher of the Google Cloud CLI .
- Home Documentation Industry solutions Cloud Healthcare API Resources Send feedback Requirements Stay organized with collections Save and categorize content based on your preferences.
- Permitted characters and size requirements Resources in the Cloud Healthcare API are limited to certain characters and might be limited to certain lengths.
- This page lists Cloud Healthcare API requirements and related information.

### "Using the DICOMweb standard \_|\_ Cloud Healthcare API \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/healthcare-api/docs/how-tos/dicomweb](https://docs.cloud.google.com/healthcare-api/docs/how-tos/dicomweb)
- Source ID: `site-docs-root`
- Final score: 68
- Re-rank relevance: N/A

Evidence snippets:
- GoogleAuth ({ scopes : [ 'https://www.googleapis.com/auth/cloud-platform' ], }), }); const fs = require ( 'fs' ); const util = require ( 'util' ); const writeFile = util . promisify ( fs . writeFile ); const fileName = 'instance file.dcm' ; const dicomWebRetrieveInstance = async () = > { // TODO(developer): uncomment these lines before running the sample // const cloudRegion = 'us-central1'; // const projectId = 'adjective-noun-123'; // const datasetId = 'my-dataset'; // const dicomStoreId = 'my-dicom-store'; // const studyUid = '1.3.6.1.4.1.5062.55.1.2270943358.716200484.1363785608958.61.0'; // const seriesUid = '2.24.52329571877967561426579904912379710633'; // const instanceUid = '1.3.6.2.4.2.14619.5.2.1.6280.6001.129311971280445372188125744148'; const parent = projects/ ${ projectId } /locations/ ${ cloudRegion } /datasets/ ${ datasetId } /dicomStores/ ${ dicomStoreId } ; const dicomWebPath = studies/ ${ studyUid } /series/ ${ seriesUid } /instances/ ${ instanceUid } ; const request = { parent , dicomWebPath }; const instance = await healthcare . projects . locations . datasets . dicomStores . studies . series . instances . retrieveInstance ( request , { headers : { Accept : 'application/dicom; transfer-syntax= ' }, responseType : 'arraybuffer' , } ); const fileBytes = Buffer . from ( instance . data ); await writeFile ( fileName , fileBytes ); console . log ( Retrieved DICOM instance and saved to ${ fileName } in current directory ); }; dicomWebRetrieveInstance (); Python def dicomweb retrieve instance ( project id , location , dataset id , dicom store id , study uid , series uid , instance uid , ): """Handles the GET requests specified in the DICOMweb standard.
- GoogleAuth ({ scopes : [ 'https://www.googleapis.com/auth/cloud-platform' ], }), }); const fs = require ( 'fs' ); const util = require ( 'util' ); const writeFile = util . promisify ( fs . writeFile ); const fileName = 'rendered image.png' ; const dicomWebRetrieveRendered = async () = > { // TODO(developer): uncomment these lines before running the sample // const cloudRegion = 'us-central1'; // const projectId = 'adjective-noun-123'; // const datasetId = 'my-dataset'; // const dicomStoreId = 'my-dicom-store'; // const studyUid = '1.3.6.1.4.1.5062.55.1.2270943358.716200484.1363785608958.61.0'; // const seriesUid = '2.24.52329571877967561426579904912379710633'; // const instanceUid = '1.3.6.2.4.2.14619.5.2.1.6280.6001.129311971280445372188125744148'; const parent = projects/ ${ projectId } /locations/ ${ cloudRegion } /datasets/ ${ datasetId } /dicomStores/ ${ dicomStoreId } ; const dicomWebPath = studies/ ${ studyUid } /series/ ${ seriesUid } /instances/ ${ instanceUid } /rendered ; const request = { parent , dicomWebPath }; const rendered = await healthcare . projects . locations . datasets . dicomStores . studies . series . instances . retrieveRendered ( request , { headers : { Accept : 'image/png' }, responseType : 'arraybuffer' , } ); const fileBytes = Buffer . from ( rendered . data ); await writeFile ( fileName , fileBytes ); console . log ( Retrieved rendered image and saved to ${ fileName } in current directory ); }; dicomWebRetrieveRendered (); Python def dicomweb retrieve rendered ( project id , location , dataset id , dicom store id , study uid , series uid , instance uid , ): """Handles the GET requests specified in the DICOMweb standard.
- GoogleAuth ({ scopes : [ 'https://www.googleapis.com/auth/cloud-platform' ], }), }); const fs = require ( 'fs' ); const util = require ( 'util' ); const writeFile = util . promisify ( fs . writeFile ); // When specifying the output file, use an extension like ".multipart." // Then, parse the downloaded multipart file to get each individual // DICOM file. const fileName = 'study file.multipart' ; const dicomWebRetrieveStudy = async () = > { // TODO(developer): uncomment these lines before running the sample // const cloudRegion = 'us-central1'; // const projectId = 'adjective-noun-123'; // const datasetId = 'my-dataset'; // const dicomStoreId = 'my-dicom-store'; // const studyUid = '1.3.6.1.4.1.5062.55.1.2270943358.716200484.1363785608958.61.0'; const parent = projects/ ${ projectId } /locations/ ${ cloudRegion } /datasets/ ${ datasetId } /dicomStores/ ${ dicomStoreId } ; const dicomWebPath = studies/ ${ studyUid } ; const request = { parent , dicomWebPath }; const study = await healthcare . projects . locations . datasets . dicomStores . studies . retrieveStudy ( request , { headers : { Accept : 'multipart/related; type=application/dicom; transfer-syntax= ' , }, responseType : 'arraybuffer' , } ); const fileBytes = Buffer . from ( study . data ); await writeFile ( fileName , fileBytes ); console . log ( Retrieved study and saved to ${ fileName } in current directory ); }; dicomWebRetrieveStudy (); Python def dicomweb retrieve study ( project id , location , dataset id , dicom store id , study uid ): """Handles the GET requests specified in the DICOMweb standard.
- GoogleAuth ({ scopes : [ 'https://www.googleapis.com/auth/cloud-platform' ], }), }); const fs = require ( 'fs' ); const dicomWebStoreInstance = async () = > { // TODO(developer): uncomment these lines before running the sample // const cloudRegion = 'us-central1'; // const projectId = 'adjective-noun-123'; // const datasetId = 'my-dataset'; // const dicomStoreId = 'my-dicom-store'; // const dcmFile = 'file.dcm'; const parent = projects/ ${ projectId } /locations/ ${ cloudRegion } /datasets/ ${ datasetId } /dicomStores/ ${ dicomStoreId } ; const dicomWebPath = 'studies' ; // Use a stream because other types of reads overwrite the client's HTTP // headers and cause storeInstances to fail. const binaryData = fs . createReadStream ( dcmFile ); const request = { parent , dicomWebPath , requestBody : binaryData , }; const instance = await healthcare . projects . locations . datasets . dicomStores . storeInstances ( request , { headers : { 'Content-Type' : 'application/dicom' , Accept : 'application/dicom+json' , }, } ); console . log ( 'Stored DICOM instance:\n' , JSON . stringify ( instance . data )); }; dicomWebStoreInstance (); Python def dicomweb store instance ( project id , location , dataset id , dicom store id , dcm file ): """Handles the POST requests specified in the DICOMweb standard.

