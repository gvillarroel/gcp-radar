---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T02:32:45.737Z"
product_name: "Dialogflow"
product_slug: "dialogflow"
feature_name: "Dialogflow CX speech synthesis voice selection"
feature_slug: "dialogflow-cx-speech-synthesis-voice-selection"
latest_feature_date: "2023-03-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2"
  - "https://docs.cloud.google.com/dialogflow/es/docs/agents-settings"
keywords:
  - "synthesis"
  - "selection"
  - "voice"
  - "setting"
  - "provides"
  - "speech"
---

# Dialogflow CX speech synthesis voice selection

Product: Dialogflow
Coverage: MEDIUM

## Step 02 Summary

Dialogflow CX provides a setting for choosing the speech synthesis voice.

## Extended Definition

Dialogflow CX provides a setting for choosing the speech synthesis voice.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2](https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2)
- [https://docs.cloud.google.com/dialogflow/es/docs/agents-settings](https://docs.cloud.google.com/dialogflow/es/docs/agents-settings)

## Supporting Pages

### Agent settings \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings)
- Source ID: `site-docs-root`
- Final score: 176
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Speech and IVR settings The following speech and IVR settings are available: Text-to-Speech Voice selection Note: SSML Tags are not supported for Chirp3-HD voices.
- Speech and IVR Speech options Text-to-Speech link Languages and voices link You can select the language and voice used for speech synthesis.
- You can select the language and voice used for speech synthesis.
- Override request-level synthesized speech configuration link When enabled, the synthesized speech configuration specified in the agent settings overrides the one specified in the API, partner integration, or the conversation profile.

### "Package com.google.cloud.dialogflow.v2 (4.94.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2](https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2)
- Source ID: `site-java-reference`
- Final score: 144
- Re-rank relevance: N/A

Evidence snippets:
- Voice Selection Params Description of which voice to use for speech synthesis. com. google. cloud. dialogflow. v2.
- Builder Description of which voice to use for speech synthesis. com. google. cloud. dialogflow. v2.
- If this audio config is supplied in a request, it overrides all existing text-to-speech settings applied to the agent. com. google. cloud. dialogflow. v2.
- If this audio config is supplied in a request, it overrides all existing text-to-speech settings applied to the agent. com. google. cloud. dialogflow. v2.

### Agent settings \_|\_ Dialogflow ES \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/es/docs/agents-settings](https://docs.cloud.google.com/dialogflow/es/docs/agents-settings)
- Source ID: `site-iam-reference`
- Final score: 125
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- These are the settings for speech recognition and speech synthesis.
- The following are included in the export of an agent: Intents Entities Most agent settings (see list below for excluded settings) The following are not included in the export of an agent and are not overwritten when importing or restoring: Agent name Inline editor files package.json and index.json Integration settings Edition Knowledge bases and knowledge documents Speech settings Interaction logs Maximum agent size (unzipped content) for agent import/restore should not exceed 50 MB.
- The following settings are available: Improve Speech Recognition Quality Enable Enhanced Speech Models and Data Logging : See Data logging and enhanced speech models .
- Voice Configuration : Agent Language : Choose the default language for voice synthesis.

