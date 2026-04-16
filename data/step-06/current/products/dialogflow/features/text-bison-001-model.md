---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:17:30.352Z"
product_name: "Dialogflow"
product_slug: "dialogflow"
feature_name: "text-bison-001 model"
feature_slug: "text-bison-001-model"
latest_feature_date: "2024-06-07"
deprecation_date: "2024-07-06"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/generative"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2"
keywords:
  - "text"
  - "bison"
  - "001"
  - "model"
  - "dialogflow"
  - "generative"
  - "features"
  - "used"
---

# text-bison-001 model

Product: Dialogflow
Coverage: MEDIUM

## Step 02 Summary

Dialogflow generative features used the text-bison@001 model for supported generative capabilities; Dialogflow generative features used the text-bison-001 model for supported generative capabilities; deprecated on 2024-07-06.

## Extended Definition

Dialogflow generative features used the text-bison@001 model for supported generative capabilities; Dialogflow generative features used the text-bison-001 model for supported generative capabilities; deprecated on 2024-07-06.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings)
- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/generative](https://docs.cloud.google.com/dialogflow/cx/docs/concept/generative)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2](https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2)

## Supporting Pages

### Agent settings \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings)
- Source ID: `site-docs-root`
- Final score: 132
- Re-rank relevance: N/A

Evidence snippets:
- Generative AI settings The following generative AI settings are available: General Generative model selection link Select the model used by generative features.
- Generative model selection Select the model used by generative features.
- Select generative model : This controls the LLM used for classification.
- Note: Some features, such as Experiments , Conversation history , BigQuery export , Analytics , and NLU model improvement require this setting to be enabled, as they rely on traffic logs.

### "Package com.google.cloud.dialogflow.v2 (4.94.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2](https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2)
- Source ID: `site-java-reference`
- Final score: 130
- Re-rank relevance: N/A

Evidence snippets:
- Conversation datasets contain raw conversation files and their customizable metadata that can be used for model training. com. google. cloud. dialogflow. v2.
- Conversation datasets contain raw conversation files and their customizable metadata that can be used for model training. com. google. cloud. dialogflow. v2.
- Conversation datasets contain raw conversation files and their customizable metadata that can be used for model training. com. google. cloud. dialogflow. v2.
- Input Text Config Defines the language used in the input text. com. google. cloud. dialogflow. v2.

### Generative versus deterministic \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/generative](https://docs.cloud.google.com/dialogflow/cx/docs/concept/generative)
- Source ID: `site-docs-root`
- Final score: 127
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- During a conversation, Dialogflow CX agents always use language models for understanding end-user intention, but you can choose whether and how language models are used for agent responses.
- Fully generative The fully generative features are built on Vertex AI large language models (LLMs) for both understanding end-user intention as well as generating agent responses.
- Home Documentation AI and ML Dialogflow Dialogflow CX Send feedback Generative versus deterministic Stay organized with collections Save and categorize content based on your preferences.
- Partly generative flows Flows have some optional generative features that you can use when you don't need deterministic control over agent responses in certain conversation scenarios.

