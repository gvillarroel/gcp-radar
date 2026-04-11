---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.337Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery AI.EMBED function for Gemini embedding endpoint"
feature_slug: "bigquery-ai-embed-function-for-gemini-embedding-endpoint"
latest_feature_date: "2026-03-06"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/release-notes"
  - "https://docs.cloud.google.com/bigquery/docs/vector-search-intro"
keywords:
  - "Gemini embedding endpoint"
  - "gemini-embedding-001"
  - "AI.EMBED function"
  - "Vertex AI embedding model"
  - "AI.EMBED"
  - "AI EMBED"
  - "BigQuery AI function"
  - "embedding function"
---

# BigQuery AI.EMBED function for Gemini embedding endpoint

Product: BigQuery
Coverage: HIGH

## Step 02 Summary

BigQuery can now call the AI.EMBED function directly against the gemini-embedding-001 Vertex AI model endpoint.

## Extended Definition

BigQuery AI.EMBED is a built-in function that can be used directly with a Vertex AI embedding model endpoint, specifically including `gemini-embedding-001`. The feature supports generating embeddings from input data, and official release notes state that AI.EMBED is available for creating embeddings (including text/image in GA) while docs describe it as generating embeddings via Vertex AI embedding models.

## Evidence Summary

The release notes confirm direct AI.EMBED use with the `gemini-embedding-001` endpoint and GA availability, while the vector search introduction explains AI.EMBED’s role in generating embeddings through Vertex AI models.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)
- [https://docs.cloud.google.com/bigquery/docs/vector-search-intro](https://docs.cloud.google.com/bigquery/docs/vector-search-intro)

## Supporting Pages

### BigQuery release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 52
- Re-rank relevance: N/A

Evidence snippets:
- You can also use the AI.EMBED function directly with the gemini-embedding-001 model endpoint.
- March 06, 2026 Feature You can create a remote model based on the Vertex AI gemini-embedding-001 model, or a remote model based on an open embedding model from Vertex Model Garden or Hugging Face that is deployed to Vertex AI.
- March 23, 2026 Feature The following functions are now generally available (GA): AI.EMBED : create embeddings from text or image data.
- Feature You can now use the built-in text embedding model embeddinggemma-300m in the AI.EMBED and AI.SIMILARITY functions.

### "Introduction to embeddings and vector search \_|\_ BigQuery \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/vector-search-intro](https://docs.cloud.google.com/bigquery/docs/vector-search-intro)
- Source ID: `site-docs-root`
- Final score: 46
- Re-rank relevance: N/A

Evidence snippets:
- Generate single embeddings You can use the AI.EMBED function with Vertex AI embedding models to generate a single embedding of your input.
- When you add or modify data in the source column, BigQuery automatically generates or updates the embedding column for that data by using a Vertex AI embedding model.
- The AI.EMBED function supports the following types of input: Text data.
- Use the following topics to try embedding generation in BigQuery ML: Generate text , images , or video by using the AI.GENERATE EMBEDDING function.

### "Perform semantic search and retrieval-augmented generation \_|\_ BigQuery\

- URL: [https://docs.cloud.google.com/bigquery/docs/vector-index-text-search-tutorial](https://docs.cloud.google.com/bigquery/docs/vector-index-text-search-tutorial)
- Source ID: `site-docs-root-2`
- Final score: 24
- Re-rank relevance: N/A

Evidence snippets:
- This tutorial covers the following tasks: Creating a BigQuery ML remote model over a Vertex AI embedding model.
- Generate text embeddings Generate text embeddings from patent abstracts using the AI.GENERATE EMBEDDING function , and then write them to a BigQuery table so that they can be searched.
- Embedding generation using the AI.GENERATE EMBEDDING function might fail due to Vertex AI LLM quotas or service unavailability.
- Using the remote model with the AI.GENERATE EMBEDDING function to generate embeddings from text in a BigQuery table.

