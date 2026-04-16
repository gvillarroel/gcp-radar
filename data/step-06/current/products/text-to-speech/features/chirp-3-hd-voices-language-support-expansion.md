---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:58:39.668Z"
product_name: "Text-to-Speech"
product_slug: "text-to-speech"
feature_name: "Chirp 3 HD Voices language support expansion"
feature_slug: "chirp-3-hd-voices-language-support-expansion"
latest_feature_date: "2025-11-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/text-to-speech/docs/chirp3-hd"
  - "https://docs.cloud.google.com/text-to-speech/docs/list-voices-and-types"
  - "https://docs.cloud.google.com/text-to-speech/docs/voices"
keywords:
  - "chirp"
  - "hd"
  - "voices"
  - "language"
  - "expansion"
  - "now"
  - "speech"
  - "synthesis"
---

# Chirp 3 HD Voices language support expansion

Product: Text-to-Speech
Coverage: MEDIUM

## Step 02 Summary

Chirp 3 HD voices now support speech synthesis in additional languages, including bg-BG, cs-CZ, et-EE, el-GR, he-IL, hr-HR, hu-HU, lt-LT, lv-LV, ro-RO, sk-SK, sl-SI, and sr-RS.

## Extended Definition

Chirp 3 HD voices now support speech synthesis in additional languages, including bg-BG, cs-CZ, et-EE, el-GR, he-IL, hr-HR, hu-HU, lt-LT, lv-LV, ro-RO, sk-SK, sl-SI, and sr-RS.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/text-to-speech/docs/chirp3-hd](https://docs.cloud.google.com/text-to-speech/docs/chirp3-hd)
- [https://docs.cloud.google.com/text-to-speech/docs/list-voices-and-types](https://docs.cloud.google.com/text-to-speech/docs/list-voices-and-types)
- [https://docs.cloud.google.com/text-to-speech/docs/voices](https://docs.cloud.google.com/text-to-speech/docs/voices)

## Supporting Pages

### Chirp 3: HD voices \_|\_ Cloud Text-to-Speech \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/text-to-speech/docs/chirp3-hd](https://docs.cloud.google.com/text-to-speech/docs/chirp3-hd)
- Source ID: `site-docs-reference-2`
- Final score: 165
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Language BCP-47 Code Arabic (Generic) ar-XA Bengali (India) bn-IN Bulgarian (Bulgaria) bg-BG Chinese (Hong Kong) yue-HK Croatian (Croatia) hr-HR Czech (Czech Republic) cs-CZ Danish (Denmark) da-DK Dutch (Belgium) nl-BE Dutch (Netherlands) nl-NL English (Australia) en-AU English (India) en-IN English (United Kingdom) en-GB English (United States) en-US Estonian (Estonia) et-EE Finnish (Finland) fi-FI French (Canada) fr-CA French (France) fr-FR German (Germany) de-DE Greek (Greece) el-GR Gujarati (India) gu-IN Hebrew (Israel) he-IL Hindi (India) hi-IN Hungarian (Hungary) hu-HU Indonesian (Indonesia) id-ID Italian (Italy) it-IT Japanese (Japan) ja-JP Kannada (India) kn-IN Korean (South Korea) ko-KR Latvian (Latvia) lv-LV Lithuanian (Lithuania) lt-LT Malayalam (India) ml-IN Mandarin Chinese (China) cmn-CN Marathi (India) mr-IN Norwegian Bokmål (Norway) nb-NO Polish (Poland) pl-PL Portuguese (Brazil) pt-BR Punjabi (India) pa-IN Romanian (Romania) ro-RO Russian (Russia) ru-RU Serbian (Cyrillic) sr-RS Slovak (Slovakia) sk-SK Slovenian (Slovenia) sl-SI Spanish (Spain) es-ES Spanish (United States) es-US Swahili (Kenya) sw-KE Swedish (Sweden) sv-SE Tamil (India) ta-IN Telugu (India) te-IN Thai (Thailand) th-TH Turkish (Turkey) tr-TR Ukrainian (Ukraine) uk-UA Urdu (India) ur-IN Vietnamese (Vietnam) vi-VN Regional availability Chirp 3: HD voices are available in the following Google Cloud regions respectively: Google Cloud Zone Launch Readiness global GA us GA eu GA asia-southeast1 GA europe-west2 GA asia-northeast1 GA Supported output formats The default response format is LINEAR16, but other formats which are supported include: API Method Format streaming ALAW, MULAW, OGG OPUS and PCM batch ALAW, MULAW, MP3, OGG OPUS and PCM Use Chirp 3: HD voices Discover how to use Chirp 3: HD voices to synthesize speech.
- Sample SynthesizeSpeechRequest using pause control: { "audio config" : { "audio encoding" : "LINEAR16" , }, "input" : { "markup" : "Let me take a look, [pause long] yes, I see it." , }, "voice" : { "language code" : "en-US" , "name" : "en-us-Chirp3-HD-Leda" , } } Sample StreamingSynthesisInput using pause control: { "markup" : "Let me take a look, [pause long] yes, I see it." , } Pause control audio samples: Markup input Output "Let me take a look, yes, I see it." Your browser doesn't support the audio element. "Let me take a look, [pause long] yes, I see it." Your browser doesn't support the audio element.
- VoiceSelectionParams ( language code = "en-US" , name = "en-US-Chirp3-HD-Charon" , ) audio config = texttospeech .
- Sample SynthesizeSpeechRequest using custom pronunciations: { "audio config" : { "audio encoding" : "LINEAR16" , }, "input" : { "text" : "There is a dog in the boat" , "custom pronunciations" : { "phrase" : "dog" , "phonetic encoding" : "PHONETIC ENCODING X SAMPA" , "pronunciation" : "\"k{t" , } }, "voice" : { "language code" : "en-US" , "name" : "en-us-Chirp3-HD-Leda" , } } Sample StreamingSynthesizeConfig using custom pronunciations: { "streaming audio config" : { "audio encoding" : "LINEAR16" , }, "voice" : { "language code" : "en-US" , "name" : "en-us-Chirp3-HD-Leda" , } "custom pronunciations" : { "phrase" : "dog" , "phonetic encoding" : "PHONETIC ENCODING X SAMPA" , "pronunciation" : "\"k{t" , } } Custom pronunciations audio samples: Custom pronunciations applied Output None Your browser doesn't support the audio element. "dog" pronounced as ""k{t" Your browser doesn't support the audio element.

### "Supported voices and languages \_|\_ Cloud Text-to-Speech \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/text-to-speech/docs/voices](https://docs.cloud.google.com/text-to-speech/docs/voices)
- Source ID: `site-docs-reference`
- Final score: 161
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Replace PROJECT ID with your project ID. curl -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "x-goog-user-project: PROJECT ID " \ -H "Content-Type: application/json; charset=utf-8" \ "https://texttospeech.googleapis.com/v1/voices" The Cloud Text-to-Speech API returns a JSON-formatted result that looks similar to the following: { "voices": [ { "languageCodes": [ "es-ES" ], "name": "es-ES-Standard-A", "ssmlGender": "FEMALE", "naturalSampleRateHertz": 24000 }, { "languageCodes": [ "ja-JP" ], "name": "ja-JP-Standard-A", "ssmlGender": "FEMALE", "naturalSampleRateHertz": 22050 }, { "languageCodes": [ "pt-BR" ], "name": "pt-BR-Standard-A", "ssmlGender": "FEMALE", "naturalSampleRateHertz": 24000 }, ... ] } Go To learn how to install and use the client library for Cloud TTS, see Cloud TTS client libraries .
- TextToSpeechClient (); const [ result ] = await client . listVoices ({}); const voices = result . voices ; console . log ( 'Voices:' ); voices . forEach ( voice = > { console . log ( Name: ${ voice . name } ); console . log ( SSML Voice Gender: ${ voice . ssmlGender } ); console . log ( Natural Sample Rate Hertz: ${ voice . naturalSampleRateHertz } ); console . log ( ' Supported languages:' ); voice . languageCodes . forEach ( languageCode = > { console . log ( ${ languageCode } ); }); }); Python To learn how to install and use the client library for Cloud TTS, see Cloud TTS client libraries .
- Home Documentation AI and ML Cloud Text-to-Speech Guides Send feedback Supported voices and languages Stay organized with collections Save and categorize content based on your preferences.
- To use these voices to create synthetic speech, see how to create Long audio or Bidirectional streaming synthesis requests and use the VoiceSelectionParams field in your API request.

### "Supported voices and languages \_|\_ Cloud Text-to-Speech \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/text-to-speech/docs/list-voices-and-types](https://docs.cloud.google.com/text-to-speech/docs/list-voices-and-types)
- Source ID: `site-docs-root`
- Final score: 161
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Replace PROJECT ID with your project ID. curl -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "x-goog-user-project: PROJECT ID " \ -H "Content-Type: application/json; charset=utf-8" \ "https://texttospeech.googleapis.com/v1/voices" The Cloud Text-to-Speech API returns a JSON-formatted result that looks similar to the following: { "voices": [ { "languageCodes": [ "es-ES" ], "name": "es-ES-Standard-A", "ssmlGender": "FEMALE", "naturalSampleRateHertz": 24000 }, { "languageCodes": [ "ja-JP" ], "name": "ja-JP-Standard-A", "ssmlGender": "FEMALE", "naturalSampleRateHertz": 22050 }, { "languageCodes": [ "pt-BR" ], "name": "pt-BR-Standard-A", "ssmlGender": "FEMALE", "naturalSampleRateHertz": 24000 }, ... ] } Go To learn how to install and use the client library for Cloud TTS, see Cloud TTS client libraries .
- TextToSpeechClient (); const [ result ] = await client . listVoices ({}); const voices = result . voices ; console . log ( 'Voices:' ); voices . forEach ( voice = > { console . log ( Name: ${ voice . name } ); console . log ( SSML Voice Gender: ${ voice . ssmlGender } ); console . log ( Natural Sample Rate Hertz: ${ voice . naturalSampleRateHertz } ); console . log ( ' Supported languages:' ); voice . languageCodes . forEach ( languageCode = > { console . log ( ${ languageCode } ); }); }); Python To learn how to install and use the client library for Cloud TTS, see Cloud TTS client libraries .
- Home Documentation AI and ML Cloud Text-to-Speech Guides Send feedback Supported voices and languages Stay organized with collections Save and categorize content based on your preferences.
- To use these voices to create synthetic speech, see how to create Long audio or Bidirectional streaming synthesis requests and use the VoiceSelectionParams field in your API request.

