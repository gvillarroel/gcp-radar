---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:58:39.686Z"
product_name: "Text-to-Speech"
product_slug: "text-to-speech"
feature_name: "Text-to-Speech voice support for sr-RS (Serbian"
feature_slug: "text-to-speech-voice-support-for-sr-rs-serbian"
latest_feature_date: "2021-04-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/text-to-speech/docs/chirp3-hd"
  - "https://docs.cloud.google.com/text-to-speech/docs/voice-types"
  - "https://docs.cloud.google.com/text-to-speech/docs/voices"
keywords:
  - "text"
  - "speech"
  - "voice"
  - "sr"
  - "rs"
  - "serbian"
  - "added"
  - "locale"
---

# Text-to-Speech voice support for sr-RS (Serbian

Product: Text-to-Speech
Coverage: MEDIUM

## Step 02 Summary

Text-to-Speech added a supported voice for the sr-RS locale (Serbian, Cyrillic).

## Extended Definition

Text-to-Speech added a supported voice for the sr-RS locale (Serbian, Cyrillic).

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/text-to-speech/docs/chirp3-hd](https://docs.cloud.google.com/text-to-speech/docs/chirp3-hd)
- [https://docs.cloud.google.com/text-to-speech/docs/voice-types](https://docs.cloud.google.com/text-to-speech/docs/voice-types)
- [https://docs.cloud.google.com/text-to-speech/docs/voices](https://docs.cloud.google.com/text-to-speech/docs/voices)

## Supporting Pages

### Chirp 3: HD voices \_|\_ Cloud Text-to-Speech \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/text-to-speech/docs/chirp3-hd](https://docs.cloud.google.com/text-to-speech/docs/chirp3-hd)
- Source ID: `site-docs-reference-2`
- Final score: 99
- Re-rank relevance: N/A

Evidence snippets:
- Language BCP-47 Code Arabic (Generic) ar-XA Bengali (India) bn-IN Bulgarian (Bulgaria) bg-BG Chinese (Hong Kong) yue-HK Croatian (Croatia) hr-HR Czech (Czech Republic) cs-CZ Danish (Denmark) da-DK Dutch (Belgium) nl-BE Dutch (Netherlands) nl-NL English (Australia) en-AU English (India) en-IN English (United Kingdom) en-GB English (United States) en-US Estonian (Estonia) et-EE Finnish (Finland) fi-FI French (Canada) fr-CA French (France) fr-FR German (Germany) de-DE Greek (Greece) el-GR Gujarati (India) gu-IN Hebrew (Israel) he-IL Hindi (India) hi-IN Hungarian (Hungary) hu-HU Indonesian (Indonesia) id-ID Italian (Italy) it-IT Japanese (Japan) ja-JP Kannada (India) kn-IN Korean (South Korea) ko-KR Latvian (Latvia) lv-LV Lithuanian (Lithuania) lt-LT Malayalam (India) ml-IN Mandarin Chinese (China) cmn-CN Marathi (India) mr-IN Norwegian Bokmål (Norway) nb-NO Polish (Poland) pl-PL Portuguese (Brazil) pt-BR Punjabi (India) pa-IN Romanian (Romania) ro-RO Russian (Russia) ru-RU Serbian (Cyrillic) sr-RS Slovak (Slovakia) sk-SK Slovenian (Slovenia) sl-SI Spanish (Spain) es-ES Spanish (United States) es-US Swahili (Kenya) sw-KE Swedish (Sweden) sv-SE Tamil (India) ta-IN Telugu (India) te-IN Thai (Thailand) th-TH Turkish (Turkey) tr-TR Ukrainian (Ukraine) uk-UA Urdu (India) ur-IN Vietnamese (Vietnam) vi-VN Regional availability Chirp 3: HD voices are available in the following Google Cloud regions respectively: Google Cloud Zone Launch Readiness global GA us GA eu GA asia-southeast1 GA europe-west2 GA asia-northeast1 GA Supported output formats The default response format is LINEAR16, but other formats which are supported include: API Method Format streaming ALAW, MULAW, OGG OPUS and PCM batch ALAW, MULAW, MP3, OGG OPUS and PCM Use Chirp 3: HD voices Discover how to use Chirp 3: HD voices to synthesize speech.
- Sample SynthesizeSpeechRequest using custom pronunciations: { "audio config" : { "audio encoding" : "LINEAR16" , }, "input" : { "text" : "There is a dog in the boat" , "custom pronunciations" : { "phrase" : "dog" , "phonetic encoding" : "PHONETIC ENCODING X SAMPA" , "pronunciation" : "\"k{t" , } }, "voice" : { "language code" : "en-US" , "name" : "en-us-Chirp3-HD-Leda" , } } Sample StreamingSynthesizeConfig using custom pronunciations: { "streaming audio config" : { "audio encoding" : "LINEAR16" , }, "voice" : { "language code" : "en-US" , "name" : "en-us-Chirp3-HD-Leda" , } "custom pronunciations" : { "phrase" : "dog" , "phonetic encoding" : "PHONETIC ENCODING X SAMPA" , "pronunciation" : "\"k{t" , } } Custom pronunciations audio samples: Custom pronunciations applied Output None Your browser doesn't support the audio element. "dog" pronounced as ""k{t" Your browser doesn't support the audio element.
- MP3 ) response = client . synthesize speech ( input = input text , voice = voice , audio config = audio config , ) The response's audio content is binary. with open ( "output.mp3" , "wb" ) as out : out . write ( response . audio content ) print ( 'Audio content written to file "output.mp3"' ) Scripting and prompting tips Creating engaging and natural-sounding audio from text requires understanding the nuances of spoken language and translating them into script form.
- Home Documentation AI and ML Cloud Text-to-Speech Guides Send feedback Chirp 3: HD voices Stay organized with collections Save and categorize content based on your preferences.

### "Supported voices and languages \_|\_ Cloud Text-to-Speech \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/text-to-speech/docs/voices](https://docs.cloud.google.com/text-to-speech/docs/voices)
- Source ID: `site-docs-reference`
- Final score: 97
- Re-rank relevance: N/A

Evidence snippets:
- Replace PROJECT ID with your project ID. curl -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "x-goog-user-project: PROJECT ID " \ -H "Content-Type: application/json; charset=utf-8" \ "https://texttospeech.googleapis.com/v1/voices" The Cloud Text-to-Speech API returns a JSON-formatted result that looks similar to the following: { "voices": [ { "languageCodes": [ "es-ES" ], "name": "es-ES-Standard-A", "ssmlGender": "FEMALE", "naturalSampleRateHertz": 24000 }, { "languageCodes": [ "ja-JP" ], "name": "ja-JP-Standard-A", "ssmlGender": "FEMALE", "naturalSampleRateHertz": 22050 }, { "languageCodes": [ "pt-BR" ], "name": "pt-BR-Standard-A", "ssmlGender": "FEMALE", "naturalSampleRateHertz": 24000 }, ... ] } Go To learn how to install and use the client library for Cloud TTS, see Cloud TTS client libraries .
- For more information, see Set up authentication for a local development environment . / Demonstrates using the Text to Speech client to list the client's supported voices. @throws Exception on TextToSpeechClient Errors. / public static List<Voice> listAllSupportedVoices () throws Exception { // Instantiates a client try ( TextToSpeechClient textToSpeechClient = TextToSpeechClient . create ()) { // Builds the text to speech list voices request ListVoicesRequest request = ListVoicesRequest . getDefaultInstance (); // Performs the list voices request ListVoicesResponse response = textToSpeechClient . listVoices ( request ); List<Voice> voices = response . getVoicesList (); for ( Voice voice : voices ) { // Display the voice's name.
- TextToSpeechClient (); const [ result ] = await client . listVoices ({}); const voices = result . voices ; console . log ( 'Voices:' ); voices . forEach ( voice = > { console . log ( Name: ${ voice . name } ); console . log ( SSML Voice Gender: ${ voice . ssmlGender } ); console . log ( Natural Sample Rate Hertz: ${ voice . naturalSampleRateHertz } ); console . log ( ' Supported languages:' ); voice . languageCodes . forEach ( languageCode = > { console . log ( ${ languageCode } ); }); }); Python To learn how to install and use the client library for Cloud TTS, see Cloud TTS client libraries .
- For more information, see Set up authentication for a local development environment . def list voices (): """Lists the available voices.""" from google.cloud import texttospeech client = texttospeech .

### "Supported voices and languages \_|\_ Cloud Text-to-Speech \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/text-to-speech/docs/voice-types](https://docs.cloud.google.com/text-to-speech/docs/voice-types)
- Source ID: `site-docs-reference-2`
- Final score: 97
- Re-rank relevance: N/A

Evidence snippets:
- Replace PROJECT ID with your project ID. curl -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "x-goog-user-project: PROJECT ID " \ -H "Content-Type: application/json; charset=utf-8" \ "https://texttospeech.googleapis.com/v1/voices" The Cloud Text-to-Speech API returns a JSON-formatted result that looks similar to the following: { "voices": [ { "languageCodes": [ "es-ES" ], "name": "es-ES-Standard-A", "ssmlGender": "FEMALE", "naturalSampleRateHertz": 24000 }, { "languageCodes": [ "ja-JP" ], "name": "ja-JP-Standard-A", "ssmlGender": "FEMALE", "naturalSampleRateHertz": 22050 }, { "languageCodes": [ "pt-BR" ], "name": "pt-BR-Standard-A", "ssmlGender": "FEMALE", "naturalSampleRateHertz": 24000 }, ... ] } Go To learn how to install and use the client library for Cloud TTS, see Cloud TTS client libraries .
- For more information, see Set up authentication for a local development environment . / Demonstrates using the Text to Speech client to list the client's supported voices. @throws Exception on TextToSpeechClient Errors. / public static List<Voice> listAllSupportedVoices () throws Exception { // Instantiates a client try ( TextToSpeechClient textToSpeechClient = TextToSpeechClient . create ()) { // Builds the text to speech list voices request ListVoicesRequest request = ListVoicesRequest . getDefaultInstance (); // Performs the list voices request ListVoicesResponse response = textToSpeechClient . listVoices ( request ); List<Voice> voices = response . getVoicesList (); for ( Voice voice : voices ) { // Display the voice's name.
- TextToSpeechClient (); const [ result ] = await client . listVoices ({}); const voices = result . voices ; console . log ( 'Voices:' ); voices . forEach ( voice = > { console . log ( Name: ${ voice . name } ); console . log ( SSML Voice Gender: ${ voice . ssmlGender } ); console . log ( Natural Sample Rate Hertz: ${ voice . naturalSampleRateHertz } ); console . log ( ' Supported languages:' ); voice . languageCodes . forEach ( languageCode = > { console . log ( ${ languageCode } ); }); }); Python To learn how to install and use the client library for Cloud TTS, see Cloud TTS client libraries .
- For more information, see Set up authentication for a local development environment . def list voices (): """Lists the available voices.""" from google.cloud import texttospeech client = texttospeech .

