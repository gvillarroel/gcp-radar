---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:22:34.605Z"
product_name: "Cloud Translation"
product_slug: "cloud-translation"
feature_name: "Separate quotas for batch and AutoML translation"
feature_slug: "separate-quotas-for-batch-and-automl-translation"
latest_feature_date: "2019-11-05"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/translate/docs/advanced/batch-translation"
  - "https://docs.cloud.google.com/translate/docs/release-notes"
  - "https://docs.cloud.google.com/translate/docs/advanced/automl-upgrade"
keywords:
  - "separate"
  - "quotas"
  - "for"
  - "batch"
  - "and"
  - "automl"
  - "translation"
  - "api"
---

# Separate quotas for batch and AutoML translation

Product: Cloud Translation
Coverage: LOW

## Step 02 Summary

Translation API - Advanced provides separate quotas for batch translation and translation with AutoML models.

## Extended Definition

Translation API - Advanced provides separate quotas for batch translation and translation with AutoML models.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/translate/docs/advanced/batch-translation](https://docs.cloud.google.com/translate/docs/advanced/batch-translation)
- [https://docs.cloud.google.com/translate/docs/release-notes](https://docs.cloud.google.com/translate/docs/release-notes)
- [https://docs.cloud.google.com/translate/docs/advanced/automl-upgrade](https://docs.cloud.google.com/translate/docs/advanced/automl-upgrade)

## Supporting Pages

### Batch requests (Advanced) \_|\_ Cloud Translation \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/translate/docs/advanced/batch-translation](https://docs.cloud.google.com/translate/docs/advanced/batch-translation)
- Source ID: `site-iam-reference`
- Final score: 174
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- After completing all of your requests, call // the "close" method on the client to safely clean up any remaining background resources. try ( TranslationServiceClient client = TranslationServiceClient . create ()) { // Supported Locations: global, [glossary location], or [model location] // Glossaries must be hosted in us-central1 // Custom Models must use the same location as your model. (us-central1) String location = "us-central1" ; LocationName parent = LocationName . of ( projectId , location ); // Configure the source of the file from a GCS bucket GcsSource gcsSource = GcsSource . newBuilder (). setInputUri ( inputUri ). build (); // Supported Mime Types: https://cloud.google.com/translate/docs/supported-formats InputConfig inputConfig = InputConfig . newBuilder (). setGcsSource ( gcsSource ). setMimeType ( "text/plain" ). build (); // Configure where to store the output in a GCS bucket GcsDestination gcsDestination = GcsDestination . newBuilder (). setOutputUriPrefix ( outputUri ). build (); OutputConfig outputConfig = OutputConfig . newBuilder (). setGcsDestination ( gcsDestination ). build (); // Configure the glossary used in the request GlossaryName glossaryName = GlossaryName . of ( projectId , location , glossaryId ); TranslateTextGlossaryConfig glossaryConfig = TranslateTextGlossaryConfig . newBuilder (). setGlossary ( glossaryName . toString ()). build (); // Configure the model used in the request String modelPath = String . format ( "projects/%s/locations/%s/models/%s" , projectId , location , modelId ); // Build the request that will be sent to the API BatchTranslateTextRequest request = BatchTranslateTextRequest . newBuilder () . setParent ( parent . toString ()) . setSourceLanguageCode ( sourceLanguage ) . addTargetLanguageCodes ( targetLanguage ) . addInputConfigs ( inputConfig ) . setOutputConfig ( outputConfig ) . putGlossaries ( targetLanguage , glossaryConfig ) . putModels ( targetLanguage , modelPath ) . build (); // Start an asynchronous request OperationFuture<BatchTranslateResponse , BatchTranslateMetadata > future = client . batchTranslateTextAsync ( request ); System . out . println ( "Waiting for operation to complete..." ); // random number between 300 - 450 (maximum allowed seconds) long randomNumber = ThreadLocalRandom . current (). nextInt ( 450 , 600 ); BatchTranslateResponse response = future . get ( randomNumber , TimeUnit .
- After completing all of your requests, call // the "close" method on the client to safely clean up any remaining background resources. try ( TranslationServiceClient client = TranslationServiceClient . create ()) { // Supported Locations: global, [glossary location], or [model location] // Glossaries must be hosted in us-central1 // Custom Models must use the same location as your model. (us-central1) String location = "us-central1" ; LocationName parent = LocationName . of ( projectId , location ); // Configure the source of the file from a GCS bucket GcsSource gcsSource = GcsSource . newBuilder (). setInputUri ( inputUri ). build (); // Supported Mime Types: https://cloud.google.com/translate/docs/supported-formats InputConfig inputConfig = InputConfig . newBuilder (). setGcsSource ( gcsSource ). setMimeType ( "text/plain" ). build (); // Configure where to store the output in a GCS bucket GcsDestination gcsDestination = GcsDestination . newBuilder (). setOutputUriPrefix ( outputUri ). build (); OutputConfig outputConfig = OutputConfig . newBuilder (). setGcsDestination ( gcsDestination ). build (); // Configure the glossary used in the request GlossaryName glossaryName = GlossaryName . of ( projectId , location , glossaryId ); TranslateTextGlossaryConfig glossaryConfig = TranslateTextGlossaryConfig . newBuilder (). setGlossary ( glossaryName . toString ()). build (); // Build the request that will be sent to the API BatchTranslateTextRequest request = BatchTranslateTextRequest . newBuilder () . setParent ( parent . toString ()) . setSourceLanguageCode ( sourceLanguage ) . addTargetLanguageCodes ( targetLanguage ) . addInputConfigs ( inputConfig ) . setOutputConfig ( outputConfig ) . putGlossaries ( targetLanguage , glossaryConfig ) . build (); // Start an asynchronous request OperationFuture<BatchTranslateResponse , BatchTranslateMetadata > future = client . batchTranslateTextAsync ( request ); System . out . println ( "Waiting for operation to complete..." ); // random number between 300 - 450 (maximum allowed seconds) long randomNumber = ThreadLocalRandom . current (). nextInt ( 450 , 600 ); BatchTranslateResponse response = future . get ( randomNumber , TimeUnit .
- After completing all of your requests, call // the "close" method on the client to safely clean up any remaining background resources. try ( TranslationServiceClient client = TranslationServiceClient . create ()) { // Supported Locations: global, [glossary location], or [model location] // Glossaries must be hosted in us-central1 // Custom Models must use the same location as your model. (us-central1) String location = "us-central1" ; LocationName parent = LocationName . of ( projectId , location ); // Configure the source of the file from a GCS bucket GcsSource gcsSource = GcsSource . newBuilder (). setInputUri ( inputUri ). build (); // Supported Mime Types: https://cloud.google.com/translate/docs/supported-formats InputConfig inputConfig = InputConfig . newBuilder (). setGcsSource ( gcsSource ). setMimeType ( "text/plain" ). build (); // Configure where to store the output in a GCS bucket GcsDestination gcsDestination = GcsDestination . newBuilder (). setOutputUriPrefix ( outputUri ). build (); OutputConfig outputConfig = OutputConfig . newBuilder (). setGcsDestination ( gcsDestination ). build (); // Configure the model used in the request String modelPath = String . format ( "projects/%s/locations/%s/models/%s" , projectId , location , modelId ); // Build the request that will be sent to the API BatchTranslateTextRequest request = BatchTranslateTextRequest . newBuilder () . setParent ( parent . toString ()) . setSourceLanguageCode ( sourceLanguage ) . addTargetLanguageCodes ( targetLanguage ) . addInputConfigs ( inputConfig ) . setOutputConfig ( outputConfig ) . putModels ( targetLanguage , modelPath ) . build (); // Start an asynchronous request OperationFuture<BatchTranslateResponse , BatchTranslateMetadata > future = client . batchTranslateTextAsync ( request ); System . out . println ( "Waiting for operation to complete..." ); // random number between 300 - 450 (maximum allowed seconds) long randomNumber = ThreadLocalRandom . current (). nextInt ( 450 , 600 ); BatchTranslateResponse response = future . get ( randomNumber , TimeUnit .
- TranslationServiceClient () Supported file types: https://cloud.google.com/translate/docs/supported-formats gcs source = { "input uri" : input uri } location = "us-central1" input configs element = { "gcs source" : gcs source , "mime type" : "text/plain" , # Can be "text/plain" or "text/html". } gcs destination = { "output uri prefix" : output uri } output config = { "gcs destination" : gcs destination } parent = f "projects/ { project id } /locations/ { location } " model path = "projects/ {} /locations/ {} /models/ {} " . format ( project id , location , model id # The location of AutoML model. ) Supported language codes: https://cloud.google.com/translate/docs/languages models = { "ja" : model path } # takes a target lang as key. operation = client . batch translate text ( request = { "parent" : parent , "source language code" : "en" , "target language codes" : [ "ja" ], # Up to 10 language codes here. "input configs" : [ input configs element ], "output config" : output config , "models" : models , } ) print ( "Waiting for operation to complete..." ) response = operation . result () Display the translation for each input text provided. print ( f "Total Characters: { response . total characters } " ) print ( f "Translated Characters: { response . translated characters } " ) return response Additional languages C# : Please follow the C# setup instructions on the client libraries page and then visit the Cloud Translation reference documentation for .NET.

### Cloud Translation release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/translate/docs/release-notes](https://docs.cloud.google.com/translate/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 160
- Re-rank relevance: N/A

Evidence snippets:
- In addition to the features of Cloud Translation API v3beta1, Translation API - Advanced supports: User labels Audit logging Separate quotas for batch translation and for translation using AutoML models Client libraries for additional languages PHP, GO, C#, and Ruby Note: Existing users should pay careful attention to client library versions before updating.
- In addition, the release includes the following new features: custom glossaries for customer-specific terminology, batch translation for asynchronous translation of .txt, .tsv, and .html files saved in Google Cloud Storage. v3 API offers monthly free tier , and guarded by new Quotas and Limit .
- November 01, 2021 Feature Document Translation for Cloud Translation - Advanced (v3) is now Generally Available ( GA ) and includes the following enhancements: Right to left language support for PDFs Preserves font size, font color, font style, and hyperlinks for native PDFs only Batch document translation requests support PDF to DOCX conversions for native PDFs only August 02, 2021 Change Removed the Phrase-Based Machine Translation (PBMT) model.
- February 14, 2024 Feature Adaptive translation is Generally Available and adds Portuguese support, raises the limit for input and output characters, and decreases latency in the API and console.

### Upgrade AutoML resources \_|\_ Cloud Translation \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/translate/docs/advanced/automl-upgrade](https://docs.cloud.google.com/translate/docs/advanced/automl-upgrade)
- Source ID: `site-iam-reference`
- Final score: 152
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For example, if you have commands that call the deprecated AutoML API and reference legacy resource IDs, you need to update those commands to call the Cloud Translation API and reference the native resource IDs.
- Model evaluation Supports running evaluations against a new test set or from an existing dataset Supports running evaluations against a new test set only Cancel operations Supports canceling dataset import and model creation operations You cannot cancel long-running operations Google Cloud console behavior post upgrade If you upgrade at least one resource, the Google Cloud console switches to using the Cloud Translation API instead of the deprecated AutoML API.
- During the upgrade, Cloud Translation copies your AutoML (legacy) resources, such as datasets and models, and creates new Cloud Translation (native) resources through the Cloud Translation API.
- For more information about the Cloud Translation API, see the projects.locations.datasets and projects.locations.models resources.

