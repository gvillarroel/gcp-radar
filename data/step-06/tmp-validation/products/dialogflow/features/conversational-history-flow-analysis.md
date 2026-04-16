---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T02:32:45.638Z"
product_name: "Dialogflow"
product_slug: "dialogflow"
feature_name: "Conversational history flow analysis"
feature_slug: "conversational-history-flow-analysis"
latest_feature_date: "2025-07-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/conversation-history"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/console-conversational-agents"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2"
keywords:
  - "conversational"
  - "analysis"
  - "history"
  - "feature"
  - "available"
  - "flow"
---

# Conversational history flow analysis

Product: Dialogflow
Coverage: MEDIUM

## Step 02 Summary

The conversational history flow analysis feature is available.

## Extended Definition

The conversational history flow analysis feature is available.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/conversation-history](https://docs.cloud.google.com/dialogflow/cx/docs/concept/conversation-history)
- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/console-conversational-agents](https://docs.cloud.google.com/dialogflow/cx/docs/concept/console-conversational-agents)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2](https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2)

## Supporting Pages

### Conversation history \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/conversation-history](https://docs.cloud.google.com/dialogflow/cx/docs/concept/conversation-history)
- Source ID: `site-docs-root`
- Final score: 204
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Flow and page analysis can be used along with conversation history filters, to allow for maximum flexibility in studying a relevant subset of traffic.
- The following metadata is provided for each conversation: X Item Conversation ID An identifier for the conversation Duration Duration of the conversation Turns The number of conversational turns Channel Either chat (text), voice, or undetermined (no end-user input has been provided to the conversation yet) Language The language for the conversation Environment The agent's environment Start time Start time for the conversation Flags May be set to Live Agent Handoff (if conversation escalated to a human agent) or Abandoned (if end-user left the incomplete conversation) or TU,TD (if answer in the conversation got end-user rating) You can filter the results by metadata (except environment and duration) and the following additional filter options: X Item Intent The provided intent was matched at some point in the conversation No Match Some subset of conversational turns resulted in an intent no-match Flow The provided flow is the final active flow at the end of some conversation turn Page The provided page is the final active page at the end of some conversation turn Is Live Agent Handoff The Live Agent Handoff flag is set Is Abandoned The Abandoned flag is set Conversation ID A specific conversation is chosen Start Time A date range is provided Agent Utterance The provided text is a substring of an utterance that was used by the agent at some point in the conversation.
- Each conversational turn provides the end-user message, the agent message, and the following metadata: X Item Intent An intent display name that was matched or No Match Page The final active page name Flow The final active flow name Parameters Parameters collected during the conversational turn Example use case The tool can be used to identify agent issues that result in escalations to a human agent.
- The following metrics are shown: X Item Intent Stats for intent matches for the page Next Page Stats for transitions from selected page to another page Previous Page Stats for transitions from another page to the selected page Flow analysis graph The Flow Analysis - Graph tab is used to analyze traffic and exits in flows and pages in graph form.

### "Conversational Agents console overview \_|\_ Dialogflow CX \_|\_ Google\

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/console-conversational-agents](https://docs.cloud.google.com/dialogflow/cx/docs/concept/console-conversational-agents)
- Source ID: `site-docs-root`
- Final score: 188
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The Conversational Agents console is a new console that includes features from both the Dialogflow CX console and the Vertex AI Agent Builder console.
- Users of the Dialogflow CX console that want to incorporate generative features into agents should start using the Conversational Agents console.
- The Dialogflow CX console will continue to be supported until the Conversational Agents console is generally available (GA).
- Home Documentation AI and ML Dialogflow Dialogflow CX Send feedback Conversational Agents console overview Stay organized with collections Save and categorize content based on your preferences.

### "Package com.google.cloud.dialogflow.v2 (4.94.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2](https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2)
- Source ID: `site-java-reference`
- Final score: 188
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Sentiment analysis inspects user input and identifies the prevailing subjective opinion, especially to determine a user's attitude as positive, negative, or neutral. com. google. cloud. dialogflow. v2.
- Sentiment analysis inspects user input and identifies the prevailing subjective opinion, especially to determine a user's attitude as positive, negative, or neutral. com. google. cloud. dialogflow. v2.
- Clear Suggestion Feature Config Operation Metadata Metadata for a ConversationProfiles.ClearSuggestionFeatureConfig operation. com. google. cloud. dialogflow. v2.
- Set Suggestion Feature Config Operation Metadata Metadata for a ConversationProfiles.SetSuggestionFeatureConfig operation. com. google. cloud. dialogflow. v2.

