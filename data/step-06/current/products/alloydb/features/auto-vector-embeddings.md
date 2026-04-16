---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:53:29.465Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "Auto vector embeddings"
feature_slug: "auto-vector-embeddings"
latest_feature_date: "2026-03-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/ai/generate-manage-auto-embeddings-for-tables"
  - "https://docs.cloud.google.com/alloydb/docs/ai/example-embeddings"
  - "https://docs.cloud.google.com/alloydb/docs/ai/perform-vector-search"
keywords:
  - "auto"
  - "vector"
  - "embeddings"
  - "automate"
  - "lifecycle"
  - "large"
  - "scale"
  - "datasets"
---

# Auto vector embeddings

Product: AlloyDB
Coverage: MEDIUM

## Step 02 Summary

Auto vector embeddings automate the lifecycle of vector embeddings for large-scale datasets and keep embeddings synchronized with transactional data.

## Extended Definition

Auto vector embeddings automate the lifecycle of vector embeddings for large-scale datasets and keep embeddings synchronized with transactional data.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/ai/generate-manage-auto-embeddings-for-tables](https://docs.cloud.google.com/alloydb/docs/ai/generate-manage-auto-embeddings-for-tables)
- [https://docs.cloud.google.com/alloydb/docs/ai/example-embeddings](https://docs.cloud.google.com/alloydb/docs/ai/example-embeddings)
- [https://docs.cloud.google.com/alloydb/docs/ai/perform-vector-search](https://docs.cloud.google.com/alloydb/docs/ai/perform-vector-search)

## Supporting Pages

### "Generate and manage auto vector embeddings for large tables \_|\_ AlloyDB\

- URL: [https://docs.cloud.google.com/alloydb/docs/ai/generate-manage-auto-embeddings-for-tables](https://docs.cloud.google.com/alloydb/docs/ai/generate-manage-auto-embeddings-for-tables)
- Source ID: `site-docs-reference`
- Final score: 301
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- This solution is particularly useful for facilitating semantic search and Retrieval Augmented Generation (RAG) on text content, including the following: Creating initial vector embedding for a new table Generating embeddings after a large data import Refreshing embeddings after significant data changes Maintaining embeddings incrementally Understand auto vector embeddings Auto vector embeddings in AlloyDB provide a scalable way to automate the generation and maintenance of vector embeddings for your data.
- For large datasets, you can improve performance by refreshing embeddings for distinct partitions in parallel from different database connections: To refresh the entire table, run the following: CALL ai . refresh embeddings ( table name = > 'documents' , -- This is the root partitioned table embedding column = > 'content embeddings' ); To refresh a single partition, run the following: CALL ai . refresh embeddings ( table name = > 'documents eu' , embedding column = > 'content embeddings' ); Refresh embeddings for newly added or attached partitions The auto-embedding feature supports generating embeddings for partitions that are incorporated into your main table after the initial setup.
- Home Documentation Databases AlloyDB for PostgreSQL Guides Send feedback Generate and manage auto vector embeddings for large tables Stay organized with collections Save and categorize content based on your preferences.
- You can generate and manage vector embeddings for an entire table column, which gives you a scalable solution for large-scale vector embedding creation.

### "Perform a vector search \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/alloydb/docs/ai/perform-vector-search](https://docs.cloud.google.com/alloydb/docs/ai/perform-vector-search)
- Source ID: `site-docs-reference-2`
- Final score: 149
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Performance improvements come from the columnar engine's built-in efficiency in scanning large datasets and applying filters —such as LIKE predicates— coupled with its ability, using vector support, to pre-filter rows.
- To learn more about using ScaNN at scale, see Getting started with Vector Embeddings with AlloyDB AI .
- To learn how to perform a vector search with Vertex AI embeddings, see Getting started with Vector Embeddings with AlloyDB AI .
- Get started with vector embeddings using AlloyDB AI .

### "Perform a vector search \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/alloydb/docs/ai/example-embeddings](https://docs.cloud.google.com/alloydb/docs/ai/example-embeddings)
- Source ID: `site-docs-reference-required-7`
- Final score: 149
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Performance improvements come from the columnar engine's built-in efficiency in scanning large datasets and applying filters —such as LIKE predicates— coupled with its ability, using vector support, to pre-filter rows.
- To learn more about using ScaNN at scale, see Getting started with Vector Embeddings with AlloyDB AI .
- To learn how to perform a vector search with Vertex AI embeddings, see Getting started with Vector Embeddings with AlloyDB AI .
- Get started with vector embeddings using AlloyDB AI .

