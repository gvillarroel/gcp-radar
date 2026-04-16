---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:17:30.435Z"
product_name: "Dialogflow"
product_slug: "dialogflow"
feature_name: "Conversation history tool"
feature_slug: "conversation-history-tool"
latest_feature_date: "2022-10-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/conversation-history"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings"
keywords:
  - "conversation"
  - "history"
  - "tool"
  - "dialogflow"
  - "cx"
  - "provides"
  - "browse"
  - "filter"
---

# Conversation history tool

Product: Dialogflow
Coverage: MEDIUM

## Step 02 Summary

Dialogflow CX provides a tool to browse, filter, and analyze production conversations.

## Extended Definition

Dialogflow CX provides a tool to browse, filter, and analyze production conversations.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/conversation-history](https://docs.cloud.google.com/dialogflow/cx/docs/concept/conversation-history)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2](https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2)
- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings)

## Supporting Pages

### Conversation history \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/conversation-history](https://docs.cloud.google.com/dialogflow/cx/docs/concept/conversation-history)
- Source ID: `site-docs-root`
- Final score: 237
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The conversation history tool provides an interface for browsing and analyzing actual production conversations between your agent and end-users.
- Browsing the conversation history To use the conversation history tool: Open the Dialogflow CX console .
- Each conversational turn provides the end-user message, the agent message, and the following metadata: X Item Intent An intent display name that was matched or No Match Page The final active page name Flow The final active flow name Parameters Parameters collected during the conversational turn Example use case The tool can be used to identify agent issues that result in escalations to a human agent.
- Home Documentation AI and ML Dialogflow Dialogflow CX Send feedback Conversation history Stay organized with collections Save and categorize content based on your preferences.

### "Package com.google.cloud.dialogflow.v2 (4.94.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2](https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2)
- Source ID: `site-java-reference`
- Final score: 171
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Context Filter Settings Settings that determine how to filter recent conversation context when generating suggestions. com. google. cloud. dialogflow. v2.
- Builder Settings that determine how to filter recent conversation context when generating suggestions. com. google. cloud. dialogflow. v2.
- Project Location Conversation Model Evaluation Builder Builder for projects/{project}/locations/{location}/conversationModels/{conversation model}/evaluations/{evaluation}. com. google. cloud. dialogflow. v2.
- Home Documentation Developer tools Java Client libraries Send feedback Package com.google.cloud.dialogflow.v2 (4.94.0) Stay organized with collections Save and categorize content based on your preferences.

### Agent settings \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings)
- Source ID: `site-docs-root`
- Final score: 137
- Re-rank relevance: N/A

Evidence snippets:
- Conversation history made up of user and agent utterances, flow and playbook transition context, tool calls and outputs in the same session from all previous turns sequentially handled by the current playbook.
- Conversation history made up of user and agent utterances, flow and playbook transition context, tool calls and outputs in the same session from all previous turns sequentially handled by the current playbook.
- Enable consent-based end-user input redaction If this setting is enabled, it lets you use a special session parameter to control whether end-user input and parameters are redacted from conversation history and Cloud logging , by default the session parameter is true .
- Enable consent-based end-user input redaction If this setting is enabled, it lets you use a special session parameter to control whether end-user input and parameters are redacted from conversation history and Cloud logging .

