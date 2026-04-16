---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:02:17.086Z"
product_name: "Vertex AI"
product_slug: "vertex-ai"
feature_name: "Multimodal video embeddings"
feature_slug: "multimodal-video-embeddings"
latest_feature_date: "2024-02-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/docs/beginner/bqml"
  - "https://docs.cloud.google.com/vertex-ai/docs/deprecations"
  - "https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/embeddings-search"
keywords:
  - "multimodal"
  - "video"
  - "embeddings"
  - "vertex"
  - "ai"
  - "made"
  - "generally"
  - "available"
---

# Multimodal video embeddings

Product: Vertex AI
Coverage: MEDIUM

## Step 02 Summary

Vertex AI made video embeddings generally available through the multimodalembedding model.

## Extended Definition

Vertex AI made video embeddings generally available through the multimodalembedding model.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/docs/beginner/bqml](https://docs.cloud.google.com/vertex-ai/docs/beginner/bqml)
- [https://docs.cloud.google.com/vertex-ai/docs/deprecations](https://docs.cloud.google.com/vertex-ai/docs/deprecations)
- [https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/embeddings-search](https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/embeddings-search)

## Supporting Pages

### Vertex AI deprecations \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/deprecations](https://docs.cloud.google.com/vertex-ai/docs/deprecations)
- Source ID: `site-docs-reference-3`
- Final score: 80
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Legacy AutoML Video Intelligence January 23, 2023 July 31, 2024 Migrate to Vertex AI , which includes all functionality of legacy AutoML Video Intelligence as well as new features.
- Training or updating models for Vertex AI AutoML for Text classification, entity extraction, and sentiment analysis objectives will no longer be available.
- You will have full control over these VMs, but they won't be supported or available through Vertex AI Workbench.
- All the functionality of legacy Vertex AI and new features are available on the Vertex AI platform.

### Vertex AI for BigQuery users \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/beginner/bqml](https://docs.cloud.google.com/vertex-ai/docs/beginner/bqml)
- Source ID: `site-docs-root`
- Final score: 77
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Resource Use BigQuery ML to analyze images and text using Gemini on Vertex AI Analyzing movie posters in BigQuery with Gemini 2.0 Flash Use BigQuery ML to generate text on BigQuery tables or unstructured data with foundation models on Vertex AI Generate text using BigQuery ML and foundation models in Vertex AI Generate vector embeddings with BigQuery ML over text and images Call a multimodal embedding endpoint in Vertex AI from BigQuery ML to generate embeddings for semantic search Use two Vertex AI Tabular Workflows pipelines to train an AutoML model using different configurations.
- Common use cases include the following: Machine learning tasks, such as forecasting, prediction, recommendation, and anomaly detection Generative AI tasks, such as: Text generation, classification, summarization, and extraction Code generation and completion Image generation Embedding generation You can use BigQuery to prepare training data for Vertex AI models, which you can make available as features in Vertex AI Feature Store .
- You can train models in Vertex AI in three ways: AutoML : Train models on image, tabular, and video datasets without writing code.
- Available languages: The Vertex AI SDK supports Python, Java, Node.js, and Go.

### Search using embeddings \_|\_ Vertex AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/embeddings-search](https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/embeddings-search)
- Source ID: `site-docs-reference-3`
- Final score: 69
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation AI and ML Vertex AI Send feedback Search using embeddings Stay organized with collections Save and categorize content based on your preferences.
- Search nearest neighbor matches using a public endpoint If you've configured your online store instance to serve feature values using Optimized online serving from a public endpoint, you must do the following to retrieve approximate nearest neighbor matches: Retrieve the public endpoint domain name for the online store Retrieve nearest neighbor matches of an embedding or entity Retrieve the public endpoint domain name for the online store When you create an online store instance for Optimized online serving, Vertex AI Feature Store generates a public endpoint domain name for the online store.
- Retrieve nearest neighbor matches of an embedding or entity Retrieve the service attachment string for the online store When you create an online store instance for Optimized online serving with a Private Service Connect endpoint, Vertex AI Feature Store generates a service attachment string.
- Before you begin To search for approximate nearest neighbors, you need to first do the following: Set up the BigQuery data source to support embeddings by including the embedding column.

