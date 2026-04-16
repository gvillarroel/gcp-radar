---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:44:19.071Z"
product_name: "Cloud Healthcare API"
product_slug: "cloud-healthcare-api"
feature_name: "DICOM metadata streaming to BigQuery"
feature_slug: "dicom-metadata-streaming-to-bigquery"
latest_feature_date: "2023-07-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/healthcare-api/docs/dicom"
  - "https://docs.cloud.google.com/healthcare-api/docs/how-tos/dicomweb"
  - "https://docs.cloud.google.com/healthcare-api/docs/dicom-store-metrics"
keywords:
  - "dicom"
  - "metadata"
  - "streaming"
  - "bigquery"
  - "now"
  - "generally"
  - "available"
---

# DICOM metadata streaming to BigQuery

Product: Cloud Healthcare API
Coverage: MEDIUM

## Step 02 Summary

Streaming DICOM metadata to BigQuery is now generally available.

## Extended Definition

Streaming DICOM metadata to BigQuery is now generally available.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/healthcare-api/docs/dicom](https://docs.cloud.google.com/healthcare-api/docs/dicom)
- [https://docs.cloud.google.com/healthcare-api/docs/how-tos/dicomweb](https://docs.cloud.google.com/healthcare-api/docs/how-tos/dicomweb)
- [https://docs.cloud.google.com/healthcare-api/docs/dicom-store-metrics](https://docs.cloud.google.com/healthcare-api/docs/dicom-store-metrics)

## Supporting Pages

### "DICOM conformance statement \_|\_ Cloud Healthcare API \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/healthcare-api/docs/dicom](https://docs.cloud.google.com/healthcare-api/docs/dicom)
- Source ID: `site-api-reference`
- Final score: 112
- Re-rank relevance: N/A

Evidence snippets:
- The TransferSyntaxUID can be set to any valid transfer syntax, except for the following unsupported transfer syntaxes: 1.2.840.10008.1.2.2 (Explicit VR Big Endian) 1.2.840.10008.1.2.1.99 (Deflated Explicit VR Little Endian) Within the JSON metadata, the user can specify multiple BulkDataURIs for DICOM tags with VRs of OB, OW, or UN.
- Metadata resources The following Accept Headers are supported: application/dicom+json (default) multipart/related; type=application/dicom+xml Tags that are encoded as InlineBinary elements will be encoded using little-endian byte ordering, as the transfer syntax parameter is not supported on endpoints requesting metadata resources.
- The following DICOM elements are required to be present in every instance in the JSON metadata: SpecificCharacterSet TransferSyntaxUID SOPClassUID StudyInstanceUID SeriesInstanceUID SOPInstanceUID The SpecificCharacterSet element must be set to ISO IR 192 , and the JSON metadata must be encoded in unicode UTF-8.
- The Retrieve Transaction supports the retrieving following resources: DICOM Resources: Study Series Instance Frames Bulkdata Metadata Resources Study Series Instance Rendered Resources Instance Frames It does not support Thumbnail resources.

### "Using the DICOMweb standard \_|\_ Cloud Healthcare API \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/healthcare-api/docs/how-tos/dicomweb](https://docs.cloud.google.com/healthcare-api/docs/how-tos/dicomweb)
- Source ID: `site-docs-root`
- Final score: 112
- Re-rank relevance: N/A

Evidence snippets:
- Before using any of the request data, make the following replacements: PROJECT ID : the ID of your Google Cloud project LOCATION : the dataset location DATASET ID : the DICOM store's parent dataset DICOM STORE ID : the DICOM store ID DICOM INSTANCE FILE : the path to a DICOM instance file on your local machine ending in the .dcm suffix STORAGE CLASS : the storage class for the DICOM instance in the DICOM store from STANDARD , NEARLINE , COLDLINE , and ARCHIVE $cred = gcloud auth application-default print-access-token $headers = @ { "Authorization" = "Bearer $cred " ; "Storage-Class" = " STORAGE CLASS " } Invoke-WebRequest -Method Post -Headers $headers -ContentType: "application/dicom" -InFile DCM FILE .dcm -Uri "https://healthcare.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /datasets/ DATASET ID /dicomStores/ DICOM STORE ID /dicomWeb/studies" Select-Object -Expand Content If the request is successful, the server returns the response in JSON format: <NativeDicomModel> <DicomAttribute tag="00081190" vr="UR" keyword="RetrieveURL"> <Value number="1">https://healthcare.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /datasets/ DATASET ID /dicomStores/ DICOM STORE ID /dicomWeb/studies/ STUDY INSTANCE UID </Value> </DicomAttribute> <DicomAttribute tag="00081199" vr="SQ" keyword="ReferencedSOPSequence"> <Item number="1"> <DicomAttribute tag="00081150" vr="UI" keyword="ReferencedSOPClassUID"> <Value number="1"> SOP CLASS UID </Value> </DicomAttribute> <DicomAttribute tag="00081155" vr="UI" keyword="ReferencedSOPInstanceUID"> <Value number="1"> SOP INSTANCE UID </Value> </DicomAttribute> <DicomAttribute tag="00081190" vr="UR" keyword="RetrieveURL"> <Value number="1">https://healthcare.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /datasets/ DATASET ID /dicomStores/ DICOM STORE ID /dicomWeb/studies/ STUDY INSTANCE UID /series/ SERIES INSTANCE UID /instances/ INSTANCE UID </Value> </DicomAttribute> </Item> </DicomAttribute> </NativeDicomModel> Create DICOM instances from JSON metadata and JPEG images The Cloud Healthcare API can create DICOM instances using a JSON metadata file and a JPEG file.
- AuthorizedSession ( scoped credentials ) URL to the Cloud Healthcare API endpoint and version base url = "https://healthcare.googleapis.com/v1" TODO(developer): Uncomment these lines and replace with your values. project id = 'my-project' # replace with your GCP project ID location = 'us-central1' # replace with the parent dataset's location dataset id = 'my-dataset' # replace with the parent dataset's ID dicom store id = 'my-dicom-store' # replace with the DICOM store ID study uid = '1.3.6.1.4.1.5062.55.1.2270943358.716200484.1363785608958.61.0' # replace with the study UID series uid = '2.24.52329571877967561426579904912379710633' # replace with the series UID instance uid = '1.3.6.2.4.2.14619.5.2.1.6280.6001.129311971280445372188125744148' # replace with the instance UID url = f " { base url } /projects/ { project id } /locations/ { location } " dicom store path = " {} /datasets/ {} /dicomStores/ {} " . format ( url , dataset id , dicom store id ) dicomweb path = " {} /dicomWeb/studies/ {} /series/ {} /instances/ {} /rendered" . format ( dicom store path , study uid , series uid , instance uid ) file name = "rendered image.png" Sets the required Accept header on the request for a PNG image headers = { "Accept" : "image/png" } response = session . get ( dicomweb path , headers = headers ) response . raise for status () with open ( file name , "wb" ) as f : f . write ( response . content ) print ( "Retrieved rendered image and saved to {} in current directory" . format ( file name ) ) return response Retrieve metadata You can retrieve the metadata for all instances in a studies or series.
- Complete the following steps: Save the following text to a file called instance.json , replacing variables where specified. [{ "00020010" : { "vr" : "UI" , "Value" : [ "1.2.840.10008.1.2.4.50" ]} , "00080005" : { "vr" : "CS" , "Value" : [ "ISO IR 192" ]} , "00080016" : { "vr" : "UI" , "Value" : [ " SOP CLASS UID " ]} , "00080018" : { "vr" : "UI" , "Value" : [ " SOP INSTANCE UID " ]} , "0020000D" : { "vr" : "UI" , "Value" : [ " STUDY INSTANCE UID " ]} , "0020000E" : { "vr" : "UI" , "Value" : [ " SERIES INSTANCE UID " ]} , "00280002" : { "vr" : "US" , "Value" : [ 3 ]} , "00280004" : { "vr" : "CS" , "Value" : [ "YBR FULL 422" ]} , "00280006" : { "vr" : "US" , "Value" : [ 0 ]} , "00280008" : { "vr" : "IS" , "Value" : [ 1 ]} , "00280010" : { "vr" : "US" , "Value" : [ Rows ]} , "00280011" : { "vr" : "US" , "Value" : [ Columns ]} , "00280100" : { "vr" : "US" , "Value" : [ 8 ]} , "00280101" : { "vr" : "US" , "Value" : [ 8 ]} , "00280102" : { "vr" : "US" , "Value" : [ 7 ]} , "00280103" : { "vr" : "US" , "Value" : [ 0 ]} , "7FE00010" : { "vr" : "OB" , "BulkDataURI" : "jpeg-image" } }] To create the opening (for the JSON metadata), middle (for the JPEG image), and closing boundaries, run the following commands: echo -ne "--DICOMwebBoundary\r\nContent-Type: application/dicom+json\r\n\r\n" > opening.file echo -ne "\r\n--DICOMwebBoundary\r\nContent-Location: jpeg-image\r\nContent-Type: image/jpeg; transfer-syntax=1.2.840.10008.1.2.4.50\r\n\r\n" > middle.file echo -ne "\r\n--DICOMwebBoundary--" > closing.file Wrap the JPEG image within middle and closing boundaries.
- There are more samples, including how to filter your search, available in the DICOMweb CLI GitHub repository . dcmweb \ https://healthcare.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /datasets/ DATASET ID /dicomStores/ DICOM STORE ID /dicomWeb \ search instances If the request is successful, the server returns the response in JSON format: [ { "00080005":{ "vr":"CS", "Value":[ " CODE STRING " ] }, "00080016":{ "vr":"UI", "Value":[ " UNIQUE IDENTIFIER " ] }, "00080018":{ "vr":"UI", "Value":[ " UNIQUE IDENTIFIER " ] }, "00080020":{ "vr":"DA", "Value":[ " DATE TIME " ] }, "00080030":{ "vr":"TM", "Value":[ " TIME " ] }, "00080060":{ "vr":"CS", "Value":[ " CODE STRING " ] }, "0008103E":{ "vr":"LO", "Value":[ " LONG STRING " ] }, "00100010":{ "vr":"PN", "Value":[ { "Alphabetic":"Anonymized" } ] }, }, ... ] Retrieve DICOM data The Cloud Healthcare API implements the Retrieve transaction for retrieving studies, series, instances, and frames in a DICOM store.

### "View DICOM store, DICOM study, and DICOM series metrics \_|\_ Cloud Healthcare\

- URL: [https://docs.cloud.google.com/healthcare-api/docs/dicom-store-metrics](https://docs.cloud.google.com/healthcare-api/docs/dicom-store-metrics)
- Source ID: `site-docs-root-2`
- Final score: 102
- Re-rank relevance: N/A

Evidence snippets:
- Before using any of the request data, make the following replacements: PROJECT ID : the ID of your Google Cloud project LOCATION : the dataset location DATASET ID : the DICOM store's parent dataset DICOM STORE ID : the DICOM store ID STUDY UID : the DICOMweb study unique identifier (UID) SERIES UID : the DICOMweb series unique identifier (UID) To send your request, choose one of these options: curl Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Before using any of the request data, make the following replacements: PROJECT ID : the ID of your Google Cloud project LOCATION : the dataset location DATASET ID : the DICOM store's parent dataset DICOM STORE ID : the DICOM store ID STUDY UID : the DICOMweb study unique identifier (UID) To send your request, choose one of these options: curl Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- You should receive a JSON response similar to the following: Response { "series": "projects/ PROJECT ID /locations/ LOCATION /datasets/ DATASET ID /dicomStores/ DICOM STORE ID /dicomWeb/studies/ STUDY UID /series/ SERIES UID ", "structuredStorageSizeBytes": " STRUCTURED STORAGE BYTES ", "blobStorageSizeBytes": " BLOB STORAGE BYTES ", "instanceCount": " INSTANCE COUNT " } Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Before using any of the request data, make the following replacements: PROJECT ID : the ID of your Google Cloud project LOCATION : the dataset location DATASET ID : the DICOM store's parent dataset DICOM STORE ID : the DICOM store ID To send your request, choose one of these options: curl Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .

