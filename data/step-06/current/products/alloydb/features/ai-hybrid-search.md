---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:53:29.462Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "ai.hybrid_search()"
feature_slug: "ai-hybrid-search"
latest_feature_date: "2026-03-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/ai/run-hybrid-vector-similarity-search"
keywords:
  - "ai"
  - "hybrid"
  - "search"
  - "combines"
  - "results"
  - "multiple"
  - "types"
  - "into"
---

# ai.hybrid_search()

Product: AlloyDB
Coverage: MEDIUM

## Step 02 Summary

The ai.hybrid_search() function combines results from multiple search types into a single ranked list using Reciprocal Rank Fusion.

## Extended Definition

The ai.hybrid_search() function combines results from multiple search types into a single ranked list using Reciprocal Rank Fusion.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/ai/run-hybrid-vector-similarity-search](https://docs.cloud.google.com/alloydb/docs/ai/run-hybrid-vector-similarity-search)

## Supporting Pages

### Run a hybrid vector similarity search | AlloyDB for PostgreSQL | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/alloydb/docs/ai/run-hybrid-vector-similarity-search](https://docs.cloud.google.com/alloydb/docs/ai/run-hybrid-vector-similarity-search)
- Source ID: `feature-recovery-direct-http`
- Final score: 302
- Re-rank relevance: N/A

Evidence snippets:
- Perform a hybrid search using the hybrid_search function The ai.hybrid_search() function lets you combine results from multiple search types, such as vector search and full-text search.
- CREATE TABLE product_logs ( log_id_str TEXT PRIMARY KEY , content TEXT , content_tsv tsvector GENERATED ALWAYS AS ( to_tsvector ( 'english' , content )) STORED ); INSERT INTO product_logs ( log_id_str , content ) VALUES ( '999' , 'system start and services initialized' ); CREATE INDEX idx_product_logs_rum ON product_logs USING rum ( content_tsv rum_tsvector_ops ); SELECT id , pg_typeof ( id ) FROM ai . hybrid_search ( ARRAY [ '{ "data_type": "text", "table_name": "product_logs", "key_column": "log_id_str", "text_column": "content_tsv", "query_text_input": "system", "limit": 1 }' :: jsonb ], id_type = > NULL :: INTEGER ); The output shows that the id column is cast to INTEGER : id | pg_typeof ------+----------- 999 | integer (1 rows) The following example shows why specifying the data type for the return ID column is important, by showing what happens when there's a mismatch.
- DROP TABLE IF EXISTS product_logs ; CREATE TABLE product_logs ( log_id_str TEXT PRIMARY KEY , content TEXT , content_tsv tsvector GENERATED ALWAYS AS ( to_tsvector ( 'english' , content )) STORED ); INSERT INTO product_logs VALUES ( '999' , 'system start' ); SELECT id , pg_typeof ( id ), score FROM ai . hybrid_search ( ARRAY [ '{ "data_type": "text", "table_name": "product_logs", "key_column": "log_id_str", "text_column": "content_tsv", "query_text_input": "system", "limit": 1 }' :: jsonb ], id_type = > NULL :: INTEGER --- CAST to INT ); Choose a text search query parser When you perform full-text search, AlloyDB provides the g_to_tsquery() function to achieve high-relevance information retrieval. g_to_tsquery() , which is the default, improves information retrieval by transforming plain text or standard tsquery formats into a more data-rich tsquery output.
- SELECT * FROM ai . hybrid_search ( search_inputs = > ARRAY [ '{ "data_type": "vector", "weight": 0.5, "table_name": "documents", "key_column": "doc_id", "vec_column": "text_embedding", "distance_operator": "public.<=>", "limit": 5, "query_vector": "ai.embedding(''gemini-embedding-001'', ''managed database'')::vector" }' :: JSONB , '{ "data_type": "text", "weight": 0.5, "table_name": "documents", "key_column": "doc_id", "text_column": "text_tsv", "limit": 5, "ranking_function": "ts_rank", "query_text_input": "database" }' :: JSONB ], include_json_output = > false ); include_json_output is an optional parameter.

### "Hybrid search function parameters \_|\_ AlloyDB for PostgreSQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/alloydb/docs/reference/ai/hybrid-search-function-parameters](https://docs.cloud.google.com/alloydb/docs/reference/ai/hybrid-search-function-parameters)
- Source ID: `site-api-reference`
- Final score: 72
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation Databases AlloyDB for PostgreSQL Reference Send feedback Hybrid search function parameters Stay organized with collections Save and categorize content based on your preferences.
- The maximum number of results to return from this search component. weight FLOAT The contribution of this component to the final RRF score, from 0.0 to 1.0.
- The maximum number of results to return from this search component. weight FLOAT The contribution of this component to the final RRF score, from 0.0 to 1.0.
- The AlloyDB for PostgreSQL hybrid search function accepts several parameters to control the search and fusion process.

### "Perform a vector search \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/alloydb/docs/ai/perform-vector-search](https://docs.cloud.google.com/alloydb/docs/ai/perform-vector-search)
- Source ID: `site-docs-reference-2`
- Final score: 71
- Re-rank relevance: N/A

Evidence snippets:
- CREATE EXTENSION IF NOT EXISTS vector ; CREATE TABLE items ( id SERIAL PRIMARY KEY , description TEXT , embedding VECTOR ( 512 ) ); Populate the data by running the following statements to insert 1 million rows into the example items table. -- Simplified example of inserting matching ( 0.1%) and non-matching data INSERT INTO items ( description , embedding ) SELECT CASE WHEN g % 1000 = 0 THEN 'product ' md5 ( random ():: text ) ' common' -- 0.1% match ELSE 'generic item ' g ' ' md5 ( random ():: text ) -- 99.9% don't match END , random vector ( 512 ) -- Assumes random vector function exists FROM generate series ( 1 , 999999 ) g ; Measure the baseline performance of the vector similarity search without the columnar engine.
- Even though the word music isn't included in the product description, the result shows products that are relevant to the query: SET LOCAL scann . num leaves to search = 2 ; SELECT FROM product ORDER BY embedding < = > embedding ( 'text-embedding-005' , 'music' ):: vector LIMIT 3 ; The query results are as follows: The scann.num leaves to search query parameter controls the number of leaf nodes that are searched during a similarity search.
- Run the following complex vector search query, which returns relevant results that satisfy the query conditions, even with filters: SET LOCAL scann . num leaves to search = 2 ; SELECT FROM product p JOIN product inventory pi ON p . id = pi . product id WHERE pi . price < 80 .
- To compare the execution time of a KNN vector search filtered by a LIKE predicate before and after you enable the columnar engine, follow these steps: Enable the vector extension to support vector data types and operations.

