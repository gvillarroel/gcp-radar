---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:17:30.455Z"
product_name: "Dialogflow"
product_slug: "dialogflow"
feature_name: "Flow version comparison"
feature_slug: "flow-version-comparison"
latest_feature_date: "2021-10-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dialogflow/es/docs/agents-versions"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3-overview"
keywords:
  - "flow"
  - "version"
  - "comparison"
  - "dialogflow"
  - "cx"
  - "provides"
  - "side"
  - "versions"
---

# Flow version comparison

Product: Dialogflow
Coverage: MEDIUM

## Step 02 Summary

Dialogflow CX provides side-by-side comparison of flow versions.

## Extended Definition

Dialogflow CX provides side-by-side comparison of flow versions.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dialogflow/es/docs/agents-versions](https://docs.cloud.google.com/dialogflow/es/docs/agents-versions)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2](https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2)
- [https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3-overview](https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3-overview)

## Supporting Pages

### Versions and environments \_|\_ Dialogflow ES \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/es/docs/agents-versions](https://docs.cloud.google.com/dialogflow/es/docs/agents-versions)
- Source ID: `site-iam-reference`
- Final score: 190
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation AI and ML Dialogflow Dialogflow ES Send feedback Versions and environments Stay organized with collections Save and categorize content based on your preferences.
- Consider possible agent errors while changing versions If you change an agent version in your production environment while sessions are active, it may cause agent errors for some active sessions.
- Publish a version in a new environment To publish an agent draft to a version and create a custom environment: Console Go to the Dialogflow ES console .
- Google Assistant If you are using Actions on Google release environments , see the versioning limitations for the Dialogflow fulfillment library .

### "Package com.google.cloud.dialogflow.v2 (4.94.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2](https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2)
- Source ID: `site-java-reference`
- Final score: 180
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Project Location Version Builder Builder for projects/{project}/locations/{location}/agent/versions/{version}. com. google. cloud. dialogflow. v2.
- Environment You can create multiple versions of your agent and publish them to separate environments. com. google. cloud. dialogflow. v2.
- Builder You can create multiple versions of your agent and publish them to separate environments. com. google. cloud. dialogflow. v2.
- Version You can create multiple versions of your agent and publish them to separate environments. com. google. cloud. dialogflow. v2.

### Dialogflow API \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3-overview](https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3-overview)
- Source ID: `site-docs-reference`
- Final score: 158
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- REST Resource: v3.projects.locations REST Resource: v3.projects.locations.agents REST Resource: v3.projects.locations.agents.changelogs REST Resource: v3.projects.locations.agents.entityTypes REST Resource: v3.projects.locations.agents.environments REST Resource: v3.projects.locations.agents.environments.continuousTestResults REST Resource: v3.projects.locations.agents.environments.deployments REST Resource: v3.projects.locations.agents.environments.experiments REST Resource: v3.projects.locations.agents.environments.sessions REST Resource: v3.projects.locations.agents.environments.sessions.entityTypes REST Resource: v3.projects.locations.agents.flows REST Resource: v3.projects.locations.agents.flows.pages REST Resource: v3.projects.locations.agents.flows.transitionRouteGroups REST Resource: v3.projects.locations.agents.flows.versions REST Resource: v3.projects.locations.agents.generators REST Resource: v3.projects.locations.agents.intents REST Resource: v3.projects.locations.agents.playbooks REST Resource: v3.projects.locations.agents.playbooks.examples REST Resource: v3.projects.locations.agents.playbooks.versions REST Resource: v3.projects.locations.agents.sessions REST Resource: v3.projects.locations.agents.sessions.entityTypes REST Resource: v3.projects.locations.agents.testCases REST Resource: v3.projects.locations.agents.testCases.results REST Resource: v3.projects.locations.agents.tools REST Resource: v3.projects.locations.agents.tools.versions REST Resource: v3.projects.locations.agents.transitionRouteGroups REST Resource: v3.projects.locations.agents.webhooks REST Resource: v3.projects.locations.operations REST Resource: v3.projects.locations.securitySettings REST Resource: v3.projects.operations Service: dialogflow.googleapis.com To call this service, we recommend that you use the Google-provided client libraries .
- This service provides the following discovery document: https://dialogflow.googleapis.com/$discovery/rest?version=v3 Service endpoint A service endpoint is a base URL that specifies the network address of an API service.
- REST Resource: v3.projects.locations.agents.flows.versions Methods compareVersions POST /v3/{baseVersion=projects/ /locations/ /agents/ /flows/ /versions/ }:compareVersions Compares the specified base version with target version. create POST /v3/{parent=projects/ /locations/ /agents/ /flows/ }/versions Creates a Version in the specified Flow . delete DELETE /v3/{name=projects/ /locations/ /agents/ /flows/ /versions/ } Deletes the specified Version . get GET /v3/{name=projects/ /locations/ /agents/ /flows/ /versions/ } Retrieves the specified Version . list GET /v3/{parent=projects/ /locations/ /agents/ /flows/ }/versions Returns the list of all versions in the specified Flow . load POST /v3/{name=projects/ /locations/ /agents/ /flows/ /versions/ }:load Loads resources in the specified version to the draft flow. patch PATCH /v3/{version.name=projects/ /locations/ /agents/ /flows/ /versions/ } Updates the specified Version .
- This service has the following service endpoints and all URIs below are relative to these service endpoints: https://dialogflow.googleapis.com https://asia-northeast1-dialogflow.googleapis.com https://asia-south1-dialogflow.googleapis.com https://asia-southeast1-dialogflow.googleapis.com https://asia-southeast2-dialogflow.googleapis.com https://australia-southeast1-dialogflow.googleapis.com https://europe-west1-dialogflow.googleapis.com https://europe-west2-dialogflow.googleapis.com https://europe-west3-dialogflow.googleapis.com https://europe-west4-dialogflow.googleapis.com https://europe-west6-dialogflow.googleapis.com https://northamerica-northeast1-dialogflow.googleapis.com https://us-central1-dialogflow.googleapis.com https://us-east1-dialogflow.googleapis.com https://us-west1-dialogflow.googleapis.com REST Resource: v3.projects.locations Methods get GET /v3/{name=projects/ /locations/ } Gets information about a location. list GET /v3/{name=projects/ }/locations Lists information about the supported locations for this service.

