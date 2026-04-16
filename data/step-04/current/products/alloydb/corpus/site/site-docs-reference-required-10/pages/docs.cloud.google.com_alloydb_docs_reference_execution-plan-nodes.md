---
title: "Execution plan node types \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/alloydb/docs/reference/execution-plan-nodes
knowledge_key: corpus
source_id: site-docs-reference-required-10
source_type: site
entrypoint: https://docs.cloud.google.com/alloydb/docs/reference/query-tuning-and-optimization
source_metadata:
  url: https://docs.cloud.google.com/alloydb/docs/reference/execution-plan-nodes
  title: "Execution plan node types \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
AlloyDB for PostgreSQL
Reference
Send feedback
Execution plan node types
Stay organized with collections
Save and categorize content based on your preferences.
Use node types in an AlloyDB for PostgreSQL execution plan to help you understand how the
database system processes a query. Each node represents a specific operation or step in
the query execution, and their types provide insights into your chosen strategy.
Understanding the nodes of an explain plan is important for performance tuning.
Each node accomplishes a different operation and obtains data differently, so
each type can have a performance implication.
For more information, see Generate and analyze execution plans .
Table and index node types
Table and Index related node types are important for understanding data access strategies.
Seq Scan
A Seq Scan node scans every row of a table. It doesn't allow filtering or
direct access to specific rows, unlike an index. For an example of a Seq Scan ,
see WAL option .
Bitmap Heap Scan
A Bitmap Heap Scan node works with a Bitmap Index Scan node, which
prefetches heap blocks based on the associated index scan. This node type
is useful when a query returns a large number of rows, because the heap can undergo
prefetch. In open source PostgreSQL versions 18 and earlier, Bitmap Index Scan
is the only scan that produces a prefetch. Index Scan and Index Only Scan don't
produce prefetches.
Bitmap Index Scan
A Bitmap Index Scan node precedes a Bitmap Heap Scan. The Bitmap Index Scan
node scans the index, finds all matches, and builds a bitmap. It then passes
this bitmap to the Bitmap Heap Scan to return the relevant data.
This bitmap allows page skipping
and prefetch, which results in faster data access. work_mem is a useful tuning
lever for this scan type because it's required to build the bitmap. If
work_mem is too small, the bitmap stores only the entire
page in the bitmap rather than the exact row counter.
You can identify inefficient bitmap scans when the keyword "Lossy" is
on the bitmap scan node. To prevent this situation, increase work_mem or
make sure that a recent vacuum is completed on the table.
( postgres @ 10 . 3 . 1 . 17 : 5432 ) [ postgres ] > EXPLAIN ( ANALYZE , VERBOSE , COLUMNAR_ENGINE , COSTS , SETTINGS , BUFFERS , WAL )
SELECT * FROM public . effective_io_concurrency_test eict
WHERE id BETWEEN 10000 AND 100000
OR product_id BETWEEN 100 AND 200 ;
QUERY PLAN
---------------------------------------------------------------------------------
Bitmap Heap Scan on public . effective_io_concurrency_test eict ( cost = 10318 . 30 .. 488198 . 00 rows = 619435 width = 31 ) ( actual time = 113 . 696 .. 2443 . 712 rows = 589389 loops = 1 )
Output : id , value , product_id , effective_date
Recheck Cond : ((( eict . id > = 10000 ) AND ( eict . id < = 100000 )) OR (( eict . product_id > = 100 ) AND ( eict . product_id < = 200 )))
Heap Blocks : exact = 378308
Buffers : shared hit = 1784 read = 379535 written = 4115
I / O Timings : shared read = 1201 . 096 write = 37 . 558
- > BitmapOr ( cost = 10318 . 30 .. 10318 . 30 rows = 619925 width = 0 ) ( actual time = 68 . 895 .. 68 . 896 rows = 0 loops = 1 )
Buffers : shared hit = 501 read = 2510
I / O Timings : shared read = 11 . 655
- > Bitmap Index Scan on effective_io_concurrency_test_pkey ( cost = 0 . 00 .. 1807 . 88 rows = 92951 width = 0 ) ( actual time = 2 . 513 .. 2 . 513 rows = 90001 loops = 1 )
Index Cond : (( eict . id > = 10000 ) AND ( eict . id < = 100000 ))
Buffers : shared hit = 496
- > Bitmap Index Scan on effective_io_concurrency_test_groupby ( cost = 0 . 00 .. 8200 . 71 rows = 526974 width = 0 ) ( actual time = 66 . 380 .. 66 . 380 rows = 499871 loops = 1 )
Index Cond : (( eict . product_id > = 100 ) AND ( eict . product_id < = 200 ))
Buffers : shared hit = 5 read = 2510
I / O Timings : shared read = 11 . 655
Settings : effective_cache_size = '19690120kB' , random_page_cost = '1.1' , work_mem = '256MB'
Query Identifier : - 5140071079400709055
Planning :
Buffers : shared hit = 36
Planning Time : 0 . 133 ms
Execution Time : 2477 . 216 ms
AlloyDB query id : 18229116469546507386
AlloyDB plan id : 17462269545806790969
Index Scan
An Index Scan node uses an index to access specific records matching the
predicate. This node then obtains other relevant columns by scanning the heap. This
node type supports forward and backward ordering. Heap access is
required because an index doesn't store visibility information for columns
outside the index. This access method might be slower than others when returning
a large number of rows because it doesn't prefetch the heap.
Index Only Scan
An Index Only Scan node occurs when the index completely covers the predicate
and any returned columns. This node type relies heavily on the visibility map,
which vacuum maintains, to avoid heap access. If the visibility map isn't
up to date, some heap access is required to return the correct data.
Join node types
A Join node type is the method that the query planner chooses to combine
rows from two or more tables—or other relations—based on a join condition.
Nested Loop Join
A Nested Loop join node steps through one table and looks for a match in
another table or subquery. The goal is for each lookup to use an index, but this
depends on the volume of accessed data. This access type works well for smaller
datasets but not for bulk operations.
Merge Join
A Merge Join node requires sorted data from both tables or from one table and a
subquery. An index access or an explicit ORDER BY provides the sort. The
sorted data then eliminates unmatched data through comparison. This join
node works well for bulk operations, but if an ORDER BY provides the sorted
data, then this access method might be slower than others. The sorting
steps in the following example serve as input to the Merge Join.
( postgres @ 10 . 3 . 1 . 17 : 5432 ) [ postgres ] > EXPLAIN ( ANALYZE , VERBOSE , COLUMNAR_ENGINE , COSTS , SETTINGS , BUFFERS , WAL )
SELECT * FROM pgbench_accounts JOIN pgbench_branches USING ( bid );
QUERY PLAN
---------------------------------------------------------------------------------
Merge Join ( cost = 848464 . 58 .. 923464 . 83 rows = 5000000 width = 457 ) ( actual time = 1359 . 470 .. 2482 . 524 rows = 5000000 loops = 1 )
Output : pgbench_accounts . bid , pgbench_accounts . aid , pgbench_accounts . abalance , pgbench_accounts . filler , pgbench_branches . bbalance , pgbench_branches . filler
Inner Unique : true
Merge Cond : ( pgbench_accounts . bid = pgbench_branches . bid )
Buffers : shared hit = 81927 read = 42 , temp read = 65437 written = 65440 , ultra fast cache hit = 42
I / O Timings : shared read = 0 . 949 , temp read = 77 . 181 write = 186 . 481
- > Sort ( cost = 848461 . 67 .. 860961 . 67 rows = 5000000 width = 97 ) ( actual time = 1359 . 427 .. 1741 . 924 rows = 5000000 loops = 1 )
Output : pgbench_accounts . bid , pgbench_accounts . aid , pgbench_accounts . abalance , pgbench_accounts . filler
Sort Key : pgbench_accounts . bid
Sort Method : external merge Disk : 523496 kB
Buffers : shared hit = 81926 read = 42 , temp read = 65437 written = 65440 , ultra fast cache hit = 42
I / O Timings : shared read = 0 . 949 , temp read = 77 . 181 write = 186 . 481
- > Seq Scan on public . pgbench_accounts ( cost = 0 . 00 .. 131968 . 00 rows = 5000000 width = 97 ) ( actual time = 0 . 006 .. 476 . 386 rows = 5000000 loops = 1 )
Output : pgbench_accounts . bid , pgbench_accounts . aid , pgbench_accounts . abalance , pgbench_accounts . filler
Buffers : shared hit = 81926 read = 42 , ultra fast cache hit = 42
I / O Timings : shared read = 0 . 949
Columnar Check : table is not in the columnar store
- > Sort ( cost = 2 . 91 .. 3 . 04 rows = 50 width = 364 ) ( actual time = 0 . 038 .. 0 . 050 rows = 50 loops = 1 )
Output : pgbench_branches . bbalance , pgbench_branches . filler , pgbench_branches . bid
Sort Key : pgbench_branches . bid
Sort Method : quicksort Memory : 27 kB
Buffers : shared hit = 1
- > Seq Scan on public . pgbench_branches ( cost = 0 . 00 .. 1 . 50 rows = 50 width = 364 ) ( actual time = 0 . 016 .. 0 . 022 rows = 50 loops = 1 )
Output : pgbench_branches . bbalance , pgbench_branches . filler , pgbench_branches . bid
Buffers : shared hit = 1
Columnar Check : table is too small
Settings : effective_cache_size = '19690120kB' , enable_hashjoin = 'off' , enable_nestloop = 'off' , max_parallel_workers_per_gather = '0' , random_page_cost = '1.1' , work_mem = '256MB'
Query Identifier : 6650290151587259687
Planning :
Buffers : shared hit = 4
Planning Time : 0 . 105 ms
Execution Time : 2786 . 403 ms
Hash Join
A Hash Join node is a common join type that depends on available memory. This
join type is typically slower to start but much faster after it begins. Hash Join builds
a hash table for one side of the join, then builds a corresponding hash table
for the other side, and compares those entries.
Because hash tables can be
large, make sure that you provide enough work_mem to support the operation.
work_mem in conjunction with hash_mem_multiplier determines the total memory available for
building hash tables. If you notice batching in the node, this indicates that there is
insufficient memory to support the entire hash table in memory. The explain plan
also shows the memory that the hash table used. Batching is how a query
is processed when it exceeds available memory, which forces data to be processed
in smaller chunks or batches, often on disk.
( postgres @ 10 . 3 . 1 . 17 : 5432 ) [ postgres ] > EXPLAIN ( ANALYZE , VERBOSE , COLUMNAR_ENGINE , COSTS , SETTINGS , BUFFERS , WAL )
SELECT ship_month , count ( * ) FROM ( select date_trunc ( 'month' , l_shipdate ) as ship_month , l_partkey from lineitem ) a GROUP BY ship_month ;
QUERY PLAN
---------------------------------------------------------------------------------
Hash Join ( cost = 5909 . 88 .. 5911 . 20 rows = 25 width = 58 ) ( actual time = 86 . 467 .. 86 . 493 rows = 25 loops = 1 )
Hash Cond : ( n . n_nationkey = c . c_nationkey )
- > Seq Scan on nation n ( cost = 0 . 00 .. 1 . 25 rows = 25 width = 30 ) ( actual time = 0 . 012 .. 0 . 016 rows = 25 loops = 1 )
- > Hash ( cost = 5909 . 56 .. 5909 . 56 rows = 25 width = 36 ) ( actual time = 86 . 447 .. 86 . 448 rows = 25 loops = 1 )
Buckets : 1024 Batches : 1 Memory Usage : 10 kB
- > Subquery Scan on c ( cost = 5909 . 00 .. 5909 . 56 rows = 25 width = 36 ) ( actual time = 86 . 421 .. 86 . 433 rows = 25 loops = 1 )
- > HashAggregate ( cost = 5909 . 00 .. 5909 . 31 rows = 25 width = 36 ) ( actual time = 86 . 420 .. 86 . 427 rows = 25 loops = 1 )
Group Key : customer . c_nationkey
Batches : 1 Memory Usage : 32 kB
- > Seq Scan on customer ( cost = 0 . 00 .. 5159 . 00 rows = 150000 width = 10 ) ( actual time = 0 . 006 .. 28 . 228 rows = 150000 loops = 1 )
Planning Time : 0 . 179 ms
Execution Time : 86 . 551 ms
Aggregate node types
Aggregate node types combine multiple input rows
into a single result row, often in conjunction with aggregate functions like
COUNT , SUM , AVG , MAX , or MIN , or when a GROUP BY clause is present.
These nodes process multiple input rows to produce single, aggregated results.
GroupAggregate
The GroupAggregate node performs all aggregation operations but requires
sorted data from all input nodes. Because the data is sorted, this node type
requires less memory and returns sorted data. Indexes covering the GROUP BY
clause help speed up this aggregation type. This aggregation type addresses all
PostgreSQL aggregate types, including the following:
count(distinct ...)
array_agg(...)
order by ...
( postgres @ 10 . 3 . 1 . 17 : 5432 ) [ postgres ] > EXPLAIN ( ANALYZE , VERBOSE , COLUMNAR_ENGINE , COSTS , SETTINGS , BUFFERS , WAL )
SELECT ship_month , count ( * ) FROM ( select date_trunc ( 'month' , l_shipdate ) as ship_month , l_partkey from lineitem ) a GROUP BY ship_month ;
QUERY PLAN
---------------------------------------------------------------------------------
GroupAggregate ( cost = 1085309 . 69 .. 1130355 . 32 rows = 2508 width = 16 ) ( actual time = 4769 . 489 .. 8799 . 882 rows = 83 loops = 1 )
Group Key : ( date_trunc ( 'month' :: text , l_shipdate ))
- > Sort ( cost = 1085309 . 69 .. 1100314 . 45 rows = 6001903 width = 14 ) ( actual time = 4763 . 972 .. 5441 . 191 rows = 6001589 loops = 1 )
Sort Key : ( date_trunc ( 'month' :: text , l_shipdate ))
Sort Method : external merge Disk : 146264 kB
- > Seq Scan on lineitem ( cost = 0 . 00 .. 204436 . 79 rows = 6001903 width = 14 ) ( actual time = 0 . 065 .. 2061 . 266 rows = 6001589 loops = 1 )
Planning Time : 0 . 114 ms
Execution Time : 8827 . 120 ms
HashAggregate
The HashAggregate node performs basic aggregation operations and uses unsorted
data from all input nodes. Because the data is unsorted, the node requires more
memory and returns unsorted data.
Because hash tables can be
large, make sure that you provide enough work_mem to support the operation.
work_mem in conjunction with hash_mem_multiplier determines the total memory available for
building hash tables. If you notice batching in the node, this indicates that there is
insufficient memory to support the entire hash table in memory. The explain plan
also shows the memory that the hash table used.
( postgres @ 10 . 3 . 1 . 17 : 5432 ) [ postgres ] > EXPLAIN ( ANALYZE , VERBOSE , COLUMNAR_ENGINE , COSTS , SETTINGS , BUFFERS , WAL )
SELECT ship_month , count ( * ) FROM ( select date_trunc ( 'month' , l_shipdate ) as ship_month , l_partkey from lineitem ) a GROUP BY ship_month ;
QUERY PLAN
---------------------------------------------------------------------------------
Hash Join ( cost = 5909 . 88 .. 5911 . 20 rows = 25 width = 58 ) ( actual time = 86 . 467 .. 86 . 493 rows = 25 loops = 1 )
Hash Cond : ( n . n_nationkey = c . c_nationkey )
- > Seq Scan on nation n ( cost = 0 . 00 .. 1 . 25 rows = 25 width = 30 ) ( actual time = 0 . 012 .. 0 . 016 rows = 25 loops = 1 )
- > Hash ( cost = 5909 . 56 .. 5909 . 56 rows = 25 width = 36 ) ( actual time = 86 . 447 .. 86 . 448 rows = 25 loops = 1 )
Buckets : 1024 Batches : 1 Memory Usage : 10 kB
- > Subquery Scan on c ( cost = 5909 . 00 .. 5909 . 56 rows = 25 width = 36 ) ( actual time = 86 . 421 .. 86 . 433 rows = 25 loops = 1 )
- > HashAggregate ( cost = 5909 . 00 .. 5909 . 31 rows = 25 width = 36 ) ( actual time = 86 . 420 .. 86 . 427 rows = 25 loops = 1 )
Group Key : customer . c_nationkey
Batches : 1 Memory Usage : 32 kB
- > Seq Scan on customer ( cost = 0 . 00 .. 5159 . 00 rows = 150000 width = 10 ) ( actual time = 0 . 006 .. 28 . 228 rows = 150000 loops = 1 )
Planning Time : 0 . 179 ms
Execution Time : 86 . 551 ms
Parallel node types
Parallel node types facilitate parallel query execution. These nodes work
together to distribute work among multiple worker processes and then consolidate
the results.
Gather
The Gather node collects and assembles data from worker processes.
Parallel Sequential Scan
Based on the number of workers that the planner determines it can use, the leader
assigns blocks to individual workers. Those workers then scan those blocks
sequentially for relevant data and pass it back to the Gather node, which
combines the results.
Parallel Bitmap Heap Scan
A Parallel Bitmap Heap Scan gathers data like a Parallel Seq Scan,
but it emulates the behavior of a Bitmap Heap Scan. The leader process
performs the Bitmap Index Scan and builds the bitmap. The leader then assigns
portions of that bitmap to workers to perform the Parallel Bitmap Heap Scan. A
Gather step is required to assemble data from the worker processes.
Parallel Index Scan
A Parallel Index Scan works like an Index Scan, except that each worker
takes turns reading the index. Each worker outputs its data in sorted order for
that worker. Once the data passes back to the leader, the system sorts the data
a final time to support ordered index scans. Parallel index scans are only
supported for B-Tree index types.
Parallel Index Only Scan
A Parallel Index Only Scan works like a Parallel Index Scan. In
certain circumstances, the heap doesn't require a visit.
Parallel aggregate node types
A parallel aggregate is a mechanism for speeding up the execution of aggregate
functions by distributing the aggregation work across multiple worker processes.
Partial Aggregate
When a parallel sequential or index scan executes with an aggregation, each
worker aggregates its data, which results in a partial aggregate.
Finalize Aggregate
The Finalize Aggregate occurs after the partial aggregations pass to the
leader. The leader process then finalizes the aggregation. Not all aggregations
use parallel worker processes.
Other node types
This section contains information about other node types like Bitmap And/Or,
Materialize, and Sort.
Bitmap And/Or
The Bitmap And/Or node combines bitmaps from multiple Bitmap Index Scans.
The combined bitmap then passes to the Bitmap Heap Scan, which removes the need
to run the heap scan more than once. This node has the same work_mem
limitations as the Bitmap Index Scan and might require more work_mem to
reduce lossiness.
Lossiness means that an index might return more results
than necessary, forcing the database to perform an extra check to filter out
the incorrect results. The "loss" refers to the index losing some of the detail
that's needed to identify the correct rows on its own.
( postgres @ 10 . 3 . 1 . 17 : 5432 ) [ postgres ] > EXPLAIN ( ANALYZE , VERBOSE , COLUMNAR_ENGINE , COSTS , SETTINGS , BUFFERS , WAL )
SELECT * FROM public . effective_io_concurrency_test eict
WHERE id BETWEEN 10000 AND 100000
OR product_id BETWEEN 100 AND 200 ;
QUERY PLAN
---------------------------------------------------------------------------------
Bitmap Heap Scan on public . effective_io_concurrency_test eict ( cost = 10318 . 30 .. 488198 . 00 rows = 619435 width = 31 ) ( actual time = 113 . 696 .. 2443 . 712 rows = 589389 loops = 1 )
Output : id , value , product_id , effective_date
Recheck Cond : ((( eict . id > = 10000 ) AND ( eict . id < = 100000 )) OR (( eict . product_id > = 100 ) AND ( eict . product_id < = 200 )))
Heap Blocks : exact = 378308
Buffers : shared hit = 1784 read = 379535 written = 4115
I / O Timings : shared read = 1201 . 096 write = 37 . 558
- > BitmapOr ( cost = 10318 . 30 .. 10318 . 30 rows = 619925 width = 0 ) ( actual time = 68 . 895 .. 68 . 896 rows = 0 loops = 1 )
Buffers : shared hit = 501 read = 2510
I / O Timings : shared read = 11 . 655
- > Bitmap Index Scan on effective_io_concurrency_test_pkey ( cost = 0 . 00 .. 1807 . 88 rows = 92951 width = 0 ) ( actual time = 2 . 513 .. 2 . 513 rows = 90001 loops = 1 )
Index Cond : (( eict . id > = 10000 ) AND ( eict . id < = 100000 ))
Buffers : shared hit = 496
- > Bitmap Index Scan on effective_io_concurrency_test_groupby ( cost = 0 . 00 .. 8200 . 71 rows = 526974 width = 0 ) ( actual time = 66 . 380 .. 66 . 380 rows = 499871 loops = 1 )
Index Cond : (( eict . product_id > = 100 ) AND ( eict . product_id < = 200 ))
Buffers : shared hit = 5 read = 2510
I / O Timings : shared read = 11 . 655
Settings : effective_cache_size = '19690120kB' , random_page_cost = '1.1' , work_mem = '256MB'
Query Identifier : - 5140071079400709055
Planning :
Buffers : shared hit = 36
Planning Time : 0 . 133 ms
Execution Time : 2477 . 216 ms
AlloyDB query id : 18229116469546507386
AlloyDB plan id : 17462269545806790969
Materialize
Typically seen in Common Table Expressions (CTEs), the Materialize node builds
an in-memory tuple store for later reuse. If the CTE isn't materialized and is
used multiple times, the system builds the tuple store when needed.
Materializing a CTE typically improves performance.
Sort
The Sort step supports any ORDER BY options in the query. All records
must be visited before the step completes. The Sort node is dependent on work_mem .
If work_mem isn't large enough, multiple round trips to disk occur
so that the sort can complete.
Memoize
The Memoize node uses work_mem and hash_mem_multiplier to build a
hash table. This hash table caches results for parameterized scans that the
Nested Loop Join node uses. The hash table must fit within memory constraints
in order for the system to use this node. Memoize can significantly speed up Nested
Loops because the system doesn't re-execute the scan for each loop.
Append
The Append node handles operations like UNION or UNION ALL . When two
nodes combine data, an Append node appears.
Limit
The Limit node returns a subset of records specified by the LIMIT clause. It
sometimes works with the OFFSET clause. In cases of OFFSET , the cost to
return the first row might be higher than expected.
CTE Scan
The CTE Scan node uses results from a Common Table Expression (CTE) to join to
another node. Depending on how many times you use a CTE, using the MATERIALIZE
keyword with the CTE instantiation might be beneficial.
Note: In many cases, predicate push-down doesn't occur when you join a CTE to
another table.
Custom Scan
A Custom Scan node is specific to AlloyDB. This node indicates
that the node operates on the columnar engine .
( postgres @ 10 . 3 . 1 . 17 : 5432 ) [ postgres ] > EXPLAIN ( ANALYZE , VERBOSE , COLUMNAR_ENGINE ) select * from public . index_advisor_test where product_id = 1 ;
QUERY PLAN
---------------------------------------------------------------------------------
Append ( cost = 20 . 00 .. 27438 . 78 rows = 1166668 width = 27 ) ( actual time = 0 . 066 .. 377 . 029 rows = 1000290 loops = 1 )
- > Custom Scan ( columnar scan ) on public . index_advisor_test ( cost = 20 . 00 .. 27437 . 66 rows = 1166667 width = 27 ) ( actual time = 0 . 065 .. 296 . 904 rows = 1000290 loops = 1 )
Output : id , value , product_id , effective_date
Filter : ( index_advisor_test . product_id = 1 )
Rows Removed by Columnar Filter : 98999711
Bytes fetched from storage cache : 774835915
Columnar cache search mode : native
Swap - in Time : 92 . 708 ms
- > Seq Scan on public . index_advisor_test ( cost = 0 . 00 .. 1 . 11 rows = 1 width = 27 ) ( never executed )
Output : id , value , product_id , effective_date
Filter : ( index_advisor_test . product_id = 1 )
Query Identifier : - 4660018746142248761
Planning Time : 0 . 217 ms
Execution Time : 421 . 114 ms
AlloyDB query id : 13855683355620344431
AlloyDB plan id : 2126918133221480510
This plan output includes the following information:
Query Filter (predicate) : this shows the applied filter, if you use one.
Rows Removed by Columnar Filter : this indicates the number of rows that the
columnar filter removed.
Bytes fetched from storage cache : this shows the number of bytes
retrieved from the storage cache.
Swap-in Time : this is the time required to swap data from the columnar
spill cache (SSD) if the relation doesn't fit into memory.
What's next
Get and analyze execution plans .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
