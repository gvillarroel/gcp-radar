---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:15:29.188Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "Columnar engine boolean"
feature_slug: "columnar-engine-boolean"
latest_feature_date: "2023-06-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/columnar-engine/about"
  - "https://docs.cloud.google.com/alloydb/docs/reference/columnar-engine-flags"
  - "https://docs.cloud.google.com/alloydb/docs/columnar-engine/configure"
keywords:
  - "boolean"
  - "bytea"
  - "enum"
  - "uuid"
  - "columnar"
  - "engine"
  - "supports"
---

# Columnar engine boolean

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
- [https://docs.cloud.google.com/alloydb/docs/columnar-engine/configure](https://docs.cloud.google.com/alloydb/docs/columnar-engine/configure)

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
- Final score: 151
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Auto-columnarization google columnar engine.enable auto columnarization Type Boolean Default on Instance restarts No If on , enables the columnar engine's auto-columnarization features . google columnar engine.relations Type String Default An empty string Instance restarts No Specifies a list of columns for AlloyDB to add to your cluster's column store, apart from auto-columnarization.
- If the value for this flag is not defined, then AlloyDB runs the auto-columnarization process once every hour. google columnar engine.enable virtual columns scan Type Boolean Default off Instance restarts No If set to on , enables scans to use virtual columns for expressions added in the columnar engine .
- If this flag is not set, then AlloyDB allocates 30% of the instance's memory to the column store. google columnar engine.enable columnar scan Type Boolean Default on Instance restarts No If on , allows AlloyDB to access data in the column store when handling queries.
- Vectorized join google columnar engine.enable vectorized join Type Boolean Default off Restarts instance No If on , then AlloyDB automatically uses multithreaded vectorized operations to improve the performance of queries that join multiple tables.

### "Configure the columnar engine \_|\_ AlloyDB for PostgreSQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/alloydb/docs/columnar-engine/configure](https://docs.cloud.google.com/alloydb/docs/columnar-engine/configure)
- Source ID: `site-docs-reference-2`
- Final score: 114
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Instance tier Default columnar engine cache size N2 C4A Primary Replica pool Primary or replica pool 1 vCPU N/A N/A 0 2 vCPU 18.75 GB 37.5 GB N/A 4 vCPU 18.75 GB 37.5 GB 18.75 GB 8 vCPU 18.75 GB 37.5 GB 37.75 GB 16 vCPU 37.5 GB 37.5 GB 75 GB 32 vCPU 75 GB 75 GB 112.5 GB 48 vCPU N/A N/A 187.5 GB 64 vCPU 150 GB 150 GB 262.5 GB 72 vCPU N/A N/A 300 GB 96 vCPU 300 GB 300 GB N/A 128 vCPU 450 GB 450 GB N/A The google columnar engine.storage cache size flag lets you adjust the columnar engine storage cache, with the limitations of the minimum and maximum values listed in the following table: Instance tier Minimum columnar engine cache size Maximum columnar engine cache size N2 C4A Primary Replica pool Primary or replica pool 1 vCPU N/A N/A N/A 0 2 vCPU 0 187.5 GB 375 GB N/A 4 vCPU 0 187.5 GB 375 GB 187.5 GB 8 vCPU 0 187.5 GB 375 GB 375 GB 16 vCPU 0 375 GB 375 GB 750 GB 32 vCPU 0 750 GB 750 GB 1125 GB 48 vCPU N/A N/A N/A 1125 GB 64 vCPU 0 1500 GB 1500 GB 2625 GB 72 vCPU N/A N/A N/A 3000 GB 96 vCPU 0 3000 GB 3000 GB N/A 128 vCPU 0 4500 GB 4500 GB N/A Monitor storage cache data for the columnar engine To view and monitor data about the storage cache of the columnar engine, you can use the following commands: Command Description SELECT google columnar engine storage cache used(); Returns the size of the used columnar engine storage cache.
- Configure storage cache for the columnar engine You must size the google columnar engine.storage cache size relative to the google columnar engine.memory size in mb setting because the columnar engine memory is used for in-memory metadata for the storage cache.
- Configure memory for the columnar engine If the column store becomes larger than the allocated portion of your instance's memory, AlloyDB automatically uses the instance's underlying cache layer to store the additional columnar data.
- To manually refresh the column engine, run the following SQL query: SELECT google columnar engine refresh ( ' TABLE NAME ' ); Replace TABLE NAME with the name of the table or the materialized view you want to manually refresh.

