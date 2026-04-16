---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:49.603Z"
product_name: "Cloud Translation"
product_slug: "cloud-translation"
feature_name: "Adaptive translation higher character limits"
feature_slug: "adaptive-translation-higher-character-limits"
latest_feature_date: "2024-02-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/translate/docs/advanced/adaptive-translation"
  - "https://docs.cloud.google.com/translate/docs/advanced/custom-translations"
  - "https://docs.cloud.google.com/translate/docs/advanced/glossary"
  - "https://docs.cloud.google.com/translate/docs/intro-to-v3"
keywords:
  - "adaptive"
  - "translation"
  - "higher"
  - "character"
  - "limits"
  - "supports"
  - "larger"
  - "input"
---

# Adaptive translation higher character limits

Product: Cloud Translation
Coverage: MEDIUM

## Step 02 Summary

Adaptive translation supports larger input and output character limits.

## Extended Definition

Adaptive translation supports larger input and output character limits.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/translate/docs/advanced/adaptive-translation](https://docs.cloud.google.com/translate/docs/advanced/adaptive-translation)
- [https://docs.cloud.google.com/translate/docs/advanced/custom-translations](https://docs.cloud.google.com/translate/docs/advanced/custom-translations)
- [https://docs.cloud.google.com/translate/docs/advanced/glossary](https://docs.cloud.google.com/translate/docs/advanced/glossary)
- [https://docs.cloud.google.com/translate/docs/intro-to-v3](https://docs.cloud.google.com/translate/docs/intro-to-v3)

## Supporting Pages

### "Translate text by using adaptive translation \_|\_ Cloud Translation \_\

- URL: [https://docs.cloud.google.com/translate/docs/advanced/adaptive-translation](https://docs.cloud.google.com/translate/docs/advanced/adaptive-translation)
- Source ID: `site-iam-reference`
- Final score: 217
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Adaptive translation does have limits on the number of input and output characters.
- Adaptive translation has limits on the number of input and output characters.
- For more information, see Set up authentication for a local development environment . / Imports an AdaptiveMtFile. / private static String importAdaptiveMtFile ( TranslationServiceClient translationServiceClient , String projectId , String datasetId , String gcsUri ) { String adaptiveMtDatasetName = String . format ( "projects/%s/locations/LOCATION/adaptiveMtDatasets/%s" , projectId , datasetId ); ImportAdaptiveMtFileRequest importAdaptiveMtFileRequest = ImportAdaptiveMtFileRequest . newBuilder () . setParent ( adaptiveMtDatasetName ) . setGcsInputSource ( GcsInputSource . newBuilder (). setInputUri ( gcsUri ). build ()) . build (); ImportAdaptiveMtFileResponse response = translationServiceClient . importAdaptiveMtFile ( importAdaptiveMtFileRequest ); System . out . println ( "Importing file" ); System . out . println ( response ); return response . getAdaptiveMtFile (). getName (); } Node.js Before trying this sample, follow the Node.js setup instructions in the Cloud Translation quickstart using client libraries .
- For more information, see Set up authentication for a local development environment . async function importAdaptiveMtFile () { const request = { parent : projects/ ${ projectId } /locations/ ${ location } /adaptiveMtDatasets/ ${ adaptiveMtDatasetName } , gcsInputSource : { inputUri : gcs file uri } } const [ response ] = await translationClient . importAdaptiveMtFile ( request ) console . log ( 'Importing file' ) console . log ( response ) } Python Before trying this sample, follow the Python setup instructions in the Cloud Translation quickstart using client libraries .

### "Custom translations overview \_|\_ Cloud Translation \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/translate/docs/advanced/custom-translations](https://docs.cloud.google.com/translate/docs/advanced/custom-translations)
- Source ID: `site-iam-reference`
- Final score: 165
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For Adaptive Translation, you're charged on the number of input and output characters.
- Compared to custom models, Adaptive Translation works well for getting responses that are similar in style, tone, and voice with your input.
- You are charged both for the model training time and the number of input characters that you send for translation.
- You are charged both for the model training time and the number of input characters that you send for translation.

### "Creating and using glossaries (Advanced) \_|\_ Cloud Translation \_|\_ Google\

- URL: [https://docs.cloud.google.com/translate/docs/advanced/glossary](https://docs.cloud.google.com/translate/docs/advanced/glossary)
- Source ID: `site-iam-reference`
- Final score: 129
- Re-rank relevance: N/A

Evidence snippets:
- The Cloud Translation API supports input files in a format based on TMX version 1.4 .
- After completing all of your requests, call // the "close" method on the client to safely clean up any remaining background resources. try ( TranslationServiceClient client = TranslationServiceClient . create ()) { // Supported Locations: global, [glossary location], or [model location] // Glossaries must be hosted in us-central1 // Custom Models must use the same location as your model. (us-central1) String location = "us-central1" ; LocationName parent = LocationName . of ( projectId , location ); GlossaryName glossaryName = GlossaryName . of ( projectId , location , glossaryId ); TranslateTextGlossaryConfig glossaryConfig = TranslateTextGlossaryConfig . newBuilder (). setGlossary ( glossaryName . toString ()). build (); // Supported Mime Types: https://cloud.google.com/translate/docs/supported-formats TranslateTextRequest request = TranslateTextRequest . newBuilder () . setParent ( parent . toString ()) . setMimeType ( "text/plain" ) . setSourceLanguageCode ( sourceLanguage ) . setTargetLanguageCode ( targetLanguage ) . addContents ( text ) . setGlossaryConfig ( glossaryConfig ) . build (); TranslateTextResponse response = client . translateText ( request ); // Display the translation for each input text provided for ( Translation translation : response . getGlossaryTranslationsList ()) { System . out . printf ( "Translated text: %s\n" , translation . getTranslatedText ()); } } } } Node.js Before trying this sample, follow the Node.js setup instructions in the Cloud Translation quickstart using client libraries .
- For more information, see Set up authentication for a local development environment . { % setvar launch stage % } preview { % endsetvar % } { % setvar launch type % } feature { % endsetvar % } { % include "cloud/ shared/ info launch stage disclaimer.html" % } / Translates using AdaptiveMt. / private static void adaptiveMtTranslate ( TranslationServiceClient translationServiceClient , String projectId , String datasetId ) { String adaptiveMtDatasetName = String . format ( "projects/%s/locations/LOCATION/adaptiveMtDatasets/%s" , projectId , datasetId ); String glossaryId = "your-glossary-display-name" ; GlossaryName glossaryName = GlossaryName . of ( projectId , location , glossaryId ); GlossaryConfig glossaryConfig = GlossaryConfig . newBuilder (). setGlossary ( glossaryName . toString ()). build (); AdaptiveMtTranslateRequest request = AdaptiveMtTranslateRequest . newBuilder () . setParent ( LocationName . of ( projectId , "us-central1" ). toString ()) . setDataset ( adaptiveMtDatasetName ) . addContent ( "Sample translation text" ) . setGlossaryConfig ( glossaryConfig ) . build (); AdaptiveMtTranslateResponse response = translationServiceClient . adaptiveMtTranslate ( request ); System . out . println ( "Translating using AdaptiveMt" ); System . out . println ( response ); } Node.js Before trying this sample, follow the Node.js setup instructions in the Cloud Translation quickstart using client libraries .
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred"; "x-goog-user-project" = " PROJECT NUMBER OR ID " } Invoke-WebRequest -Method PATCH -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://translation.googleapis.com/v3/projects/ PROJECT NUMBER OR ID /locations/ LOCATION /glossaries/ GLOSSARY ID ?update mask=input config&update mask=display name" Select-Object -Expand Content You should receive a JSON response similar to the following: { "name": "projects/ PROJECT NUMBER /locations/ LOCATION /operations/ OPERATION ID ", "metadata": { "@type": "type.googleapis.com/google.cloud.translation.v3.UpdateGlossaryMetadata", "glossary": { "name": "projects/ PROJECT NUMBER /locations/ LOCATION /glossaries/ GLOSSARY ID ", "languageCodesSet": { "languageCodes": [" LANGUAGE CODE ", ...] }, "inputConfig": { "gcsSource": { "inputUri": "gs:// GLOSSARY FILE PATH " } }, "entryCount": NUMBER OF ENTRIES , "submitTime": "2022-04-22T23:16:30.628806944Z", "endTime": "2022-04-22T23:41:15.115797Z", "displayName": " GLOSSARY ID " }, "state": "RUNNING", "submitTime": "2022-04-22T23:50:24.337964527Z" } } Additional languages C# : Please follow the C# setup instructions on the client libraries page and then visit the Cloud Translation reference documentation for .NET.

### Overview of the Cloud Translation API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/translate/docs/intro-to-v3](https://docs.cloud.google.com/translate/docs/intro-to-v3)
- Source ID: `site-iam-reference`
- Final score: 126
- Re-rank relevance: N/A

Evidence snippets:
- Feature Basic Advanced Translate with the NMT model Translate with the Translation LLM Translate with Adaptive Translation models Translate with custom models Translate multiple strings in a single request Batch translations with Cloud Storage Translate documents Glossary support (control terminology) Train custom models Language Detection Integrated REST API Integrated gRPC API Service Account API Key Audit logging Supports HTML Supports 100+ Languages Romanization support Transliteration support Adaptive Translation Multi-regional endpoint support VPC Service Controls support Refer to Cloud Translation - Advanced API features for more details on Cloud Translation - Advanced API.
- Compare supported models Customize the NMT model Customize the Translation LLM Supported languages Supported formats Perform adaptive translation Migrate to Translation Advanced For answers to general questions about Cloud Translation API, refer to the General FAQs page.
- Labels Cloud Translation - Advanced API supports adding user-defined labels (key-value pairs) to TranslateText , BatchTranslateText and DetectLanguage requests.
- Batch requests Batch translation requests are asynchronous requests that translate input from Cloud Storage buckets.

