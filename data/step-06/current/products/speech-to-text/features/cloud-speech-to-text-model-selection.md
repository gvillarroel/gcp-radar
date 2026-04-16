---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:19:12.004Z"
product_name: "Speech-to-Text"
product_slug: "speech-to-text"
feature_name: "Cloud Speech-to-Text model selection"
feature_slug: "cloud-speech-to-text-model-selection"
latest_feature_date: "2019-02-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/speech-to-text/docs/custom-speech-models/train-model"
  - "https://docs.cloud.google.com/speech-to-text/docs/custom-speech-models"
  - "https://docs.cloud.google.com/speech-to-text/docs/custom-speech-models/deploy-model"
  - "https://docs.cloud.google.com/speech-to-text/docs/adaptation-model"
keywords:
  - "speech"
  - "to"
  - "text"
  - "model"
  - "selection"
  - "allows"
  - "users"
  - "select"
---

# Cloud Speech-to-Text model selection

Product: Speech-to-Text
Coverage: MEDIUM

## Step 02 Summary

Cloud Speech-to-Text allows users to select different speech recognition models, including a model optimized for video file audio.

## Extended Definition

Cloud Speech-to-Text allows users to select different speech recognition models, including a model optimized for video file audio.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/speech-to-text/docs/custom-speech-models/train-model](https://docs.cloud.google.com/speech-to-text/docs/custom-speech-models/train-model)
- [https://docs.cloud.google.com/speech-to-text/docs/custom-speech-models](https://docs.cloud.google.com/speech-to-text/docs/custom-speech-models)
- [https://docs.cloud.google.com/speech-to-text/docs/custom-speech-models/deploy-model](https://docs.cloud.google.com/speech-to-text/docs/custom-speech-models/deploy-model)
- [https://docs.cloud.google.com/speech-to-text/docs/adaptation-model](https://docs.cloud.google.com/speech-to-text/docs/adaptation-model)

## Supporting Pages

### Train and manage models \_|\_ Cloud Speech-to-Text \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/speech-to-text/docs/custom-speech-models/train-model](https://docs.cloud.google.com/speech-to-text/docs/custom-speech-models/train-model)
- Source ID: `site-docs-root`
- Final score: 279
- Re-rank relevance: N/A

Evidence snippets:
- Similar to machine-learning models, training a Custom Speech-to-Text model is typically iterative and involves selecting a base model as a starting point, fine-tuning it with your text and audio datasets, then testing the recognition quality of the model.
- List your custom models By selecting the Models in the Custom Models section, you can also list all of your Custom Speech-to-Text models, including the ones that are training, active, and deleting.
- Delete a custom model Before you start, make sure that there is no traffic routed to your Custom Speech-to-Text model through any endpoint, because deleting it will stop it from serving any requests.
- Create a custom model Start by creating a custom Speech-to-Text model and defining its parameters, like base model and transcription language: Click Create to create a custom model.

### "Overview of custom speech models \_|\_ Cloud Speech-to-Text \_|\_ Google\

- URL: [https://docs.cloud.google.com/speech-to-text/docs/custom-speech-models](https://docs.cloud.google.com/speech-to-text/docs/custom-speech-models)
- Source ID: `site-docs-root`
- Final score: 275
- Re-rank relevance: N/A

Evidence snippets:
- Supported models, languages and regions Custom Speech-to-Text models support the following combinations of models and languages and locales for training: Language BCP-47 Base model German (Germany) de-DE latest long English (Australia) en-AU latest long English (United Kingdom) en-GB latest long English (India) en-IN latest long English (United States) en-US latest long Spanish (United States) es-US latest long Spanish (Spain) es-ES latest long French (Canada) fr-CA latest long French (France) fr-FR latest long Hindi (India) hi-IN latest long Italian (Italy) it-IT latest long Japanese (Japan) ja-JP latest long Korean (South Korea) ko-KR latest long Dutch (Netherlands) nl-NL latest long Portuguese (Brazil) pt-BR latest long Portuguese (Portugal) pt-PT latest long Additionally, to comply with your data residency requirements we offer training and deployment hardware in different regions.
- Dedicated hardware is supported in the following combinations of models and regions: Base model Google Cloud Region Supported tasks latest long us-east1 Training and Deployment latest long europe-west4 Training and Deployment Quota For Custom Speech-to-Text model training, each Google Cloud project should have enough default quota to run multiple training jobs concurrently and is intended to meet the needs of most projects without additional adjustments.
- Following a successful training, you can deploy a Custom Speech-to-Text model in an endpoint with one click, and use it directly through the Cloud Cloud Speech-to-Text V2 API for inference and benchmarking.
- For the effective training of a Custom Speech-to-Text model, you must provide: Minimum 100 audio-hours of training data, either audio-only or audio with the corresponding text transcript as ground-truth.

### "Deploy and manage endpoints \_|\_ Cloud Speech-to-Text \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/speech-to-text/docs/custom-speech-models/deploy-model](https://docs.cloud.google.com/speech-to-text/docs/custom-speech-models/deploy-model)
- Source ID: `site-docs-root`
- Final score: 261
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Benchmark the model Using the Custom Speech-to-Text model and your benchmarking dataset to assess the accuracy of your model, follow the Measure and improve accuracy guide .
- You can also list the endpoints that you created in the console, along with their current state and associated custom Cloud Speech-to-Text model.
- Use a trained Custom Speech-to-Text model in your production application or benchmarking workflows.
- Select the trained custom speech model from the list that you want to expose through the endpoint.

### "Improve transcription results with model adaptation \_|\_ Cloud Speech-to-Text\

- URL: [https://docs.cloud.google.com/speech-to-text/docs/adaptation-model](https://docs.cloud.google.com/speech-to-text/docs/adaptation-model)
- Source ID: `site-docs-root`
- Final score: 257
- Re-rank relevance: N/A

Evidence snippets:
- For example, suppose that your audio data often includes the word "weather." When Speech-to-Text encounters the word "weather," you want it to transcribe the word as "weather" more often than "whether." In this case, you might use model adaptation to bias Speech-to-Text toward recognizing "weather." Model adaptation is particularly helpful in the following use cases: Improving the accuracy of words and phrases that occur frequently in your audio data.
- Home Documentation AI and ML Cloud Speech-to-Text Send feedback Improve transcription results with model adaptation Stay organized with collections Save and categorize content based on your preferences.
- Overview You can use the model adaptation feature to help Speech-to-Text recognize specific words or phrases more frequently than other options that might otherwise be suggested.
- Speech-to-Text refers to this weighted value when selecting a possible transcription for words in your audio data.

