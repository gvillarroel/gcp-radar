---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:02:17.082Z"
product_name: "Vertex AI"
product_slug: "vertex-ai"
feature_name: "Vertex AI Vector Search create-empty-index"
feature_slug: "vertex-ai-vector-search-create-empty-index"
latest_feature_date: "2024-03-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/docs/vector-search/quickstart"
  - "https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/create-featureview"
  - "https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_endpoint"
keywords:
  - "vertex"
  - "ai"
  - "vector"
  - "search"
  - "create"
  - "empty"
  - "index"
  - "adds"
---

# Vertex AI Vector Search create-empty-index

Product: Vertex AI
Coverage: MEDIUM

## Step 02 Summary

Adds support for creating a Vector Search index without embedding data at creation time for both batch and streaming use cases.

## Extended Definition

Adds support for creating a Vector Search index without embedding data at creation time for both batch and streaming use cases.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/docs/vector-search/quickstart](https://docs.cloud.google.com/vertex-ai/docs/vector-search/quickstart)
- [https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/create-featureview](https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/create-featureview)
- [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_endpoint](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_endpoint)

## Supporting Pages

### Vector Search quickstart \_|\_ Vertex AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/vector-search/quickstart](https://docs.cloud.google.com/vertex-ai/docs/vector-search/quickstart)
- Source ID: `site-docs-reference-2`
- Final score: 180
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To see an example of getting started with Vertex AI Vector Search, run the "Get started with Vertex AI Vector Search" notebook in one of the following environments: Open in Colab Open in Colab Enterprise Open in Vertex AI Workbench View on GitHub In the Vertex AI Vector Search quickstart, learn how to create an index out of a sample dataset from a fictitious ecommerce clothing site.
- BUCKET URI = f "gs:// { PROJECT ID } -vs-quickstart- { UID } " ! gcloud storage buckets create $ BUCKET URI -- location = $ LOCATION -- project = $ PROJECT ID ! gcloud storage cp "gs://github-repo/data/vs-quickstart/product-embs.json" $ BUCKET URI For using Vector Search to run queries, you also need to copy the embedding file to local directory: ! gcloud storage cp "gs://github-repo/data/vs-quickstart/product-embs.json" . # for query tests Build and deploy a Vector Search index Learn how to create an index, create an index endpoint, and then deploy your index to the endpoint.
- The APIs are available under the aiplatform package of the SDK. init the aiplatform package from google.cloud import aiplatform aiplatform . init ( project = PROJECT ID , location = LOCATION ) Create a MatchingEngineIndex with its create tree ah index function (Matching Engine is the previous name of Vector Search). create Index my index = aiplatform .
- To learn more about how to create the embeddings from the data on a BigQuery table and store them in a JSON file, see Getting Started with Text Embeddings + Vertex AI Vector Search .

### Create a feature view instance \_|\_ Vertex AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/create-featureview](https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/create-featureview)
- Source ID: `site-docs-reference-3`
- Final score: 142
- Re-rank relevance: N/A

Evidence snippets:
- To specify multiple entity ID columns, specify the column names in the following format: ["entity id column 1 name", "entity id column 2 name", ...] . embedding column : The name of the column containing the source data to create the index for vector search.
- EMBEDDING COLUMN : The name of the column containing the source data to create the index for vector search.
- EMBEDDING COLUMN : The name of the column containing the source data to create the index for vector search.
- You can configure vector retrieval for a feature view within an online store created for Optimized online serving by using the FeatureView.index config parameter.

### "MCP Tools Reference: aiplatform.googleapis.com \_|\_ Vertex AI \_|\_ Google\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_endpoint](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_endpoint)
- Source ID: `site-api-reference-2`
- Final score: 134
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Using a blurred baseline instead of zero (black image) is motivated by the BlurIG approach explained here: https://arxiv.org/abs/2004.03383 Examples JSON representation { "gcsSource" : { object ( GcsSource ) } , "neighborCount" : integer , // Union field source can be only one of the following: "exampleGcsSource" : { object ( ExampleGcsSource ) } // End of list of possible types for union field source . // Union field config can be only one of the following: "nearestNeighborSearchConfig" : value , "presets" : { object ( Presets ) } // End of list of possible types for union field config . } Fields gcsSource object ( GcsSource ) The Cloud Storage locations that contain the instances to be indexed for approximate nearest neighbor search. neighborCount integer The number of neighbors to return when querying for examples.
- Union field config . config can be only one of the following: nearestNeighborSearchConfig value ( Value format) The full configuration for the generated index, the semantics are the same as metadata and should match NearestNeighborSearchConfig . presets object ( Presets ) Simplified preset configuration, which automatically sets configuration values based on the desired query speed-precision trade-off and modality.
- Tool: create endpoint Creates a Vertex AI Endpoint resource within a Google Cloud project.
- The baseline of the empty feature is chosen by Vertex AI.

