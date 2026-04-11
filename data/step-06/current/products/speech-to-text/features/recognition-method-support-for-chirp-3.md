---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:28:01.483Z"
product_name: "Speech-to-Text"
product_slug: "speech-to-text"
feature_name: "Recognition method support for chirp_3"
feature_slug: "recognition-method-support-for-chirp-3"
latest_feature_date: "2025-10-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/speech-to-text/docs/samples/speech-quickstart"
  - "https://docs.cloud.google.com/ruby/docs/reference/google-cloud-speech-v2/latest/Google-Cloud-Speech-V2-RecognitionFeatures"
  - "https://docs.cloud.google.com/python/docs/reference/speech/latest"
keywords:
  - "recognition"
  - "method"
  - "for"
  - "chirp"
  - "transcription"
  - "added"
  - "streamingrecognize"
  - "recognize"
---

# Recognition method support for chirp_3

Product: Speech-to-Text
Coverage: MEDIUM

## Step 02 Summary

Chirp 3: Transcription added support for StreamingRecognize, Recognize, and BatchRecognize methods.

## Extended Definition

Chirp 3: Transcription added support for StreamingRecognize, Recognize, and BatchRecognize methods.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/speech-to-text/docs/samples/speech-quickstart](https://docs.cloud.google.com/speech-to-text/docs/samples/speech-quickstart)
- [https://docs.cloud.google.com/ruby/docs/reference/google-cloud-speech-v2/latest/Google-Cloud-Speech-V2-RecognitionFeatures](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-speech-v2/latest/Google-Cloud-Speech-V2-RecognitionFeatures)
- [https://docs.cloud.google.com/python/docs/reference/speech/latest](https://docs.cloud.google.com/python/docs/reference/speech/latest)

## Supporting Pages

### Make an audio transcription request | Cloud Speech-to-Text | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/speech-to-text/docs/samples/speech-quickstart](https://docs.cloud.google.com/speech-to-text/docs/samples/speech-quickstart)
- Source ID: `site-docs-root`
- Final score: 67
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see Set up authentication for a local development environment. // Imports the Google Cloud client library import com.google.cloud.speech.v1.RecognitionAudio; import com.google.cloud.speech.v1.RecognitionConfig; import com.google.cloud.speech.v1.RecognitionConfig.AudioEncoding; import com.google.cloud.speech.v1.RecognizeResponse; import com.google.cloud.speech.v1.SpeechClient; import com.google.cloud.speech.v1.SpeechRecognitionAlternative; import com.google.cloud.speech.v1.SpeechRecognitionResult; import java.util.List; public class QuickstartSample { / Demonstrates using the Speech API to transcribe an audio file.
- Make an audio transcription request Cloud Speech-to-Text Google Cloud Documentation Source URL: https://docs.cloud.google.com/speech-to-text/docs/samples/speech-quickstart For more information, see the Cloud STT Java API reference documentation.

### Cloud Speech-to-Text V2 API - Class Google::Cloud::Speech::V2::RecognitionFeatures (v1.7.1) | Ruby client libraries | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/ruby/docs/reference/google-cloud-speech-v2/latest/Google-Cloud-Speech-V2-RecognitionFeatures](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-speech-v2/latest/Google-Cloud-Speech-V2-RecognitionFeatures)
- Source ID: `site-docs-reference`
- Final score: 42
- Re-rank relevance: N/A

Evidence snippets:
- Cloud Speech-to-Text V2 API - Class Google::Cloud::Speech::V2::RecognitionFeatures (v1.7.1) Ruby client libraries Google Cloud Documentation Source URL: https://docs.cloud.google.com/ruby/docs/reference/google-cloud-speech-v2/latest/Google-Cloud-Speech-V2-RecognitionFeatures Reference documentation and code samples for the Cloud Speech-to-Text V2 API class Google::Cloud::Speech::V2::RecognitionFeatures.

### Python Client for Cloud Speech | Python client libraries | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/python/docs/reference/speech/latest](https://docs.cloud.google.com/python/docs/reference/speech/latest)
- Source ID: `site-python-reference`
- Final score: 39
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Python Client for Cloud Speech Python client libraries Google Cloud Documentation Source URL: https://docs.cloud.google.com/python/docs/reference/speech/latest Cloud Speech: enables easy integration of Google speech recognition technologies into developer applications.
- Send audio and receive a text transcription from the Speech-to-Text API service.

