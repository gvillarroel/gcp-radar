---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:17:30.369Z"
product_name: "Dialogflow"
product_slug: "dialogflow"
feature_name: "Data store agents generative model selection"
feature_slug: "data-store-agents-generative-model-selection"
latest_feature_date: "2023-12-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/settings"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/handler"
keywords:
  - "store"
  - "agents"
  - "generative"
  - "model"
  - "selection"
  - "selecting"
---

# Data store agents generative model selection

Product: Dialogflow
Coverage: MEDIUM

## Step 02 Summary

Data store agents support selecting the generative model.

## Extended Definition

Data store agents support selecting the generative model.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/settings](https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/settings)
- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings)
- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/handler](https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/handler)

## Supporting Pages

### Data store tool settings \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/settings](https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/settings)
- Source ID: `site-docs-root`
- Final score: 155
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Select summarization model You can select the generative model used by a data store agent for the summarization generative request.
- You can select the generative model used by a data store agent for the rewriter generative request.
- Tool settings (Conversational Agents console only) Selecting an option from the Tool settings drop-down menu automatically affects which other tool configurations are available.
- It is optimized for both voice and text with optimized latency gemini-2.5-flash GA Gemini 2.5 flash gemini-2.5-flash-lite GA Gemini 2.5 flash lite gemini-2.0-flash-001 GA Gemini 2.0 flash gemini-2.0-flash-lite-001 GA Gemini 2.0 flash lite All listed models are available in all supported languages and supported regions .

### Agent settings \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings)
- Source ID: `site-docs-root`
- Final score: 152
- Re-rank relevance: N/A

Evidence snippets:
- GenAI The following generative AI settings are available for agent apps: Generative model selection Select the generative model that agents should use by default.
- Generative AI settings The following generative AI settings are available: General Generative model selection link Select the model used by generative features.
- Generative model selection Select the model used by generative features.
- You may enable Custom voice for your agent by selecting the custom voice option from the voice selection dropbox and specifying the custom voice name in the corresponding field.

### Data store tools \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/handler](https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/handler)
- Source ID: `site-docs-root`
- Final score: 135
- Re-rank relevance: N/A

Evidence snippets:
- See the reference documentation for details. { "toolUse" : { "tool" : "projects/PROJECT ID/locations/LOCATION ID/agents/AGENT ID/tools/TOOL ID" , "action" : "TOOL DISPLAY NAME" , "inputParameters" : [ { "name" : "TOOL DISPLAY NAME input" , "value" : { "query" : "QUERY" } } ], "outputParameters" : [ { "name" : "TOOL DISPLAY NAME output" , "value" : { "answer" : "ANSWER" , "snippets" : [ { "title" : "TITLE" , "text" : "TEXT FROM DATASTORE" , "uri" : "URI OF DATASTORE" } ] } } ] } } (Playbooks-based agents only) Data store tool examples Note: Examples work with playbooks-based agents only.
- Create a data store tool Open the Conversational Agents console and choose a Google Cloud project.
- Information How to access Snippet of the top identified source of the top answer $sys.func.GET FIELD($sys.func.GET($sys.func.IDENTITY($request.knowledge.sources[0]), 0), "snippet") Title of the top identified source of the top answer $sys.func.GET FIELD($sys.func.GET($sys.func.IDENTITY($request.knowledge.sources[0]), 0), "title") Link of the top identified source of the top answer $sys.func.GET FIELD($sys.func.GET($sys.func.IDENTITY($request.knowledge.sources[0]), 0), "uri") Number of identified sources for the top answer $sys.func.COUNT($sys.func.IDENTITY($request.knowledge.sources[0])) Number of knowledge answers $sys.func.COUNT($request.knowledge.answers) Question corresponding to the top answer (for FAQ data store answers only) $request.knowledge.questions[0] Grounding confidence for the top answer $request.knowledge.grounding confidences[0] Previous arrow back Data stores Next Data store tool settings arrow forward Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- For more information see the dataStoreConnections reference . "dataStoreConnections" : [ { "dataStoreType" : "PUBLIC WEB" , "dataStore" : "projects/PROJECT NUMBER/locations/LOCATION ID/collections/default collection/dataStores/DATASTORE ID" }, { "dataStoreType" : "UNSTRUCTURED" , "dataStore" : "projects/PROJECT NUMBER/locations/LOCATION ID/collections/default collection/dataStores/DATASTORE ID" }, { "dataStoreType" : "STRUCTURED" , "dataStore" : "projects/PROJECT NUMBER/locations/LOCATION ID/collections/default collection/dataStores/DATASTORE ID" } ] Data store tool responses might also contain snippets about the content source that was used to generate the response.

