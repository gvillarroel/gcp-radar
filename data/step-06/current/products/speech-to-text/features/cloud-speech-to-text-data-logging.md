---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:19:12.003Z"
product_name: "Speech-to-Text"
product_slug: "speech-to-text"
feature_name: "Cloud Speech-to-Text data logging"
feature_slug: "cloud-speech-to-text-data-logging"
latest_feature_date: "2019-02-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/speech-to-text/docs/custom-speech-models"
  - "https://docs.cloud.google.com/speech-to-text/docs/encoding"
  - "https://docs.cloud.google.com/speech-to-text/docs/custom-speech-models/use-model"
  - "https://docs.cloud.google.com/speech-to-text/docs/setup"
keywords:
  - "speech"
  - "to"
  - "text"
  - "logging"
  - "introduced"
  - "for"
  - "general"
  - "use"
---

# Cloud Speech-to-Text data logging

Product: Speech-to-Text
Coverage: MEDIUM

## Step 02 Summary

Cloud Speech-to-Text introduced data logging for general use, allowing Google to log data to help reduce usage costs by improving the service; Cloud Speech-to-Text can provide speech recognition data logging for transcription workflows.

## Extended Definition

Cloud Speech-to-Text introduced data logging for general use, allowing Google to log data to help reduce usage costs by improving the service; Cloud Speech-to-Text can provide speech recognition data logging for transcription workflows.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/speech-to-text/docs/custom-speech-models](https://docs.cloud.google.com/speech-to-text/docs/custom-speech-models)
- [https://docs.cloud.google.com/speech-to-text/docs/encoding](https://docs.cloud.google.com/speech-to-text/docs/encoding)
- [https://docs.cloud.google.com/speech-to-text/docs/custom-speech-models/use-model](https://docs.cloud.google.com/speech-to-text/docs/custom-speech-models/use-model)
- [https://docs.cloud.google.com/speech-to-text/docs/setup](https://docs.cloud.google.com/speech-to-text/docs/setup)

## Supporting Pages

### "Overview of custom speech models \_|\_ Cloud Speech-to-Text \_|\_ Google\

- URL: [https://docs.cloud.google.com/speech-to-text/docs/custom-speech-models](https://docs.cloud.google.com/speech-to-text/docs/custom-speech-models)
- Source ID: `site-docs-root`
- Final score: 287
- Re-rank relevance: N/A

Evidence snippets:
- Following a successful training, you can deploy a Custom Speech-to-Text model in an endpoint with one click, and use it directly through the Cloud Cloud Speech-to-Text V2 API for inference and benchmarking.
- Every Custom Speech-to-Text model uses pre-trained, Conformer-based architecture as a base model trained with proprietary data of commonly spoken language.
- Inference : You will be charged for the number of streamed seconds of audio for transcription, in alignment with the general Cloud Speech-to-Text billing.
- Supported models, languages and regions Custom Speech-to-Text models support the following combinations of models and languages and locales for training: Language BCP-47 Base model German (Germany) de-DE latest long English (Australia) en-AU latest long English (United Kingdom) en-GB latest long English (India) en-IN latest long English (United States) en-US latest long Spanish (United States) es-US latest long Spanish (Spain) es-ES latest long French (Canada) fr-CA latest long French (France) fr-FR latest long Hindi (India) hi-IN latest long Italian (Italy) it-IT latest long Japanese (Japan) ja-JP latest long Korean (South Korea) ko-KR latest long Dutch (Netherlands) nl-NL latest long Portuguese (Brazil) pt-BR latest long Portuguese (Portugal) pt-PT latest long Additionally, to comply with your data residency requirements we offer training and deployment hardware in different regions.

### "Introduction to audio encoding for Cloud Speech-to-Text \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/speech-to-text/docs/encoding](https://docs.cloud.google.com/speech-to-text/docs/encoding)
- Source ID: `site-docs-root`
- Final score: 283
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Linear PCM (which indicates that the amplitude response is linearly uniform across the sample) is the standard used within CDs, and within the LINEAR16 encoding of the Cloud Speech-to-Text API.
- The Cloud Speech-to-Text API supports several lossy formats, though you should avoid them if you have control over the audio, because data loss may affect recognition accuracy.
- Home Documentation AI and ML Cloud Speech-to-Text Send feedback Introduction to audio encoding for Cloud Speech-to-Text Stay organized with collections Save and categorize content based on your preferences.
- If omitted, Cloud Speech-to-Text automatically determines the encoding and sample rate for WAV or FLAC files based on the file header.

### Use models \_|\_ Cloud Speech-to-Text \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/speech-to-text/docs/custom-speech-models/use-model](https://docs.cloud.google.com/speech-to-text/docs/custom-speech-models/use-model)
- Source ID: `site-docs-root`
- Final score: 276
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Perform inference in V2 For a Custom Speech-to-Text model to be ready for use, the state of the model in the Models tab should be Active , and the dedicated endpoint in the Endpoints tab must be Deployed .
- As soon as you deploy your model through a dedicated endpoint, you automatically get programmatic access through a recognizer object, which can be used directly through the Cloud Speech-to-Text V2 API or in the Google Cloud console.
- Home Documentation AI and ML Cloud Speech-to-Text Send feedback Use models Stay organized with collections Save and categorize content based on your preferences.
- Use a trained Custom Speech-to-Text model in your production application or benchmarking workflows.

### "Set up Cloud Speech-to-Text for your Google Cloud project \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/speech-to-text/docs/setup](https://docs.cloud.google.com/speech-to-text/docs/setup)
- Source ID: `site-docs-root`
- Final score: 268
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Learn how to confirm that billing is enabled for your project Note: You must enable billing to use Cloud Speech-to-Text API, however you won't be charged unless you exceed the free quota.
- To enable the Cloud Speech-to-Text API for use with your project, click Enable .
- This document covers the following: Enabling and disabling the Cloud Speech-to-Text API for a Google Cloud project Enabling billing for Cloud Speech-to-Text Optional: Creating a new Google Cloud Storage bucket to store your audio data for large file sizes This document does not cover how to start sending and receiving requests using the Cloud Speech-to-Text API.
- Optional: Create a Cloud Storage bucket If you intend to transcribe audio longer than 60 seconds or with a file size larger than 10 MB, you must store the audio data in a Cloud Storage bucket before you can transcribe it using Cloud Speech-to-Text.

