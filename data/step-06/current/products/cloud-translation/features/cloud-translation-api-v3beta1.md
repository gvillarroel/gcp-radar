---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:22:34.610Z"
product_name: "Cloud Translation"
product_slug: "cloud-translation"
feature_name: "Cloud Translation API v3beta1"
feature_slug: "cloud-translation-api-v3beta1"
latest_feature_date: "2019-04-10"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/translate/docs/reference/rest"
  - "https://docs.cloud.google.com/translate/docs/release-notes"
  - "https://docs.cloud.google.com/translate/docs/intro-to-v3"
keywords:
  - "translation"
  - "api"
  - "v3beta1"
  - "introduces"
  - "the"
  - "v3"
  - "beta"
  - "interface"
---

# Cloud Translation API v3beta1

Product: Cloud Translation
Coverage: LOW

## Step 02 Summary

Cloud Translation API v3beta1 introduces the v3 beta interface for advanced translation features.

## Extended Definition

Cloud Translation API v3beta1 introduces the v3 beta interface for advanced translation features.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/translate/docs/reference/rest](https://docs.cloud.google.com/translate/docs/reference/rest)
- [https://docs.cloud.google.com/translate/docs/release-notes](https://docs.cloud.google.com/translate/docs/release-notes)
- [https://docs.cloud.google.com/translate/docs/intro-to-v3](https://docs.cloud.google.com/translate/docs/intro-to-v3)

## Supporting Pages

### Cloud Translation API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/translate/docs/reference/rest](https://docs.cloud.google.com/translate/docs/reference/rest)
- Source ID: `site-api-reference`
- Final score: 154
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- This service has the following service endpoint and all URIs below are relative to this service endpoint: https://translate.googleapis.com REST Resource: v3beta1.projects Methods detectLanguage POST /v3beta1/{parent=projects/ }:detectLanguage Detects the language of text within a request. getSupportedLanguages GET /v3beta1/{parent=projects/ }/supportedLanguages Returns a list of supported languages for translation. translateText POST /v3beta1/{parent=projects/ }:translateText Translates input text and returns translated text.
- REST Resource: v3beta1.projects.locations Methods batchTranslateDocument POST /v3beta1/{parent=projects/ /locations/ }:batchTranslateDocument Translates a large volume of document in asynchronous batch mode. batchTranslateText POST /v3beta1/{parent=projects/ /locations/ }:batchTranslateText Translates a large volume of text in asynchronous batch mode. detectLanguage POST /v3beta1/{parent=projects/ /locations/ }:detectLanguage Detects the language of text within a request. get GET /v3beta1/{name=projects/ /locations/ } Gets information about a location. getSupportedLanguages GET /v3beta1/{parent=projects/ /locations/ }/supportedLanguages Returns a list of supported languages for translation. list GET /v3beta1/{name=projects/ }/locations Lists information about the supported locations for this service. translateDocument POST /v3beta1/{parent=projects/ /locations/ }:translateDocument Translates documents in synchronous mode. translateText POST /v3beta1/{parent=projects/ /locations/ }:translateText Translates input text and returns translated text.
- REST Resource: v3beta1.projects REST Resource: v3beta1.projects.locations REST Resource: v3beta1.projects.locations.glossaries REST Resource: v3beta1.projects.locations.operations REST Resource: v3.projects REST Resource: v3.projects.locations REST Resource: v3.projects.locations.adaptiveMtDatasets REST Resource: v3.projects.locations.adaptiveMtDatasets.adaptiveMtFiles REST Resource: v3.projects.locations.adaptiveMtDatasets.adaptiveMtFiles.adaptiveMtSentences REST Resource: v3.projects.locations.adaptiveMtDatasets.adaptiveMtSentences REST Resource: v3.projects.locations.datasets REST Resource: v3.projects.locations.datasets.examples REST Resource: v3.projects.locations.glossaries REST Resource: v3.projects.locations.glossaries.glossaryEntries REST Resource: v3.projects.locations.models REST Resource: v3.projects.locations.operations Service: translate.googleapis.com To call this service, we recommend that you use the Google-provided client libraries .
- This service provides the following discovery documents: https://translate.googleapis.com/$discovery/rest?version=v3 https://translate.googleapis.com/$discovery/rest?version=v3beta1 Service endpoint A service endpoint is a base URL that specifies the network address of an API service.

### Cloud Translation release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/translate/docs/release-notes](https://docs.cloud.google.com/translate/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 146
- Re-rank relevance: N/A

Evidence snippets:
- Each account receives $10 worth of free usage per month, applied to usage of any of these SKUs: Neural Translation Model Predictions (D90A-CFB2-7CCD) Neural Translation Model Predictions In Translation V3 (E205-31DB-F1F4) Phrase-Based Translation Model Predictions (53BA-5E1D-4314) This credit replaces the free tier for Text Translation requests using NMT for 0-500k characters on Translation API v3beta1.
- In addition to the features of Cloud Translation API v3beta1, Translation API - Advanced supports: User labels Audit logging Separate quotas for batch translation and for translation using AutoML models Client libraries for additional languages PHP, GO, C#, and Ruby Note: Existing users should pay careful attention to client library versions before updating.
- Translation API - Advanced also fixes bugs from the v3beta1 version, notably for the glossary feature.
- April 10, 2019 Feature Cloud Translation API v3beta1 is now available.

### Overview of the Cloud Translation API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/translate/docs/intro-to-v3](https://docs.cloud.google.com/translate/docs/intro-to-v3)
- Source ID: `site-iam-reference`
- Final score: 128
- Re-rank relevance: N/A

Evidence snippets:
- Cloud Translation - Advanced API The Advanced edition is accessed through v3 client libraries and requires service account authentication that's integrated with IAM roles.
- Feature Basic Advanced Translate with the NMT model Translate with the Translation LLM Translate with Adaptive Translation models Translate with custom models Translate multiple strings in a single request Batch translations with Cloud Storage Translate documents Glossary support (control terminology) Train custom models Language Detection Integrated REST API Integrated gRPC API Service Account API Key Audit logging Supports HTML Supports 100+ Languages Romanization support Transliteration support Adaptive Translation Multi-regional endpoint support VPC Service Controls support Refer to Cloud Translation - Advanced API features for more details on Cloud Translation - Advanced API.
- Advanced API features Using Cloud Translation - Advanced API rather than Cloud Translation - Basic API gives you access to the following features that can make your translation solution more robust and better suited to your specific use case: Model selection and customization Cloud Translation - Advanced API model selection lets you dynamically select different models, including models that you customize to suit your particular application.
- Compare supported models Customize the NMT model Customize the Translation LLM Supported languages Supported formats Perform adaptive translation Migrate to Translation Advanced For answers to general questions about Cloud Translation API, refer to the General FAQs page.

