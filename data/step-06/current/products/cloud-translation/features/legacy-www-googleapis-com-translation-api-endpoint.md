---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:22:34.614Z"
product_name: "Cloud Translation"
product_slug: "cloud-translation"
feature_name: "Legacy www.googleapis.com Translation API endpoint"
feature_slug: "legacy-www-googleapis-com-translation-api-endpoint"
latest_feature_date: "2016-11-15"
deprecation_date: "2016-11-15"
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/translate/docs/advanced/endpoints"
  - "https://docs.cloud.google.com/translate/docs/release-notes"
  - "https://docs.cloud.google.com/translate/docs/reference/rest"
keywords:
  - "legacy"
  - "www"
  - "googleapis"
  - "com"
  - "translation"
  - "api"
  - "endpoint"
  - "the"
---

# Legacy www.googleapis.com Translation API endpoint

Product: Cloud Translation
Coverage: LOW

## Step 02 Summary

The legacy www.googleapis.com endpoint is the older Translation API endpoint being phased out in favor of translation.googleapis.com; deprecated on 2016-11-15.

## Extended Definition

The legacy www.googleapis.com endpoint is the older Translation API endpoint being phased out in favor of translation.googleapis.com; deprecated on 2016-11-15.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/translate/docs/advanced/endpoints](https://docs.cloud.google.com/translate/docs/advanced/endpoints)
- [https://docs.cloud.google.com/translate/docs/release-notes](https://docs.cloud.google.com/translate/docs/release-notes)
- [https://docs.cloud.google.com/translate/docs/reference/rest](https://docs.cloud.google.com/translate/docs/reference/rest)

## Supporting Pages

### "Global and multi-regional endpoints \_|\_ Cloud Translation \_|\_ Google\

- URL: [https://docs.cloud.google.com/translate/docs/advanced/endpoints](https://docs.cloud.google.com/translate/docs/advanced/endpoints)
- Source ID: `site-iam-reference`
- Final score: 174
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Global and multi-regional endpoints Cloud Translation - Advanced offers a global endpoint as well as EU and US multi-regional endpoints: translate.googleapis.com (global) translate-eu.googleapis.com translate-us.googleapis.com If you use a multi-regional endpoint, your data at-rest and machine learning processing stays within the continental boundaries of the EU or US.
- For example, if you use the translate-eu.googleapis.com endpoint, specify a region in Europe such as europe-west1 .
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred"; "x-goog-user-project" = " PROJECT NUMBER OR ID " } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json ` -Uri "https:// ENDPOINT /v3/projects/ PROJECT NUMBER OR ID /locations/ LOCATION :translateText" Select-Object -Expand Content You should receive a JSON response similar to the following: { "translations": [ { "translatedText": "Komm her!", "model": "projects/ PROJECT NUMBER OR ID /locations/ LOCATION /models/general/base" } ] } Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Global versus multi-regional endpoints When using a multi-regional endpoint, there are some difference when compared to using the global endpoint: Text translations that use custom AutoML models are not supported.

### Cloud Translation release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/translate/docs/release-notes](https://docs.cloud.google.com/translate/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 166
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Deprecated API endpoint of www.googleapis.com will continue to work, but migrate code to translation.googleapis.com to take advantage of the latest features.
- Change The https://www.googleapis.com/language/translate/v2 endpoint now supports the Neural Machine Translation (NMT) model.
- In order for your request to be translated using the NMT model, you must send your request to the current Translation API endpoint: https://translation.googleapis.com/language/translate/v2 .
- However, we recommend that you use the https://translation.googleapis.com/language/translate/v2 endpoint for requests to the Translation API.

### Cloud Translation API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/translate/docs/reference/rest](https://docs.cloud.google.com/translate/docs/reference/rest)
- Source ID: `site-api-reference`
- Final score: 160
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- This service has the following service endpoint and all URIs below are relative to this service endpoint: https://translate.googleapis.com REST Resource: v3beta1.projects Methods detectLanguage POST /v3beta1/{parent=projects/ }:detectLanguage Detects the language of text within a request. getSupportedLanguages GET /v3beta1/{parent=projects/ }/supportedLanguages Returns a list of supported languages for translation. translateText POST /v3beta1/{parent=projects/ }:translateText Translates input text and returns translated text.
- This service provides the following discovery documents: https://translate.googleapis.com/$discovery/rest?version=v3 https://translate.googleapis.com/$discovery/rest?version=v3beta1 Service endpoint A service endpoint is a base URL that specifies the network address of an API service.
- REST Resource: v3beta1.projects REST Resource: v3beta1.projects.locations REST Resource: v3beta1.projects.locations.glossaries REST Resource: v3beta1.projects.locations.operations REST Resource: v3.projects REST Resource: v3.projects.locations REST Resource: v3.projects.locations.adaptiveMtDatasets REST Resource: v3.projects.locations.adaptiveMtDatasets.adaptiveMtFiles REST Resource: v3.projects.locations.adaptiveMtDatasets.adaptiveMtFiles.adaptiveMtSentences REST Resource: v3.projects.locations.adaptiveMtDatasets.adaptiveMtSentences REST Resource: v3.projects.locations.datasets REST Resource: v3.projects.locations.datasets.examples REST Resource: v3.projects.locations.glossaries REST Resource: v3.projects.locations.glossaries.glossaryEntries REST Resource: v3.projects.locations.models REST Resource: v3.projects.locations.operations Service: translate.googleapis.com To call this service, we recommend that you use the Google-provided client libraries .
- REST Resource: v3.projects.locations Methods adaptiveMtTranslate POST /v3/{parent=projects/ /locations/ }:adaptiveMtTranslate Translate text using Adaptive MT. batchTranslateDocument POST /v3/{parent=projects/ /locations/ }:batchTranslateDocument Translates a large volume of document in asynchronous batch mode. batchTranslateText POST /v3/{parent=projects/ /locations/ }:batchTranslateText Translates a large volume of text in asynchronous batch mode. detectLanguage POST /v3/{parent=projects/ /locations/ }:detectLanguage Detects the language of text within a request. get GET /v3/{name=projects/ /locations/ } Gets information about a location. getSupportedLanguages GET /v3/{parent=projects/ /locations/ }/supportedLanguages Returns a list of supported languages for translation. list GET /v3/{name=projects/ }/locations Lists information about the supported locations for this service. romanizeText POST /v3/{parent=projects/ /locations/ }:romanizeText Romanize input text written in non-Latin scripts to Latin text. translateDocument POST /v3/{parent=projects/ /locations/ }:translateDocument Translates documents in synchronous mode. translateText POST /v3/{parent=projects/ /locations/ }:translateText Translates input text and returns translated text.

