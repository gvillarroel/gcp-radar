---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:19:12.002Z"
product_name: "Speech-to-Text"
product_slug: "speech-to-text"
feature_name: "MP3 audio transcription support"
feature_slug: "mp3-audio-transcription-support"
latest_feature_date: "2019-06-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/speech-to-text/docs/encoding"
  - "https://docs.cloud.google.com/speech-to-text/docs/custom-speech-models"
  - "https://docs.cloud.google.com/speech-to-text/docs/reference/rest/v1/RecognitionConfig"
  - "https://docs.cloud.google.com/speech-to-text/docs/batch-recognize"
keywords:
  - "mp3"
  - "audio"
  - "transcription"
  - "speech"
  - "to"
  - "text"
  - "added"
  - "beta"
---

# MP3 audio transcription support

Product: Speech-to-Text
Coverage: MEDIUM

## Step 02 Summary

Cloud Speech-to-Text added beta support for transcribing MP3-encoded audio data through the v1p1beta1 API.

## Extended Definition

Cloud Speech-to-Text added beta support for transcribing MP3-encoded audio data through the v1p1beta1 API.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/speech-to-text/docs/encoding](https://docs.cloud.google.com/speech-to-text/docs/encoding)
- [https://docs.cloud.google.com/speech-to-text/docs/custom-speech-models](https://docs.cloud.google.com/speech-to-text/docs/custom-speech-models)
- [https://docs.cloud.google.com/speech-to-text/docs/reference/rest/v1/RecognitionConfig](https://docs.cloud.google.com/speech-to-text/docs/reference/rest/v1/RecognitionConfig)
- [https://docs.cloud.google.com/speech-to-text/docs/batch-recognize](https://docs.cloud.google.com/speech-to-text/docs/batch-recognize)

## Supporting Pages

### "Introduction to audio encoding for Cloud Speech-to-Text \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/speech-to-text/docs/encoding](https://docs.cloud.google.com/speech-to-text/docs/encoding)
- Source ID: `site-docs-root`
- Final score: 263
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation AI and ML Cloud Speech-to-Text Send feedback Introduction to audio encoding for Cloud Speech-to-Text Stay organized with collections Save and categorize content based on your preferences.
- The Cloud Speech-to-Text API supports several lossy formats, though you should avoid them if you have control over the audio, because data loss may affect recognition accuracy.
- Although the Cloud Speech-to-Text API supports several lossy formats, you should avoid them if you have control over the source audio.
- Supported audio encodings for Cloud Speech-to-Text The Cloud Speech-to-Text API supports a number of different encodings.

### "Overview of custom speech models \_|\_ Cloud Speech-to-Text \_|\_ Google\

- URL: [https://docs.cloud.google.com/speech-to-text/docs/custom-speech-models](https://docs.cloud.google.com/speech-to-text/docs/custom-speech-models)
- Source ID: `site-docs-root`
- Final score: 261
- Re-rank relevance: N/A

Evidence snippets:
- Inference : You will be charged for the number of streamed seconds of audio for transcription, in alignment with the general Cloud Speech-to-Text billing.
- For the effective training of a Custom Speech-to-Text model, you must provide: Minimum 100 audio-hours of training data, either audio-only or audio with the corresponding text transcript as ground-truth.
- This service is designed to enhance the accuracy and relevance of speech recognition service in diverse environments and use cases, using your domain-specific audio and text data.
- How does it work You can use Custom Speech-to-Text models to augment a base transcription model to improve transcription recognition.

### RecognitionConfig \_|\_ Cloud Speech-to-Text \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/speech-to-text/docs/reference/rest/v1/RecognitionConfig](https://docs.cloud.google.com/speech-to-text/docs/reference/rest/v1/RecognitionConfig)
- Source ID: `site-api-reference`
- Final score: 256
- Re-rank relevance: N/A

Evidence snippets:
- JSON representation { "encoding" : enum ( AudioEncoding ) , "sampleRateHertz" : integer , "audioChannelCount" : integer , "enableSeparateRecognitionPerChannel" : boolean , "languageCode" : string , "alternativeLanguageCodes" : [ string ] , "maxAlternatives" : integer , "profanityFilter" : boolean , "adaptation" : { object ( SpeechAdaptation ) } , "transcriptNormalization" : { object ( TranscriptNormalization ) } , "speechContexts" : [ { object ( SpeechContext ) } ] , "enableWordTimeOffsets" : boolean , "enableWordConfidence" : boolean , "enableAutomaticPunctuation" : boolean , "enableSpokenPunctuation" : boolean , "enableSpokenEmojis" : boolean , "diarizationConfig" : { object ( SpeakerDiarizationConfig ) } , "metadata" : { object ( RecognitionMetadata ) } , "model" : string , "useEnhanced" : boolean } Fields encoding enum ( AudioEncoding ) Encoding of audio data sent in all RecognitionAudio messages.
- JSON representation AudioEncoding SpeechAdaptation JSON representation ABNFGrammar JSON representation TranscriptNormalization JSON representation Entry JSON representation SpeechContext JSON representation SpeakerDiarizationConfig JSON representation RecognitionMetadata JSON representation InteractionType MicrophoneDistance OriginalMediaType RecordingDeviceType Provides information to the recognizer that specifies how to process the request.
- JSON representation { "interactionType" : enum ( InteractionType ) , "industryNaicsCodeOfAudio" : integer , "microphoneDistance" : enum ( MicrophoneDistance ) , "originalMediaType" : enum ( OriginalMediaType ) , "recordingDeviceType" : enum ( RecordingDeviceType ) , "recordingDeviceName" : string , "originalMimeType" : string , "audioTopic" : string } Fields interactionType enum ( InteractionType ) The use case most closely describing the audio content to be recognized. industryNaicsCodeOfAudio integer ( uint32 format) The industry vertical to which this speech recognition request most closely applies.
- Use the 6-digit NAICS code to identify the industry vertical - see https://www.naics.com/search/ . microphoneDistance enum ( MicrophoneDistance ) The audio type that most closely describes the audio being recognized. originalMediaType enum ( OriginalMediaType ) The original media the speech was recorded on. recordingDeviceType enum ( RecordingDeviceType ) The type of device the speech was recorded with. recordingDeviceName string The device used to make the recording.

### "Transcribe long audio files into text \_|\_ Cloud Speech-to-Text \_|\_ Google\

- URL: [https://docs.cloud.google.com/speech-to-text/docs/batch-recognize](https://docs.cloud.google.com/speech-to-text/docs/batch-recognize)
- Source ID: `site-docs-root`
- Final score: 248
- Re-rank relevance: N/A

Evidence snippets:
- InlineOutputConfig (), ), ) Transcribes the audio into text operation = client . batch recognize ( request = request ) print ( "Waiting for operation to complete..." ) response = operation . result ( timeout = 120 ) for result in response . results [ audio uri ] . transcript . results : print ( f "Transcript: { result . alternatives [ 0 ] . transcript } " ) return response . results [ audio uri ] . transcript Perform batch recognition and write results to Cloud Storage Here is an example of performing batch speech recognition on an audio file in Cloud Storage and reading the transcription results from the output file in Cloud Storage.
- BatchRecognizeResults . from json ( results bytes , ignore unknown fields = True ) for result in batch recognize results . results : print ( f "Transcript: { result . alternatives [ 0 ] . transcript } " ) return batch recognize results Perform batch recognition on multiple files Here is an example of performing batch speech recognition on multiple audio files in Cloud Storage and reading the transcription results from the output files in Cloud Storage: Python import os import re from typing import List from google.cloud import storage from google.cloud.speech v2 import SpeechClient from google.cloud.speech v2.types import cloud speech PROJECT ID = os . getenv ( "GOOGLE CLOUD PROJECT" ) def transcribe batch multiple files v2 ( audio uris : List [ str ], gcs output path : str , ) - > cloud speech .
- Perform batch recognition with inline results Here is an example of performing batch speech recognition on an audio file in Cloud Storage and reading the transcription results inline from the response: Python import os from google.cloud.speech v2 import SpeechClient from google.cloud.speech v2.types import cloud speech PROJECT ID = os . getenv ( "GOOGLE CLOUD PROJECT" ) def transcribe batch gcs input inline output v2 ( audio uri : str , ) - > cloud speech .
- Home Documentation AI and ML Cloud Speech-to-Text Send feedback Transcribe long audio files into text Stay organized with collections Save and categorize content based on your preferences.

