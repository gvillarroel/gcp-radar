---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:07:33.811Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "AlloyDB AI hybrid_search function"
feature_slug: "alloydb-ai-hybrid-search-function"
latest_feature_date: "2026-03-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/ai/run-hybrid-vector-similarity-search"
  - "https://docs.cloud.google.com/alloydb/docs/reference/ai/hybrid-search-function-parameters"
  - "https://docs.cloud.google.com/alloydb/docs/ai/perform-vector-search"
  - "https://docs.cloud.google.com/alloydb/docs/ai/filtered-vector-search-overview"
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
Coverage: MEDIUM

## Step 02 Summary

AlloyDB AI now includes the ai.hybrid_search() function, which blends multiple search result types into one ranked list using Reciprocal Rank Fusion.

## Extended Definition

AlloyDB AI now includes the ai.hybrid_search() function, which blends multiple search result types into one ranked list using Reciprocal Rank Fusion.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/ai/run-hybrid-vector-similarity-search](https://docs.cloud.google.com/alloydb/docs/ai/run-hybrid-vector-similarity-search)
- [https://docs.cloud.google.com/alloydb/docs/reference/ai/hybrid-search-function-parameters](https://docs.cloud.google.com/alloydb/docs/reference/ai/hybrid-search-function-parameters)
- [https://docs.cloud.google.com/alloydb/docs/ai/perform-vector-search](https://docs.cloud.google.com/alloydb/docs/ai/perform-vector-search)
- [https://docs.cloud.google.com/alloydb/docs/ai/filtered-vector-search-overview](https://docs.cloud.google.com/alloydb/docs/ai/filtered-vector-search-overview)

## Supporting Pages

### "Run a hybrid vector similarity search \_|\_ AlloyDB for PostgreSQL \_|\_\

- URL: [https://docs.cloud.google.com/alloydb/docs/ai/run-hybrid-vector-similarity-search](https://docs.cloud.google.com/alloydb/docs/ai/run-hybrid-vector-similarity-search)
- Source ID: `site-docs-reference-2`
- Final score: 111
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If you prefer PostgreSQL parser functions, you can use the following functions by explicitly specifying them as follows: plainto tsquery() to tsquery() Perform a hybrid search using raw SQL Hybrid search involves performing separate vector and text searches, then combining and re-ranking results using Reciprocal Rank Fusion (RRF).
- Use the following table to choose the best approach for your use case: Approach Description Use case SQL function hybrid search() is a built-in function that simplifies hybrid search by combining vector and text search results using RRF.
- Perform a hybrid search using the hybrid search function The ai.hybrid search() function lets you combine results from multiple search types, such as vector search and full-text search.
- CREATE TABLE product logs ( log id str TEXT PRIMARY KEY , content TEXT , content tsv tsvector GENERATED ALWAYS AS ( to tsvector ( 'english' , content )) STORED ); INSERT INTO product logs ( log id str , content ) VALUES ( '999' , 'system start and services initialized' ); CREATE INDEX idx product logs rum ON product logs USING rum ( content tsv rum tsvector ops ); SELECT id , pg typeof ( id ) FROM ai . hybrid search ( ARRAY [ '{ "data type": "text", "table name": "product logs", "key column": "log id str", "text column": "content tsv", "query text input": "system", "limit": 1 }' :: jsonb ], id type = > NULL :: INTEGER ); The output shows that the id column is cast to INTEGER : id pg typeof ------+----------- 999 integer (1 rows) The following example shows why specifying the data type for the return ID column is important, by showing what happens when there's a mismatch.

### "Hybrid search function parameters \_|\_ AlloyDB for PostgreSQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/alloydb/docs/reference/ai/hybrid-search-function-parameters](https://docs.cloud.google.com/alloydb/docs/reference/ai/hybrid-search-function-parameters)
- Source ID: `site-api-reference`
- Final score: 91
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Databases AlloyDB for PostgreSQL Reference Send feedback Hybrid search function parameters Stay organized with collections Save and categorize content based on your preferences.
- The AlloyDB for PostgreSQL hybrid search function accepts several parameters to control the search and fusion process.
- To learn how to perform hybrid search using the vector extension, see Run a hybrid vector similarity search .
- The maximum number of results to return from this search component. weight FLOAT The contribution of this component to the final RRF score, from 0.0 to 1.0.

### "Perform a vector search \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/alloydb/docs/ai/perform-vector-search](https://docs.cloud.google.com/alloydb/docs/ai/perform-vector-search)
- Source ID: `site-docs-reference-2`
- Final score: 76
- Re-rank relevance: N/A

### "Filtered vector search in AlloyDB overview \_|\_ AlloyDB for PostgreSQL\

- URL: [https://docs.cloud.google.com/alloydb/docs/ai/filtered-vector-search-overview](https://docs.cloud.google.com/alloydb/docs/ai/filtered-vector-search-overview)
- Source ID: `site-docs-root-2`
- Final score: 72
- Re-rank relevance: N/A

