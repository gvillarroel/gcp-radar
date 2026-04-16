---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:58:39.670Z"
product_name: "Text-to-Speech"
product_slug: "text-to-speech"
feature_name: "Gemini 2.5 Flash Text-to-Speech model"
feature_slug: "gemini-2-5-flash-text-to-speech-model"
latest_feature_date: "2025-09-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/text-to-speech/docs/gemini-tts"
  - "https://docs.cloud.google.com/text-to-speech/docs/create-dialogue-with-multispeakers"
  - "https://docs.cloud.google.com/text-to-speech/docs/endpoints"
keywords:
  - "gemini"
  - "flash"
  - "text"
  - "speech"
  - "model"
  - "tts"
  - "was"
  - "released"
---

# Gemini 2.5 Flash Text-to-Speech model

Product: Text-to-Speech
Coverage: MEDIUM

## Step 02 Summary

The Gemini-2.5 Flash TTS model was released in GA with support for 30 speakers in 80+ locales, granular control of style, accent, pace, and emotion via natural-language prompts, and single- and multi-speaker synthesis.

## Extended Definition

The Gemini-2.5 Flash TTS model was released in GA with support for 30 speakers in 80+ locales, granular control of style, accent, pace, and emotion via natural-language prompts, and single- and multi-speaker synthesis.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/text-to-speech/docs/gemini-tts](https://docs.cloud.google.com/text-to-speech/docs/gemini-tts)
- [https://docs.cloud.google.com/text-to-speech/docs/create-dialogue-with-multispeakers](https://docs.cloud.google.com/text-to-speech/docs/create-dialogue-with-multispeakers)
- [https://docs.cloud.google.com/text-to-speech/docs/endpoints](https://docs.cloud.google.com/text-to-speech/docs/endpoints)

## Supporting Pages

### Gemini-TTS \_|\_ Cloud Text-to-Speech \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/text-to-speech/docs/gemini-tts](https://docs.cloud.google.com/text-to-speech/docs/gemini-tts)
- Source ID: `site-docs-reference-2`
- Final score: 129
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- BLOCK LOW AND ABOVE )] ) ), ) Perform the text-to-speech request on the text input with the selected voice parameters and audio file type. response = client . synthesize speech ( request = request ) CURL PROJECT ID = YOUR PROJECT ID curl -X POST \ -H "Authorization: Bearer $( gcloud auth application-default print-access-token ) " \ -H "x-goog-user-project: $PROJECT ID " \ -H "Content-Type: application/json" \ -d '{ "input": { "prompt": "Say the following in a curious way", "text": "I am saying something that would otherwise be blocked by Gemini TTS." }, "voice": { "languageCode": "en-us", "name": "Kore", "modelName": "gemini-2.5-flash-tts" }, "audioConfig": { "audioEncoding": "LINEAR16" }, "advancedVoiceOptions": { "safetySettings": { "settings": { "category": "HARM CATEGORY HATE SPEECH", "threshold": "BLOCK LOW AND ABOVE", }, "settings": { "category": "HARM CATEGORY DANGEROUS CONTENT", "threshold": "BLOCK LOW AND ABOVE", }, "settings": { "category": "HARM CATEGORY HARASSMENT", "threshold": "BLOCK LOW AND ABOVE", }, "settings": { "category": "HARM CATEGORY SEXUALLY EXPLICIT", "threshold": "BLOCK LOW AND ABOVE", }, } }, }' \ "https://texttospeech.googleapis.com/v1/text:synthesize" \ jq -r '.audioContent' base64 -d ffplay - -autoexit Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- PROJECT ID = YOUR PROJECT ID curl -X POST \ -H "Authorization: Bearer $( gcloud auth application-default print-access-token ) " \ -H "x-goog-user-project: $PROJECT ID " \ -H "Content-Type: application/json" \ -d '{ "contents": { "role": "user", "parts": { "text": "Say the following as a conversation between friends: Sam: Hi Bob, how are you?\\nBob: I am doing well, and you?" } }, "generation config": { "speech config": { "language code": "en-in", "multi speaker voice config": { "speaker voice configs": [{ "speaker": "Sam", "voice config": { "prebuilt voice config": { "voice name": "Aoede" } } },{ "speaker": "Bob", "voice config": { "prebuilt voice config": { "voice name": "Algieba" } } }] } }, "temperature": 2.0, } }' \ https://aiplatform.googleapis.com/v1beta1/projects/ $PROJECT ID /locations/us-central1/publishers/google/models/gemini-2.5-flash-tts:generateContent \ jq -r '.candidates[0].content.parts[0].inlineData.data' \ base64 -d ffmpeg -f s16le -ar 24k -ac 1 -i - output speech.wav Perform streaming multi-speaker synthesis In Vertex AI API, unidirectional streaming is supported, that is, the client sends a single request and receives a stream of responses.
- For example using flask socketio, you could do the following from flask socketio import SocketIO, emit emit("audio", chunk.candidates[0].content.parts[0].inline data.data) socketio.sleep(0) final audio data += chunk . candidates [ 0 ] . content . parts [ 0 ] . inline data . data time to first audio = first chunk received time - request start time time to completion = datetime . datetime . now () - request start time print ( " \n " ) print ( f "Time to first audio: { time to first audio . total seconds () } seconds" ) print ( f "Time to completion: { time to completion . total seconds () } seconds" ) return final audio data audio data = synthesize ( prompt , "gemini-2.5-flash-tts" , "Kore" , "en-in" ) file name = 'output speech.wav' wave file ( file name , audio data ) Audio ( "output speech.wav" ) Perform speech synthesis in Media Studio Permissions required for this task To perform this task, you must have the following permissions : serviceusage.services.use You can use the Media Studio in the Google Google Cloud console to experiment with text-to-speech models.
- PROJECT ID = YOUR PROJECT ID curl -X POST \ -H "Authorization: Bearer $( gcloud auth application-default print-access-token ) " \ -H "x-goog-user-project: $PROJECT ID " \ -H "Content-Type: application/json" \ -d '{ "input": { "prompt": "Say the following as a conversation between friends.", "multiSpeakerMarkup": { "turns": [ { "speaker": "Sam", "text": "Hi Bob, how are you?" }, { "speaker": "Bob", "text": "I am doing well, and you?" } ] } }, "voice": { "languageCode": "en-us", "modelName": "gemini-2.5-flash-tts", "multiSpeakerVoiceConfig": { "speakerVoiceConfigs": [ { "speakerAlias": "Sam", "speakerId": "Kore" }, { "speakerAlias": "Bob", "speakerId": "Charon" } ] } }, "audioConfig": { "audioEncoding": "LINEAR16", "sampleRateHertz": 24000 } }' \ "https://texttospeech.googleapis.com/v1/text:synthesize" \ jq -r '.audioContent' base64 -d ffplay - -autoexit Use Vertex AI API Discover how to use Gemini-TTS models to synthesize single-speaker and multi-speaker speech using Vertex AI API.

