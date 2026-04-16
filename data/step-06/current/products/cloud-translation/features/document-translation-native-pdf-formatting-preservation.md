---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:49.609Z"
product_name: "Cloud Translation"
product_slug: "cloud-translation"
feature_name: "Document Translation native PDF formatting preservation"
feature_slug: "document-translation-native-pdf-formatting-preservation"
latest_feature_date: "2021-11-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/translate/docs/intro-to-v3"
  - "https://docs.cloud.google.com/translate/docs/advanced/batch-translation"
  - "https://docs.cloud.google.com/translate/docs/advanced/automl-upgrade"
  - "https://docs.cloud.google.com/translate/docs"
keywords:
  - "document"
  - "translation"
  - "native"
  - "pdf"
  - "formatting"
  - "preservation"
  - "preserves"
  - "font"
---

# Document Translation native PDF formatting preservation

Product: Cloud Translation
Coverage: MEDIUM

## Step 02 Summary

Document Translation preserves font size, font color, font style, and hyperlinks for native PDFs.

## Extended Definition

Document Translation preserves font size, font color, font style, and hyperlinks for native PDFs.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/translate/docs/intro-to-v3](https://docs.cloud.google.com/translate/docs/intro-to-v3)
- [https://docs.cloud.google.com/translate/docs/advanced/batch-translation](https://docs.cloud.google.com/translate/docs/advanced/batch-translation)
- [https://docs.cloud.google.com/translate/docs/advanced/automl-upgrade](https://docs.cloud.google.com/translate/docs/advanced/automl-upgrade)
- [https://docs.cloud.google.com/translate/docs](https://docs.cloud.google.com/translate/docs)

## Supporting Pages

### Overview of the Cloud Translation API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/translate/docs/intro-to-v3](https://docs.cloud.google.com/translate/docs/intro-to-v3)
- Source ID: `site-iam-reference`
- Final score: 113
- Re-rank relevance: N/A

Evidence snippets:
- Document Translation Document Translation lets you directly translate existing documents, such as PDF and DOCX files, to a target language.
- Document Translation preserves the original format so that translated documents have the same layout and format as the original documents.
- Document Translation : This feature lets you translate documents such as PDF files while preserving their original format and layout.
- Feature Basic Advanced Translate with the NMT model Translate with the Translation LLM Translate with Adaptive Translation models Translate with custom models Translate multiple strings in a single request Batch translations with Cloud Storage Translate documents Glossary support (control terminology) Train custom models Language Detection Integrated REST API Integrated gRPC API Service Account API Key Audit logging Supports HTML Supports 100+ Languages Romanization support Transliteration support Adaptive Translation Multi-regional endpoint support VPC Service Controls support Refer to Cloud Translation - Advanced API features for more details on Cloud Translation - Advanced API.

### Batch requests (Advanced) \_|\_ Cloud Translation \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/translate/docs/advanced/batch-translation](https://docs.cloud.google.com/translate/docs/advanced/batch-translation)
- Source ID: `site-iam-reference`
- Final score: 109
- Re-rank relevance: N/A

Evidence snippets:
- TranslationServiceClient () Supported file types: https://cloud.google.com/translate/docs/supported-formats gcs source = { "input uri" : input uri } location = "us-central1" input configs element = { "gcs source" : gcs source , "mime type" : "text/plain" , # Can be "text/plain" or "text/html". } gcs destination = { "output uri prefix" : output uri } output config = { "gcs destination" : gcs destination } parent = f "projects/ { project id } /locations/ { location } " model path = "projects/ {} /locations/ {} /models/ {} " . format ( project id , location , model id # The location of AutoML model. ) Supported language codes: https://cloud.google.com/translate/docs/languages models = { "ja" : model path } # takes a target lang as key. operation = client . batch translate text ( request = { "parent" : parent , "source language code" : "en" , "target language codes" : [ "ja" ], # Up to 10 language codes here. "input configs" : [ input configs element ], "output config" : output config , "models" : models , } ) print ( "Waiting for operation to complete..." ) response = operation . result () Display the translation for each input text provided. print ( f "Total Characters: { response . total characters } " ) print ( f "Translated Characters: { response . translated characters } " ) return response Additional languages C# : Please follow the C# setup instructions on the client libraries page and then visit the Cloud Translation reference documentation for .NET.
- TranslationServiceClient () location = "us-central1" Supported file types: https://cloud.google.com/translate/docs/supported-formats gcs source = { "input uri" : input uri } input configs element = { "gcs source" : gcs source , "mime type" : "text/plain" , # Can be "text/plain" or "text/html". } gcs destination = { "output uri prefix" : output uri } output config = { "gcs destination" : gcs destination } parent = f "projects/ { project id } /locations/ { location } " Supported language codes: https://cloud.google.com/translate/docs/languages operation = client . batch translate text ( request = { "parent" : parent , "source language code" : "en" , "target language codes" : [ "ja" ], # Up to 10 language codes here. "input configs" : [ input configs element ], "output config" : output config , } ) print ( "Waiting for operation to complete..." ) response = operation . result ( timeout ) print ( f "Total Characters: { response . total characters } " ) print ( f "Translated Characters: { response . translated characters } " ) return response Additional languages C# : Please follow the C# setup instructions on the client libraries page and then visit the Cloud Translation reference documentation for .NET.
- TranslateTextGlossaryConfig ( glossary = glossary path ) glossaries = { "ja" : glossary config } # target lang as key operation = client . batch translate text ( request = { "parent" : parent , "source language code" : "en" , "target language codes" : target language codes , "input configs" : input configs , "output config" : output config , "models" : models , "glossaries" : glossaries , } ) print ( "Waiting for operation to complete..." ) response = operation . result () Display the translation for each input text provided print ( f "Total Characters: { response . total characters } " ) print ( f "Translated Characters: { response . translated characters } " ) return response Additional languages C# : Please follow the C# setup instructions on the client libraries page and then visit the Cloud Translation reference documentation for .NET.
- TranslateTextGlossaryConfig ( glossary = glossary path ) glossaries = { "ja" : glossary config } # target lang as key operation = client . batch translate text ( request = { "parent" : parent , "source language code" : "en" , "target language codes" : [ "ja" ], # Up to 10 language codes here. "input configs" : [ input configs element ], "glossaries" : glossaries , "output config" : output config , } ) print ( "Waiting for operation to complete..." ) response = operation . result ( timeout ) print ( f "Total Characters: { response . total characters } " ) print ( f "Translated Characters: { response . translated characters } " ) return response Additional languages C# : Please follow the C# setup instructions on the client libraries page and then visit the Cloud Translation reference documentation for .NET.

### Upgrade AutoML resources \_|\_ Cloud Translation \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/translate/docs/advanced/automl-upgrade](https://docs.cloud.google.com/translate/docs/advanced/automl-upgrade)
- Source ID: `site-iam-reference`
- Final score: 107
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example, if you have commands that call the deprecated AutoML API and reference legacy resource IDs, you need to update those commands to call the Cloud Translation API and reference the native resource IDs.
- During the upgrade, Cloud Translation copies your AutoML (legacy) resources, such as datasets and models, and creates new Cloud Translation (native) resources through the Cloud Translation API.
- Cloud Translation API To manage native resources through the Cloud Translation API, you need to update your code to call the correct APIs with the correct resource IDs.
- Home Documentation AI and ML Cloud Translation Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.

### Cloud Translation documentation \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/translate/docs](https://docs.cloud.google.com/translate/docs)
- Source ID: `site-api-reference`
- Final score: 100
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Documentation resources Find quickstarts and guides, review key references, and get help with common issues. format list numbered Guides Setup Quickstart: Translate text with Cloud Translation Basic Quickstart: Translate text with Cloud Translation Advanced What is Cloud Translation?
- Home Documentation AI and ML Cloud Translation Cloud Translation documentation Read product documentation Cloud Translation can dynamically translate text between thousands of language pairs.
- Compare Basic and Advanced Translating text (Basic) Translating text (Advanced) find in page Reference Language support REST API API usage overview Client libraries overview (Basic) Client libraries overview (Advanced) info Resources Pricing Quotas and limits Release notes Troubleshooting Billing Questions Related videos Try Cloud Translation for yourself Create an account to evaluate how our products perform in real-world scenarios.
- Try Cloud Translation free Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

