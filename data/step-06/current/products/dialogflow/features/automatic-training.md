---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:17:30.434Z"
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
  - "automatic"
  - "training"
  - "dialogflow"
  - "cx"
  - "advanced"
  - "nlu"
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

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

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
- An agent learns from training phrases that you provide and the language models built into Dialogflow.
- Note: After restore or import , the agent is retrained, even if the automatic training is disabled.
- Automatic Training : Enable or disable automatic agent training each time the agent is modified.
- To access these settings: Go to the Dialogflow ES console Select your agent near the top of the left sidebar menu Click the settings settings button next to the agent name Note: If you're working on a small screen, and the sidebar menu is hidden, click the menu menu button in the upper left corner.

### Agent settings \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings)
- Source ID: `site-docs-root`
- Final score: 82
- Re-rank relevance: N/A

Evidence snippets:
- Dialogflow CX learns from training phrases that you provide and the language models built into Dialogflow CX.
- If you are using telephony gateway, make sure the Dialogflow Service Agent service account service- PROJECT NUMBER @gcp-sa-dialogflow.iam.gserviceaccount.com is granted with "AutoML Predictor" in your custom voice project.
- If you are using telephony gateway, make sure the Dialogflow Service Agent service account service- PROJECT NUMBER @gcp-sa-dialogflow.iam.gserviceaccount.com is granted with "AutoML Predictor" in your custom voice project.
- The following intent training settings are available: Spell correction link If this is enabled and end-user input has a spelling or grammar mistake, an intent will be matched as though it was written correctly.

### Advanced speech settings \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/advanced-speech](https://docs.cloud.google.com/dialogflow/cx/docs/concept/advanced-speech)
- Source ID: `site-docs-root`
- Final score: 70
- Re-rank relevance: N/A

Evidence snippets:
- While the End of speech sensitivity setting supports only the phone call speech model for the en-US language tag by default, the Enable advanced timeout-based end of speech sensitivity setting allows for configuring end of speech sensitivity for all languages and speech models supported by Dialogflow.
- Home Documentation AI and ML Dialogflow Dialogflow CX Send feedback Advanced speech settings Stay organized with collections Save and categorize content based on your preferences.
- Note: This setting only supports the phone call speech model for the en-US language tag unless you check the Enable advanced timeout-based end of speech sensitivity setting.
- Settings availability by level The following table indicates which advanced speech settings are available at each level: Setting name Agent Flow Page Fulfillment Model selection (Speech-to-Text) ✔ ✔ ✔ End of speech sensitivity ✔ ✔ ✔ Advanced timeout-based end of speech sensitivity ✔ ✔ ✔ Enable smart endpointing ✔ No speech timeout ✔ ✔ ✔ Barge-in ✔ ✔ ✔ Allow cancellation of partial response playback ✔ Audio export bucket ✔ ✔ DTMF ✔ ✔ ✔ Model selection (Speech-to-Text) Can be set at the agent, flow, and page levels.

