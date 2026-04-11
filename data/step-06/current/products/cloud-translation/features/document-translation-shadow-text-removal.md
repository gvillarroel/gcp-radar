---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:22:34.593Z"
product_name: "Cloud Translation"
product_slug: "cloud-translation"
feature_name: "Document Translation shadow text removal"
feature_slug: "document-translation-shadow-text-removal"
latest_feature_date: "2023-03-30"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/translate/docs/advanced/adaptive-translation"
  - "https://docs.cloud.google.com/translate/docs/advanced/translating-text-v3"
  - "https://docs.cloud.google.com/translate/docs/advanced/translate-text-advance"
keywords:
  - "document"
  - "translation"
  - "shadow"
  - "text"
  - "removal"
  - "can"
  - "remove"
  - "overlapping"
---

# Document Translation shadow text removal

Product: Cloud Translation
Coverage: LOW

## Step 02 Summary

Document Translation can remove overlapping shadow text in native PDFs.

## Extended Definition

Document Translation can remove overlapping shadow text in native PDFs.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/translate/docs/advanced/adaptive-translation](https://docs.cloud.google.com/translate/docs/advanced/adaptive-translation)
- [https://docs.cloud.google.com/translate/docs/advanced/translating-text-v3](https://docs.cloud.google.com/translate/docs/advanced/translating-text-v3)
- [https://docs.cloud.google.com/translate/docs/advanced/translate-text-advance](https://docs.cloud.google.com/translate/docs/advanced/translate-text-advance)

## Supporting Pages

### "Translate text by using adaptive translation \_|\_ Cloud Translation \_\

- URL: [https://docs.cloud.google.com/translate/docs/advanced/adaptive-translation](https://docs.cloud.google.com/translate/docs/advanced/adaptive-translation)
- Source ID: `site-iam-reference`
- Final score: 142
- Re-rank relevance: N/A

Evidence snippets:
- Request translations For translations, the input can be plain text or HTML.
- For more information, see Set up authentication for a local development environment . / Translates using AdaptiveMt. / private static void adaptiveMtTranslate ( TranslationServiceClient translationServiceClient , String projectId , String datasetId ) { String adaptiveMtDatasetName = String . format ( "projects/%s/locations/LOCATION/adaptiveMtDatasets/%s" , projectId , datasetId ); AdaptiveMtTranslateRequest request = AdaptiveMtTranslateRequest . newBuilder () . setParent ( LocationName . of ( projectId , "us-central1" ). toString ()) . setDataset ( adaptiveMtDatasetName ) . addContent ( "Sample translation text" ) . build (); AdaptiveMtTranslateResponse response = translationServiceClient . adaptiveMtTranslate ( request ); System . out . println ( "Translating using AdaptiveMt" ); System . out . println ( response ); } Node.js Before trying this sample, follow the Node.js setup instructions in the Cloud Translation quickstart using client libraries .
- HTTP method and URL: POST https://translation.googleapis.com/v3/projects/ PROJECT ID /locations/ LOCATION :adaptiveMtTranslate Request JSON body: { "referenceSentenceConfig": { "referenceSentencePairLists": [ { "referenceSentencePairs": [{ "sourceSentence": REFERENCE SOURCE 1 1 , "targetSentence": REFERENCE TARGET 1 1 }, { "sourceSentence": REFERENCE SOURCE 1 2 , "targetSentence": REFERENCE SOURCE 1 2 }] } ], "sourceLanguageCode": SOURCE LANGUAGE , "targetLanguageCode": TARGET LANGUAGE } "content": [" SOURCE TEXT "], "mimeType": " MIME TYPE " } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred"; "x-goog-user-project" = " PROJECT NUMBER OR ID " } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://translation.googleapis.com/v3/projects/ PROJECT ID /locations/ LOCATION :adaptiveMtTranslate" Select-Object -Expand Content You should receive a JSON response similar to the following: { "translations": [ { "translatedText": " TRANSLATED TEXT " } ], "languageCode": " TARGET LANGUAGE " } Java Before trying this sample, follow the Java setup instructions in the Cloud Translation quickstart using client libraries .

### Translate text with Cloud Translation \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/translate/docs/advanced/translating-text-v3](https://docs.cloud.google.com/translate/docs/advanced/translating-text-v3)
- Source ID: `site-docs-root`
- Final score: 142
- Re-rank relevance: N/A

Evidence snippets:
- TranslationServiceClient () location = "us-central1" parent = f "projects/ { project id } /locations/ { location } " model path = f " { parent } /models/ { model id } " Supported language codes: https://cloud.google.com/translate/docs/languages response = client . translate text ( request = { "contents" : [ text ], "target language code" : "ja" , "model" : model path , "source language code" : "en" , "parent" : parent , "mime type" : "text/plain" , # mime types: text/plain, text/html } ) Display the translation for each input text provided for translation in response . translations : print ( f "Translated text: { translation . translated text } " ) return response Additional languages C# : Please follow the C# setup instructions on the client libraries page and then visit the Cloud Translation reference documentation for .NET.
- Find more information about translate function here: https://cloud.google.com/python/docs/reference/translate/latest/google.cloud.translate v2.client.Client#google cloud translate v2 client Client translate results = translate client . translate ( values = text , target language = target language , source language = source language ) for result in results : if "detectedSourceLanguage" in result : print ( f "Detected source language: { result [ 'detectedSourceLanguage' ] } " ) print ( f "Input text: { result [ 'input' ] } " ) print ( f "Translated text: { result [ 'translatedText' ] } " ) print () return results Additional languages C# : Please follow the C# setup instructions on the client libraries page and then visit the Cloud Translation reference documentation for .NET.
- Hello, world!'; // const target = 'The target language, e.g. ru'; async function translateText () { // Translates the text into the target language. "text" can be a string for // translating a single piece of text, or an array of strings for translating // multiple texts. let [ translations ] = await translate . translate ( text , target ); translations = Array . isArray ( translations ) ? translations : [ translations ]; console . log ( 'Translations:' ); translations . forEach (( translation , i ) = > { console . log ( ${ text [ i ] } => ( ${ target } ) ${ translation } ); }); } translateText (); Python Before trying this sample, follow the Python setup instructions in the Cloud Translation quickstart using client libraries .
- How are you doing today?": Translated text: Bonjour comment vas-tu aujourd'hui? for translation in response . translations : print ( f "Translated text: { translation . translated text } " ) return response Additional languages C# : Please follow the C# setup instructions on the client libraries page and then visit the Cloud Translation reference documentation for .NET.

### Translate text with Cloud Translation \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/translate/docs/advanced/translate-text-advance](https://docs.cloud.google.com/translate/docs/advanced/translate-text-advance)
- Source ID: `site-docs-root`
- Final score: 138
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- TranslationServiceClient () location = "us-central1" parent = f "projects/ { project id } /locations/ { location } " model path = f " { parent } /models/ { model id } " Supported language codes: https://cloud.google.com/translate/docs/languages response = client . translate text ( request = { "contents" : [ text ], "target language code" : "ja" , "model" : model path , "source language code" : "en" , "parent" : parent , "mime type" : "text/plain" , # mime types: text/plain, text/html } ) Display the translation for each input text provided for translation in response . translations : print ( f "Translated text: { translation . translated text } " ) return response Additional languages C# : Please follow the C# setup instructions on the client libraries page and then visit the Cloud Translation reference documentation for .NET.
- Find more information about translate function here: https://cloud.google.com/python/docs/reference/translate/latest/google.cloud.translate v2.client.Client#google cloud translate v2 client Client translate results = translate client . translate ( values = text , target language = target language , source language = source language ) for result in results : if "detectedSourceLanguage" in result : print ( f "Detected source language: { result [ 'detectedSourceLanguage' ] } " ) print ( f "Input text: { result [ 'input' ] } " ) print ( f "Translated text: { result [ 'translatedText' ] } " ) print () return results Additional languages C# : Please follow the C# setup instructions on the client libraries page and then visit the Cloud Translation reference documentation for .NET.
- Hello, world!'; // const target = 'The target language, e.g. ru'; async function translateText () { // Translates the text into the target language. "text" can be a string for // translating a single piece of text, or an array of strings for translating // multiple texts. let [ translations ] = await translate . translate ( text , target ); translations = Array . isArray ( translations ) ? translations : [ translations ]; console . log ( 'Translations:' ); translations . forEach (( translation , i ) = > { console . log ( ${ text [ i ] } => ( ${ target } ) ${ translation } ); }); } translateText (); Python Before trying this sample, follow the Python setup instructions in the Cloud Translation quickstart using client libraries .
- How are you doing today?": Translated text: Bonjour comment vas-tu aujourd'hui? for translation in response . translations : print ( f "Translated text: { translation . translated text } " ) return response Additional languages C# : Please follow the C# setup instructions on the client libraries page and then visit the Cloud Translation reference documentation for .NET.

