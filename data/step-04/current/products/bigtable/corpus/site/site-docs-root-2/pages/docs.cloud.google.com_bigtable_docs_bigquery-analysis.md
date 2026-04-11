---
title: "Query and analyze Bigtable data with BigQuery \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/bigtable/docs/bigquery-analysis
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/bigtable/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/bigtable/docs/bigquery-analysis
  title: "Query and analyze Bigtable data with BigQuery \_|\_ Google Cloud Documentation"
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
Query and analyze Bigtable data with
BigQuery
BigQuery is a managed data warehouse that can help you query and
analyze your Bigtable data using SQL queries.
BigQuery is useful for data analysts, data engineers, data
scientists, or anyone who wants to use Bigtable data to answer
business questions.
BigQuery lets you query your Bigtable data
from BigQuery. This feature is helpful when you want to join your
Bigtable data to BigQuery tables.
This document provides an overview of querying Bigtable data with
BigQuery. Before you read this page you should be familiar with
the
Bigtable overview
and
BigQuery overview
Using BigQuery to query a Bigtable table is ideal
for tables that have the same column families and column qualifiers in every
row.
Note: If you want to export from BigQuery to
Bigtable, you can set up a reverse extract-load-transform (ETL).
For details, see Export data to Bigtable (Reverse
ETL) in the BigQuery
documentation.
External table creation
Before you can query your Bigtable data, you or an
administrator in your organization must create an
external table , which is a BigQuery table containing metadata
pointers to your Bigtable table that you send your queries to. For
more information about external tables, see Introduction to external data
sources .
You must create the external table in the same region as the
Bigtable table. This means, for example, that if the table is in
an instance that has clusters in europe-central2-a (Warsaw), europe-west1-c
(Belgium), and asia-east1-a (Tokyo), then you must create the external table
in Warsaw, Belgium, or Tokyo.
Recommended configurations
We recommend the following best practices when you create your external table:
To avoid impacting your application-serving traffic, use Data Boost
serverless compute when you read Bigtable data with
BigQuery external tables. Using Data Boost is especially
cost-effective for ad hoc queries. To use Data Boost, specify
Data Boost app profile when you create the external table definition.
For more information about Data Boost, see Bigtable
Data Boost overview .
For most cases, when you create an external table, set readRowkeyAsString
and ignoreUnspecifiedColumnFamilies to true.
When ignoreUnspecifiedColumnFamilies is true, when you create a table
definition that includes only some columns in a column family, only the
selected columns are promoted as columns in the external table. Data in the
unselected columns is grouped under a general column column.
To create your external table, follow the instructions at
Create a Bigtable external table .
Query data in the external table
After you have an external table for your Bigtable table, you
can send SQL queries to it using one of the following methods:
At the command line using
bq , the BigQuery CLI
Calls to the
BigQuery API
Any of the
BigQuery client libraries
To learn how to compose and run a query, see
Run a query .
For Bigtable-specific instructions including required permissions
and code samples, see
Query Bigtable data .
Scheduled queries
Scheduled queries are useful when you want to import Bigtable
data into BigQuery on a recurring basis. They are also helpful
for use cases that might otherwise require you to build a data pipeline and
stream the data to BigQuery. For instructions on managing
scheduled queries, see
Scheduling queries .
Full table scans
If you use Data Boost to read your data, you don't need to avoid scanning
the entire table. If you use provisioned nodes for compute, however, you do.
Similar to when you send read requests directly to your Bigtable
table, when you query the external table for the table and you're not using
Data Boost, you generally want to avoid full table scans. Full table scans
increase CPU utilization and take considerably longer than selective queries.
They also require more BigQuery throughput.
If your query involves all rows, it triggers a full table scan. On the other
hand, if you limit the query and request a range of rows or specified
non-contiguous rows, then the entire table is not scanned. Examples in
GoogleSQL syntax of limiting the query include the following:
WHERE rowkey = "abc123"
WHERE rowkey BETWEEN "abc123" PRECEDING AND "abc999" FOLLOWING
WHERE rowkey > 999999 (if you read the row key as a string)
Joins
If you plan to use a join to analyze your Bigtable table data in
conjunction with data from another source, you should create a subquery that
extracts the relevant fields from Bigtable for the planned join.
For more best practices when joining tables, see
Optimize query computation .
Costs
When you create an external table and query it, you are charged for
BigQuery costs and for an increase in the number of
Bigtable nodes that are required to handle the traffic. Because
your external table is in the same region as your Bigtable table,
no network costs are incurred.
If you tend to run your queries during regular business hours, consider
enabling Bigtable autoscaling so that the number of nodes
increases when needed and then decreases when the jobs are complete. Autoscaling
is also an effective tactic if you run scheduled queries that don't have firm
deadlines.
Another way to limit costs is to
avoid a full table scan .
For more information on cost optimization for BigQuery, see
Estimate and control costs .
Limitations
The following limitation applies:
Query results that contain serialized data that has nested types, such
as protocol buffer (protobufs) and Avro formats, might render incorrectly
or be difficult to read in the Google Cloud console.
What's next
Learn the difference between external tables and federated queries.
Create a Bigtable external table.
Query Bigtable data stored in an external table.
Export data from BigQuery to Bigtable.
Build a real-time analytics database with Bigtable and
BigQuery
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
