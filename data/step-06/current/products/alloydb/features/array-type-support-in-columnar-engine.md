---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:53:29.521Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "Array type support in columnar engine"
feature_slug: "array-type-support-in-columnar-engine"
latest_feature_date: "2023-11-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/columnar-engine/about"
  - "https://docs.cloud.google.com/alloydb/docs/reference/columnar-engine-flags"
  - "https://docs.cloud.google.com/alloydb/docs/reference/indexing-strategies"
keywords:
  - "array"
  - "type"
  - "columnar"
  - "engine"
  - "alloydb"
  - "supports"
  - "columns"
  - "use"
---

# Array type support in columnar engine

Product: AlloyDB
Coverage: MEDIUM

## Step 02 Summary

The AlloyDB columnar engine supports columns that use the array data type.

## Extended Definition

The AlloyDB columnar engine supports columns that use the array data type.

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
- Final score: 184
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The columnar engine supports only columns with the following built-in data types: array bigint boolean bytea char date decimal double precision enum float4 float8 integer json jsonb numeric real serial short smallint text timestamp timestamptz uuid varchar vector The columnar engine ignores any attempts to manually add columns with unsupported data types to the column store.
- The AlloyDB columnar engine accelerates SQL query processing of scans, joins, and aggregates by providing these components: A column store that contains table and materialized-view data for selected columns, reorganized into a column-oriented format.
- As long as all the columns accessed from the specific table in the query have supported data types and are in the columnar engine, that table can be processed by the columnar engine, even if other tables in the join have unsupported columns.
- When executing a query, the columnar engine processes a table if all the specific columns referenced in that part of the query have supported data types and are present in the columnar engine.

### Columnar engine flags \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/alloydb/docs/reference/columnar-engine-flags](https://docs.cloud.google.com/alloydb/docs/reference/columnar-engine-flags)
- Source ID: `site-api-reference`
- Final score: 171
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Auto-columnarization google columnar engine.enable auto columnarization Type Boolean Default on Instance restarts No If on , enables the columnar engine's auto-columnarization features . google columnar engine.relations Type String Default An empty string Instance restarts No Specifies a list of columns for AlloyDB to add to your cluster's column store, apart from auto-columnarization.
- If the value for this flag is not defined, then AlloyDB runs the auto-columnarization process once every hour. google columnar engine.enable virtual columns scan Type Boolean Default off Instance restarts No If set to on , enables scans to use virtual columns for expressions added in the columnar engine .
- TABLE NAME ( COLUMN LIST )' For more information, see Manage column store content manually . google columnar engine.auto columnarization schedule Type String Default An empty string Instance restarts No Maximum allowed value 2147483647 Specifies the frequency that AlloyDB runs its auto-columnarization process on the instance.
- Sizing and query processing google columnar engine.memory size in mb Type Integer Valid values From 128 to 70% of instance memory Default 30% of instance memory Instance restarts Yes The amount of instance memory, expressed in mebibytes (MiB), that AlloyDB allocates to the column store.

### "AlloyDB database indexing strategies \_|\_ AlloyDB for PostgreSQL \_|\_\

- URL: [https://docs.cloud.google.com/alloydb/docs/reference/indexing-strategies](https://docs.cloud.google.com/alloydb/docs/reference/indexing-strategies)
- Source ID: `site-api-reference`
- Final score: 150
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- GIN and GiST The GIN (generalized inverted index) and GiST (generalized search tree) index types are good for full-text search, array, and jsonb key-value pair columns.
- 919 ) Test the index: EXPLAIN ( analyze , verbose , columnar engine , costs , settings , buffers , wal , timing , summary , format text ) SELECT from idx advisor . user test where id = 500533 ; + ------------------------------------------------------------------------------------------------------- QUERY PLAN + ------------------------------------------------------------------------------------------------------- Index Scan using user test id idx on idx advisor . user test ( cost = 0 .
- When you assign bits to columns, follow the recommendations in the following table: Column Type / Cardinality Recommended colN Reasoning Low cardinality (booleans, enums, status flags) 1 to 2 bits With only a few possible values—for example, true or false — you don't need many bits to distinguish them.
- However, when you have a multi-column index that supports many predicate possibilities, the Bloom index is still a good alternative over a B-tree with the same number of columns.

