---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T02:32:45.762Z"
product_name: "Dialogflow"
product_slug: "dialogflow"
feature_name: "Dialogflow CX regional support in us-west1"
feature_slug: "dialogflow-cx-regional-support-in-us-west1"
latest_feature_date: "2021-04-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.agents.AgentsAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.agents.AgentsClient"
  - "https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.contexts.ContextsClient"
keywords:
  - "west1"
  - "deployment"
  - "regional"
  - "region"
  - "supports"
---

# Dialogflow CX regional support in us-west1

Product: Dialogflow
Coverage: MEDIUM

## Step 02 Summary

Dialogflow CX supports deployment in the us-west1 region.

## Extended Definition

Dialogflow CX supports deployment in the us-west1 region.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.agents.AgentsAsyncClient](https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.agents.AgentsAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.agents.AgentsClient](https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.agents.AgentsClient)
- [https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.contexts.ContextsClient](https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.contexts.ContextsClient)

## Supporting Pages

### "Class AgentsAsyncClient (2.47.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.agents.AgentsAsyncClient](https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.agents.AgentsAsyncClient)
- Source ID: `site-python-reference`
- Final score: 53
- Re-rank relevance: N/A

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dialogflow v2 async def sample restore agent(): Create a client client = dialogflow v2.AgentsAsyncClient() Initialize request argument(s) request = dialogflow v2.RestoreAgentRequest( agent uri="agent uri value", parent="parent value", ) Make the request operation = client. restore agent (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.dialogflow v2.types.RestoreAgentRequest , dict]] The request object.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dialogflow v2 async def sample export agent(): Create a client client = dialogflow v2.AgentsAsyncClient() Initialize request argument(s) request = dialogflow v2.ExportAgentRequest( parent="parent value", agent uri="agent uri value", ) Make the request operation = client. export agent (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.dialogflow v2.types.ExportAgentRequest , dict]] The request object.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dialogflow v2 async def sample get agent(): Create a client client = dialogflow v2.AgentsAsyncClient() Initialize request argument(s) request = dialogflow v2.GetAgentRequest( parent="parent value", ) Make the request response = await client. get agent (request=request) Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.dialogflow v2.types.GetAgentRequest , dict]] The request object.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dialogflow v2 async def sample delete agent(): Create a client client = dialogflow v2.AgentsAsyncClient() Initialize request argument(s) request = dialogflow v2.DeleteAgentRequest( parent="parent value", ) Make the request await client. delete agent (request=request) Parameters Name Description request Optional[Union[ google.cloud.dialogflow v2.types.DeleteAgentRequest , dict]] The request object.

### "Class AgentsClient (2.47.0) \_|\_ Python client libraries \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.agents.AgentsClient](https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.agents.AgentsClient)
- Source ID: `site-python-reference`
- Final score: 53
- Re-rank relevance: N/A

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dialogflow v2 def sample restore agent(): Create a client client = dialogflow v2.AgentsClient() Initialize request argument(s) request = dialogflow v2.RestoreAgentRequest( agent uri="agent uri value", parent="parent value", ) Make the request operation = client. restore agent (request=request) print("Waiting for operation to complete...") response = operation.result() Handle the response print(response) Parameters Name Description request Union[ google.cloud.dialogflow v2.types.RestoreAgentRequest , dict] The request object.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dialogflow v2 def sample export agent(): Create a client client = dialogflow v2.AgentsClient() Initialize request argument(s) request = dialogflow v2.ExportAgentRequest( parent="parent value", agent uri="agent uri value", ) Make the request operation = client. export agent (request=request) print("Waiting for operation to complete...") response = operation.result() Handle the response print(response) Parameters Name Description request Union[ google.cloud.dialogflow v2.types.ExportAgentRequest , dict] The request object.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dialogflow v2 def sample get agent(): Create a client client = dialogflow v2.AgentsClient() Initialize request argument(s) request = dialogflow v2.GetAgentRequest( parent="parent value", ) Make the request response = client. get agent (request=request) Handle the response print(response) Parameters Name Description request Union[ google.cloud.dialogflow v2.types.GetAgentRequest , dict] The request object.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dialogflow v2 def sample delete agent(): Create a client client = dialogflow v2.AgentsClient() Initialize request argument(s) request = dialogflow v2.DeleteAgentRequest( parent="parent value", ) Make the request client. delete agent (request=request) Parameters Name Description request Union[ google.cloud.dialogflow v2.types.DeleteAgentRequest , dict] The request object.

### "Class ContextsClient (2.47.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.contexts.ContextsClient](https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.contexts.ContextsClient)
- Source ID: `site-python-reference`
- Final score: 53
- Re-rank relevance: N/A

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dialogflow v2 def sample delete all contexts(): Create a client client = dialogflow v2.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dialogflow v2 def sample create context(): Create a client client = dialogflow v2.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dialogflow v2 def sample delete context(): Create a client client = dialogflow v2.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dialogflow v2 def sample update context(): Create a client client = dialogflow v2.

