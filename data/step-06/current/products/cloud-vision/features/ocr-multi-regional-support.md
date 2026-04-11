---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:26:36.717Z"
product_name: "Cloud Vision"
product_slug: "cloud-vision"
feature_name: "OCR multi-regional support"
feature_slug: "ocr-multi-regional-support"
latest_feature_date: "2019-12-13"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/vision/docs/ocr"
  - "https://docs.cloud.google.com/vision/docs/handwriting"
  - "https://docs.cloud.google.com/vision/docs/pdf"
keywords:
  - "ocr"
  - "multi"
  - "regional"
  - "supports"
  - "endpoints"
  - "for"
  - "storage"
  - "and"
---

# OCR multi-regional support

Product: Cloud Vision
Coverage: LOW

## Step 02 Summary

OCR supports multi-regional endpoints for data storage and processing in the US and EU; OCR requests can specify continent-level regions for data processing.

## Extended Definition

OCR supports multi-regional endpoints for data storage and processing in the US and EU; OCR requests can specify continent-level regions for data processing.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/vision/docs/ocr](https://docs.cloud.google.com/vision/docs/ocr)
- [https://docs.cloud.google.com/vision/docs/handwriting](https://docs.cloud.google.com/vision/docs/handwriting)
- [https://docs.cloud.google.com/vision/docs/pdf](https://docs.cloud.google.com/vision/docs/pdf)

## Supporting Pages

### "Detect and extract text from images \_|\_ Cloud Vision API \_|\_ Google\

- URL: [https://docs.cloud.google.com/vision/docs/ocr](https://docs.cloud.google.com/vision/docs/ocr)
- Source ID: `site-docs-root`
- Final score: 152
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- As a best practice, don't depend on externally-hosted images for production applications . gcloud To perform text detection, use the gcloud ml vision detect-text command: gcloud ml vision detect-text gs://cloud-samples-data/vision/ocr/sign.jpg REST Before using any of the request data, make the following replacements: CLOUD STORAGE IMAGE URI : the path to a valid image file in a Cloud Storage bucket.
- Multi-regional support for Vision API OCR This functionality currently only applies to the OCR feature (types TEXT DETECTION or DOCUMENT TEXT DETECTION ).
- REST Before using any of the request data, make the following replacements: REGION ID : One of the valid regional location identifiers: us : USA country only eu : The European Union CLOUD STORAGE IMAGE URI : the path to a valid image file in a Cloud Storage bucket.
- Setting the location using the API The Vision API supports a global API endpoint ( vision.googleapis.com ) and also two region-based endpoints: a European Union endpoint ( eu-vision.googleapis.com ) and United States endpoint ( us-vision.googleapis.com ).

### Detect handwriting in images \_|\_ Cloud Vision API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vision/docs/handwriting](https://docs.cloud.google.com/vision/docs/handwriting)
- Source ID: `site-docs-root`
- Final score: 150
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- REST Before using any of the request data, make the following replacements: REGION ID : One of the valid regional location identifiers: us : USA country only eu : The European Union CLOUD STORAGE IMAGE URI : the path to a valid image file in a Cloud Storage bucket.
- Setting the location using the API The Vision API supports a global API endpoint ( vision.googleapis.com ) and also two region-based endpoints: a European Union endpoint ( eu-vision.googleapis.com ) and United States endpoint ( us-vision.googleapis.com ).
- Handwriting detection with Optical Character Recognition (OCR) The Vision API can detect and extract text from images: DOCUMENT TEXT DETECTION extracts text from an image (or file ); the response is optimized for dense text and documents .
- This asynchronous request supports up to 2000 image files and returns response JSON files that are stored in your Cloud Storage bucket.

### "Detect text in files (PDF/TIFF) \_|\_ Cloud Vision API \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vision/docs/pdf](https://docs.cloud.google.com/vision/docs/pdf)
- Source ID: `site-docs-root`
- Final score: 122
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Note: For Java Spring framework users, Spring Cloud Google Cloud offers a way to automatically configure authentication settings and client objects to use Vision API. / Performs document text OCR with PDF/TIFF as source files on Google Cloud Storage. @param gcsSourcePath The path to the remote file on Google Cloud Storage to detect document text on. @param gcsDestinationPath The path to the remote file on Google Cloud Storage to store the results on. @throws Exception on errors while closing the client. / public static void detectDocumentsGcs ( String gcsSourcePath , String gcsDestinationPath ) throws Exception { // Initialize client that will be used to send requests.
- For more information, see Set up authentication for a local development environment . def async detect document ( gcs source uri , gcs destination uri ): """OCR with PDF/TIFF as source files on GCS""" import json import re from google.cloud import vision from google.cloud import storage Supported mime types are: 'application/pdf' and 'image/tiff' mime type = "application/pdf" How many pages should be grouped into each json output file. batch size = 2 client = vision .
- To retrieve your Vision annotation response, send a GET request to the v1.operations endpoint, passing the operation ID in the URL: GET https://vision.googleapis.com/v1/operations/ operation-id For example: curl -X GET -H "Authorization: Bearer $( gcloud auth application-default print-access-token ) " \ -H "Content-Type: application/json" \ https://vision.googleapis.com/v1/projects/ project-id /locations/ location-id /operations/ 1efec2285bd442df If the operation is in progress: { "name" : "operations/ 1efec2285bd442df " , "metadata" : { "@type" : "type.googleapis.com/google.cloud.vision.v1.OperationMetadata" , "state" : "RUNNING" , "createTime" : "2019-05-15T21:10:08.401917049Z" , "updateTime" : "2019-05-15T21:10:33.700763554Z" } } Once the operation has completed, the state shows as DONE and your results are written to the Google Cloud Storage file you specified: { "name" : "operations/ 1efec2285bd442df " , "metadata" : { "@type" : "type.googleapis.com/google.cloud.vision.v1.OperationMetadata" , "state" : "DONE" , "createTime" : "2019-05-15T20:56:30.622473785Z" , "updateTime" : "2019-05-15T20:56:41.666379749Z" }, "done" : true , "response" : { "@type" : "type.googleapis.com/google.cloud.vision.v1.AsyncBatchAnnotateFilesResponse" , "responses" : [ { "outputConfig" : { "gcsDestination" : { "uri" : "gs:// your-bucket-name / folder /" }, "batchSize" : 1 } } ] } } The JSON in your output file is similar to that of an image's document text detection request, with the addition of a context field showing the location of the PDF or TIFF that was specified and the number of pages in the file: output-1-to-1.json Full file Note: Zero coordinate values omitted.
- To retrieve your Vision annotation response, send a GET request to the v1.operations endpoint, passing the operation ID in the URL: GET https://vision.googleapis.com/v1/operations/ operation-id For example: curl -X GET -H "Authorization: Bearer $( gcloud auth application-default print-access-token ) " \ -H "Content-Type: application/json" \ https://vision.googleapis.com/v1/projects/ project-id /locations/ location-id /operations/ 1efec2285bd442df If the operation is in progress: { "name" : "operations/ 1efec2285bd442df " , "metadata" : { "@type" : "type.googleapis.com/google.cloud.vision.v1.OperationMetadata" , "state" : "RUNNING" , "createTime" : "2019-05-15T21:10:08.401917049Z" , "updateTime" : "2019-05-15T21:10:33.700763554Z" } } Once the operation has completed, the state shows as DONE and your results are written to the Google Cloud Storage file you specified: { "name" : "operations/ 1efec2285bd442df " , "metadata" : { "@type" : "type.googleapis.com/google.cloud.vision.v1.OperationMetadata" , "state" : "DONE" , "createTime" : "2019-05-15T20:56:30.622473785Z" , "updateTime" : "2019-05-15T20:56:41.666379749Z" }, "done" : true , "response" : { "@type" : "type.googleapis.com/google.cloud.vision.v1.AsyncBatchAnnotateFilesResponse" , "responses" : [ { "outputConfig" : { "gcsDestination" : { "uri" : "gs:// your-bucket-name / folder /" }, "batchSize" : 1 } } ] } } The JSON in your output file is similar to that of an image's document text detection response if you used the DOCUMENT TEXT DETECTION feature, or text detection response if you used the TEXT DETECTION feature.

