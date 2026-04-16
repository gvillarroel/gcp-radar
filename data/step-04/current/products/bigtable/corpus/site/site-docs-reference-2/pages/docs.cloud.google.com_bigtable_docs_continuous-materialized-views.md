---
title: "Continuous materialized views \_|\_ Bigtable \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/bigtable/docs/continuous-materialized-views
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/bigtable/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/bigtable/docs/continuous-materialized-views
  title: "Continuous materialized views \_|\_ Bigtable \_|\_ Google Cloud Documentation"
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
Continuous materialized views
Preview
This product or feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section
of the Service Specific
Terms .
Pre-GA products and features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
This document provides an overview of continuous materialized views and common
use cases for them. Before you read this page, you should be familiar with the
Bigtable
overview .
In Bigtable, a continuous materialized view is the result of a
continuous, fully-managed background process. This process uses a SQL query that
you provide to create and maintain a precomputed table that
Bigtable updates incrementally as the source data changes. The SQL
query can include aggregations and transformations on the underlying
Bigtable table.
Data in a continuous materialized view includes the following:
Aggregated or transformed values that are derived from data in the
source table
Unaggregated values that define the grouping key
Continuous materialized views let you pre-aggregate your data as you ingest it.
Additionally, a continuous materialized view has a different schema than its
source table, presenting the source-table data in a structure that is optimized
for queries with different lookup patterns than queries used on the source
table.
The following are key characteristics of continuous materialized views in
Bigtable:
Zero maintenance : A continuous materialized view is precomputed in the
background. Data changes to the source table, including updates and deletes,
are automatically propagated in the background to the continuous
materialized view, with no user action required.
SQL development patterns : Continuous materialized views are based on
GoogleSQL for Bigtable queries, including SQL
functions, filters, and aggregations.
Synchronization with garbage collection : A continuous materialized view
stays in sync with the garbage collection policies of its source table,
automatically updating as table data expires or is deleted.
Read and write latency are unaffected : A continuous materialized view
has minimal impact on performance on the source table when the instance's
clusters are adequately provisioned or use autoscaling.
Eventually consistent: Continuous materialized views are computed in the
background. Updates to a continuous materialized view might be delayed, but
the continuous materialized results are always consistent over time.
The row key, column qualifier, and column values that you use to define a
continuous materialized view are treated as service data. For this reason, don't
create a continuous materialized view using row key, column qualifier, or
column values that contain sensitive
information . For information about how
service data is handled, see the Google Cloud Privacy
Notice .
You can create a continuous materialized view using the Google Cloud CLI, the
Bigtable Studio query editor in the Google Cloud console, or the
Bigtable client libraries for Java and Go.
You can read from a continuous materialized view by using the following:
Bigtable Studio query editor
The Bigtable client libraries that support SQL
queries
ReadRows API call using the Bigtable client libraries for
Java and Go
For more information, see Reading from a continuous materialized
view .
When to use continuous materialized views
Continuous materialized views let you define a new representation of your
Bigtable data using SQL. After it's been created, a continuous materialized
view continually and automatically restructures data from the source table into
the format defined by the SQL query. Then, instead of querying your table and
transforming or aggregating the data after you read it, you can query the
continuous materialized view.
Continuous materialized views can improve query performance for the following
use cases:
Data pre-aggregation : You can use a continuous materialized view to aggregate
incoming data across rows. This lets you retrieve summarized and aggregated
data, such as metrics for dashboards, quickly.
Automation of lambda and kappa architectures : If your application
requires a mix of real-time streaming pipeline data and batch pipeline data
that contains historical data, then use continuous materialized views. These
views provide a view of all data sources that is updated over time to
reflect changes in the underlying data, without the need for additional
stream processing tools or custom ETL jobs.
Secondary access patterns : Continuous materialized views create an
alternative representation of your data. This representation can be
optimized for queries with different lookup patterns than those that you use
in queries against the source table. This makes continuous materialized
views a powerful tool for creating what's effectively an asynchronous
secondary index on your data. For more information about these patterns, see
Create an asynchronous secondary index .
To compare continuous materialized views with other types of
Bigtable views, see Tables and
views .
When to use counters
Another way to pre-aggregate your data is by creating distributed counters
using aggregate
cells .
Writes to aggregate cells are immediately readable from the cluster it is
written to. Continuous materialized views are processed after data is written
and eventually become consistent with the source table.
Use counters instead of continuous materialized views for the following:
Aggregations that don't require filters and don't need to be across rows
If you need to immediately read your writes from the cluster they are
written to
Use continuous materialized views when you want to do the following:
Generate a different key for queries against your aggregations
See changes to the base table reflected in your aggregations
Automatically combine data across multiple rows
Use a combination of counters and continuous materialized views for use cases
like when you want to do the following:
Capture fresh metrics in an aggregate cell but keep historical rollups of
those metrics
Combine metrics in a continuous materialized view
Resource provisioning and performance
Ongoing processing for continuous materialized views occurs as a low-priority
background job. As a result, it has a minimal impact on application performance
and read and write latency on the source table, provided your clusters are
adequately sized.
As a best practice to make sure the data in the continuous materialized view
remains fresh, enable autoscaling for the clusters
in the instance that contains your continuous materialized view. Autoscaling
automatically adds enough nodes to handle the processing overhead and then
removes them when they're no longer needed. This helps to ensure that enough
compute capacity is available during the execution of the continuously running
SQL query. Autoscaling can also ensure that you have enough nodes to handle your
continuous materialized views' storage needs.
Continuous materialized views count toward the 1,000 tables-per-instance
limit .
Creating continuous materialized views on existing tables
When you create a continuous materialized view for an existing table,
Bigtable starts a one-time process that populates the view with
existing table data. The time this initial population takes depends on the size
of the table and the complexity of the query. During this time, the view is
unavailable for querying. This initial data population runs as a low-priority
background job to minimize the effect on your cluster's performance. For large
tables, you can temporarily add more nodes to your cluster to accelerate view
creation.
The following diagram shows the process of creating continuous materialized
views:
Figure 1. The process of creating continuous materialized
views in Bigtable (click to enlarge).
For example, assume that your source table contains rows with keys that follow
the pattern advertiser_id#region#ad_id and one column family, data , that
includes a spend_usd column qualifier with numeric data representing ad spend:
Row key
data:spend_usd
adv1#us-east#ad1
100
adv1#us-west#ad2
150
adv2#us-east#ad3
200
If you use the following query to define a continuous materialized view of this
table, the initial population of 1 TB of data completes in approximately three
hours on a 175-node cluster.
SELECT
SPLIT ( _key , "#" ) [ SAFE_OFFSET ( 0 ) ] AS advertiser_id ,
count ( * ) AS count ,
sum ( cast ( cast ( data [ 'spend_usd' ] as string ) as int64 )) as sum_spend
FROM `$0`
GROUP BY advertiser_id
Since Bigtable scales linearly, a 175-node cluster processes 2
TB of data in approximately six hours and 10 TB in approximately 30 hours,
assuming that the data has a similar shape. To reduce the time required for
the initial population, you can temporarily
add more nodes to your cluster
or, if you are using autoscaling, temporarily
increase the maximum node count .
Storage
For each continuous materialized view, Bigtable stores the
following:
The data in the continuous materialized view
Intermediate storage
Like any Bigtable table, a continuous materialized view exists on
all clusters in the instance that contains it. The clusters in your instance
must have enough nodes to store the source table and any continuous materialized
views based on the table. Autoscaling lets your clusters scale up or
down in size as storage requirements change.
A continuous materialized view must be created in the same instance as the
source table even though storage for the continuous materialized view is
distinct from the source table.
Continuous materialized view storage
A continuous materialized view contains data resulting from the SQL query the
continuous materialized view is based on. This means that it contains aggregated
values defined by aggregation clauses in the SQL query and unaggregated values
that define the grouping key.
Intermediate storage
To support the synchronization of a continuous materialized view with its source
table, Bigtable uses intermediate storage to store copies of the
data that it needs to incrementally update the continuous materialized view.
The amount of data in intermediate storage is roughly equivalent to the amount
of data that is scanned in the source table to generate the result of the SQL
query that defines the continuous materialized view. For example, if your query
aggregates data across the entire table, Bigtable holds the
equivalent of the entire table in intermediate storage. A continuous
materialized view based on a query of specific row key ranges or columns keeps
only those rows or columns in intermediate storage.
Intermediate storage persists for the life of the continuous materialized view
to efficiently support incremental updates to the view and propagate
deletes from the source table to the continuous materialized view. You can't
read the data in intermediate storage. For insights into your intermediate
storage usage, see Continuous materialized view metrics .
Replication
In instances that use replication, continuous materialized views aren't
replicated in the same way that tables are. Instead, each cluster in an instance
processes the continuous materialized view independently, using its own copy of
the source table. This means, for example, that data that is written to a source
table on cluster A is replicated to the table on cluster B and then to the
continuous materialized view on cluster B.
Costs
There is no per-resource cost for using continuous materialized views. However,
the creation and syncing of continuous materialized views require processing and
storage, and you are charged at the standard rates. You can expect to see
increases in the following when you create a continuous materialized view:
Storage - You are charged to store the data in the continuous
materialized view and for intermediate storage. For more information, see
Storage .
Compute - The ongoing syncing of the source table and the continuous
materialized view requires CPU processing, and your clusters might need more
nodes to handle the additional background work.
At the same time, you might see some processing on the source table decrease,
such as when you are no longer conducting range scans of the data to perform
repeated computations and other less efficient queries. You also might eliminate
the need to run pipeline jobs, such as Dataflow or Spark, to aggregate
source data and write it back to Bigtable.
For more information about pricing, see Bigtable
pricing . For metrics that can help you monitor your
continuous materialized view usage, see Metrics .
Metrics
A continuous materialized view reports several key metrics to Cloud Logging
that you can use to monitor your continuous materialized views.
Metric
Description
materialized_view/max_delay
Upper bound of processing delay for the continuous materialized view
materialized_view/storage
Amount of data used for the continuous materialized view storage in bytes
materialized_view/intermediate_storage
Amount of data used by intermediate processing for the continuous materialized
view in bytes
table/materialized_view_intermediate_storage
Amount of data used by intermediate processing for continuous materialized views
defined on this table
materialized_view/user_errors
Number of errors from user data for the continuous materialized view.
User errors prevent data from propagating to the view.
materialized_view/system_errors
Number of errors from system for the continuous materialized view
You can also use many Bigtable table metrics to monitor a
continuous materialized view, using the continuous materialized view ID in place
of the table ID. In particular, continuous materialized views are included in
the breakdown for CPU metrics , which
can help you understand their impact. Bigtable metrics for
requests per second, latency, and throughput are generated when you read a
continuous materialized view using the Data API's ReadRows method. For more
information, see Metrics .
To get started with Cloud Logging, see
Query and view logs overview .
Limitations
You can create up to five continuous materialized views per table. If
necessary, you can request an increase to this limit by contacting
Cloud Customer Care .
When you create a view without a specified _key , selected columns in the
source table must not be NULL . For more information, see Row keys defined
by GROUP BY
clause .
You can't modify the SQL query that defines a continuous materialized
view. You must delete the continuous materialized view and create a new
one with your changes.
You can't create a continuous materialized view of another continuous
materialized view or of a logical view.
You can't configure garbage collection policies for a continuous
materialized view. All data retention is governed by the garbage collection
policies for the source table and garbage collection of the source is
automatically reflected in the continuous materialized view.
What's next
Continuous materialized view query
Create and manage continuous materialized views
Create an asynchronous secondary index
Schema design best practices
Distributed counting in Bigtable
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
