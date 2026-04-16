---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:49.612Z"
product_name: "Cloud Translation"
product_slug: "cloud-translation"
feature_name: "Audit logging"
feature_slug: "audit-logging"
latest_feature_date: "2019-11-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/translate/docs/intro-to-v3"
  - "https://docs.cloud.google.com/translate/docs/advanced/translate-text-advance"
  - "https://docs.cloud.google.com/translate/docs/advanced/translating-text-v3"
  - "https://docs.cloud.google.com/translate/docs/reference/api-overview"
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
Coverage: MEDIUM

## Step 02 Summary

Translation API - Advanced integrates with audit logging for activity tracking.

## Extended Definition

Translation API - Advanced integrates with audit logging for activity tracking.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/translate/docs/intro-to-v3](https://docs.cloud.google.com/translate/docs/intro-to-v3)
- [https://docs.cloud.google.com/translate/docs/advanced/translate-text-advance](https://docs.cloud.google.com/translate/docs/advanced/translate-text-advance)
- [https://docs.cloud.google.com/translate/docs/advanced/translating-text-v3](https://docs.cloud.google.com/translate/docs/advanced/translating-text-v3)
- [https://docs.cloud.google.com/translate/docs/reference/api-overview](https://docs.cloud.google.com/translate/docs/reference/api-overview)

## Supporting Pages

### Overview of the Cloud Translation API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/translate/docs/intro-to-v3](https://docs.cloud.google.com/translate/docs/intro-to-v3)
- Source ID: `site-iam-reference`
- Final score: 216
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Feature Basic Advanced Translate with the NMT model Translate with the Translation LLM Translate with Adaptive Translation models Translate with custom models Translate multiple strings in a single request Batch translations with Cloud Storage Translate documents Glossary support (control terminology) Train custom models Language Detection Integrated REST API Integrated gRPC API Service Account API Key Audit logging Supports HTML Supports 100+ Languages Romanization support Transliteration support Adaptive Translation Multi-regional endpoint support VPC Service Controls support Refer to Cloud Translation - Advanced API features for more details on Cloud Translation - Advanced API.
- IAM roles Cloud Translation - Advanced API integrates with IAM to provide additional security for your translation requests, enable fine-grained access control, and support integration with custom NMT models.
- Compare supported models Customize the NMT model Customize the Translation LLM Supported languages Supported formats Perform adaptive translation Migrate to Translation Advanced For answers to general questions about Cloud Translation API, refer to the General FAQs page.
- Regional endpoint By default, Cloud Translation - Advanced API stores and processes resources in a global location, which means there is no guarantee that resources remain within a particular location.

### Translate text with Cloud Translation \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/translate/docs/advanced/translate-text-advance](https://docs.cloud.google.com/translate/docs/advanced/translate-text-advance)
- Source ID: `site-docs-root`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- Before using any of the request data, make the following replacements: PROJECT NUMBER OR ID : the numeric or alphanumeric ID of your Google Cloud project HTTP method and URL: POST https://translation.googleapis.com/language/translate/v2 Request JSON body: { "q": "The Great Pyramid of Giza (also known as the Pyramid of Khufu or the Pyramid of Cheops) is the oldest and largest of the three pyramids in the Giza pyramid complex.", "source": "en", "target": "es", "format": "text" } To send your request, choose one of these options: curl Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Advanced text translation For translations with Cloud Translation - Advanced, the input can be plain text or HTML.
- For more information, see Set up authentication for a local development environment . / TODO(developer): Uncomment these variables before running the sample. / // const projectId = 'YOUR PROJECT ID'; // const location = 'us-central1'; // const modelId = 'YOUR MODEL ID'; // const text = 'text to translate'; // Imports the Google Cloud Translation library const { TranslationServiceClient } = require ( ' @google-cloud/translate ' ); // Instantiates a client const translationClient = new TranslationServiceClient (); async function translateTextWithModel () { // Construct request const request = { parent : projects/ ${ projectId } /locations/ ${ location } , contents : [ text ], mimeType : 'text/plain' , // mime types: text/plain, text/html sourceLanguageCode : 'en' , targetLanguageCode : 'ja' , model : projects/ ${ projectId } /locations/ ${ location } /models/ ${ modelId } , }; // Run request const [ response ] = await translationClient . translateText ( request ); for ( const translation of response . translations ) { console . log ( Translated Content: ${ translation . translatedText } ); } } translateTextWithModel (); Python Before trying this sample, follow the Python setup instructions in the Cloud Translation quickstart using client libraries .
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred"; "x-goog-user-project" = " PROJECT ID " } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://translation.googleapis.com/v3/projects/ PROJECT ID /locations/ LOCATION :translateText" Select-Object -Expand Content You should receive a JSON response similar to the following: { "translation": { "translatedText": "Доктор Ватсон, пожалуйста, откажитесь от своего мусора. Вы поделились нежелательной электронной почтой со мной. Давайте поговорим о спаме и важности рейтинга в конфиденциальном режиме.", "model": "projects/ PROJECT NUMBER /locations/ LOCATION /models/1395675701985363739" } } Go Before trying this sample, follow the Go setup instructions in the Cloud Translation quickstart using client libraries .

### Translate text with Cloud Translation \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/translate/docs/advanced/translating-text-v3](https://docs.cloud.google.com/translate/docs/advanced/translating-text-v3)
- Source ID: `site-docs-root`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- Before using any of the request data, make the following replacements: PROJECT NUMBER OR ID : the numeric or alphanumeric ID of your Google Cloud project HTTP method and URL: POST https://translation.googleapis.com/language/translate/v2 Request JSON body: { "q": "The Great Pyramid of Giza (also known as the Pyramid of Khufu or the Pyramid of Cheops) is the oldest and largest of the three pyramids in the Giza pyramid complex.", "source": "en", "target": "es", "format": "text" } To send your request, choose one of these options: curl Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Advanced text translation For translations with Cloud Translation - Advanced, the input can be plain text or HTML.
- For more information, see Set up authentication for a local development environment . / TODO(developer): Uncomment these variables before running the sample. / // const projectId = 'YOUR PROJECT ID'; // const location = 'us-central1'; // const modelId = 'YOUR MODEL ID'; // const text = 'text to translate'; // Imports the Google Cloud Translation library const { TranslationServiceClient } = require ( ' @google-cloud/translate ' ); // Instantiates a client const translationClient = new TranslationServiceClient (); async function translateTextWithModel () { // Construct request const request = { parent : projects/ ${ projectId } /locations/ ${ location } , contents : [ text ], mimeType : 'text/plain' , // mime types: text/plain, text/html sourceLanguageCode : 'en' , targetLanguageCode : 'ja' , model : projects/ ${ projectId } /locations/ ${ location } /models/ ${ modelId } , }; // Run request const [ response ] = await translationClient . translateText ( request ); for ( const translation of response . translations ) { console . log ( Translated Content: ${ translation . translatedText } ); } } translateTextWithModel (); Python Before trying this sample, follow the Python setup instructions in the Cloud Translation quickstart using client libraries .
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred"; "x-goog-user-project" = " PROJECT ID " } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://translation.googleapis.com/v3/projects/ PROJECT ID /locations/ LOCATION :translateText" Select-Object -Expand Content You should receive a JSON response similar to the following: { "translation": { "translatedText": "Доктор Ватсон, пожалуйста, откажитесь от своего мусора. Вы поделились нежелательной электронной почтой со мной. Давайте поговорим о спаме и важности рейтинга в конфиденциальном режиме.", "model": "projects/ PROJECT NUMBER /locations/ LOCATION /models/1395675701985363739" } } Go Before trying this sample, follow the Go setup instructions in the Cloud Translation quickstart using client libraries .

### API usage overview \_|\_ Cloud Translation \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/translate/docs/reference/api-overview](https://docs.cloud.google.com/translate/docs/reference/api-overview)
- Source ID: `site-api-reference`
- Final score: 164
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation AI and ML Cloud Translation API and references Send feedback Stay organized with collections Save and categorize content based on your preferences.
- Client libraries, REST, and gRPC You can access the API through client libraries, REST, or gRPC (Cloud Translation - Advanced only).
- API editions Cloud Translation offers two editions: Basic (v2) and Advanced (v3).
- Type, method, and field names Depending on whether you are using client libraries, REST, or gRPC, the type, method, and field names for the API vary: REST is arranged by resource hierarchies and their methods.

