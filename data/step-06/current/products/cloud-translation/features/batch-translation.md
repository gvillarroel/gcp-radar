---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:22:34.609Z"
product_name: "Cloud Translation"
product_slug: "cloud-translation"
feature_name: "Batch translation"
feature_slug: "batch-translation"
latest_feature_date: "2019-04-10"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/translate/docs/advanced/batch-translation"
  - "https://docs.cloud.google.com/translate/docs/intro-to-v3"
  - "https://docs.cloud.google.com/translate/docs/reference/rest"
keywords:
  - "batch"
  - "translation"
  - "api"
  - "v3beta1"
  - "supports"
  - "asynchronous"
  - "of"
  - "txt"
---

# Batch translation

Product: Cloud Translation
Coverage: LOW

## Step 02 Summary

Cloud Translation API v3beta1 supports asynchronous batch translation of .txt, .tsv, and .html files stored in Cloud Storage.

## Extended Definition

Cloud Translation API v3beta1 supports asynchronous batch translation of .txt, .tsv, and .html files stored in Cloud Storage.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/translate/docs/advanced/batch-translation](https://docs.cloud.google.com/translate/docs/advanced/batch-translation)
- [https://docs.cloud.google.com/translate/docs/intro-to-v3](https://docs.cloud.google.com/translate/docs/intro-to-v3)
- [https://docs.cloud.google.com/translate/docs/reference/rest](https://docs.cloud.google.com/translate/docs/reference/rest)

## Supporting Pages

### Batch requests (Advanced) \_|\_ Cloud Translation \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/translate/docs/advanced/batch-translation](https://docs.cloud.google.com/translate/docs/advanced/batch-translation)
- Source ID: `site-iam-reference`
- Final score: 198
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- After completing all of your requests, call // the "close" method on the client to safely clean up any remaining background resources. try ( TranslationServiceClient client = TranslationServiceClient . create ()) { // Supported Locations: global, [glossary location], or [model location] // Glossaries must be hosted in us-central1 // Custom Models must use the same location as your model. (us-central1) String location = "us-central1" ; LocationName parent = LocationName . of ( projectId , location ); // Configure the source of the file from a GCS bucket GcsSource gcsSource = GcsSource . newBuilder (). setInputUri ( inputUri ). build (); // Supported Mime Types: https://cloud.google.com/translate/docs/supported-formats InputConfig inputConfig = InputConfig . newBuilder (). setGcsSource ( gcsSource ). setMimeType ( "text/plain" ). build (); // Configure where to store the output in a GCS bucket GcsDestination gcsDestination = GcsDestination . newBuilder (). setOutputUriPrefix ( outputUri ). build (); OutputConfig outputConfig = OutputConfig . newBuilder (). setGcsDestination ( gcsDestination ). build (); // Configure the glossary used in the request GlossaryName glossaryName = GlossaryName . of ( projectId , location , glossaryId ); TranslateTextGlossaryConfig glossaryConfig = TranslateTextGlossaryConfig . newBuilder (). setGlossary ( glossaryName . toString ()). build (); // Configure the model used in the request String modelPath = String . format ( "projects/%s/locations/%s/models/%s" , projectId , location , modelId ); // Build the request that will be sent to the API BatchTranslateTextRequest request = BatchTranslateTextRequest . newBuilder () . setParent ( parent . toString ()) . setSourceLanguageCode ( sourceLanguage ) . addTargetLanguageCodes ( targetLanguage ) . addInputConfigs ( inputConfig ) . setOutputConfig ( outputConfig ) . putGlossaries ( targetLanguage , glossaryConfig ) . putModels ( targetLanguage , modelPath ) . build (); // Start an asynchronous request OperationFuture<BatchTranslateResponse , BatchTranslateMetadata > future = client . batchTranslateTextAsync ( request ); System . out . println ( "Waiting for operation to complete..." ); // random number between 300 - 450 (maximum allowed seconds) long randomNumber = ThreadLocalRandom . current (). nextInt ( 450 , 600 ); BatchTranslateResponse response = future . get ( randomNumber , TimeUnit .
- After completing all of your requests, call // the "close" method on the client to safely clean up any remaining background resources. try ( TranslationServiceClient client = TranslationServiceClient . create ()) { // Supported Locations: global, [glossary location], or [model location] // Glossaries must be hosted in us-central1 // Custom Models must use the same location as your model. (us-central1) String location = "us-central1" ; LocationName parent = LocationName . of ( projectId , location ); // Configure the source of the file from a GCS bucket GcsSource gcsSource = GcsSource . newBuilder (). setInputUri ( inputUri ). build (); // Supported Mime Types: https://cloud.google.com/translate/docs/supported-formats InputConfig inputConfig = InputConfig . newBuilder (). setGcsSource ( gcsSource ). setMimeType ( "text/plain" ). build (); // Configure where to store the output in a GCS bucket GcsDestination gcsDestination = GcsDestination . newBuilder (). setOutputUriPrefix ( outputUri ). build (); OutputConfig outputConfig = OutputConfig . newBuilder (). setGcsDestination ( gcsDestination ). build (); // Configure the glossary used in the request GlossaryName glossaryName = GlossaryName . of ( projectId , location , glossaryId ); TranslateTextGlossaryConfig glossaryConfig = TranslateTextGlossaryConfig . newBuilder (). setGlossary ( glossaryName . toString ()). build (); // Build the request that will be sent to the API BatchTranslateTextRequest request = BatchTranslateTextRequest . newBuilder () . setParent ( parent . toString ()) . setSourceLanguageCode ( sourceLanguage ) . addTargetLanguageCodes ( targetLanguage ) . addInputConfigs ( inputConfig ) . setOutputConfig ( outputConfig ) . putGlossaries ( targetLanguage , glossaryConfig ) . build (); // Start an asynchronous request OperationFuture<BatchTranslateResponse , BatchTranslateMetadata > future = client . batchTranslateTextAsync ( request ); System . out . println ( "Waiting for operation to complete..." ); // random number between 300 - 450 (maximum allowed seconds) long randomNumber = ThreadLocalRandom . current (). nextInt ( 450 , 600 ); BatchTranslateResponse response = future . get ( randomNumber , TimeUnit .
- After completing all of your requests, call // the "close" method on the client to safely clean up any remaining background resources. try ( TranslationServiceClient client = TranslationServiceClient . create ()) { // Supported Locations: global, [glossary location], or [model location] // Glossaries must be hosted in us-central1 // Custom Models must use the same location as your model. (us-central1) String location = "us-central1" ; LocationName parent = LocationName . of ( projectId , location ); // Configure the source of the file from a GCS bucket GcsSource gcsSource = GcsSource . newBuilder (). setInputUri ( inputUri ). build (); // Supported Mime Types: https://cloud.google.com/translate/docs/supported-formats InputConfig inputConfig = InputConfig . newBuilder (). setGcsSource ( gcsSource ). setMimeType ( "text/plain" ). build (); // Configure where to store the output in a GCS bucket GcsDestination gcsDestination = GcsDestination . newBuilder (). setOutputUriPrefix ( outputUri ). build (); OutputConfig outputConfig = OutputConfig . newBuilder (). setGcsDestination ( gcsDestination ). build (); // Configure the model used in the request String modelPath = String . format ( "projects/%s/locations/%s/models/%s" , projectId , location , modelId ); // Build the request that will be sent to the API BatchTranslateTextRequest request = BatchTranslateTextRequest . newBuilder () . setParent ( parent . toString ()) . setSourceLanguageCode ( sourceLanguage ) . addTargetLanguageCodes ( targetLanguage ) . addInputConfigs ( inputConfig ) . setOutputConfig ( outputConfig ) . putModels ( targetLanguage , modelPath ) . build (); // Start an asynchronous request OperationFuture<BatchTranslateResponse , BatchTranslateMetadata > future = client . batchTranslateTextAsync ( request ); System . out . println ( "Waiting for operation to complete..." ); // random number between 300 - 450 (maximum allowed seconds) long randomNumber = ThreadLocalRandom . current (). nextInt ( 450 , 600 ); BatchTranslateResponse response = future . get ( randomNumber , TimeUnit .
- The advanced version of the Cloud Translation API supports batch translation of large amounts of text in a command offline.

### Overview of the Cloud Translation API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/translate/docs/intro-to-v3](https://docs.cloud.google.com/translate/docs/intro-to-v3)
- Source ID: `site-iam-reference`
- Final score: 174
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Feature Basic Advanced Translate with the NMT model Translate with the Translation LLM Translate with Adaptive Translation models Translate with custom models Translate multiple strings in a single request Batch translations with Cloud Storage Translate documents Glossary support (control terminology) Train custom models Language Detection Integrated REST API Integrated gRPC API Service Account API Key Audit logging Supports HTML Supports 100+ Languages Romanization support Transliteration support Adaptive Translation Multi-regional endpoint support VPC Service Controls support Refer to Cloud Translation - Advanced API features for more details on Cloud Translation - Advanced API.
- Labels Cloud Translation - Advanced API supports adding user-defined labels (key-value pairs) to TranslateText , BatchTranslateText and DetectLanguage requests.
- It also offers features such as glossaries, batch translation, document translation, and more: Glossaries : A glossary is a custom dictionary that you create to translate domain-specific terms correctly and consistently.
- Glossaries A glossary is a custom dictionary that Cloud Translation - Advanced API uses to correctly and consistently translate domain-specific terms, named entities, and other kinds of terms that are specific to you.

### Cloud Translation API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/translate/docs/reference/rest](https://docs.cloud.google.com/translate/docs/reference/rest)
- Source ID: `site-api-reference`
- Final score: 154
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- REST Resource: v3beta1.projects.locations Methods batchTranslateDocument POST /v3beta1/{parent=projects/ /locations/ }:batchTranslateDocument Translates a large volume of document in asynchronous batch mode. batchTranslateText POST /v3beta1/{parent=projects/ /locations/ }:batchTranslateText Translates a large volume of text in asynchronous batch mode. detectLanguage POST /v3beta1/{parent=projects/ /locations/ }:detectLanguage Detects the language of text within a request. get GET /v3beta1/{name=projects/ /locations/ } Gets information about a location. getSupportedLanguages GET /v3beta1/{parent=projects/ /locations/ }/supportedLanguages Returns a list of supported languages for translation. list GET /v3beta1/{name=projects/ }/locations Lists information about the supported locations for this service. translateDocument POST /v3beta1/{parent=projects/ /locations/ }:translateDocument Translates documents in synchronous mode. translateText POST /v3beta1/{parent=projects/ /locations/ }:translateText Translates input text and returns translated text.
- REST Resource: v3.projects.locations Methods adaptiveMtTranslate POST /v3/{parent=projects/ /locations/ }:adaptiveMtTranslate Translate text using Adaptive MT. batchTranslateDocument POST /v3/{parent=projects/ /locations/ }:batchTranslateDocument Translates a large volume of document in asynchronous batch mode. batchTranslateText POST /v3/{parent=projects/ /locations/ }:batchTranslateText Translates a large volume of text in asynchronous batch mode. detectLanguage POST /v3/{parent=projects/ /locations/ }:detectLanguage Detects the language of text within a request. get GET /v3/{name=projects/ /locations/ } Gets information about a location. getSupportedLanguages GET /v3/{parent=projects/ /locations/ }/supportedLanguages Returns a list of supported languages for translation. list GET /v3/{name=projects/ }/locations Lists information about the supported locations for this service. romanizeText POST /v3/{parent=projects/ /locations/ }:romanizeText Romanize input text written in non-Latin scripts to Latin text. translateDocument POST /v3/{parent=projects/ /locations/ }:translateDocument Translates documents in synchronous mode. translateText POST /v3/{parent=projects/ /locations/ }:translateText Translates input text and returns translated text.
- This service has the following service endpoint and all URIs below are relative to this service endpoint: https://translate.googleapis.com REST Resource: v3beta1.projects Methods detectLanguage POST /v3beta1/{parent=projects/ }:detectLanguage Detects the language of text within a request. getSupportedLanguages GET /v3beta1/{parent=projects/ }/supportedLanguages Returns a list of supported languages for translation. translateText POST /v3beta1/{parent=projects/ }:translateText Translates input text and returns translated text.
- REST Resource: v3beta1.projects.locations.operations Methods cancel POST /v3beta1/{name=projects/ /locations/ /operations/ }:cancel Starts asynchronous cancellation on a long-running operation. delete DELETE /v3beta1/{name=projects/ /locations/ /operations/ } Deletes a long-running operation. get GET /v3beta1/{name=projects/ /locations/ /operations/ } Gets the latest state of a long-running operation. list GET /v3beta1/{name=projects/ /locations/ }/operations Lists operations that match the specified filter in the request. wait POST /v3beta1/{name=projects/ /locations/ /operations/ }:wait Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state.

