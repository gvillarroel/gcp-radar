---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:44:19.156Z"
product_name: "Cloud Healthcare API"
product_slug: "cloud-healthcare-api"
feature_name: "Single-part DICOM STOW-RS requests"
feature_slug: "single-part-dicom-stow-rs-requests"
latest_feature_date: "2019-04-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/healthcare-api/docs/dicom"
  - "https://docs.cloud.google.com/healthcare-api/docs/how-tos/dicomweb"
  - "https://docs.cloud.google.com/healthcare-api/docs/how-tos/dicom"
keywords:
  - "single"
  - "part"
  - "dicom"
  - "stow"
  - "rs"
  - "requests"
  - "now"
  - "supports"
---

# Single-part DICOM STOW-RS requests

Product: Cloud Healthcare API
Coverage: MEDIUM

## Step 02 Summary

The API now supports single-part STOW-RS requests to avoid client-side multipart header handling.

## Extended Definition

The API now supports single-part STOW-RS requests to avoid client-side multipart header handling.

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
- Final score: 179
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- DICOM instances In addition to the above Accept Headers, RetrieveInstance supports single part content types for convenience: application/dicom; transfer-syntax= application/dicom; transfer-syntax=1.2.840.10008.1.2 application/dicom; transfer-syntax=1.2.840.10008.1.2.1 application/dicom; transfer-syntax=1.2.840.10008.1.2.1.99 application/dicom; transfer-syntax=1.2.840.10008.1.2.4.50 application/dicom; transfer-syntax=1.2.840.10008.1.2.4.51 application/dicom; transfer-syntax=1.2.840.10008.1.2.4.57 application/dicom; transfer-syntax=1.2.840.10008.1.2.4.70 application/dicom; transfer-syntax=1.2.840.10008.1.2.4.80 application/dicom; transfer-syntax=1.2.840.10008.1.2.4.81 application/dicom; transfer-syntax=1.2.840.10008.1.2.4.90 application/dicom; transfer-syntax=1.2.840.10008.1.2.4.91 application/dicom; transfer-syntax=1.2.840.10008.1.2.4.110 application/dicom; transfer-syntax=1.2.840.10008.1.2.4.111 application/dicom; transfer-syntax=1.2.840.10008.1.2.4.112 application/dicom; transfer-syntax=1.2.840.10008.1.2.4.201 application/dicom; transfer-syntax=1.2.840.10008.1.2.4.202 application/dicom; transfer-syntax=1.2.840.10008.1.2.4.203 application/dicom; transfer-syntax=1.2.840.10008.1.2.5 application/dicom; transfer-syntax=1.2.840.10008.1.2.8.1 This is not part of the official DICOMweb standard.
- JSON metadata and bulk data requests When storing instances using JSON metadata and bulk data, the first multipart part must consist of a JSON array of DICOM instances .
- Note that for convenience, the Store Transaction also accepts a single part HTTP request with a single DICOM instance with content type application/dicom .
- DICOM study/series/instances The following Accept Headers are supported: multipart/related; type="application/dicom"; transfer-syntax= multipart/related; type="application/dicom"; transfer-syntax=1.2.840.10008.1.2 multipart/related; type="application/dicom"; transfer-syntax=1.2.840.10008.1.2.1 (default) multipart/related; type="application/dicom"; transfer-syntax=1.2.840.10008.1.2.1.99 multipart/related; type="application/dicom"; transfer-syntax=1.2.840.10008.1.2.4.50 multipart/related; type="application/dicom"; transfer-syntax=1.2.840.10008.1.2.4.51 multipart/related; type="application/dicom"; transfer-syntax=1.2.840.10008.1.2.4.57 multipart/related; type="application/dicom"; transfer-syntax=1.2.840.10008.1.2.4.70 multipart/related; type="application/dicom"; transfer-syntax=1.2.840.10008.1.2.4.80 multipart/related; type="application/dicom"; transfer-syntax=1.2.840.10008.1.2.4.81 multipart/related; type="application/dicom"; transfer-syntax=1.2.840.10008.1.2.4.90 multipart/related; type="application/dicom"; transfer-syntax=1.2.840.10008.1.2.4.91 multipart/related; type="application/dicom"; transfer-syntax=1.2.840.10008.1.2.4.110 multipart/related; type="application/dicom"; transfer-syntax=1.2.840.10008.1.2.4.111 multipart/related; type="application/dicom"; transfer-syntax=1.2.840.10008.1.2.4.112 multipart/related; type="application/dicom"; transfer-syntax=1.2.840.10008.1.2.4.201 multipart/related; type="application/dicom"; transfer-syntax=1.2.840.10008.1.2.4.202 multipart/related; type="application/dicom"; transfer-syntax=1.2.840.10008.1.2.4.203 multipart/related; type="application/dicom"; transfer-syntax=1.2.840.10008.1.2.5 multipart/related; type="application/dicom"; transfer-syntax=1.2.840.10008.1.2.8.1 Warning: The response's default transfer syntax is Little Endian Explicit.

