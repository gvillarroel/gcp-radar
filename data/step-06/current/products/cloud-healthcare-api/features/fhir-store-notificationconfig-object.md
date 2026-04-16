---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:44:19.074Z"
product_name: "Cloud Healthcare API"
product_slug: "cloud-healthcare-api"
feature_name: "FHIR store notificationConfig object"
feature_slug: "fhir-store-notificationconfig-object"
latest_feature_date: "2023-05-30"
deprecation_date: "2023-05-30"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir"
  - "https://docs.cloud.google.com/healthcare-api/docs/fhir-pubsub"
  - "https://docs.cloud.google.com/healthcare-api/docs/dicom-pubsub"
keywords:
  - "fhir"
  - "store"
  - "notificationconfig"
  - "object"
  - "has"
  - "been"
  - "deprecated"
  - "replaced"
---

# FHIR store notificationConfig object

Product: Cloud Healthcare API
Coverage: MEDIUM

## Step 02 Summary

The notificationConfig object on a FHIR store has been deprecated and replaced by notificationConfigs; deprecated on 2023-05-30.

## Extended Definition

The notificationConfig object on a FHIR store has been deprecated and replaced by notificationConfigs; deprecated on 2023-05-30.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir](https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir)
- [https://docs.cloud.google.com/healthcare-api/docs/fhir-pubsub](https://docs.cloud.google.com/healthcare-api/docs/fhir-pubsub)
- [https://docs.cloud.google.com/healthcare-api/docs/dicom-pubsub](https://docs.cloud.google.com/healthcare-api/docs/dicom-pubsub)

## Supporting Pages

### "FHIR Pub/Sub notifications \_|\_ Cloud Healthcare API \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/healthcare-api/docs/fhir-pubsub](https://docs.cloud.google.com/healthcare-api/docs/fhir-pubsub)
- Source ID: `site-docs-root-2`
- Final score: 178
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- View FHIR notifications using the NotificationConfig configuration (Deprecated) Deprecated: Configuring FHIR notifications using the NotificationConfig object has been deprecated.
- Run the following command in the terminal to create or overwrite this file in the current directory: @' { "notificationConfigs": [ { "pubsubTopic": "projects/ PROJECT ID /topics/ PUBSUB TOPIC ID ", "sendFullResource": true, "sendPreviousResourceOnDelete": true } ] } '@ Out-File -FilePath request.json -Encoding utf8 Then execute the following command to send your REST request: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method PATCH -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://healthcare.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /datasets/ DATASET ID /fhirStores/ FHIR STORE ID ?updateMask=notificationConfigs" Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "name": "projects/ PROJECT ID /locations/ LOCATION /datasets/ DATASET ID /fhirStores/ FHIR STORE ID ", "version": "R4", "notificationConfigs": [ { "pubsubTopic": "projects/ PROJECT ID /topics/ PUBSUB TOPIC ID ", "sendFullResource": true, "sendPreviousResourceOnDelete": true } ] } Create a FHIR resource Create a FHIR resource in the FHIR store.
- Notification configuration You can configure Pub/Sub notifications and their behavior in a FhirNotificationConfig object on a FHIR store.
- Create or edit a FHIR store Create or edit a FHIR store with a configured FhirNotificationConfig object.

### "Creating and managing FHIR stores \_|\_ Cloud Healthcare API \_|\_ Google\

- URL: [https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir](https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir)
- Source ID: `site-docs-root`
- Final score: 162
- Re-rank relevance: N/A

Evidence snippets:
- Run the following command in the terminal to create or overwrite this file in the current directory: @' { "notificationConfigs": [ { "pubsubTopic": "projects/ PROJECT ID /topics/ PUBSUB TOPIC ID " } ], "labels": { " KEY1 ": " VALUE1 ", " KEY2 ": " VALUE2 " } } '@ Out-File -FilePath request.json -Encoding utf8 Then execute the following command to send your REST request: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method PATCH -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://healthcare.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /datasets/ DATASET ID /fhirStores/ FHIR STORE ID ?updateMask=notificationConfig,labels" Select-Object -Expand Content APIs Explorer Copy the request body and open the method reference page .
- Before using any of the command data below, make the following replacements: PROJECT ID : the ID of your Google Cloud project LOCATION : the dataset location DATASET ID : the FHIR store's parent dataset FHIR STORE ID : the FHIR store ID PUBSUB TOPIC ID : a Pub/Sub topic to which messages are published when an event occurs in a data store Execute the following command: Linux, macOS, or Cloud Shell Note: Ensure you have initialized the Google Cloud CLI with authentication and a project by running either gcloud init ; or gcloud auth login and gcloud config set project . gcloud healthcare fhir-stores update FHIR STORE ID \ --dataset = DATASET ID \ --location = LOCATION \ --pubsub-topic = projects/ PROJECT ID /topics/ PUBSUB TOPIC ID Windows (PowerShell) Note: Ensure you have initialized the Google Cloud CLI with authentication and a project by running either gcloud init ; or gcloud auth login and gcloud config set project . gcloud healthcare fhir-stores update FHIR STORE ID --dataset = DATASET ID --location = LOCATION --pubsub-topic = projects/ PROJECT ID /topics/ PUBSUB TOPIC ID Windows (cmd.exe) Note: Ensure you have initialized the Google Cloud CLI with authentication and a project by running either gcloud init ; or gcloud auth login and gcloud config set project . gcloud healthcare fhir-stores update FHIR STORE ID ^ --dataset = DATASET ID ^ --location = LOCATION ^ --pubsub-topic = projects/ PROJECT ID /topics/ PUBSUB TOPIC ID You should receive a response similar to the following: Response Updated fhirStore [ FHIR STORE ID ]. name: projects/ PROJECT ID /locations/ LOCATION /datasets/ DATASET ID /fhirStores/ FHIR STORE ID notificationConfig: pubsubTopic: projects/ PROJECT ID /topics/ PUBSUB TOPIC ID version: FHIR STORE VERSION REST To edit a FHIR store, use the projects.locations.datasets.fhirStores.patch method.
- See https://github.com/GoogleCloudPlatform/python-docs-samples/tree/main/healthcare/api-client/v1/fhir before running the sample.""" Imports the Google API Discovery Service. from googleapiclient import discovery api version = "v1" service name = "healthcare" Instantiates an authorized API client by discovering the Healthcare API and using GOOGLE APPLICATION CREDENTIALS environment variable. client = discovery . build ( service name , api version ) TODO(developer): Uncomment these lines and replace with your values. project id = 'my-project' # replace with your GCP project ID location = 'us-central1' # replace with the dataset's location dataset id = 'my-dataset' # replace with your dataset ID fhir store id = 'my-fhir-store' # replace with the FHIR store's ID pubsub topic = 'projects/{project id}/topics/{topic id}' # replace with your Pub/Sub topic fhir store parent = "projects/ {} /locations/ {} /datasets/ {} " . format ( project id , location , dataset id ) fhir store name = f " { fhir store parent } /fhirStores/ { fhir store id } " patch = { "notificationConfigs" : [{ "pubsubTopic" : pubsub topic }] if pubsub topic else [] } request = ( client . projects () . locations () . datasets () . fhirStores () . patch ( name = fhir store name , updateMask = "notificationConfigs" , body = patch ) ) response = request . execute () print ( f "Patched FHIR store { fhir store id } with Cloud Pub/Sub topic: { pubsub topic or 'None' } " ) return response Getting FHIR store details The following samples show how to get details about a FHIR store.
- GoogleAuth ({ scopes : [ 'https://www.googleapis.com/auth/cloud-platform' ], }), }); const patchFhirStore = async () = > { // TODO(developer): uncomment these lines before running the sample // const cloudRegion = 'us-central1'; // const projectId = 'adjective-noun-123'; // const datasetId = 'my-dataset'; // const fhirStoreId = 'my-fhir-store'; // const pubsubTopic = 'my-topic' const name = projects/ ${ projectId } /locations/ ${ cloudRegion } /datasets/ ${ datasetId } /fhirStores/ ${ fhirStoreId } ; const request = { name , updateMask : 'notificationConfigs' , resource : { notificationConfigs : [ { pubsubTopic : projects/ ${ projectId } /topics/ ${ pubsubTopic } , }, ], }, }; await healthcare . projects . locations . datasets . fhirStores . patch ( request ); console . log ( Patched FHIR store ${ fhirStoreId } with Cloud Pub/Sub topic ${ pubsubTopic } ); }; patchFhirStore (); Python def patch fhir store ( project id , location , dataset id , fhir store id , pubsub topic ): """Updates the FHIR store.

### "Configure DICOM Pub/Sub notifications \_|\_ Cloud Healthcare API \_|\_ Google\

- URL: [https://docs.cloud.google.com/healthcare-api/docs/dicom-pubsub](https://docs.cloud.google.com/healthcare-api/docs/dicom-pubsub)
- Source ID: `site-docs-root-2`
- Final score: 142
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Here are the key differences: dicomStore.notificationConfig supports only one subscriber, while dicomStore.notificationConfigs supports multiple subscribers. dicomStore.notificationConfig uses NotificationConfig , which is being deprecated and replaced by DicomNotificationConfig . dicomStore.notificationConfigs supports sending notifications for all available DICOM operations automatically, such as ImportDicomData , DeleteInstances , and others.
- Before using any of the command data below, make the following replacements: PROJECT ID : the ID of your Google Cloud project LOCATION : the dataset location DATASET ID : the DICOM store's parent dataset DICOM STORE ID : the DICOM store ID PUBSUB TOPIC : a Pub/Sub topic to which messages are published when an event occurs in a data store Execute the following command: Linux, macOS, or Cloud Shell Note: Ensure you have initialized the Google Cloud CLI with authentication and a project by running either gcloud init ; or gcloud auth login and gcloud config set project . gcloud healthcare dicom-stores update DICOM STORE ID \ --dataset = DATASET ID \ --location = LOCATION \ --pubsub-topic = projects/ PROJECT ID /topics/ PUBSUB TOPIC \ --send-for-bulk-import Windows (PowerShell) Note: Ensure you have initialized the Google Cloud CLI with authentication and a project by running either gcloud init ; or gcloud auth login and gcloud config set project . gcloud healthcare dicom-stores update DICOM STORE ID --dataset = DATASET ID --location = LOCATION --pubsub-topic = projects/ PROJECT ID /topics/ PUBSUB TOPIC --send-for-bulk-import Windows (cmd.exe) Note: Ensure you have initialized the Google Cloud CLI with authentication and a project by running either gcloud init ; or gcloud auth login and gcloud config set project . gcloud healthcare dicom-stores update DICOM STORE ID ^ --dataset = DATASET ID ^ --location = LOCATION ^ --pubsub-topic = projects/ PROJECT ID /topics/ PUBSUB TOPIC ^ --send-for-bulk-import You should receive a response similar to the following: Response Updated dicomStore [ DICOM STORE ID ]. ... name: projects/ PROJECT ID /locations/ LOCATION /datasets/ DATASET ID /dicomStores/ DICOM STORE ID notificationConfig: pubsubTopic: projects/ PROJECT ID /topics/ PUBSUB TOPIC sendForBulkImport: true Store or import a DICOM instance and view the Pub/Sub notification Permissions required for this task To perform this task, you must have been granted the following permissions or the following Identity and Access Management (IAM) roles: Permissions healthcare.dicomStores.dicomWebWrite to store DICOM instances in the requested DICOM store. healthcare.dicomStores.import to import DICOM instances into the requested DICOM store.
- Run the following command in the terminal to create or overwrite this file in the current directory: @' { "notificationConfigs": [ { "pubsubTopic": "projects/ PROJECT ID /topics/ PUBSUB TOPIC SAMPLE 1 ", }, { "pubsubTopic": "projects/ PROJECT ID /topics/ PUBSUB TOPIC SAMPLE 2 ", } ] } '@ Out-File -FilePath request.json -Encoding utf8 Then execute the following command to send your REST request: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method PATCH -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json ` -Uri "https://healthcare.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /datasets/ DATASET ID /dicomStores/ DICOM STORE ID ?updateMask=notificationConfig,notificationConfigs" Select-Object -Expand Content APIs Explorer Copy the request body and open the method reference page .
- Run the following command in the terminal to create or overwrite this file in the current directory: @' { "notificationConfigs": [ { "pubsubTopic": "projects/ PROJECT ID /topics/ PUBSUB TOPIC ", } ] } '@ Out-File -FilePath request.json -Encoding utf8 Then execute the following command to send your REST request: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method PATCH -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://healthcare.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /datasets/ DATASET ID /dicomStores/ DICOM STORE ID ?updateMask=notificationConfigs" Select-Object -Expand Content APIs Explorer Copy the request body and open the method reference page .

