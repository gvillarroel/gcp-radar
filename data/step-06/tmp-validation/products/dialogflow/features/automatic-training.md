---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T02:32:45.745Z"
product_name: "Dialogflow"
product_slug: "dialogflow"
feature_name: "Automatic training"
feature_slug: "automatic-training"
latest_feature_date: "2022-10-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dialogflow/es/docs/agents-settings"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/advanced-speech"
keywords:
  - "advanced"
  - "automatic"
  - "training"
  - "supports"
---

# Automatic training

Product: Dialogflow
Coverage: MEDIUM

## Step 02 Summary

Dialogflow CX Advanced NLU supports automatic training.

## Extended Definition

Dialogflow CX Advanced NLU supports automatic training.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/dialogflow/es/docs/agents-settings](https://docs.cloud.google.com/dialogflow/es/docs/agents-settings)
- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings)
- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/advanced-speech](https://docs.cloud.google.com/dialogflow/cx/docs/concept/advanced-speech)

## Supporting Pages

### Agent settings \_|\_ Dialogflow ES \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/es/docs/agents-settings](https://docs.cloud.google.com/dialogflow/es/docs/agents-settings)
- Source ID: `site-iam-reference`
- Final score: 96
- Re-rank relevance: N/A

Evidence snippets:
- Note: After restore or import , the agent is retrained, even if the automatic training is disabled.
- Automatic Training : Enable or disable automatic agent training each time the agent is modified.
- Warnings and best practices: Spell correction can't correct ASR (automatic speech recognition) errors, so we don't recommend enabling it for agents using ASR inputs.
- Automatic Spell Correction : If this is enabled and user input has a spelling or grammar mistake, an intent will be matched as though it was written correctly.

### Agent settings \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings)
- Source ID: `site-docs-root`
- Final score: 82
- Re-rank relevance: N/A

Evidence snippets:
- The following intent training settings are available: Spell correction link If this is enabled and end-user input has a spelling or grammar mistake, an intent will be matched as though it was written correctly.
- Warnings and best practices: Spell correction can't correct ASR (automatic speech recognition) errors, so we don't recommend enabling it for agents using ASR inputs.
- Warnings and best practices: Spell correction can't correct ASR (automatic speech recognition) errors, so we don't recommend enabling it for agents using ASR inputs.
- Language auto detection When you configure language auto detection , your chat agent will automatically detect the end-user's language and switch to that language.

### Advanced speech settings \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/advanced-speech](https://docs.cloud.google.com/dialogflow/cx/docs/concept/advanced-speech)
- Source ID: `site-docs-root`
- Final score: 70
- Re-rank relevance: N/A

Evidence snippets:
- While the End of speech sensitivity setting supports only the phone call speech model for the en-US language tag by default, the Enable advanced timeout-based end of speech sensitivity setting allows for configuring end of speech sensitivity for all languages and speech models supported by Dialogflow.
- Note: This setting only supports the phone call speech model for the en-US language tag unless you check the Enable advanced timeout-based end of speech sensitivity setting.
- Settings availability by level The following table indicates which advanced speech settings are available at each level: Setting name Agent Flow Page Fulfillment Model selection (Speech-to-Text) ✔ ✔ ✔ End of speech sensitivity ✔ ✔ ✔ Advanced timeout-based end of speech sensitivity ✔ ✔ ✔ Enable smart endpointing ✔ No speech timeout ✔ ✔ ✔ Barge-in ✔ ✔ ✔ Allow cancellation of partial response playback ✔ Audio export bucket ✔ ✔ DTMF ✔ ✔ ✔ Model selection (Speech-to-Text) Can be set at the agent, flow, and page levels.
- Before you can configure these settings at any lower level, you must first check the Enable advanced speech settings box at the agent level (Agent settings > Speech and IVR > Speech-to-Text > Advanced speech settings) .

