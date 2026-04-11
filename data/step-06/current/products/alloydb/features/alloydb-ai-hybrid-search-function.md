---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:07:37.559Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "AlloyDB AI hybrid_search function"
feature_slug: "alloydb-ai-hybrid-search-function"
latest_feature_date: "2026-03-25"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/reference/ai/hybrid-search-function-parameters"
  - "https://docs.cloud.google.com/alloydb/docs/ai/alloydb-ai-use-cases"
  - "https://docs.cloud.google.com/alloydb/docs/release-notes"
keywords:
  - "Reciprocal Rank Fusion"
  - "blended search results"
  - "hybrid search output"
  - "RRF ranking"
  - "ai.hybrid_search"
  - "hybrid_search()"
  - "hybrid search"
  - "RRF"
---

# AlloyDB AI hybrid_search function

Product: AlloyDB
Coverage: HIGH

## Step 02 Summary

AlloyDB AI now includes the ai.hybrid_search() function, which blends multiple search result types into one ranked list using Reciprocal Rank Fusion.

## Extended Definition

AlloyDB for PostgreSQL AI provides the `ai.hybrid_search()` function to combine results from multiple search components into a single ranked output using the Reciprocal Rank Fusion (RRF) algorithm. The function accepts parameters for controlling the search-and-fusion process, including a component `weight` from 0.0 to 1.0 that defines that component’s contribution to the final RRF score. Google documents this capability as an AlloyDB AI feature in Preview.

## Evidence Summary

The release notes establish the feature and RRF-based ranking behavior, while the reference page confirms configurable parameters (including component weights), and the AI use-case page shows practical hybrid search modalities and RRF re-ranking context.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/reference/ai/hybrid-search-function-parameters](https://docs.cloud.google.com/alloydb/docs/reference/ai/hybrid-search-function-parameters)
- [https://docs.cloud.google.com/alloydb/docs/ai/alloydb-ai-use-cases](https://docs.cloud.google.com/alloydb/docs/ai/alloydb-ai-use-cases)
- [https://docs.cloud.google.com/alloydb/docs/release-notes](https://docs.cloud.google.com/alloydb/docs/release-notes)

## Supporting Pages

### "Hybrid search function parameters \_|\_ AlloyDB for PostgreSQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/alloydb/docs/reference/ai/hybrid-search-function-parameters](https://docs.cloud.google.com/alloydb/docs/reference/ai/hybrid-search-function-parameters)
- Source ID: `site-api-reference`
- Final score: 52
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Databases AlloyDB for PostgreSQL Reference Send feedback Hybrid search function parameters Stay organized with collections Save and categorize content based on your preferences.
- The AlloyDB for PostgreSQL hybrid search function accepts several parameters to control the search and fusion process.
- To learn how to perform hybrid search using the vector extension, see Run a hybrid vector similarity search .
- The maximum number of results to return from this search component. weight FLOAT The contribution of this component to the final RRF score, from 0.0 to 1.0.

### "Build generative AI applications \_|\_ AlloyDB for PostgreSQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/alloydb/docs/ai/alloydb-ai-use-cases](https://docs.cloud.google.com/alloydb/docs/ai/alloydb-ai-use-cases)
- Source ID: `site-docs-root`
- Final score: 22
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Tutorial: Deploying a RAG Application with AlloyDB to Agent Engine Integrate hybrid search and AI functions into your search application This demo illustrates the AI capabilities of Google Cloud AlloyDB, integrating hybrid search including SQL, vector, and full-text search with AI functions, all applied to a sample ecommerce dataset from Cymbal Shops.
- Tutorial: Migrate data from a vector database to AlloyDB Perform a multimodal hybrid product search This notebook shows you how to perform a hybrid search in AlloyDB for Cymbal Shops, a fictional retailer with a large eCommerce presence.
- The notebook combines multimodal vector embeddings, full text search (Generalized Inverted Index), and BM25 sparse embeddings (pgvector 0.7.0+) with Reciprocal Rank Fusion re-ranking for enhanced product search.

### AlloyDB for PostgreSQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/alloydb/docs/release-notes](https://docs.cloud.google.com/alloydb/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 22
- Re-rank relevance: N/A

Evidence snippets:
- Feature The following AlloyDB AI features are available in Preview : You can now use the ai.hybrid search() function, which fuses results from each search type into a single list using the Reciprocal Rank Fusion (RRF) algorithm.

