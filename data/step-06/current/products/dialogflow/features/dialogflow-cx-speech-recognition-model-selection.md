---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:17:30.404Z"
product_name: "Dialogflow"
product_slug: "dialogflow"
feature_name: "Dialogflow CX speech recognition model selection"
feature_slug: "dialogflow-cx-speech-recognition-model-selection"
latest_feature_date: "2023-07-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/advanced-speech"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings"
keywords:
  - "dialogflow"
  - "cx"
  - "speech"
  - "recognition"
  - "model"
  - "selection"
  - "supports"
  - "selecting"
---

# Dialogflow CX speech recognition model selection

Product: Dialogflow
Coverage: MEDIUM

## Step 02 Summary

Dialogflow CX supports selecting the speech recognition model.

## Extended Definition

Dialogflow CX supports selecting the speech recognition model.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/advanced-speech](https://docs.cloud.google.com/dialogflow/cx/docs/concept/advanced-speech)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2](https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2)
- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings)

## Supporting Pages

### Advanced speech settings \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/advanced-speech](https://docs.cloud.google.com/dialogflow/cx/docs/concept/advanced-speech)
- Source ID: `site-docs-root`
- Final score: 138
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- While the End of speech sensitivity setting supports only the phone call speech model for the en-US language tag by default, the Enable advanced timeout-based end of speech sensitivity setting allows for configuring end of speech sensitivity for all languages and speech models supported by Dialogflow.
- Settings availability by level The following table indicates which advanced speech settings are available at each level: Setting name Agent Flow Page Fulfillment Model selection (Speech-to-Text) ✔ ✔ ✔ End of speech sensitivity ✔ ✔ ✔ Advanced timeout-based end of speech sensitivity ✔ ✔ ✔ Enable smart endpointing ✔ No speech timeout ✔ ✔ ✔ Barge-in ✔ ✔ ✔ Allow cancellation of partial response playback ✔ Audio export bucket ✔ ✔ DTMF ✔ ✔ ✔ Model selection (Speech-to-Text) Can be set at the agent, flow, and page levels.
- Note: This setting only supports the phone call speech model for the en-US language tag unless you check the Enable advanced timeout-based end of speech sensitivity setting.
- Sets the speech model used for speech recognition.

### "Package com.google.cloud.dialogflow.v2 (4.94.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2](https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2)
- Source ID: `site-java-reference`
- Final score: 128
- Re-rank relevance: N/A

Evidence snippets:
- Streaming Recognition Result Contains a speech recognition result corresponding to a portion of the audio that is currently being processed or an indication that this is the end of the single requested utterance. com. google. cloud. dialogflow. v2.
- Builder Contains a speech recognition result corresponding to a portion of the audio that is currently being processed or an indication that this is the end of the single requested utterance. com. google. cloud. dialogflow. v2.
- Speech Context Hints for the speech recognizer to help with recognition in a specific conversation state. com. google. cloud. dialogflow. v2.
- Builder Hints for the speech recognizer to help with recognition in a specific conversation state. com. google. cloud. dialogflow. v2.

### Agent settings \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings)
- Source ID: `site-docs-root`
- Final score: 118
- Re-rank relevance: N/A

Evidence snippets:
- Previous arrow back Zip code collection Next Speech models arrow forward Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- You may enable Custom voice for your agent by selecting the custom voice option from the voice selection dropbox and specifying the custom voice name in the corresponding field.
- Warnings and best practices: Spell correction can't correct ASR (automatic speech recognition) errors, so we don't recommend enabling it for agents using ASR inputs.
- Warnings and best practices: Spell correction can't correct ASR (automatic speech recognition) errors, so we don't recommend enabling it for agents using ASR inputs.

