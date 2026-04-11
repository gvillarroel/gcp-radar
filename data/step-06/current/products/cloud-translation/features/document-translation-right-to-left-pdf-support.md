---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:22:34.602Z"
product_name: "Cloud Translation"
product_slug: "cloud-translation"
feature_name: "Document Translation right-to-left PDF support"
feature_slug: "document-translation-right-to-left-pdf-support"
latest_feature_date: "2021-11-01"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/translate/docs/release-notes"
  - "https://docs.cloud.google.com/translate/docs/intro-to-v3"
  - "https://docs.cloud.google.com/translate/docs/advanced/automl-beginner"
keywords:
  - "document"
  - "translation"
  - "right"
  - "to"
  - "left"
  - "pdf"
  - "supports"
  - "languages"
---

# Document Translation right-to-left PDF support

Product: Cloud Translation
Coverage: LOW

## Step 02 Summary

Document Translation supports right-to-left languages in PDF files.

## Extended Definition

Document Translation supports right-to-left languages in PDF files.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/translate/docs/release-notes](https://docs.cloud.google.com/translate/docs/release-notes)
- [https://docs.cloud.google.com/translate/docs/intro-to-v3](https://docs.cloud.google.com/translate/docs/intro-to-v3)
- [https://docs.cloud.google.com/translate/docs/advanced/automl-beginner](https://docs.cloud.google.com/translate/docs/advanced/automl-beginner)

## Supporting Pages

### Cloud Translation release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/translate/docs/release-notes](https://docs.cloud.google.com/translate/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 160
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- November 01, 2021 Feature Document Translation for Cloud Translation - Advanced (v3) is now Generally Available ( GA ) and includes the following enhancements: Right to left language support for PDFs Preserves font size, font color, font style, and hyperlinks for native PDFs only Batch document translation requests support PDF to DOCX conversions for native PDFs only August 02, 2021 Change Removed the Phrase-Based Machine Translation (PBMT) model.
- In addition to the features of Cloud Translation API v3beta1, Translation API - Advanced supports: User labels Audit logging Separate quotas for batch translation and for translation using AutoML models Client libraries for additional languages PHP, GO, C#, and Ruby Note: Existing users should pay careful attention to client library versions before updating.
- Assamese Aymara Bambara Bhojpuri Dhivehi Dogri Ewe Guarani Ilocano Konkani Krio Kurdish(Sorani) Lingala Luganda Maithili Meiteilon(Manipuri) Mizo Oromo Quechua Sanskrit Sepedi(Pedi) Tigrinya Tsonga Twi (Akan) November 15, 2022 Feature For online document translations , you can increase the page limit for native PDF documents to 300 pages.
- March 30, 2023 Feature Added new fields to the document translation methods to handle translation and parsing issues: Shadow text removal for overlapping text (for native PDFs).

### Overview of the Cloud Translation API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/translate/docs/intro-to-v3](https://docs.cloud.google.com/translate/docs/intro-to-v3)
- Source ID: `site-iam-reference`
- Final score: 148
- Re-rank relevance: N/A

Evidence snippets:
- Feature Basic Advanced Translate with the NMT model Translate with the Translation LLM Translate with Adaptive Translation models Translate with custom models Translate multiple strings in a single request Batch translations with Cloud Storage Translate documents Glossary support (control terminology) Train custom models Language Detection Integrated REST API Integrated gRPC API Service Account API Key Audit logging Supports HTML Supports 100+ Languages Romanization support Transliteration support Adaptive Translation Multi-regional endpoint support VPC Service Controls support Refer to Cloud Translation - Advanced API features for more details on Cloud Translation - Advanced API.
- Document Translation Document Translation lets you directly translate existing documents, such as PDF and DOCX files, to a target language.
- Compare supported models Customize the NMT model Customize the Translation LLM Supported languages Supported formats Perform adaptive translation Migrate to Translation Advanced For answers to general questions about Cloud Translation API, refer to the General FAQs page.
- It also offers features such as glossaries, batch translation, document translation, and more: Glossaries : A glossary is a custom dictionary that you create to translate domain-specific terms correctly and consistently.

### Customizing the NMT model \_|\_ Cloud Translation \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/translate/docs/advanced/automl-beginner](https://docs.cloud.google.com/translate/docs/advanced/automl-beginner)
- Source ID: `site-iam-reference`
- Final score: 138
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If you don't manually specify how your dataset is split between these functions as described in Preparing your training data , and if your dataset contains fewer than 100,000 segment pairs, then Cloud Translation - Advanced API automatically uses 80% of your content documents for training, 10% for validating, and 10% for testing.
- If the translation task is ambiguous enough that a person fluent in both languages would have a hard time doing a satisfactory job, the NMT model might perform as well as a custom model.
- Customizing the NMT model lets you get the right translation of domain-specific terminology that matters to you.
- You're building on top of a model that already does a pretty good job with general-purpose translation - your examples are the special last step that makes custom models work for your use case in particular, so make sure they're relevant and representative of usage you expect to see.

