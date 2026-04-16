---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:15:29.080Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "Automatic vector data recommendation"
feature_slug: "automatic-vector-data-recommendation"
latest_feature_date: "2025-11-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/columnar-engine/configure"
  - "https://docs.cloud.google.com/alloydb/docs/ai/perform-vector-search"
  - "https://docs.cloud.google.com/alloydb/docs/columnar-engine/about"
keywords:
  - "recommend"
  - "recommendation"
  - "searches"
  - "updates"
  - "automatic"
  - "columnar"
  - "vector"
  - "engine"
---

# Automatic vector data recommendation

Product: AlloyDB
Coverage: MEDIUM

## Step 02 Summary

Automatic vector data recommendation updates google_columnar_engine to recommend data for searches without manually adding vector columns to a table.

## Extended Definition

Automatic vector data recommendation updates google_columnar_engine to recommend data for searches without manually adding vector columns to a table.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/columnar-engine/configure](https://docs.cloud.google.com/alloydb/docs/columnar-engine/configure)
- [https://docs.cloud.google.com/alloydb/docs/ai/perform-vector-search](https://docs.cloud.google.com/alloydb/docs/ai/perform-vector-search)
- [https://docs.cloud.google.com/alloydb/docs/columnar-engine/about](https://docs.cloud.google.com/alloydb/docs/columnar-engine/about)

## Supporting Pages

### "Configure the columnar engine \_|\_ AlloyDB for PostgreSQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/alloydb/docs/columnar-engine/configure](https://docs.cloud.google.com/alloydb/docs/columnar-engine/configure)
- Source ID: `site-docs-reference-2`
- Final score: 179
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Configure memory for the columnar engine If the column store becomes larger than the allocated portion of your instance's memory, AlloyDB automatically uses the instance's underlying cache layer to store the additional columnar data.
- Enable vectorized join The columnar engine has a vectorized join feature that can improve the performance of joins by applying vectorized processing to qualifying queries.
- Manually refresh your columnar engine By default, when you enable the columnar engine, it is set to automatically refresh the column store in the background.
- You can increase the number of threads available to this feature by setting the google columnar engine.vectorized join threads flag to a larger value.

### "Perform a vector search \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/alloydb/docs/ai/perform-vector-search](https://docs.cloud.google.com/alloydb/docs/ai/perform-vector-search)
- Source ID: `site-docs-reference-2`
- Final score: 157
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- 00 ORDER BY embedding < = > embedding ( 'text-embedding-005' , 'music' ):: vector LIMIT 3 ; Accelerate your filtered vector search You can use the columnar engine content store to improve the performance of vector similarity searches, specifically K-Nearest Neighbor (KNN) searches, when combined with highly selective predicate filtering —for example, using LIKE — in databases.
- CREATE EXTENSION IF NOT EXISTS vector ; CREATE TABLE items ( id SERIAL PRIMARY KEY , description TEXT , embedding VECTOR ( 512 ) ); Populate the data by running the following statements to insert 1 million rows into the example items table. -- Simplified example of inserting matching ( 0.1%) and non-matching data INSERT INTO items ( description , embedding ) SELECT CASE WHEN g % 1000 = 0 THEN 'product ' md5 ( random ():: text ) ' common' -- 0.1% match ELSE 'generic item ' g ' ' md5 ( random ():: text ) -- 99.9% don't match END , random vector ( 512 ) -- Assumes random vector function exists FROM generate series ( 1 , 999999 ) g ; Measure the baseline performance of the vector similarity search without the columnar engine.
- To use the gcloud CLI, you can install and initialize the gcloud CLI. gcloud beta alloydb instances update INSTANCE ID \ --cluster = CLUSTER ID \ --region = REGION ID \ --project = PROJECT ID \ --database-flags = google columnar engine.enabled = on,google columnar engine.enable vector support = on Add the items table to the columnar engine: SELECT google columnar engine add ( 'items' ); Measure the performance of the vector similarity search using the columnar engine.
- SELECT id , description , embedding < - > '[...]' AS distance FROM items WHERE description LIKE '%product % common%' ORDER BY embedding < - > '[...]' LIMIT 100 ; Enable columnar engine and vector support by running the following command in the Google Cloud CLI.

### "About the AlloyDB columnar engine \_|\_ AlloyDB for PostgreSQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/alloydb/docs/columnar-engine/about](https://docs.cloud.google.com/alloydb/docs/columnar-engine/about)
- Source ID: `site-docs-root`
- Final score: 155
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The columnar engine supports only columns with the following built-in data types: array bigint boolean bytea char date decimal double precision enum float4 float8 integer json jsonb numeric real serial short smallint text timestamp timestamptz uuid varchar vector The columnar engine ignores any attempts to manually add columns with unsupported data types to the column store.
- To find the recommended columnar engine memory size for your instance, see Recommend column store memory size .
- Unsupported data sources The columnar engine does not support tables or materialized views with the following attributes as data sources: Non-leaf partitioned tables Foreign tables Columnar engine limitations If you're running an analytical query on a column that has an index, the AlloyDB optimizer may choose to use row-store.
- The AlloyDB columnar engine accelerates SQL query processing of scans, joins, and aggregates by providing these components: A column store that contains table and materialized-view data for selected columns, reorganized into a column-oriented format.

