---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:07:37.615Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "Index advisor"
feature_slug: "index-advisor"
latest_feature_date: "2024-04-09"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/reference/index-advisor-flags"
  - "https://docs.cloud.google.com/alloydb/docs/release-notes"
keywords:
  - "frequent query patterns"
  - "recommended indexes"
  - "index recommendation engine"
  - "index recommendation"
  - "index suggestions"
  - "managed index advisor"
  - "Index Advisor"
  - "index advisor"
---

# Index advisor

Product: AlloyDB
Coverage: HIGH

## Step 02 Summary

A fully managed index advisor is available to analyze frequent query patterns and recommend indexes.

## Extended Definition

AlloyDB index advisor is a managed service feature that analyzes tracked database queries—focusing on the slowest-executing tracked statements and regular workload patterns—and recommends index changes. It can recommend standard indexes (including on table partitions), and also supports recommending ScaNN vector indexes when enabled, with behavior controlled by configurable advisor flags such as enabled state, analysis time, query tracking limits, and automated scheduling.

## Evidence Summary

The index advisor flags page documents the advisor’s supported controls and recommendation behaviors, while the release notes describe it as a fully managed advisor that tracks regular workload queries and generates index recommendations (including ScaNN vector recommendations).

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/reference/index-advisor-flags](https://docs.cloud.google.com/alloydb/docs/reference/index-advisor-flags)
- [https://docs.cloud.google.com/alloydb/docs/release-notes](https://docs.cloud.google.com/alloydb/docs/release-notes)

## Supporting Pages

### Index advisor flags \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/alloydb/docs/reference/index-advisor-flags](https://docs.cloud.google.com/alloydb/docs/reference/index-advisor-flags)
- Source ID: `site-api-reference`
- Final score: 66
- Re-rank relevance: STRONG
- Re-rank rationale: This page is a reference for AlloyDB index advisor configuration flags, including enablement, scheduling, limits, and analysis behavior that directly define how the feature operates.

Evidence snippets:
- If set to 0 , then AlloyDB uses the current database size as the upper limit on the total size of recommended indexes. google db advisor.recommend indexes on partitions Type Boolean Default off Restart required No Controls whether to enable recommending indexes on individual table partitions. google db advisor.recommendation max time in seconds Type Integer Default 600 Restart required No The maximum time, in seconds, that the index advisor spends running an analysis of its tracked queries. google db advisor.top k slowest statements Type Integer Default 100 Restart required No The index advisor bases its recommendations on the slowest-executing statements out of all the queries it tracks.
- Requires the google ml integration extension to be enabled. google db advisor.enabled Type Boolean Default on Restart required Yes Controls whether the AlloyDB index advisor is enabled. google db advisor.max index width Type Integer Default 2 Restart required No The maximum number of columns that a recommended index can contain. google db advisor.max num indexable columns Type Integer Default 1000 Restart required No The maximum number of indexable columns that index advisor tracks. google db advisor.max statement length Type Integer Default 102400 Restart required No The maximum length, in bytes, of queries that the index advisor tracks. google db advisor.max storage size in mb Type Integer Default 0 Restart required No The maximum total size, in megabytes, of the indexes that the index advisor recommends.
- The value is a single-quoted string of the format 'EVERY N UNITS ' , where N is an integer, and UNITS is either HOURS or DAYS . google db advisor.enable auto advisor Type Boolean Default on Restart required No If on , then AlloyDB runs the index advisor's analysis on an automated schedule, with a frequency set by the separate google db advisor.auto advisor schedule flag. google db advisor.enable vector index advisor ( Preview ) Type Boolean Default off Restart required No Recommends ScaNN vector indexes depending on the workload.
- Database flags google db advisor.auto advisor max time in seconds Type Integer Default 1800 Restart required No The maximum time, in seconds per day, that the index advisor spends running automated analyses of its tracked queries. google db advisor.auto advisor schedule Type String Default 'EVERY 24 HOURS' Restart required No Defines the frequency of the index advisor's automated analysis.

### AlloyDB for PostgreSQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/alloydb/docs/release-notes](https://docs.cloud.google.com/alloydb/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 36
- Re-rank relevance: N/A

Evidence snippets:
- You can enable vector search index recommendations for Scalable Nearest Neighbors (ScaNN) indexes using the AlloyDB index advisor.
- For more information, see Use the AlloyDB index advisor with query insights or View the index advisor's index recommendations .
- Index advisor: a fully managed index advisor that tracks the queries your database handles regularly.
- July 31, 2024 Feature Gemini in Databases assistance in AlloyDB for PostgreSQL is now available in Preview for standard and enhanced query insights, system insights, index advisor, and active queries.

### "Execution plan node types \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/alloydb/docs/reference/execution-plan-nodes](https://docs.cloud.google.com/alloydb/docs/reference/execution-plan-nodes)
- Source ID: `site-api-reference`
- Final score: 20
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- 904 rows = 1000290 loops = 1 ) Output : id , value , product id , effective date Filter : ( index advisor test . product id = 1 ) Rows Removed by Columnar Filter : 98999711 Bytes fetched from storage cache : 774835915 Columnar cache search mode : native Swap - in Time : 92 .
- 17 : 5432 ) [ postgres ] > EXPLAIN ( ANALYZE , VERBOSE , COLUMNAR ENGINE ) select from public . index advisor test where product id = 1 ; QUERY PLAN --------------------------------------------------------------------------------- Append ( cost = 20 .
- 11 rows = 1 width = 27 ) ( never executed ) Output : id , value , product id , effective date Filter : ( index advisor test . product id = 1 ) Query Identifier : - 4660018746142248761 Planning Time : 0 .
- 029 rows = 1000290 loops = 1 ) - > Custom Scan ( columnar scan ) on public . index advisor test ( cost = 20 .

