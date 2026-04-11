---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:22:34.598Z"
product_name: "Cloud Translation"
product_slug: "cloud-translation"
feature_name: "Glossary entry management"
feature_slug: "glossary-entry-management"
latest_feature_date: "2022-08-17"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/translate/docs/advanced/glossary"
  - "https://docs.cloud.google.com/translate/docs/advanced/batch-translation"
  - "https://docs.cloud.google.com/translate/docs/intro-to-v3"
keywords:
  - "glossary"
  - "entry"
  - "management"
  - "translation"
  - "advanced"
  - "v3"
  - "glossaries"
  - "managing"
---

# Glossary entry management

Product: Cloud Translation
Coverage: LOW

## Step 02 Summary

Cloud Translation - Advanced (v3) glossaries support managing individual glossary entries.

## Extended Definition

Cloud Translation - Advanced (v3) glossaries support managing individual glossary entries.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/translate/docs/advanced/glossary](https://docs.cloud.google.com/translate/docs/advanced/glossary)
- [https://docs.cloud.google.com/translate/docs/advanced/batch-translation](https://docs.cloud.google.com/translate/docs/advanced/batch-translation)
- [https://docs.cloud.google.com/translate/docs/intro-to-v3](https://docs.cloud.google.com/translate/docs/intro-to-v3)

## Supporting Pages

### "Creating and using glossaries (Advanced) \_|\_ Cloud Translation \_|\_ Google\

- URL: [https://docs.cloud.google.com/translate/docs/advanced/glossary](https://docs.cloud.google.com/translate/docs/advanced/glossary)
- Source ID: `site-iam-reference`
- Final score: 184
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred"; "x-goog-user-project" = " PROJECT NUMBER OR ID " } Invoke-WebRequest -Method PATCH -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://translation.googleapis.com/v3/projects/ PROJECT NUMBER OR ID /locations/ LOCATION /glossaries/ GLOSSARY ID ?update mask=input config&update mask=display name" Select-Object -Expand Content You should receive a JSON response similar to the following: { "name": "projects/ PROJECT NUMBER /locations/ LOCATION /operations/ OPERATION ID ", "metadata": { "@type": "type.googleapis.com/google.cloud.translation.v3.UpdateGlossaryMetadata", "glossary": { "name": "projects/ PROJECT NUMBER /locations/ LOCATION /glossaries/ GLOSSARY ID ", "languageCodesSet": { "languageCodes": [" LANGUAGE CODE ", ...] }, "inputConfig": { "gcsSource": { "inputUri": "gs:// GLOSSARY FILE PATH " } }, "entryCount": NUMBER OF ENTRIES , "submitTime": "2022-04-22T23:16:30.628806944Z", "endTime": "2022-04-22T23:41:15.115797Z", "displayName": " GLOSSARY ID " }, "state": "RUNNING", "submitTime": "2022-04-22T23:50:24.337964527Z" } } Additional languages C# : Please follow the C# setup instructions on the client libraries page and then visit the Cloud Translation reference documentation for .NET.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred"; "x-goog-user-project" = " PROJECT NUMBER OR ID " } Invoke-WebRequest -Method PATCH -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://translation.googleapis.com/v3/projects/ PROJECT NUMBER OR ID /locations/ LOCATION /glossaries/ GLOSSARY ID /glossaryEntries/ GLOSSARY ENTRY ID " Select-Object -Expand Content You should receive a JSON response similar to the following: { "name": "projects/ PROJECT NUMBER /locations/ LOCATION /glossaries/ GLOSSARY ID /glossaryEntries/ GLOSSARY ENTRY ID ", "termsSet": { "terms": [ { "languageCode": " LANGUAGE CODE ", "text": " TERM " }, ... ] }, "description": " DESCRIPTION " } Additional languages C# : Please follow the C# setup instructions on the client libraries page and then visit the Cloud Translation reference documentation for .NET.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred"; "x-goog-user-project" = " PROJECT NUMBER OR ID " } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://translation.googleapis.com/v3/projects/ PROJECT NUMBER OR ID /locations/ LOCATION /glossaries/ GLOSSARY ID /glossaryEntries" Select-Object -Expand Content You should receive a JSON response similar to the following: { "name": "projects/ PROJECT NUMBER /locations/ LOCATION /glossaries/ GLOSSARY ID /glossaryEntries/ GLOSSARY ENTRY ID ", "termsSet": { "terms": [ { "languageCode": " LANGUAGE CODE ", "text": " TERM " }, ... ] }, "description": " DESCRIPTION " } Additional languages C# : Please follow the C# setup instructions on the client libraries page and then visit the Cloud Translation reference documentation for .NET.
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred"; "x-goog-user-project" = " PROJECT NUMBER OR ID " } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://translation.googleapis.com/v3/projects/ PROJECT NUMBER OR ID /locations/ LOCATION /glossaries/ GLOSSARY ID /glossaryEntries" Select-Object -Expand Content You should receive a JSON response similar to the following: { "glossaryEntries": [ { "name": "projects/ PROJECT NUMBER /locations/ LOCATION /glossaries/ GLOSSARY ID /glossaryEntries/ GLOSSARY ENTRY ID ", "termsSet": { "terms": [ { "languageCode": " LANGUAGE CODE ", "text": " TERM " }, ... ] }, "description": " DESCRIPTION " }, ... ] } Additional languages C# : Please follow the C# setup instructions on the client libraries page and then visit the Cloud Translation reference documentation for .NET.

### Batch requests (Advanced) \_|\_ Cloud Translation \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/translate/docs/advanced/batch-translation](https://docs.cloud.google.com/translate/docs/advanced/batch-translation)
- Source ID: `site-iam-reference`
- Final score: 144
- Re-rank relevance: N/A

Evidence snippets:
- Before using any of the request data, make the following replacements: PROJECT NUMBER OR ID : the numeric or alphanumeric ID of your Google Cloud project HTTP method and URL: POST https://translation.googleapis.com/v3/projects/ PROJECT NUMBER OR ID /locations/us-central1:batchTranslateText Request JSON body: { "models": { "es": "projects/ project number or id /locations/us-central1/models/ model-id " }, "sourceLanguageCode": "en", "targetLanguageCodes": ["es"], "glossaries": { "es": { "glossary": "projects/ project number or id /locations/us-central1/glossaries/ glossary-id " } }, "inputConfigs": [{ "gcsSource": { "inputUri": "gs:// bucket-name-source / input-file-name " } }, { "gcsSource": { "inputUri": "gs:// bucket-name-source / input-file-name2 " } } ], "outputConfig": { "gcsDestination": { "outputUriPrefix": "gs:// bucket-name-destination /" } } } To send your request, choose one of these options: curl Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Before using any of the request data, make the following replacements: PROJECT NUMBER OR ID : the numeric or alphanumeric ID of your Google Cloud project glossary-id : your glossary ID, for example, "my-en-to-es-glossary" HTTP method and URL: POST https://translation.googleapis.com/v3/projects/ PROJECT NUMBER OR ID /locations/us-central1:batchTranslateText Request JSON body: { "sourceLanguageCode": "en", "targetLanguageCodes": ["es"], "glossaries": { "es": { "glossary": "projects/ PROJECT NUMBER OR ID /locations/us-central1/glossaries/ glossary-id " } }, "inputConfigs": [{ "gcsSource": { "inputUri": "gs:// bucket-name-source / input-file-name1 " } }, { "gcsSource": { "inputUri": "gs:// bucket-name-source / input-file-name2 " } } ], "outputConfig": { "gcsDestination": { "outputUriPrefix": "gs:// bucket-name-destination /" } } } To send your request, choose one of these options: curl Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- After completing all of your requests, call // the "close" method on the client to safely clean up any remaining background resources. try ( TranslationServiceClient client = TranslationServiceClient . create ()) { // Supported Locations: global, [glossary location], or [model location] // Glossaries must be hosted in us-central1 // Custom Models must use the same location as your model. (us-central1) String location = "us-central1" ; LocationName parent = LocationName . of ( projectId , location ); // Configure the source of the file from a GCS bucket GcsSource gcsSource = GcsSource . newBuilder (). setInputUri ( inputUri ). build (); // Supported Mime Types: https://cloud.google.com/translate/docs/supported-formats InputConfig inputConfig = InputConfig . newBuilder (). setGcsSource ( gcsSource ). setMimeType ( "text/plain" ). build (); // Configure where to store the output in a GCS bucket GcsDestination gcsDestination = GcsDestination . newBuilder (). setOutputUriPrefix ( outputUri ). build (); OutputConfig outputConfig = OutputConfig . newBuilder (). setGcsDestination ( gcsDestination ). build (); // Configure the glossary used in the request GlossaryName glossaryName = GlossaryName . of ( projectId , location , glossaryId ); TranslateTextGlossaryConfig glossaryConfig = TranslateTextGlossaryConfig . newBuilder (). setGlossary ( glossaryName . toString ()). build (); // Configure the model used in the request String modelPath = String . format ( "projects/%s/locations/%s/models/%s" , projectId , location , modelId ); // Build the request that will be sent to the API BatchTranslateTextRequest request = BatchTranslateTextRequest . newBuilder () . setParent ( parent . toString ()) . setSourceLanguageCode ( sourceLanguage ) . addTargetLanguageCodes ( targetLanguage ) . addInputConfigs ( inputConfig ) . setOutputConfig ( outputConfig ) . putGlossaries ( targetLanguage , glossaryConfig ) . putModels ( targetLanguage , modelPath ) . build (); // Start an asynchronous request OperationFuture<BatchTranslateResponse , BatchTranslateMetadata > future = client . batchTranslateTextAsync ( request ); System . out . println ( "Waiting for operation to complete..." ); // random number between 300 - 450 (maximum allowed seconds) long randomNumber = ThreadLocalRandom . current (). nextInt ( 450 , 600 ); BatchTranslateResponse response = future . get ( randomNumber , TimeUnit .
- After completing all of your requests, call // the "close" method on the client to safely clean up any remaining background resources. try ( TranslationServiceClient client = TranslationServiceClient . create ()) { // Supported Locations: global, [glossary location], or [model location] // Glossaries must be hosted in us-central1 // Custom Models must use the same location as your model. (us-central1) String location = "us-central1" ; LocationName parent = LocationName . of ( projectId , location ); // Configure the source of the file from a GCS bucket GcsSource gcsSource = GcsSource . newBuilder (). setInputUri ( inputUri ). build (); // Supported Mime Types: https://cloud.google.com/translate/docs/supported-formats InputConfig inputConfig = InputConfig . newBuilder (). setGcsSource ( gcsSource ). setMimeType ( "text/plain" ). build (); // Configure where to store the output in a GCS bucket GcsDestination gcsDestination = GcsDestination . newBuilder (). setOutputUriPrefix ( outputUri ). build (); OutputConfig outputConfig = OutputConfig . newBuilder (). setGcsDestination ( gcsDestination ). build (); // Configure the glossary used in the request GlossaryName glossaryName = GlossaryName . of ( projectId , location , glossaryId ); TranslateTextGlossaryConfig glossaryConfig = TranslateTextGlossaryConfig . newBuilder (). setGlossary ( glossaryName . toString ()). build (); // Build the request that will be sent to the API BatchTranslateTextRequest request = BatchTranslateTextRequest . newBuilder () . setParent ( parent . toString ()) . setSourceLanguageCode ( sourceLanguage ) . addTargetLanguageCodes ( targetLanguage ) . addInputConfigs ( inputConfig ) . setOutputConfig ( outputConfig ) . putGlossaries ( targetLanguage , glossaryConfig ) . build (); // Start an asynchronous request OperationFuture<BatchTranslateResponse , BatchTranslateMetadata > future = client . batchTranslateTextAsync ( request ); System . out . println ( "Waiting for operation to complete..." ); // random number between 300 - 450 (maximum allowed seconds) long randomNumber = ThreadLocalRandom . current (). nextInt ( 450 , 600 ); BatchTranslateResponse response = future . get ( randomNumber , TimeUnit .

### Overview of the Cloud Translation API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/translate/docs/intro-to-v3](https://docs.cloud.google.com/translate/docs/intro-to-v3)
- Source ID: `site-iam-reference`
- Final score: 128
- Re-rank relevance: N/A

Evidence snippets:
- Glossaries A glossary is a custom dictionary that Cloud Translation - Advanced API uses to correctly and consistently translate domain-specific terms, named entities, and other kinds of terms that are specific to you.
- Feature Basic Advanced Translate with the NMT model Translate with the Translation LLM Translate with Adaptive Translation models Translate with custom models Translate multiple strings in a single request Batch translations with Cloud Storage Translate documents Glossary support (control terminology) Train custom models Language Detection Integrated REST API Integrated gRPC API Service Account API Key Audit logging Supports HTML Supports 100+ Languages Romanization support Transliteration support Adaptive Translation Multi-regional endpoint support VPC Service Controls support Refer to Cloud Translation - Advanced API features for more details on Cloud Translation - Advanced API.
- For example, you can use a glossary to specify a specific translation for terms such as "Google Summer of Code," "Gmail confidential mode," or "placement performance report." You can also use glossaries to prevent certain words, such as borrowed words or product names, from being translated.
- It also offers features such as glossaries, batch translation, document translation, and more: Glossaries : A glossary is a custom dictionary that you create to translate domain-specific terms correctly and consistently.

