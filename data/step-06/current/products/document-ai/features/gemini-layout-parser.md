---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:14:31.893Z"
product_name: "Document AI"
product_slug: "document-ai"
feature_name: "Gemini layout parser"
feature_slug: "gemini-layout-parser"
latest_feature_date: "2025-11-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/document-ai/docs/layout-parse-chunk"
  - "https://docs.cloud.google.com/document-ai/docs/layout-parse-quickstart"
  - "https://docs.cloud.google.com/document-ai/docs/fields"
  - "https://docs.cloud.google.com/document-ai/docs/languages"
keywords:
  - "gemini"
  - "layout"
  - "parser"
  - "the"
  - "improves"
  - "table"
  - "recognition"
  - "reading"
---

# Gemini layout parser

Product: Document AI
Coverage: MEDIUM

## Step 02 Summary

The Gemini layout parser improves table recognition, reading order, and text recognition for PDF files; The Gemini layout parser improves table recognition, reading order, and text recognition for PDF files.

## Extended Definition

The Gemini layout parser improves table recognition, reading order, and text recognition for PDF files; The Gemini layout parser improves table recognition, reading order, and text recognition for PDF files.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/document-ai/docs/layout-parse-chunk](https://docs.cloud.google.com/document-ai/docs/layout-parse-chunk)
- [https://docs.cloud.google.com/document-ai/docs/layout-parse-quickstart](https://docs.cloud.google.com/document-ai/docs/layout-parse-quickstart)
- [https://docs.cloud.google.com/document-ai/docs/fields](https://docs.cloud.google.com/document-ai/docs/fields)
- [https://docs.cloud.google.com/document-ai/docs/languages](https://docs.cloud.google.com/document-ai/docs/languages)

## Supporting Pages

### "Process documents with Gemini layout parser \_|\_ Document AI \_|\_ Google\

- URL: [https://docs.cloud.google.com/document-ai/docs/layout-parse-chunk](https://docs.cloud.google.com/document-ai/docs/layout-parse-chunk)
- Source ID: `site-docs-root-2`
- Final score: 281
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Gemini layout parser accurately parses the entire table structure, preserving the data's integrity.
- Process documents with Gemini layout parser The Document AI layout parser is an advanced text parsing and document understanding service that converts unstructured content from complex files into highly structured, precise and machine-readable information.
- Reduced hallucinations Unlike pure LLM-based parsers that try to read text that isn't there, Gemini layout parser's foundation in advanced OCR grounds it in the document's actual content.
- How it Works Gemini layout parser processes documents in a multi-stage pipeline designed to preserve semantic meaning: Parse and Structure: The document is ingested.

### Layout parser Quickstart \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/layout-parse-quickstart](https://docs.cloud.google.com/document-ai/docs/layout-parse-quickstart)
- Source ID: `site-docs-root`
- Final score: 203
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- HTTP method and URL: POST https:// LOCATION -documentai.googleapis.com/v1beta3/projects/ PROJECT ID /locations/ LOCATION /processors/ PROCESSOR ID /processorVersions/ pretrained-layout-parser-v1.5-2025-08-25 :process Request JSON body: { "gcsDocument": { "gcsUri": " GCS FILE PATH ", "mimeType": " MIME TYPE " }, "processOptions": { "layoutConfig": { "enableTableAnnotation": "true", "enableImageAnnotation": "true", "chunkingConfig": { "chunkSize": " CHUNK SIZE ", "includeAncestorHeadings": " INCLUDE ANCESTOR HEADINGS ", } } } } To send your request, choose one of these options: curl Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Previous arrow back Gemini layout parser Next Enterprise Document OCR arrow forward Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- ProcessRequest ( name = name , gcs document = gcs document , process options = process options , ) Process the document result = client . process document ( request = request ) document = result . document print ( f "Document processing complete. \n " ) print ( "--- RAG-Ready Chunks (with context) ---" ) for i , chunk in enumerate ( document . chunked document . chunks ): print ( f " \n --- Chunk {i} ---" ) Print the chunk's content print ( f "Text: {chunk.content}" ) return result Batch process documents with layout parser Use the following procedure to parse and chunk multiple documents in a single request.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json ` -Uri "https:// LOCATION -documentai.googleapis.com/v1beta3/projects/ PROJECT ID /locations/ LOCATION /processors/ PROCESSOR ID /processorVersions/ pretrained-layout-parser-v1.5-2025-08-25 :process" Select-Object -Expand Content You should receive a successful status code (2xx) and an empty response.

### Processor list \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/fields](https://docs.cloud.google.com/document-ai/docs/fields)
- Source ID: `site-docs-reference`
- Final score: 157
- Re-rank relevance: N/A

Evidence snippets:
- Note: If it's used for non-PDF files, it will have the same behavior as the stable pretrained-layout-parser-v1.0-2024-06-03 . pretrained-layout-parser-v1.5-pro-2025-08-25 Release Candidate Public Preview Preview version powered by Gemini 2.5 Pro LLM for better layout analysis on PDF files. v1.5-pro has higher latency than v1.5.
- Note: If it's used for non-PDF files, it will have the same behavior as the stable pretrained-layout-parser-v1.0-2024-06-03 . pretrained-layout-parser-v1.6-pro-2025-12-01 Release Candidate Public Preview Preview version powered by Gemini 3.0 Pro LLM.
- Includes access to all OCR add-ons. pretrained-ocr-v2.1-2024-08-07 Stable GA The main areas of improvement for v2.1 are: better printed text recognition, more precise checkbox detection and more accurate reading order. pretrained-ocr-v2.1.1-2025-01-31 Release candidate Public Preview v2.1.1 is similar to V2.1, and is available in all regions except: US , EU , and asia-southeast1 .
- This is the default pre-trained processor version. pretrained-layout-parser-v1.5-2025-08-25 Release Candidate Public Preview Preview version powered by Gemini 2.5 Flash LLM for better layout analysis on PDF files.

### Processor list \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/languages](https://docs.cloud.google.com/document-ai/docs/languages)
- Source ID: `site-docs-reference`
- Final score: 157
- Re-rank relevance: N/A

Evidence snippets:
- Note: If it's used for non-PDF files, it will have the same behavior as the stable pretrained-layout-parser-v1.0-2024-06-03 . pretrained-layout-parser-v1.5-pro-2025-08-25 Release Candidate Public Preview Preview version powered by Gemini 2.5 Pro LLM for better layout analysis on PDF files. v1.5-pro has higher latency than v1.5.
- Note: If it's used for non-PDF files, it will have the same behavior as the stable pretrained-layout-parser-v1.0-2024-06-03 . pretrained-layout-parser-v1.6-pro-2025-12-01 Release Candidate Public Preview Preview version powered by Gemini 3.0 Pro LLM.
- Includes access to all OCR add-ons. pretrained-ocr-v2.1-2024-08-07 Stable GA The main areas of improvement for v2.1 are: better printed text recognition, more precise checkbox detection and more accurate reading order. pretrained-ocr-v2.1.1-2025-01-31 Release candidate Public Preview v2.1.1 is similar to V2.1, and is available in all regions except: US , EU , and asia-southeast1 .
- This is the default pre-trained processor version. pretrained-layout-parser-v1.5-2025-08-25 Release Candidate Public Preview Preview version powered by Gemini 2.5 Flash LLM for better layout analysis on PDF files.

