---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:19:12.002Z"
product_name: "Speech-to-Text"
product_slug: "speech-to-text"
feature_name: "Streaming recognition 5-minute duration limit"
feature_slug: "streaming-recognition-5-minute-duration-limit"
latest_feature_date: "2019-06-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/speech-to-text/docs/quotas"
  - "https://docs.cloud.google.com/speech-to-text/docs/batch-recognize"
  - "https://docs.cloud.google.com/speech-to-text/docs/quickstarts/transcribe-client-libraries"
  - "https://docs.cloud.google.com/speech-to-text/docs/overview"
keywords:
  - "streaming"
  - "recognition"
  - "minute"
  - "duration"
  - "limit"
  - "speech"
  - "to"
  - "text"
---

# Streaming recognition 5-minute duration limit

Product: Speech-to-Text
Coverage: MEDIUM

## Step 02 Summary

Cloud Speech-to-Text added support for streaming recognition sessions up to 5 minutes, available via the v1p1beta1 API.

## Extended Definition

Cloud Speech-to-Text added support for streaming recognition sessions up to 5 minutes, available via the v1p1beta1 API.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/speech-to-text/docs/quotas](https://docs.cloud.google.com/speech-to-text/docs/quotas)
- [https://docs.cloud.google.com/speech-to-text/docs/batch-recognize](https://docs.cloud.google.com/speech-to-text/docs/batch-recognize)
- [https://docs.cloud.google.com/speech-to-text/docs/quickstarts/transcribe-client-libraries](https://docs.cloud.google.com/speech-to-text/docs/quickstarts/transcribe-client-libraries)
- [https://docs.cloud.google.com/speech-to-text/docs/overview](https://docs.cloud.google.com/speech-to-text/docs/overview)

## Supporting Pages

### Quotas and limits \_|\_ Cloud Speech-to-Text \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/speech-to-text/docs/quotas](https://docs.cloud.google.com/speech-to-text/docs/quotas)
- Source ID: `site-docs-root`
- Final score: 305
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following limits apply to these resources: Speech Adaptation Limit Value Maximum allowable phrase boost value 20 Phrases in a PhraseSet 1,200 Phrases per request 5,000 Characters per phrase 100 Total characters per request 100,000 Maximum number of items in a CustomClass 500 Maximum characters per CustomClass item 500 Maximum number of PhraseSets per SpeechAdaptation 20 Maximum number of CustomClasses per SpeechAdaptation 20 Resource limits The current API resource limits for Cloud Speech-to-Text are as follows (and are subject to change): Type of Limit Usage Limit Number of recognizers (per region) 5,000 Number of custom classes (per region) 5,000 Number of phrase sets (per region) 5,000 Request limits The current API usage limits for Cloud Speech-to-Text are as follows (and are subject to change): Type of Limit Usage Limit Resource requests per 60 seconds (per region) 100 Operation requests per 60 seconds (per region) 150 Synchronous recognition requests per 60 seconds (per region) 300 Streaming recognition requests per 60 seconds (per region) 1,000,000 Concurrent StreamingRecognize sessions (per region) 300 Batch recognition requests per 60 seconds (per region) 150 Streaming recognition has a quota limit of 300 concurrent sessions per 5 minutes and a limit of 3,000 requests per minute, which applies to all concurrent sessions together.
- Home Documentation AI and ML Cloud Speech-to-Text Send feedback Quotas and limits Stay organized with collections Save and categorize content based on your preferences.
- These limits apply to each Cloud Speech-to-Text developer project, and are shared across all applications and IP addresses using a given a developer project.
- Multiple language recognition Multiple language recognition is only available in the global, US, and EU Cloud Speech-to-Text endpoints.

### "Transcribe long audio files into text \_|\_ Cloud Speech-to-Text \_|\_ Google\

- URL: [https://docs.cloud.google.com/speech-to-text/docs/batch-recognize](https://docs.cloud.google.com/speech-to-text/docs/batch-recognize)
- Source ID: `site-docs-root`
- Final score: 256
- Re-rank relevance: N/A

Evidence snippets:
- This page demonstrates how to transcribe long audio files (longer than one minute) to text using the Speech-to-Text API and asynchronous speech recognition.
- InlineOutputConfig (), ), ) Transcribes the audio into text operation = client . batch recognize ( request = request ) print ( "Waiting for operation to complete..." ) response = operation . result ( timeout = 120 ) for result in response . results [ audio uri ] . transcript . results : print ( f "Transcript: { result . alternatives [ 0 ] . transcript } " ) return response . results [ audio uri ] . transcript Perform batch recognition and write results to Cloud Storage Here is an example of performing batch speech recognition on an audio file in Cloud Storage and reading the transcription results from the output file in Cloud Storage.
- The upper limit for asynchronous speech recognition is 480 minutes (8 hours).
- BatchRecognizeResults . from json ( results bytes , ignore unknown fields = True ) for result in batch recognize results . results : print ( f "Transcript: { result . alternatives [ 0 ] . transcript } " ) return batch recognize results Perform batch recognition on multiple files Here is an example of performing batch speech recognition on multiple audio files in Cloud Storage and reading the transcription results from the output files in Cloud Storage: Python import os import re from typing import List from google.cloud import storage from google.cloud.speech v2 import SpeechClient from google.cloud.speech v2.types import cloud speech PROJECT ID = os . getenv ( "GOOGLE CLOUD PROJECT" ) def transcribe batch multiple files v2 ( audio uris : List [ str ], gcs output path : str , ) - > cloud speech .

### "Transcribe speech to text by using client libraries \_|\_ Cloud Speech-to-Text\

- URL: [https://docs.cloud.google.com/speech-to-text/docs/quickstarts/transcribe-client-libraries](https://docs.cloud.google.com/speech-to-text/docs/quickstarts/transcribe-client-libraries)
- Source ID: `site-docs-root`
- Final score: 249
- Re-rank relevance: N/A

Evidence snippets:
- This page shows you how to send a speech recognition request to Speech-to-Text in your favorite programming language using the Google Cloud Client Libraries.
- Speech-to-Text enables easy integration of Google speech recognition technologies into developer applications.
- After completing all of your requests, call // the "close" method on the client to safely clean up any remaining background resources. try ( SpeechClient speechClient = SpeechClient . create ()) { Path path = Paths . get ( filePath ); byte [] data = Files . readAllBytes ( path ); ByteString audioBytes = ByteString . copyFrom ( data ); String parent = String . format ( "projects/%s/locations/global" , projectId ); // First, create a recognizer Recognizer recognizer = Recognizer . newBuilder () . setModel ( "latest long" ) . addLanguageCodes ( "en-US" ) . build (); CreateRecognizerRequest createRecognizerRequest = CreateRecognizerRequest . newBuilder () . setParent ( parent ) . setRecognizerId ( recognizerId ) . setRecognizer ( recognizer ) . build (); OperationFuture<Recognizer , OperationMetadata > operationFuture = speechClient . createRecognizerAsync ( createRecognizerRequest ); recognizer = operationFuture . get (); // Next, create the transcription request RecognitionConfig recognitionConfig = RecognitionConfig . newBuilder () . setAutoDecodingConfig ( AutoDetectDecodingConfig . newBuilder (). build ()) . build (); RecognizeRequest request = RecognizeRequest . newBuilder () . setConfig ( recognitionConfig ) . setRecognizer ( recognizer . getName ()) . setContent ( audioBytes ) . build (); RecognizeResponse response = speechClient . recognize ( request ); List<SpeechRecognitionResult> results = response . getResultsList (); for ( SpeechRecognitionResult result : results ) { // There can be several alternative transcripts for a given chunk of speech.
- RecognizeRequest ( recognizer = f "projects/ { PROJECT ID } /locations/global/recognizers/ " , config = config , content = audio content , ) Transcribes the audio into text response = client . recognize ( request = request ) for result in response . results : print ( f "Transcript: { result . alternatives [ 0 ] . transcript } " ) return response You sent your first request to Speech-to-Text.

### Cloud Speech-to-Text overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/speech-to-text/docs/overview](https://docs.cloud.google.com/speech-to-text/docs/overview)
- Source ID: `site-docs-root`
- Final score: 246
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Cloud Speech-to-Text API responses After Cloud Speech-to-Text API processes audio, it returns the transcription results in SpeechRecognitionResult messages for synchronous and batch requests, and in StreamingRecognitionResult messages for streaming requests.
- The following methods are available: Synchronous recognition (REST and gRPC) sends audio data to the Cloud Speech-to-Text API, performs recognition on that data, and returns results after all audio has been processed.
- Recognition features Cloud Speech-to-Text API has additional recognition features such as automatic punctuation and word-level confidence .
- Asynchronous recognition (REST and gRPC) sends audio data to the Cloud Speech-to-Text API and initiates a long-running operation .

