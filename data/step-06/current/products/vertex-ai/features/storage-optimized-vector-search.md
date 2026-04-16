---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:02:17.049Z"
product_name: "Vertex AI"
product_slug: "vertex-ai"
feature_name: "Storage-optimized Vector Search"
feature_slug: "storage-optimized-vector-search"
latest_feature_date: "2025-09-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/docs/vector-search/quickstart"
  - "https://docs.cloud.google.com/vertex-ai/docs/explainable-ai/explainable-ai-notebook-tutorials"
  - "https://docs.cloud.google.com/vertex-ai/docs/ml-metadata/ml-metadata-notebook-tutorials"
keywords:
  - "storage"
  - "optimized"
  - "vector"
  - "search"
  - "adds"
  - "preview"
  - "index"
  - "tier"
---

# Storage-optimized Vector Search

Product: Vertex AI
Coverage: MEDIUM

## Step 02 Summary

Storage-optimized Vector Search adds a preview vector index tier optimized for storage to lower costs for large-scale RAG and semantic search applications with auto-tuning.

## Extended Definition

Storage-optimized Vector Search adds a preview vector index tier optimized for storage to lower costs for large-scale RAG and semantic search applications with auto-tuning.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/docs/vector-search/quickstart](https://docs.cloud.google.com/vertex-ai/docs/vector-search/quickstart)
- [https://docs.cloud.google.com/vertex-ai/docs/explainable-ai/explainable-ai-notebook-tutorials](https://docs.cloud.google.com/vertex-ai/docs/explainable-ai/explainable-ai-notebook-tutorials)
- [https://docs.cloud.google.com/vertex-ai/docs/ml-metadata/ml-metadata-notebook-tutorials](https://docs.cloud.google.com/vertex-ai/docs/ml-metadata/ml-metadata-notebook-tutorials)

## Supporting Pages

### Vector Search quickstart \_|\_ Vertex AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/vector-search/quickstart](https://docs.cloud.google.com/vertex-ai/docs/vector-search/quickstart)
- Source ID: `site-docs-reference-2`
- Final score: 175
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- BUCKET URI = f "gs:// { PROJECT ID } -vs-quickstart- { UID } " ! gcloud storage buckets create $ BUCKET URI -- location = $ LOCATION -- project = $ PROJECT ID ! gcloud storage cp "gs://github-repo/data/vs-quickstart/product-embs.json" $ BUCKET URI For using Vector Search to run queries, you also need to copy the embedding file to local directory: ! gcloud storage cp "gs://github-repo/data/vs-quickstart/product-embs.json" . # for query tests Build and deploy a Vector Search index Learn how to create an index, create an index endpoint, and then deploy your index to the endpoint.
- You can check status of the index creation on the Vector Search Google Cloud console See Indexes The parameters for creating index: contents delta uri : the URI of Cloud Storage directory where you stored the embedding JSON files dimensions : dimension size of each embedding.
- To see an example of getting started with Vertex AI Vector Search, run the "Get started with Vertex AI Vector Search" notebook in one of the following environments: Open in Colab Open in Colab Enterprise Open in Vertex AI Workbench View on GitHub In the Vertex AI Vector Search quickstart, learn how to create an index out of a sample dataset from a fictitious ecommerce clothing site.
- The APIs are available under the aiplatform package of the SDK. init the aiplatform package from google.cloud import aiplatform aiplatform . init ( project = PROJECT ID , location = LOCATION ) Create a MatchingEngineIndex with its create tree ah index function (Matching Engine is the previous name of Vector Search). create Index my index = aiplatform .

### "Vertex Explainable AI notebook tutorials \_|\_ Vertex AI \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/explainable-ai/explainable-ai-notebook-tutorials](https://docs.cloud.google.com/vertex-ai/docs/explainable-ai/explainable-ai-notebook-tutorials)
- Source ID: `site-docs-reference-2`
- Final score: 128
- Re-rank relevance: N/A

Evidence snippets:
- Colab Colab Enterprise GitHub Vertex AI Workbench Vertex AI Vector Search Create Vertex AI Vector Search index .
- List of notebooks Select a service AutoML BigQuery BigQuery ML Custom training Image Ray on Vertex AI Tabular Text Vector Search Vertex AI Experiments Vertex AI Feature Store Vertex AI Inference Vertex AI model evaluation Vertex AI Model Monitoring Vertex AI Model Registry Vertex AI Pipelines Vertex AI TensorBoard Vertex AI Vizier Vertex AI Workbench Vertex Explainable AI Vertex ML Metadata Services Description Open in Classification for tabular data AutoML tabular training and prediction .
- Colab Colab Enterprise GitHub Vertex AI Workbench Vertex AI Vector Search Vertex AI embeddings for text Using Vertex AI Vector Search and Vertex AI embeddings for text for StackOverflow Questions .
- Run a Vertex AI SDK CustomContainerTrainingJob Colab Colab Enterprise GitHub Vertex AI Workbench vector search Using Vertex AI Multimodal Embeddings and Vector Search .

### "Vertex ML Metadata notebook tutorials \_|\_ Vertex AI \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/ml-metadata/ml-metadata-notebook-tutorials](https://docs.cloud.google.com/vertex-ai/docs/ml-metadata/ml-metadata-notebook-tutorials)
- Source ID: `site-docs-reference-2`
- Final score: 128
- Re-rank relevance: N/A

Evidence snippets:
- Colab Colab Enterprise GitHub Vertex AI Workbench Vertex AI Vector Search Create Vertex AI Vector Search index .
- List of notebooks Select a service AutoML BigQuery BigQuery ML Custom training Image Ray on Vertex AI Tabular Text Vector Search Vertex AI Experiments Vertex AI Feature Store Vertex AI Inference Vertex AI model evaluation Vertex AI Model Monitoring Vertex AI Model Registry Vertex AI Pipelines Vertex AI TensorBoard Vertex AI Vizier Vertex AI Workbench Vertex Explainable AI Vertex ML Metadata Services Description Open in Classification for tabular data AutoML tabular training and prediction .
- Colab Colab Enterprise GitHub Vertex AI Workbench Vertex AI Vector Search Vertex AI embeddings for text Using Vertex AI Vector Search and Vertex AI embeddings for text for StackOverflow Questions .
- Run a Vertex AI SDK CustomContainerTrainingJob Colab Colab Enterprise GitHub Vertex AI Workbench vector search Using Vertex AI Multimodal Embeddings and Vector Search .

