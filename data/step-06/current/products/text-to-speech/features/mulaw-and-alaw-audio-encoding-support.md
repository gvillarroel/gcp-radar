---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:58:39.687Z"
product_name: "Text-to-Speech"
product_slug: "text-to-speech"
feature_name: "MULAW and ALAW audio encoding support"
feature_slug: "mulaw-and-alaw-audio-encoding-support"
latest_feature_date: "2021-04-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-texttospeech/latest/com.google.cloud.texttospeech.v1.AudioEncoding"
  - "https://docs.cloud.google.com/text-to-speech/docs/create-dialogue-with-multispeakers"
  - "https://docs.cloud.google.com/text-to-speech/docs/gemini-tts"
keywords:
  - "mulaw"
  - "alaw"
  - "audio"
  - "encoding"
  - "text"
  - "speech"
  - "now"
  - "supports"
---

# MULAW and ALAW audio encoding support

Product: Text-to-Speech
Coverage: MEDIUM

## Step 02 Summary

Text-to-Speech now supports the MULAW and ALAW audio encoding formats.

## Extended Definition

Text-to-Speech now supports the MULAW and ALAW audio encoding formats.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/java/docs/reference/google-cloud-texttospeech/latest/com.google.cloud.texttospeech.v1.AudioEncoding](https://docs.cloud.google.com/java/docs/reference/google-cloud-texttospeech/latest/com.google.cloud.texttospeech.v1.AudioEncoding)
- [https://docs.cloud.google.com/text-to-speech/docs/create-dialogue-with-multispeakers](https://docs.cloud.google.com/text-to-speech/docs/create-dialogue-with-multispeakers)
- [https://docs.cloud.google.com/text-to-speech/docs/gemini-tts](https://docs.cloud.google.com/text-to-speech/docs/gemini-tts)

## Supporting Pages

### "Enum AudioEncoding (2.89.0) \_|\_ Java client libraries \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-texttospeech/latest/com.google.cloud.texttospeech.v1.AudioEncoding](https://docs.cloud.google.com/java/docs/reference/google-cloud-texttospeech/latest/com.google.cloud.texttospeech.v1.AudioEncoding)
- Source ID: `site-java-reference`
- Final score: 171
- Re-rank relevance: N/A

Evidence snippets:
- Protobuf enum google.cloud.texttospeech.v1.AudioEncoding Implements ProtocolMessageEnum Inherited Members Enum.<T>valueOf(Class<T>,String) Enum.clone() Enum.compareTo(E) Enum.equals(Object) Enum.finalize() Enum.getDeclaringClass() Enum.hashCode() Enum.name() Enum.ordinal() Enum.toString() Object.getClass() Object.notify() Object.notifyAll() Object.wait() Object.wait(long) Object.wait(long,int) Static Fields Name Description ALAW 8-bit samples that compand 14-bit audio samples using G.711 PCMU/A-law.
- ALAW = 6; AUDIO ENCODING UNSPECIFIED Not specified.
- 2.89.0 (latest) 2.88.0 2.86.0 2.84.0 2.83.0 2.81.0 2.79.0 2.77.0 2.76.0 2.75.0 2.74.0 2.73.0 2.71.0 2.69.0 2.68.0 2.65.0 2.64.0 2.63.0 2.61.0 2.60.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.52.0 2.50.0 2.49.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.25.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.9 2.3.0 2.2.1 2.1.5 public enum AudioEncoding extends Enum<AudioEncoding> implements ProtocolMessageEnum Configuration to set up audio encoder.
- Home Documentation Developer tools Java Client libraries Send feedback Enum AudioEncoding (2.89.0) Stay organized with collections Save and categorize content based on your preferences.

### Gemini-TTS \_|\_ Cloud Text-to-Speech \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/text-to-speech/docs/create-dialogue-with-multispeakers](https://docs.cloud.google.com/text-to-speech/docs/create-dialogue-with-multispeakers)
- Source ID: `site-docs-reference-2`
- Final score: 149
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- BLOCK LOW AND ABOVE )] ) ), ) Perform the text-to-speech request on the text input with the selected voice parameters and audio file type. response = client . synthesize speech ( request = request ) CURL PROJECT ID = YOUR PROJECT ID curl -X POST \ -H "Authorization: Bearer $( gcloud auth application-default print-access-token ) " \ -H "x-goog-user-project: $PROJECT ID " \ -H "Content-Type: application/json" \ -d '{ "input": { "prompt": "Say the following in a curious way", "text": "I am saying something that would otherwise be blocked by Gemini TTS." }, "voice": { "languageCode": "en-us", "name": "Kore", "modelName": "gemini-2.5-flash-tts" }, "audioConfig": { "audioEncoding": "LINEAR16" }, "advancedVoiceOptions": { "safetySettings": { "settings": { "category": "HARM CATEGORY HATE SPEECH", "threshold": "BLOCK LOW AND ABOVE", }, "settings": { "category": "HARM CATEGORY DANGEROUS CONTENT", "threshold": "BLOCK LOW AND ABOVE", }, "settings": { "category": "HARM CATEGORY HARASSMENT", "threshold": "BLOCK LOW AND ABOVE", }, "settings": { "category": "HARM CATEGORY SEXUALLY EXPLICIT", "threshold": "BLOCK LOW AND ABOVE", }, } }, }' \ "https://texttospeech.googleapis.com/v1/text:synthesize" \ jq -r '.audioContent' base64 -d ffplay - -autoexit Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- PROJECT ID = YOUR PROJECT ID curl -X POST \ -H "Authorization: Bearer $( gcloud auth application-default print-access-token ) " \ -H "x-goog-user-project: $PROJECT ID " \ -H "Content-Type: application/json" \ -d '{ "input": { "prompt": "Say the following as a conversation between friends.", "multiSpeakerMarkup": { "turns": [ { "speaker": "Sam", "text": "Hi Bob, how are you?" }, { "speaker": "Bob", "text": "I am doing well, and you?" } ] } }, "voice": { "languageCode": "en-us", "modelName": "gemini-2.5-flash-tts", "multiSpeakerVoiceConfig": { "speakerVoiceConfigs": [ { "speakerAlias": "Sam", "speakerId": "Kore" }, { "speakerAlias": "Bob", "speakerId": "Charon" } ] } }, "audioConfig": { "audioEncoding": "LINEAR16", "sampleRateHertz": 24000 } }' \ "https://texttospeech.googleapis.com/v1/text:synthesize" \ jq -r '.audioContent' base64 -d ffplay - -autoexit Use Vertex AI API Discover how to use Gemini-TTS models to synthesize single-speaker and multi-speaker speech using Vertex AI API.
- PROJECT ID = YOUR PROJECT ID curl -X POST \ -H "Authorization: Bearer $( gcloud auth application-default print-access-token ) " \ -H "x-goog-user-project: $PROJECT ID " \ -H "Content-Type: application/json" \ -d '{ "input": { "prompt": "Say the following as a conversation between friends.", "text": "Sam: Hi Bob, how are you?\\nBob: I am doing well, and you?" }, "voice": { "languageCode": "en-us", "modelName": "gemini-2.5-flash-tts", "multiSpeakerVoiceConfig": { "speakerVoiceConfigs": [ { "speakerAlias": "Sam", "speakerId": "Kore" }, { "speakerAlias": "Bob", "speakerId": "Charon" } ] } }, "audioConfig": { "audioEncoding": "LINEAR16", "sampleRateHertz": 24000 } }' \ "https://texttospeech.googleapis.com/v1/text:synthesize" \ jq -r '.audioContent' base64 -d ffplay - -autoexit Perform synchronous multi-speaker synthesis with structured text input Multi-speaker with structured text input enables intelligent verbalization of text in a human-like way.
- PROJECT ID = YOUR PROJECT ID curl -X POST \ -H "Authorization: Bearer $( gcloud auth application-default print-access-token ) " \ -H "x-goog-user-project: $PROJECT ID " \ -H "Content-Type: application/json" \ -d '{ "input": { "prompt": "Say the following in a curious way", "text": "OK, so... tell me about this [uhm] AI thing." }, "voice": { "languageCode": "en-us", "name": "Kore", "model name": "gemini-2.5-flash-tts" }, "audioConfig": { "audioEncoding": "LINEAR16" } }' \ "https://texttospeech.googleapis.com/v1/text:synthesize" \ jq -r '.audioContent' base64 -d ffplay - -autoexit Perform streaming single-speaker synthesis Streaming synthesis is suitable for real-time applications where fast response is critical for the user experience.

