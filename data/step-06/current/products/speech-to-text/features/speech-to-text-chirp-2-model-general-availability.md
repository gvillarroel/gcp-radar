---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:19:11.984Z"
product_name: "Speech-to-Text"
product_slug: "speech-to-text"
feature_name: "Speech-to-Text Chirp 2 model general availability"
feature_slug: "speech-to-text-chirp-2-model-general-availability"
latest_feature_date: "2025-01-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/speech-to-text/docs/models/chirp-3"
  - "https://docs.cloud.google.com/speech-to-text/docs/custom-speech-models"
  - "https://docs.cloud.google.com/speech-to-text/docs/models/chirp-2"
  - "https://docs.cloud.google.com/speech-to-text/docs/custom-speech-models/train-model"
keywords:
  - "speech"
  - "to"
  - "text"
  - "chirp"
  - "model"
  - "general"
  - "availability"
  - "the"
---

# Speech-to-Text Chirp 2 model general availability

Product: Speech-to-Text
Coverage: MEDIUM

## Step 02 Summary

The Chirp 2 model became generally available in the asia-southeast1, us-central1, and europe-west4 regions.

## Extended Definition

The Chirp 2 model became generally available in the asia-southeast1, us-central1, and europe-west4 regions.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/speech-to-text/docs/models/chirp-3](https://docs.cloud.google.com/speech-to-text/docs/models/chirp-3)
- [https://docs.cloud.google.com/speech-to-text/docs/custom-speech-models](https://docs.cloud.google.com/speech-to-text/docs/custom-speech-models)
- [https://docs.cloud.google.com/speech-to-text/docs/models/chirp-2](https://docs.cloud.google.com/speech-to-text/docs/models/chirp-2)
- [https://docs.cloud.google.com/speech-to-text/docs/custom-speech-models/train-model](https://docs.cloud.google.com/speech-to-text/docs/custom-speech-models/train-model)

## Supporting Pages

### "Chirp 3 Transcription: Enhanced multilingual accuracy \_|\_ Cloud Speech-to-Text\

- URL: [https://docs.cloud.google.com/speech-to-text/docs/models/chirp-3](https://docs.cloud.google.com/speech-to-text/docs/models/chirp-3)
- Source ID: `site-docs-root`
- Final score: 319
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Model Model identifier Chirp 3 chirp 3 API methods Not all recognition methods support the same language availability sets, because Chirp 3 is available in the Speech-to-Text API V2, it supports the following recognition methods: API version API method Support V2 Speech.StreamingRecognize (good for streaming and real-time audio) Supported V2 Speech.Recognize (good for audio shorter than one minute) Supported V2 Speech.BatchRecognize (good for long audio 1 minute to 1 hour in general, but up to 20 minutes with word-level timestamp enabled) Supported Note: You can always find the latest list of supported locales and features for each transcription model, using the locations API as explained here.
- RecognizeResponse : """Transcribes an audio file using the Chirp 3 model of Google Cloud Speech-to-Text v2 API, which provides word-level timestamps for each transcribed word.
- BatchRecognizeResults : """Transcribes an audio file from a Google Cloud Storage URI using the Chirp 3 model of Google Cloud Speech-to-Text v2 API.
- BatchRecognizeResults : """Transcribes an audio file from a Google Cloud Storage URI using the Chirp 3 model of Google Cloud Speech-to-Text V2 API.

### "Overview of custom speech models \_|\_ Cloud Speech-to-Text \_|\_ Google\

- URL: [https://docs.cloud.google.com/speech-to-text/docs/custom-speech-models](https://docs.cloud.google.com/speech-to-text/docs/custom-speech-models)
- Source ID: `site-docs-root`
- Final score: 313
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Supported models, languages and regions Custom Speech-to-Text models support the following combinations of models and languages and locales for training: Language BCP-47 Base model German (Germany) de-DE latest long English (Australia) en-AU latest long English (United Kingdom) en-GB latest long English (India) en-IN latest long English (United States) en-US latest long Spanish (United States) es-US latest long Spanish (Spain) es-ES latest long French (Canada) fr-CA latest long French (France) fr-FR latest long Hindi (India) hi-IN latest long Italian (Italy) it-IT latest long Japanese (Japan) ja-JP latest long Korean (South Korea) ko-KR latest long Dutch (Netherlands) nl-NL latest long Portuguese (Brazil) pt-BR latest long Portuguese (Portugal) pt-PT latest long Additionally, to comply with your data residency requirements we offer training and deployment hardware in different regions.
- Dedicated hardware is supported in the following combinations of models and regions: Base model Google Cloud Region Supported tasks latest long us-east1 Training and Deployment latest long europe-west4 Training and Deployment Quota For Custom Speech-to-Text model training, each Google Cloud project should have enough default quota to run multiple training jobs concurrently and is intended to meet the needs of most projects without additional adjustments.
- Following a successful training, you can deploy a Custom Speech-to-Text model in an endpoint with one click, and use it directly through the Cloud Cloud Speech-to-Text V2 API for inference and benchmarking.
- For the effective training of a Custom Speech-to-Text model, you must provide: Minimum 100 audio-hours of training data, either audio-only or audio with the corresponding text transcript as ground-truth.

### "Chirp 2: Enhanced multilingual accuracy \_|\_ Cloud Speech-to-Text \_|\_\

- URL: [https://docs.cloud.google.com/speech-to-text/docs/models/chirp-2](https://docs.cloud.google.com/speech-to-text/docs/models/chirp-2)
- Source ID: `site-docs-root`
- Final score: 306
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- RecognizeRequest ( recognizer = f "projects/ { PROJECT ID } /locations/us-central1/recognizers/ " , config = config , content = audio content , ) Transcribes the audio into text response = client . recognize ( request = request ) for result in response . results : print ( f "Transcript: { result . alternatives [ 0 ] . transcript } " ) return response Improve accuracy with model adaptation import os from google.cloud.speech v2 import SpeechClient from google.cloud.speech v2.types import cloud speech from google.api core.client options import ClientOptions PROJECT ID = os . getenv ( "GOOGLE CLOUD PROJECT" ) def transcribe sync chirp2 model adaptation ( audio file : str ) - > cloud speech .
- Model Model identifier Chirp 2 chirp 2 API methods As Chirp 2 is exclusively available within the Speech-to-Text API V2, it supports the following recognition methods: Model Model identifier Language support V2 Speech.StreamingRecognize (good for streaming and real-time audio) Limited V2 Speech.Recognize (good for short audio < 1 min) On par with Chirp V2 Speech.BatchRecognize (good for long audio 1 min to 8 hrs) On par with Chirp You can always find the latest list of supported languages and features for each transcription model, using the locations API .
- RecognizeResponse : """Transcribes an audio file using the Chirp 2 model of Google Cloud Speech-to-Text V2 API, providing word-level timestamps for each transcribed word.
- RecognizeResponse : """Transcribes an audio file using the Chirp 2 model of Google Cloud Speech-to-Text V2 API, providing word-level timestamps for each transcribed word.

### Train and manage models \_|\_ Cloud Speech-to-Text \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/speech-to-text/docs/custom-speech-models/train-model](https://docs.cloud.google.com/speech-to-text/docs/custom-speech-models/train-model)
- Source ID: `site-docs-root`
- Final score: 291
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Similar to machine-learning models, training a Custom Speech-to-Text model is typically iterative and involves selecting a base model as a starting point, fine-tuning it with your text and audio datasets, then testing the recognition quality of the model.
- Delete a custom model Before you start, make sure that there is no traffic routed to your Custom Speech-to-Text model through any endpoint, because deleting it will stop it from serving any requests.
- List your custom models By selecting the Models in the Custom Models section, you can also list all of your Custom Speech-to-Text models, including the ones that are training, active, and deleting.
- Using the API, without any code, you can create and train a Custom Speech-to-Text model to improve recognition accuracy from an existing Cloud Speech-to-Text model.

