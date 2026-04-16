---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:44:19.023Z"
product_name: "Cloud Healthcare API"
product_slug: "cloud-healthcare-api"
feature_name: "DICOM exports to BigQuery JSON schema option"
feature_slug: "dicom-exports-to-bigquery-json-schema-option"
latest_feature_date: "2025-12-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/healthcare-api/docs/dicom-store-metrics"
  - "https://docs.cloud.google.com/healthcare-api/docs/dicom-storage-class"
  - "https://docs.cloud.google.com/healthcare-api/docs/how-tos/dicom"
keywords:
  - "dicom"
  - "exports"
  - "bigquery"
  - "json"
  - "schema"
  - "option"
  - "now"
  - "fewer"
---

# DICOM exports to BigQuery JSON schema option

Product: Cloud Healthcare API
Coverage: MEDIUM

## Step 02 Summary

DICOM exports to BigQuery now support a new JSON schema option with fewer columns for better handling of public DICOM tags; DICOM exports to BigQuery now support a new JSON schema option with fewer columns for better handling of public DICOM tags.

## Extended Definition

DICOM exports to BigQuery now support a new JSON schema option with fewer columns for better handling of public DICOM tags; DICOM exports to BigQuery now support a new JSON schema option with fewer columns for better handling of public DICOM tags.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/healthcare-api/docs/dicom-store-metrics](https://docs.cloud.google.com/healthcare-api/docs/dicom-store-metrics)
- [https://docs.cloud.google.com/healthcare-api/docs/dicom-storage-class](https://docs.cloud.google.com/healthcare-api/docs/dicom-storage-class)
- [https://docs.cloud.google.com/healthcare-api/docs/how-tos/dicom](https://docs.cloud.google.com/healthcare-api/docs/how-tos/dicom)

## Supporting Pages

### "View DICOM store, DICOM study, and DICOM series metrics \_|\_ Cloud Healthcare\

- URL: [https://docs.cloud.google.com/healthcare-api/docs/dicom-store-metrics](https://docs.cloud.google.com/healthcare-api/docs/dicom-store-metrics)
- Source ID: `site-docs-root-2`
- Final score: 129
- Re-rank relevance: N/A

Evidence snippets:
- Before using any of the request data, make the following replacements: PROJECT ID : the ID of your Google Cloud project LOCATION : the dataset location DATASET ID : the DICOM store's parent dataset DICOM STORE ID : the DICOM store ID STUDY UID : the DICOMweb study unique identifier (UID) SERIES UID : the DICOMweb series unique identifier (UID) To send your request, choose one of these options: curl Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Before using any of the request data, make the following replacements: PROJECT ID : the ID of your Google Cloud project LOCATION : the dataset location DATASET ID : the DICOM store's parent dataset DICOM STORE ID : the DICOM store ID STUDY UID : the DICOMweb study unique identifier (UID) To send your request, choose one of these options: curl Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- You should receive a JSON response similar to the following: Response { "series": "projects/ PROJECT ID /locations/ LOCATION /datasets/ DATASET ID /dicomStores/ DICOM STORE ID /dicomWeb/studies/ STUDY UID /series/ SERIES UID ", "structuredStorageSizeBytes": " STRUCTURED STORAGE BYTES ", "blobStorageSizeBytes": " BLOB STORAGE BYTES ", "instanceCount": " INSTANCE COUNT " } Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Before using any of the request data, make the following replacements: PROJECT ID : the ID of your Google Cloud project LOCATION : the dataset location DATASET ID : the DICOM store's parent dataset DICOM STORE ID : the DICOM store ID To send your request, choose one of these options: curl Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .

### DICOM storage classes \_|\_ Cloud Healthcare API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/healthcare-api/docs/dicom-storage-class](https://docs.cloud.google.com/healthcare-api/docs/dicom-storage-class)
- Source ID: `site-docs-root-2`
- Final score: 125
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You should receive a JSON response similar to the following: Response { "name": "projects/ PROJECT ID /locations/ LOCATION /datasets/ DATASET ID /dicomStores/ DICOM STORE ID " } Query exported DICOM metadata in BigQuery You can export DICOM metadata to BigQuery and then run queries to view the storage classes of your exported DICOM objects.
- Run the following command in the terminal to create or overwrite this file in the current directory: @' { "blobStorageSettings": { "blobStorageClass": " STORAGE CLASS " } } '@ Out-File -FilePath request.json -Encoding utf8 Then execute the following command to send your REST request: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://healthcare.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /datasets/ DATASET ID /dicomStores/ DICOM STORE ID /dicomWeb/studies/ STUDY INSTANCE UID /series/ SERIES INSTANCE UID /instances/ INSTANCE UID :setBlobStorageSettings" Select-Object -Expand Content APIs Explorer Copy the request body and open the method reference page .
- Run the following command in the terminal to create or overwrite this file in the current directory: @' { "blobStorageSettings": { "blobStorageClass": " STORAGE CLASS " }, "filterConfig": { "resourcePathsGcsUri": "gs:// CLOUD STORAGE BUCKET / FILTER FILE PATH " } } '@ Out-File -FilePath request.json -Encoding utf8 Then execute the following command to send your REST request: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json" -InFile request.json -Uri "https://healthcare.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /datasets/ DATASET ID /dicomStores/ DICOM STORE ID :setBlobStorageSettings" Select-Object -Expand Content The output is the following.
- Run the following command in the terminal to create or overwrite this file in the current directory: cat > request.json STORAGE CLASS " } } EOF Then execute the following command to send your REST request: curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://healthcare.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /datasets/ DATASET ID /dicomStores/ DICOM STORE ID /dicomWeb/studies/ STUDY INSTANCE UID /series/ SERIES INSTANCE UID /instances/ INSTANCE UID :setBlobStorageSettings" PowerShell Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login .

### "Creating and managing DICOM stores \_|\_ Cloud Healthcare API \_|\_ Google\

- URL: [https://docs.cloud.google.com/healthcare-api/docs/how-tos/dicom](https://docs.cloud.google.com/healthcare-api/docs/how-tos/dicom)
- Source ID: `site-docs-root`
- Final score: 117
- Re-rank relevance: N/A

Evidence snippets:
- Before using any of the request data, make the following replacements: PROJECT ID : the ID of your Google Cloud project LOCATION : the dataset location DATASET ID : the DICOM store's parent dataset DICOM STORE ID : the DICOM store ID PUBSUB TOPIC : a Pub/Sub topic to which messages are published when an event occurs in a data store KEY 1 : the first label key VALUE 1 : the first label value KEY 2 : the second label key VALUE 2 : the second label value Request JSON body: { "notificationConfigs": [ { "pubsubTopic": "projects/ PROJECT ID /topics/ PUBSUB TOPIC " } ], "labels": { " KEY 1 ": " VALUE 1 ", " KEY 2 ": " VALUE 2 " } } To send your request, choose one of these options: curl Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- See https://github.com/GoogleCloudPlatform/python-docs-samples/tree/main/healthcare/api-client/v1/dicom before running the sample.""" Imports the Google API Discovery Service. from googleapiclient import discovery Imports Python's built-in "json" module import json api version = "v1" service name = "healthcare" Returns an authorized API client by discovering the Healthcare API and using GOOGLE APPLICATION CREDENTIALS environment variable. client = discovery . build ( service name , api version ) TODO(developer): Uncomment these lines and replace with your values. project id = 'my-project' # replace with your GCP project ID location = 'us-central1' # replace with the parent dataset's location dataset id = 'my-dataset' # replace with the DICOM store's parent dataset ID dicom store id = 'my-dicom-store' # replace with the DICOM store's ID dicom store parent = "projects/ {} /locations/ {} /datasets/ {} " . format ( project id , location , dataset id ) dicom store name = f " { dicom store parent } /dicomStores/ { dicom store id } " dicom stores = client . projects () . locations () . datasets () . dicomStores () dicom store = dicom stores . get ( name = dicom store name ) . execute () print ( json . dumps ( dicom store , indent = 2 )) return dicom store Listing the DICOM stores in a dataset The following samples show how to list the DICOM stores in a dataset: Console To view the data stores in a dataset: In the Google Cloud console, go to the Datasets page.
- Run the following command in the terminal to create or overwrite this file in the current directory: @' { "notificationConfigs": [ { "pubsubTopic": "projects/ PROJECT ID /topics/ PUBSUB TOPIC " } ], "labels": { " KEY 1 ": " VALUE 1 ", " KEY 2 ": " VALUE 2 " } } '@ Out-File -FilePath request.json -Encoding utf8 Then execute the following command to send your REST request: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method PATCH -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://healthcare.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /datasets/ DATASET ID /dicomStores/ DICOM STORE ID ?updateMask=notificationConfigs,labels" Select-Object -Expand Content APIs Explorer Copy the request body and open the method reference page .
- Run the following command in the terminal to create or overwrite this file in the current directory: cat > request.json PROJECT ID /topics/ PUBSUB TOPIC " } ], "labels": { " KEY 1 ": " VALUE 1 ", " KEY 2 ": " VALUE 2 " } } EOF Then execute the following command to send your REST request: curl -X PATCH \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://healthcare.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /datasets/ DATASET ID /dicomStores/ DICOM STORE ID ?updateMask=notificationConfigs,labels" PowerShell Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login .

