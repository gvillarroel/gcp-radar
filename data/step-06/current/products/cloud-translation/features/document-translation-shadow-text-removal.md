---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:49.605Z"
product_name: "Cloud Translation"
product_slug: "cloud-translation"
feature_name: "Document Translation shadow text removal"
feature_slug: "document-translation-shadow-text-removal"
latest_feature_date: "2023-03-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/translate/docs/advanced/translate-text-advance"
  - "https://docs.cloud.google.com/translate/docs/advanced/translating-text-v3"
  - "https://docs.cloud.google.com/translate/docs/basic/translate-text-basic"
  - "https://docs.cloud.google.com/translate/docs/basic/translating-text"
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
Coverage: MEDIUM

## Step 02 Summary

Document Translation can remove overlapping shadow text in native PDFs.

## Extended Definition

Document Translation can remove overlapping shadow text in native PDFs.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/translate/docs/advanced/translate-text-advance](https://docs.cloud.google.com/translate/docs/advanced/translate-text-advance)
- [https://docs.cloud.google.com/translate/docs/advanced/translating-text-v3](https://docs.cloud.google.com/translate/docs/advanced/translating-text-v3)
- [https://docs.cloud.google.com/translate/docs/basic/translate-text-basic](https://docs.cloud.google.com/translate/docs/basic/translate-text-basic)
- [https://docs.cloud.google.com/translate/docs/basic/translating-text](https://docs.cloud.google.com/translate/docs/basic/translating-text)

## Supporting Pages

### Translate text with Cloud Translation \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/translate/docs/advanced/translate-text-advance](https://docs.cloud.google.com/translate/docs/advanced/translate-text-advance)
- Source ID: `site-docs-root`
- Final score: 181
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- TranslationServiceClient () location = "us-central1" parent = f "projects/ { project id } /locations/ { location } " model path = f " { parent } /models/ { model id } " Supported language codes: https://cloud.google.com/translate/docs/languages response = client . translate text ( request = { "contents" : [ text ], "target language code" : "ja" , "model" : model path , "source language code" : "en" , "parent" : parent , "mime type" : "text/plain" , # mime types: text/plain, text/html } ) Display the translation for each input text provided for translation in response . translations : print ( f "Translated text: { translation . translated text } " ) return response Additional languages C# : Please follow the C# setup instructions on the client libraries page and then visit the Cloud Translation reference documentation for .NET.
- Find more information about translate function here: https://cloud.google.com/python/docs/reference/translate/latest/google.cloud.translate v2.client.Client#google cloud translate v2 client Client translate results = translate client . translate ( values = text , target language = target language , source language = source language ) for result in results : if "detectedSourceLanguage" in result : print ( f "Detected source language: { result [ 'detectedSourceLanguage' ] } " ) print ( f "Input text: { result [ 'input' ] } " ) print ( f "Translated text: { result [ 'translatedText' ] } " ) print () return results Additional languages C# : Please follow the C# setup instructions on the client libraries page and then visit the Cloud Translation reference documentation for .NET.
- Hello, world!'; // const target = 'The target language, e.g. ru'; async function translateText () { // Translates the text into the target language. "text" can be a string for // translating a single piece of text, or an array of strings for translating // multiple texts. let [ translations ] = await translate . translate ( text , target ); translations = Array . isArray ( translations ) ? translations : [ translations ]; console . log ( 'Translations:' ); translations . forEach (( translation , i ) = > { console . log ( ${ text [ i ] } => ( ${ target } ) ${ translation } ); }); } translateText (); Python Before trying this sample, follow the Python setup instructions in the Cloud Translation quickstart using client libraries .
- How are you doing today?": Translated text: Bonjour comment vas-tu aujourd'hui? for translation in response . translations : print ( f "Translated text: { translation . translated text } " ) return response Additional languages C# : Please follow the C# setup instructions on the client libraries page and then visit the Cloud Translation reference documentation for .NET.

### Translate text with Cloud Translation \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/translate/docs/advanced/translating-text-v3](https://docs.cloud.google.com/translate/docs/advanced/translating-text-v3)
- Source ID: `site-docs-root`
- Final score: 181
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- TranslationServiceClient () location = "us-central1" parent = f "projects/ { project id } /locations/ { location } " model path = f " { parent } /models/ { model id } " Supported language codes: https://cloud.google.com/translate/docs/languages response = client . translate text ( request = { "contents" : [ text ], "target language code" : "ja" , "model" : model path , "source language code" : "en" , "parent" : parent , "mime type" : "text/plain" , # mime types: text/plain, text/html } ) Display the translation for each input text provided for translation in response . translations : print ( f "Translated text: { translation . translated text } " ) return response Additional languages C# : Please follow the C# setup instructions on the client libraries page and then visit the Cloud Translation reference documentation for .NET.
- Find more information about translate function here: https://cloud.google.com/python/docs/reference/translate/latest/google.cloud.translate v2.client.Client#google cloud translate v2 client Client translate results = translate client . translate ( values = text , target language = target language , source language = source language ) for result in results : if "detectedSourceLanguage" in result : print ( f "Detected source language: { result [ 'detectedSourceLanguage' ] } " ) print ( f "Input text: { result [ 'input' ] } " ) print ( f "Translated text: { result [ 'translatedText' ] } " ) print () return results Additional languages C# : Please follow the C# setup instructions on the client libraries page and then visit the Cloud Translation reference documentation for .NET.
- Hello, world!'; // const target = 'The target language, e.g. ru'; async function translateText () { // Translates the text into the target language. "text" can be a string for // translating a single piece of text, or an array of strings for translating // multiple texts. let [ translations ] = await translate . translate ( text , target ); translations = Array . isArray ( translations ) ? translations : [ translations ]; console . log ( 'Translations:' ); translations . forEach (( translation , i ) = > { console . log ( ${ text [ i ] } => ( ${ target } ) ${ translation } ); }); } translateText (); Python Before trying this sample, follow the Python setup instructions in the Cloud Translation quickstart using client libraries .
- How are you doing today?": Translated text: Bonjour comment vas-tu aujourd'hui? for translation in response . translations : print ( f "Translated text: { translation . translated text } " ) return response Additional languages C# : Please follow the C# setup instructions on the client libraries page and then visit the Cloud Translation reference documentation for .NET.

### Translate text with Cloud Translation \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/translate/docs/basic/translate-text-basic](https://docs.cloud.google.com/translate/docs/basic/translate-text-basic)
- Source ID: `site-docs-root`
- Final score: 173
- Re-rank relevance: N/A

Evidence snippets:
- TranslationServiceClient () location = "us-central1" parent = f "projects/ { project id } /locations/ { location } " model path = f " { parent } /models/ { model id } " Supported language codes: https://cloud.google.com/translate/docs/languages response = client . translate text ( request = { "contents" : [ text ], "target language code" : "ja" , "model" : model path , "source language code" : "en" , "parent" : parent , "mime type" : "text/plain" , # mime types: text/plain, text/html } ) Display the translation for each input text provided for translation in response . translations : print ( f "Translated text: { translation . translated text } " ) return response Additional languages C# : Please follow the C# setup instructions on the client libraries page and then visit the Cloud Translation reference documentation for .NET.
- Find more information about translate function here: https://cloud.google.com/python/docs/reference/translate/latest/google.cloud.translate v2.client.Client#google cloud translate v2 client Client translate results = translate client . translate ( values = text , target language = target language , source language = source language ) for result in results : if "detectedSourceLanguage" in result : print ( f "Detected source language: { result [ 'detectedSourceLanguage' ] } " ) print ( f "Input text: { result [ 'input' ] } " ) print ( f "Translated text: { result [ 'translatedText' ] } " ) print () return results Additional languages C# : Please follow the C# setup instructions on the client libraries page and then visit the Cloud Translation reference documentation for .NET.
- Hello, world!'; // const target = 'The target language, e.g. ru'; async function translateText () { // Translates the text into the target language. "text" can be a string for // translating a single piece of text, or an array of strings for translating // multiple texts. let [ translations ] = await translate . translate ( text , target ); translations = Array . isArray ( translations ) ? translations : [ translations ]; console . log ( 'Translations:' ); translations . forEach (( translation , i ) = > { console . log ( ${ text [ i ] } => ( ${ target } ) ${ translation } ); }); } translateText (); Python Before trying this sample, follow the Python setup instructions in the Cloud Translation quickstart using client libraries .
- How are you doing today?": Translated text: Bonjour comment vas-tu aujourd'hui? for translation in response . translations : print ( f "Translated text: { translation . translated text } " ) return response Additional languages C# : Please follow the C# setup instructions on the client libraries page and then visit the Cloud Translation reference documentation for .NET.

### Translate text with Cloud Translation \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/translate/docs/basic/translating-text](https://docs.cloud.google.com/translate/docs/basic/translating-text)
- Source ID: `site-docs-root`
- Final score: 173
- Re-rank relevance: N/A

Evidence snippets:
- TranslationServiceClient () location = "us-central1" parent = f "projects/ { project id } /locations/ { location } " model path = f " { parent } /models/ { model id } " Supported language codes: https://cloud.google.com/translate/docs/languages response = client . translate text ( request = { "contents" : [ text ], "target language code" : "ja" , "model" : model path , "source language code" : "en" , "parent" : parent , "mime type" : "text/plain" , # mime types: text/plain, text/html } ) Display the translation for each input text provided for translation in response . translations : print ( f "Translated text: { translation . translated text } " ) return response Additional languages C# : Please follow the C# setup instructions on the client libraries page and then visit the Cloud Translation reference documentation for .NET.
- Find more information about translate function here: https://cloud.google.com/python/docs/reference/translate/latest/google.cloud.translate v2.client.Client#google cloud translate v2 client Client translate results = translate client . translate ( values = text , target language = target language , source language = source language ) for result in results : if "detectedSourceLanguage" in result : print ( f "Detected source language: { result [ 'detectedSourceLanguage' ] } " ) print ( f "Input text: { result [ 'input' ] } " ) print ( f "Translated text: { result [ 'translatedText' ] } " ) print () return results Additional languages C# : Please follow the C# setup instructions on the client libraries page and then visit the Cloud Translation reference documentation for .NET.
- Hello, world!'; // const target = 'The target language, e.g. ru'; async function translateText () { // Translates the text into the target language. "text" can be a string for // translating a single piece of text, or an array of strings for translating // multiple texts. let [ translations ] = await translate . translate ( text , target ); translations = Array . isArray ( translations ) ? translations : [ translations ]; console . log ( 'Translations:' ); translations . forEach (( translation , i ) = > { console . log ( ${ text [ i ] } => ( ${ target } ) ${ translation } ); }); } translateText (); Python Before trying this sample, follow the Python setup instructions in the Cloud Translation quickstart using client libraries .
- How are you doing today?": Translated text: Bonjour comment vas-tu aujourd'hui? for translation in response . translations : print ( f "Translated text: { translation . translated text } " ) return response Additional languages C# : Please follow the C# setup instructions on the client libraries page and then visit the Cloud Translation reference documentation for .NET.

