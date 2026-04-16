---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:44:19.151Z"
product_name: "Cloud Healthcare API"
product_slug: "cloud-healthcare-api"
feature_name: "DICOM QIDO-RS result pagination"
feature_slug: "dicom-qido-rs-result-pagination"
latest_feature_date: "2019-04-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/healthcare-api/docs/dicom"
  - "https://docs.cloud.google.com/healthcare-api/docs/how-tos/dicom"
  - "https://docs.cloud.google.com/healthcare-api/docs/how-tos/dicomweb"
keywords:
  - "dicom"
  - "qido"
  - "rs"
  - "result"
  - "pagination"
  - "now"
  - "supports"
  - "paginated"
---

# DICOM QIDO-RS result pagination

Product: Cloud Healthcare API
Coverage: MEDIUM

## Step 02 Summary

The DICOM QIDO-RS API now supports paginated query results.

## Extended Definition

The DICOM QIDO-RS API now supports paginated query results.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/healthcare-api/docs/dicom](https://docs.cloud.google.com/healthcare-api/docs/dicom)
- [https://docs.cloud.google.com/healthcare-api/docs/how-tos/dicom](https://docs.cloud.google.com/healthcare-api/docs/how-tos/dicom)
- [https://docs.cloud.google.com/healthcare-api/docs/how-tos/dicomweb](https://docs.cloud.google.com/healthcare-api/docs/how-tos/dicomweb)

## Supporting Pages

### "DICOM conformance statement \_|\_ Cloud Healthcare API \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/healthcare-api/docs/dicom](https://docs.cloud.google.com/healthcare-api/docs/dicom)
- Source ID: `site-api-reference`
- Final score: 123
- Re-rank relevance: N/A

Evidence snippets:
- Returned results The response can be in either JSON or XML format which can be controlled using the following Accept header values: application/dicom+json (default) multipart/related; type=application/dicom+xml By default the following attributes will be returned: Studies: SpecificCharacterSet StudyDate StudyTime AccessionNumber InstanceAvailability ReferringPhysicianName TimezoneOffsetFromUTC PatientName PatientID PatientBirthDate PatientSex StudyInstanceUID StudyID Series: SpecificCharacterSet Modality TimezoneOffsetFromUTC SeriesDescription SeriesInstanceUID PerformedProcedureStepStartDate PerformedProcedureStepStartTime RequestAttributesSequence Instances: SpecificCharacterSet SOPClassUID SOPInstanceUID InstanceAvailability TimezoneOffsetFromUTC InstanceNumber Rows Columns BitsAllocated NumberOfFrames For includefield=all , the default attributes will be returned along with the following attributes: Studies: PersonIdentificationCodeSequence PersonAddress PersonTelephoneNumbers PersonTelecomInformation InstitutionName InstitutionAddress InstitutionCodeSequence ReferringPhysicianIdentificationSequence ConsultingPhysicianName ConsultingPhysicianIdentificationSequence IssuerOfAccessionNumberSequence LocalNamespaceEntityID UniversalEntityID UniversalEntityIDType StudyDescription PhysiciansOfRecord PhysiciansOfRecordIdentificationSequence NameOfPhysiciansReadingStudy PhysiciansReadingStudyIdentificationSequence RequestingServiceCodeSequence ReferencedStudySequence ProcedureCodeSequence ReasonForPerformedProcedureCodeSequence Series: SeriesNumber Laterality SeriesDate SeriesTime Instances: all attributes present in the DICOM instance, excluding the following exceptions.
- DICOM instances In addition to the above Accept Headers, RetrieveInstance supports single part content types for convenience: application/dicom; transfer-syntax= application/dicom; transfer-syntax=1.2.840.10008.1.2 application/dicom; transfer-syntax=1.2.840.10008.1.2.1 application/dicom; transfer-syntax=1.2.840.10008.1.2.1.99 application/dicom; transfer-syntax=1.2.840.10008.1.2.4.50 application/dicom; transfer-syntax=1.2.840.10008.1.2.4.51 application/dicom; transfer-syntax=1.2.840.10008.1.2.4.57 application/dicom; transfer-syntax=1.2.840.10008.1.2.4.70 application/dicom; transfer-syntax=1.2.840.10008.1.2.4.80 application/dicom; transfer-syntax=1.2.840.10008.1.2.4.81 application/dicom; transfer-syntax=1.2.840.10008.1.2.4.90 application/dicom; transfer-syntax=1.2.840.10008.1.2.4.91 application/dicom; transfer-syntax=1.2.840.10008.1.2.4.110 application/dicom; transfer-syntax=1.2.840.10008.1.2.4.111 application/dicom; transfer-syntax=1.2.840.10008.1.2.4.112 application/dicom; transfer-syntax=1.2.840.10008.1.2.4.201 application/dicom; transfer-syntax=1.2.840.10008.1.2.4.202 application/dicom; transfer-syntax=1.2.840.10008.1.2.4.203 application/dicom; transfer-syntax=1.2.840.10008.1.2.5 application/dicom; transfer-syntax=1.2.840.10008.1.2.8.1 This is not part of the official DICOMweb standard.
- The Retrieve Transaction supports the retrieving following resources: DICOM Resources: Study Series Instance Frames Bulkdata Metadata Resources Study Series Instance Rendered Resources Instance Frames It does not support Thumbnail resources.
- Additionally, the Cloud Healthcare API supports a proprietary web service for deleting DICOM instances.

### "Creating and managing DICOM stores \_|\_ Cloud Healthcare API \_|\_ Google\

- URL: [https://docs.cloud.google.com/healthcare-api/docs/how-tos/dicom](https://docs.cloud.google.com/healthcare-api/docs/how-tos/dicom)
- Source ID: `site-docs-root`
- Final score: 100
- Re-rank relevance: N/A

Evidence snippets:
- Patch request = client . projects () . locations () . datasets () . dicomStores () . patch ( dicomStoreName , store ) . setUpdateMask ( "notificationConfig" ); // Execute the request and process the results. store = request . execute (); System . out . println ( "DICOM store patched: \n" + store . toPrettyString ()); } private static CloudHealthcare createClient () throws IOException { // Use Application Default Credentials (ADC) to authenticate the requests // For more information see https://cloud.google.com/docs/authentication/production GoogleCredentials credential = GoogleCredentials . getApplicationDefault () . createScoped ( Collections . singleton ( CloudHealthcareScopes .
- Delete request = client . projects (). locations (). datasets (). dicomStores (). delete ( dicomStoreName ); // Execute the request and process the results. request . execute (); System . out . println ( "DICOM store deleted." ); } private static CloudHealthcare createClient () throws IOException { // Use Application Default Credentials (ADC) to authenticate the requests // For more information see https://cloud.google.com/docs/authentication/production GoogleCredentials credential = GoogleCredentials . getApplicationDefault () . createScoped ( Collections . singleton ( CloudHealthcareScopes .
- ListDicomStoresResponse response = request . execute (); stores . addAll ( response . getDicomStores ()); // Update the page token for the next request. pageToken = response . getNextPageToken (); } while ( pageToken != null ); // Print results.
- List request = client . projects () . locations () . datasets () . dicomStores () . list ( datasetName ) . setPageSize ( 100 ) // Specify pageSize up to 1000 . setPageToken ( pageToken ); // Execute response and collect results.

### "Using the DICOMweb standard \_|\_ Cloud Healthcare API \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/healthcare-api/docs/how-tos/dicomweb](https://docs.cloud.google.com/healthcare-api/docs/how-tos/dicomweb)
- Source ID: `site-docs-root`
- Final score: 94
- Re-rank relevance: N/A

Evidence snippets:
- Delete request = client . projects () . locations () . datasets () . dicomStores () . studies () . delete ( dicomStoreName , "studies/" + studyId ); // Execute the request and process the results. request . execute (); System . out . println ( "DICOM study deleted." ); } private static CloudHealthcare createClient () throws IOException { // Use Application Default Credentials (ADC) to authenticate the requests // For more information see https://cloud.google.com/docs/authentication/production GoogleCredentials credential = GoogleCredentials . getApplicationDefault () . createScoped ( Collections . singleton ( CloudHealthcareScopes .
- File f = new File ( filePath ); byte [] dicomBytes = Files . readAllBytes ( Paths . get ( filePath )); ByteArrayEntity requestEntity = new ByteArrayEntity ( dicomBytes ); HttpUriRequest request = RequestBuilder . post ( uriBuilder . build ()) . setEntity ( requestEntity ) . addHeader ( "Content-Type" , "application/dicom" ) . build (); // Execute the request and process the results.
- RetrieveInstance request = client . projects () . locations () . datasets () . dicomStores () . studies () . series () . instances () . retrieveInstance ( dicomStoreName , dicomWebPath ); // Execute the request and process the results.
- RetrieveRendered request = client . projects () . locations () . datasets () . dicomStores () . studies () . series () . instances () . retrieveRendered ( dicomStoreName , dicomWebPath ); // Execute the request and process the results.

