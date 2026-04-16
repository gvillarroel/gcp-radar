---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:14:31.916Z"
product_name: "Document AI"
product_slug: "document-ai"
feature_name: "Custom Extractor model pretrained-foundation-model-v1.3-2024-08-31"
feature_slug: "custom-extractor-model-pretrained-foundation-model-v1-3-2024-08-31"
latest_feature_date: "2025-03-24"
deprecation_date: "2025-09-24"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/document-ai/docs/ce-with-genai"
  - "https://docs.cloud.google.com/document-ai/docs/manage-processor-versions"
  - "https://docs.cloud.google.com/document-ai/docs/fields"
  - "https://docs.cloud.google.com/document-ai/docs/languages"
keywords:
  - "custom"
  - "extractor"
  - "model"
  - "pretrained"
  - "foundation"
  - "v1"
  - "2024"
  - "08"
---

# Custom Extractor model pretrained-foundation-model-v1.3-2024-08-31

Product: Document AI
Coverage: MEDIUM

## Step 02 Summary

The Custom Extractor model version pretrained-foundation-model-v1.3-2024-08-31 will no longer be accessible effective 2025-09-24; deprecated on 2025-09-24.

## Extended Definition

The Custom Extractor model version pretrained-foundation-model-v1.3-2024-08-31 will no longer be accessible effective 2025-09-24; deprecated on 2025-09-24.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/document-ai/docs/ce-with-genai](https://docs.cloud.google.com/document-ai/docs/ce-with-genai)
- [https://docs.cloud.google.com/document-ai/docs/manage-processor-versions](https://docs.cloud.google.com/document-ai/docs/manage-processor-versions)
- [https://docs.cloud.google.com/document-ai/docs/fields](https://docs.cloud.google.com/document-ai/docs/fields)
- [https://docs.cloud.google.com/document-ai/docs/languages](https://docs.cloud.google.com/document-ai/docs/languages)

## Supporting Pages

### "Custom extractor with generative AI \_|\_ Document AI \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/document-ai/docs/ce-with-genai](https://docs.cloud.google.com/document-ai/docs/ce-with-genai)
- Source ID: `site-docs-root`
- Final score: 238
- Re-rank relevance: N/A

Evidence snippets:
- For fine-tuning, you need a minimum of 1 document to train a new model with version for pretrained-foundation-model-v1.2-2024-05-10 and pretrained-foundation-model-v1.3-2024-08-31 .
- The test dataset should have at least one document for pretrained-foundation-model-v1.2-2024-05-10 and pretrained-foundation-model-v1.3-2024-08-31 .
- Stable Yes No June 20, 2025 pretrained-foundation-model-v1.5.1-2025-08-07 Public preview model powered by the Gemini 2.5 Flash LLM.
- HTTP method and URL: POST https:// LOCATION -documentai.googleapis.com/v1beta3/projects/ PROJECT ID /locations/ LOCATION /processors/ PROCESSOR ID /processorVersions/ PROCESSOR VERSION :process Request JSON body: { "rawDocument": { "parent": "projects/ PROJECT ID /locations/ LOCATION /processors/ PROCESSOR ID ", "processor version": { "name": "projects/ PROJECT ID /locations/ LOCATION /processors/ PROCESSOR ID /processorVersions/ DISPLAY NAME ", "display name": " DISPLAY NAME ", "model type": "MODEL TYPE GENERATIVE", }, "base processor version": "projects/ PROJECT ID /locations/us/processors/ PROCESSOR ID /processorVersions/ PRETRAINED PROCESSOR VERSION ", "foundation model tuning options": { "train steps": TRAIN STEPS , "learning rate multiplier": LEARN RATE MULTIPLIER , } "document schema": DOCUMENT SCHEMA } } To send your request, choose one of these options: curl Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .

### Managing processor versions \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/manage-processor-versions](https://docs.cloud.google.com/document-ai/docs/manage-processor-versions)
- Source ID: `site-docs-root-2`
- Final score: 218
- Re-rank relevance: N/A

Evidence snippets:
- Custom Extractor Release date Deprecation date pretrained-foundation-model-v1.5-2025-05-05 May 5, 2025 Not applicable pretrained-foundation-model-v1.5-pro-2025-06-20 June 20, 2025 Not applicable Form Parser Release date Deprecation date pretrained-form-parser-v1.0-2020-09-23 September 23, 2020 Not applicable pretrained-form-parser-v2.0-2022-11-10 November 10, 2022 Not applicable Layout Parser Release date Deprecation date pretrained-layout-parser-v1.0-2024-06-03 June 3, 2024 Not applicable Bank Statement Parser Release date Deprecation date pretrained-bankstatement-v1.0-2021-08-08 August 8, 2021 Not applicable pretrained-bankstatement-v1.1-2021-08-13 August 13, 2021 Not applicable pretrained-bankstatement-v2.0-2021-12-10 December 10, 2021 Not applicable pretrained-bankstatement-v3.0-2022-05-16 May 16, 2022 Not applicable pretrained-bankstatement-v5.0-2023-12-06 December 6, 2023 Not applicable W2 Parser Release date Deprecation date pretrained-w2-v1.0-2020-10-01 October 1, 2020 March 31, 2024 pretrained-w2-v1.1-2022-01-27 January 27, 2022 March 31, 2024 pretrained-w2-v1.2-2022-01-28 January 28, 2022 Not applicable pretrained-w2-v2.1-2022-06-08 June 8, 2022 Not applicable US Passport Parser Release date Deprecation date pretrained-us-passport-v1.0-2021-06-14 June 14, 2021 June 30, 2026 Utility Parser Release date Deprecation date pretrained-utility-v1.1-2021-04-09 April 9, 2021 June 30, 2026 Identity Document Proofing Parser Release date Deprecation date pretrained-id-proofing-v1.0-2022-10-03 October 3, 2022 Not applicable Pay Slip Parser Release date Deprecation date pretrained-paystub-v1.0-2021-03-19 March 19, 2021 Not applicable pretrained-paystub-v1.1-2021-08-13 August 13, 2021 Not applicable pretrained-paystub-v1.2-2021-12-10 December 10, 2021 Not applicable pretrained-paystub-v2.0-2022-07-22 July 22, 2022 Not applicable pretrained-paystub-v3.0-2023-12-06 December 6, 2023 Not applicable US Driver License Parser Release date Deprecation date pretrained-us-driver-license-v1.0-2021-06-14 June 14, 2021 Not applicable Expense Parser Release date Deprecation date pretrained-expense-v1.1-2021-04-09 April 9, 2024 Not applicable pretrained-expense-v1.4-2022-11-18 November 18, 2022 Not applicable pretrained-expense-v1.4.2-2024-09-12 September 12, 2024 Not applicable Invoice Parser Release date Deprecation date pretrained-invoice-v1.1-2021-04-09 April 9, 2024 Not applicable pretrained-invoice-v1.2-2022-02-18 February 18, 2022 Not applicable pretrained-invoice-v1.3-2022-07-15 July 15, 2022 Not applicable pretrained-invoice-v2.0-2023-12-06 December 6, 2023 Not applicable Summarizer Release date Deprecation date pretrained-foundation-model-v1.0-2023-08-22 August 22, 2023 June 30, 2026 Enterprise Document OCR (Optical Character Recognition) Release date Deprecation date pretrained-ocr-v1.2-2022-11-10 November 10, 2022 Not applicable pretrained-ocr-v2.0-2023-06-02 June 2, 2023 Not applicable pretrained-ocr-v2.1-2024-08-07 August 7, 2024 Not applicable Processor version lifecycle As soon as a new Google version is available, you should create and evaluate new user versions with the new base version.
- For processor versions based on Gemini 1.5 and later, such as custom extractors pretrained-foundation-model-v1.2-2024-05-10 , you can import fine-tuned processor versions.
- Google published a new stable version named pretrained-foundation-model-v1.2-2024-05-10 (v1.2) and announced that the v1.0 stable version is to be deprecated on April 9, 2025.
- The base version that powers the fine-tune-A model is the pretrained-foundation-model-v1.0-2023-08-22 (v1.0) stable version.

### Processor list \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/fields](https://docs.cloud.google.com/document-ai/docs/fields)
- Source ID: `site-docs-reference`
- Final score: 204
- Re-rank relevance: N/A

Evidence snippets:
- Supported languages Full list of languages Language Name BCP 47 Tag Script Handwriting supported Afrikaans af Latn Arabic ar Arab Azerbaijani az Latn Azerbaijani (Cyrillic) az-Cyrl Cyrl Belarusian be Cyrl Bulgarian bg Cyrl Bosnian bs Latn Catalan ca Latn Cebuano ceb Latn Czech cs Latn Welsh cy Latn Danish da Latn German de Latn Greek el Grek English en Latn Esperanto eo Latn Spanish es Latn Estonian et Latn Basque eu Latn Persian fa Arab Finnish fi Latn Filipino fil Latn French fr Latn Irish ga Latn Galician gl Latn Hindi hi Deva Croatian hr Latn Haitian Creole ht Latn Hungarian hu Latn Indonesian id Latn Icelandic is Latn Italian it Latn Hebrew iw Hebr Japanese ja Jpan Javanese jv Latn Kazakh kk Cyrl Korean ko Kore Kyrgyz ky Cyrl Latin la Latn Lithuanian lt Latn Latvian lv Latn Macedonian mk Cyrl Mongolian mn Cyrl Marathi mr Deva Malay ms Latn Maltese mt Latn Nepali ne Deva Dutch nl Latn Norwegian no Latn Polish pl Latn Pashto ps Arab Portuguese (Portugal & Brazil) pt Latn Romanian ro Latn Russian ru Cyrl Russian (Petrine Orthography) ru-PETR1708 Cyrl Sanskrit sa Deva Slovak sk Latn Slovenian sl Latn Albanian sq Latn Serbian sr Cyrl Swedish sv Latn Swahili sw Latn Tagalog tl Latn Turkish tr Latn Ukrainian uk Cyrl Urdu ur Arab Uzbek uz Latn Uzbek (Cyrillic) uz-Cyrl Cyrl Vietnamese vi Latn Yiddish yi Hebr Chinese simplified zh-Hans Hani Chinese traditional zh-Hant Hani Zulu zu Latn Processor versions Version ID Release Channel Release Maturity Description pretrained-foundation-model-v1.5-2025-05-05 Stable GA Production-ready candidate powered by Gemini 2.5 Flash LLM.
- Category Classify Functions OCR, Classification Release stage General availability Access status Public lock open Type in API CUSTOM CLASSIFICATION PROCESSOR Supported languages Language Name BCP 47 Tag Script Handwriting supported English en Latn Processor versions Version ID Release Channel Release Maturity Description pretrained-classifier-v1.5-2025-08-05 Stable GA Production-ready model powered by the Gemini 2.5 Flash LLM.
- Category pretrained Functions Summarize Release stage Preview Access status Public lock open Type in API SUMMARY PROCESSOR Supported languages Language Name BCP 47 Tag Script Handwriting supported English en Latn Processor versions Version ID Release Channel Release Maturity Description pretrained-foundation-model-v1.0-2023-08-22 Stable GA Google foundation model For more information, see Managing processor versions.
- This model has improved quality compared to v1.5, and may have a higher latency. pretrained-foundation-model-v1.5.1-2025-08-07 Release candidate Public Preview Public preview model powered by the Gemini 2.5 Flash LLM.

### Processor list \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/languages](https://docs.cloud.google.com/document-ai/docs/languages)
- Source ID: `site-docs-reference`
- Final score: 204
- Re-rank relevance: N/A

Evidence snippets:
- Supported languages Full list of languages Language Name BCP 47 Tag Script Handwriting supported Afrikaans af Latn Arabic ar Arab Azerbaijani az Latn Azerbaijani (Cyrillic) az-Cyrl Cyrl Belarusian be Cyrl Bulgarian bg Cyrl Bosnian bs Latn Catalan ca Latn Cebuano ceb Latn Czech cs Latn Welsh cy Latn Danish da Latn German de Latn Greek el Grek English en Latn Esperanto eo Latn Spanish es Latn Estonian et Latn Basque eu Latn Persian fa Arab Finnish fi Latn Filipino fil Latn French fr Latn Irish ga Latn Galician gl Latn Hindi hi Deva Croatian hr Latn Haitian Creole ht Latn Hungarian hu Latn Indonesian id Latn Icelandic is Latn Italian it Latn Hebrew iw Hebr Japanese ja Jpan Javanese jv Latn Kazakh kk Cyrl Korean ko Kore Kyrgyz ky Cyrl Latin la Latn Lithuanian lt Latn Latvian lv Latn Macedonian mk Cyrl Mongolian mn Cyrl Marathi mr Deva Malay ms Latn Maltese mt Latn Nepali ne Deva Dutch nl Latn Norwegian no Latn Polish pl Latn Pashto ps Arab Portuguese (Portugal & Brazil) pt Latn Romanian ro Latn Russian ru Cyrl Russian (Petrine Orthography) ru-PETR1708 Cyrl Sanskrit sa Deva Slovak sk Latn Slovenian sl Latn Albanian sq Latn Serbian sr Cyrl Swedish sv Latn Swahili sw Latn Tagalog tl Latn Turkish tr Latn Ukrainian uk Cyrl Urdu ur Arab Uzbek uz Latn Uzbek (Cyrillic) uz-Cyrl Cyrl Vietnamese vi Latn Yiddish yi Hebr Chinese simplified zh-Hans Hani Chinese traditional zh-Hant Hani Zulu zu Latn Processor versions Version ID Release Channel Release Maturity Description pretrained-foundation-model-v1.5-2025-05-05 Stable GA Production-ready candidate powered by Gemini 2.5 Flash LLM.
- Category Classify Functions OCR, Classification Release stage General availability Access status Public lock open Type in API CUSTOM CLASSIFICATION PROCESSOR Supported languages Language Name BCP 47 Tag Script Handwriting supported English en Latn Processor versions Version ID Release Channel Release Maturity Description pretrained-classifier-v1.5-2025-08-05 Stable GA Production-ready model powered by the Gemini 2.5 Flash LLM.
- Category pretrained Functions Summarize Release stage Preview Access status Public lock open Type in API SUMMARY PROCESSOR Supported languages Language Name BCP 47 Tag Script Handwriting supported English en Latn Processor versions Version ID Release Channel Release Maturity Description pretrained-foundation-model-v1.0-2023-08-22 Stable GA Google foundation model For more information, see Managing processor versions.
- This model has improved quality compared to v1.5, and may have a higher latency. pretrained-foundation-model-v1.5.1-2025-08-07 Release candidate Public Preview Public preview model powered by the Gemini 2.5 Flash LLM.

