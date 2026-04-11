---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:26:36.718Z"
product_name: "Cloud Vision"
product_slug: "cloud-vision"
feature_name: "Offline batch image annotation"
feature_slug: "offline-batch-image-annotation"
latest_feature_date: "2019-06-07"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/vision/docs/batch"
  - "https://docs.cloud.google.com/python/docs/reference/vision/latest/google.cloud.vision_v1.services.image_annotator.ImageAnnotatorAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/vision/latest/google.cloud.vision_v1.services.image_annotator.ImageAnnotatorClient"
keywords:
  - "offline"
  - "batch"
  - "image"
  - "annotation"
  - "performs"
  - "asynchronous"
  - "on"
  - "batches"
---

# Offline batch image annotation

Product: Cloud Vision
Coverage: LOW

## Step 02 Summary

Offline batch image annotation performs asynchronous annotation on batches of images; Offline batch image annotation performs asynchronous image detection and annotation on batches of images.

## Extended Definition

Offline batch image annotation performs asynchronous annotation on batches of images; Offline batch image annotation performs asynchronous image detection and annotation on batches of images.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/vision/docs/batch](https://docs.cloud.google.com/vision/docs/batch)
- [https://docs.cloud.google.com/python/docs/reference/vision/latest/google.cloud.vision_v1.services.image_annotator.ImageAnnotatorAsyncClient](https://docs.cloud.google.com/python/docs/reference/vision/latest/google.cloud.vision_v1.services.image_annotator.ImageAnnotatorAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/vision/latest/google.cloud.vision_v1.services.image_annotator.ImageAnnotatorClient](https://docs.cloud.google.com/python/docs/reference/vision/latest/google.cloud.vision_v1.services.image_annotator.ImageAnnotatorClient)

## Supporting Pages

### "Batch image annotation offline \_|\_ Cloud Vision API \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vision/docs/batch](https://docs.cloud.google.com/vision/docs/batch)
- Source ID: `site-docs-root`
- Final score: 230
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- With an images:annotate request you can only specify a small number of images (<=16) to be annotated ; with a files:annotate request you can only specify a single file and specify a small number of pages (<=5) in that file to be annotated. offline (asynchronous) requests - An offline annotation request ( images:asyncBatchAnnotate or files:asyncBatchAnnotate ) starts a long-running operation (LRO) and does not immediately return a response to the caller.
- The Vision API can run offline (asynchronous) detection services and annotation of a large batch of image files using any Vision feature type .
- The response also contain a context field showing the file's URI. offline batch output/output-1-to-2.json { "responses" : [ { " labelAnnotations " : [ { "mid" : "/m/07s6nbt" , "description" : "Text" , "score" : 0.93413997 , "topicality" : 0.93413997 }, { "mid" : "/m/0dwx7" , "description" : "Logo" , "score" : 0.8733531 , "topicality" : 0.8733531 }, ... { "mid" : "/m/03bxgrp" , "description" : "Company" , "score" : 0.5682425 , "topicality" : 0.5682425 } ], " textAnnotations " : [ { "locale" : "en" , "description" : "Google\n" , "boundingPoly" : { "vertices" : [ { "x" : 72 , "y" : 40 }, { "x" : 613 , "y" : 40 }, { "x" : 613 , "y" : 233 }, { "x" : 72 , "y" : 233 } ] } }, ... ], "blockType" : "TEXT" } ] } ], "text" : "Google\n" }, "context" : { "uri" : " gs://cloud-samples-data/vision/document understanding/image1.png " } }, { " imagePropertiesAnnotation " : { "dominantColors" : { "colors" : [ { "color" : { "red" : 229 , "green" : 230 , "blue" : 238 }, "score" : 0.2744754 , "pixelFraction" : 0.075339235 }, ... { "color" : { "red" : 86 , "green" : 87 , "blue" : 95 }, "score" : 0.025770646 , "pixelFraction" : 0.13109145 } ] } }, "cropHintsAnnotation" : { "cropHints" : [ { "boundingPoly" : { "vertices" : [ {}, { "x" : 1599 }, { "x" : 1599 , "y" : 1199 }, { "y" : 1199 } ] }, "confidence" : 0.79999995 , "importanceFraction" : 1 } ] }, "context" : { "uri" : " gs://cloud-samples-data/vision/document understanding/image2.jpg " } } ] } offline batch output/output-3-to-3.json { "responses" : [ { "context" : { "uri" : " gs://cloud-samples-data/vision/document understanding/image3.jpg " }, " localizedObjectAnnotations " : [ { "mid" : "/m/0bt9lr" , "name" : "Dog" , "score" : 0.9669734 , "boundingPoly" : { "normalizedVertices" : [ { "x" : 0.6035543 , "y" : 0.1357359 }, { "x" : 0.98546547 , "y" : 0.1357359 }, { "x" : 0.98546547 , "y" : 0.98426414 }, { "x" : 0.6035543 , "y" : 0.98426414 } ] } }, ... { "mid" : "/m/0jbk" , "name" : "Animal" , "score" : 0.58003056 , "boundingPoly" : { "normalizedVertices" : [ { "x" : 0.014534635 , "y" : 0.1357359 }, { "x" : 0.37197515 , "y" : 0.1357359 }, { "x" : 0.37197515 , "y" : 0.98426414 }, { "x" : 0.014534635 , "y" : 0.98426414 } ] } } ] } ] } Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- A images:asyncBatchAnnotate request allows you to specify up to 2000 images per request ; a files:asyncBatchAnnotate request allows you to specify larger batches of files and can specify more pages (<=2000) per file for annotation at a single time than you are able to with online requests.

### "Class ImageAnnotatorAsyncClient (3.13.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/vision/latest/google.cloud.vision_v1.services.image_annotator.ImageAnnotatorAsyncClient](https://docs.cloud.google.com/python/docs/reference/vision/latest/google.cloud.vision_v1.services.image_annotator.ImageAnnotatorAsyncClient)
- Source ID: `site-python-reference`
- Final score: 180
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- BatchAnnotateFilesResponse Service that performs image detection and annotation for a batch of files.
- Returns Type Description google.cloud.vision v1.types.BatchAnnotateImagesResponse Response to a batch image annotation request. common billing account path common billing account path ( billing account : str ) - > str Returns a fully-qualified billing account string. common folder path common folder path ( folder : str ) - > str Returns a fully-qualified folder string. common location path common location path ( project : str , location : str ) - > str Returns a fully-qualified location string. common organization path common organization path ( organization : str ) - > str Returns a fully-qualified organization string. common project path common project path ( project : str ) - > str Returns a fully-qualified project string. from service account file from service account file ( filename : str , args , kwargs ) Creates an instance of this client using the provided credentials file.
- The result type for the operation will be AsyncBatchAnnotateFilesResponse Response to an async batch file annotation request. async batch annotate images async batch annotate images ( request : typing .
- The result type for the operation will be AsyncBatchAnnotateImagesResponse Response to an async batch image annotation request. batch annotate files batch annotate files ( request : typing .

### "Class ImageAnnotatorClient (3.13.0) \_|\_ Python client libraries \_|\_\

- URL: [https://docs.cloud.google.com/python/docs/reference/vision/latest/google.cloud.vision_v1.services.image_annotator.ImageAnnotatorClient](https://docs.cloud.google.com/python/docs/reference/vision/latest/google.cloud.vision_v1.services.image_annotator.ImageAnnotatorClient)
- Source ID: `site-python-reference`
- Final score: 180
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- BatchAnnotateFilesResponse Service that performs image detection and annotation for a batch of files.
- Returns Type Description google.cloud.vision v1.types.BatchAnnotateImagesResponse Response to a batch image annotation request. common billing account path common billing account path ( billing account : str ) - > str Returns a fully-qualified billing account string. common folder path common folder path ( folder : str ) - > str Returns a fully-qualified folder string. common location path common location path ( project : str , location : str ) - > str Returns a fully-qualified location string. common organization path common organization path ( organization : str ) - > str Returns a fully-qualified organization string. common project path common project path ( project : str ) - > str Returns a fully-qualified project string. from service account file from service account file ( filename : str , args , kwargs ) Creates an instance of this client using the provided credentials file.
- The result type for the operation will be AsyncBatchAnnotateFilesResponse Response to an async batch file annotation request. async batch annotate images async batch annotate images ( request : typing .
- The result type for the operation will be AsyncBatchAnnotateImagesResponse Response to an async batch image annotation request. batch annotate files batch annotate files ( request : typing .

