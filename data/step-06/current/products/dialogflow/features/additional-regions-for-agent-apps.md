---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:17:30.346Z"
product_name: "Dialogflow"
product_slug: "dialogflow"
feature_name: "Additional regions for agent apps"
feature_slug: "additional-regions-for-agent-apps"
latest_feature_date: "2024-06-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.agents.AgentsAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.agents.AgentsClient"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings"
keywords:
  - "additional"
  - "regions"
  - "agent"
  - "apps"
  - "vertex"
  - "ai"
  - "agents"
  - "europe"
---

# Additional regions for agent apps

Product: Dialogflow
Coverage: MEDIUM

## Step 02 Summary

Vertex AI Agents agent apps are supported in europe-west1, europe-west2, europe-west3, northamerica-northeast1, and us-west1.

## Extended Definition

Vertex AI Agents agent apps are supported in europe-west1, europe-west2, europe-west3, northamerica-northeast1, and us-west1.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.agents.AgentsAsyncClient](https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.agents.AgentsAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.agents.AgentsClient](https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.agents.AgentsClient)
- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings)

## Supporting Pages

### "Class AgentsAsyncClient (2.47.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.agents.AgentsAsyncClient](https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.agents.AgentsAsyncClient)
- Source ID: `site-python-reference`
- Final score: 168
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dialogflow v2 async def sample restore agent(): Create a client client = dialogflow v2.AgentsAsyncClient() Initialize request argument(s) request = dialogflow v2.RestoreAgentRequest( agent uri="agent uri value", parent="parent value", ) Make the request operation = client. restore agent (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.dialogflow v2.types.RestoreAgentRequest , dict]] The request object.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dialogflow v2 async def sample export agent(): Create a client client = dialogflow v2.AgentsAsyncClient() Initialize request argument(s) request = dialogflow v2.ExportAgentRequest( parent="parent value", agent uri="agent uri value", ) Make the request operation = client. export agent (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.dialogflow v2.types.ExportAgentRequest , dict]] The request object.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dialogflow v2 async def sample get agent(): Create a client client = dialogflow v2.AgentsAsyncClient() Initialize request argument(s) request = dialogflow v2.GetAgentRequest( parent="parent value", ) Make the request response = await client. get agent (request=request) Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.dialogflow v2.types.GetAgentRequest , dict]] The request object.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dialogflow v2 async def sample delete agent(): Create a client client = dialogflow v2.AgentsAsyncClient() Initialize request argument(s) request = dialogflow v2.DeleteAgentRequest( parent="parent value", ) Make the request await client. delete agent (request=request) Parameters Name Description request Optional[Union[ google.cloud.dialogflow v2.types.DeleteAgentRequest , dict]] The request object.

### "Class AgentsClient (2.47.0) \_|\_ Python client libraries \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.agents.AgentsClient](https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.agents.AgentsClient)
- Source ID: `site-python-reference`
- Final score: 168
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dialogflow v2 def sample restore agent(): Create a client client = dialogflow v2.AgentsClient() Initialize request argument(s) request = dialogflow v2.RestoreAgentRequest( agent uri="agent uri value", parent="parent value", ) Make the request operation = client. restore agent (request=request) print("Waiting for operation to complete...") response = operation.result() Handle the response print(response) Parameters Name Description request Union[ google.cloud.dialogflow v2.types.RestoreAgentRequest , dict] The request object.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dialogflow v2 def sample export agent(): Create a client client = dialogflow v2.AgentsClient() Initialize request argument(s) request = dialogflow v2.ExportAgentRequest( parent="parent value", agent uri="agent uri value", ) Make the request operation = client. export agent (request=request) print("Waiting for operation to complete...") response = operation.result() Handle the response print(response) Parameters Name Description request Union[ google.cloud.dialogflow v2.types.ExportAgentRequest , dict] The request object.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dialogflow v2 def sample get agent(): Create a client client = dialogflow v2.AgentsClient() Initialize request argument(s) request = dialogflow v2.GetAgentRequest( parent="parent value", ) Make the request response = client. get agent (request=request) Handle the response print(response) Parameters Name Description request Union[ google.cloud.dialogflow v2.types.GetAgentRequest , dict] The request object.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dialogflow v2 def sample delete agent(): Create a client client = dialogflow v2.AgentsClient() Initialize request argument(s) request = dialogflow v2.DeleteAgentRequest( parent="parent value", ) Make the request client. delete agent (request=request) Parameters Name Description request Union[ google.cloud.dialogflow v2.types.DeleteAgentRequest , dict] The request object.

### Agent settings \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings)
- Source ID: `site-docs-root`
- Final score: 157
- Re-rank relevance: N/A

Evidence snippets:
- GenAI The following generative AI settings are available for agent apps: Generative model selection Select the generative model that agents should use by default.
- Vertex AI Agent Builder console settings This section describes the settings available for agent apps.
- Go to the Agent API reference Select a protocol and version for the Agent reference: Protocol V3 V3beta1 REST Agent resource Agent resource RPC Agent interface Agent interface C++ AgentsClient Not available C# AgentsClient Not available Go AgentsClient Not available Java AgentsClient AgentsClient Node.js AgentsClient AgentsClient PHP Not available Not available Python AgentsClient AgentsClient Ruby Not available Not available Close General settings The following general settings are available for agents: Display name A human-readable name for your agent.
- Go to the Agent API reference Select a protocol and version for the Agent reference: Protocol V3 V3beta1 REST Agent resource Agent resource RPC Agent interface Agent interface C++ AgentsClient Not available C# AgentsClient Not available Go AgentsClient Not available Java AgentsClient AgentsClient Node.js AgentsClient AgentsClient PHP Not available Not available Python AgentsClient AgentsClient Ruby Not available Not available Close The following subsections describe the different categories of agent settings.

