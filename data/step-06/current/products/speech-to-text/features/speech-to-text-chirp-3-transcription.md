---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:19:11.983Z"
product_name: "Speech-to-Text"
product_slug: "speech-to-text"
feature_name: "Speech-to-Text Chirp 3: Transcription"
feature_slug: "speech-to-text-chirp-3-transcription"
latest_feature_date: "2025-08-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/speech-to-text/docs/models/chirp-3"
  - "https://docs.cloud.google.com/speech-to-text/docs/models/chirp-2"
  - "https://docs.cloud.google.com/speech-to-text/docs/batch-recognize"
  - "https://docs.cloud.google.com/speech-to-text/docs/quickstarts/transcribe-api"
keywords:
  - "speech"
  - "to"
  - "text"
  - "chirp"
  - "transcription"
  - "is"
  - "launched"
  - "in"
---

# Speech-to-Text Chirp 3: Transcription

Product: Speech-to-Text
Coverage: MEDIUM

## Step 02 Summary

Speech-to-Text Chirp 3: Transcription is launched in Public Preview, expanding transcription to over 85 languages and locales and supporting StreamingRecognize and SyncRecognize for real-time and short-form audio with improved accuracy and speed; Speech-to-Text Chirp 3: Transcription is launched in Private Preview as a new generation multilingual ASR model with improved accuracy and speed, including support for BatchRecognize requests in the Speech-to-Text v2 API for long-form audio.

## Extended Definition

