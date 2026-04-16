---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:02:17.071Z"
product_name: "Vertex AI"
product_slug: "vertex-ai"
feature_name: "Vertex AI Vector Search sparse embeddings"
feature_slug: "vertex-ai-vector-search-sparse-embeddings"
latest_feature_date: "2024-12-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/docs/vector-search/quickstart"
  - "https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/embeddings-search"
  - "https://docs.cloud.google.com/vertex-ai/docs/explainable-ai/configuring-explanations-example-based"
keywords:
  - "vertex"
  - "ai"
  - "vector"
  - "search"
  - "sparse"
  - "embeddings"
  - "now"
  - "supports"
---

# Vertex AI Vector Search sparse embeddings

Product: Vertex AI
Coverage: MEDIUM

## Step 02 Summary

Vector Search now supports sparse embeddings as part of its search capabilities.

## Extended Definition

Vector Search now supports sparse embeddings as part of its search capabilities.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/docs/vector-search/quickstart](https://docs.cloud.google.com/vertex-ai/docs/vector-search/quickstart)
- [https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/embeddings-search](https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/embeddings-search)
- [https://docs.cloud.google.com/vertex-ai/docs/explainable-ai/configuring-explanations-example-based](https://docs.cloud.google.com/vertex-ai/docs/explainable-ai/configuring-explanations-example-based)

## Supporting Pages

### Vector Search quickstart \_|\_ Vertex AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/vector-search/quickstart](https://docs.cloud.google.com/vertex-ai/docs/vector-search/quickstart)
- Source ID: `site-docs-reference-2`
- Final score: 159
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To learn more about how to create the embeddings from the data on a BigQuery table and store them in a JSON file, see Getting Started with Text Embeddings + Vertex AI Vector Search .
- To see an example of getting started with Vertex AI Vector Search, run the "Get started with Vertex AI Vector Search" notebook in one of the following environments: Open in Colab Open in Colab Enterprise Open in Vertex AI Workbench View on GitHub In the Vertex AI Vector Search quickstart, learn how to create an index out of a sample dataset from a fictitious ecommerce clothing site.
- The pricing of the Google Cloud services used in this tutorial are available in the following pages: Vertex AI Vector Search Cloud Storage Vertex AI Workbench You can also use the pricing calculator to generate a cost estimate based on your projected usage.
- Home Documentation AI and ML Vertex AI Send feedback Vector Search quickstart Stay organized with collections Save and categorize content based on your preferences.

### Search using embeddings \_|\_ Vertex AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/embeddings-search](https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/embeddings-search)
- Source ID: `site-docs-reference-3`
- Final score: 155
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation AI and ML Vertex AI Send feedback Search using embeddings Stay organized with collections Save and categorize content based on your preferences.
- For more information about how to create a feature view that supports embeddings, see Configure vector retrieval for a feature view .
- To efficiently store and serve embeddings, use the purpose-built Vector Search .
- Search nearest neighbor matches using a public endpoint If you've configured your online store instance to serve feature values using Optimized online serving from a public endpoint, you must do the following to retrieve approximate nearest neighbor matches: Retrieve the public endpoint domain name for the online store Retrieve nearest neighbor matches of an embedding or entity Retrieve the public endpoint domain name for the online store When you create an online store instance for Optimized online serving, Vertex AI Feature Store generates a public endpoint domain name for the online store.

### "Configure example-based explanations \_|\_ Vertex AI \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/explainable-ai/configuring-explanations-example-based](https://docs.cloud.google.com/vertex-ai/docs/explainable-ai/configuring-explanations-example-based)
- Source ID: `site-docs-reference-3`
- Final score: 116
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This step includes two time consuming operations: running a batchPredictionJob to generate the latent representations (embeddings) and using Vector Search to index them for nearest neighbor search.
- The following table summarizes the parameters that can be overridden for an example-based explanation request: Property Name Property Value Description neighborCount int32 The number of examples to return as explanation crowdingCount int32 Maximum number of examples to return with the same crowding tag allow String Array The tags that are allowed for explanations to have deny String Array The tags that are not allowed for explanations to have The Vector Search Filtering describes these parameters in more details.
- During serving, each shard is served on a separate node and scales independently. distanceMeasureType DistanceMeasureType The distance measure used in nearest neighbor search. featureNormType FeatureNormType Type of normalization to be carried out on each vector. algorithmConfig oneOf: TreeAhConfig BruteForceConfig The configuration for the algorithms that Vector Search uses for efficient search.
- For more information, see this blog Scaling deep retrieval with TensorFlow Recommenders and Vector Search BruteForceConfig : This option implements the standard linear search in the database for each query.

