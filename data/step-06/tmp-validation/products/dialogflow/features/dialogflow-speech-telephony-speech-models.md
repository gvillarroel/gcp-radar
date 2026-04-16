---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T02:32:45.703Z"
product_name: "Dialogflow"
product_slug: "dialogflow"
feature_name: "Dialogflow speech telephony speech models"
feature_slug: "dialogflow-speech-telephony-speech-models"
latest_feature_date: "2023-12-04"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/advanced-speech"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/performance"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3/EventHandler"
keywords:
  - "short"
  - "recognition"
  - "telephony"
  - "models"
  - "supports"
  - "speech"
---

# Dialogflow speech telephony speech models

Product: Dialogflow
Coverage: LOW

## Step 02 Summary

Dialogflow supports the telephony and telephony_short speech recognition models for en and en-us.

## Extended Definition

Dialogflow supports the telephony and telephony_short speech recognition models for en and en-us.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/advanced-speech](https://docs.cloud.google.com/dialogflow/cx/docs/concept/advanced-speech)
- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/performance](https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/performance)
- [https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3/EventHandler](https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3/EventHandler)

## Supporting Pages

### "Data store performance improvements \_|\_ Dialogflow CX \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/performance](https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/performance)
- Source ID: `site-docs-root`
- Final score: 38
- Re-rank relevance: N/A

### EventHandler \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3/EventHandler](https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3/EventHandler)
- Source ID: `site-docs-reference`
- Final score: 38
- Re-rank relevance: N/A

### Advanced speech settings \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/advanced-speech](https://docs.cloud.google.com/dialogflow/cx/docs/concept/advanced-speech)
- Source ID: `site-docs-root`
- Final score: 35
- Re-rank relevance: N/A

Evidence snippets:
- While the End of speech sensitivity setting supports only the phone call speech model for the en-US language tag by default, the Enable advanced timeout-based end of speech sensitivity setting allows for configuring end of speech sensitivity for all languages and speech models supported by Dialogflow.
- If supplied, any audio data associated with a request will be saved to the Cloud Storage bucket: Audio Saved Applicable requests End-user audio input DetectIntent, StreamingDetectIntent, AnalyzeContent, StreamingAnalyzeContent Text-to-Speech (TTS) audio synthesized for a response AnalyzeContent, StreamingAnalyzeContent Grant the Storage Object Creator role to the following service accounts in your project: To the service account of the format one-click@df-cx- ALPHANUMERIC VALUE - ALPHANUMERIC VALUE .iam.gserviceaccount.com if you use a partner built-in telephony integration .
- Note: This setting only supports the phone call speech model for the en-US language tag unless you check the Enable advanced timeout-based end of speech sensitivity setting.
- Note: Advanced speech settings are only supported by telephony integrations .

