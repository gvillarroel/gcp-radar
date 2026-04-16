---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:49.613Z"
product_name: "Cloud Translation"
product_slug: "cloud-translation"
feature_name: "AutoML model translation"
feature_slug: "automl-model-translation"
latest_feature_date: "2019-04-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/translate/docs/advanced/translating-text-v3"
  - "https://docs.cloud.google.com/translate/docs/basic/translating-text"
  - "https://docs.cloud.google.com/translate/docs/advanced/automl-upgrade"
  - "https://docs.cloud.google.com/translate/docs/advanced/translate-text-advance"
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
Coverage: MEDIUM

## Step 02 Summary

Cloud Translation API v3beta1 supports translating text with AutoML models.

## Extended Definition

Cloud Translation API v3beta1 supports translating text with AutoML models.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/translate/docs/advanced/translating-text-v3](https://docs.cloud.google.com/translate/docs/advanced/translating-text-v3)
- [https://docs.cloud.google.com/translate/docs/basic/translating-text](https://docs.cloud.google.com/translate/docs/basic/translating-text)
- [https://docs.cloud.google.com/translate/docs/advanced/automl-upgrade](https://docs.cloud.google.com/translate/docs/advanced/automl-upgrade)
- [https://docs.cloud.google.com/translate/docs/advanced/translate-text-advance](https://docs.cloud.google.com/translate/docs/advanced/translate-text-advance)

## Supporting Pages

### Translate text with Cloud Translation \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/translate/docs/advanced/translating-text-v3](https://docs.cloud.google.com/translate/docs/advanced/translating-text-v3)
- Source ID: `site-docs-root`
- Final score: 212
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred"; "x-goog-user-project" = " PROJECT ID " } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://translation.googleapis.com/v3/projects/ PROJECT ID /locations/ LOCATION :translateText" Select-Object -Expand Content You should receive a JSON response similar to the following: { "translation": { "translatedText": "Доктор Ватсон, пожалуйста, откажитесь от своего мусора. Вы поделились нежелательной электронной почтой со мной. Давайте поговорим о спаме и важности рейтинга в конфиденциальном режиме.", "model": "projects/ PROJECT NUMBER /locations/ LOCATION /models/1395675701985363739" } } Go Before trying this sample, follow the Go setup instructions in the Cloud Translation quickstart using client libraries .
- Translation LLM with Cloud Translation - Basic API To use the standard Translation LLM model in Cloud Translation - Basic API, pass its full resource name in the model parameter. curl -X POST \ -H "Content-Type: application/json; charset=utf-8" \ -d '{ "q": ["The old lighthouse stood on the edge of the cliff."], "target": "es", "model": "projects/PROJECT ID/locations/REGION NAME/models/general/translation-llm" }' \ "https://translation.googleapis.com/language/translate/v2?key=YOUR API KEY" The Cloud Translation - Basic API supports only standard NMT and standard LLM models, not customized models.
- HTTP method and URL: POST https://translation.googleapis.com/v3/projects/ PROJECT ID /locations/ LOCATION :translateText Request JSON body: { "model": "projects/ PROJECT ID /locations/ LOCATION /models/1395675701985363739", "sourceLanguageCode": "en", "targetLanguageCode": "ru", "contents": ["Dr.
- After completing all of your requests, call // the "close" method on the client to safely clean up any remaining background resources. try ( TranslationServiceClient client = TranslationServiceClient . create ()) { // Supported Locations: global, [glossary location], or [model location] // Glossaries must be hosted in us-central1 // Custom Models must use the same location as your model. (us-central1) String location = "us-central1" ; LocationName parent = LocationName . of ( projectId , location ); String modelPath = String . format ( "projects/%s/locations/%s/models/%s" , projectId , location , modelId ); // Supported Mime Types: https://cloud.google.com/translate/docs/supported-formats TranslateTextRequest request = TranslateTextRequest . newBuilder () . setParent ( parent . toString ()) . setMimeType ( "text/plain" ) . setSourceLanguageCode ( sourceLanguage ) . setTargetLanguageCode ( targetLanguage ) . addContents ( text ) . setModel ( modelPath ) . build (); TranslateTextResponse response = client . translateText ( request ); // Display the translation for each input text provided for ( Translation translation : response . getTranslationsList ()) { System . out . printf ( "Translated text: %s\n" , translation . getTranslatedText ()); } } } } Node.js Before trying this sample, follow the Node.js setup instructions in the Cloud Translation quickstart using client libraries .

### Translate text with Cloud Translation \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/translate/docs/basic/translating-text](https://docs.cloud.google.com/translate/docs/basic/translating-text)
- Source ID: `site-docs-root`
- Final score: 212
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred"; "x-goog-user-project" = " PROJECT ID " } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://translation.googleapis.com/v3/projects/ PROJECT ID /locations/ LOCATION :translateText" Select-Object -Expand Content You should receive a JSON response similar to the following: { "translation": { "translatedText": "Доктор Ватсон, пожалуйста, откажитесь от своего мусора. Вы поделились нежелательной электронной почтой со мной. Давайте поговорим о спаме и важности рейтинга в конфиденциальном режиме.", "model": "projects/ PROJECT NUMBER /locations/ LOCATION /models/1395675701985363739" } } Go Before trying this sample, follow the Go setup instructions in the Cloud Translation quickstart using client libraries .
- Translation LLM with Cloud Translation - Basic API To use the standard Translation LLM model in Cloud Translation - Basic API, pass its full resource name in the model parameter. curl -X POST \ -H "Content-Type: application/json; charset=utf-8" \ -d '{ "q": ["The old lighthouse stood on the edge of the cliff."], "target": "es", "model": "projects/PROJECT ID/locations/REGION NAME/models/general/translation-llm" }' \ "https://translation.googleapis.com/language/translate/v2?key=YOUR API KEY" The Cloud Translation - Basic API supports only standard NMT and standard LLM models, not customized models.
- HTTP method and URL: POST https://translation.googleapis.com/v3/projects/ PROJECT ID /locations/ LOCATION :translateText Request JSON body: { "model": "projects/ PROJECT ID /locations/ LOCATION /models/1395675701985363739", "sourceLanguageCode": "en", "targetLanguageCode": "ru", "contents": ["Dr.
- After completing all of your requests, call // the "close" method on the client to safely clean up any remaining background resources. try ( TranslationServiceClient client = TranslationServiceClient . create ()) { // Supported Locations: global, [glossary location], or [model location] // Glossaries must be hosted in us-central1 // Custom Models must use the same location as your model. (us-central1) String location = "us-central1" ; LocationName parent = LocationName . of ( projectId , location ); String modelPath = String . format ( "projects/%s/locations/%s/models/%s" , projectId , location , modelId ); // Supported Mime Types: https://cloud.google.com/translate/docs/supported-formats TranslateTextRequest request = TranslateTextRequest . newBuilder () . setParent ( parent . toString ()) . setMimeType ( "text/plain" ) . setSourceLanguageCode ( sourceLanguage ) . setTargetLanguageCode ( targetLanguage ) . addContents ( text ) . setModel ( modelPath ) . build (); TranslateTextResponse response = client . translateText ( request ); // Display the translation for each input text provided for ( Translation translation : response . getTranslationsList ()) { System . out . printf ( "Translated text: %s\n" , translation . getTranslatedText ()); } } } } Node.js Before trying this sample, follow the Node.js setup instructions in the Cloud Translation quickstart using client libraries .

### Upgrade AutoML resources \_|\_ Cloud Translation \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/translate/docs/advanced/automl-upgrade](https://docs.cloud.google.com/translate/docs/advanced/automl-upgrade)
- Source ID: `site-iam-reference`
- Final score: 207
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Model evaluation Supports running evaluations against a new test set or from an existing dataset Supports running evaluations against a new test set only Cancel operations Supports canceling dataset import and model creation operations You cannot cancel long-running operations Google Cloud console behavior post upgrade If you upgrade at least one resource, the Google Cloud console switches to using the Cloud Translation API instead of the deprecated AutoML API.
- During the upgrade, Cloud Translation copies your AutoML (legacy) resources, such as datasets and models, and creates new Cloud Translation (native) resources through the Cloud Translation API.
- Feature Legacy Native Import data into datasets when using the API Use CSV file to specify source file locations in Cloud Storage Specify TMX and TSV files locations in Cloud Storage Export data Supports exporting segment pairs from a dataset or data from the model evaluation, which includes the test set along with model predictions Supports exporting segment pairs from a dataset only View data splits by source file The Google Cloud console shows a list of source files that were used to populate a dataset and how the data was split for each file.
- Upgrade AutoML resources If you have existing resources that were created by using the deprecated AutoML API, you can upgrade those resources to manage them through the Cloud Translation - Advanced API without any service interruptions or additional costs.

### Translate text with Cloud Translation \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/translate/docs/advanced/translate-text-advance](https://docs.cloud.google.com/translate/docs/advanced/translate-text-advance)
- Source ID: `site-docs-root`
- Final score: 202
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred"; "x-goog-user-project" = " PROJECT ID " } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://translation.googleapis.com/v3/projects/ PROJECT ID /locations/ LOCATION :translateText" Select-Object -Expand Content You should receive a JSON response similar to the following: { "translation": { "translatedText": "Доктор Ватсон, пожалуйста, откажитесь от своего мусора. Вы поделились нежелательной электронной почтой со мной. Давайте поговорим о спаме и важности рейтинга в конфиденциальном режиме.", "model": "projects/ PROJECT NUMBER /locations/ LOCATION /models/1395675701985363739" } } Go Before trying this sample, follow the Go setup instructions in the Cloud Translation quickstart using client libraries .
- Translation LLM with Cloud Translation - Basic API To use the standard Translation LLM model in Cloud Translation - Basic API, pass its full resource name in the model parameter. curl -X POST \ -H "Content-Type: application/json; charset=utf-8" \ -d '{ "q": ["The old lighthouse stood on the edge of the cliff."], "target": "es", "model": "projects/PROJECT ID/locations/REGION NAME/models/general/translation-llm" }' \ "https://translation.googleapis.com/language/translate/v2?key=YOUR API KEY" The Cloud Translation - Basic API supports only standard NMT and standard LLM models, not customized models.
- HTTP method and URL: POST https://translation.googleapis.com/v3/projects/ PROJECT ID /locations/ LOCATION :translateText Request JSON body: { "model": "projects/ PROJECT ID /locations/ LOCATION /models/1395675701985363739", "sourceLanguageCode": "en", "targetLanguageCode": "ru", "contents": ["Dr.
- After completing all of your requests, call // the "close" method on the client to safely clean up any remaining background resources. try ( TranslationServiceClient client = TranslationServiceClient . create ()) { // Supported Locations: global, [glossary location], or [model location] // Glossaries must be hosted in us-central1 // Custom Models must use the same location as your model. (us-central1) String location = "us-central1" ; LocationName parent = LocationName . of ( projectId , location ); String modelPath = String . format ( "projects/%s/locations/%s/models/%s" , projectId , location , modelId ); // Supported Mime Types: https://cloud.google.com/translate/docs/supported-formats TranslateTextRequest request = TranslateTextRequest . newBuilder () . setParent ( parent . toString ()) . setMimeType ( "text/plain" ) . setSourceLanguageCode ( sourceLanguage ) . setTargetLanguageCode ( targetLanguage ) . addContents ( text ) . setModel ( modelPath ) . build (); TranslateTextResponse response = client . translateText ( request ); // Display the translation for each input text provided for ( Translation translation : response . getTranslationsList ()) { System . out . printf ( "Translated text: %s\n" , translation . getTranslatedText ()); } } } } Node.js Before trying this sample, follow the Node.js setup instructions in the Cloud Translation quickstart using client libraries .

