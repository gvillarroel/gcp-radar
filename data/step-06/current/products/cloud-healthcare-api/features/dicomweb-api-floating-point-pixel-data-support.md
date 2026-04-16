---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:44:19.039Z"
product_name: "Cloud Healthcare API"
product_slug: "cloud-healthcare-api"
feature_name: "DICOMweb API floating-point pixel data support"
feature_slug: "dicomweb-api-floating-point-pixel-data-support"
latest_feature_date: "2024-09-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/healthcare-api/docs/how-tos/dicomweb"
  - "https://docs.cloud.google.com/healthcare-api/docs/dicom"
  - "https://docs.cloud.google.com/healthcare-api/docs/dicom-store-metrics"
keywords:
  - "dicomweb"
  - "floating"
  - "point"
  - "pixel"
  - "now"
  - "supports"
  - "dicom"
  - "images"
---

# DICOMweb API floating-point pixel data support

Product: Cloud Healthcare API
Coverage: MEDIUM

## Step 02 Summary

DICOMweb API now supports floating-point pixel data and DICOM images with a Bits Allocated value of 1; DICOMweb API now supports floating-point pixel data and DICOM images with a Bits Allocated value of 1.

## Extended Definition

DICOMweb API now supports floating-point pixel data and DICOM images with a Bits Allocated value of 1; DICOMweb API now supports floating-point pixel data and DICOM images with a Bits Allocated value of 1.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/healthcare-api/docs/how-tos/dicomweb](https://docs.cloud.google.com/healthcare-api/docs/how-tos/dicomweb)
- [https://docs.cloud.google.com/healthcare-api/docs/dicom](https://docs.cloud.google.com/healthcare-api/docs/dicom)
- [https://docs.cloud.google.com/healthcare-api/docs/dicom-store-metrics](https://docs.cloud.google.com/healthcare-api/docs/dicom-store-metrics)

## Supporting Pages

### "Using the DICOMweb standard \_|\_ Cloud Healthcare API \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/healthcare-api/docs/how-tos/dicomweb](https://docs.cloud.google.com/healthcare-api/docs/how-tos/dicomweb)
- Source ID: `site-docs-root`
- Final score: 202
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Before using any of the request data, make the following replacements: PROJECT ID : the ID of your Google Cloud project LOCATION : the dataset location DATASET ID : the DICOM store's parent dataset DICOM STORE ID : the DICOM store ID DICOM INSTANCE FILE : the path to a DICOM instance file on your local machine ending in the .dcm suffix STORAGE CLASS : the storage class for the DICOM instance in the DICOM store from STANDARD , NEARLINE , COLDLINE , and ARCHIVE $cred = gcloud auth application-default print-access-token $headers = @ { "Authorization" = "Bearer $cred " ; "Storage-Class" = " STORAGE CLASS " } Invoke-WebRequest -Method Post -Headers $headers -ContentType: "application/dicom" -InFile DCM FILE .dcm -Uri "https://healthcare.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /datasets/ DATASET ID /dicomStores/ DICOM STORE ID /dicomWeb/studies" Select-Object -Expand Content If the request is successful, the server returns the response in JSON format: <NativeDicomModel> <DicomAttribute tag="00081190" vr="UR" keyword="RetrieveURL"> <Value number="1">https://healthcare.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /datasets/ DATASET ID /dicomStores/ DICOM STORE ID /dicomWeb/studies/ STUDY INSTANCE UID </Value> </DicomAttribute> <DicomAttribute tag="00081199" vr="SQ" keyword="ReferencedSOPSequence"> <Item number="1"> <DicomAttribute tag="00081150" vr="UI" keyword="ReferencedSOPClassUID"> <Value number="1"> SOP CLASS UID </Value> </DicomAttribute> <DicomAttribute tag="00081155" vr="UI" keyword="ReferencedSOPInstanceUID"> <Value number="1"> SOP INSTANCE UID </Value> </DicomAttribute> <DicomAttribute tag="00081190" vr="UR" keyword="RetrieveURL"> <Value number="1">https://healthcare.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /datasets/ DATASET ID /dicomStores/ DICOM STORE ID /dicomWeb/studies/ STUDY INSTANCE UID /series/ SERIES INSTANCE UID /instances/ INSTANCE UID </Value> </DicomAttribute> </Item> </DicomAttribute> </NativeDicomModel> Create DICOM instances from JSON metadata and JPEG images The Cloud Healthcare API can create DICOM instances using a JSON metadata file and a JPEG file.
- AuthorizedSession ( scoped credentials ) URL to the Cloud Healthcare API endpoint and version base url = "https://healthcare.googleapis.com/v1" TODO(developer): Uncomment these lines and replace with your values. project id = 'my-project' # replace with your GCP project ID location = 'us-central1' # replace with the parent dataset's location dataset id = 'my-dataset' # replace with the parent dataset's ID dicom store id = 'my-dicom-store' # replace with the DICOM store ID study uid = '1.3.6.1.4.1.5062.55.1.2270943358.716200484.1363785608958.61.0' # replace with the study UID series uid = '2.24.52329571877967561426579904912379710633' # replace with the series UID instance uid = '1.3.6.2.4.2.14619.5.2.1.6280.6001.129311971280445372188125744148' # replace with the instance UID url = f " { base url } /projects/ { project id } /locations/ { location } " dicom store path = " {} /datasets/ {} /dicomStores/ {} " . format ( url , dataset id , dicom store id ) dicomweb path = " {} /dicomWeb/studies/ {} /series/ {} /instances/ {} " . format ( dicom store path , study uid , series uid , instance uid ) file name = "instance.dcm" Set the required Accept header on the request headers = { "Accept" : "application/dicom; transfer-syntax= " } response = session . get ( dicomweb path , headers = headers ) response . raise for status () with open ( file name , "wb" ) as f : f . write ( response . content ) print ( "Retrieved DICOM instance and saved to {} in current directory" . format ( file name ) ) return response Retrieve consumer image formats The following samples show how to retrieve a consumer imaging format like JPEG or PNG using the Cloud Healthcare API implementation of Rendered Resources .
- AuthorizedSession ( scoped credentials ) URL to the Cloud Healthcare API endpoint and version base url = "https://healthcare.googleapis.com/v1" TODO(developer): Uncomment these lines and replace with your values. project id = 'my-project' # replace with your GCP project ID location = 'us-central1' # replace with the parent dataset's location dataset id = 'my-dataset' # replace with the parent dataset's ID dicom store id = 'my-dicom-store' # replace with the DICOM store ID study uid = '1.3.6.1.4.1.5062.55.1.2270943358.716200484.1363785608958.61.0' # replace with the study UID series uid = '2.24.52329571877967561426579904912379710633' # replace with the series UID instance uid = '1.3.6.2.4.2.14619.5.2.1.6280.6001.129311971280445372188125744148' # replace with the instance UID url = f " { base url } /projects/ { project id } /locations/ { location } " dicom store path = " {} /datasets/ {} /dicomStores/ {} " . format ( url , dataset id , dicom store id ) dicomweb path = " {} /dicomWeb/studies/ {} /series/ {} /instances/ {} /rendered" . format ( dicom store path , study uid , series uid , instance uid ) file name = "rendered image.png" Sets the required Accept header on the request for a PNG image headers = { "Accept" : "image/png" } response = session . get ( dicomweb path , headers = headers ) response . raise for status () with open ( file name , "wb" ) as f : f . write ( response . content ) print ( "Retrieved rendered image and saved to {} in current directory" . format ( file name ) ) return response Retrieve metadata You can retrieve the metadata for all instances in a studies or series.
- AuthorizedSession ( scoped credentials ) URL to the Cloud Healthcare API endpoint and version base url = "https://healthcare.googleapis.com/v1" TODO(developer): Uncomment these lines and replace with your values. project id = 'my-project' # replace with your GCP project ID location = 'us-central1' # replace with the parent dataset's location dataset id = 'my-dataset' # replace with the parent dataset's ID dicom store id = 'my-dicom-store' # replace with the DICOM store ID dcm file = 'dicom000 0001.dcm' # replace with a DICOM file url = f " { base url } /projects/ { project id } /locations/ { location } " dicomweb path = " {} /datasets/ {} /dicomStores/ {} /dicomWeb/studies" . format ( url , dataset id , dicom store id ) with open ( dcm file , "rb" ) as dcm : dcm content = dcm . read () Sets required "application/dicom" header on the request headers = { "Content-Type" : "application/dicom" } response = session . post ( dicomweb path , data = dcm content , headers = headers ) response . raise for status () print ( "Stored DICOM instance:" ) print ( response . text ) return response Store a DICOM study or series using a multipart message The following samples show how to store a DICOM study or series, consisting of multiple instances, using a multipart message.

### "DICOM conformance statement \_|\_ Cloud Healthcare API \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/healthcare-api/docs/dicom](https://docs.cloud.google.com/healthcare-api/docs/dicom)
- Source ID: `site-api-reference`
- Final score: 156
- Re-rank relevance: N/A

Evidence snippets:
- DICOM instances In addition to the above Accept Headers, RetrieveInstance supports single part content types for convenience: application/dicom; transfer-syntax= application/dicom; transfer-syntax=1.2.840.10008.1.2 application/dicom; transfer-syntax=1.2.840.10008.1.2.1 application/dicom; transfer-syntax=1.2.840.10008.1.2.1.99 application/dicom; transfer-syntax=1.2.840.10008.1.2.4.50 application/dicom; transfer-syntax=1.2.840.10008.1.2.4.51 application/dicom; transfer-syntax=1.2.840.10008.1.2.4.57 application/dicom; transfer-syntax=1.2.840.10008.1.2.4.70 application/dicom; transfer-syntax=1.2.840.10008.1.2.4.80 application/dicom; transfer-syntax=1.2.840.10008.1.2.4.81 application/dicom; transfer-syntax=1.2.840.10008.1.2.4.90 application/dicom; transfer-syntax=1.2.840.10008.1.2.4.91 application/dicom; transfer-syntax=1.2.840.10008.1.2.4.110 application/dicom; transfer-syntax=1.2.840.10008.1.2.4.111 application/dicom; transfer-syntax=1.2.840.10008.1.2.4.112 application/dicom; transfer-syntax=1.2.840.10008.1.2.4.201 application/dicom; transfer-syntax=1.2.840.10008.1.2.4.202 application/dicom; transfer-syntax=1.2.840.10008.1.2.4.203 application/dicom; transfer-syntax=1.2.840.10008.1.2.5 application/dicom; transfer-syntax=1.2.840.10008.1.2.8.1 This is not part of the official DICOMweb standard.
- Metadata resources The following Accept Headers are supported: application/dicom+json (default) multipart/related; type=application/dicom+xml Tags that are encoded as InlineBinary elements will be encoded using little-endian byte ordering, as the transfer syntax parameter is not supported on endpoints requesting metadata resources.
- The Retrieve Transaction supports the retrieving following resources: DICOM Resources: Study Series Instance Frames Bulkdata Metadata Resources Study Series Instance Rendered Resources Instance Frames It does not support Thumbnail resources.
- Also, images with a Bits Allocated (0028, 0100) value of 1 or that are stored in either Float Pixel Data (7FE0,0008), Double Float Pixel Data (7FE0,0009) tags can only be transcoded between native formats.

### "View DICOM store, DICOM study, and DICOM series metrics \_|\_ Cloud Healthcare\

- URL: [https://docs.cloud.google.com/healthcare-api/docs/dicom-store-metrics](https://docs.cloud.google.com/healthcare-api/docs/dicom-store-metrics)
- Source ID: `site-docs-root-2`
- Final score: 112
- Re-rank relevance: N/A

Evidence snippets:
- Before using any of the request data, make the following replacements: PROJECT ID : the ID of your Google Cloud project LOCATION : the dataset location DATASET ID : the DICOM store's parent dataset DICOM STORE ID : the DICOM store ID STUDY UID : the DICOMweb study unique identifier (UID) SERIES UID : the DICOMweb series unique identifier (UID) To send your request, choose one of these options: curl Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Before using any of the request data, make the following replacements: PROJECT ID : the ID of your Google Cloud project LOCATION : the dataset location DATASET ID : the DICOM store's parent dataset DICOM STORE ID : the DICOM store ID STUDY UID : the DICOMweb study unique identifier (UID) To send your request, choose one of these options: curl Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- You should receive a JSON response similar to the following: Response { "series": "projects/ PROJECT ID /locations/ LOCATION /datasets/ DATASET ID /dicomStores/ DICOM STORE ID /dicomWeb/studies/ STUDY UID /series/ SERIES UID ", "structuredStorageSizeBytes": " STRUCTURED STORAGE BYTES ", "blobStorageSizeBytes": " BLOB STORAGE BYTES ", "instanceCount": " INSTANCE COUNT " } Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- You should receive a JSON response similar to the following: Response { "study": "projects/ PROJECT ID /locations/ LOCATION /datasets/ DATASET ID /dicomStores/ DICOM STORE ID /dicomWeb/studies/ STUDY UID ", "seriesCount": " SERIES COUNT ", "instanceCount": " INSTANCE COUNT ", "structuredStorageSizeBytes": " STRUCTURED STORAGE BYTES ", "blobStorageSizeBytes": " BLOB STORAGE BYTES " } View DICOM series metrics The following samples show how to view DICOM series metrics.

