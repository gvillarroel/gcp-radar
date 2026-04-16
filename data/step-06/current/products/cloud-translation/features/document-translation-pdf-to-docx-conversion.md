---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:49.610Z"
product_name: "Cloud Translation"
product_slug: "cloud-translation"
feature_name: "Document Translation PDF-to-DOCX conversion"
feature_slug: "document-translation-pdf-to-docx-conversion"
latest_feature_date: "2021-11-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/translate/docs/intro-to-v3"
  - "https://docs.cloud.google.com/translate/docs/advanced/batch-translation"
  - "https://docs.cloud.google.com/translate/docs/reference/rest"
  - "https://docs.cloud.google.com/translate/docs/advanced/custom-translations"
keywords:
  - "document"
  - "translation"
  - "pdf"
  - "to"
  - "docx"
  - "conversion"
  - "batch"
  - "can"
---

# Document Translation PDF-to-DOCX conversion

Product: Cloud Translation
Coverage: MEDIUM

## Step 02 Summary

Batch document translation can convert native PDFs to DOCX output.

## Extended Definition

Batch document translation can convert native PDFs to DOCX output.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/translate/docs/intro-to-v3](https://docs.cloud.google.com/translate/docs/intro-to-v3)
- [https://docs.cloud.google.com/translate/docs/advanced/batch-translation](https://docs.cloud.google.com/translate/docs/advanced/batch-translation)
- [https://docs.cloud.google.com/translate/docs/reference/rest](https://docs.cloud.google.com/translate/docs/reference/rest)
- [https://docs.cloud.google.com/translate/docs/advanced/custom-translations](https://docs.cloud.google.com/translate/docs/advanced/custom-translations)

## Supporting Pages

### Overview of the Cloud Translation API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/translate/docs/intro-to-v3](https://docs.cloud.google.com/translate/docs/intro-to-v3)
- Source ID: `site-iam-reference`
- Final score: 215
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Document Translation Document Translation lets you directly translate existing documents, such as PDF and DOCX files, to a target language.
- Feature Basic Advanced Translate with the NMT model Translate with the Translation LLM Translate with Adaptive Translation models Translate with custom models Translate multiple strings in a single request Batch translations with Cloud Storage Translate documents Glossary support (control terminology) Train custom models Language Detection Integrated REST API Integrated gRPC API Service Account API Key Audit logging Supports HTML Supports 100+ Languages Romanization support Transliteration support Adaptive Translation Multi-regional endpoint support VPC Service Controls support Refer to Cloud Translation - Advanced API features for more details on Cloud Translation - Advanced API.
- It also offers features such as glossaries, batch translation, document translation, and more: Glossaries : A glossary is a custom dictionary that you create to translate domain-specific terms correctly and consistently.
- For example, if you already have a customized NMT model that you use for text translations, you can use that same model for Document Translation.

### Batch requests (Advanced) \_|\_ Cloud Translation \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/translate/docs/advanced/batch-translation](https://docs.cloud.google.com/translate/docs/advanced/batch-translation)
- Source ID: `site-iam-reference`
- Final score: 207
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- TranslationServiceClient () Supported file types: https://cloud.google.com/translate/docs/supported-formats gcs source = { "input uri" : input uri } location = "us-central1" input configs element = { "gcs source" : gcs source , "mime type" : "text/plain" , # Can be "text/plain" or "text/html". } gcs destination = { "output uri prefix" : output uri } output config = { "gcs destination" : gcs destination } parent = f "projects/ { project id } /locations/ { location } " model path = "projects/ {} /locations/ {} /models/ {} " . format ( project id , location , model id # The location of AutoML model. ) Supported language codes: https://cloud.google.com/translate/docs/languages models = { "ja" : model path } # takes a target lang as key. operation = client . batch translate text ( request = { "parent" : parent , "source language code" : "en" , "target language codes" : [ "ja" ], # Up to 10 language codes here. "input configs" : [ input configs element ], "output config" : output config , "models" : models , } ) print ( "Waiting for operation to complete..." ) response = operation . result () Display the translation for each input text provided. print ( f "Total Characters: { response . total characters } " ) print ( f "Translated Characters: { response . translated characters } " ) return response Additional languages C# : Please follow the C# setup instructions on the client libraries page and then visit the Cloud Translation reference documentation for .NET.
- TranslationServiceClient () location = "us-central1" Supported file types: https://cloud.google.com/translate/docs/supported-formats gcs source = { "input uri" : input uri } input configs element = { "gcs source" : gcs source , "mime type" : "text/plain" , # Can be "text/plain" or "text/html". } gcs destination = { "output uri prefix" : output uri } output config = { "gcs destination" : gcs destination } parent = f "projects/ { project id } /locations/ { location } " Supported language codes: https://cloud.google.com/translate/docs/languages operation = client . batch translate text ( request = { "parent" : parent , "source language code" : "en" , "target language codes" : [ "ja" ], # Up to 10 language codes here. "input configs" : [ input configs element ], "output config" : output config , } ) print ( "Waiting for operation to complete..." ) response = operation . result ( timeout ) print ( f "Total Characters: { response . total characters } " ) print ( f "Translated Characters: { response . translated characters } " ) return response Additional languages C# : Please follow the C# setup instructions on the client libraries page and then visit the Cloud Translation reference documentation for .NET.
- TranslateTextGlossaryConfig ( glossary = glossary path ) glossaries = { "ja" : glossary config } # target lang as key operation = client . batch translate text ( request = { "parent" : parent , "source language code" : "en" , "target language codes" : target language codes , "input configs" : input configs , "output config" : output config , "models" : models , "glossaries" : glossaries , } ) print ( "Waiting for operation to complete..." ) response = operation . result () Display the translation for each input text provided print ( f "Total Characters: { response . total characters } " ) print ( f "Translated Characters: { response . translated characters } " ) return response Additional languages C# : Please follow the C# setup instructions on the client libraries page and then visit the Cloud Translation reference documentation for .NET.
- TranslateTextGlossaryConfig ( glossary = glossary path ) glossaries = { "ja" : glossary config } # target lang as key operation = client . batch translate text ( request = { "parent" : parent , "source language code" : "en" , "target language codes" : [ "ja" ], # Up to 10 language codes here. "input configs" : [ input configs element ], "glossaries" : glossaries , "output config" : output config , } ) print ( "Waiting for operation to complete..." ) response = operation . result ( timeout ) print ( f "Total Characters: { response . total characters } " ) print ( f "Translated Characters: { response . translated characters } " ) return response Additional languages C# : Please follow the C# setup instructions on the client libraries page and then visit the Cloud Translation reference documentation for .NET.

### Cloud Translation API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/translate/docs/reference/rest](https://docs.cloud.google.com/translate/docs/reference/rest)
- Source ID: `site-api-reference`
- Final score: 171
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- REST Resource: v3.projects.locations Methods adaptiveMtTranslate POST /v3/{parent=projects/ /locations/ }:adaptiveMtTranslate Translate text using Adaptive MT. batchTranslateDocument POST /v3/{parent=projects/ /locations/ }:batchTranslateDocument Translates a large volume of document in asynchronous batch mode. batchTranslateText POST /v3/{parent=projects/ /locations/ }:batchTranslateText Translates a large volume of text in asynchronous batch mode. detectLanguage POST /v3/{parent=projects/ /locations/ }:detectLanguage Detects the language of text within a request. get GET /v3/{name=projects/ /locations/ } Gets information about a location. getSupportedLanguages GET /v3/{parent=projects/ /locations/ }/supportedLanguages Returns a list of supported languages for translation. list GET /v3/{name=projects/ }/locations Lists information about the supported locations for this service. romanizeText POST /v3/{parent=projects/ /locations/ }:romanizeText Romanize input text written in non-Latin scripts to Latin text. translateDocument POST /v3/{parent=projects/ /locations/ }:translateDocument Translates documents in synchronous mode. translateText POST /v3/{parent=projects/ /locations/ }:translateText Translates input text and returns translated text.
- REST Resource: v3beta1.projects.locations Methods batchTranslateDocument POST /v3beta1/{parent=projects/ /locations/ }:batchTranslateDocument Translates a large volume of document in asynchronous batch mode. batchTranslateText POST /v3beta1/{parent=projects/ /locations/ }:batchTranslateText Translates a large volume of text in asynchronous batch mode. detectLanguage POST /v3beta1/{parent=projects/ /locations/ }:detectLanguage Detects the language of text within a request. get GET /v3beta1/{name=projects/ /locations/ } Gets information about a location. getSupportedLanguages GET /v3beta1/{parent=projects/ /locations/ }/supportedLanguages Returns a list of supported languages for translation. list GET /v3beta1/{name=projects/ }/locations Lists information about the supported locations for this service. translateDocument POST /v3beta1/{parent=projects/ /locations/ }:translateDocument Translates documents in synchronous mode. translateText POST /v3beta1/{parent=projects/ /locations/ }:translateText Translates input text and returns translated text.
- REST Resource: v3.projects.locations.datasets Methods create POST /v3/{parent=projects/ /locations/ }/datasets Creates a Dataset. delete DELETE /v3/{name=projects/ /locations/ /datasets/ } Deletes a dataset and all of its contents. exportData POST /v3/{dataset=projects/ /locations/ /datasets/ }:exportData Exports dataset's data to the provided output location. get GET /v3/{name=projects/ /locations/ /datasets/ } Gets a Dataset. importData POST /v3/{dataset=projects/ /locations/ /datasets/ }:importData Import sentence pairs into translation Dataset. list GET /v3/{parent=projects/ /locations/ }/datasets Lists datasets.
- This service has the following service endpoint and all URIs below are relative to this service endpoint: https://translate.googleapis.com REST Resource: v3beta1.projects Methods detectLanguage POST /v3beta1/{parent=projects/ }:detectLanguage Detects the language of text within a request. getSupportedLanguages GET /v3beta1/{parent=projects/ }/supportedLanguages Returns a list of supported languages for translation. translateText POST /v3beta1/{parent=projects/ }:translateText Translates input text and returns translated text.

### "Custom translations overview \_|\_ Cloud Translation \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/translate/docs/advanced/custom-translations](https://docs.cloud.google.com/translate/docs/advanced/custom-translations)
- Source ID: `site-iam-reference`
- Final score: 167
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The advanced version of the Cloud Translation API provides a variety of solutions for customizing translations: NMT customization : You can train your own custom version of the standard NMT model with a rich dataset of translation examples.
- TLLM customization : You can tune your own custom version of the standard Translation LLM (TLLM) model with either a limited or extensive dataset of translation examples.
- Adaptive Translation : You can create a lightweight customization of the Translation LLM (TLLM) model with a limited dataset of translation examples.
- However, in cases where you're translating domain-specific or style-sensitive text, custom translations can help you get more relevant translations.

