---
title: "Query execution operators \_|\_ Spanner \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/spanner/docs/query-execution-operators
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/spanner/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/spanner/docs/query-execution-operators
  title: "Query execution operators \_|\_ Spanner \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
Spanner
Reference
Send feedback
Query execution operators
Stay organized with collections
Save and categorize content based on your preferences.
This page describes the operators used in Spanner
query execution plans . For information about how to retrieve an execution
plan for a specific query using the Google Cloud console, see
Understanding how Spanner executes queries .
Execution plans support GoogleSQL-dialect databases and PostgreSQL-dialect databases.
PostgreSQL interface note:
The examples in this topic are intended for GoogleSQL-dialect databases.
Mapping SQL constructs to query execution operators
The exact mapping between SQL constructs and query execution operators depends
on the query optimization. The following table shows some common mappings:
SQL
Query execution operator
Table reference
Table Scan, Index Scan
WHERE
Filter Scan , Filter
GROUP BY
Aggregate
Scalar function (such as ISNULL )
Compute
Aggregate function (such as SUM )
Aggregate
JOIN
Any join operator; see Joins
Subquery
Scalar or Array subquery
LIMIT
Limit , Sort Limit
ORDER BY
Sort, Sort Limit
Query execution operators
This section lists all query execution operators that can make up a query
execution plan in Spanner.
Leaf operators
Operators that have no children.
Name
Summary
Array unnest
Flattens an input array into rows of elements.
Generate relation
Returns zero or more rows.
Unit relation
Returns one row.
Empty relation
Returns no rows.
Scan
Scans a source of rows and returns them.
Filter scan
Works with the scan to reduce the number of rows read from the database.
Unary operators
Operators that have a single relational child.
Name
Summary
Aggregate
Implements GROUP BY SQL statements and aggregate functions.
Apply mutations
Applies the mutations from a Data Manipulation Language (DML) statement to the table.
Create batch
Batches its input rows into a sequence.
Compute
Produces output by reading its input rows and adding one or more additional columns that are computed using scalar expressions.
Compute struct
Creates a variable for a structure that contains fields for each of the input columns.
DataBlockToRowAdapter
Adapts a batch-oriented execution method to a row-oriented execution method.
Filter
Reads all rows from its input, applies a scalar predicate on each row, and then returns only the rows that satisfy the predicate.
Limit
Constrains the number of rows returned.
Local split union
Finds table splits stored on the local server, runs a subquery on each split, and then creates a union that combines all results.
Random ID assign
Produces output by reading its input rows and adding a random number to each row.
RowToDataBlockAdapter
Adapts a row-oriented execution method to a batch-oriented execution method.
Serialize result
Serializes each row of the final result of the query for returning to the client.
Sort
Reads its input rows, orders them by column(s), and then returns the sorted results.
Table-valued function (TVF)
Produces output by reading its input rows and applying the specified function.
Union input
Returns results to a union all operator.
Binary operators
Operators that have two relational children.
Name
Summary
Apply join
Applies each row on the input side to the map side using an apply method.
Hash join
Reads rows from input marked as build and inserts them into a hash table based on a join condition.
Merge join
Consumes both input streams concurrently and outputs rows when the join condition is satisfied.
Recursive union
Performs a union of two inputs, one that represents a base case, and the other that represents a recursive case.
N-ary operators
Operators that have more than two relational children.
Name
Summary
Union all
Combines all row sets of its children without removing duplicates.
Distributed operators
Operators that execute across multiple servers.
Name
Summary
Distributed union
Conceptually divides one or more tables into multiple splits, remotely evaluates a subquery independently on each split, and then unions all results.
Distributed apply
Extends the apply join operator by executing across multiple servers.
Distributed merge union
Distributes a query across multiple remote servers and then combines the query results to produce a sorted result.
Push broadcast hash join
Implements SQL joins using a distributed hash join.
Scalar subqueries
SQL sub-expressions that return a single scalar value.
Name
Summary
Scalar subqueries
SQL sub-expressions that return a single scalar value.
Array subqueries
SQL sub-expressions that return an array.
Name
Summary
Array subqueries
SQL sub-expressions that return an array.
Struct constructor
An operator that creates a struct (a collection of fields) for rows resulting from a compute operation.
Name
Summary
Struct constructor
An operator that creates a struct (a collection of fields) for rows resulting from a compute operation.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
