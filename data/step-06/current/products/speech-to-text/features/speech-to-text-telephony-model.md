---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:19:11.991Z"
product_name: "Speech-to-Text"
product_slug: "speech-to-text"
feature_name: "Speech-to-Text telephony model"
feature_slug: "speech-to-text-telephony-model"
latest_feature_date: "2023-11-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/speech-to-text/docs/custom-speech-models"
  - "https://docs.cloud.google.com/speech-to-text/docs/custom-speech-models/evaluate-model"
  - "https://docs.cloud.google.com/speech-to-text/docs/custom-speech-models/train-model"
  - "https://docs.cloud.google.com/speech-to-text/docs/custom-speech-models/use-model"
keywords:
  - "speech"
  - "to"
  - "text"
  - "telephony"
  - "model"
  - "introduces"
  - "the"
  - "for"
---

# Speech-to-Text telephony model

Product: Speech-to-Text
Coverage: MEDIUM

## Step 02 Summary

Introduces the telephony model for recognizing phone-call audio using the latest version of the legacy phone_call model.

## Extended Definition

Introduces the telephony model for recognizing phone-call audio using the latest version of the legacy phone_call model.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/speech-to-text/docs/custom-speech-models](https://docs.cloud.google.com/speech-to-text/docs/custom-speech-models)
- [https://docs.cloud.google.com/speech-to-text/docs/custom-speech-models/evaluate-model](https://docs.cloud.google.com/speech-to-text/docs/custom-speech-models/evaluate-model)
- [https://docs.cloud.google.com/speech-to-text/docs/custom-speech-models/train-model](https://docs.cloud.google.com/speech-to-text/docs/custom-speech-models/train-model)
- [https://docs.cloud.google.com/speech-to-text/docs/custom-speech-models/use-model](https://docs.cloud.google.com/speech-to-text/docs/custom-speech-models/use-model)

## Supporting Pages

### "Overview of custom speech models \_|\_ Cloud Speech-to-Text \_|\_ Google\

- URL: [https://docs.cloud.google.com/speech-to-text/docs/custom-speech-models](https://docs.cloud.google.com/speech-to-text/docs/custom-speech-models)
- Source ID: `site-docs-root`
- Final score: 330
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Supported models, languages and regions Custom Speech-to-Text models support the following combinations of models and languages and locales for training: Language BCP-47 Base model German (Germany) de-DE latest long English (Australia) en-AU latest long English (United Kingdom) en-GB latest long English (India) en-IN latest long English (United States) en-US latest long Spanish (United States) es-US latest long Spanish (Spain) es-ES latest long French (Canada) fr-CA latest long French (France) fr-FR latest long Hindi (India) hi-IN latest long Italian (Italy) it-IT latest long Japanese (Japan) ja-JP latest long Korean (South Korea) ko-KR latest long Dutch (Netherlands) nl-NL latest long Portuguese (Brazil) pt-BR latest long Portuguese (Portugal) pt-PT latest long Additionally, to comply with your data residency requirements we offer training and deployment hardware in different regions.
- Dedicated hardware is supported in the following combinations of models and regions: Base model Google Cloud Region Supported tasks latest long us-east1 Training and Deployment latest long europe-west4 Training and Deployment Quota For Custom Speech-to-Text model training, each Google Cloud project should have enough default quota to run multiple training jobs concurrently and is intended to meet the needs of most projects without additional adjustments.
- Following a successful training, you can deploy a Custom Speech-to-Text model in an endpoint with one click, and use it directly through the Cloud Cloud Speech-to-Text V2 API for inference and benchmarking.
- For the effective training of a Custom Speech-to-Text model, you must provide: Minimum 100 audio-hours of training data, either audio-only or audio with the corresponding text transcript as ground-truth.

### Evaluate models \_|\_ Cloud Speech-to-Text \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/speech-to-text/docs/custom-speech-models/evaluate-model](https://docs.cloud.google.com/speech-to-text/docs/custom-speech-models/evaluate-model)
- Source ID: `site-docs-root`
- Final score: 308
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Use the benchmarking functionality of the Cloud Cloud Speech-to-Text Console to measure the accuracy of any of the transcription models used in the Cloud Speech-to-Text V2 API.
- Benchmark the model Using the Custom Speech-to-Text model and your benchmarking dataset to assess the accuracy of your model, follow the Measure and improve accuracy guide .
- Cloud Cloud Speech-to-Text Console provides visual benchmarking for pre-trained and Custom Speech-to-Text models.
- Home Documentation AI and ML Cloud Speech-to-Text Send feedback Evaluate models Stay organized with collections Save and categorize content based on your preferences.

### Train and manage models \_|\_ Cloud Speech-to-Text \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/speech-to-text/docs/custom-speech-models/train-model](https://docs.cloud.google.com/speech-to-text/docs/custom-speech-models/train-model)
- Source ID: `site-docs-root`
- Final score: 308
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Delete a custom model Before you start, make sure that there is no traffic routed to your Custom Speech-to-Text model through any endpoint, because deleting it will stop it from serving any requests.
- Similar to machine-learning models, training a Custom Speech-to-Text model is typically iterative and involves selecting a base model as a starting point, fine-tuning it with your text and audio datasets, then testing the recognition quality of the model.
- Before you begin Ensure you have signed up for a Google Cloud account, created a Google Cloud project, and enabled the Cloud Speech-to-Text API: Go to Speech in the Google Cloud console, and navigate to the Cloud Speech-to-Text API.
- List your custom models By selecting the Models in the Custom Models section, you can also list all of your Custom Speech-to-Text models, including the ones that are training, active, and deleting.

### Use models \_|\_ Cloud Speech-to-Text \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/speech-to-text/docs/custom-speech-models/use-model](https://docs.cloud.google.com/speech-to-text/docs/custom-speech-models/use-model)
- Source ID: `site-docs-root`
- Final score: 308
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Perform inference in V2 For a Custom Speech-to-Text model to be ready for use, the state of the model in the Models tab should be Active , and the dedicated endpoint in the Endpoints tab must be Deployed .
- RecognizeRequest ( recognizer = f "projects/custom-models-walkthrough/locations/us-east1/recognizers/ " , config = config , content = content , ) Transcribes the audio into text response = client . recognize ( request = request ) for result in response . results : print ( f "Transcript: { result . alternatives [ 0 ] . transcript } " ) return response Note: If you try to create a recognizer object in a different region than the one that the endpoint is created in, the request will fail.
- In our example, where a Google Cloud project ID is custom-models-walkthrough , the endpoint that corresponds to the Custom Speech-to-Text model quantum-computing-lectures-custom-model is quantum-computing-lectures-custom-model-prod-endpoint .
- As soon as you deploy your model through a dedicated endpoint, you automatically get programmatic access through a recognizer object, which can be used directly through the Cloud Speech-to-Text V2 API or in the Google Cloud console.

