---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:17:30.302Z"
product_name: "Dialogflow"
product_slug: "dialogflow"
feature_name: "Microsoft Entra ID data store source"
feature_slug: "microsoft-entra-id-data-store-source"
latest_feature_date: "2025-07-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/handler"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/settings"
keywords:
  - "microsoft"
  - "entra"
  - "id"
  - "store"
  - "source"
  - "available"
  - "private"
  - "ga"
---

# Microsoft Entra ID data store source

Product: Dialogflow
Coverage: MEDIUM

## Step 02 Summary

This data store source is available in private GA for Conversational Agents data stores; This data store source is available in private GA for Conversational Agents data stores.

## Extended Definition

This data store source is available in private GA for Conversational Agents data stores; This data store source is available in private GA for Conversational Agents data stores.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store](https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store)
- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/handler](https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/handler)
- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/settings](https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/settings)

## Supporting Pages

### Data stores \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store](https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store)
- Source ID: `site-docs-root`
- Final score: 161
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To see a list of available sources and to request access, see the additional data store sources section on this page.
- Supported regions For supported regions, see the region reference . (Restricted access) Additional data store sources Additional data store types are listed in the following table.
- Data store sources There are different sources that you can supply for your data: Website URLs : Automatically crawl website content from a list of domains or web pages.
- Restricted access data store sources Google offers many additional first- and third-party data store sources as a restricted access feature.

### Data store tools \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/handler](https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/handler)
- Source ID: `site-docs-root`
- Final score: 123
- Re-rank relevance: N/A

Evidence snippets:
- Information How to access Snippet of the top identified source of the top answer $sys.func.GET FIELD($sys.func.GET($sys.func.IDENTITY($request.knowledge.sources[0]), 0), "snippet") Title of the top identified source of the top answer $sys.func.GET FIELD($sys.func.GET($sys.func.IDENTITY($request.knowledge.sources[0]), 0), "title") Link of the top identified source of the top answer $sys.func.GET FIELD($sys.func.GET($sys.func.IDENTITY($request.knowledge.sources[0]), 0), "uri") Number of identified sources for the top answer $sys.func.COUNT($sys.func.IDENTITY($request.knowledge.sources[0])) Number of knowledge answers $sys.func.COUNT($request.knowledge.answers) Question corresponding to the top answer (for FAQ data store answers only) $request.knowledge.questions[0] Grounding confidence for the top answer $request.knowledge.grounding confidences[0] Previous arrow back Data stores Next Data store tool settings arrow forward Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- For more information see the dataStoreConnections reference . "dataStoreConnections" : [ { "dataStoreType" : "PUBLIC WEB" , "dataStore" : "projects/PROJECT NUMBER/locations/LOCATION ID/collections/default collection/dataStores/DATASTORE ID" }, { "dataStoreType" : "UNSTRUCTURED" , "dataStore" : "projects/PROJECT NUMBER/locations/LOCATION ID/collections/default collection/dataStores/DATASTORE ID" }, { "dataStoreType" : "STRUCTURED" , "dataStore" : "projects/PROJECT NUMBER/locations/LOCATION ID/collections/default collection/dataStores/DATASTORE ID" } ] Data store tool responses might also contain snippets about the content source that was used to generate the response.
- You are automatically redirected to Vertex AI Agent Builder. (New data stores only) Select a data source, then follow the instructions in Vertex AI Agent Builder to configure your data store.
- In the form that appears, you can configure how many source links and citations can appear in the response, as well as specify the fallback behavior if the data store response is empty.

### Data store tool settings \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/settings](https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/settings)
- Source ID: `site-docs-root`
- Final score: 119
- Re-rank relevance: N/A

Evidence snippets:
- The found sources are rendered in a specific format: [1] title of first source content of first source [2] title of second source content of second source $end-user-metadata : Information about the user sending the query is rendered in the following format: The following additional information is available about the human: { "key1": "value1", "key2": "value2", ... } $conversation : The conversation history is rendered in the following format: Human: user's first query AGENT: answer to user's first query Human: user's second query AGENT: answer to user's second query ${conversation USER:"<user prefix>" AGENT:"<agent prefix>" TURNS:<turn count>} : A parameterized version of the $conversation placeholder.
- The following data store tool configuration settings are available.
- The conversation history is rendered as: Human says: user's first query Agent says: answer to user's first query $end-user-metadata : Information about the user sending the query is rendered in the following format: The following additional information is available about the human: { "key1": "value1", "key2": "value2", ... } For example: Your goal is to perform a search query to help the AI assistant respond to the human's last statement.
- Follow these guidelines: + Answer the Human's query and make sure you mention all relevant details from the sources, using exactly the same words as the sources if possible. + The answer must be based only on the sources and not introduce any additional information. + All numbers, like price, date, time or phone numbers must appear exactly as they are in the sources. + Give as comprehensive answer as possible given the sources.

