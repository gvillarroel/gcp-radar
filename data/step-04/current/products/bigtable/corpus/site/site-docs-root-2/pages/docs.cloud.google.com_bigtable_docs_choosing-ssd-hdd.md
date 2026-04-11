---
title: "Choose between SSD and HDD storage \_|\_ Bigtable \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/bigtable/docs/choosing-ssd-hdd
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/bigtable/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/bigtable/docs/choosing-ssd-hdd
  title: "Choose between SSD and HDD storage \_|\_ Bigtable \_|\_ Google Cloud Documentation"
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
Choose between SSD and HDD storage
When you create a Bigtable instance, you choose whether its clusters
store data on solid-state drives (SSD) or hard disk drives (HDD):
SSD storage is the most efficient and cost-effective choice for most use
cases.
HDD storage is sometimes appropriate for large datasets that
are not latency-sensitive or are infrequently accessed.
Bigtable instances that use SSD storage support tiered storage
( Preview ). You can enable an infrequent
access storage tier at the table level on SSD clusters where you can store
infrequently accessed data in the most cost-effective way. For more information,
see Tiered storage overview .
Regardless of which type of storage you choose, your data is stored on a
distributed, replicated file system that spans across many physical drives.
The following table compares Bigtable storage types in the context
of tiered storage:
Instance and tier
Node capacity
Expected latency
Operations
Best for
SSD instance, SSD storage tier
5 TB
Write/read: single-digit ms
Write, read, update, delete
High write/read throughput and low latency workloads
SSD instance, tiered storage enabled
32 TB (up to 5 TB SSD)
Write: single-digit ms
Read: low double-digit ms
Write, read, update, delete
Large datasets with infrequently accessed data
HDD instance, HDD tier
16 TB
Write: single-digit ms
Read: low double-digit ms
Write, read, update, delete
Large datasets with latency-insensitive workloads
For more information about the performance of Bigtable storage
types, see Understand performance .
When in doubt, choose SSD storage
There are several reasons why it's usually best to use SSD storage for your
Bigtable cluster:
SSD is significantly faster and has more predictable performance than HDD.
In a Bigtable cluster, SSD storage delivers significantly lower
latencies for both reads and writes than HDD storage.
HDD throughput is much more limited than SSD throughput. In a cluster that
uses HDD storage, it's possible to reach the maximum throughput before
CPU usage reaches 100%, a situation you can monitor using the disk load metric. To increase throughput, you must add more nodes, but
the cost of the additional nodes might exceed your savings from using HDD
storage. SSD storage does not have this limitation, because it offers much
more throughput per node—generally, a cluster that uses SSD storage reaches
maximum throughput only when it is using all available CPU and memory.
Individual row reads on HDD are very slow. Because of disk seek time, HDD
storage supports only 5% of the read rows per second of SSD storage. Large
multi-row scans, however, are not as adversely impacted.
SSD storage supports a tiered storage option
for infrequently accessed data .
One potential drawback of SSD storage is that it requires more nodes in your
clusters based on the amount of data that you store. In
practice, though, you might need those extra nodes so that your clusters can
keep up with incoming traffic, not only to support the amount of data that
you're storing.
Use cases for HDD storage
HDD storage is suitable for use cases that meet all of the following criteria:
Your workloads are write-heavy and data-driven.
Your workloads are latency-insensitive.
Your data doesn't support a user-facing application.
Your batch workloads consist mainly of scans and writes with occasional
random reads of a small number of rows or point reads.
You don't plan to use Data Boost ,
tiered storage, or
2x node scaling .
For example, if you plan to store extensive historical data for a large number
of remote-sensing devices and then use the data to generate daily reports, the
cost savings for HDD storage might justify the performance tradeoff. On the
other hand, if you plan to use the data to display a real-time dashboard, it
probably would not make sense to use HDD storage—reads would be much more
frequent in this case, and reads that are not scans are much slower
with HDD storage.
Switching between SSD and HDD storage
When you create a Bigtable instance, your choice of
SSD or HDD storage for the instance is permanent. You cannot use the
Google Cloud console to change the type of storage that is used for the instance.
If you want to change the storage type that a table is stored on, use the
backups feature :
Create or plan to use an instance that uses the storage type you want.
Create a backup of the table.
Restore from the backup to a new table in the other instance.
What's next
Create an instance with SSD or HDD storage .
Learn about tiered storage .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
