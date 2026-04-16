---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:49.608Z"
product_name: "Cloud Translation"
product_slug: "cloud-translation"
feature_name: "Document Translation"
feature_slug: "document-translation"
latest_feature_date: "2021-11-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/translate/docs/intro-to-v3"
  - "https://docs.cloud.google.com/translate/docs/advanced/translate-text-advance"
  - "https://docs.cloud.google.com/translate/docs/advanced/translating-text-v3"
  - "https://docs.cloud.google.com/translate/docs/basic/translate-text-basic"
keywords:
  - "document"
  - "translation"
  - "translates"
  - "documents"
  - "with"
  - "layout"
  - "aware"
  - "output"
---

# Document Translation

Product: Cloud Translation
Coverage: MEDIUM

## Step 02 Summary

Document Translation translates documents with layout-aware output in Cloud Translation - Advanced (v3); Document Translation translates DOCX, PPTX, XLSX, and PDF files in Cloud Translation - Advanced (v3).

## Extended Definition

Document Translation translates documents with layout-aware output in Cloud Translation - Advanced (v3); Document Translation translates DOCX, PPTX, XLSX, and PDF files in Cloud Translation - Advanced (v3).

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/translate/docs/intro-to-v3](https://docs.cloud.google.com/translate/docs/intro-to-v3)
- [https://docs.cloud.google.com/translate/docs/advanced/translate-text-advance](https://docs.cloud.google.com/translate/docs/advanced/translate-text-advance)
- [https://docs.cloud.google.com/translate/docs/advanced/translating-text-v3](https://docs.cloud.google.com/translate/docs/advanced/translating-text-v3)
- [https://docs.cloud.google.com/translate/docs/basic/translate-text-basic](https://docs.cloud.google.com/translate/docs/basic/translate-text-basic)

## Supporting Pages

### Overview of the Cloud Translation API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/translate/docs/intro-to-v3](https://docs.cloud.google.com/translate/docs/intro-to-v3)
- Source ID: `site-iam-reference`
- Final score: 210
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Feature Basic Advanced Translate with the NMT model Translate with the Translation LLM Translate with Adaptive Translation models Translate with custom models Translate multiple strings in a single request Batch translations with Cloud Storage Translate documents Glossary support (control terminology) Train custom models Language Detection Integrated REST API Integrated gRPC API Service Account API Key Audit logging Supports HTML Supports 100+ Languages Romanization support Transliteration support Adaptive Translation Multi-regional endpoint support VPC Service Controls support Refer to Cloud Translation - Advanced API features for more details on Cloud Translation - Advanced API.
- Document Translation preserves the original format so that translated documents have the same layout and format as the original documents.
- Document Translation : This feature lets you translate documents such as PDF files while preserving their original format and layout.
- Home Documentation AI and ML Cloud Translation Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.

### Translate text with Cloud Translation \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/translate/docs/advanced/translate-text-advance](https://docs.cloud.google.com/translate/docs/advanced/translate-text-advance)
- Source ID: `site-docs-root`
- Final score: 202
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Cloud Translation - Advanced also provides advanced text translation capabilities like translating documents and creating glossaries to ensure that your domain-specific terminology is translated correctly.
- Home Documentation AI and ML Cloud Translation Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.
- For more information, see Set up authentication for a local development environment . / TODO(developer): Uncomment these variables before running the sample. / // const projectId = 'YOUR PROJECT ID'; // const location = 'us-central1'; // const modelId = 'YOUR MODEL ID'; // const text = 'text to translate'; // Imports the Google Cloud Translation library const { TranslationServiceClient } = require ( ' @google-cloud/translate ' ); // Instantiates a client const translationClient = new TranslationServiceClient (); async function translateTextWithModel () { // Construct request const request = { parent : projects/ ${ projectId } /locations/ ${ location } , contents : [ text ], mimeType : 'text/plain' , // mime types: text/plain, text/html sourceLanguageCode : 'en' , targetLanguageCode : 'ja' , model : projects/ ${ projectId } /locations/ ${ location } /models/ ${ modelId } , }; // Run request const [ response ] = await translationClient . translateText ( request ); for ( const translation of response . translations ) { console . log ( Translated Content: ${ translation . translatedText } ); } } translateTextWithModel (); Python Before trying this sample, follow the Python setup instructions in the Cloud Translation quickstart using client libraries .
- TranslationServiceClient () location = "us-central1" parent = f "projects/ { project id } /locations/ { location } " model path = f " { parent } /models/ { model id } " Supported language codes: https://cloud.google.com/translate/docs/languages response = client . translate text ( request = { "contents" : [ text ], "target language code" : "ja" , "model" : model path , "source language code" : "en" , "parent" : parent , "mime type" : "text/plain" , # mime types: text/plain, text/html } ) Display the translation for each input text provided for translation in response . translations : print ( f "Translated text: { translation . translated text } " ) return response Additional languages C# : Please follow the C# setup instructions on the client libraries page and then visit the Cloud Translation reference documentation for .NET.

### Translate text with Cloud Translation \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/translate/docs/advanced/translating-text-v3](https://docs.cloud.google.com/translate/docs/advanced/translating-text-v3)
- Source ID: `site-docs-root`
- Final score: 202
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Cloud Translation - Advanced also provides advanced text translation capabilities like translating documents and creating glossaries to ensure that your domain-specific terminology is translated correctly.
- Home Documentation AI and ML Cloud Translation Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.
- For more information, see Set up authentication for a local development environment . / TODO(developer): Uncomment these variables before running the sample. / // const projectId = 'YOUR PROJECT ID'; // const location = 'us-central1'; // const modelId = 'YOUR MODEL ID'; // const text = 'text to translate'; // Imports the Google Cloud Translation library const { TranslationServiceClient } = require ( ' @google-cloud/translate ' ); // Instantiates a client const translationClient = new TranslationServiceClient (); async function translateTextWithModel () { // Construct request const request = { parent : projects/ ${ projectId } /locations/ ${ location } , contents : [ text ], mimeType : 'text/plain' , // mime types: text/plain, text/html sourceLanguageCode : 'en' , targetLanguageCode : 'ja' , model : projects/ ${ projectId } /locations/ ${ location } /models/ ${ modelId } , }; // Run request const [ response ] = await translationClient . translateText ( request ); for ( const translation of response . translations ) { console . log ( Translated Content: ${ translation . translatedText } ); } } translateTextWithModel (); Python Before trying this sample, follow the Python setup instructions in the Cloud Translation quickstart using client libraries .
- TranslationServiceClient () location = "us-central1" parent = f "projects/ { project id } /locations/ { location } " model path = f " { parent } /models/ { model id } " Supported language codes: https://cloud.google.com/translate/docs/languages response = client . translate text ( request = { "contents" : [ text ], "target language code" : "ja" , "model" : model path , "source language code" : "en" , "parent" : parent , "mime type" : "text/plain" , # mime types: text/plain, text/html } ) Display the translation for each input text provided for translation in response . translations : print ( f "Translated text: { translation . translated text } " ) return response Additional languages C# : Please follow the C# setup instructions on the client libraries page and then visit the Cloud Translation reference documentation for .NET.

### Translate text with Cloud Translation \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/translate/docs/basic/translate-text-basic](https://docs.cloud.google.com/translate/docs/basic/translate-text-basic)
- Source ID: `site-docs-root`
- Final score: 202
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Cloud Translation - Advanced also provides advanced text translation capabilities like translating documents and creating glossaries to ensure that your domain-specific terminology is translated correctly.
- Home Documentation AI and ML Cloud Translation Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.
- For more information, see Set up authentication for a local development environment . / TODO(developer): Uncomment these variables before running the sample. / // const projectId = 'YOUR PROJECT ID'; // const location = 'us-central1'; // const modelId = 'YOUR MODEL ID'; // const text = 'text to translate'; // Imports the Google Cloud Translation library const { TranslationServiceClient } = require ( ' @google-cloud/translate ' ); // Instantiates a client const translationClient = new TranslationServiceClient (); async function translateTextWithModel () { // Construct request const request = { parent : projects/ ${ projectId } /locations/ ${ location } , contents : [ text ], mimeType : 'text/plain' , // mime types: text/plain, text/html sourceLanguageCode : 'en' , targetLanguageCode : 'ja' , model : projects/ ${ projectId } /locations/ ${ location } /models/ ${ modelId } , }; // Run request const [ response ] = await translationClient . translateText ( request ); for ( const translation of response . translations ) { console . log ( Translated Content: ${ translation . translatedText } ); } } translateTextWithModel (); Python Before trying this sample, follow the Python setup instructions in the Cloud Translation quickstart using client libraries .
- TranslationServiceClient () location = "us-central1" parent = f "projects/ { project id } /locations/ { location } " model path = f " { parent } /models/ { model id } " Supported language codes: https://cloud.google.com/translate/docs/languages response = client . translate text ( request = { "contents" : [ text ], "target language code" : "ja" , "model" : model path , "source language code" : "en" , "parent" : parent , "mime type" : "text/plain" , # mime types: text/plain, text/html } ) Display the translation for each input text provided for translation in response . translations : print ( f "Translated text: { translation . translated text } " ) return response Additional languages C# : Please follow the C# setup instructions on the client libraries page and then visit the Cloud Translation reference documentation for .NET.

