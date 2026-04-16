---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:14:32.013Z"
product_name: "Document AI"
product_slug: "document-ai"
feature_name: "Form MERS Rider Processor"
feature_slug: "form-mers-rider-processor"
latest_feature_date: "2022-03-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/document-ai/docs/processors-list"
  - "https://docs.cloud.google.com/document-ai/docs/form-parser"
  - "https://docs.cloud.google.com/document-ai/docs/fields"
  - "https://docs.cloud.google.com/document-ai/docs/languages"
keywords:
  - "form"
  - "mers"
  - "rider"
  - "processor"
  - "extracts"
  - "structured"
  - "from"
  - "documents"
---

# Form MERS Rider Processor

Product: Document AI
Coverage: MEDIUM

## Step 02 Summary

Extracts structured data from MERS rider documents.

## Extended Definition

Extracts structured data from MERS rider documents.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/document-ai/docs/processors-list](https://docs.cloud.google.com/document-ai/docs/processors-list)
- [https://docs.cloud.google.com/document-ai/docs/form-parser](https://docs.cloud.google.com/document-ai/docs/form-parser)
- [https://docs.cloud.google.com/document-ai/docs/fields](https://docs.cloud.google.com/document-ai/docs/fields)
- [https://docs.cloud.google.com/document-ai/docs/languages](https://docs.cloud.google.com/document-ai/docs/languages)

## Supporting Pages

### Processor list \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/processors-list](https://docs.cloud.google.com/document-ai/docs/processors-list)
- Source ID: `site-docs-root`
- Final score: 171
- Re-rank relevance: N/A

Evidence snippets:
- The processor currently returns information from the following signals: fraud signals is identity document detection: Predicts whether an image contains a recognized identity document. fraud signals suspicious words detection: Predicts whether words are present that aren't typical on IDs. fraud signals image manipulation detection: Predicts whether the image was altered or tampered with an image editing tool. fraud signals online duplicate detection: Predicts whether the image can be found online (US only).
- Category Pretrained Functions OCR, Entity Extraction Release stage General availability Access status Public lock open Type in API PAYSTUB PROCESSOR Notes If the multi-page input document contains more than one valid pay slips, the processor extracts entities from only the first valid pay slip.
- More information Custom summarizer Footnotes [†] Identity Document Proofing works to extract and evaluate information from ID documents that contributes to identifying whether the input image represents an authentic ID.
- More information Create a custom classification processor Custom Splitter Description Train a model to split a file containing multiple documents into individual, classified documents.

### Form Parser \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/form-parser](https://docs.cloud.google.com/document-ai/docs/form-parser)
- Source ID: `site-docs-root-2`
- Final score: 167
- Re-rank relevance: N/A

Evidence snippets:
- Create a Form Parser processor, which can identify and extract text, key-value pairs, tables, and generic entities from many types of documents.
- Form Parser can be considered over the other parsers when the use case involves: Dealing with structured forms: It excels at extracting KVPs from well-defined forms that look like conventional forms with labeled blanks to fill in, such as name: .
- Flexible table extraction is needed: Form Parser extracts from simple (no cells that span rows or columns) tables that look like tables.
- Checkboxes: A high-quality selection mark detector, which extracts checkboxes from images and PDF output as KVP, using the text nearest the checkbox, with a valueType indicating whether it is filled or unfilled.

### Processor list \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/fields](https://docs.cloud.google.com/document-ai/docs/fields)
- Source ID: `site-docs-reference`
- Final score: 161
- Re-rank relevance: N/A

Evidence snippets:
- The processor currently returns information from the following signals: fraud signals is identity document detection: Predicts whether an image contains a recognized identity document. fraud signals suspicious words detection: Predicts whether words are present that aren't typical on IDs. fraud signals image manipulation detection: Predicts whether the image was altered or tampered with an image editing tool. fraud signals online duplicate detection: Predicts whether the image can be found online (US only).
- Category Pretrained Functions OCR, Entity Extraction Release stage General availability Access status Public lock open Type in API PAYSTUB PROCESSOR Notes If the multi-page input document contains more than one valid pay slips, the processor extracts entities from only the first valid pay slip.
- More information Custom summarizer Footnotes [†] Identity Document Proofing works to extract and evaluate information from ID documents that contributes to identifying whether the input image represents an authentic ID.
- More information Create a custom classification processor Custom Splitter Description Train a model to split a file containing multiple documents into individual, classified documents.

### Processor list \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/languages](https://docs.cloud.google.com/document-ai/docs/languages)
- Source ID: `site-docs-reference`
- Final score: 161
- Re-rank relevance: N/A

Evidence snippets:
- The processor currently returns information from the following signals: fraud signals is identity document detection: Predicts whether an image contains a recognized identity document. fraud signals suspicious words detection: Predicts whether words are present that aren't typical on IDs. fraud signals image manipulation detection: Predicts whether the image was altered or tampered with an image editing tool. fraud signals online duplicate detection: Predicts whether the image can be found online (US only).
- Category Pretrained Functions OCR, Entity Extraction Release stage General availability Access status Public lock open Type in API PAYSTUB PROCESSOR Notes If the multi-page input document contains more than one valid pay slips, the processor extracts entities from only the first valid pay slip.
- More information Custom summarizer Footnotes [†] Identity Document Proofing works to extract and evaluate information from ID documents that contributes to identifying whether the input image represents an authentic ID.
- More information Create a custom classification processor Custom Splitter Description Train a model to split a file containing multiple documents into individual, classified documents.

