---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:15:29.154Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "Node placement controls for AlloyDB Omni pods"
feature_slug: "node-placement-controls-for-alloydb-omni-pods"
latest_feature_date: "2024-04-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/reference/alloydb-flags"
  - "https://docs.cloud.google.com/alloydb/docs/overview"
  - "https://docs.cloud.google.com/alloydb/docs/reference/execution-plan-nodes"
keywords:
  - "placement"
  - "restricted"
  - "pods"
  - "controls"
  - "node"
  - "omni"
---

# Node placement controls for AlloyDB Omni pods

Product: AlloyDB
Coverage: MEDIUM

## Step 02 Summary

AlloyDB Omni pods can be restricted to run on specific Kubernetes nodes.

## Extended Definition

AlloyDB Omni pods can be restricted to run on specific Kubernetes nodes.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/reference/alloydb-flags](https://docs.cloud.google.com/alloydb/docs/reference/alloydb-flags)
- [https://docs.cloud.google.com/alloydb/docs/overview](https://docs.cloud.google.com/alloydb/docs/overview)
- [https://docs.cloud.google.com/alloydb/docs/reference/execution-plan-nodes](https://docs.cloud.google.com/alloydb/docs/reference/execution-plan-nodes)

## Supporting Pages

### AlloyDB overview \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/alloydb/docs/overview](https://docs.cloud.google.com/alloydb/docs/overview)
- Source ID: `site-api-reference`
- Final score: 70
- Re-rank relevance: N/A

Evidence snippets:
- Automatic and adaptive database features The fully PostgreSQL-compatible database engine that powers every AlloyDB node has several features that continuously analyze the structure and frequency of the queries that your instances handle, using this information to suggest schema improvements or automatically apply optimizations: An index advisor helps you find opportunities to optimize your database schema using new indexes based on your usage patterns.
- Key features AlloyDB distinguishes itself from a stock PostgreSQL installation in a number of ways beyond the vertical and horizontal scaling advantages inherent in the multi-node architecture described earlier.
- It pairs a Google-built database engine with a cloud-based, multi-node architecture to deliver enterprise-grade performance, reliability, and availability or your most demanding applications.
- High availability By default, an AlloyDB cluster offers availability (HA) through its primary instance's redundant nodes, located in two different zones, with automatic failover.

### AlloyDB flags \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/alloydb/docs/reference/alloydb-flags](https://docs.cloud.google.com/alloydb/docs/reference/alloydb-flags)
- Source ID: `site-api-reference`
- Final score: 64
- Re-rank relevance: N/A

Evidence snippets:
- By promoting the cancellation requests, AlloyDB helps prevent stuck backends from blocking log replay and other backends. alloydb.pg shadow select role Type string Default An empty string Instance restarts No Name of the PostgreSQL role that is to be used to grant permission to query the pg shadow view. alloydb.enable pg squeeze Type boolean Default off Instance restarts No Set to on to reduce table and index bloat in a more efficient and less disruptive way as compared to other PostgreSQL bloat reduction methods such as VACUUM . google storage.log replay throttle read transactions Type boolean Default on Instance restarts No Controls whether lag-based throttling of read transactions is enabled on read nodes.
- For more information, see Manage application data security using AlloyDB parameterized secure views . parameterized views.json results max rows Type integer Default 1,000,000 Instance restarts No Sets the maximum number of rows for JSON results from the execute parameterized query() function. parameterized views.json results max size Type integer Default 1,048,576 Instance restarts No Sets the maximum JSON results size in kilobytes (KB) from the execute parameterized query() function. parameterized views.max parallel workers per gather Type integer Default -1 Instance restarts No Sets the maximum number of parallel processes per executor node when a query is run using the parameterized views API. -1 means no limit.
- The flag's value persists for the instance until you modify it again. alloydb ai nl.enabled Type boolean Default off Instance restarts Yes Controls whether the AlloyDB AI natural language features are enabled. alloydb.enable auto explain Type boolean Default off Instance restarts Yes Controls the availability of the auto explain extension in an AlloyDB instance.
- The pg bigm extension provides full text search capability in PostgreSQL using 2-gram (bigram) indexes for faster full text searches. alloydb.enable pg cron Type boolean Default off Instance restarts Yes Controls the availability of the pg cron extension in an AlloyDB instance.

### "Execution plan node types \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/alloydb/docs/reference/execution-plan-nodes](https://docs.cloud.google.com/alloydb/docs/reference/execution-plan-nodes)
- Source ID: `site-api-reference`
- Final score: 62
- Re-rank relevance: N/A

Evidence snippets:
- 551 ms Aggregate node types Aggregate node types combine multiple input rows into a single result row, often in conjunction with aggregate functions like COUNT , SUM , AVG , MAX , or MIN , or when a GROUP BY clause is present.
- 216 ms AlloyDB query id : 18229116469546507386 AlloyDB plan id : 17462269545806790969 Materialize Typically seen in Common Table Expressions (CTEs), the Materialize node builds an in-memory tuple store for later reuse.
- Parallel aggregate node types A parallel aggregate is a mechanism for speeding up the execution of aggregate functions by distributing the aggregation work across multiple worker processes.
- Home Documentation Databases AlloyDB for PostgreSQL Reference Send feedback Execution plan node types Stay organized with collections Save and categorize content based on your preferences.

