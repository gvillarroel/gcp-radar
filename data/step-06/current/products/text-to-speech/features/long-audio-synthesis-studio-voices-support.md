---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:58:39.676Z"
product_name: "Text-to-Speech"
product_slug: "text-to-speech"
feature_name: "Long Audio Synthesis Studio voices support"
feature_slug: "long-audio-synthesis-studio-voices-support"
latest_feature_date: "2023-10-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/text-to-speech/docs/create-audio-text-long-audio-synthesis"
  - "https://docs.cloud.google.com/text-to-speech/docs/create-dialogue-with-multispeakers"
  - "https://docs.cloud.google.com/text-to-speech/docs/gemini-tts"
keywords:
  - "long"
  - "audio"
  - "synthesis"
  - "studio"
  - "voices"
  - "now"
  - "supports"
  - "generating"
---

# Long Audio Synthesis Studio voices support

Product: Text-to-Speech
Coverage: MEDIUM

## Step 02 Summary

Long Audio Synthesis now supports generating speech using Google Cloud Text-to-Speech Studio voices.

## Extended Definition

Long Audio Synthesis now supports generating speech using Google Cloud Text-to-Speech Studio voices.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/text-to-speech/docs/create-audio-text-long-audio-synthesis](https://docs.cloud.google.com/text-to-speech/docs/create-audio-text-long-audio-synthesis)
- [https://docs.cloud.google.com/text-to-speech/docs/create-dialogue-with-multispeakers](https://docs.cloud.google.com/text-to-speech/docs/create-dialogue-with-multispeakers)
- [https://docs.cloud.google.com/text-to-speech/docs/gemini-tts](https://docs.cloud.google.com/text-to-speech/docs/gemini-tts)

## Supporting Pages

### "Quickstart: Create long-form audio \_|\_ Cloud Text-to-Speech \_|\_ Google\

- URL: [https://docs.cloud.google.com/text-to-speech/docs/create-audio-text-long-audio-synthesis](https://docs.cloud.google.com/text-to-speech/docs/create-audio-text-long-audio-synthesis)
- Source ID: `site-docs-reference-2`
- Final score: 188
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Long Audio Synthesis asynchronously synthesizes up to 1 million bytes on input.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://texttospeech.googleapis.com/v1beta1/projects/12345/locations/global:synthesizeLongAudio" Select-Object -Expand Content You should receive a JSON response similar to the following: { "name": "23456", "metadata": { "@type": "type.googleapis.com/google.cloud.texttospeech.v1beta1.SynthesizeLongAudioMetadata", "progressPercentage": 0, "startTime": "2022-12-20T00:46:56.296191037Z", "lastUpdateTime": "2022-12-20T00:46:56.296191037Z" }, "done": false } The JSON output for the REST command contains the long operation name in the name field.
- HTTP method and URL: POST https://texttospeech.googleapis.com/v1beta1/projects/12345/locations/global:synthesizeLongAudio Request JSON body: { "parent": "projects/12345/locations/global", "audio config":{ "audio encoding":"LINEAR16" }, "input":{ "text":"hello" }, "voice":{ "language code":"en-us", "name":"en-us-Standard-A" }, "output gcs uri": "gs://bucket name/file name.wav" } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://texttospeech.googleapis.com/v1beta1/projects/12345/locations/global/operations/23456" Select-Object -Expand Content You should receive a JSON response similar to the following: { "name": "projects/12345/locations/global/operations/23456", "metadata": { "@type": "type.googleapis.com/google.cloud.texttospeech.v1beta1.SynthesizeLongAudioMetadata", "progressPercentage": 100 }, "done": true } Query the list of all operations running under a given project, execute the REST request.

### Gemini-TTS \_|\_ Cloud Text-to-Speech \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/text-to-speech/docs/create-dialogue-with-multispeakers](https://docs.cloud.google.com/text-to-speech/docs/create-dialogue-with-multispeakers)
- Source ID: `site-docs-reference-2`
- Final score: 181
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example using flask socketio, you could do the following from flask socketio import SocketIO, emit emit("audio", chunk.candidates[0].content.parts[0].inline data.data) socketio.sleep(0) final audio data += chunk . candidates [ 0 ] . content . parts [ 0 ] . inline data . data time to first audio = first chunk received time - request start time time to completion = datetime . datetime . now () - request start time print ( " \n " ) print ( f "Time to first audio: { time to first audio . total seconds () } seconds" ) print ( f "Time to completion: { time to completion . total seconds () } seconds" ) return final audio data audio data = synthesize ( prompt , "gemini-2.5-flash-tts" , "Kore" , "en-in" ) file name = 'output speech.wav' wave file ( file name , audio data ) Audio ( "output speech.wav" ) Perform speech synthesis in Media Studio Permissions required for this task To perform this task, you must have the following permissions : serviceusage.services.use You can use the Media Studio in the Google Google Cloud console to experiment with text-to-speech models.
- PROJECT ID = YOUR PROJECT ID curl -X POST \ -H "Authorization: Bearer $( gcloud auth application-default print-access-token ) " \ -H "x-goog-user-project: $PROJECT ID " \ -H "Content-Type: application/json" \ -d '{ "input": { "prompt": "Say the following as a conversation between friends.", "text": "Sam: Hi Bob, how are you?\\nBob: I am doing well, and you?" }, "voice": { "languageCode": "en-us", "modelName": "gemini-2.5-flash-tts", "multiSpeakerVoiceConfig": { "speakerVoiceConfigs": [ { "speakerAlias": "Sam", "speakerId": "Kore" }, { "speakerAlias": "Bob", "speakerId": "Charon" } ] } }, "audioConfig": { "audioEncoding": "LINEAR16", "sampleRateHertz": 24000 } }' \ "https://texttospeech.googleapis.com/v1/text:synthesize" \ jq -r '.audioContent' base64 -d ffplay - -autoexit Perform synchronous multi-speaker synthesis with structured text input Multi-speaker with structured text input enables intelligent verbalization of text in a human-like way.
- For example using flask socketio, you could do the following from flask socketio import SocketIO, emit emit("audio", response.audio content) socketio.sleep(0) audio data = np . frombuffer ( response . audio content , dtype = np . int16 ) final audio data = np . concatenate (( final audio data , audio data )) time to first audio = first chunk received time - request start time time to completion = datetime . datetime . now () - request start time audio duration = len ( final audio data ) / 24 000 # default sampling rate. print ( " \n " ) print ( f "Time to first audio: { time to first audio . total seconds () } seconds" ) print ( f "Time to completion: { time to completion . total seconds () } seconds" ) print ( f "Audio duration: { audio duration } seconds" ) return final audio data Perform synchronous multi-speaker synthesis with freeform text input Note: The combined size of all lines of dialogue can be at most 4,000 bytes.
- PROJECT ID = YOUR PROJECT ID curl -X POST \ -H "Authorization: Bearer $( gcloud auth application-default print-access-token ) " \ -H "x-goog-user-project: $PROJECT ID " \ -H "Content-Type: application/json" \ -d '{ "input": { "prompt": "Say the following in a curious way", "text": "OK, so... tell me about this [uhm] AI thing." }, "voice": { "languageCode": "en-us", "name": "Kore", "model name": "gemini-2.5-flash-tts" }, "audioConfig": { "audioEncoding": "LINEAR16" } }' \ "https://texttospeech.googleapis.com/v1/text:synthesize" \ jq -r '.audioContent' base64 -d ffplay - -autoexit Perform streaming single-speaker synthesis Streaming synthesis is suitable for real-time applications where fast response is critical for the user experience.

### Gemini-TTS \_|\_ Cloud Text-to-Speech \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/text-to-speech/docs/gemini-tts](https://docs.cloud.google.com/text-to-speech/docs/gemini-tts)
- Source ID: `site-docs-reference-2`
- Final score: 181
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example using flask socketio, you could do the following from flask socketio import SocketIO, emit emit("audio", chunk.candidates[0].content.parts[0].inline data.data) socketio.sleep(0) final audio data += chunk . candidates [ 0 ] . content . parts [ 0 ] . inline data . data time to first audio = first chunk received time - request start time time to completion = datetime . datetime . now () - request start time print ( " \n " ) print ( f "Time to first audio: { time to first audio . total seconds () } seconds" ) print ( f "Time to completion: { time to completion . total seconds () } seconds" ) return final audio data audio data = synthesize ( prompt , "gemini-2.5-flash-tts" , "Kore" , "en-in" ) file name = 'output speech.wav' wave file ( file name , audio data ) Audio ( "output speech.wav" ) Perform speech synthesis in Media Studio Permissions required for this task To perform this task, you must have the following permissions : serviceusage.services.use You can use the Media Studio in the Google Google Cloud console to experiment with text-to-speech models.
- PROJECT ID = YOUR PROJECT ID curl -X POST \ -H "Authorization: Bearer $( gcloud auth application-default print-access-token ) " \ -H "x-goog-user-project: $PROJECT ID " \ -H "Content-Type: application/json" \ -d '{ "input": { "prompt": "Say the following as a conversation between friends.", "text": "Sam: Hi Bob, how are you?\\nBob: I am doing well, and you?" }, "voice": { "languageCode": "en-us", "modelName": "gemini-2.5-flash-tts", "multiSpeakerVoiceConfig": { "speakerVoiceConfigs": [ { "speakerAlias": "Sam", "speakerId": "Kore" }, { "speakerAlias": "Bob", "speakerId": "Charon" } ] } }, "audioConfig": { "audioEncoding": "LINEAR16", "sampleRateHertz": 24000 } }' \ "https://texttospeech.googleapis.com/v1/text:synthesize" \ jq -r '.audioContent' base64 -d ffplay - -autoexit Perform synchronous multi-speaker synthesis with structured text input Multi-speaker with structured text input enables intelligent verbalization of text in a human-like way.
- For example using flask socketio, you could do the following from flask socketio import SocketIO, emit emit("audio", response.audio content) socketio.sleep(0) audio data = np . frombuffer ( response . audio content , dtype = np . int16 ) final audio data = np . concatenate (( final audio data , audio data )) time to first audio = first chunk received time - request start time time to completion = datetime . datetime . now () - request start time audio duration = len ( final audio data ) / 24 000 # default sampling rate. print ( " \n " ) print ( f "Time to first audio: { time to first audio . total seconds () } seconds" ) print ( f "Time to completion: { time to completion . total seconds () } seconds" ) print ( f "Audio duration: { audio duration } seconds" ) return final audio data Perform synchronous multi-speaker synthesis with freeform text input Note: The combined size of all lines of dialogue can be at most 4,000 bytes.
- PROJECT ID = YOUR PROJECT ID curl -X POST \ -H "Authorization: Bearer $( gcloud auth application-default print-access-token ) " \ -H "x-goog-user-project: $PROJECT ID " \ -H "Content-Type: application/json" \ -d '{ "input": { "prompt": "Say the following in a curious way", "text": "OK, so... tell me about this [uhm] AI thing." }, "voice": { "languageCode": "en-us", "name": "Kore", "model name": "gemini-2.5-flash-tts" }, "audioConfig": { "audioEncoding": "LINEAR16" } }' \ "https://texttospeech.googleapis.com/v1/text:synthesize" \ jq -r '.audioContent' base64 -d ffplay - -autoexit Perform streaming single-speaker synthesis Streaming synthesis is suitable for real-time applications where fast response is critical for the user experience.

