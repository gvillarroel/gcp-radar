---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:44:19.031Z"
product_name: "Cloud Healthcare API"
product_slug: "cloud-healthcare-api"
feature_name: "DICOM frame compression via Accept-Encoding"
feature_slug: "dicom-frame-compression-via-accept-encoding"
latest_feature_date: "2025-09-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/healthcare-api/docs/dicom"
  - "https://docs.cloud.google.com/healthcare-api/docs/how-tos/dicomweb"
  - "https://docs.cloud.google.com/healthcare-api/docs/how-tos/dicom"
keywords:
  - "dicom"
  - "frame"
  - "compression"
  - "via"
  - "accept"
  - "encoding"
  - "requests"
  - "containing"
---

# DICOM frame compression via Accept-Encoding

Product: Cloud Healthcare API
Coverage: MEDIUM

## Step 02 Summary

DICOM frame requests containing uncompressed pixel data now support Accept-Encoding to return compressed results, with compression optional by omitting the header; DICOM frame requests containing uncompressed pixel data now support Accept-Encoding to return compressed results, with compression optional by omitting the header.

## Extended Definition

DICOM frame requests containing uncompressed pixel data now support Accept-Encoding to return compressed results, with compression optional by omitting the header; DICOM frame requests containing uncompressed pixel data now support Accept-Encoding to return compressed results, with compression optional by omitting the header.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/healthcare-api/docs/dicom](https://docs.cloud.google.com/healthcare-api/docs/dicom)
- [https://docs.cloud.google.com/healthcare-api/docs/how-tos/dicomweb](https://docs.cloud.google.com/healthcare-api/docs/how-tos/dicomweb)
- [https://docs.cloud.google.com/healthcare-api/docs/how-tos/dicom](https://docs.cloud.google.com/healthcare-api/docs/how-tos/dicom)

## Supporting Pages

### "DICOM conformance statement \_|\_ Cloud Healthcare API \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/healthcare-api/docs/dicom](https://docs.cloud.google.com/healthcare-api/docs/dicom)
- Source ID: `site-api-reference`
- Final score: 186
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Returned results The response can be in either JSON or XML format which can be controlled using the following Accept header values: application/dicom+json (default) multipart/related; type=application/dicom+xml By default the following attributes will be returned: Studies: SpecificCharacterSet StudyDate StudyTime AccessionNumber InstanceAvailability ReferringPhysicianName TimezoneOffsetFromUTC PatientName PatientID PatientBirthDate PatientSex StudyInstanceUID StudyID Series: SpecificCharacterSet Modality TimezoneOffsetFromUTC SeriesDescription SeriesInstanceUID PerformedProcedureStepStartDate PerformedProcedureStepStartTime RequestAttributesSequence Instances: SpecificCharacterSet SOPClassUID SOPInstanceUID InstanceAvailability TimezoneOffsetFromUTC InstanceNumber Rows Columns BitsAllocated NumberOfFrames For includefield=all , the default attributes will be returned along with the following attributes: Studies: PersonIdentificationCodeSequence PersonAddress PersonTelephoneNumbers PersonTelecomInformation InstitutionName InstitutionAddress InstitutionCodeSequence ReferringPhysicianIdentificationSequence ConsultingPhysicianName ConsultingPhysicianIdentificationSequence IssuerOfAccessionNumberSequence LocalNamespaceEntityID UniversalEntityID UniversalEntityIDType StudyDescription PhysiciansOfRecord PhysiciansOfRecordIdentificationSequence NameOfPhysiciansReadingStudy PhysiciansReadingStudyIdentificationSequence RequestingServiceCodeSequence ReferencedStudySequence ProcedureCodeSequence ReasonForPerformedProcedureCodeSequence Series: SeriesNumber Laterality SeriesDate SeriesTime Instances: all attributes present in the DICOM instance, excluding the following exceptions.
- DICOM frames The following Accept Headers are supported: multipart/related; type="application/octet-stream"; transfer-syntax= multipart/related; type="application/octet-stream"; transfer-syntax=1.2.840.10008.1.2.1 (default) multipart/related; type="image/jpeg"; transfer-syntax=1.2.840.10008.1.2.4.50 multipart/related; type="image/jpeg"; transfer-syntax=1.2.840.10008.1.2.4.51 multipart/related; type="image/jpeg"; transfer-syntax=1.2.840.10008.1.2.4.57 multipart/related; type="image/jpeg"; transfer-syntax=1.2.840.10008.1.2.4.70 multipart/related; type="image/png" multipart/related; type="image/jls"; transfer-syntax=1.2.840.10008.1.2.4.80 multipart/related; type="image/jls"; transfer-syntax=1.2.840.10008.1.2.4.81 multipart/related; type="image/jp2"; transfer-syntax=1.2.840.10008.1.2.4.90 multipart/related; type="image/jp2"; transfer-syntax=1.2.840.10008.1.2.4.91 multipart/related; type="image/jphc"; transfer-syntax=1.2.840.10008.1.2.4.201 multipart/related; type="image/jphc"; transfer-syntax=1.2.840.10008.1.2.4.202 multipart/related; type="image/jphc"; transfer-syntax=1.2.840.10008.1.2.4.203 multipart/related; type="image/jxl"; transfer-syntax=1.2.840.10008.1.2.4.110 multipart/related; type="image/jxl"; transfer-syntax=1.2.840.10008.1.2.4.112 multipart/related; type="image/dicom-rle"; transfer-syntax=1.2.840.10008.1.2.5 multipart/related; type="application/x-deflate"; transfer-syntax=1.2.840.10008.1.2.8.1 A transfer syntax of allows the user to request no transcoding be done, so the transfer syntax of the uploaded file will be used.
- DICOM study/series/instances The following Accept Headers are supported: multipart/related; type="application/dicom"; transfer-syntax= multipart/related; type="application/dicom"; transfer-syntax=1.2.840.10008.1.2 multipart/related; type="application/dicom"; transfer-syntax=1.2.840.10008.1.2.1 (default) multipart/related; type="application/dicom"; transfer-syntax=1.2.840.10008.1.2.1.99 multipart/related; type="application/dicom"; transfer-syntax=1.2.840.10008.1.2.4.50 multipart/related; type="application/dicom"; transfer-syntax=1.2.840.10008.1.2.4.51 multipart/related; type="application/dicom"; transfer-syntax=1.2.840.10008.1.2.4.57 multipart/related; type="application/dicom"; transfer-syntax=1.2.840.10008.1.2.4.70 multipart/related; type="application/dicom"; transfer-syntax=1.2.840.10008.1.2.4.80 multipart/related; type="application/dicom"; transfer-syntax=1.2.840.10008.1.2.4.81 multipart/related; type="application/dicom"; transfer-syntax=1.2.840.10008.1.2.4.90 multipart/related; type="application/dicom"; transfer-syntax=1.2.840.10008.1.2.4.91 multipart/related; type="application/dicom"; transfer-syntax=1.2.840.10008.1.2.4.110 multipart/related; type="application/dicom"; transfer-syntax=1.2.840.10008.1.2.4.111 multipart/related; type="application/dicom"; transfer-syntax=1.2.840.10008.1.2.4.112 multipart/related; type="application/dicom"; transfer-syntax=1.2.840.10008.1.2.4.201 multipart/related; type="application/dicom"; transfer-syntax=1.2.840.10008.1.2.4.202 multipart/related; type="application/dicom"; transfer-syntax=1.2.840.10008.1.2.4.203 multipart/related; type="application/dicom"; transfer-syntax=1.2.840.10008.1.2.5 multipart/related; type="application/dicom"; transfer-syntax=1.2.840.10008.1.2.8.1 Warning: The response's default transfer syntax is Little Endian Explicit.
- DICOM instances In addition to the above Accept Headers, RetrieveInstance supports single part content types for convenience: application/dicom; transfer-syntax= application/dicom; transfer-syntax=1.2.840.10008.1.2 application/dicom; transfer-syntax=1.2.840.10008.1.2.1 application/dicom; transfer-syntax=1.2.840.10008.1.2.1.99 application/dicom; transfer-syntax=1.2.840.10008.1.2.4.50 application/dicom; transfer-syntax=1.2.840.10008.1.2.4.51 application/dicom; transfer-syntax=1.2.840.10008.1.2.4.57 application/dicom; transfer-syntax=1.2.840.10008.1.2.4.70 application/dicom; transfer-syntax=1.2.840.10008.1.2.4.80 application/dicom; transfer-syntax=1.2.840.10008.1.2.4.81 application/dicom; transfer-syntax=1.2.840.10008.1.2.4.90 application/dicom; transfer-syntax=1.2.840.10008.1.2.4.91 application/dicom; transfer-syntax=1.2.840.10008.1.2.4.110 application/dicom; transfer-syntax=1.2.840.10008.1.2.4.111 application/dicom; transfer-syntax=1.2.840.10008.1.2.4.112 application/dicom; transfer-syntax=1.2.840.10008.1.2.4.201 application/dicom; transfer-syntax=1.2.840.10008.1.2.4.202 application/dicom; transfer-syntax=1.2.840.10008.1.2.4.203 application/dicom; transfer-syntax=1.2.840.10008.1.2.5 application/dicom; transfer-syntax=1.2.840.10008.1.2.8.1 This is not part of the official DICOMweb standard.

### "Using the DICOMweb standard \_|\_ Cloud Healthcare API \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/healthcare-api/docs/how-tos/dicomweb](https://docs.cloud.google.com/healthcare-api/docs/how-tos/dicomweb)
- Source ID: `site-docs-root`
- Final score: 167
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This sample // searches for studies containing a patient's name. params : { PatientName : 'Sally Zhang' }, headers : { Accept : 'application/dicom+json' }, } ); console . log ( studies ); console . log ( Found ${ studies . data . length } studies: ); console . log ( JSON . stringify ( studies . data )); }; dicomWebSearchStudies (); Python def dicomweb search studies ( project id , location , dataset id , dicom store id ): """Handles the GET requests specified in the DICOMweb standard.
- GoogleAuth ({ scopes : [ 'https://www.googleapis.com/auth/cloud-platform' ], }), }); const fs = require ( 'fs' ); const util = require ( 'util' ); const writeFile = util . promisify ( fs . writeFile ); const fileName = 'instance file.dcm' ; const dicomWebRetrieveInstance = async () = > { // TODO(developer): uncomment these lines before running the sample // const cloudRegion = 'us-central1'; // const projectId = 'adjective-noun-123'; // const datasetId = 'my-dataset'; // const dicomStoreId = 'my-dicom-store'; // const studyUid = '1.3.6.1.4.1.5062.55.1.2270943358.716200484.1363785608958.61.0'; // const seriesUid = '2.24.52329571877967561426579904912379710633'; // const instanceUid = '1.3.6.2.4.2.14619.5.2.1.6280.6001.129311971280445372188125744148'; const parent = projects/ ${ projectId } /locations/ ${ cloudRegion } /datasets/ ${ datasetId } /dicomStores/ ${ dicomStoreId } ; const dicomWebPath = studies/ ${ studyUid } /series/ ${ seriesUid } /instances/ ${ instanceUid } ; const request = { parent , dicomWebPath }; const instance = await healthcare . projects . locations . datasets . dicomStores . studies . series . instances . retrieveInstance ( request , { headers : { Accept : 'application/dicom; transfer-syntax= ' }, responseType : 'arraybuffer' , } ); const fileBytes = Buffer . from ( instance . data ); await writeFile ( fileName , fileBytes ); console . log ( Retrieved DICOM instance and saved to ${ fileName } in current directory ); }; dicomWebRetrieveInstance (); Python def dicomweb retrieve instance ( project id , location , dataset id , dicom store id , study uid , series uid , instance uid , ): """Handles the GET requests specified in the DICOMweb standard.
- GoogleAuth ({ scopes : [ 'https://www.googleapis.com/auth/cloud-platform' ], }), }); const fs = require ( 'fs' ); const util = require ( 'util' ); const writeFile = util . promisify ( fs . writeFile ); const fileName = 'rendered image.png' ; const dicomWebRetrieveRendered = async () = > { // TODO(developer): uncomment these lines before running the sample // const cloudRegion = 'us-central1'; // const projectId = 'adjective-noun-123'; // const datasetId = 'my-dataset'; // const dicomStoreId = 'my-dicom-store'; // const studyUid = '1.3.6.1.4.1.5062.55.1.2270943358.716200484.1363785608958.61.0'; // const seriesUid = '2.24.52329571877967561426579904912379710633'; // const instanceUid = '1.3.6.2.4.2.14619.5.2.1.6280.6001.129311971280445372188125744148'; const parent = projects/ ${ projectId } /locations/ ${ cloudRegion } /datasets/ ${ datasetId } /dicomStores/ ${ dicomStoreId } ; const dicomWebPath = studies/ ${ studyUid } /series/ ${ seriesUid } /instances/ ${ instanceUid } /rendered ; const request = { parent , dicomWebPath }; const rendered = await healthcare . projects . locations . datasets . dicomStores . studies . series . instances . retrieveRendered ( request , { headers : { Accept : 'image/png' }, responseType : 'arraybuffer' , } ); const fileBytes = Buffer . from ( rendered . data ); await writeFile ( fileName , fileBytes ); console . log ( Retrieved rendered image and saved to ${ fileName } in current directory ); }; dicomWebRetrieveRendered (); Python def dicomweb retrieve rendered ( project id , location , dataset id , dicom store id , study uid , series uid , instance uid , ): """Handles the GET requests specified in the DICOMweb standard.
- GoogleAuth ({ scopes : [ 'https://www.googleapis.com/auth/cloud-platform' ], }), }); const fs = require ( 'fs' ); const util = require ( 'util' ); const writeFile = util . promisify ( fs . writeFile ); // When specifying the output file, use an extension like ".multipart." // Then, parse the downloaded multipart file to get each individual // DICOM file. const fileName = 'study file.multipart' ; const dicomWebRetrieveStudy = async () = > { // TODO(developer): uncomment these lines before running the sample // const cloudRegion = 'us-central1'; // const projectId = 'adjective-noun-123'; // const datasetId = 'my-dataset'; // const dicomStoreId = 'my-dicom-store'; // const studyUid = '1.3.6.1.4.1.5062.55.1.2270943358.716200484.1363785608958.61.0'; const parent = projects/ ${ projectId } /locations/ ${ cloudRegion } /datasets/ ${ datasetId } /dicomStores/ ${ dicomStoreId } ; const dicomWebPath = studies/ ${ studyUid } ; const request = { parent , dicomWebPath }; const study = await healthcare . projects . locations . datasets . dicomStores . studies . retrieveStudy ( request , { headers : { Accept : 'multipart/related; type=application/dicom; transfer-syntax= ' , }, responseType : 'arraybuffer' , } ); const fileBytes = Buffer . from ( study . data ); await writeFile ( fileName , fileBytes ); console . log ( Retrieved study and saved to ${ fileName } in current directory ); }; dicomWebRetrieveStudy (); Python def dicomweb retrieve study ( project id , location , dataset id , dicom store id , study uid ): """Handles the GET requests specified in the DICOMweb standard.

