---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:26:36.715Z"
product_name: "Cloud Vision"
product_slug: "cloud-vision"
feature_name: "OCR On-Prem"
feature_slug: "ocr-on-prem"
latest_feature_date: "2020-12-14"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/vision/docs/release-notes"
  - "https://docs.cloud.google.com/vision/docs/reference/rest/v1/AnnotateImageResponse"
  - "https://docs.cloud.google.com/vision/docs/ocr"
keywords:
  - "ocr"
  - "on"
  - "prem"
  - "brings"
  - "image"
  - "text"
  - "recognition"
  - "capabilities"
---

# OCR On-Prem

Product: Cloud Vision
Coverage: LOW

## Step 02 Summary

OCR On-Prem brings Google image text recognition capabilities to on-premises environments.

## Extended Definition

OCR On-Prem brings Google image text recognition capabilities to on-premises environments.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/vision/docs/release-notes](https://docs.cloud.google.com/vision/docs/release-notes)
- [https://docs.cloud.google.com/vision/docs/reference/rest/v1/AnnotateImageResponse](https://docs.cloud.google.com/vision/docs/reference/rest/v1/AnnotateImageResponse)
- [https://docs.cloud.google.com/vision/docs/ocr](https://docs.cloud.google.com/vision/docs/ocr)

## Supporting Pages

### Vision release notes \_|\_ Cloud Vision API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vision/docs/release-notes](https://docs.cloud.google.com/vision/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 176
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- OCR On-Prem enables easy integration of Google image text recognition technologies into your on-premises solution.
- For more infomation, see the OCR how-to pages: Detect text in images Detect handwriting in images Detect text in files (PDF/TIFF) August 29, 2019 Change Improved detection models are now default for the following features: Logo Detection Landmark Detection Crop hints Object Localization The legacy model can still be accessed for 90 days by specifying "builtin/legacy" in the model field of a Feature object.
- December 05, 2023 Change Updated feature models Improved models are now available for the following features: Text detection and documentation text detection (OCR) Web detection Logo detection Object localization Specify "builtin/latest" in the model field of a Feature object to use the new models.
- September 28, 2018 Change Logo and OCR model updates Improved detection models are now available for the following features: Logo Detection Text Detection (OCR) Specify "builtin/latest" in the model field of a Feature object to use the new models.

### AnnotateImageResponse \_|\_ Cloud Vision API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vision/docs/reference/rest/v1/AnnotateImageResponse](https://docs.cloud.google.com/vision/docs/reference/rest/v1/AnnotateImageResponse)
- Source ID: `site-api-reference`
- Final score: 172
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- This annotation provides the structural hierarchy for the OCR detected text. safeSearchAnnotation object ( SafeSearchAnnotation ) If present, safe-search annotation has completed successfully. imagePropertiesAnnotation object ( ImageProperties ) If present, image properties were extracted successfully. cropHintsAnnotation object ( CropHintsAnnotation ) If present, crop hints have completed successfully. webDetection object ( WebDetection ) If present, web detection has completed successfully. productSearchResults object ( ProductSearchResults ) If present, product search has completed successfully. error object ( Status ) If set, represents the error message for the operation.
- For example: when the text is horizontal it might look like: 0----1 3----2 when it's rotated 180 degrees around the top-left corner it becomes: 2----3 1----0 and the vertex order will still be (0, 1, 2, 3). paragraphs[] object ( Paragraph ) List of paragraphs in this block (if this blocks is of type text). blockType enum ( BlockType ) Detected block type (text, image etc) for this block. confidence number Confidence of the OCR results on the block.
- For images (including TIFFs) the unit is pixels. blocks[] object ( Block ) List of blocks of text, images etc on this page. confidence number Confidence of the OCR results on the page.
- JSON representation { "faceAnnotations" : [ { object ( FaceAnnotation ) } ] , "landmarkAnnotations" : [ { object ( EntityAnnotation ) } ] , "logoAnnotations" : [ { object ( EntityAnnotation ) } ] , "labelAnnotations" : [ { object ( EntityAnnotation ) } ] , "localizedObjectAnnotations" : [ { object ( LocalizedObjectAnnotation ) } ] , "textAnnotations" : [ { object ( EntityAnnotation ) } ] , "fullTextAnnotation" : { object ( TextAnnotation ) } , "safeSearchAnnotation" : { object ( SafeSearchAnnotation ) } , "imagePropertiesAnnotation" : { object ( ImageProperties ) } , "cropHintsAnnotation" : { object ( CropHintsAnnotation ) } , "webDetection" : { object ( WebDetection ) } , "productSearchResults" : { object ( ProductSearchResults ) } , "error" : { object ( Status ) } , "context" : { object ( ImageAnnotationContext ) } } Fields faceAnnotations[] object ( FaceAnnotation ) If present, face detection has completed successfully. landmarkAnnotations[] object ( EntityAnnotation ) If present, landmark detection has completed successfully. logoAnnotations[] object ( EntityAnnotation ) If present, logo detection has completed successfully. labelAnnotations[] object ( EntityAnnotation ) If present, label detection has completed successfully. localizedObjectAnnotations[] object ( LocalizedObjectAnnotation ) If present, localized object detection has completed successfully.

### "Detect and extract text from images \_|\_ Cloud Vision API \_|\_ Google\

- URL: [https://docs.cloud.google.com/vision/docs/ocr](https://docs.cloud.google.com/vision/docs/ocr)
- Source ID: `site-docs-root`
- Final score: 168
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Optical Character Recognition (OCR) The Cloud Vision API lets you use optical character recognition (OCR) capabilities for text detection from images.
- Cloud Vision API provides two annotation features that support optical character recognition (OCR): TEXT DETECTION detects and extracts text from any image .
- As a best practice, don't depend on externally-hosted images for production applications . gcloud To perform text detection, use the gcloud ml vision detect-text command: gcloud ml vision detect-text gs://cloud-samples-data/vision/ocr/sign.jpg REST Before using any of the request data, make the following replacements: CLOUD STORAGE IMAGE URI : the path to a valid image file in a Cloud Storage bucket.
- Request body: { "requests": [ { "features": [ { "type": "TEXT DETECTION" } ], "image": { "source": { "imageUri": "gs://cloud-samples-data/vision/ocr/sign.jpg" } } } ] } Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

