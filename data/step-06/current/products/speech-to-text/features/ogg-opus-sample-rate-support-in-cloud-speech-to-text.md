---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:19:12.008Z"
product_name: "Speech-to-Text"
product_slug: "speech-to-text"
feature_name: "OGG_OPUS sample rate support in Cloud Speech-to-Text"
feature_slug: "ogg-opus-sample-rate-support-in-cloud-speech-to-text"
latest_feature_date: "2018-01-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/speech-to-text/docs/encoding"
  - "https://docs.cloud.google.com/speech-to-text/docs/audit-logging"
  - "https://docs.cloud.google.com/speech-to-text/docs/quickstarts/transcribe-api"
  - "https://docs.cloud.google.com/speech-to-text/docs/reference/rest/v1/RecognitionConfig"
keywords:
  - "ogg"
  - "opus"
  - "sample"
  - "rate"
  - "in"
  - "speech"
  - "to"
  - "text"
---

# OGG_OPUS sample rate support in Cloud Speech-to-Text

Product: Speech-to-Text
Coverage: MEDIUM

## Step 02 Summary

Cloud Speech-to-Text expanded support for the OGG_OPUS audio encoding to include 8,000 Hz, 12,000 Hz, 16,000 Hz, 24,000 Hz, and 48,000 Hz input sample rates.

## Extended Definition

