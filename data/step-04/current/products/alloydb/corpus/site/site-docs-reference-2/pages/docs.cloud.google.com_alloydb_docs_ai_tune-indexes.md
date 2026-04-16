---
title: "Tune vector query performance in AlloyDB for PostgreSQL \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/alloydb/docs/ai/tune-indexes
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/alloydb/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/alloydb/docs/ai/tune-indexes
  title: "Tune vector query performance in AlloyDB for PostgreSQL \_|\_ Google Cloud\
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
Guides
Send feedback
Tune vector query performance in AlloyDB for PostgreSQL
Stay organized with collections
Save and categorize content based on your preferences.
This page describes how to tune your indexes to achieve faster query performance
and better recall in AlloyDB for PostgreSQL.
ScaNN
IVF
IVFFlat
HNSW
Before you begin
Before you build a ScaNN index, complete the following:
Make sure that a table with your data is already created.
To avoid issues while generating the index, make sure that the value that
you set for the maintenance_work_mem and the
shared_buffers flag is less than the total machine memory .
Tune a ScaNN index
Use the following guidance to choose between a two-level and three-level ScaNN index:
Choose a two-level index if the number of vector rows is less than 10 million rows.
Choose a three-level index if the number of vector rows exceeds 100 million rows.
Choose a three-level index to optimize for index build time or choose a two-level index to optimize for search recall if the number of vector rows lies between 10 million and 100 million rows.
Consider the following examples for two-level and three-level ScaNN indexes that show how tuning parameters are set for a table with 1000000 rows:
Two-level index
SET LOCAL scann . num_leaves_to_search = 1 ;
SET LOCAL scann . pre_reordering_num_neighbors = 50 ;
CREATE INDEX my_scann_index ON my_table
USING scann ( vector_column cosine )
WITH ( num_leaves = [ power ( 1000000 , 1 / 2 )]);
Three-level index
SET LOCAL scann . num_leaves_to_search = 10 ;
SET LOCAL scann . pre_reordering_num_neighbors = 50 ;
CREATE INDEX my_scann_index ON my_table
USING scann ( vector_column cosine )
WITH ( num_leaves = [ power ( 1000000 , 2 / 3 )], max_num_levels = 2 );
To optimize the balance between recall and QPS when tuning ScaNN indexes, see
Best practices for tuning ScaNN indexes .
Analyze your queries
Use the EXPLAIN ANALYZE command to analyze your query insights as shown in the following example SQL query.
EXPLAIN ANALYZE SELECT result - column
FROM my_table
ORDER BY EMBEDDING_COLUMN < - > embedding ( 'text-embedding-005' , 'What is a database?' ):: vector
LIMIT 1 ;
The example response QUERY PLAN includes information such as the time taken, the number of rows scanned or returned, and the resources used.
Limit (cost=0.42..15.27 rows=1 width=32) (actual time=0.106..0.132 rows=1 loops=1)
-> Index Scan using my_scann_index on my_table (cost=0.42..858027.93 rows=100000 width=32) (actual time=0.105..0.129 rows=1 loops=1)
Order By: (embedding_column <-> embedding('text-embedding-005', 'What is a database?')::vector(768))
Limit value: 1
Planning Time: 0.354 ms
Execution Time: 0.141 ms
View vector index metrics
You can use vector index metrics to review performance of your vector index,
identify areas for improvement, and tune your index based on the metrics, if
needed. The pg_stat_ann_indexes view helps you understand the state of index
utilization while the pg_stat_ann_index_creation view provides information
about rows created at the time of index creation.
To view index utilization metrics, run the following command:
SELECT * FROM pg_stat_ann_indexes ;
You see output similar to the following:
-[ RECORD 1 ]----------+---------------------------------------------------------------------------
relid | 271236
indexrelid | 271242
schemaname | public
relname | t1
indexrelname | t1_ix1
indextype | scann
indexconfig | {num_leaves=100,quantizer=SQ8}
indexsize | 832 kB
indexscan | 0
insertcount | 250
deletecount | 0
updatecount | 0
partitioncount | 100
distribution | {"average": 3.54, "maximum": 37, "minimum": 0, "outliers": [37, 12, 11, 10, 10, 9, 9, 9, 9, 9]}
distributionpercentile |{"10": { "num_vectors": 0, "num_partitions": 0 }, "25": { "num_vectors": 0, "num_partitions": 30 }, "50": { "num_vectors": 3, "num_partitions": 30 }, "75": { "num_vectors": 5, "num_partitions": 19 }, "90": { "num_vectors": 7, "num_partitions": 11 }, "95": { "num_vectors": 9, "num_partitions": 5 }, "99": { "num_vectors": 12, "num_partitions": 4 }, "100": { "num_vectors": 37, "num_partitions": 1 }}
To view number of rows created at the time of index creation, run the following command:
SELECT * FROM pg_stat_ann_index_creation ;
You see output similar to the following:
-[ RECORD 1 ]----------+---------------------------------------------------------------------------
relid | 271236
indexrelid | 271242
schemaname | public
relname | t1
indexrelname | t1_ix1
index_rows_at_creation_time | 262144
For more information about the complete list of metrics, see Vector index
metrics .
What's next
Maintain vector indexes .
Learn about an example embedding workflow .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
