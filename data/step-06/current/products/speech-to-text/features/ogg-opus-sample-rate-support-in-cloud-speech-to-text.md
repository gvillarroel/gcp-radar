---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:28:01.505Z"
product_name: "Speech-to-Text"
product_slug: "speech-to-text"
feature_name: "OGG_OPUS sample rate support in Cloud Speech-to-Text"
feature_slug: "ogg-opus-sample-rate-support-in-cloud-speech-to-text"
latest_feature_date: "2018-01-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/speech-to-text/docs/custom-speech-models"
  - "https://docs.cloud.google.com/speech-to-text/docs/v1/transcribe-console"
  - "https://docs.cloud.google.com/speech-to-text/docs/samples/speech-quickstart"
keywords:
  - "ogg"
  - "opus"
  - "sample"
  - "rate"
  - "in"
  - "speech"
  - "to"
  - "text"
---

# OGG_OPUS sample rate support in Cloud Speech-to-Text

Product: Speech-to-Text
Coverage: MEDIUM

## Step 02 Summary

Cloud Speech-to-Text expanded support for the OGG_OPUS audio encoding to include 8,000 Hz, 12,000 Hz, 16,000 Hz, 24,000 Hz, and 48,000 Hz input sample rates.

## Extended Definition

Cloud Speech-to-Text expanded support for the OGG_OPUS audio encoding to include 8,000 Hz, 12,000 Hz, 16,000 Hz, 24,000 Hz, and 48,000 Hz input sample rates.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/speech-to-text/docs/custom-speech-models](https://docs.cloud.google.com/speech-to-text/docs/custom-speech-models)
- [https://docs.cloud.google.com/speech-to-text/docs/v1/transcribe-console](https://docs.cloud.google.com/speech-to-text/docs/v1/transcribe-console)
- [https://docs.cloud.google.com/speech-to-text/docs/samples/speech-quickstart](https://docs.cloud.google.com/speech-to-text/docs/samples/speech-quickstart)

## Supporting Pages

### Overview of custom speech models | Cloud Speech-to-Text | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/speech-to-text/docs/custom-speech-models](https://docs.cloud.google.com/speech-to-text/docs/custom-speech-models)
- Source ID: `site-docs-root`
- Final score: 204
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

### Make an audio transcription request | Cloud Speech-to-Text | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/speech-to-text/docs/samples/speech-quickstart](https://docs.cloud.google.com/speech-to-text/docs/samples/speech-quickstart)
- Source ID: `site-docs-root`
- Final score: 186
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information, see Set up authentication for a local development environment. // Imports the Google Cloud client library import com.google.cloud.speech.v1.RecognitionAudio; import com.google.cloud.speech.v1.RecognitionConfig; import com.google.cloud.speech.v1.RecognitionConfig.AudioEncoding; import com.google.cloud.speech.v1.RecognizeResponse; import com.google.cloud.speech.v1.SpeechClient; import com.google.cloud.speech.v1.SpeechRecognitionAlternative; import com.google.cloud.speech.v1.SpeechRecognitionResult; import java.util.List; public class QuickstartSample { / Demonstrates using the Speech API to transcribe an audio file.
- Make an audio transcription request Cloud Speech-to-Text Google Cloud Documentation Source URL: https://docs.cloud.google.com/speech-to-text/docs/samples/speech-quickstart For more information, see the Cloud STT Java API reference documentation.
- To authenticate to Cloud STT, set up Application Default Credentials.

