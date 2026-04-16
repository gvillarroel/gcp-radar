---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T02:32:45.745Z"
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
  - "browse"
  - "conversation"
  - "filter"
  - "history"
  - "tool"
  - "provides"
---

# Conversation history tool

Product: Dialogflow
Coverage: MEDIUM

## Step 02 Summary

Dialogflow CX provides a tool to browse, filter, and analyze production conversations.

## Extended Definition

Dialogflow CX provides a tool to browse, filter, and analyze production conversations.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/conversation-history](https://docs.cloud.google.com/dialogflow/cx/docs/concept/conversation-history)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2](https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2)
- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings)

## Supporting Pages

### Conversation history \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/conversation-history](https://docs.cloud.google.com/dialogflow/cx/docs/concept/conversation-history)
- Source ID: `site-docs-root`
- Final score: 225
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The conversation history tool provides an interface for browsing and analyzing actual production conversations between your agent and end-users.
- Each conversational turn provides the end-user message, the agent message, and the following metadata: X Item Intent An intent display name that was matched or No Match Page The final active page name Flow The final active flow name Parameters Parameters collected during the conversational turn Example use case The tool can be used to identify agent issues that result in escalations to a human agent.
- You can apply filters in the Filter conversations field at the top of the Conversation History page to select only the specific conversations you want to export.
- Flow and page analysis can be used along with conversation history filters, to allow for maximum flexibility in studying a relevant subset of traffic.

### "Package com.google.cloud.dialogflow.v2 (4.94.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2](https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2)
- Source ID: `site-java-reference`
- Final score: 159
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

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

