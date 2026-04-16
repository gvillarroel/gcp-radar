---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:19:11.992Z"
product_name: "Speech-to-Text"
product_slug: "speech-to-text"
feature_name: "Multi-region endpoints"
feature_slug: "multi-region-endpoints"
latest_feature_date: "2021-06-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/speech-to-text/docs/custom-speech-models/deploy-model"
  - "https://docs.cloud.google.com/speech-to-text/docs/custom-speech-models"
  - "https://docs.cloud.google.com/speech-to-text/docs/models/chirp-3"
  - "https://docs.cloud.google.com/speech-to-text/docs/multiple-languages"
keywords:
  - "multi"
  - "region"
  - "endpoints"
  - "speech"
  - "to"
  - "text"
  - "added"
  - "ga"
---

# Multi-region endpoints

Product: Speech-to-Text
Coverage: MEDIUM

## Step 02 Summary

Speech-to-Text added GA support for multi-region endpoints.

## Extended Definition

Speech-to-Text added GA support for multi-region endpoints.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/speech-to-text/docs/custom-speech-models/deploy-model](https://docs.cloud.google.com/speech-to-text/docs/custom-speech-models/deploy-model)
- [https://docs.cloud.google.com/speech-to-text/docs/custom-speech-models](https://docs.cloud.google.com/speech-to-text/docs/custom-speech-models)
- [https://docs.cloud.google.com/speech-to-text/docs/models/chirp-3](https://docs.cloud.google.com/speech-to-text/docs/models/chirp-3)
- [https://docs.cloud.google.com/speech-to-text/docs/multiple-languages](https://docs.cloud.google.com/speech-to-text/docs/multiple-languages)

## Supporting Pages

### "Deploy and manage endpoints \_|\_ Cloud Speech-to-Text \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/speech-to-text/docs/custom-speech-models/deploy-model](https://docs.cloud.google.com/speech-to-text/docs/custom-speech-models/deploy-model)
- Source ID: `site-docs-root`
- Final score: 278
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation AI and ML Cloud Speech-to-Text Send feedback Deploy and manage endpoints Stay organized with collections Save and categorize content based on your preferences.
- You can also list the endpoints that you created in the console, along with their current state and associated custom Cloud Speech-to-Text model.
- Go to Speech in the Google Cloud console, and navigate to Cloud Speech-to-Text.
- Benchmark the model Using the Custom Speech-to-Text model and your benchmarking dataset to assess the accuracy of your model, follow the Measure and improve accuracy guide .

### "Overview of custom speech models \_|\_ Cloud Speech-to-Text \_|\_ Google\

- URL: [https://docs.cloud.google.com/speech-to-text/docs/custom-speech-models](https://docs.cloud.google.com/speech-to-text/docs/custom-speech-models)
- Source ID: `site-docs-root`
- Final score: 277
- Re-rank relevance: N/A

Evidence snippets:
- Supported models, languages and regions Custom Speech-to-Text models support the following combinations of models and languages and locales for training: Language BCP-47 Base model German (Germany) de-DE latest long English (Australia) en-AU latest long English (United Kingdom) en-GB latest long English (India) en-IN latest long English (United States) en-US latest long Spanish (United States) es-US latest long Spanish (Spain) es-ES latest long French (Canada) fr-CA latest long French (France) fr-FR latest long Hindi (India) hi-IN latest long Italian (Italy) it-IT latest long Japanese (Japan) ja-JP latest long Korean (South Korea) ko-KR latest long Dutch (Netherlands) nl-NL latest long Portuguese (Brazil) pt-BR latest long Portuguese (Portugal) pt-PT latest long Additionally, to comply with your data residency requirements we offer training and deployment hardware in different regions.
- Dedicated hardware is supported in the following combinations of models and regions: Base model Google Cloud Region Supported tasks latest long us-east1 Training and Deployment latest long europe-west4 Training and Deployment Quota For Custom Speech-to-Text model training, each Google Cloud project should have enough default quota to run multiple training jobs concurrently and is intended to meet the needs of most projects without additional adjustments.
- Home Documentation AI and ML Cloud Speech-to-Text Send feedback Overview of custom speech models Stay organized with collections Save and categorize content based on your preferences.
- What's next Follow the resources to take advantage of custom speech models in your application: Prepare your training data Train and manage your custom models Deploy and manage model endpoints Use your custom models Evaluate your custom models Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### "Chirp 3 Transcription: Enhanced multilingual accuracy \_|\_ Cloud Speech-to-Text\

- URL: [https://docs.cloud.google.com/speech-to-text/docs/models/chirp-3](https://docs.cloud.google.com/speech-to-text/docs/models/chirp-3)
- Source ID: `site-docs-root`
- Final score: 250
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation AI and ML Cloud Speech-to-Text Send feedback Chirp 3 Transcription: Enhanced multilingual accuracy Stay organized with collections Save and categorize content based on your preferences.
- RecognitionConfig , audio : list ) - > list : yield config yield from audio Transcribes the audio into text responses iterator = client . streaming recognize ( requests = requests ( config request , audio requests ) ) responses = [] for response in responses iterator : responses . append ( response ) for result in response . results : print ( f "Transcript: { result . alternatives [ 0 ] . transcript } " ) return responses Perform synchronous speech recognition Python import os from google.cloud.speech v2 import SpeechClient from google.cloud.speech v2.types import cloud speech from google.api core.client options import ClientOptions PROJECT ID = os . getenv ( "GOOGLE CLOUD PROJECT" ) REGION = "us" def transcribe sync chirp3 ( audio file : str ) - > cloud speech .
- RecognizeRequest ( recognizer = f "projects/ { PROJECT ID } /locations/ { REGION } /recognizers/ " , config = config , content = audio content , ) Transcribes the audio into text response = client . recognize ( request = request ) for result in response . results : print ( f "Transcript: { result . alternatives [ 0 ] . transcript } " ) return response Perform batch speech recognition Python import os from google.cloud.speech v2 import SpeechClient from google.cloud.speech v2.types import cloud speech from google.api core.client options import ClientOptions PROJECT ID = os . getenv ( "GOOGLE CLOUD PROJECT" ) REGION = "us" def transcribe batch 3 ( audio uri : str , ) - > cloud speech .
- Example: "resources/audio.wav" Returns: cloud speech.RecognizeResponse: The response from the Speech-to-Text API V2 containing the transcription results. """ Instantiates a client client = SpeechClient ( client options = ClientOptions ( api endpoint = f " { REGION } -speech.googleapis.com" , ) ) Reads a file as bytes with open ( audio file , "rb" ) as f : content = f . read () In practice, stream should be a generator yielding chunks of audio data chunk length = len ( content ) // 5 stream = [ content [ start : start + chunk length ] for start in range ( 0 , len ( content ), chunk length ) ] audio requests = ( cloud speech .

### "Automatically detect language \_|\_ Cloud Speech-to-Text \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/speech-to-text/docs/multiple-languages](https://docs.cloud.google.com/speech-to-text/docs/multiple-languages)
- Source ID: `site-docs-root`
- Final score: 246
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Note: Specifying multiple languages is only available in the Cloud Speech-to-Text global region and the us and eu multi-regions.
- Home Documentation AI and ML Cloud Speech-to-Text Send feedback Automatically detect language Stay organized with collections Save and categorize content based on your preferences.
- In a request with multiple languages, Cloud Speech-to-Text attempts to transcribe the audio using the best-fit language from the list of alternates you provided.
- Multiple language recognition Cloud Speech-to-Text offers a way for you to specify a set of languages that your audio data might contain.

