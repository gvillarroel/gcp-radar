---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:49.616Z"
product_name: "Cloud Translation"
product_slug: "cloud-translation"
feature_name: "translation.googleapis.com API endpoint"
feature_slug: "translation-googleapis-com-api-endpoint"
latest_feature_date: "2016-11-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/translate/docs/advanced/endpoints"
  - "https://docs.cloud.google.com/translate/docs/advanced/adaptive-translation"
  - "https://docs.cloud.google.com/translate/docs/intro-to-v3"
  - "https://docs.cloud.google.com/translate/docs/reference/rest"
keywords:
  - "translation"
  - "googleapis"
  - "com"
  - "api"
  - "endpoint"
  - "uses"
  - "as"
  - "the"
---

# translation.googleapis.com API endpoint

Product: Cloud Translation
Coverage: MEDIUM

## Step 02 Summary

Cloud Translation uses translation.googleapis.com as the newer API endpoint.

## Extended Definition

Cloud Translation uses translation.googleapis.com as the newer API endpoint.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/translate/docs/advanced/endpoints](https://docs.cloud.google.com/translate/docs/advanced/endpoints)
- [https://docs.cloud.google.com/translate/docs/advanced/adaptive-translation](https://docs.cloud.google.com/translate/docs/advanced/adaptive-translation)
- [https://docs.cloud.google.com/translate/docs/intro-to-v3](https://docs.cloud.google.com/translate/docs/intro-to-v3)
- [https://docs.cloud.google.com/translate/docs/reference/rest](https://docs.cloud.google.com/translate/docs/reference/rest)

## Supporting Pages

### "Global and multi-regional endpoints \_|\_ Cloud Translation \_|\_ Google\

- URL: [https://docs.cloud.google.com/translate/docs/advanced/endpoints](https://docs.cloud.google.com/translate/docs/advanced/endpoints)
- Source ID: `site-iam-reference`
- Final score: 265
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Global and multi-regional endpoints Cloud Translation - Advanced offers a global endpoint as well as EU and US multi-regional endpoints: translate.googleapis.com (global) translate-eu.googleapis.com translate-us.googleapis.com If you use a multi-regional endpoint, your data at-rest and machine learning processing stays within the continental boundaries of the EU or US.
- For example, if you use the translate-eu.googleapis.com endpoint, specify a region in Europe such as europe-west1 .
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred"; "x-goog-user-project" = " PROJECT NUMBER OR ID " } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json ` -Uri "https:// ENDPOINT /v3/projects/ PROJECT NUMBER OR ID /locations/ LOCATION :translateText" Select-Object -Expand Content You should receive a JSON response similar to the following: { "translations": [ { "translatedText": "Komm her!", "model": "projects/ PROJECT NUMBER OR ID /locations/ LOCATION /models/general/base" } ] } Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- HTTP method and URL: POST https:// ENDPOINT /v3/projects/ PROJECT NUMBER OR ID /locations/ LOCATION :translateText Request JSON body: { "model": "projects/ PROJECT NUMBER OR ID /locations/ LOCATION /models/general/base", "sourceLanguageCode": "en", "targetLanguageCode": "de", "contents": ["Come here!"] } To send your request, choose one of these options: curl Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .

### "Translate text by using adaptive translation \_|\_ Cloud Translation \_\

- URL: [https://docs.cloud.google.com/translate/docs/advanced/adaptive-translation](https://docs.cloud.google.com/translate/docs/advanced/adaptive-translation)
- Source ID: `site-iam-reference`
- Final score: 248
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred"; "x-goog-user-project" = " PROJECT NUMBER OR ID " } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://translation.googleapis.com/v3/projects/ PROJECT ID /locations/ LOCATION /adaptiveMtDatasets" Select-Object -Expand Content You should receive a JSON response similar to the following: { "name": "projects/ PROJECT ID /locations/ LOCATION /adaptiveMtDatasets/ DATASET ID ", "displayName": " DISPLAY NAME ", "sourceLanguageCode": " SOURCE LANGUAGE ", "targetLanguageCode": " TARGET LANGUAGE " } Java Before trying this sample, follow the Java setup instructions in the Cloud Translation quickstart using client libraries .
- HTTP method and URL: POST https://translation.googleapis.com/v3/projects/ PROJECT ID /locations/ LOCATION :adaptiveMtTranslate Request JSON body: { "referenceSentenceConfig": { "referenceSentencePairLists": [ { "referenceSentencePairs": [{ "sourceSentence": REFERENCE SOURCE 1 1 , "targetSentence": REFERENCE TARGET 1 1 }, { "sourceSentence": REFERENCE SOURCE 1 2 , "targetSentence": REFERENCE SOURCE 1 2 }] } ], "sourceLanguageCode": SOURCE LANGUAGE , "targetLanguageCode": TARGET LANGUAGE } "content": [" SOURCE TEXT "], "mimeType": " MIME TYPE " } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred"; "x-goog-user-project" = " PROJECT NUMBER OR ID " } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://translation.googleapis.com/v3/projects/ PROJECT ID /locations/ LOCATION /adaptiveMtDatasets/ DATASET ID :importAdaptiveMtFile" Select-Object -Expand Content You should receive a JSON response similar to the following: { "adaptiveMtFile": { "name": " DATASET NAME ", "displayName": " FILE NAME ", "entryCount": TOTAL ENTRIES } } Java Before trying this sample, follow the Java setup instructions in the Cloud Translation quickstart using client libraries .
- HTTP method and URL: POST https://translation.googleapis.com/v3/projects/ PROJECT ID /locations/ LOCATION /adaptiveMtDatasets Request JSON body: { "name": "projects/ PROJECT ID /locations/ LOCATION /adaptiveMtDatasets/ DATASET ID , "display name": " DISPLAY NAME ", "source language code": " SOURCE LANGUAGE ", "target language code": " TARGET LANGUAGE " } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .

### Overview of the Cloud Translation API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/translate/docs/intro-to-v3](https://docs.cloud.google.com/translate/docs/intro-to-v3)
- Source ID: `site-iam-reference`
- Final score: 242
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Feature Basic Advanced Translate with the NMT model Translate with the Translation LLM Translate with Adaptive Translation models Translate with custom models Translate multiple strings in a single request Batch translations with Cloud Storage Translate documents Glossary support (control terminology) Train custom models Language Detection Integrated REST API Integrated gRPC API Service Account API Key Audit logging Supports HTML Supports 100+ Languages Romanization support Transliteration support Adaptive Translation Multi-regional endpoint support VPC Service Controls support Refer to Cloud Translation - Advanced API features for more details on Cloud Translation - Advanced API.
- Cloud Translation API editions and models The Cloud Translation API comes in two different editions, namely a Basic edition and an Advanced edition .
- Advanced API features Using Cloud Translation - Advanced API rather than Cloud Translation - Basic API gives you access to the following features that can make your translation solution more robust and better suited to your specific use case: Model selection and customization Cloud Translation - Advanced API model selection lets you dynamically select different models, including models that you customize to suit your particular application.
- Compare supported models Customize the NMT model Customize the Translation LLM Supported languages Supported formats Perform adaptive translation Migrate to Translation Advanced For answers to general questions about Cloud Translation API, refer to the General FAQs page.

### Cloud Translation API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/translate/docs/reference/rest](https://docs.cloud.google.com/translate/docs/reference/rest)
- Source ID: `site-api-reference`
- Final score: 239
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This service has the following service endpoint and all URIs below are relative to this service endpoint: https://translate.googleapis.com REST Resource: v3beta1.projects Methods detectLanguage POST /v3beta1/{parent=projects/ }:detectLanguage Detects the language of text within a request. getSupportedLanguages GET /v3beta1/{parent=projects/ }/supportedLanguages Returns a list of supported languages for translation. translateText POST /v3beta1/{parent=projects/ }:translateText Translates input text and returns translated text.
- This service provides the following discovery documents: https://translate.googleapis.com/$discovery/rest?version=v3 https://translate.googleapis.com/$discovery/rest?version=v3beta1 Service endpoint A service endpoint is a base URL that specifies the network address of an API service.
- REST Resource: v3beta1.projects REST Resource: v3beta1.projects.locations REST Resource: v3beta1.projects.locations.glossaries REST Resource: v3beta1.projects.locations.operations REST Resource: v3.projects REST Resource: v3.projects.locations REST Resource: v3.projects.locations.adaptiveMtDatasets REST Resource: v3.projects.locations.adaptiveMtDatasets.adaptiveMtFiles REST Resource: v3.projects.locations.adaptiveMtDatasets.adaptiveMtFiles.adaptiveMtSentences REST Resource: v3.projects.locations.adaptiveMtDatasets.adaptiveMtSentences REST Resource: v3.projects.locations.datasets REST Resource: v3.projects.locations.datasets.examples REST Resource: v3.projects.locations.glossaries REST Resource: v3.projects.locations.glossaries.glossaryEntries REST Resource: v3.projects.locations.models REST Resource: v3.projects.locations.operations Service: translate.googleapis.com To call this service, we recommend that you use the Google-provided client libraries .
- REST Resource: v3.projects.locations Methods adaptiveMtTranslate POST /v3/{parent=projects/ /locations/ }:adaptiveMtTranslate Translate text using Adaptive MT. batchTranslateDocument POST /v3/{parent=projects/ /locations/ }:batchTranslateDocument Translates a large volume of document in asynchronous batch mode. batchTranslateText POST /v3/{parent=projects/ /locations/ }:batchTranslateText Translates a large volume of text in asynchronous batch mode. detectLanguage POST /v3/{parent=projects/ /locations/ }:detectLanguage Detects the language of text within a request. get GET /v3/{name=projects/ /locations/ } Gets information about a location. getSupportedLanguages GET /v3/{parent=projects/ /locations/ }/supportedLanguages Returns a list of supported languages for translation. list GET /v3/{name=projects/ }/locations Lists information about the supported locations for this service. romanizeText POST /v3/{parent=projects/ /locations/ }:romanizeText Romanize input text written in non-Latin scripts to Latin text. translateDocument POST /v3/{parent=projects/ /locations/ }:translateDocument Translates documents in synchronous mode. translateText POST /v3/{parent=projects/ /locations/ }:translateText Translates input text and returns translated text.

