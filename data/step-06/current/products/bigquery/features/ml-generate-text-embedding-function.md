---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.632Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "ML.GENERATE_TEXT_EMBEDDING function"
feature_slug: "ml-generate-text-embedding-function"
latest_feature_date: "2023-08-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/generate-text-embedding-tutorial-open-models"
  - "https://docs.cloud.google.com/bigquery/docs/vector-index-text-search-tutorial"
  - "https://docs.cloud.google.com/bigquery/docs/release-notes"
keywords:
  - "GENERATE_TEXT_EMBEDDING function"
  - "ML.GENERATE_TEXT_EMBEDDING"
  - "text embedding generation"
  - "GENERATE_TEXT_EMBEDDING()"
  - "TEXT_EMBEDDING function"
  - "generate embeddings"
  - "embedding from text"
  - "remote embedding"
---

# ML.GENERATE_TEXT_EMBEDDING function

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery ML adds the ML.GENERATE_TEXT_EMBEDDING function to generate embeddings from text using remote embedding models.

## Extended Definition

BigQuery ML supports a SQL function named AI.GENERATE_EMBEDDING (also referenced as ML.GENERATE_EMBEDDING in Google Cloud documentation) that generates text embeddings from input text using a remote model. The function is demonstrated for embedding content from public or user tables, including open-source and hosted Vertex AI text-embedding models, and the resulting vectors can be written to BigQuery tables for use in semantic search and retrieval workflows. The provided evidence points to this capability as an established feature, though the exact function alias shown varies between AI.GENERATE_EMBEDDING and ML.GENERATE_EMBEDDING.

## Evidence Summary

These official BigQuery docs pages describe generating text embeddings via AI/ML.GENERATE_EMBEDDING functions, including tutorial usage with remote models and release-note confirmation of this embedding capability.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/generate-text-embedding-tutorial-open-models](https://docs.cloud.google.com/bigquery/docs/generate-text-embedding-tutorial-open-models)
- [https://docs.cloud.google.com/bigquery/docs/vector-index-text-search-tutorial](https://docs.cloud.google.com/bigquery/docs/vector-index-text-search-tutorial)
- [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)

## Supporting Pages

### "Generate text embeddings by using an open model and the AI.GENERATE_EMBEDDING\

- URL: [https://docs.cloud.google.com/bigquery/docs/generate-text-embedding-tutorial-open-models](https://docs.cloud.google.com/bigquery/docs/generate-text-embedding-tutorial-open-models)
- Source ID: `site-docs-root-2`
- Final score: 28
- Re-rank relevance: N/A

Evidence snippets:
- Generate text embeddings by using an open model and the AI.GENERATE EMBEDDING function This tutorial shows you how to create a remote model that's based on the open-source text embedding model Qwen3-Embedding-0.6B , and then how to use that model with the AI.GENERATE EMBEDDING function to embed movie reviews from the bigquery-public-data.imdb.reviews public table.

### "Perform semantic search and retrieval-augmented generation \_|\_ BigQuery\

- URL: [https://docs.cloud.google.com/bigquery/docs/vector-index-text-search-tutorial](https://docs.cloud.google.com/bigquery/docs/vector-index-text-search-tutorial)
- Source ID: `site-docs-root-2`
- Final score: 28
- Re-rank relevance: N/A

Evidence snippets:
- Create a dataset named bqml tutorial with the data location set to US . bq mk --dataset \ --location=US \ --description "BigQuery ML tutorial dataset." \ bqml tutorial Confirm that the dataset was created: bq ls API Call the datasets.insert method with a defined dataset resource . { "datasetReference" : { "datasetId" : "bqml tutorial" } } Create the remote model for text embedding generation Create a remote model that represents a hosted Vertex AI text embedding generation model: In the Google Cloud console, go to the BigQuery page.
- Generate text embeddings Generate text embeddings from patent abstracts using the AI.GENERATE EMBEDDING function , and then write them to a BigQuery table so that they can be searched.
- For alternative text embedding generation methods in BigQuery, see the Embed text with pretrained TensorFlow models tutorial .
- Using the remote model with the AI.GENERATE EMBEDDING function to generate embeddings from text in a BigQuery table.

### BigQuery release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 28
- Re-rank relevance: N/A

Evidence snippets:
- Use generative AI to analyze multimodal data and generate embeddings by using BigQuery ML SQL functions or BigQuery DataFrames methods with Gemini and multimodal embedding models.
- Try this feature with the Generate text embeddings by using an open model and the ML.GENERATE EMBEDDING function tutorial.
- You can then use the AI.GENERATE EMBEDDING function with these remote models to generate embeddings.
- You can then use the ML.GENERATE EMBEDDING function with this remote model to generate embeddings.

