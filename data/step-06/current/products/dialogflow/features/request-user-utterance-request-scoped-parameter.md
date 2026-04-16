---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:08:43.292Z"
product_name: "Dialogflow"
product_slug: "dialogflow"
feature_name: "$request.user-utterance request-scoped parameter"
feature_slug: "request-user-utterance-request-scoped-parameter"
latest_feature_date: "2024-03-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/conversation-history"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/reference/condition"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings"
keywords:
  - "request"
  - "user"
  - "utterance"
  - "scoped"
  - "parameter"
  - "dialogflow"
  - "cx"
  - "parameters"
---

# $request.user-utterance request-scoped parameter

Product: Dialogflow
Coverage: MEDIUM

## Step 02 Summary

Dialogflow CX request-scoped parameters support $request.user-utterance to reference the end-user utterance.

## Extended Definition

Dialogflow CX request-scoped parameters support $request.user-utterance to reference the end-user utterance.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/conversation-history](https://docs.cloud.google.com/dialogflow/cx/docs/concept/conversation-history)
- [https://docs.cloud.google.com/dialogflow/cx/docs/reference/condition](https://docs.cloud.google.com/dialogflow/cx/docs/reference/condition)
- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings)

## Supporting Pages

### Conditions reference \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/reference/condition](https://docs.cloud.google.com/dialogflow/cx/docs/reference/condition)
- Source ID: `site-docs-reference`
- Final score: 92
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To check whether the current page's form is filled, use the following condition: $page.params.status = "FINAL" To check whether a particular form parameter was filled for the end-user's previous conversational turn, use the following condition: $page.params.parameter-id.status = "UPDATED" To check that a numerical session parameter is between the values 1 and 10, use the following condition: $session.params.parameter-id >= 1 AND $session.params.parameter-id <= 10 To check that the second value of a list session parameter is equal to "hello", use the following condition: $session.params.parameter-id[1] = "hello" Request-scoped parameter references When defining a condition, you can also use the request-scoped parameters to form your condition.
- You can build more complex conditions which evaluate to true for cases like: A parameter equals a specific value A parameter is less than or greater than a specific value A parameter is in a range of values One parameter is greater than another parameter A form has been completed End-user sentiment is positive or negative A probability from a random function To set conditions in the console, see the handler documentation .
- For example: (NOT ($a > 1 AND $b < 100)) OR $c = 50 If you are not using parenthesis, you cannot use both OR and AND operators in a compound expression: $a=1 AND $b=2 AND $c=3 // VALID $a=1 OR $b=2 OR $c=3 // VALID $a=1 OR $b=2 AND $c=3 // INVALID ($a=1 OR $b=2) AND $c=3 // VALID Parameter references The parameter references you can use in conditions are found in the parameters guide .
- For example, there is a 10% probability that the following condition will be true: $sys.func.RAND() < 0.1 Checking values of parameters.

### Conversation history \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/conversation-history](https://docs.cloud.google.com/dialogflow/cx/docs/concept/conversation-history)
- Source ID: `site-docs-root`
- Final score: 92
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Each conversational turn provides the end-user message, the agent message, and the following metadata: X Item Intent An intent display name that was matched or No Match Page The final active page name Flow The final active flow name Parameters Parameters collected during the conversational turn Example use case The tool can be used to identify agent issues that result in escalations to a human agent.
- The following metadata is provided for each conversation: X Item Conversation ID An identifier for the conversation Duration Duration of the conversation Turns The number of conversational turns Channel Either chat (text), voice, or undetermined (no end-user input has been provided to the conversation yet) Language The language for the conversation Environment The agent's environment Start time Start time for the conversation Flags May be set to Live Agent Handoff (if conversation escalated to a human agent) or Abandoned (if end-user left the incomplete conversation) or TU,TD (if answer in the conversation got end-user rating) You can filter the results by metadata (except environment and duration) and the following additional filter options: X Item Intent The provided intent was matched at some point in the conversation No Match Some subset of conversational turns resulted in an intent no-match Flow The provided flow is the final active flow at the end of some conversation turn Page The provided page is the final active page at the end of some conversation turn Is Live Agent Handoff The Live Agent Handoff flag is set Is Abandoned The Abandoned flag is set Conversation ID A specific conversation is chosen Start Time A date range is provided Agent Utterance The provided text is a substring of an utterance that was used by the agent at some point in the conversation.
- User Utterance The provided text is a substring of an utterance that was used by the user at some point in the conversation.
- The following metrics are shown: X Item Flow name Flow name for each flow in your agent Relative traffic The number of conversations that went through this flow Escalation rate The percentage of conversations that result in a request for human escalation out of all conversations that went through this flow Exit rate The percentage of conversations that ended after this flow or transitioned to SESSION END from this flow, out of all conversations that went through this flow Clicking the list list alt button opens a sample of relevant conversations for the row.

### Agent settings \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings)
- Source ID: `site-docs-root`
- Final score: 82
- Re-rank relevance: N/A

Evidence snippets:
- Enable consent-based end-user input redaction If this setting is enabled, it lets you use a special session parameter to control whether end-user input and parameters are redacted from conversation history and Cloud logging , by default the session parameter is true .
- Enable consent-based end-user input redaction If this setting is enabled, it lets you use a special session parameter to control whether end-user input and parameters are redacted from conversation history and Cloud logging .
- Conversation history made up of user and agent utterances, flow and playbook transition context, tool calls and outputs in the same session from all previous turns sequentially handled by the current playbook.
- Conversation history made up of user and agent utterances, flow and playbook transition context, tool calls and outputs in the same session from all previous turns sequentially handled by the current playbook.

