---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:49.613Z"
product_name: "Cloud Translation"
product_slug: "cloud-translation"
feature_name: "User labels"
feature_slug: "user-labels"
latest_feature_date: "2019-11-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/translate/docs/intro-to-v3"
  - "https://docs.cloud.google.com/translate/docs/advanced/glossary"
  - "https://docs.cloud.google.com/translate/docs/advanced/translate-text-advance"
  - "https://docs.cloud.google.com/translate/docs/advanced/translating-text-v3"
keywords:
  - "user"
  - "labels"
  - "translation"
  - "api"
  - "advanced"
  - "supports"
  - "applying"
  - "defined"
---

# User labels

Product: Cloud Translation
Coverage: MEDIUM

## Step 02 Summary

Translation API - Advanced supports applying user-defined labels to translation resources and requests.

## Extended Definition

Translation API - Advanced supports applying user-defined labels to translation resources and requests.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/translate/docs/intro-to-v3](https://docs.cloud.google.com/translate/docs/intro-to-v3)
- [https://docs.cloud.google.com/translate/docs/advanced/glossary](https://docs.cloud.google.com/translate/docs/advanced/glossary)
- [https://docs.cloud.google.com/translate/docs/advanced/translate-text-advance](https://docs.cloud.google.com/translate/docs/advanced/translate-text-advance)
- [https://docs.cloud.google.com/translate/docs/advanced/translating-text-v3](https://docs.cloud.google.com/translate/docs/advanced/translating-text-v3)

## Supporting Pages

### Overview of the Cloud Translation API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/translate/docs/intro-to-v3](https://docs.cloud.google.com/translate/docs/intro-to-v3)
- Source ID: `site-iam-reference`
- Final score: 202
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Labels Cloud Translation - Advanced API supports adding user-defined labels (key-value pairs) to TranslateText , BatchTranslateText and DetectLanguage requests.
- Feature Basic Advanced Translate with the NMT model Translate with the Translation LLM Translate with Adaptive Translation models Translate with custom models Translate multiple strings in a single request Batch translations with Cloud Storage Translate documents Glossary support (control terminology) Train custom models Language Detection Integrated REST API Integrated gRPC API Service Account API Key Audit logging Supports HTML Supports 100+ Languages Romanization support Transliteration support Adaptive Translation Multi-regional endpoint support VPC Service Controls support Refer to Cloud Translation - Advanced API features for more details on Cloud Translation - Advanced API.
- Labels : You can add user-defined labels (key-value pairs) to your translation requests to track usage and enable granular billing reports.
- You must add users and service accounts to one of the following roles to grant those accounts access to Cloud Translation - Advanced API.

### "Creating and using glossaries (Advanced) \_|\_ Cloud Translation \_|\_ Google\

- URL: [https://docs.cloud.google.com/translate/docs/advanced/glossary](https://docs.cloud.google.com/translate/docs/advanced/glossary)
- Source ID: `site-iam-reference`
- Final score: 169
- Re-rank relevance: N/A

Evidence snippets:
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred"; "x-goog-user-project" = " PROJECT NUMBER OR ID " } Invoke-WebRequest -Method PATCH -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://translation.googleapis.com/v3/projects/ PROJECT NUMBER OR ID /locations/ LOCATION /glossaries/ GLOSSARY ID ?update mask=input config&update mask=display name" Select-Object -Expand Content You should receive a JSON response similar to the following: { "name": "projects/ PROJECT NUMBER /locations/ LOCATION /operations/ OPERATION ID ", "metadata": { "@type": "type.googleapis.com/google.cloud.translation.v3.UpdateGlossaryMetadata", "glossary": { "name": "projects/ PROJECT NUMBER /locations/ LOCATION /glossaries/ GLOSSARY ID ", "languageCodesSet": { "languageCodes": [" LANGUAGE CODE ", ...] }, "inputConfig": { "gcsSource": { "inputUri": "gs:// GLOSSARY FILE PATH " } }, "entryCount": NUMBER OF ENTRIES , "submitTime": "2022-04-22T23:16:30.628806944Z", "endTime": "2022-04-22T23:41:15.115797Z", "displayName": " GLOSSARY ID " }, "state": "RUNNING", "submitTime": "2022-04-22T23:50:24.337964527Z" } } Additional languages C# : Please follow the C# setup instructions on the client libraries page and then visit the Cloud Translation reference documentation for .NET.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred"; "x-goog-user-project" = " PROJECT NUMBER OR ID " } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://translation.googleapis.com/v3/projects/ PROJECT NUMBER OR ID /locations/us-central1:translateText" Select-Object -Expand Content You should receive a JSON response similar to the following: { "glossaryTranslations": { "translatedText": "Доктор Ватсон, пожалуйста, откажитесь от своего мусора. Вы поделились нежелательной электронной почтой со я . Давайте поговорим о спаме и важности рейтинга в конфиденциальном режиме.", "glossaryConfig": { "glossary": "projects/ project-number /locations/us-central1/glossaries/ GLOSSARY ID ", "ignoreCase": BOOLEAN , "contextual translation enabled": BOOLEAN CONTEXTUAL } }, "translations": { "translatedText": "Доктор Ватсон, пожалуйста, откажитесь от своего мусора. Вы поделились нежелательной электронной почтой со мной. Давайте поговорим о спаме и важности рейтинга в конфиденциальном режиме.", } } The translations field contains the regular machine translation before the glossary is applied; the glossaryTranslations field contains the translation after the glossary is applied.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred"; "x-goog-user-project" = " PROJECT NUMBER OR ID " } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://translation.googleapis.com/v3/projects/ PROJECT NUMBER OR ID /locations/us-central1/glossaries" Select-Object -Expand Content You should receive a JSON response similar to the following: { "name": "projects/ project-number /locations/us-central1/operations/ operation-id ", "metadata": { "@type": "type.googleapis.com/google.cloud.translation.v3beta1.CreateGlossaryMetadata", "name": "projects/ project-number /locations/us-central1/glossaries/ glossary-id ", "state": "RUNNING", "submitTime": "2019-11-19T19:05:10.650047636Z" } } Equivalent term sets glossary Once you have the glossary terms identified in your equivalent term set, make the glossary file available to the Cloud Translation API by creating a glossary resource.
- AdaptiveMtTranslateRequest ( parent = "projects/PROJECT ID/locations/LOCATION" , dataset = "projects/PROJECT ID/locations/LOCATION/adaptiveMtDatasets/DATASET ID" , content = [ "Sample translation request" ] glossary config = glossary config , ) Make the request response = client . adaptive mt translate ( request ) Handle the response print ( response ) Get information about a glossary REST Before using any of the request data, make the following replacements: PROJECT NUMBER OR ID : the numeric or alphanumeric ID of your Google Cloud project glossary-id : your glossary ID, for example, "my-en-to-ru-glossary" HTTP method and URL: GET https://translation.googleapis.com/v3/projects/ PROJECT NUMBER OR ID /locations/us-central1/glossaries/ glossary-id To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .

### Translate text with Cloud Translation \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/translate/docs/advanced/translate-text-advance](https://docs.cloud.google.com/translate/docs/advanced/translate-text-advance)
- Source ID: `site-docs-root`
- Final score: 153
- Re-rank relevance: N/A

Evidence snippets:
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred"; "x-goog-user-project" = " PROJECT ID " } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://translation.googleapis.com/v3/projects/ PROJECT ID /locations/ LOCATION :translateText" Select-Object -Expand Content You should receive a JSON response similar to the following: { "translation": { "translatedText": "Доктор Ватсон, пожалуйста, откажитесь от своего мусора. Вы поделились нежелательной электронной почтой со мной. Давайте поговорим о спаме и важности рейтинга в конфиденциальном режиме.", "model": "projects/ PROJECT NUMBER /locations/ LOCATION /models/1395675701985363739" } } Go Before trying this sample, follow the Go setup instructions in the Cloud Translation quickstart using client libraries .
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred"; "x-goog-user-project" = " PROJECT NUMBER OR ID " } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://translation.googleapis.com/language/translate/v2" Select-Object -Expand Content You should receive a JSON response similar to the following: { "data": { "translations": [{ "translatedText": "La Gran Pirámide de Giza (también conocida como la Pirámide de Khufu o la Pirámide de Keops) es la más antigua y más grande de las tres pirámides en el complejo de la pirámide de Giza." }] } } Go Before trying this sample, follow the Go setup instructions in the Cloud Translation quickstart using client libraries .
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred"; "x-goog-user-project" = " PROJECT NUMBER OR ID " } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://translation.googleapis.com/v3/projects/ PROJECT NUMBER OR ID :translateText" Select-Object -Expand Content You should receive a JSON response similar to the following: { "translations": [ { "translatedText": "Доктор Ватсон, иди сюда!", }, { "translatedText": "Принеси мне кофе!", } ] } The translations array contains two translatedText fields with translations provided in the requested targetLanguageCode language ( ru : Russian).
- Before using any of the request data, make the following replacements: PROJECT NUMBER OR ID : the numeric or alphanumeric ID of your Google Cloud project HTTP method and URL: POST https://translation.googleapis.com/language/translate/v2 Request JSON body: { "q": "The Great Pyramid of Giza (also known as the Pyramid of Khufu or the Pyramid of Cheops) is the oldest and largest of the three pyramids in the Giza pyramid complex.", "source": "en", "target": "es", "format": "text" } To send your request, choose one of these options: curl Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .

### Translate text with Cloud Translation \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/translate/docs/advanced/translating-text-v3](https://docs.cloud.google.com/translate/docs/advanced/translating-text-v3)
- Source ID: `site-docs-root`
- Final score: 153
- Re-rank relevance: N/A

Evidence snippets:
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred"; "x-goog-user-project" = " PROJECT ID " } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://translation.googleapis.com/v3/projects/ PROJECT ID /locations/ LOCATION :translateText" Select-Object -Expand Content You should receive a JSON response similar to the following: { "translation": { "translatedText": "Доктор Ватсон, пожалуйста, откажитесь от своего мусора. Вы поделились нежелательной электронной почтой со мной. Давайте поговорим о спаме и важности рейтинга в конфиденциальном режиме.", "model": "projects/ PROJECT NUMBER /locations/ LOCATION /models/1395675701985363739" } } Go Before trying this sample, follow the Go setup instructions in the Cloud Translation quickstart using client libraries .
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred"; "x-goog-user-project" = " PROJECT NUMBER OR ID " } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://translation.googleapis.com/language/translate/v2" Select-Object -Expand Content You should receive a JSON response similar to the following: { "data": { "translations": [{ "translatedText": "La Gran Pirámide de Giza (también conocida como la Pirámide de Khufu o la Pirámide de Keops) es la más antigua y más grande de las tres pirámides en el complejo de la pirámide de Giza." }] } } Go Before trying this sample, follow the Go setup instructions in the Cloud Translation quickstart using client libraries .
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred"; "x-goog-user-project" = " PROJECT NUMBER OR ID " } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://translation.googleapis.com/v3/projects/ PROJECT NUMBER OR ID :translateText" Select-Object -Expand Content You should receive a JSON response similar to the following: { "translations": [ { "translatedText": "Доктор Ватсон, иди сюда!", }, { "translatedText": "Принеси мне кофе!", } ] } The translations array contains two translatedText fields with translations provided in the requested targetLanguageCode language ( ru : Russian).
- Before using any of the request data, make the following replacements: PROJECT NUMBER OR ID : the numeric or alphanumeric ID of your Google Cloud project HTTP method and URL: POST https://translation.googleapis.com/language/translate/v2 Request JSON body: { "q": "The Great Pyramid of Giza (also known as the Pyramid of Khufu or the Pyramid of Cheops) is the oldest and largest of the three pyramids in the Giza pyramid complex.", "source": "en", "target": "es", "format": "text" } To send your request, choose one of these options: curl Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .

