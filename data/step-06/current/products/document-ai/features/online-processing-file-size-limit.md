---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:14:31.912Z"
product_name: "Document AI"
product_slug: "document-ai"
feature_name: "Online processing file size limit"
feature_slug: "online-processing-file-size-limit"
latest_feature_date: "2025-06-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/document-ai/docs/handle-response"
  - "https://docs.cloud.google.com/document-ai/docs/process-documents-ocr"
  - "https://docs.cloud.google.com/document-ai/docs/enterprise-document-ocr"
  - "https://docs.cloud.google.com/document-ai/docs/error-messages"
keywords:
  - "online"
  - "processing"
  - "file"
  - "size"
  - "limit"
  - "document"
  - "ai"
  - "requests"
---

# Online processing file size limit

Product: Document AI
Coverage: MEDIUM

## Step 02 Summary

Document AI online processing requests now accept files up to 40 MB; Document AI online processing requests now accept files up to 40 MB.

## Extended Definition

Document AI online processing requests now accept files up to 40 MB; Document AI online processing requests now accept files up to 40 MB.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/document-ai/docs/handle-response](https://docs.cloud.google.com/document-ai/docs/handle-response)
- [https://docs.cloud.google.com/document-ai/docs/process-documents-ocr](https://docs.cloud.google.com/document-ai/docs/process-documents-ocr)
- [https://docs.cloud.google.com/document-ai/docs/enterprise-document-ocr](https://docs.cloud.google.com/document-ai/docs/enterprise-document-ocr)
- [https://docs.cloud.google.com/document-ai/docs/error-messages](https://docs.cloud.google.com/document-ai/docs/error-messages)

## Supporting Pages

### Handle processing response \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/handle-response](https://docs.cloud.google.com/document-ai/docs/handle-response)
- Source ID: `site-docs-root-2`
- Final score: 287
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information, see Set up authentication for a local development environment . from typing import Optional , Sequence from google.api core.client options import ClientOptions from google.cloud import documentai TODO(developer): Uncomment these variables before running the sample. project id = "YOUR PROJECT ID" location = "YOUR PROCESSOR LOCATION" # Format is "us" or "eu" processor id = "YOUR PROCESSOR ID" # Create processor before running sample processor version = "rc" # Refer to https://cloud.google.com/document-ai/docs/manage-processor-versions for more information file path = "/path/to/local/pdf" mime type = "application/pdf" # Refer to https://cloud.google.com/document-ai/docs/file-types for supported file types def process document splitter sample ( project id : str , location : str , processor id : str , processor version : str , file path : str , mime type : str , ) - > None : Online processing request to Document AI document = process document ( project id , location , processor id , processor version , file path , mime type ) Read the splitter output from a document splitter/classifier processor: e.g. https://cloud.google.com/document-ai/docs/processors-list#processor procurement-document-splitter This processor only provides text for the document and information on how to split the document on logical boundaries.
- For more information, see Set up authentication for a local development environment . from typing import Optional , Sequence from google.api core.client options import ClientOptions from google.cloud import documentai TODO(developer): Uncomment these variables before running the sample. project id = "YOUR PROJECT ID" location = "YOUR PROCESSOR LOCATION" # Format is "us" or "eu" processor id = "YOUR PROCESSOR ID" # Create processor before running sample processor version = "rc" # Refer to https://cloud.google.com/document-ai/docs/manage-processor-versions for more information file path = "/path/to/local/pdf" mime type = "application/pdf" # Refer to https://cloud.google.com/document-ai/docs/file-types for supported file types def process document entity extraction sample ( project id : str , location : str , processor id : str , processor version : str , file path : str , mime type : str , ) - > None : Online processing request to Document AI document = process document ( project id , location , processor id , processor version , file path , mime type ) Print extracted entities from entity extraction processor output.
- PremiumFeatures ( compute style info = True , enable math ocr = False , # Enable to use Math OCR Model enable selection mark detection = True , ), ) ) Online processing request to Document AI document = process document ( project id , location , processor id , processor version , file path , mime type , process options = process options , ) text = document . text print ( f "Full document text: { text } \n " ) print ( f "There are { len ( document . pages ) } page(s) in this document. \n " ) for page in document . pages : print ( f "Page { page . page number } :" ) print page dimensions ( page . dimension ) print detected languages ( page . detected languages ) print blocks ( page . blocks , text ) print paragraphs ( page . paragraphs , text ) print lines ( page . lines , text ) print tokens ( page . tokens , text ) if page . symbols : print symbols ( page . symbols , text ) if page . image quality scores : print image quality scores ( page . image quality scores ) if page . visual elements : print visual elements ( page . visual elements , text ) def print page dimensions ( dimension : documentai .
- Given unprocessed documents in path gs://bucket/path/to/folder gcs bucket name = "bucket" gcs prefix = "path/to/folder" batch size = 50 def create batches sample ( gcs bucket name : str , gcs prefix : str , batch size : int = 50 , ) - > None : Creating batches of documents for processing batches = gcs utilities . create batches ( gcs bucket name = gcs bucket name , gcs prefix = gcs prefix , batch size = batch size ) print ( f " { len ( batches ) } batch(es) created." ) for batch in batches : print ( f " { len ( batch . gcs documents . documents ) } files in batch." ) print ( batch . gcs documents . documents ) Use as input for batch process documents() Refer to https://cloud.google.com/document-ai/docs/send-request for how to send a batch processing request request = documentai .

### Enterprise Document OCR \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/process-documents-ocr](https://docs.cloud.google.com/document-ai/docs/process-documents-ocr)
- Source ID: `site-docs-root`
- Final score: 275
- Re-rank relevance: N/A

Evidence snippets:
- PremiumFeatures ( compute style info = True , enable math ocr = False , # Enable to use Math OCR Model enable selection mark detection = True , ), ) ) Online processing request to Document AI document = process document ( project id , location , processor id , processor version , file path , mime type , process options = process options , ) text = document . text print ( f "Full document text: { text } \n " ) print ( f "There are { len ( document . pages ) } page(s) in this document. \n " ) for page in document . pages : print ( f "Page { page . page number } :" ) print page dimensions ( page . dimension ) print detected languages ( page . detected languages ) print blocks ( page . blocks , text ) print paragraphs ( page . paragraphs , text ) print lines ( page . lines , text ) print tokens ( page . tokens , text ) if page . symbols : print symbols ( page . symbols , text ) if page . image quality scores : print image quality scores ( page . image quality scores ) if page . visual elements : print visual elements ( page . visual elements , text ) def print page dimensions ( dimension : documentai .
- At the token (word) level, the following attributes are detected: Handwriting detection Font style Font size Font type Font color Font weight Letter spacing Bold Italic Underlined Text color ( RGBa ) Background color ( RGBa ) Input Enable by setting ProcessOptions.ocrConfig.premiumFeatures.computeStyleInfo to true in the processing request. { "rawDocument" : { "mimeType" : " MIME TYPE " , "content" : " IMAGE CONTENT " }, "processOptions" : { "ocrConfig" : { "premiumFeatures" : { "computeStyleInfo" : true } } } } Output The font-style output appears in Document.pages[].tokens[].styleInfo with type StyleInfo . "tokens" : [ { "styleInfo" : { "fontSize" : 3 , "pixelFontSize" : 13 , "fontType" : "SANS SERIF" , "bold" : true , "fontWeight" : 564 , "textColor" : { "red" : 0.16862746 , "green" : 0.16862746 , "blue" : 0.16862746 }, "backgroundColor" : { "red" : 0.98039216 , "green" : 0.9882353 , "blue" : 0.99215686 } } }, ... ] You can check the full Document JSON output in this link .
- For more information, see Set up authentication for a local development environment . from typing import Optional , Sequence from google.api core.client options import ClientOptions from google.cloud import documentai TODO(developer): Uncomment these variables before running the sample. project id = "YOUR PROJECT ID" location = "YOUR PROCESSOR LOCATION" # Format is "us" or "eu" processor id = "YOUR PROCESSOR ID" # Create processor before running sample processor version = "rc" # Refer to https://cloud.google.com/document-ai/docs/manage-processor-versions for more information file path = "/path/to/local/pdf" mime type = "application/pdf" # Refer to https://cloud.google.com/document-ai/docs/file-types for supported file types def process document ocr sample ( project id : str , location : str , processor id : str , processor version : str , file path : str , mime type : str , ) - > None : Optional: Additional configurations for Document OCR Processor.
- VisualElement ], text : str ) - > None : """ Only supported in version pretrained-ocr-v2.0-2023-06-02 """ checkboxes = [ x for x in visual elements if "checkbox" in x . type ] math symbols = [ x for x in visual elements if x . type == "math formula" ] if checkboxes : print ( f " { len ( checkboxes ) } checkboxes detected:" ) print ( f " First checkbox: { repr ( checkboxes [ 0 ] . type ) } " ) print ( f " Last checkbox: { repr ( checkboxes [ - 1 ] . type ) } " ) if math symbols : print ( f " { len ( math symbols ) } math symbols detected:" ) first math symbol text = layout to text ( math symbols [ 0 ] . layout , text ) print ( f " First math symbol: { repr ( first math symbol text ) } " ) def process document ( project id : str , location : str , processor id : str , processor version : str , file path : str , mime type : str , process options : Optional [ documentai .

### Enterprise Document OCR \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/enterprise-document-ocr](https://docs.cloud.google.com/document-ai/docs/enterprise-document-ocr)
- Source ID: `site-docs-root-2`
- Final score: 275
- Re-rank relevance: N/A

Evidence snippets:
- PremiumFeatures ( compute style info = True , enable math ocr = False , # Enable to use Math OCR Model enable selection mark detection = True , ), ) ) Online processing request to Document AI document = process document ( project id , location , processor id , processor version , file path , mime type , process options = process options , ) text = document . text print ( f "Full document text: { text } \n " ) print ( f "There are { len ( document . pages ) } page(s) in this document. \n " ) for page in document . pages : print ( f "Page { page . page number } :" ) print page dimensions ( page . dimension ) print detected languages ( page . detected languages ) print blocks ( page . blocks , text ) print paragraphs ( page . paragraphs , text ) print lines ( page . lines , text ) print tokens ( page . tokens , text ) if page . symbols : print symbols ( page . symbols , text ) if page . image quality scores : print image quality scores ( page . image quality scores ) if page . visual elements : print visual elements ( page . visual elements , text ) def print page dimensions ( dimension : documentai .
- At the token (word) level, the following attributes are detected: Handwriting detection Font style Font size Font type Font color Font weight Letter spacing Bold Italic Underlined Text color ( RGBa ) Background color ( RGBa ) Input Enable by setting ProcessOptions.ocrConfig.premiumFeatures.computeStyleInfo to true in the processing request. { "rawDocument" : { "mimeType" : " MIME TYPE " , "content" : " IMAGE CONTENT " }, "processOptions" : { "ocrConfig" : { "premiumFeatures" : { "computeStyleInfo" : true } } } } Output The font-style output appears in Document.pages[].tokens[].styleInfo with type StyleInfo . "tokens" : [ { "styleInfo" : { "fontSize" : 3 , "pixelFontSize" : 13 , "fontType" : "SANS SERIF" , "bold" : true , "fontWeight" : 564 , "textColor" : { "red" : 0.16862746 , "green" : 0.16862746 , "blue" : 0.16862746 }, "backgroundColor" : { "red" : 0.98039216 , "green" : 0.9882353 , "blue" : 0.99215686 } } }, ... ] You can check the full Document JSON output in this link .
- For more information, see Set up authentication for a local development environment . from typing import Optional , Sequence from google.api core.client options import ClientOptions from google.cloud import documentai TODO(developer): Uncomment these variables before running the sample. project id = "YOUR PROJECT ID" location = "YOUR PROCESSOR LOCATION" # Format is "us" or "eu" processor id = "YOUR PROCESSOR ID" # Create processor before running sample processor version = "rc" # Refer to https://cloud.google.com/document-ai/docs/manage-processor-versions for more information file path = "/path/to/local/pdf" mime type = "application/pdf" # Refer to https://cloud.google.com/document-ai/docs/file-types for supported file types def process document ocr sample ( project id : str , location : str , processor id : str , processor version : str , file path : str , mime type : str , ) - > None : Optional: Additional configurations for Document OCR Processor.
- VisualElement ], text : str ) - > None : """ Only supported in version pretrained-ocr-v2.0-2023-06-02 """ checkboxes = [ x for x in visual elements if "checkbox" in x . type ] math symbols = [ x for x in visual elements if x . type == "math formula" ] if checkboxes : print ( f " { len ( checkboxes ) } checkboxes detected:" ) print ( f " First checkbox: { repr ( checkboxes [ 0 ] . type ) } " ) print ( f " Last checkbox: { repr ( checkboxes [ - 1 ] . type ) } " ) if math symbols : print ( f " { len ( math symbols ) } math symbols detected:" ) first math symbol text = layout to text ( math symbols [ 0 ] . layout , text ) print ( f " First math symbol: { repr ( first math symbol text ) } " ) def process document ( project id : str , location : str , processor id : str , processor version : str , file path : str , mime type : str , process options : Optional [ documentai .

### Error messages \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/error-messages](https://docs.cloud.google.com/document-ai/docs/error-messages)
- Source ID: `site-docs-root`
- Final score: 255
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This error message is applicable to legacy processors. message : "Unable to find a document of type: 'foo'" details { [ type.googleapis.com / google.rpc.ErrorInfo ] { reason : "DOCUMENT OF TYPE NOT FOUND" domain : "documentai.googleapis.com" } } Document size limit exceeded When the upper limit for the file size of a document has been exceeded while importing dataset or while running prediction. message : "Document size (2) exceeds limit: 1 (bytes)." details { [ type.googleapis.com / google.rpc.ErrorInfo ] { reason : "DOCUMENT SIZE LIMIT EXCEEDED" domain : "documentai.googleapis.com" metadata { key : "limit" value : "1" } metadata { key : "size" value : "2" } } } Document limit exceeded When the upper limit for the count of documents has been exceeded. message : "Document count exceed the limit: 5 got 6" details { [ type.googleapis.com / google.rpc.ErrorInfo ] { reason : "DOCUMENT LIMIT EXCEEDED" domain : "documentai.googleapis.com" metadata { key : "document limit" value : "5" } metadata { key : "documents" value : "6" } } } Unsupported MIME type When an unsupported MIME type was provided.
- Ensure the max is greater than the min." details { [ type.googleapis.com / google.rpc.ErrorInfo ] { reason : "DOCUMENT SPAN INVALID" domain : "documentai.googleapis.com" metadata { key : "span" value : "Character" } } } Invalid UTF-8 document When a document that includes invalid UTF-8 is provided. message : "Document contains invalid UTF-8 text." details { [ type.googleapis.com / google.rpc.ErrorInfo ] { reason : "DOCUMENT INVALID UTF 8" domain : "documentai.googleapis.com" metadata { key : "bytes" value : "[2, 3)" } } } Dataset schema is invalid When a processor doesn't have a valid union schema or the given dataset schema is not valid. message : "The processor has an empty or invalid schema: " details { [ type.googleapis.com / google.rpc.ErrorInfo ] { reason : "INVALID SCHEMA ERROR" domain : "documentai.googleapis.com" } } OcrConfig Unsupported When a processing request is issued for a processor which does not support OcrConfig. message : "OcrConfig is not supported for processor type: 'foo'." details { [ type.googleapis.com / google.rpc.ErrorInfo ] { reason : "OCR CONFIG UNSUPPORTED" domain : "documentai.googleapis.com" } } Invalid Import Config When the import config is invalid. message : "The import config is invalid: foo" details { [ type.googleapis.com / google.rpc.ErrorInfo ] { reason : "INVALID IMPORT CONFIG" domain : "documentai.googleapis.com" } } Source processor version is invalid When attempting to import a processor version , the source processor version is not valid to be imported. message : "The source processor version is invalid in import processor version." details { [ type.googleapis.com / google.rpc.ErrorInfo ] { reason : "INVALID SOURCE PROCESSOR VERSION ERROR" domain : "documentai.googleapis.com" } } Invalid chunk size When the chunk size config is invalid. message : "Invalid chunk size.
- If the file format is not supported, you see the following error message: message : "INVALID ARGUMENT: Unsupported MIME type: 'foo'." details { [ type.googleapis.com / google.rpc.ErrorInfo ] { reason : "UNSUPPORTED MIME TYPE" domain : "documentai.googleapis.com" metadata { key : "mime type" value : "foo" } } } No pages When a document with no pages was provided, but one or more pages are required. message : "No pages were found in the document." details { [ type.googleapis.com / google.rpc.ErrorInfo ] { reason : "NO PAGES" domain : "documentai.googleapis.com" } } Negative page number When a document lists a negative value for one of its page numbers. message : "Page number cannot be negative." details { [ type.googleapis.com / google.rpc.ErrorInfo ] { reason : "NEGATIVE PAGE NUMBER" domain : "documentai.googleapis.com" } } Duplicate page numbers When a document lists the same page number one or more times. message : "Duplicate page number detected (page numbers to indices): [{1, [1, 2]}, {4, [4, 5]}]." details { [ type.googleapis.com / google.rpc.ErrorInfo ] { reason : "DUPLICATE PAGE NUMBERS" domain : "documentai.googleapis.com" metadata { key : "page number to indices" value : "[{1, [1, 2]}, {4, [4, 5]}]" } } } Page limit exceeded When the upper limit of a document's total number of pages is exceeded.
- Requested chunk size (${CHUNK SIZE}) must be in the range of [${MIN CHUNK SIZE}, ${MAX CHUNK SIZE}]." details { [ type.googleapis.com / google.rpc.ErrorInfo ] { reason : "INVALID ARGUMENT" domain : "documentai.googleapis.com" } } Document prompt size limit exceeded When document prompt symbol number is greater than limit. message : "Document prompt must be at most ${MAX DOCUMENT PROMPT LENGTH} characters." Document prompt not available for processor type When document prompt is not empty in schema which is being assigned to non eligible processor type. message : "Document prompt is not supported for processor type: ${PROCESSOR TYPE}" Failed precondition The resolution requires a few steps to be carried out as outlined in the error message.

