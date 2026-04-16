---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:15:29.079Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "AlloyDB AI native vector search accelerator"
feature_slug: "alloydb-ai-native-vector-search-accelerator"
latest_feature_date: "2025-11-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/ai/perform-vector-search"
  - "https://docs.cloud.google.com/alloydb/docs/ai/run-hybrid-vector-similarity-search"
  - "https://docs.cloud.google.com/alloydb/docs/ai/filtered-vector-search-overview"
keywords:
  - "accelerator"
  - "native"
  - "improves"
  - "performance"
  - "search"
  - "vector"
---

# AlloyDB AI native vector search accelerator

Product: AlloyDB
Coverage: MEDIUM

## Step 02 Summary

AlloyDB AI native vector search accelerator improves vector search performance and management in AlloyDB.

## Extended Definition

AlloyDB AI native vector search accelerator improves vector search performance and management in AlloyDB.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/ai/perform-vector-search](https://docs.cloud.google.com/alloydb/docs/ai/perform-vector-search)
- [https://docs.cloud.google.com/alloydb/docs/ai/run-hybrid-vector-similarity-search](https://docs.cloud.google.com/alloydb/docs/ai/run-hybrid-vector-similarity-search)
- [https://docs.cloud.google.com/alloydb/docs/ai/filtered-vector-search-overview](https://docs.cloud.google.com/alloydb/docs/ai/filtered-vector-search-overview)

## Supporting Pages

### "Perform a vector search \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/alloydb/docs/ai/perform-vector-search](https://docs.cloud.google.com/alloydb/docs/ai/perform-vector-search)
- Source ID: `site-docs-reference-2`
- Final score: 147
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- CREATE EXTENSION IF NOT EXISTS vector ; CREATE TABLE items ( id SERIAL PRIMARY KEY , description TEXT , embedding VECTOR ( 512 ) ); Populate the data by running the following statements to insert 1 million rows into the example items table. -- Simplified example of inserting matching ( 0.1%) and non-matching data INSERT INTO items ( description , embedding ) SELECT CASE WHEN g % 1000 = 0 THEN 'product ' md5 ( random ():: text ) ' common' -- 0.1% match ELSE 'generic item ' g ' ' md5 ( random ():: text ) -- 99.9% don't match END , random vector ( 512 ) -- Assumes random vector function exists FROM generate series ( 1 , 999999 ) g ; Measure the baseline performance of the vector similarity search without the columnar engine.
- To use the gcloud CLI, you can install and initialize the gcloud CLI. gcloud beta alloydb instances update INSTANCE ID \ --cluster = CLUSTER ID \ --region = REGION ID \ --project = PROJECT ID \ --database-flags = google columnar engine.enabled = on,google columnar engine.enable vector support = on Add the items table to the columnar engine: SELECT google columnar engine add ( 'items' ); Measure the performance of the vector similarity search using the columnar engine.
- 00 ORDER BY embedding < = > embedding ( 'text-embedding-005' , 'music' ):: vector LIMIT 3 ; Accelerate your filtered vector search You can use the columnar engine content store to improve the performance of vector similarity searches, specifically K-Nearest Neighbor (KNN) searches, when combined with highly selective predicate filtering —for example, using LIKE — in databases.
- Even though the word music isn't included in the product description, the result shows products that are relevant to the query: SET LOCAL scann . num leaves to search = 2 ; SELECT FROM product ORDER BY embedding < = > embedding ( 'text-embedding-005' , 'music' ):: vector LIMIT 3 ; The query results are as follows: The scann.num leaves to search query parameter controls the number of leaf nodes that are searched during a similarity search.

### "Run a hybrid vector similarity search \_|\_ AlloyDB for PostgreSQL \_|\_\

- URL: [https://docs.cloud.google.com/alloydb/docs/ai/run-hybrid-vector-similarity-search](https://docs.cloud.google.com/alloydb/docs/ai/run-hybrid-vector-similarity-search)
- Source ID: `site-docs-reference-2`
- Final score: 132
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- DROP TABLE IF EXISTS product logs ; CREATE TABLE product logs ( log id str TEXT PRIMARY KEY , content TEXT , content tsv tsvector GENERATED ALWAYS AS ( to tsvector ( 'english' , content )) STORED ); INSERT INTO product logs VALUES ( '999' , 'system start' ); SELECT id , pg typeof ( id ), score FROM ai . hybrid search ( ARRAY [ '{ "data type": "text", "table name": "product logs", "key column": "log id str", "text column": "content tsv", "query text input": "system", "limit": 1 }' :: jsonb ], id type = > NULL :: INTEGER --- CAST to INT ); Choose a text search query parser When you perform full-text search, AlloyDB provides the g to tsquery() function to achieve high-relevance information retrieval. g to tsquery() , which is the default, improves information retrieval by transforming plain text or standard tsquery formats into a more data-rich tsquery output.
- INSERT INTO documents ( doc id , content ) VALUES ( 'doc1' , 'AlloyDB is a fully managed, PostgreSQL-compatible database service.' ), ( 'doc2' , 'It offers enterprise-grade performance, availability, and security.' ), ( 'doc3' , 'You can use it for demanding transactional and analytical workloads.' ), ( 'doc4' , 'AlloyDB integrates with Google Cloud services like Vertex AI.' ), ( 'doc5' , 'The database supports vector embeddings for semantic search.' ), ( 'doc6' , 'alloydb scann is an AlloyDB specific extension that provides scann index for vector search.' ), ( 'doc7' , 'alloydb scann extension depends upon pgvector extension ' ), ( 'doc8' , 'With alloydb scann extension' ), ( 'doc9' , 'customers can create scann index' ), ( 'doc10' , 'to speed up their vector search workloads' ); Create indexes to accelerate search performance.
- Hybrid search improves search relevance by combining standard keyword-based text search with semantic vector search.
- CREATE TABLE product logs ( log id str TEXT PRIMARY KEY , content TEXT , content tsv tsvector GENERATED ALWAYS AS ( to tsvector ( 'english' , content )) STORED ); INSERT INTO product logs ( log id str , content ) VALUES ( '999' , 'system start and services initialized' ); CREATE INDEX idx product logs rum ON product logs USING rum ( content tsv rum tsvector ops ); SELECT id , pg typeof ( id ) FROM ai . hybrid search ( ARRAY [ '{ "data type": "text", "table name": "product logs", "key column": "log id str", "text column": "content tsv", "query text input": "system", "limit": 1 }' :: jsonb ], id type = > NULL :: INTEGER ); The output shows that the id column is cast to INTEGER : id pg typeof ------+----------- 999 integer (1 rows) The following example shows why specifying the data type for the return ID column is important, by showing what happens when there's a mismatch.

### "Filtered vector search in AlloyDB overview \_|\_ AlloyDB for PostgreSQL\

- URL: [https://docs.cloud.google.com/alloydb/docs/ai/filtered-vector-search-overview](https://docs.cloud.google.com/alloydb/docs/ai/filtered-vector-search-overview)
- Source ID: `site-docs-reference`
- Final score: 126
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- This strategy improves performance because it runs the computationally intensive vector similarity search on a reduced dataset.
- The following query demonstrates inline filtering for a shoes search filtered by color = black EXPLAIN SELECT FROM products WHERE color = 'black' ORDER BY embedding < = > embedding ( 'text-embedding-005' , 'shoes' ):: vector LIMIT 10 ; The following example query plan illustrates an optimized vector search using inline filtering: Limit ( actual rows = 10 ) - > Custom Scan ( vector scan ) on products Execution Strategy : Bitmap assisted vector Scan on products embedding index Order By : ( embedding < = > '[...]' ):: vector ) Limit : 10 - > Bitmap Index Scan on products ( color index ) Index Cond : ( color = 'black' ) In the example query plan, Limit (actual rows=10) shows that the query used the SQL LIMIT 10; clause to restrict the output. actual rows=10 means this node returned 10 rows during query execution.
- The example query plan for inline filtering shows Bitmap assisted vector Scan on products embedding index in the Execution Strategy field, which indicates that the vector scan uses the bitmap to create a shortlist of rows on which similarity search needs to be performed.
- What's next Adaptive filtering in AlloyDB Perform a vector search Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

