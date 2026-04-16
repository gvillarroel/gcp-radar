---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:17:30.283Z"
product_name: "Dialogflow"
product_slug: "dialogflow"
feature_name: "Cloud Logging log splitting"
feature_slug: "cloud-logging-log-splitting"
latest_feature_date: "2025-12-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/console-conversational-agents"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings"
  - "https://docs.cloud.google.com/dialogflow/es/docs/agents-mega"
keywords:
  - "logging"
  - "log"
  - "splitting"
  - "conversational"
  - "agents"
  - "now"
  - "splits"
  - "large"
---

# Cloud Logging log splitting

Product: Dialogflow
Coverage: MEDIUM

## Step 02 Summary

Conversational Agents now splits large Cloud Logging entries into smaller log entries.

## Extended Definition

Conversational Agents now splits large Cloud Logging entries into smaller log entries.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/console-conversational-agents](https://docs.cloud.google.com/dialogflow/cx/docs/concept/console-conversational-agents)
- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings)
- [https://docs.cloud.google.com/dialogflow/es/docs/agents-mega](https://docs.cloud.google.com/dialogflow/es/docs/agents-mega)

## Supporting Pages

### "Conversational Agents console overview \_|\_ Dialogflow CX \_|\_ Google\

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/console-conversational-agents](https://docs.cloud.google.com/dialogflow/cx/docs/concept/console-conversational-agents)
- Source ID: `site-docs-root`
- Final score: 111
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation AI and ML Dialogflow Dialogflow CX Send feedback Conversational Agents console overview Stay organized with collections Save and categorize content based on your preferences.
- Console compatibility Agents previously built with the Dialogflow CX console or the Vertex AI Agent Builder console can be seamlessly accessed by the Conversational Agents console.
- Using the Conversational Agents console, you can create interactive agents that use generative playbooks , generative data stores , and deterministic flows .
- Pricing Pricing for agents created with the Conversational Agents console is the same as it has been for agents created with the Dialogflow CX console.

### Agent settings \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings)
- Source ID: `site-docs-root`
- Final score: 100
- Re-rank relevance: N/A

Evidence snippets:
- Conversational Agents console agent settings To access agent settings: Console Open the Conversational Agents console .
- This NLU type works better than standard, especially for large agents and flows.
- This NLU type works better than standard, especially for large agents and flows.
- Go to the Agent API reference Select a protocol and version for the Agent reference: Protocol V3 V3beta1 REST Agent resource Agent resource RPC Agent interface Agent interface C++ AgentsClient Not available C# AgentsClient Not available Go AgentsClient Not available Java AgentsClient AgentsClient Node.js AgentsClient AgentsClient PHP Not available Not available Python AgentsClient AgentsClient Ruby Not available Not available Close General settings The following general settings are available for agents: Display name A human-readable name for your agent.

### Mega agents \_|\_ Dialogflow \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/es/docs/agents-mega](https://docs.cloud.google.com/dialogflow/es/docs/agents-mega)
- Source ID: `site-iam-reference`
- Final score: 98
- Re-rank relevance: N/A

Evidence snippets:
- More intents : If you have agents with a large number of intents, you may approach the intent count limit .
- During a conversation, intents from different sub-agents may be matched for each conversational turn.
- For example, consider the following sub-agents: Sub-agent Intent Training Phrases Orders Books "I want to buy a book" "Add a book to my cart" Hats "I want to purchase a hat" "I want a hat" Account Balance "What is my balance?" "How much is left in my account?" Address "I want to change my address" "I have a new address" If an end-user says "I want to buy a hat please", a detect intent request sent to the mega agent will result in a match for the Hats intent in the Orders agent.
- For example, the REST JSON for this request would look like: { "queryInput": { "text": { "text": "reserve a meeting room for six people", "languageCode": "en-US" } }, "queryParams": { "subAgents": [ {"project": "projects/sub-agent-1-project-id"}, {"project": "projects/sub-agent-2-project-id"} ] } } Invoking events To invoke an event from a webhook service , you can specify the sub-agent for the intent you wish to trigger.

