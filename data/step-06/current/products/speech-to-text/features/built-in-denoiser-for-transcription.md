---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:28:01.481Z"
product_name: "Speech-to-Text"
product_slug: "speech-to-text"
feature_name: "Built-in denoiser for transcription"
feature_slug: "built-in-denoiser-for-transcription"
latest_feature_date: "2025-10-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/speech-to-text/docs/samples/speech-quickstart"
  - "https://docs.cloud.google.com/speech-to-text/docs/setup"
  - "https://docs.cloud.google.com/speech-to-text/docs/ui-overview"
keywords:
  - "built"
  - "in"
  - "denoiser"
  - "for"
  - "transcription"
  - "chirp"
  - "added"
  - "to"
---

# Built-in denoiser for transcription

Product: Speech-to-Text
Coverage: MEDIUM

## Step 02 Summary

Chirp 3: Transcription added a built-in denoiser to improve transcription quality on noisy audio.

## Extended Definition

Chirp 3: Transcription added a built-in denoiser to improve transcription quality on noisy audio.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/speech-to-text/docs/samples/speech-quickstart](https://docs.cloud.google.com/speech-to-text/docs/samples/speech-quickstart)
- [https://docs.cloud.google.com/speech-to-text/docs/setup](https://docs.cloud.google.com/speech-to-text/docs/setup)
- [https://docs.cloud.google.com/speech-to-text/docs/ui-overview](https://docs.cloud.google.com/speech-to-text/docs/ui-overview)

## Supporting Pages

### Make an audio transcription request | Cloud Speech-to-Text | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/speech-to-text/docs/samples/speech-quickstart](https://docs.cloud.google.com/speech-to-text/docs/samples/speech-quickstart)
- Source ID: `site-docs-root`
- Final score: 108
- Re-rank relevance: N/A

Evidence snippets:
- Make an audio transcription request Cloud Speech-to-Text Google Cloud Documentation Source URL: https://docs.cloud.google.com/speech-to-text/docs/samples/speech-quickstart For more information, see the Cloud STT Java API reference documentation.
- For more information, see Set up authentication for a local development environment. // Imports the Google Cloud client library import com.google.cloud.speech.v1.RecognitionAudio; import com.google.cloud.speech.v1.RecognitionConfig; import com.google.cloud.speech.v1.RecognitionConfig.AudioEncoding; import com.google.cloud.speech.v1.RecognizeResponse; import com.google.cloud.speech.v1.SpeechClient; import com.google.cloud.speech.v1.SpeechRecognitionAlternative; import com.google.cloud.speech.v1.SpeechRecognitionResult; import java.util.List; public class QuickstartSample { / Demonstrates using the Speech API to transcribe an audio file.
- To authenticate to Cloud STT, set up Application Default Credentials.

### Set up Cloud Speech-to-Text for your Google Cloud project | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/speech-to-text/docs/setup](https://docs.cloud.google.com/speech-to-text/docs/setup)
- Source ID: `site-docs-root`
- Final score: 94
- Re-rank relevance: N/A

Evidence snippets:
- Set up Cloud Speech-to-Text for your Google Cloud project Google Cloud Documentation Source URL: https://docs.cloud.google.com/speech-to-text/docs/setup Cloud Speech-to-Text is an API that converts speech to text by taking audio data as input and outputting a text transcription by using Google&#x27;s AI technology.
- This page shows you how to set up the Cloud Speech-to-Text API for your project so ...

### Speech-to-Text UI Overview | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/speech-to-text/docs/ui-overview](https://docs.cloud.google.com/speech-to-text/docs/ui-overview)
- Source ID: `site-docs-root`
- Final score: 94
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Speech-to-Text UI Overview Google Cloud Documentation Source URL: https://docs.cloud.google.com/speech-to-text/docs/ui-overview Review transcriptions by comparing generated text to the original audio.
- Model adaptations - Boost transcription accuracy by customizing recognition of domain-specific terms and rare words and phrases.
- You can create new transcriptions from existing examples, making it quick and easy to subtly refine your results.
- Quickstart: Use the console to generate a Speech...

