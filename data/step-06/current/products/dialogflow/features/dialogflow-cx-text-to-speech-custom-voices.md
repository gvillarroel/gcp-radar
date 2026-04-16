---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:17:30.364Z"
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
  - "dialogflow"
  - "cx"
  - "text"
  - "speech"
  - "custom"
  - "voices"
  - "settings"
  - "selecting"
---

# Dialogflow CX text-to-speech custom voices

Product: Dialogflow
Coverage: MEDIUM

## Step 02 Summary

Dialogflow CX text-to-speech settings support selecting custom voices.

## Extended Definition

Dialogflow CX text-to-speech settings support selecting custom voices.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings)
- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/advanced-speech](https://docs.cloud.google.com/dialogflow/cx/docs/concept/advanced-speech)
- [https://docs.cloud.google.com/dialogflow/es/docs/agents-settings](https://docs.cloud.google.com/dialogflow/es/docs/agents-settings)

## Supporting Pages

### Agent settings \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings)
- Source ID: `site-docs-root`
- Final score: 180
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Speech and IVR settings The following speech and IVR settings are available: Text-to-Speech Voice selection Note: SSML Tags are not supported for Chirp3-HD voices.
- Speech and IVR Speech options Text-to-Speech link Languages and voices link You can select the language and voice used for speech synthesis.
- Override request-level synthesized speech configuration link When enabled, the synthesized speech configuration specified in the agent settings overrides the one specified in the API, partner integration, or the conversation profile.
- If you are using telephony gateway, make sure the Dialogflow Service Agent service account service- PROJECT NUMBER @gcp-sa-dialogflow.iam.gserviceaccount.com is granted with "AutoML Predictor" in your custom voice project.

### Advanced speech settings \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/advanced-speech](https://docs.cloud.google.com/dialogflow/cx/docs/concept/advanced-speech)
- Source ID: `site-docs-root`
- Final score: 151
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Settings availability by level The following table indicates which advanced speech settings are available at each level: Setting name Agent Flow Page Fulfillment Model selection (Speech-to-Text) ✔ ✔ ✔ End of speech sensitivity ✔ ✔ ✔ Advanced timeout-based end of speech sensitivity ✔ ✔ ✔ Enable smart endpointing ✔ No speech timeout ✔ ✔ ✔ Barge-in ✔ ✔ ✔ Allow cancellation of partial response playback ✔ Audio export bucket ✔ ✔ DTMF ✔ ✔ ✔ Model selection (Speech-to-Text) Can be set at the agent, flow, and page levels.
- Before you can configure these settings at any lower level, you must first check the Enable advanced speech settings box at the agent level (Agent settings > Speech and IVR > Speech-to-Text > Advanced speech settings) .
- Home Documentation AI and ML Dialogflow Dialogflow CX Send feedback Advanced speech settings Stay organized with collections Save and categorize content based on your preferences.
- You can toggle these advanced settings off and on by navigating to Agent settings > Speech and IVR > Speech-to-Text > Advanced speech settings .

### Agent settings \_|\_ Dialogflow ES \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/es/docs/agents-settings](https://docs.cloud.google.com/dialogflow/es/docs/agents-settings)
- Source ID: `site-iam-reference`
- Final score: 125
- Re-rank relevance: N/A

Evidence snippets:
- The following are included in the export of an agent: Intents Entities Most agent settings (see list below for excluded settings) The following are not included in the export of an agent and are not overwritten when importing or restoring: Agent name Inline editor files package.json and index.json Integration settings Edition Knowledge bases and knowledge documents Speech settings Interaction logs Maximum agent size (unzipped content) for agent import/restore should not exceed 50 MB.
- To access these settings: Go to the Dialogflow ES console Select your agent near the top of the left sidebar menu Click the settings settings button next to the agent name Note: If you're working on a small screen, and the sidebar menu is hidden, click the menu menu button in the upper left corner.
- To read or change this setting with the API, you must have one of the following roles : IAM Dialogflow API Admin, IAM Editor, or IAM Owner; or a custom role containing the dialogflow.agents.create permission.
- Home Documentation AI and ML Dialogflow Dialogflow ES Send feedback Agent settings Stay organized with collections Save and categorize content based on your preferences.

