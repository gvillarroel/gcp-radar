---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:28:01.481Z"
product_name: "Speech-to-Text"
product_slug: "speech-to-text"
feature_name: "Automatic language detection"
feature_slug: "automatic-language-detection"
latest_feature_date: "2025-10-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/speech-to-text/docs/custom-speech-models"
  - "https://docs.cloud.google.com/speech-to-text/docs/samples/speech-quickstart"
  - "https://docs.cloud.google.com/python/docs/reference/speech/latest/summary_class"
keywords:
  - "automatic"
  - "language"
  - "detection"
  - "the"
  - "chirp"
  - "transcription"
  - "model"
  - "added"
---

# Automatic language detection

Product: Speech-to-Text
Coverage: MEDIUM

## Step 02 Summary

The Chirp 3: Transcription model added automatic language detection for multilingual audio; Cloud Speech-to-Text can automatically detect the language in an audio file when multiple alternative languages are provided.

## Extended Definition

The Chirp 3: Transcription model added automatic language detection for multilingual audio; Cloud Speech-to-Text can automatically detect the language in an audio file when multiple alternative languages are provided.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/speech-to-text/docs/custom-speech-models](https://docs.cloud.google.com/speech-to-text/docs/custom-speech-models)
- [https://docs.cloud.google.com/speech-to-text/docs/samples/speech-quickstart](https://docs.cloud.google.com/speech-to-text/docs/samples/speech-quickstart)
- [https://docs.cloud.google.com/python/docs/reference/speech/latest/summary_class](https://docs.cloud.google.com/python/docs/reference/speech/latest/summary_class)

## Supporting Pages

### Overview of custom speech models | Cloud Speech-to-Text | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/speech-to-text/docs/custom-speech-models](https://docs.cloud.google.com/speech-to-text/docs/custom-speech-models)
- Source ID: `site-docs-root`
- Final score: 52
- Re-rank relevance: N/A

Evidence snippets:
- Overview of custom speech models Cloud Speech-to-Text Google Cloud Documentation Source URL: https://docs.cloud.google.com/speech-to-text/docs/custom-speech-models Accessible in both our Google Cloud console and API, Custom Speech-to-Text models allow to train, evaluate and deploy a dedicated speech model in a no-code integrated environment.

### Make an audio transcription request | Cloud Speech-to-Text | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/speech-to-text/docs/samples/speech-quickstart](https://docs.cloud.google.com/speech-to-text/docs/samples/speech-quickstart)
- Source ID: `site-docs-root`
- Final score: 48
- Re-rank relevance: N/A

Evidence snippets:
- Make an audio transcription request Cloud Speech-to-Text Google Cloud Documentation Source URL: https://docs.cloud.google.com/speech-to-text/docs/samples/speech-quickstart For more information, see the Cloud STT Java API reference documentation.
- For more information, see Set up authentication for a local development environment. // Imports the Google Cloud client library import com.google.cloud.speech.v1.RecognitionAudio; import com.google.cloud.speech.v1.RecognitionConfig; import com.google.cloud.speech.v1.RecognitionConfig.AudioEncoding; import com.google.cloud.speech.v1.RecognizeResponse; import com.google.cloud.speech.v1.SpeechClient; import com.google.cloud.speech.v1.SpeechRecognitionAlternative; import com.google.cloud.speech.v1.SpeechRecognitionResult; import java.util.List; public class QuickstartSample { / Demonstrates using the Speech API to transcribe an audio file.
- To authenticate to Cloud STT, set up Application Default Credentials.

### Package Classes (2.34.0) | Python client libraries | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/python/docs/reference/speech/latest/summary_class](https://docs.cloud.google.com/python/docs/reference/speech/latest/summary_class)
- Source ID: `site-python-reference`
- Final score: 44
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Use transcription normalization to automatically replace parts of the transcript with phrases of your choosing.
- Use to translate the given audio into text for the desired language.
- Package Classes (2.34.0) Python client libraries Google Cloud Documentation Source URL: https://docs.cloud.google.com/python/docs/reference/speech/latest/summary class Indicates the type of speech event.
- Transcription normalization configuration.

