---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T02:32:45.695Z"
product_name: "Dialogflow"
product_slug: "dialogflow"
feature_name: "Vertex AI Conversation data stores unstructured CSV support"
feature_slug: "vertex-ai-conversation-data-stores-unstructured-csv-support"
latest_feature_date: "2024-01-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/handler"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/console-conversational-agents"
keywords:
  - "unstructured"
  - "content"
  - "conversation"
  - "stores"
  - "vertex"
---

# Vertex AI Conversation data stores unstructured CSV support

Product: Dialogflow
Coverage: MEDIUM

## Step 02 Summary

Vertex AI Conversation data stores support unstructured CSV content.

## Extended Definition

Vertex AI Conversation data stores support unstructured CSV content.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store](https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store)
- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/handler](https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/handler)
- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/console-conversational-agents](https://docs.cloud.google.com/dialogflow/cx/docs/concept/console-conversational-agents)

## Supporting Pages

### Data stores \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store](https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store)
- Source ID: `site-docs-root`
- Final score: 146
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Unstructured data store Unstructured data stores can contain content in the following formats: HTML PDF TXT CSV Note: CSV files can also be imported as unstructured content.
- For example: { "id" : "d001" , "content" : { "mimeType" : "application/pdf" , "uri" : "gs://example-import/unstructured/first doc.pdf" }, "structData" : { "title" : "First Document" , "url" : "https://internal.example.com/documents/first doc.pdf" } } { "id" : "d002" , "content" : { "mimeType" : "application/pdf" , "uri" : "gs://example-import/unstructured/second doc.pdf" }, "structData" : { "title" : "Second Document" , "url" : "https://internal.example.com/documents/second doc.pdf" } } { "id" : "d003" , "content" : { "mimeType" : "text/html" , "uri" : "gs://example-import/unstructured/mypage.html" }, "structData" : { "title" : "My Page" , "url" : "https://internal.example.com/mypage.html" } } Data store without metadata This type of content has no metadata.
- Home Documentation AI and ML Dialogflow Dialogflow CX Send feedback Data stores Stay organized with collections Save and categorize content based on your preferences.
- Field descriptions: Field Type Description id string Unique identifier for the document. content.mimeType string MIME type of the document. "application/pdf" and "text/html" are supported. content.uri string URI for the document in Cloud Storage. structData string Single line JSON object with optional title and url fields.

### Data store tools \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/handler](https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/handler)
- Source ID: `site-docs-root`
- Final score: 123
- Re-rank relevance: N/A

Evidence snippets:
- For more information see the dataStoreConnections reference . "dataStoreConnections" : [ { "dataStoreType" : "PUBLIC WEB" , "dataStore" : "projects/PROJECT NUMBER/locations/LOCATION ID/collections/default collection/dataStores/DATASTORE ID" }, { "dataStoreType" : "UNSTRUCTURED" , "dataStore" : "projects/PROJECT NUMBER/locations/LOCATION ID/collections/default collection/dataStores/DATASTORE ID" }, { "dataStoreType" : "STRUCTURED" , "dataStore" : "projects/PROJECT NUMBER/locations/LOCATION ID/collections/default collection/dataStores/DATASTORE ID" } ] Data store tool responses might also contain snippets about the content source that was used to generate the response.
- Information How to access Snippet of the top identified source of the top answer $sys.func.GET FIELD($sys.func.GET($sys.func.IDENTITY($request.knowledge.sources[0]), 0), "snippet") Title of the top identified source of the top answer $sys.func.GET FIELD($sys.func.GET($sys.func.IDENTITY($request.knowledge.sources[0]), 0), "title") Link of the top identified source of the top answer $sys.func.GET FIELD($sys.func.GET($sys.func.IDENTITY($request.knowledge.sources[0]), 0), "uri") Number of identified sources for the top answer $sys.func.COUNT($sys.func.IDENTITY($request.knowledge.sources[0])) Number of knowledge answers $sys.func.COUNT($request.knowledge.answers) Question corresponding to the top answer (for FAQ data store answers only) $request.knowledge.questions[0] Grounding confidence for the top answer $request.knowledge.grounding confidences[0] Previous arrow back Data stores Next Data store tool settings arrow forward Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- You are automatically redirected to Vertex AI Agent Builder. (New data stores only) Select a data source, then follow the instructions in Vertex AI Agent Builder to configure your data store.
- Using these data store handlers, your agent can have conversations about the content with your end-users.

### "Conversational Agents console overview \_|\_ Dialogflow CX \_|\_ Google\

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/console-conversational-agents](https://docs.cloud.google.com/dialogflow/cx/docs/concept/console-conversational-agents)
- Source ID: `site-docs-root`
- Final score: 120
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation AI and ML Dialogflow Dialogflow CX Send feedback Conversational Agents console overview Stay organized with collections Save and categorize content based on your preferences.
- Console compatibility Agents previously built with the Dialogflow CX console or the Vertex AI Agent Builder console can be seamlessly accessed by the Conversational Agents console.
- Using the Conversational Agents console, you can create interactive agents that use generative playbooks , generative data stores , and deterministic flows .
- The Conversational Agents console is a new console that includes features from both the Dialogflow CX console and the Vertex AI Agent Builder console.