Speech-to-Text Chirp 3: Transcription is launched in Public Preview, expanding transcription to over 85 languages and locales and supporting StreamingRecognize and SyncRecognize for real-time and short-form audio with improved accuracy and speed; Speech-to-Text Chirp 3: Transcription is launched in Private Preview as a new generation multilingual ASR model with improved accuracy and speed, including support for BatchRecognize requests in the Speech-to-Text v2 API for long-form audio.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/speech-to-text/docs/models/chirp-3](https://docs.cloud.google.com/speech-to-text/docs/models/chirp-3)
- [https://docs.cloud.google.com/speech-to-text/docs/models/chirp-2](https://docs.cloud.google.com/speech-to-text/docs/models/chirp-2)
- [https://docs.cloud.google.com/speech-to-text/docs/batch-recognize](https://docs.cloud.google.com/speech-to-text/docs/batch-recognize)
- [https://docs.cloud.google.com/speech-to-text/docs/quickstarts/transcribe-api](https://docs.cloud.google.com/speech-to-text/docs/quickstarts/transcribe-api)

## Supporting Pages

### "Chirp 3 Transcription: Enhanced multilingual accuracy \_|\_ Cloud Speech-to-Text\

- URL: [https://docs.cloud.google.com/speech-to-text/docs/models/chirp-3](https://docs.cloud.google.com/speech-to-text/docs/models/chirp-3)
- Source ID: `site-docs-root`
- Final score: 333
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Model Model identifier Chirp 3 chirp 3 API methods Not all recognition methods support the same language availability sets, because Chirp 3 is available in the Speech-to-Text API V2, it supports the following recognition methods: API version API method Support V2 Speech.StreamingRecognize (good for streaming and real-time audio) Supported V2 Speech.Recognize (good for audio shorter than one minute) Supported V2 Speech.BatchRecognize (good for long audio 1 minute to 1 hour in general, but up to 20 minutes with word-level timestamp enabled) Supported Note: You can always find the latest list of supported locales and features for each transcription model, using the locations API as explained here.
- Model details Chirp 3: Transcription, is exclusively available within the Speech-to-Text API V2.
- RecognitionConfig , audio : list ) - > list : yield config yield from audio Transcribes the audio into text responses iterator = client . streaming recognize ( requests = requests ( config request , audio requests ) ) responses = [] for response in responses iterator : responses . append ( response ) for result in response . results : print ( f "Transcript: { result . alternatives [ 0 ] . transcript } " ) return responses Perform synchronous speech recognition Python import os from google.cloud.speech v2 import SpeechClient from google.cloud.speech v2.types import cloud speech from google.api core.client options import ClientOptions PROJECT ID = os . getenv ( "GOOGLE CLOUD PROJECT" ) REGION = "us" def transcribe sync chirp3 ( audio file : str ) - > cloud speech .
- InlineOutputConfig (), ), ) Transcribes the audio into text operation = client . batch recognize ( request = request ) print ( "Waiting for operation to complete..." ) response = operation . result ( timeout = 120 ) for result in response . results [ audio uri ] . transcript . results : print ( f "Transcript: { result . alternatives [ 0 ] . transcript } " ) return response . results [ audio uri ] . transcript Use Chirp 3 features Explore how you can use the latest features, with code examples: Perform a language-agnostic transcription Chirp 3, can automatically identify and transcribe in the dominant language spoken in the audio which is essential for multilingual applications.

### "Chirp 2: Enhanced multilingual accuracy \_|\_ Cloud Speech-to-Text \_|\_\

- URL: [https://docs.cloud.google.com/speech-to-text/docs/models/chirp-2](https://docs.cloud.google.com/speech-to-text/docs/models/chirp-2)
- Source ID: `site-docs-root`
- Final score: 319
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Model Model identifier Chirp 2 chirp 2 API methods As Chirp 2 is exclusively available within the Speech-to-Text API V2, it supports the following recognition methods: Model Model identifier Language support V2 Speech.StreamingRecognize (good for streaming and real-time audio) Limited V2 Speech.Recognize (good for short audio < 1 min) On par with Chirp V2 Speech.BatchRecognize (good for long audio 1 min to 8 hrs) On par with Chirp You can always find the latest list of supported languages and features for each transcription model, using the locations API .
- InlineOutputConfig (), ), ) Transcribes the audio into text operation = client . batch recognize ( request = request ) print ( "Waiting for operation to complete..." ) response = operation . result ( timeout = 120 ) for result in response . results [ audio uri ] . transcript . results : print ( f "Transcript: { result . alternatives [ 0 ] . transcript } " ) return response . results [ audio uri ] . transcript Using Chirp 2 Features Explore how you can use the latest features, with code examples: Perform a language-agnostic transcription import os from google.cloud.speech v2 import SpeechClient from google.cloud.speech v2.types import cloud speech from google.api core.client options import ClientOptions PROJECT ID = os . getenv ( "GOOGLE CLOUD PROJECT" ) def transcribe sync chirp2 auto detect language ( audio file : str ) - > cloud speech .
- RecognitionConfig , audio : list ) - > list : yield config yield from audio Transcribes the audio into text responses iterator = client . streaming recognize ( requests = requests ( config request , audio requests ) ) responses = [] for response in responses iterator : responses . append ( response ) for result in response . results : print ( f "Transcript: { result . alternatives [ 0 ] . transcript } " ) return responses Perform synchronous speech recognition import os from google.cloud.speech v2 import SpeechClient from google.cloud.speech v2.types import cloud speech from google.api core.client options import ClientOptions PROJECT ID = os . getenv ( "GOOGLE CLOUD PROJECT" ) def transcribe sync chirp2 ( audio file : str ) - > cloud speech .
- Example: "resources/audio.wav" Returns: cloud speech.RecognizeResponse: The response from the Speech-to-Text API V2 containing the transcription results. """ Instantiates a client client = SpeechClient ( client options = ClientOptions ( api endpoint = "us-central1-speech.googleapis.com" , ) ) Reads a file as bytes with open ( audio file , "rb" ) as f : content = f . read () In practice, stream should be a generator yielding chunks of audio data chunk length = len ( content ) // 5 stream = [ content [ start : start + chunk length ] for start in range ( 0 , len ( content ), chunk length ) ] audio requests = ( cloud speech .

### "Transcribe long audio files into text \_|\_ Cloud Speech-to-Text \_|\_ Google\

- URL: [https://docs.cloud.google.com/speech-to-text/docs/batch-recognize](https://docs.cloud.google.com/speech-to-text/docs/batch-recognize)
- Source ID: `site-docs-root`
- Final score: 317
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- InlineOutputConfig (), ), ) Transcribes the audio into text operation = client . batch recognize ( request = request ) print ( "Waiting for operation to complete..." ) response = operation . result ( timeout = 120 ) for result in response . results [ audio uri ] . transcript . results : print ( f "Transcript: { result . alternatives [ 0 ] . transcript } " ) return response . results [ audio uri ] . transcript Perform batch recognition and write results to Cloud Storage Here is an example of performing batch speech recognition on an audio file in Cloud Storage and reading the transcription results from the output file in Cloud Storage.
- BatchRecognizeResults . from json ( results bytes , ignore unknown fields = True ) for result in batch recognize results . results : print ( f "Transcript: { result . alternatives [ 0 ] . transcript } " ) return batch recognize results Perform batch recognition on multiple files Here is an example of performing batch speech recognition on multiple audio files in Cloud Storage and reading the transcription results from the output files in Cloud Storage: Python import os import re from typing import List from google.cloud import storage from google.cloud.speech v2 import SpeechClient from google.cloud.speech v2.types import cloud speech PROJECT ID = os . getenv ( "GOOGLE CLOUD PROJECT" ) def transcribe batch multiple files v2 ( audio uris : List [ str ], gcs output path : str , ) - > cloud speech .
- The service account email address is the following: service- PROJECT NUMBER @gcp-sa-speech.iam.gserviceaccount.com In order to transcribe Cloud Storage files in another project, you can give this service account the [Speech-to-Text Service Agent][speech-service-agent] role in the other project: gcloud projects add-iam-policy-binding PROJECT ID \ --member = serviceAccount:service- PROJECT NUMBER @gcp-sa-speech.iam.gserviceaccount.com \ --role = roles/speech.serviceAgent More information about project IAM policy is available at [Manage access to projects, folders, and organizations][manage-access].
- Perform batch recognition with inline results Here is an example of performing batch speech recognition on an audio file in Cloud Storage and reading the transcription results inline from the response: Python import os from google.cloud.speech v2 import SpeechClient from google.cloud.speech v2.types import cloud speech PROJECT ID = os . getenv ( "GOOGLE CLOUD PROJECT" ) def transcribe batch gcs input inline output v2 ( audio uri : str , ) - > cloud speech .

### "Transcribe speech to text by using the command line \_|\_ Cloud Speech-to-Text\

- URL: [https://docs.cloud.google.com/speech-to-text/docs/quickstarts/transcribe-api](https://docs.cloud.google.com/speech-to-text/docs/quickstarts/transcribe-api)
- Source ID: `site-docs-root`
- Final score: 312
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You should see a response similar to the following: { "results" : [ { "alternatives" : [ { "transcript" : "how old is the Brooklyn Bridge" , "confidence" : 0.98267895 } ] } ] } You sent your first request to Speech-to-Text.
- To initialize the gcloud CLI, run the following command: gcloud init Make an audio transcription request Use the following code sample to send a recognize REST request to the Speech-to-Text API.
- This page shows you how to send a speech recognition request to Speech-to-Text using the REST interface and the curl command.
- Replace /full/path/to/audio/file.wav with the path to the audio file you want to transcribe: echo "{ \"config\": { \"auto decoding config\": {}, \"language codes\": [\"en-US\"], \"model\": \"long\" }, \"content\": \" $( base64 -w 0 /full/path/to/audio/file.wav sed 's/+/-/g; s/\// /g' ) \" }" > /tmp/data.txt Use curl to make a recognize request: curl -X POST -H "Content-Type: application/json; charset=utf-8" \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -d @/tmp/data.txt \ https://speech.googleapis.com/v2/projects/ PROJECT ID /locations/global/recognizers/ :recognize Note: To pass a filename to curl , you use the -d option (for "data") and precede the filename with an @ sign.