### "Using the DICOMweb standard \_|\_ Cloud Healthcare API \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/healthcare-api/docs/how-tos/dicomweb](https://docs.cloud.google.com/healthcare-api/docs/how-tos/dicomweb)
- Source ID: `site-docs-root`
- Final score: 160
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- String outputPath = "study.multipart" ; OutputStream outputStream = new FileOutputStream ( new File ( outputPath )); try { response . download ( outputStream ); System . out . println ( "DICOM study written to file " + outputPath ); } finally { outputStream . close (); } if ( ! response . isSuccessStatusCode ()) { System . err . print ( String . format ( "Exception retrieving DICOM study: %s\n" , response . getStatusMessage ())); throw new RuntimeException (); } } private static CloudHealthcare createClient () throws IOException { // Use Application Default Credentials (ADC) to authenticate the requests // For more information see https://cloud.google.com/docs/authentication/production GoogleCredentials credential = GoogleCredentials . getApplicationDefault () . createScoped ( Collections . singleton ( CloudHealthcareScopes .
- GoogleAuth ({ scopes : [ 'https://www.googleapis.com/auth/cloud-platform' ], }), }); const fs = require ( 'fs' ); const util = require ( 'util' ); const writeFile = util . promisify ( fs . writeFile ); // When specifying the output file, use an extension like ".multipart." // Then, parse the downloaded multipart file to get each individual // DICOM file. const fileName = 'study file.multipart' ; const dicomWebRetrieveStudy = async () = > { // TODO(developer): uncomment these lines before running the sample // const cloudRegion = 'us-central1'; // const projectId = 'adjective-noun-123'; // const datasetId = 'my-dataset'; // const dicomStoreId = 'my-dicom-store'; // const studyUid = '1.3.6.1.4.1.5062.55.1.2270943358.716200484.1363785608958.61.0'; const parent = projects/ ${ projectId } /locations/ ${ cloudRegion } /datasets/ ${ datasetId } /dicomStores/ ${ dicomStoreId } ; const dicomWebPath = studies/ ${ studyUid } ; const request = { parent , dicomWebPath }; const study = await healthcare . projects . locations . datasets . dicomStores . studies . retrieveStudy ( request , { headers : { Accept : 'multipart/related; type=application/dicom; transfer-syntax= ' , }, responseType : 'arraybuffer' , } ); const fileBytes = Buffer . from ( study . data ); await writeFile ( fileName , fileBytes ); console . log ( Retrieved study and saved to ${ fileName } in current directory ); }; dicomWebRetrieveStudy (); Python def dicomweb retrieve study ( project id , location , dataset id , dicom store id , study uid ): """Handles the GET requests specified in the DICOMweb standard.
- GoogleAuth ({ scopes : [ 'https://www.googleapis.com/auth/cloud-platform' ], }), }); const dicomWebSearchForInstances = async () = > { // TODO(developer): uncomment these lines before running the sample // const cloudRegion = 'us-central1'; // const projectId = 'adjective-noun-123'; // const datasetId = 'my-dataset'; // const dicomStoreId = 'my-dicom-store'; const parent = projects/ ${ projectId } /locations/ ${ cloudRegion } /datasets/ ${ datasetId } /dicomStores/ ${ dicomStoreId } ; const dicomWebPath = 'instances' ; const request = { parent , dicomWebPath }; const instances = await healthcare . projects . locations . datasets . dicomStores . searchForInstances ( request , { headers : { Accept : 'application/dicom+json,multipart/related' }, } ); console . log ( Found ${ instances . data . length } instances: ); console . log ( JSON . stringify ( instances . data )); }; dicomWebSearchForInstances (); Python def dicomweb search instance ( project id , location , dataset id , dicom store id ): """Handles the GET requests specified in DICOMweb standard.
- HttpResponse response = request . executeUnparsed (); String outputPath = "image.png" ; OutputStream outputStream = new FileOutputStream ( new File ( outputPath )); try { response . download ( outputStream ); System . out . println ( "DICOM rendered PNG image written to file " + outputPath ); } finally { outputStream . close (); } if ( ! response . isSuccessStatusCode ()) { System . err . print ( String . format ( "Exception retrieving DICOM rendered image: %s\n" , response . getStatusMessage ())); throw new RuntimeException (); } } private static CloudHealthcare createClient () throws IOException { // Use Application Default Credentials (ADC) to authenticate the requests // For more information see https://cloud.google.com/docs/authentication/production GoogleCredentials credential = GoogleCredentials . getApplicationDefault () . createScoped ( Collections . singleton ( CloudHealthcareScopes .

### "Creating and managing DICOM stores \_|\_ Cloud Healthcare API \_|\_ Google\

- URL: [https://docs.cloud.google.com/healthcare-api/docs/how-tos/dicom](https://docs.cloud.google.com/healthcare-api/docs/how-tos/dicom)
- Source ID: `site-docs-root`
- Final score: 123
- Re-rank relevance: N/A

Evidence snippets:
- Patch request = client . projects () . locations () . datasets () . dicomStores () . patch ( dicomStoreName , store ) . setUpdateMask ( "notificationConfig" ); // Execute the request and process the results. store = request . execute (); System . out . println ( "DICOM store patched: \n" + store . toPrettyString ()); } private static CloudHealthcare createClient () throws IOException { // Use Application Default Credentials (ADC) to authenticate the requests // For more information see https://cloud.google.com/docs/authentication/production GoogleCredentials credential = GoogleCredentials . getApplicationDefault () . createScoped ( Collections . singleton ( CloudHealthcareScopes .
- Delete request = client . projects (). locations (). datasets (). dicomStores (). delete ( dicomStoreName ); // Execute the request and process the results. request . execute (); System . out . println ( "DICOM store deleted." ); } private static CloudHealthcare createClient () throws IOException { // Use Application Default Credentials (ADC) to authenticate the requests // For more information see https://cloud.google.com/docs/authentication/production GoogleCredentials credential = GoogleCredentials . getApplicationDefault () . createScoped ( Collections . singleton ( CloudHealthcareScopes .
- System . out . printf ( "Retrieved %s DICOM stores: \n" , stores . size ()); for ( DicomStore data : stores ) { System . out . println ( "\t" + data . toPrettyString ()); } } private static CloudHealthcare createClient () throws IOException { // Use Application Default Credentials (ADC) to authenticate the requests // For more information see https://cloud.google.com/docs/authentication/production GoogleCredentials credential = GoogleCredentials . getApplicationDefault () . createScoped ( Collections . singleton ( CloudHealthcareScopes .
- DicomStore response = request . execute (); System . out . println ( "DICOM store created: " + response . toPrettyString ()); } private static CloudHealthcare createClient () throws IOException { // Use Application Default Credentials (ADC) to authenticate the requests // For more information see https://cloud.google.com/docs/authentication/production GoogleCredentials credential = GoogleCredentials . getApplicationDefault () . createScoped ( Collections . singleton ( CloudHealthcareScopes .

