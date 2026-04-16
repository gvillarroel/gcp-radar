---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T02:32:45.693Z"
product_name: "Dialogflow"
product_slug: "dialogflow"
feature_name: "Dialogflow CX text-to-speech custom voices"
feature_slug: "dialogflow-cx-text-to-speech-custom-voices"
latest_feature_date: "2024-02-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/advanced-speech"
  - "https://docs.cloud.google.com/dialogflow/es/docs/agents-settings"
keywords:
  - "selecting"
  - "voices"
  - "settings"
  - "custom"
  - "speech"
  - "text"
---

# Dialogflow CX text-to-speech custom voices

Product: Dialogflow
Coverage: MEDIUM

## Step 02 Summary

Dialogflow CX text-to-speech settings support selecting custom voices.

## Extended Definition

Dialogflow CX text-to-speech settings support selecting custom voices.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings)
- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/advanced-speech](https://docs.cloud.google.com/dialogflow/cx/docs/concept/advanced-speech)
- [https://docs.cloud.google.com/dialogflow/es/docs/agents-settings](https://docs.cloud.google.com/dialogflow/es/docs/agents-settings)

## Supporting Pages

### Agent settings \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings)
- Source ID: `site-docs-root`
- Final score: 168
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Speech and IVR settings The following speech and IVR settings are available: Text-to-Speech Voice selection Note: SSML Tags are not supported for Chirp3-HD voices.
- Speech and IVR Speech options Text-to-Speech link Languages and voices link You can select the language and voice used for speech synthesis.
- Override request-level synthesized speech configuration link When enabled, the synthesized speech configuration specified in the agent settings overrides the one specified in the API, partner integration, or the conversation profile.
- When enabled, you can provide the following options: Prompt security settings : You can select either Default for default security settings or Customize to clarify what user queries should be considered safe or unsafe.

### Advanced speech settings \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/advanced-speech](https://docs.cloud.google.com/dialogflow/cx/docs/concept/advanced-speech)
- Source ID: `site-docs-root`
- Final score: 139
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Settings availability by level The following table indicates which advanced speech settings are available at each level: Setting name Agent Flow Page Fulfillment Model selection (Speech-to-Text) ✔ ✔ ✔ End of speech sensitivity ✔ ✔ ✔ Advanced timeout-based end of speech sensitivity ✔ ✔ ✔ Enable smart endpointing ✔ No speech timeout ✔ ✔ ✔ Barge-in ✔ ✔ ✔ Allow cancellation of partial response playback ✔ Audio export bucket ✔ ✔ DTMF ✔ ✔ ✔ Model selection (Speech-to-Text) Can be set at the agent, flow, and page levels.
- Before you can configure these settings at any lower level, you must first check the Enable advanced speech settings box at the agent level (Agent settings > Speech and IVR > Speech-to-Text > Advanced speech settings) .
- You can toggle these advanced settings off and on by navigating to Agent settings > Speech and IVR > Speech-to-Text > Advanced speech settings .
- If supplied, any audio data associated with a request will be saved to the Cloud Storage bucket: Audio Saved Applicable requests End-user audio input DetectIntent, StreamingDetectIntent, AnalyzeContent, StreamingAnalyzeContent Text-to-Speech (TTS) audio synthesized for a response AnalyzeContent, StreamingAnalyzeContent Grant the Storage Object Creator role to the following service accounts in your project: To the service account of the format one-click@df-cx- ALPHANUMERIC VALUE - ALPHANUMERIC VALUE .iam.gserviceaccount.com if you use a partner built-in telephony integration .

### Agent settings \_|\_ Dialogflow ES \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/es/docs/agents-settings](https://docs.cloud.google.com/dialogflow/es/docs/agents-settings)
- Source ID: `site-iam-reference`
- Final score: 125
- Re-rank relevance: N/A

Evidence snippets:
- The following are included in the export of an agent: Intents Entities Most agent settings (see list below for excluded settings) The following are not included in the export of an agent and are not overwritten when importing or restoring: Agent name Inline editor files package.json and index.json Integration settings Edition Knowledge bases and knowledge documents Speech settings Interaction logs Maximum agent size (unzipped content) for agent import/restore should not exceed 50 MB.
- The following settings are available: Improve Speech Recognition Quality Enable Enhanced Speech Models and Data Logging : See Data logging and enhanced speech models .
- Text to Speech Enable Automatic Text to Speech : Automatically convert default text responses to speech in all conversations.
- For a list of available profiles, see Using device profiles for generated audio in Text to Speech documentation.

