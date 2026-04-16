---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T02:32:45.753Z"
product_name: "Dialogflow"
product_slug: "dialogflow"
feature_name: "Simulator flow version selection"
feature_slug: "simulator-flow-version-selection"
latest_feature_date: "2021-12-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-multilingual"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2"
keywords:
  - "simulator"
  - "selection"
  - "version"
  - "lets"
  - "flow"
---

# Simulator flow version selection

Product: Dialogflow
Coverage: MEDIUM

## Step 02 Summary

Dialogflow CX simulator lets you specify flow versions during simulation.

## Extended Definition

Dialogflow CX simulator lets you specify flow versions during simulation.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings)
- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-multilingual](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-multilingual)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2](https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2)

## Supporting Pages

### Agent settings \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings)
- Source ID: `site-docs-root`
- Final score: 137
- Re-rank relevance: N/A

Evidence snippets:
- Go to the Agent API reference Select a protocol and version for the Agent reference: Protocol V3 V3beta1 REST Agent resource Agent resource RPC Agent interface Agent interface C++ AgentsClient Not available C# AgentsClient Not available Go AgentsClient Not available Java AgentsClient AgentsClient Node.js AgentsClient AgentsClient PHP Not available Not available Python AgentsClient AgentsClient Ruby Not available Not available Close General settings The following general settings are available for agents: Display name A human-readable name for your agent.
- Go to the Agent API reference Select a protocol and version for the Agent reference: Protocol V3 V3beta1 REST Agent resource Agent resource RPC Agent interface Agent interface C++ AgentsClient Not available C# AgentsClient Not available Go AgentsClient Not available Java AgentsClient AgentsClient Node.js AgentsClient AgentsClient PHP Not available Not available Python AgentsClient AgentsClient Ruby Not available Not available Close The following subsections describe the different categories of agent settings.
- Enable consent-based end-user input redaction If this setting is enabled, it lets you use a special session parameter to control whether end-user input and parameters are redacted from conversation history and Cloud logging , by default the session parameter is true .
- Enable consent-based end-user input redaction If this setting is enabled, it lets you use a special session parameter to control whether end-user input and parameters are redacted from conversation history and Cloud logging .

### Multilingual agents \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-multilingual](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-multilingual)
- Source ID: `site-docs-root`
- Final score: 118
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Scope of language selection in the console and API When selecting a language in the console or API, this selection only affects flows for the agent.
- Go to the EntityType API reference Select a protocol and version for the EntityType reference: Protocol V3 V3beta1 REST EntityType resource EntityType resource RPC EntityType interface EntityType interface C++ EntityTypesClient Not available C# EntityTypesClient Not available Go EntityTypesClient Not available Java EntityTypesClient EntityTypesClient Node.js EntityTypesClient EntityTypesClient PHP Not available Not available Python EntityTypesClient EntityTypesClient Ruby Not available Not available Close Go to the Intent API reference Select a protocol and version for the Intent reference: Protocol V3 V3beta1 REST Intent resource Intent resource RPC Intent interface Intent interface C++ IntentsClient Not available C# IntentsClient Not available Go IntentsClient Not available Java IntentsClient IntentsClient Node.js IntentsClient IntentsClient PHP Not available Not available Python IntentsClient IntentsClient Ruby Not available Not available Close Go to the Page API reference Select a protocol and version for the Page reference: Protocol V3 V3beta1 REST Page resource Page resource RPC Page interface Page interface C++ PagesClient Not available C# PagesClient Not available Go PagesClient Not available Java PagesClient PagesClient Node.js PagesClient PagesClient PHP Not available Not available Python PagesClient PagesClient Ruby Not available Not available Close You must make separate API calls for each language to access all language-specific data.
- Go to the Session API reference Select a protocol and version for the Session reference: Protocol V3 V3beta1 REST Session resource Session resource RPC Session interface Session interface C++ SessionsClient Not available C# SessionsClient Not available Go SessionsClient Not available Java SessionsClient SessionsClient Node.js SessionsClient SessionsClient PHP Not available Not available Python SessionsClient SessionsClient Ruby Not available Not available Close Language auto detection Note: This feature is available for chat conversations only.
- Requests that do not supply an agent's language When Dialogflow receives a request that does not supply a language supported by the agent, the following rules apply: When a request does not supply a language, Dialogflow automatically determines the input language and responds in that language if automatic language detection is enabled .

### "Package com.google.cloud.dialogflow.v2 (4.94.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2](https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2)
- Source ID: `site-java-reference`
- Final score: 117
- Re-rank relevance: N/A

Evidence snippets:
- Project Location Version Builder Builder for projects/{project}/locations/{location}/agent/versions/{version}. com. google. cloud. dialogflow. v2.
- Environment You can create multiple versions of your agent and publish them to separate environments. com. google. cloud. dialogflow. v2.
- Builder You can create multiple versions of your agent and publish them to separate environments. com. google. cloud. dialogflow. v2.
- Version You can create multiple versions of your agent and publish them to separate environments. com. google. cloud. dialogflow. v2.

