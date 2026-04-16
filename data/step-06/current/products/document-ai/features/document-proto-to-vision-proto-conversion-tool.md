---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:14:31.971Z"
product_name: "Document AI"
product_slug: "document-ai"
feature_name: "Document proto-to-Vision proto conversion tool"
feature_slug: "document-proto-to-vision-proto-conversion-tool"
latest_feature_date: "2023-06-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/document-ai/docs/handle-response"
  - "https://docs.cloud.google.com/python/docs/reference/documentai/latest/google.cloud.documentai_v1.services.document_processor_service.DocumentProcessorServiceClient"
  - "https://docs.cloud.google.com/document-ai/docs/process-documents-ocr"
  - "https://docs.cloud.google.com/document-ai/docs/enterprise-document-ocr"
keywords:
  - "document"
  - "proto"
  - "to"
  - "vision"
  - "conversion"
  - "tool"
  - "the"
  - "helps"
---

# Document proto-to-Vision proto conversion tool

Product: Document AI
Coverage: MEDIUM

## Step 02 Summary

The proto conversion tool helps convert Document protos to AnnotateFileResponse protos for migration from Vision API text detection to Document OCR; The proto conversion tool converts Document protos to AnnotateFileResponse protos to support migration comparisons with Vision API text detection.

## Extended Definition

