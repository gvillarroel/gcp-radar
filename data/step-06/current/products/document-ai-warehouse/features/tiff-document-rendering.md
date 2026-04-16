---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:05:15.510Z"
product_name: "Document AI Warehouse"
product_slug: "document-ai-warehouse"
feature_name: "TIFF document rendering"
feature_slug: "tiff-document-rendering"
latest_feature_date: "2023-02-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/document-ai/docs/file-types"
  - "https://docs.cloud.google.com/document-warehouse/docs"
  - "https://docs.cloud.google.com/document-warehouse/docs/overview"
keywords:
  - "tiff"
  - "document"
  - "rendering"
  - "returns"
  - "converted"
  - "png"
  - "image"
  - "getdocument"
---

# TIFF document rendering

Product: Document AI Warehouse
Coverage: MEDIUM

## Step 02 Summary

Returns a converted PNG image in the GetDocument response for TIFF files.

## Extended Definition

Returns a converted PNG image in the GetDocument response for TIFF files.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/document-ai/docs/file-types](https://docs.cloud.google.com/document-ai/docs/file-types)
- [https://docs.cloud.google.com/document-warehouse/docs](https://docs.cloud.google.com/document-warehouse/docs)
- [https://docs.cloud.google.com/document-warehouse/docs/overview](https://docs.cloud.google.com/document-warehouse/docs/overview)

## Supporting Pages

### Document AI Warehouse overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-warehouse/docs/overview](https://docs.cloud.google.com/document-warehouse/docs/overview)
- Source ID: `site-api-reference`
- Final score: 63
- Re-rank relevance: N/A

Evidence snippets:
- The extraction can be done by Document AI Specialized parsers (for Procurement forms, Lending forms, others) OCR, AutoML, Forms parser (for images such as TIFF/PNG/etc.) Other custom models Text extracting tools for specialized document formats such as PDFs, Office documents and others.
- Integrated with DocAI : Document AI Warehouse is integrated with Document AI processors at several levels: Document AI processing in UI : Document AI Warehouse UI enables users to upload either scanned PDFs/TIFFs or special document types, both of which are automatically extracted by Document AI OCR or specialized processors respectively before the document is indexed into Document AI Warehouse.
- For example, the Search results for Driver License returns the histogram "CA 500, NV 150, …" Universal Access vs Doc-level Access Control Two access modes are supported in Document AI Warehouse for each project Universal access - any user can access any document in the project.
- It comprises the raw document and some associated metadata. [Images stored in Document AI Warehouse are also referred to as "Documents"] Raw Document [Content] The raw content file (pdf/image/binary/blob) of the Document.

### Document AI Warehouse overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-warehouse/docs](https://docs.cloud.google.com/document-warehouse/docs)
- Source ID: `site-api-reference`
- Final score: 63
- Re-rank relevance: N/A

Evidence snippets:
- The extraction can be done by Document AI Specialized parsers (for Procurement forms, Lending forms, others) OCR, AutoML, Forms parser (for images such as TIFF/PNG/etc.) Other custom models Text extracting tools for specialized document formats such as PDFs, Office documents and others.
- Integrated with DocAI : Document AI Warehouse is integrated with Document AI processors at several levels: Document AI processing in UI : Document AI Warehouse UI enables users to upload either scanned PDFs/TIFFs or special document types, both of which are automatically extracted by Document AI OCR or specialized processors respectively before the document is indexed into Document AI Warehouse.
- For example, the Search results for Driver License returns the histogram "CA 500, NV 150, …" Universal Access vs Doc-level Access Control Two access modes are supported in Document AI Warehouse for each project Universal access - any user can access any document in the project.
- It comprises the raw document and some associated metadata. [Images stored in Document AI Warehouse are also referred to as "Documents"] Raw Document [Content] The raw content file (pdf/image/binary/blob) of the Document.

### Supported Files \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/file-types](https://docs.cloud.google.com/document-ai/docs/file-types)
- Source ID: `site-docs-root`
- Final score: 63
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Name File Extension(s) MIME Type Portable Document Format (PDF) .pdf application/pdf Graphics Interchange Format (GIF) .gif image/gif Tag Image File Format (TIFF) .tiff , .tif image/tiff Joint Photographic Experts Group (JPEG) .jpg , .jpeg image/jpeg Portable Network Graphics (PNG) .png image/png Bitmap (BMP) .bmp image/bmp WebP .webp image/webp HyperText Markup Language (HTML) .html text/html Microsoft Word Office Open XML (OOXML) .docx application/vnd.openxmlformats-officedocument.wordprocessingml.document Microsoft PowerPoint OOXML .pptx application/vnd.openxmlformats-officedocument.presentationml.presentation Microsoft Excel OOXML .xlsx application/vnd.openxmlformats-officedocument.spreadsheetml.sheet Note that some of these image formats are "lossy" (for example, JPEG).
- Reducing file sizes for lossy formats may result in a degradation of image quality and accuracy of results from Document AI.
- File Types Document AI supports the following image types.
- OCR accuracy is dependent on both the resolution and the minimum font size, along with other factors like document (and if handwritten, handwriting) quality, so testing is recommended.

