---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:07:33.828Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "Columnar engine for filtered vector similarity search"
feature_slug: "columnar-engine-for-filtered-vector-similarity-search"
latest_feature_date: "2025-06-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/ai/tune-indexes"
  - "https://docs.cloud.google.com/alloydb/docs/ai/activate-adaptive-filtering"
  - "https://docs.cloud.google.com/alloydb/docs/ai/maintain-vector-indexes"
  - "https://docs.cloud.google.com/alloydb/docs/ai/perform-vector-search"
keywords:
  - "filtered vector similarity search"
  - "selective predicate filtering"
  - "predicate-filtered vector search"
  - "KNN search with filters"
  - "filtered KNN"
  - "vector similarity"
  - "columnar search"
  - "columnar engine"
---

# Columnar engine for filtered vector similarity search

Product: AlloyDB
Coverage: MEDIUM

## Step 02 Summary

AlloyDB introduces a columnar engine to improve KNN vector similarity search performance when combined with highly selective predicate filtering.

## Extended Definition

AlloyDB introduces a columnar engine to improve KNN vector similarity search performance when combined with highly selective predicate filtering.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/ai/tune-indexes](https://docs.cloud.google.com/alloydb/docs/ai/tune-indexes)
- [https://docs.cloud.google.com/alloydb/docs/ai/activate-adaptive-filtering](https://docs.cloud.google.com/alloydb/docs/ai/activate-adaptive-filtering)
- [https://docs.cloud.google.com/alloydb/docs/ai/maintain-vector-indexes](https://docs.cloud.google.com/alloydb/docs/ai/maintain-vector-indexes)
- [https://docs.cloud.google.com/alloydb/docs/ai/perform-vector-search](https://docs.cloud.google.com/alloydb/docs/ai/perform-vector-search)

## Supporting Pages

### "Tune vector query performance in AlloyDB for PostgreSQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/alloydb/docs/ai/tune-indexes](https://docs.cloud.google.com/alloydb/docs/ai/tune-indexes)
- Source ID: `site-docs-reference-2`
- Final score: 96
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

### "Activate adaptive filtering in AlloyDB AI \_|\_ AlloyDB for PostgreSQL \_\

- URL: [https://docs.cloud.google.com/alloydb/docs/ai/activate-adaptive-filtering](https://docs.cloud.google.com/alloydb/docs/ai/activate-adaptive-filtering)
- Source ID: `site-docs-reference-2`
- Final score: 94
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

### "Maintain vector indexes \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/alloydb/docs/ai/maintain-vector-indexes](https://docs.cloud.google.com/alloydb/docs/ai/maintain-vector-indexes)
- Source ID: `site-docs-root-2`
- Final score: 94
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

### "Perform a vector search \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/alloydb/docs/ai/perform-vector-search](https://docs.cloud.google.com/alloydb/docs/ai/perform-vector-search)
- Source ID: `site-docs-reference-2`
- Final score: 91
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- 00 ORDER BY embedding < = > embedding ( 'text-embedding-005' , 'music' ):: vector LIMIT 3 ; Accelerate your filtered vector search You can use the columnar engine content store to improve the performance of vector similarity searches, specifically K-Nearest Neighbor (KNN) searches, when combined with highly selective predicate filtering —for example, using LIKE — in databases.
- CREATE EXTENSION IF NOT EXISTS vector ; CREATE TABLE items ( id SERIAL PRIMARY KEY , description TEXT , embedding VECTOR ( 512 ) ); Populate the data by running the following statements to insert 1 million rows into the example items table. -- Simplified example of inserting matching ( 0.1%) and non-matching data INSERT INTO items ( description , embedding ) SELECT CASE WHEN g % 1000 = 0 THEN 'product ' md5 ( random ():: text ) ' common' -- 0.1% match ELSE 'generic item ' g ' ' md5 ( random ():: text ) -- 99.9% don't match END , random vector ( 512 ) -- Assumes random vector function exists FROM generate series ( 1 , 999999 ) g ; Measure the baseline performance of the vector similarity search without the columnar engine.
- To use the gcloud CLI, you can install and initialize the gcloud CLI. gcloud beta alloydb instances update INSTANCE ID \ --cluster = CLUSTER ID \ --region = REGION ID \ --project = PROJECT ID \ --database-flags = google columnar engine.enabled = on,google columnar engine.enable vector support = on Add the items table to the columnar engine: SELECT google columnar engine add ( 'items' ); Measure the performance of the vector similarity search using the columnar engine.
- SELECT id , description , embedding < - > '[...]' AS distance FROM items WHERE description LIKE '%product % common%' ORDER BY embedding < - > '[...]' LIMIT 100 ; To check whether the query ran with the columnar engine, run the following command: explain ( analyze ) SELECT id , description , embedding < - > '[...]' AS distance FROM items WHERE description LIKE '%product % common%' ORDER BY embedding < - > '[...]' LIMIT 100 ; Clean up In the Google Cloud console, go to the Clusters page.

