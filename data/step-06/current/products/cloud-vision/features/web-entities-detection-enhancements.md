---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:26:36.721Z"
product_name: "Cloud Vision"
product_slug: "cloud-vision"
feature_name: "Web entities detection enhancements"
feature_slug: "web-entities-detection-enhancements"
latest_feature_date: "2018-04-06"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/vision/docs/handwriting"
  - "https://docs.cloud.google.com/vision/docs/release-notes"
  - "https://docs.cloud.google.com/vision/docs/ocr"
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
Coverage: LOW

## Step 02 Summary

Web entities detection accepts geotag hints and returns best-guess labels for image contents; Web entities detection accepts geotag hints and returns best-guess labels for image contents.

## Extended Definition

Web entities detection accepts geotag hints and returns best-guess labels for image contents; Web entities detection accepts geotag hints and returns best-guess labels for image contents.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/vision/docs/handwriting](https://docs.cloud.google.com/vision/docs/handwriting)
- [https://docs.cloud.google.com/vision/docs/release-notes](https://docs.cloud.google.com/vision/docs/release-notes)
- [https://docs.cloud.google.com/vision/docs/ocr](https://docs.cloud.google.com/vision/docs/ocr)

## Supporting Pages

### Detect handwriting in images \_|\_ Cloud Vision API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vision/docs/handwriting](https://docs.cloud.google.com/vision/docs/handwriting)
- Source ID: `site-docs-root`
- Final score: 114
- Re-rank relevance: N/A

Evidence snippets:
- If you choose to provide a language hint, modify the body of your request ( request.json file) to provide the string of one of the supported languages in the imageContext.languageHints field as shown in the following sample: { "requests" : [ { "image" : { "source" : { "imageUri" : " IMAGE URL " } } , "features" : [ { "type" : "DOCUMENT TEXT DETECTION" } ] , "imageContext" : { "languageHints" : [ "en-t-i0-handwrit" ] } } ] } How do language hints work?
- Image () image . source . image uri = uri response = client . document text detection ( image = image ) for page in response . full text annotation . pages : for block in page . blocks : print ( f " \n Block confidence: { block . confidence } \n " ) for paragraph in block . paragraphs : print ( "Paragraph confidence: {} " . format ( paragraph . confidence )) for word in paragraph . words : word text = "" . join ([ symbol . text for symbol in word . symbols ]) print ( "Word text: {} (confidence: {} )" . format ( word text , word . confidence ) ) for symbol in word . symbols : print ( " \t Symbol: {} (confidence: {} )" . format ( symbol . text , symbol . confidence ) ) if response . error . message : raise Exception ( " {} \n For more info on error messages, check: " "https://cloud.google.com/apis/design/errors" . format ( response . error . message ) ) gcloud To perform handwriting detection, use the gcloud ml vision detect-document command as shown in the following example: gcloud ml vision detect-document gs://cloud-samples-data/vision/handwriting image.png Additional languages C# : Please follow the C# setup instructions on the client libraries page and then visit the Vision reference documentation for .NET.
- Image ( content = content ) response = client . document text detection ( image = image ) for page in response . full text annotation . pages : for block in page . blocks : print ( f " \n Block confidence: { block . confidence } \n " ) for paragraph in block . paragraphs : print ( "Paragraph confidence: {} " . format ( paragraph . confidence )) for word in paragraph . words : word text = "" . join ([ symbol . text for symbol in word . symbols ]) print ( "Word text: {} (confidence: {} )" . format ( word text , word . confidence ) ) for symbol in word . symbols : print ( " \t Symbol: {} (confidence: {} )" . format ( symbol . text , symbol . confidence ) ) if response . error . message : raise Exception ( " {} \n For more info on error messages, check: " "https://cloud.google.com/apis/design/errors" . format ( response . error . message ) ) Additional languages C# : Please follow the C# setup instructions on the client libraries page and then visit the Vision reference documentation for .NET.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred"; "x-goog-user-project" = " PROJECT ID " } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json ` -Uri "https:// REGION ID -vision.googleapis.com/v1/projects/ PROJECT ID /locations/ REGION ID /images:annotate" Select-Object -Expand Content If the request is successful, the server returns a 200 OK HTTP status code and the response in JSON format.

### Vision release notes \_|\_ Cloud Vision API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vision/docs/release-notes](https://docs.cloud.google.com/vision/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 112
- Re-rank relevance: N/A

Evidence snippets:
- Web entities detection: accepts geotag input as detection hint, and returns best guess labels describing the contents of the image.
- Web entities detection: accepts geotag input as detection hint, and returns best guess labels describing the contents of the image.
- For more infomation, see the OCR how-to pages: Detect text in images Detect handwriting in images Detect text in files (PDF/TIFF) August 29, 2019 Change Improved detection models are now default for the following features: Logo Detection Landmark Detection Crop hints Object Localization The legacy model can still be accessed for 90 days by specifying "builtin/legacy" in the model field of a Feature object.
- December 05, 2023 Change Updated feature models Improved models are now available for the following features: Text detection and documentation text detection (OCR) Web detection Logo detection Object localization Specify "builtin/latest" in the model field of a Feature object to use the new models.

### "Detect and extract text from images \_|\_ Cloud Vision API \_|\_ Google\

- URL: [https://docs.cloud.google.com/vision/docs/ocr](https://docs.cloud.google.com/vision/docs/ocr)
- Source ID: `site-docs-root`
- Final score: 104
- Re-rank relevance: N/A

Evidence snippets:
- If you choose to provide a language hint, modify the body of your request ( request.json file) to provide the string of one of the supported languages in the imageContext.languageHints field as shown in the following sample: { "requests" : [ { "image" : { "source" : { "imageUri" : " IMAGE URL " } } , "features" : [ { "type" : "DOCUMENT TEXT DETECTION" } ] , "imageContext" : { "languageHints" : [ "en-t-i0-handwrit" ] } } ] } How do language hints work?
- ImageAnnotatorClient ( client options = client options ) Try it Try text detection and document text detection using the following web application.
- Image () image . source . image uri = uri response = client . text detection ( image = image ) texts = response . text annotations print ( "Texts:" ) for text in texts : print ( f ' \n " { text . description } "' ) vertices = [ f "( { vertex . x } , { vertex . y } )" for vertex in text . bounding poly . vertices ] print ( "bounds: {} " . format ( "," . join ( vertices ))) if response . error . message : raise Exception ( " {} \n For more info on error messages, check: " "https://cloud.google.com/apis/design/errors" . format ( response . error . message ) ) Additional languages C# : Please follow the C# setup instructions on the client libraries page and then visit the Vision reference documentation for .NET.
- Image ( content = content ) response = client . text detection ( image = image ) texts = response . text annotations print ( "Texts:" ) for text in texts : print ( f ' \n " { text . description } "' ) vertices = [ f "( { vertex . x } , { vertex . y } )" for vertex in text . bounding poly . vertices ] print ( "bounds: {} " . format ( "," . join ( vertices ))) if response . error . message : raise Exception ( " {} \n For more info on error messages, check: " "https://cloud.google.com/apis/design/errors" . format ( response . error . message ) ) Additional languages C# : Please follow the C# setup instructions on the client libraries page and then visit the Vision reference documentation for .NET.

