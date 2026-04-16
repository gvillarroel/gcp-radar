---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:19:11.996Z"
product_name: "Speech-to-Text"
product_slug: "speech-to-text"
feature_name: "Speech-to-Text On-Prem API"
feature_slug: "speech-to-text-on-prem-api"
latest_feature_date: "2020-08-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/speech-to-text/docs/apis"
  - "https://docs.cloud.google.com/speech-to-text/docs/migration"
  - "https://docs.cloud.google.com/speech-to-text/docs/quickstarts/transcribe-api"
  - "https://docs.cloud.google.com/speech-to-text/docs/reference/rest/v1/RecognitionConfig"
keywords:
  - "speech"
  - "to"
  - "text"
  - "on"
  - "prem"
  - "api"
  - "launched"
  - "the"
---

# Speech-to-Text On-Prem API

Product: Speech-to-Text
Coverage: MEDIUM

## Step 02 Summary

Speech-to-Text launched the On-Prem API to enable integration of Google speech recognition into on-premises solutions.

## Extended Definition

Speech-to-Text launched the On-Prem API to enable integration of Google speech recognition into on-premises solutions.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/speech-to-text/docs/apis](https://docs.cloud.google.com/speech-to-text/docs/apis)
- [https://docs.cloud.google.com/speech-to-text/docs/migration](https://docs.cloud.google.com/speech-to-text/docs/migration)
- [https://docs.cloud.google.com/speech-to-text/docs/quickstarts/transcribe-api](https://docs.cloud.google.com/speech-to-text/docs/quickstarts/transcribe-api)
- [https://docs.cloud.google.com/speech-to-text/docs/reference/rest/v1/RecognitionConfig](https://docs.cloud.google.com/speech-to-text/docs/reference/rest/v1/RecognitionConfig)

## Supporting Pages

### APIs and references \_|\_ Cloud Speech-to-Text \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/speech-to-text/docs/apis](https://docs.cloud.google.com/speech-to-text/docs/apis)
- Source ID: `site-api-reference`
- Final score: 348
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Cloud Speech-to-Text On-Prem API The Cloud Speech-to-Text On-Prem solution.
- Cloud Speech REST API REST API Reference. (Non-streaming JSON.) Cloud Speech RPC API gRPC API Reference. (Streaming and non-streaming Proto3.) Language support The list of languages supported by Cloud Speech-to-Text.
- Home Documentation AI and ML Cloud Speech-to-Text Reference Send feedback APIs and references Stay organized with collections Save and categorize content based on your preferences.
- Supported class tokens The list of class tokens supported for speech adaptation, by language.

### "Migrate to the latest version of Cloud Speech-to-Text API \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/speech-to-text/docs/migration](https://docs.cloud.google.com/speech-to-text/docs/migration)
- Source ID: `site-docs-root`
- Final score: 323
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- RecognizeRequest ( recognizer = f "projects/ { PROJECT ID } /locations/global/recognizers/ " , config = config , content = audio content , ) Transcribes the audio into text response = client . recognize ( request = request ) for result in response . results : print ( f "Transcript: { result . alternatives [ 0 ] . transcript } " ) return response If needed, select a region in which you want to use the Cloud Speech-to-Text API, and check the language and model availability in that region: Python import os from google.api core.client options import ClientOptions from google.cloud.speech v2 import SpeechClient from google.cloud.speech v2.types import cloud speech PROJECT ID = os . getenv ( "GOOGLE CLOUD PROJECT" ) def change speech v2 location ( audio file : str , location : str ) - > cloud speech .
- Migrating in the API Similar to Cloud STT V1, to transcribe audio , you need to create a RecognitionConfig by selecting the language of your audio and the recognition model of your choice: Note: The difference between the V1 and V2 versions of the Cloud Speech-to-Text API in the definition of RecognitionConfig message is the addition of the AutoDetectDecodingConfig message, which automatically detects the audio specifications.
- Home Documentation AI and ML Cloud Speech-to-Text Send feedback Migrate to the latest version of Cloud Speech-to-Text API Stay organized with collections Save and categorize content based on your preferences.
- RecognizeRequest ( recognizer = f "projects/ { PROJECT ID } /locations/ { location } /recognizers/ " , config = config , content = audio content , ) Transcribes the audio into text response = client . recognize ( request = request ) for result in response . results : print ( f "Transcript: { result . alternatives [ 0 ] . transcript } " ) return response Optionally, create a recognizer resource if you need to reuse a specific recognition configuration across many transcription requests: Python import os from google.cloud.speech v2 import SpeechClient from google.cloud.speech v2.types import cloud speech PROJECT ID = os . getenv ( "GOOGLE CLOUD PROJECT" ) def create recognizer ( recognizer id : str ) - > cloud speech .

### "Transcribe speech to text by using the command line \_|\_ Cloud Speech-to-Text\

- URL: [https://docs.cloud.google.com/speech-to-text/docs/quickstarts/transcribe-api](https://docs.cloud.google.com/speech-to-text/docs/quickstarts/transcribe-api)
- Source ID: `site-docs-root`
- Final score: 321
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To initialize the gcloud CLI, run the following command: gcloud init Make an audio transcription request Use the following code sample to send a recognize REST request to the Speech-to-Text API.
- You can send audio data to the Speech-to-Text API, which then returns a text transcription of that audio file.
- Replace /full/path/to/audio/file.wav with the path to the audio file you want to transcribe: echo "{ \"config\": { \"auto decoding config\": {}, \"language codes\": [\"en-US\"], \"model\": \"long\" }, \"content\": \" $( base64 -w 0 /full/path/to/audio/file.wav sed 's/+/-/g; s/\// /g' ) \" }" > /tmp/data.txt Use curl to make a recognize request: curl -X POST -H "Content-Type: application/json; charset=utf-8" \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -d @/tmp/data.txt \ https://speech.googleapis.com/v2/projects/ PROJECT ID /locations/global/recognizers/ :recognize Note: To pass a filename to curl , you use the -d option (for "data") and precede the filename with an @ sign.
- You should see a response similar to the following: { "results" : [ { "alternatives" : [ { "transcript" : "how old is the Brooklyn Bridge" , "confidence" : 0.98267895 } ] } ] } You sent your first request to Speech-to-Text.

### RecognitionConfig \_|\_ Cloud Speech-to-Text \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/speech-to-text/docs/reference/rest/v1/RecognitionConfig](https://docs.cloud.google.com/speech-to-text/docs/reference/rest/v1/RecognitionConfig)
- Source ID: `site-api-reference`
- Final score: 316
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- JSON representation AudioEncoding SpeechAdaptation JSON representation ABNFGrammar JSON representation TranscriptNormalization JSON representation Entry JSON representation SpeechContext JSON representation SpeakerDiarizationConfig JSON representation RecognitionMetadata JSON representation InteractionType MicrophoneDistance OriginalMediaType RecordingDeviceType Provides information to the recognizer that specifies how to process the request.
- SpeechContext Provides "hints" to the speech recognizer to favor specific words and phrases in the results.
- A means to provide context to assist the speech recognition.
- JSON representation { "encoding" : enum ( AudioEncoding ) , "sampleRateHertz" : integer , "audioChannelCount" : integer , "enableSeparateRecognitionPerChannel" : boolean , "languageCode" : string , "alternativeLanguageCodes" : [ string ] , "maxAlternatives" : integer , "profanityFilter" : boolean , "adaptation" : { object ( SpeechAdaptation ) } , "transcriptNormalization" : { object ( TranscriptNormalization ) } , "speechContexts" : [ { object ( SpeechContext ) } ] , "enableWordTimeOffsets" : boolean , "enableWordConfidence" : boolean , "enableAutomaticPunctuation" : boolean , "enableSpokenPunctuation" : boolean , "enableSpokenEmojis" : boolean , "diarizationConfig" : { object ( SpeakerDiarizationConfig ) } , "metadata" : { object ( RecognitionMetadata ) } , "model" : string , "useEnhanced" : boolean } Fields encoding enum ( AudioEncoding ) Encoding of audio data sent in all RecognitionAudio messages.

