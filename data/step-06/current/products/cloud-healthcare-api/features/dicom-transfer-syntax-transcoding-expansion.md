---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:44:19.152Z"
product_name: "Cloud Healthcare API"
product_slug: "cloud-healthcare-api"
feature_name: "DICOM transfer syntax transcoding expansion"
feature_slug: "dicom-transfer-syntax-transcoding-expansion"
latest_feature_date: "2019-04-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/healthcare-api/docs/dicom"
  - "https://docs.cloud.google.com/healthcare-api/docs/how-tos/dicomweb"
  - "https://docs.cloud.google.com/healthcare-api/docs/best-practices-data-throughput"
keywords:
  - "dicom"
  - "transfer"
  - "syntax"
  - "transcoding"
  - "expansion"
  - "was"
  - "expanded"
  - "additional"
---

# DICOM transfer syntax transcoding expansion

Product: Cloud Healthcare API
Coverage: MEDIUM

## Step 02 Summary

DICOM transcoding support was expanded to additional transfer syntaxes, including lossless JPEG.

## Extended Definition

DICOM transcoding support was expanded to additional transfer syntaxes, including lossless JPEG.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/healthcare-api/docs/dicom](https://docs.cloud.google.com/healthcare-api/docs/dicom)
- [https://docs.cloud.google.com/healthcare-api/docs/how-tos/dicomweb](https://docs.cloud.google.com/healthcare-api/docs/how-tos/dicomweb)
- [https://docs.cloud.google.com/healthcare-api/docs/best-practices-data-throughput](https://docs.cloud.google.com/healthcare-api/docs/best-practices-data-throughput)

## Supporting Pages

### "DICOM conformance statement \_|\_ Cloud Healthcare API \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/healthcare-api/docs/dicom](https://docs.cloud.google.com/healthcare-api/docs/dicom)
- Source ID: `site-api-reference`
- Final score: 166
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- DICOM frames The following Accept Headers are supported: multipart/related; type="application/octet-stream"; transfer-syntax= multipart/related; type="application/octet-stream"; transfer-syntax=1.2.840.10008.1.2.1 (default) multipart/related; type="image/jpeg"; transfer-syntax=1.2.840.10008.1.2.4.50 multipart/related; type="image/jpeg"; transfer-syntax=1.2.840.10008.1.2.4.51 multipart/related; type="image/jpeg"; transfer-syntax=1.2.840.10008.1.2.4.57 multipart/related; type="image/jpeg"; transfer-syntax=1.2.840.10008.1.2.4.70 multipart/related; type="image/png" multipart/related; type="image/jls"; transfer-syntax=1.2.840.10008.1.2.4.80 multipart/related; type="image/jls"; transfer-syntax=1.2.840.10008.1.2.4.81 multipart/related; type="image/jp2"; transfer-syntax=1.2.840.10008.1.2.4.90 multipart/related; type="image/jp2"; transfer-syntax=1.2.840.10008.1.2.4.91 multipart/related; type="image/jphc"; transfer-syntax=1.2.840.10008.1.2.4.201 multipart/related; type="image/jphc"; transfer-syntax=1.2.840.10008.1.2.4.202 multipart/related; type="image/jphc"; transfer-syntax=1.2.840.10008.1.2.4.203 multipart/related; type="image/jxl"; transfer-syntax=1.2.840.10008.1.2.4.110 multipart/related; type="image/jxl"; transfer-syntax=1.2.840.10008.1.2.4.112 multipart/related; type="image/dicom-rle"; transfer-syntax=1.2.840.10008.1.2.5 multipart/related; type="application/x-deflate"; transfer-syntax=1.2.840.10008.1.2.8.1 A transfer syntax of allows the user to request no transcoding be done, so the transfer syntax of the uploaded file will be used.
- DICOM study/series/instances The following Accept Headers are supported: multipart/related; type="application/dicom"; transfer-syntax= multipart/related; type="application/dicom"; transfer-syntax=1.2.840.10008.1.2 multipart/related; type="application/dicom"; transfer-syntax=1.2.840.10008.1.2.1 (default) multipart/related; type="application/dicom"; transfer-syntax=1.2.840.10008.1.2.1.99 multipart/related; type="application/dicom"; transfer-syntax=1.2.840.10008.1.2.4.50 multipart/related; type="application/dicom"; transfer-syntax=1.2.840.10008.1.2.4.51 multipart/related; type="application/dicom"; transfer-syntax=1.2.840.10008.1.2.4.57 multipart/related; type="application/dicom"; transfer-syntax=1.2.840.10008.1.2.4.70 multipart/related; type="application/dicom"; transfer-syntax=1.2.840.10008.1.2.4.80 multipart/related; type="application/dicom"; transfer-syntax=1.2.840.10008.1.2.4.81 multipart/related; type="application/dicom"; transfer-syntax=1.2.840.10008.1.2.4.90 multipart/related; type="application/dicom"; transfer-syntax=1.2.840.10008.1.2.4.91 multipart/related; type="application/dicom"; transfer-syntax=1.2.840.10008.1.2.4.110 multipart/related; type="application/dicom"; transfer-syntax=1.2.840.10008.1.2.4.111 multipart/related; type="application/dicom"; transfer-syntax=1.2.840.10008.1.2.4.112 multipart/related; type="application/dicom"; transfer-syntax=1.2.840.10008.1.2.4.201 multipart/related; type="application/dicom"; transfer-syntax=1.2.840.10008.1.2.4.202 multipart/related; type="application/dicom"; transfer-syntax=1.2.840.10008.1.2.4.203 multipart/related; type="application/dicom"; transfer-syntax=1.2.840.10008.1.2.5 multipart/related; type="application/dicom"; transfer-syntax=1.2.840.10008.1.2.8.1 Warning: The response's default transfer syntax is Little Endian Explicit.
- DICOM instances In addition to the above Accept Headers, RetrieveInstance supports single part content types for convenience: application/dicom; transfer-syntax= application/dicom; transfer-syntax=1.2.840.10008.1.2 application/dicom; transfer-syntax=1.2.840.10008.1.2.1 application/dicom; transfer-syntax=1.2.840.10008.1.2.1.99 application/dicom; transfer-syntax=1.2.840.10008.1.2.4.50 application/dicom; transfer-syntax=1.2.840.10008.1.2.4.51 application/dicom; transfer-syntax=1.2.840.10008.1.2.4.57 application/dicom; transfer-syntax=1.2.840.10008.1.2.4.70 application/dicom; transfer-syntax=1.2.840.10008.1.2.4.80 application/dicom; transfer-syntax=1.2.840.10008.1.2.4.81 application/dicom; transfer-syntax=1.2.840.10008.1.2.4.90 application/dicom; transfer-syntax=1.2.840.10008.1.2.4.91 application/dicom; transfer-syntax=1.2.840.10008.1.2.4.110 application/dicom; transfer-syntax=1.2.840.10008.1.2.4.111 application/dicom; transfer-syntax=1.2.840.10008.1.2.4.112 application/dicom; transfer-syntax=1.2.840.10008.1.2.4.201 application/dicom; transfer-syntax=1.2.840.10008.1.2.4.202 application/dicom; transfer-syntax=1.2.840.10008.1.2.4.203 application/dicom; transfer-syntax=1.2.840.10008.1.2.5 application/dicom; transfer-syntax=1.2.840.10008.1.2.8.1 This is not part of the official DICOMweb standard.
- In particular, transcoding is only possible from the following transfer syntaxes: 1.2.840.10008.1.2 (Little Endian Implicit) 1.2.840.10008.1.2.1 (Little Endian Explicit) 1.2.840.10008.1.2.2 (Explicit VR Big Endian) 1.2.840.10008.1.2.1.99 (Deflated Explicit VR Little Endian) 1.2.840.10008.1.2.4.50 (JPEG Baseline Process 1) 1.2.840.10008.1.2.4.51 (JPEG Extended) 1.2.840.10008.1.2.4.57 (JPEG Lossless) 1.2.840.10008.1.2.4.70 (JPEG Lossless Selection Value 1) 1.2.840.10008.1.2.4.80 (JPEG-LS Lossless) 1.2.840.10008.1.2.4.81 (JPEG-LS Near-Lossless) 1.2.840.10008.1.2.4.90 (JPEG 2000 Lossless Only) 1.2.840.10008.1.2.4.91 (JPEG 2000) 1.2.840.10008.1.2.4.110 (JPEG XL Lossless) 1.2.840.10008.1.2.4.111 (JPEG XL JPEG Recompression) 1.2.840.10008.1.2.4.112 (JPEG XL) 1.2.840.10008.1.2.4.201 (HTJ2K Lossless Only) 1.2.840.10008.1.2.4.202 (HTJ2K Lossless Only with RPCL Options) 1.2.840.10008.1.2.4.203 (HTJ2K) 1.2.840.10008.1.2.5 (RLE Lossless) 1.2.840.10008.1.2.8.1 (Deflated Image Frame Compression) If the original file has a transfer syntax other than that in the above list and you request transcoding to another format, an error will be returned.

### "Using the DICOMweb standard \_|\_ Cloud Healthcare API \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/healthcare-api/docs/how-tos/dicomweb](https://docs.cloud.google.com/healthcare-api/docs/how-tos/dicomweb)
- Source ID: `site-docs-root`
- Final score: 130
- Re-rank relevance: N/A

Evidence snippets:
- CLOUD PLATFORM )); HttpHeaders headers = new HttpHeaders (); headers . set ( "X-GFE-SSL" , "yes" ); // Avoid parsing multipart boundaries by setting 'application/dicom' HTTP header. // Add 'transfer-syntax= ' to avoid transcoding by returning the file in the format it // was originally stored in. headers . setAccept ( "application/dicom; transfer-syntax= " ); // Create a HttpRequestInitializer, which will provide a baseline configuration to all requests.
- AuthorizedSession ( scoped credentials ) URL to the Cloud Healthcare API endpoint and version base url = "https://healthcare.googleapis.com/v1" TODO(developer): Uncomment these lines and replace with your values. project id = 'my-project' # replace with your GCP project ID location = 'us-central1' # replace with the parent dataset's location dataset id = 'my-dataset' # replace with the parent dataset's ID dicom store id = 'my-dicom-store' # replace with the DICOM store ID study uid = '1.3.6.1.4.1.5062.55.1.2270943358.716200484.1363785608958.61.0' # replace with the study UID series uid = '2.24.52329571877967561426579904912379710633' # replace with the series UID instance uid = '1.3.6.2.4.2.14619.5.2.1.6280.6001.129311971280445372188125744148' # replace with the instance UID url = f " { base url } /projects/ { project id } /locations/ { location } " dicom store path = " {} /datasets/ {} /dicomStores/ {} " . format ( url , dataset id , dicom store id ) dicomweb path = " {} /dicomWeb/studies/ {} /series/ {} /instances/ {} " . format ( dicom store path , study uid , series uid , instance uid ) file name = "instance.dcm" Set the required Accept header on the request headers = { "Accept" : "application/dicom; transfer-syntax= " } response = session . get ( dicomweb path , headers = headers ) response . raise for status () with open ( file name , "wb" ) as f : f . write ( response . content ) print ( "Retrieved DICOM instance and saved to {} in current directory" . format ( file name ) ) return response Retrieve consumer image formats The following samples show how to retrieve a consumer imaging format like JPEG or PNG using the Cloud Healthcare API implementation of Rendered Resources .
- GoogleAuth ({ scopes : [ 'https://www.googleapis.com/auth/cloud-platform' ], }), }); const fs = require ( 'fs' ); const util = require ( 'util' ); const writeFile = util . promisify ( fs . writeFile ); const fileName = 'instance file.dcm' ; const dicomWebRetrieveInstance = async () = > { // TODO(developer): uncomment these lines before running the sample // const cloudRegion = 'us-central1'; // const projectId = 'adjective-noun-123'; // const datasetId = 'my-dataset'; // const dicomStoreId = 'my-dicom-store'; // const studyUid = '1.3.6.1.4.1.5062.55.1.2270943358.716200484.1363785608958.61.0'; // const seriesUid = '2.24.52329571877967561426579904912379710633'; // const instanceUid = '1.3.6.2.4.2.14619.5.2.1.6280.6001.129311971280445372188125744148'; const parent = projects/ ${ projectId } /locations/ ${ cloudRegion } /datasets/ ${ datasetId } /dicomStores/ ${ dicomStoreId } ; const dicomWebPath = studies/ ${ studyUid } /series/ ${ seriesUid } /instances/ ${ instanceUid } ; const request = { parent , dicomWebPath }; const instance = await healthcare . projects . locations . datasets . dicomStores . studies . series . instances . retrieveInstance ( request , { headers : { Accept : 'application/dicom; transfer-syntax= ' }, responseType : 'arraybuffer' , } ); const fileBytes = Buffer . from ( instance . data ); await writeFile ( fileName , fileBytes ); console . log ( Retrieved DICOM instance and saved to ${ fileName } in current directory ); }; dicomWebRetrieveInstance (); Python def dicomweb retrieve instance ( project id , location , dataset id , dicom store id , study uid , series uid , instance uid , ): """Handles the GET requests specified in the DICOMweb standard.
- GoogleAuth ({ scopes : [ 'https://www.googleapis.com/auth/cloud-platform' ], }), }); const fs = require ( 'fs' ); const util = require ( 'util' ); const writeFile = util . promisify ( fs . writeFile ); // When specifying the output file, use an extension like ".multipart." // Then, parse the downloaded multipart file to get each individual // DICOM file. const fileName = 'study file.multipart' ; const dicomWebRetrieveStudy = async () = > { // TODO(developer): uncomment these lines before running the sample // const cloudRegion = 'us-central1'; // const projectId = 'adjective-noun-123'; // const datasetId = 'my-dataset'; // const dicomStoreId = 'my-dicom-store'; // const studyUid = '1.3.6.1.4.1.5062.55.1.2270943358.716200484.1363785608958.61.0'; const parent = projects/ ${ projectId } /locations/ ${ cloudRegion } /datasets/ ${ datasetId } /dicomStores/ ${ dicomStoreId } ; const dicomWebPath = studies/ ${ studyUid } ; const request = { parent , dicomWebPath }; const study = await healthcare . projects . locations . datasets . dicomStores . studies . retrieveStudy ( request , { headers : { Accept : 'multipart/related; type=application/dicom; transfer-syntax= ' , }, responseType : 'arraybuffer' , } ); const fileBytes = Buffer . from ( study . data ); await writeFile ( fileName , fileBytes ); console . log ( Retrieved study and saved to ${ fileName } in current directory ); }; dicomWebRetrieveStudy (); Python def dicomweb retrieve study ( project id , location , dataset id , dicom store id , study uid ): """Handles the GET requests specified in the DICOMweb standard.

### "Data ingestion throughput best practices \_|\_ Cloud Healthcare API \_|\_\

- URL: [https://docs.cloud.google.com/healthcare-api/docs/best-practices-data-throughput](https://docs.cloud.google.com/healthcare-api/docs/best-practices-data-throughput)
- Source ID: `site-docs-root-2`
- Final score: 86
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information, see Storage Transfer Service file system transfer details . dicomStores.import Use this method to store large volumes of DICOM data.
- Use this adapter if you can't upload DICOM files to Cloud Storage using Storage Transfer Service or another transfer option.
- Using Storage Transfer Service regularly requires additional work, like a synchronous import pipeline.
- We recommend you use Storage Transfer Service for a single batch load to populate a DICOM store.

