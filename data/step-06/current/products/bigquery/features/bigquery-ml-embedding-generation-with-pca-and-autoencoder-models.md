---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.480Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery ML embedding generation with PCA and autoencoder models"
feature_slug: "bigquery-ml-embedding-generation-with-pca-and-autoencoder-models"
latest_feature_date: "2024-09-24"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/release-notes"
  - "https://docs.cloud.google.com/bigquery/docs/vector-search-intro"
  - "https://docs.cloud.google.com/bigquery/docs/vector-index-text-search-tutorial"
keywords:
  - "structured IID data"
  - "BigQuery ML embedding output"
  - "autoencoder embeddings"
  - "PCA embeddings"
  - "autoencoder model"
  - "ML.GENERATE_EMBEDDING"
  - "embedding generation"
  - "PCA model"
---

# BigQuery ML embedding generation with PCA and autoencoder models

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery ML adds ML.GENERATE_EMBEDDING support with PCA or autoencoder models for embeddings on structured IID data.

## Extended Definition

BigQuery ML includes an embedding generation feature exposed as ML.GENERATE EMBEDDING, which has been replaced by AI.GENERATE EMBEDDING with equivalent behavior and simplified output column names. It supports creating embeddings in BigQuery (including autonomous embedding generation on tables) and is positioned for semantic/vector-search workflows such as semantic search and retrieval workflows; the provided excerpts do not provide evidence confirming PCA or autoencoder model options.

## Evidence Summary

The cited pages document BigQuery embedding generation via ML.GENERATE EMBEDDING / AI.GENERATE EMBEDDING and its role in autonomous/vector-based semantic search, but do not mention PCA or autoencoder model types.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)
- [https://docs.cloud.google.com/bigquery/docs/vector-search-intro](https://docs.cloud.google.com/bigquery/docs/vector-search-intro)
- [https://docs.cloud.google.com/bigquery/docs/vector-index-text-search-tutorial](https://docs.cloud.google.com/bigquery/docs/vector-index-text-search-tutorial)

## Supporting Pages

### BigQuery release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 38
- Re-rank relevance: N/A

Evidence snippets:
- AI.GENERATE EMBEDDING is the new, preferred version of ML.GENERATE EMBEDDING , which has the same functionality but with simplified column output names.
- You can also use the AI.SEARCH function, enabling semantic search on tables that have autonomous embedding generation enabled.
- Try this feature with the Generate text embeddings by using an open model and the ML.GENERATE EMBEDDING function tutorial.
- Feature You can now enable autonomous embedding generation on tables that you make with the CREATE TABLE statement .

### "Introduction to embeddings and vector search \_|\_ BigQuery \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/vector-search-intro](https://docs.cloud.google.com/bigquery/docs/vector-search-intro)
- Source ID: `site-docs-root`
- Final score: 32
- Re-rank relevance: N/A

Evidence snippets:
- Generate and search multimodal embeddings Perform semantic search and retrieval-augmented generation Autonomous embedding generation Preview This feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .
- Note: To give feedback or request support for this feature, contact bq-vector-search@google.com You can use autonomous embedding generation to simplify the process of creating, maintaining, and querying embeddings.
- Use the following topics to try embedding generation in BigQuery ML: Generate text , images , or video by using the AI.GENERATE EMBEDDING function.
- Use cases The combination of embedding generation and vector search enables many interesting use cases.

### "Perform semantic search and retrieval-augmented generation \_|\_ BigQuery\

- URL: [https://docs.cloud.google.com/bigquery/docs/vector-index-text-search-tutorial](https://docs.cloud.google.com/bigquery/docs/vector-index-text-search-tutorial)
- Source ID: `site-docs-root-2`
- Final score: 30
- Re-rank relevance: N/A

Evidence snippets:
- Create a dataset named bqml tutorial with the data location set to US . bq mk --dataset \ --location=US \ --description "BigQuery ML tutorial dataset." \ bqml tutorial Confirm that the dataset was created: bq ls API Call the datasets.insert method with a defined dataset resource . { "datasetReference" : { "datasetId" : "bqml tutorial" } } Create the remote model for text embedding generation Create a remote model that represents a hosted Vertex AI text embedding generation model: In the Google Cloud console, go to the BigQuery page.
- Embedding generation using the AI.GENERATE EMBEDDING function might fail due to Vertex AI LLM quotas or service unavailability.
- For alternative text embedding generation methods in BigQuery, see the Embed text with pretrained TensorFlow models tutorial .
- An empty status column indicates successful embedding generation.

