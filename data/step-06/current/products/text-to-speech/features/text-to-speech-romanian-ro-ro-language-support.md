---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:58:39.688Z"
product_name: "Text-to-Speech"
product_slug: "text-to-speech"
feature_name: "Text-to-Speech Romanian (ro-RO) language support"
feature_slug: "text-to-speech-romanian-ro-ro-language-support"
latest_feature_date: "2021-01-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/text-to-speech/docs/voice-types"
  - "https://docs.cloud.google.com/text-to-speech/docs/voices"
  - "https://docs.cloud.google.com/text-to-speech/docs/wavenet"
keywords:
  - "text"
  - "speech"
  - "romanian"
  - "ro"
  - "language"
  - "added"
---

# Text-to-Speech Romanian (ro-RO) language support

Product: Text-to-Speech
Coverage: MEDIUM

## Step 02 Summary

Text-to-Speech added support for the Romanian (ro-RO) language.

## Extended Definition

Text-to-Speech added support for the Romanian (ro-RO) language.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/text-to-speech/docs/voice-types](https://docs.cloud.google.com/text-to-speech/docs/voice-types)
- [https://docs.cloud.google.com/text-to-speech/docs/voices](https://docs.cloud.google.com/text-to-speech/docs/voices)
- [https://docs.cloud.google.com/text-to-speech/docs/wavenet](https://docs.cloud.google.com/text-to-speech/docs/wavenet)

## Supporting Pages

### "Supported voices and languages \_|\_ Cloud Text-to-Speech \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/text-to-speech/docs/voices](https://docs.cloud.google.com/text-to-speech/docs/voices)
- Source ID: `site-docs-reference`
- Final score: 76
- Re-rank relevance: N/A

Evidence snippets:
- Replace PROJECT ID with your project ID. curl -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "x-goog-user-project: PROJECT ID " \ -H "Content-Type: application/json; charset=utf-8" \ "https://texttospeech.googleapis.com/v1/voices" The Cloud Text-to-Speech API returns a JSON-formatted result that looks similar to the following: { "voices": [ { "languageCodes": [ "es-ES" ], "name": "es-ES-Standard-A", "ssmlGender": "FEMALE", "naturalSampleRateHertz": 24000 }, { "languageCodes": [ "ja-JP" ], "name": "ja-JP-Standard-A", "ssmlGender": "FEMALE", "naturalSampleRateHertz": 22050 }, { "languageCodes": [ "pt-BR" ], "name": "pt-BR-Standard-A", "ssmlGender": "FEMALE", "naturalSampleRateHertz": 24000 }, ... ] } Go To learn how to install and use the client library for Cloud TTS, see Cloud TTS client libraries .
- TextToSpeechClient (); const [ result ] = await client . listVoices ({}); const voices = result . voices ; console . log ( 'Voices:' ); voices . forEach ( voice = > { console . log ( Name: ${ voice . name } ); console . log ( SSML Voice Gender: ${ voice . ssmlGender } ); console . log ( Natural Sample Rate Hertz: ${ voice . naturalSampleRateHertz } ); console . log ( ' Supported languages:' ); voice . languageCodes . forEach ( languageCode = > { console . log ( ${ languageCode } ); }); }); Python To learn how to install and use the client library for Cloud TTS, see Cloud TTS client libraries .
- Home Documentation AI and ML Cloud Text-to-Speech Guides Send feedback Supported voices and languages Stay organized with collections Save and categorize content based on your preferences.
- Example: "en-US" for language code in voice . language codes : print ( f "Supported language: { language code } " ) ssml gender = texttospeech .

### "Supported voices and languages \_|\_ Cloud Text-to-Speech \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/text-to-speech/docs/voice-types](https://docs.cloud.google.com/text-to-speech/docs/voice-types)
- Source ID: `site-docs-reference-2`
- Final score: 76
- Re-rank relevance: N/A

Evidence snippets:
- Replace PROJECT ID with your project ID. curl -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "x-goog-user-project: PROJECT ID " \ -H "Content-Type: application/json; charset=utf-8" \ "https://texttospeech.googleapis.com/v1/voices" The Cloud Text-to-Speech API returns a JSON-formatted result that looks similar to the following: { "voices": [ { "languageCodes": [ "es-ES" ], "name": "es-ES-Standard-A", "ssmlGender": "FEMALE", "naturalSampleRateHertz": 24000 }, { "languageCodes": [ "ja-JP" ], "name": "ja-JP-Standard-A", "ssmlGender": "FEMALE", "naturalSampleRateHertz": 22050 }, { "languageCodes": [ "pt-BR" ], "name": "pt-BR-Standard-A", "ssmlGender": "FEMALE", "naturalSampleRateHertz": 24000 }, ... ] } Go To learn how to install and use the client library for Cloud TTS, see Cloud TTS client libraries .
- TextToSpeechClient (); const [ result ] = await client . listVoices ({}); const voices = result . voices ; console . log ( 'Voices:' ); voices . forEach ( voice = > { console . log ( Name: ${ voice . name } ); console . log ( SSML Voice Gender: ${ voice . ssmlGender } ); console . log ( Natural Sample Rate Hertz: ${ voice . naturalSampleRateHertz } ); console . log ( ' Supported languages:' ); voice . languageCodes . forEach ( languageCode = > { console . log ( ${ languageCode } ); }); }); Python To learn how to install and use the client library for Cloud TTS, see Cloud TTS client libraries .
- Home Documentation AI and ML Cloud Text-to-Speech Guides Send feedback Supported voices and languages Stay organized with collections Save and categorize content based on your preferences.
- Example: "en-US" for language code in voice . language codes : print ( f "Supported language: { language code } " ) ssml gender = texttospeech .

### "Supported voices and languages \_|\_ Cloud Text-to-Speech \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/text-to-speech/docs/wavenet](https://docs.cloud.google.com/text-to-speech/docs/wavenet)
- Source ID: `site-docs-reference-2`
- Final score: 76
- Re-rank relevance: N/A

Evidence snippets:
- Replace PROJECT ID with your project ID. curl -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "x-goog-user-project: PROJECT ID " \ -H "Content-Type: application/json; charset=utf-8" \ "https://texttospeech.googleapis.com/v1/voices" The Cloud Text-to-Speech API returns a JSON-formatted result that looks similar to the following: { "voices": [ { "languageCodes": [ "es-ES" ], "name": "es-ES-Standard-A", "ssmlGender": "FEMALE", "naturalSampleRateHertz": 24000 }, { "languageCodes": [ "ja-JP" ], "name": "ja-JP-Standard-A", "ssmlGender": "FEMALE", "naturalSampleRateHertz": 22050 }, { "languageCodes": [ "pt-BR" ], "name": "pt-BR-Standard-A", "ssmlGender": "FEMALE", "naturalSampleRateHertz": 24000 }, ... ] } Go To learn how to install and use the client library for Cloud TTS, see Cloud TTS client libraries .
- TextToSpeechClient (); const [ result ] = await client . listVoices ({}); const voices = result . voices ; console . log ( 'Voices:' ); voices . forEach ( voice = > { console . log ( Name: ${ voice . name } ); console . log ( SSML Voice Gender: ${ voice . ssmlGender } ); console . log ( Natural Sample Rate Hertz: ${ voice . naturalSampleRateHertz } ); console . log ( ' Supported languages:' ); voice . languageCodes . forEach ( languageCode = > { console . log ( ${ languageCode } ); }); }); Python To learn how to install and use the client library for Cloud TTS, see Cloud TTS client libraries .
- Home Documentation AI and ML Cloud Text-to-Speech Guides Send feedback Supported voices and languages Stay organized with collections Save and categorize content based on your preferences.
- Example: "en-US" for language code in voice . language codes : print ( f "Supported language: { language code } " ) ssml gender = texttospeech .

