---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:26:36.718Z"
product_name: "Cloud Vision"
product_slug: "cloud-vision"
feature_name: "Online small batch file annotation"
feature_slug: "online-small-batch-file-annotation"
latest_feature_date: "2019-06-07"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/vision/docs/batch"
  - "https://docs.cloud.google.com/vision/docs/pdf"
  - "https://docs.cloud.google.com/vision/docs/release-notes"
keywords:
  - "online"
  - "small"
  - "batch"
  - "file"
  - "annotation"
  - "performs"
  - "synchronous"
  - "for"
---

# Online small batch file annotation

Product: Cloud Vision
Coverage: LOW

## Step 02 Summary

Online small batch file annotation performs synchronous annotation for small batches of files; Online small batch file annotation performs synchronous image detection and annotation for supported file batches.

## Extended Definition

Online small batch file annotation performs synchronous annotation for small batches of files; Online small batch file annotation performs synchronous image detection and annotation for supported file batches.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/vision/docs/batch](https://docs.cloud.google.com/vision/docs/batch)
- [https://docs.cloud.google.com/vision/docs/pdf](https://docs.cloud.google.com/vision/docs/pdf)
- [https://docs.cloud.google.com/vision/docs/release-notes](https://docs.cloud.google.com/vision/docs/release-notes)

## Supporting Pages

### "Batch image annotation offline \_|\_ Cloud Vision API \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vision/docs/batch](https://docs.cloud.google.com/vision/docs/batch)
- Source ID: `site-docs-root`
- Final score: 172
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- With an images:annotate request you can only specify a small number of images (<=16) to be annotated ; with a files:annotate request you can only specify a single file and specify a small number of pages (<=5) in that file to be annotated. offline (asynchronous) requests - An offline annotation request ( images:asyncBatchAnnotate or files:asyncBatchAnnotate ) starts a long-running operation (LRO) and does not immediately return a response to the caller.
- A images:asyncBatchAnnotate request allows you to specify up to 2000 images per request ; a files:asyncBatchAnnotate request allows you to specify larger batches of files and can specify more pages (<=2000) per file for annotation at a single time than you are able to with online requests.
- Note: for additional images you have to create // additional image request objects and store them in a list to be used below. const imageRequest = { image : { source : { imageUri : inputImageUri , }, }, features : features , }; // Set where to store the results for the images that will be annotated. const outputConfig = { gcsDestination : { uri : outputUri , }, batchSize : 2 , // The max number of responses to output in each JSON file }; // Add each image request object to the batch request and add the output config. const request = { requests : [ imageRequest , // add additional request objects here ], outputConfig , }; // Make the asynchronous batch request. const [ operation ] = await client . asyncBatchAnnotateImages ( request ); // Wait for the operation to complete const [ filesResponse ] = await operation . promise (); // The output is written to GCS with the provided output uri as prefix const destinationUri = filesResponse . outputConfig . gcsDestination . uri ; console . log ( Output written to GCS with prefix: ${ destinationUri } ); } asyncBatchAnnotateImages (); Python Before trying this sample, follow the Python setup instructions in the Vision quickstart using client libraries .
- Cloud Vision offers the following two annotation types: --> online (synchronous) requests - An online annotation request ( images:annotate or files:annotate ) immediately returns inline annotations to the user.

### "Detect text in files (PDF/TIFF) \_|\_ Cloud Vision API \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vision/docs/pdf](https://docs.cloud.google.com/vision/docs/pdf)
- Source ID: `site-docs-root`
- Final score: 160
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The Vision API now supports online (synchronous) small batch annotation (PDF/TIFF/GIF) for all features.
- For more information about this feature, refer to the Online small batch file annotation page.
- This synchronous request performs detection and annotation for a batch of files.
- Document text detection from PDF and TIFF must be requested using the files:asyncBatchAnnotate function, which performs an offline (asynchronous) request and provides its status using the operations resources.

### Vision release notes \_|\_ Cloud Vision API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vision/docs/release-notes](https://docs.cloud.google.com/vision/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 128
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Performs synchronous image detection and annotation for a batch of files (currently "application/pdf", "image/tiff" and "image/gif").
- Support for online small batch file annotation has been released as GA.
- For more information, see Online small batch file annotation .
- April 10, 2019 Feature Beta features The following beta features are available in API version v1p4beta1 : Online small batch file annotation .