### Gemini-TTS \_|\_ Cloud Text-to-Speech \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/text-to-speech/docs/create-dialogue-with-multispeakers](https://docs.cloud.google.com/text-to-speech/docs/create-dialogue-with-multispeakers)
- Source ID: `site-docs-reference-2`
- Final score: 119
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- BLOCK LOW AND ABOVE )] ) ), ) Perform the text-to-speech request on the text input with the selected voice parameters and audio file type. response = client . synthesize speech ( request = request ) CURL PROJECT ID = YOUR PROJECT ID curl -X POST \ -H "Authorization: Bearer $( gcloud auth application-default print-access-token ) " \ -H "x-goog-user-project: $PROJECT ID " \ -H "Content-Type: application/json" \ -d '{ "input": { "prompt": "Say the following in a curious way", "text": "I am saying something that would otherwise be blocked by Gemini TTS." }, "voice": { "languageCode": "en-us", "name": "Kore", "modelName": "gemini-2.5-flash-tts" }, "audioConfig": { "audioEncoding": "LINEAR16" }, "advancedVoiceOptions": { "safetySettings": { "settings": { "category": "HARM CATEGORY HATE SPEECH", "threshold": "BLOCK LOW AND ABOVE", }, "settings": { "category": "HARM CATEGORY DANGEROUS CONTENT", "threshold": "BLOCK LOW AND ABOVE", }, "settings": { "category": "HARM CATEGORY HARASSMENT", "threshold": "BLOCK LOW AND ABOVE", }, "settings": { "category": "HARM CATEGORY SEXUALLY EXPLICIT", "threshold": "BLOCK LOW AND ABOVE", }, } }, }' \ "https://texttospeech.googleapis.com/v1/text:synthesize" \ jq -r '.audioContent' base64 -d ffplay - -autoexit Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- PROJECT ID = YOUR PROJECT ID curl -X POST \ -H "Authorization: Bearer $( gcloud auth application-default print-access-token ) " \ -H "x-goog-user-project: $PROJECT ID " \ -H "Content-Type: application/json" \ -d '{ "contents": { "role": "user", "parts": { "text": "Say the following as a conversation between friends: Sam: Hi Bob, how are you?\\nBob: I am doing well, and you?" } }, "generation config": { "speech config": { "language code": "en-in", "multi speaker voice config": { "speaker voice configs": [{ "speaker": "Sam", "voice config": { "prebuilt voice config": { "voice name": "Aoede" } } },{ "speaker": "Bob", "voice config": { "prebuilt voice config": { "voice name": "Algieba" } } }] } }, "temperature": 2.0, } }' \ https://aiplatform.googleapis.com/v1beta1/projects/ $PROJECT ID /locations/us-central1/publishers/google/models/gemini-2.5-flash-tts:generateContent \ jq -r '.candidates[0].content.parts[0].inlineData.data' \ base64 -d ffmpeg -f s16le -ar 24k -ac 1 -i - output speech.wav Perform streaming multi-speaker synthesis In Vertex AI API, unidirectional streaming is supported, that is, the client sends a single request and receives a stream of responses.
- For example using flask socketio, you could do the following from flask socketio import SocketIO, emit emit("audio", chunk.candidates[0].content.parts[0].inline data.data) socketio.sleep(0) final audio data += chunk . candidates [ 0 ] . content . parts [ 0 ] . inline data . data time to first audio = first chunk received time - request start time time to completion = datetime . datetime . now () - request start time print ( " \n " ) print ( f "Time to first audio: { time to first audio . total seconds () } seconds" ) print ( f "Time to completion: { time to completion . total seconds () } seconds" ) return final audio data audio data = synthesize ( prompt , "gemini-2.5-flash-tts" , "Kore" , "en-in" ) file name = 'output speech.wav' wave file ( file name , audio data ) Audio ( "output speech.wav" ) Perform speech synthesis in Media Studio Permissions required for this task To perform this task, you must have the following permissions : serviceusage.services.use You can use the Media Studio in the Google Google Cloud console to experiment with text-to-speech models.
- PROJECT ID = YOUR PROJECT ID curl -X POST \ -H "Authorization: Bearer $( gcloud auth application-default print-access-token ) " \ -H "x-goog-user-project: $PROJECT ID " \ -H "Content-Type: application/json" \ -d '{ "input": { "prompt": "Say the following as a conversation between friends.", "multiSpeakerMarkup": { "turns": [ { "speaker": "Sam", "text": "Hi Bob, how are you?" }, { "speaker": "Bob", "text": "I am doing well, and you?" } ] } }, "voice": { "languageCode": "en-us", "modelName": "gemini-2.5-flash-tts", "multiSpeakerVoiceConfig": { "speakerVoiceConfigs": [ { "speakerAlias": "Sam", "speakerId": "Kore" }, { "speakerAlias": "Bob", "speakerId": "Charon" } ] } }, "audioConfig": { "audioEncoding": "LINEAR16", "sampleRateHertz": 24000 } }' \ "https://texttospeech.googleapis.com/v1/text:synthesize" \ jq -r '.audioContent' base64 -d ffplay - -autoexit Use Vertex AI API Discover how to use Gemini-TTS models to synthesize single-speaker and multi-speaker speech using Vertex AI API.

