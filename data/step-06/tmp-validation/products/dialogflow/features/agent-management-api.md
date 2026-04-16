---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T02:32:45.797Z"
product_name: "Dialogflow"
product_slug: "dialogflow"
feature_name: "Agent Management API"
feature_slug: "agent-management-api"
latest_feature_date: "2019-06-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.agents.AgentsAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.agents.AgentsClient"
  - "https://docs.cloud.google.com/dialogflow/es/docs/agents-mega"
keywords:
  - "updating"
  - "management"
  - "creating"
  - "supports"
  - "agents"
  - "agent"
---

# Agent Management API

Product: Dialogflow
Coverage: MEDIUM

## Step 02 Summary

The API supports creating and updating Dialogflow agents.

## Extended Definition

The API supports creating and updating Dialogflow agents.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.agents.AgentsAsyncClient](https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.agents.AgentsAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.agents.AgentsClient](https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.agents.AgentsClient)
- [https://docs.cloud.google.com/dialogflow/es/docs/agents-mega](https://docs.cloud.google.com/dialogflow/es/docs/agents-mega)

## Supporting Pages

### "Class AgentsAsyncClient (2.47.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.agents.AgentsAsyncClient](https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.agents.AgentsAsyncClient)
- Source ID: `site-python-reference`
- Final score: 156
- Re-rank relevance: N/A

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dialogflow v2 async def sample restore agent(): Create a client client = dialogflow v2.AgentsAsyncClient() Initialize request argument(s) request = dialogflow v2.RestoreAgentRequest( agent uri="agent uri value", parent="parent value", ) Make the request operation = client. restore agent (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.dialogflow v2.types.RestoreAgentRequest , dict]] The request object.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dialogflow v2 async def sample export agent(): Create a client client = dialogflow v2.AgentsAsyncClient() Initialize request argument(s) request = dialogflow v2.ExportAgentRequest( parent="parent value", agent uri="agent uri value", ) Make the request operation = client. export agent (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.dialogflow v2.types.ExportAgentRequest , dict]] The request object.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dialogflow v2 async def sample get agent(): Create a client client = dialogflow v2.AgentsAsyncClient() Initialize request argument(s) request = dialogflow v2.GetAgentRequest( parent="parent value", ) Make the request response = await client. get agent (request=request) Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.dialogflow v2.types.GetAgentRequest , dict]] The request object.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dialogflow v2 async def sample delete agent(): Create a client client = dialogflow v2.AgentsAsyncClient() Initialize request argument(s) request = dialogflow v2.DeleteAgentRequest( parent="parent value", ) Make the request await client. delete agent (request=request) Parameters Name Description request Optional[Union[ google.cloud.dialogflow v2.types.DeleteAgentRequest , dict]] The request object.

### "Class AgentsClient (2.47.0) \_|\_ Python client libraries \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.agents.AgentsClient](https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.agents.AgentsClient)
- Source ID: `site-python-reference`
- Final score: 152
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dialogflow v2 def sample restore agent(): Create a client client = dialogflow v2.AgentsClient() Initialize request argument(s) request = dialogflow v2.RestoreAgentRequest( agent uri="agent uri value", parent="parent value", ) Make the request operation = client. restore agent (request=request) print("Waiting for operation to complete...") response = operation.result() Handle the response print(response) Parameters Name Description request Union[ google.cloud.dialogflow v2.types.RestoreAgentRequest , dict] The request object.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dialogflow v2 def sample export agent(): Create a client client = dialogflow v2.AgentsClient() Initialize request argument(s) request = dialogflow v2.ExportAgentRequest( parent="parent value", agent uri="agent uri value", ) Make the request operation = client. export agent (request=request) print("Waiting for operation to complete...") response = operation.result() Handle the response print(response) Parameters Name Description request Union[ google.cloud.dialogflow v2.types.ExportAgentRequest , dict] The request object.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dialogflow v2 def sample get agent(): Create a client client = dialogflow v2.AgentsClient() Initialize request argument(s) request = dialogflow v2.GetAgentRequest( parent="parent value", ) Make the request response = client. get agent (request=request) Handle the response print(response) Parameters Name Description request Union[ google.cloud.dialogflow v2.types.GetAgentRequest , dict] The request object.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dialogflow v2 def sample delete agent(): Create a client client = dialogflow v2.AgentsClient() Initialize request argument(s) request = dialogflow v2.DeleteAgentRequest( parent="parent value", ) Make the request client. delete agent (request=request) Parameters Name Description request Union[ google.cloud.dialogflow v2.types.DeleteAgentRequest , dict] The request object.

### Mega agents \_|\_ Dialogflow \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/es/docs/agents-mega](https://docs.cloud.google.com/dialogflow/es/docs/agents-mega)
- Source ID: `site-iam-reference`
- Final score: 130
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Creating or updating a mega agent You can use the Dialogflow Console to create a mega agent and link it to sub-agents.
- Creating sub-agents You create sub-agents like any other agent .
- For example, consider the following sub-agents: Sub-agent Intent Training Phrases Orders Books "I want to buy a book" "Add a book to my cart" Hats "I want to purchase a hat" "I want a hat" Account Balance "What is my balance?" "How much is left in my account?" Address "I want to change my address" "I have a new address" If an end-user says "I want to buy a hat please", a detect intent request sent to the mega agent will result in a match for the Hats intent in the Orders agent.
- For example, the REST JSON for this request would look like: { "queryInput": { "text": { "text": "reserve a meeting room for six people", "languageCode": "en-US" } }, "queryParams": { "subAgents": [ {"project": "projects/sub-agent-1-project-id"}, {"project": "projects/sub-agent-2-project-id"} ] } } Invoking events To invoke an event from a webhook service , you can specify the sub-agent for the intent you wish to trigger.

