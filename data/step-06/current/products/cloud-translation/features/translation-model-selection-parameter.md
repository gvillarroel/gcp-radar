---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:49.615Z"
product_name: "Cloud Translation"
product_slug: "cloud-translation"
feature_name: "Translation model selection parameter"
feature_slug: "translation-model-selection-parameter"
latest_feature_date: "2017-04-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/translate/docs/advanced/custom-tllm-models"
  - "https://docs.cloud.google.com/translate/docs/advanced/translate-text-advance"
  - "https://docs.cloud.google.com/translate/docs/basic/translate-text-basic"
  - "https://docs.cloud.google.com/translate/docs/advanced/translating-text-v3"
keywords:
  - "translation"
  - "model"
  - "selection"
  - "parameter"
  - "the"
  - "translate"
  - "method"
  - "supports"
---

# Translation model selection parameter

Product: Cloud Translation
Coverage: MEDIUM

## Step 02 Summary

The translate method supports a model parameter to explicitly choose the translation model for a request.

## Extended Definition

The translate method supports a model parameter to explicitly choose the translation model for a request.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/translate/docs/advanced/custom-tllm-models](https://docs.cloud.google.com/translate/docs/advanced/custom-tllm-models)
- [https://docs.cloud.google.com/translate/docs/advanced/translate-text-advance](https://docs.cloud.google.com/translate/docs/advanced/translate-text-advance)
- [https://docs.cloud.google.com/translate/docs/basic/translate-text-basic](https://docs.cloud.google.com/translate/docs/basic/translate-text-basic)
- [https://docs.cloud.google.com/translate/docs/advanced/translating-text-v3](https://docs.cloud.google.com/translate/docs/advanced/translating-text-v3)

## Supporting Pages

### Create and manage models \_|\_ Cloud Translation \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/translate/docs/advanced/custom-tllm-models](https://docs.cloud.google.com/translate/docs/advanced/custom-tllm-models)
- Source ID: `site-iam-reference`
- Final score: 231
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- PROJECT ID = os.environ["GOOGLE CLOUD PROJECT"] vertexai . init ( project = PROJECT ID , location = "us-central1" ) sft tuning job = sft . train ( source model = "translation-llm-002" , train dataset = "gs://cloud-samples-data/ai-platform/generative ai/gemini-2 0/text/sft train data.jsonl" , The following parameters are optional validation dataset = "gs://cloud-samples-data/ai-platform/generative ai/gemini-2 0/text/sft validation data.jsonl" , tuned model display name = "tuned translation llm 002" , ) Polling for job completion while not sft tuning job . has ended : time . sleep ( 60 ) sft tuning job . refresh () print ( sft tuning job . tuned model name ) print ( sft tuning job . tuned model endpoint name ) print ( sft tuning job . experiment ) Example response: projects/123456789012/locations/us-central1/models/1234567890@1 projects/123456789012/locations/us-central1/endpoints/123456789012345 <google.cloud.aiplatform.metadata.experiment resources.Experiment object at 0x7b5b4ae07af0> View a list of tuning jobs You can view a list of tuning jobs in your current project by using the Google Cloud console, the Vertex AI SDK for Python, or by sending a GET request by using the tuningJobs method.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred"; "x-goog-user-project" = " PROJECT ID " } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json ` -Uri "https://translation.googleapis.com/v3/projects/ PROJECT ID /locations/ LOCATION :translateText" Select-Object -Expand Content You should receive a JSON response similar to the following: { "translation": { "translatedText": "Доктор Ватсон, пожалуйста, откажитесь от своего мусора. Вы поделились нежелательной электронной почтой со мной. Давайте поговорим о спаме и важности рейтинга в конфиденциальном режиме.", "model": "projects/ PROJECT NUMBER /locations/ LOCATION /model/translation-llm-custom/1395675701985363739" } } Python from google.cloud import translate def translate text with model ( text : str = "YOUR TEXT TO TRANSLATE" , project id : str = "YOUR PROJECT ID" , model id : str = "YOUR MODEL ID" , ) - > translate .
- TranslationServiceClient () location = "us-central1" parent = f "projects/ { project id } /locations/ { location } " model path = f " { parent } /models/translation-llm-custom/ { model id } " Supported language codes: https://cloud.google.com/translate/docs/languages response = client . translate text ( request = { "contents" : [ text ], "target language code" : "ja" , "model" : model path , "source language code" : "en" , "parent" : parent , "mime type" : "text/plain" , # mime types: text/plain, text/html } ) Display the translation for each input text provided for translation in response . translations : print ( f "Translated text: { translation . translated text } " ) return response Tuning and validation metrics You can configure a model tuning job to collect and report model tuning and model evaluation metrics, which can then be visualized in Vertex AI Studio .
- HTTP method and URL: POST https://translation.googleapis.com/v3/projects/ PROJECT ID /locations/ LOCATION :translateText Request JSON body: { "model": "projects/ PROJECT ID /locations/ LOCATION /model/translation-llm-custom/1395675701985363739", "sourceLanguageCode": "en", "targetLanguageCode": "ru", "contents": ["Dr.

### Translate text with Cloud Translation \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/translate/docs/advanced/translate-text-advance](https://docs.cloud.google.com/translate/docs/advanced/translate-text-advance)
- Source ID: `site-docs-root`
- Final score: 231
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Translation LLM with Cloud Translation - Basic API To use the standard Translation LLM model in Cloud Translation - Basic API, pass its full resource name in the model parameter. curl -X POST \ -H "Content-Type: application/json; charset=utf-8" \ -d '{ "q": ["The old lighthouse stood on the edge of the cliff."], "target": "es", "model": "projects/PROJECT ID/locations/REGION NAME/models/general/translation-llm" }' \ "https://translation.googleapis.com/language/translate/v2?key=YOUR API KEY" The Cloud Translation - Basic API supports only standard NMT and standard LLM models, not customized models.
- After completing all of your requests, call // the "close" method on the client to safely clean up any remaining background resources. try ( TranslationServiceClient client = TranslationServiceClient . create ()) { // Supported Locations: global, [glossary location], or [model location] // Glossaries must be hosted in us-central1 // Custom Models must use the same location as your model. (us-central1) String location = "us-central1" ; LocationName parent = LocationName . of ( projectId , location ); String modelPath = String . format ( "projects/%s/locations/%s/models/%s" , projectId , location , modelId ); // Supported Mime Types: https://cloud.google.com/translate/docs/supported-formats TranslateTextRequest request = TranslateTextRequest . newBuilder () . setParent ( parent . toString ()) . setMimeType ( "text/plain" ) . setSourceLanguageCode ( sourceLanguage ) . setTargetLanguageCode ( targetLanguage ) . addContents ( text ) . setModel ( modelPath ) . build (); TranslateTextResponse response = client . translateText ( request ); // Display the translation for each input text provided for ( Translation translation : response . getTranslationsList ()) { System . out . printf ( "Translated text: %s\n" , translation . getTranslatedText ()); } } } } Node.js Before trying this sample, follow the Node.js setup instructions in the Cloud Translation quickstart using client libraries .
- After completing all of your requests, call // the "close" method on the client to safely clean up any remaining background resources. try ( TranslationServiceClient client = TranslationServiceClient . create ()) { // Supported Locations: global, [glossary location], or [model location] // Glossaries must be hosted in us-central1 // Custom Models must use the same location as your model. (us-central1) LocationName parent = LocationName . of ( projectId , "global" ); // Supported Mime Types: https://cloud.google.com/translate/docs/supported-formats TranslateTextRequest request = TranslateTextRequest . newBuilder () . setParent ( parent . toString ()) . setMimeType ( "text/plain" ) . setTargetLanguageCode ( targetLanguage ) . addContents ( text ) . build (); TranslateTextResponse response = client . translateText ( request ); // Display the translation for each input text provided for ( Translation translation : response . getTranslationsList ()) { System . out . printf ( "Translated text: %s\n" , translation . getTranslatedText ()); } } } } Node.js Before trying this sample, follow the Node.js setup instructions in the Cloud Translation quickstart using client libraries .
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred"; "x-goog-user-project" = " PROJECT ID " } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://translation.googleapis.com/v3/projects/ PROJECT ID /locations/ LOCATION :translateText" Select-Object -Expand Content You should receive a JSON response similar to the following: { "translation": { "translatedText": "Доктор Ватсон, пожалуйста, откажитесь от своего мусора. Вы поделились нежелательной электронной почтой со мной. Давайте поговорим о спаме и важности рейтинга в конфиденциальном режиме.", "model": "projects/ PROJECT NUMBER /locations/ LOCATION /models/1395675701985363739" } } Go Before trying this sample, follow the Go setup instructions in the Cloud Translation quickstart using client libraries .

### Translate text with Cloud Translation \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/translate/docs/basic/translate-text-basic](https://docs.cloud.google.com/translate/docs/basic/translate-text-basic)
- Source ID: `site-docs-root`
- Final score: 231
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Translation LLM with Cloud Translation - Basic API To use the standard Translation LLM model in Cloud Translation - Basic API, pass its full resource name in the model parameter. curl -X POST \ -H "Content-Type: application/json; charset=utf-8" \ -d '{ "q": ["The old lighthouse stood on the edge of the cliff."], "target": "es", "model": "projects/PROJECT ID/locations/REGION NAME/models/general/translation-llm" }' \ "https://translation.googleapis.com/language/translate/v2?key=YOUR API KEY" The Cloud Translation - Basic API supports only standard NMT and standard LLM models, not customized models.
- After completing all of your requests, call // the "close" method on the client to safely clean up any remaining background resources. try ( TranslationServiceClient client = TranslationServiceClient . create ()) { // Supported Locations: global, [glossary location], or [model location] // Glossaries must be hosted in us-central1 // Custom Models must use the same location as your model. (us-central1) String location = "us-central1" ; LocationName parent = LocationName . of ( projectId , location ); String modelPath = String . format ( "projects/%s/locations/%s/models/%s" , projectId , location , modelId ); // Supported Mime Types: https://cloud.google.com/translate/docs/supported-formats TranslateTextRequest request = TranslateTextRequest . newBuilder () . setParent ( parent . toString ()) . setMimeType ( "text/plain" ) . setSourceLanguageCode ( sourceLanguage ) . setTargetLanguageCode ( targetLanguage ) . addContents ( text ) . setModel ( modelPath ) . build (); TranslateTextResponse response = client . translateText ( request ); // Display the translation for each input text provided for ( Translation translation : response . getTranslationsList ()) { System . out . printf ( "Translated text: %s\n" , translation . getTranslatedText ()); } } } } Node.js Before trying this sample, follow the Node.js setup instructions in the Cloud Translation quickstart using client libraries .
- After completing all of your requests, call // the "close" method on the client to safely clean up any remaining background resources. try ( TranslationServiceClient client = TranslationServiceClient . create ()) { // Supported Locations: global, [glossary location], or [model location] // Glossaries must be hosted in us-central1 // Custom Models must use the same location as your model. (us-central1) LocationName parent = LocationName . of ( projectId , "global" ); // Supported Mime Types: https://cloud.google.com/translate/docs/supported-formats TranslateTextRequest request = TranslateTextRequest . newBuilder () . setParent ( parent . toString ()) . setMimeType ( "text/plain" ) . setTargetLanguageCode ( targetLanguage ) . addContents ( text ) . build (); TranslateTextResponse response = client . translateText ( request ); // Display the translation for each input text provided for ( Translation translation : response . getTranslationsList ()) { System . out . printf ( "Translated text: %s\n" , translation . getTranslatedText ()); } } } } Node.js Before trying this sample, follow the Node.js setup instructions in the Cloud Translation quickstart using client libraries .
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred"; "x-goog-user-project" = " PROJECT ID " } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://translation.googleapis.com/v3/projects/ PROJECT ID /locations/ LOCATION :translateText" Select-Object -Expand Content You should receive a JSON response similar to the following: { "translation": { "translatedText": "Доктор Ватсон, пожалуйста, откажитесь от своего мусора. Вы поделились нежелательной электронной почтой со мной. Давайте поговорим о спаме и важности рейтинга в конфиденциальном режиме.", "model": "projects/ PROJECT NUMBER /locations/ LOCATION /models/1395675701985363739" } } Go Before trying this sample, follow the Go setup instructions in the Cloud Translation quickstart using client libraries .

### Translate text with Cloud Translation \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/translate/docs/advanced/translating-text-v3](https://docs.cloud.google.com/translate/docs/advanced/translating-text-v3)
- Source ID: `site-docs-root`
- Final score: 221
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Translation LLM with Cloud Translation - Basic API To use the standard Translation LLM model in Cloud Translation - Basic API, pass its full resource name in the model parameter. curl -X POST \ -H "Content-Type: application/json; charset=utf-8" \ -d '{ "q": ["The old lighthouse stood on the edge of the cliff."], "target": "es", "model": "projects/PROJECT ID/locations/REGION NAME/models/general/translation-llm" }' \ "https://translation.googleapis.com/language/translate/v2?key=YOUR API KEY" The Cloud Translation - Basic API supports only standard NMT and standard LLM models, not customized models.
- After completing all of your requests, call // the "close" method on the client to safely clean up any remaining background resources. try ( TranslationServiceClient client = TranslationServiceClient . create ()) { // Supported Locations: global, [glossary location], or [model location] // Glossaries must be hosted in us-central1 // Custom Models must use the same location as your model. (us-central1) String location = "us-central1" ; LocationName parent = LocationName . of ( projectId , location ); String modelPath = String . format ( "projects/%s/locations/%s/models/%s" , projectId , location , modelId ); // Supported Mime Types: https://cloud.google.com/translate/docs/supported-formats TranslateTextRequest request = TranslateTextRequest . newBuilder () . setParent ( parent . toString ()) . setMimeType ( "text/plain" ) . setSourceLanguageCode ( sourceLanguage ) . setTargetLanguageCode ( targetLanguage ) . addContents ( text ) . setModel ( modelPath ) . build (); TranslateTextResponse response = client . translateText ( request ); // Display the translation for each input text provided for ( Translation translation : response . getTranslationsList ()) { System . out . printf ( "Translated text: %s\n" , translation . getTranslatedText ()); } } } } Node.js Before trying this sample, follow the Node.js setup instructions in the Cloud Translation quickstart using client libraries .
- After completing all of your requests, call // the "close" method on the client to safely clean up any remaining background resources. try ( TranslationServiceClient client = TranslationServiceClient . create ()) { // Supported Locations: global, [glossary location], or [model location] // Glossaries must be hosted in us-central1 // Custom Models must use the same location as your model. (us-central1) LocationName parent = LocationName . of ( projectId , "global" ); // Supported Mime Types: https://cloud.google.com/translate/docs/supported-formats TranslateTextRequest request = TranslateTextRequest . newBuilder () . setParent ( parent . toString ()) . setMimeType ( "text/plain" ) . setTargetLanguageCode ( targetLanguage ) . addContents ( text ) . build (); TranslateTextResponse response = client . translateText ( request ); // Display the translation for each input text provided for ( Translation translation : response . getTranslationsList ()) { System . out . printf ( "Translated text: %s\n" , translation . getTranslatedText ()); } } } } Node.js Before trying this sample, follow the Node.js setup instructions in the Cloud Translation quickstart using client libraries .
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred"; "x-goog-user-project" = " PROJECT ID " } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://translation.googleapis.com/v3/projects/ PROJECT ID /locations/ LOCATION :translateText" Select-Object -Expand Content You should receive a JSON response similar to the following: { "translation": { "translatedText": "Доктор Ватсон, пожалуйста, откажитесь от своего мусора. Вы поделились нежелательной электронной почтой со мной. Давайте поговорим о спаме и важности рейтинга в конфиденциальном режиме.", "model": "projects/ PROJECT NUMBER /locations/ LOCATION /models/1395675701985363739" } } Go Before trying this sample, follow the Go setup instructions in the Cloud Translation quickstart using client libraries .

