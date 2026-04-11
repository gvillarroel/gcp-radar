---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:22:34.592Z"
product_name: "Cloud Translation"
product_slug: "cloud-translation"
feature_name: "Document Translation auto-rotate"
feature_slug: "document-translation-auto-rotate"
latest_feature_date: "2023-03-30"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/translate/docs/advanced/batch-translation"
  - "https://docs.cloud.google.com/translate/docs/release-notes"
  - "https://docs.cloud.google.com/translate/docs/advanced/adaptive-translation"
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
Coverage: LOW

## Step 02 Summary

Document Translation can automatically rotate scanned PDFs to the correct orientation.

## Extended Definition

Document Translation can automatically rotate scanned PDFs to the correct orientation.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/translate/docs/advanced/batch-translation](https://docs.cloud.google.com/translate/docs/advanced/batch-translation)
- [https://docs.cloud.google.com/translate/docs/release-notes](https://docs.cloud.google.com/translate/docs/release-notes)
- [https://docs.cloud.google.com/translate/docs/advanced/adaptive-translation](https://docs.cloud.google.com/translate/docs/advanced/adaptive-translation)

## Supporting Pages

### Batch requests (Advanced) \_|\_ Cloud Translation \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/translate/docs/advanced/batch-translation](https://docs.cloud.google.com/translate/docs/advanced/batch-translation)
- Source ID: `site-iam-reference`
- Final score: 146
- Re-rank relevance: N/A

Evidence snippets:
- TranslationServiceClient () Supported file types: https://cloud.google.com/translate/docs/supported-formats gcs source = { "input uri" : input uri } location = "us-central1" input configs element = { "gcs source" : gcs source , "mime type" : "text/plain" , # Can be "text/plain" or "text/html". } gcs destination = { "output uri prefix" : output uri } output config = { "gcs destination" : gcs destination } parent = f "projects/ { project id } /locations/ { location } " model path = "projects/ {} /locations/ {} /models/ {} " . format ( project id , location , model id # The location of AutoML model. ) Supported language codes: https://cloud.google.com/translate/docs/languages models = { "ja" : model path } # takes a target lang as key. operation = client . batch translate text ( request = { "parent" : parent , "source language code" : "en" , "target language codes" : [ "ja" ], # Up to 10 language codes here. "input configs" : [ input configs element ], "output config" : output config , "models" : models , } ) print ( "Waiting for operation to complete..." ) response = operation . result () Display the translation for each input text provided. print ( f "Total Characters: { response . total characters } " ) print ( f "Translated Characters: { response . translated characters } " ) return response Additional languages C# : Please follow the C# setup instructions on the client libraries page and then visit the Cloud Translation reference documentation for .NET.
- TranslationServiceClient () location = "us-central1" Supported file types: https://cloud.google.com/translate/docs/supported-formats gcs source = { "input uri" : input uri } input configs element = { "gcs source" : gcs source , "mime type" : "text/plain" , # Can be "text/plain" or "text/html". } gcs destination = { "output uri prefix" : output uri } output config = { "gcs destination" : gcs destination } parent = f "projects/ { project id } /locations/ { location } " Supported language codes: https://cloud.google.com/translate/docs/languages operation = client . batch translate text ( request = { "parent" : parent , "source language code" : "en" , "target language codes" : [ "ja" ], # Up to 10 language codes here. "input configs" : [ input configs element ], "output config" : output config , } ) print ( "Waiting for operation to complete..." ) response = operation . result ( timeout ) print ( f "Total Characters: { response . total characters } " ) print ( f "Translated Characters: { response . translated characters } " ) return response Additional languages C# : Please follow the C# setup instructions on the client libraries page and then visit the Cloud Translation reference documentation for .NET.
- Before using any of the request data, make the following replacements: PROJECT NUMBER OR ID : the numeric or alphanumeric ID of your Google Cloud project HTTP method and URL: POST https://translation.googleapis.com/v3/projects/ PROJECT NUMBER OR ID /locations/us-central1:batchTranslateText Request JSON body: { "models": { "es": "projects/ project number or id /locations/us-central1/models/ model-id " }, "sourceLanguageCode": "en", "targetLanguageCodes": ["es"], "glossaries": { "es": { "glossary": "projects/ project number or id /locations/us-central1/glossaries/ glossary-id " } }, "inputConfigs": [{ "gcsSource": { "inputUri": "gs:// bucket-name-source / input-file-name " } }, { "gcsSource": { "inputUri": "gs:// bucket-name-source / input-file-name2 " } } ], "outputConfig": { "gcsDestination": { "outputUriPrefix": "gs:// bucket-name-destination /" } } } To send your request, choose one of these options: curl Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Before using any of the request data, make the following replacements: PROJECT NUMBER OR ID : the numeric or alphanumeric ID of your Google Cloud project HTTP method and URL: POST https://translation.googleapis.com/v3/projects/ PROJECT NUMBER OR ID /locations/us-central1:batchTranslateText Request JSON body: { "models":{ "es":"projects/ PROJECT NUMBER OR ID /locations/us-central1/models/ model-id1 ", "fr":"projects/ PROJECT NUMBER OR ID /locations/us-central1/models/ model-id2 "}, "sourceLanguageCode": "en", "targetLanguageCodes": ["es", "fr"], "inputConfigs": [ { "gcsSource": { "inputUri": "gs:// bucket-name-source / input-file-name1 " } }, { "gcsSource": { "inputUri": "gs:// bucket-name-source / input-file-name2 " } } ], "outputConfig": { "gcsDestination": { "outputUriPrefix": "gs:// bucket-name-destination /" } } } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .

### Cloud Translation release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/translate/docs/release-notes](https://docs.cloud.google.com/translate/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 144
- Re-rank relevance: N/A

Evidence snippets:
- Auto rotate document to the correct orientation (for scanned PDFs).
- November 01, 2021 Feature Document Translation for Cloud Translation - Advanced (v3) is now Generally Available ( GA ) and includes the following enhancements: Right to left language support for PDFs Preserves font size, font color, font style, and hyperlinks for native PDFs only Batch document translation requests support PDF to DOCX conversions for native PDFs only August 02, 2021 Change Removed the Phrase-Based Machine Translation (PBMT) model.
- Assamese Aymara Bambara Bhojpuri Dhivehi Dogri Ewe Guarani Ilocano Konkani Krio Kurdish(Sorani) Lingala Luganda Maithili Meiteilon(Manipuri) Mizo Oromo Quechua Sanskrit Sepedi(Pedi) Tigrinya Tsonga Twi (Akan) November 15, 2022 Feature For online document translations , you can increase the page limit for native PDF documents to 300 pages.
- March 30, 2023 Feature Added new fields to the document translation methods to handle translation and parsing issues: Shadow text removal for overlapping text (for native PDFs).

### "Translate text by using adaptive translation \_|\_ Cloud Translation \_\

- URL: [https://docs.cloud.google.com/translate/docs/advanced/adaptive-translation](https://docs.cloud.google.com/translate/docs/advanced/adaptive-translation)
- Source ID: `site-iam-reference`
- Final score: 140
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- HTTP method and URL: POST https://translation.googleapis.com/v3/projects/ PROJECT ID /locations/ LOCATION :adaptiveMtTranslate Request JSON body: { "referenceSentenceConfig": { "referenceSentencePairLists": [ { "referenceSentencePairs": [{ "sourceSentence": REFERENCE SOURCE 1 1 , "targetSentence": REFERENCE TARGET 1 1 }, { "sourceSentence": REFERENCE SOURCE 1 2 , "targetSentence": REFERENCE SOURCE 1 2 }] } ], "sourceLanguageCode": SOURCE LANGUAGE , "targetLanguageCode": TARGET LANGUAGE } "content": [" SOURCE TEXT "], "mimeType": " MIME TYPE " } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- HTTP method and URL: POST https://translation.googleapis.com/v3/projects/ PROJECT ID /locations/ LOCATION /adaptiveMtDatasets Request JSON body: { "name": "projects/ PROJECT ID /locations/ LOCATION /adaptiveMtDatasets/ DATASET ID , "display name": " DISPLAY NAME ", "source language code": " SOURCE LANGUAGE ", "target language code": " TARGET LANGUAGE " } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- HTTP method and URL: POST https://translation.googleapis.com/v3/projects/ PROJECT ID /locations/ LOCATION /adaptiveMtDatasets/ DATASET ID :importAdaptiveMtFile Request JSON body: { "gcs input source": { "input uri": " GCS FILE PATH " } } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- HTTP method and URL: POST https://translation.googleapis.com/v3/projects/ PROJECT ID /locations/ LOCATION :adaptiveMtTranslate Request JSON body: { "dataset": " DATASET NAME ", "content": [" SOURCE TEXT "], "mimeType": " MIME TYPE " } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .

