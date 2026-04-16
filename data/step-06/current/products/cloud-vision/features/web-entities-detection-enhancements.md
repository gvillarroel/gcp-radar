---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:50.279Z"
product_name: "Cloud Vision"
product_slug: "cloud-vision"
feature_name: "Web entities detection enhancements"
feature_slug: "web-entities-detection-enhancements"
latest_feature_date: "2018-04-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vision/docs/python-client-migration"
  - "https://docs.cloud.google.com/vision/docs/reference/rest/v1/AnnotateImageResponse"
  - "https://docs.cloud.google.com/vision/docs/detecting-crop-hints"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-vision/latest/com.google.cloud.vision.v1"
keywords:
  - "web"
  - "entities"
  - "detection"
  - "enhancements"
  - "accepts"
  - "geotag"
  - "hints"
  - "and"
---

# Web entities detection enhancements

Product: Cloud Vision
Coverage: MEDIUM

## Step 02 Summary

Web entities detection accepts geotag hints and returns best-guess labels for image contents; Web entities detection accepts geotag hints and returns best-guess labels for image contents.

## Extended Definition

Web entities detection accepts geotag hints and returns best-guess labels for image contents; Web entities detection accepts geotag hints and returns best-guess labels for image contents.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vision/docs/python-client-migration](https://docs.cloud.google.com/vision/docs/python-client-migration)
- [https://docs.cloud.google.com/vision/docs/reference/rest/v1/AnnotateImageResponse](https://docs.cloud.google.com/vision/docs/reference/rest/v1/AnnotateImageResponse)
- [https://docs.cloud.google.com/vision/docs/detecting-crop-hints](https://docs.cloud.google.com/vision/docs/detecting-crop-hints)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-vision/latest/com.google.cloud.vision.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-vision/latest/com.google.cloud.vision.v1)

## Supporting Pages

### "Migrating to Python Client Library v0.25.1 \_|\_ Cloud Vision API \_|\_\

- URL: [https://docs.cloud.google.com/vision/docs/python-client-migration](https://docs.cloud.google.com/vision/docs/python-client-migration)
- Source ID: `site-api-reference`
- Final score: 141
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Image ( content = content ) response = client . web detection ( image = image ) annotations = response . web detection if annotations . best guess labels : for label in annotations . best guess labels : print ( f " \n Best guess label: { label . label } " ) if annotations . pages with matching images : print ( " \n {} Pages with matching images found:" . format ( len ( annotations . pages with matching images ) ) ) for page in annotations . pages with matching images : print ( f " \n\t Page url : { page . url } " ) if page . full matching images : print ( " \t {} Full Matches found: " . format ( len ( page . full matching images )) ) for image in page . full matching images : print ( f " \t\t Image url : { image . url } " ) if page . partial matching images : print ( " \t {} Partial Matches found: " . format ( len ( page . partial matching images ) ) ) for image in page . partial matching images : print ( f " \t\t Image url : { image . url } " ) if annotations . web entities : print ( " \n {} Web entities found: " . format ( len ( annotations . web entities ))) for entity in annotations . web entities : print ( f " \n\t Score : { entity . score } " ) print ( f " \t Description: { entity . description } " ) if annotations . visually similar images : print ( " \n {} visually similar images found: \n " . format ( len ( annotations . visually similar images ) ) ) for image in annotations . visually similar images : print ( f " \t Image url : { image . url } " ) if response . error . message : raise Exception ( " {} \n For more info on error messages, check: " "https://cloud.google.com/apis/design/errors" . format ( response . error . message ) ) Making a crop hints request and processing the response Previous versions of the client libraries: : with io . open ( file name , 'rb' ) as image file : content = image file . read () image = old client . image ( content = content ) hints = image . detect crop hints ( aspect ratios = [ 1.77 ]) for n , hint in enumerate ( hints ): print ( ' \n Crop Hint: {} ' . format ( n )) vertices = ([ '( {} , {} )' . format ( bound . x coordinate , bound . y coordinate ) for bound in hint . bounds . vertices ]) print ( 'bounds: {} ' . format ( ',' . join ( vertices ))) Python Client Library v0.25.1: with open ( path , "rb" ) as image file : content = image file . read () image = vision .
- Image ( content = content ) response = client . image properties ( image = image ) props = response . image properties annotation print ( "Properties:" ) for color in props . dominant colors . colors : print ( f "fraction: { color . pixel fraction } " ) print ( f " \t r: { color . color . red } " ) print ( f " \t g: { color . color . green } " ) print ( f " \t b: { color . color . blue } " ) print ( f " \t a: { color . color . alpha } " ) if response . error . message : raise Exception ( " {} \n For more info on error messages, check: " "https://cloud.google.com/apis/design/errors" . format ( response . error . message ) ) Making a web detection request and processing the response Previous versions of the client libraries: : with io . open ( file name , 'rb' ) as image file : content = image file . read () image = old client . image ( content = content ) notes = image . detect web () if notes . pages with matching images : print ( ' \n {} Pages with matching images retrieved' ) for page in notes . pages with matching images : print ( 'Score : {} ' . format ( page . score )) print ( 'Url : {} ' . format ( page . url )) if notes . full matching images : print ( ' \n {} Full Matches found: ' . format ( len ( notes . full matching images ))) for image in notes . full matching images : print ( 'Score: {} ' . format ( image . score )) print ( 'Url : {} ' . format ( image . url )) if notes . partial matching images : print ( ' \n {} Partial Matches found: ' . format ( len ( notes . partial matching images ))) for image in notes . partial matching images : print ( 'Score: {} ' . format ( image . score )) print ( 'Url : {} ' . format ( image . url )) if notes . web entities : print ( ' \n {} Web entities found: ' . format ( len ( notes . web entities ))) for entity in notes . web entities : print ( 'Score : {} ' . format ( entity . score )) print ( 'Description: {} ' . format ( entity . description )) Python Client Library v0.25.1: with open ( path , "rb" ) as image file : content = image file . read () image = vision .
- The bounding box change affects face detection , logo detection , text detection , document text detection , and crop hints .
- Image ( content = content ) response = client . safe search detection ( image = image ) safe = response . safe search annotation Names of likelihood from google.cloud.vision.enums likelihood name = ( "UNKNOWN" , "VERY UNLIKELY" , "UNLIKELY" , "POSSIBLE" , "LIKELY" , "VERY LIKELY" , ) print ( "Safe search:" ) print ( f "adult: { likelihood name [ safe . adult ] } " ) print ( f "medical: { likelihood name [ safe . medical ] } " ) print ( f "spoofed: { likelihood name [ safe . spoof ] } " ) print ( f "violence: { likelihood name [ safe . violence ] } " ) print ( f "racy: { likelihood name [ safe . racy ] } " ) if response . error . message : raise Exception ( " {} \n For more info on error messages, check: " "https://cloud.google.com/apis/design/errors" . format ( response . error . message ) ) Making a text detection request and processing the response Previous versions of the client libraries: : with io . open ( file name , 'rb' ) as image file : content = image file . read () image = old client . image ( content = content ) texts = image . detect text () for text in texts : print ( ' \n " {} "' . format ( text . description )) vertices = ([ '( {} , {} )' . format ( bound . x coordinate , bound . y coordinate ) for bound in text . bounds . vertices ]) print ( 'bounds: {} ' . format ( ',' . join ( vertices ))) Python Client Library v0.25.1: with open ( path , "rb" ) as image file : content = image file . read () image = vision .

### AnnotateImageResponse \_|\_ Cloud Vision API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vision/docs/reference/rest/v1/AnnotateImageResponse](https://docs.cloud.google.com/vision/docs/reference/rest/v1/AnnotateImageResponse)
- Source ID: `site-api-reference`
- Final score: 141
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- JSON representation { "faceAnnotations" : [ { object ( FaceAnnotation ) } ] , "landmarkAnnotations" : [ { object ( EntityAnnotation ) } ] , "logoAnnotations" : [ { object ( EntityAnnotation ) } ] , "labelAnnotations" : [ { object ( EntityAnnotation ) } ] , "localizedObjectAnnotations" : [ { object ( LocalizedObjectAnnotation ) } ] , "textAnnotations" : [ { object ( EntityAnnotation ) } ] , "fullTextAnnotation" : { object ( TextAnnotation ) } , "safeSearchAnnotation" : { object ( SafeSearchAnnotation ) } , "imagePropertiesAnnotation" : { object ( ImageProperties ) } , "cropHintsAnnotation" : { object ( CropHintsAnnotation ) } , "webDetection" : { object ( WebDetection ) } , "productSearchResults" : { object ( ProductSearchResults ) } , "error" : { object ( Status ) } , "context" : { object ( ImageAnnotationContext ) } } Fields faceAnnotations[] object ( FaceAnnotation ) If present, face detection has completed successfully. landmarkAnnotations[] object ( EntityAnnotation ) If present, landmark detection has completed successfully. logoAnnotations[] object ( EntityAnnotation ) If present, logo detection has completed successfully. labelAnnotations[] object ( EntityAnnotation ) If present, label detection has completed successfully. localizedObjectAnnotations[] object ( LocalizedObjectAnnotation ) If present, localized object detection has completed successfully.
- JSON representation FaceAnnotation JSON representation Landmark JSON representation Type Position JSON representation Likelihood EntityAnnotation JSON representation LocationInfo JSON representation Property JSON representation LocalizedObjectAnnotation JSON representation TextAnnotation JSON representation Page JSON representation TextProperty JSON representation DetectedLanguage JSON representation DetectedBreak JSON representation BreakType Block JSON representation Paragraph JSON representation Word JSON representation Symbol JSON representation BlockType SafeSearchAnnotation JSON representation ImageProperties JSON representation DominantColorsAnnotation JSON representation ColorInfo JSON representation Color JSON representation CropHintsAnnotation JSON representation CropHint JSON representation WebDetection JSON representation WebEntity JSON representation WebImage JSON representation WebPage JSON representation WebLabel JSON representation ProductSearchResults JSON representation Result JSON representation GroupedResult JSON representation ObjectAnnotation JSON representation ImageAnnotationContext JSON representation Response to an image annotation request.
- This annotation provides the structural hierarchy for the OCR detected text. safeSearchAnnotation object ( SafeSearchAnnotation ) If present, safe-search annotation has completed successfully. imagePropertiesAnnotation object ( ImageProperties ) If present, image properties were extracted successfully. cropHintsAnnotation object ( CropHintsAnnotation ) If present, crop hints have completed successfully. webDetection object ( WebDetection ) If present, web detection has completed successfully. productSearchResults object ( ProductSearchResults ) If present, product search has completed successfully. error object ( Status ) If set, represents the error message for the operation.
- JSON representation { "boundingPoly" : { object ( BoundingPoly ) } , "fdBoundingPoly" : { object ( BoundingPoly ) } , "landmarks" : [ { object ( Landmark ) } ] , "rollAngle" : number , "panAngle" : number , "tiltAngle" : number , "detectionConfidence" : number , "landmarkingConfidence" : number , "joyLikelihood" : enum ( Likelihood ) , "sorrowLikelihood" : enum ( Likelihood ) , "angerLikelihood" : enum ( Likelihood ) , "surpriseLikelihood" : enum ( Likelihood ) , "underExposedLikelihood" : enum ( Likelihood ) , "blurredLikelihood" : enum ( Likelihood ) , "headwearLikelihood" : enum ( Likelihood ) } Fields boundingPoly object ( BoundingPoly ) The bounding polygon around the face.

### Detect crop hints \_|\_ Cloud Vision API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vision/docs/detecting-crop-hints](https://docs.cloud.google.com/vision/docs/detecting-crop-hints)
- Source ID: `site-iam-reference`
- Final score: 134
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- ImageContext ( crop hints params = crop hints params ) response = client . crop hints ( image = image , image context = image context ) hints = response . crop hints annotation . crop hints for n , hint in enumerate ( hints ): print ( f " \n Crop Hint: { n } " ) vertices = [ f "( { vertex . x } , { vertex . y } )" for vertex in hint . bounding poly . vertices ] print ( "bounds: {} " . format ( "," . join ( vertices ))) if response . error . message : raise Exception ( " {} \n For more info on error messages, check: " "https://cloud.google.com/apis/design/errors" . format ( response . error . message ) ) gcloud To perform text detection, use the gcloud ml vision suggest-crop command as shown in the following example: gcloud ml vision suggest-crop gs://cloud-samples-data/vision/crop hints/bubble.jpeg Additional languages C# : Please follow the C# setup instructions on the client libraries page and then visit the Vision reference documentation for .NET.
- To initialize the gcloud CLI, run the following command: gcloud init Detect crop hints on a local image You can use the Vision API to perform feature detection on a local image file.
- Detect crop hints on a remote image You can use the Vision API to perform feature detection on a remote image file that is located in Cloud Storage or on the Web.
- ImageContext ( crop hints params = crop hints params ) response = client . crop hints ( image = image , image context = image context ) hints = response . crop hints annotation . crop hints for n , hint in enumerate ( hints ): print ( f " \n Crop Hint: { n } " ) vertices = [ f "( { vertex . x } , { vertex . y } )" for vertex in hint . bounding poly . vertices ] print ( "bounds: {} " . format ( "," . join ( vertices ))) if response . error . message : raise Exception ( " {} \n For more info on error messages, check: " "https://cloud.google.com/apis/design/errors" . format ( response . error . message ) ) Additional languages C# : Please follow the C# setup instructions on the client libraries page and then visit the Vision reference documentation for .NET.

### "Package com.google.cloud.vision.v1 (3.86.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-vision/latest/com.google.cloud.vision.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-vision/latest/com.google.cloud.vision.v1)
- Source ID: `site-java-reference`
- Final score: 133
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Image Annotator Client Service Description: Service that performs Google Cloud Vision API detection tasks over client images, such as face, landmark, logo, label, and text detection.
- Image Annotator Grpc Service that performs Google Cloud Vision API detection tasks over client images, such as face, landmark, logo, label, and text detection.
- Async Service Service that performs Google Cloud Vision API detection tasks over client images, such as face, landmark, logo, label, and text detection.
- Feature The type of Google Cloud Vision API detection to perform, and the maximum number of results to return for that type.

