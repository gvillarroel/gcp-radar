---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.331Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "AI.EMBED function"
feature_slug: "ai-embed-function"
latest_feature_date: "2026-03-23"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/vector-search-intro"
  - "https://docs.cloud.google.com/bigquery/docs/release-notes"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
keywords:
  - "embedding generation"
  - "text embeddings"
  - "vector output"
  - "embed query"
  - "image embeddings"
  - "EMBED function"
  - "AI.EMBED"
  - "BigQuery AI function"
---

# AI.EMBED function

Product: BigQuery
Coverage: HIGH

## Step 02 Summary

The AI.EMBED function now generally supports creating embeddings from text or image data.

## Extended Definition

AI.EMBED is a BigQuery built-in function used in SQL generation expressions to generate embeddings from input data. BigQuery release notes indicate it became generally available on March 23, 2026 for creating embeddings from text or image data, and documentation shows it works with Vertex AI embedding models, with embeddings represented as ARRAY<FLOAT64> values (or STRUCT<result ARRAY<FLOAT64>, status STRING> in preview autonomous embedding generation workflows).

## Evidence Summary

The three official BigQuery pages confirm AI.EMBED’s purpose, GA scope, input support, model backing, and how its generated vector outputs are represented in schema-related usage.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/vector-search-intro](https://docs.cloud.google.com/bigquery/docs/vector-search-intro)
- [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)

## Supporting Pages

### "Introduction to embeddings and vector search \_|\_ BigQuery \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/vector-search-intro](https://docs.cloud.google.com/bigquery/docs/vector-search-intro)
- Source ID: `site-docs-root`
- Final score: 60
- Re-rank relevance: WEAK
- Re-rank rationale: The document discusses embeddings conceptually, but it does not document the AI.EMBED function directly.

Evidence snippets:
- Generate single embeddings You can use the AI.EMBED function with Vertex AI embedding models to generate a single embedding of your input.
- The AI.EMBED function supports the following types of input: Text data.
- Generate and search multimodal embeddings Perform semantic search and retrieval-augmented generation Autonomous embedding generation Preview This feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .
- Note: To give feedback or request support for this feature, contact bq-vector-search@google.com You can use autonomous embedding generation to simplify the process of creating, maintaining, and querying embeddings.

### BigQuery release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 48
- Re-rank relevance: N/A

Evidence snippets:
- You can also use the AI.EMBED function directly with the gemini-embedding-001 model endpoint.
- March 23, 2026 Feature The following functions are now generally available (GA): AI.EMBED : create embeddings from text or image data.
- You can also use the AI.SEARCH function, enabling semantic search on tables that have autonomous embedding generation enabled.
- Feature You can now use the built-in text embedding model embeddinggemma-300m in the AI.EMBED and AI.SIMILARITY functions.

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 34
- Re-rank relevance: N/A

Evidence snippets:
- The only supported generation expression syntax is a call to the AI.EMBED function .
- The table schema contains 2 columns: customer id: The customer ID as a STRING transaction amount: The transaction amount as NUMERIC The table option list specifies the: Description: A table clustered by customer id Creating a table with autonomous embedding generation Preview This feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .
- See Table path syntax . column name : The name of a column with a type of ARRAY<FLOAT64> , or if you're using autonomous embedding generation (Preview) , a STRUCT<result ARRAY<FLOAT64>, status STRING> column.
- If you specify an endpoint argument to AI.EMBED , then the connection id argument is also required when used in a generation expression.

