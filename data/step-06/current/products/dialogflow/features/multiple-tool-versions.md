---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:17:30.318Z"
product_name: "Dialogflow"
product_slug: "dialogflow"
feature_name: "Multiple tool versions"
feature_slug: "multiple-tool-versions"
latest_feature_date: "2025-03-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3-overview"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/best-practices"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/console-conversational-agents"
keywords:
  - "multiple"
  - "tool"
  - "versions"
  - "agents"
  - "now"
  - "alongside"
  - "playbooks"
  - "flows"
---

# Multiple tool versions

Product: Dialogflow
Coverage: MEDIUM

## Step 02 Summary

Agents now support multiple tool versions alongside playbooks and flows.

## Extended Definition

Agents now support multiple tool versions alongside playbooks and flows.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3-overview](https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3-overview)
- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/best-practices](https://docs.cloud.google.com/dialogflow/cx/docs/concept/best-practices)
- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/console-conversational-agents](https://docs.cloud.google.com/dialogflow/cx/docs/concept/console-conversational-agents)

## Supporting Pages

### Dialogflow API \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3-overview](https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3-overview)
- Source ID: `site-docs-reference`
- Final score: 157
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- REST Resource: v3.projects.locations REST Resource: v3.projects.locations.agents REST Resource: v3.projects.locations.agents.changelogs REST Resource: v3.projects.locations.agents.entityTypes REST Resource: v3.projects.locations.agents.environments REST Resource: v3.projects.locations.agents.environments.continuousTestResults REST Resource: v3.projects.locations.agents.environments.deployments REST Resource: v3.projects.locations.agents.environments.experiments REST Resource: v3.projects.locations.agents.environments.sessions REST Resource: v3.projects.locations.agents.environments.sessions.entityTypes REST Resource: v3.projects.locations.agents.flows REST Resource: v3.projects.locations.agents.flows.pages REST Resource: v3.projects.locations.agents.flows.transitionRouteGroups REST Resource: v3.projects.locations.agents.flows.versions REST Resource: v3.projects.locations.agents.generators REST Resource: v3.projects.locations.agents.intents REST Resource: v3.projects.locations.agents.playbooks REST Resource: v3.projects.locations.agents.playbooks.examples REST Resource: v3.projects.locations.agents.playbooks.versions REST Resource: v3.projects.locations.agents.sessions REST Resource: v3.projects.locations.agents.sessions.entityTypes REST Resource: v3.projects.locations.agents.testCases REST Resource: v3.projects.locations.agents.testCases.results REST Resource: v3.projects.locations.agents.tools REST Resource: v3.projects.locations.agents.tools.versions REST Resource: v3.projects.locations.agents.transitionRouteGroups REST Resource: v3.projects.locations.agents.webhooks REST Resource: v3.projects.locations.operations REST Resource: v3.projects.locations.securitySettings REST Resource: v3.projects.operations Service: dialogflow.googleapis.com To call this service, we recommend that you use the Google-provided client libraries .
- REST Resource: v3.projects.locations.agents.flows.versions Methods compareVersions POST /v3/{baseVersion=projects/ /locations/ /agents/ /flows/ /versions/ }:compareVersions Compares the specified base version with target version. create POST /v3/{parent=projects/ /locations/ /agents/ /flows/ }/versions Creates a Version in the specified Flow . delete DELETE /v3/{name=projects/ /locations/ /agents/ /flows/ /versions/ } Deletes the specified Version . get GET /v3/{name=projects/ /locations/ /agents/ /flows/ /versions/ } Retrieves the specified Version . list GET /v3/{parent=projects/ /locations/ /agents/ /flows/ }/versions Returns the list of all versions in the specified Flow . load POST /v3/{name=projects/ /locations/ /agents/ /flows/ /versions/ }:load Loads resources in the specified version to the draft flow. patch PATCH /v3/{version.name=projects/ /locations/ /agents/ /flows/ /versions/ } Updates the specified Version .
- REST Resource: v3.projects.locations.agents.playbooks.versions Methods create POST /v3/{parent=projects/ /locations/ /agents/ /playbooks/ }/versions Creates a version for the specified Playbook. delete DELETE /v3/{name=projects/ /locations/ /agents/ /playbooks/ /versions/ } Deletes the specified version of the Playbook. get GET /v3/{name=projects/ /locations/ /agents/ /playbooks/ /versions/ } Retrieves the specified version of the Playbook. list GET /v3/{parent=projects/ /locations/ /agents/ /playbooks/ }/versions Lists versions for the specified Playbook. restore POST /v3/{name=projects/ /locations/ /agents/ /playbooks/ /versions/ }:restore Retrieves the specified version of the Playbook and stores it as the current playbook draft, returning the playbook with resources updated.
- REST Resource: v3.projects.locations.agents.tools.versions Methods create POST /v3/{parent=projects/ /locations/ /agents/ /tools/ }/versions Creates a version for the specified Tool . delete DELETE /v3/{name=projects/ /locations/ /agents/ /tools/ /versions/ } Deletes the specified version of the Tool . get GET /v3/{name=projects/ /locations/ /agents/ /tools/ /versions/ } Retrieves the specified version of the Tool . list GET /v3/{parent=projects/ /locations/ /agents/ /tools/ }/versions List versions of the specified Tool . restore POST /v3/{name=projects/ /locations/ /agents/ /tools/ /versions/ }:restore Retrieves the specified version of the Tool and stores it as the current tool draft, returning the tool with resources updated.

### Service use best practices \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/best-practices](https://docs.cloud.google.com/dialogflow/cx/docs/concept/best-practices)
- Source ID: `site-docs-root`
- Final score: 137
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Playbooks execution Performance depends on the complexity of the playbook, the number of prompts, and the execution time of any tools called.
- Playbooks: An LLM prompt is constructed based on the playbook instructions, the conversation context and the tool input.
- Playbooks: tools Performance depends on the underlying execution of the tool.
- Performance per operation The following table provides information about the typical performance of Dialogflow operations: Action Notes Flow actions: state handlers Fastest operation Flows: intent detection (text) Fastest operation Flows: parameter detection (text) Fast operation Speech recognition (streaming) Data is processed and responses are returned as soon as possible.

### "Conversational Agents console overview \_|\_ Dialogflow CX \_|\_ Google\

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/console-conversational-agents](https://docs.cloud.google.com/dialogflow/cx/docs/concept/console-conversational-agents)
- Source ID: `site-docs-root`
- Final score: 136
- Re-rank relevance: N/A

Evidence snippets:
- Using the Conversational Agents console, you can create interactive agents that use generative playbooks , generative data stores , and deterministic flows .
- To create an agent with playbooks and/or flows : Open the Conversational Agents console .
- Agents that utilize generative features such as playbooks, data stores, generators, or generative fallback for a request are charged as generative requests.
- Home Documentation AI and ML Dialogflow Dialogflow CX Send feedback Conversational Agents console overview Stay organized with collections Save and categorize content based on your preferences.

