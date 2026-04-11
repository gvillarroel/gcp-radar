---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:26:36.720Z"
product_name: "Cloud Vision"
product_slug: "cloud-vision"
feature_name: "Document text detection enhancements"
feature_slug: "document-text-detection-enhancements"
latest_feature_date: "2018-04-06"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/vision/docs/release-notes"
  - "https://docs.cloud.google.com/vision/docs/handwriting"
  - "https://docs.cloud.google.com/vision/docs/fulltext-annotations"
keywords:
  - "document"
  - "text"
  - "detection"
  - "enhancements"
  - "adds"
  - "confidence"
  - "scores"
  - "auto"
---

# Document text detection enhancements

Product: Cloud Vision
Coverage: LOW

## Step 02 Summary

Document text detection adds confidence scores, auto language detection, multiple language support, and improved accuracy and speed; Document text detection adds confidence scores, auto language detection, multiple language support, and improved accuracy and speed.

## Extended Definition

Document text detection adds confidence scores, auto language detection, multiple language support, and improved accuracy and speed; Document text detection adds confidence scores, auto language detection, multiple language support, and improved accuracy and speed.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/vision/docs/release-notes](https://docs.cloud.google.com/vision/docs/release-notes)
- [https://docs.cloud.google.com/vision/docs/handwriting](https://docs.cloud.google.com/vision/docs/handwriting)
- [https://docs.cloud.google.com/vision/docs/fulltext-annotations](https://docs.cloud.google.com/vision/docs/fulltext-annotations)

## Supporting Pages

### Vision release notes \_|\_ Cloud Vision API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vision/docs/release-notes](https://docs.cloud.google.com/vision/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 126
- Re-rank relevance: N/A

Evidence snippets:
- December 04, 2017 Feature The following beta features are available in API version v1p1beta1 : Document text detection: confidence scores for all levels of results, auto language detection, support for multiple languages, and faster and more accurate results.
- These include: Document text detection: confidence scores for all levels of results, auto language detection, support for multiple languages, and faster and more accurate results.
- December 05, 2023 Change Updated feature models Improved models are now available for the following features: Text detection and documentation text detection (OCR) Web detection Logo detection Object localization Specify "builtin/latest" in the model field of a Feature object to use the new models.
- December 07, 2020 Feature Confidence score field addition for TEXT DETECTION You can now provide the flag TextDetectionParams.enable text detection confidence score to a TEXT DETECTION request to get a confidence score for response information.

### Detect handwriting in images \_|\_ Cloud Vision API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vision/docs/handwriting](https://docs.cloud.google.com/vision/docs/handwriting)
- Source ID: `site-docs-root`
- Final score: 124
- Re-rank relevance: N/A

Evidence snippets:
- Image () image . source . image uri = uri response = client . document text detection ( image = image ) for page in response . full text annotation . pages : for block in page . blocks : print ( f " \n Block confidence: { block . confidence } \n " ) for paragraph in block . paragraphs : print ( "Paragraph confidence: {} " . format ( paragraph . confidence )) for word in paragraph . words : word text = "" . join ([ symbol . text for symbol in word . symbols ]) print ( "Word text: {} (confidence: {} )" . format ( word text , word . confidence ) ) for symbol in word . symbols : print ( " \t Symbol: {} (confidence: {} )" . format ( symbol . text , symbol . confidence ) ) if response . error . message : raise Exception ( " {} \n For more info on error messages, check: " "https://cloud.google.com/apis/design/errors" . format ( response . error . message ) ) gcloud To perform handwriting detection, use the gcloud ml vision detect-document command as shown in the following example: gcloud ml vision detect-document gs://cloud-samples-data/vision/handwriting image.png Additional languages C# : Please follow the C# setup instructions on the client libraries page and then visit the Vision reference documentation for .NET.
- ImageAnnotatorClient (); / TODO(developer): Uncomment the following line before running the sample. / // const fileName = 'Local image file, e.g. /path/to/image.png'; // Read a local image as a text document const [ result ] = await client . documentTextDetection ( fileName ); const fullTextAnnotation = result . fullTextAnnotation ; console . log ( Full text: ${ fullTextAnnotation . text } ); fullTextAnnotation . pages . forEach ( page = > { page . blocks . forEach ( block = > { console . log ( Block confidence: ${ block . confidence } ); block . paragraphs . forEach ( paragraph = > { console . log ( Paragraph confidence: ${ paragraph . confidence } ); paragraph . words . forEach ( word = > { const wordText = word . symbols . map ( s = > s . text ). join ( '' ); console . log ( Word text: ${ wordText } ); console . log ( Word confidence: ${ word . confidence } ); word . symbols . forEach ( symbol = > { console . log ( Symbol text: ${ symbol . text } ); console . log ( Symbol confidence: ${ symbol . confidence } ); }); }); }); }); }); Python Before trying this sample, follow the Python setup instructions in the Vision quickstart using client libraries .
- Image ( content = content ) response = client . document text detection ( image = image ) for page in response . full text annotation . pages : for block in page . blocks : print ( f " \n Block confidence: { block . confidence } \n " ) for paragraph in block . paragraphs : print ( "Paragraph confidence: {} " . format ( paragraph . confidence )) for word in paragraph . words : word text = "" . join ([ symbol . text for symbol in word . symbols ]) print ( "Word text: {} (confidence: {} )" . format ( word text , word . confidence ) ) for symbol in word . symbols : print ( " \t Symbol: {} (confidence: {} )" . format ( symbol . text , symbol . confidence ) ) if response . error . message : raise Exception ( " {} \n For more info on error messages, check: " "https://cloud.google.com/apis/design/errors" . format ( response . error . message ) ) Additional languages C# : Please follow the C# setup instructions on the client libraries page and then visit the Vision reference documentation for .NET.
- HTTP method and URL: POST https:// REGION ID -vision.googleapis.com/v1/projects/ PROJECT ID /locations/ REGION ID /images:annotate Request JSON body: { "requests": [ { "image": { "source": { "imageUri": " CLOUD STORAGE IMAGE URI " } }, "features": [ { "type": "DOCUMENT TEXT DETECTION" } ] } ] } To send your request, choose one of these options: curl Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .

### "Dense document text detection tutorial \_|\_ Cloud Vision API \_|\_ Google\

- URL: [https://docs.cloud.google.com/vision/docs/fulltext-annotations](https://docs.cloud.google.com/vision/docs/fulltext-annotations)
- Source ID: `site-docs-root`
- Final score: 118
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Image ( content = content ) response = client . document text detection ( image = image ) document = response . full text annotation Collect specified feature bounds by enumerating all document features for page in document . pages : for block in page . blocks : for paragraph in block . paragraphs : for word in paragraph . words : for symbol in word . symbols : if feature == FeatureType .
- Image ( content = content ) response = client . document text detection ( image = image ) document = response . full text annotation Collect specified feature bounds by enumerating all document features for page in document . pages : for block in page . blocks : for paragraph in block . paragraphs : for word in paragraph . words : for symbol in word . symbols : if feature == FeatureType .
- Making the API request and reading text bounds from the response Now that our Vision API service is ready, we can access the service by calling the document text detection method of the ImageAnnotatorClient instance.
- Annotating an image using Document Text OCR This tutorial walks you through a basic Vision API application that makes a DOCUMENT TEXT DETECTION request , then processes the fullTextAnnotation response .

