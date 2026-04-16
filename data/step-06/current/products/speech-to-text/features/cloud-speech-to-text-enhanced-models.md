---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:19:12.003Z"
product_name: "Speech-to-Text"
product_slug: "speech-to-text"
feature_name: "Cloud Speech-to-Text enhanced models"
feature_slug: "cloud-speech-to-text-enhanced-models"
latest_feature_date: "2019-02-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/speech-to-text/docs/custom-speech-models"
  - "https://docs.cloud.google.com/speech-to-text/docs/models/chirp-3"
  - "https://docs.cloud.google.com/speech-to-text/docs/reference/rest/v1/RecognitionConfig"
  - "https://docs.cloud.google.com/speech-to-text/docs/custom-speech-models/train-model"
keywords:
  - "speech"
  - "to"
  - "text"
  - "enhanced"
  - "models"
  - "now"
  - "offers"
  - "improve"
---

# Cloud Speech-to-Text enhanced models

Product: Speech-to-Text
Coverage: MEDIUM

## Step 02 Summary

Cloud Speech-to-Text now offers enhanced models to improve transcription accuracy; Cloud Speech-to-Text can use enhanced speech recognition models to improve transcription quality.

## Extended Definition

Cloud Speech-to-Text now offers enhanced models to improve transcription accuracy; Cloud Speech-to-Text can use enhanced speech recognition models to improve transcription quality.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/speech-to-text/docs/custom-speech-models](https://docs.cloud.google.com/speech-to-text/docs/custom-speech-models)
- [https://docs.cloud.google.com/speech-to-text/docs/models/chirp-3](https://docs.cloud.google.com/speech-to-text/docs/models/chirp-3)
- [https://docs.cloud.google.com/speech-to-text/docs/reference/rest/v1/RecognitionConfig](https://docs.cloud.google.com/speech-to-text/docs/reference/rest/v1/RecognitionConfig)
- [https://docs.cloud.google.com/speech-to-text/docs/custom-speech-models/train-model](https://docs.cloud.google.com/speech-to-text/docs/custom-speech-models/train-model)

## Supporting Pages

### "Overview of custom speech models \_|\_ Cloud Speech-to-Text \_|\_ Google\

- URL: [https://docs.cloud.google.com/speech-to-text/docs/custom-speech-models](https://docs.cloud.google.com/speech-to-text/docs/custom-speech-models)
- Source ID: `site-docs-root`
- Final score: 287
- Re-rank relevance: N/A

Evidence snippets:
- How does it work You can use Custom Speech-to-Text models to augment a base transcription model to improve transcription recognition.
- Supported models, languages and regions Custom Speech-to-Text models support the following combinations of models and languages and locales for training: Language BCP-47 Base model German (Germany) de-DE latest long English (Australia) en-AU latest long English (United Kingdom) en-GB latest long English (India) en-IN latest long English (United States) en-US latest long Spanish (United States) es-US latest long Spanish (Spain) es-ES latest long French (Canada) fr-CA latest long French (France) fr-FR latest long Hindi (India) hi-IN latest long Italian (Italy) it-IT latest long Japanese (Japan) ja-JP latest long Korean (South Korea) ko-KR latest long Dutch (Netherlands) nl-NL latest long Portuguese (Brazil) pt-BR latest long Portuguese (Portugal) pt-PT latest long Additionally, to comply with your data residency requirements we offer training and deployment hardware in different regions.
- Dedicated hardware is supported in the following combinations of models and regions: Base model Google Cloud Region Supported tasks latest long us-east1 Training and Deployment latest long europe-west4 Training and Deployment Quota For Custom Speech-to-Text model training, each Google Cloud project should have enough default quota to run multiple training jobs concurrently and is intended to meet the needs of most projects without additional adjustments.
- Home Documentation AI and ML Cloud Speech-to-Text Send feedback Overview of custom speech models Stay organized with collections Save and categorize content based on your preferences.

### "Chirp 3 Transcription: Enhanced multilingual accuracy \_|\_ Cloud Speech-to-Text\

- URL: [https://docs.cloud.google.com/speech-to-text/docs/models/chirp-3](https://docs.cloud.google.com/speech-to-text/docs/models/chirp-3)
- Source ID: `site-docs-root`
- Final score: 254
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation AI and ML Cloud Speech-to-Text Send feedback Chirp 3 Transcription: Enhanced multilingual accuracy Stay organized with collections Save and categorize content based on your preferences.
- RecognitionConfig , audio : list ) - > list : yield config yield from audio Transcribes the audio into text responses iterator = client . streaming recognize ( requests = requests ( config request , audio requests ) ) responses = [] for response in responses iterator : responses . append ( response ) for result in response . results : print ( f "Transcript: { result . alternatives [ 0 ] . transcript } " ) return responses Perform synchronous speech recognition Python import os from google.cloud.speech v2 import SpeechClient from google.cloud.speech v2.types import cloud speech from google.api core.client options import ClientOptions PROJECT ID = os . getenv ( "GOOGLE CLOUD PROJECT" ) REGION = "us" def transcribe sync chirp3 ( audio file : str ) - > cloud speech .
- Model Model identifier Chirp 3 chirp 3 API methods Not all recognition methods support the same language availability sets, because Chirp 3 is available in the Speech-to-Text API V2, it supports the following recognition methods: API version API method Support V2 Speech.StreamingRecognize (good for streaming and real-time audio) Supported V2 Speech.Recognize (good for audio shorter than one minute) Supported V2 Speech.BatchRecognize (good for long audio 1 minute to 1 hour in general, but up to 20 minutes with word-level timestamp enabled) Supported Note: You can always find the latest list of supported locales and features for each transcription model, using the locations API as explained here.
- RecognizeRequest ( recognizer = f "projects/ { PROJECT ID } /locations/ { REGION } /recognizers/ " , config = config , content = audio content , ) Transcribes the audio into text response = client . recognize ( request = request ) for result in response . results : print ( f "Transcript: { result . alternatives [ 0 ] . transcript } " ) return response Perform batch speech recognition Python import os from google.cloud.speech v2 import SpeechClient from google.cloud.speech v2.types import cloud speech from google.api core.client options import ClientOptions PROJECT ID = os . getenv ( "GOOGLE CLOUD PROJECT" ) REGION = "us" def transcribe batch 3 ( audio uri : str , ) - > cloud speech .

### RecognitionConfig \_|\_ Cloud Speech-to-Text \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/speech-to-text/docs/reference/rest/v1/RecognitionConfig](https://docs.cloud.google.com/speech-to-text/docs/reference/rest/v1/RecognitionConfig)
- Source ID: `site-api-reference`
- Final score: 254
- Re-rank relevance: N/A

Evidence snippets:
- JSON representation { "encoding" : enum ( AudioEncoding ) , "sampleRateHertz" : integer , "audioChannelCount" : integer , "enableSeparateRecognitionPerChannel" : boolean , "languageCode" : string , "alternativeLanguageCodes" : [ string ] , "maxAlternatives" : integer , "profanityFilter" : boolean , "adaptation" : { object ( SpeechAdaptation ) } , "transcriptNormalization" : { object ( TranscriptNormalization ) } , "speechContexts" : [ { object ( SpeechContext ) } ] , "enableWordTimeOffsets" : boolean , "enableWordConfidence" : boolean , "enableAutomaticPunctuation" : boolean , "enableSpokenPunctuation" : boolean , "enableSpokenEmojis" : boolean , "diarizationConfig" : { object ( SpeakerDiarizationConfig ) } , "metadata" : { object ( RecognitionMetadata ) } , "model" : string , "useEnhanced" : boolean } Fields encoding enum ( AudioEncoding ) Encoding of audio data sent in all RecognitionAudio messages.
- JSON representation AudioEncoding SpeechAdaptation JSON representation ABNFGrammar JSON representation TranscriptNormalization JSON representation Entry JSON representation SpeechContext JSON representation SpeakerDiarizationConfig JSON representation RecognitionMetadata JSON representation InteractionType MicrophoneDistance OriginalMediaType RecordingDeviceType Provides information to the recognizer that specifies how to process the request.
- Ideally the audio is high-fidelity, recorded at a 16khz or greater sampling rate. medical conversation Best for audio that originated from a conversation between a medical provider and patient. medical dictation Best for audio that originated from dictation notes by a medical provider. useEnhanced boolean Set to true to use an enhanced model for speech recognition.
- For StreamingRecognize, this normalization only applies to stable partial transcripts (stability > 0.8) and final transcripts. speechContexts[] object ( SpeechContext ) Array of SpeechContext .

### Train and manage models \_|\_ Cloud Speech-to-Text \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/speech-to-text/docs/custom-speech-models/train-model](https://docs.cloud.google.com/speech-to-text/docs/custom-speech-models/train-model)
- Source ID: `site-docs-root`
- Final score: 253
- Re-rank relevance: N/A

Evidence snippets:
- Similar to machine-learning models, training a Custom Speech-to-Text model is typically iterative and involves selecting a base model as a starting point, fine-tuning it with your text and audio datasets, then testing the recognition quality of the model.
- List your custom models By selecting the Models in the Custom Models section, you can also list all of your Custom Speech-to-Text models, including the ones that are training, active, and deleting.
- Home Documentation AI and ML Cloud Speech-to-Text Send feedback Train and manage models Stay organized with collections Save and categorize content based on your preferences.
- Using the API, without any code, you can create and train a Custom Speech-to-Text model to improve recognition accuracy from an existing Cloud Speech-to-Text model.

