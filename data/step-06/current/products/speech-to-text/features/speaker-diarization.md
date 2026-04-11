---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:28:01.483Z"
product_name: "Speech-to-Text"
product_slug: "speech-to-text"
feature_name: "Speaker diarization"
feature_slug: "speaker-diarization"
latest_feature_date: "2025-10-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/speech-to-text/docs/custom-speech-models"
  - "https://docs.cloud.google.com/speech-to-text/docs/samples/speech-quickstart"
  - "https://docs.cloud.google.com/speech-to-text/docs/ui-overview"
keywords:
  - "speaker"
  - "diarization"
  - "the"
  - "chirp"
  - "transcription"
  - "model"
  - "introduced"
  - "to"
---

# Speaker diarization

Product: Speech-to-Text
Coverage: MEDIUM

## Step 02 Summary

The Chirp 3: Transcription model introduced speaker diarization support to identify different speakers in audio; Makes Speaker Diarization available on Latest models for en-US, enabling recognition of multiple speakers in the same audio clip.

## Extended Definition

The Chirp 3: Transcription model introduced speaker diarization support to identify different speakers in audio; Makes Speaker Diarization available on Latest models for en-US, enabling recognition of multiple speakers in the same audio clip.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/speech-to-text/docs/custom-speech-models](https://docs.cloud.google.com/speech-to-text/docs/custom-speech-models)
- [https://docs.cloud.google.com/speech-to-text/docs/samples/speech-quickstart](https://docs.cloud.google.com/speech-to-text/docs/samples/speech-quickstart)
- [https://docs.cloud.google.com/speech-to-text/docs/ui-overview](https://docs.cloud.google.com/speech-to-text/docs/ui-overview)

## Supporting Pages

### Overview of custom speech models | Cloud Speech-to-Text | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/speech-to-text/docs/custom-speech-models](https://docs.cloud.google.com/speech-to-text/docs/custom-speech-models)
- Source ID: `site-docs-root`
- Final score: 120
- Re-rank relevance: N/A

Evidence snippets:
- Overview of custom speech models Cloud Speech-to-Text Google Cloud Documentation Source URL: https://docs.cloud.google.com/speech-to-text/docs/custom-speech-models Accessible in both our Google Cloud console and API, Custom Speech-to-Text models allow to train, evaluate and deploy a dedicated speech model in a no-code integrated environment.

### Make an audio transcription request | Cloud Speech-to-Text | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/speech-to-text/docs/samples/speech-quickstart](https://docs.cloud.google.com/speech-to-text/docs/samples/speech-quickstart)
- Source ID: `site-docs-root`
- Final score: 92
- Re-rank relevance: N/A

Evidence snippets:
- Make an audio transcription request Cloud Speech-to-Text Google Cloud Documentation Source URL: https://docs.cloud.google.com/speech-to-text/docs/samples/speech-quickstart For more information, see the Cloud STT Java API reference documentation.
- For more information, see Set up authentication for a local development environment. // Imports the Google Cloud client library import com.google.cloud.speech.v1.RecognitionAudio; import com.google.cloud.speech.v1.RecognitionConfig; import com.google.cloud.speech.v1.RecognitionConfig.AudioEncoding; import com.google.cloud.speech.v1.RecognizeResponse; import com.google.cloud.speech.v1.SpeechClient; import com.google.cloud.speech.v1.SpeechRecognitionAlternative; import com.google.cloud.speech.v1.SpeechRecognitionResult; import java.util.List; public class QuickstartSample { / Demonstrates using the Speech API to transcribe an audio file.
- To authenticate to Cloud STT, set up Application Default Credentials.

### Speech-to-Text UI Overview | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/speech-to-text/docs/ui-overview](https://docs.cloud.google.com/speech-to-text/docs/ui-overview)
- Source ID: `site-docs-root`
- Final score: 88
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Speech-to-Text UI Overview Google Cloud Documentation Source URL: https://docs.cloud.google.com/speech-to-text/docs/ui-overview Review transcriptions by comparing generated text to the original audio.
- Model adaptations - Boost transcription accuracy by customizing recognition of domain-specific terms and rare words and phrases.
- You can create new transcriptions from existing examples, making it quick and easy to subtly refine your results.
- Quickstart: Use the console to generate a Speech...

