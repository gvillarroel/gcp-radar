---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:19:11.981Z"
product_name: "Speech-to-Text"
product_slug: "speech-to-text"
feature_name: "Chirp 3: Transcription (Speech-to-Text V2)"
feature_slug: "chirp-3-transcription-speech-to-text-v2"
latest_feature_date: "2025-10-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/speech-to-text/docs/models/chirp-3"
  - "https://docs.cloud.google.com/speech-to-text/docs/models/chirp-2"
  - "https://docs.cloud.google.com/speech-to-text/docs/batch-recognize"
  - "https://docs.cloud.google.com/speech-to-text/docs/custom-speech-models"
keywords:
  - "chirp"
  - "transcription"
  - "speech"
  - "to"
  - "text"
  - "v2"
  - "announced"
  - "general"
---

# Chirp 3: Transcription (Speech-to-Text V2)

Product: Speech-to-Text
Coverage: MEDIUM

## Step 02 Summary

Speech-to-Text announced general availability of the Chirp 3: Transcription model in the Speech-to-Text API V2.

## Extended Definition

Speech-to-Text announced general availability of the Chirp 3: Transcription model in the Speech-to-Text API V2.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/speech-to-text/docs/models/chirp-3](https://docs.cloud.google.com/speech-to-text/docs/models/chirp-3)
- [https://docs.cloud.google.com/speech-to-text/docs/models/chirp-2](https://docs.cloud.google.com/speech-to-text/docs/models/chirp-2)
- [https://docs.cloud.google.com/speech-to-text/docs/batch-recognize](https://docs.cloud.google.com/speech-to-text/docs/batch-recognize)
- [https://docs.cloud.google.com/speech-to-text/docs/custom-speech-models](https://docs.cloud.google.com/speech-to-text/docs/custom-speech-models)

## Supporting Pages

### "Chirp 3 Transcription: Enhanced multilingual accuracy \_|\_ Cloud Speech-to-Text\

- URL: [https://docs.cloud.google.com/speech-to-text/docs/models/chirp-3](https://docs.cloud.google.com/speech-to-text/docs/models/chirp-3)
- Source ID: `site-docs-root`
- Final score: 296
- Re-rank relevance: N/A

Evidence snippets:
- Model Model identifier Chirp 3 chirp 3 API methods Not all recognition methods support the same language availability sets, because Chirp 3 is available in the Speech-to-Text API V2, it supports the following recognition methods: API version API method Support V2 Speech.StreamingRecognize (good for streaming and real-time audio) Supported V2 Speech.Recognize (good for audio shorter than one minute) Supported V2 Speech.BatchRecognize (good for long audio 1 minute to 1 hour in general, but up to 20 minutes with word-level timestamp enabled) Supported Note: You can always find the latest list of supported locales and features for each transcription model, using the locations API as explained here.
- Model details Chirp 3: Transcription, is exclusively available within the Speech-to-Text API V2.
- RecognitionConfig , audio : list ) - > list : yield config yield from audio Transcribes the audio into text responses iterator = client . streaming recognize ( requests = requests ( config request , audio requests ) ) responses = [] for response in responses iterator : responses . append ( response ) for result in response . results : print ( f "Transcript: { result . alternatives [ 0 ] . transcript } " ) return responses Perform synchronous speech recognition Python import os from google.cloud.speech v2 import SpeechClient from google.cloud.speech v2.types import cloud speech from google.api core.client options import ClientOptions PROJECT ID = os . getenv ( "GOOGLE CLOUD PROJECT" ) REGION = "us" def transcribe sync chirp3 ( audio file : str ) - > cloud speech .
- Example: "resources/audio.wav" Returns: cloud speech.RecognizeResponse: The response from the Speech-to-Text API V2 containing the transcription results. """ Instantiates a client client = SpeechClient ( client options = ClientOptions ( api endpoint = f " { REGION } -speech.googleapis.com" , ) ) Reads a file as bytes with open ( audio file , "rb" ) as f : content = f . read () In practice, stream should be a generator yielding chunks of audio data chunk length = len ( content ) // 5 stream = [ content [ start : start + chunk length ] for start in range ( 0 , len ( content ), chunk length ) ] audio requests = ( cloud speech .

### "Chirp 2: Enhanced multilingual accuracy \_|\_ Cloud Speech-to-Text \_|\_\

- URL: [https://docs.cloud.google.com/speech-to-text/docs/models/chirp-2](https://docs.cloud.google.com/speech-to-text/docs/models/chirp-2)
- Source ID: `site-docs-root`
- Final score: 274
- Re-rank relevance: N/A

Evidence snippets:
- InlineOutputConfig (), ), ) Transcribes the audio into text operation = client . batch recognize ( request = request ) print ( "Waiting for operation to complete..." ) response = operation . result ( timeout = 120 ) for result in response . results [ audio uri ] . transcript . results : print ( f "Transcript: { result . alternatives [ 0 ] . transcript } " ) return response . results [ audio uri ] . transcript Using Chirp 2 Features Explore how you can use the latest features, with code examples: Perform a language-agnostic transcription import os from google.cloud.speech v2 import SpeechClient from google.cloud.speech v2.types import cloud speech from google.api core.client options import ClientOptions PROJECT ID = os . getenv ( "GOOGLE CLOUD PROJECT" ) def transcribe sync chirp2 auto detect language ( audio file : str ) - > cloud speech .
- Model Model identifier Chirp 2 chirp 2 API methods As Chirp 2 is exclusively available within the Speech-to-Text API V2, it supports the following recognition methods: Model Model identifier Language support V2 Speech.StreamingRecognize (good for streaming and real-time audio) Limited V2 Speech.Recognize (good for short audio < 1 min) On par with Chirp V2 Speech.BatchRecognize (good for long audio 1 min to 8 hrs) On par with Chirp You can always find the latest list of supported languages and features for each transcription model, using the locations API .
- RecognitionConfig , audio : list ) - > list : yield config yield from audio Transcribes the audio into text responses iterator = client . streaming recognize ( requests = requests ( config request , audio requests ) ) responses = [] for response in responses iterator : responses . append ( response ) for result in response . results : print ( f "Transcript: { result . alternatives [ 0 ] . transcript } " ) return responses Perform synchronous speech recognition import os from google.cloud.speech v2 import SpeechClient from google.cloud.speech v2.types import cloud speech from google.api core.client options import ClientOptions PROJECT ID = os . getenv ( "GOOGLE CLOUD PROJECT" ) def transcribe sync chirp2 ( audio file : str ) - > cloud speech .
- RecognizeRequest ( recognizer = f "projects/ { PROJECT ID } /locations/us-central1/recognizers/ " , config = config , content = audio content , ) Transcribes the audio into text response = client . recognize ( request = request ) for result in response . results : print ( f "Transcript: { result . alternatives [ 0 ] . transcript } " ) print ( f "Detected Language: { result . language code } " ) return response Perform speech translation import os from google.cloud.speech v2 import SpeechClient from google.cloud.speech v2.types import cloud speech from google.api core.client options import ClientOptions PROJECT ID = os . getenv ( "GOOGLE CLOUD PROJECT" ) def translate sync chirp2 ( audio file : str ) - > cloud speech .

### "Transcribe long audio files into text \_|\_ Cloud Speech-to-Text \_|\_ Google\

- URL: [https://docs.cloud.google.com/speech-to-text/docs/batch-recognize](https://docs.cloud.google.com/speech-to-text/docs/batch-recognize)
- Source ID: `site-docs-root`
- Final score: 272
- Re-rank relevance: N/A

Evidence snippets:
- BatchRecognizeResults . from json ( results bytes , ignore unknown fields = True ) for result in batch recognize results . results : print ( f "Transcript: { result . alternatives [ 0 ] . transcript } " ) return batch recognize results Perform batch recognition on multiple files Here is an example of performing batch speech recognition on multiple audio files in Cloud Storage and reading the transcription results from the output files in Cloud Storage: Python import os import re from typing import List from google.cloud import storage from google.cloud.speech v2 import SpeechClient from google.cloud.speech v2.types import cloud speech PROJECT ID = os . getenv ( "GOOGLE CLOUD PROJECT" ) def transcribe batch multiple files v2 ( audio uris : List [ str ], gcs output path : str , ) - > cloud speech .
- InlineOutputConfig (), ), ) Transcribes the audio into text operation = client . batch recognize ( request = request ) print ( "Waiting for operation to complete..." ) response = operation . result ( timeout = 120 ) for result in response . results [ audio uri ] . transcript . results : print ( f "Transcript: { result . alternatives [ 0 ] . transcript } " ) return response . results [ audio uri ] . transcript Perform batch recognition and write results to Cloud Storage Here is an example of performing batch speech recognition on an audio file in Cloud Storage and reading the transcription results from the output file in Cloud Storage.
- Perform batch recognition with inline results Here is an example of performing batch speech recognition on an audio file in Cloud Storage and reading the transcription results inline from the response: Python import os from google.cloud.speech v2 import SpeechClient from google.cloud.speech v2.types import cloud speech PROJECT ID = os . getenv ( "GOOGLE CLOUD PROJECT" ) def transcribe batch gcs input inline output v2 ( audio uri : str , ) - > cloud speech .
- The service account email address is the following: service- PROJECT NUMBER @gcp-sa-speech.iam.gserviceaccount.com In order to transcribe Cloud Storage files in another project, you can give this service account the [Speech-to-Text Service Agent][speech-service-agent] role in the other project: gcloud projects add-iam-policy-binding PROJECT ID \ --member = serviceAccount:service- PROJECT NUMBER @gcp-sa-speech.iam.gserviceaccount.com \ --role = roles/speech.serviceAgent More information about project IAM policy is available at [Manage access to projects, folders, and organizations][manage-access].

### "Overview of custom speech models \_|\_ Cloud Speech-to-Text \_|\_ Google\

- URL: [https://docs.cloud.google.com/speech-to-text/docs/custom-speech-models](https://docs.cloud.google.com/speech-to-text/docs/custom-speech-models)
- Source ID: `site-docs-root`
- Final score: 269
- Re-rank relevance: N/A

Evidence snippets:
- Inference : You will be charged for the number of streamed seconds of audio for transcription, in alignment with the general Cloud Speech-to-Text billing.
- Following a successful training, you can deploy a Custom Speech-to-Text model in an endpoint with one click, and use it directly through the Cloud Cloud Speech-to-Text V2 API for inference and benchmarking.
- How does it work You can use Custom Speech-to-Text models to augment a base transcription model to improve transcription recognition.
- Supported models, languages and regions Custom Speech-to-Text models support the following combinations of models and languages and locales for training: Language BCP-47 Base model German (Germany) de-DE latest long English (Australia) en-AU latest long English (United Kingdom) en-GB latest long English (India) en-IN latest long English (United States) en-US latest long Spanish (United States) es-US latest long Spanish (Spain) es-ES latest long French (Canada) fr-CA latest long French (France) fr-FR latest long Hindi (India) hi-IN latest long Italian (Italy) it-IT latest long Japanese (Japan) ja-JP latest long Korean (South Korea) ko-KR latest long Dutch (Netherlands) nl-NL latest long Portuguese (Brazil) pt-BR latest long Portuguese (Portugal) pt-PT latest long Additionally, to comply with your data residency requirements we offer training and deployment hardware in different regions.

