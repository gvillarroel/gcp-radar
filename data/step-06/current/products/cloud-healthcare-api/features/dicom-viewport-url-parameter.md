---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:44:19.037Z"
product_name: "Cloud Healthcare API"
product_slug: "cloud-healthcare-api"
feature_name: "DICOM viewport URL parameter"
feature_slug: "dicom-viewport-url-parameter"
latest_feature_date: "2025-02-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/healthcare-api/docs/how-tos/dicomweb"
  - "https://docs.cloud.google.com/healthcare-api/docs/dicom"
  - "https://docs.cloud.google.com/healthcare-api/docs/how-tos/dicom"
keywords:
  - "dicom"
  - "viewport"
  - "url"
  - "parameter"
  - "now"
  - "when"
  - "rendering"
  - "instances"
---

# DICOM viewport URL parameter

Product: Cloud Healthcare API
Coverage: MEDIUM

## Step 02 Summary

The DICOM "viewport" URL parameter is now supported when rendering DICOM instances and frames; The DICOM "viewport" URL parameter is now supported when rendering DICOM instances and frames.

## Extended Definition

The DICOM "viewport" URL parameter is now supported when rendering DICOM instances and frames; The DICOM "viewport" URL parameter is now supported when rendering DICOM instances and frames.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/healthcare-api/docs/how-tos/dicomweb](https://docs.cloud.google.com/healthcare-api/docs/how-tos/dicomweb)
- [https://docs.cloud.google.com/healthcare-api/docs/dicom](https://docs.cloud.google.com/healthcare-api/docs/dicom)
- [https://docs.cloud.google.com/healthcare-api/docs/how-tos/dicom](https://docs.cloud.google.com/healthcare-api/docs/how-tos/dicom)

## Supporting Pages

### "DICOM conformance statement \_|\_ Cloud Healthcare API \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/healthcare-api/docs/dicom](https://docs.cloud.google.com/healthcare-api/docs/dicom)
- Source ID: `site-api-reference`
- Final score: 154
- Re-rank relevance: N/A

Evidence snippets:
- DICOM Dictionary Version The Cloud Healthcare API uses the DICOM 2025b dictionary for parsing tags of ingested instances and for generating column names when exporting to BigQuery.
- JSON metadata and bulk data requests When storing instances using JSON metadata and bulk data, the first multipart part must consist of a JSON array of DICOM instances .
- DICOM study/series/instances The following Accept Headers are supported: multipart/related; type="application/dicom"; transfer-syntax= multipart/related; type="application/dicom"; transfer-syntax=1.2.840.10008.1.2 multipart/related; type="application/dicom"; transfer-syntax=1.2.840.10008.1.2.1 (default) multipart/related; type="application/dicom"; transfer-syntax=1.2.840.10008.1.2.1.99 multipart/related; type="application/dicom"; transfer-syntax=1.2.840.10008.1.2.4.50 multipart/related; type="application/dicom"; transfer-syntax=1.2.840.10008.1.2.4.51 multipart/related; type="application/dicom"; transfer-syntax=1.2.840.10008.1.2.4.57 multipart/related; type="application/dicom"; transfer-syntax=1.2.840.10008.1.2.4.70 multipart/related; type="application/dicom"; transfer-syntax=1.2.840.10008.1.2.4.80 multipart/related; type="application/dicom"; transfer-syntax=1.2.840.10008.1.2.4.81 multipart/related; type="application/dicom"; transfer-syntax=1.2.840.10008.1.2.4.90 multipart/related; type="application/dicom"; transfer-syntax=1.2.840.10008.1.2.4.91 multipart/related; type="application/dicom"; transfer-syntax=1.2.840.10008.1.2.4.110 multipart/related; type="application/dicom"; transfer-syntax=1.2.840.10008.1.2.4.111 multipart/related; type="application/dicom"; transfer-syntax=1.2.840.10008.1.2.4.112 multipart/related; type="application/dicom"; transfer-syntax=1.2.840.10008.1.2.4.201 multipart/related; type="application/dicom"; transfer-syntax=1.2.840.10008.1.2.4.202 multipart/related; type="application/dicom"; transfer-syntax=1.2.840.10008.1.2.4.203 multipart/related; type="application/dicom"; transfer-syntax=1.2.840.10008.1.2.5 multipart/related; type="application/dicom"; transfer-syntax=1.2.840.10008.1.2.8.1 Warning: The response's default transfer syntax is Little Endian Explicit.
- Returned results The response can be in either JSON or XML format which can be controlled using the following Accept header values: application/dicom+json (default) multipart/related; type=application/dicom+xml By default the following attributes will be returned: Studies: SpecificCharacterSet StudyDate StudyTime AccessionNumber InstanceAvailability ReferringPhysicianName TimezoneOffsetFromUTC PatientName PatientID PatientBirthDate PatientSex StudyInstanceUID StudyID Series: SpecificCharacterSet Modality TimezoneOffsetFromUTC SeriesDescription SeriesInstanceUID PerformedProcedureStepStartDate PerformedProcedureStepStartTime RequestAttributesSequence Instances: SpecificCharacterSet SOPClassUID SOPInstanceUID InstanceAvailability TimezoneOffsetFromUTC InstanceNumber Rows Columns BitsAllocated NumberOfFrames For includefield=all , the default attributes will be returned along with the following attributes: Studies: PersonIdentificationCodeSequence PersonAddress PersonTelephoneNumbers PersonTelecomInformation InstitutionName InstitutionAddress InstitutionCodeSequence ReferringPhysicianIdentificationSequence ConsultingPhysicianName ConsultingPhysicianIdentificationSequence IssuerOfAccessionNumberSequence LocalNamespaceEntityID UniversalEntityID UniversalEntityIDType StudyDescription PhysiciansOfRecord PhysiciansOfRecordIdentificationSequence NameOfPhysiciansReadingStudy PhysiciansReadingStudyIdentificationSequence RequestingServiceCodeSequence ReferencedStudySequence ProcedureCodeSequence ReasonForPerformedProcedureCodeSequence Series: SeriesNumber Laterality SeriesDate SeriesTime Instances: all attributes present in the DICOM instance, excluding the following exceptions.

### "Using the DICOMweb standard \_|\_ Cloud Healthcare API \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/healthcare-api/docs/how-tos/dicomweb](https://docs.cloud.google.com/healthcare-api/docs/how-tos/dicomweb)
- Source ID: `site-docs-root`
- Final score: 149
- Re-rank relevance: N/A

Evidence snippets:
- AuthorizedSession ( scoped credentials ) URL to the Cloud Healthcare API endpoint and version base url = "https://healthcare.googleapis.com/v1" TODO(developer): Uncomment these lines and replace with your values. project id = 'my-project' # replace with your GCP project ID location = 'us-central1' # replace with the parent dataset's location dataset id = 'my-dataset' # replace with the parent dataset's ID dicom store id = 'my-dicom-store' # replace with the DICOM store ID url = f " { base url } /projects/ { project id } /locations/ { location } " dicomweb path = " {} /datasets/ {} /dicomStores/ {} /dicomWeb/instances" . format ( url , dataset id , dicom store id ) Sets required application/dicom+json; charset=utf-8 header on the request headers = { "Content-Type" : "application/dicom+json; charset=utf-8" } response = session . get ( dicomweb path , headers = headers ) response . raise for status () instances = response . json () print ( "Instances:" ) print ( json . dumps ( instances , indent = 2 )) return instances Search using DICOM tags You can refine your searches by appending DICOM tags to your requests in the form of query parameters.
- Note: If you are rendering a multi-frame image, use the frames.retrieveFrames method instead of the frames.retrieveRendered method because frames.retrieveRendered doesn't support multi-frame images. curl To retrieve an image, make a GET request and specify the following information: The name of the parent dataset The name of the DICOM store The study unique identifier (UID) The series UID The instance UID An output filename An access token The following sample shows how to retrieve a PNG image with a GET request using curl . curl -X GET \ -H "Authorization: Bearer $( gcloud auth application-default print-access-token ) " \ -H "Accept: image/png" \ "https://healthcare.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /datasets/ DATASET ID /dicomStores/ DICOM STORE ID /dicomWeb/studies/ STUDY INSTANCE UID /series/ SERIES INSTANCE UID /instances/ INSTANCE UID /rendered" \ --output FILENAME .png If the request is successful, the PNG file is written to your machine.
- The following samples show how to specify the storage class when you store DICOM objects from your local machine. curl Use the projects.locations.datasets.dicomStores.storeInstances method.
- Before using any of the request data, make the following replacements: PROJECT ID : the ID of your Google Cloud project LOCATION : the dataset location DATASET ID : the DICOM store's parent dataset DICOM STORE ID : the DICOM store ID DICOM INSTANCE FILE : the path to a DICOM instance file on your local machine ending in the .dcm suffix STORAGE CLASS : the storage class for the DICOM instance in the DICOM store from STANDARD , NEARLINE , COLDLINE , and ARCHIVE $cred = gcloud auth application-default print-access-token $headers = @ { "Authorization" = "Bearer $cred " ; "Storage-Class" = " STORAGE CLASS " } Invoke-WebRequest -Method Post -Headers $headers -ContentType: "application/dicom" -InFile DCM FILE .dcm -Uri "https://healthcare.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /datasets/ DATASET ID /dicomStores/ DICOM STORE ID /dicomWeb/studies" Select-Object -Expand Content If the request is successful, the server returns the response in JSON format: <NativeDicomModel> <DicomAttribute tag="00081190" vr="UR" keyword="RetrieveURL"> <Value number="1">https://healthcare.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /datasets/ DATASET ID /dicomStores/ DICOM STORE ID /dicomWeb/studies/ STUDY INSTANCE UID </Value> </DicomAttribute> <DicomAttribute tag="00081199" vr="SQ" keyword="ReferencedSOPSequence"> <Item number="1"> <DicomAttribute tag="00081150" vr="UI" keyword="ReferencedSOPClassUID"> <Value number="1"> SOP CLASS UID </Value> </DicomAttribute> <DicomAttribute tag="00081155" vr="UI" keyword="ReferencedSOPInstanceUID"> <Value number="1"> SOP INSTANCE UID </Value> </DicomAttribute> <DicomAttribute tag="00081190" vr="UR" keyword="RetrieveURL"> <Value number="1">https://healthcare.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /datasets/ DATASET ID /dicomStores/ DICOM STORE ID /dicomWeb/studies/ STUDY INSTANCE UID /series/ SERIES INSTANCE UID /instances/ INSTANCE UID </Value> </DicomAttribute> </Item> </DicomAttribute> </NativeDicomModel> Create DICOM instances from JSON metadata and JPEG images The Cloud Healthcare API can create DICOM instances using a JSON metadata file and a JPEG file.

### "Creating and managing DICOM stores \_|\_ Cloud Healthcare API \_|\_ Google\

- URL: [https://docs.cloud.google.com/healthcare-api/docs/how-tos/dicom](https://docs.cloud.google.com/healthcare-api/docs/how-tos/dicom)
- Source ID: `site-docs-root`
- Final score: 137
- Re-rank relevance: N/A

Evidence snippets:
- Before using any of the command data below, make the following replacements: LOCATION : the dataset location DATASET ID : the DICOM store's parent dataset DICOM STORE ID : the DICOM store ID PUBSUB TOPIC : a Pub/Sub topic to which messages are published when an event occurs in a data store Execute the following command: Linux, macOS, or Cloud Shell Note: Ensure you have initialized the Google Cloud CLI with authentication and a project by running either gcloud init ; or gcloud auth login and gcloud config set project . gcloud healthcare dicom-stores update DICOM STORE ID \ --dataset = DATASET ID \ --location = LOCATION \ --pubsub-topic = projects/ PROJECT ID /topics/ PUBSUB TOPIC Windows (PowerShell) Note: Ensure you have initialized the Google Cloud CLI with authentication and a project by running either gcloud init ; or gcloud auth login and gcloud config set project . gcloud healthcare dicom-stores update DICOM STORE ID --dataset = DATASET ID --location = LOCATION --pubsub-topic = projects/ PROJECT ID /topics/ PUBSUB TOPIC Windows (cmd.exe) Note: Ensure you have initialized the Google Cloud CLI with authentication and a project by running either gcloud init ; or gcloud auth login and gcloud config set project . gcloud healthcare dicom-stores update DICOM STORE ID ^ --dataset = DATASET ID ^ --location = LOCATION ^ --pubsub-topic = projects/ PROJECT ID /topics/ PUBSUB TOPIC You should receive a response similar to the following: Response Updated dicomStore [ DICOM STORE ID ]. ... name: projects/ PROJECT ID /locations/ LOCATION /datasets/ DATASET ID /dicomStores/ DICOM STORE ID notificationConfig: pubsubTopic: projects/ PROJECT ID /topics/ PUBSUB TOPIC REST To edit a DICOM store, use the projects.locations.datasets.dicomStores.patch method.
- See https://github.com/GoogleCloudPlatform/python-docs-samples/tree/main/healthcare/api-client/v1/dicom before running the sample.""" Imports the Google API Discovery Service. from googleapiclient import discovery api version = "v1" service name = "healthcare" Returns an authorized API client by discovering the Healthcare API and using GOOGLE APPLICATION CREDENTIALS environment variable. client = discovery . build ( service name , api version ) TODO(developer): Uncomment these lines and replace with your values. project id = 'my-project' # replace with your GCP project ID location = 'us-central1' # replace with the parent dataset's location dataset id = 'my-dataset' # replace with the DICOM store's parent dataset ID dicom store id = 'my-dicom-store' # replace with the DICOM store's ID dicom store parent = "projects/ {} /locations/ {} /datasets/ {} " . format ( project id , location , dataset id ) dicom store name = f " { dicom store parent } /dicomStores/ { dicom store id } " request = ( client . projects () . locations () . datasets () . dicomStores () . delete ( name = dicom store name ) ) response = request . execute () print ( f "Deleted DICOM store: { dicom store id } " ) return response What's next Export and import DICOM object instances to and from Cloud Storage Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- See https://github.com/GoogleCloudPlatform/python-docs-samples/tree/main/healthcare/api-client/v1/dicom before running the sample.""" Imports the Google API Discovery Service. from googleapiclient import discovery api version = "v1" service name = "healthcare" Returns an authorized API client by discovering the Healthcare API and using GOOGLE APPLICATION CREDENTIALS environment variable. client = discovery . build ( service name , api version ) TODO(developer): Uncomment these lines and replace with your values. project id = 'my-project' # replace with your GCP project ID location = 'us-central1' # replace with the parent dataset's location dataset id = 'my-dataset' # replace with the DICOM store's parent dataset ID dicom store parent = "projects/ {} /locations/ {} /datasets/ {} " . format ( project id , location , dataset id ) dicom stores = ( client . projects () . locations () . datasets () . dicomStores () . list ( parent = dicom store parent ) . execute () . get ( "dicomStores" , []) ) for dicom store in dicom stores : print ( dicom store ) return dicom stores Deleting a DICOM store Caution: Deleting a DICOM store also deletes the object instances in the DICOM store.
- Before using any of the request data, make the following replacements: PROJECT ID : the ID of your Google Cloud project LOCATION : the dataset location DATASET ID : the DICOM store's parent dataset DICOM STORE ID : the DICOM store ID PUBSUB TOPIC : a Pub/Sub topic to which messages are published when an event occurs in a data store KEY 1 : the first label key VALUE 1 : the first label value KEY 2 : the second label key VALUE 2 : the second label value Request JSON body: { "notificationConfigs": [ { "pubsubTopic": "projects/ PROJECT ID /topics/ PUBSUB TOPIC " } ], "labels": { " KEY 1 ": " VALUE 1 ", " KEY 2 ": " VALUE 2 " } } To send your request, choose one of these options: curl Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .

