---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:49.615Z"
product_name: "Cloud Translation"
product_slug: "cloud-translation"
feature_name: "Legacy www.googleapis.com Translation API endpoint"
feature_slug: "legacy-www-googleapis-com-translation-api-endpoint"
latest_feature_date: "2016-11-15"
deprecation_date: "2016-11-15"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/translate/docs/advanced/endpoints"
  - "https://docs.cloud.google.com/translate/docs/reference/rest"
  - "https://docs.cloud.google.com/translate/docs/advanced/custom-tllm-models"
  - "https://docs.cloud.google.com/translate/docs/advanced/adaptive-translation"
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
Coverage: MEDIUM

## Step 02 Summary

The legacy www.googleapis.com endpoint is the older Translation API endpoint being phased out in favor of translation.googleapis.com; deprecated on 2016-11-15.

## Extended Definition

The legacy www.googleapis.com endpoint is the older Translation API endpoint being phased out in favor of translation.googleapis.com; deprecated on 2016-11-15.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/translate/docs/advanced/endpoints](https://docs.cloud.google.com/translate/docs/advanced/endpoints)
- [https://docs.cloud.google.com/translate/docs/reference/rest](https://docs.cloud.google.com/translate/docs/reference/rest)
- [https://docs.cloud.google.com/translate/docs/advanced/custom-tllm-models](https://docs.cloud.google.com/translate/docs/advanced/custom-tllm-models)
- [https://docs.cloud.google.com/translate/docs/advanced/adaptive-translation](https://docs.cloud.google.com/translate/docs/advanced/adaptive-translation)

## Supporting Pages

### "Global and multi-regional endpoints \_|\_ Cloud Translation \_|\_ Google\

- URL: [https://docs.cloud.google.com/translate/docs/advanced/endpoints](https://docs.cloud.google.com/translate/docs/advanced/endpoints)
- Source ID: `site-iam-reference`
- Final score: 225
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Global and multi-regional endpoints Cloud Translation - Advanced offers a global endpoint as well as EU and US multi-regional endpoints: translate.googleapis.com (global) translate-eu.googleapis.com translate-us.googleapis.com If you use a multi-regional endpoint, your data at-rest and machine learning processing stays within the continental boundaries of the EU or US.
- For example, if you use the translate-eu.googleapis.com endpoint, specify a region in Europe such as europe-west1 .
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred"; "x-goog-user-project" = " PROJECT NUMBER OR ID " } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json ` -Uri "https:// ENDPOINT /v3/projects/ PROJECT NUMBER OR ID /locations/ LOCATION :translateText" Select-Object -Expand Content You should receive a JSON response similar to the following: { "translations": [ { "translatedText": "Komm her!", "model": "projects/ PROJECT NUMBER OR ID /locations/ LOCATION /models/general/base" } ] } Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Global versus multi-regional endpoints When using a multi-regional endpoint, there are some difference when compared to using the global endpoint: Text translations that use custom AutoML models are not supported.

### Cloud Translation API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/translate/docs/reference/rest](https://docs.cloud.google.com/translate/docs/reference/rest)
- Source ID: `site-api-reference`
- Final score: 211
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This service has the following service endpoint and all URIs below are relative to this service endpoint: https://translate.googleapis.com REST Resource: v3beta1.projects Methods detectLanguage POST /v3beta1/{parent=projects/ }:detectLanguage Detects the language of text within a request. getSupportedLanguages GET /v3beta1/{parent=projects/ }/supportedLanguages Returns a list of supported languages for translation. translateText POST /v3beta1/{parent=projects/ }:translateText Translates input text and returns translated text.
- This service provides the following discovery documents: https://translate.googleapis.com/$discovery/rest?version=v3 https://translate.googleapis.com/$discovery/rest?version=v3beta1 Service endpoint A service endpoint is a base URL that specifies the network address of an API service.
- REST Resource: v3beta1.projects REST Resource: v3beta1.projects.locations REST Resource: v3beta1.projects.locations.glossaries REST Resource: v3beta1.projects.locations.operations REST Resource: v3.projects REST Resource: v3.projects.locations REST Resource: v3.projects.locations.adaptiveMtDatasets REST Resource: v3.projects.locations.adaptiveMtDatasets.adaptiveMtFiles REST Resource: v3.projects.locations.adaptiveMtDatasets.adaptiveMtFiles.adaptiveMtSentences REST Resource: v3.projects.locations.adaptiveMtDatasets.adaptiveMtSentences REST Resource: v3.projects.locations.datasets REST Resource: v3.projects.locations.datasets.examples REST Resource: v3.projects.locations.glossaries REST Resource: v3.projects.locations.glossaries.glossaryEntries REST Resource: v3.projects.locations.models REST Resource: v3.projects.locations.operations Service: translate.googleapis.com To call this service, we recommend that you use the Google-provided client libraries .
- REST Resource: v3.projects.locations Methods adaptiveMtTranslate POST /v3/{parent=projects/ /locations/ }:adaptiveMtTranslate Translate text using Adaptive MT. batchTranslateDocument POST /v3/{parent=projects/ /locations/ }:batchTranslateDocument Translates a large volume of document in asynchronous batch mode. batchTranslateText POST /v3/{parent=projects/ /locations/ }:batchTranslateText Translates a large volume of text in asynchronous batch mode. detectLanguage POST /v3/{parent=projects/ /locations/ }:detectLanguage Detects the language of text within a request. get GET /v3/{name=projects/ /locations/ } Gets information about a location. getSupportedLanguages GET /v3/{parent=projects/ /locations/ }/supportedLanguages Returns a list of supported languages for translation. list GET /v3/{name=projects/ }/locations Lists information about the supported locations for this service. romanizeText POST /v3/{parent=projects/ /locations/ }:romanizeText Romanize input text written in non-Latin scripts to Latin text. translateDocument POST /v3/{parent=projects/ /locations/ }:translateDocument Translates documents in synchronous mode. translateText POST /v3/{parent=projects/ /locations/ }:translateText Translates input text and returns translated text.

### Create and manage models \_|\_ Cloud Translation \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/translate/docs/advanced/custom-tllm-models](https://docs.cloud.google.com/translate/docs/advanced/custom-tllm-models)
- Source ID: `site-iam-reference`
- Final score: 199
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred"; "x-goog-user-project" = " PROJECT ID " } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json ` -Uri "https://translation.googleapis.com/v3/projects/ PROJECT ID /locations/ LOCATION :translateText" Select-Object -Expand Content You should receive a JSON response similar to the following: { "translation": { "translatedText": "Доктор Ватсон, пожалуйста, откажитесь от своего мусора. Вы поделились нежелательной электронной почтой со мной. Давайте поговорим о спаме и важности рейтинга в конфиденциальном режиме.", "model": "projects/ PROJECT NUMBER /locations/ LOCATION /model/translation-llm-custom/1395675701985363739" } } Python from google.cloud import translate def translate text with model ( text : str = "YOUR TEXT TO TRANSLATE" , project id : str = "YOUR PROJECT ID" , model id : str = "YOUR MODEL ID" , ) - > translate .
- Save the request body in a file named request.json , and execute the following command: curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "x-goog-user-project: PROJECT ID " \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://translation.googleapis.com/v3/projects/ PROJECT ID /locations/ LOCATION :translateText" PowerShell Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login .
- PROJECT ID = os.environ["GOOGLE CLOUD PROJECT"] vertexai . init ( project = PROJECT ID , location = "us-central1" ) sft tuning job = sft . train ( source model = "translation-llm-002" , train dataset = "gs://cloud-samples-data/ai-platform/generative ai/gemini-2 0/text/sft train data.jsonl" , The following parameters are optional validation dataset = "gs://cloud-samples-data/ai-platform/generative ai/gemini-2 0/text/sft validation data.jsonl" , tuned model display name = "tuned translation llm 002" , ) Polling for job completion while not sft tuning job . has ended : time . sleep ( 60 ) sft tuning job . refresh () print ( sft tuning job . tuned model name ) print ( sft tuning job . tuned model endpoint name ) print ( sft tuning job . experiment ) Example response: projects/123456789012/locations/us-central1/models/1234567890@1 projects/123456789012/locations/us-central1/endpoints/123456789012345 <google.cloud.aiplatform.metadata.experiment resources.Experiment object at 0x7b5b4ae07af0> View a list of tuning jobs You can view a list of tuning jobs in your current project by using the Google Cloud console, the Vertex AI SDK for Python, or by sending a GET request by using the tuningJobs method.
- HTTP method and URL: POST https:// TUNING JOB REGION -aiplatform.googleapis.com/v1/projects/ PROJECT ID /locations/ TUNING JOB REGION /tuningJobs Request JSON body: { "baseModel": " BASE MODEL ", "supervisedTuningSpec" : { "trainingDatasetUri": " TRAINING DATASET URI ", "validationDatasetUri": " VALIDATION DATASET URI ", }, "tunedModelDisplayName": " TUNED MODEL DISPLAYNAME " } To send your request, choose one of these options: curl Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .

### "Translate text by using adaptive translation \_|\_ Cloud Translation \_\

- URL: [https://docs.cloud.google.com/translate/docs/advanced/adaptive-translation](https://docs.cloud.google.com/translate/docs/advanced/adaptive-translation)
- Source ID: `site-iam-reference`
- Final score: 192
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred"; "x-goog-user-project" = " PROJECT NUMBER OR ID " } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://translation.googleapis.com/v3/projects/ PROJECT ID /locations/ LOCATION /adaptiveMtDatasets" Select-Object -Expand Content You should receive a JSON response similar to the following: { "name": "projects/ PROJECT ID /locations/ LOCATION /adaptiveMtDatasets/ DATASET ID ", "displayName": " DISPLAY NAME ", "sourceLanguageCode": " SOURCE LANGUAGE ", "targetLanguageCode": " TARGET LANGUAGE " } Java Before trying this sample, follow the Java setup instructions in the Cloud Translation quickstart using client libraries .
- HTTP method and URL: POST https://translation.googleapis.com/v3/projects/ PROJECT ID /locations/ LOCATION :adaptiveMtTranslate Request JSON body: { "referenceSentenceConfig": { "referenceSentencePairLists": [ { "referenceSentencePairs": [{ "sourceSentence": REFERENCE SOURCE 1 1 , "targetSentence": REFERENCE TARGET 1 1 }, { "sourceSentence": REFERENCE SOURCE 1 2 , "targetSentence": REFERENCE SOURCE 1 2 }] } ], "sourceLanguageCode": SOURCE LANGUAGE , "targetLanguageCode": TARGET LANGUAGE } "content": [" SOURCE TEXT "], "mimeType": " MIME TYPE " } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred"; "x-goog-user-project" = " PROJECT NUMBER OR ID " } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://translation.googleapis.com/v3/projects/ PROJECT ID /locations/ LOCATION /adaptiveMtDatasets/ DATASET ID :importAdaptiveMtFile" Select-Object -Expand Content You should receive a JSON response similar to the following: { "adaptiveMtFile": { "name": " DATASET NAME ", "displayName": " FILE NAME ", "entryCount": TOTAL ENTRIES } } Java Before trying this sample, follow the Java setup instructions in the Cloud Translation quickstart using client libraries .
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred"; "x-goog-user-project" = " PROJECT NUMBER OR ID " } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://translation.googleapis.com/v3/projects/ PROJECT ID /locations/ LOCATION :adaptiveMtTranslate" Select-Object -Expand Content You should receive a JSON response similar to the following: { "translations": [ { "translatedText": " TRANSLATED TEXT " } ], "languageCode": " TARGET LANGUAGE " } Java Before trying this sample, follow the Java setup instructions in the Cloud Translation quickstart using client libraries .

