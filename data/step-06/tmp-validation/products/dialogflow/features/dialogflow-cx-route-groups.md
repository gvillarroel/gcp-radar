---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T02:32:45.721Z"
product_name: "Dialogflow"
product_slug: "dialogflow"
feature_name: "Dialogflow CX route groups"
feature_slug: "dialogflow-cx-route-groups"
latest_feature_date: "2023-08-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/flow"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-design"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3-overview"
keywords:
  - "groups"
  - "route"
  - "scoped"
  - "level"
  - "flow"
---

# Dialogflow CX route groups

Product: Dialogflow
Coverage: MEDIUM

## Step 02 Summary

Dialogflow CX route groups can be scoped at the flow level or the agent level.

## Extended Definition

Dialogflow CX route groups can be scoped at the flow level or the agent level.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/flow](https://docs.cloud.google.com/dialogflow/cx/docs/concept/flow)
- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-design](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-design)
- [https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3-overview](https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3-overview)

## Supporting Pages

### Flows \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/flow](https://docs.cloud.google.com/dialogflow/cx/docs/concept/flow)
- Source ID: `site-docs-root`
- Final score: 140
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Agent-level route groups referenced by a locked flow or any page under a locked flow cannot be deleted, but they can still be edited.
- Flow-level route groups cannot be created, edited, deleted.
- For details, see State handler scope and Flow-level routes .
- For details, see Flow-level event handlers For more information about how data is applied at varying levels, see the data application levels .

### "General agent design best practices \_|\_ Dialogflow CX \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-design](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-design)
- Source ID: `site-docs-root`
- Final score: 120
- Re-rank relevance: N/A

Evidence snippets:
- The following lists the conversation control granularity of agent resources in increasing granularity order: Agents (one agent handles all conversations) Flows (one flow handles one or more related conversation topics) Pages (one page handles one or more related conversation turns) Routes (one route handles a user intent or condition check) Intent parameters versus form parameters The main way in which your system gets structured data from the end-user is with parameters .
- For example, you could combine the following topics to a single "Get balance" flow: Get checking balance Get savings balance Get mortgage balance Get credit balance If your agent design has too many pages per flow, combine related pages and make use of many routes per page.
- Routes and route groups If you want to transition to another page, queue a response message, or call a webhook when an intent is matched or a condition is met, use routes .
- Each flow should represent a high level topic for your agent, where each page associated with the flow helps to handle the topic.

### Dialogflow API \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3-overview](https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3-overview)
- Source ID: `site-docs-reference`
- Final score: 118
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- REST Resource: v3.projects.locations REST Resource: v3.projects.locations.agents REST Resource: v3.projects.locations.agents.changelogs REST Resource: v3.projects.locations.agents.entityTypes REST Resource: v3.projects.locations.agents.environments REST Resource: v3.projects.locations.agents.environments.continuousTestResults REST Resource: v3.projects.locations.agents.environments.deployments REST Resource: v3.projects.locations.agents.environments.experiments REST Resource: v3.projects.locations.agents.environments.sessions REST Resource: v3.projects.locations.agents.environments.sessions.entityTypes REST Resource: v3.projects.locations.agents.flows REST Resource: v3.projects.locations.agents.flows.pages REST Resource: v3.projects.locations.agents.flows.transitionRouteGroups REST Resource: v3.projects.locations.agents.flows.versions REST Resource: v3.projects.locations.agents.generators REST Resource: v3.projects.locations.agents.intents REST Resource: v3.projects.locations.agents.playbooks REST Resource: v3.projects.locations.agents.playbooks.examples REST Resource: v3.projects.locations.agents.playbooks.versions REST Resource: v3.projects.locations.agents.sessions REST Resource: v3.projects.locations.agents.sessions.entityTypes REST Resource: v3.projects.locations.agents.testCases REST Resource: v3.projects.locations.agents.testCases.results REST Resource: v3.projects.locations.agents.tools REST Resource: v3.projects.locations.agents.tools.versions REST Resource: v3.projects.locations.agents.transitionRouteGroups REST Resource: v3.projects.locations.agents.webhooks REST Resource: v3.projects.locations.operations REST Resource: v3.projects.locations.securitySettings REST Resource: v3.projects.operations Service: dialogflow.googleapis.com To call this service, we recommend that you use the Google-provided client libraries .
- REST Resource: v3.projects.locations.agents.flows.transitionRouteGroups Methods create POST /v3/{parent=projects/ /locations/ /agents/ /flows/ }/transitionRouteGroups Creates an TransitionRouteGroup in the specified flow. delete DELETE /v3/{name=projects/ /locations/ /agents/ /flows/ /transitionRouteGroups/ } Deletes the specified TransitionRouteGroup . get GET /v3/{name=projects/ /locations/ /agents/ /flows/ /transitionRouteGroups/ } Retrieves the specified TransitionRouteGroup . list GET /v3/{parent=projects/ /locations/ /agents/ /flows/ }/transitionRouteGroups Returns the list of all transition route groups in the specified flow. patch PATCH /v3/{transitionRouteGroup.name=projects/ /locations/ /agents/ /flows/ /transitionRouteGroups/ } Updates the specified TransitionRouteGroup .
- REST Resource: v3.projects.locations.agents.transitionRouteGroups Methods create POST /v3/{parent=projects/ /locations/ /agents/ }/transitionRouteGroups Creates an TransitionRouteGroup in the specified flow. delete DELETE /v3/{name=projects/ /locations/ /agents/ /transitionRouteGroups/ } Deletes the specified TransitionRouteGroup . get GET /v3/{name=projects/ /locations/ /agents/ /transitionRouteGroups/ } Retrieves the specified TransitionRouteGroup . list GET /v3/{parent=projects/ /locations/ /agents/ }/transitionRouteGroups Returns the list of all transition route groups in the specified flow. patch PATCH /v3/{transitionRouteGroup.name=projects/ /locations/ /agents/ /transitionRouteGroups/ } Updates the specified TransitionRouteGroup .
- REST Resource: v3.projects.locations.agents.flows Methods create POST /v3/{parent=projects/ /locations/ /agents/ }/flows Creates a flow in the specified agent. delete DELETE /v3/{name=projects/ /locations/ /agents/ /flows/ } Deletes a specified flow. export POST /v3/{name=projects/ /locations/ /agents/ /flows/ }:export Exports the specified flow to a binary file. get GET /v3/{name=projects/ /locations/ /agents/ /flows/ } Retrieves the specified flow. getValidationResult GET /v3/{name=projects/ /locations/ /agents/ /flows/ /validationResult} Gets the latest flow validation result. import POST /v3/{parent=projects/ /locations/ /agents/ }/flows:import Imports the specified flow to the specified agent from a binary file. list GET /v3/{parent=projects/ /locations/ /agents/ }/flows Returns the list of all flows in the specified agent. patch PATCH /v3/{flow.name=projects/ /locations/ /agents/ /flows/ } Updates the specified flow. train POST /v3/{name=projects/ /locations/ /agents/ /flows/ }:train Trains the specified flow. validate POST /v3/{name=projects/ /locations/ /agents/ /flows/ }:validate Validates the specified flow and creates or updates validation results.

