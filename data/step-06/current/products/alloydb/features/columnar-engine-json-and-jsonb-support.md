---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:53:29.537Z"
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
  - "columnar"
  - "engine"
  - "json"
  - "jsonb"
  - "alloydb"
  - "supports"
  - "column"
  - "types"
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
- Unsupported data sources The columnar engine does not support tables or materialized views with the following attributes as data sources: Non-leaf partitioned tables Foreign tables Columnar engine limitations If you're running an analytical query on a column that has an index, the AlloyDB optimizer may choose to use row-store.
- The AlloyDB columnar engine accelerates SQL query processing of scans, joins, and aggregates by providing these components: A column store that contains table and materialized-view data for selected columns, reorganized into a column-oriented format.
- As long as all the columns accessed from the specific table in the query have supported data types and are in the columnar engine, that table can be processed by the columnar engine, even if other tables in the join have unsupported columns.

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
- Configure memory for the columnar engine If the column store becomes larger than the allocated portion of your instance's memory, AlloyDB automatically uses the instance's underlying cache layer to store the additional columnar data.
- Home Documentation Databases AlloyDB for PostgreSQL Guides Send feedback Configure the columnar engine Stay organized with collections Save and categorize content based on your preferences.
- Configure the size of the column store While the columnar engine is enabled on an instance, AlloyDB allocates a portion of the instance's memory to store its columnar data.
- In AlloyDB, you can load both relations, materialized views, and ScaNN indexes into the columnar engine to accelerate query performance.

