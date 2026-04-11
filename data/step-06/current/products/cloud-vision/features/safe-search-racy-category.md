---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:26:36.720Z"
product_name: "Cloud Vision"
product_slug: "cloud-vision"
feature_name: "Safe Search racy category"
feature_slug: "safe-search-racy-category"
latest_feature_date: "2018-04-06"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/vision/docs/release-notes"
  - "https://docs.cloud.google.com/vision/docs/reference/rest/v1/AnnotateImageResponse"
  - "https://docs.cloud.google.com/python/docs/reference/vision/latest/google.cloud.vision_v1.services.product_search.ProductSearchAsyncClient"
keywords:
  - "safe"
  - "search"
  - "racy"
  - "category"
  - "detection"
  - "includes"
  - "for"
  - "improved"
---

# Safe Search racy category

Product: Cloud Vision
Coverage: LOW

## Step 02 Summary

Safe Search detection includes a racy category for improved adult content moderation; Safe Search detection includes a racy category for improved adult content moderation.

## Extended Definition

Safe Search detection includes a racy category for improved adult content moderation; Safe Search detection includes a racy category for improved adult content moderation.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/vision/docs/release-notes](https://docs.cloud.google.com/vision/docs/release-notes)
- [https://docs.cloud.google.com/vision/docs/reference/rest/v1/AnnotateImageResponse](https://docs.cloud.google.com/vision/docs/reference/rest/v1/AnnotateImageResponse)
- [https://docs.cloud.google.com/python/docs/reference/vision/latest/google.cloud.vision_v1.services.product_search.ProductSearchAsyncClient](https://docs.cloud.google.com/python/docs/reference/vision/latest/google.cloud.vision_v1.services.product_search.ProductSearchAsyncClient)

## Supporting Pages

### Vision release notes \_|\_ Cloud Vision API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vision/docs/release-notes](https://docs.cloud.google.com/vision/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 128
- Re-rank relevance: N/A

Evidence snippets:
- Safe Search detection: includes additional racy category to enhance adult content moderation.
- Safe Search detection: includes additional racy category to enhance adult content moderation.
- Feature New multi-regional support for features The Vision API now offers multi-regional support ( us and eu ) for the LABEL DETECTION and SAFE SEARCH features.
- For more infomation, see the OCR how-to pages: Detect text in images Detect handwriting in images Detect text in files (PDF/TIFF) August 29, 2019 Change Improved detection models are now default for the following features: Logo Detection Landmark Detection Crop hints Object Localization The legacy model can still be accessed for 90 days by specifying "builtin/legacy" in the model field of a Feature object.

### AnnotateImageResponse \_|\_ Cloud Vision API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vision/docs/reference/rest/v1/AnnotateImageResponse](https://docs.cloud.google.com/vision/docs/reference/rest/v1/AnnotateImageResponse)
- Source ID: `site-api-reference`
- Final score: 100
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- This annotation provides the structural hierarchy for the OCR detected text. safeSearchAnnotation object ( SafeSearchAnnotation ) If present, safe-search annotation has completed successfully. imagePropertiesAnnotation object ( ImageProperties ) If present, image properties were extracted successfully. cropHintsAnnotation object ( CropHintsAnnotation ) If present, crop hints have completed successfully. webDetection object ( WebDetection ) If present, web detection has completed successfully. productSearchResults object ( ProductSearchResults ) If present, product search has completed successfully. error object ( Status ) If set, represents the error message for the operation.
- JSON representation { "faceAnnotations" : [ { object ( FaceAnnotation ) } ] , "landmarkAnnotations" : [ { object ( EntityAnnotation ) } ] , "logoAnnotations" : [ { object ( EntityAnnotation ) } ] , "labelAnnotations" : [ { object ( EntityAnnotation ) } ] , "localizedObjectAnnotations" : [ { object ( LocalizedObjectAnnotation ) } ] , "textAnnotations" : [ { object ( EntityAnnotation ) } ] , "fullTextAnnotation" : { object ( TextAnnotation ) } , "safeSearchAnnotation" : { object ( SafeSearchAnnotation ) } , "imagePropertiesAnnotation" : { object ( ImageProperties ) } , "cropHintsAnnotation" : { object ( CropHintsAnnotation ) } , "webDetection" : { object ( WebDetection ) } , "productSearchResults" : { object ( ProductSearchResults ) } , "error" : { object ( Status ) } , "context" : { object ( ImageAnnotationContext ) } } Fields faceAnnotations[] object ( FaceAnnotation ) If present, face detection has completed successfully. landmarkAnnotations[] object ( EntityAnnotation ) If present, landmark detection has completed successfully. logoAnnotations[] object ( EntityAnnotation ) If present, logo detection has completed successfully. labelAnnotations[] object ( EntityAnnotation ) If present, label detection has completed successfully. localizedObjectAnnotations[] object ( LocalizedObjectAnnotation ) If present, localized object detection has completed successfully.
- JSON representation FaceAnnotation JSON representation Landmark JSON representation Type Position JSON representation Likelihood EntityAnnotation JSON representation LocationInfo JSON representation Property JSON representation LocalizedObjectAnnotation JSON representation TextAnnotation JSON representation Page JSON representation TextProperty JSON representation DetectedLanguage JSON representation DetectedBreak JSON representation BreakType Block JSON representation Paragraph JSON representation Word JSON representation Symbol JSON representation BlockType SafeSearchAnnotation JSON representation ImageProperties JSON representation DominantColorsAnnotation JSON representation ColorInfo JSON representation Color JSON representation CropHintsAnnotation JSON representation CropHint JSON representation WebDetection JSON representation WebEntity JSON representation WebImage JSON representation WebPage JSON representation WebLabel JSON representation ProductSearchResults JSON representation Result JSON representation GroupedResult JSON representation ObjectAnnotation JSON representation ImageAnnotationContext JSON representation Response to an image annotation request.
- SafeSearchAnnotation Set of features pertaining to the image, computed by computer vision methods over safe-search verticals (for example, adult, spoof, medical, violence).

### "Class ProductSearchAsyncClient (3.13.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/vision/latest/google.cloud.vision_v1.services.product_search.ProductSearchAsyncClient](https://docs.cloud.google.com/python/docs/reference/vision/latest/google.cloud.vision_v1.services.product_search.ProductSearchAsyncClient)
- Source ID: `site-python-reference`
- Final score: 98
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Returns Type Description google.cloud.vision v1.services.product search.pagers.ListProductsInProductSetAsyncPager Response message for the ListProductsInProductSet method.
- Returns Type Description google.cloud.vision v1.services.product search.pagers.ListReferenceImagesAsyncPager Response message for the ListReferenceImages method.
- Returns Type Description google.cloud.vision v1.services.product search.pagers.ListProductSetsAsyncPager Response message for the ListProductSets method.
- Returns Type Description google.cloud.vision v1.services.product search.pagers.ListProductsAsyncPager Response message for the ListProducts method.

