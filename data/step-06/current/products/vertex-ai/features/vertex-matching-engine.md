---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:02:17.184Z"
product_name: "Vertex AI"
product_slug: "vertex-ai"
feature_name: "Vertex Matching Engine"
feature_slug: "vertex-matching-engine"
latest_feature_date: "2021-05-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/docs/vector-search/quickstart"
  - "https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/count_tokens"
  - "https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/overview"
keywords:
  - "vertex"
  - "matching"
  - "engine"
  - "vector"
  - "similarity"
  - "search"
  - "capability"
  - "within"
---

# Vertex Matching Engine

Product: Vertex AI
Coverage: MEDIUM

## Step 02 Summary

Vertex Matching Engine is a vector similarity search capability within Vertex AI.

## Extended Definition

Vertex Matching Engine is a vector similarity search capability within Vertex AI.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/docs/vector-search/quickstart](https://docs.cloud.google.com/vertex-ai/docs/vector-search/quickstart)
- [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/count_tokens](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/count_tokens)
- [https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/overview](https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/overview)

## Supporting Pages

### Vector Search quickstart \_|\_ Vertex AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/vector-search/quickstart](https://docs.cloud.google.com/vertex-ai/docs/vector-search/quickstart)
- Source ID: `site-docs-reference-2`
- Final score: 164
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The APIs are available under the aiplatform package of the SDK. init the aiplatform package from google.cloud import aiplatform aiplatform . init ( project = PROJECT ID , location = LOCATION ) Create a MatchingEngineIndex with its create tree ah index function (Matching Engine is the previous name of Vector Search). create Index my index = aiplatform .
- To see an example of getting started with Vertex AI Vector Search, run the "Get started with Vertex AI Vector Search" notebook in one of the following environments: Open in Colab Open in Colab Enterprise Open in Vertex AI Workbench View on GitHub In the Vertex AI Vector Search quickstart, learn how to create an index out of a sample dataset from a fictitious ecommerce clothing site.
- The pricing of the Google Cloud services used in this tutorial are available in the following pages: Vertex AI Vector Search Cloud Storage Vertex AI Workbench You can also use the pricing calculator to generate a cost estimate based on your projected usage.
- To learn more about how to create the embeddings from the data on a BigQuery table and store them in a JSON file, see Getting Started with Text Embeddings + Vertex AI Vector Search .

### "MCP Tools Reference: aiplatform.googleapis.com \_|\_ Vertex AI \_|\_ Google\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/count_tokens](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/count_tokens)
- Source ID: `site-api-reference`
- Final score: 132
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information on filtering, see Filtering VertexRagStore JSON representation { "ragCorpora" : [ string ] , "ragResources" : [ { object ( RagResource ) } ] , "ragRetrievalConfig" : { object ( RagRetrievalConfig ) } , "storeContext" : boolean , // Union field similarity top k can be only one of the following: "similarityTopK" : integer // End of list of possible types for union field similarity top k . // Union field vector distance threshold can be only one of the following: "vectorDistanceThreshold" : number // End of list of possible types for union field vector distance threshold . } Fields ragCorpora[] (deprecated) string This item is deprecated!
- VertexAISearch JSON representation { "datastore" : string , "engine" : string , "maxResults" : integer , "filter" : string , "dataStoreSpecs" : [ { object ( DataStoreSpec ) } ] } Fields datastore string Optional.
- Fully-qualified Vertex AI Search engine resource ID.
- PropertiesEntry JSON representation { "key" : string , "value" : { object ( Schema ) } } Fields key string value object ( Schema ) DefsEntry JSON representation { "key" : string , "value" : { object ( Schema ) } } Fields key string value object ( Schema ) Retrieval JSON representation { "disableAttribution" : boolean , // Union field source can be only one of the following: "vertexAiSearch" : { object ( VertexAISearch ) } , "vertexRagStore" : { object ( VertexRagStore ) } // End of list of possible types for union field source . } Fields disableAttribution (deprecated) boolean This item is deprecated!

### About Vertex AI Feature Store \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/overview](https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/overview)
- Source ID: `site-docs-reference-3`
- Final score: 123
- Re-rank relevance: N/A

Evidence snippets:
- Using the embedding management capabilities of Vertex AI Feature Store, you can perform vector similarity searches to retrieve entities that are approximate nearest neighbors for a specified entity or embedding value.
- For information about how to perform a vector similarity search in Vertex AI Feature Store, see Perform a vector search for entities .
- Open in Colab Open in Colab Enterprise View on GitHub Build a GenAI RAG application with Vertex AI Feature Store and BigQuery In this tutorial, you learn how to build a low-latency vector search system for your Gen AI application using BigQuery vector search and Vertex AI Feature Store.
- Vertex AI Feature Store terms Terms related to feature engineering feature engineering Feature engineering is the process of transforming raw machine learning (ML) data into features that can be used to train ML models or to make inferences. feature In machine learning (ML), a feature is a characteristic or attribute of an instance or entity that's used as an input to train an ML model or to make inferences. feature value A feature value corresponds to the actual and measurable value of a feature (attribute) of an instance or entity.

