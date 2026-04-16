---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:19:11.992Z"
product_name: "Speech-to-Text"
product_slug: "speech-to-text"
feature_name: "Medical speech recognition models"
feature_slug: "medical-speech-recognition-models"
latest_feature_date: "2021-11-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/speech-to-text/docs/custom-speech-models"
  - "https://docs.cloud.google.com/speech-to-text/docs/speech-to-text-supported-languages"
  - "https://docs.cloud.google.com/speech-to-text/docs/reference/rest/v1/RecognitionConfig"
  - "https://docs.cloud.google.com/speech-to-text/docs/custom-speech-models/train-model"
keywords:
  - "medical"
  - "speech"
  - "recognition"
  - "models"
  - "to"
  - "text"
  - "introduced"
  - "optimized"
---

# Medical speech recognition models

Product: Speech-to-Text
Coverage: MEDIUM

## Step 02 Summary

Speech-to-Text introduced medical speech recognition models optimized for vocabulary commonly used in medical settings.

## Extended Definition

Speech-to-Text introduced medical speech recognition models optimized for vocabulary commonly used in medical settings.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/speech-to-text/docs/custom-speech-models](https://docs.cloud.google.com/speech-to-text/docs/custom-speech-models)
- [https://docs.cloud.google.com/speech-to-text/docs/speech-to-text-supported-languages](https://docs.cloud.google.com/speech-to-text/docs/speech-to-text-supported-languages)
- [https://docs.cloud.google.com/speech-to-text/docs/reference/rest/v1/RecognitionConfig](https://docs.cloud.google.com/speech-to-text/docs/reference/rest/v1/RecognitionConfig)
- [https://docs.cloud.google.com/speech-to-text/docs/custom-speech-models/train-model](https://docs.cloud.google.com/speech-to-text/docs/custom-speech-models/train-model)

## Supporting Pages

### "Overview of custom speech models \_|\_ Cloud Speech-to-Text \_|\_ Google\

- URL: [https://docs.cloud.google.com/speech-to-text/docs/custom-speech-models](https://docs.cloud.google.com/speech-to-text/docs/custom-speech-models)
- Source ID: `site-docs-root`
- Final score: 285
- Re-rank relevance: N/A

Evidence snippets:
- How does it work You can use Custom Speech-to-Text models to augment a base transcription model to improve transcription recognition.
- Custom Speech-to-Text models help you fine-tune speech recognition models to your specific needs.
- Supported models, languages and regions Custom Speech-to-Text models support the following combinations of models and languages and locales for training: Language BCP-47 Base model German (Germany) de-DE latest long English (Australia) en-AU latest long English (United Kingdom) en-GB latest long English (India) en-IN latest long English (United States) en-US latest long Spanish (United States) es-US latest long Spanish (Spain) es-ES latest long French (Canada) fr-CA latest long French (France) fr-FR latest long Hindi (India) hi-IN latest long Italian (Italy) it-IT latest long Japanese (Japan) ja-JP latest long Korean (South Korea) ko-KR latest long Dutch (Netherlands) nl-NL latest long Portuguese (Brazil) pt-BR latest long Portuguese (Portugal) pt-PT latest long Additionally, to comply with your data residency requirements we offer training and deployment hardware in different regions.
- Dedicated hardware is supported in the following combinations of models and regions: Base model Google Cloud Region Supported tasks latest long us-east1 Training and Deployment latest long europe-west4 Training and Deployment Quota For Custom Speech-to-Text model training, each Google Cloud project should have enough default quota to run multiple training jobs concurrently and is intended to meet the needs of most projects without additional adjustments.

### Cloud Speech-to-Text V2 supported languages \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/speech-to-text/docs/speech-to-text-supported-languages](https://docs.cloud.google.com/speech-to-text/docs/speech-to-text-supported-languages)
- Source ID: `site-docs-reference`
- Final score: 264
- Re-rank relevance: N/A

Evidence snippets:
- Cloud Speech-to-Text offers multiple recognition models , each tuned to different audio types.
- Home Documentation AI and ML Cloud Speech-to-Text Send feedback Cloud Speech-to-Text V2 supported languages Stay organized with collections Save and categorize content based on your preferences.
- For more information about sending a recognition request and specifying the language of the transcription, see the how-to guides about performing speech recognition.
- This page lists all languages supported by Cloud Speech-to-Text.

### RecognitionConfig \_|\_ Cloud Speech-to-Text \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/speech-to-text/docs/reference/rest/v1/RecognitionConfig](https://docs.cloud.google.com/speech-to-text/docs/reference/rest/v1/RecognitionConfig)
- Source ID: `site-api-reference`
- Final score: 252
- Re-rank relevance: N/A

Evidence snippets:
- JSON representation { "encoding" : enum ( AudioEncoding ) , "sampleRateHertz" : integer , "audioChannelCount" : integer , "enableSeparateRecognitionPerChannel" : boolean , "languageCode" : string , "alternativeLanguageCodes" : [ string ] , "maxAlternatives" : integer , "profanityFilter" : boolean , "adaptation" : { object ( SpeechAdaptation ) } , "transcriptNormalization" : { object ( TranscriptNormalization ) } , "speechContexts" : [ { object ( SpeechContext ) } ] , "enableWordTimeOffsets" : boolean , "enableWordConfidence" : boolean , "enableAutomaticPunctuation" : boolean , "enableSpokenPunctuation" : boolean , "enableSpokenEmojis" : boolean , "diarizationConfig" : { object ( SpeakerDiarizationConfig ) } , "metadata" : { object ( RecognitionMetadata ) } , "model" : string , "useEnhanced" : boolean } Fields encoding enum ( AudioEncoding ) Encoding of audio data sent in all RecognitionAudio messages.
- JSON representation AudioEncoding SpeechAdaptation JSON representation ABNFGrammar JSON representation TranscriptNormalization JSON representation Entry JSON representation SpeechContext JSON representation SpeakerDiarizationConfig JSON representation RecognitionMetadata JSON representation InteractionType MicrophoneDistance OriginalMediaType RecordingDeviceType Provides information to the recognizer that specifies how to process the request.
- Ideally the audio is high-fidelity, recorded at a 16khz or greater sampling rate. medical conversation Best for audio that originated from a conversation between a medical provider and patient. medical dictation Best for audio that originated from dictation notes by a medical provider. useEnhanced boolean Set to true to use an enhanced model for speech recognition.
- Home Documentation AI and ML Cloud Speech-to-Text Reference Send feedback RecognitionConfig Stay organized with collections Save and categorize content based on your preferences.

### Train and manage models \_|\_ Cloud Speech-to-Text \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/speech-to-text/docs/custom-speech-models/train-model](https://docs.cloud.google.com/speech-to-text/docs/custom-speech-models/train-model)
- Source ID: `site-docs-root`
- Final score: 247
- Re-rank relevance: N/A

Evidence snippets:
- Similar to machine-learning models, training a Custom Speech-to-Text model is typically iterative and involves selecting a base model as a starting point, fine-tuning it with your text and audio datasets, then testing the recognition quality of the model.
- List your custom models By selecting the Models in the Custom Models section, you can also list all of your Custom Speech-to-Text models, including the ones that are training, active, and deleting.
- Home Documentation AI and ML Cloud Speech-to-Text Send feedback Train and manage models Stay organized with collections Save and categorize content based on your preferences.
- Using the API, without any code, you can create and train a Custom Speech-to-Text model to improve recognition accuracy from an existing Cloud Speech-to-Text model.

