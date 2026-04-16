---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:49.604Z"
product_name: "Cloud Translation"
product_slug: "cloud-translation"
feature_name: "Romanization"
feature_slug: "romanization"
latest_feature_date: "2023-05-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/translate/docs/hybrid-glossaries-tutorial"
  - "https://docs.cloud.google.com/translate/docs/advanced/translate-text-advance"
  - "https://docs.cloud.google.com/translate/docs/advanced/translating-text-v3"
  - "https://docs.cloud.google.com/translate/docs/basic/translate-text-basic"
keywords:
  - "romanization"
  - "converts"
  - "text"
  - "from"
  - "source"
  - "script"
  - "into"
  - "the"
---

# Romanization

Product: Cloud Translation
Coverage: MEDIUM

## Step 02 Summary

Romanization converts text from a source script into the Latin alphabet.

## Extended Definition

Romanization converts text from a source script into the Latin alphabet.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/translate/docs/hybrid-glossaries-tutorial](https://docs.cloud.google.com/translate/docs/hybrid-glossaries-tutorial)
- [https://docs.cloud.google.com/translate/docs/advanced/translate-text-advance](https://docs.cloud.google.com/translate/docs/advanced/translate-text-advance)
- [https://docs.cloud.google.com/translate/docs/advanced/translating-text-v3](https://docs.cloud.google.com/translate/docs/advanced/translating-text-v3)
- [https://docs.cloud.google.com/translate/docs/basic/translate-text-basic](https://docs.cloud.google.com/translate/docs/basic/translate-text-basic)

## Supporting Pages

### "Translating text from a photo \_|\_ Cloud Translation \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/translate/docs/hybrid-glossaries-tutorial](https://docs.cloud.google.com/translate/docs/hybrid-glossaries-tutorial)
- Source ID: `site-iam-reference`
- Final score: 174
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Args: None Returns: None """ Photo from which to extract text infile = "resources/example.png" Name of file that will hold synthetic speech outfile = "resources/example.mp3" Defines the languages in the glossary This list must match the languages in the glossary Here, the glossary includes French and English glossary langs = [ "fr" , "en" ] Name that will be assigned to your project's glossary resource glossary name = "bistro-glossary" uri of .csv file uploaded to Cloud Storage glossary uri = "gs://cloud-samples-data/translation/bistro glossary.csv" created glossary name = create glossary ( glossary langs , PROJECT ID , glossary name , glossary uri ) photo -> detected text text to translate = pic to text ( infile ) detected text -> translated text text to speak = translate text ( text to translate , "fr" , "en" , PROJECT ID , created glossary name ) translated text -> synthetic audio text to speech ( text to speak , outfile ) Node.js Before trying this sample, follow the Node.js setup instructions in the Cloud Translation quickstart using client libraries .
- For more information, see Set up authentication for a local development environment . def text to speech ( text : str , outfile : str ) - > str : """Converts plaintext to SSML and generates synthetic audio from SSML Args: text: text to synthesize outfile: filename to use to store synthetic audio Returns: String of synthesized audio """ Replace special characters with HTML Ampersand Character Codes These Codes prevent the API from confusing text with SSML commands For example, '<' --> '&lt;' and '&' --> '&amp;' escaped lines = html . escape ( text ) Convert plaintext to SSML in order to wait two seconds between each line in synthetic speech ssml = "<speak> {} < /speak>" . format ( escaped lines . replace ( " \n " , ' \n < break time="2s"/>' ) ) Instantiates a client client = texttospeech .
- TranslateTextGlossaryConfig ( glossary = glossary ) parent = f "projects/ { project id } /locations/ { location } " result = client . translate text ( request = { "parent" : parent , "contents" : [ text ], "mime type" : "text/plain" , # mime types: text/plain, text/html "source language code" : source language code , "target language code" : target language code , "glossary config" : glossary config , } ) Extract translated text from API response return result . glossary translations [ 0 ] . translated text Node.js Before trying this sample, follow the Node.js setup instructions in the Cloud Translation quickstart using client libraries .
- Audio content written to file resources/example.mp3 After running the code, navigate into the resources directory from the hybrid glossaries directory.

### Translate text with Cloud Translation \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/translate/docs/advanced/translate-text-advance](https://docs.cloud.google.com/translate/docs/advanced/translate-text-advance)
- Source ID: `site-docs-root`
- Final score: 162
- Re-rank relevance: N/A

Evidence snippets:
- Before using any of the request data, make the following replacements: PROJECT NUMBER OR ID : the numeric or alphanumeric ID of your Google Cloud project HTTP method and URL: POST https://translation.googleapis.com/language/translate/v2 Request JSON body: { "q": "The Great Pyramid of Giza (also known as the Pyramid of Khufu or the Pyramid of Cheops) is the oldest and largest of the three pyramids in the Giza pyramid complex.", "source": "en", "target": "es", "format": "text" } To send your request, choose one of these options: curl Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- HTTP method and URL: POST https://translation.googleapis.com/v3/projects/ PROJECT NUMBER OR ID /locations/ LOCATION :translateText Request JSON body: { "source language code": " SOURCE LANGUAGE ", "target language code": " TARGET LANGUAGE ", "contents": " SOURCE TEXT ", "mime type": "text/plain", "transliteration config": { "enable transliteration": true} } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- For more information, see Set up authentication for a local development environment . import os Import the Google Cloud Translation library. from google.cloud import translate v3 PROJECT ID = os . environ . get ( "GOOGLE CLOUD PROJECT" ) def translate text ( text : str = "YOUR TEXT TO TRANSLATE" , source language code : str = "en-US" , target language code : str = "fr" , ) - > translate v3 .
- Supported MIME types: https://cloud.google.com/translate/docs/supported-formats mime type = "text/plain" Translate text from the source to the target language. response = client . translate text ( contents = [ text ], parent = parent , mime type = mime type , source language code = source language code , target language code = target language code , ) Display the translation for the text.

### Translate text with Cloud Translation \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/translate/docs/advanced/translating-text-v3](https://docs.cloud.google.com/translate/docs/advanced/translating-text-v3)
- Source ID: `site-docs-root`
- Final score: 162
- Re-rank relevance: N/A

Evidence snippets:
- Before using any of the request data, make the following replacements: PROJECT NUMBER OR ID : the numeric or alphanumeric ID of your Google Cloud project HTTP method and URL: POST https://translation.googleapis.com/language/translate/v2 Request JSON body: { "q": "The Great Pyramid of Giza (also known as the Pyramid of Khufu or the Pyramid of Cheops) is the oldest and largest of the three pyramids in the Giza pyramid complex.", "source": "en", "target": "es", "format": "text" } To send your request, choose one of these options: curl Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- HTTP method and URL: POST https://translation.googleapis.com/v3/projects/ PROJECT NUMBER OR ID /locations/ LOCATION :translateText Request JSON body: { "source language code": " SOURCE LANGUAGE ", "target language code": " TARGET LANGUAGE ", "contents": " SOURCE TEXT ", "mime type": "text/plain", "transliteration config": { "enable transliteration": true} } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- For more information, see Set up authentication for a local development environment . import os Import the Google Cloud Translation library. from google.cloud import translate v3 PROJECT ID = os . environ . get ( "GOOGLE CLOUD PROJECT" ) def translate text ( text : str = "YOUR TEXT TO TRANSLATE" , source language code : str = "en-US" , target language code : str = "fr" , ) - > translate v3 .
- Supported MIME types: https://cloud.google.com/translate/docs/supported-formats mime type = "text/plain" Translate text from the source to the target language. response = client . translate text ( contents = [ text ], parent = parent , mime type = mime type , source language code = source language code , target language code = target language code , ) Display the translation for the text.

### Translate text with Cloud Translation \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/translate/docs/basic/translate-text-basic](https://docs.cloud.google.com/translate/docs/basic/translate-text-basic)
- Source ID: `site-docs-root`
- Final score: 162
- Re-rank relevance: N/A

Evidence snippets:
- Before using any of the request data, make the following replacements: PROJECT NUMBER OR ID : the numeric or alphanumeric ID of your Google Cloud project HTTP method and URL: POST https://translation.googleapis.com/language/translate/v2 Request JSON body: { "q": "The Great Pyramid of Giza (also known as the Pyramid of Khufu or the Pyramid of Cheops) is the oldest and largest of the three pyramids in the Giza pyramid complex.", "source": "en", "target": "es", "format": "text" } To send your request, choose one of these options: curl Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- HTTP method and URL: POST https://translation.googleapis.com/v3/projects/ PROJECT NUMBER OR ID /locations/ LOCATION :translateText Request JSON body: { "source language code": " SOURCE LANGUAGE ", "target language code": " TARGET LANGUAGE ", "contents": " SOURCE TEXT ", "mime type": "text/plain", "transliteration config": { "enable transliteration": true} } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- For more information, see Set up authentication for a local development environment . import os Import the Google Cloud Translation library. from google.cloud import translate v3 PROJECT ID = os . environ . get ( "GOOGLE CLOUD PROJECT" ) def translate text ( text : str = "YOUR TEXT TO TRANSLATE" , source language code : str = "en-US" , target language code : str = "fr" , ) - > translate v3 .
- Supported MIME types: https://cloud.google.com/translate/docs/supported-formats mime type = "text/plain" Translate text from the source to the target language. response = client . translate text ( contents = [ text ], parent = parent , mime type = mime type , source language code = source language code , target language code = target language code , ) Display the translation for the text.