The proto conversion tool helps convert Document protos to AnnotateFileResponse protos for migration from Vision API text detection to Document OCR; The proto conversion tool converts Document protos to AnnotateFileResponse protos to support migration comparisons with Vision API text detection.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/document-ai/docs/handle-response](https://docs.cloud.google.com/document-ai/docs/handle-response)
- [https://docs.cloud.google.com/python/docs/reference/documentai/latest/google.cloud.documentai_v1.services.document_processor_service.DocumentProcessorServiceClient](https://docs.cloud.google.com/python/docs/reference/documentai/latest/google.cloud.documentai_v1.services.document_processor_service.DocumentProcessorServiceClient)
- [https://docs.cloud.google.com/document-ai/docs/process-documents-ocr](https://docs.cloud.google.com/document-ai/docs/process-documents-ocr)
- [https://docs.cloud.google.com/document-ai/docs/enterprise-document-ocr](https://docs.cloud.google.com/document-ai/docs/enterprise-document-ocr)

## Supporting Pages

### Handle processing response \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/handle-response](https://docs.cloud.google.com/document-ai/docs/handle-response)
- Source ID: `site-docs-root-2`
- Final score: 231
- Re-rank relevance: N/A

Evidence snippets:
- Document . from gcs ( gcs bucket name = gcs bucket name , gcs prefix = gcs prefix ) Converting wrapped document to vision AnnotateFileResponse annotate file response = ( wrapped document . convert document to annotate file response () ) print ( "Document converted to AnnotateFileResponse!" ) print ( f "Number of Pages : { len ( annotate file response . responses [ 0 ] . full text annotation . pages ) } " ) hOCR conversion from google.cloud.documentai toolbox import document TODO(developer): Uncomment these variables before running the sample.
- Document . from document path ( document path = document path ) output files = wrapped document . export images ( output path = output path , output file prefix = output file prefix , output file extension = output file extension , ) print ( "Images Successfully Exported" ) for output file in output files : print ( output file ) Vision conversion from google.cloud.documentai toolbox import document TODO(developer): Uncomment these variables before running the sample.
- Document . from document path ( document path = document path ) Converting wrapped document to hOCR format hocr string = wrapped document . export hocr str ( title = document title ) print ( "Document converted to hOCR!" ) return hocr string Third-party conversion from google.cloud.documentai toolbox import converter TODO(developer): Uncomment these variables before running the sample.
- Document . from batch process operation ( location = "us" , operation name = batch process operation ) wrapped document = wrapped documents [ 0 ] else : raise ValueError ( "No document source provided." ) For all properties and methods, refer to: https://cloud.google.com/python/docs/reference/documentai-toolbox/latest/google.cloud.documentai toolbox.wrappers.document.Document print ( "Document Successfully Loaded!" ) print ( f " \t Number of Pages: { len ( wrapped document . pages ) } " ) print ( f " \t Number of Entities: { len ( wrapped document . entities ) } " ) for page in wrapped document . pages : print ( f "Page { page . page number } " ) for block in page . blocks : print ( block . text ) for paragraph in page . paragraphs : print ( paragraph . text ) for line in page . lines : print ( line . text ) for token in page . tokens : print ( token . text ) Only supported with Form Parser processor https://cloud.google.com/document-ai/docs/form-parser for form field in page . form fields : print ( f " { form field . field name } : { form field . field value } " ) Only supported with Enterprise Document OCR version pretrained-ocr-v2.0-2023-06-02 https://cloud.google.com/document-ai/docs/process-documents-ocr#enable symbols for symbol in page . symbols : print ( symbol . text ) Only supported with Enterprise Document OCR version pretrained-ocr-v2.0-2023-06-02 https://cloud.google.com/document-ai/docs/process-documents-ocr#math ocr for math formula in page . math formulas : print ( math formula . text ) Only supported with Entity Extraction processors https://cloud.google.com/document-ai/docs/processors-list for entity in wrapped document . entities : print ( f " { entity . type } : { entity . mention text } " ) if entity . normalized text : print ( f " \t Normalized Text: { entity . normalized text } " ) Only supported with Layout Parser for chunk in wrapped document . chunks : print ( f "Chunk { chunk . chunk id } : { chunk . content } " ) for block in wrapped document . document layout blocks : print ( f "Document Layout Block { block . block id } " ) if block . text block : print ( f " { block . text block . type } : { block . text block . text } " ) if block . list block : print ( f " { block . list block . type } : { block . list block . list entries } " ) if block . table block : print ( block . table block . header rows , block . table block . body rows ) Tables from google.cloud.documentai toolbox import document TODO(developer): Uncomment these variables before running the sample.

### "Class DocumentProcessorServiceClient (3.14.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/documentai/latest/google.cloud.documentai_v1.services.document_processor_service.DocumentProcessorServiceClient](https://docs.cloud.google.com/python/docs/reference/documentai/latest/google.cloud.documentai_v1.services.document_processor_service.DocumentProcessorServiceClient)
- Source ID: `site-python-reference`
- Final score: 202
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Processors are built using state-of-the-art Google AI such as natural language, computer vision, and translation to extract structured information from unstructured or semi-structured documents.
- SetDefaultProcessorVersionRequest ( processor="processor value", default processor version="default processor version value", ) Make the request operation = client. set default processor version (request=request) print("Waiting for operation to complete...") response = operation.result() Handle the response print(response) Parameters Name Description request Union[ google.cloud.documentai v1.types.SetDefaultProcessorVersionRequest , dict] The request object.
- ReviewDocumentRequest ( inline document=inline document, human review config="human review config value", ) Make the request operation = client. review document (request=request) print("Waiting for operation to complete...") response = operation.result() Handle the response print(response) Parameters Name Description request Union[ google.cloud.documentai v1.types.ReviewDocumentRequest , dict] The request object.
- EvaluateProcessorVersionRequest ( processor version="processor version value", ) Make the request operation = client. evaluate processor version (request=request) print("Waiting for operation to complete...") response = operation.result() Handle the response print(response) Parameters Name Description request Union[ google.cloud.documentai v1.types.EvaluateProcessorVersionRequest , dict] The request object.

### Enterprise Document OCR \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/process-documents-ocr](https://docs.cloud.google.com/document-ai/docs/process-documents-ocr)
- Source ID: `site-docs-root`
- Final score: 201
- Re-rank relevance: N/A

Evidence snippets:
- Convert document objects to Vision AI API format The Document AI Toolbox includes a tool that converts the Document AI API Document format to the Vision AI AnnotateFileResponse format, enabling users to compare the responses between the document OCR processor and Vision AI API.
- Here is an example of LaTeX representation: Image detected Conversion to LaTeX Input Enable by setting ProcessOptions.ocrConfig.premiumFeatures.enableMathOcr to true in the processing request. { "rawDocument" : { "mimeType" : " MIME TYPE " , "content" : " IMAGE CONTENT " }, "processOptions" : { "ocrConfig" : { "premiumFeatures" : { "enableMathOcr" : true } } } } Output The Math OCR output appears in Document.pages[].visualElements[] with "type": "math formula" . "visualElements" : [ { "layout" : { "textAnchor" : { "textSegments" : [ { "endIndex" : "46" } ] }, "confidence" : 1 , "boundingPoly" : { "normalizedVertices" : [ { "x" : 0.14662756 , "y" : 0.27891156 }, { "x" : 0.9032258 , "y" : 0.27891156 }, { "x" : 0.9032258 , "y" : 0.8027211 }, { "x" : 0.14662756 , "y" : 0.8027211 } ] }, "orientation" : "PAGE UP" }, "type" : "math formula" } ] You can check the full Document JSON output in this link .
- HTTP method and URL: POST https:// LOCATION -documentai.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /processors/ PROCESSOR ID /processorVersions/ PROCESSOR VERSION :process Request JSON body: { "skipHumanReview": skipHumanReview , "rawDocument": { "mimeType": " MIME TYPE ", "content": " IMAGE CONTENT " }, "fieldMask": " FIELD MASK ", "processOptions": { "ocrConfig": { "enableNativePdfParsing": ENABLE NATIVE PDF PARSING , "enableImageQualityScores": ENABLE IMAGE QUALITY SCORES , "enableSymbol": ENABLE SYMBOL , "disableCharacterBoxesDetection": DISABLE CHARACTER BOXES DETECTION , "hints": { "languageHints": [ " LANGUAGE HINTS " ] }, "advancedOcrOptions": [" ADVANCED OCR OPTIONS "], "premiumFeatures": { "enableSelectionMarkDetection": ENABLE SELECTION MARK DETECTION , "computeStyleInfo": COMPUTE STYLE INFO , "enableMathOcr": ENABLE MATH OCR , } }, "individualPageSelector" { "pages": [ INDIVIDUAL PAGES ] } } } To send your request, choose one of these options: curl Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- PremiumFeatures ( compute style info = True , enable math ocr = False , # Enable to use Math OCR Model enable selection mark detection = True , ), ) ) Online processing request to Document AI document = process document ( project id , location , processor id , processor version , file path , mime type , process options = process options , ) text = document . text print ( f "Full document text: { text } \n " ) print ( f "There are { len ( document . pages ) } page(s) in this document. \n " ) for page in document . pages : print ( f "Page { page . page number } :" ) print page dimensions ( page . dimension ) print detected languages ( page . detected languages ) print blocks ( page . blocks , text ) print paragraphs ( page . paragraphs , text ) print lines ( page . lines , text ) print tokens ( page . tokens , text ) if page . symbols : print symbols ( page . symbols , text ) if page . image quality scores : print image quality scores ( page . image quality scores ) if page . visual elements : print visual elements ( page . visual elements , text ) def print page dimensions ( dimension : documentai .

### Enterprise Document OCR \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/enterprise-document-ocr](https://docs.cloud.google.com/document-ai/docs/enterprise-document-ocr)
- Source ID: `site-docs-root-2`
- Final score: 201
- Re-rank relevance: N/A

Evidence snippets:
- Convert document objects to Vision AI API format The Document AI Toolbox includes a tool that converts the Document AI API Document format to the Vision AI AnnotateFileResponse format, enabling users to compare the responses between the document OCR processor and Vision AI API.
- Here is an example of LaTeX representation: Image detected Conversion to LaTeX Input Enable by setting ProcessOptions.ocrConfig.premiumFeatures.enableMathOcr to true in the processing request. { "rawDocument" : { "mimeType" : " MIME TYPE " , "content" : " IMAGE CONTENT " }, "processOptions" : { "ocrConfig" : { "premiumFeatures" : { "enableMathOcr" : true } } } } Output The Math OCR output appears in Document.pages[].visualElements[] with "type": "math formula" . "visualElements" : [ { "layout" : { "textAnchor" : { "textSegments" : [ { "endIndex" : "46" } ] }, "confidence" : 1 , "boundingPoly" : { "normalizedVertices" : [ { "x" : 0.14662756 , "y" : 0.27891156 }, { "x" : 0.9032258 , "y" : 0.27891156 }, { "x" : 0.9032258 , "y" : 0.8027211 }, { "x" : 0.14662756 , "y" : 0.8027211 } ] }, "orientation" : "PAGE UP" }, "type" : "math formula" } ] You can check the full Document JSON output in this link .
- HTTP method and URL: POST https:// LOCATION -documentai.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /processors/ PROCESSOR ID /processorVersions/ PROCESSOR VERSION :process Request JSON body: { "skipHumanReview": skipHumanReview , "rawDocument": { "mimeType": " MIME TYPE ", "content": " IMAGE CONTENT " }, "fieldMask": " FIELD MASK ", "processOptions": { "ocrConfig": { "enableNativePdfParsing": ENABLE NATIVE PDF PARSING , "enableImageQualityScores": ENABLE IMAGE QUALITY SCORES , "enableSymbol": ENABLE SYMBOL , "disableCharacterBoxesDetection": DISABLE CHARACTER BOXES DETECTION , "hints": { "languageHints": [ " LANGUAGE HINTS " ] }, "advancedOcrOptions": [" ADVANCED OCR OPTIONS "], "premiumFeatures": { "enableSelectionMarkDetection": ENABLE SELECTION MARK DETECTION , "computeStyleInfo": COMPUTE STYLE INFO , "enableMathOcr": ENABLE MATH OCR , } }, "individualPageSelector" { "pages": [ INDIVIDUAL PAGES ] } } } To send your request, choose one of these options: curl Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- PremiumFeatures ( compute style info = True , enable math ocr = False , # Enable to use Math OCR Model enable selection mark detection = True , ), ) ) Online processing request to Document AI document = process document ( project id , location , processor id , processor version , file path , mime type , process options = process options , ) text = document . text print ( f "Full document text: { text } \n " ) print ( f "There are { len ( document . pages ) } page(s) in this document. \n " ) for page in document . pages : print ( f "Page { page . page number } :" ) print page dimensions ( page . dimension ) print detected languages ( page . detected languages ) print blocks ( page . blocks , text ) print paragraphs ( page . paragraphs , text ) print lines ( page . lines , text ) print tokens ( page . tokens , text ) if page . symbols : print symbols ( page . symbols , text ) if page . image quality scores : print image quality scores ( page . image quality scores ) if page . visual elements : print visual elements ( page . visual elements , text ) def print page dimensions ( dimension : documentai .

