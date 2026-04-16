---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:15:29.186Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "Vectorized join"
feature_slug: "vectorized-join"
latest_feature_date: "2023-06-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/columnar-engine/configure"
  - "https://docs.cloud.google.com/alloydb/docs/reference/columnar-engine-flags"
  - "https://docs.cloud.google.com/alloydb/docs/columnar-engine/about"
keywords:
  - "vectorized"
  - "capability"
  - "qualifying"
  - "join"
  - "improves"
  - "performance"
  - "columnar"
  - "engine"
---

# Vectorized join

Product: AlloyDB
Coverage: MEDIUM

## Step 02 Summary

Vectorized join is a columnar engine capability that improves qualifying join performance through vectorized processing.

## Extended Definition

Vectorized join is a columnar engine capability that improves qualifying join performance through vectorized processing.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/columnar-engine/configure](https://docs.cloud.google.com/alloydb/docs/columnar-engine/configure)
- [https://docs.cloud.google.com/alloydb/docs/reference/columnar-engine-flags](https://docs.cloud.google.com/alloydb/docs/reference/columnar-engine-flags)
- [https://docs.cloud.google.com/alloydb/docs/columnar-engine/about](https://docs.cloud.google.com/alloydb/docs/columnar-engine/about)

## Supporting Pages

### "Configure the columnar engine \_|\_ AlloyDB for PostgreSQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/alloydb/docs/columnar-engine/configure](https://docs.cloud.google.com/alloydb/docs/columnar-engine/configure)
- Source ID: `site-docs-reference-2`
- Final score: 214
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Enable vectorized join The columnar engine has a vectorized join feature that can improve the performance of joins by applying vectorized processing to qualifying queries.
- You can increase the number of threads available to this feature by setting the google columnar engine.vectorized join threads flag to a larger value.
- To enable vectorized join on an instance, set the instance's google columnar engine.enable vectorized join flag to on .
- In AlloyDB, you can load both relations, materialized views, and ScaNN indexes into the columnar engine to accelerate query performance.

### Columnar engine flags \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/alloydb/docs/reference/columnar-engine-flags](https://docs.cloud.google.com/alloydb/docs/reference/columnar-engine-flags)
- Source ID: `site-api-reference`
- Final score: 198
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Vectorized join google columnar engine.enable vectorized join Type Boolean Default off Restarts instance No If on , then AlloyDB automatically uses multithreaded vectorized operations to improve the performance of queries that join multiple tables.
- For more information, see Enable vectorized joins . google columnar engine.vectorized join threads Preview This product or feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .
- Auto-columnarization google columnar engine.enable auto columnarization Type Boolean Default on Instance restarts No If on , enables the columnar engine's auto-columnarization features . google columnar engine.relations Type String Default An empty string Instance restarts No Specifies a list of columns for AlloyDB to add to your cluster's column store, apart from auto-columnarization.
- If this flag is off while google columnar engine.enabled is on , then the columnar engine stays enabled and retains its column store, but AlloyDB does not use columnar data when handling queries. google columnar engine.enable index caching Preview This product or feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .

### "About the AlloyDB columnar engine \_|\_ AlloyDB for PostgreSQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/alloydb/docs/columnar-engine/about](https://docs.cloud.google.com/alloydb/docs/columnar-engine/about)
- Source ID: `site-docs-root`
- Final score: 137
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The AlloyDB columnar engine accelerates SQL query processing of scans, joins, and aggregates by providing these components: A column store that contains table and materialized-view data for selected columns, reorganized into a column-oriented format.
- For tables or views with a small number of rows, typically fewer than 5,000, the query planner might choose to use the row-store instead of the column store for better performance, even if the data is successfully loaded into the columnar engine.
- As long as all the columns accessed from the specific table in the query have supported data types and are in the columnar engine, that table can be processed by the columnar engine, even if other tables in the join have unsupported columns.
- To use the columnar engine with a specific query, all columns in that query fragments, such as joins and scans, must be in the column store.

