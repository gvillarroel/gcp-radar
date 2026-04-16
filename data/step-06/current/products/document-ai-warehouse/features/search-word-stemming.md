---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:05:15.517Z"
product_name: "Document AI Warehouse"
product_slug: "document-ai-warehouse"
feature_name: "Search word stemming"
feature_slug: "search-word-stemming"
latest_feature_date: "2022-10-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/document-warehouse/docs"
  - "https://docs.cloud.google.com/document-warehouse/docs/overview"
  - "https://docs.cloud.google.com/document-ai/docs/fields"
keywords:
  - "search"
  - "word"
  - "stemming"
  - "text"
  - "property"
  - "now"
  - "supports"
  - "words"
---

# Search word stemming

Product: Document AI Warehouse
Coverage: MEDIUM

## Step 02 Summary

Text property search now supports stemming of search words.

## Extended Definition

Text property search now supports stemming of search words.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/document-warehouse/docs](https://docs.cloud.google.com/document-warehouse/docs)
- [https://docs.cloud.google.com/document-warehouse/docs/overview](https://docs.cloud.google.com/document-warehouse/docs/overview)
- [https://docs.cloud.google.com/document-ai/docs/fields](https://docs.cloud.google.com/document-ai/docs/fields)

## Supporting Pages

### Document AI Warehouse overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-warehouse/docs/overview](https://docs.cloud.google.com/document-warehouse/docs/overview)
- Source ID: `site-api-reference`
- Final score: 131
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Search within a root-folder hierarchy Operators for search keywords: "" exact match, or, + and, - exclude Organization : Flexible Folder management Documents can be cataloged into one or more folders, based on application (for example, an ID card is placed in a KYC folder, Loan folder, Bank Account folder), without replicating the document.
- Search : the product supports rich semantic search, including the following features: Full-text search Filtering search results by Properties (date, numeric, enum, text).
- Facets for a Document type are specified in the Document Schema by Admins (via Admin API) Semantic Search Semantic search supports synonyms or "semantically related" terms in the search query.
- Quotes (" ") may be used in the query to specify exact matching keywords Custom synonyms - industry-specific or company-specific terms, for example.

### Document AI Warehouse overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-warehouse/docs](https://docs.cloud.google.com/document-warehouse/docs)
- Source ID: `site-api-reference`
- Final score: 131
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Search within a root-folder hierarchy Operators for search keywords: "" exact match, or, + and, - exclude Organization : Flexible Folder management Documents can be cataloged into one or more folders, based on application (for example, an ID card is placed in a KYC folder, Loan folder, Bank Account folder), without replicating the document.
- Search : the product supports rich semantic search, including the following features: Full-text search Filtering search results by Properties (date, numeric, enum, text).
- Facets for a Document type are specified in the Document Schema by Admins (via Admin API) Semantic Search Semantic search supports synonyms or "semantically related" terms in the search query.
- Quotes (" ") may be used in the query to specify exact matching keywords Custom synonyms - industry-specific or company-specific terms, for example.

### Processor list \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/fields](https://docs.cloud.google.com/document-ai/docs/fields)
- Source ID: `site-docs-root`
- Final score: 120
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The processor currently returns information from the following signals: fraud signals is identity document detection: Predicts whether an image contains a recognized identity document. fraud signals suspicious words detection: Predicts whether words are present that aren't typical on IDs. fraud signals image manipulation detection: Predicts whether the image was altered or tampered with an image editing tool. fraud signals online duplicate detection: Predicts whether the image can be found online (US only).
- Full list of fields fraud signals is identity document fraud signals suspicious words evidence suspicious word evidence inconclusive suspicious word fraud signals image manipulation fraud signals online duplicate (US only) fraud signals photocopy detection evidence hostname (US only) evidence thumbnail url (US only) Normalized fields You can find more information in the Enrichment & normalization page.
- Full list of normalized fields fraud signals image manipulation fraud signals online duplicate (US only) fraud signals is identity document fraud signals suspicious words Uptraining Sample Input File Open in new window.
- Includes access to all OCR add-ons. pretrained-ocr-v2.1-2024-08-07 Stable GA The main areas of improvement for v2.1 are: better printed text recognition, more precise checkbox detection and more accurate reading order. pretrained-ocr-v2.1.1-2025-01-31 Release candidate Public Preview v2.1.1 is similar to V2.1, and is available in all regions except: US , EU , and asia-southeast1 .

