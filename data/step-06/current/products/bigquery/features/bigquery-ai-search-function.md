---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.350Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery AI.SEARCH function"
feature_slug: "bigquery-ai-search-function"
latest_feature_date: "2025-12-02"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/vector-search-intro"
  - "https://docs.cloud.google.com/bigquery/docs/vector-index-text-search-tutorial"
  - "https://docs.cloud.google.com/bigquery/docs/release-notes"
keywords:
  - "autonomous embedding generation"
  - "semantic search function"
  - "vector search on tables"
  - "semantic search"
  - "AI.SEARCH function"
  - "embedding search"
  - "AI.SEARCH()"
  - "AI.SEARCH"
---

# BigQuery AI.SEARCH function

Product: BigQuery
Coverage: HIGH

## Step 02 Summary

The AI.SEARCH function enables semantic search on tables that have autonomous embedding generation enabled.

## Extended Definition

AI.SEARCH is a BigQuery SQL function that performs semantic (vector-based) search on tables that have autonomous embedding generation enabled. BigQuery’s vector search guidance indicates AI.SEARCH is part of that semantic retrieval path alongside VECTOR SEARCH, and when used with a vector index it relies on approximate nearest neighbor search, which improves performance with a potential recall trade-off. It is also documented as not being accelerated by BigQuery BI Engine when a query contains AI.SEARCH.

## Evidence Summary

These pages confirm that AI.SEARCH enables semantic search on BigQuery tables with autonomous embedding generation and describe its vector-index behavior, performance/cost characteristics, and execution limitations.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/vector-search-intro](https://docs.cloud.google.com/bigquery/docs/vector-search-intro)
- [https://docs.cloud.google.com/bigquery/docs/vector-index-text-search-tutorial](https://docs.cloud.google.com/bigquery/docs/vector-index-text-search-tutorial)
- [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)

## Supporting Pages

### "Introduction to embeddings and vector search \_|\_ BigQuery \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/vector-search-intro](https://docs.cloud.google.com/bigquery/docs/vector-search-intro)
- Source ID: `site-docs-root`
- Final score: 76
- Re-rank relevance: WEAK
- Re-rank rationale: It covers semantic/vector search broadly, but it does not provide a direct description of the AI.SEARCH function itself.

Evidence snippets:
- Learn how to perform semantic search using the AI.SEARCH function .
- When a vector index is used, the VECTOR SEARCH and AI.SEARCH functions use the Approximate Nearest Neighbor search technique to improve vector search performance, with the trade-off of reducing recall and so returning more approximate results.
- Pricing The VECTOR SEARCH and AI.SEARCH functions and the CREATE VECTOR INDEX statement use BigQuery compute pricing .
- Limitations Queries that contain the VECTOR SEARCH or AI.SEARCH function aren't accelerated by BigQuery BI Engine .

### "Perform semantic search and retrieval-augmented generation \_|\_ BigQuery\

- URL: [https://docs.cloud.google.com/bigquery/docs/vector-index-text-search-tutorial](https://docs.cloud.google.com/bigquery/docs/vector-index-text-search-tutorial)
- Source ID: `site-docs-root-2`
- Final score: 32
- Re-rank relevance: N/A

Evidence snippets:
- Perform semantic search and retrieval-augmented generation This tutorial guides you through the end-to-end process of creating and using text embeddings for semantic search and retrieval-augmented generation (RAG) .

### BigQuery release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 26
- Re-rank relevance: N/A

Evidence snippets:
- You can also use the AI.SEARCH function, enabling semantic search on tables that have autonomous embedding generation enabled.
- Feature You can now enable autonomous embedding generation on tables that you make with the CREATE TABLE statement .

