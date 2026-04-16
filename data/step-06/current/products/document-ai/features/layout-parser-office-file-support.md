---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:14:31.893Z"
product_name: "Document AI"
product_slug: "document-ai"
feature_name: "Layout parser office file support"
feature_slug: "layout-parser-office-file-support"
latest_feature_date: "2025-11-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/document-ai/docs/layout-parse-chunk"
  - "https://docs.cloud.google.com/document-ai/docs/file-types"
  - "https://docs.cloud.google.com/document-ai/docs/layout-parse-quickstart"
  - "https://docs.cloud.google.com/document-ai/docs/form-parser"
keywords:
  - "layout"
  - "parser"
  - "office"
  - "file"
  - "for"
  - "docx"
  - "pptx"
  - "xlsx"
---

# Layout parser office file support

Product: Document AI
Coverage: MEDIUM

## Step 02 Summary

Layout parser support for DOCX, PPTX, XLSX, and XLSM files makes structured document content easier to access and chunk; Layout parser support for DOCX, PPTX, XLSX, and XLSM files makes structured document content easier to access and chunk.

## Extended Definition

Layout parser support for DOCX, PPTX, XLSX, and XLSM files makes structured document content easier to access and chunk; Layout parser support for DOCX, PPTX, XLSX, and XLSM files makes structured document content easier to access and chunk.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/document-ai/docs/layout-parse-chunk](https://docs.cloud.google.com/document-ai/docs/layout-parse-chunk)
- [https://docs.cloud.google.com/document-ai/docs/file-types](https://docs.cloud.google.com/document-ai/docs/file-types)
- [https://docs.cloud.google.com/document-ai/docs/layout-parse-quickstart](https://docs.cloud.google.com/document-ai/docs/layout-parse-quickstart)
- [https://docs.cloud.google.com/document-ai/docs/form-parser](https://docs.cloud.google.com/document-ai/docs/form-parser)

## Supporting Pages

### "Process documents with Gemini layout parser \_|\_ Document AI \_|\_ Google\

- URL: [https://docs.cloud.google.com/document-ai/docs/layout-parse-chunk](https://docs.cloud.google.com/document-ai/docs/layout-parse-chunk)
- Source ID: `site-docs-root-2`
- Final score: 235
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Limitations The following limitations apply: Online processing: Input file size maximum of 20 MB for all file types Maximum of 15 pages per PDF file Batch processing: Maximum single file size of 1 GB for PDF files Maximum of 500 pages per PDF file Layout detection per file type Note: Support for the PDF, HTML, DOCX, PPTX, XLSX, and XLSM file types is GA and is subject to charges.
- Support for the file types HTML, PDF, DOCX, PPTX, XLSX and XLSM is in General Availability and is subject to charges.
- Process documents with Gemini layout parser The Document AI layout parser is an advanced text parsing and document understanding service that converts unstructured content from complex files into highly structured, precise and machine-readable information.
- PPTX application/vnd.openxmlformats-officedocument.presentationml.presentation paragraph, table, list, title, heading elements For headings to be identified accurately, they should be marked as such within the PowerPoint file.

### Supported Files \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/file-types](https://docs.cloud.google.com/document-ai/docs/file-types)
- Source ID: `site-docs-reference`
- Final score: 169
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Name File Extension(s) MIME Type Portable Document Format (PDF) .pdf application/pdf Graphics Interchange Format (GIF) .gif image/gif Tag Image File Format (TIFF) .tiff , .tif image/tiff Joint Photographic Experts Group (JPEG) .jpg , .jpeg image/jpeg Portable Network Graphics (PNG) .png image/png Bitmap (BMP) .bmp image/bmp WebP .webp image/webp HyperText Markup Language (HTML) .html text/html Microsoft Word Office Open XML (OOXML) .docx application/vnd.openxmlformats-officedocument.wordprocessingml.document Microsoft PowerPoint OOXML .pptx application/vnd.openxmlformats-officedocument.presentationml.presentation Microsoft Excel OOXML .xlsx application/vnd.openxmlformats-officedocument.spreadsheetml.sheet Note that some of these image formats are "lossy" (for example, JPEG).
- Reducing file sizes for lossy formats may result in a degradation of image quality and accuracy of results from Document AI.
- For information about file size and page limits, refer to the Quotas and Limits page.
- Note: HTML and OOXML support are only available with layout parser .

### Layout parser Quickstart \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/layout-parse-quickstart](https://docs.cloud.google.com/document-ai/docs/layout-parse-quickstart)
- Source ID: `site-docs-root`
- Final score: 162
- Re-rank relevance: N/A

Evidence snippets:
- HTTP method and URL: POST https:// LOCATION -documentai.googleapis.com/v1beta3/projects/ PROJECT ID /locations/ LOCATION /processors/ PROCESSOR ID /processorVersions/ pretrained-layout-parser-v1.5-2025-08-25 :process Request JSON body: { "gcsDocument": { "gcsUri": " GCS FILE PATH ", "mimeType": " MIME TYPE " }, "processOptions": { "layoutConfig": { "enableTableAnnotation": "true", "enableImageAnnotation": "true", "chunkingConfig": { "chunkSize": " CHUNK SIZE ", "includeAncestorHeadings": " INCLUDE ANCESTOR HEADINGS ", } } } } To send your request, choose one of these options: curl Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- ProcessRequest ( name = name , gcs document = gcs document , process options = process options , ) Process the document result = client . process document ( request = request ) document = result . document print ( f "Document processing complete. \n " ) print ( "--- RAG-Ready Chunks (with context) ---" ) for i , chunk in enumerate ( document . chunked document . chunks ): print ( f " \n --- Chunk {i} ---" ) Print the chunk's content print ( f "Text: {chunk.content}" ) return result Batch process documents with layout parser Use the following procedure to parse and chunk multiple documents in a single request.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json ` -Uri "https:// LOCATION -documentai.googleapis.com/v1beta3/projects/ PROJECT ID /locations/ LOCATION /processors/ PROCESSOR ID /processorVersions/ pretrained-layout-parser-v1.5-2025-08-25 :process" Select-Object -Expand Content You should receive a successful status code (2xx) and an empty response.
- Save the request body in a file named request.json , and execute the following command: curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https:// LOCATION -documentai.googleapis.com/v1beta3/projects/ PROJECT ID /locations/ LOCATION /processors/ PROCESSOR ID /processorVersions/ pretrained-layout-parser-v1.5-2025-08-25 :process" PowerShell Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login .

### Form Parser \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/form-parser](https://docs.cloud.google.com/document-ai/docs/form-parser)
- Source ID: `site-docs-root-2`
- Final score: 142
- Re-rank relevance: N/A

Evidence snippets:
- Form Parser can be considered over the other parsers when the use case involves: Dealing with structured forms: It excels at extracting KVPs from well-defined forms that look like conventional forms with labeled blanks to fill in, such as name: .
- In this quickstart, you use the Google Cloud console to set up your Google Cloud project and authorization, create a Form Parser, and then make a request for Document AI to process a PDF form.
- These include: email phone url date time address person organization quantity price id page number Text and layout: Use our latest OCR engine to extract text and layout information.
- Home Documentation AI and ML Document AI Guides Send feedback Form Parser Stay organized with collections Save and categorize content based on your preferences.

