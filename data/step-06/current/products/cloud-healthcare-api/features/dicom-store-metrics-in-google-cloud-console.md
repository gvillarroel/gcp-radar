---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:44:19.051Z"
product_name: "Cloud Healthcare API"
product_slug: "cloud-healthcare-api"
feature_name: "DICOM store metrics in Google Cloud Console"
feature_slug: "dicom-store-metrics-in-google-cloud-console"
latest_feature_date: "2024-02-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/healthcare-api/docs/dicom-store-metrics"
  - "https://docs.cloud.google.com/healthcare-api/docs/how-tos/dicom"
  - "https://docs.cloud.google.com/healthcare-api/docs/controlling-access"
keywords:
  - "dicom"
  - "store"
  - "metrics"
  - "console"
  - "users"
  - "can"
  - "view"
  - "directly"
---

# DICOM store metrics in Google Cloud Console

Product: Cloud Healthcare API
Coverage: MEDIUM

## Step 02 Summary

Users can view DICOM store metrics directly from the Google Cloud console.

## Extended Definition

Users can view DICOM store metrics directly from the Google Cloud console.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/healthcare-api/docs/dicom-store-metrics](https://docs.cloud.google.com/healthcare-api/docs/dicom-store-metrics)
- [https://docs.cloud.google.com/healthcare-api/docs/how-tos/dicom](https://docs.cloud.google.com/healthcare-api/docs/how-tos/dicom)
- [https://docs.cloud.google.com/healthcare-api/docs/controlling-access](https://docs.cloud.google.com/healthcare-api/docs/controlling-access)

## Supporting Pages

### "View DICOM store, DICOM study, and DICOM series metrics \_|\_ Cloud Healthcare\

- URL: [https://docs.cloud.google.com/healthcare-api/docs/dicom-store-metrics](https://docs.cloud.google.com/healthcare-api/docs/dicom-store-metrics)
- Source ID: `site-docs-root-2`
- Final score: 272
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Console To view DICOM series metrics in the Google Cloud console, see View DICOM store metrics .
- Console To view DICOM study metrics in the Google Cloud console, see View DICOM store metrics .
- You should receive a JSON response similar to the following: Response { "name": "projects/ PROJECT ID /locations/ LOCATION /datasets/ DATASET ID /dicomStores/ DICOM STORE ID ", "studyCount": " STUDY COUNT ", "seriesCount": " SERIES COUNT ", "instanceCount": " INSTANCE COUNT ", "structuredStorageSizeBytes": " STRUCTURED STORAGE BYTES ", "blobStorageSizeBytes": " BLOB STORAGE BYTES ", } View DICOM studies metrics The following samples show how to view DICOM studies metrics.
- You should receive a JSON response similar to the following: Response { "study": "projects/ PROJECT ID /locations/ LOCATION /datasets/ DATASET ID /dicomStores/ DICOM STORE ID /dicomWeb/studies/ STUDY UID ", "seriesCount": " SERIES COUNT ", "instanceCount": " INSTANCE COUNT ", "structuredStorageSizeBytes": " STRUCTURED STORAGE BYTES ", "blobStorageSizeBytes": " BLOB STORAGE BYTES " } View DICOM series metrics The following samples show how to view DICOM series metrics.

### "Creating and managing DICOM stores \_|\_ Cloud Healthcare API \_|\_ Google\

- URL: [https://docs.cloud.google.com/healthcare-api/docs/how-tos/dicom](https://docs.cloud.google.com/healthcare-api/docs/how-tos/dicom)
- Source ID: `site-docs-root`
- Final score: 184
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- See https://github.com/GoogleCloudPlatform/python-docs-samples/tree/main/healthcare/api-client/v1/dicom before running the sample.""" Imports the Google API Discovery Service. from googleapiclient import discovery Imports Python's built-in "json" module import json api version = "v1" service name = "healthcare" Returns an authorized API client by discovering the Healthcare API and using GOOGLE APPLICATION CREDENTIALS environment variable. client = discovery . build ( service name , api version ) TODO(developer): Uncomment these lines and replace with your values. project id = 'my-project' # replace with your GCP project ID location = 'us-central1' # replace with the parent dataset's location dataset id = 'my-dataset' # replace with the DICOM store's parent dataset ID dicom store id = 'my-dicom-store' # replace with the DICOM store's ID dicom store parent = "projects/ {} /locations/ {} /datasets/ {} " . format ( project id , location , dataset id ) dicom store name = f " { dicom store parent } /dicomStores/ { dicom store id } " dicom stores = client . projects () . locations () . datasets () . dicomStores () dicom store = dicom stores . get ( name = dicom store name ) . execute () print ( json . dumps ( dicom store , indent = 2 )) return dicom store Listing the DICOM stores in a dataset The following samples show how to list the DICOM stores in a dataset: Console To view the data stores in a dataset: In the Google Cloud console, go to the Datasets page.
- For more information, see View DICOM store, DICOM study, and DICOM series metrics . gcloud To get details about a DICOM store, run the gcloud healthcare dicom-stores describe command.
- Console To view a DICOM store's details: In the Google Cloud console, go to the Datasets page.
- GoogleAuth ({ scopes : [ 'https://www.googleapis.com/auth/cloud-platform' ], }), }); const patchDicomStore = async () = > { // TODO(developer): uncomment these lines before running the sample // const cloudRegion = 'us-central1'; // const projectId = 'adjective-noun-123'; // const datasetId = 'my-dataset'; // const dicomStoreId = 'my-dicom-store'; // const pubsubTopic = 'my-topic' const name = projects/ ${ projectId } /locations/ ${ cloudRegion } /datasets/ ${ datasetId } /dicomStores/ ${ dicomStoreId } ; const request = { name , updateMask : 'notificationConfig' , resource : { notificationConfig : { pubsubTopic : projects/ ${ projectId } /topics/ ${ pubsubTopic } , }, }, }; await healthcare . projects . locations . datasets . dicomStores . patch ( request ); console . log ( Patched DICOM store ${ dicomStoreId } with Cloud Pub/Sub topic ${ pubsubTopic } ); }; patchDicomStore (); Python def patch dicom store ( project id , location , dataset id , dicom store id , pubsub topic ): """Updates the DICOM store.

### "Controlling access to Cloud Healthcare API resources \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/healthcare-api/docs/controlling-access](https://docs.cloud.google.com/healthcare-api/docs/controlling-access)
- Source ID: `site-docs-root-2`
- Final score: 165
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- A member can be any of: - allUsers, that is, anyone - allAuthenticatedUsers, anyone authenticated with a Google account - user:email, as in 'user:somebody@example.com' - group:email, as in 'group:admins@example.com' - domain:domainname, as in 'domain:example.com' - serviceAccount:email, as in 'serviceAccount:my-other-app@appspot.gserviceaccount.com' A role can be any IAM role, such as 'roles/viewer', 'roles/owner', or 'roles/editor' See https://github.com/GoogleCloudPlatform/python-docs-samples/tree/main/healthcare/api-client/v1/dicom before running the sample.""" Imports the Google API Discovery Service. from googleapiclient import discovery api version = "v1" service name = "healthcare" Returns an authorized API client by discovering the Healthcare API and using GOOGLE APPLICATION CREDENTIALS environment variable. client = discovery . build ( service name , api version ) TODO(developer): Uncomment these lines and replace with your values. project id = 'my-project' # replace with your GCP project ID location = 'us-central1' # replace with the parent dataset's location dataset id = 'my-dataset' # replace with the DICOM store's parent dataset ID dicom store id = 'my-dicom-store' # replace with the DICOM store's ID member = 'myemail@example.com' # replace with an authorized member role = 'roles/viewer' # replace with a Healthcare API IAM role dicom store parent = "projects/ {} /locations/ {} /datasets/ {} " . format ( project id , location , dataset id ) dicom store name = f " { dicom store parent } /dicomStores/ { dicom store id } " policy = { "bindings" : [{ "role" : role , "members" : [ member ]}]} if etag is not None : policy [ "etag" ] = etag request = ( client . projects () . locations () . datasets () . dicomStores () . setIamPolicy ( resource = dicom store name , body = { "policy" : policy }) ) response = request . execute () print ( "etag: {} " . format ( response . get ( "name" ))) print ( "bindings: {} " . format ( response . get ( "bindings" ))) return response curl Grant or revoke roles to users by modifying the policy that you retrieved, programmatically or using a text editor.
- For examples of how to format a policy as JSON or YAML, see Policy . curl -X POST \ -H "Authorization: Bearer $( gcloud auth application-default print-access-token ) " \ -H "Content-Type: application/json; charset=utf-8" \ --data "{ 'policy': { 'bindings': [ { 'role':'roles/healthcare.dicomStoreAdmin', 'members': [ 'user:user-1@example.com' ] }, { 'role':'roles/healthcare.dicomViewer', 'members': [ 'serviceAccount:service-account-13@appspot.gserviceaccount.com', 'user:user-2@example.com', 'user: NEW USER EMAIL ADDRESS ' ] } ] } }" "https://healthcare.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /datasets/ DATASET ID /dicomStores/ DICOM STORE ID :setIamPolicy" The response is the following: { "etag":" bytes ", "bindings": [ { "role":"roles/healthcare.dicomStoreAdmin", "members": [ "user:user-1@example.com" ] }, { "role":"roles/healthcare.dicomViewer", "members": [ "serviceAccount:service-account-13@appspot.gserviceaccount.com", "user:user-2@example.com", "user: NEW USER EMAIL ADDRESS " ] } ] } PowerShell Grant or revoke roles to users by modifying the policy that you retrieved, programmatically or using a text editor.
- GoogleAuth ({ scopes : [ 'https://www.googleapis.com/auth/cloud-platform' ], }), }); const setDicomStoreIamPolicy = async () = > { // TODO(developer): uncomment these lines before running the sample // const cloudRegion = 'us-central1'; // const projectId = 'adjective-noun-123'; // const datasetId = 'my-dataset'; // const dicomStoreId = 'my-dicom-store'; // const member = 'user:example@gmail.com'; // const role = 'roles/healthcare.dicomStoreViewer'; const resource = projects/ ${ projectId } /locations/ ${ cloudRegion } /datasets/ ${ datasetId } /dicomStores/ ${ dicomStoreId } ; const request = { resource , resource : { policy : { bindings : [ { members : member , role : role , }, ], }, }, }; const dicomStore = await healthcare . projects . locations . datasets . dicomStores . setIamPolicy ( request ); console . log ( 'Set DICOM store IAM policy:' , JSON . stringify ( dicomStore . data , null , 2 ) ); }; setDicomStoreIamPolicy (); Python def set dicom store iam policy ( project id , location , dataset id , dicom store id , member , role , etag = None ): """Sets the IAM policy for the specified DICOM store.
- GoogleAuth ({ scopes : [ 'https://www.googleapis.com/auth/cloud-platform' ], }), }); const setHl7v2StoreIamPolicy = async () = > { // TODO(developer): uncomment these lines before running the sample // const cloudRegion = 'us-central1'; // const projectId = 'adjective-noun-123'; // const datasetId = 'my-dataset'; // const dicomStoreId = 'my-dicom-store'; // const member = 'user:example@gmail.com'; // const role = 'roles/healthcare.hl7V2StoreViewer'; const resource = projects/ ${ projectId } /locations/ ${ cloudRegion } /datasets/ ${ datasetId } /hl7V2Stores/ ${ hl7v2StoreId } ; const request = { resource , resource : { policy : { bindings : [ { members : member , role : role , }, ], }, }, }; const hl7v2Store = await healthcare . projects . locations . datasets . hl7V2Stores . setIamPolicy ( request ); console . log ( 'Set HL7v2 store IAM policy:' , JSON . stringify ( hl7v2Store . data , null , 2 ) ); }; setHl7v2StoreIamPolicy (); Python def set hl7v2 store iam policy ( project id , location , dataset id , hl7v2 store id , member , role , etag = None ): """Sets the IAM policy for the specified HL7v2 store.

