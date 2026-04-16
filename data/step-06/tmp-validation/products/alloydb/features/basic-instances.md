---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:15:29.172Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "Basic instances"
feature_slug: "basic-instances"
latest_feature_date: "2023-09-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/overview"
  - "https://docs.cloud.google.com/alloydb/docs/reference/execution-plan-nodes"
  - "https://docs.cloud.google.com/alloydb/docs/reference/indexing-strategies"
keywords:
  - "basic"
  - "lower"
  - "cost"
  - "single"
  - "provide"
  - "instances"
  - "node"
---

# Basic instances

Product: AlloyDB
Coverage: MEDIUM

## Step 02 Summary

AlloyDB basic instances provide a lower-cost single-node primary instance option for non-production use cases.

## Extended Definition

AlloyDB basic instances provide a lower-cost single-node primary instance option for non-production use cases.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/overview](https://docs.cloud.google.com/alloydb/docs/overview)
- [https://docs.cloud.google.com/alloydb/docs/reference/execution-plan-nodes](https://docs.cloud.google.com/alloydb/docs/reference/execution-plan-nodes)
- [https://docs.cloud.google.com/alloydb/docs/reference/indexing-strategies](https://docs.cloud.google.com/alloydb/docs/reference/indexing-strategies)

## Supporting Pages

### AlloyDB overview \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/alloydb/docs/overview](https://docs.cloud.google.com/alloydb/docs/overview)
- Source ID: `site-api-reference`
- Final score: 148
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Clusters operating in non-production environments that don't require HA can optionally use basic, single-zone primary instances instead.
- Basic instance : contains a single node for non-production environments that don't require high availability.
- For more information, see Reduce costs using basic instances .
- Automatic and adaptive database features The fully PostgreSQL-compatible database engine that powers every AlloyDB node has several features that continuously analyze the structure and frequency of the queries that your instances handle, using this information to suggest schema improvements or automatically apply optimizations: An index advisor helps you find opportunities to optimize your database schema using new indexes based on your usage patterns.

### "Execution plan node types \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/alloydb/docs/reference/execution-plan-nodes](https://docs.cloud.google.com/alloydb/docs/reference/execution-plan-nodes)
- Source ID: `site-api-reference`
- Final score: 139
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- This join node works well for bulk operations, but if an ORDER BY provides the sorted data, then this access method might be slower than others.
- 551 ms Aggregate node types Aggregate node types combine multiple input rows into a single result row, often in conjunction with aggregate functions like COUNT , SUM , AVG , MAX , or MIN , or when a GROUP BY clause is present.
- Each node represents a specific operation or step in the query execution, and their types provide insights into your chosen strategy.
- 120 ms HashAggregate The HashAggregate node performs basic aggregation operations and uses unsorted data from all input nodes.

### "AlloyDB database indexing strategies \_|\_ AlloyDB for PostgreSQL \_|\_\

- URL: [https://docs.cloud.google.com/alloydb/docs/reference/indexing-strategies](https://docs.cloud.google.com/alloydb/docs/reference/indexing-strategies)
- Source ID: `site-api-reference`
- Final score: 134
- Re-rank relevance: N/A

Evidence snippets:
- It provides faster query time, lower memory footprint, and higher write throughput than a similar HNSW-based index.
- 554 ms The Bloom index also occupies less space than a similarly constructed B-tree index: \dt+ public.bloom test List of relations Schema Name Type Owner Persistence Access method Size Description --------+------------+-------+----------+-------------+---------------+---------+------------- public bloom test table postgres permanent heap 9663 MB NULL -------------------------------------------------------------------------------------------------------- \di+ idx bloom test List of relations Schema Name Type Owner Table Persistence Access method Size --------+----------------------+-------+----------+------------+-------------+---------------+---------+ public idx bloom test index postgres bloom test permanent bloom 2112 MB -------------------------------------------------------------------------------------------------------- \di+ idx btree bloom test List of relations Schema Name Type Owner Table Persistence Access method Size public idx btree bloom test index postgres bloom test permanent btree 4723 MB For multi-column or variable column predicate support that uses equality predicates, a Bloom index can be a good alternative to creating multiple single- or dual-column indexes.
- You can also run the advisor manually at any time by altering the search path in the session and following these steps: Given the following table with 10m rows in it and no indexes: Table "idx advisor.user test" + ------------------+--------------------------------+-----------+----------+---------+---------+-------- Column Type Collation Nullable Default Storage + ------------------+--------------------------------+-----------+----------+---------+---------+-------- id integer not null plain value numeric main user id integer plain product id integer plain product meas val integer plain effective date timestamp ( 3 ) without time zone plain + ------------------+--------------------------------+-----------+----------+---------+---------+-------- Access method : heap Run a query that could possibly benefit from an index: SELECT from idx advisor . user test where id = 500533 ; + ------------------------------------------------------------------------------------------------------- QUERY PLAN + ------------------------------------------------------------------------------------------------------- Gather ( cost = 1000 .
- The following example demonstrates using a test table and a regular B-tree index: CREATE TABLE public . bloom test ( emp id int , dept id int , id2 int , id3 int , id4 int , id5 int , id6 int , id7 int , details text , location code int ); INSERT INTO public . bloom test SELECT ( random () 1000000 ):: int , ( random () 1000000 ):: int , ( random () 1000000 ):: int ,( random () 1000000 ):: int ,( random () 1000000 ):: int ,( random () 1000000 ):: int , ( random () 1000000 ):: int ,( random () 1000000 ):: int , md5 ( g :: text ), floor ( random () ( 20000 - 9999 + 1 ) + 9999 ) FROM generate series ( 1 , 100 1 e4 ) g ; CREATE INDEX idx btree bloom test ON public . bloom test ( emp id , dept id , id2 , id3 , id4 , id5 , id6 , location code ); SELECT from public . bloom test WHERE id5 = 564804 AND id6 = 797758 ; QUERY PLAN -------------------------------------------------------------------------------------------------------- Index Scan using idx btree bloom test on public . bloom test ( cost = 0 .

