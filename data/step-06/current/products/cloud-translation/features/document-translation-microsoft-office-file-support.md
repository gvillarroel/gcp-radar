---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:22:34.594Z"
product_name: "Cloud Translation"
product_slug: "cloud-translation"
feature_name: "Document Translation Microsoft Office file support"
feature_slug: "document-translation-microsoft-office-file-support"
latest_feature_date: "2023-02-28"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/translate/docs/release-notes"
  - "https://docs.cloud.google.com/translate/docs/advanced/batch-translation"
  - "https://docs.cloud.google.com/translate/docs/advanced/translate-text-advance"
keywords:
  - "document"
  - "translation"
  - "microsoft"
  - "office"
  - "file"
  - "supports"
  - "doc"
  - "ppt"
---

# Document Translation Microsoft Office file support

Product: Cloud Translation
Coverage: LOW

## Step 02 Summary

Document Translation supports Microsoft DOC, PPT, and XLS files.

## Extended Definition

Document Translation supports Microsoft DOC, PPT, and XLS files.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/translate/docs/release-notes](https://docs.cloud.google.com/translate/docs/release-notes)
- [https://docs.cloud.google.com/translate/docs/advanced/batch-translation](https://docs.cloud.google.com/translate/docs/advanced/batch-translation)
- [https://docs.cloud.google.com/translate/docs/advanced/translate-text-advance](https://docs.cloud.google.com/translate/docs/advanced/translate-text-advance)

## Supporting Pages

### Cloud Translation release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/translate/docs/release-notes](https://docs.cloud.google.com/translate/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 172
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- February 28, 2023 Feature For document translations, added support for Microsoft DOC, PPT, and XLS files.
- Document Translation supports the DOCX, PPTX, XLSX, and PDF file formats.
- November 01, 2021 Feature Document Translation for Cloud Translation - Advanced (v3) is now Generally Available ( GA ) and includes the following enhancements: Right to left language support for PDFs Preserves font size, font color, font style, and hyperlinks for native PDFs only Batch document translation requests support PDF to DOCX conversions for native PDFs only August 02, 2021 Change Removed the Phrase-Based Machine Translation (PBMT) model.
- Assamese Aymara Bambara Bhojpuri Dhivehi Dogri Ewe Guarani Ilocano Konkani Krio Kurdish(Sorani) Lingala Luganda Maithili Meiteilon(Manipuri) Mizo Oromo Quechua Sanskrit Sepedi(Pedi) Tigrinya Tsonga Twi (Akan) November 15, 2022 Feature For online document translations , you can increase the page limit for native PDF documents to 300 pages.

### Batch requests (Advanced) \_|\_ Cloud Translation \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/translate/docs/advanced/batch-translation](https://docs.cloud.google.com/translate/docs/advanced/batch-translation)
- Source ID: `site-iam-reference`
- Final score: 162
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- TranslationServiceClient () Supported file types: https://cloud.google.com/translate/docs/supported-formats gcs source = { "input uri" : input uri } location = "us-central1" input configs element = { "gcs source" : gcs source , "mime type" : "text/plain" , # Can be "text/plain" or "text/html". } gcs destination = { "output uri prefix" : output uri } output config = { "gcs destination" : gcs destination } parent = f "projects/ { project id } /locations/ { location } " model path = "projects/ {} /locations/ {} /models/ {} " . format ( project id , location , model id # The location of AutoML model. ) Supported language codes: https://cloud.google.com/translate/docs/languages models = { "ja" : model path } # takes a target lang as key. operation = client . batch translate text ( request = { "parent" : parent , "source language code" : "en" , "target language codes" : [ "ja" ], # Up to 10 language codes here. "input configs" : [ input configs element ], "output config" : output config , "models" : models , } ) print ( "Waiting for operation to complete..." ) response = operation . result () Display the translation for each input text provided. print ( f "Total Characters: { response . total characters } " ) print ( f "Translated Characters: { response . translated characters } " ) return response Additional languages C# : Please follow the C# setup instructions on the client libraries page and then visit the Cloud Translation reference documentation for .NET.
- TranslationServiceClient () location = "us-central1" Supported file types: https://cloud.google.com/translate/docs/supported-formats gcs source = { "input uri" : input uri } input configs element = { "gcs source" : gcs source , "mime type" : "text/plain" , # Can be "text/plain" or "text/html". } gcs destination = { "output uri prefix" : output uri } output config = { "gcs destination" : gcs destination } parent = f "projects/ { project id } /locations/ { location } " Supported language codes: https://cloud.google.com/translate/docs/languages operation = client . batch translate text ( request = { "parent" : parent , "source language code" : "en" , "target language codes" : [ "ja" ], # Up to 10 language codes here. "input configs" : [ input configs element ], "output config" : output config , } ) print ( "Waiting for operation to complete..." ) response = operation . result ( timeout ) print ( f "Total Characters: { response . total characters } " ) print ( f "Translated Characters: { response . translated characters } " ) return response Additional languages C# : Please follow the C# setup instructions on the client libraries page and then visit the Cloud Translation reference documentation for .NET.
- After completing all of your requests, call // the "close" method on the client to safely clean up any remaining background resources. try ( TranslationServiceClient client = TranslationServiceClient . create ()) { // Supported Locations: global, [glossary location], or [model location] // Glossaries must be hosted in us-central1 // Custom Models must use the same location as your model. (us-central1) String location = "us-central1" ; LocationName parent = LocationName . of ( projectId , location ); // Configure the source of the file from a GCS bucket GcsSource gcsSource = GcsSource . newBuilder (). setInputUri ( inputUri ). build (); // Supported Mime Types: https://cloud.google.com/translate/docs/supported-formats InputConfig inputConfig = InputConfig . newBuilder (). setGcsSource ( gcsSource ). setMimeType ( "text/plain" ). build (); // Configure where to store the output in a GCS bucket GcsDestination gcsDestination = GcsDestination . newBuilder (). setOutputUriPrefix ( outputUri ). build (); OutputConfig outputConfig = OutputConfig . newBuilder (). setGcsDestination ( gcsDestination ). build (); // Configure the glossary used in the request GlossaryName glossaryName = GlossaryName . of ( projectId , location , glossaryId ); TranslateTextGlossaryConfig glossaryConfig = TranslateTextGlossaryConfig . newBuilder (). setGlossary ( glossaryName . toString ()). build (); // Configure the model used in the request String modelPath = String . format ( "projects/%s/locations/%s/models/%s" , projectId , location , modelId ); // Build the request that will be sent to the API BatchTranslateTextRequest request = BatchTranslateTextRequest . newBuilder () . setParent ( parent . toString ()) . setSourceLanguageCode ( sourceLanguage ) . addTargetLanguageCodes ( targetLanguage ) . addInputConfigs ( inputConfig ) . setOutputConfig ( outputConfig ) . putGlossaries ( targetLanguage , glossaryConfig ) . putModels ( targetLanguage , modelPath ) . build (); // Start an asynchronous request OperationFuture<BatchTranslateResponse , BatchTranslateMetadata > future = client . batchTranslateTextAsync ( request ); System . out . println ( "Waiting for operation to complete..." ); // random number between 300 - 450 (maximum allowed seconds) long randomNumber = ThreadLocalRandom . current (). nextInt ( 450 , 600 ); BatchTranslateResponse response = future . get ( randomNumber , TimeUnit .
- After completing all of your requests, call // the "close" method on the client to safely clean up any remaining background resources. try ( TranslationServiceClient client = TranslationServiceClient . create ()) { // Supported Locations: global, [glossary location], or [model location] // Glossaries must be hosted in us-central1 // Custom Models must use the same location as your model. (us-central1) String location = "us-central1" ; LocationName parent = LocationName . of ( projectId , location ); // Configure the source of the file from a GCS bucket GcsSource gcsSource = GcsSource . newBuilder (). setInputUri ( inputUri ). build (); // Supported Mime Types: https://cloud.google.com/translate/docs/supported-formats InputConfig inputConfig = InputConfig . newBuilder (). setGcsSource ( gcsSource ). setMimeType ( "text/plain" ). build (); // Configure where to store the output in a GCS bucket GcsDestination gcsDestination = GcsDestination . newBuilder (). setOutputUriPrefix ( outputUri ). build (); OutputConfig outputConfig = OutputConfig . newBuilder (). setGcsDestination ( gcsDestination ). build (); // Configure the glossary used in the request GlossaryName glossaryName = GlossaryName . of ( projectId , location , glossaryId ); TranslateTextGlossaryConfig glossaryConfig = TranslateTextGlossaryConfig . newBuilder (). setGlossary ( glossaryName . toString ()). build (); // Build the request that will be sent to the API BatchTranslateTextRequest request = BatchTranslateTextRequest . newBuilder () . setParent ( parent . toString ()) . setSourceLanguageCode ( sourceLanguage ) . addTargetLanguageCodes ( targetLanguage ) . addInputConfigs ( inputConfig ) . setOutputConfig ( outputConfig ) . putGlossaries ( targetLanguage , glossaryConfig ) . build (); // Start an asynchronous request OperationFuture<BatchTranslateResponse , BatchTranslateMetadata > future = client . batchTranslateTextAsync ( request ); System . out . println ( "Waiting for operation to complete..." ); // random number between 300 - 450 (maximum allowed seconds) long randomNumber = ThreadLocalRandom . current (). nextInt ( 450 , 600 ); BatchTranslateResponse response = future . get ( randomNumber , TimeUnit .

### Translate text with Cloud Translation \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/translate/docs/advanced/translate-text-advance](https://docs.cloud.google.com/translate/docs/advanced/translate-text-advance)
- Source ID: `site-docs-root`
- Final score: 160
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- TranslationServiceClient () location = "us-central1" parent = f "projects/ { project id } /locations/ { location } " model path = f " { parent } /models/ { model id } " Supported language codes: https://cloud.google.com/translate/docs/languages response = client . translate text ( request = { "contents" : [ text ], "target language code" : "ja" , "model" : model path , "source language code" : "en" , "parent" : parent , "mime type" : "text/plain" , # mime types: text/plain, text/html } ) Display the translation for each input text provided for translation in response . translations : print ( f "Translated text: { translation . translated text } " ) return response Additional languages C# : Please follow the C# setup instructions on the client libraries page and then visit the Cloud Translation reference documentation for .NET.
- Find more information about translate function here: https://cloud.google.com/python/docs/reference/translate/latest/google.cloud.translate v2.client.Client#google cloud translate v2 client Client translate results = translate client . translate ( values = text , target language = target language , source language = source language ) for result in results : if "detectedSourceLanguage" in result : print ( f "Detected source language: { result [ 'detectedSourceLanguage' ] } " ) print ( f "Input text: { result [ 'input' ] } " ) print ( f "Translated text: { result [ 'translatedText' ] } " ) print () return results Additional languages C# : Please follow the C# setup instructions on the client libraries page and then visit the Cloud Translation reference documentation for .NET.
- How are you doing today?": Translated text: Bonjour comment vas-tu aujourd'hui? for translation in response . translations : print ( f "Translated text: { translation . translated text } " ) return response Additional languages C# : Please follow the C# setup instructions on the client libraries page and then visit the Cloud Translation reference documentation for .NET.
- Cloud Translation - Advanced also provides advanced text translation capabilities like translating documents and creating glossaries to ensure that your domain-specific terminology is translated correctly.

