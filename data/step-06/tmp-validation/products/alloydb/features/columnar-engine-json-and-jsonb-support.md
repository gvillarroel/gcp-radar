---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:15:29.195Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "Columnar engine json and jsonb support"
feature_slug: "columnar-engine-json-and-jsonb-support"
latest_feature_date: "2023-05-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/columnar-engine/about"
  - "https://docs.cloud.google.com/alloydb/docs/reference/columnar-engine-flags"
  - "https://docs.cloud.google.com/alloydb/docs/columnar-engine/configure"
keywords:
  - "jsonb"
  - "json"
  - "column"
  - "columnar"
  - "types"
  - "engine"
  - "supports"
---

# Columnar engine json and jsonb support

Product: AlloyDB
Coverage: MEDIUM

## Step 02 Summary

The AlloyDB columnar engine supports json and jsonb column data types.

## Extended Definition

The AlloyDB columnar engine supports json and jsonb column data types.

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
- Final score: 225
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The columnar engine supports only columns with the following built-in data types: array bigint boolean bytea char date decimal double precision enum float4 float8 integer json jsonb numeric real serial short smallint text timestamp timestamptz uuid varchar vector The columnar engine ignores any attempts to manually add columns with unsupported data types to the column store.
- As long as all the columns accessed from the specific table in the query have supported data types and are in the columnar engine, that table can be processed by the columnar engine, even if other tables in the join have unsupported columns.
- When executing a query, the columnar engine processes a table if all the specific columns referenced in that part of the query have supported data types and are present in the columnar engine.
- Supported data types The columnar engine can populate and refresh supported columns in a table even if some columns have unsupported data types.

### Columnar engine flags \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/alloydb/docs/reference/columnar-engine-flags](https://docs.cloud.google.com/alloydb/docs/reference/columnar-engine-flags)
- Source ID: `site-api-reference`
- Final score: 171
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Auto-columnarization google columnar engine.enable auto columnarization Type Boolean Default on Instance restarts No If on , enables the columnar engine's auto-columnarization features . google columnar engine.relations Type String Default An empty string Instance restarts No Specifies a list of columns for AlloyDB to add to your cluster's column store, apart from auto-columnarization.
- If this flag is off while google columnar engine.enabled is on , then the columnar engine stays enabled and retains its column store, but AlloyDB does not use columnar data when handling queries. google columnar engine.enable index caching Preview This product or feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .
- TABLE NAME ( COLUMN LIST )' For more information, see Manage column store content manually . google columnar engine.auto columnarization schedule Type String Default An empty string Instance restarts No Maximum allowed value 2147483647 Specifies the frequency that AlloyDB runs its auto-columnarization process on the instance.
- If the value for this flag is not defined, then AlloyDB runs the auto-columnarization process once every hour. google columnar engine.enable virtual columns scan Type Boolean Default off Instance restarts No If set to on , enables scans to use virtual columns for expressions added in the columnar engine .

### "Configure the columnar engine \_|\_ AlloyDB for PostgreSQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/alloydb/docs/columnar-engine/configure](https://docs.cloud.google.com/alloydb/docs/columnar-engine/configure)
- Source ID: `site-docs-reference-2`
- Final score: 163
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Instance tier Default columnar engine cache size N2 C4A Primary Replica pool Primary or replica pool 1 vCPU N/A N/A 0 2 vCPU 18.75 GB 37.5 GB N/A 4 vCPU 18.75 GB 37.5 GB 18.75 GB 8 vCPU 18.75 GB 37.5 GB 37.75 GB 16 vCPU 37.5 GB 37.5 GB 75 GB 32 vCPU 75 GB 75 GB 112.5 GB 48 vCPU N/A N/A 187.5 GB 64 vCPU 150 GB 150 GB 262.5 GB 72 vCPU N/A N/A 300 GB 96 vCPU 300 GB 300 GB N/A 128 vCPU 450 GB 450 GB N/A The google columnar engine.storage cache size flag lets you adjust the columnar engine storage cache, with the limitations of the minimum and maximum values listed in the following table: Instance tier Minimum columnar engine cache size Maximum columnar engine cache size N2 C4A Primary Replica pool Primary or replica pool 1 vCPU N/A N/A N/A 0 2 vCPU 0 187.5 GB 375 GB N/A 4 vCPU 0 187.5 GB 375 GB 187.5 GB 8 vCPU 0 187.5 GB 375 GB 375 GB 16 vCPU 0 375 GB 375 GB 750 GB 32 vCPU 0 750 GB 750 GB 1125 GB 48 vCPU N/A N/A N/A 1125 GB 64 vCPU 0 1500 GB 1500 GB 2625 GB 72 vCPU N/A N/A N/A 3000 GB 96 vCPU 0 3000 GB 3000 GB N/A 128 vCPU 0 4500 GB 4500 GB N/A Monitor storage cache data for the columnar engine To view and monitor data about the storage cache of the columnar engine, you can use the following commands: Command Description SELECT google columnar engine storage cache used(); Returns the size of the used columnar engine storage cache.
- Configure storage cache for the columnar engine You must size the google columnar engine.storage cache size relative to the google columnar engine.memory size in mb setting because the columnar engine memory is used for in-memory metadata for the storage cache.
- Configure memory for the columnar engine If the column store becomes larger than the allocated portion of your instance's memory, AlloyDB automatically uses the instance's underlying cache layer to store the additional columnar data.
- To manually refresh the column engine, run the following SQL query: SELECT google columnar engine refresh ( ' TABLE NAME ' ); Replace TABLE NAME with the name of the table or the materialized view you want to manually refresh.

