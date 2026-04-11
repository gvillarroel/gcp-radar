---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.357Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery ML AI.GENERATE_EMBEDDING function"
feature_slug: "bigquery-ml-ai-generate-embedding-function"
latest_feature_date: "2025-11-18"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/generate-text-embedding-tutorial-open-models"
  - "https://docs.cloud.google.com/bigquery/docs/release-notes"
  - "https://docs.cloud.google.com/bigquery/docs/vector-search-intro"
keywords:
  - "replacement for ML.GENERATE_EMBEDDING"
  - "AI.GENERATE_EMBEDDING function"
  - "embedding output function"
  - "AI.GENERATE_EMBEDDING"
  - "ML.GENERATE_EMBEDDING"
  - "BigQuery ML embedding"
  - "vector output"
---

# BigQuery ML AI.GENERATE_EMBEDDING function

Product: BigQuery
Coverage: HIGH

## Step 02 Summary

BigQuery ML now offers AI.GENERATE_EMBEDDING as the preferred replacement for ML.GENERATE_EMBEDDING.

## Extended Definition

AI.GENERATE_EMBEDDING is a BigQuery ML SQL function used to generate vector embeddings from input data in BigQuery, including text and multimodal content (such as images and video), via remote models. BigQuery release notes state it is the new preferred version of ML.GENERATE_EMBEDDING, providing the same embedding-generation functionality with simplified column output names.

## Evidence Summary

The release notes confirm AI.GENERATE_EMBEDDING replaces ML.GENERATE_EMBEDDING, while the tutorial and vector search introduction provide concrete usage examples and supported input types/targets for embedding generation in BigQuery ML.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/generate-text-embedding-tutorial-open-models](https://docs.cloud.google.com/bigquery/docs/generate-text-embedding-tutorial-open-models)
- [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)
- [https://docs.cloud.google.com/bigquery/docs/vector-search-intro](https://docs.cloud.google.com/bigquery/docs/vector-search-intro)

## Supporting Pages

### "Generate text embeddings by using an open model and the AI.GENERATE_EMBEDDING\

- URL: [https://docs.cloud.google.com/bigquery/docs/generate-text-embedding-tutorial-open-models](https://docs.cloud.google.com/bigquery/docs/generate-text-embedding-tutorial-open-models)
- Source ID: `site-docs-root-2`
- Final score: 56
- Re-rank relevance: MODERATE
- Re-rank rationale: The page documents use of AI.GENERATE_EMBEDDING and required permissions/costs, but does not mention deprecation or replacement of ML.GENERATE_EMBEDDING.

Evidence snippets:
- Generate text embeddings by using an open model and the AI.GENERATE EMBEDDING function This tutorial shows you how to create a remote model that's based on the open-source text embedding model Qwen3-Embedding-0.6B , and then how to use that model with the AI.GENERATE EMBEDDING function to embed movie reviews from the bigquery-public-data.imdb.reviews public table.
- Perform text embedding Perform text embedding on IMDB movie reviews by using the remote model and the AI.GENERATE EMBEDDING function: In the Google Cloud console, go to the BigQuery page.

### BigQuery release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 34
- Re-rank relevance: N/A

Evidence snippets:
- AI.GENERATE EMBEDDING is the new, preferred version of ML.GENERATE EMBEDDING , which has the same functionality but with simplified column output names.
- You can then use the AI.GENERATE EMBEDDING function with these remote models to generate embeddings.
- Try this feature with the Generate text embeddings by using an open model and the ML.GENERATE EMBEDDING function tutorial.
- You can then use the ML.GENERATE EMBEDDING function with this remote model to generate embeddings.

### "Introduction to embeddings and vector search \_|\_ BigQuery \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/vector-search-intro](https://docs.cloud.google.com/bigquery/docs/vector-search-intro)
- Source ID: `site-docs-root`
- Final score: 30
- Re-rank relevance: N/A

Evidence snippets:
- Use the following topics to try embedding generation in BigQuery ML: Generate text , images , or video by using the AI.GENERATE EMBEDDING function.
- For multimodal embedding models, AI.GENERATE EMBEDDING also works with visual content from either standard table columns that contain ObjectRef values , or from object tables .
- Generate a table of embeddings You can use the AI.GENERATE EMBEDDING to create a table that has embeddings for all of the data in a column of your input table.
- For all types of supported models, AI.GENERATE EMBEDDING works with structured data in standard tables .

