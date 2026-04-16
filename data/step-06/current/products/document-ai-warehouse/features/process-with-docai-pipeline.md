---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:05:15.509Z"
product_name: "Document AI Warehouse"
product_slug: "document-ai-warehouse"
feature_name: "Process with DocAI pipeline"
feature_slug: "process-with-docai-pipeline"
latest_feature_date: "2023-03-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/document-warehouse/docs"
  - "https://docs.cloud.google.com/document-warehouse/docs/overview"
  - "https://docs.cloud.google.com/document-ai/docs/process-documents-ocr"
keywords:
  - "process"
  - "docai"
  - "pipeline"
  - "processes"
  - "documents"
  - "document"
  - "ai"
  - "part"
---

# Process with DocAI pipeline

Product: Document AI Warehouse
Coverage: MEDIUM

## Step 02 Summary

Processes documents with Document AI as part of the pipeline.

## Extended Definition

Processes documents with Document AI as part of the pipeline.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/document-warehouse/docs](https://docs.cloud.google.com/document-warehouse/docs)
- [https://docs.cloud.google.com/document-warehouse/docs/overview](https://docs.cloud.google.com/document-warehouse/docs/overview)
- [https://docs.cloud.google.com/document-ai/docs/process-documents-ocr](https://docs.cloud.google.com/document-ai/docs/process-documents-ocr)

## Supporting Pages

### Document AI Warehouse overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-warehouse/docs/overview](https://docs.cloud.google.com/document-warehouse/docs/overview)
- Source ID: `site-api-reference`
- Final score: 140
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Migrate vs Federate flexibility : The product supports a flexible architecture such that your document content can be migrated to Document AI Warehouse or stay-in-place if there are constraints in migrating content (we simply index the content and metadata) Integrated with Document Workflows - this integrates with Google Workflows and other document processing workflows by supporting: Properties - that represent the state of a document in a workflow and APIs that workflows can use to update the state of documents Doc Explorer interface - to track the progress of documents through a workflow pipeline, enabling a human to inspect, manage failures and stalled documents in the workflow pipeline.
- Managing batch Document AI pipelines : Document AI Warehouse integrates with Workflows to provide templates that process batch pipelines of documents through Document AI extraction and classification.
- Doc extractors (DocAI and others) Documents may be extracted by an AI pipeline, so that the extractions can be ingested and managed in Document AI Warehouse (as Metadata) along with the Raw Document.
- Users can search for documents within a folder hierarchy e.g. search within AllLoans->State UI - the product includes Web-accessible UI with the following features: Doc Explorer: search documents, filter search results, select documents to bulk-update properties or delete Doc Viewer: view documents, view/update its properties,assign ACLs, add to folders Upload: upload documents and run them through a DocAI extractor (either OCR or a supported specialized parser such as Invoice DocAI).

### Document AI Warehouse overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-warehouse/docs](https://docs.cloud.google.com/document-warehouse/docs)
- Source ID: `site-api-reference`
- Final score: 140
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Migrate vs Federate flexibility : The product supports a flexible architecture such that your document content can be migrated to Document AI Warehouse or stay-in-place if there are constraints in migrating content (we simply index the content and metadata) Integrated with Document Workflows - this integrates with Google Workflows and other document processing workflows by supporting: Properties - that represent the state of a document in a workflow and APIs that workflows can use to update the state of documents Doc Explorer interface - to track the progress of documents through a workflow pipeline, enabling a human to inspect, manage failures and stalled documents in the workflow pipeline.
- Managing batch Document AI pipelines : Document AI Warehouse integrates with Workflows to provide templates that process batch pipelines of documents through Document AI extraction and classification.
- Doc extractors (DocAI and others) Documents may be extracted by an AI pipeline, so that the extractions can be ingested and managed in Document AI Warehouse (as Metadata) along with the Raw Document.
- Users can search for documents within a folder hierarchy e.g. search within AllLoans->State UI - the product includes Web-accessible UI with the following features: Doc Explorer: search documents, filter search results, select documents to bulk-update properties or delete Doc Viewer: view documents, view/update its properties,assign ACLs, add to folders Upload: upload documents and run them through a DocAI extractor (either OCR or a supported specialized parser such as Invoice DocAI).

### Enterprise Document OCR \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/process-documents-ocr](https://docs.cloud.google.com/document-ai/docs/process-documents-ocr)
- Source ID: `site-docs-root`
- Final score: 117
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can also use Enterprise Document OCR to handle tasks like the following: Digitizing text: Extract text and layout data from documents for search, rules-based, document-processing pipelines, or custom-model creation.
- Supported layout detection and extraction attributes: Printed text Handwriting Paragraph Block Line Word Symbol-level Page number Default Default Default Default Default Default Configurable Default Configurable Enterprise Document OCR features include the following: Extract embedded or native text from digital PDFs: This feature extracts text and symbols exactly as they appear in the source documents, even for rotated texts, extreme font sizes or styles, and partially hidden text.
- Input Enable by setting ProcessOptions.ocrConfig.advancedOcrOptions to ["legacy layout"] in the processing request. { "rawDocument" : { "mimeType" : " MIME TYPE " , "content" : " IMAGE CONTENT " }, "processOptions" : { "ocrConfig" : { "advancedOcrOptions" : [ "legacy layout" ] } } } Specify a page range By default, OCR extracts text and layout information from all pages in the documents.
- OCR configurations All OCR configurations can be enabled by setting the respective fields in ProcessOptions.ocrConfig in the ProcessDocumentRequest or BatchProcessDocumentsRequest .

