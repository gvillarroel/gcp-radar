---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:14:31.970Z"
product_name: "Document AI"
product_slug: "document-ai"
feature_name: "Document OCR native text from digital PDF"
feature_slug: "document-ocr-native-text-from-digital-pdf"
latest_feature_date: "2023-06-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/document-ai/docs/process-documents-ocr"
  - "https://docs.cloud.google.com/document-ai/docs/enterprise-document-ocr"
  - "https://docs.cloud.google.com/document-ai/docs/fields"
  - "https://docs.cloud.google.com/document-ai/docs/languages"
keywords:
  - "document"
  - "ocr"
  - "native"
  - "text"
  - "from"
  - "digital"
  - "pdf"
  - "now"
---

# Document OCR native text from digital PDF

Product: Document AI
Coverage: MEDIUM

## Step 02 Summary

Document OCR now extracts native text from digital PDF files.

## Extended Definition

Document OCR now extracts native text from digital PDF files.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/document-ai/docs/process-documents-ocr](https://docs.cloud.google.com/document-ai/docs/process-documents-ocr)
- [https://docs.cloud.google.com/document-ai/docs/enterprise-document-ocr](https://docs.cloud.google.com/document-ai/docs/enterprise-document-ocr)
- [https://docs.cloud.google.com/document-ai/docs/fields](https://docs.cloud.google.com/document-ai/docs/fields)
- [https://docs.cloud.google.com/document-ai/docs/languages](https://docs.cloud.google.com/document-ai/docs/languages)

## Supporting Pages

### Enterprise Document OCR \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/process-documents-ocr](https://docs.cloud.google.com/document-ai/docs/process-documents-ocr)
- Source ID: `site-docs-root`
- Final score: 295
- Re-rank relevance: N/A

Evidence snippets:
- Supported layout detection and extraction attributes: Printed text Handwriting Paragraph Block Line Word Symbol-level Page number Default Default Default Default Default Default Configurable Default Configurable Enterprise Document OCR features include the following: Extract embedded or native text from digital PDFs: This feature extracts text and symbols exactly as they appear in the source documents, even for rotated texts, extreme font sizes or styles, and partially hidden text.
- Input Enable by setting ProcessOptions.ocrConfig.enableNativePdfParsing to true in the processing request. { "rawDocument" : { "mimeType" : " MIME TYPE " , "content" : " IMAGE CONTENT " }, "processOptions" : { "ocrConfig" : { "enableNativePdfParsing" : true } } } Character-in-the-box detection By default, Enterprise Document OCR has a detector enabled to improve text-extraction quality of characters that sit within a box.
- Example: text,entities,pages.pageNumber OCR configurations ENABLE NATIVE PDF PARSING : (Boolean) Extracts embedded text from PDFs, if available.
- HTTP method and URL: POST https:// LOCATION -documentai.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /processors/ PROCESSOR ID /processorVersions/ PROCESSOR VERSION :process Request JSON body: { "skipHumanReview": skipHumanReview , "rawDocument": { "mimeType": " MIME TYPE ", "content": " IMAGE CONTENT " }, "fieldMask": " FIELD MASK ", "processOptions": { "ocrConfig": { "enableNativePdfParsing": ENABLE NATIVE PDF PARSING , "enableImageQualityScores": ENABLE IMAGE QUALITY SCORES , "enableSymbol": ENABLE SYMBOL , "disableCharacterBoxesDetection": DISABLE CHARACTER BOXES DETECTION , "hints": { "languageHints": [ " LANGUAGE HINTS " ] }, "advancedOcrOptions": [" ADVANCED OCR OPTIONS "], "premiumFeatures": { "enableSelectionMarkDetection": ENABLE SELECTION MARK DETECTION , "computeStyleInfo": COMPUTE STYLE INFO , "enableMathOcr": ENABLE MATH OCR , } }, "individualPageSelector" { "pages": [ INDIVIDUAL PAGES ] } } } To send your request, choose one of these options: curl Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .

### Enterprise Document OCR \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/enterprise-document-ocr](https://docs.cloud.google.com/document-ai/docs/enterprise-document-ocr)
- Source ID: `site-docs-root-2`
- Final score: 295
- Re-rank relevance: N/A

Evidence snippets:
- Supported layout detection and extraction attributes: Printed text Handwriting Paragraph Block Line Word Symbol-level Page number Default Default Default Default Default Default Configurable Default Configurable Enterprise Document OCR features include the following: Extract embedded or native text from digital PDFs: This feature extracts text and symbols exactly as they appear in the source documents, even for rotated texts, extreme font sizes or styles, and partially hidden text.
- Input Enable by setting ProcessOptions.ocrConfig.enableNativePdfParsing to true in the processing request. { "rawDocument" : { "mimeType" : " MIME TYPE " , "content" : " IMAGE CONTENT " }, "processOptions" : { "ocrConfig" : { "enableNativePdfParsing" : true } } } Character-in-the-box detection By default, Enterprise Document OCR has a detector enabled to improve text-extraction quality of characters that sit within a box.
- Example: text,entities,pages.pageNumber OCR configurations ENABLE NATIVE PDF PARSING : (Boolean) Extracts embedded text from PDFs, if available.
- HTTP method and URL: POST https:// LOCATION -documentai.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /processors/ PROCESSOR ID /processorVersions/ PROCESSOR VERSION :process Request JSON body: { "skipHumanReview": skipHumanReview , "rawDocument": { "mimeType": " MIME TYPE ", "content": " IMAGE CONTENT " }, "fieldMask": " FIELD MASK ", "processOptions": { "ocrConfig": { "enableNativePdfParsing": ENABLE NATIVE PDF PARSING , "enableImageQualityScores": ENABLE IMAGE QUALITY SCORES , "enableSymbol": ENABLE SYMBOL , "disableCharacterBoxesDetection": DISABLE CHARACTER BOXES DETECTION , "hints": { "languageHints": [ " LANGUAGE HINTS " ] }, "advancedOcrOptions": [" ADVANCED OCR OPTIONS "], "premiumFeatures": { "enableSelectionMarkDetection": ENABLE SELECTION MARK DETECTION , "computeStyleInfo": COMPUTE STYLE INFO , "enableMathOcr": ENABLE MATH OCR , } }, "individualPageSelector" { "pages": [ INDIVIDUAL PAGES ] } } } To send your request, choose one of these options: curl Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .

### Processor list \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/fields](https://docs.cloud.google.com/document-ai/docs/fields)
- Source ID: `site-docs-reference`
- Final score: 211
- Re-rank relevance: N/A

Evidence snippets:
- Same model as v2.0 with native text extraction from digital PDF files enabled.
- More information Custom Extractor Form Parser Description Extract general key-value pairs (entity and checkbox), tables, and generic entities from documents in addition to OCR text.
- Category Pretrained Functions OCR, Entity Extraction Release stage General availability Access status Public lock open Type in API PAYSTUB PROCESSOR Notes If the multi-page input document contains more than one valid pay slips, the processor extracts entities from only the first valid pay slip.
- More information Enterprise Document OCR Extract entities from documents Refer to Sample datasets for sample labeled and unlabeled datasets to use for training.

### Processor list \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/languages](https://docs.cloud.google.com/document-ai/docs/languages)
- Source ID: `site-docs-reference`
- Final score: 211
- Re-rank relevance: N/A

Evidence snippets:
- Same model as v2.0 with native text extraction from digital PDF files enabled.
- More information Custom Extractor Form Parser Description Extract general key-value pairs (entity and checkbox), tables, and generic entities from documents in addition to OCR text.
- Category Pretrained Functions OCR, Entity Extraction Release stage General availability Access status Public lock open Type in API PAYSTUB PROCESSOR Notes If the multi-page input document contains more than one valid pay slips, the processor extracts entities from only the first valid pay slip.
- More information Enterprise Document OCR Extract entities from documents Refer to Sample datasets for sample labeled and unlabeled datasets to use for training.

