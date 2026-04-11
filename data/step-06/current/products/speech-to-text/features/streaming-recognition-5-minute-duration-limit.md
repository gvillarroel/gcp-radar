---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:28:01.499Z"
product_name: "Speech-to-Text"
product_slug: "speech-to-text"
feature_name: "Streaming recognition 5-minute duration limit"
feature_slug: "streaming-recognition-5-minute-duration-limit"
latest_feature_date: "2019-06-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/speech-to-text/docs/custom-speech-models"
  - "https://docs.cloud.google.com/speech-to-text/docs/v1/transcribe-console"
  - "https://docs.cloud.google.com/ruby/docs/reference/google-cloud-speech-v2/latest/Google-Cloud-Speech-V2-RecognitionFeatures"
keywords:
  - "streaming"
  - "recognition"
  - "minute"
  - "duration"
  - "limit"
  - "speech"
  - "to"
  - "text"
---

# Streaming recognition 5-minute duration limit

Product: Speech-to-Text
Coverage: MEDIUM

## Step 02 Summary

Cloud Speech-to-Text added support for streaming recognition sessions up to 5 minutes, available via the v1p1beta1 API.

## Extended Definition

Cloud Speech-to-Text added support for streaming recognition sessions up to 5 minutes, available via the v1p1beta1 API.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/speech-to-text/docs/custom-speech-models](https://docs.cloud.google.com/speech-to-text/docs/custom-speech-models)
- [https://docs.cloud.google.com/speech-to-text/docs/v1/transcribe-console](https://docs.cloud.google.com/speech-to-text/docs/v1/transcribe-console)
- [https://docs.cloud.google.com/ruby/docs/reference/google-cloud-speech-v2/latest/Google-Cloud-Speech-V2-RecognitionFeatures](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-speech-v2/latest/Google-Cloud-Speech-V2-RecognitionFeatures)

## Supporting Pages

### Overview of custom speech models | Cloud Speech-to-Text | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/speech-to-text/docs/custom-speech-models](https://docs.cloud.google.com/speech-to-text/docs/custom-speech-models)
- Source ID: `site-docs-root`
- Final score: 184
- Re-rank relevance: N/A

Evidence snippets:
- Overview of custom speech models Cloud Speech-to-Text Google Cloud Documentation Source URL: https://docs.cloud.google.com/speech-to-text/docs/custom-speech-models Accessible in both our Google Cloud console and API, Custom Speech-to-Text models allow to train, evaluate and deploy a dedicated speech model in a no-code integrated environment.

### Quickstart: Transcribe speech to text by using the Google Cloud console | Cloud Speech-to-Text | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/speech-to-text/docs/v1/transcribe-console](https://docs.cloud.google.com/speech-to-text/docs/v1/transcribe-console)
- Source ID: `site-docs-root`
- Final score: 172
- Re-rank relevance: N/A

Evidence snippets:
- Quickstart: Transcribe speech to text by using the Google Cloud console Cloud Speech-to-Text Google Cloud Documentation Source URL: https://docs.cloud.google.com/speech-to-text/docs/v1/transcribe-console Open the Cloud Speech-to-Text overview.

### Cloud Speech-to-Text V2 API - Class Google::Cloud::Speech::V2::RecognitionFeatures (v1.7.1) | Ruby client libraries | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/ruby/docs/reference/google-cloud-speech-v2/latest/Google-Cloud-Speech-V2-RecognitionFeatures](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-speech-v2/latest/Google-Cloud-Speech-V2-RecognitionFeatures)
- Source ID: `site-docs-reference`
- Final score: 166
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Cloud Speech-to-Text V2 API - Class Google::Cloud::Speech::V2::RecognitionFeatures (v1.7.1) Ruby client libraries Google Cloud Documentation Source URL: https://docs.cloud.google.com/ruby/docs/reference/google-cloud-speech-v2/latest/Google-Cloud-Speech-V2-RecognitionFeatures Reference documentation and code samples for the Cloud Speech-to-Text V2 API class Google::Cloud::Speech::V2::RecognitionFeatures.

