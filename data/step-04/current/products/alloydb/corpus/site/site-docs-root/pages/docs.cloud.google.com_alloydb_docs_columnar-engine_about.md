---
title: "About the AlloyDB columnar engine \_|\_ AlloyDB for PostgreSQL \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/alloydb/docs/columnar-engine/about
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/alloydb/docs
source_metadata:
  url: https://docs.cloud.google.com/alloydb/docs/columnar-engine/about
  title: "About the AlloyDB columnar engine \_|\_ AlloyDB for PostgreSQL \_|\_ Google\
    \ Cloud Documentation"
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
About the AlloyDB columnar engine
Stay organized with collections
Save and categorize content based on your preferences.
This page provides an overview of the columnar engine that
AlloyDB for PostgreSQL offers and shows how to use it.
The AlloyDB columnar engine accelerates SQL query
processing of scans, joins, and aggregates by providing these components:
A column store that contains table and materialized-view data for selected
columns, reorganized into a column-oriented format. You can also add
frequently used expressions
to the column store.
A columnar query planner and execution engine to support
use of the column store in queries.
The columnar engine can be used on the primary instance, a read pool instance, or both.
You can also use auto-columnarization
to analyze your workload and automatically populate the column store with the columns
that provide the best performance gain.
To use the columnar engine with a specific query, all columns in that query fragments,
such as joins and scans, must be in the column store.
By default, the columnar engine is set to use 30% of your instance's memory.
Depending on your workload, memory usage, and if you have a read pool configured,
you may choose to reduce the columnar engine memory allocation on your primary
instance and allocate more memory to the read pool instance.
To view and monitor memory usage by the columnar
engine, see View column store memory usage .
To modify the memory size used by the column store, see
Configure the size of the column store .
To find the recommended columnar engine memory size for your instance, see
Recommend column store memory size .
Query types that benefit from the columnar engine
Certain queries can benefit from the columnar engine. The following is a list of
operations and their query patterns that benefit most from the columnar engine:
Table scans
It has selective filters, such as WHERE clauses.
It uses a small number of columns from a larger table or materialized view.
It uses expressions such as LIKE , ILIKE , SUBSTR , and TRIM .
Aggregation functions
They only use the following expressions: SUM , MIN , MAX , AVG , and COUNT .
They are at the beginning of the query of a columnar scan.
They are ungrouped, or are grouped-by columns.
ORDER-BY and SORT : only when the ORDER-BY or SORT is on the scan results of columns accessed from the columnar engine.
LIMIT : only if the operator is at the beginning of the query
of a columnar scan and is before any SORT or GROUP BY operators.
INNER HASH JOIN only if the keys used are columns and no join
qualifiers are used.
Selective joins only if the joins are at the beginning of the query
of a columnar scan.
Filter queries with JSON expressions.
For more information on which queries work best with the columnar engine, whether
the columnar engine was used by a query, and how it was used, see
Verify usage of the columnar engine using EXPLAIN .
How to use the columnar engine
To use the columnar engine in an AlloyDB instance, you perform these
high-level steps:
Enable the engine on the instance.
Enabling the engine is a one-time operation and requires a restart.
Add columns to the column store.
To add columns to the column store, use one of the following methods:
Use auto-columnarization ,
which analyzes your workload and automatically adds columns.
Add the columns
manually or add
frequently used expressions to the column store ( Preview ) based on your knowledge of the workload
on the databases in the instance.
You can track what's in the column store using the g_columnar_relations
view , and, after
columns have been added, you can use the EXPLAIN
statement to verify usage of
the columnar engine in SQL queries.
For detailed instructions on how to use the columnar engine, see
Configure the columnar engine .
What data you can add to the column store
There are some limitations on the data types and data sources you can use
when adding columns to the column store.
Supported data types
The columnar engine can populate and refresh supported columns in a table even
if some columns have unsupported data types. Columns with unsupported data types
are skipped during the population process.
When executing a query, the columnar engine processes a table if all
the specific columns referenced in that part of the query have supported data
types and are present in the columnar engine.
In queries involving multiple tables, such as JOIN operations, you can use the
columnar engine for any table on an individual basis. As long as all the
columns accessed from the specific table in the query have supported data types
and are in the columnar engine, that table can be processed by the columnar engine, even
if other tables in the join have unsupported columns.
The columnar engine supports only columns with the following built-in
data types:
array
bigint
boolean
bytea
char
date
decimal
double precision
enum
float4
float8
integer
json
jsonb
numeric
real
serial
short
smallint
text
timestamp
timestamptz
uuid
varchar
vector
The columnar engine ignores any attempts to manually add columns with unsupported
data types to the column store.
Unsupported data sources
The columnar engine does not support tables or materialized views with the
following attributes as data sources:
Non-leaf partitioned tables
Foreign tables
Columnar engine limitations
If you're running an analytical query on a column that has an index,
the AlloyDB optimizer may choose to use row-store.
Columns added manually to the column store aren't automatically removed. To force remove
manually added columns, use
google_columnar_engine_drop()
on your instance.
Auto-columnarization may dynamically add and remove columns based on query
usage.
Not all data types are supported by the columnar engine. To see supported
data types, see supported data types .
Frequent updates to rows invalidate columnar data. To validate a table or a
materialized view in the columnar store, you can either reduce the update
frequency, or
schedule more frequent the columnar engine refreshes .
You can compare the invalid_block_count and total_block_count columns in
g_columnar_relations
to check if your table or view is impacted. If you have a frequent or high-volume changes to your table or view, the invalid_block_count will be high.
A partitioned table can't be directly populated into the columnar engine.
To use the columnar engine, you must individually populate each of the table's
leaf partitions.
For tables or views with a small number of rows, typically fewer than 5,000, the query planner might choose to use the row-store instead of the column store for better performance, even if the data is successfully loaded into the columnar engine.
What's next
Configure the columnar engine .
Configure the columnar engine on AlloyDB Omni .
Learn how to accelerate analytical queries using the AlloyDB columnar engine .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
