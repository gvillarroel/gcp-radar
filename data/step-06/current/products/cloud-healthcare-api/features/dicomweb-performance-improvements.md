---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:44:19.153Z"
product_name: "Cloud Healthcare API"
product_slug: "cloud-healthcare-api"
feature_name: "DICOMweb performance improvements"
feature_slug: "dicomweb-performance-improvements"
latest_feature_date: "2019-04-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/healthcare-api/docs/how-tos/dicomweb"
  - "https://docs.cloud.google.com/healthcare-api/docs/best-practices-data-throughput"
  - "https://docs.cloud.google.com/healthcare-api/docs/dicom-storage-class"
keywords:
  - "dicomweb"
  - "performance"
  - "improvements"
  - "healthcare"
  - "was"
  - "improved"
---

# DICOMweb performance improvements

Product: Cloud Healthcare API
Coverage: MEDIUM

## Step 02 Summary

DICOMweb performance in Cloud Healthcare API was improved.

## Extended Definition

DICOMweb performance in Cloud Healthcare API was improved.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/healthcare-api/docs/how-tos/dicomweb](https://docs.cloud.google.com/healthcare-api/docs/how-tos/dicomweb)
- [https://docs.cloud.google.com/healthcare-api/docs/best-practices-data-throughput](https://docs.cloud.google.com/healthcare-api/docs/best-practices-data-throughput)
- [https://docs.cloud.google.com/healthcare-api/docs/dicom-storage-class](https://docs.cloud.google.com/healthcare-api/docs/dicom-storage-class)

## Supporting Pages

### "Using the DICOMweb standard \_|\_ Cloud Healthcare API \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/healthcare-api/docs/how-tos/dicomweb](https://docs.cloud.google.com/healthcare-api/docs/how-tos/dicomweb)
- Source ID: `site-docs-root`
- Final score: 80
- Re-rank relevance: N/A

Evidence snippets:
- Before using any of the request data, make the following replacements: PROJECT ID : the ID of your Google Cloud project LOCATION : the dataset location DATASET ID : the DICOM store's parent dataset DICOM STORE ID : the DICOM store ID DICOM INSTANCE FILE : the path to a DICOM instance file on your local machine ending in the .dcm suffix STORAGE CLASS : the storage class for the DICOM instance in the DICOM store from STANDARD , NEARLINE , COLDLINE , and ARCHIVE $cred = gcloud auth application-default print-access-token $headers = @ { "Authorization" = "Bearer $cred " ; "Storage-Class" = " STORAGE CLASS " } Invoke-WebRequest -Method Post -Headers $headers -ContentType: "application/dicom" -InFile DCM FILE .dcm -Uri "https://healthcare.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /datasets/ DATASET ID /dicomStores/ DICOM STORE ID /dicomWeb/studies" Select-Object -Expand Content If the request is successful, the server returns the response in JSON format: <NativeDicomModel> <DicomAttribute tag="00081190" vr="UR" keyword="RetrieveURL"> <Value number="1">https://healthcare.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /datasets/ DATASET ID /dicomStores/ DICOM STORE ID /dicomWeb/studies/ STUDY INSTANCE UID </Value> </DicomAttribute> <DicomAttribute tag="00081199" vr="SQ" keyword="ReferencedSOPSequence"> <Item number="1"> <DicomAttribute tag="00081150" vr="UI" keyword="ReferencedSOPClassUID"> <Value number="1"> SOP CLASS UID </Value> </DicomAttribute> <DicomAttribute tag="00081155" vr="UI" keyword="ReferencedSOPInstanceUID"> <Value number="1"> SOP INSTANCE UID </Value> </DicomAttribute> <DicomAttribute tag="00081190" vr="UR" keyword="RetrieveURL"> <Value number="1">https://healthcare.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /datasets/ DATASET ID /dicomStores/ DICOM STORE ID /dicomWeb/studies/ STUDY INSTANCE UID /series/ SERIES INSTANCE UID /instances/ INSTANCE UID </Value> </DicomAttribute> </Item> </DicomAttribute> </NativeDicomModel> Create DICOM instances from JSON metadata and JPEG images The Cloud Healthcare API can create DICOM instances using a JSON metadata file and a JPEG file.
- The output file, which you send to the Cloud Healthcare API, is called multipart-request.file : cat opening.file instance.json middle.file image.jpg closing.file > multipart-request.file Make a POST request and specify the following information: The name of the parent dataset The name of the DICOM store The multipart-request.file file An access token The following sample shows a POST request using curl . curl -X POST \ -H "Content-Type: multipart/related; type=\"application/dicom+json\"; boundary=DICOMwebBoundary" \ -H "Authorization: Bearer $( gcloud auth application-default print-access-token ) " \ https://healthcare.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /datasets/ DATASET ID /dicomStores/ DICOM STORE ID /dicomWeb/studies \ --data-binary @multipart-request.file If the request is successful, the server returns the response in XML format: <NativeDicomModel> <DicomAttribute tag="00081190" vr="UR" keyword="RetrieveURL"> <Value number="1">https://healthcare.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /datasets/ DATASET ID /dicomStores/ DICOM STORE ID /dicomWeb/studies/ STUDY INSTANCE UID </Value> </DicomAttribute> <DicomAttribute tag="00081199" vr="SQ" keyword="ReferencedSOPSequence"> <Item number="1"> <DicomAttribute tag="00081150" vr="UI" keyword="ReferencedSOPClassUID"> <Value number="1"> SOP CLASS UID </Value> </DicomAttribute> <DicomAttribute tag="00081155" vr="UI" keyword="ReferencedSOPInstanceUID"> <Value number="1"> SOP INSTANCE UID </Value> </DicomAttribute> <DicomAttribute tag="00081190" vr="UR" keyword="RetrieveURL"> <Value number="1">https://healthcare.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /datasets/ DATASET ID /dicomStores/ DICOM STORE ID /dicomWeb/studies/ STUDY INSTANCE UID /series/ SERIES INSTANCE UID /instances/ INSTANCE UID </Value> </DicomAttribute> </Item> </DicomAttribute> </NativeDicomModel> Use the DICOMweb CLI The following samples show how to use the Cloud Healthcare API DICOMweb CLI to store one or more DICOM instances.
- Before using any of the request data, make the following replacements: PROJECT ID : the ID of your Google Cloud project LOCATION : the dataset location DATASET ID : the DICOM store's parent dataset DICOM STORE ID : the DICOM store ID DICOM INSTANCE FILE : the path to a DICOM instance file on your local machine ending in the .dcm suffix STORAGE CLASS : the storage class for the DICOM instance in the DICOM store from STANDARD , NEARLINE , COLDLINE , and ARCHIVE curl -X POST \ -H "Authorization: Bearer $( gcloud auth application-default print-access-token ) " \ -H "Content-Type: application/dicom" \ -H "Storage-Class: STORAGE CLASS " \ --data-binary @ DICOM INSTANCE FILE \ "https://healthcare.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /datasets/ DATASET ID /dicomStores/ DICOM STORE ID /dicomWeb/studies" If the request is successful, the server returns the response: <NativeDicomModel> <DicomAttribute tag="00081190" vr="UR" keyword="RetrieveURL"> <Value number="1">https://healthcare.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /datasets/ DATASET ID /dicomStores/ DICOM STORE ID /dicomWeb/studies/ STUDY INSTANCE UID </Value> </DicomAttribute> <DicomAttribute tag="00081199" vr="SQ" keyword="ReferencedSOPSequence"> <Item number="1"> <DicomAttribute tag="00081150" vr="UI" keyword="ReferencedSOPClassUID"> <Value number="1"> SOP CLASS UID </Value> </DicomAttribute> <DicomAttribute tag="00081155" vr="UI" keyword="ReferencedSOPInstanceUID"> <Value number="1"> SOP INSTANCE UID </Value> </DicomAttribute> <DicomAttribute tag="00081190" vr="UR" keyword="RetrieveURL"> <Value number="1">https://healthcare.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /datasets/ DATASET ID /dicomStores/ DICOM STORE ID /dicomWeb/studies/ STUDY INSTANCE UID /series/ SERIES INSTANCE UID /instances/ INSTANCE UID </Value> </DicomAttribute> </Item> </DicomAttribute> </NativeDicomModel> PowerShell Use the projects.locations.datasets.dicomStores.storeInstances method.
- AuthorizedSession ( scoped credentials ) URL to the Cloud Healthcare API endpoint and version base url = "https://healthcare.googleapis.com/v1" TODO(developer): Uncomment these lines and replace with your values. project id = 'my-project' # replace with your GCP project ID location = 'us-central1' # replace with the parent dataset's location dataset id = 'my-dataset' # replace with the parent dataset's ID dicom store id = 'my-dicom-store' # replace with the DICOM store ID study uid = '1.3.6.1.4.1.5062.55.1.2270943358.716200484.1363785608958.61.0' # replace with the study UID series uid = '2.24.52329571877967561426579904912379710633' # replace with the series UID instance uid = '1.3.6.2.4.2.14619.5.2.1.6280.6001.129311971280445372188125744148' # replace with the instance UID url = f " { base url } /projects/ { project id } /locations/ { location } " dicom store path = " {} /datasets/ {} /dicomStores/ {} " . format ( url , dataset id , dicom store id ) dicomweb path = " {} /dicomWeb/studies/ {} /series/ {} /instances/ {} " . format ( dicom store path , study uid , series uid , instance uid ) file name = "instance.dcm" Set the required Accept header on the request headers = { "Accept" : "application/dicom; transfer-syntax= " } response = session . get ( dicomweb path , headers = headers ) response . raise for status () with open ( file name , "wb" ) as f : f . write ( response . content ) print ( "Retrieved DICOM instance and saved to {} in current directory" . format ( file name ) ) return response Retrieve consumer image formats The following samples show how to retrieve a consumer imaging format like JPEG or PNG using the Cloud Healthcare API implementation of Rendered Resources .

### "Data ingestion throughput best practices \_|\_ Cloud Healthcare API \_|\_\

- URL: [https://docs.cloud.google.com/healthcare-api/docs/best-practices-data-throughput](https://docs.cloud.google.com/healthcare-api/docs/best-practices-data-throughput)
- Source ID: `site-docs-root-2`
- Final score: 58
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If throttling occurs, transaction bundles might fail due to high levels of lock contention and produce the following error: HTTP/ 1.1 429 Too ma n y reques ts ... { "issue" : [ { "code" : "too-costly" , "details" : { "text" : "operation too costly" }, "diagnostics" : "aborted due to cumulative heavy load or lock contention in this project while executing transactional bundle, please see https://cloud.google.com/healthcare-api/docs/troubleshooting#fhir transaction bundle heavy load for more information" , "severity" : "error" } ], "resourceType" : "OperationOutcome" } To troubleshoot the error, go to the FHIR transactional bundle aborted due to cumulative heavy load link in the diagnostics field.
- DICOM data storage options You can use the following methods to achieve high data throughput when sending data from a Picture Archiving and Communication System (PACS) to the Cloud Healthcare API: The open source Cloud Healthcare API DICOM adapter using the DICOM message service element (DIMSE) protocol The adapter optimizes data throughput when you sync a PACS with the Cloud Healthcare API.
- Prevent the rate limiter queue from becoming full by monitoring these resources: FHIR operation quotas in the Cloud Healthcare API Rate limiter quotas Rate limiter errors If the rate limiter queue becomes full, your system must alert a human and stop the client from sending requests.
- Choose between asynchronous and synchronous processing A client-side proxy layer that wraps requests to the Cloud Healthcare API, shown in Handle errors at multiple layers , can also control throttling across services that use the Cloud Healthcare API.

### DICOM storage classes \_|\_ Cloud Healthcare API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/healthcare-api/docs/dicom-storage-class](https://docs.cloud.google.com/healthcare-api/docs/dicom-storage-class)
- Source ID: `site-docs-root-2`
- Final score: 48
- Re-rank relevance: N/A

Evidence snippets:
- Run the following command in the terminal to create or overwrite this file in the current directory: @' { "blobStorageSettings": { "blobStorageClass": " STORAGE CLASS " } } '@ Out-File -FilePath request.json -Encoding utf8 Then execute the following command to send your REST request: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://healthcare.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /datasets/ DATASET ID /dicomStores/ DICOM STORE ID /dicomWeb/studies/ STUDY INSTANCE UID /series/ SERIES INSTANCE UID /instances/ INSTANCE UID :setBlobStorageSettings" Select-Object -Expand Content APIs Explorer Copy the request body and open the method reference page .
- Run the following command in the terminal to create or overwrite this file in the current directory: cat > request.json STORAGE CLASS " } } EOF Then execute the following command to send your REST request: curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://healthcare.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /datasets/ DATASET ID /dicomStores/ DICOM STORE ID /dicomWeb/studies/ STUDY INSTANCE UID /series/ SERIES INSTANCE UID /instances/ INSTANCE UID :setBlobStorageSettings" PowerShell Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login .
- Execute the following command: curl -X GET \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ "https://healthcare.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /datasets/ DATASET ID /dicomStores/ DICOM STORE ID /dicomWeb/studies/ STUDY INSTANCE UID /series/ SERIES INSTANCE UID /instances/ INSTANCE UID :getStorageInfo" PowerShell Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login .
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers ` -Uri "https://healthcare.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /datasets/ DATASET ID /dicomStores/ DICOM STORE ID /dicomWeb/studies/ STUDY INSTANCE UID /series/ SERIES INSTANCE UID /instances/ INSTANCE UID :getStorageInfo" Select-Object -Expand Content APIs Explorer Open the method reference page .

