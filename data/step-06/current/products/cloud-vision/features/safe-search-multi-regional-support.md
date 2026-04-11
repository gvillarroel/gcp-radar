---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:26:36.714Z"
product_name: "Cloud Vision"
product_slug: "cloud-vision"
feature_name: "Safe Search multi-regional support"
feature_slug: "safe-search-multi-regional-support"
latest_feature_date: "2021-10-01"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/vision/docs/handwriting"
  - "https://docs.cloud.google.com/vision/docs/release-notes"
  - "https://docs.cloud.google.com/python/docs/reference/vision/latest/google.cloud.vision_v1.services.product_search.ProductSearchAsyncClient"
keywords:
  - "safe"
  - "search"
  - "multi"
  - "regional"
  - "supports"
  - "processing"
  - "in"
  - "the"
---

# Safe Search multi-regional support

Product: Cloud Vision
Coverage: LOW

## Step 02 Summary

Safe Search supports multi-regional processing in the US and EU.

## Extended Definition

Safe Search supports multi-regional processing in the US and EU.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/vision/docs/handwriting](https://docs.cloud.google.com/vision/docs/handwriting)
- [https://docs.cloud.google.com/vision/docs/release-notes](https://docs.cloud.google.com/vision/docs/release-notes)
- [https://docs.cloud.google.com/python/docs/reference/vision/latest/google.cloud.vision_v1.services.product_search.ProductSearchAsyncClient](https://docs.cloud.google.com/python/docs/reference/vision/latest/google.cloud.vision_v1.services.product_search.ProductSearchAsyncClient)

## Supporting Pages

### Detect handwriting in images \_|\_ Cloud Vision API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vision/docs/handwriting](https://docs.cloud.google.com/vision/docs/handwriting)
- Source ID: `site-docs-root`
- Final score: 142
- Re-rank relevance: N/A

Evidence snippets:
- After completing all of your requests, call // the "close" method on the client to safely clean up any remaining background resources. try ( ImageAnnotatorClient client = ImageAnnotatorClient . create ()) { BatchAnnotateImagesResponse response = client . batchAnnotateImages ( requests ); List<AnnotateImageResponse> responses = response . getResponsesList (); client . close (); for ( AnnotateImageResponse res : responses ) { if ( res . hasError ()) { System . out . format ( "Error: %s%n" , res . getError (). getMessage ()); return ; } // For full list of available annotations, see http://g.co/cloud/vision/docs TextAnnotation annotation = res . getFullTextAnnotation (); for ( Page page : annotation . getPagesList ()) { String pageText = "" ; for ( Block block : page . getBlocksList ()) { String blockText = "" ; for ( Paragraph para : block . getParagraphsList ()) { String paraText = "" ; for ( Word word : para . getWordsList ()) { String wordText = "" ; for ( Symbol symbol : word . getSymbolsList ()) { wordText = wordText + symbol . getText (); System . out . format ( "Symbol text: %s (confidence: %f)%n" , symbol . getText (), symbol . getConfidence ()); } System . out . format ( "Word text: %s (confidence: %f)%n%n" , wordText , word . getConfidence ()); paraText = String . format ( "%s %s" , paraText , wordText ); } // Output Example using Paragraph: System . out . println ( "%nParagraph: %n" + paraText ); System . out . format ( "Paragraph Confidence: %f%n" , para . getConfidence ()); blockText = blockText + paraText ; } pageText = pageText + blockText ; } } System . out . println ( "%nComplete annotation:" ); System . out . println ( annotation . getText ()); } } } Node.js Before trying this sample, follow the Node.js setup instructions in the Vision quickstart using client libraries .
- After completing all of your requests, call // the "close" method on the client to safely clean up any remaining background resources. try ( ImageAnnotatorClient client = ImageAnnotatorClient . create ()) { BatchAnnotateImagesResponse response = client . batchAnnotateImages ( requests ); List<AnnotateImageResponse> responses = response . getResponsesList (); client . close (); for ( AnnotateImageResponse res : responses ) { if ( res . hasError ()) { System . out . format ( "Error: %s%n" , res . getError (). getMessage ()); return ; } // For full list of available annotations, see http://g.co/cloud/vision/docs TextAnnotation annotation = res . getFullTextAnnotation (); for ( Page page : annotation . getPagesList ()) { String pageText = "" ; for ( Block block : page . getBlocksList ()) { String blockText = "" ; for ( Paragraph para : block . getParagraphsList ()) { String paraText = "" ; for ( Word word : para . getWordsList ()) { String wordText = "" ; for ( Symbol symbol : word . getSymbolsList ()) { wordText = wordText + symbol . getText (); System . out . format ( "Symbol text: %s (confidence: %f)%n" , symbol . getText (), symbol . getConfidence ()); } System . out . format ( "Word text: %s (confidence: %f)%n%n" , wordText , word . getConfidence ()); paraText = String . format ( "%s %s" , paraText , wordText ); } // Output Example using Paragraph: System . out . println ( "%nParagraph: %n" + paraText ); System . out . format ( "Paragraph Confidence: %f%n" , para . getConfidence ()); blockText = blockText + paraText ; } pageText = pageText + blockText ; } } System . out . println ( "%nComplete annotation:" ); System . out . println ( annotation . getText ()); } } } Node.js Before trying this sample, follow the Node.js setup instructions in the Vision quickstart using client libraries .
- REST Before using any of the request data, make the following replacements: REGION ID : One of the valid regional location identifiers: us : USA country only eu : The European Union CLOUD STORAGE IMAGE URI : the path to a valid image file in a Cloud Storage bucket.
- Setting the location using the API The Vision API supports a global API endpoint ( vision.googleapis.com ) and also two region-based endpoints: a European Union endpoint ( eu-vision.googleapis.com ) and United States endpoint ( us-vision.googleapis.com ).

### Vision release notes \_|\_ Cloud Vision API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vision/docs/release-notes](https://docs.cloud.google.com/vision/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 128
- Re-rank relevance: N/A

Evidence snippets:
- Feature New multi-regional support for features The Vision API now offers multi-regional support ( us and eu ) for the LABEL DETECTION and SAFE SEARCH features.
- December 13, 2019 Feature Regional endpoints available for OCR The Vision API now offers multi-regional support ( us and eu ) for the OCR feature.
- December 19, 2024 Change Safe Search model update We will be updating the SAFE SEARCH DETECTION feature model to improve quality.
- You can find more information in the Multi-regional support section of the feature pages.

### "Class ProductSearchAsyncClient (3.13.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/vision/latest/google.cloud.vision_v1.services.product_search.ProductSearchAsyncClient](https://docs.cloud.google.com/python/docs/reference/vision/latest/google.cloud.vision_v1.services.product_search.ProductSearchAsyncClient)
- Source ID: `site-python-reference`
- Final score: 116
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import vision v1 async def sample remove product from product set(): Create a client client = vision v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import vision v1 async def sample list products in product set(): Create a client client = vision v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import vision v1 async def sample add product to product set(): Create a client client = vision v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import vision v1 async def sample create reference image(): Create a client client = vision v1 .