### Gemini-TTS \_|\_ Cloud Text-to-Speech \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/text-to-speech/docs/gemini-tts](https://docs.cloud.google.com/text-to-speech/docs/gemini-tts)
- Source ID: `site-docs-reference-2`
- Final score: 149
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- BLOCK LOW AND ABOVE )] ) ), ) Perform the text-to-speech request on the text input with the selected voice parameters and audio file type. response = client . synthesize speech ( request = request ) CURL PROJECT ID = YOUR PROJECT ID curl -X POST \ -H "Authorization: Bearer $( gcloud auth application-default print-access-token ) " \ -H "x-goog-user-project: $PROJECT ID " \ -H "Content-Type: application/json" \ -d '{ "input": { "prompt": "Say the following in a curious way", "text": "I am saying something that would otherwise be blocked by Gemini TTS." }, "voice": { "languageCode": "en-us", "name": "Kore", "modelName": "gemini-2.5-flash-tts" }, "audioConfig": { "audioEncoding": "LINEAR16" }, "advancedVoiceOptions": { "safetySettings": { "settings": { "category": "HARM CATEGORY HATE SPEECH", "threshold": "BLOCK LOW AND ABOVE", }, "settings": { "category": "HARM CATEGORY DANGEROUS CONTENT", "threshold": "BLOCK LOW AND ABOVE", }, "settings": { "category": "HARM CATEGORY HARASSMENT", "threshold": "BLOCK LOW AND ABOVE", }, "settings": { "category": "HARM CATEGORY SEXUALLY EXPLICIT", "threshold": "BLOCK LOW AND ABOVE", }, } }, }' \ "https://texttospeech.googleapis.com/v1/text:synthesize" \ jq -r '.audioContent' base64 -d ffplay - -autoexit Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- PROJECT ID = YOUR PROJECT ID curl -X POST \ -H "Authorization: Bearer $( gcloud auth application-default print-access-token ) " \ -H "x-goog-user-project: $PROJECT ID " \ -H "Content-Type: application/json" \ -d '{ "input": { "prompt": "Say the following as a conversation between friends.", "multiSpeakerMarkup": { "turns": [ { "speaker": "Sam", "text": "Hi Bob, how are you?" }, { "speaker": "Bob", "text": "I am doing well, and you?" } ] } }, "voice": { "languageCode": "en-us", "modelName": "gemini-2.5-flash-tts", "multiSpeakerVoiceConfig": { "speakerVoiceConfigs": [ { "speakerAlias": "Sam", "speakerId": "Kore" }, { "speakerAlias": "Bob", "speakerId": "Charon" } ] } }, "audioConfig": { "audioEncoding": "LINEAR16", "sampleRateHertz": 24000 } }' \ "https://texttospeech.googleapis.com/v1/text:synthesize" \ jq -r '.audioContent' base64 -d ffplay - -autoexit Use Vertex AI API Discover how to use Gemini-TTS models to synthesize single-speaker and multi-speaker speech using Vertex AI API.
- PROJECT ID = YOUR PROJECT ID curl -X POST \ -H "Authorization: Bearer $( gcloud auth application-default print-access-token ) " \ -H "x-goog-user-project: $PROJECT ID " \ -H "Content-Type: application/json" \ -d '{ "input": { "prompt": "Say the following as a conversation between friends.", "text": "Sam: Hi Bob, how are you?\\nBob: I am doing well, and you?" }, "voice": { "languageCode": "en-us", "modelName": "gemini-2.5-flash-tts", "multiSpeakerVoiceConfig": { "speakerVoiceConfigs": [ { "speakerAlias": "Sam", "speakerId": "Kore" }, { "speakerAlias": "Bob", "speakerId": "Charon" } ] } }, "audioConfig": { "audioEncoding": "LINEAR16", "sampleRateHertz": 24000 } }' \ "https://texttospeech.googleapis.com/v1/text:synthesize" \ jq -r '.audioContent' base64 -d ffplay - -autoexit Perform synchronous multi-speaker synthesis with structured text input Multi-speaker with structured text input enables intelligent verbalization of text in a human-like way.
- PROJECT ID = YOUR PROJECT ID curl -X POST \ -H "Authorization: Bearer $( gcloud auth application-default print-access-token ) " \ -H "x-goog-user-project: $PROJECT ID " \ -H "Content-Type: application/json" \ -d '{ "input": { "prompt": "Say the following in a curious way", "text": "OK, so... tell me about this [uhm] AI thing." }, "voice": { "languageCode": "en-us", "name": "Kore", "model name": "gemini-2.5-flash-tts" }, "audioConfig": { "audioEncoding": "LINEAR16" } }' \ "https://texttospeech.googleapis.com/v1/text:synthesize" \ jq -r '.audioContent' base64 -d ffplay - -autoexit Perform streaming single-speaker synthesis Streaming synthesis is suitable for real-time applications where fast response is critical for the user experience.

