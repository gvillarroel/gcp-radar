---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:19:11.983Z"
product_name: "Speech-to-Text"
product_slug: "speech-to-text"
feature_name: "Speech adaptation with custom vocabularies"
feature_slug: "speech-adaptation-with-custom-vocabularies"
latest_feature_date: "2025-10-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/speech-to-text/docs/models/chirp-3"
  - "https://docs.cloud.google.com/speech-to-text/docs/adaptation-model"
  - "https://docs.cloud.google.com/speech-to-text/docs/models/chirp-2"
  - "https://docs.cloud.google.com/speech-to-text/docs/custom-speech-models"
keywords:
  - "speech"
  - "adaptation"
  - "with"
  - "custom"
  - "vocabularies"
  - "chirp"
  - "transcription"
  - "introduced"
---

# Speech adaptation with custom vocabularies

Product: Speech-to-Text
Coverage: MEDIUM

## Step 02 Summary

Chirp 3: Transcription introduced speech adaptation capabilities for custom vocabularies.

## Extended Definition

Chirp 3: Transcription introduced speech adaptation capabilities for custom vocabularies.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/speech-to-text/docs/models/chirp-3](https://docs.cloud.google.com/speech-to-text/docs/models/chirp-3)
- [https://docs.cloud.google.com/speech-to-text/docs/adaptation-model](https://docs.cloud.google.com/speech-to-text/docs/adaptation-model)
- [https://docs.cloud.google.com/speech-to-text/docs/models/chirp-2](https://docs.cloud.google.com/speech-to-text/docs/models/chirp-2)
- [https://docs.cloud.google.com/speech-to-text/docs/custom-speech-models](https://docs.cloud.google.com/speech-to-text/docs/custom-speech-models)

## Supporting Pages

### "Chirp 3 Transcription: Enhanced multilingual accuracy \_|\_ Cloud Speech-to-Text\

- URL: [https://docs.cloud.google.com/speech-to-text/docs/models/chirp-3](https://docs.cloud.google.com/speech-to-text/docs/models/chirp-3)
- Source ID: `site-docs-root`
- Final score: 232
- Re-rank relevance: N/A

Evidence snippets:
- Model Model identifier Chirp 3 chirp 3 API methods Not all recognition methods support the same language availability sets, because Chirp 3 is available in the Speech-to-Text API V2, it supports the following recognition methods: API version API method Support V2 Speech.StreamingRecognize (good for streaming and real-time audio) Supported V2 Speech.Recognize (good for audio shorter than one minute) Supported V2 Speech.BatchRecognize (good for long audio 1 minute to 1 hour in general, but up to 20 minutes with word-level timestamp enabled) Supported Note: You can always find the latest list of supported locales and features for each transcription model, using the locations API as explained here.
- InlineOutputConfig (), ), ) Creates audio transcription job. operation = client . batch recognize ( request = request ) print ( "Waiting for transcription job to complete..." ) response = operation . result ( timeout = 120 ) for result in response . results [ audio uri ] . transcript . results : print ( f "Transcript: { result . alternatives [ 0 ] . transcript } " ) print ( f "Detected Language: { result . language code } " ) print ( f "Speakers per word: { result . alternatives [ 0 ] . words } " ) return response . results [ audio uri ] . transcript Improve accuracy with model adaptation Chirp 3 can improve transcription accuracy for your specific audio using model adaptation.
- Home Documentation AI and ML Cloud Speech-to-Text Send feedback Chirp 3 Transcription: Enhanced multilingual accuracy Stay organized with collections Save and categorize content based on your preferences.
- Model details Chirp 3: Transcription, is exclusively available within the Speech-to-Text API V2.

### "Improve transcription results with model adaptation \_|\_ Cloud Speech-to-Text\

- URL: [https://docs.cloud.google.com/speech-to-text/docs/adaptation-model](https://docs.cloud.google.com/speech-to-text/docs/adaptation-model)
- Source ID: `site-docs-root`
- Final score: 226
- Re-rank relevance: N/A

Evidence snippets:
- Improve transcription using a PhraseSet The following sample builds a PhraseSet with the phrase "fare" and adds it as an inline phrase set in a recognition request: Python import os from google.cloud.speech v2 import SpeechClient from google.cloud.speech v2.types import cloud speech PROJECT ID = os . getenv ( "GOOGLE CLOUD PROJECT" ) def adaptation v2 inline phrase set ( audio file : str ) - > cloud speech .
- Returns: cloud speech.RecognizeResponse: The response object which includes the transcription results. """ Instantiates a client client = SpeechClient () Reads a file as bytes with open ( audio file , "rb" ) as f : audio content = f . read () Define an inline custom class to enhance recognition accuracy with specific items like "fare" etc. custom class name = "your-class-name" custom class = cloud speech .
- Returns: cloud speech.RecognizeResponse: The full response object which includes the transcription results. """ Instantiates a speech client client = SpeechClient () Reads a file as bytes with open ( audio file , "rb" ) as f : audio content = f . read () Create a custom class to improve recognition accuracy for specific terms custom class = cloud speech .
- It then references the CustomClass within an inline phrase set in a recognition request: Python import os from google.cloud.speech v2 import SpeechClient from google.cloud.speech v2.types import cloud speech PROJECT ID = os . getenv ( "GOOGLE CLOUD PROJECT" ) def adaptation v2 inline custom class ( audio file : str , ) - > cloud speech .

### "Chirp 2: Enhanced multilingual accuracy \_|\_ Cloud Speech-to-Text \_|\_\

- URL: [https://docs.cloud.google.com/speech-to-text/docs/models/chirp-2](https://docs.cloud.google.com/speech-to-text/docs/models/chirp-2)
- Source ID: `site-docs-root`
- Final score: 216
- Re-rank relevance: N/A

Evidence snippets:
- InlineOutputConfig (), ), ) Transcribes the audio into text operation = client . batch recognize ( request = request ) print ( "Waiting for operation to complete..." ) response = operation . result ( timeout = 120 ) for result in response . results [ audio uri ] . transcript . results : print ( f "Transcript: { result . alternatives [ 0 ] . transcript } " ) return response . results [ audio uri ] . transcript Using Chirp 2 Features Explore how you can use the latest features, with code examples: Perform a language-agnostic transcription import os from google.cloud.speech v2 import SpeechClient from google.cloud.speech v2.types import cloud speech from google.api core.client options import ClientOptions PROJECT ID = os . getenv ( "GOOGLE CLOUD PROJECT" ) def transcribe sync chirp2 auto detect language ( audio file : str ) - > cloud speech .
- RecognizeRequest ( recognizer = f "projects/ { PROJECT ID } /locations/us-central1/recognizers/ " , config = config , content = audio content , ) Transcribes the audio into text response = client . recognize ( request = request ) for result in response . results : print ( f "Transcript: { result . alternatives [ 0 ] . transcript } " ) return response Improve accuracy with model adaptation import os from google.cloud.speech v2 import SpeechClient from google.cloud.speech v2.types import cloud speech from google.api core.client options import ClientOptions PROJECT ID = os . getenv ( "GOOGLE CLOUD PROJECT" ) def transcribe sync chirp2 model adaptation ( audio file : str ) - > cloud speech .
- Model Model identifier Chirp 2 chirp 2 API methods As Chirp 2 is exclusively available within the Speech-to-Text API V2, it supports the following recognition methods: Model Model identifier Language support V2 Speech.StreamingRecognize (good for streaming and real-time audio) Limited V2 Speech.Recognize (good for short audio < 1 min) On par with Chirp V2 Speech.BatchRecognize (good for long audio 1 min to 8 hrs) On par with Chirp You can always find the latest list of supported languages and features for each transcription model, using the locations API .
- RecognizeRequest ( recognizer = f "projects/ { PROJECT ID } /locations/us-central1/recognizers/ " , config = config , content = audio content , ) Transcribes the audio into text response = client . recognize ( request = request ) for result in response . results : print ( f "Translated transcript: { result . alternatives [ 0 ] . transcript } " ) return response Enable word-level timestamps import os from google.cloud.speech v2 import SpeechClient from google.cloud.speech v2.types import cloud speech from google.api core.client options import ClientOptions PROJECT ID = os . getenv ( "GOOGLE CLOUD PROJECT" ) def transcribe sync chirp2 with timestamps ( audio file : str ) - > cloud speech .

### "Overview of custom speech models \_|\_ Cloud Speech-to-Text \_|\_ Google\

- URL: [https://docs.cloud.google.com/speech-to-text/docs/custom-speech-models](https://docs.cloud.google.com/speech-to-text/docs/custom-speech-models)
- Source ID: `site-docs-root`
- Final score: 191
- Re-rank relevance: N/A

Evidence snippets:
- Supported models, languages and regions Custom Speech-to-Text models support the following combinations of models and languages and locales for training: Language BCP-47 Base model German (Germany) de-DE latest long English (Australia) en-AU latest long English (United Kingdom) en-GB latest long English (India) en-IN latest long English (United States) en-US latest long Spanish (United States) es-US latest long Spanish (Spain) es-ES latest long French (Canada) fr-CA latest long French (France) fr-FR latest long Hindi (India) hi-IN latest long Italian (Italy) it-IT latest long Japanese (Japan) ja-JP latest long Korean (South Korea) ko-KR latest long Dutch (Netherlands) nl-NL latest long Portuguese (Brazil) pt-BR latest long Portuguese (Portugal) pt-PT latest long Additionally, to comply with your data residency requirements we offer training and deployment hardware in different regions.
- Dedicated hardware is supported in the following combinations of models and regions: Base model Google Cloud Region Supported tasks latest long us-east1 Training and Deployment latest long europe-west4 Training and Deployment Quota For Custom Speech-to-Text model training, each Google Cloud project should have enough default quota to run multiple training jobs concurrently and is intended to meet the needs of most projects without additional adjustments.
- Following a successful training, you can deploy a Custom Speech-to-Text model in an endpoint with one click, and use it directly through the Cloud Cloud Speech-to-Text V2 API for inference and benchmarking.
- For the effective training of a Custom Speech-to-Text model, you must provide: Minimum 100 audio-hours of training data, either audio-only or audio with the corresponding text transcript as ground-truth.

