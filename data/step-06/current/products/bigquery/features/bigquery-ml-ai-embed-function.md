---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.355Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery ML AI.EMBED function"
feature_slug: "bigquery-ml-ai-embed-function"
latest_feature_date: "2025-11-18"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/vector-search-intro"
  - "https://docs.cloud.google.com/bigquery/docs/release-notes"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
keywords:
  - "document embeddings"
  - "AI.EMBED function"
  - "EMBED function"
  - "audio embeddings"
  - "AI embedding function"
  - "video embeddings"
  - "AI.EMBED"
  - "image embeddings"
---

# BigQuery ML AI.EMBED function

Product: BigQuery
Coverage: HIGH

## Step 02 Summary

BigQuery ML supports the AI.EMBED function to convert text, images, audio, video, and documents into embeddings.

## Extended Definition

AI.EMBED is a BigQuery SQL function used to generate embeddings from input data by using Vertex AI embedding models. The BigQuery docs state it supports embedding generation (explicitly text in the vector search intro), while release notes indicate it can create embeddings from text, image, audio, video, or documents and that text/image embedding generation became generally available (GA) on March 23, 2026; when used in generation expressions, AI.EMBED is the only supported generation-expression syntax and requires a connection id if an endpoint argument is used.

## Evidence Summary

The intro page establishes AI.EMBED’s purpose for generating embeddings, release notes add supported input modalities and GA milestone details, and the SQL reference documents required usage constraints in generation expressions.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/vector-search-intro](https://docs.cloud.google.com/bigquery/docs/vector-search-intro)
- [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)

## Supporting Pages

### "Introduction to embeddings and vector search \_|\_ BigQuery \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/vector-search-intro](https://docs.cloud.google.com/bigquery/docs/vector-search-intro)
- Source ID: `site-docs-root`
- Final score: 36
- Re-rank relevance: N/A

Evidence snippets:
- Generate single embeddings You can use the AI.EMBED function with Vertex AI embedding models to generate a single embedding of your input.
- The AI.EMBED function supports the following types of input: Text data.

### BigQuery release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 28
- Re-rank relevance: N/A

Evidence snippets:
- You can also use the AI.EMBED function directly with the gemini-embedding-001 model endpoint.
- March 23, 2026 Feature The following functions are now generally available (GA): AI.EMBED : create embeddings from text or image data.
- Feature You can now use the built-in text embedding model embeddinggemma-300m in the AI.EMBED and AI.SIMILARITY functions.
- AI.EMBED : turn text, image, audio, video, or documents into embeddings.

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 20
- Re-rank relevance: N/A

Evidence snippets:
- The only supported generation expression syntax is a call to the AI.EMBED function .
- If you specify an endpoint argument to AI.EMBED , then the connection id argument is also required when used in a generation expression.

