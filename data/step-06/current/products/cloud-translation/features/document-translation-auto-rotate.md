---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:49.604Z"
product_name: "Cloud Translation"
product_slug: "cloud-translation"
feature_name: "Document Translation auto-rotate"
feature_slug: "document-translation-auto-rotate"
latest_feature_date: "2023-03-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/translate/docs/advanced/batch-translation"
  - "https://docs.cloud.google.com/translate/docs/advanced/adaptive-translation-data"
  - "https://docs.cloud.google.com/translate/docs/advanced/custom-nmt-datasets"
  - "https://docs.cloud.google.com/translate/docs/advanced/custom-nmt-models"
keywords:
  - "document"
  - "translation"
  - "auto"
  - "rotate"
  - "can"
  - "automatically"
  - "scanned"
  - "pdfs"
---

# Document Translation auto-rotate

Product: Cloud Translation
Coverage: MEDIUM

## Step 02 Summary

Document Translation can automatically rotate scanned PDFs to the correct orientation.

## Extended Definition

Document Translation can automatically rotate scanned PDFs to the correct orientation.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/translate/docs/advanced/batch-translation](https://docs.cloud.google.com/translate/docs/advanced/batch-translation)
- [https://docs.cloud.google.com/translate/docs/advanced/adaptive-translation-data](https://docs.cloud.google.com/translate/docs/advanced/adaptive-translation-data)
- [https://docs.cloud.google.com/translate/docs/advanced/custom-nmt-datasets](https://docs.cloud.google.com/translate/docs/advanced/custom-nmt-datasets)
- [https://docs.cloud.google.com/translate/docs/advanced/custom-nmt-models](https://docs.cloud.google.com/translate/docs/advanced/custom-nmt-models)

## Supporting Pages

### Batch requests (Advanced) \_|\_ Cloud Translation \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/translate/docs/advanced/batch-translation](https://docs.cloud.google.com/translate/docs/advanced/batch-translation)
- Source ID: `site-iam-reference`
- Final score: 179
- Re-rank relevance: N/A

Evidence snippets:
- TranslationServiceClient () Supported file types: https://cloud.google.com/translate/docs/supported-formats gcs source = { "input uri" : input uri } location = "us-central1" input configs element = { "gcs source" : gcs source , "mime type" : "text/plain" , # Can be "text/plain" or "text/html". } gcs destination = { "output uri prefix" : output uri } output config = { "gcs destination" : gcs destination } parent = f "projects/ { project id } /locations/ { location } " model path = "projects/ {} /locations/ {} /models/ {} " . format ( project id , location , model id # The location of AutoML model. ) Supported language codes: https://cloud.google.com/translate/docs/languages models = { "ja" : model path } # takes a target lang as key. operation = client . batch translate text ( request = { "parent" : parent , "source language code" : "en" , "target language codes" : [ "ja" ], # Up to 10 language codes here. "input configs" : [ input configs element ], "output config" : output config , "models" : models , } ) print ( "Waiting for operation to complete..." ) response = operation . result () Display the translation for each input text provided. print ( f "Total Characters: { response . total characters } " ) print ( f "Translated Characters: { response . translated characters } " ) return response Additional languages C# : Please follow the C# setup instructions on the client libraries page and then visit the Cloud Translation reference documentation for .NET.
- TranslationServiceClient () location = "us-central1" Supported file types: https://cloud.google.com/translate/docs/supported-formats gcs source = { "input uri" : input uri } input configs element = { "gcs source" : gcs source , "mime type" : "text/plain" , # Can be "text/plain" or "text/html". } gcs destination = { "output uri prefix" : output uri } output config = { "gcs destination" : gcs destination } parent = f "projects/ { project id } /locations/ { location } " Supported language codes: https://cloud.google.com/translate/docs/languages operation = client . batch translate text ( request = { "parent" : parent , "source language code" : "en" , "target language codes" : [ "ja" ], # Up to 10 language codes here. "input configs" : [ input configs element ], "output config" : output config , } ) print ( "Waiting for operation to complete..." ) response = operation . result ( timeout ) print ( f "Total Characters: { response . total characters } " ) print ( f "Translated Characters: { response . translated characters } " ) return response Additional languages C# : Please follow the C# setup instructions on the client libraries page and then visit the Cloud Translation reference documentation for .NET.
- Before using any of the request data, make the following replacements: PROJECT NUMBER OR ID : the numeric or alphanumeric ID of your Google Cloud project HTTP method and URL: POST https://translation.googleapis.com/v3/projects/ PROJECT NUMBER OR ID /locations/us-central1:batchTranslateText Request JSON body: { "models": { "es": "projects/ project number or id /locations/us-central1/models/ model-id " }, "sourceLanguageCode": "en", "targetLanguageCodes": ["es"], "glossaries": { "es": { "glossary": "projects/ project number or id /locations/us-central1/glossaries/ glossary-id " } }, "inputConfigs": [{ "gcsSource": { "inputUri": "gs:// bucket-name-source / input-file-name " } }, { "gcsSource": { "inputUri": "gs:// bucket-name-source / input-file-name2 " } } ], "outputConfig": { "gcsDestination": { "outputUriPrefix": "gs:// bucket-name-destination /" } } } To send your request, choose one of these options: curl Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Before using any of the request data, make the following replacements: PROJECT NUMBER OR ID : the numeric or alphanumeric ID of your Google Cloud project HTTP method and URL: POST https://translation.googleapis.com/v3/projects/ PROJECT NUMBER OR ID /locations/us-central1:batchTranslateText Request JSON body: { "models":{ "es":"projects/ PROJECT NUMBER OR ID /locations/us-central1/models/ model-id1 ", "fr":"projects/ PROJECT NUMBER OR ID /locations/us-central1/models/ model-id2 "}, "sourceLanguageCode": "en", "targetLanguageCodes": ["es", "fr"], "inputConfigs": [ { "gcsSource": { "inputUri": "gs:// bucket-name-source / input-file-name1 " } }, { "gcsSource": { "inputUri": "gs:// bucket-name-source / input-file-name2 " } } ], "outputConfig": { "gcsDestination": { "outputUriPrefix": "gs:// bucket-name-destination /" } } } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .

### Manage datasets \_|\_ Cloud Translation \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/translate/docs/advanced/adaptive-translation-data](https://docs.cloud.google.com/translate/docs/advanced/adaptive-translation-data)
- Source ID: `site-iam-reference`
- Final score: 179
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- HTTP method and URL: DELETE https://translation.googleapis.com/v3/projects/ PROJECT ID /locations/ LOCATION /adaptiveMtDatasets/ DATASET ID /adaptiveMtFiles/ FILE ID To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- HTTP method and URL: GET https://translation.googleapis.com/v3/projects/ PROJECT ID /locations/ LOCATION /adaptiveMtDatasets/ DATASET ID /adaptiveMtFiles To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- HTTP method and URL: DELETE https://translation.googleapis.com/v3/projects/ PROJECT ID /locations/ LOCATION /adaptiveMtDatasets/ DATASET ID To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- HTTP method and URL: GET https://translation.googleapis.com/v3/projects/ PROJECT ID /locations/ LOCATION /adaptiveMtDatasets To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .

### Create and manage datasets \_|\_ Cloud Translation \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/translate/docs/advanced/custom-nmt-datasets](https://docs.cloud.google.com/translate/docs/advanced/custom-nmt-datasets)
- Source ID: `site-iam-reference`
- Final score: 177
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- HTTP method and URL: POST https://translation.googleapis.com/v3/projects/ PROJECT ID /locations/ LOCATION /datasets/ DATASET ID :importData Request JSON body: { "input config": { "input files": [ { "display name": " FILE DISPLAY NAME ", "usage": " USAGE ", "gcs source": { "input uris": "gs:// FILE PATH " } }, ... ] } } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- HTTP method and URL: POST https://translation.googleapis.com/v3/projects/ PROJECT ID /locations/ LOCATION /datasets Request JSON body: { "display name": " DATASET NAME ", "source language code": " SOURCE LANG CODE ", "target language code": " TARGET LANG CODE " } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- HTTP method and URL: POST https://translation.googleapis.com/v3/projects/ PROJECT ID /locations/ LOCATION /datasets/ DATASET ID :exportData Request JSON body: { "output config": { "gcs destination": { "output uri prefix": "gs:// DESTINATION DIRECTORY " } } } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- HTTP method and URL: DELETE https://translation.googleapis.com/v3/projects/ PROJECT ID /locations/ LOCATION /datasets/ DATASET ID To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .

### Create and manage models \_|\_ Cloud Translation \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/translate/docs/advanced/custom-nmt-models](https://docs.cloud.google.com/translate/docs/advanced/custom-nmt-models)
- Source ID: `site-iam-reference`
- Final score: 177
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Before using any of the request data, make the following replacements: PROJECT NUMBER OR ID : the numeric or alphanumeric ID of your Google Cloud project location-id : the location you chose for your Cloud Storage bucket operation-id : operation ID you received above HTTP method and URL: GET https://translation.googleapis.com/v3/projects/ PROJECT NUMBER OR ID /locations/ location-id /operations/ operation-id To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- HTTP method and URL: POST https://translation.googleapis.com/v3/projects/ PROJECT ID /locations/ LOCATION /models Request JSON body: { "display name": " MODEL NAME ", "dataset": "projects/ PROJECT ID /locations/ LOCATION /datasets/ DATASET ID ", } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- HTTP method and URL: DELETE https://translation.googleapis.com/v3/projects/ PROJECT ID /locations/ LOCATION /models/ MODEL ID To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- HTTP method and URL: GET https://translation.googleapis.com/v3/projects/ PROJECT ID /locations/ LOCATION /models/ MODEL ID To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .

