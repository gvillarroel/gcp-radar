---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:14:32.068Z"
product_name: "Document AI"
product_slug: "document-ai"
feature_name: "Document AI"
feature_slug: "document-ai"
latest_feature_date: "2021-03-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/document-ai/docs/enrichment"
  - "https://docs.cloud.google.com/document-ai/docs/normalization"
  - "https://docs.cloud.google.com/document-ai/docs/fields"
  - "https://docs.cloud.google.com/document-ai/docs/languages"
keywords:
  - "document"
  - "ai"
  - "reached"
  - "general"
  - "availability"
---

# Document AI

Product: Document AI
Coverage: MEDIUM

## Step 02 Summary

Document AI reached general availability.

## Extended Definition

Document AI reached general availability.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/document-ai/docs/enrichment](https://docs.cloud.google.com/document-ai/docs/enrichment)
- [https://docs.cloud.google.com/document-ai/docs/normalization](https://docs.cloud.google.com/document-ai/docs/normalization)
- [https://docs.cloud.google.com/document-ai/docs/fields](https://docs.cloud.google.com/document-ai/docs/fields)
- [https://docs.cloud.google.com/document-ai/docs/languages](https://docs.cloud.google.com/document-ai/docs/languages)

## Supporting Pages

### Enrichment \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/enrichment](https://docs.cloud.google.com/document-ai/docs/enrichment)
- Source ID: `site-docs-root-2`
- Final score: 230
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Processors Enriched fields Bank Statement Parser Category Pretrained Solution type Lending Functions OCR, Entity Extraction Release stage General availability Access status Public lock open Full processor details Detailed entry bank address bank name W2 Parser Category Pretrained Solution type Lending Functions OCR, Entity Extraction Release stage General availability Access status Public lock open Full processor details Detailed entry EmployerNameAndAddress EIN Pay Slip Parser Category Pretrained Solution type Lending Functions OCR, Entity Extraction Release stage General availability Access status Public lock open Full processor details Detailed entry employer address employer name Expense Parser Category Pretrained Solution type Procurement Functions OCR, Entity Extraction Release stage General availability Access status Public lock open Full processor details Detailed entry supplier address supplier name supplier phone Invoice Parser Category Pretrained Solution type Procurement Functions OCR, Entity Extraction Release stage General availability Access status Public lock open Full processor details Detailed entry supplier address supplier name supplier phone Previous arrow back Setup Next Normalization arrow forward Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Documentation AI and ML Document AI Guides Send feedback Enrichment Stay organized with collections Save and categorize content based on your preferences.
- For each supported field, Document AI also returns a normalizedValue in addition to the raw extracted field, normalizing the literal text.
- Document AI uses Enterprise Knowledge Graph to normalize and enrich entity extraction results (for supported fields).

### Normalization \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/normalization](https://docs.cloud.google.com/document-ai/docs/normalization)
- Source ID: `site-docs-root-2`
- Final score: 222
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Supported processors Here are the processors and fields that support entity enrichment and normalization: Processors Normalized fields Bank Statement Parser Category Pretrained Solution type Lending Functions OCR, Entity Extraction Release stage General availability Access status Public lock open Full processor details Detailed entry ending balance starting balance statement date statement end date statement start date table item/transaction deposit table item/transaction deposit date table item/transaction withdrawal table item/transaction withdrawal date US Passport Parser Category Pretrained Solution type Identity Functions OCR, Entity Extraction Release stage General availability Access status Public lock open Full processor details Detailed entry Date Of Birth Expiration Date Issue Date Utility Parser Category Pretrained Solution type Procurement Functions OCR, Entity Extraction Release stage General availability Access status Limited security Full processor details Detailed entry adjusted amount amount due balance transfer amount currency currency exchange rate delivery date due date invoice date late fee amount line item/amount line item/quantity line item/tax amount line item/unit price net amount prior amount due prior paid amount total amount total tax amount Identity Document Proofing Parser Category Pretrained Solution type Identity Functions OCR, Quality Analysis Release stage General availability Access status Public lock open Full processor details Detailed entry fraud signals image manipulation fraud signals online duplicate (US only) fraud signals is identity document fraud signals suspicious words Pay Slip Parser Category Pretrained Solution type Lending Functions OCR, Entity Extraction Release stage General availability Access status Public lock open Full processor details Detailed entry bonus bonus ytd commissions commissions ytd direct deposit end date gross earnings gross earnings ytd holiday holiday ytd net pay net pay ytd overtime overtime ytd pay date regular pay regular pay ytd start date vacation vacation ytd US Driver License Parser Category Pretrained Solution type Identity Functions OCR, Entity Extraction Release stage General availability Access status Public lock open Full processor details Detailed entry Date Of Birth Expiration Date Issue Date Expense Parser Category Pretrained Solution type Procurement Functions OCR, Entity Extraction Release stage General availability Access status Public lock open Full processor details Detailed entry currency total amount total tax amount net amount receipt date purchase time start date end date line item/amount line item/payment date line item/payment amount Invoice Parser Category Pretrained Solution type Procurement Functions OCR, Entity Extraction Release stage General availability Access status Public lock open Full processor details Detailed entry amount paid since last invoice currency currency exchange rate delivery date due date freight amount invoice date net amount total amount total tax amount line item/amount line item/quantity line item/unit price vat/amount vat/tax amount vat/tax rate Extraction processors Custom extractor supports normalization of all entities with the following Google Cloud common data types: dateTime , currency , money , and number .
- Processors Normalized data types Custom Extractor Category Extract Solution type Custom Functions OCR, Entity Extraction Release stage General availability Access status Public lock open Full processor details Detailed entry dateTime as STRING currency as STRING money as google.type.Money number as FLOAT or INTEGER Previous arrow back Enrichment Next BigQuery integration arrow forward Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- For many specific supported fields, Document AI also returns an entity.normalizedValue in addition to the raw extracted field obtained through the textAnchor of each entity.
- Home Documentation AI and ML Document AI Guides Send feedback Normalization Stay organized with collections Save and categorize content based on your preferences.

### Processor list \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/fields](https://docs.cloud.google.com/document-ai/docs/fields)
- Source ID: `site-docs-reference`
- Final score: 222
- Re-rank relevance: N/A

Evidence snippets:
- Category Digitize Functions OCR, Quality Analysis Release stage General availability Access status Public lock open Type in API OCR PROCESSOR Supported languages Full list of languages Language Name BCP 47 Tag Script Handwriting supported Afrikaans af Latn Albanian sq Latn Arabic ar Arab Armenian hy Armn Belarusian be Cyrl Bangla bn Beng Bengali bn Beng Bulgarian bg Cyrl Catalan ca Latn Chinese zh Hani Croatian hr Latn Czech cs Latn Danish da Latn Dutch nl Latn English en Latn Estonian et Latn Filipino fil Latn Finnish fi Latn French fr Latn German de Latn Greek el Grek Gujarati gu Gujr Hebrew iw Hebr Hindi hi Deva Hungarian hu Latn Icelandic is Latn Indonesian id Latn Italian it Latn Japanese ja Jpan Kannada kn Knda Khmer km Khmr Korean ko Kore Lao lo Laoo Latvian lv Latn Lithuanian lt Latn Macedonian mk Cyrl Malay ms Latn Malayalam ml Mlym Marathi mr Deva Nepali ne Deva Norwegian no Latn Persian fa Arab Polish pl Latn Portuguese (Portugal & Brazil) pt Latn Punjabi pa Guru Romanian ro Latn Russian ru Cyrl Serbian sr Cyrl Slovak sk Latn Slovenian sl Latn Spanish es Latn Swedish sv Latn Tagalog tl Latn Tamil ta Taml Telugu te Telu Thai th Thai Turkish tr Latn Ukrainian uk Cyrl Vietnamese vi Latn Yiddish yi Hebr Processor versions Version ID Release Channel Release Maturity Description pretrained-ocr-v1.2-2022-11-10 Stable GA Frozen model version of v1.0: Model files, configurations, and binaries of a version snapshot frozen in a container image for up to 18 months. pretrained-ocr-v2.0-2023-06-02 Stable GA Production-ready model specialized for document use cases.
- Supported languages Full list of languages Language Name BCP 47 Tag Script Handwriting supported Afrikaans af Latn Albanian sq Latn Arabic ar Arab Armenian hy Armn Belarusian be Cyrl Bangla bn Beng Bengali bn Beng Bulgarian bg Cyrl Catalan ca Latn Chinese zh Hani Croatian hr Latn Czech cs Latn Danish da Latn Dutch nl Latn English en Latn Estonian et Latn Filipino fil Latn Finnish fi Latn French fr Latn German de Latn Greek el Grek Gujarati gu Gujr Hebrew iw Hebr Hindi hi Deva Hungarian hu Latn Icelandic is Latn Indonesian id Latn Italian it Latn Japanese ja Jpan Kannada kn Knda Khmer km Khmr Korean ko Kore Lao lo Laoo Latvian lv Latn Lithuanian lt Latn Macedonian mk Cyrl Malay ms Latn Malayalam ml Mlym Marathi mr Deva Nepali ne Deva Norwegian no Latn Persian fa Arab Polish pl Latn Portuguese (Portugal & Brazil) pt Latn Punjabi pa Guru Romanian ro Latn Russian ru Cyrl Serbian sr Cyrl Slovak sk Latn Slovenian sl Latn Spanish es Latn Swedish sv Latn Tagalog tl Latn Tamil ta Taml Telugu te Telu Thai th Thai Turkish tr Latn Ukrainian uk Cyrl Vietnamese vi Latn Yiddish yi Hebr Processor versions Version ID Release Channel Release Maturity Description pretrained-layout-parser-v1.0-2024-06-03 Stable GA General availability version for document layout analysis.
- Category Pretrained Functions OCR, Entity Extraction Release stage General availability Access status Public lock open Type in API BANK STATEMENT PROCESSOR Notes If a page of a multi-page input file is the correct document type and one of the supported versions, the processor performs entity extraction on the first supported document.
- Category Pretrained Functions OCR, Entity Extraction Release stage General availability Access status Public lock open Type in API FORM W2 PROCESSOR Notes If a page of a multi-page input file is the correct document type and one of the supported versions, the processor performs entity extraction on the first supported document.

### Processor list \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/languages](https://docs.cloud.google.com/document-ai/docs/languages)
- Source ID: `site-docs-reference`
- Final score: 222
- Re-rank relevance: N/A

Evidence snippets:
- Category Digitize Functions OCR, Quality Analysis Release stage General availability Access status Public lock open Type in API OCR PROCESSOR Supported languages Full list of languages Language Name BCP 47 Tag Script Handwriting supported Afrikaans af Latn Albanian sq Latn Arabic ar Arab Armenian hy Armn Belarusian be Cyrl Bangla bn Beng Bengali bn Beng Bulgarian bg Cyrl Catalan ca Latn Chinese zh Hani Croatian hr Latn Czech cs Latn Danish da Latn Dutch nl Latn English en Latn Estonian et Latn Filipino fil Latn Finnish fi Latn French fr Latn German de Latn Greek el Grek Gujarati gu Gujr Hebrew iw Hebr Hindi hi Deva Hungarian hu Latn Icelandic is Latn Indonesian id Latn Italian it Latn Japanese ja Jpan Kannada kn Knda Khmer km Khmr Korean ko Kore Lao lo Laoo Latvian lv Latn Lithuanian lt Latn Macedonian mk Cyrl Malay ms Latn Malayalam ml Mlym Marathi mr Deva Nepali ne Deva Norwegian no Latn Persian fa Arab Polish pl Latn Portuguese (Portugal & Brazil) pt Latn Punjabi pa Guru Romanian ro Latn Russian ru Cyrl Serbian sr Cyrl Slovak sk Latn Slovenian sl Latn Spanish es Latn Swedish sv Latn Tagalog tl Latn Tamil ta Taml Telugu te Telu Thai th Thai Turkish tr Latn Ukrainian uk Cyrl Vietnamese vi Latn Yiddish yi Hebr Processor versions Version ID Release Channel Release Maturity Description pretrained-ocr-v1.2-2022-11-10 Stable GA Frozen model version of v1.0: Model files, configurations, and binaries of a version snapshot frozen in a container image for up to 18 months. pretrained-ocr-v2.0-2023-06-02 Stable GA Production-ready model specialized for document use cases.
- Supported languages Full list of languages Language Name BCP 47 Tag Script Handwriting supported Afrikaans af Latn Albanian sq Latn Arabic ar Arab Armenian hy Armn Belarusian be Cyrl Bangla bn Beng Bengali bn Beng Bulgarian bg Cyrl Catalan ca Latn Chinese zh Hani Croatian hr Latn Czech cs Latn Danish da Latn Dutch nl Latn English en Latn Estonian et Latn Filipino fil Latn Finnish fi Latn French fr Latn German de Latn Greek el Grek Gujarati gu Gujr Hebrew iw Hebr Hindi hi Deva Hungarian hu Latn Icelandic is Latn Indonesian id Latn Italian it Latn Japanese ja Jpan Kannada kn Knda Khmer km Khmr Korean ko Kore Lao lo Laoo Latvian lv Latn Lithuanian lt Latn Macedonian mk Cyrl Malay ms Latn Malayalam ml Mlym Marathi mr Deva Nepali ne Deva Norwegian no Latn Persian fa Arab Polish pl Latn Portuguese (Portugal & Brazil) pt Latn Punjabi pa Guru Romanian ro Latn Russian ru Cyrl Serbian sr Cyrl Slovak sk Latn Slovenian sl Latn Spanish es Latn Swedish sv Latn Tagalog tl Latn Tamil ta Taml Telugu te Telu Thai th Thai Turkish tr Latn Ukrainian uk Cyrl Vietnamese vi Latn Yiddish yi Hebr Processor versions Version ID Release Channel Release Maturity Description pretrained-layout-parser-v1.0-2024-06-03 Stable GA General availability version for document layout analysis.
- Category Pretrained Functions OCR, Entity Extraction Release stage General availability Access status Public lock open Type in API BANK STATEMENT PROCESSOR Notes If a page of a multi-page input file is the correct document type and one of the supported versions, the processor performs entity extraction on the first supported document.
- Category Pretrained Functions OCR, Entity Extraction Release stage General availability Access status Public lock open Type in API FORM W2 PROCESSOR Notes If a page of a multi-page input file is the correct document type and one of the supported versions, the processor performs entity extraction on the first supported document.

