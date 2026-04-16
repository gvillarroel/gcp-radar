---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:17:30.444Z"
product_name: "Dialogflow"
product_slug: "dialogflow"
feature_name: "Agent editing lock"
feature_slug: "agent-editing-lock"
latest_feature_date: "2022-04-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings"
  - "https://docs.cloud.google.com/dialogflow/es/docs/agents-settings"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/console"
keywords:
  - "agent"
  - "editing"
  - "lock"
  - "dialogflow"
  - "cx"
  - "provides"
  - "setting"
---

# Agent editing lock

Product: Dialogflow
Coverage: MEDIUM

## Step 02 Summary

Dialogflow CX provides a setting to lock agent editing.

## Extended Definition

Dialogflow CX provides a setting to lock agent editing.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings)
- [https://docs.cloud.google.com/dialogflow/es/docs/agents-settings](https://docs.cloud.google.com/dialogflow/es/docs/agents-settings)
- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/console](https://docs.cloud.google.com/dialogflow/cx/docs/concept/console)

## Supporting Pages

### Agent settings \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings)
- Source ID: `site-docs-root`
- Final score: 164
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation AI and ML Dialogflow Dialogflow CX Send feedback Agent settings Stay organized with collections Save and categorize content based on your preferences.
- You can apply unique ML settings for each flow of an agent, and the model created by Dialogflow CX is unique for each flow.
- Dialogflow CX console agent settings To access agent settings: Console Open the console.
- Go to the Agent API reference Select a protocol and version for the Agent reference: Protocol V3 V3beta1 REST Agent resource Agent resource RPC Agent interface Agent interface C++ AgentsClient Not available C# AgentsClient Not available Go AgentsClient Not available Java AgentsClient AgentsClient Node.js AgentsClient AgentsClient PHP Not available Not available Python AgentsClient AgentsClient Ruby Not available Not available Close General settings The following general settings are available for agents: Display name A human-readable name for your agent.

### Agent settings \_|\_ Dialogflow ES \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/es/docs/agents-settings](https://docs.cloud.google.com/dialogflow/es/docs/agents-settings)
- Source ID: `site-iam-reference`
- Final score: 124
- Re-rank relevance: N/A

Evidence snippets:
- To access these settings: Go to the Dialogflow ES console Select your agent near the top of the left sidebar menu Click the settings settings button next to the agent name Note: If you're working on a small screen, and the sidebar menu is hidden, click the menu menu button in the upper left corner.
- To read or change this setting with the API, you must have one of the following roles : IAM Dialogflow API Admin, IAM Editor, or IAM Owner; or a custom role containing the dialogflow.agents.create permission.
- Home Documentation AI and ML Dialogflow Dialogflow ES Send feedback Agent settings Stay organized with collections Save and categorize content based on your preferences.
- The following are included in the export of an agent: Intents Entities Most agent settings (see list below for excluded settings) The following are not included in the export of an agent and are not overwritten when importing or restoring: Agent name Inline editor files package.json and index.json Integration settings Edition Knowledge bases and knowledge documents Speech settings Interaction logs Maximum agent size (unzipped content) for agent import/restore should not exceed 50 MB.

### Dialogflow CX Console overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/console](https://docs.cloud.google.com/dialogflow/cx/docs/concept/console)
- Source ID: `site-docs-root`
- Final score: 111
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The Dialogflow CX console is used to manage Dialogflow CX agents, while the Google Cloud Console is used to manage Google Cloud-specific Dialogflow CX settings (for example, billing) and other Google Cloud resources.
- The agent selector interface is used to: Select existing agents Create new agents Create prebuilt agents Export and restore agents Delete agents Configure location settings Filter agents by location Agent builder Once a project and agent has been selected, the agent builder loads.
- Editing and simulator panels (8) When editing agent content or testing the agent with the simulator , content-specific panels open on the right side of the console.
- In most cases you should use the Dialogflow CX console to build agents, but you can also use the Dialogflow API to build agents for advanced scenarios.

