---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:15:29.188Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "enum"
feature_slug: "enum"
latest_feature_date: "2023-06-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/columnar-engine/about"
  - "https://docs.cloud.google.com/alloydb/docs/reference/columnar-engine-flags"
  - "https://docs.cloud.google.com/alloydb/docs/reference/indexing-strategies"
keywords:
  - "boolean"
  - "bytea"
  - "enum"
  - "uuid"
  - "columnar"
  - "engine"
  - "supports"
---

# enum

Product: AlloyDB
Coverage: MEDIUM

## Step 02 Summary

The AlloyDB columnar engine supports boolean, bytea, enum, and uuid column data types.

## Extended Definition

The AlloyDB columnar engine supports boolean, bytea, enum, and uuid column data types.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/columnar-engine/about](https://docs.cloud.google.com/alloydb/docs/columnar-engine/about)
- [https://docs.cloud.google.com/alloydb/docs/reference/columnar-engine-flags](https://docs.cloud.google.com/alloydb/docs/reference/columnar-engine-flags)
- [https://docs.cloud.google.com/alloydb/docs/reference/indexing-strategies](https://docs.cloud.google.com/alloydb/docs/reference/indexing-strategies)

## Supporting Pages

### "About the AlloyDB columnar engine \_|\_ AlloyDB for PostgreSQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/alloydb/docs/columnar-engine/about](https://docs.cloud.google.com/alloydb/docs/columnar-engine/about)
- Source ID: `site-docs-root`
- Final score: 159
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The columnar engine supports only columns with the following built-in data types: array bigint boolean bytea char date decimal double precision enum float4 float8 integer json jsonb numeric real serial short smallint text timestamp timestamptz uuid varchar vector The columnar engine ignores any attempts to manually add columns with unsupported data types to the column store.
- Unsupported data sources The columnar engine does not support tables or materialized views with the following attributes as data sources: Non-leaf partitioned tables Foreign tables Columnar engine limitations If you're running an analytical query on a column that has an index, the AlloyDB optimizer may choose to use row-store.
- The AlloyDB columnar engine accelerates SQL query processing of scans, joins, and aggregates by providing these components: A column store that contains table and materialized-view data for selected columns, reorganized into a column-oriented format.
- For tables or views with a small number of rows, typically fewer than 5,000, the query planner might choose to use the row-store instead of the column store for better performance, even if the data is successfully loaded into the columnar engine.

### Columnar engine flags \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/alloydb/docs/reference/columnar-engine-flags](https://docs.cloud.google.com/alloydb/docs/reference/columnar-engine-flags)
- Source ID: `site-api-reference`
- Final score: 138
- Re-rank relevance: N/A

Evidence snippets:
- Auto-columnarization google columnar engine.enable auto columnarization Type Boolean Default on Instance restarts No If on , enables the columnar engine's auto-columnarization features . google columnar engine.relations Type String Default An empty string Instance restarts No Specifies a list of columns for AlloyDB to add to your cluster's column store, apart from auto-columnarization.
- If the value for this flag is not defined, then AlloyDB runs the auto-columnarization process once every hour. google columnar engine.enable virtual columns scan Type Boolean Default off Instance restarts No If set to on , enables scans to use virtual columns for expressions added in the columnar engine .
- If this flag is not set, then AlloyDB allocates 30% of the instance's memory to the column store. google columnar engine.enable columnar scan Type Boolean Default on Instance restarts No If on , allows AlloyDB to access data in the column store when handling queries.
- Vectorized join google columnar engine.enable vectorized join Type Boolean Default off Restarts instance No If on , then AlloyDB automatically uses multithreaded vectorized operations to improve the performance of queries that join multiple tables.

### "AlloyDB database indexing strategies \_|\_ AlloyDB for PostgreSQL \_|\_\

- URL: [https://docs.cloud.google.com/alloydb/docs/reference/indexing-strategies](https://docs.cloud.google.com/alloydb/docs/reference/indexing-strategies)
- Source ID: `site-api-reference`
- Final score: 109
- Re-rank relevance: N/A

Evidence snippets:
- 919 ) Test the index: EXPLAIN ( analyze , verbose , columnar engine , costs , settings , buffers , wal , timing , summary , format text ) SELECT from idx advisor . user test where id = 500533 ; + ------------------------------------------------------------------------------------------------------- QUERY PLAN + ------------------------------------------------------------------------------------------------------- Index Scan using user test id idx on idx advisor . user test ( cost = 0 .
- When you assign bits to columns, follow the recommendations in the following table: Column Type / Cardinality Recommended colN Reasoning Low cardinality (booleans, enums, status flags) 1 to 2 bits With only a few possible values—for example, true or false — you don't need many bits to distinguish them.
- 692 rows = 5 loops = 1 ) Output : id , creationdate , score , title , viewcount , "substring" ( body , 0 , 50 ), ( body embeddings < = > '[0.0017194863,-0.04174791,-0.017442022,...,0.035435043,-0.004936148,-0.008868503]' :: vector ) Order By : ( p . body embeddings < = > '[0.0017194863,-0.04174791,-0.017442022,...,0.035435043,-0.004936148,-0.008868503]' :: vector ) Filter : ( p . title IS NOT NULL ) Rows Removed by Filter : 4 Buffers : shared hit = 2565 Columnar Check : table is not in the columnar store Settings : effective cache size = '9830032kB' , random page cost = '1.1' , work mem = '256MB' Query Identifier : - 6886845657091642615 Planning : Buffers : shared hit = 2 Planning Time : 53 .
- 088 rows = 5 loops = 1 ) Output : id , creationdate , score , title , viewcount , "substring" ( body , 0 , 50 ), ( body embeddings < = > '[0.0017194863,-0.04174791,-0.017442022,...,0.035435043,-0.004936148,-0.008868503]' :: vector ) Order By : ( p . body embeddings < = > '[0.0017194863,-0.04174791,-0.017442022,...,0.035435043,-0.004936148,-0.008868503]' :: vector ) Filter : ( p . title IS NOT NULL ) Rows Removed by Filter : 2 Buffers : shared hit = 889 Columnar Check : table is not in the columnar store Settings : effective cache size = '9830032kB' , random page cost = '1.1' , work mem = '256MB' Query Identifier : - 6886845657091642615 Planning : Buffers : shared hit = 1 Planning Time : 93 .

