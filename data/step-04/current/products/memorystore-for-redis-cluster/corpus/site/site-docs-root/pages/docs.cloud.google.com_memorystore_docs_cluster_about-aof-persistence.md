---
title: "About AOF persistence \_|\_ Memorystore for Redis Cluster \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/memorystore/docs/cluster/about-aof-persistence
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/memorystore/docs/cluster
source_metadata:
  url: https://docs.cloud.google.com/memorystore/docs/cluster/about-aof-persistence
  title: "About AOF persistence \_|\_ Memorystore for Redis Cluster \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
Memorystore
Memorystore for Redis Cluster
Guides
Send feedback
About AOF persistence
Stay organized with collections
Save and categorize content based on your preferences.
This page provides an overview of AOF persistence for Memorystore for Redis Cluster.
Memorystore for Redis Cluster also supports RDB persistence, but you must choose either the
AOF or RDB persistence mode, because both can't be enabled at the same time. For
information about choosing between the two persistence modes, see Persistence overview .
For the best possible instance availability, we recommend using a highly available instance
in addition to enabling persistence.
To learn how to enable, disable, and monitor AOF persistence, see Manage persistence .
AOF persistence overview
The Redis AOF (Append Only File) persistence mode prioritizes data durability.
It durably stores data by recording every write command to a log file called the
AOF file. If a system failure or restart occurs, the server replays AOF file
commands sequentially to restore your data. Unlike RDB persistence, AOF
persistence can't be paused.
Note: If you enable or disable persistence for an existing instance, then the instance might need to perform maintenance .
Sync setting
The sync setting ( appendfsync ) for the AOF persistence mode determines how
often the cached data in memory is saved to durable storage. We recommend
keeping the sync setting at 1 second, which is the default. Syncing every second
provides the best compromise between instance performance, and data durability.
Before the AOF logs are saved to durable storage, they are stored in memory by the operating system, and
if a system failure or restart occurs during this time, the writes in memory can
be lost. The sync setting lets you choose how often data is saved to durable
storage, and provides the following options:
always - This option saves data to storage for every write.
everysec - This option saves data to storage every second.
no - This option relies on the operating system to flush data to storage
on its own schedule, which typically happens every 30 seconds.
Choosing to sync for every write provides the best data durability, however this
comes with a performance tradeoff. We recommend syncing every second, which
provides both good data durability and performance.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
