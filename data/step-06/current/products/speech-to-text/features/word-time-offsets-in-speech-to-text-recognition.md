---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:28:01.506Z"
product_name: "Speech-to-Text"
product_slug: "speech-to-text"
feature_name: "Word time offsets in Speech-to-Text recognition"
feature_slug: "word-time-offsets-in-speech-to-text-recognition"
latest_feature_date: "2017-08-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/speech-to-text/docs/custom-speech-models"
  - "https://docs.cloud.google.com/speech-to-text/docs/v1/transcribe-console"
  - "https://docs.cloud.google.com/speech-to-text/docs/reference/rpc/google.cloud.speech.v2"
keywords:
  - "word"
  - "time"
  - "offsets"
  - "in"
  - "speech"
  - "to"
  - "text"
  - "recognition"
---

# Word time offsets in Speech-to-Text recognition

Product: Speech-to-Text
Coverage: MEDIUM

## Step 02 Summary

Cloud Speech-to-Text now supports returning begin and end timestamps for each recognized word when the enableWordTimeOffsets request parameter is enabled.

## Extended Definition

Cloud Speech-to-Text now supports returning begin and end timestamps for each recognized word when the enableWordTimeOffsets request parameter is enabled.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/speech-to-text/docs/custom-speech-models](https://docs.cloud.google.com/speech-to-text/docs/custom-speech-models)
- [https://docs.cloud.google.com/speech-to-text/docs/v1/transcribe-console](https://docs.cloud.google.com/speech-to-text/docs/v1/transcribe-console)
- [https://docs.cloud.google.com/speech-to-text/docs/reference/rpc/google.cloud.speech.v2](https://docs.cloud.google.com/speech-to-text/docs/reference/rpc/google.cloud.speech.v2)

## Supporting Pages

### Overview of custom speech models | Cloud Speech-to-Text | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/speech-to-text/docs/custom-speech-models](https://docs.cloud.google.com/speech-to-text/docs/custom-speech-models)
- Source ID: `site-docs-root`
- Final score: 200
- Re-rank relevance: N/A

Evidence snippets:
- Overview of custom speech models Cloud Speech-to-Text Google Cloud Documentation Source URL: https://docs.cloud.google.com/speech-to-text/docs/custom-speech-models Accessible in both our Google Cloud console and API, Custom Speech-to-Text models allow to train, evaluate and deploy a dedicated speech model in a no-code integrated environment.

### Quickstart: Transcribe speech to text by using the Google Cloud console | Cloud Speech-to-Text | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/speech-to-text/docs/v1/transcribe-console](https://docs.cloud.google.com/speech-to-text/docs/v1/transcribe-console)
- Source ID: `site-docs-root`
- Final score: 190
- Re-rank relevance: N/A

Evidence snippets:
- Quickstart: Transcribe speech to text by using the Google Cloud console Cloud Speech-to-Text Google Cloud Documentation Source URL: https://docs.cloud.google.com/speech-to-text/docs/v1/transcribe-console Open the Cloud Speech-to-Text overview.

### Package google.cloud.speech.v2 | Cloud Speech-to-Text | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/speech-to-text/docs/reference/rpc/google.cloud.speech.v2](https://docs.cloud.google.com/speech-to-text/docs/reference/rpc/google.cloud.speech.v2)
- Source ID: `site-docs-reference`
- Final score: 182
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Package google.cloud.speech.v2 Cloud Speech-to-Text Google Cloud Documentation Source URL: https://docs.cloud.google.com/speech-to-text/docs/reference/rpc/google.cloud.speech.v2 A biasing PhraseSet, which can be either a string referencing the name of an existing PhraseSets resource, or an inline definition of a PhraseSet.
- A speech recognition result corresponding to a portion of the audio.
- Output configurations SubRip Text ...

