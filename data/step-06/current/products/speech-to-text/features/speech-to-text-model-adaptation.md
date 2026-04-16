---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:19:11.994Z"
product_name: "Speech-to-Text"
product_slug: "speech-to-text"
feature_name: "Speech-to-Text Model Adaptation"
feature_slug: "speech-to-text-model-adaptation"
latest_feature_date: "2021-05-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/speech-to-text/docs/custom-speech-models/train-model"
  - "https://docs.cloud.google.com/speech-to-text/docs/custom-speech-models"
  - "https://docs.cloud.google.com/speech-to-text/docs/adaptation-model"
  - "https://docs.cloud.google.com/speech-to-text/docs/custom-speech-models/prepare-data"
keywords:
  - "speech"
  - "to"
  - "text"
  - "model"
  - "adaptation"
  - "capability"
  - "in"
  - "reached"
---

# Speech-to-Text Model Adaptation

Product: Speech-to-Text
Coverage: MEDIUM

## Step 02 Summary

Model adaptation capability in Speech-to-Text reached general availability; Speech-to-Text now supports Model Adaptation by allowing users to create custom classes and phrase sets to improve transcription quality.

## Extended Definition

Model adaptation capability in Speech-to-Text reached general availability; Speech-to-Text now supports Model Adaptation by allowing users to create custom classes and phrase sets to improve transcription quality.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/speech-to-text/docs/custom-speech-models/train-model](https://docs.cloud.google.com/speech-to-text/docs/custom-speech-models/train-model)
- [https://docs.cloud.google.com/speech-to-text/docs/custom-speech-models](https://docs.cloud.google.com/speech-to-text/docs/custom-speech-models)
- [https://docs.cloud.google.com/speech-to-text/docs/adaptation-model](https://docs.cloud.google.com/speech-to-text/docs/adaptation-model)
- [https://docs.cloud.google.com/speech-to-text/docs/custom-speech-models/prepare-data](https://docs.cloud.google.com/speech-to-text/docs/custom-speech-models/prepare-data)

## Supporting Pages

### Train and manage models \_|\_ Cloud Speech-to-Text \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/speech-to-text/docs/custom-speech-models/train-model](https://docs.cloud.google.com/speech-to-text/docs/custom-speech-models/train-model)
- Source ID: `site-docs-root`
- Final score: 310
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Similar to machine-learning models, training a Custom Speech-to-Text model is typically iterative and involves selecting a base model as a starting point, fine-tuning it with your text and audio datasets, then testing the recognition quality of the model.
- Delete a custom model Before you start, make sure that there is no traffic routed to your Custom Speech-to-Text model through any endpoint, because deleting it will stop it from serving any requests.
- List your custom models By selecting the Models in the Custom Models section, you can also list all of your Custom Speech-to-Text models, including the ones that are training, active, and deleting.
- Create a custom model Start by creating a custom Speech-to-Text model and defining its parameters, like base model and transcription language: Click Create to create a custom model.

### "Overview of custom speech models \_|\_ Cloud Speech-to-Text \_|\_ Google\

- URL: [https://docs.cloud.google.com/speech-to-text/docs/custom-speech-models](https://docs.cloud.google.com/speech-to-text/docs/custom-speech-models)
- Source ID: `site-docs-root`
- Final score: 306
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Supported models, languages and regions Custom Speech-to-Text models support the following combinations of models and languages and locales for training: Language BCP-47 Base model German (Germany) de-DE latest long English (Australia) en-AU latest long English (United Kingdom) en-GB latest long English (India) en-IN latest long English (United States) en-US latest long Spanish (United States) es-US latest long Spanish (Spain) es-ES latest long French (Canada) fr-CA latest long French (France) fr-FR latest long Hindi (India) hi-IN latest long Italian (Italy) it-IT latest long Japanese (Japan) ja-JP latest long Korean (South Korea) ko-KR latest long Dutch (Netherlands) nl-NL latest long Portuguese (Brazil) pt-BR latest long Portuguese (Portugal) pt-PT latest long Additionally, to comply with your data residency requirements we offer training and deployment hardware in different regions.
- Dedicated hardware is supported in the following combinations of models and regions: Base model Google Cloud Region Supported tasks latest long us-east1 Training and Deployment latest long europe-west4 Training and Deployment Quota For Custom Speech-to-Text model training, each Google Cloud project should have enough default quota to run multiple training jobs concurrently and is intended to meet the needs of most projects without additional adjustments.
- Following a successful training, you can deploy a Custom Speech-to-Text model in an endpoint with one click, and use it directly through the Cloud Cloud Speech-to-Text V2 API for inference and benchmarking.
- For the effective training of a Custom Speech-to-Text model, you must provide: Minimum 100 audio-hours of training data, either audio-only or audio with the corresponding text transcript as ground-truth.

### "Improve transcription results with model adaptation \_|\_ Cloud Speech-to-Text\

- URL: [https://docs.cloud.google.com/speech-to-text/docs/adaptation-model](https://docs.cloud.google.com/speech-to-text/docs/adaptation-model)
- Source ID: `site-docs-root`
- Final score: 305
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example, suppose that your audio data often includes the word "weather." When Speech-to-Text encounters the word "weather," you want it to transcribe the word as "weather" more often than "whether." In this case, you might use model adaptation to bias Speech-to-Text toward recognizing "weather." Model adaptation is particularly helpful in the following use cases: Improving the accuracy of words and phrases that occur frequently in your audio data.
- RecognizeRequest ( recognizer = f "projects/ { PROJECT ID } /locations/global/recognizers/ " , config = config , content = audio content , ) Transcribes the audio into text response = client . recognize ( request = request ) for result in response . results : print ( f "Transcript: { result . alternatives [ 0 ] . transcript } " ) return response This sample creates a PhraseSet resource with the same phrase and then references it in a recognition request: Python import os from google.cloud.speech v2 import SpeechClient from google.cloud.speech v2.types import cloud speech PROJECT ID = os . getenv ( "GOOGLE CLOUD PROJECT" ) def adaptation v2 phrase set reference ( audio file : str , phrase set id : str , ) - > cloud speech .
- Improve recognition of words and phrases To increase the probability that Speech-to-Text recognizes the word "weather" when it transcribes your audio data, you can pass the single word "weather" in the PhraseSet object in a SpeechAdaptation resource.
- AutoDetectDecodingConfig (), adaptation = adaptation , language codes = [ "en-US" ], model = "short" , ) Prepare the request which includes specifying the recognizer, configuration, and the audio content request = cloud speech .

### Prepare training data \_|\_ Cloud Speech-to-Text \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/speech-to-text/docs/custom-speech-models/prepare-data](https://docs.cloud.google.com/speech-to-text/docs/custom-speech-models/prepare-data)
- Source ID: `site-docs-root`
- Final score: 288
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For the effective training of a Custom Speech-to-Text model, you need: Minimum 100 audio-hours of training data, either audio-only or with the corresponding text transcript as ground-truth.
- Learn to prepare your audio and text data for fine-tuning a Custom Speech-to-Text model in Google Cloud Speech console.
- What's next Follow the resources to take advantage of custom speech models in your application: Train and manage your custom models Deploy and manage model endpoints Use your custom models Evaluate your custom models Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- You will need to compose a diverse dataset that contains representative audio and text context that's directly relevant to what the model will respond to during inference time in production, including noise and unusual vocabulary.

