---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:17:30.447Z"
product_name: "Dialogflow"
product_slug: "dialogflow"
feature_name: "Auto sync for agent collaboration"
feature_slug: "auto-sync-for-agent-collaboration"
latest_feature_date: "2021-12-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.agents.AgentsAsyncClient"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-collaboration"
  - "https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.agents.pagers.SearchAgentsAsyncPager"
keywords:
  - "auto"
  - "sync"
  - "agent"
  - "collaboration"
  - "dialogflow"
  - "cx"
  - "provides"
  - "collaborative"
---

# Auto sync for agent collaboration

Product: Dialogflow
Coverage: MEDIUM

## Step 02 Summary

Dialogflow CX provides auto sync to support collaborative agent editing; Dialogflow CX provides auto sync to support collaborative agent editing.

## Extended Definition

Dialogflow CX provides auto sync to support collaborative agent editing; Dialogflow CX provides auto sync to support collaborative agent editing.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.agents.AgentsAsyncClient](https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.agents.AgentsAsyncClient)
- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-collaboration](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-collaboration)
- [https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.agents.pagers.SearchAgentsAsyncPager](https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.agents.pagers.SearchAgentsAsyncPager)

## Supporting Pages

### "Class AgentsAsyncClient (2.47.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.agents.AgentsAsyncClient](https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.agents.AgentsAsyncClient)
- Source ID: `site-python-reference`
- Final score: 166
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dialogflow v2 async def sample restore agent(): Create a client client = dialogflow v2.AgentsAsyncClient() Initialize request argument(s) request = dialogflow v2.RestoreAgentRequest( agent uri="agent uri value", parent="parent value", ) Make the request operation = client. restore agent (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.dialogflow v2.types.RestoreAgentRequest , dict]] The request object.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dialogflow v2 async def sample export agent(): Create a client client = dialogflow v2.AgentsAsyncClient() Initialize request argument(s) request = dialogflow v2.ExportAgentRequest( parent="parent value", agent uri="agent uri value", ) Make the request operation = client. export agent (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.dialogflow v2.types.ExportAgentRequest , dict]] The request object.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dialogflow v2 async def sample get agent(): Create a client client = dialogflow v2.AgentsAsyncClient() Initialize request argument(s) request = dialogflow v2.GetAgentRequest( parent="parent value", ) Make the request response = await client. get agent (request=request) Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.dialogflow v2.types.GetAgentRequest , dict]] The request object.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dialogflow v2 async def sample delete agent(): Create a client client = dialogflow v2.AgentsAsyncClient() Initialize request argument(s) request = dialogflow v2.DeleteAgentRequest( parent="parent value", ) Make the request await client. delete agent (request=request) Parameters Name Description request Optional[Union[ google.cloud.dialogflow v2.types.DeleteAgentRequest , dict]] The request object.

### "Class SearchAgentsAsyncPager (2.47.0) \_|\_ Python client libraries \_|\_\

- URL: [https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.agents.pagers.SearchAgentsAsyncPager](https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.agents.pagers.SearchAgentsAsyncPager)
- Source ID: `site-python-reference`
- Final score: 145
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Parameters Name Description method Callable The method that was originally called, and which instantiated this pager. request google.cloud.dialogflow v2.types.SearchAgentsRequest The initial request object. response google.cloud.dialogflow v2.types.SearchAgentsResponse The initial response object. retry google.api core.retry.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- 2.47.0 (latest) 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.2 2.40.0 2.39.1 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.30.2 2.29.0 2.28.3 2.27.0 2.26.0 2.25.0 2.24.1 2.23.3 2.22.0 2.21.0 2.20.0 2.19.1 2.18.0 2.17.0 2.16.1 2.15.2 2.14.1 2.13.0 2.12.0 2.11.0 2.10.0 2.9.1 2.8.1 2.7.1 2.6.0 2.5.0 2.4.0 2.3.0 2.2.0 2.1.2 2.0.0 1.1.3 1.0.0 0.8.0 0.7.2 SearchAgentsAsyncPager ( method : typing .
- Home Documentation Developer tools Python Client libraries Send feedback Class SearchAgentsAsyncPager (2.47.0) Stay organized with collections Save and categorize content based on your preferences.
- This class thinly wraps an initial SearchAgentsResponse object, and provides an aiter method to iterate through its agents field.

### Agent collaboration \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-collaboration](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-collaboration)
- Source ID: `site-docs-root`
- Final score: 145
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- When multiple users save changes to the same agent, either through the Dialogflow CX console or the Dialogflow CX API, the auto sync feature automatically and instantly displays the changes across all users' Dialogflow CX console instances.
- Home Documentation AI and ML Dialogflow Dialogflow CX Send feedback Agent collaboration Stay organized with collections Save and categorize content based on your preferences.
- Auto sync If multiple users view an agent at the same time, a list of icons in the top toolbar displays the users who are currently viewing or editing the agent.
- You can collaborate with multiple team members to build an agent in the Dialogflow CX console.

