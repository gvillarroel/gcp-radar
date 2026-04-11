---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:07:37.579Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "Columnar engine for filtered vector similarity search"
feature_slug: "columnar-engine-for-filtered-vector-similarity-search"
latest_feature_date: "2025-06-17"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/columnar-engine/about"
  - "https://docs.cloud.google.com/alloydb/docs/ai/perform-vector-search"
  - "https://docs.cloud.google.com/alloydb/docs/release-notes"
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
Coverage: HIGH

## Step 02 Summary

AlloyDB introduces a columnar engine to improve KNN vector similarity search performance when combined with highly selective predicate filtering.

## Extended Definition

The AlloyDB columnar engine feature improves performance for vector similarity searches that include highly selective predicate filters, specifically K-Nearest Neighbor (KNN) searches, by using the columnar engine content store for those queries. In practice, this involves enabling the columnar engine (including vector support), loading target tables into the columnar engine, and running filtered KNN queries (for example, predicates with `LIKE`) while observing query execution to confirm columnar-engine usage. The feature was announced in AlloyDB release notes on June 17, 2025, with later notes also mentioning related vector-search enhancements via ScaNN in the columnar engine.

## Evidence Summary

The cited AlloyDB documentation defines the columnar engine’s role in accelerating filtered KNN vector similarity searches, provides usage guidance (enable engine, add tables, run filtered vector queries), and records the feature’s release-note announcement date.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/columnar-engine/about](https://docs.cloud.google.com/alloydb/docs/columnar-engine/about)
- [https://docs.cloud.google.com/alloydb/docs/ai/perform-vector-search](https://docs.cloud.google.com/alloydb/docs/ai/perform-vector-search)
- [https://docs.cloud.google.com/alloydb/docs/release-notes](https://docs.cloud.google.com/alloydb/docs/release-notes)

## Supporting Pages

### "About the AlloyDB columnar engine \_|\_ AlloyDB for PostgreSQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/alloydb/docs/columnar-engine/about](https://docs.cloud.google.com/alloydb/docs/columnar-engine/about)
- Source ID: `site-docs-root`
- Final score: 44
- Re-rank relevance: N/A

Evidence snippets:
- The columnar engine supports only columns with the following built-in data types: array bigint boolean bytea char date decimal double precision enum float4 float8 integer json jsonb numeric real serial short smallint text timestamp timestamptz uuid varchar vector The columnar engine ignores any attempts to manually add columns with unsupported data types to the column store.
- Unsupported data sources The columnar engine does not support tables or materialized views with the following attributes as data sources: Non-leaf partitioned tables Foreign tables Columnar engine limitations If you're running an analytical query on a column that has an index, the AlloyDB optimizer may choose to use row-store.
- The AlloyDB columnar engine accelerates SQL query processing of scans, joins, and aggregates by providing these components: A column store that contains table and materialized-view data for selected columns, reorganized into a column-oriented format.
- For tables or views with a small number of rows, typically fewer than 5,000, the query planner might choose to use the row-store instead of the column store for better performance, even if the data is successfully loaded into the columnar engine.

### "Perform a vector search \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/alloydb/docs/ai/perform-vector-search](https://docs.cloud.google.com/alloydb/docs/ai/perform-vector-search)
- Source ID: `site-docs-root`
- Final score: 42
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- 00 ORDER BY embedding < = > embedding ( 'text-embedding-005' , 'music' ):: vector LIMIT 3 ; Accelerate your filtered vector search You can use the columnar engine content store to improve the performance of vector similarity searches, specifically K-Nearest Neighbor (KNN) searches, when combined with highly selective predicate filtering —for example, using LIKE — in databases.
- CREATE EXTENSION IF NOT EXISTS vector ; CREATE TABLE items ( id SERIAL PRIMARY KEY , description TEXT , embedding VECTOR ( 512 ) ); Populate the data by running the following statements to insert 1 million rows into the example items table. -- Simplified example of inserting matching ( 0.1%) and non-matching data INSERT INTO items ( description , embedding ) SELECT CASE WHEN g % 1000 = 0 THEN 'product ' md5 ( random ():: text ) ' common' -- 0.1% match ELSE 'generic item ' g ' ' md5 ( random ():: text ) -- 99.9% don't match END , random vector ( 512 ) -- Assumes random vector function exists FROM generate series ( 1 , 999999 ) g ; Measure the baseline performance of the vector similarity search without the columnar engine.
- To use the gcloud CLI, you can install and initialize the gcloud CLI. gcloud beta alloydb instances update INSTANCE ID \ --cluster = CLUSTER ID \ --region = REGION ID \ --project = PROJECT ID \ --database-flags = google columnar engine.enabled = on,google columnar engine.enable vector support = on Add the items table to the columnar engine: SELECT google columnar engine add ( 'items' ); Measure the performance of the vector similarity search using the columnar engine.
- SELECT id , description , embedding < - > '[...]' AS distance FROM items WHERE description LIKE '%product % common%' ORDER BY embedding < - > '[...]' LIMIT 100 ; To check whether the query ran with the columnar engine, run the following command: explain ( analyze ) SELECT id , description , embedding < - > '[...]' AS distance FROM items WHERE description LIKE '%product % common%' ORDER BY embedding < - > '[...]' LIMIT 100 ; Clean up In the Google Cloud console, go to the Clusters page.

### AlloyDB for PostgreSQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/alloydb/docs/release-notes](https://docs.cloud.google.com/alloydb/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 42
- Re-rank relevance: N/A

Evidence snippets:
- June 17, 2025 Feature You can use the columnar engine to improve the performance of vector similarity searches, specifically K-Nearest Neighbor (KNN) searches, when combined with highly-selective predicate filtering.
- You can now accelerate your vector similarity search by loading ScaNN indexes into the columnar engine .
- October 31, 2025 Announcement The alloydb scann extension version 0.1.3 is updated to include the following vector search improvements, which are now Generally Available ( GA ): The columnar engine now automatically includes vector columns in searches, so you don't need to add them to the table manually.
- It includes the following features and improvements: The google columnar engine extension is updated to automatically recommend data for searches, so you don't need to manually add vector columns to the table.