### "Specify a regional endpoint \_|\_ Cloud Text-to-Speech \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/text-to-speech/docs/endpoints](https://docs.cloud.google.com/text-to-speech/docs/endpoints)
- Source ID: `site-docs-root`
- Final score: 89
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Global Model name Global Gemini 2.5 Flash TTS ( gemini-2.5-flash-tts ) Gemini 2.5 Flash TTS ( gemini-2.5-pro-tts ) Chirp 3: HD voices Chirp 3: Instant Custom Voice United States Model name US multi-region Gemini 2.5 Flash TTS ( gemini-2.5-flash-tts ) Gemini 2.5 Flash TTS ( gemini-2.5-pro-tts ) Chirp 3: HD voices Chirp 3: Instant Custom Voice Europe EU multi-region London, United Kingdom (europe-west2) Frankfurt, Germany (europe-west3) Eemshaven, Netherlands (europe-west4) Gemini 2.5 Flash TTS ( gemini-2.5-flash-tts ) Gemini 2.5 Flash TTS ( gemini-2.5-pro-tts ) Chirp 3: HD voices Chirp 3: Instant Custom Voice Asia Pacific Tokyo, Japan (asia-northeast1) Sydney, Australia (australia-southeast1) Mumbai, India (asia-south1) Singapore (asia-southeast1) Seoul, Korea (asia-northeast3) Gemini 2.5 Flash TTS ( gemini-2.5-flash-tts ) Gemini 2.5 Flash TTS ( gemini-2.5-pro-tts ) Chirp 3: HD voices Chirp 3: Instant Custom Voice Use regional endpoints When you use a regional endpoint, make sure to include the matching us or eu location in the parent string.
- Protocol To perform text to speech synthesis using a regional endpoint, run the applicable command in the table below to configure the correct endpoint: Multi-region Endpoint override EU $ export CLOUD TTS ENDPOINT=https://eu-texttospeech.googleapis.com US $ export CLOUD TTS ENDPOINT=https://us-texttospeech.googleapis.com Only Neural2 voices are available from these endpoints: Single-region Endpoint override US Central1 $ export CLOUD TTS ENDPOINT=https://us-central1-texttospeech.googleapis.com The following code sample demonstrates how to send a synthesis request that keeps all data confined to a specified region.
- Home Documentation AI and ML Cloud Text-to-Speech Guides Send feedback Specify a regional endpoint Stay organized with collections Save and categorize content based on your preferences.
- Cloud Text-to-Speech offers global , us , eu multiregional and regional API endpoints.

