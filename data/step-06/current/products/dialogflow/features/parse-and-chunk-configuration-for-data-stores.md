---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:17:30.359Z"
product_name: "Dialogflow"
product_slug: "dialogflow"
feature_name: "Parse and chunk configuration for data stores"
feature_slug: "parse-and-chunk-configuration-for-data-stores"
latest_feature_date: "2024-04-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/search-configure"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/handler"
keywords:
  - "parse"
  - "chunk"
  - "configuration"
  - "stores"
  - "vertex"
  - "ai"
  - "conversation"
  - "configurable"
---

# Parse and chunk configuration for data stores

Product: Dialogflow
Coverage: MEDIUM

## Step 02 Summary

Vertex AI Conversation data stores support configurable parsing and chunking behavior.

## Extended Definition

Vertex AI Conversation data stores support configurable parsing and chunking behavior.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store](https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store)
- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/search-configure](https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/search-configure)
- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/handler](https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/handler)

## Supporting Pages

### Data stores \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store](https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store)
- Source ID: `site-docs-root`
- Final score: 135
- Re-rank relevance: N/A

Evidence snippets:
- Parse and chunk configuration Depending on the data source, you might be able to configure parse and chunk settings as defined by Vertex AI Search.
- View data in the simulator To display tracing and execution data in the agent data, expand the details about a conversation turn by clicking on the expansion caret to the right of the agent's response.
- View tracing data in other locations If the conversational agent is configured with conversation history logging , you can also view data store tracing in Conversation History .
- Unstructured data store Unstructured data stores can contain content in the following formats: HTML PDF TXT CSV Note: CSV files can also be imported as unstructured content.

### Data store search configuration \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/search-configure](https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/search-configure)
- Source ID: `site-docs-root`
- Final score: 119
- Re-rank relevance: N/A

Evidence snippets:
- JSON of this format { "condition" : "uri: ANY(\"http://www.example.com/docs/$session.params.doc id\")" , "boost" : 0.5 } Example API input: If you are calling the API directly, you must provide ConditionBoostSpecs in a full SearchConfig object.The following search configuration describes a boost spec: "searchConfig" : { "boostSpecs" : [ { "dataStores" : [ "DATASTORE ID" ], "spec" : [ { "conditionBoostSpecs" : { "condition" : "CONDITION" , "boost" : "1.0" } } ] } ] } Note: DATASTORE ID is the full name of the data store: projects/your project id/locations/your location/collections/your collection name/dataStores/your datastore name , CONDITION must follow the Vertex AI Search's filter expression syntax , and the boost value must be between -1.0 and 1.0.
- In this example, the filter only returns documents with numeric field greater than or equal to the value of $session.params.min value AND where stock availability is "IN STOCK" . "numeric field >= $session.params.min value AND stock availability: ANY(\"IN STOCK\")" Example API filter configuration: If you are calling the API directly, you must provide filter strings in a full SearchConfig object: "searchConfig" : { "filterSpecs" : [ { "dataStores" : [ "DATASTORE ID" ], "filter" : "CONDITION" } ] } Note: DATASTORE ID is the full name of the data store: projects/your project id/locations/your location/collections/your collection name/dataStores/your datastore name , and CONDITION must follow the Vertex AI Search's filter expression syntax .
- Always test your configurations thoroughly by simulating conversations that trigger different session parameters and end-user metadata values.
- Console configuration Open the Conversational Agents console and choose a Google Cloud project.

### Data store tools \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/handler](https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/handler)
- Source ID: `site-docs-root`
- Final score: 108
- Re-rank relevance: N/A

Evidence snippets:
- You are automatically redirected to Vertex AI Agent Builder. (New data stores only) Select a data source, then follow the instructions in Vertex AI Agent Builder to configure your data store.
- Apps with both chunked and non-chunked data stores are not supported.
- Information How to access Snippet of the top identified source of the top answer $sys.func.GET FIELD($sys.func.GET($sys.func.IDENTITY($request.knowledge.sources[0]), 0), "snippet") Title of the top identified source of the top answer $sys.func.GET FIELD($sys.func.GET($sys.func.IDENTITY($request.knowledge.sources[0]), 0), "title") Link of the top identified source of the top answer $sys.func.GET FIELD($sys.func.GET($sys.func.IDENTITY($request.knowledge.sources[0]), 0), "uri") Number of identified sources for the top answer $sys.func.COUNT($sys.func.IDENTITY($request.knowledge.sources[0])) Number of knowledge answers $sys.func.COUNT($request.knowledge.answers) Question corresponding to the top answer (for FAQ data store answers only) $request.knowledge.questions[0] Grounding confidence for the top answer $request.knowledge.grounding confidences[0] Previous arrow back Data stores Next Data store tool settings arrow forward Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- For more information see the dataStoreConnections reference . "dataStoreConnections" : [ { "dataStoreType" : "PUBLIC WEB" , "dataStore" : "projects/PROJECT NUMBER/locations/LOCATION ID/collections/default collection/dataStores/DATASTORE ID" }, { "dataStoreType" : "UNSTRUCTURED" , "dataStore" : "projects/PROJECT NUMBER/locations/LOCATION ID/collections/default collection/dataStores/DATASTORE ID" }, { "dataStoreType" : "STRUCTURED" , "dataStore" : "projects/PROJECT NUMBER/locations/LOCATION ID/collections/default collection/dataStores/DATASTORE ID" } ] Data store tool responses might also contain snippets about the content source that was used to generate the response.

