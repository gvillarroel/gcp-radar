---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:22:34.604Z"
product_name: "Cloud Translation"
product_slug: "cloud-translation"
feature_name: "Audit logging"
feature_slug: "audit-logging"
latest_feature_date: "2019-11-05"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/translate/docs/intro-to-v3"
  - "https://docs.cloud.google.com/translate/docs/advanced/batch-translation"
  - "https://docs.cloud.google.com/translate/docs/advanced/glossary"
keywords:
  - "audit"
  - "logging"
  - "translation"
  - "api"
  - "advanced"
  - "integrates"
  - "with"
  - "for"
---

# Audit logging

Product: Cloud Translation
Coverage: LOW

## Step 02 Summary

Translation API - Advanced integrates with audit logging for activity tracking.

## Extended Definition

Translation API - Advanced integrates with audit logging for activity tracking.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/translate/docs/intro-to-v3](https://docs.cloud.google.com/translate/docs/intro-to-v3)
- [https://docs.cloud.google.com/translate/docs/advanced/batch-translation](https://docs.cloud.google.com/translate/docs/advanced/batch-translation)
- [https://docs.cloud.google.com/translate/docs/advanced/glossary](https://docs.cloud.google.com/translate/docs/advanced/glossary)

## Supporting Pages

### Overview of the Cloud Translation API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/translate/docs/intro-to-v3](https://docs.cloud.google.com/translate/docs/intro-to-v3)
- Source ID: `site-iam-reference`
- Final score: 154
- Re-rank relevance: N/A

Evidence snippets:
- Feature Basic Advanced Translate with the NMT model Translate with the Translation LLM Translate with Adaptive Translation models Translate with custom models Translate multiple strings in a single request Batch translations with Cloud Storage Translate documents Glossary support (control terminology) Train custom models Language Detection Integrated REST API Integrated gRPC API Service Account API Key Audit logging Supports HTML Supports 100+ Languages Romanization support Transliteration support Adaptive Translation Multi-regional endpoint support VPC Service Controls support Refer to Cloud Translation - Advanced API features for more details on Cloud Translation - Advanced API.
- IAM roles Cloud Translation - Advanced API integrates with IAM to provide additional security for your translation requests, enable fine-grained access control, and support integration with custom NMT models.
- Compare supported models Customize the NMT model Customize the Translation LLM Supported languages Supported formats Perform adaptive translation Migrate to Translation Advanced For answers to general questions about Cloud Translation API, refer to the General FAQs page.
- Regional endpoint By default, Cloud Translation - Advanced API stores and processes resources in a global location, which means there is no guarantee that resources remain within a particular location.

### Batch requests (Advanced) \_|\_ Cloud Translation \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/translate/docs/advanced/batch-translation](https://docs.cloud.google.com/translate/docs/advanced/batch-translation)
- Source ID: `site-iam-reference`
- Final score: 144
- Re-rank relevance: N/A

Evidence snippets:
- Before using any of the request data, make the following replacements: PROJECT NUMBER OR ID : the numeric or alphanumeric ID of your Google Cloud project HTTP method and URL: POST https://translation.googleapis.com/v3/projects/ PROJECT NUMBER OR ID /locations/us-central1:batchTranslateText Request JSON body: { "models": { "es": "projects/ project number or id /locations/us-central1/models/ model-id " }, "sourceLanguageCode": "en", "targetLanguageCodes": ["es"], "glossaries": { "es": { "glossary": "projects/ project number or id /locations/us-central1/glossaries/ glossary-id " } }, "inputConfigs": [{ "gcsSource": { "inputUri": "gs:// bucket-name-source / input-file-name " } }, { "gcsSource": { "inputUri": "gs:// bucket-name-source / input-file-name2 " } } ], "outputConfig": { "gcsDestination": { "outputUriPrefix": "gs:// bucket-name-destination /" } } } To send your request, choose one of these options: curl Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Before using any of the request data, make the following replacements: PROJECT NUMBER OR ID : the numeric or alphanumeric ID of your Google Cloud project HTTP method and URL: POST https://translation.googleapis.com/v3/projects/ PROJECT NUMBER OR ID /locations/us-central1:batchTranslateText Request JSON body: { "models":{ "es":"projects/ PROJECT NUMBER OR ID /locations/us-central1/models/ model-id1 ", "fr":"projects/ PROJECT NUMBER OR ID /locations/us-central1/models/ model-id2 "}, "sourceLanguageCode": "en", "targetLanguageCodes": ["es", "fr"], "inputConfigs": [ { "gcsSource": { "inputUri": "gs:// bucket-name-source / input-file-name1 " } }, { "gcsSource": { "inputUri": "gs:// bucket-name-source / input-file-name2 " } } ], "outputConfig": { "gcsDestination": { "outputUriPrefix": "gs:// bucket-name-destination /" } } } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Before using any of the request data, make the following replacements: PROJECT NUMBER OR ID : the numeric or alphanumeric ID of your Google Cloud project glossary-id : your glossary ID, for example, "my-en-to-es-glossary" HTTP method and URL: POST https://translation.googleapis.com/v3/projects/ PROJECT NUMBER OR ID /locations/us-central1:batchTranslateText Request JSON body: { "sourceLanguageCode": "en", "targetLanguageCodes": ["es"], "glossaries": { "es": { "glossary": "projects/ PROJECT NUMBER OR ID /locations/us-central1/glossaries/ glossary-id " } }, "inputConfigs": [{ "gcsSource": { "inputUri": "gs:// bucket-name-source / input-file-name1 " } }, { "gcsSource": { "inputUri": "gs:// bucket-name-source / input-file-name2 " } } ], "outputConfig": { "gcsDestination": { "outputUriPrefix": "gs:// bucket-name-destination /" } } } To send your request, choose one of these options: curl Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Before using any of the request data, make the following replacements: PROJECT NUMBER OR ID : the numeric or alphanumeric ID of your Google Cloud project HTTP method and URL: POST https://translation.googleapis.com/v3/projects/ PROJECT NUMBER OR ID /locations/us-central1:batchTranslateText Request JSON body: { "models":{"es":"projects/ PROJECT NUMBER OR ID /locations/us-central1/models/ model-id "}, "sourceLanguageCode": "en", "targetLanguageCodes": ["es"], "inputConfigs": [ { "gcsSource": { "inputUri": "gs:// bucket-name-source / input-file-name1 " } }, { "gcsSource": { "inputUri": "gs:// bucket-name-source / input-file-name2 " } } ], "outputConfig": { "gcsDestination": { "outputUriPrefix": "gs:// bucket-name-destination /" } } } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .

### "Creating and using glossaries (Advanced) \_|\_ Cloud Translation \_|\_ Google\

- URL: [https://docs.cloud.google.com/translate/docs/advanced/glossary](https://docs.cloud.google.com/translate/docs/advanced/glossary)
- Source ID: `site-iam-reference`
- Final score: 142
- Re-rank relevance: N/A

Evidence snippets:
- AdaptiveMtTranslateRequest ( parent = "projects/PROJECT ID/locations/LOCATION" , dataset = "projects/PROJECT ID/locations/LOCATION/adaptiveMtDatasets/DATASET ID" , content = [ "Sample translation request" ] glossary config = glossary config , ) Make the request response = client . adaptive mt translate ( request ) Handle the response print ( response ) Get information about a glossary REST Before using any of the request data, make the following replacements: PROJECT NUMBER OR ID : the numeric or alphanumeric ID of your Google Cloud project glossary-id : your glossary ID, for example, "my-en-to-ru-glossary" HTTP method and URL: GET https://translation.googleapis.com/v3/projects/ PROJECT NUMBER OR ID /locations/us-central1/glossaries/ glossary-id To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Before using any of the request data, make the following replacements: PROJECT NUMBER OR ID : the numeric or alphanumeric ID of your Google Cloud project glossary-id : your glossary ID, for example., my en ru glossary bucket-name : name of bucket where your glossary file is located glossary-filename : filename of your glossary HTTP method and URL: POST https://translation.googleapis.com/v3/projects/ PROJECT NUMBER OR ID /locations/us-central1/glossaries Request JSON body: { "name":"projects/ PROJECT NUMBER OR ID /locations/us-central1/glossaries/ glossary-id ", "languagePair": { "sourceLanguageCode": "en", "targetLanguageCode": "ru" }, "inputConfig": { "gcsSource": { "inputUri": "gs:// bucket-name / glossary-filename " } } } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- REST Before using any of the request data, make the following replacements: PROJECT NUMBER OR ID : the numeric or alphanumeric ID of your Google Cloud project glossary-id : your glossary ID bucket-name : name of bucket where your glossary file is located glossary-filename : filename of your glossary HTTP method and URL: POST https://translation.googleapis.com/v3/projects/ PROJECT NUMBER OR ID /locations/us-central1/glossaries Request JSON body: { "name":"projects/ PROJECT NUMBER OR ID /locations/us-central1/glossaries/ glossary-id ", "languageCodesSet": { "languageCodes": ["en", "en-GB", "ru", "fr", "pt-BR", "pt-PT", "es"] }, "inputConfig": { "gcsSource": { "inputUri": "gs:// bucket-name / glossary-file-name " } } } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- REST Before using any of the request data, make the following replacements: PROJECT NUMBER OR ID : the numeric or alphanumeric ID of your Google Cloud project glossary-id : your glossary ID HTTP method and URL: DELETE https://translation.googleapis.com/v3/projects/ PROJECT NUMBER OR ID /locations/us-central1/glossaries/ glossary-id To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .

