---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:22:34.616Z"
product_name: "Cloud Translation"
product_slug: "cloud-translation"
feature_name: "translation.googleapis.com API endpoint"
feature_slug: "translation-googleapis-com-api-endpoint"
latest_feature_date: "2016-11-15"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/translate/docs/advanced/endpoints"
  - "https://docs.cloud.google.com/translate/docs/release-notes"
  - "https://docs.cloud.google.com/translate/docs/advanced/adaptive-translation"
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
Coverage: LOW

## Step 02 Summary

Cloud Translation uses translation.googleapis.com as the newer API endpoint.

## Extended Definition

Cloud Translation uses translation.googleapis.com as the newer API endpoint.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/translate/docs/advanced/endpoints](https://docs.cloud.google.com/translate/docs/advanced/endpoints)
- [https://docs.cloud.google.com/translate/docs/release-notes](https://docs.cloud.google.com/translate/docs/release-notes)
- [https://docs.cloud.google.com/translate/docs/advanced/adaptive-translation](https://docs.cloud.google.com/translate/docs/advanced/adaptive-translation)

## Supporting Pages

### "Global and multi-regional endpoints \_|\_ Cloud Translation \_|\_ Google\

- URL: [https://docs.cloud.google.com/translate/docs/advanced/endpoints](https://docs.cloud.google.com/translate/docs/advanced/endpoints)
- Source ID: `site-iam-reference`
- Final score: 202
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Global and multi-regional endpoints Cloud Translation - Advanced offers a global endpoint as well as EU and US multi-regional endpoints: translate.googleapis.com (global) translate-eu.googleapis.com translate-us.googleapis.com If you use a multi-regional endpoint, your data at-rest and machine learning processing stays within the continental boundaries of the EU or US.
- For example, if you use the translate-eu.googleapis.com endpoint, specify a region in Europe such as europe-west1 .
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred"; "x-goog-user-project" = " PROJECT NUMBER OR ID " } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json ` -Uri "https:// ENDPOINT /v3/projects/ PROJECT NUMBER OR ID /locations/ LOCATION :translateText" Select-Object -Expand Content You should receive a JSON response similar to the following: { "translations": [ { "translatedText": "Komm her!", "model": "projects/ PROJECT NUMBER OR ID /locations/ LOCATION /models/general/base" } ] } Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- HTTP method and URL: POST https:// ENDPOINT /v3/projects/ PROJECT NUMBER OR ID /locations/ LOCATION :translateText Request JSON body: { "model": "projects/ PROJECT NUMBER OR ID /locations/ LOCATION /models/general/base", "sourceLanguageCode": "en", "targetLanguageCode": "de", "contents": ["Come here!"] } To send your request, choose one of these options: curl Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .

### Cloud Translation release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/translate/docs/release-notes](https://docs.cloud.google.com/translate/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 198
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- In order for your request to be translated using the NMT model, you must send your request to the current Translation API endpoint: https://translation.googleapis.com/language/translate/v2 .
- Deprecated API endpoint of www.googleapis.com will continue to work, but migrate code to translation.googleapis.com to take advantage of the latest features.
- However, we recommend that you use the https://translation.googleapis.com/language/translate/v2 endpoint for requests to the Translation API.
- Change The https://www.googleapis.com/language/translate/v2 endpoint now supports the Neural Machine Translation (NMT) model.

### "Translate text by using adaptive translation \_|\_ Cloud Translation \_\

- URL: [https://docs.cloud.google.com/translate/docs/advanced/adaptive-translation](https://docs.cloud.google.com/translate/docs/advanced/adaptive-translation)
- Source ID: `site-iam-reference`
- Final score: 192
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred"; "x-goog-user-project" = " PROJECT NUMBER OR ID " } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://translation.googleapis.com/v3/projects/ PROJECT ID /locations/ LOCATION /adaptiveMtDatasets" Select-Object -Expand Content You should receive a JSON response similar to the following: { "name": "projects/ PROJECT ID /locations/ LOCATION /adaptiveMtDatasets/ DATASET ID ", "displayName": " DISPLAY NAME ", "sourceLanguageCode": " SOURCE LANGUAGE ", "targetLanguageCode": " TARGET LANGUAGE " } Java Before trying this sample, follow the Java setup instructions in the Cloud Translation quickstart using client libraries .
- HTTP method and URL: POST https://translation.googleapis.com/v3/projects/ PROJECT ID /locations/ LOCATION :adaptiveMtTranslate Request JSON body: { "referenceSentenceConfig": { "referenceSentencePairLists": [ { "referenceSentencePairs": [{ "sourceSentence": REFERENCE SOURCE 1 1 , "targetSentence": REFERENCE TARGET 1 1 }, { "sourceSentence": REFERENCE SOURCE 1 2 , "targetSentence": REFERENCE SOURCE 1 2 }] } ], "sourceLanguageCode": SOURCE LANGUAGE , "targetLanguageCode": TARGET LANGUAGE } "content": [" SOURCE TEXT "], "mimeType": " MIME TYPE " } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred"; "x-goog-user-project" = " PROJECT NUMBER OR ID " } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://translation.googleapis.com/v3/projects/ PROJECT ID /locations/ LOCATION /adaptiveMtDatasets/ DATASET ID :importAdaptiveMtFile" Select-Object -Expand Content You should receive a JSON response similar to the following: { "adaptiveMtFile": { "name": " DATASET NAME ", "displayName": " FILE NAME ", "entryCount": TOTAL ENTRIES } } Java Before trying this sample, follow the Java setup instructions in the Cloud Translation quickstart using client libraries .
- HTTP method and URL: POST https://translation.googleapis.com/v3/projects/ PROJECT ID /locations/ LOCATION /adaptiveMtDatasets Request JSON body: { "name": "projects/ PROJECT ID /locations/ LOCATION /adaptiveMtDatasets/ DATASET ID , "display name": " DISPLAY NAME ", "source language code": " SOURCE LANGUAGE ", "target language code": " TARGET LANGUAGE " } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .

