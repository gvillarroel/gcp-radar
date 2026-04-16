---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:17:30.368Z"
product_name: "Dialogflow"
product_slug: "dialogflow"
feature_name: "Vertex AI Conversation generative agents"
feature_slug: "vertex-ai-conversation-generative-agents"
latest_feature_date: "2024-01-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/console-conversational-agents"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent"
keywords:
  - "vertex"
  - "ai"
  - "conversation"
  - "generative"
  - "agents"
  - "provides"
  - "console"
---

# Vertex AI Conversation generative agents

Product: Dialogflow
Coverage: MEDIUM

## Step 02 Summary

Vertex AI Conversation provides generative agents in the Vertex AI Conversation console.

## Extended Definition

Vertex AI Conversation provides generative agents in the Vertex AI Conversation console.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/console-conversational-agents](https://docs.cloud.google.com/dialogflow/cx/docs/concept/console-conversational-agents)
- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings)
- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent)

## Supporting Pages

### "Conversational Agents console overview \_|\_ Dialogflow CX \_|\_ Google\

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/console-conversational-agents](https://docs.cloud.google.com/dialogflow/cx/docs/concept/console-conversational-agents)
- Source ID: `site-docs-root`
- Final score: 230
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Console compatibility Agents previously built with the Dialogflow CX console or the Vertex AI Agent Builder console can be seamlessly accessed by the Conversational Agents console.
- Using the Conversational Agents console, you can create interactive agents that use generative playbooks , generative data stores , and deterministic flows .
- The Conversational Agents console is a new console that includes features from both the Dialogflow CX console and the Vertex AI Agent Builder console.
- Users of the Dialogflow CX console that want to incorporate generative features into agents should start using the Conversational Agents console.

### Agents \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent)
- Source ID: `site-docs-root`
- Final score: 152
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Example: if the source agent refers to a data store named projects/123/locations/eu-west2/collections/default collection/dataStores/myDataStore1 and the App of the target agent is named projects/321/locations/us-east1/collections/default collections/engines/app123 , then the resulting data store reference in the target agent will become: projects/321/locations/us-east1/collections/default collection/dataStores/myDataStore1 Note: in the API and in the contents of the exported data, a Vertex AI Agents App is called a GenAppBuilder Engine.
- Vertex AI Agents Apps : The association to a Vertex AI Agents App remains unchanged in the target agent. (In other words, the value of engine in GenAppBuilderSettings ) This means that data store agents can only be restored into other existing data store agents, because the resulting agent also needs to have an association to a Vertex AI Agents App.
- Vertex AI Agents Data Stores : All references to data stores will be overwritten in the target agent according to the following rules: If the target agent isn't associated with an App, then it's not possible to restore an agent with data store references into it.
- API If you have not already configured location settings for your project, you must configure these settings with the console before creating agents with the API.

### Agent settings \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings)
- Source ID: `site-docs-root`
- Final score: 148
- Re-rank relevance: N/A

Evidence snippets:
- Conversational Agents console agent settings To access agent settings: Console Open the Conversational Agents console .
- GenAI The following generative AI settings are available for agent apps: Generative model selection Select the generative model that agents should use by default.
- Conversation start link This setting determines whether your agent starts the conversation with a generative playbook or a deterministic flow.
- Vertex AI Agent Builder console settings This section describes the settings available for agent apps.

