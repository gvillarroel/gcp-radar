---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:17:30.363Z"
product_name: "Dialogflow"
product_slug: "dialogflow"
feature_name: "Playbook-based generative agent creation"
feature_slug: "playbook-based-generative-agent-creation"
latest_feature_date: "2024-03-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/console-conversational-agents"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/generative"
keywords:
  - "playbook"
  - "based"
  - "generative"
  - "agent"
  - "creation"
  - "vertex"
  - "ai"
  - "conversation"
---

# Playbook-based generative agent creation

Product: Dialogflow
Coverage: MEDIUM

## Step 02 Summary

Vertex AI Conversation supports creating generative agents with playbooks in public preview.

## Extended Definition

Vertex AI Conversation supports creating generative agents with playbooks in public preview.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/console-conversational-agents](https://docs.cloud.google.com/dialogflow/cx/docs/concept/console-conversational-agents)
- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings)
- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/generative](https://docs.cloud.google.com/dialogflow/cx/docs/concept/generative)

## Supporting Pages

### "Conversational Agents console overview \_|\_ Dialogflow CX \_|\_ Google\

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/console-conversational-agents](https://docs.cloud.google.com/dialogflow/cx/docs/concept/console-conversational-agents)
- Source ID: `site-docs-root`
- Final score: 210
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Using the Conversational Agents console, you can create interactive agents that use generative playbooks , generative data stores , and deterministic flows .
- If you want your agent to begin the conversation using a generative playbook, select Playbook .
- Home Documentation AI and ML Dialogflow Dialogflow CX Send feedback Conversational Agents console overview Stay organized with collections Save and categorize content based on your preferences.
- Console compatibility Agents previously built with the Dialogflow CX console or the Vertex AI Agent Builder console can be seamlessly accessed by the Conversational Agents console.

### Agent settings \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings)
- Source ID: `site-docs-root`
- Final score: 182
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Conversation start link This setting determines whether your agent starts the conversation with a generative playbook or a deterministic flow.
- Conversation history made up of user and agent utterances, flow and playbook transition context, tool calls and outputs in the same session from all previous turns sequentially handled by the current playbook.
- Conversation history made up of user and agent utterances, flow and playbook transition context, tool calls and outputs in the same session from all previous turns sequentially handled by the current playbook.
- Enable consent-based end-user input redaction If this setting is enabled, it lets you use a special session parameter to control whether end-user input and parameters are redacted from conversation history and Cloud logging , by default the session parameter is true .

### Generative versus deterministic \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/generative](https://docs.cloud.google.com/dialogflow/cx/docs/concept/generative)
- Source ID: `site-docs-root`
- Final score: 169
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Partly generative flows Flows have some optional generative features that you can use when you don't need deterministic control over agent responses in certain conversation scenarios.
- Fully generative The fully generative features are built on Vertex AI large language models (LLMs) for both understanding end-user intention as well as generating agent responses.
- This can significantly reduce the virtual agent creation and maintenance time, and enable brand new types of conversational experiences for your business.
- The following is an overview of the fully generative features: X Item Playbooks Playbooks provide a new way for creating virtual agents using LLMs.

