---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T02:32:45.668Z"
product_name: "Dialogflow"
product_slug: "dialogflow"
feature_name: "Fine-tuned text-bison@001 options"
feature_slug: "fine-tuned-text-bison-001-options"
latest_feature_date: "2024-06-07"
deprecation_date: "2024-07-06"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/settings"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2"
keywords:
  - "tuned"
  - "fine"
  - "options"
  - "generative"
  - "bison"
  - "text"
---

# Fine-tuned text-bison@001 options

Product: Dialogflow
Coverage: MEDIUM

## Step 02 Summary

Dialogflow generative features supported fine-tuned text-bison@001 model options; Dialogflow generative features supported fine-tuned text-bison@001 model options; deprecated on 2024-07-06.

## Extended Definition

Dialogflow generative features supported fine-tuned text-bison@001 model options; Dialogflow generative features supported fine-tuned text-bison@001 model options; deprecated on 2024-07-06.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/settings](https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/settings)
- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2](https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2)

## Supporting Pages

### Data store tool settings \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/settings](https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/settings)
- Source ID: `site-docs-root`
- Final score: 108
- Re-rank relevance: N/A

Evidence snippets:
- Data store tool search configuration You can configure dynamic search parameters to fine-tune your results based on context from an ongoing conversation.
- The prompt is a text template that may contain predefined placeholders.
- The prompt is a text template that may contain predefined placeholders.
- The placeholders and required text are as follows: $original-query : The user's query text. $conversation : The conversation history is rendered in the following format: Human: user's first query AGENT: answer to user's first query Human: user's second query AGENT: answer to user's second query ${conversation USER:"<user prefix>" AGENT:"<agent prefix>" TURNS:<turn count>} : A parameterized version of the $conversation placeholder.

### "Package com.google.cloud.dialogflow.v2 (4.94.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2](https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2)
- Source ID: `site-java-reference`
- Final score: 107
- Re-rank relevance: N/A

Evidence snippets:
- Input Text Config Defines the language used in the input text. com. google. cloud. dialogflow. v2.
- Builder Defines the language used in the input text. com. google. cloud. dialogflow. v2.
- Project Location Environment User Session Context Builder Builder for projects/{project}/locations/{location}/agent/environments/{environment}/users/{user}/sessions/{session}/contexts/{context}. com. google. cloud. dialogflow. v2.
- Project Environment User Session Context Builder Builder for projects/{project}/agent/environments/{environment}/users/{user}/sessions/{session}/contexts/{context}. com. google. cloud. dialogflow. v2.

### Agent settings \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings)
- Source ID: `site-docs-root`
- Final score: 101
- Re-rank relevance: N/A

Evidence snippets:
- Generative Fallback Text prompt configuration link See Generative fallback: define your own prompt .
- Generative Fallback Text prompt configuration See Generative fallback: define your own prompt .
- Speech and IVR Speech options Text-to-Speech link Languages and voices link You can select the language and voice used for speech synthesis.
- When enabled, you can provide the following options: Prompt security settings : You can select either Default for default security settings or Customize to clarify what user queries should be considered safe or unsafe.

