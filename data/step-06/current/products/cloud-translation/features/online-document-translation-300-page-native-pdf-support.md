---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:49.606Z"
product_name: "Cloud Translation"
product_slug: "cloud-translation"
feature_name: "Online document translation 300-page native PDF support"
feature_slug: "online-document-translation-300-page-native-pdf-support"
latest_feature_date: "2022-11-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/translate/docs/advanced/automl-upgrade"
  - "https://docs.cloud.google.com/translate/docs/advanced/batch-translation"
  - "https://docs.cloud.google.com/translate/docs/intro-to-v3"
  - "https://docs.cloud.google.com/translate/docs/setup"
keywords:
  - "online"
  - "document"
  - "translation"
  - "300"
  - "page"
  - "native"
  - "pdf"
  - "supports"
---

# Online document translation 300-page native PDF support

Product: Cloud Translation
Coverage: MEDIUM

## Step 02 Summary

Online document translation supports native PDF documents up to 300 pages.

## Extended Definition

Online document translation supports native PDF documents up to 300 pages.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/translate/docs/advanced/automl-upgrade](https://docs.cloud.google.com/translate/docs/advanced/automl-upgrade)
- [https://docs.cloud.google.com/translate/docs/advanced/batch-translation](https://docs.cloud.google.com/translate/docs/advanced/batch-translation)
- [https://docs.cloud.google.com/translate/docs/intro-to-v3](https://docs.cloud.google.com/translate/docs/intro-to-v3)
- [https://docs.cloud.google.com/translate/docs/setup](https://docs.cloud.google.com/translate/docs/setup)

## Supporting Pages

### Upgrade AutoML resources \_|\_ Cloud Translation \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/translate/docs/advanced/automl-upgrade](https://docs.cloud.google.com/translate/docs/advanced/automl-upgrade)
- Source ID: `site-iam-reference`
- Final score: 165
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Feature Legacy Native Import data into datasets when using the API Use CSV file to specify source file locations in Cloud Storage Specify TMX and TSV files locations in Cloud Storage Export data Supports exporting segment pairs from a dataset or data from the model evaluation, which includes the test set along with model predictions Supports exporting segment pairs from a dataset only View data splits by source file The Google Cloud console shows a list of source files that were used to populate a dataset and how the data was split for each file.
- Model evaluation Supports running evaluations against a new test set or from an existing dataset Supports running evaluations against a new test set only Cancel operations Supports canceling dataset import and model creation operations You cannot cancel long-running operations Google Cloud console behavior post upgrade If you upgrade at least one resource, the Google Cloud console switches to using the Cloud Translation API instead of the deprecated AutoML API.
- For example, if you have commands that call the deprecated AutoML API and reference legacy resource IDs, you need to update those commands to call the Cloud Translation API and reference the native resource IDs.
- During the upgrade, Cloud Translation copies your AutoML (legacy) resources, such as datasets and models, and creates new Cloud Translation (native) resources through the Cloud Translation API.

### Batch requests (Advanced) \_|\_ Cloud Translation \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/translate/docs/advanced/batch-translation](https://docs.cloud.google.com/translate/docs/advanced/batch-translation)
- Source ID: `site-iam-reference`
- Final score: 161
- Re-rank relevance: N/A

Evidence snippets:
- TranslationServiceClient () Supported file types: https://cloud.google.com/translate/docs/supported-formats gcs source = { "input uri" : input uri } location = "us-central1" input configs element = { "gcs source" : gcs source , "mime type" : "text/plain" , # Can be "text/plain" or "text/html". } gcs destination = { "output uri prefix" : output uri } output config = { "gcs destination" : gcs destination } parent = f "projects/ { project id } /locations/ { location } " model path = "projects/ {} /locations/ {} /models/ {} " . format ( project id , location , model id # The location of AutoML model. ) Supported language codes: https://cloud.google.com/translate/docs/languages models = { "ja" : model path } # takes a target lang as key. operation = client . batch translate text ( request = { "parent" : parent , "source language code" : "en" , "target language codes" : [ "ja" ], # Up to 10 language codes here. "input configs" : [ input configs element ], "output config" : output config , "models" : models , } ) print ( "Waiting for operation to complete..." ) response = operation . result () Display the translation for each input text provided. print ( f "Total Characters: { response . total characters } " ) print ( f "Translated Characters: { response . translated characters } " ) return response Additional languages C# : Please follow the C# setup instructions on the client libraries page and then visit the Cloud Translation reference documentation for .NET.
- TranslationServiceClient () location = "us-central1" Supported file types: https://cloud.google.com/translate/docs/supported-formats gcs source = { "input uri" : input uri } input configs element = { "gcs source" : gcs source , "mime type" : "text/plain" , # Can be "text/plain" or "text/html". } gcs destination = { "output uri prefix" : output uri } output config = { "gcs destination" : gcs destination } parent = f "projects/ { project id } /locations/ { location } " Supported language codes: https://cloud.google.com/translate/docs/languages operation = client . batch translate text ( request = { "parent" : parent , "source language code" : "en" , "target language codes" : [ "ja" ], # Up to 10 language codes here. "input configs" : [ input configs element ], "output config" : output config , } ) print ( "Waiting for operation to complete..." ) response = operation . result ( timeout ) print ( f "Total Characters: { response . total characters } " ) print ( f "Translated Characters: { response . translated characters } " ) return response Additional languages C# : Please follow the C# setup instructions on the client libraries page and then visit the Cloud Translation reference documentation for .NET.
- TranslateTextGlossaryConfig ( glossary = glossary path ) glossaries = { "ja" : glossary config } # target lang as key operation = client . batch translate text ( request = { "parent" : parent , "source language code" : "en" , "target language codes" : target language codes , "input configs" : input configs , "output config" : output config , "models" : models , "glossaries" : glossaries , } ) print ( "Waiting for operation to complete..." ) response = operation . result () Display the translation for each input text provided print ( f "Total Characters: { response . total characters } " ) print ( f "Translated Characters: { response . translated characters } " ) return response Additional languages C# : Please follow the C# setup instructions on the client libraries page and then visit the Cloud Translation reference documentation for .NET.
- TranslateTextGlossaryConfig ( glossary = glossary path ) glossaries = { "ja" : glossary config } # target lang as key operation = client . batch translate text ( request = { "parent" : parent , "source language code" : "en" , "target language codes" : [ "ja" ], # Up to 10 language codes here. "input configs" : [ input configs element ], "glossaries" : glossaries , "output config" : output config , } ) print ( "Waiting for operation to complete..." ) response = operation . result ( timeout ) print ( f "Total Characters: { response . total characters } " ) print ( f "Translated Characters: { response . translated characters } " ) return response Additional languages C# : Please follow the C# setup instructions on the client libraries page and then visit the Cloud Translation reference documentation for .NET.

### Overview of the Cloud Translation API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/translate/docs/intro-to-v3](https://docs.cloud.google.com/translate/docs/intro-to-v3)
- Source ID: `site-iam-reference`
- Final score: 150
- Re-rank relevance: N/A

Evidence snippets:
- Feature Basic Advanced Translate with the NMT model Translate with the Translation LLM Translate with Adaptive Translation models Translate with custom models Translate multiple strings in a single request Batch translations with Cloud Storage Translate documents Glossary support (control terminology) Train custom models Language Detection Integrated REST API Integrated gRPC API Service Account API Key Audit logging Supports HTML Supports 100+ Languages Romanization support Transliteration support Adaptive Translation Multi-regional endpoint support VPC Service Controls support Refer to Cloud Translation - Advanced API features for more details on Cloud Translation - Advanced API.
- Document Translation Document Translation lets you directly translate existing documents, such as PDF and DOCX files, to a target language.
- Document Translation : This feature lets you translate documents such as PDF files while preserving their original format and layout.
- Compare supported models Customize the NMT model Customize the Translation LLM Supported languages Supported formats Perform adaptive translation Migrate to Translation Advanced For answers to general questions about Cloud Translation API, refer to the General FAQs page.

### Setup \_|\_ Cloud Translation \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/translate/docs/setup](https://docs.cloud.google.com/translate/docs/setup)
- Source ID: `site-docs-root`
- Final score: 137
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Try Cloud Translation free Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Documentation AI and ML Cloud Translation Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.
- For more information about Cloud Translation pricing, see the pricing page .
- Node.js For more on setting up your Node.js development environment, refer to the Node.js Development Environment Setup Guide . npm install @google-cloud/translate PHP composer require google/cloud-translate Python For more on setting up your Python development environment, refer to the Python Development Environment Setup Guide . pip install google-cloud-translate==2.0.1 Ruby For more on setting up your Ruby development environment, refer to the Ruby Development Environment Setup Guide . gem install google-cloud-translate-v2 Cloud Translation - Advanced client libraries Select the programming language that you are using for development, and then run the related command.

