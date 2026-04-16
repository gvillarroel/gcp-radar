---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T02:32:45.663Z"
product_name: "Dialogflow"
product_slug: "dialogflow"
feature_name: "text-bison@002 model"
feature_slug: "text-bison-002-model"
latest_feature_date: "2024-09-19"
deprecation_date: "2024-10-21"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/generative"
keywords:
  - "features"
  - "generative"
  - "bison"
  - "text"
  - "model"
---

# text-bison@002 model

Product: Dialogflow
Coverage: MEDIUM

## Step 02 Summary

Dialogflow CX generative features used the text-bison@002 model for supported agent capabilities; deprecated on 2024-10-21.

## Extended Definition

Dialogflow CX generative features used the text-bison@002 model for supported agent capabilities; deprecated on 2024-10-21.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2](https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2)
- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/generative](https://docs.cloud.google.com/dialogflow/cx/docs/concept/generative)

## Supporting Pages

### Agent settings \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings)
- Source ID: `site-docs-root`
- Final score: 108
- Re-rank relevance: N/A

Evidence snippets:
- Generative AI settings The following generative AI settings are available: General Generative model selection link Select the model used by generative features.
- Generative model selection Select the model used by generative features.
- Note: Some features, such as Experiments , Conversation history , BigQuery export , Analytics , and NLU model improvement require this setting to be enabled, as they rely on traffic logs.
- Note: Some features, such as Experiments , Conversation history , BigQuery export , Analytics , and NLU model improvement require this setting to be enabled, as they rely on traffic logs.

### "Package com.google.cloud.dialogflow.v2 (4.94.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2](https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2)
- Source ID: `site-java-reference`
- Final score: 104
- Re-rank relevance: N/A

Evidence snippets:
- Project Location Environment User Session Context Builder Builder for projects/{project}/locations/{location}/agent/environments/{environment}/users/{user}/sessions/{session}/contexts/{context}. com. google. cloud. dialogflow. v2.
- Project Location Conversation Model Evaluation Builder Builder for projects/{project}/locations/{location}/conversationModels/{conversation model}/evaluations/{evaluation}. com. google. cloud. dialogflow. v2.
- Project Environment User Session Context Builder Builder for projects/{project}/agent/environments/{environment}/users/{user}/sessions/{session}/contexts/{context}. com. google. cloud. dialogflow. v2.
- Project Location Session Context Builder Builder for projects/{project}/locations/{location}/agent/sessions/{session}/contexts/{context}. com. google. cloud. dialogflow. v2.

### Generative versus deterministic \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/generative](https://docs.cloud.google.com/dialogflow/cx/docs/concept/generative)
- Source ID: `site-docs-root`
- Final score: 99
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Fully generative The fully generative features are built on Vertex AI large language models (LLMs) for both understanding end-user intention as well as generating agent responses.
- Partly generative flows Flows have some optional generative features that you can use when you don't need deterministic control over agent responses in certain conversation scenarios.
- The following is an overview of the fully generative features: X Item Playbooks Playbooks provide a new way for creating virtual agents using LLMs.
- You can decide between fully generative, partly generative, and deterministic features when designing your agent.

