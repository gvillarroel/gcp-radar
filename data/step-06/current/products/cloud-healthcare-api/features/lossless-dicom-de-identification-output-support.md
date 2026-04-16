---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:44:19.145Z"
product_name: "Cloud Healthcare API"
product_slug: "cloud-healthcare-api"
feature_name: "Lossless DICOM de-identification output support"
feature_slug: "lossless-dicom-de-identification-output-support"
latest_feature_date: "2019-06-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/healthcare-api/docs/dicom"
  - "https://docs.cloud.google.com/healthcare-api/docs/concepts/de-identification"
  - "https://docs.cloud.google.com/healthcare-api/docs/how-tos/dicomweb"
keywords:
  - "lossless"
  - "dicom"
  - "de"
  - "identification"
  - "output"
  - "now"
  - "supports"
  - "image"
---

# Lossless DICOM de-identification output support

Product: Cloud Healthcare API
Coverage: MEDIUM

## Step 02 Summary

DICOM de-identification now supports lossless image output quality when lossless input formats are provided.

## Extended Definition

DICOM de-identification now supports lossless image output quality when lossless input formats are provided.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/healthcare-api/docs/dicom](https://docs.cloud.google.com/healthcare-api/docs/dicom)
- [https://docs.cloud.google.com/healthcare-api/docs/concepts/de-identification](https://docs.cloud.google.com/healthcare-api/docs/concepts/de-identification)
- [https://docs.cloud.google.com/healthcare-api/docs/how-tos/dicomweb](https://docs.cloud.google.com/healthcare-api/docs/how-tos/dicomweb)

## Supporting Pages

### "DICOM conformance statement \_|\_ Cloud Healthcare API \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/healthcare-api/docs/dicom](https://docs.cloud.google.com/healthcare-api/docs/dicom)
- Source ID: `site-api-reference`
- Final score: 171
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Returned results The response can be in either JSON or XML format which can be controlled using the following Accept header values: application/dicom+json (default) multipart/related; type=application/dicom+xml By default the following attributes will be returned: Studies: SpecificCharacterSet StudyDate StudyTime AccessionNumber InstanceAvailability ReferringPhysicianName TimezoneOffsetFromUTC PatientName PatientID PatientBirthDate PatientSex StudyInstanceUID StudyID Series: SpecificCharacterSet Modality TimezoneOffsetFromUTC SeriesDescription SeriesInstanceUID PerformedProcedureStepStartDate PerformedProcedureStepStartTime RequestAttributesSequence Instances: SpecificCharacterSet SOPClassUID SOPInstanceUID InstanceAvailability TimezoneOffsetFromUTC InstanceNumber Rows Columns BitsAllocated NumberOfFrames For includefield=all , the default attributes will be returned along with the following attributes: Studies: PersonIdentificationCodeSequence PersonAddress PersonTelephoneNumbers PersonTelecomInformation InstitutionName InstitutionAddress InstitutionCodeSequence ReferringPhysicianIdentificationSequence ConsultingPhysicianName ConsultingPhysicianIdentificationSequence IssuerOfAccessionNumberSequence LocalNamespaceEntityID UniversalEntityID UniversalEntityIDType StudyDescription PhysiciansOfRecord PhysiciansOfRecordIdentificationSequence NameOfPhysiciansReadingStudy PhysiciansReadingStudyIdentificationSequence RequestingServiceCodeSequence ReferencedStudySequence ProcedureCodeSequence ReasonForPerformedProcedureCodeSequence Series: SeriesNumber Laterality SeriesDate SeriesTime Instances: all attributes present in the DICOM instance, excluding the following exceptions.
- DICOM frames The following Accept Headers are supported: multipart/related; type="application/octet-stream"; transfer-syntax= multipart/related; type="application/octet-stream"; transfer-syntax=1.2.840.10008.1.2.1 (default) multipart/related; type="image/jpeg"; transfer-syntax=1.2.840.10008.1.2.4.50 multipart/related; type="image/jpeg"; transfer-syntax=1.2.840.10008.1.2.4.51 multipart/related; type="image/jpeg"; transfer-syntax=1.2.840.10008.1.2.4.57 multipart/related; type="image/jpeg"; transfer-syntax=1.2.840.10008.1.2.4.70 multipart/related; type="image/png" multipart/related; type="image/jls"; transfer-syntax=1.2.840.10008.1.2.4.80 multipart/related; type="image/jls"; transfer-syntax=1.2.840.10008.1.2.4.81 multipart/related; type="image/jp2"; transfer-syntax=1.2.840.10008.1.2.4.90 multipart/related; type="image/jp2"; transfer-syntax=1.2.840.10008.1.2.4.91 multipart/related; type="image/jphc"; transfer-syntax=1.2.840.10008.1.2.4.201 multipart/related; type="image/jphc"; transfer-syntax=1.2.840.10008.1.2.4.202 multipart/related; type="image/jphc"; transfer-syntax=1.2.840.10008.1.2.4.203 multipart/related; type="image/jxl"; transfer-syntax=1.2.840.10008.1.2.4.110 multipart/related; type="image/jxl"; transfer-syntax=1.2.840.10008.1.2.4.112 multipart/related; type="image/dicom-rle"; transfer-syntax=1.2.840.10008.1.2.5 multipart/related; type="application/x-deflate"; transfer-syntax=1.2.840.10008.1.2.8.1 A transfer syntax of allows the user to request no transcoding be done, so the transfer syntax of the uploaded file will be used.
- DICOM instances In addition to the above Accept Headers, RetrieveInstance supports single part content types for convenience: application/dicom; transfer-syntax= application/dicom; transfer-syntax=1.2.840.10008.1.2 application/dicom; transfer-syntax=1.2.840.10008.1.2.1 application/dicom; transfer-syntax=1.2.840.10008.1.2.1.99 application/dicom; transfer-syntax=1.2.840.10008.1.2.4.50 application/dicom; transfer-syntax=1.2.840.10008.1.2.4.51 application/dicom; transfer-syntax=1.2.840.10008.1.2.4.57 application/dicom; transfer-syntax=1.2.840.10008.1.2.4.70 application/dicom; transfer-syntax=1.2.840.10008.1.2.4.80 application/dicom; transfer-syntax=1.2.840.10008.1.2.4.81 application/dicom; transfer-syntax=1.2.840.10008.1.2.4.90 application/dicom; transfer-syntax=1.2.840.10008.1.2.4.91 application/dicom; transfer-syntax=1.2.840.10008.1.2.4.110 application/dicom; transfer-syntax=1.2.840.10008.1.2.4.111 application/dicom; transfer-syntax=1.2.840.10008.1.2.4.112 application/dicom; transfer-syntax=1.2.840.10008.1.2.4.201 application/dicom; transfer-syntax=1.2.840.10008.1.2.4.202 application/dicom; transfer-syntax=1.2.840.10008.1.2.4.203 application/dicom; transfer-syntax=1.2.840.10008.1.2.5 application/dicom; transfer-syntax=1.2.840.10008.1.2.8.1 This is not part of the official DICOMweb standard.
- In particular, transcoding is only possible from the following transfer syntaxes: 1.2.840.10008.1.2 (Little Endian Implicit) 1.2.840.10008.1.2.1 (Little Endian Explicit) 1.2.840.10008.1.2.2 (Explicit VR Big Endian) 1.2.840.10008.1.2.1.99 (Deflated Explicit VR Little Endian) 1.2.840.10008.1.2.4.50 (JPEG Baseline Process 1) 1.2.840.10008.1.2.4.51 (JPEG Extended) 1.2.840.10008.1.2.4.57 (JPEG Lossless) 1.2.840.10008.1.2.4.70 (JPEG Lossless Selection Value 1) 1.2.840.10008.1.2.4.80 (JPEG-LS Lossless) 1.2.840.10008.1.2.4.81 (JPEG-LS Near-Lossless) 1.2.840.10008.1.2.4.90 (JPEG 2000 Lossless Only) 1.2.840.10008.1.2.4.91 (JPEG 2000) 1.2.840.10008.1.2.4.110 (JPEG XL Lossless) 1.2.840.10008.1.2.4.111 (JPEG XL JPEG Recompression) 1.2.840.10008.1.2.4.112 (JPEG XL) 1.2.840.10008.1.2.4.201 (HTJ2K Lossless Only) 1.2.840.10008.1.2.4.202 (HTJ2K Lossless Only with RPCL Options) 1.2.840.10008.1.2.4.203 (HTJ2K) 1.2.840.10008.1.2.5 (RLE Lossless) 1.2.840.10008.1.2.8.1 (Deflated Image Frame Compression) If the original file has a transfer syntax other than that in the above list and you request transcoding to another format, an error will be returned.

### Data de-identification \_|\_ Cloud Healthcare API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/healthcare-api/docs/concepts/de-identification](https://docs.cloud.google.com/healthcare-api/docs/concepts/de-identification)
- Source ID: `site-docs-root-2`
- Final score: 121
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- DICOM de-identification A DICOM instance contains a set of key-value metadata elements (known as tags ), and one or more images.
- The Cloud Healthcare API detects sensitive data in DICOM instances and FHIR resources , such as protected health information (PHI), and then uses a de-identification transformation to mask, delete, or otherwise obscure the data.
- De-identification location When the Cloud Healthcare API de-identifies data, the data might be processed in a location that is different from where the source and destination FHIR or DICOM store resides.
- The operation can also use automated optical character recognition (OCR) to redact burnt-in text on images contained in DICOM instances.

### "Using the DICOMweb standard \_|\_ Cloud Healthcare API \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/healthcare-api/docs/how-tos/dicomweb](https://docs.cloud.google.com/healthcare-api/docs/how-tos/dicomweb)
- Source ID: `site-docs-root`
- Final score: 116
- Re-rank relevance: N/A

Evidence snippets:
- The output file, which you send to the Cloud Healthcare API, is called multipart-request.file : cat opening.file instance.json middle.file image.jpg closing.file > multipart-request.file Make a POST request and specify the following information: The name of the parent dataset The name of the DICOM store The multipart-request.file file An access token The following sample shows a POST request using curl . curl -X POST \ -H "Content-Type: multipart/related; type=\"application/dicom+json\"; boundary=DICOMwebBoundary" \ -H "Authorization: Bearer $( gcloud auth application-default print-access-token ) " \ https://healthcare.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /datasets/ DATASET ID /dicomStores/ DICOM STORE ID /dicomWeb/studies \ --data-binary @multipart-request.file If the request is successful, the server returns the response in XML format: <NativeDicomModel> <DicomAttribute tag="00081190" vr="UR" keyword="RetrieveURL"> <Value number="1">https://healthcare.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /datasets/ DATASET ID /dicomStores/ DICOM STORE ID /dicomWeb/studies/ STUDY INSTANCE UID </Value> </DicomAttribute> <DicomAttribute tag="00081199" vr="SQ" keyword="ReferencedSOPSequence"> <Item number="1"> <DicomAttribute tag="00081150" vr="UI" keyword="ReferencedSOPClassUID"> <Value number="1"> SOP CLASS UID </Value> </DicomAttribute> <DicomAttribute tag="00081155" vr="UI" keyword="ReferencedSOPInstanceUID"> <Value number="1"> SOP INSTANCE UID </Value> </DicomAttribute> <DicomAttribute tag="00081190" vr="UR" keyword="RetrieveURL"> <Value number="1">https://healthcare.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /datasets/ DATASET ID /dicomStores/ DICOM STORE ID /dicomWeb/studies/ STUDY INSTANCE UID /series/ SERIES INSTANCE UID /instances/ INSTANCE UID </Value> </DicomAttribute> </Item> </DicomAttribute> </NativeDicomModel> Use the DICOMweb CLI The following samples show how to use the Cloud Healthcare API DICOMweb CLI to store one or more DICOM instances.
- Note: If you are rendering a multi-frame image, use the frames.retrieveFrames method instead of the frames.retrieveRendered method because frames.retrieveRendered doesn't support multi-frame images. curl To retrieve an image, make a GET request and specify the following information: The name of the parent dataset The name of the DICOM store The study unique identifier (UID) The series UID The instance UID An output filename An access token The following sample shows how to retrieve a PNG image with a GET request using curl . curl -X GET \ -H "Authorization: Bearer $( gcloud auth application-default print-access-token ) " \ -H "Accept: image/png" \ "https://healthcare.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /datasets/ DATASET ID /dicomStores/ DICOM STORE ID /dicomWeb/studies/ STUDY INSTANCE UID /series/ SERIES INSTANCE UID /instances/ INSTANCE UID /rendered" \ --output FILENAME .png If the request is successful, the PNG file is written to your machine.
- HttpResponse response = request . executeUnparsed (); String outputPath = "image.png" ; OutputStream outputStream = new FileOutputStream ( new File ( outputPath )); try { response . download ( outputStream ); System . out . println ( "DICOM rendered PNG image written to file " + outputPath ); } finally { outputStream . close (); } if ( ! response . isSuccessStatusCode ()) { System . err . print ( String . format ( "Exception retrieving DICOM rendered image: %s\n" , response . getStatusMessage ())); throw new RuntimeException (); } } private static CloudHealthcare createClient () throws IOException { // Use Application Default Credentials (ADC) to authenticate the requests // For more information see https://cloud.google.com/docs/authentication/production GoogleCredentials credential = GoogleCredentials . getApplicationDefault () . createScoped ( Collections . singleton ( CloudHealthcareScopes .
- PowerShell To retrieve an image, make a GET request and specify the following information: The name of the parent dataset The name of the DICOM store The study unique identifier (UID) The series UID The instance UID An output filename An access token The following sample shows how to retrieve a PNG image with a GET request using Windows PowerShell. $cred = gcloud auth application-default print-access-token $headers = @ { Authorization = "Bearer $cred " ; Accept = "image/png" } Invoke-RestMethod -Method Get -Headers $headers -Uri "https://healthcare.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /datasets/ DATASET ID /dicomStores/ DICOM STORE ID /dicomWeb/studies/ STUDY INSTANCE UID /series/ SERIES INSTANCE UID /instances/ INSTANCE UID /rendered" -OutFile FILENAME .png If the request is successful, the PNG file is written to your machine.

