---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:17:30.399Z"
product_name: "Dialogflow"
product_slug: "dialogflow"
feature_name: "Dialogflow CX intent suggestions"
feature_slug: "dialogflow-cx-intent-suggestions"
latest_feature_date: "2023-08-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2"
  - "https://docs.cloud.google.com/dialogflow/docs/intents-overview"
keywords:
  - "dialogflow"
  - "cx"
  - "intent"
  - "suggestions"
  - "provides"
---

# Dialogflow CX intent suggestions

Product: Dialogflow
Coverage: MEDIUM

## Step 02 Summary

Dialogflow CX provides intent suggestions.

## Extended Definition

Dialogflow CX provides intent suggestions.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2](https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2)
- [https://docs.cloud.google.com/dialogflow/docs/intents-overview](https://docs.cloud.google.com/dialogflow/docs/intents-overview)

## Supporting Pages

### "Package com.google.cloud.dialogflow.v2 (4.94.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2](https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2)
- Source ID: `site-java-reference`
- Final score: 80
- Re-rank relevance: N/A

Evidence snippets:
- Entity Type Each intent parameter has a type, called the entity type, which dictates exactly how data from an end-user expression is extracted. com. google. cloud. dialogflow. v2.
- Builder Each intent parameter has a type, called the entity type, which dictates exactly how data from an end-user expression is extracted. com. google. cloud. dialogflow. v2.
- Original Detect Intent Request Represents the contents of the original request that was passed to the [Streaming]DetectIntent call. com. google. cloud. dialogflow. v2.
- It will get populated in StreamingDetectIntentResponse or StreamingAnalyzeContentResponse when the flag enable debugging info is com. google. cloud. dialogflow. v2.

### Agent settings \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings)
- Source ID: `site-docs-root`
- Final score: 78
- Re-rank relevance: N/A

Evidence snippets:
- ML settings Dialogflow CX uses machine learning (ML) algorithms to understand end-user inputs, match them to intents, and extract structured data.
- Intent Suggestions link You can enable intent suggestions .
- Intent Suggestions You can enable intent suggestions .
- If you are using telephony gateway, make sure the Dialogflow Service Agent service account service- PROJECT NUMBER @gcp-sa-dialogflow.iam.gserviceaccount.com is granted with "AutoML Predictor" in your custom voice project.

### Intents \_|\_ Dialogflow ES \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/docs/intents-overview](https://docs.cloud.google.com/dialogflow/docs/intents-overview)
- Source ID: `site-docs-root-2`
- Final score: 70
- Re-rank relevance: N/A

Evidence snippets:
- When an intent is matched, Dialogflow provides the action to your system, and you can use the action to trigger certain actions defined in your system.
- Parameters : When an intent is matched at runtime, Dialogflow provides the extracted values from the end-user expression as parameters .
- The following diagram shows the basic flow for intent matching and responding to the end-user: A more complex intent may also contain the following: Contexts : Dialogflow contexts are similar to natural language context.
- Home Documentation AI and ML Dialogflow Dialogflow ES Send feedback Intents Stay organized with collections Save and categorize content based on your preferences.

