---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:50.278Z"
product_name: "Cloud Vision"
product_slug: "cloud-vision"
feature_name: "Safe Search racy category"
feature_slug: "safe-search-racy-category"
latest_feature_date: "2018-04-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vision/docs/reference/rest/v1/AnnotateImageResponse"
  - "https://docs.cloud.google.com/python/docs/reference/vision/latest/google.cloud.vision_v1.services.product_search.ProductSearchAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/vision/latest/google.cloud.vision_v1.services.product_search.ProductSearchClient"
  - "https://docs.cloud.google.com/vision/docs/python-client-migration"
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
Coverage: MEDIUM

## Step 02 Summary

Safe Search detection includes a racy category for improved adult content moderation; Safe Search detection includes a racy category for improved adult content moderation.

## Extended Definition

Safe Search detection includes a racy category for improved adult content moderation; Safe Search detection includes a racy category for improved adult content moderation.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vision/docs/reference/rest/v1/AnnotateImageResponse](https://docs.cloud.google.com/vision/docs/reference/rest/v1/AnnotateImageResponse)
- [https://docs.cloud.google.com/python/docs/reference/vision/latest/google.cloud.vision_v1.services.product_search.ProductSearchAsyncClient](https://docs.cloud.google.com/python/docs/reference/vision/latest/google.cloud.vision_v1.services.product_search.ProductSearchAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/vision/latest/google.cloud.vision_v1.services.product_search.ProductSearchClient](https://docs.cloud.google.com/python/docs/reference/vision/latest/google.cloud.vision_v1.services.product_search.ProductSearchClient)
- [https://docs.cloud.google.com/vision/docs/python-client-migration](https://docs.cloud.google.com/vision/docs/python-client-migration)

## Supporting Pages

### AnnotateImageResponse \_|\_ Cloud Vision API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vision/docs/reference/rest/v1/AnnotateImageResponse](https://docs.cloud.google.com/vision/docs/reference/rest/v1/AnnotateImageResponse)
- Source ID: `site-api-reference`
- Final score: 141
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This annotation provides the structural hierarchy for the OCR detected text. safeSearchAnnotation object ( SafeSearchAnnotation ) If present, safe-search annotation has completed successfully. imagePropertiesAnnotation object ( ImageProperties ) If present, image properties were extracted successfully. cropHintsAnnotation object ( CropHintsAnnotation ) If present, crop hints have completed successfully. webDetection object ( WebDetection ) If present, web detection has completed successfully. productSearchResults object ( ProductSearchResults ) If present, product search has completed successfully. error object ( Status ) If set, represents the error message for the operation.
- JSON representation { "faceAnnotations" : [ { object ( FaceAnnotation ) } ] , "landmarkAnnotations" : [ { object ( EntityAnnotation ) } ] , "logoAnnotations" : [ { object ( EntityAnnotation ) } ] , "labelAnnotations" : [ { object ( EntityAnnotation ) } ] , "localizedObjectAnnotations" : [ { object ( LocalizedObjectAnnotation ) } ] , "textAnnotations" : [ { object ( EntityAnnotation ) } ] , "fullTextAnnotation" : { object ( TextAnnotation ) } , "safeSearchAnnotation" : { object ( SafeSearchAnnotation ) } , "imagePropertiesAnnotation" : { object ( ImageProperties ) } , "cropHintsAnnotation" : { object ( CropHintsAnnotation ) } , "webDetection" : { object ( WebDetection ) } , "productSearchResults" : { object ( ProductSearchResults ) } , "error" : { object ( Status ) } , "context" : { object ( ImageAnnotationContext ) } } Fields faceAnnotations[] object ( FaceAnnotation ) If present, face detection has completed successfully. landmarkAnnotations[] object ( EntityAnnotation ) If present, landmark detection has completed successfully. logoAnnotations[] object ( EntityAnnotation ) If present, logo detection has completed successfully. labelAnnotations[] object ( EntityAnnotation ) If present, label detection has completed successfully. localizedObjectAnnotations[] object ( LocalizedObjectAnnotation ) If present, localized object detection has completed successfully.
- JSON representation FaceAnnotation JSON representation Landmark JSON representation Type Position JSON representation Likelihood EntityAnnotation JSON representation LocationInfo JSON representation Property JSON representation LocalizedObjectAnnotation JSON representation TextAnnotation JSON representation Page JSON representation TextProperty JSON representation DetectedLanguage JSON representation DetectedBreak JSON representation BreakType Block JSON representation Paragraph JSON representation Word JSON representation Symbol JSON representation BlockType SafeSearchAnnotation JSON representation ImageProperties JSON representation DominantColorsAnnotation JSON representation ColorInfo JSON representation Color JSON representation CropHintsAnnotation JSON representation CropHint JSON representation WebDetection JSON representation WebEntity JSON representation WebImage JSON representation WebPage JSON representation WebLabel JSON representation ProductSearchResults JSON representation Result JSON representation GroupedResult JSON representation ObjectAnnotation JSON representation ImageAnnotationContext JSON representation Response to an image annotation request.
- SafeSearchAnnotation Set of features pertaining to the image, computed by computer vision methods over safe-search verticals (for example, adult, spoof, medical, violence).

### "Class ProductSearchAsyncClient (3.13.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/vision/latest/google.cloud.vision_v1.services.product_search.ProductSearchAsyncClient](https://docs.cloud.google.com/python/docs/reference/vision/latest/google.cloud.vision_v1.services.product_search.ProductSearchAsyncClient)
- Source ID: `site-python-reference`
- Final score: 130
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Returns Type Description google.cloud.vision v1.services.product search.pagers.ListProductsInProductSetAsyncPager Response message for the ListProductsInProductSet method.
- Returns Type Description google.cloud.vision v1.services.product search.pagers.ListReferenceImagesAsyncPager Response message for the ListReferenceImages method.
- Returns Type Description google.cloud.vision v1.services.product search.pagers.ListProductSetsAsyncPager Response message for the ListProductSets method.
- Returns Type Description google.cloud.vision v1.services.product search.pagers.ListProductsAsyncPager Response message for the ListProducts method.

### "Class ProductSearchClient (3.13.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/vision/latest/google.cloud.vision_v1.services.product_search.ProductSearchClient](https://docs.cloud.google.com/python/docs/reference/vision/latest/google.cloud.vision_v1.services.product_search.ProductSearchClient)
- Source ID: `site-python-reference`
- Final score: 130
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Returns Type Description google.cloud.vision v1.services.product search.pagers.ListProductsInProductSetPager Response message for the ListProductsInProductSet method.
- Returns Type Description google.cloud.vision v1.services.product search.pagers.ListReferenceImagesPager Response message for the ListReferenceImages method.
- Returns Type Description google.cloud.vision v1.services.product search.pagers.ListProductSetsPager Response message for the ListProductSets method.
- Returns Type Description google.cloud.vision v1.services.product search.pagers.ListProductsPager Response message for the ListProducts method.

### "Migrating to Python Client Library v0.25.1 \_|\_ Cloud Vision API \_|\_\

- URL: [https://docs.cloud.google.com/vision/docs/python-client-migration](https://docs.cloud.google.com/vision/docs/python-client-migration)
- Source ID: `site-api-reference`
- Final score: 129
- Re-rank relevance: N/A

Evidence snippets:
- Image ( content = content ) response = client . safe search detection ( image = image ) safe = response . safe search annotation Names of likelihood from google.cloud.vision.enums likelihood name = ( "UNKNOWN" , "VERY UNLIKELY" , "UNLIKELY" , "POSSIBLE" , "LIKELY" , "VERY LIKELY" , ) print ( "Safe search:" ) print ( f "adult: { likelihood name [ safe . adult ] } " ) print ( f "medical: { likelihood name [ safe . medical ] } " ) print ( f "spoofed: { likelihood name [ safe . spoof ] } " ) print ( f "violence: { likelihood name [ safe . violence ] } " ) print ( f "racy: { likelihood name [ safe . racy ] } " ) if response . error . message : raise Exception ( " {} \n For more info on error messages, check: " "https://cloud.google.com/apis/design/errors" . format ( response . error . message ) ) Making a text detection request and processing the response Previous versions of the client libraries: : with io . open ( file name , 'rb' ) as image file : content = image file . read () image = old client . image ( content = content ) texts = image . detect text () for text in texts : print ( ' \n " {} "' . format ( text . description )) vertices = ([ '( {} , {} )' . format ( bound . x coordinate , bound . y coordinate ) for bound in text . bounds . vertices ]) print ( 'bounds: {} ' . format ( ',' . join ( vertices ))) Python Client Library v0.25.1: with open ( path , "rb" ) as image file : content = image file . read () image = vision .
- LOGO DETECTION }], } response = client . annotate image ( request = request ) logos = response . logo annotations print ( "Logos:" ) for logo in logos : print ( logo . description ) if response . error . message : raise Exception ( " {} \n For more info on error messages, check: " "https://cloud.google.com/apis/design/errors" . format ( response . error . message ) ) Making a SafeSearch detection request and processing the response SafeSearch likelihoods are now returned as enumerations.
- Previous versions of the client libraries: : with io . open ( file name , 'rb' ) as image file : content = image file . read () image = old client . image ( content = content ) safe = image . detect safe search () print ( 'Safe search:' ) print ( 'adult: {} ' . format ( safe . adult )) print ( 'medical: {} ' . format ( safe . medical )) print ( 'spoofed: {} ' . format ( safe . spoof )) print ( 'violence: {} ' . format ( safe . violence )) Python Client Library v0.25.1: with open ( path , "rb" ) as image file : content = image file . read () image = vision .
- Image ( content = content ) response = client . web detection ( image = image ) annotations = response . web detection if annotations . best guess labels : for label in annotations . best guess labels : print ( f " \n Best guess label: { label . label } " ) if annotations . pages with matching images : print ( " \n {} Pages with matching images found:" . format ( len ( annotations . pages with matching images ) ) ) for page in annotations . pages with matching images : print ( f " \n\t Page url : { page . url } " ) if page . full matching images : print ( " \t {} Full Matches found: " . format ( len ( page . full matching images )) ) for image in page . full matching images : print ( f " \t\t Image url : { image . url } " ) if page . partial matching images : print ( " \t {} Partial Matches found: " . format ( len ( page . partial matching images ) ) ) for image in page . partial matching images : print ( f " \t\t Image url : { image . url } " ) if annotations . web entities : print ( " \n {} Web entities found: " . format ( len ( annotations . web entities ))) for entity in annotations . web entities : print ( f " \n\t Score : { entity . score } " ) print ( f " \t Description: { entity . description } " ) if annotations . visually similar images : print ( " \n {} visually similar images found: \n " . format ( len ( annotations . visually similar images ) ) ) for image in annotations . visually similar images : print ( f " \t Image url : { image . url } " ) if response . error . message : raise Exception ( " {} \n For more info on error messages, check: " "https://cloud.google.com/apis/design/errors" . format ( response . error . message ) ) Making a crop hints request and processing the response Previous versions of the client libraries: : with io . open ( file name , 'rb' ) as image file : content = image file . read () image = old client . image ( content = content ) hints = image . detect crop hints ( aspect ratios = [ 1.77 ]) for n , hint in enumerate ( hints ): print ( ' \n Crop Hint: {} ' . format ( n )) vertices = ([ '( {} , {} )' . format ( bound . x coordinate , bound . y coordinate ) for bound in hint . bounds . vertices ]) print ( 'bounds: {} ' . format ( ',' . join ( vertices ))) Python Client Library v0.25.1: with open ( path , "rb" ) as image file : content = image file . read () image = vision .

