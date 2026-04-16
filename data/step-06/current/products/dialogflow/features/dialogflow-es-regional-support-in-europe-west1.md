---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:17:30.461Z"
product_name: "Dialogflow"
product_slug: "dialogflow"
feature_name: "Dialogflow ES regional support in europe-west1"
feature_slug: "dialogflow-es-regional-support-in-europe-west1"
latest_feature_date: "2021-02-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3-overview"
  - "https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.contexts.ContextsAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.contexts.ContextsClient"
keywords:
  - "dialogflow"
  - "es"
  - "regional"
  - "europe"
  - "west1"
  - "supports"
  - "deployment"
  - "region"
---

# Dialogflow ES regional support in europe-west1

Product: Dialogflow
Coverage: MEDIUM

## Step 02 Summary

Dialogflow ES supports deployment in the europe-west1 region.

## Extended Definition

Dialogflow ES supports deployment in the europe-west1 region.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3-overview](https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3-overview)
- [https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.contexts.ContextsAsyncClient](https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.contexts.ContextsAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.contexts.ContextsClient](https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.contexts.ContextsClient)

## Supporting Pages

### Dialogflow API \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3-overview](https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3-overview)
- Source ID: `site-docs-reference`
- Final score: 74
- Re-rank relevance: N/A

Evidence snippets:
- This service has the following service endpoints and all URIs below are relative to these service endpoints: https://dialogflow.googleapis.com https://asia-northeast1-dialogflow.googleapis.com https://asia-south1-dialogflow.googleapis.com https://asia-southeast1-dialogflow.googleapis.com https://asia-southeast2-dialogflow.googleapis.com https://australia-southeast1-dialogflow.googleapis.com https://europe-west1-dialogflow.googleapis.com https://europe-west2-dialogflow.googleapis.com https://europe-west3-dialogflow.googleapis.com https://europe-west4-dialogflow.googleapis.com https://europe-west6-dialogflow.googleapis.com https://northamerica-northeast1-dialogflow.googleapis.com https://us-central1-dialogflow.googleapis.com https://us-east1-dialogflow.googleapis.com https://us-west1-dialogflow.googleapis.com REST Resource: v3.projects.locations Methods get GET /v3/{name=projects/ /locations/ } Gets information about a location. list GET /v3/{name=projects/ }/locations Lists information about the supported locations for this service.
- REST Resource: v3.projects.locations REST Resource: v3.projects.locations.agents REST Resource: v3.projects.locations.agents.changelogs REST Resource: v3.projects.locations.agents.entityTypes REST Resource: v3.projects.locations.agents.environments REST Resource: v3.projects.locations.agents.environments.continuousTestResults REST Resource: v3.projects.locations.agents.environments.deployments REST Resource: v3.projects.locations.agents.environments.experiments REST Resource: v3.projects.locations.agents.environments.sessions REST Resource: v3.projects.locations.agents.environments.sessions.entityTypes REST Resource: v3.projects.locations.agents.flows REST Resource: v3.projects.locations.agents.flows.pages REST Resource: v3.projects.locations.agents.flows.transitionRouteGroups REST Resource: v3.projects.locations.agents.flows.versions REST Resource: v3.projects.locations.agents.generators REST Resource: v3.projects.locations.agents.intents REST Resource: v3.projects.locations.agents.playbooks REST Resource: v3.projects.locations.agents.playbooks.examples REST Resource: v3.projects.locations.agents.playbooks.versions REST Resource: v3.projects.locations.agents.sessions REST Resource: v3.projects.locations.agents.sessions.entityTypes REST Resource: v3.projects.locations.agents.testCases REST Resource: v3.projects.locations.agents.testCases.results REST Resource: v3.projects.locations.agents.tools REST Resource: v3.projects.locations.agents.tools.versions REST Resource: v3.projects.locations.agents.transitionRouteGroups REST Resource: v3.projects.locations.agents.webhooks REST Resource: v3.projects.locations.operations REST Resource: v3.projects.locations.securitySettings REST Resource: v3.projects.operations Service: dialogflow.googleapis.com To call this service, we recommend that you use the Google-provided client libraries .
- REST Resource: v3.projects.locations.agents.environments.deployments Methods get GET /v3/{name=projects/ /locations/ /agents/ /environments/ /deployments/ } Retrieves the specified Deployment . list GET /v3/{parent=projects/ /locations/ /agents/ /environments/ }/deployments Returns the list of all deployments in the specified Environment .
- This service provides the following discovery document: https://dialogflow.googleapis.com/$discovery/rest?version=v3 Service endpoint A service endpoint is a base URL that specifies the network address of an API service.

### "Class ContextsAsyncClient (2.47.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.contexts.ContextsAsyncClient](https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.contexts.ContextsAsyncClient)
- Source ID: `site-python-reference`
- Final score: 63
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dialogflow v2 async def sample delete all contexts(): Create a client client = dialogflow v2.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dialogflow v2 async def sample create context(): Create a client client = dialogflow v2.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dialogflow v2 async def sample delete context(): Create a client client = dialogflow v2.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dialogflow v2 async def sample update context(): Create a client client = dialogflow v2.

### "Class ContextsClient (2.47.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.contexts.ContextsClient](https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.contexts.ContextsClient)
- Source ID: `site-python-reference`
- Final score: 63
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dialogflow v2 def sample delete all contexts(): Create a client client = dialogflow v2.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dialogflow v2 def sample create context(): Create a client client = dialogflow v2.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dialogflow v2 def sample delete context(): Create a client client = dialogflow v2.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dialogflow v2 def sample update context(): Create a client client = dialogflow v2.

