---
title: "Supported versions \_|\_ Memorystore for Valkey \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/memorystore/docs/valkey/supported-versions
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/memorystore/docs/valkey
source_metadata:
  url: https://docs.cloud.google.com/memorystore/docs/valkey/supported-versions
  title: "Supported versions \_|\_ Memorystore for Valkey \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
Memorystore
Memorystore for Valkey
Guides
Send feedback
Supported versions
Stay organized with collections
Save and categorize content based on your preferences.
Memorystore for Valkey is backed by open-source Valkey software.
Memorystore for Valkey supports Valkey versions 7.2, 8.0, and 9.0. The default
version is 9.0.
You can find out which version your instance uses by viewing details about the instance . You can also upgrade the version of an instance to any newer version. For example, you
can upgrade from version 7.2 to 9.0. For a history of Memorystore for Valkey
product updates, see the Release notes .
Important: If you upgrade an instance to version 9.0, then you can't downgrade
the instance to an earlier version.
Current versions
This table shows the supported Valkey versions and when each version was last
updated:
Valkey major version
Last update
9.0
March 11, 2026
8.0
October 2, 2024
7.2
August 30, 2024
Valkey version 9.0
Valkey 9.0's major features focus on performance and scalability enhancements,
including hash field expiration for more granular data management.
Performance improvements include memory prefetching for pipelining commands,
zero-copy responses for large requests, and single instruction, and multiple
data (SIMD) optimizations for BITCOUNT and hyperloglog commands.
The following table outlines Memorystore support of some major features
introduced by Valkey 9.0:
Feature
Description
Hash field expiration
This feature introduces finer-grained control over data expiration for
individual hash fields, rather than just the entire hash key.
Memory prefetching
This feature improves performance by prefetching memory for pipelined
commands, potentially increasing throughput by up to 40%.
Zero-copy responses
This feature reduces overhead by eliminating data copying for large
requests, which can lead to up to a 20% increase in throughput.
SIMD optimizations
This feature uses SIMD instructions to accelerate certain commands like
BITCOUNT and hyperloglog , potentially improving
throughput by up to 200%.
By-polygon support for geospatial indexes
This feature adds support for using polygons in geospatial index
queries.
Valkey version 8.0
The following table outlines Memorystore support of some major
features introduced by Valkey 8.0:
Feature
Description
Asynchronous I/O threading for performance boost
This feature significantly improves performance by enabling parallel processing between the main thread and I/O threads. It offloads I/O tasks to the I/O threads, allowing them to run concurrently with the main thread, and optimizes memory access through efficient command batching.
Reliability improvement for cluster scaling operations
This feature significantly improves the reliability and automation of the Valkey cluster re-sharding process by addressing failures during slot migration. These improvements prevent data loss and cluster inconsistencies, ensuring a more resilient system when failures occur.
Enhanced memory efficiency through key embedding in the main dictionary
This enhancement significantly improves memory efficiency by embedding keys directly within dictionary entries, eliminating the need for separate key pointers. This change reduces memory overhead and enhances performance, particularly for large datasets.
Improved Pub/Sub efficiency by using lightweight cluster messages
This feature introduces a new lightweight cluster message type to enhance the efficiency of Pub/Sub message propagation within a Valkey cluster. The new message type significantly reduces the overhead by minimizing the amount of node information included in each message.
Valkey version 7.2
The following table outlines Memorystore support of some major
features introduced by Valkey 7.2:
Feature
Description
New command
Introduces the WAITAOF command that blocks the client until a specified number
of Redises have synced all previous write commands to the AOF on disk.
Memory optimization
Memory usage is significantly reduced for small list-type and set-type keys, with further optimizations for large sets. Memory management for cluster bus links with many pending messages is improved, and incremental reclamation of OS page cache for RDB files enhances memory efficiency.
Performance optimization
Performance improvements include faster ZRANGE replies with integer scores and optimized double replies, particularly for sorted sets. Multi-key commands in cluster mode now execute more efficiently, and workloads without pipelining see improved command processing.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
