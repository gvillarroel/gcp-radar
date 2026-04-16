---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:50.279Z"
product_name: "Cloud Vision"
product_slug: "cloud-vision"
feature_name: "Crop hints"
feature_slug: "crop-hints"
latest_feature_date: "2017-05-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vision/docs/detecting-crop-hints"
  - "https://docs.cloud.google.com/vision/docs/crop-hints"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-vision/latest/com.google.cloud.vision.v1"
  - "https://docs.cloud.google.com/vision/docs/reference/rest/v1/AnnotateImageResponse"
keywords:
  - "crop"
  - "hints"
  - "suggest"
  - "optimal"
  - "crops"
  - "for"
  - "images"
---

# Crop hints

Product: Cloud Vision
Coverage: MEDIUM

## Step 02 Summary

Crop hints suggest optimal crops for images.

## Extended Definition

Crop hints suggest optimal crops for images.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vision/docs/detecting-crop-hints](https://docs.cloud.google.com/vision/docs/detecting-crop-hints)
- [https://docs.cloud.google.com/vision/docs/crop-hints](https://docs.cloud.google.com/vision/docs/crop-hints)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-vision/latest/com.google.cloud.vision.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-vision/latest/com.google.cloud.vision.v1)
- [https://docs.cloud.google.com/vision/docs/reference/rest/v1/AnnotateImageResponse](https://docs.cloud.google.com/vision/docs/reference/rest/v1/AnnotateImageResponse)

## Supporting Pages

### Detect crop hints \_|\_ Cloud Vision API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vision/docs/detecting-crop-hints](https://docs.cloud.google.com/vision/docs/detecting-crop-hints)
- Source ID: `site-iam-reference`
- Final score: 244
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- String filePath = "gs://your-gcs-bucket/path/to/image/file.jpg" ; detectCropHintsGcs ( filePath ); } // Suggests a region to crop to for a remote file on Google Cloud Storage. public static void detectCropHintsGcs ( String gcsPath ) throws IOException { List<AnnotateImageRequest> requests = new ArrayList <> (); ImageSource imgSource = ImageSource . newBuilder (). setGcsImageUri ( gcsPath ). build (); Image img = Image . newBuilder (). setSource ( imgSource ). build (); Feature feat = Feature . newBuilder (). setType ( Feature .
- ImageContext ( crop hints params = crop hints params ) response = client . crop hints ( image = image , image context = image context ) hints = response . crop hints annotation . crop hints for n , hint in enumerate ( hints ): print ( f " \n Crop Hint: { n } " ) vertices = [ f "( { vertex . x } , { vertex . y } )" for vertex in hint . bounding poly . vertices ] print ( "bounds: {} " . format ( "," . join ( vertices ))) if response . error . message : raise Exception ( " {} \n For more info on error messages, check: " "https://cloud.google.com/apis/design/errors" . format ( response . error . message ) ) gcloud To perform text detection, use the gcloud ml vision suggest-crop command as shown in the following example: gcloud ml vision suggest-crop gs://cloud-samples-data/vision/crop hints/bubble.jpeg Additional languages C# : Please follow the C# setup instructions on the client libraries page and then visit the Vision reference documentation for .NET.
- After completing all of your requests, call // the "close" method on the client to safely clean up any remaining background resources. try ( ImageAnnotatorClient client = ImageAnnotatorClient . create ()) { BatchAnnotateImagesResponse response = client . batchAnnotateImages ( requests ); List<AnnotateImageResponse> responses = response . getResponsesList (); for ( AnnotateImageResponse res : responses ) { if ( res . hasError ()) { System . out . format ( "Error: %s%n" , res . getError (). getMessage ()); return ; } // For full list of available annotations, see http://g.co/cloud/vision/docs CropHintsAnnotation annotation = res . getCropHintsAnnotation (); for ( CropHint hint : annotation . getCropHintsList ()) { System . out . println ( hint . getBoundingPoly ()); } } } } } Node.js Before trying this sample, follow the Node.js setup instructions in the Vision quickstart using client libraries .
- After completing all of your requests, call // the "close" method on the client to safely clean up any remaining background resources. try ( ImageAnnotatorClient client = ImageAnnotatorClient . create ()) { BatchAnnotateImagesResponse response = client . batchAnnotateImages ( requests ); List<AnnotateImageResponse> responses = response . getResponsesList (); for ( AnnotateImageResponse res : responses ) { if ( res . hasError ()) { System . out . format ( "Error: %s%n" , res . getError (). getMessage ()); return ; } // For full list of available annotations, see http://g.co/cloud/vision/docs CropHintsAnnotation annotation = res . getCropHintsAnnotation (); for ( CropHint hint : annotation . getCropHintsList ()) { System . out . println ( hint . getBoundingPoly ()); } } } } } Go Before trying this sample, follow the Go setup instructions in the Vision quickstart using client libraries .

### Crop hints tutorial \_|\_ Cloud Vision API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vision/docs/crop-hints](https://docs.cloud.google.com/vision/docs/crop-hints)
- Source ID: `site-iam-reference`
- Final score: 204
- Re-rank relevance: N/A

Evidence snippets:
- Draw ( im ) draw . polygon ( [ vects [ 0 ] . x , vects [ 0 ] . y , vects [ 1 ] . x , vects [ 1 ] . y , vects [ 2 ] . x , vects [ 2 ] . y , vects [ 3 ] . x , vects [ 3 ] . y , ], None , "red" , ) im . save ( "output-hint.jpg" , "JPEG" ) print ( "Saved new image to output-hint.jpg" ) The crop to hint method crops the image using the suggested crop hint. vects = get crop hint ( image file ) im = Image . open ( image file ) im2 = im . crop ([ vects [ 0 ] . x , vects [ 0 ] . y , vects [ 2 ] . x - 1 , vects [ 2 ] . y - 1 ]) im2 . save ( "output-crop.jpg" , "JPEG" ) print ( "Saved new image to output-crop.jpg" ) Running the application To run the application, you can download this cat.jpg file (you may need to right-click the link), then pass the location where you downloaded the file on your local machine to the tutorial application ( crop hints.py ).
- By default, the client library will attempt to obtain credentials from the GOOGLE APPLICATION CREDENTIALS environment variable, which should be set to point to your service account's JSON key file (see Set Up a Service Account for more information.) Getting crop hint annotations for the image Now that the Vision client library is authenticated, we can access the service by calling the crop hints method of the ImageAnnotatorClient instance.
- ImageContext ( crop hints params = crop hints params ) response = client . crop hints ( image = image , image context = image context ) hints = response . crop hints annotation . crop hints Get bounds for the first crop hint using an aspect ratio of 1.77. vertices = hints [ 0 ] . bounding poly . vertices return vertices def draw hint ( image file : str ) - > None : """Draw a border around the image using the hints in the vector list.
- ImageContext ( crop hints params = crop hints params ) response = client . crop hints ( image = image , image context = image context ) hints = response . crop hints annotation . crop hints Get bounds for the first crop hint using an aspect ratio of 1.77. vertices = hints [ 0 ] . bounding poly . vertices The client library encapsulates the details for requests and responses to the API.

### "Package com.google.cloud.vision.v1 (3.86.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-vision/latest/com.google.cloud.vision.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-vision/latest/com.google.cloud.vision.v1)
- Source ID: `site-java-reference`
- Final score: 162
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Crop Hints Annotation Set of crop hints that are used to generate new crops when serving images. com. google. cloud. vision. v1.
- Builder Set of crop hints that are used to generate new crops when serving images. com. google. cloud. vision. v1.
- Crop Hints Params Parameters for crop hints annotation request. com. google. cloud. vision. v1.
- Builder Parameters for crop hints annotation request. com. google. cloud. vision. v1.

### AnnotateImageResponse \_|\_ Cloud Vision API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vision/docs/reference/rest/v1/AnnotateImageResponse](https://docs.cloud.google.com/vision/docs/reference/rest/v1/AnnotateImageResponse)
- Source ID: `site-api-reference`
- Final score: 154
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example an original image will likely have partial matching for its crops. pagesWithMatchingImages[] object ( WebPage ) Web pages containing the matching images from the Internet. visuallySimilarImages[] object ( WebImage ) The visually similar image results. bestGuessLabels[] object ( WebLabel ) The service's best guess as to the topic of the request image.
- CropHintsAnnotation Set of crop hints that are used to generate new crops when serving images.
- This annotation provides the structural hierarchy for the OCR detected text. safeSearchAnnotation object ( SafeSearchAnnotation ) If present, safe-search annotation has completed successfully. imagePropertiesAnnotation object ( ImageProperties ) If present, image properties were extracted successfully. cropHintsAnnotation object ( CropHintsAnnotation ) If present, crop hints have completed successfully. webDetection object ( WebDetection ) If present, web detection has completed successfully. productSearchResults object ( ProductSearchResults ) If present, product search has completed successfully. error object ( Status ) If set, represents the error message for the operation.
- For example an original image will likely have partial matching for its crops.

