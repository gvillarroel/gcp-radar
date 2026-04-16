---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:02:17.175Z"
product_name: "Vertex AI"
product_slug: "vertex-ai"
feature_name: "Vertex Matching Engine Two Tower built-in algorithm"
feature_slug: "vertex-matching-engine-two-tower-built-in-algorithm"
latest_feature_date: "2021-08-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/count_tokens"
  - "https://docs.cloud.google.com/vertex-ai/docs/vector-search/quickstart"
  - "https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_delete_notebook_runtime"
keywords:
  - "vertex"
  - "matching"
  - "engine"
  - "two"
  - "tower"
  - "built"
  - "algorithm"
  - "was"
---

# Vertex Matching Engine Two Tower built-in algorithm

Product: Vertex AI
Coverage: MEDIUM

## Step 02 Summary

The Two Tower built-in algorithm was introduced as a preview tool for creating embeddings for use with Vertex Matching Engine.

## Extended Definition

The Two Tower built-in algorithm was introduced as a preview tool for creating embeddings for use with Vertex Matching Engine.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/count_tokens](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/count_tokens)
- [https://docs.cloud.google.com/vertex-ai/docs/vector-search/quickstart](https://docs.cloud.google.com/vertex-ai/docs/vector-search/quickstart)
- [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_delete_notebook_runtime](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_delete_notebook_runtime)

## Supporting Pages

### "MCP Tools Reference: aiplatform.googleapis.com \_|\_ Vertex AI \_|\_ Google\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/count_tokens](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/count_tokens)
- Source ID: `site-api-reference`
- Final score: 76
- Re-rank relevance: N/A

Evidence snippets:
- VertexAISearch JSON representation { "datastore" : string , "engine" : string , "maxResults" : integer , "filter" : string , "dataStoreSpecs" : [ { object ( DataStoreSpec ) } ] } Fields datastore string Optional.
- Fully-qualified Vertex AI Search engine resource ID.
- For more information on filtering, see Filtering VertexRagStore JSON representation { "ragCorpora" : [ string ] , "ragResources" : [ { object ( RagResource ) } ] , "ragRetrievalConfig" : { object ( RagRetrievalConfig ) } , "storeContext" : boolean , // Union field similarity top k can be only one of the following: "similarityTopK" : integer // End of list of possible types for union field similarity top k . // Union field vector distance threshold can be only one of the following: "vectorDistanceThreshold" : number // End of list of possible types for union field vector distance threshold . } Fields ragCorpora[] (deprecated) string This item is deprecated!
- PropertiesEntry JSON representation { "key" : string , "value" : { object ( Schema ) } } Fields key string value object ( Schema ) DefsEntry JSON representation { "key" : string , "value" : { object ( Schema ) } } Fields key string value object ( Schema ) Retrieval JSON representation { "disableAttribution" : boolean , // Union field source can be only one of the following: "vertexAiSearch" : { object ( VertexAISearch ) } , "vertexRagStore" : { object ( VertexRagStore ) } // End of list of possible types for union field source . } Fields disableAttribution (deprecated) boolean This item is deprecated!

### "MCP Tools Reference: aiplatform.googleapis.com \_|\_ Vertex AI \_|\_ Google\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_delete_notebook_runtime](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_delete_notebook_runtime)
- Source ID: `site-api-reference`
- Final score: 72
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation AI and ML Vertex AI Reference Send feedback MCP Tools Reference: aiplatform.googleapis.com Stay organized with collections Save and categorize content based on your preferences.

### Vector Search quickstart \_|\_ Vertex AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/vector-search/quickstart](https://docs.cloud.google.com/vertex-ai/docs/vector-search/quickstart)
- Source ID: `site-docs-reference-2`
- Final score: 72
- Re-rank relevance: N/A

Evidence snippets:
- Enable APIs Run the following command to enable APIs for Compute Engine, Vertex AI, and Cloud Storage with this Google Cloud project. ! gcloud services enable compute.googleapis.com aiplatform.googleapis.com storage.googleapis.com --project { PROJECT ID } Prepare the sample data In this tutorial, we use the TheLook dataset that has a products table with about 5,000 rows of synthetic product data for a fictitious ecommerce clothing site.
- The APIs are available under the aiplatform package of the SDK. init the aiplatform package from google.cloud import aiplatform aiplatform . init ( project = PROJECT ID , location = LOCATION ) Create a MatchingEngineIndex with its create tree ah index function (Matching Engine is the previous name of Vector Search). create Index my index = aiplatform .
- MatchingEngineIndex . create tree ah index ( display name = f "vs-quickstart-index- { UID } " , contents delta uri = BUCKET URI , dimensions = 768 , approximate neighbors count = 100 , ) The MatchingEngineIndex.create tree ah index() method builds an index.
- MatchingEngineIndexEndpoint ( my index endpoint id ) Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

