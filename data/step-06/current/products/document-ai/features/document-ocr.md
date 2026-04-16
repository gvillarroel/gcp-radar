---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:14:32.071Z"
product_name: "Document AI"
product_slug: "document-ai"
feature_name: "Document OCR"
feature_slug: "document-ocr"
latest_feature_date: "2020-10-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/document-ai/docs/process-documents-ocr"
  - "https://docs.cloud.google.com/document-ai/docs/enterprise-document-ocr"
  - "https://docs.cloud.google.com/document-ai/docs/layout-parse-chunk"
  - "https://docs.cloud.google.com/document-ai/docs/fields"
keywords:
  - "document"
  - "ocr"
  - "extracts"
  - "text"
  - "from"
  - "scanned"
  - "documents"
---

# Document OCR

Product: Document AI
Coverage: MEDIUM

## Step 02 Summary

Document OCR extracts text from scanned documents.

## Extended Definition

Document OCR extracts text from scanned documents.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/document-ai/docs/process-documents-ocr](https://docs.cloud.google.com/document-ai/docs/process-documents-ocr)
- [https://docs.cloud.google.com/document-ai/docs/enterprise-document-ocr](https://docs.cloud.google.com/document-ai/docs/enterprise-document-ocr)
- [https://docs.cloud.google.com/document-ai/docs/layout-parse-chunk](https://docs.cloud.google.com/document-ai/docs/layout-parse-chunk)
- [https://docs.cloud.google.com/document-ai/docs/fields](https://docs.cloud.google.com/document-ai/docs/fields)

## Supporting Pages

### Enterprise Document OCR \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/process-documents-ocr](https://docs.cloud.google.com/document-ai/docs/process-documents-ocr)
- Source ID: `site-docs-root`
- Final score: 328
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Supported layout detection and extraction attributes: Printed text Handwriting Paragraph Block Line Word Symbol-level Page number Default Default Default Default Default Default Configurable Default Configurable Enterprise Document OCR features include the following: Extract embedded or native text from digital PDFs: This feature extracts text and symbols exactly as they appear in the source documents, even for rotated texts, extreme font sizes or styles, and partially hidden text.
- Input Enable by setting ProcessOptions.ocrConfig.advancedOcrOptions to ["legacy layout"] in the processing request. { "rawDocument" : { "mimeType" : " MIME TYPE " , "content" : " IMAGE CONTENT " }, "processOptions" : { "ocrConfig" : { "advancedOcrOptions" : [ "legacy layout" ] } } } Specify a page range By default, OCR extracts text and layout information from all pages in the documents.
- You can also use Enterprise Document OCR to handle tasks like the following: Digitizing text: Extract text and layout data from documents for search, rules-based, document-processing pipelines, or custom-model creation.
- You can use Enterprise Document OCR as part of Document AI to detect and extract text and layout information from various documents.

### Enterprise Document OCR \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/enterprise-document-ocr](https://docs.cloud.google.com/document-ai/docs/enterprise-document-ocr)
- Source ID: `site-docs-root-2`
- Final score: 318
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Supported layout detection and extraction attributes: Printed text Handwriting Paragraph Block Line Word Symbol-level Page number Default Default Default Default Default Default Configurable Default Configurable Enterprise Document OCR features include the following: Extract embedded or native text from digital PDFs: This feature extracts text and symbols exactly as they appear in the source documents, even for rotated texts, extreme font sizes or styles, and partially hidden text.
- Input Enable by setting ProcessOptions.ocrConfig.advancedOcrOptions to ["legacy layout"] in the processing request. { "rawDocument" : { "mimeType" : " MIME TYPE " , "content" : " IMAGE CONTENT " }, "processOptions" : { "ocrConfig" : { "advancedOcrOptions" : [ "legacy layout" ] } } } Specify a page range By default, OCR extracts text and layout information from all pages in the documents.
- You can also use Enterprise Document OCR to handle tasks like the following: Digitizing text: Extract text and layout data from documents for search, rules-based, document-processing pipelines, or custom-model creation.
- You can use Enterprise Document OCR as part of Document AI to detect and extract text and layout information from various documents.

### "Process documents with Gemini layout parser \_|\_ Document AI \_|\_ Google\

- URL: [https://docs.cloud.google.com/document-ai/docs/layout-parse-chunk](https://docs.cloud.google.com/document-ai/docs/layout-parse-chunk)
- Source ID: `site-docs-root-2`
- Final score: 220
- Re-rank relevance: N/A

Evidence snippets:
- Primary use cases Document OCR: It can parse text and layout elements like heading, header, footer, table structure and figures from PDF documents.
- Process documents with Gemini layout parser The Document AI layout parser is an advanced text parsing and document understanding service that converts unstructured content from complex files into highly structured, precise and machine-readable information.
- It's designed to solve a critical problem for Search and Retrieval Augmented Generation (RAG): standard OCR flattens documents, destroying the very context and structure that adds valuable meaning, like headings, tables, and lists.
- Reduced hallucinations Unlike pure LLM-based parsers that try to read text that isn't there, Gemini layout parser's foundation in advanced OCR grounds it in the document's actual content.

### Processor list \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/fields](https://docs.cloud.google.com/document-ai/docs/fields)
- Source ID: `site-docs-reference`
- Final score: 216
- Re-rank relevance: N/A

Evidence snippets:
- More information Custom Extractor Form Parser Description Extract general key-value pairs (entity and checkbox), tables, and generic entities from documents in addition to OCR text.
- Category Pretrained Functions OCR, Entity Extraction Release stage General availability Access status Public lock open Type in API PAYSTUB PROCESSOR Notes If the multi-page input document contains more than one valid pay slips, the processor extracts entities from only the first valid pay slip.
- More information Enterprise Document OCR Extract entities from documents Refer to Sample datasets for sample labeled and unlabeled datasets to use for training.
- Digitize text Enterprise Document OCR (Optical Character Recognition) Description Identify and extract text in different types of documents.

