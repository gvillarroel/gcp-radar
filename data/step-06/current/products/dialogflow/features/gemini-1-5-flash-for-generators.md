---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:17:30.345Z"
product_name: "Dialogflow"
product_slug: "dialogflow"
feature_name: "gemini-1.5-flash for generators"
feature_slug: "gemini-1-5-flash-for-generators"
latest_feature_date: "2024-06-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/settings"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/generative"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3-overview"
keywords:
  - "gemini"
  - "flash"
  - "generators"
  - "dialogflow"
  - "cx"
  - "can"
  - "use"
  - "generative"
---

# gemini-1.5-flash for generators

Product: Dialogflow
Coverage: MEDIUM

## Step 02 Summary

Dialogflow CX generators can use the gemini-1.5-flash generative model.

## Extended Definition

Dialogflow CX generators can use the gemini-1.5-flash generative model.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/settings](https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/settings)
- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/generative](https://docs.cloud.google.com/dialogflow/cx/docs/concept/generative)
- [https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3-overview](https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3-overview)

## Supporting Pages

### Data store tool settings \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/settings](https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/settings)
- Source ID: `site-docs-root`
- Final score: 89
- Re-rank relevance: N/A

Evidence snippets:
- It is specifically optimized for voice interactions with optimized latency. gemini-2.5-flash GA Gemini 2.5 flash gemini-2.5-flash-lite GA Gemini 2.5 flash lite gemini-2.0-flash-001 GA Gemini 2.0 flash gemini-2.0-flash-lite-001 GA Gemini 2.0 flash lite gemini-2.0-flash-lite-001-voice-mode GA Gemini 2.0 flash lite optimized for voice.
- It is optimized for both voice and text with optimized latency gemini-2.5-flash GA Gemini 2.5 flash gemini-2.5-flash-lite GA Gemini 2.5 flash lite gemini-2.0-flash-001 GA Gemini 2.0 flash gemini-2.0-flash-lite-001 GA Gemini 2.0 flash lite All listed models are available in all supported languages and supported regions .
- The placeholders are as follows: $original-query : The user's query text. $rewritten-query : Dialogflow uses a rewriter module to rewrite the original user query into a more accurate format. $sources : Dialogflow uses Enterprise Search to search for sources based on the user's query.
- Home Documentation AI and ML Dialogflow Dialogflow CX Send feedback Data store tool settings Stay organized with collections Save and categorize content based on your preferences.

### Generative versus deterministic \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/generative](https://docs.cloud.google.com/dialogflow/cx/docs/concept/generative)
- Source ID: `site-docs-root`
- Final score: 72
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation AI and ML Dialogflow Dialogflow CX Send feedback Generative versus deterministic Stay organized with collections Save and categorize content based on your preferences.
- During a conversation, Dialogflow CX agents always use language models for understanding end-user intention, but you can choose whether and how language models are used for agent responses.
- Partly generative flows Flows have some optional generative features that you can use when you don't need deterministic control over agent responses in certain conversation scenarios.
- Fully generative The fully generative features are built on Vertex AI large language models (LLMs) for both understanding end-user intention as well as generating agent responses.

### Dialogflow API \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3-overview](https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3-overview)
- Source ID: `site-docs-reference`
- Final score: 58
- Re-rank relevance: N/A

Evidence snippets:
- REST Resource: v3.projects.locations REST Resource: v3.projects.locations.agents REST Resource: v3.projects.locations.agents.changelogs REST Resource: v3.projects.locations.agents.entityTypes REST Resource: v3.projects.locations.agents.environments REST Resource: v3.projects.locations.agents.environments.continuousTestResults REST Resource: v3.projects.locations.agents.environments.deployments REST Resource: v3.projects.locations.agents.environments.experiments REST Resource: v3.projects.locations.agents.environments.sessions REST Resource: v3.projects.locations.agents.environments.sessions.entityTypes REST Resource: v3.projects.locations.agents.flows REST Resource: v3.projects.locations.agents.flows.pages REST Resource: v3.projects.locations.agents.flows.transitionRouteGroups REST Resource: v3.projects.locations.agents.flows.versions REST Resource: v3.projects.locations.agents.generators REST Resource: v3.projects.locations.agents.intents REST Resource: v3.projects.locations.agents.playbooks REST Resource: v3.projects.locations.agents.playbooks.examples REST Resource: v3.projects.locations.agents.playbooks.versions REST Resource: v3.projects.locations.agents.sessions REST Resource: v3.projects.locations.agents.sessions.entityTypes REST Resource: v3.projects.locations.agents.testCases REST Resource: v3.projects.locations.agents.testCases.results REST Resource: v3.projects.locations.agents.tools REST Resource: v3.projects.locations.agents.tools.versions REST Resource: v3.projects.locations.agents.transitionRouteGroups REST Resource: v3.projects.locations.agents.webhooks REST Resource: v3.projects.locations.operations REST Resource: v3.projects.locations.securitySettings REST Resource: v3.projects.operations Service: dialogflow.googleapis.com To call this service, we recommend that you use the Google-provided client libraries .
- REST Resource: v3.projects.locations.agents Methods create POST /v3/{parent=projects/ /locations/ }/agents Creates an agent in the specified location. delete DELETE /v3/{name=projects/ /locations/ /agents/ } Deletes the specified agent. export POST /v3/{name=projects/ /locations/ /agents/ }:export Exports the specified agent to a binary file. get GET /v3/{name=projects/ /locations/ /agents/ } Retrieves the specified agent. getGenerativeSettings GET /v3/{name=projects/ /locations/ /agents/ /generativeSettings} Gets the generative settings for the agent. getValidationResult GET /v3/{name=projects/ /locations/ /agents/ /validationResult} Gets the latest agent validation result. list GET /v3/{parent=projects/ /locations/ }/agents Returns the list of all agents in the specified location. patch PATCH /v3/{agent.name=projects/ /locations/ /agents/ } Updates the specified agent. restore POST /v3/{name=projects/ /locations/ /agents/ }:restore Restores the specified agent from a binary file. updateGenerativeSettings PATCH /v3/{generativeSettings.name=projects/ /locations/ /agents/ /generativeSettings} Updates the generative settings for the agent. validate POST /v3/{name=projects/ /locations/ /agents/ }:validate Validates the specified agent and creates or updates validation results.
- This service has the following service endpoints and all URIs below are relative to these service endpoints: https://dialogflow.googleapis.com https://asia-northeast1-dialogflow.googleapis.com https://asia-south1-dialogflow.googleapis.com https://asia-southeast1-dialogflow.googleapis.com https://asia-southeast2-dialogflow.googleapis.com https://australia-southeast1-dialogflow.googleapis.com https://europe-west1-dialogflow.googleapis.com https://europe-west2-dialogflow.googleapis.com https://europe-west3-dialogflow.googleapis.com https://europe-west4-dialogflow.googleapis.com https://europe-west6-dialogflow.googleapis.com https://northamerica-northeast1-dialogflow.googleapis.com https://us-central1-dialogflow.googleapis.com https://us-east1-dialogflow.googleapis.com https://us-west1-dialogflow.googleapis.com REST Resource: v3.projects.locations Methods get GET /v3/{name=projects/ /locations/ } Gets information about a location. list GET /v3/{name=projects/ }/locations Lists information about the supported locations for this service.
- REST Resource: v3.projects.locations.agents.generators Methods create POST /v3/{parent=projects/ /locations/ /agents/ }/generators Creates a generator in the specified agent. delete DELETE /v3/{name=projects/ /locations/ /agents/ /generators/ } Deletes the specified generators. get GET /v3/{name=projects/ /locations/ /agents/ /generators/ } Retrieves the specified generator. list GET /v3/{parent=projects/ /locations/ /agents/ }/generators Returns the list of all generators in the specified agent. patch PATCH /v3/{generator.name=projects/ /locations/ /agents/ /generators/ } Update the specified generator.

