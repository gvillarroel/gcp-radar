---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:17:30.285Z"
product_name: "Dialogflow"
product_slug: "dialogflow"
feature_name: "Block none safety setting"
feature_slug: "block-none-safety-setting"
latest_feature_date: "2025-10-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings"
  - "https://docs.cloud.google.com/dialogflow/es/docs/agents-settings"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/settings"
keywords:
  - "block"
  - "none"
  - "safety"
  - "setting"
  - "option"
  - "agent"
  - "settings"
  - "no"
---

# Block none safety setting

Product: Dialogflow
Coverage: MEDIUM

## Step 02 Summary

The Block none safety option in agent settings is no longer restricted access.

## Extended Definition

The Block none safety option in agent settings is no longer restricted access.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings)
- [https://docs.cloud.google.com/dialogflow/es/docs/agents-settings](https://docs.cloud.google.com/dialogflow/es/docs/agents-settings)
- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/settings](https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/settings)

## Supporting Pages

### Agent settings \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings)
- Source ID: `site-docs-root`
- Final score: 266
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Go to the Agent API reference Select a protocol and version for the Agent reference: Protocol V3 V3beta1 REST Agent resource Agent resource RPC Agent interface Agent interface C++ AgentsClient Not available C# AgentsClient Not available Go AgentsClient Not available Java AgentsClient AgentsClient Node.js AgentsClient AgentsClient PHP Not available Not available Python AgentsClient AgentsClient Ruby Not available Not available Close General settings The following general settings are available for agents: Display name A human-readable name for your agent.
- Go to the Agent API reference Select a protocol and version for the Agent reference: Protocol V3 V3beta1 REST Agent resource Agent resource RPC Agent interface Agent interface C++ AgentsClient Not available C# AgentsClient Not available Go AgentsClient Not available Java AgentsClient AgentsClient Node.js AgentsClient AgentsClient PHP Not available Not available Python AgentsClient AgentsClient Ruby Not available Not available Close The following subsections describe the different categories of agent settings.
- Override request-level synthesized speech configuration link When enabled, the synthesized speech configuration specified in the agent settings overrides the one specified in the API, partner integration, or the conversation profile.
- When enabled, you can provide the following options: Prompt security settings : You can select either Default for default security settings or Customize to clarify what user queries should be considered safe or unsafe.

### Agent settings \_|\_ Dialogflow ES \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/es/docs/agents-settings](https://docs.cloud.google.com/dialogflow/es/docs/agents-settings)
- Source ID: `site-iam-reference`
- Final score: 181
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following are included in the export of an agent: Intents Entities Most agent settings (see list below for excluded settings) The following are not included in the export of an agent and are not overwritten when importing or restoring: Agent name Inline editor files package.json and index.json Integration settings Edition Knowledge bases and knowledge documents Speech settings Interaction logs Maximum agent size (unzipped content) for agent import/restore should not exceed 50 MB.
- To access these settings: Go to the Dialogflow ES console Select your agent near the top of the left sidebar menu Click the settings settings button next to the agent name Note: If you're working on a small screen, and the sidebar menu is hidden, click the menu menu button in the upper left corner.
- The following settings are available: ML Classification Threshold : To filter out false positive results and still get variety in matched natural language inputs for your agent, you can tune the machine learning classification threshold.
- Home Documentation AI and ML Dialogflow Dialogflow ES Send feedback Agent settings Stay organized with collections Save and categorize content based on your preferences.

### Data store tool settings \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/settings](https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/settings)
- Source ID: `site-docs-root`
- Final score: 163
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Tool settings (Conversational Agents console only) Selecting an option from the Tool settings drop-down menu automatically affects which other tool configurations are available.
- The Default and Optimized for voice options are default settings that will automatically configure all other parameters in the tool configuration menu.
- The following options are available: Tool setting name Description Default Optimized for all agent types.
- Conversation History: $conversation Human: $original -query Search Query: Payload settings Payload settings provide a way to add the data store snippets as rich content in the response payload, which is rendered in the messenger .

