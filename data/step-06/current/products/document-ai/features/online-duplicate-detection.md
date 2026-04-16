---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:14:31.991Z"
product_name: "Document AI"
product_slug: "document-ai"
feature_name: "Online duplicate detection"
feature_slug: "online-duplicate-detection"
latest_feature_date: "2022-11-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/document-ai/docs/languages"
  - "https://docs.cloud.google.com/document-ai/docs/fields"
  - "https://docs.cloud.google.com/document-ai/docs/processors-list"
  - "https://docs.cloud.google.com/document-ai/docs/pretrained-overview"
keywords:
  - "online"
  - "duplicate"
  - "detection"
  - "detects"
  - "whether"
  - "an"
  - "identity"
  - "document"
---

# Online duplicate detection

Product: Document AI
Coverage: MEDIUM

## Step 02 Summary

Detects whether an identity document image can be found online.

## Extended Definition

Detects whether an identity document image can be found online.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/document-ai/docs/languages](https://docs.cloud.google.com/document-ai/docs/languages)
- [https://docs.cloud.google.com/document-ai/docs/fields](https://docs.cloud.google.com/document-ai/docs/fields)
- [https://docs.cloud.google.com/document-ai/docs/processors-list](https://docs.cloud.google.com/document-ai/docs/processors-list)
- [https://docs.cloud.google.com/document-ai/docs/pretrained-overview](https://docs.cloud.google.com/document-ai/docs/pretrained-overview)

## Supporting Pages

### Processor list \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/languages](https://docs.cloud.google.com/document-ai/docs/languages)
- Source ID: `site-docs-reference`
- Final score: 277
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The processor currently returns information from the following signals: fraud signals is identity document detection: Predicts whether an image contains a recognized identity document. fraud signals suspicious words detection: Predicts whether words are present that aren't typical on IDs. fraud signals image manipulation detection: Predicts whether the image was altered or tampered with an image editing tool. fraud signals online duplicate detection: Predicts whether the image can be found online (US only).
- Full list of fields fraud signals is identity document fraud signals suspicious words evidence suspicious word evidence inconclusive suspicious word fraud signals image manipulation fraud signals online duplicate (US only) fraud signals photocopy detection evidence hostname (US only) evidence thumbnail url (US only) Normalized fields You can find more information in the Enrichment & normalization page.
- Full list of normalized fields fraud signals image manipulation fraud signals online duplicate (US only) fraud signals is identity document fraud signals suspicious words Uptraining Sample Input File Open in new window.
- Category Pretrained Functions OCR, Quality Analysis Release stage General availability Access status Public lock open Type in API ID PROOFING PROCESSOR Notes The Online Duplicate Detection feature is currently processed in US data centers.

### Processor list \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/fields](https://docs.cloud.google.com/document-ai/docs/fields)
- Source ID: `site-docs-reference`
- Final score: 267
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The processor currently returns information from the following signals: fraud signals is identity document detection: Predicts whether an image contains a recognized identity document. fraud signals suspicious words detection: Predicts whether words are present that aren't typical on IDs. fraud signals image manipulation detection: Predicts whether the image was altered or tampered with an image editing tool. fraud signals online duplicate detection: Predicts whether the image can be found online (US only).
- Full list of fields fraud signals is identity document fraud signals suspicious words evidence suspicious word evidence inconclusive suspicious word fraud signals image manipulation fraud signals online duplicate (US only) fraud signals photocopy detection evidence hostname (US only) evidence thumbnail url (US only) Normalized fields You can find more information in the Enrichment & normalization page.
- Full list of normalized fields fraud signals image manipulation fraud signals online duplicate (US only) fraud signals is identity document fraud signals suspicious words Uptraining Sample Input File Open in new window.
- Category Pretrained Functions OCR, Quality Analysis Release stage General availability Access status Public lock open Type in API ID PROOFING PROCESSOR Notes The Online Duplicate Detection feature is currently processed in US data centers.

### Processor list \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/processors-list](https://docs.cloud.google.com/document-ai/docs/processors-list)
- Source ID: `site-docs-root`
- Final score: 267
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The processor currently returns information from the following signals: fraud signals is identity document detection: Predicts whether an image contains a recognized identity document. fraud signals suspicious words detection: Predicts whether words are present that aren't typical on IDs. fraud signals image manipulation detection: Predicts whether the image was altered or tampered with an image editing tool. fraud signals online duplicate detection: Predicts whether the image can be found online (US only).
- Full list of fields fraud signals is identity document fraud signals suspicious words evidence suspicious word evidence inconclusive suspicious word fraud signals image manipulation fraud signals online duplicate (US only) fraud signals photocopy detection evidence hostname (US only) evidence thumbnail url (US only) Normalized fields You can find more information in the Enrichment & normalization page.
- Full list of normalized fields fraud signals image manipulation fraud signals online duplicate (US only) fraud signals is identity document fraud signals suspicious words Uptraining Sample Input File Open in new window.
- Category Pretrained Functions OCR, Quality Analysis Release stage General availability Access status Public lock open Type in API ID PROOFING PROCESSOR Notes The Online Duplicate Detection feature is currently processed in US data centers.

### Pretrained overview \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/pretrained-overview](https://docs.cloud.google.com/document-ai/docs/pretrained-overview)
- Source ID: `site-docs-root-2`
- Final score: 225
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Identity document proofing parser Identity document proofing parser predicts the validity of ID documents using multiple signals. fraud signals is identity document detection: Predicts whether an image contains a recognized identity document. fraud signals suspicious words detection: Predicts whether words are present that aren't typical on IDs. fraud signals image manipulation detection: Predicts whether the image was altered or tampered with an image editing tool. fraud signals online duplicate detection: Predicts whether the image can be found online (US only).
- Previous arrow back Derived field and signature detection Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Documentation AI and ML Document AI Guides Send feedback Pretrained overview Stay organized with collections Save and categorize content based on your preferences.
- Summarizer Summarizer gives abstract and bullet point summaries for short and long documents.

