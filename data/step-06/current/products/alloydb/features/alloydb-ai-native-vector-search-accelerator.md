---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:53:29.472Z"
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
  - "https://docs.cloud.google.com/alloydb/docs/ai/example-embeddings"
keywords:
  - "alloydb"
  - "ai"
  - "native"
  - "vector"
  - "search"
  - "accelerator"
  - "improves"
  - "performance"
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
- [https://docs.cloud.google.com/alloydb/docs/ai/example-embeddings](https://docs.cloud.google.com/alloydb/docs/ai/example-embeddings)

## Supporting Pages

### "Perform a vector search \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/alloydb/docs/ai/perform-vector-search](https://docs.cloud.google.com/alloydb/docs/ai/perform-vector-search)
- Source ID: `site-docs-reference-2`
- Final score: 147
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To use the gcloud CLI, you can install and initialize the gcloud CLI. gcloud beta alloydb instances update INSTANCE ID \ --cluster = CLUSTER ID \ --region = REGION ID \ --project = PROJECT ID \ --database-flags = google columnar engine.enabled = on,google columnar engine.enable vector support = on Add the items table to the columnar engine: SELECT google columnar engine add ( 'items' ); Measure the performance of the vector similarity search using the columnar engine.
- CREATE EXTENSION IF NOT EXISTS vector ; CREATE TABLE items ( id SERIAL PRIMARY KEY , description TEXT , embedding VECTOR ( 512 ) ); Populate the data by running the following statements to insert 1 million rows into the example items table. -- Simplified example of inserting matching ( 0.1%) and non-matching data INSERT INTO items ( description , embedding ) SELECT CASE WHEN g % 1000 = 0 THEN 'product ' md5 ( random ():: text ) ' common' -- 0.1% match ELSE 'generic item ' g ' ' md5 ( random ():: text ) -- 99.9% don't match END , random vector ( 512 ) -- Assumes random vector function exists FROM generate series ( 1 , 999999 ) g ; Measure the baseline performance of the vector similarity search without the columnar engine.
- Install required extensions Run the following query to install the vector and alloydb scann extensions: CREATE EXTENSION IF NOT EXISTS vector ; CREATE EXTENSION IF NOT EXISTS alloydb scann ; Insert product and product inventory data and perform a basic vector search Run the following statement to create a product table that does the following: Stores basic product information.
- 00 ORDER BY embedding < = > embedding ( 'text-embedding-005' , 'music' ):: vector LIMIT 3 ; Accelerate your filtered vector search You can use the columnar engine content store to improve the performance of vector similarity searches, specifically K-Nearest Neighbor (KNN) searches, when combined with highly selective predicate filtering —for example, using LIKE — in databases.

### "Run a hybrid vector similarity search \_|\_ AlloyDB for PostgreSQL \_|\_\

- URL: [https://docs.cloud.google.com/alloydb/docs/ai/run-hybrid-vector-similarity-search](https://docs.cloud.google.com/alloydb/docs/ai/run-hybrid-vector-similarity-search)
- Source ID: `site-api-reference-required-2`
- Final score: 132
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- DROP TABLE IF EXISTS product logs ; CREATE TABLE product logs ( log id str TEXT PRIMARY KEY , content TEXT , content tsv tsvector GENERATED ALWAYS AS ( to tsvector ( 'english' , content )) STORED ); INSERT INTO product logs VALUES ( '999' , 'system start' ); SELECT id , pg typeof ( id ), score FROM ai . hybrid search ( ARRAY [ '{ "data type": "text", "table name": "product logs", "key column": "log id str", "text column": "content tsv", "query text input": "system", "limit": 1 }' :: jsonb ], id type = > NULL :: INTEGER --- CAST to INT ); Choose a text search query parser When you perform full-text search, AlloyDB provides the g to tsquery() function to achieve high-relevance information retrieval. g to tsquery() , which is the default, improves information retrieval by transforming plain text or standard tsquery formats into a more data-rich tsquery output.
- INSERT INTO documents ( doc id , content ) VALUES ( 'doc1' , 'AlloyDB is a fully managed, PostgreSQL-compatible database service.' ), ( 'doc2' , 'It offers enterprise-grade performance, availability, and security.' ), ( 'doc3' , 'You can use it for demanding transactional and analytical workloads.' ), ( 'doc4' , 'AlloyDB integrates with Google Cloud services like Vertex AI.' ), ( 'doc5' , 'The database supports vector embeddings for semantic search.' ), ( 'doc6' , 'alloydb scann is an AlloyDB specific extension that provides scann index for vector search.' ), ( 'doc7' , 'alloydb scann extension depends upon pgvector extension ' ), ( 'doc8' , 'With alloydb scann extension' ), ( 'doc9' , 'customers can create scann index' ), ( 'doc10' , 'to speed up their vector search workloads' ); Create indexes to accelerate search performance.
- Enable preview AI functions: SET google ml integration . enable preview ai functions = true ; Run a similarity search with text and vector input To perform a hybrid search in AlloyDB, you create a vector index and a text search index on your table.
- Perform a hybrid search using LangChain Hybrid search with the AlloyDB vector store enhances search accuracy by combining two different lookup strategies: dense embedding vector search and keyword-based search.

### "Perform a vector search \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/alloydb/docs/ai/example-embeddings](https://docs.cloud.google.com/alloydb/docs/ai/example-embeddings)
- Source ID: `site-docs-reference-required-7`
- Final score: 127
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To use the gcloud CLI, you can install and initialize the gcloud CLI. gcloud beta alloydb instances update INSTANCE ID \ --cluster = CLUSTER ID \ --region = REGION ID \ --project = PROJECT ID \ --database-flags = google columnar engine.enabled = on,google columnar engine.enable vector support = on Add the items table to the columnar engine: SELECT google columnar engine add ( 'items' ); Measure the performance of the vector similarity search using the columnar engine.
- CREATE EXTENSION IF NOT EXISTS vector ; CREATE TABLE items ( id SERIAL PRIMARY KEY , description TEXT , embedding VECTOR ( 512 ) ); Populate the data by running the following statements to insert 1 million rows into the example items table. -- Simplified example of inserting matching ( 0.1%) and non-matching data INSERT INTO items ( description , embedding ) SELECT CASE WHEN g % 1000 = 0 THEN 'product ' md5 ( random ():: text ) ' common' -- 0.1% match ELSE 'generic item ' g ' ' md5 ( random ():: text ) -- 99.9% don't match END , random vector ( 512 ) -- Assumes random vector function exists FROM generate series ( 1 , 999999 ) g ; Measure the baseline performance of the vector similarity search without the columnar engine.
- Install required extensions Run the following query to install the vector and alloydb scann extensions: CREATE EXTENSION IF NOT EXISTS vector ; CREATE EXTENSION IF NOT EXISTS alloydb scann ; Insert product and product inventory data and perform a basic vector search Run the following statement to create a product table that does the following: Stores basic product information.
- 00 ORDER BY embedding < = > embedding ( 'text-embedding-005' , 'music' ):: vector LIMIT 3 ; Accelerate your filtered vector search You can use the columnar engine content store to improve the performance of vector similarity searches, specifically K-Nearest Neighbor (KNN) searches, when combined with highly selective predicate filtering —for example, using LIKE — in databases.

