---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:58:39.681Z"
product_name: "Text-to-Speech"
product_slug: "text-to-speech"
feature_name: "Latvia)"
feature_slug: "latvia"
latest_feature_date: "2021-04-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/text-to-speech/docs/voice-types"
  - "https://docs.cloud.google.com/text-to-speech/docs/list-voices-and-types"
  - "https://docs.cloud.google.com/text-to-speech/docs/voices"
keywords:
  - "latvia"
  - "text"
  - "speech"
  - "added"
  - "voice"
  - "lv"
  - "locale"
  - "latvian"
---

# Latvia)

Product: Text-to-Speech
Coverage: MEDIUM

## Step 02 Summary

Text-to-Speech added a supported voice for the lv-LV locale (Latvian, Latvia).

## Extended Definition

Text-to-Speech added a supported voice for the lv-LV locale (Latvian, Latvia).

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/text-to-speech/docs/voice-types](https://docs.cloud.google.com/text-to-speech/docs/voice-types)
- [https://docs.cloud.google.com/text-to-speech/docs/list-voices-and-types](https://docs.cloud.google.com/text-to-speech/docs/list-voices-and-types)
- [https://docs.cloud.google.com/text-to-speech/docs/voices](https://docs.cloud.google.com/text-to-speech/docs/voices)

## Supporting Pages

### "Supported voices and languages \_|\_ Cloud Text-to-Speech \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/text-to-speech/docs/voice-types](https://docs.cloud.google.com/text-to-speech/docs/voice-types)
- Source ID: `site-docs-reference-2`
- Final score: 131
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Replace PROJECT ID with your project ID. curl -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "x-goog-user-project: PROJECT ID " \ -H "Content-Type: application/json; charset=utf-8" \ "https://texttospeech.googleapis.com/v1/voices" The Cloud Text-to-Speech API returns a JSON-formatted result that looks similar to the following: { "voices": [ { "languageCodes": [ "es-ES" ], "name": "es-ES-Standard-A", "ssmlGender": "FEMALE", "naturalSampleRateHertz": 24000 }, { "languageCodes": [ "ja-JP" ], "name": "ja-JP-Standard-A", "ssmlGender": "FEMALE", "naturalSampleRateHertz": 22050 }, { "languageCodes": [ "pt-BR" ], "name": "pt-BR-Standard-A", "ssmlGender": "FEMALE", "naturalSampleRateHertz": 24000 }, ... ] } Go To learn how to install and use the client library for Cloud TTS, see Cloud TTS client libraries .
- For more information, see Set up authentication for a local development environment . / Demonstrates using the Text to Speech client to list the client's supported voices. @throws Exception on TextToSpeechClient Errors. / public static List<Voice> listAllSupportedVoices () throws Exception { // Instantiates a client try ( TextToSpeechClient textToSpeechClient = TextToSpeechClient . create ()) { // Builds the text to speech list voices request ListVoicesRequest request = ListVoicesRequest . getDefaultInstance (); // Performs the list voices request ListVoicesResponse response = textToSpeechClient . listVoices ( request ); List<Voice> voices = response . getVoicesList (); for ( Voice voice : voices ) { // Display the voice's name.
- TextToSpeechClient (); const [ result ] = await client . listVoices ({}); const voices = result . voices ; console . log ( 'Voices:' ); voices . forEach ( voice = > { console . log ( Name: ${ voice . name } ); console . log ( SSML Voice Gender: ${ voice . ssmlGender } ); console . log ( Natural Sample Rate Hertz: ${ voice . naturalSampleRateHertz } ); console . log ( ' Supported languages:' ); voice . languageCodes . forEach ( languageCode = > { console . log ( ${ languageCode } ); }); }); Python To learn how to install and use the client library for Cloud TTS, see Cloud TTS client libraries .
- For more information, see Set up authentication for a local development environment . def list voices (): """Lists the available voices.""" from google.cloud import texttospeech client = texttospeech .

### "Supported voices and languages \_|\_ Cloud Text-to-Speech \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/text-to-speech/docs/voices](https://docs.cloud.google.com/text-to-speech/docs/voices)
- Source ID: `site-docs-reference`
- Final score: 123
- Re-rank relevance: N/A

Evidence snippets:
- Replace PROJECT ID with your project ID. curl -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "x-goog-user-project: PROJECT ID " \ -H "Content-Type: application/json; charset=utf-8" \ "https://texttospeech.googleapis.com/v1/voices" The Cloud Text-to-Speech API returns a JSON-formatted result that looks similar to the following: { "voices": [ { "languageCodes": [ "es-ES" ], "name": "es-ES-Standard-A", "ssmlGender": "FEMALE", "naturalSampleRateHertz": 24000 }, { "languageCodes": [ "ja-JP" ], "name": "ja-JP-Standard-A", "ssmlGender": "FEMALE", "naturalSampleRateHertz": 22050 }, { "languageCodes": [ "pt-BR" ], "name": "pt-BR-Standard-A", "ssmlGender": "FEMALE", "naturalSampleRateHertz": 24000 }, ... ] } Go To learn how to install and use the client library for Cloud TTS, see Cloud TTS client libraries .
- For more information, see Set up authentication for a local development environment . / Demonstrates using the Text to Speech client to list the client's supported voices. @throws Exception on TextToSpeechClient Errors. / public static List<Voice> listAllSupportedVoices () throws Exception { // Instantiates a client try ( TextToSpeechClient textToSpeechClient = TextToSpeechClient . create ()) { // Builds the text to speech list voices request ListVoicesRequest request = ListVoicesRequest . getDefaultInstance (); // Performs the list voices request ListVoicesResponse response = textToSpeechClient . listVoices ( request ); List<Voice> voices = response . getVoicesList (); for ( Voice voice : voices ) { // Display the voice's name.
- TextToSpeechClient (); const [ result ] = await client . listVoices ({}); const voices = result . voices ; console . log ( 'Voices:' ); voices . forEach ( voice = > { console . log ( Name: ${ voice . name } ); console . log ( SSML Voice Gender: ${ voice . ssmlGender } ); console . log ( Natural Sample Rate Hertz: ${ voice . naturalSampleRateHertz } ); console . log ( ' Supported languages:' ); voice . languageCodes . forEach ( languageCode = > { console . log ( ${ languageCode } ); }); }); Python To learn how to install and use the client library for Cloud TTS, see Cloud TTS client libraries .
- For more information, see Set up authentication for a local development environment . def list voices (): """Lists the available voices.""" from google.cloud import texttospeech client = texttospeech .

### "Supported voices and languages \_|\_ Cloud Text-to-Speech \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/text-to-speech/docs/list-voices-and-types](https://docs.cloud.google.com/text-to-speech/docs/list-voices-and-types)
- Source ID: `site-docs-root`
- Final score: 123
- Re-rank relevance: N/A

Evidence snippets:
- Replace PROJECT ID with your project ID. curl -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "x-goog-user-project: PROJECT ID " \ -H "Content-Type: application/json; charset=utf-8" \ "https://texttospeech.googleapis.com/v1/voices" The Cloud Text-to-Speech API returns a JSON-formatted result that looks similar to the following: { "voices": [ { "languageCodes": [ "es-ES" ], "name": "es-ES-Standard-A", "ssmlGender": "FEMALE", "naturalSampleRateHertz": 24000 }, { "languageCodes": [ "ja-JP" ], "name": "ja-JP-Standard-A", "ssmlGender": "FEMALE", "naturalSampleRateHertz": 22050 }, { "languageCodes": [ "pt-BR" ], "name": "pt-BR-Standard-A", "ssmlGender": "FEMALE", "naturalSampleRateHertz": 24000 }, ... ] } Go To learn how to install and use the client library for Cloud TTS, see Cloud TTS client libraries .
- For more information, see Set up authentication for a local development environment . / Demonstrates using the Text to Speech client to list the client's supported voices. @throws Exception on TextToSpeechClient Errors. / public static List<Voice> listAllSupportedVoices () throws Exception { // Instantiates a client try ( TextToSpeechClient textToSpeechClient = TextToSpeechClient . create ()) { // Builds the text to speech list voices request ListVoicesRequest request = ListVoicesRequest . getDefaultInstance (); // Performs the list voices request ListVoicesResponse response = textToSpeechClient . listVoices ( request ); List<Voice> voices = response . getVoicesList (); for ( Voice voice : voices ) { // Display the voice's name.
- TextToSpeechClient (); const [ result ] = await client . listVoices ({}); const voices = result . voices ; console . log ( 'Voices:' ); voices . forEach ( voice = > { console . log ( Name: ${ voice . name } ); console . log ( SSML Voice Gender: ${ voice . ssmlGender } ); console . log ( Natural Sample Rate Hertz: ${ voice . naturalSampleRateHertz } ); console . log ( ' Supported languages:' ); voice . languageCodes . forEach ( languageCode = > { console . log ( ${ languageCode } ); }); }); Python To learn how to install and use the client library for Cloud TTS, see Cloud TTS client libraries .
- For more information, see Set up authentication for a local development environment . def list voices (): """Lists the available voices.""" from google.cloud import texttospeech client = texttospeech .

