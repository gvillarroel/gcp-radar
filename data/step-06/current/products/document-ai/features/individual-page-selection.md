---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:14:31.936Z"
product_name: "Document AI"
product_slug: "document-ai"
feature_name: "Individual page selection"
feature_slug: "individual-page-selection"
latest_feature_date: "2024-01-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/document-ai/docs/process-documents-ocr"
  - "https://docs.cloud.google.com/document-ai/docs/enterprise-document-ocr"
  - "https://docs.cloud.google.com/document-ai/docs/manage-processor-versions"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-document-ai/latest/com.google.cloud.documentai.v1"
keywords:
  - "individual"
  - "page"
  - "selection"
  - "developers"
  - "can"
  - "specify"
  - "which"
  - "pages"
---

# Individual page selection

Product: Document AI
Coverage: MEDIUM

## Step 02 Summary

Developers can specify which pages Document AI should process within a document.

## Extended Definition

Developers can specify which pages Document AI should process within a document.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/document-ai/docs/process-documents-ocr](https://docs.cloud.google.com/document-ai/docs/process-documents-ocr)
- [https://docs.cloud.google.com/document-ai/docs/enterprise-document-ocr](https://docs.cloud.google.com/document-ai/docs/enterprise-document-ocr)
- [https://docs.cloud.google.com/document-ai/docs/manage-processor-versions](https://docs.cloud.google.com/document-ai/docs/manage-processor-versions)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-document-ai/latest/com.google.cloud.documentai.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-document-ai/latest/com.google.cloud.documentai.v1)

## Supporting Pages

### Enterprise Document OCR \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/process-documents-ocr](https://docs.cloud.google.com/document-ai/docs/process-documents-ocr)
- Source ID: `site-docs-root`
- Final score: 187
- Re-rank relevance: N/A

Evidence snippets:
- HTTP method and URL: POST https:// LOCATION -documentai.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /processors/ PROCESSOR ID /processorVersions/ PROCESSOR VERSION :process Request JSON body: { "skipHumanReview": skipHumanReview , "rawDocument": { "mimeType": " MIME TYPE ", "content": " IMAGE CONTENT " }, "fieldMask": " FIELD MASK ", "processOptions": { "ocrConfig": { "enableNativePdfParsing": ENABLE NATIVE PDF PARSING , "enableImageQualityScores": ENABLE IMAGE QUALITY SCORES , "enableSymbol": ENABLE SYMBOL , "disableCharacterBoxesDetection": DISABLE CHARACTER BOXES DETECTION , "hints": { "languageHints": [ " LANGUAGE HINTS " ] }, "advancedOcrOptions": [" ADVANCED OCR OPTIONS "], "premiumFeatures": { "enableSelectionMarkDetection": ENABLE SELECTION MARK DETECTION , "computeStyleInfo": COMPUTE STYLE INFO , "enableMathOcr": ENABLE MATH OCR , } }, "individualPageSelector" { "pages": [ INDIVIDUAL PAGES ] } } } To send your request, choose one of these options: curl Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Input Enable by setting ProcessOptions.ocrConfig.premiumFeatures.enableSelectionMarkDetection to true in the processing request. { "rawDocument" : { "mimeType" : " MIME TYPE " , "content" : " IMAGE CONTENT " }, "processOptions" : { "ocrConfig" : { "premiumFeatures" : { "enableSelectionMarkDetection" : true } } } } Output The checkbox output appears in Document.pages[].visualElements[] with "type": "unfilled checkbox" or "type": "filled checkbox" . "visualElements" : [ { "layout" : { "confidence" : 0.89363575 , "boundingPoly" : { "vertices" : [ { "x" : 11 , "y" : 24 }, { "x" : 37 , "y" : 24 }, { "x" : 37 , "y" : 56 }, { "x" : 11 , "y" : 56 } ], "normalizedVertices" : [ { "x" : 0.017488075 , "y" : 0.38709676 }, { "x" : 0.05882353 , "y" : 0.38709676 }, { "x" : 0.05882353 , "y" : 0.9032258 }, { "x" : 0.017488075 , "y" : 0.9032258 } ] } }, "type" : "unfilled checkbox" }, { "layout" : { "confidence" : 0.9148201 , "boundingPoly" : ... }, "type" : "filled checkbox" } ], You can check the full Document JSON output in this link .
- PremiumFeatures ( compute style info = True , enable math ocr = False , # Enable to use Math OCR Model enable selection mark detection = True , ), ) ) Online processing request to Document AI document = process document ( project id , location , processor id , processor version , file path , mime type , process options = process options , ) text = document . text print ( f "Full document text: { text } \n " ) print ( f "There are { len ( document . pages ) } page(s) in this document. \n " ) for page in document . pages : print ( f "Page { page . page number } :" ) print page dimensions ( page . dimension ) print detected languages ( page . detected languages ) print blocks ( page . blocks , text ) print paragraphs ( page . paragraphs , text ) print lines ( page . lines , text ) print tokens ( page . tokens , text ) if page . symbols : print symbols ( page . symbols , text ) if page . image quality scores : print image quality scores ( page . image quality scores ) if page . visual elements : print visual elements ( page . visual elements , text ) def print page dimensions ( dimension : documentai .
- At the token (word) level, the following attributes are detected: Handwriting detection Font style Font size Font type Font color Font weight Letter spacing Bold Italic Underlined Text color ( RGBa ) Background color ( RGBa ) Input Enable by setting ProcessOptions.ocrConfig.premiumFeatures.computeStyleInfo to true in the processing request. { "rawDocument" : { "mimeType" : " MIME TYPE " , "content" : " IMAGE CONTENT " }, "processOptions" : { "ocrConfig" : { "premiumFeatures" : { "computeStyleInfo" : true } } } } Output The font-style output appears in Document.pages[].tokens[].styleInfo with type StyleInfo . "tokens" : [ { "styleInfo" : { "fontSize" : 3 , "pixelFontSize" : 13 , "fontType" : "SANS SERIF" , "bold" : true , "fontWeight" : 564 , "textColor" : { "red" : 0.16862746 , "green" : 0.16862746 , "blue" : 0.16862746 }, "backgroundColor" : { "red" : 0.98039216 , "green" : 0.9882353 , "blue" : 0.99215686 } } }, ... ] You can check the full Document JSON output in this link .

### Enterprise Document OCR \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/enterprise-document-ocr](https://docs.cloud.google.com/document-ai/docs/enterprise-document-ocr)
- Source ID: `site-docs-root-2`
- Final score: 187
- Re-rank relevance: N/A

Evidence snippets:
- HTTP method and URL: POST https:// LOCATION -documentai.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /processors/ PROCESSOR ID /processorVersions/ PROCESSOR VERSION :process Request JSON body: { "skipHumanReview": skipHumanReview , "rawDocument": { "mimeType": " MIME TYPE ", "content": " IMAGE CONTENT " }, "fieldMask": " FIELD MASK ", "processOptions": { "ocrConfig": { "enableNativePdfParsing": ENABLE NATIVE PDF PARSING , "enableImageQualityScores": ENABLE IMAGE QUALITY SCORES , "enableSymbol": ENABLE SYMBOL , "disableCharacterBoxesDetection": DISABLE CHARACTER BOXES DETECTION , "hints": { "languageHints": [ " LANGUAGE HINTS " ] }, "advancedOcrOptions": [" ADVANCED OCR OPTIONS "], "premiumFeatures": { "enableSelectionMarkDetection": ENABLE SELECTION MARK DETECTION , "computeStyleInfo": COMPUTE STYLE INFO , "enableMathOcr": ENABLE MATH OCR , } }, "individualPageSelector" { "pages": [ INDIVIDUAL PAGES ] } } } To send your request, choose one of these options: curl Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Input Enable by setting ProcessOptions.ocrConfig.premiumFeatures.enableSelectionMarkDetection to true in the processing request. { "rawDocument" : { "mimeType" : " MIME TYPE " , "content" : " IMAGE CONTENT " }, "processOptions" : { "ocrConfig" : { "premiumFeatures" : { "enableSelectionMarkDetection" : true } } } } Output The checkbox output appears in Document.pages[].visualElements[] with "type": "unfilled checkbox" or "type": "filled checkbox" . "visualElements" : [ { "layout" : { "confidence" : 0.89363575 , "boundingPoly" : { "vertices" : [ { "x" : 11 , "y" : 24 }, { "x" : 37 , "y" : 24 }, { "x" : 37 , "y" : 56 }, { "x" : 11 , "y" : 56 } ], "normalizedVertices" : [ { "x" : 0.017488075 , "y" : 0.38709676 }, { "x" : 0.05882353 , "y" : 0.38709676 }, { "x" : 0.05882353 , "y" : 0.9032258 }, { "x" : 0.017488075 , "y" : 0.9032258 } ] } }, "type" : "unfilled checkbox" }, { "layout" : { "confidence" : 0.9148201 , "boundingPoly" : ... }, "type" : "filled checkbox" } ], You can check the full Document JSON output in this link .
- PremiumFeatures ( compute style info = True , enable math ocr = False , # Enable to use Math OCR Model enable selection mark detection = True , ), ) ) Online processing request to Document AI document = process document ( project id , location , processor id , processor version , file path , mime type , process options = process options , ) text = document . text print ( f "Full document text: { text } \n " ) print ( f "There are { len ( document . pages ) } page(s) in this document. \n " ) for page in document . pages : print ( f "Page { page . page number } :" ) print page dimensions ( page . dimension ) print detected languages ( page . detected languages ) print blocks ( page . blocks , text ) print paragraphs ( page . paragraphs , text ) print lines ( page . lines , text ) print tokens ( page . tokens , text ) if page . symbols : print symbols ( page . symbols , text ) if page . image quality scores : print image quality scores ( page . image quality scores ) if page . visual elements : print visual elements ( page . visual elements , text ) def print page dimensions ( dimension : documentai .
- At the token (word) level, the following attributes are detected: Handwriting detection Font style Font size Font type Font color Font weight Letter spacing Bold Italic Underlined Text color ( RGBa ) Background color ( RGBa ) Input Enable by setting ProcessOptions.ocrConfig.premiumFeatures.computeStyleInfo to true in the processing request. { "rawDocument" : { "mimeType" : " MIME TYPE " , "content" : " IMAGE CONTENT " }, "processOptions" : { "ocrConfig" : { "premiumFeatures" : { "computeStyleInfo" : true } } } } Output The font-style output appears in Document.pages[].tokens[].styleInfo with type StyleInfo . "tokens" : [ { "styleInfo" : { "fontSize" : 3 , "pixelFontSize" : 13 , "fontType" : "SANS SERIF" , "bold" : true , "fontWeight" : 564 , "textColor" : { "red" : 0.16862746 , "green" : 0.16862746 , "blue" : 0.16862746 }, "backgroundColor" : { "red" : 0.98039216 , "green" : 0.9882353 , "blue" : 0.99215686 } } }, ... ] You can check the full Document JSON output in this link .

### Managing processor versions \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/manage-processor-versions](https://docs.cloud.google.com/document-ai/docs/manage-processor-versions)
- Source ID: `site-docs-root-2`
- Final score: 154
- Re-rank relevance: N/A

Evidence snippets:
- ProcessorVersion ; public class SyncListProcessorVersions { public static void main ( String [] args ) throws Exception { syncListProcessorVersions (); } public static void syncListProcessorVersions () throws Exception { // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( DocumentProcessorServiceClient documentProcessorServiceClient = DocumentProcessorServiceClient . create ()) { ListProcessorVersionsRequest request = ListProcessorVersionsRequest . newBuilder () . setParent ( ProcessorName . of ( "[PROJECT]" , "[LOCATION]" , "[PROCESSOR]" ). toString ()) . setPageSize ( 883849137 ) . setPageToken ( "pageToken873572522" ) . build (); for ( ProcessorVersion element : documentProcessorServiceClient . listProcessorVersions ( request ). iterateAll ()) { // doThingsWith(element); } } } } Python For more information, see the Document AI Python API reference documentation .
- You can iterate over elements, and API calls will be issued to fetch pages as needed. result . each do item Each element is of type ::Google::Cloud::DocumentAI::V1::ProcessorVersion. p item end end View details about a version Console In the Google Cloud console, in the Document AI section, go to the Processors page.
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https:// LOCATION -documentai.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /processors/ PROCESSOR ID /processorVersions" Select-Object -Expand Content The response contains a list of ProcessorVersions , which contains information about each processor version such as its name , state , and other details. { "processorVersions": [ { "name": "projects/ PROJECT ID /locations/ LOCATION /processors/ PROCESSOR ID /processorVersions/pretrained-ocr-v1.1-2022-09-12", "displayName": "Google Release Candidate", "state": "DEPLOYED", "createTime": "2022-09-13T23:39:12.156648Z", "googleManaged": true }, { "name": "projects/ PROJECT ID /locations/ LOCATION /processors/ PROCESSOR ID /processorVersions/pretrained-ocr-v1.0-2020-09-23", "displayName": "Google Stable", "state": "DEPLOYED", "createTime": "2022-09-12T23:35:09.829557Z", "googleManaged": true, "deprecationInfo": { "deprecationTime": "1970-01-01T00:00:00Z" } } ] } C# For more information, see the Document AI C# API reference documentation .
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https:// LOCATION -documentai.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /processors/ PROCESSOR ID /processorVersions/ PROCESSOR VERSION " Select-Object -Expand Content The response is a ProcessorVersion , which contains information about the processor version such as its name , state , and other details. { "name": "projects/ PROJECT ID /locations/ LOCATION /processors/ PROCESSOR ID /processorVersions/pretrained-ocr-v1.1-2022-09-12", "displayName": "Google Release Candidate", "state": "DEPLOYED", "createTime": "2022-09-13T23:39:12.156648Z", "googleManaged": true } C# For more information, see the Document AI C# API reference documentation .

### "Package com.google.cloud.documentai.v1 (2.92.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-document-ai/latest/com.google.cloud.documentai.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-document-ai/latest/com.google.cloud.documentai.v1)
- Source ID: `site-java-reference`
- Final score: 142
- Re-rank relevance: N/A

Evidence snippets:
- Page anchors can be cross-page, consist of multiple bounding polygons and optionally com. google. cloud. documentai. v1.
- Page anchors can be cross-page, consist of multiple bounding polygons and optionally com. google. cloud. documentai. v1.
- Individual Page Selector A list of individual page numbers. com. google. cloud. documentai. v1.
- Page Anchor Referencing the visual context of the entity in the Document.pages .

