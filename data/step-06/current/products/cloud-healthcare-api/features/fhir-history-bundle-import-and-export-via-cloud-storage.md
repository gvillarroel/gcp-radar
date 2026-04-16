---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:44:19.043Z"
product_name: "Cloud Healthcare API"
product_slug: "cloud-healthcare-api"
feature_name: "FHIR history bundle import and export via Cloud Storage"
feature_slug: "fhir-history-bundle-import-and-export-via-cloud-storage"
latest_feature_date: "2024-05-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-import-export"
  - "https://docs.cloud.google.com/healthcare-api/docs/concepts/fhir-import"
  - "https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-resources"
keywords:
  - "fhir"
  - "history"
  - "bundle"
  - "import"
  - "export"
  - "via"
  - "storage"
  - "resources"
---

# FHIR history bundle import and export via Cloud Storage

Product: Cloud Healthcare API
Coverage: MEDIUM

## Step 02 Summary

FHIR resources, including historical versions, can be imported and exported as history bundles via Cloud Storage in preview.

## Extended Definition

FHIR resources, including historical versions, can be imported and exported as history bundles via Cloud Storage in preview.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-import-export](https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-import-export)
- [https://docs.cloud.google.com/healthcare-api/docs/concepts/fhir-import](https://docs.cloud.google.com/healthcare-api/docs/concepts/fhir-import)
- [https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-resources](https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-resources)

## Supporting Pages

### "Import and export FHIR resources using Cloud Storage \_|\_ Cloud Healthcare\

- URL: [https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-import-export](https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-import-export)
- Source ID: `site-docs-root`
- Final score: 282
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- See https://github.com/GoogleCloudPlatform/python-docs-samples/tree/main/healthcare/api-client/v1/fhir before running the sample.""" Imports the Google API Discovery Service. from googleapiclient import discovery api version = "v1" service name = "healthcare" Instantiates an authorized API client by discovering the Healthcare API and using GOOGLE APPLICATION CREDENTIALS environment variable. client = discovery . build ( service name , api version ) TODO(developer): Uncomment these lines and replace with your values. project id = 'my-project' # replace with your GCP project ID location = 'us-central1' # replace with the parent dataset's location dataset id = 'my-dataset' # replace with the parent dataset's ID fhir store id = 'my-fhir-store' # replace with the FHIR store ID gcs uri = 'my-bucket' # replace with a Cloud Storage bucket fhir store parent = "projects/ {} /locations/ {} /datasets/ {} " . format ( project id , location , dataset id ) fhir store name = f " { fhir store parent } /fhirStores/ { fhir store id } " body = { "contentStructure" : "CONTENT STRUCTURE UNSPECIFIED" , "gcsSource" : { "uri" : f "gs:// { gcs uri } " }, } Escape "import()" method keyword because "import" is a reserved keyword in Python request = ( client . projects () . locations () . datasets () . fhirStores () . import ( name = fhir store name , body = body ) ) response = request . execute () print ( f "Imported FHIR resources: { gcs uri } " ) return response Exporting FHIR resources The following samples show how to export FHIR resources to a Cloud Storage bucket.
- See https://github.com/GoogleCloudPlatform/python-docs-samples/tree/main/healthcare/api-client/v1/fhir before running the sample.""" Imports the Google API Discovery Service. from googleapiclient import discovery api version = "v1" service name = "healthcare" Instantiates an authorized API client by discovering the Healthcare API and using GOOGLE APPLICATION CREDENTIALS environment variable. client = discovery . build ( service name , api version ) TODO(developer): Uncomment these lines and replace with your values. project id = 'my-project' # replace with your GCP project ID location = 'us-central1' # replace with the parent dataset's location dataset id = 'my-dataset' # replace with the parent dataset's ID fhir store id = 'my-fhir-store' # replace with the FHIR store ID gcs uri = 'my-bucket' # replace with a Cloud Storage bucket fhir store parent = "projects/ {} /locations/ {} /datasets/ {} " . format ( project id , location , dataset id ) fhir store name = f " { fhir store parent } /fhirStores/ { fhir store id } " body = { "gcsDestination" : { "uriPrefix" : f "gs:// { gcs uri } /fhir export" }} request = ( client . projects () . locations () . datasets () . fhirStores () . export ( name = fhir store name , body = body ) ) response = request . execute () print ( f "Exported FHIR resources to bucket: gs:// { gcs uri } " ) return response Incremental exports You can specify a timestamp to only export FHIR resources added to your FHIR store since a previous successful export.
- Home Documentation Industry solutions Cloud Healthcare API Guides Send feedback Import and export FHIR resources using Cloud Storage Stay organized with collections Save and categorize content based on your preferences.
- Setting Cloud Storage permissions Before exporting and importing FHIR resources to and from Cloud Storage, you must grant additional permissions to the Cloud Healthcare Service Agent service account .

### FHIR import options \_|\_ Cloud Healthcare API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/healthcare-api/docs/concepts/fhir-import](https://docs.cloud.google.com/healthcare-api/docs/concepts/fhir-import)
- Source ID: `site-docs-root-2`
- Final score: 211
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- When to use FHIR bundles Consider the following characteristics and advantages of using the fhir.executeBundle method when deciding whether to use it to store FHIR resources: If it is too costly, either in terms of billing costs or network bandwidth, to build a pipeline that stores data in Cloud Storage and then imports the data using fhirStores.import , use fhir.executeBundle .
- To call fhirStores.import , see Importing and exporting FHIR resources using Cloud Storage .
- If the application managing the fhirStores.import operation doesn't have a good strategy for the following, use fhir.executeBundle : Handling bulk errors Addressing failures on a subset of FHIR resources or entire batches When not to use FHIR bundles Consider the following limitations of fhir.executeBundle when determining whether to use it to store FHIR resources: Bundles have the equivalent quota and billing applied to the operations inside the bundle as if the operations were executed outside of the bundle.
- Import FHIR resources Use the fhirStores.import method to load FHIR resources from Cloud Storage into the Cloud Healthcare API.

### "Creating and managing FHIR resources \_|\_ Cloud Healthcare API \_|\_ Google\

- URL: [https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-resources](https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-resources)
- Source ID: `site-docs-root`
- Final score: 202
- Re-rank relevance: N/A

Evidence snippets:
- In the second version, the patient's heart rate was 85 BPM. { "entry": [ { "resource": { "effectiveDateTime": "2020-01-01T00:00:00+00:00", "id": " OBSERVATION ID ", "meta": { "lastUpdated": "2020-01-02T00:00:00+00:00", "versionId": "MTU0MTE5MDk5Mzk2ODcyODAwMA" }, "resourceType": "Observation", "status": "final", "subject": { "reference": "Patient/ PATIENT ID " }, "valueQuantity": { "unit": "bpm", "value": 85 } } }, { "resource": { "encounter": { "reference": "Encounter/ ENCOUNTER ID " }, "effectiveDateTime": "2020-01-01T00:00:00+00:00", "id": " OBSERVATION ID ", "meta": { "lastUpdated": "2020-01-01T00:00:00+00:00", "versionId": "MTU0MTE5MDg4MTY0MzQ3MjAwMA" }, "resourceType": "Observation", "status": "final", "subject": { "reference": "Patient/ PATIENT ID " }, "valueQuantity": { "unit": "bpm", "value": 75 } } } ], "resourceType": "Bundle", "type": "history" } Go import ( "context" "fmt" "io" healthcare "google.golang.org/api/healthcare/v1" ) // listFHIRResourceHistory lists an FHIR resource's history. func listFHIRResourceHistory ( w io .
- She was concerned about this." } ], "resourceType": "Encounter", "status": "finished", "subject": { "reference": "Patient/ PATIENT ID " } } }, { "resource": { "encounter": { "reference": "Encounter/ ENCOUNTER ID " }, "effectiveDateTime": "2020-01-01T00:00:00+00:00", "id": " OBSERVATION ID ", "resourceType": "Observation", "status": "final", "subject": { "reference": "Patient/ PATIENT ID " }, "valueQuantity": { "unit": "bpm", "value": BPM VALUE } } } ], "resourceType": "Bundle", "type": "searchset" } Go import ( "context" "fmt" "io" healthcare "google.golang.org/api/healthcare/v1" ) // fhirGetPatientEverything gets all resources associated with a particular // patient compartment. func fhirGetPatientEverything ( w io .
- She was concerned about this." } ], "resourceType": "Encounter", "status": "finished", "subject": { "reference": "Patient/ PATIENT ID " } } }, { "resource": { "encounter": { "reference": "Encounter/ ENCOUNTER ID " }, "effectiveDateTime": "2020-01-01T00:00:00+00:00", "id": " OBSERVATION ID ", "resourceType": "Observation", "status": "final", "subject": { "reference": "Patient/ PATIENT ID " }, "valueQuantity": { "unit": "bpm", "value": BPM VALUE } } } ], "resourceType": "Bundle", "type": "searchset" } PowerShell To get the resources in a patient compartment, make a GET request and specify the following information: The name of the parent dataset The name of the FHIR store The patient's ID An access token The following sample shows a GET request using PowerShell: $cred = gcloud auth application-default print-access-token $headers = @ { Authorization = "Bearer $cred " } Invoke-RestMethod -Method Get -Headers $headers -Uri 'https://healthcare.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /datasets/ DATASET ID /fhirStores/ FHIR STORE ID /fhir/Patient/ RESOURCE ID /$everything' ConvertTo-Json If the request is successful, the server returns a response similar to the following sample in JSON format: { "entry": [ { "resource": { "birthDate": "1970-01-01", "gender": "female", "id": " PATIENT ID ", "name": [ { "family": "Smith", "given": [ "Darcy" ], "use": "official" } ], "resourceType": "Patient" } }, { "resource": { "class": { "code": "IMP", "display": "inpatient encounter", "system": "http://hl7.org/fhir/v3/ActCode" }, "id": " ENCOUNTER ID ", "reasonCode": [ { "text": "The patient had an abnormal heart rate.
- Returns: A dict representing the FHIR resource at the specified version. """ Imports the Google API Discovery Service. from googleapiclient import discovery api version = "v1" service name = "healthcare" Returns an authorized API client by discovering the Healthcare API and using GOOGLE APPLICATION CREDENTIALS environment variable. client = discovery . build ( service name , api version ) TODO(developer): Uncomment these lines and replace with your values. project id = 'my-project' location = 'us-central1' dataset id = 'my-dataset' fhir store id = 'my-fhir-store' resource type = 'Patient' resource id = 'b682d-0e-4843-a4a9-78c9ac64' version id = 'MTY4NDQ1MDc3MDU2ODgyNzAwMA' fhir store parent = ( f "projects/ { project id } /locations/ { location } /datasets/ { dataset id } " ) fhir resource path = f " { fhir store parent } /fhirStores/ { fhir store id } /fhir/ { resource type } / { resource id } / history/ { version id } " request = ( client . projects () . locations () . datasets () . fhirStores () . fhir () . vread ( name = fhir resource path ) ) response = request . execute () print ( f "Got contents of { resource type } resource with ID { resource id } at" f " version { version id } : \n { json . dumps ( response , indent = 2 ) } " ) return response Deleting a FHIR resource The following samples show how to call the projects.locations.datasets.fhirStores.fhir.delete method to delete an Observation FHIR resource.

