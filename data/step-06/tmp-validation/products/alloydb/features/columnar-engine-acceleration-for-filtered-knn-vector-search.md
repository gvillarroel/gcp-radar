---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:15:29.095Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "Columnar engine acceleration for filtered KNN vector search"
feature_slug: "columnar-engine-acceleration-for-filtered-knn-vector-search"
latest_feature_date: "2025-06-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/ai/perform-vector-search"
  - "https://docs.cloud.google.com/alloydb/docs/ai/filtered-vector-search-overview"
  - "https://docs.cloud.google.com/alloydb/docs/columnar-engine/configure"
keywords:
  - "acceleration"
  - "filtered"
  - "search"
  - "columnar"
  - "vector"
  - "engine"
---

# Columnar engine acceleration for filtered KNN vector search

Product: AlloyDB
Coverage: MEDIUM

## Step 02 Summary

The columnar engine can accelerate K-Nearest Neighbor vector similarity searches when combined with highly selective predicate filtering.

## Extended Definition

The columnar engine can accelerate K-Nearest Neighbor vector similarity searches when combined with highly selective predicate filtering.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/ai/perform-vector-search](https://docs.cloud.google.com/alloydb/docs/ai/perform-vector-search)
- [https://docs.cloud.google.com/alloydb/docs/ai/filtered-vector-search-overview](https://docs.cloud.google.com/alloydb/docs/ai/filtered-vector-search-overview)
- [https://docs.cloud.google.com/alloydb/docs/columnar-engine/configure](https://docs.cloud.google.com/alloydb/docs/columnar-engine/configure)

## Supporting Pages

### "Perform a vector search \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/alloydb/docs/ai/perform-vector-search](https://docs.cloud.google.com/alloydb/docs/ai/perform-vector-search)
- Source ID: `site-docs-reference-2`
- Final score: 193
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- 00 ORDER BY embedding < = > embedding ( 'text-embedding-005' , 'music' ):: vector LIMIT 3 ; Accelerate your filtered vector search You can use the columnar engine content store to improve the performance of vector similarity searches, specifically K-Nearest Neighbor (KNN) searches, when combined with highly selective predicate filtering —for example, using LIKE — in databases.
- To compare the execution time of a KNN vector search filtered by a LIKE predicate before and after you enable the columnar engine, follow these steps: Enable the vector extension to support vector data types and operations.
- CREATE EXTENSION IF NOT EXISTS vector ; CREATE TABLE items ( id SERIAL PRIMARY KEY , description TEXT , embedding VECTOR ( 512 ) ); Populate the data by running the following statements to insert 1 million rows into the example items table. -- Simplified example of inserting matching ( 0.1%) and non-matching data INSERT INTO items ( description , embedding ) SELECT CASE WHEN g % 1000 = 0 THEN 'product ' md5 ( random ():: text ) ' common' -- 0.1% match ELSE 'generic item ' g ' ' md5 ( random ():: text ) -- 99.9% don't match END , random vector ( 512 ) -- Assumes random vector function exists FROM generate series ( 1 , 999999 ) g ; Measure the baseline performance of the vector similarity search without the columnar engine.
- To use the gcloud CLI, you can install and initialize the gcloud CLI. gcloud beta alloydb instances update INSTANCE ID \ --cluster = CLUSTER ID \ --region = REGION ID \ --project = PROJECT ID \ --database-flags = google columnar engine.enabled = on,google columnar engine.enable vector support = on Add the items table to the columnar engine: SELECT google columnar engine add ( 'items' ); Measure the performance of the vector similarity search using the columnar engine.

### "Filtered vector search in AlloyDB overview \_|\_ AlloyDB for PostgreSQL\

- URL: [https://docs.cloud.google.com/alloydb/docs/ai/filtered-vector-search-overview](https://docs.cloud.google.com/alloydb/docs/ai/filtered-vector-search-overview)
- Source ID: `site-docs-reference`
- Final score: 156
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The following query demonstrates inline filtering for a shoes search filtered by color = black EXPLAIN SELECT FROM products WHERE color = 'black' ORDER BY embedding < = > embedding ( 'text-embedding-005' , 'shoes' ):: vector LIMIT 10 ; The following example query plan illustrates an optimized vector search using inline filtering: Limit ( actual rows = 10 ) - > Custom Scan ( vector scan ) on products Execution Strategy : Bitmap assisted vector Scan on products embedding index Order By : ( embedding < = > '[...]' ):: vector ) Limit : 10 - > Bitmap Index Scan on products ( color index ) Index Cond : ( color = 'black' ) In the example query plan, Limit (actual rows=10) shows that the query used the SQL LIMIT 10; clause to restrict the output. actual rows=10 means this node returned 10 rows during query execution.
- Home Documentation Databases AlloyDB for PostgreSQL Guides Send feedback Filtered vector search in AlloyDB overview Stay organized with collections Save and categorize content based on your preferences.
- A filtered vector search consists of a query vector and a filter for a specific field.
- This page gives an overview of filtered vector search in AlloyDB for PostgreSQL.

### "Configure the columnar engine \_|\_ AlloyDB for PostgreSQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/alloydb/docs/columnar-engine/configure](https://docs.cloud.google.com/alloydb/docs/columnar-engine/configure)
- Source ID: `site-docs-reference-2`
- Final score: 151
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The columnar engine accelerates vector search when ScaNN indexes are populated into it.
- Enable vectorized join The columnar engine has a vectorized join feature that can improve the performance of joins by applying vectorized processing to qualifying queries.
- You can increase the number of threads available to this feature by setting the google columnar engine.vectorized join threads flag to a larger value.
- To enable vectorized join on an instance, set the instance's google columnar engine.enable vectorized join flag to on .

