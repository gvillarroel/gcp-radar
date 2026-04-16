---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:44:19.055Z"
product_name: "Cloud Healthcare API"
product_slug: "cloud-healthcare-api"
feature_name: "DICOM blob storage settings configuration"
feature_slug: "dicom-blob-storage-settings-configuration"
latest_feature_date: "2023-11-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/healthcare-api/docs/dicom-storage-class"
  - "https://docs.cloud.google.com/healthcare-api/docs/dicom-store-metrics"
  - "https://docs.cloud.google.com/healthcare-api/docs/reference/rest"
keywords:
  - "dicom"
  - "blob"
  - "storage"
  - "settings"
  - "configuration"
  - "healthcare"
  - "introduces"
  - "preview"
---

# DICOM blob storage settings configuration

Product: Cloud Healthcare API
Coverage: MEDIUM

## Step 02 Summary

Cloud Healthcare API introduces preview support for configuring DICOM blob storage settings, including storage class selection for import and storage and storage class changes.

## Extended Definition

Cloud Healthcare API introduces preview support for configuring DICOM blob storage settings, including storage class selection for import and storage and storage class changes.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/healthcare-api/docs/dicom-storage-class](https://docs.cloud.google.com/healthcare-api/docs/dicom-storage-class)
- [https://docs.cloud.google.com/healthcare-api/docs/dicom-store-metrics](https://docs.cloud.google.com/healthcare-api/docs/dicom-store-metrics)
- [https://docs.cloud.google.com/healthcare-api/docs/reference/rest](https://docs.cloud.google.com/healthcare-api/docs/reference/rest)

## Supporting Pages

### DICOM storage classes \_|\_ Cloud Healthcare API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/healthcare-api/docs/dicom-storage-class](https://docs.cloud.google.com/healthcare-api/docs/dicom-storage-class)
- Source ID: `site-docs-root-2`
- Final score: 180
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Run the following command in the terminal to create or overwrite this file in the current directory: @' { "blobStorageSettings": { "blobStorageClass": " STORAGE CLASS " } } '@ Out-File -FilePath request.json -Encoding utf8 Then execute the following command to send your REST request: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://healthcare.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /datasets/ DATASET ID /dicomStores/ DICOM STORE ID /dicomWeb/studies/ STUDY INSTANCE UID /series/ SERIES INSTANCE UID /instances/ INSTANCE UID :setBlobStorageSettings" Select-Object -Expand Content APIs Explorer Copy the request body and open the method reference page .
- Run the following command in the terminal to create or overwrite this file in the current directory: @' { "blobStorageSettings": { "blobStorageClass": " STORAGE CLASS " }, "filterConfig": { "resourcePathsGcsUri": "gs:// CLOUD STORAGE BUCKET / FILTER FILE PATH " } } '@ Out-File -FilePath request.json -Encoding utf8 Then execute the following command to send your REST request: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json" -InFile request.json -Uri "https://healthcare.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /datasets/ DATASET ID /dicomStores/ DICOM STORE ID :setBlobStorageSettings" Select-Object -Expand Content The output is the following.
- Response { "name": "projects/ PROJECT ID /locations/ LOCATION /datasets/ DATASET ID /operations/ OPERATION ID ", "metadata": { "@type": "type.googleapis.com/google.cloud.healthcare.v1.OperationMetadata", "apiMethodName": "google.cloud.healthcare.v1.storageinfo.StorageInfoService.SetBlobStorageSettings", "createTime": " CREATE TIME ", "endTime": " END TIME ", "logsUrl": https://console.cloud.google.com/logs/query/ CLOUD LOGGING URL , "counter": { "success": " SUCCESS COUNT " } }, "done": true, "response": { "@type": "type.googleapis.com/google.protobuf.Empty" } } Change storage class for multiple objects using a filter file The following sections show how to create and use a filter file to change the storage class of DICOM objects based on a filter criteria.
- Run the following command in the terminal to create or overwrite this file in the current directory: cat > request.json STORAGE CLASS " } } EOF Then execute the following command to send your REST request: curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://healthcare.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /datasets/ DATASET ID /dicomStores/ DICOM STORE ID /dicomWeb/studies/ STUDY INSTANCE UID /series/ SERIES INSTANCE UID /instances/ INSTANCE UID :setBlobStorageSettings" PowerShell Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login .

### "View DICOM store, DICOM study, and DICOM series metrics \_|\_ Cloud Healthcare\

- URL: [https://docs.cloud.google.com/healthcare-api/docs/dicom-store-metrics](https://docs.cloud.google.com/healthcare-api/docs/dicom-store-metrics)
- Source ID: `site-docs-root-2`
- Final score: 153
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You should receive a JSON response similar to the following: Response { "series": "projects/ PROJECT ID /locations/ LOCATION /datasets/ DATASET ID /dicomStores/ DICOM STORE ID /dicomWeb/studies/ STUDY UID /series/ SERIES UID ", "structuredStorageSizeBytes": " STRUCTURED STORAGE BYTES ", "blobStorageSizeBytes": " BLOB STORAGE BYTES ", "instanceCount": " INSTANCE COUNT " } Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- You should receive a JSON response similar to the following: Response { "name": "projects/ PROJECT ID /locations/ LOCATION /datasets/ DATASET ID /dicomStores/ DICOM STORE ID ", "studyCount": " STUDY COUNT ", "seriesCount": " SERIES COUNT ", "instanceCount": " INSTANCE COUNT ", "structuredStorageSizeBytes": " STRUCTURED STORAGE BYTES ", "blobStorageSizeBytes": " BLOB STORAGE BYTES ", } View DICOM studies metrics The following samples show how to view DICOM studies metrics.
- You should receive a JSON response similar to the following: Response { "study": "projects/ PROJECT ID /locations/ LOCATION /datasets/ DATASET ID /dicomStores/ DICOM STORE ID /dicomWeb/studies/ STUDY UID ", "seriesCount": " SERIES COUNT ", "instanceCount": " INSTANCE COUNT ", "structuredStorageSizeBytes": " STRUCTURED STORAGE BYTES ", "blobStorageSizeBytes": " BLOB STORAGE BYTES " } View DICOM series metrics The following samples show how to view DICOM series metrics.
- Storage types Several metrics show the size, in bytes, of the following data storage classes: Blob storage Unstructured DICOM data and DICOM data that uses blob bytes .

### Cloud Healthcare API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/healthcare-api/docs/reference/rest](https://docs.cloud.google.com/healthcare-api/docs/reference/rest)
- Source ID: `site-api-reference`
- Final score: 147
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- REST Resource: v1beta1.projects.locations.datasets.dicomStores Methods create POST /v1beta1/{parent=projects/ /locations/ /datasets/ }/dicomStores Creates a new DICOM store within the parent dataset. deidentify POST /v1beta1/{sourceStore=projects/ /locations/ /datasets/ /dicomStores/ }:deidentify De-identifies data from the source store and writes it to the destination store. delete DELETE /v1beta1/{name=projects/ /locations/ /datasets/ /dicomStores/ } Deletes the specified DICOM store and removes all images that are contained within it. export POST /v1beta1/{name=projects/ /locations/ /datasets/ /dicomStores/ }:export Exports data to the specified destination by copying it from the DICOM store. get GET /v1beta1/{name=projects/ /locations/ /datasets/ /dicomStores/ } Gets the specified DICOM store. getDICOMStoreMetrics GET /v1beta1/{name=projects/ /locations/ /datasets/ /dicomStores/ }:getDICOMStoreMetrics Gets metrics associated with the DICOM store. getIamPolicy GET /v1beta1/{resource=projects/ /locations/ /datasets/ /dicomStores/ }:getIamPolicy Gets the access control policy for a resource. import POST /v1beta1/{name=projects/ /locations/ /datasets/ /dicomStores/ }:import Imports data into the DICOM store by copying it from the specified source. list GET /v1beta1/{parent=projects/ /locations/ /datasets/ }/dicomStores Lists the DICOM stores in the given dataset. patch PATCH /v1beta1/{dicomStore.name=projects/ /locations/ /datasets/ /dicomStores/ } Updates the specified DICOM store. searchForInstances GET /v1beta1/{parent=projects/ /locations/ /datasets/ /dicomStores/ }/dicomWeb/{dicomWebPath=instances} SearchForInstances returns a list of matching instances. searchForSeries GET /v1beta1/{parent=projects/ /locations/ /datasets/ /dicomStores/ }/dicomWeb/{dicomWebPath=series} SearchForSeries returns a list of matching series. searchForStudies GET /v1beta1/{parent=projects/ /locations/ /datasets/ /dicomStores/ }/dicomWeb/{dicomWebPath=studies} SearchForStudies returns a list of matching studies. setBlobStorageSettings POST /v1beta1/{resource=projects/ /locations/ /datasets/ /dicomStores/ }:setBlobStorageSettings SetBlobStorageSettings sets the blob storage settings of the specified resources. setIamPolicy POST /v1beta1/{resource=projects/ /locations/ /datasets/ /dicomStores/ }:setIamPolicy Sets the access control policy on the specified resource. storeInstances POST /v1beta1/{parent=projects/ /locations/ /datasets/ /dicomStores/ }/dicomWeb/{dicomWebPath=studies} StoreInstances stores DICOM instances associated with study instance unique identifiers (SUID). testIamPermissions POST /v1beta1/{resource=projects/ /locations/ /datasets/ /dicomStores/ }:testIamPermissions Returns permissions that a caller has on the specified resource. updateInstances PUT /v1beta1/{parent=projects/ /locations/ /datasets/ /dicomStores/ }/dicomWeb/{dicomWebPath=studies} UpdateInstances updates DICOM instances associated with study instance unique identifiers (SUID).
- REST Resource: v1.projects.locations.datasets.dicomStores Methods create POST /v1/{parent=projects/ /locations/ /datasets/ }/dicomStores Creates a new DICOM store within the parent dataset. deidentify POST /v1/{sourceStore=projects/ /locations/ /datasets/ /dicomStores/ }:deidentify De-identifies data from the source store and writes it to the destination store. delete DELETE /v1/{name=projects/ /locations/ /datasets/ /dicomStores/ } Deletes the specified DICOM store and removes all images that are contained within it. export POST /v1/{name=projects/ /locations/ /datasets/ /dicomStores/ }:export Exports data to the specified destination by copying it from the DICOM store. get GET /v1/{name=projects/ /locations/ /datasets/ /dicomStores/ } Gets the specified DICOM store. getDICOMStoreMetrics GET /v1/{name=projects/ /locations/ /datasets/ /dicomStores/ }:getDICOMStoreMetrics Gets metrics associated with the DICOM store. getIamPolicy GET /v1/{resource=projects/ /locations/ /datasets/ /dicomStores/ }:getIamPolicy Gets the access control policy for a resource. import POST /v1/{name=projects/ /locations/ /datasets/ /dicomStores/ }:import Imports data into the DICOM store by copying it from the specified source. list GET /v1/{parent=projects/ /locations/ /datasets/ }/dicomStores Lists the DICOM stores in the given dataset. patch PATCH /v1/{dicomStore.name=projects/ /locations/ /datasets/ /dicomStores/ } Updates the specified DICOM store. searchForInstances GET /v1/{parent=projects/ /locations/ /datasets/ /dicomStores/ }/dicomWeb/{dicomWebPath=instances} SearchForInstances returns a list of matching instances. searchForSeries GET /v1/{parent=projects/ /locations/ /datasets/ /dicomStores/ }/dicomWeb/{dicomWebPath=series} SearchForSeries returns a list of matching series. searchForStudies GET /v1/{parent=projects/ /locations/ /datasets/ /dicomStores/ }/dicomWeb/{dicomWebPath=studies} SearchForStudies returns a list of matching studies. setBlobStorageSettings POST /v1/{resource=projects/ /locations/ /datasets/ /dicomStores/ }:setBlobStorageSettings SetBlobStorageSettings sets the blob storage settings of the specified resources. setIamPolicy POST /v1/{resource=projects/ /locations/ /datasets/ /dicomStores/ }:setIamPolicy Sets the access control policy on the specified resource. storeInstances POST /v1/{parent=projects/ /locations/ /datasets/ /dicomStores/ }/dicomWeb/{dicomWebPath=studies} StoreInstances stores DICOM instances associated with study instance unique identifiers (SUID). testIamPermissions POST /v1/{resource=projects/ /locations/ /datasets/ /dicomStores/ }:testIamPermissions Returns permissions that a caller has on the specified resource.
- REST Resource: v1beta1.projects.locations.datasets.dicomStores.dicomWeb.studies Methods getStudyMetrics GET /v1beta1/{study=projects/ /locations/ /datasets/ /dicomStores/ /dicomWeb/studies/ }:getStudyMetrics GetStudyMetrics returns metrics for a study. setBlobStorageSettings POST /v1beta1/{resource=projects/ /locations/ /datasets/ /dicomStores/ /dicomWeb/studies/ }:setBlobStorageSettings SetBlobStorageSettings sets the blob storage settings of the specified resources.
- REST Resource: v1.projects.locations.datasets.dicomStores.dicomWeb.studies Methods getStudyMetrics GET /v1/{study=projects/ /locations/ /datasets/ /dicomStores/ /dicomWeb/studies/ }:getStudyMetrics GetStudyMetrics returns metrics for a study. setBlobStorageSettings POST /v1/{resource=projects/ /locations/ /datasets/ /dicomStores/ /dicomWeb/studies/ }:setBlobStorageSettings SetBlobStorageSettings sets the blob storage settings of the specified resources.

