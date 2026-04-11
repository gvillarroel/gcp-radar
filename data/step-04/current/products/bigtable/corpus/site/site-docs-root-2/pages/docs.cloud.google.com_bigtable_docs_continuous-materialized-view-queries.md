---
title: "Continuous materialized view queries \_|\_ Bigtable \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/bigtable/docs/continuous-materialized-view-queries
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/bigtable/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/bigtable/docs/continuous-materialized-view-queries
  title: "Continuous materialized view queries \_|\_ Bigtable \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
Bigtable
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Continuous materialized view queries
Preview
This product or feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section
of the Service Specific
Terms .
Pre-GA products and features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
To create a continuous materialized view of a Bigtable table, you run a
SQL query that defines the continuous materialized view.
This document describes concepts and patterns to help you prepare your
continuous materialized view SQL query. Before you read this document, you
should be familiar with Continuous materialized
views and GoogleSQL for
Bigtable .
Continuous materialized views use restricted SQL syntax. The
following pattern shows how to build a continuous materialized view SQL query:
SELECT
expression AS alias [ , ... ]
FROM from_item
[ WHERE bool_expression ]
GROUP BY expression [ , ... ] ;
from_item :
{
table_name [ as_alias ]
| field_path
}
as_alias :
[ AS ] alias
If you want to build a continuous materialized view SQL query as an asynchronous
secondary index, use the ORDER BY clause:
SELECT
expression AS alias [ , ... ]
FROM from_item
[ WHERE bool_expression ]
ORDER BY expression [ , ... ] ;
from_item :
{
table_name [ as_alias ]
| field_path
}
as_alias :
[ AS ] alias
Query limitations
The following rules apply to a SQL query used to create a continuous
materialized view:
Must be a SELECT statement.
Must have a GROUP BY clause or, for asynchronous secondary index queries, an
ORDER BY clause, but not both.
Must use only supported aggregation functions.
Can have multiple aggregations per group.
Supported aggregations
You can use the following aggregation functions in a SQL query that defines a
continuous materialized view:
COUNT
SUM
MIN
MAX
HLL_COUNT.INIT
HLL_COUNT.MERGE
HLL_COUNT.MERGE_PARTIAL
ANY_VALUE
BIT_AND
BIT_OR
BIT_XOR
AVG
If you SELECT COUNT(*) you must define a row key, like in the following
example:
SELECT
'*' AS _key ,
COUNT ( * ) AS count
FROM
foo
GROUP BY
_key ;
Unsupported SQL features
You can't use the following SQL features:
Any feature not supported by
GoogleSQL for Bigtable
ARRAY
ARRAY_AGG
ARRAY_CONCAT_AGG
COUNT_IF
CURRENT_TIME and other non-deterministic functions
DATE , DATETIME as output columns (Use TIMESTAMP or store a string.)
DESC sort in the output
DISTINCT option, as in SUM(*DISTINCT* value) )
LIMIT/OFFSET
SELECT *
OVER clause to create a windowing aggregation
STRUCT
You also can't nest GROUP BY or ORDER BY clauses or create map columns. For additional
limitations, see
Limitations .
Avoiding excluded rows
Input rows are excluded from a continuous materialized view in the following
circumstances:
More than 1 MiB of data is selected from the row. For example, if your
query is SELECT apple AS apples , SUM(banana) AS sum_bananas FROM my_table
GROUP BY apples , then any row that contains more than 1MiB of data in the
apple and banana columns is excluded from the continuous materialized
view.
More than 1 MiB of data is output from the row. This might occur when
you use queries such as SELECT REPEAT(apple, 1000) or use large constants.
More than 10 times more data is output than was selected.
The query doesn't match your data. This would include attempting to
divide a zero, integer overflow, or expecting a row key format that isn't
used in every row key.
Excluded rows increment the user errors metric when they are first processed.
For more information about metrics that can help you monitor your continuous
materialized views, see
Metrics .
Query details
This section describes a continuous materialized view query and how the results
might look when the view is queried. Data in the source table is the
input , and the result data in the continuous materialized view is the
output . Output data is either aggregated or unaggregated (in the defined key).
SELECT statement
The select statement configures the columns and aggregations used in the
continuous materialized view. The statement must use either a GROUP BY clause
to aggregate across rows or an ORDER BY clause to create an asynchronous secondary
index.
SELECT * is not supported, but SELECT COUNT(*) is.
As in a typical SELECT statement, you can have multiple aggregations per a
grouped set of data. The ungrouped columns must be an aggregation result.
This is an example of a standard GROUP BY aggregation query in SQL:
SELECT
myfamily [ "node" ] AS node ,
myfamily [ "type" ] AS type ,
COUNT ( clicks ) AS clicks_per_key
FROM
mytable
GROUP BY
node ,
type
Row keys and unaggregated data
You can specify a _key as the row key for a continuous materialized
view. If you don't, columns in the GROUP BY clause form the key in the
view.
Row keys defined by a _key column
You can optionally specify a _key column when you define your
continuous materialized view. (This is different from the _key
column that you get when
you execute a SQL query on a Bigtable table.) If you specify a
_key , the following rules apply:
You must group by _key , and you can't group by anything else except
(optionally) by _timestamp . For more information, see
Timestamps .
The _key column must be of type BYTES .
Specifying a _key is useful if you plan to read the view with ReadRows
rather than with SQL, because it gives you control over the row key format. On
the other hand, a SQL query to a view with a defined _key might need to decode
the _key explicitly instead of just returning structured key columns.
Row keys defined by GROUP BY or ORDER BY clause
If you don't specify a _key , the unaggregated columns in your SELECT list
become the row key in the view. You can assign the key columns any names
supported by SQL conventions. Use this approach if you plan to use SQL to query
the view rather than a ReadRows request.
Unaggregated output columns in the SELECT list must be included in the GROUP
BY clause. The order in which columns are written in the GROUP BY clause is
the order in which the data is stored in the continuous materialized view row
key. For example, GROUP BY a, b, c is implicitly ORDER BY a ASC, b ASC, c
ASC .
If you use an ORDER BY clause instead of a GROUP BY clause to create an
asynchronous secondary index, the columns in your SELECT list that are part of the
ORDER BY clause become the row key in the view. The order in which columns
are written in the ORDER BY clause is the order in which the data is stored
in the continuous materialized view row key. For example, ORDER BY a, b, c
stores the data with row keys ordered by a ASC , then b ASC , then c ASC .
Important: The columns that form the row key in a continuous materialized view
must not be NULL. A NULL value in a key column causes the data in the
corresponding row in the source table to be excluded from the view.
Your SQL filter must eliminate potential NULL or other invalid values that can
cause errors. An invalid row, such as one containing a NULL key column, is
omitted from the results and counted in the materialized_view/user_errors
metric. To debug user errors, try running the SQL query outside of a continuous
materialized view.
Aggregated data
Aggregate columns in the query define the calculations that generate the data
in the continuous materialized view.
The alias for an aggregate column is treated as a column qualifier in the
continuous materialized view.
Consider the following example:
SELECT
fam [ "baz" ] AS baz ,
SUM ( fam [ "foo" ] ) AS sum_foo ,
SUM ( fam [ "bar" ] ) AS sum_bar
FROM
TABLE
GROUP BY
baz ;
The query output has the following characteristics:
Output for each baz is in a separate row in baz ASC order.
If a given baz has at least one foo , then the output row's sum_foo is
a non-NULL value.
If a given baz has at least one bar , then the output row's sum_bar is
a non-NULL value.
If a given baz has no value for either column, it's omitted from the
results.
Then if you query the view with SELECT * , the result looks similar to the
following:
baz
sum_foo
sum_bar
baz1
sum_foo1
sum_bar1
baz2
sum_foo2
sum_bar2
Timestamps
The default timestamp for an output cell in a continuous materialized view is
0 ( 1970-01-01 00:00:00Z ). This is visible when you read the view with
ReadRows and not when you query it with SQL.
To use a different timestamp in the output, you can add a column of the
TIMESTAMP type to the SELECT list of the query and name it _timestamp .
If you query the continuous materialized view using ReadRows ,
_timestamp becomes the timestamp for the other cells in the row.
A timestamp must not be NULL , must be greater than or equal to zero, and must
be a multiple of 1,000 (millisecond precision). Bigtable doesn't
support cell timestamps earlier than the Unix epoch (1970-01-01T00:00:00Z).
Consider the following example, which resamples aggregate data by day. The query
uses the UNPACK function.
SELECT
_key ,
TIMESTAMP_TRUNC ( _timestamp , DAY ) AS _timestamp ,
SUM ( sum_family [ "sum_column" ] ) AS sum_column ,
SUM ( sum_family [ "foo" ] ) AS second_sum_column
FROM
UNPACK (
SELECT
*
FROM
my_table ( with_history = > TRUE ))
GROUP BY
1 ,
2
If a given SUM has non-empty input for a given day, then the output row
contains an aggregated value with a timestamp that matches the truncated day.
If you query the view with SELECT * , the result looks similar to the
following:
_key
_timestamp
sum_column
second_sum_column
1
2024-05-01 00:00:00Z
23
99
2
2024-05-02 00:00:00Z
45
201
3
2024-05-03 00:00:00Z
NULL
56
4
2024-05-04 00:00:00Z
8
NULL
Encoding
If you query your continuous materialized view with SQL, you don't need to be
aware of how aggregated values are encoded because SQL exposes the results as
typed columns.
If you read from the view using ReadRows , you need to decode the aggregated
data in your read request. For more information on ReadRows requests, see
Reads .
Aggregated values in a continuous materialized view are stored using encoding
described in the following table, based on the output type of the column from
the view definition.
Type
Encoding
BOOL
1 byte value, 1 = true, 0 = false
BYTES
No encoding
INT64 (or INT, SMALLINT, INTEGER, BIGINT, TINYINT, BYTEINT)
64-bit big-endian
FLOAT64
64-bit IEEE 754, excluding NaN and +/-inf
STRING
UTF-8
TIME/TIMESTAMP
64-bit integer representing the number of microseconds since the Unix
epoch (consistent with GoogleSQL)
For more information, see
Encoding in the Data API reference.
What's next
Create and manage continuous materialized
views
GoogleSQL for Bigtable reference
documentation
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
