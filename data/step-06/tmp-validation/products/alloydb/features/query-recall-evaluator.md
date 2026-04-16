---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:15:29.111Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "Query recall evaluator"
feature_slug: "query-recall-evaluator"
latest_feature_date: "2025-03-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/ai/measure-vector-query-recall"
  - "https://docs.cloud.google.com/alloydb/docs/ai/tune-indexes"
  - "https://docs.cloud.google.com/alloydb/docs/ai/perform-vector-search"
keywords:
  - "evaluator"
  - "measures"
  - "tune"
  - "recall"
  - "configuration"
  - "vector"
  - "helps"
  - "query"
---

# Query recall evaluator

Product: AlloyDB
Coverage: MEDIUM

## Step 02 Summary

The query recall evaluator measures vector query recall for a configuration and helps tune parameters to reach desired recall results.

## Extended Definition

The query recall evaluator measures vector query recall for a configuration and helps tune parameters to reach desired recall results.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/ai/measure-vector-query-recall](https://docs.cloud.google.com/alloydb/docs/ai/measure-vector-query-recall)
- [https://docs.cloud.google.com/alloydb/docs/ai/tune-indexes](https://docs.cloud.google.com/alloydb/docs/ai/tune-indexes)
- [https://docs.cloud.google.com/alloydb/docs/ai/perform-vector-search](https://docs.cloud.google.com/alloydb/docs/ai/perform-vector-search)

## Supporting Pages

### "Measure vector query recall \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/alloydb/docs/ai/measure-vector-query-recall](https://docs.cloud.google.com/alloydb/docs/ai/measure-vector-query-recall)
- Source ID: `site-docs-root-2`
- Final score: 231
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- This might mean that the vector index is not present on the table or index scan not chosen during query execution. id query configurations recall ann execution time ground truth execution time index type ----+-------------------------------------------------------------------+------------------------------------------------------------------------------------------------+--------+--------------------+-----------------------------+------------ 1 SELECT id FROM t1 ORDER BY val <=> '[1000,1000,49000]' LIMIT 10 {"scann.num leaves to search":1, "scann.pre reordering num neighbors":10, "hnsw.ef search": 1} 0.5 4.23 118.211 scann 2 SELECT id FROM t1 ORDER BY val <=> '[1000,1000,49000]' LIMIT 10 {"scann.num leaves to search":1, "scann.pre reordering num neighbors":10, "hnsw.ef search": 1} 1 107.198 118.211 hnsw (2 rows) If the result is Recall is 1 (recall of the query is 1 ), this might indicate that the vector index isn't present on the table or that the vector index wasn't chosen during query execution.
- CREATE EXTENSION IF NOT EXISTS alloydb scann ; Evaluate recall for vector queries on a vector index You can find the recall for a vector query on a vector index for a given configuration using the evaluate query recall function.
- In a vector query, recall is important because it measures the percentage of relevant results retrieved from a search.
- This function lets you tune your parameters to achieve the vector query recall results that you want.

### "Tune vector query performance in AlloyDB for PostgreSQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/alloydb/docs/ai/tune-indexes](https://docs.cloud.google.com/alloydb/docs/ai/tune-indexes)
- Source ID: `site-docs-reference-2`
- Final score: 160
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation Databases AlloyDB for PostgreSQL Guides Send feedback Tune vector query performance in AlloyDB for PostgreSQL Stay organized with collections Save and categorize content based on your preferences.
- This page describes how to tune your indexes to achieve faster query performance and better recall in AlloyDB for PostgreSQL.
- Consider the following examples for two-level and three-level ScaNN indexes that show how tuning parameters are set for a table with 1000000 rows: Two-level index SET LOCAL scann . num leaves to search = 1 ; SET LOCAL scann . pre reordering num neighbors = 50 ; CREATE INDEX my scann index ON my table USING scann ( vector column cosine ) WITH ( num leaves = [ power ( 1000000 , 1 / 2 )]); Three-level index SET LOCAL scann . num leaves to search = 10 ; SET LOCAL scann . pre reordering num neighbors = 50 ; CREATE INDEX my scann index ON my table USING scann ( vector column cosine ) WITH ( num leaves = [ power ( 1000000 , 2 / 3 )], max num levels = 2 ); To optimize the balance between recall and QPS when tuning ScaNN indexes, see Best practices for tuning ScaNN indexes .
- Limit (cost=0.42..15.27 rows=1 width=32) (actual time=0.106..0.132 rows=1 loops=1) -> Index Scan using my scann index on my table (cost=0.42..858027.93 rows=100000 width=32) (actual time=0.105..0.129 rows=1 loops=1) Order By: (embedding column <-> embedding('text-embedding-005', 'What is a database?')::vector(768)) Limit value: 1 Planning Time: 0.354 ms Execution Time: 0.141 ms View vector index metrics You can use vector index metrics to review performance of your vector index, identify areas for improvement, and tune your index based on the metrics, if needed.

### "Perform a vector search \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/alloydb/docs/ai/perform-vector-search](https://docs.cloud.google.com/alloydb/docs/ai/perform-vector-search)
- Source ID: `site-docs-reference-2`
- Final score: 126
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- This means that even though the word music isn't explicitly mentioned in the product description, the result shows products that are relevant to the query: SELECT FROM product ORDER BY embedding < = > embedding ( 'text-embedding-005' , 'music' ):: vector LIMIT 3 ; The result of the query is as follows: Performing a basic vector search without creating an index uses exact nearest neighbor search (KNN), which provides efficient recall.
- For more information on how to tune this parameter, see Tune vector query performance .
- Even though the word music isn't included in the product description, the result shows products that are relevant to the query: SET LOCAL scann . num leaves to search = 2 ; SELECT FROM product ORDER BY embedding < = > embedding ( 'text-embedding-005' , 'music' ):: vector LIMIT 3 ; The query results are as follows: The scann.num leaves to search query parameter controls the number of leaf nodes that are searched during a similarity search.
- Install required extensions Run the following query to install the vector and alloydb scann extensions: CREATE EXTENSION IF NOT EXISTS vector ; CREATE EXTENSION IF NOT EXISTS alloydb scann ; Insert product and product inventory data and perform a basic vector search Run the following statement to create a product table that does the following: Stores basic product information.

