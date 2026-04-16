---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T02:32:45.720Z"
product_name: "Dialogflow"
product_slug: "dialogflow"
feature_name: "Dialogflow CX generative personalization"
feature_slug: "dialogflow-cx-generative-personalization"
latest_feature_date: "2023-08-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/generative"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2"
keywords:
  - "personalization"
  - "adapts"
  - "context"
  - "responses"
  - "generative"
---

# Dialogflow CX generative personalization

Product: Dialogflow
Coverage: MEDIUM

## Step 02 Summary

Dialogflow CX generative personalization adapts generative responses using personalization context.

## Extended Definition

Dialogflow CX generative personalization adapts generative responses using personalization context.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/generative](https://docs.cloud.google.com/dialogflow/cx/docs/concept/generative)
- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2](https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2)

## Supporting Pages

### Generative versus deterministic \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/generative](https://docs.cloud.google.com/dialogflow/cx/docs/concept/generative)
- Source ID: `site-docs-root`
- Final score: 85
- Re-rank relevance: N/A

Evidence snippets:
- Partly generative flows Flows have some optional generative features that you can use when you don't need deterministic control over agent responses in certain conversation scenarios.
- Fully generative The fully generative features are built on Vertex AI large language models (LLMs) for both understanding end-user intention as well as generating agent responses.
- Generative fallback Generative fallback is used to generate agent responses when end-user input does not match an expected intention.
- During a conversation, Dialogflow CX agents always use language models for understanding end-user intention, but you can choose whether and how language models are used for agent responses.

### Agent settings \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings)
- Source ID: `site-docs-root`
- Final score: 81
- Re-rank relevance: N/A

Evidence snippets:
- Conversation history made up of user and agent utterances, flow and playbook transition context, tool calls and outputs in the same session from all previous turns sequentially handled by the current playbook.
- Conversation history made up of user and agent utterances, flow and playbook transition context, tool calls and outputs in the same session from all previous turns sequentially handled by the current playbook.
- Playbook context truncation Playbook context truncation culls some past turns from the playbook prompt in order to keep the prompt size from growing with every sequential turn handled by the playbook.
- GenAI The following generative AI settings are available for agent apps: Generative model selection Select the generative model that agents should use by default.

### "Package com.google.cloud.dialogflow.v2 (4.94.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2](https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2)
- Source ID: `site-java-reference`
- Final score: 79
- Re-rank relevance: N/A

Evidence snippets:
- Project Location Environment User Session Context Builder Builder for projects/{project}/locations/{location}/agent/environments/{environment}/users/{user}/sessions/{session}/contexts/{context}. com. google. cloud. dialogflow. v2.
- Project Environment User Session Context Builder Builder for projects/{project}/agent/environments/{environment}/users/{user}/sessions/{session}/contexts/{context}. com. google. cloud. dialogflow. v2.
- Browse Carousel Card Browse Carousel Card for Actions on Google. https://developers.google.com/actions/assistant/responses#browsing carousel com. google. cloud. dialogflow. v2.
- Project Location Session Context Builder Builder for projects/{project}/locations/{location}/agent/sessions/{session}/contexts/{context}. com. google. cloud. dialogflow. v2.

