---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:19:12.005Z"
product_name: "Speech-to-Text"
product_slug: "speech-to-text"
feature_name: "Multi-channel transcription"
feature_slug: "multi-channel-transcription"
latest_feature_date: "2018-07-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/speech-to-text/docs/quickstarts/transcribe-client-libraries"
  - "https://docs.cloud.google.com/speech-to-text/docs/batch-recognize"
  - "https://docs.cloud.google.com/speech-to-text/docs/quickstarts/transcribe-api"
  - "https://docs.cloud.google.com/speech-to-text/docs/models/chirp-3"
keywords:
  - "multi"
  - "channel"
  - "transcription"
  - "speech"
  - "to"
  - "text"
  - "can"
  - "transcribe"
---

# Multi-channel transcription

Product: Speech-to-Text
Coverage: MEDIUM

## Step 02 Summary

Cloud Speech-to-Text can transcribe audio data that includes multiple channels.

## Extended Definition

Cloud Speech-to-Text can transcribe audio data that includes multiple channels.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/speech-to-text/docs/quickstarts/transcribe-client-libraries](https://docs.cloud.google.com/speech-to-text/docs/quickstarts/transcribe-client-libraries)
- [https://docs.cloud.google.com/speech-to-text/docs/batch-recognize](https://docs.cloud.google.com/speech-to-text/docs/batch-recognize)
- [https://docs.cloud.google.com/speech-to-text/docs/quickstarts/transcribe-api](https://docs.cloud.google.com/speech-to-text/docs/quickstarts/transcribe-api)
- [https://docs.cloud.google.com/speech-to-text/docs/models/chirp-3](https://docs.cloud.google.com/speech-to-text/docs/models/chirp-3)

## Supporting Pages

### "Transcribe speech to text by using client libraries \_|\_ Cloud Speech-to-Text\

- URL: [https://docs.cloud.google.com/speech-to-text/docs/quickstarts/transcribe-client-libraries](https://docs.cloud.google.com/speech-to-text/docs/quickstarts/transcribe-client-libraries)
- Source ID: `site-docs-root`
- Final score: 324
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can send audio data to the Speech-to-Text API, which then returns a text transcription of that audio file.
- After completing all of your requests, call // the "close" method on the client to safely clean up any remaining background resources. try ( SpeechClient speechClient = SpeechClient . create ()) { Path path = Paths . get ( filePath ); byte [] data = Files . readAllBytes ( path ); ByteString audioBytes = ByteString . copyFrom ( data ); String parent = String . format ( "projects/%s/locations/global" , projectId ); // First, create a recognizer Recognizer recognizer = Recognizer . newBuilder () . setModel ( "latest long" ) . addLanguageCodes ( "en-US" ) . build (); CreateRecognizerRequest createRecognizerRequest = CreateRecognizerRequest . newBuilder () . setParent ( parent ) . setRecognizerId ( recognizerId ) . setRecognizer ( recognizer ) . build (); OperationFuture<Recognizer , OperationMetadata > operationFuture = speechClient . createRecognizerAsync ( createRecognizerRequest ); recognizer = operationFuture . get (); // Next, create the transcription request RecognitionConfig recognitionConfig = RecognitionConfig . newBuilder () . setAutoDecodingConfig ( AutoDetectDecodingConfig . newBuilder (). build ()) . build (); RecognizeRequest request = RecognizeRequest . newBuilder () . setConfig ( recognitionConfig ) . setRecognizer ( recognizer . getName ()) . setContent ( audioBytes ) . build (); RecognizeResponse response = speechClient . recognize ( request ); List<SpeechRecognitionResult> results = response . getResultsList (); for ( SpeechRecognitionResult result : results ) { // There can be several alternative transcripts for a given chunk of speech.
- RecognizeRequest ( recognizer = f "projects/ { PROJECT ID } /locations/global/recognizers/ " , config = config , content = audio content , ) Transcribes the audio into text response = client . recognize ( request = request ) for result in response . results : print ( f "Transcript: { result . alternatives [ 0 ] . transcript } " ) return response You sent your first request to Speech-to-Text.
- Home Documentation AI and ML Cloud Speech-to-Text Send feedback Transcribe speech to text by using client libraries Stay organized with collections Save and categorize content based on your preferences.

### "Transcribe long audio files into text \_|\_ Cloud Speech-to-Text \_|\_ Google\

- URL: [https://docs.cloud.google.com/speech-to-text/docs/batch-recognize](https://docs.cloud.google.com/speech-to-text/docs/batch-recognize)
- Source ID: `site-docs-root`
- Final score: 308
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- BatchRecognizeResults . from json ( results bytes , ignore unknown fields = True ) for result in batch recognize results . results : print ( f "Transcript: { result . alternatives [ 0 ] . transcript } " ) return batch recognize results Perform batch recognition on multiple files Here is an example of performing batch speech recognition on multiple audio files in Cloud Storage and reading the transcription results from the output files in Cloud Storage: Python import os import re from typing import List from google.cloud import storage from google.cloud.speech v2 import SpeechClient from google.cloud.speech v2.types import cloud speech PROJECT ID = os . getenv ( "GOOGLE CLOUD PROJECT" ) def transcribe batch multiple files v2 ( audio uris : List [ str ], gcs output path : str , ) - > cloud speech .
- InlineOutputConfig (), ), ) Transcribes the audio into text operation = client . batch recognize ( request = request ) print ( "Waiting for operation to complete..." ) response = operation . result ( timeout = 120 ) for result in response . results [ audio uri ] . transcript . results : print ( f "Transcript: { result . alternatives [ 0 ] . transcript } " ) return response . results [ audio uri ] . transcript Perform batch recognition and write results to Cloud Storage Here is an example of performing batch speech recognition on an audio file in Cloud Storage and reading the transcription results from the output file in Cloud Storage.
- The service account email address is the following: service- PROJECT NUMBER @gcp-sa-speech.iam.gserviceaccount.com In order to transcribe Cloud Storage files in another project, you can give this service account the [Speech-to-Text Service Agent][speech-service-agent] role in the other project: gcloud projects add-iam-policy-binding PROJECT ID \ --member = serviceAccount:service- PROJECT NUMBER @gcp-sa-speech.iam.gserviceaccount.com \ --role = roles/speech.serviceAgent More information about project IAM policy is available at [Manage access to projects, folders, and organizations][manage-access].
- BatchRecognizeResponse : """Transcribes audio from multiple Google Cloud Storage URIs using the Google Cloud Speech-to-Text API.

### "Transcribe speech to text by using the command line \_|\_ Cloud Speech-to-Text\

- URL: [https://docs.cloud.google.com/speech-to-text/docs/quickstarts/transcribe-api](https://docs.cloud.google.com/speech-to-text/docs/quickstarts/transcribe-api)
- Source ID: `site-docs-root`
- Final score: 308
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can send audio data to the Speech-to-Text API, which then returns a text transcription of that audio file.
- Home Documentation AI and ML Cloud Speech-to-Text Send feedback Transcribe speech to text by using the command line Stay organized with collections Save and categorize content based on your preferences.
- To initialize the gcloud CLI, run the following command: gcloud init Make an audio transcription request Use the following code sample to send a recognize REST request to the Speech-to-Text API.
- Replace /full/path/to/audio/file.wav with the path to the audio file you want to transcribe: echo "{ \"config\": { \"auto decoding config\": {}, \"language codes\": [\"en-US\"], \"model\": \"long\" }, \"content\": \" $( base64 -w 0 /full/path/to/audio/file.wav sed 's/+/-/g; s/\// /g' ) \" }" > /tmp/data.txt Use curl to make a recognize request: curl -X POST -H "Content-Type: application/json; charset=utf-8" \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -d @/tmp/data.txt \ https://speech.googleapis.com/v2/projects/ PROJECT ID /locations/global/recognizers/ :recognize Note: To pass a filename to curl , you use the -d option (for "data") and precede the filename with an @ sign.

### "Chirp 3 Transcription: Enhanced multilingual accuracy \_|\_ Cloud Speech-to-Text\

- URL: [https://docs.cloud.google.com/speech-to-text/docs/models/chirp-3](https://docs.cloud.google.com/speech-to-text/docs/models/chirp-3)
- Source ID: `site-docs-root`
- Final score: 307
- Re-rank relevance: N/A

Evidence snippets:
- InlineOutputConfig (), ), ) Transcribes the audio into text operation = client . batch recognize ( request = request ) print ( "Waiting for operation to complete..." ) response = operation . result ( timeout = 120 ) for result in response . results [ audio uri ] . transcript . results : print ( f "Transcript: { result . alternatives [ 0 ] . transcript } " ) return response . results [ audio uri ] . transcript Use Chirp 3 features Explore how you can use the latest features, with code examples: Perform a language-agnostic transcription Chirp 3, can automatically identify and transcribe in the dominant language spoken in the audio which is essential for multilingual applications.
- Model Model identifier Chirp 3 chirp 3 API methods Not all recognition methods support the same language availability sets, because Chirp 3 is available in the Speech-to-Text API V2, it supports the following recognition methods: API version API method Support V2 Speech.StreamingRecognize (good for streaming and real-time audio) Supported V2 Speech.Recognize (good for audio shorter than one minute) Supported V2 Speech.BatchRecognize (good for long audio 1 minute to 1 hour in general, but up to 20 minutes with word-level timestamp enabled) Supported Note: You can always find the latest list of supported locales and features for each transcription model, using the locations API as explained here.
- RecognizeRequest ( recognizer = f "projects/ { PROJECT ID } /locations/ { REGION } /recognizers/ " , config = config , content = audio content , ) Transcribes the audio into text response = client . recognize ( request = request ) for result in response . results : print ( f "Transcript: { result . alternatives [ 0 ] . transcript } " ) print ( f "Detected Language: { result . language code } " ) return response Perform a language-restricted transcription Chirp 3 can automatically identify and transcribe the dominant language in an audio file.
- Home Documentation AI and ML Cloud Speech-to-Text Send feedback Chirp 3 Transcription: Enhanced multilingual accuracy Stay organized with collections Save and categorize content based on your preferences.

