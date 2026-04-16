---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:44:19.063Z"
product_name: "Cloud Healthcare API"
product_slug: "cloud-healthcare-api"
feature_name: "Pub/Sub notifications for DICOM store bulk import"
feature_slug: "pub-sub-notifications-for-dicom-store-bulk-import"
latest_feature_date: "2023-08-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/healthcare-api/docs/dicom-pubsub"
  - "https://docs.cloud.google.com/healthcare-api/docs/how-tos/dicom"
  - "https://docs.cloud.google.com/healthcare-api/docs/dicom-store-metrics"
keywords:
  - "pub"
  - "sub"
  - "notifications"
  - "dicom"
  - "store"
  - "bulk"
  - "import"
  - "now"
---

# Pub/Sub notifications for DICOM store bulk import

Product: Cloud Healthcare API
Coverage: MEDIUM

## Step 02 Summary

Pub/Sub notifications for DICOM store bulk import are now generally available.

## Extended Definition

Pub/Sub notifications for DICOM store bulk import are now generally available.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/healthcare-api/docs/dicom-pubsub](https://docs.cloud.google.com/healthcare-api/docs/dicom-pubsub)
- [https://docs.cloud.google.com/healthcare-api/docs/how-tos/dicom](https://docs.cloud.google.com/healthcare-api/docs/how-tos/dicom)
- [https://docs.cloud.google.com/healthcare-api/docs/dicom-store-metrics](https://docs.cloud.google.com/healthcare-api/docs/dicom-store-metrics)

## Supporting Pages

### "Configure DICOM Pub/Sub notifications \_|\_ Cloud Healthcare API \_|\_ Google\

- URL: [https://docs.cloud.google.com/healthcare-api/docs/dicom-pubsub](https://docs.cloud.google.com/healthcare-api/docs/dicom-pubsub)
- Source ID: `site-docs-root-2`
- Final score: 202
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Before using any of the command data below, make the following replacements: PROJECT ID : the ID of your Google Cloud project LOCATION : the dataset location DATASET ID : the DICOM store's parent dataset DICOM STORE ID : the DICOM store ID PUBSUB TOPIC : a Pub/Sub topic to which messages are published when an event occurs in a data store Execute the following command: Linux, macOS, or Cloud Shell Note: Ensure you have initialized the Google Cloud CLI with authentication and a project by running either gcloud init ; or gcloud auth login and gcloud config set project . gcloud healthcare dicom-stores update DICOM STORE ID \ --dataset = DATASET ID \ --location = LOCATION \ --pubsub-topic = projects/ PROJECT ID /topics/ PUBSUB TOPIC \ --send-for-bulk-import Windows (PowerShell) Note: Ensure you have initialized the Google Cloud CLI with authentication and a project by running either gcloud init ; or gcloud auth login and gcloud config set project . gcloud healthcare dicom-stores update DICOM STORE ID --dataset = DATASET ID --location = LOCATION --pubsub-topic = projects/ PROJECT ID /topics/ PUBSUB TOPIC --send-for-bulk-import Windows (cmd.exe) Note: Ensure you have initialized the Google Cloud CLI with authentication and a project by running either gcloud init ; or gcloud auth login and gcloud config set project . gcloud healthcare dicom-stores update DICOM STORE ID ^ --dataset = DATASET ID ^ --location = LOCATION ^ --pubsub-topic = projects/ PROJECT ID /topics/ PUBSUB TOPIC ^ --send-for-bulk-import You should receive a response similar to the following: Response Updated dicomStore [ DICOM STORE ID ]. ... name: projects/ PROJECT ID /locations/ LOCATION /datasets/ DATASET ID /dicomStores/ DICOM STORE ID notificationConfig: pubsubTopic: projects/ PROJECT ID /topics/ PUBSUB TOPIC sendForBulkImport: true Store or import a DICOM instance and view the Pub/Sub notification Permissions required for this task To perform this task, you must have been granted the following permissions or the following Identity and Access Management (IAM) roles: Permissions healthcare.dicomStores.dicomWebWrite to store DICOM instances in the requested DICOM store. healthcare.dicomStores.import to import DICOM instances into the requested DICOM store.
- Here are the key differences: dicomStore.notificationConfig supports only one subscriber, while dicomStore.notificationConfigs supports multiple subscribers. dicomStore.notificationConfig uses NotificationConfig , which is being deprecated and replaced by DicomNotificationConfig . dicomStore.notificationConfigs supports sending notifications for all available DICOM operations automatically, such as ImportDicomData , DeleteInstances , and others.
- Configure and view notifications This section describes how to enable Pub/Sub notifications on a DICOM store, store or import a DICOM instance to publish a notification, and view the notification.
- The following samples show how to enable Pub/Sub notifications on a DICOM store when a new DICOM instance is stored or imported from Cloud Storage.

### "Creating and managing DICOM stores \_|\_ Cloud Healthcare API \_|\_ Google\

- URL: [https://docs.cloud.google.com/healthcare-api/docs/how-tos/dicom](https://docs.cloud.google.com/healthcare-api/docs/how-tos/dicom)
- Source ID: `site-docs-root`
- Final score: 169
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- See https://github.com/GoogleCloudPlatform/python-docs-samples/tree/main/healthcare/api-client/v1/dicom before running the sample.""" Imports the Google API Discovery Service. from googleapiclient import discovery api version = "v1" service name = "healthcare" Returns an authorized API client by discovering the Healthcare API and using GOOGLE APPLICATION CREDENTIALS environment variable. client = discovery . build ( service name , api version ) TODO(developer): Uncomment these lines and replace with your values. project id = 'my-project' # replace with your GCP project ID location = 'us-central1' # replace with the parent dataset's location dataset id = 'my-dataset' # replace with the DICOM store's parent dataset ID dicom store id = 'my-dicom-store' # replace with the DICOM store's ID dicom store parent = "projects/ {} /locations/ {} /datasets/ {} " . format ( project id , location , dataset id ) request = ( client . projects () . locations () . datasets () . dicomStores () . create ( parent = dicom store parent , body = {}, dicomStoreId = dicom store id ) ) response = request . execute () print ( f "Created DICOM store: { dicom store id } " ) return response Editing a DICOM store The following samples show how to make the following changes to a DICOM store: Edit the Pub/Sub topic to which the Cloud Healthcare API sends notifications of DICOM store changes.
- See https://github.com/GoogleCloudPlatform/python-docs-samples/tree/main/healthcare/api-client/v1/dicom before running the sample.""" Imports the Google API Discovery Service. from googleapiclient import discovery api version = "v1" service name = "healthcare" Returns an authorized API client by discovering the Healthcare API and using GOOGLE APPLICATION CREDENTIALS environment variable. client = discovery . build ( service name , api version ) TODO(developer): Uncomment these lines and replace with your values. project id = 'my-project' # replace with your GCP project ID location = 'us-central1' # replace with the parent dataset's location dataset id = 'my-dataset' # replace with the DICOM store's parent dataset ID dicom store id = 'my-dicom-store' # replace with the DICOM store's ID pubsub topic = 'my-topic' # replace with an existing Pub/Sub topic dicom store parent = "projects/ {} /locations/ {} /datasets/ {} " . format ( project id , location , dataset id ) dicom store name = f " { dicom store parent } /dicomStores/ { dicom store id } " patch = { "notificationConfig" : { "pubsubTopic" : f "projects/ { project id } /topics/ { pubsub topic } " } } request = ( client . projects () . locations () . datasets () . dicomStores () . patch ( name = dicom store name , updateMask = "notificationConfig" , body = patch ) ) response = request . execute () print ( "Patched DICOM store {} with Cloud Pub/Sub topic: {} " . format ( dicom store id , pubsub topic ) ) return response Getting DICOM store details The following samples show how to get details about a DICOM store.
- See https://github.com/GoogleCloudPlatform/python-docs-samples/tree/main/healthcare/api-client/v1/dicom before running the sample.""" Imports the Google API Discovery Service. from googleapiclient import discovery api version = "v1" service name = "healthcare" Returns an authorized API client by discovering the Healthcare API and using GOOGLE APPLICATION CREDENTIALS environment variable. client = discovery . build ( service name , api version ) TODO(developer): Uncomment these lines and replace with your values. project id = 'my-project' # replace with your GCP project ID location = 'us-central1' # replace with the parent dataset's location dataset id = 'my-dataset' # replace with the DICOM store's parent dataset ID dicom store id = 'my-dicom-store' # replace with the DICOM store's ID dicom store parent = "projects/ {} /locations/ {} /datasets/ {} " . format ( project id , location , dataset id ) dicom store name = f " { dicom store parent } /dicomStores/ { dicom store id } " request = ( client . projects () . locations () . datasets () . dicomStores () . delete ( name = dicom store name ) ) response = request . execute () print ( f "Deleted DICOM store: { dicom store id } " ) return response What's next Export and import DICOM object instances to and from Cloud Storage Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- See https://github.com/GoogleCloudPlatform/python-docs-samples/tree/main/healthcare/api-client/v1/dicom before running the sample.""" Imports the Google API Discovery Service. from googleapiclient import discovery Imports Python's built-in "json" module import json api version = "v1" service name = "healthcare" Returns an authorized API client by discovering the Healthcare API and using GOOGLE APPLICATION CREDENTIALS environment variable. client = discovery . build ( service name , api version ) TODO(developer): Uncomment these lines and replace with your values. project id = 'my-project' # replace with your GCP project ID location = 'us-central1' # replace with the parent dataset's location dataset id = 'my-dataset' # replace with the DICOM store's parent dataset ID dicom store id = 'my-dicom-store' # replace with the DICOM store's ID dicom store parent = "projects/ {} /locations/ {} /datasets/ {} " . format ( project id , location , dataset id ) dicom store name = f " { dicom store parent } /dicomStores/ { dicom store id } " dicom stores = client . projects () . locations () . datasets () . dicomStores () dicom store = dicom stores . get ( name = dicom store name ) . execute () print ( json . dumps ( dicom store , indent = 2 )) return dicom store Listing the DICOM stores in a dataset The following samples show how to list the DICOM stores in a dataset: Console To view the data stores in a dataset: In the Google Cloud console, go to the Datasets page.

### "View DICOM store, DICOM study, and DICOM series metrics \_|\_ Cloud Healthcare\

- URL: [https://docs.cloud.google.com/healthcare-api/docs/dicom-store-metrics](https://docs.cloud.google.com/healthcare-api/docs/dicom-store-metrics)
- Source ID: `site-docs-root-2`
- Final score: 158
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Before using any of the request data, make the following replacements: PROJECT ID : the ID of your Google Cloud project LOCATION : the dataset location DATASET ID : the DICOM store's parent dataset DICOM STORE ID : the DICOM store ID STUDY UID : the DICOMweb study unique identifier (UID) SERIES UID : the DICOMweb series unique identifier (UID) To send your request, choose one of these options: curl Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Before using any of the request data, make the following replacements: PROJECT ID : the ID of your Google Cloud project LOCATION : the dataset location DATASET ID : the DICOM store's parent dataset DICOM STORE ID : the DICOM store ID STUDY UID : the DICOMweb study unique identifier (UID) To send your request, choose one of these options: curl Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- You should receive a JSON response similar to the following: Response { "series": "projects/ PROJECT ID /locations/ LOCATION /datasets/ DATASET ID /dicomStores/ DICOM STORE ID /dicomWeb/studies/ STUDY UID /series/ SERIES UID ", "structuredStorageSizeBytes": " STRUCTURED STORAGE BYTES ", "blobStorageSizeBytes": " BLOB STORAGE BYTES ", "instanceCount": " INSTANCE COUNT " } Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Before using any of the request data, make the following replacements: PROJECT ID : the ID of your Google Cloud project LOCATION : the dataset location DATASET ID : the DICOM store's parent dataset DICOM STORE ID : the DICOM store ID To send your request, choose one of these options: curl Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .

