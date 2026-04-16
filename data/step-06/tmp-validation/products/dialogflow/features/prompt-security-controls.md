---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T02:32:45.630Z"
product_name: "Dialogflow"
product_slug: "dialogflow"
feature_name: "Prompt security controls"
feature_slug: "prompt-security-controls"
latest_feature_date: "2025-09-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings"
  - "https://docs.cloud.google.com/dialogflow/es/docs/agents-settings"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-design"
keywords:
  - "include"
  - "prompt"
  - "security"
  - "controls"
  - "settings"
  - "agent"
---

# Prompt security controls

Product: Dialogflow
Coverage: MEDIUM

## Step 02 Summary

Agent settings now include new prompt security controls.

## Extended Definition

Agent settings now include new prompt security controls.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings)
- [https://docs.cloud.google.com/dialogflow/es/docs/agents-settings](https://docs.cloud.google.com/dialogflow/es/docs/agents-settings)
- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-design](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-design)

## Supporting Pages

### Agent settings \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings)
- Source ID: `site-docs-root`
- Final score: 201
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- When enabled, you can provide the following options: Prompt security settings : You can select either Default for default security settings or Customize to clarify what user queries should be considered safe or unsafe.
- When enabled, the agent will reject user queries that trigger the security filter, including prompt injection attacks.
- Go to the Agent API reference Select a protocol and version for the Agent reference: Protocol V3 V3beta1 REST Agent resource Agent resource RPC Agent interface Agent interface C++ AgentsClient Not available C# AgentsClient Not available Go AgentsClient Not available Java AgentsClient AgentsClient Node.js AgentsClient AgentsClient PHP Not available Not available Python AgentsClient AgentsClient Ruby Not available Not available Close General settings The following general settings are available for agents: Display name A human-readable name for your agent.
- Go to the Agent API reference Select a protocol and version for the Agent reference: Protocol V3 V3beta1 REST Agent resource Agent resource RPC Agent interface Agent interface C++ AgentsClient Not available C# AgentsClient Not available Go AgentsClient Not available Java AgentsClient AgentsClient Node.js AgentsClient AgentsClient PHP Not available Not available Python AgentsClient AgentsClient Ruby Not available Not available Close The following subsections describe the different categories of agent settings.

### "General agent design best practices \_|\_ Dialogflow CX \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-design](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-design)
- Source ID: `site-docs-root`
- Final score: 127
- Re-rank relevance: N/A

Evidence snippets:
- For example: The stock you are considering for purchase has just increased in value by 10%. (custom event) Can you rephrase that? ( no-match event ) Initial prompts for forms : This fulfillment is called when the agent performs form filling.
- Reprompt handlers for forms : This fulfillment is called when the agent is performing form filling, and it does not understand the end-user selection for the current parameter.
- This answer does not satisfy the form parameter prompt, but if your agent has an intent route in scope that can match this answer, your agent can handle the situation well.
- In addition, each flow can have some of its own settings, and it can be owned by a subset of team members, which helps to divide the work when designing large agents.

### Agent settings \_|\_ Dialogflow ES \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/es/docs/agents-settings](https://docs.cloud.google.com/dialogflow/es/docs/agents-settings)
- Source ID: `site-iam-reference`
- Final score: 125
- Re-rank relevance: N/A

Evidence snippets:
- The following are included in the export of an agent: Intents Entities Most agent settings (see list below for excluded settings) The following are not included in the export of an agent and are not overwritten when importing or restoring: Agent name Inline editor files package.json and index.json Integration settings Edition Knowledge bases and knowledge documents Speech settings Interaction logs Maximum agent size (unzipped content) for agent import/restore should not exceed 50 MB.
- To access these settings: Go to the Dialogflow ES console Select your agent near the top of the left sidebar menu Click the settings settings button next to the agent name Note: If you're working on a small screen, and the sidebar menu is hidden, click the menu menu button in the upper left corner.
- The following settings are available: ML Classification Threshold : To filter out false positive results and still get variety in matched natural language inputs for your agent, you can tune the machine learning classification threshold.
- Home Documentation AI and ML Dialogflow Dialogflow ES Send feedback Agent settings Stay organized with collections Save and categorize content based on your preferences.

