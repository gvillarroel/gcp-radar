---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:53:29.467Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "Virtual columns for expressions"
feature_slug: "virtual-columns-for-expressions"
latest_feature_date: "2026-02-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/columnar-engine/manage-content-manually"
  - "https://docs.cloud.google.com/alloydb/docs/reference/columnar-engine-flags"
  - "https://docs.cloud.google.com/alloydb/docs/columnar-engine/about"
keywords:
  - "virtual"
  - "columns"
  - "expressions"
  - "cache"
  - "results"
  - "frequently"
  - "used"
  - "columnar"
---

# Virtual columns for expressions

Product: AlloyDB
Coverage: MEDIUM

## Step 02 Summary

Virtual columns for expressions cache results of frequently used expressions in the columnar engine to improve query performance and reduce CPU usage.

## Extended Definition

Virtual columns for expressions cache results of frequently used expressions in the columnar engine to improve query performance and reduce CPU usage.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/columnar-engine/manage-content-manually](https://docs.cloud.google.com/alloydb/docs/columnar-engine/manage-content-manually)
- [https://docs.cloud.google.com/alloydb/docs/reference/columnar-engine-flags](https://docs.cloud.google.com/alloydb/docs/reference/columnar-engine-flags)
- [https://docs.cloud.google.com/alloydb/docs/columnar-engine/about](https://docs.cloud.google.com/alloydb/docs/columnar-engine/about)

## Supporting Pages

### "Manage column store content manually \_|\_ AlloyDB for PostgreSQL \_|\_\

- URL: [https://docs.cloud.google.com/alloydb/docs/columnar-engine/manage-content-manually](https://docs.cloud.google.com/alloydb/docs/columnar-engine/manage-content-manually)
- Source ID: `site-docs-reference-2`
- Final score: 166
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- What's next Optimize queries with virtual columns for expressions .
- Verify columnar engine usage To verify if your vector index scans use the columnar engine, execute the EXPLAIN ANALYZE command with the COLUMNAR ENGINE option: EXPLAIN ( ANALYZE TRUE , SCANN TRUE , COSTS FALSE , TIMING FALSE , SUMMARY FALSE , VERBOSE FALSE , COLUMNAR ENGINE TRUE ) SELECT FROM t ORDER BY val < = > '[0.5,0.5,0.5,0.5]' LIMIT 100 ; The command returns a query plan similar to the following: Index Scan using t ix3 on t t 1 (actual rows=100 loops=1) Order By: (val <=> '[0.5,0.5,0.5,0.5]'::vector) Limit: 100 ScaNN Info: (... columnar engine nodes hit=6...) Columnar Engine ScaNN Info: (index found=true) The presence of columnar engine nodes hit and Columnar Engine ScaNN Info: (index found=true) in the output confirms that the columnar engine is used for the query.
- Estimate column store space requirements Run the google columnar engine estimate SQL function to estimate the total amount space needed for a relation in the columnar engine. psql Client SELECT google columnar engine estimate( relation => ' TABLE NAME ', columns => ' COLUMN LIST ' ); Replace the following: TABLE NAME : a string containing the name of the table or the materialized view.
- Use one of the following methods to manage the content of the columnar engine: Manage column store content by updating database flags Manage column store content using SQL functions See What data you can add to the column store for information about what data types and data sources you can use when adding tables, columns, and materialized views to the column store.

### "About the AlloyDB columnar engine \_|\_ AlloyDB for PostgreSQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/alloydb/docs/columnar-engine/about](https://docs.cloud.google.com/alloydb/docs/columnar-engine/about)
- Source ID: `site-docs-root`
- Final score: 157
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Add the columns manually or add frequently used expressions to the column store ( Preview ) based on your knowledge of the workload on the databases in the instance.
- ORDER-BY and SORT : only when the ORDER-BY or SORT is on the scan results of columns accessed from the columnar engine.
- You can also add frequently used expressions to the column store.
- The columnar engine supports only columns with the following built-in data types: array bigint boolean bytea char date decimal double precision enum float4 float8 integer json jsonb numeric real serial short smallint text timestamp timestamptz uuid varchar vector The columnar engine ignores any attempts to manually add columns with unsupported data types to the column store.

### Columnar engine flags \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/alloydb/docs/reference/columnar-engine-flags](https://docs.cloud.google.com/alloydb/docs/reference/columnar-engine-flags)
- Source ID: `site-api-reference`
- Final score: 142
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If the value for this flag is not defined, then AlloyDB runs the auto-columnarization process once every hour. google columnar engine.enable virtual columns scan Type Boolean Default off Instance restarts No If set to on , enables scans to use virtual columns for expressions added in the columnar engine .
- Auto-columnarization google columnar engine.enable auto columnarization Type Boolean Default on Instance restarts No If on , enables the columnar engine's auto-columnarization features . google columnar engine.relations Type String Default An empty string Instance restarts No Specifies a list of columns for AlloyDB to add to your cluster's column store, apart from auto-columnarization.
- If this flag is off while google columnar engine.enabled is on , then the columnar engine stays enabled and retains its column store, but AlloyDB does not use columnar data when handling queries. google columnar engine.enable index caching Preview This product or feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .
- TABLE NAME ( COLUMN LIST )' For more information, see Manage column store content manually . google columnar engine.auto columnarization schedule Type String Default An empty string Instance restarts No Maximum allowed value 2147483647 Specifies the frequency that AlloyDB runs its auto-columnarization process on the instance.