### "Creating and managing DICOM stores \_|\_ Cloud Healthcare API \_|\_ Google\

- URL: [https://docs.cloud.google.com/healthcare-api/docs/how-tos/dicom](https://docs.cloud.google.com/healthcare-api/docs/how-tos/dicom)
- Source ID: `site-docs-root`
- Final score: 114
- Re-rank relevance: N/A

Evidence snippets:
- Run the following command in the terminal to create or overwrite this file in the current directory: @' { "notificationConfigs": [ { "pubsubTopic": "projects/ PROJECT ID /topics/ PUBSUB TOPIC " } ], "labels": { " KEY 1 ": " VALUE 1 ", " KEY 2 ": " VALUE 2 " } } '@ Out-File -FilePath request.json -Encoding utf8 Then execute the following command to send your REST request: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method PATCH -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://healthcare.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /datasets/ DATASET ID /dicomStores/ DICOM STORE ID ?updateMask=notificationConfigs,labels" Select-Object -Expand Content APIs Explorer Copy the request body and open the method reference page .
- Patch request = client . projects () . locations () . datasets () . dicomStores () . patch ( dicomStoreName , store ) . setUpdateMask ( "notificationConfig" ); // Execute the request and process the results. store = request . execute (); System . out . println ( "DICOM store patched: \n" + store . toPrettyString ()); } private static CloudHealthcare createClient () throws IOException { // Use Application Default Credentials (ADC) to authenticate the requests // For more information see https://cloud.google.com/docs/authentication/production GoogleCredentials credential = GoogleCredentials . getApplicationDefault () . createScoped ( Collections . singleton ( CloudHealthcareScopes .
- Delete request = client . projects (). locations (). datasets (). dicomStores (). delete ( dicomStoreName ); // Execute the request and process the results. request . execute (); System . out . println ( "DICOM store deleted." ); } private static CloudHealthcare createClient () throws IOException { // Use Application Default Credentials (ADC) to authenticate the requests // For more information see https://cloud.google.com/docs/authentication/production GoogleCredentials credential = GoogleCredentials . getApplicationDefault () . createScoped ( Collections . singleton ( CloudHealthcareScopes .
- System . out . printf ( "Retrieved %s DICOM stores: \n" , stores . size ()); for ( DicomStore data : stores ) { System . out . println ( "\t" + data . toPrettyString ()); } } private static CloudHealthcare createClient () throws IOException { // Use Application Default Credentials (ADC) to authenticate the requests // For more information see https://cloud.google.com/docs/authentication/production GoogleCredentials credential = GoogleCredentials . getApplicationDefault () . createScoped ( Collections . singleton ( CloudHealthcareScopes .

