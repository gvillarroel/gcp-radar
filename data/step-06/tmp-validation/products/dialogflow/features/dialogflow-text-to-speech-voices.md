---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T02:32:45.655Z"
product_name: "Dialogflow"
product_slug: "dialogflow"
feature_name: "Dialogflow text-to-speech voices"
feature_slug: "dialogflow-text-to-speech-voices"
latest_feature_date: "2025-02-24"
deprecation_date: "2025-02-24"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/advanced-speech"
keywords:
  - "synthesize"
  - "responses"
  - "voices"
  - "deprecated"
  - "speech"
  - "text"
---

# Dialogflow text-to-speech voices

Product: Dialogflow
Coverage: MEDIUM

## Step 02 Summary

Dialogflow can synthesize responses using supported text-to-speech voices; deprecated on 2025-02-24.

## Extended Definition

Dialogflow can synthesize responses using supported text-to-speech voices; deprecated on 2025-02-24.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2](https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2)
- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/advanced-speech](https://docs.cloud.google.com/dialogflow/cx/docs/concept/advanced-speech)

## Supporting Pages

### Agent settings \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings)
- Source ID: `site-docs-root`
- Final score: 121
- Re-rank relevance: N/A

Evidence snippets:
- Speech and IVR settings The following speech and IVR settings are available: Text-to-Speech Voice selection Note: SSML Tags are not supported for Chirp3-HD voices.
- Speech and IVR Speech options Text-to-Speech link Languages and voices link You can select the language and voice used for speech synthesis.
- Override request-level synthesized speech configuration link When enabled, the synthesized speech configuration specified in the agent settings overrides the one specified in the API, partner integration, or the conversation profile.
- Speech-to-Text link Enable auto speech adaptation link See Auto speech adaptation .

### "Package com.google.cloud.dialogflow.v2 (4.94.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2](https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2)
- Source ID: `site-java-reference`
- Final score: 110
- Re-rank relevance: N/A

Evidence snippets:
- Text To Speech Settings Instructs the speech synthesizer on how to generate the output audio content. com. google. cloud. dialogflow. v2.
- If this audio config is supplied in a request, it overrides all existing text-to-speech settings applied to the agent. com. google. cloud. dialogflow. v2.
- If this audio config is supplied in a request, it overrides all existing text-to-speech settings applied to the agent. com. google. cloud. dialogflow. v2.
- Speech Context Hints for the speech recognizer to help with recognition in a specific conversation state. com. google. cloud. dialogflow. v2.

### Advanced speech settings \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/advanced-speech](https://docs.cloud.google.com/dialogflow/cx/docs/concept/advanced-speech)
- Source ID: `site-docs-root`
- Final score: 100
- Re-rank relevance: N/A

Evidence snippets:
- If supplied, any audio data associated with a request will be saved to the Cloud Storage bucket: Audio Saved Applicable requests End-user audio input DetectIntent, StreamingDetectIntent, AnalyzeContent, StreamingAnalyzeContent Text-to-Speech (TTS) audio synthesized for a response AnalyzeContent, StreamingAnalyzeContent Grant the Storage Object Creator role to the following service accounts in your project: To the service account of the format one-click@df-cx- ALPHANUMERIC VALUE - ALPHANUMERIC VALUE .iam.gserviceaccount.com if you use a partner built-in telephony integration .
- Settings availability by level The following table indicates which advanced speech settings are available at each level: Setting name Agent Flow Page Fulfillment Model selection (Speech-to-Text) ✔ ✔ ✔ End of speech sensitivity ✔ ✔ ✔ Advanced timeout-based end of speech sensitivity ✔ ✔ ✔ Enable smart endpointing ✔ No speech timeout ✔ ✔ ✔ Barge-in ✔ ✔ ✔ Allow cancellation of partial response playback ✔ Audio export bucket ✔ ✔ DTMF ✔ ✔ ✔ Model selection (Speech-to-Text) Can be set at the agent, flow, and page levels.
- Before you can configure these settings at any lower level, you must first check the Enable advanced speech settings box at the agent level (Agent settings > Speech and IVR > Speech-to-Text > Advanced speech settings) .
- If this setting is disabled (the default), the End of speech sensitivity setting value is used to determine the end of speech by the ML model provided by Google Cloud Speech-to-Text.

