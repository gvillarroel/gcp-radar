---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:49.607Z"
product_name: "Cloud Translation"
product_slug: "cloud-translation"
feature_name: "Multi-regional EU endpoint"
feature_slug: "multi-regional-eu-endpoint"
latest_feature_date: "2022-01-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/translate/docs/advanced/endpoints"
  - "https://docs.cloud.google.com/translate/docs/intro-to-v3"
  - "https://docs.cloud.google.com/translate/docs/advanced/translating-text-v3"
  - "https://docs.cloud.google.com/translate/docs/advanced/batch-translation"
keywords:
  - "multi"
  - "regional"
  - "eu"
  - "endpoint"
  - "translation"
  - "advanced"
  - "v3"
  - "provides"
---

# Multi-regional EU endpoint

Product: Cloud Translation
Coverage: MEDIUM

## Step 02 Summary

Cloud Translation - Advanced (v3) provides a multi-regional EU endpoint.

## Extended Definition

Cloud Translation - Advanced (v3) provides a multi-regional EU endpoint.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/translate/docs/advanced/endpoints](https://docs.cloud.google.com/translate/docs/advanced/endpoints)
- [https://docs.cloud.google.com/translate/docs/intro-to-v3](https://docs.cloud.google.com/translate/docs/intro-to-v3)
- [https://docs.cloud.google.com/translate/docs/advanced/translating-text-v3](https://docs.cloud.google.com/translate/docs/advanced/translating-text-v3)
- [https://docs.cloud.google.com/translate/docs/advanced/batch-translation](https://docs.cloud.google.com/translate/docs/advanced/batch-translation)

## Supporting Pages

### "Global and multi-regional endpoints \_|\_ Cloud Translation \_|\_ Google\

- URL: [https://docs.cloud.google.com/translate/docs/advanced/endpoints](https://docs.cloud.google.com/translate/docs/advanced/endpoints)
- Source ID: `site-iam-reference`
- Final score: 270
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Global and multi-regional endpoints Cloud Translation - Advanced offers a global endpoint as well as EU and US multi-regional endpoints: translate.googleapis.com (global) translate-eu.googleapis.com translate-us.googleapis.com If you use a multi-regional endpoint, your data at-rest and machine learning processing stays within the continental boundaries of the EU or US.
- Global versus multi-regional endpoints When using a multi-regional endpoint, there are some difference when compared to using the global endpoint: Text translations that use custom AutoML models are not supported.
- Specify an endpoint The following example shows a text translation that uses a multi-regional endpoint.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred"; "x-goog-user-project" = " PROJECT NUMBER OR ID " } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json ` -Uri "https:// ENDPOINT /v3/projects/ PROJECT NUMBER OR ID /locations/ LOCATION :translateText" Select-Object -Expand Content You should receive a JSON response similar to the following: { "translations": [ { "translatedText": "Komm her!", "model": "projects/ PROJECT NUMBER OR ID /locations/ LOCATION /models/general/base" } ] } Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### Overview of the Cloud Translation API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/translate/docs/intro-to-v3](https://docs.cloud.google.com/translate/docs/intro-to-v3)
- Source ID: `site-iam-reference`
- Final score: 174
- Re-rank relevance: N/A

Evidence snippets:
- Feature Basic Advanced Translate with the NMT model Translate with the Translation LLM Translate with Adaptive Translation models Translate with custom models Translate multiple strings in a single request Batch translations with Cloud Storage Translate documents Glossary support (control terminology) Train custom models Language Detection Integrated REST API Integrated gRPC API Service Account API Key Audit logging Supports HTML Supports 100+ Languages Romanization support Transliteration support Adaptive Translation Multi-regional endpoint support VPC Service Controls support Refer to Cloud Translation - Advanced API features for more details on Cloud Translation - Advanced API.
- Regional endpoint By default, Cloud Translation - Advanced API stores and processes resources in a global location, which means there is no guarantee that resources remain within a particular location.
- Cloud Translation - Advanced API The Advanced edition is accessed through v3 client libraries and requires service account authentication that's integrated with IAM roles.
- Instead of using the default global endpoint, you can use a regional endpoint to keep resources within a particular location, such as the European Union.

### Translate text with Cloud Translation \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/translate/docs/advanced/translating-text-v3](https://docs.cloud.google.com/translate/docs/advanced/translating-text-v3)
- Source ID: `site-docs-root`
- Final score: 170
- Re-rank relevance: N/A

Evidence snippets:
- Cloud Translation - Advanced also provides advanced text translation capabilities like translating documents and creating glossaries to ensure that your domain-specific terminology is translated correctly.
- Find available languages and codes here: https://cloud.google.com/translate/docs/languages#neural machine translation model """ Initialize Translation client. client = translate v3 .
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred"; "x-goog-user-project" = " PROJECT ID " } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://translation.googleapis.com/v3/projects/ PROJECT ID /locations/ LOCATION :translateText" Select-Object -Expand Content You should receive a JSON response similar to the following: { "translation": { "translatedText": "Доктор Ватсон, пожалуйста, откажитесь от своего мусора. Вы поделились нежелательной электронной почтой со мной. Давайте поговорим о спаме и важности рейтинга в конфиденциальном режиме.", "model": "projects/ PROJECT NUMBER /locations/ LOCATION /models/1395675701985363739" } } Go Before trying this sample, follow the Go setup instructions in the Cloud Translation quickstart using client libraries .
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred"; "x-goog-user-project" = " PROJECT NUMBER OR ID " } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://translation.googleapis.com/v3/projects/ PROJECT NUMBER OR ID :translateText" Select-Object -Expand Content You should receive a JSON response similar to the following: { "translations": [ { "translatedText": "Доктор Ватсон, иди сюда!", }, { "translatedText": "Принеси мне кофе!", } ] } The translations array contains two translatedText fields with translations provided in the requested targetLanguageCode language ( ru : Russian).

### Batch requests (Advanced) \_|\_ Cloud Translation \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/translate/docs/advanced/batch-translation](https://docs.cloud.google.com/translate/docs/advanced/batch-translation)
- Source ID: `site-iam-reference`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- After completing all of your requests, call // the "close" method on the client to safely clean up any remaining background resources. try ( TranslationServiceClient client = TranslationServiceClient . create ()) { // Supported Locations: global, [glossary location], or [model location] // Glossaries must be hosted in us-central1 // Custom Models must use the same location as your model. (us-central1) String location = "us-central1" ; LocationName parent = LocationName . of ( projectId , location ); // Configure the source of the file from a GCS bucket GcsSource gcsSource = GcsSource . newBuilder (). setInputUri ( inputUri ). build (); // Supported Mime Types: https://cloud.google.com/translate/docs/supported-formats InputConfig inputConfig = InputConfig . newBuilder (). setGcsSource ( gcsSource ). setMimeType ( "text/plain" ). build (); // Configure where to store the output in a GCS bucket GcsDestination gcsDestination = GcsDestination . newBuilder (). setOutputUriPrefix ( outputUri ). build (); OutputConfig outputConfig = OutputConfig . newBuilder (). setGcsDestination ( gcsDestination ). build (); // Configure the glossary used in the request GlossaryName glossaryName = GlossaryName . of ( projectId , location , glossaryId ); TranslateTextGlossaryConfig glossaryConfig = TranslateTextGlossaryConfig . newBuilder (). setGlossary ( glossaryName . toString ()). build (); // Configure the model used in the request String modelPath = String . format ( "projects/%s/locations/%s/models/%s" , projectId , location , modelId ); // Build the request that will be sent to the API BatchTranslateTextRequest request = BatchTranslateTextRequest . newBuilder () . setParent ( parent . toString ()) . setSourceLanguageCode ( sourceLanguage ) . addTargetLanguageCodes ( targetLanguage ) . addInputConfigs ( inputConfig ) . setOutputConfig ( outputConfig ) . putGlossaries ( targetLanguage , glossaryConfig ) . putModels ( targetLanguage , modelPath ) . build (); // Start an asynchronous request OperationFuture<BatchTranslateResponse , BatchTranslateMetadata > future = client . batchTranslateTextAsync ( request ); System . out . println ( "Waiting for operation to complete..." ); // random number between 300 - 450 (maximum allowed seconds) long randomNumber = ThreadLocalRandom . current (). nextInt ( 450 , 600 ); BatchTranslateResponse response = future . get ( randomNumber , TimeUnit .
- After completing all of your requests, call // the "close" method on the client to safely clean up any remaining background resources. try ( TranslationServiceClient client = TranslationServiceClient . create ()) { // Supported Locations: global, [glossary location], or [model location] // Glossaries must be hosted in us-central1 // Custom Models must use the same location as your model. (us-central1) String location = "us-central1" ; LocationName parent = LocationName . of ( projectId , location ); // Configure the source of the file from a GCS bucket GcsSource gcsSource = GcsSource . newBuilder (). setInputUri ( inputUri ). build (); // Supported Mime Types: https://cloud.google.com/translate/docs/supported-formats InputConfig inputConfig = InputConfig . newBuilder (). setGcsSource ( gcsSource ). setMimeType ( "text/plain" ). build (); // Configure where to store the output in a GCS bucket GcsDestination gcsDestination = GcsDestination . newBuilder (). setOutputUriPrefix ( outputUri ). build (); OutputConfig outputConfig = OutputConfig . newBuilder (). setGcsDestination ( gcsDestination ). build (); // Configure the glossary used in the request GlossaryName glossaryName = GlossaryName . of ( projectId , location , glossaryId ); TranslateTextGlossaryConfig glossaryConfig = TranslateTextGlossaryConfig . newBuilder (). setGlossary ( glossaryName . toString ()). build (); // Build the request that will be sent to the API BatchTranslateTextRequest request = BatchTranslateTextRequest . newBuilder () . setParent ( parent . toString ()) . setSourceLanguageCode ( sourceLanguage ) . addTargetLanguageCodes ( targetLanguage ) . addInputConfigs ( inputConfig ) . setOutputConfig ( outputConfig ) . putGlossaries ( targetLanguage , glossaryConfig ) . build (); // Start an asynchronous request OperationFuture<BatchTranslateResponse , BatchTranslateMetadata > future = client . batchTranslateTextAsync ( request ); System . out . println ( "Waiting for operation to complete..." ); // random number between 300 - 450 (maximum allowed seconds) long randomNumber = ThreadLocalRandom . current (). nextInt ( 450 , 600 ); BatchTranslateResponse response = future . get ( randomNumber , TimeUnit .
- After completing all of your requests, call // the "close" method on the client to safely clean up any remaining background resources. try ( TranslationServiceClient client = TranslationServiceClient . create ()) { // Supported Locations: global, [glossary location], or [model location] // Glossaries must be hosted in us-central1 // Custom Models must use the same location as your model. (us-central1) String location = "us-central1" ; LocationName parent = LocationName . of ( projectId , location ); // Configure the source of the file from a GCS bucket GcsSource gcsSource = GcsSource . newBuilder (). setInputUri ( inputUri ). build (); // Supported Mime Types: https://cloud.google.com/translate/docs/supported-formats InputConfig inputConfig = InputConfig . newBuilder (). setGcsSource ( gcsSource ). setMimeType ( "text/plain" ). build (); // Configure where to store the output in a GCS bucket GcsDestination gcsDestination = GcsDestination . newBuilder (). setOutputUriPrefix ( outputUri ). build (); OutputConfig outputConfig = OutputConfig . newBuilder (). setGcsDestination ( gcsDestination ). build (); // Configure the model used in the request String modelPath = String . format ( "projects/%s/locations/%s/models/%s" , projectId , location , modelId ); // Build the request that will be sent to the API BatchTranslateTextRequest request = BatchTranslateTextRequest . newBuilder () . setParent ( parent . toString ()) . setSourceLanguageCode ( sourceLanguage ) . addTargetLanguageCodes ( targetLanguage ) . addInputConfigs ( inputConfig ) . setOutputConfig ( outputConfig ) . putModels ( targetLanguage , modelPath ) . build (); // Start an asynchronous request OperationFuture<BatchTranslateResponse , BatchTranslateMetadata > future = client . batchTranslateTextAsync ( request ); System . out . println ( "Waiting for operation to complete..." ); // random number between 300 - 450 (maximum allowed seconds) long randomNumber = ThreadLocalRandom . current (). nextInt ( 450 , 600 ); BatchTranslateResponse response = future . get ( randomNumber , TimeUnit .
- After completing all of your requests, call // the "close" method on the client to safely clean up any remaining background resources. try ( TranslationServiceClient client = TranslationServiceClient . create ()) { // Supported Locations: us-central1 LocationName parent = LocationName . of ( projectId , "us-central1" ); GcsSource gcsSource = GcsSource . newBuilder (). setInputUri ( inputUri ). build (); // Supported Mime Types: https://cloud.google.com/translate/docs/supported-formats InputConfig inputConfig = InputConfig . newBuilder (). setGcsSource ( gcsSource ). setMimeType ( "text/plain" ). build (); GcsDestination gcsDestination = GcsDestination . newBuilder (). setOutputUriPrefix ( outputUri ). build (); OutputConfig outputConfig = OutputConfig . newBuilder (). setGcsDestination ( gcsDestination ). build (); BatchTranslateTextRequest request = BatchTranslateTextRequest . newBuilder () . setParent ( parent . toString ()) . setSourceLanguageCode ( sourceLanguage ) . addTargetLanguageCodes ( targetLanguage ) . addInputConfigs ( inputConfig ) . setOutputConfig ( outputConfig ) . build (); OperationFuture<BatchTranslateResponse , BatchTranslateMetadata > future = client . batchTranslateTextAsync ( request ); System . out . println ( "Waiting for operation to complete..." ); // random number between 300 - 450 (maximum allowed seconds) long randomNumber = ThreadLocalRandom . current (). nextInt ( 450 , 600 ); BatchTranslateResponse response = future . get ( randomNumber , TimeUnit .

