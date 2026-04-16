---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:44:19.053Z"
product_name: "Cloud Healthcare API"
product_slug: "cloud-healthcare-api"
feature_name: "FHIR implementation guide enablement in Google Cloud Console"
feature_slug: "fhir-implementation-guide-enablement-in-google-cloud-console"
latest_feature_date: "2024-01-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir"
  - "https://docs.cloud.google.com/healthcare-api/docs/fhir-consent"
  - "https://docs.cloud.google.com/healthcare-api/docs/concepts/fhir"
keywords:
  - "fhir"
  - "implementation"
  - "guide"
  - "enablement"
  - "console"
  - "healthcare"
  - "users"
  - "can"
---

# FHIR implementation guide enablement in Google Cloud Console

Product: Cloud Healthcare API
Coverage: MEDIUM

## Step 02 Summary

Cloud Healthcare API users can enable FHIR implementation guides from the Google Cloud console.

## Extended Definition

Cloud Healthcare API users can enable FHIR implementation guides from the Google Cloud console.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir](https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir)
- [https://docs.cloud.google.com/healthcare-api/docs/fhir-consent](https://docs.cloud.google.com/healthcare-api/docs/fhir-consent)
- [https://docs.cloud.google.com/healthcare-api/docs/concepts/fhir](https://docs.cloud.google.com/healthcare-api/docs/concepts/fhir)

## Supporting Pages

### "Creating and managing FHIR stores \_|\_ Cloud Healthcare API \_|\_ Google\

- URL: [https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir](https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir)
- Source ID: `site-docs-root`
- Final score: 146
- Re-rank relevance: N/A

Evidence snippets:
- GoogleAuth ({ scopes : [ 'https://www.googleapis.com/auth/cloud-platform' ], }), responseType : 'json' , }); const getFhirStoreCapabilities = async () = > { // TODO(developer): uncomment these lines before running the sample // const cloudRegion = 'us-central1'; // const projectId = 'adjective-noun-123'; // const datasetId = 'my-dataset'; // const fhirStoreId = 'my-fhir-store'; const name = projects/ ${ projectId } /locations/ ${ cloudRegion } /datasets/ ${ datasetId } /fhirStores/ ${ fhirStoreId } /fhir/metadata ; const request = { name }; try { const fhirStore = await healthcare . projects . locations . datasets . fhirStores . get ( request ); console . log ( JSON . stringify ( fhirStore . data , null , 2 )); } catch ( error ) { console . error ( 'Error getting FHIR store capabilities:' , error . message error ); } }; getFhirStoreCapabilities (); Python def get fhir store metadata ( project id , location , dataset id , fhir store id ): """Gets the FHIR capability statement (STU3, R4), or the conformance statement in the DSTU2 case for the store, which contains a description of functionality supported by the server.
- GoogleAuth ({ scopes : [ 'https://www.googleapis.com/auth/cloud-platform' ], }), }); const patchFhirStore = async () = > { // TODO(developer): uncomment these lines before running the sample // const cloudRegion = 'us-central1'; // const projectId = 'adjective-noun-123'; // const datasetId = 'my-dataset'; // const fhirStoreId = 'my-fhir-store'; // const pubsubTopic = 'my-topic' const name = projects/ ${ projectId } /locations/ ${ cloudRegion } /datasets/ ${ datasetId } /fhirStores/ ${ fhirStoreId } ; const request = { name , updateMask : 'notificationConfigs' , resource : { notificationConfigs : [ { pubsubTopic : projects/ ${ projectId } /topics/ ${ pubsubTopic } , }, ], }, }; await healthcare . projects . locations . datasets . fhirStores . patch ( request ); console . log ( Patched FHIR store ${ fhirStoreId } with Cloud Pub/Sub topic ${ pubsubTopic } ); }; patchFhirStore (); Python def patch fhir store ( project id , location , dataset id , fhir store id , pubsub topic ): """Updates the FHIR store.
- GoogleAuth ({ scopes : [ 'https://www.googleapis.com/auth/cloud-platform' ], }), responseType : 'json' , }); const deleteFhirStore = async () = > { // TODO(developer): uncomment these lines before running the sample // const cloudRegion = 'us-central1'; // const projectId = 'adjective-noun-123'; // const datasetId = 'my-dataset'; // const fhirStoreId = 'my-fhir-store'; const name = projects/ ${ projectId } /locations/ ${ cloudRegion } /datasets/ ${ datasetId } /fhirStores/ ${ fhirStoreId } ; const request = { name }; try { await healthcare . projects . locations . datasets . fhirStores . delete ( request ); console . log ( Deleted FHIR store: ${ fhirStoreId } ` ); } catch ( error ) { console . error ( 'Error deleting FHIR store:' , error . message error ); } }; deleteFhirStore (); Python def delete fhir store ( project id , location , dataset id , fhir store id ): """Deletes the specified FHIR store.
- GoogleAuth ({ scopes : [ 'https://www.googleapis.com/auth/cloud-platform' ], }), }); const createFhirStore = async () = > { // TODO(developer): uncomment these lines before running the sample // const cloudRegion = 'us-central1'; // const projectId = 'adjective-noun-123'; // const datasetId = 'my-dataset'; // const fhirStoreId = 'my-fhir-store'; // const version = 'STU3'; const parent = projects/ ${ projectId } /locations/ ${ cloudRegion } /datasets/ ${ datasetId } ; const request = { parent , fhirStoreId , resource : { version , }, }; await healthcare . projects . locations . datasets . fhirStores . create ( request ); console . log ( Created FHIR store: ${ fhirStoreId } ); }; createFhirStore (); Python def create fhir store ( project id , location , dataset id , fhir store id , version ): """Creates a new FHIR store within the parent dataset.

### "Control access to FHIR resources in the Cloud Healthcare API \_|\_ Google\

- URL: [https://docs.cloud.google.com/healthcare-api/docs/fhir-consent](https://docs.cloud.google.com/healthcare-api/docs/fhir-consent)
- Source ID: `site-docs-root-2`
- Final score: 126
- Re-rank relevance: N/A

Evidence snippets:
- To track the status of the operation, you can use the Operation get method: curl -X GET \ -H "Authorization: Bearer $( gcloud auth application-default print-access-token ) " \ "https://healthcare.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /datasets/ DATASET ID /operations/ OPERATION ID " When the operation finishes, the server returns a response with the status of the operation in JSON format: { "name": "projects/ PROJECT ID /locations/ LOCATION /datasets/ DATASET ID /operations/ OPERATION ID "", "metadata": { "@type": "type.googleapis.com/google.cloud.healthcare.v1.OperationMetadata", "apiMethodName": "google.cloud.healthcare.v1.fhir.FhirStoreService.ApplyAdminConsents", "createTime": " CREATE TIME ", "endTime": " END TIME ", "logsUrl": "https://console.cloud.google.com/logs/query/ CLOUD LOGGING URL ", "counter": { "success": "1", "secondarySuccess": "7" } }, "done": true, "response": { "@type": "type.googleapis.com/google.cloud.healthcare.v1.fhir.ApplyAdminConsentsResponse", "consentApplySuccess": "1", "affectedResources": "7" } } This response indicated that the server successfully processed 1 admin policy and updated the consensual access of 7 resources (1 Practitioner, 1 Patient, 2 Observations, 2 patient Consents and 1 admin policy).
- To track the status of the operation, you can use the Operation get method: curl -X GET \ -H "Authorization: Bearer $( gcloud auth application-default print-access-token ) " \ "https://healthcare.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /datasets/ DATASET ID /operations/ OPERATION ID " When the operation finishes, the server returns a response with the status of the operation in JSON format: { "name": "projects/ PROJECT ID /locations/ LOCATION /datasets/ DATASET ID /operations/ OPERATION ID "", "metadata": { "@type": "type.googleapis.com/google.cloud.healthcare.v1.OperationMetadata", "apiMethodName": "google.cloud.healthcare.v1.fhir.FhirStoreService.ApplyConsents", "createTime": " CREATE TIME ", "endTime": " END TIME ", "logsUrl": "https://console.cloud.google.com/logs/query/ CLOUD LOGGING URL ", "counter": { "success": "2", "secondarySuccess": "5" } }, "done": true, "response": { "@type": "type.googleapis.com/google.cloud.healthcare.v1.fhir.ApplyConsentsResponse", "consentApplySuccess": "2", "affectedResources": "5" } } This response indicated that the server successfully processed 2 consents and updated the consensual access of 5 resources (1 Patient, 2 Consents, 2 Observations).
- Home Documentation Industry solutions Cloud Healthcare API Guides Send feedback Control access to FHIR resources in the Cloud Healthcare API Stay organized with collections Save and categorize content based on your preferences.
- Allows the FHIR implementation in the Cloud Healthcare API to include consent-aware access tokens as part of the Cloud Healthcare API management and permission model.

### FHIR \_|\_ Cloud Healthcare API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/healthcare-api/docs/concepts/fhir](https://docs.cloud.google.com/healthcare-api/docs/concepts/fhir)
- Source ID: `site-docs-root-2`
- Final score: 117
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following table shows the format to use to get this information using the FHIR Service Base URL and its equivalent base URL in the Cloud Healthcare API: FHIR Service Base URL Cloud Healthcare API equivalent URL http(s)://server/path/Patient/ PATIENT ID https://healthcare.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /datasets/ DATASET ID /fhirStores/ FHIR STORE ID /fhir/Patient/ PATIENT ID FHIR conformance For more information on the FHIR DSTU2, STU3, and R4 implementations in the Cloud Healthcare API, see the FHIR conformance statement .
- Home Documentation Industry solutions Cloud Healthcare API Guides Send feedback FHIR Stay organized with collections Save and categorize content based on your preferences.
- The Cloud Healthcare API base URL contains the following parts: The endpoint for the Cloud Healthcare API The version of the Cloud Healthcare API The project ID The name of a dataset The dataset's location The name of a FHIR store The /fhir suffix The following table shows the format of a FHIR Service Base URL and its equivalent base URL in the Cloud Healthcare API: FHIR Service Base URL Cloud Healthcare API equivalent URL http(s)://server/ PATH https://healthcare.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /datasets/ DATASET ID /fhirStores/ FHIR STORE ID /fhir To get information about a patient using the FHIR RESTful API, make an HTTP GET request.
- FHIR lets EHR to be exchanged between healthcare providers and consumers on platforms such as the following: EHR-based data sharing Mobile apps Cloud-based applications Wearable devices The FHIR API also lets third-party apps integrate with existing systems.