Cloud Speech-to-Text expanded support for the OGG_OPUS audio encoding to include 8,000 Hz, 12,000 Hz, 16,000 Hz, 24,000 Hz, and 48,000 Hz input sample rates.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/speech-to-text/docs/encoding](https://docs.cloud.google.com/speech-to-text/docs/encoding)
- [https://docs.cloud.google.com/speech-to-text/docs/audit-logging](https://docs.cloud.google.com/speech-to-text/docs/audit-logging)
- [https://docs.cloud.google.com/speech-to-text/docs/quickstarts/transcribe-api](https://docs.cloud.google.com/speech-to-text/docs/quickstarts/transcribe-api)
- [https://docs.cloud.google.com/speech-to-text/docs/reference/rest/v1/RecognitionConfig](https://docs.cloud.google.com/speech-to-text/docs/reference/rest/v1/RecognitionConfig)

## Supporting Pages

### "Introduction to audio encoding for Cloud Speech-to-Text \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/speech-to-text/docs/encoding](https://docs.cloud.google.com/speech-to-text/docs/encoding)
- Source ID: `site-docs-root`
- Final score: 346
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If you specify an encoding or sample rate value that does not match the value in the file header, then Cloud Speech-to-Text returns an error.
- If omitted, Cloud Speech-to-Text automatically determines the encoding and sample rate for WAV or FLAC files based on the file header.
- A FLAC file must contain the sample rate in the header in order to be submitted to the Cloud Speech-to-Text API.
- MULAW μ-law No 8-bit PCM encoding AMR Adaptive Multi-Rate Narrowband No Sample rate must be 8000 Hz AMR WB Adaptive Multi-Rate Wideband No Sample rate must be 16000 Hz OGG OPUS Opus encoded audio frames in an Ogg container No Sample rate must be one of 8000 Hz, 12000 Hz, 16000 Hz, 24000 Hz, or 48000 Hz SPEEX WITH HEADER BYTE Speex wideband No Sample rate must be 16000 Hz WEBM OPUS WebM Opus No Sample rate must be one of 8000 Hz, 12000 Hz, 16000 Hz, 24000 Hz, or 48000 Hz Note: FLAC is both an audio codec and an audio file format.

### Speech-to-Text audit logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/speech-to-text/docs/audit-logging](https://docs.cloud.google.com/speech-to-text/docs/audit-logging)
- Source ID: `site-docs-root`
- Final score: 316
- Re-rank relevance: N/A

Evidence snippets:
- For more information about Cloud Audit Logs, see the following: Types of audit logs Audit log entry structure Storing and routing audit logs Cloud Logging pricing summary Enable Data Access audit logs Service name Speech-to-Text audit logs use the service name speech.googleapis.com .
- Home Documentation AI and ML Cloud Speech-to-Text Send feedback Speech-to-Text audit logging Stay organized with collections Save and categorize content based on your preferences.
- This document describes audit logging for Speech-to-Text.
- The following methods don't produce audit logs: google.cloud.location.Locations.ListLocations google.cloud.speech.v1.Adaptation.CreateCustomClass google.cloud.speech.v1.Adaptation.CreatePhraseSet google.cloud.speech.v1.Adaptation.DeleteCustomClass google.cloud.speech.v1.Adaptation.DeletePhraseSet google.cloud.speech.v1.Adaptation.GetCustomClass google.cloud.speech.v1.Adaptation.GetPhraseSet google.cloud.speech.v1.Adaptation.ListCustomClasses google.cloud.speech.v1.Adaptation.ListPhraseSet google.cloud.speech.v1.Adaptation.UpdateCustomClass google.cloud.speech.v1.Adaptation.UpdatePhraseSet google.cloud.speech.v1.Speech.LongRunningRecognize google.cloud.speech.v1.Speech.Recognize google.cloud.speech.v1.Speech.StreamingRecognize google.cloud.speech.v1p1beta1.Adaptation.CreateCustomClass google.cloud.speech.v1p1beta1.Adaptation.CreatePhraseSet google.cloud.speech.v1p1beta1.Adaptation.DeleteCustomClass google.cloud.speech.v1p1beta1.Adaptation.DeletePhraseSet google.cloud.speech.v1p1beta1.Adaptation.GetCustomClass google.cloud.speech.v1p1beta1.Adaptation.GetPhraseSet google.cloud.speech.v1p1beta1.Adaptation.ListCustomClasses google.cloud.speech.v1p1beta1.Adaptation.ListPhraseSet google.cloud.speech.v1p1beta1.Adaptation.UpdateCustomClass google.cloud.speech.v1p1beta1.Adaptation.UpdatePhraseSet google.cloud.speech.v1p1beta1.Speech.LongRunningRecognize google.cloud.speech.v1p1beta1.Speech.Recognize google.cloud.speech.v1p1beta1.Speech.StreamingRecognize google.longrunning.Operations.GetOperation google.longrunning.Operations.ListOperations google.longrunning.Operations.WaitOperation Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### "Transcribe speech to text by using the command line \_|\_ Cloud Speech-to-Text\

- URL: [https://docs.cloud.google.com/speech-to-text/docs/quickstarts/transcribe-api](https://docs.cloud.google.com/speech-to-text/docs/quickstarts/transcribe-api)
- Source ID: `site-docs-root`
- Final score: 313
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To initialize the gcloud CLI, run the following command: gcloud init Make an audio transcription request Use the following code sample to send a recognize REST request to the Speech-to-Text API.
- You should see a response similar to the following: { "results" : [ { "alternatives" : [ { "transcript" : "how old is the Brooklyn Bridge" , "confidence" : 0.98267895 } ] } ] } You sent your first request to Speech-to-Text.
- Home Documentation AI and ML Cloud Speech-to-Text Send feedback Transcribe speech to text by using the command line Stay organized with collections Save and categorize content based on your preferences.
- This page shows you how to send a speech recognition request to Speech-to-Text using the REST interface and the curl command.

### RecognitionConfig \_|\_ Cloud Speech-to-Text \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/speech-to-text/docs/reference/rest/v1/RecognitionConfig](https://docs.cloud.google.com/speech-to-text/docs/reference/rest/v1/RecognitionConfig)
- Source ID: `site-api-reference`
- Final score: 308
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- JSON representation { "encoding" : enum ( AudioEncoding ) , "sampleRateHertz" : integer , "audioChannelCount" : integer , "enableSeparateRecognitionPerChannel" : boolean , "languageCode" : string , "alternativeLanguageCodes" : [ string ] , "maxAlternatives" : integer , "profanityFilter" : boolean , "adaptation" : { object ( SpeechAdaptation ) } , "transcriptNormalization" : { object ( TranscriptNormalization ) } , "speechContexts" : [ { object ( SpeechContext ) } ] , "enableWordTimeOffsets" : boolean , "enableWordConfidence" : boolean , "enableAutomaticPunctuation" : boolean , "enableSpokenPunctuation" : boolean , "enableSpokenEmojis" : boolean , "diarizationConfig" : { object ( SpeakerDiarizationConfig ) } , "metadata" : { object ( RecognitionMetadata ) } , "model" : string , "useEnhanced" : boolean } Fields encoding enum ( AudioEncoding ) Encoding of audio data sent in all RecognitionAudio messages.
- OGG OPUS Opus encoded audio frames in Ogg container ( OggOpus ). sampleRateHertz must be one of 8000, 12000, 16000, 24000, or 48000.
- JSON representation AudioEncoding SpeechAdaptation JSON representation ABNFGrammar JSON representation TranscriptNormalization JSON representation Entry JSON representation SpeechContext JSON representation SpeakerDiarizationConfig JSON representation RecognitionMetadata JSON representation InteractionType MicrophoneDistance OriginalMediaType RecordingDeviceType Provides information to the recognizer that specifies how to process the request.
- Ideally the audio is high-fidelity, recorded at a 16khz or greater sampling rate. medical conversation Best for audio that originated from a conversation between a medical provider and patient. medical dictation Best for audio that originated from dictation notes by a medical provider. useEnhanced boolean Set to true to use an enhanced model for speech recognition.

