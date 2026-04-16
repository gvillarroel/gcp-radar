---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T02:32:45.658Z"
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
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store"
keywords:
  - "optimization"
  - "playbooks"
  - "tools"
  - "used"
  - "store"
---

# RAG optimization for data store tools

Product: Dialogflow
Coverage: MEDIUM

## Step 02 Summary

Data store tools used by Dialogflow playbooks can be optimized for retrieval-augmented generation performance.

## Extended Definition

Data store tools used by Dialogflow playbooks can be optimized for retrieval-augmented generation performance.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/handler](https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/handler)
- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/performance](https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/performance)
- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store](https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store)

## Supporting Pages

### Data store tools \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/handler](https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/handler)
- Source ID: `site-docs-root`
- Final score: 136
- Re-rank relevance: N/A

Evidence snippets:
- See the reference documentation for details. { "toolUse" : { "tool" : "projects/PROJECT ID/locations/LOCATION ID/agents/AGENT ID/tools/TOOL ID" , "action" : "TOOL DISPLAY NAME" , "inputParameters" : [ { "name" : "TOOL DISPLAY NAME input" , "value" : { "query" : "QUERY" } } ], "outputParameters" : [ { "name" : "TOOL DISPLAY NAME output" , "value" : { "answer" : "ANSWER" , "snippets" : [ { "title" : "TITLE" , "text" : "TEXT FROM DATASTORE" , "uri" : "URI OF DATASTORE" } ] } } ] } } (Playbooks-based agents only) Data store tool examples Note: Examples work with playbooks-based agents only.
- For more information see the dataStoreConnections reference . "dataStoreConnections" : [ { "dataStoreType" : "PUBLIC WEB" , "dataStore" : "projects/PROJECT NUMBER/locations/LOCATION ID/collections/default collection/dataStores/DATASTORE ID" }, { "dataStoreType" : "UNSTRUCTURED" , "dataStore" : "projects/PROJECT NUMBER/locations/LOCATION ID/collections/default collection/dataStores/DATASTORE ID" }, { "dataStoreType" : "STRUCTURED" , "dataStore" : "projects/PROJECT NUMBER/locations/LOCATION ID/collections/default collection/dataStores/DATASTORE ID" } ] Data store tool responses might also contain snippets about the content source that was used to generate the response.
- Home Documentation AI and ML Dialogflow Dialogflow CX Send feedback Data store tools Stay organized with collections Save and categorize content based on your preferences.
- Data store tools: Console This section walks you through the process of adding a data store tool to an agent and configuring it in a fulfillment.

### "Data store performance improvements \_|\_ Dialogflow CX \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/performance](https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/performance)
- Source ID: `site-docs-root`
- Final score: 112
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Optimization of data store tools used by Playbooks This setting accelerates a data store's RAG response and improves latency by not rewriting the user query nor dynamically populating tool parameters.
- This feature is only available for data store tools.
- Data store search configuration For more information about fine-tuning your data store search results, see the data store search configuration pa Previous arrow back Data store tool settings Next Data store hybrid agents arrow forward Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Handle undesired intent matches If your agent is matching intents when it should be using a data store handler, you can try the following to correct this: Delete or modify training phrases that are vague, so that all of your training phrases precisely handle the desired intention and do not conflict with your data store content.

### Data stores \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store](https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store)
- Source ID: `site-docs-root`
- Final score: 105
- Re-rank relevance: N/A

Evidence snippets:
- Data stores are used by data store tools to find answers for end-user's questions from your data.
- Previous arrow back Playbook evaluations Next Data store tools arrow forward Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- What's next For instructions about creating a data store and using it with an agent, see the data store tools documentation.
- For example: { "id" : "d001" , "content" : { "mimeType" : "application/pdf" , "uri" : "gs://example-import/unstructured/first doc.pdf" }, "structData" : { "title" : "First Document" , "url" : "https://internal.example.com/documents/first doc.pdf" } } { "id" : "d002" , "content" : { "mimeType" : "application/pdf" , "uri" : "gs://example-import/unstructured/second doc.pdf" }, "structData" : { "title" : "Second Document" , "url" : "https://internal.example.com/documents/second doc.pdf" } } { "id" : "d003" , "content" : { "mimeType" : "text/html" , "uri" : "gs://example-import/unstructured/mypage.html" }, "structData" : { "title" : "My Page" , "url" : "https://internal.example.com/mypage.html" } } Data store without metadata This type of content has no metadata.

