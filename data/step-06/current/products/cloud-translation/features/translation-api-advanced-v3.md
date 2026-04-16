---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:49.613Z"
product_name: "Cloud Translation"
product_slug: "cloud-translation"
feature_name: "Translation API - Advanced (v3)"
feature_slug: "translation-api-advanced-v3"
latest_feature_date: "2019-11-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/translate/docs/advanced/glossary"
  - "https://docs.cloud.google.com/translate/docs/intro-to-v3"
  - "https://docs.cloud.google.com/translate/docs/advanced/translating-text-v3"
  - "https://docs.cloud.google.com/translate/docs/reference/api-overview"
keywords:
  - "translation"
  - "api"
  - "advanced"
  - "v3"
  - "is"
  - "the"
  - "generally"
  - "available"
---

# Translation API - Advanced (v3)

Product: Cloud Translation
Coverage: MEDIUM

## Step 02 Summary

Translation API - Advanced (v3) is the generally available advanced edition of Cloud Translation v3.

## Extended Definition

Translation API - Advanced (v3) is the generally available advanced edition of Cloud Translation v3.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/translate/docs/advanced/glossary](https://docs.cloud.google.com/translate/docs/advanced/glossary)
- [https://docs.cloud.google.com/translate/docs/intro-to-v3](https://docs.cloud.google.com/translate/docs/intro-to-v3)
- [https://docs.cloud.google.com/translate/docs/advanced/translating-text-v3](https://docs.cloud.google.com/translate/docs/advanced/translating-text-v3)
- [https://docs.cloud.google.com/translate/docs/reference/api-overview](https://docs.cloud.google.com/translate/docs/reference/api-overview)

## Supporting Pages

### "Creating and using glossaries (Advanced) \_|\_ Cloud Translation \_|\_ Google\

- URL: [https://docs.cloud.google.com/translate/docs/advanced/glossary](https://docs.cloud.google.com/translate/docs/advanced/glossary)
- Source ID: `site-iam-reference`
- Final score: 238
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred"; "x-goog-user-project" = " PROJECT NUMBER OR ID " } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://translation.googleapis.com/v3/projects/ PROJECT NUMBER OR ID /locations/us-central1/glossaries" Select-Object -Expand Content You should receive a JSON response similar to the following: { "name": "projects/ project-number /locations/us-central1/operations/ operation-id ", "metadata": { "@type": "type.googleapis.com/google.cloud.translation.v3beta1.CreateGlossaryMetadata", "name": "projects/ project-number /locations/us-central1/glossaries/ glossary-id ", "state": "RUNNING", "submitTime": "2019-11-19T19:05:10.650047636Z" } } Equivalent term sets glossary Once you have the glossary terms identified in your equivalent term set, make the glossary file available to the Cloud Translation API by creating a glossary resource.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred"; "x-goog-user-project" = " PROJECT NUMBER OR ID " } Invoke-WebRequest -Method PATCH -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://translation.googleapis.com/v3/projects/ PROJECT NUMBER OR ID /locations/ LOCATION /glossaries/ GLOSSARY ID ?update mask=input config&update mask=display name" Select-Object -Expand Content You should receive a JSON response similar to the following: { "name": "projects/ PROJECT NUMBER /locations/ LOCATION /operations/ OPERATION ID ", "metadata": { "@type": "type.googleapis.com/google.cloud.translation.v3.UpdateGlossaryMetadata", "glossary": { "name": "projects/ PROJECT NUMBER /locations/ LOCATION /glossaries/ GLOSSARY ID ", "languageCodesSet": { "languageCodes": [" LANGUAGE CODE ", ...] }, "inputConfig": { "gcsSource": { "inputUri": "gs:// GLOSSARY FILE PATH " } }, "entryCount": NUMBER OF ENTRIES , "submitTime": "2022-04-22T23:16:30.628806944Z", "endTime": "2022-04-22T23:41:15.115797Z", "displayName": " GLOSSARY ID " }, "state": "RUNNING", "submitTime": "2022-04-22T23:50:24.337964527Z" } } Additional languages C# : Please follow the C# setup instructions on the client libraries page and then visit the Cloud Translation reference documentation for .NET.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred"; "x-goog-user-project" = " PROJECT NUMBER OR ID " } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://translation.googleapis.com/v3/projects/ PROJECT NUMBER OR ID /locations/us-central1:translateText" Select-Object -Expand Content You should receive a JSON response similar to the following: { "glossaryTranslations": { "translatedText": "Доктор Ватсон, пожалуйста, откажитесь от своего мусора. Вы поделились нежелательной электронной почтой со я . Давайте поговорим о спаме и важности рейтинга в конфиденциальном режиме.", "glossaryConfig": { "glossary": "projects/ project-number /locations/us-central1/glossaries/ GLOSSARY ID ", "ignoreCase": BOOLEAN , "contextual translation enabled": BOOLEAN CONTEXTUAL } }, "translations": { "translatedText": "Доктор Ватсон, пожалуйста, откажитесь от своего мусора. Вы поделились нежелательной электронной почтой со мной. Давайте поговорим о спаме и важности рейтинга в конфиденциальном режиме.", } } The translations field contains the regular machine translation before the glossary is applied; the glossaryTranslations field contains the translation after the glossary is applied.
- AdaptiveMtTranslateRequest ( parent = "projects/PROJECT ID/locations/LOCATION" , dataset = "projects/PROJECT ID/locations/LOCATION/adaptiveMtDatasets/DATASET ID" , content = [ "Sample translation request" ] glossary config = glossary config , ) Make the request response = client . adaptive mt translate ( request ) Handle the response print ( response ) Get information about a glossary REST Before using any of the request data, make the following replacements: PROJECT NUMBER OR ID : the numeric or alphanumeric ID of your Google Cloud project glossary-id : your glossary ID, for example, "my-en-to-ru-glossary" HTTP method and URL: GET https://translation.googleapis.com/v3/projects/ PROJECT NUMBER OR ID /locations/us-central1/glossaries/ glossary-id To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .

### Overview of the Cloud Translation API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/translate/docs/intro-to-v3](https://docs.cloud.google.com/translate/docs/intro-to-v3)
- Source ID: `site-iam-reference`
- Final score: 226
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Cloud Translation - Advanced API The Advanced edition is accessed through v3 client libraries and requires service account authentication that's integrated with IAM roles.
- Glossaries A glossary is a custom dictionary that Cloud Translation - Advanced API uses to correctly and consistently translate domain-specific terms, named entities, and other kinds of terms that are specific to you.
- Regional endpoint By default, Cloud Translation - Advanced API stores and processes resources in a global location, which means there is no guarantee that resources remain within a particular location.
- Feature Basic Advanced Translate with the NMT model Translate with the Translation LLM Translate with Adaptive Translation models Translate with custom models Translate multiple strings in a single request Batch translations with Cloud Storage Translate documents Glossary support (control terminology) Train custom models Language Detection Integrated REST API Integrated gRPC API Service Account API Key Audit logging Supports HTML Supports 100+ Languages Romanization support Transliteration support Adaptive Translation Multi-regional endpoint support VPC Service Controls support Refer to Cloud Translation - Advanced API features for more details on Cloud Translation - Advanced API.

### Translate text with Cloud Translation \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/translate/docs/advanced/translating-text-v3](https://docs.cloud.google.com/translate/docs/advanced/translating-text-v3)
- Source ID: `site-docs-root`
- Final score: 226
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred"; "x-goog-user-project" = " PROJECT ID " } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://translation.googleapis.com/v3/projects/ PROJECT ID /locations/ LOCATION :translateText" Select-Object -Expand Content You should receive a JSON response similar to the following: { "translation": { "translatedText": "Доктор Ватсон, пожалуйста, откажитесь от своего мусора. Вы поделились нежелательной электронной почтой со мной. Давайте поговорим о спаме и важности рейтинга в конфиденциальном режиме.", "model": "projects/ PROJECT NUMBER /locations/ LOCATION /models/1395675701985363739" } } Go Before trying this sample, follow the Go setup instructions in the Cloud Translation quickstart using client libraries .
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred"; "x-goog-user-project" = " PROJECT NUMBER OR ID " } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://translation.googleapis.com/v3/projects/ PROJECT NUMBER OR ID :translateText" Select-Object -Expand Content You should receive a JSON response similar to the following: { "translations": [ { "translatedText": "Доктор Ватсон, иди сюда!", }, { "translatedText": "Принеси мне кофе!", } ] } The translations array contains two translatedText fields with translations provided in the requested targetLanguageCode language ( ru : Russian).
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred"; "x-goog-user-project" = " PROJECT NUMBER OR ID " } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://translation.googleapis.com/v3/projects/ PROJECT NUMBER OR ID /locations/ LOCATION :translateText" Select-Object -Expand Content You should receive a JSON response similar to the following: { "translations": [ { "translatedText": " TRANSLATED TEXT ", } ] } Basic text translation example REST Make a Cloud Translation - Basic request using a REST method call to the Basic translate method.
- HTTP method and URL: POST https://translation.googleapis.com/v3/projects/ PROJECT NUMBER OR ID /locations/ LOCATION :translateText Request JSON body: { "source language code": " SOURCE LANGUAGE ", "target language code": " TARGET LANGUAGE ", "contents": " SOURCE TEXT ", "mime type": "text/plain", "transliteration config": { "enable transliteration": true} } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .

### API usage overview \_|\_ Cloud Translation \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/translate/docs/reference/api-overview](https://docs.cloud.google.com/translate/docs/reference/api-overview)
- Source ID: `site-api-reference`
- Final score: 216
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Client libraries, REST, and gRPC You can access the API through client libraries, REST, or gRPC (Cloud Translation - Advanced only).
- API usage overview This guide provides an overview of using the Cloud Translation API and its reference documentation.
- API editions Cloud Translation offers two editions: Basic (v2) and Advanced (v3).
- Type, method, and field names Depending on whether you are using client libraries, REST, or gRPC, the type, method, and field names for the API vary: REST is arranged by resource hierarchies and their methods.

