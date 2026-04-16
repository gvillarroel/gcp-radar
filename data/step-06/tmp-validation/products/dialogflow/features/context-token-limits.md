---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T02:32:45.657Z"
product_name: "Dialogflow"
product_slug: "dialogflow"
feature_name: "Context token limits"
feature_slug: "context-token-limits"
latest_feature_date: "2024-11-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/conversation-history"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2"
keywords:
  - "reserve"
  - "limits"
  - "configurable"
  - "context"
  - "token"
---

# Context token limits

Product: Dialogflow
Coverage: MEDIUM

## Step 02 Summary

Dialogflow CX can reserve a configurable percentage of the token budget for conversation history in generative AI settings.

## Extended Definition

Dialogflow CX can reserve a configurable percentage of the token budget for conversation history in generative AI settings.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings)
- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/conversation-history](https://docs.cloud.google.com/dialogflow/cx/docs/concept/conversation-history)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2](https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2)

## Supporting Pages

### Agent settings \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings)
- Source ID: `site-docs-root`
- Final score: 145
- Re-rank relevance: N/A

Evidence snippets:
- Playbook context truncation lets you set a percentage of the token budget to be reserved for conversation history, as a maximum.
- Context truncation lets you set a percentage of the token budget to be reserved for conversation history, as a maximum.
- Context token limits link Note: This feature is restricted access.
- Token limits Input token limit link Select the input token limit for the generative model .

### Conversation history \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/conversation-history](https://docs.cloud.google.com/dialogflow/cx/docs/concept/conversation-history)
- Source ID: `site-docs-root`
- Final score: 76
- Re-rank relevance: N/A

### "Package com.google.cloud.dialogflow.v2 (4.94.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2](https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2)
- Source ID: `site-java-reference`
- Final score: 70
- Re-rank relevance: N/A

Evidence snippets:
- Project Location Environment User Session Context Builder Builder for projects/{project}/locations/{location}/agent/environments/{environment}/users/{user}/sessions/{session}/contexts/{context}. com. google. cloud. dialogflow. v2.
- Project Environment User Session Context Builder Builder for projects/{project}/agent/environments/{environment}/users/{user}/sessions/{session}/contexts/{context}. com. google. cloud. dialogflow. v2.
- Project Location Session Context Builder Builder for projects/{project}/locations/{location}/agent/sessions/{session}/contexts/{context}. com. google. cloud. dialogflow. v2.
- Context Filter Settings Settings that determine how to filter recent conversation context when generating suggestions. com. google. cloud. dialogflow. v2.

