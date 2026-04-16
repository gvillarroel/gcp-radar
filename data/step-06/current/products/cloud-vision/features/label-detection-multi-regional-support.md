---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:50.269Z"
product_name: "Cloud Vision"
product_slug: "cloud-vision"
feature_name: "Label Detection multi-regional support"
feature_slug: "label-detection-multi-regional-support"
latest_feature_date: "2021-10-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vision/docs/detect-labels-image-command-line"
  - "https://docs.cloud.google.com/vision/docs/handwriting"
  - "https://docs.cloud.google.com/vision/docs/pdf"
  - "https://docs.cloud.google.com/vision/docs/detect-labels-image-client-libraries"
keywords:
  - "label"
  - "detection"
  - "multi"
  - "regional"
  - "supports"
  - "processing"
  - "in"
  - "the"
---

# Label Detection multi-regional support

Product: Cloud Vision
Coverage: MEDIUM

## Step 02 Summary

Label Detection supports multi-regional processing in the US and EU.

## Extended Definition

Label Detection supports multi-regional processing in the US and EU.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vision/docs/detect-labels-image-command-line](https://docs.cloud.google.com/vision/docs/detect-labels-image-command-line)
- [https://docs.cloud.google.com/vision/docs/handwriting](https://docs.cloud.google.com/vision/docs/handwriting)
- [https://docs.cloud.google.com/vision/docs/pdf](https://docs.cloud.google.com/vision/docs/pdf)
- [https://docs.cloud.google.com/vision/docs/detect-labels-image-client-libraries](https://docs.cloud.google.com/vision/docs/detect-labels-image-client-libraries)

## Supporting Pages

### "Quickstart: Detect labels in an image by using the command line \_|\_ Cloud\

- URL: [https://docs.cloud.google.com/vision/docs/detect-labels-image-command-line](https://docs.cloud.google.com/vision/docs/detect-labels-image-command-line)
- Source ID: `site-iam-reference`
- Final score: 223
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information, see the API Reference documentation . --> { "responses" : [ { " labelAnnotations " : [ { "mid" : "/m/09g5pq" , "description" : "People" , "score" : 0.9504782 , "topicality" : 0.9504782 }, { "mid" : "/m/01c8br" , "description" : "Street" , "score" : 0.8911568 , "topicality" : 0.8911568 }, { "mid" : "/m/079bkr" , "description" : "Mode of transport" , "score" : 0.89089024 , "topicality" : 0.89089024 } ], " textAnnotations " : [ { "locale" : "zh" , "description" : "牛牛面馆\n" , "boundingPoly" : { "vertices" : [ { "x" : 159 , "y" : 212 }, { "x" : 947 , "y" : 212 }, { "x" : 947 , "y" : 354 }, { "x" : 159 , "y" : 354 } ] } }, ... ], "fullTextAnnotation" : { "pages" : [ { ... "paragraphs" : [ { ... "words" : [ { ... "symbols" : [ { ... ], "blockType" : "TEXT" } ] } ], "text" : "牛牛面馆\n" }, " localizedObjectAnnotations " : [ { "mid" : "/m/01g317" , "name" : "Person" , "score" : 0.94413143 , "boundingPoly" : { "normalizedVertices" : [ { "x" : 0.26063988 , "y" : 0.46869153 }, { "x" : 0.40736017 , "y" : 0.46869153 }, { "x" : 0.40736017 , "y" : 0.8957791 }, { "x" : 0.26063988 , "y" : 0.8957791 } ] } } ] } ] } --> Label detection results description: "People", score: 0.950 description: "Street", score: 0.891 description: "Mode of transport", score: 0.890 Image credit : Steve Long on Unsplash ( annotations added ).
- Create the JSON request file with the following text, and save it as a request.json plain text file in your working directory: request.json { "requests" : [ { "image" : { "source" : { "imageUri" : " gs://cloud-samples-data/vision/using curl/shanghai.jpeg " } }, "features" : [ { "type" : "LABEL DETECTION" , "maxResults" : 3 }, { "type" : "OBJECT LOCALIZATION" , "maxResults" : 1 }, { "type" : "TEXT DETECTION" , "maxResults" : 1 , "model" : "builtin/latest" } ] } ] } Field value details image.source.gcsImageUri - Indicates the image stored in a Cloud Storage bucket.
- Detect labels in an image by using the command line This page shows you how to send three feature detection and annotation requests to the Vision API using the REST interface and the curl command.
- You can request multiple feature types for a single image. type - The enum value specifying a feature. maxResults (optional) - A limiting value on the results returned. model (optional) - If applicable you can specify either builtin/stable (the default if unset) or builtin/latest to choose your model.

### Detect handwriting in images \_|\_ Cloud Vision API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vision/docs/handwriting](https://docs.cloud.google.com/vision/docs/handwriting)
- Source ID: `site-docs-root`
- Final score: 221
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- ImageAnnotatorClient ( clientOptions ); // Performs text detection on the image file const [ result ] = await client . textDetection ( './resources/wakeupcat.jpg' ); const labels = result . textAnnotations ; console . log ( 'Text:' ); labels . forEach ( label = > console . log ( label . description )); } setEndpoint (); Python Before trying this sample, follow the Python setup instructions in the Vision quickstart using client libraries .
- Multi-regional support This functionality currently only applies to the OCR feature (types TEXT DETECTION or DOCUMENT TEXT DETECTION ).
- Image () image . source . image uri = uri response = client . document text detection ( image = image ) for page in response . full text annotation . pages : for block in page . blocks : print ( f " \n Block confidence: { block . confidence } \n " ) for paragraph in block . paragraphs : print ( "Paragraph confidence: {} " . format ( paragraph . confidence )) for word in paragraph . words : word text = "" . join ([ symbol . text for symbol in word . symbols ]) print ( "Word text: {} (confidence: {} )" . format ( word text , word . confidence ) ) for symbol in word . symbols : print ( " \t Symbol: {} (confidence: {} )" . format ( symbol . text , symbol . confidence ) ) if response . error . message : raise Exception ( " {} \n For more info on error messages, check: " "https://cloud.google.com/apis/design/errors" . format ( response . error . message ) ) gcloud To perform handwriting detection, use the gcloud ml vision detect-document command as shown in the following example: gcloud ml vision detect-document gs://cloud-samples-data/vision/handwriting image.png Additional languages C# : Please follow the C# setup instructions on the client libraries page and then visit the Vision reference documentation for .NET.
- ImageAnnotatorClient (); / TODO(developer): Uncomment the following line before running the sample. / // const fileName = 'Local image file, e.g. /path/to/image.png'; // Read a local image as a text document const [ result ] = await client . documentTextDetection ( fileName ); const fullTextAnnotation = result . fullTextAnnotation ; console . log ( Full text: ${ fullTextAnnotation . text } ); fullTextAnnotation . pages . forEach ( page = > { page . blocks . forEach ( block = > { console . log ( Block confidence: ${ block . confidence } ); block . paragraphs . forEach ( paragraph = > { console . log ( Paragraph confidence: ${ paragraph . confidence } ); paragraph . words . forEach ( word = > { const wordText = word . symbols . map ( s = > s . text ). join ( '' ); console . log ( Word text: ${ wordText } ); console . log ( Word confidence: ${ word . confidence } ); word . symbols . forEach ( symbol = > { console . log ( Symbol text: ${ symbol . text } ); console . log ( Symbol confidence: ${ symbol . confidence } ); }); }); }); }); }); Python Before trying this sample, follow the Python setup instructions in the Vision quickstart using client libraries .

### "Detect text in files (PDF/TIFF) \_|\_ Cloud Vision API \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vision/docs/pdf](https://docs.cloud.google.com/vision/docs/pdf)
- Source ID: `site-docs-root`
- Final score: 199
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- ImageAnnotatorClient ( clientOptions ); // Performs text detection on the image file const [ result ] = await client . textDetection ( './resources/wakeupcat.jpg' ); const labels = result . textAnnotations ; console . log ( 'Text:' ); labels . forEach ( label = > console . log ( label . description )); } setEndpoint (); Python Before trying this sample, follow the Python setup instructions in the Vision quickstart using client libraries .
- Multi-regional support This functionality currently only applies to the OCR feature (types TEXT DETECTION or DOCUMENT TEXT DETECTION ).
- For more information, see the API Reference documentation . { "inputConfig": { "gcsSource": { "uri": "gs://cloud-samples-data/vision/pdf tiff/census2010.pdf" }, "mimeType": "application/pdf" }, "responses": [ { "fullTextAnnotation": { "pages": [ { "property": { "detectedLanguages": [ { "languageCode": "en", "confidence": 0.94 } ] }, "width": 612, "height": 792, "blocks": [ { "boundingBox": { "normalizedVertices": [ { "x": 0.12908497, "y": 0.10479798 }, ... { "x": 0.12908497, "y": 0.1199495 } ] }, "paragraphs": [ { ... }, "words": [ { ... }, "symbols": [ { ... "text": "C", "confidence": 0.99 }, { "property": { "detectedLanguages": [ { "languageCode": "en" } ] }, "text": "O", "confidence": 0.99 }, ... } ] } ], "text": "CONTENTS\n.\n1-1\nII-1\nIII-1\nList of Statistical Tables... \nHow to Use This Census Report ..\nTable Finding Guide .\nUser Notes .......\nStatistical Tables.........\nAppendixes \nA Geographic Terms and Concepts .........\nB Definitions of Subject Characteristics.\nData Collection and Processing Procedures... \nQuestionnaire. ........\nE Maps .................\nF Operational Overview and accuracy of the Data.......\nG Residence Rule and Residence Situations for the \n2010 Census of the United States... \nH Acknowledgments .....\nE\n Appendix may be found in the separate volume, CPH-1-A, Summary Population and\nHousing Characteristics, Selected Appendixes, on the Internet at <www.census.gov\n/prod/cen2010/cph-1-a.pdf>.\nContents\n" }, "context": { "uri": "gs://cloud-samples-data/vision/pdf tiff/census2010.pdf", "pageNumber": 1 } } ] } Go Before trying this sample, follow the Go setup instructions in the Vision quickstart using client libraries .
- For more information, see the API Reference documentation . { "inputConfig": { "gcsSource": { "uri": "gs://cloud-samples-data/vision/pdf tiff/census2010.pdf" }, "mimeType": "application/pdf" }, "responses": [ { "fullTextAnnotation": { "pages": [ { "property": { "detectedLanguages": [ { "languageCode": "en", "confidence": 0.94 } ] }, "width": 612, "height": 792, "blocks": [ { "boundingBox": { "normalizedVertices": [ { "x": 0.12908497, "y": 0.10479798 }, ... { "x": 0.12908497, "y": 0.1199495 } ] }, "paragraphs": [ { ... }, "words": [ { ... }, "symbols": [ { ... "text": "C", "confidence": 0.99 }, { "property": { "detectedLanguages": [ { "languageCode": "en" } ] }, "text": "O", "confidence": 0.99 }, ... } ] } ], "text": "CONTENTS\n.\n1-1\nII-1\nIII-1\nList of Statistical Tables... \nHow to Use This Census Report ..\nTable Finding Guide .\nUser Notes .......\nStatistical Tables.........\nAppendixes \nA Geographic Terms and Concepts .........\nB Definitions of Subject Characteristics.\nData Collection and Processing Procedures... \nQuestionnaire. ........\nE Maps .................\nF Operational Overview and accuracy of the Data.......\nG Residence Rule and Residence Situations for the \n2010 Census of the United States... \nH Acknowledgments .....\nE\n Appendix may be found in the separate volume, CPH-1-A, Summary Population and\nHousing Characteristics, Selected Appendixes, on the Internet at <www.census.gov\n/prod/cen2010/cph-1-a.pdf>.\nContents\n" }, "context": { "uri": "gs://cloud-samples-data/vision/pdf tiff/census2010.pdf", "pageNumber": 1 } } ] } Go Before trying this sample, follow the Go setup instructions in the Vision quickstart using client libraries .

### "Quickstart: Detect labels in an image by using client libraries \_|\_ Cloud\

- URL: [https://docs.cloud.google.com/vision/docs/detect-labels-image-client-libraries](https://docs.cloud.google.com/vision/docs/detect-labels-image-client-libraries)
- Source ID: `site-docs-root`
- Final score: 182
- Re-rank relevance: N/A

Evidence snippets:
- LABEL DETECTION ). build (); AnnotateImageRequest request = AnnotateImageRequest . newBuilder (). addFeatures ( feat ). setImage ( img ). build (); requests . add ( request ); // Performs label detection on the image file BatchAnnotateImagesResponse response = vision . batchAnnotateImages ( requests ); List<AnnotateImageResponse> responses = response . getResponsesList (); for ( AnnotateImageResponse res : responses ) { if ( res . hasError ()) { System . out . format ( "Error: %s%n" , res . getError (). getMessage ()); return ; } for ( EntityAnnotation annotation : res . getLabelAnnotationsList ()) { annotation . getAllFields () . forEach (( k , v ) - > System . out . format ( "%s : %s%n" , k , v . toString ())); } } } } } Node.js Before trying this sample, follow the Node.js setup instructions in the Vision quickstart using client libraries .
- Node.js For more on setting up your Node.js development environment, refer to the Node.js Development Environment Setup Guide . npm install @google-cloud/vision Python For more on setting up your Python development environment, refer to the Python Development Environment Setup Guide . pip install --upgrade google-cloud-vision Label detection samples Now you can use the Vision API to request information from an image, such as label detection.
- ImageAnnotatorClient (); // Performs label detection on the image file const [ result ] = await client . labelDetection ( './resources/wakeupcat.jpg' ); const labels = result . labelAnnotations ; console . log ( 'Labels:' ); labels . forEach ( label = > console . log ( label . description )); } quickstart (); Python Before trying this sample, follow the Python setup instructions in the Vision quickstart using client libraries .
- Image () image . source . image uri = file uri Performs label detection on the image file response = client . label detection ( image = image ) labels = response . label annotations print ( "Labels:" ) for label in labels : print ( label . description ) return labels Run the sample To run the prior samples, use the following commands.

