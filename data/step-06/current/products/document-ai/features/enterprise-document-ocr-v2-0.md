---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:14:31.937Z"
product_name: "Document AI"
product_slug: "document-ai"
feature_name: "Enterprise Document OCR v2.0"
feature_slug: "enterprise-document-ocr-v2-0"
latest_feature_date: "2023-09-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/document-ai/docs/enterprise-document-ocr"
  - "https://docs.cloud.google.com/document-ai/docs/process-documents-ocr"
  - "https://docs.cloud.google.com/document-ai/docs/handle-response"
  - "https://docs.cloud.google.com/document-ai/docs/manage-processor-versions"
keywords:
  - "enterprise"
  - "document"
  - "ocr"
  - "v2"
  - "provides"
  - "an"
  - "upgraded"
  - "model"
---

# Enterprise Document OCR v2.0

Product: Document AI
Coverage: MEDIUM

## Step 02 Summary

Enterprise Document OCR v2.0 provides an upgraded OCR model with a visual-element detector for boxed characters.

## Extended Definition

Enterprise Document OCR v2.0 provides an upgraded OCR model with a visual-element detector for boxed characters.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/document-ai/docs/enterprise-document-ocr](https://docs.cloud.google.com/document-ai/docs/enterprise-document-ocr)
- [https://docs.cloud.google.com/document-ai/docs/process-documents-ocr](https://docs.cloud.google.com/document-ai/docs/process-documents-ocr)
- [https://docs.cloud.google.com/document-ai/docs/handle-response](https://docs.cloud.google.com/document-ai/docs/handle-response)
- [https://docs.cloud.google.com/document-ai/docs/manage-processor-versions](https://docs.cloud.google.com/document-ai/docs/manage-processor-versions)

## Supporting Pages

### Enterprise Document OCR \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/enterprise-document-ocr](https://docs.cloud.google.com/document-ai/docs/enterprise-document-ocr)
- Source ID: `site-docs-root-2`
- Final score: 292
- Re-rank relevance: N/A

Evidence snippets:
- Version ID Release channel Description pretrained-ocr-v1.2-2022-11-10 Stable Frozen model version of v1.0: Model files, configurations, and binaries of a version snapshot frozen in a container image for up to 18 months. pretrained-ocr-v2.0-2023-06-02 Stable Production-ready model specialized for document use cases.
- You can also use Enterprise Document OCR to handle tasks like the following: Digitizing text: Extract text and layout data from documents for search, rules-based, document-processing pipelines, or custom-model creation.
- PremiumFeatures ( compute style info = True , enable math ocr = False , # Enable to use Math OCR Model enable selection mark detection = True , ), ) ) Online processing request to Document AI document = process document ( project id , location , processor id , processor version , file path , mime type , process options = process options , ) text = document . text print ( f "Full document text: { text } \n " ) print ( f "There are { len ( document . pages ) } page(s) in this document. \n " ) for page in document . pages : print ( f "Page { page . page number } :" ) print page dimensions ( page . dimension ) print detected languages ( page . detected languages ) print blocks ( page . blocks , text ) print paragraphs ( page . paragraphs , text ) print lines ( page . lines , text ) print tokens ( page . tokens , text ) if page . symbols : print symbols ( page . symbols , text ) if page . image quality scores : print image quality scores ( page . image quality scores ) if page . visual elements : print visual elements ( page . visual elements , text ) def print page dimensions ( dimension : documentai .
- StyleInfo ) - > None : """ Only supported in version pretrained-ocr-v2.0-2023-06-02 """ print ( f " Font Size: { style info . font size } pt" ) print ( f " Font Type: { style info . font type } " ) print ( f " Bold: { style info . bold } " ) print ( f " Italic: { style info . italic } " ) print ( f " Underlined: { style info . underlined } " ) print ( f " Handwritten: { style info . handwritten } " ) print ( f " Text Color (RGBa): { style info . text color . red } , { style info . text color . green } , { style info . text color . blue } , { style info . text color . alpha } " ) def print visual elements ( visual elements : Sequence [ documentai .

### Enterprise Document OCR \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/process-documents-ocr](https://docs.cloud.google.com/document-ai/docs/process-documents-ocr)
- Source ID: `site-docs-root`
- Final score: 282
- Re-rank relevance: N/A

Evidence snippets:
- Version ID Release channel Description pretrained-ocr-v1.2-2022-11-10 Stable Frozen model version of v1.0: Model files, configurations, and binaries of a version snapshot frozen in a container image for up to 18 months. pretrained-ocr-v2.0-2023-06-02 Stable Production-ready model specialized for document use cases.
- You can also use Enterprise Document OCR to handle tasks like the following: Digitizing text: Extract text and layout data from documents for search, rules-based, document-processing pipelines, or custom-model creation.
- PremiumFeatures ( compute style info = True , enable math ocr = False , # Enable to use Math OCR Model enable selection mark detection = True , ), ) ) Online processing request to Document AI document = process document ( project id , location , processor id , processor version , file path , mime type , process options = process options , ) text = document . text print ( f "Full document text: { text } \n " ) print ( f "There are { len ( document . pages ) } page(s) in this document. \n " ) for page in document . pages : print ( f "Page { page . page number } :" ) print page dimensions ( page . dimension ) print detected languages ( page . detected languages ) print blocks ( page . blocks , text ) print paragraphs ( page . paragraphs , text ) print lines ( page . lines , text ) print tokens ( page . tokens , text ) if page . symbols : print symbols ( page . symbols , text ) if page . image quality scores : print image quality scores ( page . image quality scores ) if page . visual elements : print visual elements ( page . visual elements , text ) def print page dimensions ( dimension : documentai .
- StyleInfo ) - > None : """ Only supported in version pretrained-ocr-v2.0-2023-06-02 """ print ( f " Font Size: { style info . font size } pt" ) print ( f " Font Type: { style info . font type } " ) print ( f " Bold: { style info . bold } " ) print ( f " Italic: { style info . italic } " ) print ( f " Underlined: { style info . underlined } " ) print ( f " Handwritten: { style info . handwritten } " ) print ( f " Text Color (RGBa): { style info . text color . red } , { style info . text color . green } , { style info . text color . blue } , { style info . text color . alpha } " ) def print visual elements ( visual elements : Sequence [ documentai .

### Handle processing response \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/handle-response](https://docs.cloud.google.com/document-ai/docs/handle-response)
- Source ID: `site-docs-root-2`
- Final score: 250
- Re-rank relevance: N/A

Evidence snippets:
- Document . from batch process operation ( location = "us" , operation name = batch process operation ) wrapped document = wrapped documents [ 0 ] else : raise ValueError ( "No document source provided." ) For all properties and methods, refer to: https://cloud.google.com/python/docs/reference/documentai-toolbox/latest/google.cloud.documentai toolbox.wrappers.document.Document print ( "Document Successfully Loaded!" ) print ( f " \t Number of Pages: { len ( wrapped document . pages ) } " ) print ( f " \t Number of Entities: { len ( wrapped document . entities ) } " ) for page in wrapped document . pages : print ( f "Page { page . page number } " ) for block in page . blocks : print ( block . text ) for paragraph in page . paragraphs : print ( paragraph . text ) for line in page . lines : print ( line . text ) for token in page . tokens : print ( token . text ) Only supported with Form Parser processor https://cloud.google.com/document-ai/docs/form-parser for form field in page . form fields : print ( f " { form field . field name } : { form field . field value } " ) Only supported with Enterprise Document OCR version pretrained-ocr-v2.0-2023-06-02 https://cloud.google.com/document-ai/docs/process-documents-ocr#enable symbols for symbol in page . symbols : print ( symbol . text ) Only supported with Enterprise Document OCR version pretrained-ocr-v2.0-2023-06-02 https://cloud.google.com/document-ai/docs/process-documents-ocr#math ocr for math formula in page . math formulas : print ( math formula . text ) Only supported with Entity Extraction processors https://cloud.google.com/document-ai/docs/processors-list for entity in wrapped document . entities : print ( f " { entity . type } : { entity . mention text } " ) if entity . normalized text : print ( f " \t Normalized Text: { entity . normalized text } " ) Only supported with Layout Parser for chunk in wrapped document . chunks : print ( f "Chunk { chunk . chunk id } : { chunk . content } " ) for block in wrapped document . document layout blocks : print ( f "Document Layout Block { block . block id } " ) if block . text block : print ( f " { block . text block . type } : { block . text block . text } " ) if block . list block : print ( f " { block . list block . type } : { block . list block . list entries } " ) if block . table block : print ( block . table block . header rows , block . table block . body rows ) Tables from google.cloud.documentai toolbox import document TODO(developer): Uncomment these variables before running the sample.
- For more information on how to parse OCR data please see the OCR sample. text = document . text print ( f "Full document text: { repr ( text ) } \n " ) print ( f "There are { len ( document . pages ) } page(s) in this document." ) Read the form fields and tables output from the processor for page in document . pages : print ( f " \n\n Page { page . page number } " ) print ( f " \n Found { len ( page . tables ) } table(s):" ) for table in page . tables : num columns = len ( table . header rows [ 0 ] . cells ) num rows = len ( table . body rows ) print ( f "Table with { num columns } columns and { num rows } rows:" ) Print header rows print ( "Columns:" ) print table rows ( table . header rows , text ) Print body rows print ( "Table body data:" ) print table rows ( table . body rows , text ) print ( f " \n Found { len ( page . form fields ) } form field(s):" ) for field in page . form fields : name = layout to text ( field . field name , text ) value = layout to text ( field . field value , text ) print ( f " { repr ( name . strip ()) } : { repr ( value . strip ()) } " ) Supported in version pretrained-form-parser-v2.0-2022-11-10 and later.
- PremiumFeatures ( compute style info = True , enable math ocr = False , # Enable to use Math OCR Model enable selection mark detection = True , ), ) ) Online processing request to Document AI document = process document ( project id , location , processor id , processor version , file path , mime type , process options = process options , ) text = document . text print ( f "Full document text: { text } \n " ) print ( f "There are { len ( document . pages ) } page(s) in this document. \n " ) for page in document . pages : print ( f "Page { page . page number } :" ) print page dimensions ( page . dimension ) print detected languages ( page . detected languages ) print blocks ( page . blocks , text ) print paragraphs ( page . paragraphs , text ) print lines ( page . lines , text ) print tokens ( page . tokens , text ) if page . symbols : print symbols ( page . symbols , text ) if page . image quality scores : print image quality scores ( page . image quality scores ) if page . visual elements : print visual elements ( page . visual elements , text ) def print page dimensions ( dimension : documentai .
- Here's a PDF that is too dark and blurry to comfortably read: Download PDF Here's the document quality information as returned by the Enterprise Document OCR processor: { "pages" : [ { "imageQualityScores" : { "qualityScore" : 0.7811847 , "detectedDefects" : [ { "type" : "quality/defect document cutoff" , "confidence" : 1.0 }, { "type" : "quality/defect glare" , "confidence" : 0.97849524 }, { "type" : "quality/defect text cutoff" , "confidence" : 0.5 } ] } } ] } Code samples The following code samples demonstrate how to send a processing request and then read and print the fields to the terminal: Java For more information, see the Document AI Java API reference documentation .

### Managing processor versions \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/manage-processor-versions](https://docs.cloud.google.com/document-ai/docs/manage-processor-versions)
- Source ID: `site-docs-root-2`
- Final score: 222
- Re-rank relevance: N/A

Evidence snippets:
- Custom Extractor Release date Deprecation date pretrained-foundation-model-v1.5-2025-05-05 May 5, 2025 Not applicable pretrained-foundation-model-v1.5-pro-2025-06-20 June 20, 2025 Not applicable Form Parser Release date Deprecation date pretrained-form-parser-v1.0-2020-09-23 September 23, 2020 Not applicable pretrained-form-parser-v2.0-2022-11-10 November 10, 2022 Not applicable Layout Parser Release date Deprecation date pretrained-layout-parser-v1.0-2024-06-03 June 3, 2024 Not applicable Bank Statement Parser Release date Deprecation date pretrained-bankstatement-v1.0-2021-08-08 August 8, 2021 Not applicable pretrained-bankstatement-v1.1-2021-08-13 August 13, 2021 Not applicable pretrained-bankstatement-v2.0-2021-12-10 December 10, 2021 Not applicable pretrained-bankstatement-v3.0-2022-05-16 May 16, 2022 Not applicable pretrained-bankstatement-v5.0-2023-12-06 December 6, 2023 Not applicable W2 Parser Release date Deprecation date pretrained-w2-v1.0-2020-10-01 October 1, 2020 March 31, 2024 pretrained-w2-v1.1-2022-01-27 January 27, 2022 March 31, 2024 pretrained-w2-v1.2-2022-01-28 January 28, 2022 Not applicable pretrained-w2-v2.1-2022-06-08 June 8, 2022 Not applicable US Passport Parser Release date Deprecation date pretrained-us-passport-v1.0-2021-06-14 June 14, 2021 June 30, 2026 Utility Parser Release date Deprecation date pretrained-utility-v1.1-2021-04-09 April 9, 2021 June 30, 2026 Identity Document Proofing Parser Release date Deprecation date pretrained-id-proofing-v1.0-2022-10-03 October 3, 2022 Not applicable Pay Slip Parser Release date Deprecation date pretrained-paystub-v1.0-2021-03-19 March 19, 2021 Not applicable pretrained-paystub-v1.1-2021-08-13 August 13, 2021 Not applicable pretrained-paystub-v1.2-2021-12-10 December 10, 2021 Not applicable pretrained-paystub-v2.0-2022-07-22 July 22, 2022 Not applicable pretrained-paystub-v3.0-2023-12-06 December 6, 2023 Not applicable US Driver License Parser Release date Deprecation date pretrained-us-driver-license-v1.0-2021-06-14 June 14, 2021 Not applicable Expense Parser Release date Deprecation date pretrained-expense-v1.1-2021-04-09 April 9, 2024 Not applicable pretrained-expense-v1.4-2022-11-18 November 18, 2022 Not applicable pretrained-expense-v1.4.2-2024-09-12 September 12, 2024 Not applicable Invoice Parser Release date Deprecation date pretrained-invoice-v1.1-2021-04-09 April 9, 2024 Not applicable pretrained-invoice-v1.2-2022-02-18 February 18, 2022 Not applicable pretrained-invoice-v1.3-2022-07-15 July 15, 2022 Not applicable pretrained-invoice-v2.0-2023-12-06 December 6, 2023 Not applicable Summarizer Release date Deprecation date pretrained-foundation-model-v1.0-2023-08-22 August 22, 2023 June 30, 2026 Enterprise Document OCR (Optical Character Recognition) Release date Deprecation date pretrained-ocr-v1.2-2022-11-10 November 10, 2022 Not applicable pretrained-ocr-v2.0-2023-06-02 June 2, 2023 Not applicable pretrained-ocr-v2.1-2024-08-07 August 7, 2024 Not applicable Processor version lifecycle As soon as a new Google version is available, you should create and evaluate new user versions with the new base version.
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https:// LOCATION -documentai.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /processors/ PROCESSOR ID /processorVersions" Select-Object -Expand Content The response contains a list of ProcessorVersions , which contains information about each processor version such as its name , state , and other details. { "processorVersions": [ { "name": "projects/ PROJECT ID /locations/ LOCATION /processors/ PROCESSOR ID /processorVersions/pretrained-ocr-v1.1-2022-09-12", "displayName": "Google Release Candidate", "state": "DEPLOYED", "createTime": "2022-09-13T23:39:12.156648Z", "googleManaged": true }, { "name": "projects/ PROJECT ID /locations/ LOCATION /processors/ PROCESSOR ID /processorVersions/pretrained-ocr-v1.0-2020-09-23", "displayName": "Google Stable", "state": "DEPLOYED", "createTime": "2022-09-12T23:35:09.829557Z", "googleManaged": true, "deprecationInfo": { "deprecationTime": "1970-01-01T00:00:00Z" } } ] } C# For more information, see the Document AI C# API reference documentation .
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https:// LOCATION -documentai.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /processors/ PROCESSOR ID /processorVersions/ PROCESSOR VERSION " Select-Object -Expand Content The response is a ProcessorVersion , which contains information about the processor version such as its name , state , and other details. { "name": "projects/ PROJECT ID /locations/ LOCATION /processors/ PROCESSOR ID /processorVersions/pretrained-ocr-v1.1-2022-09-12", "displayName": "Google Release Candidate", "state": "DEPLOYED", "createTime": "2022-09-13T23:39:12.156648Z", "googleManaged": true } C# For more information, see the Document AI C# API reference documentation .
- Given that Document AI is powered by generative AI, future versions are using new foundation models so you can benefit from generative AI enhancements.

