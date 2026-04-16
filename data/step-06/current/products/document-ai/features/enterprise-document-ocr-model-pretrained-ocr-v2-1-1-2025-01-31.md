---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:14:31.920Z"
product_name: "Document AI"
product_slug: "document-ai"
feature_name: "Enterprise Document OCR model pretrained-ocr-v2.1.1-2025-01-31"
feature_slug: "enterprise-document-ocr-model-pretrained-ocr-v2-1-1-2025-01-31"
latest_feature_date: "2025-02-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/document-ai/docs/enterprise-document-ocr"
  - "https://docs.cloud.google.com/document-ai/docs/process-documents-ocr"
  - "https://docs.cloud.google.com/document-ai/docs/output"
  - "https://docs.cloud.google.com/document-ai/docs/fields"
keywords:
  - "enterprise"
  - "document"
  - "ocr"
  - "model"
  - "pretrained"
  - "v2"
  - "2025"
  - "01"
---

# Enterprise Document OCR model pretrained-ocr-v2.1.1-2025-01-31

Product: Document AI
Coverage: MEDIUM

## Step 02 Summary

The Enterprise Document OCR model version pretrained-ocr-v2.1.1-2025-01-31 is available as a Release Candidate in multiple regions.

## Extended Definition

The Enterprise Document OCR model version pretrained-ocr-v2.1.1-2025-01-31 is available as a Release Candidate in multiple regions.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/document-ai/docs/enterprise-document-ocr](https://docs.cloud.google.com/document-ai/docs/enterprise-document-ocr)
- [https://docs.cloud.google.com/document-ai/docs/process-documents-ocr](https://docs.cloud.google.com/document-ai/docs/process-documents-ocr)
- [https://docs.cloud.google.com/document-ai/docs/output](https://docs.cloud.google.com/document-ai/docs/output)
- [https://docs.cloud.google.com/document-ai/docs/fields](https://docs.cloud.google.com/document-ai/docs/fields)

## Supporting Pages

### Enterprise Document OCR \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/enterprise-document-ocr](https://docs.cloud.google.com/document-ai/docs/enterprise-document-ocr)
- Source ID: `site-docs-root-2`
- Final score: 334
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Includes access to all OCR add-ons. pretrained-ocr-v2.1-2024-08-07 Stable The main areas of improvement for v2.1 are: better printed text recognition, more precise checkbox detection and more accurate reading order. pretrained-ocr-v2.1.1-2025-01-31 Release candidate v2.1.1 is similar to V2.1, and is available in all regions except: US , EU , and asia-southeast1 .
- Version ID Release channel Description pretrained-ocr-v1.2-2022-11-10 Stable Frozen model version of v1.0: Model files, configurations, and binaries of a version snapshot frozen in a container image for up to 18 months. pretrained-ocr-v2.0-2023-06-02 Stable Production-ready model specialized for document use cases.
- The following add-on capabilities are available for the Stable pretrained-ocr-v2.0-2023-06-02 and pretrained-ocr-v2.1-2024-08-07 versions, and Release Candidate pretrained-ocr-v2.1.1-2025-01-31 version.
- VisualElement ], text : str ) - > None : """ Only supported in version pretrained-ocr-v2.0-2023-06-02 """ checkboxes = [ x for x in visual elements if "checkbox" in x . type ] math symbols = [ x for x in visual elements if x . type == "math formula" ] if checkboxes : print ( f " { len ( checkboxes ) } checkboxes detected:" ) print ( f " First checkbox: { repr ( checkboxes [ 0 ] . type ) } " ) print ( f " Last checkbox: { repr ( checkboxes [ - 1 ] . type ) } " ) if math symbols : print ( f " { len ( math symbols ) } math symbols detected:" ) first math symbol text = layout to text ( math symbols [ 0 ] . layout , text ) print ( f " First math symbol: { repr ( first math symbol text ) } " ) def process document ( project id : str , location : str , processor id : str , processor version : str , file path : str , mime type : str , process options : Optional [ documentai .

### Enterprise Document OCR \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/process-documents-ocr](https://docs.cloud.google.com/document-ai/docs/process-documents-ocr)
- Source ID: `site-docs-root`
- Final score: 324
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Includes access to all OCR add-ons. pretrained-ocr-v2.1-2024-08-07 Stable The main areas of improvement for v2.1 are: better printed text recognition, more precise checkbox detection and more accurate reading order. pretrained-ocr-v2.1.1-2025-01-31 Release candidate v2.1.1 is similar to V2.1, and is available in all regions except: US , EU , and asia-southeast1 .
- Version ID Release channel Description pretrained-ocr-v1.2-2022-11-10 Stable Frozen model version of v1.0: Model files, configurations, and binaries of a version snapshot frozen in a container image for up to 18 months. pretrained-ocr-v2.0-2023-06-02 Stable Production-ready model specialized for document use cases.
- The following add-on capabilities are available for the Stable pretrained-ocr-v2.0-2023-06-02 and pretrained-ocr-v2.1-2024-08-07 versions, and Release Candidate pretrained-ocr-v2.1.1-2025-01-31 version.
- VisualElement ], text : str ) - > None : """ Only supported in version pretrained-ocr-v2.0-2023-06-02 """ checkboxes = [ x for x in visual elements if "checkbox" in x . type ] math symbols = [ x for x in visual elements if x . type == "math formula" ] if checkboxes : print ( f " { len ( checkboxes ) } checkboxes detected:" ) print ( f " First checkbox: { repr ( checkboxes [ 0 ] . type ) } " ) print ( f " Last checkbox: { repr ( checkboxes [ - 1 ] . type ) } " ) if math symbols : print ( f " { len ( math symbols ) } math symbols detected:" ) first math symbol text = layout to text ( math symbols [ 0 ] . layout , text ) print ( f " First math symbol: { repr ( first math symbol text ) } " ) def process document ( project id : str , location : str , processor id : str , processor version : str , file path : str , mime type : str , process options : Optional [ documentai .

### Sample processor output \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/output](https://docs.cloud.google.com/document-ai/docs/output)
- Source ID: `site-docs-reference`
- Final score: 248
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Digitize text Processors Output samples Enterprise Document OCR (Optical Character Recognition) Category Digitize Solution type General Functions OCR, Quality Analysis Release stage General availability Access status Public lock open Full processor details Detailed entry picture as pdfs Sample input file pretrained-ocr-v1.2-2022-11-10 Output Document JSON pretrained-ocr-v2.0-2023-06-02 Output Document JSON Checkbox Extraction - Document JSON Font Detection - Document JSON Math OCR - Document JSON pretrained-ocr-v2.1-2024-08-07 Output Document JSON Premium Output Document JSON pretrained-ocr-v2.1.1-2025-01-31 Output Document JSON Premium Output Document JSON Extract documents Processors Output samples Custom Extractor Category Extract Solution type Custom Functions OCR, Entity Extraction Release stage General availability Access status Public lock open Full processor details Detailed entry picture as pdfs Sample input file pretrained-foundation-model-v1.5-2025-05-05 Output Document JSON pretrained-foundation-model-v1.5-pro-2025-06-20 Output Document JSON pretrained-foundation-model-v1.5.1-2025-08-07 Output Document JSON pretrained-foundation-model-v1.6-pro-2025-12-01 Output Document JSON pretrained-foundation-model-v1.6-2026-01-13 Output Document JSON Form Parser Category Extract Solution type General Functions OCR, Form Parsing, Entity Extraction Release stage General availability Access status Public lock open Full processor details Detailed entry picture as pdfs Sample input file pretrained-form-parser-v1.0-2020-09-23 Output Document JSON pretrained-form-parser-v2.0-2022-11-10 Output Document JSON pretrained-form-parser-v2.1-2023-06-26 Output Document JSON Layout Parser Category Extract Solution type General Functions Layout Parsing, Document Chunking Release stage General availability Access status Public lock open Full processor details Detailed entry picture as pdfs Sample input file pretrained-layout-parser-v1.0-2024-06-03 Output Document JSON Classify documents Processors Output samples Custom Classifier Category Classify Solution type Custom Functions OCR, Classification Release stage General availability Access status Public lock open Full processor details Detailed entry picture as pdfs Sample input file pretrained-classifier-v1.5-2025-08-05 Output Document JSON pretrained-classifier-v1.6-2026-03-09 Output Document JSON pretrained-classifier-v1.6-pro-2026-03-09 Output Document JSON Custom Splitter Category Classify Solution type Custom Functions OCR, Classification, Splitting Release stage General availability Access status Public lock open Full processor details Detailed entry picture as pdfs Sample input file pretrained-splitter-v1.5-2025-07-14 Output Document JSON pretrained-splitter-v1.6-2026-03-09 Output Document JSON pretrained-splitter-v1.6-pro-2026-03-09 Output Document JSON Explore pretrained processors Processors Output samples Bank Statement Parser Category Pretrained Solution type Lending Functions OCR, Entity Extraction Release stage General availability Access status Public lock open Full processor details Detailed entry picture as pdfs Sample input file pretrained-bankstatement-v1.0-2021-08-08 Output Document JSON pretrained-bankstatement-v1.1-2021-08-13 Output Document JSON pretrained-bankstatement-v2.0-2021-12-10 Output Document JSON pretrained-bankstatement-v3.0-2022-05-16 Output Document JSON pretrained-bankstatement-v4.0-2023-07-31 Output Document JSON pretrained-bankstatement-v5.0-2023-12-06 Output Document JSON W2 Parser Category Pretrained Solution type Lending Functions OCR, Entity Extraction Release stage General availability Access status Public lock open Full processor details Detailed entry picture as pdfs Sample input file pretrained-w2-v1.0-2020-10-01 Output Document JSON pretrained-w2-v1.1-2022-01-27 Output Document JSON pretrained-w2-v1.2-2022-01-28 Output Document JSON pretrained-w2-v2.0-2022-03-30 Output Document JSON pretrained-w2-v2.1-2022-06-08 Output Document JSON US Passport Parser Category Pretrained Solution type Identity Functions OCR, Entity Extraction Release stage General availability Access status Public lock open Full processor details Detailed entry picture as pdfs Sample input file pretrained-us-passport-v1.0-2021-06-14 Output Document JSON Utility Parser Category Pretrained Solution type Procurement Functions OCR, Entity Extraction Release stage General availability Access status Limited security Full processor details Detailed entry picture as pdfs Sample input file pretrained-utility-v1.1-2021-04-09 Output Document JSON pretrained-utility-v1.2-2022-12-15 Output Document JSON Identity Document Proofing Parser Category Pretrained Solution type Identity Functions OCR, Quality Analysis Release stage General availability Access status Public lock open Full processor details Detailed entry picture as pdfs Sample input file pretrained-id-proofing-v1.0-2022-10-03 Output Document JSON pretrained-id-proofing-v1.1-2023-05-18 Output Document JSON pretrained-id-proofing-v1.2-2023-10-04 Output Document JSON US Driver License Parser Category Pretrained Solution type Identity Functions OCR, Entity Extraction Release stage General availability Access status Public lock open Full processor details Detailed entry picture as pdfs Sample input file pretrained-us-driver-license-v1.0-2021-06-14 Output Document JSON Expense Parser Category Pretrained Solution type Procurement Functions OCR, Entity Extraction Release stage General availability Access status Public lock open Full processor details Detailed entry picture as pdfs Sample input file pretrained-expense-v1.1-2021-04-09 Output Document JSON pretrained-expense-v1.3.2-2024-09-11 Output Document JSON pretrained-expense-v1.4-2022-11-18 Output Document JSON pretrained-expense-v1.4.2-2024-09-12 Output Document JSON Invoice Parser Category Pretrained Solution type Procurement Functions OCR, Entity Extraction Release stage General availability Access status Public lock open Full processor details Detailed entry picture as pdfs Sample input file pretrained-invoice-v1.1-2021-04-09 Output Document JSON pretrained-invoice-v1.2-2022-02-18 Output Document JSON pretrained-invoice-v1.3-2022-07-15 Output Document JSON pretrained-invoice-v1.4-2022-10-21 Output Document JSON pretrained-invoice-v1.5-2023-09-15 Output Document JSON pretrained-invoice-v2.0-2023-12-06 Output Document JSON Previous arrow back Client libraries Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Documentation AI and ML Document AI Guides Send feedback Sample processor output Stay organized with collections Save and categorize content based on your preferences.
- The files on this page are sample documents in a variety of structures and the raw outputs from the Document AI API in the Document format.
- This page contains detailed information on output produced by processors offered by Document AI.

### Processor list \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/fields](https://docs.cloud.google.com/document-ai/docs/fields)
- Source ID: `site-docs-reference`
- Final score: 246
- Re-rank relevance: N/A

Evidence snippets:
- Category Digitize Functions OCR, Quality Analysis Release stage General availability Access status Public lock open Type in API OCR PROCESSOR Supported languages Full list of languages Language Name BCP 47 Tag Script Handwriting supported Afrikaans af Latn Albanian sq Latn Arabic ar Arab Armenian hy Armn Belarusian be Cyrl Bangla bn Beng Bengali bn Beng Bulgarian bg Cyrl Catalan ca Latn Chinese zh Hani Croatian hr Latn Czech cs Latn Danish da Latn Dutch nl Latn English en Latn Estonian et Latn Filipino fil Latn Finnish fi Latn French fr Latn German de Latn Greek el Grek Gujarati gu Gujr Hebrew iw Hebr Hindi hi Deva Hungarian hu Latn Icelandic is Latn Indonesian id Latn Italian it Latn Japanese ja Jpan Kannada kn Knda Khmer km Khmr Korean ko Kore Lao lo Laoo Latvian lv Latn Lithuanian lt Latn Macedonian mk Cyrl Malay ms Latn Malayalam ml Mlym Marathi mr Deva Nepali ne Deva Norwegian no Latn Persian fa Arab Polish pl Latn Portuguese (Portugal & Brazil) pt Latn Punjabi pa Guru Romanian ro Latn Russian ru Cyrl Serbian sr Cyrl Slovak sk Latn Slovenian sl Latn Spanish es Latn Swedish sv Latn Tagalog tl Latn Tamil ta Taml Telugu te Telu Thai th Thai Turkish tr Latn Ukrainian uk Cyrl Vietnamese vi Latn Yiddish yi Hebr Processor versions Version ID Release Channel Release Maturity Description pretrained-ocr-v1.2-2022-11-10 Stable GA Frozen model version of v1.0: Model files, configurations, and binaries of a version snapshot frozen in a container image for up to 18 months. pretrained-ocr-v2.0-2023-06-02 Stable GA Production-ready model specialized for document use cases.
- Includes access to all OCR add-ons. pretrained-ocr-v2.1-2024-08-07 Stable GA The main areas of improvement for v2.1 are: better printed text recognition, more precise checkbox detection and more accurate reading order. pretrained-ocr-v2.1.1-2025-01-31 Release candidate Public Preview v2.1.1 is similar to V2.1, and is available in all regions except: US , EU , and asia-southeast1 .
- Category Classify Functions OCR, Classification Release stage General availability Access status Public lock open Type in API CUSTOM CLASSIFICATION PROCESSOR Supported languages Language Name BCP 47 Tag Script Handwriting supported English en Latn Processor versions Version ID Release Channel Release Maturity Description pretrained-classifier-v1.5-2025-08-05 Stable GA Production-ready model powered by the Gemini 2.5 Flash LLM.
- This model has the same features as v1.5, and has improved adaptive few-shot learning. pretrained-foundation-model-v1.6-pro-2025-12-01 Release candidate Public Preview Preview model powered by the Gemini 3 Pro LLM.

