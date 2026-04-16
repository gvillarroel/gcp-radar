---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:19:11.989Z"
product_name: "Speech-to-Text"
product_slug: "speech-to-text"
feature_name: "latest_short model quality improvement"
feature_slug: "latest-short-model-quality-improvement"
latest_feature_date: "2024-01-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/speech-to-text/docs/custom-speech-models"
  - "https://docs.cloud.google.com/speech-to-text/docs/models/chirp-3"
  - "https://docs.cloud.google.com/speech-to-text/docs/adaptation-model"
  - "https://docs.cloud.google.com/speech-to-text/docs/custom-speech-models/evaluate-model"
keywords:
  - "latest"
  - "short"
  - "model"
  - "quality"
  - "improvement"
  - "speech"
  - "to"
  - "text"
---

# latest_short model quality improvement

Product: Speech-to-Text
Coverage: MEDIUM

## Step 02 Summary

Speech-to-Text now includes substantially improved recognition quality for the latest_short model.

## Extended Definition

Speech-to-Text now includes substantially improved recognition quality for the latest_short model.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/speech-to-text/docs/custom-speech-models](https://docs.cloud.google.com/speech-to-text/docs/custom-speech-models)
- [https://docs.cloud.google.com/speech-to-text/docs/models/chirp-3](https://docs.cloud.google.com/speech-to-text/docs/models/chirp-3)
- [https://docs.cloud.google.com/speech-to-text/docs/adaptation-model](https://docs.cloud.google.com/speech-to-text/docs/adaptation-model)
- [https://docs.cloud.google.com/speech-to-text/docs/custom-speech-models/evaluate-model](https://docs.cloud.google.com/speech-to-text/docs/custom-speech-models/evaluate-model)

## Supporting Pages

### "Overview of custom speech models \_|\_ Cloud Speech-to-Text \_|\_ Google\

- URL: [https://docs.cloud.google.com/speech-to-text/docs/custom-speech-models](https://docs.cloud.google.com/speech-to-text/docs/custom-speech-models)
- Source ID: `site-docs-root`
- Final score: 280
- Re-rank relevance: N/A

Evidence snippets:
- Supported models, languages and regions Custom Speech-to-Text models support the following combinations of models and languages and locales for training: Language BCP-47 Base model German (Germany) de-DE latest long English (Australia) en-AU latest long English (United Kingdom) en-GB latest long English (India) en-IN latest long English (United States) en-US latest long Spanish (United States) es-US latest long Spanish (Spain) es-ES latest long French (Canada) fr-CA latest long French (France) fr-FR latest long Hindi (India) hi-IN latest long Italian (Italy) it-IT latest long Japanese (Japan) ja-JP latest long Korean (South Korea) ko-KR latest long Dutch (Netherlands) nl-NL latest long Portuguese (Brazil) pt-BR latest long Portuguese (Portugal) pt-PT latest long Additionally, to comply with your data residency requirements we offer training and deployment hardware in different regions.
- Dedicated hardware is supported in the following combinations of models and regions: Base model Google Cloud Region Supported tasks latest long us-east1 Training and Deployment latest long europe-west4 Training and Deployment Quota For Custom Speech-to-Text model training, each Google Cloud project should have enough default quota to run multiple training jobs concurrently and is intended to meet the needs of most projects without additional adjustments.
- Following a successful training, you can deploy a Custom Speech-to-Text model in an endpoint with one click, and use it directly through the Cloud Cloud Speech-to-Text V2 API for inference and benchmarking.
- For the effective training of a Custom Speech-to-Text model, you must provide: Minimum 100 audio-hours of training data, either audio-only or audio with the corresponding text transcript as ground-truth.

### "Chirp 3 Transcription: Enhanced multilingual accuracy \_|\_ Cloud Speech-to-Text\

- URL: [https://docs.cloud.google.com/speech-to-text/docs/models/chirp-3](https://docs.cloud.google.com/speech-to-text/docs/models/chirp-3)
- Source ID: `site-docs-root`
- Final score: 254
- Re-rank relevance: N/A

Evidence snippets:
- Model Model identifier Chirp 3 chirp 3 API methods Not all recognition methods support the same language availability sets, because Chirp 3 is available in the Speech-to-Text API V2, it supports the following recognition methods: API version API method Support V2 Speech.StreamingRecognize (good for streaming and real-time audio) Supported V2 Speech.Recognize (good for audio shorter than one minute) Supported V2 Speech.BatchRecognize (good for long audio 1 minute to 1 hour in general, but up to 20 minutes with word-level timestamp enabled) Supported Note: You can always find the latest list of supported locales and features for each transcription model, using the locations API as explained here.
- Try Chirp 3 in the Google Cloud console Try in Colab View notebook on GitHub Chirp 3 is the latest generation of Google's multilingual Automatic Speech Recognition (ASR)-specific generative models, designed to meet user needs based on feedback and experience.
- RecognizeResponse : """Transcribes an audio file using the Chirp 3 model of Google Cloud Speech-to-Text v2 API, which provides word-level timestamps for each transcribed word.
- BatchRecognizeResults : """Transcribes an audio file from a Google Cloud Storage URI using the Chirp 3 model of Google Cloud Speech-to-Text v2 API.

### "Improve transcription results with model adaptation \_|\_ Cloud Speech-to-Text\

- URL: [https://docs.cloud.google.com/speech-to-text/docs/adaptation-model](https://docs.cloud.google.com/speech-to-text/docs/adaptation-model)
- Source ID: `site-docs-root`
- Final score: 249
- Re-rank relevance: N/A

Evidence snippets:
- For example, suppose that your audio data often includes the word "weather." When Speech-to-Text encounters the word "weather," you want it to transcribe the word as "weather" more often than "whether." In this case, you might use model adaptation to bias Speech-to-Text toward recognizing "weather." Model adaptation is particularly helpful in the following use cases: Improving the accuracy of words and phrases that occur frequently in your audio data.
- AutoDetectDecodingConfig (), adaptation = adaptation , language codes = [ "en-US" ], model = "short" , ) Prepare the request which includes specifying the recognizer, configuration, and the audio content request = cloud speech .
- AutoDetectDecodingConfig (), adaptation = adaptation , language codes = [ "en-US" ], model = "short" , ) Prepare the request which includes specifying the recognizer, configuration, and the audio content request = cloud speech .
- AutoDetectDecodingConfig (), adaptation = adaptation , language codes = [ "en-US" ], model = "short" , ) Prepare the request which includes specifying the recognizer, configuration, and the audio content request = cloud speech .

### Evaluate models \_|\_ Cloud Speech-to-Text \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/speech-to-text/docs/custom-speech-models/evaluate-model](https://docs.cloud.google.com/speech-to-text/docs/custom-speech-models/evaluate-model)
- Source ID: `site-docs-root`
- Final score: 244
- Re-rank relevance: N/A

Evidence snippets:
- Use the benchmarking functionality of the Cloud Cloud Speech-to-Text Console to measure the accuracy of any of the transcription models used in the Cloud Speech-to-Text V2 API.
- Benchmark the model Using the Custom Speech-to-Text model and your benchmarking dataset to assess the accuracy of your model, follow the Measure and improve accuracy guide .
- Home Documentation AI and ML Cloud Speech-to-Text Send feedback Evaluate models Stay organized with collections Save and categorize content based on your preferences.
- Cloud Cloud Speech-to-Text Console provides visual benchmarking for pre-trained and Custom Speech-to-Text models.

