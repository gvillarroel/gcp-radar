---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:17:30.344Z"
product_name: "Dialogflow"
product_slug: "dialogflow"
feature_name: "Agent app generative settings"
feature_slug: "agent-app-generative-settings"
latest_feature_date: "2024-07-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/console-conversational-agents"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent"
keywords:
  - "agent"
  - "app"
  - "generative"
  - "settings"
  - "vertex"
  - "ai"
  - "agents"
  - "apps"
---

# Agent app generative settings

Product: Dialogflow
Coverage: MEDIUM

## Step 02 Summary

Vertex AI Agents agent apps provide generative settings for input token limit, output token limit, and temperature.

## Extended Definition

Vertex AI Agents agent apps provide generative settings for input token limit, output token limit, and temperature.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings)
- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/console-conversational-agents](https://docs.cloud.google.com/dialogflow/cx/docs/concept/console-conversational-agents)
- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent)

## Supporting Pages

### Agent settings \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings)
- Source ID: `site-docs-root`
- Final score: 206
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- GenAI The following generative AI settings are available for agent apps: Generative model selection Select the generative model that agents should use by default.
- Vertex AI Agent Builder console settings This section describes the settings available for agent apps.
- Go to the Agent API reference Select a protocol and version for the Agent reference: Protocol V3 V3beta1 REST Agent resource Agent resource RPC Agent interface Agent interface C++ AgentsClient Not available C# AgentsClient Not available Go AgentsClient Not available Java AgentsClient AgentsClient Node.js AgentsClient AgentsClient PHP Not available Not available Python AgentsClient AgentsClient Ruby Not available Not available Close General settings The following general settings are available for agents: Display name A human-readable name for your agent.
- Go to the Agent API reference Select a protocol and version for the Agent reference: Protocol V3 V3beta1 REST Agent resource Agent resource RPC Agent interface Agent interface C++ AgentsClient Not available C# AgentsClient Not available Go AgentsClient Not available Java AgentsClient AgentsClient Node.js AgentsClient AgentsClient PHP Not available Not available Python AgentsClient AgentsClient Ruby Not available Not available Close The following subsections describe the different categories of agent settings.

### "Conversational Agents console overview \_|\_ Dialogflow CX \_|\_ Google\

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/console-conversational-agents](https://docs.cloud.google.com/dialogflow/cx/docs/concept/console-conversational-agents)
- Source ID: `site-docs-root`
- Final score: 197
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Console compatibility Agents previously built with the Dialogflow CX console or the Vertex AI Agent Builder console can be seamlessly accessed by the Conversational Agents console.
- Using the Conversational Agents console, you can create interactive agents that use generative playbooks , generative data stores , and deterministic flows .
- Agents that utilize generative features such as playbooks, data stores, generators, or generative fallback for a request are charged as generative requests.
- The Conversational Agents console is a new console that includes features from both the Dialogflow CX console and the Vertex AI Agent Builder console.

### Agents \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent)
- Source ID: `site-docs-root`
- Final score: 186
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Vertex AI Agents Apps : The association to a Vertex AI Agents App remains unchanged in the target agent. (In other words, the value of engine in GenAppBuilderSettings ) This means that data store agents can only be restored into other existing data store agents, because the resulting agent also needs to have an association to a Vertex AI Agents App.
- Example: if the source agent refers to a data store named projects/123/locations/eu-west2/collections/default collection/dataStores/myDataStore1 and the App of the target agent is named projects/321/locations/us-east1/collections/default collections/engines/app123 , then the resulting data store reference in the target agent will become: projects/321/locations/us-east1/collections/default collection/dataStores/myDataStore1 Note: in the API and in the contents of the exported data, a Vertex AI Agents App is called a GenAppBuilder Engine.
- Go to the Agent API reference Select a protocol and version for the Agent reference: Protocol V3 V3beta1 REST Agent resource Agent resource RPC Agent interface Agent interface C++ AgentsClient Not available C# AgentsClient Not available Go AgentsClient Not available Java AgentsClient AgentsClient Node.js AgentsClient AgentsClient PHP Not available Not available Python AgentsClient AgentsClient Ruby Not available Not available Close Agent data Dialogflow CX agents serve as top-level containers for settings and data for virtual agents.
- Vertex AI Agents Data Stores : All references to data stores will be overwritten in the target agent according to the following rules: If the target agent isn't associated with an App, then it's not possible to restore an agent with data store references into it.

