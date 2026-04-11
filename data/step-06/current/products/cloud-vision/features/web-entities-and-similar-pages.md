---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:26:36.722Z"
product_name: "Cloud Vision"
product_slug: "cloud-vision"
feature_name: "Web entities and similar pages"
feature_slug: "web-entities-and-similar-pages"
latest_feature_date: "2017-05-18"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/vision/docs/reference/rest/v1/AnnotateImageResponse"
  - "https://docs.cloud.google.com/vision/docs/handwriting"
  - "https://docs.cloud.google.com/vision/docs/python-client-migration"
keywords:
  - "web"
  - "entities"
  - "and"
  - "similar"
  - "pages"
  - "returns"
  - "matching"
  - "image"
---

# Web entities and similar pages

Product: Cloud Vision
Coverage: LOW

## Step 02 Summary

Web entities and similar pages returns web entities, matching pages, and matching image URLs related to an image.

## Extended Definition

Web entities and similar pages returns web entities, matching pages, and matching image URLs related to an image.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/vision/docs/reference/rest/v1/AnnotateImageResponse](https://docs.cloud.google.com/vision/docs/reference/rest/v1/AnnotateImageResponse)
- [https://docs.cloud.google.com/vision/docs/handwriting](https://docs.cloud.google.com/vision/docs/handwriting)
- [https://docs.cloud.google.com/vision/docs/python-client-migration](https://docs.cloud.google.com/vision/docs/python-client-migration)

## Supporting Pages

### AnnotateImageResponse \_|\_ Cloud Vision API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vision/docs/reference/rest/v1/AnnotateImageResponse](https://docs.cloud.google.com/vision/docs/reference/rest/v1/AnnotateImageResponse)
- Source ID: `site-api-reference`
- Final score: 166
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- JSON representation { "webEntities" : [ { object ( WebEntity ) } ] , "fullMatchingImages" : [ { object ( WebImage ) } ] , "partialMatchingImages" : [ { object ( WebImage ) } ] , "pagesWithMatchingImages" : [ { object ( WebPage ) } ] , "visuallySimilarImages" : [ { object ( WebImage ) } ] , "bestGuessLabels" : [ { object ( WebLabel ) } ] } Fields webEntities[] object ( WebEntity ) Deduced entities from similar images on the Internet. fullMatchingImages[] object ( WebImage ) Fully matching images from the Internet.
- For example an original image will likely have partial matching for its crops. pagesWithMatchingImages[] object ( WebPage ) Web pages containing the matching images from the Internet. visuallySimilarImages[] object ( WebImage ) The visually similar image results. bestGuessLabels[] object ( WebLabel ) The service's best guess as to the topic of the request image.
- JSON representation { "faceAnnotations" : [ { object ( FaceAnnotation ) } ] , "landmarkAnnotations" : [ { object ( EntityAnnotation ) } ] , "logoAnnotations" : [ { object ( EntityAnnotation ) } ] , "labelAnnotations" : [ { object ( EntityAnnotation ) } ] , "localizedObjectAnnotations" : [ { object ( LocalizedObjectAnnotation ) } ] , "textAnnotations" : [ { object ( EntityAnnotation ) } ] , "fullTextAnnotation" : { object ( TextAnnotation ) } , "safeSearchAnnotation" : { object ( SafeSearchAnnotation ) } , "imagePropertiesAnnotation" : { object ( ImageProperties ) } , "cropHintsAnnotation" : { object ( CropHintsAnnotation ) } , "webDetection" : { object ( WebDetection ) } , "productSearchResults" : { object ( ProductSearchResults ) } , "error" : { object ( Status ) } , "context" : { object ( ImageAnnotationContext ) } } Fields faceAnnotations[] object ( FaceAnnotation ) If present, face detection has completed successfully. landmarkAnnotations[] object ( EntityAnnotation ) If present, landmark detection has completed successfully. logoAnnotations[] object ( EntityAnnotation ) If present, logo detection has completed successfully. labelAnnotations[] object ( EntityAnnotation ) If present, label detection has completed successfully. localizedObjectAnnotations[] object ( LocalizedObjectAnnotation ) If present, localized object detection has completed successfully.
- JSON representation FaceAnnotation JSON representation Landmark JSON representation Type Position JSON representation Likelihood EntityAnnotation JSON representation LocationInfo JSON representation Property JSON representation LocalizedObjectAnnotation JSON representation TextAnnotation JSON representation Page JSON representation TextProperty JSON representation DetectedLanguage JSON representation DetectedBreak JSON representation BreakType Block JSON representation Paragraph JSON representation Word JSON representation Symbol JSON representation BlockType SafeSearchAnnotation JSON representation ImageProperties JSON representation DominantColorsAnnotation JSON representation ColorInfo JSON representation Color JSON representation CropHintsAnnotation JSON representation CropHint JSON representation WebDetection JSON representation WebEntity JSON representation WebImage JSON representation WebPage JSON representation WebLabel JSON representation ProductSearchResults JSON representation Result JSON representation GroupedResult JSON representation ObjectAnnotation JSON representation ImageAnnotationContext JSON representation Response to an image annotation request.

### Detect handwriting in images \_|\_ Cloud Vision API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vision/docs/handwriting](https://docs.cloud.google.com/vision/docs/handwriting)
- Source ID: `site-docs-root`
- Final score: 152
- Re-rank relevance: N/A

Evidence snippets:
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred"; "x-goog-user-project" = " PROJECT ID " } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json ` -Uri "https:// REGION ID -vision.googleapis.com/v1/projects/ PROJECT ID /locations/ REGION ID /images:annotate" Select-Object -Expand Content If the request is successful, the server returns a 200 OK HTTP status code and the response in JSON format.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred"; "x-goog-user-project" = " PROJECT ID " } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://vision.googleapis.com/v1/images:annotate" Select-Object -Expand Content If the request is successful, the server returns a 200 OK HTTP status code and the response in JSON format.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred"; "x-goog-user-project" = " PROJECT ID " } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://vision.googleapis.com/v1/images:annotate" Select-Object -Expand Content If the request is successful, the server returns a 200 OK HTTP status code and the response in JSON format.
- Image () image . source . image uri = uri response = client . document text detection ( image = image ) for page in response . full text annotation . pages : for block in page . blocks : print ( f " \n Block confidence: { block . confidence } \n " ) for paragraph in block . paragraphs : print ( "Paragraph confidence: {} " . format ( paragraph . confidence )) for word in paragraph . words : word text = "" . join ([ symbol . text for symbol in word . symbols ]) print ( "Word text: {} (confidence: {} )" . format ( word text , word . confidence ) ) for symbol in word . symbols : print ( " \t Symbol: {} (confidence: {} )" . format ( symbol . text , symbol . confidence ) ) if response . error . message : raise Exception ( " {} \n For more info on error messages, check: " "https://cloud.google.com/apis/design/errors" . format ( response . error . message ) ) gcloud To perform handwriting detection, use the gcloud ml vision detect-document command as shown in the following example: gcloud ml vision detect-document gs://cloud-samples-data/vision/handwriting image.png Additional languages C# : Please follow the C# setup instructions on the client libraries page and then visit the Vision reference documentation for .NET.

### "Migrating to Python Client Library v0.25.1 \_|\_ Cloud Vision API \_|\_\

- URL: [https://docs.cloud.google.com/vision/docs/python-client-migration](https://docs.cloud.google.com/vision/docs/python-client-migration)
- Source ID: `site-api-reference`
- Final score: 138
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Image ( content = content ) response = client . web detection ( image = image ) annotations = response . web detection if annotations . best guess labels : for label in annotations . best guess labels : print ( f " \n Best guess label: { label . label } " ) if annotations . pages with matching images : print ( " \n {} Pages with matching images found:" . format ( len ( annotations . pages with matching images ) ) ) for page in annotations . pages with matching images : print ( f " \n\t Page url : { page . url } " ) if page . full matching images : print ( " \t {} Full Matches found: " . format ( len ( page . full matching images )) ) for image in page . full matching images : print ( f " \t\t Image url : { image . url } " ) if page . partial matching images : print ( " \t {} Partial Matches found: " . format ( len ( page . partial matching images ) ) ) for image in page . partial matching images : print ( f " \t\t Image url : { image . url } " ) if annotations . web entities : print ( " \n {} Web entities found: " . format ( len ( annotations . web entities ))) for entity in annotations . web entities : print ( f " \n\t Score : { entity . score } " ) print ( f " \t Description: { entity . description } " ) if annotations . visually similar images : print ( " \n {} visually similar images found: \n " . format ( len ( annotations . visually similar images ) ) ) for image in annotations . visually similar images : print ( f " \t Image url : { image . url } " ) if response . error . message : raise Exception ( " {} \n For more info on error messages, check: " "https://cloud.google.com/apis/design/errors" . format ( response . error . message ) ) Making a crop hints request and processing the response Previous versions of the client libraries: : with io . open ( file name , 'rb' ) as image file : content = image file . read () image = old client . image ( content = content ) hints = image . detect crop hints ( aspect ratios = [ 1.77 ]) for n , hint in enumerate ( hints ): print ( ' \n Crop Hint: {} ' . format ( n )) vertices = ([ '( {} , {} )' . format ( bound . x coordinate , bound . y coordinate ) for bound in hint . bounds . vertices ]) print ( 'bounds: {} ' . format ( ',' . join ( vertices ))) Python Client Library v0.25.1: with open ( path , "rb" ) as image file : content = image file . read () image = vision .
- Image ( content = content ) response = client . image properties ( image = image ) props = response . image properties annotation print ( "Properties:" ) for color in props . dominant colors . colors : print ( f "fraction: { color . pixel fraction } " ) print ( f " \t r: { color . color . red } " ) print ( f " \t g: { color . color . green } " ) print ( f " \t b: { color . color . blue } " ) print ( f " \t a: { color . color . alpha } " ) if response . error . message : raise Exception ( " {} \n For more info on error messages, check: " "https://cloud.google.com/apis/design/errors" . format ( response . error . message ) ) Making a web detection request and processing the response Previous versions of the client libraries: : with io . open ( file name , 'rb' ) as image file : content = image file . read () image = old client . image ( content = content ) notes = image . detect web () if notes . pages with matching images : print ( ' \n {} Pages with matching images retrieved' ) for page in notes . pages with matching images : print ( 'Score : {} ' . format ( page . score )) print ( 'Url : {} ' . format ( page . url )) if notes . full matching images : print ( ' \n {} Full Matches found: ' . format ( len ( notes . full matching images ))) for image in notes . full matching images : print ( 'Score: {} ' . format ( image . score )) print ( 'Url : {} ' . format ( image . url )) if notes . partial matching images : print ( ' \n {} Partial Matches found: ' . format ( len ( notes . partial matching images ))) for image in notes . partial matching images : print ( 'Score: {} ' . format ( image . score )) print ( 'Url : {} ' . format ( image . url )) if notes . web entities : print ( ' \n {} Web entities found: ' . format ( len ( notes . web entities ))) for entity in notes . web entities : print ( 'Score : {} ' . format ( entity . score )) print ( 'Description: {} ' . format ( entity . description )) Python Client Library v0.25.1: with open ( path , "rb" ) as image file : content = image file . read () image = vision .
- Image ( content = content ) response = client . text detection ( image = image ) texts = response . text annotations print ( "Texts:" ) for text in texts : print ( f ' \n " { text . description } "' ) vertices = [ f "( { vertex . x } , { vertex . y } )" for vertex in text . bounding poly . vertices ] print ( "bounds: {} " . format ( "," . join ( vertices ))) if response . error . message : raise Exception ( " {} \n For more info on error messages, check: " "https://cloud.google.com/apis/design/errors" . format ( response . error . message ) ) Making a document text detection request and processing the response Previous versions of the client libraries: : with io . open ( file name , 'rb' ) as image file : content = image file . read () image = old client . image ( content = content ) document = image . detect full text () for page in document . pages : for block in page . blocks : block words = [] for paragraph in block . paragraphs : block words . extend ( paragraph . words ) block symbols = [] for word in block words : block symbols . extend ( word . symbols ) block text = '' for symbol in block symbols : block text = block text + symbol . text print ( 'Block Content: {} ' . format ( block text )) print ( 'Block Bounds: \n {} ' . format ( block . bounding box )) Python Client Library v0.25.1: with open ( path , "rb" ) as image file : content = image file . read () image = vision .
- Image ( content = content ) response = client . document text detection ( image = image ) for page in response . full text annotation . pages : for block in page . blocks : print ( f " \n Block confidence: { block . confidence } \n " ) for paragraph in block . paragraphs : print ( "Paragraph confidence: {} " . format ( paragraph . confidence )) for word in paragraph . words : word text = "" . join ([ symbol . text for symbol in word . symbols ]) print ( "Word text: {} (confidence: {} )" . format ( word text , word . confidence ) ) for symbol in word . symbols : print ( " \t Symbol: {} (confidence: {} )" . format ( symbol . text , symbol . confidence ) ) if response . error . message : raise Exception ( " {} \n For more info on error messages, check: " "https://cloud.google.com/apis/design/errors" . format ( response . error . message ) ) Making an image properties request and processing the response Dominant color information is now stored in props.dominant colors.colors as opposed to props.colors .

