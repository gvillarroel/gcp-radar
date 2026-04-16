---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:05:15.507Z"
product_name: "Document AI Warehouse"
product_slug: "document-ai-warehouse"
feature_name: "TIFF file support"
feature_slug: "tiff-file-support"
latest_feature_date: "2023-03-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/document-warehouse/docs/overview"
  - "https://docs.cloud.google.com/document-warehouse/docs"
  - "https://docs.cloud.google.com/document-ai/docs/file-types"
keywords:
  - "tiff"
  - "file"
  - "allows"
  - "users"
  - "upload"
  - "view"
  - "files"
  - "ui"
---

# TIFF file support

Product: Document AI Warehouse
Coverage: MEDIUM

## Step 02 Summary

Allows users to upload and view TIFF files in the UI.

## Extended Definition

Allows users to upload and view TIFF files in the UI.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/document-warehouse/docs/overview](https://docs.cloud.google.com/document-warehouse/docs/overview)
- [https://docs.cloud.google.com/document-warehouse/docs](https://docs.cloud.google.com/document-warehouse/docs)
- [https://docs.cloud.google.com/document-ai/docs/file-types](https://docs.cloud.google.com/document-ai/docs/file-types)

## Supporting Pages

### Document AI Warehouse overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-warehouse/docs/overview](https://docs.cloud.google.com/document-warehouse/docs/overview)
- Source ID: `site-api-reference`
- Final score: 166
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Users can search for documents within a folder hierarchy e.g. search within AllLoans->State UI - the product includes Web-accessible UI with the following features: Doc Explorer: search documents, filter search results, select documents to bulk-update properties or delete Doc Viewer: view documents, view/update its properties,assign ACLs, add to folders Upload: upload documents and run them through a DocAI extractor (either OCR or a supported specialized parser such as Invoice DocAI).
- Integrated with DocAI : Document AI Warehouse is integrated with Document AI processors at several levels: Document AI processing in UI : Document AI Warehouse UI enables users to upload either scanned PDFs/TIFFs or special document types, both of which are automatically extracted by Document AI OCR or specialized processors respectively before the document is indexed into Document AI Warehouse.
- Files supported - Text PDFs, Images (scanned PDFs, TIFF files, JPEG files), Office (DOCX, PPTX, XLSX) files - run through OCR and indexed.
- Governance : integrated with IAM and corporate directories Fine-grained Access Control (permissions) at the document and folder levels can be assigned to users and groups to view, edit, manage (share, delete) documents.

### Document AI Warehouse overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-warehouse/docs](https://docs.cloud.google.com/document-warehouse/docs)
- Source ID: `site-api-reference`
- Final score: 156
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Users can search for documents within a folder hierarchy e.g. search within AllLoans->State UI - the product includes Web-accessible UI with the following features: Doc Explorer: search documents, filter search results, select documents to bulk-update properties or delete Doc Viewer: view documents, view/update its properties,assign ACLs, add to folders Upload: upload documents and run them through a DocAI extractor (either OCR or a supported specialized parser such as Invoice DocAI).
- Integrated with DocAI : Document AI Warehouse is integrated with Document AI processors at several levels: Document AI processing in UI : Document AI Warehouse UI enables users to upload either scanned PDFs/TIFFs or special document types, both of which are automatically extracted by Document AI OCR or specialized processors respectively before the document is indexed into Document AI Warehouse.
- Files supported - Text PDFs, Images (scanned PDFs, TIFF files, JPEG files), Office (DOCX, PPTX, XLSX) files - run through OCR and indexed.
- Governance : integrated with IAM and corporate directories Fine-grained Access Control (permissions) at the document and folder levels can be assigned to users and groups to view, edit, manage (share, delete) documents.

### Supported Files \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/file-types](https://docs.cloud.google.com/document-ai/docs/file-types)
- Source ID: `site-docs-root`
- Final score: 120
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Name File Extension(s) MIME Type Portable Document Format (PDF) .pdf application/pdf Graphics Interchange Format (GIF) .gif image/gif Tag Image File Format (TIFF) .tiff , .tif image/tiff Joint Photographic Experts Group (JPEG) .jpg , .jpeg image/jpeg Portable Network Graphics (PNG) .png image/png Bitmap (BMP) .bmp image/bmp WebP .webp image/webp HyperText Markup Language (HTML) .html text/html Microsoft Word Office Open XML (OOXML) .docx application/vnd.openxmlformats-officedocument.wordprocessingml.document Microsoft PowerPoint OOXML .pptx application/vnd.openxmlformats-officedocument.presentationml.presentation Microsoft Excel OOXML .xlsx application/vnd.openxmlformats-officedocument.spreadsheetml.sheet Note that some of these image formats are "lossy" (for example, JPEG).
- Home Documentation AI and ML Document AI Guides Send feedback Supported Files Stay organized with collections Save and categorize content based on your preferences.
- Note: Document AI includes some supported file types in Preview .
- Custom splitter only supports PDF, TIFF, TIF, and GIF file types.

