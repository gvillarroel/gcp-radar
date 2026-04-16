---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:14:32.070Z"
product_name: "Document AI"
product_slug: "document-ai"
feature_name: "Procurement receipt parser"
feature_slug: "procurement-receipt-parser"
latest_feature_date: "2020-10-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/document-ai/docs/layout-parse-chunk"
  - "https://docs.cloud.google.com/document-ai/docs/form-parser"
  - "https://docs.cloud.google.com/document-ai/docs/fields"
  - "https://docs.cloud.google.com/document-ai/docs/languages"
keywords:
  - "procurement"
  - "receipt"
  - "parser"
  - "extracts"
  - "from"
  - "documents"
---

# Procurement receipt parser

Product: Document AI
Coverage: MEDIUM

## Step 02 Summary

Procurement receipt parser extracts receipt data from procurement documents.

## Extended Definition

Procurement receipt parser extracts receipt data from procurement documents.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/document-ai/docs/layout-parse-chunk](https://docs.cloud.google.com/document-ai/docs/layout-parse-chunk)
- [https://docs.cloud.google.com/document-ai/docs/form-parser](https://docs.cloud.google.com/document-ai/docs/form-parser)
- [https://docs.cloud.google.com/document-ai/docs/fields](https://docs.cloud.google.com/document-ai/docs/fields)
- [https://docs.cloud.google.com/document-ai/docs/languages](https://docs.cloud.google.com/document-ai/docs/languages)

## Supporting Pages

### "Process documents with Gemini layout parser \_|\_ Document AI \_|\_ Google\

- URL: [https://docs.cloud.google.com/document-ai/docs/layout-parse-chunk](https://docs.cloud.google.com/document-ai/docs/layout-parse-chunk)
- Source ID: `site-docs-root-2`
- Final score: 119
- Re-rank relevance: N/A

Evidence snippets:
- Process documents with Gemini layout parser The Document AI layout parser is an advanced text parsing and document understanding service that converts unstructured content from complex files into highly structured, precise and machine-readable information.
- How it Works Gemini layout parser processes documents in a multi-stage pipeline designed to preserve semantic meaning: Parse and Structure: The document is ingested.
- Primary use cases Document OCR: It can parse text and layout elements like heading, header, footer, table structure and figures from PDF documents.
- Layout-aware chunking Standard parsers often create chunks removed from their original context, separating a paragraph from its heading.

### Form Parser \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/form-parser](https://docs.cloud.google.com/document-ai/docs/form-parser)
- Source ID: `site-docs-root-2`
- Final score: 117
- Re-rank relevance: N/A

Evidence snippets:
- Create a Form Parser processor, which can identify and extract text, key-value pairs, tables, and generic entities from many types of documents.
- Flexible table extraction is needed: Form Parser extracts from simple (no cells that span rows or columns) tables that look like tables.
- Form Parser can be considered over the other parsers when the use case involves: Dealing with structured forms: It excels at extracting KVPs from well-defined forms that look like conventional forms with labeled blanks to fill in, such as name: .
- Checkboxes: A high-quality selection mark detector, which extracts checkboxes from images and PDF output as KVP, using the text nearest the checkbox, with a valueType indicating whether it is filled or unfilled.

### Processor list \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/fields](https://docs.cloud.google.com/document-ai/docs/fields)
- Source ID: `site-docs-reference`
- Final score: 116
- Re-rank relevance: N/A

Evidence snippets:
- More information Custom Extractor Form Parser Description Extract general key-value pairs (entity and checkbox), tables, and generic entities from documents in addition to OCR text.
- Expense Parser Description Extract text and values from expense documents such as expense date, supplier name, total amount, and currency.
- Category Pretrained Functions OCR, Entity Extraction Release stage General availability Access status Public lock open Type in API PAYSTUB PROCESSOR Notes If the multi-page input document contains more than one valid pay slips, the processor extracts entities from only the first valid pay slip.
- More information Custom summarizer Footnotes [†] Identity Document Proofing works to extract and evaluate information from ID documents that contributes to identifying whether the input image represents an authentic ID.

### Processor list \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/languages](https://docs.cloud.google.com/document-ai/docs/languages)
- Source ID: `site-docs-reference`
- Final score: 116
- Re-rank relevance: N/A

Evidence snippets:
- More information Custom Extractor Form Parser Description Extract general key-value pairs (entity and checkbox), tables, and generic entities from documents in addition to OCR text.
- Expense Parser Description Extract text and values from expense documents such as expense date, supplier name, total amount, and currency.
- Category Pretrained Functions OCR, Entity Extraction Release stage General availability Access status Public lock open Type in API PAYSTUB PROCESSOR Notes If the multi-page input document contains more than one valid pay slips, the processor extracts entities from only the first valid pay slip.
- More information Custom summarizer Footnotes [†] Identity Document Proofing works to extract and evaluate information from ID documents that contributes to identifying whether the input image represents an authentic ID.

