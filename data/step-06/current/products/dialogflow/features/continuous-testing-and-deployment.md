---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:17:30.454Z"
product_name: "Dialogflow"
product_slug: "dialogflow"
feature_name: "Continuous testing and deployment"
feature_slug: "continuous-testing-and-deployment"
latest_feature_date: "2021-10-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/continuous-tests"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3-overview"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/handler"
keywords:
  - "continuous"
  - "testing"
  - "deployment"
  - "dialogflow"
  - "cx"
  - "provides"
  - "preview"
  - "feature"
---

# Continuous testing and deployment

Product: Dialogflow
Coverage: MEDIUM

## Step 02 Summary

Dialogflow CX provides a preview feature for continuous testing and deployment.

## Extended Definition

Dialogflow CX provides a preview feature for continuous testing and deployment.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/continuous-tests](https://docs.cloud.google.com/dialogflow/cx/docs/concept/continuous-tests)
- [https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3-overview](https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3-overview)
- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/handler](https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/handler)

## Supporting Pages

### Continuous tests and deployment \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/continuous-tests](https://docs.cloud.google.com/dialogflow/cx/docs/concept/continuous-tests)
- Source ID: `site-docs-root`
- Final score: 172
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation AI and ML Dialogflow Dialogflow CX Send feedback Continuous tests and deployment Stay organized with collections Save and categorize content based on your preferences.
- Manage continuous tests and deployment To manage continuous tests and deployment: Console Open the Dialogflow CX console .
- To prevent a bad version from becoming live in the environment, you can also use continuous deployment to run the same set of verification tests before deploying a flow version to the environment.
- The continuous tests feature automatically runs a set of test cases configured for an environment to verify the intended behavior of the flow versions in that environment.

### Dialogflow API \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3-overview](https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3-overview)
- Source ID: `site-docs-reference`
- Final score: 85
- Re-rank relevance: N/A

Evidence snippets:
- REST Resource: v3.projects.locations REST Resource: v3.projects.locations.agents REST Resource: v3.projects.locations.agents.changelogs REST Resource: v3.projects.locations.agents.entityTypes REST Resource: v3.projects.locations.agents.environments REST Resource: v3.projects.locations.agents.environments.continuousTestResults REST Resource: v3.projects.locations.agents.environments.deployments REST Resource: v3.projects.locations.agents.environments.experiments REST Resource: v3.projects.locations.agents.environments.sessions REST Resource: v3.projects.locations.agents.environments.sessions.entityTypes REST Resource: v3.projects.locations.agents.flows REST Resource: v3.projects.locations.agents.flows.pages REST Resource: v3.projects.locations.agents.flows.transitionRouteGroups REST Resource: v3.projects.locations.agents.flows.versions REST Resource: v3.projects.locations.agents.generators REST Resource: v3.projects.locations.agents.intents REST Resource: v3.projects.locations.agents.playbooks REST Resource: v3.projects.locations.agents.playbooks.examples REST Resource: v3.projects.locations.agents.playbooks.versions REST Resource: v3.projects.locations.agents.sessions REST Resource: v3.projects.locations.agents.sessions.entityTypes REST Resource: v3.projects.locations.agents.testCases REST Resource: v3.projects.locations.agents.testCases.results REST Resource: v3.projects.locations.agents.tools REST Resource: v3.projects.locations.agents.tools.versions REST Resource: v3.projects.locations.agents.transitionRouteGroups REST Resource: v3.projects.locations.agents.webhooks REST Resource: v3.projects.locations.operations REST Resource: v3.projects.locations.securitySettings REST Resource: v3.projects.operations Service: dialogflow.googleapis.com To call this service, we recommend that you use the Google-provided client libraries .
- This service provides the following discovery document: https://dialogflow.googleapis.com/$discovery/rest?version=v3 Service endpoint A service endpoint is a base URL that specifies the network address of an API service.
- REST Resource: v3.projects.locations.agents.environments Methods create POST /v3/{parent=projects/ /locations/ /agents/ }/environments Creates an Environment in the specified Agent . delete DELETE /v3/{name=projects/ /locations/ /agents/ /environments/ } Deletes the specified Environment . deployFlow POST /v3/{environment=projects/ /locations/ /agents/ /environments/ }:deployFlow Deploys a flow to the specified Environment . get GET /v3/{name=projects/ /locations/ /agents/ /environments/ } Retrieves the specified Environment . list GET /v3/{parent=projects/ /locations/ /agents/ }/environments Returns the list of all environments in the specified Agent . lookupEnvironmentHistory GET /v3/{name=projects/ /locations/ /agents/ /environments/ }:lookupEnvironmentHistory Looks up the history of the specified Environment . patch PATCH /v3/{environment.name=projects/ /locations/ /agents/ /environments/ } Updates the specified Environment . runContinuousTest POST /v3/{environment=projects/ /locations/ /agents/ /environments/ }:runContinuousTest Kicks off a continuous test under the specified Environment .
- This service has the following service endpoints and all URIs below are relative to these service endpoints: https://dialogflow.googleapis.com https://asia-northeast1-dialogflow.googleapis.com https://asia-south1-dialogflow.googleapis.com https://asia-southeast1-dialogflow.googleapis.com https://asia-southeast2-dialogflow.googleapis.com https://australia-southeast1-dialogflow.googleapis.com https://europe-west1-dialogflow.googleapis.com https://europe-west2-dialogflow.googleapis.com https://europe-west3-dialogflow.googleapis.com https://europe-west4-dialogflow.googleapis.com https://europe-west6-dialogflow.googleapis.com https://northamerica-northeast1-dialogflow.googleapis.com https://us-central1-dialogflow.googleapis.com https://us-east1-dialogflow.googleapis.com https://us-west1-dialogflow.googleapis.com REST Resource: v3.projects.locations Methods get GET /v3/{name=projects/ /locations/ } Gets information about a location. list GET /v3/{name=projects/ }/locations Lists information about the supported locations for this service.

### Data store tools \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/handler](https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/handler)
- Source ID: `site-docs-root`
- Final score: 81
- Re-rank relevance: N/A

Evidence snippets:
- Each integration provides instructions for deployment.
- The following is a example of a userMetadata parameter value to refine search results relevant to a specific: "userMetadata": { "favoriteColor": "blue", ... } The fallback parameter provides an answer that the data store tool should respond with if there is no valid summarized answer for the query.
- When creating data store tool examples, the tool input parameter requestBody provides three optional inputs together with the required query string - a filter string, a userMetadata structured object, and a fallback string.
- Is there anything else I can do for you?" Data store tool configuration If you find during testing that some responses don't meet your expectations, you can try adjusting the following parameters to fine-tune performance.

