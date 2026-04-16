---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:17:30.332Z"
product_name: "Dialogflow"
product_slug: "dialogflow"
feature_name: "RAG optimization for data store tools"
feature_slug: "rag-optimization-for-data-store-tools"
latest_feature_date: "2024-11-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/handler"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/performance"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3-overview"
keywords:
  - "rag"
  - "optimization"
  - "store"
  - "tools"
  - "used"
  - "dialogflow"
  - "playbooks"
  - "can"
---

# RAG optimization for data store tools

Product: Dialogflow
Coverage: MEDIUM

## Step 02 Summary

Data store tools used by Dialogflow playbooks can be optimized for retrieval-augmented generation performance.

## Extended Definition

Data store tools used by Dialogflow playbooks can be optimized for retrieval-augmented generation performance.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/handler](https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/handler)
- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/performance](https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/performance)
- [https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3-overview](https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3-overview)

## Supporting Pages

### Data store tools \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/handler](https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/handler)
- Source ID: `site-docs-root`
- Final score: 136
- Re-rank relevance: N/A

Evidence snippets:
- See the reference documentation for details. { "toolUse" : { "tool" : "projects/PROJECT ID/locations/LOCATION ID/agents/AGENT ID/tools/TOOL ID" , "action" : "TOOL DISPLAY NAME" , "inputParameters" : [ { "name" : "TOOL DISPLAY NAME input" , "value" : { "query" : "QUERY" } } ], "outputParameters" : [ { "name" : "TOOL DISPLAY NAME output" , "value" : { "answer" : "ANSWER" , "snippets" : [ { "title" : "TITLE" , "text" : "TEXT FROM DATASTORE" , "uri" : "URI OF DATASTORE" } ] } } ] } } (Playbooks-based agents only) Data store tool examples Note: Examples work with playbooks-based agents only.
- Home Documentation AI and ML Dialogflow Dialogflow CX Send feedback Data store tools Stay organized with collections Save and categorize content based on your preferences.
- For more information see the dataStoreConnections reference . "dataStoreConnections" : [ { "dataStoreType" : "PUBLIC WEB" , "dataStore" : "projects/PROJECT NUMBER/locations/LOCATION ID/collections/default collection/dataStores/DATASTORE ID" }, { "dataStoreType" : "UNSTRUCTURED" , "dataStore" : "projects/PROJECT NUMBER/locations/LOCATION ID/collections/default collection/dataStores/DATASTORE ID" }, { "dataStoreType" : "STRUCTURED" , "dataStore" : "projects/PROJECT NUMBER/locations/LOCATION ID/collections/default collection/dataStores/DATASTORE ID" } ] Data store tool responses might also contain snippets about the content source that was used to generate the response.
- To add the new data store to the tool, navigate back to the Create Tool menu that you're configuring in the Dialogflow CX console and refresh the page.

### "Data store performance improvements \_|\_ Dialogflow CX \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/performance](https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/performance)
- Source ID: `site-docs-root`
- Final score: 124
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Optimization of data store tools used by Playbooks This setting accelerates a data store's RAG response and improves latency by not rewriting the user query nor dynamically populating tool parameters.
- Home Documentation AI and ML Dialogflow Dialogflow CX Send feedback Data store performance improvements Stay organized with collections Save and categorize content based on your preferences.
- This feature is only available for data store tools.
- Data store search configuration For more information about fine-tuning your data store search results, see the data store search configuration pa Previous arrow back Data store tool settings Next Data store hybrid agents arrow forward Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### Dialogflow API \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3-overview](https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3-overview)
- Source ID: `site-docs-reference`
- Final score: 109
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- REST Resource: v3.projects.locations REST Resource: v3.projects.locations.agents REST Resource: v3.projects.locations.agents.changelogs REST Resource: v3.projects.locations.agents.entityTypes REST Resource: v3.projects.locations.agents.environments REST Resource: v3.projects.locations.agents.environments.continuousTestResults REST Resource: v3.projects.locations.agents.environments.deployments REST Resource: v3.projects.locations.agents.environments.experiments REST Resource: v3.projects.locations.agents.environments.sessions REST Resource: v3.projects.locations.agents.environments.sessions.entityTypes REST Resource: v3.projects.locations.agents.flows REST Resource: v3.projects.locations.agents.flows.pages REST Resource: v3.projects.locations.agents.flows.transitionRouteGroups REST Resource: v3.projects.locations.agents.flows.versions REST Resource: v3.projects.locations.agents.generators REST Resource: v3.projects.locations.agents.intents REST Resource: v3.projects.locations.agents.playbooks REST Resource: v3.projects.locations.agents.playbooks.examples REST Resource: v3.projects.locations.agents.playbooks.versions REST Resource: v3.projects.locations.agents.sessions REST Resource: v3.projects.locations.agents.sessions.entityTypes REST Resource: v3.projects.locations.agents.testCases REST Resource: v3.projects.locations.agents.testCases.results REST Resource: v3.projects.locations.agents.tools REST Resource: v3.projects.locations.agents.tools.versions REST Resource: v3.projects.locations.agents.transitionRouteGroups REST Resource: v3.projects.locations.agents.webhooks REST Resource: v3.projects.locations.operations REST Resource: v3.projects.locations.securitySettings REST Resource: v3.projects.operations Service: dialogflow.googleapis.com To call this service, we recommend that you use the Google-provided client libraries .
- REST Resource: v3.projects.locations.agents.playbooks.versions Methods create POST /v3/{parent=projects/ /locations/ /agents/ /playbooks/ }/versions Creates a version for the specified Playbook. delete DELETE /v3/{name=projects/ /locations/ /agents/ /playbooks/ /versions/ } Deletes the specified version of the Playbook. get GET /v3/{name=projects/ /locations/ /agents/ /playbooks/ /versions/ } Retrieves the specified version of the Playbook. list GET /v3/{parent=projects/ /locations/ /agents/ /playbooks/ }/versions Lists versions for the specified Playbook. restore POST /v3/{name=projects/ /locations/ /agents/ /playbooks/ /versions/ }:restore Retrieves the specified version of the Playbook and stores it as the current playbook draft, returning the playbook with resources updated.
- REST Resource: v3.projects.locations.agents.tools.versions Methods create POST /v3/{parent=projects/ /locations/ /agents/ /tools/ }/versions Creates a version for the specified Tool . delete DELETE /v3/{name=projects/ /locations/ /agents/ /tools/ /versions/ } Deletes the specified version of the Tool . get GET /v3/{name=projects/ /locations/ /agents/ /tools/ /versions/ } Retrieves the specified version of the Tool . list GET /v3/{parent=projects/ /locations/ /agents/ /tools/ }/versions List versions of the specified Tool . restore POST /v3/{name=projects/ /locations/ /agents/ /tools/ /versions/ }:restore Retrieves the specified version of the Tool and stores it as the current tool draft, returning the tool with resources updated.
- It is used to build client libraries, IDE plugins, and other tools that interact with Google APIs.

