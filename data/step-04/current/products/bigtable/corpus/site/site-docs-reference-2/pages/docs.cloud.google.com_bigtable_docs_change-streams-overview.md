---
title: "Change streams overview \_|\_ Bigtable \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/bigtable/docs/change-streams-overview
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/bigtable/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/bigtable/docs/change-streams-overview
  title: "Change streams overview \_|\_ Bigtable \_|\_ Google Cloud Documentation"
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
Change streams overview
Bigtable provides change data capture (CDC) with its change streams
feature. A change stream captures data changes to a Bigtable table
as the changes happen, letting you stream them for processing
or analysis.
This document provides an overview of Bigtable change streams.
Before you read this document, you should be familiar with the
Bigtable overview .
Change streams are valuable for CDC use cases including the following:
Triggering downstream application logic when specified changes occur
Integrating with a data analytics pipeline
Supporting audit and archival requirements
What a change stream is
A change stream tracks changes at the table level that are made by a user or
application, usually using one of the Cloud Bigtable client libraries.
Garbage collection changes are also captured.
All changes applied to a change stream-enabled table are stored as data change
records . Data change records include data changes applied by the following:
Writes, deletions, and updates that are sent using the Cloud Bigtable API methods
MutateRow , MutateRows , CheckAndMutateRow , and ReadModifyWriteRow
Deletions that take place due to garbage collection
Rows deleted using Admin API's DropRowRange method
For details about the types of changes that you can send to a
Bigtable table, see
Reads ,
Writes ,
Deletes ,
and
Garbage collection overview .
Change streams don't track schema changes, such as adding or modifying a
column family, or replication topology, like adding or removing a cluster.
Data change records for each row key and each cluster are in commit timestamp
order. However, there is no ordering guarantee on data change records for a
different row key or cluster.
You enable change streams on a table and specify a retention period of 1 to 7
days.
Note: In the Cloud Bigtable API (Data API), changes sent to a table are
called mutations .
What's in a data change record
Each data change record contains all changes for a row that were applied
atomically as part of a single RPC call.
If a value is overwritten, the newly written value is recorded in the data
change record. The data change record does not contain the old value .
A data change record receives its timestamp, called a commit timestamp , at the
same time that the change is applied to the first cluster that receives it. For
example, consider an instance with two clusters. If you send a write request to
Table 1 on Cluster A, the data change record commit timestamp is assigned when
the write is received by Cluster A, and the data change record on Cluster B for
this write has the same commit timestamp.
Each data change record contains the following:
Entries - changes made to the row, including one or more of the following:
Write
Column family
Column qualifier
Timestamp
Value
Deletion of cells
Column family
Column qualifier
Timestamp range
Deletion of a column family
Column family
Deletion from a row - Deletion from a row is converted to a list
of deletions from column families for each column family that the
row has data in.
Row key - the identifier for the changed row
Change type - either user-initiated or garbage collection
ID of the cluster that received the change
Commit timestamp - server-side time when the change was committed to the
table
Tie breaker - a value that lets the application that is reading the stream
use Bigtable's built-in conflict resolution
policy
Token - used by the consuming application to resume the stream if it's
interrupted
Estimated low watermark - the estimated time since the record's partition
caught up with replication across all clusters. For details, see
Partitions
and Watermarks .
For more information about the fields in a data change record, see the API
reference for
DataChange .
Change stream storage
A table and its change stream share the same cluster-level resources, including
nodes and storage. As a result, change stream data storage is part of a table's
storage. In an instance that uses replication, a copy of a change stream's data
is stored in every cluster of the instance that contains the change
stream-enabled table.
The storage used for your change stream data doesn't count toward your total
storage utilization (% max). As a result, you don't need to add nodes to handle
the increased storage that change stream data consumes (although you might need
to add nodes for additional compute power). However, you are charged for the
storage that your change stream data consumes. For details, see
Cost considerations .
Reading a change stream
To read (stream) a change stream, you must use an application profile configured for
single-cluster routing , and if you stream using Dataflow, you must enable single-row transactions.
For more information about routing policies, see
Routing options .
For more information about single-row transactions, see Single-row transactions .
Change stream methods are provided by the Cloud Bigtable API (Data API).
We recommend that you use one of the following options instead of calling the API without using a client library or connector:
Dataflow templates
Bigtable Beam connector
Java client library
All the options let you avoid the need to track and handle partition changes due to splits and merges.
For more information, see
ReadChangeStream .
Dataflow templates
You can use one of the following Dataflow templates provided by Google:
Bigtable change streams to BigQuery
Bigtable change streams to Pub/Sub
Bigtable Beam connector
You can use the Bigtable Beam connector to build a pipeline:
Bigtable Beam connector
If you don't want to build your own pipeline, you can use the code samples from
the Bigtable tutorial or quickstart as a starting point for your
code:
Create a change stream-enabled table and capture changes
Process a Bigtable change stream
Java client library
Cloud Bigtable client for Java
Partitions
To maintain a high read throughput that matches a high write or change rate,
Bigtable divides a change stream into multiple partitions that
can be used to read the change stream in parallel. Each change stream partition
is associated with a tablet . Tablets are subsections of a table that are
redistributed as needed to help balance the table's request workload. To learn
more, see
Load balancing .
Note: You are not able to configure or monitor change stream partitions or
tablets, but you need to understand them to read a change stream using the Java
client library.
The Java client library lets you query each partition for changes and provides
the information required to manage changes in partitions due
to splits and merges .
Watermarks
A watermark is a timestamp that estimates how recently a partition has caught
up with replication across all clusters. The watermark for the partition is
continuously updated as replication occurs, advancing forward in time.
Each ChangeStreamMutation (data change record) includes an
estimatedLowWatermark field, which is the watermark for the partition that is
associated with the data change record. This estimatedLowWatermark is an
estimate and doesn't guarantee that there isn't data that has yet to arrive on
the stream.
Watermarks for replicated tables
A partition's estimatedLowWatermark (low watermark) doesn't advance if
replication isn't fully caught up for the partition. The stream-wide low
watermark — the lowest of all partition-level estimated low watermarks
— stops advancing if any partition's watermark is not moving forward. A
watermark that has stopped advancing is considered to be stalled . When this
occurs, if you are streaming your change stream in a pipeline, the pipeline
stalls.
Many factors can cause one or more partition-level watermarks to stall for some
amount of time, including the following:
Overloading a cluster with traffic that causes replication to fall
behind for one or more partitions
Network delays
Cluster unavailability
The Bigtable Beam connector handles this by setting the
output timestamp to zero for all data. For more information see
Grouping data without event times .
Monitoring
To help you understand how enabling a change stream affects CPU and storage
utilization for an instance that contains change stream-enabled tables, we
provide two change stream-specific metrics. You can view the metrics on the
Bigtable system insights page or by using the Cloud Monitoring suite
of tools.
Bytes used by the change stream records ( change_stream_log_used_bytes )
CPU utilization by change streams ( uses
cpu_load_by_app_profile_by_method_by_table )
For details on these metrics, see
Monitoring .
Cost considerations
Enabling a change stream on a table results in increased costs for nodes and
storage. In particular, you can expect to incur more storage
costs .
Nodes
You usually need to add nodes to a cluster (or increase the maximum number of
nodes if you use autoscaling) to handle the additional traffic of enabling and
processing the data change records.
Enabling a change stream can increase CPU usage by around 10%, even
before you start processing it. Processing a change stream, such as reading it
using a Dataflow pipeline, can increase CPU utilization by around
20 to 30%, depending on the level of change activity and how the stream data
is read.
Storage
You are charged the standard
Bigtable storage rates
to store your table's data change records. You are also charged to store the
table that is created to track change stream metadata. The retention period that
you specify directly affects storage costs.
As a general rule, a day's worth of data change records – reflecting only the
mutations that occurred that day – takes up about 1.5 times as much storage as
the data that was written that day consumes on disk.
Network data transfer
If you read a change stream across regions, you can incur costs for that
traffic. See the Network section on
Bigtable pricing
for a complete list of network data transfer rates.
Processing costs
Depending on how you read the data change records, additional costs for
services other than Bigtable apply. For example, if you use
Dataflow, you pay for the bytes that are processed and the worker
machines that process the job. For details, see
Dataflow pricing .
Dropping row ranges
If possible, avoid dropping a row
range
from a table that has a change stream enabled. If you must drop a row range, be
aware that it might take a long time for Bigtable to complete the
operation, and CPU usage increases during the operation.
What's next
Complete a quickstart to learn how to enable a change stream and view changes.
Configure change streams.
Use the Bigtable Beam connector to read a change stream with
Dataflow.
Use the Cloud Bigtable client library for Java to read change streams.
Work through a tutorial about processing a change stream.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
