---
title: "Redis tier capabilities \_|\_ Memorystore for Redis \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/memorystore/docs/redis/redis-tiers
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/memorystore/docs/redis
source_metadata:
  url: https://docs.cloud.google.com/memorystore/docs/redis/redis-tiers
  title: "Redis tier capabilities \_|\_ Memorystore for Redis \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
Memorystore
Memorystore for Redis
Guides
Send feedback
Redis tier capabilities
Stay organized with collections
Save and categorize content based on your preferences.
Note: If you are looking for the Memorystore for Redis Cluster documentation,
see Memorystore for Redis Cluster overview .
This page describes the differences between the available Redis tiers.
Memorystore for Redis supports Basic and Standard
Tiers. The Basic Tier is best suited for applications that use Redis as a cache
and can withstand a cold restart and full cache flush. Standard Tier instances
provide High Availability
using replication, read replicas, and automatic failover.
It is not possible to upgrade from Basic Tier to Standard Tier or the other way
around. If you want to move data from an existing Basic Tier instance to a new
Standard Tier instance, use import and export
to move your data.
Tier architecture
The following diagrams show the architectures for the
Memorystore for Redis service tiers.
Basic Tier
One Redis node
Ephemeral cache
Standard Tier
Provides High Availability
with replication
Fails over to replica in the case of primary node failure
Standard Tier with read replicas
Provides High Availability
with replication
Read replicas allow for distributed reads
Feature comparison
Specifications
Basic Tier
Standard Tier (read replicas disabled)
Standard Tier (read replicas enabled)
Description
Provides a cache with no replication
Provides redundancy and availability using replication
Provides redundancy and availability using replication to backup data,
and multiple Read replicas to increase read throughput
Max Redis primary size
300 GB
300 GB
300 GB
Max network bandwidth
16 Gbps
16 Gbps
16 Gbps total for writes. 16 Gbps per node for reads. 1
I/O threads
Yes 2
Yes 2
Yes 2
Scale primary size
Yes
Yes
Yes
Scale number of read replicas
No
No
Yes
Cross-zone replication
No
Yes 3
Yes 3
Automatic failover
No
Yes
Yes
Read replicas
No
No
Yes
In-transit encryption
Yes
Yes
Yes
Maintenance window
Yes
Yes
Yes
Cloud Monitoring
Yes
Yes
Yes
1 The maximum write throughput is 16 Gbps. Read throughput is dependent on the number of nodes (read replicas) in the instance, including the primary node. For example, if you have an instance with 1 primary node and 2 read replicas, the total read throughput is 48 Gbps.
2 I/O threads are only available on M3 instances or higher running
Redis version 6.x. For more information, see Redis version 6.x .
3
For more information about region-specific considerations, see
Geography and regions .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
