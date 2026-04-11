---
title: "Aggregating values at write time \_|\_ Bigtable \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/bigtable/docs/aggregates
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/bigtable/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/bigtable/docs/aggregates
  title: "Aggregating values at write time \_|\_ Bigtable \_|\_ Google Cloud Documentation"
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
Aggregating values at write time
This document provides an overview of the ways that you can aggregate your
Bigtable data at write time. Before you read this document, make
sure that you're familiar with the Bigtable
overview .
Many applications track operational metrics that drive use cases
including in-app reporting, real-time recommendations, and rate limiting.
Examples of such operational metrics include the following:
Weekly active users
Number of ad impressions
Views or shares of social content
Number of media streams
You can use these metrics in user-facing applications or as inputs to machine
learning models, and their uses typically require low latency and high
throughput. Because computing these types of metrics at query time is
impractical at scale, pre-aggregation during data ingestion is the preferred
approach for real-time systems.
Bigtable offers multiple ways of aggregating data at write time,
including conflict-free replicated data types, ReadModifyWriteRow requests,
and continuous materialized views.
Aggregating your Bigtable data at write time lets you avoid the
need to use any extract, transform, and load (ETL) or streaming processing
software to aggregate your data before or after you write it to
Bigtable. For example, if your application published messages to
Pub/Sub previously and then used Dataflow to read the messages
and aggregate the data before writing it to Bigtable, you can
instead send the data directly to aggregate cells in Bigtable.
Conflict-free replicated data types
Bigtable lets you create column families that contain only cells
of type aggregate . Aggregate cells are conflict-free replicated data
type
structures that are optimized for incremental updates.
If you're migrating to Bigtable from databases such as Apache
Cassandra, Redis, or Valkey, similar structures in those systems are referred to
as counters .
The following table lists the supported operations and how newly written values
are handled.
Operation
Description
Sum
The cell value is replaced with the sum of the newly added value
and the current cell value.
Minimum
The cell value is replaced with the lower value between the
newly added value and the current cell value.
Maximum
The cell value is replaced with the higher value between the
newly added value and the current cell value.
HyperLogLog
The written value is added to a probabilistic set of all values
added since the most recent reset. The cell value represents the
state of that set. For more general information about the HLL
algorithm, see HyperLogLog .
You can read HLL values using the Zetasketch
Library .
The mutation types that you can send to create and update aggregate cells are
AddToCell
and
MergeToCell .
To get started with counting in Bigtable, see the
Create and update counters in
Bigtable quickstart.
Read then write
Another way to aggregate your data at write time is by using a
ReadModifyWriteRow
request, which lets you manipulate the value of a cell by incrementing or
appending to the value transactionally. For more information about when to use
this approach, see
Appends .
Continuous materialized views
A continuous materialized view is a pre-computed result of a SQL query that
aggregates data in a source table. The view continuously processes data as it's
ingested into the source table and batches the updates. This includes updates
and deletes. Using continuous materialized views can increase performance and
efficiency. For more information, see Continuous materialized
views .
What's next
See code samples showing how to add a value to an aggregate
cell .
Review concepts related to schema design.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
