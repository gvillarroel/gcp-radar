---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:15:29.088Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "Query plan patches"
feature_slug: "query-plan-patches"
latest_feature_date: "2025-09-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/reference/execution-plan-nodes"
  - "https://docs.cloud.google.com/alloydb/docs/reference/query-tuning-and-optimization"
  - "https://docs.cloud.google.com/alloydb/docs/reference/indexing-strategies"
keywords:
  - "patches"
  - "details"
  - "execution"
  - "specify"
  - "plan"
  - "query"
---

# Query plan patches

Product: AlloyDB
Coverage: MEDIUM

## Step 02 Summary

Query plan patches let you specify execution plan details for queries in AlloyDB.

## Extended Definition

Query plan patches let you specify execution plan details for queries in AlloyDB.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/reference/execution-plan-nodes](https://docs.cloud.google.com/alloydb/docs/reference/execution-plan-nodes)
- [https://docs.cloud.google.com/alloydb/docs/reference/query-tuning-and-optimization](https://docs.cloud.google.com/alloydb/docs/reference/query-tuning-and-optimization)
- [https://docs.cloud.google.com/alloydb/docs/reference/indexing-strategies](https://docs.cloud.google.com/alloydb/docs/reference/indexing-strategies)

## Supporting Pages

### "AlloyDB query tuning and optimization \_|\_ AlloyDB for PostgreSQL \_|\_\

- URL: [https://docs.cloud.google.com/alloydb/docs/reference/query-tuning-and-optimization](https://docs.cloud.google.com/alloydb/docs/reference/query-tuning-and-optimization)
- Source ID: `site-api-reference`
- Final score: 144
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Query planner decisions: The query planner considers work mem when it decides on the most efficient execution plan.
- To debug pg hint plan , you can set the following options in psql : SET SESSION pg hint plan . debug print TO true ; SET pg hint plan . message level TO notice ; SET SESSION client min messages TO LOG ; pg proctab You can also use the pg proctab extension along with various other GUI interfaces that use the extension to query system statistics directly from the database.
- The following is an example of the report: The following is a list of some database elements that the report helps you tune: Vacuum Identification of unused indexes Full parameter list, with identification of parameters that might need tuning Abandoned replication slots pev2 The pev2 tool allows the visualization of PostgreSQL EXPLAIN output query plans.
- The following table contains PostgreSQL hints for which there are no Oracle equivalents: Oracle hint pg hint plan hint Explanation None Memoize(table table[ table...]) , NoMemoize(table table[ table...]) Allows PostgreSQL to cache the results of certain nested loop operations for reuse to optimize execution.

### "Execution plan node types \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/alloydb/docs/reference/execution-plan-nodes](https://docs.cloud.google.com/alloydb/docs/reference/execution-plan-nodes)
- Source ID: `site-api-reference`
- Final score: 144
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Use node types in an AlloyDB for PostgreSQL execution plan to help you understand how the database system processes a query.
- 022 rows = 50 loops = 1 ) Output : pgbench branches . bbalance , pgbench branches . filler , pgbench branches . bid Buffers : shared hit = 1 Columnar Check : table is too small Settings : effective cache size = '19690120kB' , enable hashjoin = 'off' , enable nestloop = 'off' , max parallel workers per gather = '0' , random page cost = '1.1' , work mem = '256MB' Query Identifier : 6650290151587259687 Planning : Buffers : shared hit = 4 Planning Time : 0 .
- 17 : 5432 ) [ postgres ] > EXPLAIN ( ANALYZE , VERBOSE , COLUMNAR ENGINE , COSTS , SETTINGS , BUFFERS , WAL ) SELECT FROM public . effective io concurrency test eict WHERE id BETWEEN 10000 AND 100000 OR product id BETWEEN 100 AND 200 ; QUERY PLAN --------------------------------------------------------------------------------- Bitmap Heap Scan on public . effective io concurrency test eict ( cost = 10318 .
- 17 : 5432 ) [ postgres ] > EXPLAIN ( ANALYZE , VERBOSE , COLUMNAR ENGINE , COSTS , SETTINGS , BUFFERS , WAL ) SELECT FROM public . effective io concurrency test eict WHERE id BETWEEN 10000 AND 100000 OR product id BETWEEN 100 AND 200 ; QUERY PLAN --------------------------------------------------------------------------------- Bitmap Heap Scan on public . effective io concurrency test eict ( cost = 10318 .

### "AlloyDB database indexing strategies \_|\_ AlloyDB for PostgreSQL \_|\_\

- URL: [https://docs.cloud.google.com/alloydb/docs/reference/indexing-strategies](https://docs.cloud.google.com/alloydb/docs/reference/indexing-strategies)
- Source ID: `site-api-reference`
- Final score: 138
- Re-rank relevance: N/A

Evidence snippets:
- The following example demonstrates using a test table and a regular B-tree index: CREATE TABLE public . bloom test ( emp id int , dept id int , id2 int , id3 int , id4 int , id5 int , id6 int , id7 int , details text , location code int ); INSERT INTO public . bloom test SELECT ( random () 1000000 ):: int , ( random () 1000000 ):: int , ( random () 1000000 ):: int ,( random () 1000000 ):: int ,( random () 1000000 ):: int ,( random () 1000000 ):: int , ( random () 1000000 ):: int ,( random () 1000000 ):: int , md5 ( g :: text ), floor ( random () ( 20000 - 9999 + 1 ) + 9999 ) FROM generate series ( 1 , 100 1 e4 ) g ; CREATE INDEX idx btree bloom test ON public . bloom test ( emp id , dept id , id2 , id3 , id4 , id5 , id6 , location code ); SELECT from public . bloom test WHERE id5 = 564804 AND id6 = 797758 ; QUERY PLAN -------------------------------------------------------------------------------------------------------- Index Scan using idx btree bloom test on public . bloom test ( cost = 0 .
- You can also run the advisor manually at any time by altering the search path in the session and following these steps: Given the following table with 10m rows in it and no indexes: Table "idx advisor.user test" + ------------------+--------------------------------+-----------+----------+---------+---------+-------- Column Type Collation Nullable Default Storage + ------------------+--------------------------------+-----------+----------+---------+---------+-------- id integer not null plain value numeric main user id integer plain product id integer plain product meas val integer plain effective date timestamp ( 3 ) without time zone plain + ------------------+--------------------------------+-----------+----------+---------+---------+-------- Access method : heap Run a query that could possibly benefit from an index: SELECT from idx advisor . user test where id = 500533 ; + ------------------------------------------------------------------------------------------------------- QUERY PLAN + ------------------------------------------------------------------------------------------------------- Gather ( cost = 1000 .
- 692 rows = 5 loops = 1 ) Output : id , creationdate , score , title , viewcount , "substring" ( body , 0 , 50 ), ( body embeddings < = > '[0.0017194863,-0.04174791,-0.017442022,...,0.035435043,-0.004936148,-0.008868503]' :: vector ) Order By : ( p . body embeddings < = > '[0.0017194863,-0.04174791,-0.017442022,...,0.035435043,-0.004936148,-0.008868503]' :: vector ) Filter : ( p . title IS NOT NULL ) Rows Removed by Filter : 4 Buffers : shared hit = 2565 Columnar Check : table is not in the columnar store Settings : effective cache size = '9830032kB' , random page cost = '1.1' , work mem = '256MB' Query Identifier : - 6886845657091642615 Planning : Buffers : shared hit = 2 Planning Time : 53 .
- 088 rows = 5 loops = 1 ) Output : id , creationdate , score , title , viewcount , "substring" ( body , 0 , 50 ), ( body embeddings < = > '[0.0017194863,-0.04174791,-0.017442022,...,0.035435043,-0.004936148,-0.008868503]' :: vector ) Order By : ( p . body embeddings < = > '[0.0017194863,-0.04174791,-0.017442022,...,0.035435043,-0.004936148,-0.008868503]' :: vector ) Filter : ( p . title IS NOT NULL ) Rows Removed by Filter : 2 Buffers : shared hit = 889 Columnar Check : table is not in the columnar store Settings : effective cache size = '9830032kB' , random page cost = '1.1' , work mem = '256MB' Query Identifier : - 6886845657091642615 Planning : Buffers : shared hit = 1 Planning Time : 93 .

