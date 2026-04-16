---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:02:17.104Z"
product_name: "Vertex AI"
product_slug: "vertex-ai"
feature_name: "Vertex AI Vector Search numeric filtering"
feature_slug: "vertex-ai-vector-search-numeric-filtering"
latest_feature_date: "2023-11-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/docs/vector-search/quickstart"
  - "https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/embeddings-search"
  - "https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/overview"
keywords:
  - "vertex"
  - "ai"
  - "vector"
  - "search"
  - "numeric"
  - "filtering"
  - "now"
  - "supports"
---

# Vertex AI Vector Search numeric filtering

Product: Vertex AI
Coverage: MEDIUM

## Step 02 Summary

Vertex AI Vector Search now supports numeric filtering of vector search results in addition to categorical filtering.

## Extended Definition

Vertex AI Vector Search now supports numeric filtering of vector search results in addition to categorical filtering.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/docs/vector-search/quickstart](https://docs.cloud.google.com/vertex-ai/docs/vector-search/quickstart)
- [https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/embeddings-search](https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/embeddings-search)
- [https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/overview](https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/overview)

## Supporting Pages

### Vector Search quickstart \_|\_ Vertex AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/vector-search/quickstart](https://docs.cloud.google.com/vertex-ai/docs/vector-search/quickstart)
- Source ID: `site-docs-reference-2`
- Final score: 120
- Re-rank relevance: N/A

Evidence snippets:
- To see an example of getting started with Vertex AI Vector Search, run the "Get started with Vertex AI Vector Search" notebook in one of the following environments: Open in Colab Open in Colab Enterprise Open in Vertex AI Workbench View on GitHub In the Vertex AI Vector Search quickstart, learn how to create an index out of a sample dataset from a fictitious ecommerce clothing site.
- The pricing of the Google Cloud services used in this tutorial are available in the following pages: Vertex AI Vector Search Cloud Storage Vertex AI Workbench You can also use the pricing calculator to generate a cost estimate based on your projected usage.
- To learn more about how to create the embeddings from the data on a BigQuery table and store them in a JSON file, see Getting Started with Text Embeddings + Vertex AI Vector Search .
- Home Documentation AI and ML Vertex AI Send feedback Vector Search quickstart Stay organized with collections Save and categorize content based on your preferences.

### Search using embeddings \_|\_ Vertex AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/embeddings-search](https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/embeddings-search)
- Source ID: `site-docs-reference-3`
- Final score: 113
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Search nearest neighbor matches using a public endpoint If you've configured your online store instance to serve feature values using Optimized online serving from a public endpoint, you must do the following to retrieve approximate nearest neighbor matches: Retrieve the public endpoint domain name for the online store Retrieve nearest neighbor matches of an embedding or entity Retrieve the public endpoint domain name for the online store When you create an online store instance for Optimized online serving, Vertex AI Feature Store generates a public endpoint domain name for the online store.
- For online store instances created for Optimized online serving, you can perform a vector similarity search to retrieve a list of semantically similar or related entities, also called approximate nearest neighbors.
- Home Documentation AI and ML Vertex AI Send feedback Search using embeddings Stay organized with collections Save and categorize content based on your preferences.
- For more information about how to create a feature view that supports embeddings, see Configure vector retrieval for a feature view .

### About Vertex AI Feature Store \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/overview](https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/overview)
- Source ID: `site-docs-reference-3`
- Final score: 95
- Re-rank relevance: N/A

Evidence snippets:
- Open in Colab Open in Colab Enterprise View on GitHub Build a GenAI RAG application with Vertex AI Feature Store and BigQuery In this tutorial, you learn how to build a low-latency vector search system for your Gen AI application using BigQuery vector search and Vertex AI Feature Store.
- Using the embedding management capabilities of Vertex AI Feature Store, you can perform vector similarity searches to retrieve entities that are approximate nearest neighbors for a specified entity or embedding value.
- For information about how to perform a vector similarity search in Vertex AI Feature Store, see Perform a vector search for entities .
- Open in Colab Open in Colab Enterprise View on GitHub Vertex AI Feature Store based LLM grounding tutorial In this tutorial, you learn how to chunk user-provided data, and then generate embedding vectors for each chunk using a Large Language Model (LLM) that has embedding generation capabilities.

