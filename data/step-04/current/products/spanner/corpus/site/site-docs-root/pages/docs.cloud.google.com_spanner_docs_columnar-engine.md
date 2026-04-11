---
title: "Spanner columnar engine overview \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/spanner/docs/columnar-engine
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/spanner/docs
source_metadata:
  url: https://docs.cloud.google.com/spanner/docs/columnar-engine
  title: "Spanner columnar engine overview \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
Spanner
Guides
Send feedback
Spanner columnar engine overview
Stay organized with collections
Save and categorize content based on your preferences.
Preview
— Spanner columnar engine
This feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the
Service Specific
Terms .
Pre-GA features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
Note: This feature is available with the Spanner Enterprise edition and
Enterprise Plus edition. For more information, see the Spanner editions overview .
PostgreSQL interface note:
The examples in this topic are intended for GoogleSQL-dialect databases. This feature doesn't support
PostgreSQL interface.
This page provides an overview of the columnar engine for Spanner
and describes how to use it.
Operational databases commonly extract, transform, and load (ETL) data into an
OLAP system for analytics. This system is often part of a data warehouse. With
Data Boost for Spanner , Spanner
already separates analytical compute, which ensures transactional stability.
Columnar engine is a storage technique that analytics systems use to speed
up scans when compared to batch-based scans. Spanner columnar
engine lets you run analytics with significantly improved performance on the
latest operational data. Spanner columnar engine increases scan
performance by up to 200 times, eliminating the need for ETL while maintaining
strong consistency.
Spanner's
Ressi format
uses a partition attributes across (PAX) column-wise layout for efficient scans
within a data block. However, this format colocates all columns of a row within
a given block for fast single-row lookups. Unlike Ressi,
Spanner's columnar engine dedicates runs of blocks to a single
column. This approach is more efficient for sequential scans, as
Spanner only needs to read the columns referenced in the query.
Spanner builds the columnar representation in the background (as
part of compactions), and automatically merges the representation with the
latest updates at query time to provide strong consistency. Queries that
wouldn't benefit from columnar storage can continue to use PAX.
Workloads that would benefit from using columnar engine include the following:
Operational reporting extract up-to-the-second business intelligence from
the latest operational data.
Served analytics power dashboards and custom drill-downs with interactive
latency.
Federated analytics seamlessly combine data from Spanner and
other sources in BigQuery.
Spanner instance backups don't include
the columnar format.
Best practices for using columnar engine
This section describes best practices when using columnar engine.
Large scan optimization
Columnar engine optimizes queries that scan large amounts of data. For smaller
data scans or queries with quickly satisfied LIMIT clauses, row-based scans
might be more efficient.
Essential columns
If you use SELECT * , Spanner reads all columns from columnar
storage. To maximize performance, specify only necessary columns. For example,
SELECT column1, column2 FROM ... .
Performance bottleneck identification
Columnar engine is effective for scan-bound workloads. To identify a scan-bound
workload, check the query plan for a high
latency level in the Table scan node. If your query isn't scan-bound,
prioritize other optimizations first. Columnar engine can provide benefits
later if your optimizations make the query scan-bound.
Optimal columnar coverage
After you enable columnar engine
on a database that already contains data, Spanner's automatic
compaction process converts data to columnar storage asynchronously in the
background. To see how much your query benefits, check the
Columnar read share percentage
in the query plan.
High churn data management
High write rates from updates or random inserts can affect the columnar engine's
performance. Append-only workloads experience minimal impact from using columnar
engine. Compaction is a background process, which typically is spread out over
multiple days, but can happen sooner if the size of the database grows
substantially. Alternatively, design the schema to favor append-only writes at
the split level. For more information, see
sharding of timestamp-ordered data in Spanner .
Workload isolation
There are two techniques that you can use to isolate analytical queries from
transactions:
Use directed reads to route reads to read-only
replicas.
Use Data Boost for federated queries .
Pricing
Billing for the Spanner columnar engine is based on storage
usage. After you enable the Spanner columnar engine and
Spanner completes data compaction, storage usage increases to
include the new columnar representation. Columnar engine provides storage
metrics that let you monitor the impact to storage. For more information, see
Columnar data storage metrics .
Spanner columnar engine isn't impacted by the 8 bytes per cell
overhead .
Preview limitations
Columnar engine only supports the GoogleSQL interface.
What's next
Learn how to enable columnar engine .
Learn how to query columnar data .
Learn how to monitor columnar engine .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
