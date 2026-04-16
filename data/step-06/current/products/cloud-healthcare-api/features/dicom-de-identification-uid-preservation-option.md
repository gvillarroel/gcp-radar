---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:44:19.140Z"
product_name: "Cloud Healthcare API"
product_slug: "cloud-healthcare-api"
feature_name: "DICOM de-identification UID preservation option"
feature_slug: "dicom-de-identification-uid-preservation-option"
latest_feature_date: "2019-08-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/healthcare-api/docs/dicom"
  - "https://docs.cloud.google.com/healthcare-api/docs/how-tos/dicomweb"
  - "https://docs.cloud.google.com/healthcare-api/docs/dicom-store-metrics"
keywords:
  - "dicom"
  - "de"
  - "identification"
  - "uid"
  - "preservation"
  - "option"
  - "gained"
  - "avoid"
---

# DICOM de-identification UID preservation option

Product: Cloud Healthcare API
Coverage: MEDIUM

## Step 02 Summary

DICOM de-identification gained an option to avoid automatically regenerating UIDs such as StudyInstanceUID, SeriesInstanceUID, and SOPInstanceUID.

## Extended Definition

DICOM de-identification gained an option to avoid automatically regenerating UIDs such as StudyInstanceUID, SeriesInstanceUID, and SOPInstanceUID.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/healthcare-api/docs/dicom](https://docs.cloud.google.com/healthcare-api/docs/dicom)
- [https://docs.cloud.google.com/healthcare-api/docs/how-tos/dicomweb](https://docs.cloud.google.com/healthcare-api/docs/how-tos/dicomweb)
- [https://docs.cloud.google.com/healthcare-api/docs/dicom-store-metrics](https://docs.cloud.google.com/healthcare-api/docs/dicom-store-metrics)

## Supporting Pages

### "Using the DICOMweb standard \_|\_ Cloud Healthcare API \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/healthcare-api/docs/how-tos/dicomweb](https://docs.cloud.google.com/healthcare-api/docs/how-tos/dicomweb)
- Source ID: `site-docs-root`
- Final score: 117
- Re-rank relevance: N/A

Evidence snippets:
- You should receive a JSON response similar to the following: Response [ { "00080005": { "vr": "CS", "Value": [ " CODE STRING " ] }, "00080020": { "vr": "DA", "Value": [ " DATE TIME " ] }, "00080030": { "vr": "TM", "Value": [ " TIME " ] }, "00080050": { "vr": "SH" }, "00080090": { "vr": "PN", "Value": [ { "Alphabetic": " VALUE " } ] }, "00100010": { "vr": "PN", "Value": [ { "Alphabetic": "Sally Zhang" } ] }, "00100020": { "vr": "LO", "Value": [ " VALUE " ] }, "00100030": { "vr": "DA" }, "00100040": { "vr": "CS", "Value": [ "F" ] }, "0020000D": { "vr": "UI", "Value": [ " STUDY INSTANCE UID " ] }, "00200010": { "vr": "SH" } } ] Go import ( "context" "fmt" "io" healthcare "google.golang.org/api/healthcare/v1" ) // queryParamOpt is a googleapi.Option (https://godoc.org/google.golang.org/api/googleapi#CallOption) // that adds query parameters to an API call. type queryParamOpt struct { key , value string } func ( qp queryParamOpt ) Get () ( string , string ) { return qp . key , qp . value } // dicomWebSearchStudies refines a DICOMweb studies search by appending DICOM tags to the request. func dicomWebSearchStudies ( w io .
- REST Before using any of the request data, make the following replacements: PROJECT ID : the ID of your Google Cloud project LOCATION : the dataset location DATASET ID : the DICOM store's parent dataset DICOM STORE ID : the DICOM store ID STUDY INSTANCE UID : the study instance unique identifier SERIES INSTANCE UID : the series instance unique identifier INSTANCE UID : the instance unique identifier To send your request, choose one of these options: curl Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- REST Before using any of the request data, make the following replacements: PROJECT ID : the ID of your Google Cloud project LOCATION : the dataset location DATASET ID : the DICOM store's parent dataset DICOM STORE ID : the DICOM store ID DICOM INSTANCE FILE : the path to a DICOM instance file on your local machine ending in the .dcm suffix To send your request, choose one of these options: curl Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Before using any of the request data, make the following replacements: PROJECT ID : the ID of your Google Cloud project LOCATION : the dataset location DATASET ID : the DICOM store's parent dataset DICOM STORE ID : the DICOM store ID STUDY INSTANCE UID : the study instance unique identifier To send your request, choose one of these options: curl Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .

### "View DICOM store, DICOM study, and DICOM series metrics \_|\_ Cloud Healthcare\

- URL: [https://docs.cloud.google.com/healthcare-api/docs/dicom-store-metrics](https://docs.cloud.google.com/healthcare-api/docs/dicom-store-metrics)
- Source ID: `site-docs-root-2`
- Final score: 113
- Re-rank relevance: N/A

Evidence snippets:
- Before using any of the request data, make the following replacements: PROJECT ID : the ID of your Google Cloud project LOCATION : the dataset location DATASET ID : the DICOM store's parent dataset DICOM STORE ID : the DICOM store ID STUDY UID : the DICOMweb study unique identifier (UID) SERIES UID : the DICOMweb series unique identifier (UID) To send your request, choose one of these options: curl Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Before using any of the request data, make the following replacements: PROJECT ID : the ID of your Google Cloud project LOCATION : the dataset location DATASET ID : the DICOM store's parent dataset DICOM STORE ID : the DICOM store ID STUDY UID : the DICOMweb study unique identifier (UID) To send your request, choose one of these options: curl Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Before using any of the request data, make the following replacements: PROJECT ID : the ID of your Google Cloud project LOCATION : the dataset location DATASET ID : the DICOM store's parent dataset DICOM STORE ID : the DICOM store ID To send your request, choose one of these options: curl Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- You should receive a JSON response similar to the following: Response { "series": "projects/ PROJECT ID /locations/ LOCATION /datasets/ DATASET ID /dicomStores/ DICOM STORE ID /dicomWeb/studies/ STUDY UID /series/ SERIES UID ", "structuredStorageSizeBytes": " STRUCTURED STORAGE BYTES ", "blobStorageSizeBytes": " BLOB STORAGE BYTES ", "instanceCount": " INSTANCE COUNT " } Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### "DICOM conformance statement \_|\_ Cloud Healthcare API \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/healthcare-api/docs/dicom](https://docs.cloud.google.com/healthcare-api/docs/dicom)
- Source ID: `site-api-reference`
- Final score: 112
- Re-rank relevance: N/A

Evidence snippets:
- Returned results The response can be in either JSON or XML format which can be controlled using the following Accept header values: application/dicom+json (default) multipart/related; type=application/dicom+xml By default the following attributes will be returned: Studies: SpecificCharacterSet StudyDate StudyTime AccessionNumber InstanceAvailability ReferringPhysicianName TimezoneOffsetFromUTC PatientName PatientID PatientBirthDate PatientSex StudyInstanceUID StudyID Series: SpecificCharacterSet Modality TimezoneOffsetFromUTC SeriesDescription SeriesInstanceUID PerformedProcedureStepStartDate PerformedProcedureStepStartTime RequestAttributesSequence Instances: SpecificCharacterSet SOPClassUID SOPInstanceUID InstanceAvailability TimezoneOffsetFromUTC InstanceNumber Rows Columns BitsAllocated NumberOfFrames For includefield=all , the default attributes will be returned along with the following attributes: Studies: PersonIdentificationCodeSequence PersonAddress PersonTelephoneNumbers PersonTelecomInformation InstitutionName InstitutionAddress InstitutionCodeSequence ReferringPhysicianIdentificationSequence ConsultingPhysicianName ConsultingPhysicianIdentificationSequence IssuerOfAccessionNumberSequence LocalNamespaceEntityID UniversalEntityID UniversalEntityIDType StudyDescription PhysiciansOfRecord PhysiciansOfRecordIdentificationSequence NameOfPhysiciansReadingStudy PhysiciansReadingStudyIdentificationSequence RequestingServiceCodeSequence ReferencedStudySequence ProcedureCodeSequence ReasonForPerformedProcedureCodeSequence Series: SeriesNumber Laterality SeriesDate SeriesTime Instances: all attributes present in the DICOM instance, excluding the following exceptions.
- To avoid these issues, and if the returned object's transfer syntax doesn't matter to your application, use the multipart/related; type="application/dicom"; transfer-syntax= Accept Header.
- DICOM study/series/instances The following Accept Headers are supported: multipart/related; type="application/dicom"; transfer-syntax= multipart/related; type="application/dicom"; transfer-syntax=1.2.840.10008.1.2 multipart/related; type="application/dicom"; transfer-syntax=1.2.840.10008.1.2.1 (default) multipart/related; type="application/dicom"; transfer-syntax=1.2.840.10008.1.2.1.99 multipart/related; type="application/dicom"; transfer-syntax=1.2.840.10008.1.2.4.50 multipart/related; type="application/dicom"; transfer-syntax=1.2.840.10008.1.2.4.51 multipart/related; type="application/dicom"; transfer-syntax=1.2.840.10008.1.2.4.57 multipart/related; type="application/dicom"; transfer-syntax=1.2.840.10008.1.2.4.70 multipart/related; type="application/dicom"; transfer-syntax=1.2.840.10008.1.2.4.80 multipart/related; type="application/dicom"; transfer-syntax=1.2.840.10008.1.2.4.81 multipart/related; type="application/dicom"; transfer-syntax=1.2.840.10008.1.2.4.90 multipart/related; type="application/dicom"; transfer-syntax=1.2.840.10008.1.2.4.91 multipart/related; type="application/dicom"; transfer-syntax=1.2.840.10008.1.2.4.110 multipart/related; type="application/dicom"; transfer-syntax=1.2.840.10008.1.2.4.111 multipart/related; type="application/dicom"; transfer-syntax=1.2.840.10008.1.2.4.112 multipart/related; type="application/dicom"; transfer-syntax=1.2.840.10008.1.2.4.201 multipart/related; type="application/dicom"; transfer-syntax=1.2.840.10008.1.2.4.202 multipart/related; type="application/dicom"; transfer-syntax=1.2.840.10008.1.2.4.203 multipart/related; type="application/dicom"; transfer-syntax=1.2.840.10008.1.2.5 multipart/related; type="application/dicom"; transfer-syntax=1.2.840.10008.1.2.8.1 Warning: The response's default transfer syntax is Little Endian Explicit.
- DICOM frames The following Accept Headers are supported: multipart/related; type="application/octet-stream"; transfer-syntax= multipart/related; type="application/octet-stream"; transfer-syntax=1.2.840.10008.1.2.1 (default) multipart/related; type="image/jpeg"; transfer-syntax=1.2.840.10008.1.2.4.50 multipart/related; type="image/jpeg"; transfer-syntax=1.2.840.10008.1.2.4.51 multipart/related; type="image/jpeg"; transfer-syntax=1.2.840.10008.1.2.4.57 multipart/related; type="image/jpeg"; transfer-syntax=1.2.840.10008.1.2.4.70 multipart/related; type="image/png" multipart/related; type="image/jls"; transfer-syntax=1.2.840.10008.1.2.4.80 multipart/related; type="image/jls"; transfer-syntax=1.2.840.10008.1.2.4.81 multipart/related; type="image/jp2"; transfer-syntax=1.2.840.10008.1.2.4.90 multipart/related; type="image/jp2"; transfer-syntax=1.2.840.10008.1.2.4.91 multipart/related; type="image/jphc"; transfer-syntax=1.2.840.10008.1.2.4.201 multipart/related; type="image/jphc"; transfer-syntax=1.2.840.10008.1.2.4.202 multipart/related; type="image/jphc"; transfer-syntax=1.2.840.10008.1.2.4.203 multipart/related; type="image/jxl"; transfer-syntax=1.2.840.10008.1.2.4.110 multipart/related; type="image/jxl"; transfer-syntax=1.2.840.10008.1.2.4.112 multipart/related; type="image/dicom-rle"; transfer-syntax=1.2.840.10008.1.2.5 multipart/related; type="application/x-deflate"; transfer-syntax=1.2.840.10008.1.2.8.1 A transfer syntax of allows the user to request no transcoding be done, so the transfer syntax of the uploaded file will be used.

