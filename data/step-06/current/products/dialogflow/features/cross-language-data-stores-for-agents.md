---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:17:30.357Z"
product_name: "Dialogflow"
product_slug: "dialogflow"
feature_name: "Cross-language data stores for agents"
feature_slug: "cross-language-data-stores-for-agents"
latest_feature_date: "2024-04-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/console-conversational-agents"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent"
  - "https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.agents.AgentsAsyncClient"
keywords:
  - "cross"
  - "language"
  - "stores"
  - "agents"
  - "vertex"
  - "ai"
  - "conversation"
  - "can"
---

# Cross-language data stores for agents

Product: Dialogflow
Coverage: MEDIUM

## Step 02 Summary

Vertex AI Conversation can connect a data store created in one language to an agent that uses different languages.

## Extended Definition

Vertex AI Conversation can connect a data store created in one language to an agent that uses different languages.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/console-conversational-agents](https://docs.cloud.google.com/dialogflow/cx/docs/concept/console-conversational-agents)
- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent)
- [https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.agents.AgentsAsyncClient](https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.agents.AgentsAsyncClient)

## Supporting Pages

### "Conversational Agents console overview \_|\_ Dialogflow CX \_|\_ Google\

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/console-conversational-agents](https://docs.cloud.google.com/dialogflow/cx/docs/concept/console-conversational-agents)
- Source ID: `site-docs-root`
- Final score: 191
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Console compatibility Agents previously built with the Dialogflow CX console or the Vertex AI Agent Builder console can be seamlessly accessed by the Conversational Agents console.
- Using the Conversational Agents console, you can create interactive agents that use generative playbooks , generative data stores , and deterministic flows .
- The Conversational Agents console is a new console that includes features from both the Dialogflow CX console and the Vertex AI Agent Builder console.
- All users of the Vertex AI Agent Builder console should start using the Conversational Agents console.

### Agents \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent)
- Source ID: `site-docs-root`
- Final score: 157
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Example: if the source agent refers to a data store named projects/123/locations/eu-west2/collections/default collection/dataStores/myDataStore1 and the App of the target agent is named projects/321/locations/us-east1/collections/default collections/engines/app123 , then the resulting data store reference in the target agent will become: projects/321/locations/us-east1/collections/default collection/dataStores/myDataStore1 Note: in the API and in the contents of the exported data, a Vertex AI Agents App is called a GenAppBuilder Engine.
- Vertex AI Agents Data Stores : All references to data stores will be overwritten in the target agent according to the following rules: If the target agent isn't associated with an App, then it's not possible to restore an agent with data store references into it.
- Vertex AI Agents Apps : The association to a Vertex AI Agents App remains unchanged in the target agent. (In other words, the value of engine in GenAppBuilderSettings ) This means that data store agents can only be restored into other existing data store agents, because the resulting agent also needs to have an association to a Vertex AI Agents App.
- Go to the Agent API reference Select a protocol and version for the Agent reference: Protocol V3 V3beta1 REST Agent resource Agent resource RPC Agent interface Agent interface C++ AgentsClient Not available C# AgentsClient Not available Go AgentsClient Not available Java AgentsClient AgentsClient Node.js AgentsClient AgentsClient PHP Not available Not available Python AgentsClient AgentsClient Ruby Not available Not available Close If you delete your project , all Dialogflow CX agents and data associated with the project are deleted immediately.

### "Class AgentsAsyncClient (2.47.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.agents.AgentsAsyncClient](https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.agents.AgentsAsyncClient)
- Source ID: `site-python-reference`
- Final score: 146
- Re-rank relevance: N/A

Evidence snippets:
- Since there is at most one conversational agent per project, this method is useful primarily for listing all agents across projects the caller has access to.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dialogflow v2 async def sample set agent(): Create a client client = dialogflow v2.AgentsAsyncClient() Initialize request argument(s) agent = dialogflow v2.Agent() agent.parent = "parent value" agent.display name = "display name value" agent.default language code = "default language code value" agent.time zone = "time zone value" request = dialogflow v2.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dialogflow v2 async def sample restore agent(): Create a client client = dialogflow v2.AgentsAsyncClient() Initialize request argument(s) request = dialogflow v2.RestoreAgentRequest( agent uri="agent uri value", parent="parent value", ) Make the request operation = client. restore agent (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.dialogflow v2.types.RestoreAgentRequest , dict]] The request object.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dialogflow v2 async def sample export agent(): Create a client client = dialogflow v2.AgentsAsyncClient() Initialize request argument(s) request = dialogflow v2.ExportAgentRequest( parent="parent value", agent uri="agent uri value", ) Make the request operation = client. export agent (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.dialogflow v2.types.ExportAgentRequest , dict]] The request object.

