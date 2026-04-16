---
title: "Bigtable Data Boost overview \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/bigtable/docs/data-boost-overview
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/bigtable/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/bigtable/docs/data-boost-overview
  title: "Bigtable Data Boost overview \_|\_ Google Cloud Documentation"
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
Bigtable Data Boost overview
Data Boost is a serverless compute service designed to run high-throughput
read jobs on your Bigtable data without impacting the performance of the
clusters that handle your application traffic. It lets you send large read jobs and
queries using serverless compute while your core application continues using
cluster nodes for compute. Serverless compute SKUs and billing rates are
separate from the SKUs and rates for provisioned nodes. You can't send write or
delete requests with Data Boost.
This document describes Data Boost and when and how to use
it. Before you read this page, you should understand Instances, clusters, and
nodes .
Note: Data Boost is not a covered service as defined in the
Bigtable SLA .
What it's good for
Data Boost is ideal for data analysis and data processing workloads .
Isolating your analytics and processing traffic with Data Boost ensures that
you don't need to adjust a cluster's capacity or node count to accommodate
analytics workloads. You can run your high-throughput analytics jobs on a
single cluster with Data Boost while your ongoing application traffic is
routed through cluster nodes.
The following are ideal use cases for Data Boost:
Scheduled or triggered export or ETL pipeline jobs from
Bigtable to Cloud Storage for data enrichment, analysis,
archiving, offline ML model training, or ingestion by your customers'
third-party partners
ETL using a tool such as Dataflow for short scan
or batch read processes that support in-place aggregations, rule-based
transformations for MDM, or ML jobs
Spark applications that use the Bigtable Spark connector to
read Bigtable data
Ad hoc queries and scheduled analytics jobs that use BigQuery
external tables to read Bigtable data.
What it's not good for
Point reads - Data Boost is not the best option for point read
operations, which are read requests sent for single rows. This includes
batched point reads. Because of the billing structure, many single-row point
reads are considerably more expensive than one long scan.
Reading data immediately after it's written - When you read data with
Data Boost, you might not read all data that was written in the most recent
35 minutes. This is especially true if your instance uses replication and you are
reading data that was written to a cluster in a different region than you are
reading from. For more information, see
Consistency tokens .
Latency-sensitive workloads - Data Boost is optimized for throughput,
so read latency is slower when you use Data Boost than when you read using
clusters and nodes. For this reason, Data Boost is not suitable for
application serving workloads.
For more information on workloads, configurations, and features that are
not compatible with Data Boost, see Limitations .
Data Boost app profiles
To use Data Boost, you send your read requests using a Data Boost app
profile instead of a standard app profile .
Standard app profiles let you specify the
routing policy
and
priority level
for requests that use the app profile, as well as whether single-row
transactions are permitted. Traffic sent using a standard app profile is routed
to a cluster, and that cluster's nodes route the traffic to disk. For more
information, see
Standard app profiles overview .
With a Data Boost app profile, on the other hand, you configure a
single-cluster routing policy to one of your instance's clusters, and traffic
using that app profile uses serverless compute instead of the cluster's nodes.
You can create a new Data Boost app profile, or you can convert a standard
app profile to use Data Boost instead. We recommend using a
separate app profile for each workload or application .
Consistency tokens
Data that was written or replicated to your target cluster more than 35 minutes
before your read request is readable by Data Boost.
Important: Data Boost provides no guarantee for the readability of data that was
written less than 35 minutes ago.
You can make sure that the data from a specific write job or time period is
readable by Data Boost, before you initiate a Data Boost
workload, by creating and using a
consistency token . A sample workflow is as follows:
Write some data to a table.
Create a consistency token.
Send the token in DataBoostReadLocalWrites mode to determine when
the writes are readable by Data Boost on your target cluster.
You can optionally check replication consistency before you check Data Boost
consistency by first sending a consistency token in StandardReadRemoteWrites mode.
For more information, see the API reference for
CheckConsistencyRequest .
Quota and billing
Data Boost usage is measured in serverless processing units (SPUs), and
1,000 SPUs = one node in performance. Unlike
with provisioned nodes, you are charged for SPUs only when you use
Data Boost. Each request is billed for a minimum of 60 SPU-seconds, and you
are charged at least 10 SPUs per second. For more information on Data Boost
pricing, see Bigtable
pricing .
You are allocated quota and billed for SPUs separately from the quota and
charges for nodes.
Eligibility metrics
Data Boost is designed for high-throughput scans, and workloads must be
compatible to be able to use Data Boost. Before you convert a standard app
profile to use Data Boost or create a Data Boost app profile for an
existing workload, view Data Boost
eligibility metrics to make sure your
configuration and usage meet the required criteria. You should also review the
limitations .
Monitoring
To monitor your Data Boost traffic, you can check the metrics for your
Data Boost app profile on the Bigtable system insights page in the
Google Cloud console. For a list of metrics available by app profile, see
System insights charts for Bigtable resources .
You can monitor your usage of serverless processing units (SPUs), by checking
the SPU usage count ( data_boost/spu_usage_count ) metric on the App profile
tab on the Bigtable system insights page.
You can also continue to monitor the eligibility
metrics
for the app profile after you've started using Data Boost.
Limitations
The following workload properties and resource configurations are not supported
for Data Boost.
Writes and deletes
Traffic that is mostly point reads (single-row reads)
More than 1,000 reads per second per cluster
Reverse scans
Change streams
Request priorities
Multi-cluster routing
Single-row transactions
Regional endpoints
HDD instances
GoogleSQL for Bigtable queries
Bigtable Studio query builder queries
Instances that use CMEK encryption
Incompatible client libraries. You must use the
Bigtable client for Java
version 2.31.0 or later.
For Dataflow jobs using BigtableIO to read Bigtable data, you must use Apache Beam version 2.54.0 or later.
For Dataflow jobs using CloudBigtableIO to read Bigtable data, you must use bigtable-hbase-beam version 2.14.1 or later.
What's next
Create or update an app profile.
Learn about the Bigtable Beam connector.
Use the Bigtable Spark connector.
Query and analyze Bigtable data
with BigQuery.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
