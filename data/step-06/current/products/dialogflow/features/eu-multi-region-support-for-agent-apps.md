---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:17:30.354Z"
product_name: "Dialogflow"
product_slug: "dialogflow"
feature_name: "EU multi-region support for agent apps"
feature_slug: "eu-multi-region-support-for-agent-apps"
latest_feature_date: "2024-04-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.agents.AgentsAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.agents.AgentsClient"
  - "https://docs.cloud.google.com/dialogflow/es/docs/agents-multilingual"
keywords:
  - "eu"
  - "multi"
  - "region"
  - "agent"
  - "apps"
  - "vertex"
  - "ai"
  - "agents"
---

# EU multi-region support for agent apps

Product: Dialogflow
Coverage: MEDIUM

## Step 02 Summary

Vertex AI Agents agent apps support the EU multi-region.

## Extended Definition

Vertex AI Agents agent apps support the EU multi-region.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.agents.AgentsAsyncClient](https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.agents.AgentsAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.agents.AgentsClient](https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.agents.AgentsClient)
- [https://docs.cloud.google.com/dialogflow/es/docs/agents-multilingual](https://docs.cloud.google.com/dialogflow/es/docs/agents-multilingual)

## Supporting Pages

### "Class AgentsAsyncClient (2.47.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.agents.AgentsAsyncClient](https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.agents.AgentsAsyncClient)
- Source ID: `site-python-reference`
- Final score: 184
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
- Final score: 184
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dialogflow v2 def sample restore agent(): Create a client client = dialogflow v2.AgentsClient() Initialize request argument(s) request = dialogflow v2.RestoreAgentRequest( agent uri="agent uri value", parent="parent value", ) Make the request operation = client. restore agent (request=request) print("Waiting for operation to complete...") response = operation.result() Handle the response print(response) Parameters Name Description request Union[ google.cloud.dialogflow v2.types.RestoreAgentRequest , dict] The request object.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dialogflow v2 def sample export agent(): Create a client client = dialogflow v2.AgentsClient() Initialize request argument(s) request = dialogflow v2.ExportAgentRequest( parent="parent value", agent uri="agent uri value", ) Make the request operation = client. export agent (request=request) print("Waiting for operation to complete...") response = operation.result() Handle the response print(response) Parameters Name Description request Union[ google.cloud.dialogflow v2.types.ExportAgentRequest , dict] The request object.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dialogflow v2 def sample get agent(): Create a client client = dialogflow v2.AgentsClient() Initialize request argument(s) request = dialogflow v2.GetAgentRequest( parent="parent value", ) Make the request response = client. get agent (request=request) Handle the response print(response) Parameters Name Description request Union[ google.cloud.dialogflow v2.types.GetAgentRequest , dict] The request object.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dialogflow v2 def sample delete agent(): Create a client client = dialogflow v2.AgentsClient() Initialize request argument(s) request = dialogflow v2.DeleteAgentRequest( parent="parent value", ) Make the request client. delete agent (request=request) Parameters Name Description request Union[ google.cloud.dialogflow v2.types.DeleteAgentRequest , dict] The request object.

### Multilingual agents \_|\_ Dialogflow ES \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/es/docs/agents-multilingual](https://docs.cloud.google.com/dialogflow/es/docs/agents-multilingual)
- Source ID: `site-iam-reference`
- Final score: 168
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation AI and ML Dialogflow Dialogflow ES Send feedback Multilingual agents Stay organized with collections Save and categorize content based on your preferences.
- Previous arrow back Versions and environments Next Mega agents arrow forward Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- When building a multilingual agent, you must supply this language-specific data for each language.
- Most agent data is common for all languages of a multilingual agent.

