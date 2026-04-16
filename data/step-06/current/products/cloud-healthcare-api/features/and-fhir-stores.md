---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:44:19.147Z"
product_name: "Cloud Healthcare API"
product_slug: "cloud-healthcare-api"
feature_name: "and FHIR stores"
feature_slug: "and-fhir-stores"
latest_feature_date: "2019-04-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/healthcare-api/docs/how-tos/dicom"
  - "https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir"
  - "https://docs.cloud.google.com/healthcare-api/docs/quickstart"
keywords:
  - "fhir"
  - "stores"
  - "user"
  - "labels"
  - "were"
  - "added"
  - "dicom"
  - "hl7v2"
---

# and FHIR stores

Product: Cloud Healthcare API
Coverage: MEDIUM

## Step 02 Summary

User labels were added to DICOM, HL7v2, and FHIR stores to support resource filtering and billing charge views by label.

## Extended Definition

User labels were added to DICOM, HL7v2, and FHIR stores to support resource filtering and billing charge views by label.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/healthcare-api/docs/how-tos/dicom](https://docs.cloud.google.com/healthcare-api/docs/how-tos/dicom)
- [https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir](https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir)
- [https://docs.cloud.google.com/healthcare-api/docs/quickstart](https://docs.cloud.google.com/healthcare-api/docs/quickstart)

## Supporting Pages

### "Creating and managing DICOM stores \_|\_ Cloud Healthcare API \_|\_ Google\

- URL: [https://docs.cloud.google.com/healthcare-api/docs/how-tos/dicom](https://docs.cloud.google.com/healthcare-api/docs/how-tos/dicom)
- Source ID: `site-docs-root`
- Final score: 201
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Run the following command in the terminal to create or overwrite this file in the current directory: cat > request.json PROJECT ID /topics/ PUBSUB TOPIC " } ], "labels": { " KEY 1 ": " VALUE 1 ", " KEY 2 ": " VALUE 2 " } } EOF Then execute the following command to send your REST request: curl -X PATCH \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://healthcare.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /datasets/ DATASET ID /dicomStores/ DICOM STORE ID ?updateMask=notificationConfigs,labels" PowerShell Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login .
- Before using any of the request data, make the following replacements: PROJECT ID : the ID of your Google Cloud project LOCATION : the dataset location DATASET ID : the DICOM store's parent dataset DICOM STORE ID : the DICOM store ID PUBSUB TOPIC : a Pub/Sub topic to which messages are published when an event occurs in a data store KEY 1 : the first label key VALUE 1 : the first label value KEY 2 : the second label key VALUE 2 : the second label value Request JSON body: { "notificationConfigs": [ { "pubsubTopic": "projects/ PROJECT ID /topics/ PUBSUB TOPIC " } ], "labels": { " KEY 1 ": " VALUE 1 ", " KEY 2 ": " VALUE 2 " } } To send your request, choose one of these options: curl Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Run the following command in the terminal to create or overwrite this file in the current directory: @' { "notificationConfigs": [ { "pubsubTopic": "projects/ PROJECT ID /topics/ PUBSUB TOPIC " } ], "labels": { " KEY 1 ": " VALUE 1 ", " KEY 2 ": " VALUE 2 " } } '@ Out-File -FilePath request.json -Encoding utf8 Then execute the following command to send your REST request: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method PATCH -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://healthcare.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /datasets/ DATASET ID /dicomStores/ DICOM STORE ID ?updateMask=notificationConfigs,labels" Select-Object -Expand Content APIs Explorer Copy the request body and open the method reference page .
- Execute the following command: curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d "" \ "https://healthcare.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /datasets/ DATASET ID /dicomStores?dicomStoreId= DICOM STORE ID " PowerShell Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login .

### "Creating and managing FHIR stores \_|\_ Cloud Healthcare API \_|\_ Google\

- URL: [https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir](https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir)
- Source ID: `site-docs-root`
- Final score: 187
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Run the following command in the terminal to create or overwrite this file in the current directory: cat > request.json PROJECT ID /topics/ PUBSUB TOPIC ID " } ], "labels": { " KEY1 ": " VALUE1 ", " KEY2 ": " VALUE2 " } } EOF Then execute the following command to send your REST request: curl -X PATCH \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://healthcare.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /datasets/ DATASET ID /fhirStores/ FHIR STORE ID ?updateMask=notificationConfig,labels" PowerShell Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login .
- Run the following command in the terminal to create or overwrite this file in the current directory: @' { "notificationConfigs": [ { "pubsubTopic": "projects/ PROJECT ID /topics/ PUBSUB TOPIC ID " } ], "labels": { " KEY1 ": " VALUE1 ", " KEY2 ": " VALUE2 " } } '@ Out-File -FilePath request.json -Encoding utf8 Then execute the following command to send your REST request: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method PATCH -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://healthcare.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /datasets/ DATASET ID /fhirStores/ FHIR STORE ID ?updateMask=notificationConfig,labels" Select-Object -Expand Content APIs Explorer Copy the request body and open the method reference page .
- Run the following command in the terminal to create or overwrite this file in the current directory: cat > request.json BASE RESOURCE VALIDATION TYPE ": true } } EOF Then execute the following command to send your REST request: curl -X PATCH \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://healthcare.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /datasets/ DATASET ID /fhirStores/ FHIR STORE ID ?updateMask=validationConfig" PowerShell Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login .
- Run the following command in the terminal to create or overwrite this file in the current directory: cat > request.json FHIR STORE VERSION " } EOF Then execute the following command to send your REST request: curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://healthcare.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /datasets/ DATASET ID /fhirStores?fhirStoreId= FHIR STORE ID " PowerShell Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login .

### "Quickstart: Store healthcare data with curl and PowerShell \_|\_ Cloud Healthcare\

- URL: [https://docs.cloud.google.com/healthcare-api/docs/quickstart](https://docs.cloud.google.com/healthcare-api/docs/quickstart)
- Source ID: `site-docs-root`
- Final score: 169
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Response { "name": "projects/ PROJECT ID /locations/ LOCATION /datasets/ DATASET ID /operations/ OPERATION ID ", "metadata": { "@type": "type.googleapis.com/google.cloud.healthcare.v1.OperationMetadata", "apiMethodName": "google.cloud.healthcare.v1.dataset.DatasetService.CreateDataset", "createTime": " YYYY-MM-DDTHH:MM:SS+ZZ:ZZ ", "endTime": " YYYY-MM-DDTHH:MM:SS+ZZ:ZZ ", "logsUrl": "https://console.cloud.google.com/ CLOUD LOGGING URL " "counter": { "success": " SUCCESS COUNT ", // If there were any failures, they display in the failure field. "failure": " FAILURE COUNT " } }, "done": true, // The response field only displays if there were no errors. "response": { "@type": "type.googleapis.com/google.cloud.healthcare.v1.dataset.Dataset", "name": "projects/ PROJECT ID /locations/us-central1/datasets/my-dataset", }, // If there were any errors, an error field displays instead of a response field. // See Troubleshooting long-running operations for a list of response codes. "error": { "code": ERROR CODE , "message": " DESCRIPTION ", "details": [ { "@type": "...", FIELD1 : ..., ... } ] } } To complete this quickstart, choose from one of the following sections: Store and view a DICOM instance Store and view FHIR resources Store and view an HL7v2 message Store and view a DICOM instance This section shows how to complete the following tasks: Create a DICOM store.
- Run the following command once for each of the following IAM roles: roles/healthcare.datasetAdmin, roles/healthcare.fhirStoreAdmin, roles/healthcare.dicomStoreAdmin, roles/healthcare.hl7V2StoreAdmin gcloud projects add-iam-policy-binding PROJECT ID --member = "user: USER IDENTIFIER " --role = ROLE Replace the following: PROJECT ID : Your project ID.
- Run the following command once for each of the following IAM roles: roles/healthcare.datasetAdmin, roles/healthcare.fhirStoreAdmin, roles/healthcare.dicomStoreAdmin, roles/healthcare.hl7V2StoreAdmin gcloud projects add-iam-policy-binding PROJECT ID --member = "user: USER IDENTIFIER " --role = ROLE Replace the following: PROJECT ID : Your project ID.
- Create one of the following data stores inside the dataset: Digital Imaging and Communications in Medicine (DICOM) store Fast Healthcare Interoperability Resources (FHIR) store Health Level Seven International Version 2 (HL7v2) store Store and inspect a particular type of medical data in the DICOM, FHIR, or HL7v2 store.

