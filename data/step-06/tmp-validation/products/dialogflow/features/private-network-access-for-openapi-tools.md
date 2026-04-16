---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T02:32:45.673Z"
product_name: "Dialogflow"
product_slug: "dialogflow"
feature_name: "Private network access for OpenAPI tools"
feature_slug: "private-network-access-for-openapi-tools"
latest_feature_date: "2024-05-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/handler"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/console-conversational-agents"
keywords:
  - "network"
  - "private"
  - "openapi"
  - "access"
  - "tools"
  - "vertex"
  - "agents"
---

# Private network access for OpenAPI tools

Product: Dialogflow
Coverage: MEDIUM

## Step 02 Summary

Vertex AI Agents OpenAPI tools support private network access.

## Extended Definition

Vertex AI Agents OpenAPI tools support private network access.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/handler](https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/handler)
- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent)
- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/console-conversational-agents](https://docs.cloud.google.com/dialogflow/cx/docs/concept/console-conversational-agents)

## Supporting Pages

### Data store tools \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/handler](https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/handler)
- Source ID: `site-docs-root`
- Final score: 124
- Re-rank relevance: N/A

Evidence snippets:
- See the reference documentation for details. { "toolUse" : { "tool" : "projects/PROJECT ID/locations/LOCATION ID/agents/AGENT ID/tools/TOOL ID" , "action" : "TOOL DISPLAY NAME" , "inputParameters" : [ { "name" : "TOOL DISPLAY NAME input" , "value" : { "query" : "QUERY" } } ], "outputParameters" : [ { "name" : "TOOL DISPLAY NAME output" , "value" : { "answer" : "ANSWER" , "snippets" : [ { "title" : "TITLE" , "text" : "TEXT FROM DATASTORE" , "uri" : "URI OF DATASTORE" } ] } } ] } } (Playbooks-based agents only) Data store tool examples Note: Examples work with playbooks-based agents only.
- Information How to access Snippet of the top identified source of the top answer $sys.func.GET FIELD($sys.func.GET($sys.func.IDENTITY($request.knowledge.sources[0]), 0), "snippet") Title of the top identified source of the top answer $sys.func.GET FIELD($sys.func.GET($sys.func.IDENTITY($request.knowledge.sources[0]), 0), "title") Link of the top identified source of the top answer $sys.func.GET FIELD($sys.func.GET($sys.func.IDENTITY($request.knowledge.sources[0]), 0), "uri") Number of identified sources for the top answer $sys.func.COUNT($sys.func.IDENTITY($request.knowledge.sources[0])) Number of knowledge answers $sys.func.COUNT($request.knowledge.answers) Question corresponding to the top answer (for FAQ data store answers only) $request.knowledge.questions[0] Grounding confidence for the top answer $request.knowledge.grounding confidences[0] Previous arrow back Data stores Next Data store tool settings arrow forward Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- You are automatically redirected to Vertex AI Agent Builder. (New data stores only) Select a data source, then follow the instructions in Vertex AI Agent Builder to configure your data store.
- Home Documentation AI and ML Dialogflow Dialogflow CX Send feedback Data store tools Stay organized with collections Save and categorize content based on your preferences.

### "Conversational Agents console overview \_|\_ Dialogflow CX \_|\_ Google\

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/console-conversational-agents](https://docs.cloud.google.com/dialogflow/cx/docs/concept/console-conversational-agents)
- Source ID: `site-docs-root`
- Final score: 111
- Re-rank relevance: N/A

Evidence snippets:
- Console compatibility Agents previously built with the Dialogflow CX console or the Vertex AI Agent Builder console can be seamlessly accessed by the Conversational Agents console.
- The Conversational Agents console is a new console that includes features from both the Dialogflow CX console and the Vertex AI Agent Builder console.
- All users of the Vertex AI Agent Builder console should start using the Conversational Agents console.
- Home Documentation AI and ML Dialogflow Dialogflow CX Send feedback Conversational Agents console overview Stay organized with collections Save and categorize content based on your preferences.

### Agents \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent)
- Source ID: `site-docs-root`
- Final score: 110
- Re-rank relevance: N/A

Evidence snippets:
- Example: if the source agent refers to a data store named projects/123/locations/eu-west2/collections/default collection/dataStores/myDataStore1 and the App of the target agent is named projects/321/locations/us-east1/collections/default collections/engines/app123 , then the resulting data store reference in the target agent will become: projects/321/locations/us-east1/collections/default collection/dataStores/myDataStore1 Note: in the API and in the contents of the exported data, a Vertex AI Agents App is called a GenAppBuilder Engine.
- Vertex AI Agents Apps : The association to a Vertex AI Agents App remains unchanged in the target agent. (In other words, the value of engine in GenAppBuilderSettings ) This means that data store agents can only be restored into other existing data store agents, because the resulting agent also needs to have an association to a Vertex AI Agents App.
- Vertex AI Agents Data Stores : All references to data stores will be overwritten in the target agent according to the following rules: If the target agent isn't associated with an App, then it's not possible to restore an agent with data store references into it.
- Export and restore an agent Warning: We will no longer export raw value credentials for OpenAPI Tools and Webhooks, starting Aug 15, 2025.

