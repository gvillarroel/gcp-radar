---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:22:34.608Z"
product_name: "Cloud Translation"
product_slug: "cloud-translation"
feature_name: "AutoML model translation"
feature_slug: "automl-model-translation"
latest_feature_date: "2019-04-10"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/translate/docs/advanced/translating-text-v3"
  - "https://docs.cloud.google.com/translate/docs/basic/translating-text"
  - "https://docs.cloud.google.com/translate/docs/release-notes"
keywords:
  - "automl"
  - "model"
  - "translation"
  - "api"
  - "v3beta1"
  - "supports"
  - "translating"
  - "text"
---

# AutoML model translation

Product: Cloud Translation
Coverage: LOW

## Step 02 Summary

Cloud Translation API v3beta1 supports translating text with AutoML models.

## Extended Definition

Cloud Translation API v3beta1 supports translating text with AutoML models.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/translate/docs/advanced/translating-text-v3](https://docs.cloud.google.com/translate/docs/advanced/translating-text-v3)
- [https://docs.cloud.google.com/translate/docs/basic/translating-text](https://docs.cloud.google.com/translate/docs/basic/translating-text)
- [https://docs.cloud.google.com/translate/docs/release-notes](https://docs.cloud.google.com/translate/docs/release-notes)

## Supporting Pages

### Translate text with Cloud Translation \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/translate/docs/advanced/translating-text-v3](https://docs.cloud.google.com/translate/docs/advanced/translating-text-v3)
- Source ID: `site-docs-root`
- Final score: 166
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred"; "x-goog-user-project" = " PROJECT ID " } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://translation.googleapis.com/v3/projects/ PROJECT ID /locations/ LOCATION :translateText" Select-Object -Expand Content You should receive a JSON response similar to the following: { "translation": { "translatedText": "Доктор Ватсон, пожалуйста, откажитесь от своего мусора. Вы поделились нежелательной электронной почтой со мной. Давайте поговорим о спаме и важности рейтинга в конфиденциальном режиме.", "model": "projects/ PROJECT NUMBER /locations/ LOCATION /models/1395675701985363739" } } Go Before trying this sample, follow the Go setup instructions in the Cloud Translation quickstart using client libraries .
- Translation LLM with Cloud Translation - Basic API To use the standard Translation LLM model in Cloud Translation - Basic API, pass its full resource name in the model parameter. curl -X POST \ -H "Content-Type: application/json; charset=utf-8" \ -d '{ "q": ["The old lighthouse stood on the edge of the cliff."], "target": "es", "model": "projects/PROJECT ID/locations/REGION NAME/models/general/translation-llm" }' \ "https://translation.googleapis.com/language/translate/v2?key=YOUR API KEY" The Cloud Translation - Basic API supports only standard NMT and standard LLM models, not customized models.
- HTTP method and URL: POST https://translation.googleapis.com/v3/projects/ PROJECT ID /locations/ LOCATION :translateText Request JSON body: { "model": "projects/ PROJECT ID /locations/ LOCATION /models/1395675701985363739", "sourceLanguageCode": "en", "targetLanguageCode": "ru", "contents": ["Dr.
- After completing all of your requests, call // the "close" method on the client to safely clean up any remaining background resources. try ( TranslationServiceClient client = TranslationServiceClient . create ()) { // Supported Locations: global, [glossary location], or [model location] // Glossaries must be hosted in us-central1 // Custom Models must use the same location as your model. (us-central1) String location = "us-central1" ; LocationName parent = LocationName . of ( projectId , location ); String modelPath = String . format ( "projects/%s/locations/%s/models/%s" , projectId , location , modelId ); // Supported Mime Types: https://cloud.google.com/translate/docs/supported-formats TranslateTextRequest request = TranslateTextRequest . newBuilder () . setParent ( parent . toString ()) . setMimeType ( "text/plain" ) . setSourceLanguageCode ( sourceLanguage ) . setTargetLanguageCode ( targetLanguage ) . addContents ( text ) . setModel ( modelPath ) . build (); TranslateTextResponse response = client . translateText ( request ); // Display the translation for each input text provided for ( Translation translation : response . getTranslationsList ()) { System . out . printf ( "Translated text: %s\n" , translation . getTranslatedText ()); } } } } Node.js Before trying this sample, follow the Node.js setup instructions in the Cloud Translation quickstart using client libraries .

### Translate text with Cloud Translation \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/translate/docs/basic/translating-text](https://docs.cloud.google.com/translate/docs/basic/translating-text)
- Source ID: `site-docs-root`
- Final score: 166
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred"; "x-goog-user-project" = " PROJECT ID " } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://translation.googleapis.com/v3/projects/ PROJECT ID /locations/ LOCATION :translateText" Select-Object -Expand Content You should receive a JSON response similar to the following: { "translation": { "translatedText": "Доктор Ватсон, пожалуйста, откажитесь от своего мусора. Вы поделились нежелательной электронной почтой со мной. Давайте поговорим о спаме и важности рейтинга в конфиденциальном режиме.", "model": "projects/ PROJECT NUMBER /locations/ LOCATION /models/1395675701985363739" } } Go Before trying this sample, follow the Go setup instructions in the Cloud Translation quickstart using client libraries .
- Translation LLM with Cloud Translation - Basic API To use the standard Translation LLM model in Cloud Translation - Basic API, pass its full resource name in the model parameter. curl -X POST \ -H "Content-Type: application/json; charset=utf-8" \ -d '{ "q": ["The old lighthouse stood on the edge of the cliff."], "target": "es", "model": "projects/PROJECT ID/locations/REGION NAME/models/general/translation-llm" }' \ "https://translation.googleapis.com/language/translate/v2?key=YOUR API KEY" The Cloud Translation - Basic API supports only standard NMT and standard LLM models, not customized models.
- HTTP method and URL: POST https://translation.googleapis.com/v3/projects/ PROJECT ID /locations/ LOCATION :translateText Request JSON body: { "model": "projects/ PROJECT ID /locations/ LOCATION /models/1395675701985363739", "sourceLanguageCode": "en", "targetLanguageCode": "ru", "contents": ["Dr.
- After completing all of your requests, call // the "close" method on the client to safely clean up any remaining background resources. try ( TranslationServiceClient client = TranslationServiceClient . create ()) { // Supported Locations: global, [glossary location], or [model location] // Glossaries must be hosted in us-central1 // Custom Models must use the same location as your model. (us-central1) String location = "us-central1" ; LocationName parent = LocationName . of ( projectId , location ); String modelPath = String . format ( "projects/%s/locations/%s/models/%s" , projectId , location , modelId ); // Supported Mime Types: https://cloud.google.com/translate/docs/supported-formats TranslateTextRequest request = TranslateTextRequest . newBuilder () . setParent ( parent . toString ()) . setMimeType ( "text/plain" ) . setSourceLanguageCode ( sourceLanguage ) . setTargetLanguageCode ( targetLanguage ) . addContents ( text ) . setModel ( modelPath ) . build (); TranslateTextResponse response = client . translateText ( request ); // Display the translation for each input text provided for ( Translation translation : response . getTranslationsList ()) { System . out . printf ( "Translated text: %s\n" , translation . getTranslatedText ()); } } } } Node.js Before trying this sample, follow the Node.js setup instructions in the Cloud Translation quickstart using client libraries .

### Cloud Translation release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/translate/docs/release-notes](https://docs.cloud.google.com/translate/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 164
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- In addition to the features of Cloud Translation API v3beta1, Translation API - Advanced supports: User labels Audit logging Separate quotas for batch translation and for translation using AutoML models Client libraries for additional languages PHP, GO, C#, and Ruby Note: Existing users should pay careful attention to client library versions before updating.
- Each account receives $10 worth of free usage per month, applied to usage of any of these SKUs: Neural Translation Model Predictions (D90A-CFB2-7CCD) Neural Translation Model Predictions In Translation V3 (E205-31DB-F1F4) Phrase-Based Translation Model Predictions (53BA-5E1D-4314) This credit replaces the free tier for Text Translation requests using NMT for 0-500k characters on Translation API v3beta1.
- All future custom model enhancements will be applied to the Cloud Translation API instead of the AutoML API, which will continue to be maintained.
- Change The https://www.googleapis.com/language/translate/v2 endpoint now supports the Neural Machine Translation (NMT) model.

