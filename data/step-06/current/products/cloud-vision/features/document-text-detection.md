---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:50.280Z"
product_name: "Cloud Vision"
product_slug: "cloud-vision"
feature_name: "Document text detection"
feature_slug: "document-text-detection"
latest_feature_date: "2017-05-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vision/docs/fulltext-annotations"
  - "https://docs.cloud.google.com/vision/docs/ocr"
  - "https://docs.cloud.google.com/vision/docs/handwriting"
  - "https://docs.cloud.google.com/vision/docs/features-list"
keywords:
  - "document"
  - "text"
  - "detection"
  - "returns"
  - "full"
  - "annotations"
  - "for"
  - "dense"
---

# Document text detection

Product: Cloud Vision
Coverage: MEDIUM

## Step 02 Summary

Document text detection returns full text annotations for dense OCR text.

## Extended Definition

Document text detection returns full text annotations for dense OCR text.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vision/docs/fulltext-annotations](https://docs.cloud.google.com/vision/docs/fulltext-annotations)
- [https://docs.cloud.google.com/vision/docs/ocr](https://docs.cloud.google.com/vision/docs/ocr)
- [https://docs.cloud.google.com/vision/docs/handwriting](https://docs.cloud.google.com/vision/docs/handwriting)
- [https://docs.cloud.google.com/vision/docs/features-list](https://docs.cloud.google.com/vision/docs/features-list)

## Supporting Pages

### "Dense document text detection tutorial \_|\_ Cloud Vision API \_|\_ Google\

- URL: [https://docs.cloud.google.com/vision/docs/fulltext-annotations](https://docs.cloud.google.com/vision/docs/fulltext-annotations)
- Source ID: `site-docs-root`
- Final score: 343
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Image ( content = content ) response = client . document text detection ( image = image ) document = response . full text annotation Collect specified feature bounds by enumerating all document features for page in document . pages : for block in page . blocks : for paragraph in block . paragraphs : for word in paragraph . words : for symbol in word . symbols : if feature == FeatureType .
- Image ( content = content ) response = client . document text detection ( image = image ) document = response . full text annotation Collect specified feature bounds by enumerating all document features for page in document . pages : for block in page . blocks : for paragraph in block . paragraphs : for word in paragraph . words : for symbol in word . symbols : if feature == FeatureType .
- You've performed Text Detection using Google Cloud Vision Full Text Annotations!
- ArgumentParser () parser . add argument ( "detect file" , help = "The image for text detection." ) parser . add argument ( "-out file" , help = "Optional output file" , default = 0 ) args = parser . parse args () render doc text ( args . detect file , args . out file ) This simple application performs the following tasks: Imports the libraries necessary to run the application Takes three arguments passes it to the main() function: image file — the input image file to be annotated output file —the output filename into which Cloud Vision will generate an output image with polyboxes drawn Creates an ImageAnnotatorClient instance to interact with the service Sends the request and returns a response Creates an output image with boxes drawn around the text A closer look at the code Importing libraries import argparse from enum import Enum from google.cloud import vision from PIL import Image , ImageDraw We import standard libraries: argparse to allow the application to accept input file names as arguments enum for the FeatureType enumeration io for File I/O Other imports: The ImageAnnotatorClient class within the google.cloud.vision library for accessing the Vision API.

### "Detect and extract text from images \_|\_ Cloud Vision API \_|\_ Google\

- URL: [https://docs.cloud.google.com/vision/docs/ocr](https://docs.cloud.google.com/vision/docs/ocr)
- Source ID: `site-docs-root`
- Final score: 269
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Image () image . source . image uri = uri response = client . text detection ( image = image ) texts = response . text annotations print ( "Texts:" ) for text in texts : print ( f ' \n " { text . description } "' ) vertices = [ f "( { vertex . x } , { vertex . y } )" for vertex in text . bounding poly . vertices ] print ( "bounds: {} " . format ( "," . join ( vertices ))) if response . error . message : raise Exception ( " {} \n For more info on error messages, check: " "https://cloud.google.com/apis/design/errors" . format ( response . error . message ) ) Additional languages C# : Please follow the C# setup instructions on the client libraries page and then visit the Vision reference documentation for .NET.
- Image ( content = content ) response = client . text detection ( image = image ) texts = response . text annotations print ( "Texts:" ) for text in texts : print ( f ' \n " { text . description } "' ) vertices = [ f "( { vertex . x } , { vertex . y } )" for vertex in text . bounding poly . vertices ] print ( "bounds: {} " . format ( "," . join ( vertices ))) if response . error . message : raise Exception ( " {} \n For more info on error messages, check: " "https://cloud.google.com/apis/design/errors" . format ( response . error . message ) ) Additional languages C# : Please follow the C# setup instructions on the client libraries page and then visit the Vision reference documentation for .NET.
- This means you can use Cloud Vision for computer vision tasks like image analysis and dense document text detection, including handwriting extraction.
- DOCUMENT TEXT DETECTION also extracts text from an image, but the response is optimized for dense text and documents .

### Detect handwriting in images \_|\_ Cloud Vision API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vision/docs/handwriting](https://docs.cloud.google.com/vision/docs/handwriting)
- Source ID: `site-docs-root`
- Final score: 261
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Image () image . source . image uri = uri response = client . document text detection ( image = image ) for page in response . full text annotation . pages : for block in page . blocks : print ( f " \n Block confidence: { block . confidence } \n " ) for paragraph in block . paragraphs : print ( "Paragraph confidence: {} " . format ( paragraph . confidence )) for word in paragraph . words : word text = "" . join ([ symbol . text for symbol in word . symbols ]) print ( "Word text: {} (confidence: {} )" . format ( word text , word . confidence ) ) for symbol in word . symbols : print ( " \t Symbol: {} (confidence: {} )" . format ( symbol . text , symbol . confidence ) ) if response . error . message : raise Exception ( " {} \n For more info on error messages, check: " "https://cloud.google.com/apis/design/errors" . format ( response . error . message ) ) gcloud To perform handwriting detection, use the gcloud ml vision detect-document command as shown in the following example: gcloud ml vision detect-document gs://cloud-samples-data/vision/handwriting image.png Additional languages C# : Please follow the C# setup instructions on the client libraries page and then visit the Vision reference documentation for .NET.
- ImageAnnotatorClient (); / TODO(developer): Uncomment the following line before running the sample. / // const fileName = 'Local image file, e.g. /path/to/image.png'; // Read a local image as a text document const [ result ] = await client . documentTextDetection ( fileName ); const fullTextAnnotation = result . fullTextAnnotation ; console . log ( Full text: ${ fullTextAnnotation . text } ); fullTextAnnotation . pages . forEach ( page = > { page . blocks . forEach ( block = > { console . log ( Block confidence: ${ block . confidence } ); block . paragraphs . forEach ( paragraph = > { console . log ( Paragraph confidence: ${ paragraph . confidence } ); paragraph . words . forEach ( word = > { const wordText = word . symbols . map ( s = > s . text ). join ( '' ); console . log ( Word text: ${ wordText } ); console . log ( Word confidence: ${ word . confidence } ); word . symbols . forEach ( symbol = > { console . log ( Symbol text: ${ symbol . text } ); console . log ( Symbol confidence: ${ symbol . confidence } ); }); }); }); }); }); Python Before trying this sample, follow the Python setup instructions in the Vision quickstart using client libraries .
- Image ( content = content ) response = client . document text detection ( image = image ) for page in response . full text annotation . pages : for block in page . blocks : print ( f " \n Block confidence: { block . confidence } \n " ) for paragraph in block . paragraphs : print ( "Paragraph confidence: {} " . format ( paragraph . confidence )) for word in paragraph . words : word text = "" . join ([ symbol . text for symbol in word . symbols ]) print ( "Word text: {} (confidence: {} )" . format ( word text , word . confidence ) ) for symbol in word . symbols : print ( " \t Symbol: {} (confidence: {} )" . format ( symbol . text , symbol . confidence ) ) if response . error . message : raise Exception ( " {} \n For more info on error messages, check: " "https://cloud.google.com/apis/design/errors" . format ( response . error . message ) ) Additional languages C# : Please follow the C# setup instructions on the client libraries page and then visit the Vision reference documentation for .NET.
- ImageAnnotatorClient (); / TODO(developer): Uncomment the following lines before running the sample. / // const bucketName = 'Bucket where the file resides, e.g. my-bucket'; // const fileName = 'Path to file within bucket, e.g. path/to/image.png'; // Read a remote image as a text document const [ result ] = await client . documentTextDetection ( gs:// ${ bucketName } / ${ fileName } ); const fullTextAnnotation = result . fullTextAnnotation ; console . log ( fullTextAnnotation . text ); Python Before trying this sample, follow the Python setup instructions in the Vision quickstart using client libraries .

### Features list \_|\_ Cloud Vision API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vision/docs/features-list](https://docs.cloud.google.com/vision/docs/features-list)
- Source ID: `site-api-reference`
- Final score: 257
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Document text detection (dense text / handwriting) Optical character recognition (OCR) for a file (PDF/TIFF) or dense text image; dense text recognition and conversion to machine-coded text.
- Response : Returns both a list of words identifed with text, bounding boxes, and textAnnotations , as well as the structural hierarchy for the OCR detected text ( fullTextAnnotation ).
- Images : Optimized for dense areas of text in an image (images that are documents), and images that contain handwriting.
- Response : Returns the structural hierarchy for the OCR detected text ( fullTextAnnotation ).

